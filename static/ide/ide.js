const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css"])))=>i.map(i=>d[i]);
var ja=Object.defineProperty;var Zi=e=>{throw TypeError(e)};var Va=(e,t,n)=>t in e?ja(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Ce=(e,t,n)=>Va(e,typeof t!="symbol"?t+"":t,n),Xr=(e,t,n)=>t.has(e)||Zi("Cannot "+n);var c=(e,t,n)=>(Xr(e,t,"read from private field"),n?n.call(e):t.get(e)),O=(e,t,n)=>t.has(e)?Zi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),L=(e,t,n,r)=>(Xr(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),q=(e,t,n)=>(Xr(e,t,"access private method"),n);var Br=Array.isArray,Ba=Array.prototype.indexOf,Mr=Array.prototype.includes,Hr=Array.from,$s=Object.defineProperty,Lt=Object.getOwnPropertyDescriptor,ks=Object.getOwnPropertyDescriptors,Ha=Object.prototype,Ka=Array.prototype,Ti=Object.getPrototypeOf,Xi=Object.isExtensible;function Pn(e){return typeof e=="function"}const qa=()=>{};function Ua(e){return e()}function ci(e){for(var t=0;t<e.length;t++)e[t]()}function Ss(){var e,t,n=new Promise((r,i)=>{e=r,t=i});return{promise:n,resolve:e,reject:t}}function Wa(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const ge=2,mn=4,pr=8,xi=1<<24,rt=16,Ze=32,Tt=64,ui=128,Ni=256,Je=512,he=1024,pe=2048,at=4096,Ne=8192,Re=16384,Sn=32768,Ir=1<<25,jt=65536,Or=1<<17,Ga=1<<18,En=1<<19,Es=1<<20,vt=1<<25,Xt=65536,zr=1<<21,cn=1<<22,Ft=1<<23,pt=Symbol("$state"),Cs=Symbol("component"),Ts=Symbol("legacy props"),Ya=Symbol(""),Tr=Symbol("attributes"),fi=Symbol("class"),di=Symbol("style"),zn=Symbol("text"),xr=Symbol("form reset"),_r=new class extends Error{constructor(){super(...arguments);Ce(this,"name","StaleReactionError");Ce(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var ys;const Ai=!!((ys=globalThis.document)!=null&&ys.contentType)&&globalThis.document.contentType.includes("xml"),Ja=1,Za=2,xs=4,Xa=8,Qa=16,eo=1,to=2,Ns=4,no=8,ro=16,io=1,so=2,ue=Symbol("uninitialized"),As="http://www.w3.org/1999/xhtml",ao="http://www.w3.org/2000/svg",oo="@attach";function lo(){console.warn("https://svelte.dev/e/derived_inert")}function co(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function uo(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Ps(e){return e===this.v}function fo(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ms(e){return!fo(e,this.v)}function Is(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function vo(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ho(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function po(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function _o(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function go(e){throw new Error("https://svelte.dev/e/effect_orphan")}function mo(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function yo(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function bo(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function wo(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function $o(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ko(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Cn=!1;function So(){Cn=!0}let ae=null;function yn(e){ae=e}function Pt(e,t=!1,n){ae={p:ae,i:!1,c:null,e:null,s:e,x:null,r:V,l:Cn&&!t?{s:null,u:null,$:[]}:null}}function Mt(e){var t=ae,n=t.e;if(n!==null){t.e=null;for(var r of n)ea(r)}return t.i=!0,ae=t.p,Pi(e)}function Pi(e={}){return $s(e,Cs,{value:!0}),e}function gr(){return!Cn||ae!==null&&ae.l===null}let Bt=[];function Os(){var e=Bt;Bt=[],ci(e)}function ht(e){if(Bt.length===0&&!Bn){var t=Bt;queueMicrotask(()=>{t===Bt&&Os()})}Bt.push(e)}function Eo(){for(;Bt.length>0;)Os()}const Co=-7169;function oe(e,t){e.f=e.f&Co|t}function Mi(e){(e.f&Je)!==0||e.deps===null?oe(e,he):oe(e,at)}function zs(e){if(e!==null)for(const t of e)(t.f&ge)===0||(t.f&Xt)===0||(t.f^=Xt,zs(t.deps))}function Rs(e,t,n){(e.f&pe)!==0?t.add(e):(e.f&at)!==0&&n.add(e),zs(e.deps),oe(e,he)}let Er=!1;function To(e){var t=Er;try{return Er=!1,[e(),Er]}finally{Er=t}}function xo(e,t){if(t){const n=document.body;e.autofocus=!0,ht(()=>{document.activeElement===n&&e.focus()})}}let Qi=!1;function No(){Qi||(Qi=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[xr])==null||t.call(n)})},{capture:!0}))}function Tn(e){var t=H,n=V;Xe(null),Qe(null);try{return e()}finally{Xe(t),Qe(n)}}function Ii(e,t,n,r=n){e.addEventListener(t,()=>Tn(n));const i=e[xr];i?e[xr]=()=>{i(),r(!0)}:e[xr]=()=>r(!0),No()}function Ds(e,t,n,r){const i=gr()?bn:Oi;var s=e.filter(h=>!h.settled),a=t.map(i);if(n.length===0&&s.length===0){r(a);return}var o=V,l=Ao(),u=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(h=>h.promise)):null;function v(h){if((o.f&Re)===0){l();try{r([...a,...h])}catch(_){dt(_,o)}Rr()}}var p=Ls();if(n.length===0){u.then(()=>v([])).finally(p);return}function d(){Promise.all(n.map(h=>Po(h))).then(v).catch(h=>dt(h,o)).finally(p)}u?u.then(()=>{l(),d(),Rr()}):d()}function Ao(){var e=V,t=H,n=ae,r=z;return function(s=!0){Qe(e),Xe(t),yn(n),s&&(e.f&Re)===0&&(r==null||r.activate(),r==null||r.apply())}}function Rr(e=!0){Qe(null),Xe(null),yn(null),e&&(z==null||z.deactivate())}function Ls(){var e=V,t=e.b,n=z,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function bn(e){var t=ge|pe;return V!==null&&(V.f|=En),{ctx:ae,deps:null,effects:null,equals:Ps,f:t,fn:e,reactions:null,rv:0,v:ue,wv:0,parent:V,ac:null}}const Rn=Symbol("obsolete");function Po(e,t,n){let r=V;r===null&&vo();var i=void 0,s=xt(ue),a=!H,o=new Set;return Uo(()=>{var h,_;var l=V,u=Ss();i=u.promise;try{Promise.resolve(e()).then(u.resolve,g=>{g!==_r&&u.reject(g)}).finally(Rr)}catch(g){u.reject(g),Rr()}var v=z;if(a){if((l.f&Sn)!==0)var p=Ls();if((h=r.b)!=null&&h.is_rendered())(_=v.async_deriveds.get(l))==null||_.reject(Rn);else for(const g of o.values())g.reject(Rn);o.add(u),v.async_deriveds.set(l,u)}const d=(g,m=void 0)=>{p==null||p(),o.delete(u),m!==Rn&&(v.activate(),m?(s.f|=Ft,wn(s,m)):((s.f&Ft)!==0&&(s.f^=Ft),wn(s,g)),v.deactivate())};u.promise.then(d,g=>d(null,g||"unknown"))}),Kr(()=>{for(const l of o)l.reject(Rn)}),new Promise(l=>{function u(v){function p(){v===i?l(s):u(i)}v.then(p,p)}u(i)})}function Kn(e){const t=bn(e);return aa(t),t}function Oi(e){const t=bn(e);return t.equals=Ms,t}function Mo(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)$e(t[n])}}function zi(e){var t,n=V,r=e.parent;if(!Nt&&r!==null&&e.v!==ue&&(r.f&(Re|Ne))!==0)return lo(),e.v;Qe(r);try{e.f&=~Xt,Mo(e),t=ua(e)}finally{Qe(n)}return t}function Fs(e){var t=zi(e);if(!e.equals(t)&&(e.wv=la(),(!(z!=null&&z.is_fork)||e.deps===null)&&(z!==null?(z.capture(e,t,!0),Vn==null||Vn.capture(e,t,!0)):e.v=t,e.deps===null))){oe(e,he);return}Nt||(ye!==null?(Fi()||z!=null&&z.is_fork)&&ye.set(e,t):Mi(e))}function Io(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&Tn(()=>{n.ac.abort(_r),n.ac=null}),n.fn!==null&&(n.teardown=qa),qn(n,0),ji(n))}function js(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&$n(t)}let Qr=null,sn=null,z=null,Vn=null,ye=null,vi=null,Bn=!1,ei=!1,ln=null,Nr=null;var es=0;let Oo=1;var fn,Rt,qt,dn,vn,hn,$t,pn,Me,Gn,kt,tt,ct,_n,Ut,te,hi,Dn,pi,Vs,Bs,on,zo,Ln;const Fr=class Fr{constructor(){O(this,te);Ce(this,"id",Oo++);O(this,fn,!1);Ce(this,"linked",!0);O(this,Rt,null);O(this,qt,null);Ce(this,"async_deriveds",new Map);Ce(this,"current",new Map);Ce(this,"previous",new Map);O(this,dn,new Set);O(this,vn,new Set);O(this,hn,0);O(this,$t,new Map);O(this,pn,null);O(this,Me,[]);O(this,Gn,[]);O(this,kt,new Set);O(this,tt,new Set);O(this,ct,new Map);O(this,_n,new Set);Ce(this,"is_fork",!1);O(this,Ut,!1);sn===null?Qr=sn=this:(L(sn,qt,this),L(this,Rt,sn)),sn=this}skip_effect(t){c(this,ct).has(t)||c(this,ct).set(t,{d:[],m:[]}),c(this,_n).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=c(this,ct).get(t);if(r){c(this,ct).delete(t);for(var i of r.d)oe(i,pe),n(i);for(i of r.m)oe(i,at),n(i)}c(this,_n).add(t)}capture(t,n,r=!1){t.v!==ue&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Ft)===0&&(this.current.set(t,[n,r]),ye==null||ye.set(t,n)),this.is_fork||(t.v=n)}activate(){z=this}deactivate(){z=null,ye=null}flush(){try{ei=!0,z=this,q(this,te,Dn).call(this)}finally{es=0,vi=null,ln=null,Nr=null,ei=!1,z=null,ye=null,_t.clear()}}discard(){var t;for(const n of c(this,vn))n(this);c(this,vn).clear();for(const n of this.async_deriveds.values())n.reject(Rn);q(this,te,Ln).call(this),(t=c(this,pn))==null||t.resolve()}register_created_effect(t){c(this,Gn).push(t)}increment(t,n){if(L(this,hn,c(this,hn)+1),t){let r=c(this,$t).get(n)??0;c(this,$t).set(n,r+1)}}decrement(t,n){if(L(this,hn,c(this,hn)-1),t){let r=c(this,$t).get(n)??0;r===1?c(this,$t).delete(n):c(this,$t).set(n,r-1)}c(this,Ut)||(L(this,Ut,!0),ht(()=>{L(this,Ut,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)c(this,kt).add(r);for(const r of n)c(this,tt).add(r);t.clear(),n.clear()}oncommit(t){c(this,dn).add(t)}ondiscard(t){c(this,vn).add(t)}settled(){return(c(this,pn)??L(this,pn,Ss())).promise}static ensure(){if(z===null){const t=z=new Fr;!ei&&!Bn&&ht(()=>{c(t,fn)||t.flush()})}return z}apply(){{ye=null;return}}schedule(t){var i;if(vi=t,(i=t.b)!=null&&i.is_pending&&(t.f&(mn|pr|xi))!==0&&(t.f&Sn)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(ln!==null&&n===V&&(H===null||(H.f&ge)===0))return;if((r&(Tt|Ze))!==0){if((r&he)===0)return;n.f^=he}}c(this,Me).push(n)}};fn=new WeakMap,Rt=new WeakMap,qt=new WeakMap,dn=new WeakMap,vn=new WeakMap,hn=new WeakMap,$t=new WeakMap,pn=new WeakMap,Me=new WeakMap,Gn=new WeakMap,kt=new WeakMap,tt=new WeakMap,ct=new WeakMap,_n=new WeakMap,Ut=new WeakMap,te=new WeakSet,hi=function(){if(this.is_fork)return!0;for(const r of c(this,$t).keys()){for(var t=r,n=!1;t.parent!==null;){if(c(this,ct).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},Dn=function(){var l,u,v,p;L(this,fn,!0),es++>1e3&&(q(this,te,Ln).call(this),Do());for(const d of c(this,kt))c(this,tt).delete(d),oe(d,pe),this.schedule(d);for(const d of c(this,tt))oe(d,at),this.schedule(d);const t=c(this,Me);L(this,Me,[]),this.apply();var n=ln=[],r=[],i=Nr=[];for(const d of t)try{q(this,te,pi).call(this,d,n,r)}catch(h){throw qs(d),q(this,te,hi).call(this)||this.discard(),h}if(z=null,i.length>0){var s=Fr.ensure();for(const d of i)s.schedule(d)}if(ln=null,Nr=null,q(this,te,hi).call(this)){q(this,te,on).call(this,r),q(this,te,on).call(this,n);for(const[d,h]of c(this,ct))Ks(d,h);i.length>0&&q(l=z,te,Dn).call(l);return}const a=q(this,te,Vs).call(this);if(a){q(this,te,on).call(this,r),q(this,te,on).call(this,n),q(u=a,te,Bs).call(u,this);return}c(this,kt).clear(),c(this,tt).clear();for(const d of c(this,dn))d(this);c(this,dn).clear(),Vn=this,ts(r),ts(n),Vn=null,(v=c(this,pn))==null||v.resolve();var o=z;if(c(this,hn)===0&&(c(this,Me).length===0||o!==null)&&q(this,te,Ln).call(this),c(this,Me).length>0)if(o!==null){const d=o;c(d,Me).push(...c(this,Me).filter(h=>!c(d,Me).includes(h)))}else o=this;o!==null&&(_t.clear(),q(p=o,te,Dn).call(p))},pi=function(t,n,r){t.f^=he;for(var i=t.first;i!==null;){var s=i.f,a=(s&(Ze|Tt))!==0,o=a&&(s&he)!==0,l=o||(s&Ne)!==0||c(this,ct).has(i);if(!l&&i.fn!==null){a?i.f^=he:(s&mn)!==0?n.push(i):br(i)&&((s&rt)!==0&&c(this,tt).add(i),$n(i));var u=i.first;if(u!==null){i=u;continue}}for(;i!==null;){var v=i.next;if(v!==null){i=v;break}i=i.parent}}},Vs=function(){for(var t=c(this,Rt);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=c(t,Rt)}return null},Bs=function(t){var r;for(const[i,s]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,s);for(const[i,s]of t.async_deriveds){const a=this.async_deriveds.get(i);a&&s.promise.then(a.resolve).catch(a.reject)}t.async_deriveds.clear(),this.transfer_effects(c(t,kt),c(t,tt));const n=i=>{var s=i.reactions;if(s!==null&&!((i.f&ge)!==0&&(i.f&(pe|at))===0))for(const l of s){var a=l.f;if((a&ge)!==0)n(l);else{var o=l;a&(cn|rt)&&!this.async_deriveds.has(o)&&(c(this,tt).delete(o),oe(o,pe),this.schedule(o))}}};for(const i of this.current.keys())n(i);this.oncommit(()=>t.discard()),q(r=t,te,Ln).call(r),z=this,q(this,te,Dn).call(this)},on=function(t){for(var n=0;n<t.length;n+=1)Rs(t[n],c(this,kt),c(this,tt))},zo=function(){var p;for(let d=Qr;d!==null;d=c(d,qt)){var t=d.id<this.id,n=[];for(const[h,[_,g]]of this.current){if(d.current.has(h)){var r=d.current.get(h)[0];if(t&&_!==r)d.current.set(h,[_,g]);else continue}n.push(h)}if(t)for(const[h,_]of this.async_deriveds){const g=d.async_deriveds.get(h);g&&_.promise.then(g.resolve).catch(g.reject)}var i=[...d.current.keys()].filter(h=>!d.current.get(h)[1]);if(!(!c(d,fn)||i.length===0)){var s=i.filter(h=>!this.current.has(h));if(s.length===0)t&&d.discard();else if(n.length>0){if(t)for(const h of c(this,_n))d.unskip_effect(h,_=>{var g;(_.f&(rt|cn))!==0?d.schedule(_):q(g=d,te,on).call(g,[_])});d.activate();var a=new Set,o=new Map;for(var l of n)Hs(l,s,a,o);o=new Map;var u=[...d.current].filter(([h,_])=>{const g=this.current.get(h);return g?g[0]!==_[0]||g[1]!==_[1]:!0}).map(([h])=>h);if(u.length>0)for(const h of c(this,Gn))(h.f&(Re|Ne|Or))===0&&Ri(h,u,o)&&((h.f&(cn|rt))!==0?(oe(h,pe),d.schedule(h)):c(d,kt).add(h));if(c(d,Me).length>0&&!c(d,Ut)){d.apply();for(var v of c(d,Me))q(p=d,te,pi).call(p,v,[],[]);L(d,Me,[])}d.deactivate()}}}},Ln=function(){if(this.linked){var t=c(this,Rt),n=c(this,qt);t===null?Qr=n:L(t,qt,n),n===null?sn=t:L(n,Rt,t),this.linked=!1}};let Qt=Fr;function Ro(e){var t=Bn;Bn=!0;try{for(var n;;){if(Eo(),z===null)return n;z.flush()}}finally{Bn=t}}function Do(){try{mo()}catch(e){dt(e,vi)}}let et=null;function ts(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(Re|Ne))===0&&br(r)&&(et=new Set,$n(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&ra(r),(et==null?void 0:et.size)>0)){_t.clear();for(const i of et){if((i.f&(Re|Ne))!==0)continue;const s=[i];let a=i.parent;for(;a!==null;)et.has(a)&&(et.delete(a),s.push(a)),a=a.parent;for(let o=s.length-1;o>=0;o--){const l=s[o];(l.f&(Re|Ne))===0&&$n(l)}}et.clear()}}et=null}}function Hs(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const i of e.reactions){const s=i.f;(s&ge)!==0?Hs(i,t,n,r):(s&(cn|rt))!==0&&(s&pe)===0&&Ri(i,t,r)&&(oe(i,pe),Di(i))}}function Ri(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const i of e.deps){if(Mr.call(t,i))return!0;if((i.f&ge)!==0&&Ri(i,t,n))return n.set(i,!0),!0}return n.set(e,!1),!1}function Di(e){z.schedule(e)}function Ks(e,t){if(!((e.f&Ze)!==0&&(e.f&he)!==0)){(e.f&pe)!==0?t.d.push(e):(e.f&at)!==0&&t.m.push(e),oe(e,he);for(var n=e.first;n!==null;)Ks(n,t),n=n.next}}function qs(e){oe(e,he);for(var t=e.first;t!==null;)qs(t),t=t.next}let Dr=new Set;const _t=new Map;let Us=!1;function xt(e,t){var n={f:0,v:e,reactions:null,equals:Ps,rv:0,wv:0};return n}function D(e,t){const n=xt(e);return aa(n),n}function Lo(e,t=!1,n=!0){var i;const r=xt(e);return t||(r.equals=Ms),Cn&&n&&ae!==null&&ae.l!==null&&((i=ae.l).s??(i.s=[])).push(r),r}function $(e,t,n=!1){H!==null&&(!it||(H.f&Or)!==0)&&gr()&&(H.f&(ge|rt|cn|Or))!==0&&(gt===null||!gt.has(e))&&$o();let r=n?be(t):t;return wn(e,r,Nr)}function wn(e,t,n=null){if(!e.equals(t)){Nt?_t.set(e,t):_t.has(e)||_t.set(e,e.v);var r=Qt.ensure();if(r.capture(e,t),(e.f&ge)!==0){const i=e;(e.f&pe)!==0&&zi(i),ye===null&&Mi(i)}e.wv=la(),Ws(e,pe,n),gr()&&V!==null&&(V.f&he)!==0&&(V.f&(Ze|Tt))===0&&(We===null?Yo([e]):We.push(e)),!r.is_fork&&Dr.size>0&&!Us&&Fo()}return t}function Fo(){Us=!1;for(const e of Dr){(e.f&he)!==0&&oe(e,at);let t;try{t=br(e)}catch{t=!0}t&&$n(e)}Dr.clear()}function ns(e,t=1){var n=f(e),r=t===1?n++:n--;return $(e,n),r}function Hn(e){$(e,e.v+1)}function Ws(e,t,n){var r=e.reactions;if(r!==null)for(var i=gr(),s=r.length,a=0;a<s;a++){var o=r[a],l=o.f;if(!(!i&&o===V)){var u=(l&pe)===0;if(u&&oe(o,t),(l&Or)!==0)Dr.add(o);else if((l&ge)!==0){var v=o;ye==null||ye.delete(v),(l&Xt)===0&&(l&Je&&(V===null||(V.f&zr)===0)&&(o.f|=Xt),Ws(v,at,n))}else if(u){var p=o;(l&rt)!==0&&et!==null&&et.add(p),n!==null?n.push(p):Di(p)}}}}function be(e){if(typeof e!="object"||e===null||pt in e||Cs in e)return e;const t=Ti(e);if(t!==Ha&&t!==Ka)return e;var n=new Map,r=Br(e),i=D(0),s=Zt,a=o=>{if(Zt===s)return o();var l=H,u=Zt;Xe(null),ss(s);var v=o();return Xe(l),ss(u),v};return r&&n.set("length",D(e.length)),new Proxy(e,{defineProperty(o,l,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&bo();var v=n.get(l);return v===void 0?a(()=>{var p=D(u.value);return n.set(l,p),p}):$(v,u.value,!0),!0},deleteProperty(o,l){var u=n.get(l);if(u===void 0){if(l in o){const v=a(()=>D(ue));n.set(l,v),Hn(i)}}else $(u,ue),Hn(i);return!0},get(o,l,u){var h;if(l===pt)return e;var v=n.get(l),p=l in o;if(v===void 0&&(!p||(h=Lt(o,l))!=null&&h.writable)&&(v=a(()=>{var _=be(p?o[l]:ue),g=D(_);return g}),n.set(l,v)),v!==void 0){var d=f(v);return d===ue?void 0:d}return Reflect.get(o,l,u)},getOwnPropertyDescriptor(o,l){var u=Reflect.getOwnPropertyDescriptor(o,l);if(u&&"value"in u){var v=n.get(l);v&&(u.value=f(v))}else if(u===void 0){var p=n.get(l),d=p==null?void 0:p.v;if(p!==void 0&&d!==ue)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return u},has(o,l){var d;if(l===pt)return!0;var u=n.get(l),v=u!==void 0&&u.v!==ue||Reflect.has(o,l);if(u!==void 0||V!==null&&(!v||(d=Lt(o,l))!=null&&d.writable)){u===void 0&&(u=a(()=>{var h=v?be(o[l]):ue,_=D(h);return _}),n.set(l,u));var p=f(u);if(p===ue)return!1}return v},set(o,l,u,v){var T;var p=n.get(l),d=l in o;if(r&&l==="length")for(var h=u;h<p.v;h+=1){var _=n.get(h+"");_!==void 0?$(_,ue):h in o&&(_=a(()=>D(ue)),n.set(h+"",_))}if(p===void 0)(!d||(T=Lt(o,l))!=null&&T.writable)&&(p=a(()=>D(void 0)),$(p,be(u)),n.set(l,p));else{d=p.v!==ue;var g=a(()=>be(u));$(p,g)}var m=Reflect.getOwnPropertyDescriptor(o,l);if(m!=null&&m.set&&m.set.call(v,u),!d){if(r&&typeof l=="string"){var S=n.get("length"),R=Number(l);Number.isInteger(R)&&R>=S.v&&$(S,R+1)}Hn(i)}return!0},ownKeys(o){f(i);var l=Reflect.ownKeys(o).filter(p=>{var d=n.get(p);return d===void 0||d.v!==ue});for(var[u,v]of n)v.v!==ue&&!(u in o)&&l.push(u);return l},setPrototypeOf(){wo()}})}function rs(e){try{if(e!==null&&typeof e=="object"&&pt in e)return e[pt]}catch{}return e}function Gs(e,t){return Object.is(rs(e),rs(t))}var _i,Ys,Js,Zs;function jo(){if(_i===void 0){_i=window,Ys=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Js=Lt(t,"firstChild").get,Zs=Lt(t,"nextSibling").get,Xi(e)&&(e[fi]=void 0,e[Tr]=null,e[di]=void 0,e.__e=void 0),Xi(n)&&(n[zn]=void 0)}}function Et(e=""){return document.createTextNode(e)}function en(e){return Js.call(e)}function mr(e){return Zs.call(e)}function N(e,t){return en(e)}function G(e,t=!1){{var n=en(e);return n instanceof Comment&&n.data===""?mr(n):n}}function we(e,t=!1){return en(e)}function w(e,t=1,n=!1){let r=e;for(;t--;)r=mr(r);return r}function Vo(e){e.textContent=""}function Xs(){return!1}function Li(e,t,n){return t==null||t===As?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Bo(e){var t=V;if(t===null)return H.f|=Ft,e;if((t.f&Sn)===0&&(t.f&mn)===0)throw e;dt(e,t)}function dt(e,t){if(!(t!==null&&(t.f&Re)!==0)){for(;t!==null;){if((t.f&ui)!==0&&(t.f&(Re|Ir))===0){if((t.f&Sn)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function Qs(e){V===null&&(H===null&&go(),_o()),Nt&&po()}function Ho(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function ot(e,t){var n=V;n!==null&&(n.f&Ne)!==0&&(e|=Ne);var r={ctx:ae,deps:null,nodes:null,f:e|pe|Je,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};z==null||z.register_created_effect(r);var i=r;if((e&mn)!==0)ln!==null?ln.push(r):Qt.ensure().schedule(r);else if(t!==null){try{$n(r)}catch(a){throw $e(r),a}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&En)===0&&(i=i.first,(e&rt)!==0&&(e&jt)!==0&&i!==null&&(i.f|=jt))}if(i!==null&&(i.parent=n,n!==null&&Ho(i,n),H!==null&&(H.f&ge)!==0&&(e&Tt)===0)){var s=H;(s.effects??(s.effects=[])).push(i)}return r}function Fi(){return H!==null&&!it}function Kr(e){const t=ot(pr,null);return oe(t,he),t.teardown=e,t}function tn(e){Qs();var t=V.f,n=!H&&(t&Ze)!==0&&ae!==null&&!ae.i;if(n){var r=ae;(r.e??(r.e=[])).push(e)}else return ea(e)}function ea(e){return ot(mn|Es,e)}function Ko(e){return Qs(),ot(pr|Es,e)}function qo(e){Qt.ensure();const t=ot(Tt|En,e);return(n={})=>new Promise(r=>{n.outro?Jt(t,()=>{$e(t),r(void 0)}):($e(t),r(void 0))})}function qr(e){return ot(mn,e)}function Uo(e){return ot(cn|En,e)}function Ur(e,t=0){return ot(pr|t,e)}function ve(e,t=[],n=[],r=[]){Ds(r,t,n,i=>{ot(pr,()=>{e(...i.map(f))})})}function yr(e,t=0){var n=ot(rt|t,e);return n}function ta(e,t=0){var n=ot(xi|t,e);return n}function Oe(e){return ot(Ze|En,e)}function na(e){var t=e.teardown;if(t!==null){const n=Nt,r=H;is(!0),Xe(null);try{t.call(null)}catch(i){dt(i,e.parent)}finally{is(n),Xe(r)}}}function ji(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const i=n.ac;i!==null&&Tn(()=>{i.abort(_r)});var r=n.next;(n.f&Tt)!==0?n.parent=null:$e(n,t),n=r}}function Wo(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Ze)===0&&$e(t),t=n}}function $e(e,t=!0){var n=!1;(t||(e.f&Ga)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Go(e.nodes.start,e.nodes.end),n=!0),e.f|=Ir,ji(e,t&&!n),qn(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const s of r)s.stop();na(e),e.f^=Ir,e.f|=Re;var i=e.parent;i!==null&&i.first!==null&&ra(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Go(e,t){for(;e!==null;){var n=e===t?null:mr(e);e.remove(),e=n}}function ra(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Jt(e,t,n=!0){var r=[];e.f|=Ni,ia(e,r,!0);var i=()=>{n&&$e(e),t&&t()},s=r.length;if(s>0){var a=()=>--s||i();for(var o of r)o.out(a)}else i()}function ia(e,t,n){if((e.f&Ne)===0){e.f^=Ne;var r=e.nodes&&e.nodes.t;if(r!==null)for(const o of r)(o.is_global||n)&&t.push(o);for(var i=e.first;i!==null;){var s=i.next;if((i.f&Tt)===0){var a=(i.f&jt)!==0||(i.f&Ze)!==0&&(e.f&rt)!==0;ia(i,t,a?n:!1)}i=s}}}function Lr(e){e.f&=~Ni,sa(e,!0)}function sa(e,t){if((e.f&Ni)===0&&(e.f&Ne)!==0){e.f^=Ne,(e.f&he)===0&&(oe(e,pe),Qt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&jt)!==0||(n.f&Ze)!==0;sa(n,i?t:!1),n=r}var s=e.nodes&&e.nodes.t;if(s!==null)for(const a of s)(a.is_global||t)&&a.in()}}function Vi(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:mr(n);t.append(n),n=i}}let Ar=!1,Nt=!1;function is(e){Nt=e}let H=null,it=!1;function Xe(e){H=e}let V=null;function Qe(e){V=e}let gt=null;function aa(e){H!==null&&(gt??(gt=new Set)).add(e)}let ze=null,Be=0,We=null;function Yo(e){We=e}let oa=1,Ht=0,Zt=Ht;function ss(e){Zt=e}function la(){return++oa}function br(e){var t=e.f;if((t&pe)!==0)return!0;if(t&ge&&(e.f&=~Xt),(t&at)!==0){for(var n=e.deps,r=n.length,i=0;i<r;i++){var s=n[i];if(br(s)&&Fs(s),s.wv>e.wv)return!0}(t&Je)!==0&&ye===null&&oe(e,he)}return!1}function ca(e,t,n=!0){var r=e.reactions;if(r!==null&&!(gt!==null&&gt.has(e)))for(var i=0;i<r.length;i++){var s=r[i];(s.f&ge)!==0?ca(s,t,!1):t===s&&(n?oe(s,pe):(s.f&he)!==0&&oe(s,at),Di(s))}}function ua(e){var t=ze,n=Be,r=We,i=H,s=gt,a=ae,o=it,l=Zt,u=e.f;ze=null,Be=0,We=null,H=(u&(Ze|Tt))===0?e:null,gt=null,yn(e.ctx),it=!1,Zt=++Ht,e.ac!==null&&(Tn(()=>{e.ac.abort(_r)}),e.ac=null);try{e.f|=zr;var v=e.fn,p=v();e.f|=Sn;var d=as(e);if(gr()&&We!==null&&!it&&d!==null&&(e.f&(ge|at|pe))===0)for(var h=0;h<We.length;h++)ca(We[h],e);if(i!==null&&i!==e){if(Ht++,i.deps!==null)for(let _=0;_<n;_+=1)i.deps[_].rv=Ht;if(t!==null)for(const _ of t)_.rv=Ht;We!==null&&(r===null?r=We:r.push(...We))}return(e.f&Ft)!==0&&(e.f^=Ft),p}catch(_){return as(e),Bo(_)}finally{e.f^=zr,ze=t,Be=n,We=r,H=i,gt=s,yn(a),it=o,Zt=l}}function as(e){var i;var t=e.deps,n=z==null?void 0:z.is_fork;if(ze!==null){var r;if(n||qn(e,Be),t!==null&&Be>0)for(t.length=Be+ze.length,r=0;r<ze.length;r++)t[Be+r]=ze[r];else e.deps=t=ze;if(Fi()&&(e.f&Je)!==0)for(r=Be;r<t.length;r++)((i=t[r]).reactions??(i.reactions=[])).push(e)}else!n&&t!==null&&Be<t.length&&(qn(e,Be),t.length=Be);return t}function Jo(e,t){let n=t.reactions;if(n!==null){var r=Ba.call(n,e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}if(n===null&&(t.f&ge)!==0&&(ze===null||!Mr.call(ze,t))){var s=t;(s.f&Je)!==0&&(s.f^=Je,s.f&=~Xt),s.v!==ue&&Mi(s),s.ac!==null&&Tn(()=>{s.ac.abort(_r),s.ac=null,oe(s,pe)}),Io(s),qn(s,0)}}function qn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Jo(e,n[r])}function $n(e){var t=e.f;if((t&Re)===0){oe(e,he);var n=V,r=Ar;V=e,Ar=(t&(Ze|Tt))===0;try{(t&(rt|xi))!==0?Wo(e):ji(e),na(e);var i=ua(e);e.teardown=typeof i=="function"?i:null,e.wv=oa;var s}finally{Ar=r,V=n}}}async function Zo(){await Promise.resolve(),Ro()}function f(e){var t=e.f,n=(t&ge)!==0;if(H!==null&&!it){var r=V!==null&&(V.f&Re)!==0;if(!r&&(gt===null||!gt.has(e))){var i=H.deps;if((H.f&zr)!==0)e.rv<Ht&&(e.rv=Ht,ze===null&&i!==null&&i[Be]===e?Be++:ze===null?ze=[e]:ze.push(e));else{H.deps??(H.deps=[]),Mr.call(H.deps,e)||H.deps.push(e);var s=e.reactions;s===null?e.reactions=[H]:Mr.call(s,H)||s.push(H)}}}if(Nt&&_t.has(e))return _t.get(e);if(n){var a=e;if(Nt){var o=a.v;return((a.f&he)===0&&a.reactions!==null||da(a))&&(o=zi(a)),_t.set(a,o),o}var l=(a.f&Je)===0&&!it&&H!==null&&(Ar||(H.f&Je)!==0),u=(a.f&Sn)===0;br(a)&&(l&&(a.f|=Je),Fs(a)),l&&!u&&(js(a),fa(a))}if(ye!=null&&ye.has(e))return ye.get(e);if((e.f&Ft)!==0)throw e.v;return e.v}function fa(e){if(e.f|=Je,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&ge)!==0&&(t.f&Je)===0&&(js(t),fa(t))}function da(e){if(e.v===ue)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(_t.has(t)||(t.f&ge)!==0&&da(t))return!0;return!1}function mt(e){var t=it;try{return it=!0,e()}finally{it=t}}function Vt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(pt in e)gi(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&pt in n&&gi(n)}}}function gi(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{gi(e[r],t)}catch{}const n=Ti(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=ks(n);for(let i in r){const s=r[i].get;if(s)try{s.call(e)}catch{}}}}}function Xo(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Qo=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function el(e){return Qo.includes(e)}const tl={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function nl(e){return e=e.toLowerCase(),tl[e]??e}const rl=["touchstart","touchmove"];function il(e){return rl.includes(e)}const Kt=Symbol("events"),va=new Set,mi=new Set;function ha(e,t,n,r={}){function i(s){if(r.capture||bi.call(t,s),!s.cancelBubble)return Tn(()=>n==null?void 0:n.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ht(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function yi(e,t,n,r,i){var s={capture:r,passive:i},a=ha(e,t,n,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Kr(()=>{t.removeEventListener(e,a,s)})}function W(e,t,n){(t[Kt]??(t[Kt]={}))[e]=n}function nn(e){for(var t=0;t<e.length;t++)va.add(e[t]);for(var n of mi)n(e)}let ti=null,ni=!1;function bi(e){var g,m;var t=this,n=t.ownerDocument,r=e.type,i=((g=e.composedPath)==null?void 0:g.call(e))||[],s=i[0]||e.target;ti=e,ni||(ni=!0,setTimeout(()=>{ni=!1,ti=null}));var a=0,o=ti===e&&e[Kt];if(o){var l=i.indexOf(o);if(l!==-1&&(t===document||t===window)){e[Kt]=t;return}var u=i.indexOf(t);if(u===-1)return;l<=u&&(a=l)}if(s=i[a]||e.target,s!==t){$s(e,"currentTarget",{configurable:!0,get(){return s||n}});var v=H,p=V;Xe(null),Qe(null);try{for(var d,h=[];s!==null&&s!==t;){try{var _=(m=s[Kt])==null?void 0:m[r];_!=null&&(!s.disabled||e.target===s)&&_.call(s,e)}catch(S){d?h.push(S):d=S}if(e.cancelBubble)break;a++,s=a<i.length?i[a]:null}if(d){for(let S of h)queueMicrotask(()=>{throw S});throw d}}finally{e[Kt]=t,delete e.currentTarget,Xe(v),Qe(p)}}}var bs;const ri=((bs=globalThis==null?void 0:globalThis.window)==null?void 0:bs.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function sl(e){return(ri==null?void 0:ri.createHTML(e))??e}function pa(e){var t=Li("template");return t.innerHTML=sl(e.replaceAll("<!>","<!---->")),t.content}function Un(e,t){var n=V;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function U(e,t){var n=(t&io)!==0,r=(t&so)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=pa(s?e:"<!>"+e),n||(i=en(i)));var a=r||Ys?document.importNode(i,!0):i.cloneNode(!0);if(n){var o=en(a),l=a.lastChild;Un(o,l)}else Un(a,a);return a}}function al(e,t,n="svg"){var r=!e.startsWith("<!>"),i=`<${n}>${r?e:"<!>"+e}</${n}>`,s;return()=>{if(!s){var a=pa(i),o=en(a);s=en(o)}var l=s.cloneNode(!0);return Un(l,l),l}}function ol(e,t){return al(e,t,"svg")}function Q(){var e=document.createDocumentFragment(),t=document.createComment(""),n=Et();return e.append(t,n),Un(t,n),e}function k(e,t){e!==null&&e.before(t)}function ll(e){let t=0,n=xt(0),r;return()=>{Fi()&&(f(n),Ur(()=>(t===0&&(r=mt(()=>e(()=>Hn(n)))),t+=1,()=>{ht(()=>{t-=1,t===0&&(r==null||r(),r=void 0,Hn(n))})})))}}var cl=jt|En;function ul(e,t,n,r){new fl(e,t,n,r)}var Ge,Ci,Ye,Wt,Te,Fe,xe,je,ut,Gt,Dt,gn,Yn,Jn,St,jr,se,dl,vl,wi,hl,$i,Fn,Pr,ki,Si;class fl{constructor(t,n,r,i){O(this,se);Ce(this,"parent");Ce(this,"is_pending",!1);Ce(this,"transform_error");O(this,Ge);O(this,Ci,null);O(this,Ye);O(this,Wt);O(this,Te);O(this,Fe,null);O(this,xe,null);O(this,je,null);O(this,ut,null);O(this,Gt,0);O(this,Dt,0);O(this,gn,!1);O(this,Yn,new Set);O(this,Jn,new Set);O(this,St,null);O(this,jr,ll(()=>(L(this,St,xt(c(this,Gt))),()=>{L(this,St,null)})));var s;L(this,Ge,t),L(this,Ye,n),L(this,Wt,a=>{var o=V;o.b=this,o.f|=ui,r(a)}),this.parent=V.b,this.transform_error=i??((s=this.parent)==null?void 0:s.transform_error)??(a=>a),L(this,Te,yr(()=>{q(this,se,$i).call(this)},cl))}defer_effect(t){Rs(t,c(this,Yn),c(this,Jn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!c(this,Ye).pending}update_pending_count(t,n){q(this,se,ki).call(this,t,n),L(this,Gt,c(this,Gt)+t),!(!c(this,St)||c(this,gn))&&(L(this,gn,!0),ht(()=>{L(this,gn,!1),c(this,St)&&wn(c(this,St),c(this,Gt))}))}get_effect_pending(){return c(this,jr).call(this),f(c(this,St))}error(t){if(!c(this,Ye).onerror&&!c(this,Ye).failed)throw t;z!=null&&z.is_fork?(c(this,Fe)&&z.skip_effect(c(this,Fe)),c(this,xe)&&z.skip_effect(c(this,xe)),c(this,je)&&z.skip_effect(c(this,je)),z.oncommit(()=>{q(this,se,Si).call(this,t)})):q(this,se,Si).call(this,t)}}Ge=new WeakMap,Ci=new WeakMap,Ye=new WeakMap,Wt=new WeakMap,Te=new WeakMap,Fe=new WeakMap,xe=new WeakMap,je=new WeakMap,ut=new WeakMap,Gt=new WeakMap,Dt=new WeakMap,gn=new WeakMap,Yn=new WeakMap,Jn=new WeakMap,St=new WeakMap,jr=new WeakMap,se=new WeakSet,dl=function(){try{L(this,Fe,Oe(()=>c(this,Wt).call(this,c(this,Ge))))}catch(t){this.error(t)}},vl=function(t){const n=c(this,Ye).failed,{reset:r,invoke_onerror:i}=q(this,se,wi).call(this,t);ht(i),n&&L(this,je,Oe(()=>{n(c(this,Ge),()=>t,()=>r)}))},wi=function(t){var n=!1,r=!1;const i=()=>{if(n){uo();return}n=!0,r&&ko(),c(this,je)!==null&&Jt(c(this,je),()=>{L(this,je,null)}),q(this,se,Pr).call(this,()=>{q(this,se,$i).call(this)})};return{reset:i,invoke_onerror:()=>{var a,o;try{r=!0,(o=(a=c(this,Ye)).onerror)==null||o.call(a,t,i),r=!1}catch(l){dt(l,c(this,Te)&&c(this,Te).parent)}}}},hl=function(){const t=c(this,Ye).pending;t&&(this.is_pending=!0,L(this,xe,Oe(()=>t(c(this,Ge)))),ht(()=>{var n=L(this,ut,document.createDocumentFragment()),r=Et(),i=!1;if(n.append(r),L(this,Fe,q(this,se,Pr).call(this,()=>{try{return Oe(()=>c(this,Wt).call(this,r))}catch(s){try{this.error(s),i=!0}catch(a){dt(a,c(this,Te).parent)}return null}})),c(this,Fe)===null){L(this,ut,null),i&&q(this,se,Fn).call(this,z);return}c(this,Dt)===0&&(c(this,Ge).before(n),L(this,ut,null),Jt(c(this,xe),()=>{L(this,xe,null)}),q(this,se,Fn).call(this,z))}))},$i=function(){try{if(this.is_pending=this.has_pending_snippet(),L(this,Dt,0),L(this,Gt,0),L(this,Fe,Oe(()=>{c(this,Wt).call(this,c(this,Ge))})),c(this,Dt)>0){var t=L(this,ut,document.createDocumentFragment());Vi(c(this,Fe),t);const n=c(this,Ye).pending;L(this,xe,Oe(()=>n(c(this,Ge))))}else q(this,se,Fn).call(this,z)}catch(n){this.error(n)}},Fn=function(t){this.is_pending=!1,t.transfer_effects(c(this,Yn),c(this,Jn))},Pr=function(t){var n=V,r=H,i=ae;Qe(c(this,Te)),Xe(c(this,Te)),yn(c(this,Te).ctx);try{return Qt.ensure(),t()}finally{Qe(n),Xe(r),yn(i)}},ki=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&q(r=this.parent,se,ki).call(r,t,n);return}L(this,Dt,c(this,Dt)+t),c(this,Dt)===0&&(q(this,se,Fn).call(this,n),c(this,xe)&&Jt(c(this,xe),()=>{L(this,xe,null)}),c(this,ut)&&(c(this,Ge).before(c(this,ut)),L(this,ut,null)))},Si=function(t){c(this,Fe)&&($e(c(this,Fe)),L(this,Fe,null)),c(this,xe)&&($e(c(this,xe)),L(this,xe,null)),c(this,je)&&($e(c(this,je)),L(this,je,null));let n=c(this,Ye).failed;const r=i=>{const{reset:s,invoke_onerror:a}=q(this,se,wi).call(this,i);a(),n&&L(this,je,q(this,se,Pr).call(this,()=>{try{return Oe(()=>{var o=V;o.b=this,o.f|=ui,n(c(this,Ge),()=>i,()=>s)})}catch(o){return dt(o,c(this,Te).parent),null}}))};ht(()=>{var i;try{i=this.transform_error(t)}catch(s){dt(s,c(this,Te)&&c(this,Te).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(r,s=>dt(s,c(this,Te)&&c(this,Te).parent)):r(i)})};function ce(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[zn]??(e[zn]=e.nodeValue))&&(e[zn]=n,e.nodeValue=`${n}`)}function pl(e,t){return _l(e,t)}const Cr=new Map;function _l(e,{target:t,anchor:n,props:r={},events:i,context:s,intro:a=!0,transformError:o}){jo();var l=void 0,u=qo(()=>{var v=n??t.appendChild(Et());ul(v,{pending:()=>{}},h=>{Pt({});var _=ae;s&&(_.c=s),i&&(r.$$events=i),l=e(h,r)||Pi(),Mt()},o);var p=new Set,d=h=>{for(var _=0;_<h.length;_++){var g=h[_];if(!p.has(g)){p.add(g);var m=il(g);for(const T of[t,document]){var S=Cr.get(T);S===void 0&&(S=new Map,Cr.set(T,S));var R=S.get(g);R===void 0?(T.addEventListener(g,bi,{passive:m}),S.set(g,1)):S.set(g,R+1)}}}};return d(Hr(va)),mi.add(d),()=>{var m;for(var h of p)for(const S of[t,document]){var _=Cr.get(S),g=_.get(h);--g==0?(S.removeEventListener(h,bi),_.delete(h),_.size===0&&Cr.delete(S)):_.set(h,g)}mi.delete(d),v!==n&&((m=v.parentNode)==null||m.removeChild(v))}});return gl.set(l,u),l}let gl=new WeakMap;var nt,ft,Ve,Yt,Zn,Xn,Vr;class Bi{constructor(t,n=!0){Ce(this,"anchor");O(this,nt,new Map);O(this,ft,new Map);O(this,Ve,new Map);O(this,Yt,new Set);O(this,Zn,!0);O(this,Xn,t=>{if(c(this,nt).has(t)){var n=c(this,nt).get(t),r=c(this,ft).get(n);if(r)Lr(r),c(this,Yt).delete(n);else{var i=c(this,Ve).get(n);i&&(Lr(i.effect),c(this,ft).set(n,i.effect),c(this,Ve).delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(const[s,a]of c(this,nt)){if(c(this,nt).delete(s),s===t)break;const o=c(this,Ve).get(a);o&&($e(o.effect),c(this,Ve).delete(a))}for(const[s,a]of c(this,ft)){if(s===n||c(this,Yt).has(s))continue;const o=()=>{if(Array.from(c(this,nt).values()).includes(s)){var u=document.createDocumentFragment();Vi(a,u),u.append(Et()),c(this,Ve).set(s,{effect:a,fragment:u})}else $e(a);c(this,Yt).delete(s),c(this,ft).delete(s)};c(this,Zn)||!r?(c(this,Yt).add(s),Jt(a,o,!1)):o()}}});O(this,Vr,t=>{c(this,nt).delete(t);const n=Array.from(c(this,nt).values());for(const[r,i]of c(this,Ve))n.includes(r)||($e(i.effect),c(this,Ve).delete(r))});this.anchor=t,L(this,Zn,n)}ensure(t,n){var r=z,i=Xs();if(n&&!c(this,ft).has(t)&&!c(this,Ve).has(t))if(i){var s=document.createDocumentFragment(),a=Et();s.append(a),c(this,Ve).set(t,{effect:Oe(()=>n(a)),fragment:s})}else c(this,ft).set(t,Oe(()=>n(this.anchor)));if(c(this,nt).set(r,t),i){for(const[o,l]of c(this,ft))o===t?r.unskip_effect(l):r.skip_effect(l);for(const[o,l]of c(this,Ve))o===t?r.unskip_effect(l.effect):r.skip_effect(l.effect);r.oncommit(c(this,Xn)),r.ondiscard(c(this,Vr))}else c(this,Xn).call(this,r)}}nt=new WeakMap,ft=new WeakMap,Ve=new WeakMap,Yt=new WeakMap,Zn=new WeakMap,Xn=new WeakMap,Vr=new WeakMap;function le(e,t,n=!1){var r=new Bi(e),i=n?jt:0;function s(a,o){r.ensure(a,o)}yr(()=>{var a=!1;t((o,l=0)=>{a=!0,s(l,o)}),a||s(-1,null)},i)}function ml(e,t){return t}function yl(e,t,n){for(var r=[],i=t.length,s,a=t.length,o=0;o<i;o++){let p=t[o];Jt(p,()=>{if(s){if(s.pending.delete(p),s.done.add(p),s.pending.size===0){var d=e.outrogroups;Ei(e,Hr(s.done)),d.delete(s),d.size===0&&(e.outrogroups=null)}}else a-=1},!1)}if(a===0){var l=r.length===0&&n!==null&&e.pending.size===0;if(l){var u=n,v=u.parentNode;Vo(v),v.append(u),e.items.clear()}Ei(e,t,!l)}else s={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(s)}function Ei(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const a of e.pending.values())for(const o of a)r.add(e.items.get(o).e)}for(var i=0;i<t.length;i++){var s=t[i];if(r!=null&&r.has(s)){s.f|=vt;const a=document.createDocumentFragment();Vi(s,a)}else $e(t[i],n)}}var os;function At(e,t,n,r,i,s=null){var a=e,o=new Map,l=(t&xs)!==0;if(l){var u=e;a=u.appendChild(Et())}var v=null,p=Oi(()=>{var T=n();return Br(T)?T:T==null?[]:Hr(T)}),d,h=new Map,_=!0;function g(T){(R.effect.f&Re)===0&&(R.pending.delete(T),R.fallback=v,bl(R,d,a,t,r),v!==null&&(d.length===0?(v.f&vt)===0?Lr(v):(v.f^=vt,jn(v,null,a)):Jt(v,()=>{v=null})))}function m(T){R.pending.delete(T)}var S=yr(()=>{d=f(p);for(var T=d.length,K=new Set,C=z,b=Xs(),P=0;P<T;P+=1){var Y=d[P],M=r(Y,P),x=_?null:o.get(M);x?(x.v&&wn(x.v,Y),x.i&&wn(x.i,P),b&&C.unskip_effect(x.e)):(x=wl(o,_?a:os??(os=Et()),Y,M,P,i,t,n),_||(x.e.f|=vt),o.set(M,x)),K.add(M)}if(T===0&&s&&!v&&(_?v=Oe(()=>s(a)):(v=Oe(()=>s(os??(os=Et()))),v.f|=vt)),T>K.size&&ho(),!_)if(h.set(C,K),b){for(const[B,ee]of o)K.has(B)||C.skip_effect(ee.e);C.oncommit(g),C.ondiscard(m)}else g(C);f(p)}),R={effect:S,items:o,pending:h,outrogroups:null,fallback:v};_=!1}function Mn(e){for(;e!==null&&(e.f&Ze)===0;)e=e.next;return e}function bl(e,t,n,r,i){var x,B,ee,Se,Ee,Ke,A,j,E;var s=(r&Xa)!==0,a=t.length,o=e.items,l=Mn(e.effect.first),u,v=null,p,d=[],h=[],_,g,m,S;if(s)for(S=0;S<a;S+=1)_=t[S],g=i(_,S),m=o.get(g).e,(m.f&vt)===0&&((B=(x=m.nodes)==null?void 0:x.a)==null||B.measure(),(p??(p=new Set)).add(m));for(S=0;S<a;S+=1){if(_=t[S],g=i(_,S),m=o.get(g).e,e.outrogroups!==null)for(const F of e.outrogroups)F.pending.delete(m),F.done.delete(m);if((m.f&Ne)!==0&&(Lr(m),s&&((Se=(ee=m.nodes)==null?void 0:ee.a)==null||Se.unfix(),(p??(p=new Set)).delete(m))),(m.f&vt)!==0)if(m.f^=vt,m===l)jn(m,null,n);else{var R=v?v.next:l;m===e.effect.last&&(e.effect.last=m.prev),m.prev&&(m.prev.next=m.next),m.next&&(m.next.prev=m.prev),zt(e,v,m),zt(e,m,R),jn(m,R,n),v=m,d=[],h=[],l=Mn(v.next);continue}if(m!==l){if(u!==void 0&&u.has(m)){if(d.length<h.length){var T=h[0],K;v=T.prev;var C=d[0],b=d[d.length-1];for(K=0;K<d.length;K+=1)jn(d[K],T,n);for(K=0;K<h.length;K+=1)u.delete(h[K]);zt(e,C.prev,b.next),zt(e,v,C),zt(e,b,T),l=T,v=b,S-=1,d=[],h=[]}else u.delete(m),jn(m,l,n),zt(e,m.prev,m.next),zt(e,m,v===null?e.effect.first:v.next),zt(e,v,m),v=m;continue}for(d=[],h=[];l!==null&&l!==m;)(u??(u=new Set)).add(l),h.push(l),l=Mn(l.next);if(l===null)continue}(m.f&vt)===0&&d.push(m),v=m,l=Mn(m.next)}if(e.outrogroups!==null){for(const F of e.outrogroups)F.pending.size===0&&(Ei(e,Hr(F.done)),(Ee=e.outrogroups)==null||Ee.delete(F));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||u!==void 0){var P=[];if(u!==void 0)for(m of u)(m.f&Ne)===0&&P.push(m);for(;l!==null;)(l.f&Ne)===0&&l!==e.fallback&&P.push(l),l=Mn(l.next);var Y=P.length;if(Y>0){var M=(r&xs)!==0&&a===0?n:null;if(s){for(S=0;S<Y;S+=1)(A=(Ke=P[S].nodes)==null?void 0:Ke.a)==null||A.measure();for(S=0;S<Y;S+=1)(E=(j=P[S].nodes)==null?void 0:j.a)==null||E.fix()}yl(e,P,M)}}s&&ht(()=>{var F,J;if(p!==void 0)for(m of p)(J=(F=m.nodes)==null?void 0:F.a)==null||J.apply()})}function wl(e,t,n,r,i,s,a,o){var l=(a&Ja)!==0?(a&Qa)===0?Lo(n,!1,!1):xt(n):null,u=(a&Za)!==0?xt(i):null;return{v:l,i:u,e:Oe(()=>(s(t,l??n,u??i,o),()=>{e.delete(r)}))}}function jn(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,s=t&&(t.f&vt)===0?t.nodes.start:n;r!==null;){var a=mr(r);if(s.before(r),r===i)return;r=a}}function zt(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function ne(e,t,n,r,i){var o,l;if((o=t.$$host)!=null&&o.$$shadowRoot){const u=Li("slot");k(e,u);return}var s=(l=t.$$slots)==null?void 0:l[n],a=!1;s===!0&&(s=t.children,a=!0),s===void 0||s(e,a?()=>r:r)}function $l(e,t,n){var r=new Bi(e);yr(()=>{var i=t()??null;r.ensure(i,i&&(s=>n(s,i)))},jt)}function kl(e,t,n,r,i,s){var a=null,o=e,l=new Bi(o,!1);yr(()=>{const u=t()||null;var v=ao;if(u===null){l.ensure(null,null);return}return l.ensure(u,p=>{if(u){if(a=Li(u,v),Un(a,a),r){var d=null,h=a.appendChild(Et());r(a,h),d==null||d.remove()}V.nodes.end=a,p.before(a)}}),()=>{}},jt),Kr(()=>{})}function Sl(e,t){var n=void 0,r;ta(()=>{n!==(n=t())&&(r&&($e(r),r=null),n&&(r=Oe(()=>{qr(()=>n(e))})))})}function _a(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=_a(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function El(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=_a(e))&&(r&&(r+=" "),r+=t);return r}function Cl(e){return typeof e=="object"?El(e):e??""}const ls=[...` 	
\r\f \v\uFEFF`];function Tl(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var i of Object.keys(n))if(n[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,a=0;(a=r.indexOf(i,a))>=0;){var o=a+s;(a===0||ls.includes(r[a-1]))&&(o===r.length||ls.includes(r[o]))?r=(a===0?"":r.substring(0,a))+r.substring(o+1):a=o}}return r===""?null:r}function cs(e,t=!1){var n=t?" !important;":";",r="";for(var i of Object.keys(e)){var s=e[i];s!=null&&s!==""&&(r+=" "+i+": "+s+n)}return r}function ii(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function xl(e,t){if(t){var n="",r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var s=!1,a=0,o=!1,l=[];r&&l.push(...Object.keys(r).map(ii)),i&&l.push(...Object.keys(i).map(ii));var u=0,v=-1;const g=e.length;for(var p=0;p<g;p++){var d=e[p];if(o?d==="/"&&e[p-1]==="*"&&(o=!1):s?s===d&&(s=!1):d==="/"&&e[p+1]==="*"?o=!0:d==='"'||d==="'"?s=d:d==="("?a++:d===")"&&a--,!o&&s===!1&&a===0){if(d===":"&&v===-1)v=p;else if(d===";"||p===g-1){if(v!==-1){var h=ii(e.substring(u,v).trim());if(!l.includes(h)){d!==";"&&p++;var _=e.substring(u,p).trim();n+=" "+_+";"}}u=p+1,v=-1}}}}return r&&(n+=cs(r)),i&&(n+=cs(i,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Ct(e,t,n,r,i,s){var a=e[fi];if(a!==n||a===void 0){var o=Tl(n,r,s);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[fi]=n}else if(s&&i!==s)for(var l in s){var u=!!s[l];(i==null||u!==!!i[l])&&e.classList.toggle(l,u)}return s}function si(e,t={},n,r){for(var i in n){var s=n[i];t[i]!==s&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function Nl(e,t,n,r){var i=e[di];if(i!==t){var s=xl(t,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e[di]=t}else r&&(Array.isArray(r)?(si(e,n==null?void 0:n[0],r[0]),si(e,n==null?void 0:n[1],r[1],"important")):si(e,n,r));return r}function ga(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function us(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,ma(e,!n||"__value"in e))}function ma(e,t){var n=e.__defaultValue,r=e.multiple,i=r?n??[]:null;if(!(r&&!Br(i))){var s=e.selectedIndex,a=t&&r?new Set(e.selectedOptions):null;for(var o of e.options){var l=un(o);ga(o,r?i.includes(l):Gs(l,n))}if(t)if(a!==null)for(o of e.options){var u=a.has(o);o.selected!==u&&(o.selected=u)}else e.selectedIndex!==s&&(e.selectedIndex=s)}}function kn(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Br(t))return co();for(var r of e.options)r.selected=t.includes(un(r));return}for(r of e.options){var i=un(r);if(Gs(i,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Wn(e){var t=new MutationObserver(n=>{n.every(Al)||("__defaultValue"in e&&ma(e,!1),"__value"in e&&kn(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Kr(()=>{t.disconnect()})}function ya(e,t,n=t){var r=new WeakSet,i=!0;Ii(e,"change",s=>{var a=s?"[selected]":":checked",o;if(e.multiple)o=[].map.call(e.querySelectorAll(a),un);else{var l=e.querySelector(a)??e.querySelector("option:not([disabled])");o=l&&un(l)}n(o),e.__value=o,z!==null&&r.add(z)}),qr(()=>{var s=t();if(e===document.activeElement){var a=z;if(r.has(a))return}if(kn(e,s,i),i&&s===void 0){var o=e.querySelector(":checked");o!==null&&(s=un(o),n(s))}e.__value=s,i=!1})}function un(e){return"__value"in e?e.__value:e.value}function Al(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const In=Symbol("class"),On=Symbol("style"),ba=Symbol("is custom element"),wa=Symbol("is html"),Pl=Ai?"input":"INPUT",Ml=Ai?"option":"OPTION",$a=Ai?"select":"SELECT";function st(e,t,n,r){var i=ka(e);i[t]!==(i[t]=n)&&(t==="loading"&&(e[Ya]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Sa(e).has(t)?e[t]=n:e.setAttribute(t,n))}function Il(e,t,n,r,i=!1,s=!1){var a=ka(e),o=a[ba],l=!a[wa],u=t||{},v=e.nodeName===Ml,p=e.nodeName===$a;for(var d in t)!(d in n)&&d[0]+d[1]!=="$$"&&(n[d]=null);n.class?n.class=Cl(n.class):n[In]&&(n.class=null),n[On]&&(n.style??(n.style=null));var h=Sa(e);if(e.nodeName===Pl&&"type"in n&&("value"in n||"__value"in n)){var _=n.type;(_!==u.type||_===void 0&&e.hasAttribute("type"))&&(u.type=_,st(e,"type",_))}for(const C in n){let b=n[C];if(v&&C==="value"&&b==null){e.value=e.__value="",u[C]=b;continue}if(C==="class"){var g=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ct(e,g,b,r,t==null?void 0:t[In],n[In]),u[C]=b,u[In]=n[In];continue}if(C==="style"){Nl(e,b,t==null?void 0:t[On],n[On]),u[C]=b,u[On]=n[On];continue}var m=u[C];if(!(b===m&&!(b===void 0&&e.hasAttribute(C)))){u[C]=b;var S=C[0]+C[1];if(S!=="$$")if(S==="on"){const P={},Y="$$"+C;let M=C.slice(2);var R=el(M);if(Xo(M)&&(M=M.slice(0,-7),P.capture=!0),!R&&m){if(b!=null)continue;e.removeEventListener(M,u[Y],P),u[Y]=null}if(R)W(M,e,b),nn([M]);else if(b!=null){let x=function(B){u[C].call(this,B)};u[Y]=ha(M,e,x,P)}}else if(C==="style")st(e,C,b);else if(C==="autofocus")xo(e,!!b);else if(!o&&(C==="__value"||C==="value"&&b!=null))e.value=e.__value=b;else if(C==="selected"&&v)ga(e,b);else{var T=C;l||(T=nl(T));var K=T==="defaultValue"||T==="defaultChecked";if(p&&T==="defaultValue")continue;if(b==null&&!o&&!K)if(a[C]=null,T==="value"||T==="checked"){let P=e;const Y=t===void 0;if(T==="value"){let M=P.defaultValue;P.removeAttribute(T),P.defaultValue=M,P.value=P.__value=Y?M:null}else{let M=P.defaultChecked;P.removeAttribute(T),P.defaultChecked=M,P.checked=Y?M:!1}}else e.removeAttribute(C);else K||(o||typeof b!="string")&&h.has(T)?(e[T]=b,T in a&&(a[T]=ue)):typeof b!="function"&&st(e,T,b)}}}return u}function fs(e,t,n=[],r=[],i=[],s,a=!1,o=!1){Ds(i,n,r,l=>{var u=void 0,v={},p=e.nodeName===$a,d=!1;if(ta(()=>{var _=t(...l.map(f)),g=Il(e,u,_,s,a,o);if(d&&p){var m=e;"defaultValue"in _&&us(m,_.defaultValue),"value"in _&&kn(m,_.value)}for(let R of Object.getOwnPropertySymbols(v))_[R]||$e(v[R]);for(let R of Object.getOwnPropertySymbols(_)){var S=_[R];R.description===oo&&(!u||S!==u[R])&&(v[R]&&$e(v[R]),v[R]=Oe(()=>Sl(e,()=>S))),g[R]=S}u=g}),p){var h=e;qr(()=>{var _=u;"defaultValue"in _&&us(h,_.defaultValue),kn(h,_.value,!0),Wn(h)})}d=!0})}function ka(e){return e[Tr]??(e[Tr]={[ba]:e.nodeName.includes("-"),[wa]:e.namespaceURI===As})}var ds=new Map;function Sa(e){var t=e.getAttribute("is")||e.nodeName,n=ds.get(t);if(n)return n;ds.set(t,n=new Set);for(var r,i=e,s=Element.prototype;s!==i;){r=ks(i);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&n.add(a);i=Ti(i)}return n}function Ie(e,t,n=t){var r=new WeakSet;Ii(e,"input",async i=>{var s=i?e.defaultValue:e.value;if(s=ai(e)?oi(s):s,n(s),z!==null&&r.add(z),await Zo(),s!==(s=t())){var a=e.selectionStart,o=e.selectionEnd,l=e.value.length;if(e.value=s??"",o!==null){var u=e.value.length;a===o&&o===l&&u>l?(e.selectionStart=u,e.selectionEnd=u):(e.selectionStart=a,e.selectionEnd=Math.min(o,u))}}}),mt(t)==null&&e.value&&(n(ai(e)?oi(e.value):e.value),z!==null&&r.add(z)),Ur(()=>{var i=t();if(e===document.activeElement){var s=z;if(r.has(s))return}ai(e)&&i===oi(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function Ol(e,t,n=t){Ii(e,"change",r=>{var i=r?e.defaultChecked:e.checked;n(i)}),mt(t)==null&&n(e.checked),Ur(()=>{var r=t();e.checked=!!r})}function ai(e){var t=e.type;return t==="number"||t==="range"}function oi(e){return e===""?null:+e}function li(e,t){return e===t||(e==null?void 0:e[pt])===t}function Hi(e=Pi(),t,n,r){var i=ae.r,s=V;return qr(()=>{var a,o;return Ur(()=>{a=o,o=[],mt(()=>{li(n(...o),e)||(t(e,...o),a&&li(n(...a),e)&&t(null,...a))})}),()=>{let l=s;for(;l!==i&&l.parent!==null&&l.parent.f&Ir;)l=l.parent;const u=()=>{o&&li(n(...o),e)&&t(null,...o)},v=l.teardown;l.teardown=()=>{u(),v==null||v()}}}),e}function Ea(e=!1){const t=ae,n=t.l.u;if(!n)return;let r=()=>Vt(t.s);if(e){let i=0,s={};const a=bn(()=>{let o=!1;const l=t.s;for(const u in l)l[u]!==s[u]&&(s[u]=l[u],o=!0);return o&&i++,i});r=()=>f(a)}n.b.length&&Ko(()=>{vs(t,r),ci(n.b)}),tn(()=>{const i=mt(()=>n.m.map(Ua));return()=>{for(const s of i)typeof s=="function"&&s()}}),n.a.length&&tn(()=>{vs(t,r),ci(n.a)})}function vs(e,t){if(e.l.s)for(const n of e.l.s)f(n);t()}function zl(e){var t=xt(0);return function(){return arguments.length===1?($(t,f(t)+1),arguments[0]):(f(t),e())}}const Rl={get(e,t){if(!e.exclude.includes(t))return f(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=V;try{Qe(e.parent_effect),e.special[t]=He({get[t](){return e.props[t]}},t,Ns)}finally{Qe(r)}}return e.special[t](n),ns(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),ns(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function X(e,t){return new Proxy({props:e,exclude:t,special:{},version:xt(0),parent_effect:V},Rl)}const Dl={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Pn(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let i=e.props[r];Pn(i)&&(i=i());const s=Lt(i,t);if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Pn(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const i=Lt(r,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===pt||t===Ts)return!1;for(let n of e.props)if(Pn(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(Pn(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function re(...e){return new Proxy({props:e},Dl)}function He(e,t,n,r){var K;var i=!Cn||(n&to)!==0,s=(n&no)!==0,a=(n&ro)!==0,o=r,l=!0,u=void 0,v=()=>a&&i?(u??(u=bn(r)),f(u)):(l&&(l=!1,o=a?mt(r):r),o);let p;if(s){var d=pt in e||Ts in e;p=((K=Lt(e,t))==null?void 0:K.set)??(d&&t in e?C=>e[t]=C:void 0)}var h,_=!1;s?[h,_]=To(()=>e[t]):h=e[t],h===void 0&&r!==void 0&&(h=v(),p&&(i&&yo(),p(h)));var g;if(i?g=()=>{var C=e[t];return C===void 0?v():(l=!0,C)}:g=()=>{var C=e[t];return C!==void 0&&(o=void 0),C===void 0?o:C},i&&(n&Ns)===0)return g;if(p){var m=e.$$legacy;return(function(C,b){return arguments.length>0?((!i||!b||m||_)&&p(b?g():C),C):g()})}var S=!1,R=((n&eo)!==0?bn:Oi)(()=>(S=!1,g()));s&&f(R);var T=V;return(function(C,b){if(arguments.length>0){const P=b?f(R):i&&s?be(C):C;return $(R,P),S=!0,o!==void 0&&(o=P),C}return Nt&&S||(T.f&Re)!==0?R.v:f(R)})}function Ki(e){ae===null&&Is(),Cn&&ae.l!==null?Ll(ae).m.push(e):tn(()=>{const t=mt(e);if(typeof t=="function")return t})}function Ca(e){ae===null&&Is(),Ki(()=>()=>mt(e))}function Ll(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Fl="5";var ws;typeof window<"u"&&((ws=window.__svelte??(window.__svelte={})).v??(ws.v=new Set)).add(Fl);const Ta=()=>window.__IDE_BOOTSTRAP__||{};function jl(e){const{rootPath:t="",session:n=""}=Ta();return`${t}/api/sessions/${encodeURIComponent(n)}/ide${e}`}async function Pe(e,t={}){const n=await fetch(jl(e),t),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Request failed");return r}const Ue=(e,t)=>`/ssh-connections/${encodeURIComponent(e)}${t}`,_e={chat:async(e,t=80)=>{const{rootPath:n=""}=Ta(),r=`${n}/api/sessions/${encodeURIComponent(e)}/ide/chat?limit=${t}`,i=await fetch(r),s=await i.json().catch(()=>({}));if(!i.ok)throw new Error(s.error||"Could not load chat");return s},listConnections:()=>Pe("/ssh-connections"),createConnection:e=>Pe("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),deleteConnection:e=>Pe(Ue(e,""),{method:"DELETE"}),connect:(e,t)=>Pe(Ue(e,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t||""})}),status:e=>Pe(Ue(e,"/status?reconnect=1")),listFiles:(e,t)=>Pe(Ue(e,`/files?path=${encodeURIComponent(t)}`)),searchFiles:(e,t,n)=>Pe(Ue(e,`/files/search?path=${encodeURIComponent(t)}&query=${encodeURIComponent(n)}`)),readFile:(e,t)=>Pe(Ue(e,`/file?path=${encodeURIComponent(t)}`)),saveFile:(e,t,n)=>Pe(Ue(e,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t,content:n})}),fs:(e,t)=>Pe(Ue(e,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),git:(e,t)=>Pe(Ue(e,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),focusTerminal:e=>Pe(Ue(e,"/focus-terminal"),{method:"POST"}),getWorkspace:e=>Pe(Ue(e,"/workspace")),saveWorkspace:(e,t)=>Pe(Ue(e,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})};var Qn,er,tr,nr,rr,ir,sr,ar,or,lr,cr,ur,fr,dr,vr,hr;class Vl{constructor(){O(this,Qn,D(be([])));O(this,er,D(""));O(this,tr,D("idle"));O(this,nr,D("Ready"));O(this,rr,D("No file open"));O(this,ir,D("."));O(this,sr,D(be([])));O(this,ar,D(be({})));O(this,or,D(be({})));O(this,lr,D(""));O(this,cr,D(be([])));O(this,ur,D(""));O(this,fr,D(""));O(this,dr,D(""));O(this,vr,D(be([])));O(this,hr,D(""));Ce(this,"restoredKey","");Ce(this,"persistTimer",null)}get connections(){return f(c(this,Qn))}set connections(t){$(c(this,Qn),t,!0)}get connectionId(){return f(c(this,er))}set connectionId(t){$(c(this,er),t,!0)}get connectionState(){return f(c(this,tr))}set connectionState(t){$(c(this,tr),t,!0)}get statusText(){return f(c(this,nr))}set statusText(t){$(c(this,nr),t,!0)}get detailText(){return f(c(this,rr))}set detailText(t){$(c(this,rr),t,!0)}get path(){return f(c(this,ir))}set path(t){$(c(this,ir),t,!0)}get entries(){return f(c(this,sr))}set entries(t){$(c(this,sr),t,!0)}get expanded(){return f(c(this,ar))}set expanded(t){$(c(this,ar),t,!0)}get treeChildren(){return f(c(this,or))}set treeChildren(t){$(c(this,or),t,!0)}get filter(){return f(c(this,lr))}set filter(t){$(c(this,lr),t,!0)}get tabs(){return f(c(this,cr))}set tabs(t){$(c(this,cr),t,!0)}get activeKey(){return f(c(this,ur))}set activeKey(t){$(c(this,ur),t,!0)}get gitOutput(){return f(c(this,fr))}set gitOutput(t){$(c(this,fr),t,!0)}get gitStatus(){return f(c(this,dr))}set gitStatus(t){$(c(this,dr),t,!0)}get gitBranches(){return f(c(this,vr))}set gitBranches(t){$(c(this,vr),t,!0)}get gitBranch(){return f(c(this,hr))}set gitBranch(t){$(c(this,hr),t,!0)}get connection(){return this.connections.find(t=>t.id===this.connectionId)||null}get activeTab(){return this.tabs.find(t=>t.key===this.activeKey)||null}get visibleEntries(){const t=this.filter.trim().toLowerCase();return t?this.entries.filter(n=>n.name.toLowerCase().includes(t)):this.entries}get dirtyCount(){return this.tabs.filter(t=>t.dirty).length}setStatus(t,n){this.statusText=t,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const t=await _e.listConnections();this.connections=t.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(t){this.setStatus(t.message||"Could not load connections")}}async refreshStatus(){var t,n,r;if(this.connectionId)try{const i=await _e.status(this.connectionId);i.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((t=this.connection)==null?void 0:t.label)||"SSH workspace"}`,`SSH terminal: ${i.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(i){this.connectionState="error",this.setStatus(i.message||"Could not check SSH connection")}}async connect(t){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await _e.connect(this.connectionId,t);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect")}}}async refreshFiles(t){if(!this.connectionId)return;const n=t||this.path||".";try{const r=await _e.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async toggleDirectory(t){if(this.expanded[t]){const n={...this.expanded};delete n[t],this.expanded=n;return}if(this.expanded={...this.expanded,[t]:!0},!this.treeChildren[t])try{const n=await _e.listFiles(this.connectionId,t);this.treeChildren={...this.treeChildren,[t]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}async openFile(t){if(!this.connectionId)return null;const n=`${this.connectionId}|${t}`,r=this.tabs.find(i=>i.key===n);if(r)return this.activeKey=n,r;try{const i=await _e.readFile(this.connectionId,t),s={key:`${this.connectionId}|${i.path}`,path:i.path,content:i.content||"",saved:i.content||"",dirty:!1};return this.tabs=[...this.tabs,s],this.activeKey=s.key,this.setStatus("Opened",s.path),this.remember(),s}catch(i){return this.setStatus(i.message||"Could not open remote file"),null}}updateContent(t,n){this.tabs=this.tabs.map(r=>r.key===t?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(t){var r;const n=this.tabs.find(i=>i.key===t);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(i=>i.key!==t),this.activeKey===t&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const t=this.activeTab;if(t)try{await _e.saveFile(this.connectionId,t.path,t.content),this.tabs=this.tabs.map(n=>n.key===t.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${t.path}`,t.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const t=`${this.connectionId}`;if(!t)return;let n=null;try{n=await _e.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===t)return;this.restoredKey=t;const r=(n==null?void 0:n.buffers)||{};for(const s of((n==null?void 0:n.tabs)||[]).slice(0,12)){const a=await this.openFile(s);a&&Object.prototype.hasOwnProperty.call(r,s)&&this.updateContent(a.key,r[s])}const i=this.tabs.find(s=>s.path===(n==null?void 0:n.active_path));i&&(this.activeKey=i.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const t={};for(const r of this.tabs)r.dirty&&(t[r.path]=r.content);try{await _e.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:t})}catch{}}async runGit(t,n={}){try{const r=await _e.git(this.connectionId,{action:t,path:this.path||".",...n});return this.gitOutput=r.output||r.status||"",this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",r}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}Qn=new WeakMap,er=new WeakMap,tr=new WeakMap,nr=new WeakMap,rr=new WeakMap,ir=new WeakMap,sr=new WeakMap,ar=new WeakMap,or=new WeakMap,lr=new WeakMap,cr=new WeakMap,ur=new WeakMap,fr=new WeakMap,dr=new WeakMap,vr=new WeakMap,hr=new WeakMap;const y=new Vl;So();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Bl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Hl=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const hs=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var Kl=ol("<svg><!><!></svg>");function ie(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]),r=X(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Pt(t,!1);let i=He(t,"name",8,void 0),s=He(t,"color",8,"currentColor"),a=He(t,"size",8,24),o=He(t,"strokeWidth",8,2),l=He(t,"absoluteStrokeWidth",8,!1),u=He(t,"iconNode",24,()=>[]);Ea();var v=Kl();fs(v,(h,_,g)=>({...Bl,...h,...r,width:a(),height:a(),stroke:s(),"stroke-width":_,class:g}),[()=>Hl(r)?void 0:{"aria-hidden":"true"},()=>(Vt(l()),Vt(o()),Vt(a()),mt(()=>l()?Number(o())*24/Number(a()):o())),()=>(Vt(hs),Vt(i()),Vt(n),mt(()=>hs("lucide-icon","lucide",i()?`lucide-${i()}`:"",n.class)))]);var p=N(v);At(p,1,u,ml,(h,_)=>{var g=Kn(()=>Wa(f(_),2));let m=()=>f(g)[0],S=()=>f(g)[1];var R=Q(),T=G(R);kl(T,m,!0,(K,C)=>{fs(K,()=>({...S()}))}),k(h,R)});var d=w(p);ne(d,t,"default",{}),k(e,v),Mt()}function ql(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];ie(e,re({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function ps(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];ie(e,re({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function Ul(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ie(e,re({name:"circle-check"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function Wl(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];ie(e,re({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function Gl(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];ie(e,re({name:"circle"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function Yl(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];ie(e,re({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function Jl(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12.1",cy:"12.1",r:"1"}]];ie(e,re({name:"dot"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function Zl(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];ie(e,re({name:"file-diff"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function Xl(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M14 18h6"}]];ie(e,re({name:"file-minus-corner"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function _s(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M14 19h6"}],["path",{d:"M17 16v6"}]];ie(e,re({name:"file-plus-corner"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function Ql(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];ie(e,re({name:"file-plus"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function ec(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];ie(e,re({name:"file"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function tc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];ie(e,re({name:"files"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function nc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];ie(e,re({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function rc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];ie(e,re({name:"folder"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function ic(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]];ie(e,re({name:"git-branch-plus"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function sc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];ie(e,re({name:"git-branch"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function ac(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]];ie(e,re({name:"git-commit-vertical"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function oc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];ie(e,re({name:"link-2"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function lc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];ie(e,re({name:"loader"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function cc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];ie(e,re({name:"pencil"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function uc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ie(e,re({name:"plus"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function xa(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ie(e,re({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function fc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ie(e,re({name:"search"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function dc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];ie(e,re({name:"send"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function vc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];ie(e,re({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function Na(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ie(e,re({name:"trash-2"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}function hc(e,t){const n=X(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ie(e,re({name:"x"},()=>n,{get iconNode(){return r},children:(i,s)=>{var a=Q(),o=G(a);ne(o,t,"default",{}),k(i,a)},$$slots:{default:!0}}))}var pc=U('<form class="create svelte-15hitxw"><input class="svelte-15hitxw"/> <button type="submit" class="svelte-15hitxw">Add</button></form>'),_c=U('<li class="svelte-15hitxw"><button><span class="icon svelte-15hitxw"><!></span> <span class="name svelte-15hitxw"> </span></button> <span class="actions svelte-15hitxw"><button title="Rename" class="svelte-15hitxw"><!></button> <button title="Delete" class="svelte-15hitxw"><!></button></span></li>'),gc=U('<li class="empty svelte-15hitxw">No files here</li>'),mc=U('<div class="explorer svelte-15hitxw"><div class="toolbar svelte-15hitxw"><button title="Up one folder" aria-label="Up one folder" class="svelte-15hitxw"><!></button> <span class="path svelte-15hitxw"> </span> <button title="New file" aria-label="New file" class="svelte-15hitxw"><!></button> <button title="New folder" aria-label="New folder" class="svelte-15hitxw"><!></button> <button title="Refresh" aria-label="Refresh" class="svelte-15hitxw"><!></button></div> <input class="filter svelte-15hitxw" placeholder="Filter files…"/> <!> <ul class="entries svelte-15hitxw"></ul></div>');function yc(e,t){Pt(t,!0);let n=D(""),r=D("");const i=M=>{const x=(M||".").split("/").filter(B=>B&&B!==".");return x.pop(),x.length?x.join("/"):"."},s=(M,x)=>M==="."?x:`${M}/${x}`;async function a(M){M.preventDefault();const x=f(r).trim();if(x)try{await _e.fs(y.connectionId,{action:f(n)==="dir"?"create_dir":"create_file",path:s(y.path,x)}),$(n,""),$(r,""),await y.refreshFiles()}catch(B){y.setStatus(B.message||"Could not create")}}async function o(M){const x=s(y.path,M.name);if(confirm(`Delete ${x}? Folders must already be empty.`))try{await _e.fs(y.connectionId,{action:"delete",path:x}),await y.refreshFiles()}catch(B){y.setStatus(B.message||"Could not delete")}}async function l(M){const x=s(y.path,M.name),B=prompt("Rename to (relative path):",x);if(!(!B||B===x))try{await _e.fs(y.connectionId,{action:"rename",path:x,new_path:B}),await y.refreshFiles()}catch(ee){y.setStatus(ee.message||"Could not rename")}}var u=mc(),v=N(u),p=N(v),d=N(p);ql(d,{size:14});var h=w(p,2),_=we(h,!0),g=w(h,2),m=N(g);Ql(m,{size:14});var S=w(g,2),R=N(S);nc(R,{size:14});var T=w(S,2),K=N(T);xa(K,{size:14});var C=w(v,2),b=w(C,2);{var P=M=>{var x=pc(),B=N(x);ve(()=>st(B,"placeholder",f(n)==="dir"?"New folder name":"New file name")),yi("submit",x,a),W("keydown",B,ee=>{ee.key==="Escape"&&$(n,"")}),Ie(B,()=>f(r),ee=>$(r,ee)),k(M,x)};le(b,M=>{f(n)&&M(P)})}var Y=w(b,2);At(Y,21,()=>y.visibleEntries,M=>M.name,(M,x)=>{var B=_c(),ee=N(B);let Se;var Ee=N(ee),Ke=N(Ee);{var A=Ae=>{rc(Ae,{size:14})},j=Ae=>{oc(Ae,{size:14})},E=Ae=>{ec(Ae,{size:14})};le(Ke,Ae=>{f(x).is_dir?Ae(A):f(x).is_symlink?Ae(j,1):Ae(E,-1)})}var F=w(Ee,2),J=we(F,!0),ke=w(ee,2),me=N(ke),qe=N(me);cc(qe,{size:13});var yt=w(me,2),De=N(yt);Na(De,{size:13}),ve(()=>{Se=Ct(ee,1,"entry svelte-15hitxw",null,Se,{dir:f(x).is_dir}),ce(J,f(x).name),st(me,"aria-label",`Rename ${f(x).name??""}`),st(yt,"aria-label",`Delete ${f(x).name??""}`)}),W("dblclick",ee,()=>f(x).is_dir&&y.refreshFiles(s(y.path,f(x).name))),W("click",ee,()=>!f(x).is_dir&&y.openFile(s(y.path,f(x).name))),W("click",me,()=>l(f(x))),W("click",yt,()=>o(f(x))),k(M,B)},M=>{var x=gc();k(M,x)}),ve(()=>{st(h,"title",y.path),ce(_,y.path)}),W("click",p,()=>y.refreshFiles(i(y.path))),W("click",g,()=>{$(n,"file"),$(r,"")}),W("click",S,()=>{$(n,"dir"),$(r,"")}),W("click",T,()=>y.refreshFiles()),Ie(C,()=>y.filter,M=>y.filter=M),k(e,u),Mt()}nn(["click","keydown","dblclick"]);var bc=U('<div class="branch svelte-1skdisl">On <strong> </strong></div>'),wc=U('<li class="svelte-1skdisl"><label class="svelte-1skdisl"><input type="checkbox"/> <span> </span> <span class="file svelte-1skdisl"> </span></label></li>'),$c=U('<ul class="changes svelte-1skdisl"></ul> <div class="row svelte-1skdisl"><button class="svelte-1skdisl"><!> </button> <button class="svelte-1skdisl"><!> Unstage</button></div>',1),kc=U("<option> </option>"),Sc=U('<select class="svelte-1skdisl"></select>'),Ec=U('<div class="git svelte-1skdisl"><div class="row svelte-1skdisl"><button class="svelte-1skdisl"><!> Status</button> <button class="svelte-1skdisl"><!> Diff</button> <button class="svelte-1skdisl"><!> Stage all</button></div> <!> <!> <!> <div class="row svelte-1skdisl"><input placeholder="New branch…" class="svelte-1skdisl"/> <button class="svelte-1skdisl"><!> Create</button></div> <div class="row svelte-1skdisl"><input placeholder="Commit message…" class="svelte-1skdisl"/> <button class="svelte-1skdisl"><!> Commit</button></div> <pre class="output svelte-1skdisl"> </pre></div>');function Cc(e,t){Pt(t,!0);let n=D(""),r=D(""),i=D(be({}));const s=Kn(()=>(y.gitStatus||"").split(`
`).filter(E=>E&&!E.startsWith("##")).map(E=>({code:E.slice(0,2).trim()||"??",path:E.slice(3).trim()})).filter(E=>E.path)),a=Kn(()=>f(s).filter(E=>f(i)[E.path]).map(E=>E.path));async function o(E){f(a).length&&(await y.runGit(E,{files:f(a)}),$(i,{},!0))}async function l(){if(!f(n).trim())return;await y.runGit("commit",{message:f(n).trim()})&&$(n,"")}async function u(){if(!f(r).trim())return;await y.runGit("create_branch",{branch:f(r).trim()})&&$(r,"")}var v=Ec(),p=N(v),d=N(p),h=N(d);xa(h,{size:13});var _=w(d,2),g=N(_);Zl(g,{size:13});var m=w(_,2),S=N(m);_s(S,{size:13});var R=w(p,2);{var T=E=>{var F=bc(),J=w(N(F)),ke=we(J,!0);ve(()=>ce(ke,y.gitBranch)),k(E,F)};le(R,E=>{y.gitBranch&&E(T)})}var K=w(R,2);{var C=E=>{var F=$c(),J=G(F);At(J,21,()=>f(s),xn=>xn.path,(xn,bt)=>{var wr=wc(),Wr=N(wr),Nn=N(Wr),rn=w(Nn,2);let $r;var Gr=we(rn,!0),kr=w(rn,2),Yr=we(kr,!0);ve(()=>{$r=Ct(rn,1,"code svelte-1skdisl",null,$r,{staged:f(bt).code[0]!=="?"&&f(bt).code[0]!==" "}),ce(Gr,f(bt).code),st(kr,"title",f(bt).path),ce(Yr,f(bt).path)}),Ol(Nn,()=>f(i)[f(bt).path],Sr=>f(i)[f(bt).path]=Sr),k(xn,wr)});var ke=w(J,2),me=N(ke),qe=N(me);_s(qe,{size:13});var yt=w(qe),De=w(me,2),Ae=N(De);Xl(Ae,{size:13}),ve(()=>{me.disabled=!f(a).length,ce(yt,` Stage (${f(a).length??""})`),De.disabled=!f(a).length}),W("click",me,()=>o("stage")),W("click",De,()=>o("unstage")),k(E,F)};le(K,E=>{f(s).length&&E(C)})}var b=w(K,2);{var P=E=>{var F=Sc();At(F,20,()=>y.gitBranches,ke=>ke,(ke,me)=>{var qe=kc(),yt=we(qe,!0),De={};ve(()=>{ce(yt,me),De!==(De=me)&&(qe.value=(qe.__value=De)??"")}),k(ke,qe)});var J;Wn(F),ve(()=>{J!==(J=y.gitBranch)&&(F.value=(F.__value=J)??"",kn(F,J))}),W("change",F,ke=>y.runGit("switch",{branch:ke.currentTarget.value})),k(E,F)};le(b,E=>{y.gitBranches.length&&E(P)})}var Y=w(b,2),M=N(Y),x=w(M,2),B=N(x);ic(B,{size:13});var ee=w(Y,2),Se=N(ee),Ee=w(Se,2),Ke=N(Ee);ac(Ke,{size:13});var A=w(ee,2),j=we(A,!0);ve(()=>ce(j,y.gitOutput||"No git output yet.")),W("click",d,()=>y.runGit("status")),W("click",_,()=>y.runGit("diff")),W("click",m,()=>y.runGit("stage",{files:["."]})),Ie(M,()=>f(r),E=>$(r,E)),W("click",x,u),Ie(Se,()=>f(n),E=>$(n,E)),W("click",Ee,l),k(e,v),Mt()}nn(["click","change"]);const Tc="modulepreload",xc=function(e,t){return new URL(e,t).href},gs={},Nc=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let a=function(v){return Promise.all(v.map(p=>Promise.resolve(p).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),u=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=a(n.map(v=>{if(v=xc(v,r),v in gs)return;gs[v]=!0;const p=v.endsWith(".css"),d=p?'[rel="stylesheet"]':"";if(!!r)for(let g=o.length-1;g>=0;g--){const m=o[g];if(m.href===v&&(!p||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${v}"]${d}`))return;const _=document.createElement("link");if(_.rel=p?"stylesheet":Tc,p||(_.as="script"),_.crossOrigin="",_.href=v,u&&_.setAttribute("nonce",u),document.head.appendChild(_),p)return new Promise((g,m)=>{_.addEventListener("load",g),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${v}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return t().catch(s)})},Ac={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},Pc={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function Mc(e){var n;const t=(e||"").split("/").pop()||"";return t.toLowerCase()==="dockerfile"?"dockerfile":t.toLowerCase()==="makefile"?"shell":Pc[(n=t.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var Ic=U('<div class="editor svelte-1h8xysy"></div>');function Oc(e,t){Pt(t,!0);let n,r=null,i=null,s="",a=!1;Ki(async()=>{i=await Nc(()=>import("./ide-monaco.js").then(l=>l.a),__vite__mapDeps([0,1]),import.meta.url),i.editor.defineTheme("monokai",Ac),r=i.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{a||!s||y.updateContent(s,r.getValue())}),r.addCommand(i.KeyMod.CtrlCmd|i.KeyCode.KeyS,()=>y.saveActive())}),Ca(()=>r==null?void 0:r.dispose()),tn(()=>{const l=y.activeTab;if(!(!r||!i)){if(!l){a=!0,r.setValue(""),s="",a=!1;return}if(l.key!==s){a=!0;const u=i.editor.createModel(l.content,Mc(l.path)),v=r.getModel();r.setModel(u),v==null||v.dispose(),s=l.key,a=!1}else r.getValue()!==l.content&&(a=!0,r.setValue(l.content),a=!1)}});var o=Ic();Hi(o,l=>n=l,()=>n),k(e,o),Mt()}var an=zl(()=>y),zc=U('<span class="dot svelte-p0uzej" title="Unsaved changes"><!></span>'),Rc=U('<div><button class="label svelte-p0uzej" role="tab"><!> </button> <button class="close svelte-p0uzej" title="Close"><!></button></div>'),Dc=U('<div class="hint svelte-p0uzej">Open a file from the explorer</div>'),Lc=U('<div class="tabs svelte-p0uzej" role="tablist"></div>');function Fc(e,t){Pt(t,!1);const n=i=>i.split("/").pop();Ea();var r=Lc();At(r,5,()=>an().tabs,i=>i.key,(i,s)=>{var a=Rc();let o;var l=N(a),u=N(l);{var v=_=>{var g=zc(),m=N(g);Jl(m,{size:16}),k(_,g)};le(u,_=>{f(s).dirty&&_(v)})}var p=w(u),d=w(l,2),h=N(d);hc(h,{size:13}),ve((_,g)=>{o=Ct(a,1,"tab svelte-p0uzej",null,o,{active:f(s).key===an().activeKey}),st(l,"aria-selected",f(s).key===an().activeKey),st(l,"title",f(s).path),ce(p,` ${_??""}`),st(d,"aria-label",`Close ${g??""}`)},[()=>n(f(s).path),()=>n(f(s).path)]),W("click",l,()=>an(an().activeKey=f(s).key)),W("click",d,()=>an().closeTab(f(s).key)),k(i,a)},i=>{var s=Dc();k(i,s)}),k(e,r),Mt()}nn(["click"]);var jc=U("<option> </option>"),Vc=U('<p class="error svelte-1roe1v9"> </p>'),Bc=U("<div> </div>"),Hc=U(`<p class="empty svelte-1roe1v9">Ask about the active remote file. The prompt is delivered to the selected
          agent session — pick a Codex session or a Claude session to choose which
          assistant answers, and replies appear here.</p>`),Kc=U('<div class="chat svelte-1roe1v9"><div class="head svelte-1roe1v9"><span class="title svelte-1roe1v9">AI chat</span> <select title="Agent session to send to" class="svelte-1roe1v9"></select></div> <div class="messages svelte-1roe1v9"><!> <!></div> <div class="compose svelte-1roe1v9"><textarea placeholder="Ask about the active remote file… (⌘/Ctrl+Enter to send)" class="svelte-1roe1v9"></textarea> <button class="svelte-1roe1v9"><!> </button></div></div>');function qc(e,t){Pt(t,!0);let n=He(t,"sessions",19,()=>[]),r=He(t,"session",3,""),i=He(t,"rootPath",3,""),s=D(""),a=D(be(r()||n()[0]||"")),o=D(!1),l=D(be([])),u=D(""),v=D(null),p=null;async function d(){if(f(a))try{const j=(await _e.chat(f(a))).messages||[],E=j.length!==f(l).length;$(l,j,!0),$(u,""),E&&queueMicrotask(h)}catch(A){$(u,A.message||"Could not load chat",!0)}}function h(){f(v)&&(f(v).scrollTop=f(v).scrollHeight)}tn(()=>{const A=f(a);$(l,[],!0),p&&clearInterval(p),A&&(d(),p=setInterval(d,3e3))}),Ca(()=>{p&&clearInterval(p)});function _(){const A=y.connection||{},j=y.activeTab,E=j?j.path:y.path||".",F=j?`
Active file contents (first 12,000 characters):
${j.content.slice(0,12e3)}`:"";return`[Remote SSH IDE context]
SSH target: ${A.username||"?"}@${A.host||"?"}
Remote path: ${E}${F}

${f(s).trim()}`}async function g(){const A=f(s).trim();if(!A||!f(a)||f(o))return;const j=_();$(o,!0);try{const E=await fetch(`${i()}/api/sessions/${encodeURIComponent(f(a))}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:j})}),F=await E.json().catch(()=>({}));if(!E.ok)throw new Error(F.error||"Could not send");$(s,""),$(l,[...f(l),{role:"user",text:A,ts:Date.now()/1e3,_local:!0}],!0),queueMicrotask(h),setTimeout(d,1200)}catch(E){y.setStatus(E.message||"Could not send prompt")}finally{$(o,!1)}}function m(A){A.key==="Enter"&&(A.metaKey||A.ctrlKey)&&(A.preventDefault(),g())}function S(A){const j=A.full||A.text||"",E=`

`;if(j.startsWith("[Remote SSH IDE context]")){const F=j.lastIndexOf(E);if(F!==-1)return j.slice(F+E.length)}return j}var R=Kc(),T=N(R),K=w(N(T),2);At(K,20,n,A=>A,(A,j)=>{var E=jc(),F=we(E,!0),J={};ve(()=>{ce(F,j),J!==(J=j)&&(E.value=(E.__value=J)??"")}),k(A,E)}),Wn(K);var C=w(T,2),b=N(C);{var P=A=>{var j=Vc(),E=we(j,!0);ve(()=>ce(E,f(u))),k(A,j)};le(b,A=>{f(u)&&A(P)})}var Y=w(b,2);At(Y,19,()=>f(l),(A,j)=>A.ts+":"+j,(A,j)=>{var E=Bc(),F=we(E,!0);ve(J=>{Ct(E,1,`msg ${f(j).role==="assistant"?"assistant":"user"}`,"svelte-1roe1v9"),ce(F,J)},[()=>S(f(j))]),k(A,E)},A=>{var j=Q(),E=G(j);{var F=J=>{var ke=Hc();k(J,ke)};le(E,J=>{f(u)||J(F)})}k(A,j)}),Hi(C,A=>$(v,A),()=>f(v));var M=w(C,2),x=N(M),B=w(x,2),ee=N(B);{var Se=A=>{lc(A,{size:13})},Ee=A=>{dc(A,{size:13})};le(ee,A=>{f(o)?A(Se):A(Ee,-1)})}var Ke=w(ee);ve(A=>{B.disabled=A,ce(Ke,` ${f(o)?"Sending…":"Send"}`)},[()=>f(o)||!f(s).trim()]),ya(K,()=>f(a),A=>$(a,A)),W("keydown",x,m),Ie(x,()=>f(s),A=>$(s,A)),W("click",B,g),k(e,R),Mt()}nn(["keydown","click"]);var Uc=U('<span class="hint svelte-e2eyom">searching…</span>'),Wc=U('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),Gc=U('<ul class="results svelte-e2eyom"></ul>'),Yc=U('<p class="empty svelte-e2eyom"> </p>'),Jc=U('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function Zc(e,t){Pt(t,!0);let n=D(""),r=D(be([])),i=D(0),s=D(!1),a=D(null),o=null;tn(()=>{f(a)&&f(a).focus()}),tn(()=>{const b=f(n).trim();if(o&&clearTimeout(o),!b){$(r,[],!0);return}o=setTimeout(async()=>{$(s,!0);try{const P=await _e.searchFiles(y.connectionId,y.path||".",b);$(r,P.matches||[],!0),$(i,0)}catch{$(r,[],!0)}finally{$(s,!1)}},180)});async function l(b){var Y;if(!b)return;const P=y.path&&y.path!=="."?`${y.path}/`:"";await y.openFile(`${P}${b.path}`),(Y=t.onclose)==null||Y.call(t)}function u(b){var P;b.key==="Escape"?(b.preventDefault(),(P=t.onclose)==null||P.call(t)):b.key==="ArrowDown"?(b.preventDefault(),$(i,Math.min(f(i)+1,f(r).length-1),!0)):b.key==="ArrowUp"?(b.preventDefault(),$(i,Math.max(f(i)-1,0),!0)):b.key==="Enter"&&(b.preventDefault(),l(f(r)[f(i)]))}var v=Jc(),p=G(v),d=w(p,2),h=N(d),_=N(h);fc(_,{size:14});var g=w(_,2);Hi(g,b=>$(a,b),()=>f(a));var m=w(g,2);{var S=b=>{var P=Uc();k(b,P)};le(m,b=>{f(s)&&b(S)})}var R=w(h,2);{var T=b=>{var P=Gc();At(P,23,()=>f(r),Y=>Y.path,(Y,M,x)=>{var B=Wc(),ee=N(B);let Se;var Ee=N(ee),Ke=we(Ee,!0),A=w(Ee,2),j=we(A,!0),E=w(A,2);{var F=J=>{Yl(J,{size:12})};le(E,J=>{f(x)===f(i)&&J(F)})}ve(()=>{Se=Ct(ee,1,"svelte-e2eyom",null,Se,{active:f(x)===f(i)}),ce(Ke,f(M).name),ce(j,f(M).path)}),W("click",ee,()=>l(f(M))),k(Y,B)}),k(b,P)},K=b=>{var P=Yc(),Y=we(P);ve(M=>ce(Y,`No files match “${M??""}”.`),[()=>f(n).trim()]),k(b,P)},C=Kn(()=>f(n).trim()&&!f(s));le(R,b=>{f(r).length?b(T):f(C)&&b(K,1)})}W("click",p,()=>{var b;return(b=t.onclose)==null?void 0:b.call(t)}),W("keydown",p,b=>{var P;return b.key==="Escape"&&((P=t.onclose)==null?void 0:P.call(t))}),W("keydown",g,u),Ie(g,()=>f(n),b=>$(n,b)),k(e,v),Mt()}nn(["click","keydown"]);var Xc=U("<option> </option>"),Qc=U('<button title="Delete connection" aria-label="Delete connection" class="svelte-1iy7iaf"><!></button>'),eu=U('<input class="pw svelte-1iy7iaf" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),tu=U('<!> <button class="primary svelte-1iy7iaf">Connect</button>',1),nu=U('<button title="Focus the tmux SSH window" class="svelte-1iy7iaf"><!> Terminal</button>'),ru=U('<input placeholder="~/.ssh/id_ed25519" class="svelte-1iy7iaf"/>'),iu=U('<input type="password" placeholder="Password" autocomplete="new-password" class="svelte-1iy7iaf"/>'),su=U('<form class="connform svelte-1iy7iaf"><input placeholder="Label" class="svelte-1iy7iaf"/> <input placeholder="Host" required="" class="svelte-1iy7iaf"/> <input placeholder="User" required="" class="svelte-1iy7iaf"/> <input placeholder="Port" type="number" min="1" max="65535" class="svelte-1iy7iaf"/> <select class="svelte-1iy7iaf"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!> <input placeholder="Workspace root" class="svelte-1iy7iaf"/> <button class="primary svelte-1iy7iaf" type="submit">Create</button> <button type="button" class="svelte-1iy7iaf">Cancel</button></form>'),au=U('<span class="dirty svelte-1iy7iaf"> </span>'),ou=U('<div class="ide svelte-1iy7iaf"><header class="topbar svelte-1iy7iaf"><span class="brand svelte-1iy7iaf">Remote SSH IDE</span> <select title="SSH connection" class="svelte-1iy7iaf"><option>— select connection —</option><!></select> <button class="svelte-1iy7iaf"><!> Add</button> <!> <span><!> </span> <!></header> <!> <div class="main svelte-1iy7iaf"><aside class="sidebar svelte-1iy7iaf"><div class="switch svelte-1iy7iaf"><button><!> Files</button> <button><!> Git</button></div> <!></aside> <section class="code svelte-1iy7iaf"><!> <div class="editor-wrap svelte-1iy7iaf"><!></div></section> <aside class="chat-pane svelte-1iy7iaf"><!></aside></div> <!> <footer class="statusbar svelte-1iy7iaf"><span> </span> <span class="detail svelte-1iy7iaf"> </span> <!></footer></div>');function lu(e,t){Pt(t,!0);let n=He(t,"sessions",19,()=>[]),r=He(t,"session",3,""),i=He(t,"rootPath",3,""),s=D("files"),a=D(!1),o=D(!1),l=D(""),u=D(be({label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",workspace_root:".",max_file_bytes:1e6}));const v={idle:{icon:Gl,label:"Not connected"},connecting:{icon:Wl,label:"Connecting…"},connected:{icon:Ul,label:"Connected"},reconnect:{icon:ps,label:"Reconnect required"},error:{icon:ps,label:"Error"}},p=Kn(()=>v[y.connectionState].icon);Ki(async()=>{await y.loadConnections(),y.connectionId&&await y.refreshStatus()});async function d(I){y.connectionId=I.currentTarget.value,y.tabs=[],y.activeKey="",y.restoredKey="",await y.refreshStatus()}async function h(I){I.preventDefault();try{const Z=await _e.createConnection({...f(u),port:Number(f(u).port)});$(o,!1),$(u,{...f(u),label:"",host:"",username:"",password:""},!0),await y.loadConnections(),y.connectionId=Z.connection.id,await y.refreshStatus()}catch(Z){y.setStatus(Z.message||"Could not create connection")}}async function _(){const I=y.connection;if(I&&confirm(`Delete connection "${I.label}"? Stored credentials and saved tabs are removed.`))try{await _e.deleteConnection(I.id),y.connectionId="",y.tabs=[],await y.loadConnections()}catch(Z){y.setStatus(Z.message||"Could not delete connection")}}async function g(){try{const I=await _e.focusTerminal(y.connectionId);y.setStatus(`Focused ${I.window_name}`,"tmux SSH window selected")}catch(I){y.setStatus(I.message||"Could not focus terminal")}}function m(I){var Le,wt,lt,Ot;const Z=I.ctrlKey||I.metaKey,fe=I.key.toLowerCase(),It=((wt=(Le=I.target)==null?void 0:Le.matches)==null?void 0:wt.call(Le,"input, textarea, select"))&&!((Ot=(lt=I.target).closest)!=null&&Ot.call(lt,".monaco-editor"));Z&&fe==="s"?(I.preventDefault(),y.saveActive()):Z&&fe==="p"&&!It?(I.preventDefault(),y.connectionId&&$(a,!0)):I.key==="Escape"&&f(a)&&(I.preventDefault(),$(a,!1))}var S=ou();yi("keydown",_i,m);var R=N(S),T=w(N(R),2),K=N(T);K.value=K.__value="";var C=w(K);At(C,17,()=>y.connections,I=>I.id,(I,Z)=>{var fe=Xc(),It=we(fe,!0),Le={};ve(()=>{ce(It,f(Z).label),Le!==(Le=f(Z).id)&&(fe.value=(fe.__value=Le)??"")}),k(I,fe)});var b;Wn(T);var P=w(T,2),Y=N(P);uc(Y,{size:14});var M=w(P,2);{var x=I=>{var Z=Qc(),fe=N(Z);Na(fe,{size:14}),W("click",Z,_),k(I,Z)};le(M,I=>{y.connection&&I(x)})}var B=w(M,2),ee=N(B);$l(ee,()=>f(p),(I,Z)=>{Z(I,{size:13})});var Se=w(ee),Ee=w(B,2);{var Ke=I=>{var Z=tu(),fe=G(Z);{var It=wt=>{var lt=eu();Ie(lt,()=>f(l),Ot=>$(l,Ot)),k(wt,lt)};le(fe,wt=>{y.connection&&!y.connection.has_password&&wt(It)})}var Le=w(fe,2);W("click",Le,()=>y.connect(f(l))),k(I,Z)},A=I=>{var Z=nu(),fe=N(Z);vc(fe,{size:14}),W("click",Z,g),k(I,Z)};le(Ee,I=>{y.connectionState!=="connected"?I(Ke):I(A,-1)})}var j=w(R,2);{var E=I=>{var Z=su(),fe=N(Z),It=w(fe,2),Le=w(It,2),wt=w(Le,2),lt=w(wt,2),Ot=N(lt);Ot.value=Ot.__value="agent";var Jr=w(Ot);Jr.value=Jr.__value="key";var Wi=w(Jr);Wi.value=Wi.__value="password",Wn(lt);var Gi=w(lt,2);{var Da=de=>{var An=ru();Ie(An,()=>f(u).identity_file,Zr=>f(u).identity_file=Zr),k(de,An)};le(Gi,de=>{f(u).auth_mode==="key"&&de(Da)})}var Yi=w(Gi,2);{var La=de=>{var An=iu();Ie(An,()=>f(u).password,Zr=>f(u).password=Zr),k(de,An)};le(Yi,de=>{f(u).auth_mode==="password"&&de(La)})}var Ji=w(Yi,2),Fa=w(Ji,4);yi("submit",Z,h),Ie(fe,()=>f(u).label,de=>f(u).label=de),Ie(It,()=>f(u).host,de=>f(u).host=de),Ie(Le,()=>f(u).username,de=>f(u).username=de),Ie(wt,()=>f(u).port,de=>f(u).port=de),ya(lt,()=>f(u).auth_mode,de=>f(u).auth_mode=de),Ie(Ji,()=>f(u).workspace_root,de=>f(u).workspace_root=de),W("click",Fa,()=>$(o,!1)),k(I,Z)};le(j,I=>{f(o)&&I(E)})}var F=w(j,2),J=N(F),ke=N(J),me=N(ke);let qe;var yt=N(me);tc(yt,{size:13});var De=w(me,2);let Ae;var xn=N(De);sc(xn,{size:13});var bt=w(ke,2);{var wr=I=>{yc(I,{})},Wr=I=>{Cc(I,{})};le(bt,I=>{f(s)==="files"?I(wr):I(Wr,-1)})}var Nn=w(J,2),rn=N(Nn);Fc(rn,{});var $r=w(rn,2),Gr=N($r);Oc(Gr,{});var kr=w(Nn,2),Yr=N(kr);qc(Yr,{get sessions(){return n()},get session(){return r()},get rootPath(){return i()}});var Sr=w(F,2);{var Pa=I=>{Zc(I,{onclose:()=>$(a,!1)})};le(Sr,I=>{f(a)&&I(Pa)})}var Ma=w(Sr,2),qi=N(Ma),Ia=we(qi,!0),Ui=w(qi,2),Oa=we(Ui,!0),za=w(Ui,2);{var Ra=I=>{var Z=au(),fe=we(Z);ve(()=>ce(fe,`${y.dirtyCount??""} unsaved`)),k(I,Z)};le(za,I=>{y.dirtyCount&&I(Ra)})}ve(()=>{b!==(b=y.connectionId)&&(T.value=(T.__value=b)??"",kn(T,b)),Ct(B,1,`state ${y.connectionState??""}`,"svelte-1iy7iaf"),ce(Se,` ${v[y.connectionState].label??""}`),qe=Ct(me,1,"svelte-1iy7iaf",null,qe,{active:f(s)==="files"}),Ae=Ct(De,1,"svelte-1iy7iaf",null,Ae,{active:f(s)==="git"}),ce(Ia,y.statusText),ce(Oa,y.detailText)}),W("change",T,d),W("click",P,()=>$(o,!f(o))),W("click",me,()=>$(s,"files")),W("click",De,()=>$(s,"git")),k(e,S),Mt()}nn(["change","click"]);function Aa(e,t){return pl(lu,{target:e,props:t})}function ms(){const e=document.getElementById("ide-root");if(!e||e.dataset.mounted)return;e.dataset.mounted="1";const t=window.__IDE_BOOTSTRAP__||{};Aa(e,{sessions:t.sessions||[],session:t.session||"",rootPath:t.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ms):ms();window.mountRemoteIde=Aa;export{Nc as _};
