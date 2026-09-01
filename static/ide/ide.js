const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css","./ide3.css"])))=>i.map(i=>d[i]);
var _l=Object.defineProperty;var vi=e=>{throw TypeError(e)};var gl=(e,t,n)=>t in e?_l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var Je=(e,t,n)=>gl(e,typeof t!="symbol"?t+"":t,n),ao=(e,t,n)=>t.has(e)||vi("Cannot "+n);var u=(e,t,n)=>(ao(e,t,"read from private field"),n?n.call(e):t.get(e)),V=(e,t,n)=>t.has(e)?vi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),ee=(e,t,n,r)=>(ao(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),ce=(e,t,n)=>(ao(e,t,"access private method"),n);var Ws=Array.isArray,ml=Array.prototype.indexOf,Is=Array.prototype.includes,qs=Array.from,Wi=Object.defineProperty,_n=Object.getOwnPropertyDescriptor,qi=Object.getOwnPropertyDescriptors,bl=Object.prototype,yl=Array.prototype,jo=Object.getPrototypeOf,hi=Object.isExtensible;function Tr(e){return typeof e=="function"}const xl=()=>{};function wl(e){return e()}function $o(e){for(var t=0;t<e.length;t++)e[t]()}function Gi(){var e,t,n=new Promise((r,s)=>{e=r,t=s});return{promise:n,resolve:e,reject:t}}function $l(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const Oe=2,lr=4,ps=8,Ho=1<<24,Pt=16,xt=32,sn=64,ko=128,Vo=256,yt=512,ze=1024,Ae=2048,At=4096,Qe=8192,ct=16384,pr=32768,Os=1<<25,mn=65536,Rs=1<<17,kl=1<<18,_r=1<<19,Yi=1<<20,Ut=1<<25,jn=65536,Ds=1<<21,Zn=1<<22,gn=1<<23,qt=Symbol("$state"),Ji=Symbol("component"),Xi=Symbol("legacy props"),Sl=Symbol(""),Ts=Symbol("attributes"),So=Symbol("class"),Eo=Symbol("style"),zr=Symbol("text"),Ns=Symbol("form reset"),_s=new class extends Error{constructor(){super(...arguments);Je(this,"name","StaleReactionError");Je(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var Ki;const Ko=!!((Ki=globalThis.document)!=null&&Ki.contentType)&&globalThis.document.contentType.includes("xml"),El=1,Cl=2,Zi=4,Tl=8,Nl=16,Ml=1,Pl=2,Qi=4,zl=8,Al=16,Il=1,Ol=2,Ne=Symbol("uninitialized"),ea="http://www.w3.org/1999/xhtml",Rl="http://www.w3.org/2000/svg",Dl="@attach";function Fl(){console.warn("https://svelte.dev/e/derived_inert")}function Ll(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function jl(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function ta(e){return e===this.v}function Hl(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function na(e){return!Hl(e,this.v)}function ra(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function Vl(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function Kl(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function Bl(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Ul(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function Wl(e){throw new Error("https://svelte.dev/e/effect_orphan")}function ql(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Gl(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function Yl(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Jl(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function Xl(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Zl(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let gr=!1;function Ql(){gr=!0}let be=null;function cr(e){be=e}function et(e,t=!1,n){be={p:be,i:!1,c:null,e:null,s:e,x:null,r:ie,l:gr&&!t?{s:null,u:null,$:[]}:null}}function tt(e){var t=be,n=t.e;if(n!==null){t.e=null;for(var r of n)Sa(r)}return t.i=!0,be=t.p,Bo(e)}function Bo(e={}){return Wi(e,Ji,{value:!0}),e}function mr(){return!gr||be!==null&&be.l===null}let Mn=[];function sa(){var e=Mn;Mn=[],$o(e)}function Wt(e){if(Mn.length===0&&!jr){var t=Mn;queueMicrotask(()=>{t===Mn&&sa()})}Mn.push(e)}function ec(){for(;Mn.length>0;)sa()}const tc=-7169;function $e(e,t){e.f=e.f&tc|t}function Uo(e){(e.f&yt)!==0||e.deps===null?$e(e,ze):$e(e,At)}function oa(e){if(e!==null)for(const t of e)(t.f&Oe)===0||(t.f&jn)===0||(t.f^=jn,oa(t.deps))}function ia(e,t,n){(e.f&Ae)!==0?t.add(e):(e.f&At)!==0&&n.add(e),oa(e.deps),$e(e,ze)}let Es=!1;function nc(e){var t=Es;try{return Es=!1,[e(),Es]}finally{Es=t}}function aa(e,t){if(t){const n=document.body;e.autofocus=!0,Wt(()=>{document.activeElement===n&&e.focus()})}}let pi=!1;function rc(){pi||(pi=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[Ns])==null||t.call(n)})},{capture:!0}))}function br(e){var t=le,n=ie;wt(null),$t(null);try{return e()}finally{wt(t),$t(n)}}function Wo(e,t,n,r=n){e.addEventListener(t,()=>br(n));const s=e[Ns];s?e[Ns]=()=>{s(),r(!0)}:e[Ns]=()=>r(!0),rc()}function la(e,t,n,r){const s=mr()?ur:qo;var o=e.filter(h=>!h.settled),i=t.map(s);if(n.length===0&&o.length===0){r(i);return}var a=ie,c=sc(),f=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(h=>h.promise)):null;function d(h){if((a.f&ct)===0){c();try{r([...i,...h])}catch(p){Bt(p,a)}Fs()}}var g=ca();if(n.length===0){f.then(()=>d([])).finally(g);return}function v(){Promise.all(n.map(h=>oc(h))).then(d).catch(h=>Bt(h,a)).finally(g)}f?f.then(()=>{c(),v(),Fs()}):v()}function sc(){var e=ie,t=le,n=be,r=U;return function(o=!0){$t(e),wt(t),cr(n),o&&(e.f&ct)===0&&(r==null||r.activate(),r==null||r.apply())}}function Fs(e=!0){$t(null),wt(null),cr(null),e&&(U==null||U.deactivate())}function ca(){var e=ie,t=e.b,n=U,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function ur(e){var t=Oe|Ae;return ie!==null&&(ie.f|=_r),{ctx:be,deps:null,effects:null,equals:ta,f:t,fn:e,reactions:null,rv:0,v:Ne,wv:0,parent:ie,ac:null}}const Ar=Symbol("obsolete");function oc(e,t,n){let r=ie;r===null&&Vl();var s=void 0,o=on(Ne),i=!le,a=new Set;return yc(()=>{var h,p;var c=ie,f=Gi();s=f.promise;try{Promise.resolve(e()).then(f.resolve,x=>{x!==_s&&f.reject(x)}).finally(Fs)}catch(x){f.reject(x),Fs()}var d=U;if(i){if((c.f&pr)!==0)var g=ca();if((h=r.b)!=null&&h.is_rendered())(p=d.async_deriveds.get(c))==null||p.reject(Ar);else for(const x of a.values())x.reject(Ar);a.add(f),d.async_deriveds.set(c,f)}const v=(x,k=void 0)=>{g==null||g(),a.delete(f),k!==Ar&&(d.activate(),k?(o.f|=gn,fr(o,k)):((o.f&gn)!==0&&(o.f^=gn),fr(o,x)),d.deactivate())};f.promise.then(v,x=>v(null,x||"unknown"))}),Gs(()=>{for(const c of a)c.reject(Ar)}),new Promise(c=>{function f(d){function g(){d===s?c(o):f(s)}d.then(g,g)}f(s)})}function at(e){const t=ur(e);return Pa(t),t}function qo(e){const t=ur(e);return t.equals=na,t}function ic(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)Ve(t[n])}}function Go(e){var t,n=ie,r=e.parent;if(!an&&r!==null&&e.v!==Ne&&(r.f&(ct|Qe))!==0)return Fl(),e.v;$t(r);try{e.f&=~jn,ic(e),t=Oa(e)}finally{$t(n)}return t}function ua(e){var t=Go(e);if(!e.equals(t)&&(e.wv=Aa(),(!(U!=null&&U.is_fork)||e.deps===null)&&(U!==null?(U.capture(e,t,!0),Lr==null||Lr.capture(e,t,!0)):e.v=t,e.deps===null))){$e(e,ze);return}an||(je!==null?(Zo()||U!=null&&U.is_fork)&&je.set(e,t):Uo(e))}function ac(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&br(()=>{n.ac.abort(_s),n.ac=null}),n.fn!==null&&(n.teardown=xl),Br(n,0),Qo(n))}function fa(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&dr(t)}let lo=null,Yn=null,U=null,Lr=null,je=null,Co=null,jr=!1,co=!1,Xn=null,Ms=null;var _i=0;let lc=1;var tr,hn,An,nr,rr,sr,en,or,ot,qr,tn,Nt,Ht,ir,In,de,To,Ir,No,da,va,Jn,cc,Or;const Ks=class Ks{constructor(){V(this,de);Je(this,"id",lc++);V(this,tr,!1);Je(this,"linked",!0);V(this,hn,null);V(this,An,null);Je(this,"async_deriveds",new Map);Je(this,"current",new Map);Je(this,"previous",new Map);V(this,nr,new Set);V(this,rr,new Set);V(this,sr,0);V(this,en,new Map);V(this,or,null);V(this,ot,[]);V(this,qr,[]);V(this,tn,new Set);V(this,Nt,new Set);V(this,Ht,new Map);V(this,ir,new Set);Je(this,"is_fork",!1);V(this,In,!1);Yn===null?lo=Yn=this:(ee(Yn,An,this),ee(this,hn,Yn)),Yn=this}skip_effect(t){u(this,Ht).has(t)||u(this,Ht).set(t,{d:[],m:[]}),u(this,ir).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=u(this,Ht).get(t);if(r){u(this,Ht).delete(t);for(var s of r.d)$e(s,Ae),n(s);for(s of r.m)$e(s,At),n(s)}u(this,ir).add(t)}capture(t,n,r=!1){t.v!==Ne&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&gn)===0&&(this.current.set(t,[n,r]),je==null||je.set(t,n)),this.is_fork||(t.v=n)}activate(){U=this}deactivate(){U=null,je=null}flush(){try{co=!0,U=this,ce(this,de,Ir).call(this)}finally{_i=0,Co=null,Xn=null,Ms=null,co=!1,U=null,je=null,Gt.clear()}}discard(){var t;for(const n of u(this,rr))n(this);u(this,rr).clear();for(const n of this.async_deriveds.values())n.reject(Ar);ce(this,de,Or).call(this),(t=u(this,or))==null||t.resolve()}register_created_effect(t){u(this,qr).push(t)}increment(t,n){if(ee(this,sr,u(this,sr)+1),t){let r=u(this,en).get(n)??0;u(this,en).set(n,r+1)}}decrement(t,n){if(ee(this,sr,u(this,sr)-1),t){let r=u(this,en).get(n)??0;r===1?u(this,en).delete(n):u(this,en).set(n,r-1)}u(this,In)||(ee(this,In,!0),Wt(()=>{ee(this,In,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)u(this,tn).add(r);for(const r of n)u(this,Nt).add(r);t.clear(),n.clear()}oncommit(t){u(this,nr).add(t)}ondiscard(t){u(this,rr).add(t)}settled(){return(u(this,or)??ee(this,or,Gi())).promise}static ensure(){if(U===null){const t=U=new Ks;!co&&!jr&&Wt(()=>{u(t,tr)||t.flush()})}return U}apply(){{je=null;return}}schedule(t){var s;if(Co=t,(s=t.b)!=null&&s.is_pending&&(t.f&(lr|ps|Ho))!==0&&(t.f&pr)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Xn!==null&&n===ie&&(le===null||(le.f&Oe)===0))return;if((r&(sn|xt))!==0){if((r&ze)===0)return;n.f^=ze}}u(this,ot).push(n)}};tr=new WeakMap,hn=new WeakMap,An=new WeakMap,nr=new WeakMap,rr=new WeakMap,sr=new WeakMap,en=new WeakMap,or=new WeakMap,ot=new WeakMap,qr=new WeakMap,tn=new WeakMap,Nt=new WeakMap,Ht=new WeakMap,ir=new WeakMap,In=new WeakMap,de=new WeakSet,To=function(){if(this.is_fork)return!0;for(const r of u(this,en).keys()){for(var t=r,n=!1;t.parent!==null;){if(u(this,Ht).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},Ir=function(){var c,f,d,g;ee(this,tr,!0),_i++>1e3&&(ce(this,de,Or).call(this),fc());for(const v of u(this,tn))u(this,Nt).delete(v),$e(v,Ae),this.schedule(v);for(const v of u(this,Nt))$e(v,At),this.schedule(v);const t=u(this,ot);ee(this,ot,[]),this.apply();var n=Xn=[],r=[],s=Ms=[];for(const v of t)try{ce(this,de,No).call(this,v,n,r)}catch(h){throw _a(v),ce(this,de,To).call(this)||this.discard(),h}if(U=null,s.length>0){var o=Ks.ensure();for(const v of s)o.schedule(v)}if(Xn=null,Ms=null,ce(this,de,To).call(this)){ce(this,de,Jn).call(this,r),ce(this,de,Jn).call(this,n);for(const[v,h]of u(this,Ht))pa(v,h);s.length>0&&ce(c=U,de,Ir).call(c);return}const i=ce(this,de,da).call(this);if(i){ce(this,de,Jn).call(this,r),ce(this,de,Jn).call(this,n),ce(f=i,de,va).call(f,this);return}u(this,tn).clear(),u(this,Nt).clear();for(const v of u(this,nr))v(this);u(this,nr).clear(),Lr=this,gi(r),gi(n),Lr=null,(d=u(this,or))==null||d.resolve();var a=U;if(u(this,sr)===0&&(u(this,ot).length===0||a!==null)&&ce(this,de,Or).call(this),u(this,ot).length>0)if(a!==null){const v=a;u(v,ot).push(...u(this,ot).filter(h=>!u(v,ot).includes(h)))}else a=this;a!==null&&(Gt.clear(),ce(g=a,de,Ir).call(g))},No=function(t,n,r){t.f^=ze;for(var s=t.first;s!==null;){var o=s.f,i=(o&(xt|sn))!==0,a=i&&(o&ze)!==0,c=a||(o&Qe)!==0||u(this,Ht).has(s);if(!c&&s.fn!==null){i?s.f^=ze:(o&lr)!==0?n.push(s):ms(s)&&((o&Pt)!==0&&u(this,Nt).add(s),dr(s));var f=s.first;if(f!==null){s=f;continue}}for(;s!==null;){var d=s.next;if(d!==null){s=d;break}s=s.parent}}},da=function(){for(var t=u(this,hn);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=u(t,hn)}return null},va=function(t){var r;for(const[s,o]of t.current)!this.previous.has(s)&&t.previous.has(s)&&this.previous.set(s,t.previous.get(s)),this.current.set(s,o);for(const[s,o]of t.async_deriveds){const i=this.async_deriveds.get(s);i&&o.promise.then(i.resolve).catch(i.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,tn),u(t,Nt));const n=s=>{var o=s.reactions;if(o!==null&&!((s.f&Oe)!==0&&(s.f&(Ae|At))===0))for(const c of o){var i=c.f;if((i&Oe)!==0)n(c);else{var a=c;i&(Zn|Pt)&&!this.async_deriveds.has(a)&&(u(this,Nt).delete(a),$e(a,Ae),this.schedule(a))}}};for(const s of this.current.keys())n(s);this.oncommit(()=>t.discard()),ce(r=t,de,Or).call(r),U=this,ce(this,de,Ir).call(this)},Jn=function(t){for(var n=0;n<t.length;n+=1)ia(t[n],u(this,tn),u(this,Nt))},cc=function(){var g;for(let v=lo;v!==null;v=u(v,An)){var t=v.id<this.id,n=[];for(const[h,[p,x]]of this.current){if(v.current.has(h)){var r=v.current.get(h)[0];if(t&&p!==r)v.current.set(h,[p,x]);else continue}n.push(h)}if(t)for(const[h,p]of this.async_deriveds){const x=v.async_deriveds.get(h);x&&p.promise.then(x.resolve).catch(x.reject)}var s=[...v.current.keys()].filter(h=>!v.current.get(h)[1]);if(!(!u(v,tr)||s.length===0)){var o=s.filter(h=>!this.current.has(h));if(o.length===0)t&&v.discard();else if(n.length>0){if(t)for(const h of u(this,ir))v.unskip_effect(h,p=>{var x;(p.f&(Pt|Zn))!==0?v.schedule(p):ce(x=v,de,Jn).call(x,[p])});v.activate();var i=new Set,a=new Map;for(var c of n)ha(c,o,i,a);a=new Map;var f=[...v.current].filter(([h,p])=>{const x=this.current.get(h);return x?x[0]!==p[0]||x[1]!==p[1]:!0}).map(([h])=>h);if(f.length>0)for(const h of u(this,qr))(h.f&(ct|Qe|Rs))===0&&Yo(h,f,a)&&((h.f&(Zn|Pt))!==0?($e(h,Ae),v.schedule(h)):u(v,tn).add(h));if(u(v,ot).length>0&&!u(v,In)){v.apply();for(var d of u(v,ot))ce(g=v,de,No).call(g,d,[],[]);ee(v,ot,[])}v.deactivate()}}}},Or=function(){if(this.linked){var t=u(this,hn),n=u(this,An);t===null?lo=n:ee(t,An,n),n===null?Yn=t:ee(n,hn,t),this.linked=!1}};let Hn=Ks;function uc(e){var t=jr;jr=!0;try{for(var n;;){if(ec(),U===null)return n;U.flush()}}finally{jr=t}}function fc(){try{ql()}catch(e){Bt(e,Co)}}let Tt=null;function gi(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(ct|Qe))===0&&ms(r)&&(Tt=new Set,dr(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Ta(r),(Tt==null?void 0:Tt.size)>0)){Gt.clear();for(const s of Tt){if((s.f&(ct|Qe))!==0)continue;const o=[s];let i=s.parent;for(;i!==null;)Tt.has(i)&&(Tt.delete(i),o.push(i)),i=i.parent;for(let a=o.length-1;a>=0;a--){const c=o[a];(c.f&(ct|Qe))===0&&dr(c)}}Tt.clear()}}Tt=null}}function ha(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const s of e.reactions){const o=s.f;(o&Oe)!==0?ha(s,t,n,r):(o&(Zn|Pt))!==0&&(o&Ae)===0&&Yo(s,t,r)&&($e(s,Ae),Jo(s))}}function Yo(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const s of e.deps){if(Is.call(t,s))return!0;if((s.f&Oe)!==0&&Yo(s,t,n))return n.set(s,!0),!0}return n.set(e,!1),!1}function Jo(e){U.schedule(e)}function pa(e,t){if(!((e.f&xt)!==0&&(e.f&ze)!==0)){(e.f&Ae)!==0?t.d.push(e):(e.f&At)!==0&&t.m.push(e),$e(e,ze);for(var n=e.first;n!==null;)pa(n,t),n=n.next}}function _a(e){$e(e,ze);for(var t=e.first;t!==null;)_a(t),t=t.next}let Ls=new Set;const Gt=new Map;let ga=!1;function on(e,t){var n={f:0,v:e,reactions:null,equals:ta,rv:0,wv:0};return n}function O(e,t){const n=on(e);return Pa(n),n}function dc(e,t=!1,n=!0){var s;const r=on(e);return t||(r.equals=na),gr&&n&&be!==null&&be.l!==null&&((s=be.l).s??(s.s=[])).push(r),r}function _(e,t,n=!1){le!==null&&(!zt||(le.f&Rs)!==0)&&mr()&&(le.f&(Oe|Pt|Zn|Rs))!==0&&(Yt===null||!Yt.has(e))&&Xl();let r=n?ge(t):t;return fr(e,r,Ms)}function fr(e,t,n=null){if(!e.equals(t)){an?Gt.set(e,t):Gt.has(e)||Gt.set(e,e.v);var r=Hn.ensure();if(r.capture(e,t),(e.f&Oe)!==0){const s=e;(e.f&Ae)!==0&&Go(s),je===null&&Uo(s)}e.wv=Aa(),ma(e,Ae,n),mr()&&ie!==null&&(ie.f&ze)!==0&&(ie.f&(xt|sn))===0&&(gt===null?$c([e]):gt.push(e)),!r.is_fork&&Ls.size>0&&!ga&&vc()}return t}function vc(){ga=!1;for(const e of Ls){(e.f&ze)!==0&&$e(e,At);let t;try{t=ms(e)}catch{t=!0}t&&dr(e)}Ls.clear()}function mi(e,t=1){var n=l(e),r=t===1?n++:n--;return _(e,n),r}function Hr(e){_(e,e.v+1)}function ma(e,t,n){var r=e.reactions;if(r!==null)for(var s=mr(),o=r.length,i=0;i<o;i++){var a=r[i],c=a.f;if(!(!s&&a===ie)){var f=(c&Ae)===0;if(f&&$e(a,t),(c&Rs)!==0)Ls.add(a);else if((c&Oe)!==0){var d=a;je==null||je.delete(d),(c&jn)===0&&(c&yt&&(ie===null||(ie.f&Ds)===0)&&(a.f|=jn),ma(d,At,n))}else if(f){var g=a;(c&Pt)!==0&&Tt!==null&&Tt.add(g),n!==null?n.push(g):Jo(g)}}}}function ge(e){if(typeof e!="object"||e===null||qt in e||Ji in e)return e;const t=jo(e);if(t!==bl&&t!==yl)return e;var n=new Map,r=Ws(e),s=O(0),o=Ln,i=a=>{if(Ln===o)return a();var c=le,f=Ln;wt(null),xi(o);var d=a();return wt(c),xi(f),d};return r&&n.set("length",O(e.length)),new Proxy(e,{defineProperty(a,c,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&Yl();var d=n.get(c);return d===void 0?i(()=>{var g=O(f.value);return n.set(c,g),g}):_(d,f.value,!0),!0},deleteProperty(a,c){var f=n.get(c);if(f===void 0){if(c in a){const d=i(()=>O(Ne));n.set(c,d),Hr(s)}}else _(f,Ne),Hr(s);return!0},get(a,c,f){var h;if(c===qt)return e;var d=n.get(c),g=c in a;if(d===void 0&&(!g||(h=_n(a,c))!=null&&h.writable)&&(d=i(()=>{var p=ge(g?a[c]:Ne),x=O(p);return x}),n.set(c,d)),d!==void 0){var v=l(d);return v===Ne?void 0:v}return Reflect.get(a,c,f)},getOwnPropertyDescriptor(a,c){var f=Reflect.getOwnPropertyDescriptor(a,c);if(f&&"value"in f){var d=n.get(c);d&&(f.value=l(d))}else if(f===void 0){var g=n.get(c),v=g==null?void 0:g.v;if(g!==void 0&&v!==Ne)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return f},has(a,c){var v;if(c===qt)return!0;var f=n.get(c),d=f!==void 0&&f.v!==Ne||Reflect.has(a,c);if(f!==void 0||ie!==null&&(!d||(v=_n(a,c))!=null&&v.writable)){f===void 0&&(f=i(()=>{var h=d?ge(a[c]):Ne,p=O(h);return p}),n.set(c,f));var g=l(f);if(g===Ne)return!1}return d},set(a,c,f,d){var N;var g=n.get(c),v=c in a;if(r&&c==="length")for(var h=f;h<g.v;h+=1){var p=n.get(h+"");p!==void 0?_(p,Ne):h in a&&(p=i(()=>O(Ne)),n.set(h+"",p))}if(g===void 0)(!v||(N=_n(a,c))!=null&&N.writable)&&(g=i(()=>O(void 0)),_(g,ge(f)),n.set(c,g));else{v=g.v!==Ne;var x=i(()=>ge(f));_(g,x)}var k=Reflect.getOwnPropertyDescriptor(a,c);if(k!=null&&k.set&&k.set.call(d,f),!v){if(r&&typeof c=="string"){var C=n.get("length"),I=Number(c);Number.isInteger(I)&&I>=C.v&&_(C,I+1)}Hr(s)}return!0},ownKeys(a){l(s);var c=Reflect.ownKeys(a).filter(g=>{var v=n.get(g);return v===void 0||v.v!==Ne});for(var[f,d]of n)d.v!==Ne&&!(f in a)&&c.push(f);return c},setPrototypeOf(){Jl()}})}function bi(e){try{if(e!==null&&typeof e=="object"&&qt in e)return e[qt]}catch{}return e}function ba(e,t){return Object.is(bi(e),bi(t))}var js,ya,xa,wa;function hc(){if(js===void 0){js=window,ya=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;xa=_n(t,"firstChild").get,wa=_n(t,"nextSibling").get,hi(e)&&(e[So]=void 0,e[Ts]=null,e[Eo]=void 0,e.__e=void 0),hi(n)&&(n[zr]=void 0)}}function rn(e=""){return document.createTextNode(e)}function Vn(e){return xa.call(e)}function gs(e){return wa.call(e)}function w(e,t){return Vn(e)}function D(e,t=!1){{var n=Vn(e);return n instanceof Comment&&n.data===""?gs(n):n}}function ae(e,t=!1){return Vn(e)}function m(e,t=1,n=!1){let r=e;for(;t--;)r=gs(r);return r}function pc(e){e.textContent=""}function $a(){return!1}function Xo(e,t,n){return t==null||t===ea?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function _c(e){var t=ie;if(t===null)return le.f|=gn,e;if((t.f&pr)===0&&(t.f&lr)===0)throw e;Bt(e,t)}function Bt(e,t){if(!(t!==null&&(t.f&ct)!==0)){for(;t!==null;){if((t.f&ko)!==0&&(t.f&(ct|Os))===0){if((t.f&pr)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function ka(e){ie===null&&(le===null&&Wl(),Ul()),an&&Bl()}function gc(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Ot(e,t){var n=ie;n!==null&&(n.f&Qe)!==0&&(e|=Qe);var r={ctx:be,deps:null,nodes:null,f:e|Ae|yt,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};U==null||U.register_created_effect(r);var s=r;if((e&lr)!==0)Xn!==null?Xn.push(r):Hn.ensure().schedule(r);else if(t!==null){try{dr(r)}catch(i){throw Ve(r),i}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&_r)===0&&(s=s.first,(e&Pt)!==0&&(e&mn)!==0&&s!==null&&(s.f|=mn))}if(s!==null&&(s.parent=n,n!==null&&gc(s,n),le!==null&&(le.f&Oe)!==0&&(e&sn)===0)){var o=le;(o.effects??(o.effects=[])).push(s)}return r}function Zo(){return le!==null&&!zt}function Gs(e){const t=Ot(ps,null);return $e(t,ze),t.teardown=e,t}function Jt(e){ka();var t=ie.f,n=!le&&(t&xt)!==0&&be!==null&&!be.i;if(n){var r=be;(r.e??(r.e=[])).push(e)}else return Sa(e)}function Sa(e){return Ot(lr|Yi,e)}function mc(e){return ka(),Ot(ps|Yi,e)}function bc(e){Hn.ensure();const t=Ot(sn|_r,e);return(n={})=>new Promise(r=>{n.outro?Fn(t,()=>{Ve(t),r(void 0)}):(Ve(t),r(void 0))})}function Ys(e){return Ot(lr,e)}function yc(e){return Ot(Zn|_r,e)}function Js(e,t=0){return Ot(ps|t,e)}function X(e,t=[],n=[],r=[]){la(r,t,n,s=>{Ot(ps,()=>{e(...s.map(l))})})}function yr(e,t=0){var n=Ot(Pt|t,e);return n}function Ea(e,t=0){var n=Ot(Ho|t,e);return n}function it(e){return Ot(xt|_r,e)}function Ca(e){var t=e.teardown;if(t!==null){const n=an,r=le;yi(!0),wt(null);try{t.call(null)}catch(s){Bt(s,e.parent)}finally{yi(n),wt(r)}}}function Qo(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const s=n.ac;s!==null&&br(()=>{s.abort(_s)});var r=n.next;(n.f&sn)!==0?n.parent=null:Ve(n,t),n=r}}function xc(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&xt)===0&&Ve(t),t=n}}function Ve(e,t=!0){var n=!1;(t||(e.f&kl)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(wc(e.nodes.start,e.nodes.end),n=!0),e.f|=Os,Qo(e,t&&!n),Br(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const o of r)o.stop();Ca(e),e.f^=Os,e.f|=ct;var s=e.parent;s!==null&&s.first!==null&&Ta(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function wc(e,t){for(;e!==null;){var n=e===t?null:gs(e);e.remove(),e=n}}function Ta(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Fn(e,t,n=!0){var r=[];e.f|=Vo,Na(e,r,!0);var s=()=>{n&&Ve(e),t&&t()},o=r.length;if(o>0){var i=()=>--o||s();for(var a of r)a.out(i)}else s()}function Na(e,t,n){if((e.f&Qe)===0){e.f^=Qe;var r=e.nodes&&e.nodes.t;if(r!==null)for(const a of r)(a.is_global||n)&&t.push(a);for(var s=e.first;s!==null;){var o=s.next;if((s.f&sn)===0){var i=(s.f&mn)!==0||(s.f&xt)!==0&&(e.f&Pt)!==0;Na(s,t,i?n:!1)}s=o}}}function Hs(e){e.f&=~Vo,Ma(e,!0)}function Ma(e,t){if((e.f&Vo)===0&&(e.f&Qe)!==0){e.f^=Qe,(e.f&ze)===0&&($e(e,Ae),Hn.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,s=(n.f&mn)!==0||(n.f&xt)!==0;Ma(n,s?t:!1),n=r}var o=e.nodes&&e.nodes.t;if(o!==null)for(const i of o)(i.is_global||t)&&i.in()}}function ei(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var s=n===r?null:gs(n);t.append(n),n=s}}let Ps=!1,an=!1;function yi(e){an=e}let le=null,zt=!1;function wt(e){le=e}let ie=null;function $t(e){ie=e}let Yt=null;function Pa(e){le!==null&&(Yt??(Yt=new Set)).add(e)}let lt=null,ht=0,gt=null;function $c(e){gt=e}let za=1,Pn=0,Ln=Pn;function xi(e){Ln=e}function Aa(){return++za}function ms(e){var t=e.f;if((t&Ae)!==0)return!0;if(t&Oe&&(e.f&=~jn),(t&At)!==0){for(var n=e.deps,r=n.length,s=0;s<r;s++){var o=n[s];if(ms(o)&&ua(o),o.wv>e.wv)return!0}(t&yt)!==0&&je===null&&$e(e,ze)}return!1}function Ia(e,t,n=!0){var r=e.reactions;if(r!==null&&!(Yt!==null&&Yt.has(e)))for(var s=0;s<r.length;s++){var o=r[s];(o.f&Oe)!==0?Ia(o,t,!1):t===o&&(n?$e(o,Ae):(o.f&ze)!==0&&$e(o,At),Jo(o))}}function Oa(e){var t=lt,n=ht,r=gt,s=le,o=Yt,i=be,a=zt,c=Ln,f=e.f;lt=null,ht=0,gt=null,le=(f&(xt|sn))===0?e:null,Yt=null,cr(e.ctx),zt=!1,Ln=++Pn,e.ac!==null&&(br(()=>{e.ac.abort(_s)}),e.ac=null);try{e.f|=Ds;var d=e.fn,g=d();e.f|=pr;var v=wi(e);if(mr()&&gt!==null&&!zt&&v!==null&&(e.f&(Oe|At|Ae))===0)for(var h=0;h<gt.length;h++)Ia(gt[h],e);if(s!==null&&s!==e){if(Pn++,s.deps!==null)for(let p=0;p<n;p+=1)s.deps[p].rv=Pn;if(t!==null)for(const p of t)p.rv=Pn;gt!==null&&(r===null?r=gt:r.push(...gt))}return(e.f&gn)!==0&&(e.f^=gn),g}catch(p){return wi(e),_c(p)}finally{e.f^=Ds,lt=t,ht=n,gt=r,le=s,Yt=o,cr(i),zt=a,Ln=c}}function wi(e){var s;var t=e.deps,n=U==null?void 0:U.is_fork;if(lt!==null){var r;if(n||Br(e,ht),t!==null&&ht>0)for(t.length=ht+lt.length,r=0;r<lt.length;r++)t[ht+r]=lt[r];else e.deps=t=lt;if(Zo()&&(e.f&yt)!==0)for(r=ht;r<t.length;r++)((s=t[r]).reactions??(s.reactions=[])).push(e)}else!n&&t!==null&&ht<t.length&&(Br(e,ht),t.length=ht);return t}function kc(e,t){let n=t.reactions;if(n!==null){var r=ml.call(n,e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(t.f&Oe)!==0&&(lt===null||!Is.call(lt,t))){var o=t;(o.f&yt)!==0&&(o.f^=yt,o.f&=~jn),o.v!==Ne&&Uo(o),o.ac!==null&&br(()=>{o.ac.abort(_s),o.ac=null,$e(o,Ae)}),ac(o),Br(o,0)}}function Br(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)kc(e,n[r])}function dr(e){var t=e.f;if((t&ct)===0){$e(e,ze);var n=ie,r=Ps;ie=e,Ps=(t&(xt|sn))===0;try{(t&(Pt|Ho))!==0?xc(e):Qo(e),Ca(e);var s=Oa(e);e.teardown=typeof s=="function"?s:null,e.wv=za;var o}finally{Ps=r,ie=n}}}async function Sc(){await Promise.resolve(),uc()}function l(e){var t=e.f,n=(t&Oe)!==0;if(le!==null&&!zt){var r=ie!==null&&(ie.f&ct)!==0;if(!r&&(Yt===null||!Yt.has(e))){var s=le.deps;if((le.f&Ds)!==0)e.rv<Pn&&(e.rv=Pn,lt===null&&s!==null&&s[ht]===e?ht++:lt===null?lt=[e]:lt.push(e));else{le.deps??(le.deps=[]),Is.call(le.deps,e)||le.deps.push(e);var o=e.reactions;o===null?e.reactions=[le]:Is.call(o,le)||o.push(le)}}}if(an&&Gt.has(e))return Gt.get(e);if(n){var i=e;if(an){var a=i.v;return((i.f&ze)===0&&i.reactions!==null||Da(i))&&(a=Go(i)),Gt.set(i,a),a}var c=(i.f&yt)===0&&!zt&&le!==null&&(Ps||(le.f&yt)!==0),f=(i.f&pr)===0;ms(i)&&(c&&(i.f|=yt),ua(i)),c&&!f&&(fa(i),Ra(i))}if(je!=null&&je.has(e))return je.get(e);if((e.f&gn)!==0)throw e.v;return e.v}function Ra(e){if(e.f|=yt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Oe)!==0&&(t.f&yt)===0&&(fa(t),Ra(t))}function Da(e){if(e.v===Ne)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(Gt.has(t)||(t.f&Oe)!==0&&Da(t))return!0;return!1}function Xt(e){var t=zt;try{return zt=!0,e()}finally{zt=t}}function Tn(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(qt in e)Mo(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&qt in n&&Mo(n)}}}function Mo(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{Mo(e[r],t)}catch{}const n=jo(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=qi(n);for(let s in r){const o=r[s].get;if(o)try{o.call(e)}catch{}}}}}function Ec(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Cc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Tc(e){return Cc.includes(e)}const Nc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Mc(e){return e=e.toLowerCase(),Nc[e]??e}const Pc=["touchstart","touchmove"];function zc(e){return Pc.includes(e)}const zn=Symbol("events"),Fa=new Set,Po=new Set;function La(e,t,n,r={}){function s(o){if(r.capture||zo.call(t,o),!o.cancelBubble)return br(()=>n==null?void 0:n.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Wt(()=>{t.addEventListener(e,s,r)}):t.addEventListener(e,s,r),s}function vr(e,t,n,r,s){var o={capture:r,passive:s},i=La(e,t,n,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Gs(()=>{t.removeEventListener(e,i,o)})}function R(e,t,n){(t[zn]??(t[zn]={}))[e]=n}function kt(e){for(var t=0;t<e.length;t++)Fa.add(e[t]);for(var n of Po)n(e)}let uo=null,fo=!1;function zo(e){var x,k;var t=this,n=t.ownerDocument,r=e.type,s=((x=e.composedPath)==null?void 0:x.call(e))||[],o=s[0]||e.target;uo=e,fo||(fo=!0,setTimeout(()=>{fo=!1,uo=null}));var i=0,a=uo===e&&e[zn];if(a){var c=s.indexOf(a);if(c!==-1&&(t===document||t===window)){e[zn]=t;return}var f=s.indexOf(t);if(f===-1)return;c<=f&&(i=c)}if(o=s[i]||e.target,o!==t){Wi(e,"currentTarget",{configurable:!0,get(){return o||n}});var d=le,g=ie;wt(null),$t(null);try{for(var v,h=[];o!==null&&o!==t;){try{var p=(k=o[zn])==null?void 0:k[r];p!=null&&(!o.disabled||e.target===o)&&p.call(o,e)}catch(C){v?h.push(C):v=C}if(e.cancelBubble)break;i++,o=i<s.length?s[i]:null}if(v){for(let C of h)queueMicrotask(()=>{throw C});throw v}}finally{e[zn]=t,delete e.currentTarget,wt(d),$t(g)}}}var Bi;const vo=((Bi=globalThis==null?void 0:globalThis.window)==null?void 0:Bi.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Ac(e){return(vo==null?void 0:vo.createHTML(e))??e}function ja(e){var t=Xo("template");return t.innerHTML=Ac(e.replaceAll("<!>","<!---->")),t.content}function Ur(e,t){var n=ie;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function z(e,t){var n=(t&Il)!==0,r=(t&Ol)!==0,s,o=!e.startsWith("<!>");return()=>{s===void 0&&(s=ja(o?e:"<!>"+e),n||(s=Vn(s)));var i=r||ya?document.importNode(s,!0):s.cloneNode(!0);if(n){var a=Vn(i),c=i.lastChild;Ur(a,c)}else Ur(i,i);return i}}function Ic(e,t,n="svg"){var r=!e.startsWith("<!>"),s=`<${n}>${r?e:"<!>"+e}</${n}>`,o;return()=>{if(!o){var i=ja(s),a=Vn(i);o=Vn(a)}var c=o.cloneNode(!0);return Ur(c,c),c}}function Ha(e,t){return Ic(e,t,"svg")}function q(){var e=document.createDocumentFragment(),t=document.createComment(""),n=rn();return e.append(t,n),Ur(t,n),e}function y(e,t){e!==null&&e.before(t)}function Oc(e){let t=0,n=on(0),r;return()=>{Zo()&&(l(n),Js(()=>(t===0&&(r=Xt(()=>e(()=>Hr(n)))),t+=1,()=>{Wt(()=>{t-=1,t===0&&(r==null||r(),r=void 0,Hr(n))})})))}}var Rc=mn|_r;function Dc(e,t,n,r){new Fc(e,t,n,r)}var mt,Lo,bt,On,Xe,ft,Ze,dt,Vt,Rn,pn,ar,Gr,Yr,nn,Bs,me,Lc,jc,Ao,Hc,Io,Rr,zs,Oo,Ro;class Fc{constructor(t,n,r,s){V(this,me);Je(this,"parent");Je(this,"is_pending",!1);Je(this,"transform_error");V(this,mt);V(this,Lo,null);V(this,bt);V(this,On);V(this,Xe);V(this,ft,null);V(this,Ze,null);V(this,dt,null);V(this,Vt,null);V(this,Rn,0);V(this,pn,0);V(this,ar,!1);V(this,Gr,new Set);V(this,Yr,new Set);V(this,nn,null);V(this,Bs,Oc(()=>(ee(this,nn,on(u(this,Rn))),()=>{ee(this,nn,null)})));var o;ee(this,mt,t),ee(this,bt,n),ee(this,On,i=>{var a=ie;a.b=this,a.f|=ko,r(i)}),this.parent=ie.b,this.transform_error=s??((o=this.parent)==null?void 0:o.transform_error)??(i=>i),ee(this,Xe,yr(()=>{ce(this,me,Io).call(this)},Rc))}defer_effect(t){ia(t,u(this,Gr),u(this,Yr))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,bt).pending}update_pending_count(t,n){ce(this,me,Oo).call(this,t,n),ee(this,Rn,u(this,Rn)+t),!(!u(this,nn)||u(this,ar))&&(ee(this,ar,!0),Wt(()=>{ee(this,ar,!1),u(this,nn)&&fr(u(this,nn),u(this,Rn))}))}get_effect_pending(){return u(this,Bs).call(this),l(u(this,nn))}error(t){if(!u(this,bt).onerror&&!u(this,bt).failed)throw t;U!=null&&U.is_fork?(u(this,ft)&&U.skip_effect(u(this,ft)),u(this,Ze)&&U.skip_effect(u(this,Ze)),u(this,dt)&&U.skip_effect(u(this,dt)),U.oncommit(()=>{ce(this,me,Ro).call(this,t)})):ce(this,me,Ro).call(this,t)}}mt=new WeakMap,Lo=new WeakMap,bt=new WeakMap,On=new WeakMap,Xe=new WeakMap,ft=new WeakMap,Ze=new WeakMap,dt=new WeakMap,Vt=new WeakMap,Rn=new WeakMap,pn=new WeakMap,ar=new WeakMap,Gr=new WeakMap,Yr=new WeakMap,nn=new WeakMap,Bs=new WeakMap,me=new WeakSet,Lc=function(){try{ee(this,ft,it(()=>u(this,On).call(this,u(this,mt))))}catch(t){this.error(t)}},jc=function(t){const n=u(this,bt).failed,{reset:r,invoke_onerror:s}=ce(this,me,Ao).call(this,t);Wt(s),n&&ee(this,dt,it(()=>{n(u(this,mt),()=>t,()=>r)}))},Ao=function(t){var n=!1,r=!1;const s=()=>{if(n){jl();return}n=!0,r&&Zl(),u(this,dt)!==null&&Fn(u(this,dt),()=>{ee(this,dt,null)}),ce(this,me,zs).call(this,()=>{ce(this,me,Io).call(this)})};return{reset:s,invoke_onerror:()=>{var i,a;try{r=!0,(a=(i=u(this,bt)).onerror)==null||a.call(i,t,s),r=!1}catch(c){Bt(c,u(this,Xe)&&u(this,Xe).parent)}}}},Hc=function(){const t=u(this,bt).pending;t&&(this.is_pending=!0,ee(this,Ze,it(()=>t(u(this,mt)))),Wt(()=>{var n=ee(this,Vt,document.createDocumentFragment()),r=rn(),s=!1;if(n.append(r),ee(this,ft,ce(this,me,zs).call(this,()=>{try{return it(()=>u(this,On).call(this,r))}catch(o){try{this.error(o),s=!0}catch(i){Bt(i,u(this,Xe).parent)}return null}})),u(this,ft)===null){ee(this,Vt,null),s&&ce(this,me,Rr).call(this,U);return}u(this,pn)===0&&(u(this,mt).before(n),ee(this,Vt,null),Fn(u(this,Ze),()=>{ee(this,Ze,null)}),ce(this,me,Rr).call(this,U))}))},Io=function(){try{if(this.is_pending=this.has_pending_snippet(),ee(this,pn,0),ee(this,Rn,0),ee(this,ft,it(()=>{u(this,On).call(this,u(this,mt))})),u(this,pn)>0){var t=ee(this,Vt,document.createDocumentFragment());ei(u(this,ft),t);const n=u(this,bt).pending;ee(this,Ze,it(()=>n(u(this,mt))))}else ce(this,me,Rr).call(this,U)}catch(n){this.error(n)}},Rr=function(t){this.is_pending=!1,t.transfer_effects(u(this,Gr),u(this,Yr))},zs=function(t){var n=ie,r=le,s=be;$t(u(this,Xe)),wt(u(this,Xe)),cr(u(this,Xe).ctx);try{return Hn.ensure(),t()}finally{$t(n),wt(r),cr(s)}},Oo=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&ce(r=this.parent,me,Oo).call(r,t,n);return}ee(this,pn,u(this,pn)+t),u(this,pn)===0&&(ce(this,me,Rr).call(this,n),u(this,Ze)&&Fn(u(this,Ze),()=>{ee(this,Ze,null)}),u(this,Vt)&&(u(this,mt).before(u(this,Vt)),ee(this,Vt,null)))},Ro=function(t){u(this,ft)&&(Ve(u(this,ft)),ee(this,ft,null)),u(this,Ze)&&(Ve(u(this,Ze)),ee(this,Ze,null)),u(this,dt)&&(Ve(u(this,dt)),ee(this,dt,null));let n=u(this,bt).failed;const r=s=>{const{reset:o,invoke_onerror:i}=ce(this,me,Ao).call(this,s);i(),n&&ee(this,dt,ce(this,me,zs).call(this,()=>{try{return it(()=>{var a=ie;a.b=this,a.f|=ko,n(u(this,mt),()=>s,()=>o)})}catch(a){return Bt(a,u(this,Xe).parent),null}}))};Wt(()=>{var s;try{s=this.transform_error(t)}catch(o){Bt(o,u(this,Xe)&&u(this,Xe).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,o=>Bt(o,u(this,Xe)&&u(this,Xe).parent)):r(s)})};function Z(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[zr]??(e[zr]=e.nodeValue))&&(e[zr]=n,e.nodeValue=`${n}`)}function Vc(e,t){return Kc(e,t)}const Cs=new Map;function Kc(e,{target:t,anchor:n,props:r={},events:s,context:o,intro:i=!0,transformError:a}){hc();var c=void 0,f=bc(()=>{var d=n??t.appendChild(rn());Dc(d,{pending:()=>{}},h=>{et({});var p=be;o&&(p.c=o),s&&(r.$$events=s),c=e(h,r)||Bo(),tt()},a);var g=new Set,v=h=>{for(var p=0;p<h.length;p++){var x=h[p];if(!g.has(x)){g.add(x);var k=zc(x);for(const N of[t,document]){var C=Cs.get(N);C===void 0&&(C=new Map,Cs.set(N,C));var I=C.get(x);I===void 0?(N.addEventListener(x,zo,{passive:k}),C.set(x,1)):C.set(x,I+1)}}}};return v(qs(Fa)),Po.add(v),()=>{var k;for(var h of g)for(const C of[t,document]){var p=Cs.get(C),x=p.get(h);--x==0?(C.removeEventListener(h,zo),p.delete(h),p.size===0&&Cs.delete(C)):p.set(h,x)}Po.delete(v),d!==n&&((k=d.parentNode)==null||k.removeChild(d))}});return Bc.set(c,f),c}let Bc=new WeakMap;var Mt,Kt,vt,Dn,Jr,Xr,Us;class Xs{constructor(t,n=!0){Je(this,"anchor");V(this,Mt,new Map);V(this,Kt,new Map);V(this,vt,new Map);V(this,Dn,new Set);V(this,Jr,!0);V(this,Xr,t=>{if(u(this,Mt).has(t)){var n=u(this,Mt).get(t),r=u(this,Kt).get(n);if(r)Hs(r),u(this,Dn).delete(n);else{var s=u(this,vt).get(n);s&&(Hs(s.effect),u(this,Kt).set(n,s.effect),u(this,vt).delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[o,i]of u(this,Mt)){if(u(this,Mt).delete(o),o===t)break;const a=u(this,vt).get(i);a&&(Ve(a.effect),u(this,vt).delete(i))}for(const[o,i]of u(this,Kt)){if(o===n||u(this,Dn).has(o))continue;const a=()=>{if(Array.from(u(this,Mt).values()).includes(o)){var f=document.createDocumentFragment();ei(i,f),f.append(rn()),u(this,vt).set(o,{effect:i,fragment:f})}else Ve(i);u(this,Dn).delete(o),u(this,Kt).delete(o)};u(this,Jr)||!r?(u(this,Dn).add(o),Fn(i,a,!1)):a()}}});V(this,Us,t=>{u(this,Mt).delete(t);const n=Array.from(u(this,Mt).values());for(const[r,s]of u(this,vt))n.includes(r)||(Ve(s.effect),u(this,vt).delete(r))});this.anchor=t,ee(this,Jr,n)}ensure(t,n){var r=U,s=$a();if(n&&!u(this,Kt).has(t)&&!u(this,vt).has(t))if(s){var o=document.createDocumentFragment(),i=rn();o.append(i),u(this,vt).set(t,{effect:it(()=>n(i)),fragment:o})}else u(this,Kt).set(t,it(()=>n(this.anchor)));if(u(this,Mt).set(r,t),s){for(const[a,c]of u(this,Kt))a===t?r.unskip_effect(c):r.skip_effect(c);for(const[a,c]of u(this,vt))a===t?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(u(this,Xr)),r.ondiscard(u(this,Us))}else u(this,Xr).call(this,r)}}Mt=new WeakMap,Kt=new WeakMap,vt=new WeakMap,Dn=new WeakMap,Jr=new WeakMap,Xr=new WeakMap,Us=new WeakMap;function H(e,t,n=!1){var r=new Xs(e),s=n?mn:0;function o(i,a){r.ensure(i,a)}yr(()=>{var i=!1;t((a,c=0)=>{i=!0,o(c,a)}),i||o(-1,null)},s)}const Uc=Symbol("NaN");function Wc(e,t,n){var r=new Xs(e),s=!mr();yr(()=>{var o=t();o!==o&&(o=Uc),s&&o!==null&&typeof o=="object"&&(o={}),r.ensure(o,n)})}function qc(e,t){return t}function Gc(e,t,n){for(var r=[],s=t.length,o,i=t.length,a=0;a<s;a++){let g=t[a];Fn(g,()=>{if(o){if(o.pending.delete(g),o.done.add(g),o.pending.size===0){var v=e.outrogroups;Do(e,qs(o.done)),v.delete(o),v.size===0&&(e.outrogroups=null)}}else i-=1},!1)}if(i===0){var c=r.length===0&&n!==null&&e.pending.size===0;if(c){var f=n,d=f.parentNode;pc(d),d.append(f),e.items.clear()}Do(e,t,!c)}else o={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(o)}function Do(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const i of e.pending.values())for(const a of i)r.add(e.items.get(a).e)}for(var s=0;s<t.length;s++){var o=t[s];if(r!=null&&r.has(o)){o.f|=Ut;const i=document.createDocumentFragment();ei(o,i)}else Ve(t[s],n)}}var $i;function He(e,t,n,r,s,o=null){var i=e,a=new Map,c=(t&Zi)!==0;if(c){var f=e;i=f.appendChild(rn())}var d=null,g=qo(()=>{var N=n();return Ws(N)?N:N==null?[]:qs(N)}),v,h=new Map,p=!0;function x(N){(I.effect.f&ct)===0&&(I.pending.delete(N),I.fallback=d,Yc(I,v,i,t,r),d!==null&&(v.length===0?(d.f&Ut)===0?Hs(d):(d.f^=Ut,Dr(d,null,i)):Fn(d,()=>{d=null})))}function k(N){I.pending.delete(N)}var C=yr(()=>{v=l(g);for(var N=v.length,P=new Set,S=U,$=$a(),T=0;T<N;T+=1){var G=v[T],J=r(G,T),j=p?null:a.get(J);j?(j.v&&fr(j.v,G),j.i&&fr(j.i,T),$&&S.unskip_effect(j.e)):(j=Jc(a,p?i:$i??($i=rn()),G,J,T,s,t,n),p||(j.e.f|=Ut),a.set(J,j)),P.add(J)}if(N===0&&o&&!d&&(p?d=it(()=>o(i)):(d=it(()=>o($i??($i=rn()))),d.f|=Ut)),N>P.size&&Kl(),!p)if(h.set(S,P),$){for(const[A,K]of a)P.has(A)||S.skip_effect(K.e);S.oncommit(x),S.ondiscard(k)}else x(S);l(g)}),I={effect:C,items:a,pending:h,outrogroups:null,fallback:d};p=!1}function Nr(e){for(;e!==null&&(e.f&xt)===0;)e=e.next;return e}function Yc(e,t,n,r,s){var j,A,K,F,Y,pe,fe,Ee,Q;var o=(r&Tl)!==0,i=t.length,a=e.items,c=Nr(e.effect.first),f,d=null,g,v=[],h=[],p,x,k,C;if(o)for(C=0;C<i;C+=1)p=t[C],x=s(p,C),k=a.get(x).e,(k.f&Ut)===0&&((A=(j=k.nodes)==null?void 0:j.a)==null||A.measure(),(g??(g=new Set)).add(k));for(C=0;C<i;C+=1){if(p=t[C],x=s(p,C),k=a.get(x).e,e.outrogroups!==null)for(const ue of e.outrogroups)ue.pending.delete(k),ue.done.delete(k);if((k.f&Qe)!==0&&(Hs(k),o&&((F=(K=k.nodes)==null?void 0:K.a)==null||F.unfix(),(g??(g=new Set)).delete(k))),(k.f&Ut)!==0)if(k.f^=Ut,k===c)Dr(k,null,n);else{var I=d?d.next:c;k===e.effect.last&&(e.effect.last=k.prev),k.prev&&(k.prev.next=k.next),k.next&&(k.next.prev=k.prev),dn(e,d,k),dn(e,k,I),Dr(k,I,n),d=k,v=[],h=[],c=Nr(d.next);continue}if(k!==c){if(f!==void 0&&f.has(k)){if(v.length<h.length){var N=h[0],P;d=N.prev;var S=v[0],$=v[v.length-1];for(P=0;P<v.length;P+=1)Dr(v[P],N,n);for(P=0;P<h.length;P+=1)f.delete(h[P]);dn(e,S.prev,$.next),dn(e,d,S),dn(e,$,N),c=N,d=$,C-=1,v=[],h=[]}else f.delete(k),Dr(k,c,n),dn(e,k.prev,k.next),dn(e,k,d===null?e.effect.first:d.next),dn(e,d,k),d=k;continue}for(v=[],h=[];c!==null&&c!==k;)(f??(f=new Set)).add(c),h.push(c),c=Nr(c.next);if(c===null)continue}(k.f&Ut)===0&&v.push(k),d=k,c=Nr(k.next)}if(e.outrogroups!==null){for(const ue of e.outrogroups)ue.pending.size===0&&(Do(e,qs(ue.done)),(Y=e.outrogroups)==null||Y.delete(ue));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||f!==void 0){var T=[];if(f!==void 0)for(k of f)(k.f&Qe)===0&&T.push(k);for(;c!==null;)(c.f&Qe)===0&&c!==e.fallback&&T.push(c),c=Nr(c.next);var G=T.length;if(G>0){var J=(r&Zi)!==0&&i===0?n:null;if(o){for(C=0;C<G;C+=1)(fe=(pe=T[C].nodes)==null?void 0:pe.a)==null||fe.measure();for(C=0;C<G;C+=1)(Q=(Ee=T[C].nodes)==null?void 0:Ee.a)==null||Q.fix()}Gc(e,T,J)}}o&&Wt(()=>{var ue,ye;if(g!==void 0)for(k of g)(ye=(ue=k.nodes)==null?void 0:ue.a)==null||ye.apply()})}function Jc(e,t,n,r,s,o,i,a){var c=(i&El)!==0?(i&Nl)===0?dc(n,!1,!1):on(n):null,f=(i&Cl)!==0?on(s):null;return{v:c,i:f,e:it(()=>(o(t,c??n,f??s,a),()=>{e.delete(r)}))}}function Dr(e,t,n){if(e.nodes)for(var r=e.nodes.start,s=e.nodes.end,o=t&&(t.f&Ut)===0?t.nodes.start:n;r!==null;){var i=gs(r);if(o.before(r),r===s)return;r=i}}function dn(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function ne(e,t,n,r,s){var a,c;if((a=t.$$host)!=null&&a.$$shadowRoot){const f=Xo("slot");y(e,f);return}var o=(c=t.$$slots)==null?void 0:c[n],i=!1;o===!0&&(o=t.children,i=!0),o===void 0||o(e,i?()=>r:r)}function ki(e,t,n){var r=new Xs(e);yr(()=>{var s=t()??null;r.ensure(s,s&&(o=>n(o,s)))},mn)}function Xc(e,t,n,r,s,o){var i=null,a=e,c=new Xs(a,!1);yr(()=>{const f=t()||null;var d=Rl;if(f===null){c.ensure(null,null);return}return c.ensure(f,g=>{if(f){if(i=Xo(f,d),Ur(i,i),r){var v=null,h=i.appendChild(rn());r(i,h),v==null||v.remove()}ie.nodes.end=i,g.before(i)}}),()=>{}},mn),Gs(()=>{})}function Zc(e,t){var n=void 0,r;Ea(()=>{n!==(n=t())&&(r&&(Ve(r),r=null),n&&(r=it(()=>{Ys(()=>n(e))})))})}function Va(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=Va(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Qc(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=Va(e))&&(r&&(r+=" "),r+=t);return r}function eu(e){return typeof e=="object"?Qc(e):e??""}const Si=[...` 	
\r\f \v\uFEFF`];function tu(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var s of Object.keys(n))if(n[s])r=r?r+" "+s:s;else if(r.length)for(var o=s.length,i=0;(i=r.indexOf(s,i))>=0;){var a=i+o;(i===0||Si.includes(r[i-1]))&&(a===r.length||Si.includes(r[a]))?r=(i===0?"":r.substring(0,i))+r.substring(a+1):i=a}}return r===""?null:r}function Ei(e,t=!1){var n=t?" !important;":";",r="";for(var s of Object.keys(e)){var o=e[s];o!=null&&o!==""&&(r+=" "+s+": "+o+n)}return r}function ho(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function nu(e,t){if(t){var n="",r,s;if(Array.isArray(t)?(r=t[0],s=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var o=!1,i=0,a=!1,c=[];r&&c.push(...Object.keys(r).map(ho)),s&&c.push(...Object.keys(s).map(ho));var f=0,d=-1;const x=e.length;for(var g=0;g<x;g++){var v=e[g];if(a?v==="/"&&e[g-1]==="*"&&(a=!1):o?o===v&&(o=!1):v==="/"&&e[g+1]==="*"?a=!0:v==='"'||v==="'"?o=v:v==="("?i++:v===")"&&i--,!a&&o===!1&&i===0){if(v===":"&&d===-1)d=g;else if(v===";"||g===x-1){if(d!==-1){var h=ho(e.substring(f,d).trim());if(!c.includes(h)){v!==";"&&g++;var p=e.substring(f,g).trim();n+=" "+p+";"}}f=g+1,d=-1}}}}return r&&(n+=Ei(r)),s&&(n+=Ei(s,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function It(e,t,n,r,s,o){var i=e[So];if(i!==n||i===void 0){var a=tu(n,r,o);a==null?e.removeAttribute("class"):t?e.className=a:e.setAttribute("class",a),e[So]=n}else if(o&&s!==o)for(var c in o){var f=!!o[c];(s==null||f!==!!s[c])&&e.classList.toggle(c,f)}return o}function po(e,t={},n,r){for(var s in n){var o=n[s];t[s]!==o&&(n[s]==null?e.style.removeProperty(s):e.style.setProperty(s,o,r))}}function Vr(e,t,n,r){var s=e[Eo];if(s!==t){var o=nu(t,r);o==null?e.removeAttribute("style"):e.style.cssText=o,e[Eo]=t}else r&&(Array.isArray(r)?(po(e,n==null?void 0:n[0],r[0]),po(e,n==null?void 0:n[1],r[1],"important")):po(e,n,r));return r}function Ka(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ci(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,Ba(e,!n||"__value"in e))}function Ba(e,t){var n=e.__defaultValue,r=e.multiple,s=r?n??[]:null;if(!(r&&!Ws(s))){var o=e.selectedIndex,i=t&&r?new Set(e.selectedOptions):null;for(var a of e.options){var c=er(a);Ka(a,r?s.includes(c):ba(c,n))}if(t)if(i!==null)for(a of e.options){var f=i.has(a);a.selected!==f&&(a.selected=f)}else e.selectedIndex!==o&&(e.selectedIndex=o)}}function hr(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Ws(t))return Ll();for(var r of e.options)r.selected=t.includes(er(r));return}for(r of e.options){var s=er(r);if(ba(s,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Qn(e){var t=new MutationObserver(n=>{n.every(ru)||("__defaultValue"in e&&Ba(e,!1),"__value"in e&&hr(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Gs(()=>{t.disconnect()})}function Fo(e,t,n=t){var r=new WeakSet,s=!0;Wo(e,"change",o=>{var i=o?"[selected]":":checked",a;if(e.multiple)a=[].map.call(e.querySelectorAll(i),er);else{var c=e.querySelector(i)??e.querySelector("option:not([disabled])");a=c&&er(c)}n(a),e.__value=a,U!==null&&r.add(U)}),Ys(()=>{var o=t();if(e===document.activeElement){var i=U;if(r.has(i))return}if(hr(e,o,s),s&&o===void 0){var a=e.querySelector(":checked");a!==null&&(o=er(a),n(o))}e.__value=o,s=!1})}function er(e){return"__value"in e?e.__value:e.value}function ru(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const Mr=Symbol("class"),Pr=Symbol("style"),Ua=Symbol("is custom element"),Wa=Symbol("is html"),su=Ko?"input":"INPUT",ou=Ko?"option":"OPTION",qa=Ko?"select":"SELECT";function ve(e,t,n,r){var s=Ga(e);s[t]!==(s[t]=n)&&(t==="loading"&&(e[Sl]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Ya(e).has(t)?e[t]=n:e.setAttribute(t,n))}function iu(e,t,n,r,s=!1,o=!1){var i=Ga(e),a=i[Ua],c=!i[Wa],f=t||{},d=e.nodeName===ou,g=e.nodeName===qa;for(var v in t)!(v in n)&&v[0]+v[1]!=="$$"&&(n[v]=null);n.class?n.class=eu(n.class):n[Mr]&&(n.class=null),n[Pr]&&(n.style??(n.style=null));var h=Ya(e);if(e.nodeName===su&&"type"in n&&("value"in n||"__value"in n)){var p=n.type;(p!==f.type||p===void 0&&e.hasAttribute("type"))&&(f.type=p,ve(e,"type",p))}for(const S in n){let $=n[S];if(d&&S==="value"&&$==null){e.value=e.__value="",f[S]=$;continue}if(S==="class"){var x=e.namespaceURI==="http://www.w3.org/1999/xhtml";It(e,x,$,r,t==null?void 0:t[Mr],n[Mr]),f[S]=$,f[Mr]=n[Mr];continue}if(S==="style"){Vr(e,$,t==null?void 0:t[Pr],n[Pr]),f[S]=$,f[Pr]=n[Pr];continue}var k=f[S];if(!($===k&&!($===void 0&&e.hasAttribute(S)))){f[S]=$;var C=S[0]+S[1];if(C!=="$$")if(C==="on"){const T={},G="$$"+S;let J=S.slice(2);var I=Tc(J);if(Ec(J)&&(J=J.slice(0,-7),T.capture=!0),!I&&k){if($!=null)continue;e.removeEventListener(J,f[G],T),f[G]=null}if(I)R(J,e,$),kt([J]);else if($!=null){let j=function(A){f[S].call(this,A)};f[G]=La(J,e,j,T)}}else if(S==="style")ve(e,S,$);else if(S==="autofocus")aa(e,!!$);else if(!a&&(S==="__value"||S==="value"&&$!=null))e.value=e.__value=$;else if(S==="selected"&&d)Ka(e,$);else{var N=S;c||(N=Mc(N));var P=N==="defaultValue"||N==="defaultChecked";if(g&&N==="defaultValue")continue;if($==null&&!a&&!P)if(i[S]=null,N==="value"||N==="checked"){let T=e;const G=t===void 0;if(N==="value"){let J=T.defaultValue;T.removeAttribute(N),T.defaultValue=J,T.value=T.__value=G?J:null}else{let J=T.defaultChecked;T.removeAttribute(N),T.defaultChecked=J,T.checked=G?J:!1}}else e.removeAttribute(S);else P||(a||typeof $!="string")&&h.has(N)?(e[N]=$,N in i&&(i[N]=Ne)):typeof $!="function"&&ve(e,N,$)}}}return f}function Ti(e,t,n=[],r=[],s=[],o,i=!1,a=!1){la(s,n,r,c=>{var f=void 0,d={},g=e.nodeName===qa,v=!1;if(Ea(()=>{var p=t(...c.map(l)),x=iu(e,f,p,o,i,a);if(v&&g){var k=e;"defaultValue"in p&&Ci(k,p.defaultValue),"value"in p&&hr(k,p.value)}for(let I of Object.getOwnPropertySymbols(d))p[I]||Ve(d[I]);for(let I of Object.getOwnPropertySymbols(p)){var C=p[I];I.description===Dl&&(!f||C!==f[I])&&(d[I]&&Ve(d[I]),d[I]=it(()=>Zc(e,()=>C))),x[I]=C}f=x}),g){var h=e;Ys(()=>{var p=f;"defaultValue"in p&&Ci(h,p.defaultValue),hr(h,p.value,!0),Qn(h)})}v=!0})}function Ga(e){return e[Ts]??(e[Ts]={[Ua]:e.nodeName.includes("-"),[Wa]:e.namespaceURI===ea})}var Ni=new Map;function Ya(e){var t=e.getAttribute("is")||e.nodeName,n=Ni.get(t);if(n)return n;Ni.set(t,n=new Set);for(var r,s=e,o=Element.prototype;o!==s;){r=qi(s);for(var i in r)r[i].set&&i!=="innerHTML"&&i!=="textContent"&&i!=="innerText"&&n.add(i);s=jo(s)}return n}function Le(e,t,n=t){var r=new WeakSet;Wo(e,"input",async s=>{var o=s?e.defaultValue:e.value;if(o=_o(e)?go(o):o,n(o),U!==null&&r.add(U),await Sc(),o!==(o=t())){var i=e.selectionStart,a=e.selectionEnd,c=e.value.length;if(e.value=o??"",a!==null){var f=e.value.length;i===a&&a===c&&f>c?(e.selectionStart=f,e.selectionEnd=f):(e.selectionStart=i,e.selectionEnd=Math.min(a,f))}}}),Xt(t)==null&&e.value&&(n(_o(e)?go(e.value):e.value),U!==null&&r.add(U)),Js(()=>{var s=t();if(e===document.activeElement){var o=U;if(r.has(o))return}_o(e)&&s===go(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function au(e,t,n=t){Wo(e,"change",r=>{var s=r?e.defaultChecked:e.checked;n(s)}),Xt(t)==null&&n(e.checked),Js(()=>{var r=t();e.checked=!!r})}function _o(e){var t=e.type;return t==="number"||t==="range"}function go(e){return e===""?null:+e}function mo(e,t){return e===t||(e==null?void 0:e[qt])===t}function Wr(e=Bo(),t,n,r){var s=be.r,o=ie;return Ys(()=>{var i,a;return Js(()=>{i=a,a=[],Xt(()=>{mo(n(...a),e)||(t(e,...a),i&&mo(n(...i),e)&&t(null,...i))})}),()=>{let c=o;for(;c!==s&&c.parent!==null&&c.parent.f&Os;)c=c.parent;const f=()=>{a&&mo(n(...a),e)&&t(null,...a)},d=c.teardown;c.teardown=()=>{f(),d==null||d()}}}),e}function Ja(e=!1){const t=be,n=t.l.u;if(!n)return;let r=()=>Tn(t.s);if(e){let s=0,o={};const i=ur(()=>{let a=!1;const c=t.s;for(const f in c)c[f]!==o[f]&&(o[f]=c[f],a=!0);return a&&s++,s});r=()=>l(i)}n.b.length&&mc(()=>{Mi(t,r),$o(n.b)}),Jt(()=>{const s=Xt(()=>n.m.map(wl));return()=>{for(const o of s)typeof o=="function"&&o()}}),n.a.length&&Jt(()=>{Mi(t,r),$o(n.a)})}function Mi(e,t){if(e.l.s)for(const n of e.l.s)l(n);t()}function lu(e){var t=on(0);return function(){return arguments.length===1?(_(t,l(t)+1),arguments[0]):(l(t),e())}}const cu={get(e,t){if(!e.exclude.includes(t))return l(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=ie;try{$t(e.parent_effect),e.special[t]=Me({get[t](){return e.props[t]}},t,Qi)}finally{$t(r)}}return e.special[t](n),mi(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),mi(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function te(e,t){return new Proxy({props:e,exclude:t,special:{},version:on(0),parent_effect:ie},cu)}const uu={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Tr(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let s=e.props[r];Tr(s)&&(s=s());const o=_n(s,t);if(o&&o.set)return o.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(Tr(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const s=_n(r,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===qt||t===Xi)return!1;for(let n of e.props)if(Tr(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(Tr(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function re(...e){return new Proxy({props:e},uu)}function Me(e,t,n,r){var P;var s=!gr||(n&Pl)!==0,o=(n&zl)!==0,i=(n&Al)!==0,a=r,c=!0,f=void 0,d=()=>i&&s?(f??(f=ur(r)),l(f)):(c&&(c=!1,a=i?Xt(r):r),a);let g;if(o){var v=qt in e||Xi in e;g=((P=_n(e,t))==null?void 0:P.set)??(v&&t in e?S=>e[t]=S:void 0)}var h,p=!1;o?[h,p]=nc(()=>e[t]):h=e[t],h===void 0&&r!==void 0&&(h=d(),g&&(s&&Gl(),g(h)));var x;if(s?x=()=>{var S=e[t];return S===void 0?d():(c=!0,S)}:x=()=>{var S=e[t];return S!==void 0&&(a=void 0),S===void 0?a:S},s&&(n&Qi)===0)return x;if(g){var k=e.$$legacy;return(function(S,$){return arguments.length>0?((!s||!$||k||p)&&g($?x():S),S):x()})}var C=!1,I=((n&Ml)!==0?ur:qo)(()=>(C=!1,x()));o&&l(I);var N=ie;return(function(S,$){if(arguments.length>0){const T=$?l(I):s&&o?ge(S):S;return _(I,T),C=!0,a!==void 0&&(a=T),S}return an&&C||(N.f&ct)!==0?I.v:l(I)})}function xr(e){be===null&&ra(),gr&&be.l!==null?fu(be).m.push(e):Jt(()=>{const t=Xt(e);if(typeof t=="function")return t})}function ti(e){be===null&&ra(),xr(()=>()=>Xt(e))}function fu(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const du="5";var Ui;typeof window<"u"&&((Ui=window.__svelte??(window.__svelte={})).v??(Ui.v=new Set)).add(du);const Nn=()=>window.__IDE_BOOTSTRAP__||{};function vu(e){const{rootPath:t="",session:n=""}=Nn();return`${t}/api/sessions/${encodeURIComponent(n)}/ide${e}`}async function qe(e,t={}){const n=await fetch(vu(e),t),r=await n.json().catch(()=>({}));if(!n.ok){const s=new Error(r.error||"Request failed");throw Object.assign(s,r),s}return r}const st=(e,t)=>`/ssh-connections/${encodeURIComponent(e)}${t}`,he={chat:async(e,t=80)=>{const{rootPath:n=""}=Nn(),r=`${n}/api/sessions/${encodeURIComponent(e)}/ide/chat?limit=${t}`,s=await fetch(r),o=await s.json().catch(()=>({}));if(!s.ok)throw new Error(o.error||"Could not load chat");return o},browse:async(e="")=>{const{rootPath:t=""}=Nn(),n=`${t}/api/ide/browse?path=${encodeURIComponent(e)}`,r=await fetch(n),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not browse folders");return s},sessionAgent:async e=>{const{rootPath:t=""}=Nn(),n=await fetch(`${t}/api/sessions/${encodeURIComponent(e)}/agent`),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Could not read agent settings");return r},setSessionAgent:async(e,t)=>{const{rootPath:n=""}=Nn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/agent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({agent:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not switch agent");return s},setSessionModel:async(e,t)=>{const{rootPath:n=""}=Nn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/model`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change model");return s},setSessionEffort:async(e,t)=>{const{rootPath:n=""}=Nn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/effort`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({effort:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change effort");return s},hostKey:e=>qe(st(e,"/host-key")),trustHost:e=>qe(st(e,"/host-key"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accept:!0})}),listConnections:()=>qe("/ssh-connections"),createConnection:e=>qe("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),deleteConnection:e=>qe(st(e,""),{method:"DELETE"}),connect:(e,t)=>qe(st(e,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t||""})}),status:e=>qe(st(e,"/status?reconnect=1")),listFiles:(e,t)=>qe(st(e,`/files?path=${encodeURIComponent(t)}`)),searchFiles:(e,t,n)=>qe(st(e,`/files/search?path=${encodeURIComponent(t)}&query=${encodeURIComponent(n)}`)),readFile:(e,t)=>qe(st(e,`/file?path=${encodeURIComponent(t)}`)),saveFile:(e,t,n)=>qe(st(e,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t,content:n})}),fs:(e,t)=>qe(st(e,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),git:(e,t)=>qe(st(e,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),focusTerminal:e=>qe(st(e,"/focus-terminal"),{method:"POST"}),getWorkspace:e=>qe(st(e,"/workspace")),saveWorkspace:(e,t)=>qe(st(e,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})};var Zr,Qr,es,ts,ns,rs,ss,os,is,as,ls,cs,us,fs,ds,vs,hs;class hu{constructor(){V(this,Zr,O(ge([])));V(this,Qr,O(""));V(this,es,O("idle"));V(this,ts,O("Ready"));V(this,ns,O("No file open"));V(this,rs,O("."));V(this,ss,O(ge([])));V(this,os,O(ge({})));V(this,is,O(ge({})));V(this,as,O(""));V(this,ls,O(ge([])));V(this,cs,O(""));V(this,us,O(""));V(this,fs,O(""));V(this,ds,O(ge([])));V(this,vs,O(""));V(this,hs,O(!1));Je(this,"restoredKey","");Je(this,"persistTimer",null)}get connections(){return l(u(this,Zr))}set connections(t){_(u(this,Zr),t,!0)}get connectionId(){return l(u(this,Qr))}set connectionId(t){_(u(this,Qr),t,!0)}get connectionState(){return l(u(this,es))}set connectionState(t){_(u(this,es),t,!0)}get statusText(){return l(u(this,ts))}set statusText(t){_(u(this,ts),t,!0)}get detailText(){return l(u(this,ns))}set detailText(t){_(u(this,ns),t,!0)}get path(){return l(u(this,rs))}set path(t){_(u(this,rs),t,!0)}get entries(){return l(u(this,ss))}set entries(t){_(u(this,ss),t,!0)}get expanded(){return l(u(this,os))}set expanded(t){_(u(this,os),t,!0)}get treeChildren(){return l(u(this,is))}set treeChildren(t){_(u(this,is),t,!0)}get filter(){return l(u(this,as))}set filter(t){_(u(this,as),t,!0)}get tabs(){return l(u(this,ls))}set tabs(t){_(u(this,ls),t,!0)}get activeKey(){return l(u(this,cs))}set activeKey(t){_(u(this,cs),t,!0)}get gitOutput(){return l(u(this,us))}set gitOutput(t){_(u(this,us),t,!0)}get gitStatus(){return l(u(this,fs))}set gitStatus(t){_(u(this,fs),t,!0)}get gitBranches(){return l(u(this,ds))}set gitBranches(t){_(u(this,ds),t,!0)}get gitBranch(){return l(u(this,vs))}set gitBranch(t){_(u(this,vs),t,!0)}get needsHostKey(){return l(u(this,hs))}set needsHostKey(t){_(u(this,hs),t,!0)}get connection(){return this.connections.find(t=>t.id===this.connectionId)||null}get activeTab(){return this.tabs.find(t=>t.key===this.activeKey)||null}get visibleEntries(){const t=this.filter.trim().toLowerCase();return t?this.entries.filter(n=>n.name.toLowerCase().includes(t)):this.entries}get dirtyCount(){return this.tabs.filter(t=>t.dirty).length}get gitDirtyCount(){return this.gitStatus.split(`
`).filter(t=>t.trim()&&!t.startsWith("##")).length}setStatus(t,n){this.statusText=t,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const t=await he.listConnections();this.connections=t.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(t){this.setStatus(t.message||"Could not load connections")}}async refreshStatus(){var t,n,r;if(this.connectionId)try{const s=await he.status(this.connectionId);s.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((t=this.connection)==null?void 0:t.label)||"SSH workspace"}`,`SSH terminal: ${s.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(s){this.connectionState="error",this.setStatus(s.message||"Could not check SSH connection")}}async connect(t){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await he.connect(this.connectionId,t);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect"),this.needsHostKey=!!r.needs_host_key}}}async refreshFiles(t){if(!this.connectionId)return;const n=t||this.path||".";try{const r=await he.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async toggleDirectory(t){if(this.expanded[t]){const n={...this.expanded};delete n[t],this.expanded=n;return}if(this.expanded={...this.expanded,[t]:!0},!this.treeChildren[t])try{const n=await he.listFiles(this.connectionId,t);this.treeChildren={...this.treeChildren,[t]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}async openFile(t){if(!this.connectionId)return null;const n=`${this.connectionId}|${t}`,r=this.tabs.find(s=>s.key===n);if(r)return this.activeKey=n,r;try{const s=await he.readFile(this.connectionId,t),o={key:`${this.connectionId}|${s.path}`,path:s.path,content:s.content||"",saved:s.content||"",dirty:!1};return this.tabs=[...this.tabs,o],this.activeKey=o.key,this.setStatus("Opened",o.path),this.remember(),o}catch(s){return this.setStatus(s.message||"Could not open remote file"),null}}updateContent(t,n){this.tabs=this.tabs.map(r=>r.key===t?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(t){var r;const n=this.tabs.find(s=>s.key===t);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(s=>s.key!==t),this.activeKey===t&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const t=this.activeTab;if(t)try{await he.saveFile(this.connectionId,t.path,t.content),this.tabs=this.tabs.map(n=>n.key===t.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${t.path}`,t.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const t=`${this.connectionId}`;if(!t)return;let n=null;try{n=await he.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===t)return;this.restoredKey=t;const r=(n==null?void 0:n.buffers)||{};for(const o of((n==null?void 0:n.tabs)||[]).slice(0,12)){const i=await this.openFile(o);i&&Object.prototype.hasOwnProperty.call(r,o)&&this.updateContent(i.key,r[o])}const s=this.tabs.find(o=>o.path===(n==null?void 0:n.active_path));s&&(this.activeKey=s.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const t={};for(const r of this.tabs)r.dirty&&(t[r.path]=r.content);try{await he.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:t})}catch{}}async runGit(t,n={}){try{const r=await he.git(this.connectionId,{action:t,path:this.path||".",...n});return this.gitOutput=r.output||r.status||"",this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",r}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}Zr=new WeakMap,Qr=new WeakMap,es=new WeakMap,ts=new WeakMap,ns=new WeakMap,rs=new WeakMap,ss=new WeakMap,os=new WeakMap,is=new WeakMap,as=new WeakMap,ls=new WeakMap,cs=new WeakMap,us=new WeakMap,fs=new WeakMap,ds=new WeakMap,vs=new WeakMap,hs=new WeakMap;const b=new hu;Ql();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const pu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const _u=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Pi=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var gu=Ha("<svg><!><!></svg>");function se(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]),r=te(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);et(t,!1);let s=Me(t,"name",8,void 0),o=Me(t,"color",8,"currentColor"),i=Me(t,"size",8,24),a=Me(t,"strokeWidth",8,2),c=Me(t,"absoluteStrokeWidth",8,!1),f=Me(t,"iconNode",24,()=>[]);Ja();var d=gu();Ti(d,(h,p,x)=>({...pu,...h,...r,width:i(),height:i(),stroke:o(),"stroke-width":p,class:x}),[()=>_u(r)?void 0:{"aria-hidden":"true"},()=>(Tn(c()),Tn(a()),Tn(i()),Xt(()=>c()?Number(a())*24/Number(i()):a())),()=>(Tn(Pi),Tn(s()),Tn(n),Xt(()=>Pi("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var g=w(d);He(g,1,f,qc,(h,p)=>{var x=at(()=>$l(l(p),2));let k=()=>l(x)[0],C=()=>l(x)[1];var I=q(),N=D(I);Xc(N,k,!0,(P,S)=>{Ti(P,()=>({...C()}))}),y(h,I)});var v=m(g);ne(v,t,"default",{}),y(e,d),tt()}function mu(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];se(e,re({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function bo(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 8V4H8"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2"}],["path",{d:"M2 14h2"}],["path",{d:"M20 14h2"}],["path",{d:"M15 13v2"}],["path",{d:"M9 13v2"}]];se(e,re({name:"bot"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function yo(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];se(e,re({name:"check"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Kr(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];se(e,re({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function bu(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];se(e,re({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function zi(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];se(e,re({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function yu(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];se(e,re({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function xu(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];se(e,re({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function wu(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];se(e,re({name:"circle-user"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function $u(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];se(e,re({name:"circle"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function ku(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];se(e,re({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Su(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];se(e,re({name:"corner-left-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Eu(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];se(e,re({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Ai(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 16-3 3 3 3"}],["path",{d:"m9 22 3-3-3-3"}]];se(e,re({name:"file-code-corner"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Cu(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];se(e,re({name:"file-diff"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Tu(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 14V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M14 18h6"}]];se(e,re({name:"file-minus-corner"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Ii(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.35 22H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v5.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M14 19h6"}],["path",{d:"M17 16v6"}]];se(e,re({name:"file-plus-corner"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Nu(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];se(e,re({name:"file-plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function ni(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];se(e,re({name:"file"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Mu(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];se(e,re({name:"files"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function xo(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];se(e,re({name:"folder-open"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Pu(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];se(e,re({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function zu(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];se(e,re({name:"folder"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Au(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 3v12"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"}],["path",{d:"M15 6a9 9 0 0 0-9 9"}],["path",{d:"M18 15v6"}],["path",{d:"M21 18h-6"}]];se(e,re({name:"git-branch-plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Oi(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];se(e,re({name:"git-branch"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Iu(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 3v6"}],["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M12 15v6"}]];se(e,re({name:"git-commit-vertical"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Ou(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 16h.01"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{d:"M21.946 12.013H2.054"}],["path",{d:"M6 16h.01"}]];se(e,re({name:"hard-drive"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Ru(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];se(e,re({name:"link-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Zs(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];se(e,re({name:"loader"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Ri(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];se(e,re({name:"message-square"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Du(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];se(e,re({name:"monitor-smartphone"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Fu(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];se(e,re({name:"panel-bottom"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Lu(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];se(e,re({name:"panel-left"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function ju(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];se(e,re({name:"plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Xa(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];se(e,re({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function ri(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];se(e,re({name:"search"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Di(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];se(e,re({name:"server"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Hu(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];se(e,re({name:"shield-alert"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Fi(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];se(e,re({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Vu(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];se(e,re({name:"square"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Ku(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];se(e,re({name:"trash-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}function Vs(e,t){const n=te(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];se(e,re({name:"x"},()=>n,{get iconNode(){return r},children:(s,o)=>{var i=q(),a=D(i);ne(a,t,"default",{}),y(s,i)},$$slots:{default:!0}}))}var Bu=z('<span class="w-[14px] shrink-0"></span>'),Uu=Ha('<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.5 3.5h4l1.2 1.4h7.8v7.6H1.5z" fill="#c09553"></path></svg>'),Wu=z('<div role="treeitem" tabindex="0"><!> <span class="flex shrink-0 items-center"><!></span> <span class="flex-1 truncate text-vs-fg"> </span> <span class="hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Rename"><span class="text-[11px] leading-none">✎</span></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Delete"><span class="text-[11px] leading-none">🗑</span></button></span></div> <!>',1);function Za(e,t){et(t,!0);const n=at(()=>t.dir==="."?t.entry.name:`${t.dir}/${t.entry.name}`),r=at(()=>!!b.expanded[l(n)]),s=at(()=>b.treeChildren[l(n)]||[]),o=at(()=>{var A;return((A=b.activeTab)==null?void 0:A.path)===l(n)});async function i(){t.entry.is_dir?await b.toggleDirectory(l(n)):await b.openFile(l(n))}async function a(A){if(A.stopPropagation(),!!confirm(`Delete ${l(n)}? Folders must already be empty.`))try{await he.fs(b.connectionId,{action:"delete",path:l(n)}),await b.refreshFiles()}catch(K){b.setStatus(K.message||"Could not delete")}}async function c(A){A.stopPropagation();const K=prompt("Rename to (relative path):",l(n));if(!(!K||K===l(n)))try{await he.fs(b.connectionId,{action:"rename",path:l(n),new_path:K}),await b.refreshFiles()}catch(F){b.setStatus(F.message||"Could not rename")}}var f=Wu(),d=D(f);let g;var v=w(d);{var h=A=>{var K=q(),F=D(K);{var Y=fe=>{Kr(fe,{size:14,class:"shrink-0 text-vs-muted"})},pe=fe=>{bu(fe,{size:14,class:"shrink-0 text-vs-muted"})};H(F,fe=>{l(r)?fe(Y):fe(pe,-1)})}y(A,K)},p=A=>{var K=Bu();y(A,K)};H(v,A=>{t.entry.is_dir?A(h):A(p,-1)})}var x=m(v,2),k=w(x);{var C=A=>{var K=Uu();y(A,K)},I=A=>{Ru(A,{size:14,class:"text-vs-muted"})},N=A=>{ni(A,{size:14,class:"text-vs-blue"})};H(k,A=>{t.entry.is_dir?A(C):t.entry.is_symlink?A(I,1):A(N,-1)})}var P=m(x,2),S=ae(P,!0),$=m(P,2),T=w($),G=m(T,2),J=m(d,2);{var j=A=>{var K=q(),F=D(K);He(F,17,()=>l(s),Y=>Y.name,(Y,pe)=>{{let fe=at(()=>t.depth+1);Za(Y,{get entry(){return l(pe)},get dir(){return l(n)},get depth(){return l(fe)}})}}),y(A,K)};H(J,A=>{t.entry.is_dir&&l(r)&&A(j)})}X(()=>{g=It(d,1,"group flex cursor-pointer items-center gap-1 py-[2px] pr-1 text-[13px] hover:bg-vs-hover",null,g,{"bg-vs-active":l(o)}),Vr(d,`padding-left: ${8+t.depth*12}px`),ve(d,"aria-expanded",t.entry.is_dir?l(r):void 0),ve(d,"aria-selected",l(o)),ve(d,"title",l(n)),Z(S,t.entry.name),ve(T,"aria-label",`Rename ${t.entry.name??""}`),ve(G,"aria-label",`Delete ${t.entry.name??""}`)}),R("click",d,i),R("keydown",d,A=>{(A.key==="Enter"||A.key===" ")&&(A.preventDefault(),i())}),R("click",T,c),R("click",G,a),y(e,f),tt()}kt(["click","keydown"]);var qu=z('<form class="px-2 pb-1"><input class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"/></form>'),Gu=z('<p class="px-4 py-2 text-xs text-vs-muted">No folder opened.</p>'),Yu=z('<p class="px-4 py-2 text-xs text-vs-muted">No files here</p>'),Ju=z('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase"><span class="flex-1 truncate">Explorer</span></div> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase"><!> <span class="flex-1 truncate"> </span> <span class="flex opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"><!></button></span></div> <!> <input class="mx-2 mb-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none focus:border-vs-accent" placeholder="Filter files…"/> <div class="min-h-0 flex-1 overflow-y-auto pb-2"><!></div></div>');function Xu(e,t){et(t,!0);let n=O(""),r=O("");const s=(j,A)=>j==="."?A:`${j}/${A}`;async function o(j){j.preventDefault();const A=l(r).trim();if(A)try{await he.fs(b.connectionId,{action:l(n)==="dir"?"create_dir":"create_file",path:s(b.path,A)}),_(n,""),_(r,""),await b.refreshFiles()}catch(K){b.setStatus(K.message||"Could not create")}}const i=at(()=>{var j,A;return(((j=b.connection)==null?void 0:j.workspace_root)||"").split("/").filter(Boolean).pop()||((A=b.connection)==null?void 0:A.label)||"WORKSPACE"});var a=Ju(),c=m(w(a),2),f=w(c);Kr(f,{size:14,class:"shrink-0 text-vs-muted"});var d=m(f,2),g=ae(d,!0),v=m(d,2),h=w(v),p=w(h);Nu(p,{size:14});var x=m(h,2),k=w(x);Pu(k,{size:14});var C=m(x,2),I=w(C);Xa(I,{size:13});var N=m(c,2);{var P=j=>{var A=qu(),K=w(A);aa(K,!0),X(()=>ve(K,"placeholder",l(n)==="dir"?"New folder name":"New file name")),vr("submit",A,o),R("keydown",K,F=>{F.key==="Escape"&&_(n,"")}),vr("blur",K,()=>{l(r).trim()||_(n,"")}),Le(K,()=>l(r),F=>_(r,F)),y(j,A)};H(N,j=>{l(n)&&j(P)})}var S=m(N,2),$=m(S,2),T=w($);{var G=j=>{var A=Gu();y(j,A)},J=j=>{var A=q(),K=D(A);He(K,17,()=>b.visibleEntries,F=>F.name,(F,Y)=>{Za(F,{get entry(){return l(Y)},get dir(){return b.path},depth:0})},F=>{var Y=Yu();y(F,Y)}),y(j,A)};H(T,j=>{b.connectionId?j(J,-1):j(G)})}X(()=>{var j;ve(d,"title",(j=b.connection)==null?void 0:j.workspace_root),Z(g,l(i))}),R("click",h,()=>{_(n,"file"),_(r,"")}),R("click",x,()=>{_(n,"dir"),_(r,"")}),R("click",C,()=>b.refreshFiles()),Le(S,()=>b.filter,j=>b.filter=j),y(e,a),tt()}kt(["click","keydown"]);var Zu=z('<div class="branch svelte-1skdisl">On <strong> </strong></div>'),Qu=z('<li class="svelte-1skdisl"><label class="svelte-1skdisl"><input type="checkbox"/> <span> </span> <span class="file svelte-1skdisl"> </span></label></li>'),ef=z('<ul class="changes svelte-1skdisl"></ul> <div class="row svelte-1skdisl"><button class="svelte-1skdisl"><!> </button> <button class="svelte-1skdisl"><!> Unstage</button></div>',1),tf=z("<option> </option>"),nf=z('<select class="svelte-1skdisl"></select>'),rf=z('<div class="git svelte-1skdisl"><div class="row svelte-1skdisl"><button class="svelte-1skdisl"><!> Status</button> <button class="svelte-1skdisl"><!> Diff</button> <button class="svelte-1skdisl"><!> Stage all</button></div> <!> <!> <!> <div class="row svelte-1skdisl"><input placeholder="New branch…" class="svelte-1skdisl"/> <button class="svelte-1skdisl"><!> Create</button></div> <div class="row svelte-1skdisl"><input placeholder="Commit message…" class="svelte-1skdisl"/> <button class="svelte-1skdisl"><!> Commit</button></div> <pre class="output svelte-1skdisl"> </pre></div>');function sf(e,t){et(t,!0);let n=O(""),r=O(""),s=O(ge({}));const o=at(()=>(b.gitStatus||"").split(`
`).filter(Q=>Q&&!Q.startsWith("##")).map(Q=>({code:Q.slice(0,2).trim()||"??",path:Q.slice(3).trim()})).filter(Q=>Q.path)),i=at(()=>l(o).filter(Q=>l(s)[Q.path]).map(Q=>Q.path));async function a(Q){l(i).length&&(await b.runGit(Q,{files:l(i)}),_(s,{},!0))}async function c(){if(!l(n).trim())return;await b.runGit("commit",{message:l(n).trim()})&&_(n,"")}async function f(){if(!l(r).trim())return;await b.runGit("create_branch",{branch:l(r).trim()})&&_(r,"")}var d=rf(),g=w(d),v=w(g),h=w(v);Xa(h,{size:13});var p=m(v,2),x=w(p);Cu(x,{size:13});var k=m(p,2),C=w(k);Ii(C,{size:13});var I=m(g,2);{var N=Q=>{var ue=Zu(),ye=m(w(ue)),Ce=ae(ye,!0);X(()=>Z(Ce,b.gitBranch)),y(Q,ue)};H(I,Q=>{b.gitBranch&&Q(N)})}var P=m(I,2);{var S=Q=>{var ue=ef(),ye=D(ue);He(ye,21,()=>l(o),ln=>ln.path,(ln,Et)=>{var yn=Qu(),xn=w(yn),wn=w(xn),cn=m(wn,2);let un;var Kn=ae(cn,!0),$n=m(cn,2),kn=ae($n,!0);X(()=>{un=It(cn,1,"code svelte-1skdisl",null,un,{staged:l(Et).code[0]!=="?"&&l(Et).code[0]!==" "}),Z(Kn,l(Et).code),ve($n,"title",l(Et).path),Z(kn,l(Et).path)}),au(wn,()=>l(s)[l(Et).path],Bn=>l(s)[l(Et).path]=Bn),y(ln,yn)});var Ce=m(ye,2),Ke=w(Ce),St=w(Ke);Ii(St,{size:13});var Rt=m(St),ut=m(Ke,2),bn=w(ut);Tu(bn,{size:13}),X(()=>{Ke.disabled=!l(i).length,Z(Rt,` Stage (${l(i).length??""})`),ut.disabled=!l(i).length}),R("click",Ke,()=>a("stage")),R("click",ut,()=>a("unstage")),y(Q,ue)};H(P,Q=>{l(o).length&&Q(S)})}var $=m(P,2);{var T=Q=>{var ue=nf();He(ue,20,()=>b.gitBranches,Ce=>Ce,(Ce,Ke)=>{var St=tf(),Rt=ae(St,!0),ut={};X(()=>{Z(Rt,Ke),ut!==(ut=Ke)&&(St.value=(St.__value=ut)??"")}),y(Ce,St)});var ye;Qn(ue),X(()=>{ye!==(ye=b.gitBranch)&&(ue.value=(ue.__value=ye)??"",hr(ue,ye))}),R("change",ue,Ce=>b.runGit("switch",{branch:Ce.currentTarget.value})),y(Q,ue)};H($,Q=>{b.gitBranches.length&&Q(T)})}var G=m($,2),J=w(G),j=m(J,2),A=w(j);Au(A,{size:13});var K=m(G,2),F=w(K),Y=m(F,2),pe=w(Y);Iu(pe,{size:13});var fe=m(K,2),Ee=ae(fe,!0);X(()=>Z(Ee,b.gitOutput||"No git output yet.")),R("click",v,()=>b.runGit("status")),R("click",p,()=>b.runGit("diff")),R("click",k,()=>b.runGit("stage",{files:["."]})),Le(J,()=>l(r),Q=>_(r,Q)),R("click",j,f),Le(F,()=>l(n),Q=>_(n,Q)),R("click",Y,c),y(e,d),tt()}kt(["click","change"]);const of="modulepreload",af=function(e,t){return new URL(e,t).href},Li={},As=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let i=function(d){return Promise.all(d.map(g=>Promise.resolve(g).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};const a=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),f=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=i(n.map(d=>{if(d=af(d,r),d in Li)return;Li[d]=!0;const g=d.endsWith(".css"),v=g?'[rel="stylesheet"]':"";if(!!r)for(let x=a.length-1;x>=0;x--){const k=a[x];if(k.href===d&&(!g||k.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${d}"]${v}`))return;const p=document.createElement("link");if(p.rel=g?"stylesheet":of,g||(p.as="script"),p.crossOrigin="",p.href=d,f&&p.setAttribute("nonce",f),document.head.appendChild(p),g)return new Promise((x,k)=>{p.addEventListener("load",x),p.addEventListener("error",()=>k(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(i){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=i,window.dispatchEvent(a),!a.defaultPrevented)throw i}return s.then(i=>{for(const a of i||[])a.status==="rejected"&&o(a.reason);return t().catch(o)})},Fr={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},lf={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function cf(e){var n;const t=(e||"").split("/").pop()||"";return t.toLowerCase()==="dockerfile"?"dockerfile":t.toLowerCase()==="makefile"?"shell":lf[(n=t.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var uf=z('<div class="editor svelte-1h8xysy"></div>');function ff(e,t){et(t,!0);let n,r=null,s=null,o="",i=!1;xr(async()=>{s=await As(()=>import("./ide-monaco.js").then(c=>c.a),__vite__mapDeps([0,1]),import.meta.url),s.editor.defineTheme("monokai",Fr),r=s.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{i||!o||b.updateContent(o,r.getValue())}),r.addCommand(s.KeyMod.CtrlCmd|s.KeyCode.KeyS,()=>b.saveActive())}),ti(()=>r==null?void 0:r.dispose()),Jt(()=>{const c=b.activeTab;if(!(!r||!s)){if(!c){i=!0,r.setValue(""),o="",i=!1;return}if(c.key!==o){i=!0;const f=s.editor.createModel(c.content,cf(c.path)),d=r.getModel();r.setModel(f),d==null||d.dispose(),o=c.key,i=!1}else r.getValue()!==c.content&&(i=!0,r.setValue(c.content),i=!1)}});var a=uf();Wr(a,c=>n=c,()=>n),y(e,a),tt()}var vn=lu(()=>b),df=z('<span class="h-2 w-2 rounded-full bg-vs-fg group-hover:hidden"></span> <!>',1),vf=z('<div><button class="flex items-center gap-1.5 py-2 pr-1 pl-3" role="tab"><!> <span class="whitespace-nowrap"> </span></button> <button class="mr-1.5 flex h-5 w-5 items-center justify-center rounded-sm hover:bg-vs-line"><!></button></div>'),hf=z('<div class="px-3 py-2 text-xs text-vs-muted">Open a file from the Explorer</div>'),pf=z('<div class="flex min-h-[35px] items-stretch overflow-x-auto bg-vs-tabinactive" role="tablist"></div>');function _f(e,t){et(t,!1);const n=s=>s.split("/").pop();Ja();var r=pf();He(r,5,()=>vn().tabs,s=>s.key,(s,o)=>{var i=vf();let a;var c=w(i),f=w(c);ni(f,{size:14,class:"shrink-0 text-vs-blue"});var d=m(f,2),g=ae(d,!0),v=m(c,2),h=w(v);{var p=k=>{var C=df(),I=m(D(C),2);Vs(I,{size:14,class:"hidden group-hover:block"}),y(k,C)},x=k=>{Vs(k,{size:14,class:"opacity-0 group-hover:opacity-100"})};H(h,k=>{l(o).dirty?k(p):k(x,-1)})}X((k,C)=>{a=It(i,1,"group flex items-center border-r border-vs-bg text-[13px]",null,a,{"bg-vs-tabactive":l(o).key===vn().activeKey,"text-vs-bright":l(o).key===vn().activeKey,"text-vs-muted":l(o).key!==vn().activeKey}),ve(c,"aria-selected",l(o).key===vn().activeKey),ve(c,"title",l(o).path),Z(g,k),ve(v,"title",l(o).dirty?"Unsaved changes — close":"Close"),ve(v,"aria-label",`Close ${C??""}`)},[()=>n(l(o).path),()=>n(l(o).path)]),R("click",c,()=>vn(vn().activeKey=l(o).key)),R("click",v,()=>vn().closeTab(l(o).key)),y(s,i)},s=>{var o=hf();y(s,o)}),y(e,r),tt()}kt(["click"]);var gf=z("<option> </option>"),mf=z('<p class="rounded-sm bg-vs-red/10 px-2 py-1 text-xs text-vs-red"> </p>'),bf=z('<div class="flex flex-col gap-1"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-vs-blue"><!> </span> <div class="text-[13px] leading-relaxed whitespace-pre-wrap text-vs-fg"> </div></div>'),yf=z('<div class="self-end rounded-md border border-vs-line bg-vs-input px-2.5 py-1.5 text-[13px] whitespace-pre-wrap text-vs-fg max-w-[92%]"> </div>'),xf=z(`<div class="m-auto flex max-w-[240px] flex-col items-center gap-2 text-center"><!> <p class="text-xs leading-relaxed text-vs-muted">Ask about the file you have open. The prompt goes to the selected session,
            and the reply appears here.</p></div>`),ji=z('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-vs-fg hover:bg-vs-hover"><span class="w-3"><!></span> </button>'),wf=z('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[150px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"></div>'),$f=z('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-vs-fg hover:bg-vs-hover"><span class="w-3"><!></span> <span class="truncate"> </span></button>'),kf=z('<div class="absolute bottom-full left-0 z-20 mb-1 max-h-[260px] min-w-[190px] overflow-y-auto rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"></div>'),Sf=z('<div class="relative" data-menu=""><button class="flex max-w-[120px] items-center gap-1 rounded-sm px-1.5 py-0.5 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Model"><span class="truncate"> </span> <!></button> <!></div>'),Ef=z('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[130px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"></div>'),Cf=z('<div class="relative" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Reasoning effort"> <!></button> <!></div>'),Tf=z('<div class="flex h-full min-h-0 flex-col bg-vs-panel"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1.5"><!> <select class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-1.5 py-0.5 text-xs outline-none focus:border-vs-accent" title="Agent session that answers"></select></div> <div class="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto px-3 py-3"><!> <!></div> <div class="border-t border-vs-border p-2"><div class="rounded-md border border-vs-line bg-vs-input focus-within:border-vs-accent"><textarea rows="2" class="max-h-[200px] w-full resize-none bg-transparent px-2.5 py-2 text-[13px] text-vs-fg outline-none placeholder:text-vs-muted" placeholder="Ask about this workspace…"></textarea> <div class="flex items-center gap-1 px-1.5 pb-1.5 text-[11px]"><div class="relative" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Agent"> <!></button> <!></div> <!> <!> <!> <button class="ml-auto flex h-6 w-6 items-center justify-center rounded-md bg-vs-status text-white disabled:opacity-40" title="Send (Enter)" aria-label="Send"><!></button></div></div></div></div>');function Nf(e,t){et(t,!0);let n=Me(t,"sessions",19,()=>[]),r=Me(t,"session",3,""),s=Me(t,"rootPath",3,""),o=O(""),i=O(ge(r()||n()[0]||"")),a=O(!1),c=O(ge([])),f=O(""),d=O(null),g=O(null),v=null,h=O(ge({agent:"codex",available:[],model:"",effort:"",models:[],efforts:[]})),p=O(""),x=O("");const k=at(()=>(l(h).models.find(M=>M[0]===l(h).model)||[])[1]||l(h).model||"default");async function C(){if(l(i))try{_(h,{...l(h),...await he.sessionAgent(l(i))},!0)}catch{}}async function I(){if(l(i))try{const B=(await he.chat(l(i))).messages||[],oe=B.length!==l(c).length;_(c,B,!0),_(f,""),oe&&queueMicrotask(N)}catch(M){_(f,M.message||"Could not load chat",!0)}}function N(){l(d)&&(l(d).scrollTop=l(d).scrollHeight)}Jt(()=>{const M=l(i);_(c,[],!0),v&&clearInterval(v),M&&(I(),C(),v=setInterval(I,3e3))}),ti(()=>{v&&clearInterval(v)});async function P(M){if(_(p,""),M!==l(h).agent){_(x,"agent");try{await he.setSessionAgent(l(i),M),await C(),b.setStatus(`Switched to ${M}`)}catch(B){b.setStatus(B.message||"Could not switch agent")}finally{_(x,"")}}}async function S(M){if(_(p,""),M!==l(h).model){_(x,"model");try{await he.setSessionModel(l(i),M),_(h,{...l(h),model:M},!0),b.setStatus(`Model set to ${M}`)}catch(B){b.setStatus(B.message||"Could not change model")}finally{_(x,"")}}}async function $(M){if(_(p,""),M!==l(h).effort){_(x,"effort");try{await he.setSessionEffort(l(i),M),_(h,{...l(h),effort:M},!0),b.setStatus(`Reasoning effort set to ${M}`)}catch(B){b.setStatus(B.message||"Could not change effort")}finally{_(x,"")}}}function T(){const M=b.connection||{},B=b.activeTab,oe=B?B.path:b.path||".",xe=B?`
Active file contents (first 12,000 characters):
${B.content.slice(0,12e3)}`:"";return`[Remote IDE context]
${M.kind==="local"?`Local workspace: ${M.workspace_root||"."}`:`SSH target: ${M.username||"?"}@${M.host||"?"}`}
Path: ${oe}${xe}

${l(o).trim()}`}async function G(){const M=l(o).trim();if(!M||!l(i)||l(a))return;const B=T();_(a,!0);try{const oe=await fetch(`${s()}/api/sessions/${encodeURIComponent(l(i))}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:B})}),xe=await oe.json().catch(()=>({}));if(!oe.ok)throw new Error(xe.error||"Could not send");_(o,""),l(g)&&(l(g).style.height="auto"),_(c,[...l(c),{role:"user",text:M,ts:Date.now()/1e3,_local:!0}],!0),queueMicrotask(N),setTimeout(I,1200)}catch(oe){b.setStatus(oe.message||"Could not send prompt")}finally{_(a,!1)}}function J(M){M.key==="Enter"&&!M.shiftKey&&(M.preventDefault(),G())}function j(M){const B=M.currentTarget;B.style.height="auto",B.style.height=`${Math.min(B.scrollHeight,200)}px`}function A(M){const B=M.full||M.text||"",oe=`

`;if(B.startsWith("[Remote IDE context]")||B.startsWith("[Remote SSH IDE context]")){const xe=B.lastIndexOf(oe);if(xe!==-1)return B.slice(xe+oe.length)}return B}var K=Tf();vr("click",js,M=>{var B,oe;(oe=(B=M.target).closest)!=null&&oe.call(B,"[data-menu]")||_(p,"")});var F=w(K),Y=w(F);bo(Y,{size:13,class:"shrink-0 text-vs-blue"});var pe=m(Y,2);He(pe,20,n,M=>M,(M,B)=>{var oe=gf(),xe=ae(oe,!0),Te={};X(()=>{Z(xe,B),Te!==(Te=B)&&(oe.value=(oe.__value=Te)??"")}),y(M,oe)}),Qn(pe);var fe=m(F,2),Ee=w(fe);{var Q=M=>{var B=mf(),oe=ae(B,!0);X(()=>Z(oe,l(f))),y(M,B)};H(Ee,M=>{l(f)&&M(Q)})}var ue=m(Ee,2);He(ue,19,()=>l(c),(M,B)=>M.ts+":"+B,(M,B)=>{var oe=q(),xe=D(oe);{var Te=Re=>{var Ge=bf(),Be=w(Ge),De=w(Be);bo(De,{size:11});var pt=m(De),Ct=m(Be,2),Dt=ae(Ct,!0);X(Zt=>{Z(pt,` ${l(h).agent==="claude"?"Claude":"Codex"}`),Z(Dt,Zt)},[()=>A(l(B))]),y(Re,Ge)},nt=Re=>{var Ge=yf(),Be=ae(Ge,!0);X(De=>Z(Be,De),[()=>A(l(B))]),y(Re,Ge)};H(xe,Re=>{l(B).role==="assistant"?Re(Te):Re(nt,-1)})}y(M,oe)},M=>{var B=q(),oe=D(B);{var xe=Te=>{var nt=xf(),Re=w(nt);bo(Re,{size:28,strokeWidth:1.3,class:"text-vs-line"}),y(Te,nt)};H(oe,Te=>{l(f)||Te(xe)})}y(M,B)}),Wr(fe,M=>_(d,M),()=>l(d));var ye=m(fe,2),Ce=w(ye),Ke=w(Ce);Wr(Ke,M=>_(g,M),()=>l(g));var St=m(Ke,2),Rt=w(St),ut=w(Rt),bn=w(ut),ln=m(bn);Kr(ln,{size:11});var Et=m(ut,2);{var yn=M=>{var B=wf();He(B,20,()=>l(h).available.length?l(h).available:["codex"],oe=>oe,(oe,xe)=>{var Te=ji(),nt=w(Te),Re=w(nt);{var Ge=De=>{yo(De,{size:11})};H(Re,De=>{xe===l(h).agent&&De(Ge)})}var Be=m(nt);X(()=>Z(Be,` ${xe==="claude"?"Claude":"Codex"}`)),R("click",Te,()=>P(xe)),y(oe,Te)}),y(M,B)};H(Et,M=>{l(p)==="agent"&&M(yn)})}var xn=m(Rt,2);{var wn=M=>{var B=Sf(),oe=w(B),xe=w(oe),Te=ae(xe,!0),nt=m(xe,2);Kr(nt,{size:11,class:"shrink-0"});var Re=m(oe,2);{var Ge=Be=>{var De=kf();He(De,21,()=>l(h).models,pt=>pt[0],(pt,Ct)=>{var Dt=$f(),Zt=w(Dt),wr=w(Zt);{var Un=$r=>{yo($r,{size:11})};H(wr,$r=>{l(Ct)[0]===l(h).model&&$r(Un)})}var Sn=m(Zt,2),ys=ae(Sn,!0);X(()=>Z(ys,l(Ct)[1])),R("click",Dt,()=>S(l(Ct)[0])),y(pt,Dt)}),y(Be,De)};H(Re,Be=>{l(p)==="model"&&Be(Ge)})}X(()=>Z(Te,l(k))),R("click",oe,()=>_(p,l(p)==="model"?"":"model",!0)),y(M,B)};H(xn,M=>{l(h).models.length&&M(wn)})}var cn=m(xn,2);{var un=M=>{var B=Cf(),oe=w(B),xe=w(oe),Te=m(xe);Kr(Te,{size:11});var nt=m(oe,2);{var Re=Ge=>{var Be=Ef();He(Be,20,()=>l(h).efforts,De=>De,(De,pt)=>{var Ct=ji(),Dt=w(Ct),Zt=w(Dt);{var wr=Sn=>{yo(Sn,{size:11})};H(Zt,Sn=>{pt===l(h).effort&&Sn(wr)})}var Un=m(Dt);X(()=>Z(Un,` ${pt??""}`)),R("click",Ct,()=>$(pt)),y(De,Ct)}),y(Ge,Be)};H(nt,Ge=>{l(p)==="effort"&&Ge(Re)})}X(()=>Z(xe,`${(l(h).effort||"effort")??""} `)),R("click",oe,()=>_(p,l(p)==="effort"?"":"effort",!0)),y(M,B)};H(cn,M=>{l(h).efforts.length&&M(un)})}var Kn=m(cn,2);{var $n=M=>{Zs(M,{size:11,class:"animate-spin text-vs-muted"})};H(Kn,M=>{l(x)&&M($n)})}var kn=m(Kn,2),Bn=w(kn);{var Qs=M=>{Vu(M,{size:11})},bs=M=>{mu(M,{size:13})};H(Bn,M=>{l(a)?M(Qs):M(bs,-1)})}X(M=>{Z(bn,`${l(h).agent==="claude"?"Claude":"Codex"} `),kn.disabled=M},[()=>l(a)||!l(o).trim()]),Fo(pe,()=>l(i),M=>_(i,M)),R("keydown",Ke,J),R("input",Ke,j),Le(Ke,()=>l(o),M=>_(o,M)),R("click",ut,()=>_(p,l(p)==="agent"?"":"agent",!0)),R("click",kn,G),y(e,K),tt()}kt(["keydown","input","click"]);var Mf=z('<span class="hint svelte-e2eyom">searching…</span>'),Pf=z('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),zf=z('<ul class="results svelte-e2eyom"></ul>'),Af=z('<p class="empty svelte-e2eyom"> </p>'),If=z('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function Of(e,t){et(t,!0);let n=O(""),r=O(ge([])),s=O(0),o=O(!1),i=O(null),a=null;Jt(()=>{l(i)&&l(i).focus()}),Jt(()=>{const $=l(n).trim();if(a&&clearTimeout(a),!$){_(r,[],!0);return}a=setTimeout(async()=>{_(o,!0);try{const T=await he.searchFiles(b.connectionId,b.path||".",$);_(r,T.matches||[],!0),_(s,0)}catch{_(r,[],!0)}finally{_(o,!1)}},180)});async function c($){var G;if(!$)return;const T=b.path&&b.path!=="."?`${b.path}/`:"";await b.openFile(`${T}${$.path}`),(G=t.onclose)==null||G.call(t)}function f($){var T;$.key==="Escape"?($.preventDefault(),(T=t.onclose)==null||T.call(t)):$.key==="ArrowDown"?($.preventDefault(),_(s,Math.min(l(s)+1,l(r).length-1),!0)):$.key==="ArrowUp"?($.preventDefault(),_(s,Math.max(l(s)-1,0),!0)):$.key==="Enter"&&($.preventDefault(),c(l(r)[l(s)]))}var d=If(),g=D(d),v=m(g,2),h=w(v),p=w(h);ri(p,{size:14});var x=m(p,2);Wr(x,$=>_(i,$),()=>l(i));var k=m(x,2);{var C=$=>{var T=Mf();y($,T)};H(k,$=>{l(o)&&$(C)})}var I=m(h,2);{var N=$=>{var T=zf();He(T,23,()=>l(r),G=>G.path,(G,J,j)=>{var A=Pf(),K=w(A);let F;var Y=w(K),pe=ae(Y,!0),fe=m(Y,2),Ee=ae(fe,!0),Q=m(fe,2);{var ue=ye=>{ku(ye,{size:12})};H(Q,ye=>{l(j)===l(s)&&ye(ue)})}X(()=>{F=It(K,1,"svelte-e2eyom",null,F,{active:l(j)===l(s)}),Z(pe,l(J).name),Z(Ee,l(J).path)}),R("click",K,()=>c(l(J))),y(G,A)}),y($,T)},P=$=>{var T=Af(),G=ae(T);X(J=>Z(G,`No files match “${J??""}”.`),[()=>l(n).trim()]),y($,T)},S=at(()=>l(n).trim()&&!l(o));H(I,$=>{l(r).length?$(N):l(S)&&$(P,1)})}R("click",g,()=>{var $;return($=t.onclose)==null?void 0:$.call(t)}),R("keydown",g,$=>{var T;return $.key==="Escape"&&((T=t.onclose)==null?void 0:T.call(t))}),R("keydown",x,f),Le(x,()=>l(n),$=>_(n,$)),y(e,d),tt()}kt(["click","keydown"]);var Rf=z('<div class="terminal-pane svelte-maclc7"><div class="bar svelte-maclc7"><span class="label svelte-maclc7">Terminal</span> <span> </span></div> <div class="screen svelte-maclc7"></div></div>');function Df(e,t){et(t,!0);let n=Me(t,"rootPath",3,""),r=Me(t,"session",3,""),s,o=null,i=null,a=null,c=O("connecting"),f=null,d=0,g=null,v=!1;const h={background:Fr.colors["editor.background"],foreground:Fr.colors["editor.foreground"],cursor:Fr.colors["editorCursor.foreground"],selectionBackground:Fr.colors["editor.selectionBackground"],black:"#272822",red:"#f92672",green:"#a6e22e",yellow:"#e6db74",blue:"#66d9ef",magenta:"#ae81ff",cyan:"#a1efe4",white:"#f8f8f2",brightBlack:"#75715e",brightRed:"#f92672",brightGreen:"#a6e22e",brightYellow:"#e6db74",brightBlue:"#66d9ef",brightMagenta:"#ae81ff",brightCyan:"#a1efe4",brightWhite:"#f9f8f5"};function p(){if(!(!i||!o||(a==null?void 0:a.readyState)!==WebSocket.OPEN))try{i.fit(),a.send(JSON.stringify({type:"resize",cols:o.cols,rows:o.rows}))}catch{}}function x(){if(v)return;const $=`${location.protocol==="https:"?"wss":"ws"}://${location.host}${n()}/ws/sessions/${encodeURIComponent(r())}/ide/terminal/${encodeURIComponent(b.connectionId)}`;a=new WebSocket($),a.binaryType="arraybuffer",a.onopen=()=>{_(c,"connected"),d=0,p()},a.onmessage=T=>{o.write(typeof T.data=="string"?T.data:new Uint8Array(T.data))},a.onclose=()=>{if(v)return;_(c,"reconnecting");const T=Math.min(1e3*2**d,1e4);d+=1,g=setTimeout(x,T)},a.onerror=()=>{v||_(c,"error")}}xr(async()=>{const[{Terminal:S},{FitAddon:$}]=await Promise.all([As(()=>import("./ide-xterm.js"),[],import.meta.url),As(()=>import("./ide-addon-fit.js"),[],import.meta.url)]);await As(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),o=new S({theme:h,fontSize:12,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3}),i=new $,o.loadAddon(i),o.open(s),i.fit(),x(),o.onData(T=>{(a==null?void 0:a.readyState)===WebSocket.OPEN&&a.send(new TextEncoder().encode(T))}),f=new ResizeObserver(()=>p()),f.observe(s)}),ti(()=>{v=!0,g&&clearTimeout(g),f==null||f.disconnect(),a==null||a.close(),o==null||o.dispose()});var k=Rf(),C=w(k),I=m(w(C),2),N=ae(I,!0),P=m(C,2);Wr(P,S=>s=S,()=>s),X(()=>{It(I,1,`status ${l(c)??""}`,"svelte-maclc7"),Z(N,l(c))}),y(e,k),tt()}var Ff=z('<div class="border-b border-vs-line bg-vs-red/10 px-4 py-2 text-xs text-vs-red"> </div>'),Lf=z('<div class="flex items-center gap-2 px-4 py-3 text-xs text-vs-muted"><!> Loading…</div>'),jf=z('<button class="flex w-full items-center gap-2 px-4 py-1 text-left text-[13px] text-vs-fg hover:bg-vs-hover"><!> <span class="truncate"> </span></button>'),Hf=z('<div class="px-4 py-3 text-xs text-vs-muted">No sub-folders here. You can still open this folder.</div>'),Vf=z('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="flex h-[70vh] w-[min(640px,92vw)] flex-col overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">Open Folder</div> <form class="flex gap-2 border-b border-vs-line px-3 py-2"><button type="button" class="flex items-center gap-1 rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover disabled:opacity-40" title="Up one folder"><!> Up</button> <input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-xs text-vs-fg outline-none focus:border-vs-accent" spellcheck="false" aria-label="Folder path"/> <button type="submit" class="rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover">Go</button></form> <!> <div class="min-h-0 flex-1 overflow-y-auto py-1"><!></div> <div class="flex items-center gap-2 border-t border-vs-line px-4 py-3"><span class="flex min-w-0 flex-1 items-center gap-2 text-xs text-vs-muted"><!> <span class="truncate font-mono"> </span></span> <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40">Open Folder</button></div></div></div>');function Kf(e,t){et(t,!0);let n=O(""),r=O(""),s=O(ge([])),o=O(""),i=O(!0),a=O("");async function c(F){_(i,!0),_(o,"");try{const Y=await he.browse(F);_(n,Y.path,!0),_(r,Y.parent,!0),_(s,Y.entries||[],!0),_(a,Y.path,!0)}catch(Y){_(o,Y.message||"Could not open that folder",!0)}finally{_(i,!1)}}xr(()=>c(""));function f(F){F.preventDefault(),l(a).trim()&&c(l(a).trim())}var d=Vf(),g=w(d),v=m(w(g),2),h=w(v),p=w(h);Su(p,{size:14});var x=m(h,2),k=m(v,2);{var C=F=>{var Y=Ff(),pe=ae(Y,!0);X(()=>Z(pe,l(o))),y(F,Y)};H(k,F=>{l(o)&&F(C)})}var I=m(k,2),N=w(I);{var P=F=>{var Y=Lf(),pe=w(Y);Zs(pe,{size:13,class:"animate-spin"}),y(F,Y)},S=F=>{var Y=q(),pe=D(Y);He(pe,17,()=>l(s),fe=>fe.path,(fe,Ee)=>{var Q=jf(),ue=w(Q);zu(ue,{size:14,class:"shrink-0 text-vs-blue"});var ye=m(ue,2),Ce=ae(ye,!0);X(()=>Z(Ce,l(Ee).name)),R("dblclick",Q,()=>c(l(Ee).path)),R("click",Q,()=>c(l(Ee).path)),y(fe,Q)},fe=>{var Ee=Hf();y(fe,Ee)}),y(F,Y)};H(N,F=>{l(i)?F(P):F(S,-1)})}var $=m(I,2),T=w($),G=w(T);Ou(G,{size:13,class:"shrink-0"});var J=m(G,2),j=ae(J,!0),A=m(T,2),K=m(A,2);X(()=>{h.disabled=!l(r),ve(J,"title",l(n)),Z(j,l(n)),K.disabled=!l(n)||l(i)}),R("click",d,F=>F.target===F.currentTarget&&t.onclose()),R("keydown",d,F=>F.key==="Escape"&&t.onclose()),vr("submit",v,f),R("click",h,()=>l(r)&&c(l(r))),Le(x,()=>l(a),F=>_(a,F)),R("click",A,function(...F){var Y;(Y=t.onclose)==null||Y.apply(this,F)}),R("click",K,()=>t.onopen(l(n))),y(e,d),tt()}kt(["click","keydown","dblclick"]);var Bf=z('<p class="px-4 py-2 text-xs text-vs-muted">Open a folder to search it.</p>'),Uf=z('<button class="flex w-full items-center gap-2 px-3 py-1 text-left text-[13px] hover:bg-vs-hover"><!> <span class="truncate text-vs-fg"> </span> <span class="ml-auto max-w-[45%] truncate text-[11px] text-vs-muted"> </span></button>'),Wf=z('<p class="px-4 py-2 text-xs text-vs-muted"> </p>'),qf=z('<p class="px-4 py-2 text-xs text-vs-muted">Type to search filenames in this workspace.</p>'),Gf=z('<div class="flex h-full min-h-0 flex-col"><div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Search</div> <div class="px-3 pb-2"><div class="flex items-center gap-1.5 rounded-sm border border-vs-line bg-vs-input px-2 focus-within:border-vs-accent"><!> <input class="min-w-0 flex-1 bg-transparent py-1 text-xs text-vs-fg outline-none placeholder:text-vs-muted" placeholder="Search filenames" spellcheck="false"/> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div></div>');function Yf(e,t){et(t,!0);let n=O(""),r=O(ge([])),s=O(!1),o=O(!1),i=null;Jt(()=>{const N=l(n).trim();if(i&&clearTimeout(i),!N||!b.connectionId){_(r,[],!0),_(o,!1);return}i=setTimeout(async()=>{_(s,!0);try{const P=await he.searchFiles(b.connectionId,b.path||".",N);_(r,P.matches||[],!0)}catch(P){_(r,[],!0),b.setStatus(P.message||"Search failed")}finally{_(s,!1),_(o,!0)}},200)});const a=N=>{const P=(N||"").split("/");return P.pop(),P.join("/")};var c=Gf(),f=m(w(c),2),d=w(f),g=w(d);ri(g,{size:12,class:"shrink-0 text-vs-muted"});var v=m(g,2),h=m(v,2);{var p=N=>{Zs(N,{size:12,class:"shrink-0 animate-spin text-vs-muted"})};H(h,N=>{l(s)&&N(p)})}var x=m(f,2),k=w(x);{var C=N=>{var P=Bf();y(N,P)},I=N=>{var P=q(),S=D(P);He(S,17,()=>l(r),$=>$.path,($,T)=>{var G=Uf(),J=w(G);ni(J,{size:13,class:"shrink-0 text-vs-blue"});var j=m(J,2),A=ae(j,!0),K=m(j,2),F=ae(K,!0);X((Y,pe)=>{ve(G,"title",l(T).path),Z(A,Y),Z(F,pe)},[()=>l(T).name||l(T).path.split("/").pop(),()=>a(l(T).path)]),R("click",G,()=>b.openFile(l(T).path)),y($,G)},$=>{var T=q(),G=D(T);{var J=K=>{var F=Wf(),Y=ae(F);X(()=>Z(Y,`No files match “${l(n)??""}”.`)),y(K,F)},j=K=>{var F=qf();y(K,F)},A=at(()=>!l(n).trim());H(G,K=>{l(o)&&!l(s)?K(J):l(A)&&K(j,1)})}y($,T)}),y(N,P)};H(k,N=>{b.connectionId?N(I,-1):N(C)})}Le(v,()=>l(n),N=>_(n,N)),y(e,c),tt()}kt(["click"]);var Jf=z('<p class="flex items-center gap-2 text-vs-muted"><!> Fetching host key…</p>'),Xf=z('<p class="text-vs-red"> </p>'),Zf=z("<p>This host is already trusted. Try connecting again.</p>"),Qf=z('<div class="flex items-baseline gap-2 font-mono text-[11px]"><span class="w-16 shrink-0 text-vs-muted"> </span> <span class="break-all text-vs-fg"> </span></div>'),ed=z(`<p>The authenticity of <span class="font-mono text-vs-blue"> </span> can't be established. Verify these fingerprints match the server before you continue —
          if they don't, someone may be intercepting the connection.</p> <div class="mt-3 flex flex-col gap-1 rounded-sm border border-vs-line bg-vs-input p-2"></div> <p class="mt-3 text-xs text-vs-muted">Accepting adds the key to <span class="font-mono">~/.ssh/known_hosts</span> on this server.</p>`,1),td=z('<button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"> </button>'),nd=z('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="w-[min(560px,92vw)] overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="flex items-center gap-2 border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright"><!> Unknown host</div> <div class="px-4 py-3 text-[13px] leading-relaxed text-vs-fg"><!></div> <div class="flex justify-end gap-2 border-t border-vs-line px-4 py-3"><button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <!></div></div></div>');function rd(e,t){et(t,!0);let n=O(!0),r=O(""),s=O(null),o=O(!1);xr(async()=>{try{_(s,await he.hostKey(b.connectionId),!0)}catch(S){_(r,S.message||"Could not fetch the host key",!0)}finally{_(n,!1)}});async function i(){_(o,!0);try{await he.trustHost(b.connectionId),t.ontrusted()}catch(S){_(r,S.message||"Could not trust this host",!0),_(o,!1)}}var a=nd(),c=w(a),f=w(c),d=w(f);Hu(d,{size:15,class:"text-vs-yellow"});var g=m(f,2),v=w(g);{var h=S=>{var $=Jf(),T=w($);Zs(T,{size:13,class:"animate-spin"}),y(S,$)},p=S=>{var $=Xf(),T=ae($,!0);X(()=>Z(T,l(r))),y(S,$)},x=S=>{var $=Zf();y(S,$)},k=S=>{var $=ed(),T=D($),G=m(w(T)),J=ae(G),j=m(T,2);He(j,21,()=>l(s).fingerprints,A=>A.fingerprint,(A,K)=>{var F=Qf(),Y=w(F),pe=ae(Y,!0),fe=m(Y,2),Ee=ae(fe,!0);X(()=>{Z(pe,l(K).type),Z(Ee,l(K).fingerprint)}),y(A,F)}),X(()=>Z(J,`${l(s).host??""}:${l(s).port??""}`)),y(S,$)};H(v,S=>{var $;l(n)?S(h):l(r)?S(p,1):($=l(s))!=null&&$.known?S(x,2):S(k,-1)})}var C=m(g,2),I=w(C),N=m(I,2);{var P=S=>{var $=td(),T=ae($,!0);X(()=>{$.disabled=l(o),Z(T,l(o)?"Trusting…":"Trust and connect")}),R("click",$,i),y(S,$)};H(N,S=>{var $;!l(n)&&!(($=l(s))!=null&&$.known)&&!l(r)&&S(P)})}R("click",a,S=>S.target===S.currentTarget&&t.onclose()),R("keydown",a,S=>S.key==="Escape"&&t.onclose()),R("click",I,function(...S){var $;($=t.onclose)==null||$.apply(this,S)}),y(e,a),tt()}kt(["click","keydown"]);var sd=z('<div role="separator" tabindex="0" title="Drag to resize (double-click to reset)"><div></div></div>');function wo(e,t){et(t,!0);let n=Me(t,"size",15),r=Me(t,"side",3,"right"),s=Me(t,"min",3,120),o=Me(t,"max",3,800),i=Me(t,"onreset",3,null),a=O(!1);const c=r()==="top";function f(p){var P;p.preventDefault(),_(a,!0);const x=c?p.clientY:p.clientX,k=n(),C=p.currentTarget;(P=C.setPointerCapture)==null||P.call(C,p.pointerId);function I(S){const T=(c?S.clientY:S.clientX)-x,G=r()==="left"||r()==="top"?-T:T;n(Math.round(Math.min(o(),Math.max(s(),k+G))))}function N(){var S;_(a,!1),(S=C.releasePointerCapture)==null||S.call(C,p.pointerId),window.removeEventListener("pointermove",I),window.removeEventListener("pointerup",N)}window.addEventListener("pointermove",I),window.addEventListener("pointerup",N)}function d(p){const x=p.shiftKey?40:10,k=c?"ArrowUp":r()==="left"?"ArrowLeft":"ArrowRight",C=c?"ArrowDown":r()==="left"?"ArrowRight":"ArrowLeft";if(p.key===k)n(Math.min(o(),n()+x));else if(p.key===C)n(Math.max(s(),n()-x));else return;p.preventDefault()}var g=sd();let v;var h=ae(g);X(()=>{v=It(g,1,`group relative shrink-0 ${c?"h-1 w-full cursor-row-resize":"w-1 cursor-col-resize"}`,null,v,{"bg-vs-accent":l(a)}),ve(g,"aria-orientation",c?"horizontal":"vertical"),ve(g,"aria-valuenow",n()),ve(g,"aria-valuemin",s()),ve(g,"aria-valuemax",o()),It(h,1,`absolute ${c?"-top-1 -bottom-1 left-0 right-0":"-left-1 -right-1 top-0 bottom-0"}
           transition-colors group-hover:bg-vs-accent ${l(a)?"bg-vs-accent":""}`)}),R("pointerdown",g,f),R("dblclick",g,()=>{var p;return(p=i())==null?void 0:p()}),R("keydown",g,d),y(e,g),tt()}kt(["pointerdown","dblclick","keydown"]);var od=z('<span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>'),id=z('<span class="absolute right-1.5 bottom-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-vs-status px-1 text-[10px] leading-none font-semibold text-white"> </span>'),ad=z("<button><!> <!> <!></button>"),ld=z("<option> </option>"),cd=z('<button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover hover:text-vs-red" title="Remove workspace" aria-label="Remove workspace"><!></button>'),ud=z('<input class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),fd=z(`<button class="w-full rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Show this host's key fingerprint and trust it">Verify host key…</button>`),dd=z('<!> <button class="w-full rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"> </button> <!>',1),vd=z('<p class="mt-1 font-mono text-[11px] break-all text-vs-muted"> </p>'),hd=z('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="~/.ssh/id_ed25519"/> <textarea class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-[11px] outline-none focus:border-vs-accent" rows="4" placeholder="…or paste a private key (-----BEGIN OPENSSH PRIVATE KEY-----)" spellcheck="false"></textarea>',1),pd=z('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" type="password" placeholder="Password" autocomplete="new-password"/>'),_d=z('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Host" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="User" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Port" type="number" min="1" max="65535"/> <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!>',1),gd=z('<form class="mt-2 flex flex-col gap-1.5 border-t border-vs-line px-3 pt-2"><select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>This server (local folder)</option><option>Remote host over SSH</option></select> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"/> <div class="flex gap-1 pb-2"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110" type="submit">Create</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" type="button">Cancel</button></div></form>'),md=z('<div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Workspaces</div> <div class="flex flex-col gap-2 px-3 pt-1"><select class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" aria-label="Workspace"><option>— select workspace —</option><!></select> <div class="flex gap-1"><button class="flex flex-1 items-center justify-center gap-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"><!> Open Folder</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Add a workspace or SSH connection" aria-label="Add workspace"><!></button> <!></div> <!> <!></div> <!>',1),bd=z('<aside class="flex shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel"><!></aside> <!>',1),yd=z('<div class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"><!> <div><h1 class="text-2xl font-light text-vs-fg">Multibuilder IDE</h1> <p class="mt-1 text-sm text-vs-muted">Edit files on this server or on a remote host over SSH.</p></div> <div class="flex flex-col gap-2 text-sm"><button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Open Folder… <kbd class="ml-2 rounded-sm border border-vs-line px-1.5 py-0.5 text-[10px] text-vs-muted">Ctrl+Shift+O</kbd></button> <button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Connect to a host over SSH…</button></div></div>'),xd=z('<!> <div class="flex shrink-0 flex-col border-t border-vs-border bg-vs-bg"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1 text-[11px] tracking-wide uppercase"><!> Terminal <span class="text-vs-muted normal-case"> </span> <button class="ml-auto rounded-sm p-0.5 hover:bg-vs-hover" title="Hide panel" aria-label="Hide terminal panel"><!></button></div> <div class="min-h-0 flex-1"><!></div></div>',1),wd=z('<!> <div class="min-h-0 flex-1"><!></div> <!>',1),$d=z('<!> <aside class="flex shrink-0 flex-col overflow-hidden border-l border-vs-border bg-vs-panel"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1.5"><!> <span class="flex-1 text-[11px] font-semibold tracking-wide uppercase">Chat</span> <button class="rounded-sm p-0.5 hover:bg-vs-hover" title="Hide chat" aria-label="Hide chat"><!></button></div> <div class="min-h-0 flex-1"><!></div></aside>',1),Hi=z('<span class="flex items-center gap-1"><!> </span>'),kd=z("<span> </span>"),Sd=z('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle terminal (Ctrl+`)"><!> Terminal</button> <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Focus the tmux window on the host"><!></button>',1),Ed=z('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle chat panel"><!> Chat</button>'),Cd=z('<div class="flex h-full flex-col overflow-hidden bg-vs-bg font-sans text-vs-fg"><header class="flex items-center gap-2 border-b border-vs-border bg-vs-titlebar px-3 py-1 text-xs"><!> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover" title="Open a folder on this server (Ctrl+Shift+O)">Open Folder…</button> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40" title="Open a file (Ctrl+P)">Open File…</button> <button><!> Terminal</button> <span class="mx-auto truncate text-vs-muted"> </span> <span><!> </span></header> <div class="flex min-h-0 flex-1"><nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity"><!> <div class="mt-auto flex flex-col items-center pb-1"><button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Account — signed in to the dashboard" aria-label="Account"><!></button> <button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Toggle side bar (Ctrl+B)" aria-label="Toggle side bar"><!></button></div></nav> <!> <section class="flex min-h-0 min-w-0 flex-1 flex-col"><!></section> <!></div> <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white"><!> <!> <span class="truncate"> </span> <span class="ml-auto flex items-center gap-3"><!> <span class="max-w-[40vw] truncate opacity-80"> </span> <!> <!></span></footer> <!> <!> <!></div>');function Td(e,t){et(t,!0);let n=Me(t,"sessions",19,()=>[]),r=Me(t,"session",3,""),s=Me(t,"rootPath",3,""),o=O("files");function i(E,L){try{const W=localStorage.getItem(`ide.show.${E}`);return W===null?L:W==="1"}catch{return L}}let a=O(ge(i("chat",!0)));const c={sidebar:240,chat:320,panel:240};function f(E){try{const L=localStorage.getItem(`ide.size.${E}`),W=Number(L);return Number.isFinite(W)&&W>0?W:c[E]}catch{return c[E]}}let d=O(ge(f("sidebar"))),g=O(ge(f("chat"))),v=O(ge(f("panel")));Jt(()=>{try{localStorage.setItem("ide.size.sidebar",String(l(d))),localStorage.setItem("ide.size.chat",String(l(g))),localStorage.setItem("ide.size.panel",String(l(v))),localStorage.setItem("ide.show.terminal",l(x)?"1":"0"),localStorage.setItem("ide.show.chat",l(a)?"1":"0"),localStorage.setItem("ide.show.sidebar",l(h)?"1":"0")}catch{}});let h=O(ge(i("sidebar",!0))),p=O(!1),x=O(ge(i("terminal",!1))),k=O(!1);Jt(()=>{l(x)&&_(k,!0)});let C=O(!1),I=O(!1),N=O(""),P=O(ge({kind:"local",label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",private_key:"",workspace_root:"",max_file_bytes:1e6}));const S={idle:{icon:$u,label:"Not connected"},connecting:{icon:xu,label:"Connecting…"},connected:{icon:yu,label:"Connected"},reconnect:{icon:zi,label:"Reconnect required"},error:{icon:zi,label:"Error"}},$=at(()=>S[b.connectionState].icon),T=at(()=>{var E;return((E=b.connection)==null?void 0:E.kind)==="local"}),G=[{id:"files",icon:Mu,label:"Explorer",keys:"Ctrl+Shift+E"},{id:"search",icon:ri,label:"Search",keys:"Ctrl+Shift+F"},{id:"git",icon:Oi,label:"Source Control",keys:"Ctrl+Shift+G"},{id:"remote",icon:Du,label:"Remote Explorer",keys:""}];xr(async()=>{await b.loadConnections(),b.connectionId&&await b.refreshStatus()});function J(E){l(o)===E&&l(h)?_(h,!1):(_(o,E,!0),_(h,!0))}async function j(E){b.connectionId=E.currentTarget.value,b.tabs=[],b.activeKey="",b.restoredKey="",await b.refreshStatus()}async function A(E){_(I,!1);try{const L=E.split("/").filter(Boolean).pop()||E,W=await he.createConnection({kind:"local",label:L,workspace_root:E,max_file_bytes:1e6});await b.loadConnections(),b.connectionId=W.connection.id,b.tabs=[],b.activeKey="",b.restoredKey="",await b.connect(""),_(o,"files"),_(h,!0)}catch(L){b.setStatus(L.message||"Could not open folder")}}async function K(E){E.preventDefault();try{const L=await he.createConnection({...l(P),port:Number(l(P).port)});_(C,!1),_(P,{...l(P),label:"",host:"",username:"",password:"",private_key:""},!0),await b.loadConnections(),b.connectionId=L.connection.id,await b.refreshStatus()}catch(L){b.setStatus(L.message||"Could not create connection")}}async function F(){const E=b.connection;if(!E)return;const L=E.kind==="local"?"workspace":"connection";if(confirm(`Remove ${L} "${E.label}"? Saved tabs are cleared; files are untouched.`))try{await he.deleteConnection(E.id),b.connectionId="",b.tabs=[],await b.loadConnections()}catch(W){b.setStatus(W.message||"Could not delete")}}async function Y(){try{const E=await he.focusTerminal(b.connectionId);b.setStatus(`Focused ${E.window_name}`,"tmux window selected")}catch(E){b.setStatus(E.message||"Could not focus terminal")}}function pe(E){var we,Ie,Se,rt;const L=E.ctrlKey||E.metaKey,W=E.key.toLowerCase(),ke=((Ie=(we=E.target)==null?void 0:we.matches)==null?void 0:Ie.call(we,"input, textarea, select"))&&!((rt=(Se=E.target).closest)!=null&&rt.call(Se,".monaco-editor"));L&&W==="s"?(E.preventDefault(),b.saveActive()):L&&W==="p"&&!ke?(E.preventDefault(),b.connectionId&&_(p,!0)):L&&E.shiftKey&&W==="o"?(E.preventDefault(),_(I,!0)):L&&E.shiftKey&&["e","f","g"].includes(W)?(E.preventDefault(),_(o,{e:"files",f:"search",g:"git"}[W],!0),_(h,!0)):L&&W==="b"&&!ke?(E.preventDefault(),_(h,!l(h))):L&&W==="`"?(E.preventDefault(),b.connectionState==="connected"&&_(x,!l(x))):E.key==="Escape"&&l(p)&&(E.preventDefault(),_(p,!1))}var fe=Cd();vr("keydown",js,pe);var Ee=w(fe),Q=w(Ee);Ai(Q,{size:15,class:"shrink-0 text-vs-blue"});var ue=m(Q,2),ye=m(ue,2),Ce=m(ye,2);let Ke;var St=w(Ce);Fi(St,{size:13});var Rt=m(Ce,2),ut=ae(Rt,!0),bn=m(Rt,2),ln=w(bn);ki(ln,()=>l($),(E,L)=>{L(E,{size:12})});var Et=m(ln),yn=m(Ee,2),xn=w(yn),wn=w(xn);He(wn,17,()=>G,E=>E.id,(E,L)=>{var W=ad(),ke=w(W);{var we=Ue=>{var _e=od();y(Ue,_e)};H(ke,Ue=>{l(o)===l(L).id&&l(h)&&Ue(we)})}var Ie=m(ke,2);ki(Ie,()=>l(L).icon,(Ue,_e)=>{_e(Ue,{size:24,strokeWidth:1.4})});var Se=m(Ie,2);{var rt=Ue=>{var _e=id(),fn=ae(_e,!0);X(()=>Z(fn,b.gitDirtyCount)),y(Ue,_e)};H(Se,Ue=>{l(L).id==="git"&&b.gitDirtyCount&&Ue(rt)})}X(()=>{It(W,1,`relative flex h-12 w-12 items-center justify-center ${l(o)===l(L).id&&l(h)?"text-vs-bright":"text-vs-muted hover:text-vs-fg"}`),ve(W,"title",l(L).keys?`${l(L).label} (${l(L).keys})`:l(L).label),ve(W,"aria-label",l(L).label)}),R("click",W,()=>J(l(L).id)),y(E,W)});var cn=m(wn,2),un=w(cn),Kn=w(un);wu(Kn,{size:24,strokeWidth:1.4});var $n=m(un,2),kn=w($n);Lu(kn,{size:24,strokeWidth:1.4});var Bn=m(xn,2);{var Qs=E=>{var L=bd(),W=D(L),ke=w(W);{var we=_e=>{Xu(_e,{})},Ie=_e=>{Yf(_e,{})},Se=_e=>{sf(_e,{})},rt=_e=>{var fn=md(),Wn=m(D(fn),2),Ft=w(Wn),qn=w(Ft);qn.value=qn.__value="";var xs=m(qn);He(xs,17,()=>b.connections,Pe=>Pe.id,(Pe,Fe)=>{var We=ld(),En=ae(We),jt={};X(()=>{Z(En,`${l(Fe).kind==="local"?"🖿 ":"⇅ "}${l(Fe).label??""}`),jt!==(jt=l(Fe).id)&&(We.value=(We.__value=jt)??"")}),y(Pe,We)});var Gn;Qn(Ft);var kr=m(Ft,2),Sr=w(kr),eo=w(Sr);xo(eo,{size:13});var Er=m(Sr,2),Lt=w(Er);ju(Lt,{size:13});var to=m(Er,2);{var il=Pe=>{var Fe=cd(),We=w(Fe);Ku(We,{size:13}),R("click",Fe,F),y(Pe,Fe)};H(to,Pe=>{b.connection&&Pe(il)})}var ii=m(kr,2);{var al=Pe=>{var Fe=dd(),We=D(Fe);{var En=_t=>{var Cn=ud();Le(Cn,()=>l(N),ro=>_(N,ro)),y(_t,Cn)};H(We,_t=>{!l(T)&&!b.connection.has_password&&_t(En)})}var jt=m(We,2),ws=ae(jt,!0),$s=m(jt,2);{var no=_t=>{var Cn=fd();R("click",Cn,()=>b.needsHostKey=!0),y(_t,Cn)};H($s,_t=>{l(T)||_t(no)})}X(()=>Z(ws,l(T)?"Open workspace":"Connect")),R("click",jt,()=>b.connect(l(N))),y(Pe,Fe)};H(ii,Pe=>{b.connection&&b.connectionState!=="connected"&&Pe(al)})}var ll=m(ii,2);{var cl=Pe=>{var Fe=vd(),We=ae(Fe,!0);X(()=>Z(We,b.connection.workspace_root)),y(Pe,Fe)};H(ll,Pe=>{b.connection&&Pe(cl)})}var ul=m(Wn,2);{var fl=Pe=>{var Fe=gd(),We=w(Fe),En=w(We);En.value=En.__value="local";var jt=m(En);jt.value=jt.__value="ssh",Qn(We);var ws=m(We,2),$s=m(ws,2);{var no=Qt=>{var ai=_d(),li=D(ai),ci=m(li,2),ui=m(ci,2),ks=m(ui,2),so=w(ks);so.value=so.__value="agent";var oo=m(so);oo.value=oo.__value="key";var fi=m(oo);fi.value=fi.__value="password",Qn(ks);var di=m(ks,2);{var dl=Ye=>{var Cr=hd(),Ss=D(Cr),pl=m(Ss,2);Le(Ss,()=>l(P).identity_file,io=>l(P).identity_file=io),Le(pl,()=>l(P).private_key,io=>l(P).private_key=io),y(Ye,Cr)};H(di,Ye=>{l(P).auth_mode==="key"&&Ye(dl)})}var vl=m(di,2);{var hl=Ye=>{var Cr=pd();Le(Cr,()=>l(P).password,Ss=>l(P).password=Ss),y(Ye,Cr)};H(vl,Ye=>{l(P).auth_mode==="password"&&Ye(hl)})}Le(li,()=>l(P).host,Ye=>l(P).host=Ye),Le(ci,()=>l(P).username,Ye=>l(P).username=Ye),Le(ui,()=>l(P).port,Ye=>l(P).port=Ye),Fo(ks,()=>l(P).auth_mode,Ye=>l(P).auth_mode=Ye),y(Qt,ai)};H($s,Qt=>{l(P).kind==="ssh"&&Qt(no)})}var _t=m($s,2),Cn=m(_t,2),ro=m(w(Cn),2);X(()=>{ve(_t,"placeholder",l(P).kind==="local"?"/var/www/app":"Workspace root"),_t.required=l(P).kind==="local"}),vr("submit",Fe,K),Fo(We,()=>l(P).kind,Qt=>l(P).kind=Qt),Le(ws,()=>l(P).label,Qt=>l(P).label=Qt),Le(_t,()=>l(P).workspace_root,Qt=>l(P).workspace_root=Qt),R("click",ro,()=>_(C,!1)),y(Pe,Fe)};H(ul,Pe=>{l(C)&&Pe(fl)})}X(()=>{Gn!==(Gn=b.connectionId)&&(Ft.value=(Ft.__value=Gn)??"",hr(Ft,Gn))}),R("change",Ft,j),R("click",Sr,()=>_(I,!0)),R("click",Er,()=>_(C,!l(C))),y(_e,fn)};H(ke,_e=>{l(o)==="files"?_e(we):l(o)==="search"?_e(Ie,1):l(o)==="git"?_e(Se,2):_e(rt,-1)})}var Ue=m(W,2);wo(Ue,{side:"right",min:170,max:620,onreset:()=>_(d,c.sidebar,!0),get size(){return l(d)},set size(_e){_(d,_e,!0)}}),X(()=>Vr(W,`width: ${l(d)??""}px`)),y(E,L)};H(Bn,E=>{l(h)&&E(Qs)})}var bs=m(Bn,2),M=w(bs);{var B=E=>{var L=yd(),W=w(L);Ai(W,{size:64,strokeWidth:1,class:"text-vs-line"});var ke=m(W,4),we=w(ke),Ie=w(we);xo(Ie,{size:16});var Se=m(we,2),rt=w(Se);Di(rt,{size:16}),R("click",we,()=>_(I,!0)),R("click",Se,()=>{_(o,"remote"),_(h,!0),_(C,!0)}),y(E,L)},oe=E=>{var L=wd(),W=D(L);_f(W,{});var ke=m(W,2),we=w(ke);ff(we,{});var Ie=m(ke,2);{var Se=rt=>{var Ue=xd(),_e=D(Ue);{var fn=Lt=>{wo(Lt,{side:"top",min:120,max:640,onreset:()=>_(v,c.panel,!0),get size(){return l(v)},set size(to){_(v,to,!0)}})};H(_e,Lt=>{l(x)&&Lt(fn)})}var Wn=m(_e,2),Ft=w(Wn),qn=w(Ft);Fi(qn,{size:13});var xs=m(qn,2),Gn=ae(xs,!0),kr=m(xs,2),Sr=w(kr);Vs(Sr,{size:14});var eo=m(Ft,2),Er=w(eo);Wc(Er,()=>b.connectionId,Lt=>{Df(Lt,{get rootPath(){return s()},get session(){return r()}})}),X(()=>{var Lt;Vr(Wn,`height: ${l(v)??""}px`),ve(Wn,"hidden",!l(x)),Z(Gn,((Lt=b.connection)==null?void 0:Lt.label)||"")}),R("click",kr,()=>_(x,!1)),y(rt,Ue)};H(Ie,rt=>{l(k)&&b.connectionState==="connected"&&rt(Se)})}y(E,L)};H(M,E=>{b.connectionId?E(oe,-1):E(B)})}var xe=m(bs,2);{var Te=E=>{var L=$d(),W=D(L);wo(W,{side:"left",min:260,max:760,onreset:()=>_(g,c.chat,!0),get size(){return l(g)},set size(fn){_(g,fn,!0)}});var ke=m(W,2),we=w(ke),Ie=w(we);Ri(Ie,{size:13});var Se=m(Ie,4),rt=w(Se);Vs(rt,{size:14});var Ue=m(we,2),_e=w(Ue);Nf(_e,{get sessions(){return n()},get session(){return r()},get rootPath(){return s()}}),X(()=>Vr(ke,`width: ${l(g)??""}px`)),R("click",Se,()=>_(a,!1)),y(E,L)};H(xe,E=>{l(a)&&E(Te)})}var nt=m(yn,2),Re=w(nt);{var Ge=E=>{var L=Hi(),W=w(L);{var ke=Se=>{xo(Se,{size:12})},we=Se=>{Di(Se,{size:12})};H(W,Se=>{l(T)?Se(ke):Se(we,-1)})}var Ie=m(W);X(()=>{ve(L,"title",b.connection.workspace_root),Z(Ie,` ${b.connection.label??""}`)}),y(E,L)};H(Re,E=>{b.connection&&E(Ge)})}var Be=m(Re,2);{var De=E=>{var L=Hi(),W=w(L);Oi(W,{size:12});var ke=m(W);X(()=>Z(ke,` ${b.gitBranch??""}`)),y(E,L)};H(Be,E=>{b.gitBranch&&E(De)})}var pt=m(Be,2),Ct=ae(pt,!0),Dt=m(pt,2),Zt=w(Dt);{var wr=E=>{var L=kd(),W=ae(L);X(()=>Z(W,`${b.dirtyCount??""} unsaved`)),y(E,L)};H(Zt,E=>{b.dirtyCount&&E(wr)})}var Un=m(Zt,2),Sn=ae(Un,!0),ys=m(Un,2);{var $r=E=>{var L=Sd(),W=D(L),ke=w(W);Fu(ke,{size:12});var we=m(W,2),Ie=w(we);Eu(Ie,{size:12}),R("click",W,()=>_(x,!l(x))),R("click",we,Y),y(E,L)};H(ys,E=>{b.connectionState==="connected"&&E($r)})}var el=m(ys,2);{var tl=E=>{var L=Ed(),W=w(L);Ri(W,{size:12}),R("click",L,()=>_(a,!l(a))),y(E,L)};H(el,E=>{E(tl)})}var si=m(nt,2);{var nl=E=>{Of(E,{onclose:()=>_(p,!1)})};H(si,E=>{l(p)&&E(nl)})}var oi=m(si,2);{var rl=E=>{Kf(E,{onopen:A,onclose:()=>_(I,!1)})};H(oi,E=>{l(I)&&E(rl)})}var sl=m(oi,2);{var ol=E=>{rd(E,{onclose:()=>b.needsHostKey=!1,ontrusted:async()=>{b.needsHostKey=!1,await b.connect(l(N))}})};H(sl,E=>{b.needsHostKey&&E(ol)})}X(()=>{var E;ye.disabled=!b.connectionId,Ke=It(Ce,1,"flex items-center gap-1 rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40",null,Ke,{"text-vs-bright":l(x)}),Ce.disabled=b.connectionState!=="connected",ve(Ce,"title",b.connectionState==="connected"?"Toggle terminal (Ctrl+`)":"Open a workspace to use the terminal"),ve(Rt,"title",(E=b.connection)==null?void 0:E.workspace_root),Z(ut,b.connection?`${b.connection.label} — Multibuilder IDE`:"Multibuilder IDE"),It(bn,1,`flex items-center gap-1 ${b.connectionState==="connected"?"text-vs-green":b.connectionState==="connecting"?"text-vs-yellow":b.connectionState==="idle"?"text-vs-muted":"text-vs-red"}`),Z(Et,` ${S[b.connectionState].label??""}`),Z(Ct,b.statusText),Z(Sn,b.detailText)}),R("click",ue,()=>_(I,!0)),R("click",ye,()=>_(p,!0)),R("click",Ce,()=>_(x,!l(x))),R("click",un,()=>b.setStatus("Signed in to the Multibuilder dashboard")),R("click",$n,()=>_(h,!l(h))),y(e,fe),tt()}kt(["click","change"]);function Qa(e,t){return Vc(Td,{target:e,props:t})}function Vi(){const e=document.getElementById("ide-root");if(!e||e.dataset.mounted)return;e.dataset.mounted="1";const t=window.__IDE_BOOTSTRAP__||{};Qa(e,{sessions:t.sessions||[],session:t.session||"",rootPath:t.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Vi):Vi();window.mountRemoteIde=Qa;export{As as _};
