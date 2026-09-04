const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css","./ide3.css"])))=>i.map(i=>d[i]);
var Ll=Object.defineProperty;var jo=e=>{throw TypeError(e)};var Dl=(e,t,n)=>t in e?Ll(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var it=(e,t,n)=>Dl(e,typeof t!="symbol"?t+"":t,n),Fa=(e,t,n)=>t.has(e)||jo("Cannot "+n);var u=(e,t,n)=>(Fa(e,t,"read from private field"),n?n.call(e):t.get(e)),U=(e,t,n)=>t.has(e)?jo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),ue=(e,t,n,r)=>(Fa(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),ye=(e,t,n)=>(Fa(e,t,"access private method"),n);var Ca=Array.isArray,Fl=Array.prototype.indexOf,ha=Array.prototype.includes,Ea=Array.from,yi=Object.defineProperty,Pn=Object.getOwnPropertyDescriptor,wi=Object.getOwnPropertyDescriptors,Hl=Object.prototype,jl=Array.prototype,mo=Object.getPrototypeOf,Bo=Object.isExtensible;function ts(e){return typeof e=="function"}const Bl=()=>{};function Vl(e){return e()}function Za(e){for(var t=0;t<e.length;t++)e[t]()}function ki(){var e,t,n=new Promise((r,s)=>{e=r,t=s});return{promise:n,resolve:e,reject:t}}function Kl(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const Je=2,Ar=4,Ys=8,bo=1<<24,Ft=16,Pt=32,bn=64,Qa=128,xo=256,zt=512,Ge=1024,Ye=2048,Bt=4096,dt=8192,mt=16384,Dr=32768,pa=1<<25,An=65536,_a=1<<17,Ul=1<<18,Fr=1<<19,$i=1<<20,Xt=1<<25,lr=65536,ga=1<<21,kr=1<<22,Mn=1<<23,tn=Symbol("$state"),Si=Symbol("component"),Ci=Symbol("legacy props"),Wl=Symbol(""),oa=Symbol("attributes"),eo=Symbol("class"),to=Symbol("style"),as=Symbol("text"),ia=Symbol("form reset"),Js=new class extends Error{constructor(){super(...arguments);it(this,"name","StaleReactionError");it(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var mi;const yo=!!((mi=globalThis.document)!=null&&mi.contentType)&&globalThis.document.contentType.includes("xml"),ql=1,Gl=2,Ei=4,Yl=8,Jl=16,Xl=1,Zl=2,Ti=4,Ql=8,ec=16,tc=1,nc=2,Ue=Symbol("uninitialized"),Ni="http://www.w3.org/1999/xhtml",zi="http://www.w3.org/2000/svg",rc="http://www.w3.org/1998/Math/MathML",sc="@attach";function ac(){console.warn("https://svelte.dev/e/derived_inert")}function oc(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function ic(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Pi(e){return e===this.v}function lc(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Mi(e){return!lc(e,this.v)}function Ai(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function cc(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function uc(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function dc(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function fc(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function vc(e){throw new Error("https://svelte.dev/e/effect_orphan")}function hc(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function pc(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function _c(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function gc(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function mc(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function bc(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Hr=!1;function xc(){Hr=!0}let Ae=null;function Ir(e){Ae=e}function ft(e,t=!1,n){Ae={p:Ae,i:!1,c:null,e:null,s:e,x:null,r:me,l:Hr&&!t?{s:null,u:null,$:[]}:null}}function vt(e){var t=Ae,n=t.e;if(n!==null){t.e=null;for(var r of n)nl(r)}return t.i=!0,Ae=t.p,wo(e)}function wo(e={}){return yi(e,Si,{value:!0}),e}function jr(){return!Hr||Ae!==null&&Ae.l===null}let Zn=[];function Ii(){var e=Zn;Zn=[],Za(e)}function Zt(e){if(Zn.length===0&&!vs){var t=Zn;queueMicrotask(()=>{t===Zn&&Ii()})}Zn.push(e)}function yc(){for(;Zn.length>0;)Ii()}const wc=-7169;function De(e,t){e.f=e.f&wc|t}function ko(e){(e.f&zt)!==0||e.deps===null?De(e,Ge):De(e,Bt)}function Oi(e){if(e!==null)for(const t of e)(t.f&Je)===0||(t.f&lr)===0||(t.f^=lr,Oi(t.deps))}function Ri(e,t,n){(e.f&Ye)!==0?t.add(e):(e.f&Bt)!==0&&n.add(e),Oi(e.deps),De(e,Ge)}let ra=!1;function kc(e){var t=ra;try{return ra=!1,[e(),ra]}finally{ra=t}}function Li(e,t){if(t){const n=document.body;e.autofocus=!0,Zt(()=>{document.activeElement===n&&e.focus()})}}let Vo=!1;function $c(){Vo||(Vo=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[ia])==null||t.call(n)})},{capture:!0}))}function Br(e){var t=xe,n=me;Mt(null),At(null);try{return e()}finally{Mt(t),At(n)}}function Di(e,t,n,r=n){e.addEventListener(t,()=>Br(n));const s=e[ia];s?e[ia]=()=>{s(),r(!0)}:e[ia]=()=>r(!0),$c()}function Fi(e,t,n,r){const s=jr()?Or:$o;var i=e.filter(x=>!x.settled),o=t.map(s);if(n.length===0&&i.length===0){r(o);return}var l=me,c=Sc(),d=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(x=>x.promise)):null;function h(x){if((l.f&mt)===0){c();try{r([...o,...x])}catch(w){Jt(w,l)}ma()}}var y=Hi();if(n.length===0){d.then(()=>h([])).finally(y);return}function p(){Promise.all(n.map(x=>Cc(x))).then(h).catch(x=>Jt(x,l)).finally(y)}d?d.then(()=>{c(),p(),ma()}):p()}function Sc(){var e=me,t=xe,n=Ae,r=re;return function(i=!0){At(e),Mt(t),Ir(n),i&&(e.f&mt)===0&&(r==null||r.activate(),r==null||r.apply())}}function ma(e=!0){At(null),Mt(null),Ir(null),e&&(re==null||re.deactivate())}function Hi(){var e=me,t=e.b,n=re,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function Or(e){var t=Je|Ye;return me!==null&&(me.f|=Fr),{ctx:Ae,deps:null,effects:null,equals:Pi,f:t,fn:e,reactions:null,rv:0,v:Ue,wv:0,parent:me,ac:null}}const os=Symbol("obsolete");function Cc(e,t,n){let r=me;r===null&&cc();var s=void 0,i=xn(Ue),o=!xe,l=new Set;return jc(()=>{var x,w;var c=me,d=ki();s=d.promise;try{Promise.resolve(e()).then(d.resolve,k=>{k!==Js&&d.reject(k)}).finally(ma)}catch(k){d.reject(k),ma()}var h=re;if(o){if((c.f&Dr)!==0)var y=Hi();if((x=r.b)!=null&&x.is_rendered())(w=h.async_deriveds.get(c))==null||w.reject(os);else for(const k of l.values())k.reject(os);l.add(d),h.async_deriveds.set(c,d)}const p=(k,E=void 0)=>{y==null||y(),l.delete(d),E!==os&&(h.activate(),E?(i.f|=Mn,Rr(i,E)):((i.f&Mn)!==0&&(i.f^=Mn),Rr(i,k)),h.deactivate())};d.promise.then(p,k=>p(null,k||"unknown"))}),Na(()=>{for(const c of l)c.reject(os)}),new Promise(c=>{function d(h){function y(){h===s?c(i):d(s)}h.then(y,y)}d(s)})}function rt(e){const t=Or(e);return cl(t),t}function $o(e){const t=Or(e);return t.equals=Mi,t}function Ec(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)tt(t[n])}}function So(e){var t,n=me,r=e.parent;if(!yn&&r!==null&&e.v!==Ue&&(r.f&(mt|dt))!==0)return ac(),e.v;At(r);try{e.f&=~lr,Ec(e),t=vl(e)}finally{At(n)}return t}function ji(e){var t=So(e);if(!e.equals(t)&&(e.wv=dl(),(!(re!=null&&re.is_fork)||e.deps===null)&&(re!==null?(re.capture(e,t,!0),fs==null||fs.capture(e,t,!0)):e.v=t,e.deps===null))){De(e,Ge);return}yn||(et!==null?(To()||re!=null&&re.is_fork)&&et.set(e,t):ko(e))}function Tc(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&Br(()=>{n.ac.abort(Js),n.ac=null}),n.fn!==null&&(n.teardown=Bl),gs(n,0),zo(n))}function Bi(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Lr(t)}let Ha=null,xr=null,re=null,fs=null,et=null,no=null,vs=!1,ja=!1,wr=null,la=null;var Ko=0;let Nc=1;var Cr,Nn,tr,Er,Tr,Nr,_n,zr,pt,xs,gn,Lt,qt,Pr,nr,Te,ro,is,so,Vi,Ki,yr,zc,ls;const ka=class ka{constructor(){U(this,Te);it(this,"id",Nc++);U(this,Cr,!1);it(this,"linked",!0);U(this,Nn,null);U(this,tr,null);it(this,"async_deriveds",new Map);it(this,"current",new Map);it(this,"previous",new Map);U(this,Er,new Set);U(this,Tr,new Set);U(this,Nr,0);U(this,_n,new Map);U(this,zr,null);U(this,pt,[]);U(this,xs,[]);U(this,gn,new Set);U(this,Lt,new Set);U(this,qt,new Map);U(this,Pr,new Set);it(this,"is_fork",!1);U(this,nr,!1);xr===null?Ha=xr=this:(ue(xr,tr,this),ue(this,Nn,xr)),xr=this}skip_effect(t){u(this,qt).has(t)||u(this,qt).set(t,{d:[],m:[]}),u(this,Pr).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=u(this,qt).get(t);if(r){u(this,qt).delete(t);for(var s of r.d)De(s,Ye),n(s);for(s of r.m)De(s,Bt),n(s)}u(this,Pr).add(t)}capture(t,n,r=!1){t.v!==Ue&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&Mn)===0&&(this.current.set(t,[n,r]),et==null||et.set(t,n)),this.is_fork||(t.v=n)}activate(){re=this}deactivate(){re=null,et=null}flush(){try{ja=!0,re=this,ye(this,Te,is).call(this)}finally{Ko=0,no=null,wr=null,la=null,ja=!1,re=null,et=null,nn.clear()}}discard(){var t;for(const n of u(this,Tr))n(this);u(this,Tr).clear();for(const n of this.async_deriveds.values())n.reject(os);ye(this,Te,ls).call(this),(t=u(this,zr))==null||t.resolve()}register_created_effect(t){u(this,xs).push(t)}increment(t,n){if(ue(this,Nr,u(this,Nr)+1),t){let r=u(this,_n).get(n)??0;u(this,_n).set(n,r+1)}}decrement(t,n){if(ue(this,Nr,u(this,Nr)-1),t){let r=u(this,_n).get(n)??0;r===1?u(this,_n).delete(n):u(this,_n).set(n,r-1)}u(this,nr)||(ue(this,nr,!0),Zt(()=>{ue(this,nr,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)u(this,gn).add(r);for(const r of n)u(this,Lt).add(r);t.clear(),n.clear()}oncommit(t){u(this,Er).add(t)}ondiscard(t){u(this,Tr).add(t)}settled(){return(u(this,zr)??ue(this,zr,ki())).promise}static ensure(){if(re===null){const t=re=new ka;!ja&&!vs&&Zt(()=>{u(t,Cr)||t.flush()})}return re}apply(){{et=null;return}}schedule(t){var s;if(no=t,(s=t.b)!=null&&s.is_pending&&(t.f&(Ar|Ys|bo))!==0&&(t.f&Dr)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(wr!==null&&n===me&&(xe===null||(xe.f&Je)===0))return;if((r&(bn|Pt))!==0){if((r&Ge)===0)return;n.f^=Ge}}u(this,pt).push(n)}};Cr=new WeakMap,Nn=new WeakMap,tr=new WeakMap,Er=new WeakMap,Tr=new WeakMap,Nr=new WeakMap,_n=new WeakMap,zr=new WeakMap,pt=new WeakMap,xs=new WeakMap,gn=new WeakMap,Lt=new WeakMap,qt=new WeakMap,Pr=new WeakMap,nr=new WeakMap,Te=new WeakSet,ro=function(){if(this.is_fork)return!0;for(const r of u(this,_n).keys()){for(var t=r,n=!1;t.parent!==null;){if(u(this,qt).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},is=function(){var c,d,h,y;ue(this,Cr,!0),Ko++>1e3&&(ye(this,Te,ls).call(this),Mc());for(const p of u(this,gn))u(this,Lt).delete(p),De(p,Ye),this.schedule(p);for(const p of u(this,Lt))De(p,Bt),this.schedule(p);const t=u(this,pt);ue(this,pt,[]),this.apply();var n=wr=[],r=[],s=la=[];for(const p of t)try{ye(this,Te,so).call(this,p,n,r)}catch(x){throw qi(p),ye(this,Te,ro).call(this)||this.discard(),x}if(re=null,s.length>0){var i=ka.ensure();for(const p of s)i.schedule(p)}if(wr=null,la=null,ye(this,Te,ro).call(this)){ye(this,Te,yr).call(this,r),ye(this,Te,yr).call(this,n);for(const[p,x]of u(this,qt))Wi(p,x);s.length>0&&ye(c=re,Te,is).call(c);return}const o=ye(this,Te,Vi).call(this);if(o){ye(this,Te,yr).call(this,r),ye(this,Te,yr).call(this,n),ye(d=o,Te,Ki).call(d,this);return}u(this,gn).clear(),u(this,Lt).clear();for(const p of u(this,Er))p(this);u(this,Er).clear(),fs=this,Uo(r),Uo(n),fs=null,(h=u(this,zr))==null||h.resolve();var l=re;if(u(this,Nr)===0&&(u(this,pt).length===0||l!==null)&&ye(this,Te,ls).call(this),u(this,pt).length>0)if(l!==null){const p=l;u(p,pt).push(...u(this,pt).filter(x=>!u(p,pt).includes(x)))}else l=this;l!==null&&(nn.clear(),ye(y=l,Te,is).call(y))},so=function(t,n,r){t.f^=Ge;for(var s=t.first;s!==null;){var i=s.f,o=(i&(Pt|bn))!==0,l=o&&(i&Ge)!==0,c=l||(i&dt)!==0||u(this,qt).has(s);if(!c&&s.fn!==null){o?s.f^=Ge:(i&Ar)!==0?n.push(s):Zs(s)&&((i&Ft)!==0&&u(this,Lt).add(s),Lr(s));var d=s.first;if(d!==null){s=d;continue}}for(;s!==null;){var h=s.next;if(h!==null){s=h;break}s=s.parent}}},Vi=function(){for(var t=u(this,Nn);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=u(t,Nn)}return null},Ki=function(t){var r;for(const[s,i]of t.current)!this.previous.has(s)&&t.previous.has(s)&&this.previous.set(s,t.previous.get(s)),this.current.set(s,i);for(const[s,i]of t.async_deriveds){const o=this.async_deriveds.get(s);o&&i.promise.then(o.resolve).catch(o.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,gn),u(t,Lt));const n=s=>{var i=s.reactions;if(i!==null&&!((s.f&Je)!==0&&(s.f&(Ye|Bt))===0))for(const c of i){var o=c.f;if((o&Je)!==0)n(c);else{var l=c;o&(kr|Ft)&&!this.async_deriveds.has(l)&&(u(this,Lt).delete(l),De(l,Ye),this.schedule(l))}}};for(const s of this.current.keys())n(s);this.oncommit(()=>t.discard()),ye(r=t,Te,ls).call(r),re=this,ye(this,Te,is).call(this)},yr=function(t){for(var n=0;n<t.length;n+=1)Ri(t[n],u(this,gn),u(this,Lt))},zc=function(){var y;for(let p=Ha;p!==null;p=u(p,tr)){var t=p.id<this.id,n=[];for(const[x,[w,k]]of this.current){if(p.current.has(x)){var r=p.current.get(x)[0];if(t&&w!==r)p.current.set(x,[w,k]);else continue}n.push(x)}if(t)for(const[x,w]of this.async_deriveds){const k=p.async_deriveds.get(x);k&&w.promise.then(k.resolve).catch(k.reject)}var s=[...p.current.keys()].filter(x=>!p.current.get(x)[1]);if(!(!u(p,Cr)||s.length===0)){var i=s.filter(x=>!this.current.has(x));if(i.length===0)t&&p.discard();else if(n.length>0){if(t)for(const x of u(this,Pr))p.unskip_effect(x,w=>{var k;(w.f&(Ft|kr))!==0?p.schedule(w):ye(k=p,Te,yr).call(k,[w])});p.activate();var o=new Set,l=new Map;for(var c of n)Ui(c,i,o,l);l=new Map;var d=[...p.current].filter(([x,w])=>{const k=this.current.get(x);return k?k[0]!==w[0]||k[1]!==w[1]:!0}).map(([x])=>x);if(d.length>0)for(const x of u(this,xs))(x.f&(mt|dt|_a))===0&&Co(x,d,l)&&((x.f&(kr|Ft))!==0?(De(x,Ye),p.schedule(x)):u(p,gn).add(x));if(u(p,pt).length>0&&!u(p,nr)){p.apply();for(var h of u(p,pt))ye(y=p,Te,so).call(y,h,[],[]);ue(p,pt,[])}p.deactivate()}}}},ls=function(){if(this.linked){var t=u(this,Nn),n=u(this,tr);t===null?Ha=n:ue(t,tr,n),n===null?xr=t:ue(n,Nn,t),this.linked=!1}};let cr=ka;function Pc(e){var t=vs;vs=!0;try{for(var n;;){if(yc(),re===null)return n;re.flush()}}finally{vs=t}}function Mc(){try{hc()}catch(e){Jt(e,no)}}let Rt=null;function Uo(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(mt|dt))===0&&Zs(r)&&(Rt=new Set,Lr(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&ol(r),(Rt==null?void 0:Rt.size)>0)){nn.clear();for(const s of Rt){if((s.f&(mt|dt))!==0)continue;const i=[s];let o=s.parent;for(;o!==null;)Rt.has(o)&&(Rt.delete(o),i.push(o)),o=o.parent;for(let l=i.length-1;l>=0;l--){const c=i[l];(c.f&(mt|dt))===0&&Lr(c)}}Rt.clear()}}Rt=null}}function Ui(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const s of e.reactions){const i=s.f;(i&Je)!==0?Ui(s,t,n,r):(i&(kr|Ft))!==0&&(i&Ye)===0&&Co(s,t,r)&&(De(s,Ye),Eo(s))}}function Co(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const s of e.deps){if(ha.call(t,s))return!0;if((s.f&Je)!==0&&Co(s,t,n))return n.set(s,!0),!0}return n.set(e,!1),!1}function Eo(e){re.schedule(e)}function Wi(e,t){if(!((e.f&Pt)!==0&&(e.f&Ge)!==0)){(e.f&Ye)!==0?t.d.push(e):(e.f&Bt)!==0&&t.m.push(e),De(e,Ge);for(var n=e.first;n!==null;)Wi(n,t),n=n.next}}function qi(e){De(e,Ge);for(var t=e.first;t!==null;)qi(t),t=t.next}let ba=new Set;const nn=new Map;let Gi=!1;function xn(e,t){var n={f:0,v:e,reactions:null,equals:Pi,rv:0,wv:0};return n}function O(e,t){const n=xn(e);return cl(n),n}function Ac(e,t=!1,n=!0){var s;const r=xn(e);return t||(r.equals=Mi),Hr&&n&&Ae!==null&&Ae.l!==null&&((s=Ae.l).s??(s.s=[])).push(r),r}function f(e,t,n=!1){xe!==null&&(!jt||(xe.f&_a)!==0)&&jr()&&(xe.f&(Je|Ft|kr|_a))!==0&&(sn===null||!sn.has(e))&&mc();let r=n?ze(t):t;return Rr(e,r,la)}function Rr(e,t,n=null){if(!e.equals(t)){yn?nn.set(e,t):nn.has(e)||nn.set(e,e.v);var r=cr.ensure();if(r.capture(e,t),(e.f&Je)!==0){const s=e;(e.f&Ye)!==0&&So(s),et===null&&ko(s)}e.wv=dl(),Yi(e,Ye,n),jr()&&me!==null&&(me.f&Ge)!==0&&(me.f&(Pt|bn))===0&&(Et===null?Vc([e]):Et.push(e)),!r.is_fork&&ba.size>0&&!Gi&&Ic()}return t}function Ic(){Gi=!1;for(const e of ba){(e.f&Ge)!==0&&De(e,Bt);let t;try{t=Zs(e)}catch{t=!0}t&&Lr(e)}ba.clear()}function Wo(e,t=1){var n=a(e),r=t===1?n++:n--;return f(e,n),r}function hs(e){f(e,e.v+1)}function Yi(e,t,n){var r=e.reactions;if(r!==null)for(var s=jr(),i=r.length,o=0;o<i;o++){var l=r[o],c=l.f;if(!(!s&&l===me)){var d=(c&Ye)===0;if(d&&De(l,t),(c&_a)!==0)ba.add(l);else if((c&Je)!==0){var h=l;et==null||et.delete(h),(c&lr)===0&&(c&zt&&(me===null||(me.f&ga)===0)&&(l.f|=lr),Yi(h,Bt,n))}else if(d){var y=l;(c&Ft)!==0&&Rt!==null&&Rt.add(y),n!==null?n.push(y):Eo(y)}}}}function ze(e){if(typeof e!="object"||e===null||tn in e||Si in e)return e;const t=mo(e);if(t!==Hl&&t!==jl)return e;var n=new Map,r=Ca(e),s=O(0),i=ir,o=l=>{if(ir===i)return l();var c=xe,d=ir;Mt(null),Yo(i);var h=l();return Mt(c),Yo(d),h};return r&&n.set("length",O(e.length)),new Proxy(e,{defineProperty(l,c,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&_c();var h=n.get(c);return h===void 0?o(()=>{var y=O(d.value);return n.set(c,y),y}):f(h,d.value,!0),!0},deleteProperty(l,c){var d=n.get(c);if(d===void 0){if(c in l){const h=o(()=>O(Ue));n.set(c,h),hs(s)}}else f(d,Ue),hs(s);return!0},get(l,c,d){var x;if(c===tn)return e;var h=n.get(c),y=c in l;if(h===void 0&&(!y||(x=Pn(l,c))!=null&&x.writable)&&(h=o(()=>{var w=ze(y?l[c]:Ue),k=O(w);return k}),n.set(c,h)),h!==void 0){var p=a(h);return p===Ue?void 0:p}return Reflect.get(l,c,d)},getOwnPropertyDescriptor(l,c){var d=Reflect.getOwnPropertyDescriptor(l,c);if(d&&"value"in d){var h=n.get(c);h&&(d.value=a(h))}else if(d===void 0){var y=n.get(c),p=y==null?void 0:y.v;if(y!==void 0&&p!==Ue)return{enumerable:!0,configurable:!0,value:p,writable:!0}}return d},has(l,c){var p;if(c===tn)return!0;var d=n.get(c),h=d!==void 0&&d.v!==Ue||Reflect.has(l,c);if(d!==void 0||me!==null&&(!h||(p=Pn(l,c))!=null&&p.writable)){d===void 0&&(d=o(()=>{var x=h?ze(l[c]):Ue,w=O(x);return w}),n.set(c,d));var y=a(d);if(y===Ue)return!1}return h},set(l,c,d,h){var P;var y=n.get(c),p=c in l;if(r&&c==="length")for(var x=d;x<y.v;x+=1){var w=n.get(x+"");w!==void 0?f(w,Ue):x in l&&(w=o(()=>O(Ue)),n.set(x+"",w))}if(y===void 0)(!p||(P=Pn(l,c))!=null&&P.writable)&&(y=o(()=>O(void 0)),f(y,ze(d)),n.set(c,y));else{p=y.v!==Ue;var k=o(()=>ze(d));f(y,k)}var E=Reflect.getOwnPropertyDescriptor(l,c);if(E!=null&&E.set&&E.set.call(h,d),!p){if(r&&typeof c=="string"){var T=n.get("length"),I=Number(c);Number.isInteger(I)&&I>=T.v&&f(T,I+1)}hs(s)}return!0},ownKeys(l){a(s);var c=Reflect.ownKeys(l).filter(y=>{var p=n.get(y);return p===void 0||p.v!==Ue});for(var[d,h]of n)h.v!==Ue&&!(d in l)&&c.push(d);return c},setPrototypeOf(){gc()}})}function qo(e){try{if(e!==null&&typeof e=="object"&&tn in e)return e[tn]}catch{}return e}function Ji(e,t){return Object.is(qo(e),qo(t))}var _s,Xi,Zi,Qi;function Oc(){if(_s===void 0){_s=window,Xi=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Zi=Pn(t,"firstChild").get,Qi=Pn(t,"nextSibling").get,Bo(e)&&(e[eo]=void 0,e[oa]=null,e[to]=void 0,e.__e=void 0),Bo(n)&&(n[as]=void 0)}}function rn(e=""){return document.createTextNode(e)}function Ht(e){return Zi.call(e)}function Xs(e){return Qi.call(e)}function b(e,t){return Ht(e)}function B(e,t=!1){{var n=Ht(e);return n instanceof Comment&&n.data===""?Xs(n):n}}function ee(e,t=!1){return Ht(e)}function v(e,t=1,n=!1){let r=e;for(;t--;)r=Xs(r);return r}function Rc(e){e.textContent=""}function el(){return!1}function Ta(e,t,n){return t==null||t===Ni?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Lc(e){var t=me;if(t===null)return xe.f|=Mn,e;if((t.f&Dr)===0&&(t.f&Ar)===0)throw e;Jt(e,t)}function Jt(e,t){if(!(t!==null&&(t.f&mt)!==0)){for(;t!==null;){if((t.f&Qa)!==0&&(t.f&(mt|pa))===0){if((t.f&Dr)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function tl(e){me===null&&(xe===null&&vc(),fc()),yn&&dc()}function Dc(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Vt(e,t){var n=me;n!==null&&(n.f&dt)!==0&&(e|=dt);var r={ctx:Ae,deps:null,nodes:null,f:e|Ye|zt,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};re==null||re.register_created_effect(r);var s=r;if((e&Ar)!==0)wr!==null?wr.push(r):cr.ensure().schedule(r);else if(t!==null){try{Lr(r)}catch(o){throw tt(r),o}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&Fr)===0&&(s=s.first,(e&Ft)!==0&&(e&An)!==0&&s!==null&&(s.f|=An))}if(s!==null&&(s.parent=n,n!==null&&Dc(s,n),xe!==null&&(xe.f&Je)!==0&&(e&bn)===0)){var i=xe;(i.effects??(i.effects=[])).push(s)}return r}function To(){return xe!==null&&!jt}function Na(e){const t=Vt(Ys,null);return De(t,Ge),t.teardown=e,t}function st(e){tl();var t=me.f,n=!xe&&(t&Pt)!==0&&Ae!==null&&!Ae.i;if(n){var r=Ae;(r.e??(r.e=[])).push(e)}else return nl(e)}function nl(e){return Vt(Ar|$i,e)}function Fc(e){return tl(),Vt(Ys|$i,e)}function Hc(e){cr.ensure();const t=Vt(bn|Fr,e);return(n={})=>new Promise(r=>{n.outro?or(t,()=>{tt(t),r(void 0)}):(tt(t),r(void 0))})}function za(e){return Vt(Ar,e)}function jc(e){return Vt(kr|Fr,e)}function No(e,t=0){return Vt(Ys|t,e)}function G(e,t=[],n=[],r=[]){Fi(r,t,n,s=>{Vt(Ys,()=>{e(...s.map(a))})})}function Vr(e,t=0){var n=Vt(Ft|t,e);return n}function rl(e,t=0){var n=Vt(bo|t,e);return n}function _t(e){return Vt(Pt|Fr,e)}function sl(e){var t=e.teardown;if(t!==null){const n=yn,r=xe;Go(!0),Mt(null);try{t.call(null)}catch(s){Jt(s,e.parent)}finally{Go(n),Mt(r)}}}function zo(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const s=n.ac;s!==null&&Br(()=>{s.abort(Js)});var r=n.next;(n.f&bn)!==0?n.parent=null:tt(n,t),n=r}}function Bc(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Pt)===0&&tt(t),t=n}}function tt(e,t=!0){var n=!1;(t||(e.f&Ul)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(al(e.nodes.start,e.nodes.end),n=!0),e.f|=pa,zo(e,t&&!n),gs(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const i of r)i.stop();sl(e),e.f^=pa,e.f|=mt;var s=e.parent;s!==null&&s.first!==null&&ol(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function al(e,t){for(;e!==null;){var n=e===t?null:Xs(e);e.remove(),e=n}}function ol(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function or(e,t,n=!0){var r=[];e.f|=xo,il(e,r,!0);var s=()=>{n&&tt(e),t&&t()},i=r.length;if(i>0){var o=()=>--i||s();for(var l of r)l.out(o)}else s()}function il(e,t,n){if((e.f&dt)===0){e.f^=dt;var r=e.nodes&&e.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&t.push(l);for(var s=e.first;s!==null;){var i=s.next;if((s.f&bn)===0){var o=(s.f&An)!==0||(s.f&Pt)!==0&&(e.f&Ft)!==0;il(s,t,o?n:!1)}s=i}}}function xa(e){e.f&=~xo,ll(e,!0)}function ll(e,t){if((e.f&xo)===0&&(e.f&dt)!==0){e.f^=dt,(e.f&Ge)===0&&(De(e,Ye),cr.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,s=(n.f&An)!==0||(n.f&Pt)!==0;ll(n,s?t:!1),n=r}var i=e.nodes&&e.nodes.t;if(i!==null)for(const o of i)(o.is_global||t)&&o.in()}}function Po(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var s=n===r?null:Xs(n);t.append(n),n=s}}let ca=!1,yn=!1;function Go(e){yn=e}let xe=null,jt=!1;function Mt(e){xe=e}let me=null;function At(e){me=e}let sn=null;function cl(e){xe!==null&&(sn??(sn=new Set)).add(e)}let gt=null,$t=0,Et=null;function Vc(e){Et=e}let ul=1,Qn=0,ir=Qn;function Yo(e){ir=e}function dl(){return++ul}function Zs(e){var t=e.f;if((t&Ye)!==0)return!0;if(t&Je&&(e.f&=~lr),(t&Bt)!==0){for(var n=e.deps,r=n.length,s=0;s<r;s++){var i=n[s];if(Zs(i)&&ji(i),i.wv>e.wv)return!0}(t&zt)!==0&&et===null&&De(e,Ge)}return!1}function fl(e,t,n=!0){var r=e.reactions;if(r!==null&&!(sn!==null&&sn.has(e)))for(var s=0;s<r.length;s++){var i=r[s];(i.f&Je)!==0?fl(i,t,!1):t===i&&(n?De(i,Ye):(i.f&Ge)!==0&&De(i,Bt),Eo(i))}}function vl(e){var t=gt,n=$t,r=Et,s=xe,i=sn,o=Ae,l=jt,c=ir,d=e.f;gt=null,$t=0,Et=null,xe=(d&(Pt|bn))===0?e:null,sn=null,Ir(e.ctx),jt=!1,ir=++Qn,e.ac!==null&&(Br(()=>{e.ac.abort(Js)}),e.ac=null);try{e.f|=ga;var h=e.fn,y=h();e.f|=Dr;var p=Jo(e);if(jr()&&Et!==null&&!jt&&p!==null&&(e.f&(Je|Bt|Ye))===0)for(var x=0;x<Et.length;x++)fl(Et[x],e);if(s!==null&&s!==e){if(Qn++,s.deps!==null)for(let w=0;w<n;w+=1)s.deps[w].rv=Qn;if(t!==null)for(const w of t)w.rv=Qn;Et!==null&&(r===null?r=Et:r.push(...Et))}return(e.f&Mn)!==0&&(e.f^=Mn),y}catch(w){return Jo(e),Lc(w)}finally{e.f^=ga,gt=t,$t=n,Et=r,xe=s,sn=i,Ir(o),jt=l,ir=c}}function Jo(e){var s;var t=e.deps,n=re==null?void 0:re.is_fork;if(gt!==null){var r;if(n||gs(e,$t),t!==null&&$t>0)for(t.length=$t+gt.length,r=0;r<gt.length;r++)t[$t+r]=gt[r];else e.deps=t=gt;if(To()&&(e.f&zt)!==0)for(r=$t;r<t.length;r++)((s=t[r]).reactions??(s.reactions=[])).push(e)}else!n&&t!==null&&$t<t.length&&(gs(e,$t),t.length=$t);return t}function Kc(e,t){let n=t.reactions;if(n!==null){var r=Fl.call(n,e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(t.f&Je)!==0&&(gt===null||!ha.call(gt,t))){var i=t;(i.f&zt)!==0&&(i.f^=zt,i.f&=~lr),i.v!==Ue&&ko(i),i.ac!==null&&Br(()=>{i.ac.abort(Js),i.ac=null,De(i,Ye)}),Tc(i),gs(i,0)}}function gs(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Kc(e,n[r])}function Lr(e){var t=e.f;if((t&mt)===0){De(e,Ge);var n=me,r=ca;me=e,ca=(t&(Pt|bn))===0;try{(t&(Ft|bo))!==0?Bc(e):zo(e),sl(e);var s=vl(e);e.teardown=typeof s=="function"?s:null,e.wv=ul;var i}finally{ca=r,me=n}}}async function Uc(){await Promise.resolve(),Pc()}function a(e){var t=e.f,n=(t&Je)!==0;if(xe!==null&&!jt){var r=me!==null&&(me.f&mt)!==0;if(!r&&(sn===null||!sn.has(e))){var s=xe.deps;if((xe.f&ga)!==0)e.rv<Qn&&(e.rv=Qn,gt===null&&s!==null&&s[$t]===e?$t++:gt===null?gt=[e]:gt.push(e));else{xe.deps??(xe.deps=[]),ha.call(xe.deps,e)||xe.deps.push(e);var i=e.reactions;i===null?e.reactions=[xe]:ha.call(i,xe)||i.push(xe)}}}if(yn&&nn.has(e))return nn.get(e);if(n){var o=e;if(yn){var l=o.v;return((o.f&Ge)===0&&o.reactions!==null||pl(o))&&(l=So(o)),nn.set(o,l),l}var c=(o.f&zt)===0&&!jt&&xe!==null&&(ca||(xe.f&zt)!==0),d=(o.f&Dr)===0;Zs(o)&&(c&&(o.f|=zt),ji(o)),c&&!d&&(Bi(o),hl(o))}if(et!=null&&et.has(e))return et.get(e);if((e.f&Mn)!==0)throw e.v;return e.v}function hl(e){if(e.f|=zt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Je)!==0&&(t.f&zt)===0&&(Bi(t),hl(t))}function pl(e){if(e.v===Ue)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(nn.has(t)||(t.f&Je)!==0&&pl(t))return!0;return!1}function wn(e){var t=jt;try{return jt=!0,e()}finally{jt=t}}function Jn(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(tn in e)ao(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&tn in n&&ao(n)}}}function ao(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{ao(e[r],t)}catch{}const n=mo(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=wi(n);for(let s in r){const i=r[s].get;if(i)try{i.call(e)}catch{}}}}}function Wc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const qc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Gc(e){return qc.includes(e)}const Yc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Jc(e){return e=e.toLowerCase(),Yc[e]??e}const Xc=["touchstart","touchmove"];function Zc(e){return Xc.includes(e)}const er=Symbol("events"),_l=new Set,oo=new Set;function gl(e,t,n,r={}){function s(i){if(r.capture||io.call(t,i),!i.cancelBubble)return Br(()=>n==null?void 0:n.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Zt(()=>{t.addEventListener(e,s,r)}):t.addEventListener(e,s,r),s}function In(e,t,n,r,s){var i={capture:r,passive:s},o=gl(e,t,n,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Na(()=>{t.removeEventListener(e,o,i)})}function L(e,t,n){(t[er]??(t[er]={}))[e]=n}function It(e){for(var t=0;t<e.length;t++)_l.add(e[t]);for(var n of oo)n(e)}let Ba=null,Va=!1;function io(e){var k,E;var t=this,n=t.ownerDocument,r=e.type,s=((k=e.composedPath)==null?void 0:k.call(e))||[],i=s[0]||e.target;Ba=e,Va||(Va=!0,setTimeout(()=>{Va=!1,Ba=null}));var o=0,l=Ba===e&&e[er];if(l){var c=s.indexOf(l);if(c!==-1&&(t===document||t===window)){e[er]=t;return}var d=s.indexOf(t);if(d===-1)return;c<=d&&(o=c)}if(i=s[o]||e.target,i!==t){yi(e,"currentTarget",{configurable:!0,get(){return i||n}});var h=xe,y=me;Mt(null),At(null);try{for(var p,x=[];i!==null&&i!==t;){try{var w=(E=i[er])==null?void 0:E[r];w!=null&&(!i.disabled||e.target===i)&&w.call(i,e)}catch(T){p?x.push(T):p=T}if(e.cancelBubble)break;o++,i=o<s.length?s[o]:null}if(p){for(let T of x)queueMicrotask(()=>{throw T});throw p}}finally{e[er]=t,delete e.currentTarget,Mt(h),At(y)}}}var bi;const Ka=((bi=globalThis==null?void 0:globalThis.window)==null?void 0:bi.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Qc(e){return(Ka==null?void 0:Ka.createHTML(e))??e}function ml(e){var t=Ta("template");return t.innerHTML=Qc(e.replaceAll("<!>","<!---->")),t.content}function On(e,t){var n=me;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function A(e,t){var n=(t&tc)!==0,r=(t&nc)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=ml(i?e:"<!>"+e),n||(s=Ht(s)));var o=r||Xi?document.importNode(s,!0):s.cloneNode(!0);if(n){var l=Ht(o),c=o.lastChild;On(l,c)}else On(o,o);return o}}function eu(e,t,n="svg"){var r=!e.startsWith("<!>"),s=`<${n}>${r?e:"<!>"+e}</${n}>`,i;return()=>{if(!i){var o=ml(s),l=Ht(o);i=Ht(l)}var c=i.cloneNode(!0);return On(c,c),c}}function bl(e,t){return eu(e,t,"svg")}function Xo(e=""){{var t=rn(e+"");return On(t,t),t}}function te(){var e=document.createDocumentFragment(),t=document.createComment(""),n=rn();return e.append(t,n),On(t,n),e}function m(e,t){e!==null&&e.before(t)}function tu(e){let t=0,n=xn(0),r;return()=>{To()&&(a(n),No(()=>(t===0&&(r=wn(()=>e(()=>hs(n)))),t+=1,()=>{Zt(()=>{t-=1,t===0&&(r==null||r(),r=void 0,hs(n))})})))}}var nu=An|Fr;function ru(e,t,n,r){new su(e,t,n,r)}var Tt,go,Nt,rr,lt,yt,ct,wt,Gt,sr,zn,Mr,ys,ws,mn,$a,Pe,au,ou,lo,iu,co,cs,ua,uo,fo;class su{constructor(t,n,r,s){U(this,Pe);it(this,"parent");it(this,"is_pending",!1);it(this,"transform_error");U(this,Tt);U(this,go,null);U(this,Nt);U(this,rr);U(this,lt);U(this,yt,null);U(this,ct,null);U(this,wt,null);U(this,Gt,null);U(this,sr,0);U(this,zn,0);U(this,Mr,!1);U(this,ys,new Set);U(this,ws,new Set);U(this,mn,null);U(this,$a,tu(()=>(ue(this,mn,xn(u(this,sr))),()=>{ue(this,mn,null)})));var i;ue(this,Tt,t),ue(this,Nt,n),ue(this,rr,o=>{var l=me;l.b=this,l.f|=Qa,r(o)}),this.parent=me.b,this.transform_error=s??((i=this.parent)==null?void 0:i.transform_error)??(o=>o),ue(this,lt,Vr(()=>{ye(this,Pe,co).call(this)},nu))}defer_effect(t){Ri(t,u(this,ys),u(this,ws))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,Nt).pending}update_pending_count(t,n){ye(this,Pe,uo).call(this,t,n),ue(this,sr,u(this,sr)+t),!(!u(this,mn)||u(this,Mr))&&(ue(this,Mr,!0),Zt(()=>{ue(this,Mr,!1),u(this,mn)&&Rr(u(this,mn),u(this,sr))}))}get_effect_pending(){return u(this,$a).call(this),a(u(this,mn))}error(t){if(!u(this,Nt).onerror&&!u(this,Nt).failed)throw t;re!=null&&re.is_fork?(u(this,yt)&&re.skip_effect(u(this,yt)),u(this,ct)&&re.skip_effect(u(this,ct)),u(this,wt)&&re.skip_effect(u(this,wt)),re.oncommit(()=>{ye(this,Pe,fo).call(this,t)})):ye(this,Pe,fo).call(this,t)}}Tt=new WeakMap,go=new WeakMap,Nt=new WeakMap,rr=new WeakMap,lt=new WeakMap,yt=new WeakMap,ct=new WeakMap,wt=new WeakMap,Gt=new WeakMap,sr=new WeakMap,zn=new WeakMap,Mr=new WeakMap,ys=new WeakMap,ws=new WeakMap,mn=new WeakMap,$a=new WeakMap,Pe=new WeakSet,au=function(){try{ue(this,yt,_t(()=>u(this,rr).call(this,u(this,Tt))))}catch(t){this.error(t)}},ou=function(t){const n=u(this,Nt).failed,{reset:r,invoke_onerror:s}=ye(this,Pe,lo).call(this,t);Zt(s),n&&ue(this,wt,_t(()=>{n(u(this,Tt),()=>t,()=>r)}))},lo=function(t){var n=!1,r=!1;const s=()=>{if(n){ic();return}n=!0,r&&bc(),u(this,wt)!==null&&or(u(this,wt),()=>{ue(this,wt,null)}),ye(this,Pe,ua).call(this,()=>{ye(this,Pe,co).call(this)})};return{reset:s,invoke_onerror:()=>{var o,l;try{r=!0,(l=(o=u(this,Nt)).onerror)==null||l.call(o,t,s),r=!1}catch(c){Jt(c,u(this,lt)&&u(this,lt).parent)}}}},iu=function(){const t=u(this,Nt).pending;t&&(this.is_pending=!0,ue(this,ct,_t(()=>t(u(this,Tt)))),Zt(()=>{var n=ue(this,Gt,document.createDocumentFragment()),r=rn(),s=!1;if(n.append(r),ue(this,yt,ye(this,Pe,ua).call(this,()=>{try{return _t(()=>u(this,rr).call(this,r))}catch(i){try{this.error(i),s=!0}catch(o){Jt(o,u(this,lt).parent)}return null}})),u(this,yt)===null){ue(this,Gt,null),s&&ye(this,Pe,cs).call(this,re);return}u(this,zn)===0&&(u(this,Tt).before(n),ue(this,Gt,null),or(u(this,ct),()=>{ue(this,ct,null)}),ye(this,Pe,cs).call(this,re))}))},co=function(){try{if(this.is_pending=this.has_pending_snippet(),ue(this,zn,0),ue(this,sr,0),ue(this,yt,_t(()=>{u(this,rr).call(this,u(this,Tt))})),u(this,zn)>0){var t=ue(this,Gt,document.createDocumentFragment());Po(u(this,yt),t);const n=u(this,Nt).pending;ue(this,ct,_t(()=>n(u(this,Tt))))}else ye(this,Pe,cs).call(this,re)}catch(n){this.error(n)}},cs=function(t){this.is_pending=!1,t.transfer_effects(u(this,ys),u(this,ws))},ua=function(t){var n=me,r=xe,s=Ae;At(u(this,lt)),Mt(u(this,lt)),Ir(u(this,lt).ctx);try{return cr.ensure(),t()}finally{At(n),Mt(r),Ir(s)}},uo=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&ye(r=this.parent,Pe,uo).call(r,t,n);return}ue(this,zn,u(this,zn)+t),u(this,zn)===0&&(ye(this,Pe,cs).call(this,n),u(this,ct)&&or(u(this,ct),()=>{ue(this,ct,null)}),u(this,Gt)&&(u(this,Tt).before(u(this,Gt)),ue(this,Gt,null)))},fo=function(t){u(this,yt)&&(tt(u(this,yt)),ue(this,yt,null)),u(this,ct)&&(tt(u(this,ct)),ue(this,ct,null)),u(this,wt)&&(tt(u(this,wt)),ue(this,wt,null));let n=u(this,Nt).failed;const r=s=>{const{reset:i,invoke_onerror:o}=ye(this,Pe,lo).call(this,s);o(),n&&ue(this,wt,ye(this,Pe,ua).call(this,()=>{try{return _t(()=>{var l=me;l.b=this,l.f|=Qa,n(u(this,Tt),()=>s,()=>i)})}catch(l){return Jt(l,u(this,lt).parent),null}}))};Zt(()=>{var s;try{s=this.transform_error(t)}catch(i){Jt(i,u(this,lt)&&u(this,lt).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,i=>Jt(i,u(this,lt)&&u(this,lt).parent)):r(s)})};function K(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[as]??(e[as]=e.nodeValue))&&(e[as]=n,e.nodeValue=`${n}`)}function lu(e,t){return cu(e,t)}const sa=new Map;function cu(e,{target:t,anchor:n,props:r={},events:s,context:i,intro:o=!0,transformError:l}){Oc();var c=void 0,d=Hc(()=>{var h=n??t.appendChild(rn());ru(h,{pending:()=>{}},x=>{ft({});var w=Ae;i&&(w.c=i),s&&(r.$$events=s),c=e(x,r)||wo(),vt()},l);var y=new Set,p=x=>{for(var w=0;w<x.length;w++){var k=x[w];if(!y.has(k)){y.add(k);var E=Zc(k);for(const P of[t,document]){var T=sa.get(P);T===void 0&&(T=new Map,sa.set(P,T));var I=T.get(k);I===void 0?(P.addEventListener(k,io,{passive:E}),T.set(k,1)):T.set(k,I+1)}}}};return p(Ea(_l)),oo.add(p),()=>{var E;for(var x of y)for(const T of[t,document]){var w=sa.get(T),k=w.get(x);--k==0?(T.removeEventListener(x,io),w.delete(x),w.size===0&&sa.delete(T)):w.set(x,k)}oo.delete(p),h!==n&&((E=h.parentNode)==null||E.removeChild(h))}});return uu.set(c,d),c}let uu=new WeakMap;var Dt,Yt,kt,ar,ks,$s,Sa;class Pa{constructor(t,n=!0){it(this,"anchor");U(this,Dt,new Map);U(this,Yt,new Map);U(this,kt,new Map);U(this,ar,new Set);U(this,ks,!0);U(this,$s,t=>{if(u(this,Dt).has(t)){var n=u(this,Dt).get(t),r=u(this,Yt).get(n);if(r)xa(r),u(this,ar).delete(n);else{var s=u(this,kt).get(n);s&&(xa(s.effect),u(this,Yt).set(n,s.effect),u(this,kt).delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,o]of u(this,Dt)){if(u(this,Dt).delete(i),i===t)break;const l=u(this,kt).get(o);l&&(tt(l.effect),u(this,kt).delete(o))}for(const[i,o]of u(this,Yt)){if(i===n||u(this,ar).has(i))continue;const l=()=>{if(Array.from(u(this,Dt).values()).includes(i)){var d=document.createDocumentFragment();Po(o,d),d.append(rn()),u(this,kt).set(i,{effect:o,fragment:d})}else tt(o);u(this,ar).delete(i),u(this,Yt).delete(i)};u(this,ks)||!r?(u(this,ar).add(i),or(o,l,!1)):l()}}});U(this,Sa,t=>{u(this,Dt).delete(t);const n=Array.from(u(this,Dt).values());for(const[r,s]of u(this,kt))n.includes(r)||(tt(s.effect),u(this,kt).delete(r))});this.anchor=t,ue(this,ks,n)}ensure(t,n){var r=re,s=el();if(n&&!u(this,Yt).has(t)&&!u(this,kt).has(t))if(s){var i=document.createDocumentFragment(),o=rn();i.append(o),u(this,kt).set(t,{effect:_t(()=>n(o)),fragment:i})}else u(this,Yt).set(t,_t(()=>n(this.anchor)));if(u(this,Dt).set(r,t),s){for(const[l,c]of u(this,Yt))l===t?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of u(this,kt))l===t?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(u(this,$s)),r.ondiscard(u(this,Sa))}else u(this,$s).call(this,r)}}Dt=new WeakMap,Yt=new WeakMap,kt=new WeakMap,ar=new WeakMap,ks=new WeakMap,$s=new WeakMap,Sa=new WeakMap;function H(e,t,n=!1){var r=new Pa(e),s=n?An:0;function i(o,l){r.ensure(o,l)}Vr(()=>{var o=!1;t((l,c=0)=>{o=!0,i(c,l)}),o||i(-1,null)},s)}const du=Symbol("NaN");function fu(e,t,n){var r=new Pa(e),s=!jr();Vr(()=>{var i=t();i!==i&&(i=du),s&&i!==null&&typeof i=="object"&&(i={}),r.ensure(i,n)})}function xl(e,t){return t}function vu(e,t,n){for(var r=[],s=t.length,i,o=t.length,l=0;l<s;l++){let y=t[l];or(y,()=>{if(i){if(i.pending.delete(y),i.done.add(y),i.pending.size===0){var p=e.outrogroups;vo(e,Ea(i.done)),p.delete(i),p.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var c=r.length===0&&n!==null&&e.pending.size===0;if(c){var d=n,h=d.parentNode;Rc(h),h.append(d),e.items.clear()}vo(e,t,!c)}else i={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(i)}function vo(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const o of e.pending.values())for(const l of o)r.add(e.items.get(l).e)}for(var s=0;s<t.length;s++){var i=t[s];if(r!=null&&r.has(i)){i.f|=Xt;const o=document.createDocumentFragment();Po(i,o)}else tt(t[s],n)}}var Zo;function Be(e,t,n,r,s,i=null){var o=e,l=new Map,c=(t&Ei)!==0;if(c){var d=e;o=d.appendChild(rn())}var h=null,y=$o(()=>{var P=n();return Ca(P)?P:P==null?[]:Ea(P)}),p,x=new Map,w=!0;function k(P){(I.effect.f&mt)===0&&(I.pending.delete(P),I.fallback=h,hu(I,p,o,t,r),h!==null&&(p.length===0?(h.f&Xt)===0?xa(h):(h.f^=Xt,us(h,null,o)):or(h,()=>{h=null})))}function E(P){I.pending.delete(P)}var T=Vr(()=>{p=a(y);for(var P=p.length,W=new Set,N=re,S=el(),R=0;R<P;R+=1){var q=p[R],ne=r(q,R),D=w?null:l.get(ne);D?(D.v&&Rr(D.v,q),D.i&&Rr(D.i,R),S&&N.unskip_effect(D.e)):(D=pu(l,w?o:Zo??(Zo=rn()),q,ne,R,s,t,n),w||(D.e.f|=Xt),l.set(ne,D)),W.add(ne)}if(P===0&&i&&!h&&(w?h=_t(()=>i(o)):(h=_t(()=>i(Zo??(Zo=rn()))),h.f|=Xt)),P>W.size&&uc(),!w)if(x.set(N,W),S){for(const[j,J]of l)W.has(j)||N.skip_effect(J.e);N.oncommit(k),N.ondiscard(E)}else k(N);a(y)}),I={effect:T,items:l,pending:x,outrogroups:null,fallback:h};w=!1}function ns(e){for(;e!==null&&(e.f&Pt)===0;)e=e.next;return e}function hu(e,t,n,r,s){var D,j,J,ve,ke,Ve,Me,at,pe;var i=(r&Yl)!==0,o=t.length,l=e.items,c=ns(e.effect.first),d,h=null,y,p=[],x=[],w,k,E,T;if(i)for(T=0;T<o;T+=1)w=t[T],k=s(w,T),E=l.get(k).e,(E.f&Xt)===0&&((j=(D=E.nodes)==null?void 0:D.a)==null||j.measure(),(y??(y=new Set)).add(E));for(T=0;T<o;T+=1){if(w=t[T],k=s(w,T),E=l.get(k).e,e.outrogroups!==null)for(const _e of e.outrogroups)_e.pending.delete(E),_e.done.delete(E);if((E.f&dt)!==0&&(xa(E),i&&((ve=(J=E.nodes)==null?void 0:J.a)==null||ve.unfix(),(y??(y=new Set)).delete(E))),(E.f&Xt)!==0)if(E.f^=Xt,E===c)us(E,null,n);else{var I=h?h.next:c;E===e.effect.last&&(e.effect.last=E.prev),E.prev&&(E.prev.next=E.next),E.next&&(E.next.prev=E.prev),En(e,h,E),En(e,E,I),us(E,I,n),h=E,p=[],x=[],c=ns(h.next);continue}if(E!==c){if(d!==void 0&&d.has(E)){if(p.length<x.length){var P=x[0],W;h=P.prev;var N=p[0],S=p[p.length-1];for(W=0;W<p.length;W+=1)us(p[W],P,n);for(W=0;W<x.length;W+=1)d.delete(x[W]);En(e,N.prev,S.next),En(e,h,N),En(e,S,P),c=P,h=S,T-=1,p=[],x=[]}else d.delete(E),us(E,c,n),En(e,E.prev,E.next),En(e,E,h===null?e.effect.first:h.next),En(e,h,E),h=E;continue}for(p=[],x=[];c!==null&&c!==E;)(d??(d=new Set)).add(c),x.push(c),c=ns(c.next);if(c===null)continue}(E.f&Xt)===0&&p.push(E),h=E,c=ns(E.next)}if(e.outrogroups!==null){for(const _e of e.outrogroups)_e.pending.size===0&&(vo(e,Ea(_e.done)),(ke=e.outrogroups)==null||ke.delete(_e));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||d!==void 0){var R=[];if(d!==void 0)for(E of d)(E.f&dt)===0&&R.push(E);for(;c!==null;)(c.f&dt)===0&&c!==e.fallback&&R.push(c),c=ns(c.next);var q=R.length;if(q>0){var ne=(r&Ei)!==0&&o===0?n:null;if(i){for(T=0;T<q;T+=1)(Me=(Ve=R[T].nodes)==null?void 0:Ve.a)==null||Me.measure();for(T=0;T<q;T+=1)(pe=(at=R[T].nodes)==null?void 0:at.a)==null||pe.fix()}vu(e,R,ne)}}i&&Zt(()=>{var _e,F;if(y!==void 0)for(E of y)(F=(_e=E.nodes)==null?void 0:_e.a)==null||F.apply()})}function pu(e,t,n,r,s,i,o,l){var c=(o&ql)!==0?(o&Jl)===0?Ac(n,!1,!1):xn(n):null,d=(o&Gl)!==0?xn(s):null;return{v:c,i:d,e:_t(()=>(i(t,c??n,d??s,l),()=>{e.delete(r)}))}}function us(e,t,n){if(e.nodes)for(var r=e.nodes.start,s=e.nodes.end,i=t&&(t.f&Xt)===0?t.nodes.start:n;r!==null;){var o=Xs(r);if(i.before(r),r===s)return;r=o}}function En(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function Qo(e,t,n=!1,r=!1,s=!1,i=!1){var o=e,l="";if(n)var c=e;G(()=>{var d=me;if(l!==(l=t()??"")){if(n){d.nodes=null,c.innerHTML=l,l!==""&&On(Ht(c),c.lastChild);return}if(d.nodes!==null&&(al(d.nodes.start,d.nodes.end),d.nodes=null),l!==""){var h=r?zi:s?rc:void 0,y=Ta(r?"svg":s?"math":"template",h);y.innerHTML=l;var p=r||s?y:y.content;if(On(Ht(p),p.lastChild),r||s)for(;Ht(p);)o.before(Ht(p));else o.before(p)}}})}function le(e,t,n,r,s){var l,c;if((l=t.$$host)!=null&&l.$$shadowRoot){const d=Ta("slot");m(e,d);return}var i=(c=t.$$slots)==null?void 0:c[n],o=!1;i===!0&&(i=t.children,o=!0),i===void 0||i(e,o?()=>r:r)}function ei(e,t,n){var r=new Pa(e);Vr(()=>{var s=t()??null;r.ensure(s,s&&(i=>n(i,s)))},An)}function _u(e,t,n,r,s,i){var o=null,l=e,c=new Pa(l,!1);Vr(()=>{const d=t()||null;var h=zi;if(d===null){c.ensure(null,null);return}return c.ensure(d,y=>{if(d){if(o=Ta(d,h),On(o,o),r){var p=null,x=o.appendChild(rn());r(o,x),p==null||p.remove()}me.nodes.end=o,y.before(o)}}),()=>{}},An),Na(()=>{})}function gu(e,t){var n=void 0,r;rl(()=>{n!==(n=t())&&(r&&(tt(r),r=null),n&&(r=_t(()=>{za(()=>n(e))})))})}function yl(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=yl(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function mu(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=yl(e))&&(r&&(r+=" "),r+=t);return r}function wl(e){return typeof e=="object"?mu(e):e??""}const ti=[...` 	
\r\f \v\uFEFF`];function bu(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var s of Object.keys(n))if(n[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,o=0;(o=r.indexOf(s,o))>=0;){var l=o+i;(o===0||ti.includes(r[o-1]))&&(l===r.length||ti.includes(r[l]))?r=(o===0?"":r.substring(0,o))+r.substring(l+1):o=l}}return r===""?null:r}function ni(e,t=!1){var n=t?" !important;":";",r="";for(var s of Object.keys(e)){var i=e[s];i!=null&&i!==""&&(r+=" "+s+": "+i+n)}return r}function Ua(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function xu(e,t){if(t){var n="",r,s;if(Array.isArray(t)?(r=t[0],s=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var i=!1,o=0,l=!1,c=[];r&&c.push(...Object.keys(r).map(Ua)),s&&c.push(...Object.keys(s).map(Ua));var d=0,h=-1;const k=e.length;for(var y=0;y<k;y++){var p=e[y];if(l?p==="/"&&e[y-1]==="*"&&(l=!1):i?i===p&&(i=!1):p==="/"&&e[y+1]==="*"?l=!0:p==='"'||p==="'"?i=p:p==="("?o++:p===")"&&o--,!l&&i===!1&&o===0){if(p===":"&&h===-1)h=y;else if(p===";"||y===k-1){if(h!==-1){var x=Ua(e.substring(d,h).trim());if(!c.includes(x)){p!==";"&&y++;var w=e.substring(d,y).trim();n+=" "+w+";"}}d=y+1,h=-1}}}}return r&&(n+=ni(r)),s&&(n+=ni(s,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function ut(e,t,n,r,s,i){var o=e[eo];if(o!==n||o===void 0){var l=bu(n,r,i);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e[eo]=n}else if(i&&s!==i)for(var c in i){var d=!!i[c];(s==null||d!==!!s[c])&&e.classList.toggle(c,d)}return i}function Wa(e,t={},n,r){for(var s in n){var i=n[s];t[s]!==i&&(n[s]==null?e.style.removeProperty(s):e.style.setProperty(s,i,r))}}function $r(e,t,n,r){var s=e[to];if(s!==t){var i=xu(t,r);i==null?e.removeAttribute("style"):e.style.cssText=i,e[to]=t}else r&&(Array.isArray(r)?(Wa(e,n==null?void 0:n[0],r[0]),Wa(e,n==null?void 0:n[1],r[1],"important")):Wa(e,n,r));return r}function kl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function ri(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,$l(e,!n||"__value"in e))}function $l(e,t){var n=e.__defaultValue,r=e.multiple,s=r?n??[]:null;if(!(r&&!Ca(s))){var i=e.selectedIndex,o=t&&r?new Set(e.selectedOptions):null;for(var l of e.options){var c=Sr(l);kl(l,r?s.includes(c):Ji(c,n))}if(t)if(o!==null)for(l of e.options){var d=o.has(l);l.selected!==d&&(l.selected=d)}else e.selectedIndex!==i&&(e.selectedIndex=i)}}function ms(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Ca(t))return oc();for(var r of e.options)r.selected=t.includes(Sr(r));return}for(r of e.options){var s=Sr(r);if(Ji(s,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function ps(e){var t=new MutationObserver(n=>{n.every(yu)||("__defaultValue"in e&&$l(e,!1),"__value"in e&&ms(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Na(()=>{t.disconnect()})}function ho(e,t,n=t){var r=new WeakSet,s=!0;Di(e,"change",i=>{var o=i?"[selected]":":checked",l;if(e.multiple)l=[].map.call(e.querySelectorAll(o),Sr);else{var c=e.querySelector(o)??e.querySelector("option:not([disabled])");l=c&&Sr(c)}n(l),e.__value=l,re!==null&&r.add(re)}),za(()=>{var i=t();if(e===document.activeElement){var o=re;if(r.has(o))return}if(ms(e,i,s),s&&i===void 0){var l=e.querySelector(":checked");l!==null&&(i=Sr(l),n(i))}e.__value=i,s=!1})}function Sr(e){return"__value"in e?e.__value:e.value}function yu(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const rs=Symbol("class"),ss=Symbol("style"),Sl=Symbol("is custom element"),Cl=Symbol("is html"),wu=yo?"input":"INPUT",ku=yo?"option":"OPTION",El=yo?"select":"SELECT";function be(e,t,n,r){var s=Tl(e);s[t]!==(s[t]=n)&&(t==="loading"&&(e[Wl]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Nl(e).has(t)?e[t]=n:e.setAttribute(t,n))}function $u(e,t,n,r,s=!1,i=!1){var o=Tl(e),l=o[Sl],c=!o[Cl],d=t||{},h=e.nodeName===ku,y=e.nodeName===El;for(var p in t)!(p in n)&&p[0]+p[1]!=="$$"&&(n[p]=null);n.class?n.class=wl(n.class):n[rs]&&(n.class=null),n[ss]&&(n.style??(n.style=null));var x=Nl(e);if(e.nodeName===wu&&"type"in n&&("value"in n||"__value"in n)){var w=n.type;(w!==d.type||w===void 0&&e.hasAttribute("type"))&&(d.type=w,be(e,"type",w))}for(const N in n){let S=n[N];if(h&&N==="value"&&S==null){e.value=e.__value="",d[N]=S;continue}if(N==="class"){var k=e.namespaceURI==="http://www.w3.org/1999/xhtml";ut(e,k,S,r,t==null?void 0:t[rs],n[rs]),d[N]=S,d[rs]=n[rs];continue}if(N==="style"){$r(e,S,t==null?void 0:t[ss],n[ss]),d[N]=S,d[ss]=n[ss];continue}var E=d[N];if(!(S===E&&!(S===void 0&&e.hasAttribute(N)))){d[N]=S;var T=N[0]+N[1];if(T!=="$$")if(T==="on"){const R={},q="$$"+N;let ne=N.slice(2);var I=Gc(ne);if(Wc(ne)&&(ne=ne.slice(0,-7),R.capture=!0),!I&&E){if(S!=null)continue;e.removeEventListener(ne,d[q],R),d[q]=null}if(I)L(ne,e,S),It([ne]);else if(S!=null){let D=function(j){d[N].call(this,j)};d[q]=gl(ne,e,D,R)}}else if(N==="style")be(e,N,S);else if(N==="autofocus")Li(e,!!S);else if(!l&&(N==="__value"||N==="value"&&S!=null))e.value=e.__value=S;else if(N==="selected"&&h)kl(e,S);else{var P=N;c||(P=Jc(P));var W=P==="defaultValue"||P==="defaultChecked";if(y&&P==="defaultValue")continue;if(S==null&&!l&&!W)if(o[N]=null,P==="value"||P==="checked"){let R=e;const q=t===void 0;if(P==="value"){let ne=R.defaultValue;R.removeAttribute(P),R.defaultValue=ne,R.value=R.__value=q?ne:null}else{let ne=R.defaultChecked;R.removeAttribute(P),R.defaultChecked=ne,R.checked=q?ne:!1}}else e.removeAttribute(N);else W||(l||typeof S!="string")&&x.has(P)?(e[P]=S,P in o&&(o[P]=Ue)):typeof S!="function"&&be(e,P,S)}}}return d}function si(e,t,n=[],r=[],s=[],i,o=!1,l=!1){Fi(s,n,r,c=>{var d=void 0,h={},y=e.nodeName===El,p=!1;if(rl(()=>{var w=t(...c.map(a)),k=$u(e,d,w,i,o,l);if(p&&y){var E=e;"defaultValue"in w&&ri(E,w.defaultValue),"value"in w&&ms(E,w.value)}for(let I of Object.getOwnPropertySymbols(h))w[I]||tt(h[I]);for(let I of Object.getOwnPropertySymbols(w)){var T=w[I];I.description===sc&&(!d||T!==d[I])&&(h[I]&&tt(h[I]),h[I]=_t(()=>gu(e,()=>T))),k[I]=T}d=k}),y){var x=e;za(()=>{var w=d;"defaultValue"in w&&ri(x,w.defaultValue),ms(x,w.value,!0),ps(x)})}p=!0})}function Tl(e){return e[oa]??(e[oa]={[Sl]:e.nodeName.includes("-"),[Cl]:e.namespaceURI===Ni})}var ai=new Map;function Nl(e){var t=e.getAttribute("is")||e.nodeName,n=ai.get(t);if(n)return n;ai.set(t,n=new Set);for(var r,s=e,i=Element.prototype;i!==s;){r=wi(s);for(var o in r)r[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&n.add(o);s=mo(s)}return n}function Qe(e,t,n=t){var r=new WeakSet;Di(e,"input",async s=>{var i=s?e.defaultValue:e.value;if(i=qa(e)?Ga(i):i,n(i),re!==null&&r.add(re),await Uc(),i!==(i=t())){var o=e.selectionStart,l=e.selectionEnd,c=e.value.length;if(e.value=i??"",l!==null){var d=e.value.length;o===l&&l===c&&d>c?(e.selectionStart=d,e.selectionEnd=d):(e.selectionStart=o,e.selectionEnd=Math.min(l,d))}}}),wn(t)==null&&e.value&&(n(qa(e)?Ga(e.value):e.value),re!==null&&r.add(re)),No(()=>{var s=t();if(e===document.activeElement){var i=re;if(r.has(i))return}qa(e)&&s===Ga(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function qa(e){var t=e.type;return t==="number"||t==="range"}function Ga(e){return e===""?null:+e}function Ya(e,t){return e===t||(e==null?void 0:e[tn])===t}function bs(e=wo(),t,n,r){var s=Ae.r,i=me;return za(()=>{var o,l;return No(()=>{o=l,l=[],wn(()=>{Ya(n(...l),e)||(t(e,...l),o&&Ya(n(...o),e)&&t(null,...o))})}),()=>{let c=i;for(;c!==s&&c.parent!==null&&c.parent.f&pa;)c=c.parent;const d=()=>{l&&Ya(n(...l),e)&&t(null,...l)},h=c.teardown;c.teardown=()=>{d(),h==null||h()}}}),e}function zl(e=!1){const t=Ae,n=t.l.u;if(!n)return;let r=()=>Jn(t.s);if(e){let s=0,i={};const o=Or(()=>{let l=!1;const c=t.s;for(const d in c)c[d]!==i[d]&&(i[d]=c[d],l=!0);return l&&s++,s});r=()=>a(o)}n.b.length&&Fc(()=>{oi(t,r),Za(n.b)}),st(()=>{const s=wn(()=>n.m.map(Vl));return()=>{for(const i of s)typeof i=="function"&&i()}}),n.a.length&&st(()=>{oi(t,r),Za(n.a)})}function oi(e,t){if(e.l.s)for(const n of e.l.s)a(n);t()}function Su(e){var t=xn(0);return function(){return arguments.length===1?(f(t,a(t)+1),arguments[0]):(a(t),e())}}const Cu={get(e,t){if(!e.exclude.includes(t))return a(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=me;try{At(e.parent_effect),e.special[t]=je({get[t](){return e.props[t]}},t,Ti)}finally{At(r)}}return e.special[t](n),Wo(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),Wo(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function oe(e,t){return new Proxy({props:e,exclude:t,special:{},version:xn(0),parent_effect:me},Cu)}const Eu={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(ts(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let s=e.props[r];ts(s)&&(s=s());const i=Pn(s,t);if(i&&i.set)return i.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(ts(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const s=Pn(r,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===tn||t===Ci)return!1;for(let n of e.props)if(ts(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(ts(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function de(...e){return new Proxy({props:e},Eu)}function je(e,t,n,r){var W;var s=!Hr||(n&Zl)!==0,i=(n&Ql)!==0,o=(n&ec)!==0,l=r,c=!0,d=void 0,h=()=>o&&s?(d??(d=Or(r)),a(d)):(c&&(c=!1,l=o?wn(r):r),l);let y;if(i){var p=tn in e||Ci in e;y=((W=Pn(e,t))==null?void 0:W.set)??(p&&t in e?N=>e[t]=N:void 0)}var x,w=!1;i?[x,w]=kc(()=>e[t]):x=e[t],x===void 0&&r!==void 0&&(x=h(),y&&(s&&pc(),y(x)));var k;if(s?k=()=>{var N=e[t];return N===void 0?h():(c=!0,N)}:k=()=>{var N=e[t];return N!==void 0&&(l=void 0),N===void 0?l:N},s&&(n&Ti)===0)return k;if(y){var E=e.$$legacy;return(function(N,S){return arguments.length>0?((!s||!S||E||w)&&y(S?k():N),N):k()})}var T=!1,I=((n&Xl)!==0?Or:$o)(()=>(T=!1,k()));i&&a(I);var P=me;return(function(N,S){if(arguments.length>0){const R=S?a(I):s&&i?ze(N):N;return f(I,R),T=!0,l!==void 0&&(l=R),N}return yn&&T||(P.f&mt)!==0?I.v:a(I)})}function Kr(e){Ae===null&&Ai(),Hr&&Ae.l!==null?Tu(Ae).m.push(e):st(()=>{const t=wn(e);if(typeof t=="function")return t})}function Mo(e){Ae===null&&Ai(),Kr(()=>()=>wn(e))}function Tu(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Nu="5";var xi;typeof window<"u"&&((xi=window.__svelte??(window.__svelte={})).v??(xi.v=new Set)).add(Nu);const Xn=()=>window.__IDE_BOOTSTRAP__||{};function zu(e){const{rootPath:t="",session:n=""}=Xn();return`${t}/api/sessions/${encodeURIComponent(n)}/ide${e}`}async function He(e,t={}){const n=await fetch(zu(e),t),r=await n.json().catch(()=>({}));if(!n.ok){const s=new Error(r.error||"Request failed");throw Object.assign(s,r),s}return r}const qe=(e,t)=>`/ssh-connections/${encodeURIComponent(e)}${t}`,$e={chat:async(e,t=80)=>{const{rootPath:n=""}=Xn(),r=`${n}/api/sessions/${encodeURIComponent(e)}/ide/chat?limit=${t}`,s=await fetch(r),i=await s.json().catch(()=>({}));if(!s.ok)throw new Error(i.error||"Could not load chat");return i},browse:async(e="")=>{const{rootPath:t=""}=Xn(),n=`${t}/api/ide/browse?path=${encodeURIComponent(e)}`,r=await fetch(n),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not browse folders");return s},sessionAgent:async e=>{const{rootPath:t=""}=Xn(),n=await fetch(`${t}/api/sessions/${encodeURIComponent(e)}/agent`),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Could not read agent settings");return r},setSessionAgent:async(e,t)=>{const{rootPath:n=""}=Xn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/agent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({agent:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not switch agent");return s},setSessionModel:async(e,t)=>{const{rootPath:n=""}=Xn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/model`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change model");return s},setSessionEffort:async(e,t)=>{const{rootPath:n=""}=Xn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/effort`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({effort:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change effort");return s},browseOn:(e,t="")=>He(qe(e,`/browse?path=${encodeURIComponent(t)}`)),setWorkspaceRoot:(e,t,n)=>He(qe(e,"/workspace-root"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({workspace_root:t,label:n})}),agentContext:e=>He(qe(e,"/agent-context")),hostKey:e=>He(qe(e,"/host-key")),trustHost:e=>He(qe(e,"/host-key"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accept:!0})}),listConnections:()=>He("/ssh-connections"),createConnection:e=>He("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),deleteConnection:e=>He(qe(e,""),{method:"DELETE"}),connect:(e,t)=>He(qe(e,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t||""})}),status:e=>He(qe(e,"/status?reconnect=1")),listFiles:(e,t)=>He(qe(e,`/files?path=${encodeURIComponent(t)}`)),searchFiles:(e,t,n)=>He(qe(e,`/files/search?path=${encodeURIComponent(t)}&query=${encodeURIComponent(n)}`)),readFile:(e,t)=>He(qe(e,`/file?path=${encodeURIComponent(t)}`)),saveFile:(e,t,n)=>He(qe(e,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t,content:n})}),fs:(e,t)=>He(qe(e,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),git:(e,t)=>He(qe(e,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),focusTerminal:e=>He(qe(e,"/focus-terminal"),{method:"POST"}),listTerminals:e=>He(qe(e,"/terminals")),closeTerminal:(e,t)=>He(qe(e,`/terminals/${t}`),{method:"DELETE"}),getWorkspace:e=>He(qe(e,"/workspace")),saveWorkspace:(e,t)=>He(qe(e,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})};var Ss,Cs,Es,Ts,Ns,zs,Ps,Ms,As,Is,Os,Rs,Ls,Ds,Fs,Hs,js,Bs,Vs,Ks,Us,Ws,qs,Gs;class Pu{constructor(){U(this,Ss,O(ze([])));U(this,Cs,O(""));U(this,Es,O("idle"));U(this,Ts,O("Ready"));U(this,Ns,O("No file open"));U(this,zs,O("."));U(this,Ps,O(ze([])));U(this,Ms,O(ze({})));U(this,As,O(ze({})));U(this,Is,O(""));U(this,Os,O(ze([])));U(this,Rs,O(""));U(this,Ls,O(""));U(this,Ds,O(""));U(this,Fs,O(ze([])));U(this,Hs,O(""));U(this,js,O(!1));U(this,Bs,O(!1));U(this,Vs,O(0));U(this,Ks,O(0));U(this,Us,O(!1));U(this,Ws,O(""));U(this,qs,O(ze([])));U(this,Gs,O(!1));it(this,"restoredKey","");it(this,"persistTimer",null)}get connections(){return a(u(this,Ss))}set connections(t){f(u(this,Ss),t,!0)}get connectionId(){return a(u(this,Cs))}set connectionId(t){f(u(this,Cs),t,!0)}get connectionState(){return a(u(this,Es))}set connectionState(t){f(u(this,Es),t,!0)}get statusText(){return a(u(this,Ts))}set statusText(t){f(u(this,Ts),t,!0)}get detailText(){return a(u(this,Ns))}set detailText(t){f(u(this,Ns),t,!0)}get path(){return a(u(this,zs))}set path(t){f(u(this,zs),t,!0)}get entries(){return a(u(this,Ps))}set entries(t){f(u(this,Ps),t,!0)}get expanded(){return a(u(this,Ms))}set expanded(t){f(u(this,Ms),t,!0)}get treeChildren(){return a(u(this,As))}set treeChildren(t){f(u(this,As),t,!0)}get filter(){return a(u(this,Is))}set filter(t){f(u(this,Is),t,!0)}get tabs(){return a(u(this,Os))}set tabs(t){f(u(this,Os),t,!0)}get activeKey(){return a(u(this,Rs))}set activeKey(t){f(u(this,Rs),t,!0)}get gitOutput(){return a(u(this,Ls))}set gitOutput(t){f(u(this,Ls),t,!0)}get gitStatus(){return a(u(this,Ds))}set gitStatus(t){f(u(this,Ds),t,!0)}get gitBranches(){return a(u(this,Fs))}set gitBranches(t){f(u(this,Fs),t,!0)}get gitBranch(){return a(u(this,Hs))}set gitBranch(t){f(u(this,Hs),t,!0)}get needsHostKey(){return a(u(this,js))}set needsHostKey(t){f(u(this,js),t,!0)}get notARepo(){return a(u(this,Bs))}set notARepo(t){f(u(this,Bs),t,!0)}get gitAhead(){return a(u(this,Vs))}set gitAhead(t){f(u(this,Vs),t,!0)}get gitBehind(){return a(u(this,Ks))}set gitBehind(t){f(u(this,Ks),t,!0)}get gitHasUpstream(){return a(u(this,Us))}set gitHasUpstream(t){f(u(this,Us),t,!0)}get gitBusy(){return a(u(this,Ws))}set gitBusy(t){f(u(this,Ws),t,!0)}get gitCommits(){return a(u(this,qs))}set gitCommits(t){f(u(this,qs),t,!0)}get gitHistoryLoaded(){return a(u(this,Gs))}set gitHistoryLoaded(t){f(u(this,Gs),t,!0)}get connection(){return this.connections.find(t=>t.id===this.connectionId)||null}get activeTab(){return this.tabs.find(t=>t.key===this.activeKey)||null}get visibleEntries(){const t=this.filter.trim().toLowerCase();return t?this.entries.filter(n=>n.name.toLowerCase().includes(t)):this.entries}get dirtyCount(){return this.tabs.filter(t=>t.dirty).length}get gitDirtyCount(){return this.gitStatus.split(`
`).filter(t=>t.trim()&&!t.startsWith("##")).length}resetWorkspaceView(){this.tabs=[],this.activeKey="",this.restoredKey="",this.path=".",this.entries=[],this.expanded={},this.treeChildren={},this.filter="",this.gitOutput="",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.needsHostKey=!1,this.notARepo=!1,this.gitAhead=0,this.gitBehind=0,this.gitHasUpstream=!1,this.gitCommits=[],this.gitHistoryLoaded=!1}setStatus(t,n){this.statusText=t,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const t=await $e.listConnections();this.connections=t.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(t){this.setStatus(t.message||"Could not load connections")}}async refreshStatus(){var t,n,r;if(this.connectionId)try{const s=await $e.status(this.connectionId);s.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((t=this.connection)==null?void 0:t.label)||"SSH workspace"}`,`SSH terminal: ${s.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(s){this.connectionState="error",this.setStatus(s.message||"Could not check SSH connection")}}async connect(t){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await $e.connect(this.connectionId,t);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect"),this.needsHostKey=!!r.needs_host_key}}}async refreshFiles(t){if(!this.connectionId)return;const n=t||this.path||".";try{const r=await $e.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async toggleDirectory(t){if(this.expanded[t]){const n={...this.expanded};delete n[t],this.expanded=n;return}if(this.expanded={...this.expanded,[t]:!0},!this.treeChildren[t])try{const n=await $e.listFiles(this.connectionId,t);this.treeChildren={...this.treeChildren,[t]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}openDiffTab(t,n){const r=`${this.connectionId}|diff:${t}`,s=this.tabs.find(o=>o.key===r);if(s)return s.content=n,s.saved=n,this.activeKey=r,s;const i={key:r,path:`${t} (diff)`,content:n,saved:n,dirty:!1,readOnly:!0,language:"plaintext"};return this.tabs=[...this.tabs,i],this.activeKey=r,i}async openFile(t){if(!this.connectionId)return null;const n=`${this.connectionId}|${t}`,r=this.tabs.find(s=>s.key===n);if(r)return this.activeKey=n,r;try{const s=await $e.readFile(this.connectionId,t),i={key:`${this.connectionId}|${s.path}`,path:s.path,content:s.content||"",saved:s.content||"",dirty:!1};return this.tabs=[...this.tabs,i],this.activeKey=i.key,this.setStatus("Opened",i.path),this.remember(),i}catch(s){return this.setStatus(s.message||"Could not open remote file"),null}}updateContent(t,n){this.tabs=this.tabs.map(r=>r.key===t?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(t){var r;const n=this.tabs.find(s=>s.key===t);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(s=>s.key!==t),this.activeKey===t&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const t=this.activeTab;if(t)try{await $e.saveFile(this.connectionId,t.path,t.content),this.tabs=this.tabs.map(n=>n.key===t.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${t.path}`,t.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const t=`${this.connectionId}`;if(!t)return;let n=null;try{n=await $e.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===t)return;this.restoredKey=t;const r=(n==null?void 0:n.buffers)||{};for(const i of((n==null?void 0:n.tabs)||[]).slice(0,12)){const o=await this.openFile(i);o&&Object.prototype.hasOwnProperty.call(r,i)&&this.updateContent(o.key,r[i])}const s=this.tabs.find(i=>i.path===(n==null?void 0:n.active_path));s&&(this.activeKey=s.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const t={};for(const r of this.tabs)r.dirty&&(t[r.path]=r.content);try{await $e.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:t})}catch{}}async runGit(t,n={}){try{const r=await $e.git(this.connectionId,{action:t,path:this.path||".",...n});return r.not_a_repo?(this.gitOutput=r.error||"This folder is not a Git repository.",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.gitCommits=[],this.gitHistoryLoaded=!1,this.notARepo=!0,null):(this.notARepo=!1,this.gitAhead=r.ahead||0,this.gitBehind=r.behind||0,this.gitHasUpstream=!!r.has_upstream,t==="log"?(this.gitCommits=r.commits||[],this.gitHistoryLoaded=!0):t!=="show"&&(this.gitOutput=r.output||r.status||""),this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",["commit","switch","create_branch","pull","push","fetch"].includes(t)&&(this.gitHistoryLoaded=!1),r)}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}Ss=new WeakMap,Cs=new WeakMap,Es=new WeakMap,Ts=new WeakMap,Ns=new WeakMap,zs=new WeakMap,Ps=new WeakMap,Ms=new WeakMap,As=new WeakMap,Is=new WeakMap,Os=new WeakMap,Rs=new WeakMap,Ls=new WeakMap,Ds=new WeakMap,Fs=new WeakMap,Hs=new WeakMap,js=new WeakMap,Bs=new WeakMap,Vs=new WeakMap,Ks=new WeakMap,Us=new WeakMap,Ws=new WeakMap,qs=new WeakMap,Gs=new WeakMap;const _=new Pu;xc();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Mu={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */const ii=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var Iu=bl("<svg><!><!></svg>");function fe(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]),r=oe(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);ft(t,!1);let s=je(t,"name",8,void 0),i=je(t,"color",8,"currentColor"),o=je(t,"size",8,24),l=je(t,"strokeWidth",8,2),c=je(t,"absoluteStrokeWidth",8,!1),d=je(t,"iconNode",24,()=>[]);zl();var h=Iu();si(h,(x,w,k)=>({...Mu,...x,...r,width:o(),height:o(),stroke:i(),"stroke-width":w,class:k}),[()=>Au(r)?void 0:{"aria-hidden":"true"},()=>(Jn(c()),Jn(l()),Jn(o()),wn(()=>c()?Number(l())*24/Number(o()):l())),()=>(Jn(ii),Jn(s()),Jn(n),wn(()=>ii("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var y=b(h);Be(y,1,d,xl,(x,w)=>{var k=rt(()=>Kl(a(w),2));let E=()=>a(k)[0],T=()=>a(k)[1];var I=te(),P=B(I);_u(P,E,!0,(W,N)=>{si(W,()=>({...T()}))}),m(x,I)});var p=v(y);le(p,t,"default",{}),m(e,h),vt()}function Ou(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]];fe(e,de({name:"arrow-down-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Ru(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];fe(e,de({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function da(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];fe(e,de({name:"check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Qt(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];fe(e,de({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function fa(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];fe(e,de({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function li(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];fe(e,de({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Lu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];fe(e,de({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Du(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];fe(e,de({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Fu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];fe(e,de({name:"circle-user"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Hu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];fe(e,de({name:"circle"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function ju(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];fe(e,de({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Bu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];fe(e,de({name:"corner-left-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Vu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];fe(e,de({name:"ellipsis"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Ku(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];fe(e,de({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function ci(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 16-3 3 3 3"}],["path",{d:"m9 22 3-3-3-3"}]];fe(e,de({name:"file-code-corner"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Uu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];fe(e,de({name:"file-diff"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Wu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];fe(e,de({name:"file-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Ao(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];fe(e,de({name:"file"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function qu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];fe(e,de({name:"files"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Ja(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];fe(e,de({name:"folder-open"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Gu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];fe(e,de({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Yu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];fe(e,de({name:"folder"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function po(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];fe(e,de({name:"git-branch"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Ju(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 16h.01"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{d:"M21.946 12.013H2.054"}],["path",{d:"M6 16h.01"}]];fe(e,de({name:"hard-drive"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Xu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];fe(e,de({name:"history"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Zu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];fe(e,de({name:"link-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function en(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];fe(e,de({name:"loader"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function ui(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];fe(e,de({name:"message-square"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Qu(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m14 10 7-7"}],["path",{d:"M20 10h-6V4"}],["path",{d:"m3 21 7-7"}],["path",{d:"M4 14h6v6"}]];fe(e,de({name:"minimize-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function ed(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}]];fe(e,de({name:"minus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function td(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];fe(e,de({name:"monitor-smartphone"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function nd(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];fe(e,de({name:"panel-bottom"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function rd(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];fe(e,de({name:"panel-left"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function ya(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];fe(e,de({name:"plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function _o(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];fe(e,de({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Io(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];fe(e,de({name:"search"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function di(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];fe(e,de({name:"server"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function sd(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];fe(e,de({name:"shield-alert"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function aa(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];fe(e,de({name:"sparkles"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function fi(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];fe(e,de({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function ad(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];fe(e,de({name:"square"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function vi(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];fe(e,de({name:"trash-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function od(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];fe(e,de({name:"undo-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function wa(e,t){const n=oe(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];fe(e,de({name:"x"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=B(o);le(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}var id=A('<span class="w-[14px] shrink-0"></span>'),ld=bl('<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.5 3.5h4l1.2 1.4h7.8v7.6H1.5z" fill="#c09553"></path></svg>'),cd=A('<div role="treeitem" tabindex="0"><!> <span class="flex shrink-0 items-center"><!></span> <span class="flex-1 truncate text-vs-fg"> </span> <span class="hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Rename"><span class="text-[11px] leading-none">✎</span></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Delete"><span class="text-[11px] leading-none">🗑</span></button></span></div> <!>',1);function Pl(e,t){ft(t,!0);const n=rt(()=>t.dir==="."?t.entry.name:`${t.dir}/${t.entry.name}`),r=rt(()=>!!_.expanded[a(n)]),s=rt(()=>_.treeChildren[a(n)]||[]),i=rt(()=>{var j;return((j=_.activeTab)==null?void 0:j.path)===a(n)});async function o(){t.entry.is_dir?await _.toggleDirectory(a(n)):await _.openFile(a(n))}async function l(j){if(j.stopPropagation(),!!confirm(`Delete ${a(n)}? Folders must already be empty.`))try{await $e.fs(_.connectionId,{action:"delete",path:a(n)}),await _.refreshFiles()}catch(J){_.setStatus(J.message||"Could not delete")}}async function c(j){j.stopPropagation();const J=prompt("Rename to (relative path):",a(n));if(!(!J||J===a(n)))try{await $e.fs(_.connectionId,{action:"rename",path:a(n),new_path:J}),await _.refreshFiles()}catch(ve){_.setStatus(ve.message||"Could not rename")}}var d=cd(),h=B(d);let y;var p=b(h);{var x=j=>{var J=te(),ve=B(J);{var ke=Me=>{Qt(Me,{size:14,class:"shrink-0 text-vs-muted"})},Ve=Me=>{fa(Me,{size:14,class:"shrink-0 text-vs-muted"})};H(ve,Me=>{a(r)?Me(ke):Me(Ve,-1)})}m(j,J)},w=j=>{var J=id();m(j,J)};H(p,j=>{t.entry.is_dir?j(x):j(w,-1)})}var k=v(p,2),E=b(k);{var T=j=>{var J=ld();m(j,J)},I=j=>{Zu(j,{size:14,class:"text-vs-muted"})},P=j=>{Ao(j,{size:14,class:"text-vs-blue"})};H(E,j=>{t.entry.is_dir?j(T):t.entry.is_symlink?j(I,1):j(P,-1)})}var W=v(k,2),N=ee(W,!0),S=v(W,2),R=b(S),q=v(R,2),ne=v(h,2);{var D=j=>{var J=te(),ve=B(J);Be(ve,17,()=>a(s),ke=>ke.name,(ke,Ve)=>{{let Me=rt(()=>t.depth+1);Pl(ke,{get entry(){return a(Ve)},get dir(){return a(n)},get depth(){return a(Me)}})}}),m(j,J)};H(ne,j=>{t.entry.is_dir&&a(r)&&j(D)})}G(()=>{y=ut(h,1,"group flex cursor-pointer items-center gap-1 py-[2px] pr-1 text-[13px] hover:bg-vs-hover",null,y,{"bg-vs-active":a(i)}),$r(h,`padding-left: ${8+t.depth*12}px`),be(h,"aria-expanded",t.entry.is_dir?a(r):void 0),be(h,"aria-selected",a(i)),be(h,"title",a(n)),K(N,t.entry.name),be(R,"aria-label",`Rename ${t.entry.name??""}`),be(q,"aria-label",`Delete ${t.entry.name??""}`)}),L("click",h,o),L("keydown",h,j=>{(j.key==="Enter"||j.key===" ")&&(j.preventDefault(),o())}),L("click",R,c),L("click",q,l),m(e,d),vt()}It(["click","keydown"]);var ud=A('<form class="px-2 pb-1"><input class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"/></form>'),dd=A('<p class="px-4 py-2 text-xs text-vs-muted">No folder opened.</p>'),fd=A('<p class="px-4 py-2 text-xs text-vs-muted">No files here</p>'),vd=A('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase"><span class="flex-1 truncate">Explorer</span></div> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase"><!> <span class="flex-1 truncate"> </span> <span class="flex opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"><!></button></span></div> <!> <input class="mx-2 mb-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none focus:border-vs-accent" placeholder="Filter files…"/> <div class="min-h-0 flex-1 overflow-y-auto pb-2"><!></div></div>');function hd(e,t){ft(t,!0);let n=O(""),r=O("");const s=(D,j)=>D==="."?j:`${D}/${j}`;async function i(D){D.preventDefault();const j=a(r).trim();if(j)try{await $e.fs(_.connectionId,{action:a(n)==="dir"?"create_dir":"create_file",path:s(_.path,j)}),f(n,""),f(r,""),await _.refreshFiles()}catch(J){_.setStatus(J.message||"Could not create")}}const o=rt(()=>{var D,j;return(((D=_.connection)==null?void 0:D.workspace_root)||"").split("/").filter(Boolean).pop()||((j=_.connection)==null?void 0:j.label)||"WORKSPACE"});var l=vd(),c=v(b(l),2),d=b(c);Qt(d,{size:14,class:"shrink-0 text-vs-muted"});var h=v(d,2),y=ee(h,!0),p=v(h,2),x=b(p),w=b(x);Wu(w,{size:14});var k=v(x,2),E=b(k);Gu(E,{size:14});var T=v(k,2),I=b(T);_o(I,{size:13});var P=v(c,2);{var W=D=>{var j=ud(),J=b(j);Li(J,!0),G(()=>be(J,"placeholder",a(n)==="dir"?"New folder name":"New file name")),In("submit",j,i),L("keydown",J,ve=>{ve.key==="Escape"&&f(n,"")}),In("blur",J,()=>{a(r).trim()||f(n,"")}),Qe(J,()=>a(r),ve=>f(r,ve)),m(D,j)};H(P,D=>{a(n)&&D(W)})}var N=v(P,2),S=v(N,2),R=b(S);{var q=D=>{var j=dd();m(D,j)},ne=D=>{var j=te(),J=B(j);Be(J,17,()=>_.visibleEntries,ve=>ve.name,(ve,ke)=>{Pl(ve,{get entry(){return a(ke)},get dir(){return _.path},depth:0})},ve=>{var ke=fd();m(ve,ke)}),m(D,j)};H(R,D=>{_.connectionId?D(ne,-1):D(q)})}G(()=>{var D;be(h,"title",(D=_.connection)==null?void 0:D.workspace_root),K(y,a(o))}),L("click",x,()=>{f(n,"file"),f(r,"")}),L("click",k,()=>{f(n,"dir"),f(r,"")}),L("click",T,()=>_.refreshFiles()),Qe(N,()=>_.filter,D=>_.filter=D),m(e,l),vt()}It(["click","keydown"]);var pd=A('<div class="absolute top-full right-0 z-20 mt-1 min-w-[170px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"><button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Fetch</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Pull</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Push</button> <div class="my-1 h-px bg-vs-line"></div> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Create Branch…</button></div>'),_d=A('<p class="mx-3 flex items-center gap-1.5 text-xs text-vs-muted"><!> Reading repository…</p>'),gd=A(`<p class="mx-3 text-xs leading-relaxed text-vs-muted">This folder isn't a Git repository.<br/> Open a folder containing a <code class="rounded-sm bg-vs-input px-1">.git</code> directory,
      or run <code class="rounded-sm bg-vs-input px-1">git init</code> in the terminal.</p>`),md=A('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Unstage"><!></button></span> <span> </span></div>'),bd=A('<div class="flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Staged Changes</span></button> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!>',1),xd=A('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Open changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Discard changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Stage changes"><!></button></span> <span> </span></div>'),yd=A('<p class="px-6 py-2 text-xs text-vs-muted">No changes.</p>'),wd=A('<div class="min-h-0 flex-1 overflow-y-auto"></div>'),kd=A('<span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span>'),$d=A('<span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh history" aria-label="Refresh history"><!></button></span> <!>',1),Sd=A('<span class="shrink-0 rounded-sm bg-vs-line px-1 text-[10px] text-vs-blue"> </span>'),Cd=A('<div class="group flex cursor-pointer flex-col gap-0.5 py-1 pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><div class="flex min-w-0 items-center gap-1.5"><span class="truncate text-vs-fg"> </span> <!></div> <div class="flex min-w-0 items-center gap-1.5 text-[11px] text-vs-muted"><span class="shrink-0 font-mono text-vs-yellow"> </span> <span class="truncate"> </span> <span class="ml-auto shrink-0"> </span></div></div>'),Ed=A('<p class="px-6 py-2 text-xs text-vs-muted"> </p>'),Td=A('<div class="max-h-[45%] min-h-0 flex-1 overflow-y-auto"></div>'),Nd=A('<button class="flex items-center gap-1 rounded-sm px-1 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Pull then push"><!> </button>'),zd=A('<div class="flex gap-1 border-t border-vs-line px-3 py-2"><input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="New branch name"/> <button class="rounded-sm bg-vs-status px-2 py-1 text-xs text-white">Create</button></div>'),Pd=A('<pre class="max-h-[120px] shrink-0 overflow-auto border-t border-vs-line px-3 py-1.5 text-[11px] whitespace-pre-wrap text-vs-muted"> </pre>'),Md=A('<div class="px-3 pb-2"><textarea class="w-full resize-none rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs text-vs-fg outline-none focus:border-vs-accent placeholder:text-vs-muted" rows="2"></textarea> <button class="mt-1 flex w-full items-center justify-center gap-1.5 rounded-sm bg-vs-status px-2 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"><!> Commit</button></div> <!> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Changes</span></button> <span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh" aria-label="Refresh"><!></button> <button class="rounded-sm p-0.5 hover:bg-vs-line" title="Stage all changes" aria-label="Stage all"><!></button></span> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!> <div class="group flex shrink-0 items-center gap-1 border-t border-vs-line px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <!> <span class="truncate">History</span></button> <!></div> <!> <div class="mt-auto flex items-center gap-2 border-t border-vs-line px-3 py-1.5 text-[11px]"><span class="flex min-w-0 items-center gap-1 text-vs-muted" title="Current branch"><!> <span class="truncate"> </span></span> <!></div> <!> <!>',1),Ad=A('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase"><span class="flex-1">Source Control</span> <div class="relative" data-scm-menu=""><button class="rounded-sm p-0.5 hover:bg-vs-hover" title="More actions" aria-label="More actions"><!></button> <!></div></div> <!></div>');function Id(e,t){ft(t,!0);let n=O(""),r=O(""),s=O(!1),i=O(!0),o=O(!0),l=O(!1),c=O(!1);const d=rt(()=>(_.gitStatus||"").split(`
`).filter(F=>F&&!F.startsWith("##")).map(F=>{const ce=F.slice(3),Ce=ce.indexOf(" -> "),We=Ce===-1?ce:ce.slice(Ce+4);return{index:F[0]===" "?"":F[0],work:F[1]===" "?"":F[1],code:F.slice(0,2).trim()||"??",path:We.replace(/\r$/,""),from:Ce===-1?"":ce.slice(0,Ce)}}).filter(F=>F.path)),h=rt(()=>a(d).filter(F=>F.index&&F.index!=="?")),y=rt(()=>a(d).filter(F=>F.work&&F.work!==" ")),p=F=>F.includes("?")||F.includes("A")?"text-vs-green":F.includes("D")?"text-vs-red":F.includes("R")?"text-vs-blue":"text-vs-yellow",x=F=>F.split("/").pop(),w=F=>{const ce=F.split("/");return ce.pop(),ce.join("/")};async function k(F,ce={}){_.gitBusy=F;try{return await _.runGit(F,ce)}finally{_.gitBusy=""}}async function E(){if(!a(n).trim()||!a(h).length)return;await k("commit",{message:a(n).trim()})&&f(n,"")}async function T(){if(!a(r).trim())return;await k("create_branch",{branch:a(r).trim()})&&(f(r,""),f(s,!1))}async function I(F){confirm(`Discard changes in ${F.path}? This cannot be undone.`)&&await k("discard",{files:[F.path]})}async function P(F){const ce=await _.runGit("diff_file",{files:[F.path]});ce&&_.openDiffTab(F.path,ce.output||"No changes to show.")}let W=O("");st(()=>{const F=_.connectionId,ce=_.connectionState,Ce=F?`${F}|${ce}`:"";!F||ce!=="connected"||a(W)!==Ce&&(f(W,Ce,!0),k("status"))});async function N(){f(l,!a(l)),a(l)&&!_.gitHistoryLoaded&&await k("log")}st(()=>{a(l)&&!_.gitHistoryLoaded&&!_.notARepo&&!_.gitBusy&&k("log")});async function S(F){const ce=await _.runGit("show",{ref:F.hash});ce&&_.openDiffTab(`${F.short} ${F.subject}`,ce.output||"Empty commit.")}const R=F=>(F||"").split(",").map(ce=>ce.trim().replace(/^HEAD -> /,"")).filter(Boolean);function q(F){F.key==="Enter"&&(F.ctrlKey||F.metaKey)&&(F.preventDefault(),E())}var ne=Ad();In("click",_s,F=>{var ce,Ce;(Ce=(ce=F.target).closest)!=null&&Ce.call(ce,"[data-scm-menu]")||f(c,!1)});var D=b(ne),j=v(b(D),2),J=b(j),ve=b(J);Vu(ve,{size:14});var ke=v(J,2);{var Ve=F=>{var ce=pd(),Ce=b(ce),We=v(Ce,2),nt=v(We,2),Ot=v(nt,4);L("click",Ce,()=>{f(c,!1),k("fetch")}),L("click",We,()=>{f(c,!1),k("pull")}),L("click",nt,()=>{f(c,!1),k("push")}),L("click",Ot,()=>{f(c,!1),f(s,!a(s))}),m(F,ce)};H(ke,F=>{a(c)&&F(Ve)})}var Me=v(D,2);{var at=F=>{var ce=_d(),Ce=b(ce);en(Ce,{size:12,class:"animate-spin"}),m(F,ce)},pe=F=>{var ce=gd();m(F,ce)},_e=F=>{var ce=Md(),Ce=B(ce),We=b(Ce),nt=v(We,2),Ot=b(nt);{var Ke=Z=>{en(Z,{size:12,class:"animate-spin"})},ht=Z=>{da(Z,{size:12})};H(Ot,Z=>{_.gitBusy==="commit"?Z(Ke):Z(ht,-1)})}var an=v(Ce,2);{var Rn=Z=>{var Ne=bd(),Se=B(Ne),ie=b(Se),Ee=b(ie);{var $=V=>{Qt(V,{size:14,class:"text-vs-muted"})},M=V=>{fa(V,{size:14,class:"text-vs-muted"})};H(Ee,V=>{a(o)?V($):V(M,-1)})}var Y=v(ie,2),g=ee(Y,!0),C=v(Se,2);{var z=V=>{var Q=te(),ae=B(Q);Be(ae,17,()=>a(h),se=>se.path,(se,he)=>{var ge=md(),X=b(ge),we=ee(X,!0),Oe=v(X,2),Le=ee(Oe,!0),Xe=v(Oe,2),bt=b(Xe),Ze=b(bt);ed(Ze,{size:13});var un=v(Xe,2),dn=ee(un,!0);G((fn,Cn,Qr)=>{be(ge,"title",a(he).path),K(we,fn),K(Le,Cn),be(bt,"aria-label",`Unstage ${a(he).path??""}`),ut(un,1,`shrink-0 font-mono text-[11px] ${Qr??""}`),K(dn,a(he).index||a(he).code)},[()=>x(a(he).path),()=>w(a(he).path),()=>p(a(he).code)]),L("click",ge,()=>P(a(he))),L("keydown",ge,fn=>{fn.key==="Enter"&&P(a(he))}),L("click",bt,fn=>{fn.stopPropagation(),k("unstage",{files:[a(he).path]})}),m(se,ge)}),m(V,Q)};H(C,V=>{a(o)&&V(z)})}G(()=>K(g,a(h).length)),L("click",ie,()=>f(o,!a(o))),m(Z,Ne)};H(an,Z=>{a(h).length&&Z(Rn)})}var kn=v(an,2),Ln=b(kn),ur=b(Ln);{var Dn=Z=>{Qt(Z,{size:14,class:"text-vs-muted"})},dr=Z=>{fa(Z,{size:14,class:"text-vs-muted"})};H(ur,Z=>{a(i)?Z(Dn):Z(dr,-1)})}var $n=v(Ln,2),Kt=b($n),on=b(Kt);_o(on,{size:12});var Fn=v(Kt,2),Hn=b(Fn);ya(Hn,{size:13});var fr=v($n,2),jn=ee(fr,!0),vr=v(kn,2);{var hr=Z=>{var Ne=wd();Be(Ne,21,()=>a(y),Se=>Se.path,(Se,ie)=>{var Ee=xd(),$=b(Ee),M=ee($,!0),Y=v($,2),g=ee(Y,!0),C=v(Y,2),z=b(C),V=b(z);Uu(V,{size:13});var Q=v(z,2),ae=b(Q);od(ae,{size:13});var se=v(Q,2),he=b(se);ya(he,{size:13});var ge=v(C,2),X=ee(ge,!0);G((we,Oe,Le)=>{be(Ee,"title",a(ie).path),K(M,we),K(g,Oe),be(z,"aria-label",`Open changes to ${a(ie).path??""}`),be(Q,"aria-label",`Discard changes to ${a(ie).path??""}`),be(se,"aria-label",`Stage ${a(ie).path??""}`),ut(ge,1,`shrink-0 font-mono text-[11px] ${Le??""}`),K(X,a(ie).work||a(ie).code)},[()=>x(a(ie).path),()=>w(a(ie).path),()=>p(a(ie).code)]),L("click",Ee,()=>P(a(ie))),L("keydown",Ee,we=>{we.key==="Enter"&&P(a(ie))}),L("click",z,we=>{we.stopPropagation(),P(a(ie))}),L("click",Q,we=>{we.stopPropagation(),I(a(ie))}),L("click",se,we=>{we.stopPropagation(),k("stage",{files:[a(ie).path]})}),m(Se,Ee)},Se=>{var ie=yd();m(Se,ie)}),m(Z,Ne)};H(vr,Z=>{a(i)&&Z(hr)})}var pr=v(vr,2),ln=b(pr),_r=b(ln);{var gr=Z=>{Qt(Z,{size:14,class:"text-vs-muted"})},Ur=Z=>{fa(Z,{size:14,class:"text-vs-muted"})};H(_r,Z=>{a(l)?Z(gr):Z(Ur,-1)})}var Wr=v(_r,2);Xu(Wr,{size:12,class:"shrink-0 text-vs-muted"});var qr=v(ln,2);{var Ut=Z=>{var Ne=$d(),Se=B(Ne),ie=b(Se),Ee=b(ie);{var $=C=>{en(C,{size:12,class:"animate-spin"})},M=C=>{_o(C,{size:12})};H(Ee,C=>{_.gitBusy==="log"?C($):C(M,-1)})}var Y=v(Se,2);{var g=C=>{var z=kd(),V=ee(z,!0);G(()=>K(V,_.gitCommits.length)),m(C,z)};H(Y,C=>{_.gitCommits.length&&C(g)})}L("click",ie,()=>k("log")),m(Z,Ne)};H(qr,Z=>{a(l)&&Z(Ut)})}var Bn=v(pr,2);{var mr=Z=>{var Ne=Td();Be(Ne,21,()=>_.gitCommits,Se=>Se.hash,(Se,ie)=>{var Ee=Cd(),$=b(Ee),M=b($),Y=ee(M,!0),g=v(M,2);Be(g,17,()=>R(a(ie).refs),xl,(ge,X)=>{var we=Sd(),Oe=ee(we,!0);G(()=>K(Oe,a(X))),m(ge,we)});var C=v($,2),z=b(C),V=ee(z,!0),Q=v(z,2),ae=ee(Q,!0),se=v(Q,2),he=ee(se,!0);G(()=>{be(Ee,"title",`${a(ie).short} · ${a(ie).author} · ${a(ie).date}`),K(Y,a(ie).subject),K(V,a(ie).short),K(ae,a(ie).author),K(he,a(ie).relative)}),L("click",Ee,()=>S(a(ie))),L("keydown",Ee,ge=>{ge.key==="Enter"&&S(a(ie))}),m(Se,Ee)},Se=>{var ie=Ed(),Ee=ee(ie,!0);G(()=>K(Ee,_.gitBusy==="log"?"Loading history…":"No commits yet.")),m(Se,ie)}),m(Z,Ne)};H(Bn,Z=>{a(l)&&Z(mr)})}var cn=v(Bn,2),Vn=b(cn),Kn=b(Vn);po(Kn,{size:12,class:"shrink-0"});var Gr=v(Kn,2),Yr=ee(Gr,!0),Un=v(Vn,2);{var Jr=Z=>{var Ne=Nd(),Se=b(Ne);{var ie=M=>{en(M,{size:11,class:"animate-spin"})},Ee=M=>{Ou(M,{size:11})};H(Se,M=>{_.gitBusy==="pull"||_.gitBusy==="push"?M(ie):M(Ee,-1)})}var $=v(Se);G(()=>K($,` ${_.gitBehind??""}↓ ${_.gitAhead??""}↑`)),L("click",Ne,()=>k("pull").then(()=>k("push"))),m(Z,Ne)};H(Un,Z=>{_.gitHasUpstream&&Z(Jr)})}var Sn=v(cn,2);{var Xr=Z=>{var Ne=zd(),Se=b(Ne),ie=v(Se,2);L("keydown",Se,Ee=>{Ee.key==="Enter"&&T(),Ee.key==="Escape"&&f(s,!1)}),Qe(Se,()=>a(r),Ee=>f(r,Ee)),L("click",ie,T),m(Z,Ne)};H(Sn,Z=>{a(s)&&Z(Xr)})}var Wn=v(Sn,2);{var Zr=Z=>{var Ne=Pd(),Se=ee(Ne,!0);G(()=>K(Se,_.gitOutput)),m(Z,Ne)};H(Wn,Z=>{_.gitOutput&&Z(Zr)})}G(Z=>{be(We,"placeholder",`Message (Ctrl+Enter to commit on "${_.gitBranch||"branch"}")`),nt.disabled=Z,be(nt,"title",a(h).length?"Commit staged changes":"Stage a change first"),K(jn,a(y).length),K(Yr,_.gitBranch||"—")},[()=>!a(n).trim()||!a(h).length||_.gitBusy==="commit"]),L("keydown",We,q),Qe(We,()=>a(n),Z=>f(n,Z)),L("click",nt,E),L("click",Ln,()=>f(i,!a(i))),L("click",Kt,()=>k("status")),L("click",Fn,()=>k("stage",{files:["."]})),L("click",ln,N),m(F,ce)};H(Me,F=>{!a(W)||_.gitBusy==="status"&&!_.gitStatus&&!_.notARepo?F(at):_.notARepo?F(pe,1):F(_e,-1)})}L("click",J,()=>f(c,!a(c))),m(e,ne),vt()}It(["click","keydown"]);const Od="modulepreload",Rd=function(e,t){return new URL(e,t).href},hi={},va=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(h){return Promise.all(h.map(y=>Promise.resolve(y).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(h=>{if(h=Rd(h,r),h in hi)return;hi[h]=!0;const y=h.endsWith(".css"),p=y?'[rel="stylesheet"]':"";if(!!r)for(let k=l.length-1;k>=0;k--){const E=l[k];if(E.href===h&&(!y||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${p}`))return;const w=document.createElement("link");if(w.rel=y?"stylesheet":Od,y||(w.as="script"),w.crossOrigin="",w.href=h,d&&w.setAttribute("nonce",d),document.head.appendChild(w),y)return new Promise((k,E)=>{w.addEventListener("load",k),w.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},ds={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},Ld={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function Dd(e){var n;const t=(e||"").split("/").pop()||"";return t.toLowerCase()==="dockerfile"?"dockerfile":t.toLowerCase()==="makefile"?"shell":Ld[(n=t.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var Fd=A('<div class="editor svelte-1h8xysy"></div>');function Hd(e,t){ft(t,!0);let n,r=null,s=null,i="",o=!1;Kr(async()=>{s=await va(()=>import("./ide-monaco.js").then(c=>c.a),__vite__mapDeps([0,1]),import.meta.url),s.editor.defineTheme("monokai",ds),r=s.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{o||!i||_.updateContent(i,r.getValue())}),r.addCommand(s.KeyMod.CtrlCmd|s.KeyCode.KeyS,()=>_.saveActive())}),Mo(()=>r==null?void 0:r.dispose()),st(()=>{const c=_.activeTab;if(!(!r||!s)){if(!c){o=!0,r.setValue(""),i="",o=!1;return}if(c.key!==i){o=!0;const d=s.editor.createModel(c.content,c.language||Dd(c.path)),h=r.getModel();r.setModel(d),h==null||h.dispose(),r.updateOptions({readOnly:!!c.readOnly}),i=c.key,o=!1}else r.getValue()!==c.content&&(o=!0,r.setValue(c.content),o=!1)}});var l=Fd();bs(l,c=>n=c,()=>n),m(e,l),vt()}var Tn=Su(()=>_),jd=A('<span class="h-2 w-2 rounded-full bg-vs-fg group-hover:hidden"></span> <!>',1),Bd=A('<div><button class="flex items-center gap-1.5 py-2 pr-1 pl-3" role="tab"><!> <span class="whitespace-nowrap"> </span></button> <button class="mr-1.5 flex h-5 w-5 items-center justify-center rounded-sm hover:bg-vs-line"><!></button></div>'),Vd=A('<div class="px-3 py-2 text-xs text-vs-muted">Open a file from the Explorer</div>'),Kd=A('<div class="flex min-h-[35px] items-stretch overflow-x-auto bg-vs-tabinactive" role="tablist"></div>');function Ud(e,t){ft(t,!1);const n=s=>s.split("/").pop();zl();var r=Kd();Be(r,5,()=>Tn().tabs,s=>s.key,(s,i)=>{var o=Bd();let l;var c=b(o),d=b(c);Ao(d,{size:14,class:"shrink-0 text-vs-blue"});var h=v(d,2),y=ee(h,!0),p=v(c,2),x=b(p);{var w=E=>{var T=jd(),I=v(B(T),2);wa(I,{size:14,class:"hidden group-hover:block"}),m(E,T)},k=E=>{wa(E,{size:14,class:"opacity-0 group-hover:opacity-100"})};H(x,E=>{a(i).dirty?E(w):E(k,-1)})}G((E,T)=>{l=ut(o,1,"group flex items-center border-r border-vs-bg text-[13px]",null,l,{"bg-vs-tabactive":a(i).key===Tn().activeKey,"text-vs-bright":a(i).key===Tn().activeKey,"text-vs-muted":a(i).key!==Tn().activeKey}),be(c,"aria-selected",a(i).key===Tn().activeKey),be(c,"title",a(i).path),K(y,E),be(p,"title",a(i).dirty?"Unsaved changes — close":"Close"),be(p,"aria-label",`Close ${T??""}`)},[()=>n(a(i).path),()=>n(a(i).path)]),L("click",c,()=>Tn(Tn().activeKey=a(i).key)),L("click",p,()=>Tn().closeTab(a(i).key)),m(s,o)},s=>{var i=Vd();m(s,i)}),m(e,r),vt()}It(["click"]);var Wd=A('<option class="svelte-1roe1v9"> </option>'),qd=A('<p class="rounded-sm border border-mk-pink/40 bg-mk-pink/10 px-2 py-1 text-xs text-mk-pink svelte-1roe1v9"> </p>'),Gd=A('<div class="flex flex-col gap-1.5 svelte-1roe1v9"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green svelte-1roe1v9"><!> </span> <div class="chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"></div></div>'),Yd=A('<div class="flex flex-col gap-1.5 border-l-2 border-mk-blue/60 pl-2.5 svelte-1roe1v9"><span class="text-[11px] font-semibold text-mk-blue svelte-1roe1v9">You</span> <div class="text-[13px] leading-relaxed whitespace-pre-wrap text-mk-fg/90 svelte-1roe1v9"> </div></div>'),Jd=A(`<div class="m-auto flex max-w-[250px] flex-col items-center gap-2.5 text-center svelte-1roe1v9"><!> <p class="text-xs leading-relaxed text-mk-comment svelte-1roe1v9">Ask about the file you have open. The prompt goes to <span class="text-mk-muted svelte-1roe1v9"> </span>,
            and the reply appears here.</p></div>`),Xd=A('<div class="flex flex-col gap-1.5 svelte-1roe1v9"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green svelte-1roe1v9"><!> </span> <div class="chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"><!><span class="chat-caret svelte-1roe1v9"></span></div></div>'),Zd=A('<div class="flex items-center gap-2 text-[11px] text-mk-comment svelte-1roe1v9"><!> <span class="svelte-1roe1v9"> <span class="chat-dots svelte-1roe1v9"></span></span></div>'),Qd=A(`<button class="mx-auto -mt-1 mb-1 flex shrink-0 items-center gap-1 rounded-full border border-mk-line
             bg-mk-input px-2.5 py-0.5 text-[11px] text-mk-comment shadow hover:text-mk-fg svelte-1roe1v9"><!> </button>`),ef=A(`<span title="Context used of the model's window"> </span> <span class="h-2 w-16 overflow-hidden rounded-full bg-mk-line svelte-1roe1v9" aria-hidden="true"><span></span></span>`,1),tf=A('<span title="Estimated cost" class="svelte-1roe1v9"> </span>'),nf=A('<div class="flex shrink-0 items-center gap-2 border-t border-mk-line px-3 py-1 text-[10px] text-mk-comment svelte-1roe1v9"><!> <span title="Total tokens this session" class="svelte-1roe1v9"> </span> <!> <button class="ml-auto flex items-center gap-1 rounded-sm px-1.5 py-0.5 hover:bg-mk-line hover:text-mk-fg disabled:opacity-40 svelte-1roe1v9" title="Compact the conversation to free up context (/compact)"><!> Compact</button></div>'),pi=A('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line svelte-1roe1v9"><span class="w-3 text-mk-green svelte-1roe1v9"><!></span> </button>'),rf=A('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[150px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),sf=A('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line svelte-1roe1v9"><span class="w-3 text-mk-green svelte-1roe1v9"><!></span> <span class="truncate svelte-1roe1v9"> </span></button>'),af=A('<div class="absolute bottom-full left-0 z-20 mb-1 max-h-[260px] min-w-[190px] overflow-y-auto rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),of=A('<div class="relative svelte-1roe1v9" data-menu=""><button class="flex max-w-[110px] items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Model"><span class="truncate svelte-1roe1v9"> </span> <!></button> <!></div>'),lf=A('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[130px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),cf=A('<div class="relative svelte-1roe1v9" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Reasoning effort"> <!></button> <!></div>'),uf=A('<div class="flex h-full min-h-0 flex-col bg-mk-bg text-mk-fg svelte-1roe1v9"><div class="flex items-center gap-2 border-b border-mk-line px-3 py-1.5 svelte-1roe1v9"><!> <span class="text-[11px] font-semibold tracking-wide text-mk-muted uppercase svelte-1roe1v9">AI Agent</span> <select class="ml-auto min-w-0 max-w-[55%] truncate rounded-sm border border-mk-line bg-mk-input px-1.5 py-0.5 text-[11px] text-mk-fg outline-none focus:border-mk-green svelte-1roe1v9" title="Agent session that answers"></select></div> <div class="relative flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-3 py-3 svelte-1roe1v9"><!> <!> <!> <!></div> <!> <!> <div class="border-t border-mk-line p-2 svelte-1roe1v9"><div class="rounded-md border border-mk-line bg-mk-input focus-within:border-mk-green svelte-1roe1v9"><textarea rows="2" class="max-h-[200px] w-full resize-none bg-transparent px-2.5 py-2 text-[13px] text-mk-fg outline-none placeholder:text-mk-comment svelte-1roe1v9" placeholder="Ask about this workspace…"></textarea> <div class="flex items-center gap-1 px-1.5 pb-1.5 text-[11px] svelte-1roe1v9"><div class="relative svelte-1roe1v9" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Agent"> <!></button> <!></div> <!> <!> <!> <span class="ml-auto flex items-center gap-1.5 svelte-1roe1v9"><kbd class="hidden text-[10px] text-mk-comment sm:inline svelte-1roe1v9">↵ send · ⇧↵ newline</kbd> <button class="flex h-6 w-6 items-center justify-center rounded-md bg-mk-green text-mk-bg disabled:opacity-40 svelte-1roe1v9" title="Send (Enter)" aria-label="Send"><!></button></span></div></div></div></div>');function df(e,t){ft(t,!0);let n=je(t,"sessions",19,()=>[]),r=je(t,"session",3,""),s=je(t,"rootPath",3,""),i=O(""),o=O(ze(r()||n()[0]||"")),l=O(!1),c=0,d=O(!1),h=O(""),y=O("");const p=rt(()=>a(l)||a(d));let x=O(ze([])),w=O(""),k=O(null),E=O(null),T=null,I=O(ze({agent:"codex",available:[],model:"",effort:"",models:[],efforts:[]})),P=O(""),W=O("");const N=rt(()=>(a(I).models.find($=>$[0]===a(I).model)||[])[1]||a(I).model||"default");let S=O("");async function R(){if(!_.connectionId){f(S,"");return}try{f(S,(await $e.agentContext(_.connectionId)).context||"",!0)}catch{f(S,"")}}st(()=>{_.connectionId,R()});async function q(){if(a(o))try{f(I,{agent:"codex",available:[],model:"",effort:"",models:[],efforts:[],...await $e.sessionAgent(a(o))},!0)}catch($){f(I,{agent:a(I).agent,available:[],model:"",effort:"",models:[],efforts:[]},!0),_.setStatus($.message||"Could not read agent settings")}}async function ne(){if(a(o))try{const $=await $e.chat(a(o)),M=$.messages||[],Y=M.length!==a(x).length;f(x,M,!0),f(d,!!$.busy),f(y,$.detail||"",!0);const g=$.pending||"",C=g!==a(h);f(h,g,!0),f(w,""),(Y||C)&&a(J)&&queueMicrotask(ke)}catch($){f(w,$.message||"Could not load chat",!0)}}const D=3e3,j=1e3;st(()=>{const $=a(p)?j:D;!a(o)||c===$||(c=$,clearInterval(T),T=setInterval(ne,$))});let J=O(!0);function ve(){if(!a(k))return;const $=a(k).scrollHeight-a(k).scrollTop-a(k).clientHeight;f(J,$<80)}function ke(){a(k)&&(a(k).scrollTop=a(k).scrollHeight)}function Ve(){f(J,!0),ke()}st(()=>{const $=a(o);f(x,[],!0),f(h,""),f(d,!1),f(J,!0),T&&clearInterval(T),c=0,$&&(ne(),q())}),Mo(()=>{T&&clearInterval(T)});async function Me($){if(f(P,""),$!==a(I).agent){f(W,"agent");try{await $e.setSessionAgent(a(o),$),await q(),_.setStatus(`Switched to ${$}`)}catch(M){_.setStatus(M.message||"Could not switch agent")}finally{f(W,"")}}}async function at($){if(f(P,""),$!==a(I).model){f(W,"model");try{await $e.setSessionModel(a(o),$),await q(),_.setStatus(`Model set to ${$}`)}catch(M){_.setStatus(M.message||"Could not change model")}finally{f(W,"")}}}async function pe($){if(f(P,""),$!==a(I).effort){f(W,"effort");try{await $e.setSessionEffort(a(o),$),await q(),_.setStatus(`Reasoning effort set to ${$}`)}catch(M){_.setStatus(M.message||"Could not change effort")}finally{f(W,"")}}}function _e(){const $=_.connection||{},M=_.activeTab,Y=M?M.path:_.path||".",g=M?`
Active file contents (first 12,000 characters):
${M.content.slice(0,12e3)}`:"";return`${a(S)||($.kind==="local"?`[IDE workspace]
Local folder: ${$.workspace_root||"."}
`:`[IDE workspace]
SSH target: ${$.username||"?"}@${$.host||"?"}
`)}
Currently open: ${Y}${g}

${a(i).trim()}`}async function F(){const $=a(i).trim();if(!$||!a(o)||a(l))return;const M=_e();f(l,!0);try{const Y=await fetch(`${s()}/api/sessions/${encodeURIComponent(a(o))}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:M})}),g=await Y.json().catch(()=>({}));if(!Y.ok)throw new Error(g.error||"Could not send");f(i,""),a(E)&&(a(E).style.height="auto"),f(x,[...a(x),{role:"user",text:$,ts:Date.now()/1e3,_local:!0}],!0),queueMicrotask(ke),setTimeout(ne,1200)}catch(Y){_.setStatus(Y.message||"Could not send prompt")}finally{f(l,!1)}}function ce($){$.key==="Enter"&&!$.shiftKey&&($.preventDefault(),F())}function Ce($){const M=$.currentTarget;M.style.height="auto",M.style.height=`${Math.min(M.scrollHeight,200)}px`}const We=$=>$.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function nt($){const M=[];return We($).replace(/```(\w*)\n?([\s\S]*?)```/g,(C,z,V)=>(M.push(`<pre class="chat-code"><code>${V.replace(/\n$/,"")}</code></pre>`),`\0BLOCK${M.length-1}\0`)).replace(/`([^`\n]+)`/g,'<code class="chat-inline">$1</code>').replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>").split(`
`).map(C=>{const z=C.match(/^\s*[-*]\s+(.*)$/);return z?`<span class="chat-li">${z[1]}</span>`:C}).join(`
`).replace(/\u0000BLOCK(\d+)\u0000/g,(C,z)=>M[Number(z)])}function Ot($){const M=$.full||$.text||"",Y=`

`;if(M.startsWith("[IDE workspace")||M.startsWith("[Remote IDE context]")||M.startsWith("[Remote SSH IDE context]")){const g=M.lastIndexOf(Y);if(g!==-1)return M.slice(g+Y.length)}return M}let Ke=O(null),ht=O(!1),an=null;async function Rn(){if(a(o))try{const M=await(await fetch(`${s()}/api/sessions/${encodeURIComponent(a(o))}/stats`)).json().catch(()=>({}));f(Ke,M&&M.available?M:null,!0)}catch{f(Ke,null)}}st(()=>(a(o),Rn(),clearInterval(an),an=setInterval(Rn,2e4),()=>clearInterval(an)));async function kn(){if(!(!a(o)||a(ht))){f(ht,!0);try{const $=await fetch(`${s()}/api/sessions/${encodeURIComponent(a(o))}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:"/compact"})}),M=await $.json().catch(()=>({}));if(!$.ok)throw new Error(M.error||"Could not compact");setTimeout(Rn,4e3)}catch($){_.setStatus($.message||"Could not compact context")}finally{f(ht,!1)}}}const Ln=$=>{const M=Number($)||0;return M>=1e6?`${(M/1e6).toFixed(1)}M`:M>=1e3?`${(M/1e3).toFixed(1)}k`:String(M)},ur=$=>$>=90?"text-vs-red":$>=70?"text-vs-yellow":"text-vs-muted";var Dn=uf();In("click",_s,$=>{var M,Y;(Y=(M=$.target).closest)!=null&&Y.call(M,"[data-menu]")||f(P,"")});var dr=b(Dn),$n=b(dr);aa($n,{size:13,class:"shrink-0 text-mk-green"});var Kt=v($n,4);Be(Kt,20,n,$=>$,($,M)=>{var Y=Wd(),g=ee(Y,!0),C={};G(()=>{K(g,M),C!==(C=M)&&(Y.value=(Y.__value=C)??"")}),m($,Y)}),ps(Kt);var on=v(dr,2),Fn=b(on);{var Hn=$=>{var M=qd(),Y=ee(M,!0);G(()=>K(Y,a(w))),m($,M)};H(Fn,$=>{a(w)&&$(Hn)})}var fr=v(Fn,2);Be(fr,19,()=>a(x),($,M)=>$.ts+":"+M,($,M)=>{var Y=te(),g=B(Y);{var C=V=>{var Q=Gd(),ae=b(Q),se=b(ae);aa(se,{size:11});var he=v(se),ge=v(ae,2);Qo(ge,()=>nt(Ot(a(M))),!0),G(()=>K(he,` ${a(I).agent==="claude"?"Claude":"Codex"}`)),m(V,Q)},z=V=>{var Q=Yd(),ae=v(b(Q),2),se=ee(ae,!0);G(he=>K(se,he),[()=>Ot(a(M))]),m(V,Q)};H(g,V=>{a(M).role==="assistant"?V(C):V(z,-1)})}m($,Y)},$=>{var M=te(),Y=B(M);{var g=C=>{var z=Jd(),V=b(z);aa(V,{size:26,strokeWidth:1.3,class:"text-mk-line"});var Q=v(V,2),ae=v(b(Q)),se=ee(ae,!0);G(()=>K(se,a(o)||"the selected session")),m(C,z)};H(Y,C=>{a(w)||C(g)})}m($,M)});var jn=v(fr,2);{var vr=$=>{var M=Xd(),Y=b(M),g=b(Y);aa(g,{size:11});var C=v(g),z=v(Y,2),V=b(z);Qo(V,()=>nt(a(h))),G(()=>K(C,` ${a(I).agent==="claude"?"Claude":"Codex"}`)),m($,M)};H(jn,$=>{a(h)&&$(vr)})}var hr=v(jn,2);{var pr=$=>{var M=Zd(),Y=b(M);en(Y,{size:11,class:"animate-spin"});var g=v(Y,2),C=b(g);G(()=>K(C,a(y)||"Generating")),m($,M)};H(hr,$=>{a(p)&&$(pr)})}bs(on,$=>f(k,$),()=>a(k));var ln=v(on,2);{var _r=$=>{var M=Qd(),Y=b(M);Qt(Y,{size:11});var g=v(Y);G(()=>K(g,` ${a(p)?"Jump to latest — still generating":"Jump to latest"}`)),L("click",M,Ve),m($,M)};H(ln,$=>{a(J)||$(_r)})}var gr=v(ln,2);{var Ur=$=>{var M=nf(),Y=b(M);{var g=X=>{var we=ef(),Oe=B(we),Le=ee(Oe),Xe=v(Oe,2),bt=ee(Xe);G((Ze,un)=>{ut(Oe,1,Ze,"svelte-1roe1v9"),K(Le,`${a(Ke).contextPct??0??""}% context`),ut(bt,1,`block h-full rounded-full ${(a(Ke).contextPct||0)>=90?"bg-vs-red":(a(Ke).contextPct||0)>=70?"bg-vs-yellow":"bg-mk-green"}`,"svelte-1roe1v9"),$r(bt,`width: ${un??""}%`)},[()=>wl(ur(a(Ke).contextPct||0)),()=>Math.min(100,Math.max(0,a(Ke).contextPct||0))]),m(X,we)};H(Y,X=>{a(Ke).ctxWindowSize&&X(g)})}var C=v(Y,2),z=ee(C),V=v(C,2);{var Q=X=>{var we=tf(),Oe=ee(we);G(Le=>K(Oe,`$${Le??""}`),[()=>Number(a(Ke).estimatedCost).toFixed(2)]),m(X,we)};H(V,X=>{a(Ke).estimatedCost&&X(Q)})}var ae=v(V,2),se=b(ae);{var he=X=>{en(X,{size:10,class:"animate-spin"})},ge=X=>{Qu(X,{size:10})};H(se,X=>{a(ht)?X(he):X(ge,-1)})}G(X=>{K(z,`${X??""} tokens`),ae.disabled=a(ht)},[()=>Ln(a(Ke).totalTokens)]),L("click",ae,kn),m($,M)};H(gr,$=>{a(Ke)&&$(Ur)})}var Wr=v(gr,2),qr=b(Wr),Ut=b(qr);bs(Ut,$=>f(E,$),()=>a(E));var Bn=v(Ut,2),mr=b(Bn),cn=b(mr),Vn=b(cn),Kn=v(Vn);Qt(Kn,{size:11});var Gr=v(cn,2);{var Yr=$=>{var M=rf();Be(M,20,()=>a(I).available.length?a(I).available:["codex"],Y=>Y,(Y,g)=>{var C=pi(),z=b(C),V=b(z);{var Q=se=>{da(se,{size:11})};H(V,se=>{g===a(I).agent&&se(Q)})}var ae=v(z);G(()=>K(ae,` ${g==="claude"?"Claude":"Codex"}`)),L("click",C,()=>Me(g)),m(Y,C)}),m($,M)};H(Gr,$=>{a(P)==="agent"&&$(Yr)})}var Un=v(mr,2);{var Jr=$=>{var M=of(),Y=b(M),g=b(Y),C=ee(g,!0),z=v(g,2);Qt(z,{size:11,class:"shrink-0"});var V=v(Y,2);{var Q=ae=>{var se=af();Be(se,21,()=>a(I).models,he=>he[0],(he,ge)=>{var X=sf(),we=b(X),Oe=b(we);{var Le=Ze=>{da(Ze,{size:11})};H(Oe,Ze=>{a(ge)[0]===a(I).model&&Ze(Le)})}var Xe=v(we,2),bt=ee(Xe,!0);G(()=>K(bt,a(ge)[1])),L("click",X,()=>at(a(ge)[0])),m(he,X)}),m(ae,se)};H(V,ae=>{a(P)==="model"&&ae(Q)})}G(()=>K(C,a(N))),L("click",Y,()=>f(P,a(P)==="model"?"":"model",!0)),m($,M)};H(Un,$=>{a(I).models.length&&$(Jr)})}var Sn=v(Un,2);{var Xr=$=>{var M=cf(),Y=b(M),g=b(Y),C=v(g);Qt(C,{size:11});var z=v(Y,2);{var V=Q=>{var ae=lf();Be(ae,20,()=>a(I).efforts,se=>se,(se,he)=>{var ge=pi(),X=b(ge),we=b(X);{var Oe=Xe=>{da(Xe,{size:11})};H(we,Xe=>{he===a(I).effort&&Xe(Oe)})}var Le=v(X);G(()=>K(Le,` ${he??""}`)),L("click",ge,()=>pe(he)),m(se,ge)}),m(Q,ae)};H(z,Q=>{a(P)==="effort"&&Q(V)})}G(()=>K(g,`${(a(I).effort||"effort")??""} `)),L("click",Y,()=>f(P,a(P)==="effort"?"":"effort",!0)),m($,M)};H(Sn,$=>{a(I).efforts.length&&$(Xr)})}var Wn=v(Sn,2);{var Zr=$=>{en($,{size:11,class:"animate-spin text-mk-muted"})};H(Wn,$=>{a(W)&&$(Zr)})}var Z=v(Wn,2),Ne=v(b(Z),2),Se=b(Ne);{var ie=$=>{ad($,{size:11})},Ee=$=>{Ru($,{size:13})};H(Se,$=>{a(p)?$(ie):$(Ee,-1)})}G($=>{K(Vn,`${a(I).agent==="claude"?"Claude":"Codex"} `),Ne.disabled=$},[()=>a(p)||!a(i).trim()]),ho(Kt,()=>a(o),$=>f(o,$)),In("scroll",on,ve),L("keydown",Ut,ce),L("input",Ut,Ce),Qe(Ut,()=>a(i),$=>f(i,$)),L("click",cn,()=>f(P,a(P)==="agent"?"":"agent",!0)),L("click",Ne,F),m(e,Dn),vt()}It(["click","keydown","input"]);var ff=A('<span class="hint svelte-e2eyom">searching…</span>'),vf=A('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),hf=A('<ul class="results svelte-e2eyom"></ul>'),pf=A('<p class="empty svelte-e2eyom"> </p>'),_f=A('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function gf(e,t){ft(t,!0);let n=O(""),r=O(ze([])),s=O(0),i=O(!1),o=O(null),l=null;st(()=>{a(o)&&a(o).focus()}),st(()=>{const S=a(n).trim();if(l&&clearTimeout(l),!S){f(r,[],!0);return}l=setTimeout(async()=>{f(i,!0);try{const R=await $e.searchFiles(_.connectionId,_.path||".",S);f(r,R.matches||[],!0),f(s,0)}catch{f(r,[],!0)}finally{f(i,!1)}},180)});async function c(S){var q;if(!S)return;const R=_.path&&_.path!=="."?`${_.path}/`:"";await _.openFile(`${R}${S.path}`),(q=t.onclose)==null||q.call(t)}function d(S){var R;S.key==="Escape"?(S.preventDefault(),(R=t.onclose)==null||R.call(t)):S.key==="ArrowDown"?(S.preventDefault(),f(s,Math.min(a(s)+1,a(r).length-1),!0)):S.key==="ArrowUp"?(S.preventDefault(),f(s,Math.max(a(s)-1,0),!0)):S.key==="Enter"&&(S.preventDefault(),c(a(r)[a(s)]))}var h=_f(),y=B(h),p=v(y,2),x=b(p),w=b(x);Io(w,{size:14});var k=v(w,2);bs(k,S=>f(o,S),()=>a(o));var E=v(k,2);{var T=S=>{var R=ff();m(S,R)};H(E,S=>{a(i)&&S(T)})}var I=v(x,2);{var P=S=>{var R=hf();Be(R,23,()=>a(r),q=>q.path,(q,ne,D)=>{var j=vf(),J=b(j);let ve;var ke=b(J),Ve=ee(ke,!0),Me=v(ke,2),at=ee(Me,!0),pe=v(Me,2);{var _e=F=>{ju(F,{size:12})};H(pe,F=>{a(D)===a(s)&&F(_e)})}G(()=>{ve=ut(J,1,"svelte-e2eyom",null,ve,{active:a(D)===a(s)}),K(Ve,a(ne).name),K(at,a(ne).path)}),L("click",J,()=>c(a(ne))),m(q,j)}),m(S,R)},W=S=>{var R=pf(),q=ee(R);G(ne=>K(q,`No files match “${ne??""}”.`),[()=>a(n).trim()]),m(S,R)},N=rt(()=>a(n).trim()&&!a(i));H(I,S=>{a(r).length?S(P):a(N)&&S(W,1)})}L("click",y,()=>{var S;return(S=t.onclose)==null?void 0:S.call(t)}),L("keydown",y,S=>{var R;return S.key==="Escape"&&((R=t.onclose)==null?void 0:R.call(t))}),L("keydown",k,d),Qe(k,()=>a(n),S=>f(n,S)),m(e,h),vt()}It(["click","keydown"]);var mf=A('<div class="terminal-pane svelte-maclc7"><div class="bar svelte-maclc7"><span class="label svelte-maclc7">Terminal</span> <span> </span></div> <div class="screen svelte-maclc7"></div></div>');function bf(e,t){ft(t,!0);let n=je(t,"rootPath",3,""),r=je(t,"session",3,""),s=je(t,"index",3,0),i,o=null,l=null,c=null,d=O("connecting"),h=null,y=0,p=null,x=!1;const w={background:ds.colors["editor.background"],foreground:ds.colors["editor.foreground"],cursor:ds.colors["editorCursor.foreground"],selectionBackground:ds.colors["editor.selectionBackground"],black:"#272822",red:"#f92672",green:"#a6e22e",yellow:"#e6db74",blue:"#66d9ef",magenta:"#ae81ff",cyan:"#a1efe4",white:"#f8f8f2",brightBlack:"#75715e",brightRed:"#f92672",brightGreen:"#a6e22e",brightYellow:"#e6db74",brightBlue:"#66d9ef",brightMagenta:"#ae81ff",brightCyan:"#a1efe4",brightWhite:"#f9f8f5"};function k(){if(!(!l||!o||(c==null?void 0:c.readyState)!==WebSocket.OPEN))try{l.fit(),c.send(JSON.stringify({type:"resize",cols:o.cols,rows:o.rows}))}catch{}}function E(){if(x)return;const R=`${location.protocol==="https:"?"wss":"ws"}://${location.host}${n()}/ws/sessions/${encodeURIComponent(r())}/ide/terminal/${encodeURIComponent(_.connectionId)}?index=${encodeURIComponent(s())}`;c=new WebSocket(R),c.binaryType="arraybuffer",c.onopen=()=>{f(d,"connected"),y=0,k()},c.onmessage=q=>{o.write(typeof q.data=="string"?q.data:new Uint8Array(q.data))},c.onclose=q=>{if(x)return;if(q.code===1008){f(d,"refused"),o==null||o.write(`\r
\x1B[31m— not authorised for this terminal —\x1B[0m\r
`);return}if(y>=6){f(d,"closed"),o==null||o.write(`\r
\x1B[33m— terminal unavailable; reopen the panel to retry —\x1B[0m\r
`);return}f(d,"reconnecting");const ne=Math.min(1e3*2**y,1e4);y+=1,p=setTimeout(E,ne)},c.onerror=()=>{x||f(d,"error")}}Kr(async()=>{const[{Terminal:S},{FitAddon:R}]=await Promise.all([va(()=>import("./ide-xterm.js"),[],import.meta.url),va(()=>import("./ide-addon-fit.js"),[],import.meta.url)]);await va(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),o=new S({theme:w,fontSize:12,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3}),l=new R,o.loadAddon(l),o.open(i),l.fit(),E(),o.onData(q=>{(c==null?void 0:c.readyState)===WebSocket.OPEN&&c.send(new TextEncoder().encode(q))}),h=new ResizeObserver(()=>k()),h.observe(i)}),Mo(()=>{x=!0,p&&clearTimeout(p),h==null||h.disconnect(),c==null||c.close(),o==null||o.dispose()});var T=mf(),I=b(T),P=v(b(I),2),W=ee(P,!0),N=v(I,2);bs(N,S=>i=S,()=>i),G(()=>{ut(P,1,`status ${a(d)??""}`,"svelte-maclc7"),K(W,a(d))}),m(e,T),vt()}var xf=A('<div class="border-b border-vs-line bg-vs-red/10 px-4 py-2 text-xs text-vs-red"> </div>'),yf=A('<div class="flex items-center gap-2 px-4 py-3 text-xs text-vs-muted"><!> Loading…</div>'),wf=A('<button class="flex w-full items-center gap-2 px-4 py-1 text-left text-[13px] text-vs-fg hover:bg-vs-hover"><!> <span class="truncate"> </span></button>'),kf=A('<div class="px-4 py-3 text-xs text-vs-muted">No sub-folders here. You can still open this folder.</div>'),$f=A('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="flex h-[70vh] w-[min(640px,92vw)] flex-col overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">Open Folder <span class="ml-1 font-normal text-vs-muted"><!></span></div> <form class="flex gap-2 border-b border-vs-line px-3 py-2"><button type="button" class="flex items-center gap-1 rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover disabled:opacity-40" title="Up one folder"><!> Up</button> <input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-xs text-vs-fg outline-none focus:border-vs-accent" spellcheck="false" aria-label="Folder path"/> <button type="submit" class="rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover">Go</button></form> <!> <div class="min-h-0 flex-1 overflow-y-auto py-1"><!></div> <div class="flex items-center gap-2 border-t border-vs-line px-4 py-3"><span class="flex min-w-0 flex-1 items-center gap-2 text-xs text-vs-muted"><!> <span class="truncate font-mono"> </span></span> <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40">Open Folder</button></div></div></div>');function Sf(e,t){ft(t,!0);let n=O(""),r=O(""),s=O(ze([])),i=O(""),o=O(!0),l=O("");async function c(pe){f(o,!0),f(i,"");try{const _e=_.connectionId?await $e.browseOn(_.connectionId,pe):await $e.browse(pe);f(n,_e.path,!0),f(r,_e.parent,!0),f(s,_e.entries||[],!0),f(l,_e.path,!0)}catch(_e){f(i,_e.message||"Could not open that folder",!0)}finally{f(o,!1)}}Kr(()=>c(""));function d(pe){pe.preventDefault(),a(l).trim()&&c(a(l).trim())}var h=$f(),y=b(h),p=b(y),x=v(b(p)),w=b(x);{var k=pe=>{var _e=Xo();G(()=>K(_e,`on ${_.connection.username??""}@${_.connection.host??""}`)),m(pe,_e)},E=pe=>{var _e=Xo("on this server");m(pe,_e)};H(w,pe=>{_.connection&&_.connection.kind!=="local"?pe(k):pe(E,-1)})}var T=v(p,2),I=b(T),P=b(I);Bu(P,{size:14});var W=v(I,2),N=v(T,2);{var S=pe=>{var _e=xf(),F=ee(_e,!0);G(()=>K(F,a(i))),m(pe,_e)};H(N,pe=>{a(i)&&pe(S)})}var R=v(N,2),q=b(R);{var ne=pe=>{var _e=yf(),F=b(_e);en(F,{size:13,class:"animate-spin"}),m(pe,_e)},D=pe=>{var _e=te(),F=B(_e);Be(F,17,()=>a(s),ce=>ce.path,(ce,Ce)=>{var We=wf(),nt=b(We);Yu(nt,{size:14,class:"shrink-0 text-vs-blue"});var Ot=v(nt,2),Ke=ee(Ot,!0);G(()=>K(Ke,a(Ce).name)),L("dblclick",We,()=>c(a(Ce).path)),L("click",We,()=>c(a(Ce).path)),m(ce,We)},ce=>{var Ce=kf();m(ce,Ce)}),m(pe,_e)};H(q,pe=>{a(o)?pe(ne):pe(D,-1)})}var j=v(R,2),J=b(j),ve=b(J);Ju(ve,{size:13,class:"shrink-0"});var ke=v(ve,2),Ve=ee(ke,!0),Me=v(J,2),at=v(Me,2);G(()=>{I.disabled=!a(r),be(ke,"title",a(n)),K(Ve,a(n)),at.disabled=!a(n)||a(o)}),L("click",h,pe=>pe.target===pe.currentTarget&&t.onclose()),L("keydown",h,pe=>pe.key==="Escape"&&t.onclose()),In("submit",T,d),L("click",I,()=>a(r)&&c(a(r))),Qe(W,()=>a(l),pe=>f(l,pe)),L("click",Me,function(...pe){var _e;(_e=t.onclose)==null||_e.apply(this,pe)}),L("click",at,()=>t.onopen(a(n))),m(e,h),vt()}It(["click","keydown","dblclick"]);var Cf=A('<p class="px-4 py-2 text-xs text-vs-muted">Open a folder to search it.</p>'),Ef=A('<button class="flex w-full items-center gap-2 px-3 py-1 text-left text-[13px] hover:bg-vs-hover"><!> <span class="truncate text-vs-fg"> </span> <span class="ml-auto max-w-[45%] truncate text-[11px] text-vs-muted"> </span></button>'),Tf=A('<p class="px-4 py-2 text-xs text-vs-muted"> </p>'),Nf=A('<p class="px-4 py-2 text-xs text-vs-muted">Type to search filenames in this workspace.</p>'),zf=A('<div class="flex h-full min-h-0 flex-col"><div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Search</div> <div class="px-3 pb-2"><div class="flex items-center gap-1.5 rounded-sm border border-vs-line bg-vs-input px-2 focus-within:border-vs-accent"><!> <input class="min-w-0 flex-1 bg-transparent py-1 text-xs text-vs-fg outline-none placeholder:text-vs-muted" placeholder="Search filenames" spellcheck="false"/> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div></div>');function Pf(e,t){ft(t,!0);let n=O(""),r=O(ze([])),s=O(!1),i=O(!1),o=null;st(()=>{const P=a(n).trim();if(o&&clearTimeout(o),!P||!_.connectionId){f(r,[],!0),f(i,!1);return}o=setTimeout(async()=>{f(s,!0);try{const W=await $e.searchFiles(_.connectionId,_.path||".",P);f(r,W.matches||[],!0)}catch(W){f(r,[],!0),_.setStatus(W.message||"Search failed")}finally{f(s,!1),f(i,!0)}},200)});const l=P=>{const W=(P||"").split("/");return W.pop(),W.join("/")};var c=zf(),d=v(b(c),2),h=b(d),y=b(h);Io(y,{size:12,class:"shrink-0 text-vs-muted"});var p=v(y,2),x=v(p,2);{var w=P=>{en(P,{size:12,class:"shrink-0 animate-spin text-vs-muted"})};H(x,P=>{a(s)&&P(w)})}var k=v(d,2),E=b(k);{var T=P=>{var W=Cf();m(P,W)},I=P=>{var W=te(),N=B(W);Be(N,17,()=>a(r),S=>S.path,(S,R)=>{var q=Ef(),ne=b(q);Ao(ne,{size:13,class:"shrink-0 text-vs-blue"});var D=v(ne,2),j=ee(D,!0),J=v(D,2),ve=ee(J,!0);G((ke,Ve)=>{be(q,"title",a(R).path),K(j,ke),K(ve,Ve)},[()=>a(R).name||a(R).path.split("/").pop(),()=>l(a(R).path)]),L("click",q,()=>_.openFile(a(R).path)),m(S,q)},S=>{var R=te(),q=B(R);{var ne=J=>{var ve=Tf(),ke=ee(ve);G(()=>K(ke,`No files match “${a(n)??""}”.`)),m(J,ve)},D=J=>{var ve=Nf();m(J,ve)},j=rt(()=>!a(n).trim());H(q,J=>{a(i)&&!a(s)?J(ne):a(j)&&J(D,1)})}m(S,R)}),m(P,W)};H(E,P=>{_.connectionId?P(I,-1):P(T)})}Qe(p,()=>a(n),P=>f(n,P)),m(e,c),vt()}It(["click"]);var Mf=A('<p class="flex items-center gap-2 text-vs-muted"><!> Fetching host key…</p>'),Af=A('<p class="text-vs-red"> </p>'),If=A("<p>This host is already trusted. Try connecting again.</p>"),Of=A('<div class="flex items-baseline gap-2 font-mono text-[11px]"><span class="w-16 shrink-0 text-vs-muted"> </span> <span class="break-all text-vs-fg"> </span></div>'),Rf=A(`<p>The authenticity of <span class="font-mono text-vs-blue"> </span> can't be established. Verify these fingerprints match the server before you continue —
          if they don't, someone may be intercepting the connection.</p> <div class="mt-3 flex flex-col gap-1 rounded-sm border border-vs-line bg-vs-input p-2"></div> <p class="mt-3 text-xs text-vs-muted">Accepting adds the key to <span class="font-mono">~/.ssh/known_hosts</span> on this server.</p>`,1),Lf=A('<button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"> </button>'),Df=A('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="w-[min(560px,92vw)] overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="flex items-center gap-2 border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright"><!> Unknown host</div> <div class="px-4 py-3 text-[13px] leading-relaxed text-vs-fg"><!></div> <div class="flex justify-end gap-2 border-t border-vs-line px-4 py-3"><button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <!></div></div></div>');function Ff(e,t){ft(t,!0);let n=O(!0),r=O(""),s=O(null),i=O(!1);Kr(async()=>{try{f(s,await $e.hostKey(_.connectionId),!0)}catch(N){f(r,N.message||"Could not fetch the host key",!0)}finally{f(n,!1)}});async function o(){f(i,!0);try{await $e.trustHost(_.connectionId),t.ontrusted()}catch(N){f(r,N.message||"Could not trust this host",!0),f(i,!1)}}var l=Df(),c=b(l),d=b(c),h=b(d);sd(h,{size:15,class:"text-vs-yellow"});var y=v(d,2),p=b(y);{var x=N=>{var S=Mf(),R=b(S);en(R,{size:13,class:"animate-spin"}),m(N,S)},w=N=>{var S=Af(),R=ee(S,!0);G(()=>K(R,a(r))),m(N,S)},k=N=>{var S=If();m(N,S)},E=N=>{var S=Rf(),R=B(S),q=v(b(R)),ne=ee(q),D=v(R,2);Be(D,21,()=>a(s).fingerprints,j=>j.fingerprint,(j,J)=>{var ve=Of(),ke=b(ve),Ve=ee(ke,!0),Me=v(ke,2),at=ee(Me,!0);G(()=>{K(Ve,a(J).type),K(at,a(J).fingerprint)}),m(j,ve)}),G(()=>K(ne,`${a(s).host??""}:${a(s).port??""}`)),m(N,S)};H(p,N=>{var S;a(n)?N(x):a(r)?N(w,1):(S=a(s))!=null&&S.known?N(k,2):N(E,-1)})}var T=v(y,2),I=b(T),P=v(I,2);{var W=N=>{var S=Lf(),R=ee(S,!0);G(()=>{S.disabled=a(i),K(R,a(i)?"Trusting…":"Trust and connect")}),L("click",S,o),m(N,S)};H(P,N=>{var S;!a(n)&&!((S=a(s))!=null&&S.known)&&!a(r)&&N(W)})}L("click",l,N=>N.target===N.currentTarget&&t.onclose()),L("keydown",l,N=>N.key==="Escape"&&t.onclose()),L("click",I,function(...N){var S;(S=t.onclose)==null||S.apply(this,N)}),m(e,l),vt()}It(["click","keydown"]);var Hf=A('<div role="separator" tabindex="0" title="Drag to resize (double-click to reset)"><div></div></div>');function Xa(e,t){ft(t,!0);let n=je(t,"size",15),r=je(t,"side",3,"right"),s=je(t,"min",3,120),i=je(t,"max",3,800),o=je(t,"onreset",3,null),l=O(!1);const c=r()==="top";function d(w){var W;w.preventDefault(),f(l,!0);const k=c?w.clientY:w.clientX,E=n(),T=w.currentTarget;(W=T.setPointerCapture)==null||W.call(T,w.pointerId);function I(N){const R=(c?N.clientY:N.clientX)-k,q=r()==="left"||r()==="top"?-R:R;n(Math.round(Math.min(i(),Math.max(s(),E+q))))}function P(){var N;f(l,!1),(N=T.releasePointerCapture)==null||N.call(T,w.pointerId),window.removeEventListener("pointermove",I),window.removeEventListener("pointerup",P)}window.addEventListener("pointermove",I),window.addEventListener("pointerup",P)}function h(w){const k=w.shiftKey?40:10,E=c?"ArrowUp":r()==="left"?"ArrowLeft":"ArrowRight",T=c?"ArrowDown":r()==="left"?"ArrowRight":"ArrowLeft";if(w.key===E)n(Math.min(i(),n()+k));else if(w.key===T)n(Math.max(s(),n()-k));else return;w.preventDefault()}var y=Hf();let p;var x=ee(y);G(()=>{p=ut(y,1,`group relative shrink-0 ${c?"h-1 w-full cursor-row-resize":"w-1 cursor-col-resize"}`,null,p,{"bg-vs-accent":a(l)}),be(y,"aria-orientation",c?"horizontal":"vertical"),be(y,"aria-valuenow",n()),be(y,"aria-valuemin",s()),be(y,"aria-valuemax",i()),ut(x,1,`absolute ${c?"-top-1 -bottom-1 left-0 right-0":"-left-1 -right-1 top-0 bottom-0"}
           transition-colors group-hover:bg-vs-accent ${a(l)?"bg-vs-accent":""}`)}),L("pointerdown",y,d),L("dblclick",y,()=>{var w;return(w=o())==null?void 0:w()}),L("keydown",y,h),m(e,y),vt()}It(["pointerdown","dblclick","keydown"]);var jf=A('<span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>'),Bf=A('<span class="absolute right-1.5 bottom-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-vs-status px-1 text-[10px] leading-none font-semibold text-white"> </span>'),Vf=A("<button><!> <!> <!></button>"),Kf=A("<option> </option>"),Uf=A('<button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover hover:text-vs-red" title="Remove workspace" aria-label="Remove workspace"><!></button>'),Wf=A('<input class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),qf=A(`<button class="w-full rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Show this host's key fingerprint and trust it">Verify host key…</button>`),Gf=A('<!> <button class="w-full rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"> </button> <!>',1),Yf=A('<p class="mt-1 font-mono text-[11px] break-all text-vs-muted"> </p>'),Jf=A('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="~/.ssh/id_ed25519"/> <textarea class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-[11px] outline-none focus:border-vs-accent" rows="4" placeholder="…or paste a private key (-----BEGIN OPENSSH PRIVATE KEY-----)" spellcheck="false"></textarea>',1),Xf=A('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" type="password" placeholder="Password" autocomplete="new-password"/>'),Zf=A('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Host" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="User" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Port" type="number" min="1" max="65535"/> <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!>',1),Qf=A('<form class="mt-2 flex flex-col gap-1.5 border-t border-vs-line px-3 pt-2"><select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>This server (local folder)</option><option>Remote host over SSH</option></select> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"/> <div class="flex gap-1 pb-2"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110" type="submit">Create</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" type="button">Cancel</button></div></form>'),ev=A('<div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Workspaces</div> <div class="flex flex-col gap-2 px-3 pt-1"><select class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" aria-label="Workspace"><option>— select workspace —</option><!></select> <div class="flex gap-1"><button class="flex flex-1 items-center justify-center gap-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"><!> Open Folder</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Add a workspace or SSH connection" aria-label="Add workspace"><!></button> <!></div> <!> <!></div> <!>',1),tv=A('<aside class="flex shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel"><!></aside> <!>',1),nv=A('<div class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"><!> <div><h1 class="text-2xl font-light text-vs-fg">Multibuilder IDE</h1> <p class="mt-1 text-sm text-vs-muted">Edit files on this server or on a remote host over SSH.</p></div> <div class="flex flex-col gap-2 text-sm"><button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Open Folder… <kbd class="ml-2 rounded-sm border border-vs-line px-1.5 py-0.5 text-[10px] text-vs-muted">Ctrl+Shift+O</kbd></button> <button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Connect to a host over SSH…</button></div></div>'),rv=A('<button class="rounded-sm p-0.5 opacity-0 group-hover:opacity-100 hover:bg-vs-line" title="Close terminal — ends the shell"><!></button>'),sv=A('<span><button class="max-w-[140px] truncate"> </button> <!></span>'),av=A('<div class="absolute inset-0"><!></div>'),ov=A('<!> <div class="flex shrink-0 flex-col border-t border-vs-border bg-vs-bg"><div class="flex items-center gap-1 border-b border-vs-border px-2 py-1 text-[11px]"><!> <div class="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto"></div> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40" title="New terminal in this workspace" aria-label="New terminal"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover" title="Hide terminals (Ctrl+`) — sessions keep running" aria-label="Hide all terminals"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover hover:text-vs-red" title="Close this terminal — ends the shell" aria-label="Close this terminal"><!></button></div> <div class="relative min-h-0 flex-1"><!></div></div>',1),iv=A('<!> <div class="min-h-0 flex-1"><!></div> <!>',1),lv=A('<!> <aside class="flex shrink-0 flex-col overflow-hidden border-l border-vs-border bg-vs-panel"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1.5"><!> <span class="flex-1 text-[11px] font-semibold tracking-wide uppercase">AI Agent</span> <button class="rounded-sm p-0.5 hover:bg-vs-hover" title="Hide chat" aria-label="Hide chat"><!></button></div> <div class="min-h-0 flex-1"><!></div></aside>',1),_i=A('<span class="flex items-center gap-1"><!> </span>'),cv=A("<span> </span>"),uv=A('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle terminal (Ctrl+`)"><!> Terminal</button> <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Focus the tmux window on the host"><!></button>',1),dv=A('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle AI Agent panel"><!> Chat</button>'),fv=A('<div class="flex h-full flex-col overflow-hidden bg-vs-bg font-sans text-vs-fg"><header class="flex items-center gap-2 border-b border-vs-border bg-vs-titlebar px-3 py-1 text-xs"><!> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover" title="Open a folder on this server (Ctrl+Shift+O)">Open Folder…</button> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40" title="Open a file (Ctrl+P)">Open File…</button> <button><!> Terminal</button> <span class="mx-auto truncate text-vs-muted"> </span> <span><!> </span></header> <div class="flex min-h-0 flex-1"><nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity"><!> <div class="mt-auto flex flex-col items-center pb-1"><button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Account — signed in to the dashboard" aria-label="Account"><!></button> <button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Toggle side bar (Ctrl+B)" aria-label="Toggle side bar"><!></button></div></nav> <!> <section class="flex min-h-0 min-w-0 flex-1 flex-col"><!></section> <!></div> <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white"><!> <!> <span class="truncate"> </span> <span class="ml-auto flex items-center gap-3"><!> <span class="max-w-[40vw] truncate opacity-80"> </span> <!> <!></span></footer> <!> <!> <!></div>');function vv(e,t){ft(t,!0);let n=je(t,"sessions",19,()=>[]),r=je(t,"session",3,""),s=je(t,"rootPath",3,""),i=O("files");function o(g,C){try{const z=localStorage.getItem(`ide.show.${g}`);return z===null?C:z==="1"}catch{return C}}let l=O(ze(o("chat",!0)));const c={sidebar:240,chat:320,panel:240};function d(g){try{const C=localStorage.getItem(`ide.size.${g}`),z=Number(C);return Number.isFinite(z)&&z>0?z:c[g]}catch{return c[g]}}let h=O(ze(d("sidebar"))),y=O(ze(d("chat"))),p=O(ze(d("panel")));st(()=>{try{localStorage.setItem("ide.size.sidebar",String(a(h))),localStorage.setItem("ide.size.chat",String(a(y))),localStorage.setItem("ide.size.panel",String(a(p))),localStorage.setItem("ide.show.terminal",a(k)?"1":"0"),localStorage.setItem("ide.show.chat",a(l)?"1":"0"),localStorage.setItem("ide.show.sidebar",a(x)?"1":"0")}catch{}});let x=O(ze(o("sidebar",!0))),w=O(!1),k=O(ze(o("terminal",!1)));const E=8;let T=O(ze([0])),I=O(0);function P(){if(a(T).length>=E)return;let g=0;for(;a(T).includes(g);)g+=1;g>=E||(f(T,[...a(T),g].sort((C,z)=>C-z),!0),f(I,g,!0))}async function W(g){const C=a(T).indexOf(g),z=a(T).filter(V=>V!==g);f(T,z.length?z:[0],!0),a(I)===g&&f(I,a(T)[Math.min(C,a(T).length-1)],!0);try{await $e.closeTerminal(_.connectionId,g)}catch(V){_.setStatus(V.message||"Could not close terminal")}}let N=O("");st(()=>{const g=_.connectionId,C=_.connectionState;if(!g||C!=="connected")return;const z=`${g}|${C}`;a(N)!==z&&(f(N,z),f(T,[0],!0),f(I,0),$e.listTerminals(g).then(V=>{const Q=((V==null?void 0:V.terminals)||[]).filter(ae=>Number.isInteger(ae));Q.length&&(f(T,Q,!0),Q.includes(a(I))||f(I,Q[0],!0))}).catch(()=>{}))});let S=O(!1);st(()=>{a(k)&&f(S,!0)});let R=O(!1),q=O(!1),ne=O(""),D=O(ze({kind:"local",label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",private_key:"",workspace_root:"",max_file_bytes:1e6}));const j={idle:{icon:Hu,label:"Not connected"},connecting:{icon:Du,label:"Connecting…"},connected:{icon:Lu,label:"Connected"},reconnect:{icon:li,label:"Reconnect required"},error:{icon:li,label:"Error"}},J=rt(()=>j[_.connectionState].icon),ve=rt(()=>{var g;return((g=_.connection)==null?void 0:g.kind)==="local"}),ke=[{id:"files",icon:qu,label:"Explorer",keys:"Ctrl+Shift+E"},{id:"search",icon:Io,label:"Search",keys:"Ctrl+Shift+F"},{id:"git",icon:po,label:"Source Control",keys:"Ctrl+Shift+G"},{id:"remote",icon:td,label:"Remote Explorer",keys:""}];Kr(async()=>{await _.loadConnections(),_.connectionId&&await _.refreshStatus()});function Ve(g){a(i)===g&&a(x)?f(x,!1):(f(i,g,!0),f(x,!0))}async function Me(g){_.connectionId=g.currentTarget.value,_.resetWorkspaceView(),await _.refreshStatus()}async function at(g){f(q,!1);try{const C=g.split("/").filter(Boolean).pop()||g,z=_.connection;if(z&&z.kind!=="local"){await $e.setWorkspaceRoot(z.id,g,C),await _.loadConnections(),_.resetWorkspaceView(),await _.refreshFiles("."),_.setStatus(`Opened ${g} on ${z.username}@${z.host}`),f(i,"files"),f(x,!0);return}if(z&&z.kind==="local"){await $e.setWorkspaceRoot(z.id,g,C),await _.loadConnections(),_.resetWorkspaceView(),await _.refreshFiles("."),_.setStatus(`Opened ${g}`),f(i,"files"),f(x,!0);return}const V=await $e.createConnection({kind:"local",label:C,workspace_root:g,max_file_bytes:1e6});await _.loadConnections(),_.connectionId=V.connection.id,_.resetWorkspaceView(),await _.connect(""),f(i,"files"),f(x,!0)}catch(C){_.setStatus(C.message||"Could not open folder")}}async function pe(g){g.preventDefault();try{const C=await $e.createConnection({...a(D),port:Number(a(D).port)});f(R,!1),f(D,{...a(D),label:"",host:"",username:"",password:"",private_key:""},!0),await _.loadConnections(),_.connectionId=C.connection.id,await _.refreshStatus()}catch(C){_.setStatus(C.message||"Could not create connection")}}async function _e(){const g=_.connection;if(!g)return;const C=g.kind==="local"?"workspace":"connection";if(confirm(`Remove ${C} "${g.label}"? Saved tabs are cleared; files are untouched.`))try{await $e.deleteConnection(g.id),_.connectionId="",_.resetWorkspaceView(),await _.loadConnections()}catch(z){_.setStatus(z.message||"Could not delete")}}async function F(){try{const g=await $e.focusTerminal(_.connectionId);_.setStatus(`Focused ${g.window_name}`,"tmux window selected")}catch(g){_.setStatus(g.message||"Could not focus terminal")}}function ce(g){var Q,ae,se,he;const C=g.ctrlKey||g.metaKey,z=g.key.toLowerCase(),V=((ae=(Q=g.target)==null?void 0:Q.matches)==null?void 0:ae.call(Q,"input, textarea, select"))&&!((he=(se=g.target).closest)!=null&&he.call(se,".monaco-editor"));C&&z==="s"?(g.preventDefault(),_.saveActive()):C&&z==="p"&&!V?(g.preventDefault(),_.connectionId&&f(w,!0)):C&&g.shiftKey&&z==="o"?(g.preventDefault(),f(q,!0)):C&&g.shiftKey&&["e","f","g"].includes(z)?(g.preventDefault(),f(i,{e:"files",f:"search",g:"git"}[z],!0),f(x,!0)):C&&z==="b"&&!V?(g.preventDefault(),f(x,!a(x))):C&&z==="`"?(g.preventDefault(),_.connectionState==="connected"&&f(k,!a(k))):g.key==="Escape"&&a(w)&&(g.preventDefault(),f(w,!1))}var Ce=fv();In("keydown",_s,ce);var We=b(Ce),nt=b(We);ci(nt,{size:15,class:"shrink-0 text-vs-blue"});var Ot=v(nt,2),Ke=v(Ot,2),ht=v(Ke,2);let an;var Rn=b(ht);fi(Rn,{size:13});var kn=v(ht,2),Ln=ee(kn,!0),ur=v(kn,2),Dn=b(ur);ei(Dn,()=>a(J),(g,C)=>{C(g,{size:12})});var dr=v(Dn),$n=v(We,2),Kt=b($n),on=b(Kt);Be(on,17,()=>ke,g=>g.id,(g,C)=>{var z=Vf(),V=b(z);{var Q=ge=>{var X=jf();m(ge,X)};H(V,ge=>{a(i)===a(C).id&&a(x)&&ge(Q)})}var ae=v(V,2);ei(ae,()=>a(C).icon,(ge,X)=>{X(ge,{size:24,strokeWidth:1.4})});var se=v(ae,2);{var he=ge=>{var X=Bf(),we=ee(X,!0);G(()=>K(we,_.gitDirtyCount)),m(ge,X)};H(se,ge=>{a(C).id==="git"&&_.gitDirtyCount&&ge(he)})}G(()=>{ut(z,1,`relative flex h-12 w-12 items-center justify-center ${a(i)===a(C).id&&a(x)?"text-vs-bright":"text-vs-muted hover:text-vs-fg"}`),be(z,"title",a(C).keys?`${a(C).label} (${a(C).keys})`:a(C).label),be(z,"aria-label",a(C).label)}),L("click",z,()=>Ve(a(C).id)),m(g,z)});var Fn=v(on,2),Hn=b(Fn),fr=b(Hn);Fu(fr,{size:24,strokeWidth:1.4});var jn=v(Hn,2),vr=b(jn);rd(vr,{size:24,strokeWidth:1.4});var hr=v(Kt,2);{var pr=g=>{var C=tv(),z=B(C),V=b(z);{var Q=X=>{hd(X,{})},ae=X=>{Pf(X,{})},se=X=>{Id(X,{})},he=X=>{var we=ev(),Oe=v(B(we),2),Le=b(Oe),Xe=b(Le);Xe.value=Xe.__value="";var bt=v(Xe);Be(bt,17,()=>_.connections,Re=>Re.id,(Re,Ie)=>{var Fe=Kf(),hn=ee(Fe),Wt={};G(()=>{K(hn,`${a(Ie).kind==="local"?"🖿 ":"⇅ "}${a(Ie).label??""}`),Wt!==(Wt=a(Ie).id)&&(Fe.value=(Fe.__value=Wt)??"")}),m(Re,Fe)});var Ze;ps(Le);var un=v(Le,2),dn=b(un),fn=b(dn);Ja(fn,{size:13});var Cn=v(dn,2),Qr=b(Cn);ya(Qr,{size:13});var Ma=v(Cn,2);{var Aa=Re=>{var Ie=Uf(),Fe=b(Ie);vi(Fe,{size:13}),L("click",Ie,_e),m(Re,Ie)};H(Ma,Re=>{_.connection&&Re(Aa)})}var St=v(un,2);{var xt=Re=>{var Ie=Gf(),Fe=B(Ie);{var hn=Ct=>{var Yn=Wf();Qe(Yn,()=>a(ne),Oa=>f(ne,Oa)),m(Ct,Yn)};H(Fe,Ct=>{!a(ve)&&!_.connection.has_password&&Ct(hn)})}var Wt=v(Fe,2),Qs=ee(Wt,!0),ea=v(Wt,2);{var Ia=Ct=>{var Yn=qf();L("click",Yn,()=>_.needsHostKey=!0),m(Ct,Yn)};H(ea,Ct=>{a(ve)||Ct(Ia)})}G(()=>K(Qs,a(ve)?"Open workspace":"Connect")),L("click",Wt,()=>_.connect(a(ne))),m(Re,Ie)};H(St,Re=>{_.connection&&_.connectionState!=="connected"&&Re(xt)})}var qn=v(St,2);{var vn=Re=>{var Ie=Yf(),Fe=ee(Ie,!0);G(()=>K(Fe,_.connection.workspace_root)),m(Re,Ie)};H(qn,Re=>{_.connection&&Re(vn)})}var br=v(Oe,2);{var Gn=Re=>{var Ie=Qf(),Fe=b(Ie),hn=b(Fe);hn.value=hn.__value="local";var Wt=v(hn);Wt.value=Wt.__value="ssh",ps(Fe);var Qs=v(Fe,2),ea=v(Qs,2);{var Ia=pn=>{var Oo=Zf(),Ro=B(Oo),Lo=v(Ro,2),Do=v(Lo,2),ta=v(Do,2),Ra=b(ta);Ra.value=Ra.__value="agent";var La=v(Ra);La.value=La.__value="key";var Fo=v(La);Fo.value=Fo.__value="password",ps(ta);var Ho=v(ta,2);{var Al=ot=>{var es=Jf(),na=B(es),Rl=v(na,2);Qe(na,()=>a(D).identity_file,Da=>a(D).identity_file=Da),Qe(Rl,()=>a(D).private_key,Da=>a(D).private_key=Da),m(ot,es)};H(Ho,ot=>{a(D).auth_mode==="key"&&ot(Al)})}var Il=v(Ho,2);{var Ol=ot=>{var es=Xf();Qe(es,()=>a(D).password,na=>a(D).password=na),m(ot,es)};H(Il,ot=>{a(D).auth_mode==="password"&&ot(Ol)})}Qe(Ro,()=>a(D).host,ot=>a(D).host=ot),Qe(Lo,()=>a(D).username,ot=>a(D).username=ot),Qe(Do,()=>a(D).port,ot=>a(D).port=ot),ho(ta,()=>a(D).auth_mode,ot=>a(D).auth_mode=ot),m(pn,Oo)};H(ea,pn=>{a(D).kind==="ssh"&&pn(Ia)})}var Ct=v(ea,2),Yn=v(Ct,2),Oa=v(b(Yn),2);G(()=>{be(Ct,"placeholder",a(D).kind==="local"?"/var/www/app":"Workspace root"),Ct.required=a(D).kind==="local"}),In("submit",Ie,pe),ho(Fe,()=>a(D).kind,pn=>a(D).kind=pn),Qe(Qs,()=>a(D).label,pn=>a(D).label=pn),Qe(Ct,()=>a(D).workspace_root,pn=>a(D).workspace_root=pn),L("click",Oa,()=>f(R,!1)),m(Re,Ie)};H(br,Re=>{a(R)&&Re(Gn)})}G(()=>{Ze!==(Ze=_.connectionId)&&(Le.value=(Le.__value=Ze)??"",ms(Le,Ze))}),L("change",Le,Me),L("click",dn,()=>f(q,!0)),L("click",Cn,()=>f(R,!a(R))),m(X,we)};H(V,X=>{a(i)==="files"?X(Q):a(i)==="search"?X(ae,1):a(i)==="git"?X(se,2):X(he,-1)})}var ge=v(z,2);Xa(ge,{side:"right",min:170,max:620,onreset:()=>f(h,c.sidebar,!0),get size(){return a(h)},set size(X){f(h,X,!0)}}),G(()=>$r(z,`width: ${a(h)??""}px`)),m(g,C)};H(hr,g=>{a(x)&&g(pr)})}var ln=v(hr,2),_r=b(ln);{var gr=g=>{var C=nv(),z=b(C);ci(z,{size:64,strokeWidth:1,class:"text-vs-line"});var V=v(z,4),Q=b(V),ae=b(Q);Ja(ae,{size:16});var se=v(Q,2),he=b(se);di(he,{size:16}),L("click",Q,()=>f(q,!0)),L("click",se,()=>{f(i,"remote"),f(x,!0),f(R,!0)}),m(g,C)},Ur=g=>{var C=iv(),z=B(C);Ud(z,{});var V=v(z,2),Q=b(V);Hd(Q,{});var ae=v(V,2);{var se=he=>{var ge=ov(),X=B(ge);{var we=St=>{Xa(St,{side:"top",min:120,max:640,onreset:()=>f(p,c.panel,!0),get size(){return a(p)},set size(xt){f(p,xt,!0)}})};H(X,St=>{a(k)&&St(we)})}var Oe=v(X,2),Le=b(Oe),Xe=b(Le);fi(Xe,{size:13,class:"mx-1 shrink-0"});var bt=v(Xe,2);Be(bt,20,()=>a(T),St=>St,(St,xt)=>{var qn=sv(),vn=b(qn),br=ee(vn,!0),Gn=v(vn,2);{var Re=Ie=>{var Fe=rv(),hn=b(Fe);wa(hn,{size:11}),G(()=>be(Fe,"aria-label",`Close terminal ${xt+1}`)),L("click",Fe,()=>W(xt)),m(Ie,Fe)};H(Gn,Ie=>{a(T).length>1&&Ie(Re)})}G(()=>{var Ie;ut(qn,1,`group flex shrink-0 items-center gap-1 rounded-sm px-2 py-0.5
                           ${xt===a(I)?"bg-vs-hover text-vs-fg":"text-vs-muted hover:text-vs-fg"}`),K(br,xt===0?((Ie=_.connection)==null?void 0:Ie.label)||"Terminal":`Terminal ${xt+1}`)}),L("click",vn,()=>f(I,xt,!0)),m(St,qn)});var Ze=v(bt,2),un=b(Ze);ya(un,{size:14});var dn=v(Ze,2),fn=b(dn);Qt(fn,{size:15});var Cn=v(dn,2),Qr=b(Cn);vi(Qr,{size:13});var Ma=v(Le,2),Aa=b(Ma);fu(Aa,()=>_.connectionId,St=>{var xt=te(),qn=B(xt);Be(qn,16,()=>a(T),vn=>vn,(vn,br)=>{var Gn=av(),Re=b(Gn);bf(Re,{get rootPath(){return s()},get session(){return r()},get index(){return br}}),G(()=>be(Gn,"hidden",br!==a(I))),m(vn,Gn)}),m(St,xt)}),G(()=>{$r(Oe,`height: ${a(p)??""}px`),be(Oe,"hidden",!a(k)),Ze.disabled=a(T).length>=E}),L("click",Ze,P),L("click",dn,()=>f(k,!1)),L("click",Cn,()=>W(a(I))),m(he,ge)};H(ae,he=>{a(S)&&_.connectionState==="connected"&&he(se)})}m(g,C)};H(_r,g=>{_.connectionId?g(Ur,-1):g(gr)})}var Wr=v(ln,2);{var qr=g=>{var C=lv(),z=B(C);Xa(z,{side:"left",min:260,max:760,onreset:()=>f(y,c.chat,!0),get size(){return a(y)},set size(we){f(y,we,!0)}});var V=v(z,2),Q=b(V),ae=b(Q);ui(ae,{size:13});var se=v(ae,4),he=b(se);wa(he,{size:14});var ge=v(Q,2),X=b(ge);df(X,{get sessions(){return n()},get session(){return r()},get rootPath(){return s()}}),G(()=>$r(V,`width: ${a(y)??""}px`)),L("click",se,()=>f(l,!1)),m(g,C)};H(Wr,g=>{a(l)&&g(qr)})}var Ut=v($n,2),Bn=b(Ut);{var mr=g=>{var C=_i(),z=b(C);{var V=se=>{Ja(se,{size:12})},Q=se=>{di(se,{size:12})};H(z,se=>{a(ve)?se(V):se(Q,-1)})}var ae=v(z);G(()=>{be(C,"title",_.connection.workspace_root),K(ae,` ${_.connection.label??""}`)}),m(g,C)};H(Bn,g=>{_.connection&&g(mr)})}var cn=v(Bn,2);{var Vn=g=>{var C=_i(),z=b(C);po(z,{size:12});var V=v(z);G(()=>K(V,` ${_.gitBranch??""}`)),m(g,C)};H(cn,g=>{_.gitBranch&&g(Vn)})}var Kn=v(cn,2),Gr=ee(Kn,!0),Yr=v(Kn,2),Un=b(Yr);{var Jr=g=>{var C=cv(),z=ee(C);G(()=>K(z,`${_.dirtyCount??""} unsaved`)),m(g,C)};H(Un,g=>{_.dirtyCount&&g(Jr)})}var Sn=v(Un,2),Xr=ee(Sn,!0),Wn=v(Sn,2);{var Zr=g=>{var C=uv(),z=B(C),V=b(z);nd(V,{size:12});var Q=v(z,2),ae=b(Q);Ku(ae,{size:12}),L("click",z,()=>f(k,!a(k))),L("click",Q,F),m(g,C)};H(Wn,g=>{_.connectionState==="connected"&&g(Zr)})}var Z=v(Wn,2);{var Ne=g=>{var C=dv(),z=b(C);ui(z,{size:12}),L("click",C,()=>f(l,!a(l))),m(g,C)};H(Z,g=>{g(Ne)})}var Se=v(Ut,2);{var ie=g=>{gf(g,{onclose:()=>f(w,!1)})};H(Se,g=>{a(w)&&g(ie)})}var Ee=v(Se,2);{var $=g=>{Sf(g,{onopen:at,onclose:()=>f(q,!1)})};H(Ee,g=>{a(q)&&g($)})}var M=v(Ee,2);{var Y=g=>{Ff(g,{onclose:()=>_.needsHostKey=!1,ontrusted:async()=>{_.needsHostKey=!1,await _.connect(a(ne))}})};H(M,g=>{_.needsHostKey&&g(Y)})}G(()=>{var g;Ke.disabled=!_.connectionId,an=ut(ht,1,"flex items-center gap-1 rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40",null,an,{"text-vs-bright":a(k)}),ht.disabled=_.connectionState!=="connected",be(ht,"title",_.connectionState==="connected"?"Toggle terminal (Ctrl+`)":"Open a workspace to use the terminal"),be(kn,"title",(g=_.connection)==null?void 0:g.workspace_root),K(Ln,_.connection?`${_.connection.label} — Multibuilder IDE`:"Multibuilder IDE"),ut(ur,1,`flex items-center gap-1 ${_.connectionState==="connected"?"text-vs-green":_.connectionState==="connecting"?"text-vs-yellow":_.connectionState==="idle"?"text-vs-muted":"text-vs-red"}`),K(dr,` ${j[_.connectionState].label??""}`),K(Gr,_.statusText),K(Xr,_.detailText)}),L("click",Ot,()=>f(q,!0)),L("click",Ke,()=>f(w,!0)),L("click",ht,()=>f(k,!a(k))),L("click",Hn,()=>_.setStatus("Signed in to the Multibuilder dashboard")),L("click",jn,()=>f(x,!a(x))),m(e,Ce),vt()}It(["click","change"]);function Ml(e,t){return lu(vv,{target:e,props:t})}function gi(){const e=document.getElementById("ide-root");if(!e||e.dataset.mounted)return;e.dataset.mounted="1";const t=window.__IDE_BOOTSTRAP__||{};Ml(e,{sessions:t.sessions||[],session:t.session||"",rootPath:t.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",gi):gi();window.mountRemoteIde=Ml;export{va as _};
