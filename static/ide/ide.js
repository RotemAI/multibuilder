const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css","./ide3.css"])))=>i.map(i=>d[i]);
var vl=Object.defineProperty;var lo=e=>{throw TypeError(e)};var hl=(e,t,n)=>t in e?vl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ye=(e,t,n)=>hl(e,typeof t!="symbol"?t+"":t,n),ri=(e,t,n)=>t.has(e)||lo("Cannot "+n);var u=(e,t,n)=>(ri(e,t,"read from private field"),n?n.call(e):t.get(e)),V=(e,t,n)=>t.has(e)?lo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Z=(e,t,n,r)=>(ri(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),le=(e,t,n)=>(ri(e,t,"access private method"),n);var Us=Array.isArray,pl=Array.prototype.indexOf,zs=Array.prototype.includes,Ws=Array.from,Ho=Object.defineProperty,pn=Object.getOwnPropertyDescriptor,Bo=Object.getOwnPropertyDescriptors,_l=Object.prototype,gl=Array.prototype,Oi=Object.getPrototypeOf,co=Object.isExtensible;function Cr(e){return typeof e=="function"}const ml=()=>{};function bl(e){return e()}function mi(e){for(var t=0;t<e.length;t++)e[t]()}function Ko(){var e,t,n=new Promise((r,s)=>{e=r,t=s});return{promise:n,resolve:e,reject:t}}function yl(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const Oe=2,lr=4,vs=8,Ri=1<<24,Nt=16,yt=32,rn=64,bi=128,Di=256,bt=512,Pe=1024,Ae=2048,Pt=4096,Ze=8192,ot=16384,pr=32768,Is=1<<25,gn=65536,Os=1<<17,xl=1<<18,_r=1<<19,Uo=1<<20,Bt=1<<25,Fn=65536,Rs=1<<21,Zn=1<<22,_n=1<<23,Ut=Symbol("$state"),Wo=Symbol("component"),qo=Symbol("legacy props"),wl=Symbol(""),Cs=Symbol("attributes"),yi=Symbol("class"),xi=Symbol("style"),Pr=Symbol("text"),Ts=Symbol("form reset"),hs=new class extends Error{constructor(){super(...arguments);Ye(this,"name","StaleReactionError");Ye(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var Lo;const Fi=!!((Lo=globalThis.document)!=null&&Lo.contentType)&&globalThis.document.contentType.includes("xml"),$l=1,kl=2,Go=4,Sl=8,El=16,Cl=1,Tl=2,Yo=4,Nl=8,Ml=16,Pl=1,Al=2,Te=Symbol("uninitialized"),Jo="http://www.w3.org/1999/xhtml",zl="http://www.w3.org/2000/svg",Il="@attach";function Ol(){console.warn("https://svelte.dev/e/derived_inert")}function Rl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Dl(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Xo(e){return e===this.v}function Fl(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Zo(e){return!Fl(e,this.v)}function Qo(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Ll(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function jl(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Vl(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Hl(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Bl(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Kl(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Ul(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Wl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function ql(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Gl(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Yl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let gr=!1;function Jl(){gr=!0}let me=null;function cr(e){me=e}function at(e,t=!1,n){me={p:me,i:!1,c:null,e:null,s:e,x:null,r:oe,l:gr&&!t?{s:null,u:null,$:[]}:null}}function lt(e){var t=me,n=t.e;if(n!==null){t.e=null;for(var r of n)xa(r)}return t.i=!0,me=t.p,Li(e)}function Li(e={}){return Ho(e,Wo,{value:!0}),e}function mr(){return!gr||me!==null&&me.l===null}let Tn=[];function ea(){var e=Tn;Tn=[],mi(e)}function Kt(e){if(Tn.length===0&&!Lr){var t=Tn;queueMicrotask(()=>{t===Tn&&ea()})}Tn.push(e)}function Xl(){for(;Tn.length>0;)ea()}const Zl=-7169;function $e(e,t){e.f=e.f&Zl|t}function ji(e){(e.f&bt)!==0||e.deps===null?$e(e,Pe):$e(e,Pt)}function ta(e){if(e!==null)for(const t of e)(t.f&Oe)===0||(t.f&Fn)===0||(t.f^=Fn,ta(t.deps))}function na(e,t,n){(e.f&Ae)!==0?t.add(e):(e.f&Pt)!==0&&n.add(e),ta(e.deps),$e(e,Pe)}let Ss=!1;function Ql(e){var t=Ss;try{return Ss=!1,[e(),Ss]}finally{Ss=t}}function ra(e,t){if(t){const n=document.body;e.autofocus=!0,Kt(()=>{document.activeElement===n&&e.focus()})}}let uo=!1;function ec(){uo||(uo=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[Ts])==null||t.call(n)})},{capture:!0}))}function br(e){var t=ae,n=oe;xt(null),wt(null);try{return e()}finally{xt(t),wt(n)}}function Vi(e,t,n,r=n){e.addEventListener(t,()=>br(n));const s=e[Ts];s?e[Ts]=()=>{s(),r(!0)}:e[Ts]=()=>r(!0),ec()}function sa(e,t,n,r){const s=mr()?ur:Hi;var i=e.filter(h=>!h.settled),o=t.map(s);if(n.length===0&&i.length===0){r(o);return}var a=oe,c=tc(),f=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(h=>h.promise)):null;function d(h){if((a.f&ot)===0){c();try{r([...o,...h])}catch(p){Ht(p,a)}Ds()}}var _=ia();if(n.length===0){f.then(()=>d([])).finally(_);return}function v(){Promise.all(n.map(h=>nc(h))).then(d).catch(h=>Ht(h,a)).finally(_)}f?f.then(()=>{c(),v(),Ds()}):v()}function tc(){var e=oe,t=ae,n=me,r=U;return function(i=!0){wt(e),xt(t),cr(n),i&&(e.f&ot)===0&&(r==null||r.activate(),r==null||r.apply())}}function Ds(e=!0){wt(null),xt(null),cr(null),e&&(U==null||U.deactivate())}function ia(){var e=oe,t=e.b,n=U,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function ur(e){var t=Oe|Ae;return oe!==null&&(oe.f|=_r),{ctx:me,deps:null,effects:null,equals:Xo,f:t,fn:e,reactions:null,rv:0,v:Te,wv:0,parent:oe,ac:null}}const Ar=Symbol("obsolete");function nc(e,t,n){let r=oe;r===null&&Ll();var s=void 0,i=sn(Te),o=!ae,a=new Set;return gc(()=>{var h,p;var c=oe,f=Ko();s=f.promise;try{Promise.resolve(e()).then(f.resolve,x=>{x!==hs&&f.reject(x)}).finally(Ds)}catch(x){f.reject(x),Ds()}var d=U;if(o){if((c.f&pr)!==0)var _=ia();if((h=r.b)!=null&&h.is_rendered())(p=d.async_deriveds.get(c))==null||p.reject(Ar);else for(const x of a.values())x.reject(Ar);a.add(f),d.async_deriveds.set(c,f)}const v=(x,w=void 0)=>{_==null||_(),a.delete(f),w!==Ar&&(d.activate(),w?(i.f|=_n,fr(i,w)):((i.f&_n)!==0&&(i.f^=_n),fr(i,x)),d.deactivate())};f.promise.then(v,x=>v(null,x||"unknown"))}),qs(()=>{for(const c of a)c.reject(Ar)}),new Promise(c=>{function f(d){function _(){d===s?c(i):f(s)}d.then(_,_)}f(s)})}function st(e){const t=ur(e);return Ca(t),t}function Hi(e){const t=ur(e);return t.equals=Zo,t}function rc(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)Ve(t[n])}}function Bi(e){var t,n=oe,r=e.parent;if(!on&&r!==null&&e.v!==Te&&(r.f&(ot|Ze))!==0)return Ol(),e.v;wt(r);try{e.f&=~Fn,rc(e),t=Pa(e)}finally{wt(n)}return t}function oa(e){var t=Bi(e);if(!e.equals(t)&&(e.wv=Na(),(!(U!=null&&U.is_fork)||e.deps===null)&&(U!==null?(U.capture(e,t,!0),Fr==null||Fr.capture(e,t,!0)):e.v=t,e.deps===null))){$e(e,Pe);return}on||(je!==null?(qi()||U!=null&&U.is_fork)&&je.set(e,t):ji(e))}function sc(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&br(()=>{n.ac.abort(hs),n.ac=null}),n.fn!==null&&(n.teardown=ml),Br(n,0),Gi(n))}function aa(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&dr(t)}let si=null,Yn=null,U=null,Fr=null,je=null,wi=null,Lr=!1,ii=!1,Xn=null,Ns=null;var fo=0;let ic=1;var tr,vn,Pn,nr,rr,sr,Qt,ir,nt,Wr,en,Ct,Lt,or,An,de,$i,zr,ki,la,ca,Jn,oc,Ir;const Hs=class Hs{constructor(){V(this,de);Ye(this,"id",ic++);V(this,tr,!1);Ye(this,"linked",!0);V(this,vn,null);V(this,Pn,null);Ye(this,"async_deriveds",new Map);Ye(this,"current",new Map);Ye(this,"previous",new Map);V(this,nr,new Set);V(this,rr,new Set);V(this,sr,0);V(this,Qt,new Map);V(this,ir,null);V(this,nt,[]);V(this,Wr,[]);V(this,en,new Set);V(this,Ct,new Set);V(this,Lt,new Map);V(this,or,new Set);Ye(this,"is_fork",!1);V(this,An,!1);Yn===null?si=Yn=this:(Z(Yn,Pn,this),Z(this,vn,Yn)),Yn=this}skip_effect(t){u(this,Lt).has(t)||u(this,Lt).set(t,{d:[],m:[]}),u(this,or).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=u(this,Lt).get(t);if(r){u(this,Lt).delete(t);for(var s of r.d)$e(s,Ae),n(s);for(s of r.m)$e(s,Pt),n(s)}u(this,or).add(t)}capture(t,n,r=!1){t.v!==Te&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&_n)===0&&(this.current.set(t,[n,r]),je==null||je.set(t,n)),this.is_fork||(t.v=n)}activate(){U=this}deactivate(){U=null,je=null}flush(){try{ii=!0,U=this,le(this,de,zr).call(this)}finally{fo=0,wi=null,Xn=null,Ns=null,ii=!1,U=null,je=null,Wt.clear()}}discard(){var t;for(const n of u(this,rr))n(this);u(this,rr).clear();for(const n of this.async_deriveds.values())n.reject(Ar);le(this,de,Ir).call(this),(t=u(this,ir))==null||t.resolve()}register_created_effect(t){u(this,Wr).push(t)}increment(t,n){if(Z(this,sr,u(this,sr)+1),t){let r=u(this,Qt).get(n)??0;u(this,Qt).set(n,r+1)}}decrement(t,n){if(Z(this,sr,u(this,sr)-1),t){let r=u(this,Qt).get(n)??0;r===1?u(this,Qt).delete(n):u(this,Qt).set(n,r-1)}u(this,An)||(Z(this,An,!0),Kt(()=>{Z(this,An,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)u(this,en).add(r);for(const r of n)u(this,Ct).add(r);t.clear(),n.clear()}oncommit(t){u(this,nr).add(t)}ondiscard(t){u(this,rr).add(t)}settled(){return(u(this,ir)??Z(this,ir,Ko())).promise}static ensure(){if(U===null){const t=U=new Hs;!ii&&!Lr&&Kt(()=>{u(t,tr)||t.flush()})}return U}apply(){{je=null;return}}schedule(t){var s;if(wi=t,(s=t.b)!=null&&s.is_pending&&(t.f&(lr|vs|Ri))!==0&&(t.f&pr)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Xn!==null&&n===oe&&(ae===null||(ae.f&Oe)===0))return;if((r&(rn|yt))!==0){if((r&Pe)===0)return;n.f^=Pe}}u(this,nt).push(n)}};tr=new WeakMap,vn=new WeakMap,Pn=new WeakMap,nr=new WeakMap,rr=new WeakMap,sr=new WeakMap,Qt=new WeakMap,ir=new WeakMap,nt=new WeakMap,Wr=new WeakMap,en=new WeakMap,Ct=new WeakMap,Lt=new WeakMap,or=new WeakMap,An=new WeakMap,de=new WeakSet,$i=function(){if(this.is_fork)return!0;for(const r of u(this,Qt).keys()){for(var t=r,n=!1;t.parent!==null;){if(u(this,Lt).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},zr=function(){var c,f,d,_;Z(this,tr,!0),fo++>1e3&&(le(this,de,Ir).call(this),lc());for(const v of u(this,en))u(this,Ct).delete(v),$e(v,Ae),this.schedule(v);for(const v of u(this,Ct))$e(v,Pt),this.schedule(v);const t=u(this,nt);Z(this,nt,[]),this.apply();var n=Xn=[],r=[],s=Ns=[];for(const v of t)try{le(this,de,ki).call(this,v,n,r)}catch(h){throw da(v),le(this,de,$i).call(this)||this.discard(),h}if(U=null,s.length>0){var i=Hs.ensure();for(const v of s)i.schedule(v)}if(Xn=null,Ns=null,le(this,de,$i).call(this)){le(this,de,Jn).call(this,r),le(this,de,Jn).call(this,n);for(const[v,h]of u(this,Lt))fa(v,h);s.length>0&&le(c=U,de,zr).call(c);return}const o=le(this,de,la).call(this);if(o){le(this,de,Jn).call(this,r),le(this,de,Jn).call(this,n),le(f=o,de,ca).call(f,this);return}u(this,en).clear(),u(this,Ct).clear();for(const v of u(this,nr))v(this);u(this,nr).clear(),Fr=this,vo(r),vo(n),Fr=null,(d=u(this,ir))==null||d.resolve();var a=U;if(u(this,sr)===0&&(u(this,nt).length===0||a!==null)&&le(this,de,Ir).call(this),u(this,nt).length>0)if(a!==null){const v=a;u(v,nt).push(...u(this,nt).filter(h=>!u(v,nt).includes(h)))}else a=this;a!==null&&(Wt.clear(),le(_=a,de,zr).call(_))},ki=function(t,n,r){t.f^=Pe;for(var s=t.first;s!==null;){var i=s.f,o=(i&(yt|rn))!==0,a=o&&(i&Pe)!==0,c=a||(i&Ze)!==0||u(this,Lt).has(s);if(!c&&s.fn!==null){o?s.f^=Pe:(i&lr)!==0?n.push(s):_s(s)&&((i&Nt)!==0&&u(this,Ct).add(s),dr(s));var f=s.first;if(f!==null){s=f;continue}}for(;s!==null;){var d=s.next;if(d!==null){s=d;break}s=s.parent}}},la=function(){for(var t=u(this,vn);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=u(t,vn)}return null},ca=function(t){var r;for(const[s,i]of t.current)!this.previous.has(s)&&t.previous.has(s)&&this.previous.set(s,t.previous.get(s)),this.current.set(s,i);for(const[s,i]of t.async_deriveds){const o=this.async_deriveds.get(s);o&&i.promise.then(o.resolve).catch(o.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,en),u(t,Ct));const n=s=>{var i=s.reactions;if(i!==null&&!((s.f&Oe)!==0&&(s.f&(Ae|Pt))===0))for(const c of i){var o=c.f;if((o&Oe)!==0)n(c);else{var a=c;o&(Zn|Nt)&&!this.async_deriveds.has(a)&&(u(this,Ct).delete(a),$e(a,Ae),this.schedule(a))}}};for(const s of this.current.keys())n(s);this.oncommit(()=>t.discard()),le(r=t,de,Ir).call(r),U=this,le(this,de,zr).call(this)},Jn=function(t){for(var n=0;n<t.length;n+=1)na(t[n],u(this,en),u(this,Ct))},oc=function(){var _;for(let v=si;v!==null;v=u(v,Pn)){var t=v.id<this.id,n=[];for(const[h,[p,x]]of this.current){if(v.current.has(h)){var r=v.current.get(h)[0];if(t&&p!==r)v.current.set(h,[p,x]);else continue}n.push(h)}if(t)for(const[h,p]of this.async_deriveds){const x=v.async_deriveds.get(h);x&&p.promise.then(x.resolve).catch(x.reject)}var s=[...v.current.keys()].filter(h=>!v.current.get(h)[1]);if(!(!u(v,tr)||s.length===0)){var i=s.filter(h=>!this.current.has(h));if(i.length===0)t&&v.discard();else if(n.length>0){if(t)for(const h of u(this,or))v.unskip_effect(h,p=>{var x;(p.f&(Nt|Zn))!==0?v.schedule(p):le(x=v,de,Jn).call(x,[p])});v.activate();var o=new Set,a=new Map;for(var c of n)ua(c,i,o,a);a=new Map;var f=[...v.current].filter(([h,p])=>{const x=this.current.get(h);return x?x[0]!==p[0]||x[1]!==p[1]:!0}).map(([h])=>h);if(f.length>0)for(const h of u(this,Wr))(h.f&(ot|Ze|Os))===0&&Ki(h,f,a)&&((h.f&(Zn|Nt))!==0?($e(h,Ae),v.schedule(h)):u(v,en).add(h));if(u(v,nt).length>0&&!u(v,An)){v.apply();for(var d of u(v,nt))le(_=v,de,ki).call(_,d,[],[]);Z(v,nt,[])}v.deactivate()}}}},Ir=function(){if(this.linked){var t=u(this,vn),n=u(this,Pn);t===null?si=n:Z(t,Pn,n),n===null?Yn=t:Z(n,vn,t),this.linked=!1}};let Ln=Hs;function ac(e){var t=Lr;Lr=!0;try{for(var n;;){if(Xl(),U===null)return n;U.flush()}}finally{Lr=t}}function lc(){try{Kl()}catch(e){Ht(e,wi)}}let Et=null;function vo(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(ot|Ze))===0&&_s(r)&&(Et=new Set,dr(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&ka(r),(Et==null?void 0:Et.size)>0)){Wt.clear();for(const s of Et){if((s.f&(ot|Ze))!==0)continue;const i=[s];let o=s.parent;for(;o!==null;)Et.has(o)&&(Et.delete(o),i.push(o)),o=o.parent;for(let a=i.length-1;a>=0;a--){const c=i[a];(c.f&(ot|Ze))===0&&dr(c)}}Et.clear()}}Et=null}}function ua(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const s of e.reactions){const i=s.f;(i&Oe)!==0?ua(s,t,n,r):(i&(Zn|Nt))!==0&&(i&Ae)===0&&Ki(s,t,r)&&($e(s,Ae),Ui(s))}}function Ki(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const s of e.deps){if(zs.call(t,s))return!0;if((s.f&Oe)!==0&&Ki(s,t,n))return n.set(s,!0),!0}return n.set(e,!1),!1}function Ui(e){U.schedule(e)}function fa(e,t){if(!((e.f&yt)!==0&&(e.f&Pe)!==0)){(e.f&Ae)!==0?t.d.push(e):(e.f&Pt)!==0&&t.m.push(e),$e(e,Pe);for(var n=e.first;n!==null;)fa(n,t),n=n.next}}function da(e){$e(e,Pe);for(var t=e.first;t!==null;)da(t),t=t.next}let Fs=new Set;const Wt=new Map;let va=!1;function sn(e,t){var n={f:0,v:e,reactions:null,equals:Xo,rv:0,wv:0};return n}function O(e,t){const n=sn(e);return Ca(n),n}function cc(e,t=!1,n=!0){var s;const r=sn(e);return t||(r.equals=Zo),gr&&n&&me!==null&&me.l!==null&&((s=me.l).s??(s.s=[])).push(r),r}function g(e,t,n=!1){ae!==null&&(!Mt||(ae.f&Os)!==0)&&mr()&&(ae.f&(Oe|Nt|Zn|Os))!==0&&(qt===null||!qt.has(e))&&Gl();let r=n?pe(t):t;return fr(e,r,Ns)}function fr(e,t,n=null){if(!e.equals(t)){on?Wt.set(e,t):Wt.has(e)||Wt.set(e,e.v);var r=Ln.ensure();if(r.capture(e,t),(e.f&Oe)!==0){const s=e;(e.f&Ae)!==0&&Bi(s),je===null&&ji(s)}e.wv=Na(),ha(e,Ae,n),mr()&&oe!==null&&(oe.f&Pe)!==0&&(oe.f&(yt|rn))===0&&(_t===null?yc([e]):_t.push(e)),!r.is_fork&&Fs.size>0&&!va&&uc()}return t}function uc(){va=!1;for(const e of Fs){(e.f&Pe)!==0&&$e(e,Pt);let t;try{t=_s(e)}catch{t=!0}t&&dr(e)}Fs.clear()}function ho(e,t=1){var n=l(e),r=t===1?n++:n--;return g(e,n),r}function jr(e){g(e,e.v+1)}function ha(e,t,n){var r=e.reactions;if(r!==null)for(var s=mr(),i=r.length,o=0;o<i;o++){var a=r[o],c=a.f;if(!(!s&&a===oe)){var f=(c&Ae)===0;if(f&&$e(a,t),(c&Os)!==0)Fs.add(a);else if((c&Oe)!==0){var d=a;je==null||je.delete(d),(c&Fn)===0&&(c&bt&&(oe===null||(oe.f&Rs)===0)&&(a.f|=Fn),ha(d,Pt,n))}else if(f){var _=a;(c&Nt)!==0&&Et!==null&&Et.add(_),n!==null?n.push(_):Ui(_)}}}}function pe(e){if(typeof e!="object"||e===null||Ut in e||Wo in e)return e;const t=Oi(e);if(t!==_l&&t!==gl)return e;var n=new Map,r=Us(e),s=O(0),i=Dn,o=a=>{if(Dn===i)return a();var c=ae,f=Dn;xt(null),go(i);var d=a();return xt(c),go(f),d};return r&&n.set("length",O(e.length)),new Proxy(e,{defineProperty(a,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Wl();var d=n.get(c);return d===void 0?o(()=>{var _=O(f.value);return n.set(c,_),_}):g(d,f.value,!0),!0},deleteProperty(a,c){var f=n.get(c);if(f===void 0){if(c in a){const d=o(()=>O(Te));n.set(c,d),jr(s)}}else g(f,Te),jr(s);return!0},get(a,c,f){var h;if(c===Ut)return e;var d=n.get(c),_=c in a;if(d===void 0&&(!_||(h=pn(a,c))!=null&&h.writable)&&(d=o(()=>{var p=pe(_?a[c]:Te),x=O(p);return x}),n.set(c,d)),d!==void 0){var v=l(d);return v===Te?void 0:v}return Reflect.get(a,c,f)},getOwnPropertyDescriptor(a,c){var f=Reflect.getOwnPropertyDescriptor(a,c);if(f&&"value"in f){var d=n.get(c);d&&(f.value=l(d))}else if(f===void 0){var _=n.get(c),v=_==null?void 0:_.v;if(_!==void 0&&v!==Te)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return f},has(a,c){var v;if(c===Ut)return!0;var f=n.get(c),d=f!==void 0&&f.v!==Te||Reflect.has(a,c);if(f!==void 0||oe!==null&&(!d||(v=pn(a,c))!=null&&v.writable)){f===void 0&&(f=o(()=>{var h=d?pe(a[c]):Te,p=O(h);return p}),n.set(c,f));var _=l(f);if(_===Te)return!1}return d},set(a,c,f,d){var T;var _=n.get(c),v=c in a;if(r&&c==="length")for(var h=f;h<_.v;h+=1){var p=n.get(h+"");p!==void 0?g(p,Te):h in a&&(p=o(()=>O(Te)),n.set(h+"",p))}if(_===void 0)(!v||(T=pn(a,c))!=null&&T.writable)&&(_=o(()=>O(void 0)),g(_,pe(f)),n.set(c,_));else{v=_.v!==Te;var x=o(()=>pe(f));g(_,x)}var w=Reflect.getOwnPropertyDescriptor(a,c);if(w!=null&&w.set&&w.set.call(d,f),!v){if(r&&typeof c=="string"){var S=n.get("length"),z=Number(c);Number.isInteger(z)&&z>=S.v&&g(S,z+1)}jr(s)}return!0},ownKeys(a){l(s);var c=Reflect.ownKeys(a).filter(_=>{var v=n.get(_);return v===void 0||v.v!==Te});for(var[f,d]of n)d.v!==Te&&!(f in a)&&c.push(f);return c},setPrototypeOf(){ql()}})}function po(e){try{if(e!==null&&typeof e=="object"&&Ut in e)return e[Ut]}catch{}return e}function pa(e,t){return Object.is(po(e),po(t))}var Ls,_a,ga,ma;function fc(){if(Ls===void 0){Ls=window,_a=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;ga=pn(t,"firstChild").get,ma=pn(t,"nextSibling").get,co(e)&&(e[yi]=void 0,e[Cs]=null,e[xi]=void 0,e.__e=void 0),co(n)&&(n[Pr]=void 0)}}function nn(e=""){return document.createTextNode(e)}function jn(e){return ga.call(e)}function ps(e){return ma.call(e)}function $(e,t){return jn(e)}function D(e,t=!1){{var n=jn(e);return n instanceof Comment&&n.data===""?ps(n):n}}function ce(e,t=!1){return jn(e)}function m(e,t=1,n=!1){let r=e;for(;t--;)r=ps(r);return r}function dc(e){e.textContent=""}function ba(){return!1}function Wi(e,t,n){return t==null||t===Jo?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function vc(e){var t=oe;if(t===null)return ae.f|=_n,e;if((t.f&pr)===0&&(t.f&lr)===0)throw e;Ht(e,t)}function Ht(e,t){if(!(t!==null&&(t.f&ot)!==0)){for(;t!==null;){if((t.f&bi)!==0&&(t.f&(ot|Is))===0){if((t.f&pr)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function ya(e){oe===null&&(ae===null&&Bl(),Hl()),on&&Vl()}function hc(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function zt(e,t){var n=oe;n!==null&&(n.f&Ze)!==0&&(e|=Ze);var r={ctx:me,deps:null,nodes:null,f:e|Ae|bt,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};U==null||U.register_created_effect(r);var s=r;if((e&lr)!==0)Xn!==null?Xn.push(r):Ln.ensure().schedule(r);else if(t!==null){try{dr(r)}catch(o){throw Ve(r),o}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&_r)===0&&(s=s.first,(e&Nt)!==0&&(e&gn)!==0&&s!==null&&(s.f|=gn))}if(s!==null&&(s.parent=n,n!==null&&hc(s,n),ae!==null&&(ae.f&Oe)!==0&&(e&rn)===0)){var i=ae;(i.effects??(i.effects=[])).push(s)}return r}function qi(){return ae!==null&&!Mt}function qs(e){const t=zt(vs,null);return $e(t,Pe),t.teardown=e,t}function Gt(e){ya();var t=oe.f,n=!ae&&(t&yt)!==0&&me!==null&&!me.i;if(n){var r=me;(r.e??(r.e=[])).push(e)}else return xa(e)}function xa(e){return zt(lr|Uo,e)}function pc(e){return ya(),zt(vs|Uo,e)}function _c(e){Ln.ensure();const t=zt(rn|_r,e);return(n={})=>new Promise(r=>{n.outro?Rn(t,()=>{Ve(t),r(void 0)}):(Ve(t),r(void 0))})}function Gs(e){return zt(lr,e)}function gc(e){return zt(Zn|_r,e)}function Ys(e,t=0){return zt(vs|t,e)}function Q(e,t=[],n=[],r=[]){sa(r,t,n,s=>{zt(vs,()=>{e(...s.map(l))})})}function yr(e,t=0){var n=zt(Nt|t,e);return n}function wa(e,t=0){var n=zt(Ri|t,e);return n}function rt(e){return zt(yt|_r,e)}function $a(e){var t=e.teardown;if(t!==null){const n=on,r=ae;_o(!0),xt(null);try{t.call(null)}catch(s){Ht(s,e.parent)}finally{_o(n),xt(r)}}}function Gi(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const s=n.ac;s!==null&&br(()=>{s.abort(hs)});var r=n.next;(n.f&rn)!==0?n.parent=null:Ve(n,t),n=r}}function mc(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&yt)===0&&Ve(t),t=n}}function Ve(e,t=!0){var n=!1;(t||(e.f&xl)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(bc(e.nodes.start,e.nodes.end),n=!0),e.f|=Is,Gi(e,t&&!n),Br(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const i of r)i.stop();$a(e),e.f^=Is,e.f|=ot;var s=e.parent;s!==null&&s.first!==null&&ka(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function bc(e,t){for(;e!==null;){var n=e===t?null:ps(e);e.remove(),e=n}}function ka(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Rn(e,t,n=!0){var r=[];e.f|=Di,Sa(e,r,!0);var s=()=>{n&&Ve(e),t&&t()},i=r.length;if(i>0){var o=()=>--i||s();for(var a of r)a.out(o)}else s()}function Sa(e,t,n){if((e.f&Ze)===0){e.f^=Ze;var r=e.nodes&&e.nodes.t;if(r!==null)for(const a of r)(a.is_global||n)&&t.push(a);for(var s=e.first;s!==null;){var i=s.next;if((s.f&rn)===0){var o=(s.f&gn)!==0||(s.f&yt)!==0&&(e.f&Nt)!==0;Sa(s,t,o?n:!1)}s=i}}}function js(e){e.f&=~Di,Ea(e,!0)}function Ea(e,t){if((e.f&Di)===0&&(e.f&Ze)!==0){e.f^=Ze,(e.f&Pe)===0&&($e(e,Ae),Ln.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,s=(n.f&gn)!==0||(n.f&yt)!==0;Ea(n,s?t:!1),n=r}var i=e.nodes&&e.nodes.t;if(i!==null)for(const o of i)(o.is_global||t)&&o.in()}}function Yi(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var s=n===r?null:ps(n);t.append(n),n=s}}let Ms=!1,on=!1;function _o(e){on=e}let ae=null,Mt=!1;function xt(e){ae=e}let oe=null;function wt(e){oe=e}let qt=null;function Ca(e){ae!==null&&(qt??(qt=new Set)).add(e)}let it=null,vt=0,_t=null;function yc(e){_t=e}let Ta=1,Nn=0,Dn=Nn;function go(e){Dn=e}function Na(){return++Ta}function _s(e){var t=e.f;if((t&Ae)!==0)return!0;if(t&Oe&&(e.f&=~Fn),(t&Pt)!==0){for(var n=e.deps,r=n.length,s=0;s<r;s++){var i=n[s];if(_s(i)&&oa(i),i.wv>e.wv)return!0}(t&bt)!==0&&je===null&&$e(e,Pe)}return!1}function Ma(e,t,n=!0){var r=e.reactions;if(r!==null&&!(qt!==null&&qt.has(e)))for(var s=0;s<r.length;s++){var i=r[s];(i.f&Oe)!==0?Ma(i,t,!1):t===i&&(n?$e(i,Ae):(i.f&Pe)!==0&&$e(i,Pt),Ui(i))}}function Pa(e){var t=it,n=vt,r=_t,s=ae,i=qt,o=me,a=Mt,c=Dn,f=e.f;it=null,vt=0,_t=null,ae=(f&(yt|rn))===0?e:null,qt=null,cr(e.ctx),Mt=!1,Dn=++Nn,e.ac!==null&&(br(()=>{e.ac.abort(hs)}),e.ac=null);try{e.f|=Rs;var d=e.fn,_=d();e.f|=pr;var v=mo(e);if(mr()&&_t!==null&&!Mt&&v!==null&&(e.f&(Oe|Pt|Ae))===0)for(var h=0;h<_t.length;h++)Ma(_t[h],e);if(s!==null&&s!==e){if(Nn++,s.deps!==null)for(let p=0;p<n;p+=1)s.deps[p].rv=Nn;if(t!==null)for(const p of t)p.rv=Nn;_t!==null&&(r===null?r=_t:r.push(..._t))}return(e.f&_n)!==0&&(e.f^=_n),_}catch(p){return mo(e),vc(p)}finally{e.f^=Rs,it=t,vt=n,_t=r,ae=s,qt=i,cr(o),Mt=a,Dn=c}}function mo(e){var s;var t=e.deps,n=U==null?void 0:U.is_fork;if(it!==null){var r;if(n||Br(e,vt),t!==null&&vt>0)for(t.length=vt+it.length,r=0;r<it.length;r++)t[vt+r]=it[r];else e.deps=t=it;if(qi()&&(e.f&bt)!==0)for(r=vt;r<t.length;r++)((s=t[r]).reactions??(s.reactions=[])).push(e)}else!n&&t!==null&&vt<t.length&&(Br(e,vt),t.length=vt);return t}function xc(e,t){let n=t.reactions;if(n!==null){var r=pl.call(n,e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(t.f&Oe)!==0&&(it===null||!zs.call(it,t))){var i=t;(i.f&bt)!==0&&(i.f^=bt,i.f&=~Fn),i.v!==Te&&ji(i),i.ac!==null&&br(()=>{i.ac.abort(hs),i.ac=null,$e(i,Ae)}),sc(i),Br(i,0)}}function Br(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)xc(e,n[r])}function dr(e){var t=e.f;if((t&ot)===0){$e(e,Pe);var n=oe,r=Ms;oe=e,Ms=(t&(yt|rn))===0;try{(t&(Nt|Ri))!==0?mc(e):Gi(e),$a(e);var s=Pa(e);e.teardown=typeof s=="function"?s:null,e.wv=Ta;var i}finally{Ms=r,oe=n}}}async function wc(){await Promise.resolve(),ac()}function l(e){var t=e.f,n=(t&Oe)!==0;if(ae!==null&&!Mt){var r=oe!==null&&(oe.f&ot)!==0;if(!r&&(qt===null||!qt.has(e))){var s=ae.deps;if((ae.f&Rs)!==0)e.rv<Nn&&(e.rv=Nn,it===null&&s!==null&&s[vt]===e?vt++:it===null?it=[e]:it.push(e));else{ae.deps??(ae.deps=[]),zs.call(ae.deps,e)||ae.deps.push(e);var i=e.reactions;i===null?e.reactions=[ae]:zs.call(i,ae)||i.push(ae)}}}if(on&&Wt.has(e))return Wt.get(e);if(n){var o=e;if(on){var a=o.v;return((o.f&Pe)===0&&o.reactions!==null||za(o))&&(a=Bi(o)),Wt.set(o,a),a}var c=(o.f&bt)===0&&!Mt&&ae!==null&&(Ms||(ae.f&bt)!==0),f=(o.f&pr)===0;_s(o)&&(c&&(o.f|=bt),oa(o)),c&&!f&&(aa(o),Aa(o))}if(je!=null&&je.has(e))return je.get(e);if((e.f&_n)!==0)throw e.v;return e.v}function Aa(e){if(e.f|=bt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Oe)!==0&&(t.f&bt)===0&&(aa(t),Aa(t))}function za(e){if(e.v===Te)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Wt.has(t)||(t.f&Oe)!==0&&za(t))return!0;return!1}function Yt(e){var t=Mt;try{return Mt=!0,e()}finally{Mt=t}}function En(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Ut in e)Si(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&Ut in n&&Si(n)}}}function Si(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Si(e[r],t)}catch{}const n=Oi(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Bo(n);for(let s in r){const i=r[s].get;if(i)try{i.call(e)}catch{}}}}}function $c(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const kc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Sc(e){return kc.includes(e)}const Ec={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Cc(e){return e=e.toLowerCase(),Ec[e]??e}const Tc=["touchstart","touchmove"];function Nc(e){return Tc.includes(e)}const Mn=Symbol("events"),Ia=new Set,Ei=new Set;function Oa(e,t,n,r={}){function s(i){if(r.capture||Ci.call(t,i),!i.cancelBubble)return br(()=>n==null?void 0:n.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Kt(()=>{t.addEventListener(e,s,r)}):t.addEventListener(e,s,r),s}function vr(e,t,n,r,s){var i={capture:r,passive:s},o=Oa(e,t,n,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&qs(()=>{t.removeEventListener(e,o,i)})}function F(e,t,n){(t[Mn]??(t[Mn]={}))[e]=n}function It(e){for(var t=0;t<e.length;t++)Ia.add(e[t]);for(var n of Ei)n(e)}let oi=null,ai=!1;function Ci(e){var x,w;var t=this,n=t.ownerDocument,r=e.type,s=((x=e.composedPath)==null?void 0:x.call(e))||[],i=s[0]||e.target;oi=e,ai||(ai=!0,setTimeout(()=>{ai=!1,oi=null}));var o=0,a=oi===e&&e[Mn];if(a){var c=s.indexOf(a);if(c!==-1&&(t===document||t===window)){e[Mn]=t;return}var f=s.indexOf(t);if(f===-1)return;c<=f&&(o=c)}if(i=s[o]||e.target,i!==t){Ho(e,"currentTarget",{configurable:!0,get(){return i||n}});var d=ae,_=oe;xt(null),wt(null);try{for(var v,h=[];i!==null&&i!==t;){try{var p=(w=i[Mn])==null?void 0:w[r];p!=null&&(!i.disabled||e.target===i)&&p.call(i,e)}catch(S){v?h.push(S):v=S}if(e.cancelBubble)break;o++,i=o<s.length?s[o]:null}if(v){for(let S of h)queueMicrotask(()=>{throw S});throw v}}finally{e[Mn]=t,delete e.currentTarget,xt(d),wt(_)}}}var jo;const li=((jo=globalThis==null?void 0:globalThis.window)==null?void 0:jo.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Mc(e){return(li==null?void 0:li.createHTML(e))??e}function Ra(e){var t=Wi("template");return t.innerHTML=Mc(e.replaceAll("<!>","<!---->")),t.content}function Kr(e,t){var n=oe;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function I(e,t){var n=(t&Pl)!==0,r=(t&Al)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=Ra(i?e:"<!>"+e),n||(s=jn(s)));var o=r||_a?document.importNode(s,!0):s.cloneNode(!0);if(n){var a=jn(o),c=o.lastChild;Kr(a,c)}else Kr(o,o);return o}}function Pc(e,t,n="svg"){var r=!e.startsWith("<!>"),s=`<${n}>${r?e:"<!>"+e}</${n}>`,i;return()=>{if(!i){var o=Ra(s),a=jn(o);i=jn(a)}var c=i.cloneNode(!0);return Kr(c,c),c}}function Da(e,t){return Pc(e,t,"svg")}function q(){var e=document.createDocumentFragment(),t=document.createComment(""),n=nn();return e.append(t,n),Kr(t,n),e}function y(e,t){e!==null&&e.before(t)}function Ac(e){let t=0,n=sn(0),r;return()=>{qi()&&(l(n),Ys(()=>(t===0&&(r=Yt(()=>e(()=>jr(n)))),t+=1,()=>{Kt(()=>{t-=1,t===0&&(r==null||r(),r=void 0,jr(n))})})))}}var zc=gn|_r;function Ic(e,t,n,r){new Oc(e,t,n,r)}var gt,Ii,mt,zn,Je,ut,Xe,ft,jt,In,hn,ar,qr,Gr,tn,Bs,_e,Rc,Dc,Ti,Fc,Ni,Or,Ps,Mi,Pi;class Oc{constructor(t,n,r,s){V(this,_e);Ye(this,"parent");Ye(this,"is_pending",!1);Ye(this,"transform_error");V(this,gt);V(this,Ii,null);V(this,mt);V(this,zn);V(this,Je);V(this,ut,null);V(this,Xe,null);V(this,ft,null);V(this,jt,null);V(this,In,0);V(this,hn,0);V(this,ar,!1);V(this,qr,new Set);V(this,Gr,new Set);V(this,tn,null);V(this,Bs,Ac(()=>(Z(this,tn,sn(u(this,In))),()=>{Z(this,tn,null)})));var i;Z(this,gt,t),Z(this,mt,n),Z(this,zn,o=>{var a=oe;a.b=this,a.f|=bi,r(o)}),this.parent=oe.b,this.transform_error=s??((i=this.parent)==null?void 0:i.transform_error)??(o=>o),Z(this,Je,yr(()=>{le(this,_e,Ni).call(this)},zc))}defer_effect(t){na(t,u(this,qr),u(this,Gr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,mt).pending}update_pending_count(t,n){le(this,_e,Mi).call(this,t,n),Z(this,In,u(this,In)+t),!(!u(this,tn)||u(this,ar))&&(Z(this,ar,!0),Kt(()=>{Z(this,ar,!1),u(this,tn)&&fr(u(this,tn),u(this,In))}))}get_effect_pending(){return u(this,Bs).call(this),l(u(this,tn))}error(t){if(!u(this,mt).onerror&&!u(this,mt).failed)throw t;U!=null&&U.is_fork?(u(this,ut)&&U.skip_effect(u(this,ut)),u(this,Xe)&&U.skip_effect(u(this,Xe)),u(this,ft)&&U.skip_effect(u(this,ft)),U.oncommit(()=>{le(this,_e,Pi).call(this,t)})):le(this,_e,Pi).call(this,t)}}gt=new WeakMap,Ii=new WeakMap,mt=new WeakMap,zn=new WeakMap,Je=new WeakMap,ut=new WeakMap,Xe=new WeakMap,ft=new WeakMap,jt=new WeakMap,In=new WeakMap,hn=new WeakMap,ar=new WeakMap,qr=new WeakMap,Gr=new WeakMap,tn=new WeakMap,Bs=new WeakMap,_e=new WeakSet,Rc=function(){try{Z(this,ut,rt(()=>u(this,zn).call(this,u(this,gt))))}catch(t){this.error(t)}},Dc=function(t){const n=u(this,mt).failed,{reset:r,invoke_onerror:s}=le(this,_e,Ti).call(this,t);Kt(s),n&&Z(this,ft,rt(()=>{n(u(this,gt),()=>t,()=>r)}))},Ti=function(t){var n=!1,r=!1;const s=()=>{if(n){Dl();return}n=!0,r&&Yl(),u(this,ft)!==null&&Rn(u(this,ft),()=>{Z(this,ft,null)}),le(this,_e,Ps).call(this,()=>{le(this,_e,Ni).call(this)})};return{reset:s,invoke_onerror:()=>{var o,a;try{r=!0,(a=(o=u(this,mt)).onerror)==null||a.call(o,t,s),r=!1}catch(c){Ht(c,u(this,Je)&&u(this,Je).parent)}}}},Fc=function(){const t=u(this,mt).pending;t&&(this.is_pending=!0,Z(this,Xe,rt(()=>t(u(this,gt)))),Kt(()=>{var n=Z(this,jt,document.createDocumentFragment()),r=nn(),s=!1;if(n.append(r),Z(this,ut,le(this,_e,Ps).call(this,()=>{try{return rt(()=>u(this,zn).call(this,r))}catch(i){try{this.error(i),s=!0}catch(o){Ht(o,u(this,Je).parent)}return null}})),u(this,ut)===null){Z(this,jt,null),s&&le(this,_e,Or).call(this,U);return}u(this,hn)===0&&(u(this,gt).before(n),Z(this,jt,null),Rn(u(this,Xe),()=>{Z(this,Xe,null)}),le(this,_e,Or).call(this,U))}))},Ni=function(){try{if(this.is_pending=this.has_pending_snippet(),Z(this,hn,0),Z(this,In,0),Z(this,ut,rt(()=>{u(this,zn).call(this,u(this,gt))})),u(this,hn)>0){var t=Z(this,jt,document.createDocumentFragment());Yi(u(this,ut),t);const n=u(this,mt).pending;Z(this,Xe,rt(()=>n(u(this,gt))))}else le(this,_e,Or).call(this,U)}catch(n){this.error(n)}},Or=function(t){this.is_pending=!1,t.transfer_effects(u(this,qr),u(this,Gr))},Ps=function(t){var n=oe,r=ae,s=me;wt(u(this,Je)),xt(u(this,Je)),cr(u(this,Je).ctx);try{return Ln.ensure(),t()}finally{wt(n),xt(r),cr(s)}},Mi=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&le(r=this.parent,_e,Mi).call(r,t,n);return}Z(this,hn,u(this,hn)+t),u(this,hn)===0&&(le(this,_e,Or).call(this,n),u(this,Xe)&&Rn(u(this,Xe),()=>{Z(this,Xe,null)}),u(this,jt)&&(u(this,gt).before(u(this,jt)),Z(this,jt,null)))},Pi=function(t){u(this,ut)&&(Ve(u(this,ut)),Z(this,ut,null)),u(this,Xe)&&(Ve(u(this,Xe)),Z(this,Xe,null)),u(this,ft)&&(Ve(u(this,ft)),Z(this,ft,null));let n=u(this,mt).failed;const r=s=>{const{reset:i,invoke_onerror:o}=le(this,_e,Ti).call(this,s);o(),n&&Z(this,ft,le(this,_e,Ps).call(this,()=>{try{return rt(()=>{var a=oe;a.b=this,a.f|=bi,n(u(this,gt),()=>s,()=>i)})}catch(a){return Ht(a,u(this,Je).parent),null}}))};Kt(()=>{var s;try{s=this.transform_error(t)}catch(i){Ht(i,u(this,Je)&&u(this,Je).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,i=>Ht(i,u(this,Je)&&u(this,Je).parent)):r(s)})};function te(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Pr]??(e[Pr]=e.nodeValue))&&(e[Pr]=n,e.nodeValue=`${n}`)}function Lc(e,t){return jc(e,t)}const Es=new Map;function jc(e,{target:t,anchor:n,props:r={},events:s,context:i,intro:o=!0,transformError:a}){fc();var c=void 0,f=_c(()=>{var d=n??t.appendChild(nn());Ic(d,{pending:()=>{}},h=>{at({});var p=me;i&&(p.c=i),s&&(r.$$events=s),c=e(h,r)||Li(),lt()},a);var _=new Set,v=h=>{for(var p=0;p<h.length;p++){var x=h[p];if(!_.has(x)){_.add(x);var w=Nc(x);for(const T of[t,document]){var S=Es.get(T);S===void 0&&(S=new Map,Es.set(T,S));var z=S.get(x);z===void 0?(T.addEventListener(x,Ci,{passive:w}),S.set(x,1)):S.set(x,z+1)}}}};return v(Ws(Ia)),Ei.add(v),()=>{var w;for(var h of _)for(const S of[t,document]){var p=Es.get(S),x=p.get(h);--x==0?(S.removeEventListener(h,Ci),p.delete(h),p.size===0&&Es.delete(S)):p.set(h,x)}Ei.delete(v),d!==n&&((w=d.parentNode)==null||w.removeChild(d))}});return Vc.set(c,f),c}let Vc=new WeakMap;var Tt,Vt,dt,On,Yr,Jr,Ks;class Js{constructor(t,n=!0){Ye(this,"anchor");V(this,Tt,new Map);V(this,Vt,new Map);V(this,dt,new Map);V(this,On,new Set);V(this,Yr,!0);V(this,Jr,t=>{if(u(this,Tt).has(t)){var n=u(this,Tt).get(t),r=u(this,Vt).get(n);if(r)js(r),u(this,On).delete(n);else{var s=u(this,dt).get(n);s&&(js(s.effect),u(this,Vt).set(n,s.effect),u(this,dt).delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,o]of u(this,Tt)){if(u(this,Tt).delete(i),i===t)break;const a=u(this,dt).get(o);a&&(Ve(a.effect),u(this,dt).delete(o))}for(const[i,o]of u(this,Vt)){if(i===n||u(this,On).has(i))continue;const a=()=>{if(Array.from(u(this,Tt).values()).includes(i)){var f=document.createDocumentFragment();Yi(o,f),f.append(nn()),u(this,dt).set(i,{effect:o,fragment:f})}else Ve(o);u(this,On).delete(i),u(this,Vt).delete(i)};u(this,Yr)||!r?(u(this,On).add(i),Rn(o,a,!1)):a()}}});V(this,Ks,t=>{u(this,Tt).delete(t);const n=Array.from(u(this,Tt).values());for(const[r,s]of u(this,dt))n.includes(r)||(Ve(s.effect),u(this,dt).delete(r))});this.anchor=t,Z(this,Yr,n)}ensure(t,n){var r=U,s=ba();if(n&&!u(this,Vt).has(t)&&!u(this,dt).has(t))if(s){var i=document.createDocumentFragment(),o=nn();i.append(o),u(this,dt).set(t,{effect:rt(()=>n(o)),fragment:i})}else u(this,Vt).set(t,rt(()=>n(this.anchor)));if(u(this,Tt).set(r,t),s){for(const[a,c]of u(this,Vt))a===t?r.unskip_effect(c):r.skip_effect(c);for(const[a,c]of u(this,dt))a===t?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(u(this,Jr)),r.ondiscard(u(this,Ks))}else u(this,Jr).call(this,r)}}Tt=new WeakMap,Vt=new WeakMap,dt=new WeakMap,On=new WeakMap,Yr=new WeakMap,Jr=new WeakMap,Ks=new WeakMap;function H(e,t,n=!1){var r=new Js(e),s=n?gn:0;function i(o,a){r.ensure(o,a)}yr(()=>{var o=!1;t((a,c=0)=>{o=!0,i(c,a)}),o||i(-1,null)},s)}const Hc=Symbol("NaN");function Bc(e,t,n){var r=new Js(e),s=!mr();yr(()=>{var i=t();i!==i&&(i=Hc),s&&i!==null&&typeof i=="object"&&(i={}),r.ensure(i,n)})}function Kc(e,t){return t}function Uc(e,t,n){for(var r=[],s=t.length,i,o=t.length,a=0;a<s;a++){let _=t[a];Rn(_,()=>{if(i){if(i.pending.delete(_),i.done.add(_),i.pending.size===0){var v=e.outrogroups;Ai(e,Ws(i.done)),v.delete(i),v.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var c=r.length===0&&n!==null&&e.pending.size===0;if(c){var f=n,d=f.parentNode;dc(d),d.append(f),e.items.clear()}Ai(e,t,!c)}else i={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(i)}function Ai(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const o of e.pending.values())for(const a of o)r.add(e.items.get(a).e)}for(var s=0;s<t.length;s++){var i=t[s];if(r!=null&&r.has(i)){i.f|=Bt;const o=document.createDocumentFragment();Yi(i,o)}else Ve(t[s],n)}}var bo;function We(e,t,n,r,s,i=null){var o=e,a=new Map,c=(t&Go)!==0;if(c){var f=e;o=f.appendChild(nn())}var d=null,_=Hi(()=>{var T=n();return Us(T)?T:T==null?[]:Ws(T)}),v,h=new Map,p=!0;function x(T){(z.effect.f&ot)===0&&(z.pending.delete(T),z.fallback=d,Wc(z,v,o,t,r),d!==null&&(v.length===0?(d.f&Bt)===0?js(d):(d.f^=Bt,Rr(d,null,o)):Rn(d,()=>{d=null})))}function w(T){z.pending.delete(T)}var S=yr(()=>{v=l(_);for(var T=v.length,M=new Set,P=U,E=ba(),N=0;N<T;N+=1){var G=v[N],Y=r(G,N),j=p?null:a.get(Y);j?(j.v&&fr(j.v,G),j.i&&fr(j.i,N),E&&P.unskip_effect(j.e)):(j=qc(a,p?o:bo??(bo=nn()),G,Y,N,s,t,n),p||(j.e.f|=Bt),a.set(Y,j)),M.add(Y)}if(T===0&&i&&!d&&(p?d=rt(()=>i(o)):(d=rt(()=>i(bo??(bo=nn()))),d.f|=Bt)),T>M.size&&jl(),!p)if(h.set(P,M),E){for(const[A,B]of a)M.has(A)||P.skip_effect(B.e);P.oncommit(x),P.ondiscard(w)}else x(P);l(_)}),z={effect:S,items:a,pending:h,outrogroups:null,fallback:d};p=!1}function Tr(e){for(;e!==null&&(e.f&yt)===0;)e=e.next;return e}function Wc(e,t,n,r,s){var j,A,B,L,J,be,fe,ze,X;var i=(r&Sl)!==0,o=t.length,a=e.items,c=Tr(e.effect.first),f,d=null,_,v=[],h=[],p,x,w,S;if(i)for(S=0;S<o;S+=1)p=t[S],x=s(p,S),w=a.get(x).e,(w.f&Bt)===0&&((A=(j=w.nodes)==null?void 0:j.a)==null||A.measure(),(_??(_=new Set)).add(w));for(S=0;S<o;S+=1){if(p=t[S],x=s(p,S),w=a.get(x).e,e.outrogroups!==null)for(const ue of e.outrogroups)ue.pending.delete(w),ue.done.delete(w);if((w.f&Ze)!==0&&(js(w),i&&((L=(B=w.nodes)==null?void 0:B.a)==null||L.unfix(),(_??(_=new Set)).delete(w))),(w.f&Bt)!==0)if(w.f^=Bt,w===c)Rr(w,null,n);else{var z=d?d.next:c;w===e.effect.last&&(e.effect.last=w.prev),w.prev&&(w.prev.next=w.next),w.next&&(w.next.prev=w.prev),fn(e,d,w),fn(e,w,z),Rr(w,z,n),d=w,v=[],h=[],c=Tr(d.next);continue}if(w!==c){if(f!==void 0&&f.has(w)){if(v.length<h.length){var T=h[0],M;d=T.prev;var P=v[0],E=v[v.length-1];for(M=0;M<v.length;M+=1)Rr(v[M],T,n);for(M=0;M<h.length;M+=1)f.delete(h[M]);fn(e,P.prev,E.next),fn(e,d,P),fn(e,E,T),c=T,d=E,S-=1,v=[],h=[]}else f.delete(w),Rr(w,c,n),fn(e,w.prev,w.next),fn(e,w,d===null?e.effect.first:d.next),fn(e,d,w),d=w;continue}for(v=[],h=[];c!==null&&c!==w;)(f??(f=new Set)).add(c),h.push(c),c=Tr(c.next);if(c===null)continue}(w.f&Bt)===0&&v.push(w),d=w,c=Tr(w.next)}if(e.outrogroups!==null){for(const ue of e.outrogroups)ue.pending.size===0&&(Ai(e,Ws(ue.done)),(J=e.outrogroups)==null||J.delete(ue));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||f!==void 0){var N=[];if(f!==void 0)for(w of f)(w.f&Ze)===0&&N.push(w);for(;c!==null;)(c.f&Ze)===0&&c!==e.fallback&&N.push(c),c=Tr(c.next);var G=N.length;if(G>0){var Y=(r&Go)!==0&&o===0?n:null;if(i){for(S=0;S<G;S+=1)(fe=(be=N[S].nodes)==null?void 0:be.a)==null||fe.measure();for(S=0;S<G;S+=1)(X=(ze=N[S].nodes)==null?void 0:ze.a)==null||X.fix()}Uc(e,N,Y)}}i&&Kt(()=>{var ue,ye;if(_!==void 0)for(w of _)(ye=(ue=w.nodes)==null?void 0:ue.a)==null||ye.apply()})}function qc(e,t,n,r,s,i,o,a){var c=(o&$l)!==0?(o&El)===0?cc(n,!1,!1):sn(n):null,f=(o&kl)!==0?sn(s):null;return{v:c,i:f,e:rt(()=>(i(t,c??n,f??s,a),()=>{e.delete(r)}))}}function Rr(e,t,n){if(e.nodes)for(var r=e.nodes.start,s=e.nodes.end,i=t&&(t.f&Bt)===0?t.nodes.start:n;r!==null;){var o=ps(r);if(i.before(r),r===s)return;r=o}}function fn(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function ne(e,t,n,r,s){var a,c;if((a=t.$$host)!=null&&a.$$shadowRoot){const f=Wi("slot");y(e,f);return}var i=(c=t.$$slots)==null?void 0:c[n],o=!1;i===!0&&(i=t.children,o=!0),i===void 0||i(e,o?()=>r:r)}function yo(e,t,n){var r=new Js(e);yr(()=>{var s=t()??null;r.ensure(s,s&&(i=>n(i,s)))},gn)}function Gc(e,t,n,r,s,i){var o=null,a=e,c=new Js(a,!1);yr(()=>{const f=t()||null;var d=zl;if(f===null){c.ensure(null,null);return}return c.ensure(f,_=>{if(f){if(o=Wi(f,d),Kr(o,o),r){var v=null,h=o.appendChild(nn());r(o,h),v==null||v.remove()}oe.nodes.end=o,_.before(o)}}),()=>{}},gn),qs(()=>{})}function Yc(e,t){var n=void 0,r;wa(()=>{n!==(n=t())&&(r&&(Ve(r),r=null),n&&(r=rt(()=>{Gs(()=>n(e))})))})}function Fa(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=Fa(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Jc(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=Fa(e))&&(r&&(r+=" "),r+=t);return r}function Xc(e){return typeof e=="object"?Jc(e):e??""}const xo=[...` 	
\r\f \v\uFEFF`];function Zc(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var s of Object.keys(n))if(n[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,o=0;(o=r.indexOf(s,o))>=0;){var a=o+i;(o===0||xo.includes(r[o-1]))&&(a===r.length||xo.includes(r[a]))?r=(o===0?"":r.substring(0,o))+r.substring(a+1):o=a}}return r===""?null:r}function wo(e,t=!1){var n=t?" !important;":";",r="";for(var s of Object.keys(e)){var i=e[s];i!=null&&i!==""&&(r+=" "+s+": "+i+n)}return r}function ci(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Qc(e,t){if(t){var n="",r,s;if(Array.isArray(t)?(r=t[0],s=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var i=!1,o=0,a=!1,c=[];r&&c.push(...Object.keys(r).map(ci)),s&&c.push(...Object.keys(s).map(ci));var f=0,d=-1;const x=e.length;for(var _=0;_<x;_++){var v=e[_];if(a?v==="/"&&e[_-1]==="*"&&(a=!1):i?i===v&&(i=!1):v==="/"&&e[_+1]==="*"?a=!0:v==='"'||v==="'"?i=v:v==="("?o++:v===")"&&o--,!a&&i===!1&&o===0){if(v===":"&&d===-1)d=_;else if(v===";"||_===x-1){if(d!==-1){var h=ci(e.substring(f,d).trim());if(!c.includes(h)){v!==";"&&_++;var p=e.substring(f,_).trim();n+=" "+p+";"}}f=_+1,d=-1}}}}return r&&(n+=wo(r)),s&&(n+=wo(s,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function At(e,t,n,r,s,i){var o=e[yi];if(o!==n||o===void 0){var a=Zc(n,r,i);a==null?e.removeAttribute("class"):t?e.className=a:e.setAttribute("class",a),e[yi]=n}else if(i&&s!==i)for(var c in i){var f=!!i[c];(s==null||f!==!!s[c])&&e.classList.toggle(c,f)}return i}function ui(e,t={},n,r){for(var s in n){var i=n[s];t[s]!==i&&(n[s]==null?e.style.removeProperty(s):e.style.setProperty(s,i,r))}}function Vr(e,t,n,r){var s=e[xi];if(s!==t){var i=Qc(t,r);i==null?e.removeAttribute("style"):e.style.cssText=i,e[xi]=t}else r&&(Array.isArray(r)?(ui(e,n==null?void 0:n[0],r[0]),ui(e,n==null?void 0:n[1],r[1],"important")):ui(e,n,r));return r}function La(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function $o(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,ja(e,!n||"__value"in e))}function ja(e,t){var n=e.__defaultValue,r=e.multiple,s=r?n??[]:null;if(!(r&&!Us(s))){var i=e.selectedIndex,o=t&&r?new Set(e.selectedOptions):null;for(var a of e.options){var c=er(a);La(a,r?s.includes(c):pa(c,n))}if(t)if(o!==null)for(a of e.options){var f=o.has(a);a.selected!==f&&(a.selected=f)}else e.selectedIndex!==i&&(e.selectedIndex=i)}}function hr(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Us(t))return Rl();for(var r of e.options)r.selected=t.includes(er(r));return}for(r of e.options){var s=er(r);if(pa(s,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Qn(e){var t=new MutationObserver(n=>{n.every(eu)||("__defaultValue"in e&&ja(e,!1),"__value"in e&&hr(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),qs(()=>{t.disconnect()})}function zi(e,t,n=t){var r=new WeakSet,s=!0;Vi(e,"change",i=>{var o=i?"[selected]":":checked",a;if(e.multiple)a=[].map.call(e.querySelectorAll(o),er);else{var c=e.querySelector(o)??e.querySelector("option:not([disabled])");a=c&&er(c)}n(a),e.__value=a,U!==null&&r.add(U)}),Gs(()=>{var i=t();if(e===document.activeElement){var o=U;if(r.has(o))return}if(hr(e,i,s),s&&i===void 0){var a=e.querySelector(":checked");a!==null&&(i=er(a),n(i))}e.__value=i,s=!1})}function er(e){return"__value"in e?e.__value:e.value}function eu(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const Nr=Symbol("class"),Mr=Symbol("style"),Va=Symbol("is custom element"),Ha=Symbol("is html"),tu=Fi?"input":"INPUT",nu=Fi?"option":"OPTION",Ba=Fi?"select":"SELECT";function ve(e,t,n,r){var s=Ka(e);s[t]!==(s[t]=n)&&(t==="loading"&&(e[wl]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Ua(e).has(t)?e[t]=n:e.setAttribute(t,n))}function ru(e,t,n,r,s=!1,i=!1){var o=Ka(e),a=o[Va],c=!o[Ha],f=t||{},d=e.nodeName===nu,_=e.nodeName===Ba;for(var v in t)!(v in n)&&v[0]+v[1]!=="$$"&&(n[v]=null);n.class?n.class=Xc(n.class):n[Nr]&&(n.class=null),n[Mr]&&(n.style??(n.style=null));var h=Ua(e);if(e.nodeName===tu&&"type"in n&&("value"in n||"__value"in n)){var p=n.type;(p!==f.type||p===void 0&&e.hasAttribute("type"))&&(f.type=p,ve(e,"type",p))}for(const P in n){let E=n[P];if(d&&P==="value"&&E==null){e.value=e.__value="",f[P]=E;continue}if(P==="class"){var x=e.namespaceURI==="http://www.w3.org/1999/xhtml";At(e,x,E,r,t==null?void 0:t[Nr],n[Nr]),f[P]=E,f[Nr]=n[Nr];continue}if(P==="style"){Vr(e,E,t==null?void 0:t[Mr],n[Mr]),f[P]=E,f[Mr]=n[Mr];continue}var w=f[P];if(!(E===w&&!(E===void 0&&e.hasAttribute(P)))){f[P]=E;var S=P[0]+P[1];if(S!=="$$")if(S==="on"){const N={},G="$$"+P;let Y=P.slice(2);var z=Sc(Y);if($c(Y)&&(Y=Y.slice(0,-7),N.capture=!0),!z&&w){if(E!=null)continue;e.removeEventListener(Y,f[G],N),f[G]=null}if(z)F(Y,e,E),It([Y]);else if(E!=null){let j=function(A){f[P].call(this,A)};f[G]=Oa(Y,e,j,N)}}else if(P==="style")ve(e,P,E);else if(P==="autofocus")ra(e,!!E);else if(!a&&(P==="__value"||P==="value"&&E!=null))e.value=e.__value=E;else if(P==="selected"&&d)La(e,E);else{var T=P;c||(T=Cc(T));var M=T==="defaultValue"||T==="defaultChecked";if(_&&T==="defaultValue")continue;if(E==null&&!a&&!M)if(o[P]=null,T==="value"||T==="checked"){let N=e;const G=t===void 0;if(T==="value"){let Y=N.defaultValue;N.removeAttribute(T),N.defaultValue=Y,N.value=N.__value=G?Y:null}else{let Y=N.defaultChecked;N.removeAttribute(T),N.defaultChecked=Y,N.checked=G?Y:!1}}else e.removeAttribute(P);else M||(a||typeof E!="string")&&h.has(T)?(e[T]=E,T in o&&(o[T]=Te)):typeof E!="function"&&ve(e,T,E)}}}return f}function ko(e,t,n=[],r=[],s=[],i,o=!1,a=!1){sa(s,n,r,c=>{var f=void 0,d={},_=e.nodeName===Ba,v=!1;if(wa(()=>{var p=t(...c.map(l)),x=ru(e,f,p,i,o,a);if(v&&_){var w=e;"defaultValue"in p&&$o(w,p.defaultValue),"value"in p&&hr(w,p.value)}for(let z of Object.getOwnPropertySymbols(d))p[z]||Ve(d[z]);for(let z of Object.getOwnPropertySymbols(p)){var S=p[z];z.description===Il&&(!f||S!==f[z])&&(d[z]&&Ve(d[z]),d[z]=rt(()=>Yc(e,()=>S))),x[z]=S}f=x}),_){var h=e;Gs(()=>{var p=f;"defaultValue"in p&&$o(h,p.defaultValue),hr(h,p.value,!0),Qn(h)})}v=!0})}function Ka(e){return e[Cs]??(e[Cs]={[Va]:e.nodeName.includes("-"),[Ha]:e.namespaceURI===Jo})}var So=new Map;function Ua(e){var t=e.getAttribute("is")||e.nodeName,n=So.get(t);if(n)return n;So.set(t,n=new Set);for(var r,s=e,i=Element.prototype;i!==s;){r=Bo(s);for(var o in r)r[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&n.add(o);s=Oi(s)}return n}function Le(e,t,n=t){var r=new WeakSet;Vi(e,"input",async s=>{var i=s?e.defaultValue:e.value;if(i=fi(e)?di(i):i,n(i),U!==null&&r.add(U),await wc(),i!==(i=t())){var o=e.selectionStart,a=e.selectionEnd,c=e.value.length;if(e.value=i??"",a!==null){var f=e.value.length;o===a&&a===c&&f>c?(e.selectionStart=f,e.selectionEnd=f):(e.selectionStart=o,e.selectionEnd=Math.min(a,f))}}}),Yt(t)==null&&e.value&&(n(fi(e)?di(e.value):e.value),U!==null&&r.add(U)),Ys(()=>{var s=t();if(e===document.activeElement){var i=U;if(r.has(i))return}fi(e)&&s===di(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function su(e,t,n=t){Vi(e,"change",r=>{var s=r?e.defaultChecked:e.checked;n(s)}),Yt(t)==null&&n(e.checked),Ys(()=>{var r=t();e.checked=!!r})}function fi(e){var t=e.type;return t==="number"||t==="range"}function di(e){return e===""?null:+e}function vi(e,t){return e===t||(e==null?void 0:e[Ut])===t}function Ur(e=Li(),t,n,r){var s=me.r,i=oe;return Gs(()=>{var o,a;return Ys(()=>{o=a,a=[],Yt(()=>{vi(n(...a),e)||(t(e,...a),o&&vi(n(...o),e)&&t(null,...o))})}),()=>{let c=i;for(;c!==s&&c.parent!==null&&c.parent.f&Is;)c=c.parent;const f=()=>{a&&vi(n(...a),e)&&t(null,...a)},d=c.teardown;c.teardown=()=>{f(),d==null||d()}}}),e}function Wa(e=!1){const t=me,n=t.l.u;if(!n)return;let r=()=>En(t.s);if(e){let s=0,i={};const o=ur(()=>{let a=!1;const c=t.s;for(const f in c)c[f]!==i[f]&&(i[f]=c[f],a=!0);return a&&s++,s});r=()=>l(o)}n.b.length&&pc(()=>{Eo(t,r),mi(n.b)}),Gt(()=>{const s=Yt(()=>n.m.map(bl));return()=>{for(const i of s)typeof i=="function"&&i()}}),n.a.length&&Gt(()=>{Eo(t,r),mi(n.a)})}function Eo(e,t){if(e.l.s)for(const n of e.l.s)l(n);t()}function iu(e){var t=sn(0);return function(){return arguments.length===1?(g(t,l(t)+1),arguments[0]):(l(t),e())}}const ou={get(e,t){if(!e.exclude.includes(t))return l(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=oe;try{wt(e.parent_effect),e.special[t]=Ne({get[t](){return e.props[t]}},t,Yo)}finally{wt(r)}}return e.special[t](n),ho(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),ho(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ee(e,t){return new Proxy({props:e,exclude:t,special:{},version:sn(0),parent_effect:oe},ou)}const au={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Cr(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let s=e.props[r];Cr(s)&&(s=s());const i=pn(s,t);if(i&&i.set)return i.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Cr(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const s=pn(r,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===Ut||t===qo)return!1;for(let n of e.props)if(Cr(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(Cr(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function re(...e){return new Proxy({props:e},au)}function Ne(e,t,n,r){var M;var s=!gr||(n&Tl)!==0,i=(n&Nl)!==0,o=(n&Ml)!==0,a=r,c=!0,f=void 0,d=()=>o&&s?(f??(f=ur(r)),l(f)):(c&&(c=!1,a=o?Yt(r):r),a);let _;if(i){var v=Ut in e||qo in e;_=((M=pn(e,t))==null?void 0:M.set)??(v&&t in e?P=>e[t]=P:void 0)}var h,p=!1;i?[h,p]=Ql(()=>e[t]):h=e[t],h===void 0&&r!==void 0&&(h=d(),_&&(s&&Ul(),_(h)));var x;if(s?x=()=>{var P=e[t];return P===void 0?d():(c=!0,P)}:x=()=>{var P=e[t];return P!==void 0&&(a=void 0),P===void 0?a:P},s&&(n&Yo)===0)return x;if(_){var w=e.$$legacy;return(function(P,E){return arguments.length>0?((!s||!E||w||p)&&_(E?x():P),P):x()})}var S=!1,z=((n&Cl)!==0?ur:Hi)(()=>(S=!1,x()));i&&l(z);var T=oe;return(function(P,E){if(arguments.length>0){const N=E?l(z):s&&i?pe(P):P;return g(z,N),S=!0,a!==void 0&&(a=N),P}return on&&S||(T.f&ot)!==0?z.v:l(z)})}function gs(e){me===null&&Qo(),gr&&me.l!==null?lu(me).m.push(e):Gt(()=>{const t=Yt(e);if(typeof t=="function")return t})}function Ji(e){me===null&&Qo(),gs(()=>()=>Yt(e))}function lu(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const cu="5";var Vo;typeof window<"u"&&((Vo=window.__svelte??(window.__svelte={})).v??(Vo.v=new Set)).add(cu);const Cn=()=>window.__IDE_BOOTSTRAP__||{};function uu(e){const{rootPath:t="",session:n=""}=Cn();return`${t}/api/sessions/${encodeURIComponent(n)}/ide${e}`}async function tt(e,t={}){const n=await fetch(uu(e),t),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Request failed");return r}const pt=(e,t)=>`/ssh-connections/${encodeURIComponent(e)}${t}`,ge={chat:async(e,t=80)=>{const{rootPath:n=""}=Cn(),r=`${n}/api/sessions/${encodeURIComponent(e)}/ide/chat?limit=${t}`,s=await fetch(r),i=await s.json().catch(()=>({}));if(!s.ok)throw new Error(i.error||"Could not load chat");return i},browse:async(e="")=>{const{rootPath:t=""}=Cn(),n=`${t}/api/ide/browse?path=${encodeURIComponent(e)}`,r=await fetch(n),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not browse folders");return s},sessionAgent:async e=>{const{rootPath:t=""}=Cn(),n=await fetch(`${t}/api/sessions/${encodeURIComponent(e)}/agent`),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Could not read agent settings");return r},setSessionAgent:async(e,t)=>{const{rootPath:n=""}=Cn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/agent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({agent:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not switch agent");return s},setSessionModel:async(e,t)=>{const{rootPath:n=""}=Cn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/model`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change model");return s},setSessionEffort:async(e,t)=>{const{rootPath:n=""}=Cn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/effort`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({effort:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change effort");return s},listConnections:()=>tt("/ssh-connections"),createConnection:e=>tt("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),deleteConnection:e=>tt(pt(e,""),{method:"DELETE"}),connect:(e,t)=>tt(pt(e,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t||""})}),status:e=>tt(pt(e,"/status?reconnect=1")),listFiles:(e,t)=>tt(pt(e,`/files?path=${encodeURIComponent(t)}`)),searchFiles:(e,t,n)=>tt(pt(e,`/files/search?path=${encodeURIComponent(t)}&query=${encodeURIComponent(n)}`)),readFile:(e,t)=>tt(pt(e,`/file?path=${encodeURIComponent(t)}`)),saveFile:(e,t,n)=>tt(pt(e,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t,content:n})}),fs:(e,t)=>tt(pt(e,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),git:(e,t)=>tt(pt(e,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),focusTerminal:e=>tt(pt(e,"/focus-terminal"),{method:"POST"}),getWorkspace:e=>tt(pt(e,"/workspace")),saveWorkspace:(e,t)=>tt(pt(e,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})};var Xr,Zr,Qr,es,ts,ns,rs,ss,is,os,as,ls,cs,us,fs,ds;class fu{constructor(){V(this,Xr,O(pe([])));V(this,Zr,O(""));V(this,Qr,O("idle"));V(this,es,O("Ready"));V(this,ts,O("No file open"));V(this,ns,O("."));V(this,rs,O(pe([])));V(this,ss,O(pe({})));V(this,is,O(pe({})));V(this,os,O(""));V(this,as,O(pe([])));V(this,ls,O(""));V(this,cs,O(""));V(this,us,O(""));V(this,fs,O(pe([])));V(this,ds,O(""));Ye(this,"restoredKey","");Ye(this,"persistTimer",null)}get connections(){return l(u(this,Xr))}set connections(t){g(u(this,Xr),t,!0)}get connectionId(){return l(u(this,Zr))}set connectionId(t){g(u(this,Zr),t,!0)}get connectionState(){return l(u(this,Qr))}set connectionState(t){g(u(this,Qr),t,!0)}get statusText(){return l(u(this,es))}set statusText(t){g(u(this,es),t,!0)}get detailText(){return l(u(this,ts))}set detailText(t){g(u(this,ts),t,!0)}get path(){return l(u(this,ns))}set path(t){g(u(this,ns),t,!0)}get entries(){return l(u(this,rs))}set entries(t){g(u(this,rs),t,!0)}get expanded(){return l(u(this,ss))}set expanded(t){g(u(this,ss),t,!0)}get treeChildren(){return l(u(this,is))}set treeChildren(t){g(u(this,is),t,!0)}get filter(){return l(u(this,os))}set filter(t){g(u(this,os),t,!0)}get tabs(){return l(u(this,as))}set tabs(t){g(u(this,as),t,!0)}get activeKey(){return l(u(this,ls))}set activeKey(t){g(u(this,ls),t,!0)}get gitOutput(){return l(u(this,cs))}set gitOutput(t){g(u(this,cs),t,!0)}get gitStatus(){return l(u(this,us))}set gitStatus(t){g(u(this,us),t,!0)}get gitBranches(){return l(u(this,fs))}set gitBranches(t){g(u(this,fs),t,!0)}get gitBranch(){return l(u(this,ds))}set gitBranch(t){g(u(this,ds),t,!0)}get connection(){return this.connections.find(t=>t.id===this.connectionId)||null}get activeTab(){return this.tabs.find(t=>t.key===this.activeKey)||null}get visibleEntries(){const t=this.filter.trim().toLowerCase();return t?this.entries.filter(n=>n.name.toLowerCase().includes(t)):this.entries}get dirtyCount(){return this.tabs.filter(t=>t.dirty).length}get gitDirtyCount(){return this.gitStatus.split(`
`).filter(t=>t.trim()&&!t.startsWith("##")).length}setStatus(t,n){this.statusText=t,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const t=await ge.listConnections();this.connections=t.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(t){this.setStatus(t.message||"Could not load connections")}}async refreshStatus(){var t,n,r;if(this.connectionId)try{const s=await ge.status(this.connectionId);s.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((t=this.connection)==null?void 0:t.label)||"SSH workspace"}`,`SSH terminal: ${s.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(s){this.connectionState="error",this.setStatus(s.message||"Could not check SSH connection")}}async connect(t){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await ge.connect(this.connectionId,t);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect")}}}async refreshFiles(t){if(!this.connectionId)return;const n=t||this.path||".";try{const r=await ge.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async toggleDirectory(t){if(this.expanded[t]){const n={...this.expanded};delete n[t],this.expanded=n;return}if(this.expanded={...this.expanded,[t]:!0},!this.treeChildren[t])try{const n=await ge.listFiles(this.connectionId,t);this.treeChildren={...this.treeChildren,[t]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}async openFile(t){if(!this.connectionId)return null;const n=`${this.connectionId}|${t}`,r=this.tabs.find(s=>s.key===n);if(r)return this.activeKey=n,r;try{const s=await ge.readFile(this.connectionId,t),i={key:`${this.connectionId}|${s.path}`,path:s.path,content:s.content||"",saved:s.content||"",dirty:!1};return this.tabs=[...this.tabs,i],this.activeKey=i.key,this.setStatus("Opened",i.path),this.remember(),i}catch(s){return this.setStatus(s.message||"Could not open remote file"),null}}updateContent(t,n){this.tabs=this.tabs.map(r=>r.key===t?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(t){var r;const n=this.tabs.find(s=>s.key===t);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(s=>s.key!==t),this.activeKey===t&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const t=this.activeTab;if(t)try{await ge.saveFile(this.connectionId,t.path,t.content),this.tabs=this.tabs.map(n=>n.key===t.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${t.path}`,t.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const t=`${this.connectionId}`;if(!t)return;let n=null;try{n=await ge.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===t)return;this.restoredKey=t;const r=(n==null?void 0:n.buffers)||{};for(const i of((n==null?void 0:n.tabs)||[]).slice(0,12)){const o=await this.openFile(i);o&&Object.prototype.hasOwnProperty.call(r,i)&&this.updateContent(o.key,r[i])}const s=this.tabs.find(i=>i.path===(n==null?void 0:n.active_path));s&&(this.activeKey=s.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const t={};for(const r of this.tabs)r.dirty&&(t[r.path]=r.content);try{await ge.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:t})}catch{}}async runGit(t,n={}){try{const r=await ge.git(this.connectionId,{action:t,path:this.path||".",...n});return this.gitOutput=r.output||r.status||"",this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",r}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}Xr=new WeakMap,Zr=new WeakMap,Qr=new WeakMap,es=new WeakMap,ts=new WeakMap,ns=new WeakMap,rs=new WeakMap,ss=new WeakMap,is=new WeakMap,os=new WeakMap,as=new WeakMap,ls=new WeakMap,cs=new WeakMap,us=new WeakMap,fs=new WeakMap,ds=new WeakMap;const b=new fu;Jl();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const du={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const vu=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Co=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var hu=Da("<svg><!><!></svg>");function se(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]),r=ee(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);at(t,!1);let s=Ne(t,"name",8,void 0),i=Ne(t,"color",8,"currentColor"),o=Ne(t,"size",8,24),a=Ne(t,"strokeWidth",8,2),c=Ne(t,"absoluteStrokeWidth",8,!1),f=Ne(t,"iconNode",24,()=>[]);Wa();var d=hu();ko(d,(h,p,x)=>({...du,...h,...r,width:o(),height:o(),stroke:i(),"stroke-width":p,class:x}),[()=>vu(r)?void 0:{"aria-hidden":"true"},()=>(En(c()),En(a()),En(o()),Yt(()=>c()?Number(a())*24/Number(o()):a())),()=>(En(Co),En(s()),En(n),Yt(()=>Co("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var _=$(d);We(_,1,f,Kc,(h,p)=>{var x=st(()=>yl(l(p),2));let w=()=>l(x)[0],S=()=>l(x)[1];var z=q(),T=D(z);Gc(T,w,!0,(M,P)=>{ko(M,()=>({...S()}))}),y(h,z)});var v=m(_);ne(v,t,"default",{}),y(e,d),lt()}function pu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];se(e,re({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function hi(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]];se(e,re({name:"bot"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function pi(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];se(e,re({name:"check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Hr(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];se(e,re({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function _u(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];se(e,re({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function To(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];se(e,re({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function gu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];se(e,re({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function mu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];se(e,re({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function bu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];se(e,re({name:"circle-user"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function yu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];se(e,re({name:"circle"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function xu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];se(e,re({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function wu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];se(e,re({name:"corner-left-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function $u(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];se(e,re({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function No(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 16-3 3 3 3"}],["path",{d:"m9 22 3-3-3-3"}]];se(e,re({name:"file-code-corner"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function ku(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];se(e,re({name:"file-diff"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Su(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M14 18h6"}]];se(e,re({name:"file-minus-corner"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Mo(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M14 19h6"}],["path",{d:"M17 16v6"}]];se(e,re({name:"file-plus-corner"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Eu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];se(e,re({name:"file-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Xi(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];se(e,re({name:"file"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Cu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];se(e,re({name:"files"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function _i(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];se(e,re({name:"folder-open"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Tu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];se(e,re({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Nu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];se(e,re({name:"folder"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Mu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]];se(e,re({name:"git-branch-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Po(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];se(e,re({name:"git-branch"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Pu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]];se(e,re({name:"git-commit-vertical"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Au(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 16h.01"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{d:"M21.946 12.013H2.054"}],["path",{d:"M6 16h.01"}]];se(e,re({name:"hard-drive"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function zu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];se(e,re({name:"link-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Zi(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];se(e,re({name:"loader"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Ao(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];se(e,re({name:"message-square"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Iu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];se(e,re({name:"monitor-smartphone"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Ou(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];se(e,re({name:"panel-bottom"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Ru(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];se(e,re({name:"panel-left"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Du(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];se(e,re({name:"plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function qa(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];se(e,re({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Qi(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];se(e,re({name:"search"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function zo(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];se(e,re({name:"server"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Io(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];se(e,re({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Fu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];se(e,re({name:"square"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Lu(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];se(e,re({name:"trash-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}function Vs(e,t){const n=ee(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];se(e,re({name:"x"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=q(),a=D(o);ne(a,t,"default",{}),y(s,o)},$$slots:{default:!0}}))}var ju=I('<span class="w-[14px] shrink-0"></span>'),Vu=Da('<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.5 3.5h4l1.2 1.4h7.8v7.6H1.5z" fill="#c09553"></path></svg>'),Hu=I('<div role="treeitem" tabindex="0"><!> <span class="flex shrink-0 items-center"><!></span> <span class="flex-1 truncate text-vs-fg"> </span> <span class="hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Rename"><span class="text-[11px] leading-none">✎</span></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Delete"><span class="text-[11px] leading-none">🗑</span></button></span></div> <!>',1);function Ga(e,t){at(t,!0);const n=st(()=>t.dir==="."?t.entry.name:`${t.dir}/${t.entry.name}`),r=st(()=>!!b.expanded[l(n)]),s=st(()=>b.treeChildren[l(n)]||[]),i=st(()=>{var A;return((A=b.activeTab)==null?void 0:A.path)===l(n)});async function o(){t.entry.is_dir?await b.toggleDirectory(l(n)):await b.openFile(l(n))}async function a(A){if(A.stopPropagation(),!!confirm(`Delete ${l(n)}? Folders must already be empty.`))try{await ge.fs(b.connectionId,{action:"delete",path:l(n)}),await b.refreshFiles()}catch(B){b.setStatus(B.message||"Could not delete")}}async function c(A){A.stopPropagation();const B=prompt("Rename to (relative path):",l(n));if(!(!B||B===l(n)))try{await ge.fs(b.connectionId,{action:"rename",path:l(n),new_path:B}),await b.refreshFiles()}catch(L){b.setStatus(L.message||"Could not rename")}}var f=Hu(),d=D(f);let _;var v=$(d);{var h=A=>{var B=q(),L=D(B);{var J=fe=>{Hr(fe,{size:14,class:"shrink-0 text-vs-muted"})},be=fe=>{_u(fe,{size:14,class:"shrink-0 text-vs-muted"})};H(L,fe=>{l(r)?fe(J):fe(be,-1)})}y(A,B)},p=A=>{var B=ju();y(A,B)};H(v,A=>{t.entry.is_dir?A(h):A(p,-1)})}var x=m(v,2),w=$(x);{var S=A=>{var B=Vu();y(A,B)},z=A=>{zu(A,{size:14,class:"text-vs-muted"})},T=A=>{Xi(A,{size:14,class:"text-vs-blue"})};H(w,A=>{t.entry.is_dir?A(S):t.entry.is_symlink?A(z,1):A(T,-1)})}var M=m(x,2),P=ce(M,!0),E=m(M,2),N=$(E),G=m(N,2),Y=m(d,2);{var j=A=>{var B=q(),L=D(B);We(L,17,()=>l(s),J=>J.name,(J,be)=>{{let fe=st(()=>t.depth+1);Ga(J,{get entry(){return l(be)},get dir(){return l(n)},get depth(){return l(fe)}})}}),y(A,B)};H(Y,A=>{t.entry.is_dir&&l(r)&&A(j)})}Q(()=>{_=At(d,1,"group flex cursor-pointer items-center gap-1 py-[2px] pr-1 text-[13px] hover:bg-vs-hover",null,_,{"bg-vs-active":l(i)}),Vr(d,`padding-left: ${8+t.depth*12}px`),ve(d,"aria-expanded",t.entry.is_dir?l(r):void 0),ve(d,"aria-selected",l(i)),ve(d,"title",l(n)),te(P,t.entry.name),ve(N,"aria-label",`Rename ${t.entry.name??""}`),ve(G,"aria-label",`Delete ${t.entry.name??""}`)}),F("click",d,o),F("keydown",d,A=>{(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),o())}),F("click",N,c),F("click",G,a),y(e,f),lt()}It(["click","keydown"]);var Bu=I('<form class="px-2 pb-1"><input class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"/></form>'),Ku=I('<p class="px-4 py-2 text-xs text-vs-muted">No folder opened.</p>'),Uu=I('<p class="px-4 py-2 text-xs text-vs-muted">No files here</p>'),Wu=I('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase"><span class="flex-1 truncate">Explorer</span></div> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase"><!> <span class="flex-1 truncate"> </span> <span class="flex opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"><!></button></span></div> <!> <input class="mx-2 mb-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none focus:border-vs-accent" placeholder="Filter files…"/> <div class="min-h-0 flex-1 overflow-y-auto pb-2"><!></div></div>');function qu(e,t){at(t,!0);let n=O(""),r=O("");const s=(j,A)=>j==="."?A:`${j}/${A}`;async function i(j){j.preventDefault();const A=l(r).trim();if(A)try{await ge.fs(b.connectionId,{action:l(n)==="dir"?"create_dir":"create_file",path:s(b.path,A)}),g(n,""),g(r,""),await b.refreshFiles()}catch(B){b.setStatus(B.message||"Could not create")}}const o=st(()=>{var j,A;return(((j=b.connection)==null?void 0:j.workspace_root)||"").split("/").filter(Boolean).pop()||((A=b.connection)==null?void 0:A.label)||"WORKSPACE"});var a=Wu(),c=m($(a),2),f=$(c);Hr(f,{size:14,class:"shrink-0 text-vs-muted"});var d=m(f,2),_=ce(d,!0),v=m(d,2),h=$(v),p=$(h);Eu(p,{size:14});var x=m(h,2),w=$(x);Tu(w,{size:14});var S=m(x,2),z=$(S);qa(z,{size:13});var T=m(c,2);{var M=j=>{var A=Bu(),B=$(A);ra(B,!0),Q(()=>ve(B,"placeholder",l(n)==="dir"?"New folder name":"New file name")),vr("submit",A,i),F("keydown",B,L=>{L.key==="Escape"&&g(n,"")}),vr("blur",B,()=>{l(r).trim()||g(n,"")}),Le(B,()=>l(r),L=>g(r,L)),y(j,A)};H(T,j=>{l(n)&&j(M)})}var P=m(T,2),E=m(P,2),N=$(E);{var G=j=>{var A=Ku();y(j,A)},Y=j=>{var A=q(),B=D(A);We(B,17,()=>b.visibleEntries,L=>L.name,(L,J)=>{Ga(L,{get entry(){return l(J)},get dir(){return b.path},depth:0})},L=>{var J=Uu();y(L,J)}),y(j,A)};H(N,j=>{b.connectionId?j(Y,-1):j(G)})}Q(()=>{var j;ve(d,"title",(j=b.connection)==null?void 0:j.workspace_root),te(_,l(o))}),F("click",h,()=>{g(n,"file"),g(r,"")}),F("click",x,()=>{g(n,"dir"),g(r,"")}),F("click",S,()=>b.refreshFiles()),Le(P,()=>b.filter,j=>b.filter=j),y(e,a),lt()}It(["click","keydown"]);var Gu=I('<div class="branch svelte-1skdisl">On <strong> </strong></div>'),Yu=I('<li class="svelte-1skdisl"><label class="svelte-1skdisl"><input type="checkbox"/> <span> </span> <span class="file svelte-1skdisl"> </span></label></li>'),Ju=I('<ul class="changes svelte-1skdisl"></ul> <div class="row svelte-1skdisl"><button class="svelte-1skdisl"><!> </button> <button class="svelte-1skdisl"><!> Unstage</button></div>',1),Xu=I("<option> </option>"),Zu=I('<select class="svelte-1skdisl"></select>'),Qu=I('<div class="git svelte-1skdisl"><div class="row svelte-1skdisl"><button class="svelte-1skdisl"><!> Status</button> <button class="svelte-1skdisl"><!> Diff</button> <button class="svelte-1skdisl"><!> Stage all</button></div> <!> <!> <!> <div class="row svelte-1skdisl"><input placeholder="New branch…" class="svelte-1skdisl"/> <button class="svelte-1skdisl"><!> Create</button></div> <div class="row svelte-1skdisl"><input placeholder="Commit message…" class="svelte-1skdisl"/> <button class="svelte-1skdisl"><!> Commit</button></div> <pre class="output svelte-1skdisl"> </pre></div>');function ef(e,t){at(t,!0);let n=O(""),r=O(""),s=O(pe({}));const i=st(()=>(b.gitStatus||"").split(`
`).filter(X=>X&&!X.startsWith("##")).map(X=>({code:X.slice(0,2).trim()||"??",path:X.slice(3).trim()})).filter(X=>X.path)),o=st(()=>l(i).filter(X=>l(s)[X.path]).map(X=>X.path));async function a(X){l(o).length&&(await b.runGit(X,{files:l(o)}),g(s,{},!0))}async function c(){if(!l(n).trim())return;await b.runGit("commit",{message:l(n).trim()})&&g(n,"")}async function f(){if(!l(r).trim())return;await b.runGit("create_branch",{branch:l(r).trim()})&&g(r,"")}var d=Qu(),_=$(d),v=$(_),h=$(v);qa(h,{size:13});var p=m(v,2),x=$(p);ku(x,{size:13});var w=m(p,2),S=$(w);Mo(S,{size:13});var z=m(_,2);{var T=X=>{var ue=Gu(),ye=m($(ue)),Ee=ce(ye,!0);Q(()=>te(Ee,b.gitBranch)),y(X,ue)};H(z,X=>{b.gitBranch&&X(T)})}var M=m(z,2);{var P=X=>{var ue=Ju(),ye=D(ue);We(ye,21,()=>l(i),an=>an.path,(an,kt)=>{var bn=Yu(),yn=$(bn),xn=$(yn),ln=m(xn,2);let cn;var Vn=ce(ln,!0),wn=m(ln,2),$n=ce(wn,!0);Q(()=>{cn=At(ln,1,"code svelte-1skdisl",null,cn,{staged:l(kt).code[0]!=="?"&&l(kt).code[0]!==" "}),te(Vn,l(kt).code),ve(wn,"title",l(kt).path),te($n,l(kt).path)}),su(xn,()=>l(s)[l(kt).path],Hn=>l(s)[l(kt).path]=Hn),y(an,bn)});var Ee=m(ye,2),He=$(Ee),$t=$(He);Mo($t,{size:13});var Ot=m($t),ct=m(He,2),mn=$(ct);Su(mn,{size:13}),Q(()=>{He.disabled=!l(o).length,te(Ot,` Stage (${l(o).length??""})`),ct.disabled=!l(o).length}),F("click",He,()=>a("stage")),F("click",ct,()=>a("unstage")),y(X,ue)};H(M,X=>{l(i).length&&X(P)})}var E=m(M,2);{var N=X=>{var ue=Zu();We(ue,20,()=>b.gitBranches,Ee=>Ee,(Ee,He)=>{var $t=Xu(),Ot=ce($t,!0),ct={};Q(()=>{te(Ot,He),ct!==(ct=He)&&($t.value=($t.__value=ct)??"")}),y(Ee,$t)});var ye;Qn(ue),Q(()=>{ye!==(ye=b.gitBranch)&&(ue.value=(ue.__value=ye)??"",hr(ue,ye))}),F("change",ue,Ee=>b.runGit("switch",{branch:Ee.currentTarget.value})),y(X,ue)};H(E,X=>{b.gitBranches.length&&X(N)})}var G=m(E,2),Y=$(G),j=m(Y,2),A=$(j);Mu(A,{size:13});var B=m(G,2),L=$(B),J=m(L,2),be=$(J);Pu(be,{size:13});var fe=m(B,2),ze=ce(fe,!0);Q(()=>te(ze,b.gitOutput||"No git output yet.")),F("click",v,()=>b.runGit("status")),F("click",p,()=>b.runGit("diff")),F("click",w,()=>b.runGit("stage",{files:["."]})),Le(Y,()=>l(r),X=>g(r,X)),F("click",j,f),Le(L,()=>l(n),X=>g(n,X)),F("click",J,c),y(e,d),lt()}It(["click","change"]);const tf="modulepreload",nf=function(e,t){return new URL(e,t).href},Oo={},As=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(d){return Promise.all(d.map(_=>Promise.resolve(_).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),f=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(d=>{if(d=nf(d,r),d in Oo)return;Oo[d]=!0;const _=d.endsWith(".css"),v=_?'[rel="stylesheet"]':"";if(!!r)for(let x=a.length-1;x>=0;x--){const w=a[x];if(w.href===d&&(!_||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${v}`))return;const p=document.createElement("link");if(p.rel=_?"stylesheet":tf,_||(p.as="script"),p.crossOrigin="",p.href=d,f&&p.setAttribute("nonce",f),document.head.appendChild(p),_)return new Promise((x,w)=>{p.addEventListener("load",x),p.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${d}`)))})}))}function i(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return s.then(o=>{for(const a of o||[])a.status==="rejected"&&i(a.reason);return t().catch(i)})},Dr={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},rf={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function sf(e){var n;const t=(e||"").split("/").pop()||"";return t.toLowerCase()==="dockerfile"?"dockerfile":t.toLowerCase()==="makefile"?"shell":rf[(n=t.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var of=I('<div class="editor svelte-1h8xysy"></div>');function af(e,t){at(t,!0);let n,r=null,s=null,i="",o=!1;gs(async()=>{s=await As(()=>import("./ide-monaco.js").then(c=>c.a),__vite__mapDeps([0,1]),import.meta.url),s.editor.defineTheme("monokai",Dr),r=s.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{o||!i||b.updateContent(i,r.getValue())}),r.addCommand(s.KeyMod.CtrlCmd|s.KeyCode.KeyS,()=>b.saveActive())}),Ji(()=>r==null?void 0:r.dispose()),Gt(()=>{const c=b.activeTab;if(!(!r||!s)){if(!c){o=!0,r.setValue(""),i="",o=!1;return}if(c.key!==i){o=!0;const f=s.editor.createModel(c.content,sf(c.path)),d=r.getModel();r.setModel(f),d==null||d.dispose(),i=c.key,o=!1}else r.getValue()!==c.content&&(o=!0,r.setValue(c.content),o=!1)}});var a=of();Ur(a,c=>n=c,()=>n),y(e,a),lt()}var dn=iu(()=>b),lf=I('<span class="h-2 w-2 rounded-full bg-vs-fg group-hover:hidden"></span> <!>',1),cf=I('<div><button class="flex items-center gap-1.5 py-2 pr-1 pl-3" role="tab"><!> <span class="whitespace-nowrap"> </span></button> <button class="mr-1.5 flex h-5 w-5 items-center justify-center rounded-sm hover:bg-vs-line"><!></button></div>'),uf=I('<div class="px-3 py-2 text-xs text-vs-muted">Open a file from the Explorer</div>'),ff=I('<div class="flex min-h-[35px] items-stretch overflow-x-auto bg-vs-tabinactive" role="tablist"></div>');function df(e,t){at(t,!1);const n=s=>s.split("/").pop();Wa();var r=ff();We(r,5,()=>dn().tabs,s=>s.key,(s,i)=>{var o=cf();let a;var c=$(o),f=$(c);Xi(f,{size:14,class:"shrink-0 text-vs-blue"});var d=m(f,2),_=ce(d,!0),v=m(c,2),h=$(v);{var p=w=>{var S=lf(),z=m(D(S),2);Vs(z,{size:14,class:"hidden group-hover:block"}),y(w,S)},x=w=>{Vs(w,{size:14,class:"opacity-0 group-hover:opacity-100"})};H(h,w=>{l(i).dirty?w(p):w(x,-1)})}Q((w,S)=>{a=At(o,1,"group flex items-center border-r border-vs-bg text-[13px]",null,a,{"bg-vs-tabactive":l(i).key===dn().activeKey,"text-vs-bright":l(i).key===dn().activeKey,"text-vs-muted":l(i).key!==dn().activeKey}),ve(c,"aria-selected",l(i).key===dn().activeKey),ve(c,"title",l(i).path),te(_,w),ve(v,"title",l(i).dirty?"Unsaved changes — close":"Close"),ve(v,"aria-label",`Close ${S??""}`)},[()=>n(l(i).path),()=>n(l(i).path)]),F("click",c,()=>dn(dn().activeKey=l(i).key)),F("click",v,()=>dn().closeTab(l(i).key)),y(s,o)},s=>{var i=uf();y(s,i)}),y(e,r),lt()}It(["click"]);var vf=I("<option> </option>"),hf=I('<p class="rounded-sm bg-vs-red/10 px-2 py-1 text-xs text-vs-red"> </p>'),pf=I('<div class="flex flex-col gap-1"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-vs-blue"><!> </span> <div class="text-[13px] leading-relaxed whitespace-pre-wrap text-vs-fg"> </div></div>'),_f=I('<div class="self-end rounded-md border border-vs-line bg-vs-input px-2.5 py-1.5 text-[13px] whitespace-pre-wrap text-vs-fg max-w-[92%]"> </div>'),gf=I(`<div class="m-auto flex max-w-[240px] flex-col items-center gap-2 text-center"><!> <p class="text-xs leading-relaxed text-vs-muted">Ask about the file you have open. The prompt goes to the selected session,
            and the reply appears here.</p></div>`),Ro=I('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-vs-fg hover:bg-vs-hover"><span class="w-3"><!></span> </button>'),mf=I('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[150px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"></div>'),bf=I('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-vs-fg hover:bg-vs-hover"><span class="w-3"><!></span> <span class="truncate"> </span></button>'),yf=I('<div class="absolute bottom-full left-0 z-20 mb-1 max-h-[260px] min-w-[190px] overflow-y-auto rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"></div>'),xf=I('<div class="relative" data-menu=""><button class="flex max-w-[120px] items-center gap-1 rounded-sm px-1.5 py-0.5 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Model"><span class="truncate"> </span> <!></button> <!></div>'),wf=I('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[130px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"></div>'),$f=I('<div class="relative" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Reasoning effort"> <!></button> <!></div>'),kf=I('<div class="flex h-full min-h-0 flex-col bg-vs-panel"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1.5"><!> <select class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-1.5 py-0.5 text-xs outline-none focus:border-vs-accent" title="Agent session that answers"></select></div> <div class="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-3 py-3"><!> <!></div> <div class="border-t border-vs-border p-2"><div class="rounded-md border border-vs-line bg-vs-input focus-within:border-vs-accent"><textarea rows="2" class="max-h-[200px] w-full resize-none bg-transparent px-2.5 py-2 text-[13px] text-vs-fg outline-none placeholder:text-vs-muted" placeholder="Ask about this workspace…"></textarea> <div class="flex items-center gap-1 px-1.5 pb-1.5 text-[11px]"><div class="relative" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Agent"> <!></button> <!></div> <!> <!> <!> <button class="ml-auto flex h-6 w-6 items-center justify-center rounded-md bg-vs-status text-white disabled:opacity-40" title="Send (Enter)" aria-label="Send"><!></button></div></div></div></div>');function Sf(e,t){at(t,!0);let n=Ne(t,"sessions",19,()=>[]),r=Ne(t,"session",3,""),s=Ne(t,"rootPath",3,""),i=O(""),o=O(pe(r()||n()[0]||"")),a=O(!1),c=O(pe([])),f=O(""),d=O(null),_=O(null),v=null,h=O(pe({agent:"codex",available:[],model:"",effort:"",models:[],efforts:[]})),p=O(""),x=O("");const w=st(()=>(l(h).models.find(C=>C[0]===l(h).model)||[])[1]||l(h).model||"default");async function S(){if(l(o))try{g(h,{...l(h),...await ge.sessionAgent(l(o))},!0)}catch{}}async function z(){if(l(o))try{const K=(await ge.chat(l(o))).messages||[],ie=K.length!==l(c).length;g(c,K,!0),g(f,""),ie&&queueMicrotask(T)}catch(C){g(f,C.message||"Could not load chat",!0)}}function T(){l(d)&&(l(d).scrollTop=l(d).scrollHeight)}Gt(()=>{const C=l(o);g(c,[],!0),v&&clearInterval(v),C&&(z(),S(),v=setInterval(z,3e3))}),Ji(()=>{v&&clearInterval(v)});async function M(C){if(g(p,""),C!==l(h).agent){g(x,"agent");try{await ge.setSessionAgent(l(o),C),await S(),b.setStatus(`Switched to ${C}`)}catch(K){b.setStatus(K.message||"Could not switch agent")}finally{g(x,"")}}}async function P(C){if(g(p,""),C!==l(h).model){g(x,"model");try{await ge.setSessionModel(l(o),C),g(h,{...l(h),model:C},!0),b.setStatus(`Model set to ${C}`)}catch(K){b.setStatus(K.message||"Could not change model")}finally{g(x,"")}}}async function E(C){if(g(p,""),C!==l(h).effort){g(x,"effort");try{await ge.setSessionEffort(l(o),C),g(h,{...l(h),effort:C},!0),b.setStatus(`Reasoning effort set to ${C}`)}catch(K){b.setStatus(K.message||"Could not change effort")}finally{g(x,"")}}}function N(){const C=b.connection||{},K=b.activeTab,ie=K?K.path:b.path||".",xe=K?`
Active file contents (first 12,000 characters):
${K.content.slice(0,12e3)}`:"";return`[Remote IDE context]
${C.kind==="local"?`Local workspace: ${C.workspace_root||"."}`:`SSH target: ${C.username||"?"}@${C.host||"?"}`}
Path: ${ie}${xe}

${l(i).trim()}`}async function G(){const C=l(i).trim();if(!C||!l(o)||l(a))return;const K=N();g(a,!0);try{const ie=await fetch(`${s()}/api/sessions/${encodeURIComponent(l(o))}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:K})}),xe=await ie.json().catch(()=>({}));if(!ie.ok)throw new Error(xe.error||"Could not send");g(i,""),l(_)&&(l(_).style.height="auto"),g(c,[...l(c),{role:"user",text:C,ts:Date.now()/1e3,_local:!0}],!0),queueMicrotask(T),setTimeout(z,1200)}catch(ie){b.setStatus(ie.message||"Could not send prompt")}finally{g(a,!1)}}function Y(C){C.key==="Enter"&&!C.shiftKey&&(C.preventDefault(),G())}function j(C){const K=C.currentTarget;K.style.height="auto",K.style.height=`${Math.min(K.scrollHeight,200)}px`}function A(C){const K=C.full||C.text||"",ie=`

`;if(K.startsWith("[Remote IDE context]")||K.startsWith("[Remote SSH IDE context]")){const xe=K.lastIndexOf(ie);if(xe!==-1)return K.slice(xe+ie.length)}return K}var B=kf();vr("click",Ls,C=>{var K,ie;(ie=(K=C.target).closest)!=null&&ie.call(K,"[data-menu]")||g(p,"")});var L=$(B),J=$(L);hi(J,{size:13,class:"shrink-0 text-vs-blue"});var be=m(J,2);We(be,20,n,C=>C,(C,K)=>{var ie=vf(),xe=ce(ie,!0),Ce={};Q(()=>{te(xe,K),Ce!==(Ce=K)&&(ie.value=(ie.__value=Ce)??"")}),y(C,ie)}),Qn(be);var fe=m(L,2),ze=$(fe);{var X=C=>{var K=hf(),ie=ce(K,!0);Q(()=>te(ie,l(f))),y(C,K)};H(ze,C=>{l(f)&&C(X)})}var ue=m(ze,2);We(ue,19,()=>l(c),(C,K)=>C.ts+":"+K,(C,K)=>{var ie=q(),xe=D(ie);{var Ce=Re=>{var qe=pf(),Be=$(qe),De=$(Be);hi(De,{size:11});var ht=m(De),St=m(Be,2),Rt=ce(St,!0);Q(Jt=>{te(ht,` ${l(h).agent==="claude"?"Claude":"Codex"}`),te(Rt,Jt)},[()=>A(l(K))]),y(Re,qe)},Qe=Re=>{var qe=_f(),Be=ce(qe,!0);Q(De=>te(Be,De),[()=>A(l(K))]),y(Re,qe)};H(xe,Re=>{l(K).role==="assistant"?Re(Ce):Re(Qe,-1)})}y(C,ie)},C=>{var K=q(),ie=D(K);{var xe=Ce=>{var Qe=gf(),Re=$(Qe);hi(Re,{size:28,strokeWidth:1.3,class:"text-vs-line"}),y(Ce,Qe)};H(ie,Ce=>{l(f)||Ce(xe)})}y(C,K)}),Ur(fe,C=>g(d,C),()=>l(d));var ye=m(fe,2),Ee=$(ye),He=$(Ee);Ur(He,C=>g(_,C),()=>l(_));var $t=m(He,2),Ot=$($t),ct=$(Ot),mn=$(ct),an=m(mn);Hr(an,{size:11});var kt=m(ct,2);{var bn=C=>{var K=mf();We(K,20,()=>l(h).available.length?l(h).available:["codex"],ie=>ie,(ie,xe)=>{var Ce=Ro(),Qe=$(Ce),Re=$(Qe);{var qe=De=>{pi(De,{size:11})};H(Re,De=>{xe===l(h).agent&&De(qe)})}var Be=m(Qe);Q(()=>te(Be,` ${xe==="claude"?"Claude":"Codex"}`)),F("click",Ce,()=>M(xe)),y(ie,Ce)}),y(C,K)};H(kt,C=>{l(p)==="agent"&&C(bn)})}var yn=m(Ot,2);{var xn=C=>{var K=xf(),ie=$(K),xe=$(ie),Ce=ce(xe,!0),Qe=m(xe,2);Hr(Qe,{size:11,class:"shrink-0"});var Re=m(ie,2);{var qe=Be=>{var De=yf();We(De,21,()=>l(h).models,ht=>ht[0],(ht,St)=>{var Rt=bf(),Jt=$(Rt),xr=$(Jt);{var Bn=wr=>{pi(wr,{size:11})};H(xr,wr=>{l(St)[0]===l(h).model&&wr(Bn)})}var kn=m(Jt,2),bs=ce(kn,!0);Q(()=>te(bs,l(St)[1])),F("click",Rt,()=>P(l(St)[0])),y(ht,Rt)}),y(Be,De)};H(Re,Be=>{l(p)==="model"&&Be(qe)})}Q(()=>te(Ce,l(w))),F("click",ie,()=>g(p,l(p)==="model"?"":"model",!0)),y(C,K)};H(yn,C=>{l(h).models.length&&C(xn)})}var ln=m(yn,2);{var cn=C=>{var K=$f(),ie=$(K),xe=$(ie),Ce=m(xe);Hr(Ce,{size:11});var Qe=m(ie,2);{var Re=qe=>{var Be=wf();We(Be,20,()=>l(h).efforts,De=>De,(De,ht)=>{var St=Ro(),Rt=$(St),Jt=$(Rt);{var xr=kn=>{pi(kn,{size:11})};H(Jt,kn=>{ht===l(h).effort&&kn(xr)})}var Bn=m(Rt);Q(()=>te(Bn,` ${ht??""}`)),F("click",St,()=>E(ht)),y(De,St)}),y(qe,Be)};H(Qe,qe=>{l(p)==="effort"&&qe(Re)})}Q(()=>te(xe,`${(l(h).effort||"effort")??""} `)),F("click",ie,()=>g(p,l(p)==="effort"?"":"effort",!0)),y(C,K)};H(ln,C=>{l(h).efforts.length&&C(cn)})}var Vn=m(ln,2);{var wn=C=>{Zi(C,{size:11,class:"animate-spin text-vs-muted"})};H(Vn,C=>{l(x)&&C(wn)})}var $n=m(Vn,2),Hn=$($n);{var Xs=C=>{Fu(C,{size:11})},ms=C=>{pu(C,{size:13})};H(Hn,C=>{l(a)?C(Xs):C(ms,-1)})}Q(C=>{te(mn,`${l(h).agent==="claude"?"Claude":"Codex"} `),$n.disabled=C},[()=>l(a)||!l(i).trim()]),zi(be,()=>l(o),C=>g(o,C)),F("keydown",He,Y),F("input",He,j),Le(He,()=>l(i),C=>g(i,C)),F("click",ct,()=>g(p,l(p)==="agent"?"":"agent",!0)),F("click",$n,G),y(e,B),lt()}It(["keydown","input","click"]);var Ef=I('<span class="hint svelte-e2eyom">searching…</span>'),Cf=I('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),Tf=I('<ul class="results svelte-e2eyom"></ul>'),Nf=I('<p class="empty svelte-e2eyom"> </p>'),Mf=I('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function Pf(e,t){at(t,!0);let n=O(""),r=O(pe([])),s=O(0),i=O(!1),o=O(null),a=null;Gt(()=>{l(o)&&l(o).focus()}),Gt(()=>{const E=l(n).trim();if(a&&clearTimeout(a),!E){g(r,[],!0);return}a=setTimeout(async()=>{g(i,!0);try{const N=await ge.searchFiles(b.connectionId,b.path||".",E);g(r,N.matches||[],!0),g(s,0)}catch{g(r,[],!0)}finally{g(i,!1)}},180)});async function c(E){var G;if(!E)return;const N=b.path&&b.path!=="."?`${b.path}/`:"";await b.openFile(`${N}${E.path}`),(G=t.onclose)==null||G.call(t)}function f(E){var N;E.key==="Escape"?(E.preventDefault(),(N=t.onclose)==null||N.call(t)):E.key==="ArrowDown"?(E.preventDefault(),g(s,Math.min(l(s)+1,l(r).length-1),!0)):E.key==="ArrowUp"?(E.preventDefault(),g(s,Math.max(l(s)-1,0),!0)):E.key==="Enter"&&(E.preventDefault(),c(l(r)[l(s)]))}var d=Mf(),_=D(d),v=m(_,2),h=$(v),p=$(h);Qi(p,{size:14});var x=m(p,2);Ur(x,E=>g(o,E),()=>l(o));var w=m(x,2);{var S=E=>{var N=Ef();y(E,N)};H(w,E=>{l(i)&&E(S)})}var z=m(h,2);{var T=E=>{var N=Tf();We(N,23,()=>l(r),G=>G.path,(G,Y,j)=>{var A=Cf(),B=$(A);let L;var J=$(B),be=ce(J,!0),fe=m(J,2),ze=ce(fe,!0),X=m(fe,2);{var ue=ye=>{xu(ye,{size:12})};H(X,ye=>{l(j)===l(s)&&ye(ue)})}Q(()=>{L=At(B,1,"svelte-e2eyom",null,L,{active:l(j)===l(s)}),te(be,l(Y).name),te(ze,l(Y).path)}),F("click",B,()=>c(l(Y))),y(G,A)}),y(E,N)},M=E=>{var N=Nf(),G=ce(N);Q(Y=>te(G,`No files match “${Y??""}”.`),[()=>l(n).trim()]),y(E,N)},P=st(()=>l(n).trim()&&!l(i));H(z,E=>{l(r).length?E(T):l(P)&&E(M,1)})}F("click",_,()=>{var E;return(E=t.onclose)==null?void 0:E.call(t)}),F("keydown",_,E=>{var N;return E.key==="Escape"&&((N=t.onclose)==null?void 0:N.call(t))}),F("keydown",x,f),Le(x,()=>l(n),E=>g(n,E)),y(e,d),lt()}It(["click","keydown"]);var Af=I('<div class="terminal-pane svelte-maclc7"><div class="bar svelte-maclc7"><span class="label svelte-maclc7">Terminal</span> <span> </span></div> <div class="screen svelte-maclc7"></div></div>');function zf(e,t){at(t,!0);let n=Ne(t,"rootPath",3,""),r=Ne(t,"session",3,""),s,i=null,o=null,a=null,c=O("connecting"),f=null,d=0,_=null,v=!1;const h={background:Dr.colors["editor.background"],foreground:Dr.colors["editor.foreground"],cursor:Dr.colors["editorCursor.foreground"],selectionBackground:Dr.colors["editor.selectionBackground"],black:"#272822",red:"#f92672",green:"#a6e22e",yellow:"#e6db74",blue:"#66d9ef",magenta:"#ae81ff",cyan:"#a1efe4",white:"#f8f8f2",brightBlack:"#75715e",brightRed:"#f92672",brightGreen:"#a6e22e",brightYellow:"#e6db74",brightBlue:"#66d9ef",brightMagenta:"#ae81ff",brightCyan:"#a1efe4",brightWhite:"#f9f8f5"};function p(){if(!(!o||!i||(a==null?void 0:a.readyState)!==WebSocket.OPEN))try{o.fit(),a.send(JSON.stringify({type:"resize",cols:i.cols,rows:i.rows}))}catch{}}function x(){if(v)return;const E=`${location.protocol==="https:"?"wss":"ws"}://${location.host}${n()}/ws/sessions/${encodeURIComponent(r())}/ide/terminal/${encodeURIComponent(b.connectionId)}`;a=new WebSocket(E),a.binaryType="arraybuffer",a.onopen=()=>{g(c,"connected"),d=0,p()},a.onmessage=N=>{i.write(typeof N.data=="string"?N.data:new Uint8Array(N.data))},a.onclose=()=>{if(v)return;g(c,"reconnecting");const N=Math.min(1e3*2**d,1e4);d+=1,_=setTimeout(x,N)},a.onerror=()=>{v||g(c,"error")}}gs(async()=>{const[{Terminal:P},{FitAddon:E}]=await Promise.all([As(()=>import("./ide-xterm.js"),[],import.meta.url),As(()=>import("./ide-addon-fit.js"),[],import.meta.url)]);await As(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),i=new P({theme:h,fontSize:12,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3}),o=new E,i.loadAddon(o),i.open(s),o.fit(),x(),i.onData(N=>{(a==null?void 0:a.readyState)===WebSocket.OPEN&&a.send(new TextEncoder().encode(N))}),f=new ResizeObserver(()=>p()),f.observe(s)}),Ji(()=>{v=!0,_&&clearTimeout(_),f==null||f.disconnect(),a==null||a.close(),i==null||i.dispose()});var w=Af(),S=$(w),z=m($(S),2),T=ce(z,!0),M=m(S,2);Ur(M,P=>s=P,()=>s),Q(()=>{At(z,1,`status ${l(c)??""}`,"svelte-maclc7"),te(T,l(c))}),y(e,w),lt()}var If=I('<div class="border-b border-vs-line bg-vs-red/10 px-4 py-2 text-xs text-vs-red"> </div>'),Of=I('<div class="flex items-center gap-2 px-4 py-3 text-xs text-vs-muted"><!> Loading…</div>'),Rf=I('<button class="flex w-full items-center gap-2 px-4 py-1 text-left text-[13px] text-vs-fg hover:bg-vs-hover"><!> <span class="truncate"> </span></button>'),Df=I('<div class="px-4 py-3 text-xs text-vs-muted">No sub-folders here. You can still open this folder.</div>'),Ff=I('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="flex h-[70vh] w-[min(640px,92vw)] flex-col overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">Open Folder</div> <form class="flex gap-2 border-b border-vs-line px-3 py-2"><button type="button" class="flex items-center gap-1 rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover disabled:opacity-40" title="Up one folder"><!> Up</button> <input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-xs text-vs-fg outline-none focus:border-vs-accent" spellcheck="false" aria-label="Folder path"/> <button type="submit" class="rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover">Go</button></form> <!> <div class="min-h-0 flex-1 overflow-y-auto py-1"><!></div> <div class="flex items-center gap-2 border-t border-vs-line px-4 py-3"><span class="flex min-w-0 flex-1 items-center gap-2 text-xs text-vs-muted"><!> <span class="truncate font-mono"> </span></span> <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40">Open Folder</button></div></div></div>');function Lf(e,t){at(t,!0);let n=O(""),r=O(""),s=O(pe([])),i=O(""),o=O(!0),a=O("");async function c(L){g(o,!0),g(i,"");try{const J=await ge.browse(L);g(n,J.path,!0),g(r,J.parent,!0),g(s,J.entries||[],!0),g(a,J.path,!0)}catch(J){g(i,J.message||"Could not open that folder",!0)}finally{g(o,!1)}}gs(()=>c(""));function f(L){L.preventDefault(),l(a).trim()&&c(l(a).trim())}var d=Ff(),_=$(d),v=m($(_),2),h=$(v),p=$(h);wu(p,{size:14});var x=m(h,2),w=m(v,2);{var S=L=>{var J=If(),be=ce(J,!0);Q(()=>te(be,l(i))),y(L,J)};H(w,L=>{l(i)&&L(S)})}var z=m(w,2),T=$(z);{var M=L=>{var J=Of(),be=$(J);Zi(be,{size:13,class:"animate-spin"}),y(L,J)},P=L=>{var J=q(),be=D(J);We(be,17,()=>l(s),fe=>fe.path,(fe,ze)=>{var X=Rf(),ue=$(X);Nu(ue,{size:14,class:"shrink-0 text-vs-blue"});var ye=m(ue,2),Ee=ce(ye,!0);Q(()=>te(Ee,l(ze).name)),F("dblclick",X,()=>c(l(ze).path)),F("click",X,()=>c(l(ze).path)),y(fe,X)},fe=>{var ze=Df();y(fe,ze)}),y(L,J)};H(T,L=>{l(o)?L(M):L(P,-1)})}var E=m(z,2),N=$(E),G=$(N);Au(G,{size:13,class:"shrink-0"});var Y=m(G,2),j=ce(Y,!0),A=m(N,2),B=m(A,2);Q(()=>{h.disabled=!l(r),ve(Y,"title",l(n)),te(j,l(n)),B.disabled=!l(n)||l(o)}),F("click",d,L=>L.target===L.currentTarget&&t.onclose()),F("keydown",d,L=>L.key==="Escape"&&t.onclose()),vr("submit",v,f),F("click",h,()=>l(r)&&c(l(r))),Le(x,()=>l(a),L=>g(a,L)),F("click",A,function(...L){var J;(J=t.onclose)==null||J.apply(this,L)}),F("click",B,()=>t.onopen(l(n))),y(e,d),lt()}It(["click","keydown","dblclick"]);var jf=I('<p class="px-4 py-2 text-xs text-vs-muted">Open a folder to search it.</p>'),Vf=I('<button class="flex w-full items-center gap-2 px-3 py-1 text-left text-[13px] hover:bg-vs-hover"><!> <span class="truncate text-vs-fg"> </span> <span class="ml-auto max-w-[45%] truncate text-[11px] text-vs-muted"> </span></button>'),Hf=I('<p class="px-4 py-2 text-xs text-vs-muted"> </p>'),Bf=I('<p class="px-4 py-2 text-xs text-vs-muted">Type to search filenames in this workspace.</p>'),Kf=I('<div class="flex h-full min-h-0 flex-col"><div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Search</div> <div class="px-3 pb-2"><div class="flex items-center gap-1.5 rounded-sm border border-vs-line bg-vs-input px-2 focus-within:border-vs-accent"><!> <input class="min-w-0 flex-1 bg-transparent py-1 text-xs text-vs-fg outline-none placeholder:text-vs-muted" placeholder="Search filenames" spellcheck="false"/> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div></div>');function Uf(e,t){at(t,!0);let n=O(""),r=O(pe([])),s=O(!1),i=O(!1),o=null;Gt(()=>{const T=l(n).trim();if(o&&clearTimeout(o),!T||!b.connectionId){g(r,[],!0),g(i,!1);return}o=setTimeout(async()=>{g(s,!0);try{const M=await ge.searchFiles(b.connectionId,b.path||".",T);g(r,M.matches||[],!0)}catch(M){g(r,[],!0),b.setStatus(M.message||"Search failed")}finally{g(s,!1),g(i,!0)}},200)});const a=T=>{const M=(T||"").split("/");return M.pop(),M.join("/")};var c=Kf(),f=m($(c),2),d=$(f),_=$(d);Qi(_,{size:12,class:"shrink-0 text-vs-muted"});var v=m(_,2),h=m(v,2);{var p=T=>{Zi(T,{size:12,class:"shrink-0 animate-spin text-vs-muted"})};H(h,T=>{l(s)&&T(p)})}var x=m(f,2),w=$(x);{var S=T=>{var M=jf();y(T,M)},z=T=>{var M=q(),P=D(M);We(P,17,()=>l(r),E=>E.path,(E,N)=>{var G=Vf(),Y=$(G);Xi(Y,{size:13,class:"shrink-0 text-vs-blue"});var j=m(Y,2),A=ce(j,!0),B=m(j,2),L=ce(B,!0);Q((J,be)=>{ve(G,"title",l(N).path),te(A,J),te(L,be)},[()=>l(N).name||l(N).path.split("/").pop(),()=>a(l(N).path)]),F("click",G,()=>b.openFile(l(N).path)),y(E,G)},E=>{var N=q(),G=D(N);{var Y=B=>{var L=Hf(),J=ce(L);Q(()=>te(J,`No files match “${l(n)??""}”.`)),y(B,L)},j=B=>{var L=Bf();y(B,L)},A=st(()=>!l(n).trim());H(G,B=>{l(i)&&!l(s)?B(Y):l(A)&&B(j,1)})}y(E,N)}),y(T,M)};H(w,T=>{b.connectionId?T(z,-1):T(S)})}Le(v,()=>l(n),T=>g(n,T)),y(e,c),lt()}It(["click"]);var Wf=I('<div role="separator" tabindex="0" title="Drag to resize (double-click to reset)"><div></div></div>');function gi(e,t){at(t,!0);let n=Ne(t,"size",15),r=Ne(t,"side",3,"right"),s=Ne(t,"min",3,120),i=Ne(t,"max",3,800),o=Ne(t,"onreset",3,null),a=O(!1);const c=r()==="top";function f(p){var M;p.preventDefault(),g(a,!0);const x=c?p.clientY:p.clientX,w=n(),S=p.currentTarget;(M=S.setPointerCapture)==null||M.call(S,p.pointerId);function z(P){const N=(c?P.clientY:P.clientX)-x,G=r()==="left"||r()==="top"?-N:N;n(Math.round(Math.min(i(),Math.max(s(),w+G))))}function T(){var P;g(a,!1),(P=S.releasePointerCapture)==null||P.call(S,p.pointerId),window.removeEventListener("pointermove",z),window.removeEventListener("pointerup",T)}window.addEventListener("pointermove",z),window.addEventListener("pointerup",T)}function d(p){const x=p.shiftKey?40:10,w=c?"ArrowUp":r()==="left"?"ArrowLeft":"ArrowRight",S=c?"ArrowDown":r()==="left"?"ArrowRight":"ArrowLeft";if(p.key===w)n(Math.min(i(),n()+x));else if(p.key===S)n(Math.max(s(),n()-x));else return;p.preventDefault()}var _=Wf();let v;var h=ce(_);Q(()=>{v=At(_,1,`group relative shrink-0 ${c?"h-1 w-full cursor-row-resize":"w-1 cursor-col-resize"}`,null,v,{"bg-vs-accent":l(a)}),ve(_,"aria-orientation",c?"horizontal":"vertical"),ve(_,"aria-valuenow",n()),ve(_,"aria-valuemin",s()),ve(_,"aria-valuemax",i()),At(h,1,`absolute ${c?"-top-1 -bottom-1 left-0 right-0":"-left-1 -right-1 top-0 bottom-0"}
           transition-colors group-hover:bg-vs-accent ${l(a)?"bg-vs-accent":""}`)}),F("pointerdown",_,f),F("dblclick",_,()=>{var p;return(p=o())==null?void 0:p()}),F("keydown",_,d),y(e,_),lt()}It(["pointerdown","dblclick","keydown"]);var qf=I('<span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>'),Gf=I('<span class="absolute right-1.5 bottom-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-vs-status px-1 text-[10px] leading-none font-semibold text-white"> </span>'),Yf=I("<button><!> <!> <!></button>"),Jf=I("<option> </option>"),Xf=I('<button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover hover:text-vs-red" title="Remove workspace" aria-label="Remove workspace"><!></button>'),Zf=I('<input class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),Qf=I('<!> <button class="w-full rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"> </button>',1),ed=I('<p class="mt-1 font-mono text-[11px] break-all text-vs-muted"> </p>'),td=I('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="~/.ssh/id_ed25519"/> <textarea class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-[11px] outline-none focus:border-vs-accent" rows="4" placeholder="…or paste a private key (-----BEGIN OPENSSH PRIVATE KEY-----)" spellcheck="false"></textarea>',1),nd=I('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" type="password" placeholder="Password" autocomplete="new-password"/>'),rd=I('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Host" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="User" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Port" type="number" min="1" max="65535"/> <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!>',1),sd=I('<form class="mt-2 flex flex-col gap-1.5 border-t border-vs-line px-3 pt-2"><select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>This server (local folder)</option><option>Remote host over SSH</option></select> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"/> <div class="flex gap-1 pb-2"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110" type="submit">Create</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" type="button">Cancel</button></div></form>'),id=I('<div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Workspaces</div> <div class="flex flex-col gap-2 px-3 pt-1"><select class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" aria-label="Workspace"><option>— select workspace —</option><!></select> <div class="flex gap-1"><button class="flex flex-1 items-center justify-center gap-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"><!> Open Folder</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Add a workspace or SSH connection" aria-label="Add workspace"><!></button> <!></div> <!> <!></div> <!>',1),od=I('<aside class="flex shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel"><!></aside> <!>',1),ad=I('<div class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"><!> <div><h1 class="text-2xl font-light text-vs-fg">Multibuilder IDE</h1> <p class="mt-1 text-sm text-vs-muted">Edit files on this server or on a remote host over SSH.</p></div> <div class="flex flex-col gap-2 text-sm"><button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Open Folder… <kbd class="ml-2 rounded-sm border border-vs-line px-1.5 py-0.5 text-[10px] text-vs-muted">Ctrl+Shift+O</kbd></button> <button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Connect to a host over SSH…</button></div></div>'),ld=I('<!> <div class="flex shrink-0 flex-col border-t border-vs-border bg-vs-bg"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1 text-[11px] tracking-wide uppercase"><!> Terminal <span class="text-vs-muted normal-case"> </span> <button class="ml-auto rounded-sm p-0.5 hover:bg-vs-hover" title="Hide panel" aria-label="Hide terminal panel"><!></button></div> <div class="min-h-0 flex-1"><!></div></div>',1),cd=I('<!> <div class="min-h-0 flex-1"><!></div> <!>',1),ud=I('<!> <aside class="flex shrink-0 flex-col overflow-hidden border-l border-vs-border bg-vs-panel"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1.5"><!> <span class="flex-1 text-[11px] font-semibold tracking-wide uppercase">Chat</span> <button class="rounded-sm p-0.5 hover:bg-vs-hover" title="Hide chat" aria-label="Hide chat"><!></button></div> <div class="min-h-0 flex-1"><!></div></aside>',1),Do=I('<span class="flex items-center gap-1"><!> </span>'),fd=I("<span> </span>"),dd=I('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle terminal (Ctrl+`)"><!> Terminal</button> <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Focus the tmux window on the host"><!></button>',1),vd=I('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle chat panel"><!> Chat</button>'),hd=I('<div class="flex h-full flex-col overflow-hidden bg-vs-bg font-sans text-vs-fg"><header class="flex items-center gap-2 border-b border-vs-border bg-vs-titlebar px-3 py-1 text-xs"><!> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover" title="Open a folder on this server (Ctrl+Shift+O)">Open Folder…</button> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40" title="Open a file (Ctrl+P)">Open File…</button> <button><!> Terminal</button> <span class="mx-auto truncate text-vs-muted"> </span> <span><!> </span></header> <div class="flex min-h-0 flex-1"><nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity"><!> <div class="mt-auto flex flex-col items-center pb-1"><button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Account — signed in to the dashboard" aria-label="Account"><!></button> <button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Toggle side bar (Ctrl+B)" aria-label="Toggle side bar"><!></button></div></nav> <!> <section class="flex min-h-0 min-w-0 flex-1 flex-col"><!></section> <!></div> <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white"><!> <!> <span class="truncate"> </span> <span class="ml-auto flex items-center gap-3"><!> <span class="max-w-[40vw] truncate opacity-80"> </span> <!> <!></span></footer> <!> <!></div>');function pd(e,t){at(t,!0);let n=Ne(t,"sessions",19,()=>[]),r=Ne(t,"session",3,""),s=Ne(t,"rootPath",3,""),i=O("files");function o(k,R){try{const W=localStorage.getItem(`ide.show.${k}`);return W===null?R:W==="1"}catch{return R}}let a=O(pe(o("chat",!0)));const c={sidebar:240,chat:320,panel:240};function f(k){try{const R=localStorage.getItem(`ide.size.${k}`),W=Number(R);return Number.isFinite(W)&&W>0?W:c[k]}catch{return c[k]}}let d=O(pe(f("sidebar"))),_=O(pe(f("chat"))),v=O(pe(f("panel")));Gt(()=>{try{localStorage.setItem("ide.size.sidebar",String(l(d))),localStorage.setItem("ide.size.chat",String(l(_))),localStorage.setItem("ide.size.panel",String(l(v))),localStorage.setItem("ide.show.terminal",l(x)?"1":"0"),localStorage.setItem("ide.show.chat",l(a)?"1":"0"),localStorage.setItem("ide.show.sidebar",l(h)?"1":"0")}catch{}});let h=O(pe(o("sidebar",!0))),p=O(!1),x=O(pe(o("terminal",!1))),w=O(!1);Gt(()=>{l(x)&&g(w,!0)});let S=O(!1),z=O(!1),T=O(""),M=O(pe({kind:"local",label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",private_key:"",workspace_root:"",max_file_bytes:1e6}));const P={idle:{icon:yu,label:"Not connected"},connecting:{icon:mu,label:"Connecting…"},connected:{icon:gu,label:"Connected"},reconnect:{icon:To,label:"Reconnect required"},error:{icon:To,label:"Error"}},E=st(()=>P[b.connectionState].icon),N=st(()=>{var k;return((k=b.connection)==null?void 0:k.kind)==="local"}),G=[{id:"files",icon:Cu,label:"Explorer",keys:"Ctrl+Shift+E"},{id:"search",icon:Qi,label:"Search",keys:"Ctrl+Shift+F"},{id:"git",icon:Po,label:"Source Control",keys:"Ctrl+Shift+G"},{id:"remote",icon:Iu,label:"Remote Explorer",keys:""}];gs(async()=>{await b.loadConnections(),b.connectionId&&await b.refreshStatus()});function Y(k){l(i)===k&&l(h)?g(h,!1):(g(i,k,!0),g(h,!0))}async function j(k){b.connectionId=k.currentTarget.value,b.tabs=[],b.activeKey="",b.restoredKey="",await b.refreshStatus()}async function A(k){g(z,!1);try{const R=k.split("/").filter(Boolean).pop()||k,W=await ge.createConnection({kind:"local",label:R,workspace_root:k,max_file_bytes:1e6});await b.loadConnections(),b.connectionId=W.connection.id,b.tabs=[],b.activeKey="",b.restoredKey="",await b.connect(""),g(i,"files"),g(h,!0)}catch(R){b.setStatus(R.message||"Could not open folder")}}async function B(k){k.preventDefault();try{const R=await ge.createConnection({...l(M),port:Number(l(M).port)});g(S,!1),g(M,{...l(M),label:"",host:"",username:"",password:"",private_key:""},!0),await b.loadConnections(),b.connectionId=R.connection.id,await b.refreshStatus()}catch(R){b.setStatus(R.message||"Could not create connection")}}async function L(){const k=b.connection;if(!k)return;const R=k.kind==="local"?"workspace":"connection";if(confirm(`Remove ${R} "${k.label}"? Saved tabs are cleared; files are untouched.`))try{await ge.deleteConnection(k.id),b.connectionId="",b.tabs=[],await b.loadConnections()}catch(W){b.setStatus(W.message||"Could not delete")}}async function J(){try{const k=await ge.focusTerminal(b.connectionId);b.setStatus(`Focused ${k.window_name}`,"tmux window selected")}catch(k){b.setStatus(k.message||"Could not focus terminal")}}function be(k){var we,Ie,Se,et;const R=k.ctrlKey||k.metaKey,W=k.key.toLowerCase(),ke=((Ie=(we=k.target)==null?void 0:we.matches)==null?void 0:Ie.call(we,"input, textarea, select"))&&!((et=(Se=k.target).closest)!=null&&et.call(Se,".monaco-editor"));R&&W==="s"?(k.preventDefault(),b.saveActive()):R&&W==="p"&&!ke?(k.preventDefault(),b.connectionId&&g(p,!0)):R&&k.shiftKey&&W==="o"?(k.preventDefault(),g(z,!0)):R&&k.shiftKey&&["e","f","g"].includes(W)?(k.preventDefault(),g(i,{e:"files",f:"search",g:"git"}[W],!0),g(h,!0)):R&&W==="b"&&!ke?(k.preventDefault(),g(h,!l(h))):R&&W==="`"?(k.preventDefault(),b.connectionState==="connected"&&g(x,!l(x))):k.key==="Escape"&&l(p)&&(k.preventDefault(),g(p,!1))}var fe=hd();vr("keydown",Ls,be);var ze=$(fe),X=$(ze);No(X,{size:15,class:"shrink-0 text-vs-blue"});var ue=m(X,2),ye=m(ue,2),Ee=m(ye,2);let He;var $t=$(Ee);Io($t,{size:13});var Ot=m(Ee,2),ct=ce(Ot,!0),mn=m(Ot,2),an=$(mn);yo(an,()=>l(E),(k,R)=>{R(k,{size:12})});var kt=m(an),bn=m(ze,2),yn=$(bn),xn=$(yn);We(xn,17,()=>G,k=>k.id,(k,R)=>{var W=Yf(),ke=$(W);{var we=Ke=>{var he=qf();y(Ke,he)};H(ke,Ke=>{l(i)===l(R).id&&l(h)&&Ke(we)})}var Ie=m(ke,2);yo(Ie,()=>l(R).icon,(Ke,he)=>{he(Ke,{size:24,strokeWidth:1.4})});var Se=m(Ie,2);{var et=Ke=>{var he=Gf(),un=ce(he,!0);Q(()=>te(un,b.gitDirtyCount)),y(Ke,he)};H(Se,Ke=>{l(R).id==="git"&&b.gitDirtyCount&&Ke(et)})}Q(()=>{At(W,1,`relative flex h-12 w-12 items-center justify-center ${l(i)===l(R).id&&l(h)?"text-vs-bright":"text-vs-muted hover:text-vs-fg"}`),ve(W,"title",l(R).keys?`${l(R).label} (${l(R).keys})`:l(R).label),ve(W,"aria-label",l(R).label)}),F("click",W,()=>Y(l(R).id)),y(k,W)});var ln=m(xn,2),cn=$(ln),Vn=$(cn);bu(Vn,{size:24,strokeWidth:1.4});var wn=m(cn,2),$n=$(wn);Ru($n,{size:24,strokeWidth:1.4});var Hn=m(yn,2);{var Xs=k=>{var R=od(),W=D(R),ke=$(W);{var we=he=>{qu(he,{})},Ie=he=>{Uf(he,{})},Se=he=>{ef(he,{})},et=he=>{var un=id(),Kn=m(D(un),2),Dt=$(Kn),Un=$(Dt);Un.value=Un.__value="";var ys=m(Un);We(ys,17,()=>b.connections,Me=>Me.id,(Me,Fe)=>{var Ue=Jf(),Sn=ce(Ue),Xt={};Q(()=>{te(Sn,`${l(Fe).kind==="local"?"🖿 ":"⇅ "}${l(Fe).label??""}`),Xt!==(Xt=l(Fe).id)&&(Ue.value=(Ue.__value=Xt)??"")}),y(Me,Ue)});var Wn;Qn(Dt);var $r=m(Dt,2),kr=$($r),Zs=$(kr);_i(Zs,{size:13});var Sr=m(kr,2),Ft=$(Sr);Du(Ft,{size:13});var Qs=m(Sr,2);{var tl=Me=>{var Fe=Xf(),Ue=$(Fe);Lu(Ue,{size:13}),F("click",Fe,L),y(Me,Fe)};H(Qs,Me=>{b.connection&&Me(tl)})}var to=m($r,2);{var nl=Me=>{var Fe=Qf(),Ue=D(Fe);{var Sn=qn=>{var ws=Zf();Le(ws,()=>l(T),Gn=>g(T,Gn)),y(qn,ws)};H(Ue,qn=>{!l(N)&&!b.connection.has_password&&qn(Sn)})}var Xt=m(Ue,2),xs=ce(Xt,!0);Q(()=>te(xs,l(N)?"Open workspace":"Connect")),F("click",Xt,()=>b.connect(l(T))),y(Me,Fe)};H(to,Me=>{b.connection&&b.connectionState!=="connected"&&Me(nl)})}var rl=m(to,2);{var sl=Me=>{var Fe=ed(),Ue=ce(Fe,!0);Q(()=>te(Ue,b.connection.workspace_root)),y(Me,Fe)};H(rl,Me=>{b.connection&&Me(sl)})}var il=m(Kn,2);{var ol=Me=>{var Fe=sd(),Ue=$(Fe),Sn=$(Ue);Sn.value=Sn.__value="local";var Xt=m(Sn);Xt.value=Xt.__value="ssh",Qn(Ue);var xs=m(Ue,2),qn=m(xs,2);{var ws=Zt=>{var no=rd(),ro=D(no),so=m(ro,2),io=m(so,2),$s=m(io,2),ei=$($s);ei.value=ei.__value="agent";var ti=m(ei);ti.value=ti.__value="key";var oo=m(ti);oo.value=oo.__value="password",Qn($s);var ao=m($s,2);{var cl=Ge=>{var Er=td(),ks=D(Er),dl=m(ks,2);Le(ks,()=>l(M).identity_file,ni=>l(M).identity_file=ni),Le(dl,()=>l(M).private_key,ni=>l(M).private_key=ni),y(Ge,Er)};H(ao,Ge=>{l(M).auth_mode==="key"&&Ge(cl)})}var ul=m(ao,2);{var fl=Ge=>{var Er=nd();Le(Er,()=>l(M).password,ks=>l(M).password=ks),y(Ge,Er)};H(ul,Ge=>{l(M).auth_mode==="password"&&Ge(fl)})}Le(ro,()=>l(M).host,Ge=>l(M).host=Ge),Le(so,()=>l(M).username,Ge=>l(M).username=Ge),Le(io,()=>l(M).port,Ge=>l(M).port=Ge),zi($s,()=>l(M).auth_mode,Ge=>l(M).auth_mode=Ge),y(Zt,no)};H(qn,Zt=>{l(M).kind==="ssh"&&Zt(ws)})}var Gn=m(qn,2),al=m(Gn,2),ll=m($(al),2);Q(()=>{ve(Gn,"placeholder",l(M).kind==="local"?"/var/www/app":"Workspace root"),Gn.required=l(M).kind==="local"}),vr("submit",Fe,B),zi(Ue,()=>l(M).kind,Zt=>l(M).kind=Zt),Le(xs,()=>l(M).label,Zt=>l(M).label=Zt),Le(Gn,()=>l(M).workspace_root,Zt=>l(M).workspace_root=Zt),F("click",ll,()=>g(S,!1)),y(Me,Fe)};H(il,Me=>{l(S)&&Me(ol)})}Q(()=>{Wn!==(Wn=b.connectionId)&&(Dt.value=(Dt.__value=Wn)??"",hr(Dt,Wn))}),F("change",Dt,j),F("click",kr,()=>g(z,!0)),F("click",Sr,()=>g(S,!l(S))),y(he,un)};H(ke,he=>{l(i)==="files"?he(we):l(i)==="search"?he(Ie,1):l(i)==="git"?he(Se,2):he(et,-1)})}var Ke=m(W,2);gi(Ke,{side:"right",min:170,max:620,onreset:()=>g(d,c.sidebar,!0),get size(){return l(d)},set size(he){g(d,he,!0)}}),Q(()=>Vr(W,`width: ${l(d)??""}px`)),y(k,R)};H(Hn,k=>{l(h)&&k(Xs)})}var ms=m(Hn,2),C=$(ms);{var K=k=>{var R=ad(),W=$(R);No(W,{size:64,strokeWidth:1,class:"text-vs-line"});var ke=m(W,4),we=$(ke),Ie=$(we);_i(Ie,{size:16});var Se=m(we,2),et=$(Se);zo(et,{size:16}),F("click",we,()=>g(z,!0)),F("click",Se,()=>{g(i,"remote"),g(h,!0),g(S,!0)}),y(k,R)},ie=k=>{var R=cd(),W=D(R);df(W,{});var ke=m(W,2),we=$(ke);af(we,{});var Ie=m(ke,2);{var Se=et=>{var Ke=ld(),he=D(Ke);{var un=Ft=>{gi(Ft,{side:"top",min:120,max:640,onreset:()=>g(v,c.panel,!0),get size(){return l(v)},set size(Qs){g(v,Qs,!0)}})};H(he,Ft=>{l(x)&&Ft(un)})}var Kn=m(he,2),Dt=$(Kn),Un=$(Dt);Io(Un,{size:13});var ys=m(Un,2),Wn=ce(ys,!0),$r=m(ys,2),kr=$($r);Vs(kr,{size:14});var Zs=m(Dt,2),Sr=$(Zs);Bc(Sr,()=>b.connectionId,Ft=>{zf(Ft,{get rootPath(){return s()},get session(){return r()}})}),Q(()=>{var Ft;Vr(Kn,`height: ${l(v)??""}px`),ve(Kn,"hidden",!l(x)),te(Wn,((Ft=b.connection)==null?void 0:Ft.label)||"")}),F("click",$r,()=>g(x,!1)),y(et,Ke)};H(Ie,et=>{l(w)&&b.connectionState==="connected"&&et(Se)})}y(k,R)};H(C,k=>{b.connectionId?k(ie,-1):k(K)})}var xe=m(ms,2);{var Ce=k=>{var R=ud(),W=D(R);gi(W,{side:"left",min:260,max:760,onreset:()=>g(_,c.chat,!0),get size(){return l(_)},set size(un){g(_,un,!0)}});var ke=m(W,2),we=$(ke),Ie=$(we);Ao(Ie,{size:13});var Se=m(Ie,4),et=$(Se);Vs(et,{size:14});var Ke=m(we,2),he=$(Ke);Sf(he,{get sessions(){return n()},get session(){return r()},get rootPath(){return s()}}),Q(()=>Vr(ke,`width: ${l(_)??""}px`)),F("click",Se,()=>g(a,!1)),y(k,R)};H(xe,k=>{l(a)&&k(Ce)})}var Qe=m(bn,2),Re=$(Qe);{var qe=k=>{var R=Do(),W=$(R);{var ke=Se=>{_i(Se,{size:12})},we=Se=>{zo(Se,{size:12})};H(W,Se=>{l(N)?Se(ke):Se(we,-1)})}var Ie=m(W);Q(()=>{ve(R,"title",b.connection.workspace_root),te(Ie,` ${b.connection.label??""}`)}),y(k,R)};H(Re,k=>{b.connection&&k(qe)})}var Be=m(Re,2);{var De=k=>{var R=Do(),W=$(R);Po(W,{size:12});var ke=m(W);Q(()=>te(ke,` ${b.gitBranch??""}`)),y(k,R)};H(Be,k=>{b.gitBranch&&k(De)})}var ht=m(Be,2),St=ce(ht,!0),Rt=m(ht,2),Jt=$(Rt);{var xr=k=>{var R=fd(),W=ce(R);Q(()=>te(W,`${b.dirtyCount??""} unsaved`)),y(k,R)};H(Jt,k=>{b.dirtyCount&&k(xr)})}var Bn=m(Jt,2),kn=ce(Bn,!0),bs=m(Bn,2);{var wr=k=>{var R=dd(),W=D(R),ke=$(W);Ou(ke,{size:12});var we=m(W,2),Ie=$(we);$u(Ie,{size:12}),F("click",W,()=>g(x,!l(x))),F("click",we,J),y(k,R)};H(bs,k=>{b.connectionState==="connected"&&k(wr)})}var Ja=m(bs,2);{var Xa=k=>{var R=vd(),W=$(R);Ao(W,{size:12}),F("click",R,()=>g(a,!l(a))),y(k,R)};H(Ja,k=>{k(Xa)})}var eo=m(Qe,2);{var Za=k=>{Pf(k,{onclose:()=>g(p,!1)})};H(eo,k=>{l(p)&&k(Za)})}var Qa=m(eo,2);{var el=k=>{Lf(k,{onopen:A,onclose:()=>g(z,!1)})};H(Qa,k=>{l(z)&&k(el)})}Q(()=>{var k;ye.disabled=!b.connectionId,He=At(Ee,1,"flex items-center gap-1 rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40",null,He,{"text-vs-bright":l(x)}),Ee.disabled=b.connectionState!=="connected",ve(Ee,"title",b.connectionState==="connected"?"Toggle terminal (Ctrl+`)":"Open a workspace to use the terminal"),ve(Ot,"title",(k=b.connection)==null?void 0:k.workspace_root),te(ct,b.connection?`${b.connection.label} — Multibuilder IDE`:"Multibuilder IDE"),At(mn,1,`flex items-center gap-1 ${b.connectionState==="connected"?"text-vs-green":b.connectionState==="connecting"?"text-vs-yellow":b.connectionState==="idle"?"text-vs-muted":"text-vs-red"}`),te(kt,` ${P[b.connectionState].label??""}`),te(St,b.statusText),te(kn,b.detailText)}),F("click",ue,()=>g(z,!0)),F("click",ye,()=>g(p,!0)),F("click",Ee,()=>g(x,!l(x))),F("click",cn,()=>b.setStatus("Signed in to the Multibuilder dashboard")),F("click",wn,()=>g(h,!l(h))),y(e,fe),lt()}It(["click","change"]);function Ya(e,t){return Lc(pd,{target:e,props:t})}function Fo(){const e=document.getElementById("ide-root");if(!e||e.dataset.mounted)return;e.dataset.mounted="1";const t=window.__IDE_BOOTSTRAP__||{};Ya(e,{sessions:t.sessions||[],session:t.session||"",rootPath:t.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Fo):Fo();window.mountRemoteIde=Ya;export{As as _};
