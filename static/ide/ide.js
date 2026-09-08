const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css","./ide3.css"])))=>i.map(i=>d[i]);
var Xl=Object.defineProperty;var Qo=e=>{throw TypeError(e)};var Zl=(e,t,n)=>t in e?Xl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var _t=(e,t,n)=>Zl(e,typeof t!="symbol"?t+"":t,n),no=(e,t,n)=>t.has(e)||Qo("Cannot "+n);var f=(e,t,n)=>(no(e,t,"read from private field"),n?n.call(e):t.get(e)),G=(e,t,n)=>t.has(e)?Qo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),he=(e,t,n,r)=>(no(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),ke=(e,t,n)=>(no(e,t,"access private method"),n);var Wa=Array.isArray,Ql=Array.prototype.indexOf,Oa=Array.prototype.includes,qa=Array.from,Ii=Object.defineProperty,tr=Object.getOwnPropertyDescriptor,Oi=Object.getOwnPropertyDescriptors,ec=Object.prototype,tc=Array.prototype,Ro=Object.getPrototypeOf,ei=Object.isExtensible;function Cs(e){return typeof e=="function"}const nc=()=>{};function rc(e){return e()}function mo(e){for(var t=0;t<e.length;t++)e[t]()}function Ri(){var e,t,n=new Promise((r,s)=>{e=r,t=s});return{promise:n,resolve:e,reject:t}}function sc(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const st=2,Qr=4,ba=8,Do=1<<24,cn=16,Xt=32,Fn=64,bo=128,Lo=256,Jt=512,tt=1024,nt=2048,vn=4096,yt=8192,zt=16384,as=32768,Ra=1<<25,rr=65536,Da=1<<17,ac=1<<18,os=1<<19,Di=1<<20,wn=1<<25,$r=65536,La=1<<21,Kr=1<<22,nr=1<<23,Sn=Symbol("$state"),Li=Symbol("component"),Fi=Symbol("legacy props"),oc=Symbol(""),Ea=Symbol("attributes"),xo=Symbol("class"),yo=Symbol("style"),Ps=Symbol("text"),Ta=Symbol("form reset"),xa=new class extends Error{constructor(){super(...arguments);_t(this,"name","StaleReactionError");_t(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var Mi;const Fo=!!((Mi=globalThis.document)!=null&&Mi.contentType)&&globalThis.document.contentType.includes("xml"),ic=1,lc=2,ji=4,cc=8,uc=16,dc=1,fc=2,Hi=4,vc=8,pc=16,hc=1,gc=2,et=Symbol("uninitialized"),Bi="http://www.w3.org/1999/xhtml",Vi="http://www.w3.org/2000/svg",_c="http://www.w3.org/1998/Math/MathML",mc="@attach";function bc(){console.warn("https://svelte.dev/e/derived_inert")}function xc(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function yc(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Ki(e){return e===this.v}function wc(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ui(e){return!wc(e,this.v)}function Wi(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function kc(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function $c(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Sc(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Cc(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Ec(e){throw new Error("https://svelte.dev/e/effect_orphan")}function Tc(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Nc(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Pc(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Mc(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function zc(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Ac(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let is=!1;function Ic(){is=!0}let Fe=null;function es(e){Fe=e}function wt(e,t=!1,n){Fe={p:Fe,i:!1,c:null,e:null,s:e,x:null,r:me,l:is&&!t?{s:null,u:null,$:[]}:null}}function kt(e){var t=Fe,n=t.e;if(n!==null){t.e=null;for(var r of n)hl(r)}return t.i=!0,Fe=t.p,jo(e)}function jo(e={}){return Ii(e,Li,{value:!0}),e}function ls(){return!is||Fe!==null&&Fe.l===null}let vr=[];function qi(){var e=vr;vr=[],mo(e)}function kn(e){if(vr.length===0&&!Fs){var t=vr;queueMicrotask(()=>{t===vr&&qi()})}vr.push(e)}function Oc(){for(;vr.length>0;)qi()}const Rc=-7169;function Ve(e,t){e.f=e.f&Rc|t}function Ho(e){(e.f&Jt)!==0||e.deps===null?Ve(e,tt):Ve(e,vn)}function Gi(e){if(e!==null)for(const t of e)(t.f&st)===0||(t.f&$r)===0||(t.f^=$r,Gi(t.deps))}function Yi(e,t,n){(e.f&nt)!==0?t.add(e):(e.f&vn)!==0&&n.add(e),Gi(e.deps),Ve(e,tt)}let Sa=!1;function Dc(e){var t=Sa;try{return Sa=!1,[e(),Sa]}finally{Sa=t}}function Ji(e,t){if(t){const n=document.body;e.autofocus=!0,kn(()=>{document.activeElement===n&&e.focus()})}}let ti=!1;function Lc(){ti||(ti=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[Ta])==null||t.call(n)})},{capture:!0}))}function cs(e){var t=xe,n=me;Zt(null),Qt(null);try{return e()}finally{Zt(t),Qt(n)}}function Xi(e,t,n,r=n){e.addEventListener(t,()=>cs(n));const s=e[Ta];s?e[Ta]=()=>{s(),r(!0)}:e[Ta]=()=>r(!0),Lc()}function Zi(e,t,n,r){const s=ls()?ts:Bo;var i=e.filter($=>!$.settled),o=t.map(s);if(n.length===0&&i.length===0){r(o);return}var l=me,c=Fc(),h=i.length===1?i[0].promise:i.length>1?Promise.all(i.map($=>$.promise)):null;function g($){if((l.f&zt)===0){c();try{r([...o,...$])}catch(S){yn(S,l)}Fa()}}var w=Qi();if(n.length===0){h.then(()=>g([])).finally(w);return}function _(){Promise.all(n.map($=>jc($))).then(g).catch($=>yn($,l)).finally(w)}h?h.then(()=>{c(),_(),Fa()}):_()}function Fc(){var e=me,t=xe,n=Fe,r=ae;return function(i=!0){Qt(e),Zt(t),es(n),i&&(e.f&zt)===0&&(r==null||r.activate(),r==null||r.apply())}}function Fa(e=!0){Qt(null),Zt(null),es(null),e&&(ae==null||ae.deactivate())}function Qi(){var e=me,t=e.b,n=ae,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function ts(e){var t=st|nt;return me!==null&&(me.f|=os),{ctx:Fe,deps:null,effects:null,equals:Ki,f:t,fn:e,reactions:null,rv:0,v:et,wv:0,parent:me,ac:null}}const Ms=Symbol("obsolete");function jc(e,t,n){let r=me;r===null&&kc();var s=void 0,i=jn(et),o=!xe,l=new Set;return tu(()=>{var $,S;var c=me,h=Ri();s=h.promise;try{Promise.resolve(e()).then(h.resolve,y=>{y!==xa&&h.reject(y)}).finally(Fa)}catch(y){h.reject(y),Fa()}var g=ae;if(o){if((c.f&as)!==0)var w=Qi();if(($=r.b)!=null&&$.is_rendered())(S=g.async_deriveds.get(c))==null||S.reject(Ms);else for(const y of l.values())y.reject(Ms);l.add(h),g.async_deriveds.set(c,h)}const _=(y,T=void 0)=>{w==null||w(),l.delete(h),T!==Ms&&(g.activate(),T?(i.f|=nr,ns(i,T)):((i.f&nr)!==0&&(i.f^=nr),ns(i,y)),g.deactivate())};h.promise.then(_,y=>_(null,y||"unknown"))}),Ya(()=>{for(const c of l)c.reject(Ms)}),new Promise(c=>{function h(g){function w(){g===s?c(i):h(s)}g.then(w,w)}h(s)})}function lt(e){const t=ts(e);return wl(t),t}function Bo(e){const t=ts(e);return t.equals=Ui,t}function Hc(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)ut(t[n])}}function Vo(e){var t,n=me,r=e.parent;if(!Hn&&r!==null&&e.v!==et&&(r.f&(zt|yt))!==0)return bc(),e.v;Qt(r);try{e.f&=~$r,Hc(e),t=Cl(e)}finally{Qt(n)}return t}function el(e){var t=Vo(e);if(!e.equals(t)&&(e.wv=$l(),(!(ae!=null&&ae.is_fork)||e.deps===null)&&(ae!==null?(ae.capture(e,t,!0),Ls==null||Ls.capture(e,t,!0)):e.v=t,e.deps===null))){Ve(e,tt);return}Hn||(it!==null?(Wo()||ae!=null&&ae.is_fork)&&it.set(e,t):Ho(e))}function Bc(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&cs(()=>{n.ac.abort(xa),n.ac=null}),n.fn!==null&&(n.teardown=nc),Bs(n,0),Go(n))}function tl(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&rs(t)}let ro=null,Hr=null,ae=null,Ls=null,it=null,wo=null,Fs=!1,so=!1,Vr=null,Na=null;var ni=0;let Vc=1;var Wr,Qn,gr,qr,Gr,Yr,Rn,Jr,Nt,Ks,Dn,on,mn,Xr,_r,Ae,ko,zs,$o,nl,rl,Br,Kc,As;const Va=class Va{constructor(){G(this,Ae);_t(this,"id",Vc++);G(this,Wr,!1);_t(this,"linked",!0);G(this,Qn,null);G(this,gr,null);_t(this,"async_deriveds",new Map);_t(this,"current",new Map);_t(this,"previous",new Map);G(this,qr,new Set);G(this,Gr,new Set);G(this,Yr,0);G(this,Rn,new Map);G(this,Jr,null);G(this,Nt,[]);G(this,Ks,[]);G(this,Dn,new Set);G(this,on,new Set);G(this,mn,new Map);G(this,Xr,new Set);_t(this,"is_fork",!1);G(this,_r,!1);Hr===null?ro=Hr=this:(he(Hr,gr,this),he(this,Qn,Hr)),Hr=this}skip_effect(t){f(this,mn).has(t)||f(this,mn).set(t,{d:[],m:[]}),f(this,Xr).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=f(this,mn).get(t);if(r){f(this,mn).delete(t);for(var s of r.d)Ve(s,nt),n(s);for(s of r.m)Ve(s,vn),n(s)}f(this,Xr).add(t)}capture(t,n,r=!1){t.v!==et&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&nr)===0&&(this.current.set(t,[n,r]),it==null||it.set(t,n)),this.is_fork||(t.v=n)}activate(){ae=this}deactivate(){ae=null,it=null}flush(){try{so=!0,ae=this,ke(this,Ae,zs).call(this)}finally{ni=0,wo=null,Vr=null,Na=null,so=!1,ae=null,it=null,Cn.clear()}}discard(){var t;for(const n of f(this,Gr))n(this);f(this,Gr).clear();for(const n of this.async_deriveds.values())n.reject(Ms);ke(this,Ae,As).call(this),(t=f(this,Jr))==null||t.resolve()}register_created_effect(t){f(this,Ks).push(t)}increment(t,n){if(he(this,Yr,f(this,Yr)+1),t){let r=f(this,Rn).get(n)??0;f(this,Rn).set(n,r+1)}}decrement(t,n){if(he(this,Yr,f(this,Yr)-1),t){let r=f(this,Rn).get(n)??0;r===1?f(this,Rn).delete(n):f(this,Rn).set(n,r-1)}f(this,_r)||(he(this,_r,!0),kn(()=>{he(this,_r,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)f(this,Dn).add(r);for(const r of n)f(this,on).add(r);t.clear(),n.clear()}oncommit(t){f(this,qr).add(t)}ondiscard(t){f(this,Gr).add(t)}settled(){return(f(this,Jr)??he(this,Jr,Ri())).promise}static ensure(){if(ae===null){const t=ae=new Va;!so&&!Fs&&kn(()=>{f(t,Wr)||t.flush()})}return ae}apply(){{it=null;return}}schedule(t){var s;if(wo=t,(s=t.b)!=null&&s.is_pending&&(t.f&(Qr|ba|Do))!==0&&(t.f&as)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Vr!==null&&n===me&&(xe===null||(xe.f&st)===0))return;if((r&(Fn|Xt))!==0){if((r&tt)===0)return;n.f^=tt}}f(this,Nt).push(n)}};Wr=new WeakMap,Qn=new WeakMap,gr=new WeakMap,qr=new WeakMap,Gr=new WeakMap,Yr=new WeakMap,Rn=new WeakMap,Jr=new WeakMap,Nt=new WeakMap,Ks=new WeakMap,Dn=new WeakMap,on=new WeakMap,mn=new WeakMap,Xr=new WeakMap,_r=new WeakMap,Ae=new WeakSet,ko=function(){if(this.is_fork)return!0;for(const r of f(this,Rn).keys()){for(var t=r,n=!1;t.parent!==null;){if(f(this,mn).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},zs=function(){var c,h,g,w;he(this,Wr,!0),ni++>1e3&&(ke(this,Ae,As).call(this),Wc());for(const _ of f(this,Dn))f(this,on).delete(_),Ve(_,nt),this.schedule(_);for(const _ of f(this,on))Ve(_,vn),this.schedule(_);const t=f(this,Nt);he(this,Nt,[]),this.apply();var n=Vr=[],r=[],s=Na=[];for(const _ of t)try{ke(this,Ae,$o).call(this,_,n,r)}catch($){throw ol(_),ke(this,Ae,ko).call(this)||this.discard(),$}if(ae=null,s.length>0){var i=Va.ensure();for(const _ of s)i.schedule(_)}if(Vr=null,Na=null,ke(this,Ae,ko).call(this)){ke(this,Ae,Br).call(this,r),ke(this,Ae,Br).call(this,n);for(const[_,$]of f(this,mn))al(_,$);s.length>0&&ke(c=ae,Ae,zs).call(c);return}const o=ke(this,Ae,nl).call(this);if(o){ke(this,Ae,Br).call(this,r),ke(this,Ae,Br).call(this,n),ke(h=o,Ae,rl).call(h,this);return}f(this,Dn).clear(),f(this,on).clear();for(const _ of f(this,qr))_(this);f(this,qr).clear(),Ls=this,ri(r),ri(n),Ls=null,(g=f(this,Jr))==null||g.resolve();var l=ae;if(f(this,Yr)===0&&(f(this,Nt).length===0||l!==null)&&ke(this,Ae,As).call(this),f(this,Nt).length>0)if(l!==null){const _=l;f(_,Nt).push(...f(this,Nt).filter($=>!f(_,Nt).includes($)))}else l=this;l!==null&&(Cn.clear(),ke(w=l,Ae,zs).call(w))},$o=function(t,n,r){t.f^=tt;for(var s=t.first;s!==null;){var i=s.f,o=(i&(Xt|Fn))!==0,l=o&&(i&tt)!==0,c=l||(i&yt)!==0||f(this,mn).has(s);if(!c&&s.fn!==null){o?s.f^=tt:(i&Qr)!==0?n.push(s):wa(s)&&((i&cn)!==0&&f(this,on).add(s),rs(s));var h=s.first;if(h!==null){s=h;continue}}for(;s!==null;){var g=s.next;if(g!==null){s=g;break}s=s.parent}}},nl=function(){for(var t=f(this,Qn);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=f(t,Qn)}return null},rl=function(t){var r;for(const[s,i]of t.current)!this.previous.has(s)&&t.previous.has(s)&&this.previous.set(s,t.previous.get(s)),this.current.set(s,i);for(const[s,i]of t.async_deriveds){const o=this.async_deriveds.get(s);o&&i.promise.then(o.resolve).catch(o.reject)}t.async_deriveds.clear(),this.transfer_effects(f(t,Dn),f(t,on));const n=s=>{var i=s.reactions;if(i!==null&&!((s.f&st)!==0&&(s.f&(nt|vn))===0))for(const c of i){var o=c.f;if((o&st)!==0)n(c);else{var l=c;o&(Kr|cn)&&!this.async_deriveds.has(l)&&(f(this,on).delete(l),Ve(l,nt),this.schedule(l))}}};for(const s of this.current.keys())n(s);this.oncommit(()=>t.discard()),ke(r=t,Ae,As).call(r),ae=this,ke(this,Ae,zs).call(this)},Br=function(t){for(var n=0;n<t.length;n+=1)Yi(t[n],f(this,Dn),f(this,on))},Kc=function(){var w;for(let _=ro;_!==null;_=f(_,gr)){var t=_.id<this.id,n=[];for(const[$,[S,y]]of this.current){if(_.current.has($)){var r=_.current.get($)[0];if(t&&S!==r)_.current.set($,[S,y]);else continue}n.push($)}if(t)for(const[$,S]of this.async_deriveds){const y=_.async_deriveds.get($);y&&S.promise.then(y.resolve).catch(y.reject)}var s=[..._.current.keys()].filter($=>!_.current.get($)[1]);if(!(!f(_,Wr)||s.length===0)){var i=s.filter($=>!this.current.has($));if(i.length===0)t&&_.discard();else if(n.length>0){if(t)for(const $ of f(this,Xr))_.unskip_effect($,S=>{var y;(S.f&(cn|Kr))!==0?_.schedule(S):ke(y=_,Ae,Br).call(y,[S])});_.activate();var o=new Set,l=new Map;for(var c of n)sl(c,i,o,l);l=new Map;var h=[..._.current].filter(([$,S])=>{const y=this.current.get($);return y?y[0]!==S[0]||y[1]!==S[1]:!0}).map(([$])=>$);if(h.length>0)for(const $ of f(this,Ks))($.f&(zt|yt|Da))===0&&Ko($,h,l)&&(($.f&(Kr|cn))!==0?(Ve($,nt),_.schedule($)):f(_,Dn).add($));if(f(_,Nt).length>0&&!f(_,_r)){_.apply();for(var g of f(_,Nt))ke(w=_,Ae,$o).call(w,g,[],[]);he(_,Nt,[])}_.deactivate()}}}},As=function(){if(this.linked){var t=f(this,Qn),n=f(this,gr);t===null?ro=n:he(t,gr,n),n===null?Hr=t:he(n,Qn,t),this.linked=!1}};let Sr=Va;function Uc(e){var t=Fs;Fs=!0;try{for(var n;;){if(Oc(),ae===null)return n;ae.flush()}}finally{Fs=t}}function Wc(){try{Tc()}catch(e){yn(e,wo)}}let an=null;function ri(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(zt|yt))===0&&wa(r)&&(an=new Set,rs(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&bl(r),(an==null?void 0:an.size)>0)){Cn.clear();for(const s of an){if((s.f&(zt|yt))!==0)continue;const i=[s];let o=s.parent;for(;o!==null;)an.has(o)&&(an.delete(o),i.push(o)),o=o.parent;for(let l=i.length-1;l>=0;l--){const c=i[l];(c.f&(zt|yt))===0&&rs(c)}}an.clear()}}an=null}}function sl(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const s of e.reactions){const i=s.f;(i&st)!==0?sl(s,t,n,r):(i&(Kr|cn))!==0&&(i&nt)===0&&Ko(s,t,r)&&(Ve(s,nt),Uo(s))}}function Ko(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const s of e.deps){if(Oa.call(t,s))return!0;if((s.f&st)!==0&&Ko(s,t,n))return n.set(s,!0),!0}return n.set(e,!1),!1}function Uo(e){ae.schedule(e)}function al(e,t){if(!((e.f&Xt)!==0&&(e.f&tt)!==0)){(e.f&nt)!==0?t.d.push(e):(e.f&vn)!==0&&t.m.push(e),Ve(e,tt);for(var n=e.first;n!==null;)al(n,t),n=n.next}}function ol(e){Ve(e,tt);for(var t=e.first;t!==null;)ol(t),t=t.next}let ja=new Set;const Cn=new Map;let il=!1;function jn(e,t){var n={f:0,v:e,reactions:null,equals:Ki,rv:0,wv:0};return n}function z(e,t){const n=jn(e);return wl(n),n}function qc(e,t=!1,n=!0){var s;const r=jn(e);return t||(r.equals=Ui),is&&n&&Fe!==null&&Fe.l!==null&&((s=Fe.l).s??(s.s=[])).push(r),r}function d(e,t,n=!1){xe!==null&&(!dn||(xe.f&Da)!==0)&&ls()&&(xe.f&(st|cn|Kr|Da))!==0&&(Tn===null||!Tn.has(e))&&zc();let r=n?Pe(t):t;return ns(e,r,Na)}function ns(e,t,n=null){if(!e.equals(t)){Hn?Cn.set(e,t):Cn.has(e)||Cn.set(e,e.v);var r=Sr.ensure();if(r.capture(e,t),(e.f&st)!==0){const s=e;(e.f&nt)!==0&&Vo(s),it===null&&Ho(s)}e.wv=$l(),ll(e,nt,n),ls()&&me!==null&&(me.f&tt)!==0&&(me.f&(Xt|Fn))===0&&(qt===null?ru([e]):qt.push(e)),!r.is_fork&&ja.size>0&&!il&&Gc()}return t}function Gc(){il=!1;for(const e of ja){(e.f&tt)!==0&&Ve(e,vn);let t;try{t=wa(e)}catch{t=!0}t&&rs(e)}ja.clear()}function si(e,t=1){var n=a(e),r=t===1?n++:n--;return d(e,n),r}function js(e){d(e,e.v+1)}function ll(e,t,n){var r=e.reactions;if(r!==null)for(var s=ls(),i=r.length,o=0;o<i;o++){var l=r[o],c=l.f;if(!(!s&&l===me)){var h=(c&nt)===0;if(h&&Ve(l,t),(c&Da)!==0)ja.add(l);else if((c&st)!==0){var g=l;it==null||it.delete(g),(c&$r)===0&&(c&Jt&&(me===null||(me.f&La)===0)&&(l.f|=$r),ll(g,vn,n))}else if(h){var w=l;(c&cn)!==0&&an!==null&&an.add(w),n!==null?n.push(w):Uo(w)}}}}function Pe(e){if(typeof e!="object"||e===null||Sn in e||Li in e)return e;const t=Ro(e);if(t!==ec&&t!==tc)return e;var n=new Map,r=Wa(e),s=z(0),i=wr,o=l=>{if(wr===i)return l();var c=xe,h=wr;Zt(null),ii(i);var g=l();return Zt(c),ii(h),g};return r&&n.set("length",z(e.length)),new Proxy(e,{defineProperty(l,c,h){(!("value"in h)||h.configurable===!1||h.enumerable===!1||h.writable===!1)&&Pc();var g=n.get(c);return g===void 0?o(()=>{var w=z(h.value);return n.set(c,w),w}):d(g,h.value,!0),!0},deleteProperty(l,c){var h=n.get(c);if(h===void 0){if(c in l){const g=o(()=>z(et));n.set(c,g),js(s)}}else d(h,et),js(s);return!0},get(l,c,h){var $;if(c===Sn)return e;var g=n.get(c),w=c in l;if(g===void 0&&(!w||($=tr(l,c))!=null&&$.writable)&&(g=o(()=>{var S=Pe(w?l[c]:et),y=z(S);return y}),n.set(c,g)),g!==void 0){var _=a(g);return _===et?void 0:_}return Reflect.get(l,c,h)},getOwnPropertyDescriptor(l,c){var h=Reflect.getOwnPropertyDescriptor(l,c);if(h&&"value"in h){var g=n.get(c);g&&(h.value=a(g))}else if(h===void 0){var w=n.get(c),_=w==null?void 0:w.v;if(w!==void 0&&_!==et)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return h},has(l,c){var _;if(c===Sn)return!0;var h=n.get(c),g=h!==void 0&&h.v!==et||Reflect.has(l,c);if(h!==void 0||me!==null&&(!g||(_=tr(l,c))!=null&&_.writable)){h===void 0&&(h=o(()=>{var $=g?Pe(l[c]):et,S=z($);return S}),n.set(c,h));var w=a(h);if(w===et)return!1}return g},set(l,c,h,g){var A;var w=n.get(c),_=c in l;if(r&&c==="length")for(var $=h;$<w.v;$+=1){var S=n.get($+"");S!==void 0?d(S,et):$ in l&&(S=o(()=>z(et)),n.set($+"",S))}if(w===void 0)(!_||(A=tr(l,c))!=null&&A.writable)&&(w=o(()=>z(void 0)),d(w,Pe(h)),n.set(c,w));else{_=w.v!==et;var y=o(()=>Pe(h));d(w,y)}var T=Reflect.getOwnPropertyDescriptor(l,c);if(T!=null&&T.set&&T.set.call(g,h),!_){if(r&&typeof c=="string"){var I=n.get("length"),D=Number(c);Number.isInteger(D)&&D>=I.v&&d(I,D+1)}js(s)}return!0},ownKeys(l){a(s);var c=Reflect.ownKeys(l).filter(w=>{var _=n.get(w);return _===void 0||_.v!==et});for(var[h,g]of n)g.v!==et&&!(h in l)&&c.push(h);return c},setPrototypeOf(){Mc()}})}function ai(e){try{if(e!==null&&typeof e=="object"&&Sn in e)return e[Sn]}catch{}return e}function cl(e,t){return Object.is(ai(e),ai(t))}var Cr,ul,dl,fl;function Yc(){if(Cr===void 0){Cr=window,ul=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;dl=tr(t,"firstChild").get,fl=tr(t,"nextSibling").get,ei(e)&&(e[xo]=void 0,e[Ea]=null,e[yo]=void 0,e.__e=void 0),ei(n)&&(n[Ps]=void 0)}}function En(e=""){return document.createTextNode(e)}function un(e){return dl.call(e)}function ya(e){return fl.call(e)}function x(e,t){return un(e)}function H(e,t=!1){{var n=un(e);return n instanceof Comment&&n.data===""?ya(n):n}}function ne(e,t=!1){return un(e)}function p(e,t=1,n=!1){let r=e;for(;t--;)r=ya(r);return r}function Jc(e){e.textContent=""}function vl(){return!1}function Ga(e,t,n){return t==null||t===Bi?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Xc(e){var t=me;if(t===null)return xe.f|=nr,e;if((t.f&as)===0&&(t.f&Qr)===0)throw e;yn(e,t)}function yn(e,t){if(!(t!==null&&(t.f&zt)!==0)){for(;t!==null;){if((t.f&bo)!==0&&(t.f&(zt|Ra))===0){if((t.f&as)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function pl(e){me===null&&(xe===null&&Ec(),Cc()),Hn&&Sc()}function Zc(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function pn(e,t){var n=me;n!==null&&(n.f&yt)!==0&&(e|=yt);var r={ctx:Fe,deps:null,nodes:null,f:e|nt|Jt,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};ae==null||ae.register_created_effect(r);var s=r;if((e&Qr)!==0)Vr!==null?Vr.push(r):Sr.ensure().schedule(r);else if(t!==null){try{rs(r)}catch(o){throw ut(r),o}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&os)===0&&(s=s.first,(e&cn)!==0&&(e&rr)!==0&&s!==null&&(s.f|=rr))}if(s!==null&&(s.parent=n,n!==null&&Zc(s,n),xe!==null&&(xe.f&st)!==0&&(e&Fn)===0)){var i=xe;(i.effects??(i.effects=[])).push(s)}return r}function Wo(){return xe!==null&&!dn}function Ya(e){const t=pn(ba,null);return Ve(t,tt),t.teardown=e,t}function ct(e){pl();var t=me.f,n=!xe&&(t&Xt)!==0&&Fe!==null&&!Fe.i;if(n){var r=Fe;(r.e??(r.e=[])).push(e)}else return hl(e)}function hl(e){return pn(Qr|Di,e)}function Qc(e){return pl(),pn(ba|Di,e)}function eu(e){Sr.ensure();const t=pn(Fn|os,e);return(n={})=>new Promise(r=>{n.outro?yr(t,()=>{ut(t),r(void 0)}):(ut(t),r(void 0))})}function Ja(e){return pn(Qr,e)}function tu(e){return pn(Kr|os,e)}function qo(e,t=0){return pn(ba|t,e)}function W(e,t=[],n=[],r=[]){Zi(r,t,n,s=>{pn(ba,()=>{e(...s.map(a))})})}function us(e,t=0){var n=pn(cn|t,e);return n}function gl(e,t=0){var n=pn(Do|t,e);return n}function Pt(e){return pn(Xt|os,e)}function _l(e){var t=e.teardown;if(t!==null){const n=Hn,r=xe;oi(!0),Zt(null);try{t.call(null)}catch(s){yn(s,e.parent)}finally{oi(n),Zt(r)}}}function Go(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const s=n.ac;s!==null&&cs(()=>{s.abort(xa)});var r=n.next;(n.f&Fn)!==0?n.parent=null:ut(n,t),n=r}}function nu(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Xt)===0&&ut(t),t=n}}function ut(e,t=!0){var n=!1;(t||(e.f&ac)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(ml(e.nodes.start,e.nodes.end),n=!0),e.f|=Ra,Go(e,t&&!n),Bs(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const i of r)i.stop();_l(e),e.f^=Ra,e.f|=zt;var s=e.parent;s!==null&&s.first!==null&&bl(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function ml(e,t){for(;e!==null;){var n=e===t?null:ya(e);e.remove(),e=n}}function bl(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function yr(e,t,n=!0){var r=[];e.f|=Lo,xl(e,r,!0);var s=()=>{n&&ut(e),t&&t()},i=r.length;if(i>0){var o=()=>--i||s();for(var l of r)l.out(o)}else s()}function xl(e,t,n){if((e.f&yt)===0){e.f^=yt;var r=e.nodes&&e.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&t.push(l);for(var s=e.first;s!==null;){var i=s.next;if((s.f&Fn)===0){var o=(s.f&rr)!==0||(s.f&Xt)!==0&&(e.f&cn)!==0;xl(s,t,o?n:!1)}s=i}}}function Ha(e){e.f&=~Lo,yl(e,!0)}function yl(e,t){if((e.f&Lo)===0&&(e.f&yt)!==0){e.f^=yt,(e.f&tt)===0&&(Ve(e,nt),Sr.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,s=(n.f&rr)!==0||(n.f&Xt)!==0;yl(n,s?t:!1),n=r}var i=e.nodes&&e.nodes.t;if(i!==null)for(const o of i)(o.is_global||t)&&o.in()}}function Yo(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var s=n===r?null:ya(n);t.append(n),n=s}}let Pa=!1,Hn=!1;function oi(e){Hn=e}let xe=null,dn=!1;function Zt(e){xe=e}let me=null;function Qt(e){me=e}let Tn=null;function wl(e){xe!==null&&(Tn??(Tn=new Set)).add(e)}let Mt=null,jt=0,qt=null;function ru(e){qt=e}let kl=1,pr=0,wr=pr;function ii(e){wr=e}function $l(){return++kl}function wa(e){var t=e.f;if((t&nt)!==0)return!0;if(t&st&&(e.f&=~$r),(t&vn)!==0){for(var n=e.deps,r=n.length,s=0;s<r;s++){var i=n[s];if(wa(i)&&el(i),i.wv>e.wv)return!0}(t&Jt)!==0&&it===null&&Ve(e,tt)}return!1}function Sl(e,t,n=!0){var r=e.reactions;if(r!==null&&!(Tn!==null&&Tn.has(e)))for(var s=0;s<r.length;s++){var i=r[s];(i.f&st)!==0?Sl(i,t,!1):t===i&&(n?Ve(i,nt):(i.f&tt)!==0&&Ve(i,vn),Uo(i))}}function Cl(e){var t=Mt,n=jt,r=qt,s=xe,i=Tn,o=Fe,l=dn,c=wr,h=e.f;Mt=null,jt=0,qt=null,xe=(h&(Xt|Fn))===0?e:null,Tn=null,es(e.ctx),dn=!1,wr=++pr,e.ac!==null&&(cs(()=>{e.ac.abort(xa)}),e.ac=null);try{e.f|=La;var g=e.fn,w=g();e.f|=as;var _=li(e);if(ls()&&qt!==null&&!dn&&_!==null&&(e.f&(st|vn|nt))===0)for(var $=0;$<qt.length;$++)Sl(qt[$],e);if(s!==null&&s!==e){if(pr++,s.deps!==null)for(let S=0;S<n;S+=1)s.deps[S].rv=pr;if(t!==null)for(const S of t)S.rv=pr;qt!==null&&(r===null?r=qt:r.push(...qt))}return(e.f&nr)!==0&&(e.f^=nr),w}catch(S){return li(e),Xc(S)}finally{e.f^=La,Mt=t,jt=n,qt=r,xe=s,Tn=i,es(o),dn=l,wr=c}}function li(e){var s;var t=e.deps,n=ae==null?void 0:ae.is_fork;if(Mt!==null){var r;if(n||Bs(e,jt),t!==null&&jt>0)for(t.length=jt+Mt.length,r=0;r<Mt.length;r++)t[jt+r]=Mt[r];else e.deps=t=Mt;if(Wo()&&(e.f&Jt)!==0)for(r=jt;r<t.length;r++)((s=t[r]).reactions??(s.reactions=[])).push(e)}else!n&&t!==null&&jt<t.length&&(Bs(e,jt),t.length=jt);return t}function su(e,t){let n=t.reactions;if(n!==null){var r=Ql.call(n,e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(t.f&st)!==0&&(Mt===null||!Oa.call(Mt,t))){var i=t;(i.f&Jt)!==0&&(i.f^=Jt,i.f&=~$r),i.v!==et&&Ho(i),i.ac!==null&&cs(()=>{i.ac.abort(xa),i.ac=null,Ve(i,nt)}),Bc(i),Bs(i,0)}}function Bs(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)su(e,n[r])}function rs(e){var t=e.f;if((t&zt)===0){Ve(e,tt);var n=me,r=Pa;me=e,Pa=(t&(Xt|Fn))===0;try{(t&(cn|Do))!==0?nu(e):Go(e),_l(e);var s=Cl(e);e.teardown=typeof s=="function"?s:null,e.wv=kl;var i}finally{Pa=r,me=n}}}async function El(){await Promise.resolve(),Uc()}function a(e){var t=e.f,n=(t&st)!==0;if(xe!==null&&!dn){var r=me!==null&&(me.f&zt)!==0;if(!r&&(Tn===null||!Tn.has(e))){var s=xe.deps;if((xe.f&La)!==0)e.rv<pr&&(e.rv=pr,Mt===null&&s!==null&&s[jt]===e?jt++:Mt===null?Mt=[e]:Mt.push(e));else{xe.deps??(xe.deps=[]),Oa.call(xe.deps,e)||xe.deps.push(e);var i=e.reactions;i===null?e.reactions=[xe]:Oa.call(i,xe)||i.push(xe)}}}if(Hn&&Cn.has(e))return Cn.get(e);if(n){var o=e;if(Hn){var l=o.v;return((o.f&tt)===0&&o.reactions!==null||Nl(o))&&(l=Vo(o)),Cn.set(o,l),l}var c=(o.f&Jt)===0&&!dn&&xe!==null&&(Pa||(xe.f&Jt)!==0),h=(o.f&as)===0;wa(o)&&(c&&(o.f|=Jt),el(o)),c&&!h&&(tl(o),Tl(o))}if(it!=null&&it.has(e))return it.get(e);if((e.f&nr)!==0)throw e.v;return e.v}function Tl(e){if(e.f|=Jt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&st)!==0&&(t.f&Jt)===0&&(tl(t),Tl(t))}function Nl(e){if(e.v===et)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Cn.has(t)||(t.f&st)!==0&&Nl(t))return!0;return!1}function Bn(e){var t=dn;try{return dn=!0,e()}finally{dn=t}}function dr(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Sn in e)So(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&Sn in n&&So(n)}}}function So(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{So(e[r],t)}catch{}const n=Ro(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=Oi(n);for(let s in r){const i=r[s].get;if(i)try{i.call(e)}catch{}}}}}function au(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const ou=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function iu(e){return ou.includes(e)}const lu={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function cu(e){return e=e.toLowerCase(),lu[e]??e}const uu=["touchstart","touchmove"];function du(e){return uu.includes(e)}const hr=Symbol("events"),Pl=new Set,Co=new Set;function Ml(e,t,n,r={}){function s(i){if(r.capture||Eo.call(t,i),!i.cancelBubble)return cs(()=>n==null?void 0:n.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?kn(()=>{t.addEventListener(e,s,r)}):t.addEventListener(e,s,r),s}function rt(e,t,n,r,s){var i={capture:r,passive:s},o=Ml(e,t,n,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Ya(()=>{t.removeEventListener(e,o,i)})}function R(e,t,n){(t[hr]??(t[hr]={}))[e]=n}function en(e){for(var t=0;t<e.length;t++)Pl.add(e[t]);for(var n of Co)n(e)}let ao=null,oo=!1;function Eo(e){var y,T;var t=this,n=t.ownerDocument,r=e.type,s=((y=e.composedPath)==null?void 0:y.call(e))||[],i=s[0]||e.target;ao=e,oo||(oo=!0,setTimeout(()=>{oo=!1,ao=null}));var o=0,l=ao===e&&e[hr];if(l){var c=s.indexOf(l);if(c!==-1&&(t===document||t===window)){e[hr]=t;return}var h=s.indexOf(t);if(h===-1)return;c<=h&&(o=c)}if(i=s[o]||e.target,i!==t){Ii(e,"currentTarget",{configurable:!0,get(){return i||n}});var g=xe,w=me;Zt(null),Qt(null);try{for(var _,$=[];i!==null&&i!==t;){try{var S=(T=i[hr])==null?void 0:T[r];S!=null&&(!i.disabled||e.target===i)&&S.call(i,e)}catch(I){_?$.push(I):_=I}if(e.cancelBubble)break;o++,i=o<s.length?s[o]:null}if(_){for(let I of $)queueMicrotask(()=>{throw I});throw _}}finally{e[hr]=t,delete e.currentTarget,Zt(g),Qt(w)}}}var zi;const io=((zi=globalThis==null?void 0:globalThis.window)==null?void 0:zi.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function fu(e){return(io==null?void 0:io.createHTML(e))??e}function zl(e){var t=Ga("template");return t.innerHTML=fu(e.replaceAll("<!>","<!---->")),t.content}function sr(e,t){var n=me;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function P(e,t){var n=(t&hc)!==0,r=(t&gc)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=zl(i?e:"<!>"+e),n||(s=un(s)));var o=r||ul?document.importNode(s,!0):s.cloneNode(!0);if(n){var l=un(o),c=o.lastChild;sr(l,c)}else sr(o,o);return o}}function vu(e,t,n="svg"){var r=!e.startsWith("<!>"),s=`<${n}>${r?e:"<!>"+e}</${n}>`,i;return()=>{if(!i){var o=zl(s),l=un(o);i=un(l)}var c=i.cloneNode(!0);return sr(c,c),c}}function Al(e,t){return vu(e,t,"svg")}function ci(e=""){{var t=En(e+"");return sr(t,t),t}}function re(){var e=document.createDocumentFragment(),t=document.createComment(""),n=En();return e.append(t,n),sr(t,n),e}function b(e,t){e!==null&&e.before(t)}function pu(e){let t=0,n=jn(0),r;return()=>{Wo()&&(a(n),qo(()=>(t===0&&(r=Bn(()=>e(()=>js(n)))),t+=1,()=>{kn(()=>{t-=1,t===0&&(r==null||r(),r=void 0,js(n))})})))}}var hu=rr|os;function gu(e,t,n,r){new _u(e,t,n,r)}var Gt,Oo,Yt,mr,mt,Dt,bt,Lt,bn,br,er,Zr,Us,Ws,Ln,Ka,De,mu,bu,To,xu,No,Is,Ma,Po,Mo;class _u{constructor(t,n,r,s){G(this,De);_t(this,"parent");_t(this,"is_pending",!1);_t(this,"transform_error");G(this,Gt);G(this,Oo,null);G(this,Yt);G(this,mr);G(this,mt);G(this,Dt,null);G(this,bt,null);G(this,Lt,null);G(this,bn,null);G(this,br,0);G(this,er,0);G(this,Zr,!1);G(this,Us,new Set);G(this,Ws,new Set);G(this,Ln,null);G(this,Ka,pu(()=>(he(this,Ln,jn(f(this,br))),()=>{he(this,Ln,null)})));var i;he(this,Gt,t),he(this,Yt,n),he(this,mr,o=>{var l=me;l.b=this,l.f|=bo,r(o)}),this.parent=me.b,this.transform_error=s??((i=this.parent)==null?void 0:i.transform_error)??(o=>o),he(this,mt,us(()=>{ke(this,De,No).call(this)},hu))}defer_effect(t){Yi(t,f(this,Us),f(this,Ws))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!f(this,Yt).pending}update_pending_count(t,n){ke(this,De,Po).call(this,t,n),he(this,br,f(this,br)+t),!(!f(this,Ln)||f(this,Zr))&&(he(this,Zr,!0),kn(()=>{he(this,Zr,!1),f(this,Ln)&&ns(f(this,Ln),f(this,br))}))}get_effect_pending(){return f(this,Ka).call(this),a(f(this,Ln))}error(t){if(!f(this,Yt).onerror&&!f(this,Yt).failed)throw t;ae!=null&&ae.is_fork?(f(this,Dt)&&ae.skip_effect(f(this,Dt)),f(this,bt)&&ae.skip_effect(f(this,bt)),f(this,Lt)&&ae.skip_effect(f(this,Lt)),ae.oncommit(()=>{ke(this,De,Mo).call(this,t)})):ke(this,De,Mo).call(this,t)}}Gt=new WeakMap,Oo=new WeakMap,Yt=new WeakMap,mr=new WeakMap,mt=new WeakMap,Dt=new WeakMap,bt=new WeakMap,Lt=new WeakMap,bn=new WeakMap,br=new WeakMap,er=new WeakMap,Zr=new WeakMap,Us=new WeakMap,Ws=new WeakMap,Ln=new WeakMap,Ka=new WeakMap,De=new WeakSet,mu=function(){try{he(this,Dt,Pt(()=>f(this,mr).call(this,f(this,Gt))))}catch(t){this.error(t)}},bu=function(t){const n=f(this,Yt).failed,{reset:r,invoke_onerror:s}=ke(this,De,To).call(this,t);kn(s),n&&he(this,Lt,Pt(()=>{n(f(this,Gt),()=>t,()=>r)}))},To=function(t){var n=!1,r=!1;const s=()=>{if(n){yc();return}n=!0,r&&Ac(),f(this,Lt)!==null&&yr(f(this,Lt),()=>{he(this,Lt,null)}),ke(this,De,Ma).call(this,()=>{ke(this,De,No).call(this)})};return{reset:s,invoke_onerror:()=>{var o,l;try{r=!0,(l=(o=f(this,Yt)).onerror)==null||l.call(o,t,s),r=!1}catch(c){yn(c,f(this,mt)&&f(this,mt).parent)}}}},xu=function(){const t=f(this,Yt).pending;t&&(this.is_pending=!0,he(this,bt,Pt(()=>t(f(this,Gt)))),kn(()=>{var n=he(this,bn,document.createDocumentFragment()),r=En(),s=!1;if(n.append(r),he(this,Dt,ke(this,De,Ma).call(this,()=>{try{return Pt(()=>f(this,mr).call(this,r))}catch(i){try{this.error(i),s=!0}catch(o){yn(o,f(this,mt).parent)}return null}})),f(this,Dt)===null){he(this,bn,null),s&&ke(this,De,Is).call(this,ae);return}f(this,er)===0&&(f(this,Gt).before(n),he(this,bn,null),yr(f(this,bt),()=>{he(this,bt,null)}),ke(this,De,Is).call(this,ae))}))},No=function(){try{if(this.is_pending=this.has_pending_snippet(),he(this,er,0),he(this,br,0),he(this,Dt,Pt(()=>{f(this,mr).call(this,f(this,Gt))})),f(this,er)>0){var t=he(this,bn,document.createDocumentFragment());Yo(f(this,Dt),t);const n=f(this,Yt).pending;he(this,bt,Pt(()=>n(f(this,Gt))))}else ke(this,De,Is).call(this,ae)}catch(n){this.error(n)}},Is=function(t){this.is_pending=!1,t.transfer_effects(f(this,Us),f(this,Ws))},Ma=function(t){var n=me,r=xe,s=Fe;Qt(f(this,mt)),Zt(f(this,mt)),es(f(this,mt).ctx);try{return Sr.ensure(),t()}finally{Qt(n),Zt(r),es(s)}},Po=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&ke(r=this.parent,De,Po).call(r,t,n);return}he(this,er,f(this,er)+t),f(this,er)===0&&(ke(this,De,Is).call(this,n),f(this,bt)&&yr(f(this,bt),()=>{he(this,bt,null)}),f(this,bn)&&(f(this,Gt).before(f(this,bn)),he(this,bn,null)))},Mo=function(t){f(this,Dt)&&(ut(f(this,Dt)),he(this,Dt,null)),f(this,bt)&&(ut(f(this,bt)),he(this,bt,null)),f(this,Lt)&&(ut(f(this,Lt)),he(this,Lt,null));let n=f(this,Yt).failed;const r=s=>{const{reset:i,invoke_onerror:o}=ke(this,De,To).call(this,s);o(),n&&he(this,Lt,ke(this,De,Ma).call(this,()=>{try{return Pt(()=>{var l=me;l.b=this,l.f|=bo,n(f(this,Gt),()=>s,()=>i)})}catch(l){return yn(l,f(this,mt).parent),null}}))};kn(()=>{var s;try{s=this.transform_error(t)}catch(i){yn(i,f(this,mt)&&f(this,mt).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,i=>yn(i,f(this,mt)&&f(this,mt).parent)):r(s)})};function V(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Ps]??(e[Ps]=e.nodeValue))&&(e[Ps]=n,e.nodeValue=`${n}`)}function yu(e,t){return wu(e,t)}const Ca=new Map;function wu(e,{target:t,anchor:n,props:r={},events:s,context:i,intro:o=!0,transformError:l}){Yc();var c=void 0,h=eu(()=>{var g=n??t.appendChild(En());gu(g,{pending:()=>{}},$=>{wt({});var S=Fe;i&&(S.c=i),s&&(r.$$events=s),c=e($,r)||jo(),kt()},l);var w=new Set,_=$=>{for(var S=0;S<$.length;S++){var y=$[S];if(!w.has(y)){w.add(y);var T=du(y);for(const A of[t,document]){var I=Ca.get(A);I===void 0&&(I=new Map,Ca.set(A,I));var D=I.get(y);D===void 0?(A.addEventListener(y,Eo,{passive:T}),I.set(y,1)):I.set(y,D+1)}}}};return _(qa(Pl)),Co.add(_),()=>{var T;for(var $ of w)for(const I of[t,document]){var S=Ca.get(I),y=S.get($);--y==0?(I.removeEventListener($,Eo),S.delete($),S.size===0&&Ca.delete(I)):S.set($,y)}Co.delete(_),g!==n&&((T=g.parentNode)==null||T.removeChild(g))}});return ku.set(c,h),c}let ku=new WeakMap;var ln,xn,Ft,xr,qs,Gs,Ua;class Xa{constructor(t,n=!0){_t(this,"anchor");G(this,ln,new Map);G(this,xn,new Map);G(this,Ft,new Map);G(this,xr,new Set);G(this,qs,!0);G(this,Gs,t=>{if(f(this,ln).has(t)){var n=f(this,ln).get(t),r=f(this,xn).get(n);if(r)Ha(r),f(this,xr).delete(n);else{var s=f(this,Ft).get(n);s&&(Ha(s.effect),f(this,xn).set(n,s.effect),f(this,Ft).delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,o]of f(this,ln)){if(f(this,ln).delete(i),i===t)break;const l=f(this,Ft).get(o);l&&(ut(l.effect),f(this,Ft).delete(o))}for(const[i,o]of f(this,xn)){if(i===n||f(this,xr).has(i))continue;const l=()=>{if(Array.from(f(this,ln).values()).includes(i)){var h=document.createDocumentFragment();Yo(o,h),h.append(En()),f(this,Ft).set(i,{effect:o,fragment:h})}else ut(o);f(this,xr).delete(i),f(this,xn).delete(i)};f(this,qs)||!r?(f(this,xr).add(i),yr(o,l,!1)):l()}}});G(this,Ua,t=>{f(this,ln).delete(t);const n=Array.from(f(this,ln).values());for(const[r,s]of f(this,Ft))n.includes(r)||(ut(s.effect),f(this,Ft).delete(r))});this.anchor=t,he(this,qs,n)}ensure(t,n){var r=ae,s=vl();if(n&&!f(this,xn).has(t)&&!f(this,Ft).has(t))if(s){var i=document.createDocumentFragment(),o=En();i.append(o),f(this,Ft).set(t,{effect:Pt(()=>n(o)),fragment:i})}else f(this,xn).set(t,Pt(()=>n(this.anchor)));if(f(this,ln).set(r,t),s){for(const[l,c]of f(this,xn))l===t?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of f(this,Ft))l===t?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(f(this,Gs)),r.ondiscard(f(this,Ua))}else f(this,Gs).call(this,r)}}ln=new WeakMap,xn=new WeakMap,Ft=new WeakMap,xr=new WeakMap,qs=new WeakMap,Gs=new WeakMap,Ua=new WeakMap;function F(e,t,n=!1){var r=new Xa(e),s=n?rr:0;function i(o,l){r.ensure(o,l)}us(()=>{var o=!1;t((l,c=0)=>{o=!0,i(c,l)}),o||i(-1,null)},s)}const $u=Symbol("NaN");function Su(e,t,n){var r=new Xa(e),s=!ls();us(()=>{var i=t();i!==i&&(i=$u),s&&i!==null&&typeof i=="object"&&(i={}),r.ensure(i,n)})}function Il(e,t){return t}function Cu(e,t,n){for(var r=[],s=t.length,i,o=t.length,l=0;l<s;l++){let w=t[l];yr(w,()=>{if(i){if(i.pending.delete(w),i.done.add(w),i.pending.size===0){var _=e.outrogroups;zo(e,qa(i.done)),_.delete(i),_.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var c=r.length===0&&n!==null&&e.pending.size===0;if(c){var h=n,g=h.parentNode;Jc(g),g.append(h),e.items.clear()}zo(e,t,!c)}else i={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(i)}function zo(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const o of e.pending.values())for(const l of o)r.add(e.items.get(l).e)}for(var s=0;s<t.length;s++){var i=t[s];if(r!=null&&r.has(i)){i.f|=wn;const o=document.createDocumentFragment();Yo(i,o)}else ut(t[s],n)}}var ui;function Ue(e,t,n,r,s,i=null){var o=e,l=new Map,c=(t&ji)!==0;if(c){var h=e;o=h.appendChild(En())}var g=null,w=Bo(()=>{var A=n();return Wa(A)?A:A==null?[]:qa(A)}),_,$=new Map,S=!0;function y(A){(D.effect.f&zt)===0&&(D.pending.delete(A),D.fallback=g,Eu(D,_,o,t,r),g!==null&&(_.length===0?(g.f&wn)===0?Ha(g):(g.f^=wn,Os(g,null,o)):yr(g,()=>{g=null})))}function T(A){D.pending.delete(A)}var I=us(()=>{_=a(w);for(var A=_.length,U=new Set,M=ae,C=vl(),O=0;O<A;O+=1){var Y=_[O],J=r(Y,O),be=S?null:l.get(J);be?(be.v&&ns(be.v,Y),be.i&&ns(be.i,O),C&&M.unskip_effect(be.e)):(be=Tu(l,S?o:ui??(ui=En()),Y,J,O,s,t,n),S||(be.e.f|=wn),l.set(J,be)),U.add(J)}if(A===0&&i&&!g&&(S?g=Pt(()=>i(o)):(g=Pt(()=>i(ui??(ui=En()))),g.f|=wn)),A>U.size&&$c(),!S)if($.set(M,U),C){for(const[ge,oe]of l)U.has(ge)||M.skip_effect(oe.e);M.oncommit(y),M.ondiscard(T)}else y(M);a(w)}),D={effect:I,items:l,pending:$,outrogroups:null,fallback:g};S=!1}function Es(e){for(;e!==null&&(e.f&Xt)===0;)e=e.next;return e}function Eu(e,t,n,r,s){var be,ge,oe,Me,ze,He,K,ie,Q;var i=(r&cc)!==0,o=t.length,l=e.items,c=Es(e.effect.first),h,g=null,w,_=[],$=[],S,y,T,I;if(i)for(I=0;I<o;I+=1)S=t[I],y=s(S,I),T=l.get(y).e,(T.f&wn)===0&&((ge=(be=T.nodes)==null?void 0:be.a)==null||ge.measure(),(w??(w=new Set)).add(T));for(I=0;I<o;I+=1){if(S=t[I],y=s(S,I),T=l.get(y).e,e.outrogroups!==null)for(const se of e.outrogroups)se.pending.delete(T),se.done.delete(T);if((T.f&yt)!==0&&(Ha(T),i&&((Me=(oe=T.nodes)==null?void 0:oe.a)==null||Me.unfix(),(w??(w=new Set)).delete(T))),(T.f&wn)!==0)if(T.f^=wn,T===c)Os(T,null,n);else{var D=g?g.next:c;T===e.effect.last&&(e.effect.last=T.prev),T.prev&&(T.prev.next=T.next),T.next&&(T.next.prev=T.prev),Xn(e,g,T),Xn(e,T,D),Os(T,D,n),g=T,_=[],$=[],c=Es(g.next);continue}if(T!==c){if(h!==void 0&&h.has(T)){if(_.length<$.length){var A=$[0],U;g=A.prev;var M=_[0],C=_[_.length-1];for(U=0;U<_.length;U+=1)Os(_[U],A,n);for(U=0;U<$.length;U+=1)h.delete($[U]);Xn(e,M.prev,C.next),Xn(e,g,M),Xn(e,C,A),c=A,g=C,I-=1,_=[],$=[]}else h.delete(T),Os(T,c,n),Xn(e,T.prev,T.next),Xn(e,T,g===null?e.effect.first:g.next),Xn(e,g,T),g=T;continue}for(_=[],$=[];c!==null&&c!==T;)(h??(h=new Set)).add(c),$.push(c),c=Es(c.next);if(c===null)continue}(T.f&wn)===0&&_.push(T),g=T,c=Es(T.next)}if(e.outrogroups!==null){for(const se of e.outrogroups)se.pending.size===0&&(zo(e,qa(se.done)),(ze=e.outrogroups)==null||ze.delete(se));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||h!==void 0){var O=[];if(h!==void 0)for(T of h)(T.f&yt)===0&&O.push(T);for(;c!==null;)(c.f&yt)===0&&c!==e.fallback&&O.push(c),c=Es(c.next);var Y=O.length;if(Y>0){var J=(r&ji)!==0&&o===0?n:null;if(i){for(I=0;I<Y;I+=1)(K=(He=O[I].nodes)==null?void 0:He.a)==null||K.measure();for(I=0;I<Y;I+=1)(Q=(ie=O[I].nodes)==null?void 0:ie.a)==null||Q.fix()}Cu(e,O,J)}}i&&kn(()=>{var se,E;if(w!==void 0)for(T of w)(E=(se=T.nodes)==null?void 0:se.a)==null||E.apply()})}function Tu(e,t,n,r,s,i,o,l){var c=(o&ic)!==0?(o&uc)===0?qc(n,!1,!1):jn(n):null,h=(o&lc)!==0?jn(s):null;return{v:c,i:h,e:Pt(()=>(i(t,c??n,h??s,l),()=>{e.delete(r)}))}}function Os(e,t,n){if(e.nodes)for(var r=e.nodes.start,s=e.nodes.end,i=t&&(t.f&wn)===0?t.nodes.start:n;r!==null;){var o=ya(r);if(i.before(r),r===s)return;r=o}}function Xn(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function di(e,t,n=!1,r=!1,s=!1,i=!1){var o=e,l="";if(n)var c=e;W(()=>{var h=me;if(l!==(l=t()??"")){if(n){h.nodes=null,c.innerHTML=l,l!==""&&sr(un(c),c.lastChild);return}if(h.nodes!==null&&(ml(h.nodes.start,h.nodes.end),h.nodes=null),l!==""){var g=r?Vi:s?_c:void 0,w=Ga(r?"svg":s?"math":"template",g);w.innerHTML=l;var _=r||s?w:w.content;if(sr(un(_),_.lastChild),r||s)for(;un(_);)o.before(un(_));else o.before(_)}}})}function ue(e,t,n,r,s){var l,c;if((l=t.$$host)!=null&&l.$$shadowRoot){const h=Ga("slot");b(e,h);return}var i=(c=t.$$slots)==null?void 0:c[n],o=!1;i===!0&&(i=t.children,o=!0),i===void 0||i(e,o?()=>r:r)}function fi(e,t,n){var r=new Xa(e);us(()=>{var s=t()??null;r.ensure(s,s&&(i=>n(i,s)))},rr)}function Nu(e,t,n,r,s,i){var o=null,l=e,c=new Xa(l,!1);us(()=>{const h=t()||null;var g=Vi;if(h===null){c.ensure(null,null);return}return c.ensure(h,w=>{if(h){if(o=Ga(h,g),sr(o,o),r){var _=null,$=o.appendChild(En());r(o,$),_==null||_.remove()}me.nodes.end=o,w.before(o)}}),()=>{}},rr),Ya(()=>{})}function Pu(e,t){var n=void 0,r;gl(()=>{n!==(n=t())&&(r&&(ut(r),r=null),n&&(r=Pt(()=>{Ja(()=>n(e))})))})}function Ol(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=Ol(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Mu(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=Ol(e))&&(r&&(r+=" "),r+=t);return r}function Rl(e){return typeof e=="object"?Mu(e):e??""}const vi=[...` 	
\r\f \v\uFEFF`];function zu(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var s of Object.keys(n))if(n[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,o=0;(o=r.indexOf(s,o))>=0;){var l=o+i;(o===0||vi.includes(r[o-1]))&&(l===r.length||vi.includes(r[l]))?r=(o===0?"":r.substring(0,o))+r.substring(l+1):o=l}}return r===""?null:r}function pi(e,t=!1){var n=t?" !important;":";",r="";for(var s of Object.keys(e)){var i=e[s];i!=null&&i!==""&&(r+=" "+s+": "+i+n)}return r}function lo(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Au(e,t){if(t){var n="",r,s;if(Array.isArray(t)?(r=t[0],s=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var i=!1,o=0,l=!1,c=[];r&&c.push(...Object.keys(r).map(lo)),s&&c.push(...Object.keys(s).map(lo));var h=0,g=-1;const y=e.length;for(var w=0;w<y;w++){var _=e[w];if(l?_==="/"&&e[w-1]==="*"&&(l=!1):i?i===_&&(i=!1):_==="/"&&e[w+1]==="*"?l=!0:_==='"'||_==="'"?i=_:_==="("?o++:_===")"&&o--,!l&&i===!1&&o===0){if(_===":"&&g===-1)g=w;else if(_===";"||w===y-1){if(g!==-1){var $=lo(e.substring(h,g).trim());if(!c.includes($)){_!==";"&&w++;var S=e.substring(h,w).trim();n+=" "+S+";"}}h=w+1,g=-1}}}}return r&&(n+=pi(r)),s&&(n+=pi(s,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function xt(e,t,n,r,s,i){var o=e[xo];if(o!==n||o===void 0){var l=zu(n,r,i);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e[xo]=n}else if(i&&s!==i)for(var c in i){var h=!!i[c];(s==null||h!==!!s[c])&&e.classList.toggle(c,h)}return i}function co(e,t={},n,r){for(var s in n){var i=n[s];t[s]!==i&&(n[s]==null?e.style.removeProperty(s):e.style.setProperty(s,i,r))}}function kr(e,t,n,r){var s=e[yo];if(s!==t){var i=Au(t,r);i==null?e.removeAttribute("style"):e.style.cssText=i,e[yo]=t}else r&&(Array.isArray(r)?(co(e,n==null?void 0:n[0],r[0]),co(e,n==null?void 0:n[1],r[1],"important")):co(e,n,r));return r}function Dl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function hi(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,Ll(e,!n||"__value"in e))}function Ll(e,t){var n=e.__defaultValue,r=e.multiple,s=r?n??[]:null;if(!(r&&!Wa(s))){var i=e.selectedIndex,o=t&&r?new Set(e.selectedOptions):null;for(var l of e.options){var c=Ur(l);Dl(l,r?s.includes(c):cl(c,n))}if(t)if(o!==null)for(l of e.options){var h=o.has(l);l.selected!==h&&(l.selected=h)}else e.selectedIndex!==i&&(e.selectedIndex=i)}}function Vs(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Wa(t))return xc();for(var r of e.options)r.selected=t.includes(Ur(r));return}for(r of e.options){var s=Ur(r);if(cl(s,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Rs(e){var t=new MutationObserver(n=>{n.every(Iu)||("__defaultValue"in e&&Ll(e,!1),"__value"in e&&Vs(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ya(()=>{t.disconnect()})}function uo(e,t,n=t){var r=new WeakSet,s=!0;Xi(e,"change",i=>{var o=i?"[selected]":":checked",l;if(e.multiple)l=[].map.call(e.querySelectorAll(o),Ur);else{var c=e.querySelector(o)??e.querySelector("option:not([disabled])");l=c&&Ur(c)}n(l),e.__value=l,ae!==null&&r.add(ae)}),Ja(()=>{var i=t();if(e===document.activeElement){var o=ae;if(r.has(o))return}if(Vs(e,i,s),s&&i===void 0){var l=e.querySelector(":checked");l!==null&&(i=Ur(l),n(i))}e.__value=i,s=!1})}function Ur(e){return"__value"in e?e.__value:e.value}function Iu(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const Ts=Symbol("class"),Ns=Symbol("style"),Fl=Symbol("is custom element"),jl=Symbol("is html"),Ou=Fo?"input":"INPUT",Ru=Fo?"option":"OPTION",Hl=Fo?"select":"SELECT";function _e(e,t,n,r){var s=Bl(e);s[t]!==(s[t]=n)&&(t==="loading"&&(e[oc]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Vl(e).has(t)?e[t]=n:e.setAttribute(t,n))}function Du(e,t,n,r,s=!1,i=!1){var o=Bl(e),l=o[Fl],c=!o[jl],h=t||{},g=e.nodeName===Ru,w=e.nodeName===Hl;for(var _ in t)!(_ in n)&&_[0]+_[1]!=="$$"&&(n[_]=null);n.class?n.class=Rl(n.class):n[Ts]&&(n.class=null),n[Ns]&&(n.style??(n.style=null));var $=Vl(e);if(e.nodeName===Ou&&"type"in n&&("value"in n||"__value"in n)){var S=n.type;(S!==h.type||S===void 0&&e.hasAttribute("type"))&&(h.type=S,_e(e,"type",S))}for(const M in n){let C=n[M];if(g&&M==="value"&&C==null){e.value=e.__value="",h[M]=C;continue}if(M==="class"){var y=e.namespaceURI==="http://www.w3.org/1999/xhtml";xt(e,y,C,r,t==null?void 0:t[Ts],n[Ts]),h[M]=C,h[Ts]=n[Ts];continue}if(M==="style"){kr(e,C,t==null?void 0:t[Ns],n[Ns]),h[M]=C,h[Ns]=n[Ns];continue}var T=h[M];if(!(C===T&&!(C===void 0&&e.hasAttribute(M)))){h[M]=C;var I=M[0]+M[1];if(I!=="$$")if(I==="on"){const O={},Y="$$"+M;let J=M.slice(2);var D=iu(J);if(au(J)&&(J=J.slice(0,-7),O.capture=!0),!D&&T){if(C!=null)continue;e.removeEventListener(J,h[Y],O),h[Y]=null}if(D)R(J,e,C),en([J]);else if(C!=null){let be=function(ge){h[M].call(this,ge)};h[Y]=Ml(J,e,be,O)}}else if(M==="style")_e(e,M,C);else if(M==="autofocus")Ji(e,!!C);else if(!l&&(M==="__value"||M==="value"&&C!=null))e.value=e.__value=C;else if(M==="selected"&&g)Dl(e,C);else{var A=M;c||(A=cu(A));var U=A==="defaultValue"||A==="defaultChecked";if(w&&A==="defaultValue")continue;if(C==null&&!l&&!U)if(o[M]=null,A==="value"||A==="checked"){let O=e;const Y=t===void 0;if(A==="value"){let J=O.defaultValue;O.removeAttribute(A),O.defaultValue=J,O.value=O.__value=Y?J:null}else{let J=O.defaultChecked;O.removeAttribute(A),O.defaultChecked=J,O.checked=Y?J:!1}}else e.removeAttribute(M);else U||(l||typeof C!="string")&&$.has(A)?(e[A]=C,A in o&&(o[A]=et)):typeof C!="function"&&_e(e,A,C)}}}return h}function gi(e,t,n=[],r=[],s=[],i,o=!1,l=!1){Zi(s,n,r,c=>{var h=void 0,g={},w=e.nodeName===Hl,_=!1;if(gl(()=>{var S=t(...c.map(a)),y=Du(e,h,S,i,o,l);if(_&&w){var T=e;"defaultValue"in S&&hi(T,S.defaultValue),"value"in S&&Vs(T,S.value)}for(let D of Object.getOwnPropertySymbols(g))S[D]||ut(g[D]);for(let D of Object.getOwnPropertySymbols(S)){var I=S[D];D.description===mc&&(!h||I!==h[D])&&(g[D]&&ut(g[D]),g[D]=Pt(()=>Pu(e,()=>I))),y[D]=I}h=y}),w){var $=e;Ja(()=>{var S=h;"defaultValue"in S&&hi($,S.defaultValue),Vs($,S.value,!0),Rs($)})}_=!0})}function Bl(e){return e[Ea]??(e[Ea]={[Fl]:e.nodeName.includes("-"),[jl]:e.namespaceURI===Bi})}var _i=new Map;function Vl(e){var t=e.getAttribute("is")||e.nodeName,n=_i.get(t);if(n)return n;_i.set(t,n=new Set);for(var r,s=e,i=Element.prototype;i!==s;){r=Oi(s);for(var o in r)r[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&n.add(o);s=Ro(s)}return n}function Le(e,t,n=t){var r=new WeakSet;Xi(e,"input",async s=>{var i=s?e.defaultValue:e.value;if(i=fo(e)?vo(i):i,n(i),ae!==null&&r.add(ae),await El(),i!==(i=t())){var o=e.selectionStart,l=e.selectionEnd,c=e.value.length;if(e.value=i??"",l!==null){var h=e.value.length;o===l&&l===c&&h>c?(e.selectionStart=h,e.selectionEnd=h):(e.selectionStart=o,e.selectionEnd=Math.min(l,h))}}}),Bn(t)==null&&e.value&&(n(fo(e)?vo(e.value):e.value),ae!==null&&r.add(ae)),qo(()=>{var s=t();if(e===document.activeElement){var i=ae;if(r.has(i))return}fo(e)&&s===vo(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function fo(e){var t=e.type;return t==="number"||t==="range"}function vo(e){return e===""?null:+e}function po(e,t){return e===t||(e==null?void 0:e[Sn])===t}function ss(e=jo(),t,n,r){var s=Fe.r,i=me;return Ja(()=>{var o,l;return qo(()=>{o=l,l=[],Bn(()=>{po(n(...l),e)||(t(e,...l),o&&po(n(...o),e)&&t(null,...o))})}),()=>{let c=i;for(;c!==s&&c.parent!==null&&c.parent.f&Ra;)c=c.parent;const h=()=>{l&&po(n(...l),e)&&t(null,...l)},g=c.teardown;c.teardown=()=>{h(),g==null||g()}}}),e}function Kl(e=!1){const t=Fe,n=t.l.u;if(!n)return;let r=()=>dr(t.s);if(e){let s=0,i={};const o=ts(()=>{let l=!1;const c=t.s;for(const h in c)c[h]!==i[h]&&(i[h]=c[h],l=!0);return l&&s++,s});r=()=>a(o)}n.b.length&&Qc(()=>{mi(t,r),mo(n.b)}),ct(()=>{const s=Bn(()=>n.m.map(rc));return()=>{for(const i of s)typeof i=="function"&&i()}}),n.a.length&&ct(()=>{mi(t,r),mo(n.a)})}function mi(e,t){if(e.l.s)for(const n of e.l.s)a(n);t()}function Lu(e){var t=jn(0);return function(){return arguments.length===1?(d(t,a(t)+1),arguments[0]):(a(t),e())}}const Fu={get(e,t){if(!e.exclude.includes(t))return a(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=me;try{Qt(e.parent_effect),e.special[t]=Ke({get[t](){return e.props[t]}},t,Hi)}finally{Qt(r)}}return e.special[t](n),si(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),si(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function le(e,t){return new Proxy({props:e,exclude:t,special:{},version:jn(0),parent_effect:me},Fu)}const ju={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Cs(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let s=e.props[r];Cs(s)&&(s=s());const i=tr(s,t);if(i&&i.set)return i.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Cs(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const s=tr(r,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===Sn||t===Fi)return!1;for(let n of e.props)if(Cs(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(Cs(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function de(...e){return new Proxy({props:e},ju)}function Ke(e,t,n,r){var U;var s=!is||(n&fc)!==0,i=(n&vc)!==0,o=(n&pc)!==0,l=r,c=!0,h=void 0,g=()=>o&&s?(h??(h=ts(r)),a(h)):(c&&(c=!1,l=o?Bn(r):r),l);let w;if(i){var _=Sn in e||Fi in e;w=((U=tr(e,t))==null?void 0:U.set)??(_&&t in e?M=>e[t]=M:void 0)}var $,S=!1;i?[$,S]=Dc(()=>e[t]):$=e[t],$===void 0&&r!==void 0&&($=g(),w&&(s&&Nc(),w($)));var y;if(s?y=()=>{var M=e[t];return M===void 0?g():(c=!0,M)}:y=()=>{var M=e[t];return M!==void 0&&(l=void 0),M===void 0?l:M},s&&(n&Hi)===0)return y;if(w){var T=e.$$legacy;return(function(M,C){return arguments.length>0?((!s||!C||T||S)&&w(C?y():M),M):y()})}var I=!1,D=((n&dc)!==0?ts:Bo)(()=>(I=!1,y()));i&&a(D);var A=me;return(function(M,C){if(arguments.length>0){const O=C?a(D):s&&i?Pe(M):M;return d(D,O),I=!0,l!==void 0&&(l=O),M}return Hn&&I||(A.f&zt)!==0?D.v:a(D)})}function ds(e){Fe===null&&Wi(),is&&Fe.l!==null?Hu(Fe).m.push(e):ct(()=>{const t=Bn(e);if(typeof t=="function")return t})}function Jo(e){Fe===null&&Wi(),ds(()=>()=>Bn(e))}function Hu(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Bu="5";var Ai;typeof window<"u"&&((Ai=window.__svelte??(window.__svelte={})).v??(Ai.v=new Set)).add(Bu);const fr=()=>window.__IDE_BOOTSTRAP__||{};function Vu(e){const{rootPath:t="",session:n=""}=fr();return`${t}/api/sessions/${encodeURIComponent(n)}/ide${e}`}async function Be(e,t={}){const n=await fetch(Vu(e),t),r=await n.json().catch(()=>({}));if(!n.ok){const s=new Error(r.error||"Request failed");throw Object.assign(s,r),s}return r}const Qe=(e,t)=>`/ssh-connections/${encodeURIComponent(e)}${t}`,ye={chat:async(e,t=80)=>{const{rootPath:n=""}=fr(),r=`${n}/api/sessions/${encodeURIComponent(e)}/ide/chat?limit=${t}`,s=await fetch(r),i=await s.json().catch(()=>({}));if(!s.ok)throw new Error(i.error||"Could not load chat");return i},browse:async(e="")=>{const{rootPath:t=""}=fr(),n=`${t}/api/ide/browse?path=${encodeURIComponent(e)}`,r=await fetch(n),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not browse folders");return s},sessionAgent:async e=>{const{rootPath:t=""}=fr(),n=await fetch(`${t}/api/sessions/${encodeURIComponent(e)}/agent`),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Could not read agent settings");return r},setSessionAgent:async(e,t)=>{const{rootPath:n=""}=fr(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/agent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({agent:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not switch agent");return s},setSessionModel:async(e,t)=>{const{rootPath:n=""}=fr(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/model`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change model");return s},setSessionEffort:async(e,t)=>{const{rootPath:n=""}=fr(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/effort`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({effort:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change effort");return s},browseOn:(e,t="")=>Be(Qe(e,`/browse?path=${encodeURIComponent(t)}`)),setWorkspaceRoot:(e,t,n)=>Be(Qe(e,"/workspace-root"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({workspace_root:t,label:n})}),agentContext:e=>Be(Qe(e,"/agent-context")),hostKey:e=>Be(Qe(e,"/host-key")),trustHost:e=>Be(Qe(e,"/host-key"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accept:!0})}),listConnections:()=>Be("/ssh-connections"),createConnection:e=>Be("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),deleteConnection:e=>Be(Qe(e,""),{method:"DELETE"}),connect:(e,t)=>Be(Qe(e,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t||""})}),status:e=>Be(Qe(e,"/status?reconnect=1")),listFiles:(e,t)=>Be(Qe(e,`/files?path=${encodeURIComponent(t)}`)),searchFiles:(e,t,n)=>Be(Qe(e,`/files/search?path=${encodeURIComponent(t)}&query=${encodeURIComponent(n)}`)),readFile:(e,t)=>Be(Qe(e,`/file?path=${encodeURIComponent(t)}`)),saveFile:(e,t,n)=>Be(Qe(e,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t,content:n})}),fs:(e,t)=>Be(Qe(e,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),git:(e,t)=>Be(Qe(e,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),focusTerminal:e=>Be(Qe(e,"/focus-terminal"),{method:"POST"}),updateConnection:(e,t)=>Be(Qe(e,""),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),listTerminals:e=>Be(Qe(e,"/terminals")),closeTerminal:(e,t)=>Be(Qe(e,`/terminals/${t}`),{method:"DELETE"}),getWorkspace:e=>Be(Qe(e,"/workspace")),saveWorkspace:(e,t)=>Be(Qe(e,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})};var Ys,Js,Xs,Zs,Qs,ea,ta,na,ra,sa,aa,oa,ia,la,ca,ua,da,fa,va,pa,ha,ga,_a,ma;class Ku{constructor(){G(this,Ys,z(Pe([])));G(this,Js,z(""));G(this,Xs,z("idle"));G(this,Zs,z("Ready"));G(this,Qs,z("No file open"));G(this,ea,z("."));G(this,ta,z(Pe([])));G(this,na,z(Pe({})));G(this,ra,z(Pe({})));G(this,sa,z(""));G(this,aa,z(Pe([])));G(this,oa,z(""));G(this,ia,z(""));G(this,la,z(""));G(this,ca,z(Pe([])));G(this,ua,z(""));G(this,da,z(!1));G(this,fa,z(!1));G(this,va,z(0));G(this,pa,z(0));G(this,ha,z(!1));G(this,ga,z(""));G(this,_a,z(Pe([])));G(this,ma,z(!1));_t(this,"restoredKey","");_t(this,"persistTimer",null)}get connections(){return a(f(this,Ys))}set connections(t){d(f(this,Ys),t,!0)}get connectionId(){return a(f(this,Js))}set connectionId(t){d(f(this,Js),t,!0)}get connectionState(){return a(f(this,Xs))}set connectionState(t){d(f(this,Xs),t,!0)}get statusText(){return a(f(this,Zs))}set statusText(t){d(f(this,Zs),t,!0)}get detailText(){return a(f(this,Qs))}set detailText(t){d(f(this,Qs),t,!0)}get path(){return a(f(this,ea))}set path(t){d(f(this,ea),t,!0)}get entries(){return a(f(this,ta))}set entries(t){d(f(this,ta),t,!0)}get expanded(){return a(f(this,na))}set expanded(t){d(f(this,na),t,!0)}get treeChildren(){return a(f(this,ra))}set treeChildren(t){d(f(this,ra),t,!0)}get filter(){return a(f(this,sa))}set filter(t){d(f(this,sa),t,!0)}get tabs(){return a(f(this,aa))}set tabs(t){d(f(this,aa),t,!0)}get activeKey(){return a(f(this,oa))}set activeKey(t){d(f(this,oa),t,!0)}get gitOutput(){return a(f(this,ia))}set gitOutput(t){d(f(this,ia),t,!0)}get gitStatus(){return a(f(this,la))}set gitStatus(t){d(f(this,la),t,!0)}get gitBranches(){return a(f(this,ca))}set gitBranches(t){d(f(this,ca),t,!0)}get gitBranch(){return a(f(this,ua))}set gitBranch(t){d(f(this,ua),t,!0)}get needsHostKey(){return a(f(this,da))}set needsHostKey(t){d(f(this,da),t,!0)}get notARepo(){return a(f(this,fa))}set notARepo(t){d(f(this,fa),t,!0)}get gitAhead(){return a(f(this,va))}set gitAhead(t){d(f(this,va),t,!0)}get gitBehind(){return a(f(this,pa))}set gitBehind(t){d(f(this,pa),t,!0)}get gitHasUpstream(){return a(f(this,ha))}set gitHasUpstream(t){d(f(this,ha),t,!0)}get gitBusy(){return a(f(this,ga))}set gitBusy(t){d(f(this,ga),t,!0)}get gitCommits(){return a(f(this,_a))}set gitCommits(t){d(f(this,_a),t,!0)}get gitHistoryLoaded(){return a(f(this,ma))}set gitHistoryLoaded(t){d(f(this,ma),t,!0)}get connection(){return this.connections.find(t=>t.id===this.connectionId)||null}get activeTab(){return this.tabs.find(t=>t.key===this.activeKey)||null}get visibleEntries(){const t=this.filter.trim().toLowerCase();return t?this.entries.filter(n=>n.name.toLowerCase().includes(t)):this.entries}get dirtyCount(){return this.tabs.filter(t=>t.dirty).length}get gitDirtyCount(){return this.gitStatus.split(`
`).filter(t=>t.trim()&&!t.startsWith("##")).length}resetWorkspaceView(){this.tabs=[],this.activeKey="",this.restoredKey="",this.path=".",this.entries=[],this.expanded={},this.treeChildren={},this.filter="",this.gitOutput="",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.needsHostKey=!1,this.notARepo=!1,this.gitAhead=0,this.gitBehind=0,this.gitHasUpstream=!1,this.gitCommits=[],this.gitHistoryLoaded=!1}setStatus(t,n){this.statusText=t,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const t=await ye.listConnections();this.connections=t.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(t){this.setStatus(t.message||"Could not load connections")}}async refreshStatus(){var t,n,r;if(this.connectionId)try{const s=await ye.status(this.connectionId);s.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((t=this.connection)==null?void 0:t.label)||"SSH workspace"}`,`SSH terminal: ${s.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(s){this.connectionState="error",this.setStatus(s.message||"Could not check SSH connection")}}async connect(t){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await ye.connect(this.connectionId,t);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect"),this.needsHostKey=!!r.needs_host_key}}}async refreshFiles(t){if(!this.connectionId)return;const n=t||this.path||".";try{const r=await ye.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async toggleDirectory(t){if(this.expanded[t]){const n={...this.expanded};delete n[t],this.expanded=n;return}if(this.expanded={...this.expanded,[t]:!0},!this.treeChildren[t])try{const n=await ye.listFiles(this.connectionId,t);this.treeChildren={...this.treeChildren,[t]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}openDiffTab(t,n){const r=`${this.connectionId}|diff:${t}`,s=this.tabs.find(o=>o.key===r);if(s)return s.content=n,s.saved=n,this.activeKey=r,s;const i={key:r,path:`${t} (diff)`,content:n,saved:n,dirty:!1,readOnly:!0,language:"plaintext"};return this.tabs=[...this.tabs,i],this.activeKey=r,i}async openFile(t){if(!this.connectionId)return null;const n=`${this.connectionId}|${t}`,r=this.tabs.find(s=>s.key===n);if(r)return this.activeKey=n,r;try{const s=await ye.readFile(this.connectionId,t),i={key:`${this.connectionId}|${s.path}`,path:s.path,content:s.content||"",saved:s.content||"",dirty:!1};return this.tabs=[...this.tabs,i],this.activeKey=i.key,this.setStatus("Opened",i.path),this.remember(),i}catch(s){return this.setStatus(s.message||"Could not open remote file"),null}}updateContent(t,n){this.tabs=this.tabs.map(r=>r.key===t?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(t){var r;const n=this.tabs.find(s=>s.key===t);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(s=>s.key!==t),this.activeKey===t&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const t=this.activeTab;if(t)try{await ye.saveFile(this.connectionId,t.path,t.content),this.tabs=this.tabs.map(n=>n.key===t.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${t.path}`,t.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const t=`${this.connectionId}`;if(!t)return;let n=null;try{n=await ye.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===t)return;this.restoredKey=t;const r=(n==null?void 0:n.buffers)||{};for(const i of((n==null?void 0:n.tabs)||[]).slice(0,12)){const o=await this.openFile(i);o&&Object.prototype.hasOwnProperty.call(r,i)&&this.updateContent(o.key,r[i])}const s=this.tabs.find(i=>i.path===(n==null?void 0:n.active_path));s&&(this.activeKey=s.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const t={};for(const r of this.tabs)r.dirty&&(t[r.path]=r.content);try{await ye.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:t})}catch{}}async runGit(t,n={}){try{const r=await ye.git(this.connectionId,{action:t,path:this.path||".",...n});return r.not_a_repo?(this.gitOutput=r.error||"This folder is not a Git repository.",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.gitCommits=[],this.gitHistoryLoaded=!1,this.notARepo=!0,null):(this.notARepo=!1,this.gitAhead=r.ahead||0,this.gitBehind=r.behind||0,this.gitHasUpstream=!!r.has_upstream,t==="log"?(this.gitCommits=r.commits||[],this.gitHistoryLoaded=!0):t!=="show"&&(this.gitOutput=r.output||r.status||""),this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",["commit","switch","create_branch","pull","push","fetch"].includes(t)&&(this.gitHistoryLoaded=!1),r)}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}Ys=new WeakMap,Js=new WeakMap,Xs=new WeakMap,Zs=new WeakMap,Qs=new WeakMap,ea=new WeakMap,ta=new WeakMap,na=new WeakMap,ra=new WeakMap,sa=new WeakMap,aa=new WeakMap,oa=new WeakMap,ia=new WeakMap,la=new WeakMap,ca=new WeakMap,ua=new WeakMap,da=new WeakMap,fa=new WeakMap,va=new WeakMap,pa=new WeakMap,ha=new WeakMap,ga=new WeakMap,_a=new WeakMap,ma=new WeakMap;const v=new Ku;Ic();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Uu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Wu=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const bi=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var qu=Al("<svg><!><!></svg>");function fe(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]),r=le(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);wt(t,!1);let s=Ke(t,"name",8,void 0),i=Ke(t,"color",8,"currentColor"),o=Ke(t,"size",8,24),l=Ke(t,"strokeWidth",8,2),c=Ke(t,"absoluteStrokeWidth",8,!1),h=Ke(t,"iconNode",24,()=>[]);Kl();var g=qu();gi(g,($,S,y)=>({...Uu,...$,...r,width:o(),height:o(),stroke:i(),"stroke-width":S,class:y}),[()=>Wu(r)?void 0:{"aria-hidden":"true"},()=>(dr(c()),dr(l()),dr(o()),Bn(()=>c()?Number(l())*24/Number(o()):l())),()=>(dr(bi),dr(s()),dr(n),Bn(()=>bi("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var w=x(g);Ue(w,1,h,Il,($,S)=>{var y=lt(()=>sc(a(S),2));let T=()=>a(y)[0],I=()=>a(y)[1];var D=re(),A=H(D);Nu(A,T,!0,(U,M)=>{gi(U,()=>({...I()}))}),b($,D)});var _=p(w);ue(_,t,"default",{}),b(e,g),kt()}function Gu(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]];fe(e,de({name:"arrow-down-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Yu(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];fe(e,de({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function za(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];fe(e,de({name:"check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function $n(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];fe(e,de({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Aa(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];fe(e,de({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function xi(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];fe(e,de({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Ju(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];fe(e,de({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Xu(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];fe(e,de({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Zu(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];fe(e,de({name:"circle-user"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Qu(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];fe(e,de({name:"circle"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function ed(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];fe(e,de({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function td(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];fe(e,de({name:"corner-left-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function nd(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];fe(e,de({name:"ellipsis"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function rd(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];fe(e,de({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function yi(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 16-3 3 3 3"}],["path",{d:"m9 22 3-3-3-3"}]];fe(e,de({name:"file-code-corner"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function sd(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];fe(e,de({name:"file-diff"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function ad(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];fe(e,de({name:"file-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Xo(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];fe(e,de({name:"file"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function od(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];fe(e,de({name:"files"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function ho(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];fe(e,de({name:"folder-open"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function id(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];fe(e,de({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function ld(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];fe(e,de({name:"folder"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Ao(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];fe(e,de({name:"git-branch"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function cd(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 16h.01"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{d:"M21.946 12.013H2.054"}],["path",{d:"M6 16h.01"}]];fe(e,de({name:"hard-drive"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function ud(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];fe(e,de({name:"history"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function dd(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];fe(e,de({name:"link-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function fn(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];fe(e,de({name:"loader"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function wi(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];fe(e,de({name:"message-square"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function fd(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m14 10 7-7"}],["path",{d:"M20 10h-6V4"}],["path",{d:"m3 21 7-7"}],["path",{d:"M4 14h6v6"}]];fe(e,de({name:"minimize-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function vd(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}]];fe(e,de({name:"minus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function pd(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];fe(e,de({name:"monitor-smartphone"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function hd(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];fe(e,de({name:"panel-bottom"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function gd(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];fe(e,de({name:"panel-left"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function _d(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"}]];fe(e,de({name:"paperclip"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Hs(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];fe(e,de({name:"plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Io(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];fe(e,de({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Zo(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];fe(e,de({name:"search"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function ki(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];fe(e,de({name:"server"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function $i(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14 17H5"}],["path",{d:"M19 7h-9"}],["circle",{cx:"17",cy:"17",r:"3"}],["circle",{cx:"7",cy:"7",r:"3"}]];fe(e,de({name:"settings-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function md(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];fe(e,de({name:"shield-alert"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function go(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];fe(e,de({name:"sparkles"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Si(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];fe(e,de({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function bd(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];fe(e,de({name:"square"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Ci(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];fe(e,de({name:"trash-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function xd(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];fe(e,de({name:"undo-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}function Ba(e,t){const n=le(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];fe(e,de({name:"x"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=re(),l=H(o);ue(l,t,"default",{}),b(s,o)},$$slots:{default:!0}}))}var yd=P('<span class="w-[14px] shrink-0"></span>'),wd=Al('<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.5 3.5h4l1.2 1.4h7.8v7.6H1.5z" fill="#c09553"></path></svg>'),kd=P('<div draggable="true" role="treeitem" tabindex="0"><!> <span class="flex shrink-0 items-center"><!></span> <span class="flex-1 truncate text-vs-fg"> </span> <span class="hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Rename"><span class="text-[11px] leading-none">✎</span></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Delete"><span class="text-[11px] leading-none">🗑</span></button></span></div> <!>',1);function Ul(e,t){wt(t,!0);const n=lt(()=>t.dir==="."?t.entry.name:`${t.dir}/${t.entry.name}`),r=lt(()=>!!v.expanded[a(n)]),s=lt(()=>v.treeChildren[a(n)]||[]),i=lt(()=>{var K;return((K=v.activeTab)==null?void 0:K.path)===a(n)});async function o(){t.entry.is_dir?await v.toggleDirectory(a(n)):await v.openFile(a(n))}let l=z(!1);function c(K){K.stopPropagation(),K.dataTransfer.effectAllowed="move",K.dataTransfer.setData("text/x-ide-path",a(n))}function h(K){!t.entry.is_dir||!K.dataTransfer.types.includes("text/x-ide-path")||(K.preventDefault(),K.dataTransfer.dropEffect="move",d(l,!0))}async function g(K){if(d(l,!1),!t.entry.is_dir)return;K.preventDefault(),K.stopPropagation();const ie=K.dataTransfer.getData("text/x-ide-path");if(!ie||ie===a(n))return;if(a(n)===ie||a(n).startsWith(`${ie}/`)){v.setStatus("Cannot move a folder into itself");return}const Q=ie.split("/").pop(),se=a(n)==="."?Q:`${a(n)}/${Q}`;if(se!==ie)try{await ye.fs(v.connectionId,{action:"rename",path:ie,new_path:se}),await v.refreshFiles(),v.setStatus(`Moved ${Q} to ${a(n)}`)}catch(E){v.setStatus(E.message||"Could not move")}}function w(K){var ie;K.preventDefault(),K.stopPropagation(),(ie=v.openTreeMenu)==null||ie.call(v,{path:a(n),isDir:t.entry.is_dir,x:K.clientX,y:K.clientY})}async function _(K){if(K.stopPropagation(),!!confirm(`Delete ${a(n)}? Folders must already be empty.`))try{await ye.fs(v.connectionId,{action:"delete",path:a(n)}),await v.refreshFiles()}catch(ie){v.setStatus(ie.message||"Could not delete")}}async function $(K){K.stopPropagation();const ie=prompt("Rename to (relative path):",a(n));if(!(!ie||ie===a(n)))try{await ye.fs(v.connectionId,{action:"rename",path:a(n),new_path:ie}),await v.refreshFiles()}catch(Q){v.setStatus(Q.message||"Could not rename")}}var S=kd(),y=H(S);let T;var I=x(y);{var D=K=>{var ie=re(),Q=H(ie);{var se=N=>{$n(N,{size:14,class:"shrink-0 text-vs-muted"})},E=N=>{Aa(N,{size:14,class:"shrink-0 text-vs-muted"})};F(Q,N=>{a(r)?N(se):N(E,-1)})}b(K,ie)},A=K=>{var ie=yd();b(K,ie)};F(I,K=>{t.entry.is_dir?K(D):K(A,-1)})}var U=p(I,2),M=x(U);{var C=K=>{var ie=wd();b(K,ie)},O=K=>{dd(K,{size:14,class:"text-vs-muted"})},Y=K=>{Xo(K,{size:14,class:"text-vs-blue"})};F(M,K=>{t.entry.is_dir?K(C):t.entry.is_symlink?K(O,1):K(Y,-1)})}var J=p(U,2),be=ne(J,!0),ge=p(J,2),oe=x(ge),Me=p(oe,2),ze=p(y,2);{var He=K=>{var ie=re(),Q=H(ie);Ue(Q,17,()=>a(s),se=>se.name,(se,E)=>{{let N=lt(()=>t.depth+1);Ul(se,{get entry(){return a(E)},get dir(){return a(n)},get depth(){return a(N)}})}}),b(K,ie)};F(ze,K=>{t.entry.is_dir&&a(r)&&K(He)})}W(()=>{T=xt(y,1,"group flex cursor-pointer items-center gap-1 py-[2px] pr-1 text-[13px] hover:bg-vs-hover",null,T,{"bg-vs-active":a(i),"ring-1":a(l),"ring-vs-accent":a(l)}),kr(y,`padding-left: ${8+t.depth*12}px`),_e(y,"aria-expanded",t.entry.is_dir?a(r):void 0),_e(y,"aria-selected",a(i)),_e(y,"title",a(n)),V(be,t.entry.name),_e(oe,"aria-label",`Rename ${t.entry.name??""}`),_e(Me,"aria-label",`Delete ${t.entry.name??""}`)}),R("click",y,o),R("keydown",y,K=>{(K.key==="Enter"||K.key===" ")&&(K.preventDefault(),o())}),R("contextmenu",y,w),rt("dragstart",y,c),rt("dragover",y,h),rt("dragleave",y,()=>d(l,!1)),rt("drop",y,g),R("click",oe,$),R("click",Me,_),b(e,S),kt()}en(["click","keydown","contextmenu"]);var $d=P('<form class="px-2 pb-1"><input class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"/></form>'),Sd=P('<p class="px-4 py-2 text-xs text-vs-muted">No folder opened.</p>'),Cd=P('<p class="px-4 py-2 text-xs text-vs-muted">No files here</p>'),Ed=P('<form class="px-2 py-1"><input class="w-full rounded-sm border border-vs-line bg-vs-input px-1.5 py-0.5 text-xs outline-none focus:border-vs-accent"/></form>'),Td=P('<button class="w-full px-3 py-1 text-left hover:bg-vs-hover">Rename…</button> <button class="w-full px-3 py-1 text-left hover:bg-vs-hover">Copy Path</button> <div class="my-1 h-px bg-vs-line"></div> <button class="w-full px-3 py-1 text-left text-vs-red hover:bg-vs-hover">Delete</button>',1),Nd=P('<div class="fixed z-50 min-w-[170px] rounded-md border border-vs-line bg-vs-panel py-1 text-xs shadow-2xl" data-tree-menu=""><!></div>'),Pd=P('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase"><span class="flex-1 truncate">Explorer</span></div> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase"><!> <span class="flex-1 truncate"> </span> <span class="flex opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"><!></button></span></div> <!> <input class="mx-2 mb-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none focus:border-vs-accent" placeholder="Filter files…"/> <div class="min-h-0 flex-1 overflow-y-auto pb-2"><!></div> <!></div>');function Md(e,t){wt(t,!0);let n=z(null),r=z(!1),s=z(""),i=z(null);function o(){d(n,null),d(r,!1)}v.openTreeMenu=N=>{d(n,{...N,x:Math.min(N.x,window.innerWidth-190)},!0),d(r,!1)};async function l(){var pe,Ee;d(s,a(n).path,!0),d(r,!0),await El(),(pe=a(i))==null||pe.focus();const N=a(s).lastIndexOf("/"),q=a(s).lastIndexOf(".");(Ee=a(i))==null||Ee.setSelectionRange(N+1,q>N+1?q:a(s).length)}async function c(N){N.preventDefault();const q=a(s).trim(),pe=a(n).path;if(o(),!(!q||q===pe))try{await ye.fs(v.connectionId,{action:"rename",path:pe,new_path:q}),await v.refreshFiles()}catch(Ee){v.setStatus(Ee.message||"Could not rename")}}async function h(){const N=a(n).path;if(o(),!!confirm(`Delete ${N}? Folders must already be empty.`))try{await ye.fs(v.connectionId,{action:"delete",path:N}),await v.refreshFiles()}catch(q){v.setStatus(q.message||"Could not delete")}}function g(){var q;const N=a(n).path;o(),(q=navigator.clipboard)==null||q.writeText(N).catch(()=>{}),v.setStatus(`Copied ${N}`)}let w=z(""),_=z("");const $=(N,q)=>N==="."?q:`${N}/${q}`;async function S(N){N.preventDefault();const q=a(_).trim();if(q)try{await ye.fs(v.connectionId,{action:a(w)==="dir"?"create_dir":"create_file",path:$(v.path,q)}),d(w,""),d(_,""),await v.refreshFiles()}catch(pe){v.setStatus(pe.message||"Could not create")}}const y=lt(()=>{var N,q;return(((N=v.connection)==null?void 0:N.workspace_root)||"").split("/").filter(Boolean).pop()||((q=v.connection)==null?void 0:q.label)||"WORKSPACE"});var T=Pd();rt("click",Cr,N=>{var q,pe;a(n)&&!((pe=(q=N.target).closest)!=null&&pe.call(q,"[data-tree-menu]"))&&o()}),rt("keydown",Cr,N=>{N.key==="Escape"&&o()});var I=p(x(T),2),D=x(I);$n(D,{size:14,class:"shrink-0 text-vs-muted"});var A=p(D,2),U=ne(A,!0),M=p(A,2),C=x(M),O=x(C);ad(O,{size:14});var Y=p(C,2),J=x(Y);id(J,{size:14});var be=p(Y,2),ge=x(be);Io(ge,{size:13});var oe=p(I,2);{var Me=N=>{var q=$d(),pe=x(q);Ji(pe,!0),W(()=>_e(pe,"placeholder",a(w)==="dir"?"New folder name":"New file name")),rt("submit",q,S),R("keydown",pe,Ee=>{Ee.key==="Escape"&&d(w,"")}),rt("blur",pe,()=>{a(_).trim()||d(w,"")}),Le(pe,()=>a(_),Ee=>d(_,Ee)),b(N,q)};F(oe,N=>{a(w)&&N(Me)})}var ze=p(oe,2),He=p(ze,2),K=x(He);{var ie=N=>{var q=Sd();b(N,q)},Q=N=>{var q=re(),pe=H(q);Ue(pe,17,()=>v.visibleEntries,Ee=>Ee.name,(Ee,at)=>{Ul(Ee,{get entry(){return a(at)},get dir(){return v.path},depth:0})},Ee=>{var at=Cd();b(Ee,at)}),b(N,q)};F(K,N=>{v.connectionId?N(Q,-1):N(ie)})}var se=p(He,2);{var E=N=>{var q=Nd(),pe=x(q);{var Ee=pt=>{var Ht=Ed(),At=x(Ht);ss(At,$t=>d(i,$t),()=>a(i)),rt("submit",Ht,c),R("keydown",At,$t=>{$t.key==="Escape"&&o()}),Le(At,()=>a(s),$t=>d(s,$t)),b(pt,Ht)},at=pt=>{var Ht=Td(),At=H(Ht),$t=p(At,2),Nn=p($t,4);R("click",At,l),R("click",$t,g),R("click",Nn,h),b(pt,Ht)};F(pe,pt=>{a(r)?pt(Ee):pt(at,-1)})}W(()=>kr(q,`left: ${a(n).x??""}px; top: ${a(n).y??""}px`)),b(N,q)};F(se,N=>{a(n)&&N(E)})}W(()=>{var N;_e(A,"title",(N=v.connection)==null?void 0:N.workspace_root),V(U,a(y))}),R("click",C,()=>{d(w,"file"),d(_,"")}),R("click",Y,()=>{d(w,"dir"),d(_,"")}),R("click",be,()=>v.refreshFiles()),Le(ze,()=>v.filter,N=>v.filter=N),b(e,T),kt()}en(["click","keydown"]);var zd=P('<div class="absolute top-full right-0 z-20 mt-1 min-w-[170px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"><button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Fetch</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Pull</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Push</button> <div class="my-1 h-px bg-vs-line"></div> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Create Branch…</button></div>'),Ad=P('<p class="mx-3 flex items-center gap-1.5 text-xs text-vs-muted"><!> Reading repository…</p>'),Id=P(`<p class="mx-3 text-xs leading-relaxed text-vs-muted">This folder isn't a Git repository.<br/> Open a folder containing a <code class="rounded-sm bg-vs-input px-1">.git</code> directory,
      or run <code class="rounded-sm bg-vs-input px-1">git init</code> in the terminal.</p>`),Od=P('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Unstage"><!></button></span> <span> </span></div>'),Rd=P('<div class="flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Staged Changes</span></button> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!>',1),Dd=P('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Open changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Discard changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Stage changes"><!></button></span> <span> </span></div>'),Ld=P('<p class="px-6 py-2 text-xs text-vs-muted">No changes.</p>'),Fd=P('<div class="min-h-0 flex-1 overflow-y-auto"></div>'),jd=P('<span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span>'),Hd=P('<span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh history" aria-label="Refresh history"><!></button></span> <!>',1),Bd=P('<span class="shrink-0 rounded-sm bg-vs-line px-1 text-[10px] text-vs-blue"> </span>'),Vd=P('<div class="group flex cursor-pointer flex-col gap-0.5 py-1 pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><div class="flex min-w-0 items-center gap-1.5"><span class="truncate text-vs-fg"> </span> <!></div> <div class="flex min-w-0 items-center gap-1.5 text-[11px] text-vs-muted"><span class="shrink-0 font-mono text-vs-yellow"> </span> <span class="truncate"> </span> <span class="ml-auto shrink-0"> </span></div></div>'),Kd=P('<p class="px-6 py-2 text-xs text-vs-muted"> </p>'),Ud=P('<div class="max-h-[45%] min-h-0 flex-1 overflow-y-auto"></div>'),Wd=P('<button class="flex items-center gap-1 rounded-sm px-1 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Pull then push"><!> </button>'),qd=P('<div class="flex gap-1 border-t border-vs-line px-3 py-2"><input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="New branch name"/> <button class="rounded-sm bg-vs-status px-2 py-1 text-xs text-white">Create</button></div>'),Gd=P('<pre class="max-h-[120px] shrink-0 overflow-auto border-t border-vs-line px-3 py-1.5 text-[11px] whitespace-pre-wrap text-vs-muted"> </pre>'),Yd=P('<div class="px-3 pb-2"><textarea class="w-full resize-none rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs text-vs-fg outline-none focus:border-vs-accent placeholder:text-vs-muted" rows="2"></textarea> <button class="mt-1 flex w-full items-center justify-center gap-1.5 rounded-sm bg-vs-status px-2 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"><!> Commit</button></div> <!> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Changes</span></button> <span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh" aria-label="Refresh"><!></button> <button class="rounded-sm p-0.5 hover:bg-vs-line" title="Stage all changes" aria-label="Stage all"><!></button></span> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!> <div class="group flex shrink-0 items-center gap-1 border-t border-vs-line px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <!> <span class="truncate">History</span></button> <!></div> <!> <div class="mt-auto flex items-center gap-2 border-t border-vs-line px-3 py-1.5 text-[11px]"><span class="flex min-w-0 items-center gap-1 text-vs-muted" title="Current branch"><!> <span class="truncate"> </span></span> <!></div> <!> <!>',1),Jd=P('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase"><span class="flex-1">Source Control</span> <div class="relative" data-scm-menu=""><button class="rounded-sm p-0.5 hover:bg-vs-hover" title="More actions" aria-label="More actions"><!></button> <!></div></div> <!></div>');function Xd(e,t){wt(t,!0);let n=z(""),r=z(""),s=z(!1),i=z(!0),o=z(!0),l=z(!1),c=z(!1);const h=lt(()=>(v.gitStatus||"").split(`
`).filter(E=>E&&!E.startsWith("##")).map(E=>{const N=E.slice(3),q=N.indexOf(" -> "),pe=q===-1?N:N.slice(q+4);return{index:E[0]===" "?"":E[0],work:E[1]===" "?"":E[1],code:E.slice(0,2).trim()||"??",path:pe.replace(/\r$/,""),from:q===-1?"":N.slice(0,q)}}).filter(E=>E.path)),g=lt(()=>a(h).filter(E=>E.index&&E.index!=="?")),w=lt(()=>a(h).filter(E=>E.work&&E.work!==" ")),_=E=>E.includes("?")||E.includes("A")?"text-vs-green":E.includes("D")?"text-vs-red":E.includes("R")?"text-vs-blue":"text-vs-yellow",$=E=>E.split("/").pop(),S=E=>{const N=E.split("/");return N.pop(),N.join("/")};async function y(E,N={}){v.gitBusy=E;try{return await v.runGit(E,N)}finally{v.gitBusy=""}}async function T(){if(!a(n).trim()||!a(g).length)return;await y("commit",{message:a(n).trim()})&&d(n,"")}async function I(){if(!a(r).trim())return;await y("create_branch",{branch:a(r).trim()})&&(d(r,""),d(s,!1))}async function D(E){confirm(`Discard changes in ${E.path}? This cannot be undone.`)&&await y("discard",{files:[E.path]})}async function A(E){const N=await v.runGit("diff_file",{files:[E.path]});N&&v.openDiffTab(E.path,N.output||"No changes to show.")}let U=z("");ct(()=>{const E=v.connectionId,N=v.connectionState,q=E?`${E}|${N}`:"";!E||N!=="connected"||a(U)!==q&&(d(U,q,!0),y("status"))});async function M(){d(l,!a(l)),a(l)&&!v.gitHistoryLoaded&&await y("log")}ct(()=>{a(l)&&!v.gitHistoryLoaded&&!v.notARepo&&!v.gitBusy&&y("log")});async function C(E){const N=await v.runGit("show",{ref:E.hash});N&&v.openDiffTab(`${E.short} ${E.subject}`,N.output||"Empty commit.")}const O=E=>(E||"").split(",").map(N=>N.trim().replace(/^HEAD -> /,"")).filter(Boolean);function Y(E){E.key==="Enter"&&(E.ctrlKey||E.metaKey)&&(E.preventDefault(),T())}var J=Jd();rt("click",Cr,E=>{var N,q;(q=(N=E.target).closest)!=null&&q.call(N,"[data-scm-menu]")||d(c,!1)});var be=x(J),ge=p(x(be),2),oe=x(ge),Me=x(oe);nd(Me,{size:14});var ze=p(oe,2);{var He=E=>{var N=zd(),q=x(N),pe=p(q,2),Ee=p(pe,2),at=p(Ee,4);R("click",q,()=>{d(c,!1),y("fetch")}),R("click",pe,()=>{d(c,!1),y("pull")}),R("click",Ee,()=>{d(c,!1),y("push")}),R("click",at,()=>{d(c,!1),d(s,!a(s))}),b(E,N)};F(ze,E=>{a(c)&&E(He)})}var K=p(be,2);{var ie=E=>{var N=Ad(),q=x(N);fn(q,{size:12,class:"animate-spin"}),b(E,N)},Q=E=>{var N=Id();b(E,N)},se=E=>{var N=Yd(),q=H(N),pe=x(q),Ee=p(pe,2),at=x(Ee);{var pt=ee=>{fn(ee,{size:12,class:"animate-spin"})},Ht=ee=>{za(ee,{size:12})};F(at,ee=>{v.gitBusy==="commit"?ee(pt):ee(Ht,-1)})}var At=p(q,2);{var $t=ee=>{var Re=Rd(),Te=H(Re),ce=x(Te),Ne=x(ce);{var ht=Je=>{$n(Je,{size:14,class:"text-vs-muted"})},Ye=Je=>{Aa(Je,{size:14,class:"text-vs-muted"})};F(Ne,Je=>{a(o)?Je(ht):Je(Ye,-1)})}var Vt=p(ce,2),It=ne(Vt,!0),We=p(Te,2);{var ot=Je=>{var dt=re(),zn=H(dt);Ue(zn,17,()=>a(g),St=>St.path,(St,Xe)=>{var ft=Od(),gn=x(ft),k=ne(gn,!0),u=p(gn,2),m=ne(u,!0),L=p(u,2),j=x(L),B=x(j);vd(B,{size:13});var X=p(L,2),Z=ne(X,!0);W((ve,te,$e)=>{_e(ft,"title",a(Xe).path),V(k,ve),V(m,te),_e(j,"aria-label",`Unstage ${a(Xe).path??""}`),xt(X,1,`shrink-0 font-mono text-[11px] ${$e??""}`),V(Z,a(Xe).index||a(Xe).code)},[()=>$(a(Xe).path),()=>S(a(Xe).path),()=>_(a(Xe).code)]),R("click",ft,()=>A(a(Xe))),R("keydown",ft,ve=>{ve.key==="Enter"&&A(a(Xe))}),R("click",j,ve=>{ve.stopPropagation(),y("unstage",{files:[a(Xe).path]})}),b(St,ft)}),b(Je,dt)};F(We,Je=>{a(o)&&Je(ot)})}W(()=>V(It,a(g).length)),R("click",ce,()=>d(o,!a(o))),b(ee,Re)};F(At,ee=>{a(g).length&&ee($t)})}var Nn=p(At,2),Vn=x(Nn),Oe=x(Vn);{var hn=ee=>{$n(ee,{size:14,class:"text-vs-muted"})},Kn=ee=>{Aa(ee,{size:14,class:"text-vs-muted"})};F(Oe,ee=>{a(i)?ee(hn):ee(Kn,-1)})}var Pn=p(Vn,2),Mn=x(Pn),Bt=x(Mn);Io(Bt,{size:12});var ar=p(Mn,2),fs=x(ar);Hs(fs,{size:13});var or=p(Pn,2),vs=ne(or,!0),tn=p(Nn,2);{var ir=ee=>{var Re=Fd();Ue(Re,21,()=>a(w),Te=>Te.path,(Te,ce)=>{var Ne=Dd(),ht=x(Ne),Ye=ne(ht,!0),Vt=p(ht,2),It=ne(Vt,!0),We=p(Vt,2),ot=x(We),Je=x(ot);sd(Je,{size:13});var dt=p(ot,2),zn=x(dt);xd(zn,{size:13});var St=p(dt,2),Xe=x(St);Hs(Xe,{size:13});var ft=p(We,2),gn=ne(ft,!0);W((k,u,m)=>{_e(Ne,"title",a(ce).path),V(Ye,k),V(It,u),_e(ot,"aria-label",`Open changes to ${a(ce).path??""}`),_e(dt,"aria-label",`Discard changes to ${a(ce).path??""}`),_e(St,"aria-label",`Stage ${a(ce).path??""}`),xt(ft,1,`shrink-0 font-mono text-[11px] ${m??""}`),V(gn,a(ce).work||a(ce).code)},[()=>$(a(ce).path),()=>S(a(ce).path),()=>_(a(ce).code)]),R("click",Ne,()=>A(a(ce))),R("keydown",Ne,k=>{k.key==="Enter"&&A(a(ce))}),R("click",ot,k=>{k.stopPropagation(),A(a(ce))}),R("click",dt,k=>{k.stopPropagation(),D(a(ce))}),R("click",St,k=>{k.stopPropagation(),y("stage",{files:[a(ce).path]})}),b(Te,Ne)},Te=>{var ce=Ld();b(Te,ce)}),b(ee,Re)};F(tn,ee=>{a(i)&&ee(ir)})}var Er=p(tn,2),nn=x(Er),Un=x(nn);{var Tr=ee=>{$n(ee,{size:14,class:"text-vs-muted"})},Nr=ee=>{Aa(ee,{size:14,class:"text-vs-muted"})};F(Un,ee=>{a(l)?ee(Tr):ee(Nr,-1)})}var Wn=p(Un,2);ud(Wn,{size:12,class:"shrink-0 text-vs-muted"});var ps=p(nn,2);{var Pr=ee=>{var Re=Hd(),Te=H(Re),ce=x(Te),Ne=x(ce);{var ht=We=>{fn(We,{size:12,class:"animate-spin"})},Ye=We=>{Io(We,{size:12})};F(Ne,We=>{v.gitBusy==="log"?We(ht):We(Ye,-1)})}var Vt=p(Te,2);{var It=We=>{var ot=jd(),Je=ne(ot,!0);W(()=>V(Je,v.gitCommits.length)),b(We,ot)};F(Vt,We=>{v.gitCommits.length&&We(It)})}R("click",ce,()=>y("log")),b(ee,Re)};F(ps,ee=>{a(l)&&ee(Pr)})}var Mr=p(Er,2);{var lr=ee=>{var Re=Ud();Ue(Re,21,()=>v.gitCommits,Te=>Te.hash,(Te,ce)=>{var Ne=Vd(),ht=x(Ne),Ye=x(ht),Vt=ne(Ye,!0),It=p(Ye,2);Ue(It,17,()=>O(a(ce).refs),Il,(ft,gn)=>{var k=Bd(),u=ne(k,!0);W(()=>V(u,a(gn))),b(ft,k)});var We=p(ht,2),ot=x(We),Je=ne(ot,!0),dt=p(ot,2),zn=ne(dt,!0),St=p(dt,2),Xe=ne(St,!0);W(()=>{_e(Ne,"title",`${a(ce).short} · ${a(ce).author} · ${a(ce).date}`),V(Vt,a(ce).subject),V(Je,a(ce).short),V(zn,a(ce).author),V(Xe,a(ce).relative)}),R("click",Ne,()=>C(a(ce))),R("keydown",Ne,ft=>{ft.key==="Enter"&&C(a(ce))}),b(Te,Ne)},Te=>{var ce=Kd(),Ne=ne(ce,!0);W(()=>V(Ne,v.gitBusy==="log"?"Loading history…":"No commits yet.")),b(Te,ce)}),b(ee,Re)};F(Mr,ee=>{a(l)&&ee(lr)})}var zr=p(Mr,2),qn=x(zr),cr=x(qn);Ao(cr,{size:12,class:"shrink-0"});var hs=p(cr,2),gs=ne(hs,!0),_s=p(qn,2);{var ms=ee=>{var Re=Wd(),Te=x(Re);{var ce=Ye=>{fn(Ye,{size:11,class:"animate-spin"})},Ne=Ye=>{Gu(Ye,{size:11})};F(Te,Ye=>{v.gitBusy==="pull"||v.gitBusy==="push"?Ye(ce):Ye(Ne,-1)})}var ht=p(Te);W(()=>V(ht,` ${v.gitBehind??""}↓ ${v.gitAhead??""}↑`)),R("click",Re,()=>y("pull").then(()=>y("push"))),b(ee,Re)};F(_s,ee=>{v.gitHasUpstream&&ee(ms)})}var Gn=p(zr,2);{var Ar=ee=>{var Re=qd(),Te=x(Re),ce=p(Te,2);R("keydown",Te,Ne=>{Ne.key==="Enter"&&I(),Ne.key==="Escape"&&d(s,!1)}),Le(Te,()=>a(r),Ne=>d(r,Ne)),R("click",ce,I),b(ee,Re)};F(Gn,ee=>{a(s)&&ee(Ar)})}var bs=p(Gn,2);{var Ir=ee=>{var Re=Gd(),Te=ne(Re,!0);W(()=>V(Te,v.gitOutput)),b(ee,Re)};F(bs,ee=>{v.gitOutput&&ee(Ir)})}W(ee=>{_e(pe,"placeholder",`Message (Ctrl+Enter to commit on "${v.gitBranch||"branch"}")`),Ee.disabled=ee,_e(Ee,"title",a(g).length?"Commit staged changes":"Stage a change first"),V(vs,a(w).length),V(gs,v.gitBranch||"—")},[()=>!a(n).trim()||!a(g).length||v.gitBusy==="commit"]),R("keydown",pe,Y),Le(pe,()=>a(n),ee=>d(n,ee)),R("click",Ee,T),R("click",Vn,()=>d(i,!a(i))),R("click",Mn,()=>y("status")),R("click",ar,()=>y("stage",{files:["."]})),R("click",nn,M),b(E,N)};F(K,E=>{!a(U)||v.gitBusy==="status"&&!v.gitStatus&&!v.notARepo?E(ie):v.notARepo?E(Q,1):E(se,-1)})}R("click",oe,()=>d(c,!a(c))),b(e,J),kt()}en(["click","keydown"]);const Zd="modulepreload",Qd=function(e,t){return new URL(e,t).href},Ei={},Ia=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(g){return Promise.all(g.map(w=>Promise.resolve(w).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),h=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(g=>{if(g=Qd(g,r),g in Ei)return;Ei[g]=!0;const w=g.endsWith(".css"),_=w?'[rel="stylesheet"]':"";if(!!r)for(let y=l.length-1;y>=0;y--){const T=l[y];if(T.href===g&&(!w||T.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${g}"]${_}`))return;const S=document.createElement("link");if(S.rel=w?"stylesheet":Zd,w||(S.as="script"),S.crossOrigin="",S.href=g,h&&S.setAttribute("nonce",h),document.head.appendChild(S),w)return new Promise((y,T)=>{S.addEventListener("load",y),S.addEventListener("error",()=>T(new Error(`Unable to preload CSS for ${g}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},Ds={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},ef={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function tf(e){var n;const t=(e||"").split("/").pop()||"";return t.toLowerCase()==="dockerfile"?"dockerfile":t.toLowerCase()==="makefile"?"shell":ef[(n=t.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var nf=P('<div class="editor svelte-1h8xysy"></div>');function rf(e,t){wt(t,!0);let n,r=null,s=null,i="",o=!1;ds(async()=>{s=await Ia(()=>import("./ide-monaco.js").then(c=>c.a),__vite__mapDeps([0,1]),import.meta.url),s.editor.defineTheme("monokai",Ds),r=s.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{o||!i||v.updateContent(i,r.getValue())}),r.addCommand(s.KeyMod.CtrlCmd|s.KeyCode.KeyS,()=>v.saveActive())}),Jo(()=>r==null?void 0:r.dispose()),ct(()=>{const c=v.activeTab;if(!(!r||!s)){if(!c){o=!0,r.setValue(""),i="",o=!1;return}if(c.key!==i){o=!0;const h=s.editor.createModel(c.content,c.language||tf(c.path)),g=r.getModel();r.setModel(h),g==null||g.dispose(),r.updateOptions({readOnly:!!c.readOnly}),i=c.key,o=!1}else r.getValue()!==c.content&&(o=!0,r.setValue(c.content),o=!1)}});var l=nf();ss(l,c=>n=c,()=>n),b(e,l),kt()}var Zn=Lu(()=>v),sf=P('<span class="h-2 w-2 rounded-full bg-vs-fg group-hover:hidden"></span> <!>',1),af=P('<div><button class="flex items-center gap-1.5 py-2 pr-1 pl-3" role="tab"><!> <span class="whitespace-nowrap"> </span></button> <button class="mr-1.5 flex h-5 w-5 items-center justify-center rounded-sm hover:bg-vs-line"><!></button></div>'),of=P('<div class="px-3 py-2 text-xs text-vs-muted">Open a file from the Explorer</div>'),lf=P('<div class="flex min-h-[35px] items-stretch overflow-x-auto bg-vs-tabinactive" role="tablist"></div>');function cf(e,t){wt(t,!1);const n=s=>s.split("/").pop();Kl();var r=lf();Ue(r,5,()=>Zn().tabs,s=>s.key,(s,i)=>{var o=af();let l;var c=x(o),h=x(c);Xo(h,{size:14,class:"shrink-0 text-vs-blue"});var g=p(h,2),w=ne(g,!0),_=p(c,2),$=x(_);{var S=T=>{var I=sf(),D=p(H(I),2);Ba(D,{size:14,class:"hidden group-hover:block"}),b(T,I)},y=T=>{Ba(T,{size:14,class:"opacity-0 group-hover:opacity-100"})};F($,T=>{a(i).dirty?T(S):T(y,-1)})}W((T,I)=>{l=xt(o,1,"group flex items-center border-r border-vs-bg text-[13px]",null,l,{"bg-vs-tabactive":a(i).key===Zn().activeKey,"text-vs-bright":a(i).key===Zn().activeKey,"text-vs-muted":a(i).key!==Zn().activeKey}),_e(c,"aria-selected",a(i).key===Zn().activeKey),_e(c,"title",a(i).path),V(w,T),_e(_,"title",a(i).dirty?"Unsaved changes — close":"Close"),_e(_,"aria-label",`Close ${I??""}`)},[()=>n(a(i).path),()=>n(a(i).path)]),R("click",c,()=>Zn(Zn().activeKey=a(i).key)),R("click",_,()=>Zn().closeTab(a(i).key)),b(s,o)},s=>{var i=of();b(s,i)}),b(e,r),kt()}en(["click"]);var uf=P(`<div class="pointer-events-none absolute inset-2 z-20 flex items-center justify-center
                rounded-md border-2 border-dashed border-mk-green/70 bg-mk-bg/80 text-xs text-mk-green svelte-1roe1v9">Drop files to attach</div>`),df=P('<p class="rounded-sm border border-mk-pink/40 bg-mk-pink/10 px-2 py-1 text-xs text-mk-pink svelte-1roe1v9"> </p>'),ff=P('<div class="flex flex-col gap-1.5 svelte-1roe1v9"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green svelte-1roe1v9"><!> </span> <div class="chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"></div></div>'),vf=P('<div class="flex flex-col gap-1.5 border-l-2 border-mk-blue/60 pl-2.5 svelte-1roe1v9"><span class="text-[11px] font-semibold text-mk-blue svelte-1roe1v9">You</span> <div class="text-[13px] leading-relaxed whitespace-pre-wrap text-mk-fg/90 svelte-1roe1v9"> </div></div>'),pf=P(`<div class="m-auto flex max-w-[250px] flex-col items-center gap-2.5 text-center svelte-1roe1v9"><!> <p class="text-xs leading-relaxed text-mk-comment svelte-1roe1v9">Ask about the file you have open. The prompt goes to <span class="text-mk-muted svelte-1roe1v9"> </span>,
            and the reply appears here.</p></div>`),hf=P('<div class="flex flex-col gap-1.5 svelte-1roe1v9"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green svelte-1roe1v9"><!> </span> <div class="chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"><!><span class="chat-caret svelte-1roe1v9"></span></div></div>'),gf=P('<div class="flex items-center gap-2 text-[11px] text-mk-comment svelte-1roe1v9"><!> <span class="svelte-1roe1v9"> <span class="chat-dots svelte-1roe1v9"></span></span></div>'),_f=P(`<button class="mx-auto -mt-1 mb-1 flex shrink-0 items-center gap-1 rounded-full border border-mk-line
             bg-mk-input px-2.5 py-0.5 text-[11px] text-mk-comment shadow hover:text-mk-fg svelte-1roe1v9"><!> </button>`),mf=P(`<span title="Context used of the model's window"> </span> <span class="h-2 w-16 overflow-hidden rounded-full bg-mk-line svelte-1roe1v9" aria-hidden="true"><span></span></span>`,1),bf=P('<span class="text-mk-muted svelte-1roe1v9" title="Several sessions share this folder — totals cover all of them">shared</span>'),xf=P('<span class="truncate text-mk-muted svelte-1roe1v9" title="Model for the most recent turn"> </span>'),yf=P('<!> <span class="svelte-1roe1v9"> </span> <!> <!>',1),wf=P('<span class="text-mk-muted svelte-1roe1v9">No usage reported yet</span>'),kf=P('<button class="ml-auto flex items-center gap-1 rounded-sm px-1.5 py-0.5 hover:bg-mk-line hover:text-mk-fg disabled:opacity-40 svelte-1roe1v9" title="Compact the conversation to free up context (/compact)"><!> Compact</button>'),$f=P('<span class="flex items-center gap-1 rounded-sm bg-mk-input px-1.5 py-0.5 text-[11px] text-mk-fg svelte-1roe1v9"><!> <button class="rounded-sm p-0.5 text-mk-comment hover:text-mk-fg svelte-1roe1v9" title="Remove attachment">×</button></span>'),Sf=P('<div class="flex shrink-0 flex-wrap gap-1 border-t border-mk-line px-3 py-1.5 svelte-1roe1v9"></div>'),Ti=P('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line svelte-1roe1v9"><span class="w-3 text-mk-green svelte-1roe1v9"><!></span> </button>'),Cf=P('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[150px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),Ef=P('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line svelte-1roe1v9"><span class="w-3 text-mk-green svelte-1roe1v9"><!></span> <span class="truncate svelte-1roe1v9"> </span></button>'),Tf=P('<div class="absolute bottom-full left-0 z-20 mb-1 max-h-[260px] min-w-[190px] overflow-y-auto rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),Nf=P('<div class="relative svelte-1roe1v9" data-menu=""><button class="flex max-w-[110px] items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Model"><span class="truncate svelte-1roe1v9"> </span> <!></button> <!></div>'),Pf=P('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[130px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),Mf=P('<div class="relative svelte-1roe1v9" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Reasoning effort"> <!></button> <!></div>'),zf=P('<div class="relative flex h-full min-h-0 flex-col bg-mk-bg text-mk-fg svelte-1roe1v9" role="region" aria-label="AI Agent conversation"><!> <div class="relative flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-3 py-3 svelte-1roe1v9"><!> <!> <!> <!></div> <!> <div class="flex shrink-0 items-center gap-2 border-t border-mk-line px-3 py-1 text-[10px] text-mk-comment svelte-1roe1v9"><!> <!></div> <!> <div class="border-t border-mk-line p-2 svelte-1roe1v9"><div class="rounded-md border border-mk-line bg-mk-input focus-within:border-mk-green svelte-1roe1v9"><textarea rows="2" class="max-h-[200px] w-full resize-none bg-transparent px-2.5 py-2 text-[13px] text-mk-fg outline-none placeholder:text-mk-comment svelte-1roe1v9" placeholder="Ask about this workspace…"></textarea> <div class="flex items-center gap-1 px-1.5 pb-1.5 text-[11px] svelte-1roe1v9"><div class="relative svelte-1roe1v9" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Agent"> <!></button> <!></div> <!> <!> <!> <span class="ml-auto flex items-center gap-1.5 svelte-1roe1v9"><kbd class="hidden text-[10px] text-mk-comment sm:inline svelte-1roe1v9">↵ send · ⇧↵ newline</kbd> <button class="flex h-6 w-6 items-center justify-center rounded-md bg-mk-green text-mk-bg disabled:opacity-40 svelte-1roe1v9" title="Send (Enter)" aria-label="Send"><!></button></span></div></div></div></div>');function Af(e,t){wt(t,!0);let n=Ke(t,"sessions",19,()=>[]),r=Ke(t,"session",3,""),s=Ke(t,"rootPath",3,""),i=Ke(t,"target",15,"");ct(()=>{!i()&&(r()||n()[0])&&i(r()||n()[0])});let o=z(""),l=z(!1),c=0,h=z(!1),g=z(""),w=z("");const _=lt(()=>a(l)||a(h)||!!a(g));let $=z(Pe([])),S=z(""),y=z(null),T=z(null),I=null,D=z(Pe({agent:"codex",available:[],model:"",effort:"",models:[],efforts:[]})),A=z(""),U=z("");const M=lt(()=>(a(D).models.find(u=>u[0]===a(D).model)||[])[1]||a(D).model||"default");let C=z("");async function O(){if(!v.connectionId){d(C,"");return}try{d(C,(await ye.agentContext(v.connectionId)).context||"",!0)}catch{d(C,"")}}ct(()=>{v.connectionId,O()});async function Y(){if(i())try{d(D,{agent:"codex",available:[],model:"",effort:"",models:[],efforts:[],...await ye.sessionAgent(i())},!0)}catch(u){d(D,{agent:a(D).agent,available:[],model:"",effort:"",models:[],efforts:[]},!0),v.setStatus(u.message||"Could not read agent settings")}}async function J(){if(i())try{const u=await ye.chat(i()),m=u.messages||[],L=new Set;for(const te of m)te.role==="user"&&(te.text&&L.add(te.text.trim()),te.full&&L.add(te.full.trim()));const j=a($).filter(te=>te._local&&!L.has((te.text||"").trim())),B=j.length?[...m,...j]:m,X=B.length!==a($).length;d($,B,!0),d(h,!!u.busy),d(w,u.detail||"",!0);const Z=u.pending||"",ve=Z!==a(g);d(g,Z,!0),d(S,""),(X||ve||a(_))&&a(oe)&&queueMicrotask(ze)}catch(u){d(S,u.message||"Could not load chat",!0)}}const be=3e3,ge=600;ct(()=>{const u=a(_)?ge:be;!i()||c===u||(c=u,clearInterval(I),I=setInterval(J,u))});let oe=z(!0);function Me(){if(!a(y))return;const u=a(y).scrollHeight-a(y).scrollTop-a(y).clientHeight;d(oe,u<80)}function ze(){a(y)&&(a(y).scrollTop=a(y).scrollHeight)}function He(){d(oe,!0),ze()}ct(()=>{const u=i();d($,[],!0),d(g,""),d(h,!1),d(oe,!0),I&&clearInterval(I),c=0,u&&(J(),Y())}),Jo(()=>{I&&clearInterval(I)});async function K(u){if(d(A,""),u!==a(D).agent){d(U,"agent");try{await ye.setSessionAgent(i(),u),await Y(),v.setStatus(`Switched to ${u}`)}catch(m){v.setStatus(m.message||"Could not switch agent")}finally{d(U,"")}}}async function ie(u){if(d(A,""),u!==a(D).model){d(U,"model");try{await ye.setSessionModel(i(),u),await Y(),v.setStatus(`Model set to ${u}`)}catch(m){v.setStatus(m.message||"Could not change model")}finally{d(U,"")}}}async function Q(u){if(d(A,""),u!==a(D).effort){d(U,"effort");try{await ye.setSessionEffort(i(),u),await Y(),v.setStatus(`Reasoning effort set to ${u}`)}catch(m){v.setStatus(m.message||"Could not change effort")}finally{d(U,"")}}}function se(){const u=v.connection||{},m=v.activeTab,L=m?m.path:v.path||".",j=m?`
Active file contents (first 12,000 characters):
${m.content.slice(0,12e3)}`:"";return`${a(C)||(u.kind==="local"?`[IDE workspace]
Local folder: ${u.workspace_root||"."}
`:`[IDE workspace]
SSH target: ${u.username||"?"}@${u.host||"?"}
`)}
Currently open: ${L}${j}

${a(o).trim()}`}let E=z(!1),N=z(Pe([]));function q(u){const m=u.dataTransfer;!m||!(m.types.includes("Files")||m.types.includes("text/x-ide-path"))||(u.preventDefault(),d(E,!0))}async function pe(u){u.preventDefault(),d(E,!1);const m=u.dataTransfer;if(!m)return;const L=m.getData("text/x-ide-path");if(L){a(N).includes(L)||d(N,[...a(N),L],!0);return}for(const j of Array.from(m.files||[]))try{const B=new FormData;B.append("file",j);const X=await fetch(`${s()}/api/sessions/${encodeURIComponent(i())}/upload`,{method:"POST",body:B}),Z=await X.json().catch(()=>({}));if(!X.ok)throw new Error(Z.error||"Upload failed");Z.path&&!a(N).includes(Z.path)&&d(N,[...a(N),Z.path],!0)}catch(B){v.setStatus(B.message||`Could not attach ${j.name}`)}}const Ee=u=>{d(N,a(N).filter(m=>m!==u),!0)},at=u=>u.split("/").pop();async function pt(){const u=a(o).trim();if(!u||!i()||a(l))return;const m=a(N).length?`

Attached files (read them from these paths):
${a(N).map(B=>`- ${B}`).join(`
`)}`:"",L=se()+m;d(l,!0);const j={role:"user",text:a(N).length?`${u}

${a(N).map(at).join(", ")}`:u,ts:Date.now()/1e3,_local:!0};d($,[...a($),j],!0),d(o,""),d(N,[],!0),a(T)&&(a(T).style.height="auto"),queueMicrotask(ze);try{const B=await fetch(`${s()}/api/sessions/${encodeURIComponent(i())}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:L,display:u})}),X=await B.json().catch(()=>({}));if(!B.ok)throw d($,a($).filter(Z=>Z!==j),!0),d(o,u,!0),new Error(X.error||"Could not send");J(),setTimeout(J,400)}catch(B){v.setStatus(B.message||"Could not send prompt")}finally{d(l,!1)}}function Ht(u){u.key==="Enter"&&!u.shiftKey&&(u.preventDefault(),pt())}function At(u){const m=u.currentTarget;m.style.height="auto",m.style.height=`${Math.min(m.scrollHeight,200)}px`}const $t=u=>u.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function Nn(u){const m=[];return $t(u).replace(/```(\w*)\n?([\s\S]*?)```/g,(B,X,Z)=>(m.push(`<pre class="chat-code"><code>${Z.replace(/\n$/,"")}</code></pre>`),`\0BLOCK${m.length-1}\0`)).replace(/`([^`\n]+)`/g,'<code class="chat-inline">$1</code>').replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>").split(`
`).map(B=>{const X=B.match(/^\s*[-*]\s+(.*)$/);return X?`<span class="chat-li">${X[1]}</span>`:B}).join(`
`).replace(/\u0000BLOCK(\d+)\u0000/g,(B,X)=>m[Number(X)])}function Vn(u){const m=u.full||u.text||"",L=`

`;if(m.startsWith("[IDE workspace")||m.startsWith("[Remote IDE context]")||m.startsWith("[Remote SSH IDE context]")){const j=m.lastIndexOf(L);if(j!==-1)return m.slice(j+L.length)}return m}let Oe=z(null),hn=z(!1),Kn=null;async function Pn(){if(i())try{const m=await(await fetch(`${s()}/api/sessions/${encodeURIComponent(i())}/stats`)).json().catch(()=>({}));d(Oe,m&&m.available?m:null,!0)}catch{d(Oe,null)}}ct(()=>(i(),Pn(),clearInterval(Kn),Kn=setInterval(Pn,2e4),()=>clearInterval(Kn)));async function Mn(){if(!(!i()||a(hn))){d(hn,!0);try{const u=await fetch(`${s()}/api/sessions/${encodeURIComponent(i())}/compact`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:"/compact"})}),m=await u.json().catch(()=>({}));if(!u.ok)throw new Error(m.error||"Could not compact");v.setStatus(m.outcome||"Compact requested"),setTimeout(Pn,4e3)}catch(u){v.setStatus(u.message||"Could not compact context")}finally{d(hn,!1)}}}const Bt=u=>{const m=Number(u)||0;return m>=1e6?`${(m/1e6).toFixed(1)}M`:m>=1e3?`${(m/1e3).toFixed(1)}k`:String(m)},ar=15,fs=2e4,or=lt(()=>!!i()&&!!a(Oe)&&(a(Oe).ctxWindowSize&&(a(Oe).contextPct||0)>=ar||!a(Oe).ctxWindowSize&&(a(Oe).lastInputTokens||0)>=fs)),vs=u=>u>=90?"text-vs-red":u>=70?"text-vs-yellow":"text-vs-muted";var tn=zf();rt("click",Cr,u=>{var m,L;(L=(m=u.target).closest)!=null&&L.call(m,"[data-menu]")||d(A,"")});var ir=x(tn);{var Er=u=>{var m=uf();b(u,m)};F(ir,u=>{a(E)&&u(Er)})}var nn=p(ir,2),Un=x(nn);{var Tr=u=>{var m=df(),L=ne(m,!0);W(()=>V(L,a(S))),b(u,m)};F(Un,u=>{a(S)&&u(Tr)})}var Nr=p(Un,2);Ue(Nr,19,()=>a($),(u,m)=>u.ts+":"+m,(u,m)=>{var L=re(),j=H(L);{var B=Z=>{var ve=ff(),te=x(ve),$e=x(te);go($e,{size:11});var we=p($e),Se=p(te,2);di(Se,()=>Nn(Vn(a(m))),!0),W(()=>V(we,` ${a(D).agent==="claude"?"Claude":"Codex"}`)),b(Z,ve)},X=Z=>{var ve=vf(),te=p(x(ve),2),$e=ne(te,!0);W(we=>V($e,we),[()=>Vn(a(m))]),b(Z,ve)};F(j,Z=>{a(m).role==="assistant"?Z(B):Z(X,-1)})}b(u,L)},u=>{var m=re(),L=H(m);{var j=B=>{var X=pf(),Z=x(X);go(Z,{size:26,strokeWidth:1.3,class:"text-mk-line"});var ve=p(Z,2),te=p(x(ve)),$e=ne(te,!0);W(()=>V($e,i()||"the selected session")),b(B,X)};F(L,B=>{a(S)||B(j)})}b(u,m)});var Wn=p(Nr,2);{var ps=u=>{var m=hf(),L=x(m),j=x(L);go(j,{size:11});var B=p(j),X=p(L,2),Z=x(X);di(Z,()=>Nn(a(g))),W(()=>V(B,` ${a(D).agent==="claude"?"Claude":"Codex"}`)),b(u,m)};F(Wn,u=>{a(g)&&u(ps)})}var Pr=p(Wn,2);{var Mr=u=>{var m=gf(),L=x(m);fn(L,{size:11,class:"animate-spin"});var j=p(L,2),B=x(j);W(()=>V(B,a(w)||"Generating")),b(u,m)};F(Pr,u=>{a(_)&&u(Mr)})}ss(nn,u=>d(y,u),()=>a(y));var lr=p(nn,2);{var zr=u=>{var m=_f(),L=x(m);$n(L,{size:11});var j=p(L);W(()=>V(j,` ${a(_)?"Jump to latest — still generating":"Jump to latest"}`)),R("click",m,He),b(u,m)};F(lr,u=>{a(oe)||u(zr)})}var qn=p(lr,2),cr=x(qn);{var hs=u=>{var m=yf(),L=H(m);{var j=we=>{var Se=mf(),je=H(Se),Ot=ne(je),Ce=p(je,2),Ct=ne(Ce);W((Ze,An)=>{xt(je,1,Ze,"svelte-1roe1v9"),V(Ot,`${a(Oe).contextPct??0??""}% context`),xt(Ct,1,`block h-full rounded-full ${(a(Oe).contextPct||0)>=90?"bg-vs-red":(a(Oe).contextPct||0)>=70?"bg-vs-yellow":"bg-mk-green"}`,"svelte-1roe1v9"),kr(Ct,`width: ${An??""}%`)},[()=>Rl(vs(a(Oe).contextPct||0)),()=>Math.min(100,Math.max(0,a(Oe).contextPct||0))]),b(we,Se)};F(L,we=>{a(Oe).ctxWindowSize&&we(j)})}var B=p(L,2),X=ne(B),Z=p(B,2);{var ve=we=>{var Se=bf();b(we,Se)};F(Z,we=>{a(Oe).shared&&we(ve)})}var te=p(Z,2);{var $e=we=>{var Se=xf(),je=ne(Se,!0);W(()=>V(je,a(Oe).model)),b(we,Se)};F(te,we=>{a(Oe).model&&a(Oe).model!=="unknown"&&we($e)})}W((we,Se,je)=>{_e(B,"title",`${a(Oe).messageCount??""} turns · ${we??""} in · ${Se??""} out`),V(X,`${je??""} tokens`)},[()=>Bt(a(Oe).totalInput),()=>Bt(a(Oe).totalOutput),()=>Bt(a(Oe).totalTokens)]),b(u,m)},gs=u=>{var m=wf();b(u,m)};F(cr,u=>{a(Oe)?u(hs):u(gs,-1)})}var _s=p(cr,2);{var ms=u=>{var m=kf(),L=x(m);{var j=X=>{fn(X,{size:10,class:"animate-spin"})},B=X=>{fd(X,{size:10})};F(L,X=>{a(hn)?X(j):X(B,-1)})}W(()=>m.disabled=a(hn)),R("click",m,Mn),b(u,m)};F(_s,u=>{a(or)&&u(ms)})}var Gn=p(qn,2);{var Ar=u=>{var m=Sf();Ue(m,20,()=>a(N),L=>L,(L,j)=>{var B=$f(),X=x(B);_d(X,{size:10,class:"text-mk-comment"});var Z=p(X),ve=p(Z);W((te,$e)=>{_e(B,"title",j),V(Z,` ${te??""} `),_e(ve,"aria-label",`Remove ${$e??""}`)},[()=>at(j),()=>at(j)]),R("click",ve,()=>Ee(j)),b(L,B)}),b(u,m)};F(Gn,u=>{a(N).length&&u(Ar)})}var bs=p(Gn,2),Ir=x(bs),ee=x(Ir);ss(ee,u=>d(T,u),()=>a(T));var Re=p(ee,2),Te=x(Re),ce=x(Te),Ne=x(ce),ht=p(Ne);$n(ht,{size:11});var Ye=p(ce,2);{var Vt=u=>{var m=Cf();Ue(m,20,()=>a(D).available.length?a(D).available:["codex"],L=>L,(L,j)=>{var B=Ti(),X=x(B),Z=x(X);{var ve=$e=>{za($e,{size:11})};F(Z,$e=>{j===a(D).agent&&$e(ve)})}var te=p(X);W(()=>V(te,` ${j==="claude"?"Claude":"Codex"}`)),R("click",B,()=>K(j)),b(L,B)}),b(u,m)};F(Ye,u=>{a(A)==="agent"&&u(Vt)})}var It=p(Te,2);{var We=u=>{var m=Nf(),L=x(m),j=x(L),B=ne(j,!0),X=p(j,2);$n(X,{size:11,class:"shrink-0"});var Z=p(L,2);{var ve=te=>{var $e=Tf();Ue($e,21,()=>a(D).models,we=>we[0],(we,Se)=>{var je=Ef(),Ot=x(je),Ce=x(Ot);{var Ct=Et=>{za(Et,{size:11})};F(Ce,Et=>{a(Se)[0]===a(D).model&&Et(Ct)})}var Ze=p(Ot,2),An=ne(Ze,!0);W(()=>V(An,a(Se)[1])),R("click",je,()=>ie(a(Se)[0])),b(we,je)}),b(te,$e)};F(Z,te=>{a(A)==="model"&&te(ve)})}W(()=>V(B,a(M))),R("click",L,()=>d(A,a(A)==="model"?"":"model",!0)),b(u,m)};F(It,u=>{a(D).models.length&&u(We)})}var ot=p(It,2);{var Je=u=>{var m=Mf(),L=x(m),j=x(L),B=p(j);$n(B,{size:11});var X=p(L,2);{var Z=ve=>{var te=Pf();Ue(te,20,()=>a(D).efforts,$e=>$e,($e,we)=>{var Se=Ti(),je=x(Se),Ot=x(je);{var Ce=Ze=>{za(Ze,{size:11})};F(Ot,Ze=>{we===a(D).effort&&Ze(Ce)})}var Ct=p(je);W(()=>V(Ct,` ${we??""}`)),R("click",Se,()=>Q(we)),b($e,Se)}),b(ve,te)};F(X,ve=>{a(A)==="effort"&&ve(Z)})}W(()=>V(j,`${(a(D).effort||"effort")??""} `)),R("click",L,()=>d(A,a(A)==="effort"?"":"effort",!0)),b(u,m)};F(ot,u=>{a(D).efforts.length&&u(Je)})}var dt=p(ot,2);{var zn=u=>{fn(u,{size:11,class:"animate-spin text-mk-muted"})};F(dt,u=>{a(U)&&u(zn)})}var St=p(dt,2),Xe=p(x(St),2),ft=x(Xe);{var gn=u=>{bd(u,{size:11})},k=u=>{Yu(u,{size:13})};F(ft,u=>{a(_)?u(gn):u(k,-1)})}W(u=>{V(Ne,`${a(D).agent==="claude"?"Claude":"Codex"} `),Xe.disabled=u},[()=>a(_)||!a(o).trim()]),rt("dragover",tn,q),rt("dragleave",tn,()=>d(E,!1)),rt("drop",tn,pe),rt("scroll",nn,Me),R("keydown",ee,Ht),R("input",ee,At),Le(ee,()=>a(o),u=>d(o,u)),R("click",ce,()=>d(A,a(A)==="agent"?"":"agent",!0)),R("click",Xe,pt),b(e,tn),kt()}en(["click","keydown","input"]);var If=P('<span class="hint svelte-e2eyom">searching…</span>'),Of=P('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),Rf=P('<ul class="results svelte-e2eyom"></ul>'),Df=P('<p class="empty svelte-e2eyom"> </p>'),Lf=P('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function Ff(e,t){wt(t,!0);let n=z(""),r=z(Pe([])),s=z(0),i=z(!1),o=z(null),l=null;ct(()=>{a(o)&&a(o).focus()}),ct(()=>{const C=a(n).trim();if(l&&clearTimeout(l),!C){d(r,[],!0);return}l=setTimeout(async()=>{d(i,!0);try{const O=await ye.searchFiles(v.connectionId,v.path||".",C);d(r,O.matches||[],!0),d(s,0)}catch{d(r,[],!0)}finally{d(i,!1)}},180)});async function c(C){var Y;if(!C)return;const O=v.path&&v.path!=="."?`${v.path}/`:"";await v.openFile(`${O}${C.path}`),(Y=t.onclose)==null||Y.call(t)}function h(C){var O;C.key==="Escape"?(C.preventDefault(),(O=t.onclose)==null||O.call(t)):C.key==="ArrowDown"?(C.preventDefault(),d(s,Math.min(a(s)+1,a(r).length-1),!0)):C.key==="ArrowUp"?(C.preventDefault(),d(s,Math.max(a(s)-1,0),!0)):C.key==="Enter"&&(C.preventDefault(),c(a(r)[a(s)]))}var g=Lf(),w=H(g),_=p(w,2),$=x(_),S=x($);Zo(S,{size:14});var y=p(S,2);ss(y,C=>d(o,C),()=>a(o));var T=p(y,2);{var I=C=>{var O=If();b(C,O)};F(T,C=>{a(i)&&C(I)})}var D=p($,2);{var A=C=>{var O=Rf();Ue(O,23,()=>a(r),Y=>Y.path,(Y,J,be)=>{var ge=Of(),oe=x(ge);let Me;var ze=x(oe),He=ne(ze,!0),K=p(ze,2),ie=ne(K,!0),Q=p(K,2);{var se=E=>{ed(E,{size:12})};F(Q,E=>{a(be)===a(s)&&E(se)})}W(()=>{Me=xt(oe,1,"svelte-e2eyom",null,Me,{active:a(be)===a(s)}),V(He,a(J).name),V(ie,a(J).path)}),R("click",oe,()=>c(a(J))),b(Y,ge)}),b(C,O)},U=C=>{var O=Df(),Y=ne(O);W(J=>V(Y,`No files match “${J??""}”.`),[()=>a(n).trim()]),b(C,O)},M=lt(()=>a(n).trim()&&!a(i));F(D,C=>{a(r).length?C(A):a(M)&&C(U,1)})}R("click",w,()=>{var C;return(C=t.onclose)==null?void 0:C.call(t)}),R("keydown",w,C=>{var O;return C.key==="Escape"&&((O=t.onclose)==null?void 0:O.call(t))}),R("keydown",y,h),Le(y,()=>a(n),C=>d(n,C)),b(e,g),kt()}en(["click","keydown"]);var jf=P('<div class="terminal-pane svelte-maclc7"><div class="bar svelte-maclc7"><span class="label svelte-maclc7">Terminal</span> <span> </span></div> <div class="screen svelte-maclc7"></div></div>');function Hf(e,t){wt(t,!0);let n=Ke(t,"rootPath",3,""),r=Ke(t,"session",3,""),s=Ke(t,"index",3,0),i,o=null,l=null,c=null,h=z("connecting"),g=null,w=0,_=null,$=!1;const S={background:Ds.colors["editor.background"],foreground:Ds.colors["editor.foreground"],cursor:Ds.colors["editorCursor.foreground"],selectionBackground:Ds.colors["editor.selectionBackground"],black:"#272822",red:"#f92672",green:"#a6e22e",yellow:"#e6db74",blue:"#66d9ef",magenta:"#ae81ff",cyan:"#a1efe4",white:"#f8f8f2",brightBlack:"#75715e",brightRed:"#f92672",brightGreen:"#a6e22e",brightYellow:"#e6db74",brightBlue:"#66d9ef",brightMagenta:"#ae81ff",brightCyan:"#a1efe4",brightWhite:"#f9f8f5"};function y(){if(!(!l||!o||(c==null?void 0:c.readyState)!==WebSocket.OPEN))try{l.fit(),c.send(JSON.stringify({type:"resize",cols:o.cols,rows:o.rows}))}catch{}}function T(){if($)return;const O=`${location.protocol==="https:"?"wss":"ws"}://${location.host}${n()}/ws/sessions/${encodeURIComponent(r())}/ide/terminal/${encodeURIComponent(v.connectionId)}?index=${encodeURIComponent(s())}`;c=new WebSocket(O),c.binaryType="arraybuffer",c.onopen=()=>{d(h,"connected"),w=0,y()},c.onmessage=Y=>{o.write(typeof Y.data=="string"?Y.data:new Uint8Array(Y.data))},c.onclose=Y=>{if($)return;if(Y.code===1008){d(h,"refused"),o==null||o.write(`\r
\x1B[31m— not authorised for this terminal —\x1B[0m\r
`);return}if(w>=6){d(h,"closed"),o==null||o.write(`\r
\x1B[33m— terminal unavailable; reopen the panel to retry —\x1B[0m\r
`);return}d(h,"reconnecting");const J=Math.min(1e3*2**w,1e4);w+=1,_=setTimeout(T,J)},c.onerror=()=>{$||d(h,"error")}}ds(async()=>{const[{Terminal:C},{FitAddon:O}]=await Promise.all([Ia(()=>import("./ide-xterm.js"),[],import.meta.url),Ia(()=>import("./ide-addon-fit.js"),[],import.meta.url)]);await Ia(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),o=new C({theme:S,fontSize:12,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3}),l=new O,o.loadAddon(l),o.open(i),l.fit(),T(),o.onData(Y=>{(c==null?void 0:c.readyState)===WebSocket.OPEN&&c.send(new TextEncoder().encode(Y))}),g=new ResizeObserver(()=>y()),g.observe(i)}),Jo(()=>{$=!0,_&&clearTimeout(_),g==null||g.disconnect(),c==null||c.close(),o==null||o.dispose()});var I=jf(),D=x(I),A=p(x(D),2),U=ne(A,!0),M=p(D,2);ss(M,C=>i=C,()=>i),W(()=>{xt(A,1,`status ${a(h)??""}`,"svelte-maclc7"),V(U,a(h))}),b(e,I),kt()}var Bf=P('<div class="border-b border-vs-line bg-vs-red/10 px-4 py-2 text-xs text-vs-red"> </div>'),Vf=P('<div class="flex items-center gap-2 px-4 py-3 text-xs text-vs-muted"><!> Loading…</div>'),Kf=P('<button class="flex w-full items-center gap-2 px-4 py-1 text-left text-[13px] text-vs-fg hover:bg-vs-hover"><!> <span class="truncate"> </span></button>'),Uf=P('<div class="px-4 py-3 text-xs text-vs-muted">No sub-folders here. You can still open this folder.</div>'),Wf=P('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="flex h-[70vh] w-[min(640px,92vw)] flex-col overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">Open Folder <span class="ml-1 font-normal text-vs-muted"><!></span></div> <form class="flex gap-2 border-b border-vs-line px-3 py-2"><button type="button" class="flex items-center gap-1 rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover disabled:opacity-40" title="Up one folder"><!> Up</button> <input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-xs text-vs-fg outline-none focus:border-vs-accent" spellcheck="false" aria-label="Folder path"/> <button type="submit" class="rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover">Go</button></form> <!> <div class="min-h-0 flex-1 overflow-y-auto py-1"><!></div> <div class="flex items-center gap-2 border-t border-vs-line px-4 py-3"><span class="flex min-w-0 flex-1 items-center gap-2 text-xs text-vs-muted"><!> <span class="truncate font-mono"> </span></span> <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40">Open Folder</button></div></div></div>');function qf(e,t){wt(t,!0);let n=z(""),r=z(""),s=z(Pe([])),i=z(""),o=z(!0),l=z("");async function c(Q){d(o,!0),d(i,"");try{const se=v.connectionId?await ye.browseOn(v.connectionId,Q):await ye.browse(Q);d(n,se.path,!0),d(r,se.parent,!0),d(s,se.entries||[],!0),d(l,se.path,!0)}catch(se){d(i,se.message||"Could not open that folder",!0)}finally{d(o,!1)}}ds(()=>c(""));function h(Q){Q.preventDefault(),a(l).trim()&&c(a(l).trim())}var g=Wf(),w=x(g),_=x(w),$=p(x(_)),S=x($);{var y=Q=>{var se=ci();W(()=>V(se,`on ${v.connection.username??""}@${v.connection.host??""}`)),b(Q,se)},T=Q=>{var se=ci("on this server");b(Q,se)};F(S,Q=>{v.connection&&v.connection.kind!=="local"?Q(y):Q(T,-1)})}var I=p(_,2),D=x(I),A=x(D);td(A,{size:14});var U=p(D,2),M=p(I,2);{var C=Q=>{var se=Bf(),E=ne(se,!0);W(()=>V(E,a(i))),b(Q,se)};F(M,Q=>{a(i)&&Q(C)})}var O=p(M,2),Y=x(O);{var J=Q=>{var se=Vf(),E=x(se);fn(E,{size:13,class:"animate-spin"}),b(Q,se)},be=Q=>{var se=re(),E=H(se);Ue(E,17,()=>a(s),N=>N.path,(N,q)=>{var pe=Kf(),Ee=x(pe);ld(Ee,{size:14,class:"shrink-0 text-vs-blue"});var at=p(Ee,2),pt=ne(at,!0);W(()=>V(pt,a(q).name)),R("dblclick",pe,()=>c(a(q).path)),R("click",pe,()=>c(a(q).path)),b(N,pe)},N=>{var q=Uf();b(N,q)}),b(Q,se)};F(Y,Q=>{a(o)?Q(J):Q(be,-1)})}var ge=p(O,2),oe=x(ge),Me=x(oe);cd(Me,{size:13,class:"shrink-0"});var ze=p(Me,2),He=ne(ze,!0),K=p(oe,2),ie=p(K,2);W(()=>{D.disabled=!a(r),_e(ze,"title",a(n)),V(He,a(n)),ie.disabled=!a(n)||a(o)}),R("click",g,Q=>Q.target===Q.currentTarget&&t.onclose()),R("keydown",g,Q=>Q.key==="Escape"&&t.onclose()),rt("submit",I,h),R("click",D,()=>a(r)&&c(a(r))),Le(U,()=>a(l),Q=>d(l,Q)),R("click",K,function(...Q){var se;(se=t.onclose)==null||se.apply(this,Q)}),R("click",ie,()=>t.onopen(a(n))),b(e,g),kt()}en(["click","keydown","dblclick"]);var Gf=P('<p class="px-4 py-2 text-xs text-vs-muted">Open a folder to search it.</p>'),Yf=P('<button class="flex w-full items-center gap-2 px-3 py-1 text-left text-[13px] hover:bg-vs-hover"><!> <span class="truncate text-vs-fg"> </span> <span class="ml-auto max-w-[45%] truncate text-[11px] text-vs-muted"> </span></button>'),Jf=P('<p class="px-4 py-2 text-xs text-vs-muted"> </p>'),Xf=P('<p class="px-4 py-2 text-xs text-vs-muted">Type to search filenames in this workspace.</p>'),Zf=P('<div class="flex h-full min-h-0 flex-col"><div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Search</div> <div class="px-3 pb-2"><div class="flex items-center gap-1.5 rounded-sm border border-vs-line bg-vs-input px-2 focus-within:border-vs-accent"><!> <input class="min-w-0 flex-1 bg-transparent py-1 text-xs text-vs-fg outline-none placeholder:text-vs-muted" placeholder="Search filenames" spellcheck="false"/> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div></div>');function Qf(e,t){wt(t,!0);let n=z(""),r=z(Pe([])),s=z(!1),i=z(!1),o=null;ct(()=>{const A=a(n).trim();if(o&&clearTimeout(o),!A||!v.connectionId){d(r,[],!0),d(i,!1);return}o=setTimeout(async()=>{d(s,!0);try{const U=await ye.searchFiles(v.connectionId,v.path||".",A);d(r,U.matches||[],!0)}catch(U){d(r,[],!0),v.setStatus(U.message||"Search failed")}finally{d(s,!1),d(i,!0)}},200)});const l=A=>{const U=(A||"").split("/");return U.pop(),U.join("/")};var c=Zf(),h=p(x(c),2),g=x(h),w=x(g);Zo(w,{size:12,class:"shrink-0 text-vs-muted"});var _=p(w,2),$=p(_,2);{var S=A=>{fn(A,{size:12,class:"shrink-0 animate-spin text-vs-muted"})};F($,A=>{a(s)&&A(S)})}var y=p(h,2),T=x(y);{var I=A=>{var U=Gf();b(A,U)},D=A=>{var U=re(),M=H(U);Ue(M,17,()=>a(r),C=>C.path,(C,O)=>{var Y=Yf(),J=x(Y);Xo(J,{size:13,class:"shrink-0 text-vs-blue"});var be=p(J,2),ge=ne(be,!0),oe=p(be,2),Me=ne(oe,!0);W((ze,He)=>{_e(Y,"title",a(O).path),V(ge,ze),V(Me,He)},[()=>a(O).name||a(O).path.split("/").pop(),()=>l(a(O).path)]),R("click",Y,()=>v.openFile(a(O).path)),b(C,Y)},C=>{var O=re(),Y=H(O);{var J=oe=>{var Me=Jf(),ze=ne(Me);W(()=>V(ze,`No files match “${a(n)??""}”.`)),b(oe,Me)},be=oe=>{var Me=Xf();b(oe,Me)},ge=lt(()=>!a(n).trim());F(Y,oe=>{a(i)&&!a(s)?oe(J):a(ge)&&oe(be,1)})}b(C,O)}),b(A,U)};F(T,A=>{v.connectionId?A(D,-1):A(I)})}Le(_,()=>a(n),A=>d(n,A)),b(e,c),kt()}en(["click"]);var ev=P('<p class="flex items-center gap-2 text-vs-muted"><!> Fetching host key…</p>'),tv=P('<p class="text-vs-red"> </p>'),nv=P("<p>This host is already trusted. Try connecting again.</p>"),rv=P('<div class="flex items-baseline gap-2 font-mono text-[11px]"><span class="w-16 shrink-0 text-vs-muted"> </span> <span class="break-all text-vs-fg"> </span></div>'),sv=P(`<p>The authenticity of <span class="font-mono text-vs-blue"> </span> can't be established. Verify these fingerprints match the server before you continue —
          if they don't, someone may be intercepting the connection.</p> <div class="mt-3 flex flex-col gap-1 rounded-sm border border-vs-line bg-vs-input p-2"></div> <p class="mt-3 text-xs text-vs-muted">Accepting adds the key to <span class="font-mono">~/.ssh/known_hosts</span> on this server.</p>`,1),av=P('<button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"> </button>'),ov=P('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="w-[min(560px,92vw)] overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="flex items-center gap-2 border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright"><!> Unknown host</div> <div class="px-4 py-3 text-[13px] leading-relaxed text-vs-fg"><!></div> <div class="flex justify-end gap-2 border-t border-vs-line px-4 py-3"><button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <!></div></div></div>');function iv(e,t){wt(t,!0);let n=z(!0),r=z(""),s=z(null),i=z(!1);ds(async()=>{try{d(s,await ye.hostKey(v.connectionId),!0)}catch(M){d(r,M.message||"Could not fetch the host key",!0)}finally{d(n,!1)}});async function o(){d(i,!0);try{await ye.trustHost(v.connectionId),t.ontrusted()}catch(M){d(r,M.message||"Could not trust this host",!0),d(i,!1)}}var l=ov(),c=x(l),h=x(c),g=x(h);md(g,{size:15,class:"text-vs-yellow"});var w=p(h,2),_=x(w);{var $=M=>{var C=ev(),O=x(C);fn(O,{size:13,class:"animate-spin"}),b(M,C)},S=M=>{var C=tv(),O=ne(C,!0);W(()=>V(O,a(r))),b(M,C)},y=M=>{var C=nv();b(M,C)},T=M=>{var C=sv(),O=H(C),Y=p(x(O)),J=ne(Y),be=p(O,2);Ue(be,21,()=>a(s).fingerprints,ge=>ge.fingerprint,(ge,oe)=>{var Me=rv(),ze=x(Me),He=ne(ze,!0),K=p(ze,2),ie=ne(K,!0);W(()=>{V(He,a(oe).type),V(ie,a(oe).fingerprint)}),b(ge,Me)}),W(()=>V(J,`${a(s).host??""}:${a(s).port??""}`)),b(M,C)};F(_,M=>{var C;a(n)?M($):a(r)?M(S,1):(C=a(s))!=null&&C.known?M(y,2):M(T,-1)})}var I=p(w,2),D=x(I),A=p(D,2);{var U=M=>{var C=av(),O=ne(C,!0);W(()=>{C.disabled=a(i),V(O,a(i)?"Trusting…":"Trust and connect")}),R("click",C,o),b(M,C)};F(A,M=>{var C;!a(n)&&!((C=a(s))!=null&&C.known)&&!a(r)&&M(U)})}R("click",l,M=>M.target===M.currentTarget&&t.onclose()),R("keydown",l,M=>M.key==="Escape"&&t.onclose()),R("click",D,function(...M){var C;(C=t.onclose)==null||C.apply(this,M)}),b(e,l),kt()}en(["click","keydown"]);var lv=P('<div role="separator" tabindex="0" title="Drag to resize (double-click to reset)"><div></div></div>');function _o(e,t){wt(t,!0);let n=Ke(t,"size",15),r=Ke(t,"side",3,"right"),s=Ke(t,"min",3,120),i=Ke(t,"max",3,800),o=Ke(t,"onreset",3,null),l=z(!1);const c=r()==="top";function h(S){var U;S.preventDefault(),d(l,!0);const y=c?S.clientY:S.clientX,T=n(),I=S.currentTarget;(U=I.setPointerCapture)==null||U.call(I,S.pointerId);function D(M){const O=(c?M.clientY:M.clientX)-y,Y=r()==="left"||r()==="top"?-O:O;n(Math.round(Math.min(i(),Math.max(s(),T+Y))))}function A(){var M;d(l,!1),(M=I.releasePointerCapture)==null||M.call(I,S.pointerId),window.removeEventListener("pointermove",D),window.removeEventListener("pointerup",A)}window.addEventListener("pointermove",D),window.addEventListener("pointerup",A)}function g(S){const y=S.shiftKey?40:10,T=c?"ArrowUp":r()==="left"?"ArrowLeft":"ArrowRight",I=c?"ArrowDown":r()==="left"?"ArrowRight":"ArrowLeft";if(S.key===T)n(Math.min(i(),n()+y));else if(S.key===I)n(Math.max(s(),n()-y));else return;S.preventDefault()}var w=lv();let _;var $=ne(w);W(()=>{_=xt(w,1,`group relative shrink-0 ${c?"h-1 w-full cursor-row-resize":"w-1 cursor-col-resize"}`,null,_,{"bg-vs-accent":a(l)}),_e(w,"aria-orientation",c?"horizontal":"vertical"),_e(w,"aria-valuenow",n()),_e(w,"aria-valuemin",s()),_e(w,"aria-valuemax",i()),xt($,1,`absolute ${c?"-top-1 -bottom-1 left-0 right-0":"-left-1 -right-1 top-0 bottom-0"}
           transition-colors group-hover:bg-vs-accent ${a(l)?"bg-vs-accent":""}`)}),R("pointerdown",w,h),R("dblclick",w,()=>{var S;return(S=o())==null?void 0:S()}),R("keydown",w,g),b(e,w),kt()}en(["pointerdown","dblclick","keydown"]);var cv=P('<span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>'),uv=P('<span class="absolute right-1.5 bottom-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-vs-status px-1 text-[10px] leading-none font-semibold text-white"> </span>'),dv=P("<button><!> <!> <!></button>"),Ni=P("<option> </option>"),fv=P('<button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Connection settings" aria-label="Connection settings"><!></button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover hover:text-vs-red" title="Remove workspace" aria-label="Remove workspace"><!></button>',1),vv=P('<div class="flex gap-1"><input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="Host"/> <input class="w-16 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="number" min="1" max="65535" placeholder="Port"/></div> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="Username"/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="Identity file (optional)"/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" autocomplete="new-password" placeholder="Password — leave blank to keep current"/>',1),pv=P('<div class="flex flex-col gap-1.5 rounded-sm border border-vs-line bg-vs-panel p-2"><span class="text-[11px] font-semibold tracking-wide uppercase text-vs-muted"> </span> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="Workspace folder"/> <div class="flex gap-1"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110 disabled:opacity-40"> </button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover">Cancel</button></div></div>'),hv=P('<input class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),gv=P(`<button class="w-full rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Show this host's key fingerprint and trust it">Verify host key…</button>`),_v=P('<!> <button class="w-full rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"> </button> <!>',1),mv=P('<p class="mt-1 font-mono text-[11px] break-all text-vs-muted"> </p>'),bv=P('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="~/.ssh/id_ed25519"/> <textarea class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-[11px] outline-none focus:border-vs-accent" rows="4" placeholder="…or paste a private key (-----BEGIN OPENSSH PRIVATE KEY-----)" spellcheck="false"></textarea>',1),xv=P('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" type="password" placeholder="Password" autocomplete="new-password"/>'),yv=P('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Host" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="User" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Port" type="number" min="1" max="65535"/> <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!>',1),wv=P('<form class="mt-2 flex flex-col gap-1.5 border-t border-vs-line px-3 pt-2"><select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>This server (local folder)</option><option>Remote host over SSH</option></select> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"/> <div class="flex gap-1 pb-2"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110" type="submit">Create</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" type="button">Cancel</button></div></form>'),kv=P('<div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Workspaces</div> <div class="flex flex-col gap-2 px-3 pt-1"><select class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" aria-label="Workspace"><option>— select workspace —</option><!></select> <div class="flex gap-1"><button class="flex flex-1 items-center justify-center gap-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"><!> Open Folder</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Add a workspace or SSH connection" aria-label="Add workspace"><!></button> <!></div> <!> <!> <!></div> <!>',1),$v=P('<aside class="flex shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel"><!></aside> <!>',1),Sv=P('<div class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"><!> <div><h1 class="text-2xl font-light text-vs-fg">Multibuilder IDE</h1> <p class="mt-1 text-sm text-vs-muted">Edit files on this server or on a remote host over SSH.</p></div> <div class="flex flex-col gap-2 text-sm"><button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Open Folder… <kbd class="ml-2 rounded-sm border border-vs-line px-1.5 py-0.5 text-[10px] text-vs-muted">Ctrl+Shift+O</kbd></button> <button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Connect to a host over SSH…</button></div></div>'),Cv=P('<button class="rounded-sm p-0.5 opacity-0 group-hover:opacity-100 hover:bg-vs-line" title="Close terminal — ends the shell"><!></button>'),Ev=P('<span><button class="max-w-[140px] truncate"> </button> <!></span>'),Tv=P('<div class="absolute inset-0"><!></div>'),Nv=P('<!> <div class="flex shrink-0 flex-col border-t border-vs-border bg-vs-bg"><div class="flex items-center gap-1 border-b border-vs-border px-2 py-1 text-[11px]"><!> <div class="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto"></div> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40" title="New terminal in this workspace" aria-label="New terminal"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover" title="Hide terminals (Ctrl+`) — sessions keep running" aria-label="Hide all terminals"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover hover:text-vs-red" title="Close this terminal — ends the shell" aria-label="Close this terminal"><!></button></div> <div class="relative min-h-0 flex-1"><!></div></div>',1),Pv=P('<!> <div class="min-h-0 flex-1"><!></div> <!>',1),Mv=P(`<!> <aside class="flex shrink-0 flex-col overflow-hidden border-l border-vs-border bg-vs-panel"><div class="flex items-center gap-1.5 border-b border-vs-border px-3 py-1.5"><!> <span class="shrink-0 text-[11px] font-semibold tracking-wide uppercase">AI Agent</span> <select class="ml-auto min-w-0 flex-1 truncate rounded-sm border border-vs-line bg-vs-input px-1.5 py-0.5
                   text-[11px] text-vs-fg outline-none focus:border-vs-accent" title="Agent session — each has its own history"></select> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40" title="New agent session" aria-label="New agent session"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover" title="Hide AI Agent" aria-label="Hide AI Agent"><!></button></div> <div class="min-h-0 flex-1"><!></div></aside>`,1),zv=P('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20"><!> <!></button>'),Av=P('<span class="flex items-center gap-1"><!> </span>'),Iv=P("<span> </span>"),Ov=P('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle terminal (Ctrl+`)"><!> Terminal</button> <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Focus the tmux window on the host"><!></button>',1),Rv=P('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle AI Agent panel"><!> Chat</button>'),Dv=P('<div class="flex h-full flex-col overflow-hidden bg-vs-bg font-sans text-vs-fg"><header class="flex items-center gap-2 border-b border-vs-border bg-vs-titlebar px-3 py-1 text-xs"><!> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover" title="Open a folder on this server (Ctrl+Shift+O)">Open Folder…</button> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40" title="Open a file (Ctrl+P)">Open File…</button> <button><!> Terminal</button> <span class="mx-auto truncate text-vs-muted"> </span> <span><!> </span></header> <div class="flex min-h-0 flex-1"><nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity"><!> <div class="mt-auto flex flex-col items-center pb-1"><button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Account — signed in to the dashboard" aria-label="Account"><!></button> <button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Toggle side bar (Ctrl+B)" aria-label="Toggle side bar"><!></button></div></nav> <!> <section class="flex min-h-0 min-w-0 flex-1 flex-col"><!></section> <!></div> <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white"><!> <!> <span class="truncate"> </span> <span class="ml-auto flex items-center gap-3"><!> <span class="max-w-[40vw] truncate opacity-80"> </span> <!> <!></span></footer> <!> <!> <!></div>');function Lv(e,t){wt(t,!0);let n=Ke(t,"sessions",19,()=>[]),r=Ke(t,"session",3,""),s=Ke(t,"rootPath",3,""),i=z(Pe([...n()])),o=z(Pe(r()||n()[0]||"")),l=z(!1),c=z(!1),h=z(!1),g=z(Pe({label:"",host:"",username:"",port:22,identity_file:"",password:"",workspace_root:""}));function w(){v.connection&&(d(y,"remote"),d(O,!0),a(c)||_())}function _(){const k=v.connection;k&&(d(g,{label:k.label||"",host:k.host||"",username:k.username||"",port:k.port||22,identity_file:k.identity_file||"",password:"",workspace_root:k.workspace_root||""},!0),d(c,!a(c)))}async function $(){var k;if(!(!v.connection||a(h))){d(h,!0);try{const u={...a(g),port:Number(a(g).port)||22};u.password||delete u.password,await ye.updateConnection(v.connection.id,u),await((k=v.loadConnections)==null?void 0:k.call(v)),d(c,!1),v.setStatus("Connection settings saved")}catch(u){v.setStatus(u.message||"Could not save connection settings")}finally{d(h,!1)}}}async function S(){var k;if(!a(l)){d(l,!0);try{const u=(((k=v.connection)==null?void 0:k.label)||r()||"agent").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"").slice(0,20)||"agent";let m=u;for(let X=2;a(i).includes(m);X+=1)m=`${u}-${X}`;const L=await fetch(`${s()}/api/sessions/create`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:m,agent:"claude"})}),j=await L.json().catch(()=>({}));if(!L.ok)throw new Error(j.error||"Could not create session");const B=j.session||j.name||m;a(i).includes(B)||d(i,[...a(i),B],!0),d(o,B,!0),v.setStatus(`Agent session "${B}" created`)}catch(u){v.setStatus(u.message||"Could not create agent session")}finally{d(l,!1)}}}let y=z("files");function T(k,u){try{const m=localStorage.getItem(`ide.show.${k}`);return m===null?u:m==="1"}catch{return u}}let I=z(Pe(T("chat",!0)));const D={sidebar:240,chat:320,panel:240};function A(k){try{const u=localStorage.getItem(`ide.size.${k}`),m=Number(u);return Number.isFinite(m)&&m>0?m:D[k]}catch{return D[k]}}let U=z(Pe(A("sidebar"))),M=z(Pe(A("chat"))),C=z(Pe(A("panel")));ct(()=>{try{localStorage.setItem("ide.size.sidebar",String(a(U))),localStorage.setItem("ide.size.chat",String(a(M))),localStorage.setItem("ide.size.panel",String(a(C))),localStorage.setItem("ide.show.terminal",a(J)?"1":"0"),localStorage.setItem("ide.show.chat",a(I)?"1":"0"),localStorage.setItem("ide.show.sidebar",a(O)?"1":"0")}catch{}});let O=z(Pe(T("sidebar",!0))),Y=z(!1),J=z(Pe(T("terminal",!1)));const be=8;let ge=z(Pe([0])),oe=z(0);function Me(){if(a(ge).length>=be)return;let k=0;for(;a(ge).includes(k);)k+=1;k>=be||(d(ge,[...a(ge),k].sort((u,m)=>u-m),!0),d(oe,k,!0))}async function ze(k){const u=a(ge).indexOf(k),m=a(ge).filter(L=>L!==k);d(ge,m.length?m:[0],!0),a(oe)===k&&d(oe,a(ge)[Math.min(u,a(ge).length-1)],!0);try{await ye.closeTerminal(v.connectionId,k)}catch(L){v.setStatus(L.message||"Could not close terminal")}}let He=z("");ct(()=>{const k=v.connectionId,u=v.connectionState;if(!k||u!=="connected")return;const m=`${k}|${u}`;a(He)!==m&&(d(He,m),d(ge,[0],!0),d(oe,0),ye.listTerminals(k).then(L=>{const j=((L==null?void 0:L.terminals)||[]).filter(B=>Number.isInteger(B));j.length&&(d(ge,j,!0),j.includes(a(oe))||d(oe,j[0],!0))}).catch(()=>{}))});let K=z(!1);ct(()=>{a(J)&&d(K,!0)});let ie=z(!1),Q=z(!1),se=z(""),E=z(Pe({kind:"local",label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",private_key:"",workspace_root:"",max_file_bytes:1e6}));const N={idle:{icon:Qu,label:"Not connected"},connecting:{icon:Xu,label:"Connecting…"},connected:{icon:Ju,label:"Connected"},reconnect:{icon:xi,label:"Reconnect required"},error:{icon:xi,label:"Error"}},q=lt(()=>N[v.connectionState].icon),pe=lt(()=>{var k;return((k=v.connection)==null?void 0:k.kind)==="local"}),Ee=[{id:"files",icon:od,label:"Explorer",keys:"Ctrl+Shift+E"},{id:"search",icon:Zo,label:"Search",keys:"Ctrl+Shift+F"},{id:"git",icon:Ao,label:"Source Control",keys:"Ctrl+Shift+G"},{id:"remote",icon:pd,label:"Remote Explorer",keys:""}];ds(async()=>{await v.loadConnections(),v.connectionId&&await v.refreshStatus()});function at(k){a(y)===k&&a(O)?d(O,!1):(d(y,k,!0),d(O,!0))}async function pt(k){v.connectionId=k.currentTarget.value,v.resetWorkspaceView(),await v.refreshStatus()}async function Ht(k){d(Q,!1);try{const u=k.split("/").filter(Boolean).pop()||k,m=v.connection;if(m&&m.kind!=="local"){await ye.setWorkspaceRoot(m.id,k,u),await v.loadConnections(),v.resetWorkspaceView(),await v.refreshFiles("."),v.setStatus(`Opened ${k} on ${m.username}@${m.host}`),d(y,"files"),d(O,!0);return}if(m&&m.kind==="local"){await ye.setWorkspaceRoot(m.id,k,u),await v.loadConnections(),v.resetWorkspaceView(),await v.refreshFiles("."),v.setStatus(`Opened ${k}`),d(y,"files"),d(O,!0);return}const L=await ye.createConnection({kind:"local",label:u,workspace_root:k,max_file_bytes:1e6});await v.loadConnections(),v.connectionId=L.connection.id,v.resetWorkspaceView(),await v.connect(""),d(y,"files"),d(O,!0)}catch(u){v.setStatus(u.message||"Could not open folder")}}async function At(k){k.preventDefault();try{const u=await ye.createConnection({...a(E),port:Number(a(E).port)});d(ie,!1),d(E,{...a(E),label:"",host:"",username:"",password:"",private_key:""},!0),await v.loadConnections(),v.connectionId=u.connection.id,await v.refreshStatus()}catch(u){v.setStatus(u.message||"Could not create connection")}}async function $t(){const k=v.connection;if(!k)return;const u=k.kind==="local"?"workspace":"connection";if(confirm(`Remove ${u} "${k.label}"? Saved tabs are cleared; files are untouched.`))try{await ye.deleteConnection(k.id),v.connectionId="",v.resetWorkspaceView(),await v.loadConnections()}catch(m){v.setStatus(m.message||"Could not delete")}}async function Nn(){try{const k=await ye.focusTerminal(v.connectionId);v.setStatus(`Focused ${k.window_name}`,"tmux window selected")}catch(k){v.setStatus(k.message||"Could not focus terminal")}}function Vn(k){var j,B,X,Z;const u=k.ctrlKey||k.metaKey,m=k.key.toLowerCase(),L=((B=(j=k.target)==null?void 0:j.matches)==null?void 0:B.call(j,"input, textarea, select"))&&!((Z=(X=k.target).closest)!=null&&Z.call(X,".monaco-editor"));u&&m==="s"?(k.preventDefault(),v.saveActive()):u&&m==="p"&&!L?(k.preventDefault(),v.connectionId&&d(Y,!0)):u&&k.shiftKey&&m==="o"?(k.preventDefault(),d(Q,!0)):u&&k.shiftKey&&["e","f","g"].includes(m)?(k.preventDefault(),d(y,{e:"files",f:"search",g:"git"}[m],!0),d(O,!0)):u&&m==="b"&&!L?(k.preventDefault(),d(O,!a(O))):u&&m==="`"?(k.preventDefault(),v.connectionState==="connected"&&d(J,!a(J))):k.key==="Escape"&&a(Y)&&(k.preventDefault(),d(Y,!1))}var Oe=Dv();rt("keydown",Cr,Vn);var hn=x(Oe),Kn=x(hn);yi(Kn,{size:15,class:"shrink-0 text-vs-blue"});var Pn=p(Kn,2),Mn=p(Pn,2),Bt=p(Mn,2);let ar;var fs=x(Bt);Si(fs,{size:13});var or=p(Bt,2),vs=ne(or,!0),tn=p(or,2),ir=x(tn);fi(ir,()=>a(q),(k,u)=>{u(k,{size:12})});var Er=p(ir),nn=p(hn,2),Un=x(nn),Tr=x(Un);Ue(Tr,17,()=>Ee,k=>k.id,(k,u)=>{var m=dv(),L=x(m);{var j=ve=>{var te=cv();b(ve,te)};F(L,ve=>{a(y)===a(u).id&&a(O)&&ve(j)})}var B=p(L,2);fi(B,()=>a(u).icon,(ve,te)=>{te(ve,{size:24,strokeWidth:1.4})});var X=p(B,2);{var Z=ve=>{var te=uv(),$e=ne(te,!0);W(()=>V($e,v.gitDirtyCount)),b(ve,te)};F(X,ve=>{a(u).id==="git"&&v.gitDirtyCount&&ve(Z)})}W(()=>{xt(m,1,`relative flex h-12 w-12 items-center justify-center ${a(y)===a(u).id&&a(O)?"text-vs-bright":"text-vs-muted hover:text-vs-fg"}`),_e(m,"title",a(u).keys?`${a(u).label} (${a(u).keys})`:a(u).label),_e(m,"aria-label",a(u).label)}),R("click",m,()=>at(a(u).id)),b(k,m)});var Nr=p(Tr,2),Wn=x(Nr),ps=x(Wn);Zu(ps,{size:24,strokeWidth:1.4});var Pr=p(Wn,2),Mr=x(Pr);gd(Mr,{size:24,strokeWidth:1.4});var lr=p(Un,2);{var zr=k=>{var u=$v(),m=H(u),L=x(m);{var j=te=>{Md(te,{})},B=te=>{Qf(te,{})},X=te=>{Xd(te,{})},Z=te=>{var $e=kv(),we=p(H($e),2),Se=x(we),je=x(Se);je.value=je.__value="";var Ot=p(je);Ue(Ot,17,()=>v.connections,Ie=>Ie.id,(Ie,qe)=>{var Ge=Ni(),rn=ne(Ge),vt={};W(()=>{V(rn,`${a(qe).kind==="local"?"🖿 ":"⇅ "}${a(qe).label??""}`),vt!==(vt=a(qe).id)&&(Ge.value=(Ge.__value=vt)??"")}),b(Ie,Ge)});var Ce;Rs(Se);var Ct=p(Se,2),Ze=x(Ct),An=x(Ze);ho(An,{size:13});var Et=p(Ze,2),Za=x(Et);Hs(Za,{size:13});var Qa=p(Et,2);{var eo=Ie=>{var qe=fv(),Ge=H(qe),rn=x(Ge);$i(rn,{size:13});var vt=p(Ge,2),On=x(vt);Ci(On,{size:13}),R("click",Ge,_),R("click",vt,$t),b(Ie,qe)};F(Qa,Ie=>{v.connection&&Ie(eo)})}var Kt=p(Ct,2);{var Rt=Ie=>{var qe=pv(),Ge=x(qe),rn=ne(Ge,!0),vt=p(Ge,2),On=p(vt,2);{var Rr=_n=>{var ws=vv(),ks=H(ws),$s=x(ks),Lr=p($s,2),Fr=p(ks,2),jr=p(Fr,2),ka=p(jr,2);Le($s,()=>a(g).host,Wt=>a(g).host=Wt),Le(Lr,()=>a(g).port,Wt=>a(g).port=Wt),Le(Fr,()=>a(g).username,Wt=>a(g).username=Wt),Le(jr,()=>a(g).identity_file,Wt=>a(g).identity_file=Wt),Le(ka,()=>a(g).password,Wt=>a(g).password=Wt),b(_n,ws)};F(On,_n=>{a(pe)||_n(Rr)})}var Dr=p(On,2),Tt=p(Dr,2),Ut=x(Tt),ys=ne(Ut,!0),sn=p(Ut,2);W(()=>{V(rn,a(pe)?"Folder settings":"SSH connection settings"),Ut.disabled=a(h),V(ys,a(h)?"Saving…":"Save")}),Le(vt,()=>a(g).label,_n=>a(g).label=_n),Le(Dr,()=>a(g).workspace_root,_n=>a(g).workspace_root=_n),R("click",Ut,$),R("click",sn,()=>d(c,!1)),b(Ie,qe)};F(Kt,Ie=>{a(c)&&v.connection&&Ie(Rt)})}var Yn=p(Kt,2);{var In=Ie=>{var qe=_v(),Ge=H(qe);{var rn=Tt=>{var Ut=hv();Le(Ut,()=>a(se),ys=>d(se,ys)),b(Tt,Ut)};F(Ge,Tt=>{!a(pe)&&!v.connection.has_password&&Tt(rn)})}var vt=p(Ge,2),On=ne(vt,!0),Rr=p(vt,2);{var Dr=Tt=>{var Ut=gv();R("click",Ut,()=>v.needsHostKey=!0),b(Tt,Ut)};F(Rr,Tt=>{a(pe)||Tt(Dr)})}W(()=>V(On,a(pe)?"Open workspace":"Connect")),R("click",vt,()=>v.connect(a(se))),b(Ie,qe)};F(Yn,Ie=>{v.connection&&v.connectionState!=="connected"&&Ie(In)})}var Or=p(Yn,2);{var ur=Ie=>{var qe=mv(),Ge=ne(qe,!0);W(()=>V(Ge,v.connection.workspace_root)),b(Ie,qe)};F(Or,Ie=>{v.connection&&Ie(ur)})}var xs=p(we,2);{var Jn=Ie=>{var qe=wv(),Ge=x(qe),rn=x(Ge);rn.value=rn.__value="local";var vt=p(rn);vt.value=vt.__value="ssh",Rs(Ge);var On=p(Ge,2),Rr=p(On,2);{var Dr=sn=>{var _n=yv(),ws=H(_n),ks=p(ws,2),$s=p(ks,2),Lr=p($s,2),Fr=x(Lr);Fr.value=Fr.__value="agent";var jr=p(Fr);jr.value=jr.__value="key";var ka=p(jr);ka.value=ka.__value="password",Rs(Lr);var Wt=p(Lr,2);{var ql=gt=>{var Ss=bv(),$a=H(Ss),Jl=p($a,2);Le($a,()=>a(E).identity_file,to=>a(E).identity_file=to),Le(Jl,()=>a(E).private_key,to=>a(E).private_key=to),b(gt,Ss)};F(Wt,gt=>{a(E).auth_mode==="key"&&gt(ql)})}var Gl=p(Wt,2);{var Yl=gt=>{var Ss=xv();Le(Ss,()=>a(E).password,$a=>a(E).password=$a),b(gt,Ss)};F(Gl,gt=>{a(E).auth_mode==="password"&&gt(Yl)})}Le(ws,()=>a(E).host,gt=>a(E).host=gt),Le(ks,()=>a(E).username,gt=>a(E).username=gt),Le($s,()=>a(E).port,gt=>a(E).port=gt),uo(Lr,()=>a(E).auth_mode,gt=>a(E).auth_mode=gt),b(sn,_n)};F(Rr,sn=>{a(E).kind==="ssh"&&sn(Dr)})}var Tt=p(Rr,2),Ut=p(Tt,2),ys=p(x(Ut),2);W(()=>{_e(Tt,"placeholder",a(E).kind==="local"?"/var/www/app":"Workspace root"),Tt.required=a(E).kind==="local"}),rt("submit",qe,At),uo(Ge,()=>a(E).kind,sn=>a(E).kind=sn),Le(On,()=>a(E).label,sn=>a(E).label=sn),Le(Tt,()=>a(E).workspace_root,sn=>a(E).workspace_root=sn),R("click",ys,()=>d(ie,!1)),b(Ie,qe)};F(xs,Ie=>{a(ie)&&Ie(Jn)})}W(()=>{Ce!==(Ce=v.connectionId)&&(Se.value=(Se.__value=Ce)??"",Vs(Se,Ce))}),R("change",Se,pt),R("click",Ze,()=>d(Q,!0)),R("click",Et,()=>d(ie,!a(ie))),b(te,$e)};F(L,te=>{a(y)==="files"?te(j):a(y)==="search"?te(B,1):a(y)==="git"?te(X,2):te(Z,-1)})}var ve=p(m,2);_o(ve,{side:"right",min:170,max:620,onreset:()=>d(U,D.sidebar,!0),get size(){return a(U)},set size(te){d(U,te,!0)}}),W(()=>kr(m,`width: ${a(U)??""}px`)),b(k,u)};F(lr,k=>{a(O)&&k(zr)})}var qn=p(lr,2),cr=x(qn);{var hs=k=>{var u=Sv(),m=x(u);yi(m,{size:64,strokeWidth:1,class:"text-vs-line"});var L=p(m,4),j=x(L),B=x(j);ho(B,{size:16});var X=p(j,2),Z=x(X);ki(Z,{size:16}),R("click",j,()=>d(Q,!0)),R("click",X,()=>{d(y,"remote"),d(O,!0),d(ie,!0)}),b(k,u)},gs=k=>{var u=Pv(),m=H(u);cf(m,{});var L=p(m,2),j=x(L);rf(j,{});var B=p(L,2);{var X=Z=>{var ve=Nv(),te=H(ve);{var $e=Kt=>{_o(Kt,{side:"top",min:120,max:640,onreset:()=>d(C,D.panel,!0),get size(){return a(C)},set size(Rt){d(C,Rt,!0)}})};F(te,Kt=>{a(J)&&Kt($e)})}var we=p(te,2),Se=x(we),je=x(Se);Si(je,{size:13,class:"mx-1 shrink-0"});var Ot=p(je,2);Ue(Ot,20,()=>a(ge),Kt=>Kt,(Kt,Rt)=>{var Yn=Ev(),In=x(Yn),Or=ne(In,!0),ur=p(In,2);{var xs=Jn=>{var Ie=Cv(),qe=x(Ie);Ba(qe,{size:11}),W(()=>_e(Ie,"aria-label",`Close terminal ${Rt+1}`)),R("click",Ie,()=>ze(Rt)),b(Jn,Ie)};F(ur,Jn=>{a(ge).length>1&&Jn(xs)})}W(()=>{var Jn;xt(Yn,1,`group flex shrink-0 items-center gap-1 rounded-sm px-2 py-0.5
                           ${Rt===a(oe)?"bg-vs-hover text-vs-fg":"text-vs-muted hover:text-vs-fg"}`),V(Or,Rt===0?((Jn=v.connection)==null?void 0:Jn.label)||"Terminal":`Terminal ${Rt+1}`)}),R("click",In,()=>d(oe,Rt,!0)),b(Kt,Yn)});var Ce=p(Ot,2),Ct=x(Ce);Hs(Ct,{size:14});var Ze=p(Ce,2),An=x(Ze);$n(An,{size:15});var Et=p(Ze,2),Za=x(Et);Ci(Za,{size:13});var Qa=p(Se,2),eo=x(Qa);Su(eo,()=>v.connectionId,Kt=>{var Rt=re(),Yn=H(Rt);Ue(Yn,16,()=>a(ge),In=>In,(In,Or)=>{var ur=Tv(),xs=x(ur);Hf(xs,{get rootPath(){return s()},get session(){return r()},get index(){return Or}}),W(()=>_e(ur,"hidden",Or!==a(oe))),b(In,ur)}),b(Kt,Rt)}),W(()=>{kr(we,`height: ${a(C)??""}px`),_e(we,"hidden",!a(J)),Ce.disabled=a(ge).length>=be}),R("click",Ce,Me),R("click",Ze,()=>d(J,!1)),R("click",Et,()=>ze(a(oe))),b(Z,ve)};F(B,Z=>{a(K)&&v.connectionState==="connected"&&Z(X)})}b(k,u)};F(cr,k=>{v.connectionId?k(gs,-1):k(hs)})}var _s=p(qn,2);{var ms=k=>{var u=Mv(),m=H(u);_o(m,{side:"left",min:260,max:760,onreset:()=>d(M,D.chat,!0),get size(){return a(M)},set size(Ce){d(M,Ce,!0)}});var L=p(m,2),j=x(L),B=x(j);wi(B,{size:13,class:"shrink-0"});var X=p(B,4);Ue(X,20,()=>a(i),Ce=>Ce,(Ce,Ct)=>{var Ze=Ni(),An=ne(Ze,!0),Et={};W(()=>{V(An,Ct),Et!==(Et=Ct)&&(Ze.value=(Ze.__value=Et)??"")}),b(Ce,Ze)}),Rs(X);var Z=p(X,2),ve=x(Z);{var te=Ce=>{fn(Ce,{size:13,class:"animate-spin"})},$e=Ce=>{Hs(Ce,{size:14})};F(ve,Ce=>{a(l)?Ce(te):Ce($e,-1)})}var we=p(Z,2),Se=x(we);Ba(Se,{size:14});var je=p(j,2),Ot=x(je);Af(Ot,{get sessions(){return a(i)},get session(){return r()},get rootPath(){return s()},get target(){return a(o)},set target(Ce){d(o,Ce,!0)}}),W(()=>{kr(L,`width: ${a(M)??""}px`),Z.disabled=a(l)}),uo(X,()=>a(o),Ce=>d(o,Ce)),R("click",Z,S),R("click",we,()=>d(I,!1)),b(k,u)};F(_s,k=>{a(I)&&k(ms)})}var Gn=p(nn,2),Ar=x(Gn);{var bs=k=>{var u=zv(),m=x(u);{var L=Z=>{ho(Z,{size:12})},j=Z=>{ki(Z,{size:12})};F(m,Z=>{a(pe)?Z(L):Z(j,-1)})}var B=p(m),X=p(B);$i(X,{size:11,class:"opacity-70"}),W(()=>{_e(u,"title",`${v.connection.workspace_root??""} — click for connection settings`),V(B,` ${v.connection.label??""} `)}),R("click",u,w),b(k,u)};F(Ar,k=>{v.connection&&k(bs)})}var Ir=p(Ar,2);{var ee=k=>{var u=Av(),m=x(u);Ao(m,{size:12});var L=p(m);W(()=>V(L,` ${v.gitBranch??""}`)),b(k,u)};F(Ir,k=>{v.gitBranch&&k(ee)})}var Re=p(Ir,2),Te=ne(Re,!0),ce=p(Re,2),Ne=x(ce);{var ht=k=>{var u=Iv(),m=ne(u);W(()=>V(m,`${v.dirtyCount??""} unsaved`)),b(k,u)};F(Ne,k=>{v.dirtyCount&&k(ht)})}var Ye=p(Ne,2),Vt=ne(Ye,!0),It=p(Ye,2);{var We=k=>{var u=Ov(),m=H(u),L=x(m);hd(L,{size:12});var j=p(m,2),B=x(j);rd(B,{size:12}),R("click",m,()=>d(J,!a(J))),R("click",j,Nn),b(k,u)};F(It,k=>{v.connectionState==="connected"&&k(We)})}var ot=p(It,2);{var Je=k=>{var u=Rv(),m=x(u);wi(m,{size:12}),R("click",u,()=>d(I,!a(I))),b(k,u)};F(ot,k=>{k(Je)})}var dt=p(Gn,2);{var zn=k=>{Ff(k,{onclose:()=>d(Y,!1)})};F(dt,k=>{a(Y)&&k(zn)})}var St=p(dt,2);{var Xe=k=>{qf(k,{onopen:Ht,onclose:()=>d(Q,!1)})};F(St,k=>{a(Q)&&k(Xe)})}var ft=p(St,2);{var gn=k=>{iv(k,{onclose:()=>v.needsHostKey=!1,ontrusted:async()=>{v.needsHostKey=!1,await v.connect(a(se))}})};F(ft,k=>{v.needsHostKey&&k(gn)})}W(()=>{var k;Mn.disabled=!v.connectionId,ar=xt(Bt,1,"flex items-center gap-1 rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40",null,ar,{"text-vs-bright":a(J)}),Bt.disabled=v.connectionState!=="connected",_e(Bt,"title",v.connectionState==="connected"?"Toggle terminal (Ctrl+`)":"Open a workspace to use the terminal"),_e(or,"title",(k=v.connection)==null?void 0:k.workspace_root),V(vs,v.connection?`${v.connection.label} — Multibuilder IDE`:"Multibuilder IDE"),xt(tn,1,`flex items-center gap-1 ${v.connectionState==="connected"?"text-vs-green":v.connectionState==="connecting"?"text-vs-yellow":v.connectionState==="idle"?"text-vs-muted":"text-vs-red"}`),V(Er,` ${N[v.connectionState].label??""}`),V(Te,v.statusText),V(Vt,v.detailText)}),R("click",Pn,()=>d(Q,!0)),R("click",Mn,()=>d(Y,!0)),R("click",Bt,()=>d(J,!a(J))),R("click",Wn,()=>v.setStatus("Signed in to the Multibuilder dashboard")),R("click",Pr,()=>d(O,!a(O))),b(e,Oe),kt()}en(["click","change"]);function Wl(e,t){return yu(Lv,{target:e,props:t})}function Pi(){const e=document.getElementById("ide-root");if(!e||e.dataset.mounted)return;e.dataset.mounted="1";const t=window.__IDE_BOOTSTRAP__||{};Wl(e,{sessions:t.sessions||[],session:t.session||"",rootPath:t.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Pi):Pi();window.mountRemoteIde=Wl;export{Ia as _};
