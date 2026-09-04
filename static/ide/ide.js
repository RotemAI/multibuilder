const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css","./ide3.css"])))=>i.map(i=>d[i]);
var Rl=Object.defineProperty;var jo=e=>{throw TypeError(e)};var Ll=(e,t,n)=>t in e?Rl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var at=(e,t,n)=>Ll(e,typeof t!="symbol"?t+"":t,n),Da=(e,t,n)=>t.has(e)||jo("Cannot "+n);var u=(e,t,n)=>(Da(e,t,"read from private field"),n?n.call(e):t.get(e)),K=(e,t,n)=>t.has(e)?jo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),ue=(e,t,n,r)=>(Da(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),ke=(e,t,n)=>(Da(e,t,"access private method"),n);var Sa=Array.isArray,Dl=Array.prototype.indexOf,va=Array.prototype.includes,Ca=Array.from,xi=Object.defineProperty,An=Object.getOwnPropertyDescriptor,yi=Object.getOwnPropertyDescriptors,Fl=Object.prototype,Hl=Array.prototype,mo=Object.getPrototypeOf,Bo=Object.isExtensible;function ts(e){return typeof e=="function"}const jl=()=>{};function Bl(e){return e()}function Za(e){for(var t=0;t<e.length;t++)e[t]()}function wi(){var e,t,n=new Promise((r,s)=>{e=r,t=s});return{promise:n,resolve:e,reject:t}}function Vl(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const Je=2,Or=4,Ys=8,bo=1<<24,Dt=16,zt=32,mn=64,Qa=128,xo=256,Nt=512,Ge=1024,Ye=2048,jt=4096,ct=8192,_t=16384,Hr=32768,ha=1<<25,On=65536,pa=1<<17,Kl=1<<18,jr=1<<19,ki=1<<20,Jt=1<<25,lr=65536,_a=1<<21,Sr=1<<22,In=1<<23,Qt=Symbol("$state"),$i=Symbol("component"),Si=Symbol("legacy props"),Ul=Symbol(""),aa=Symbol("attributes"),eo=Symbol("class"),to=Symbol("style"),as=Symbol("text"),oa=Symbol("form reset"),Js=new class extends Error{constructor(){super(...arguments);at(this,"name","StaleReactionError");at(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var gi;const yo=!!((gi=globalThis.document)!=null&&gi.contentType)&&globalThis.document.contentType.includes("xml"),Wl=1,ql=2,Ci=4,Gl=8,Yl=16,Jl=1,Xl=2,Ei=4,Zl=8,Ql=16,ec=1,tc=2,We=Symbol("uninitialized"),Ti="http://www.w3.org/1999/xhtml",Ni="http://www.w3.org/2000/svg",nc="http://www.w3.org/1998/Math/MathML",rc="@attach";function sc(){console.warn("https://svelte.dev/e/derived_inert")}function ac(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function oc(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function zi(e){return e===this.v}function ic(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Mi(e){return!ic(e,this.v)}function Pi(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function lc(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function cc(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function uc(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function dc(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function fc(e){throw new Error("https://svelte.dev/e/effect_orphan")}function vc(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function hc(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function pc(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function _c(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function gc(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function mc(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Br=!1;function bc(){Br=!0}let Ie=null;function Rr(e){Ie=e}function ut(e,t=!1,n){Ie={p:Ie,i:!1,c:null,e:null,s:e,x:null,r:_e,l:Br&&!t?{s:null,u:null,$:[]}:null}}function dt(e){var t=Ie,n=t.e;if(n!==null){t.e=null;for(var r of n)tl(r)}return t.i=!0,Ie=t.p,wo(e)}function wo(e={}){return xi(e,$i,{value:!0}),e}function Vr(){return!Br||Ie!==null&&Ie.l===null}let Zn=[];function Ai(){var e=Zn;Zn=[],Za(e)}function Xt(e){if(Zn.length===0&&!vs){var t=Zn;queueMicrotask(()=>{t===Zn&&Ai()})}Zn.push(e)}function xc(){for(;Zn.length>0;)Ai()}const yc=-7169;function He(e,t){e.f=e.f&yc|t}function ko(e){(e.f&Nt)!==0||e.deps===null?He(e,Ge):He(e,jt)}function Ii(e){if(e!==null)for(const t of e)(t.f&Je)===0||(t.f&lr)===0||(t.f^=lr,Ii(t.deps))}function Oi(e,t,n){(e.f&Ye)!==0?t.add(e):(e.f&jt)!==0&&n.add(e),Ii(e.deps),He(e,Ge)}let ra=!1;function wc(e){var t=ra;try{return ra=!1,[e(),ra]}finally{ra=t}}function Ri(e,t){if(t){const n=document.body;e.autofocus=!0,Xt(()=>{document.activeElement===n&&e.focus()})}}let Vo=!1;function kc(){Vo||(Vo=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[oa])==null||t.call(n)})},{capture:!0}))}function Kr(e){var t=xe,n=_e;Mt(null),Pt(null);try{return e()}finally{Mt(t),Pt(n)}}function Li(e,t,n,r=n){e.addEventListener(t,()=>Kr(n));const s=e[oa];s?e[oa]=()=>{s(),r(!0)}:e[oa]=()=>r(!0),kc()}function Di(e,t,n,r){const s=Vr()?Lr:$o;var i=e.filter(b=>!b.settled),a=t.map(s);if(n.length===0&&i.length===0){r(a);return}var l=_e,c=$c(),d=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(b=>b.promise)):null;function v(b){if((l.f&_t)===0){c();try{r([...a,...b])}catch(y){Yt(y,l)}ga()}}var x=Fi();if(n.length===0){d.then(()=>v([])).finally(x);return}function p(){Promise.all(n.map(b=>Sc(b))).then(v).catch(b=>Yt(b,l)).finally(x)}d?d.then(()=>{c(),p(),ga()}):p()}function $c(){var e=_e,t=xe,n=Ie,r=ee;return function(i=!0){Pt(e),Mt(t),Rr(n),i&&(e.f&_t)===0&&(r==null||r.activate(),r==null||r.apply())}}function ga(e=!0){Pt(null),Mt(null),Rr(null),e&&(ee==null||ee.deactivate())}function Fi(){var e=_e,t=e.b,n=ee,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function Lr(e){var t=Je|Ye;return _e!==null&&(_e.f|=jr),{ctx:Ie,deps:null,effects:null,equals:zi,f:t,fn:e,reactions:null,rv:0,v:We,wv:0,parent:_e,ac:null}}const os=Symbol("obsolete");function Sc(e,t,n){let r=_e;r===null&&lc();var s=void 0,i=bn(We),a=!xe,l=new Set;return Hc(()=>{var b,y;var c=_e,d=wi();s=d.promise;try{Promise.resolve(e()).then(d.resolve,k=>{k!==Js&&d.reject(k)}).finally(ga)}catch(k){d.reject(k),ga()}var v=ee;if(a){if((c.f&Hr)!==0)var x=Fi();if((b=r.b)!=null&&b.is_rendered())(y=v.async_deriveds.get(c))==null||y.reject(os);else for(const k of l.values())k.reject(os);l.add(d),v.async_deriveds.set(c,d)}const p=(k,S=void 0)=>{x==null||x(),l.delete(d),S!==os&&(v.activate(),S?(i.f|=In,Dr(i,S)):((i.f&In)!==0&&(i.f^=In),Dr(i,k)),v.deactivate())};d.promise.then(p,k=>p(null,k||"unknown"))}),Ta(()=>{for(const c of l)c.reject(os)}),new Promise(c=>{function d(v){function x(){v===s?c(i):d(s)}v.then(x,x)}d(s)})}function tt(e){const t=Lr(e);return ll(t),t}function $o(e){const t=Lr(e);return t.equals=Mi,t}function Cc(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)et(t[n])}}function So(e){var t,n=_e,r=e.parent;if(!xn&&r!==null&&e.v!==We&&(r.f&(_t|ct))!==0)return sc(),e.v;Pt(r);try{e.f&=~lr,Cc(e),t=fl(e)}finally{Pt(n)}return t}function Hi(e){var t=So(e);if(!e.equals(t)&&(e.wv=ul(),(!(ee!=null&&ee.is_fork)||e.deps===null)&&(ee!==null?(ee.capture(e,t,!0),fs==null||fs.capture(e,t,!0)):e.v=t,e.deps===null))){He(e,Ge);return}xn||(Qe!==null?(To()||ee!=null&&ee.is_fork)&&Qe.set(e,t):ko(e))}function Ec(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&Kr(()=>{n.ac.abort(Js),n.ac=null}),n.fn!==null&&(n.teardown=jl),gs(n,0),zo(n))}function ji(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Fr(t)}let Fa=null,wr=null,ee=null,fs=null,Qe=null,no=null,vs=!1,Ha=!1,$r=null,ia=null;var Ko=0;let Tc=1;var Tr,Mn,tr,Nr,zr,Mr,hn,Pr,vt,xs,pn,Rt,Wt,Ar,nr,ze,ro,is,so,Bi,Vi,kr,Nc,ls;const wa=class wa{constructor(){K(this,ze);at(this,"id",Tc++);K(this,Tr,!1);at(this,"linked",!0);K(this,Mn,null);K(this,tr,null);at(this,"async_deriveds",new Map);at(this,"current",new Map);at(this,"previous",new Map);K(this,Nr,new Set);K(this,zr,new Set);K(this,Mr,0);K(this,hn,new Map);K(this,Pr,null);K(this,vt,[]);K(this,xs,[]);K(this,pn,new Set);K(this,Rt,new Set);K(this,Wt,new Map);K(this,Ar,new Set);at(this,"is_fork",!1);K(this,nr,!1);wr===null?Fa=wr=this:(ue(wr,tr,this),ue(this,Mn,wr)),wr=this}skip_effect(t){u(this,Wt).has(t)||u(this,Wt).set(t,{d:[],m:[]}),u(this,Ar).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=u(this,Wt).get(t);if(r){u(this,Wt).delete(t);for(var s of r.d)He(s,Ye),n(s);for(s of r.m)He(s,jt),n(s)}u(this,Ar).add(t)}capture(t,n,r=!1){t.v!==We&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&In)===0&&(this.current.set(t,[n,r]),Qe==null||Qe.set(t,n)),this.is_fork||(t.v=n)}activate(){ee=this}deactivate(){ee=null,Qe=null}flush(){try{Ha=!0,ee=this,ke(this,ze,is).call(this)}finally{Ko=0,no=null,$r=null,ia=null,Ha=!1,ee=null,Qe=null,en.clear()}}discard(){var t;for(const n of u(this,zr))n(this);u(this,zr).clear();for(const n of this.async_deriveds.values())n.reject(os);ke(this,ze,ls).call(this),(t=u(this,Pr))==null||t.resolve()}register_created_effect(t){u(this,xs).push(t)}increment(t,n){if(ue(this,Mr,u(this,Mr)+1),t){let r=u(this,hn).get(n)??0;u(this,hn).set(n,r+1)}}decrement(t,n){if(ue(this,Mr,u(this,Mr)-1),t){let r=u(this,hn).get(n)??0;r===1?u(this,hn).delete(n):u(this,hn).set(n,r-1)}u(this,nr)||(ue(this,nr,!0),Xt(()=>{ue(this,nr,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)u(this,pn).add(r);for(const r of n)u(this,Rt).add(r);t.clear(),n.clear()}oncommit(t){u(this,Nr).add(t)}ondiscard(t){u(this,zr).add(t)}settled(){return(u(this,Pr)??ue(this,Pr,wi())).promise}static ensure(){if(ee===null){const t=ee=new wa;!Ha&&!vs&&Xt(()=>{u(t,Tr)||t.flush()})}return ee}apply(){{Qe=null;return}}schedule(t){var s;if(no=t,(s=t.b)!=null&&s.is_pending&&(t.f&(Or|Ys|bo))!==0&&(t.f&Hr)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if($r!==null&&n===_e&&(xe===null||(xe.f&Je)===0))return;if((r&(mn|zt))!==0){if((r&Ge)===0)return;n.f^=Ge}}u(this,vt).push(n)}};Tr=new WeakMap,Mn=new WeakMap,tr=new WeakMap,Nr=new WeakMap,zr=new WeakMap,Mr=new WeakMap,hn=new WeakMap,Pr=new WeakMap,vt=new WeakMap,xs=new WeakMap,pn=new WeakMap,Rt=new WeakMap,Wt=new WeakMap,Ar=new WeakMap,nr=new WeakMap,ze=new WeakSet,ro=function(){if(this.is_fork)return!0;for(const r of u(this,hn).keys()){for(var t=r,n=!1;t.parent!==null;){if(u(this,Wt).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},is=function(){var c,d,v,x;ue(this,Tr,!0),Ko++>1e3&&(ke(this,ze,ls).call(this),Mc());for(const p of u(this,pn))u(this,Rt).delete(p),He(p,Ye),this.schedule(p);for(const p of u(this,Rt))He(p,jt),this.schedule(p);const t=u(this,vt);ue(this,vt,[]),this.apply();var n=$r=[],r=[],s=ia=[];for(const p of t)try{ke(this,ze,so).call(this,p,n,r)}catch(b){throw Wi(p),ke(this,ze,ro).call(this)||this.discard(),b}if(ee=null,s.length>0){var i=wa.ensure();for(const p of s)i.schedule(p)}if($r=null,ia=null,ke(this,ze,ro).call(this)){ke(this,ze,kr).call(this,r),ke(this,ze,kr).call(this,n);for(const[p,b]of u(this,Wt))Ui(p,b);s.length>0&&ke(c=ee,ze,is).call(c);return}const a=ke(this,ze,Bi).call(this);if(a){ke(this,ze,kr).call(this,r),ke(this,ze,kr).call(this,n),ke(d=a,ze,Vi).call(d,this);return}u(this,pn).clear(),u(this,Rt).clear();for(const p of u(this,Nr))p(this);u(this,Nr).clear(),fs=this,Uo(r),Uo(n),fs=null,(v=u(this,Pr))==null||v.resolve();var l=ee;if(u(this,Mr)===0&&(u(this,vt).length===0||l!==null)&&ke(this,ze,ls).call(this),u(this,vt).length>0)if(l!==null){const p=l;u(p,vt).push(...u(this,vt).filter(b=>!u(p,vt).includes(b)))}else l=this;l!==null&&(en.clear(),ke(x=l,ze,is).call(x))},so=function(t,n,r){t.f^=Ge;for(var s=t.first;s!==null;){var i=s.f,a=(i&(zt|mn))!==0,l=a&&(i&Ge)!==0,c=l||(i&ct)!==0||u(this,Wt).has(s);if(!c&&s.fn!==null){a?s.f^=Ge:(i&Or)!==0?n.push(s):Zs(s)&&((i&Dt)!==0&&u(this,Rt).add(s),Fr(s));var d=s.first;if(d!==null){s=d;continue}}for(;s!==null;){var v=s.next;if(v!==null){s=v;break}s=s.parent}}},Bi=function(){for(var t=u(this,Mn);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=u(t,Mn)}return null},Vi=function(t){var r;for(const[s,i]of t.current)!this.previous.has(s)&&t.previous.has(s)&&this.previous.set(s,t.previous.get(s)),this.current.set(s,i);for(const[s,i]of t.async_deriveds){const a=this.async_deriveds.get(s);a&&i.promise.then(a.resolve).catch(a.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,pn),u(t,Rt));const n=s=>{var i=s.reactions;if(i!==null&&!((s.f&Je)!==0&&(s.f&(Ye|jt))===0))for(const c of i){var a=c.f;if((a&Je)!==0)n(c);else{var l=c;a&(Sr|Dt)&&!this.async_deriveds.has(l)&&(u(this,Rt).delete(l),He(l,Ye),this.schedule(l))}}};for(const s of this.current.keys())n(s);this.oncommit(()=>t.discard()),ke(r=t,ze,ls).call(r),ee=this,ke(this,ze,is).call(this)},kr=function(t){for(var n=0;n<t.length;n+=1)Oi(t[n],u(this,pn),u(this,Rt))},Nc=function(){var x;for(let p=Fa;p!==null;p=u(p,tr)){var t=p.id<this.id,n=[];for(const[b,[y,k]]of this.current){if(p.current.has(b)){var r=p.current.get(b)[0];if(t&&y!==r)p.current.set(b,[y,k]);else continue}n.push(b)}if(t)for(const[b,y]of this.async_deriveds){const k=p.async_deriveds.get(b);k&&y.promise.then(k.resolve).catch(k.reject)}var s=[...p.current.keys()].filter(b=>!p.current.get(b)[1]);if(!(!u(p,Tr)||s.length===0)){var i=s.filter(b=>!this.current.has(b));if(i.length===0)t&&p.discard();else if(n.length>0){if(t)for(const b of u(this,Ar))p.unskip_effect(b,y=>{var k;(y.f&(Dt|Sr))!==0?p.schedule(y):ke(k=p,ze,kr).call(k,[y])});p.activate();var a=new Set,l=new Map;for(var c of n)Ki(c,i,a,l);l=new Map;var d=[...p.current].filter(([b,y])=>{const k=this.current.get(b);return k?k[0]!==y[0]||k[1]!==y[1]:!0}).map(([b])=>b);if(d.length>0)for(const b of u(this,xs))(b.f&(_t|ct|pa))===0&&Co(b,d,l)&&((b.f&(Sr|Dt))!==0?(He(b,Ye),p.schedule(b)):u(p,pn).add(b));if(u(p,vt).length>0&&!u(p,nr)){p.apply();for(var v of u(p,vt))ke(x=p,ze,so).call(x,v,[],[]);ue(p,vt,[])}p.deactivate()}}}},ls=function(){if(this.linked){var t=u(this,Mn),n=u(this,tr);t===null?Fa=n:ue(t,tr,n),n===null?wr=t:ue(n,Mn,t),this.linked=!1}};let cr=wa;function zc(e){var t=vs;vs=!0;try{for(var n;;){if(xc(),ee===null)return n;ee.flush()}}finally{vs=t}}function Mc(){try{vc()}catch(e){Yt(e,no)}}let Ot=null;function Uo(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(_t|ct))===0&&Zs(r)&&(Ot=new Set,Fr(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&al(r),(Ot==null?void 0:Ot.size)>0)){en.clear();for(const s of Ot){if((s.f&(_t|ct))!==0)continue;const i=[s];let a=s.parent;for(;a!==null;)Ot.has(a)&&(Ot.delete(a),i.push(a)),a=a.parent;for(let l=i.length-1;l>=0;l--){const c=i[l];(c.f&(_t|ct))===0&&Fr(c)}}Ot.clear()}}Ot=null}}function Ki(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const s of e.reactions){const i=s.f;(i&Je)!==0?Ki(s,t,n,r):(i&(Sr|Dt))!==0&&(i&Ye)===0&&Co(s,t,r)&&(He(s,Ye),Eo(s))}}function Co(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const s of e.deps){if(va.call(t,s))return!0;if((s.f&Je)!==0&&Co(s,t,n))return n.set(s,!0),!0}return n.set(e,!1),!1}function Eo(e){ee.schedule(e)}function Ui(e,t){if(!((e.f&zt)!==0&&(e.f&Ge)!==0)){(e.f&Ye)!==0?t.d.push(e):(e.f&jt)!==0&&t.m.push(e),He(e,Ge);for(var n=e.first;n!==null;)Ui(n,t),n=n.next}}function Wi(e){He(e,Ge);for(var t=e.first;t!==null;)Wi(t),t=t.next}let ma=new Set;const en=new Map;let qi=!1;function bn(e,t){var n={f:0,v:e,reactions:null,equals:zi,rv:0,wv:0};return n}function A(e,t){const n=bn(e);return ll(n),n}function Pc(e,t=!1,n=!0){var s;const r=bn(e);return t||(r.equals=Mi),Br&&n&&Ie!==null&&Ie.l!==null&&((s=Ie.l).s??(s.s=[])).push(r),r}function f(e,t,n=!1){xe!==null&&(!Ht||(xe.f&pa)!==0)&&Vr()&&(xe.f&(Je|Dt|Sr|pa))!==0&&(nn===null||!nn.has(e))&&gc();let r=n?Me(t):t;return Dr(e,r,ia)}function Dr(e,t,n=null){if(!e.equals(t)){xn?en.set(e,t):en.has(e)||en.set(e,e.v);var r=cr.ensure();if(r.capture(e,t),(e.f&Je)!==0){const s=e;(e.f&Ye)!==0&&So(s),Qe===null&&ko(s)}e.wv=ul(),Gi(e,Ye,n),Vr()&&_e!==null&&(_e.f&Ge)!==0&&(_e.f&(zt|mn))===0&&(Ct===null?Bc([e]):Ct.push(e)),!r.is_fork&&ma.size>0&&!qi&&Ac()}return t}function Ac(){qi=!1;for(const e of ma){(e.f&Ge)!==0&&He(e,jt);let t;try{t=Zs(e)}catch{t=!0}t&&Fr(e)}ma.clear()}function Wo(e,t=1){var n=o(e),r=t===1?n++:n--;return f(e,n),r}function hs(e){f(e,e.v+1)}function Gi(e,t,n){var r=e.reactions;if(r!==null)for(var s=Vr(),i=r.length,a=0;a<i;a++){var l=r[a],c=l.f;if(!(!s&&l===_e)){var d=(c&Ye)===0;if(d&&He(l,t),(c&pa)!==0)ma.add(l);else if((c&Je)!==0){var v=l;Qe==null||Qe.delete(v),(c&lr)===0&&(c&Nt&&(_e===null||(_e.f&_a)===0)&&(l.f|=lr),Gi(v,jt,n))}else if(d){var x=l;(c&Dt)!==0&&Ot!==null&&Ot.add(x),n!==null?n.push(x):Eo(x)}}}}function Me(e){if(typeof e!="object"||e===null||Qt in e||$i in e)return e;const t=mo(e);if(t!==Fl&&t!==Hl)return e;var n=new Map,r=Sa(e),s=A(0),i=ir,a=l=>{if(ir===i)return l();var c=xe,d=ir;Mt(null),Yo(i);var v=l();return Mt(c),Yo(d),v};return r&&n.set("length",A(e.length)),new Proxy(e,{defineProperty(l,c,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&pc();var v=n.get(c);return v===void 0?a(()=>{var x=A(d.value);return n.set(c,x),x}):f(v,d.value,!0),!0},deleteProperty(l,c){var d=n.get(c);if(d===void 0){if(c in l){const v=a(()=>A(We));n.set(c,v),hs(s)}}else f(d,We),hs(s);return!0},get(l,c,d){var b;if(c===Qt)return e;var v=n.get(c),x=c in l;if(v===void 0&&(!x||(b=An(l,c))!=null&&b.writable)&&(v=a(()=>{var y=Me(x?l[c]:We),k=A(y);return k}),n.set(c,v)),v!==void 0){var p=o(v);return p===We?void 0:p}return Reflect.get(l,c,d)},getOwnPropertyDescriptor(l,c){var d=Reflect.getOwnPropertyDescriptor(l,c);if(d&&"value"in d){var v=n.get(c);v&&(d.value=o(v))}else if(d===void 0){var x=n.get(c),p=x==null?void 0:x.v;if(x!==void 0&&p!==We)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return d},has(l,c){var p;if(c===Qt)return!0;var d=n.get(c),v=d!==void 0&&d.v!==We||Reflect.has(l,c);if(d!==void 0||_e!==null&&(!v||(p=An(l,c))!=null&&p.writable)){d===void 0&&(d=a(()=>{var b=v?Me(l[c]):We,y=A(b);return y}),n.set(c,d));var x=o(d);if(x===We)return!1}return v},set(l,c,d,v){var P;var x=n.get(c),p=c in l;if(r&&c==="length")for(var b=d;b<x.v;b+=1){var y=n.get(b+"");y!==void 0?f(y,We):b in l&&(y=a(()=>A(We)),n.set(b+"",y))}if(x===void 0)(!p||(P=An(l,c))!=null&&P.writable)&&(x=a(()=>A(void 0)),f(x,Me(d)),n.set(c,x));else{p=x.v!==We;var k=a(()=>Me(d));f(x,k)}var S=Reflect.getOwnPropertyDescriptor(l,c);if(S!=null&&S.set&&S.set.call(v,d),!p){if(r&&typeof c=="string"){var $=n.get("length"),R=Number(c);Number.isInteger(R)&&R>=$.v&&f($,R+1)}hs(s)}return!0},ownKeys(l){o(s);var c=Reflect.ownKeys(l).filter(x=>{var p=n.get(x);return p===void 0||p.v!==We});for(var[d,v]of n)v.v!==We&&!(d in l)&&c.push(d);return c},setPrototypeOf(){_c()}})}function qo(e){try{if(e!==null&&typeof e=="object"&&Qt in e)return e[Qt]}catch{}return e}function Yi(e,t){return Object.is(qo(e),qo(t))}var _s,Ji,Xi,Zi;function Ic(){if(_s===void 0){_s=window,Ji=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Xi=An(t,"firstChild").get,Zi=An(t,"nextSibling").get,Bo(e)&&(e[eo]=void 0,e[aa]=null,e[to]=void 0,e.__e=void 0),Bo(n)&&(n[as]=void 0)}}function tn(e=""){return document.createTextNode(e)}function Ft(e){return Xi.call(e)}function Xs(e){return Zi.call(e)}function m(e,t){return Ft(e)}function V(e,t=!1){{var n=Ft(e);return n instanceof Comment&&n.data===""?Xs(n):n}}function Z(e,t=!1){return Ft(e)}function h(e,t=1,n=!1){let r=e;for(;t--;)r=Xs(r);return r}function Oc(e){e.textContent=""}function Qi(){return!1}function Ea(e,t,n){return t==null||t===Ti?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Rc(e){var t=_e;if(t===null)return xe.f|=In,e;if((t.f&Hr)===0&&(t.f&Or)===0)throw e;Yt(e,t)}function Yt(e,t){if(!(t!==null&&(t.f&_t)!==0)){for(;t!==null;){if((t.f&Qa)!==0&&(t.f&(_t|ha))===0){if((t.f&Hr)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function el(e){_e===null&&(xe===null&&fc(),dc()),xn&&uc()}function Lc(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Bt(e,t){var n=_e;n!==null&&(n.f&ct)!==0&&(e|=ct);var r={ctx:Ie,deps:null,nodes:null,f:e|Ye|Nt,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};ee==null||ee.register_created_effect(r);var s=r;if((e&Or)!==0)$r!==null?$r.push(r):cr.ensure().schedule(r);else if(t!==null){try{Fr(r)}catch(a){throw et(r),a}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&jr)===0&&(s=s.first,(e&Dt)!==0&&(e&On)!==0&&s!==null&&(s.f|=On))}if(s!==null&&(s.parent=n,n!==null&&Lc(s,n),xe!==null&&(xe.f&Je)!==0&&(e&mn)===0)){var i=xe;(i.effects??(i.effects=[])).push(s)}return r}function To(){return xe!==null&&!Ht}function Ta(e){const t=Bt(Ys,null);return He(t,Ge),t.teardown=e,t}function nt(e){el();var t=_e.f,n=!xe&&(t&zt)!==0&&Ie!==null&&!Ie.i;if(n){var r=Ie;(r.e??(r.e=[])).push(e)}else return tl(e)}function tl(e){return Bt(Or|ki,e)}function Dc(e){return el(),Bt(Ys|ki,e)}function Fc(e){cr.ensure();const t=Bt(mn|jr,e);return(n={})=>new Promise(r=>{n.outro?or(t,()=>{et(t),r(void 0)}):(et(t),r(void 0))})}function Na(e){return Bt(Or,e)}function Hc(e){return Bt(Sr|jr,e)}function No(e,t=0){return Bt(Ys|t,e)}function G(e,t=[],n=[],r=[]){Di(r,t,n,s=>{Bt(Ys,()=>{e(...s.map(o))})})}function Ur(e,t=0){var n=Bt(Dt|t,e);return n}function nl(e,t=0){var n=Bt(bo|t,e);return n}function ht(e){return Bt(zt|jr,e)}function rl(e){var t=e.teardown;if(t!==null){const n=xn,r=xe;Go(!0),Mt(null);try{t.call(null)}catch(s){Yt(s,e.parent)}finally{Go(n),Mt(r)}}}function zo(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const s=n.ac;s!==null&&Kr(()=>{s.abort(Js)});var r=n.next;(n.f&mn)!==0?n.parent=null:et(n,t),n=r}}function jc(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&zt)===0&&et(t),t=n}}function et(e,t=!0){var n=!1;(t||(e.f&Kl)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(sl(e.nodes.start,e.nodes.end),n=!0),e.f|=ha,zo(e,t&&!n),gs(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const i of r)i.stop();rl(e),e.f^=ha,e.f|=_t;var s=e.parent;s!==null&&s.first!==null&&al(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function sl(e,t){for(;e!==null;){var n=e===t?null:Xs(e);e.remove(),e=n}}function al(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function or(e,t,n=!0){var r=[];e.f|=xo,ol(e,r,!0);var s=()=>{n&&et(e),t&&t()},i=r.length;if(i>0){var a=()=>--i||s();for(var l of r)l.out(a)}else s()}function ol(e,t,n){if((e.f&ct)===0){e.f^=ct;var r=e.nodes&&e.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&t.push(l);for(var s=e.first;s!==null;){var i=s.next;if((s.f&mn)===0){var a=(s.f&On)!==0||(s.f&zt)!==0&&(e.f&Dt)!==0;ol(s,t,a?n:!1)}s=i}}}function ba(e){e.f&=~xo,il(e,!0)}function il(e,t){if((e.f&xo)===0&&(e.f&ct)!==0){e.f^=ct,(e.f&Ge)===0&&(He(e,Ye),cr.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,s=(n.f&On)!==0||(n.f&zt)!==0;il(n,s?t:!1),n=r}var i=e.nodes&&e.nodes.t;if(i!==null)for(const a of i)(a.is_global||t)&&a.in()}}function Mo(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var s=n===r?null:Xs(n);t.append(n),n=s}}let la=!1,xn=!1;function Go(e){xn=e}let xe=null,Ht=!1;function Mt(e){xe=e}let _e=null;function Pt(e){_e=e}let nn=null;function ll(e){xe!==null&&(nn??(nn=new Set)).add(e)}let pt=null,wt=0,Ct=null;function Bc(e){Ct=e}let cl=1,Qn=0,ir=Qn;function Yo(e){ir=e}function ul(){return++cl}function Zs(e){var t=e.f;if((t&Ye)!==0)return!0;if(t&Je&&(e.f&=~lr),(t&jt)!==0){for(var n=e.deps,r=n.length,s=0;s<r;s++){var i=n[s];if(Zs(i)&&Hi(i),i.wv>e.wv)return!0}(t&Nt)!==0&&Qe===null&&He(e,Ge)}return!1}function dl(e,t,n=!0){var r=e.reactions;if(r!==null&&!(nn!==null&&nn.has(e)))for(var s=0;s<r.length;s++){var i=r[s];(i.f&Je)!==0?dl(i,t,!1):t===i&&(n?He(i,Ye):(i.f&Ge)!==0&&He(i,jt),Eo(i))}}function fl(e){var t=pt,n=wt,r=Ct,s=xe,i=nn,a=Ie,l=Ht,c=ir,d=e.f;pt=null,wt=0,Ct=null,xe=(d&(zt|mn))===0?e:null,nn=null,Rr(e.ctx),Ht=!1,ir=++Qn,e.ac!==null&&(Kr(()=>{e.ac.abort(Js)}),e.ac=null);try{e.f|=_a;var v=e.fn,x=v();e.f|=Hr;var p=Jo(e);if(Vr()&&Ct!==null&&!Ht&&p!==null&&(e.f&(Je|jt|Ye))===0)for(var b=0;b<Ct.length;b++)dl(Ct[b],e);if(s!==null&&s!==e){if(Qn++,s.deps!==null)for(let y=0;y<n;y+=1)s.deps[y].rv=Qn;if(t!==null)for(const y of t)y.rv=Qn;Ct!==null&&(r===null?r=Ct:r.push(...Ct))}return(e.f&In)!==0&&(e.f^=In),x}catch(y){return Jo(e),Rc(y)}finally{e.f^=_a,pt=t,wt=n,Ct=r,xe=s,nn=i,Rr(a),Ht=l,ir=c}}function Jo(e){var s;var t=e.deps,n=ee==null?void 0:ee.is_fork;if(pt!==null){var r;if(n||gs(e,wt),t!==null&&wt>0)for(t.length=wt+pt.length,r=0;r<pt.length;r++)t[wt+r]=pt[r];else e.deps=t=pt;if(To()&&(e.f&Nt)!==0)for(r=wt;r<t.length;r++)((s=t[r]).reactions??(s.reactions=[])).push(e)}else!n&&t!==null&&wt<t.length&&(gs(e,wt),t.length=wt);return t}function Vc(e,t){let n=t.reactions;if(n!==null){var r=Dl.call(n,e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(t.f&Je)!==0&&(pt===null||!va.call(pt,t))){var i=t;(i.f&Nt)!==0&&(i.f^=Nt,i.f&=~lr),i.v!==We&&ko(i),i.ac!==null&&Kr(()=>{i.ac.abort(Js),i.ac=null,He(i,Ye)}),Ec(i),gs(i,0)}}function gs(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Vc(e,n[r])}function Fr(e){var t=e.f;if((t&_t)===0){He(e,Ge);var n=_e,r=la;_e=e,la=(t&(zt|mn))===0;try{(t&(Dt|bo))!==0?jc(e):zo(e),rl(e);var s=fl(e);e.teardown=typeof s=="function"?s:null,e.wv=cl;var i}finally{la=r,_e=n}}}async function Kc(){await Promise.resolve(),zc()}function o(e){var t=e.f,n=(t&Je)!==0;if(xe!==null&&!Ht){var r=_e!==null&&(_e.f&_t)!==0;if(!r&&(nn===null||!nn.has(e))){var s=xe.deps;if((xe.f&_a)!==0)e.rv<Qn&&(e.rv=Qn,pt===null&&s!==null&&s[wt]===e?wt++:pt===null?pt=[e]:pt.push(e));else{xe.deps??(xe.deps=[]),va.call(xe.deps,e)||xe.deps.push(e);var i=e.reactions;i===null?e.reactions=[xe]:va.call(i,xe)||i.push(xe)}}}if(xn&&en.has(e))return en.get(e);if(n){var a=e;if(xn){var l=a.v;return((a.f&Ge)===0&&a.reactions!==null||hl(a))&&(l=So(a)),en.set(a,l),l}var c=(a.f&Nt)===0&&!Ht&&xe!==null&&(la||(xe.f&Nt)!==0),d=(a.f&Hr)===0;Zs(a)&&(c&&(a.f|=Nt),Hi(a)),c&&!d&&(ji(a),vl(a))}if(Qe!=null&&Qe.has(e))return Qe.get(e);if((e.f&In)!==0)throw e.v;return e.v}function vl(e){if(e.f|=Nt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Je)!==0&&(t.f&Nt)===0&&(ji(t),vl(t))}function hl(e){if(e.v===We)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(en.has(t)||(t.f&Je)!==0&&hl(t))return!0;return!1}function yn(e){var t=Ht;try{return Ht=!0,e()}finally{Ht=t}}function Jn(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(Qt in e)ao(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&Qt in n&&ao(n)}}}function ao(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{ao(e[r],t)}catch{}const n=mo(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=yi(n);for(let s in r){const i=r[s].get;if(i)try{i.call(e)}catch{}}}}}function Uc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Wc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function qc(e){return Wc.includes(e)}const Gc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Yc(e){return e=e.toLowerCase(),Gc[e]??e}const Jc=["touchstart","touchmove"];function Xc(e){return Jc.includes(e)}const er=Symbol("events"),pl=new Set,oo=new Set;function _l(e,t,n,r={}){function s(i){if(r.capture||io.call(t,i),!i.cancelBubble)return Kr(()=>n==null?void 0:n.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Xt(()=>{t.addEventListener(e,s,r)}):t.addEventListener(e,s,r),s}function ur(e,t,n,r,s){var i={capture:r,passive:s},a=_l(e,t,n,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Ta(()=>{t.removeEventListener(e,a,i)})}function O(e,t,n){(t[er]??(t[er]={}))[e]=n}function At(e){for(var t=0;t<e.length;t++)pl.add(e[t]);for(var n of oo)n(e)}let ja=null,Ba=!1;function io(e){var k,S;var t=this,n=t.ownerDocument,r=e.type,s=((k=e.composedPath)==null?void 0:k.call(e))||[],i=s[0]||e.target;ja=e,Ba||(Ba=!0,setTimeout(()=>{Ba=!1,ja=null}));var a=0,l=ja===e&&e[er];if(l){var c=s.indexOf(l);if(c!==-1&&(t===document||t===window)){e[er]=t;return}var d=s.indexOf(t);if(d===-1)return;c<=d&&(a=c)}if(i=s[a]||e.target,i!==t){xi(e,"currentTarget",{configurable:!0,get(){return i||n}});var v=xe,x=_e;Mt(null),Pt(null);try{for(var p,b=[];i!==null&&i!==t;){try{var y=(S=i[er])==null?void 0:S[r];y!=null&&(!i.disabled||e.target===i)&&y.call(i,e)}catch($){p?b.push($):p=$}if(e.cancelBubble)break;a++,i=a<s.length?s[a]:null}if(p){for(let $ of b)queueMicrotask(()=>{throw $});throw p}}finally{e[er]=t,delete e.currentTarget,Mt(v),Pt(x)}}}var mi;const Va=((mi=globalThis==null?void 0:globalThis.window)==null?void 0:mi.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Zc(e){return(Va==null?void 0:Va.createHTML(e))??e}function gl(e){var t=Ea("template");return t.innerHTML=Zc(e.replaceAll("<!>","<!---->")),t.content}function Rn(e,t){var n=_e;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function z(e,t){var n=(t&ec)!==0,r=(t&tc)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=gl(i?e:"<!>"+e),n||(s=Ft(s)));var a=r||Ji?document.importNode(s,!0):s.cloneNode(!0);if(n){var l=Ft(a),c=a.lastChild;Rn(l,c)}else Rn(a,a);return a}}function Qc(e,t,n="svg"){var r=!e.startsWith("<!>"),s=`<${n}>${r?e:"<!>"+e}</${n}>`,i;return()=>{if(!i){var a=gl(s),l=Ft(a);i=Ft(l)}var c=i.cloneNode(!0);return Rn(c,c),c}}function ml(e,t){return Qc(e,t,"svg")}function Xo(e=""){{var t=tn(e+"");return Rn(t,t),t}}function Q(){var e=document.createDocumentFragment(),t=document.createComment(""),n=tn();return e.append(t,n),Rn(t,n),e}function g(e,t){e!==null&&e.before(t)}function eu(e){let t=0,n=bn(0),r;return()=>{To()&&(o(n),No(()=>(t===0&&(r=yn(()=>e(()=>hs(n)))),t+=1,()=>{Xt(()=>{t-=1,t===0&&(r==null||r(),r=void 0,hs(n))})})))}}var tu=On|jr;function nu(e,t,n,r){new ru(e,t,n,r)}var Et,go,Tt,rr,ot,bt,it,xt,qt,sr,Pn,Ir,ys,ws,_n,ka,Ae,su,au,lo,ou,co,cs,ca,uo,fo;class ru{constructor(t,n,r,s){K(this,Ae);at(this,"parent");at(this,"is_pending",!1);at(this,"transform_error");K(this,Et);K(this,go,null);K(this,Tt);K(this,rr);K(this,ot);K(this,bt,null);K(this,it,null);K(this,xt,null);K(this,qt,null);K(this,sr,0);K(this,Pn,0);K(this,Ir,!1);K(this,ys,new Set);K(this,ws,new Set);K(this,_n,null);K(this,ka,eu(()=>(ue(this,_n,bn(u(this,sr))),()=>{ue(this,_n,null)})));var i;ue(this,Et,t),ue(this,Tt,n),ue(this,rr,a=>{var l=_e;l.b=this,l.f|=Qa,r(a)}),this.parent=_e.b,this.transform_error=s??((i=this.parent)==null?void 0:i.transform_error)??(a=>a),ue(this,ot,Ur(()=>{ke(this,Ae,co).call(this)},tu))}defer_effect(t){Oi(t,u(this,ys),u(this,ws))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,Tt).pending}update_pending_count(t,n){ke(this,Ae,uo).call(this,t,n),ue(this,sr,u(this,sr)+t),!(!u(this,_n)||u(this,Ir))&&(ue(this,Ir,!0),Xt(()=>{ue(this,Ir,!1),u(this,_n)&&Dr(u(this,_n),u(this,sr))}))}get_effect_pending(){return u(this,ka).call(this),o(u(this,_n))}error(t){if(!u(this,Tt).onerror&&!u(this,Tt).failed)throw t;ee!=null&&ee.is_fork?(u(this,bt)&&ee.skip_effect(u(this,bt)),u(this,it)&&ee.skip_effect(u(this,it)),u(this,xt)&&ee.skip_effect(u(this,xt)),ee.oncommit(()=>{ke(this,Ae,fo).call(this,t)})):ke(this,Ae,fo).call(this,t)}}Et=new WeakMap,go=new WeakMap,Tt=new WeakMap,rr=new WeakMap,ot=new WeakMap,bt=new WeakMap,it=new WeakMap,xt=new WeakMap,qt=new WeakMap,sr=new WeakMap,Pn=new WeakMap,Ir=new WeakMap,ys=new WeakMap,ws=new WeakMap,_n=new WeakMap,ka=new WeakMap,Ae=new WeakSet,su=function(){try{ue(this,bt,ht(()=>u(this,rr).call(this,u(this,Et))))}catch(t){this.error(t)}},au=function(t){const n=u(this,Tt).failed,{reset:r,invoke_onerror:s}=ke(this,Ae,lo).call(this,t);Xt(s),n&&ue(this,xt,ht(()=>{n(u(this,Et),()=>t,()=>r)}))},lo=function(t){var n=!1,r=!1;const s=()=>{if(n){oc();return}n=!0,r&&mc(),u(this,xt)!==null&&or(u(this,xt),()=>{ue(this,xt,null)}),ke(this,Ae,ca).call(this,()=>{ke(this,Ae,co).call(this)})};return{reset:s,invoke_onerror:()=>{var a,l;try{r=!0,(l=(a=u(this,Tt)).onerror)==null||l.call(a,t,s),r=!1}catch(c){Yt(c,u(this,ot)&&u(this,ot).parent)}}}},ou=function(){const t=u(this,Tt).pending;t&&(this.is_pending=!0,ue(this,it,ht(()=>t(u(this,Et)))),Xt(()=>{var n=ue(this,qt,document.createDocumentFragment()),r=tn(),s=!1;if(n.append(r),ue(this,bt,ke(this,Ae,ca).call(this,()=>{try{return ht(()=>u(this,rr).call(this,r))}catch(i){try{this.error(i),s=!0}catch(a){Yt(a,u(this,ot).parent)}return null}})),u(this,bt)===null){ue(this,qt,null),s&&ke(this,Ae,cs).call(this,ee);return}u(this,Pn)===0&&(u(this,Et).before(n),ue(this,qt,null),or(u(this,it),()=>{ue(this,it,null)}),ke(this,Ae,cs).call(this,ee))}))},co=function(){try{if(this.is_pending=this.has_pending_snippet(),ue(this,Pn,0),ue(this,sr,0),ue(this,bt,ht(()=>{u(this,rr).call(this,u(this,Et))})),u(this,Pn)>0){var t=ue(this,qt,document.createDocumentFragment());Mo(u(this,bt),t);const n=u(this,Tt).pending;ue(this,it,ht(()=>n(u(this,Et))))}else ke(this,Ae,cs).call(this,ee)}catch(n){this.error(n)}},cs=function(t){this.is_pending=!1,t.transfer_effects(u(this,ys),u(this,ws))},ca=function(t){var n=_e,r=xe,s=Ie;Pt(u(this,ot)),Mt(u(this,ot)),Rr(u(this,ot).ctx);try{return cr.ensure(),t()}finally{Pt(n),Mt(r),Rr(s)}},uo=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&ke(r=this.parent,Ae,uo).call(r,t,n);return}ue(this,Pn,u(this,Pn)+t),u(this,Pn)===0&&(ke(this,Ae,cs).call(this,n),u(this,it)&&or(u(this,it),()=>{ue(this,it,null)}),u(this,qt)&&(u(this,Et).before(u(this,qt)),ue(this,qt,null)))},fo=function(t){u(this,bt)&&(et(u(this,bt)),ue(this,bt,null)),u(this,it)&&(et(u(this,it)),ue(this,it,null)),u(this,xt)&&(et(u(this,xt)),ue(this,xt,null));let n=u(this,Tt).failed;const r=s=>{const{reset:i,invoke_onerror:a}=ke(this,Ae,lo).call(this,s);a(),n&&ue(this,xt,ke(this,Ae,ca).call(this,()=>{try{return ht(()=>{var l=_e;l.b=this,l.f|=Qa,n(u(this,Et),()=>s,()=>i)})}catch(l){return Yt(l,u(this,ot).parent),null}}))};Xt(()=>{var s;try{s=this.transform_error(t)}catch(i){Yt(i,u(this,ot)&&u(this,ot).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,i=>Yt(i,u(this,ot)&&u(this,ot).parent)):r(s)})};function W(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[as]??(e[as]=e.nodeValue))&&(e[as]=n,e.nodeValue=`${n}`)}function iu(e,t){return lu(e,t)}const sa=new Map;function lu(e,{target:t,anchor:n,props:r={},events:s,context:i,intro:a=!0,transformError:l}){Ic();var c=void 0,d=Fc(()=>{var v=n??t.appendChild(tn());nu(v,{pending:()=>{}},b=>{ut({});var y=Ie;i&&(y.c=i),s&&(r.$$events=s),c=e(b,r)||wo(),dt()},l);var x=new Set,p=b=>{for(var y=0;y<b.length;y++){var k=b[y];if(!x.has(k)){x.add(k);var S=Xc(k);for(const P of[t,document]){var $=sa.get(P);$===void 0&&($=new Map,sa.set(P,$));var R=$.get(k);R===void 0?(P.addEventListener(k,io,{passive:S}),$.set(k,1)):$.set(k,R+1)}}}};return p(Ca(pl)),oo.add(p),()=>{var S;for(var b of x)for(const $ of[t,document]){var y=sa.get($),k=y.get(b);--k==0?($.removeEventListener(b,io),y.delete(b),y.size===0&&sa.delete($)):y.set(b,k)}oo.delete(p),v!==n&&((S=v.parentNode)==null||S.removeChild(v))}});return cu.set(c,d),c}let cu=new WeakMap;var Lt,Gt,yt,ar,ks,$s,$a;class za{constructor(t,n=!0){at(this,"anchor");K(this,Lt,new Map);K(this,Gt,new Map);K(this,yt,new Map);K(this,ar,new Set);K(this,ks,!0);K(this,$s,t=>{if(u(this,Lt).has(t)){var n=u(this,Lt).get(t),r=u(this,Gt).get(n);if(r)ba(r),u(this,ar).delete(n);else{var s=u(this,yt).get(n);s&&(ba(s.effect),u(this,Gt).set(n,s.effect),u(this,yt).delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,a]of u(this,Lt)){if(u(this,Lt).delete(i),i===t)break;const l=u(this,yt).get(a);l&&(et(l.effect),u(this,yt).delete(a))}for(const[i,a]of u(this,Gt)){if(i===n||u(this,ar).has(i))continue;const l=()=>{if(Array.from(u(this,Lt).values()).includes(i)){var d=document.createDocumentFragment();Mo(a,d),d.append(tn()),u(this,yt).set(i,{effect:a,fragment:d})}else et(a);u(this,ar).delete(i),u(this,Gt).delete(i)};u(this,ks)||!r?(u(this,ar).add(i),or(a,l,!1)):l()}}});K(this,$a,t=>{u(this,Lt).delete(t);const n=Array.from(u(this,Lt).values());for(const[r,s]of u(this,yt))n.includes(r)||(et(s.effect),u(this,yt).delete(r))});this.anchor=t,ue(this,ks,n)}ensure(t,n){var r=ee,s=Qi();if(n&&!u(this,Gt).has(t)&&!u(this,yt).has(t))if(s){var i=document.createDocumentFragment(),a=tn();i.append(a),u(this,yt).set(t,{effect:ht(()=>n(a)),fragment:i})}else u(this,Gt).set(t,ht(()=>n(this.anchor)));if(u(this,Lt).set(r,t),s){for(const[l,c]of u(this,Gt))l===t?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of u(this,yt))l===t?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(u(this,$s)),r.ondiscard(u(this,$a))}else u(this,$s).call(this,r)}}Lt=new WeakMap,Gt=new WeakMap,yt=new WeakMap,ar=new WeakMap,ks=new WeakMap,$s=new WeakMap,$a=new WeakMap;function j(e,t,n=!1){var r=new za(e),s=n?On:0;function i(a,l){r.ensure(a,l)}Ur(()=>{var a=!1;t((l,c=0)=>{a=!0,i(c,l)}),a||i(-1,null)},s)}const uu=Symbol("NaN");function du(e,t,n){var r=new za(e),s=!Vr();Ur(()=>{var i=t();i!==i&&(i=uu),s&&i!==null&&typeof i=="object"&&(i={}),r.ensure(i,n)})}function bl(e,t){return t}function fu(e,t,n){for(var r=[],s=t.length,i,a=t.length,l=0;l<s;l++){let x=t[l];or(x,()=>{if(i){if(i.pending.delete(x),i.done.add(x),i.pending.size===0){var p=e.outrogroups;vo(e,Ca(i.done)),p.delete(i),p.size===0&&(e.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=r.length===0&&n!==null&&e.pending.size===0;if(c){var d=n,v=d.parentNode;Oc(v),v.append(d),e.items.clear()}vo(e,t,!c)}else i={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(i)}function vo(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const a of e.pending.values())for(const l of a)r.add(e.items.get(l).e)}for(var s=0;s<t.length;s++){var i=t[s];if(r!=null&&r.has(i)){i.f|=Jt;const a=document.createDocumentFragment();Mo(i,a)}else et(t[s],n)}}var Zo;function Ke(e,t,n,r,s,i=null){var a=e,l=new Map,c=(t&Ci)!==0;if(c){var d=e;a=d.appendChild(tn())}var v=null,x=$o(()=>{var P=n();return Sa(P)?P:P==null?[]:Ca(P)}),p,b=new Map,y=!0;function k(P){(R.effect.f&_t)===0&&(R.pending.delete(P),R.fallback=v,vu(R,p,a,t,r),v!==null&&(p.length===0?(v.f&Jt)===0?ba(v):(v.f^=Jt,us(v,null,a)):or(v,()=>{v=null})))}function S(P){R.pending.delete(P)}var $=Ur(()=>{p=o(x);for(var P=p.length,Y=new Set,N=ee,C=Qi(),M=0;M<P;M+=1){var q=p[M],te=r(q,M),L=y?null:l.get(te);L?(L.v&&Dr(L.v,q),L.i&&Dr(L.i,M),C&&N.unskip_effect(L.e)):(L=hu(l,y?a:Zo??(Zo=tn()),q,te,M,s,t,n),y||(L.e.f|=Jt),l.set(te,L)),Y.add(te)}if(P===0&&i&&!v&&(y?v=ht(()=>i(a)):(v=ht(()=>i(Zo??(Zo=tn()))),v.f|=Jt)),P>Y.size&&cc(),!y)if(b.set(N,Y),C){for(const[B,X]of l)Y.has(B)||N.skip_effect(X.e);N.oncommit(k),N.ondiscard(S)}else k(N);o(x)}),R={effect:$,items:l,pending:b,outrogroups:null,fallback:v};y=!1}function ns(e){for(;e!==null&&(e.f&zt)===0;)e=e.next;return e}function vu(e,t,n,r,s){var L,B,X,ve,Te,Ue,Pe,rt,he;var i=(r&Gl)!==0,a=t.length,l=e.items,c=ns(e.effect.first),d,v=null,x,p=[],b=[],y,k,S,$;if(i)for($=0;$<a;$+=1)y=t[$],k=s(y,$),S=l.get(k).e,(S.f&Jt)===0&&((B=(L=S.nodes)==null?void 0:L.a)==null||B.measure(),(x??(x=new Set)).add(S));for($=0;$<a;$+=1){if(y=t[$],k=s(y,$),S=l.get(k).e,e.outrogroups!==null)for(const pe of e.outrogroups)pe.pending.delete(S),pe.done.delete(S);if((S.f&ct)!==0&&(ba(S),i&&((ve=(X=S.nodes)==null?void 0:X.a)==null||ve.unfix(),(x??(x=new Set)).delete(S))),(S.f&Jt)!==0)if(S.f^=Jt,S===c)us(S,null,n);else{var R=v?v.next:c;S===e.effect.last&&(e.effect.last=S.prev),S.prev&&(S.prev.next=S.next),S.next&&(S.next.prev=S.prev),Nn(e,v,S),Nn(e,S,R),us(S,R,n),v=S,p=[],b=[],c=ns(v.next);continue}if(S!==c){if(d!==void 0&&d.has(S)){if(p.length<b.length){var P=b[0],Y;v=P.prev;var N=p[0],C=p[p.length-1];for(Y=0;Y<p.length;Y+=1)us(p[Y],P,n);for(Y=0;Y<b.length;Y+=1)d.delete(b[Y]);Nn(e,N.prev,C.next),Nn(e,v,N),Nn(e,C,P),c=P,v=C,$-=1,p=[],b=[]}else d.delete(S),us(S,c,n),Nn(e,S.prev,S.next),Nn(e,S,v===null?e.effect.first:v.next),Nn(e,v,S),v=S;continue}for(p=[],b=[];c!==null&&c!==S;)(d??(d=new Set)).add(c),b.push(c),c=ns(c.next);if(c===null)continue}(S.f&Jt)===0&&p.push(S),v=S,c=ns(S.next)}if(e.outrogroups!==null){for(const pe of e.outrogroups)pe.pending.size===0&&(vo(e,Ca(pe.done)),(Te=e.outrogroups)==null||Te.delete(pe));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||d!==void 0){var M=[];if(d!==void 0)for(S of d)(S.f&ct)===0&&M.push(S);for(;c!==null;)(c.f&ct)===0&&c!==e.fallback&&M.push(c),c=ns(c.next);var q=M.length;if(q>0){var te=(r&Ci)!==0&&a===0?n:null;if(i){for($=0;$<q;$+=1)(Pe=(Ue=M[$].nodes)==null?void 0:Ue.a)==null||Pe.measure();for($=0;$<q;$+=1)(he=(rt=M[$].nodes)==null?void 0:rt.a)==null||he.fix()}fu(e,M,te)}}i&&Xt(()=>{var pe,D;if(x!==void 0)for(S of x)(D=(pe=S.nodes)==null?void 0:pe.a)==null||D.apply()})}function hu(e,t,n,r,s,i,a,l){var c=(a&Wl)!==0?(a&Yl)===0?Pc(n,!1,!1):bn(n):null,d=(a&ql)!==0?bn(s):null;return{v:c,i:d,e:ht(()=>(i(t,c??n,d??s,l),()=>{e.delete(r)}))}}function us(e,t,n){if(e.nodes)for(var r=e.nodes.start,s=e.nodes.end,i=t&&(t.f&Jt)===0?t.nodes.start:n;r!==null;){var a=Xs(r);if(i.before(r),r===s)return;r=a}}function Nn(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function pu(e,t,n=!1,r=!1,s=!1,i=!1){var a=e,l="";if(n)var c=e;G(()=>{var d=_e;if(l!==(l=t()??"")){if(n){d.nodes=null,c.innerHTML=l,l!==""&&Rn(Ft(c),c.lastChild);return}if(d.nodes!==null&&(sl(d.nodes.start,d.nodes.end),d.nodes=null),l!==""){var v=r?Ni:s?nc:void 0,x=Ea(r?"svg":s?"math":"template",v);x.innerHTML=l;var p=r||s?x:x.content;if(Rn(Ft(p),p.lastChild),r||s)for(;Ft(p);)a.before(Ft(p));else a.before(p)}}})}function ce(e,t,n,r,s){var l,c;if((l=t.$$host)!=null&&l.$$shadowRoot){const d=Ea("slot");g(e,d);return}var i=(c=t.$$slots)==null?void 0:c[n],a=!1;i===!0&&(i=t.children,a=!0),i===void 0||i(e,a?()=>r:r)}function Qo(e,t,n){var r=new za(e);Ur(()=>{var s=t()??null;r.ensure(s,s&&(i=>n(i,s)))},On)}function _u(e,t,n,r,s,i){var a=null,l=e,c=new za(l,!1);Ur(()=>{const d=t()||null;var v=Ni;if(d===null){c.ensure(null,null);return}return c.ensure(d,x=>{if(d){if(a=Ea(d,v),Rn(a,a),r){var p=null,b=a.appendChild(tn());r(a,b),p==null||p.remove()}_e.nodes.end=a,x.before(a)}}),()=>{}},On),Ta(()=>{})}function gu(e,t){var n=void 0,r;nl(()=>{n!==(n=t())&&(r&&(et(r),r=null),n&&(r=ht(()=>{Na(()=>n(e))})))})}function xl(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=xl(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function mu(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=xl(e))&&(r&&(r+=" "),r+=t);return r}function yl(e){return typeof e=="object"?mu(e):e??""}const ei=[...` 	
\r\f \v\uFEFF`];function bu(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var s of Object.keys(n))if(n[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,a=0;(a=r.indexOf(s,a))>=0;){var l=a+i;(a===0||ei.includes(r[a-1]))&&(l===r.length||ei.includes(r[l]))?r=(a===0?"":r.substring(0,a))+r.substring(l+1):a=l}}return r===""?null:r}function ti(e,t=!1){var n=t?" !important;":";",r="";for(var s of Object.keys(e)){var i=e[s];i!=null&&i!==""&&(r+=" "+s+": "+i+n)}return r}function Ka(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function xu(e,t){if(t){var n="",r,s;if(Array.isArray(t)?(r=t[0],s=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var i=!1,a=0,l=!1,c=[];r&&c.push(...Object.keys(r).map(Ka)),s&&c.push(...Object.keys(s).map(Ka));var d=0,v=-1;const k=e.length;for(var x=0;x<k;x++){var p=e[x];if(l?p==="/"&&e[x-1]==="*"&&(l=!1):i?i===p&&(i=!1):p==="/"&&e[x+1]==="*"?l=!0:p==='"'||p==="'"?i=p:p==="("?a++:p===")"&&a--,!l&&i===!1&&a===0){if(p===":"&&v===-1)v=x;else if(p===";"||x===k-1){if(v!==-1){var b=Ka(e.substring(d,v).trim());if(!c.includes(b)){p!==";"&&x++;var y=e.substring(d,x).trim();n+=" "+y+";"}}d=x+1,v=-1}}}}return r&&(n+=ti(r)),s&&(n+=ti(s,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function lt(e,t,n,r,s,i){var a=e[eo];if(a!==n||a===void 0){var l=bu(n,r,i);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e[eo]=n}else if(i&&s!==i)for(var c in i){var d=!!i[c];(s==null||d!==!!s[c])&&e.classList.toggle(c,d)}return i}function Ua(e,t={},n,r){for(var s in n){var i=n[s];t[s]!==i&&(n[s]==null?e.style.removeProperty(s):e.style.setProperty(s,i,r))}}function Cr(e,t,n,r){var s=e[to];if(s!==t){var i=xu(t,r);i==null?e.removeAttribute("style"):e.style.cssText=i,e[to]=t}else r&&(Array.isArray(r)?(Ua(e,n==null?void 0:n[0],r[0]),Ua(e,n==null?void 0:n[1],r[1],"important")):Ua(e,n,r));return r}function wl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function ni(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,kl(e,!n||"__value"in e))}function kl(e,t){var n=e.__defaultValue,r=e.multiple,s=r?n??[]:null;if(!(r&&!Sa(s))){var i=e.selectedIndex,a=t&&r?new Set(e.selectedOptions):null;for(var l of e.options){var c=Er(l);wl(l,r?s.includes(c):Yi(c,n))}if(t)if(a!==null)for(l of e.options){var d=a.has(l);l.selected!==d&&(l.selected=d)}else e.selectedIndex!==i&&(e.selectedIndex=i)}}function ms(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Sa(t))return ac();for(var r of e.options)r.selected=t.includes(Er(r));return}for(r of e.options){var s=Er(r);if(Yi(s,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function ps(e){var t=new MutationObserver(n=>{n.every(yu)||("__defaultValue"in e&&kl(e,!1),"__value"in e&&ms(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ta(()=>{t.disconnect()})}function ho(e,t,n=t){var r=new WeakSet,s=!0;Li(e,"change",i=>{var a=i?"[selected]":":checked",l;if(e.multiple)l=[].map.call(e.querySelectorAll(a),Er);else{var c=e.querySelector(a)??e.querySelector("option:not([disabled])");l=c&&Er(c)}n(l),e.__value=l,ee!==null&&r.add(ee)}),Na(()=>{var i=t();if(e===document.activeElement){var a=ee;if(r.has(a))return}if(ms(e,i,s),s&&i===void 0){var l=e.querySelector(":checked");l!==null&&(i=Er(l),n(i))}e.__value=i,s=!1})}function Er(e){return"__value"in e?e.__value:e.value}function yu(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const rs=Symbol("class"),ss=Symbol("style"),$l=Symbol("is custom element"),Sl=Symbol("is html"),wu=yo?"input":"INPUT",ku=yo?"option":"OPTION",Cl=yo?"select":"SELECT";function me(e,t,n,r){var s=El(e);s[t]!==(s[t]=n)&&(t==="loading"&&(e[Ul]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Tl(e).has(t)?e[t]=n:e.setAttribute(t,n))}function $u(e,t,n,r,s=!1,i=!1){var a=El(e),l=a[$l],c=!a[Sl],d=t||{},v=e.nodeName===ku,x=e.nodeName===Cl;for(var p in t)!(p in n)&&p[0]+p[1]!=="$$"&&(n[p]=null);n.class?n.class=yl(n.class):n[rs]&&(n.class=null),n[ss]&&(n.style??(n.style=null));var b=Tl(e);if(e.nodeName===wu&&"type"in n&&("value"in n||"__value"in n)){var y=n.type;(y!==d.type||y===void 0&&e.hasAttribute("type"))&&(d.type=y,me(e,"type",y))}for(const N in n){let C=n[N];if(v&&N==="value"&&C==null){e.value=e.__value="",d[N]=C;continue}if(N==="class"){var k=e.namespaceURI==="http://www.w3.org/1999/xhtml";lt(e,k,C,r,t==null?void 0:t[rs],n[rs]),d[N]=C,d[rs]=n[rs];continue}if(N==="style"){Cr(e,C,t==null?void 0:t[ss],n[ss]),d[N]=C,d[ss]=n[ss];continue}var S=d[N];if(!(C===S&&!(C===void 0&&e.hasAttribute(N)))){d[N]=C;var $=N[0]+N[1];if($!=="$$")if($==="on"){const M={},q="$$"+N;let te=N.slice(2);var R=qc(te);if(Uc(te)&&(te=te.slice(0,-7),M.capture=!0),!R&&S){if(C!=null)continue;e.removeEventListener(te,d[q],M),d[q]=null}if(R)O(te,e,C),At([te]);else if(C!=null){let L=function(B){d[N].call(this,B)};d[q]=_l(te,e,L,M)}}else if(N==="style")me(e,N,C);else if(N==="autofocus")Ri(e,!!C);else if(!l&&(N==="__value"||N==="value"&&C!=null))e.value=e.__value=C;else if(N==="selected"&&v)wl(e,C);else{var P=N;c||(P=Yc(P));var Y=P==="defaultValue"||P==="defaultChecked";if(x&&P==="defaultValue")continue;if(C==null&&!l&&!Y)if(a[N]=null,P==="value"||P==="checked"){let M=e;const q=t===void 0;if(P==="value"){let te=M.defaultValue;M.removeAttribute(P),M.defaultValue=te,M.value=M.__value=q?te:null}else{let te=M.defaultChecked;M.removeAttribute(P),M.defaultChecked=te,M.checked=q?te:!1}}else e.removeAttribute(N);else Y||(l||typeof C!="string")&&b.has(P)?(e[P]=C,P in a&&(a[P]=We)):typeof C!="function"&&me(e,P,C)}}}return d}function ri(e,t,n=[],r=[],s=[],i,a=!1,l=!1){Di(s,n,r,c=>{var d=void 0,v={},x=e.nodeName===Cl,p=!1;if(nl(()=>{var y=t(...c.map(o)),k=$u(e,d,y,i,a,l);if(p&&x){var S=e;"defaultValue"in y&&ni(S,y.defaultValue),"value"in y&&ms(S,y.value)}for(let R of Object.getOwnPropertySymbols(v))y[R]||et(v[R]);for(let R of Object.getOwnPropertySymbols(y)){var $=y[R];R.description===rc&&(!d||$!==d[R])&&(v[R]&&et(v[R]),v[R]=ht(()=>gu(e,()=>$))),k[R]=$}d=k}),x){var b=e;Na(()=>{var y=d;"defaultValue"in y&&ni(b,y.defaultValue),ms(b,y.value,!0),ps(b)})}p=!0})}function El(e){return e[aa]??(e[aa]={[$l]:e.nodeName.includes("-"),[Sl]:e.namespaceURI===Ti})}var si=new Map;function Tl(e){var t=e.getAttribute("is")||e.nodeName,n=si.get(t);if(n)return n;si.set(t,n=new Set);for(var r,s=e,i=Element.prototype;i!==s;){r=yi(s);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&n.add(a);s=mo(s)}return n}function Ze(e,t,n=t){var r=new WeakSet;Li(e,"input",async s=>{var i=s?e.defaultValue:e.value;if(i=Wa(e)?qa(i):i,n(i),ee!==null&&r.add(ee),await Kc(),i!==(i=t())){var a=e.selectionStart,l=e.selectionEnd,c=e.value.length;if(e.value=i??"",l!==null){var d=e.value.length;a===l&&l===c&&d>c?(e.selectionStart=d,e.selectionEnd=d):(e.selectionStart=a,e.selectionEnd=Math.min(l,d))}}}),yn(t)==null&&e.value&&(n(Wa(e)?qa(e.value):e.value),ee!==null&&r.add(ee)),No(()=>{var s=t();if(e===document.activeElement){var i=ee;if(r.has(i))return}Wa(e)&&s===qa(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Wa(e){var t=e.type;return t==="number"||t==="range"}function qa(e){return e===""?null:+e}function Ga(e,t){return e===t||(e==null?void 0:e[Qt])===t}function bs(e=wo(),t,n,r){var s=Ie.r,i=_e;return Na(()=>{var a,l;return No(()=>{a=l,l=[],yn(()=>{Ga(n(...l),e)||(t(e,...l),a&&Ga(n(...a),e)&&t(null,...a))})}),()=>{let c=i;for(;c!==s&&c.parent!==null&&c.parent.f&ha;)c=c.parent;const d=()=>{l&&Ga(n(...l),e)&&t(null,...l)},v=c.teardown;c.teardown=()=>{d(),v==null||v()}}}),e}function Nl(e=!1){const t=Ie,n=t.l.u;if(!n)return;let r=()=>Jn(t.s);if(e){let s=0,i={};const a=Lr(()=>{let l=!1;const c=t.s;for(const d in c)c[d]!==i[d]&&(i[d]=c[d],l=!0);return l&&s++,s});r=()=>o(a)}n.b.length&&Dc(()=>{ai(t,r),Za(n.b)}),nt(()=>{const s=yn(()=>n.m.map(Bl));return()=>{for(const i of s)typeof i=="function"&&i()}}),n.a.length&&nt(()=>{ai(t,r),Za(n.a)})}function ai(e,t){if(e.l.s)for(const n of e.l.s)o(n);t()}function Su(e){var t=bn(0);return function(){return arguments.length===1?(f(t,o(t)+1),arguments[0]):(o(t),e())}}const Cu={get(e,t){if(!e.exclude.includes(t))return o(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=_e;try{Pt(e.parent_effect),e.special[t]=Ve({get[t](){return e.props[t]}},t,Ei)}finally{Pt(r)}}return e.special[t](n),Wo(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),Wo(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function oe(e,t){return new Proxy({props:e,exclude:t,special:{},version:bn(0),parent_effect:_e},Cu)}const Eu={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(ts(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let s=e.props[r];ts(s)&&(s=s());const i=An(s,t);if(i&&i.set)return i.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(ts(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const s=An(r,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===Qt||t===Si)return!1;for(let n of e.props)if(ts(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(ts(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function de(...e){return new Proxy({props:e},Eu)}function Ve(e,t,n,r){var Y;var s=!Br||(n&Xl)!==0,i=(n&Zl)!==0,a=(n&Ql)!==0,l=r,c=!0,d=void 0,v=()=>a&&s?(d??(d=Lr(r)),o(d)):(c&&(c=!1,l=a?yn(r):r),l);let x;if(i){var p=Qt in e||Si in e;x=((Y=An(e,t))==null?void 0:Y.set)??(p&&t in e?N=>e[t]=N:void 0)}var b,y=!1;i?[b,y]=wc(()=>e[t]):b=e[t],b===void 0&&r!==void 0&&(b=v(),x&&(s&&hc(),x(b)));var k;if(s?k=()=>{var N=e[t];return N===void 0?v():(c=!0,N)}:k=()=>{var N=e[t];return N!==void 0&&(l=void 0),N===void 0?l:N},s&&(n&Ei)===0)return k;if(x){var S=e.$$legacy;return(function(N,C){return arguments.length>0?((!s||!C||S||y)&&x(C?k():N),N):k()})}var $=!1,R=((n&Jl)!==0?Lr:$o)(()=>($=!1,k()));i&&o(R);var P=_e;return(function(N,C){if(arguments.length>0){const M=C?o(R):s&&i?Me(N):N;return f(R,M),$=!0,l!==void 0&&(l=M),N}return xn&&$||(P.f&_t)!==0?R.v:o(R)})}function Wr(e){Ie===null&&Pi(),Br&&Ie.l!==null?Tu(Ie).m.push(e):nt(()=>{const t=yn(e);if(typeof t=="function")return t})}function Po(e){Ie===null&&Pi(),Wr(()=>()=>yn(e))}function Tu(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Nu="5";var bi;typeof window<"u"&&((bi=window.__svelte??(window.__svelte={})).v??(bi.v=new Set)).add(Nu);const Xn=()=>window.__IDE_BOOTSTRAP__||{};function zu(e){const{rootPath:t="",session:n=""}=Xn();return`${t}/api/sessions/${encodeURIComponent(n)}/ide${e}`}async function Be(e,t={}){const n=await fetch(zu(e),t),r=await n.json().catch(()=>({}));if(!n.ok){const s=new Error(r.error||"Request failed");throw Object.assign(s,r),s}return r}const qe=(e,t)=>`/ssh-connections/${encodeURIComponent(e)}${t}`,Ee={chat:async(e,t=80)=>{const{rootPath:n=""}=Xn(),r=`${n}/api/sessions/${encodeURIComponent(e)}/ide/chat?limit=${t}`,s=await fetch(r),i=await s.json().catch(()=>({}));if(!s.ok)throw new Error(i.error||"Could not load chat");return i},browse:async(e="")=>{const{rootPath:t=""}=Xn(),n=`${t}/api/ide/browse?path=${encodeURIComponent(e)}`,r=await fetch(n),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not browse folders");return s},sessionAgent:async e=>{const{rootPath:t=""}=Xn(),n=await fetch(`${t}/api/sessions/${encodeURIComponent(e)}/agent`),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Could not read agent settings");return r},setSessionAgent:async(e,t)=>{const{rootPath:n=""}=Xn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/agent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({agent:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not switch agent");return s},setSessionModel:async(e,t)=>{const{rootPath:n=""}=Xn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/model`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change model");return s},setSessionEffort:async(e,t)=>{const{rootPath:n=""}=Xn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/effort`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({effort:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change effort");return s},browseOn:(e,t="")=>Be(qe(e,`/browse?path=${encodeURIComponent(t)}`)),setWorkspaceRoot:(e,t,n)=>Be(qe(e,"/workspace-root"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({workspace_root:t,label:n})}),agentContext:e=>Be(qe(e,"/agent-context")),hostKey:e=>Be(qe(e,"/host-key")),trustHost:e=>Be(qe(e,"/host-key"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accept:!0})}),listConnections:()=>Be("/ssh-connections"),createConnection:e=>Be("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),deleteConnection:e=>Be(qe(e,""),{method:"DELETE"}),connect:(e,t)=>Be(qe(e,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t||""})}),status:e=>Be(qe(e,"/status?reconnect=1")),listFiles:(e,t)=>Be(qe(e,`/files?path=${encodeURIComponent(t)}`)),searchFiles:(e,t,n)=>Be(qe(e,`/files/search?path=${encodeURIComponent(t)}&query=${encodeURIComponent(n)}`)),readFile:(e,t)=>Be(qe(e,`/file?path=${encodeURIComponent(t)}`)),saveFile:(e,t,n)=>Be(qe(e,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t,content:n})}),fs:(e,t)=>Be(qe(e,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),git:(e,t)=>Be(qe(e,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),focusTerminal:e=>Be(qe(e,"/focus-terminal"),{method:"POST"}),listTerminals:e=>Be(qe(e,"/terminals")),closeTerminal:(e,t)=>Be(qe(e,`/terminals/${t}`),{method:"DELETE"}),getWorkspace:e=>Be(qe(e,"/workspace")),saveWorkspace:(e,t)=>Be(qe(e,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})};var Ss,Cs,Es,Ts,Ns,zs,Ms,Ps,As,Is,Os,Rs,Ls,Ds,Fs,Hs,js,Bs,Vs,Ks,Us,Ws,qs,Gs;class Mu{constructor(){K(this,Ss,A(Me([])));K(this,Cs,A(""));K(this,Es,A("idle"));K(this,Ts,A("Ready"));K(this,Ns,A("No file open"));K(this,zs,A("."));K(this,Ms,A(Me([])));K(this,Ps,A(Me({})));K(this,As,A(Me({})));K(this,Is,A(""));K(this,Os,A(Me([])));K(this,Rs,A(""));K(this,Ls,A(""));K(this,Ds,A(""));K(this,Fs,A(Me([])));K(this,Hs,A(""));K(this,js,A(!1));K(this,Bs,A(!1));K(this,Vs,A(0));K(this,Ks,A(0));K(this,Us,A(!1));K(this,Ws,A(""));K(this,qs,A(Me([])));K(this,Gs,A(!1));at(this,"restoredKey","");at(this,"persistTimer",null)}get connections(){return o(u(this,Ss))}set connections(t){f(u(this,Ss),t,!0)}get connectionId(){return o(u(this,Cs))}set connectionId(t){f(u(this,Cs),t,!0)}get connectionState(){return o(u(this,Es))}set connectionState(t){f(u(this,Es),t,!0)}get statusText(){return o(u(this,Ts))}set statusText(t){f(u(this,Ts),t,!0)}get detailText(){return o(u(this,Ns))}set detailText(t){f(u(this,Ns),t,!0)}get path(){return o(u(this,zs))}set path(t){f(u(this,zs),t,!0)}get entries(){return o(u(this,Ms))}set entries(t){f(u(this,Ms),t,!0)}get expanded(){return o(u(this,Ps))}set expanded(t){f(u(this,Ps),t,!0)}get treeChildren(){return o(u(this,As))}set treeChildren(t){f(u(this,As),t,!0)}get filter(){return o(u(this,Is))}set filter(t){f(u(this,Is),t,!0)}get tabs(){return o(u(this,Os))}set tabs(t){f(u(this,Os),t,!0)}get activeKey(){return o(u(this,Rs))}set activeKey(t){f(u(this,Rs),t,!0)}get gitOutput(){return o(u(this,Ls))}set gitOutput(t){f(u(this,Ls),t,!0)}get gitStatus(){return o(u(this,Ds))}set gitStatus(t){f(u(this,Ds),t,!0)}get gitBranches(){return o(u(this,Fs))}set gitBranches(t){f(u(this,Fs),t,!0)}get gitBranch(){return o(u(this,Hs))}set gitBranch(t){f(u(this,Hs),t,!0)}get needsHostKey(){return o(u(this,js))}set needsHostKey(t){f(u(this,js),t,!0)}get notARepo(){return o(u(this,Bs))}set notARepo(t){f(u(this,Bs),t,!0)}get gitAhead(){return o(u(this,Vs))}set gitAhead(t){f(u(this,Vs),t,!0)}get gitBehind(){return o(u(this,Ks))}set gitBehind(t){f(u(this,Ks),t,!0)}get gitHasUpstream(){return o(u(this,Us))}set gitHasUpstream(t){f(u(this,Us),t,!0)}get gitBusy(){return o(u(this,Ws))}set gitBusy(t){f(u(this,Ws),t,!0)}get gitCommits(){return o(u(this,qs))}set gitCommits(t){f(u(this,qs),t,!0)}get gitHistoryLoaded(){return o(u(this,Gs))}set gitHistoryLoaded(t){f(u(this,Gs),t,!0)}get connection(){return this.connections.find(t=>t.id===this.connectionId)||null}get activeTab(){return this.tabs.find(t=>t.key===this.activeKey)||null}get visibleEntries(){const t=this.filter.trim().toLowerCase();return t?this.entries.filter(n=>n.name.toLowerCase().includes(t)):this.entries}get dirtyCount(){return this.tabs.filter(t=>t.dirty).length}get gitDirtyCount(){return this.gitStatus.split(`
`).filter(t=>t.trim()&&!t.startsWith("##")).length}resetWorkspaceView(){this.tabs=[],this.activeKey="",this.restoredKey="",this.path=".",this.entries=[],this.expanded={},this.treeChildren={},this.filter="",this.gitOutput="",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.needsHostKey=!1,this.notARepo=!1,this.gitAhead=0,this.gitBehind=0,this.gitHasUpstream=!1,this.gitCommits=[],this.gitHistoryLoaded=!1}setStatus(t,n){this.statusText=t,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const t=await Ee.listConnections();this.connections=t.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(t){this.setStatus(t.message||"Could not load connections")}}async refreshStatus(){var t,n,r;if(this.connectionId)try{const s=await Ee.status(this.connectionId);s.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((t=this.connection)==null?void 0:t.label)||"SSH workspace"}`,`SSH terminal: ${s.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(s){this.connectionState="error",this.setStatus(s.message||"Could not check SSH connection")}}async connect(t){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await Ee.connect(this.connectionId,t);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect"),this.needsHostKey=!!r.needs_host_key}}}async refreshFiles(t){if(!this.connectionId)return;const n=t||this.path||".";try{const r=await Ee.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async toggleDirectory(t){if(this.expanded[t]){const n={...this.expanded};delete n[t],this.expanded=n;return}if(this.expanded={...this.expanded,[t]:!0},!this.treeChildren[t])try{const n=await Ee.listFiles(this.connectionId,t);this.treeChildren={...this.treeChildren,[t]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}openDiffTab(t,n){const r=`${this.connectionId}|diff:${t}`,s=this.tabs.find(a=>a.key===r);if(s)return s.content=n,s.saved=n,this.activeKey=r,s;const i={key:r,path:`${t} (diff)`,content:n,saved:n,dirty:!1,readOnly:!0,language:"plaintext"};return this.tabs=[...this.tabs,i],this.activeKey=r,i}async openFile(t){if(!this.connectionId)return null;const n=`${this.connectionId}|${t}`,r=this.tabs.find(s=>s.key===n);if(r)return this.activeKey=n,r;try{const s=await Ee.readFile(this.connectionId,t),i={key:`${this.connectionId}|${s.path}`,path:s.path,content:s.content||"",saved:s.content||"",dirty:!1};return this.tabs=[...this.tabs,i],this.activeKey=i.key,this.setStatus("Opened",i.path),this.remember(),i}catch(s){return this.setStatus(s.message||"Could not open remote file"),null}}updateContent(t,n){this.tabs=this.tabs.map(r=>r.key===t?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(t){var r;const n=this.tabs.find(s=>s.key===t);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(s=>s.key!==t),this.activeKey===t&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const t=this.activeTab;if(t)try{await Ee.saveFile(this.connectionId,t.path,t.content),this.tabs=this.tabs.map(n=>n.key===t.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${t.path}`,t.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const t=`${this.connectionId}`;if(!t)return;let n=null;try{n=await Ee.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===t)return;this.restoredKey=t;const r=(n==null?void 0:n.buffers)||{};for(const i of((n==null?void 0:n.tabs)||[]).slice(0,12)){const a=await this.openFile(i);a&&Object.prototype.hasOwnProperty.call(r,i)&&this.updateContent(a.key,r[i])}const s=this.tabs.find(i=>i.path===(n==null?void 0:n.active_path));s&&(this.activeKey=s.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const t={};for(const r of this.tabs)r.dirty&&(t[r.path]=r.content);try{await Ee.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:t})}catch{}}async runGit(t,n={}){try{const r=await Ee.git(this.connectionId,{action:t,path:this.path||".",...n});return r.not_a_repo?(this.gitOutput=r.error||"This folder is not a Git repository.",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.gitCommits=[],this.gitHistoryLoaded=!1,this.notARepo=!0,null):(this.notARepo=!1,this.gitAhead=r.ahead||0,this.gitBehind=r.behind||0,this.gitHasUpstream=!!r.has_upstream,t==="log"?(this.gitCommits=r.commits||[],this.gitHistoryLoaded=!0):t!=="show"&&(this.gitOutput=r.output||r.status||""),this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",["commit","switch","create_branch","pull","push","fetch"].includes(t)&&(this.gitHistoryLoaded=!1),r)}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}Ss=new WeakMap,Cs=new WeakMap,Es=new WeakMap,Ts=new WeakMap,Ns=new WeakMap,zs=new WeakMap,Ms=new WeakMap,Ps=new WeakMap,As=new WeakMap,Is=new WeakMap,Os=new WeakMap,Rs=new WeakMap,Ls=new WeakMap,Ds=new WeakMap,Fs=new WeakMap,Hs=new WeakMap,js=new WeakMap,Bs=new WeakMap,Vs=new WeakMap,Ks=new WeakMap,Us=new WeakMap,Ws=new WeakMap,qs=new WeakMap,Gs=new WeakMap;const _=new Mu;bc();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Pu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Au=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const oi=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var Iu=ml("<svg><!><!></svg>");function fe(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]),r=oe(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);ut(t,!1);let s=Ve(t,"name",8,void 0),i=Ve(t,"color",8,"currentColor"),a=Ve(t,"size",8,24),l=Ve(t,"strokeWidth",8,2),c=Ve(t,"absoluteStrokeWidth",8,!1),d=Ve(t,"iconNode",24,()=>[]);Nl();var v=Iu();ri(v,(b,y,k)=>({...Pu,...b,...r,width:a(),height:a(),stroke:i(),"stroke-width":y,class:k}),[()=>Au(r)?void 0:{"aria-hidden":"true"},()=>(Jn(c()),Jn(l()),Jn(a()),yn(()=>c()?Number(l())*24/Number(a()):l())),()=>(Jn(oi),Jn(s()),Jn(n),yn(()=>oi("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var x=m(v);Ke(x,1,d,bl,(b,y)=>{var k=tt(()=>Vl(o(y),2));let S=()=>o(k)[0],$=()=>o(k)[1];var R=Q(),P=V(R);_u(P,S,!0,(Y,N)=>{ri(Y,()=>({...$()}))}),g(b,R)});var p=h(x);ce(p,t,"default",{}),g(e,v),dt()}function Ou(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]];fe(e,de({name:"arrow-down-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function Ru(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];fe(e,de({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function ua(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];fe(e,de({name:"check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function gn(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];fe(e,de({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function da(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];fe(e,de({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function ii(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];fe(e,de({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function Lu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];fe(e,de({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function Du(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];fe(e,de({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function Fu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];fe(e,de({name:"circle-user"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function Hu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];fe(e,de({name:"circle"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function ju(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];fe(e,de({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function Bu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];fe(e,de({name:"corner-left-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function Vu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];fe(e,de({name:"ellipsis"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function Ku(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];fe(e,de({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function li(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 16-3 3 3 3"}],["path",{d:"m9 22 3-3-3-3"}]];fe(e,de({name:"file-code-corner"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function Uu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];fe(e,de({name:"file-diff"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function Wu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];fe(e,de({name:"file-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function Ao(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];fe(e,de({name:"file"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function qu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];fe(e,de({name:"files"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function Ya(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];fe(e,de({name:"folder-open"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function Gu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];fe(e,de({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function Yu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];fe(e,de({name:"folder"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function po(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];fe(e,de({name:"git-branch"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function Ju(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 16h.01"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{d:"M21.946 12.013H2.054"}],["path",{d:"M6 16h.01"}]];fe(e,de({name:"hard-drive"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function Xu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];fe(e,de({name:"history"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function Zu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];fe(e,de({name:"link-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function Zt(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];fe(e,de({name:"loader"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function ci(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];fe(e,de({name:"message-square"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function Qu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m14 10 7-7"}],["path",{d:"M20 10h-6V4"}],["path",{d:"m3 21 7-7"}],["path",{d:"M4 14h6v6"}]];fe(e,de({name:"minimize-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function ed(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}]];fe(e,de({name:"minus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function td(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];fe(e,de({name:"monitor-smartphone"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function nd(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];fe(e,de({name:"panel-bottom"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function rd(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];fe(e,de({name:"panel-left"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function xa(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];fe(e,de({name:"plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function _o(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];fe(e,de({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function Io(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];fe(e,de({name:"search"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function ui(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];fe(e,de({name:"server"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function sd(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];fe(e,de({name:"shield-alert"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function Ja(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];fe(e,de({name:"sparkles"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function di(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];fe(e,de({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function ad(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];fe(e,de({name:"square"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function fi(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];fe(e,de({name:"trash-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function od(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];fe(e,de({name:"undo-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}function ya(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];fe(e,de({name:"x"},()=>n,{get iconNode(){return r},children:(s,i)=>{var a=Q(),l=V(a);ce(l,t,"default",{}),g(s,a)},$$slots:{default:!0}}))}var id=z('<span class="w-[14px] shrink-0"></span>'),ld=ml('<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.5 3.5h4l1.2 1.4h7.8v7.6H1.5z" fill="#c09553"></path></svg>'),cd=z('<div role="treeitem" tabindex="0"><!> <span class="flex shrink-0 items-center"><!></span> <span class="flex-1 truncate text-vs-fg"> </span> <span class="hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Rename"><span class="text-[11px] leading-none">✎</span></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Delete"><span class="text-[11px] leading-none">🗑</span></button></span></div> <!>',1);function zl(e,t){ut(t,!0);const n=tt(()=>t.dir==="."?t.entry.name:`${t.dir}/${t.entry.name}`),r=tt(()=>!!_.expanded[o(n)]),s=tt(()=>_.treeChildren[o(n)]||[]),i=tt(()=>{var B;return((B=_.activeTab)==null?void 0:B.path)===o(n)});async function a(){t.entry.is_dir?await _.toggleDirectory(o(n)):await _.openFile(o(n))}async function l(B){if(B.stopPropagation(),!!confirm(`Delete ${o(n)}? Folders must already be empty.`))try{await Ee.fs(_.connectionId,{action:"delete",path:o(n)}),await _.refreshFiles()}catch(X){_.setStatus(X.message||"Could not delete")}}async function c(B){B.stopPropagation();const X=prompt("Rename to (relative path):",o(n));if(!(!X||X===o(n)))try{await Ee.fs(_.connectionId,{action:"rename",path:o(n),new_path:X}),await _.refreshFiles()}catch(ve){_.setStatus(ve.message||"Could not rename")}}var d=cd(),v=V(d);let x;var p=m(v);{var b=B=>{var X=Q(),ve=V(X);{var Te=Pe=>{gn(Pe,{size:14,class:"shrink-0 text-vs-muted"})},Ue=Pe=>{da(Pe,{size:14,class:"shrink-0 text-vs-muted"})};j(ve,Pe=>{o(r)?Pe(Te):Pe(Ue,-1)})}g(B,X)},y=B=>{var X=id();g(B,X)};j(p,B=>{t.entry.is_dir?B(b):B(y,-1)})}var k=h(p,2),S=m(k);{var $=B=>{var X=ld();g(B,X)},R=B=>{Zu(B,{size:14,class:"text-vs-muted"})},P=B=>{Ao(B,{size:14,class:"text-vs-blue"})};j(S,B=>{t.entry.is_dir?B($):t.entry.is_symlink?B(R,1):B(P,-1)})}var Y=h(k,2),N=Z(Y,!0),C=h(Y,2),M=m(C),q=h(M,2),te=h(v,2);{var L=B=>{var X=Q(),ve=V(X);Ke(ve,17,()=>o(s),Te=>Te.name,(Te,Ue)=>{{let Pe=tt(()=>t.depth+1);zl(Te,{get entry(){return o(Ue)},get dir(){return o(n)},get depth(){return o(Pe)}})}}),g(B,X)};j(te,B=>{t.entry.is_dir&&o(r)&&B(L)})}G(()=>{x=lt(v,1,"group flex cursor-pointer items-center gap-1 py-[2px] pr-1 text-[13px] hover:bg-vs-hover",null,x,{"bg-vs-active":o(i)}),Cr(v,`padding-left: ${8+t.depth*12}px`),me(v,"aria-expanded",t.entry.is_dir?o(r):void 0),me(v,"aria-selected",o(i)),me(v,"title",o(n)),W(N,t.entry.name),me(M,"aria-label",`Rename ${t.entry.name??""}`),me(q,"aria-label",`Delete ${t.entry.name??""}`)}),O("click",v,a),O("keydown",v,B=>{(B.key==="Enter"||B.key===" ")&&(B.preventDefault(),a())}),O("click",M,c),O("click",q,l),g(e,d),dt()}At(["click","keydown"]);var ud=z('<form class="px-2 pb-1"><input class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"/></form>'),dd=z('<p class="px-4 py-2 text-xs text-vs-muted">No folder opened.</p>'),fd=z('<p class="px-4 py-2 text-xs text-vs-muted">No files here</p>'),vd=z('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase"><span class="flex-1 truncate">Explorer</span></div> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase"><!> <span class="flex-1 truncate"> </span> <span class="flex opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"><!></button></span></div> <!> <input class="mx-2 mb-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none focus:border-vs-accent" placeholder="Filter files…"/> <div class="min-h-0 flex-1 overflow-y-auto pb-2"><!></div></div>');function hd(e,t){ut(t,!0);let n=A(""),r=A("");const s=(L,B)=>L==="."?B:`${L}/${B}`;async function i(L){L.preventDefault();const B=o(r).trim();if(B)try{await Ee.fs(_.connectionId,{action:o(n)==="dir"?"create_dir":"create_file",path:s(_.path,B)}),f(n,""),f(r,""),await _.refreshFiles()}catch(X){_.setStatus(X.message||"Could not create")}}const a=tt(()=>{var L,B;return(((L=_.connection)==null?void 0:L.workspace_root)||"").split("/").filter(Boolean).pop()||((B=_.connection)==null?void 0:B.label)||"WORKSPACE"});var l=vd(),c=h(m(l),2),d=m(c);gn(d,{size:14,class:"shrink-0 text-vs-muted"});var v=h(d,2),x=Z(v,!0),p=h(v,2),b=m(p),y=m(b);Wu(y,{size:14});var k=h(b,2),S=m(k);Gu(S,{size:14});var $=h(k,2),R=m($);_o(R,{size:13});var P=h(c,2);{var Y=L=>{var B=ud(),X=m(B);Ri(X,!0),G(()=>me(X,"placeholder",o(n)==="dir"?"New folder name":"New file name")),ur("submit",B,i),O("keydown",X,ve=>{ve.key==="Escape"&&f(n,"")}),ur("blur",X,()=>{o(r).trim()||f(n,"")}),Ze(X,()=>o(r),ve=>f(r,ve)),g(L,B)};j(P,L=>{o(n)&&L(Y)})}var N=h(P,2),C=h(N,2),M=m(C);{var q=L=>{var B=dd();g(L,B)},te=L=>{var B=Q(),X=V(B);Ke(X,17,()=>_.visibleEntries,ve=>ve.name,(ve,Te)=>{zl(ve,{get entry(){return o(Te)},get dir(){return _.path},depth:0})},ve=>{var Te=fd();g(ve,Te)}),g(L,B)};j(M,L=>{_.connectionId?L(te,-1):L(q)})}G(()=>{var L;me(v,"title",(L=_.connection)==null?void 0:L.workspace_root),W(x,o(a))}),O("click",b,()=>{f(n,"file"),f(r,"")}),O("click",k,()=>{f(n,"dir"),f(r,"")}),O("click",$,()=>_.refreshFiles()),Ze(N,()=>_.filter,L=>_.filter=L),g(e,l),dt()}At(["click","keydown"]);var pd=z('<div class="absolute top-full right-0 z-20 mt-1 min-w-[170px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"><button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Fetch</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Pull</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Push</button> <div class="my-1 h-px bg-vs-line"></div> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Create Branch…</button></div>'),_d=z('<p class="mx-3 flex items-center gap-1.5 text-xs text-vs-muted"><!> Reading repository…</p>'),gd=z(`<p class="mx-3 text-xs leading-relaxed text-vs-muted">This folder isn't a Git repository.<br/> Open a folder containing a <code class="rounded-sm bg-vs-input px-1">.git</code> directory,
      or run <code class="rounded-sm bg-vs-input px-1">git init</code> in the terminal.</p>`),md=z('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Unstage"><!></button></span> <span> </span></div>'),bd=z('<div class="flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Staged Changes</span></button> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!>',1),xd=z('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Open changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Discard changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Stage changes"><!></button></span> <span> </span></div>'),yd=z('<p class="px-6 py-2 text-xs text-vs-muted">No changes.</p>'),wd=z('<div class="min-h-0 flex-1 overflow-y-auto"></div>'),kd=z('<span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span>'),$d=z('<span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh history" aria-label="Refresh history"><!></button></span> <!>',1),Sd=z('<span class="shrink-0 rounded-sm bg-vs-line px-1 text-[10px] text-vs-blue"> </span>'),Cd=z('<div class="group flex cursor-pointer flex-col gap-0.5 py-1 pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><div class="flex min-w-0 items-center gap-1.5"><span class="truncate text-vs-fg"> </span> <!></div> <div class="flex min-w-0 items-center gap-1.5 text-[11px] text-vs-muted"><span class="shrink-0 font-mono text-vs-yellow"> </span> <span class="truncate"> </span> <span class="ml-auto shrink-0"> </span></div></div>'),Ed=z('<p class="px-6 py-2 text-xs text-vs-muted"> </p>'),Td=z('<div class="max-h-[45%] min-h-0 flex-1 overflow-y-auto"></div>'),Nd=z('<button class="flex items-center gap-1 rounded-sm px-1 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Pull then push"><!> </button>'),zd=z('<div class="flex gap-1 border-t border-vs-line px-3 py-2"><input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="New branch name"/> <button class="rounded-sm bg-vs-status px-2 py-1 text-xs text-white">Create</button></div>'),Md=z('<pre class="max-h-[120px] shrink-0 overflow-auto border-t border-vs-line px-3 py-1.5 text-[11px] whitespace-pre-wrap text-vs-muted"> </pre>'),Pd=z('<div class="px-3 pb-2"><textarea class="w-full resize-none rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs text-vs-fg outline-none focus:border-vs-accent placeholder:text-vs-muted" rows="2"></textarea> <button class="mt-1 flex w-full items-center justify-center gap-1.5 rounded-sm bg-vs-status px-2 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"><!> Commit</button></div> <!> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Changes</span></button> <span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh" aria-label="Refresh"><!></button> <button class="rounded-sm p-0.5 hover:bg-vs-line" title="Stage all changes" aria-label="Stage all"><!></button></span> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!> <div class="group flex shrink-0 items-center gap-1 border-t border-vs-line px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <!> <span class="truncate">History</span></button> <!></div> <!> <div class="mt-auto flex items-center gap-2 border-t border-vs-line px-3 py-1.5 text-[11px]"><span class="flex min-w-0 items-center gap-1 text-vs-muted" title="Current branch"><!> <span class="truncate"> </span></span> <!></div> <!> <!>',1),Ad=z('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase"><span class="flex-1">Source Control</span> <div class="relative" data-scm-menu=""><button class="rounded-sm p-0.5 hover:bg-vs-hover" title="More actions" aria-label="More actions"><!></button> <!></div></div> <!></div>');function Id(e,t){ut(t,!0);let n=A(""),r=A(""),s=A(!1),i=A(!0),a=A(!0),l=A(!1),c=A(!1);const d=tt(()=>(_.gitStatus||"").split(`
`).filter(D=>D&&!D.startsWith("##")).map(D=>{const ie=D.slice(3),ge=ie.indexOf(" -> "),Le=ge===-1?ie:ie.slice(ge+4);return{index:D[0]===" "?"":D[0],work:D[1]===" "?"":D[1],code:D.slice(0,2).trim()||"??",path:Le.replace(/\r$/,""),from:ge===-1?"":ie.slice(0,ge)}}).filter(D=>D.path)),v=tt(()=>o(d).filter(D=>D.index&&D.index!=="?")),x=tt(()=>o(d).filter(D=>D.work&&D.work!==" ")),p=D=>D.includes("?")||D.includes("A")?"text-vs-green":D.includes("D")?"text-vs-red":D.includes("R")?"text-vs-blue":"text-vs-yellow",b=D=>D.split("/").pop(),y=D=>{const ie=D.split("/");return ie.pop(),ie.join("/")};async function k(D,ie={}){_.gitBusy=D;try{return await _.runGit(D,ie)}finally{_.gitBusy=""}}async function S(){if(!o(n).trim()||!o(v).length)return;await k("commit",{message:o(n).trim()})&&f(n,"")}async function $(){if(!o(r).trim())return;await k("create_branch",{branch:o(r).trim()})&&(f(r,""),f(s,!1))}async function R(D){confirm(`Discard changes in ${D.path}? This cannot be undone.`)&&await k("discard",{files:[D.path]})}async function P(D){const ie=await _.runGit("diff_file",{files:[D.path]});ie&&_.openDiffTab(D.path,ie.output||"No changes to show.")}let Y=A("");nt(()=>{const D=_.connectionId,ie=_.connectionState,ge=D?`${D}|${ie}`:"";!D||ie!=="connected"||o(Y)!==ge&&(f(Y,ge,!0),k("status"))});async function N(){f(l,!o(l)),o(l)&&!_.gitHistoryLoaded&&await k("log")}nt(()=>{o(l)&&!_.gitHistoryLoaded&&!_.notARepo&&!_.gitBusy&&k("log")});async function C(D){const ie=await _.runGit("show",{ref:D.hash});ie&&_.openDiffTab(`${D.short} ${D.subject}`,ie.output||"Empty commit.")}const M=D=>(D||"").split(",").map(ie=>ie.trim().replace(/^HEAD -> /,"")).filter(Boolean);function q(D){D.key==="Enter"&&(D.ctrlKey||D.metaKey)&&(D.preventDefault(),S())}var te=Ad();ur("click",_s,D=>{var ie,ge;(ge=(ie=D.target).closest)!=null&&ge.call(ie,"[data-scm-menu]")||f(c,!1)});var L=m(te),B=h(m(L),2),X=m(B),ve=m(X);Vu(ve,{size:14});var Te=h(X,2);{var Ue=D=>{var ie=pd(),ge=m(ie),Le=h(ge,2),Xe=h(Le,2),kt=h(Xe,4);O("click",ge,()=>{f(c,!1),k("fetch")}),O("click",Le,()=>{f(c,!1),k("pull")}),O("click",Xe,()=>{f(c,!1),k("push")}),O("click",kt,()=>{f(c,!1),f(s,!o(s))}),g(D,ie)};j(Te,D=>{o(c)&&D(Ue)})}var Pe=h(L,2);{var rt=D=>{var ie=_d(),ge=m(ie);Zt(ge,{size:12,class:"animate-spin"}),g(D,ie)},he=D=>{var ie=gd();g(D,ie)},pe=D=>{var ie=Pd(),ge=V(ie),Le=m(ge),Xe=h(Le,2),kt=m(Xe);{var rn=F=>{Zt(F,{size:12,class:"animate-spin"})},Vt=F=>{ua(F,{size:12})};j(kt,F=>{_.gitBusy==="commit"?F(rn):F(Vt,-1)})}var Ln=h(ge,2);{var dr=F=>{var ne=bd(),se=V(ne),U=m(se),le=m(U);{var Se=J=>{gn(J,{size:14,class:"text-vs-muted"})},be=J=>{da(J,{size:14,class:"text-vs-muted"})};j(le,J=>{o(a)?J(Se):J(be,-1)})}var Oe=h(U,2),w=Z(Oe,!0),T=h(se,2);{var I=J=>{var ae=Q(),$e=V(ae);Ke($e,17,()=>o(v),ye=>ye.path,(ye,we)=>{var Ne=md(),Ce=m(Ne),De=Z(Ce,!0),gt=h(Ce,2),ft=Z(gt,!0),ln=h(gt,2),En=m(ln),It=m(En);ed(It,{size:13});var Wn=h(ln,2),cn=Z(Wn,!0);G((un,Tn,Qr)=>{me(Ne,"title",o(we).path),W(De,un),W(ft,Tn),me(En,"aria-label",`Unstage ${o(we).path??""}`),lt(Wn,1,`shrink-0 font-mono text-[11px] ${Qr??""}`),W(cn,o(we).index||o(we).code)},[()=>b(o(we).path),()=>y(o(we).path),()=>p(o(we).code)]),O("click",Ne,()=>P(o(we))),O("keydown",Ne,un=>{un.key==="Enter"&&P(o(we))}),O("click",En,un=>{un.stopPropagation(),k("unstage",{files:[o(we).path]})}),g(ye,Ne)}),g(J,ae)};j(T,J=>{o(a)&&J(I)})}G(()=>W(w,o(v).length)),O("click",U,()=>f(a,!o(a))),g(F,ne)};j(Ln,F=>{o(v).length&&F(dr)})}var sn=h(Ln,2),wn=m(sn),kn=m(wn);{var $n=F=>{gn(F,{size:14,class:"text-vs-muted"})},fr=F=>{da(F,{size:14,class:"text-vs-muted"})};j(kn,F=>{o(i)?F($n):F(fr,-1)})}var Dn=h(wn,2),an=m(Dn),vr=m(an);_o(vr,{size:12});var hr=h(an,2),Sn=m(hr);xa(Sn,{size:13});var qr=h(Dn,2),pr=Z(qr,!0),_r=h(sn,2);{var Kt=F=>{var ne=wd();Ke(ne,21,()=>o(x),se=>se.path,(se,U)=>{var le=xd(),Se=m(le),be=Z(Se,!0),Oe=h(Se,2),w=Z(Oe,!0),T=h(Oe,2),I=m(T),J=m(I);Uu(J,{size:13});var ae=h(I,2),$e=m(ae);od($e,{size:13});var ye=h(ae,2),we=m(ye);xa(we,{size:13});var Ne=h(T,2),Ce=Z(Ne,!0);G((De,gt,ft)=>{me(le,"title",o(U).path),W(be,De),W(w,gt),me(I,"aria-label",`Open changes to ${o(U).path??""}`),me(ae,"aria-label",`Discard changes to ${o(U).path??""}`),me(ye,"aria-label",`Stage ${o(U).path??""}`),lt(Ne,1,`shrink-0 font-mono text-[11px] ${ft??""}`),W(Ce,o(U).work||o(U).code)},[()=>b(o(U).path),()=>y(o(U).path),()=>p(o(U).code)]),O("click",le,()=>P(o(U))),O("keydown",le,De=>{De.key==="Enter"&&P(o(U))}),O("click",I,De=>{De.stopPropagation(),P(o(U))}),O("click",ae,De=>{De.stopPropagation(),R(o(U))}),O("click",ye,De=>{De.stopPropagation(),k("stage",{files:[o(U).path]})}),g(se,le)},se=>{var U=yd();g(se,U)}),g(F,ne)};j(_r,F=>{o(i)&&F(Kt)})}var gr=h(_r,2),on=m(gr),Cn=m(on);{var mr=F=>{gn(F,{size:14,class:"text-vs-muted"})},Gr=F=>{da(F,{size:14,class:"text-vs-muted"})};j(Cn,F=>{o(l)?F(mr):F(Gr,-1)})}var Yr=h(Cn,2);Xu(Yr,{size:12,class:"shrink-0 text-vs-muted"});var Jr=h(on,2);{var Fn=F=>{var ne=$d(),se=V(ne),U=m(se),le=m(U);{var Se=T=>{Zt(T,{size:12,class:"animate-spin"})},be=T=>{_o(T,{size:12})};j(le,T=>{_.gitBusy==="log"?T(Se):T(be,-1)})}var Oe=h(se,2);{var w=T=>{var I=kd(),J=Z(I,!0);G(()=>W(J,_.gitCommits.length)),g(T,I)};j(Oe,T=>{_.gitCommits.length&&T(w)})}O("click",U,()=>k("log")),g(F,ne)};j(Jr,F=>{o(l)&&F(Fn)})}var Hn=h(gr,2);{var br=F=>{var ne=Td();Ke(ne,21,()=>_.gitCommits,se=>se.hash,(se,U)=>{var le=Cd(),Se=m(le),be=m(Se),Oe=Z(be,!0),w=h(be,2);Ke(w,17,()=>M(o(U).refs),bl,(Ne,Ce)=>{var De=Sd(),gt=Z(De,!0);G(()=>W(gt,o(Ce))),g(Ne,De)});var T=h(Se,2),I=m(T),J=Z(I,!0),ae=h(I,2),$e=Z(ae,!0),ye=h(ae,2),we=Z(ye,!0);G(()=>{me(le,"title",`${o(U).short} · ${o(U).author} · ${o(U).date}`),W(Oe,o(U).subject),W(J,o(U).short),W($e,o(U).author),W(we,o(U).relative)}),O("click",le,()=>C(o(U))),O("keydown",le,Ne=>{Ne.key==="Enter"&&C(o(U))}),g(se,le)},se=>{var U=Ed(),le=Z(U,!0);G(()=>W(le,_.gitBusy==="log"?"Loading history…":"No commits yet.")),g(se,U)}),g(F,ne)};j(Hn,F=>{o(l)&&F(br)})}var jn=h(Hn,2),Bn=m(jn),Vn=m(Bn);po(Vn,{size:12,class:"shrink-0"});var Xr=h(Vn,2),Kn=Z(Xr,!0),xr=h(Bn,2);{var Zr=F=>{var ne=Nd(),se=m(ne);{var U=be=>{Zt(be,{size:11,class:"animate-spin"})},le=be=>{Ou(be,{size:11})};j(se,be=>{_.gitBusy==="pull"||_.gitBusy==="push"?be(U):be(le,-1)})}var Se=h(se);G(()=>W(Se,` ${_.gitBehind??""}↓ ${_.gitAhead??""}↑`)),O("click",ne,()=>k("pull").then(()=>k("push"))),g(F,ne)};j(xr,F=>{_.gitHasUpstream&&F(Zr)})}var Un=h(jn,2);{var E=F=>{var ne=zd(),se=m(ne),U=h(se,2);O("keydown",se,le=>{le.key==="Enter"&&$(),le.key==="Escape"&&f(s,!1)}),Ze(se,()=>o(r),le=>f(r,le)),O("click",U,$),g(F,ne)};j(Un,F=>{o(s)&&F(E)})}var H=h(Un,2);{var re=F=>{var ne=Md(),se=Z(ne,!0);G(()=>W(se,_.gitOutput)),g(F,ne)};j(H,F=>{_.gitOutput&&F(re)})}G(F=>{me(Le,"placeholder",`Message (Ctrl+Enter to commit on "${_.gitBranch||"branch"}")`),Xe.disabled=F,me(Xe,"title",o(v).length?"Commit staged changes":"Stage a change first"),W(pr,o(x).length),W(Kn,_.gitBranch||"—")},[()=>!o(n).trim()||!o(v).length||_.gitBusy==="commit"]),O("keydown",Le,q),Ze(Le,()=>o(n),F=>f(n,F)),O("click",Xe,S),O("click",wn,()=>f(i,!o(i))),O("click",an,()=>k("status")),O("click",hr,()=>k("stage",{files:["."]})),O("click",on,N),g(D,ie)};j(Pe,D=>{!o(Y)||_.gitBusy==="status"&&!_.gitStatus&&!_.notARepo?D(rt):_.notARepo?D(he,1):D(pe,-1)})}O("click",X,()=>f(c,!o(c))),g(e,te),dt()}At(["click","keydown"]);const Od="modulepreload",Rd=function(e,t){return new URL(e,t).href},vi={},fa=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let a=function(v){return Promise.all(v.map(x=>Promise.resolve(x).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(n.map(v=>{if(v=Rd(v,r),v in vi)return;vi[v]=!0;const x=v.endsWith(".css"),p=x?'[rel="stylesheet"]':"";if(!!r)for(let k=l.length-1;k>=0;k--){const S=l[k];if(S.href===v&&(!x||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${v}"]${p}`))return;const y=document.createElement("link");if(y.rel=x?"stylesheet":Od,x||(y.as="script"),y.crossOrigin="",y.href=v,d&&y.setAttribute("nonce",d),document.head.appendChild(y),x)return new Promise((k,S)=>{y.addEventListener("load",k),y.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${v}`)))})}))}function i(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},ds={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},Ld={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function Dd(e){var n;const t=(e||"").split("/").pop()||"";return t.toLowerCase()==="dockerfile"?"dockerfile":t.toLowerCase()==="makefile"?"shell":Ld[(n=t.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var Fd=z('<div class="editor svelte-1h8xysy"></div>');function Hd(e,t){ut(t,!0);let n,r=null,s=null,i="",a=!1;Wr(async()=>{s=await fa(()=>import("./ide-monaco.js").then(c=>c.a),__vite__mapDeps([0,1]),import.meta.url),s.editor.defineTheme("monokai",ds),r=s.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{a||!i||_.updateContent(i,r.getValue())}),r.addCommand(s.KeyMod.CtrlCmd|s.KeyCode.KeyS,()=>_.saveActive())}),Po(()=>r==null?void 0:r.dispose()),nt(()=>{const c=_.activeTab;if(!(!r||!s)){if(!c){a=!0,r.setValue(""),i="",a=!1;return}if(c.key!==i){a=!0;const d=s.editor.createModel(c.content,c.language||Dd(c.path)),v=r.getModel();r.setModel(d),v==null||v.dispose(),r.updateOptions({readOnly:!!c.readOnly}),i=c.key,a=!1}else r.getValue()!==c.content&&(a=!0,r.setValue(c.content),a=!1)}});var l=Fd();bs(l,c=>n=c,()=>n),g(e,l),dt()}var zn=Su(()=>_),jd=z('<span class="h-2 w-2 rounded-full bg-vs-fg group-hover:hidden"></span> <!>',1),Bd=z('<div><button class="flex items-center gap-1.5 py-2 pr-1 pl-3" role="tab"><!> <span class="whitespace-nowrap"> </span></button> <button class="mr-1.5 flex h-5 w-5 items-center justify-center rounded-sm hover:bg-vs-line"><!></button></div>'),Vd=z('<div class="px-3 py-2 text-xs text-vs-muted">Open a file from the Explorer</div>'),Kd=z('<div class="flex min-h-[35px] items-stretch overflow-x-auto bg-vs-tabinactive" role="tablist"></div>');function Ud(e,t){ut(t,!1);const n=s=>s.split("/").pop();Nl();var r=Kd();Ke(r,5,()=>zn().tabs,s=>s.key,(s,i)=>{var a=Bd();let l;var c=m(a),d=m(c);Ao(d,{size:14,class:"shrink-0 text-vs-blue"});var v=h(d,2),x=Z(v,!0),p=h(c,2),b=m(p);{var y=S=>{var $=jd(),R=h(V($),2);ya(R,{size:14,class:"hidden group-hover:block"}),g(S,$)},k=S=>{ya(S,{size:14,class:"opacity-0 group-hover:opacity-100"})};j(b,S=>{o(i).dirty?S(y):S(k,-1)})}G((S,$)=>{l=lt(a,1,"group flex items-center border-r border-vs-bg text-[13px]",null,l,{"bg-vs-tabactive":o(i).key===zn().activeKey,"text-vs-bright":o(i).key===zn().activeKey,"text-vs-muted":o(i).key!==zn().activeKey}),me(c,"aria-selected",o(i).key===zn().activeKey),me(c,"title",o(i).path),W(x,S),me(p,"title",o(i).dirty?"Unsaved changes — close":"Close"),me(p,"aria-label",`Close ${$??""}`)},[()=>n(o(i).path),()=>n(o(i).path)]),O("click",c,()=>zn(zn().activeKey=o(i).key)),O("click",p,()=>zn().closeTab(o(i).key)),g(s,a)},s=>{var i=Vd();g(s,i)}),g(e,r),dt()}At(["click"]);var Wd=z("<option> </option>"),qd=z('<p class="rounded-sm border border-mk-pink/40 bg-mk-pink/10 px-2 py-1 text-xs text-mk-pink"> </p>'),Gd=z('<div class="flex flex-col gap-1.5"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green"><!> </span> <div class="chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"></div></div>'),Yd=z('<div class="flex flex-col gap-1.5 border-l-2 border-mk-blue/60 pl-2.5"><span class="text-[11px] font-semibold text-mk-blue">You</span> <div class="text-[13px] leading-relaxed whitespace-pre-wrap text-mk-fg/90"> </div></div>'),Jd=z(`<div class="m-auto flex max-w-[250px] flex-col items-center gap-2.5 text-center"><!> <p class="text-xs leading-relaxed text-mk-comment">Ask about the file you have open. The prompt goes to <span class="text-mk-muted"> </span>,
            and the reply appears here.</p></div>`),Xd=z('<div class="flex items-center gap-2 text-[11px] text-mk-comment"><!> </div>'),Zd=z(`<span title="Context used of the model's window"> </span> <span class="h-2 w-16 overflow-hidden rounded-full bg-mk-line" aria-hidden="true"><span></span></span>`,1),Qd=z('<span title="Estimated cost"> </span>'),ef=z('<div class="flex shrink-0 items-center gap-2 border-t border-mk-line px-3 py-1 text-[10px] text-mk-comment"><!> <span title="Total tokens this session"> </span> <!> <button class="ml-auto flex items-center gap-1 rounded-sm px-1.5 py-0.5 hover:bg-mk-line hover:text-mk-fg disabled:opacity-40" title="Compact the conversation to free up context (/compact)"><!> Compact</button></div>'),hi=z('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line"><span class="w-3 text-mk-green"><!></span> </button>'),tf=z('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[150px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl"></div>'),nf=z('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line"><span class="w-3 text-mk-green"><!></span> <span class="truncate"> </span></button>'),rf=z('<div class="absolute bottom-full left-0 z-20 mb-1 max-h-[260px] min-w-[190px] overflow-y-auto rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl"></div>'),sf=z('<div class="relative" data-menu=""><button class="flex max-w-[110px] items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg" title="Model"><span class="truncate"> </span> <!></button> <!></div>'),af=z('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[130px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl"></div>'),of=z('<div class="relative" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg" title="Reasoning effort"> <!></button> <!></div>'),lf=z('<div class="flex h-full min-h-0 flex-col bg-mk-bg text-mk-fg"><div class="flex items-center gap-2 border-b border-mk-line px-3 py-1.5"><!> <span class="text-[11px] font-semibold tracking-wide text-mk-muted uppercase">AI Agent</span> <select class="ml-auto min-w-0 max-w-[55%] truncate rounded-sm border border-mk-line bg-mk-input px-1.5 py-0.5 text-[11px] text-mk-fg outline-none focus:border-mk-green" title="Agent session that answers"></select></div> <div class="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-3 py-3"><!> <!> <!></div> <!> <div class="border-t border-mk-line p-2"><div class="rounded-md border border-mk-line bg-mk-input focus-within:border-mk-green"><textarea rows="2" class="max-h-[200px] w-full resize-none bg-transparent px-2.5 py-2 text-[13px] text-mk-fg outline-none placeholder:text-mk-comment" placeholder="Ask about this workspace…"></textarea> <div class="flex items-center gap-1 px-1.5 pb-1.5 text-[11px]"><div class="relative" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg" title="Agent"> <!></button> <!></div> <!> <!> <!> <span class="ml-auto flex items-center gap-1.5"><kbd class="hidden text-[10px] text-mk-comment sm:inline">↵ send · ⇧↵ newline</kbd> <button class="flex h-6 w-6 items-center justify-center rounded-md bg-mk-green text-mk-bg disabled:opacity-40" title="Send (Enter)" aria-label="Send"><!></button></span></div></div></div></div>');function cf(e,t){ut(t,!0);let n=Ve(t,"sessions",19,()=>[]),r=Ve(t,"session",3,""),s=Ve(t,"rootPath",3,""),i=A(""),a=A(Me(r()||n()[0]||"")),l=A(!1),c=0,d=A(!1),v=A("");const x=tt(()=>o(l)||o(d));let p=A(Me([])),b=A(""),y=A(null),k=A(null),S=null,$=A(Me({agent:"codex",available:[],model:"",effort:"",models:[],efforts:[]})),R=A(""),P=A("");const Y=tt(()=>(o($).models.find(E=>E[0]===o($).model)||[])[1]||o($).model||"default");let N=A("");async function C(){if(!_.connectionId){f(N,"");return}try{f(N,(await Ee.agentContext(_.connectionId)).context||"",!0)}catch{f(N,"")}}nt(()=>{_.connectionId,C()});async function M(){if(o(a))try{f($,{agent:"codex",available:[],model:"",effort:"",models:[],efforts:[],...await Ee.sessionAgent(o(a))},!0)}catch(E){f($,{agent:o($).agent,available:[],model:"",effort:"",models:[],efforts:[]},!0),_.setStatus(E.message||"Could not read agent settings")}}async function q(){if(o(a))try{const E=await Ee.chat(o(a)),H=E.messages||[],re=H.length!==o(p).length;f(p,H,!0),f(d,!!E.busy),f(v,E.detail||"",!0),f(b,""),re&&queueMicrotask(B)}catch(E){f(b,E.message||"Could not load chat",!0)}}const te=3e3,L=1e3;nt(()=>{const E=o(x)?L:te;!o(a)||c===E||(c=E,clearInterval(S),S=setInterval(q,E))});function B(){o(y)&&(o(y).scrollTop=o(y).scrollHeight)}nt(()=>{const E=o(a);f(p,[],!0),S&&clearInterval(S),c=0,E&&(q(),M())}),Po(()=>{S&&clearInterval(S)});async function X(E){if(f(R,""),E!==o($).agent){f(P,"agent");try{await Ee.setSessionAgent(o(a),E),await M(),_.setStatus(`Switched to ${E}`)}catch(H){_.setStatus(H.message||"Could not switch agent")}finally{f(P,"")}}}async function ve(E){if(f(R,""),E!==o($).model){f(P,"model");try{await Ee.setSessionModel(o(a),E),await M(),_.setStatus(`Model set to ${E}`)}catch(H){_.setStatus(H.message||"Could not change model")}finally{f(P,"")}}}async function Te(E){if(f(R,""),E!==o($).effort){f(P,"effort");try{await Ee.setSessionEffort(o(a),E),await M(),_.setStatus(`Reasoning effort set to ${E}`)}catch(H){_.setStatus(H.message||"Could not change effort")}finally{f(P,"")}}}function Ue(){const E=_.connection||{},H=_.activeTab,re=H?H.path:_.path||".",F=H?`
Active file contents (first 12,000 characters):
${H.content.slice(0,12e3)}`:"";return`${o(N)||(E.kind==="local"?`[IDE workspace]
Local folder: ${E.workspace_root||"."}
`:`[IDE workspace]
SSH target: ${E.username||"?"}@${E.host||"?"}
`)}
Currently open: ${re}${F}

${o(i).trim()}`}async function Pe(){const E=o(i).trim();if(!E||!o(a)||o(l))return;const H=Ue();f(l,!0);try{const re=await fetch(`${s()}/api/sessions/${encodeURIComponent(o(a))}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:H})}),F=await re.json().catch(()=>({}));if(!re.ok)throw new Error(F.error||"Could not send");f(i,""),o(k)&&(o(k).style.height="auto"),f(p,[...o(p),{role:"user",text:E,ts:Date.now()/1e3,_local:!0}],!0),queueMicrotask(B),setTimeout(q,1200)}catch(re){_.setStatus(re.message||"Could not send prompt")}finally{f(l,!1)}}function rt(E){E.key==="Enter"&&!E.shiftKey&&(E.preventDefault(),Pe())}function he(E){const H=E.currentTarget;H.style.height="auto",H.style.height=`${Math.min(H.scrollHeight,200)}px`}const pe=E=>E.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function D(E){const H=[];return pe(E).replace(/```(\w*)\n?([\s\S]*?)```/g,(ne,se,U)=>(H.push(`<pre class="chat-code"><code>${U.replace(/\n$/,"")}</code></pre>`),`\0BLOCK${H.length-1}\0`)).replace(/`([^`\n]+)`/g,'<code class="chat-inline">$1</code>').replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>").split(`
`).map(ne=>{const se=ne.match(/^\s*[-*]\s+(.*)$/);return se?`<span class="chat-li">${se[1]}</span>`:ne}).join(`
`).replace(/\u0000BLOCK(\d+)\u0000/g,(ne,se)=>H[Number(se)])}function ie(E){const H=E.full||E.text||"",re=`

`;if(H.startsWith("[IDE workspace")||H.startsWith("[Remote IDE context]")||H.startsWith("[Remote SSH IDE context]")){const F=H.lastIndexOf(re);if(F!==-1)return H.slice(F+re.length)}return H}let ge=A(null),Le=A(!1),Xe=null;async function kt(){if(o(a))try{const H=await(await fetch(`${s()}/api/sessions/${encodeURIComponent(o(a))}/stats`)).json().catch(()=>({}));f(ge,H&&H.available?H:null,!0)}catch{f(ge,null)}}nt(()=>(o(a),kt(),clearInterval(Xe),Xe=setInterval(kt,2e4),()=>clearInterval(Xe)));async function rn(){if(!(!o(a)||o(Le))){f(Le,!0);try{const E=await fetch(`${s()}/api/sessions/${encodeURIComponent(o(a))}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:"/compact"})}),H=await E.json().catch(()=>({}));if(!E.ok)throw new Error(H.error||"Could not compact");setTimeout(kt,4e3)}catch(E){_.setStatus(E.message||"Could not compact context")}finally{f(Le,!1)}}}const Vt=E=>{const H=Number(E)||0;return H>=1e6?`${(H/1e6).toFixed(1)}M`:H>=1e3?`${(H/1e3).toFixed(1)}k`:String(H)},Ln=E=>E>=90?"text-vs-red":E>=70?"text-vs-yellow":"text-vs-muted";var dr=lf();ur("click",_s,E=>{var H,re;(re=(H=E.target).closest)!=null&&re.call(H,"[data-menu]")||f(R,"")});var sn=m(dr),wn=m(sn);Ja(wn,{size:13,class:"shrink-0 text-mk-green"});var kn=h(wn,4);Ke(kn,20,n,E=>E,(E,H)=>{var re=Wd(),F=Z(re,!0),ne={};G(()=>{W(F,H),ne!==(ne=H)&&(re.value=(re.__value=ne)??"")}),g(E,re)}),ps(kn);var $n=h(sn,2),fr=m($n);{var Dn=E=>{var H=qd(),re=Z(H,!0);G(()=>W(re,o(b))),g(E,H)};j(fr,E=>{o(b)&&E(Dn)})}var an=h(fr,2);Ke(an,19,()=>o(p),(E,H)=>E.ts+":"+H,(E,H)=>{var re=Q(),F=V(re);{var ne=U=>{var le=Gd(),Se=m(le),be=m(Se);Ja(be,{size:11});var Oe=h(be),w=h(Se,2);pu(w,()=>D(ie(o(H))),!0),G(()=>W(Oe,` ${o($).agent==="claude"?"Claude":"Codex"}`)),g(U,le)},se=U=>{var le=Yd(),Se=h(m(le),2),be=Z(Se,!0);G(Oe=>W(be,Oe),[()=>ie(o(H))]),g(U,le)};j(F,U=>{o(H).role==="assistant"?U(ne):U(se,-1)})}g(E,re)},E=>{var H=Q(),re=V(H);{var F=ne=>{var se=Jd(),U=m(se);Ja(U,{size:26,strokeWidth:1.3,class:"text-mk-line"});var le=h(U,2),Se=h(m(le)),be=Z(Se,!0);G(()=>W(be,o(a)||"the selected session")),g(ne,se)};j(re,ne=>{o(b)||ne(F)})}g(E,H)});var vr=h(an,2);{var hr=E=>{var H=Xd(),re=m(H);Zt(re,{size:11,class:"animate-spin"});var F=h(re);G(()=>W(F,` ${(o(v)||"Working…")??""}`)),g(E,H)};j(vr,E=>{o(x)&&E(hr)})}bs($n,E=>f(y,E),()=>o(y));var Sn=h($n,2);{var qr=E=>{var H=ef(),re=m(H);{var F=T=>{var I=Zd(),J=V(I),ae=Z(J),$e=h(J,2),ye=Z($e);G((we,Ne)=>{lt(J,1,we,"svelte-1roe1v9"),W(ae,`${o(ge).contextPct??0??""}% context`),lt(ye,1,`block h-full rounded-full ${(o(ge).contextPct||0)>=90?"bg-vs-red":(o(ge).contextPct||0)>=70?"bg-vs-yellow":"bg-mk-green"}`),Cr(ye,`width: ${Ne??""}%`)},[()=>yl(Ln(o(ge).contextPct||0)),()=>Math.min(100,Math.max(0,o(ge).contextPct||0))]),g(T,I)};j(re,T=>{o(ge).ctxWindowSize&&T(F)})}var ne=h(re,2),se=Z(ne),U=h(ne,2);{var le=T=>{var I=Qd(),J=Z(I);G(ae=>W(J,`$${ae??""}`),[()=>Number(o(ge).estimatedCost).toFixed(2)]),g(T,I)};j(U,T=>{o(ge).estimatedCost&&T(le)})}var Se=h(U,2),be=m(Se);{var Oe=T=>{Zt(T,{size:10,class:"animate-spin"})},w=T=>{Qu(T,{size:10})};j(be,T=>{o(Le)?T(Oe):T(w,-1)})}G(T=>{W(se,`${T??""} tokens`),Se.disabled=o(Le)},[()=>Vt(o(ge).totalTokens)]),O("click",Se,rn),g(E,H)};j(Sn,E=>{o(ge)&&E(qr)})}var pr=h(Sn,2),_r=m(pr),Kt=m(_r);bs(Kt,E=>f(k,E),()=>o(k));var gr=h(Kt,2),on=m(gr),Cn=m(on),mr=m(Cn),Gr=h(mr);gn(Gr,{size:11});var Yr=h(Cn,2);{var Jr=E=>{var H=tf();Ke(H,20,()=>o($).available.length?o($).available:["codex"],re=>re,(re,F)=>{var ne=hi(),se=m(ne),U=m(se);{var le=be=>{ua(be,{size:11})};j(U,be=>{F===o($).agent&&be(le)})}var Se=h(se);G(()=>W(Se,` ${F==="claude"?"Claude":"Codex"}`)),O("click",ne,()=>X(F)),g(re,ne)}),g(E,H)};j(Yr,E=>{o(R)==="agent"&&E(Jr)})}var Fn=h(on,2);{var Hn=E=>{var H=sf(),re=m(H),F=m(re),ne=Z(F,!0),se=h(F,2);gn(se,{size:11,class:"shrink-0"});var U=h(re,2);{var le=Se=>{var be=rf();Ke(be,21,()=>o($).models,Oe=>Oe[0],(Oe,w)=>{var T=nf(),I=m(T),J=m(I);{var ae=we=>{ua(we,{size:11})};j(J,we=>{o(w)[0]===o($).model&&we(ae)})}var $e=h(I,2),ye=Z($e,!0);G(()=>W(ye,o(w)[1])),O("click",T,()=>ve(o(w)[0])),g(Oe,T)}),g(Se,be)};j(U,Se=>{o(R)==="model"&&Se(le)})}G(()=>W(ne,o(Y))),O("click",re,()=>f(R,o(R)==="model"?"":"model",!0)),g(E,H)};j(Fn,E=>{o($).models.length&&E(Hn)})}var br=h(Fn,2);{var jn=E=>{var H=of(),re=m(H),F=m(re),ne=h(F);gn(ne,{size:11});var se=h(re,2);{var U=le=>{var Se=af();Ke(Se,20,()=>o($).efforts,be=>be,(be,Oe)=>{var w=hi(),T=m(w),I=m(T);{var J=$e=>{ua($e,{size:11})};j(I,$e=>{Oe===o($).effort&&$e(J)})}var ae=h(T);G(()=>W(ae,` ${Oe??""}`)),O("click",w,()=>Te(Oe)),g(be,w)}),g(le,Se)};j(se,le=>{o(R)==="effort"&&le(U)})}G(()=>W(F,`${(o($).effort||"effort")??""} `)),O("click",re,()=>f(R,o(R)==="effort"?"":"effort",!0)),g(E,H)};j(br,E=>{o($).efforts.length&&E(jn)})}var Bn=h(br,2);{var Vn=E=>{Zt(E,{size:11,class:"animate-spin text-mk-muted"})};j(Bn,E=>{o(P)&&E(Vn)})}var Xr=h(Bn,2),Kn=h(m(Xr),2),xr=m(Kn);{var Zr=E=>{ad(E,{size:11})},Un=E=>{Ru(E,{size:13})};j(xr,E=>{o(x)?E(Zr):E(Un,-1)})}G(E=>{W(mr,`${o($).agent==="claude"?"Claude":"Codex"} `),Kn.disabled=E},[()=>o(x)||!o(i).trim()]),ho(kn,()=>o(a),E=>f(a,E)),O("keydown",Kt,rt),O("input",Kt,he),Ze(Kt,()=>o(i),E=>f(i,E)),O("click",Cn,()=>f(R,o(R)==="agent"?"":"agent",!0)),O("click",Kn,Pe),g(e,dr),dt()}At(["click","keydown","input"]);var uf=z('<span class="hint svelte-e2eyom">searching…</span>'),df=z('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),ff=z('<ul class="results svelte-e2eyom"></ul>'),vf=z('<p class="empty svelte-e2eyom"> </p>'),hf=z('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function pf(e,t){ut(t,!0);let n=A(""),r=A(Me([])),s=A(0),i=A(!1),a=A(null),l=null;nt(()=>{o(a)&&o(a).focus()}),nt(()=>{const C=o(n).trim();if(l&&clearTimeout(l),!C){f(r,[],!0);return}l=setTimeout(async()=>{f(i,!0);try{const M=await Ee.searchFiles(_.connectionId,_.path||".",C);f(r,M.matches||[],!0),f(s,0)}catch{f(r,[],!0)}finally{f(i,!1)}},180)});async function c(C){var q;if(!C)return;const M=_.path&&_.path!=="."?`${_.path}/`:"";await _.openFile(`${M}${C.path}`),(q=t.onclose)==null||q.call(t)}function d(C){var M;C.key==="Escape"?(C.preventDefault(),(M=t.onclose)==null||M.call(t)):C.key==="ArrowDown"?(C.preventDefault(),f(s,Math.min(o(s)+1,o(r).length-1),!0)):C.key==="ArrowUp"?(C.preventDefault(),f(s,Math.max(o(s)-1,0),!0)):C.key==="Enter"&&(C.preventDefault(),c(o(r)[o(s)]))}var v=hf(),x=V(v),p=h(x,2),b=m(p),y=m(b);Io(y,{size:14});var k=h(y,2);bs(k,C=>f(a,C),()=>o(a));var S=h(k,2);{var $=C=>{var M=uf();g(C,M)};j(S,C=>{o(i)&&C($)})}var R=h(b,2);{var P=C=>{var M=ff();Ke(M,23,()=>o(r),q=>q.path,(q,te,L)=>{var B=df(),X=m(B);let ve;var Te=m(X),Ue=Z(Te,!0),Pe=h(Te,2),rt=Z(Pe,!0),he=h(Pe,2);{var pe=D=>{ju(D,{size:12})};j(he,D=>{o(L)===o(s)&&D(pe)})}G(()=>{ve=lt(X,1,"svelte-e2eyom",null,ve,{active:o(L)===o(s)}),W(Ue,o(te).name),W(rt,o(te).path)}),O("click",X,()=>c(o(te))),g(q,B)}),g(C,M)},Y=C=>{var M=vf(),q=Z(M);G(te=>W(q,`No files match “${te??""}”.`),[()=>o(n).trim()]),g(C,M)},N=tt(()=>o(n).trim()&&!o(i));j(R,C=>{o(r).length?C(P):o(N)&&C(Y,1)})}O("click",x,()=>{var C;return(C=t.onclose)==null?void 0:C.call(t)}),O("keydown",x,C=>{var M;return C.key==="Escape"&&((M=t.onclose)==null?void 0:M.call(t))}),O("keydown",k,d),Ze(k,()=>o(n),C=>f(n,C)),g(e,v),dt()}At(["click","keydown"]);var _f=z('<div class="terminal-pane svelte-maclc7"><div class="bar svelte-maclc7"><span class="label svelte-maclc7">Terminal</span> <span> </span></div> <div class="screen svelte-maclc7"></div></div>');function gf(e,t){ut(t,!0);let n=Ve(t,"rootPath",3,""),r=Ve(t,"session",3,""),s=Ve(t,"index",3,0),i,a=null,l=null,c=null,d=A("connecting"),v=null,x=0,p=null,b=!1;const y={background:ds.colors["editor.background"],foreground:ds.colors["editor.foreground"],cursor:ds.colors["editorCursor.foreground"],selectionBackground:ds.colors["editor.selectionBackground"],black:"#272822",red:"#f92672",green:"#a6e22e",yellow:"#e6db74",blue:"#66d9ef",magenta:"#ae81ff",cyan:"#a1efe4",white:"#f8f8f2",brightBlack:"#75715e",brightRed:"#f92672",brightGreen:"#a6e22e",brightYellow:"#e6db74",brightBlue:"#66d9ef",brightMagenta:"#ae81ff",brightCyan:"#a1efe4",brightWhite:"#f9f8f5"};function k(){if(!(!l||!a||(c==null?void 0:c.readyState)!==WebSocket.OPEN))try{l.fit(),c.send(JSON.stringify({type:"resize",cols:a.cols,rows:a.rows}))}catch{}}function S(){if(b)return;const M=`${location.protocol==="https:"?"wss":"ws"}://${location.host}${n()}/ws/sessions/${encodeURIComponent(r())}/ide/terminal/${encodeURIComponent(_.connectionId)}?index=${encodeURIComponent(s())}`;c=new WebSocket(M),c.binaryType="arraybuffer",c.onopen=()=>{f(d,"connected"),x=0,k()},c.onmessage=q=>{a.write(typeof q.data=="string"?q.data:new Uint8Array(q.data))},c.onclose=q=>{if(b)return;if(q.code===1008){f(d,"refused"),a==null||a.write(`\r
\x1B[31m— not authorised for this terminal —\x1B[0m\r
`);return}if(x>=6){f(d,"closed"),a==null||a.write(`\r
\x1B[33m— terminal unavailable; reopen the panel to retry —\x1B[0m\r
`);return}f(d,"reconnecting");const te=Math.min(1e3*2**x,1e4);x+=1,p=setTimeout(S,te)},c.onerror=()=>{b||f(d,"error")}}Wr(async()=>{const[{Terminal:C},{FitAddon:M}]=await Promise.all([fa(()=>import("./ide-xterm.js"),[],import.meta.url),fa(()=>import("./ide-addon-fit.js"),[],import.meta.url)]);await fa(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),a=new C({theme:y,fontSize:12,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3}),l=new M,a.loadAddon(l),a.open(i),l.fit(),S(),a.onData(q=>{(c==null?void 0:c.readyState)===WebSocket.OPEN&&c.send(new TextEncoder().encode(q))}),v=new ResizeObserver(()=>k()),v.observe(i)}),Po(()=>{b=!0,p&&clearTimeout(p),v==null||v.disconnect(),c==null||c.close(),a==null||a.dispose()});var $=_f(),R=m($),P=h(m(R),2),Y=Z(P,!0),N=h(R,2);bs(N,C=>i=C,()=>i),G(()=>{lt(P,1,`status ${o(d)??""}`,"svelte-maclc7"),W(Y,o(d))}),g(e,$),dt()}var mf=z('<div class="border-b border-vs-line bg-vs-red/10 px-4 py-2 text-xs text-vs-red"> </div>'),bf=z('<div class="flex items-center gap-2 px-4 py-3 text-xs text-vs-muted"><!> Loading…</div>'),xf=z('<button class="flex w-full items-center gap-2 px-4 py-1 text-left text-[13px] text-vs-fg hover:bg-vs-hover"><!> <span class="truncate"> </span></button>'),yf=z('<div class="px-4 py-3 text-xs text-vs-muted">No sub-folders here. You can still open this folder.</div>'),wf=z('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="flex h-[70vh] w-[min(640px,92vw)] flex-col overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">Open Folder <span class="ml-1 font-normal text-vs-muted"><!></span></div> <form class="flex gap-2 border-b border-vs-line px-3 py-2"><button type="button" class="flex items-center gap-1 rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover disabled:opacity-40" title="Up one folder"><!> Up</button> <input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-xs text-vs-fg outline-none focus:border-vs-accent" spellcheck="false" aria-label="Folder path"/> <button type="submit" class="rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover">Go</button></form> <!> <div class="min-h-0 flex-1 overflow-y-auto py-1"><!></div> <div class="flex items-center gap-2 border-t border-vs-line px-4 py-3"><span class="flex min-w-0 flex-1 items-center gap-2 text-xs text-vs-muted"><!> <span class="truncate font-mono"> </span></span> <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40">Open Folder</button></div></div></div>');function kf(e,t){ut(t,!0);let n=A(""),r=A(""),s=A(Me([])),i=A(""),a=A(!0),l=A("");async function c(he){f(a,!0),f(i,"");try{const pe=_.connectionId?await Ee.browseOn(_.connectionId,he):await Ee.browse(he);f(n,pe.path,!0),f(r,pe.parent,!0),f(s,pe.entries||[],!0),f(l,pe.path,!0)}catch(pe){f(i,pe.message||"Could not open that folder",!0)}finally{f(a,!1)}}Wr(()=>c(""));function d(he){he.preventDefault(),o(l).trim()&&c(o(l).trim())}var v=wf(),x=m(v),p=m(x),b=h(m(p)),y=m(b);{var k=he=>{var pe=Xo();G(()=>W(pe,`on ${_.connection.username??""}@${_.connection.host??""}`)),g(he,pe)},S=he=>{var pe=Xo("on this server");g(he,pe)};j(y,he=>{_.connection&&_.connection.kind!=="local"?he(k):he(S,-1)})}var $=h(p,2),R=m($),P=m(R);Bu(P,{size:14});var Y=h(R,2),N=h($,2);{var C=he=>{var pe=mf(),D=Z(pe,!0);G(()=>W(D,o(i))),g(he,pe)};j(N,he=>{o(i)&&he(C)})}var M=h(N,2),q=m(M);{var te=he=>{var pe=bf(),D=m(pe);Zt(D,{size:13,class:"animate-spin"}),g(he,pe)},L=he=>{var pe=Q(),D=V(pe);Ke(D,17,()=>o(s),ie=>ie.path,(ie,ge)=>{var Le=xf(),Xe=m(Le);Yu(Xe,{size:14,class:"shrink-0 text-vs-blue"});var kt=h(Xe,2),rn=Z(kt,!0);G(()=>W(rn,o(ge).name)),O("dblclick",Le,()=>c(o(ge).path)),O("click",Le,()=>c(o(ge).path)),g(ie,Le)},ie=>{var ge=yf();g(ie,ge)}),g(he,pe)};j(q,he=>{o(a)?he(te):he(L,-1)})}var B=h(M,2),X=m(B),ve=m(X);Ju(ve,{size:13,class:"shrink-0"});var Te=h(ve,2),Ue=Z(Te,!0),Pe=h(X,2),rt=h(Pe,2);G(()=>{R.disabled=!o(r),me(Te,"title",o(n)),W(Ue,o(n)),rt.disabled=!o(n)||o(a)}),O("click",v,he=>he.target===he.currentTarget&&t.onclose()),O("keydown",v,he=>he.key==="Escape"&&t.onclose()),ur("submit",$,d),O("click",R,()=>o(r)&&c(o(r))),Ze(Y,()=>o(l),he=>f(l,he)),O("click",Pe,function(...he){var pe;(pe=t.onclose)==null||pe.apply(this,he)}),O("click",rt,()=>t.onopen(o(n))),g(e,v),dt()}At(["click","keydown","dblclick"]);var $f=z('<p class="px-4 py-2 text-xs text-vs-muted">Open a folder to search it.</p>'),Sf=z('<button class="flex w-full items-center gap-2 px-3 py-1 text-left text-[13px] hover:bg-vs-hover"><!> <span class="truncate text-vs-fg"> </span> <span class="ml-auto max-w-[45%] truncate text-[11px] text-vs-muted"> </span></button>'),Cf=z('<p class="px-4 py-2 text-xs text-vs-muted"> </p>'),Ef=z('<p class="px-4 py-2 text-xs text-vs-muted">Type to search filenames in this workspace.</p>'),Tf=z('<div class="flex h-full min-h-0 flex-col"><div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Search</div> <div class="px-3 pb-2"><div class="flex items-center gap-1.5 rounded-sm border border-vs-line bg-vs-input px-2 focus-within:border-vs-accent"><!> <input class="min-w-0 flex-1 bg-transparent py-1 text-xs text-vs-fg outline-none placeholder:text-vs-muted" placeholder="Search filenames" spellcheck="false"/> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div></div>');function Nf(e,t){ut(t,!0);let n=A(""),r=A(Me([])),s=A(!1),i=A(!1),a=null;nt(()=>{const P=o(n).trim();if(a&&clearTimeout(a),!P||!_.connectionId){f(r,[],!0),f(i,!1);return}a=setTimeout(async()=>{f(s,!0);try{const Y=await Ee.searchFiles(_.connectionId,_.path||".",P);f(r,Y.matches||[],!0)}catch(Y){f(r,[],!0),_.setStatus(Y.message||"Search failed")}finally{f(s,!1),f(i,!0)}},200)});const l=P=>{const Y=(P||"").split("/");return Y.pop(),Y.join("/")};var c=Tf(),d=h(m(c),2),v=m(d),x=m(v);Io(x,{size:12,class:"shrink-0 text-vs-muted"});var p=h(x,2),b=h(p,2);{var y=P=>{Zt(P,{size:12,class:"shrink-0 animate-spin text-vs-muted"})};j(b,P=>{o(s)&&P(y)})}var k=h(d,2),S=m(k);{var $=P=>{var Y=$f();g(P,Y)},R=P=>{var Y=Q(),N=V(Y);Ke(N,17,()=>o(r),C=>C.path,(C,M)=>{var q=Sf(),te=m(q);Ao(te,{size:13,class:"shrink-0 text-vs-blue"});var L=h(te,2),B=Z(L,!0),X=h(L,2),ve=Z(X,!0);G((Te,Ue)=>{me(q,"title",o(M).path),W(B,Te),W(ve,Ue)},[()=>o(M).name||o(M).path.split("/").pop(),()=>l(o(M).path)]),O("click",q,()=>_.openFile(o(M).path)),g(C,q)},C=>{var M=Q(),q=V(M);{var te=X=>{var ve=Cf(),Te=Z(ve);G(()=>W(Te,`No files match “${o(n)??""}”.`)),g(X,ve)},L=X=>{var ve=Ef();g(X,ve)},B=tt(()=>!o(n).trim());j(q,X=>{o(i)&&!o(s)?X(te):o(B)&&X(L,1)})}g(C,M)}),g(P,Y)};j(S,P=>{_.connectionId?P(R,-1):P($)})}Ze(p,()=>o(n),P=>f(n,P)),g(e,c),dt()}At(["click"]);var zf=z('<p class="flex items-center gap-2 text-vs-muted"><!> Fetching host key…</p>'),Mf=z('<p class="text-vs-red"> </p>'),Pf=z("<p>This host is already trusted. Try connecting again.</p>"),Af=z('<div class="flex items-baseline gap-2 font-mono text-[11px]"><span class="w-16 shrink-0 text-vs-muted"> </span> <span class="break-all text-vs-fg"> </span></div>'),If=z(`<p>The authenticity of <span class="font-mono text-vs-blue"> </span> can't be established. Verify these fingerprints match the server before you continue —
          if they don't, someone may be intercepting the connection.</p> <div class="mt-3 flex flex-col gap-1 rounded-sm border border-vs-line bg-vs-input p-2"></div> <p class="mt-3 text-xs text-vs-muted">Accepting adds the key to <span class="font-mono">~/.ssh/known_hosts</span> on this server.</p>`,1),Of=z('<button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"> </button>'),Rf=z('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="w-[min(560px,92vw)] overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="flex items-center gap-2 border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright"><!> Unknown host</div> <div class="px-4 py-3 text-[13px] leading-relaxed text-vs-fg"><!></div> <div class="flex justify-end gap-2 border-t border-vs-line px-4 py-3"><button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <!></div></div></div>');function Lf(e,t){ut(t,!0);let n=A(!0),r=A(""),s=A(null),i=A(!1);Wr(async()=>{try{f(s,await Ee.hostKey(_.connectionId),!0)}catch(N){f(r,N.message||"Could not fetch the host key",!0)}finally{f(n,!1)}});async function a(){f(i,!0);try{await Ee.trustHost(_.connectionId),t.ontrusted()}catch(N){f(r,N.message||"Could not trust this host",!0),f(i,!1)}}var l=Rf(),c=m(l),d=m(c),v=m(d);sd(v,{size:15,class:"text-vs-yellow"});var x=h(d,2),p=m(x);{var b=N=>{var C=zf(),M=m(C);Zt(M,{size:13,class:"animate-spin"}),g(N,C)},y=N=>{var C=Mf(),M=Z(C,!0);G(()=>W(M,o(r))),g(N,C)},k=N=>{var C=Pf();g(N,C)},S=N=>{var C=If(),M=V(C),q=h(m(M)),te=Z(q),L=h(M,2);Ke(L,21,()=>o(s).fingerprints,B=>B.fingerprint,(B,X)=>{var ve=Af(),Te=m(ve),Ue=Z(Te,!0),Pe=h(Te,2),rt=Z(Pe,!0);G(()=>{W(Ue,o(X).type),W(rt,o(X).fingerprint)}),g(B,ve)}),G(()=>W(te,`${o(s).host??""}:${o(s).port??""}`)),g(N,C)};j(p,N=>{var C;o(n)?N(b):o(r)?N(y,1):(C=o(s))!=null&&C.known?N(k,2):N(S,-1)})}var $=h(x,2),R=m($),P=h(R,2);{var Y=N=>{var C=Of(),M=Z(C,!0);G(()=>{C.disabled=o(i),W(M,o(i)?"Trusting…":"Trust and connect")}),O("click",C,a),g(N,C)};j(P,N=>{var C;!o(n)&&!((C=o(s))!=null&&C.known)&&!o(r)&&N(Y)})}O("click",l,N=>N.target===N.currentTarget&&t.onclose()),O("keydown",l,N=>N.key==="Escape"&&t.onclose()),O("click",R,function(...N){var C;(C=t.onclose)==null||C.apply(this,N)}),g(e,l),dt()}At(["click","keydown"]);var Df=z('<div role="separator" tabindex="0" title="Drag to resize (double-click to reset)"><div></div></div>');function Xa(e,t){ut(t,!0);let n=Ve(t,"size",15),r=Ve(t,"side",3,"right"),s=Ve(t,"min",3,120),i=Ve(t,"max",3,800),a=Ve(t,"onreset",3,null),l=A(!1);const c=r()==="top";function d(y){var Y;y.preventDefault(),f(l,!0);const k=c?y.clientY:y.clientX,S=n(),$=y.currentTarget;(Y=$.setPointerCapture)==null||Y.call($,y.pointerId);function R(N){const M=(c?N.clientY:N.clientX)-k,q=r()==="left"||r()==="top"?-M:M;n(Math.round(Math.min(i(),Math.max(s(),S+q))))}function P(){var N;f(l,!1),(N=$.releasePointerCapture)==null||N.call($,y.pointerId),window.removeEventListener("pointermove",R),window.removeEventListener("pointerup",P)}window.addEventListener("pointermove",R),window.addEventListener("pointerup",P)}function v(y){const k=y.shiftKey?40:10,S=c?"ArrowUp":r()==="left"?"ArrowLeft":"ArrowRight",$=c?"ArrowDown":r()==="left"?"ArrowRight":"ArrowLeft";if(y.key===S)n(Math.min(i(),n()+k));else if(y.key===$)n(Math.max(s(),n()-k));else return;y.preventDefault()}var x=Df();let p;var b=Z(x);G(()=>{p=lt(x,1,`group relative shrink-0 ${c?"h-1 w-full cursor-row-resize":"w-1 cursor-col-resize"}`,null,p,{"bg-vs-accent":o(l)}),me(x,"aria-orientation",c?"horizontal":"vertical"),me(x,"aria-valuenow",n()),me(x,"aria-valuemin",s()),me(x,"aria-valuemax",i()),lt(b,1,`absolute ${c?"-top-1 -bottom-1 left-0 right-0":"-left-1 -right-1 top-0 bottom-0"}
           transition-colors group-hover:bg-vs-accent ${o(l)?"bg-vs-accent":""}`)}),O("pointerdown",x,d),O("dblclick",x,()=>{var y;return(y=a())==null?void 0:y()}),O("keydown",x,v),g(e,x),dt()}At(["pointerdown","dblclick","keydown"]);var Ff=z('<span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>'),Hf=z('<span class="absolute right-1.5 bottom-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-vs-status px-1 text-[10px] leading-none font-semibold text-white"> </span>'),jf=z("<button><!> <!> <!></button>"),Bf=z("<option> </option>"),Vf=z('<button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover hover:text-vs-red" title="Remove workspace" aria-label="Remove workspace"><!></button>'),Kf=z('<input class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),Uf=z(`<button class="w-full rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Show this host's key fingerprint and trust it">Verify host key…</button>`),Wf=z('<!> <button class="w-full rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"> </button> <!>',1),qf=z('<p class="mt-1 font-mono text-[11px] break-all text-vs-muted"> </p>'),Gf=z('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="~/.ssh/id_ed25519"/> <textarea class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-[11px] outline-none focus:border-vs-accent" rows="4" placeholder="…or paste a private key (-----BEGIN OPENSSH PRIVATE KEY-----)" spellcheck="false"></textarea>',1),Yf=z('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" type="password" placeholder="Password" autocomplete="new-password"/>'),Jf=z('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Host" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="User" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Port" type="number" min="1" max="65535"/> <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!>',1),Xf=z('<form class="mt-2 flex flex-col gap-1.5 border-t border-vs-line px-3 pt-2"><select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>This server (local folder)</option><option>Remote host over SSH</option></select> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"/> <div class="flex gap-1 pb-2"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110" type="submit">Create</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" type="button">Cancel</button></div></form>'),Zf=z('<div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Workspaces</div> <div class="flex flex-col gap-2 px-3 pt-1"><select class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" aria-label="Workspace"><option>— select workspace —</option><!></select> <div class="flex gap-1"><button class="flex flex-1 items-center justify-center gap-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"><!> Open Folder</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Add a workspace or SSH connection" aria-label="Add workspace"><!></button> <!></div> <!> <!></div> <!>',1),Qf=z('<aside class="flex shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel"><!></aside> <!>',1),ev=z('<div class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"><!> <div><h1 class="text-2xl font-light text-vs-fg">Multibuilder IDE</h1> <p class="mt-1 text-sm text-vs-muted">Edit files on this server or on a remote host over SSH.</p></div> <div class="flex flex-col gap-2 text-sm"><button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Open Folder… <kbd class="ml-2 rounded-sm border border-vs-line px-1.5 py-0.5 text-[10px] text-vs-muted">Ctrl+Shift+O</kbd></button> <button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Connect to a host over SSH…</button></div></div>'),tv=z('<button class="rounded-sm p-0.5 opacity-0 group-hover:opacity-100 hover:bg-vs-line" title="Close terminal — ends the shell"><!></button>'),nv=z('<span><button class="max-w-[140px] truncate"> </button> <!></span>'),rv=z('<div class="absolute inset-0"><!></div>'),sv=z('<!> <div class="flex shrink-0 flex-col border-t border-vs-border bg-vs-bg"><div class="flex items-center gap-1 border-b border-vs-border px-2 py-1 text-[11px]"><!> <div class="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto"></div> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40" title="New terminal in this workspace" aria-label="New terminal"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover" title="Hide terminals (Ctrl+`) — sessions keep running" aria-label="Hide all terminals"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover hover:text-vs-red" title="Close this terminal — ends the shell" aria-label="Close this terminal"><!></button></div> <div class="relative min-h-0 flex-1"><!></div></div>',1),av=z('<!> <div class="min-h-0 flex-1"><!></div> <!>',1),ov=z('<!> <aside class="flex shrink-0 flex-col overflow-hidden border-l border-vs-border bg-vs-panel"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1.5"><!> <span class="flex-1 text-[11px] font-semibold tracking-wide uppercase">AI Agent</span> <button class="rounded-sm p-0.5 hover:bg-vs-hover" title="Hide chat" aria-label="Hide chat"><!></button></div> <div class="min-h-0 flex-1"><!></div></aside>',1),pi=z('<span class="flex items-center gap-1"><!> </span>'),iv=z("<span> </span>"),lv=z('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle terminal (Ctrl+`)"><!> Terminal</button> <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Focus the tmux window on the host"><!></button>',1),cv=z('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle AI Agent panel"><!> Chat</button>'),uv=z('<div class="flex h-full flex-col overflow-hidden bg-vs-bg font-sans text-vs-fg"><header class="flex items-center gap-2 border-b border-vs-border bg-vs-titlebar px-3 py-1 text-xs"><!> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover" title="Open a folder on this server (Ctrl+Shift+O)">Open Folder…</button> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40" title="Open a file (Ctrl+P)">Open File…</button> <button><!> Terminal</button> <span class="mx-auto truncate text-vs-muted"> </span> <span><!> </span></header> <div class="flex min-h-0 flex-1"><nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity"><!> <div class="mt-auto flex flex-col items-center pb-1"><button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Account — signed in to the dashboard" aria-label="Account"><!></button> <button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Toggle side bar (Ctrl+B)" aria-label="Toggle side bar"><!></button></div></nav> <!> <section class="flex min-h-0 min-w-0 flex-1 flex-col"><!></section> <!></div> <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white"><!> <!> <span class="truncate"> </span> <span class="ml-auto flex items-center gap-3"><!> <span class="max-w-[40vw] truncate opacity-80"> </span> <!> <!></span></footer> <!> <!> <!></div>');function dv(e,t){ut(t,!0);let n=Ve(t,"sessions",19,()=>[]),r=Ve(t,"session",3,""),s=Ve(t,"rootPath",3,""),i=A("files");function a(w,T){try{const I=localStorage.getItem(`ide.show.${w}`);return I===null?T:I==="1"}catch{return T}}let l=A(Me(a("chat",!0)));const c={sidebar:240,chat:320,panel:240};function d(w){try{const T=localStorage.getItem(`ide.size.${w}`),I=Number(T);return Number.isFinite(I)&&I>0?I:c[w]}catch{return c[w]}}let v=A(Me(d("sidebar"))),x=A(Me(d("chat"))),p=A(Me(d("panel")));nt(()=>{try{localStorage.setItem("ide.size.sidebar",String(o(v))),localStorage.setItem("ide.size.chat",String(o(x))),localStorage.setItem("ide.size.panel",String(o(p))),localStorage.setItem("ide.show.terminal",o(k)?"1":"0"),localStorage.setItem("ide.show.chat",o(l)?"1":"0"),localStorage.setItem("ide.show.sidebar",o(b)?"1":"0")}catch{}});let b=A(Me(a("sidebar",!0))),y=A(!1),k=A(Me(a("terminal",!1)));const S=8;let $=A(Me([0])),R=A(0);function P(){if(o($).length>=S)return;let w=0;for(;o($).includes(w);)w+=1;w>=S||(f($,[...o($),w].sort((T,I)=>T-I),!0),f(R,w,!0))}async function Y(w){const T=o($).indexOf(w),I=o($).filter(J=>J!==w);f($,I.length?I:[0],!0),o(R)===w&&f(R,o($)[Math.min(T,o($).length-1)],!0);try{await Ee.closeTerminal(_.connectionId,w)}catch(J){_.setStatus(J.message||"Could not close terminal")}}let N=A("");nt(()=>{const w=_.connectionId,T=_.connectionState;if(!w||T!=="connected")return;const I=`${w}|${T}`;o(N)!==I&&(f(N,I),f($,[0],!0),f(R,0),Ee.listTerminals(w).then(J=>{const ae=((J==null?void 0:J.terminals)||[]).filter($e=>Number.isInteger($e));ae.length&&(f($,ae,!0),ae.includes(o(R))||f(R,ae[0],!0))}).catch(()=>{}))});let C=A(!1);nt(()=>{o(k)&&f(C,!0)});let M=A(!1),q=A(!1),te=A(""),L=A(Me({kind:"local",label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",private_key:"",workspace_root:"",max_file_bytes:1e6}));const B={idle:{icon:Hu,label:"Not connected"},connecting:{icon:Du,label:"Connecting…"},connected:{icon:Lu,label:"Connected"},reconnect:{icon:ii,label:"Reconnect required"},error:{icon:ii,label:"Error"}},X=tt(()=>B[_.connectionState].icon),ve=tt(()=>{var w;return((w=_.connection)==null?void 0:w.kind)==="local"}),Te=[{id:"files",icon:qu,label:"Explorer",keys:"Ctrl+Shift+E"},{id:"search",icon:Io,label:"Search",keys:"Ctrl+Shift+F"},{id:"git",icon:po,label:"Source Control",keys:"Ctrl+Shift+G"},{id:"remote",icon:td,label:"Remote Explorer",keys:""}];Wr(async()=>{await _.loadConnections(),_.connectionId&&await _.refreshStatus()});function Ue(w){o(i)===w&&o(b)?f(b,!1):(f(i,w,!0),f(b,!0))}async function Pe(w){_.connectionId=w.currentTarget.value,_.resetWorkspaceView(),await _.refreshStatus()}async function rt(w){f(q,!1);try{const T=w.split("/").filter(Boolean).pop()||w,I=_.connection;if(I&&I.kind!=="local"){await Ee.setWorkspaceRoot(I.id,w,T),await _.loadConnections(),_.resetWorkspaceView(),await _.refreshFiles("."),_.setStatus(`Opened ${w} on ${I.username}@${I.host}`),f(i,"files"),f(b,!0);return}if(I&&I.kind==="local"){await Ee.setWorkspaceRoot(I.id,w,T),await _.loadConnections(),_.resetWorkspaceView(),await _.refreshFiles("."),_.setStatus(`Opened ${w}`),f(i,"files"),f(b,!0);return}const J=await Ee.createConnection({kind:"local",label:T,workspace_root:w,max_file_bytes:1e6});await _.loadConnections(),_.connectionId=J.connection.id,_.resetWorkspaceView(),await _.connect(""),f(i,"files"),f(b,!0)}catch(T){_.setStatus(T.message||"Could not open folder")}}async function he(w){w.preventDefault();try{const T=await Ee.createConnection({...o(L),port:Number(o(L).port)});f(M,!1),f(L,{...o(L),label:"",host:"",username:"",password:"",private_key:""},!0),await _.loadConnections(),_.connectionId=T.connection.id,await _.refreshStatus()}catch(T){_.setStatus(T.message||"Could not create connection")}}async function pe(){const w=_.connection;if(!w)return;const T=w.kind==="local"?"workspace":"connection";if(confirm(`Remove ${T} "${w.label}"? Saved tabs are cleared; files are untouched.`))try{await Ee.deleteConnection(w.id),_.connectionId="",_.resetWorkspaceView(),await _.loadConnections()}catch(I){_.setStatus(I.message||"Could not delete")}}async function D(){try{const w=await Ee.focusTerminal(_.connectionId);_.setStatus(`Focused ${w.window_name}`,"tmux window selected")}catch(w){_.setStatus(w.message||"Could not focus terminal")}}function ie(w){var ae,$e,ye,we;const T=w.ctrlKey||w.metaKey,I=w.key.toLowerCase(),J=(($e=(ae=w.target)==null?void 0:ae.matches)==null?void 0:$e.call(ae,"input, textarea, select"))&&!((we=(ye=w.target).closest)!=null&&we.call(ye,".monaco-editor"));T&&I==="s"?(w.preventDefault(),_.saveActive()):T&&I==="p"&&!J?(w.preventDefault(),_.connectionId&&f(y,!0)):T&&w.shiftKey&&I==="o"?(w.preventDefault(),f(q,!0)):T&&w.shiftKey&&["e","f","g"].includes(I)?(w.preventDefault(),f(i,{e:"files",f:"search",g:"git"}[I],!0),f(b,!0)):T&&I==="b"&&!J?(w.preventDefault(),f(b,!o(b))):T&&I==="`"?(w.preventDefault(),_.connectionState==="connected"&&f(k,!o(k))):w.key==="Escape"&&o(y)&&(w.preventDefault(),f(y,!1))}var ge=uv();ur("keydown",_s,ie);var Le=m(ge),Xe=m(Le);li(Xe,{size:15,class:"shrink-0 text-vs-blue"});var kt=h(Xe,2),rn=h(kt,2),Vt=h(rn,2);let Ln;var dr=m(Vt);di(dr,{size:13});var sn=h(Vt,2),wn=Z(sn,!0),kn=h(sn,2),$n=m(kn);Qo($n,()=>o(X),(w,T)=>{T(w,{size:12})});var fr=h($n),Dn=h(Le,2),an=m(Dn),vr=m(an);Ke(vr,17,()=>Te,w=>w.id,(w,T)=>{var I=jf(),J=m(I);{var ae=Ne=>{var Ce=Ff();g(Ne,Ce)};j(J,Ne=>{o(i)===o(T).id&&o(b)&&Ne(ae)})}var $e=h(J,2);Qo($e,()=>o(T).icon,(Ne,Ce)=>{Ce(Ne,{size:24,strokeWidth:1.4})});var ye=h($e,2);{var we=Ne=>{var Ce=Hf(),De=Z(Ce,!0);G(()=>W(De,_.gitDirtyCount)),g(Ne,Ce)};j(ye,Ne=>{o(T).id==="git"&&_.gitDirtyCount&&Ne(we)})}G(()=>{lt(I,1,`relative flex h-12 w-12 items-center justify-center ${o(i)===o(T).id&&o(b)?"text-vs-bright":"text-vs-muted hover:text-vs-fg"}`),me(I,"title",o(T).keys?`${o(T).label} (${o(T).keys})`:o(T).label),me(I,"aria-label",o(T).label)}),O("click",I,()=>Ue(o(T).id)),g(w,I)});var hr=h(vr,2),Sn=m(hr),qr=m(Sn);Fu(qr,{size:24,strokeWidth:1.4});var pr=h(Sn,2),_r=m(pr);rd(_r,{size:24,strokeWidth:1.4});var Kt=h(an,2);{var gr=w=>{var T=Qf(),I=V(T),J=m(I);{var ae=Ce=>{hd(Ce,{})},$e=Ce=>{Nf(Ce,{})},ye=Ce=>{Id(Ce,{})},we=Ce=>{var De=Zf(),gt=h(V(De),2),ft=m(gt),ln=m(ft);ln.value=ln.__value="";var En=h(ln);Ke(En,17,()=>_.connections,Fe=>Fe.id,(Fe,Re)=>{var je=Bf(),fn=Z(je),Ut={};G(()=>{W(fn,`${o(Re).kind==="local"?"🖿 ":"⇅ "}${o(Re).label??""}`),Ut!==(Ut=o(Re).id)&&(je.value=(je.__value=Ut)??"")}),g(Fe,je)});var It;ps(ft);var Wn=h(ft,2),cn=m(Wn),un=m(cn);Ya(un,{size:13});var Tn=h(cn,2),Qr=m(Tn);xa(Qr,{size:13});var Ma=h(Tn,2);{var Pa=Fe=>{var Re=Vf(),je=m(Re);fi(je,{size:13}),O("click",Re,pe),g(Fe,Re)};j(Ma,Fe=>{_.connection&&Fe(Pa)})}var $t=h(Wn,2);{var mt=Fe=>{var Re=Wf(),je=V(Re);{var fn=St=>{var Yn=Kf();Ze(Yn,()=>o(te),Ia=>f(te,Ia)),g(St,Yn)};j(je,St=>{!o(ve)&&!_.connection.has_password&&St(fn)})}var Ut=h(je,2),Qs=Z(Ut,!0),ea=h(Ut,2);{var Aa=St=>{var Yn=Uf();O("click",Yn,()=>_.needsHostKey=!0),g(St,Yn)};j(ea,St=>{o(ve)||St(Aa)})}G(()=>W(Qs,o(ve)?"Open workspace":"Connect")),O("click",Ut,()=>_.connect(o(te))),g(Fe,Re)};j($t,Fe=>{_.connection&&_.connectionState!=="connected"&&Fe(mt)})}var qn=h($t,2);{var dn=Fe=>{var Re=qf(),je=Z(Re,!0);G(()=>W(je,_.connection.workspace_root)),g(Fe,Re)};j(qn,Fe=>{_.connection&&Fe(dn)})}var yr=h(gt,2);{var Gn=Fe=>{var Re=Xf(),je=m(Re),fn=m(je);fn.value=fn.__value="local";var Ut=h(fn);Ut.value=Ut.__value="ssh",ps(je);var Qs=h(je,2),ea=h(Qs,2);{var Aa=vn=>{var Oo=Jf(),Ro=V(Oo),Lo=h(Ro,2),Do=h(Lo,2),ta=h(Do,2),Oa=m(ta);Oa.value=Oa.__value="agent";var Ra=h(Oa);Ra.value=Ra.__value="key";var Fo=h(Ra);Fo.value=Fo.__value="password",ps(ta);var Ho=h(ta,2);{var Pl=st=>{var es=Gf(),na=V(es),Ol=h(na,2);Ze(na,()=>o(L).identity_file,La=>o(L).identity_file=La),Ze(Ol,()=>o(L).private_key,La=>o(L).private_key=La),g(st,es)};j(Ho,st=>{o(L).auth_mode==="key"&&st(Pl)})}var Al=h(Ho,2);{var Il=st=>{var es=Yf();Ze(es,()=>o(L).password,na=>o(L).password=na),g(st,es)};j(Al,st=>{o(L).auth_mode==="password"&&st(Il)})}Ze(Ro,()=>o(L).host,st=>o(L).host=st),Ze(Lo,()=>o(L).username,st=>o(L).username=st),Ze(Do,()=>o(L).port,st=>o(L).port=st),ho(ta,()=>o(L).auth_mode,st=>o(L).auth_mode=st),g(vn,Oo)};j(ea,vn=>{o(L).kind==="ssh"&&vn(Aa)})}var St=h(ea,2),Yn=h(St,2),Ia=h(m(Yn),2);G(()=>{me(St,"placeholder",o(L).kind==="local"?"/var/www/app":"Workspace root"),St.required=o(L).kind==="local"}),ur("submit",Re,he),ho(je,()=>o(L).kind,vn=>o(L).kind=vn),Ze(Qs,()=>o(L).label,vn=>o(L).label=vn),Ze(St,()=>o(L).workspace_root,vn=>o(L).workspace_root=vn),O("click",Ia,()=>f(M,!1)),g(Fe,Re)};j(yr,Fe=>{o(M)&&Fe(Gn)})}G(()=>{It!==(It=_.connectionId)&&(ft.value=(ft.__value=It)??"",ms(ft,It))}),O("change",ft,Pe),O("click",cn,()=>f(q,!0)),O("click",Tn,()=>f(M,!o(M))),g(Ce,De)};j(J,Ce=>{o(i)==="files"?Ce(ae):o(i)==="search"?Ce($e,1):o(i)==="git"?Ce(ye,2):Ce(we,-1)})}var Ne=h(I,2);Xa(Ne,{side:"right",min:170,max:620,onreset:()=>f(v,c.sidebar,!0),get size(){return o(v)},set size(Ce){f(v,Ce,!0)}}),G(()=>Cr(I,`width: ${o(v)??""}px`)),g(w,T)};j(Kt,w=>{o(b)&&w(gr)})}var on=h(Kt,2),Cn=m(on);{var mr=w=>{var T=ev(),I=m(T);li(I,{size:64,strokeWidth:1,class:"text-vs-line"});var J=h(I,4),ae=m(J),$e=m(ae);Ya($e,{size:16});var ye=h(ae,2),we=m(ye);ui(we,{size:16}),O("click",ae,()=>f(q,!0)),O("click",ye,()=>{f(i,"remote"),f(b,!0),f(M,!0)}),g(w,T)},Gr=w=>{var T=av(),I=V(T);Ud(I,{});var J=h(I,2),ae=m(J);Hd(ae,{});var $e=h(J,2);{var ye=we=>{var Ne=sv(),Ce=V(Ne);{var De=$t=>{Xa($t,{side:"top",min:120,max:640,onreset:()=>f(p,c.panel,!0),get size(){return o(p)},set size(mt){f(p,mt,!0)}})};j(Ce,$t=>{o(k)&&$t(De)})}var gt=h(Ce,2),ft=m(gt),ln=m(ft);di(ln,{size:13,class:"mx-1 shrink-0"});var En=h(ln,2);Ke(En,20,()=>o($),$t=>$t,($t,mt)=>{var qn=nv(),dn=m(qn),yr=Z(dn,!0),Gn=h(dn,2);{var Fe=Re=>{var je=tv(),fn=m(je);ya(fn,{size:11}),G(()=>me(je,"aria-label",`Close terminal ${mt+1}`)),O("click",je,()=>Y(mt)),g(Re,je)};j(Gn,Re=>{o($).length>1&&Re(Fe)})}G(()=>{var Re;lt(qn,1,`group flex shrink-0 items-center gap-1 rounded-sm px-2 py-0.5
                           ${mt===o(R)?"bg-vs-hover text-vs-fg":"text-vs-muted hover:text-vs-fg"}`),W(yr,mt===0?((Re=_.connection)==null?void 0:Re.label)||"Terminal":`Terminal ${mt+1}`)}),O("click",dn,()=>f(R,mt,!0)),g($t,qn)});var It=h(En,2),Wn=m(It);xa(Wn,{size:14});var cn=h(It,2),un=m(cn);gn(un,{size:15});var Tn=h(cn,2),Qr=m(Tn);fi(Qr,{size:13});var Ma=h(ft,2),Pa=m(Ma);du(Pa,()=>_.connectionId,$t=>{var mt=Q(),qn=V(mt);Ke(qn,16,()=>o($),dn=>dn,(dn,yr)=>{var Gn=rv(),Fe=m(Gn);gf(Fe,{get rootPath(){return s()},get session(){return r()},get index(){return yr}}),G(()=>me(Gn,"hidden",yr!==o(R))),g(dn,Gn)}),g($t,mt)}),G(()=>{Cr(gt,`height: ${o(p)??""}px`),me(gt,"hidden",!o(k)),It.disabled=o($).length>=S}),O("click",It,P),O("click",cn,()=>f(k,!1)),O("click",Tn,()=>Y(o(R))),g(we,Ne)};j($e,we=>{o(C)&&_.connectionState==="connected"&&we(ye)})}g(w,T)};j(Cn,w=>{_.connectionId?w(Gr,-1):w(mr)})}var Yr=h(on,2);{var Jr=w=>{var T=ov(),I=V(T);Xa(I,{side:"left",min:260,max:760,onreset:()=>f(x,c.chat,!0),get size(){return o(x)},set size(De){f(x,De,!0)}});var J=h(I,2),ae=m(J),$e=m(ae);ci($e,{size:13});var ye=h($e,4),we=m(ye);ya(we,{size:14});var Ne=h(ae,2),Ce=m(Ne);cf(Ce,{get sessions(){return n()},get session(){return r()},get rootPath(){return s()}}),G(()=>Cr(J,`width: ${o(x)??""}px`)),O("click",ye,()=>f(l,!1)),g(w,T)};j(Yr,w=>{o(l)&&w(Jr)})}var Fn=h(Dn,2),Hn=m(Fn);{var br=w=>{var T=pi(),I=m(T);{var J=ye=>{Ya(ye,{size:12})},ae=ye=>{ui(ye,{size:12})};j(I,ye=>{o(ve)?ye(J):ye(ae,-1)})}var $e=h(I);G(()=>{me(T,"title",_.connection.workspace_root),W($e,` ${_.connection.label??""}`)}),g(w,T)};j(Hn,w=>{_.connection&&w(br)})}var jn=h(Hn,2);{var Bn=w=>{var T=pi(),I=m(T);po(I,{size:12});var J=h(I);G(()=>W(J,` ${_.gitBranch??""}`)),g(w,T)};j(jn,w=>{_.gitBranch&&w(Bn)})}var Vn=h(jn,2),Xr=Z(Vn,!0),Kn=h(Vn,2),xr=m(Kn);{var Zr=w=>{var T=iv(),I=Z(T);G(()=>W(I,`${_.dirtyCount??""} unsaved`)),g(w,T)};j(xr,w=>{_.dirtyCount&&w(Zr)})}var Un=h(xr,2),E=Z(Un,!0),H=h(Un,2);{var re=w=>{var T=lv(),I=V(T),J=m(I);nd(J,{size:12});var ae=h(I,2),$e=m(ae);Ku($e,{size:12}),O("click",I,()=>f(k,!o(k))),O("click",ae,D),g(w,T)};j(H,w=>{_.connectionState==="connected"&&w(re)})}var F=h(H,2);{var ne=w=>{var T=cv(),I=m(T);ci(I,{size:12}),O("click",T,()=>f(l,!o(l))),g(w,T)};j(F,w=>{w(ne)})}var se=h(Fn,2);{var U=w=>{pf(w,{onclose:()=>f(y,!1)})};j(se,w=>{o(y)&&w(U)})}var le=h(se,2);{var Se=w=>{kf(w,{onopen:rt,onclose:()=>f(q,!1)})};j(le,w=>{o(q)&&w(Se)})}var be=h(le,2);{var Oe=w=>{Lf(w,{onclose:()=>_.needsHostKey=!1,ontrusted:async()=>{_.needsHostKey=!1,await _.connect(o(te))}})};j(be,w=>{_.needsHostKey&&w(Oe)})}G(()=>{var w;rn.disabled=!_.connectionId,Ln=lt(Vt,1,"flex items-center gap-1 rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40",null,Ln,{"text-vs-bright":o(k)}),Vt.disabled=_.connectionState!=="connected",me(Vt,"title",_.connectionState==="connected"?"Toggle terminal (Ctrl+`)":"Open a workspace to use the terminal"),me(sn,"title",(w=_.connection)==null?void 0:w.workspace_root),W(wn,_.connection?`${_.connection.label} — Multibuilder IDE`:"Multibuilder IDE"),lt(kn,1,`flex items-center gap-1 ${_.connectionState==="connected"?"text-vs-green":_.connectionState==="connecting"?"text-vs-yellow":_.connectionState==="idle"?"text-vs-muted":"text-vs-red"}`),W(fr,` ${B[_.connectionState].label??""}`),W(Xr,_.statusText),W(E,_.detailText)}),O("click",kt,()=>f(q,!0)),O("click",rn,()=>f(y,!0)),O("click",Vt,()=>f(k,!o(k))),O("click",Sn,()=>_.setStatus("Signed in to the Multibuilder dashboard")),O("click",pr,()=>f(b,!o(b))),g(e,ge),dt()}At(["click","change"]);function Ml(e,t){return iu(dv,{target:e,props:t})}function _i(){const e=document.getElementById("ide-root");if(!e||e.dataset.mounted)return;e.dataset.mounted="1";const t=window.__IDE_BOOTSTRAP__||{};Ml(e,{sessions:t.sessions||[],session:t.session||"",rootPath:t.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",_i):_i();window.mountRemoteIde=Ml;export{fa as _};
