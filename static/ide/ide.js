const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css","./ide3.css"])))=>i.map(i=>d[i]);
var Rl=Object.defineProperty;var jo=e=>{throw TypeError(e)};var Ll=(e,t,n)=>t in e?Rl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ct=(e,t,n)=>Ll(e,typeof t!="symbol"?t+"":t,n),Da=(e,t,n)=>t.has(e)||jo("Cannot "+n);var u=(e,t,n)=>(Da(e,t,"read from private field"),n?n.call(e):t.get(e)),U=(e,t,n)=>t.has(e)?jo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),ie=(e,t,n,r)=>(Da(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),xe=(e,t,n)=>(Da(e,t,"access private method"),n);var Sa=Array.isArray,Dl=Array.prototype.indexOf,va=Array.prototype.includes,Ca=Array.from,xi=Object.defineProperty,Ln=Object.getOwnPropertyDescriptor,yi=Object.getOwnPropertyDescriptors,Fl=Object.prototype,Hl=Array.prototype,mo=Object.getPrototypeOf,Bo=Object.isExtensible;function ts(e){return typeof e=="function"}const jl=()=>{};function Bl(e){return e()}function Za(e){for(var t=0;t<e.length;t++)e[t]()}function wi(){var e,t,n=new Promise((r,s)=>{e=r,t=s});return{promise:n,resolve:e,reject:t}}function Vl(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const rt=2,Rr=4,Ys=8,bo=1<<24,Wt=16,Rt=32,$n=64,Qa=128,xo=256,Ot=512,et=1024,tt=2048,Yt=4096,ht=8192,wt=16384,jr=32768,ha=1<<25,Fn=65536,pa=1<<17,Kl=1<<18,Br=1<<19,ki=1<<20,rn=1<<25,cr=65536,_a=1<<21,Cr=1<<22,Dn=1<<23,on=Symbol("$state"),$i=Symbol("component"),Si=Symbol("legacy props"),Ul=Symbol(""),aa=Symbol("attributes"),eo=Symbol("class"),to=Symbol("style"),as=Symbol("text"),oa=Symbol("form reset"),Js=new class extends Error{constructor(){super(...arguments);ct(this,"name","StaleReactionError");ct(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var gi;const yo=!!((gi=globalThis.document)!=null&&gi.contentType)&&globalThis.document.contentType.includes("xml"),Wl=1,ql=2,Ci=4,Gl=8,Yl=16,Jl=1,Xl=2,Ei=4,Zl=8,Ql=16,ec=1,tc=2,Xe=Symbol("uninitialized"),Ti="http://www.w3.org/1999/xhtml",Ni="http://www.w3.org/2000/svg",nc="http://www.w3.org/1998/Math/MathML",rc="@attach";function sc(){console.warn("https://svelte.dev/e/derived_inert")}function ac(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function oc(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function zi(e){return e===this.v}function ic(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Mi(e){return!ic(e,this.v)}function Ai(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function lc(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function cc(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function uc(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function dc(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function fc(e){throw new Error("https://svelte.dev/e/effect_orphan")}function vc(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function hc(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function pc(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function _c(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function gc(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function mc(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Vr=!1;function bc(){Vr=!0}let Re=null;function Lr(e){Re=e}function _t(e,t=!1,n){Re={p:Re,i:!1,c:null,e:null,s:e,x:null,r:ve,l:Vr&&!t?{s:null,u:null,$:[]}:null}}function gt(e){var t=Re,n=t.e;if(n!==null){t.e=null;for(var r of n)tl(r)}return t.i=!0,Re=t.p,wo(e)}function wo(e={}){return xi(e,$i,{value:!0}),e}function Kr(){return!Vr||Re!==null&&Re.l===null}let Qn=[];function Pi(){var e=Qn;Qn=[],Za(e)}function sn(e){if(Qn.length===0&&!vs){var t=Qn;queueMicrotask(()=>{t===Qn&&Pi()})}Qn.push(e)}function xc(){for(;Qn.length>0;)Pi()}const yc=-7169;function Ke(e,t){e.f=e.f&yc|t}function ko(e){(e.f&Ot)!==0||e.deps===null?Ke(e,et):Ke(e,Yt)}function Ii(e){if(e!==null)for(const t of e)(t.f&rt)===0||(t.f&cr)===0||(t.f^=cr,Ii(t.deps))}function Oi(e,t,n){(e.f&tt)!==0?t.add(e):(e.f&Yt)!==0&&n.add(e),Ii(e.deps),Ke(e,et)}let ra=!1;function wc(e){var t=ra;try{return ra=!1,[e(),ra]}finally{ra=t}}function Ri(e,t){if(t){const n=document.body;e.autofocus=!0,sn(()=>{document.activeElement===n&&e.focus()})}}let Vo=!1;function kc(){Vo||(Vo=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[oa])==null||t.call(n)})},{capture:!0}))}function Ur(e){var t=me,n=ve;Lt(null),Dt(null);try{return e()}finally{Lt(t),Dt(n)}}function Li(e,t,n,r=n){e.addEventListener(t,()=>Ur(n));const s=e[oa];s?e[oa]=()=>{s(),r(!0)}:e[oa]=()=>r(!0),kc()}function Di(e,t,n,r){const s=Kr()?Dr:$o;var i=e.filter(g=>!g.settled),a=t.map(s);if(n.length===0&&i.length===0){r(a);return}var l=ve,c=$c(),d=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(g=>g.promise)):null;function v(g){if((l.f&wt)===0){c();try{r([...a,...g])}catch(x){nn(x,l)}ga()}}var y=Fi();if(n.length===0){d.then(()=>v([])).finally(y);return}function p(){Promise.all(n.map(g=>Sc(g))).then(v).catch(g=>nn(g,l)).finally(y)}d?d.then(()=>{c(),p(),ga()}):p()}function $c(){var e=ve,t=me,n=Re,r=Q;return function(i=!0){Dt(e),Lt(t),Lr(n),i&&(e.f&wt)===0&&(r==null||r.activate(),r==null||r.apply())}}function ga(e=!0){Dt(null),Lt(null),Lr(null),e&&(Q==null||Q.deactivate())}function Fi(){var e=ve,t=e.b,n=Q,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function Dr(e){var t=rt|tt;return ve!==null&&(ve.f|=Br),{ctx:Re,deps:null,effects:null,equals:zi,f:t,fn:e,reactions:null,rv:0,v:Xe,wv:0,parent:ve,ac:null}}const os=Symbol("obsolete");function Sc(e,t,n){let r=ve;r===null&&lc();var s=void 0,i=Sn(Xe),a=!me,l=new Set;return Hc(()=>{var g,x;var c=ve,d=wi();s=d.promise;try{Promise.resolve(e()).then(d.resolve,w=>{w!==Js&&d.reject(w)}).finally(ga)}catch(w){d.reject(w),ga()}var v=Q;if(a){if((c.f&jr)!==0)var y=Fi();if((g=r.b)!=null&&g.is_rendered())(x=v.async_deriveds.get(c))==null||x.reject(os);else for(const w of l.values())w.reject(os);l.add(d),v.async_deriveds.set(c,d)}const p=(w,S=void 0)=>{y==null||y(),l.delete(d),S!==os&&(v.activate(),S?(i.f|=Dn,Fr(i,S)):((i.f&Dn)!==0&&(i.f^=Dn),Fr(i,w)),v.deactivate())};d.promise.then(p,w=>p(null,w||"unknown"))}),Ta(()=>{for(const c of l)c.reject(os)}),new Promise(c=>{function d(v){function y(){v===s?c(i):d(s)}v.then(y,y)}d(s)})}function ft(e){const t=Dr(e);return ll(t),t}function $o(e){const t=Dr(e);return t.equals=Mi,t}function Cc(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)ot(t[n])}}function So(e){var t,n=ve,r=e.parent;if(!Cn&&r!==null&&e.v!==Xe&&(r.f&(wt|ht))!==0)return sc(),e.v;Dt(r);try{e.f&=~cr,Cc(e),t=fl(e)}finally{Dt(n)}return t}function Hi(e){var t=So(e);if(!e.equals(t)&&(e.wv=ul(),(!(Q!=null&&Q.is_fork)||e.deps===null)&&(Q!==null?(Q.capture(e,t,!0),fs==null||fs.capture(e,t,!0)):e.v=t,e.deps===null))){Ke(e,et);return}Cn||(at!==null?(To()||Q!=null&&Q.is_fork)&&at.set(e,t):ko(e))}function Ec(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&Ur(()=>{n.ac.abort(Js),n.ac=null}),n.fn!==null&&(n.teardown=jl),gs(n,0),zo(n))}function ji(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Hr(t)}let Fa=null,kr=null,Q=null,fs=null,at=null,no=null,vs=!1,Ha=!1,Sr=null,ia=null;var Ko=0;let Tc=1;var Nr,On,nr,zr,Mr,Ar,xn,Pr,bt,xs,yn,Kt,Qt,Ir,rr,ze,ro,is,so,Bi,Vi,$r,Nc,ls;const wa=class wa{constructor(){U(this,ze);ct(this,"id",Tc++);U(this,Nr,!1);ct(this,"linked",!0);U(this,On,null);U(this,nr,null);ct(this,"async_deriveds",new Map);ct(this,"current",new Map);ct(this,"previous",new Map);U(this,zr,new Set);U(this,Mr,new Set);U(this,Ar,0);U(this,xn,new Map);U(this,Pr,null);U(this,bt,[]);U(this,xs,[]);U(this,yn,new Set);U(this,Kt,new Set);U(this,Qt,new Map);U(this,Ir,new Set);ct(this,"is_fork",!1);U(this,rr,!1);kr===null?Fa=kr=this:(ie(kr,nr,this),ie(this,On,kr)),kr=this}skip_effect(t){u(this,Qt).has(t)||u(this,Qt).set(t,{d:[],m:[]}),u(this,Ir).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=u(this,Qt).get(t);if(r){u(this,Qt).delete(t);for(var s of r.d)Ke(s,tt),n(s);for(s of r.m)Ke(s,Yt),n(s)}u(this,Ir).add(t)}capture(t,n,r=!1){t.v!==Xe&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Dn)===0&&(this.current.set(t,[n,r]),at==null||at.set(t,n)),this.is_fork||(t.v=n)}activate(){Q=this}deactivate(){Q=null,at=null}flush(){try{Ha=!0,Q=this,xe(this,ze,is).call(this)}finally{Ko=0,no=null,Sr=null,ia=null,Ha=!1,Q=null,at=null,ln.clear()}}discard(){var t;for(const n of u(this,Mr))n(this);u(this,Mr).clear();for(const n of this.async_deriveds.values())n.reject(os);xe(this,ze,ls).call(this),(t=u(this,Pr))==null||t.resolve()}register_created_effect(t){u(this,xs).push(t)}increment(t,n){if(ie(this,Ar,u(this,Ar)+1),t){let r=u(this,xn).get(n)??0;u(this,xn).set(n,r+1)}}decrement(t,n){if(ie(this,Ar,u(this,Ar)-1),t){let r=u(this,xn).get(n)??0;r===1?u(this,xn).delete(n):u(this,xn).set(n,r-1)}u(this,rr)||(ie(this,rr,!0),sn(()=>{ie(this,rr,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)u(this,yn).add(r);for(const r of n)u(this,Kt).add(r);t.clear(),n.clear()}oncommit(t){u(this,zr).add(t)}ondiscard(t){u(this,Mr).add(t)}settled(){return(u(this,Pr)??ie(this,Pr,wi())).promise}static ensure(){if(Q===null){const t=Q=new wa;!Ha&&!vs&&sn(()=>{u(t,Nr)||t.flush()})}return Q}apply(){{at=null;return}}schedule(t){var s;if(no=t,(s=t.b)!=null&&s.is_pending&&(t.f&(Rr|Ys|bo))!==0&&(t.f&jr)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Sr!==null&&n===ve&&(me===null||(me.f&rt)===0))return;if((r&($n|Rt))!==0){if((r&et)===0)return;n.f^=et}}u(this,bt).push(n)}};Nr=new WeakMap,On=new WeakMap,nr=new WeakMap,zr=new WeakMap,Mr=new WeakMap,Ar=new WeakMap,xn=new WeakMap,Pr=new WeakMap,bt=new WeakMap,xs=new WeakMap,yn=new WeakMap,Kt=new WeakMap,Qt=new WeakMap,Ir=new WeakMap,rr=new WeakMap,ze=new WeakSet,ro=function(){if(this.is_fork)return!0;for(const r of u(this,xn).keys()){for(var t=r,n=!1;t.parent!==null;){if(u(this,Qt).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},is=function(){var c,d,v,y;ie(this,Nr,!0),Ko++>1e3&&(xe(this,ze,ls).call(this),Mc());for(const p of u(this,yn))u(this,Kt).delete(p),Ke(p,tt),this.schedule(p);for(const p of u(this,Kt))Ke(p,Yt),this.schedule(p);const t=u(this,bt);ie(this,bt,[]),this.apply();var n=Sr=[],r=[],s=ia=[];for(const p of t)try{xe(this,ze,so).call(this,p,n,r)}catch(g){throw Wi(p),xe(this,ze,ro).call(this)||this.discard(),g}if(Q=null,s.length>0){var i=wa.ensure();for(const p of s)i.schedule(p)}if(Sr=null,ia=null,xe(this,ze,ro).call(this)){xe(this,ze,$r).call(this,r),xe(this,ze,$r).call(this,n);for(const[p,g]of u(this,Qt))Ui(p,g);s.length>0&&xe(c=Q,ze,is).call(c);return}const a=xe(this,ze,Bi).call(this);if(a){xe(this,ze,$r).call(this,r),xe(this,ze,$r).call(this,n),xe(d=a,ze,Vi).call(d,this);return}u(this,yn).clear(),u(this,Kt).clear();for(const p of u(this,zr))p(this);u(this,zr).clear(),fs=this,Uo(r),Uo(n),fs=null,(v=u(this,Pr))==null||v.resolve();var l=Q;if(u(this,Ar)===0&&(u(this,bt).length===0||l!==null)&&xe(this,ze,ls).call(this),u(this,bt).length>0)if(l!==null){const p=l;u(p,bt).push(...u(this,bt).filter(g=>!u(p,bt).includes(g)))}else l=this;l!==null&&(ln.clear(),xe(y=l,ze,is).call(y))},so=function(t,n,r){t.f^=et;for(var s=t.first;s!==null;){var i=s.f,a=(i&(Rt|$n))!==0,l=a&&(i&et)!==0,c=l||(i&ht)!==0||u(this,Qt).has(s);if(!c&&s.fn!==null){a?s.f^=et:(i&Rr)!==0?n.push(s):Zs(s)&&((i&Wt)!==0&&u(this,Kt).add(s),Hr(s));var d=s.first;if(d!==null){s=d;continue}}for(;s!==null;){var v=s.next;if(v!==null){s=v;break}s=s.parent}}},Bi=function(){for(var t=u(this,On);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=u(t,On)}return null},Vi=function(t){var r;for(const[s,i]of t.current)!this.previous.has(s)&&t.previous.has(s)&&this.previous.set(s,t.previous.get(s)),this.current.set(s,i);for(const[s,i]of t.async_deriveds){const a=this.async_deriveds.get(s);a&&i.promise.then(a.resolve).catch(a.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,yn),u(t,Kt));const n=s=>{var i=s.reactions;if(i!==null&&!((s.f&rt)!==0&&(s.f&(tt|Yt))===0))for(const c of i){var a=c.f;if((a&rt)!==0)n(c);else{var l=c;a&(Cr|Wt)&&!this.async_deriveds.has(l)&&(u(this,Kt).delete(l),Ke(l,tt),this.schedule(l))}}};for(const s of this.current.keys())n(s);this.oncommit(()=>t.discard()),xe(r=t,ze,ls).call(r),Q=this,xe(this,ze,is).call(this)},$r=function(t){for(var n=0;n<t.length;n+=1)Oi(t[n],u(this,yn),u(this,Kt))},Nc=function(){var y;for(let p=Fa;p!==null;p=u(p,nr)){var t=p.id<this.id,n=[];for(const[g,[x,w]]of this.current){if(p.current.has(g)){var r=p.current.get(g)[0];if(t&&x!==r)p.current.set(g,[x,w]);else continue}n.push(g)}if(t)for(const[g,x]of this.async_deriveds){const w=p.async_deriveds.get(g);w&&x.promise.then(w.resolve).catch(w.reject)}var s=[...p.current.keys()].filter(g=>!p.current.get(g)[1]);if(!(!u(p,Nr)||s.length===0)){var i=s.filter(g=>!this.current.has(g));if(i.length===0)t&&p.discard();else if(n.length>0){if(t)for(const g of u(this,Ir))p.unskip_effect(g,x=>{var w;(x.f&(Wt|Cr))!==0?p.schedule(x):xe(w=p,ze,$r).call(w,[x])});p.activate();var a=new Set,l=new Map;for(var c of n)Ki(c,i,a,l);l=new Map;var d=[...p.current].filter(([g,x])=>{const w=this.current.get(g);return w?w[0]!==x[0]||w[1]!==x[1]:!0}).map(([g])=>g);if(d.length>0)for(const g of u(this,xs))(g.f&(wt|ht|pa))===0&&Co(g,d,l)&&((g.f&(Cr|Wt))!==0?(Ke(g,tt),p.schedule(g)):u(p,yn).add(g));if(u(p,bt).length>0&&!u(p,rr)){p.apply();for(var v of u(p,bt))xe(y=p,ze,so).call(y,v,[],[]);ie(p,bt,[])}p.deactivate()}}}},ls=function(){if(this.linked){var t=u(this,On),n=u(this,nr);t===null?Fa=n:ie(t,nr,n),n===null?kr=t:ie(n,On,t),this.linked=!1}};let ur=wa;function zc(e){var t=vs;vs=!0;try{for(var n;;){if(xc(),Q===null)return n;Q.flush()}}finally{vs=t}}function Mc(){try{vc()}catch(e){nn(e,no)}}let Vt=null;function Uo(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(wt|ht))===0&&Zs(r)&&(Vt=new Set,Hr(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&al(r),(Vt==null?void 0:Vt.size)>0)){ln.clear();for(const s of Vt){if((s.f&(wt|ht))!==0)continue;const i=[s];let a=s.parent;for(;a!==null;)Vt.has(a)&&(Vt.delete(a),i.push(a)),a=a.parent;for(let l=i.length-1;l>=0;l--){const c=i[l];(c.f&(wt|ht))===0&&Hr(c)}}Vt.clear()}}Vt=null}}function Ki(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const s of e.reactions){const i=s.f;(i&rt)!==0?Ki(s,t,n,r):(i&(Cr|Wt))!==0&&(i&tt)===0&&Co(s,t,r)&&(Ke(s,tt),Eo(s))}}function Co(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const s of e.deps){if(va.call(t,s))return!0;if((s.f&rt)!==0&&Co(s,t,n))return n.set(s,!0),!0}return n.set(e,!1),!1}function Eo(e){Q.schedule(e)}function Ui(e,t){if(!((e.f&Rt)!==0&&(e.f&et)!==0)){(e.f&tt)!==0?t.d.push(e):(e.f&Yt)!==0&&t.m.push(e),Ke(e,et);for(var n=e.first;n!==null;)Ui(n,t),n=n.next}}function Wi(e){Ke(e,et);for(var t=e.first;t!==null;)Wi(t),t=t.next}let ma=new Set;const ln=new Map;let qi=!1;function Sn(e,t){var n={f:0,v:e,reactions:null,equals:zi,rv:0,wv:0};return n}function P(e,t){const n=Sn(e);return ll(n),n}function Ac(e,t=!1,n=!0){var s;const r=Sn(e);return t||(r.equals=Mi),Vr&&n&&Re!==null&&Re.l!==null&&((s=Re.l).s??(s.s=[])).push(r),r}function f(e,t,n=!1){me!==null&&(!Gt||(me.f&pa)!==0)&&Kr()&&(me.f&(rt|Wt|Cr|pa))!==0&&(un===null||!un.has(e))&&gc();let r=n?Me(t):t;return Fr(e,r,ia)}function Fr(e,t,n=null){if(!e.equals(t)){Cn?ln.set(e,t):ln.has(e)||ln.set(e,e.v);var r=ur.ensure();if(r.capture(e,t),(e.f&rt)!==0){const s=e;(e.f&tt)!==0&&So(s),at===null&&ko(s)}e.wv=ul(),Gi(e,tt,n),Kr()&&ve!==null&&(ve.f&et)!==0&&(ve.f&(Rt|$n))===0&&(At===null?Bc([e]):At.push(e)),!r.is_fork&&ma.size>0&&!qi&&Pc()}return t}function Pc(){qi=!1;for(const e of ma){(e.f&et)!==0&&Ke(e,Yt);let t;try{t=Zs(e)}catch{t=!0}t&&Hr(e)}ma.clear()}function Wo(e,t=1){var n=o(e),r=t===1?n++:n--;return f(e,n),r}function hs(e){f(e,e.v+1)}function Gi(e,t,n){var r=e.reactions;if(r!==null)for(var s=Kr(),i=r.length,a=0;a<i;a++){var l=r[a],c=l.f;if(!(!s&&l===ve)){var d=(c&tt)===0;if(d&&Ke(l,t),(c&pa)!==0)ma.add(l);else if((c&rt)!==0){var v=l;at==null||at.delete(v),(c&cr)===0&&(c&Ot&&(ve===null||(ve.f&_a)===0)&&(l.f|=cr),Gi(v,Yt,n))}else if(d){var y=l;(c&Wt)!==0&&Vt!==null&&Vt.add(y),n!==null?n.push(y):Eo(y)}}}}function Me(e){if(typeof e!="object"||e===null||on in e||$i in e)return e;const t=mo(e);if(t!==Fl&&t!==Hl)return e;var n=new Map,r=Sa(e),s=P(0),i=lr,a=l=>{if(lr===i)return l();var c=me,d=lr;Lt(null),Yo(i);var v=l();return Lt(c),Yo(d),v};return r&&n.set("length",P(e.length)),new Proxy(e,{defineProperty(l,c,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&pc();var v=n.get(c);return v===void 0?a(()=>{var y=P(d.value);return n.set(c,y),y}):f(v,d.value,!0),!0},deleteProperty(l,c){var d=n.get(c);if(d===void 0){if(c in l){const v=a(()=>P(Xe));n.set(c,v),hs(s)}}else f(d,Xe),hs(s);return!0},get(l,c,d){var g;if(c===on)return e;var v=n.get(c),y=c in l;if(v===void 0&&(!y||(g=Ln(l,c))!=null&&g.writable)&&(v=a(()=>{var x=Me(y?l[c]:Xe),w=P(x);return w}),n.set(c,v)),v!==void 0){var p=o(v);return p===Xe?void 0:p}return Reflect.get(l,c,d)},getOwnPropertyDescriptor(l,c){var d=Reflect.getOwnPropertyDescriptor(l,c);if(d&&"value"in d){var v=n.get(c);v&&(d.value=o(v))}else if(d===void 0){var y=n.get(c),p=y==null?void 0:y.v;if(y!==void 0&&p!==Xe)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return d},has(l,c){var p;if(c===on)return!0;var d=n.get(c),v=d!==void 0&&d.v!==Xe||Reflect.has(l,c);if(d!==void 0||ve!==null&&(!v||(p=Ln(l,c))!=null&&p.writable)){d===void 0&&(d=a(()=>{var g=v?Me(l[c]):Xe,x=P(g);return x}),n.set(c,d));var y=o(d);if(y===Xe)return!1}return v},set(l,c,d,v){var A;var y=n.get(c),p=c in l;if(r&&c==="length")for(var g=d;g<y.v;g+=1){var x=n.get(g+"");x!==void 0?f(x,Xe):g in l&&(x=a(()=>P(Xe)),n.set(g+"",x))}if(y===void 0)(!p||(A=Ln(l,c))!=null&&A.writable)&&(y=a(()=>P(void 0)),f(y,Me(d)),n.set(c,y));else{p=y.v!==Xe;var w=a(()=>Me(d));f(y,w)}var S=Reflect.getOwnPropertyDescriptor(l,c);if(S!=null&&S.set&&S.set.call(v,d),!p){if(r&&typeof c=="string"){var E=n.get("length"),H=Number(c);Number.isInteger(H)&&H>=E.v&&f(E,H+1)}hs(s)}return!0},ownKeys(l){o(s);var c=Reflect.ownKeys(l).filter(y=>{var p=n.get(y);return p===void 0||p.v!==Xe});for(var[d,v]of n)v.v!==Xe&&!(d in l)&&c.push(d);return c},setPrototypeOf(){_c()}})}function qo(e){try{if(e!==null&&typeof e=="object"&&on in e)return e[on]}catch{}return e}function Yi(e,t){return Object.is(qo(e),qo(t))}var _s,Ji,Xi,Zi;function Ic(){if(_s===void 0){_s=window,Ji=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Xi=Ln(t,"firstChild").get,Zi=Ln(t,"nextSibling").get,Bo(e)&&(e[eo]=void 0,e[aa]=null,e[to]=void 0,e.__e=void 0),Bo(n)&&(n[as]=void 0)}}function cn(e=""){return document.createTextNode(e)}function qt(e){return Xi.call(e)}function Xs(e){return Zi.call(e)}function b(e,t){return qt(e)}function V(e,t=!1){{var n=qt(e);return n instanceof Comment&&n.data===""?Xs(n):n}}function X(e,t=!1){return qt(e)}function h(e,t=1,n=!1){let r=e;for(;t--;)r=Xs(r);return r}function Oc(e){e.textContent=""}function Qi(){return!1}function Ea(e,t,n){return t==null||t===Ti?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Rc(e){var t=ve;if(t===null)return me.f|=Dn,e;if((t.f&jr)===0&&(t.f&Rr)===0)throw e;nn(e,t)}function nn(e,t){if(!(t!==null&&(t.f&wt)!==0)){for(;t!==null;){if((t.f&Qa)!==0&&(t.f&(wt|ha))===0){if((t.f&jr)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function el(e){ve===null&&(me===null&&fc(),dc()),Cn&&uc()}function Lc(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Jt(e,t){var n=ve;n!==null&&(n.f&ht)!==0&&(e|=ht);var r={ctx:Re,deps:null,nodes:null,f:e|tt|Ot,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};Q==null||Q.register_created_effect(r);var s=r;if((e&Rr)!==0)Sr!==null?Sr.push(r):ur.ensure().schedule(r);else if(t!==null){try{Hr(r)}catch(a){throw ot(r),a}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&Br)===0&&(s=s.first,(e&Wt)!==0&&(e&Fn)!==0&&s!==null&&(s.f|=Fn))}if(s!==null&&(s.parent=n,n!==null&&Lc(s,n),me!==null&&(me.f&rt)!==0&&(e&$n)===0)){var i=me;(i.effects??(i.effects=[])).push(s)}return r}function To(){return me!==null&&!Gt}function Ta(e){const t=Jt(Ys,null);return Ke(t,et),t.teardown=e,t}function pt(e){el();var t=ve.f,n=!me&&(t&Rt)!==0&&Re!==null&&!Re.i;if(n){var r=Re;(r.e??(r.e=[])).push(e)}else return tl(e)}function tl(e){return Jt(Rr|ki,e)}function Dc(e){return el(),Jt(Ys|ki,e)}function Fc(e){ur.ensure();const t=Jt($n|Br,e);return(n={})=>new Promise(r=>{n.outro?ir(t,()=>{ot(t),r(void 0)}):(ot(t),r(void 0))})}function Na(e){return Jt(Rr,e)}function Hc(e){return Jt(Cr|Br,e)}function No(e,t=0){return Jt(Ys|t,e)}function Y(e,t=[],n=[],r=[]){Di(r,t,n,s=>{Jt(Ys,()=>{e(...s.map(o))})})}function Wr(e,t=0){var n=Jt(Wt|t,e);return n}function nl(e,t=0){var n=Jt(bo|t,e);return n}function xt(e){return Jt(Rt|Br,e)}function rl(e){var t=e.teardown;if(t!==null){const n=Cn,r=me;Go(!0),Lt(null);try{t.call(null)}catch(s){nn(s,e.parent)}finally{Go(n),Lt(r)}}}function zo(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const s=n.ac;s!==null&&Ur(()=>{s.abort(Js)});var r=n.next;(n.f&$n)!==0?n.parent=null:ot(n,t),n=r}}function jc(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Rt)===0&&ot(t),t=n}}function ot(e,t=!0){var n=!1;(t||(e.f&Kl)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(sl(e.nodes.start,e.nodes.end),n=!0),e.f|=ha,zo(e,t&&!n),gs(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const i of r)i.stop();rl(e),e.f^=ha,e.f|=wt;var s=e.parent;s!==null&&s.first!==null&&al(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function sl(e,t){for(;e!==null;){var n=e===t?null:Xs(e);e.remove(),e=n}}function al(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function ir(e,t,n=!0){var r=[];e.f|=xo,ol(e,r,!0);var s=()=>{n&&ot(e),t&&t()},i=r.length;if(i>0){var a=()=>--i||s();for(var l of r)l.out(a)}else s()}function ol(e,t,n){if((e.f&ht)===0){e.f^=ht;var r=e.nodes&&e.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&t.push(l);for(var s=e.first;s!==null;){var i=s.next;if((s.f&$n)===0){var a=(s.f&Fn)!==0||(s.f&Rt)!==0&&(e.f&Wt)!==0;ol(s,t,a?n:!1)}s=i}}}function ba(e){e.f&=~xo,il(e,!0)}function il(e,t){if((e.f&xo)===0&&(e.f&ht)!==0){e.f^=ht,(e.f&et)===0&&(Ke(e,tt),ur.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,s=(n.f&Fn)!==0||(n.f&Rt)!==0;il(n,s?t:!1),n=r}var i=e.nodes&&e.nodes.t;if(i!==null)for(const a of i)(a.is_global||t)&&a.in()}}function Mo(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var s=n===r?null:Xs(n);t.append(n),n=s}}let la=!1,Cn=!1;function Go(e){Cn=e}let me=null,Gt=!1;function Lt(e){me=e}let ve=null;function Dt(e){ve=e}let un=null;function ll(e){me!==null&&(un??(un=new Set)).add(e)}let yt=null,Tt=0,At=null;function Bc(e){At=e}let cl=1,er=0,lr=er;function Yo(e){lr=e}function ul(){return++cl}function Zs(e){var t=e.f;if((t&tt)!==0)return!0;if(t&rt&&(e.f&=~cr),(t&Yt)!==0){for(var n=e.deps,r=n.length,s=0;s<r;s++){var i=n[s];if(Zs(i)&&Hi(i),i.wv>e.wv)return!0}(t&Ot)!==0&&at===null&&Ke(e,et)}return!1}function dl(e,t,n=!0){var r=e.reactions;if(r!==null&&!(un!==null&&un.has(e)))for(var s=0;s<r.length;s++){var i=r[s];(i.f&rt)!==0?dl(i,t,!1):t===i&&(n?Ke(i,tt):(i.f&et)!==0&&Ke(i,Yt),Eo(i))}}function fl(e){var t=yt,n=Tt,r=At,s=me,i=un,a=Re,l=Gt,c=lr,d=e.f;yt=null,Tt=0,At=null,me=(d&(Rt|$n))===0?e:null,un=null,Lr(e.ctx),Gt=!1,lr=++er,e.ac!==null&&(Ur(()=>{e.ac.abort(Js)}),e.ac=null);try{e.f|=_a;var v=e.fn,y=v();e.f|=jr;var p=Jo(e);if(Kr()&&At!==null&&!Gt&&p!==null&&(e.f&(rt|Yt|tt))===0)for(var g=0;g<At.length;g++)dl(At[g],e);if(s!==null&&s!==e){if(er++,s.deps!==null)for(let x=0;x<n;x+=1)s.deps[x].rv=er;if(t!==null)for(const x of t)x.rv=er;At!==null&&(r===null?r=At:r.push(...At))}return(e.f&Dn)!==0&&(e.f^=Dn),y}catch(x){return Jo(e),Rc(x)}finally{e.f^=_a,yt=t,Tt=n,At=r,me=s,un=i,Lr(a),Gt=l,lr=c}}function Jo(e){var s;var t=e.deps,n=Q==null?void 0:Q.is_fork;if(yt!==null){var r;if(n||gs(e,Tt),t!==null&&Tt>0)for(t.length=Tt+yt.length,r=0;r<yt.length;r++)t[Tt+r]=yt[r];else e.deps=t=yt;if(To()&&(e.f&Ot)!==0)for(r=Tt;r<t.length;r++)((s=t[r]).reactions??(s.reactions=[])).push(e)}else!n&&t!==null&&Tt<t.length&&(gs(e,Tt),t.length=Tt);return t}function Vc(e,t){let n=t.reactions;if(n!==null){var r=Dl.call(n,e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(t.f&rt)!==0&&(yt===null||!va.call(yt,t))){var i=t;(i.f&Ot)!==0&&(i.f^=Ot,i.f&=~cr),i.v!==Xe&&ko(i),i.ac!==null&&Ur(()=>{i.ac.abort(Js),i.ac=null,Ke(i,tt)}),Ec(i),gs(i,0)}}function gs(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Vc(e,n[r])}function Hr(e){var t=e.f;if((t&wt)===0){Ke(e,et);var n=ve,r=la;ve=e,la=(t&(Rt|$n))===0;try{(t&(Wt|bo))!==0?jc(e):zo(e),rl(e);var s=fl(e);e.teardown=typeof s=="function"?s:null,e.wv=cl;var i}finally{la=r,ve=n}}}async function Kc(){await Promise.resolve(),zc()}function o(e){var t=e.f,n=(t&rt)!==0;if(me!==null&&!Gt){var r=ve!==null&&(ve.f&wt)!==0;if(!r&&(un===null||!un.has(e))){var s=me.deps;if((me.f&_a)!==0)e.rv<er&&(e.rv=er,yt===null&&s!==null&&s[Tt]===e?Tt++:yt===null?yt=[e]:yt.push(e));else{me.deps??(me.deps=[]),va.call(me.deps,e)||me.deps.push(e);var i=e.reactions;i===null?e.reactions=[me]:va.call(i,me)||i.push(me)}}}if(Cn&&ln.has(e))return ln.get(e);if(n){var a=e;if(Cn){var l=a.v;return((a.f&et)===0&&a.reactions!==null||hl(a))&&(l=So(a)),ln.set(a,l),l}var c=(a.f&Ot)===0&&!Gt&&me!==null&&(la||(me.f&Ot)!==0),d=(a.f&jr)===0;Zs(a)&&(c&&(a.f|=Ot),Hi(a)),c&&!d&&(ji(a),vl(a))}if(at!=null&&at.has(e))return at.get(e);if((e.f&Dn)!==0)throw e.v;return e.v}function vl(e){if(e.f|=Ot,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&rt)!==0&&(t.f&Ot)===0&&(ji(t),vl(t))}function hl(e){if(e.v===Xe)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(ln.has(t)||(t.f&rt)!==0&&hl(t))return!0;return!1}function En(e){var t=Gt;try{return Gt=!0,e()}finally{Gt=t}}function Xn(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(on in e)ao(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&on in n&&ao(n)}}}function ao(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{ao(e[r],t)}catch{}const n=mo(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=yi(n);for(let s in r){const i=r[s].get;if(i)try{i.call(e)}catch{}}}}}function Uc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Wc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function qc(e){return Wc.includes(e)}const Gc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Yc(e){return e=e.toLowerCase(),Gc[e]??e}const Jc=["touchstart","touchmove"];function Xc(e){return Jc.includes(e)}const tr=Symbol("events"),pl=new Set,oo=new Set;function _l(e,t,n,r={}){function s(i){if(r.capture||io.call(t,i),!i.cancelBubble)return Ur(()=>n==null?void 0:n.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?sn(()=>{t.addEventListener(e,s,r)}):t.addEventListener(e,s,r),s}function dr(e,t,n,r,s){var i={capture:r,passive:s},a=_l(e,t,n,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Ta(()=>{t.removeEventListener(e,a,i)})}function I(e,t,n){(t[tr]??(t[tr]={}))[e]=n}function Ft(e){for(var t=0;t<e.length;t++)pl.add(e[t]);for(var n of oo)n(e)}let ja=null,Ba=!1;function io(e){var w,S;var t=this,n=t.ownerDocument,r=e.type,s=((w=e.composedPath)==null?void 0:w.call(e))||[],i=s[0]||e.target;ja=e,Ba||(Ba=!0,setTimeout(()=>{Ba=!1,ja=null}));var a=0,l=ja===e&&e[tr];if(l){var c=s.indexOf(l);if(c!==-1&&(t===document||t===window)){e[tr]=t;return}var d=s.indexOf(t);if(d===-1)return;c<=d&&(a=c)}if(i=s[a]||e.target,i!==t){xi(e,"currentTarget",{configurable:!0,get(){return i||n}});var v=me,y=ve;Lt(null),Dt(null);try{for(var p,g=[];i!==null&&i!==t;){try{var x=(S=i[tr])==null?void 0:S[r];x!=null&&(!i.disabled||e.target===i)&&x.call(i,e)}catch(E){p?g.push(E):p=E}if(e.cancelBubble)break;a++,i=a<s.length?s[a]:null}if(p){for(let E of g)queueMicrotask(()=>{throw E});throw p}}finally{e[tr]=t,delete e.currentTarget,Lt(v),Dt(y)}}}var mi;const Va=((mi=globalThis==null?void 0:globalThis.window)==null?void 0:mi.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Zc(e){return(Va==null?void 0:Va.createHTML(e))??e}function gl(e){var t=Ea("template");return t.innerHTML=Zc(e.replaceAll("<!>","<!---->")),t.content}function Hn(e,t){var n=ve;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function N(e,t){var n=(t&ec)!==0,r=(t&tc)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=gl(i?e:"<!>"+e),n||(s=qt(s)));var a=r||Ji?document.importNode(s,!0):s.cloneNode(!0);if(n){var l=qt(a),c=a.lastChild;Hn(l,c)}else Hn(a,a);return a}}function Qc(e,t,n="svg"){var r=!e.startsWith("<!>"),s=`<${n}>${r?e:"<!>"+e}</${n}>`,i;return()=>{if(!i){var a=gl(s),l=qt(a);i=qt(l)}var c=i.cloneNode(!0);return Hn(c,c),c}}function ml(e,t){return Qc(e,t,"svg")}function Xo(e=""){{var t=cn(e+"");return Hn(t,t),t}}function Z(){var e=document.createDocumentFragment(),t=document.createComment(""),n=cn();return e.append(t,n),Hn(t,n),e}function m(e,t){e!==null&&e.before(t)}function eu(e){let t=0,n=Sn(0),r;return()=>{To()&&(o(n),No(()=>(t===0&&(r=En(()=>e(()=>hs(n)))),t+=1,()=>{sn(()=>{t-=1,t===0&&(r==null||r(),r=void 0,hs(n))})})))}}var tu=Fn|Br;function nu(e,t,n,r){new ru(e,t,n,r)}var Pt,go,It,sr,ut,St,dt,Ct,en,ar,Rn,Or,ys,ws,wn,ka,Pe,su,au,lo,ou,co,cs,ca,uo,fo;class ru{constructor(t,n,r,s){U(this,Pe);ct(this,"parent");ct(this,"is_pending",!1);ct(this,"transform_error");U(this,Pt);U(this,go,null);U(this,It);U(this,sr);U(this,ut);U(this,St,null);U(this,dt,null);U(this,Ct,null);U(this,en,null);U(this,ar,0);U(this,Rn,0);U(this,Or,!1);U(this,ys,new Set);U(this,ws,new Set);U(this,wn,null);U(this,ka,eu(()=>(ie(this,wn,Sn(u(this,ar))),()=>{ie(this,wn,null)})));var i;ie(this,Pt,t),ie(this,It,n),ie(this,sr,a=>{var l=ve;l.b=this,l.f|=Qa,r(a)}),this.parent=ve.b,this.transform_error=s??((i=this.parent)==null?void 0:i.transform_error)??(a=>a),ie(this,ut,Wr(()=>{xe(this,Pe,co).call(this)},tu))}defer_effect(t){Oi(t,u(this,ys),u(this,ws))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,It).pending}update_pending_count(t,n){xe(this,Pe,uo).call(this,t,n),ie(this,ar,u(this,ar)+t),!(!u(this,wn)||u(this,Or))&&(ie(this,Or,!0),sn(()=>{ie(this,Or,!1),u(this,wn)&&Fr(u(this,wn),u(this,ar))}))}get_effect_pending(){return u(this,ka).call(this),o(u(this,wn))}error(t){if(!u(this,It).onerror&&!u(this,It).failed)throw t;Q!=null&&Q.is_fork?(u(this,St)&&Q.skip_effect(u(this,St)),u(this,dt)&&Q.skip_effect(u(this,dt)),u(this,Ct)&&Q.skip_effect(u(this,Ct)),Q.oncommit(()=>{xe(this,Pe,fo).call(this,t)})):xe(this,Pe,fo).call(this,t)}}Pt=new WeakMap,go=new WeakMap,It=new WeakMap,sr=new WeakMap,ut=new WeakMap,St=new WeakMap,dt=new WeakMap,Ct=new WeakMap,en=new WeakMap,ar=new WeakMap,Rn=new WeakMap,Or=new WeakMap,ys=new WeakMap,ws=new WeakMap,wn=new WeakMap,ka=new WeakMap,Pe=new WeakSet,su=function(){try{ie(this,St,xt(()=>u(this,sr).call(this,u(this,Pt))))}catch(t){this.error(t)}},au=function(t){const n=u(this,It).failed,{reset:r,invoke_onerror:s}=xe(this,Pe,lo).call(this,t);sn(s),n&&ie(this,Ct,xt(()=>{n(u(this,Pt),()=>t,()=>r)}))},lo=function(t){var n=!1,r=!1;const s=()=>{if(n){oc();return}n=!0,r&&mc(),u(this,Ct)!==null&&ir(u(this,Ct),()=>{ie(this,Ct,null)}),xe(this,Pe,ca).call(this,()=>{xe(this,Pe,co).call(this)})};return{reset:s,invoke_onerror:()=>{var a,l;try{r=!0,(l=(a=u(this,It)).onerror)==null||l.call(a,t,s),r=!1}catch(c){nn(c,u(this,ut)&&u(this,ut).parent)}}}},ou=function(){const t=u(this,It).pending;t&&(this.is_pending=!0,ie(this,dt,xt(()=>t(u(this,Pt)))),sn(()=>{var n=ie(this,en,document.createDocumentFragment()),r=cn(),s=!1;if(n.append(r),ie(this,St,xe(this,Pe,ca).call(this,()=>{try{return xt(()=>u(this,sr).call(this,r))}catch(i){try{this.error(i),s=!0}catch(a){nn(a,u(this,ut).parent)}return null}})),u(this,St)===null){ie(this,en,null),s&&xe(this,Pe,cs).call(this,Q);return}u(this,Rn)===0&&(u(this,Pt).before(n),ie(this,en,null),ir(u(this,dt),()=>{ie(this,dt,null)}),xe(this,Pe,cs).call(this,Q))}))},co=function(){try{if(this.is_pending=this.has_pending_snippet(),ie(this,Rn,0),ie(this,ar,0),ie(this,St,xt(()=>{u(this,sr).call(this,u(this,Pt))})),u(this,Rn)>0){var t=ie(this,en,document.createDocumentFragment());Mo(u(this,St),t);const n=u(this,It).pending;ie(this,dt,xt(()=>n(u(this,Pt))))}else xe(this,Pe,cs).call(this,Q)}catch(n){this.error(n)}},cs=function(t){this.is_pending=!1,t.transfer_effects(u(this,ys),u(this,ws))},ca=function(t){var n=ve,r=me,s=Re;Dt(u(this,ut)),Lt(u(this,ut)),Lr(u(this,ut).ctx);try{return ur.ensure(),t()}finally{Dt(n),Lt(r),Lr(s)}},uo=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&xe(r=this.parent,Pe,uo).call(r,t,n);return}ie(this,Rn,u(this,Rn)+t),u(this,Rn)===0&&(xe(this,Pe,cs).call(this,n),u(this,dt)&&ir(u(this,dt),()=>{ie(this,dt,null)}),u(this,en)&&(u(this,Pt).before(u(this,en)),ie(this,en,null)))},fo=function(t){u(this,St)&&(ot(u(this,St)),ie(this,St,null)),u(this,dt)&&(ot(u(this,dt)),ie(this,dt,null)),u(this,Ct)&&(ot(u(this,Ct)),ie(this,Ct,null));let n=u(this,It).failed;const r=s=>{const{reset:i,invoke_onerror:a}=xe(this,Pe,lo).call(this,s);a(),n&&ie(this,Ct,xe(this,Pe,ca).call(this,()=>{try{return xt(()=>{var l=ve;l.b=this,l.f|=Qa,n(u(this,Pt),()=>s,()=>i)})}catch(l){return nn(l,u(this,ut).parent),null}}))};sn(()=>{var s;try{s=this.transform_error(t)}catch(i){nn(i,u(this,ut)&&u(this,ut).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,i=>nn(i,u(this,ut)&&u(this,ut).parent)):r(s)})};function W(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[as]??(e[as]=e.nodeValue))&&(e[as]=n,e.nodeValue=`${n}`)}function iu(e,t){return lu(e,t)}const sa=new Map;function lu(e,{target:t,anchor:n,props:r={},events:s,context:i,intro:a=!0,transformError:l}){Ic();var c=void 0,d=Fc(()=>{var v=n??t.appendChild(cn());nu(v,{pending:()=>{}},g=>{_t({});var x=Re;i&&(x.c=i),s&&(r.$$events=s),c=e(g,r)||wo(),gt()},l);var y=new Set,p=g=>{for(var x=0;x<g.length;x++){var w=g[x];if(!y.has(w)){y.add(w);var S=Xc(w);for(const A of[t,document]){var E=sa.get(A);E===void 0&&(E=new Map,sa.set(A,E));var H=E.get(w);H===void 0?(A.addEventListener(w,io,{passive:S}),E.set(w,1)):E.set(w,H+1)}}}};return p(Ca(pl)),oo.add(p),()=>{var S;for(var g of y)for(const E of[t,document]){var x=sa.get(E),w=x.get(g);--w==0?(E.removeEventListener(g,io),x.delete(g),x.size===0&&sa.delete(E)):x.set(g,w)}oo.delete(p),v!==n&&((S=v.parentNode)==null||S.removeChild(v))}});return cu.set(c,d),c}let cu=new WeakMap;var Ut,tn,Et,or,ks,$s,$a;class za{constructor(t,n=!0){ct(this,"anchor");U(this,Ut,new Map);U(this,tn,new Map);U(this,Et,new Map);U(this,or,new Set);U(this,ks,!0);U(this,$s,t=>{if(u(this,Ut).has(t)){var n=u(this,Ut).get(t),r=u(this,tn).get(n);if(r)ba(r),u(this,or).delete(n);else{var s=u(this,Et).get(n);s&&(ba(s.effect),u(this,tn).set(n,s.effect),u(this,Et).delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,a]of u(this,Ut)){if(u(this,Ut).delete(i),i===t)break;const l=u(this,Et).get(a);l&&(ot(l.effect),u(this,Et).delete(a))}for(const[i,a]of u(this,tn)){if(i===n||u(this,or).has(i))continue;const l=()=>{if(Array.from(u(this,Ut).values()).includes(i)){var d=document.createDocumentFragment();Mo(a,d),d.append(cn()),u(this,Et).set(i,{effect:a,fragment:d})}else ot(a);u(this,or).delete(i),u(this,tn).delete(i)};u(this,ks)||!r?(u(this,or).add(i),ir(a,l,!1)):l()}}});U(this,$a,t=>{u(this,Ut).delete(t);const n=Array.from(u(this,Ut).values());for(const[r,s]of u(this,Et))n.includes(r)||(ot(s.effect),u(this,Et).delete(r))});this.anchor=t,ie(this,ks,n)}ensure(t,n){var r=Q,s=Qi();if(n&&!u(this,tn).has(t)&&!u(this,Et).has(t))if(s){var i=document.createDocumentFragment(),a=cn();i.append(a),u(this,Et).set(t,{effect:xt(()=>n(a)),fragment:i})}else u(this,tn).set(t,xt(()=>n(this.anchor)));if(u(this,Ut).set(r,t),s){for(const[l,c]of u(this,tn))l===t?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of u(this,Et))l===t?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(u(this,$s)),r.ondiscard(u(this,$a))}else u(this,$s).call(this,r)}}Ut=new WeakMap,tn=new WeakMap,Et=new WeakMap,or=new WeakMap,ks=new WeakMap,$s=new WeakMap,$a=new WeakMap;function D(e,t,n=!1){var r=new za(e),s=n?Fn:0;function i(a,l){r.ensure(a,l)}Wr(()=>{var a=!1;t((l,c=0)=>{a=!0,i(c,l)}),a||i(-1,null)},s)}const uu=Symbol("NaN");function du(e,t,n){var r=new za(e),s=!Kr();Wr(()=>{var i=t();i!==i&&(i=uu),s&&i!==null&&typeof i=="object"&&(i={}),r.ensure(i,n)})}function bl(e,t){return t}function fu(e,t,n){for(var r=[],s=t.length,i,a=t.length,l=0;l<s;l++){let y=t[l];ir(y,()=>{if(i){if(i.pending.delete(y),i.done.add(y),i.pending.size===0){var p=e.outrogroups;vo(e,Ca(i.done)),p.delete(i),p.size===0&&(e.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=r.length===0&&n!==null&&e.pending.size===0;if(c){var d=n,v=d.parentNode;Oc(v),v.append(d),e.items.clear()}vo(e,t,!c)}else i={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(i)}function vo(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const a of e.pending.values())for(const l of a)r.add(e.items.get(l).e)}for(var s=0;s<t.length;s++){var i=t[s];if(r!=null&&r.has(i)){i.f|=rn;const a=document.createDocumentFragment();Mo(i,a)}else ot(t[s],n)}}var Zo;function Ye(e,t,n,r,s,i=null){var a=e,l=new Map,c=(t&Ci)!==0;if(c){var d=e;a=d.appendChild(cn())}var v=null,y=$o(()=>{var A=n();return Sa(A)?A:A==null?[]:Ca(A)}),p,g=new Map,x=!0;function w(A){(H.effect.f&wt)===0&&(H.pending.delete(A),H.fallback=v,vu(H,p,a,t,r),v!==null&&(p.length===0?(v.f&rn)===0?ba(v):(v.f^=rn,us(v,null,a)):ir(v,()=>{v=null})))}function S(A){H.pending.delete(A)}var E=Wr(()=>{p=o(y);for(var A=p.length,G=new Set,T=Q,$=Qi(),M=0;M<A;M+=1){var q=p[M],ee=r(q,M),O=x?null:l.get(ee);O?(O.v&&Fr(O.v,q),O.i&&Fr(O.i,M),$&&T.unskip_effect(O.e)):(O=hu(l,x?a:Zo??(Zo=cn()),q,ee,M,s,t,n),x||(O.e.f|=rn),l.set(ee,O)),G.add(ee)}if(A===0&&i&&!v&&(x?v=xt(()=>i(a)):(v=xt(()=>i(Zo??(Zo=cn()))),v.f|=rn)),A>G.size&&cc(),!x)if(g.set(T,G),$){for(const[j,J]of l)G.has(j)||T.skip_effect(J.e);T.oncommit(w),T.ondiscard(S)}else w(T);o(y)}),H={effect:E,items:l,pending:g,outrogroups:null,fallback:v};x=!1}function ns(e){for(;e!==null&&(e.f&Rt)===0;)e=e.next;return e}function vu(e,t,n,r,s){var O,j,J,ue,ke,Ue,be,Ze,ae;var i=(r&Gl)!==0,a=t.length,l=e.items,c=ns(e.effect.first),d,v=null,y,p=[],g=[],x,w,S,E;if(i)for(E=0;E<a;E+=1)x=t[E],w=s(x,E),S=l.get(w).e,(S.f&rn)===0&&((j=(O=S.nodes)==null?void 0:O.a)==null||j.measure(),(y??(y=new Set)).add(S));for(E=0;E<a;E+=1){if(x=t[E],w=s(x,E),S=l.get(w).e,e.outrogroups!==null)for(const de of e.outrogroups)de.pending.delete(S),de.done.delete(S);if((S.f&ht)!==0&&(ba(S),i&&((ue=(J=S.nodes)==null?void 0:J.a)==null||ue.unfix(),(y??(y=new Set)).delete(S))),(S.f&rn)!==0)if(S.f^=rn,S===c)us(S,null,n);else{var H=v?v.next:c;S===e.effect.last&&(e.effect.last=S.prev),S.prev&&(S.prev.next=S.next),S.next&&(S.next.prev=S.prev),Pn(e,v,S),Pn(e,S,H),us(S,H,n),v=S,p=[],g=[],c=ns(v.next);continue}if(S!==c){if(d!==void 0&&d.has(S)){if(p.length<g.length){var A=g[0],G;v=A.prev;var T=p[0],$=p[p.length-1];for(G=0;G<p.length;G+=1)us(p[G],A,n);for(G=0;G<g.length;G+=1)d.delete(g[G]);Pn(e,T.prev,$.next),Pn(e,v,T),Pn(e,$,A),c=A,v=$,E-=1,p=[],g=[]}else d.delete(S),us(S,c,n),Pn(e,S.prev,S.next),Pn(e,S,v===null?e.effect.first:v.next),Pn(e,v,S),v=S;continue}for(p=[],g=[];c!==null&&c!==S;)(d??(d=new Set)).add(c),g.push(c),c=ns(c.next);if(c===null)continue}(S.f&rn)===0&&p.push(S),v=S,c=ns(S.next)}if(e.outrogroups!==null){for(const de of e.outrogroups)de.pending.size===0&&(vo(e,Ca(de.done)),(ke=e.outrogroups)==null||ke.delete(de));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||d!==void 0){var M=[];if(d!==void 0)for(S of d)(S.f&ht)===0&&M.push(S);for(;c!==null;)(c.f&ht)===0&&c!==e.fallback&&M.push(c),c=ns(c.next);var q=M.length;if(q>0){var ee=(r&Ci)!==0&&a===0?n:null;if(i){for(E=0;E<q;E+=1)(be=(Ue=M[E].nodes)==null?void 0:Ue.a)==null||be.measure();for(E=0;E<q;E+=1)(ae=(Ze=M[E].nodes)==null?void 0:Ze.a)==null||ae.fix()}fu(e,M,ee)}}i&&sn(()=>{var de,R;if(y!==void 0)for(S of y)(R=(de=S.nodes)==null?void 0:de.a)==null||R.apply()})}function hu(e,t,n,r,s,i,a,l){var c=(a&Wl)!==0?(a&Yl)===0?Ac(n,!1,!1):Sn(n):null,d=(a&ql)!==0?Sn(s):null;return{v:c,i:d,e:xt(()=>(i(t,c??n,d??s,l),()=>{e.delete(r)}))}}function us(e,t,n){if(e.nodes)for(var r=e.nodes.start,s=e.nodes.end,i=t&&(t.f&rn)===0?t.nodes.start:n;r!==null;){var a=Xs(r);if(i.before(r),r===s)return;r=a}}function Pn(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function pu(e,t,n=!1,r=!1,s=!1,i=!1){var a=e,l="";if(n)var c=e;Y(()=>{var d=ve;if(l!==(l=t()??"")){if(n){d.nodes=null,c.innerHTML=l,l!==""&&Hn(qt(c),c.lastChild);return}if(d.nodes!==null&&(sl(d.nodes.start,d.nodes.end),d.nodes=null),l!==""){var v=r?Ni:s?nc:void 0,y=Ea(r?"svg":s?"math":"template",v);y.innerHTML=l;var p=r||s?y:y.content;if(Hn(qt(p),p.lastChild),r||s)for(;qt(p);)a.before(qt(p));else a.before(p)}}})}function se(e,t,n,r,s){var l,c;if((l=t.$$host)!=null&&l.$$shadowRoot){const d=Ea("slot");m(e,d);return}var i=(c=t.$$slots)==null?void 0:c[n],a=!1;i===!0&&(i=t.children,a=!0),i===void 0||i(e,a?()=>r:r)}function Qo(e,t,n){var r=new za(e);Wr(()=>{var s=t()??null;r.ensure(s,s&&(i=>n(i,s)))},Fn)}function _u(e,t,n,r,s,i){var a=null,l=e,c=new za(l,!1);Wr(()=>{const d=t()||null;var v=Ni;if(d===null){c.ensure(null,null);return}return c.ensure(d,y=>{if(d){if(a=Ea(d,v),Hn(a,a),r){var p=null,g=a.appendChild(cn());r(a,g),p==null||p.remove()}ve.nodes.end=a,y.before(a)}}),()=>{}},Fn),Ta(()=>{})}function gu(e,t){var n=void 0,r;nl(()=>{n!==(n=t())&&(r&&(ot(r),r=null),n&&(r=xt(()=>{Na(()=>n(e))})))})}function xl(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=xl(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function mu(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=xl(e))&&(r&&(r+=" "),r+=t);return r}function yl(e){return typeof e=="object"?mu(e):e??""}const ei=[...` 	
\r\f \v\uFEFF`];function bu(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var s of Object.keys(n))if(n[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,a=0;(a=r.indexOf(s,a))>=0;){var l=a+i;(a===0||ei.includes(r[a-1]))&&(l===r.length||ei.includes(r[l]))?r=(a===0?"":r.substring(0,a))+r.substring(l+1):a=l}}return r===""?null:r}function ti(e,t=!1){var n=t?" !important;":";",r="";for(var s of Object.keys(e)){var i=e[s];i!=null&&i!==""&&(r+=" "+s+": "+i+n)}return r}function Ka(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function xu(e,t){if(t){var n="",r,s;if(Array.isArray(t)?(r=t[0],s=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var i=!1,a=0,l=!1,c=[];r&&c.push(...Object.keys(r).map(Ka)),s&&c.push(...Object.keys(s).map(Ka));var d=0,v=-1;const w=e.length;for(var y=0;y<w;y++){var p=e[y];if(l?p==="/"&&e[y-1]==="*"&&(l=!1):i?i===p&&(i=!1):p==="/"&&e[y+1]==="*"?l=!0:p==='"'||p==="'"?i=p:p==="("?a++:p===")"&&a--,!l&&i===!1&&a===0){if(p===":"&&v===-1)v=y;else if(p===";"||y===w-1){if(v!==-1){var g=Ka(e.substring(d,v).trim());if(!c.includes(g)){p!==";"&&y++;var x=e.substring(d,y).trim();n+=" "+x+";"}}d=y+1,v=-1}}}}return r&&(n+=ti(r)),s&&(n+=ti(s,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function vt(e,t,n,r,s,i){var a=e[eo];if(a!==n||a===void 0){var l=bu(n,r,i);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e[eo]=n}else if(i&&s!==i)for(var c in i){var d=!!i[c];(s==null||d!==!!s[c])&&e.classList.toggle(c,d)}return i}function Ua(e,t={},n,r){for(var s in n){var i=n[s];t[s]!==i&&(n[s]==null?e.style.removeProperty(s):e.style.setProperty(s,i,r))}}function Er(e,t,n,r){var s=e[to];if(s!==t){var i=xu(t,r);i==null?e.removeAttribute("style"):e.style.cssText=i,e[to]=t}else r&&(Array.isArray(r)?(Ua(e,n==null?void 0:n[0],r[0]),Ua(e,n==null?void 0:n[1],r[1],"important")):Ua(e,n,r));return r}function wl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function ni(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,kl(e,!n||"__value"in e))}function kl(e,t){var n=e.__defaultValue,r=e.multiple,s=r?n??[]:null;if(!(r&&!Sa(s))){var i=e.selectedIndex,a=t&&r?new Set(e.selectedOptions):null;for(var l of e.options){var c=Tr(l);wl(l,r?s.includes(c):Yi(c,n))}if(t)if(a!==null)for(l of e.options){var d=a.has(l);l.selected!==d&&(l.selected=d)}else e.selectedIndex!==i&&(e.selectedIndex=i)}}function ms(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Sa(t))return ac();for(var r of e.options)r.selected=t.includes(Tr(r));return}for(r of e.options){var s=Tr(r);if(Yi(s,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function ps(e){var t=new MutationObserver(n=>{n.every(yu)||("__defaultValue"in e&&kl(e,!1),"__value"in e&&ms(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ta(()=>{t.disconnect()})}function ho(e,t,n=t){var r=new WeakSet,s=!0;Li(e,"change",i=>{var a=i?"[selected]":":checked",l;if(e.multiple)l=[].map.call(e.querySelectorAll(a),Tr);else{var c=e.querySelector(a)??e.querySelector("option:not([disabled])");l=c&&Tr(c)}n(l),e.__value=l,Q!==null&&r.add(Q)}),Na(()=>{var i=t();if(e===document.activeElement){var a=Q;if(r.has(a))return}if(ms(e,i,s),s&&i===void 0){var l=e.querySelector(":checked");l!==null&&(i=Tr(l),n(i))}e.__value=i,s=!1})}function Tr(e){return"__value"in e?e.__value:e.value}function yu(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const rs=Symbol("class"),ss=Symbol("style"),$l=Symbol("is custom element"),Sl=Symbol("is html"),wu=yo?"input":"INPUT",ku=yo?"option":"OPTION",Cl=yo?"select":"SELECT";function _e(e,t,n,r){var s=El(e);s[t]!==(s[t]=n)&&(t==="loading"&&(e[Ul]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Tl(e).has(t)?e[t]=n:e.setAttribute(t,n))}function $u(e,t,n,r,s=!1,i=!1){var a=El(e),l=a[$l],c=!a[Sl],d=t||{},v=e.nodeName===ku,y=e.nodeName===Cl;for(var p in t)!(p in n)&&p[0]+p[1]!=="$$"&&(n[p]=null);n.class?n.class=yl(n.class):n[rs]&&(n.class=null),n[ss]&&(n.style??(n.style=null));var g=Tl(e);if(e.nodeName===wu&&"type"in n&&("value"in n||"__value"in n)){var x=n.type;(x!==d.type||x===void 0&&e.hasAttribute("type"))&&(d.type=x,_e(e,"type",x))}for(const T in n){let $=n[T];if(v&&T==="value"&&$==null){e.value=e.__value="",d[T]=$;continue}if(T==="class"){var w=e.namespaceURI==="http://www.w3.org/1999/xhtml";vt(e,w,$,r,t==null?void 0:t[rs],n[rs]),d[T]=$,d[rs]=n[rs];continue}if(T==="style"){Er(e,$,t==null?void 0:t[ss],n[ss]),d[T]=$,d[ss]=n[ss];continue}var S=d[T];if(!($===S&&!($===void 0&&e.hasAttribute(T)))){d[T]=$;var E=T[0]+T[1];if(E!=="$$")if(E==="on"){const M={},q="$$"+T;let ee=T.slice(2);var H=qc(ee);if(Uc(ee)&&(ee=ee.slice(0,-7),M.capture=!0),!H&&S){if($!=null)continue;e.removeEventListener(ee,d[q],M),d[q]=null}if(H)I(ee,e,$),Ft([ee]);else if($!=null){let O=function(j){d[T].call(this,j)};d[q]=_l(ee,e,O,M)}}else if(T==="style")_e(e,T,$);else if(T==="autofocus")Ri(e,!!$);else if(!l&&(T==="__value"||T==="value"&&$!=null))e.value=e.__value=$;else if(T==="selected"&&v)wl(e,$);else{var A=T;c||(A=Yc(A));var G=A==="defaultValue"||A==="defaultChecked";if(y&&A==="defaultValue")continue;if($==null&&!l&&!G)if(a[T]=null,A==="value"||A==="checked"){let M=e;const q=t===void 0;if(A==="value"){let ee=M.defaultValue;M.removeAttribute(A),M.defaultValue=ee,M.value=M.__value=q?ee:null}else{let ee=M.defaultChecked;M.removeAttribute(A),M.defaultChecked=ee,M.checked=q?ee:!1}}else e.removeAttribute(T);else G||(l||typeof $!="string")&&g.has(A)?(e[A]=$,A in a&&(a[A]=Xe)):typeof $!="function"&&_e(e,A,$)}}}return d}function ri(e,t,n=[],r=[],s=[],i,a=!1,l=!1){Di(s,n,r,c=>{var d=void 0,v={},y=e.nodeName===Cl,p=!1;if(nl(()=>{var x=t(...c.map(o)),w=$u(e,d,x,i,a,l);if(p&&y){var S=e;"defaultValue"in x&&ni(S,x.defaultValue),"value"in x&&ms(S,x.value)}for(let H of Object.getOwnPropertySymbols(v))x[H]||ot(v[H]);for(let H of Object.getOwnPropertySymbols(x)){var E=x[H];H.description===rc&&(!d||E!==d[H])&&(v[H]&&ot(v[H]),v[H]=xt(()=>gu(e,()=>E))),w[H]=E}d=w}),y){var g=e;Na(()=>{var x=d;"defaultValue"in x&&ni(g,x.defaultValue),ms(g,x.value,!0),ps(g)})}p=!0})}function El(e){return e[aa]??(e[aa]={[$l]:e.nodeName.includes("-"),[Sl]:e.namespaceURI===Ti})}var si=new Map;function Tl(e){var t=e.getAttribute("is")||e.nodeName,n=si.get(t);if(n)return n;si.set(t,n=new Set);for(var r,s=e,i=Element.prototype;i!==s;){r=yi(s);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&n.add(a);s=mo(s)}return n}function st(e,t,n=t){var r=new WeakSet;Li(e,"input",async s=>{var i=s?e.defaultValue:e.value;if(i=Wa(e)?qa(i):i,n(i),Q!==null&&r.add(Q),await Kc(),i!==(i=t())){var a=e.selectionStart,l=e.selectionEnd,c=e.value.length;if(e.value=i??"",l!==null){var d=e.value.length;a===l&&l===c&&d>c?(e.selectionStart=d,e.selectionEnd=d):(e.selectionStart=a,e.selectionEnd=Math.min(l,d))}}}),En(t)==null&&e.value&&(n(Wa(e)?qa(e.value):e.value),Q!==null&&r.add(Q)),No(()=>{var s=t();if(e===document.activeElement){var i=Q;if(r.has(i))return}Wa(e)&&s===qa(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Wa(e){var t=e.type;return t==="number"||t==="range"}function qa(e){return e===""?null:+e}function Ga(e,t){return e===t||(e==null?void 0:e[on])===t}function bs(e=wo(),t,n,r){var s=Re.r,i=ve;return Na(()=>{var a,l;return No(()=>{a=l,l=[],En(()=>{Ga(n(...l),e)||(t(e,...l),a&&Ga(n(...a),e)&&t(null,...a))})}),()=>{let c=i;for(;c!==s&&c.parent!==null&&c.parent.f&ha;)c=c.parent;const d=()=>{l&&Ga(n(...l),e)&&t(null,...l)},v=c.teardown;c.teardown=()=>{d(),v==null||v()}}}),e}function Nl(e=!1){const t=Re,n=t.l.u;if(!n)return;let r=()=>Xn(t.s);if(e){let s=0,i={};const a=Dr(()=>{let l=!1;const c=t.s;for(const d in c)c[d]!==i[d]&&(i[d]=c[d],l=!0);return l&&s++,s});r=()=>o(a)}n.b.length&&Dc(()=>{ai(t,r),Za(n.b)}),pt(()=>{const s=En(()=>n.m.map(Bl));return()=>{for(const i of s)typeof i=="function"&&i()}}),n.a.length&&pt(()=>{ai(t,r),Za(n.a)})}function ai(e,t){if(e.l.s)for(const n of e.l.s)o(n);t()}function Su(e){var t=Sn(0);return function(){return arguments.length===1?(f(t,o(t)+1),arguments[0]):(o(t),e())}}const Cu={get(e,t){if(!e.exclude.includes(t))return o(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=ve;try{Dt(e.parent_effect),e.special[t]=Ge({get[t](){return e.props[t]}},t,Ei)}finally{Dt(r)}}return e.special[t](n),Wo(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),Wo(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function re(e,t){return new Proxy({props:e,exclude:t,special:{},version:Sn(0),parent_effect:ve},Cu)}const Eu={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(ts(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let s=e.props[r];ts(s)&&(s=s());const i=Ln(s,t);if(i&&i.set)return i.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(ts(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const s=Ln(r,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===on||t===Si)return!1;for(let n of e.props)if(ts(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(ts(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function le(...e){return new Proxy({props:e},Eu)}function Ge(e,t,n,r){var G;var s=!Vr||(n&Xl)!==0,i=(n&Zl)!==0,a=(n&Ql)!==0,l=r,c=!0,d=void 0,v=()=>a&&s?(d??(d=Dr(r)),o(d)):(c&&(c=!1,l=a?En(r):r),l);let y;if(i){var p=on in e||Si in e;y=((G=Ln(e,t))==null?void 0:G.set)??(p&&t in e?T=>e[t]=T:void 0)}var g,x=!1;i?[g,x]=wc(()=>e[t]):g=e[t],g===void 0&&r!==void 0&&(g=v(),y&&(s&&hc(),y(g)));var w;if(s?w=()=>{var T=e[t];return T===void 0?v():(c=!0,T)}:w=()=>{var T=e[t];return T!==void 0&&(l=void 0),T===void 0?l:T},s&&(n&Ei)===0)return w;if(y){var S=e.$$legacy;return(function(T,$){return arguments.length>0?((!s||!$||S||x)&&y($?w():T),T):w()})}var E=!1,H=((n&Jl)!==0?Dr:$o)(()=>(E=!1,w()));i&&o(H);var A=ve;return(function(T,$){if(arguments.length>0){const M=$?o(H):s&&i?Me(T):T;return f(H,M),E=!0,l!==void 0&&(l=M),T}return Cn&&E||(A.f&wt)!==0?H.v:o(H)})}function qr(e){Re===null&&Ai(),Vr&&Re.l!==null?Tu(Re).m.push(e):pt(()=>{const t=En(e);if(typeof t=="function")return t})}function Ao(e){Re===null&&Ai(),qr(()=>()=>En(e))}function Tu(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Nu="5";var bi;typeof window<"u"&&((bi=window.__svelte??(window.__svelte={})).v??(bi.v=new Set)).add(Nu);const Zn=()=>window.__IDE_BOOTSTRAP__||{};function zu(e){const{rootPath:t="",session:n=""}=Zn();return`${t}/api/sessions/${encodeURIComponent(n)}/ide${e}`}async function qe(e,t={}){const n=await fetch(zu(e),t),r=await n.json().catch(()=>({}));if(!n.ok){const s=new Error(r.error||"Request failed");throw Object.assign(s,r),s}return r}const Qe=(e,t)=>`/ssh-connections/${encodeURIComponent(e)}${t}`,we={chat:async(e,t=80)=>{const{rootPath:n=""}=Zn(),r=`${n}/api/sessions/${encodeURIComponent(e)}/ide/chat?limit=${t}`,s=await fetch(r),i=await s.json().catch(()=>({}));if(!s.ok)throw new Error(i.error||"Could not load chat");return i},browse:async(e="")=>{const{rootPath:t=""}=Zn(),n=`${t}/api/ide/browse?path=${encodeURIComponent(e)}`,r=await fetch(n),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not browse folders");return s},sessionAgent:async e=>{const{rootPath:t=""}=Zn(),n=await fetch(`${t}/api/sessions/${encodeURIComponent(e)}/agent`),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Could not read agent settings");return r},setSessionAgent:async(e,t)=>{const{rootPath:n=""}=Zn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/agent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({agent:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not switch agent");return s},setSessionModel:async(e,t)=>{const{rootPath:n=""}=Zn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/model`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change model");return s},setSessionEffort:async(e,t)=>{const{rootPath:n=""}=Zn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/effort`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({effort:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change effort");return s},browseOn:(e,t="")=>qe(Qe(e,`/browse?path=${encodeURIComponent(t)}`)),setWorkspaceRoot:(e,t,n)=>qe(Qe(e,"/workspace-root"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({workspace_root:t,label:n})}),agentContext:e=>qe(Qe(e,"/agent-context")),hostKey:e=>qe(Qe(e,"/host-key")),trustHost:e=>qe(Qe(e,"/host-key"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accept:!0})}),listConnections:()=>qe("/ssh-connections"),createConnection:e=>qe("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),deleteConnection:e=>qe(Qe(e,""),{method:"DELETE"}),connect:(e,t)=>qe(Qe(e,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t||""})}),status:e=>qe(Qe(e,"/status?reconnect=1")),listFiles:(e,t)=>qe(Qe(e,`/files?path=${encodeURIComponent(t)}`)),searchFiles:(e,t,n)=>qe(Qe(e,`/files/search?path=${encodeURIComponent(t)}&query=${encodeURIComponent(n)}`)),readFile:(e,t)=>qe(Qe(e,`/file?path=${encodeURIComponent(t)}`)),saveFile:(e,t,n)=>qe(Qe(e,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t,content:n})}),fs:(e,t)=>qe(Qe(e,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),git:(e,t)=>qe(Qe(e,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),focusTerminal:e=>qe(Qe(e,"/focus-terminal"),{method:"POST"}),listTerminals:e=>qe(Qe(e,"/terminals")),closeTerminal:(e,t)=>qe(Qe(e,`/terminals/${t}`),{method:"DELETE"}),getWorkspace:e=>qe(Qe(e,"/workspace")),saveWorkspace:(e,t)=>qe(Qe(e,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})};var Ss,Cs,Es,Ts,Ns,zs,Ms,As,Ps,Is,Os,Rs,Ls,Ds,Fs,Hs,js,Bs,Vs,Ks,Us,Ws,qs,Gs;class Mu{constructor(){U(this,Ss,P(Me([])));U(this,Cs,P(""));U(this,Es,P("idle"));U(this,Ts,P("Ready"));U(this,Ns,P("No file open"));U(this,zs,P("."));U(this,Ms,P(Me([])));U(this,As,P(Me({})));U(this,Ps,P(Me({})));U(this,Is,P(""));U(this,Os,P(Me([])));U(this,Rs,P(""));U(this,Ls,P(""));U(this,Ds,P(""));U(this,Fs,P(Me([])));U(this,Hs,P(""));U(this,js,P(!1));U(this,Bs,P(!1));U(this,Vs,P(0));U(this,Ks,P(0));U(this,Us,P(!1));U(this,Ws,P(""));U(this,qs,P(Me([])));U(this,Gs,P(!1));ct(this,"restoredKey","");ct(this,"persistTimer",null)}get connections(){return o(u(this,Ss))}set connections(t){f(u(this,Ss),t,!0)}get connectionId(){return o(u(this,Cs))}set connectionId(t){f(u(this,Cs),t,!0)}get connectionState(){return o(u(this,Es))}set connectionState(t){f(u(this,Es),t,!0)}get statusText(){return o(u(this,Ts))}set statusText(t){f(u(this,Ts),t,!0)}get detailText(){return o(u(this,Ns))}set detailText(t){f(u(this,Ns),t,!0)}get path(){return o(u(this,zs))}set path(t){f(u(this,zs),t,!0)}get entries(){return o(u(this,Ms))}set entries(t){f(u(this,Ms),t,!0)}get expanded(){return o(u(this,As))}set expanded(t){f(u(this,As),t,!0)}get treeChildren(){return o(u(this,Ps))}set treeChildren(t){f(u(this,Ps),t,!0)}get filter(){return o(u(this,Is))}set filter(t){f(u(this,Is),t,!0)}get tabs(){return o(u(this,Os))}set tabs(t){f(u(this,Os),t,!0)}get activeKey(){return o(u(this,Rs))}set activeKey(t){f(u(this,Rs),t,!0)}get gitOutput(){return o(u(this,Ls))}set gitOutput(t){f(u(this,Ls),t,!0)}get gitStatus(){return o(u(this,Ds))}set gitStatus(t){f(u(this,Ds),t,!0)}get gitBranches(){return o(u(this,Fs))}set gitBranches(t){f(u(this,Fs),t,!0)}get gitBranch(){return o(u(this,Hs))}set gitBranch(t){f(u(this,Hs),t,!0)}get needsHostKey(){return o(u(this,js))}set needsHostKey(t){f(u(this,js),t,!0)}get notARepo(){return o(u(this,Bs))}set notARepo(t){f(u(this,Bs),t,!0)}get gitAhead(){return o(u(this,Vs))}set gitAhead(t){f(u(this,Vs),t,!0)}get gitBehind(){return o(u(this,Ks))}set gitBehind(t){f(u(this,Ks),t,!0)}get gitHasUpstream(){return o(u(this,Us))}set gitHasUpstream(t){f(u(this,Us),t,!0)}get gitBusy(){return o(u(this,Ws))}set gitBusy(t){f(u(this,Ws),t,!0)}get gitCommits(){return o(u(this,qs))}set gitCommits(t){f(u(this,qs),t,!0)}get gitHistoryLoaded(){return o(u(this,Gs))}set gitHistoryLoaded(t){f(u(this,Gs),t,!0)}get connection(){return this.connections.find(t=>t.id===this.connectionId)||null}get activeTab(){return this.tabs.find(t=>t.key===this.activeKey)||null}get visibleEntries(){const t=this.filter.trim().toLowerCase();return t?this.entries.filter(n=>n.name.toLowerCase().includes(t)):this.entries}get dirtyCount(){return this.tabs.filter(t=>t.dirty).length}get gitDirtyCount(){return this.gitStatus.split(`
`).filter(t=>t.trim()&&!t.startsWith("##")).length}resetWorkspaceView(){this.tabs=[],this.activeKey="",this.restoredKey="",this.path=".",this.entries=[],this.expanded={},this.treeChildren={},this.filter="",this.gitOutput="",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.needsHostKey=!1,this.notARepo=!1,this.gitAhead=0,this.gitBehind=0,this.gitHasUpstream=!1,this.gitCommits=[],this.gitHistoryLoaded=!1}setStatus(t,n){this.statusText=t,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const t=await we.listConnections();this.connections=t.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(t){this.setStatus(t.message||"Could not load connections")}}async refreshStatus(){var t,n,r;if(this.connectionId)try{const s=await we.status(this.connectionId);s.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((t=this.connection)==null?void 0:t.label)||"SSH workspace"}`,`SSH terminal: ${s.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(s){this.connectionState="error",this.setStatus(s.message||"Could not check SSH connection")}}async connect(t){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await we.connect(this.connectionId,t);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect"),this.needsHostKey=!!r.needs_host_key}}}async refreshFiles(t){if(!this.connectionId)return;const n=t||this.path||".";try{const r=await we.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async toggleDirectory(t){if(this.expanded[t]){const n={...this.expanded};delete n[t],this.expanded=n;return}if(this.expanded={...this.expanded,[t]:!0},!this.treeChildren[t])try{const n=await we.listFiles(this.connectionId,t);this.treeChildren={...this.treeChildren,[t]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}openDiffTab(t,n){const r=`${this.connectionId}|diff:${t}`,s=this.tabs.find(a=>a.key===r);if(s)return s.content=n,s.saved=n,this.activeKey=r,s;const i={key:r,path:`${t} (diff)`,content:n,saved:n,dirty:!1,readOnly:!0,language:"plaintext"};return this.tabs=[...this.tabs,i],this.activeKey=r,i}async openFile(t){if(!this.connectionId)return null;const n=`${this.connectionId}|${t}`,r=this.tabs.find(s=>s.key===n);if(r)return this.activeKey=n,r;try{const s=await we.readFile(this.connectionId,t),i={key:`${this.connectionId}|${s.path}`,path:s.path,content:s.content||"",saved:s.content||"",dirty:!1};return this.tabs=[...this.tabs,i],this.activeKey=i.key,this.setStatus("Opened",i.path),this.remember(),i}catch(s){return this.setStatus(s.message||"Could not open remote file"),null}}updateContent(t,n){this.tabs=this.tabs.map(r=>r.key===t?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(t){var r;const n=this.tabs.find(s=>s.key===t);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(s=>s.key!==t),this.activeKey===t&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const t=this.activeTab;if(t)try{await we.saveFile(this.connectionId,t.path,t.content),this.tabs=this.tabs.map(n=>n.key===t.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${t.path}`,t.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const t=`${this.connectionId}`;if(!t)return;let n=null;try{n=await we.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===t)return;this.restoredKey=t;const r=(n==null?void 0:n.buffers)||{};for(const i of((n==null?void 0:n.tabs)||[]).slice(0,12)){const a=await this.openFile(i);a&&Object.prototype.hasOwnProperty.call(r,i)&&this.updateContent(a.key,r[i])}const s=this.tabs.find(i=>i.path===(n==null?void 0:n.active_path));s&&(this.activeKey=s.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const t={};for(const r of this.tabs)r.dirty&&(t[r.path]=r.content);try{await we.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:t})}catch{}}async runGit(t,n={}){try{const r=await we.git(this.connectionId,{action:t,path:this.path||".",...n});return r.not_a_repo?(this.gitOutput=r.error||"This folder is not a Git repository.",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.gitCommits=[],this.gitHistoryLoaded=!1,this.notARepo=!0,null):(this.notARepo=!1,this.gitAhead=r.ahead||0,this.gitBehind=r.behind||0,this.gitHasUpstream=!!r.has_upstream,t==="log"?(this.gitCommits=r.commits||[],this.gitHistoryLoaded=!0):t!=="show"&&(this.gitOutput=r.output||r.status||""),this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",["commit","switch","create_branch","pull","push","fetch"].includes(t)&&(this.gitHistoryLoaded=!1),r)}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}Ss=new WeakMap,Cs=new WeakMap,Es=new WeakMap,Ts=new WeakMap,Ns=new WeakMap,zs=new WeakMap,Ms=new WeakMap,As=new WeakMap,Ps=new WeakMap,Is=new WeakMap,Os=new WeakMap,Rs=new WeakMap,Ls=new WeakMap,Ds=new WeakMap,Fs=new WeakMap,Hs=new WeakMap,js=new WeakMap,Bs=new WeakMap,Vs=new WeakMap,Ks=new WeakMap,Us=new WeakMap,Ws=new WeakMap,qs=new WeakMap,Gs=new WeakMap;const _=new Mu;bc();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Au={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Pu=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const oi=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var Iu=ml("<svg><!><!></svg>");function ce(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]),r=re(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);_t(t,!1);let s=Ge(t,"name",8,void 0),i=Ge(t,"color",8,"currentColor"),a=Ge(t,"size",8,24),l=Ge(t,"strokeWidth",8,2),c=Ge(t,"absoluteStrokeWidth",8,!1),d=Ge(t,"iconNode",24,()=>[]);Nl();var v=Iu();ri(v,(g,x,w)=>({...Au,...g,...r,width:a(),height:a(),stroke:i(),"stroke-width":x,class:w}),[()=>Pu(r)?void 0:{"aria-hidden":"true"},()=>(Xn(c()),Xn(l()),Xn(a()),En(()=>c()?Number(l())*24/Number(a()):l())),()=>(Xn(oi),Xn(s()),Xn(n),En(()=>oi("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var y=b(v);Ye(y,1,d,bl,(g,x)=>{var w=ft(()=>Vl(o(x),2));let S=()=>o(w)[0],E=()=>o(w)[1];var H=Z(),A=V(H);_u(A,S,!0,(G,T)=>{ri(G,()=>({...E()}))}),m(g,H)});var p=h(y);se(p,t,"default",{}),m(e,v),gt()}function Ou(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]];ce(e,le({name:"arrow-down-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ru(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];ce(e,le({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ua(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];ce(e,le({name:"check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function kn(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];ce(e,le({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function da(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];ce(e,le({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ii(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];ce(e,le({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Lu(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ce(e,le({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Du(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];ce(e,le({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Fu(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];ce(e,le({name:"circle-user"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Hu(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];ce(e,le({name:"circle"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ju(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];ce(e,le({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Bu(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];ce(e,le({name:"corner-left-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Vu(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];ce(e,le({name:"ellipsis"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ku(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];ce(e,le({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function li(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 16-3 3 3 3"}],["path",{d:"m9 22 3-3-3-3"}]];ce(e,le({name:"file-code-corner"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Uu(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];ce(e,le({name:"file-diff"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Wu(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];ce(e,le({name:"file-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Po(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];ce(e,le({name:"file"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function qu(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];ce(e,le({name:"files"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ya(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];ce(e,le({name:"folder-open"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Gu(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];ce(e,le({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Yu(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];ce(e,le({name:"folder"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function po(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];ce(e,le({name:"git-branch"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ju(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 16h.01"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{d:"M21.946 12.013H2.054"}],["path",{d:"M6 16h.01"}]];ce(e,le({name:"hard-drive"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Xu(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];ce(e,le({name:"history"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Zu(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];ce(e,le({name:"link-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function an(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];ce(e,le({name:"loader"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ci(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];ce(e,le({name:"message-square"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Qu(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m14 10 7-7"}],["path",{d:"M20 10h-6V4"}],["path",{d:"m3 21 7-7"}],["path",{d:"M4 14h6v6"}]];ce(e,le({name:"minimize-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ed(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}]];ce(e,le({name:"minus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function td(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];ce(e,le({name:"monitor-smartphone"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function nd(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];ce(e,le({name:"panel-bottom"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function rd(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];ce(e,le({name:"panel-left"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function xa(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ce(e,le({name:"plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function _o(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ce(e,le({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Io(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ce(e,le({name:"search"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ui(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];ce(e,le({name:"server"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function sd(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];ce(e,le({name:"shield-alert"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ja(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ce(e,le({name:"sparkles"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function di(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];ce(e,le({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ad(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ce(e,le({name:"square"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function fi(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ce(e,le({name:"trash-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function od(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];ce(e,le({name:"undo-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ya(e,t){const n=re(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ce(e,le({name:"x"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Z(),l=V(a);se(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}var id=N('<span class="w-[14px] shrink-0"></span>'),ld=ml('<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.5 3.5h4l1.2 1.4h7.8v7.6H1.5z" fill="#c09553"></path></svg>'),cd=N('<div role="treeitem" tabindex="0"><!> <span class="flex shrink-0 items-center"><!></span> <span class="flex-1 truncate text-vs-fg"> </span> <span class="hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Rename"><span class="text-[11px] leading-none">✎</span></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Delete"><span class="text-[11px] leading-none">🗑</span></button></span></div> <!>',1);function zl(e,t){_t(t,!0);const n=ft(()=>t.dir==="."?t.entry.name:`${t.dir}/${t.entry.name}`),r=ft(()=>!!_.expanded[o(n)]),s=ft(()=>_.treeChildren[o(n)]||[]),i=ft(()=>{var j;return((j=_.activeTab)==null?void 0:j.path)===o(n)});async function a(){t.entry.is_dir?await _.toggleDirectory(o(n)):await _.openFile(o(n))}async function l(j){if(j.stopPropagation(),!!confirm(`Delete ${o(n)}? Folders must already be empty.`))try{await we.fs(_.connectionId,{action:"delete",path:o(n)}),await _.refreshFiles()}catch(J){_.setStatus(J.message||"Could not delete")}}async function c(j){j.stopPropagation();const J=prompt("Rename to (relative path):",o(n));if(!(!J||J===o(n)))try{await we.fs(_.connectionId,{action:"rename",path:o(n),new_path:J}),await _.refreshFiles()}catch(ue){_.setStatus(ue.message||"Could not rename")}}var d=cd(),v=V(d);let y;var p=b(v);{var g=j=>{var J=Z(),ue=V(J);{var ke=be=>{kn(be,{size:14,class:"shrink-0 text-vs-muted"})},Ue=be=>{da(be,{size:14,class:"shrink-0 text-vs-muted"})};D(ue,be=>{o(r)?be(ke):be(Ue,-1)})}m(j,J)},x=j=>{var J=id();m(j,J)};D(p,j=>{t.entry.is_dir?j(g):j(x,-1)})}var w=h(p,2),S=b(w);{var E=j=>{var J=ld();m(j,J)},H=j=>{Zu(j,{size:14,class:"text-vs-muted"})},A=j=>{Po(j,{size:14,class:"text-vs-blue"})};D(S,j=>{t.entry.is_dir?j(E):t.entry.is_symlink?j(H,1):j(A,-1)})}var G=h(w,2),T=X(G,!0),$=h(G,2),M=b($),q=h(M,2),ee=h(v,2);{var O=j=>{var J=Z(),ue=V(J);Ye(ue,17,()=>o(s),ke=>ke.name,(ke,Ue)=>{{let be=ft(()=>t.depth+1);zl(ke,{get entry(){return o(Ue)},get dir(){return o(n)},get depth(){return o(be)}})}}),m(j,J)};D(ee,j=>{t.entry.is_dir&&o(r)&&j(O)})}Y(()=>{y=vt(v,1,"group flex cursor-pointer items-center gap-1 py-[2px] pr-1 text-[13px] hover:bg-vs-hover",null,y,{"bg-vs-active":o(i)}),Er(v,`padding-left: ${8+t.depth*12}px`),_e(v,"aria-expanded",t.entry.is_dir?o(r):void 0),_e(v,"aria-selected",o(i)),_e(v,"title",o(n)),W(T,t.entry.name),_e(M,"aria-label",`Rename ${t.entry.name??""}`),_e(q,"aria-label",`Delete ${t.entry.name??""}`)}),I("click",v,a),I("keydown",v,j=>{(j.key==="Enter"||j.key===" ")&&(j.preventDefault(),a())}),I("click",M,c),I("click",q,l),m(e,d),gt()}Ft(["click","keydown"]);var ud=N('<form class="px-2 pb-1"><input class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"/></form>'),dd=N('<p class="px-4 py-2 text-xs text-vs-muted">No folder opened.</p>'),fd=N('<p class="px-4 py-2 text-xs text-vs-muted">No files here</p>'),vd=N('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase"><span class="flex-1 truncate">Explorer</span></div> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase"><!> <span class="flex-1 truncate"> </span> <span class="flex opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"><!></button></span></div> <!> <input class="mx-2 mb-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none focus:border-vs-accent" placeholder="Filter files…"/> <div class="min-h-0 flex-1 overflow-y-auto pb-2"><!></div></div>');function hd(e,t){_t(t,!0);let n=P(""),r=P("");const s=(O,j)=>O==="."?j:`${O}/${j}`;async function i(O){O.preventDefault();const j=o(r).trim();if(j)try{await we.fs(_.connectionId,{action:o(n)==="dir"?"create_dir":"create_file",path:s(_.path,j)}),f(n,""),f(r,""),await _.refreshFiles()}catch(J){_.setStatus(J.message||"Could not create")}}const a=ft(()=>{var O,j;return(((O=_.connection)==null?void 0:O.workspace_root)||"").split("/").filter(Boolean).pop()||((j=_.connection)==null?void 0:j.label)||"WORKSPACE"});var l=vd(),c=h(b(l),2),d=b(c);kn(d,{size:14,class:"shrink-0 text-vs-muted"});var v=h(d,2),y=X(v,!0),p=h(v,2),g=b(p),x=b(g);Wu(x,{size:14});var w=h(g,2),S=b(w);Gu(S,{size:14});var E=h(w,2),H=b(E);_o(H,{size:13});var A=h(c,2);{var G=O=>{var j=ud(),J=b(j);Ri(J,!0),Y(()=>_e(J,"placeholder",o(n)==="dir"?"New folder name":"New file name")),dr("submit",j,i),I("keydown",J,ue=>{ue.key==="Escape"&&f(n,"")}),dr("blur",J,()=>{o(r).trim()||f(n,"")}),st(J,()=>o(r),ue=>f(r,ue)),m(O,j)};D(A,O=>{o(n)&&O(G)})}var T=h(A,2),$=h(T,2),M=b($);{var q=O=>{var j=dd();m(O,j)},ee=O=>{var j=Z(),J=V(j);Ye(J,17,()=>_.visibleEntries,ue=>ue.name,(ue,ke)=>{zl(ue,{get entry(){return o(ke)},get dir(){return _.path},depth:0})},ue=>{var ke=fd();m(ue,ke)}),m(O,j)};D(M,O=>{_.connectionId?O(ee,-1):O(q)})}Y(()=>{var O;_e(v,"title",(O=_.connection)==null?void 0:O.workspace_root),W(y,o(a))}),I("click",g,()=>{f(n,"file"),f(r,"")}),I("click",w,()=>{f(n,"dir"),f(r,"")}),I("click",E,()=>_.refreshFiles()),st(T,()=>_.filter,O=>_.filter=O),m(e,l),gt()}Ft(["click","keydown"]);var pd=N('<div class="absolute top-full right-0 z-20 mt-1 min-w-[170px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"><button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Fetch</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Pull</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Push</button> <div class="my-1 h-px bg-vs-line"></div> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Create Branch…</button></div>'),_d=N('<p class="mx-3 flex items-center gap-1.5 text-xs text-vs-muted"><!> Reading repository…</p>'),gd=N(`<p class="mx-3 text-xs leading-relaxed text-vs-muted">This folder isn't a Git repository.<br/> Open a folder containing a <code class="rounded-sm bg-vs-input px-1">.git</code> directory,
      or run <code class="rounded-sm bg-vs-input px-1">git init</code> in the terminal.</p>`),md=N('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Unstage"><!></button></span> <span> </span></div>'),bd=N('<div class="flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Staged Changes</span></button> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!>',1),xd=N('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Open changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Discard changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Stage changes"><!></button></span> <span> </span></div>'),yd=N('<p class="px-6 py-2 text-xs text-vs-muted">No changes.</p>'),wd=N('<div class="min-h-0 flex-1 overflow-y-auto"></div>'),kd=N('<span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span>'),$d=N('<span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh history" aria-label="Refresh history"><!></button></span> <!>',1),Sd=N('<span class="shrink-0 rounded-sm bg-vs-line px-1 text-[10px] text-vs-blue"> </span>'),Cd=N('<div class="group flex cursor-pointer flex-col gap-0.5 py-1 pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><div class="flex min-w-0 items-center gap-1.5"><span class="truncate text-vs-fg"> </span> <!></div> <div class="flex min-w-0 items-center gap-1.5 text-[11px] text-vs-muted"><span class="shrink-0 font-mono text-vs-yellow"> </span> <span class="truncate"> </span> <span class="ml-auto shrink-0"> </span></div></div>'),Ed=N('<p class="px-6 py-2 text-xs text-vs-muted"> </p>'),Td=N('<div class="max-h-[45%] min-h-0 flex-1 overflow-y-auto"></div>'),Nd=N('<button class="flex items-center gap-1 rounded-sm px-1 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Pull then push"><!> </button>'),zd=N('<div class="flex gap-1 border-t border-vs-line px-3 py-2"><input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="New branch name"/> <button class="rounded-sm bg-vs-status px-2 py-1 text-xs text-white">Create</button></div>'),Md=N('<pre class="max-h-[120px] shrink-0 overflow-auto border-t border-vs-line px-3 py-1.5 text-[11px] whitespace-pre-wrap text-vs-muted"> </pre>'),Ad=N('<div class="px-3 pb-2"><textarea class="w-full resize-none rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs text-vs-fg outline-none focus:border-vs-accent placeholder:text-vs-muted" rows="2"></textarea> <button class="mt-1 flex w-full items-center justify-center gap-1.5 rounded-sm bg-vs-status px-2 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"><!> Commit</button></div> <!> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Changes</span></button> <span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh" aria-label="Refresh"><!></button> <button class="rounded-sm p-0.5 hover:bg-vs-line" title="Stage all changes" aria-label="Stage all"><!></button></span> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!> <div class="group flex shrink-0 items-center gap-1 border-t border-vs-line px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <!> <span class="truncate">History</span></button> <!></div> <!> <div class="mt-auto flex items-center gap-2 border-t border-vs-line px-3 py-1.5 text-[11px]"><span class="flex min-w-0 items-center gap-1 text-vs-muted" title="Current branch"><!> <span class="truncate"> </span></span> <!></div> <!> <!>',1),Pd=N('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase"><span class="flex-1">Source Control</span> <div class="relative" data-scm-menu=""><button class="rounded-sm p-0.5 hover:bg-vs-hover" title="More actions" aria-label="More actions"><!></button> <!></div></div> <!></div>');function Id(e,t){_t(t,!0);let n=P(""),r=P(""),s=P(!1),i=P(!0),a=P(!0),l=P(!1),c=P(!1);const d=ft(()=>(_.gitStatus||"").split(`
`).filter(R=>R&&!R.startsWith("##")).map(R=>{const oe=R.slice(3),Ee=oe.indexOf(" -> "),Je=Ee===-1?oe:oe.slice(Ee+4);return{index:R[0]===" "?"":R[0],work:R[1]===" "?"":R[1],code:R.slice(0,2).trim()||"??",path:Je.replace(/\r$/,""),from:Ee===-1?"":oe.slice(0,Ee)}}).filter(R=>R.path)),v=ft(()=>o(d).filter(R=>R.index&&R.index!=="?")),y=ft(()=>o(d).filter(R=>R.work&&R.work!==" ")),p=R=>R.includes("?")||R.includes("A")?"text-vs-green":R.includes("D")?"text-vs-red":R.includes("R")?"text-vs-blue":"text-vs-yellow",g=R=>R.split("/").pop(),x=R=>{const oe=R.split("/");return oe.pop(),oe.join("/")};async function w(R,oe={}){_.gitBusy=R;try{return await _.runGit(R,oe)}finally{_.gitBusy=""}}async function S(){if(!o(n).trim()||!o(v).length)return;await w("commit",{message:o(n).trim()})&&f(n,"")}async function E(){if(!o(r).trim())return;await w("create_branch",{branch:o(r).trim()})&&(f(r,""),f(s,!1))}async function H(R){confirm(`Discard changes in ${R.path}? This cannot be undone.`)&&await w("discard",{files:[R.path]})}async function A(R){const oe=await _.runGit("diff_file",{files:[R.path]});oe&&_.openDiffTab(R.path,oe.output||"No changes to show.")}let G=P("");pt(()=>{const R=_.connectionId,oe=_.connectionState,Ee=R?`${R}|${oe}`:"";!R||oe!=="connected"||o(G)!==Ee&&(f(G,Ee,!0),w("status"))});async function T(){f(l,!o(l)),o(l)&&!_.gitHistoryLoaded&&await w("log")}pt(()=>{o(l)&&!_.gitHistoryLoaded&&!_.notARepo&&!_.gitBusy&&w("log")});async function $(R){const oe=await _.runGit("show",{ref:R.hash});oe&&_.openDiffTab(`${R.short} ${R.subject}`,oe.output||"Empty commit.")}const M=R=>(R||"").split(",").map(oe=>oe.trim().replace(/^HEAD -> /,"")).filter(Boolean);function q(R){R.key==="Enter"&&(R.ctrlKey||R.metaKey)&&(R.preventDefault(),S())}var ee=Pd();dr("click",_s,R=>{var oe,Ee;(Ee=(oe=R.target).closest)!=null&&Ee.call(oe,"[data-scm-menu]")||f(c,!1)});var O=b(ee),j=h(b(O),2),J=b(j),ue=b(J);Vu(ue,{size:14});var ke=h(J,2);{var Ue=R=>{var oe=pd(),Ee=b(oe),Je=h(Ee,2),it=h(Je,2),Ht=h(it,4);I("click",Ee,()=>{f(c,!1),w("fetch")}),I("click",Je,()=>{f(c,!1),w("pull")}),I("click",it,()=>{f(c,!1),w("push")}),I("click",Ht,()=>{f(c,!1),f(s,!o(s))}),m(R,oe)};D(ke,R=>{o(c)&&R(Ue)})}var be=h(O,2);{var Ze=R=>{var oe=_d(),Ee=b(oe);an(Ee,{size:12,class:"animate-spin"}),m(R,oe)},ae=R=>{var oe=gd();m(R,oe)},de=R=>{var oe=Ad(),Ee=V(oe),Je=b(Ee),it=h(Je,2),Ht=b(it);{var jt=B=>{an(B,{size:12,class:"animate-spin"})},Nt=B=>{ua(B,{size:12})};D(Ht,B=>{_.gitBusy==="commit"?B(jt):B(Nt,-1)})}var Tn=h(Ee,2);{var Gr=B=>{var ge=bd(),fe=V(ge),K=b(fe),he=b(K);{var He=ne=>{kn(ne,{size:14,class:"text-vs-muted"})},Oe=ne=>{da(ne,{size:14,class:"text-vs-muted"})};D(he,ne=>{o(a)?ne(He):ne(Oe,-1)})}var nt=h(K,2),k=X(nt,!0),z=h(fe,2);{var L=ne=>{var pe=Z(),Ae=V(pe);Ye(Ae,17,()=>o(v),$e=>$e.path,($e,Te)=>{var Ne=md(),ye=b(Ne),je=X(ye,!0),kt=h(ye,2),mt=X(kt,!0),hn=h(kt,2),Mn=b(hn),Bt=b(Mn);ed(Bt,{size:13});var qn=h(hn,2),pn=X(qn,!0);Y((_n,An,Qr)=>{_e(Ne,"title",o(Te).path),W(je,_n),W(mt,An),_e(Mn,"aria-label",`Unstage ${o(Te).path??""}`),vt(qn,1,`shrink-0 font-mono text-[11px] ${Qr??""}`),W(pn,o(Te).index||o(Te).code)},[()=>g(o(Te).path),()=>x(o(Te).path),()=>p(o(Te).code)]),I("click",Ne,()=>A(o(Te))),I("keydown",Ne,_n=>{_n.key==="Enter"&&A(o(Te))}),I("click",Mn,_n=>{_n.stopPropagation(),w("unstage",{files:[o(Te).path]})}),m($e,Ne)}),m(ne,pe)};D(z,ne=>{o(a)&&ne(L)})}Y(()=>W(k,o(v).length)),I("click",K,()=>f(a,!o(a))),m(B,ge)};D(Tn,B=>{o(v).length&&B(Gr)})}var dn=h(Tn,2),jn=b(dn),fr=b(jn);{var Bn=B=>{kn(B,{size:14,class:"text-vs-muted"})},Yr=B=>{da(B,{size:14,class:"text-vs-muted"})};D(fr,B=>{o(i)?B(Bn):B(Yr,-1)})}var Vn=h(jn,2),Nn=b(Vn),Xt=b(Nn);_o(Xt,{size:12});var vr=h(Nn,2),zn=b(vr);xa(zn,{size:13});var Kn=h(Vn,2),Un=X(Kn,!0),hr=h(dn,2);{var pr=B=>{var ge=wd();Ye(ge,21,()=>o(y),fe=>fe.path,(fe,K)=>{var he=xd(),He=b(he),Oe=X(He,!0),nt=h(He,2),k=X(nt,!0),z=h(nt,2),L=b(z),ne=b(L);Uu(ne,{size:13});var pe=h(L,2),Ae=b(pe);od(Ae,{size:13});var $e=h(pe,2),Te=b($e);xa(Te,{size:13});var Ne=h(z,2),ye=X(Ne,!0);Y((je,kt,mt)=>{_e(he,"title",o(K).path),W(Oe,je),W(k,kt),_e(L,"aria-label",`Open changes to ${o(K).path??""}`),_e(pe,"aria-label",`Discard changes to ${o(K).path??""}`),_e($e,"aria-label",`Stage ${o(K).path??""}`),vt(Ne,1,`shrink-0 font-mono text-[11px] ${mt??""}`),W(ye,o(K).work||o(K).code)},[()=>g(o(K).path),()=>x(o(K).path),()=>p(o(K).code)]),I("click",he,()=>A(o(K))),I("keydown",he,je=>{je.key==="Enter"&&A(o(K))}),I("click",L,je=>{je.stopPropagation(),A(o(K))}),I("click",pe,je=>{je.stopPropagation(),H(o(K))}),I("click",$e,je=>{je.stopPropagation(),w("stage",{files:[o(K).path]})}),m(fe,he)},fe=>{var K=yd();m(fe,K)}),m(B,ge)};D(hr,B=>{o(i)&&B(pr)})}var _r=h(hr,2),fn=b(_r),gr=b(fn);{var mr=B=>{kn(B,{size:14,class:"text-vs-muted"})},Jr=B=>{da(B,{size:14,class:"text-vs-muted"})};D(gr,B=>{o(l)?B(mr):B(Jr,-1)})}var br=h(gr,2);Xu(br,{size:12,class:"shrink-0 text-vs-muted"});var Xr=h(fn,2);{var xr=B=>{var ge=$d(),fe=V(ge),K=b(fe),he=b(K);{var He=z=>{an(z,{size:12,class:"animate-spin"})},Oe=z=>{_o(z,{size:12})};D(he,z=>{_.gitBusy==="log"?z(He):z(Oe,-1)})}var nt=h(fe,2);{var k=z=>{var L=kd(),ne=X(L,!0);Y(()=>W(ne,_.gitCommits.length)),m(z,L)};D(nt,z=>{_.gitCommits.length&&z(k)})}I("click",K,()=>w("log")),m(B,ge)};D(Xr,B=>{o(l)&&B(xr)})}var vn=h(_r,2);{var Zr=B=>{var ge=Td();Ye(ge,21,()=>_.gitCommits,fe=>fe.hash,(fe,K)=>{var he=Cd(),He=b(he),Oe=b(He),nt=X(Oe,!0),k=h(Oe,2);Ye(k,17,()=>M(o(K).refs),bl,(Ne,ye)=>{var je=Sd(),kt=X(je,!0);Y(()=>W(kt,o(ye))),m(Ne,je)});var z=h(He,2),L=b(z),ne=X(L,!0),pe=h(L,2),Ae=X(pe,!0),$e=h(pe,2),Te=X($e,!0);Y(()=>{_e(he,"title",`${o(K).short} · ${o(K).author} · ${o(K).date}`),W(nt,o(K).subject),W(ne,o(K).short),W(Ae,o(K).author),W(Te,o(K).relative)}),I("click",he,()=>$(o(K))),I("keydown",he,Ne=>{Ne.key==="Enter"&&$(o(K))}),m(fe,he)},fe=>{var K=Ed(),he=X(K,!0);Y(()=>W(he,_.gitBusy==="log"?"Loading history…":"No commits yet.")),m(fe,K)}),m(B,ge)};D(vn,B=>{o(l)&&B(Zr)})}var Wn=h(vn,2),yr=b(Wn),C=b(yr);po(C,{size:12,class:"shrink-0"});var F=h(C,2),te=X(F,!0),Se=h(yr,2);{var Ce=B=>{var ge=Nd(),fe=b(ge);{var K=Oe=>{an(Oe,{size:11,class:"animate-spin"})},he=Oe=>{Ou(Oe,{size:11})};D(fe,Oe=>{_.gitBusy==="pull"||_.gitBusy==="push"?Oe(K):Oe(he,-1)})}var He=h(fe);Y(()=>W(He,` ${_.gitBehind??""}↓ ${_.gitAhead??""}↑`)),I("click",ge,()=>w("pull").then(()=>w("push"))),m(B,ge)};D(Se,B=>{_.gitHasUpstream&&B(Ce)})}var Ie=h(Wn,2);{var Le=B=>{var ge=zd(),fe=b(ge),K=h(fe,2);I("keydown",fe,he=>{he.key==="Enter"&&E(),he.key==="Escape"&&f(s,!1)}),st(fe,()=>o(r),he=>f(r,he)),I("click",K,E),m(B,ge)};D(Ie,B=>{o(s)&&B(Le)})}var Ve=h(Ie,2);{var Fe=B=>{var ge=Md(),fe=X(ge,!0);Y(()=>W(fe,_.gitOutput)),m(B,ge)};D(Ve,B=>{_.gitOutput&&B(Fe)})}Y(B=>{_e(Je,"placeholder",`Message (Ctrl+Enter to commit on "${_.gitBranch||"branch"}")`),it.disabled=B,_e(it,"title",o(v).length?"Commit staged changes":"Stage a change first"),W(Un,o(y).length),W(te,_.gitBranch||"—")},[()=>!o(n).trim()||!o(v).length||_.gitBusy==="commit"]),I("keydown",Je,q),st(Je,()=>o(n),B=>f(n,B)),I("click",it,S),I("click",jn,()=>f(i,!o(i))),I("click",Nn,()=>w("status")),I("click",vr,()=>w("stage",{files:["."]})),I("click",fn,T),m(R,oe)};D(be,R=>{!o(G)||_.gitBusy==="status"&&!_.gitStatus&&!_.notARepo?R(Ze):_.notARepo?R(ae,1):R(de,-1)})}I("click",J,()=>f(c,!o(c))),m(e,ee),gt()}Ft(["click","keydown"]);const Od="modulepreload",Rd=function(e,t){return new URL(e,t).href},vi={},fa=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let a=function(v){return Promise.all(v.map(y=>Promise.resolve(y).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(n.map(v=>{if(v=Rd(v,r),v in vi)return;vi[v]=!0;const y=v.endsWith(".css"),p=y?'[rel="stylesheet"]':"";if(!!r)for(let w=l.length-1;w>=0;w--){const S=l[w];if(S.href===v&&(!y||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${v}"]${p}`))return;const x=document.createElement("link");if(x.rel=y?"stylesheet":Od,y||(x.as="script"),x.crossOrigin="",x.href=v,d&&x.setAttribute("nonce",d),document.head.appendChild(x),y)return new Promise((w,S)=>{x.addEventListener("load",w),x.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${v}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},ds={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},Ld={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function Dd(e){var n;const t=(e||"").split("/").pop()||"";return t.toLowerCase()==="dockerfile"?"dockerfile":t.toLowerCase()==="makefile"?"shell":Ld[(n=t.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var Fd=N('<div class="editor svelte-1h8xysy"></div>');function Hd(e,t){_t(t,!0);let n,r=null,s=null,i="",a=!1;qr(async()=>{s=await fa(()=>import("./ide-monaco.js").then(c=>c.a),__vite__mapDeps([0,1]),import.meta.url),s.editor.defineTheme("monokai",ds),r=s.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{a||!i||_.updateContent(i,r.getValue())}),r.addCommand(s.KeyMod.CtrlCmd|s.KeyCode.KeyS,()=>_.saveActive())}),Ao(()=>r==null?void 0:r.dispose()),pt(()=>{const c=_.activeTab;if(!(!r||!s)){if(!c){a=!0,r.setValue(""),i="",a=!1;return}if(c.key!==i){a=!0;const d=s.editor.createModel(c.content,c.language||Dd(c.path)),v=r.getModel();r.setModel(d),v==null||v.dispose(),r.updateOptions({readOnly:!!c.readOnly}),i=c.key,a=!1}else r.getValue()!==c.content&&(a=!0,r.setValue(c.content),a=!1)}});var l=Fd();bs(l,c=>n=c,()=>n),m(e,l),gt()}var In=Su(()=>_),jd=N('<span class="h-2 w-2 rounded-full bg-vs-fg group-hover:hidden"></span> <!>',1),Bd=N('<div><button class="flex items-center gap-1.5 py-2 pr-1 pl-3" role="tab"><!> <span class="whitespace-nowrap"> </span></button> <button class="mr-1.5 flex h-5 w-5 items-center justify-center rounded-sm hover:bg-vs-line"><!></button></div>'),Vd=N('<div class="px-3 py-2 text-xs text-vs-muted">Open a file from the Explorer</div>'),Kd=N('<div class="flex min-h-[35px] items-stretch overflow-x-auto bg-vs-tabinactive" role="tablist"></div>');function Ud(e,t){_t(t,!1);const n=s=>s.split("/").pop();Nl();var r=Kd();Ye(r,5,()=>In().tabs,s=>s.key,(s,i)=>{var a=Bd();let l;var c=b(a),d=b(c);Po(d,{size:14,class:"shrink-0 text-vs-blue"});var v=h(d,2),y=X(v,!0),p=h(c,2),g=b(p);{var x=S=>{var E=jd(),H=h(V(E),2);ya(H,{size:14,class:"hidden group-hover:block"}),m(S,E)},w=S=>{ya(S,{size:14,class:"opacity-0 group-hover:opacity-100"})};D(g,S=>{o(i).dirty?S(x):S(w,-1)})}Y((S,E)=>{l=vt(a,1,"group flex items-center border-r border-vs-bg text-[13px]",null,l,{"bg-vs-tabactive":o(i).key===In().activeKey,"text-vs-bright":o(i).key===In().activeKey,"text-vs-muted":o(i).key!==In().activeKey}),_e(c,"aria-selected",o(i).key===In().activeKey),_e(c,"title",o(i).path),W(y,S),_e(p,"title",o(i).dirty?"Unsaved changes — close":"Close"),_e(p,"aria-label",`Close ${E??""}`)},[()=>n(o(i).path),()=>n(o(i).path)]),I("click",c,()=>In(In().activeKey=o(i).key)),I("click",p,()=>In().closeTab(o(i).key)),m(s,a)},s=>{var i=Vd();m(s,i)}),m(e,r),gt()}Ft(["click"]);var Wd=N("<option> </option>"),qd=N('<p class="rounded-sm border border-mk-pink/40 bg-mk-pink/10 px-2 py-1 text-xs text-mk-pink"> </p>'),Gd=N('<div class="flex flex-col gap-1.5"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green"><!> </span> <div class="chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"></div></div>'),Yd=N('<div class="flex flex-col gap-1.5 border-l-2 border-mk-blue/60 pl-2.5"><span class="text-[11px] font-semibold text-mk-blue">You</span> <div class="text-[13px] leading-relaxed whitespace-pre-wrap text-mk-fg/90"> </div></div>'),Jd=N(`<div class="m-auto flex max-w-[250px] flex-col items-center gap-2.5 text-center"><!> <p class="text-xs leading-relaxed text-mk-comment">Ask about the file you have open. The prompt goes to <span class="text-mk-muted"> </span>,
            and the reply appears here.</p></div>`),Xd=N('<div class="flex items-center gap-2 text-[11px] text-mk-comment"><!> Working…</div>'),Zd=N(`<span title="Context used of the model's window"> </span> <span class="h-2 w-16 overflow-hidden rounded-full bg-mk-line" aria-hidden="true"><span></span></span>`,1),Qd=N('<span title="Estimated cost"> </span>'),ef=N('<div class="flex shrink-0 items-center gap-2 border-t border-mk-line px-3 py-1 text-[10px] text-mk-comment"><!> <span title="Total tokens this session"> </span> <!> <button class="ml-auto flex items-center gap-1 rounded-sm px-1.5 py-0.5 hover:bg-mk-line hover:text-mk-fg disabled:opacity-40" title="Compact the conversation to free up context (/compact)"><!> Compact</button></div>'),hi=N('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line"><span class="w-3 text-mk-green"><!></span> </button>'),tf=N('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[150px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl"></div>'),nf=N('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line"><span class="w-3 text-mk-green"><!></span> <span class="truncate"> </span></button>'),rf=N('<div class="absolute bottom-full left-0 z-20 mb-1 max-h-[260px] min-w-[190px] overflow-y-auto rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl"></div>'),sf=N('<div class="relative" data-menu=""><button class="flex max-w-[110px] items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg" title="Model"><span class="truncate"> </span> <!></button> <!></div>'),af=N('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[130px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl"></div>'),of=N('<div class="relative" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg" title="Reasoning effort"> <!></button> <!></div>'),lf=N('<div class="flex h-full min-h-0 flex-col bg-mk-bg text-mk-fg"><div class="flex items-center gap-2 border-b border-mk-line px-3 py-1.5"><!> <span class="text-[11px] font-semibold tracking-wide text-mk-muted uppercase">AI Agent</span> <select class="ml-auto min-w-0 max-w-[55%] truncate rounded-sm border border-mk-line bg-mk-input px-1.5 py-0.5 text-[11px] text-mk-fg outline-none focus:border-mk-green" title="Agent session that answers"></select></div> <div class="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-3 py-3"><!> <!> <!></div> <!> <div class="border-t border-mk-line p-2"><div class="rounded-md border border-mk-line bg-mk-input focus-within:border-mk-green"><textarea rows="2" class="max-h-[200px] w-full resize-none bg-transparent px-2.5 py-2 text-[13px] text-mk-fg outline-none placeholder:text-mk-comment" placeholder="Ask about this workspace…"></textarea> <div class="flex items-center gap-1 px-1.5 pb-1.5 text-[11px]"><div class="relative" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg" title="Agent"> <!></button> <!></div> <!> <!> <!> <span class="ml-auto flex items-center gap-1.5"><kbd class="hidden text-[10px] text-mk-comment sm:inline">↵ send · ⇧↵ newline</kbd> <button class="flex h-6 w-6 items-center justify-center rounded-md bg-mk-green text-mk-bg disabled:opacity-40" title="Send (Enter)" aria-label="Send"><!></button></span></div></div></div></div>');function cf(e,t){_t(t,!0);let n=Ge(t,"sessions",19,()=>[]),r=Ge(t,"session",3,""),s=Ge(t,"rootPath",3,""),i=P(""),a=P(Me(r()||n()[0]||"")),l=P(!1),c=P(Me([])),d=P(""),v=P(null),y=P(null),p=null,g=P(Me({agent:"codex",available:[],model:"",effort:"",models:[],efforts:[]})),x=P(""),w=P("");const S=ft(()=>(o(g).models.find(C=>C[0]===o(g).model)||[])[1]||o(g).model||"default");let E=P("");async function H(){if(!_.connectionId){f(E,"");return}try{f(E,(await we.agentContext(_.connectionId)).context||"",!0)}catch{f(E,"")}}pt(()=>{_.connectionId,H()});async function A(){if(o(a))try{f(g,{agent:"codex",available:[],model:"",effort:"",models:[],efforts:[],...await we.sessionAgent(o(a))},!0)}catch(C){f(g,{agent:o(g).agent,available:[],model:"",effort:"",models:[],efforts:[]},!0),_.setStatus(C.message||"Could not read agent settings")}}async function G(){if(o(a))try{const F=(await we.chat(o(a))).messages||[],te=F.length!==o(c).length;f(c,F,!0),f(d,""),te&&queueMicrotask(T)}catch(C){f(d,C.message||"Could not load chat",!0)}}function T(){o(v)&&(o(v).scrollTop=o(v).scrollHeight)}pt(()=>{const C=o(a);f(c,[],!0),p&&clearInterval(p),C&&(G(),A(),p=setInterval(G,3e3))}),Ao(()=>{p&&clearInterval(p)});async function $(C){if(f(x,""),C!==o(g).agent){f(w,"agent");try{await we.setSessionAgent(o(a),C),await A(),_.setStatus(`Switched to ${C}`)}catch(F){_.setStatus(F.message||"Could not switch agent")}finally{f(w,"")}}}async function M(C){if(f(x,""),C!==o(g).model){f(w,"model");try{await we.setSessionModel(o(a),C),await A(),_.setStatus(`Model set to ${C}`)}catch(F){_.setStatus(F.message||"Could not change model")}finally{f(w,"")}}}async function q(C){if(f(x,""),C!==o(g).effort){f(w,"effort");try{await we.setSessionEffort(o(a),C),await A(),_.setStatus(`Reasoning effort set to ${C}`)}catch(F){_.setStatus(F.message||"Could not change effort")}finally{f(w,"")}}}function ee(){const C=_.connection||{},F=_.activeTab,te=F?F.path:_.path||".",Se=F?`
Active file contents (first 12,000 characters):
${F.content.slice(0,12e3)}`:"";return`${o(E)||(C.kind==="local"?`[IDE workspace]
Local folder: ${C.workspace_root||"."}
`:`[IDE workspace]
SSH target: ${C.username||"?"}@${C.host||"?"}
`)}
Currently open: ${te}${Se}

${o(i).trim()}`}async function O(){const C=o(i).trim();if(!C||!o(a)||o(l))return;const F=ee();f(l,!0);try{const te=await fetch(`${s()}/api/sessions/${encodeURIComponent(o(a))}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:F})}),Se=await te.json().catch(()=>({}));if(!te.ok)throw new Error(Se.error||"Could not send");f(i,""),o(y)&&(o(y).style.height="auto"),f(c,[...o(c),{role:"user",text:C,ts:Date.now()/1e3,_local:!0}],!0),queueMicrotask(T),setTimeout(G,1200)}catch(te){_.setStatus(te.message||"Could not send prompt")}finally{f(l,!1)}}function j(C){C.key==="Enter"&&!C.shiftKey&&(C.preventDefault(),O())}function J(C){const F=C.currentTarget;F.style.height="auto",F.style.height=`${Math.min(F.scrollHeight,200)}px`}const ue=C=>C.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function ke(C){const F=[];return ue(C).replace(/```(\w*)\n?([\s\S]*?)```/g,(Ce,Ie,Le)=>(F.push(`<pre class="chat-code"><code>${Le.replace(/\n$/,"")}</code></pre>`),`\0BLOCK${F.length-1}\0`)).replace(/`([^`\n]+)`/g,'<code class="chat-inline">$1</code>').replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>").split(`
`).map(Ce=>{const Ie=Ce.match(/^\s*[-*]\s+(.*)$/);return Ie?`<span class="chat-li">${Ie[1]}</span>`:Ce}).join(`
`).replace(/\u0000BLOCK(\d+)\u0000/g,(Ce,Ie)=>F[Number(Ie)])}function Ue(C){const F=C.full||C.text||"",te=`

`;if(F.startsWith("[IDE workspace")||F.startsWith("[Remote IDE context]")||F.startsWith("[Remote SSH IDE context]")){const Se=F.lastIndexOf(te);if(Se!==-1)return F.slice(Se+te.length)}return F}let be=P(null),Ze=P(!1),ae=null;async function de(){if(o(a))try{const F=await(await fetch(`${s()}/api/sessions/${encodeURIComponent(o(a))}/stats`)).json().catch(()=>({}));f(be,F&&F.available?F:null,!0)}catch{f(be,null)}}pt(()=>(o(a),de(),clearInterval(ae),ae=setInterval(de,2e4),()=>clearInterval(ae)));async function R(){if(!(!o(a)||o(Ze))){f(Ze,!0);try{const C=await fetch(`${s()}/api/sessions/${encodeURIComponent(o(a))}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:"/compact"})}),F=await C.json().catch(()=>({}));if(!C.ok)throw new Error(F.error||"Could not compact");setTimeout(de,4e3)}catch(C){_.setStatus(C.message||"Could not compact context")}finally{f(Ze,!1)}}}const oe=C=>{const F=Number(C)||0;return F>=1e6?`${(F/1e6).toFixed(1)}M`:F>=1e3?`${(F/1e3).toFixed(1)}k`:String(F)},Ee=C=>C>=90?"text-vs-red":C>=70?"text-vs-yellow":"text-vs-muted";var Je=lf();dr("click",_s,C=>{var F,te;(te=(F=C.target).closest)!=null&&te.call(F,"[data-menu]")||f(x,"")});var it=b(Je),Ht=b(it);Ja(Ht,{size:13,class:"shrink-0 text-mk-green"});var jt=h(Ht,4);Ye(jt,20,n,C=>C,(C,F)=>{var te=Wd(),Se=X(te,!0),Ce={};Y(()=>{W(Se,F),Ce!==(Ce=F)&&(te.value=(te.__value=Ce)??"")}),m(C,te)}),ps(jt);var Nt=h(it,2),Tn=b(Nt);{var Gr=C=>{var F=qd(),te=X(F,!0);Y(()=>W(te,o(d))),m(C,F)};D(Tn,C=>{o(d)&&C(Gr)})}var dn=h(Tn,2);Ye(dn,19,()=>o(c),(C,F)=>C.ts+":"+F,(C,F)=>{var te=Z(),Se=V(te);{var Ce=Le=>{var Ve=Gd(),Fe=b(Ve),B=b(Fe);Ja(B,{size:11});var ge=h(B),fe=h(Fe,2);pu(fe,()=>ke(Ue(o(F))),!0),Y(()=>W(ge,` ${o(g).agent==="claude"?"Claude":"Codex"}`)),m(Le,Ve)},Ie=Le=>{var Ve=Yd(),Fe=h(b(Ve),2),B=X(Fe,!0);Y(ge=>W(B,ge),[()=>Ue(o(F))]),m(Le,Ve)};D(Se,Le=>{o(F).role==="assistant"?Le(Ce):Le(Ie,-1)})}m(C,te)},C=>{var F=Z(),te=V(F);{var Se=Ce=>{var Ie=Jd(),Le=b(Ie);Ja(Le,{size:26,strokeWidth:1.3,class:"text-mk-line"});var Ve=h(Le,2),Fe=h(b(Ve)),B=X(Fe,!0);Y(()=>W(B,o(a)||"the selected session")),m(Ce,Ie)};D(te,Ce=>{o(d)||Ce(Se)})}m(C,F)});var jn=h(dn,2);{var fr=C=>{var F=Xd(),te=b(F);an(te,{size:11,class:"animate-spin"}),m(C,F)};D(jn,C=>{o(l)&&C(fr)})}bs(Nt,C=>f(v,C),()=>o(v));var Bn=h(Nt,2);{var Yr=C=>{var F=ef(),te=b(F);{var Se=K=>{var he=Zd(),He=V(he),Oe=X(He),nt=h(He,2),k=X(nt);Y((z,L)=>{vt(He,1,z,"svelte-1roe1v9"),W(Oe,`${o(be).contextPct??0??""}% context`),vt(k,1,`block h-full rounded-full ${(o(be).contextPct||0)>=90?"bg-vs-red":(o(be).contextPct||0)>=70?"bg-vs-yellow":"bg-mk-green"}`),Er(k,`width: ${L??""}%`)},[()=>yl(Ee(o(be).contextPct||0)),()=>Math.min(100,Math.max(0,o(be).contextPct||0))]),m(K,he)};D(te,K=>{o(be).ctxWindowSize&&K(Se)})}var Ce=h(te,2),Ie=X(Ce),Le=h(Ce,2);{var Ve=K=>{var he=Qd(),He=X(he);Y(Oe=>W(He,`$${Oe??""}`),[()=>Number(o(be).estimatedCost).toFixed(2)]),m(K,he)};D(Le,K=>{o(be).estimatedCost&&K(Ve)})}var Fe=h(Le,2),B=b(Fe);{var ge=K=>{an(K,{size:10,class:"animate-spin"})},fe=K=>{Qu(K,{size:10})};D(B,K=>{o(Ze)?K(ge):K(fe,-1)})}Y(K=>{W(Ie,`${K??""} tokens`),Fe.disabled=o(Ze)},[()=>oe(o(be).totalTokens)]),I("click",Fe,R),m(C,F)};D(Bn,C=>{o(be)&&C(Yr)})}var Vn=h(Bn,2),Nn=b(Vn),Xt=b(Nn);bs(Xt,C=>f(y,C),()=>o(y));var vr=h(Xt,2),zn=b(vr),Kn=b(zn),Un=b(Kn),hr=h(Un);kn(hr,{size:11});var pr=h(Kn,2);{var _r=C=>{var F=tf();Ye(F,20,()=>o(g).available.length?o(g).available:["codex"],te=>te,(te,Se)=>{var Ce=hi(),Ie=b(Ce),Le=b(Ie);{var Ve=B=>{ua(B,{size:11})};D(Le,B=>{Se===o(g).agent&&B(Ve)})}var Fe=h(Ie);Y(()=>W(Fe,` ${Se==="claude"?"Claude":"Codex"}`)),I("click",Ce,()=>$(Se)),m(te,Ce)}),m(C,F)};D(pr,C=>{o(x)==="agent"&&C(_r)})}var fn=h(zn,2);{var gr=C=>{var F=sf(),te=b(F),Se=b(te),Ce=X(Se,!0),Ie=h(Se,2);kn(Ie,{size:11,class:"shrink-0"});var Le=h(te,2);{var Ve=Fe=>{var B=rf();Ye(B,21,()=>o(g).models,ge=>ge[0],(ge,fe)=>{var K=nf(),he=b(K),He=b(he);{var Oe=z=>{ua(z,{size:11})};D(He,z=>{o(fe)[0]===o(g).model&&z(Oe)})}var nt=h(he,2),k=X(nt,!0);Y(()=>W(k,o(fe)[1])),I("click",K,()=>M(o(fe)[0])),m(ge,K)}),m(Fe,B)};D(Le,Fe=>{o(x)==="model"&&Fe(Ve)})}Y(()=>W(Ce,o(S))),I("click",te,()=>f(x,o(x)==="model"?"":"model",!0)),m(C,F)};D(fn,C=>{o(g).models.length&&C(gr)})}var mr=h(fn,2);{var Jr=C=>{var F=of(),te=b(F),Se=b(te),Ce=h(Se);kn(Ce,{size:11});var Ie=h(te,2);{var Le=Ve=>{var Fe=af();Ye(Fe,20,()=>o(g).efforts,B=>B,(B,ge)=>{var fe=hi(),K=b(fe),he=b(K);{var He=nt=>{ua(nt,{size:11})};D(he,nt=>{ge===o(g).effort&&nt(He)})}var Oe=h(K);Y(()=>W(Oe,` ${ge??""}`)),I("click",fe,()=>q(ge)),m(B,fe)}),m(Ve,Fe)};D(Ie,Ve=>{o(x)==="effort"&&Ve(Le)})}Y(()=>W(Se,`${(o(g).effort||"effort")??""} `)),I("click",te,()=>f(x,o(x)==="effort"?"":"effort",!0)),m(C,F)};D(mr,C=>{o(g).efforts.length&&C(Jr)})}var br=h(mr,2);{var Xr=C=>{an(C,{size:11,class:"animate-spin text-mk-muted"})};D(br,C=>{o(w)&&C(Xr)})}var xr=h(br,2),vn=h(b(xr),2),Zr=b(vn);{var Wn=C=>{ad(C,{size:11})},yr=C=>{Ru(C,{size:13})};D(Zr,C=>{o(l)?C(Wn):C(yr,-1)})}Y(C=>{W(Un,`${o(g).agent==="claude"?"Claude":"Codex"} `),vn.disabled=C},[()=>o(l)||!o(i).trim()]),ho(jt,()=>o(a),C=>f(a,C)),I("keydown",Xt,j),I("input",Xt,J),st(Xt,()=>o(i),C=>f(i,C)),I("click",Kn,()=>f(x,o(x)==="agent"?"":"agent",!0)),I("click",vn,O),m(e,Je),gt()}Ft(["click","keydown","input"]);var uf=N('<span class="hint svelte-e2eyom">searching…</span>'),df=N('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),ff=N('<ul class="results svelte-e2eyom"></ul>'),vf=N('<p class="empty svelte-e2eyom"> </p>'),hf=N('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function pf(e,t){_t(t,!0);let n=P(""),r=P(Me([])),s=P(0),i=P(!1),a=P(null),l=null;pt(()=>{o(a)&&o(a).focus()}),pt(()=>{const $=o(n).trim();if(l&&clearTimeout(l),!$){f(r,[],!0);return}l=setTimeout(async()=>{f(i,!0);try{const M=await we.searchFiles(_.connectionId,_.path||".",$);f(r,M.matches||[],!0),f(s,0)}catch{f(r,[],!0)}finally{f(i,!1)}},180)});async function c($){var q;if(!$)return;const M=_.path&&_.path!=="."?`${_.path}/`:"";await _.openFile(`${M}${$.path}`),(q=t.onclose)==null||q.call(t)}function d($){var M;$.key==="Escape"?($.preventDefault(),(M=t.onclose)==null||M.call(t)):$.key==="ArrowDown"?($.preventDefault(),f(s,Math.min(o(s)+1,o(r).length-1),!0)):$.key==="ArrowUp"?($.preventDefault(),f(s,Math.max(o(s)-1,0),!0)):$.key==="Enter"&&($.preventDefault(),c(o(r)[o(s)]))}var v=hf(),y=V(v),p=h(y,2),g=b(p),x=b(g);Io(x,{size:14});var w=h(x,2);bs(w,$=>f(a,$),()=>o(a));var S=h(w,2);{var E=$=>{var M=uf();m($,M)};D(S,$=>{o(i)&&$(E)})}var H=h(g,2);{var A=$=>{var M=ff();Ye(M,23,()=>o(r),q=>q.path,(q,ee,O)=>{var j=df(),J=b(j);let ue;var ke=b(J),Ue=X(ke,!0),be=h(ke,2),Ze=X(be,!0),ae=h(be,2);{var de=R=>{ju(R,{size:12})};D(ae,R=>{o(O)===o(s)&&R(de)})}Y(()=>{ue=vt(J,1,"svelte-e2eyom",null,ue,{active:o(O)===o(s)}),W(Ue,o(ee).name),W(Ze,o(ee).path)}),I("click",J,()=>c(o(ee))),m(q,j)}),m($,M)},G=$=>{var M=vf(),q=X(M);Y(ee=>W(q,`No files match “${ee??""}”.`),[()=>o(n).trim()]),m($,M)},T=ft(()=>o(n).trim()&&!o(i));D(H,$=>{o(r).length?$(A):o(T)&&$(G,1)})}I("click",y,()=>{var $;return($=t.onclose)==null?void 0:$.call(t)}),I("keydown",y,$=>{var M;return $.key==="Escape"&&((M=t.onclose)==null?void 0:M.call(t))}),I("keydown",w,d),st(w,()=>o(n),$=>f(n,$)),m(e,v),gt()}Ft(["click","keydown"]);var _f=N('<div class="terminal-pane svelte-maclc7"><div class="bar svelte-maclc7"><span class="label svelte-maclc7">Terminal</span> <span> </span></div> <div class="screen svelte-maclc7"></div></div>');function gf(e,t){_t(t,!0);let n=Ge(t,"rootPath",3,""),r=Ge(t,"session",3,""),s=Ge(t,"index",3,0),i,a=null,l=null,c=null,d=P("connecting"),v=null,y=0,p=null,g=!1;const x={background:ds.colors["editor.background"],foreground:ds.colors["editor.foreground"],cursor:ds.colors["editorCursor.foreground"],selectionBackground:ds.colors["editor.selectionBackground"],black:"#272822",red:"#f92672",green:"#a6e22e",yellow:"#e6db74",blue:"#66d9ef",magenta:"#ae81ff",cyan:"#a1efe4",white:"#f8f8f2",brightBlack:"#75715e",brightRed:"#f92672",brightGreen:"#a6e22e",brightYellow:"#e6db74",brightBlue:"#66d9ef",brightMagenta:"#ae81ff",brightCyan:"#a1efe4",brightWhite:"#f9f8f5"};function w(){if(!(!l||!a||(c==null?void 0:c.readyState)!==WebSocket.OPEN))try{l.fit(),c.send(JSON.stringify({type:"resize",cols:a.cols,rows:a.rows}))}catch{}}function S(){if(g)return;const M=`${location.protocol==="https:"?"wss":"ws"}://${location.host}${n()}/ws/sessions/${encodeURIComponent(r())}/ide/terminal/${encodeURIComponent(_.connectionId)}?index=${encodeURIComponent(s())}`;c=new WebSocket(M),c.binaryType="arraybuffer",c.onopen=()=>{f(d,"connected"),y=0,w()},c.onmessage=q=>{a.write(typeof q.data=="string"?q.data:new Uint8Array(q.data))},c.onclose=q=>{if(g)return;if(q.code===1008){f(d,"refused"),a==null||a.write(`\r
\x1B[31m— not authorised for this terminal —\x1B[0m\r
`);return}if(y>=6){f(d,"closed"),a==null||a.write(`\r
\x1B[33m— terminal unavailable; reopen the panel to retry —\x1B[0m\r
`);return}f(d,"reconnecting");const ee=Math.min(1e3*2**y,1e4);y+=1,p=setTimeout(S,ee)},c.onerror=()=>{g||f(d,"error")}}qr(async()=>{const[{Terminal:$},{FitAddon:M}]=await Promise.all([fa(()=>import("./ide-xterm.js"),[],import.meta.url),fa(()=>import("./ide-addon-fit.js"),[],import.meta.url)]);await fa(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),a=new $({theme:x,fontSize:12,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3}),l=new M,a.loadAddon(l),a.open(i),l.fit(),S(),a.onData(q=>{(c==null?void 0:c.readyState)===WebSocket.OPEN&&c.send(new TextEncoder().encode(q))}),v=new ResizeObserver(()=>w()),v.observe(i)}),Ao(()=>{g=!0,p&&clearTimeout(p),v==null||v.disconnect(),c==null||c.close(),a==null||a.dispose()});var E=_f(),H=b(E),A=h(b(H),2),G=X(A,!0),T=h(H,2);bs(T,$=>i=$,()=>i),Y(()=>{vt(A,1,`status ${o(d)??""}`,"svelte-maclc7"),W(G,o(d))}),m(e,E),gt()}var mf=N('<div class="border-b border-vs-line bg-vs-red/10 px-4 py-2 text-xs text-vs-red"> </div>'),bf=N('<div class="flex items-center gap-2 px-4 py-3 text-xs text-vs-muted"><!> Loading…</div>'),xf=N('<button class="flex w-full items-center gap-2 px-4 py-1 text-left text-[13px] text-vs-fg hover:bg-vs-hover"><!> <span class="truncate"> </span></button>'),yf=N('<div class="px-4 py-3 text-xs text-vs-muted">No sub-folders here. You can still open this folder.</div>'),wf=N('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="flex h-[70vh] w-[min(640px,92vw)] flex-col overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">Open Folder <span class="ml-1 font-normal text-vs-muted"><!></span></div> <form class="flex gap-2 border-b border-vs-line px-3 py-2"><button type="button" class="flex items-center gap-1 rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover disabled:opacity-40" title="Up one folder"><!> Up</button> <input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-xs text-vs-fg outline-none focus:border-vs-accent" spellcheck="false" aria-label="Folder path"/> <button type="submit" class="rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover">Go</button></form> <!> <div class="min-h-0 flex-1 overflow-y-auto py-1"><!></div> <div class="flex items-center gap-2 border-t border-vs-line px-4 py-3"><span class="flex min-w-0 flex-1 items-center gap-2 text-xs text-vs-muted"><!> <span class="truncate font-mono"> </span></span> <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40">Open Folder</button></div></div></div>');function kf(e,t){_t(t,!0);let n=P(""),r=P(""),s=P(Me([])),i=P(""),a=P(!0),l=P("");async function c(ae){f(a,!0),f(i,"");try{const de=_.connectionId?await we.browseOn(_.connectionId,ae):await we.browse(ae);f(n,de.path,!0),f(r,de.parent,!0),f(s,de.entries||[],!0),f(l,de.path,!0)}catch(de){f(i,de.message||"Could not open that folder",!0)}finally{f(a,!1)}}qr(()=>c(""));function d(ae){ae.preventDefault(),o(l).trim()&&c(o(l).trim())}var v=wf(),y=b(v),p=b(y),g=h(b(p)),x=b(g);{var w=ae=>{var de=Xo();Y(()=>W(de,`on ${_.connection.username??""}@${_.connection.host??""}`)),m(ae,de)},S=ae=>{var de=Xo("on this server");m(ae,de)};D(x,ae=>{_.connection&&_.connection.kind!=="local"?ae(w):ae(S,-1)})}var E=h(p,2),H=b(E),A=b(H);Bu(A,{size:14});var G=h(H,2),T=h(E,2);{var $=ae=>{var de=mf(),R=X(de,!0);Y(()=>W(R,o(i))),m(ae,de)};D(T,ae=>{o(i)&&ae($)})}var M=h(T,2),q=b(M);{var ee=ae=>{var de=bf(),R=b(de);an(R,{size:13,class:"animate-spin"}),m(ae,de)},O=ae=>{var de=Z(),R=V(de);Ye(R,17,()=>o(s),oe=>oe.path,(oe,Ee)=>{var Je=xf(),it=b(Je);Yu(it,{size:14,class:"shrink-0 text-vs-blue"});var Ht=h(it,2),jt=X(Ht,!0);Y(()=>W(jt,o(Ee).name)),I("dblclick",Je,()=>c(o(Ee).path)),I("click",Je,()=>c(o(Ee).path)),m(oe,Je)},oe=>{var Ee=yf();m(oe,Ee)}),m(ae,de)};D(q,ae=>{o(a)?ae(ee):ae(O,-1)})}var j=h(M,2),J=b(j),ue=b(J);Ju(ue,{size:13,class:"shrink-0"});var ke=h(ue,2),Ue=X(ke,!0),be=h(J,2),Ze=h(be,2);Y(()=>{H.disabled=!o(r),_e(ke,"title",o(n)),W(Ue,o(n)),Ze.disabled=!o(n)||o(a)}),I("click",v,ae=>ae.target===ae.currentTarget&&t.onclose()),I("keydown",v,ae=>ae.key==="Escape"&&t.onclose()),dr("submit",E,d),I("click",H,()=>o(r)&&c(o(r))),st(G,()=>o(l),ae=>f(l,ae)),I("click",be,function(...ae){var de;(de=t.onclose)==null||de.apply(this,ae)}),I("click",Ze,()=>t.onopen(o(n))),m(e,v),gt()}Ft(["click","keydown","dblclick"]);var $f=N('<p class="px-4 py-2 text-xs text-vs-muted">Open a folder to search it.</p>'),Sf=N('<button class="flex w-full items-center gap-2 px-3 py-1 text-left text-[13px] hover:bg-vs-hover"><!> <span class="truncate text-vs-fg"> </span> <span class="ml-auto max-w-[45%] truncate text-[11px] text-vs-muted"> </span></button>'),Cf=N('<p class="px-4 py-2 text-xs text-vs-muted"> </p>'),Ef=N('<p class="px-4 py-2 text-xs text-vs-muted">Type to search filenames in this workspace.</p>'),Tf=N('<div class="flex h-full min-h-0 flex-col"><div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Search</div> <div class="px-3 pb-2"><div class="flex items-center gap-1.5 rounded-sm border border-vs-line bg-vs-input px-2 focus-within:border-vs-accent"><!> <input class="min-w-0 flex-1 bg-transparent py-1 text-xs text-vs-fg outline-none placeholder:text-vs-muted" placeholder="Search filenames" spellcheck="false"/> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div></div>');function Nf(e,t){_t(t,!0);let n=P(""),r=P(Me([])),s=P(!1),i=P(!1),a=null;pt(()=>{const A=o(n).trim();if(a&&clearTimeout(a),!A||!_.connectionId){f(r,[],!0),f(i,!1);return}a=setTimeout(async()=>{f(s,!0);try{const G=await we.searchFiles(_.connectionId,_.path||".",A);f(r,G.matches||[],!0)}catch(G){f(r,[],!0),_.setStatus(G.message||"Search failed")}finally{f(s,!1),f(i,!0)}},200)});const l=A=>{const G=(A||"").split("/");return G.pop(),G.join("/")};var c=Tf(),d=h(b(c),2),v=b(d),y=b(v);Io(y,{size:12,class:"shrink-0 text-vs-muted"});var p=h(y,2),g=h(p,2);{var x=A=>{an(A,{size:12,class:"shrink-0 animate-spin text-vs-muted"})};D(g,A=>{o(s)&&A(x)})}var w=h(d,2),S=b(w);{var E=A=>{var G=$f();m(A,G)},H=A=>{var G=Z(),T=V(G);Ye(T,17,()=>o(r),$=>$.path,($,M)=>{var q=Sf(),ee=b(q);Po(ee,{size:13,class:"shrink-0 text-vs-blue"});var O=h(ee,2),j=X(O,!0),J=h(O,2),ue=X(J,!0);Y((ke,Ue)=>{_e(q,"title",o(M).path),W(j,ke),W(ue,Ue)},[()=>o(M).name||o(M).path.split("/").pop(),()=>l(o(M).path)]),I("click",q,()=>_.openFile(o(M).path)),m($,q)},$=>{var M=Z(),q=V(M);{var ee=J=>{var ue=Cf(),ke=X(ue);Y(()=>W(ke,`No files match “${o(n)??""}”.`)),m(J,ue)},O=J=>{var ue=Ef();m(J,ue)},j=ft(()=>!o(n).trim());D(q,J=>{o(i)&&!o(s)?J(ee):o(j)&&J(O,1)})}m($,M)}),m(A,G)};D(S,A=>{_.connectionId?A(H,-1):A(E)})}st(p,()=>o(n),A=>f(n,A)),m(e,c),gt()}Ft(["click"]);var zf=N('<p class="flex items-center gap-2 text-vs-muted"><!> Fetching host key…</p>'),Mf=N('<p class="text-vs-red"> </p>'),Af=N("<p>This host is already trusted. Try connecting again.</p>"),Pf=N('<div class="flex items-baseline gap-2 font-mono text-[11px]"><span class="w-16 shrink-0 text-vs-muted"> </span> <span class="break-all text-vs-fg"> </span></div>'),If=N(`<p>The authenticity of <span class="font-mono text-vs-blue"> </span> can't be established. Verify these fingerprints match the server before you continue —
          if they don't, someone may be intercepting the connection.</p> <div class="mt-3 flex flex-col gap-1 rounded-sm border border-vs-line bg-vs-input p-2"></div> <p class="mt-3 text-xs text-vs-muted">Accepting adds the key to <span class="font-mono">~/.ssh/known_hosts</span> on this server.</p>`,1),Of=N('<button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"> </button>'),Rf=N('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="w-[min(560px,92vw)] overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="flex items-center gap-2 border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright"><!> Unknown host</div> <div class="px-4 py-3 text-[13px] leading-relaxed text-vs-fg"><!></div> <div class="flex justify-end gap-2 border-t border-vs-line px-4 py-3"><button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <!></div></div></div>');function Lf(e,t){_t(t,!0);let n=P(!0),r=P(""),s=P(null),i=P(!1);qr(async()=>{try{f(s,await we.hostKey(_.connectionId),!0)}catch(T){f(r,T.message||"Could not fetch the host key",!0)}finally{f(n,!1)}});async function a(){f(i,!0);try{await we.trustHost(_.connectionId),t.ontrusted()}catch(T){f(r,T.message||"Could not trust this host",!0),f(i,!1)}}var l=Rf(),c=b(l),d=b(c),v=b(d);sd(v,{size:15,class:"text-vs-yellow"});var y=h(d,2),p=b(y);{var g=T=>{var $=zf(),M=b($);an(M,{size:13,class:"animate-spin"}),m(T,$)},x=T=>{var $=Mf(),M=X($,!0);Y(()=>W(M,o(r))),m(T,$)},w=T=>{var $=Af();m(T,$)},S=T=>{var $=If(),M=V($),q=h(b(M)),ee=X(q),O=h(M,2);Ye(O,21,()=>o(s).fingerprints,j=>j.fingerprint,(j,J)=>{var ue=Pf(),ke=b(ue),Ue=X(ke,!0),be=h(ke,2),Ze=X(be,!0);Y(()=>{W(Ue,o(J).type),W(Ze,o(J).fingerprint)}),m(j,ue)}),Y(()=>W(ee,`${o(s).host??""}:${o(s).port??""}`)),m(T,$)};D(p,T=>{var $;o(n)?T(g):o(r)?T(x,1):($=o(s))!=null&&$.known?T(w,2):T(S,-1)})}var E=h(y,2),H=b(E),A=h(H,2);{var G=T=>{var $=Of(),M=X($,!0);Y(()=>{$.disabled=o(i),W(M,o(i)?"Trusting…":"Trust and connect")}),I("click",$,a),m(T,$)};D(A,T=>{var $;!o(n)&&!(($=o(s))!=null&&$.known)&&!o(r)&&T(G)})}I("click",l,T=>T.target===T.currentTarget&&t.onclose()),I("keydown",l,T=>T.key==="Escape"&&t.onclose()),I("click",H,function(...T){var $;($=t.onclose)==null||$.apply(this,T)}),m(e,l),gt()}Ft(["click","keydown"]);var Df=N('<div role="separator" tabindex="0" title="Drag to resize (double-click to reset)"><div></div></div>');function Xa(e,t){_t(t,!0);let n=Ge(t,"size",15),r=Ge(t,"side",3,"right"),s=Ge(t,"min",3,120),i=Ge(t,"max",3,800),a=Ge(t,"onreset",3,null),l=P(!1);const c=r()==="top";function d(x){var G;x.preventDefault(),f(l,!0);const w=c?x.clientY:x.clientX,S=n(),E=x.currentTarget;(G=E.setPointerCapture)==null||G.call(E,x.pointerId);function H(T){const M=(c?T.clientY:T.clientX)-w,q=r()==="left"||r()==="top"?-M:M;n(Math.round(Math.min(i(),Math.max(s(),S+q))))}function A(){var T;f(l,!1),(T=E.releasePointerCapture)==null||T.call(E,x.pointerId),window.removeEventListener("pointermove",H),window.removeEventListener("pointerup",A)}window.addEventListener("pointermove",H),window.addEventListener("pointerup",A)}function v(x){const w=x.shiftKey?40:10,S=c?"ArrowUp":r()==="left"?"ArrowLeft":"ArrowRight",E=c?"ArrowDown":r()==="left"?"ArrowRight":"ArrowLeft";if(x.key===S)n(Math.min(i(),n()+w));else if(x.key===E)n(Math.max(s(),n()-w));else return;x.preventDefault()}var y=Df();let p;var g=X(y);Y(()=>{p=vt(y,1,`group relative shrink-0 ${c?"h-1 w-full cursor-row-resize":"w-1 cursor-col-resize"}`,null,p,{"bg-vs-accent":o(l)}),_e(y,"aria-orientation",c?"horizontal":"vertical"),_e(y,"aria-valuenow",n()),_e(y,"aria-valuemin",s()),_e(y,"aria-valuemax",i()),vt(g,1,`absolute ${c?"-top-1 -bottom-1 left-0 right-0":"-left-1 -right-1 top-0 bottom-0"}
           transition-colors group-hover:bg-vs-accent ${o(l)?"bg-vs-accent":""}`)}),I("pointerdown",y,d),I("dblclick",y,()=>{var x;return(x=a())==null?void 0:x()}),I("keydown",y,v),m(e,y),gt()}Ft(["pointerdown","dblclick","keydown"]);var Ff=N('<span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>'),Hf=N('<span class="absolute right-1.5 bottom-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-vs-status px-1 text-[10px] leading-none font-semibold text-white"> </span>'),jf=N("<button><!> <!> <!></button>"),Bf=N("<option> </option>"),Vf=N('<button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover hover:text-vs-red" title="Remove workspace" aria-label="Remove workspace"><!></button>'),Kf=N('<input class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),Uf=N(`<button class="w-full rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Show this host's key fingerprint and trust it">Verify host key…</button>`),Wf=N('<!> <button class="w-full rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"> </button> <!>',1),qf=N('<p class="mt-1 font-mono text-[11px] break-all text-vs-muted"> </p>'),Gf=N('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="~/.ssh/id_ed25519"/> <textarea class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-[11px] outline-none focus:border-vs-accent" rows="4" placeholder="…or paste a private key (-----BEGIN OPENSSH PRIVATE KEY-----)" spellcheck="false"></textarea>',1),Yf=N('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" type="password" placeholder="Password" autocomplete="new-password"/>'),Jf=N('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Host" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="User" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Port" type="number" min="1" max="65535"/> <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!>',1),Xf=N('<form class="mt-2 flex flex-col gap-1.5 border-t border-vs-line px-3 pt-2"><select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>This server (local folder)</option><option>Remote host over SSH</option></select> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"/> <div class="flex gap-1 pb-2"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110" type="submit">Create</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" type="button">Cancel</button></div></form>'),Zf=N('<div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Workspaces</div> <div class="flex flex-col gap-2 px-3 pt-1"><select class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" aria-label="Workspace"><option>— select workspace —</option><!></select> <div class="flex gap-1"><button class="flex flex-1 items-center justify-center gap-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"><!> Open Folder</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Add a workspace or SSH connection" aria-label="Add workspace"><!></button> <!></div> <!> <!></div> <!>',1),Qf=N('<aside class="flex shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel"><!></aside> <!>',1),ev=N('<div class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"><!> <div><h1 class="text-2xl font-light text-vs-fg">Multibuilder IDE</h1> <p class="mt-1 text-sm text-vs-muted">Edit files on this server or on a remote host over SSH.</p></div> <div class="flex flex-col gap-2 text-sm"><button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Open Folder… <kbd class="ml-2 rounded-sm border border-vs-line px-1.5 py-0.5 text-[10px] text-vs-muted">Ctrl+Shift+O</kbd></button> <button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Connect to a host over SSH…</button></div></div>'),tv=N('<button class="rounded-sm p-0.5 opacity-0 group-hover:opacity-100 hover:bg-vs-line" title="Close terminal — ends the shell"><!></button>'),nv=N('<span><button class="max-w-[140px] truncate"> </button> <!></span>'),rv=N('<div class="absolute inset-0"><!></div>'),sv=N('<!> <div class="flex shrink-0 flex-col border-t border-vs-border bg-vs-bg"><div class="flex items-center gap-1 border-b border-vs-border px-2 py-1 text-[11px]"><!> <div class="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto"></div> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40" title="New terminal in this workspace" aria-label="New terminal"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover" title="Hide terminals (Ctrl+`) — sessions keep running" aria-label="Hide all terminals"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover hover:text-vs-red" title="Close this terminal — ends the shell" aria-label="Close this terminal"><!></button></div> <div class="relative min-h-0 flex-1"><!></div></div>',1),av=N('<!> <div class="min-h-0 flex-1"><!></div> <!>',1),ov=N('<!> <aside class="flex shrink-0 flex-col overflow-hidden border-l border-vs-border bg-vs-panel"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1.5"><!> <span class="flex-1 text-[11px] font-semibold tracking-wide uppercase">AI Agent</span> <button class="rounded-sm p-0.5 hover:bg-vs-hover" title="Hide chat" aria-label="Hide chat"><!></button></div> <div class="min-h-0 flex-1"><!></div></aside>',1),pi=N('<span class="flex items-center gap-1"><!> </span>'),iv=N("<span> </span>"),lv=N('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle terminal (Ctrl+`)"><!> Terminal</button> <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Focus the tmux window on the host"><!></button>',1),cv=N('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle AI Agent panel"><!> Chat</button>'),uv=N('<div class="flex h-full flex-col overflow-hidden bg-vs-bg font-sans text-vs-fg"><header class="flex items-center gap-2 border-b border-vs-border bg-vs-titlebar px-3 py-1 text-xs"><!> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover" title="Open a folder on this server (Ctrl+Shift+O)">Open Folder…</button> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40" title="Open a file (Ctrl+P)">Open File…</button> <button><!> Terminal</button> <span class="mx-auto truncate text-vs-muted"> </span> <span><!> </span></header> <div class="flex min-h-0 flex-1"><nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity"><!> <div class="mt-auto flex flex-col items-center pb-1"><button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Account — signed in to the dashboard" aria-label="Account"><!></button> <button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Toggle side bar (Ctrl+B)" aria-label="Toggle side bar"><!></button></div></nav> <!> <section class="flex min-h-0 min-w-0 flex-1 flex-col"><!></section> <!></div> <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white"><!> <!> <span class="truncate"> </span> <span class="ml-auto flex items-center gap-3"><!> <span class="max-w-[40vw] truncate opacity-80"> </span> <!> <!></span></footer> <!> <!> <!></div>');function dv(e,t){_t(t,!0);let n=Ge(t,"sessions",19,()=>[]),r=Ge(t,"session",3,""),s=Ge(t,"rootPath",3,""),i=P("files");function a(k,z){try{const L=localStorage.getItem(`ide.show.${k}`);return L===null?z:L==="1"}catch{return z}}let l=P(Me(a("chat",!0)));const c={sidebar:240,chat:320,panel:240};function d(k){try{const z=localStorage.getItem(`ide.size.${k}`),L=Number(z);return Number.isFinite(L)&&L>0?L:c[k]}catch{return c[k]}}let v=P(Me(d("sidebar"))),y=P(Me(d("chat"))),p=P(Me(d("panel")));pt(()=>{try{localStorage.setItem("ide.size.sidebar",String(o(v))),localStorage.setItem("ide.size.chat",String(o(y))),localStorage.setItem("ide.size.panel",String(o(p))),localStorage.setItem("ide.show.terminal",o(w)?"1":"0"),localStorage.setItem("ide.show.chat",o(l)?"1":"0"),localStorage.setItem("ide.show.sidebar",o(g)?"1":"0")}catch{}});let g=P(Me(a("sidebar",!0))),x=P(!1),w=P(Me(a("terminal",!1)));const S=8;let E=P(Me([0])),H=P(0);function A(){if(o(E).length>=S)return;let k=0;for(;o(E).includes(k);)k+=1;k>=S||(f(E,[...o(E),k].sort((z,L)=>z-L),!0),f(H,k,!0))}async function G(k){const z=o(E).indexOf(k),L=o(E).filter(ne=>ne!==k);f(E,L.length?L:[0],!0),o(H)===k&&f(H,o(E)[Math.min(z,o(E).length-1)],!0);try{await we.closeTerminal(_.connectionId,k)}catch(ne){_.setStatus(ne.message||"Could not close terminal")}}let T=P("");pt(()=>{const k=_.connectionId,z=_.connectionState;if(!k||z!=="connected")return;const L=`${k}|${z}`;o(T)!==L&&(f(T,L),f(E,[0],!0),f(H,0),we.listTerminals(k).then(ne=>{const pe=((ne==null?void 0:ne.terminals)||[]).filter(Ae=>Number.isInteger(Ae));pe.length&&(f(E,pe,!0),pe.includes(o(H))||f(H,pe[0],!0))}).catch(()=>{}))});let $=P(!1);pt(()=>{o(w)&&f($,!0)});let M=P(!1),q=P(!1),ee=P(""),O=P(Me({kind:"local",label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",private_key:"",workspace_root:"",max_file_bytes:1e6}));const j={idle:{icon:Hu,label:"Not connected"},connecting:{icon:Du,label:"Connecting…"},connected:{icon:Lu,label:"Connected"},reconnect:{icon:ii,label:"Reconnect required"},error:{icon:ii,label:"Error"}},J=ft(()=>j[_.connectionState].icon),ue=ft(()=>{var k;return((k=_.connection)==null?void 0:k.kind)==="local"}),ke=[{id:"files",icon:qu,label:"Explorer",keys:"Ctrl+Shift+E"},{id:"search",icon:Io,label:"Search",keys:"Ctrl+Shift+F"},{id:"git",icon:po,label:"Source Control",keys:"Ctrl+Shift+G"},{id:"remote",icon:td,label:"Remote Explorer",keys:""}];qr(async()=>{await _.loadConnections(),_.connectionId&&await _.refreshStatus()});function Ue(k){o(i)===k&&o(g)?f(g,!1):(f(i,k,!0),f(g,!0))}async function be(k){_.connectionId=k.currentTarget.value,_.resetWorkspaceView(),await _.refreshStatus()}async function Ze(k){f(q,!1);try{const z=k.split("/").filter(Boolean).pop()||k,L=_.connection;if(L&&L.kind!=="local"){await we.setWorkspaceRoot(L.id,k,z),await _.loadConnections(),_.resetWorkspaceView(),await _.refreshFiles("."),_.setStatus(`Opened ${k} on ${L.username}@${L.host}`),f(i,"files"),f(g,!0);return}if(L&&L.kind==="local"){await we.setWorkspaceRoot(L.id,k,z),await _.loadConnections(),_.resetWorkspaceView(),await _.refreshFiles("."),_.setStatus(`Opened ${k}`),f(i,"files"),f(g,!0);return}const ne=await we.createConnection({kind:"local",label:z,workspace_root:k,max_file_bytes:1e6});await _.loadConnections(),_.connectionId=ne.connection.id,_.resetWorkspaceView(),await _.connect(""),f(i,"files"),f(g,!0)}catch(z){_.setStatus(z.message||"Could not open folder")}}async function ae(k){k.preventDefault();try{const z=await we.createConnection({...o(O),port:Number(o(O).port)});f(M,!1),f(O,{...o(O),label:"",host:"",username:"",password:"",private_key:""},!0),await _.loadConnections(),_.connectionId=z.connection.id,await _.refreshStatus()}catch(z){_.setStatus(z.message||"Could not create connection")}}async function de(){const k=_.connection;if(!k)return;const z=k.kind==="local"?"workspace":"connection";if(confirm(`Remove ${z} "${k.label}"? Saved tabs are cleared; files are untouched.`))try{await we.deleteConnection(k.id),_.connectionId="",_.resetWorkspaceView(),await _.loadConnections()}catch(L){_.setStatus(L.message||"Could not delete")}}async function R(){try{const k=await we.focusTerminal(_.connectionId);_.setStatus(`Focused ${k.window_name}`,"tmux window selected")}catch(k){_.setStatus(k.message||"Could not focus terminal")}}function oe(k){var pe,Ae,$e,Te;const z=k.ctrlKey||k.metaKey,L=k.key.toLowerCase(),ne=((Ae=(pe=k.target)==null?void 0:pe.matches)==null?void 0:Ae.call(pe,"input, textarea, select"))&&!((Te=($e=k.target).closest)!=null&&Te.call($e,".monaco-editor"));z&&L==="s"?(k.preventDefault(),_.saveActive()):z&&L==="p"&&!ne?(k.preventDefault(),_.connectionId&&f(x,!0)):z&&k.shiftKey&&L==="o"?(k.preventDefault(),f(q,!0)):z&&k.shiftKey&&["e","f","g"].includes(L)?(k.preventDefault(),f(i,{e:"files",f:"search",g:"git"}[L],!0),f(g,!0)):z&&L==="b"&&!ne?(k.preventDefault(),f(g,!o(g))):z&&L==="`"?(k.preventDefault(),_.connectionState==="connected"&&f(w,!o(w))):k.key==="Escape"&&o(x)&&(k.preventDefault(),f(x,!1))}var Ee=uv();dr("keydown",_s,oe);var Je=b(Ee),it=b(Je);li(it,{size:15,class:"shrink-0 text-vs-blue"});var Ht=h(it,2),jt=h(Ht,2),Nt=h(jt,2);let Tn;var Gr=b(Nt);di(Gr,{size:13});var dn=h(Nt,2),jn=X(dn,!0),fr=h(dn,2),Bn=b(fr);Qo(Bn,()=>o(J),(k,z)=>{z(k,{size:12})});var Yr=h(Bn),Vn=h(Je,2),Nn=b(Vn),Xt=b(Nn);Ye(Xt,17,()=>ke,k=>k.id,(k,z)=>{var L=jf(),ne=b(L);{var pe=Ne=>{var ye=Ff();m(Ne,ye)};D(ne,Ne=>{o(i)===o(z).id&&o(g)&&Ne(pe)})}var Ae=h(ne,2);Qo(Ae,()=>o(z).icon,(Ne,ye)=>{ye(Ne,{size:24,strokeWidth:1.4})});var $e=h(Ae,2);{var Te=Ne=>{var ye=Hf(),je=X(ye,!0);Y(()=>W(je,_.gitDirtyCount)),m(Ne,ye)};D($e,Ne=>{o(z).id==="git"&&_.gitDirtyCount&&Ne(Te)})}Y(()=>{vt(L,1,`relative flex h-12 w-12 items-center justify-center ${o(i)===o(z).id&&o(g)?"text-vs-bright":"text-vs-muted hover:text-vs-fg"}`),_e(L,"title",o(z).keys?`${o(z).label} (${o(z).keys})`:o(z).label),_e(L,"aria-label",o(z).label)}),I("click",L,()=>Ue(o(z).id)),m(k,L)});var vr=h(Xt,2),zn=b(vr),Kn=b(zn);Fu(Kn,{size:24,strokeWidth:1.4});var Un=h(zn,2),hr=b(Un);rd(hr,{size:24,strokeWidth:1.4});var pr=h(Nn,2);{var _r=k=>{var z=Qf(),L=V(z),ne=b(L);{var pe=ye=>{hd(ye,{})},Ae=ye=>{Nf(ye,{})},$e=ye=>{Id(ye,{})},Te=ye=>{var je=Zf(),kt=h(V(je),2),mt=b(kt),hn=b(mt);hn.value=hn.__value="";var Mn=h(hn);Ye(Mn,17,()=>_.connections,Be=>Be.id,(Be,De)=>{var We=Bf(),mn=X(We),Zt={};Y(()=>{W(mn,`${o(De).kind==="local"?"🖿 ":"⇅ "}${o(De).label??""}`),Zt!==(Zt=o(De).id)&&(We.value=(We.__value=Zt)??"")}),m(Be,We)});var Bt;ps(mt);var qn=h(mt,2),pn=b(qn),_n=b(pn);Ya(_n,{size:13});var An=h(pn,2),Qr=b(An);xa(Qr,{size:13});var Ma=h(An,2);{var Aa=Be=>{var De=Vf(),We=b(De);fi(We,{size:13}),I("click",De,de),m(Be,De)};D(Ma,Be=>{_.connection&&Be(Aa)})}var zt=h(qn,2);{var $t=Be=>{var De=Wf(),We=V(De);{var mn=Mt=>{var Jn=Kf();st(Jn,()=>o(ee),Ia=>f(ee,Ia)),m(Mt,Jn)};D(We,Mt=>{!o(ue)&&!_.connection.has_password&&Mt(mn)})}var Zt=h(We,2),Qs=X(Zt,!0),ea=h(Zt,2);{var Pa=Mt=>{var Jn=Uf();I("click",Jn,()=>_.needsHostKey=!0),m(Mt,Jn)};D(ea,Mt=>{o(ue)||Mt(Pa)})}Y(()=>W(Qs,o(ue)?"Open workspace":"Connect")),I("click",Zt,()=>_.connect(o(ee))),m(Be,De)};D(zt,Be=>{_.connection&&_.connectionState!=="connected"&&Be($t)})}var Gn=h(zt,2);{var gn=Be=>{var De=qf(),We=X(De,!0);Y(()=>W(We,_.connection.workspace_root)),m(Be,De)};D(Gn,Be=>{_.connection&&Be(gn)})}var wr=h(kt,2);{var Yn=Be=>{var De=Xf(),We=b(De),mn=b(We);mn.value=mn.__value="local";var Zt=h(mn);Zt.value=Zt.__value="ssh",ps(We);var Qs=h(We,2),ea=h(Qs,2);{var Pa=bn=>{var Oo=Jf(),Ro=V(Oo),Lo=h(Ro,2),Do=h(Lo,2),ta=h(Do,2),Oa=b(ta);Oa.value=Oa.__value="agent";var Ra=h(Oa);Ra.value=Ra.__value="key";var Fo=h(Ra);Fo.value=Fo.__value="password",ps(ta);var Ho=h(ta,2);{var Al=lt=>{var es=Gf(),na=V(es),Ol=h(na,2);st(na,()=>o(O).identity_file,La=>o(O).identity_file=La),st(Ol,()=>o(O).private_key,La=>o(O).private_key=La),m(lt,es)};D(Ho,lt=>{o(O).auth_mode==="key"&&lt(Al)})}var Pl=h(Ho,2);{var Il=lt=>{var es=Yf();st(es,()=>o(O).password,na=>o(O).password=na),m(lt,es)};D(Pl,lt=>{o(O).auth_mode==="password"&&lt(Il)})}st(Ro,()=>o(O).host,lt=>o(O).host=lt),st(Lo,()=>o(O).username,lt=>o(O).username=lt),st(Do,()=>o(O).port,lt=>o(O).port=lt),ho(ta,()=>o(O).auth_mode,lt=>o(O).auth_mode=lt),m(bn,Oo)};D(ea,bn=>{o(O).kind==="ssh"&&bn(Pa)})}var Mt=h(ea,2),Jn=h(Mt,2),Ia=h(b(Jn),2);Y(()=>{_e(Mt,"placeholder",o(O).kind==="local"?"/var/www/app":"Workspace root"),Mt.required=o(O).kind==="local"}),dr("submit",De,ae),ho(We,()=>o(O).kind,bn=>o(O).kind=bn),st(Qs,()=>o(O).label,bn=>o(O).label=bn),st(Mt,()=>o(O).workspace_root,bn=>o(O).workspace_root=bn),I("click",Ia,()=>f(M,!1)),m(Be,De)};D(wr,Be=>{o(M)&&Be(Yn)})}Y(()=>{Bt!==(Bt=_.connectionId)&&(mt.value=(mt.__value=Bt)??"",ms(mt,Bt))}),I("change",mt,be),I("click",pn,()=>f(q,!0)),I("click",An,()=>f(M,!o(M))),m(ye,je)};D(ne,ye=>{o(i)==="files"?ye(pe):o(i)==="search"?ye(Ae,1):o(i)==="git"?ye($e,2):ye(Te,-1)})}var Ne=h(L,2);Xa(Ne,{side:"right",min:170,max:620,onreset:()=>f(v,c.sidebar,!0),get size(){return o(v)},set size(ye){f(v,ye,!0)}}),Y(()=>Er(L,`width: ${o(v)??""}px`)),m(k,z)};D(pr,k=>{o(g)&&k(_r)})}var fn=h(pr,2),gr=b(fn);{var mr=k=>{var z=ev(),L=b(z);li(L,{size:64,strokeWidth:1,class:"text-vs-line"});var ne=h(L,4),pe=b(ne),Ae=b(pe);Ya(Ae,{size:16});var $e=h(pe,2),Te=b($e);ui(Te,{size:16}),I("click",pe,()=>f(q,!0)),I("click",$e,()=>{f(i,"remote"),f(g,!0),f(M,!0)}),m(k,z)},Jr=k=>{var z=av(),L=V(z);Ud(L,{});var ne=h(L,2),pe=b(ne);Hd(pe,{});var Ae=h(ne,2);{var $e=Te=>{var Ne=sv(),ye=V(Ne);{var je=zt=>{Xa(zt,{side:"top",min:120,max:640,onreset:()=>f(p,c.panel,!0),get size(){return o(p)},set size($t){f(p,$t,!0)}})};D(ye,zt=>{o(w)&&zt(je)})}var kt=h(ye,2),mt=b(kt),hn=b(mt);di(hn,{size:13,class:"mx-1 shrink-0"});var Mn=h(hn,2);Ye(Mn,20,()=>o(E),zt=>zt,(zt,$t)=>{var Gn=nv(),gn=b(Gn),wr=X(gn,!0),Yn=h(gn,2);{var Be=De=>{var We=tv(),mn=b(We);ya(mn,{size:11}),Y(()=>_e(We,"aria-label",`Close terminal ${$t+1}`)),I("click",We,()=>G($t)),m(De,We)};D(Yn,De=>{o(E).length>1&&De(Be)})}Y(()=>{var De;vt(Gn,1,`group flex shrink-0 items-center gap-1 rounded-sm px-2 py-0.5
                           ${$t===o(H)?"bg-vs-hover text-vs-fg":"text-vs-muted hover:text-vs-fg"}`),W(wr,$t===0?((De=_.connection)==null?void 0:De.label)||"Terminal":`Terminal ${$t+1}`)}),I("click",gn,()=>f(H,$t,!0)),m(zt,Gn)});var Bt=h(Mn,2),qn=b(Bt);xa(qn,{size:14});var pn=h(Bt,2),_n=b(pn);kn(_n,{size:15});var An=h(pn,2),Qr=b(An);fi(Qr,{size:13});var Ma=h(mt,2),Aa=b(Ma);du(Aa,()=>_.connectionId,zt=>{var $t=Z(),Gn=V($t);Ye(Gn,16,()=>o(E),gn=>gn,(gn,wr)=>{var Yn=rv(),Be=b(Yn);gf(Be,{get rootPath(){return s()},get session(){return r()},get index(){return wr}}),Y(()=>_e(Yn,"hidden",wr!==o(H))),m(gn,Yn)}),m(zt,$t)}),Y(()=>{Er(kt,`height: ${o(p)??""}px`),_e(kt,"hidden",!o(w)),Bt.disabled=o(E).length>=S}),I("click",Bt,A),I("click",pn,()=>f(w,!1)),I("click",An,()=>G(o(H))),m(Te,Ne)};D(Ae,Te=>{o($)&&_.connectionState==="connected"&&Te($e)})}m(k,z)};D(gr,k=>{_.connectionId?k(Jr,-1):k(mr)})}var br=h(fn,2);{var Xr=k=>{var z=ov(),L=V(z);Xa(L,{side:"left",min:260,max:760,onreset:()=>f(y,c.chat,!0),get size(){return o(y)},set size(je){f(y,je,!0)}});var ne=h(L,2),pe=b(ne),Ae=b(pe);ci(Ae,{size:13});var $e=h(Ae,4),Te=b($e);ya(Te,{size:14});var Ne=h(pe,2),ye=b(Ne);cf(ye,{get sessions(){return n()},get session(){return r()},get rootPath(){return s()}}),Y(()=>Er(ne,`width: ${o(y)??""}px`)),I("click",$e,()=>f(l,!1)),m(k,z)};D(br,k=>{o(l)&&k(Xr)})}var xr=h(Vn,2),vn=b(xr);{var Zr=k=>{var z=pi(),L=b(z);{var ne=$e=>{Ya($e,{size:12})},pe=$e=>{ui($e,{size:12})};D(L,$e=>{o(ue)?$e(ne):$e(pe,-1)})}var Ae=h(L);Y(()=>{_e(z,"title",_.connection.workspace_root),W(Ae,` ${_.connection.label??""}`)}),m(k,z)};D(vn,k=>{_.connection&&k(Zr)})}var Wn=h(vn,2);{var yr=k=>{var z=pi(),L=b(z);po(L,{size:12});var ne=h(L);Y(()=>W(ne,` ${_.gitBranch??""}`)),m(k,z)};D(Wn,k=>{_.gitBranch&&k(yr)})}var C=h(Wn,2),F=X(C,!0),te=h(C,2),Se=b(te);{var Ce=k=>{var z=iv(),L=X(z);Y(()=>W(L,`${_.dirtyCount??""} unsaved`)),m(k,z)};D(Se,k=>{_.dirtyCount&&k(Ce)})}var Ie=h(Se,2),Le=X(Ie,!0),Ve=h(Ie,2);{var Fe=k=>{var z=lv(),L=V(z),ne=b(L);nd(ne,{size:12});var pe=h(L,2),Ae=b(pe);Ku(Ae,{size:12}),I("click",L,()=>f(w,!o(w))),I("click",pe,R),m(k,z)};D(Ve,k=>{_.connectionState==="connected"&&k(Fe)})}var B=h(Ve,2);{var ge=k=>{var z=cv(),L=b(z);ci(L,{size:12}),I("click",z,()=>f(l,!o(l))),m(k,z)};D(B,k=>{k(ge)})}var fe=h(xr,2);{var K=k=>{pf(k,{onclose:()=>f(x,!1)})};D(fe,k=>{o(x)&&k(K)})}var he=h(fe,2);{var He=k=>{kf(k,{onopen:Ze,onclose:()=>f(q,!1)})};D(he,k=>{o(q)&&k(He)})}var Oe=h(he,2);{var nt=k=>{Lf(k,{onclose:()=>_.needsHostKey=!1,ontrusted:async()=>{_.needsHostKey=!1,await _.connect(o(ee))}})};D(Oe,k=>{_.needsHostKey&&k(nt)})}Y(()=>{var k;jt.disabled=!_.connectionId,Tn=vt(Nt,1,"flex items-center gap-1 rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40",null,Tn,{"text-vs-bright":o(w)}),Nt.disabled=_.connectionState!=="connected",_e(Nt,"title",_.connectionState==="connected"?"Toggle terminal (Ctrl+`)":"Open a workspace to use the terminal"),_e(dn,"title",(k=_.connection)==null?void 0:k.workspace_root),W(jn,_.connection?`${_.connection.label} — Multibuilder IDE`:"Multibuilder IDE"),vt(fr,1,`flex items-center gap-1 ${_.connectionState==="connected"?"text-vs-green":_.connectionState==="connecting"?"text-vs-yellow":_.connectionState==="idle"?"text-vs-muted":"text-vs-red"}`),W(Yr,` ${j[_.connectionState].label??""}`),W(F,_.statusText),W(Le,_.detailText)}),I("click",Ht,()=>f(q,!0)),I("click",jt,()=>f(x,!0)),I("click",Nt,()=>f(w,!o(w))),I("click",zn,()=>_.setStatus("Signed in to the Multibuilder dashboard")),I("click",Un,()=>f(g,!o(g))),m(e,Ee),gt()}Ft(["click","change"]);function Ml(e,t){return iu(dv,{target:e,props:t})}function _i(){const e=document.getElementById("ide-root");if(!e||e.dataset.mounted)return;e.dataset.mounted="1";const t=window.__IDE_BOOTSTRAP__||{};Ml(e,{sessions:t.sessions||[],session:t.session||"",rootPath:t.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_i):_i();window.mountRemoteIde=Ml;export{fa as _};
