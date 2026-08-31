const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css","./ide3.css"])))=>i.map(i=>d[i]);
var Ka=Object.defineProperty;var ts=e=>{throw TypeError(e)};var qa=(e,t,n)=>t in e?Ka(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var xe=(e,t,n)=>qa(e,typeof t!="symbol"?t+"":t,n),ri=(e,t,n)=>t.has(e)||ts("Cannot "+n);var c=(e,t,n)=>(ri(e,t,"read from private field"),n?n.call(e):t.get(e)),O=(e,t,n)=>t.has(e)?ts("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),L=(e,t,n,r)=>(ri(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),q=(e,t,n)=>(ri(e,t,"access private method"),n);var Ur=Array.isArray,Wa=Array.prototype.indexOf,Or=Array.prototype.includes,Kr=Array.from,Ts=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,Cs=Object.getOwnPropertyDescriptors,Ga=Object.prototype,Ya=Array.prototype,Mi=Object.getPrototypeOf,ns=Object.isExtensible;function In(e){return typeof e=="function"}const Ja=()=>{};function Za(e){return e()}function hi(e){for(var t=0;t<e.length;t++)e[t]()}function xs(){var e,t,n=new Promise((r,i)=>{e=r,t=i});return{promise:n,resolve:e,reject:t}}function Xa(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const me=2,yn=4,mr=8,Ii=1<<24,at=16,Qe=32,At=64,pi=128,Oi=256,Xe=512,he=1024,pe=2048,ut=4096,Me=8192,Fe=16384,En=32768,zr=1<<25,jt=65536,Rr=1<<17,Qa=1<<18,Tn=1<<19,Ns=1<<20,gt=1<<25,Xt=65536,Dr=1<<21,un=1<<22,Ft=1<<23,yt=Symbol("$state"),As=Symbol("component"),Ps=Symbol("legacy props"),eo=Symbol(""),xr=Symbol("attributes"),_i=Symbol("class"),gi=Symbol("style"),Dn=Symbol("text"),Nr=Symbol("form reset"),yr=new class extends Error{constructor(){super(...arguments);xe(this,"name","StaleReactionError");xe(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var ks;const zi=!!((ks=globalThis.document)!=null&&ks.contentType)&&globalThis.document.contentType.includes("xml"),to=1,no=2,Ms=4,ro=8,io=16,so=1,ao=2,Is=4,oo=8,lo=16,co=1,uo=2,de=Symbol("uninitialized"),Os="http://www.w3.org/1999/xhtml",fo="http://www.w3.org/2000/svg",vo="@attach";function ho(){console.warn("https://svelte.dev/e/derived_inert")}function po(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function _o(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function zs(e){return e===this.v}function go(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Rs(e){return!go(e,this.v)}function Ds(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function mo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function yo(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function bo(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function wo(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function $o(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ko(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function So(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Eo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function To(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Co(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function xo(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Cn=!1;function No(){Cn=!0}let ae=null;function bn(e){ae=e}function kt(e,t=!1,n){ae={p:ae,i:!1,c:null,e:null,s:e,x:null,r:V,l:Cn&&!t?{s:null,u:null,$:[]}:null}}function St(e){var t=ae,n=t.e;if(n!==null){t.e=null;for(var r of n)ia(r)}return t.i=!0,ae=t.p,Ri(e)}function Ri(e={}){return Ts(e,As,{value:!0}),e}function xn(){return!Cn||ae!==null&&ae.l===null}let Bt=[];function Ls(){var e=Bt;Bt=[],hi(e)}function mt(e){if(Bt.length===0&&!Kn){var t=Bt;queueMicrotask(()=>{t===Bt&&Ls()})}Bt.push(e)}function Ao(){for(;Bt.length>0;)Ls()}const Po=-7169;function ce(e,t){e.f=e.f&Po|t}function Di(e){(e.f&Xe)!==0||e.deps===null?ce(e,he):ce(e,ut)}function Fs(e){if(e!==null)for(const t of e)(t.f&me)===0||(t.f&Xt)===0||(t.f^=Xt,Fs(t.deps))}function js(e,t,n){(e.f&pe)!==0?t.add(e):(e.f&ut)!==0&&n.add(e),Fs(e.deps),ce(e,he)}let Tr=!1;function Mo(e){var t=Tr;try{return Tr=!1,[e(),Tr]}finally{Tr=t}}function Io(e,t){if(t){const n=document.body;e.autofocus=!0,mt(()=>{document.activeElement===n&&e.focus()})}}let rs=!1;function Oo(){rs||(rs=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[Nr])==null||t.call(n)})},{capture:!0}))}function Nn(e){var t=H,n=V;et(null),tt(null);try{return e()}finally{et(t),tt(n)}}function Li(e,t,n,r=n){e.addEventListener(t,()=>Nn(n));const i=e[Nr];i?e[Nr]=()=>{i(),r(!0)}:e[Nr]=()=>r(!0),Oo()}function Vs(e,t,n,r){const i=xn()?wn:Fi;var s=e.filter(p=>!p.settled),a=t.map(i);if(n.length===0&&s.length===0){r(a);return}var o=V,l=zo(),u=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(p=>p.promise)):null;function d(p){if((o.f&Fe)===0){l();try{r([...a,...p])}catch(_){_t(_,o)}Lr()}}var h=Bs();if(n.length===0){u.then(()=>d([])).finally(h);return}function v(){Promise.all(n.map(p=>Ro(p))).then(d).catch(p=>_t(p,o)).finally(h)}u?u.then(()=>{l(),v(),Lr()}):v()}function zo(){var e=V,t=H,n=ae,r=z;return function(s=!0){tt(e),et(t),bn(n),s&&(e.f&Fe)===0&&(r==null||r.activate(),r==null||r.apply())}}function Lr(e=!0){tt(null),et(null),bn(null),e&&(z==null||z.deactivate())}function Bs(){var e=V,t=e.b,n=z,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function wn(e){var t=me|pe;return V!==null&&(V.f|=Tn),{ctx:ae,deps:null,effects:null,equals:zs,f:t,fn:e,reactions:null,rv:0,v:de,wv:0,parent:V,ac:null}}const Ln=Symbol("obsolete");function Ro(e,t,n){let r=V;r===null&&mo();var i=void 0,s=Pt(de),a=!H,o=new Set;return Zo(()=>{var p,_;var l=V,u=xs();i=u.promise;try{Promise.resolve(e()).then(u.resolve,g=>{g!==yr&&u.reject(g)}).finally(Lr)}catch(g){u.reject(g),Lr()}var d=z;if(a){if((l.f&En)!==0)var h=Bs();if((p=r.b)!=null&&p.is_rendered())(_=d.async_deriveds.get(l))==null||_.reject(Ln);else for(const g of o.values())g.reject(Ln);o.add(u),d.async_deriveds.set(l,u)}const v=(g,m=void 0)=>{h==null||h(),o.delete(u),m!==Ln&&(d.activate(),m?(s.f|=Ft,$n(s,m)):((s.f&Ft)!==0&&(s.f^=Ft),$n(s,g)),d.deactivate())};u.promise.then(v,g=>v(null,g||"unknown"))}),qr(()=>{for(const l of o)l.reject(Ln)}),new Promise(l=>{function u(d){function h(){d===i?l(s):u(i)}d.then(h,h)}u(i)})}function Wn(e){const t=wn(e);return ua(t),t}function Fi(e){const t=wn(e);return t.equals=Rs,t}function Do(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)we(t[n])}}function ji(e){var t,n=V,r=e.parent;if(!Mt&&r!==null&&e.v!==de&&(r.f&(Fe|Me))!==0)return ho(),e.v;tt(r);try{e.f&=~Xt,Do(e),t=ha(e)}finally{tt(n)}return t}function Hs(e){var t=ji(e);if(!e.equals(t)&&(e.wv=da(),(!(z!=null&&z.is_fork)||e.deps===null)&&(z!==null?(z.capture(e,t,!0),Un==null||Un.capture(e,t,!0)):e.v=t,e.deps===null))){ce(e,he);return}Mt||(ye!==null?(Ui()||z!=null&&z.is_fork)&&ye.set(e,t):Di(e))}function Lo(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&Nn(()=>{n.ac.abort(yr),n.ac=null}),n.fn!==null&&(n.teardown=Ja),Gn(n,0),Ki(n))}function Us(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&kn(t)}let ii=null,an=null,z=null,Un=null,ye=null,mi=null,Kn=!1,si=!1,cn=null,Ar=null;var is=0;let Fo=1;var dn,Rt,Kt,vn,hn,pn,Tt,_n,ze,Zn,Ct,it,vt,gn,qt,ne,yi,Fn,bi,Ks,qs,ln,jo,jn;const Vr=class Vr{constructor(){O(this,ne);xe(this,"id",Fo++);O(this,dn,!1);xe(this,"linked",!0);O(this,Rt,null);O(this,Kt,null);xe(this,"async_deriveds",new Map);xe(this,"current",new Map);xe(this,"previous",new Map);O(this,vn,new Set);O(this,hn,new Set);O(this,pn,0);O(this,Tt,new Map);O(this,_n,null);O(this,ze,[]);O(this,Zn,[]);O(this,Ct,new Set);O(this,it,new Set);O(this,vt,new Map);O(this,gn,new Set);xe(this,"is_fork",!1);O(this,qt,!1);an===null?ii=an=this:(L(an,Kt,this),L(this,Rt,an)),an=this}skip_effect(t){c(this,vt).has(t)||c(this,vt).set(t,{d:[],m:[]}),c(this,gn).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=c(this,vt).get(t);if(r){c(this,vt).delete(t);for(var i of r.d)ce(i,pe),n(i);for(i of r.m)ce(i,ut),n(i)}c(this,gn).add(t)}capture(t,n,r=!1){t.v!==de&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Ft)===0&&(this.current.set(t,[n,r]),ye==null||ye.set(t,n)),this.is_fork||(t.v=n)}activate(){z=this}deactivate(){z=null,ye=null}flush(){try{si=!0,z=this,q(this,ne,Fn).call(this)}finally{is=0,mi=null,cn=null,Ar=null,si=!1,z=null,ye=null,bt.clear()}}discard(){var t;for(const n of c(this,hn))n(this);c(this,hn).clear();for(const n of this.async_deriveds.values())n.reject(Ln);q(this,ne,jn).call(this),(t=c(this,_n))==null||t.resolve()}register_created_effect(t){c(this,Zn).push(t)}increment(t,n){if(L(this,pn,c(this,pn)+1),t){let r=c(this,Tt).get(n)??0;c(this,Tt).set(n,r+1)}}decrement(t,n){if(L(this,pn,c(this,pn)-1),t){let r=c(this,Tt).get(n)??0;r===1?c(this,Tt).delete(n):c(this,Tt).set(n,r-1)}c(this,qt)||(L(this,qt,!0),mt(()=>{L(this,qt,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)c(this,Ct).add(r);for(const r of n)c(this,it).add(r);t.clear(),n.clear()}oncommit(t){c(this,vn).add(t)}ondiscard(t){c(this,hn).add(t)}settled(){return(c(this,_n)??L(this,_n,xs())).promise}static ensure(){if(z===null){const t=z=new Vr;!si&&!Kn&&mt(()=>{c(t,dn)||t.flush()})}return z}apply(){{ye=null;return}}schedule(t){var i;if(mi=t,(i=t.b)!=null&&i.is_pending&&(t.f&(yn|mr|Ii))!==0&&(t.f&En)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(cn!==null&&n===V&&(H===null||(H.f&me)===0))return;if((r&(At|Qe))!==0){if((r&he)===0)return;n.f^=he}}c(this,ze).push(n)}};dn=new WeakMap,Rt=new WeakMap,Kt=new WeakMap,vn=new WeakMap,hn=new WeakMap,pn=new WeakMap,Tt=new WeakMap,_n=new WeakMap,ze=new WeakMap,Zn=new WeakMap,Ct=new WeakMap,it=new WeakMap,vt=new WeakMap,gn=new WeakMap,qt=new WeakMap,ne=new WeakSet,yi=function(){if(this.is_fork)return!0;for(const r of c(this,Tt).keys()){for(var t=r,n=!1;t.parent!==null;){if(c(this,vt).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},Fn=function(){var l,u,d,h;L(this,dn,!0),is++>1e3&&(q(this,ne,jn).call(this),Bo());for(const v of c(this,Ct))c(this,it).delete(v),ce(v,pe),this.schedule(v);for(const v of c(this,it))ce(v,ut),this.schedule(v);const t=c(this,ze);L(this,ze,[]),this.apply();var n=cn=[],r=[],i=Ar=[];for(const v of t)try{q(this,ne,bi).call(this,v,n,r)}catch(p){throw Ys(v),q(this,ne,yi).call(this)||this.discard(),p}if(z=null,i.length>0){var s=Vr.ensure();for(const v of i)s.schedule(v)}if(cn=null,Ar=null,q(this,ne,yi).call(this)){q(this,ne,ln).call(this,r),q(this,ne,ln).call(this,n);for(const[v,p]of c(this,vt))Gs(v,p);i.length>0&&q(l=z,ne,Fn).call(l);return}const a=q(this,ne,Ks).call(this);if(a){q(this,ne,ln).call(this,r),q(this,ne,ln).call(this,n),q(u=a,ne,qs).call(u,this);return}c(this,Ct).clear(),c(this,it).clear();for(const v of c(this,vn))v(this);c(this,vn).clear(),Un=this,ss(r),ss(n),Un=null,(d=c(this,_n))==null||d.resolve();var o=z;if(c(this,pn)===0&&(c(this,ze).length===0||o!==null)&&q(this,ne,jn).call(this),c(this,ze).length>0)if(o!==null){const v=o;c(v,ze).push(...c(this,ze).filter(p=>!c(v,ze).includes(p)))}else o=this;o!==null&&(bt.clear(),q(h=o,ne,Fn).call(h))},bi=function(t,n,r){t.f^=he;for(var i=t.first;i!==null;){var s=i.f,a=(s&(Qe|At))!==0,o=a&&(s&he)!==0,l=o||(s&Me)!==0||c(this,vt).has(i);if(!l&&i.fn!==null){a?i.f^=he:(s&yn)!==0?n.push(i):wr(i)&&((s&at)!==0&&c(this,it).add(i),kn(i));var u=i.first;if(u!==null){i=u;continue}}for(;i!==null;){var d=i.next;if(d!==null){i=d;break}i=i.parent}}},Ks=function(){for(var t=c(this,Rt);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=c(t,Rt)}return null},qs=function(t){var r;for(const[i,s]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,s);for(const[i,s]of t.async_deriveds){const a=this.async_deriveds.get(i);a&&s.promise.then(a.resolve).catch(a.reject)}t.async_deriveds.clear(),this.transfer_effects(c(t,Ct),c(t,it));const n=i=>{var s=i.reactions;if(s!==null&&!((i.f&me)!==0&&(i.f&(pe|ut))===0))for(const l of s){var a=l.f;if((a&me)!==0)n(l);else{var o=l;a&(un|at)&&!this.async_deriveds.has(o)&&(c(this,it).delete(o),ce(o,pe),this.schedule(o))}}};for(const i of this.current.keys())n(i);this.oncommit(()=>t.discard()),q(r=t,ne,jn).call(r),z=this,q(this,ne,Fn).call(this)},ln=function(t){for(var n=0;n<t.length;n+=1)js(t[n],c(this,Ct),c(this,it))},jo=function(){var h;for(let v=ii;v!==null;v=c(v,Kt)){var t=v.id<this.id,n=[];for(const[p,[_,g]]of this.current){if(v.current.has(p)){var r=v.current.get(p)[0];if(t&&_!==r)v.current.set(p,[_,g]);else continue}n.push(p)}if(t)for(const[p,_]of this.async_deriveds){const g=v.async_deriveds.get(p);g&&_.promise.then(g.resolve).catch(g.reject)}var i=[...v.current.keys()].filter(p=>!v.current.get(p)[1]);if(!(!c(v,dn)||i.length===0)){var s=i.filter(p=>!this.current.has(p));if(s.length===0)t&&v.discard();else if(n.length>0){if(t)for(const p of c(this,gn))v.unskip_effect(p,_=>{var g;(_.f&(at|un))!==0?v.schedule(_):q(g=v,ne,ln).call(g,[_])});v.activate();var a=new Set,o=new Map;for(var l of n)Ws(l,s,a,o);o=new Map;var u=[...v.current].filter(([p,_])=>{const g=this.current.get(p);return g?g[0]!==_[0]||g[1]!==_[1]:!0}).map(([p])=>p);if(u.length>0)for(const p of c(this,Zn))(p.f&(Fe|Me|Rr))===0&&Vi(p,u,o)&&((p.f&(un|at))!==0?(ce(p,pe),v.schedule(p)):c(v,Ct).add(p));if(c(v,ze).length>0&&!c(v,qt)){v.apply();for(var d of c(v,ze))q(h=v,ne,bi).call(h,d,[],[]);L(v,ze,[])}v.deactivate()}}}},jn=function(){if(this.linked){var t=c(this,Rt),n=c(this,Kt);t===null?ii=n:L(t,Kt,n),n===null?an=t:L(n,Rt,t),this.linked=!1}};let Qt=Vr;function Vo(e){var t=Kn;Kn=!0;try{for(var n;;){if(Ao(),z===null)return n;z.flush()}}finally{Kn=t}}function Bo(){try{ko()}catch(e){_t(e,mi)}}let rt=null;function ss(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(Fe|Me))===0&&wr(r)&&(rt=new Set,kn(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&oa(r),(rt==null?void 0:rt.size)>0)){bt.clear();for(const i of rt){if((i.f&(Fe|Me))!==0)continue;const s=[i];let a=i.parent;for(;a!==null;)rt.has(a)&&(rt.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];(l.f&(Fe|Me))===0&&kn(l)}}rt.clear()}}rt=null}}function Ws(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const i of e.reactions){const s=i.f;(s&me)!==0?Ws(i,t,n,r):(s&(un|at))!==0&&(s&pe)===0&&Vi(i,t,r)&&(ce(i,pe),Bi(i))}}function Vi(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const i of e.deps){if(Or.call(t,i))return!0;if((i.f&me)!==0&&Vi(i,t,n))return n.set(i,!0),!0}return n.set(e,!1),!1}function Bi(e){z.schedule(e)}function Gs(e,t){if(!((e.f&Qe)!==0&&(e.f&he)!==0)){(e.f&pe)!==0?t.d.push(e):(e.f&ut)!==0&&t.m.push(e),ce(e,he);for(var n=e.first;n!==null;)Gs(n,t),n=n.next}}function Ys(e){ce(e,he);for(var t=e.first;t!==null;)Ys(t),t=t.next}let Fr=new Set;const bt=new Map;let Js=!1;function Pt(e,t){var n={f:0,v:e,reactions:null,equals:zs,rv:0,wv:0};return n}function D(e,t){const n=Pt(e);return ua(n),n}function Ho(e,t=!1,n=!0){var i;const r=Pt(e);return t||(r.equals=Rs),Cn&&n&&ae!==null&&ae.l!==null&&((i=ae.l).s??(i.s=[])).push(r),r}function $(e,t,n=!1){H!==null&&(!ot||(H.f&Rr)!==0)&&xn()&&(H.f&(me|at|un|Rr))!==0&&(wt===null||!wt.has(e))&&Co();let r=n?be(t):t;return $n(e,r,Ar)}function $n(e,t,n=null){if(!e.equals(t)){Mt?bt.set(e,t):bt.has(e)||bt.set(e,e.v);var r=Qt.ensure();if(r.capture(e,t),(e.f&me)!==0){const i=e;(e.f&pe)!==0&&ji(i),ye===null&&Di(i)}e.wv=da(),Zs(e,pe,n),xn()&&V!==null&&(V.f&he)!==0&&(V.f&(Qe|At))===0&&(Ye===null?el([e]):Ye.push(e)),!r.is_fork&&Fr.size>0&&!Js&&Uo()}return t}function Uo(){Js=!1;for(const e of Fr){(e.f&he)!==0&&ce(e,ut);let t;try{t=wr(e)}catch{t=!0}t&&kn(e)}Fr.clear()}function as(e,t=1){var n=f(e),r=t===1?n++:n--;return $(e,n),r}function qn(e){$(e,e.v+1)}function Zs(e,t,n){var r=e.reactions;if(r!==null)for(var i=xn(),s=r.length,a=0;a<s;a++){var o=r[a],l=o.f;if(!(!i&&o===V)){var u=(l&pe)===0;if(u&&ce(o,t),(l&Rr)!==0)Fr.add(o);else if((l&me)!==0){var d=o;ye==null||ye.delete(d),(l&Xt)===0&&(l&Xe&&(V===null||(V.f&Dr)===0)&&(o.f|=Xt),Zs(d,ut,n))}else if(u){var h=o;(l&at)!==0&&rt!==null&&rt.add(h),n!==null?n.push(h):Bi(h)}}}}function be(e){if(typeof e!="object"||e===null||yt in e||As in e)return e;const t=Mi(e);if(t!==Ga&&t!==Ya)return e;var n=new Map,r=Ur(e),i=D(0),s=Zt,a=o=>{if(Zt===s)return o();var l=H,u=Zt;et(null),cs(s);var d=o();return et(l),cs(u),d};return r&&n.set("length",D(e.length)),new Proxy(e,{defineProperty(o,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Eo();var d=n.get(l);return d===void 0?a(()=>{var h=D(u.value);return n.set(l,h),h}):$(d,u.value,!0),!0},deleteProperty(o,l){var u=n.get(l);if(u===void 0){if(l in o){const d=a(()=>D(de));n.set(l,d),qn(i)}}else $(u,de),qn(i);return!0},get(o,l,u){var p;if(l===yt)return e;var d=n.get(l),h=l in o;if(d===void 0&&(!h||(p=Lt(o,l))!=null&&p.writable)&&(d=a(()=>{var _=be(h?o[l]:de),g=D(_);return g}),n.set(l,d)),d!==void 0){var v=f(d);return v===de?void 0:v}return Reflect.get(o,l,u)},getOwnPropertyDescriptor(o,l){var u=Reflect.getOwnPropertyDescriptor(o,l);if(u&&"value"in u){var d=n.get(l);d&&(u.value=f(d))}else if(u===void 0){var h=n.get(l),v=h==null?void 0:h.v;if(h!==void 0&&v!==de)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return u},has(o,l){var v;if(l===yt)return!0;var u=n.get(l),d=u!==void 0&&u.v!==de||Reflect.has(o,l);if(u!==void 0||V!==null&&(!d||(v=Lt(o,l))!=null&&v.writable)){u===void 0&&(u=a(()=>{var p=d?be(o[l]):de,_=D(p);return _}),n.set(l,u));var h=f(u);if(h===de)return!1}return d},set(o,l,u,d){var M;var h=n.get(l),v=l in o;if(r&&l==="length")for(var p=u;p<h.v;p+=1){var _=n.get(p+"");_!==void 0?$(_,de):p in o&&(_=a(()=>D(de)),n.set(p+"",_))}if(h===void 0)(!v||(M=Lt(o,l))!=null&&M.writable)&&(h=a(()=>D(void 0)),$(h,be(u)),n.set(l,h));else{v=h.v!==de;var g=a(()=>be(u));$(h,g)}var m=Reflect.getOwnPropertyDescriptor(o,l);if(m!=null&&m.set&&m.set.call(d,u),!v){if(r&&typeof l=="string"){var E=n.get("length"),R=Number(l);Number.isInteger(R)&&R>=E.v&&$(E,R+1)}qn(i)}return!0},ownKeys(o){f(i);var l=Reflect.ownKeys(o).filter(h=>{var v=n.get(h);return v===void 0||v.v!==de});for(var[u,d]of n)d.v!==de&&!(u in o)&&l.push(u);return l},setPrototypeOf(){To()}})}function os(e){try{if(e!==null&&typeof e=="object"&&yt in e)return e[yt]}catch{}return e}function Xs(e,t){return Object.is(os(e),os(t))}var wi,Qs,ea,ta;function Ko(){if(wi===void 0){wi=window,Qs=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;ea=Lt(t,"firstChild").get,ta=Lt(t,"nextSibling").get,ns(e)&&(e[_i]=void 0,e[xr]=null,e[gi]=void 0,e.__e=void 0),ns(n)&&(n[Dn]=void 0)}}function Nt(e=""){return document.createTextNode(e)}function en(e){return ea.call(e)}function br(e){return ta.call(e)}function C(e,t){return en(e)}function G(e,t=!1){{var n=en(e);return n instanceof Comment&&n.data===""?br(n):n}}function ge(e,t=!1){return en(e)}function w(e,t=1,n=!1){let r=e;for(;t--;)r=br(r);return r}function qo(e){e.textContent=""}function na(){return!1}function Hi(e,t,n){return t==null||t===Os?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Wo(e){var t=V;if(t===null)return H.f|=Ft,e;if((t.f&En)===0&&(t.f&yn)===0)throw e;_t(e,t)}function _t(e,t){if(!(t!==null&&(t.f&Fe)!==0)){for(;t!==null;){if((t.f&pi)!==0&&(t.f&(Fe|zr))===0){if((t.f&En)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function ra(e){V===null&&(H===null&&$o(),wo()),Mt&&bo()}function Go(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function ft(e,t){var n=V;n!==null&&(n.f&Me)!==0&&(e|=Me);var r={ctx:ae,deps:null,nodes:null,f:e|pe|Xe,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};z==null||z.register_created_effect(r);var i=r;if((e&yn)!==0)cn!==null?cn.push(r):Qt.ensure().schedule(r);else if(t!==null){try{kn(r)}catch(a){throw we(r),a}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&Tn)===0&&(i=i.first,(e&at)!==0&&(e&jt)!==0&&i!==null&&(i.f|=jt))}if(i!==null&&(i.parent=n,n!==null&&Go(i,n),H!==null&&(H.f&me)!==0&&(e&At)===0)){var s=H;(s.effects??(s.effects=[])).push(i)}return r}function Ui(){return H!==null&&!ot}function qr(e){const t=ft(mr,null);return ce(t,he),t.teardown=e,t}function tn(e){ra();var t=V.f,n=!H&&(t&Qe)!==0&&ae!==null&&!ae.i;if(n){var r=ae;(r.e??(r.e=[])).push(e)}else return ia(e)}function ia(e){return ft(yn|Ns,e)}function Yo(e){return ra(),ft(mr|Ns,e)}function Jo(e){Qt.ensure();const t=ft(At|Tn,e);return(n={})=>new Promise(r=>{n.outro?Jt(t,()=>{we(t),r(void 0)}):(we(t),r(void 0))})}function Wr(e){return ft(yn,e)}function Zo(e){return ft(un|Tn,e)}function Gr(e,t=0){return ft(mr|t,e)}function fe(e,t=[],n=[],r=[]){Vs(r,t,n,i=>{ft(mr,()=>{e(...i.map(f))})})}function An(e,t=0){var n=ft(at|t,e);return n}function sa(e,t=0){var n=ft(Ii|t,e);return n}function De(e){return ft(Qe|Tn,e)}function aa(e){var t=e.teardown;if(t!==null){const n=Mt,r=H;ls(!0),et(null);try{t.call(null)}catch(i){_t(i,e.parent)}finally{ls(n),et(r)}}}function Ki(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const i=n.ac;i!==null&&Nn(()=>{i.abort(yr)});var r=n.next;(n.f&At)!==0?n.parent=null:we(n,t),n=r}}function Xo(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Qe)===0&&we(t),t=n}}function we(e,t=!0){var n=!1;(t||(e.f&Qa)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Qo(e.nodes.start,e.nodes.end),n=!0),e.f|=zr,Ki(e,t&&!n),Gn(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const s of r)s.stop();aa(e),e.f^=zr,e.f|=Fe;var i=e.parent;i!==null&&i.first!==null&&oa(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Qo(e,t){for(;e!==null;){var n=e===t?null:br(e);e.remove(),e=n}}function oa(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Jt(e,t,n=!0){var r=[];e.f|=Oi,la(e,r,!0);var i=()=>{n&&we(e),t&&t()},s=r.length;if(s>0){var a=()=>--s||i();for(var o of r)o.out(a)}else i()}function la(e,t,n){if((e.f&Me)===0){e.f^=Me;var r=e.nodes&&e.nodes.t;if(r!==null)for(const o of r)(o.is_global||n)&&t.push(o);for(var i=e.first;i!==null;){var s=i.next;if((i.f&At)===0){var a=(i.f&jt)!==0||(i.f&Qe)!==0&&(e.f&at)!==0;la(i,t,a?n:!1)}i=s}}}function jr(e){e.f&=~Oi,ca(e,!0)}function ca(e,t){if((e.f&Oi)===0&&(e.f&Me)!==0){e.f^=Me,(e.f&he)===0&&(ce(e,pe),Qt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&jt)!==0||(n.f&Qe)!==0;ca(n,i?t:!1),n=r}var s=e.nodes&&e.nodes.t;if(s!==null)for(const a of s)(a.is_global||t)&&a.in()}}function qi(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:br(n);t.append(n),n=i}}let Pr=!1,Mt=!1;function ls(e){Mt=e}let H=null,ot=!1;function et(e){H=e}let V=null;function tt(e){V=e}let wt=null;function ua(e){H!==null&&(wt??(wt=new Set)).add(e)}let Le=null,Ue=0,Ye=null;function el(e){Ye=e}let fa=1,Ht=0,Zt=Ht;function cs(e){Zt=e}function da(){return++fa}function wr(e){var t=e.f;if((t&pe)!==0)return!0;if(t&me&&(e.f&=~Xt),(t&ut)!==0){for(var n=e.deps,r=n.length,i=0;i<r;i++){var s=n[i];if(wr(s)&&Hs(s),s.wv>e.wv)return!0}(t&Xe)!==0&&ye===null&&ce(e,he)}return!1}function va(e,t,n=!0){var r=e.reactions;if(r!==null&&!(wt!==null&&wt.has(e)))for(var i=0;i<r.length;i++){var s=r[i];(s.f&me)!==0?va(s,t,!1):t===s&&(n?ce(s,pe):(s.f&he)!==0&&ce(s,ut),Bi(s))}}function ha(e){var t=Le,n=Ue,r=Ye,i=H,s=wt,a=ae,o=ot,l=Zt,u=e.f;Le=null,Ue=0,Ye=null,H=(u&(Qe|At))===0?e:null,wt=null,bn(e.ctx),ot=!1,Zt=++Ht,e.ac!==null&&(Nn(()=>{e.ac.abort(yr)}),e.ac=null);try{e.f|=Dr;var d=e.fn,h=d();e.f|=En;var v=us(e);if(xn()&&Ye!==null&&!ot&&v!==null&&(e.f&(me|ut|pe))===0)for(var p=0;p<Ye.length;p++)va(Ye[p],e);if(i!==null&&i!==e){if(Ht++,i.deps!==null)for(let _=0;_<n;_+=1)i.deps[_].rv=Ht;if(t!==null)for(const _ of t)_.rv=Ht;Ye!==null&&(r===null?r=Ye:r.push(...Ye))}return(e.f&Ft)!==0&&(e.f^=Ft),h}catch(_){return us(e),Wo(_)}finally{e.f^=Dr,Le=t,Ue=n,Ye=r,H=i,wt=s,bn(a),ot=o,Zt=l}}function us(e){var i;var t=e.deps,n=z==null?void 0:z.is_fork;if(Le!==null){var r;if(n||Gn(e,Ue),t!==null&&Ue>0)for(t.length=Ue+Le.length,r=0;r<Le.length;r++)t[Ue+r]=Le[r];else e.deps=t=Le;if(Ui()&&(e.f&Xe)!==0)for(r=Ue;r<t.length;r++)((i=t[r]).reactions??(i.reactions=[])).push(e)}else!n&&t!==null&&Ue<t.length&&(Gn(e,Ue),t.length=Ue);return t}function tl(e,t){let n=t.reactions;if(n!==null){var r=Wa.call(n,e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}if(n===null&&(t.f&me)!==0&&(Le===null||!Or.call(Le,t))){var s=t;(s.f&Xe)!==0&&(s.f^=Xe,s.f&=~Xt),s.v!==de&&Di(s),s.ac!==null&&Nn(()=>{s.ac.abort(yr),s.ac=null,ce(s,pe)}),Lo(s),Gn(s,0)}}function Gn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)tl(e,n[r])}function kn(e){var t=e.f;if((t&Fe)===0){ce(e,he);var n=V,r=Pr;V=e,Pr=(t&(Qe|At))===0;try{(t&(at|Ii))!==0?Xo(e):Ki(e),aa(e);var i=ha(e);e.teardown=typeof i=="function"?i:null,e.wv=fa;var s}finally{Pr=r,V=n}}}async function nl(){await Promise.resolve(),Vo()}function f(e){var t=e.f,n=(t&me)!==0;if(H!==null&&!ot){var r=V!==null&&(V.f&Fe)!==0;if(!r&&(wt===null||!wt.has(e))){var i=H.deps;if((H.f&Dr)!==0)e.rv<Ht&&(e.rv=Ht,Le===null&&i!==null&&i[Ue]===e?Ue++:Le===null?Le=[e]:Le.push(e));else{H.deps??(H.deps=[]),Or.call(H.deps,e)||H.deps.push(e);var s=e.reactions;s===null?e.reactions=[H]:Or.call(s,H)||s.push(H)}}}if(Mt&&bt.has(e))return bt.get(e);if(n){var a=e;if(Mt){var o=a.v;return((a.f&he)===0&&a.reactions!==null||_a(a))&&(o=ji(a)),bt.set(a,o),o}var l=(a.f&Xe)===0&&!ot&&H!==null&&(Pr||(H.f&Xe)!==0),u=(a.f&En)===0;wr(a)&&(l&&(a.f|=Xe),Hs(a)),l&&!u&&(Us(a),pa(a))}if(ye!=null&&ye.has(e))return ye.get(e);if((e.f&Ft)!==0)throw e.v;return e.v}function pa(e){if(e.f|=Xe,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&me)!==0&&(t.f&Xe)===0&&(Us(t),pa(t))}function _a(e){if(e.v===de)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(bt.has(t)||(t.f&me)!==0&&_a(t))return!0;return!1}function $t(e){var t=ot;try{return ot=!0,e()}finally{ot=t}}function Vt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(yt in e)$i(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&yt in n&&$i(n)}}}function $i(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{$i(e[r],t)}catch{}const n=Mi(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Cs(n);for(let i in r){const s=r[i].get;if(s)try{s.call(e)}catch{}}}}}function rl(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const il=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function sl(e){return il.includes(e)}const al={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function ol(e){return e=e.toLowerCase(),al[e]??e}const ll=["touchstart","touchmove"];function cl(e){return ll.includes(e)}const Ut=Symbol("events"),ga=new Set,ki=new Set;function ma(e,t,n,r={}){function i(s){if(r.capture||Ei.call(t,s),!s.cancelBubble)return Nn(()=>n==null?void 0:n.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?mt(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function Si(e,t,n,r,i){var s={capture:r,passive:i},a=ma(e,t,n,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&qr(()=>{t.removeEventListener(e,a,s)})}function W(e,t,n){(t[Ut]??(t[Ut]={}))[e]=n}function nn(e){for(var t=0;t<e.length;t++)ga.add(e[t]);for(var n of ki)n(e)}let ai=null,oi=!1;function Ei(e){var g,m;var t=this,n=t.ownerDocument,r=e.type,i=((g=e.composedPath)==null?void 0:g.call(e))||[],s=i[0]||e.target;ai=e,oi||(oi=!0,setTimeout(()=>{oi=!1,ai=null}));var a=0,o=ai===e&&e[Ut];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[Ut]=t;return}var u=i.indexOf(t);if(u===-1)return;l<=u&&(a=l)}if(s=i[a]||e.target,s!==t){Ts(e,"currentTarget",{configurable:!0,get(){return s||n}});var d=H,h=V;et(null),tt(null);try{for(var v,p=[];s!==null&&s!==t;){try{var _=(m=s[Ut])==null?void 0:m[r];_!=null&&(!s.disabled||e.target===s)&&_.call(s,e)}catch(E){v?p.push(E):v=E}if(e.cancelBubble)break;a++,s=a<i.length?i[a]:null}if(v){for(let E of p)queueMicrotask(()=>{throw E});throw v}}finally{e[Ut]=t,delete e.currentTarget,et(d),tt(h)}}}var Ss;const li=((Ss=globalThis==null?void 0:globalThis.window)==null?void 0:Ss.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function ul(e){return(li==null?void 0:li.createHTML(e))??e}function ya(e){var t=Hi("template");return t.innerHTML=ul(e.replaceAll("<!>","<!---->")),t.content}function Yn(e,t){var n=V;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function U(e,t){var n=(t&co)!==0,r=(t&uo)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=ya(s?e:"<!>"+e),n||(i=en(i)));var a=r||Qs?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=en(a),l=a.lastChild;Yn(o,l)}else Yn(a,a);return a}}function fl(e,t,n="svg"){var r=!e.startsWith("<!>"),i=`<${n}>${r?e:"<!>"+e}</${n}>`,s;return()=>{if(!s){var a=ya(i),o=en(a);s=en(o)}var l=s.cloneNode(!0);return Yn(l,l),l}}function dl(e,t){return fl(e,t,"svg")}function Q(){var e=document.createDocumentFragment(),t=document.createComment(""),n=Nt();return e.append(t,n),Yn(t,n),e}function S(e,t){e!==null&&e.before(t)}function vl(e){let t=0,n=Pt(0),r;return()=>{Ui()&&(f(n),Gr(()=>(t===0&&(r=$t(()=>e(()=>qn(n)))),t+=1,()=>{mt(()=>{t-=1,t===0&&(r==null||r(),r=void 0,qn(n))})})))}}var hl=jt|Tn;function pl(e,t,n,r){new _l(e,t,n,r)}var Je,Pi,Ze,Wt,Ne,Ve,Ae,Be,ht,Gt,Dt,mn,Xn,Qn,xt,Br,se,gl,ml,Ti,yl,Ci,Vn,Mr,xi,Ni;class _l{constructor(t,n,r,i){O(this,se);xe(this,"parent");xe(this,"is_pending",!1);xe(this,"transform_error");O(this,Je);O(this,Pi,null);O(this,Ze);O(this,Wt);O(this,Ne);O(this,Ve,null);O(this,Ae,null);O(this,Be,null);O(this,ht,null);O(this,Gt,0);O(this,Dt,0);O(this,mn,!1);O(this,Xn,new Set);O(this,Qn,new Set);O(this,xt,null);O(this,Br,vl(()=>(L(this,xt,Pt(c(this,Gt))),()=>{L(this,xt,null)})));var s;L(this,Je,t),L(this,Ze,n),L(this,Wt,a=>{var o=V;o.b=this,o.f|=pi,r(a)}),this.parent=V.b,this.transform_error=i??((s=this.parent)==null?void 0:s.transform_error)??(a=>a),L(this,Ne,An(()=>{q(this,se,Ci).call(this)},hl))}defer_effect(t){js(t,c(this,Xn),c(this,Qn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!c(this,Ze).pending}update_pending_count(t,n){q(this,se,xi).call(this,t,n),L(this,Gt,c(this,Gt)+t),!(!c(this,xt)||c(this,mn))&&(L(this,mn,!0),mt(()=>{L(this,mn,!1),c(this,xt)&&$n(c(this,xt),c(this,Gt))}))}get_effect_pending(){return c(this,Br).call(this),f(c(this,xt))}error(t){if(!c(this,Ze).onerror&&!c(this,Ze).failed)throw t;z!=null&&z.is_fork?(c(this,Ve)&&z.skip_effect(c(this,Ve)),c(this,Ae)&&z.skip_effect(c(this,Ae)),c(this,Be)&&z.skip_effect(c(this,Be)),z.oncommit(()=>{q(this,se,Ni).call(this,t)})):q(this,se,Ni).call(this,t)}}Je=new WeakMap,Pi=new WeakMap,Ze=new WeakMap,Wt=new WeakMap,Ne=new WeakMap,Ve=new WeakMap,Ae=new WeakMap,Be=new WeakMap,ht=new WeakMap,Gt=new WeakMap,Dt=new WeakMap,mn=new WeakMap,Xn=new WeakMap,Qn=new WeakMap,xt=new WeakMap,Br=new WeakMap,se=new WeakSet,gl=function(){try{L(this,Ve,De(()=>c(this,Wt).call(this,c(this,Je))))}catch(t){this.error(t)}},ml=function(t){const n=c(this,Ze).failed,{reset:r,invoke_onerror:i}=q(this,se,Ti).call(this,t);mt(i),n&&L(this,Be,De(()=>{n(c(this,Je),()=>t,()=>r)}))},Ti=function(t){var n=!1,r=!1;const i=()=>{if(n){_o();return}n=!0,r&&xo(),c(this,Be)!==null&&Jt(c(this,Be),()=>{L(this,Be,null)}),q(this,se,Mr).call(this,()=>{q(this,se,Ci).call(this)})};return{reset:i,invoke_onerror:()=>{var a,o;try{r=!0,(o=(a=c(this,Ze)).onerror)==null||o.call(a,t,i),r=!1}catch(l){_t(l,c(this,Ne)&&c(this,Ne).parent)}}}},yl=function(){const t=c(this,Ze).pending;t&&(this.is_pending=!0,L(this,Ae,De(()=>t(c(this,Je)))),mt(()=>{var n=L(this,ht,document.createDocumentFragment()),r=Nt(),i=!1;if(n.append(r),L(this,Ve,q(this,se,Mr).call(this,()=>{try{return De(()=>c(this,Wt).call(this,r))}catch(s){try{this.error(s),i=!0}catch(a){_t(a,c(this,Ne).parent)}return null}})),c(this,Ve)===null){L(this,ht,null),i&&q(this,se,Vn).call(this,z);return}c(this,Dt)===0&&(c(this,Je).before(n),L(this,ht,null),Jt(c(this,Ae),()=>{L(this,Ae,null)}),q(this,se,Vn).call(this,z))}))},Ci=function(){try{if(this.is_pending=this.has_pending_snippet(),L(this,Dt,0),L(this,Gt,0),L(this,Ve,De(()=>{c(this,Wt).call(this,c(this,Je))})),c(this,Dt)>0){var t=L(this,ht,document.createDocumentFragment());qi(c(this,Ve),t);const n=c(this,Ze).pending;L(this,Ae,De(()=>n(c(this,Je))))}else q(this,se,Vn).call(this,z)}catch(n){this.error(n)}},Vn=function(t){this.is_pending=!1,t.transfer_effects(c(this,Xn),c(this,Qn))},Mr=function(t){var n=V,r=H,i=ae;tt(c(this,Ne)),et(c(this,Ne)),bn(c(this,Ne).ctx);try{return Qt.ensure(),t()}finally{tt(n),et(r),bn(i)}},xi=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&q(r=this.parent,se,xi).call(r,t,n);return}L(this,Dt,c(this,Dt)+t),c(this,Dt)===0&&(q(this,se,Vn).call(this,n),c(this,Ae)&&Jt(c(this,Ae),()=>{L(this,Ae,null)}),c(this,ht)&&(c(this,Je).before(c(this,ht)),L(this,ht,null)))},Ni=function(t){c(this,Ve)&&(we(c(this,Ve)),L(this,Ve,null)),c(this,Ae)&&(we(c(this,Ae)),L(this,Ae,null)),c(this,Be)&&(we(c(this,Be)),L(this,Be,null));let n=c(this,Ze).failed;const r=i=>{const{reset:s,invoke_onerror:a}=q(this,se,Ti).call(this,i);a(),n&&L(this,Be,q(this,se,Mr).call(this,()=>{try{return De(()=>{var o=V;o.b=this,o.f|=pi,n(c(this,Je),()=>i,()=>s)})}catch(o){return _t(o,c(this,Ne).parent),null}}))};mt(()=>{var i;try{i=this.transform_error(t)}catch(s){_t(s,c(this,Ne)&&c(this,Ne).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(r,s=>_t(s,c(this,Ne)&&c(this,Ne).parent)):r(i)})};function ue(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Dn]??(e[Dn]=e.nodeValue))&&(e[Dn]=n,e.nodeValue=`${n}`)}function bl(e,t){return wl(e,t)}const Cr=new Map;function wl(e,{target:t,anchor:n,props:r={},events:i,context:s,intro:a=!0,transformError:o}){Ko();var l=void 0,u=Jo(()=>{var d=n??t.appendChild(Nt());pl(d,{pending:()=>{}},p=>{kt({});var _=ae;s&&(_.c=s),i&&(r.$$events=i),l=e(p,r)||Ri(),St()},o);var h=new Set,v=p=>{for(var _=0;_<p.length;_++){var g=p[_];if(!h.has(g)){h.add(g);var m=cl(g);for(const M of[t,document]){var E=Cr.get(M);E===void 0&&(E=new Map,Cr.set(M,E));var R=E.get(g);R===void 0?(M.addEventListener(g,Ei,{passive:m}),E.set(g,1)):E.set(g,R+1)}}}};return v(Kr(ga)),ki.add(v),()=>{var m;for(var p of h)for(const E of[t,document]){var _=Cr.get(E),g=_.get(p);--g==0?(E.removeEventListener(p,Ei),_.delete(p),_.size===0&&Cr.delete(E)):_.set(p,g)}ki.delete(v),d!==n&&((m=d.parentNode)==null||m.removeChild(d))}});return $l.set(l,u),l}let $l=new WeakMap;var st,pt,He,Yt,er,tr,Hr;class Yr{constructor(t,n=!0){xe(this,"anchor");O(this,st,new Map);O(this,pt,new Map);O(this,He,new Map);O(this,Yt,new Set);O(this,er,!0);O(this,tr,t=>{if(c(this,st).has(t)){var n=c(this,st).get(t),r=c(this,pt).get(n);if(r)jr(r),c(this,Yt).delete(n);else{var i=c(this,He).get(n);i&&(jr(i.effect),c(this,pt).set(n,i.effect),c(this,He).delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(const[s,a]of c(this,st)){if(c(this,st).delete(s),s===t)break;const o=c(this,He).get(a);o&&(we(o.effect),c(this,He).delete(a))}for(const[s,a]of c(this,pt)){if(s===n||c(this,Yt).has(s))continue;const o=()=>{if(Array.from(c(this,st).values()).includes(s)){var u=document.createDocumentFragment();qi(a,u),u.append(Nt()),c(this,He).set(s,{effect:a,fragment:u})}else we(a);c(this,Yt).delete(s),c(this,pt).delete(s)};c(this,er)||!r?(c(this,Yt).add(s),Jt(a,o,!1)):o()}}});O(this,Hr,t=>{c(this,st).delete(t);const n=Array.from(c(this,st).values());for(const[r,i]of c(this,He))n.includes(r)||(we(i.effect),c(this,He).delete(r))});this.anchor=t,L(this,er,n)}ensure(t,n){var r=z,i=na();if(n&&!c(this,pt).has(t)&&!c(this,He).has(t))if(i){var s=document.createDocumentFragment(),a=Nt();s.append(a),c(this,He).set(t,{effect:De(()=>n(a)),fragment:s})}else c(this,pt).set(t,De(()=>n(this.anchor)));if(c(this,st).set(r,t),i){for(const[o,l]of c(this,pt))o===t?r.unskip_effect(l):r.skip_effect(l);for(const[o,l]of c(this,He))o===t?r.unskip_effect(l.effect):r.skip_effect(l.effect);r.oncommit(c(this,tr)),r.ondiscard(c(this,Hr))}else c(this,tr).call(this,r)}}st=new WeakMap,pt=new WeakMap,He=new WeakMap,Yt=new WeakMap,er=new WeakMap,tr=new WeakMap,Hr=new WeakMap;function le(e,t,n=!1){var r=new Yr(e),i=n?jt:0;function s(a,o){r.ensure(a,o)}An(()=>{var a=!1;t((o,l=0)=>{a=!0,s(l,o)}),a||s(-1,null)},i)}const kl=Symbol("NaN");function Sl(e,t,n){var r=new Yr(e),i=!xn();An(()=>{var s=t();s!==s&&(s=kl),i&&s!==null&&typeof s=="object"&&(s={}),r.ensure(s,n)})}function El(e,t){return t}function Tl(e,t,n){for(var r=[],i=t.length,s,a=t.length,o=0;o<i;o++){let h=t[o];Jt(h,()=>{if(s){if(s.pending.delete(h),s.done.add(h),s.pending.size===0){var v=e.outrogroups;Ai(e,Kr(s.done)),v.delete(s),v.size===0&&(e.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=r.length===0&&n!==null&&e.pending.size===0;if(l){var u=n,d=u.parentNode;qo(d),d.append(u),e.items.clear()}Ai(e,t,!l)}else s={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(s)}function Ai(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const a of e.pending.values())for(const o of a)r.add(e.items.get(o).e)}for(var i=0;i<t.length;i++){var s=t[i];if(r!=null&&r.has(s)){s.f|=gt;const a=document.createDocumentFragment();qi(s,a)}else we(t[i],n)}}var fs;function It(e,t,n,r,i,s=null){var a=e,o=new Map,l=(t&Ms)!==0;if(l){var u=e;a=u.appendChild(Nt())}var d=null,h=Fi(()=>{var M=n();return Ur(M)?M:M==null?[]:Kr(M)}),v,p=new Map,_=!0;function g(M){(R.effect.f&Fe)===0&&(R.pending.delete(M),R.fallback=d,Cl(R,v,a,t,r),d!==null&&(v.length===0?(d.f&gt)===0?jr(d):(d.f^=gt,Bn(d,null,a)):Jt(d,()=>{d=null})))}function m(M){R.pending.delete(M)}var E=An(()=>{v=f(h);for(var M=v.length,F=new Set,k=z,b=na(),A=0;A<M;A+=1){var Y=v[A],I=r(Y,A),x=_?null:o.get(I);x?(x.v&&$n(x.v,Y),x.i&&$n(x.i,A),b&&k.unskip_effect(x.e)):(x=xl(o,_?a:fs??(fs=Nt()),Y,I,A,i,t,n),_||(x.e.f|=gt),o.set(I,x)),F.add(I)}if(M===0&&s&&!d&&(_?d=De(()=>s(a)):(d=De(()=>s(fs??(fs=Nt()))),d.f|=gt)),M>F.size&&yo(),!_)if(p.set(k,F),b){for(const[K,ee]of o)F.has(K)||k.skip_effect(ee.e);k.oncommit(g),k.ondiscard(m)}else g(k);f(h)}),R={effect:E,items:o,pending:p,outrogroups:null,fallback:d};_=!1}function On(e){for(;e!==null&&(e.f&Qe)===0;)e=e.next;return e}function Cl(e,t,n,r,i){var x,K,ee,$e,Se,Ke,P,B,T;var s=(r&ro)!==0,a=t.length,o=e.items,l=On(e.effect.first),u,d=null,h,v=[],p=[],_,g,m,E;if(s)for(E=0;E<a;E+=1)_=t[E],g=i(_,E),m=o.get(g).e,(m.f&gt)===0&&((K=(x=m.nodes)==null?void 0:x.a)==null||K.measure(),(h??(h=new Set)).add(m));for(E=0;E<a;E+=1){if(_=t[E],g=i(_,E),m=o.get(g).e,e.outrogroups!==null)for(const j of e.outrogroups)j.pending.delete(m),j.done.delete(m);if((m.f&Me)!==0&&(jr(m),s&&(($e=(ee=m.nodes)==null?void 0:ee.a)==null||$e.unfix(),(h??(h=new Set)).delete(m))),(m.f&gt)!==0)if(m.f^=gt,m===l)Bn(m,null,n);else{var R=d?d.next:l;m===e.effect.last&&(e.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),zt(e,d,m),zt(e,m,R),Bn(m,R,n),d=m,v=[],p=[],l=On(d.next);continue}if(m!==l){if(u!==void 0&&u.has(m)){if(v.length<p.length){var M=p[0],F;d=M.prev;var k=v[0],b=v[v.length-1];for(F=0;F<v.length;F+=1)Bn(v[F],M,n);for(F=0;F<p.length;F+=1)u.delete(p[F]);zt(e,k.prev,b.next),zt(e,d,k),zt(e,b,M),l=M,d=b,E-=1,v=[],p=[]}else u.delete(m),Bn(m,l,n),zt(e,m.prev,m.next),zt(e,m,d===null?e.effect.first:d.next),zt(e,d,m),d=m;continue}for(v=[],p=[];l!==null&&l!==m;)(u??(u=new Set)).add(l),p.push(l),l=On(l.next);if(l===null)continue}(m.f&gt)===0&&v.push(m),d=m,l=On(m.next)}if(e.outrogroups!==null){for(const j of e.outrogroups)j.pending.size===0&&(Ai(e,Kr(j.done)),(Se=e.outrogroups)==null||Se.delete(j));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||u!==void 0){var A=[];if(u!==void 0)for(m of u)(m.f&Me)===0&&A.push(m);for(;l!==null;)(l.f&Me)===0&&l!==e.fallback&&A.push(l),l=On(l.next);var Y=A.length;if(Y>0){var I=(r&Ms)!==0&&a===0?n:null;if(s){for(E=0;E<Y;E+=1)(P=(Ke=A[E].nodes)==null?void 0:Ke.a)==null||P.measure();for(E=0;E<Y;E+=1)(T=(B=A[E].nodes)==null?void 0:B.a)==null||T.fix()}Tl(e,A,I)}}s&&mt(()=>{var j,Z;if(h!==void 0)for(m of h)(Z=(j=m.nodes)==null?void 0:j.a)==null||Z.apply()})}function xl(e,t,n,r,i,s,a,o){var l=(a&to)!==0?(a&io)===0?Ho(n,!1,!1):Pt(n):null,u=(a&no)!==0?Pt(i):null;return{v:l,i:u,e:De(()=>(s(t,l??n,u??i,o),()=>{e.delete(r)}))}}function Bn(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,s=t&&(t.f&gt)===0?t.nodes.start:n;r!==null;){var a=br(r);if(s.before(r),r===i)return;r=a}}function zt(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function te(e,t,n,r,i){var o,l;if((o=t.$$host)!=null&&o.$$shadowRoot){const u=Hi("slot");S(e,u);return}var s=(l=t.$$slots)==null?void 0:l[n],a=!1;s===!0&&(s=t.children,a=!0),s===void 0||s(e,a?()=>r:r)}function Nl(e,t,n){var r=new Yr(e);An(()=>{var i=t()??null;r.ensure(i,i&&(s=>n(s,i)))},jt)}function Al(e,t,n,r,i,s){var a=null,o=e,l=new Yr(o,!1);An(()=>{const u=t()||null;var d=fo;if(u===null){l.ensure(null,null);return}return l.ensure(u,h=>{if(u){if(a=Hi(u,d),Yn(a,a),r){var v=null,p=a.appendChild(Nt());r(a,p),v==null||v.remove()}V.nodes.end=a,h.before(a)}}),()=>{}},jt),qr(()=>{})}function Pl(e,t){var n=void 0,r;sa(()=>{n!==(n=t())&&(r&&(we(r),r=null),n&&(r=De(()=>{Wr(()=>n(e))})))})}function ba(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=ba(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Ml(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=ba(e))&&(r&&(r+=" "),r+=t);return r}function Il(e){return typeof e=="object"?Ml(e):e??""}const ds=[...` 	
\r\f \v\uFEFF`];function Ol(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var i of Object.keys(n))if(n[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,a=0;(a=r.indexOf(i,a))>=0;){var o=a+s;(a===0||ds.includes(r[a-1]))&&(o===r.length||ds.includes(r[o]))?r=(a===0?"":r.substring(0,a))+r.substring(o+1):a=o}}return r===""?null:r}function vs(e,t=!1){var n=t?" !important;":";",r="";for(var i of Object.keys(e)){var s=e[i];s!=null&&s!==""&&(r+=" "+i+": "+s+n)}return r}function ci(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function zl(e,t){if(t){var n="",r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var s=!1,a=0,o=!1,l=[];r&&l.push(...Object.keys(r).map(ci)),i&&l.push(...Object.keys(i).map(ci));var u=0,d=-1;const g=e.length;for(var h=0;h<g;h++){var v=e[h];if(o?v==="/"&&e[h-1]==="*"&&(o=!1):s?s===v&&(s=!1):v==="/"&&e[h+1]==="*"?o=!0:v==='"'||v==="'"?s=v:v==="("?a++:v===")"&&a--,!o&&s===!1&&a===0){if(v===":"&&d===-1)d=h;else if(v===";"||h===g-1){if(d!==-1){var p=ci(e.substring(u,d).trim());if(!l.includes(p)){v!==";"&&h++;var _=e.substring(u,h).trim();n+=" "+_+";"}}u=h+1,d=-1}}}}return r&&(n+=vs(r)),i&&(n+=vs(i,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function lt(e,t,n,r,i,s){var a=e[_i];if(a!==n||a===void 0){var o=Ol(n,r,s);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[_i]=n}else if(s&&i!==s)for(var l in s){var u=!!s[l];(i==null||u!==!!i[l])&&e.classList.toggle(l,u)}return s}function ui(e,t={},n,r){for(var i in n){var s=n[i];t[i]!==s&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function Rl(e,t,n,r){var i=e[gi];if(i!==t){var s=zl(t,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e[gi]=t}else r&&(Array.isArray(r)?(ui(e,n==null?void 0:n[0],r[0]),ui(e,n==null?void 0:n[1],r[1],"important")):ui(e,n,r));return r}function wa(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function hs(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,$a(e,!n||"__value"in e))}function $a(e,t){var n=e.__defaultValue,r=e.multiple,i=r?n??[]:null;if(!(r&&!Ur(i))){var s=e.selectedIndex,a=t&&r?new Set(e.selectedOptions):null;for(var o of e.options){var l=fn(o);wa(o,r?i.includes(l):Xs(l,n))}if(t)if(a!==null)for(o of e.options){var u=a.has(o);o.selected!==u&&(o.selected=u)}else e.selectedIndex!==s&&(e.selectedIndex=s)}}function Sn(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Ur(t))return po();for(var r of e.options)r.selected=t.includes(fn(r));return}for(r of e.options){var i=fn(r);if(Xs(i,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Jn(e){var t=new MutationObserver(n=>{n.every(Dl)||("__defaultValue"in e&&$a(e,!1),"__value"in e&&Sn(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),qr(()=>{t.disconnect()})}function ka(e,t,n=t){var r=new WeakSet,i=!0;Li(e,"change",s=>{var a=s?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(a),fn);else{var l=e.querySelector(a)??e.querySelector("option:not([disabled])");o=l&&fn(l)}n(o),e.__value=o,z!==null&&r.add(z)}),Wr(()=>{var s=t();if(e===document.activeElement){var a=z;if(r.has(a))return}if(Sn(e,s,i),i&&s===void 0){var o=e.querySelector(":checked");o!==null&&(s=fn(o),n(s))}e.__value=s,i=!1})}function fn(e){return"__value"in e?e.__value:e.value}function Dl(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const zn=Symbol("class"),Rn=Symbol("style"),Sa=Symbol("is custom element"),Ea=Symbol("is html"),Ll=zi?"input":"INPUT",Fl=zi?"option":"OPTION",Ta=zi?"select":"SELECT";function ct(e,t,n,r){var i=Ca(e);i[t]!==(i[t]=n)&&(t==="loading"&&(e[eo]=n),n==null?e.removeAttribute(t):typeof n!="string"&&xa(e).has(t)?e[t]=n:e.setAttribute(t,n))}function jl(e,t,n,r,i=!1,s=!1){var a=Ca(e),o=a[Sa],l=!a[Ea],u=t||{},d=e.nodeName===Fl,h=e.nodeName===Ta;for(var v in t)!(v in n)&&v[0]+v[1]!=="$$"&&(n[v]=null);n.class?n.class=Il(n.class):n[zn]&&(n.class=null),n[Rn]&&(n.style??(n.style=null));var p=xa(e);if(e.nodeName===Ll&&"type"in n&&("value"in n||"__value"in n)){var _=n.type;(_!==u.type||_===void 0&&e.hasAttribute("type"))&&(u.type=_,ct(e,"type",_))}for(const k in n){let b=n[k];if(d&&k==="value"&&b==null){e.value=e.__value="",u[k]=b;continue}if(k==="class"){var g=e.namespaceURI==="http://www.w3.org/1999/xhtml";lt(e,g,b,r,t==null?void 0:t[zn],n[zn]),u[k]=b,u[zn]=n[zn];continue}if(k==="style"){Rl(e,b,t==null?void 0:t[Rn],n[Rn]),u[k]=b,u[Rn]=n[Rn];continue}var m=u[k];if(!(b===m&&!(b===void 0&&e.hasAttribute(k)))){u[k]=b;var E=k[0]+k[1];if(E!=="$$")if(E==="on"){const A={},Y="$$"+k;let I=k.slice(2);var R=sl(I);if(rl(I)&&(I=I.slice(0,-7),A.capture=!0),!R&&m){if(b!=null)continue;e.removeEventListener(I,u[Y],A),u[Y]=null}if(R)W(I,e,b),nn([I]);else if(b!=null){let x=function(K){u[k].call(this,K)};u[Y]=ma(I,e,x,A)}}else if(k==="style")ct(e,k,b);else if(k==="autofocus")Io(e,!!b);else if(!o&&(k==="__value"||k==="value"&&b!=null))e.value=e.__value=b;else if(k==="selected"&&d)wa(e,b);else{var M=k;l||(M=ol(M));var F=M==="defaultValue"||M==="defaultChecked";if(h&&M==="defaultValue")continue;if(b==null&&!o&&!F)if(a[k]=null,M==="value"||M==="checked"){let A=e;const Y=t===void 0;if(M==="value"){let I=A.defaultValue;A.removeAttribute(M),A.defaultValue=I,A.value=A.__value=Y?I:null}else{let I=A.defaultChecked;A.removeAttribute(M),A.defaultChecked=I,A.checked=Y?I:!1}}else e.removeAttribute(k);else F||(o||typeof b!="string")&&p.has(M)?(e[M]=b,M in a&&(a[M]=de)):typeof b!="function"&&ct(e,M,b)}}}return u}function ps(e,t,n=[],r=[],i=[],s,a=!1,o=!1){Vs(i,n,r,l=>{var u=void 0,d={},h=e.nodeName===Ta,v=!1;if(sa(()=>{var _=t(...l.map(f)),g=jl(e,u,_,s,a,o);if(v&&h){var m=e;"defaultValue"in _&&hs(m,_.defaultValue),"value"in _&&Sn(m,_.value)}for(let R of Object.getOwnPropertySymbols(d))_[R]||we(d[R]);for(let R of Object.getOwnPropertySymbols(_)){var E=_[R];R.description===vo&&(!u||E!==u[R])&&(d[R]&&we(d[R]),d[R]=De(()=>Pl(e,()=>E))),g[R]=E}u=g}),h){var p=e;Wr(()=>{var _=u;"defaultValue"in _&&hs(p,_.defaultValue),Sn(p,_.value,!0),Jn(p)})}v=!0})}function Ca(e){return e[xr]??(e[xr]={[Sa]:e.nodeName.includes("-"),[Ea]:e.namespaceURI===Os})}var _s=new Map;function xa(e){var t=e.getAttribute("is")||e.nodeName,n=_s.get(t);if(n)return n;_s.set(t,n=new Set);for(var r,i=e,s=Element.prototype;s!==i;){r=Cs(i);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&n.add(a);i=Mi(i)}return n}function Re(e,t,n=t){var r=new WeakSet;Li(e,"input",async i=>{var s=i?e.defaultValue:e.value;if(s=fi(e)?di(s):s,n(s),z!==null&&r.add(z),await nl(),s!==(s=t())){var a=e.selectionStart,o=e.selectionEnd,l=e.value.length;if(e.value=s??"",o!==null){var u=e.value.length;a===o&&o===l&&u>l?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=a,e.selectionEnd=Math.min(o,u))}}}),$t(t)==null&&e.value&&(n(fi(e)?di(e.value):e.value),z!==null&&r.add(z)),Gr(()=>{var i=t();if(e===document.activeElement){var s=z;if(r.has(s))return}fi(e)&&i===di(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function Vl(e,t,n=t){Li(e,"change",r=>{var i=r?e.defaultChecked:e.checked;n(i)}),$t(t)==null&&n(e.checked),Gr(()=>{var r=t();e.checked=!!r})}function fi(e){var t=e.type;return t==="number"||t==="range"}function di(e){return e===""?null:+e}function vi(e,t){return e===t||(e==null?void 0:e[yt])===t}function Jr(e=Ri(),t,n,r){var i=ae.r,s=V;return Wr(()=>{var a,o;return Gr(()=>{a=o,o=[],$t(()=>{vi(n(...o),e)||(t(e,...o),a&&vi(n(...a),e)&&t(null,...a))})}),()=>{let l=s;for(;l!==i&&l.parent!==null&&l.parent.f&zr;)l=l.parent;const u=()=>{o&&vi(n(...o),e)&&t(null,...o)},d=l.teardown;l.teardown=()=>{u(),d==null||d()}}}),e}function Na(e=!1){const t=ae,n=t.l.u;if(!n)return;let r=()=>Vt(t.s);if(e){let i=0,s={};const a=wn(()=>{let o=!1;const l=t.s;for(const u in l)l[u]!==s[u]&&(s[u]=l[u],o=!0);return o&&i++,i});r=()=>f(a)}n.b.length&&Yo(()=>{gs(t,r),hi(n.b)}),tn(()=>{const i=$t(()=>n.m.map(Za));return()=>{for(const s of i)typeof s=="function"&&s()}}),n.a.length&&tn(()=>{gs(t,r),hi(n.a)})}function gs(e,t){if(e.l.s)for(const n of e.l.s)f(n);t()}function Bl(e){var t=Pt(0);return function(){return arguments.length===1?($(t,f(t)+1),arguments[0]):(f(t),e())}}const Hl={get(e,t){if(!e.exclude.includes(t))return f(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=V;try{tt(e.parent_effect),e.special[t]=Pe({get[t](){return e.props[t]}},t,Is)}finally{tt(r)}}return e.special[t](n),as(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),as(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function X(e,t){return new Proxy({props:e,exclude:t,special:{},version:Pt(0),parent_effect:V},Hl)}const Ul={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(In(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let i=e.props[r];In(i)&&(i=i());const s=Lt(i,t);if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(In(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const i=Lt(r,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===yt||t===Ps)return!1;for(let n of e.props)if(In(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(In(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function re(...e){return new Proxy({props:e},Ul)}function Pe(e,t,n,r){var F;var i=!Cn||(n&ao)!==0,s=(n&oo)!==0,a=(n&lo)!==0,o=r,l=!0,u=void 0,d=()=>a&&i?(u??(u=wn(r)),f(u)):(l&&(l=!1,o=a?$t(r):r),o);let h;if(s){var v=yt in e||Ps in e;h=((F=Lt(e,t))==null?void 0:F.set)??(v&&t in e?k=>e[t]=k:void 0)}var p,_=!1;s?[p,_]=Mo(()=>e[t]):p=e[t],p===void 0&&r!==void 0&&(p=d(),h&&(i&&So(),h(p)));var g;if(i?g=()=>{var k=e[t];return k===void 0?d():(l=!0,k)}:g=()=>{var k=e[t];return k!==void 0&&(o=void 0),k===void 0?o:k},i&&(n&Is)===0)return g;if(h){var m=e.$$legacy;return(function(k,b){return arguments.length>0?((!i||!b||m||_)&&h(b?g():k),k):g()})}var E=!1,R=((n&so)!==0?wn:Fi)(()=>(E=!1,g()));s&&f(R);var M=V;return(function(k,b){if(arguments.length>0){const A=b?f(R):i&&s?be(k):k;return $(R,A),E=!0,o!==void 0&&(o=A),k}return Mt&&E||(M.f&Fe)!==0?R.v:f(R)})}function Zr(e){ae===null&&Ds(),Cn&&ae.l!==null?Kl(ae).m.push(e):tn(()=>{const t=$t(e);if(typeof t=="function")return t})}function Wi(e){ae===null&&Ds(),Zr(()=>()=>$t(e))}function Kl(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const ql="5";var Es;typeof window<"u"&&((Es=window.__svelte??(window.__svelte={})).v??(Es.v=new Set)).add(ql);const Aa=()=>window.__IDE_BOOTSTRAP__||{};function Wl(e){const{rootPath:t="",session:n=""}=Aa();return`${t}/api/sessions/${encodeURIComponent(n)}/ide${e}`}async function Oe(e,t={}){const n=await fetch(Wl(e),t),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Request failed");return r}const Ge=(e,t)=>`/ssh-connections/${encodeURIComponent(e)}${t}`,_e={chat:async(e,t=80)=>{const{rootPath:n=""}=Aa(),r=`${n}/api/sessions/${encodeURIComponent(e)}/ide/chat?limit=${t}`,i=await fetch(r),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||"Could not load chat");return s},listConnections:()=>Oe("/ssh-connections"),createConnection:e=>Oe("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),deleteConnection:e=>Oe(Ge(e,""),{method:"DELETE"}),connect:(e,t)=>Oe(Ge(e,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t||""})}),status:e=>Oe(Ge(e,"/status?reconnect=1")),listFiles:(e,t)=>Oe(Ge(e,`/files?path=${encodeURIComponent(t)}`)),searchFiles:(e,t,n)=>Oe(Ge(e,`/files/search?path=${encodeURIComponent(t)}&query=${encodeURIComponent(n)}`)),readFile:(e,t)=>Oe(Ge(e,`/file?path=${encodeURIComponent(t)}`)),saveFile:(e,t,n)=>Oe(Ge(e,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t,content:n})}),fs:(e,t)=>Oe(Ge(e,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),git:(e,t)=>Oe(Ge(e,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),focusTerminal:e=>Oe(Ge(e,"/focus-terminal"),{method:"POST"}),getWorkspace:e=>Oe(Ge(e,"/workspace")),saveWorkspace:(e,t)=>Oe(Ge(e,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})};var nr,rr,ir,sr,ar,or,lr,cr,ur,fr,dr,vr,hr,pr,_r,gr;class Gl{constructor(){O(this,nr,D(be([])));O(this,rr,D(""));O(this,ir,D("idle"));O(this,sr,D("Ready"));O(this,ar,D("No file open"));O(this,or,D("."));O(this,lr,D(be([])));O(this,cr,D(be({})));O(this,ur,D(be({})));O(this,fr,D(""));O(this,dr,D(be([])));O(this,vr,D(""));O(this,hr,D(""));O(this,pr,D(""));O(this,_r,D(be([])));O(this,gr,D(""));xe(this,"restoredKey","");xe(this,"persistTimer",null)}get connections(){return f(c(this,nr))}set connections(t){$(c(this,nr),t,!0)}get connectionId(){return f(c(this,rr))}set connectionId(t){$(c(this,rr),t,!0)}get connectionState(){return f(c(this,ir))}set connectionState(t){$(c(this,ir),t,!0)}get statusText(){return f(c(this,sr))}set statusText(t){$(c(this,sr),t,!0)}get detailText(){return f(c(this,ar))}set detailText(t){$(c(this,ar),t,!0)}get path(){return f(c(this,or))}set path(t){$(c(this,or),t,!0)}get entries(){return f(c(this,lr))}set entries(t){$(c(this,lr),t,!0)}get expanded(){return f(c(this,cr))}set expanded(t){$(c(this,cr),t,!0)}get treeChildren(){return f(c(this,ur))}set treeChildren(t){$(c(this,ur),t,!0)}get filter(){return f(c(this,fr))}set filter(t){$(c(this,fr),t,!0)}get tabs(){return f(c(this,dr))}set tabs(t){$(c(this,dr),t,!0)}get activeKey(){return f(c(this,vr))}set activeKey(t){$(c(this,vr),t,!0)}get gitOutput(){return f(c(this,hr))}set gitOutput(t){$(c(this,hr),t,!0)}get gitStatus(){return f(c(this,pr))}set gitStatus(t){$(c(this,pr),t,!0)}get gitBranches(){return f(c(this,_r))}set gitBranches(t){$(c(this,_r),t,!0)}get gitBranch(){return f(c(this,gr))}set gitBranch(t){$(c(this,gr),t,!0)}get connection(){return this.connections.find(t=>t.id===this.connectionId)||null}get activeTab(){return this.tabs.find(t=>t.key===this.activeKey)||null}get visibleEntries(){const t=this.filter.trim().toLowerCase();return t?this.entries.filter(n=>n.name.toLowerCase().includes(t)):this.entries}get dirtyCount(){return this.tabs.filter(t=>t.dirty).length}setStatus(t,n){this.statusText=t,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const t=await _e.listConnections();this.connections=t.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(t){this.setStatus(t.message||"Could not load connections")}}async refreshStatus(){var t,n,r;if(this.connectionId)try{const i=await _e.status(this.connectionId);i.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((t=this.connection)==null?void 0:t.label)||"SSH workspace"}`,`SSH terminal: ${i.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(i){this.connectionState="error",this.setStatus(i.message||"Could not check SSH connection")}}async connect(t){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await _e.connect(this.connectionId,t);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect")}}}async refreshFiles(t){if(!this.connectionId)return;const n=t||this.path||".";try{const r=await _e.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async toggleDirectory(t){if(this.expanded[t]){const n={...this.expanded};delete n[t],this.expanded=n;return}if(this.expanded={...this.expanded,[t]:!0},!this.treeChildren[t])try{const n=await _e.listFiles(this.connectionId,t);this.treeChildren={...this.treeChildren,[t]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}async openFile(t){if(!this.connectionId)return null;const n=`${this.connectionId}|${t}`,r=this.tabs.find(i=>i.key===n);if(r)return this.activeKey=n,r;try{const i=await _e.readFile(this.connectionId,t),s={key:`${this.connectionId}|${i.path}`,path:i.path,content:i.content||"",saved:i.content||"",dirty:!1};return this.tabs=[...this.tabs,s],this.activeKey=s.key,this.setStatus("Opened",s.path),this.remember(),s}catch(i){return this.setStatus(i.message||"Could not open remote file"),null}}updateContent(t,n){this.tabs=this.tabs.map(r=>r.key===t?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(t){var r;const n=this.tabs.find(i=>i.key===t);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(i=>i.key!==t),this.activeKey===t&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const t=this.activeTab;if(t)try{await _e.saveFile(this.connectionId,t.path,t.content),this.tabs=this.tabs.map(n=>n.key===t.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${t.path}`,t.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const t=`${this.connectionId}`;if(!t)return;let n=null;try{n=await _e.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===t)return;this.restoredKey=t;const r=(n==null?void 0:n.buffers)||{};for(const s of((n==null?void 0:n.tabs)||[]).slice(0,12)){const a=await this.openFile(s);a&&Object.prototype.hasOwnProperty.call(r,s)&&this.updateContent(a.key,r[s])}const i=this.tabs.find(s=>s.path===(n==null?void 0:n.active_path));i&&(this.activeKey=i.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const t={};for(const r of this.tabs)r.dirty&&(t[r.path]=r.content);try{await _e.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:t})}catch{}}async runGit(t,n={}){try{const r=await _e.git(this.connectionId,{action:t,path:this.path||".",...n});return this.gitOutput=r.output||r.status||"",this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",r}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}nr=new WeakMap,rr=new WeakMap,ir=new WeakMap,sr=new WeakMap,ar=new WeakMap,or=new WeakMap,lr=new WeakMap,cr=new WeakMap,ur=new WeakMap,fr=new WeakMap,dr=new WeakMap,vr=new WeakMap,hr=new WeakMap,pr=new WeakMap,_r=new WeakMap,gr=new WeakMap;const y=new Gl;No();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Yl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Jl=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ms=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var Zl=dl("<svg><!><!></svg>");function ie(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]),r=X(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);kt(t,!1);let i=Pe(t,"name",8,void 0),s=Pe(t,"color",8,"currentColor"),a=Pe(t,"size",8,24),o=Pe(t,"strokeWidth",8,2),l=Pe(t,"absoluteStrokeWidth",8,!1),u=Pe(t,"iconNode",24,()=>[]);Na();var d=Zl();ps(d,(p,_,g)=>({...Yl,...p,...r,width:a(),height:a(),stroke:s(),"stroke-width":_,class:g}),[()=>Jl(r)?void 0:{"aria-hidden":"true"},()=>(Vt(l()),Vt(o()),Vt(a()),$t(()=>l()?Number(o())*24/Number(a()):o())),()=>(Vt(ms),Vt(i()),Vt(n),$t(()=>ms("lucide-icon","lucide",i()?`lucide-${i()}`:"",n.class)))]);var h=C(d);It(h,1,u,El,(p,_)=>{var g=Wn(()=>Xa(f(_),2));let m=()=>f(g)[0],E=()=>f(g)[1];var R=Q(),M=G(R);Al(M,m,!0,(F,k)=>{ps(F,()=>({...E()}))}),S(p,R)});var v=w(h);te(v,t,"default",{}),S(e,d),St()}function Xl(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];ie(e,re({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function ys(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];ie(e,re({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function Ql(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ie(e,re({name:"circle-check"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function ec(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];ie(e,re({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function tc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];ie(e,re({name:"circle"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function nc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];ie(e,re({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function rc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12.1",cy:"12.1",r:"1"}]];ie(e,re({name:"dot"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function ic(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];ie(e,re({name:"external-link"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function sc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];ie(e,re({name:"file-diff"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function ac(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M14 18h6"}]];ie(e,re({name:"file-minus-corner"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function bs(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M14 19h6"}],["path",{d:"M17 16v6"}]];ie(e,re({name:"file-plus-corner"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function oc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];ie(e,re({name:"file-plus"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function lc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];ie(e,re({name:"file"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function cc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];ie(e,re({name:"files"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function uc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];ie(e,re({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function fc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];ie(e,re({name:"folder"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function dc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]];ie(e,re({name:"git-branch-plus"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function vc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];ie(e,re({name:"git-branch"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function hc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]];ie(e,re({name:"git-commit-vertical"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function pc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];ie(e,re({name:"link-2"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function _c(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];ie(e,re({name:"loader"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function gc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];ie(e,re({name:"pencil"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function mc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ie(e,re({name:"plus"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function Pa(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ie(e,re({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function yc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ie(e,re({name:"search"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function bc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];ie(e,re({name:"send"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function wc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];ie(e,re({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function Ma(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ie(e,re({name:"trash-2"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}function $c(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ie(e,re({name:"x"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);te(o,t,"default",{}),S(i,a)},$$slots:{default:!0}}))}var kc=U('<form class="create svelte-15hitxw"><input class="svelte-15hitxw"/> <button type="submit" class="svelte-15hitxw">Add</button></form>'),Sc=U('<li class="svelte-15hitxw"><button><span class="icon svelte-15hitxw"><!></span> <span class="name svelte-15hitxw"> </span></button> <span class="actions svelte-15hitxw"><button title="Rename" class="svelte-15hitxw"><!></button> <button title="Delete" class="svelte-15hitxw"><!></button></span></li>'),Ec=U('<li class="empty svelte-15hitxw">No files here</li>'),Tc=U('<div class="explorer svelte-15hitxw"><div class="toolbar svelte-15hitxw"><button title="Up one folder" aria-label="Up one folder" class="svelte-15hitxw"><!></button> <span class="path svelte-15hitxw"> </span> <button title="New file" aria-label="New file" class="svelte-15hitxw"><!></button> <button title="New folder" aria-label="New folder" class="svelte-15hitxw"><!></button> <button title="Refresh" aria-label="Refresh" class="svelte-15hitxw"><!></button></div> <input class="filter svelte-15hitxw" placeholder="Filter files…"/> <!> <ul class="entries svelte-15hitxw"></ul></div>');function Cc(e,t){kt(t,!0);let n=D(""),r=D("");const i=I=>{const x=(I||".").split("/").filter(K=>K&&K!==".");return x.pop(),x.length?x.join("/"):"."},s=(I,x)=>I==="."?x:`${I}/${x}`;async function a(I){I.preventDefault();const x=f(r).trim();if(x)try{await _e.fs(y.connectionId,{action:f(n)==="dir"?"create_dir":"create_file",path:s(y.path,x)}),$(n,""),$(r,""),await y.refreshFiles()}catch(K){y.setStatus(K.message||"Could not create")}}async function o(I){const x=s(y.path,I.name);if(confirm(`Delete ${x}? Folders must already be empty.`))try{await _e.fs(y.connectionId,{action:"delete",path:x}),await y.refreshFiles()}catch(K){y.setStatus(K.message||"Could not delete")}}async function l(I){const x=s(y.path,I.name),K=prompt("Rename to (relative path):",x);if(!(!K||K===x))try{await _e.fs(y.connectionId,{action:"rename",path:x,new_path:K}),await y.refreshFiles()}catch(ee){y.setStatus(ee.message||"Could not rename")}}var u=Tc(),d=C(u),h=C(d),v=C(h);Xl(v,{size:14});var p=w(h,2),_=ge(p,!0),g=w(p,2),m=C(g);oc(m,{size:14});var E=w(g,2),R=C(E);uc(R,{size:14});var M=w(E,2),F=C(M);Pa(F,{size:14});var k=w(d,2),b=w(k,2);{var A=I=>{var x=kc(),K=C(x);fe(()=>ct(K,"placeholder",f(n)==="dir"?"New folder name":"New file name")),Si("submit",x,a),W("keydown",K,ee=>{ee.key==="Escape"&&$(n,"")}),Re(K,()=>f(r),ee=>$(r,ee)),S(I,x)};le(b,I=>{f(n)&&I(A)})}var Y=w(b,2);It(Y,21,()=>y.visibleEntries,I=>I.name,(I,x)=>{var K=Sc(),ee=C(K);let $e;var Se=C(ee),Ke=C(Se);{var P=Te=>{fc(Te,{size:14})},B=Te=>{pc(Te,{size:14})},T=Te=>{lc(Te,{size:14})};le(Ke,Te=>{f(x).is_dir?Te(P):f(x).is_symlink?Te(B,1):Te(T,-1)})}var j=w(Se,2),Z=ge(j,!0),ke=w(ee,2),Ee=C(ke),Ie=C(Ee);gc(Ie,{size:13});var dt=w(Ee,2),nt=C(dt);Ma(nt,{size:13}),fe(()=>{$e=lt(ee,1,"entry svelte-15hitxw",null,$e,{dir:f(x).is_dir}),ue(Z,f(x).name),ct(Ee,"aria-label",`Rename ${f(x).name??""}`),ct(dt,"aria-label",`Delete ${f(x).name??""}`)}),W("dblclick",ee,()=>f(x).is_dir&&y.refreshFiles(s(y.path,f(x).name))),W("click",ee,()=>!f(x).is_dir&&y.openFile(s(y.path,f(x).name))),W("click",Ee,()=>l(f(x))),W("click",dt,()=>o(f(x))),S(I,K)},I=>{var x=Ec();S(I,x)}),fe(()=>{ct(p,"title",y.path),ue(_,y.path)}),W("click",h,()=>y.refreshFiles(i(y.path))),W("click",g,()=>{$(n,"file"),$(r,"")}),W("click",E,()=>{$(n,"dir"),$(r,"")}),W("click",M,()=>y.refreshFiles()),Re(k,()=>y.filter,I=>y.filter=I),S(e,u),St()}nn(["click","keydown","dblclick"]);var xc=U('<div class="branch svelte-1skdisl">On <strong> </strong></div>'),Nc=U('<li class="svelte-1skdisl"><label class="svelte-1skdisl"><input type="checkbox"/> <span> </span> <span class="file svelte-1skdisl"> </span></label></li>'),Ac=U('<ul class="changes svelte-1skdisl"></ul> <div class="row svelte-1skdisl"><button class="svelte-1skdisl"><!> </button> <button class="svelte-1skdisl"><!> Unstage</button></div>',1),Pc=U("<option> </option>"),Mc=U('<select class="svelte-1skdisl"></select>'),Ic=U('<div class="git svelte-1skdisl"><div class="row svelte-1skdisl"><button class="svelte-1skdisl"><!> Status</button> <button class="svelte-1skdisl"><!> Diff</button> <button class="svelte-1skdisl"><!> Stage all</button></div> <!> <!> <!> <div class="row svelte-1skdisl"><input placeholder="New branch…" class="svelte-1skdisl"/> <button class="svelte-1skdisl"><!> Create</button></div> <div class="row svelte-1skdisl"><input placeholder="Commit message…" class="svelte-1skdisl"/> <button class="svelte-1skdisl"><!> Commit</button></div> <pre class="output svelte-1skdisl"> </pre></div>');function Oc(e,t){kt(t,!0);let n=D(""),r=D(""),i=D(be({}));const s=Wn(()=>(y.gitStatus||"").split(`
`).filter(T=>T&&!T.startsWith("##")).map(T=>({code:T.slice(0,2).trim()||"??",path:T.slice(3).trim()})).filter(T=>T.path)),a=Wn(()=>f(s).filter(T=>f(i)[T.path]).map(T=>T.path));async function o(T){f(a).length&&(await y.runGit(T,{files:f(a)}),$(i,{},!0))}async function l(){if(!f(n).trim())return;await y.runGit("commit",{message:f(n).trim()})&&$(n,"")}async function u(){if(!f(r).trim())return;await y.runGit("create_branch",{branch:f(r).trim()})&&$(r,"")}var d=Ic(),h=C(d),v=C(h),p=C(v);Pa(p,{size:13});var _=w(v,2),g=C(_);sc(g,{size:13});var m=w(_,2),E=C(m);bs(E,{size:13});var R=w(h,2);{var M=T=>{var j=xc(),Z=w(C(j)),ke=ge(Z,!0);fe(()=>ue(ke,y.gitBranch)),S(T,j)};le(R,T=>{y.gitBranch&&T(M)})}var F=w(R,2);{var k=T=>{var j=Ac(),Z=G(j);It(Z,21,()=>f(s),rn=>rn.path,(rn,Et)=>{var $r=Nc(),Xr=C($r),kr=C(Xr),sn=w(kr,2);let Pn;var Sr=ge(sn,!0),Er=w(sn,2),Qr=ge(Er,!0);fe(()=>{Pn=lt(sn,1,"code svelte-1skdisl",null,Pn,{staged:f(Et).code[0]!=="?"&&f(Et).code[0]!==" "}),ue(Sr,f(Et).code),ct(Er,"title",f(Et).path),ue(Qr,f(Et).path)}),Vl(kr,()=>f(i)[f(Et).path],ei=>f(i)[f(Et).path]=ei),S(rn,$r)});var ke=w(Z,2),Ee=C(ke),Ie=C(Ee);bs(Ie,{size:13});var dt=w(Ie),nt=w(Ee,2),Te=C(nt);ac(Te,{size:13}),fe(()=>{Ee.disabled=!f(a).length,ue(dt,` Stage (${f(a).length??""})`),nt.disabled=!f(a).length}),W("click",Ee,()=>o("stage")),W("click",nt,()=>o("unstage")),S(T,j)};le(F,T=>{f(s).length&&T(k)})}var b=w(F,2);{var A=T=>{var j=Mc();It(j,20,()=>y.gitBranches,ke=>ke,(ke,Ee)=>{var Ie=Pc(),dt=ge(Ie,!0),nt={};fe(()=>{ue(dt,Ee),nt!==(nt=Ee)&&(Ie.value=(Ie.__value=nt)??"")}),S(ke,Ie)});var Z;Jn(j),fe(()=>{Z!==(Z=y.gitBranch)&&(j.value=(j.__value=Z)??"",Sn(j,Z))}),W("change",j,ke=>y.runGit("switch",{branch:ke.currentTarget.value})),S(T,j)};le(b,T=>{y.gitBranches.length&&T(A)})}var Y=w(b,2),I=C(Y),x=w(I,2),K=C(x);dc(K,{size:13});var ee=w(Y,2),$e=C(ee),Se=w($e,2),Ke=C(Se);hc(Ke,{size:13});var P=w(ee,2),B=ge(P,!0);fe(()=>ue(B,y.gitOutput||"No git output yet.")),W("click",v,()=>y.runGit("status")),W("click",_,()=>y.runGit("diff")),W("click",m,()=>y.runGit("stage",{files:["."]})),Re(I,()=>f(r),T=>$(r,T)),W("click",x,u),Re($e,()=>f(n),T=>$(n,T)),W("click",Se,l),S(e,d),St()}nn(["click","change"]);const zc="modulepreload",Rc=function(e,t){return new URL(e,t).href},ws={},Ir=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let a=function(d){return Promise.all(d.map(h=>Promise.resolve(h).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=a(n.map(d=>{if(d=Rc(d,r),d in ws)return;ws[d]=!0;const h=d.endsWith(".css"),v=h?'[rel="stylesheet"]':"";if(!!r)for(let g=o.length-1;g>=0;g--){const m=o[g];if(m.href===d&&(!h||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${v}`))return;const _=document.createElement("link");if(_.rel=h?"stylesheet":zc,h||(_.as="script"),_.crossOrigin="",_.href=d,u&&_.setAttribute("nonce",u),document.head.appendChild(_),h)return new Promise((g,m)=>{_.addEventListener("load",g),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})},Hn={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},Dc={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function Lc(e){var n;const t=(e||"").split("/").pop()||"";return t.toLowerCase()==="dockerfile"?"dockerfile":t.toLowerCase()==="makefile"?"shell":Dc[(n=t.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var Fc=U('<div class="editor svelte-1h8xysy"></div>');function jc(e,t){kt(t,!0);let n,r=null,i=null,s="",a=!1;Zr(async()=>{i=await Ir(()=>import("./ide-monaco.js").then(l=>l.a),__vite__mapDeps([0,1]),import.meta.url),i.editor.defineTheme("monokai",Hn),r=i.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{a||!s||y.updateContent(s,r.getValue())}),r.addCommand(i.KeyMod.CtrlCmd|i.KeyCode.KeyS,()=>y.saveActive())}),Wi(()=>r==null?void 0:r.dispose()),tn(()=>{const l=y.activeTab;if(!(!r||!i)){if(!l){a=!0,r.setValue(""),s="",a=!1;return}if(l.key!==s){a=!0;const u=i.editor.createModel(l.content,Lc(l.path)),d=r.getModel();r.setModel(u),d==null||d.dispose(),s=l.key,a=!1}else r.getValue()!==l.content&&(a=!0,r.setValue(l.content),a=!1)}});var o=Fc();Jr(o,l=>n=l,()=>n),S(e,o),St()}var on=Bl(()=>y),Vc=U('<span class="dot svelte-p0uzej" title="Unsaved changes"><!></span>'),Bc=U('<div><button class="label svelte-p0uzej" role="tab"><!> </button> <button class="close svelte-p0uzej" title="Close"><!></button></div>'),Hc=U('<div class="hint svelte-p0uzej">Open a file from the explorer</div>'),Uc=U('<div class="tabs svelte-p0uzej" role="tablist"></div>');function Kc(e,t){kt(t,!1);const n=i=>i.split("/").pop();Na();var r=Uc();It(r,5,()=>on().tabs,i=>i.key,(i,s)=>{var a=Bc();let o;var l=C(a),u=C(l);{var d=_=>{var g=Vc(),m=C(g);rc(m,{size:16}),S(_,g)};le(u,_=>{f(s).dirty&&_(d)})}var h=w(u),v=w(l,2),p=C(v);$c(p,{size:13}),fe((_,g)=>{o=lt(a,1,"tab svelte-p0uzej",null,o,{active:f(s).key===on().activeKey}),ct(l,"aria-selected",f(s).key===on().activeKey),ct(l,"title",f(s).path),ue(h,` ${_??""}`),ct(v,"aria-label",`Close ${g??""}`)},[()=>n(f(s).path),()=>n(f(s).path)]),W("click",l,()=>on(on().activeKey=f(s).key)),W("click",v,()=>on().closeTab(f(s).key)),S(i,a)},i=>{var s=Hc();S(i,s)}),S(e,r),St()}nn(["click"]);var qc=U("<option> </option>"),Wc=U('<p class="error svelte-1roe1v9"> </p>'),Gc=U("<div> </div>"),Yc=U(`<p class="empty svelte-1roe1v9">Ask about the active remote file. The prompt is delivered to the selected
          agent session — pick a Codex session or a Claude session to choose which
          assistant answers, and replies appear here.</p>`),Jc=U('<div class="chat svelte-1roe1v9"><div class="head svelte-1roe1v9"><span class="title svelte-1roe1v9">AI chat</span> <select title="Agent session to send to" class="svelte-1roe1v9"></select></div> <div class="messages svelte-1roe1v9"><!> <!></div> <div class="compose svelte-1roe1v9"><textarea placeholder="Ask about the active remote file… (⌘/Ctrl+Enter to send)" class="svelte-1roe1v9"></textarea> <button class="svelte-1roe1v9"><!> </button></div></div>');function Zc(e,t){kt(t,!0);let n=Pe(t,"sessions",19,()=>[]),r=Pe(t,"session",3,""),i=Pe(t,"rootPath",3,""),s=D(""),a=D(be(r()||n()[0]||"")),o=D(!1),l=D(be([])),u=D(""),d=D(null),h=null;async function v(){if(f(a))try{const B=(await _e.chat(f(a))).messages||[],T=B.length!==f(l).length;$(l,B,!0),$(u,""),T&&queueMicrotask(p)}catch(P){$(u,P.message||"Could not load chat",!0)}}function p(){f(d)&&(f(d).scrollTop=f(d).scrollHeight)}tn(()=>{const P=f(a);$(l,[],!0),h&&clearInterval(h),P&&(v(),h=setInterval(v,3e3))}),Wi(()=>{h&&clearInterval(h)});function _(){const P=y.connection||{},B=y.activeTab,T=B?B.path:y.path||".",j=B?`
Active file contents (first 12,000 characters):
${B.content.slice(0,12e3)}`:"";return`[Remote SSH IDE context]
SSH target: ${P.username||"?"}@${P.host||"?"}
Remote path: ${T}${j}

${f(s).trim()}`}async function g(){const P=f(s).trim();if(!P||!f(a)||f(o))return;const B=_();$(o,!0);try{const T=await fetch(`${i()}/api/sessions/${encodeURIComponent(f(a))}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:B})}),j=await T.json().catch(()=>({}));if(!T.ok)throw new Error(j.error||"Could not send");$(s,""),$(l,[...f(l),{role:"user",text:P,ts:Date.now()/1e3,_local:!0}],!0),queueMicrotask(p),setTimeout(v,1200)}catch(T){y.setStatus(T.message||"Could not send prompt")}finally{$(o,!1)}}function m(P){P.key==="Enter"&&(P.metaKey||P.ctrlKey)&&(P.preventDefault(),g())}function E(P){const B=P.full||P.text||"",T=`

`;if(B.startsWith("[Remote SSH IDE context]")){const j=B.lastIndexOf(T);if(j!==-1)return B.slice(j+T.length)}return B}var R=Jc(),M=C(R),F=w(C(M),2);It(F,20,n,P=>P,(P,B)=>{var T=qc(),j=ge(T,!0),Z={};fe(()=>{ue(j,B),Z!==(Z=B)&&(T.value=(T.__value=Z)??"")}),S(P,T)}),Jn(F);var k=w(M,2),b=C(k);{var A=P=>{var B=Wc(),T=ge(B,!0);fe(()=>ue(T,f(u))),S(P,B)};le(b,P=>{f(u)&&P(A)})}var Y=w(b,2);It(Y,19,()=>f(l),(P,B)=>P.ts+":"+B,(P,B)=>{var T=Gc(),j=ge(T,!0);fe(Z=>{lt(T,1,`msg ${f(B).role==="assistant"?"assistant":"user"}`,"svelte-1roe1v9"),ue(j,Z)},[()=>E(f(B))]),S(P,T)},P=>{var B=Q(),T=G(B);{var j=Z=>{var ke=Yc();S(Z,ke)};le(T,Z=>{f(u)||Z(j)})}S(P,B)}),Jr(k,P=>$(d,P),()=>f(d));var I=w(k,2),x=C(I),K=w(x,2),ee=C(K);{var $e=P=>{_c(P,{size:13})},Se=P=>{bc(P,{size:13})};le(ee,P=>{f(o)?P($e):P(Se,-1)})}var Ke=w(ee);fe(P=>{K.disabled=P,ue(Ke,` ${f(o)?"Sending…":"Send"}`)},[()=>f(o)||!f(s).trim()]),ka(F,()=>f(a),P=>$(a,P)),W("keydown",x,m),Re(x,()=>f(s),P=>$(s,P)),W("click",K,g),S(e,R),St()}nn(["keydown","click"]);var Xc=U('<span class="hint svelte-e2eyom">searching…</span>'),Qc=U('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),eu=U('<ul class="results svelte-e2eyom"></ul>'),tu=U('<p class="empty svelte-e2eyom"> </p>'),nu=U('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function ru(e,t){kt(t,!0);let n=D(""),r=D(be([])),i=D(0),s=D(!1),a=D(null),o=null;tn(()=>{f(a)&&f(a).focus()}),tn(()=>{const b=f(n).trim();if(o&&clearTimeout(o),!b){$(r,[],!0);return}o=setTimeout(async()=>{$(s,!0);try{const A=await _e.searchFiles(y.connectionId,y.path||".",b);$(r,A.matches||[],!0),$(i,0)}catch{$(r,[],!0)}finally{$(s,!1)}},180)});async function l(b){var Y;if(!b)return;const A=y.path&&y.path!=="."?`${y.path}/`:"";await y.openFile(`${A}${b.path}`),(Y=t.onclose)==null||Y.call(t)}function u(b){var A;b.key==="Escape"?(b.preventDefault(),(A=t.onclose)==null||A.call(t)):b.key==="ArrowDown"?(b.preventDefault(),$(i,Math.min(f(i)+1,f(r).length-1),!0)):b.key==="ArrowUp"?(b.preventDefault(),$(i,Math.max(f(i)-1,0),!0)):b.key==="Enter"&&(b.preventDefault(),l(f(r)[f(i)]))}var d=nu(),h=G(d),v=w(h,2),p=C(v),_=C(p);yc(_,{size:14});var g=w(_,2);Jr(g,b=>$(a,b),()=>f(a));var m=w(g,2);{var E=b=>{var A=Xc();S(b,A)};le(m,b=>{f(s)&&b(E)})}var R=w(p,2);{var M=b=>{var A=eu();It(A,23,()=>f(r),Y=>Y.path,(Y,I,x)=>{var K=Qc(),ee=C(K);let $e;var Se=C(ee),Ke=ge(Se,!0),P=w(Se,2),B=ge(P,!0),T=w(P,2);{var j=Z=>{nc(Z,{size:12})};le(T,Z=>{f(x)===f(i)&&Z(j)})}fe(()=>{$e=lt(ee,1,"svelte-e2eyom",null,$e,{active:f(x)===f(i)}),ue(Ke,f(I).name),ue(B,f(I).path)}),W("click",ee,()=>l(f(I))),S(Y,K)}),S(b,A)},F=b=>{var A=tu(),Y=ge(A);fe(I=>ue(Y,`No files match “${I??""}”.`),[()=>f(n).trim()]),S(b,A)},k=Wn(()=>f(n).trim()&&!f(s));le(R,b=>{f(r).length?b(M):f(k)&&b(F,1)})}W("click",h,()=>{var b;return(b=t.onclose)==null?void 0:b.call(t)}),W("keydown",h,b=>{var A;return b.key==="Escape"&&((A=t.onclose)==null?void 0:A.call(t))}),W("keydown",g,u),Re(g,()=>f(n),b=>$(n,b)),S(e,d),St()}nn(["click","keydown"]);var iu=U('<div class="terminal-pane svelte-maclc7"><div class="bar svelte-maclc7"><span class="label svelte-maclc7">SSH terminal</span> <span> </span></div> <div class="screen svelte-maclc7"></div></div>');function su(e,t){kt(t,!0);let n=Pe(t,"rootPath",3,""),r=Pe(t,"session",3,""),i,s=null,a=null,o=null,l=D("connecting"),u=null;const d={background:Hn.colors["editor.background"],foreground:Hn.colors["editor.foreground"],cursor:Hn.colors["editorCursor.foreground"],selectionBackground:Hn.colors["editor.selectionBackground"],black:"#272822",red:"#f92672",green:"#a6e22e",yellow:"#e6db74",blue:"#66d9ef",magenta:"#ae81ff",cyan:"#a1efe4",white:"#f8f8f2",brightBlack:"#75715e",brightRed:"#f92672",brightGreen:"#a6e22e",brightYellow:"#e6db74",brightBlue:"#66d9ef",brightMagenta:"#ae81ff",brightCyan:"#a1efe4",brightWhite:"#f9f8f5"};function h(){if(!(!a||!s||(o==null?void 0:o.readyState)!==WebSocket.OPEN))try{a.fit(),o.send(JSON.stringify({type:"resize",cols:s.cols,rows:s.rows}))}catch{}}Zr(async()=>{const[{Terminal:E},{FitAddon:R}]=await Promise.all([Ir(()=>import("./ide-xterm.js"),[],import.meta.url),Ir(()=>import("./ide-addon-fit.js"),[],import.meta.url)]);await Ir(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),s=new E({theme:d,fontSize:12,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3}),a=new R,s.loadAddon(a),s.open(i),a.fit();const F=`${location.protocol==="https:"?"wss":"ws"}://${location.host}${n()}/ws/sessions/${encodeURIComponent(r())}/ide/terminal/${encodeURIComponent(y.connectionId)}`;o=new WebSocket(F),o.binaryType="arraybuffer",o.onopen=()=>{$(l,"connected"),h()},o.onmessage=k=>{s.write(typeof k.data=="string"?k.data:new Uint8Array(k.data))},o.onclose=()=>{$(l,"closed"),s==null||s.write(`\r
\x1B[90m— terminal detached —\x1B[0m\r
`)},o.onerror=()=>{$(l,"error")},s.onData(k=>{(o==null?void 0:o.readyState)===WebSocket.OPEN&&o.send(new TextEncoder().encode(k))}),u=new ResizeObserver(()=>h()),u.observe(i)}),Wi(()=>{u==null||u.disconnect(),o==null||o.close(),s==null||s.dispose()});var v=iu(),p=C(v),_=w(C(p),2),g=ge(_,!0),m=w(p,2);Jr(m,E=>i=E,()=>i),fe(()=>{lt(_,1,`status ${f(l)??""}`,"svelte-maclc7"),ue(g,f(l))}),S(e,v),St()}var au=U("<option> </option>"),ou=U('<button title="Delete connection" aria-label="Delete connection" class="svelte-1iy7iaf"><!></button>'),lu=U('<input class="pw svelte-1iy7iaf" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),cu=U('<!> <button class="primary svelte-1iy7iaf">Connect</button>',1),uu=U('<button title="Open the SSH terminal in this browser"><!> Terminal</button> <button title="Focus the tmux SSH window on the dashboard host" class="svelte-1iy7iaf"><!></button>',1),fu=U('<input placeholder="~/.ssh/id_ed25519" class="svelte-1iy7iaf"/>'),du=U('<input type="password" placeholder="Password" autocomplete="new-password" class="svelte-1iy7iaf"/>'),vu=U('<form class="connform svelte-1iy7iaf"><input placeholder="Label" class="svelte-1iy7iaf"/> <input placeholder="Host" required="" class="svelte-1iy7iaf"/> <input placeholder="User" required="" class="svelte-1iy7iaf"/> <input placeholder="Port" type="number" min="1" max="65535" class="svelte-1iy7iaf"/> <select class="svelte-1iy7iaf"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!> <input placeholder="Workspace root" class="svelte-1iy7iaf"/> <button class="primary svelte-1iy7iaf" type="submit">Create</button> <button type="button" class="svelte-1iy7iaf">Cancel</button></form>'),hu=U('<div class="terminal-wrap svelte-1iy7iaf"><!></div>'),pu=U('<span class="dirty svelte-1iy7iaf"> </span>'),_u=U('<div class="ide svelte-1iy7iaf"><header class="topbar svelte-1iy7iaf"><span class="brand svelte-1iy7iaf">Remote SSH IDE</span> <select title="SSH connection" class="svelte-1iy7iaf"><option>— select connection —</option><!></select> <button class="svelte-1iy7iaf"><!> Add</button> <!> <span><!> </span> <!></header> <!> <div class="main svelte-1iy7iaf"><aside class="sidebar svelte-1iy7iaf"><div class="switch svelte-1iy7iaf"><button><!> Files</button> <button><!> Git</button></div> <!></aside> <section class="code svelte-1iy7iaf"><!> <div class="editor-wrap svelte-1iy7iaf"><!></div> <!></section> <aside class="chat-pane svelte-1iy7iaf"><!></aside></div> <!> <footer class="statusbar svelte-1iy7iaf"><span> </span> <span class="detail svelte-1iy7iaf"> </span> <!></footer></div>');function gu(e,t){kt(t,!0);let n=Pe(t,"sessions",19,()=>[]),r=Pe(t,"session",3,""),i=Pe(t,"rootPath",3,""),s=D("files"),a=D(!1),o=D(!1),l=D(!1),u=D(""),d=D(be({label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",workspace_root:".",max_file_bytes:1e6}));const h={idle:{icon:tc,label:"Not connected"},connecting:{icon:ec,label:"Connecting…"},connected:{icon:Ql,label:"Connected"},reconnect:{icon:ys,label:"Reconnect required"},error:{icon:ys,label:"Error"}},v=Wn(()=>h[y.connectionState].icon);Zr(async()=>{await y.loadConnections(),y.connectionId&&await y.refreshStatus()});async function p(N){y.connectionId=N.currentTarget.value,y.tabs=[],y.activeKey="",y.restoredKey="",await y.refreshStatus()}async function _(N){N.preventDefault();try{const J=await _e.createConnection({...f(d),port:Number(f(d).port)});$(l,!1),$(d,{...f(d),label:"",host:"",username:"",password:""},!0),await y.loadConnections(),y.connectionId=J.connection.id,await y.refreshStatus()}catch(J){y.setStatus(J.message||"Could not create connection")}}async function g(){const N=y.connection;if(N&&confirm(`Delete connection "${N.label}"? Stored credentials and saved tabs are removed.`))try{await _e.deleteConnection(N.id),y.connectionId="",y.tabs=[],await y.loadConnections()}catch(J){y.setStatus(J.message||"Could not delete connection")}}async function m(){try{const N=await _e.focusTerminal(y.connectionId);y.setStatus(`Focused ${N.window_name}`,"tmux SSH window selected")}catch(N){y.setStatus(N.message||"Could not focus terminal")}}function E(N){var Ce,qe,We,Ot;const J=N.ctrlKey||N.metaKey,oe=N.key.toLowerCase(),je=((qe=(Ce=N.target)==null?void 0:Ce.matches)==null?void 0:qe.call(Ce,"input, textarea, select"))&&!((Ot=(We=N.target).closest)!=null&&Ot.call(We,".monaco-editor"));J&&oe==="s"?(N.preventDefault(),y.saveActive()):J&&oe==="p"&&!je?(N.preventDefault(),y.connectionId&&$(a,!0)):N.key==="Escape"&&f(a)&&(N.preventDefault(),$(a,!1))}var R=_u();Si("keydown",wi,E);var M=C(R),F=w(C(M),2),k=C(F);k.value=k.__value="";var b=w(k);It(b,17,()=>y.connections,N=>N.id,(N,J)=>{var oe=au(),je=ge(oe,!0),Ce={};fe(()=>{ue(je,f(J).label),Ce!==(Ce=f(J).id)&&(oe.value=(oe.__value=Ce)??"")}),S(N,oe)});var A;Jn(F);var Y=w(F,2),I=C(Y);mc(I,{size:14});var x=w(Y,2);{var K=N=>{var J=ou(),oe=C(J);Ma(oe,{size:14}),W("click",J,g),S(N,J)};le(x,N=>{y.connection&&N(K)})}var ee=w(x,2),$e=C(ee);Nl($e,()=>f(v),(N,J)=>{J(N,{size:13})});var Se=w($e),Ke=w(ee,2);{var P=N=>{var J=cu(),oe=G(J);{var je=qe=>{var We=lu();Re(We,()=>f(u),Ot=>$(u,Ot)),S(qe,We)};le(oe,qe=>{y.connection&&!y.connection.has_password&&qe(je)})}var Ce=w(oe,2);W("click",Ce,()=>y.connect(f(u))),S(N,J)},B=N=>{var J=uu(),oe=G(J);let je;var Ce=C(oe);wc(Ce,{size:14});var qe=w(oe,2),We=C(qe);ic(We,{size:14}),fe(()=>je=lt(oe,1,"svelte-1iy7iaf",null,je,{active:f(o)})),W("click",oe,()=>$(o,!f(o))),W("click",qe,m),S(N,J)};le(Ke,N=>{y.connectionState!=="connected"?N(P):N(B,-1)})}var T=w(M,2);{var j=N=>{var J=vu(),oe=C(J),je=w(oe,2),Ce=w(je,2),qe=w(Ce,2),We=w(qe,2),Ot=C(We);Ot.value=Ot.__value="agent";var ti=w(Ot);ti.value=ti.__value="key";var Zi=w(ti);Zi.value=Zi.__value="password",Jn(We);var Xi=w(We,2);{var Ba=ve=>{var Mn=fu();Re(Mn,()=>f(d).identity_file,ni=>f(d).identity_file=ni),S(ve,Mn)};le(Xi,ve=>{f(d).auth_mode==="key"&&ve(Ba)})}var Qi=w(Xi,2);{var Ha=ve=>{var Mn=du();Re(Mn,()=>f(d).password,ni=>f(d).password=ni),S(ve,Mn)};le(Qi,ve=>{f(d).auth_mode==="password"&&ve(Ha)})}var es=w(Qi,2),Ua=w(es,4);Si("submit",J,_),Re(oe,()=>f(d).label,ve=>f(d).label=ve),Re(je,()=>f(d).host,ve=>f(d).host=ve),Re(Ce,()=>f(d).username,ve=>f(d).username=ve),Re(qe,()=>f(d).port,ve=>f(d).port=ve),ka(We,()=>f(d).auth_mode,ve=>f(d).auth_mode=ve),Re(es,()=>f(d).workspace_root,ve=>f(d).workspace_root=ve),W("click",Ua,()=>$(l,!1)),S(N,J)};le(T,N=>{f(l)&&N(j)})}var Z=w(T,2),ke=C(Z),Ee=C(ke),Ie=C(Ee);let dt;var nt=C(Ie);cc(nt,{size:13});var Te=w(Ie,2);let rn;var Et=C(Te);vc(Et,{size:13});var $r=w(Ee,2);{var Xr=N=>{Cc(N,{})},kr=N=>{Oc(N,{})};le($r,N=>{f(s)==="files"?N(Xr):N(kr,-1)})}var sn=w(ke,2),Pn=C(sn);Kc(Pn,{});var Sr=w(Pn,2),Er=C(Sr);jc(Er,{});var Qr=w(Sr,2);{var ei=N=>{var J=hu(),oe=C(J);Sl(oe,()=>y.connectionId,je=>{su(je,{get rootPath(){return i()},get session(){return r()}})}),S(N,J)};le(Qr,N=>{f(o)&&y.connectionState==="connected"&&N(ei)})}var Oa=w(sn,2),za=C(Oa);Zc(za,{get sessions(){return n()},get session(){return r()},get rootPath(){return i()}});var Gi=w(Z,2);{var Ra=N=>{ru(N,{onclose:()=>$(a,!1)})};le(Gi,N=>{f(a)&&N(Ra)})}var Da=w(Gi,2),Yi=C(Da),La=ge(Yi,!0),Ji=w(Yi,2),Fa=ge(Ji,!0),ja=w(Ji,2);{var Va=N=>{var J=pu(),oe=ge(J);fe(()=>ue(oe,`${y.dirtyCount??""} unsaved`)),S(N,J)};le(ja,N=>{y.dirtyCount&&N(Va)})}fe(()=>{A!==(A=y.connectionId)&&(F.value=(F.__value=A)??"",Sn(F,A)),lt(ee,1,`state ${y.connectionState??""}`,"svelte-1iy7iaf"),ue(Se,` ${h[y.connectionState].label??""}`),dt=lt(Ie,1,"svelte-1iy7iaf",null,dt,{active:f(s)==="files"}),rn=lt(Te,1,"svelte-1iy7iaf",null,rn,{active:f(s)==="git"}),ue(La,y.statusText),ue(Fa,y.detailText)}),W("change",F,p),W("click",Y,()=>$(l,!f(l))),W("click",Ie,()=>$(s,"files")),W("click",Te,()=>$(s,"git")),S(e,R),St()}nn(["change","click"]);function Ia(e,t){return bl(gu,{target:e,props:t})}function $s(){const e=document.getElementById("ide-root");if(!e||e.dataset.mounted)return;e.dataset.mounted="1";const t=window.__IDE_BOOTSTRAP__||{};Ia(e,{sessions:t.sessions||[],session:t.session||"",rootPath:t.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",$s):$s();window.mountRemoteIde=Ia;export{Ir as _};
