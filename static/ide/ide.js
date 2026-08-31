const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css"])))=>i.map(i=>d[i]);
var zo=Object.defineProperty;var Vi=e=>{throw TypeError(e)};var Lo=(e,t,n)=>t in e?zo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ve=(e,t,n)=>Lo(e,typeof t!="symbol"?t+"":t,n),Vr=(e,t,n)=>t.has(e)||Vi("Cannot "+n);var u=(e,t,n)=>(Vr(e,t,"read from private field"),n?n.call(e):t.get(e)),S=(e,t,n)=>t.has(e)?Vi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),O=(e,t,n,r)=>(Vr(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),j=(e,t,n)=>(Vr(e,t,"access private method"),n);var Or=Array.isArray,Fo=Array.prototype.indexOf,kr=Array.prototype.includes,Rr=Array.from,fs=Object.defineProperty,St=Object.getOwnPropertyDescriptor,ds=Object.getOwnPropertyDescriptors,Do=Object.prototype,jo=Array.prototype,_i=Object.getPrototypeOf,Bi=Object.isExtensible;function kn(e){return typeof e=="function"}const Vo=()=>{};function Bo(e){return e()}function Xr(e){for(var t=0;t<e.length;t++)e[t]()}function hs(){var e,t,n=new Promise((r,i)=>{e=r,t=i});return{promise:n,resolve:e,reject:t}}function Ho(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const ue=2,fn=4,cr=8,gi=1<<24,Ye=16,Ve=32,pt=64,Qr=128,mi=256,je=512,se=1024,oe=2048,Ze=4096,ye=8192,Te=16384,gn=32768,Er=1<<25,Et=65536,Cr=1<<17,Ko=1<<18,mn=1<<19,vs=1<<20,it=1<<25,Ht=65536,Tr=1<<21,en=1<<22,kt=1<<23,at=Symbol("$state"),ps=Symbol("component"),_s=Symbol("legacy props"),Uo=Symbol(""),yr=Symbol("attributes"),ei=Symbol("class"),ti=Symbol("style"),xn=Symbol("text"),br=Symbol("form reset"),fr=new class extends Error{constructor(){super(...arguments);ve(this,"name","StaleReactionError");ve(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var ls;const yi=!!((ls=globalThis.document)!=null&&ls.contentType)&&globalThis.document.contentType.includes("xml"),qo=1,Go=2,gs=4,Wo=8,Yo=16,Jo=1,Zo=2,ms=4,Xo=8,Qo=16,ea=1,ta=2,re=Symbol("uninitialized"),ys="http://www.w3.org/1999/xhtml",na="http://www.w3.org/2000/svg",ra="@attach";function ia(){console.warn("https://svelte.dev/e/derived_inert")}function sa(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function oa(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function bs(e){return e===this.v}function aa(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function ws(e){return!aa(e,this.v)}function $s(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function la(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function ua(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function ca(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function fa(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function da(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ha(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function va(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function pa(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function _a(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function ga(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function ma(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let yn=!1;function ya(){yn=!0}let W=null;function dn(e){W=e}function Ct(e,t=!1,n){W={p:W,i:!1,c:null,e:null,s:e,x:null,r:L,l:yn&&!t?{s:null,u:null,$:[]}:null}}function Tt(e){var t=W,n=t.e;if(n!==null){t.e=null;for(var r of n)Us(r)}return t.i=!0,W=t.p,bi(e)}function bi(e={}){return fs(e,ps,{value:!0}),e}function dr(){return!yn||W!==null&&W.l===null}let It=[];function Ss(){var e=It;It=[],Xr(e)}function st(e){if(It.length===0&&!Rn){var t=It;queueMicrotask(()=>{t===It&&Ss()})}It.push(e)}function ba(){for(;It.length>0;)Ss()}const wa=-7169;function ne(e,t){e.f=e.f&wa|t}function wi(e){(e.f&je)!==0||e.deps===null?ne(e,se):ne(e,Ze)}function ks(e){if(e!==null)for(const t of e)(t.f&ue)===0||(t.f&Ht)===0||(t.f^=Ht,ks(t.deps))}function Es(e,t,n){(e.f&oe)!==0?t.add(e):(e.f&Ze)!==0&&n.add(e),ks(e.deps),ne(e,se)}let gr=!1;function $a(e){var t=gr;try{return gr=!1,[e(),gr]}finally{gr=t}}function Sa(e,t){if(t){const n=document.body;e.autofocus=!0,st(()=>{document.activeElement===n&&e.focus()})}}let Hi=!1;function ka(){Hi||(Hi=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[br])==null||t.call(n)})},{capture:!0}))}function bn(e){var t=D,n=L;Be(null),He(null);try{return e()}finally{Be(t),He(n)}}function Cs(e,t,n,r=n){e.addEventListener(t,()=>bn(n));const i=e[br];i?e[br]=()=>{i(),r(!0)}:e[br]=()=>r(!0),ka()}function Ts(e,t,n,r){const i=dr()?hn:$i;var s=e.filter(h=>!h.settled),o=t.map(i);if(n.length===0&&s.length===0){r(o);return}var a=L,l=Ea(),c=s.length===1?s[0].promise:s.length>1?Promise.all(s.map(h=>h.promise)):null;function d(h){if((a.f&Te)===0){l();try{r([...o,...h])}catch(p){rt(p,a)}xr()}}var _=xs();if(n.length===0){c.then(()=>d([])).finally(_);return}function f(){Promise.all(n.map(h=>Ca(h))).then(d).catch(h=>rt(h,a)).finally(_)}c?c.then(()=>{l(),f(),xr()}):f()}function Ea(){var e=L,t=D,n=W,r=C;return function(s=!0){He(e),Be(t),dn(n),s&&(e.f&Te)===0&&(r==null||r.activate(),r==null||r.apply())}}function xr(e=!0){He(null),Be(null),dn(null),e&&(C==null||C.deactivate())}function xs(){var e=L,t=e.b,n=C,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function hn(e){var t=ue|oe;return L!==null&&(L.f|=mn),{ctx:W,deps:null,effects:null,equals:bs,f:t,fn:e,reactions:null,rv:0,v:re,wv:0,parent:L,ac:null}}const Nn=Symbol("obsolete");function Ca(e,t,n){let r=L;r===null&&la();var i=void 0,s=_t(re),o=!D,a=new Set;return Va(()=>{var h,p;var l=L,c=hs();i=c.promise;try{Promise.resolve(e()).then(c.resolve,m=>{m!==fr&&c.reject(m)}).finally(xr)}catch(m){c.reject(m),xr()}var d=C;if(o){if((l.f&gn)!==0)var _=xs();if((h=r.b)!=null&&h.is_rendered())(p=d.async_deriveds.get(l))==null||p.reject(Nn);else for(const m of a.values())m.reject(Nn);a.add(c),d.async_deriveds.set(l,c)}const f=(m,g=void 0)=>{_==null||_(),a.delete(c),g!==Nn&&(d.activate(),g?(s.f|=kt,vn(s,g)):((s.f&kt)!==0&&(s.f^=kt),vn(s,m)),d.deactivate())};c.promise.then(f,m=>f(null,m||"unknown"))}),zr(()=>{for(const l of a)l.reject(Nn)}),new Promise(l=>{function c(d){function _(){d===i?l(s):c(i)}d.then(_,_)}c(i)})}function Ns(e){const t=hn(e);return Zs(t),t}function $i(e){const t=hn(e);return t.equals=ws,t}function Ta(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)fe(t[n])}}function Si(e){var t,n=L,r=e.parent;if(!gt&&r!==null&&e.v!==re&&(r.f&(Te|ye))!==0)return ia(),e.v;He(r);try{e.f&=~Ht,Ta(e),t=to(e)}finally{He(n)}return t}function As(e){var t=Si(e);if(!e.equals(t)&&(e.wv=Qs(),(!(C!=null&&C.is_fork)||e.deps===null)&&(C!==null?(C.capture(e,t,!0),On==null||On.capture(e,t,!0)):e.v=t,e.deps===null))){ne(e,se);return}gt||(ce!==null?(Ti()||C!=null&&C.is_fork)&&ce.set(e,t):wi(e))}function xa(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&bn(()=>{n.ac.abort(fr),n.ac=null}),n.fn!==null&&(n.teardown=Vo),Fn(n,0),Ni(n))}function Ps(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&pn(t)}let Br=null,Jt=null,C=null,On=null,ce=null,ni=null,Rn=!1,Hr=!1,Qt=null,wr=null;var Ki=0;let Na=1;var rn,wt,zt,sn,on,an,ft,ln,Se,Vn,dt,Ge,et,un,Lt,K,ri,An,ii,Ms,Is,Xt,Aa,Pn;const Pr=class Pr{constructor(){S(this,K);ve(this,"id",Na++);S(this,rn,!1);ve(this,"linked",!0);S(this,wt,null);S(this,zt,null);ve(this,"async_deriveds",new Map);ve(this,"current",new Map);ve(this,"previous",new Map);S(this,sn,new Set);S(this,on,new Set);S(this,an,0);S(this,ft,new Map);S(this,ln,null);S(this,Se,[]);S(this,Vn,[]);S(this,dt,new Set);S(this,Ge,new Set);S(this,et,new Map);S(this,un,new Set);ve(this,"is_fork",!1);S(this,Lt,!1);Jt===null?Br=Jt=this:(O(Jt,zt,this),O(this,wt,Jt)),Jt=this}skip_effect(t){u(this,et).has(t)||u(this,et).set(t,{d:[],m:[]}),u(this,un).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=u(this,et).get(t);if(r){u(this,et).delete(t);for(var i of r.d)ne(i,oe),n(i);for(i of r.m)ne(i,Ze),n(i)}u(this,un).add(t)}capture(t,n,r=!1){t.v!==re&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&kt)===0&&(this.current.set(t,[n,r]),ce==null||ce.set(t,n)),this.is_fork||(t.v=n)}activate(){C=this}deactivate(){C=null,ce=null}flush(){try{Hr=!0,C=this,j(this,K,An).call(this)}finally{Ki=0,ni=null,Qt=null,wr=null,Hr=!1,C=null,ce=null,lt.clear()}}discard(){var t;for(const n of u(this,on))n(this);u(this,on).clear();for(const n of this.async_deriveds.values())n.reject(Nn);j(this,K,Pn).call(this),(t=u(this,ln))==null||t.resolve()}register_created_effect(t){u(this,Vn).push(t)}increment(t,n){if(O(this,an,u(this,an)+1),t){let r=u(this,ft).get(n)??0;u(this,ft).set(n,r+1)}}decrement(t,n){if(O(this,an,u(this,an)-1),t){let r=u(this,ft).get(n)??0;r===1?u(this,ft).delete(n):u(this,ft).set(n,r-1)}u(this,Lt)||(O(this,Lt,!0),st(()=>{O(this,Lt,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)u(this,dt).add(r);for(const r of n)u(this,Ge).add(r);t.clear(),n.clear()}oncommit(t){u(this,sn).add(t)}ondiscard(t){u(this,on).add(t)}settled(){return(u(this,ln)??O(this,ln,hs())).promise}static ensure(){if(C===null){const t=C=new Pr;!Hr&&!Rn&&st(()=>{u(t,rn)||t.flush()})}return C}apply(){{ce=null;return}}schedule(t){var i;if(ni=t,(i=t.b)!=null&&i.is_pending&&(t.f&(fn|cr|gi))!==0&&(t.f&gn)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Qt!==null&&n===L&&(D===null||(D.f&ue)===0))return;if((r&(pt|Ve))!==0){if((r&se)===0)return;n.f^=se}}u(this,Se).push(n)}};rn=new WeakMap,wt=new WeakMap,zt=new WeakMap,sn=new WeakMap,on=new WeakMap,an=new WeakMap,ft=new WeakMap,ln=new WeakMap,Se=new WeakMap,Vn=new WeakMap,dt=new WeakMap,Ge=new WeakMap,et=new WeakMap,un=new WeakMap,Lt=new WeakMap,K=new WeakSet,ri=function(){if(this.is_fork)return!0;for(const r of u(this,ft).keys()){for(var t=r,n=!1;t.parent!==null;){if(u(this,et).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},An=function(){var l,c,d,_;O(this,rn,!0),Ki++>1e3&&(j(this,K,Pn).call(this),Ma());for(const f of u(this,dt))u(this,Ge).delete(f),ne(f,oe),this.schedule(f);for(const f of u(this,Ge))ne(f,Ze),this.schedule(f);const t=u(this,Se);O(this,Se,[]),this.apply();var n=Qt=[],r=[],i=wr=[];for(const f of t)try{j(this,K,ii).call(this,f,n,r)}catch(h){throw zs(f),j(this,K,ri).call(this)||this.discard(),h}if(C=null,i.length>0){var s=Pr.ensure();for(const f of i)s.schedule(f)}if(Qt=null,wr=null,j(this,K,ri).call(this)){j(this,K,Xt).call(this,r),j(this,K,Xt).call(this,n);for(const[f,h]of u(this,et))Rs(f,h);i.length>0&&j(l=C,K,An).call(l);return}const o=j(this,K,Ms).call(this);if(o){j(this,K,Xt).call(this,r),j(this,K,Xt).call(this,n),j(c=o,K,Is).call(c,this);return}u(this,dt).clear(),u(this,Ge).clear();for(const f of u(this,sn))f(this);u(this,sn).clear(),On=this,Ui(r),Ui(n),On=null,(d=u(this,ln))==null||d.resolve();var a=C;if(u(this,an)===0&&(u(this,Se).length===0||a!==null)&&j(this,K,Pn).call(this),u(this,Se).length>0)if(a!==null){const f=a;u(f,Se).push(...u(this,Se).filter(h=>!u(f,Se).includes(h)))}else a=this;a!==null&&(lt.clear(),j(_=a,K,An).call(_))},ii=function(t,n,r){t.f^=se;for(var i=t.first;i!==null;){var s=i.f,o=(s&(Ve|pt))!==0,a=o&&(s&se)!==0,l=a||(s&ye)!==0||u(this,et).has(i);if(!l&&i.fn!==null){o?i.f^=se:(s&fn)!==0?n.push(i):pr(i)&&((s&Ye)!==0&&u(this,Ge).add(i),pn(i));var c=i.first;if(c!==null){i=c;continue}}for(;i!==null;){var d=i.next;if(d!==null){i=d;break}i=i.parent}}},Ms=function(){for(var t=u(this,wt);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=u(t,wt)}return null},Is=function(t){var r;for(const[i,s]of t.current)!this.previous.has(i)&&t.previous.has(i)&&this.previous.set(i,t.previous.get(i)),this.current.set(i,s);for(const[i,s]of t.async_deriveds){const o=this.async_deriveds.get(i);o&&s.promise.then(o.resolve).catch(o.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,dt),u(t,Ge));const n=i=>{var s=i.reactions;if(s!==null&&!((i.f&ue)!==0&&(i.f&(oe|Ze))===0))for(const l of s){var o=l.f;if((o&ue)!==0)n(l);else{var a=l;o&(en|Ye)&&!this.async_deriveds.has(a)&&(u(this,Ge).delete(a),ne(a,oe),this.schedule(a))}}};for(const i of this.current.keys())n(i);this.oncommit(()=>t.discard()),j(r=t,K,Pn).call(r),C=this,j(this,K,An).call(this)},Xt=function(t){for(var n=0;n<t.length;n+=1)Es(t[n],u(this,dt),u(this,Ge))},Aa=function(){var _;for(let f=Br;f!==null;f=u(f,zt)){var t=f.id<this.id,n=[];for(const[h,[p,m]]of this.current){if(f.current.has(h)){var r=f.current.get(h)[0];if(t&&p!==r)f.current.set(h,[p,m]);else continue}n.push(h)}if(t)for(const[h,p]of this.async_deriveds){const m=f.async_deriveds.get(h);m&&p.promise.then(m.resolve).catch(m.reject)}var i=[...f.current.keys()].filter(h=>!f.current.get(h)[1]);if(!(!u(f,rn)||i.length===0)){var s=i.filter(h=>!this.current.has(h));if(s.length===0)t&&f.discard();else if(n.length>0){if(t)for(const h of u(this,un))f.unskip_effect(h,p=>{var m;(p.f&(Ye|en))!==0?f.schedule(p):j(m=f,K,Xt).call(m,[p])});f.activate();var o=new Set,a=new Map;for(var l of n)Os(l,s,o,a);a=new Map;var c=[...f.current].filter(([h,p])=>{const m=this.current.get(h);return m?m[0]!==p[0]||m[1]!==p[1]:!0}).map(([h])=>h);if(c.length>0)for(const h of u(this,Vn))(h.f&(Te|ye|Cr))===0&&ki(h,c,a)&&((h.f&(en|Ye))!==0?(ne(h,oe),f.schedule(h)):u(f,dt).add(h));if(u(f,Se).length>0&&!u(f,Lt)){f.apply();for(var d of u(f,Se))j(_=f,K,ii).call(_,d,[],[]);O(f,Se,[])}f.deactivate()}}}},Pn=function(){if(this.linked){var t=u(this,wt),n=u(this,zt);t===null?Br=n:O(t,zt,n),n===null?Jt=t:O(n,wt,t),this.linked=!1}};let Kt=Pr;function Pa(e){var t=Rn;Rn=!0;try{for(var n;;){if(ba(),C===null)return n;C.flush()}}finally{Rn=t}}function Ma(){try{ha()}catch(e){rt(e,ni)}}let qe=null;function Ui(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(Te|ye))===0&&pr(r)&&(qe=new Set,pn(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Ws(r),(qe==null?void 0:qe.size)>0)){lt.clear();for(const i of qe){if((i.f&(Te|ye))!==0)continue;const s=[i];let o=i.parent;for(;o!==null;)qe.has(o)&&(qe.delete(o),s.push(o)),o=o.parent;for(let a=s.length-1;a>=0;a--){const l=s[a];(l.f&(Te|ye))===0&&pn(l)}}qe.clear()}}qe=null}}function Os(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const i of e.reactions){const s=i.f;(s&ue)!==0?Os(i,t,n,r):(s&(en|Ye))!==0&&(s&oe)===0&&ki(i,t,r)&&(ne(i,oe),Ei(i))}}function ki(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const i of e.deps){if(kr.call(t,i))return!0;if((i.f&ue)!==0&&ki(i,t,n))return n.set(i,!0),!0}return n.set(e,!1),!1}function Ei(e){C.schedule(e)}function Rs(e,t){if(!((e.f&Ve)!==0&&(e.f&se)!==0)){(e.f&oe)!==0?t.d.push(e):(e.f&Ze)!==0&&t.m.push(e),ne(e,se);for(var n=e.first;n!==null;)Rs(n,t),n=n.next}}function zs(e){ne(e,se);for(var t=e.first;t!==null;)zs(t),t=t.next}let Nr=new Set;const lt=new Map;let Ls=!1;function _t(e,t){var n={f:0,v:e,reactions:null,equals:bs,rv:0,wv:0};return n}function F(e,t){const n=_t(e);return Zs(n),n}function Ia(e,t=!1,n=!0){var i;const r=_t(e);return t||(r.equals=ws),yn&&n&&W!==null&&W.l!==null&&((i=W.l).s??(i.s=[])).push(r),r}function N(e,t,n=!1){D!==null&&(!Je||(D.f&Cr)!==0)&&dr()&&(D.f&(ue|Ye|en|Cr))!==0&&(ut===null||!ut.has(e))&&ga();let r=n?ge(t):t;return vn(e,r,wr)}function vn(e,t,n=null){if(!e.equals(t)){gt?lt.set(e,t):lt.has(e)||lt.set(e,e.v);var r=Kt.ensure();if(r.capture(e,t),(e.f&ue)!==0){const i=e;(e.f&oe)!==0&&Si(i),ce===null&&wi(i)}e.wv=Qs(),Fs(e,oe,n),dr()&&L!==null&&(L.f&se)!==0&&(L.f&(Ve|pt))===0&&(ze===null?Ka([e]):ze.push(e)),!r.is_fork&&Nr.size>0&&!Ls&&Oa()}return t}function Oa(){Ls=!1;for(const e of Nr){(e.f&se)!==0&&ne(e,Ze);let t;try{t=pr(e)}catch{t=!0}t&&pn(e)}Nr.clear()}function qi(e,t=1){var n=v(e),r=t===1?n++:n--;return N(e,n),r}function zn(e){N(e,e.v+1)}function Fs(e,t,n){var r=e.reactions;if(r!==null)for(var i=dr(),s=r.length,o=0;o<s;o++){var a=r[o],l=a.f;if(!(!i&&a===L)){var c=(l&oe)===0;if(c&&ne(a,t),(l&Cr)!==0)Nr.add(a);else if((l&ue)!==0){var d=a;ce==null||ce.delete(d),(l&Ht)===0&&(l&je&&(L===null||(L.f&Tr)===0)&&(a.f|=Ht),Fs(d,Ze,n))}else if(c){var _=a;(l&Ye)!==0&&qe!==null&&qe.add(_),n!==null?n.push(_):Ei(_)}}}}function ge(e){if(typeof e!="object"||e===null||at in e||ps in e)return e;const t=_i(e);if(t!==Do&&t!==jo)return e;var n=new Map,r=Or(e),i=F(0),s=Bt,o=a=>{if(Bt===s)return a();var l=D,c=Bt;Be(null),Yi(s);var d=a();return Be(l),Yi(c),d};return r&&n.set("length",F(e.length)),new Proxy(e,{defineProperty(a,l,c){(!("value"in c)||c.configurable===!1||c.enumerable===!1||c.writable===!1)&&pa();var d=n.get(l);return d===void 0?o(()=>{var _=F(c.value);return n.set(l,_),_}):N(d,c.value,!0),!0},deleteProperty(a,l){var c=n.get(l);if(c===void 0){if(l in a){const d=o(()=>F(re));n.set(l,d),zn(i)}}else N(c,re),zn(i);return!0},get(a,l,c){var h;if(l===at)return e;var d=n.get(l),_=l in a;if(d===void 0&&(!_||(h=St(a,l))!=null&&h.writable)&&(d=o(()=>{var p=ge(_?a[l]:re),m=F(p);return m}),n.set(l,d)),d!==void 0){var f=v(d);return f===re?void 0:f}return Reflect.get(a,l,c)},getOwnPropertyDescriptor(a,l){var c=Reflect.getOwnPropertyDescriptor(a,l);if(c&&"value"in c){var d=n.get(l);d&&(c.value=v(d))}else if(c===void 0){var _=n.get(l),f=_==null?void 0:_.v;if(_!==void 0&&f!==re)return{enumerable:!0,configurable:!0,value:f,writable:!0}}return c},has(a,l){var f;if(l===at)return!0;var c=n.get(l),d=c!==void 0&&c.v!==re||Reflect.has(a,l);if(c!==void 0||L!==null&&(!d||(f=St(a,l))!=null&&f.writable)){c===void 0&&(c=o(()=>{var h=d?ge(a[l]):re,p=F(h);return p}),n.set(l,c));var _=v(c);if(_===re)return!1}return d},set(a,l,c,d){var b;var _=n.get(l),f=l in a;if(r&&l==="length")for(var h=c;h<_.v;h+=1){var p=n.get(h+"");p!==void 0?N(p,re):h in a&&(p=o(()=>F(re)),n.set(h+"",p))}if(_===void 0)(!f||(b=St(a,l))!=null&&b.writable)&&(_=o(()=>F(void 0)),N(_,ge(c)),n.set(l,_));else{f=_.v!==re;var m=o(()=>ge(c));N(_,m)}var g=Reflect.getOwnPropertyDescriptor(a,l);if(g!=null&&g.set&&g.set.call(d,c),!f){if(r&&typeof l=="string"){var $=n.get("length"),T=Number(l);Number.isInteger(T)&&T>=$.v&&N($,T+1)}zn(i)}return!0},ownKeys(a){v(i);var l=Reflect.ownKeys(a).filter(_=>{var f=n.get(_);return f===void 0||f.v!==re});for(var[c,d]of n)d.v!==re&&!(c in a)&&l.push(c);return l},setPrototypeOf(){_a()}})}function Gi(e){try{if(e!==null&&typeof e=="object"&&at in e)return e[at]}catch{}return e}function Ds(e,t){return Object.is(Gi(e),Gi(t))}var si,js,Vs,Bs;function Ra(){if(si===void 0){si=window,js=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Vs=St(t,"firstChild").get,Bs=St(t,"nextSibling").get,Bi(e)&&(e[ei]=void 0,e[yr]=null,e[ti]=void 0,e.__e=void 0),Bi(n)&&(n[xn]=void 0)}}function vt(e=""){return document.createTextNode(e)}function Ut(e){return Vs.call(e)}function hr(e){return Bs.call(e)}function P(e,t){return Ut(e)}function J(e,t=!1){{var n=Ut(e);return n instanceof Comment&&n.data===""?hr(n):n}}function De(e,t=!1){return Ut(e)}function E(e,t=1,n=!1){let r=e;for(;t--;)r=hr(r);return r}function za(e){e.textContent=""}function Hs(){return!1}function Ci(e,t,n){return t==null||t===ys?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function La(e){var t=L;if(t===null)return D.f|=kt,e;if((t.f&gn)===0&&(t.f&fn)===0)throw e;rt(e,t)}function rt(e,t){if(!(t!==null&&(t.f&Te)!==0)){for(;t!==null;){if((t.f&Qr)!==0&&(t.f&(Te|Er))===0){if((t.f&gn)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function Ks(e){L===null&&(D===null&&da(),fa()),gt&&ca()}function Fa(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Xe(e,t){var n=L;n!==null&&(n.f&ye)!==0&&(e|=ye);var r={ctx:W,deps:null,nodes:null,f:e|oe|je,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};C==null||C.register_created_effect(r);var i=r;if((e&fn)!==0)Qt!==null?Qt.push(r):Kt.ensure().schedule(r);else if(t!==null){try{pn(r)}catch(o){throw fe(r),o}i.deps===null&&i.teardown===null&&i.nodes===null&&i.first===i.last&&(i.f&mn)===0&&(i=i.first,(e&Ye)!==0&&(e&Et)!==0&&i!==null&&(i.f|=Et))}if(i!==null&&(i.parent=n,n!==null&&Fa(i,n),D!==null&&(D.f&ue)!==0&&(e&pt)===0)){var s=D;(s.effects??(s.effects=[])).push(i)}return r}function Ti(){return D!==null&&!Je}function zr(e){const t=Xe(cr,null);return ne(t,se),t.teardown=e,t}function Ln(e){Ks();var t=L.f,n=!D&&(t&Ve)!==0&&W!==null&&!W.i;if(n){var r=W;(r.e??(r.e=[])).push(e)}else return Us(e)}function Us(e){return Xe(fn|vs,e)}function Da(e){return Ks(),Xe(cr|vs,e)}function ja(e){Kt.ensure();const t=Xe(pt|mn,e);return(n={})=>new Promise(r=>{n.outro?Vt(t,()=>{fe(t),r(void 0)}):(fe(t),r(void 0))})}function Lr(e){return Xe(fn,e)}function Va(e){return Xe(en|mn,e)}function xi(e,t=0){return Xe(cr|t,e)}function Ce(e,t=[],n=[],r=[]){Ts(r,t,n,i=>{Xe(cr,()=>{e(...i.map(v))})})}function vr(e,t=0){var n=Xe(Ye|t,e);return n}function qs(e,t=0){var n=Xe(gi|t,e);return n}function ke(e){return Xe(Ve|mn,e)}function Gs(e){var t=e.teardown;if(t!==null){const n=gt,r=D;Wi(!0),Be(null);try{t.call(null)}catch(i){rt(i,e.parent)}finally{Wi(n),Be(r)}}}function Ni(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const i=n.ac;i!==null&&bn(()=>{i.abort(fr)});var r=n.next;(n.f&pt)!==0?n.parent=null:fe(n,t),n=r}}function Ba(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Ve)===0&&fe(t),t=n}}function fe(e,t=!0){var n=!1;(t||(e.f&Ko)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(Ha(e.nodes.start,e.nodes.end),n=!0),e.f|=Er,Ni(e,t&&!n),Fn(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const s of r)s.stop();Gs(e),e.f^=Er,e.f|=Te;var i=e.parent;i!==null&&i.first!==null&&Ws(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function Ha(e,t){for(;e!==null;){var n=e===t?null:hr(e);e.remove(),e=n}}function Ws(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Vt(e,t,n=!0){var r=[];e.f|=mi,Ys(e,r,!0);var i=()=>{n&&fe(e),t&&t()},s=r.length;if(s>0){var o=()=>--s||i();for(var a of r)a.out(o)}else i()}function Ys(e,t,n){if((e.f&ye)===0){e.f^=ye;var r=e.nodes&&e.nodes.t;if(r!==null)for(const a of r)(a.is_global||n)&&t.push(a);for(var i=e.first;i!==null;){var s=i.next;if((i.f&pt)===0){var o=(i.f&Et)!==0||(i.f&Ve)!==0&&(e.f&Ye)!==0;Ys(i,t,o?n:!1)}i=s}}}function Ar(e){e.f&=~mi,Js(e,!0)}function Js(e,t){if((e.f&mi)===0&&(e.f&ye)!==0){e.f^=ye,(e.f&se)===0&&(ne(e,oe),Kt.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,i=(n.f&Et)!==0||(n.f&Ve)!==0;Js(n,i?t:!1),n=r}var s=e.nodes&&e.nodes.t;if(s!==null)for(const o of s)(o.is_global||t)&&o.in()}}function Ai(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var i=n===r?null:hr(n);t.append(n),n=i}}let $r=!1,gt=!1;function Wi(e){gt=e}let D=null,Je=!1;function Be(e){D=e}let L=null;function He(e){L=e}let ut=null;function Zs(e){D!==null&&(ut??(ut=new Set)).add(e)}let Ee=null,Pe=0,ze=null;function Ka(e){ze=e}let Xs=1,Ot=0,Bt=Ot;function Yi(e){Bt=e}function Qs(){return++Xs}function pr(e){var t=e.f;if((t&oe)!==0)return!0;if(t&ue&&(e.f&=~Ht),(t&Ze)!==0){for(var n=e.deps,r=n.length,i=0;i<r;i++){var s=n[i];if(pr(s)&&As(s),s.wv>e.wv)return!0}(t&je)!==0&&ce===null&&ne(e,se)}return!1}function eo(e,t,n=!0){var r=e.reactions;if(r!==null&&!(ut!==null&&ut.has(e)))for(var i=0;i<r.length;i++){var s=r[i];(s.f&ue)!==0?eo(s,t,!1):t===s&&(n?ne(s,oe):(s.f&se)!==0&&ne(s,Ze),Ei(s))}}function to(e){var t=Ee,n=Pe,r=ze,i=D,s=ut,o=W,a=Je,l=Bt,c=e.f;Ee=null,Pe=0,ze=null,D=(c&(Ve|pt))===0?e:null,ut=null,dn(e.ctx),Je=!1,Bt=++Ot,e.ac!==null&&(bn(()=>{e.ac.abort(fr)}),e.ac=null);try{e.f|=Tr;var d=e.fn,_=d();e.f|=gn;var f=Ji(e);if(dr()&&ze!==null&&!Je&&f!==null&&(e.f&(ue|Ze|oe))===0)for(var h=0;h<ze.length;h++)eo(ze[h],e);if(i!==null&&i!==e){if(Ot++,i.deps!==null)for(let p=0;p<n;p+=1)i.deps[p].rv=Ot;if(t!==null)for(const p of t)p.rv=Ot;ze!==null&&(r===null?r=ze:r.push(...ze))}return(e.f&kt)!==0&&(e.f^=kt),_}catch(p){return Ji(e),La(p)}finally{e.f^=Tr,Ee=t,Pe=n,ze=r,D=i,ut=s,dn(o),Je=a,Bt=l}}function Ji(e){var i;var t=e.deps,n=C==null?void 0:C.is_fork;if(Ee!==null){var r;if(n||Fn(e,Pe),t!==null&&Pe>0)for(t.length=Pe+Ee.length,r=0;r<Ee.length;r++)t[Pe+r]=Ee[r];else e.deps=t=Ee;if(Ti()&&(e.f&je)!==0)for(r=Pe;r<t.length;r++)((i=t[r]).reactions??(i.reactions=[])).push(e)}else!n&&t!==null&&Pe<t.length&&(Fn(e,Pe),t.length=Pe);return t}function Ua(e,t){let n=t.reactions;if(n!==null){var r=Fo.call(n,e);if(r!==-1){var i=n.length-1;i===0?n=t.reactions=null:(n[r]=n[i],n.pop())}}if(n===null&&(t.f&ue)!==0&&(Ee===null||!kr.call(Ee,t))){var s=t;(s.f&je)!==0&&(s.f^=je,s.f&=~Ht),s.v!==re&&wi(s),s.ac!==null&&bn(()=>{s.ac.abort(fr),s.ac=null,ne(s,oe)}),xa(s),Fn(s,0)}}function Fn(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Ua(e,n[r])}function pn(e){var t=e.f;if((t&Te)===0){ne(e,se);var n=L,r=$r;L=e,$r=(t&(Ve|pt))===0;try{(t&(Ye|gi))!==0?Ba(e):Ni(e),Gs(e);var i=to(e);e.teardown=typeof i=="function"?i:null,e.wv=Xs;var s}finally{$r=r,L=n}}}async function qa(){await Promise.resolve(),Pa()}function v(e){var t=e.f,n=(t&ue)!==0;if(D!==null&&!Je){var r=L!==null&&(L.f&Te)!==0;if(!r&&(ut===null||!ut.has(e))){var i=D.deps;if((D.f&Tr)!==0)e.rv<Ot&&(e.rv=Ot,Ee===null&&i!==null&&i[Pe]===e?Pe++:Ee===null?Ee=[e]:Ee.push(e));else{D.deps??(D.deps=[]),kr.call(D.deps,e)||D.deps.push(e);var s=e.reactions;s===null?e.reactions=[D]:kr.call(s,D)||s.push(D)}}}if(gt&&lt.has(e))return lt.get(e);if(n){var o=e;if(gt){var a=o.v;return((o.f&se)===0&&o.reactions!==null||ro(o))&&(a=Si(o)),lt.set(o,a),a}var l=(o.f&je)===0&&!Je&&D!==null&&($r||(D.f&je)!==0),c=(o.f&gn)===0;pr(o)&&(l&&(o.f|=je),As(o)),l&&!c&&(Ps(o),no(o))}if(ce!=null&&ce.has(e))return ce.get(e);if((e.f&kt)!==0)throw e.v;return e.v}function no(e){if(e.f|=je,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&ue)!==0&&(t.f&je)===0&&(Ps(t),no(t))}function ro(e){if(e.v===re)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(lt.has(t)||(t.f&ue)!==0&&ro(t))return!0;return!1}function mt(e){var t=Je;try{return Je=!0,e()}finally{Je=t}}function Mt(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(at in e)oi(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&at in n&&oi(n)}}}function oi(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{oi(e[r],t)}catch{}const n=_i(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=ds(n);for(let i in r){const s=r[i].get;if(s)try{s.call(e)}catch{}}}}}function Ga(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Wa=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Ya(e){return Wa.includes(e)}const Ja={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Za(e){return e=e.toLowerCase(),Ja[e]??e}const Xa=["touchstart","touchmove"];function Qa(e){return Xa.includes(e)}const Rt=Symbol("events"),io=new Set,ai=new Set;function so(e,t,n,r={}){function i(s){if(r.capture||ui.call(t,s),!s.cancelBubble)return bn(()=>n==null?void 0:n.call(this,s))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?st(()=>{t.addEventListener(e,i,r)}):t.addEventListener(e,i,r),i}function li(e,t,n,r,i){var s={capture:r,passive:i},o=so(e,t,n,s);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&zr(()=>{t.removeEventListener(e,o,s)})}function U(e,t,n){(t[Rt]??(t[Rt]={}))[e]=n}function wn(e){for(var t=0;t<e.length;t++)io.add(e[t]);for(var n of ai)n(e)}let Kr=null,Ur=!1;function ui(e){var m,g;var t=this,n=t.ownerDocument,r=e.type,i=((m=e.composedPath)==null?void 0:m.call(e))||[],s=i[0]||e.target;Kr=e,Ur||(Ur=!0,setTimeout(()=>{Ur=!1,Kr=null}));var o=0,a=Kr===e&&e[Rt];if(a){var l=i.indexOf(a);if(l!==-1&&(t===document||t===window)){e[Rt]=t;return}var c=i.indexOf(t);if(c===-1)return;l<=c&&(o=l)}if(s=i[o]||e.target,s!==t){fs(e,"currentTarget",{configurable:!0,get(){return s||n}});var d=D,_=L;Be(null),He(null);try{for(var f,h=[];s!==null&&s!==t;){try{var p=(g=s[Rt])==null?void 0:g[r];p!=null&&(!s.disabled||e.target===s)&&p.call(s,e)}catch($){f?h.push($):f=$}if(e.cancelBubble)break;o++,s=o<i.length?i[o]:null}if(f){for(let $ of h)queueMicrotask(()=>{throw $});throw f}}finally{e[Rt]=t,delete e.currentTarget,Be(d),He(_)}}}var us;const qr=((us=globalThis==null?void 0:globalThis.window)==null?void 0:us.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function el(e){return(qr==null?void 0:qr.createHTML(e))??e}function oo(e){var t=Ci("template");return t.innerHTML=el(e.replaceAll("<!>","<!---->")),t.content}function Dn(e,t){var n=L;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function q(e,t){var n=(t&ea)!==0,r=(t&ta)!==0,i,s=!e.startsWith("<!>");return()=>{i===void 0&&(i=oo(s?e:"<!>"+e),n||(i=Ut(i)));var o=r||js?document.importNode(i,!0):i.cloneNode(!0);if(n){var a=Ut(o),l=o.lastChild;Dn(a,l)}else Dn(o,o);return o}}function tl(e,t,n="svg"){var r=!e.startsWith("<!>"),i=`<${n}>${r?e:"<!>"+e}</${n}>`,s;return()=>{if(!s){var o=oo(i),a=Ut(o);s=Ut(a)}var l=s.cloneNode(!0);return Dn(l,l),l}}function nl(e,t){return tl(e,t,"svg")}function X(){var e=document.createDocumentFragment(),t=document.createComment(""),n=vt();return e.append(t,n),Dn(t,n),e}function A(e,t){e!==null&&e.before(t)}function rl(e){let t=0,n=_t(0),r;return()=>{Ti()&&(v(n),xi(()=>(t===0&&(r=mt(()=>e(()=>zn(n)))),t+=1,()=>{st(()=>{t-=1,t===0&&(r==null||r(),r=void 0,zn(n))})})))}}var il=Et|mn;function sl(e,t,n,r){new ol(e,t,n,r)}var Le,pi,Fe,Ft,pe,xe,_e,Ne,tt,Dt,$t,cn,Bn,Hn,ht,Mr,G,al,ll,ci,ul,fi,Mn,Sr,di,hi;class ol{constructor(t,n,r,i){S(this,G);ve(this,"parent");ve(this,"is_pending",!1);ve(this,"transform_error");S(this,Le);S(this,pi,null);S(this,Fe);S(this,Ft);S(this,pe);S(this,xe,null);S(this,_e,null);S(this,Ne,null);S(this,tt,null);S(this,Dt,0);S(this,$t,0);S(this,cn,!1);S(this,Bn,new Set);S(this,Hn,new Set);S(this,ht,null);S(this,Mr,rl(()=>(O(this,ht,_t(u(this,Dt))),()=>{O(this,ht,null)})));var s;O(this,Le,t),O(this,Fe,n),O(this,Ft,o=>{var a=L;a.b=this,a.f|=Qr,r(o)}),this.parent=L.b,this.transform_error=i??((s=this.parent)==null?void 0:s.transform_error)??(o=>o),O(this,pe,vr(()=>{j(this,G,fi).call(this)},il))}defer_effect(t){Es(t,u(this,Bn),u(this,Hn))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,Fe).pending}update_pending_count(t,n){j(this,G,di).call(this,t,n),O(this,Dt,u(this,Dt)+t),!(!u(this,ht)||u(this,cn))&&(O(this,cn,!0),st(()=>{O(this,cn,!1),u(this,ht)&&vn(u(this,ht),u(this,Dt))}))}get_effect_pending(){return u(this,Mr).call(this),v(u(this,ht))}error(t){if(!u(this,Fe).onerror&&!u(this,Fe).failed)throw t;C!=null&&C.is_fork?(u(this,xe)&&C.skip_effect(u(this,xe)),u(this,_e)&&C.skip_effect(u(this,_e)),u(this,Ne)&&C.skip_effect(u(this,Ne)),C.oncommit(()=>{j(this,G,hi).call(this,t)})):j(this,G,hi).call(this,t)}}Le=new WeakMap,pi=new WeakMap,Fe=new WeakMap,Ft=new WeakMap,pe=new WeakMap,xe=new WeakMap,_e=new WeakMap,Ne=new WeakMap,tt=new WeakMap,Dt=new WeakMap,$t=new WeakMap,cn=new WeakMap,Bn=new WeakMap,Hn=new WeakMap,ht=new WeakMap,Mr=new WeakMap,G=new WeakSet,al=function(){try{O(this,xe,ke(()=>u(this,Ft).call(this,u(this,Le))))}catch(t){this.error(t)}},ll=function(t){const n=u(this,Fe).failed,{reset:r,invoke_onerror:i}=j(this,G,ci).call(this,t);st(i),n&&O(this,Ne,ke(()=>{n(u(this,Le),()=>t,()=>r)}))},ci=function(t){var n=!1,r=!1;const i=()=>{if(n){oa();return}n=!0,r&&ma(),u(this,Ne)!==null&&Vt(u(this,Ne),()=>{O(this,Ne,null)}),j(this,G,Sr).call(this,()=>{j(this,G,fi).call(this)})};return{reset:i,invoke_onerror:()=>{var o,a;try{r=!0,(a=(o=u(this,Fe)).onerror)==null||a.call(o,t,i),r=!1}catch(l){rt(l,u(this,pe)&&u(this,pe).parent)}}}},ul=function(){const t=u(this,Fe).pending;t&&(this.is_pending=!0,O(this,_e,ke(()=>t(u(this,Le)))),st(()=>{var n=O(this,tt,document.createDocumentFragment()),r=vt(),i=!1;if(n.append(r),O(this,xe,j(this,G,Sr).call(this,()=>{try{return ke(()=>u(this,Ft).call(this,r))}catch(s){try{this.error(s),i=!0}catch(o){rt(o,u(this,pe).parent)}return null}})),u(this,xe)===null){O(this,tt,null),i&&j(this,G,Mn).call(this,C);return}u(this,$t)===0&&(u(this,Le).before(n),O(this,tt,null),Vt(u(this,_e),()=>{O(this,_e,null)}),j(this,G,Mn).call(this,C))}))},fi=function(){try{if(this.is_pending=this.has_pending_snippet(),O(this,$t,0),O(this,Dt,0),O(this,xe,ke(()=>{u(this,Ft).call(this,u(this,Le))})),u(this,$t)>0){var t=O(this,tt,document.createDocumentFragment());Ai(u(this,xe),t);const n=u(this,Fe).pending;O(this,_e,ke(()=>n(u(this,Le))))}else j(this,G,Mn).call(this,C)}catch(n){this.error(n)}},Mn=function(t){this.is_pending=!1,t.transfer_effects(u(this,Bn),u(this,Hn))},Sr=function(t){var n=L,r=D,i=W;He(u(this,pe)),Be(u(this,pe)),dn(u(this,pe).ctx);try{return Kt.ensure(),t()}finally{He(n),Be(r),dn(i)}},di=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&j(r=this.parent,G,di).call(r,t,n);return}O(this,$t,u(this,$t)+t),u(this,$t)===0&&(j(this,G,Mn).call(this,n),u(this,_e)&&Vt(u(this,_e),()=>{O(this,_e,null)}),u(this,tt)&&(u(this,Le).before(u(this,tt)),O(this,tt,null)))},hi=function(t){u(this,xe)&&(fe(u(this,xe)),O(this,xe,null)),u(this,_e)&&(fe(u(this,_e)),O(this,_e,null)),u(this,Ne)&&(fe(u(this,Ne)),O(this,Ne,null));let n=u(this,Fe).failed;const r=i=>{const{reset:s,invoke_onerror:o}=j(this,G,ci).call(this,i);o(),n&&O(this,Ne,j(this,G,Sr).call(this,()=>{try{return ke(()=>{var a=L;a.b=this,a.f|=Qr,n(u(this,Le),()=>i,()=>s)})}catch(a){return rt(a,u(this,pe).parent),null}}))};st(()=>{var i;try{i=this.transform_error(t)}catch(s){rt(s,u(this,pe)&&u(this,pe).parent);return}i!==null&&typeof i=="object"&&typeof i.then=="function"?i.then(r,s=>rt(s,u(this,pe)&&u(this,pe).parent)):r(i)})};function me(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[xn]??(e[xn]=e.nodeValue))&&(e[xn]=n,e.nodeValue=`${n}`)}function cl(e,t){return fl(e,t)}const mr=new Map;function fl(e,{target:t,anchor:n,props:r={},events:i,context:s,intro:o=!0,transformError:a}){Ra();var l=void 0,c=ja(()=>{var d=n??t.appendChild(vt());sl(d,{pending:()=>{}},h=>{Ct({});var p=W;s&&(p.c=s),i&&(r.$$events=i),l=e(h,r)||bi(),Tt()},a);var _=new Set,f=h=>{for(var p=0;p<h.length;p++){var m=h[p];if(!_.has(m)){_.add(m);var g=Qa(m);for(const b of[t,document]){var $=mr.get(b);$===void 0&&($=new Map,mr.set(b,$));var T=$.get(m);T===void 0?(b.addEventListener(m,ui,{passive:g}),$.set(m,1)):$.set(m,T+1)}}}};return f(Rr(io)),ai.add(f),()=>{var g;for(var h of _)for(const $ of[t,document]){var p=mr.get($),m=p.get(h);--m==0?($.removeEventListener(h,ui),p.delete(h),p.size===0&&mr.delete($)):p.set(h,m)}ai.delete(f),d!==n&&((g=d.parentNode)==null||g.removeChild(d))}});return dl.set(l,c),l}let dl=new WeakMap;var We,nt,Ae,jt,Kn,Un,Ir;class Pi{constructor(t,n=!0){ve(this,"anchor");S(this,We,new Map);S(this,nt,new Map);S(this,Ae,new Map);S(this,jt,new Set);S(this,Kn,!0);S(this,Un,t=>{if(u(this,We).has(t)){var n=u(this,We).get(t),r=u(this,nt).get(n);if(r)Ar(r),u(this,jt).delete(n);else{var i=u(this,Ae).get(n);i&&(Ar(i.effect),u(this,nt).set(n,i.effect),u(this,Ae).delete(n),i.fragment.lastChild.remove(),this.anchor.before(i.fragment),r=i.effect)}for(const[s,o]of u(this,We)){if(u(this,We).delete(s),s===t)break;const a=u(this,Ae).get(o);a&&(fe(a.effect),u(this,Ae).delete(o))}for(const[s,o]of u(this,nt)){if(s===n||u(this,jt).has(s))continue;const a=()=>{if(Array.from(u(this,We).values()).includes(s)){var c=document.createDocumentFragment();Ai(o,c),c.append(vt()),u(this,Ae).set(s,{effect:o,fragment:c})}else fe(o);u(this,jt).delete(s),u(this,nt).delete(s)};u(this,Kn)||!r?(u(this,jt).add(s),Vt(o,a,!1)):a()}}});S(this,Ir,t=>{u(this,We).delete(t);const n=Array.from(u(this,We).values());for(const[r,i]of u(this,Ae))n.includes(r)||(fe(i.effect),u(this,Ae).delete(r))});this.anchor=t,O(this,Kn,n)}ensure(t,n){var r=C,i=Hs();if(n&&!u(this,nt).has(t)&&!u(this,Ae).has(t))if(i){var s=document.createDocumentFragment(),o=vt();s.append(o),u(this,Ae).set(t,{effect:ke(()=>n(o)),fragment:s})}else u(this,nt).set(t,ke(()=>n(this.anchor)));if(u(this,We).set(r,t),i){for(const[a,l]of u(this,nt))a===t?r.unskip_effect(l):r.skip_effect(l);for(const[a,l]of u(this,Ae))a===t?r.unskip_effect(l.effect):r.skip_effect(l.effect);r.oncommit(u(this,Un)),r.ondiscard(u(this,Ir))}else u(this,Un).call(this,r)}}We=new WeakMap,nt=new WeakMap,Ae=new WeakMap,jt=new WeakMap,Kn=new WeakMap,Un=new WeakMap,Ir=new WeakMap;function Me(e,t,n=!1){var r=new Pi(e),i=n?Et:0;function s(o,a){r.ensure(o,a)}vr(()=>{var o=!1;t((a,l=0)=>{o=!0,s(l,a)}),o||s(-1,null)},i)}function hl(e,t){return t}function vl(e,t,n){for(var r=[],i=t.length,s,o=t.length,a=0;a<i;a++){let _=t[a];Vt(_,()=>{if(s){if(s.pending.delete(_),s.done.add(_),s.pending.size===0){var f=e.outrogroups;vi(e,Rr(s.done)),f.delete(s),f.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var l=r.length===0&&n!==null&&e.pending.size===0;if(l){var c=n,d=c.parentNode;za(d),d.append(c),e.items.clear()}vi(e,t,!l)}else s={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(s)}function vi(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const o of e.pending.values())for(const a of o)r.add(e.items.get(a).e)}for(var i=0;i<t.length;i++){var s=t[i];if(r!=null&&r.has(s)){s.f|=it;const o=document.createDocumentFragment();Ai(s,o)}else fe(t[i],n)}}var Zi;function qt(e,t,n,r,i,s=null){var o=e,a=new Map,l=(t&gs)!==0;if(l){var c=e;o=c.appendChild(vt())}var d=null,_=$i(()=>{var b=n();return Or(b)?b:b==null?[]:Rr(b)}),f,h=new Map,p=!0;function m(b){(T.effect.f&Te)===0&&(T.pending.delete(b),T.fallback=d,pl(T,f,o,t,r),d!==null&&(f.length===0?(d.f&it)===0?Ar(d):(d.f^=it,In(d,null,o)):Vt(d,()=>{d=null})))}function g(b){T.pending.delete(b)}var $=vr(()=>{f=v(_);for(var b=f.length,R=new Set,w=C,x=Hs(),z=0;z<b;z+=1){var Z=f[z],M=r(Z,z),k=p?null:a.get(M);k?(k.v&&vn(k.v,Z),k.i&&vn(k.i,z),x&&w.unskip_effect(k.e)):(k=_l(a,p?o:Zi??(Zi=vt()),Z,M,z,i,t,n),p||(k.e.f|=it),a.set(M,k)),R.add(M)}if(b===0&&s&&!d&&(p?d=ke(()=>s(o)):(d=ke(()=>s(Zi??(Zi=vt()))),d.f|=it)),b>R.size&&ua(),!p)if(h.set(w,R),x){for(const[B,V]of a)R.has(B)||w.skip_effect(V.e);w.oncommit(m),w.ondiscard(g)}else m(w);v(_)}),T={effect:$,items:a,pending:h,outrogroups:null,fallback:d};p=!1}function En(e){for(;e!==null&&(e.f&Ve)===0;)e=e.next;return e}function pl(e,t,n,r,i){var k,B,V,ae,be,we,Qe,Ke,ct;var s=(r&Wo)!==0,o=t.length,a=e.items,l=En(e.effect.first),c,d=null,_,f=[],h=[],p,m,g,$;if(s)for($=0;$<o;$+=1)p=t[$],m=i(p,$),g=a.get(m).e,(g.f&it)===0&&((B=(k=g.nodes)==null?void 0:k.a)==null||B.measure(),(_??(_=new Set)).add(g));for($=0;$<o;$+=1){if(p=t[$],m=i(p,$),g=a.get(m).e,e.outrogroups!==null)for(const le of e.outrogroups)le.pending.delete(g),le.done.delete(g);if((g.f&ye)!==0&&(Ar(g),s&&((ae=(V=g.nodes)==null?void 0:V.a)==null||ae.unfix(),(_??(_=new Set)).delete(g))),(g.f&it)!==0)if(g.f^=it,g===l)In(g,null,n);else{var T=d?d.next:l;g===e.effect.last&&(e.effect.last=g.prev),g.prev&&(g.prev.next=g.next),g.next&&(g.next.prev=g.prev),bt(e,d,g),bt(e,g,T),In(g,T,n),d=g,f=[],h=[],l=En(d.next);continue}if(g!==l){if(c!==void 0&&c.has(g)){if(f.length<h.length){var b=h[0],R;d=b.prev;var w=f[0],x=f[f.length-1];for(R=0;R<f.length;R+=1)In(f[R],b,n);for(R=0;R<h.length;R+=1)c.delete(h[R]);bt(e,w.prev,x.next),bt(e,d,w),bt(e,x,b),l=b,d=x,$-=1,f=[],h=[]}else c.delete(g),In(g,l,n),bt(e,g.prev,g.next),bt(e,g,d===null?e.effect.first:d.next),bt(e,d,g),d=g;continue}for(f=[],h=[];l!==null&&l!==g;)(c??(c=new Set)).add(l),h.push(l),l=En(l.next);if(l===null)continue}(g.f&it)===0&&f.push(g),d=g,l=En(g.next)}if(e.outrogroups!==null){for(const le of e.outrogroups)le.pending.size===0&&(vi(e,Rr(le.done)),(be=e.outrogroups)==null||be.delete(le));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||c!==void 0){var z=[];if(c!==void 0)for(g of c)(g.f&ye)===0&&z.push(g);for(;l!==null;)(l.f&ye)===0&&l!==e.fallback&&z.push(l),l=En(l.next);var Z=z.length;if(Z>0){var M=(r&gs)!==0&&o===0?n:null;if(s){for($=0;$<Z;$+=1)(Qe=(we=z[$].nodes)==null?void 0:we.a)==null||Qe.measure();for($=0;$<Z;$+=1)(ct=(Ke=z[$].nodes)==null?void 0:Ke.a)==null||ct.fix()}vl(e,z,M)}}s&&st(()=>{var le,xt;if(_!==void 0)for(g of _)(xt=(le=g.nodes)==null?void 0:le.a)==null||xt.apply()})}function _l(e,t,n,r,i,s,o,a){var l=(o&qo)!==0?(o&Yo)===0?Ia(n,!1,!1):_t(n):null,c=(o&Go)!==0?_t(i):null;return{v:l,i:c,e:ke(()=>(s(t,l??n,c??i,a),()=>{e.delete(r)}))}}function In(e,t,n){if(e.nodes)for(var r=e.nodes.start,i=e.nodes.end,s=t&&(t.f&it)===0?t.nodes.start:n;r!==null;){var o=hr(r);if(s.before(r),r===i)return;r=o}}function bt(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function Q(e,t,n,r,i){var a,l;if((a=t.$$host)!=null&&a.$$shadowRoot){const c=Ci("slot");A(e,c);return}var s=(l=t.$$slots)==null?void 0:l[n],o=!1;s===!0&&(s=t.children,o=!0),s===void 0||s(e,o?()=>r:r)}function gl(e,t,n){var r=new Pi(e);vr(()=>{var i=t()??null;r.ensure(i,i&&(s=>n(s,i)))},Et)}function ml(e,t,n,r,i,s){var o=null,a=e,l=new Pi(a,!1);vr(()=>{const c=t()||null;var d=na;if(c===null){l.ensure(null,null);return}return l.ensure(c,_=>{if(c){if(o=Ci(c,d),Dn(o,o),r){var f=null,h=o.appendChild(vt());r(o,h),f==null||f.remove()}L.nodes.end=o,_.before(o)}}),()=>{}},Et),zr(()=>{})}function yl(e,t){var n=void 0,r;qs(()=>{n!==(n=t())&&(r&&(fe(r),r=null),n&&(r=ke(()=>{Lr(()=>n(e))})))})}function ao(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=ao(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function bl(){for(var e,t,n=0,r="",i=arguments.length;n<i;n++)(e=arguments[n])&&(t=ao(e))&&(r&&(r+=" "),r+=t);return r}function wl(e){return typeof e=="object"?bl(e):e??""}const Xi=[...` 	
\r\f \v\uFEFF`];function $l(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var i of Object.keys(n))if(n[i])r=r?r+" "+i:i;else if(r.length)for(var s=i.length,o=0;(o=r.indexOf(i,o))>=0;){var a=o+s;(o===0||Xi.includes(r[o-1]))&&(a===r.length||Xi.includes(r[a]))?r=(o===0?"":r.substring(0,o))+r.substring(a+1):o=a}}return r===""?null:r}function Qi(e,t=!1){var n=t?" !important;":";",r="";for(var i of Object.keys(e)){var s=e[i];s!=null&&s!==""&&(r+=" "+i+": "+s+n)}return r}function Gr(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Sl(e,t){if(t){var n="",r,i;if(Array.isArray(t)?(r=t[0],i=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var s=!1,o=0,a=!1,l=[];r&&l.push(...Object.keys(r).map(Gr)),i&&l.push(...Object.keys(i).map(Gr));var c=0,d=-1;const m=e.length;for(var _=0;_<m;_++){var f=e[_];if(a?f==="/"&&e[_-1]==="*"&&(a=!1):s?s===f&&(s=!1):f==="/"&&e[_+1]==="*"?a=!0:f==='"'||f==="'"?s=f:f==="("?o++:f===")"&&o--,!a&&s===!1&&o===0){if(f===":"&&d===-1)d=_;else if(f===";"||_===m-1){if(d!==-1){var h=Gr(e.substring(c,d).trim());if(!l.includes(h)){f!==";"&&_++;var p=e.substring(c,_).trim();n+=" "+p+";"}}c=_+1,d=-1}}}}return r&&(n+=Qi(r)),i&&(n+=Qi(i,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function tn(e,t,n,r,i,s){var o=e[ei];if(o!==n||o===void 0){var a=$l(n,r,s);a==null?e.removeAttribute("class"):t?e.className=a:e.setAttribute("class",a),e[ei]=n}else if(s&&i!==s)for(var l in s){var c=!!s[l];(i==null||c!==!!i[l])&&e.classList.toggle(l,c)}return s}function Wr(e,t={},n,r){for(var i in n){var s=n[i];t[i]!==s&&(n[i]==null?e.style.removeProperty(i):e.style.setProperty(i,s,r))}}function kl(e,t,n,r){var i=e[ti];if(i!==t){var s=Sl(t,r);s==null?e.removeAttribute("style"):e.style.cssText=s,e[ti]=t}else r&&(Array.isArray(r)?(Wr(e,n==null?void 0:n[0],r[0]),Wr(e,n==null?void 0:n[1],r[1],"important")):Wr(e,n,r));return r}function lo(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function es(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,uo(e,!n||"__value"in e))}function uo(e,t){var n=e.__defaultValue,r=e.multiple,i=r?n??[]:null;if(!(r&&!Or(i))){var s=e.selectedIndex,o=t&&r?new Set(e.selectedOptions):null;for(var a of e.options){var l=nn(a);lo(a,r?i.includes(l):Ds(l,n))}if(t)if(o!==null)for(a of e.options){var c=o.has(a);a.selected!==c&&(a.selected=c)}else e.selectedIndex!==s&&(e.selectedIndex=s)}}function _n(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Or(t))return sa();for(var r of e.options)r.selected=t.includes(nn(r));return}for(r of e.options){var i=nn(r);if(Ds(i,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function jn(e){var t=new MutationObserver(n=>{n.every(El)||("__defaultValue"in e&&uo(e,!1),"__value"in e&&_n(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),zr(()=>{t.disconnect()})}function co(e,t,n=t){var r=new WeakSet,i=!0;Cs(e,"change",s=>{var o=s?"[selected]":":checked",a;if(e.multiple)a=[].map.call(e.querySelectorAll(o),nn);else{var l=e.querySelector(o)??e.querySelector("option:not([disabled])");a=l&&nn(l)}n(a),e.__value=a,C!==null&&r.add(C)}),Lr(()=>{var s=t();if(e===document.activeElement){var o=C;if(r.has(o))return}if(_n(e,s,i),i&&s===void 0){var a=e.querySelector(":checked");a!==null&&(s=nn(a),n(s))}e.__value=s,i=!1})}function nn(e){return"__value"in e?e.__value:e.value}function El(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const Cn=Symbol("class"),Tn=Symbol("style"),fo=Symbol("is custom element"),ho=Symbol("is html"),Cl=yi?"input":"INPUT",Tl=yi?"option":"OPTION",vo=yi?"select":"SELECT";function ot(e,t,n,r){var i=po(e);i[t]!==(i[t]=n)&&(t==="loading"&&(e[Uo]=n),n==null?e.removeAttribute(t):typeof n!="string"&&_o(e).has(t)?e[t]=n:e.setAttribute(t,n))}function xl(e,t,n,r,i=!1,s=!1){var o=po(e),a=o[fo],l=!o[ho],c=t||{},d=e.nodeName===Tl,_=e.nodeName===vo;for(var f in t)!(f in n)&&f[0]+f[1]!=="$$"&&(n[f]=null);n.class?n.class=wl(n.class):n[Cn]&&(n.class=null),n[Tn]&&(n.style??(n.style=null));var h=_o(e);if(e.nodeName===Cl&&"type"in n&&("value"in n||"__value"in n)){var p=n.type;(p!==c.type||p===void 0&&e.hasAttribute("type"))&&(c.type=p,ot(e,"type",p))}for(const w in n){let x=n[w];if(d&&w==="value"&&x==null){e.value=e.__value="",c[w]=x;continue}if(w==="class"){var m=e.namespaceURI==="http://www.w3.org/1999/xhtml";tn(e,m,x,r,t==null?void 0:t[Cn],n[Cn]),c[w]=x,c[Cn]=n[Cn];continue}if(w==="style"){kl(e,x,t==null?void 0:t[Tn],n[Tn]),c[w]=x,c[Tn]=n[Tn];continue}var g=c[w];if(!(x===g&&!(x===void 0&&e.hasAttribute(w)))){c[w]=x;var $=w[0]+w[1];if($!=="$$")if($==="on"){const z={},Z="$$"+w;let M=w.slice(2);var T=Ya(M);if(Ga(M)&&(M=M.slice(0,-7),z.capture=!0),!T&&g){if(x!=null)continue;e.removeEventListener(M,c[Z],z),c[Z]=null}if(T)U(M,e,x),wn([M]);else if(x!=null){let k=function(B){c[w].call(this,B)};c[Z]=so(M,e,k,z)}}else if(w==="style")ot(e,w,x);else if(w==="autofocus")Sa(e,!!x);else if(!a&&(w==="__value"||w==="value"&&x!=null))e.value=e.__value=x;else if(w==="selected"&&d)lo(e,x);else{var b=w;l||(b=Za(b));var R=b==="defaultValue"||b==="defaultChecked";if(_&&b==="defaultValue")continue;if(x==null&&!a&&!R)if(o[w]=null,b==="value"||b==="checked"){let z=e;const Z=t===void 0;if(b==="value"){let M=z.defaultValue;z.removeAttribute(b),z.defaultValue=M,z.value=z.__value=Z?M:null}else{let M=z.defaultChecked;z.removeAttribute(b),z.defaultChecked=M,z.checked=Z?M:!1}}else e.removeAttribute(w);else R||(a||typeof x!="string")&&h.has(b)?(e[b]=x,b in o&&(o[b]=re)):typeof x!="function"&&ot(e,b,x)}}}return c}function ts(e,t,n=[],r=[],i=[],s,o=!1,a=!1){Ts(i,n,r,l=>{var c=void 0,d={},_=e.nodeName===vo,f=!1;if(qs(()=>{var p=t(...l.map(v)),m=xl(e,c,p,s,o,a);if(f&&_){var g=e;"defaultValue"in p&&es(g,p.defaultValue),"value"in p&&_n(g,p.value)}for(let T of Object.getOwnPropertySymbols(d))p[T]||fe(d[T]);for(let T of Object.getOwnPropertySymbols(p)){var $=p[T];T.description===ra&&(!c||$!==c[T])&&(d[T]&&fe(d[T]),d[T]=ke(()=>yl(e,()=>$))),m[T]=$}c=m}),_){var h=e;Lr(()=>{var p=c;"defaultValue"in p&&es(h,p.defaultValue),_n(h,p.value,!0),jn(h)})}f=!0})}function po(e){return e[yr]??(e[yr]={[fo]:e.nodeName.includes("-"),[ho]:e.namespaceURI===ys})}var ns=new Map;function _o(e){var t=e.getAttribute("is")||e.nodeName,n=ns.get(t);if(n)return n;ns.set(t,n=new Set);for(var r,i=e,s=Element.prototype;s!==i;){r=ds(i);for(var o in r)r[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&n.add(o);i=_i(i)}return n}function Ie(e,t,n=t){var r=new WeakSet;Cs(e,"input",async i=>{var s=i?e.defaultValue:e.value;if(s=Yr(e)?Jr(s):s,n(s),C!==null&&r.add(C),await qa(),s!==(s=t())){var o=e.selectionStart,a=e.selectionEnd,l=e.value.length;if(e.value=s??"",a!==null){var c=e.value.length;o===a&&a===l&&c>l?(e.selectionStart=c,e.selectionEnd=c):(e.selectionStart=o,e.selectionEnd=Math.min(a,c))}}}),mt(t)==null&&e.value&&(n(Yr(e)?Jr(e.value):e.value),C!==null&&r.add(C)),xi(()=>{var i=t();if(e===document.activeElement){var s=C;if(r.has(s))return}Yr(e)&&i===Jr(e.value)||e.type==="date"&&!i&&!e.value||i!==e.value&&(e.value=i??"")})}function Yr(e){var t=e.type;return t==="number"||t==="range"}function Jr(e){return e===""?null:+e}function Zr(e,t){return e===t||(e==null?void 0:e[at])===t}function Nl(e=bi(),t,n,r){var i=W.r,s=L;return Lr(()=>{var o,a;return xi(()=>{o=a,a=[],mt(()=>{Zr(n(...a),e)||(t(e,...a),o&&Zr(n(...o),e)&&t(null,...o))})}),()=>{let l=s;for(;l!==i&&l.parent!==null&&l.parent.f&Er;)l=l.parent;const c=()=>{a&&Zr(n(...a),e)&&t(null,...a)},d=l.teardown;l.teardown=()=>{c(),d==null||d()}}}),e}function go(e=!1){const t=W,n=t.l.u;if(!n)return;let r=()=>Mt(t.s);if(e){let i=0,s={};const o=hn(()=>{let a=!1;const l=t.s;for(const c in l)l[c]!==s[c]&&(s[c]=l[c],a=!0);return a&&i++,i});r=()=>v(o)}n.b.length&&Da(()=>{rs(t,r),Xr(n.b)}),Ln(()=>{const i=mt(()=>n.m.map(Bo));return()=>{for(const s of i)typeof s=="function"&&s()}}),n.a.length&&Ln(()=>{rs(t,r),Xr(n.a)})}function rs(e,t){if(e.l.s)for(const n of e.l.s)v(n);t()}function Al(e){var t=_t(0);return function(){return arguments.length===1?(N(t,v(t)+1),arguments[0]):(v(t),e())}}const Pl={get(e,t){if(!e.exclude.includes(t))return v(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=L;try{He(e.parent_effect),e.special[t]=Oe({get[t](){return e.props[t]}},t,ms)}finally{He(r)}}return e.special[t](n),qi(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),qi(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function Y(e,t){return new Proxy({props:e,exclude:t,special:{},version:_t(0),parent_effect:L},Pl)}const Ml={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(kn(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let i=e.props[r];kn(i)&&(i=i());const s=St(i,t);if(s&&s.set)return s.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(kn(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const i=St(r,t);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,t){if(t===at||t===_s)return!1;for(let n of e.props)if(kn(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(kn(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function ee(...e){return new Proxy({props:e},Ml)}function Oe(e,t,n,r){var R;var i=!yn||(n&Zo)!==0,s=(n&Xo)!==0,o=(n&Qo)!==0,a=r,l=!0,c=void 0,d=()=>o&&i?(c??(c=hn(r)),v(c)):(l&&(l=!1,a=o?mt(r):r),a);let _;if(s){var f=at in e||_s in e;_=((R=St(e,t))==null?void 0:R.set)??(f&&t in e?w=>e[t]=w:void 0)}var h,p=!1;s?[h,p]=$a(()=>e[t]):h=e[t],h===void 0&&r!==void 0&&(h=d(),_&&(i&&va(),_(h)));var m;if(i?m=()=>{var w=e[t];return w===void 0?d():(l=!0,w)}:m=()=>{var w=e[t];return w!==void 0&&(a=void 0),w===void 0?a:w},i&&(n&ms)===0)return m;if(_){var g=e.$$legacy;return(function(w,x){return arguments.length>0?((!i||!x||g||p)&&_(x?m():w),w):m()})}var $=!1,T=((n&Jo)!==0?hn:$i)(()=>($=!1,m()));s&&v(T);var b=L;return(function(w,x){if(arguments.length>0){const z=x?v(T):i&&s?ge(w):w;return N(T,z),$=!0,a!==void 0&&(a=z),w}return gt&&$||(b.f&Te)!==0?T.v:v(T)})}function Mi(e){W===null&&$s(),yn&&W.l!==null?Ol(W).m.push(e):Ln(()=>{const t=mt(e);if(typeof t=="function")return t})}function Il(e){W===null&&$s(),Mi(()=>()=>mt(e))}function Ol(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Rl="5";var cs;typeof window<"u"&&((cs=window.__svelte??(window.__svelte={})).v??(cs.v=new Set)).add(Rl);const zl=()=>window.__IDE_BOOTSTRAP__||{};function Ll(e){const{rootPath:t="",session:n=""}=zl();return`${t}/api/sessions/${encodeURIComponent(n)}/ide${e}`}async function $e(e,t={}){const n=await fetch(Ll(e),t),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Request failed");return r}const Re=(e,t)=>`/ssh-connections/${encodeURIComponent(e)}${t}`,he={listConnections:()=>$e("/ssh-connections"),createConnection:e=>$e("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),deleteConnection:e=>$e(Re(e,""),{method:"DELETE"}),connect:(e,t)=>$e(Re(e,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t||""})}),status:e=>$e(Re(e,"/status?reconnect=1")),listFiles:(e,t)=>$e(Re(e,`/files?path=${encodeURIComponent(t)}`)),searchFiles:(e,t,n)=>$e(Re(e,`/files/search?path=${encodeURIComponent(t)}&query=${encodeURIComponent(n)}`)),readFile:(e,t)=>$e(Re(e,`/file?path=${encodeURIComponent(t)}`)),saveFile:(e,t,n)=>$e(Re(e,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t,content:n})}),fs:(e,t)=>$e(Re(e,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),git:(e,t)=>$e(Re(e,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),focusTerminal:e=>$e(Re(e,"/focus-terminal"),{method:"POST"}),getWorkspace:e=>$e(Re(e,"/workspace")),saveWorkspace:(e,t)=>$e(Re(e,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})};var qn,Gn,Wn,Yn,Jn,Zn,Xn,Qn,er,tr,nr,rr,ir,sr,or,ar,lr,ur;class Fl{constructor(){S(this,qn,F(ge([])));S(this,Gn,F(""));S(this,Wn,F("idle"));S(this,Yn,F("Ready"));S(this,Jn,F("No file open"));S(this,Zn,F("."));S(this,Xn,F(ge([])));S(this,Qn,F(ge({})));S(this,er,F(ge({})));S(this,tr,F(""));S(this,nr,F(ge([])));S(this,rr,F(""));S(this,ir,F(""));S(this,sr,F(ge([])));S(this,or,F(""));S(this,ar,F("codex"));S(this,lr,F(ge([])));S(this,ur,F(!1));ve(this,"restoredKey","");ve(this,"persistTimer",null)}get connections(){return v(u(this,qn))}set connections(t){N(u(this,qn),t,!0)}get connectionId(){return v(u(this,Gn))}set connectionId(t){N(u(this,Gn),t,!0)}get connectionState(){return v(u(this,Wn))}set connectionState(t){N(u(this,Wn),t,!0)}get statusText(){return v(u(this,Yn))}set statusText(t){N(u(this,Yn),t,!0)}get detailText(){return v(u(this,Jn))}set detailText(t){N(u(this,Jn),t,!0)}get path(){return v(u(this,Zn))}set path(t){N(u(this,Zn),t,!0)}get entries(){return v(u(this,Xn))}set entries(t){N(u(this,Xn),t,!0)}get expanded(){return v(u(this,Qn))}set expanded(t){N(u(this,Qn),t,!0)}get treeChildren(){return v(u(this,er))}set treeChildren(t){N(u(this,er),t,!0)}get filter(){return v(u(this,tr))}set filter(t){N(u(this,tr),t,!0)}get tabs(){return v(u(this,nr))}set tabs(t){N(u(this,nr),t,!0)}get activeKey(){return v(u(this,rr))}set activeKey(t){N(u(this,rr),t,!0)}get gitOutput(){return v(u(this,ir))}set gitOutput(t){N(u(this,ir),t,!0)}get gitBranches(){return v(u(this,sr))}set gitBranches(t){N(u(this,sr),t,!0)}get gitBranch(){return v(u(this,or))}set gitBranch(t){N(u(this,or),t,!0)}get chatProvider(){return v(u(this,ar))}set chatProvider(t){N(u(this,ar),t,!0)}get chatMessages(){return v(u(this,lr))}set chatMessages(t){N(u(this,lr),t,!0)}get chatBusy(){return v(u(this,ur))}set chatBusy(t){N(u(this,ur),t,!0)}get connection(){return this.connections.find(t=>t.id===this.connectionId)||null}get activeTab(){return this.tabs.find(t=>t.key===this.activeKey)||null}get visibleEntries(){const t=this.filter.trim().toLowerCase();return t?this.entries.filter(n=>n.name.toLowerCase().includes(t)):this.entries}get dirtyCount(){return this.tabs.filter(t=>t.dirty).length}setStatus(t,n){this.statusText=t,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const t=await he.listConnections();this.connections=t.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(t){this.setStatus(t.message||"Could not load connections")}}async refreshStatus(){var t,n,r;if(this.connectionId)try{const i=await he.status(this.connectionId);i.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((t=this.connection)==null?void 0:t.label)||"SSH workspace"}`,`SSH terminal: ${i.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(i){this.connectionState="error",this.setStatus(i.message||"Could not check SSH connection")}}async connect(t){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await he.connect(this.connectionId,t);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect")}}}async refreshFiles(t){if(!this.connectionId)return;const n=t||this.path||".";try{const r=await he.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async toggleDirectory(t){if(this.expanded[t]){const n={...this.expanded};delete n[t],this.expanded=n;return}if(this.expanded={...this.expanded,[t]:!0},!this.treeChildren[t])try{const n=await he.listFiles(this.connectionId,t);this.treeChildren={...this.treeChildren,[t]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}async openFile(t){if(!this.connectionId)return null;const n=`${this.connectionId}|${t}`,r=this.tabs.find(i=>i.key===n);if(r)return this.activeKey=n,r;try{const i=await he.readFile(this.connectionId,t),s={key:`${this.connectionId}|${i.path}`,path:i.path,content:i.content||"",saved:i.content||"",dirty:!1};return this.tabs=[...this.tabs,s],this.activeKey=s.key,this.setStatus("Opened",s.path),this.remember(),s}catch(i){return this.setStatus(i.message||"Could not open remote file"),null}}updateContent(t,n){this.tabs=this.tabs.map(r=>r.key===t?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(t){var r;const n=this.tabs.find(i=>i.key===t);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(i=>i.key!==t),this.activeKey===t&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const t=this.activeTab;if(t)try{await he.saveFile(this.connectionId,t.path,t.content),this.tabs=this.tabs.map(n=>n.key===t.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${t.path}`,t.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const t=`${this.connectionId}`;if(!t)return;let n=null;try{n=await he.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===t)return;this.restoredKey=t;const r=(n==null?void 0:n.buffers)||{};for(const s of((n==null?void 0:n.tabs)||[]).slice(0,12)){const o=await this.openFile(s);o&&Object.prototype.hasOwnProperty.call(r,s)&&this.updateContent(o.key,r[s])}const i=this.tabs.find(s=>s.path===(n==null?void 0:n.active_path));i&&(this.activeKey=i.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const t={};for(const r of this.tabs)r.dirty&&(t[r.path]=r.content);try{await he.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:t})}catch{}}async runGit(t,n={}){try{const r=await he.git(this.connectionId,{action:t,path:this.path||".",...n});return this.gitOutput=r.output||r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",r}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}qn=new WeakMap,Gn=new WeakMap,Wn=new WeakMap,Yn=new WeakMap,Jn=new WeakMap,Zn=new WeakMap,Xn=new WeakMap,Qn=new WeakMap,er=new WeakMap,tr=new WeakMap,nr=new WeakMap,rr=new WeakMap,ir=new WeakMap,sr=new WeakMap,or=new WeakMap,ar=new WeakMap,lr=new WeakMap,ur=new WeakMap;const y=new Fl;ya();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Dl={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const jl=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const is=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var Vl=nl("<svg><!><!></svg>");function te(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]),r=Y(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);Ct(t,!1);let i=Oe(t,"name",8,void 0),s=Oe(t,"color",8,"currentColor"),o=Oe(t,"size",8,24),a=Oe(t,"strokeWidth",8,2),l=Oe(t,"absoluteStrokeWidth",8,!1),c=Oe(t,"iconNode",24,()=>[]);go();var d=Vl();ts(d,(h,p,m)=>({...Dl,...h,...r,width:o(),height:o(),stroke:s(),"stroke-width":p,class:m}),[()=>jl(r)?void 0:{"aria-hidden":"true"},()=>(Mt(l()),Mt(a()),Mt(o()),mt(()=>l()?Number(a())*24/Number(o()):a())),()=>(Mt(is),Mt(i()),Mt(n),mt(()=>is("lucide-icon","lucide",i()?`lucide-${i()}`:"",n.class)))]);var _=P(d);qt(_,1,c,hl,(h,p)=>{var m=Ns(()=>Ho(v(p),2));let g=()=>v(m)[0],$=()=>v(m)[1];var T=X(),b=J(T);ml(b,g,!0,(R,w)=>{ts(R,()=>({...$()}))}),A(h,T)});var f=E(_);Q(f,t,"default",{}),A(e,d),Tt()}function Bl(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];te(e,ee({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function ss(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];te(e,ee({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function Hl(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];te(e,ee({name:"circle-check"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function Kl(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];te(e,ee({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function Ul(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];te(e,ee({name:"circle"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function ql(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12.1",cy:"12.1",r:"1"}]];te(e,ee({name:"dot"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function Gl(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];te(e,ee({name:"file-diff"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function Wl(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M14 19h6"}],["path",{d:"M17 16v6"}]];te(e,ee({name:"file-plus-corner"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function Yl(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];te(e,ee({name:"file-plus"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function Jl(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];te(e,ee({name:"file"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function Zl(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];te(e,ee({name:"files"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function Xl(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];te(e,ee({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function Ql(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];te(e,ee({name:"folder"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function eu(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]];te(e,ee({name:"git-branch-plus"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function tu(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];te(e,ee({name:"git-branch"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function nu(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]];te(e,ee({name:"git-commit-vertical"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function ru(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];te(e,ee({name:"link-2"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function iu(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"}],["path",{d:"m15 5 4 4"}]];te(e,ee({name:"pencil"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function su(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];te(e,ee({name:"plus"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function mo(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];te(e,ee({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function ou(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];te(e,ee({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function yo(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];te(e,ee({name:"trash-2"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}function au(e,t){const n=Y(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];te(e,ee({name:"x"},()=>n,{get iconNode(){return r},children:(i,s)=>{var o=X(),a=J(o);Q(a,t,"default",{}),A(i,o)},$$slots:{default:!0}}))}var lu=q('<form class="create svelte-15hitxw"><input class="svelte-15hitxw"/> <button type="submit" class="svelte-15hitxw">Add</button></form>'),uu=q('<li class="svelte-15hitxw"><button><span class="icon svelte-15hitxw"><!></span> <span class="name svelte-15hitxw"> </span></button> <span class="actions svelte-15hitxw"><button title="Rename" class="svelte-15hitxw"><!></button> <button title="Delete" class="svelte-15hitxw"><!></button></span></li>'),cu=q('<li class="empty svelte-15hitxw">No files here</li>'),fu=q('<div class="explorer svelte-15hitxw"><div class="toolbar svelte-15hitxw"><button title="Up one folder" aria-label="Up one folder" class="svelte-15hitxw"><!></button> <span class="path svelte-15hitxw"> </span> <button title="New file" aria-label="New file" class="svelte-15hitxw"><!></button> <button title="New folder" aria-label="New folder" class="svelte-15hitxw"><!></button> <button title="Refresh" aria-label="Refresh" class="svelte-15hitxw"><!></button></div> <input class="filter svelte-15hitxw" placeholder="Filter files…"/> <!> <ul class="entries svelte-15hitxw"></ul></div>');function du(e,t){Ct(t,!0);let n=F(""),r=F("");const i=M=>{const k=(M||".").split("/").filter(B=>B&&B!==".");return k.pop(),k.length?k.join("/"):"."},s=(M,k)=>M==="."?k:`${M}/${k}`;async function o(M){M.preventDefault();const k=v(r).trim();if(k)try{await he.fs(y.connectionId,{action:v(n)==="dir"?"create_dir":"create_file",path:s(y.path,k)}),N(n,""),N(r,""),await y.refreshFiles()}catch(B){y.setStatus(B.message||"Could not create")}}async function a(M){const k=s(y.path,M.name);if(confirm(`Delete ${k}? Folders must already be empty.`))try{await he.fs(y.connectionId,{action:"delete",path:k}),await y.refreshFiles()}catch(B){y.setStatus(B.message||"Could not delete")}}async function l(M){const k=s(y.path,M.name),B=prompt("Rename to (relative path):",k);if(!(!B||B===k))try{await he.fs(y.connectionId,{action:"rename",path:k,new_path:B}),await y.refreshFiles()}catch(V){y.setStatus(V.message||"Could not rename")}}var c=fu(),d=P(c),_=P(d),f=P(_);Bl(f,{size:14});var h=E(_,2),p=De(h,!0),m=E(h,2),g=P(m);Yl(g,{size:14});var $=E(m,2),T=P($);Xl(T,{size:14});var b=E($,2),R=P(b);mo(R,{size:14});var w=E(d,2),x=E(w,2);{var z=M=>{var k=lu(),B=P(k);Ce(()=>ot(B,"placeholder",v(n)==="dir"?"New folder name":"New file name")),li("submit",k,o),U("keydown",B,V=>{V.key==="Escape"&&N(n,"")}),Ie(B,()=>v(r),V=>N(r,V)),A(M,k)};Me(x,M=>{v(n)&&M(z)})}var Z=E(x,2);qt(Z,21,()=>y.visibleEntries,M=>M.name,(M,k)=>{var B=uu(),V=P(B);let ae;var be=P(V),we=P(be);{var Qe=Ue=>{Ql(Ue,{size:14})},Ke=Ue=>{ru(Ue,{size:14})},ct=Ue=>{Jl(Ue,{size:14})};Me(we,Ue=>{v(k).is_dir?Ue(Qe):v(k).is_symlink?Ue(Ke,1):Ue(ct,-1)})}var le=E(be,2),xt=De(le,!0),Gt=E(V,2),Nt=P(Gt),Fr=P(Nt);iu(Fr,{size:13});var At=E(Nt,2),_r=P(At);yo(_r,{size:13}),Ce(()=>{ae=tn(V,1,"entry svelte-15hitxw",null,ae,{dir:v(k).is_dir}),me(xt,v(k).name),ot(Nt,"aria-label",`Rename ${v(k).name??""}`),ot(At,"aria-label",`Delete ${v(k).name??""}`)}),U("dblclick",V,()=>v(k).is_dir&&y.refreshFiles(s(y.path,v(k).name))),U("click",V,()=>!v(k).is_dir&&y.openFile(s(y.path,v(k).name))),U("click",Nt,()=>l(v(k))),U("click",At,()=>a(v(k))),A(M,B)},M=>{var k=cu();A(M,k)}),Ce(()=>{ot(h,"title",y.path),me(p,y.path)}),U("click",_,()=>y.refreshFiles(i(y.path))),U("click",m,()=>{N(n,"file"),N(r,"")}),U("click",$,()=>{N(n,"dir"),N(r,"")}),U("click",b,()=>y.refreshFiles()),Ie(w,()=>y.filter,M=>y.filter=M),A(e,c),Tt()}wn(["click","keydown","dblclick"]);var hu=q('<div class="branch svelte-1skdisl">On <strong> </strong></div>'),vu=q("<option> </option>"),pu=q('<select class="svelte-1skdisl"></select>'),_u=q('<div class="git svelte-1skdisl"><div class="row svelte-1skdisl"><button class="svelte-1skdisl"><!> Status</button> <button class="svelte-1skdisl"><!> Diff</button> <button class="svelte-1skdisl"><!> Stage all</button></div> <!> <!> <div class="row svelte-1skdisl"><input placeholder="New branch…" class="svelte-1skdisl"/> <button class="svelte-1skdisl"><!> Create</button></div> <div class="row svelte-1skdisl"><input placeholder="Commit message…" class="svelte-1skdisl"/> <button class="svelte-1skdisl"><!> Commit</button></div> <pre class="output svelte-1skdisl"> </pre></div>');function gu(e,t){Ct(t,!0);let n=F(""),r=F("");async function i(){if(!v(n).trim())return;await y.runGit("commit",{message:v(n).trim()})&&N(n,"")}async function s(){if(!v(r).trim())return;await y.runGit("create_branch",{branch:v(r).trim()})&&N(r,"")}var o=_u(),a=P(o),l=P(a),c=P(l);mo(c,{size:13});var d=E(l,2),_=P(d);Gl(_,{size:13});var f=E(d,2),h=P(f);Wl(h,{size:13});var p=E(a,2);{var m=V=>{var ae=hu(),be=E(P(ae)),we=De(be,!0);Ce(()=>me(we,y.gitBranch)),A(V,ae)};Me(p,V=>{y.gitBranch&&V(m)})}var g=E(p,2);{var $=V=>{var ae=pu();qt(ae,20,()=>y.gitBranches,we=>we,(we,Qe)=>{var Ke=vu(),ct=De(Ke,!0),le={};Ce(()=>{me(ct,Qe),le!==(le=Qe)&&(Ke.value=(Ke.__value=le)??"")}),A(we,Ke)});var be;jn(ae),Ce(()=>{be!==(be=y.gitBranch)&&(ae.value=(ae.__value=be)??"",_n(ae,be))}),U("change",ae,we=>y.runGit("switch",{branch:we.currentTarget.value})),A(V,ae)};Me(g,V=>{y.gitBranches.length&&V($)})}var T=E(g,2),b=P(T),R=E(b,2),w=P(R);eu(w,{size:13});var x=E(T,2),z=P(x),Z=E(z,2),M=P(Z);nu(M,{size:13});var k=E(x,2),B=De(k,!0);Ce(()=>me(B,y.gitOutput||"No git output yet.")),U("click",l,()=>y.runGit("status")),U("click",d,()=>y.runGit("diff")),U("click",f,()=>y.runGit("stage",{files:["."]})),Ie(b,()=>v(r),V=>N(r,V)),U("click",R,s),Ie(z,()=>v(n),V=>N(n,V)),U("click",Z,i),A(e,o),Tt()}wn(["click","change"]);const mu="modulepreload",yu=function(e,t){return new URL(e,t).href},os={},bu=function(t,n,r){let i=Promise.resolve();if(n&&n.length>0){let o=function(d){return Promise.all(d.map(_=>Promise.resolve(_).then(f=>({status:"fulfilled",value:f}),f=>({status:"rejected",reason:f}))))};const a=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=o(n.map(d=>{if(d=yu(d,r),d in os)return;os[d]=!0;const _=d.endsWith(".css"),f=_?'[rel="stylesheet"]':"";if(!!r)for(let m=a.length-1;m>=0;m--){const g=a[m];if(g.href===d&&(!_||g.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${f}`))return;const p=document.createElement("link");if(p.rel=_?"stylesheet":mu,_||(p.as="script"),p.crossOrigin="",p.href=d,c&&p.setAttribute("nonce",c),document.head.appendChild(p),_)return new Promise((m,g)=>{p.addEventListener("load",m),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${d}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return i.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return t().catch(s)})},wu={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},$u={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function Su(e){var n;const t=(e||"").split("/").pop()||"";return t.toLowerCase()==="dockerfile"?"dockerfile":t.toLowerCase()==="makefile"?"shell":$u[(n=t.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var ku=q('<div class="editor svelte-1h8xysy"></div>');function Eu(e,t){Ct(t,!0);let n,r=null,i=null,s="",o=!1;Mi(async()=>{i=await bu(()=>import("./ide-monaco.js").then(l=>l.a),__vite__mapDeps([0,1]),import.meta.url),i.editor.defineTheme("monokai",wu),r=i.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{o||!s||y.updateContent(s,r.getValue())}),r.addCommand(i.KeyMod.CtrlCmd|i.KeyCode.KeyS,()=>y.saveActive())}),Il(()=>r==null?void 0:r.dispose()),Ln(()=>{const l=y.activeTab;if(!(!r||!i)){if(!l){o=!0,r.setValue(""),s="",o=!1;return}if(l.key!==s){o=!0;const c=i.editor.createModel(l.content,Su(l.path)),d=r.getModel();r.setModel(c),d==null||d.dispose(),s=l.key,o=!1}else r.getValue()!==l.content&&(o=!0,r.setValue(l.content),o=!1)}});var a=ku();Nl(a,l=>n=l,()=>n),A(e,a),Tt()}var Zt=Al(()=>y),Cu=q('<span class="dot svelte-p0uzej" title="Unsaved changes"><!></span>'),Tu=q('<div><button class="label svelte-p0uzej" role="tab"><!> </button> <button class="close svelte-p0uzej" title="Close"><!></button></div>'),xu=q('<div class="hint svelte-p0uzej">Open a file from the explorer</div>'),Nu=q('<div class="tabs svelte-p0uzej" role="tablist"></div>');function Au(e,t){Ct(t,!1);const n=i=>i.split("/").pop();go();var r=Nu();qt(r,5,()=>Zt().tabs,i=>i.key,(i,s)=>{var o=Tu();let a;var l=P(o),c=P(l);{var d=p=>{var m=Cu(),g=P(m);ql(g,{size:16}),A(p,m)};Me(c,p=>{v(s).dirty&&p(d)})}var _=E(c),f=E(l,2),h=P(f);au(h,{size:13}),Ce((p,m)=>{a=tn(o,1,"tab svelte-p0uzej",null,a,{active:v(s).key===Zt().activeKey}),ot(l,"aria-selected",v(s).key===Zt().activeKey),ot(l,"title",v(s).path),me(_,` ${p??""}`),ot(f,"aria-label",`Close ${m??""}`)},[()=>n(v(s).path),()=>n(v(s).path)]),U("click",l,()=>Zt(Zt().activeKey=v(s).key)),U("click",f,()=>Zt().closeTab(v(s).key)),A(i,o)},i=>{var s=xu();A(i,s)}),A(e,r),Tt()}wn(["click"]);var Pu=q("<option> </option>"),Mu=q('<div class="msg user svelte-1roe1v9"><div class="meta svelte-1roe1v9"> </div> </div>'),Iu=q(`<p class="empty svelte-1roe1v9">Ask about the active remote file. The prompt is delivered to the selected
        agent session — pick a Codex session or a Claude session to choose which
        assistant answers. Replies appear in that session's pane.</p>`),Ou=q('<div class="chat svelte-1roe1v9"><div class="head svelte-1roe1v9"><span class="title svelte-1roe1v9">AI chat</span> <select title="Agent session to send to" class="svelte-1roe1v9"></select></div> <div class="messages svelte-1roe1v9"></div> <div class="compose svelte-1roe1v9"><textarea placeholder="Ask about the active remote file… (⌘/Ctrl+Enter to send)" class="svelte-1roe1v9"></textarea> <button class="svelte-1roe1v9"> </button></div></div>');function Ru(e,t){Ct(t,!0);let n=Oe(t,"sessions",19,()=>[]),r=Oe(t,"session",3,""),i=Oe(t,"rootPath",3,""),s=F(""),o=F(ge(r())),a=F(!1);Ln(()=>{!v(o)&&r()&&N(o,r())});function l(){const b=y.connection||{},R=y.activeTab,w=R?R.path:y.path||".",x=R?`
Active file contents (first 12,000 characters):
${R.content.slice(0,12e3)}`:"";return`[Remote SSH IDE context]
SSH target: ${b.username||"?"}@${b.host||"?"}
Remote path: ${w}${x}

${v(s).trim()}`}async function c(){const b=v(s).trim();if(!b||!v(o)||v(a))return;const R=l();N(a,!0);try{const w=await fetch(`${i()}/api/sessions/${encodeURIComponent(v(o))}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:R})}),x=await w.json().catch(()=>({}));if(!w.ok)throw new Error(x.error||"Could not send");y.chatMessages=[...y.chatMessages,{role:"user",text:b,target:v(o),at:Date.now()}],N(s,"")}catch(w){y.setStatus(w.message||"Could not send prompt")}finally{N(a,!1)}}function d(b){b.key==="Enter"&&(b.metaKey||b.ctrlKey)&&(b.preventDefault(),c())}var _=Ou(),f=P(_),h=E(P(f),2);qt(h,20,n,b=>b,(b,R)=>{var w=Pu(),x=De(w,!0),z={};Ce(()=>{me(x,R),z!==(z=R)&&(w.value=(w.__value=z)??"")}),A(b,w)}),jn(h);var p=E(f,2);qt(p,21,()=>y.chatMessages,b=>b.at,(b,R)=>{var w=Mu(),x=P(w),z=De(x),Z=E(x);Ce(()=>{me(z,`→ ${v(R).target??""}`),me(Z,` ${v(R).text??""}`)}),A(b,w)},b=>{var R=Iu();A(b,R)});var m=E(p,2),g=P(m),$=E(g,2),T=De($,!0);Ce(b=>{$.disabled=b,me(T,v(a)?"Sending…":"Send")},[()=>v(a)||!v(s).trim()]),co(h,()=>v(o),b=>N(o,b)),U("keydown",g,d),Ie(g,()=>v(s),b=>N(s,b)),U("click",$,c),A(e,_),Tt()}wn(["keydown","click"]);var zu=q("<option> </option>"),Lu=q('<button title="Delete connection" aria-label="Delete connection" class="svelte-1iy7iaf"><!></button>'),Fu=q('<input class="pw svelte-1iy7iaf" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),Du=q('<!> <button class="primary svelte-1iy7iaf">Connect</button>',1),ju=q('<button title="Focus the tmux SSH window" class="svelte-1iy7iaf"><!> Terminal</button>'),Vu=q('<input placeholder="~/.ssh/id_ed25519" class="svelte-1iy7iaf"/>'),Bu=q('<input type="password" placeholder="Password" autocomplete="new-password" class="svelte-1iy7iaf"/>'),Hu=q('<form class="connform svelte-1iy7iaf"><input placeholder="Label" class="svelte-1iy7iaf"/> <input placeholder="Host" required="" class="svelte-1iy7iaf"/> <input placeholder="User" required="" class="svelte-1iy7iaf"/> <input placeholder="Port" type="number" min="1" max="65535" class="svelte-1iy7iaf"/> <select class="svelte-1iy7iaf"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!> <input placeholder="Workspace root" class="svelte-1iy7iaf"/> <button class="primary svelte-1iy7iaf" type="submit">Create</button> <button type="button" class="svelte-1iy7iaf">Cancel</button></form>'),Ku=q('<span class="dirty svelte-1iy7iaf"> </span>'),Uu=q('<div class="ide svelte-1iy7iaf"><header class="topbar svelte-1iy7iaf"><span class="brand svelte-1iy7iaf">Remote SSH IDE</span> <select title="SSH connection" class="svelte-1iy7iaf"><option>— select connection —</option><!></select> <button class="svelte-1iy7iaf"><!> Add</button> <!> <span><!> </span> <!></header> <!> <div class="main svelte-1iy7iaf"><aside class="sidebar svelte-1iy7iaf"><div class="switch svelte-1iy7iaf"><button><!> Files</button> <button><!> Git</button></div> <!></aside> <section class="code svelte-1iy7iaf"><!> <div class="editor-wrap svelte-1iy7iaf"><!></div></section> <aside class="chat-pane svelte-1iy7iaf"><!></aside></div> <footer class="statusbar svelte-1iy7iaf"><span> </span> <span class="detail svelte-1iy7iaf"> </span> <!></footer></div>');function qu(e,t){Ct(t,!0);let n=Oe(t,"sessions",19,()=>[]),r=Oe(t,"session",3,""),i=Oe(t,"rootPath",3,""),s=F("files"),o=F(!1),a=F(""),l=F(ge({label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",workspace_root:".",max_file_bytes:1e6}));const c={idle:{icon:Ul,label:"Not connected"},connecting:{icon:Kl,label:"Connecting…"},connected:{icon:Hl,label:"Connected"},reconnect:{icon:ss,label:"Reconnect required"},error:{icon:ss,label:"Error"}},d=Ns(()=>c[y.connectionState].icon);Mi(async()=>{await y.loadConnections(),y.connectionId&&await y.refreshStatus()});async function _(I){y.connectionId=I.currentTarget.value,y.tabs=[],y.activeKey="",y.restoredKey="",await y.refreshStatus()}async function f(I){I.preventDefault();try{const H=await he.createConnection({...v(l),port:Number(v(l).port)});N(o,!1),N(l,{...v(l),label:"",host:"",username:"",password:""},!0),await y.loadConnections(),y.connectionId=H.connection.id,await y.refreshStatus()}catch(H){y.setStatus(H.message||"Could not create connection")}}async function h(){const I=y.connection;if(I&&confirm(`Delete connection "${I.label}"? Stored credentials and saved tabs are removed.`))try{await he.deleteConnection(I.id),y.connectionId="",y.tabs=[],await y.loadConnections()}catch(H){y.setStatus(H.message||"Could not delete connection")}}async function p(){try{const I=await he.focusTerminal(y.connectionId);y.setStatus(`Focused ${I.window_name}`,"tmux SSH window selected")}catch(I){y.setStatus(I.message||"Could not focus terminal")}}function m(I){(I.ctrlKey||I.metaKey)&&I.key.toLowerCase()==="s"&&(I.preventDefault(),y.saveActive())}var g=Uu();li("keydown",si,m);var $=P(g),T=E(P($),2),b=P(T);b.value=b.__value="";var R=E(b);qt(R,17,()=>y.connections,I=>I.id,(I,H)=>{var de=zu(),Wt=De(de,!0),yt={};Ce(()=>{me(Wt,v(H).label),yt!==(yt=v(H).id)&&(de.value=(de.__value=yt)??"")}),A(I,de)});var w;jn(T);var x=E(T,2),z=P(x);su(z,{size:14});var Z=E(x,2);{var M=I=>{var H=Lu(),de=P(H);yo(de,{size:14}),U("click",H,h),A(I,H)};Me(Z,I=>{y.connection&&I(M)})}var k=E(Z,2),B=P(k);gl(B,()=>v(d),(I,H)=>{H(I,{size:13})});var V=E(B),ae=E(k,2);{var be=I=>{var H=Du(),de=J(H);{var Wt=Yt=>{var Pt=Fu();Ie(Pt,()=>v(a),$n=>N(a,$n)),A(Yt,Pt)};Me(de,Yt=>{y.connection&&!y.connection.has_password&&Yt(Wt)})}var yt=E(de,2);U("click",yt,()=>y.connect(v(a))),A(I,H)},we=I=>{var H=ju(),de=P(H);ou(de,{size:14}),U("click",H,p),A(I,H)};Me(ae,I=>{y.connectionState!=="connected"?I(be):I(we,-1)})}var Qe=E($,2);{var Ke=I=>{var H=Hu(),de=P(H),Wt=E(de,2),yt=E(Wt,2),Yt=E(yt,2),Pt=E(Yt,2),$n=P(Pt);$n.value=$n.__value="agent";var Dr=E($n);Dr.value=Dr.__value="key";var Li=E(Dr);Li.value=Li.__value="password",jn(Pt);var Fi=E(Pt,2);{var Io=ie=>{var Sn=Vu();Ie(Sn,()=>v(l).identity_file,jr=>v(l).identity_file=jr),A(ie,Sn)};Me(Fi,ie=>{v(l).auth_mode==="key"&&ie(Io)})}var Di=E(Fi,2);{var Oo=ie=>{var Sn=Bu();Ie(Sn,()=>v(l).password,jr=>v(l).password=jr),A(ie,Sn)};Me(Di,ie=>{v(l).auth_mode==="password"&&ie(Oo)})}var ji=E(Di,2),Ro=E(ji,4);li("submit",H,f),Ie(de,()=>v(l).label,ie=>v(l).label=ie),Ie(Wt,()=>v(l).host,ie=>v(l).host=ie),Ie(yt,()=>v(l).username,ie=>v(l).username=ie),Ie(Yt,()=>v(l).port,ie=>v(l).port=ie),co(Pt,()=>v(l).auth_mode,ie=>v(l).auth_mode=ie),Ie(ji,()=>v(l).workspace_root,ie=>v(l).workspace_root=ie),U("click",Ro,()=>N(o,!1)),A(I,H)};Me(Qe,I=>{v(o)&&I(Ke)})}var ct=E(Qe,2),le=P(ct),xt=P(le),Gt=P(xt);let Nt;var Fr=P(Gt);Zl(Fr,{size:13});var At=E(Gt,2);let _r;var Ue=P(At);tu(Ue,{size:13});var wo=E(xt,2);{var $o=I=>{du(I,{})},So=I=>{gu(I,{})};Me(wo,I=>{v(s)==="files"?I($o):I(So,-1)})}var Ii=E(le,2),Oi=P(Ii);Au(Oi,{});var ko=E(Oi,2),Eo=P(ko);Eu(Eo,{});var Co=E(Ii,2),To=P(Co);Ru(To,{get sessions(){return n()},get session(){return r()},get rootPath(){return i()}});var xo=E(ct,2),Ri=P(xo),No=De(Ri,!0),zi=E(Ri,2),Ao=De(zi,!0),Po=E(zi,2);{var Mo=I=>{var H=Ku(),de=De(H);Ce(()=>me(de,`${y.dirtyCount??""} unsaved`)),A(I,H)};Me(Po,I=>{y.dirtyCount&&I(Mo)})}Ce(()=>{w!==(w=y.connectionId)&&(T.value=(T.__value=w)??"",_n(T,w)),tn(k,1,`state ${y.connectionState??""}`,"svelte-1iy7iaf"),me(V,` ${c[y.connectionState].label??""}`),Nt=tn(Gt,1,"svelte-1iy7iaf",null,Nt,{active:v(s)==="files"}),_r=tn(At,1,"svelte-1iy7iaf",null,_r,{active:v(s)==="git"}),me(No,y.statusText),me(Ao,y.detailText)}),U("change",T,_),U("click",x,()=>N(o,!v(o))),U("click",Gt,()=>N(s,"files")),U("click",At,()=>N(s,"git")),A(e,g),Tt()}wn(["change","click"]);function bo(e,t){return cl(qu,{target:e,props:t})}function as(){const e=document.getElementById("ide-root");if(!e||e.dataset.mounted)return;e.dataset.mounted="1";const t=window.__IDE_BOOTSTRAP__||{};bo(e,{sessions:t.sessions||[],session:t.session||"",rootPath:t.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",as):as();window.mountRemoteIde=bo;export{bu as _};
