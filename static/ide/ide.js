const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css","./ide3.css"])))=>i.map(i=>d[i]);
var Tl=Object.defineProperty;var Po=e=>{throw TypeError(e)};var Nl=(e,t,n)=>t in e?Tl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var lt=(e,t,n)=>Nl(e,typeof t!="symbol"?t+"":t,n),Ea=(e,t,n)=>t.has(e)||Po("Cannot "+n);var u=(e,t,n)=>(Ea(e,t,"read from private field"),n?n.call(e):t.get(e)),K=(e,t,n)=>t.has(e)?Po("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),re=(e,t,n,r)=>(Ea(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),ve=(e,t,n)=>(Ea(e,t,"access private method"),n);var pa=Array.isArray,Ml=Array.prototype.indexOf,sa=Array.prototype.includes,_a=Array.from,ci=Object.defineProperty,Nn=Object.getOwnPropertyDescriptor,ui=Object.getOwnPropertyDescriptors,Pl=Object.prototype,zl=Array.prototype,io=Object.getPrototypeOf,zo=Object.isExtensible;function Kr(e){return typeof e=="function"}const Al=()=>{};function Il(e){return e()}function ja(e){for(var t=0;t<e.length;t++)e[t]()}function di(){var e,t,n=new Promise((r,s)=>{e=r,t=s});return{promise:n,resolve:e,reject:t}}function Ol(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const Ze=2,Nr=4,Fs=8,lo=1<<24,Vt=16,It=32,pn=64,Ba=128,co=256,zt=512,qe=1024,Ge=2048,Ut=4096,ft=8192,mt=16384,Ir=32768,aa=1<<25,An=65536,oa=1<<17,Rl=1<<18,Or=1<<19,fi=1<<20,tn=1<<25,sr=65536,ia=1<<21,xr=1<<22,Mn=1<<23,rn=Symbol("$state"),vi=Symbol("component"),hi=Symbol("legacy props"),Dl=Symbol(""),Js=Symbol("attributes"),Va=Symbol("class"),Ka=Symbol("style"),Gr=Symbol("text"),Xs=Symbol("form reset"),Hs=new class extends Error{constructor(){super(...arguments);lt(this,"name","StaleReactionError");lt(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var oi;const uo=!!((oi=globalThis.document)!=null&&oi.contentType)&&globalThis.document.contentType.includes("xml"),Ll=1,Fl=2,pi=4,Hl=8,jl=16,Bl=1,Vl=2,_i=4,Kl=8,Wl=16,Ul=1,ql=2,Be=Symbol("uninitialized"),gi="http://www.w3.org/1999/xhtml",mi="http://www.w3.org/2000/svg",Gl="http://www.w3.org/1998/Math/MathML",Yl="@attach";function Jl(){console.warn("https://svelte.dev/e/derived_inert")}function Xl(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function Zl(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function bi(e){return e===this.v}function Ql(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function xi(e){return!Ql(e,this.v)}function yi(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function ec(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function tc(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function nc(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function rc(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function sc(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ac(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function oc(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function ic(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function lc(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function cc(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function uc(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Rr=!1;function dc(){Rr=!0}let ze=null;function Mr(e){ze=e}function vt(e,t=!1,n){ze={p:ze,i:!1,c:null,e:null,s:e,x:null,r:le,l:Rr&&!t?{s:null,u:null,$:[]}:null}}function ht(e){var t=ze,n=t.e;if(n!==null){t.e=null;for(var r of n)Ki(r)}return t.i=!0,ze=t.p,fo(e)}function fo(e={}){return ci(e,vi,{value:!0}),e}function Dr(){return!Rr||ze!==null&&ze.l===null}let Gn=[];function wi(){var e=Gn;Gn=[],ja(e)}function nn(e){if(Gn.length===0&&!ns){var t=Gn;queueMicrotask(()=>{t===Gn&&wi()})}Gn.push(e)}function fc(){for(;Gn.length>0;)wi()}const vc=-7169;function Re(e,t){e.f=e.f&vc|t}function vo(e){(e.f&zt)!==0||e.deps===null?Re(e,qe):Re(e,Ut)}function ki(e){if(e!==null)for(const t of e)(t.f&Ze)===0||(t.f&sr)===0||(t.f^=sr,ki(t.deps))}function $i(e,t,n){(e.f&Ge)!==0?t.add(e):(e.f&Ut)!==0&&n.add(e),ki(e.deps),Re(e,qe)}let Gs=!1;function hc(e){var t=Gs;try{return Gs=!1,[e(),Gs]}finally{Gs=t}}function Si(e,t){if(t){const n=document.body;e.autofocus=!0,nn(()=>{document.activeElement===n&&e.focus()})}}let Ao=!1;function pc(){Ao||(Ao=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[Xs])==null||t.call(n)})},{capture:!0}))}function Lr(e){var t=ue,n=le;Rt(null),Dt(null);try{return e()}finally{Rt(t),Dt(n)}}function Ci(e,t,n,r=n){e.addEventListener(t,()=>Lr(n));const s=e[Xs];s?e[Xs]=()=>{s(),r(!0)}:e[Xs]=()=>r(!0),pc()}function Ei(e,t,n,r){const s=Dr()?Pr:ho;var a=e.filter(g=>!g.settled),o=t.map(s);if(n.length===0&&a.length===0){r(o);return}var l=le,c=_c(),d=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(g=>g.promise)):null;function f(g){if((l.f&mt)===0){c();try{r([...o,...g])}catch(m){en(m,l)}la()}}var x=Ti();if(n.length===0){d.then(()=>f([])).finally(x);return}function v(){Promise.all(n.map(g=>gc(g))).then(f).catch(g=>en(g,l)).finally(x)}d?d.then(()=>{c(),v(),la()}):v()}function _c(){var e=le,t=ue,n=ze,r=J;return function(a=!0){Dt(e),Rt(t),Mr(n),a&&(e.f&mt)===0&&(r==null||r.activate(),r==null||r.apply())}}function la(e=!0){Dt(null),Rt(null),Mr(null),e&&(J==null||J.deactivate())}function Ti(){var e=le,t=e.b,n=J,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function Pr(e){var t=Ze|Ge;return le!==null&&(le.f|=Or),{ctx:ze,deps:null,effects:null,equals:bi,f:t,fn:e,reactions:null,rv:0,v:Be,wv:0,parent:le,ac:null}}const Yr=Symbol("obsolete");function gc(e,t,n){let r=le;r===null&&ec();var s=void 0,a=_n(Be),o=!ue,l=new Set;return zc(()=>{var g,m;var c=le,d=di();s=d.promise;try{Promise.resolve(e()).then(d.resolve,w=>{w!==Hs&&d.reject(w)}).finally(la)}catch(w){d.reject(w),la()}var f=J;if(o){if((c.f&Ir)!==0)var x=Ti();if((g=r.b)!=null&&g.is_rendered())(m=f.async_deriveds.get(c))==null||m.reject(Yr);else for(const w of l.values())w.reject(Yr);l.add(d),f.async_deriveds.set(c,d)}const v=(w,S=void 0)=>{x==null||x(),l.delete(d),S!==Yr&&(f.activate(),S?(a.f|=Mn,zr(a,S)):((a.f&Mn)!==0&&(a.f^=Mn),zr(a,w)),f.deactivate())};d.promise.then(v,w=>v(null,w||"unknown"))}),ma(()=>{for(const c of l)c.reject(Yr)}),new Promise(c=>{function d(f){function x(){f===s?c(a):d(s)}f.then(x,x)}d(s)})}function dt(e){const t=Pr(e);return Xi(t),t}function ho(e){const t=Pr(e);return t.equals=xi,t}function mc(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)st(t[n])}}function po(e){var t,n=le,r=e.parent;if(!gn&&r!==null&&e.v!==Be&&(r.f&(mt|ft))!==0)return Jl(),e.v;Dt(r);try{e.f&=~sr,mc(e),t=tl(e)}finally{Dt(n)}return t}function Ni(e){var t=po(e);if(!e.equals(t)&&(e.wv=Qi(),(!(J!=null&&J.is_fork)||e.deps===null)&&(J!==null?(J.capture(e,t,!0),ts==null||ts.capture(e,t,!0)):e.v=t,e.deps===null))){Re(e,qe);return}gn||(rt!==null?(mo()||J!=null&&J.is_fork)&&rt.set(e,t):vo(e))}function bc(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&Lr(()=>{n.ac.abort(Hs),n.ac=null}),n.fn!==null&&(n.teardown=Al),is(n,0),xo(n))}function Mi(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Ar(t)}let Ta=null,gr=null,J=null,ts=null,rt=null,Wa=null,ns=!1,Na=!1,br=null,Zs=null;var Io=0;let xc=1;var wr,En,Xn,kr,$r,Sr,fn,Cr,pt,us,vn,jt,Xt,Er,Zn,$e,Ua,Jr,qa,Pi,zi,mr,yc,Xr;const fa=class fa{constructor(){K(this,$e);lt(this,"id",xc++);K(this,wr,!1);lt(this,"linked",!0);K(this,En,null);K(this,Xn,null);lt(this,"async_deriveds",new Map);lt(this,"current",new Map);lt(this,"previous",new Map);K(this,kr,new Set);K(this,$r,new Set);K(this,Sr,0);K(this,fn,new Map);K(this,Cr,null);K(this,pt,[]);K(this,us,[]);K(this,vn,new Set);K(this,jt,new Set);K(this,Xt,new Map);K(this,Er,new Set);lt(this,"is_fork",!1);K(this,Zn,!1);gr===null?Ta=gr=this:(re(gr,Xn,this),re(this,En,gr)),gr=this}skip_effect(t){u(this,Xt).has(t)||u(this,Xt).set(t,{d:[],m:[]}),u(this,Er).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=u(this,Xt).get(t);if(r){u(this,Xt).delete(t);for(var s of r.d)Re(s,Ge),n(s);for(s of r.m)Re(s,Ut),n(s)}u(this,Er).add(t)}capture(t,n,r=!1){t.v!==Be&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Mn)===0&&(this.current.set(t,[n,r]),rt==null||rt.set(t,n)),this.is_fork||(t.v=n)}activate(){J=this}deactivate(){J=null,rt=null}flush(){try{Na=!0,J=this,ve(this,$e,Jr).call(this)}finally{Io=0,Wa=null,br=null,Zs=null,Na=!1,J=null,rt=null,sn.clear()}}discard(){var t;for(const n of u(this,$r))n(this);u(this,$r).clear();for(const n of this.async_deriveds.values())n.reject(Yr);ve(this,$e,Xr).call(this),(t=u(this,Cr))==null||t.resolve()}register_created_effect(t){u(this,us).push(t)}increment(t,n){if(re(this,Sr,u(this,Sr)+1),t){let r=u(this,fn).get(n)??0;u(this,fn).set(n,r+1)}}decrement(t,n){if(re(this,Sr,u(this,Sr)-1),t){let r=u(this,fn).get(n)??0;r===1?u(this,fn).delete(n):u(this,fn).set(n,r-1)}u(this,Zn)||(re(this,Zn,!0),nn(()=>{re(this,Zn,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)u(this,vn).add(r);for(const r of n)u(this,jt).add(r);t.clear(),n.clear()}oncommit(t){u(this,kr).add(t)}ondiscard(t){u(this,$r).add(t)}settled(){return(u(this,Cr)??re(this,Cr,di())).promise}static ensure(){if(J===null){const t=J=new fa;!Na&&!ns&&nn(()=>{u(t,wr)||t.flush()})}return J}apply(){{rt=null;return}}schedule(t){var s;if(Wa=t,(s=t.b)!=null&&s.is_pending&&(t.f&(Nr|Fs|lo))!==0&&(t.f&Ir)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(br!==null&&n===le&&(ue===null||(ue.f&Ze)===0))return;if((r&(pn|It))!==0){if((r&qe)===0)return;n.f^=qe}}u(this,pt).push(n)}};wr=new WeakMap,En=new WeakMap,Xn=new WeakMap,kr=new WeakMap,$r=new WeakMap,Sr=new WeakMap,fn=new WeakMap,Cr=new WeakMap,pt=new WeakMap,us=new WeakMap,vn=new WeakMap,jt=new WeakMap,Xt=new WeakMap,Er=new WeakMap,Zn=new WeakMap,$e=new WeakSet,Ua=function(){if(this.is_fork)return!0;for(const r of u(this,fn).keys()){for(var t=r,n=!1;t.parent!==null;){if(u(this,Xt).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},Jr=function(){var c,d,f,x;re(this,wr,!0),Io++>1e3&&(ve(this,$e,Xr).call(this),kc());for(const v of u(this,vn))u(this,jt).delete(v),Re(v,Ge),this.schedule(v);for(const v of u(this,jt))Re(v,Ut),this.schedule(v);const t=u(this,pt);re(this,pt,[]),this.apply();var n=br=[],r=[],s=Zs=[];for(const v of t)try{ve(this,$e,qa).call(this,v,n,r)}catch(g){throw Oi(v),ve(this,$e,Ua).call(this)||this.discard(),g}if(J=null,s.length>0){var a=fa.ensure();for(const v of s)a.schedule(v)}if(br=null,Zs=null,ve(this,$e,Ua).call(this)){ve(this,$e,mr).call(this,r),ve(this,$e,mr).call(this,n);for(const[v,g]of u(this,Xt))Ii(v,g);s.length>0&&ve(c=J,$e,Jr).call(c);return}const o=ve(this,$e,Pi).call(this);if(o){ve(this,$e,mr).call(this,r),ve(this,$e,mr).call(this,n),ve(d=o,$e,zi).call(d,this);return}u(this,vn).clear(),u(this,jt).clear();for(const v of u(this,kr))v(this);u(this,kr).clear(),ts=this,Oo(r),Oo(n),ts=null,(f=u(this,Cr))==null||f.resolve();var l=J;if(u(this,Sr)===0&&(u(this,pt).length===0||l!==null)&&ve(this,$e,Xr).call(this),u(this,pt).length>0)if(l!==null){const v=l;u(v,pt).push(...u(this,pt).filter(g=>!u(v,pt).includes(g)))}else l=this;l!==null&&(sn.clear(),ve(x=l,$e,Jr).call(x))},qa=function(t,n,r){t.f^=qe;for(var s=t.first;s!==null;){var a=s.f,o=(a&(It|pn))!==0,l=o&&(a&qe)!==0,c=l||(a&ft)!==0||u(this,Xt).has(s);if(!c&&s.fn!==null){o?s.f^=qe:(a&Nr)!==0?n.push(s):Bs(s)&&((a&Vt)!==0&&u(this,jt).add(s),Ar(s));var d=s.first;if(d!==null){s=d;continue}}for(;s!==null;){var f=s.next;if(f!==null){s=f;break}s=s.parent}}},Pi=function(){for(var t=u(this,En);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=u(t,En)}return null},zi=function(t){var r;for(const[s,a]of t.current)!this.previous.has(s)&&t.previous.has(s)&&this.previous.set(s,t.previous.get(s)),this.current.set(s,a);for(const[s,a]of t.async_deriveds){const o=this.async_deriveds.get(s);o&&a.promise.then(o.resolve).catch(o.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,vn),u(t,jt));const n=s=>{var a=s.reactions;if(a!==null&&!((s.f&Ze)!==0&&(s.f&(Ge|Ut))===0))for(const c of a){var o=c.f;if((o&Ze)!==0)n(c);else{var l=c;o&(xr|Vt)&&!this.async_deriveds.has(l)&&(u(this,jt).delete(l),Re(l,Ge),this.schedule(l))}}};for(const s of this.current.keys())n(s);this.oncommit(()=>t.discard()),ve(r=t,$e,Xr).call(r),J=this,ve(this,$e,Jr).call(this)},mr=function(t){for(var n=0;n<t.length;n+=1)$i(t[n],u(this,vn),u(this,jt))},yc=function(){var x;for(let v=Ta;v!==null;v=u(v,Xn)){var t=v.id<this.id,n=[];for(const[g,[m,w]]of this.current){if(v.current.has(g)){var r=v.current.get(g)[0];if(t&&m!==r)v.current.set(g,[m,w]);else continue}n.push(g)}if(t)for(const[g,m]of this.async_deriveds){const w=v.async_deriveds.get(g);w&&m.promise.then(w.resolve).catch(w.reject)}var s=[...v.current.keys()].filter(g=>!v.current.get(g)[1]);if(!(!u(v,wr)||s.length===0)){var a=s.filter(g=>!this.current.has(g));if(a.length===0)t&&v.discard();else if(n.length>0){if(t)for(const g of u(this,Er))v.unskip_effect(g,m=>{var w;(m.f&(Vt|xr))!==0?v.schedule(m):ve(w=v,$e,mr).call(w,[m])});v.activate();var o=new Set,l=new Map;for(var c of n)Ai(c,a,o,l);l=new Map;var d=[...v.current].filter(([g,m])=>{const w=this.current.get(g);return w?w[0]!==m[0]||w[1]!==m[1]:!0}).map(([g])=>g);if(d.length>0)for(const g of u(this,us))(g.f&(mt|ft|oa))===0&&_o(g,d,l)&&((g.f&(xr|Vt))!==0?(Re(g,Ge),v.schedule(g)):u(v,vn).add(g));if(u(v,pt).length>0&&!u(v,Zn)){v.apply();for(var f of u(v,pt))ve(x=v,$e,qa).call(x,f,[],[]);re(v,pt,[])}v.deactivate()}}}},Xr=function(){if(this.linked){var t=u(this,En),n=u(this,Xn);t===null?Ta=n:re(t,Xn,n),n===null?gr=t:re(n,En,t),this.linked=!1}};let ar=fa;function wc(e){var t=ns;ns=!0;try{for(var n;;){if(fc(),J===null)return n;J.flush()}}finally{ns=t}}function kc(){try{ac()}catch(e){en(e,Wa)}}let Ht=null;function Oo(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(mt|ft))===0&&Bs(r)&&(Ht=new Set,Ar(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Gi(r),(Ht==null?void 0:Ht.size)>0)){sn.clear();for(const s of Ht){if((s.f&(mt|ft))!==0)continue;const a=[s];let o=s.parent;for(;o!==null;)Ht.has(o)&&(Ht.delete(o),a.push(o)),o=o.parent;for(let l=a.length-1;l>=0;l--){const c=a[l];(c.f&(mt|ft))===0&&Ar(c)}}Ht.clear()}}Ht=null}}function Ai(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const s of e.reactions){const a=s.f;(a&Ze)!==0?Ai(s,t,n,r):(a&(xr|Vt))!==0&&(a&Ge)===0&&_o(s,t,r)&&(Re(s,Ge),go(s))}}function _o(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const s of e.deps){if(sa.call(t,s))return!0;if((s.f&Ze)!==0&&_o(s,t,n))return n.set(s,!0),!0}return n.set(e,!1),!1}function go(e){J.schedule(e)}function Ii(e,t){if(!((e.f&It)!==0&&(e.f&qe)!==0)){(e.f&Ge)!==0?t.d.push(e):(e.f&Ut)!==0&&t.m.push(e),Re(e,qe);for(var n=e.first;n!==null;)Ii(n,t),n=n.next}}function Oi(e){Re(e,qe);for(var t=e.first;t!==null;)Oi(t),t=t.next}let ca=new Set;const sn=new Map;let Ri=!1;function _n(e,t){var n={f:0,v:e,reactions:null,equals:bi,rv:0,wv:0};return n}function A(e,t){const n=_n(e);return Xi(n),n}function $c(e,t=!1,n=!0){var s;const r=_n(e);return t||(r.equals=xi),Rr&&n&&ze!==null&&ze.l!==null&&((s=ze.l).s??(s.s=[])).push(r),r}function p(e,t,n=!1){ue!==null&&(!Wt||(ue.f&oa)!==0)&&Dr()&&(ue.f&(Ze|Vt|xr|oa))!==0&&(on===null||!on.has(e))&&cc();let r=n?Te(t):t;return zr(e,r,Zs)}function zr(e,t,n=null){if(!e.equals(t)){gn?sn.set(e,t):sn.has(e)||sn.set(e,e.v);var r=ar.ensure();if(r.capture(e,t),(e.f&Ze)!==0){const s=e;(e.f&Ge)!==0&&po(s),rt===null&&vo(s)}e.wv=Qi(),Di(e,Ge,n),Dr()&&le!==null&&(le.f&qe)!==0&&(le.f&(It|pn))===0&&(Nt===null?Ic([e]):Nt.push(e)),!r.is_fork&&ca.size>0&&!Ri&&Sc()}return t}function Sc(){Ri=!1;for(const e of ca){(e.f&qe)!==0&&Re(e,Ut);let t;try{t=Bs(e)}catch{t=!0}t&&Ar(e)}ca.clear()}function Ro(e,t=1){var n=i(e),r=t===1?n++:n--;return p(e,n),r}function rs(e){p(e,e.v+1)}function Di(e,t,n){var r=e.reactions;if(r!==null)for(var s=Dr(),a=r.length,o=0;o<a;o++){var l=r[o],c=l.f;if(!(!s&&l===le)){var d=(c&Ge)===0;if(d&&Re(l,t),(c&oa)!==0)ca.add(l);else if((c&Ze)!==0){var f=l;rt==null||rt.delete(f),(c&sr)===0&&(c&zt&&(le===null||(le.f&ia)===0)&&(l.f|=sr),Di(f,Ut,n))}else if(d){var x=l;(c&Vt)!==0&&Ht!==null&&Ht.add(x),n!==null?n.push(x):go(x)}}}}function Te(e){if(typeof e!="object"||e===null||rn in e||vi in e)return e;const t=io(e);if(t!==Pl&&t!==zl)return e;var n=new Map,r=pa(e),s=A(0),a=rr,o=l=>{if(rr===a)return l();var c=ue,d=rr;Rt(null),Fo(a);var f=l();return Rt(c),Fo(d),f};return r&&n.set("length",A(e.length)),new Proxy(e,{defineProperty(l,c,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&ic();var f=n.get(c);return f===void 0?o(()=>{var x=A(d.value);return n.set(c,x),x}):p(f,d.value,!0),!0},deleteProperty(l,c){var d=n.get(c);if(d===void 0){if(c in l){const f=o(()=>A(Be));n.set(c,f),rs(s)}}else p(d,Be),rs(s);return!0},get(l,c,d){var g;if(c===rn)return e;var f=n.get(c),x=c in l;if(f===void 0&&(!x||(g=Nn(l,c))!=null&&g.writable)&&(f=o(()=>{var m=Te(x?l[c]:Be),w=A(m);return w}),n.set(c,f)),f!==void 0){var v=i(f);return v===Be?void 0:v}return Reflect.get(l,c,d)},getOwnPropertyDescriptor(l,c){var d=Reflect.getOwnPropertyDescriptor(l,c);if(d&&"value"in d){var f=n.get(c);f&&(d.value=i(f))}else if(d===void 0){var x=n.get(c),v=x==null?void 0:x.v;if(x!==void 0&&v!==Be)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return d},has(l,c){var v;if(c===rn)return!0;var d=n.get(c),f=d!==void 0&&d.v!==Be||Reflect.has(l,c);if(d!==void 0||le!==null&&(!f||(v=Nn(l,c))!=null&&v.writable)){d===void 0&&(d=o(()=>{var g=f?Te(l[c]):Be,m=A(g);return m}),n.set(c,d));var x=i(d);if(x===Be)return!1}return f},set(l,c,d,f){var P;var x=n.get(c),v=c in l;if(r&&c==="length")for(var g=d;g<x.v;g+=1){var m=n.get(g+"");m!==void 0?p(m,Be):g in l&&(m=o(()=>A(Be)),n.set(g+"",m))}if(x===void 0)(!v||(P=Nn(l,c))!=null&&P.writable)&&(x=o(()=>A(void 0)),p(x,Te(d)),n.set(c,x));else{v=x.v!==Be;var w=o(()=>Te(d));p(x,w)}var S=Reflect.getOwnPropertyDescriptor(l,c);if(S!=null&&S.set&&S.set.call(f,d),!v){if(r&&typeof c=="string"){var T=n.get("length"),H=Number(c);Number.isInteger(H)&&H>=T.v&&p(T,H+1)}rs(s)}return!0},ownKeys(l){i(s);var c=Reflect.ownKeys(l).filter(x=>{var v=n.get(x);return v===void 0||v.v!==Be});for(var[d,f]of n)f.v!==Be&&!(d in l)&&c.push(d);return c},setPrototypeOf(){lc()}})}function Do(e){try{if(e!==null&&typeof e=="object"&&rn in e)return e[rn]}catch{}return e}function Li(e,t){return Object.is(Do(e),Do(t))}var os,Fi,Hi,ji;function Cc(){if(os===void 0){os=window,Fi=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Hi=Nn(t,"firstChild").get,ji=Nn(t,"nextSibling").get,zo(e)&&(e[Va]=void 0,e[Js]=null,e[Ka]=void 0,e.__e=void 0),zo(n)&&(n[Gr]=void 0)}}function an(e=""){return document.createTextNode(e)}function Kt(e){return Hi.call(e)}function js(e){return ji.call(e)}function y(e,t){return Kt(e)}function B(e,t=!1){{var n=Kt(e);return n instanceof Comment&&n.data===""?js(n):n}}function Z(e,t=!1){return Kt(e)}function h(e,t=1,n=!1){let r=e;for(;t--;)r=js(r);return r}function Ec(e){e.textContent=""}function Bi(){return!1}function ga(e,t,n){return t==null||t===gi?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Tc(e){var t=le;if(t===null)return ue.f|=Mn,e;if((t.f&Ir)===0&&(t.f&Nr)===0)throw e;en(e,t)}function en(e,t){if(!(t!==null&&(t.f&mt)!==0)){for(;t!==null;){if((t.f&Ba)!==0&&(t.f&(mt|aa))===0){if((t.f&Ir)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function Vi(e){le===null&&(ue===null&&sc(),rc()),gn&&nc()}function Nc(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function qt(e,t){var n=le;n!==null&&(n.f&ft)!==0&&(e|=ft);var r={ctx:ze,deps:null,nodes:null,f:e|Ge|zt,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};J==null||J.register_created_effect(r);var s=r;if((e&Nr)!==0)br!==null?br.push(r):ar.ensure().schedule(r);else if(t!==null){try{Ar(r)}catch(o){throw st(r),o}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&Or)===0&&(s=s.first,(e&Vt)!==0&&(e&An)!==0&&s!==null&&(s.f|=An))}if(s!==null&&(s.parent=n,n!==null&&Nc(s,n),ue!==null&&(ue.f&Ze)!==0&&(e&pn)===0)){var a=ue;(a.effects??(a.effects=[])).push(s)}return r}function mo(){return ue!==null&&!Wt}function ma(e){const t=qt(Fs,null);return Re(t,qe),t.teardown=e,t}function Ot(e){Vi();var t=le.f,n=!ue&&(t&It)!==0&&ze!==null&&!ze.i;if(n){var r=ze;(r.e??(r.e=[])).push(e)}else return Ki(e)}function Ki(e){return qt(Nr|fi,e)}function Mc(e){return Vi(),qt(Fs|fi,e)}function Pc(e){ar.ensure();const t=qt(pn|Or,e);return(n={})=>new Promise(r=>{n.outro?nr(t,()=>{st(t),r(void 0)}):(st(t),r(void 0))})}function ba(e){return qt(Nr,e)}function zc(e){return qt(xr|Or,e)}function bo(e,t=0){return qt(Fs|t,e)}function Y(e,t=[],n=[],r=[]){Ei(r,t,n,s=>{qt(Fs,()=>{e(...s.map(i))})})}function Fr(e,t=0){var n=qt(Vt|t,e);return n}function Wi(e,t=0){var n=qt(lo|t,e);return n}function _t(e){return qt(It|Or,e)}function Ui(e){var t=e.teardown;if(t!==null){const n=gn,r=ue;Lo(!0),Rt(null);try{t.call(null)}catch(s){en(s,e.parent)}finally{Lo(n),Rt(r)}}}function xo(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const s=n.ac;s!==null&&Lr(()=>{s.abort(Hs)});var r=n.next;(n.f&pn)!==0?n.parent=null:st(n,t),n=r}}function Ac(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&It)===0&&st(t),t=n}}function st(e,t=!0){var n=!1;(t||(e.f&Rl)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(qi(e.nodes.start,e.nodes.end),n=!0),e.f|=aa,xo(e,t&&!n),is(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const a of r)a.stop();Ui(e),e.f^=aa,e.f|=mt;var s=e.parent;s!==null&&s.first!==null&&Gi(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function qi(e,t){for(;e!==null;){var n=e===t?null:js(e);e.remove(),e=n}}function Gi(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function nr(e,t,n=!0){var r=[];e.f|=co,Yi(e,r,!0);var s=()=>{n&&st(e),t&&t()},a=r.length;if(a>0){var o=()=>--a||s();for(var l of r)l.out(o)}else s()}function Yi(e,t,n){if((e.f&ft)===0){e.f^=ft;var r=e.nodes&&e.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&t.push(l);for(var s=e.first;s!==null;){var a=s.next;if((s.f&pn)===0){var o=(s.f&An)!==0||(s.f&It)!==0&&(e.f&Vt)!==0;Yi(s,t,o?n:!1)}s=a}}}function ua(e){e.f&=~co,Ji(e,!0)}function Ji(e,t){if((e.f&co)===0&&(e.f&ft)!==0){e.f^=ft,(e.f&qe)===0&&(Re(e,Ge),ar.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,s=(n.f&An)!==0||(n.f&It)!==0;Ji(n,s?t:!1),n=r}var a=e.nodes&&e.nodes.t;if(a!==null)for(const o of a)(o.is_global||t)&&o.in()}}function yo(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var s=n===r?null:js(n);t.append(n),n=s}}let Qs=!1,gn=!1;function Lo(e){gn=e}let ue=null,Wt=!1;function Rt(e){ue=e}let le=null;function Dt(e){le=e}let on=null;function Xi(e){ue!==null&&(on??(on=new Set)).add(e)}let gt=null,Et=0,Nt=null;function Ic(e){Nt=e}let Zi=1,Yn=0,rr=Yn;function Fo(e){rr=e}function Qi(){return++Zi}function Bs(e){var t=e.f;if((t&Ge)!==0)return!0;if(t&Ze&&(e.f&=~sr),(t&Ut)!==0){for(var n=e.deps,r=n.length,s=0;s<r;s++){var a=n[s];if(Bs(a)&&Ni(a),a.wv>e.wv)return!0}(t&zt)!==0&&rt===null&&Re(e,qe)}return!1}function el(e,t,n=!0){var r=e.reactions;if(r!==null&&!(on!==null&&on.has(e)))for(var s=0;s<r.length;s++){var a=r[s];(a.f&Ze)!==0?el(a,t,!1):t===a&&(n?Re(a,Ge):(a.f&qe)!==0&&Re(a,Ut),go(a))}}function tl(e){var t=gt,n=Et,r=Nt,s=ue,a=on,o=ze,l=Wt,c=rr,d=e.f;gt=null,Et=0,Nt=null,ue=(d&(It|pn))===0?e:null,on=null,Mr(e.ctx),Wt=!1,rr=++Yn,e.ac!==null&&(Lr(()=>{e.ac.abort(Hs)}),e.ac=null);try{e.f|=ia;var f=e.fn,x=f();e.f|=Ir;var v=Ho(e);if(Dr()&&Nt!==null&&!Wt&&v!==null&&(e.f&(Ze|Ut|Ge))===0)for(var g=0;g<Nt.length;g++)el(Nt[g],e);if(s!==null&&s!==e){if(Yn++,s.deps!==null)for(let m=0;m<n;m+=1)s.deps[m].rv=Yn;if(t!==null)for(const m of t)m.rv=Yn;Nt!==null&&(r===null?r=Nt:r.push(...Nt))}return(e.f&Mn)!==0&&(e.f^=Mn),x}catch(m){return Ho(e),Tc(m)}finally{e.f^=ia,gt=t,Et=n,Nt=r,ue=s,on=a,Mr(o),Wt=l,rr=c}}function Ho(e){var s;var t=e.deps,n=J==null?void 0:J.is_fork;if(gt!==null){var r;if(n||is(e,Et),t!==null&&Et>0)for(t.length=Et+gt.length,r=0;r<gt.length;r++)t[Et+r]=gt[r];else e.deps=t=gt;if(mo()&&(e.f&zt)!==0)for(r=Et;r<t.length;r++)((s=t[r]).reactions??(s.reactions=[])).push(e)}else!n&&t!==null&&Et<t.length&&(is(e,Et),t.length=Et);return t}function Oc(e,t){let n=t.reactions;if(n!==null){var r=Ml.call(n,e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(t.f&Ze)!==0&&(gt===null||!sa.call(gt,t))){var a=t;(a.f&zt)!==0&&(a.f^=zt,a.f&=~sr),a.v!==Be&&vo(a),a.ac!==null&&Lr(()=>{a.ac.abort(Hs),a.ac=null,Re(a,Ge)}),bc(a),is(a,0)}}function is(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Oc(e,n[r])}function Ar(e){var t=e.f;if((t&mt)===0){Re(e,qe);var n=le,r=Qs;le=e,Qs=(t&(It|pn))===0;try{(t&(Vt|lo))!==0?Ac(e):xo(e),Ui(e);var s=tl(e);e.teardown=typeof s=="function"?s:null,e.wv=Zi;var a}finally{Qs=r,le=n}}}async function Rc(){await Promise.resolve(),wc()}function i(e){var t=e.f,n=(t&Ze)!==0;if(ue!==null&&!Wt){var r=le!==null&&(le.f&mt)!==0;if(!r&&(on===null||!on.has(e))){var s=ue.deps;if((ue.f&ia)!==0)e.rv<Yn&&(e.rv=Yn,gt===null&&s!==null&&s[Et]===e?Et++:gt===null?gt=[e]:gt.push(e));else{ue.deps??(ue.deps=[]),sa.call(ue.deps,e)||ue.deps.push(e);var a=e.reactions;a===null?e.reactions=[ue]:sa.call(a,ue)||a.push(ue)}}}if(gn&&sn.has(e))return sn.get(e);if(n){var o=e;if(gn){var l=o.v;return((o.f&qe)===0&&o.reactions!==null||rl(o))&&(l=po(o)),sn.set(o,l),l}var c=(o.f&zt)===0&&!Wt&&ue!==null&&(Qs||(ue.f&zt)!==0),d=(o.f&Ir)===0;Bs(o)&&(c&&(o.f|=zt),Ni(o)),c&&!d&&(Mi(o),nl(o))}if(rt!=null&&rt.has(e))return rt.get(e);if((e.f&Mn)!==0)throw e.v;return e.v}function nl(e){if(e.f|=zt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Ze)!==0&&(t.f&zt)===0&&(Mi(t),nl(t))}function rl(e){if(e.v===Be)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(sn.has(t)||(t.f&Ze)!==0&&rl(t))return!0;return!1}function mn(e){var t=Wt;try{return Wt=!0,e()}finally{Wt=t}}function Un(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(rn in e)Ga(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&rn in n&&Ga(n)}}}function Ga(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Ga(e[r],t)}catch{}const n=io(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=ui(n);for(let s in r){const a=r[s].get;if(a)try{a.call(e)}catch{}}}}}function Dc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Lc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Fc(e){return Lc.includes(e)}const Hc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function jc(e){return e=e.toLowerCase(),Hc[e]??e}const Bc=["touchstart","touchmove"];function Vc(e){return Bc.includes(e)}const Jn=Symbol("events"),sl=new Set,Ya=new Set;function al(e,t,n,r={}){function s(a){if(r.capture||Ja.call(t,a),!a.cancelBubble)return Lr(()=>n==null?void 0:n.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?nn(()=>{t.addEventListener(e,s,r)}):t.addEventListener(e,s,r),s}function or(e,t,n,r,s){var a={capture:r,passive:s},o=al(e,t,n,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&ma(()=>{t.removeEventListener(e,o,a)})}function O(e,t,n){(t[Jn]??(t[Jn]={}))[e]=n}function Lt(e){for(var t=0;t<e.length;t++)sl.add(e[t]);for(var n of Ya)n(e)}let Ma=null,Pa=!1;function Ja(e){var w,S;var t=this,n=t.ownerDocument,r=e.type,s=((w=e.composedPath)==null?void 0:w.call(e))||[],a=s[0]||e.target;Ma=e,Pa||(Pa=!0,setTimeout(()=>{Pa=!1,Ma=null}));var o=0,l=Ma===e&&e[Jn];if(l){var c=s.indexOf(l);if(c!==-1&&(t===document||t===window)){e[Jn]=t;return}var d=s.indexOf(t);if(d===-1)return;c<=d&&(o=c)}if(a=s[o]||e.target,a!==t){ci(e,"currentTarget",{configurable:!0,get(){return a||n}});var f=ue,x=le;Rt(null),Dt(null);try{for(var v,g=[];a!==null&&a!==t;){try{var m=(S=a[Jn])==null?void 0:S[r];m!=null&&(!a.disabled||e.target===a)&&m.call(a,e)}catch(T){v?g.push(T):v=T}if(e.cancelBubble)break;o++,a=o<s.length?s[o]:null}if(v){for(let T of g)queueMicrotask(()=>{throw T});throw v}}finally{e[Jn]=t,delete e.currentTarget,Rt(f),Dt(x)}}}var ii;const za=((ii=globalThis==null?void 0:globalThis.window)==null?void 0:ii.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Kc(e){return(za==null?void 0:za.createHTML(e))??e}function ol(e){var t=ga("template");return t.innerHTML=Kc(e.replaceAll("<!>","<!---->")),t.content}function In(e,t){var n=le;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function z(e,t){var n=(t&Ul)!==0,r=(t&ql)!==0,s,a=!e.startsWith("<!>");return()=>{s===void 0&&(s=ol(a?e:"<!>"+e),n||(s=Kt(s)));var o=r||Fi?document.importNode(s,!0):s.cloneNode(!0);if(n){var l=Kt(o),c=o.lastChild;In(l,c)}else In(o,o);return o}}function Wc(e,t,n="svg"){var r=!e.startsWith("<!>"),s=`<${n}>${r?e:"<!>"+e}</${n}>`,a;return()=>{if(!a){var o=ol(s),l=Kt(o);a=Kt(l)}var c=a.cloneNode(!0);return In(c,c),c}}function il(e,t){return Wc(e,t,"svg")}function jo(e=""){{var t=an(e+"");return In(t,t),t}}function X(){var e=document.createDocumentFragment(),t=document.createComment(""),n=an();return e.append(t,n),In(t,n),e}function b(e,t){e!==null&&e.before(t)}function Uc(e){let t=0,n=_n(0),r;return()=>{mo()&&(i(n),bo(()=>(t===0&&(r=mn(()=>e(()=>rs(n)))),t+=1,()=>{nn(()=>{t-=1,t===0&&(r==null||r(),r=void 0,rs(n))})})))}}var qc=An|Or;function Gc(e,t,n,r){new Yc(e,t,n,r)}var Mt,oo,Pt,Qn,ct,$t,ut,St,Zt,er,Tn,Tr,ds,fs,hn,va,Ne,Jc,Xc,Xa,Zc,Za,Zr,ea,Qa,eo;class Yc{constructor(t,n,r,s){K(this,Ne);lt(this,"parent");lt(this,"is_pending",!1);lt(this,"transform_error");K(this,Mt);K(this,oo,null);K(this,Pt);K(this,Qn);K(this,ct);K(this,$t,null);K(this,ut,null);K(this,St,null);K(this,Zt,null);K(this,er,0);K(this,Tn,0);K(this,Tr,!1);K(this,ds,new Set);K(this,fs,new Set);K(this,hn,null);K(this,va,Uc(()=>(re(this,hn,_n(u(this,er))),()=>{re(this,hn,null)})));var a;re(this,Mt,t),re(this,Pt,n),re(this,Qn,o=>{var l=le;l.b=this,l.f|=Ba,r(o)}),this.parent=le.b,this.transform_error=s??((a=this.parent)==null?void 0:a.transform_error)??(o=>o),re(this,ct,Fr(()=>{ve(this,Ne,Za).call(this)},qc))}defer_effect(t){$i(t,u(this,ds),u(this,fs))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,Pt).pending}update_pending_count(t,n){ve(this,Ne,Qa).call(this,t,n),re(this,er,u(this,er)+t),!(!u(this,hn)||u(this,Tr))&&(re(this,Tr,!0),nn(()=>{re(this,Tr,!1),u(this,hn)&&zr(u(this,hn),u(this,er))}))}get_effect_pending(){return u(this,va).call(this),i(u(this,hn))}error(t){if(!u(this,Pt).onerror&&!u(this,Pt).failed)throw t;J!=null&&J.is_fork?(u(this,$t)&&J.skip_effect(u(this,$t)),u(this,ut)&&J.skip_effect(u(this,ut)),u(this,St)&&J.skip_effect(u(this,St)),J.oncommit(()=>{ve(this,Ne,eo).call(this,t)})):ve(this,Ne,eo).call(this,t)}}Mt=new WeakMap,oo=new WeakMap,Pt=new WeakMap,Qn=new WeakMap,ct=new WeakMap,$t=new WeakMap,ut=new WeakMap,St=new WeakMap,Zt=new WeakMap,er=new WeakMap,Tn=new WeakMap,Tr=new WeakMap,ds=new WeakMap,fs=new WeakMap,hn=new WeakMap,va=new WeakMap,Ne=new WeakSet,Jc=function(){try{re(this,$t,_t(()=>u(this,Qn).call(this,u(this,Mt))))}catch(t){this.error(t)}},Xc=function(t){const n=u(this,Pt).failed,{reset:r,invoke_onerror:s}=ve(this,Ne,Xa).call(this,t);nn(s),n&&re(this,St,_t(()=>{n(u(this,Mt),()=>t,()=>r)}))},Xa=function(t){var n=!1,r=!1;const s=()=>{if(n){Zl();return}n=!0,r&&uc(),u(this,St)!==null&&nr(u(this,St),()=>{re(this,St,null)}),ve(this,Ne,ea).call(this,()=>{ve(this,Ne,Za).call(this)})};return{reset:s,invoke_onerror:()=>{var o,l;try{r=!0,(l=(o=u(this,Pt)).onerror)==null||l.call(o,t,s),r=!1}catch(c){en(c,u(this,ct)&&u(this,ct).parent)}}}},Zc=function(){const t=u(this,Pt).pending;t&&(this.is_pending=!0,re(this,ut,_t(()=>t(u(this,Mt)))),nn(()=>{var n=re(this,Zt,document.createDocumentFragment()),r=an(),s=!1;if(n.append(r),re(this,$t,ve(this,Ne,ea).call(this,()=>{try{return _t(()=>u(this,Qn).call(this,r))}catch(a){try{this.error(a),s=!0}catch(o){en(o,u(this,ct).parent)}return null}})),u(this,$t)===null){re(this,Zt,null),s&&ve(this,Ne,Zr).call(this,J);return}u(this,Tn)===0&&(u(this,Mt).before(n),re(this,Zt,null),nr(u(this,ut),()=>{re(this,ut,null)}),ve(this,Ne,Zr).call(this,J))}))},Za=function(){try{if(this.is_pending=this.has_pending_snippet(),re(this,Tn,0),re(this,er,0),re(this,$t,_t(()=>{u(this,Qn).call(this,u(this,Mt))})),u(this,Tn)>0){var t=re(this,Zt,document.createDocumentFragment());yo(u(this,$t),t);const n=u(this,Pt).pending;re(this,ut,_t(()=>n(u(this,Mt))))}else ve(this,Ne,Zr).call(this,J)}catch(n){this.error(n)}},Zr=function(t){this.is_pending=!1,t.transfer_effects(u(this,ds),u(this,fs))},ea=function(t){var n=le,r=ue,s=ze;Dt(u(this,ct)),Rt(u(this,ct)),Mr(u(this,ct).ctx);try{return ar.ensure(),t()}finally{Dt(n),Rt(r),Mr(s)}},Qa=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&ve(r=this.parent,Ne,Qa).call(r,t,n);return}re(this,Tn,u(this,Tn)+t),u(this,Tn)===0&&(ve(this,Ne,Zr).call(this,n),u(this,ut)&&nr(u(this,ut),()=>{re(this,ut,null)}),u(this,Zt)&&(u(this,Mt).before(u(this,Zt)),re(this,Zt,null)))},eo=function(t){u(this,$t)&&(st(u(this,$t)),re(this,$t,null)),u(this,ut)&&(st(u(this,ut)),re(this,ut,null)),u(this,St)&&(st(u(this,St)),re(this,St,null));let n=u(this,Pt).failed;const r=s=>{const{reset:a,invoke_onerror:o}=ve(this,Ne,Xa).call(this,s);o(),n&&re(this,St,ve(this,Ne,ea).call(this,()=>{try{return _t(()=>{var l=le;l.b=this,l.f|=Ba,n(u(this,Mt),()=>s,()=>a)})}catch(l){return en(l,u(this,ct).parent),null}}))};nn(()=>{var s;try{s=this.transform_error(t)}catch(a){en(a,u(this,ct)&&u(this,ct).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,a=>en(a,u(this,ct)&&u(this,ct).parent)):r(s)})};function U(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Gr]??(e[Gr]=e.nodeValue))&&(e[Gr]=n,e.nodeValue=`${n}`)}function Qc(e,t){return eu(e,t)}const Ys=new Map;function eu(e,{target:t,anchor:n,props:r={},events:s,context:a,intro:o=!0,transformError:l}){Cc();var c=void 0,d=Pc(()=>{var f=n??t.appendChild(an());Gc(f,{pending:()=>{}},g=>{vt({});var m=ze;a&&(m.c=a),s&&(r.$$events=s),c=e(g,r)||fo(),ht()},l);var x=new Set,v=g=>{for(var m=0;m<g.length;m++){var w=g[m];if(!x.has(w)){x.add(w);var S=Vc(w);for(const P of[t,document]){var T=Ys.get(P);T===void 0&&(T=new Map,Ys.set(P,T));var H=T.get(w);H===void 0?(P.addEventListener(w,Ja,{passive:S}),T.set(w,1)):T.set(w,H+1)}}}};return v(_a(sl)),Ya.add(v),()=>{var S;for(var g of x)for(const T of[t,document]){var m=Ys.get(T),w=m.get(g);--w==0?(T.removeEventListener(g,Ja),m.delete(g),m.size===0&&Ys.delete(T)):m.set(g,w)}Ya.delete(v),f!==n&&((S=f.parentNode)==null||S.removeChild(f))}});return tu.set(c,d),c}let tu=new WeakMap;var Bt,Qt,Ct,tr,vs,hs,ha;class xa{constructor(t,n=!0){lt(this,"anchor");K(this,Bt,new Map);K(this,Qt,new Map);K(this,Ct,new Map);K(this,tr,new Set);K(this,vs,!0);K(this,hs,t=>{if(u(this,Bt).has(t)){var n=u(this,Bt).get(t),r=u(this,Qt).get(n);if(r)ua(r),u(this,tr).delete(n);else{var s=u(this,Ct).get(n);s&&(ua(s.effect),u(this,Qt).set(n,s.effect),u(this,Ct).delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[a,o]of u(this,Bt)){if(u(this,Bt).delete(a),a===t)break;const l=u(this,Ct).get(o);l&&(st(l.effect),u(this,Ct).delete(o))}for(const[a,o]of u(this,Qt)){if(a===n||u(this,tr).has(a))continue;const l=()=>{if(Array.from(u(this,Bt).values()).includes(a)){var d=document.createDocumentFragment();yo(o,d),d.append(an()),u(this,Ct).set(a,{effect:o,fragment:d})}else st(o);u(this,tr).delete(a),u(this,Qt).delete(a)};u(this,vs)||!r?(u(this,tr).add(a),nr(o,l,!1)):l()}}});K(this,ha,t=>{u(this,Bt).delete(t);const n=Array.from(u(this,Bt).values());for(const[r,s]of u(this,Ct))n.includes(r)||(st(s.effect),u(this,Ct).delete(r))});this.anchor=t,re(this,vs,n)}ensure(t,n){var r=J,s=Bi();if(n&&!u(this,Qt).has(t)&&!u(this,Ct).has(t))if(s){var a=document.createDocumentFragment(),o=an();a.append(o),u(this,Ct).set(t,{effect:_t(()=>n(o)),fragment:a})}else u(this,Qt).set(t,_t(()=>n(this.anchor)));if(u(this,Bt).set(r,t),s){for(const[l,c]of u(this,Qt))l===t?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of u(this,Ct))l===t?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(u(this,hs)),r.ondiscard(u(this,ha))}else u(this,hs).call(this,r)}}Bt=new WeakMap,Qt=new WeakMap,Ct=new WeakMap,tr=new WeakMap,vs=new WeakMap,hs=new WeakMap,ha=new WeakMap;function F(e,t,n=!1){var r=new xa(e),s=n?An:0;function a(o,l){r.ensure(o,l)}Fr(()=>{var o=!1;t((l,c=0)=>{o=!0,a(c,l)}),o||a(-1,null)},s)}const nu=Symbol("NaN");function ru(e,t,n){var r=new xa(e),s=!Dr();Fr(()=>{var a=t();a!==a&&(a=nu),s&&a!==null&&typeof a=="object"&&(a={}),r.ensure(a,n)})}function ll(e,t){return t}function su(e,t,n){for(var r=[],s=t.length,a,o=t.length,l=0;l<s;l++){let x=t[l];nr(x,()=>{if(a){if(a.pending.delete(x),a.done.add(x),a.pending.size===0){var v=e.outrogroups;to(e,_a(a.done)),v.delete(a),v.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var c=r.length===0&&n!==null&&e.pending.size===0;if(c){var d=n,f=d.parentNode;Ec(f),f.append(d),e.items.clear()}to(e,t,!c)}else a={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function to(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const o of e.pending.values())for(const l of o)r.add(e.items.get(l).e)}for(var s=0;s<t.length;s++){var a=t[s];if(r!=null&&r.has(a)){a.f|=tn;const o=document.createDocumentFragment();yo(a,o)}else st(t[s],n)}}var Bo;function Ye(e,t,n,r,s,a=null){var o=e,l=new Map,c=(t&pi)!==0;if(c){var d=e;o=d.appendChild(an())}var f=null,x=ho(()=>{var P=n();return pa(P)?P:P==null?[]:_a(P)}),v,g=new Map,m=!0;function w(P){(H.effect.f&mt)===0&&(H.pending.delete(P),H.fallback=f,au(H,v,o,t,r),f!==null&&(v.length===0?(f.f&tn)===0?ua(f):(f.f^=tn,Qr(f,null,o)):nr(f,()=>{f=null})))}function S(P){H.pending.delete(P)}var T=Fr(()=>{v=i(x);for(var P=v.length,I=new Set,C=J,$=Bi(),M=0;M<P;M+=1){var Q=v[M],ee=r(Q,M),q=m?null:l.get(ee);q?(q.v&&zr(q.v,Q),q.i&&zr(q.i,M),$&&C.unskip_effect(q.e)):(q=ou(l,m?o:Bo??(Bo=an()),Q,ee,M,s,t,n),m||(q.e.f|=tn),l.set(ee,q)),I.add(ee)}if(P===0&&a&&!f&&(m?f=_t(()=>a(o)):(f=_t(()=>a(Bo??(Bo=an()))),f.f|=tn)),P>I.size&&tc(),!m)if(g.set(C,I),$){for(const[R,G]of l)I.has(R)||C.skip_effect(G.e);C.oncommit(w),C.ondiscard(S)}else w(C);i(x)}),H={effect:T,items:l,pending:g,outrogroups:null,fallback:f};m=!1}function Wr(e){for(;e!==null&&(e.f&It)===0;)e=e.next;return e}function au(e,t,n,r,s){var q,R,G,ce,be,De,Se,Qe,E;var a=(r&Hl)!==0,o=t.length,l=e.items,c=Wr(e.effect.first),d,f=null,x,v=[],g=[],m,w,S,T;if(a)for(T=0;T<o;T+=1)m=t[T],w=s(m,T),S=l.get(w).e,(S.f&tn)===0&&((R=(q=S.nodes)==null?void 0:q.a)==null||R.measure(),(x??(x=new Set)).add(S));for(T=0;T<o;T+=1){if(m=t[T],w=s(m,T),S=l.get(w).e,e.outrogroups!==null)for(const j of e.outrogroups)j.pending.delete(S),j.done.delete(S);if((S.f&ft)!==0&&(ua(S),a&&((ce=(G=S.nodes)==null?void 0:G.a)==null||ce.unfix(),(x??(x=new Set)).delete(S))),(S.f&tn)!==0)if(S.f^=tn,S===c)Qr(S,null,n);else{var H=f?f.next:c;S===e.effect.last&&(e.effect.last=S.prev),S.prev&&(S.prev.next=S.next),S.next&&(S.next.prev=S.prev),Sn(e,f,S),Sn(e,S,H),Qr(S,H,n),f=S,v=[],g=[],c=Wr(f.next);continue}if(S!==c){if(d!==void 0&&d.has(S)){if(v.length<g.length){var P=g[0],I;f=P.prev;var C=v[0],$=v[v.length-1];for(I=0;I<v.length;I+=1)Qr(v[I],P,n);for(I=0;I<g.length;I+=1)d.delete(g[I]);Sn(e,C.prev,$.next),Sn(e,f,C),Sn(e,$,P),c=P,f=$,T-=1,v=[],g=[]}else d.delete(S),Qr(S,c,n),Sn(e,S.prev,S.next),Sn(e,S,f===null?e.effect.first:f.next),Sn(e,f,S),f=S;continue}for(v=[],g=[];c!==null&&c!==S;)(d??(d=new Set)).add(c),g.push(c),c=Wr(c.next);if(c===null)continue}(S.f&tn)===0&&v.push(S),f=S,c=Wr(S.next)}if(e.outrogroups!==null){for(const j of e.outrogroups)j.pending.size===0&&(to(e,_a(j.done)),(be=e.outrogroups)==null||be.delete(j));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||d!==void 0){var M=[];if(d!==void 0)for(S of d)(S.f&ft)===0&&M.push(S);for(;c!==null;)(c.f&ft)===0&&c!==e.fallback&&M.push(c),c=Wr(c.next);var Q=M.length;if(Q>0){var ee=(r&pi)!==0&&o===0?n:null;if(a){for(T=0;T<Q;T+=1)(Se=(De=M[T].nodes)==null?void 0:De.a)==null||Se.measure();for(T=0;T<Q;T+=1)(E=(Qe=M[T].nodes)==null?void 0:Qe.a)==null||E.fix()}su(e,M,ee)}}a&&nn(()=>{var j,he;if(x!==void 0)for(S of x)(he=(j=S.nodes)==null?void 0:j.a)==null||he.apply()})}function ou(e,t,n,r,s,a,o,l){var c=(o&Ll)!==0?(o&jl)===0?$c(n,!1,!1):_n(n):null,d=(o&Fl)!==0?_n(s):null;return{v:c,i:d,e:_t(()=>(a(t,c??n,d??s,l),()=>{e.delete(r)}))}}function Qr(e,t,n){if(e.nodes)for(var r=e.nodes.start,s=e.nodes.end,a=t&&(t.f&tn)===0?t.nodes.start:n;r!==null;){var o=js(r);if(a.before(r),r===s)return;r=o}}function Sn(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function iu(e,t,n=!1,r=!1,s=!1,a=!1){var o=e,l="";if(n)var c=e;Y(()=>{var d=le;if(l!==(l=t()??"")){if(n){d.nodes=null,c.innerHTML=l,l!==""&&In(Kt(c),c.lastChild);return}if(d.nodes!==null&&(qi(d.nodes.start,d.nodes.end),d.nodes=null),l!==""){var f=r?mi:s?Gl:void 0,x=ga(r?"svg":s?"math":"template",f);x.innerHTML=l;var v=r||s?x:x.content;if(In(Kt(v),v.lastChild),r||s)for(;Kt(v);)o.before(Kt(v));else o.before(v)}}})}function se(e,t,n,r,s){var l,c;if((l=t.$$host)!=null&&l.$$shadowRoot){const d=ga("slot");b(e,d);return}var a=(c=t.$$slots)==null?void 0:c[n],o=!1;a===!0&&(a=t.children,o=!0),a===void 0||a(e,o?()=>r:r)}function Vo(e,t,n){var r=new xa(e);Fr(()=>{var s=t()??null;r.ensure(s,s&&(a=>n(a,s)))},An)}function lu(e,t,n,r,s,a){var o=null,l=e,c=new xa(l,!1);Fr(()=>{const d=t()||null;var f=mi;if(d===null){c.ensure(null,null);return}return c.ensure(d,x=>{if(d){if(o=ga(d,f),In(o,o),r){var v=null,g=o.appendChild(an());r(o,g),v==null||v.remove()}le.nodes.end=o,x.before(o)}}),()=>{}},An),ma(()=>{})}function cu(e,t){var n=void 0,r;Wi(()=>{n!==(n=t())&&(r&&(st(r),r=null),n&&(r=_t(()=>{ba(()=>n(e))})))})}function cl(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=cl(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function uu(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=cl(e))&&(r&&(r+=" "),r+=t);return r}function du(e){return typeof e=="object"?uu(e):e??""}const Ko=[...` 	
\r\f \v\uFEFF`];function fu(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var s of Object.keys(n))if(n[s])r=r?r+" "+s:s;else if(r.length)for(var a=s.length,o=0;(o=r.indexOf(s,o))>=0;){var l=o+a;(o===0||Ko.includes(r[o-1]))&&(l===r.length||Ko.includes(r[l]))?r=(o===0?"":r.substring(0,o))+r.substring(l+1):o=l}}return r===""?null:r}function Wo(e,t=!1){var n=t?" !important;":";",r="";for(var s of Object.keys(e)){var a=e[s];a!=null&&a!==""&&(r+=" "+s+": "+a+n)}return r}function Aa(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function vu(e,t){if(t){var n="",r,s;if(Array.isArray(t)?(r=t[0],s=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var a=!1,o=0,l=!1,c=[];r&&c.push(...Object.keys(r).map(Aa)),s&&c.push(...Object.keys(s).map(Aa));var d=0,f=-1;const w=e.length;for(var x=0;x<w;x++){var v=e[x];if(l?v==="/"&&e[x-1]==="*"&&(l=!1):a?a===v&&(a=!1):v==="/"&&e[x+1]==="*"?l=!0:v==='"'||v==="'"?a=v:v==="("?o++:v===")"&&o--,!l&&a===!1&&o===0){if(v===":"&&f===-1)f=x;else if(v===";"||x===w-1){if(f!==-1){var g=Aa(e.substring(d,f).trim());if(!c.includes(g)){v!==";"&&x++;var m=e.substring(d,x).trim();n+=" "+m+";"}}d=x+1,f=-1}}}}return r&&(n+=Wo(r)),s&&(n+=Wo(s,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function At(e,t,n,r,s,a){var o=e[Va];if(o!==n||o===void 0){var l=fu(n,r,a);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e[Va]=n}else if(a&&s!==a)for(var c in a){var d=!!a[c];(s==null||d!==!!s[c])&&e.classList.toggle(c,d)}return a}function Ia(e,t={},n,r){for(var s in n){var a=n[s];t[s]!==a&&(n[s]==null?e.style.removeProperty(s):e.style.setProperty(s,a,r))}}function ss(e,t,n,r){var s=e[Ka];if(s!==t){var a=vu(t,r);a==null?e.removeAttribute("style"):e.style.cssText=a,e[Ka]=t}else r&&(Array.isArray(r)?(Ia(e,n==null?void 0:n[0],r[0]),Ia(e,n==null?void 0:n[1],r[1],"important")):Ia(e,n,r));return r}function ul(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Uo(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,dl(e,!n||"__value"in e))}function dl(e,t){var n=e.__defaultValue,r=e.multiple,s=r?n??[]:null;if(!(r&&!pa(s))){var a=e.selectedIndex,o=t&&r?new Set(e.selectedOptions):null;for(var l of e.options){var c=yr(l);ul(l,r?s.includes(c):Li(c,n))}if(t)if(o!==null)for(l of e.options){var d=o.has(l);l.selected!==d&&(l.selected=d)}else e.selectedIndex!==a&&(e.selectedIndex=a)}}function ls(e,t,n=!1){if(e.multiple){if(t==null)return;if(!pa(t))return Xl();for(var r of e.options)r.selected=t.includes(yr(r));return}for(r of e.options){var s=yr(r);if(Li(s,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function as(e){var t=new MutationObserver(n=>{n.every(hu)||("__defaultValue"in e&&dl(e,!1),"__value"in e&&ls(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),ma(()=>{t.disconnect()})}function no(e,t,n=t){var r=new WeakSet,s=!0;Ci(e,"change",a=>{var o=a?"[selected]":":checked",l;if(e.multiple)l=[].map.call(e.querySelectorAll(o),yr);else{var c=e.querySelector(o)??e.querySelector("option:not([disabled])");l=c&&yr(c)}n(l),e.__value=l,J!==null&&r.add(J)}),ba(()=>{var a=t();if(e===document.activeElement){var o=J;if(r.has(o))return}if(ls(e,a,s),s&&a===void 0){var l=e.querySelector(":checked");l!==null&&(a=yr(l),n(a))}e.__value=a,s=!1})}function yr(e){return"__value"in e?e.__value:e.value}function hu(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const Ur=Symbol("class"),qr=Symbol("style"),fl=Symbol("is custom element"),vl=Symbol("is html"),pu=uo?"input":"INPUT",_u=uo?"option":"OPTION",hl=uo?"select":"SELECT";function fe(e,t,n,r){var s=pl(e);s[t]!==(s[t]=n)&&(t==="loading"&&(e[Dl]=n),n==null?e.removeAttribute(t):typeof n!="string"&&_l(e).has(t)?e[t]=n:e.setAttribute(t,n))}function gu(e,t,n,r,s=!1,a=!1){var o=pl(e),l=o[fl],c=!o[vl],d=t||{},f=e.nodeName===_u,x=e.nodeName===hl;for(var v in t)!(v in n)&&v[0]+v[1]!=="$$"&&(n[v]=null);n.class?n.class=du(n.class):n[Ur]&&(n.class=null),n[qr]&&(n.style??(n.style=null));var g=_l(e);if(e.nodeName===pu&&"type"in n&&("value"in n||"__value"in n)){var m=n.type;(m!==d.type||m===void 0&&e.hasAttribute("type"))&&(d.type=m,fe(e,"type",m))}for(const C in n){let $=n[C];if(f&&C==="value"&&$==null){e.value=e.__value="",d[C]=$;continue}if(C==="class"){var w=e.namespaceURI==="http://www.w3.org/1999/xhtml";At(e,w,$,r,t==null?void 0:t[Ur],n[Ur]),d[C]=$,d[Ur]=n[Ur];continue}if(C==="style"){ss(e,$,t==null?void 0:t[qr],n[qr]),d[C]=$,d[qr]=n[qr];continue}var S=d[C];if(!($===S&&!($===void 0&&e.hasAttribute(C)))){d[C]=$;var T=C[0]+C[1];if(T!=="$$")if(T==="on"){const M={},Q="$$"+C;let ee=C.slice(2);var H=Fc(ee);if(Dc(ee)&&(ee=ee.slice(0,-7),M.capture=!0),!H&&S){if($!=null)continue;e.removeEventListener(ee,d[Q],M),d[Q]=null}if(H)O(ee,e,$),Lt([ee]);else if($!=null){let q=function(R){d[C].call(this,R)};d[Q]=al(ee,e,q,M)}}else if(C==="style")fe(e,C,$);else if(C==="autofocus")Si(e,!!$);else if(!l&&(C==="__value"||C==="value"&&$!=null))e.value=e.__value=$;else if(C==="selected"&&f)ul(e,$);else{var P=C;c||(P=jc(P));var I=P==="defaultValue"||P==="defaultChecked";if(x&&P==="defaultValue")continue;if($==null&&!l&&!I)if(o[C]=null,P==="value"||P==="checked"){let M=e;const Q=t===void 0;if(P==="value"){let ee=M.defaultValue;M.removeAttribute(P),M.defaultValue=ee,M.value=M.__value=Q?ee:null}else{let ee=M.defaultChecked;M.removeAttribute(P),M.defaultChecked=ee,M.checked=Q?ee:!1}}else e.removeAttribute(C);else I||(l||typeof $!="string")&&g.has(P)?(e[P]=$,P in o&&(o[P]=Be)):typeof $!="function"&&fe(e,P,$)}}}return d}function qo(e,t,n=[],r=[],s=[],a,o=!1,l=!1){Ei(s,n,r,c=>{var d=void 0,f={},x=e.nodeName===hl,v=!1;if(Wi(()=>{var m=t(...c.map(i)),w=gu(e,d,m,a,o,l);if(v&&x){var S=e;"defaultValue"in m&&Uo(S,m.defaultValue),"value"in m&&ls(S,m.value)}for(let H of Object.getOwnPropertySymbols(f))m[H]||st(f[H]);for(let H of Object.getOwnPropertySymbols(m)){var T=m[H];H.description===Yl&&(!d||T!==d[H])&&(f[H]&&st(f[H]),f[H]=_t(()=>cu(e,()=>T))),w[H]=T}d=w}),x){var g=e;ba(()=>{var m=d;"defaultValue"in m&&Uo(g,m.defaultValue),ls(g,m.value,!0),as(g)})}v=!0})}function pl(e){return e[Js]??(e[Js]={[fl]:e.nodeName.includes("-"),[vl]:e.namespaceURI===gi})}var Go=new Map;function _l(e){var t=e.getAttribute("is")||e.nodeName,n=Go.get(t);if(n)return n;Go.set(t,n=new Set);for(var r,s=e,a=Element.prototype;a!==s;){r=ui(s);for(var o in r)r[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&n.add(o);s=io(s)}return n}function nt(e,t,n=t){var r=new WeakSet;Ci(e,"input",async s=>{var a=s?e.defaultValue:e.value;if(a=Oa(e)?Ra(a):a,n(a),J!==null&&r.add(J),await Rc(),a!==(a=t())){var o=e.selectionStart,l=e.selectionEnd,c=e.value.length;if(e.value=a??"",l!==null){var d=e.value.length;o===l&&l===c&&d>c?(e.selectionStart=d,e.selectionEnd=d):(e.selectionStart=o,e.selectionEnd=Math.min(l,d))}}}),mn(t)==null&&e.value&&(n(Oa(e)?Ra(e.value):e.value),J!==null&&r.add(J)),bo(()=>{var s=t();if(e===document.activeElement){var a=J;if(r.has(a))return}Oa(e)&&s===Ra(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Oa(e){var t=e.type;return t==="number"||t==="range"}function Ra(e){return e===""?null:+e}function Da(e,t){return e===t||(e==null?void 0:e[rn])===t}function cs(e=fo(),t,n,r){var s=ze.r,a=le;return ba(()=>{var o,l;return bo(()=>{o=l,l=[],mn(()=>{Da(n(...l),e)||(t(e,...l),o&&Da(n(...o),e)&&t(null,...o))})}),()=>{let c=a;for(;c!==s&&c.parent!==null&&c.parent.f&aa;)c=c.parent;const d=()=>{l&&Da(n(...l),e)&&t(null,...l)},f=c.teardown;c.teardown=()=>{d(),f==null||f()}}}),e}function gl(e=!1){const t=ze,n=t.l.u;if(!n)return;let r=()=>Un(t.s);if(e){let s=0,a={};const o=Pr(()=>{let l=!1;const c=t.s;for(const d in c)c[d]!==a[d]&&(a[d]=c[d],l=!0);return l&&s++,s});r=()=>i(o)}n.b.length&&Mc(()=>{Yo(t,r),ja(n.b)}),Ot(()=>{const s=mn(()=>n.m.map(Il));return()=>{for(const a of s)typeof a=="function"&&a()}}),n.a.length&&Ot(()=>{Yo(t,r),ja(n.a)})}function Yo(e,t){if(e.l.s)for(const n of e.l.s)i(n);t()}function mu(e){var t=_n(0);return function(){return arguments.length===1?(p(t,i(t)+1),arguments[0]):(i(t),e())}}const bu={get(e,t){if(!e.exclude.includes(t))return i(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=le;try{Dt(e.parent_effect),e.special[t]=Ve({get[t](){return e.props[t]}},t,_i)}finally{Dt(r)}}return e.special[t](n),Ro(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),Ro(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ne(e,t){return new Proxy({props:e,exclude:t,special:{},version:_n(0),parent_effect:le},bu)}const xu={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Kr(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let s=e.props[r];Kr(s)&&(s=s());const a=Nn(s,t);if(a&&a.set)return a.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Kr(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const s=Nn(r,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===rn||t===hi)return!1;for(let n of e.props)if(Kr(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(Kr(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function oe(...e){return new Proxy({props:e},xu)}function Ve(e,t,n,r){var I;var s=!Rr||(n&Vl)!==0,a=(n&Kl)!==0,o=(n&Wl)!==0,l=r,c=!0,d=void 0,f=()=>o&&s?(d??(d=Pr(r)),i(d)):(c&&(c=!1,l=o?mn(r):r),l);let x;if(a){var v=rn in e||hi in e;x=((I=Nn(e,t))==null?void 0:I.set)??(v&&t in e?C=>e[t]=C:void 0)}var g,m=!1;a?[g,m]=hc(()=>e[t]):g=e[t],g===void 0&&r!==void 0&&(g=f(),x&&(s&&oc(),x(g)));var w;if(s?w=()=>{var C=e[t];return C===void 0?f():(c=!0,C)}:w=()=>{var C=e[t];return C!==void 0&&(l=void 0),C===void 0?l:C},s&&(n&_i)===0)return w;if(x){var S=e.$$legacy;return(function(C,$){return arguments.length>0?((!s||!$||S||m)&&x($?w():C),C):w()})}var T=!1,H=((n&Bl)!==0?Pr:ho)(()=>(T=!1,w()));a&&i(H);var P=le;return(function(C,$){if(arguments.length>0){const M=$?i(H):s&&a?Te(C):C;return p(H,M),T=!0,l!==void 0&&(l=M),C}return gn&&T||(P.f&mt)!==0?H.v:i(H)})}function Hr(e){ze===null&&yi(),Rr&&ze.l!==null?yu(ze).m.push(e):Ot(()=>{const t=mn(e);if(typeof t=="function")return t})}function wo(e){ze===null&&yi(),Hr(()=>()=>mn(e))}function yu(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const wu="5";var li;typeof window<"u"&&((li=window.__svelte??(window.__svelte={})).v??(li.v=new Set)).add(wu);const qn=()=>window.__IDE_BOOTSTRAP__||{};function ku(e){const{rootPath:t="",session:n=""}=qn();return`${t}/api/sessions/${encodeURIComponent(n)}/ide${e}`}async function Ue(e,t={}){const n=await fetch(ku(e),t),r=await n.json().catch(()=>({}));if(!n.ok){const s=new Error(r.error||"Request failed");throw Object.assign(s,r),s}return r}const tt=(e,t)=>`/ssh-connections/${encodeURIComponent(e)}${t}`,ye={chat:async(e,t=80)=>{const{rootPath:n=""}=qn(),r=`${n}/api/sessions/${encodeURIComponent(e)}/ide/chat?limit=${t}`,s=await fetch(r),a=await s.json().catch(()=>({}));if(!s.ok)throw new Error(a.error||"Could not load chat");return a},browse:async(e="")=>{const{rootPath:t=""}=qn(),n=`${t}/api/ide/browse?path=${encodeURIComponent(e)}`,r=await fetch(n),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not browse folders");return s},sessionAgent:async e=>{const{rootPath:t=""}=qn(),n=await fetch(`${t}/api/sessions/${encodeURIComponent(e)}/agent`),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Could not read agent settings");return r},setSessionAgent:async(e,t)=>{const{rootPath:n=""}=qn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/agent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({agent:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not switch agent");return s},setSessionModel:async(e,t)=>{const{rootPath:n=""}=qn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/model`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change model");return s},setSessionEffort:async(e,t)=>{const{rootPath:n=""}=qn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/effort`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({effort:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change effort");return s},browseOn:(e,t="")=>Ue(tt(e,`/browse?path=${encodeURIComponent(t)}`)),setWorkspaceRoot:(e,t,n)=>Ue(tt(e,"/workspace-root"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({workspace_root:t,label:n})}),agentContext:e=>Ue(tt(e,"/agent-context")),hostKey:e=>Ue(tt(e,"/host-key")),trustHost:e=>Ue(tt(e,"/host-key"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accept:!0})}),listConnections:()=>Ue("/ssh-connections"),createConnection:e=>Ue("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),deleteConnection:e=>Ue(tt(e,""),{method:"DELETE"}),connect:(e,t)=>Ue(tt(e,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t||""})}),status:e=>Ue(tt(e,"/status?reconnect=1")),listFiles:(e,t)=>Ue(tt(e,`/files?path=${encodeURIComponent(t)}`)),searchFiles:(e,t,n)=>Ue(tt(e,`/files/search?path=${encodeURIComponent(t)}&query=${encodeURIComponent(n)}`)),readFile:(e,t)=>Ue(tt(e,`/file?path=${encodeURIComponent(t)}`)),saveFile:(e,t,n)=>Ue(tt(e,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t,content:n})}),fs:(e,t)=>Ue(tt(e,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),git:(e,t)=>Ue(tt(e,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),focusTerminal:e=>Ue(tt(e,"/focus-terminal"),{method:"POST"}),getWorkspace:e=>Ue(tt(e,"/workspace")),saveWorkspace:(e,t)=>Ue(tt(e,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})};var ps,_s,gs,ms,bs,xs,ys,ws,ks,$s,Ss,Cs,Es,Ts,Ns,Ms,Ps,zs,As,Is,Os,Rs,Ds,Ls;class $u{constructor(){K(this,ps,A(Te([])));K(this,_s,A(""));K(this,gs,A("idle"));K(this,ms,A("Ready"));K(this,bs,A("No file open"));K(this,xs,A("."));K(this,ys,A(Te([])));K(this,ws,A(Te({})));K(this,ks,A(Te({})));K(this,$s,A(""));K(this,Ss,A(Te([])));K(this,Cs,A(""));K(this,Es,A(""));K(this,Ts,A(""));K(this,Ns,A(Te([])));K(this,Ms,A(""));K(this,Ps,A(!1));K(this,zs,A(!1));K(this,As,A(0));K(this,Is,A(0));K(this,Os,A(!1));K(this,Rs,A(""));K(this,Ds,A(Te([])));K(this,Ls,A(!1));lt(this,"restoredKey","");lt(this,"persistTimer",null)}get connections(){return i(u(this,ps))}set connections(t){p(u(this,ps),t,!0)}get connectionId(){return i(u(this,_s))}set connectionId(t){p(u(this,_s),t,!0)}get connectionState(){return i(u(this,gs))}set connectionState(t){p(u(this,gs),t,!0)}get statusText(){return i(u(this,ms))}set statusText(t){p(u(this,ms),t,!0)}get detailText(){return i(u(this,bs))}set detailText(t){p(u(this,bs),t,!0)}get path(){return i(u(this,xs))}set path(t){p(u(this,xs),t,!0)}get entries(){return i(u(this,ys))}set entries(t){p(u(this,ys),t,!0)}get expanded(){return i(u(this,ws))}set expanded(t){p(u(this,ws),t,!0)}get treeChildren(){return i(u(this,ks))}set treeChildren(t){p(u(this,ks),t,!0)}get filter(){return i(u(this,$s))}set filter(t){p(u(this,$s),t,!0)}get tabs(){return i(u(this,Ss))}set tabs(t){p(u(this,Ss),t,!0)}get activeKey(){return i(u(this,Cs))}set activeKey(t){p(u(this,Cs),t,!0)}get gitOutput(){return i(u(this,Es))}set gitOutput(t){p(u(this,Es),t,!0)}get gitStatus(){return i(u(this,Ts))}set gitStatus(t){p(u(this,Ts),t,!0)}get gitBranches(){return i(u(this,Ns))}set gitBranches(t){p(u(this,Ns),t,!0)}get gitBranch(){return i(u(this,Ms))}set gitBranch(t){p(u(this,Ms),t,!0)}get needsHostKey(){return i(u(this,Ps))}set needsHostKey(t){p(u(this,Ps),t,!0)}get notARepo(){return i(u(this,zs))}set notARepo(t){p(u(this,zs),t,!0)}get gitAhead(){return i(u(this,As))}set gitAhead(t){p(u(this,As),t,!0)}get gitBehind(){return i(u(this,Is))}set gitBehind(t){p(u(this,Is),t,!0)}get gitHasUpstream(){return i(u(this,Os))}set gitHasUpstream(t){p(u(this,Os),t,!0)}get gitBusy(){return i(u(this,Rs))}set gitBusy(t){p(u(this,Rs),t,!0)}get gitCommits(){return i(u(this,Ds))}set gitCommits(t){p(u(this,Ds),t,!0)}get gitHistoryLoaded(){return i(u(this,Ls))}set gitHistoryLoaded(t){p(u(this,Ls),t,!0)}get connection(){return this.connections.find(t=>t.id===this.connectionId)||null}get activeTab(){return this.tabs.find(t=>t.key===this.activeKey)||null}get visibleEntries(){const t=this.filter.trim().toLowerCase();return t?this.entries.filter(n=>n.name.toLowerCase().includes(t)):this.entries}get dirtyCount(){return this.tabs.filter(t=>t.dirty).length}get gitDirtyCount(){return this.gitStatus.split(`
`).filter(t=>t.trim()&&!t.startsWith("##")).length}resetWorkspaceView(){this.tabs=[],this.activeKey="",this.restoredKey="",this.path=".",this.entries=[],this.expanded={},this.treeChildren={},this.filter="",this.gitOutput="",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.needsHostKey=!1,this.notARepo=!1,this.gitAhead=0,this.gitBehind=0,this.gitHasUpstream=!1,this.gitCommits=[],this.gitHistoryLoaded=!1}setStatus(t,n){this.statusText=t,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const t=await ye.listConnections();this.connections=t.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(t){this.setStatus(t.message||"Could not load connections")}}async refreshStatus(){var t,n,r;if(this.connectionId)try{const s=await ye.status(this.connectionId);s.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((t=this.connection)==null?void 0:t.label)||"SSH workspace"}`,`SSH terminal: ${s.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(s){this.connectionState="error",this.setStatus(s.message||"Could not check SSH connection")}}async connect(t){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await ye.connect(this.connectionId,t);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect"),this.needsHostKey=!!r.needs_host_key}}}async refreshFiles(t){if(!this.connectionId)return;const n=t||this.path||".";try{const r=await ye.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async toggleDirectory(t){if(this.expanded[t]){const n={...this.expanded};delete n[t],this.expanded=n;return}if(this.expanded={...this.expanded,[t]:!0},!this.treeChildren[t])try{const n=await ye.listFiles(this.connectionId,t);this.treeChildren={...this.treeChildren,[t]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}openDiffTab(t,n){const r=`${this.connectionId}|diff:${t}`,s=this.tabs.find(o=>o.key===r);if(s)return s.content=n,s.saved=n,this.activeKey=r,s;const a={key:r,path:`${t} (diff)`,content:n,saved:n,dirty:!1,readOnly:!0,language:"plaintext"};return this.tabs=[...this.tabs,a],this.activeKey=r,a}async openFile(t){if(!this.connectionId)return null;const n=`${this.connectionId}|${t}`,r=this.tabs.find(s=>s.key===n);if(r)return this.activeKey=n,r;try{const s=await ye.readFile(this.connectionId,t),a={key:`${this.connectionId}|${s.path}`,path:s.path,content:s.content||"",saved:s.content||"",dirty:!1};return this.tabs=[...this.tabs,a],this.activeKey=a.key,this.setStatus("Opened",a.path),this.remember(),a}catch(s){return this.setStatus(s.message||"Could not open remote file"),null}}updateContent(t,n){this.tabs=this.tabs.map(r=>r.key===t?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(t){var r;const n=this.tabs.find(s=>s.key===t);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(s=>s.key!==t),this.activeKey===t&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const t=this.activeTab;if(t)try{await ye.saveFile(this.connectionId,t.path,t.content),this.tabs=this.tabs.map(n=>n.key===t.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${t.path}`,t.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const t=`${this.connectionId}`;if(!t)return;let n=null;try{n=await ye.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===t)return;this.restoredKey=t;const r=(n==null?void 0:n.buffers)||{};for(const a of((n==null?void 0:n.tabs)||[]).slice(0,12)){const o=await this.openFile(a);o&&Object.prototype.hasOwnProperty.call(r,a)&&this.updateContent(o.key,r[a])}const s=this.tabs.find(a=>a.path===(n==null?void 0:n.active_path));s&&(this.activeKey=s.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const t={};for(const r of this.tabs)r.dirty&&(t[r.path]=r.content);try{await ye.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:t})}catch{}}async runGit(t,n={}){try{const r=await ye.git(this.connectionId,{action:t,path:this.path||".",...n});return r.not_a_repo?(this.gitOutput=r.error||"This folder is not a Git repository.",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.gitCommits=[],this.gitHistoryLoaded=!1,this.notARepo=!0,null):(this.notARepo=!1,this.gitAhead=r.ahead||0,this.gitBehind=r.behind||0,this.gitHasUpstream=!!r.has_upstream,t==="log"?(this.gitCommits=r.commits||[],this.gitHistoryLoaded=!0):t!=="show"&&(this.gitOutput=r.output||r.status||""),this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",["commit","switch","create_branch","pull","push","fetch"].includes(t)&&(this.gitHistoryLoaded=!1),r)}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}ps=new WeakMap,_s=new WeakMap,gs=new WeakMap,ms=new WeakMap,bs=new WeakMap,xs=new WeakMap,ys=new WeakMap,ws=new WeakMap,ks=new WeakMap,$s=new WeakMap,Ss=new WeakMap,Cs=new WeakMap,Es=new WeakMap,Ts=new WeakMap,Ns=new WeakMap,Ms=new WeakMap,Ps=new WeakMap,zs=new WeakMap,As=new WeakMap,Is=new WeakMap,Os=new WeakMap,Rs=new WeakMap,Ds=new WeakMap,Ls=new WeakMap;const _=new $u;dc();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Su={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Cu=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Jo=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var Eu=il("<svg><!><!></svg>");function ie(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]),r=ne(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);vt(t,!1);let s=Ve(t,"name",8,void 0),a=Ve(t,"color",8,"currentColor"),o=Ve(t,"size",8,24),l=Ve(t,"strokeWidth",8,2),c=Ve(t,"absoluteStrokeWidth",8,!1),d=Ve(t,"iconNode",24,()=>[]);gl();var f=Eu();qo(f,(g,m,w)=>({...Su,...g,...r,width:o(),height:o(),stroke:a(),"stroke-width":m,class:w}),[()=>Cu(r)?void 0:{"aria-hidden":"true"},()=>(Un(c()),Un(l()),Un(o()),mn(()=>c()?Number(l())*24/Number(o()):l())),()=>(Un(Jo),Un(s()),Un(n),mn(()=>Jo("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var x=y(f);Ye(x,1,d,ll,(g,m)=>{var w=dt(()=>Ol(i(m),2));let S=()=>i(w)[0],T=()=>i(w)[1];var H=X(),P=B(H);lu(P,S,!0,(I,C)=>{qo(I,()=>({...T()}))}),b(g,H)});var v=h(x);se(v,t,"default",{}),b(e,f),ht()}function Tu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]];ie(e,oe({name:"arrow-down-up"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Nu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];ie(e,oe({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function ta(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];ie(e,oe({name:"check"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Pn(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];ie(e,oe({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function na(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];ie(e,oe({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Xo(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];ie(e,oe({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Mu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ie(e,oe({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Pu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];ie(e,oe({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function zu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];ie(e,oe({name:"circle-user"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Au(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];ie(e,oe({name:"circle"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Iu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];ie(e,oe({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Ou(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];ie(e,oe({name:"corner-left-up"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Ru(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];ie(e,oe({name:"ellipsis"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Du(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];ie(e,oe({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Zo(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 16-3 3 3 3"}],["path",{d:"m9 22 3-3-3-3"}]];ie(e,oe({name:"file-code-corner"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Lu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];ie(e,oe({name:"file-diff"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Fu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];ie(e,oe({name:"file-plus"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function ko(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];ie(e,oe({name:"file"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Hu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];ie(e,oe({name:"files"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function La(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];ie(e,oe({name:"folder-open"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function ju(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];ie(e,oe({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Bu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];ie(e,oe({name:"folder"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function ro(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];ie(e,oe({name:"git-branch"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Vu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 16h.01"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{d:"M21.946 12.013H2.054"}],["path",{d:"M6 16h.01"}]];ie(e,oe({name:"hard-drive"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Ku(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];ie(e,oe({name:"history"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Wu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];ie(e,oe({name:"link-2"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function zn(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];ie(e,oe({name:"loader"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Qo(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];ie(e,oe({name:"message-square"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Uu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}]];ie(e,oe({name:"minus"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function qu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];ie(e,oe({name:"monitor-smartphone"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Gu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];ie(e,oe({name:"panel-bottom"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Yu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];ie(e,oe({name:"panel-left"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function so(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ie(e,oe({name:"plus"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function ao(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ie(e,oe({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function $o(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ie(e,oe({name:"search"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function ei(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];ie(e,oe({name:"server"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Ju(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];ie(e,oe({name:"shield-alert"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Fa(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ie(e,oe({name:"sparkles"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function ti(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];ie(e,oe({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Xu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ie(e,oe({name:"square"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Zu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ie(e,oe({name:"trash-2"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Qu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];ie(e,oe({name:"undo-2"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function da(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ie(e,oe({name:"x"},()=>n,{get iconNode(){return r},children:(s,a)=>{var o=X(),l=B(o);se(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}var ed=z('<span class="w-[14px] shrink-0"></span>'),td=il('<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.5 3.5h4l1.2 1.4h7.8v7.6H1.5z" fill="#c09553"></path></svg>'),nd=z('<div role="treeitem" tabindex="0"><!> <span class="flex shrink-0 items-center"><!></span> <span class="flex-1 truncate text-vs-fg"> </span> <span class="hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Rename"><span class="text-[11px] leading-none">✎</span></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Delete"><span class="text-[11px] leading-none">🗑</span></button></span></div> <!>',1);function ml(e,t){vt(t,!0);const n=dt(()=>t.dir==="."?t.entry.name:`${t.dir}/${t.entry.name}`),r=dt(()=>!!_.expanded[i(n)]),s=dt(()=>_.treeChildren[i(n)]||[]),a=dt(()=>{var R;return((R=_.activeTab)==null?void 0:R.path)===i(n)});async function o(){t.entry.is_dir?await _.toggleDirectory(i(n)):await _.openFile(i(n))}async function l(R){if(R.stopPropagation(),!!confirm(`Delete ${i(n)}? Folders must already be empty.`))try{await ye.fs(_.connectionId,{action:"delete",path:i(n)}),await _.refreshFiles()}catch(G){_.setStatus(G.message||"Could not delete")}}async function c(R){R.stopPropagation();const G=prompt("Rename to (relative path):",i(n));if(!(!G||G===i(n)))try{await ye.fs(_.connectionId,{action:"rename",path:i(n),new_path:G}),await _.refreshFiles()}catch(ce){_.setStatus(ce.message||"Could not rename")}}var d=nd(),f=B(d);let x;var v=y(f);{var g=R=>{var G=X(),ce=B(G);{var be=Se=>{Pn(Se,{size:14,class:"shrink-0 text-vs-muted"})},De=Se=>{na(Se,{size:14,class:"shrink-0 text-vs-muted"})};F(ce,Se=>{i(r)?Se(be):Se(De,-1)})}b(R,G)},m=R=>{var G=ed();b(R,G)};F(v,R=>{t.entry.is_dir?R(g):R(m,-1)})}var w=h(v,2),S=y(w);{var T=R=>{var G=td();b(R,G)},H=R=>{Wu(R,{size:14,class:"text-vs-muted"})},P=R=>{ko(R,{size:14,class:"text-vs-blue"})};F(S,R=>{t.entry.is_dir?R(T):t.entry.is_symlink?R(H,1):R(P,-1)})}var I=h(w,2),C=Z(I,!0),$=h(I,2),M=y($),Q=h(M,2),ee=h(f,2);{var q=R=>{var G=X(),ce=B(G);Ye(ce,17,()=>i(s),be=>be.name,(be,De)=>{{let Se=dt(()=>t.depth+1);ml(be,{get entry(){return i(De)},get dir(){return i(n)},get depth(){return i(Se)}})}}),b(R,G)};F(ee,R=>{t.entry.is_dir&&i(r)&&R(q)})}Y(()=>{x=At(f,1,"group flex cursor-pointer items-center gap-1 py-[2px] pr-1 text-[13px] hover:bg-vs-hover",null,x,{"bg-vs-active":i(a)}),ss(f,`padding-left: ${8+t.depth*12}px`),fe(f,"aria-expanded",t.entry.is_dir?i(r):void 0),fe(f,"aria-selected",i(a)),fe(f,"title",i(n)),U(C,t.entry.name),fe(M,"aria-label",`Rename ${t.entry.name??""}`),fe(Q,"aria-label",`Delete ${t.entry.name??""}`)}),O("click",f,o),O("keydown",f,R=>{(R.key==="Enter"||R.key===" ")&&(R.preventDefault(),o())}),O("click",M,c),O("click",Q,l),b(e,d),ht()}Lt(["click","keydown"]);var rd=z('<form class="px-2 pb-1"><input class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"/></form>'),sd=z('<p class="px-4 py-2 text-xs text-vs-muted">No folder opened.</p>'),ad=z('<p class="px-4 py-2 text-xs text-vs-muted">No files here</p>'),od=z('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase"><span class="flex-1 truncate">Explorer</span></div> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase"><!> <span class="flex-1 truncate"> </span> <span class="flex opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"><!></button></span></div> <!> <input class="mx-2 mb-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none focus:border-vs-accent" placeholder="Filter files…"/> <div class="min-h-0 flex-1 overflow-y-auto pb-2"><!></div></div>');function id(e,t){vt(t,!0);let n=A(""),r=A("");const s=(q,R)=>q==="."?R:`${q}/${R}`;async function a(q){q.preventDefault();const R=i(r).trim();if(R)try{await ye.fs(_.connectionId,{action:i(n)==="dir"?"create_dir":"create_file",path:s(_.path,R)}),p(n,""),p(r,""),await _.refreshFiles()}catch(G){_.setStatus(G.message||"Could not create")}}const o=dt(()=>{var q,R;return(((q=_.connection)==null?void 0:q.workspace_root)||"").split("/").filter(Boolean).pop()||((R=_.connection)==null?void 0:R.label)||"WORKSPACE"});var l=od(),c=h(y(l),2),d=y(c);Pn(d,{size:14,class:"shrink-0 text-vs-muted"});var f=h(d,2),x=Z(f,!0),v=h(f,2),g=y(v),m=y(g);Fu(m,{size:14});var w=h(g,2),S=y(w);ju(S,{size:14});var T=h(w,2),H=y(T);ao(H,{size:13});var P=h(c,2);{var I=q=>{var R=rd(),G=y(R);Si(G,!0),Y(()=>fe(G,"placeholder",i(n)==="dir"?"New folder name":"New file name")),or("submit",R,a),O("keydown",G,ce=>{ce.key==="Escape"&&p(n,"")}),or("blur",G,()=>{i(r).trim()||p(n,"")}),nt(G,()=>i(r),ce=>p(r,ce)),b(q,R)};F(P,q=>{i(n)&&q(I)})}var C=h(P,2),$=h(C,2),M=y($);{var Q=q=>{var R=sd();b(q,R)},ee=q=>{var R=X(),G=B(R);Ye(G,17,()=>_.visibleEntries,ce=>ce.name,(ce,be)=>{ml(ce,{get entry(){return i(be)},get dir(){return _.path},depth:0})},ce=>{var be=ad();b(ce,be)}),b(q,R)};F(M,q=>{_.connectionId?q(ee,-1):q(Q)})}Y(()=>{var q;fe(f,"title",(q=_.connection)==null?void 0:q.workspace_root),U(x,i(o))}),O("click",g,()=>{p(n,"file"),p(r,"")}),O("click",w,()=>{p(n,"dir"),p(r,"")}),O("click",T,()=>_.refreshFiles()),nt(C,()=>_.filter,q=>_.filter=q),b(e,l),ht()}Lt(["click","keydown"]);var ld=z('<div class="absolute top-full right-0 z-20 mt-1 min-w-[170px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"><button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Fetch</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Pull</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Push</button> <div class="my-1 h-px bg-vs-line"></div> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Create Branch…</button></div>'),cd=z(`<p class="mx-3 text-xs leading-relaxed text-vs-muted">This folder isn't a Git repository.<br/> Open a folder containing a <code class="rounded-sm bg-vs-input px-1">.git</code> directory,
      or run <code class="rounded-sm bg-vs-input px-1">git init</code> in the terminal.</p>`),ud=z('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Unstage"><!></button></span> <span> </span></div>'),dd=z('<div class="flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Staged Changes</span></button> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!>',1),fd=z('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Open changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Discard changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Stage changes"><!></button></span> <span> </span></div>'),vd=z('<p class="px-6 py-2 text-xs text-vs-muted">No changes.</p>'),hd=z('<div class="min-h-0 flex-1 overflow-y-auto"></div>'),pd=z('<span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span>'),_d=z('<span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh history" aria-label="Refresh history"><!></button></span> <!>',1),gd=z('<span class="shrink-0 rounded-sm bg-vs-line px-1 text-[10px] text-vs-blue"> </span>'),md=z('<div class="group flex cursor-pointer flex-col gap-0.5 py-1 pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><div class="flex min-w-0 items-center gap-1.5"><span class="truncate text-vs-fg"> </span> <!></div> <div class="flex min-w-0 items-center gap-1.5 text-[11px] text-vs-muted"><span class="shrink-0 font-mono text-vs-yellow"> </span> <span class="truncate"> </span> <span class="ml-auto shrink-0"> </span></div></div>'),bd=z('<p class="px-6 py-2 text-xs text-vs-muted"> </p>'),xd=z('<div class="max-h-[45%] min-h-0 flex-1 overflow-y-auto"></div>'),yd=z('<button class="flex items-center gap-1 rounded-sm px-1 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Pull then push"><!> </button>'),wd=z('<div class="flex gap-1 border-t border-vs-line px-3 py-2"><input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="New branch name"/> <button class="rounded-sm bg-vs-status px-2 py-1 text-xs text-white">Create</button></div>'),kd=z('<pre class="max-h-[120px] shrink-0 overflow-auto border-t border-vs-line px-3 py-1.5 text-[11px] whitespace-pre-wrap text-vs-muted"> </pre>'),$d=z('<div class="px-3 pb-2"><textarea class="w-full resize-none rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs text-vs-fg outline-none focus:border-vs-accent placeholder:text-vs-muted" rows="2"></textarea> <button class="mt-1 flex w-full items-center justify-center gap-1.5 rounded-sm bg-vs-status px-2 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"><!> Commit</button></div> <!> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Changes</span></button> <span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh" aria-label="Refresh"><!></button> <button class="rounded-sm p-0.5 hover:bg-vs-line" title="Stage all changes" aria-label="Stage all"><!></button></span> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!> <div class="group flex shrink-0 items-center gap-1 border-t border-vs-line px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <!> <span class="truncate">History</span></button> <!></div> <!> <div class="mt-auto flex items-center gap-2 border-t border-vs-line px-3 py-1.5 text-[11px]"><span class="flex min-w-0 items-center gap-1 text-vs-muted" title="Current branch"><!> <span class="truncate"> </span></span> <!></div> <!> <!>',1),Sd=z('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase"><span class="flex-1">Source Control</span> <div class="relative" data-scm-menu=""><button class="rounded-sm p-0.5 hover:bg-vs-hover" title="More actions" aria-label="More actions"><!></button> <!></div></div> <!></div>');function Cd(e,t){vt(t,!0);let n=A(""),r=A(""),s=A(!1),a=A(!0),o=A(!0),l=A(!1),c=A(!1);const d=dt(()=>(_.gitStatus||"").split(`
`).filter(E=>E&&!E.startsWith("##")).map(E=>{const j=E.slice(3),he=j.indexOf(" -> "),Me=he===-1?j:j.slice(he+4);return{index:E[0]===" "?"":E[0],work:E[1]===" "?"":E[1],code:E.slice(0,2).trim()||"??",path:Me.replace(/\r$/,""),from:he===-1?"":j.slice(0,he)}}).filter(E=>E.path)),f=dt(()=>i(d).filter(E=>E.index&&E.index!=="?")),x=dt(()=>i(d).filter(E=>E.work&&E.work!==" ")),v=E=>E.includes("?")||E.includes("A")?"text-vs-green":E.includes("D")?"text-vs-red":E.includes("R")?"text-vs-blue":"text-vs-yellow",g=E=>E.split("/").pop(),m=E=>{const j=E.split("/");return j.pop(),j.join("/")};async function w(E,j={}){_.gitBusy=E;try{return await _.runGit(E,j)}finally{_.gitBusy=""}}async function S(){if(!i(n).trim()||!i(f).length)return;await w("commit",{message:i(n).trim()})&&p(n,"")}async function T(){if(!i(r).trim())return;await w("create_branch",{branch:i(r).trim()})&&(p(r,""),p(s,!1))}async function H(E){confirm(`Discard changes in ${E.path}? This cannot be undone.`)&&await w("discard",{files:[E.path]})}async function P(E){const j=await _.runGit("diff_file",{files:[E.path]});j&&_.openDiffTab(E.path,j.output||"No changes to show.")}async function I(){p(l,!i(l)),i(l)&&!_.gitHistoryLoaded&&await w("log")}Ot(()=>{i(l)&&!_.gitHistoryLoaded&&!_.notARepo&&!_.gitBusy&&w("log")});async function C(E){const j=await _.runGit("show",{ref:E.hash});j&&_.openDiffTab(`${E.short} ${E.subject}`,j.output||"Empty commit.")}const $=E=>(E||"").split(",").map(j=>j.trim().replace(/^HEAD -> /,"")).filter(Boolean);function M(E){E.key==="Enter"&&(E.ctrlKey||E.metaKey)&&(E.preventDefault(),S())}var Q=Sd();or("click",os,E=>{var j,he;(he=(j=E.target).closest)!=null&&he.call(j,"[data-scm-menu]")||p(c,!1)});var ee=y(Q),q=h(y(ee),2),R=y(q),G=y(R);Ru(G,{size:14});var ce=h(R,2);{var be=E=>{var j=ld(),he=y(j),Me=h(he,2),Je=h(Me,2),bt=h(Je,4);O("click",he,()=>{p(c,!1),w("fetch")}),O("click",Me,()=>{p(c,!1),w("pull")}),O("click",Je,()=>{p(c,!1),w("push")}),O("click",bt,()=>{p(c,!1),p(s,!i(s))}),b(E,j)};F(ce,E=>{i(c)&&E(be)})}var De=h(ee,2);{var Se=E=>{var j=cd();b(E,j)},Qe=E=>{var j=$d(),he=B(j),Me=y(he),Je=h(Me,2),bt=y(Je);{var Gt=W=>{zn(W,{size:12,class:"animate-spin"})},On=W=>{ta(W,{size:12})};F(bt,W=>{_.gitBusy==="commit"?W(Gt):W(On,-1)})}var ln=h(he,2);{var ir=W=>{var Pe=dd(),_e=B(Pe),ae=y(_e),k=y(ae);{var D=xe=>{Pn(xe,{size:14,class:"text-vs-muted"})},L=xe=>{na(xe,{size:14,class:"text-vs-muted"})};F(k,xe=>{i(o)?xe(D):xe(L,-1)})}var ge=h(ae,2),we=Z(ge,!0),de=h(_e,2);{var pe=xe=>{var Ee=X(),me=B(Ee);Ye(me,17,()=>i(f),Xe=>Xe.path,(Xe,Fe)=>{var Ie=ud(),yt=y(Ie),Ke=Z(yt,!0),wt=h(yt,2),un=Z(wt,!0),$n=h(wt,2),jn=y($n),Bn=y(jn);Uu(Bn,{size:13});var kt=h($n,2),Br=Z(kt,!0);Y((Vn,Vs,ya)=>{fe(Ie,"title",i(Fe).path),U(Ke,Vn),U(un,Vs),fe(jn,"aria-label",`Unstage ${i(Fe).path??""}`),At(kt,1,`shrink-0 font-mono text-[11px] ${ya??""}`),U(Br,i(Fe).index||i(Fe).code)},[()=>g(i(Fe).path),()=>m(i(Fe).path),()=>v(i(Fe).code)]),O("click",Ie,()=>P(i(Fe))),O("keydown",Ie,Vn=>{Vn.key==="Enter"&&P(i(Fe))}),O("click",jn,Vn=>{Vn.stopPropagation(),w("unstage",{files:[i(Fe).path]})}),b(Xe,Ie)}),b(xe,Ee)};F(de,xe=>{i(o)&&xe(pe)})}Y(()=>U(we,i(f).length)),O("click",ae,()=>p(o,!i(o))),b(W,Pe)};F(ln,W=>{i(f).length&&W(ir)})}var Yt=h(ln,2),bn=y(Yt),Rn=y(bn);{var xn=W=>{Pn(W,{size:14,class:"text-vs-muted"})},lr=W=>{na(W,{size:14,class:"text-vs-muted"})};F(Rn,W=>{i(a)?W(xn):W(lr,-1)})}var yn=h(bn,2),Dn=y(yn),cr=y(Dn);ao(cr,{size:12});var Ln=h(Dn,2),ur=y(Ln);so(ur,{size:13});var dr=h(yn,2),fr=Z(dr,!0),Fn=h(Yt,2);{var jr=W=>{var Pe=hd();Ye(Pe,21,()=>i(x),_e=>_e.path,(_e,ae)=>{var k=fd(),D=y(k),L=Z(D,!0),ge=h(D,2),we=Z(ge,!0),de=h(ge,2),pe=y(de),xe=y(pe);Lu(xe,{size:13});var Ee=h(pe,2),me=y(Ee);Qu(me,{size:13});var Xe=h(Ee,2),Fe=y(Xe);so(Fe,{size:13});var Ie=h(de,2),yt=Z(Ie,!0);Y((Ke,wt,un)=>{fe(k,"title",i(ae).path),U(L,Ke),U(we,wt),fe(pe,"aria-label",`Open changes to ${i(ae).path??""}`),fe(Ee,"aria-label",`Discard changes to ${i(ae).path??""}`),fe(Xe,"aria-label",`Stage ${i(ae).path??""}`),At(Ie,1,`shrink-0 font-mono text-[11px] ${un??""}`),U(yt,i(ae).work||i(ae).code)},[()=>g(i(ae).path),()=>m(i(ae).path),()=>v(i(ae).code)]),O("click",k,()=>P(i(ae))),O("keydown",k,Ke=>{Ke.key==="Enter"&&P(i(ae))}),O("click",pe,Ke=>{Ke.stopPropagation(),P(i(ae))}),O("click",Ee,Ke=>{Ke.stopPropagation(),H(i(ae))}),O("click",Xe,Ke=>{Ke.stopPropagation(),w("stage",{files:[i(ae).path]})}),b(_e,k)},_e=>{var ae=vd();b(_e,ae)}),b(W,Pe)};F(Fn,W=>{i(a)&&W(jr)})}var vr=h(Fn,2),cn=y(vr),hr=y(cn);{var pr=W=>{Pn(W,{size:14,class:"text-vs-muted"})},_r=W=>{na(W,{size:14,class:"text-vs-muted"})};F(hr,W=>{i(l)?W(pr):W(_r,-1)})}var N=h(hr,2);Ku(N,{size:12,class:"shrink-0 text-vs-muted"});var V=h(cn,2);{var te=W=>{var Pe=_d(),_e=B(Pe),ae=y(_e),k=y(ae);{var D=de=>{zn(de,{size:12,class:"animate-spin"})},L=de=>{ao(de,{size:12})};F(k,de=>{_.gitBusy==="log"?de(D):de(L,-1)})}var ge=h(_e,2);{var we=de=>{var pe=pd(),xe=Z(pe,!0);Y(()=>U(xe,_.gitCommits.length)),b(de,pe)};F(ge,de=>{_.gitCommits.length&&de(we)})}O("click",ae,()=>w("log")),b(W,Pe)};F(V,W=>{i(l)&&W(te)})}var ke=h(vr,2);{var Ce=W=>{var Pe=xd();Ye(Pe,21,()=>_.gitCommits,_e=>_e.hash,(_e,ae)=>{var k=md(),D=y(k),L=y(D),ge=Z(L,!0),we=h(L,2);Ye(we,17,()=>$(i(ae).refs),ll,(Ie,yt)=>{var Ke=gd(),wt=Z(Ke,!0);Y(()=>U(wt,i(yt))),b(Ie,Ke)});var de=h(D,2),pe=y(de),xe=Z(pe,!0),Ee=h(pe,2),me=Z(Ee,!0),Xe=h(Ee,2),Fe=Z(Xe,!0);Y(()=>{fe(k,"title",`${i(ae).short} · ${i(ae).author} · ${i(ae).date}`),U(ge,i(ae).subject),U(xe,i(ae).short),U(me,i(ae).author),U(Fe,i(ae).relative)}),O("click",k,()=>C(i(ae))),O("keydown",k,Ie=>{Ie.key==="Enter"&&C(i(ae))}),b(_e,k)},_e=>{var ae=bd(),k=Z(ae,!0);Y(()=>U(k,_.gitBusy==="log"?"Loading history…":"No commits yet.")),b(_e,ae)}),b(W,Pe)};F(ke,W=>{i(l)&&W(Ce)})}var Oe=h(ke,2),Ae=y(Oe),He=y(Ae);ro(He,{size:12,class:"shrink-0"});var je=h(He,2),Le=Z(je,!0),at=h(Ae,2);{var xt=W=>{var Pe=yd(),_e=y(Pe);{var ae=L=>{zn(L,{size:11,class:"animate-spin"})},k=L=>{Tu(L,{size:11})};F(_e,L=>{_.gitBusy==="pull"||_.gitBusy==="push"?L(ae):L(k,-1)})}var D=h(_e);Y(()=>U(D,` ${_.gitBehind??""}↓ ${_.gitAhead??""}↑`)),O("click",Pe,()=>w("pull").then(()=>w("push"))),b(W,Pe)};F(at,W=>{_.gitHasUpstream&&W(xt)})}var Ft=h(Oe,2);{var wn=W=>{var Pe=wd(),_e=y(Pe),ae=h(_e,2);O("keydown",_e,k=>{k.key==="Enter"&&T(),k.key==="Escape"&&p(s,!1)}),nt(_e,()=>i(r),k=>p(r,k)),O("click",ae,T),b(W,Pe)};F(Ft,W=>{i(s)&&W(wn)})}var kn=h(Ft,2);{var Hn=W=>{var Pe=kd(),_e=Z(Pe,!0);Y(()=>U(_e,_.gitOutput)),b(W,Pe)};F(kn,W=>{_.gitOutput&&W(Hn)})}Y(W=>{fe(Me,"placeholder",`Message (Ctrl+Enter to commit on "${_.gitBranch||"branch"}")`),Je.disabled=W,fe(Je,"title",i(f).length?"Commit staged changes":"Stage a change first"),U(fr,i(x).length),U(Le,_.gitBranch||"—")},[()=>!i(n).trim()||!i(f).length||_.gitBusy==="commit"]),O("keydown",Me,M),nt(Me,()=>i(n),W=>p(n,W)),O("click",Je,S),O("click",bn,()=>p(a,!i(a))),O("click",Dn,()=>w("status")),O("click",Ln,()=>w("stage",{files:["."]})),O("click",cn,I),b(E,j)};F(De,E=>{_.notARepo?E(Se):E(Qe,-1)})}O("click",R,()=>p(c,!i(c))),b(e,Q),ht()}Lt(["click","keydown"]);const Ed="modulepreload",Td=function(e,t){return new URL(e,t).href},ni={},ra=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(f){return Promise.all(f.map(x=>Promise.resolve(x).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(f=>{if(f=Td(f,r),f in ni)return;ni[f]=!0;const x=f.endsWith(".css"),v=x?'[rel="stylesheet"]':"";if(!!r)for(let w=l.length-1;w>=0;w--){const S=l[w];if(S.href===f&&(!x||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${v}`))return;const m=document.createElement("link");if(m.rel=x?"stylesheet":Ed,x||(m.as="script"),m.crossOrigin="",m.href=f,d&&m.setAttribute("nonce",d),document.head.appendChild(m),x)return new Promise((w,S)=>{m.addEventListener("load",w),m.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${f}`)))})}))}function a(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&a(l.reason);return t().catch(a)})},es={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},Nd={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function Md(e){var n;const t=(e||"").split("/").pop()||"";return t.toLowerCase()==="dockerfile"?"dockerfile":t.toLowerCase()==="makefile"?"shell":Nd[(n=t.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var Pd=z('<div class="editor svelte-1h8xysy"></div>');function zd(e,t){vt(t,!0);let n,r=null,s=null,a="",o=!1;Hr(async()=>{s=await ra(()=>import("./ide-monaco.js").then(c=>c.a),__vite__mapDeps([0,1]),import.meta.url),s.editor.defineTheme("monokai",es),r=s.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{o||!a||_.updateContent(a,r.getValue())}),r.addCommand(s.KeyMod.CtrlCmd|s.KeyCode.KeyS,()=>_.saveActive())}),wo(()=>r==null?void 0:r.dispose()),Ot(()=>{const c=_.activeTab;if(!(!r||!s)){if(!c){o=!0,r.setValue(""),a="",o=!1;return}if(c.key!==a){o=!0;const d=s.editor.createModel(c.content,c.language||Md(c.path)),f=r.getModel();r.setModel(d),f==null||f.dispose(),r.updateOptions({readOnly:!!c.readOnly}),a=c.key,o=!1}else r.getValue()!==c.content&&(o=!0,r.setValue(c.content),o=!1)}});var l=Pd();cs(l,c=>n=c,()=>n),b(e,l),ht()}var Cn=mu(()=>_),Ad=z('<span class="h-2 w-2 rounded-full bg-vs-fg group-hover:hidden"></span> <!>',1),Id=z('<div><button class="flex items-center gap-1.5 py-2 pr-1 pl-3" role="tab"><!> <span class="whitespace-nowrap"> </span></button> <button class="mr-1.5 flex h-5 w-5 items-center justify-center rounded-sm hover:bg-vs-line"><!></button></div>'),Od=z('<div class="px-3 py-2 text-xs text-vs-muted">Open a file from the Explorer</div>'),Rd=z('<div class="flex min-h-[35px] items-stretch overflow-x-auto bg-vs-tabinactive" role="tablist"></div>');function Dd(e,t){vt(t,!1);const n=s=>s.split("/").pop();gl();var r=Rd();Ye(r,5,()=>Cn().tabs,s=>s.key,(s,a)=>{var o=Id();let l;var c=y(o),d=y(c);ko(d,{size:14,class:"shrink-0 text-vs-blue"});var f=h(d,2),x=Z(f,!0),v=h(c,2),g=y(v);{var m=S=>{var T=Ad(),H=h(B(T),2);da(H,{size:14,class:"hidden group-hover:block"}),b(S,T)},w=S=>{da(S,{size:14,class:"opacity-0 group-hover:opacity-100"})};F(g,S=>{i(a).dirty?S(m):S(w,-1)})}Y((S,T)=>{l=At(o,1,"group flex items-center border-r border-vs-bg text-[13px]",null,l,{"bg-vs-tabactive":i(a).key===Cn().activeKey,"text-vs-bright":i(a).key===Cn().activeKey,"text-vs-muted":i(a).key!==Cn().activeKey}),fe(c,"aria-selected",i(a).key===Cn().activeKey),fe(c,"title",i(a).path),U(x,S),fe(v,"title",i(a).dirty?"Unsaved changes — close":"Close"),fe(v,"aria-label",`Close ${T??""}`)},[()=>n(i(a).path),()=>n(i(a).path)]),O("click",c,()=>Cn(Cn().activeKey=i(a).key)),O("click",v,()=>Cn().closeTab(i(a).key)),b(s,o)},s=>{var a=Od();b(s,a)}),b(e,r),ht()}Lt(["click"]);var Ld=z("<option> </option>"),Fd=z('<p class="rounded-sm border border-mk-pink/40 bg-mk-pink/10 px-2 py-1 text-xs text-mk-pink"> </p>'),Hd=z('<div class="flex flex-col gap-1.5"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green"><!> </span> <div class="chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"></div></div>'),jd=z('<div class="flex flex-col gap-1.5 border-l-2 border-mk-blue/60 pl-2.5"><span class="text-[11px] font-semibold text-mk-blue">You</span> <div class="text-[13px] leading-relaxed whitespace-pre-wrap text-mk-fg/90"> </div></div>'),Bd=z(`<div class="m-auto flex max-w-[250px] flex-col items-center gap-2.5 text-center"><!> <p class="text-xs leading-relaxed text-mk-comment">Ask about the file you have open. The prompt goes to <span class="text-mk-muted"> </span>,
            and the reply appears here.</p></div>`),Vd=z('<div class="flex items-center gap-2 text-[11px] text-mk-comment"><!> Working…</div>'),ri=z('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line"><span class="w-3 text-mk-green"><!></span> </button>'),Kd=z('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[150px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl"></div>'),Wd=z('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line"><span class="w-3 text-mk-green"><!></span> <span class="truncate"> </span></button>'),Ud=z('<div class="absolute bottom-full left-0 z-20 mb-1 max-h-[260px] min-w-[190px] overflow-y-auto rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl"></div>'),qd=z('<div class="relative" data-menu=""><button class="flex max-w-[110px] items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg" title="Model"><span class="truncate"> </span> <!></button> <!></div>'),Gd=z('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[130px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl"></div>'),Yd=z('<div class="relative" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg" title="Reasoning effort"> <!></button> <!></div>'),Jd=z('<div class="flex h-full min-h-0 flex-col bg-mk-bg text-mk-fg"><div class="flex items-center gap-2 border-b border-mk-line px-3 py-1.5"><!> <span class="text-[11px] font-semibold tracking-wide text-mk-muted uppercase">Chat</span> <select class="ml-auto min-w-0 max-w-[55%] truncate rounded-sm border border-mk-line bg-mk-input px-1.5 py-0.5 text-[11px] text-mk-fg outline-none focus:border-mk-green" title="Agent session that answers"></select></div> <div class="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-3 py-3"><!> <!> <!></div> <div class="border-t border-mk-line p-2"><div class="rounded-md border border-mk-line bg-mk-input focus-within:border-mk-green"><textarea rows="2" class="max-h-[200px] w-full resize-none bg-transparent px-2.5 py-2 text-[13px] text-mk-fg outline-none placeholder:text-mk-comment" placeholder="Ask about this workspace…"></textarea> <div class="flex items-center gap-1 px-1.5 pb-1.5 text-[11px]"><div class="relative" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg" title="Agent"> <!></button> <!></div> <!> <!> <!> <span class="ml-auto flex items-center gap-1.5"><kbd class="hidden text-[10px] text-mk-comment sm:inline">↵ send · ⇧↵ newline</kbd> <button class="flex h-6 w-6 items-center justify-center rounded-md bg-mk-green text-mk-bg disabled:opacity-40" title="Send (Enter)" aria-label="Send"><!></button></span></div></div></div></div>');function Xd(e,t){vt(t,!0);let n=Ve(t,"sessions",19,()=>[]),r=Ve(t,"session",3,""),s=Ve(t,"rootPath",3,""),a=A(""),o=A(Te(r()||n()[0]||"")),l=A(!1),c=A(Te([])),d=A(""),f=A(null),x=A(null),v=null,g=A(Te({agent:"codex",available:[],model:"",effort:"",models:[],efforts:[]})),m=A(""),w=A("");const S=dt(()=>(i(g).models.find(N=>N[0]===i(g).model)||[])[1]||i(g).model||"default");let T=A("");async function H(){if(!_.connectionId){p(T,"");return}try{p(T,(await ye.agentContext(_.connectionId)).context||"",!0)}catch{p(T,"")}}Ot(()=>{_.connectionId,H()});async function P(){if(i(o))try{p(g,{agent:"codex",available:[],model:"",effort:"",models:[],efforts:[],...await ye.sessionAgent(i(o))},!0)}catch(N){p(g,{agent:i(g).agent,available:[],model:"",effort:"",models:[],efforts:[]},!0),_.setStatus(N.message||"Could not read agent settings")}}async function I(){if(i(o))try{const V=(await ye.chat(i(o))).messages||[],te=V.length!==i(c).length;p(c,V,!0),p(d,""),te&&queueMicrotask(C)}catch(N){p(d,N.message||"Could not load chat",!0)}}function C(){i(f)&&(i(f).scrollTop=i(f).scrollHeight)}Ot(()=>{const N=i(o);p(c,[],!0),v&&clearInterval(v),N&&(I(),P(),v=setInterval(I,3e3))}),wo(()=>{v&&clearInterval(v)});async function $(N){if(p(m,""),N!==i(g).agent){p(w,"agent");try{await ye.setSessionAgent(i(o),N),await P(),_.setStatus(`Switched to ${N}`)}catch(V){_.setStatus(V.message||"Could not switch agent")}finally{p(w,"")}}}async function M(N){if(p(m,""),N!==i(g).model){p(w,"model");try{await ye.setSessionModel(i(o),N),await P(),_.setStatus(`Model set to ${N}`)}catch(V){_.setStatus(V.message||"Could not change model")}finally{p(w,"")}}}async function Q(N){if(p(m,""),N!==i(g).effort){p(w,"effort");try{await ye.setSessionEffort(i(o),N),await P(),_.setStatus(`Reasoning effort set to ${N}`)}catch(V){_.setStatus(V.message||"Could not change effort")}finally{p(w,"")}}}function ee(){const N=_.connection||{},V=_.activeTab,te=V?V.path:_.path||".",ke=V?`
Active file contents (first 12,000 characters):
${V.content.slice(0,12e3)}`:"";return`${i(T)||(N.kind==="local"?`[IDE workspace]
Local folder: ${N.workspace_root||"."}
`:`[IDE workspace]
SSH target: ${N.username||"?"}@${N.host||"?"}
`)}
Currently open: ${te}${ke}

${i(a).trim()}`}async function q(){const N=i(a).trim();if(!N||!i(o)||i(l))return;const V=ee();p(l,!0);try{const te=await fetch(`${s()}/api/sessions/${encodeURIComponent(i(o))}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:V})}),ke=await te.json().catch(()=>({}));if(!te.ok)throw new Error(ke.error||"Could not send");p(a,""),i(x)&&(i(x).style.height="auto"),p(c,[...i(c),{role:"user",text:N,ts:Date.now()/1e3,_local:!0}],!0),queueMicrotask(C),setTimeout(I,1200)}catch(te){_.setStatus(te.message||"Could not send prompt")}finally{p(l,!1)}}function R(N){N.key==="Enter"&&!N.shiftKey&&(N.preventDefault(),q())}function G(N){const V=N.currentTarget;V.style.height="auto",V.style.height=`${Math.min(V.scrollHeight,200)}px`}const ce=N=>N.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function be(N){const V=[];return ce(N).replace(/```(\w*)\n?([\s\S]*?)```/g,(Ce,Oe,Ae)=>(V.push(`<pre class="chat-code"><code>${Ae.replace(/\n$/,"")}</code></pre>`),`\0BLOCK${V.length-1}\0`)).replace(/`([^`\n]+)`/g,'<code class="chat-inline">$1</code>').replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>").split(`
`).map(Ce=>{const Oe=Ce.match(/^\s*[-*]\s+(.*)$/);return Oe?`<span class="chat-li">${Oe[1]}</span>`:Ce}).join(`
`).replace(/\u0000BLOCK(\d+)\u0000/g,(Ce,Oe)=>V[Number(Oe)])}function De(N){const V=N.full||N.text||"",te=`

`;if(V.startsWith("[IDE workspace")||V.startsWith("[Remote IDE context]")||V.startsWith("[Remote SSH IDE context]")){const ke=V.lastIndexOf(te);if(ke!==-1)return V.slice(ke+te.length)}return V}var Se=Jd();or("click",os,N=>{var V,te;(te=(V=N.target).closest)!=null&&te.call(V,"[data-menu]")||p(m,"")});var Qe=y(Se),E=y(Qe);Fa(E,{size:13,class:"shrink-0 text-mk-green"});var j=h(E,4);Ye(j,20,n,N=>N,(N,V)=>{var te=Ld(),ke=Z(te,!0),Ce={};Y(()=>{U(ke,V),Ce!==(Ce=V)&&(te.value=(te.__value=Ce)??"")}),b(N,te)}),as(j);var he=h(Qe,2),Me=y(he);{var Je=N=>{var V=Fd(),te=Z(V,!0);Y(()=>U(te,i(d))),b(N,V)};F(Me,N=>{i(d)&&N(Je)})}var bt=h(Me,2);Ye(bt,19,()=>i(c),(N,V)=>N.ts+":"+V,(N,V)=>{var te=X(),ke=B(te);{var Ce=Ae=>{var He=Hd(),je=y(He),Le=y(je);Fa(Le,{size:11});var at=h(Le),xt=h(je,2);iu(xt,()=>be(De(i(V))),!0),Y(()=>U(at,` ${i(g).agent==="claude"?"Claude":"Codex"}`)),b(Ae,He)},Oe=Ae=>{var He=jd(),je=h(y(He),2),Le=Z(je,!0);Y(at=>U(Le,at),[()=>De(i(V))]),b(Ae,He)};F(ke,Ae=>{i(V).role==="assistant"?Ae(Ce):Ae(Oe,-1)})}b(N,te)},N=>{var V=X(),te=B(V);{var ke=Ce=>{var Oe=Bd(),Ae=y(Oe);Fa(Ae,{size:26,strokeWidth:1.3,class:"text-mk-line"});var He=h(Ae,2),je=h(y(He)),Le=Z(je,!0);Y(()=>U(Le,i(o)||"the selected session")),b(Ce,Oe)};F(te,Ce=>{i(d)||Ce(ke)})}b(N,V)});var Gt=h(bt,2);{var On=N=>{var V=Vd(),te=y(V);zn(te,{size:11,class:"animate-spin"}),b(N,V)};F(Gt,N=>{i(l)&&N(On)})}cs(he,N=>p(f,N),()=>i(f));var ln=h(he,2),ir=y(ln),Yt=y(ir);cs(Yt,N=>p(x,N),()=>i(x));var bn=h(Yt,2),Rn=y(bn),xn=y(Rn),lr=y(xn),yn=h(lr);Pn(yn,{size:11});var Dn=h(xn,2);{var cr=N=>{var V=Kd();Ye(V,20,()=>i(g).available.length?i(g).available:["codex"],te=>te,(te,ke)=>{var Ce=ri(),Oe=y(Ce),Ae=y(Oe);{var He=Le=>{ta(Le,{size:11})};F(Ae,Le=>{ke===i(g).agent&&Le(He)})}var je=h(Oe);Y(()=>U(je,` ${ke==="claude"?"Claude":"Codex"}`)),O("click",Ce,()=>$(ke)),b(te,Ce)}),b(N,V)};F(Dn,N=>{i(m)==="agent"&&N(cr)})}var Ln=h(Rn,2);{var ur=N=>{var V=qd(),te=y(V),ke=y(te),Ce=Z(ke,!0),Oe=h(ke,2);Pn(Oe,{size:11,class:"shrink-0"});var Ae=h(te,2);{var He=je=>{var Le=Ud();Ye(Le,21,()=>i(g).models,at=>at[0],(at,xt)=>{var Ft=Wd(),wn=y(Ft),kn=y(wn);{var Hn=_e=>{ta(_e,{size:11})};F(kn,_e=>{i(xt)[0]===i(g).model&&_e(Hn)})}var W=h(wn,2),Pe=Z(W,!0);Y(()=>U(Pe,i(xt)[1])),O("click",Ft,()=>M(i(xt)[0])),b(at,Ft)}),b(je,Le)};F(Ae,je=>{i(m)==="model"&&je(He)})}Y(()=>U(Ce,i(S))),O("click",te,()=>p(m,i(m)==="model"?"":"model",!0)),b(N,V)};F(Ln,N=>{i(g).models.length&&N(ur)})}var dr=h(Ln,2);{var fr=N=>{var V=Yd(),te=y(V),ke=y(te),Ce=h(ke);Pn(Ce,{size:11});var Oe=h(te,2);{var Ae=He=>{var je=Gd();Ye(je,20,()=>i(g).efforts,Le=>Le,(Le,at)=>{var xt=ri(),Ft=y(xt),wn=y(Ft);{var kn=W=>{ta(W,{size:11})};F(wn,W=>{at===i(g).effort&&W(kn)})}var Hn=h(Ft);Y(()=>U(Hn,` ${at??""}`)),O("click",xt,()=>Q(at)),b(Le,xt)}),b(He,je)};F(Oe,He=>{i(m)==="effort"&&He(Ae)})}Y(()=>U(ke,`${(i(g).effort||"effort")??""} `)),O("click",te,()=>p(m,i(m)==="effort"?"":"effort",!0)),b(N,V)};F(dr,N=>{i(g).efforts.length&&N(fr)})}var Fn=h(dr,2);{var jr=N=>{zn(N,{size:11,class:"animate-spin text-mk-muted"})};F(Fn,N=>{i(w)&&N(jr)})}var vr=h(Fn,2),cn=h(y(vr),2),hr=y(cn);{var pr=N=>{Xu(N,{size:11})},_r=N=>{Nu(N,{size:13})};F(hr,N=>{i(l)?N(pr):N(_r,-1)})}Y(N=>{U(lr,`${i(g).agent==="claude"?"Claude":"Codex"} `),cn.disabled=N},[()=>i(l)||!i(a).trim()]),no(j,()=>i(o),N=>p(o,N)),O("keydown",Yt,R),O("input",Yt,G),nt(Yt,()=>i(a),N=>p(a,N)),O("click",xn,()=>p(m,i(m)==="agent"?"":"agent",!0)),O("click",cn,q),b(e,Se),ht()}Lt(["keydown","input","click"]);var Zd=z('<span class="hint svelte-e2eyom">searching…</span>'),Qd=z('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),ef=z('<ul class="results svelte-e2eyom"></ul>'),tf=z('<p class="empty svelte-e2eyom"> </p>'),nf=z('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function rf(e,t){vt(t,!0);let n=A(""),r=A(Te([])),s=A(0),a=A(!1),o=A(null),l=null;Ot(()=>{i(o)&&i(o).focus()}),Ot(()=>{const $=i(n).trim();if(l&&clearTimeout(l),!$){p(r,[],!0);return}l=setTimeout(async()=>{p(a,!0);try{const M=await ye.searchFiles(_.connectionId,_.path||".",$);p(r,M.matches||[],!0),p(s,0)}catch{p(r,[],!0)}finally{p(a,!1)}},180)});async function c($){var Q;if(!$)return;const M=_.path&&_.path!=="."?`${_.path}/`:"";await _.openFile(`${M}${$.path}`),(Q=t.onclose)==null||Q.call(t)}function d($){var M;$.key==="Escape"?($.preventDefault(),(M=t.onclose)==null||M.call(t)):$.key==="ArrowDown"?($.preventDefault(),p(s,Math.min(i(s)+1,i(r).length-1),!0)):$.key==="ArrowUp"?($.preventDefault(),p(s,Math.max(i(s)-1,0),!0)):$.key==="Enter"&&($.preventDefault(),c(i(r)[i(s)]))}var f=nf(),x=B(f),v=h(x,2),g=y(v),m=y(g);$o(m,{size:14});var w=h(m,2);cs(w,$=>p(o,$),()=>i(o));var S=h(w,2);{var T=$=>{var M=Zd();b($,M)};F(S,$=>{i(a)&&$(T)})}var H=h(g,2);{var P=$=>{var M=ef();Ye(M,23,()=>i(r),Q=>Q.path,(Q,ee,q)=>{var R=Qd(),G=y(R);let ce;var be=y(G),De=Z(be,!0),Se=h(be,2),Qe=Z(Se,!0),E=h(Se,2);{var j=he=>{Iu(he,{size:12})};F(E,he=>{i(q)===i(s)&&he(j)})}Y(()=>{ce=At(G,1,"svelte-e2eyom",null,ce,{active:i(q)===i(s)}),U(De,i(ee).name),U(Qe,i(ee).path)}),O("click",G,()=>c(i(ee))),b(Q,R)}),b($,M)},I=$=>{var M=tf(),Q=Z(M);Y(ee=>U(Q,`No files match “${ee??""}”.`),[()=>i(n).trim()]),b($,M)},C=dt(()=>i(n).trim()&&!i(a));F(H,$=>{i(r).length?$(P):i(C)&&$(I,1)})}O("click",x,()=>{var $;return($=t.onclose)==null?void 0:$.call(t)}),O("keydown",x,$=>{var M;return $.key==="Escape"&&((M=t.onclose)==null?void 0:M.call(t))}),O("keydown",w,d),nt(w,()=>i(n),$=>p(n,$)),b(e,f),ht()}Lt(["click","keydown"]);var sf=z('<div class="terminal-pane svelte-maclc7"><div class="bar svelte-maclc7"><span class="label svelte-maclc7">Terminal</span> <span> </span></div> <div class="screen svelte-maclc7"></div></div>');function af(e,t){vt(t,!0);let n=Ve(t,"rootPath",3,""),r=Ve(t,"session",3,""),s,a=null,o=null,l=null,c=A("connecting"),d=null,f=0,x=null,v=!1;const g={background:es.colors["editor.background"],foreground:es.colors["editor.foreground"],cursor:es.colors["editorCursor.foreground"],selectionBackground:es.colors["editor.selectionBackground"],black:"#272822",red:"#f92672",green:"#a6e22e",yellow:"#e6db74",blue:"#66d9ef",magenta:"#ae81ff",cyan:"#a1efe4",white:"#f8f8f2",brightBlack:"#75715e",brightRed:"#f92672",brightGreen:"#a6e22e",brightYellow:"#e6db74",brightBlue:"#66d9ef",brightMagenta:"#ae81ff",brightCyan:"#a1efe4",brightWhite:"#f9f8f5"};function m(){if(!(!o||!a||(l==null?void 0:l.readyState)!==WebSocket.OPEN))try{o.fit(),l.send(JSON.stringify({type:"resize",cols:a.cols,rows:a.rows}))}catch{}}function w(){if(v)return;const $=`${location.protocol==="https:"?"wss":"ws"}://${location.host}${n()}/ws/sessions/${encodeURIComponent(r())}/ide/terminal/${encodeURIComponent(_.connectionId)}`;l=new WebSocket($),l.binaryType="arraybuffer",l.onopen=()=>{p(c,"connected"),f=0,m()},l.onmessage=M=>{a.write(typeof M.data=="string"?M.data:new Uint8Array(M.data))},l.onclose=M=>{if(v)return;if(M.code===1008){p(c,"refused"),a==null||a.write(`\r
\x1B[31m— not authorised for this terminal —\x1B[0m\r
`);return}if(f>=6){p(c,"closed"),a==null||a.write(`\r
\x1B[33m— terminal unavailable; reopen the panel to retry —\x1B[0m\r
`);return}p(c,"reconnecting");const Q=Math.min(1e3*2**f,1e4);f+=1,x=setTimeout(w,Q)},l.onerror=()=>{v||p(c,"error")}}Hr(async()=>{const[{Terminal:C},{FitAddon:$}]=await Promise.all([ra(()=>import("./ide-xterm.js"),[],import.meta.url),ra(()=>import("./ide-addon-fit.js"),[],import.meta.url)]);await ra(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),a=new C({theme:g,fontSize:12,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3}),o=new $,a.loadAddon(o),a.open(s),o.fit(),w(),a.onData(M=>{(l==null?void 0:l.readyState)===WebSocket.OPEN&&l.send(new TextEncoder().encode(M))}),d=new ResizeObserver(()=>m()),d.observe(s)}),wo(()=>{v=!0,x&&clearTimeout(x),d==null||d.disconnect(),l==null||l.close(),a==null||a.dispose()});var S=sf(),T=y(S),H=h(y(T),2),P=Z(H,!0),I=h(T,2);cs(I,C=>s=C,()=>s),Y(()=>{At(H,1,`status ${i(c)??""}`,"svelte-maclc7"),U(P,i(c))}),b(e,S),ht()}var of=z('<div class="border-b border-vs-line bg-vs-red/10 px-4 py-2 text-xs text-vs-red"> </div>'),lf=z('<div class="flex items-center gap-2 px-4 py-3 text-xs text-vs-muted"><!> Loading…</div>'),cf=z('<button class="flex w-full items-center gap-2 px-4 py-1 text-left text-[13px] text-vs-fg hover:bg-vs-hover"><!> <span class="truncate"> </span></button>'),uf=z('<div class="px-4 py-3 text-xs text-vs-muted">No sub-folders here. You can still open this folder.</div>'),df=z('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="flex h-[70vh] w-[min(640px,92vw)] flex-col overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">Open Folder <span class="ml-1 font-normal text-vs-muted"><!></span></div> <form class="flex gap-2 border-b border-vs-line px-3 py-2"><button type="button" class="flex items-center gap-1 rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover disabled:opacity-40" title="Up one folder"><!> Up</button> <input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-xs text-vs-fg outline-none focus:border-vs-accent" spellcheck="false" aria-label="Folder path"/> <button type="submit" class="rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover">Go</button></form> <!> <div class="min-h-0 flex-1 overflow-y-auto py-1"><!></div> <div class="flex items-center gap-2 border-t border-vs-line px-4 py-3"><span class="flex min-w-0 flex-1 items-center gap-2 text-xs text-vs-muted"><!> <span class="truncate font-mono"> </span></span> <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40">Open Folder</button></div></div></div>');function ff(e,t){vt(t,!0);let n=A(""),r=A(""),s=A(Te([])),a=A(""),o=A(!0),l=A("");async function c(E){p(o,!0),p(a,"");try{const j=_.connectionId?await ye.browseOn(_.connectionId,E):await ye.browse(E);p(n,j.path,!0),p(r,j.parent,!0),p(s,j.entries||[],!0),p(l,j.path,!0)}catch(j){p(a,j.message||"Could not open that folder",!0)}finally{p(o,!1)}}Hr(()=>c(""));function d(E){E.preventDefault(),i(l).trim()&&c(i(l).trim())}var f=df(),x=y(f),v=y(x),g=h(y(v)),m=y(g);{var w=E=>{var j=jo();Y(()=>U(j,`on ${_.connection.username??""}@${_.connection.host??""}`)),b(E,j)},S=E=>{var j=jo("on this server");b(E,j)};F(m,E=>{_.connection&&_.connection.kind!=="local"?E(w):E(S,-1)})}var T=h(v,2),H=y(T),P=y(H);Ou(P,{size:14});var I=h(H,2),C=h(T,2);{var $=E=>{var j=of(),he=Z(j,!0);Y(()=>U(he,i(a))),b(E,j)};F(C,E=>{i(a)&&E($)})}var M=h(C,2),Q=y(M);{var ee=E=>{var j=lf(),he=y(j);zn(he,{size:13,class:"animate-spin"}),b(E,j)},q=E=>{var j=X(),he=B(j);Ye(he,17,()=>i(s),Me=>Me.path,(Me,Je)=>{var bt=cf(),Gt=y(bt);Bu(Gt,{size:14,class:"shrink-0 text-vs-blue"});var On=h(Gt,2),ln=Z(On,!0);Y(()=>U(ln,i(Je).name)),O("dblclick",bt,()=>c(i(Je).path)),O("click",bt,()=>c(i(Je).path)),b(Me,bt)},Me=>{var Je=uf();b(Me,Je)}),b(E,j)};F(Q,E=>{i(o)?E(ee):E(q,-1)})}var R=h(M,2),G=y(R),ce=y(G);Vu(ce,{size:13,class:"shrink-0"});var be=h(ce,2),De=Z(be,!0),Se=h(G,2),Qe=h(Se,2);Y(()=>{H.disabled=!i(r),fe(be,"title",i(n)),U(De,i(n)),Qe.disabled=!i(n)||i(o)}),O("click",f,E=>E.target===E.currentTarget&&t.onclose()),O("keydown",f,E=>E.key==="Escape"&&t.onclose()),or("submit",T,d),O("click",H,()=>i(r)&&c(i(r))),nt(I,()=>i(l),E=>p(l,E)),O("click",Se,function(...E){var j;(j=t.onclose)==null||j.apply(this,E)}),O("click",Qe,()=>t.onopen(i(n))),b(e,f),ht()}Lt(["click","keydown","dblclick"]);var vf=z('<p class="px-4 py-2 text-xs text-vs-muted">Open a folder to search it.</p>'),hf=z('<button class="flex w-full items-center gap-2 px-3 py-1 text-left text-[13px] hover:bg-vs-hover"><!> <span class="truncate text-vs-fg"> </span> <span class="ml-auto max-w-[45%] truncate text-[11px] text-vs-muted"> </span></button>'),pf=z('<p class="px-4 py-2 text-xs text-vs-muted"> </p>'),_f=z('<p class="px-4 py-2 text-xs text-vs-muted">Type to search filenames in this workspace.</p>'),gf=z('<div class="flex h-full min-h-0 flex-col"><div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Search</div> <div class="px-3 pb-2"><div class="flex items-center gap-1.5 rounded-sm border border-vs-line bg-vs-input px-2 focus-within:border-vs-accent"><!> <input class="min-w-0 flex-1 bg-transparent py-1 text-xs text-vs-fg outline-none placeholder:text-vs-muted" placeholder="Search filenames" spellcheck="false"/> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div></div>');function mf(e,t){vt(t,!0);let n=A(""),r=A(Te([])),s=A(!1),a=A(!1),o=null;Ot(()=>{const P=i(n).trim();if(o&&clearTimeout(o),!P||!_.connectionId){p(r,[],!0),p(a,!1);return}o=setTimeout(async()=>{p(s,!0);try{const I=await ye.searchFiles(_.connectionId,_.path||".",P);p(r,I.matches||[],!0)}catch(I){p(r,[],!0),_.setStatus(I.message||"Search failed")}finally{p(s,!1),p(a,!0)}},200)});const l=P=>{const I=(P||"").split("/");return I.pop(),I.join("/")};var c=gf(),d=h(y(c),2),f=y(d),x=y(f);$o(x,{size:12,class:"shrink-0 text-vs-muted"});var v=h(x,2),g=h(v,2);{var m=P=>{zn(P,{size:12,class:"shrink-0 animate-spin text-vs-muted"})};F(g,P=>{i(s)&&P(m)})}var w=h(d,2),S=y(w);{var T=P=>{var I=vf();b(P,I)},H=P=>{var I=X(),C=B(I);Ye(C,17,()=>i(r),$=>$.path,($,M)=>{var Q=hf(),ee=y(Q);ko(ee,{size:13,class:"shrink-0 text-vs-blue"});var q=h(ee,2),R=Z(q,!0),G=h(q,2),ce=Z(G,!0);Y((be,De)=>{fe(Q,"title",i(M).path),U(R,be),U(ce,De)},[()=>i(M).name||i(M).path.split("/").pop(),()=>l(i(M).path)]),O("click",Q,()=>_.openFile(i(M).path)),b($,Q)},$=>{var M=X(),Q=B(M);{var ee=G=>{var ce=pf(),be=Z(ce);Y(()=>U(be,`No files match “${i(n)??""}”.`)),b(G,ce)},q=G=>{var ce=_f();b(G,ce)},R=dt(()=>!i(n).trim());F(Q,G=>{i(a)&&!i(s)?G(ee):i(R)&&G(q,1)})}b($,M)}),b(P,I)};F(S,P=>{_.connectionId?P(H,-1):P(T)})}nt(v,()=>i(n),P=>p(n,P)),b(e,c),ht()}Lt(["click"]);var bf=z('<p class="flex items-center gap-2 text-vs-muted"><!> Fetching host key…</p>'),xf=z('<p class="text-vs-red"> </p>'),yf=z("<p>This host is already trusted. Try connecting again.</p>"),wf=z('<div class="flex items-baseline gap-2 font-mono text-[11px]"><span class="w-16 shrink-0 text-vs-muted"> </span> <span class="break-all text-vs-fg"> </span></div>'),kf=z(`<p>The authenticity of <span class="font-mono text-vs-blue"> </span> can't be established. Verify these fingerprints match the server before you continue —
          if they don't, someone may be intercepting the connection.</p> <div class="mt-3 flex flex-col gap-1 rounded-sm border border-vs-line bg-vs-input p-2"></div> <p class="mt-3 text-xs text-vs-muted">Accepting adds the key to <span class="font-mono">~/.ssh/known_hosts</span> on this server.</p>`,1),$f=z('<button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"> </button>'),Sf=z('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="w-[min(560px,92vw)] overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="flex items-center gap-2 border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright"><!> Unknown host</div> <div class="px-4 py-3 text-[13px] leading-relaxed text-vs-fg"><!></div> <div class="flex justify-end gap-2 border-t border-vs-line px-4 py-3"><button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <!></div></div></div>');function Cf(e,t){vt(t,!0);let n=A(!0),r=A(""),s=A(null),a=A(!1);Hr(async()=>{try{p(s,await ye.hostKey(_.connectionId),!0)}catch(C){p(r,C.message||"Could not fetch the host key",!0)}finally{p(n,!1)}});async function o(){p(a,!0);try{await ye.trustHost(_.connectionId),t.ontrusted()}catch(C){p(r,C.message||"Could not trust this host",!0),p(a,!1)}}var l=Sf(),c=y(l),d=y(c),f=y(d);Ju(f,{size:15,class:"text-vs-yellow"});var x=h(d,2),v=y(x);{var g=C=>{var $=bf(),M=y($);zn(M,{size:13,class:"animate-spin"}),b(C,$)},m=C=>{var $=xf(),M=Z($,!0);Y(()=>U(M,i(r))),b(C,$)},w=C=>{var $=yf();b(C,$)},S=C=>{var $=kf(),M=B($),Q=h(y(M)),ee=Z(Q),q=h(M,2);Ye(q,21,()=>i(s).fingerprints,R=>R.fingerprint,(R,G)=>{var ce=wf(),be=y(ce),De=Z(be,!0),Se=h(be,2),Qe=Z(Se,!0);Y(()=>{U(De,i(G).type),U(Qe,i(G).fingerprint)}),b(R,ce)}),Y(()=>U(ee,`${i(s).host??""}:${i(s).port??""}`)),b(C,$)};F(v,C=>{var $;i(n)?C(g):i(r)?C(m,1):($=i(s))!=null&&$.known?C(w,2):C(S,-1)})}var T=h(x,2),H=y(T),P=h(H,2);{var I=C=>{var $=$f(),M=Z($,!0);Y(()=>{$.disabled=i(a),U(M,i(a)?"Trusting…":"Trust and connect")}),O("click",$,o),b(C,$)};F(P,C=>{var $;!i(n)&&!(($=i(s))!=null&&$.known)&&!i(r)&&C(I)})}O("click",l,C=>C.target===C.currentTarget&&t.onclose()),O("keydown",l,C=>C.key==="Escape"&&t.onclose()),O("click",H,function(...C){var $;($=t.onclose)==null||$.apply(this,C)}),b(e,l),ht()}Lt(["click","keydown"]);var Ef=z('<div role="separator" tabindex="0" title="Drag to resize (double-click to reset)"><div></div></div>');function Ha(e,t){vt(t,!0);let n=Ve(t,"size",15),r=Ve(t,"side",3,"right"),s=Ve(t,"min",3,120),a=Ve(t,"max",3,800),o=Ve(t,"onreset",3,null),l=A(!1);const c=r()==="top";function d(m){var I;m.preventDefault(),p(l,!0);const w=c?m.clientY:m.clientX,S=n(),T=m.currentTarget;(I=T.setPointerCapture)==null||I.call(T,m.pointerId);function H(C){const M=(c?C.clientY:C.clientX)-w,Q=r()==="left"||r()==="top"?-M:M;n(Math.round(Math.min(a(),Math.max(s(),S+Q))))}function P(){var C;p(l,!1),(C=T.releasePointerCapture)==null||C.call(T,m.pointerId),window.removeEventListener("pointermove",H),window.removeEventListener("pointerup",P)}window.addEventListener("pointermove",H),window.addEventListener("pointerup",P)}function f(m){const w=m.shiftKey?40:10,S=c?"ArrowUp":r()==="left"?"ArrowLeft":"ArrowRight",T=c?"ArrowDown":r()==="left"?"ArrowRight":"ArrowLeft";if(m.key===S)n(Math.min(a(),n()+w));else if(m.key===T)n(Math.max(s(),n()-w));else return;m.preventDefault()}var x=Ef();let v;var g=Z(x);Y(()=>{v=At(x,1,`group relative shrink-0 ${c?"h-1 w-full cursor-row-resize":"w-1 cursor-col-resize"}`,null,v,{"bg-vs-accent":i(l)}),fe(x,"aria-orientation",c?"horizontal":"vertical"),fe(x,"aria-valuenow",n()),fe(x,"aria-valuemin",s()),fe(x,"aria-valuemax",a()),At(g,1,`absolute ${c?"-top-1 -bottom-1 left-0 right-0":"-left-1 -right-1 top-0 bottom-0"}
           transition-colors group-hover:bg-vs-accent ${i(l)?"bg-vs-accent":""}`)}),O("pointerdown",x,d),O("dblclick",x,()=>{var m;return(m=o())==null?void 0:m()}),O("keydown",x,f),b(e,x),ht()}Lt(["pointerdown","dblclick","keydown"]);var Tf=z('<span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>'),Nf=z('<span class="absolute right-1.5 bottom-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-vs-status px-1 text-[10px] leading-none font-semibold text-white"> </span>'),Mf=z("<button><!> <!> <!></button>"),Pf=z("<option> </option>"),zf=z('<button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover hover:text-vs-red" title="Remove workspace" aria-label="Remove workspace"><!></button>'),Af=z('<input class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),If=z(`<button class="w-full rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Show this host's key fingerprint and trust it">Verify host key…</button>`),Of=z('<!> <button class="w-full rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"> </button> <!>',1),Rf=z('<p class="mt-1 font-mono text-[11px] break-all text-vs-muted"> </p>'),Df=z('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="~/.ssh/id_ed25519"/> <textarea class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-[11px] outline-none focus:border-vs-accent" rows="4" placeholder="…or paste a private key (-----BEGIN OPENSSH PRIVATE KEY-----)" spellcheck="false"></textarea>',1),Lf=z('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" type="password" placeholder="Password" autocomplete="new-password"/>'),Ff=z('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Host" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="User" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Port" type="number" min="1" max="65535"/> <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!>',1),Hf=z('<form class="mt-2 flex flex-col gap-1.5 border-t border-vs-line px-3 pt-2"><select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>This server (local folder)</option><option>Remote host over SSH</option></select> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"/> <div class="flex gap-1 pb-2"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110" type="submit">Create</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" type="button">Cancel</button></div></form>'),jf=z('<div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Workspaces</div> <div class="flex flex-col gap-2 px-3 pt-1"><select class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" aria-label="Workspace"><option>— select workspace —</option><!></select> <div class="flex gap-1"><button class="flex flex-1 items-center justify-center gap-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"><!> Open Folder</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Add a workspace or SSH connection" aria-label="Add workspace"><!></button> <!></div> <!> <!></div> <!>',1),Bf=z('<aside class="flex shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel"><!></aside> <!>',1),Vf=z('<div class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"><!> <div><h1 class="text-2xl font-light text-vs-fg">Multibuilder IDE</h1> <p class="mt-1 text-sm text-vs-muted">Edit files on this server or on a remote host over SSH.</p></div> <div class="flex flex-col gap-2 text-sm"><button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Open Folder… <kbd class="ml-2 rounded-sm border border-vs-line px-1.5 py-0.5 text-[10px] text-vs-muted">Ctrl+Shift+O</kbd></button> <button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Connect to a host over SSH…</button></div></div>'),Kf=z('<!> <div class="flex shrink-0 flex-col border-t border-vs-border bg-vs-bg"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1 text-[11px] tracking-wide uppercase"><!> Terminal <span class="text-vs-muted normal-case"> </span> <button class="ml-auto rounded-sm p-0.5 hover:bg-vs-hover" title="Hide panel" aria-label="Hide terminal panel"><!></button></div> <div class="min-h-0 flex-1"><!></div></div>',1),Wf=z('<!> <div class="min-h-0 flex-1"><!></div> <!>',1),Uf=z('<!> <aside class="flex shrink-0 flex-col overflow-hidden border-l border-vs-border bg-vs-panel"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1.5"><!> <span class="flex-1 text-[11px] font-semibold tracking-wide uppercase">Chat</span> <button class="rounded-sm p-0.5 hover:bg-vs-hover" title="Hide chat" aria-label="Hide chat"><!></button></div> <div class="min-h-0 flex-1"><!></div></aside>',1),si=z('<span class="flex items-center gap-1"><!> </span>'),qf=z("<span> </span>"),Gf=z('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle terminal (Ctrl+`)"><!> Terminal</button> <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Focus the tmux window on the host"><!></button>',1),Yf=z('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle chat panel"><!> Chat</button>'),Jf=z('<div class="flex h-full flex-col overflow-hidden bg-vs-bg font-sans text-vs-fg"><header class="flex items-center gap-2 border-b border-vs-border bg-vs-titlebar px-3 py-1 text-xs"><!> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover" title="Open a folder on this server (Ctrl+Shift+O)">Open Folder…</button> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40" title="Open a file (Ctrl+P)">Open File…</button> <button><!> Terminal</button> <span class="mx-auto truncate text-vs-muted"> </span> <span><!> </span></header> <div class="flex min-h-0 flex-1"><nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity"><!> <div class="mt-auto flex flex-col items-center pb-1"><button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Account — signed in to the dashboard" aria-label="Account"><!></button> <button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Toggle side bar (Ctrl+B)" aria-label="Toggle side bar"><!></button></div></nav> <!> <section class="flex min-h-0 min-w-0 flex-1 flex-col"><!></section> <!></div> <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white"><!> <!> <span class="truncate"> </span> <span class="ml-auto flex items-center gap-3"><!> <span class="max-w-[40vw] truncate opacity-80"> </span> <!> <!></span></footer> <!> <!> <!></div>');function Xf(e,t){vt(t,!0);let n=Ve(t,"sessions",19,()=>[]),r=Ve(t,"session",3,""),s=Ve(t,"rootPath",3,""),a=A("files");function o(k,D){try{const L=localStorage.getItem(`ide.show.${k}`);return L===null?D:L==="1"}catch{return D}}let l=A(Te(o("chat",!0)));const c={sidebar:240,chat:320,panel:240};function d(k){try{const D=localStorage.getItem(`ide.size.${k}`),L=Number(D);return Number.isFinite(L)&&L>0?L:c[k]}catch{return c[k]}}let f=A(Te(d("sidebar"))),x=A(Te(d("chat"))),v=A(Te(d("panel")));Ot(()=>{try{localStorage.setItem("ide.size.sidebar",String(i(f))),localStorage.setItem("ide.size.chat",String(i(x))),localStorage.setItem("ide.size.panel",String(i(v))),localStorage.setItem("ide.show.terminal",i(w)?"1":"0"),localStorage.setItem("ide.show.chat",i(l)?"1":"0"),localStorage.setItem("ide.show.sidebar",i(g)?"1":"0")}catch{}});let g=A(Te(o("sidebar",!0))),m=A(!1),w=A(Te(o("terminal",!1))),S=A(!1);Ot(()=>{i(w)&&p(S,!0)});let T=A(!1),H=A(!1),P=A(""),I=A(Te({kind:"local",label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",private_key:"",workspace_root:"",max_file_bytes:1e6}));const C={idle:{icon:Au,label:"Not connected"},connecting:{icon:Pu,label:"Connecting…"},connected:{icon:Mu,label:"Connected"},reconnect:{icon:Xo,label:"Reconnect required"},error:{icon:Xo,label:"Error"}},$=dt(()=>C[_.connectionState].icon),M=dt(()=>{var k;return((k=_.connection)==null?void 0:k.kind)==="local"}),Q=[{id:"files",icon:Hu,label:"Explorer",keys:"Ctrl+Shift+E"},{id:"search",icon:$o,label:"Search",keys:"Ctrl+Shift+F"},{id:"git",icon:ro,label:"Source Control",keys:"Ctrl+Shift+G"},{id:"remote",icon:qu,label:"Remote Explorer",keys:""}];Hr(async()=>{await _.loadConnections(),_.connectionId&&await _.refreshStatus()});function ee(k){i(a)===k&&i(g)?p(g,!1):(p(a,k,!0),p(g,!0))}async function q(k){_.connectionId=k.currentTarget.value,_.resetWorkspaceView(),await _.refreshStatus()}async function R(k){p(H,!1);try{const D=k.split("/").filter(Boolean).pop()||k,L=_.connection;if(L&&L.kind!=="local"){await ye.setWorkspaceRoot(L.id,k,D),await _.loadConnections(),_.resetWorkspaceView(),await _.refreshFiles("."),_.setStatus(`Opened ${k} on ${L.username}@${L.host}`),p(a,"files"),p(g,!0);return}if(L&&L.kind==="local"){await ye.setWorkspaceRoot(L.id,k,D),await _.loadConnections(),_.resetWorkspaceView(),await _.refreshFiles("."),_.setStatus(`Opened ${k}`),p(a,"files"),p(g,!0);return}const ge=await ye.createConnection({kind:"local",label:D,workspace_root:k,max_file_bytes:1e6});await _.loadConnections(),_.connectionId=ge.connection.id,_.resetWorkspaceView(),await _.connect(""),p(a,"files"),p(g,!0)}catch(D){_.setStatus(D.message||"Could not open folder")}}async function G(k){k.preventDefault();try{const D=await ye.createConnection({...i(I),port:Number(i(I).port)});p(T,!1),p(I,{...i(I),label:"",host:"",username:"",password:"",private_key:""},!0),await _.loadConnections(),_.connectionId=D.connection.id,await _.refreshStatus()}catch(D){_.setStatus(D.message||"Could not create connection")}}async function ce(){const k=_.connection;if(!k)return;const D=k.kind==="local"?"workspace":"connection";if(confirm(`Remove ${D} "${k.label}"? Saved tabs are cleared; files are untouched.`))try{await ye.deleteConnection(k.id),_.connectionId="",_.resetWorkspaceView(),await _.loadConnections()}catch(L){_.setStatus(L.message||"Could not delete")}}async function be(){try{const k=await ye.focusTerminal(_.connectionId);_.setStatus(`Focused ${k.window_name}`,"tmux window selected")}catch(k){_.setStatus(k.message||"Could not focus terminal")}}function De(k){var we,de,pe,xe;const D=k.ctrlKey||k.metaKey,L=k.key.toLowerCase(),ge=((de=(we=k.target)==null?void 0:we.matches)==null?void 0:de.call(we,"input, textarea, select"))&&!((xe=(pe=k.target).closest)!=null&&xe.call(pe,".monaco-editor"));D&&L==="s"?(k.preventDefault(),_.saveActive()):D&&L==="p"&&!ge?(k.preventDefault(),_.connectionId&&p(m,!0)):D&&k.shiftKey&&L==="o"?(k.preventDefault(),p(H,!0)):D&&k.shiftKey&&["e","f","g"].includes(L)?(k.preventDefault(),p(a,{e:"files",f:"search",g:"git"}[L],!0),p(g,!0)):D&&L==="b"&&!ge?(k.preventDefault(),p(g,!i(g))):D&&L==="`"?(k.preventDefault(),_.connectionState==="connected"&&p(w,!i(w))):k.key==="Escape"&&i(m)&&(k.preventDefault(),p(m,!1))}var Se=Jf();or("keydown",os,De);var Qe=y(Se),E=y(Qe);Zo(E,{size:15,class:"shrink-0 text-vs-blue"});var j=h(E,2),he=h(j,2),Me=h(he,2);let Je;var bt=y(Me);ti(bt,{size:13});var Gt=h(Me,2),On=Z(Gt,!0),ln=h(Gt,2),ir=y(ln);Vo(ir,()=>i($),(k,D)=>{D(k,{size:12})});var Yt=h(ir),bn=h(Qe,2),Rn=y(bn),xn=y(Rn);Ye(xn,17,()=>Q,k=>k.id,(k,D)=>{var L=Mf(),ge=y(L);{var we=Ee=>{var me=Tf();b(Ee,me)};F(ge,Ee=>{i(a)===i(D).id&&i(g)&&Ee(we)})}var de=h(ge,2);Vo(de,()=>i(D).icon,(Ee,me)=>{me(Ee,{size:24,strokeWidth:1.4})});var pe=h(de,2);{var xe=Ee=>{var me=Nf(),Xe=Z(me,!0);Y(()=>U(Xe,_.gitDirtyCount)),b(Ee,me)};F(pe,Ee=>{i(D).id==="git"&&_.gitDirtyCount&&Ee(xe)})}Y(()=>{At(L,1,`relative flex h-12 w-12 items-center justify-center ${i(a)===i(D).id&&i(g)?"text-vs-bright":"text-vs-muted hover:text-vs-fg"}`),fe(L,"title",i(D).keys?`${i(D).label} (${i(D).keys})`:i(D).label),fe(L,"aria-label",i(D).label)}),O("click",L,()=>ee(i(D).id)),b(k,L)});var lr=h(xn,2),yn=y(lr),Dn=y(yn);zu(Dn,{size:24,strokeWidth:1.4});var cr=h(yn,2),Ln=y(cr);Yu(Ln,{size:24,strokeWidth:1.4});var ur=h(Rn,2);{var dr=k=>{var D=Bf(),L=B(D),ge=y(L);{var we=me=>{id(me,{})},de=me=>{mf(me,{})},pe=me=>{Cd(me,{})},xe=me=>{var Xe=jf(),Fe=h(B(Xe),2),Ie=y(Fe),yt=y(Ie);yt.value=yt.__value="";var Ke=h(yt);Ye(Ke,17,()=>_.connections,We=>We.id,(We,et)=>{var ot=Pf(),Kn=Z(ot),Jt={};Y(()=>{U(Kn,`${i(et).kind==="local"?"🖿 ":"⇅ "}${i(et).label??""}`),Jt!==(Jt=i(et).id)&&(ot.value=(ot.__value=Jt)??"")}),b(We,ot)});var wt;as(Ie);var un=h(Ie,2),$n=y(un),jn=y($n);La(jn,{size:13});var Bn=h($n,2),kt=y(Bn);so(kt,{size:13});var Br=h(Bn,2);{var Vn=We=>{var et=zf(),ot=y(et);Zu(ot,{size:13}),O("click",et,ce),b(We,et)};F(Br,We=>{_.connection&&We(Vn)})}var Vs=h(un,2);{var ya=We=>{var et=Of(),ot=B(et);{var Kn=Tt=>{var Wn=Af();nt(Wn,()=>i(P),ka=>p(P,ka)),b(Tt,Wn)};F(ot,Tt=>{!i(M)&&!_.connection.has_password&&Tt(Kn)})}var Jt=h(ot,2),Ks=Z(Jt,!0),Ws=h(Jt,2);{var wa=Tt=>{var Wn=If();O("click",Wn,()=>_.needsHostKey=!0),b(Tt,Wn)};F(Ws,Tt=>{i(M)||Tt(wa)})}Y(()=>U(Ks,i(M)?"Open workspace":"Connect")),O("click",Jt,()=>_.connect(i(P))),b(We,et)};F(Vs,We=>{_.connection&&_.connectionState!=="connected"&&We(ya)})}var xl=h(Vs,2);{var yl=We=>{var et=Rf(),ot=Z(et,!0);Y(()=>U(ot,_.connection.workspace_root)),b(We,et)};F(xl,We=>{_.connection&&We(yl)})}var wl=h(Fe,2);{var kl=We=>{var et=Hf(),ot=y(et),Kn=y(ot);Kn.value=Kn.__value="local";var Jt=h(Kn);Jt.value=Jt.__value="ssh",as(ot);var Ks=h(ot,2),Ws=h(Ks,2);{var wa=dn=>{var So=Ff(),Co=B(So),Eo=h(Co,2),To=h(Eo,2),Us=h(To,2),$a=y(Us);$a.value=$a.__value="agent";var Sa=h($a);Sa.value=Sa.__value="key";var No=h(Sa);No.value=No.__value="password",as(Us);var Mo=h(Us,2);{var $l=it=>{var Vr=Df(),qs=B(Vr),El=h(qs,2);nt(qs,()=>i(I).identity_file,Ca=>i(I).identity_file=Ca),nt(El,()=>i(I).private_key,Ca=>i(I).private_key=Ca),b(it,Vr)};F(Mo,it=>{i(I).auth_mode==="key"&&it($l)})}var Sl=h(Mo,2);{var Cl=it=>{var Vr=Lf();nt(Vr,()=>i(I).password,qs=>i(I).password=qs),b(it,Vr)};F(Sl,it=>{i(I).auth_mode==="password"&&it(Cl)})}nt(Co,()=>i(I).host,it=>i(I).host=it),nt(Eo,()=>i(I).username,it=>i(I).username=it),nt(To,()=>i(I).port,it=>i(I).port=it),no(Us,()=>i(I).auth_mode,it=>i(I).auth_mode=it),b(dn,So)};F(Ws,dn=>{i(I).kind==="ssh"&&dn(wa)})}var Tt=h(Ws,2),Wn=h(Tt,2),ka=h(y(Wn),2);Y(()=>{fe(Tt,"placeholder",i(I).kind==="local"?"/var/www/app":"Workspace root"),Tt.required=i(I).kind==="local"}),or("submit",et,G),no(ot,()=>i(I).kind,dn=>i(I).kind=dn),nt(Ks,()=>i(I).label,dn=>i(I).label=dn),nt(Tt,()=>i(I).workspace_root,dn=>i(I).workspace_root=dn),O("click",ka,()=>p(T,!1)),b(We,et)};F(wl,We=>{i(T)&&We(kl)})}Y(()=>{wt!==(wt=_.connectionId)&&(Ie.value=(Ie.__value=wt)??"",ls(Ie,wt))}),O("change",Ie,q),O("click",$n,()=>p(H,!0)),O("click",Bn,()=>p(T,!i(T))),b(me,Xe)};F(ge,me=>{i(a)==="files"?me(we):i(a)==="search"?me(de,1):i(a)==="git"?me(pe,2):me(xe,-1)})}var Ee=h(L,2);Ha(Ee,{side:"right",min:170,max:620,onreset:()=>p(f,c.sidebar,!0),get size(){return i(f)},set size(me){p(f,me,!0)}}),Y(()=>ss(L,`width: ${i(f)??""}px`)),b(k,D)};F(ur,k=>{i(g)&&k(dr)})}var fr=h(ur,2),Fn=y(fr);{var jr=k=>{var D=Vf(),L=y(D);Zo(L,{size:64,strokeWidth:1,class:"text-vs-line"});var ge=h(L,4),we=y(ge),de=y(we);La(de,{size:16});var pe=h(we,2),xe=y(pe);ei(xe,{size:16}),O("click",we,()=>p(H,!0)),O("click",pe,()=>{p(a,"remote"),p(g,!0),p(T,!0)}),b(k,D)},vr=k=>{var D=Wf(),L=B(D);Dd(L,{});var ge=h(L,2),we=y(ge);zd(we,{});var de=h(ge,2);{var pe=xe=>{var Ee=Kf(),me=B(Ee);{var Xe=kt=>{Ha(kt,{side:"top",min:120,max:640,onreset:()=>p(v,c.panel,!0),get size(){return i(v)},set size(Br){p(v,Br,!0)}})};F(me,kt=>{i(w)&&kt(Xe)})}var Fe=h(me,2),Ie=y(Fe),yt=y(Ie);ti(yt,{size:13});var Ke=h(yt,2),wt=Z(Ke,!0),un=h(Ke,2),$n=y(un);da($n,{size:14});var jn=h(Ie,2),Bn=y(jn);ru(Bn,()=>_.connectionId,kt=>{af(kt,{get rootPath(){return s()},get session(){return r()}})}),Y(()=>{var kt;ss(Fe,`height: ${i(v)??""}px`),fe(Fe,"hidden",!i(w)),U(wt,((kt=_.connection)==null?void 0:kt.label)||"")}),O("click",un,()=>p(w,!1)),b(xe,Ee)};F(de,xe=>{i(S)&&_.connectionState==="connected"&&xe(pe)})}b(k,D)};F(Fn,k=>{_.connectionId?k(vr,-1):k(jr)})}var cn=h(fr,2);{var hr=k=>{var D=Uf(),L=B(D);Ha(L,{side:"left",min:260,max:760,onreset:()=>p(x,c.chat,!0),get size(){return i(x)},set size(Xe){p(x,Xe,!0)}});var ge=h(L,2),we=y(ge),de=y(we);Qo(de,{size:13});var pe=h(de,4),xe=y(pe);da(xe,{size:14});var Ee=h(we,2),me=y(Ee);Xd(me,{get sessions(){return n()},get session(){return r()},get rootPath(){return s()}}),Y(()=>ss(ge,`width: ${i(x)??""}px`)),O("click",pe,()=>p(l,!1)),b(k,D)};F(cn,k=>{i(l)&&k(hr)})}var pr=h(bn,2),_r=y(pr);{var N=k=>{var D=si(),L=y(D);{var ge=pe=>{La(pe,{size:12})},we=pe=>{ei(pe,{size:12})};F(L,pe=>{i(M)?pe(ge):pe(we,-1)})}var de=h(L);Y(()=>{fe(D,"title",_.connection.workspace_root),U(de,` ${_.connection.label??""}`)}),b(k,D)};F(_r,k=>{_.connection&&k(N)})}var V=h(_r,2);{var te=k=>{var D=si(),L=y(D);ro(L,{size:12});var ge=h(L);Y(()=>U(ge,` ${_.gitBranch??""}`)),b(k,D)};F(V,k=>{_.gitBranch&&k(te)})}var ke=h(V,2),Ce=Z(ke,!0),Oe=h(ke,2),Ae=y(Oe);{var He=k=>{var D=qf(),L=Z(D);Y(()=>U(L,`${_.dirtyCount??""} unsaved`)),b(k,D)};F(Ae,k=>{_.dirtyCount&&k(He)})}var je=h(Ae,2),Le=Z(je,!0),at=h(je,2);{var xt=k=>{var D=Gf(),L=B(D),ge=y(L);Gu(ge,{size:12});var we=h(L,2),de=y(we);Du(de,{size:12}),O("click",L,()=>p(w,!i(w))),O("click",we,be),b(k,D)};F(at,k=>{_.connectionState==="connected"&&k(xt)})}var Ft=h(at,2);{var wn=k=>{var D=Yf(),L=y(D);Qo(L,{size:12}),O("click",D,()=>p(l,!i(l))),b(k,D)};F(Ft,k=>{k(wn)})}var kn=h(pr,2);{var Hn=k=>{rf(k,{onclose:()=>p(m,!1)})};F(kn,k=>{i(m)&&k(Hn)})}var W=h(kn,2);{var Pe=k=>{ff(k,{onopen:R,onclose:()=>p(H,!1)})};F(W,k=>{i(H)&&k(Pe)})}var _e=h(W,2);{var ae=k=>{Cf(k,{onclose:()=>_.needsHostKey=!1,ontrusted:async()=>{_.needsHostKey=!1,await _.connect(i(P))}})};F(_e,k=>{_.needsHostKey&&k(ae)})}Y(()=>{var k;he.disabled=!_.connectionId,Je=At(Me,1,"flex items-center gap-1 rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40",null,Je,{"text-vs-bright":i(w)}),Me.disabled=_.connectionState!=="connected",fe(Me,"title",_.connectionState==="connected"?"Toggle terminal (Ctrl+`)":"Open a workspace to use the terminal"),fe(Gt,"title",(k=_.connection)==null?void 0:k.workspace_root),U(On,_.connection?`${_.connection.label} — Multibuilder IDE`:"Multibuilder IDE"),At(ln,1,`flex items-center gap-1 ${_.connectionState==="connected"?"text-vs-green":_.connectionState==="connecting"?"text-vs-yellow":_.connectionState==="idle"?"text-vs-muted":"text-vs-red"}`),U(Yt,` ${C[_.connectionState].label??""}`),U(Ce,_.statusText),U(Le,_.detailText)}),O("click",j,()=>p(H,!0)),O("click",he,()=>p(m,!0)),O("click",Me,()=>p(w,!i(w))),O("click",yn,()=>_.setStatus("Signed in to the Multibuilder dashboard")),O("click",cr,()=>p(g,!i(g))),b(e,Se),ht()}Lt(["click","change"]);function bl(e,t){return Qc(Xf,{target:e,props:t})}function ai(){const e=document.getElementById("ide-root");if(!e||e.dataset.mounted)return;e.dataset.mounted="1";const t=window.__IDE_BOOTSTRAP__||{};bl(e,{sessions:t.sessions||[],session:t.session||"",rootPath:t.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ai):ai();window.mountRemoteIde=bl;export{ra as _};
