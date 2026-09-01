const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css","./ide3.css"])))=>i.map(i=>d[i]);
var ml=Object.defineProperty;var hi=e=>{throw TypeError(e)};var bl=(e,t,n)=>t in e?ml(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var tt=(e,t,n)=>bl(e,typeof t!="symbol"?t+"":t,n),lo=(e,t,n)=>t.has(e)||hi("Cannot "+n);var u=(e,t,n)=>(lo(e,t,"read from private field"),n?n.call(e):t.get(e)),V=(e,t,n)=>t.has(e)?hi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),Z=(e,t,n,r)=>(lo(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),ce=(e,t,n)=>(lo(e,t,"access private method"),n);var Gs=Array.isArray,yl=Array.prototype.indexOf,Rs=Array.prototype.includes,Ys=Array.from,Gi=Object.defineProperty,xn=Object.getOwnPropertyDescriptor,Yi=Object.getOwnPropertyDescriptors,xl=Object.prototype,wl=Array.prototype,Vo=Object.getPrototypeOf,pi=Object.isExtensible;function Pr(e){return typeof e=="function"}const $l=()=>{};function kl(e){return e()}function ko(e){for(var t=0;t<e.length;t++)e[t]()}function Ji(){var e,t,n=new Promise((r,s)=>{e=r,t=s});return{promise:n,resolve:e,reject:t}}function Sl(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const De=2,ur=4,ms=8,Ho=1<<24,Rt=16,Ct=32,cn=64,So=128,Bo=256,Et=512,Ae=1024,ze=2048,Ft=4096,st=8192,vt=16384,mr=32768,Ds=1<<25,$n=65536,Fs=1<<17,El=1<<18,br=1<<19,Xi=1<<20,Yt=1<<25,jn=65536,Ls=1<<21,er=1<<22,wn=1<<23,Xt=Symbol("$state"),Zi=Symbol("component"),Qi=Symbol("legacy props"),Cl=Symbol(""),Ms=Symbol("attributes"),Eo=Symbol("class"),Co=Symbol("style"),Or=Symbol("text"),Ps=Symbol("form reset"),bs=new class extends Error{constructor(){super(...arguments);tt(this,"name","StaleReactionError");tt(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var Wi;const Ko=!!((Wi=globalThis.document)!=null&&Wi.contentType)&&globalThis.document.contentType.includes("xml"),Tl=1,Nl=2,ea=4,Ml=8,Pl=16,Al=1,zl=2,ta=4,Il=8,Ol=16,Rl=1,Dl=2,Ne=Symbol("uninitialized"),na="http://www.w3.org/1999/xhtml",Fl="http://www.w3.org/2000/svg",Ll="@attach";function jl(){console.warn("https://svelte.dev/e/derived_inert")}function Vl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Hl(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function ra(e){return e===this.v}function Bl(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function sa(e){return!Bl(e,this.v)}function oa(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Kl(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Wl(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Ul(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ql(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Gl(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Yl(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Jl(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Xl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Zl(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Ql(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ec(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let yr=!1;function tc(){yr=!0}let me=null;function dr(e){me=e}function ot(e,t=!1,n){me={p:me,i:!1,c:null,e:null,s:e,x:null,r:ie,l:yr&&!t?{s:null,u:null,$:[]}:null}}function it(e){var t=me,n=t.e;if(n!==null){t.e=null;for(var r of n)Ca(r)}return t.i=!0,me=t.p,Wo(e)}function Wo(e={}){return Gi(e,Zi,{value:!0}),e}function xr(){return!yr||me!==null&&me.l===null}let Mn=[];function ia(){var e=Mn;Mn=[],ko(e)}function Jt(e){if(Mn.length===0&&!Br){var t=Mn;queueMicrotask(()=>{t===Mn&&ia()})}Mn.push(e)}function nc(){for(;Mn.length>0;)ia()}const rc=-7169;function Se(e,t){e.f=e.f&rc|t}function Uo(e){(e.f&Et)!==0||e.deps===null?Se(e,Ae):Se(e,Ft)}function aa(e){if(e!==null)for(const t of e)(t.f&De)===0||(t.f&jn)===0||(t.f^=jn,aa(t.deps))}function la(e,t,n){(e.f&ze)!==0?t.add(e):(e.f&Ft)!==0&&n.add(e),aa(e.deps),Se(e,Ae)}let Ts=!1;function sc(e){var t=Ts;try{return Ts=!1,[e(),Ts]}finally{Ts=t}}function ca(e,t){if(t){const n=document.body;e.autofocus=!0,Jt(()=>{document.activeElement===n&&e.focus()})}}let _i=!1;function oc(){_i||(_i=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[Ps])==null||t.call(n)})},{capture:!0}))}function wr(e){var t=le,n=ie;Tt(null),Nt(null);try{return e()}finally{Tt(t),Nt(n)}}function qo(e,t,n,r=n){e.addEventListener(t,()=>wr(n));const s=e[Ps];s?e[Ps]=()=>{s(),r(!0)}:e[Ps]=()=>r(!0),oc()}function ua(e,t,n,r){const s=xr()?fr:Go;var o=e.filter(h=>!h.settled),i=t.map(s);if(n.length===0&&o.length===0){r(i);return}var a=ie,c=ic(),d=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(h=>h.promise)):null;function f(h){if((a.f&vt)===0){c();try{r([...i,...h])}catch(p){Gt(p,a)}js()}}var b=da();if(n.length===0){d.then(()=>f([])).finally(b);return}function v(){Promise.all(n.map(h=>ac(h))).then(f).catch(h=>Gt(h,a)).finally(b)}d?d.then(()=>{c(),v(),js()}):v()}function ic(){var e=ie,t=le,n=me,r=W;return function(o=!0){Nt(e),Tt(t),dr(n),o&&(e.f&vt)===0&&(r==null||r.activate(),r==null||r.apply())}}function js(e=!0){Nt(null),Tt(null),dr(null),e&&(W==null||W.deactivate())}function da(){var e=ie,t=e.b,n=W,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function fr(e){var t=De|ze;return ie!==null&&(ie.f|=br),{ctx:me,deps:null,effects:null,equals:ra,f:t,fn:e,reactions:null,rv:0,v:Ne,wv:0,parent:ie,ac:null}}const Rr=Symbol("obsolete");function ac(e,t,n){let r=ie;r===null&&Kl();var s=void 0,o=un(Ne),i=!le,a=new Set;return wc(()=>{var h,p;var c=ie,d=Ji();s=d.promise;try{Promise.resolve(e()).then(d.resolve,w=>{w!==bs&&d.reject(w)}).finally(js)}catch(w){d.reject(w),js()}var f=W;if(i){if((c.f&mr)!==0)var b=da();if((h=r.b)!=null&&h.is_rendered())(p=f.async_deriveds.get(c))==null||p.reject(Rr);else for(const w of a.values())w.reject(Rr);a.add(d),f.async_deriveds.set(c,d)}const v=(w,S=void 0)=>{b==null||b(),a.delete(d),S!==Rr&&(f.activate(),S?(o.f|=wn,vr(o,S)):((o.f&wn)!==0&&(o.f^=wn),vr(o,w)),f.deactivate())};d.promise.then(v,w=>v(null,w||"unknown"))}),Js(()=>{for(const c of a)c.reject(Rr)}),new Promise(c=>{function d(f){function b(){f===s?c(o):d(s)}f.then(b,b)}d(s)})}function dt(e){const t=fr(e);return za(t),t}function Go(e){const t=fr(e);return t.equals=sa,t}function lc(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)Ue(t[n])}}function Yo(e){var t,n=ie,r=e.parent;if(!dn&&r!==null&&e.v!==Ne&&(r.f&(vt|st))!==0)return jl(),e.v;Nt(r);try{e.f&=~jn,lc(e),t=Da(e)}finally{Nt(n)}return t}function fa(e){var t=Yo(e);if(!e.equals(t)&&(e.wv=Oa(),(!(W!=null&&W.is_fork)||e.deps===null)&&(W!==null?(W.capture(e,t,!0),Hr==null||Hr.capture(e,t,!0)):e.v=t,e.deps===null))){Se(e,Ae);return}dn||(Ke!==null?(Qo()||W!=null&&W.is_fork)&&Ke.set(e,t):Uo(e))}function cc(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&wr(()=>{n.ac.abort(bs),n.ac=null}),n.fn!==null&&(n.teardown=$l),qr(n,0),ei(n))}function va(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&hr(t)}let co=null,Xn=null,W=null,Hr=null,Ke=null,To=null,Br=!1,uo=!1,Qn=null,As=null;var gi=0;let uc=1;var rr,bn,zn,sr,or,ir,on,ar,ct,Yr,an,It,Wt,lr,In,fe,No,Dr,Mo,ha,pa,Zn,dc,Fr;const Ws=class Ws{constructor(){V(this,fe);tt(this,"id",uc++);V(this,rr,!1);tt(this,"linked",!0);V(this,bn,null);V(this,zn,null);tt(this,"async_deriveds",new Map);tt(this,"current",new Map);tt(this,"previous",new Map);V(this,sr,new Set);V(this,or,new Set);V(this,ir,0);V(this,on,new Map);V(this,ar,null);V(this,ct,[]);V(this,Yr,[]);V(this,an,new Set);V(this,It,new Set);V(this,Wt,new Map);V(this,lr,new Set);tt(this,"is_fork",!1);V(this,In,!1);Xn===null?co=Xn=this:(Z(Xn,zn,this),Z(this,bn,Xn)),Xn=this}skip_effect(t){u(this,Wt).has(t)||u(this,Wt).set(t,{d:[],m:[]}),u(this,lr).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=u(this,Wt).get(t);if(r){u(this,Wt).delete(t);for(var s of r.d)Se(s,ze),n(s);for(s of r.m)Se(s,Ft),n(s)}u(this,lr).add(t)}capture(t,n,r=!1){t.v!==Ne&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&wn)===0&&(this.current.set(t,[n,r]),Ke==null||Ke.set(t,n)),this.is_fork||(t.v=n)}activate(){W=this}deactivate(){W=null,Ke=null}flush(){try{uo=!0,W=this,ce(this,fe,Dr).call(this)}finally{gi=0,To=null,Qn=null,As=null,uo=!1,W=null,Ke=null,Zt.clear()}}discard(){var t;for(const n of u(this,or))n(this);u(this,or).clear();for(const n of this.async_deriveds.values())n.reject(Rr);ce(this,fe,Fr).call(this),(t=u(this,ar))==null||t.resolve()}register_created_effect(t){u(this,Yr).push(t)}increment(t,n){if(Z(this,ir,u(this,ir)+1),t){let r=u(this,on).get(n)??0;u(this,on).set(n,r+1)}}decrement(t,n){if(Z(this,ir,u(this,ir)-1),t){let r=u(this,on).get(n)??0;r===1?u(this,on).delete(n):u(this,on).set(n,r-1)}u(this,In)||(Z(this,In,!0),Jt(()=>{Z(this,In,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)u(this,an).add(r);for(const r of n)u(this,It).add(r);t.clear(),n.clear()}oncommit(t){u(this,sr).add(t)}ondiscard(t){u(this,or).add(t)}settled(){return(u(this,ar)??Z(this,ar,Ji())).promise}static ensure(){if(W===null){const t=W=new Ws;!uo&&!Br&&Jt(()=>{u(t,rr)||t.flush()})}return W}apply(){{Ke=null;return}}schedule(t){var s;if(To=t,(s=t.b)!=null&&s.is_pending&&(t.f&(ur|ms|Ho))!==0&&(t.f&mr)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Qn!==null&&n===ie&&(le===null||(le.f&De)===0))return;if((r&(cn|Ct))!==0){if((r&Ae)===0)return;n.f^=Ae}}u(this,ct).push(n)}};rr=new WeakMap,bn=new WeakMap,zn=new WeakMap,sr=new WeakMap,or=new WeakMap,ir=new WeakMap,on=new WeakMap,ar=new WeakMap,ct=new WeakMap,Yr=new WeakMap,an=new WeakMap,It=new WeakMap,Wt=new WeakMap,lr=new WeakMap,In=new WeakMap,fe=new WeakSet,No=function(){if(this.is_fork)return!0;for(const r of u(this,on).keys()){for(var t=r,n=!1;t.parent!==null;){if(u(this,Wt).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},Dr=function(){var c,d,f,b;Z(this,rr,!0),gi++>1e3&&(ce(this,fe,Fr).call(this),vc());for(const v of u(this,an))u(this,It).delete(v),Se(v,ze),this.schedule(v);for(const v of u(this,It))Se(v,Ft),this.schedule(v);const t=u(this,ct);Z(this,ct,[]),this.apply();var n=Qn=[],r=[],s=As=[];for(const v of t)try{ce(this,fe,Mo).call(this,v,n,r)}catch(h){throw ma(v),ce(this,fe,No).call(this)||this.discard(),h}if(W=null,s.length>0){var o=Ws.ensure();for(const v of s)o.schedule(v)}if(Qn=null,As=null,ce(this,fe,No).call(this)){ce(this,fe,Zn).call(this,r),ce(this,fe,Zn).call(this,n);for(const[v,h]of u(this,Wt))ga(v,h);s.length>0&&ce(c=W,fe,Dr).call(c);return}const i=ce(this,fe,ha).call(this);if(i){ce(this,fe,Zn).call(this,r),ce(this,fe,Zn).call(this,n),ce(d=i,fe,pa).call(d,this);return}u(this,an).clear(),u(this,It).clear();for(const v of u(this,sr))v(this);u(this,sr).clear(),Hr=this,mi(r),mi(n),Hr=null,(f=u(this,ar))==null||f.resolve();var a=W;if(u(this,ir)===0&&(u(this,ct).length===0||a!==null)&&ce(this,fe,Fr).call(this),u(this,ct).length>0)if(a!==null){const v=a;u(v,ct).push(...u(this,ct).filter(h=>!u(v,ct).includes(h)))}else a=this;a!==null&&(Zt.clear(),ce(b=a,fe,Dr).call(b))},Mo=function(t,n,r){t.f^=Ae;for(var s=t.first;s!==null;){var o=s.f,i=(o&(Ct|cn))!==0,a=i&&(o&Ae)!==0,c=a||(o&st)!==0||u(this,Wt).has(s);if(!c&&s.fn!==null){i?s.f^=Ae:(o&ur)!==0?n.push(s):xs(s)&&((o&Rt)!==0&&u(this,It).add(s),hr(s));var d=s.first;if(d!==null){s=d;continue}}for(;s!==null;){var f=s.next;if(f!==null){s=f;break}s=s.parent}}},ha=function(){for(var t=u(this,bn);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=u(t,bn)}return null},pa=function(t){var r;for(const[s,o]of t.current)!this.previous.has(s)&&t.previous.has(s)&&this.previous.set(s,t.previous.get(s)),this.current.set(s,o);for(const[s,o]of t.async_deriveds){const i=this.async_deriveds.get(s);i&&o.promise.then(i.resolve).catch(i.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,an),u(t,It));const n=s=>{var o=s.reactions;if(o!==null&&!((s.f&De)!==0&&(s.f&(ze|Ft))===0))for(const c of o){var i=c.f;if((i&De)!==0)n(c);else{var a=c;i&(er|Rt)&&!this.async_deriveds.has(a)&&(u(this,It).delete(a),Se(a,ze),this.schedule(a))}}};for(const s of this.current.keys())n(s);this.oncommit(()=>t.discard()),ce(r=t,fe,Fr).call(r),W=this,ce(this,fe,Dr).call(this)},Zn=function(t){for(var n=0;n<t.length;n+=1)la(t[n],u(this,an),u(this,It))},dc=function(){var b;for(let v=co;v!==null;v=u(v,zn)){var t=v.id<this.id,n=[];for(const[h,[p,w]]of this.current){if(v.current.has(h)){var r=v.current.get(h)[0];if(t&&p!==r)v.current.set(h,[p,w]);else continue}n.push(h)}if(t)for(const[h,p]of this.async_deriveds){const w=v.async_deriveds.get(h);w&&p.promise.then(w.resolve).catch(w.reject)}var s=[...v.current.keys()].filter(h=>!v.current.get(h)[1]);if(!(!u(v,rr)||s.length===0)){var o=s.filter(h=>!this.current.has(h));if(o.length===0)t&&v.discard();else if(n.length>0){if(t)for(const h of u(this,lr))v.unskip_effect(h,p=>{var w;(p.f&(Rt|er))!==0?v.schedule(p):ce(w=v,fe,Zn).call(w,[p])});v.activate();var i=new Set,a=new Map;for(var c of n)_a(c,o,i,a);a=new Map;var d=[...v.current].filter(([h,p])=>{const w=this.current.get(h);return w?w[0]!==p[0]||w[1]!==p[1]:!0}).map(([h])=>h);if(d.length>0)for(const h of u(this,Yr))(h.f&(vt|st|Fs))===0&&Jo(h,d,a)&&((h.f&(er|Rt))!==0?(Se(h,ze),v.schedule(h)):u(v,an).add(h));if(u(v,ct).length>0&&!u(v,In)){v.apply();for(var f of u(v,ct))ce(b=v,fe,Mo).call(b,f,[],[]);Z(v,ct,[])}v.deactivate()}}}},Fr=function(){if(this.linked){var t=u(this,bn),n=u(this,zn);t===null?co=n:Z(t,zn,n),n===null?Xn=t:Z(n,bn,t),this.linked=!1}};let Vn=Ws;function fc(e){var t=Br;Br=!0;try{for(var n;;){if(nc(),W===null)return n;W.flush()}}finally{Br=t}}function vc(){try{Yl()}catch(e){Gt(e,To)}}let zt=null;function mi(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(vt|st))===0&&xs(r)&&(zt=new Set,hr(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Ma(r),(zt==null?void 0:zt.size)>0)){Zt.clear();for(const s of zt){if((s.f&(vt|st))!==0)continue;const o=[s];let i=s.parent;for(;i!==null;)zt.has(i)&&(zt.delete(i),o.push(i)),i=i.parent;for(let a=o.length-1;a>=0;a--){const c=o[a];(c.f&(vt|st))===0&&hr(c)}}zt.clear()}}zt=null}}function _a(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const s of e.reactions){const o=s.f;(o&De)!==0?_a(s,t,n,r):(o&(er|Rt))!==0&&(o&ze)===0&&Jo(s,t,r)&&(Se(s,ze),Xo(s))}}function Jo(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const s of e.deps){if(Rs.call(t,s))return!0;if((s.f&De)!==0&&Jo(s,t,n))return n.set(s,!0),!0}return n.set(e,!1),!1}function Xo(e){W.schedule(e)}function ga(e,t){if(!((e.f&Ct)!==0&&(e.f&Ae)!==0)){(e.f&ze)!==0?t.d.push(e):(e.f&Ft)!==0&&t.m.push(e),Se(e,Ae);for(var n=e.first;n!==null;)ga(n,t),n=n.next}}function ma(e){Se(e,Ae);for(var t=e.first;t!==null;)ma(t),t=t.next}let Vs=new Set;const Zt=new Map;let ba=!1;function un(e,t){var n={f:0,v:e,reactions:null,equals:ra,rv:0,wv:0};return n}function O(e,t){const n=un(e);return za(n),n}function hc(e,t=!1,n=!0){var s;const r=un(e);return t||(r.equals=sa),yr&&n&&me!==null&&me.l!==null&&((s=me.l).s??(s.s=[])).push(r),r}function g(e,t,n=!1){le!==null&&(!Dt||(le.f&Fs)!==0)&&xr()&&(le.f&(De|Rt|er|Fs))!==0&&(en===null||!en.has(e))&&Ql();let r=n?_e(t):t;return vr(e,r,As)}function vr(e,t,n=null){if(!e.equals(t)){dn?Zt.set(e,t):Zt.has(e)||Zt.set(e,e.v);var r=Vn.ensure();if(r.capture(e,t),(e.f&De)!==0){const s=e;(e.f&ze)!==0&&Yo(s),Ke===null&&Uo(s)}e.wv=Oa(),ya(e,ze,n),xr()&&ie!==null&&(ie.f&Ae)!==0&&(ie.f&(Ct|cn))===0&&($t===null?Sc([e]):$t.push(e)),!r.is_fork&&Vs.size>0&&!ba&&pc()}return t}function pc(){ba=!1;for(const e of Vs){(e.f&Ae)!==0&&Se(e,Ft);let t;try{t=xs(e)}catch{t=!0}t&&hr(e)}Vs.clear()}function bi(e,t=1){var n=l(e),r=t===1?n++:n--;return g(e,n),r}function Kr(e){g(e,e.v+1)}function ya(e,t,n){var r=e.reactions;if(r!==null)for(var s=xr(),o=r.length,i=0;i<o;i++){var a=r[i],c=a.f;if(!(!s&&a===ie)){var d=(c&ze)===0;if(d&&Se(a,t),(c&Fs)!==0)Vs.add(a);else if((c&De)!==0){var f=a;Ke==null||Ke.delete(f),(c&jn)===0&&(c&Et&&(ie===null||(ie.f&Ls)===0)&&(a.f|=jn),ya(f,Ft,n))}else if(d){var b=a;(c&Rt)!==0&&zt!==null&&zt.add(b),n!==null?n.push(b):Xo(b)}}}}function _e(e){if(typeof e!="object"||e===null||Xt in e||Zi in e)return e;const t=Vo(e);if(t!==xl&&t!==wl)return e;var n=new Map,r=Gs(e),s=O(0),o=Ln,i=a=>{if(Ln===o)return a();var c=le,d=Ln;Tt(null),wi(o);var f=a();return Tt(c),wi(d),f};return r&&n.set("length",O(e.length)),new Proxy(e,{defineProperty(a,c,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&Xl();var f=n.get(c);return f===void 0?i(()=>{var b=O(d.value);return n.set(c,b),b}):g(f,d.value,!0),!0},deleteProperty(a,c){var d=n.get(c);if(d===void 0){if(c in a){const f=i(()=>O(Ne));n.set(c,f),Kr(s)}}else g(d,Ne),Kr(s);return!0},get(a,c,d){var h;if(c===Xt)return e;var f=n.get(c),b=c in a;if(f===void 0&&(!b||(h=xn(a,c))!=null&&h.writable)&&(f=i(()=>{var p=_e(b?a[c]:Ne),w=O(p);return w}),n.set(c,f)),f!==void 0){var v=l(f);return v===Ne?void 0:v}return Reflect.get(a,c,d)},getOwnPropertyDescriptor(a,c){var d=Reflect.getOwnPropertyDescriptor(a,c);if(d&&"value"in d){var f=n.get(c);f&&(d.value=l(f))}else if(d===void 0){var b=n.get(c),v=b==null?void 0:b.v;if(b!==void 0&&v!==Ne)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return d},has(a,c){var v;if(c===Xt)return!0;var d=n.get(c),f=d!==void 0&&d.v!==Ne||Reflect.has(a,c);if(d!==void 0||ie!==null&&(!f||(v=xn(a,c))!=null&&v.writable)){d===void 0&&(d=i(()=>{var h=f?_e(a[c]):Ne,p=O(h);return p}),n.set(c,d));var b=l(d);if(b===Ne)return!1}return f},set(a,c,d,f){var M;var b=n.get(c),v=c in a;if(r&&c==="length")for(var h=d;h<b.v;h+=1){var p=n.get(h+"");p!==void 0?g(p,Ne):h in a&&(p=i(()=>O(Ne)),n.set(h+"",p))}if(b===void 0)(!v||(M=xn(a,c))!=null&&M.writable)&&(b=i(()=>O(void 0)),g(b,_e(d)),n.set(c,b));else{v=b.v!==Ne;var w=i(()=>_e(d));g(b,w)}var S=Reflect.getOwnPropertyDescriptor(a,c);if(S!=null&&S.set&&S.set.call(f,d),!v){if(r&&typeof c=="string"){var C=n.get("length"),I=Number(c);Number.isInteger(I)&&I>=C.v&&g(C,I+1)}Kr(s)}return!0},ownKeys(a){l(s);var c=Reflect.ownKeys(a).filter(b=>{var v=n.get(b);return v===void 0||v.v!==Ne});for(var[d,f]of n)f.v!==Ne&&!(d in a)&&c.push(d);return c},setPrototypeOf(){Zl()}})}function yi(e){try{if(e!==null&&typeof e=="object"&&Xt in e)return e[Xt]}catch{}return e}function xa(e,t){return Object.is(yi(e),yi(t))}var Hs,wa,$a,ka;function _c(){if(Hs===void 0){Hs=window,wa=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;$a=xn(t,"firstChild").get,ka=xn(t,"nextSibling").get,pi(e)&&(e[Eo]=void 0,e[Ms]=null,e[Co]=void 0,e.__e=void 0),pi(n)&&(n[Or]=void 0)}}function Qt(e=""){return document.createTextNode(e)}function Hn(e){return $a.call(e)}function ys(e){return ka.call(e)}function $(e,t){return Hn(e)}function D(e,t=!1){{var n=Hn(e);return n instanceof Comment&&n.data===""?ys(n):n}}function ae(e,t=!1){return Hn(e)}function m(e,t=1,n=!1){let r=e;for(;t--;)r=ys(r);return r}function gc(e){e.textContent=""}function Sa(){return!1}function Zo(e,t,n){return t==null||t===na?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function mc(e){var t=ie;if(t===null)return le.f|=wn,e;if((t.f&mr)===0&&(t.f&ur)===0)throw e;Gt(e,t)}function Gt(e,t){if(!(t!==null&&(t.f&vt)!==0)){for(;t!==null;){if((t.f&So)!==0&&(t.f&(vt|Ds))===0){if((t.f&mr)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function Ea(e){ie===null&&(le===null&&Gl(),ql()),dn&&Ul()}function bc(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function jt(e,t){var n=ie;n!==null&&(n.f&st)!==0&&(e|=st);var r={ctx:me,deps:null,nodes:null,f:e|ze|Et,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};W==null||W.register_created_effect(r);var s=r;if((e&ur)!==0)Qn!==null?Qn.push(r):Vn.ensure().schedule(r);else if(t!==null){try{hr(r)}catch(i){throw Ue(r),i}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&br)===0&&(s=s.first,(e&Rt)!==0&&(e&$n)!==0&&s!==null&&(s.f|=$n))}if(s!==null&&(s.parent=n,n!==null&&bc(s,n),le!==null&&(le.f&De)!==0&&(e&cn)===0)){var o=le;(o.effects??(o.effects=[])).push(s)}return r}function Qo(){return le!==null&&!Dt}function Js(e){const t=jt(ms,null);return Se(t,Ae),t.teardown=e,t}function tn(e){Ea();var t=ie.f,n=!le&&(t&Ct)!==0&&me!==null&&!me.i;if(n){var r=me;(r.e??(r.e=[])).push(e)}else return Ca(e)}function Ca(e){return jt(ur|Xi,e)}function yc(e){return Ea(),jt(ms|Xi,e)}function xc(e){Vn.ensure();const t=jt(cn|br,e);return(n={})=>new Promise(r=>{n.outro?Fn(t,()=>{Ue(t),r(void 0)}):(Ue(t),r(void 0))})}function Xs(e){return jt(ur,e)}function wc(e){return jt(er|br,e)}function Zs(e,t=0){return jt(ms|t,e)}function G(e,t=[],n=[],r=[]){ua(r,t,n,s=>{jt(ms,()=>{e(...s.map(l))})})}function $r(e,t=0){var n=jt(Rt|t,e);return n}function Ta(e,t=0){var n=jt(Ho|t,e);return n}function ut(e){return jt(Ct|br,e)}function Na(e){var t=e.teardown;if(t!==null){const n=dn,r=le;xi(!0),Tt(null);try{t.call(null)}catch(s){Gt(s,e.parent)}finally{xi(n),Tt(r)}}}function ei(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const s=n.ac;s!==null&&wr(()=>{s.abort(bs)});var r=n.next;(n.f&cn)!==0?n.parent=null:Ue(n,t),n=r}}function $c(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Ct)===0&&Ue(t),t=n}}function Ue(e,t=!0){var n=!1;(t||(e.f&El)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(kc(e.nodes.start,e.nodes.end),n=!0),e.f|=Ds,ei(e,t&&!n),qr(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const o of r)o.stop();Na(e),e.f^=Ds,e.f|=vt;var s=e.parent;s!==null&&s.first!==null&&Ma(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function kc(e,t){for(;e!==null;){var n=e===t?null:ys(e);e.remove(),e=n}}function Ma(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Fn(e,t,n=!0){var r=[];e.f|=Bo,Pa(e,r,!0);var s=()=>{n&&Ue(e),t&&t()},o=r.length;if(o>0){var i=()=>--o||s();for(var a of r)a.out(i)}else s()}function Pa(e,t,n){if((e.f&st)===0){e.f^=st;var r=e.nodes&&e.nodes.t;if(r!==null)for(const a of r)(a.is_global||n)&&t.push(a);for(var s=e.first;s!==null;){var o=s.next;if((s.f&cn)===0){var i=(s.f&$n)!==0||(s.f&Ct)!==0&&(e.f&Rt)!==0;Pa(s,t,i?n:!1)}s=o}}}function Bs(e){e.f&=~Bo,Aa(e,!0)}function Aa(e,t){if((e.f&Bo)===0&&(e.f&st)!==0){e.f^=st,(e.f&Ae)===0&&(Se(e,ze),Vn.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,s=(n.f&$n)!==0||(n.f&Ct)!==0;Aa(n,s?t:!1),n=r}var o=e.nodes&&e.nodes.t;if(o!==null)for(const i of o)(i.is_global||t)&&i.in()}}function ti(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var s=n===r?null:ys(n);t.append(n),n=s}}let zs=!1,dn=!1;function xi(e){dn=e}let le=null,Dt=!1;function Tt(e){le=e}let ie=null;function Nt(e){ie=e}let en=null;function za(e){le!==null&&(en??(en=new Set)).add(e)}let ft=null,bt=0,$t=null;function Sc(e){$t=e}let Ia=1,Pn=0,Ln=Pn;function wi(e){Ln=e}function Oa(){return++Ia}function xs(e){var t=e.f;if((t&ze)!==0)return!0;if(t&De&&(e.f&=~jn),(t&Ft)!==0){for(var n=e.deps,r=n.length,s=0;s<r;s++){var o=n[s];if(xs(o)&&fa(o),o.wv>e.wv)return!0}(t&Et)!==0&&Ke===null&&Se(e,Ae)}return!1}function Ra(e,t,n=!0){var r=e.reactions;if(r!==null&&!(en!==null&&en.has(e)))for(var s=0;s<r.length;s++){var o=r[s];(o.f&De)!==0?Ra(o,t,!1):t===o&&(n?Se(o,ze):(o.f&Ae)!==0&&Se(o,Ft),Xo(o))}}function Da(e){var t=ft,n=bt,r=$t,s=le,o=en,i=me,a=Dt,c=Ln,d=e.f;ft=null,bt=0,$t=null,le=(d&(Ct|cn))===0?e:null,en=null,dr(e.ctx),Dt=!1,Ln=++Pn,e.ac!==null&&(wr(()=>{e.ac.abort(bs)}),e.ac=null);try{e.f|=Ls;var f=e.fn,b=f();e.f|=mr;var v=$i(e);if(xr()&&$t!==null&&!Dt&&v!==null&&(e.f&(De|Ft|ze))===0)for(var h=0;h<$t.length;h++)Ra($t[h],e);if(s!==null&&s!==e){if(Pn++,s.deps!==null)for(let p=0;p<n;p+=1)s.deps[p].rv=Pn;if(t!==null)for(const p of t)p.rv=Pn;$t!==null&&(r===null?r=$t:r.push(...$t))}return(e.f&wn)!==0&&(e.f^=wn),b}catch(p){return $i(e),mc(p)}finally{e.f^=Ls,ft=t,bt=n,$t=r,le=s,en=o,dr(i),Dt=a,Ln=c}}function $i(e){var s;var t=e.deps,n=W==null?void 0:W.is_fork;if(ft!==null){var r;if(n||qr(e,bt),t!==null&&bt>0)for(t.length=bt+ft.length,r=0;r<ft.length;r++)t[bt+r]=ft[r];else e.deps=t=ft;if(Qo()&&(e.f&Et)!==0)for(r=bt;r<t.length;r++)((s=t[r]).reactions??(s.reactions=[])).push(e)}else!n&&t!==null&&bt<t.length&&(qr(e,bt),t.length=bt);return t}function Ec(e,t){let n=t.reactions;if(n!==null){var r=yl.call(n,e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(t.f&De)!==0&&(ft===null||!Rs.call(ft,t))){var o=t;(o.f&Et)!==0&&(o.f^=Et,o.f&=~jn),o.v!==Ne&&Uo(o),o.ac!==null&&wr(()=>{o.ac.abort(bs),o.ac=null,Se(o,ze)}),cc(o),qr(o,0)}}function qr(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Ec(e,n[r])}function hr(e){var t=e.f;if((t&vt)===0){Se(e,Ae);var n=ie,r=zs;ie=e,zs=(t&(Ct|cn))===0;try{(t&(Rt|Ho))!==0?$c(e):ei(e),Na(e);var s=Da(e);e.teardown=typeof s=="function"?s:null,e.wv=Ia;var o}finally{zs=r,ie=n}}}async function Cc(){await Promise.resolve(),fc()}function l(e){var t=e.f,n=(t&De)!==0;if(le!==null&&!Dt){var r=ie!==null&&(ie.f&vt)!==0;if(!r&&(en===null||!en.has(e))){var s=le.deps;if((le.f&Ls)!==0)e.rv<Pn&&(e.rv=Pn,ft===null&&s!==null&&s[bt]===e?bt++:ft===null?ft=[e]:ft.push(e));else{le.deps??(le.deps=[]),Rs.call(le.deps,e)||le.deps.push(e);var o=e.reactions;o===null?e.reactions=[le]:Rs.call(o,le)||o.push(le)}}}if(dn&&Zt.has(e))return Zt.get(e);if(n){var i=e;if(dn){var a=i.v;return((i.f&Ae)===0&&i.reactions!==null||La(i))&&(a=Yo(i)),Zt.set(i,a),a}var c=(i.f&Et)===0&&!Dt&&le!==null&&(zs||(le.f&Et)!==0),d=(i.f&mr)===0;xs(i)&&(c&&(i.f|=Et),fa(i)),c&&!d&&(va(i),Fa(i))}if(Ke!=null&&Ke.has(e))return Ke.get(e);if((e.f&wn)!==0)throw e.v;return e.v}function Fa(e){if(e.f|=Et,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&De)!==0&&(t.f&Et)===0&&(va(t),Fa(t))}function La(e){if(e.v===Ne)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Zt.has(t)||(t.f&De)!==0&&La(t))return!0;return!1}function nn(e){var t=Dt;try{return Dt=!0,e()}finally{Dt=t}}function Tn(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Xt in e)Po(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&Xt in n&&Po(n)}}}function Po(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Po(e[r],t)}catch{}const n=Vo(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Yi(n);for(let s in r){const o=r[s].get;if(o)try{o.call(e)}catch{}}}}}function Tc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Nc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Mc(e){return Nc.includes(e)}const Pc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Ac(e){return e=e.toLowerCase(),Pc[e]??e}const zc=["touchstart","touchmove"];function Ic(e){return zc.includes(e)}const An=Symbol("events"),ja=new Set,Ao=new Set;function Va(e,t,n,r={}){function s(o){if(r.capture||zo.call(t,o),!o.cancelBubble)return wr(()=>n==null?void 0:n.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Jt(()=>{t.addEventListener(e,s,r)}):t.addEventListener(e,s,r),s}function pr(e,t,n,r,s){var o={capture:r,passive:s},i=Va(e,t,n,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Js(()=>{t.removeEventListener(e,i,o)})}function R(e,t,n){(t[An]??(t[An]={}))[e]=n}function Mt(e){for(var t=0;t<e.length;t++)ja.add(e[t]);for(var n of Ao)n(e)}let fo=null,vo=!1;function zo(e){var w,S;var t=this,n=t.ownerDocument,r=e.type,s=((w=e.composedPath)==null?void 0:w.call(e))||[],o=s[0]||e.target;fo=e,vo||(vo=!0,setTimeout(()=>{vo=!1,fo=null}));var i=0,a=fo===e&&e[An];if(a){var c=s.indexOf(a);if(c!==-1&&(t===document||t===window)){e[An]=t;return}var d=s.indexOf(t);if(d===-1)return;c<=d&&(i=c)}if(o=s[i]||e.target,o!==t){Gi(e,"currentTarget",{configurable:!0,get(){return o||n}});var f=le,b=ie;Tt(null),Nt(null);try{for(var v,h=[];o!==null&&o!==t;){try{var p=(S=o[An])==null?void 0:S[r];p!=null&&(!o.disabled||e.target===o)&&p.call(o,e)}catch(C){v?h.push(C):v=C}if(e.cancelBubble)break;i++,o=i<s.length?s[i]:null}if(v){for(let C of h)queueMicrotask(()=>{throw C});throw v}}finally{e[An]=t,delete e.currentTarget,Tt(f),Nt(b)}}}var Ui;const ho=((Ui=globalThis==null?void 0:globalThis.window)==null?void 0:Ui.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Oc(e){return(ho==null?void 0:ho.createHTML(e))??e}function Ha(e){var t=Zo("template");return t.innerHTML=Oc(e.replaceAll("<!>","<!---->")),t.content}function _r(e,t){var n=ie;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function A(e,t){var n=(t&Rl)!==0,r=(t&Dl)!==0,s,o=!e.startsWith("<!>");return()=>{s===void 0&&(s=Ha(o?e:"<!>"+e),n||(s=Hn(s)));var i=r||wa?document.importNode(s,!0):s.cloneNode(!0);if(n){var a=Hn(i),c=i.lastChild;_r(a,c)}else _r(i,i);return i}}function Rc(e,t,n="svg"){var r=!e.startsWith("<!>"),s=`<${n}>${r?e:"<!>"+e}</${n}>`,o;return()=>{if(!o){var i=Ha(s),a=Hn(i);o=Hn(a)}var c=o.cloneNode(!0);return _r(c,c),c}}function Ba(e,t){return Rc(e,t,"svg")}function ki(e=""){{var t=Qt(e+"");return _r(t,t),t}}function U(){var e=document.createDocumentFragment(),t=document.createComment(""),n=Qt();return e.append(t,n),_r(t,n),e}function y(e,t){e!==null&&e.before(t)}function Dc(e){let t=0,n=un(0),r;return()=>{Qo()&&(l(n),Zs(()=>(t===0&&(r=nn(()=>e(()=>Kr(n)))),t+=1,()=>{Jt(()=>{t-=1,t===0&&(r==null||r(),r=void 0,Kr(n))})})))}}var Fc=$n|br;function Lc(e,t,n,r){new jc(e,t,n,r)}var kt,jo,St,On,nt,_t,rt,gt,Ut,Rn,yn,cr,Jr,Xr,ln,Us,ge,Vc,Hc,Io,Bc,Oo,Lr,Is,Ro,Do;class jc{constructor(t,n,r,s){V(this,ge);tt(this,"parent");tt(this,"is_pending",!1);tt(this,"transform_error");V(this,kt);V(this,jo,null);V(this,St);V(this,On);V(this,nt);V(this,_t,null);V(this,rt,null);V(this,gt,null);V(this,Ut,null);V(this,Rn,0);V(this,yn,0);V(this,cr,!1);V(this,Jr,new Set);V(this,Xr,new Set);V(this,ln,null);V(this,Us,Dc(()=>(Z(this,ln,un(u(this,Rn))),()=>{Z(this,ln,null)})));var o;Z(this,kt,t),Z(this,St,n),Z(this,On,i=>{var a=ie;a.b=this,a.f|=So,r(i)}),this.parent=ie.b,this.transform_error=s??((o=this.parent)==null?void 0:o.transform_error)??(i=>i),Z(this,nt,$r(()=>{ce(this,ge,Oo).call(this)},Fc))}defer_effect(t){la(t,u(this,Jr),u(this,Xr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,St).pending}update_pending_count(t,n){ce(this,ge,Ro).call(this,t,n),Z(this,Rn,u(this,Rn)+t),!(!u(this,ln)||u(this,cr))&&(Z(this,cr,!0),Jt(()=>{Z(this,cr,!1),u(this,ln)&&vr(u(this,ln),u(this,Rn))}))}get_effect_pending(){return u(this,Us).call(this),l(u(this,ln))}error(t){if(!u(this,St).onerror&&!u(this,St).failed)throw t;W!=null&&W.is_fork?(u(this,_t)&&W.skip_effect(u(this,_t)),u(this,rt)&&W.skip_effect(u(this,rt)),u(this,gt)&&W.skip_effect(u(this,gt)),W.oncommit(()=>{ce(this,ge,Do).call(this,t)})):ce(this,ge,Do).call(this,t)}}kt=new WeakMap,jo=new WeakMap,St=new WeakMap,On=new WeakMap,nt=new WeakMap,_t=new WeakMap,rt=new WeakMap,gt=new WeakMap,Ut=new WeakMap,Rn=new WeakMap,yn=new WeakMap,cr=new WeakMap,Jr=new WeakMap,Xr=new WeakMap,ln=new WeakMap,Us=new WeakMap,ge=new WeakSet,Vc=function(){try{Z(this,_t,ut(()=>u(this,On).call(this,u(this,kt))))}catch(t){this.error(t)}},Hc=function(t){const n=u(this,St).failed,{reset:r,invoke_onerror:s}=ce(this,ge,Io).call(this,t);Jt(s),n&&Z(this,gt,ut(()=>{n(u(this,kt),()=>t,()=>r)}))},Io=function(t){var n=!1,r=!1;const s=()=>{if(n){Hl();return}n=!0,r&&ec(),u(this,gt)!==null&&Fn(u(this,gt),()=>{Z(this,gt,null)}),ce(this,ge,Is).call(this,()=>{ce(this,ge,Oo).call(this)})};return{reset:s,invoke_onerror:()=>{var i,a;try{r=!0,(a=(i=u(this,St)).onerror)==null||a.call(i,t,s),r=!1}catch(c){Gt(c,u(this,nt)&&u(this,nt).parent)}}}},Bc=function(){const t=u(this,St).pending;t&&(this.is_pending=!0,Z(this,rt,ut(()=>t(u(this,kt)))),Jt(()=>{var n=Z(this,Ut,document.createDocumentFragment()),r=Qt(),s=!1;if(n.append(r),Z(this,_t,ce(this,ge,Is).call(this,()=>{try{return ut(()=>u(this,On).call(this,r))}catch(o){try{this.error(o),s=!0}catch(i){Gt(i,u(this,nt).parent)}return null}})),u(this,_t)===null){Z(this,Ut,null),s&&ce(this,ge,Lr).call(this,W);return}u(this,yn)===0&&(u(this,kt).before(n),Z(this,Ut,null),Fn(u(this,rt),()=>{Z(this,rt,null)}),ce(this,ge,Lr).call(this,W))}))},Oo=function(){try{if(this.is_pending=this.has_pending_snippet(),Z(this,yn,0),Z(this,Rn,0),Z(this,_t,ut(()=>{u(this,On).call(this,u(this,kt))})),u(this,yn)>0){var t=Z(this,Ut,document.createDocumentFragment());ti(u(this,_t),t);const n=u(this,St).pending;Z(this,rt,ut(()=>n(u(this,kt))))}else ce(this,ge,Lr).call(this,W)}catch(n){this.error(n)}},Lr=function(t){this.is_pending=!1,t.transfer_effects(u(this,Jr),u(this,Xr))},Is=function(t){var n=ie,r=le,s=me;Nt(u(this,nt)),Tt(u(this,nt)),dr(u(this,nt).ctx);try{return Vn.ensure(),t()}finally{Nt(n),Tt(r),dr(s)}},Ro=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&ce(r=this.parent,ge,Ro).call(r,t,n);return}Z(this,yn,u(this,yn)+t),u(this,yn)===0&&(ce(this,ge,Lr).call(this,n),u(this,rt)&&Fn(u(this,rt),()=>{Z(this,rt,null)}),u(this,Ut)&&(u(this,kt).before(u(this,Ut)),Z(this,Ut,null)))},Do=function(t){u(this,_t)&&(Ue(u(this,_t)),Z(this,_t,null)),u(this,rt)&&(Ue(u(this,rt)),Z(this,rt,null)),u(this,gt)&&(Ue(u(this,gt)),Z(this,gt,null));let n=u(this,St).failed;const r=s=>{const{reset:o,invoke_onerror:i}=ce(this,ge,Io).call(this,s);i(),n&&Z(this,gt,ce(this,ge,Is).call(this,()=>{try{return ut(()=>{var a=ie;a.b=this,a.f|=So,n(u(this,kt),()=>s,()=>o)})}catch(a){return Gt(a,u(this,nt).parent),null}}))};Jt(()=>{var s;try{s=this.transform_error(t)}catch(o){Gt(o,u(this,nt)&&u(this,nt).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,o=>Gt(o,u(this,nt)&&u(this,nt).parent)):r(s)})};function Y(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Or]??(e[Or]=e.nodeValue))&&(e[Or]=n,e.nodeValue=`${n}`)}function Kc(e,t){return Wc(e,t)}const Ns=new Map;function Wc(e,{target:t,anchor:n,props:r={},events:s,context:o,intro:i=!0,transformError:a}){_c();var c=void 0,d=xc(()=>{var f=n??t.appendChild(Qt());Lc(f,{pending:()=>{}},h=>{ot({});var p=me;o&&(p.c=o),s&&(r.$$events=s),c=e(h,r)||Wo(),it()},a);var b=new Set,v=h=>{for(var p=0;p<h.length;p++){var w=h[p];if(!b.has(w)){b.add(w);var S=Ic(w);for(const M of[t,document]){var C=Ns.get(M);C===void 0&&(C=new Map,Ns.set(M,C));var I=C.get(w);I===void 0?(M.addEventListener(w,zo,{passive:S}),C.set(w,1)):C.set(w,I+1)}}}};return v(Ys(ja)),Ao.add(v),()=>{var S;for(var h of b)for(const C of[t,document]){var p=Ns.get(C),w=p.get(h);--w==0?(C.removeEventListener(h,zo),p.delete(h),p.size===0&&Ns.delete(C)):p.set(h,w)}Ao.delete(v),f!==n&&((S=f.parentNode)==null||S.removeChild(f))}});return Uc.set(c,d),c}let Uc=new WeakMap;var Ot,qt,mt,Dn,Zr,Qr,qs;class Qs{constructor(t,n=!0){tt(this,"anchor");V(this,Ot,new Map);V(this,qt,new Map);V(this,mt,new Map);V(this,Dn,new Set);V(this,Zr,!0);V(this,Qr,t=>{if(u(this,Ot).has(t)){var n=u(this,Ot).get(t),r=u(this,qt).get(n);if(r)Bs(r),u(this,Dn).delete(n);else{var s=u(this,mt).get(n);s&&(Bs(s.effect),u(this,qt).set(n,s.effect),u(this,mt).delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[o,i]of u(this,Ot)){if(u(this,Ot).delete(o),o===t)break;const a=u(this,mt).get(i);a&&(Ue(a.effect),u(this,mt).delete(i))}for(const[o,i]of u(this,qt)){if(o===n||u(this,Dn).has(o))continue;const a=()=>{if(Array.from(u(this,Ot).values()).includes(o)){var d=document.createDocumentFragment();ti(i,d),d.append(Qt()),u(this,mt).set(o,{effect:i,fragment:d})}else Ue(i);u(this,Dn).delete(o),u(this,qt).delete(o)};u(this,Zr)||!r?(u(this,Dn).add(o),Fn(i,a,!1)):a()}}});V(this,qs,t=>{u(this,Ot).delete(t);const n=Array.from(u(this,Ot).values());for(const[r,s]of u(this,mt))n.includes(r)||(Ue(s.effect),u(this,mt).delete(r))});this.anchor=t,Z(this,Zr,n)}ensure(t,n){var r=W,s=Sa();if(n&&!u(this,qt).has(t)&&!u(this,mt).has(t))if(s){var o=document.createDocumentFragment(),i=Qt();o.append(i),u(this,mt).set(t,{effect:ut(()=>n(i)),fragment:o})}else u(this,qt).set(t,ut(()=>n(this.anchor)));if(u(this,Ot).set(r,t),s){for(const[a,c]of u(this,qt))a===t?r.unskip_effect(c):r.skip_effect(c);for(const[a,c]of u(this,mt))a===t?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(u(this,Qr)),r.ondiscard(u(this,qs))}else u(this,Qr).call(this,r)}}Ot=new WeakMap,qt=new WeakMap,mt=new WeakMap,Dn=new WeakMap,Zr=new WeakMap,Qr=new WeakMap,qs=new WeakMap;function L(e,t,n=!1){var r=new Qs(e),s=n?$n:0;function o(i,a){r.ensure(i,a)}$r(()=>{var i=!1;t((a,c=0)=>{i=!0,o(c,a)}),i||o(-1,null)},s)}const qc=Symbol("NaN");function Gc(e,t,n){var r=new Qs(e),s=!xr();$r(()=>{var o=t();o!==o&&(o=qc),s&&o!==null&&typeof o=="object"&&(o={}),r.ensure(o,n)})}function Yc(e,t){return t}function Jc(e,t,n){for(var r=[],s=t.length,o,i=t.length,a=0;a<s;a++){let b=t[a];Fn(b,()=>{if(o){if(o.pending.delete(b),o.done.add(b),o.pending.size===0){var v=e.outrogroups;Fo(e,Ys(o.done)),v.delete(o),v.size===0&&(e.outrogroups=null)}}else i-=1},!1)}if(i===0){var c=r.length===0&&n!==null&&e.pending.size===0;if(c){var d=n,f=d.parentNode;gc(f),f.append(d),e.items.clear()}Fo(e,t,!c)}else o={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(o)}function Fo(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const i of e.pending.values())for(const a of i)r.add(e.items.get(a).e)}for(var s=0;s<t.length;s++){var o=t[s];if(r!=null&&r.has(o)){o.f|=Yt;const i=document.createDocumentFragment();ti(o,i)}else Ue(t[s],n)}}var Si;function We(e,t,n,r,s,o=null){var i=e,a=new Map,c=(t&ea)!==0;if(c){var d=e;i=d.appendChild(Qt())}var f=null,b=Go(()=>{var M=n();return Gs(M)?M:M==null?[]:Ys(M)}),v,h=new Map,p=!0;function w(M){(I.effect.f&vt)===0&&(I.pending.delete(M),I.fallback=f,Xc(I,v,i,t,r),f!==null&&(v.length===0?(f.f&Yt)===0?Bs(f):(f.f^=Yt,jr(f,null,i)):Fn(f,()=>{f=null})))}function S(M){I.pending.delete(M)}var C=$r(()=>{v=l(b);for(var M=v.length,P=new Set,x=W,k=Sa(),T=0;T<M;T+=1){var q=v[T],J=r(q,T),H=p?null:a.get(J);H?(H.v&&vr(H.v,q),H.i&&vr(H.i,T),k&&x.unskip_effect(H.e)):(H=Zc(a,p?i:Si??(Si=Qt()),q,J,T,s,t,n),p||(H.e.f|=Yt),a.set(J,H)),P.add(J)}if(M===0&&o&&!f&&(p?f=ut(()=>o(i)):(f=ut(()=>o(Si??(Si=Qt()))),f.f|=Yt)),M>P.size&&Wl(),!p)if(h.set(x,P),k){for(const[z,B]of a)P.has(z)||x.skip_effect(B.e);x.oncommit(w),x.ondiscard(S)}else w(x);l(b)}),I={effect:C,items:a,pending:h,outrogroups:null,fallback:f};p=!1}function Ar(e){for(;e!==null&&(e.f&Ct)===0;)e=e.next;return e}function Xc(e,t,n,r,s){var H,z,B,ne,ue,xe,ve,Ie,X;var o=(r&Ml)!==0,i=t.length,a=e.items,c=Ar(e.effect.first),d,f=null,b,v=[],h=[],p,w,S,C;if(o)for(C=0;C<i;C+=1)p=t[C],w=s(p,C),S=a.get(w).e,(S.f&Yt)===0&&((z=(H=S.nodes)==null?void 0:H.a)==null||z.measure(),(b??(b=new Set)).add(S));for(C=0;C<i;C+=1){if(p=t[C],w=s(p,C),S=a.get(w).e,e.outrogroups!==null)for(const ee of e.outrogroups)ee.pending.delete(S),ee.done.delete(S);if((S.f&st)!==0&&(Bs(S),o&&((ne=(B=S.nodes)==null?void 0:B.a)==null||ne.unfix(),(b??(b=new Set)).delete(S))),(S.f&Yt)!==0)if(S.f^=Yt,S===c)jr(S,null,n);else{var I=f?f.next:c;S===e.effect.last&&(e.effect.last=S.prev),S.prev&&(S.prev.next=S.next),S.next&&(S.next.prev=S.prev),gn(e,f,S),gn(e,S,I),jr(S,I,n),f=S,v=[],h=[],c=Ar(f.next);continue}if(S!==c){if(d!==void 0&&d.has(S)){if(v.length<h.length){var M=h[0],P;f=M.prev;var x=v[0],k=v[v.length-1];for(P=0;P<v.length;P+=1)jr(v[P],M,n);for(P=0;P<h.length;P+=1)d.delete(h[P]);gn(e,x.prev,k.next),gn(e,f,x),gn(e,k,M),c=M,f=k,C-=1,v=[],h=[]}else d.delete(S),jr(S,c,n),gn(e,S.prev,S.next),gn(e,S,f===null?e.effect.first:f.next),gn(e,f,S),f=S;continue}for(v=[],h=[];c!==null&&c!==S;)(d??(d=new Set)).add(c),h.push(c),c=Ar(c.next);if(c===null)continue}(S.f&Yt)===0&&v.push(S),f=S,c=Ar(S.next)}if(e.outrogroups!==null){for(const ee of e.outrogroups)ee.pending.size===0&&(Fo(e,Ys(ee.done)),(ue=e.outrogroups)==null||ue.delete(ee));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||d!==void 0){var T=[];if(d!==void 0)for(S of d)(S.f&st)===0&&T.push(S);for(;c!==null;)(c.f&st)===0&&c!==e.fallback&&T.push(c),c=Ar(c.next);var q=T.length;if(q>0){var J=(r&ea)!==0&&i===0?n:null;if(o){for(C=0;C<q;C+=1)(ve=(xe=T[C].nodes)==null?void 0:xe.a)==null||ve.measure();for(C=0;C<q;C+=1)(X=(Ie=T[C].nodes)==null?void 0:Ie.a)==null||X.fix()}Jc(e,T,J)}}o&&Jt(()=>{var ee,Ce;if(b!==void 0)for(S of b)(Ce=(ee=S.nodes)==null?void 0:ee.a)==null||Ce.apply()})}function Zc(e,t,n,r,s,o,i,a){var c=(i&Tl)!==0?(i&Pl)===0?hc(n,!1,!1):un(n):null,d=(i&Nl)!==0?un(s):null;return{v:c,i:d,e:ut(()=>(o(t,c??n,d??s,a),()=>{e.delete(r)}))}}function jr(e,t,n){if(e.nodes)for(var r=e.nodes.start,s=e.nodes.end,o=t&&(t.f&Yt)===0?t.nodes.start:n;r!==null;){var i=ys(r);if(o.before(r),r===s)return;r=i}}function gn(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function te(e,t,n,r,s){var a,c;if((a=t.$$host)!=null&&a.$$shadowRoot){const d=Zo("slot");y(e,d);return}var o=(c=t.$$slots)==null?void 0:c[n],i=!1;o===!0&&(o=t.children,i=!0),o===void 0||o(e,i?()=>r:r)}function Ei(e,t,n){var r=new Qs(e);$r(()=>{var s=t()??null;r.ensure(s,s&&(o=>n(o,s)))},$n)}function Qc(e,t,n,r,s,o){var i=null,a=e,c=new Qs(a,!1);$r(()=>{const d=t()||null;var f=Fl;if(d===null){c.ensure(null,null);return}return c.ensure(d,b=>{if(d){if(i=Zo(d,f),_r(i,i),r){var v=null,h=i.appendChild(Qt());r(i,h),v==null||v.remove()}ie.nodes.end=i,b.before(i)}}),()=>{}},$n),Js(()=>{})}function eu(e,t){var n=void 0,r;Ta(()=>{n!==(n=t())&&(r&&(Ue(r),r=null),n&&(r=ut(()=>{Xs(()=>n(e))})))})}function Ka(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=Ka(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function tu(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=Ka(e))&&(r&&(r+=" "),r+=t);return r}function nu(e){return typeof e=="object"?tu(e):e??""}const Ci=[...` 	
\r\f \v\uFEFF`];function ru(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var s of Object.keys(n))if(n[s])r=r?r+" "+s:s;else if(r.length)for(var o=s.length,i=0;(i=r.indexOf(s,i))>=0;){var a=i+o;(i===0||Ci.includes(r[i-1]))&&(a===r.length||Ci.includes(r[a]))?r=(i===0?"":r.substring(0,i))+r.substring(a+1):i=a}}return r===""?null:r}function Ti(e,t=!1){var n=t?" !important;":";",r="";for(var s of Object.keys(e)){var o=e[s];o!=null&&o!==""&&(r+=" "+s+": "+o+n)}return r}function po(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function su(e,t){if(t){var n="",r,s;if(Array.isArray(t)?(r=t[0],s=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var o=!1,i=0,a=!1,c=[];r&&c.push(...Object.keys(r).map(po)),s&&c.push(...Object.keys(s).map(po));var d=0,f=-1;const w=e.length;for(var b=0;b<w;b++){var v=e[b];if(a?v==="/"&&e[b-1]==="*"&&(a=!1):o?o===v&&(o=!1):v==="/"&&e[b+1]==="*"?a=!0:v==='"'||v==="'"?o=v:v==="("?i++:v===")"&&i--,!a&&o===!1&&i===0){if(v===":"&&f===-1)f=b;else if(v===";"||b===w-1){if(f!==-1){var h=po(e.substring(d,f).trim());if(!c.includes(h)){v!==";"&&b++;var p=e.substring(d,b).trim();n+=" "+p+";"}}d=b+1,f=-1}}}}return r&&(n+=Ti(r)),s&&(n+=Ti(s,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Lt(e,t,n,r,s,o){var i=e[Eo];if(i!==n||i===void 0){var a=ru(n,r,o);a==null?e.removeAttribute("class"):t?e.className=a:e.setAttribute("class",a),e[Eo]=n}else if(o&&s!==o)for(var c in o){var d=!!o[c];(s==null||d!==!!s[c])&&e.classList.toggle(c,d)}return o}function _o(e,t={},n,r){for(var s in n){var o=n[s];t[s]!==o&&(n[s]==null?e.style.removeProperty(s):e.style.setProperty(s,o,r))}}function Wr(e,t,n,r){var s=e[Co];if(s!==t){var o=su(t,r);o==null?e.removeAttribute("style"):e.style.cssText=o,e[Co]=t}else r&&(Array.isArray(r)?(_o(e,n==null?void 0:n[0],r[0]),_o(e,n==null?void 0:n[1],r[1],"important")):_o(e,n,r));return r}function Wa(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ni(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,Ua(e,!n||"__value"in e))}function Ua(e,t){var n=e.__defaultValue,r=e.multiple,s=r?n??[]:null;if(!(r&&!Gs(s))){var o=e.selectedIndex,i=t&&r?new Set(e.selectedOptions):null;for(var a of e.options){var c=nr(a);Wa(a,r?s.includes(c):xa(c,n))}if(t)if(i!==null)for(a of e.options){var d=i.has(a);a.selected!==d&&(a.selected=d)}else e.selectedIndex!==o&&(e.selectedIndex=o)}}function gr(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Gs(t))return Vl();for(var r of e.options)r.selected=t.includes(nr(r));return}for(r of e.options){var s=nr(r);if(xa(s,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function tr(e){var t=new MutationObserver(n=>{n.every(ou)||("__defaultValue"in e&&Ua(e,!1),"__value"in e&&gr(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Js(()=>{t.disconnect()})}function Lo(e,t,n=t){var r=new WeakSet,s=!0;qo(e,"change",o=>{var i=o?"[selected]":":checked",a;if(e.multiple)a=[].map.call(e.querySelectorAll(i),nr);else{var c=e.querySelector(i)??e.querySelector("option:not([disabled])");a=c&&nr(c)}n(a),e.__value=a,W!==null&&r.add(W)}),Xs(()=>{var o=t();if(e===document.activeElement){var i=W;if(r.has(i))return}if(gr(e,o,s),s&&o===void 0){var a=e.querySelector(":checked");a!==null&&(o=nr(a),n(o))}e.__value=o,s=!1})}function nr(e){return"__value"in e?e.__value:e.value}function ou(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const zr=Symbol("class"),Ir=Symbol("style"),qa=Symbol("is custom element"),Ga=Symbol("is html"),iu=Ko?"input":"INPUT",au=Ko?"option":"OPTION",Ya=Ko?"select":"SELECT";function he(e,t,n,r){var s=Ja(e);s[t]!==(s[t]=n)&&(t==="loading"&&(e[Cl]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Xa(e).has(t)?e[t]=n:e.setAttribute(t,n))}function lu(e,t,n,r,s=!1,o=!1){var i=Ja(e),a=i[qa],c=!i[Ga],d=t||{},f=e.nodeName===au,b=e.nodeName===Ya;for(var v in t)!(v in n)&&v[0]+v[1]!=="$$"&&(n[v]=null);n.class?n.class=nu(n.class):n[zr]&&(n.class=null),n[Ir]&&(n.style??(n.style=null));var h=Xa(e);if(e.nodeName===iu&&"type"in n&&("value"in n||"__value"in n)){var p=n.type;(p!==d.type||p===void 0&&e.hasAttribute("type"))&&(d.type=p,he(e,"type",p))}for(const x in n){let k=n[x];if(f&&x==="value"&&k==null){e.value=e.__value="",d[x]=k;continue}if(x==="class"){var w=e.namespaceURI==="http://www.w3.org/1999/xhtml";Lt(e,w,k,r,t==null?void 0:t[zr],n[zr]),d[x]=k,d[zr]=n[zr];continue}if(x==="style"){Wr(e,k,t==null?void 0:t[Ir],n[Ir]),d[x]=k,d[Ir]=n[Ir];continue}var S=d[x];if(!(k===S&&!(k===void 0&&e.hasAttribute(x)))){d[x]=k;var C=x[0]+x[1];if(C!=="$$")if(C==="on"){const T={},q="$$"+x;let J=x.slice(2);var I=Mc(J);if(Tc(J)&&(J=J.slice(0,-7),T.capture=!0),!I&&S){if(k!=null)continue;e.removeEventListener(J,d[q],T),d[q]=null}if(I)R(J,e,k),Mt([J]);else if(k!=null){let H=function(z){d[x].call(this,z)};d[q]=Va(J,e,H,T)}}else if(x==="style")he(e,x,k);else if(x==="autofocus")ca(e,!!k);else if(!a&&(x==="__value"||x==="value"&&k!=null))e.value=e.__value=k;else if(x==="selected"&&f)Wa(e,k);else{var M=x;c||(M=Ac(M));var P=M==="defaultValue"||M==="defaultChecked";if(b&&M==="defaultValue")continue;if(k==null&&!a&&!P)if(i[x]=null,M==="value"||M==="checked"){let T=e;const q=t===void 0;if(M==="value"){let J=T.defaultValue;T.removeAttribute(M),T.defaultValue=J,T.value=T.__value=q?J:null}else{let J=T.defaultChecked;T.removeAttribute(M),T.defaultChecked=J,T.checked=q?J:!1}}else e.removeAttribute(x);else P||(a||typeof k!="string")&&h.has(M)?(e[M]=k,M in i&&(i[M]=Ne)):typeof k!="function"&&he(e,M,k)}}}return d}function Mi(e,t,n=[],r=[],s=[],o,i=!1,a=!1){ua(s,n,r,c=>{var d=void 0,f={},b=e.nodeName===Ya,v=!1;if(Ta(()=>{var p=t(...c.map(l)),w=lu(e,d,p,o,i,a);if(v&&b){var S=e;"defaultValue"in p&&Ni(S,p.defaultValue),"value"in p&&gr(S,p.value)}for(let I of Object.getOwnPropertySymbols(f))p[I]||Ue(f[I]);for(let I of Object.getOwnPropertySymbols(p)){var C=p[I];I.description===Ll&&(!d||C!==d[I])&&(f[I]&&Ue(f[I]),f[I]=ut(()=>eu(e,()=>C))),w[I]=C}d=w}),b){var h=e;Xs(()=>{var p=d;"defaultValue"in p&&Ni(h,p.defaultValue),gr(h,p.value,!0),tr(h)})}v=!0})}function Ja(e){return e[Ms]??(e[Ms]={[qa]:e.nodeName.includes("-"),[Ga]:e.namespaceURI===na})}var Pi=new Map;function Xa(e){var t=e.getAttribute("is")||e.nodeName,n=Pi.get(t);if(n)return n;Pi.set(t,n=new Set);for(var r,s=e,o=Element.prototype;o!==s;){r=Yi(s);for(var i in r)r[i].set&&i!=="innerHTML"&&i!=="textContent"&&i!=="innerText"&&n.add(i);s=Vo(s)}return n}function Be(e,t,n=t){var r=new WeakSet;qo(e,"input",async s=>{var o=s?e.defaultValue:e.value;if(o=go(e)?mo(o):o,n(o),W!==null&&r.add(W),await Cc(),o!==(o=t())){var i=e.selectionStart,a=e.selectionEnd,c=e.value.length;if(e.value=o??"",a!==null){var d=e.value.length;i===a&&a===c&&d>c?(e.selectionStart=d,e.selectionEnd=d):(e.selectionStart=i,e.selectionEnd=Math.min(a,d))}}}),nn(t)==null&&e.value&&(n(go(e)?mo(e.value):e.value),W!==null&&r.add(W)),Zs(()=>{var s=t();if(e===document.activeElement){var o=W;if(r.has(o))return}go(e)&&s===mo(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function cu(e,t,n=t){qo(e,"change",r=>{var s=r?e.defaultChecked:e.checked;n(s)}),nn(t)==null&&n(e.checked),Zs(()=>{var r=t();e.checked=!!r})}function go(e){var t=e.type;return t==="number"||t==="range"}function mo(e){return e===""?null:+e}function bo(e,t){return e===t||(e==null?void 0:e[Xt])===t}function Gr(e=Wo(),t,n,r){var s=me.r,o=ie;return Xs(()=>{var i,a;return Zs(()=>{i=a,a=[],nn(()=>{bo(n(...a),e)||(t(e,...a),i&&bo(n(...i),e)&&t(null,...i))})}),()=>{let c=o;for(;c!==s&&c.parent!==null&&c.parent.f&Ds;)c=c.parent;const d=()=>{a&&bo(n(...a),e)&&t(null,...a)},f=c.teardown;c.teardown=()=>{d(),f==null||f()}}}),e}function Za(e=!1){const t=me,n=t.l.u;if(!n)return;let r=()=>Tn(t.s);if(e){let s=0,o={};const i=fr(()=>{let a=!1;const c=t.s;for(const d in c)c[d]!==o[d]&&(o[d]=c[d],a=!0);return a&&s++,s});r=()=>l(i)}n.b.length&&yc(()=>{Ai(t,r),ko(n.b)}),tn(()=>{const s=nn(()=>n.m.map(kl));return()=>{for(const o of s)typeof o=="function"&&o()}}),n.a.length&&tn(()=>{Ai(t,r),ko(n.a)})}function Ai(e,t){if(e.l.s)for(const n of e.l.s)l(n);t()}function uu(e){var t=un(0);return function(){return arguments.length===1?(g(t,l(t)+1),arguments[0]):(l(t),e())}}const du={get(e,t){if(!e.exclude.includes(t))return l(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=ie;try{Nt(e.parent_effect),e.special[t]=Me({get[t](){return e.props[t]}},t,ta)}finally{Nt(r)}}return e.special[t](n),bi(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),bi(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Q(e,t){return new Proxy({props:e,exclude:t,special:{},version:un(0),parent_effect:ie},du)}const fu={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Pr(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let s=e.props[r];Pr(s)&&(s=s());const o=xn(s,t);if(o&&o.set)return o.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Pr(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const s=xn(r,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===Xt||t===Qi)return!1;for(let n of e.props)if(Pr(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(Pr(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function se(...e){return new Proxy({props:e},fu)}function Me(e,t,n,r){var P;var s=!yr||(n&zl)!==0,o=(n&Il)!==0,i=(n&Ol)!==0,a=r,c=!0,d=void 0,f=()=>i&&s?(d??(d=fr(r)),l(d)):(c&&(c=!1,a=i?nn(r):r),a);let b;if(o){var v=Xt in e||Qi in e;b=((P=xn(e,t))==null?void 0:P.set)??(v&&t in e?x=>e[t]=x:void 0)}var h,p=!1;o?[h,p]=sc(()=>e[t]):h=e[t],h===void 0&&r!==void 0&&(h=f(),b&&(s&&Jl(),b(h)));var w;if(s?w=()=>{var x=e[t];return x===void 0?f():(c=!0,x)}:w=()=>{var x=e[t];return x!==void 0&&(a=void 0),x===void 0?a:x},s&&(n&ta)===0)return w;if(b){var S=e.$$legacy;return(function(x,k){return arguments.length>0?((!s||!k||S||p)&&b(k?w():x),x):w()})}var C=!1,I=((n&Al)!==0?fr:Go)(()=>(C=!1,w()));o&&l(I);var M=ie;return(function(x,k){if(arguments.length>0){const T=k?l(I):s&&o?_e(x):x;return g(I,T),C=!0,a!==void 0&&(a=T),x}return dn&&C||(M.f&vt)!==0?I.v:l(I)})}function kr(e){me===null&&oa(),yr&&me.l!==null?vu(me).m.push(e):tn(()=>{const t=nn(e);if(typeof t=="function")return t})}function ni(e){me===null&&oa(),kr(()=>()=>nn(e))}function vu(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const hu="5";var qi;typeof window<"u"&&((qi=window.__svelte??(window.__svelte={})).v??(qi.v=new Set)).add(hu);const Nn=()=>window.__IDE_BOOTSTRAP__||{};function pu(e){const{rootPath:t="",session:n=""}=Nn();return`${t}/api/sessions/${encodeURIComponent(n)}/ide${e}`}async function Re(e,t={}){const n=await fetch(pu(e),t),r=await n.json().catch(()=>({}));if(!n.ok){const s=new Error(r.error||"Request failed");throw Object.assign(s,r),s}return r}const Ze=(e,t)=>`/ssh-connections/${encodeURIComponent(e)}${t}`,de={chat:async(e,t=80)=>{const{rootPath:n=""}=Nn(),r=`${n}/api/sessions/${encodeURIComponent(e)}/ide/chat?limit=${t}`,s=await fetch(r),o=await s.json().catch(()=>({}));if(!s.ok)throw new Error(o.error||"Could not load chat");return o},browse:async(e="")=>{const{rootPath:t=""}=Nn(),n=`${t}/api/ide/browse?path=${encodeURIComponent(e)}`,r=await fetch(n),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not browse folders");return s},sessionAgent:async e=>{const{rootPath:t=""}=Nn(),n=await fetch(`${t}/api/sessions/${encodeURIComponent(e)}/agent`),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Could not read agent settings");return r},setSessionAgent:async(e,t)=>{const{rootPath:n=""}=Nn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/agent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({agent:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not switch agent");return s},setSessionModel:async(e,t)=>{const{rootPath:n=""}=Nn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/model`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change model");return s},setSessionEffort:async(e,t)=>{const{rootPath:n=""}=Nn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/effort`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({effort:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change effort");return s},browseOn:(e,t="")=>Re(Ze(e,`/browse?path=${encodeURIComponent(t)}`)),setWorkspaceRoot:(e,t,n)=>Re(Ze(e,"/workspace-root"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({workspace_root:t,label:n})}),hostKey:e=>Re(Ze(e,"/host-key")),trustHost:e=>Re(Ze(e,"/host-key"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accept:!0})}),listConnections:()=>Re("/ssh-connections"),createConnection:e=>Re("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),deleteConnection:e=>Re(Ze(e,""),{method:"DELETE"}),connect:(e,t)=>Re(Ze(e,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t||""})}),status:e=>Re(Ze(e,"/status?reconnect=1")),listFiles:(e,t)=>Re(Ze(e,`/files?path=${encodeURIComponent(t)}`)),searchFiles:(e,t,n)=>Re(Ze(e,`/files/search?path=${encodeURIComponent(t)}&query=${encodeURIComponent(n)}`)),readFile:(e,t)=>Re(Ze(e,`/file?path=${encodeURIComponent(t)}`)),saveFile:(e,t,n)=>Re(Ze(e,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t,content:n})}),fs:(e,t)=>Re(Ze(e,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),git:(e,t)=>Re(Ze(e,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),focusTerminal:e=>Re(Ze(e,"/focus-terminal"),{method:"POST"}),getWorkspace:e=>Re(Ze(e,"/workspace")),saveWorkspace:(e,t)=>Re(Ze(e,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})};var es,ts,ns,rs,ss,os,is,as,ls,cs,us,ds,fs,vs,hs,ps,_s,gs;class _u{constructor(){V(this,es,O(_e([])));V(this,ts,O(""));V(this,ns,O("idle"));V(this,rs,O("Ready"));V(this,ss,O("No file open"));V(this,os,O("."));V(this,is,O(_e([])));V(this,as,O(_e({})));V(this,ls,O(_e({})));V(this,cs,O(""));V(this,us,O(_e([])));V(this,ds,O(""));V(this,fs,O(""));V(this,vs,O(""));V(this,hs,O(_e([])));V(this,ps,O(""));V(this,_s,O(!1));V(this,gs,O(!1));tt(this,"restoredKey","");tt(this,"persistTimer",null)}get connections(){return l(u(this,es))}set connections(t){g(u(this,es),t,!0)}get connectionId(){return l(u(this,ts))}set connectionId(t){g(u(this,ts),t,!0)}get connectionState(){return l(u(this,ns))}set connectionState(t){g(u(this,ns),t,!0)}get statusText(){return l(u(this,rs))}set statusText(t){g(u(this,rs),t,!0)}get detailText(){return l(u(this,ss))}set detailText(t){g(u(this,ss),t,!0)}get path(){return l(u(this,os))}set path(t){g(u(this,os),t,!0)}get entries(){return l(u(this,is))}set entries(t){g(u(this,is),t,!0)}get expanded(){return l(u(this,as))}set expanded(t){g(u(this,as),t,!0)}get treeChildren(){return l(u(this,ls))}set treeChildren(t){g(u(this,ls),t,!0)}get filter(){return l(u(this,cs))}set filter(t){g(u(this,cs),t,!0)}get tabs(){return l(u(this,us))}set tabs(t){g(u(this,us),t,!0)}get activeKey(){return l(u(this,ds))}set activeKey(t){g(u(this,ds),t,!0)}get gitOutput(){return l(u(this,fs))}set gitOutput(t){g(u(this,fs),t,!0)}get gitStatus(){return l(u(this,vs))}set gitStatus(t){g(u(this,vs),t,!0)}get gitBranches(){return l(u(this,hs))}set gitBranches(t){g(u(this,hs),t,!0)}get gitBranch(){return l(u(this,ps))}set gitBranch(t){g(u(this,ps),t,!0)}get needsHostKey(){return l(u(this,_s))}set needsHostKey(t){g(u(this,_s),t,!0)}get notARepo(){return l(u(this,gs))}set notARepo(t){g(u(this,gs),t,!0)}get connection(){return this.connections.find(t=>t.id===this.connectionId)||null}get activeTab(){return this.tabs.find(t=>t.key===this.activeKey)||null}get visibleEntries(){const t=this.filter.trim().toLowerCase();return t?this.entries.filter(n=>n.name.toLowerCase().includes(t)):this.entries}get dirtyCount(){return this.tabs.filter(t=>t.dirty).length}get gitDirtyCount(){return this.gitStatus.split(`
`).filter(t=>t.trim()&&!t.startsWith("##")).length}resetWorkspaceView(){this.tabs=[],this.activeKey="",this.restoredKey="",this.path=".",this.entries=[],this.expanded={},this.treeChildren={},this.filter="",this.gitOutput="",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.needsHostKey=!1,this.notARepo=!1}setStatus(t,n){this.statusText=t,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const t=await de.listConnections();this.connections=t.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(t){this.setStatus(t.message||"Could not load connections")}}async refreshStatus(){var t,n,r;if(this.connectionId)try{const s=await de.status(this.connectionId);s.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((t=this.connection)==null?void 0:t.label)||"SSH workspace"}`,`SSH terminal: ${s.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(s){this.connectionState="error",this.setStatus(s.message||"Could not check SSH connection")}}async connect(t){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await de.connect(this.connectionId,t);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect"),this.needsHostKey=!!r.needs_host_key}}}async refreshFiles(t){if(!this.connectionId)return;const n=t||this.path||".";try{const r=await de.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async toggleDirectory(t){if(this.expanded[t]){const n={...this.expanded};delete n[t],this.expanded=n;return}if(this.expanded={...this.expanded,[t]:!0},!this.treeChildren[t])try{const n=await de.listFiles(this.connectionId,t);this.treeChildren={...this.treeChildren,[t]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}async openFile(t){if(!this.connectionId)return null;const n=`${this.connectionId}|${t}`,r=this.tabs.find(s=>s.key===n);if(r)return this.activeKey=n,r;try{const s=await de.readFile(this.connectionId,t),o={key:`${this.connectionId}|${s.path}`,path:s.path,content:s.content||"",saved:s.content||"",dirty:!1};return this.tabs=[...this.tabs,o],this.activeKey=o.key,this.setStatus("Opened",o.path),this.remember(),o}catch(s){return this.setStatus(s.message||"Could not open remote file"),null}}updateContent(t,n){this.tabs=this.tabs.map(r=>r.key===t?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(t){var r;const n=this.tabs.find(s=>s.key===t);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(s=>s.key!==t),this.activeKey===t&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const t=this.activeTab;if(t)try{await de.saveFile(this.connectionId,t.path,t.content),this.tabs=this.tabs.map(n=>n.key===t.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${t.path}`,t.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const t=`${this.connectionId}`;if(!t)return;let n=null;try{n=await de.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===t)return;this.restoredKey=t;const r=(n==null?void 0:n.buffers)||{};for(const o of((n==null?void 0:n.tabs)||[]).slice(0,12)){const i=await this.openFile(o);i&&Object.prototype.hasOwnProperty.call(r,o)&&this.updateContent(i.key,r[o])}const s=this.tabs.find(o=>o.path===(n==null?void 0:n.active_path));s&&(this.activeKey=s.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const t={};for(const r of this.tabs)r.dirty&&(t[r.path]=r.content);try{await de.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:t})}catch{}}async runGit(t,n={}){try{const r=await de.git(this.connectionId,{action:t,path:this.path||".",...n});return r.not_a_repo?(this.gitOutput=r.error||"This folder is not a Git repository.",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.notARepo=!0,null):(this.notARepo=!1,this.gitOutput=r.output||r.status||"",this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",r)}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}es=new WeakMap,ts=new WeakMap,ns=new WeakMap,rs=new WeakMap,ss=new WeakMap,os=new WeakMap,is=new WeakMap,as=new WeakMap,ls=new WeakMap,cs=new WeakMap,us=new WeakMap,ds=new WeakMap,fs=new WeakMap,vs=new WeakMap,hs=new WeakMap,ps=new WeakMap,_s=new WeakMap,gs=new WeakMap;const _=new _u;tc();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const gu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const mu=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const zi=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var bu=Ba("<svg><!><!></svg>");function oe(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]),r=Q(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);ot(t,!1);let s=Me(t,"name",8,void 0),o=Me(t,"color",8,"currentColor"),i=Me(t,"size",8,24),a=Me(t,"strokeWidth",8,2),c=Me(t,"absoluteStrokeWidth",8,!1),d=Me(t,"iconNode",24,()=>[]);Za();var f=bu();Mi(f,(h,p,w)=>({...gu,...h,...r,width:i(),height:i(),stroke:o(),"stroke-width":p,class:w}),[()=>mu(r)?void 0:{"aria-hidden":"true"},()=>(Tn(c()),Tn(a()),Tn(i()),nn(()=>c()?Number(a())*24/Number(i()):a())),()=>(Tn(zi),Tn(s()),Tn(n),nn(()=>zi("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var b=$(f);We(b,1,d,Yc,(h,p)=>{var w=dt(()=>Sl(l(p),2));let S=()=>l(w)[0],C=()=>l(w)[1];var I=U(),M=D(I);Qc(M,S,!0,(P,x)=>{Mi(P,()=>({...C()}))}),y(h,I)});var v=m(b);te(v,t,"default",{}),y(e,f),it()}function yu(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];oe(e,se({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function yo(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]];oe(e,se({name:"bot"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function xo(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];oe(e,se({name:"check"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Ur(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];oe(e,se({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function xu(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];oe(e,se({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Ii(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];oe(e,se({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function wu(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];oe(e,se({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function $u(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];oe(e,se({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function ku(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];oe(e,se({name:"circle-user"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Su(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];oe(e,se({name:"circle"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Eu(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];oe(e,se({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Cu(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];oe(e,se({name:"corner-left-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Tu(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];oe(e,se({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Oi(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 16-3 3 3 3"}],["path",{d:"m9 22 3-3-3-3"}]];oe(e,se({name:"file-code-corner"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Nu(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];oe(e,se({name:"file-diff"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Mu(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M14 18h6"}]];oe(e,se({name:"file-minus-corner"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Ri(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M14 19h6"}],["path",{d:"M17 16v6"}]];oe(e,se({name:"file-plus-corner"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Pu(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];oe(e,se({name:"file-plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function ri(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];oe(e,se({name:"file"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Au(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];oe(e,se({name:"files"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function wo(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];oe(e,se({name:"folder-open"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function zu(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];oe(e,se({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Iu(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];oe(e,se({name:"folder"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Ou(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]];oe(e,se({name:"git-branch-plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Di(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];oe(e,se({name:"git-branch"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Ru(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]];oe(e,se({name:"git-commit-vertical"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Du(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 16h.01"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{d:"M21.946 12.013H2.054"}],["path",{d:"M6 16h.01"}]];oe(e,se({name:"hard-drive"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Fu(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];oe(e,se({name:"link-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function eo(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];oe(e,se({name:"loader"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Fi(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];oe(e,se({name:"message-square"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Lu(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];oe(e,se({name:"monitor-smartphone"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function ju(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];oe(e,se({name:"panel-bottom"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Vu(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];oe(e,se({name:"panel-left"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Hu(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];oe(e,se({name:"plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Qa(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];oe(e,se({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function si(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];oe(e,se({name:"search"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Li(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];oe(e,se({name:"server"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Bu(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];oe(e,se({name:"shield-alert"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function ji(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];oe(e,se({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Ku(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];oe(e,se({name:"square"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Wu(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];oe(e,se({name:"trash-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Ks(e,t){const n=Q(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];oe(e,se({name:"x"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=U(),a=D(i);te(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}var Uu=A('<span class="w-[14px] shrink-0"></span>'),qu=Ba('<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.5 3.5h4l1.2 1.4h7.8v7.6H1.5z" fill="#c09553"></path></svg>'),Gu=A('<div role="treeitem" tabindex="0"><!> <span class="flex shrink-0 items-center"><!></span> <span class="flex-1 truncate text-vs-fg"> </span> <span class="hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Rename"><span class="text-[11px] leading-none">✎</span></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Delete"><span class="text-[11px] leading-none">🗑</span></button></span></div> <!>',1);function el(e,t){ot(t,!0);const n=dt(()=>t.dir==="."?t.entry.name:`${t.dir}/${t.entry.name}`),r=dt(()=>!!_.expanded[l(n)]),s=dt(()=>_.treeChildren[l(n)]||[]),o=dt(()=>{var z;return((z=_.activeTab)==null?void 0:z.path)===l(n)});async function i(){t.entry.is_dir?await _.toggleDirectory(l(n)):await _.openFile(l(n))}async function a(z){if(z.stopPropagation(),!!confirm(`Delete ${l(n)}? Folders must already be empty.`))try{await de.fs(_.connectionId,{action:"delete",path:l(n)}),await _.refreshFiles()}catch(B){_.setStatus(B.message||"Could not delete")}}async function c(z){z.stopPropagation();const B=prompt("Rename to (relative path):",l(n));if(!(!B||B===l(n)))try{await de.fs(_.connectionId,{action:"rename",path:l(n),new_path:B}),await _.refreshFiles()}catch(ne){_.setStatus(ne.message||"Could not rename")}}var d=Gu(),f=D(d);let b;var v=$(f);{var h=z=>{var B=U(),ne=D(B);{var ue=ve=>{Ur(ve,{size:14,class:"shrink-0 text-vs-muted"})},xe=ve=>{xu(ve,{size:14,class:"shrink-0 text-vs-muted"})};L(ne,ve=>{l(r)?ve(ue):ve(xe,-1)})}y(z,B)},p=z=>{var B=Uu();y(z,B)};L(v,z=>{t.entry.is_dir?z(h):z(p,-1)})}var w=m(v,2),S=$(w);{var C=z=>{var B=qu();y(z,B)},I=z=>{Fu(z,{size:14,class:"text-vs-muted"})},M=z=>{ri(z,{size:14,class:"text-vs-blue"})};L(S,z=>{t.entry.is_dir?z(C):t.entry.is_symlink?z(I,1):z(M,-1)})}var P=m(w,2),x=ae(P,!0),k=m(P,2),T=$(k),q=m(T,2),J=m(f,2);{var H=z=>{var B=U(),ne=D(B);We(ne,17,()=>l(s),ue=>ue.name,(ue,xe)=>{{let ve=dt(()=>t.depth+1);el(ue,{get entry(){return l(xe)},get dir(){return l(n)},get depth(){return l(ve)}})}}),y(z,B)};L(J,z=>{t.entry.is_dir&&l(r)&&z(H)})}G(()=>{b=Lt(f,1,"group flex cursor-pointer items-center gap-1 py-[2px] pr-1 text-[13px] hover:bg-vs-hover",null,b,{"bg-vs-active":l(o)}),Wr(f,`padding-left: ${8+t.depth*12}px`),he(f,"aria-expanded",t.entry.is_dir?l(r):void 0),he(f,"aria-selected",l(o)),he(f,"title",l(n)),Y(x,t.entry.name),he(T,"aria-label",`Rename ${t.entry.name??""}`),he(q,"aria-label",`Delete ${t.entry.name??""}`)}),R("click",f,i),R("keydown",f,z=>{(z.key==="Enter"||z.key===" ")&&(z.preventDefault(),i())}),R("click",T,c),R("click",q,a),y(e,d),it()}Mt(["click","keydown"]);var Yu=A('<form class="px-2 pb-1"><input class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"/></form>'),Ju=A('<p class="px-4 py-2 text-xs text-vs-muted">No folder opened.</p>'),Xu=A('<p class="px-4 py-2 text-xs text-vs-muted">No files here</p>'),Zu=A('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase"><span class="flex-1 truncate">Explorer</span></div> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase"><!> <span class="flex-1 truncate"> </span> <span class="flex opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"><!></button></span></div> <!> <input class="mx-2 mb-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none focus:border-vs-accent" placeholder="Filter files…"/> <div class="min-h-0 flex-1 overflow-y-auto pb-2"><!></div></div>');function Qu(e,t){ot(t,!0);let n=O(""),r=O("");const s=(H,z)=>H==="."?z:`${H}/${z}`;async function o(H){H.preventDefault();const z=l(r).trim();if(z)try{await de.fs(_.connectionId,{action:l(n)==="dir"?"create_dir":"create_file",path:s(_.path,z)}),g(n,""),g(r,""),await _.refreshFiles()}catch(B){_.setStatus(B.message||"Could not create")}}const i=dt(()=>{var H,z;return(((H=_.connection)==null?void 0:H.workspace_root)||"").split("/").filter(Boolean).pop()||((z=_.connection)==null?void 0:z.label)||"WORKSPACE"});var a=Zu(),c=m($(a),2),d=$(c);Ur(d,{size:14,class:"shrink-0 text-vs-muted"});var f=m(d,2),b=ae(f,!0),v=m(f,2),h=$(v),p=$(h);Pu(p,{size:14});var w=m(h,2),S=$(w);zu(S,{size:14});var C=m(w,2),I=$(C);Qa(I,{size:13});var M=m(c,2);{var P=H=>{var z=Yu(),B=$(z);ca(B,!0),G(()=>he(B,"placeholder",l(n)==="dir"?"New folder name":"New file name")),pr("submit",z,o),R("keydown",B,ne=>{ne.key==="Escape"&&g(n,"")}),pr("blur",B,()=>{l(r).trim()||g(n,"")}),Be(B,()=>l(r),ne=>g(r,ne)),y(H,z)};L(M,H=>{l(n)&&H(P)})}var x=m(M,2),k=m(x,2),T=$(k);{var q=H=>{var z=Ju();y(H,z)},J=H=>{var z=U(),B=D(z);We(B,17,()=>_.visibleEntries,ne=>ne.name,(ne,ue)=>{el(ne,{get entry(){return l(ue)},get dir(){return _.path},depth:0})},ne=>{var ue=Xu();y(ne,ue)}),y(H,z)};L(T,H=>{_.connectionId?H(J,-1):H(q)})}G(()=>{var H;he(f,"title",(H=_.connection)==null?void 0:H.workspace_root),Y(b,l(i))}),R("click",h,()=>{g(n,"file"),g(r,"")}),R("click",w,()=>{g(n,"dir"),g(r,"")}),R("click",C,()=>_.refreshFiles()),Be(x,()=>_.filter,H=>_.filter=H),y(e,a),it()}Mt(["click","keydown"]);var ed=A(`<p class="empty-repo svelte-1skdisl">This folder isn't a Git repository.<br/> Open a folder containing a <code class="svelte-1skdisl">.git</code> directory, or run <code class="svelte-1skdisl">git init</code> in the terminal.</p>`),td=A('<div class="branch svelte-1skdisl">On <strong> </strong></div>'),nd=A('<li class="svelte-1skdisl"><label class="svelte-1skdisl"><input type="checkbox"/> <span> </span> <span class="file svelte-1skdisl"> </span></label></li>'),rd=A('<ul class="changes svelte-1skdisl"></ul> <div class="row svelte-1skdisl"><button class="svelte-1skdisl"><!> </button> <button class="svelte-1skdisl"><!> Unstage</button></div>',1),sd=A("<option> </option>"),od=A('<select class="svelte-1skdisl"></select>'),id=A('<!> <!> <!> <div class="row svelte-1skdisl"><input placeholder="New branch…" class="svelte-1skdisl"/> <button class="svelte-1skdisl"><!> Create</button></div> <div class="row svelte-1skdisl"><input placeholder="Commit message…" class="svelte-1skdisl"/> <button class="svelte-1skdisl"><!> Commit</button></div> <pre class="output svelte-1skdisl"> </pre>',1),ad=A('<div class="git svelte-1skdisl"><div class="row svelte-1skdisl"><button class="svelte-1skdisl"><!> Status</button> <button class="svelte-1skdisl"><!> Diff</button> <button class="svelte-1skdisl"><!> Stage all</button></div> <!></div>');function ld(e,t){ot(t,!0);let n=O(""),r=O(""),s=O(_e({}));const o=dt(()=>(_.gitStatus||"").split(`
`).filter(x=>x&&!x.startsWith("##")).map(x=>({code:x.slice(0,2).trim()||"??",path:x.slice(3).trim()})).filter(x=>x.path)),i=dt(()=>l(o).filter(x=>l(s)[x.path]).map(x=>x.path));async function a(x){l(i).length&&(await _.runGit(x,{files:l(i)}),g(s,{},!0))}async function c(){if(!l(n).trim())return;await _.runGit("commit",{message:l(n).trim()})&&g(n,"")}async function d(){if(!l(r).trim())return;await _.runGit("create_branch",{branch:l(r).trim()})&&g(r,"")}var f=ad(),b=$(f),v=$(b),h=$(v);Qa(h,{size:13});var p=m(v,2),w=$(p);Nu(w,{size:13});var S=m(p,2),C=$(S);Ri(C,{size:13});var I=m(b,2);{var M=x=>{var k=ed();y(x,k)},P=x=>{var k=id(),T=D(k);{var q=be=>{var we=td(),Fe=m($(we)),Le=ae(Fe,!0);G(()=>Y(Le,_.gitBranch)),y(be,we)};L(T,be=>{_.gitBranch&&be(q)})}var J=m(T,2);{var H=be=>{var we=rd(),Fe=D(we);We(Fe,21,()=>l(o),vn=>vn.path,(vn,pt)=>{var kn=nd(),Kn=$(kn),hn=$(Kn),pn=m(hn,2);let Wn;var Un=ae(pn,!0),N=m(pn,2),K=ae(N,!0);G(()=>{Wn=Lt(pn,1,"code svelte-1skdisl",null,Wn,{staged:l(pt).code[0]!=="?"&&l(pt).code[0]!==" "}),Y(Un,l(pt).code),he(N,"title",l(pt).path),Y(K,l(pt).path)}),cu(hn,()=>l(s)[l(pt).path],re=>l(s)[l(pt).path]=re),y(vn,kn)});var Le=m(Fe,2),yt=$(Le),Pt=$(yt);Ri(Pt,{size:13});var fn=m(Pt),ht=m(yt,2),Bn=$(ht);Mu(Bn,{size:13}),G(()=>{yt.disabled=!l(i).length,Y(fn,` Stage (${l(i).length??""})`),ht.disabled=!l(i).length}),R("click",yt,()=>a("stage")),R("click",ht,()=>a("unstage")),y(be,we)};L(J,be=>{l(o).length&&be(H)})}var z=m(J,2);{var B=be=>{var we=od();We(we,20,()=>_.gitBranches,Le=>Le,(Le,yt)=>{var Pt=sd(),fn=ae(Pt,!0),ht={};G(()=>{Y(fn,yt),ht!==(ht=yt)&&(Pt.value=(Pt.__value=ht)??"")}),y(Le,Pt)});var Fe;tr(we),G(()=>{Fe!==(Fe=_.gitBranch)&&(we.value=(we.__value=Fe)??"",gr(we,Fe))}),R("change",we,Le=>_.runGit("switch",{branch:Le.currentTarget.value})),y(be,we)};L(z,be=>{_.gitBranches.length&&be(B)})}var ne=m(z,2),ue=$(ne),xe=m(ue,2),ve=$(xe);Ou(ve,{size:13});var Ie=m(ne,2),X=$(Ie),ee=m(X,2),Ce=$(ee);Ru(Ce,{size:13});var qe=m(Ie,2),Ge=ae(qe,!0);G(()=>Y(Ge,_.gitOutput||"No git output yet.")),Be(ue,()=>l(r),be=>g(r,be)),R("click",xe,d),Be(X,()=>l(n),be=>g(n,be)),R("click",ee,c),y(x,k)};L(I,x=>{_.notARepo?x(M):x(P,-1)})}R("click",v,()=>_.runGit("status")),R("click",p,()=>_.runGit("diff")),R("click",S,()=>_.runGit("stage",{files:["."]})),y(e,f),it()}Mt(["click","change"]);const cd="modulepreload",ud=function(e,t){return new URL(e,t).href},Vi={},Os=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let i=function(f){return Promise.all(f.map(b=>Promise.resolve(b).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=i(n.map(f=>{if(f=ud(f,r),f in Vi)return;Vi[f]=!0;const b=f.endsWith(".css"),v=b?'[rel="stylesheet"]':"";if(!!r)for(let w=a.length-1;w>=0;w--){const S=a[w];if(S.href===f&&(!b||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${v}`))return;const p=document.createElement("link");if(p.rel=b?"stylesheet":cd,b||(p.as="script"),p.crossOrigin="",p.href=f,d&&p.setAttribute("nonce",d),document.head.appendChild(p),b)return new Promise((w,S)=>{p.addEventListener("load",w),p.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return s.then(i=>{for(const a of i||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})},Vr={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},dd={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function fd(e){var n;const t=(e||"").split("/").pop()||"";return t.toLowerCase()==="dockerfile"?"dockerfile":t.toLowerCase()==="makefile"?"shell":dd[(n=t.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var vd=A('<div class="editor svelte-1h8xysy"></div>');function hd(e,t){ot(t,!0);let n,r=null,s=null,o="",i=!1;kr(async()=>{s=await Os(()=>import("./ide-monaco.js").then(c=>c.a),__vite__mapDeps([0,1]),import.meta.url),s.editor.defineTheme("monokai",Vr),r=s.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{i||!o||_.updateContent(o,r.getValue())}),r.addCommand(s.KeyMod.CtrlCmd|s.KeyCode.KeyS,()=>_.saveActive())}),ni(()=>r==null?void 0:r.dispose()),tn(()=>{const c=_.activeTab;if(!(!r||!s)){if(!c){i=!0,r.setValue(""),o="",i=!1;return}if(c.key!==o){i=!0;const d=s.editor.createModel(c.content,fd(c.path)),f=r.getModel();r.setModel(d),f==null||f.dispose(),o=c.key,i=!1}else r.getValue()!==c.content&&(i=!0,r.setValue(c.content),i=!1)}});var a=vd();Gr(a,c=>n=c,()=>n),y(e,a),it()}var mn=uu(()=>_),pd=A('<span class="h-2 w-2 rounded-full bg-vs-fg group-hover:hidden"></span> <!>',1),_d=A('<div><button class="flex items-center gap-1.5 py-2 pr-1 pl-3" role="tab"><!> <span class="whitespace-nowrap"> </span></button> <button class="mr-1.5 flex h-5 w-5 items-center justify-center rounded-sm hover:bg-vs-line"><!></button></div>'),gd=A('<div class="px-3 py-2 text-xs text-vs-muted">Open a file from the Explorer</div>'),md=A('<div class="flex min-h-[35px] items-stretch overflow-x-auto bg-vs-tabinactive" role="tablist"></div>');function bd(e,t){ot(t,!1);const n=s=>s.split("/").pop();Za();var r=md();We(r,5,()=>mn().tabs,s=>s.key,(s,o)=>{var i=_d();let a;var c=$(i),d=$(c);ri(d,{size:14,class:"shrink-0 text-vs-blue"});var f=m(d,2),b=ae(f,!0),v=m(c,2),h=$(v);{var p=S=>{var C=pd(),I=m(D(C),2);Ks(I,{size:14,class:"hidden group-hover:block"}),y(S,C)},w=S=>{Ks(S,{size:14,class:"opacity-0 group-hover:opacity-100"})};L(h,S=>{l(o).dirty?S(p):S(w,-1)})}G((S,C)=>{a=Lt(i,1,"group flex items-center border-r border-vs-bg text-[13px]",null,a,{"bg-vs-tabactive":l(o).key===mn().activeKey,"text-vs-bright":l(o).key===mn().activeKey,"text-vs-muted":l(o).key!==mn().activeKey}),he(c,"aria-selected",l(o).key===mn().activeKey),he(c,"title",l(o).path),Y(b,S),he(v,"title",l(o).dirty?"Unsaved changes — close":"Close"),he(v,"aria-label",`Close ${C??""}`)},[()=>n(l(o).path),()=>n(l(o).path)]),R("click",c,()=>mn(mn().activeKey=l(o).key)),R("click",v,()=>mn().closeTab(l(o).key)),y(s,i)},s=>{var o=gd();y(s,o)}),y(e,r),it()}Mt(["click"]);var yd=A("<option> </option>"),xd=A('<p class="rounded-sm bg-vs-red/10 px-2 py-1 text-xs text-vs-red"> </p>'),wd=A('<div class="flex flex-col gap-1"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-vs-blue"><!> </span> <div class="text-[13px] leading-relaxed whitespace-pre-wrap text-vs-fg"> </div></div>'),$d=A('<div class="self-end rounded-md border border-vs-line bg-vs-input px-2.5 py-1.5 text-[13px] whitespace-pre-wrap text-vs-fg max-w-[92%]"> </div>'),kd=A(`<div class="m-auto flex max-w-[240px] flex-col items-center gap-2 text-center"><!> <p class="text-xs leading-relaxed text-vs-muted">Ask about the file you have open. The prompt goes to the selected session,
            and the reply appears here.</p></div>`),Hi=A('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-vs-fg hover:bg-vs-hover"><span class="w-3"><!></span> </button>'),Sd=A('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[150px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"></div>'),Ed=A('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-vs-fg hover:bg-vs-hover"><span class="w-3"><!></span> <span class="truncate"> </span></button>'),Cd=A('<div class="absolute bottom-full left-0 z-20 mb-1 max-h-[260px] min-w-[190px] overflow-y-auto rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"></div>'),Td=A('<div class="relative" data-menu=""><button class="flex max-w-[120px] items-center gap-1 rounded-sm px-1.5 py-0.5 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Model"><span class="truncate"> </span> <!></button> <!></div>'),Nd=A('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[130px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"></div>'),Md=A('<div class="relative" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Reasoning effort"> <!></button> <!></div>'),Pd=A('<div class="flex h-full min-h-0 flex-col bg-vs-panel"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1.5"><!> <select class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-1.5 py-0.5 text-xs outline-none focus:border-vs-accent" title="Agent session that answers"></select></div> <div class="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-3 py-3"><!> <!></div> <div class="border-t border-vs-border p-2"><div class="rounded-md border border-vs-line bg-vs-input focus-within:border-vs-accent"><textarea rows="2" class="max-h-[200px] w-full resize-none bg-transparent px-2.5 py-2 text-[13px] text-vs-fg outline-none placeholder:text-vs-muted" placeholder="Ask about this workspace…"></textarea> <div class="flex items-center gap-1 px-1.5 pb-1.5 text-[11px]"><div class="relative" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Agent"> <!></button> <!></div> <!> <!> <!> <button class="ml-auto flex h-6 w-6 items-center justify-center rounded-md bg-vs-status text-white disabled:opacity-40" title="Send (Enter)" aria-label="Send"><!></button></div></div></div></div>');function Ad(e,t){ot(t,!0);let n=Me(t,"sessions",19,()=>[]),r=Me(t,"session",3,""),s=Me(t,"rootPath",3,""),o=O(""),i=O(_e(r()||n()[0]||"")),a=O(!1),c=O(_e([])),d=O(""),f=O(null),b=O(null),v=null,h=O(_e({agent:"codex",available:[],model:"",effort:"",models:[],efforts:[]})),p=O(""),w=O("");const S=dt(()=>(l(h).models.find(N=>N[0]===l(h).model)||[])[1]||l(h).model||"default");async function C(){if(l(i))try{g(h,{agent:"codex",available:[],model:"",effort:"",models:[],efforts:[],...await de.sessionAgent(l(i))},!0)}catch(N){g(h,{agent:l(h).agent,available:[],model:"",effort:"",models:[],efforts:[]},!0),_.setStatus(N.message||"Could not read agent settings")}}async function I(){if(l(i))try{const K=(await de.chat(l(i))).messages||[],re=K.length!==l(c).length;g(c,K,!0),g(d,""),re&&queueMicrotask(M)}catch(N){g(d,N.message||"Could not load chat",!0)}}function M(){l(f)&&(l(f).scrollTop=l(f).scrollHeight)}tn(()=>{const N=l(i);g(c,[],!0),v&&clearInterval(v),N&&(I(),C(),v=setInterval(I,3e3))}),ni(()=>{v&&clearInterval(v)});async function P(N){if(g(p,""),N!==l(h).agent){g(w,"agent");try{await de.setSessionAgent(l(i),N),await C(),_.setStatus(`Switched to ${N}`)}catch(K){_.setStatus(K.message||"Could not switch agent")}finally{g(w,"")}}}async function x(N){if(g(p,""),N!==l(h).model){g(w,"model");try{await de.setSessionModel(l(i),N),await C(),_.setStatus(`Model set to ${N}`)}catch(K){_.setStatus(K.message||"Could not change model")}finally{g(w,"")}}}async function k(N){if(g(p,""),N!==l(h).effort){g(w,"effort");try{await de.setSessionEffort(l(i),N),await C(),_.setStatus(`Reasoning effort set to ${N}`)}catch(K){_.setStatus(K.message||"Could not change effort")}finally{g(w,"")}}}function T(){const N=_.connection||{},K=_.activeTab,re=K?K.path:_.path||".",ye=K?`
Active file contents (first 12,000 characters):
${K.content.slice(0,12e3)}`:"";return`[Remote IDE context]
${N.kind==="local"?`Local workspace: ${N.workspace_root||"."}`:`SSH target: ${N.username||"?"}@${N.host||"?"}`}
Path: ${re}${ye}

${l(o).trim()}`}async function q(){const N=l(o).trim();if(!N||!l(i)||l(a))return;const K=T();g(a,!0);try{const re=await fetch(`${s()}/api/sessions/${encodeURIComponent(l(i))}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:K})}),ye=await re.json().catch(()=>({}));if(!re.ok)throw new Error(ye.error||"Could not send");g(o,""),l(b)&&(l(b).style.height="auto"),g(c,[...l(c),{role:"user",text:N,ts:Date.now()/1e3,_local:!0}],!0),queueMicrotask(M),setTimeout(I,1200)}catch(re){_.setStatus(re.message||"Could not send prompt")}finally{g(a,!1)}}function J(N){N.key==="Enter"&&!N.shiftKey&&(N.preventDefault(),q())}function H(N){const K=N.currentTarget;K.style.height="auto",K.style.height=`${Math.min(K.scrollHeight,200)}px`}function z(N){const K=N.full||N.text||"",re=`

`;if(K.startsWith("[Remote IDE context]")||K.startsWith("[Remote SSH IDE context]")){const ye=K.lastIndexOf(re);if(ye!==-1)return K.slice(ye+re.length)}return K}var B=Pd();pr("click",Hs,N=>{var K,re;(re=(K=N.target).closest)!=null&&re.call(K,"[data-menu]")||g(p,"")});var ne=$(B),ue=$(ne);yo(ue,{size:13,class:"shrink-0 text-vs-blue"});var xe=m(ue,2);We(xe,20,n,N=>N,(N,K)=>{var re=yd(),ye=ae(re,!0),Te={};G(()=>{Y(ye,K),Te!==(Te=K)&&(re.value=(re.__value=Te)??"")}),y(N,re)}),tr(xe);var ve=m(ne,2),Ie=$(ve);{var X=N=>{var K=xd(),re=ae(K,!0);G(()=>Y(re,l(d))),y(N,K)};L(Ie,N=>{l(d)&&N(X)})}var ee=m(Ie,2);We(ee,19,()=>l(c),(N,K)=>N.ts+":"+K,(N,K)=>{var re=U(),ye=D(re);{var Te=je=>{var Qe=wd(),Ye=$(Qe),Ve=$(Ye);yo(Ve,{size:11});var xt=m(Ve),At=m(Ye,2),Vt=ae(At,!0);G(rn=>{Y(xt,` ${l(h).agent==="claude"?"Claude":"Codex"}`),Y(Vt,rn)},[()=>z(l(K))]),y(je,Qe)},at=je=>{var Qe=$d(),Ye=ae(Qe,!0);G(Ve=>Y(Ye,Ve),[()=>z(l(K))]),y(je,Qe)};L(ye,je=>{l(K).role==="assistant"?je(Te):je(at,-1)})}y(N,re)},N=>{var K=U(),re=D(K);{var ye=Te=>{var at=kd(),je=$(at);yo(je,{size:28,strokeWidth:1.3,class:"text-vs-line"}),y(Te,at)};L(re,Te=>{l(d)||Te(ye)})}y(N,K)}),Gr(ve,N=>g(f,N),()=>l(f));var Ce=m(ve,2),qe=$(Ce),Ge=$(qe);Gr(Ge,N=>g(b,N),()=>l(b));var be=m(Ge,2),we=$(be),Fe=$(we),Le=$(Fe),yt=m(Le);Ur(yt,{size:11});var Pt=m(Fe,2);{var fn=N=>{var K=Sd();We(K,20,()=>l(h).available.length?l(h).available:["codex"],re=>re,(re,ye)=>{var Te=Hi(),at=$(Te),je=$(at);{var Qe=Ve=>{xo(Ve,{size:11})};L(je,Ve=>{ye===l(h).agent&&Ve(Qe)})}var Ye=m(at);G(()=>Y(Ye,` ${ye==="claude"?"Claude":"Codex"}`)),R("click",Te,()=>P(ye)),y(re,Te)}),y(N,K)};L(Pt,N=>{l(p)==="agent"&&N(fn)})}var ht=m(we,2);{var Bn=N=>{var K=Td(),re=$(K),ye=$(re),Te=ae(ye,!0),at=m(ye,2);Ur(at,{size:11,class:"shrink-0"});var je=m(re,2);{var Qe=Ye=>{var Ve=Cd();We(Ve,21,()=>l(h).models,xt=>xt[0],(xt,At)=>{var Vt=Ed(),rn=$(Vt),Sr=$(rn);{var qn=Er=>{xo(Er,{size:11})};L(Sr,Er=>{l(At)[0]===l(h).model&&Er(qn)})}var Sn=m(rn,2),ws=ae(Sn,!0);G(()=>Y(ws,l(At)[1])),R("click",Vt,()=>x(l(At)[0])),y(xt,Vt)}),y(Ye,Ve)};L(je,Ye=>{l(p)==="model"&&Ye(Qe)})}G(()=>Y(Te,l(S))),R("click",re,()=>g(p,l(p)==="model"?"":"model",!0)),y(N,K)};L(ht,N=>{l(h).models.length&&N(Bn)})}var vn=m(ht,2);{var pt=N=>{var K=Md(),re=$(K),ye=$(re),Te=m(ye);Ur(Te,{size:11});var at=m(re,2);{var je=Qe=>{var Ye=Nd();We(Ye,20,()=>l(h).efforts,Ve=>Ve,(Ve,xt)=>{var At=Hi(),Vt=$(At),rn=$(Vt);{var Sr=Sn=>{xo(Sn,{size:11})};L(rn,Sn=>{xt===l(h).effort&&Sn(Sr)})}var qn=m(Vt);G(()=>Y(qn,` ${xt??""}`)),R("click",At,()=>k(xt)),y(Ve,At)}),y(Qe,Ye)};L(at,Qe=>{l(p)==="effort"&&Qe(je)})}G(()=>Y(ye,`${(l(h).effort||"effort")??""} `)),R("click",re,()=>g(p,l(p)==="effort"?"":"effort",!0)),y(N,K)};L(vn,N=>{l(h).efforts.length&&N(pt)})}var kn=m(vn,2);{var Kn=N=>{eo(N,{size:11,class:"animate-spin text-vs-muted"})};L(kn,N=>{l(w)&&N(Kn)})}var hn=m(kn,2),pn=$(hn);{var Wn=N=>{Ku(N,{size:11})},Un=N=>{yu(N,{size:13})};L(pn,N=>{l(a)?N(Wn):N(Un,-1)})}G(N=>{Y(Le,`${l(h).agent==="claude"?"Claude":"Codex"} `),hn.disabled=N},[()=>l(a)||!l(o).trim()]),Lo(xe,()=>l(i),N=>g(i,N)),R("keydown",Ge,J),R("input",Ge,H),Be(Ge,()=>l(o),N=>g(o,N)),R("click",Fe,()=>g(p,l(p)==="agent"?"":"agent",!0)),R("click",hn,q),y(e,B),it()}Mt(["keydown","input","click"]);var zd=A('<span class="hint svelte-e2eyom">searching…</span>'),Id=A('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),Od=A('<ul class="results svelte-e2eyom"></ul>'),Rd=A('<p class="empty svelte-e2eyom"> </p>'),Dd=A('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function Fd(e,t){ot(t,!0);let n=O(""),r=O(_e([])),s=O(0),o=O(!1),i=O(null),a=null;tn(()=>{l(i)&&l(i).focus()}),tn(()=>{const k=l(n).trim();if(a&&clearTimeout(a),!k){g(r,[],!0);return}a=setTimeout(async()=>{g(o,!0);try{const T=await de.searchFiles(_.connectionId,_.path||".",k);g(r,T.matches||[],!0),g(s,0)}catch{g(r,[],!0)}finally{g(o,!1)}},180)});async function c(k){var q;if(!k)return;const T=_.path&&_.path!=="."?`${_.path}/`:"";await _.openFile(`${T}${k.path}`),(q=t.onclose)==null||q.call(t)}function d(k){var T;k.key==="Escape"?(k.preventDefault(),(T=t.onclose)==null||T.call(t)):k.key==="ArrowDown"?(k.preventDefault(),g(s,Math.min(l(s)+1,l(r).length-1),!0)):k.key==="ArrowUp"?(k.preventDefault(),g(s,Math.max(l(s)-1,0),!0)):k.key==="Enter"&&(k.preventDefault(),c(l(r)[l(s)]))}var f=Dd(),b=D(f),v=m(b,2),h=$(v),p=$(h);si(p,{size:14});var w=m(p,2);Gr(w,k=>g(i,k),()=>l(i));var S=m(w,2);{var C=k=>{var T=zd();y(k,T)};L(S,k=>{l(o)&&k(C)})}var I=m(h,2);{var M=k=>{var T=Od();We(T,23,()=>l(r),q=>q.path,(q,J,H)=>{var z=Id(),B=$(z);let ne;var ue=$(B),xe=ae(ue,!0),ve=m(ue,2),Ie=ae(ve,!0),X=m(ve,2);{var ee=Ce=>{Eu(Ce,{size:12})};L(X,Ce=>{l(H)===l(s)&&Ce(ee)})}G(()=>{ne=Lt(B,1,"svelte-e2eyom",null,ne,{active:l(H)===l(s)}),Y(xe,l(J).name),Y(Ie,l(J).path)}),R("click",B,()=>c(l(J))),y(q,z)}),y(k,T)},P=k=>{var T=Rd(),q=ae(T);G(J=>Y(q,`No files match “${J??""}”.`),[()=>l(n).trim()]),y(k,T)},x=dt(()=>l(n).trim()&&!l(o));L(I,k=>{l(r).length?k(M):l(x)&&k(P,1)})}R("click",b,()=>{var k;return(k=t.onclose)==null?void 0:k.call(t)}),R("keydown",b,k=>{var T;return k.key==="Escape"&&((T=t.onclose)==null?void 0:T.call(t))}),R("keydown",w,d),Be(w,()=>l(n),k=>g(n,k)),y(e,f),it()}Mt(["click","keydown"]);var Ld=A('<div class="terminal-pane svelte-maclc7"><div class="bar svelte-maclc7"><span class="label svelte-maclc7">Terminal</span> <span> </span></div> <div class="screen svelte-maclc7"></div></div>');function jd(e,t){ot(t,!0);let n=Me(t,"rootPath",3,""),r=Me(t,"session",3,""),s,o=null,i=null,a=null,c=O("connecting"),d=null,f=0,b=null,v=!1;const h={background:Vr.colors["editor.background"],foreground:Vr.colors["editor.foreground"],cursor:Vr.colors["editorCursor.foreground"],selectionBackground:Vr.colors["editor.selectionBackground"],black:"#272822",red:"#f92672",green:"#a6e22e",yellow:"#e6db74",blue:"#66d9ef",magenta:"#ae81ff",cyan:"#a1efe4",white:"#f8f8f2",brightBlack:"#75715e",brightRed:"#f92672",brightGreen:"#a6e22e",brightYellow:"#e6db74",brightBlue:"#66d9ef",brightMagenta:"#ae81ff",brightCyan:"#a1efe4",brightWhite:"#f9f8f5"};function p(){if(!(!i||!o||(a==null?void 0:a.readyState)!==WebSocket.OPEN))try{i.fit(),a.send(JSON.stringify({type:"resize",cols:o.cols,rows:o.rows}))}catch{}}function w(){if(v)return;const k=`${location.protocol==="https:"?"wss":"ws"}://${location.host}${n()}/ws/sessions/${encodeURIComponent(r())}/ide/terminal/${encodeURIComponent(_.connectionId)}`;a=new WebSocket(k),a.binaryType="arraybuffer",a.onopen=()=>{g(c,"connected"),f=0,p()},a.onmessage=T=>{o.write(typeof T.data=="string"?T.data:new Uint8Array(T.data))},a.onclose=T=>{if(v)return;if(T.code===1008){g(c,"refused"),o==null||o.write(`\r
\x1B[31m— not authorised for this terminal —\x1B[0m\r
`);return}if(f>=6){g(c,"closed"),o==null||o.write(`\r
\x1B[33m— terminal unavailable; reopen the panel to retry —\x1B[0m\r
`);return}g(c,"reconnecting");const q=Math.min(1e3*2**f,1e4);f+=1,b=setTimeout(w,q)},a.onerror=()=>{v||g(c,"error")}}kr(async()=>{const[{Terminal:x},{FitAddon:k}]=await Promise.all([Os(()=>import("./ide-xterm.js"),[],import.meta.url),Os(()=>import("./ide-addon-fit.js"),[],import.meta.url)]);await Os(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),o=new x({theme:h,fontSize:12,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3}),i=new k,o.loadAddon(i),o.open(s),i.fit(),w(),o.onData(T=>{(a==null?void 0:a.readyState)===WebSocket.OPEN&&a.send(new TextEncoder().encode(T))}),d=new ResizeObserver(()=>p()),d.observe(s)}),ni(()=>{v=!0,b&&clearTimeout(b),d==null||d.disconnect(),a==null||a.close(),o==null||o.dispose()});var S=Ld(),C=$(S),I=m($(C),2),M=ae(I,!0),P=m(C,2);Gr(P,x=>s=x,()=>s),G(()=>{Lt(I,1,`status ${l(c)??""}`,"svelte-maclc7"),Y(M,l(c))}),y(e,S),it()}var Vd=A('<div class="border-b border-vs-line bg-vs-red/10 px-4 py-2 text-xs text-vs-red"> </div>'),Hd=A('<div class="flex items-center gap-2 px-4 py-3 text-xs text-vs-muted"><!> Loading…</div>'),Bd=A('<button class="flex w-full items-center gap-2 px-4 py-1 text-left text-[13px] text-vs-fg hover:bg-vs-hover"><!> <span class="truncate"> </span></button>'),Kd=A('<div class="px-4 py-3 text-xs text-vs-muted">No sub-folders here. You can still open this folder.</div>'),Wd=A('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="flex h-[70vh] w-[min(640px,92vw)] flex-col overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">Open Folder <span class="ml-1 font-normal text-vs-muted"><!></span></div> <form class="flex gap-2 border-b border-vs-line px-3 py-2"><button type="button" class="flex items-center gap-1 rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover disabled:opacity-40" title="Up one folder"><!> Up</button> <input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-xs text-vs-fg outline-none focus:border-vs-accent" spellcheck="false" aria-label="Folder path"/> <button type="submit" class="rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover">Go</button></form> <!> <div class="min-h-0 flex-1 overflow-y-auto py-1"><!></div> <div class="flex items-center gap-2 border-t border-vs-line px-4 py-3"><span class="flex min-w-0 flex-1 items-center gap-2 text-xs text-vs-muted"><!> <span class="truncate font-mono"> </span></span> <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40">Open Folder</button></div></div></div>');function Ud(e,t){ot(t,!0);let n=O(""),r=O(""),s=O(_e([])),o=O(""),i=O(!0),a=O("");async function c(X){g(i,!0),g(o,"");try{const ee=_.connectionId?await de.browseOn(_.connectionId,X):await de.browse(X);g(n,ee.path,!0),g(r,ee.parent,!0),g(s,ee.entries||[],!0),g(a,ee.path,!0)}catch(ee){g(o,ee.message||"Could not open that folder",!0)}finally{g(i,!1)}}kr(()=>c(""));function d(X){X.preventDefault(),l(a).trim()&&c(l(a).trim())}var f=Wd(),b=$(f),v=$(b),h=m($(v)),p=$(h);{var w=X=>{var ee=ki();G(()=>Y(ee,`on ${_.connection.username??""}@${_.connection.host??""}`)),y(X,ee)},S=X=>{var ee=ki("on this server");y(X,ee)};L(p,X=>{_.connection&&_.connection.kind!=="local"?X(w):X(S,-1)})}var C=m(v,2),I=$(C),M=$(I);Cu(M,{size:14});var P=m(I,2),x=m(C,2);{var k=X=>{var ee=Vd(),Ce=ae(ee,!0);G(()=>Y(Ce,l(o))),y(X,ee)};L(x,X=>{l(o)&&X(k)})}var T=m(x,2),q=$(T);{var J=X=>{var ee=Hd(),Ce=$(ee);eo(Ce,{size:13,class:"animate-spin"}),y(X,ee)},H=X=>{var ee=U(),Ce=D(ee);We(Ce,17,()=>l(s),qe=>qe.path,(qe,Ge)=>{var be=Bd(),we=$(be);Iu(we,{size:14,class:"shrink-0 text-vs-blue"});var Fe=m(we,2),Le=ae(Fe,!0);G(()=>Y(Le,l(Ge).name)),R("dblclick",be,()=>c(l(Ge).path)),R("click",be,()=>c(l(Ge).path)),y(qe,be)},qe=>{var Ge=Kd();y(qe,Ge)}),y(X,ee)};L(q,X=>{l(i)?X(J):X(H,-1)})}var z=m(T,2),B=$(z),ne=$(B);Du(ne,{size:13,class:"shrink-0"});var ue=m(ne,2),xe=ae(ue,!0),ve=m(B,2),Ie=m(ve,2);G(()=>{I.disabled=!l(r),he(ue,"title",l(n)),Y(xe,l(n)),Ie.disabled=!l(n)||l(i)}),R("click",f,X=>X.target===X.currentTarget&&t.onclose()),R("keydown",f,X=>X.key==="Escape"&&t.onclose()),pr("submit",C,d),R("click",I,()=>l(r)&&c(l(r))),Be(P,()=>l(a),X=>g(a,X)),R("click",ve,function(...X){var ee;(ee=t.onclose)==null||ee.apply(this,X)}),R("click",Ie,()=>t.onopen(l(n))),y(e,f),it()}Mt(["click","keydown","dblclick"]);var qd=A('<p class="px-4 py-2 text-xs text-vs-muted">Open a folder to search it.</p>'),Gd=A('<button class="flex w-full items-center gap-2 px-3 py-1 text-left text-[13px] hover:bg-vs-hover"><!> <span class="truncate text-vs-fg"> </span> <span class="ml-auto max-w-[45%] truncate text-[11px] text-vs-muted"> </span></button>'),Yd=A('<p class="px-4 py-2 text-xs text-vs-muted"> </p>'),Jd=A('<p class="px-4 py-2 text-xs text-vs-muted">Type to search filenames in this workspace.</p>'),Xd=A('<div class="flex h-full min-h-0 flex-col"><div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Search</div> <div class="px-3 pb-2"><div class="flex items-center gap-1.5 rounded-sm border border-vs-line bg-vs-input px-2 focus-within:border-vs-accent"><!> <input class="min-w-0 flex-1 bg-transparent py-1 text-xs text-vs-fg outline-none placeholder:text-vs-muted" placeholder="Search filenames" spellcheck="false"/> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div></div>');function Zd(e,t){ot(t,!0);let n=O(""),r=O(_e([])),s=O(!1),o=O(!1),i=null;tn(()=>{const M=l(n).trim();if(i&&clearTimeout(i),!M||!_.connectionId){g(r,[],!0),g(o,!1);return}i=setTimeout(async()=>{g(s,!0);try{const P=await de.searchFiles(_.connectionId,_.path||".",M);g(r,P.matches||[],!0)}catch(P){g(r,[],!0),_.setStatus(P.message||"Search failed")}finally{g(s,!1),g(o,!0)}},200)});const a=M=>{const P=(M||"").split("/");return P.pop(),P.join("/")};var c=Xd(),d=m($(c),2),f=$(d),b=$(f);si(b,{size:12,class:"shrink-0 text-vs-muted"});var v=m(b,2),h=m(v,2);{var p=M=>{eo(M,{size:12,class:"shrink-0 animate-spin text-vs-muted"})};L(h,M=>{l(s)&&M(p)})}var w=m(d,2),S=$(w);{var C=M=>{var P=qd();y(M,P)},I=M=>{var P=U(),x=D(P);We(x,17,()=>l(r),k=>k.path,(k,T)=>{var q=Gd(),J=$(q);ri(J,{size:13,class:"shrink-0 text-vs-blue"});var H=m(J,2),z=ae(H,!0),B=m(H,2),ne=ae(B,!0);G((ue,xe)=>{he(q,"title",l(T).path),Y(z,ue),Y(ne,xe)},[()=>l(T).name||l(T).path.split("/").pop(),()=>a(l(T).path)]),R("click",q,()=>_.openFile(l(T).path)),y(k,q)},k=>{var T=U(),q=D(T);{var J=B=>{var ne=Yd(),ue=ae(ne);G(()=>Y(ue,`No files match “${l(n)??""}”.`)),y(B,ne)},H=B=>{var ne=Jd();y(B,ne)},z=dt(()=>!l(n).trim());L(q,B=>{l(o)&&!l(s)?B(J):l(z)&&B(H,1)})}y(k,T)}),y(M,P)};L(S,M=>{_.connectionId?M(I,-1):M(C)})}Be(v,()=>l(n),M=>g(n,M)),y(e,c),it()}Mt(["click"]);var Qd=A('<p class="flex items-center gap-2 text-vs-muted"><!> Fetching host key…</p>'),ef=A('<p class="text-vs-red"> </p>'),tf=A("<p>This host is already trusted. Try connecting again.</p>"),nf=A('<div class="flex items-baseline gap-2 font-mono text-[11px]"><span class="w-16 shrink-0 text-vs-muted"> </span> <span class="break-all text-vs-fg"> </span></div>'),rf=A(`<p>The authenticity of <span class="font-mono text-vs-blue"> </span> can't be established. Verify these fingerprints match the server before you continue —
          if they don't, someone may be intercepting the connection.</p> <div class="mt-3 flex flex-col gap-1 rounded-sm border border-vs-line bg-vs-input p-2"></div> <p class="mt-3 text-xs text-vs-muted">Accepting adds the key to <span class="font-mono">~/.ssh/known_hosts</span> on this server.</p>`,1),sf=A('<button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"> </button>'),of=A('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="w-[min(560px,92vw)] overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="flex items-center gap-2 border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright"><!> Unknown host</div> <div class="px-4 py-3 text-[13px] leading-relaxed text-vs-fg"><!></div> <div class="flex justify-end gap-2 border-t border-vs-line px-4 py-3"><button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <!></div></div></div>');function af(e,t){ot(t,!0);let n=O(!0),r=O(""),s=O(null),o=O(!1);kr(async()=>{try{g(s,await de.hostKey(_.connectionId),!0)}catch(x){g(r,x.message||"Could not fetch the host key",!0)}finally{g(n,!1)}});async function i(){g(o,!0);try{await de.trustHost(_.connectionId),t.ontrusted()}catch(x){g(r,x.message||"Could not trust this host",!0),g(o,!1)}}var a=of(),c=$(a),d=$(c),f=$(d);Bu(f,{size:15,class:"text-vs-yellow"});var b=m(d,2),v=$(b);{var h=x=>{var k=Qd(),T=$(k);eo(T,{size:13,class:"animate-spin"}),y(x,k)},p=x=>{var k=ef(),T=ae(k,!0);G(()=>Y(T,l(r))),y(x,k)},w=x=>{var k=tf();y(x,k)},S=x=>{var k=rf(),T=D(k),q=m($(T)),J=ae(q),H=m(T,2);We(H,21,()=>l(s).fingerprints,z=>z.fingerprint,(z,B)=>{var ne=nf(),ue=$(ne),xe=ae(ue,!0),ve=m(ue,2),Ie=ae(ve,!0);G(()=>{Y(xe,l(B).type),Y(Ie,l(B).fingerprint)}),y(z,ne)}),G(()=>Y(J,`${l(s).host??""}:${l(s).port??""}`)),y(x,k)};L(v,x=>{var k;l(n)?x(h):l(r)?x(p,1):(k=l(s))!=null&&k.known?x(w,2):x(S,-1)})}var C=m(b,2),I=$(C),M=m(I,2);{var P=x=>{var k=sf(),T=ae(k,!0);G(()=>{k.disabled=l(o),Y(T,l(o)?"Trusting…":"Trust and connect")}),R("click",k,i),y(x,k)};L(M,x=>{var k;!l(n)&&!((k=l(s))!=null&&k.known)&&!l(r)&&x(P)})}R("click",a,x=>x.target===x.currentTarget&&t.onclose()),R("keydown",a,x=>x.key==="Escape"&&t.onclose()),R("click",I,function(...x){var k;(k=t.onclose)==null||k.apply(this,x)}),y(e,a),it()}Mt(["click","keydown"]);var lf=A('<div role="separator" tabindex="0" title="Drag to resize (double-click to reset)"><div></div></div>');function $o(e,t){ot(t,!0);let n=Me(t,"size",15),r=Me(t,"side",3,"right"),s=Me(t,"min",3,120),o=Me(t,"max",3,800),i=Me(t,"onreset",3,null),a=O(!1);const c=r()==="top";function d(p){var P;p.preventDefault(),g(a,!0);const w=c?p.clientY:p.clientX,S=n(),C=p.currentTarget;(P=C.setPointerCapture)==null||P.call(C,p.pointerId);function I(x){const T=(c?x.clientY:x.clientX)-w,q=r()==="left"||r()==="top"?-T:T;n(Math.round(Math.min(o(),Math.max(s(),S+q))))}function M(){var x;g(a,!1),(x=C.releasePointerCapture)==null||x.call(C,p.pointerId),window.removeEventListener("pointermove",I),window.removeEventListener("pointerup",M)}window.addEventListener("pointermove",I),window.addEventListener("pointerup",M)}function f(p){const w=p.shiftKey?40:10,S=c?"ArrowUp":r()==="left"?"ArrowLeft":"ArrowRight",C=c?"ArrowDown":r()==="left"?"ArrowRight":"ArrowLeft";if(p.key===S)n(Math.min(o(),n()+w));else if(p.key===C)n(Math.max(s(),n()-w));else return;p.preventDefault()}var b=lf();let v;var h=ae(b);G(()=>{v=Lt(b,1,`group relative shrink-0 ${c?"h-1 w-full cursor-row-resize":"w-1 cursor-col-resize"}`,null,v,{"bg-vs-accent":l(a)}),he(b,"aria-orientation",c?"horizontal":"vertical"),he(b,"aria-valuenow",n()),he(b,"aria-valuemin",s()),he(b,"aria-valuemax",o()),Lt(h,1,`absolute ${c?"-top-1 -bottom-1 left-0 right-0":"-left-1 -right-1 top-0 bottom-0"}
           transition-colors group-hover:bg-vs-accent ${l(a)?"bg-vs-accent":""}`)}),R("pointerdown",b,d),R("dblclick",b,()=>{var p;return(p=i())==null?void 0:p()}),R("keydown",b,f),y(e,b),it()}Mt(["pointerdown","dblclick","keydown"]);var cf=A('<span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>'),uf=A('<span class="absolute right-1.5 bottom-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-vs-status px-1 text-[10px] leading-none font-semibold text-white"> </span>'),df=A("<button><!> <!> <!></button>"),ff=A("<option> </option>"),vf=A('<button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover hover:text-vs-red" title="Remove workspace" aria-label="Remove workspace"><!></button>'),hf=A('<input class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),pf=A(`<button class="w-full rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Show this host's key fingerprint and trust it">Verify host key…</button>`),_f=A('<!> <button class="w-full rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"> </button> <!>',1),gf=A('<p class="mt-1 font-mono text-[11px] break-all text-vs-muted"> </p>'),mf=A('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="~/.ssh/id_ed25519"/> <textarea class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-[11px] outline-none focus:border-vs-accent" rows="4" placeholder="…or paste a private key (-----BEGIN OPENSSH PRIVATE KEY-----)" spellcheck="false"></textarea>',1),bf=A('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" type="password" placeholder="Password" autocomplete="new-password"/>'),yf=A('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Host" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="User" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Port" type="number" min="1" max="65535"/> <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!>',1),xf=A('<form class="mt-2 flex flex-col gap-1.5 border-t border-vs-line px-3 pt-2"><select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>This server (local folder)</option><option>Remote host over SSH</option></select> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"/> <div class="flex gap-1 pb-2"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110" type="submit">Create</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" type="button">Cancel</button></div></form>'),wf=A('<div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Workspaces</div> <div class="flex flex-col gap-2 px-3 pt-1"><select class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" aria-label="Workspace"><option>— select workspace —</option><!></select> <div class="flex gap-1"><button class="flex flex-1 items-center justify-center gap-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"><!> Open Folder</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Add a workspace or SSH connection" aria-label="Add workspace"><!></button> <!></div> <!> <!></div> <!>',1),$f=A('<aside class="flex shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel"><!></aside> <!>',1),kf=A('<div class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"><!> <div><h1 class="text-2xl font-light text-vs-fg">Multibuilder IDE</h1> <p class="mt-1 text-sm text-vs-muted">Edit files on this server or on a remote host over SSH.</p></div> <div class="flex flex-col gap-2 text-sm"><button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Open Folder… <kbd class="ml-2 rounded-sm border border-vs-line px-1.5 py-0.5 text-[10px] text-vs-muted">Ctrl+Shift+O</kbd></button> <button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Connect to a host over SSH…</button></div></div>'),Sf=A('<!> <div class="flex shrink-0 flex-col border-t border-vs-border bg-vs-bg"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1 text-[11px] tracking-wide uppercase"><!> Terminal <span class="text-vs-muted normal-case"> </span> <button class="ml-auto rounded-sm p-0.5 hover:bg-vs-hover" title="Hide panel" aria-label="Hide terminal panel"><!></button></div> <div class="min-h-0 flex-1"><!></div></div>',1),Ef=A('<!> <div class="min-h-0 flex-1"><!></div> <!>',1),Cf=A('<!> <aside class="flex shrink-0 flex-col overflow-hidden border-l border-vs-border bg-vs-panel"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1.5"><!> <span class="flex-1 text-[11px] font-semibold tracking-wide uppercase">Chat</span> <button class="rounded-sm p-0.5 hover:bg-vs-hover" title="Hide chat" aria-label="Hide chat"><!></button></div> <div class="min-h-0 flex-1"><!></div></aside>',1),Bi=A('<span class="flex items-center gap-1"><!> </span>'),Tf=A("<span> </span>"),Nf=A('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle terminal (Ctrl+`)"><!> Terminal</button> <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Focus the tmux window on the host"><!></button>',1),Mf=A('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle chat panel"><!> Chat</button>'),Pf=A('<div class="flex h-full flex-col overflow-hidden bg-vs-bg font-sans text-vs-fg"><header class="flex items-center gap-2 border-b border-vs-border bg-vs-titlebar px-3 py-1 text-xs"><!> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover" title="Open a folder on this server (Ctrl+Shift+O)">Open Folder…</button> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40" title="Open a file (Ctrl+P)">Open File…</button> <button><!> Terminal</button> <span class="mx-auto truncate text-vs-muted"> </span> <span><!> </span></header> <div class="flex min-h-0 flex-1"><nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity"><!> <div class="mt-auto flex flex-col items-center pb-1"><button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Account — signed in to the dashboard" aria-label="Account"><!></button> <button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Toggle side bar (Ctrl+B)" aria-label="Toggle side bar"><!></button></div></nav> <!> <section class="flex min-h-0 min-w-0 flex-1 flex-col"><!></section> <!></div> <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white"><!> <!> <span class="truncate"> </span> <span class="ml-auto flex items-center gap-3"><!> <span class="max-w-[40vw] truncate opacity-80"> </span> <!> <!></span></footer> <!> <!> <!></div>');function Af(e,t){ot(t,!0);let n=Me(t,"sessions",19,()=>[]),r=Me(t,"session",3,""),s=Me(t,"rootPath",3,""),o=O("files");function i(E,F){try{const j=localStorage.getItem(`ide.show.${E}`);return j===null?F:j==="1"}catch{return F}}let a=O(_e(i("chat",!0)));const c={sidebar:240,chat:320,panel:240};function d(E){try{const F=localStorage.getItem(`ide.size.${E}`),j=Number(F);return Number.isFinite(j)&&j>0?j:c[E]}catch{return c[E]}}let f=O(_e(d("sidebar"))),b=O(_e(d("chat"))),v=O(_e(d("panel")));tn(()=>{try{localStorage.setItem("ide.size.sidebar",String(l(f))),localStorage.setItem("ide.size.chat",String(l(b))),localStorage.setItem("ide.size.panel",String(l(v))),localStorage.setItem("ide.show.terminal",l(w)?"1":"0"),localStorage.setItem("ide.show.chat",l(a)?"1":"0"),localStorage.setItem("ide.show.sidebar",l(h)?"1":"0")}catch{}});let h=O(_e(i("sidebar",!0))),p=O(!1),w=O(_e(i("terminal",!1))),S=O(!1);tn(()=>{l(w)&&g(S,!0)});let C=O(!1),I=O(!1),M=O(""),P=O(_e({kind:"local",label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",private_key:"",workspace_root:"",max_file_bytes:1e6}));const x={idle:{icon:Su,label:"Not connected"},connecting:{icon:$u,label:"Connecting…"},connected:{icon:wu,label:"Connected"},reconnect:{icon:Ii,label:"Reconnect required"},error:{icon:Ii,label:"Error"}},k=dt(()=>x[_.connectionState].icon),T=dt(()=>{var E;return((E=_.connection)==null?void 0:E.kind)==="local"}),q=[{id:"files",icon:Au,label:"Explorer",keys:"Ctrl+Shift+E"},{id:"search",icon:si,label:"Search",keys:"Ctrl+Shift+F"},{id:"git",icon:Di,label:"Source Control",keys:"Ctrl+Shift+G"},{id:"remote",icon:Lu,label:"Remote Explorer",keys:""}];kr(async()=>{await _.loadConnections(),_.connectionId&&await _.refreshStatus()});function J(E){l(o)===E&&l(h)?g(h,!1):(g(o,E,!0),g(h,!0))}async function H(E){_.connectionId=E.currentTarget.value,_.resetWorkspaceView(),await _.refreshStatus()}async function z(E){g(I,!1);try{const F=E.split("/").filter(Boolean).pop()||E,j=_.connection;if(j&&j.kind!=="local"){await de.setWorkspaceRoot(j.id,E,F),await _.loadConnections(),_.resetWorkspaceView(),await _.refreshFiles("."),_.setStatus(`Opened ${E} on ${j.username}@${j.host}`),g(o,"files"),g(h,!0);return}if(j&&j.kind==="local"){await de.setWorkspaceRoot(j.id,E,F),await _.loadConnections(),_.resetWorkspaceView(),await _.refreshFiles("."),_.setStatus(`Opened ${E}`),g(o,"files"),g(h,!0);return}const $e=await de.createConnection({kind:"local",label:F,workspace_root:E,max_file_bytes:1e6});await _.loadConnections(),_.connectionId=$e.connection.id,_.resetWorkspaceView(),await _.connect(""),g(o,"files"),g(h,!0)}catch(F){_.setStatus(F.message||"Could not open folder")}}async function B(E){E.preventDefault();try{const F=await de.createConnection({...l(P),port:Number(l(P).port)});g(C,!1),g(P,{...l(P),label:"",host:"",username:"",password:"",private_key:""},!0),await _.loadConnections(),_.connectionId=F.connection.id,await _.refreshStatus()}catch(F){_.setStatus(F.message||"Could not create connection")}}async function ne(){const E=_.connection;if(!E)return;const F=E.kind==="local"?"workspace":"connection";if(confirm(`Remove ${F} "${E.label}"? Saved tabs are cleared; files are untouched.`))try{await de.deleteConnection(E.id),_.connectionId="",_.resetWorkspaceView(),await _.loadConnections()}catch(j){_.setStatus(j.message||"Could not delete")}}async function ue(){try{const E=await de.focusTerminal(_.connectionId);_.setStatus(`Focused ${E.window_name}`,"tmux window selected")}catch(E){_.setStatus(E.message||"Could not focus terminal")}}function xe(E){var ke,Oe,Ee,lt;const F=E.ctrlKey||E.metaKey,j=E.key.toLowerCase(),$e=((Oe=(ke=E.target)==null?void 0:ke.matches)==null?void 0:Oe.call(ke,"input, textarea, select"))&&!((lt=(Ee=E.target).closest)!=null&&lt.call(Ee,".monaco-editor"));F&&j==="s"?(E.preventDefault(),_.saveActive()):F&&j==="p"&&!$e?(E.preventDefault(),_.connectionId&&g(p,!0)):F&&E.shiftKey&&j==="o"?(E.preventDefault(),g(I,!0)):F&&E.shiftKey&&["e","f","g"].includes(j)?(E.preventDefault(),g(o,{e:"files",f:"search",g:"git"}[j],!0),g(h,!0)):F&&j==="b"&&!$e?(E.preventDefault(),g(h,!l(h))):F&&j==="`"?(E.preventDefault(),_.connectionState==="connected"&&g(w,!l(w))):E.key==="Escape"&&l(p)&&(E.preventDefault(),g(p,!1))}var ve=Pf();pr("keydown",Hs,xe);var Ie=$(ve),X=$(Ie);Oi(X,{size:15,class:"shrink-0 text-vs-blue"});var ee=m(X,2),Ce=m(ee,2),qe=m(Ce,2);let Ge;var be=$(qe);ji(be,{size:13});var we=m(qe,2),Fe=ae(we,!0),Le=m(we,2),yt=$(Le);Ei(yt,()=>l(k),(E,F)=>{F(E,{size:12})});var Pt=m(yt),fn=m(Ie,2),ht=$(fn),Bn=$(ht);We(Bn,17,()=>q,E=>E.id,(E,F)=>{var j=df(),$e=$(j);{var ke=Je=>{var pe=cf();y(Je,pe)};L($e,Je=>{l(o)===l(F).id&&l(h)&&Je(ke)})}var Oe=m($e,2);Ei(Oe,()=>l(F).icon,(Je,pe)=>{pe(Je,{size:24,strokeWidth:1.4})});var Ee=m(Oe,2);{var lt=Je=>{var pe=uf(),_n=ae(pe,!0);G(()=>Y(_n,_.gitDirtyCount)),y(Je,pe)};L(Ee,Je=>{l(F).id==="git"&&_.gitDirtyCount&&Je(lt)})}G(()=>{Lt(j,1,`relative flex h-12 w-12 items-center justify-center ${l(o)===l(F).id&&l(h)?"text-vs-bright":"text-vs-muted hover:text-vs-fg"}`),he(j,"title",l(F).keys?`${l(F).label} (${l(F).keys})`:l(F).label),he(j,"aria-label",l(F).label)}),R("click",j,()=>J(l(F).id)),y(E,j)});var vn=m(Bn,2),pt=$(vn),kn=$(pt);ku(kn,{size:24,strokeWidth:1.4});var Kn=m(pt,2),hn=$(Kn);Vu(hn,{size:24,strokeWidth:1.4});var pn=m(ht,2);{var Wn=E=>{var F=$f(),j=D(F),$e=$(j);{var ke=pe=>{Qu(pe,{})},Oe=pe=>{Zd(pe,{})},Ee=pe=>{ld(pe,{})},lt=pe=>{var _n=wf(),Gn=m(D(_n),2),Ht=$(Gn),Yn=$(Ht);Yn.value=Yn.__value="";var $s=m(Yn);We($s,17,()=>_.connections,Pe=>Pe.id,(Pe,He)=>{var Xe=ff(),En=ae(Xe),Kt={};G(()=>{Y(En,`${l(He).kind==="local"?"🖿 ":"⇅ "}${l(He).label??""}`),Kt!==(Kt=l(He).id)&&(Xe.value=(Xe.__value=Kt)??"")}),y(Pe,Xe)});var Jn;tr(Ht);var Cr=m(Ht,2),Tr=$(Cr),to=$(Tr);wo(to,{size:13});var Nr=m(Tr,2),Bt=$(Nr);Hu(Bt,{size:13});var no=m(Nr,2);{var ll=Pe=>{var He=vf(),Xe=$(He);Wu(Xe,{size:13}),R("click",He,ne),y(Pe,He)};L(no,Pe=>{_.connection&&Pe(ll)})}var ai=m(Cr,2);{var cl=Pe=>{var He=_f(),Xe=D(He);{var En=wt=>{var Cn=hf();Be(Cn,()=>l(M),so=>g(M,so)),y(wt,Cn)};L(Xe,wt=>{!l(T)&&!_.connection.has_password&&wt(En)})}var Kt=m(Xe,2),ks=ae(Kt,!0),Ss=m(Kt,2);{var ro=wt=>{var Cn=pf();R("click",Cn,()=>_.needsHostKey=!0),y(wt,Cn)};L(Ss,wt=>{l(T)||wt(ro)})}G(()=>Y(ks,l(T)?"Open workspace":"Connect")),R("click",Kt,()=>_.connect(l(M))),y(Pe,He)};L(ai,Pe=>{_.connection&&_.connectionState!=="connected"&&Pe(cl)})}var ul=m(ai,2);{var dl=Pe=>{var He=gf(),Xe=ae(He,!0);G(()=>Y(Xe,_.connection.workspace_root)),y(Pe,He)};L(ul,Pe=>{_.connection&&Pe(dl)})}var fl=m(Gn,2);{var vl=Pe=>{var He=xf(),Xe=$(He),En=$(Xe);En.value=En.__value="local";var Kt=m(En);Kt.value=Kt.__value="ssh",tr(Xe);var ks=m(Xe,2),Ss=m(ks,2);{var ro=sn=>{var li=yf(),ci=D(li),ui=m(ci,2),di=m(ui,2),Es=m(di,2),oo=$(Es);oo.value=oo.__value="agent";var io=m(oo);io.value=io.__value="key";var fi=m(io);fi.value=fi.__value="password",tr(Es);var vi=m(Es,2);{var hl=et=>{var Mr=mf(),Cs=D(Mr),gl=m(Cs,2);Be(Cs,()=>l(P).identity_file,ao=>l(P).identity_file=ao),Be(gl,()=>l(P).private_key,ao=>l(P).private_key=ao),y(et,Mr)};L(vi,et=>{l(P).auth_mode==="key"&&et(hl)})}var pl=m(vi,2);{var _l=et=>{var Mr=bf();Be(Mr,()=>l(P).password,Cs=>l(P).password=Cs),y(et,Mr)};L(pl,et=>{l(P).auth_mode==="password"&&et(_l)})}Be(ci,()=>l(P).host,et=>l(P).host=et),Be(ui,()=>l(P).username,et=>l(P).username=et),Be(di,()=>l(P).port,et=>l(P).port=et),Lo(Es,()=>l(P).auth_mode,et=>l(P).auth_mode=et),y(sn,li)};L(Ss,sn=>{l(P).kind==="ssh"&&sn(ro)})}var wt=m(Ss,2),Cn=m(wt,2),so=m($(Cn),2);G(()=>{he(wt,"placeholder",l(P).kind==="local"?"/var/www/app":"Workspace root"),wt.required=l(P).kind==="local"}),pr("submit",He,B),Lo(Xe,()=>l(P).kind,sn=>l(P).kind=sn),Be(ks,()=>l(P).label,sn=>l(P).label=sn),Be(wt,()=>l(P).workspace_root,sn=>l(P).workspace_root=sn),R("click",so,()=>g(C,!1)),y(Pe,He)};L(fl,Pe=>{l(C)&&Pe(vl)})}G(()=>{Jn!==(Jn=_.connectionId)&&(Ht.value=(Ht.__value=Jn)??"",gr(Ht,Jn))}),R("change",Ht,H),R("click",Tr,()=>g(I,!0)),R("click",Nr,()=>g(C,!l(C))),y(pe,_n)};L($e,pe=>{l(o)==="files"?pe(ke):l(o)==="search"?pe(Oe,1):l(o)==="git"?pe(Ee,2):pe(lt,-1)})}var Je=m(j,2);$o(Je,{side:"right",min:170,max:620,onreset:()=>g(f,c.sidebar,!0),get size(){return l(f)},set size(pe){g(f,pe,!0)}}),G(()=>Wr(j,`width: ${l(f)??""}px`)),y(E,F)};L(pn,E=>{l(h)&&E(Wn)})}var Un=m(pn,2),N=$(Un);{var K=E=>{var F=kf(),j=$(F);Oi(j,{size:64,strokeWidth:1,class:"text-vs-line"});var $e=m(j,4),ke=$($e),Oe=$(ke);wo(Oe,{size:16});var Ee=m(ke,2),lt=$(Ee);Li(lt,{size:16}),R("click",ke,()=>g(I,!0)),R("click",Ee,()=>{g(o,"remote"),g(h,!0),g(C,!0)}),y(E,F)},re=E=>{var F=Ef(),j=D(F);bd(j,{});var $e=m(j,2),ke=$($e);hd(ke,{});var Oe=m($e,2);{var Ee=lt=>{var Je=Sf(),pe=D(Je);{var _n=Bt=>{$o(Bt,{side:"top",min:120,max:640,onreset:()=>g(v,c.panel,!0),get size(){return l(v)},set size(no){g(v,no,!0)}})};L(pe,Bt=>{l(w)&&Bt(_n)})}var Gn=m(pe,2),Ht=$(Gn),Yn=$(Ht);ji(Yn,{size:13});var $s=m(Yn,2),Jn=ae($s,!0),Cr=m($s,2),Tr=$(Cr);Ks(Tr,{size:14});var to=m(Ht,2),Nr=$(to);Gc(Nr,()=>_.connectionId,Bt=>{jd(Bt,{get rootPath(){return s()},get session(){return r()}})}),G(()=>{var Bt;Wr(Gn,`height: ${l(v)??""}px`),he(Gn,"hidden",!l(w)),Y(Jn,((Bt=_.connection)==null?void 0:Bt.label)||"")}),R("click",Cr,()=>g(w,!1)),y(lt,Je)};L(Oe,lt=>{l(S)&&_.connectionState==="connected"&&lt(Ee)})}y(E,F)};L(N,E=>{_.connectionId?E(re,-1):E(K)})}var ye=m(Un,2);{var Te=E=>{var F=Cf(),j=D(F);$o(j,{side:"left",min:260,max:760,onreset:()=>g(b,c.chat,!0),get size(){return l(b)},set size(_n){g(b,_n,!0)}});var $e=m(j,2),ke=$($e),Oe=$(ke);Fi(Oe,{size:13});var Ee=m(Oe,4),lt=$(Ee);Ks(lt,{size:14});var Je=m(ke,2),pe=$(Je);Ad(pe,{get sessions(){return n()},get session(){return r()},get rootPath(){return s()}}),G(()=>Wr($e,`width: ${l(b)??""}px`)),R("click",Ee,()=>g(a,!1)),y(E,F)};L(ye,E=>{l(a)&&E(Te)})}var at=m(fn,2),je=$(at);{var Qe=E=>{var F=Bi(),j=$(F);{var $e=Ee=>{wo(Ee,{size:12})},ke=Ee=>{Li(Ee,{size:12})};L(j,Ee=>{l(T)?Ee($e):Ee(ke,-1)})}var Oe=m(j);G(()=>{he(F,"title",_.connection.workspace_root),Y(Oe,` ${_.connection.label??""}`)}),y(E,F)};L(je,E=>{_.connection&&E(Qe)})}var Ye=m(je,2);{var Ve=E=>{var F=Bi(),j=$(F);Di(j,{size:12});var $e=m(j);G(()=>Y($e,` ${_.gitBranch??""}`)),y(E,F)};L(Ye,E=>{_.gitBranch&&E(Ve)})}var xt=m(Ye,2),At=ae(xt,!0),Vt=m(xt,2),rn=$(Vt);{var Sr=E=>{var F=Tf(),j=ae(F);G(()=>Y(j,`${_.dirtyCount??""} unsaved`)),y(E,F)};L(rn,E=>{_.dirtyCount&&E(Sr)})}var qn=m(rn,2),Sn=ae(qn,!0),ws=m(qn,2);{var Er=E=>{var F=Nf(),j=D(F),$e=$(j);ju($e,{size:12});var ke=m(j,2),Oe=$(ke);Tu(Oe,{size:12}),R("click",j,()=>g(w,!l(w))),R("click",ke,ue),y(E,F)};L(ws,E=>{_.connectionState==="connected"&&E(Er)})}var nl=m(ws,2);{var rl=E=>{var F=Mf(),j=$(F);Fi(j,{size:12}),R("click",F,()=>g(a,!l(a))),y(E,F)};L(nl,E=>{E(rl)})}var oi=m(at,2);{var sl=E=>{Fd(E,{onclose:()=>g(p,!1)})};L(oi,E=>{l(p)&&E(sl)})}var ii=m(oi,2);{var ol=E=>{Ud(E,{onopen:z,onclose:()=>g(I,!1)})};L(ii,E=>{l(I)&&E(ol)})}var il=m(ii,2);{var al=E=>{af(E,{onclose:()=>_.needsHostKey=!1,ontrusted:async()=>{_.needsHostKey=!1,await _.connect(l(M))}})};L(il,E=>{_.needsHostKey&&E(al)})}G(()=>{var E;Ce.disabled=!_.connectionId,Ge=Lt(qe,1,"flex items-center gap-1 rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40",null,Ge,{"text-vs-bright":l(w)}),qe.disabled=_.connectionState!=="connected",he(qe,"title",_.connectionState==="connected"?"Toggle terminal (Ctrl+`)":"Open a workspace to use the terminal"),he(we,"title",(E=_.connection)==null?void 0:E.workspace_root),Y(Fe,_.connection?`${_.connection.label} — Multibuilder IDE`:"Multibuilder IDE"),Lt(Le,1,`flex items-center gap-1 ${_.connectionState==="connected"?"text-vs-green":_.connectionState==="connecting"?"text-vs-yellow":_.connectionState==="idle"?"text-vs-muted":"text-vs-red"}`),Y(Pt,` ${x[_.connectionState].label??""}`),Y(At,_.statusText),Y(Sn,_.detailText)}),R("click",ee,()=>g(I,!0)),R("click",Ce,()=>g(p,!0)),R("click",qe,()=>g(w,!l(w))),R("click",pt,()=>_.setStatus("Signed in to the Multibuilder dashboard")),R("click",Kn,()=>g(h,!l(h))),y(e,ve),it()}Mt(["click","change"]);function tl(e,t){return Kc(Af,{target:e,props:t})}function Ki(){const e=document.getElementById("ide-root");if(!e||e.dataset.mounted)return;e.dataset.mounted="1";const t=window.__IDE_BOOTSTRAP__||{};tl(e,{sessions:t.sessions||[],session:t.session||"",rootPath:t.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ki):Ki();window.mountRemoteIde=tl;export{Os as _};
