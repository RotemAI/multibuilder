const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css","./ide3.css"])))=>i.map(i=>d[i]);
var Ll=Object.defineProperty;var jo=e=>{throw TypeError(e)};var Dl=(e,t,n)=>t in e?Ll(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var dt=(e,t,n)=>Dl(e,typeof t!="symbol"?t+"":t,n),Fa=(e,t,n)=>t.has(e)||jo("Cannot "+n);var u=(e,t,n)=>(Fa(e,t,"read from private field"),n?n.call(e):t.get(e)),W=(e,t,n)=>t.has(e)?jo("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),ce=(e,t,n,r)=>(Fa(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),xe=(e,t,n)=>(Fa(e,t,"access private method"),n);var Ea=Array.isArray,Fl=Array.prototype.indexOf,pa=Array.prototype.includes,Ta=Array.from,yi=Object.defineProperty,An=Object.getOwnPropertyDescriptor,wi=Object.getOwnPropertyDescriptors,Hl=Object.prototype,jl=Array.prototype,mo=Object.getPrototypeOf,Bo=Object.isExtensible;function ns(e){return typeof e=="function"}const Bl=()=>{};function Vl(e){return e()}function Za(e){for(var t=0;t<e.length;t++)e[t]()}function ki(){var e,t,n=new Promise((r,s)=>{e=r,t=s});return{promise:n,resolve:e,reject:t}}function Kl(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const Xe=2,Lr=4,Js=8,bo=1<<24,Vt=16,Ot=32,yn=64,Qa=128,xo=256,It=512,Ye=1024,Je=2048,Wt=4096,pt=8192,kt=16384,Br=32768,_a=1<<25,On=65536,ga=1<<17,Ul=1<<18,Vr=1<<19,$i=1<<20,en=1<<25,ur=65536,ma=1<<21,Er=1<<22,In=1<<23,sn=Symbol("$state"),Si=Symbol("component"),Ci=Symbol("legacy props"),Wl=Symbol(""),ia=Symbol("attributes"),eo=Symbol("class"),to=Symbol("style"),os=Symbol("text"),la=Symbol("form reset"),Xs=new class extends Error{constructor(){super(...arguments);dt(this,"name","StaleReactionError");dt(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var mi;const yo=!!((mi=globalThis.document)!=null&&mi.contentType)&&globalThis.document.contentType.includes("xml"),ql=1,Gl=2,Ei=4,Yl=8,Jl=16,Xl=1,Zl=2,Ti=4,Ql=8,ec=16,tc=1,nc=2,Ue=Symbol("uninitialized"),Ni="http://www.w3.org/1999/xhtml",zi="http://www.w3.org/2000/svg",rc="http://www.w3.org/1998/Math/MathML",sc="@attach";function ac(){console.warn("https://svelte.dev/e/derived_inert")}function oc(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function ic(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Mi(e){return e===this.v}function lc(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Pi(e){return!lc(e,this.v)}function Ai(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function cc(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function uc(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function dc(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function fc(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function vc(e){throw new Error("https://svelte.dev/e/effect_orphan")}function hc(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function pc(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function _c(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function gc(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function mc(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function bc(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let Kr=!1;function xc(){Kr=!0}let Re=null;function Dr(e){Re=e}function _t(e,t=!1,n){Re={p:Re,i:!1,c:null,e:null,s:e,x:null,r:_e,l:Kr&&!t?{s:null,u:null,$:[]}:null}}function gt(e){var t=Re,n=t.e;if(n!==null){t.e=null;for(var r of n)nl(r)}return t.i=!0,Re=t.p,wo(e)}function wo(e={}){return yi(e,Si,{value:!0}),e}function Ur(){return!Kr||Re!==null&&Re.l===null}let er=[];function Ii(){var e=er;er=[],Za(e)}function tn(e){if(er.length===0&&!hs){var t=er;queueMicrotask(()=>{t===er&&Ii()})}er.push(e)}function yc(){for(;er.length>0;)Ii()}const wc=-7169;function Fe(e,t){e.f=e.f&wc|t}function ko(e){(e.f&It)!==0||e.deps===null?Fe(e,Ye):Fe(e,Wt)}function Oi(e){if(e!==null)for(const t of e)(t.f&Xe)===0||(t.f&ur)===0||(t.f^=ur,Oi(t.deps))}function Ri(e,t,n){(e.f&Je)!==0?t.add(e):(e.f&Wt)!==0&&n.add(e),Oi(e.deps),Fe(e,Ye)}let sa=!1;function kc(e){var t=sa;try{return sa=!1,[e(),sa]}finally{sa=t}}function Li(e,t){if(t){const n=document.body;e.autofocus=!0,tn(()=>{document.activeElement===n&&e.focus()})}}let Vo=!1;function $c(){Vo||(Vo=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[la])==null||t.call(n)})},{capture:!0}))}function Wr(e){var t=me,n=_e;Rt(null),Lt(null);try{return e()}finally{Rt(t),Lt(n)}}function Di(e,t,n,r=n){e.addEventListener(t,()=>Wr(n));const s=e[la];s?e[la]=()=>{s(),r(!0)}:e[la]=()=>r(!0),$c()}function Fi(e,t,n,r){const s=Ur()?Fr:$o;var i=e.filter(x=>!x.settled),o=t.map(s);if(n.length===0&&i.length===0){r(o);return}var l=_e,c=Sc(),d=i.length===1?i[0].promise:i.length>1?Promise.all(i.map(x=>x.promise)):null;function h(x){if((l.f&kt)===0){c();try{r([...o,...x])}catch(w){Qt(w,l)}ba()}}var y=Hi();if(n.length===0){d.then(()=>h([])).finally(y);return}function _(){Promise.all(n.map(x=>Cc(x))).then(h).catch(x=>Qt(x,l)).finally(y)}d?d.then(()=>{c(),_(),ba()}):_()}function Sc(){var e=_e,t=me,n=Re,r=re;return function(i=!0){Lt(e),Rt(t),Dr(n),i&&(e.f&kt)===0&&(r==null||r.activate(),r==null||r.apply())}}function ba(e=!0){Lt(null),Rt(null),Dr(null),e&&(re==null||re.deactivate())}function Hi(){var e=_e,t=e.b,n=re,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function Fr(e){var t=Xe|Je;return _e!==null&&(_e.f|=Vr),{ctx:Re,deps:null,effects:null,equals:Mi,f:t,fn:e,reactions:null,rv:0,v:Ue,wv:0,parent:_e,ac:null}}const is=Symbol("obsolete");function Cc(e,t,n){let r=_e;r===null&&cc();var s=void 0,i=wn(Ue),o=!me,l=new Set;return jc(()=>{var x,w;var c=_e,d=ki();s=d.promise;try{Promise.resolve(e()).then(d.resolve,k=>{k!==Xs&&d.reject(k)}).finally(ba)}catch(k){d.reject(k),ba()}var h=re;if(o){if((c.f&Br)!==0)var y=Hi();if((x=r.b)!=null&&x.is_rendered())(w=h.async_deriveds.get(c))==null||w.reject(is);else for(const k of l.values())k.reject(is);l.add(d),h.async_deriveds.set(c,d)}const _=(k,E=void 0)=>{y==null||y(),l.delete(d),E!==is&&(h.activate(),E?(i.f|=In,Hr(i,E)):((i.f&In)!==0&&(i.f^=In),Hr(i,k)),h.deactivate())};d.promise.then(_,k=>_(null,k||"unknown"))}),za(()=>{for(const c of l)c.reject(is)}),new Promise(c=>{function d(h){function y(){h===s?c(i):d(s)}h.then(y,y)}d(s)})}function at(e){const t=Fr(e);return cl(t),t}function $o(e){const t=Fr(e);return t.equals=Pi,t}function Ec(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)et(t[n])}}function So(e){var t,n=_e,r=e.parent;if(!kn&&r!==null&&e.v!==Ue&&(r.f&(kt|pt))!==0)return ac(),e.v;Lt(r);try{e.f&=~ur,Ec(e),t=vl(e)}finally{Lt(n)}return t}function ji(e){var t=So(e);if(!e.equals(t)&&(e.wv=dl(),(!(re!=null&&re.is_fork)||e.deps===null)&&(re!==null?(re.capture(e,t,!0),vs==null||vs.capture(e,t,!0)):e.v=t,e.deps===null))){Fe(e,Ye);return}kn||(Qe!==null?(To()||re!=null&&re.is_fork)&&Qe.set(e,t):ko(e))}function Tc(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&Wr(()=>{n.ac.abort(Xs),n.ac=null}),n.fn!==null&&(n.teardown=Bl),ms(n,0),zo(n))}function Bi(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&jr(t)}let Ha=null,$r=null,re=null,vs=null,Qe=null,no=null,hs=!1,ja=!1,Cr=null,ca=null;var Ko=0;let Nc=1;var zr,Mn,rr,Mr,Pr,Ar,mn,Ir,xt,ys,bn,jt,Jt,Or,sr,Ne,ro,ls,so,Vi,Ki,Sr,zc,cs;const $a=class $a{constructor(){W(this,Ne);dt(this,"id",Nc++);W(this,zr,!1);dt(this,"linked",!0);W(this,Mn,null);W(this,rr,null);dt(this,"async_deriveds",new Map);dt(this,"current",new Map);dt(this,"previous",new Map);W(this,Mr,new Set);W(this,Pr,new Set);W(this,Ar,0);W(this,mn,new Map);W(this,Ir,null);W(this,xt,[]);W(this,ys,[]);W(this,bn,new Set);W(this,jt,new Set);W(this,Jt,new Map);W(this,Or,new Set);dt(this,"is_fork",!1);W(this,sr,!1);$r===null?Ha=$r=this:(ce($r,rr,this),ce(this,Mn,$r)),$r=this}skip_effect(t){u(this,Jt).has(t)||u(this,Jt).set(t,{d:[],m:[]}),u(this,Or).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=u(this,Jt).get(t);if(r){u(this,Jt).delete(t);for(var s of r.d)Fe(s,Je),n(s);for(s of r.m)Fe(s,Wt),n(s)}u(this,Or).add(t)}capture(t,n,r=!1){t.v!==Ue&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&In)===0&&(this.current.set(t,[n,r]),Qe==null||Qe.set(t,n)),this.is_fork||(t.v=n)}activate(){re=this}deactivate(){re=null,Qe=null}flush(){try{ja=!0,re=this,xe(this,Ne,ls).call(this)}finally{Ko=0,no=null,Cr=null,ca=null,ja=!1,re=null,Qe=null,an.clear()}}discard(){var t;for(const n of u(this,Pr))n(this);u(this,Pr).clear();for(const n of this.async_deriveds.values())n.reject(is);xe(this,Ne,cs).call(this),(t=u(this,Ir))==null||t.resolve()}register_created_effect(t){u(this,ys).push(t)}increment(t,n){if(ce(this,Ar,u(this,Ar)+1),t){let r=u(this,mn).get(n)??0;u(this,mn).set(n,r+1)}}decrement(t,n){if(ce(this,Ar,u(this,Ar)-1),t){let r=u(this,mn).get(n)??0;r===1?u(this,mn).delete(n):u(this,mn).set(n,r-1)}u(this,sr)||(ce(this,sr,!0),tn(()=>{ce(this,sr,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)u(this,bn).add(r);for(const r of n)u(this,jt).add(r);t.clear(),n.clear()}oncommit(t){u(this,Mr).add(t)}ondiscard(t){u(this,Pr).add(t)}settled(){return(u(this,Ir)??ce(this,Ir,ki())).promise}static ensure(){if(re===null){const t=re=new $a;!ja&&!hs&&tn(()=>{u(t,zr)||t.flush()})}return re}apply(){{Qe=null;return}}schedule(t){var s;if(no=t,(s=t.b)!=null&&s.is_pending&&(t.f&(Lr|Js|bo))!==0&&(t.f&Br)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Cr!==null&&n===_e&&(me===null||(me.f&Xe)===0))return;if((r&(yn|Ot))!==0){if((r&Ye)===0)return;n.f^=Ye}}u(this,xt).push(n)}};zr=new WeakMap,Mn=new WeakMap,rr=new WeakMap,Mr=new WeakMap,Pr=new WeakMap,Ar=new WeakMap,mn=new WeakMap,Ir=new WeakMap,xt=new WeakMap,ys=new WeakMap,bn=new WeakMap,jt=new WeakMap,Jt=new WeakMap,Or=new WeakMap,sr=new WeakMap,Ne=new WeakSet,ro=function(){if(this.is_fork)return!0;for(const r of u(this,mn).keys()){for(var t=r,n=!1;t.parent!==null;){if(u(this,Jt).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},ls=function(){var c,d,h,y;ce(this,zr,!0),Ko++>1e3&&(xe(this,Ne,cs).call(this),Pc());for(const _ of u(this,bn))u(this,jt).delete(_),Fe(_,Je),this.schedule(_);for(const _ of u(this,jt))Fe(_,Wt),this.schedule(_);const t=u(this,xt);ce(this,xt,[]),this.apply();var n=Cr=[],r=[],s=ca=[];for(const _ of t)try{xe(this,Ne,so).call(this,_,n,r)}catch(x){throw qi(_),xe(this,Ne,ro).call(this)||this.discard(),x}if(re=null,s.length>0){var i=$a.ensure();for(const _ of s)i.schedule(_)}if(Cr=null,ca=null,xe(this,Ne,ro).call(this)){xe(this,Ne,Sr).call(this,r),xe(this,Ne,Sr).call(this,n);for(const[_,x]of u(this,Jt))Wi(_,x);s.length>0&&xe(c=re,Ne,ls).call(c);return}const o=xe(this,Ne,Vi).call(this);if(o){xe(this,Ne,Sr).call(this,r),xe(this,Ne,Sr).call(this,n),xe(d=o,Ne,Ki).call(d,this);return}u(this,bn).clear(),u(this,jt).clear();for(const _ of u(this,Mr))_(this);u(this,Mr).clear(),vs=this,Uo(r),Uo(n),vs=null,(h=u(this,Ir))==null||h.resolve();var l=re;if(u(this,Ar)===0&&(u(this,xt).length===0||l!==null)&&xe(this,Ne,cs).call(this),u(this,xt).length>0)if(l!==null){const _=l;u(_,xt).push(...u(this,xt).filter(x=>!u(_,xt).includes(x)))}else l=this;l!==null&&(an.clear(),xe(y=l,Ne,ls).call(y))},so=function(t,n,r){t.f^=Ye;for(var s=t.first;s!==null;){var i=s.f,o=(i&(Ot|yn))!==0,l=o&&(i&Ye)!==0,c=l||(i&pt)!==0||u(this,Jt).has(s);if(!c&&s.fn!==null){o?s.f^=Ye:(i&Lr)!==0?n.push(s):Qs(s)&&((i&Vt)!==0&&u(this,jt).add(s),jr(s));var d=s.first;if(d!==null){s=d;continue}}for(;s!==null;){var h=s.next;if(h!==null){s=h;break}s=s.parent}}},Vi=function(){for(var t=u(this,Mn);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=u(t,Mn)}return null},Ki=function(t){var r;for(const[s,i]of t.current)!this.previous.has(s)&&t.previous.has(s)&&this.previous.set(s,t.previous.get(s)),this.current.set(s,i);for(const[s,i]of t.async_deriveds){const o=this.async_deriveds.get(s);o&&i.promise.then(o.resolve).catch(o.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,bn),u(t,jt));const n=s=>{var i=s.reactions;if(i!==null&&!((s.f&Xe)!==0&&(s.f&(Je|Wt))===0))for(const c of i){var o=c.f;if((o&Xe)!==0)n(c);else{var l=c;o&(Er|Vt)&&!this.async_deriveds.has(l)&&(u(this,jt).delete(l),Fe(l,Je),this.schedule(l))}}};for(const s of this.current.keys())n(s);this.oncommit(()=>t.discard()),xe(r=t,Ne,cs).call(r),re=this,xe(this,Ne,ls).call(this)},Sr=function(t){for(var n=0;n<t.length;n+=1)Ri(t[n],u(this,bn),u(this,jt))},zc=function(){var y;for(let _=Ha;_!==null;_=u(_,rr)){var t=_.id<this.id,n=[];for(const[x,[w,k]]of this.current){if(_.current.has(x)){var r=_.current.get(x)[0];if(t&&w!==r)_.current.set(x,[w,k]);else continue}n.push(x)}if(t)for(const[x,w]of this.async_deriveds){const k=_.async_deriveds.get(x);k&&w.promise.then(k.resolve).catch(k.reject)}var s=[..._.current.keys()].filter(x=>!_.current.get(x)[1]);if(!(!u(_,zr)||s.length===0)){var i=s.filter(x=>!this.current.has(x));if(i.length===0)t&&_.discard();else if(n.length>0){if(t)for(const x of u(this,Or))_.unskip_effect(x,w=>{var k;(w.f&(Vt|Er))!==0?_.schedule(w):xe(k=_,Ne,Sr).call(k,[w])});_.activate();var o=new Set,l=new Map;for(var c of n)Ui(c,i,o,l);l=new Map;var d=[..._.current].filter(([x,w])=>{const k=this.current.get(x);return k?k[0]!==w[0]||k[1]!==w[1]:!0}).map(([x])=>x);if(d.length>0)for(const x of u(this,ys))(x.f&(kt|pt|ga))===0&&Co(x,d,l)&&((x.f&(Er|Vt))!==0?(Fe(x,Je),_.schedule(x)):u(_,bn).add(x));if(u(_,xt).length>0&&!u(_,sr)){_.apply();for(var h of u(_,xt))xe(y=_,Ne,so).call(y,h,[],[]);ce(_,xt,[])}_.deactivate()}}}},cs=function(){if(this.linked){var t=u(this,Mn),n=u(this,rr);t===null?Ha=n:ce(t,rr,n),n===null?$r=t:ce(n,Mn,t),this.linked=!1}};let dr=$a;function Mc(e){var t=hs;hs=!0;try{for(var n;;){if(yc(),re===null)return n;re.flush()}}finally{hs=t}}function Pc(){try{hc()}catch(e){Qt(e,no)}}let Ht=null;function Uo(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(kt|pt))===0&&Qs(r)&&(Ht=new Set,jr(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&ol(r),(Ht==null?void 0:Ht.size)>0)){an.clear();for(const s of Ht){if((s.f&(kt|pt))!==0)continue;const i=[s];let o=s.parent;for(;o!==null;)Ht.has(o)&&(Ht.delete(o),i.push(o)),o=o.parent;for(let l=i.length-1;l>=0;l--){const c=i[l];(c.f&(kt|pt))===0&&jr(c)}}Ht.clear()}}Ht=null}}function Ui(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const s of e.reactions){const i=s.f;(i&Xe)!==0?Ui(s,t,n,r):(i&(Er|Vt))!==0&&(i&Je)===0&&Co(s,t,r)&&(Fe(s,Je),Eo(s))}}function Co(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const s of e.deps){if(pa.call(t,s))return!0;if((s.f&Xe)!==0&&Co(s,t,n))return n.set(s,!0),!0}return n.set(e,!1),!1}function Eo(e){re.schedule(e)}function Wi(e,t){if(!((e.f&Ot)!==0&&(e.f&Ye)!==0)){(e.f&Je)!==0?t.d.push(e):(e.f&Wt)!==0&&t.m.push(e),Fe(e,Ye);for(var n=e.first;n!==null;)Wi(n,t),n=n.next}}function qi(e){Fe(e,Ye);for(var t=e.first;t!==null;)qi(t),t=t.next}let xa=new Set;const an=new Map;let Gi=!1;function wn(e,t){var n={f:0,v:e,reactions:null,equals:Mi,rv:0,wv:0};return n}function A(e,t){const n=wn(e);return cl(n),n}function Ac(e,t=!1,n=!0){var s;const r=wn(e);return t||(r.equals=Pi),Kr&&n&&Re!==null&&Re.l!==null&&((s=Re.l).s??(s.s=[])).push(r),r}function f(e,t,n=!1){me!==null&&(!Ut||(me.f&ga)!==0)&&Ur()&&(me.f&(Xe|Vt|Er|ga))!==0&&(ln===null||!ln.has(e))&&mc();let r=n?Me(t):t;return Hr(e,r,ca)}function Hr(e,t,n=null){if(!e.equals(t)){kn?an.set(e,t):an.has(e)||an.set(e,e.v);var r=dr.ensure();if(r.capture(e,t),(e.f&Xe)!==0){const s=e;(e.f&Je)!==0&&So(s),Qe===null&&ko(s)}e.wv=dl(),Yi(e,Je,n),Ur()&&_e!==null&&(_e.f&Ye)!==0&&(_e.f&(Ot|yn))===0&&(Mt===null?Vc([e]):Mt.push(e)),!r.is_fork&&xa.size>0&&!Gi&&Ic()}return t}function Ic(){Gi=!1;for(const e of xa){(e.f&Ye)!==0&&Fe(e,Wt);let t;try{t=Qs(e)}catch{t=!0}t&&jr(e)}xa.clear()}function Wo(e,t=1){var n=a(e),r=t===1?n++:n--;return f(e,n),r}function ps(e){f(e,e.v+1)}function Yi(e,t,n){var r=e.reactions;if(r!==null)for(var s=Ur(),i=r.length,o=0;o<i;o++){var l=r[o],c=l.f;if(!(!s&&l===_e)){var d=(c&Je)===0;if(d&&Fe(l,t),(c&ga)!==0)xa.add(l);else if((c&Xe)!==0){var h=l;Qe==null||Qe.delete(h),(c&ur)===0&&(c&It&&(_e===null||(_e.f&ma)===0)&&(l.f|=ur),Yi(h,Wt,n))}else if(d){var y=l;(c&Vt)!==0&&Ht!==null&&Ht.add(y),n!==null?n.push(y):Eo(y)}}}}function Me(e){if(typeof e!="object"||e===null||sn in e||Si in e)return e;const t=mo(e);if(t!==Hl&&t!==jl)return e;var n=new Map,r=Ea(e),s=A(0),i=cr,o=l=>{if(cr===i)return l();var c=me,d=cr;Rt(null),Yo(i);var h=l();return Rt(c),Yo(d),h};return r&&n.set("length",A(e.length)),new Proxy(e,{defineProperty(l,c,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&_c();var h=n.get(c);return h===void 0?o(()=>{var y=A(d.value);return n.set(c,y),y}):f(h,d.value,!0),!0},deleteProperty(l,c){var d=n.get(c);if(d===void 0){if(c in l){const h=o(()=>A(Ue));n.set(c,h),ps(s)}}else f(d,Ue),ps(s);return!0},get(l,c,d){var x;if(c===sn)return e;var h=n.get(c),y=c in l;if(h===void 0&&(!y||(x=An(l,c))!=null&&x.writable)&&(h=o(()=>{var w=Me(y?l[c]:Ue),k=A(w);return k}),n.set(c,h)),h!==void 0){var _=a(h);return _===Ue?void 0:_}return Reflect.get(l,c,d)},getOwnPropertyDescriptor(l,c){var d=Reflect.getOwnPropertyDescriptor(l,c);if(d&&"value"in d){var h=n.get(c);h&&(d.value=a(h))}else if(d===void 0){var y=n.get(c),_=y==null?void 0:y.v;if(y!==void 0&&_!==Ue)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return d},has(l,c){var _;if(c===sn)return!0;var d=n.get(c),h=d!==void 0&&d.v!==Ue||Reflect.has(l,c);if(d!==void 0||_e!==null&&(!h||(_=An(l,c))!=null&&_.writable)){d===void 0&&(d=o(()=>{var x=h?Me(l[c]):Ue,w=A(x);return w}),n.set(c,d));var y=a(d);if(y===Ue)return!1}return h},set(l,c,d,h){var M;var y=n.get(c),_=c in l;if(r&&c==="length")for(var x=d;x<y.v;x+=1){var w=n.get(x+"");w!==void 0?f(w,Ue):x in l&&(w=o(()=>A(Ue)),n.set(x+"",w))}if(y===void 0)(!_||(M=An(l,c))!=null&&M.writable)&&(y=o(()=>A(void 0)),f(y,Me(d)),n.set(c,y));else{_=y.v!==Ue;var k=o(()=>Me(d));f(y,k)}var E=Reflect.getOwnPropertyDescriptor(l,c);if(E!=null&&E.set&&E.set.call(h,d),!_){if(r&&typeof c=="string"){var T=n.get("length"),P=Number(c);Number.isInteger(P)&&P>=T.v&&f(T,P+1)}ps(s)}return!0},ownKeys(l){a(s);var c=Reflect.ownKeys(l).filter(y=>{var _=n.get(y);return _===void 0||_.v!==Ue});for(var[d,h]of n)h.v!==Ue&&!(d in l)&&c.push(d);return c},setPrototypeOf(){gc()}})}function qo(e){try{if(e!==null&&typeof e=="object"&&sn in e)return e[sn]}catch{}return e}function Ji(e,t){return Object.is(qo(e),qo(t))}var gs,Xi,Zi,Qi;function Oc(){if(gs===void 0){gs=window,Xi=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Zi=An(t,"firstChild").get,Qi=An(t,"nextSibling").get,Bo(e)&&(e[eo]=void 0,e[ia]=null,e[to]=void 0,e.__e=void 0),Bo(n)&&(n[os]=void 0)}}function on(e=""){return document.createTextNode(e)}function Kt(e){return Zi.call(e)}function Zs(e){return Qi.call(e)}function b(e,t){return Kt(e)}function V(e,t=!1){{var n=Kt(e);return n instanceof Comment&&n.data===""?Zs(n):n}}function ee(e,t=!1){return Kt(e)}function v(e,t=1,n=!1){let r=e;for(;t--;)r=Zs(r);return r}function Rc(e){e.textContent=""}function el(){return!1}function Na(e,t,n){return t==null||t===Ni?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Lc(e){var t=_e;if(t===null)return me.f|=In,e;if((t.f&Br)===0&&(t.f&Lr)===0)throw e;Qt(e,t)}function Qt(e,t){if(!(t!==null&&(t.f&kt)!==0)){for(;t!==null;){if((t.f&Qa)!==0&&(t.f&(kt|_a))===0){if((t.f&Br)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function tl(e){_e===null&&(me===null&&vc(),fc()),kn&&dc()}function Dc(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function qt(e,t){var n=_e;n!==null&&(n.f&pt)!==0&&(e|=pt);var r={ctx:Re,deps:null,nodes:null,f:e|Je|It,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};re==null||re.register_created_effect(r);var s=r;if((e&Lr)!==0)Cr!==null?Cr.push(r):dr.ensure().schedule(r);else if(t!==null){try{jr(r)}catch(o){throw et(r),o}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&Vr)===0&&(s=s.first,(e&Vt)!==0&&(e&On)!==0&&s!==null&&(s.f|=On))}if(s!==null&&(s.parent=n,n!==null&&Dc(s,n),me!==null&&(me.f&Xe)!==0&&(e&yn)===0)){var i=me;(i.effects??(i.effects=[])).push(s)}return r}function To(){return me!==null&&!Ut}function za(e){const t=qt(Js,null);return Fe(t,Ye),t.teardown=e,t}function ot(e){tl();var t=_e.f,n=!me&&(t&Ot)!==0&&Re!==null&&!Re.i;if(n){var r=Re;(r.e??(r.e=[])).push(e)}else return nl(e)}function nl(e){return qt(Lr|$i,e)}function Fc(e){return tl(),qt(Js|$i,e)}function Hc(e){dr.ensure();const t=qt(yn|Vr,e);return(n={})=>new Promise(r=>{n.outro?lr(t,()=>{et(t),r(void 0)}):(et(t),r(void 0))})}function Ma(e){return qt(Lr,e)}function jc(e){return qt(Er|Vr,e)}function No(e,t=0){return qt(Js|t,e)}function Y(e,t=[],n=[],r=[]){Fi(r,t,n,s=>{qt(Js,()=>{e(...s.map(a))})})}function qr(e,t=0){var n=qt(Vt|t,e);return n}function rl(e,t=0){var n=qt(bo|t,e);return n}function yt(e){return qt(Ot|Vr,e)}function sl(e){var t=e.teardown;if(t!==null){const n=kn,r=me;Go(!0),Rt(null);try{t.call(null)}catch(s){Qt(s,e.parent)}finally{Go(n),Rt(r)}}}function zo(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const s=n.ac;s!==null&&Wr(()=>{s.abort(Xs)});var r=n.next;(n.f&yn)!==0?n.parent=null:et(n,t),n=r}}function Bc(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Ot)===0&&et(t),t=n}}function et(e,t=!0){var n=!1;(t||(e.f&Ul)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(al(e.nodes.start,e.nodes.end),n=!0),e.f|=_a,zo(e,t&&!n),ms(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const i of r)i.stop();sl(e),e.f^=_a,e.f|=kt;var s=e.parent;s!==null&&s.first!==null&&ol(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function al(e,t){for(;e!==null;){var n=e===t?null:Zs(e);e.remove(),e=n}}function ol(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function lr(e,t,n=!0){var r=[];e.f|=xo,il(e,r,!0);var s=()=>{n&&et(e),t&&t()},i=r.length;if(i>0){var o=()=>--i||s();for(var l of r)l.out(o)}else s()}function il(e,t,n){if((e.f&pt)===0){e.f^=pt;var r=e.nodes&&e.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&t.push(l);for(var s=e.first;s!==null;){var i=s.next;if((s.f&yn)===0){var o=(s.f&On)!==0||(s.f&Ot)!==0&&(e.f&Vt)!==0;il(s,t,o?n:!1)}s=i}}}function ya(e){e.f&=~xo,ll(e,!0)}function ll(e,t){if((e.f&xo)===0&&(e.f&pt)!==0){e.f^=pt,(e.f&Ye)===0&&(Fe(e,Je),dr.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,s=(n.f&On)!==0||(n.f&Ot)!==0;ll(n,s?t:!1),n=r}var i=e.nodes&&e.nodes.t;if(i!==null)for(const o of i)(o.is_global||t)&&o.in()}}function Mo(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var s=n===r?null:Zs(n);t.append(n),n=s}}let ua=!1,kn=!1;function Go(e){kn=e}let me=null,Ut=!1;function Rt(e){me=e}let _e=null;function Lt(e){_e=e}let ln=null;function cl(e){me!==null&&(ln??(ln=new Set)).add(e)}let wt=null,Tt=0,Mt=null;function Vc(e){Mt=e}let ul=1,tr=0,cr=tr;function Yo(e){cr=e}function dl(){return++ul}function Qs(e){var t=e.f;if((t&Je)!==0)return!0;if(t&Xe&&(e.f&=~ur),(t&Wt)!==0){for(var n=e.deps,r=n.length,s=0;s<r;s++){var i=n[s];if(Qs(i)&&ji(i),i.wv>e.wv)return!0}(t&It)!==0&&Qe===null&&Fe(e,Ye)}return!1}function fl(e,t,n=!0){var r=e.reactions;if(r!==null&&!(ln!==null&&ln.has(e)))for(var s=0;s<r.length;s++){var i=r[s];(i.f&Xe)!==0?fl(i,t,!1):t===i&&(n?Fe(i,Je):(i.f&Ye)!==0&&Fe(i,Wt),Eo(i))}}function vl(e){var t=wt,n=Tt,r=Mt,s=me,i=ln,o=Re,l=Ut,c=cr,d=e.f;wt=null,Tt=0,Mt=null,me=(d&(Ot|yn))===0?e:null,ln=null,Dr(e.ctx),Ut=!1,cr=++tr,e.ac!==null&&(Wr(()=>{e.ac.abort(Xs)}),e.ac=null);try{e.f|=ma;var h=e.fn,y=h();e.f|=Br;var _=Jo(e);if(Ur()&&Mt!==null&&!Ut&&_!==null&&(e.f&(Xe|Wt|Je))===0)for(var x=0;x<Mt.length;x++)fl(Mt[x],e);if(s!==null&&s!==e){if(tr++,s.deps!==null)for(let w=0;w<n;w+=1)s.deps[w].rv=tr;if(t!==null)for(const w of t)w.rv=tr;Mt!==null&&(r===null?r=Mt:r.push(...Mt))}return(e.f&In)!==0&&(e.f^=In),y}catch(w){return Jo(e),Lc(w)}finally{e.f^=ma,wt=t,Tt=n,Mt=r,me=s,ln=i,Dr(o),Ut=l,cr=c}}function Jo(e){var s;var t=e.deps,n=re==null?void 0:re.is_fork;if(wt!==null){var r;if(n||ms(e,Tt),t!==null&&Tt>0)for(t.length=Tt+wt.length,r=0;r<wt.length;r++)t[Tt+r]=wt[r];else e.deps=t=wt;if(To()&&(e.f&It)!==0)for(r=Tt;r<t.length;r++)((s=t[r]).reactions??(s.reactions=[])).push(e)}else!n&&t!==null&&Tt<t.length&&(ms(e,Tt),t.length=Tt);return t}function Kc(e,t){let n=t.reactions;if(n!==null){var r=Fl.call(n,e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(t.f&Xe)!==0&&(wt===null||!pa.call(wt,t))){var i=t;(i.f&It)!==0&&(i.f^=It,i.f&=~ur),i.v!==Ue&&ko(i),i.ac!==null&&Wr(()=>{i.ac.abort(Xs),i.ac=null,Fe(i,Je)}),Tc(i),ms(i,0)}}function ms(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Kc(e,n[r])}function jr(e){var t=e.f;if((t&kt)===0){Fe(e,Ye);var n=_e,r=ua;_e=e,ua=(t&(Ot|yn))===0;try{(t&(Vt|bo))!==0?Bc(e):zo(e),sl(e);var s=vl(e);e.teardown=typeof s=="function"?s:null,e.wv=ul;var i}finally{ua=r,_e=n}}}async function Uc(){await Promise.resolve(),Mc()}function a(e){var t=e.f,n=(t&Xe)!==0;if(me!==null&&!Ut){var r=_e!==null&&(_e.f&kt)!==0;if(!r&&(ln===null||!ln.has(e))){var s=me.deps;if((me.f&ma)!==0)e.rv<tr&&(e.rv=tr,wt===null&&s!==null&&s[Tt]===e?Tt++:wt===null?wt=[e]:wt.push(e));else{me.deps??(me.deps=[]),pa.call(me.deps,e)||me.deps.push(e);var i=e.reactions;i===null?e.reactions=[me]:pa.call(i,me)||i.push(me)}}}if(kn&&an.has(e))return an.get(e);if(n){var o=e;if(kn){var l=o.v;return((o.f&Ye)===0&&o.reactions!==null||pl(o))&&(l=So(o)),an.set(o,l),l}var c=(o.f&It)===0&&!Ut&&me!==null&&(ua||(me.f&It)!==0),d=(o.f&Br)===0;Qs(o)&&(c&&(o.f|=It),ji(o)),c&&!d&&(Bi(o),hl(o))}if(Qe!=null&&Qe.has(e))return Qe.get(e);if((e.f&In)!==0)throw e.v;return e.v}function hl(e){if(e.f|=It,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Xe)!==0&&(t.f&It)===0&&(Bi(t),hl(t))}function pl(e){if(e.v===Ue)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(an.has(t)||(t.f&Xe)!==0&&pl(t))return!0;return!1}function $n(e){var t=Ut;try{return Ut=!0,e()}finally{Ut=t}}function Zn(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(sn in e)ao(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&sn in n&&ao(n)}}}function ao(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{ao(e[r],t)}catch{}const n=mo(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=wi(n);for(let s in r){const i=r[s].get;if(i)try{i.call(e)}catch{}}}}}function Wc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const qc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Gc(e){return qc.includes(e)}const Yc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Jc(e){return e=e.toLowerCase(),Yc[e]??e}const Xc=["touchstart","touchmove"];function Zc(e){return Xc.includes(e)}const nr=Symbol("events"),_l=new Set,oo=new Set;function gl(e,t,n,r={}){function s(i){if(r.capture||io.call(t,i),!i.cancelBubble)return Wr(()=>n==null?void 0:n.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?tn(()=>{t.addEventListener(e,s,r)}):t.addEventListener(e,s,r),s}function Rn(e,t,n,r,s){var i={capture:r,passive:s},o=gl(e,t,n,i);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&za(()=>{t.removeEventListener(e,o,i)})}function R(e,t,n){(t[nr]??(t[nr]={}))[e]=n}function Dt(e){for(var t=0;t<e.length;t++)_l.add(e[t]);for(var n of oo)n(e)}let Ba=null,Va=!1;function io(e){var k,E;var t=this,n=t.ownerDocument,r=e.type,s=((k=e.composedPath)==null?void 0:k.call(e))||[],i=s[0]||e.target;Ba=e,Va||(Va=!0,setTimeout(()=>{Va=!1,Ba=null}));var o=0,l=Ba===e&&e[nr];if(l){var c=s.indexOf(l);if(c!==-1&&(t===document||t===window)){e[nr]=t;return}var d=s.indexOf(t);if(d===-1)return;c<=d&&(o=c)}if(i=s[o]||e.target,i!==t){yi(e,"currentTarget",{configurable:!0,get(){return i||n}});var h=me,y=_e;Rt(null),Lt(null);try{for(var _,x=[];i!==null&&i!==t;){try{var w=(E=i[nr])==null?void 0:E[r];w!=null&&(!i.disabled||e.target===i)&&w.call(i,e)}catch(T){_?x.push(T):_=T}if(e.cancelBubble)break;o++,i=o<s.length?s[o]:null}if(_){for(let T of x)queueMicrotask(()=>{throw T});throw _}}finally{e[nr]=t,delete e.currentTarget,Rt(h),Lt(y)}}}var bi;const Ka=((bi=globalThis==null?void 0:globalThis.window)==null?void 0:bi.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Qc(e){return(Ka==null?void 0:Ka.createHTML(e))??e}function ml(e){var t=Na("template");return t.innerHTML=Qc(e.replaceAll("<!>","<!---->")),t.content}function Ln(e,t){var n=_e;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function z(e,t){var n=(t&tc)!==0,r=(t&nc)!==0,s,i=!e.startsWith("<!>");return()=>{s===void 0&&(s=ml(i?e:"<!>"+e),n||(s=Kt(s)));var o=r||Xi?document.importNode(s,!0):s.cloneNode(!0);if(n){var l=Kt(o),c=o.lastChild;Ln(l,c)}else Ln(o,o);return o}}function eu(e,t,n="svg"){var r=!e.startsWith("<!>"),s=`<${n}>${r?e:"<!>"+e}</${n}>`,i;return()=>{if(!i){var o=ml(s),l=Kt(o);i=Kt(l)}var c=i.cloneNode(!0);return Ln(c,c),c}}function bl(e,t){return eu(e,t,"svg")}function Xo(e=""){{var t=on(e+"");return Ln(t,t),t}}function te(){var e=document.createDocumentFragment(),t=document.createComment(""),n=on();return e.append(t,n),Ln(t,n),e}function m(e,t){e!==null&&e.before(t)}function tu(e){let t=0,n=wn(0),r;return()=>{To()&&(a(n),No(()=>(t===0&&(r=$n(()=>e(()=>ps(n)))),t+=1,()=>{tn(()=>{t-=1,t===0&&(r==null||r(),r=void 0,ps(n))})})))}}var nu=On|Vr;function ru(e,t,n,r){new su(e,t,n,r)}var Pt,go,At,ar,ft,St,vt,Ct,Xt,or,Pn,Rr,ws,ks,xn,Sa,Ae,au,ou,lo,iu,co,us,da,uo,fo;class su{constructor(t,n,r,s){W(this,Ae);dt(this,"parent");dt(this,"is_pending",!1);dt(this,"transform_error");W(this,Pt);W(this,go,null);W(this,At);W(this,ar);W(this,ft);W(this,St,null);W(this,vt,null);W(this,Ct,null);W(this,Xt,null);W(this,or,0);W(this,Pn,0);W(this,Rr,!1);W(this,ws,new Set);W(this,ks,new Set);W(this,xn,null);W(this,Sa,tu(()=>(ce(this,xn,wn(u(this,or))),()=>{ce(this,xn,null)})));var i;ce(this,Pt,t),ce(this,At,n),ce(this,ar,o=>{var l=_e;l.b=this,l.f|=Qa,r(o)}),this.parent=_e.b,this.transform_error=s??((i=this.parent)==null?void 0:i.transform_error)??(o=>o),ce(this,ft,qr(()=>{xe(this,Ae,co).call(this)},nu))}defer_effect(t){Ri(t,u(this,ws),u(this,ks))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,At).pending}update_pending_count(t,n){xe(this,Ae,uo).call(this,t,n),ce(this,or,u(this,or)+t),!(!u(this,xn)||u(this,Rr))&&(ce(this,Rr,!0),tn(()=>{ce(this,Rr,!1),u(this,xn)&&Hr(u(this,xn),u(this,or))}))}get_effect_pending(){return u(this,Sa).call(this),a(u(this,xn))}error(t){if(!u(this,At).onerror&&!u(this,At).failed)throw t;re!=null&&re.is_fork?(u(this,St)&&re.skip_effect(u(this,St)),u(this,vt)&&re.skip_effect(u(this,vt)),u(this,Ct)&&re.skip_effect(u(this,Ct)),re.oncommit(()=>{xe(this,Ae,fo).call(this,t)})):xe(this,Ae,fo).call(this,t)}}Pt=new WeakMap,go=new WeakMap,At=new WeakMap,ar=new WeakMap,ft=new WeakMap,St=new WeakMap,vt=new WeakMap,Ct=new WeakMap,Xt=new WeakMap,or=new WeakMap,Pn=new WeakMap,Rr=new WeakMap,ws=new WeakMap,ks=new WeakMap,xn=new WeakMap,Sa=new WeakMap,Ae=new WeakSet,au=function(){try{ce(this,St,yt(()=>u(this,ar).call(this,u(this,Pt))))}catch(t){this.error(t)}},ou=function(t){const n=u(this,At).failed,{reset:r,invoke_onerror:s}=xe(this,Ae,lo).call(this,t);tn(s),n&&ce(this,Ct,yt(()=>{n(u(this,Pt),()=>t,()=>r)}))},lo=function(t){var n=!1,r=!1;const s=()=>{if(n){ic();return}n=!0,r&&bc(),u(this,Ct)!==null&&lr(u(this,Ct),()=>{ce(this,Ct,null)}),xe(this,Ae,da).call(this,()=>{xe(this,Ae,co).call(this)})};return{reset:s,invoke_onerror:()=>{var o,l;try{r=!0,(l=(o=u(this,At)).onerror)==null||l.call(o,t,s),r=!1}catch(c){Qt(c,u(this,ft)&&u(this,ft).parent)}}}},iu=function(){const t=u(this,At).pending;t&&(this.is_pending=!0,ce(this,vt,yt(()=>t(u(this,Pt)))),tn(()=>{var n=ce(this,Xt,document.createDocumentFragment()),r=on(),s=!1;if(n.append(r),ce(this,St,xe(this,Ae,da).call(this,()=>{try{return yt(()=>u(this,ar).call(this,r))}catch(i){try{this.error(i),s=!0}catch(o){Qt(o,u(this,ft).parent)}return null}})),u(this,St)===null){ce(this,Xt,null),s&&xe(this,Ae,us).call(this,re);return}u(this,Pn)===0&&(u(this,Pt).before(n),ce(this,Xt,null),lr(u(this,vt),()=>{ce(this,vt,null)}),xe(this,Ae,us).call(this,re))}))},co=function(){try{if(this.is_pending=this.has_pending_snippet(),ce(this,Pn,0),ce(this,or,0),ce(this,St,yt(()=>{u(this,ar).call(this,u(this,Pt))})),u(this,Pn)>0){var t=ce(this,Xt,document.createDocumentFragment());Mo(u(this,St),t);const n=u(this,At).pending;ce(this,vt,yt(()=>n(u(this,Pt))))}else xe(this,Ae,us).call(this,re)}catch(n){this.error(n)}},us=function(t){this.is_pending=!1,t.transfer_effects(u(this,ws),u(this,ks))},da=function(t){var n=_e,r=me,s=Re;Lt(u(this,ft)),Rt(u(this,ft)),Dr(u(this,ft).ctx);try{return dr.ensure(),t()}finally{Lt(n),Rt(r),Dr(s)}},uo=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&xe(r=this.parent,Ae,uo).call(r,t,n);return}ce(this,Pn,u(this,Pn)+t),u(this,Pn)===0&&(xe(this,Ae,us).call(this,n),u(this,vt)&&lr(u(this,vt),()=>{ce(this,vt,null)}),u(this,Xt)&&(u(this,Pt).before(u(this,Xt)),ce(this,Xt,null)))},fo=function(t){u(this,St)&&(et(u(this,St)),ce(this,St,null)),u(this,vt)&&(et(u(this,vt)),ce(this,vt,null)),u(this,Ct)&&(et(u(this,Ct)),ce(this,Ct,null));let n=u(this,At).failed;const r=s=>{const{reset:i,invoke_onerror:o}=xe(this,Ae,lo).call(this,s);o(),n&&ce(this,Ct,xe(this,Ae,da).call(this,()=>{try{return yt(()=>{var l=_e;l.b=this,l.f|=Qa,n(u(this,Pt),()=>s,()=>i)})}catch(l){return Qt(l,u(this,ft).parent),null}}))};tn(()=>{var s;try{s=this.transform_error(t)}catch(i){Qt(i,u(this,ft)&&u(this,ft).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,i=>Qt(i,u(this,ft)&&u(this,ft).parent)):r(s)})};function U(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[os]??(e[os]=e.nodeValue))&&(e[os]=n,e.nodeValue=`${n}`)}function lu(e,t){return cu(e,t)}const aa=new Map;function cu(e,{target:t,anchor:n,props:r={},events:s,context:i,intro:o=!0,transformError:l}){Oc();var c=void 0,d=Hc(()=>{var h=n??t.appendChild(on());ru(h,{pending:()=>{}},x=>{_t({});var w=Re;i&&(w.c=i),s&&(r.$$events=s),c=e(x,r)||wo(),gt()},l);var y=new Set,_=x=>{for(var w=0;w<x.length;w++){var k=x[w];if(!y.has(k)){y.add(k);var E=Zc(k);for(const M of[t,document]){var T=aa.get(M);T===void 0&&(T=new Map,aa.set(M,T));var P=T.get(k);P===void 0?(M.addEventListener(k,io,{passive:E}),T.set(k,1)):T.set(k,P+1)}}}};return _(Ta(_l)),oo.add(_),()=>{var E;for(var x of y)for(const T of[t,document]){var w=aa.get(T),k=w.get(x);--k==0?(T.removeEventListener(x,io),w.delete(x),w.size===0&&aa.delete(T)):w.set(x,k)}oo.delete(_),h!==n&&((E=h.parentNode)==null||E.removeChild(h))}});return uu.set(c,d),c}let uu=new WeakMap;var Bt,Zt,Et,ir,$s,Ss,Ca;class Pa{constructor(t,n=!0){dt(this,"anchor");W(this,Bt,new Map);W(this,Zt,new Map);W(this,Et,new Map);W(this,ir,new Set);W(this,$s,!0);W(this,Ss,t=>{if(u(this,Bt).has(t)){var n=u(this,Bt).get(t),r=u(this,Zt).get(n);if(r)ya(r),u(this,ir).delete(n);else{var s=u(this,Et).get(n);s&&(ya(s.effect),u(this,Zt).set(n,s.effect),u(this,Et).delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[i,o]of u(this,Bt)){if(u(this,Bt).delete(i),i===t)break;const l=u(this,Et).get(o);l&&(et(l.effect),u(this,Et).delete(o))}for(const[i,o]of u(this,Zt)){if(i===n||u(this,ir).has(i))continue;const l=()=>{if(Array.from(u(this,Bt).values()).includes(i)){var d=document.createDocumentFragment();Mo(o,d),d.append(on()),u(this,Et).set(i,{effect:o,fragment:d})}else et(o);u(this,ir).delete(i),u(this,Zt).delete(i)};u(this,$s)||!r?(u(this,ir).add(i),lr(o,l,!1)):l()}}});W(this,Ca,t=>{u(this,Bt).delete(t);const n=Array.from(u(this,Bt).values());for(const[r,s]of u(this,Et))n.includes(r)||(et(s.effect),u(this,Et).delete(r))});this.anchor=t,ce(this,$s,n)}ensure(t,n){var r=re,s=el();if(n&&!u(this,Zt).has(t)&&!u(this,Et).has(t))if(s){var i=document.createDocumentFragment(),o=on();i.append(o),u(this,Et).set(t,{effect:yt(()=>n(o)),fragment:i})}else u(this,Zt).set(t,yt(()=>n(this.anchor)));if(u(this,Bt).set(r,t),s){for(const[l,c]of u(this,Zt))l===t?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of u(this,Et))l===t?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(u(this,Ss)),r.ondiscard(u(this,Ca))}else u(this,Ss).call(this,r)}}Bt=new WeakMap,Zt=new WeakMap,Et=new WeakMap,ir=new WeakMap,$s=new WeakMap,Ss=new WeakMap,Ca=new WeakMap;function F(e,t,n=!1){var r=new Pa(e),s=n?On:0;function i(o,l){r.ensure(o,l)}qr(()=>{var o=!1;t((l,c=0)=>{o=!0,i(c,l)}),o||i(-1,null)},s)}const du=Symbol("NaN");function fu(e,t,n){var r=new Pa(e),s=!Ur();qr(()=>{var i=t();i!==i&&(i=du),s&&i!==null&&typeof i=="object"&&(i={}),r.ensure(i,n)})}function xl(e,t){return t}function vu(e,t,n){for(var r=[],s=t.length,i,o=t.length,l=0;l<s;l++){let y=t[l];lr(y,()=>{if(i){if(i.pending.delete(y),i.done.add(y),i.pending.size===0){var _=e.outrogroups;vo(e,Ta(i.done)),_.delete(i),_.size===0&&(e.outrogroups=null)}}else o-=1},!1)}if(o===0){var c=r.length===0&&n!==null&&e.pending.size===0;if(c){var d=n,h=d.parentNode;Rc(h),h.append(d),e.items.clear()}vo(e,t,!c)}else i={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(i)}function vo(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const o of e.pending.values())for(const l of o)r.add(e.items.get(l).e)}for(var s=0;s<t.length;s++){var i=t[s];if(r!=null&&r.has(i)){i.f|=en;const o=document.createDocumentFragment();Mo(i,o)}else et(t[s],n)}}var Zo;function Ve(e,t,n,r,s,i=null){var o=e,l=new Map,c=(t&Ei)!==0;if(c){var d=e;o=d.appendChild(on())}var h=null,y=$o(()=>{var M=n();return Ea(M)?M:M==null?[]:Ta(M)}),_,x=new Map,w=!0;function k(M){(P.effect.f&kt)===0&&(P.pending.delete(M),P.fallback=h,hu(P,_,o,t,r),h!==null&&(_.length===0?(h.f&en)===0?ya(h):(h.f^=en,ds(h,null,o)):lr(h,()=>{h=null})))}function E(M){P.pending.delete(M)}var T=qr(()=>{_=a(y);for(var M=_.length,q=new Set,N=re,S=el(),I=0;I<M;I+=1){var G=_[I],ne=r(G,I),L=w?null:l.get(ne);L?(L.v&&Hr(L.v,G),L.i&&Hr(L.i,I),S&&N.unskip_effect(L.e)):(L=pu(l,w?o:Zo??(Zo=on()),G,ne,I,s,t,n),w||(L.e.f|=en),l.set(ne,L)),q.add(ne)}if(M===0&&i&&!h&&(w?h=yt(()=>i(o)):(h=yt(()=>i(Zo??(Zo=on()))),h.f|=en)),M>q.size&&uc(),!w)if(x.set(N,q),S){for(const[B,X]of l)q.has(B)||N.skip_effect(X.e);N.oncommit(k),N.ondiscard(E)}else k(N);a(y)}),P={effect:T,items:l,pending:x,outrogroups:null,fallback:h};w=!1}function rs(e){for(;e!==null&&(e.f&Ot)===0;)e=e.next;return e}function hu(e,t,n,r,s){var L,B,X,fe,we,Ke,Ie,it,ve;var i=(r&Yl)!==0,o=t.length,l=e.items,c=rs(e.effect.first),d,h=null,y,_=[],x=[],w,k,E,T;if(i)for(T=0;T<o;T+=1)w=t[T],k=s(w,T),E=l.get(k).e,(E.f&en)===0&&((B=(L=E.nodes)==null?void 0:L.a)==null||B.measure(),(y??(y=new Set)).add(E));for(T=0;T<o;T+=1){if(w=t[T],k=s(w,T),E=l.get(k).e,e.outrogroups!==null)for(const he of e.outrogroups)he.pending.delete(E),he.done.delete(E);if((E.f&pt)!==0&&(ya(E),i&&((fe=(X=E.nodes)==null?void 0:X.a)==null||fe.unfix(),(y??(y=new Set)).delete(E))),(E.f&en)!==0)if(E.f^=en,E===c)ds(E,null,n);else{var P=h?h.next:c;E===e.effect.last&&(e.effect.last=E.prev),E.prev&&(E.prev.next=E.next),E.next&&(E.next.prev=E.prev),Nn(e,h,E),Nn(e,E,P),ds(E,P,n),h=E,_=[],x=[],c=rs(h.next);continue}if(E!==c){if(d!==void 0&&d.has(E)){if(_.length<x.length){var M=x[0],q;h=M.prev;var N=_[0],S=_[_.length-1];for(q=0;q<_.length;q+=1)ds(_[q],M,n);for(q=0;q<x.length;q+=1)d.delete(x[q]);Nn(e,N.prev,S.next),Nn(e,h,N),Nn(e,S,M),c=M,h=S,T-=1,_=[],x=[]}else d.delete(E),ds(E,c,n),Nn(e,E.prev,E.next),Nn(e,E,h===null?e.effect.first:h.next),Nn(e,h,E),h=E;continue}for(_=[],x=[];c!==null&&c!==E;)(d??(d=new Set)).add(c),x.push(c),c=rs(c.next);if(c===null)continue}(E.f&en)===0&&_.push(E),h=E,c=rs(E.next)}if(e.outrogroups!==null){for(const he of e.outrogroups)he.pending.size===0&&(vo(e,Ta(he.done)),(we=e.outrogroups)==null||we.delete(he));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||d!==void 0){var I=[];if(d!==void 0)for(E of d)(E.f&pt)===0&&I.push(E);for(;c!==null;)(c.f&pt)===0&&c!==e.fallback&&I.push(c),c=rs(c.next);var G=I.length;if(G>0){var ne=(r&Ei)!==0&&o===0?n:null;if(i){for(T=0;T<G;T+=1)(Ie=(Ke=I[T].nodes)==null?void 0:Ke.a)==null||Ie.measure();for(T=0;T<G;T+=1)(ve=(it=I[T].nodes)==null?void 0:it.a)==null||ve.fix()}vu(e,I,ne)}}i&&tn(()=>{var he,D;if(y!==void 0)for(E of y)(D=(he=E.nodes)==null?void 0:he.a)==null||D.apply()})}function pu(e,t,n,r,s,i,o,l){var c=(o&ql)!==0?(o&Jl)===0?Ac(n,!1,!1):wn(n):null,d=(o&Gl)!==0?wn(s):null;return{v:c,i:d,e:yt(()=>(i(t,c??n,d??s,l),()=>{e.delete(r)}))}}function ds(e,t,n){if(e.nodes)for(var r=e.nodes.start,s=e.nodes.end,i=t&&(t.f&en)===0?t.nodes.start:n;r!==null;){var o=Zs(r);if(i.before(r),r===s)return;r=o}}function Nn(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function Qo(e,t,n=!1,r=!1,s=!1,i=!1){var o=e,l="";if(n)var c=e;Y(()=>{var d=_e;if(l!==(l=t()??"")){if(n){d.nodes=null,c.innerHTML=l,l!==""&&Ln(Kt(c),c.lastChild);return}if(d.nodes!==null&&(al(d.nodes.start,d.nodes.end),d.nodes=null),l!==""){var h=r?zi:s?rc:void 0,y=Na(r?"svg":s?"math":"template",h);y.innerHTML=l;var _=r||s?y:y.content;if(Ln(Kt(_),_.lastChild),r||s)for(;Kt(_);)o.before(Kt(_));else o.before(_)}}})}function ie(e,t,n,r,s){var l,c;if((l=t.$$host)!=null&&l.$$shadowRoot){const d=Na("slot");m(e,d);return}var i=(c=t.$$slots)==null?void 0:c[n],o=!1;i===!0&&(i=t.children,o=!0),i===void 0||i(e,o?()=>r:r)}function ei(e,t,n){var r=new Pa(e);qr(()=>{var s=t()??null;r.ensure(s,s&&(i=>n(i,s)))},On)}function _u(e,t,n,r,s,i){var o=null,l=e,c=new Pa(l,!1);qr(()=>{const d=t()||null;var h=zi;if(d===null){c.ensure(null,null);return}return c.ensure(d,y=>{if(d){if(o=Na(d,h),Ln(o,o),r){var _=null,x=o.appendChild(on());r(o,x),_==null||_.remove()}_e.nodes.end=o,y.before(o)}}),()=>{}},On),za(()=>{})}function gu(e,t){var n=void 0,r;rl(()=>{n!==(n=t())&&(r&&(et(r),r=null),n&&(r=yt(()=>{Ma(()=>n(e))})))})}function yl(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=yl(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function mu(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=yl(e))&&(r&&(r+=" "),r+=t);return r}function wl(e){return typeof e=="object"?mu(e):e??""}const ti=[...` 	
\r\f \v\uFEFF`];function bu(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var s of Object.keys(n))if(n[s])r=r?r+" "+s:s;else if(r.length)for(var i=s.length,o=0;(o=r.indexOf(s,o))>=0;){var l=o+i;(o===0||ti.includes(r[o-1]))&&(l===r.length||ti.includes(r[l]))?r=(o===0?"":r.substring(0,o))+r.substring(l+1):o=l}}return r===""?null:r}function ni(e,t=!1){var n=t?" !important;":";",r="";for(var s of Object.keys(e)){var i=e[s];i!=null&&i!==""&&(r+=" "+s+": "+i+n)}return r}function Ua(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function xu(e,t){if(t){var n="",r,s;if(Array.isArray(t)?(r=t[0],s=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var i=!1,o=0,l=!1,c=[];r&&c.push(...Object.keys(r).map(Ua)),s&&c.push(...Object.keys(s).map(Ua));var d=0,h=-1;const k=e.length;for(var y=0;y<k;y++){var _=e[y];if(l?_==="/"&&e[y-1]==="*"&&(l=!1):i?i===_&&(i=!1):_==="/"&&e[y+1]==="*"?l=!0:_==='"'||_==="'"?i=_:_==="("?o++:_===")"&&o--,!l&&i===!1&&o===0){if(_===":"&&h===-1)h=y;else if(_===";"||y===k-1){if(h!==-1){var x=Ua(e.substring(d,h).trim());if(!c.includes(x)){_!==";"&&y++;var w=e.substring(d,y).trim();n+=" "+w+";"}}d=y+1,h=-1}}}}return r&&(n+=ni(r)),s&&(n+=ni(s,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function ht(e,t,n,r,s,i){var o=e[eo];if(o!==n||o===void 0){var l=bu(n,r,i);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e[eo]=n}else if(i&&s!==i)for(var c in i){var d=!!i[c];(s==null||d!==!!s[c])&&e.classList.toggle(c,d)}return i}function Wa(e,t={},n,r){for(var s in n){var i=n[s];t[s]!==i&&(n[s]==null?e.style.removeProperty(s):e.style.setProperty(s,i,r))}}function Tr(e,t,n,r){var s=e[to];if(s!==t){var i=xu(t,r);i==null?e.removeAttribute("style"):e.style.cssText=i,e[to]=t}else r&&(Array.isArray(r)?(Wa(e,n==null?void 0:n[0],r[0]),Wa(e,n==null?void 0:n[1],r[1],"important")):Wa(e,n,r));return r}function kl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function ri(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,$l(e,!n||"__value"in e))}function $l(e,t){var n=e.__defaultValue,r=e.multiple,s=r?n??[]:null;if(!(r&&!Ea(s))){var i=e.selectedIndex,o=t&&r?new Set(e.selectedOptions):null;for(var l of e.options){var c=Nr(l);kl(l,r?s.includes(c):Ji(c,n))}if(t)if(o!==null)for(l of e.options){var d=o.has(l);l.selected!==d&&(l.selected=d)}else e.selectedIndex!==i&&(e.selectedIndex=i)}}function bs(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Ea(t))return oc();for(var r of e.options)r.selected=t.includes(Nr(r));return}for(r of e.options){var s=Nr(r);if(Ji(s,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function _s(e){var t=new MutationObserver(n=>{n.every(yu)||("__defaultValue"in e&&$l(e,!1),"__value"in e&&bs(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),za(()=>{t.disconnect()})}function ho(e,t,n=t){var r=new WeakSet,s=!0;Di(e,"change",i=>{var o=i?"[selected]":":checked",l;if(e.multiple)l=[].map.call(e.querySelectorAll(o),Nr);else{var c=e.querySelector(o)??e.querySelector("option:not([disabled])");l=c&&Nr(c)}n(l),e.__value=l,re!==null&&r.add(re)}),Ma(()=>{var i=t();if(e===document.activeElement){var o=re;if(r.has(o))return}if(bs(e,i,s),s&&i===void 0){var l=e.querySelector(":checked");l!==null&&(i=Nr(l),n(i))}e.__value=i,s=!1})}function Nr(e){return"__value"in e?e.__value:e.value}function yu(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const ss=Symbol("class"),as=Symbol("style"),Sl=Symbol("is custom element"),Cl=Symbol("is html"),wu=yo?"input":"INPUT",ku=yo?"option":"OPTION",El=yo?"select":"SELECT";function ge(e,t,n,r){var s=Tl(e);s[t]!==(s[t]=n)&&(t==="loading"&&(e[Wl]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Nl(e).has(t)?e[t]=n:e.setAttribute(t,n))}function $u(e,t,n,r,s=!1,i=!1){var o=Tl(e),l=o[Sl],c=!o[Cl],d=t||{},h=e.nodeName===ku,y=e.nodeName===El;for(var _ in t)!(_ in n)&&_[0]+_[1]!=="$$"&&(n[_]=null);n.class?n.class=wl(n.class):n[ss]&&(n.class=null),n[as]&&(n.style??(n.style=null));var x=Nl(e);if(e.nodeName===wu&&"type"in n&&("value"in n||"__value"in n)){var w=n.type;(w!==d.type||w===void 0&&e.hasAttribute("type"))&&(d.type=w,ge(e,"type",w))}for(const N in n){let S=n[N];if(h&&N==="value"&&S==null){e.value=e.__value="",d[N]=S;continue}if(N==="class"){var k=e.namespaceURI==="http://www.w3.org/1999/xhtml";ht(e,k,S,r,t==null?void 0:t[ss],n[ss]),d[N]=S,d[ss]=n[ss];continue}if(N==="style"){Tr(e,S,t==null?void 0:t[as],n[as]),d[N]=S,d[as]=n[as];continue}var E=d[N];if(!(S===E&&!(S===void 0&&e.hasAttribute(N)))){d[N]=S;var T=N[0]+N[1];if(T!=="$$")if(T==="on"){const I={},G="$$"+N;let ne=N.slice(2);var P=Gc(ne);if(Wc(ne)&&(ne=ne.slice(0,-7),I.capture=!0),!P&&E){if(S!=null)continue;e.removeEventListener(ne,d[G],I),d[G]=null}if(P)R(ne,e,S),Dt([ne]);else if(S!=null){let L=function(B){d[N].call(this,B)};d[G]=gl(ne,e,L,I)}}else if(N==="style")ge(e,N,S);else if(N==="autofocus")Li(e,!!S);else if(!l&&(N==="__value"||N==="value"&&S!=null))e.value=e.__value=S;else if(N==="selected"&&h)kl(e,S);else{var M=N;c||(M=Jc(M));var q=M==="defaultValue"||M==="defaultChecked";if(y&&M==="defaultValue")continue;if(S==null&&!l&&!q)if(o[N]=null,M==="value"||M==="checked"){let I=e;const G=t===void 0;if(M==="value"){let ne=I.defaultValue;I.removeAttribute(M),I.defaultValue=ne,I.value=I.__value=G?ne:null}else{let ne=I.defaultChecked;I.removeAttribute(M),I.defaultChecked=ne,I.checked=G?ne:!1}}else e.removeAttribute(N);else q||(l||typeof S!="string")&&x.has(M)?(e[M]=S,M in o&&(o[M]=Ue)):typeof S!="function"&&ge(e,M,S)}}}return d}function si(e,t,n=[],r=[],s=[],i,o=!1,l=!1){Fi(s,n,r,c=>{var d=void 0,h={},y=e.nodeName===El,_=!1;if(rl(()=>{var w=t(...c.map(a)),k=$u(e,d,w,i,o,l);if(_&&y){var E=e;"defaultValue"in w&&ri(E,w.defaultValue),"value"in w&&bs(E,w.value)}for(let P of Object.getOwnPropertySymbols(h))w[P]||et(h[P]);for(let P of Object.getOwnPropertySymbols(w)){var T=w[P];P.description===sc&&(!d||T!==d[P])&&(h[P]&&et(h[P]),h[P]=yt(()=>gu(e,()=>T))),k[P]=T}d=k}),y){var x=e;Ma(()=>{var w=d;"defaultValue"in w&&ri(x,w.defaultValue),bs(x,w.value,!0),_s(x)})}_=!0})}function Tl(e){return e[ia]??(e[ia]={[Sl]:e.nodeName.includes("-"),[Cl]:e.namespaceURI===Ni})}var ai=new Map;function Nl(e){var t=e.getAttribute("is")||e.nodeName,n=ai.get(t);if(n)return n;ai.set(t,n=new Set);for(var r,s=e,i=Element.prototype;i!==s;){r=wi(s);for(var o in r)r[o].set&&o!=="innerHTML"&&o!=="textContent"&&o!=="innerText"&&n.add(o);s=mo(s)}return n}function Ze(e,t,n=t){var r=new WeakSet;Di(e,"input",async s=>{var i=s?e.defaultValue:e.value;if(i=qa(e)?Ga(i):i,n(i),re!==null&&r.add(re),await Uc(),i!==(i=t())){var o=e.selectionStart,l=e.selectionEnd,c=e.value.length;if(e.value=i??"",l!==null){var d=e.value.length;o===l&&l===c&&d>c?(e.selectionStart=d,e.selectionEnd=d):(e.selectionStart=o,e.selectionEnd=Math.min(l,d))}}}),$n(t)==null&&e.value&&(n(qa(e)?Ga(e.value):e.value),re!==null&&r.add(re)),No(()=>{var s=t();if(e===document.activeElement){var i=re;if(r.has(i))return}qa(e)&&s===Ga(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function qa(e){var t=e.type;return t==="number"||t==="range"}function Ga(e){return e===""?null:+e}function Ya(e,t){return e===t||(e==null?void 0:e[sn])===t}function xs(e=wo(),t,n,r){var s=Re.r,i=_e;return Ma(()=>{var o,l;return No(()=>{o=l,l=[],$n(()=>{Ya(n(...l),e)||(t(e,...l),o&&Ya(n(...o),e)&&t(null,...o))})}),()=>{let c=i;for(;c!==s&&c.parent!==null&&c.parent.f&_a;)c=c.parent;const d=()=>{l&&Ya(n(...l),e)&&t(null,...l)},h=c.teardown;c.teardown=()=>{d(),h==null||h()}}}),e}function zl(e=!1){const t=Re,n=t.l.u;if(!n)return;let r=()=>Zn(t.s);if(e){let s=0,i={};const o=Fr(()=>{let l=!1;const c=t.s;for(const d in c)c[d]!==i[d]&&(i[d]=c[d],l=!0);return l&&s++,s});r=()=>a(o)}n.b.length&&Fc(()=>{oi(t,r),Za(n.b)}),ot(()=>{const s=$n(()=>n.m.map(Vl));return()=>{for(const i of s)typeof i=="function"&&i()}}),n.a.length&&ot(()=>{oi(t,r),Za(n.a)})}function oi(e,t){if(e.l.s)for(const n of e.l.s)a(n);t()}function Su(e){var t=wn(0);return function(){return arguments.length===1?(f(t,a(t)+1),arguments[0]):(a(t),e())}}const Cu={get(e,t){if(!e.exclude.includes(t))return a(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=_e;try{Lt(e.parent_effect),e.special[t]=Be({get[t](){return e.props[t]}},t,Ti)}finally{Lt(r)}}return e.special[t](n),Wo(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),Wo(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ae(e,t){return new Proxy({props:e,exclude:t,special:{},version:wn(0),parent_effect:_e},Cu)}const Eu={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(ns(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let s=e.props[r];ns(s)&&(s=s());const i=An(s,t);if(i&&i.set)return i.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(ns(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const s=An(r,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===sn||t===Ci)return!1;for(let n of e.props)if(ns(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(ns(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function ue(...e){return new Proxy({props:e},Eu)}function Be(e,t,n,r){var q;var s=!Kr||(n&Zl)!==0,i=(n&Ql)!==0,o=(n&ec)!==0,l=r,c=!0,d=void 0,h=()=>o&&s?(d??(d=Fr(r)),a(d)):(c&&(c=!1,l=o?$n(r):r),l);let y;if(i){var _=sn in e||Ci in e;y=((q=An(e,t))==null?void 0:q.set)??(_&&t in e?N=>e[t]=N:void 0)}var x,w=!1;i?[x,w]=kc(()=>e[t]):x=e[t],x===void 0&&r!==void 0&&(x=h(),y&&(s&&pc(),y(x)));var k;if(s?k=()=>{var N=e[t];return N===void 0?h():(c=!0,N)}:k=()=>{var N=e[t];return N!==void 0&&(l=void 0),N===void 0?l:N},s&&(n&Ti)===0)return k;if(y){var E=e.$$legacy;return(function(N,S){return arguments.length>0?((!s||!S||E||w)&&y(S?k():N),N):k()})}var T=!1,P=((n&Xl)!==0?Fr:$o)(()=>(T=!1,k()));i&&a(P);var M=_e;return(function(N,S){if(arguments.length>0){const I=S?a(P):s&&i?Me(N):N;return f(P,I),T=!0,l!==void 0&&(l=I),N}return kn&&T||(M.f&kt)!==0?P.v:a(P)})}function Gr(e){Re===null&&Ai(),Kr&&Re.l!==null?Tu(Re).m.push(e):ot(()=>{const t=$n(e);if(typeof t=="function")return t})}function Po(e){Re===null&&Ai(),Gr(()=>()=>$n(e))}function Tu(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Nu="5";var xi;typeof window<"u"&&((xi=window.__svelte??(window.__svelte={})).v??(xi.v=new Set)).add(Nu);const Qn=()=>window.__IDE_BOOTSTRAP__||{};function zu(e){const{rootPath:t="",session:n=""}=Qn();return`${t}/api/sessions/${encodeURIComponent(n)}/ide${e}`}async function je(e,t={}){const n=await fetch(zu(e),t),r=await n.json().catch(()=>({}));if(!n.ok){const s=new Error(r.error||"Request failed");throw Object.assign(s,r),s}return r}const Ge=(e,t)=>`/ssh-connections/${encodeURIComponent(e)}${t}`,ke={chat:async(e,t=80)=>{const{rootPath:n=""}=Qn(),r=`${n}/api/sessions/${encodeURIComponent(e)}/ide/chat?limit=${t}`,s=await fetch(r),i=await s.json().catch(()=>({}));if(!s.ok)throw new Error(i.error||"Could not load chat");return i},browse:async(e="")=>{const{rootPath:t=""}=Qn(),n=`${t}/api/ide/browse?path=${encodeURIComponent(e)}`,r=await fetch(n),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not browse folders");return s},sessionAgent:async e=>{const{rootPath:t=""}=Qn(),n=await fetch(`${t}/api/sessions/${encodeURIComponent(e)}/agent`),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Could not read agent settings");return r},setSessionAgent:async(e,t)=>{const{rootPath:n=""}=Qn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/agent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({agent:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not switch agent");return s},setSessionModel:async(e,t)=>{const{rootPath:n=""}=Qn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/model`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change model");return s},setSessionEffort:async(e,t)=>{const{rootPath:n=""}=Qn(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/effort`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({effort:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change effort");return s},browseOn:(e,t="")=>je(Ge(e,`/browse?path=${encodeURIComponent(t)}`)),setWorkspaceRoot:(e,t,n)=>je(Ge(e,"/workspace-root"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({workspace_root:t,label:n})}),agentContext:e=>je(Ge(e,"/agent-context")),hostKey:e=>je(Ge(e,"/host-key")),trustHost:e=>je(Ge(e,"/host-key"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accept:!0})}),listConnections:()=>je("/ssh-connections"),createConnection:e=>je("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),deleteConnection:e=>je(Ge(e,""),{method:"DELETE"}),connect:(e,t)=>je(Ge(e,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t||""})}),status:e=>je(Ge(e,"/status?reconnect=1")),listFiles:(e,t)=>je(Ge(e,`/files?path=${encodeURIComponent(t)}`)),searchFiles:(e,t,n)=>je(Ge(e,`/files/search?path=${encodeURIComponent(t)}&query=${encodeURIComponent(n)}`)),readFile:(e,t)=>je(Ge(e,`/file?path=${encodeURIComponent(t)}`)),saveFile:(e,t,n)=>je(Ge(e,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t,content:n})}),fs:(e,t)=>je(Ge(e,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),git:(e,t)=>je(Ge(e,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),focusTerminal:e=>je(Ge(e,"/focus-terminal"),{method:"POST"}),listTerminals:e=>je(Ge(e,"/terminals")),closeTerminal:(e,t)=>je(Ge(e,`/terminals/${t}`),{method:"DELETE"}),getWorkspace:e=>je(Ge(e,"/workspace")),saveWorkspace:(e,t)=>je(Ge(e,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})};var Cs,Es,Ts,Ns,zs,Ms,Ps,As,Is,Os,Rs,Ls,Ds,Fs,Hs,js,Bs,Vs,Ks,Us,Ws,qs,Gs,Ys;class Mu{constructor(){W(this,Cs,A(Me([])));W(this,Es,A(""));W(this,Ts,A("idle"));W(this,Ns,A("Ready"));W(this,zs,A("No file open"));W(this,Ms,A("."));W(this,Ps,A(Me([])));W(this,As,A(Me({})));W(this,Is,A(Me({})));W(this,Os,A(""));W(this,Rs,A(Me([])));W(this,Ls,A(""));W(this,Ds,A(""));W(this,Fs,A(""));W(this,Hs,A(Me([])));W(this,js,A(""));W(this,Bs,A(!1));W(this,Vs,A(!1));W(this,Ks,A(0));W(this,Us,A(0));W(this,Ws,A(!1));W(this,qs,A(""));W(this,Gs,A(Me([])));W(this,Ys,A(!1));dt(this,"restoredKey","");dt(this,"persistTimer",null)}get connections(){return a(u(this,Cs))}set connections(t){f(u(this,Cs),t,!0)}get connectionId(){return a(u(this,Es))}set connectionId(t){f(u(this,Es),t,!0)}get connectionState(){return a(u(this,Ts))}set connectionState(t){f(u(this,Ts),t,!0)}get statusText(){return a(u(this,Ns))}set statusText(t){f(u(this,Ns),t,!0)}get detailText(){return a(u(this,zs))}set detailText(t){f(u(this,zs),t,!0)}get path(){return a(u(this,Ms))}set path(t){f(u(this,Ms),t,!0)}get entries(){return a(u(this,Ps))}set entries(t){f(u(this,Ps),t,!0)}get expanded(){return a(u(this,As))}set expanded(t){f(u(this,As),t,!0)}get treeChildren(){return a(u(this,Is))}set treeChildren(t){f(u(this,Is),t,!0)}get filter(){return a(u(this,Os))}set filter(t){f(u(this,Os),t,!0)}get tabs(){return a(u(this,Rs))}set tabs(t){f(u(this,Rs),t,!0)}get activeKey(){return a(u(this,Ls))}set activeKey(t){f(u(this,Ls),t,!0)}get gitOutput(){return a(u(this,Ds))}set gitOutput(t){f(u(this,Ds),t,!0)}get gitStatus(){return a(u(this,Fs))}set gitStatus(t){f(u(this,Fs),t,!0)}get gitBranches(){return a(u(this,Hs))}set gitBranches(t){f(u(this,Hs),t,!0)}get gitBranch(){return a(u(this,js))}set gitBranch(t){f(u(this,js),t,!0)}get needsHostKey(){return a(u(this,Bs))}set needsHostKey(t){f(u(this,Bs),t,!0)}get notARepo(){return a(u(this,Vs))}set notARepo(t){f(u(this,Vs),t,!0)}get gitAhead(){return a(u(this,Ks))}set gitAhead(t){f(u(this,Ks),t,!0)}get gitBehind(){return a(u(this,Us))}set gitBehind(t){f(u(this,Us),t,!0)}get gitHasUpstream(){return a(u(this,Ws))}set gitHasUpstream(t){f(u(this,Ws),t,!0)}get gitBusy(){return a(u(this,qs))}set gitBusy(t){f(u(this,qs),t,!0)}get gitCommits(){return a(u(this,Gs))}set gitCommits(t){f(u(this,Gs),t,!0)}get gitHistoryLoaded(){return a(u(this,Ys))}set gitHistoryLoaded(t){f(u(this,Ys),t,!0)}get connection(){return this.connections.find(t=>t.id===this.connectionId)||null}get activeTab(){return this.tabs.find(t=>t.key===this.activeKey)||null}get visibleEntries(){const t=this.filter.trim().toLowerCase();return t?this.entries.filter(n=>n.name.toLowerCase().includes(t)):this.entries}get dirtyCount(){return this.tabs.filter(t=>t.dirty).length}get gitDirtyCount(){return this.gitStatus.split(`
`).filter(t=>t.trim()&&!t.startsWith("##")).length}resetWorkspaceView(){this.tabs=[],this.activeKey="",this.restoredKey="",this.path=".",this.entries=[],this.expanded={},this.treeChildren={},this.filter="",this.gitOutput="",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.needsHostKey=!1,this.notARepo=!1,this.gitAhead=0,this.gitBehind=0,this.gitHasUpstream=!1,this.gitCommits=[],this.gitHistoryLoaded=!1}setStatus(t,n){this.statusText=t,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const t=await ke.listConnections();this.connections=t.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(t){this.setStatus(t.message||"Could not load connections")}}async refreshStatus(){var t,n,r;if(this.connectionId)try{const s=await ke.status(this.connectionId);s.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((t=this.connection)==null?void 0:t.label)||"SSH workspace"}`,`SSH terminal: ${s.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(s){this.connectionState="error",this.setStatus(s.message||"Could not check SSH connection")}}async connect(t){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await ke.connect(this.connectionId,t);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect"),this.needsHostKey=!!r.needs_host_key}}}async refreshFiles(t){if(!this.connectionId)return;const n=t||this.path||".";try{const r=await ke.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async toggleDirectory(t){if(this.expanded[t]){const n={...this.expanded};delete n[t],this.expanded=n;return}if(this.expanded={...this.expanded,[t]:!0},!this.treeChildren[t])try{const n=await ke.listFiles(this.connectionId,t);this.treeChildren={...this.treeChildren,[t]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}openDiffTab(t,n){const r=`${this.connectionId}|diff:${t}`,s=this.tabs.find(o=>o.key===r);if(s)return s.content=n,s.saved=n,this.activeKey=r,s;const i={key:r,path:`${t} (diff)`,content:n,saved:n,dirty:!1,readOnly:!0,language:"plaintext"};return this.tabs=[...this.tabs,i],this.activeKey=r,i}async openFile(t){if(!this.connectionId)return null;const n=`${this.connectionId}|${t}`,r=this.tabs.find(s=>s.key===n);if(r)return this.activeKey=n,r;try{const s=await ke.readFile(this.connectionId,t),i={key:`${this.connectionId}|${s.path}`,path:s.path,content:s.content||"",saved:s.content||"",dirty:!1};return this.tabs=[...this.tabs,i],this.activeKey=i.key,this.setStatus("Opened",i.path),this.remember(),i}catch(s){return this.setStatus(s.message||"Could not open remote file"),null}}updateContent(t,n){this.tabs=this.tabs.map(r=>r.key===t?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(t){var r;const n=this.tabs.find(s=>s.key===t);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(s=>s.key!==t),this.activeKey===t&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const t=this.activeTab;if(t)try{await ke.saveFile(this.connectionId,t.path,t.content),this.tabs=this.tabs.map(n=>n.key===t.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${t.path}`,t.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const t=`${this.connectionId}`;if(!t)return;let n=null;try{n=await ke.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===t)return;this.restoredKey=t;const r=(n==null?void 0:n.buffers)||{};for(const i of((n==null?void 0:n.tabs)||[]).slice(0,12)){const o=await this.openFile(i);o&&Object.prototype.hasOwnProperty.call(r,i)&&this.updateContent(o.key,r[i])}const s=this.tabs.find(i=>i.path===(n==null?void 0:n.active_path));s&&(this.activeKey=s.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const t={};for(const r of this.tabs)r.dirty&&(t[r.path]=r.content);try{await ke.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:t})}catch{}}async runGit(t,n={}){try{const r=await ke.git(this.connectionId,{action:t,path:this.path||".",...n});return r.not_a_repo?(this.gitOutput=r.error||"This folder is not a Git repository.",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.gitCommits=[],this.gitHistoryLoaded=!1,this.notARepo=!0,null):(this.notARepo=!1,this.gitAhead=r.ahead||0,this.gitBehind=r.behind||0,this.gitHasUpstream=!!r.has_upstream,t==="log"?(this.gitCommits=r.commits||[],this.gitHistoryLoaded=!0):t!=="show"&&(this.gitOutput=r.output||r.status||""),this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",["commit","switch","create_branch","pull","push","fetch"].includes(t)&&(this.gitHistoryLoaded=!1),r)}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}Cs=new WeakMap,Es=new WeakMap,Ts=new WeakMap,Ns=new WeakMap,zs=new WeakMap,Ms=new WeakMap,Ps=new WeakMap,As=new WeakMap,Is=new WeakMap,Os=new WeakMap,Rs=new WeakMap,Ls=new WeakMap,Ds=new WeakMap,Fs=new WeakMap,Hs=new WeakMap,js=new WeakMap,Bs=new WeakMap,Vs=new WeakMap,Ks=new WeakMap,Us=new WeakMap,Ws=new WeakMap,qs=new WeakMap,Gs=new WeakMap,Ys=new WeakMap;const g=new Mu;xc();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */const ii=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var Iu=bl("<svg><!><!></svg>");function de(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]),r=ae(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);_t(t,!1);let s=Be(t,"name",8,void 0),i=Be(t,"color",8,"currentColor"),o=Be(t,"size",8,24),l=Be(t,"strokeWidth",8,2),c=Be(t,"absoluteStrokeWidth",8,!1),d=Be(t,"iconNode",24,()=>[]);zl();var h=Iu();si(h,(x,w,k)=>({...Pu,...x,...r,width:o(),height:o(),stroke:i(),"stroke-width":w,class:k}),[()=>Au(r)?void 0:{"aria-hidden":"true"},()=>(Zn(c()),Zn(l()),Zn(o()),$n(()=>c()?Number(l())*24/Number(o()):l())),()=>(Zn(ii),Zn(s()),Zn(n),$n(()=>ii("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var y=b(h);Ve(y,1,d,xl,(x,w)=>{var k=at(()=>Kl(a(w),2));let E=()=>a(k)[0],T=()=>a(k)[1];var P=te(),M=V(P);_u(M,E,!0,(q,N)=>{si(q,()=>({...T()}))}),m(x,P)});var _=v(y);ie(_,t,"default",{}),m(e,h),gt()}function Ou(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]];de(e,ue({name:"arrow-down-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Ru(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];de(e,ue({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function fa(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];de(e,ue({name:"check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function nn(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];de(e,ue({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function va(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];de(e,ue({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function li(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];de(e,ue({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Lu(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];de(e,ue({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Du(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];de(e,ue({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Fu(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];de(e,ue({name:"circle-user"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Hu(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];de(e,ue({name:"circle"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function ju(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];de(e,ue({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Bu(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];de(e,ue({name:"corner-left-up"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Vu(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];de(e,ue({name:"ellipsis"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Ku(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];de(e,ue({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function ci(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 16-3 3 3 3"}],["path",{d:"m9 22 3-3-3-3"}]];de(e,ue({name:"file-code-corner"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Uu(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];de(e,ue({name:"file-diff"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Wu(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];de(e,ue({name:"file-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Ao(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];de(e,ue({name:"file"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function qu(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];de(e,ue({name:"files"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Ja(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];de(e,ue({name:"folder-open"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Gu(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];de(e,ue({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Yu(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];de(e,ue({name:"folder"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function po(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];de(e,ue({name:"git-branch"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Ju(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 16h.01"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{d:"M21.946 12.013H2.054"}],["path",{d:"M6 16h.01"}]];de(e,ue({name:"hard-drive"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Xu(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];de(e,ue({name:"history"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Zu(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];de(e,ue({name:"link-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function rn(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];de(e,ue({name:"loader"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function ui(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];de(e,ue({name:"message-square"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Qu(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m14 10 7-7"}],["path",{d:"M20 10h-6V4"}],["path",{d:"m3 21 7-7"}],["path",{d:"M4 14h6v6"}]];de(e,ue({name:"minimize-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function ed(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}]];de(e,ue({name:"minus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function td(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];de(e,ue({name:"monitor-smartphone"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function nd(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];de(e,ue({name:"panel-bottom"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function rd(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];de(e,ue({name:"panel-left"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function wa(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];de(e,ue({name:"plus"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function _o(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];de(e,ue({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function Io(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];de(e,ue({name:"search"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function di(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];de(e,ue({name:"server"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function sd(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];de(e,ue({name:"shield-alert"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function oa(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];de(e,ue({name:"sparkles"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function fi(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];de(e,ue({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function ad(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];de(e,ue({name:"square"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function vi(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];de(e,ue({name:"trash-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function od(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];de(e,ue({name:"undo-2"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}function ka(e,t){const n=ae(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];de(e,ue({name:"x"},()=>n,{get iconNode(){return r},children:(s,i)=>{var o=te(),l=V(o);ie(l,t,"default",{}),m(s,o)},$$slots:{default:!0}}))}var id=z('<span class="w-[14px] shrink-0"></span>'),ld=bl('<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.5 3.5h4l1.2 1.4h7.8v7.6H1.5z" fill="#c09553"></path></svg>'),cd=z('<div role="treeitem" tabindex="0"><!> <span class="flex shrink-0 items-center"><!></span> <span class="flex-1 truncate text-vs-fg"> </span> <span class="hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Rename"><span class="text-[11px] leading-none">✎</span></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Delete"><span class="text-[11px] leading-none">🗑</span></button></span></div> <!>',1);function Ml(e,t){_t(t,!0);const n=at(()=>t.dir==="."?t.entry.name:`${t.dir}/${t.entry.name}`),r=at(()=>!!g.expanded[a(n)]),s=at(()=>g.treeChildren[a(n)]||[]),i=at(()=>{var B;return((B=g.activeTab)==null?void 0:B.path)===a(n)});async function o(){t.entry.is_dir?await g.toggleDirectory(a(n)):await g.openFile(a(n))}async function l(B){if(B.stopPropagation(),!!confirm(`Delete ${a(n)}? Folders must already be empty.`))try{await ke.fs(g.connectionId,{action:"delete",path:a(n)}),await g.refreshFiles()}catch(X){g.setStatus(X.message||"Could not delete")}}async function c(B){B.stopPropagation();const X=prompt("Rename to (relative path):",a(n));if(!(!X||X===a(n)))try{await ke.fs(g.connectionId,{action:"rename",path:a(n),new_path:X}),await g.refreshFiles()}catch(fe){g.setStatus(fe.message||"Could not rename")}}var d=cd(),h=V(d);let y;var _=b(h);{var x=B=>{var X=te(),fe=V(X);{var we=Ie=>{nn(Ie,{size:14,class:"shrink-0 text-vs-muted"})},Ke=Ie=>{va(Ie,{size:14,class:"shrink-0 text-vs-muted"})};F(fe,Ie=>{a(r)?Ie(we):Ie(Ke,-1)})}m(B,X)},w=B=>{var X=id();m(B,X)};F(_,B=>{t.entry.is_dir?B(x):B(w,-1)})}var k=v(_,2),E=b(k);{var T=B=>{var X=ld();m(B,X)},P=B=>{Zu(B,{size:14,class:"text-vs-muted"})},M=B=>{Ao(B,{size:14,class:"text-vs-blue"})};F(E,B=>{t.entry.is_dir?B(T):t.entry.is_symlink?B(P,1):B(M,-1)})}var q=v(k,2),N=ee(q,!0),S=v(q,2),I=b(S),G=v(I,2),ne=v(h,2);{var L=B=>{var X=te(),fe=V(X);Ve(fe,17,()=>a(s),we=>we.name,(we,Ke)=>{{let Ie=at(()=>t.depth+1);Ml(we,{get entry(){return a(Ke)},get dir(){return a(n)},get depth(){return a(Ie)}})}}),m(B,X)};F(ne,B=>{t.entry.is_dir&&a(r)&&B(L)})}Y(()=>{y=ht(h,1,"group flex cursor-pointer items-center gap-1 py-[2px] pr-1 text-[13px] hover:bg-vs-hover",null,y,{"bg-vs-active":a(i)}),Tr(h,`padding-left: ${8+t.depth*12}px`),ge(h,"aria-expanded",t.entry.is_dir?a(r):void 0),ge(h,"aria-selected",a(i)),ge(h,"title",a(n)),U(N,t.entry.name),ge(I,"aria-label",`Rename ${t.entry.name??""}`),ge(G,"aria-label",`Delete ${t.entry.name??""}`)}),R("click",h,o),R("keydown",h,B=>{(B.key==="Enter"||B.key===" ")&&(B.preventDefault(),o())}),R("click",I,c),R("click",G,l),m(e,d),gt()}Dt(["click","keydown"]);var ud=z('<form class="px-2 pb-1"><input class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"/></form>'),dd=z('<p class="px-4 py-2 text-xs text-vs-muted">No folder opened.</p>'),fd=z('<p class="px-4 py-2 text-xs text-vs-muted">No files here</p>'),vd=z('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase"><span class="flex-1 truncate">Explorer</span></div> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase"><!> <span class="flex-1 truncate"> </span> <span class="flex opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"><!></button></span></div> <!> <input class="mx-2 mb-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none focus:border-vs-accent" placeholder="Filter files…"/> <div class="min-h-0 flex-1 overflow-y-auto pb-2"><!></div></div>');function hd(e,t){_t(t,!0);let n=A(""),r=A("");const s=(L,B)=>L==="."?B:`${L}/${B}`;async function i(L){L.preventDefault();const B=a(r).trim();if(B)try{await ke.fs(g.connectionId,{action:a(n)==="dir"?"create_dir":"create_file",path:s(g.path,B)}),f(n,""),f(r,""),await g.refreshFiles()}catch(X){g.setStatus(X.message||"Could not create")}}const o=at(()=>{var L,B;return(((L=g.connection)==null?void 0:L.workspace_root)||"").split("/").filter(Boolean).pop()||((B=g.connection)==null?void 0:B.label)||"WORKSPACE"});var l=vd(),c=v(b(l),2),d=b(c);nn(d,{size:14,class:"shrink-0 text-vs-muted"});var h=v(d,2),y=ee(h,!0),_=v(h,2),x=b(_),w=b(x);Wu(w,{size:14});var k=v(x,2),E=b(k);Gu(E,{size:14});var T=v(k,2),P=b(T);_o(P,{size:13});var M=v(c,2);{var q=L=>{var B=ud(),X=b(B);Li(X,!0),Y(()=>ge(X,"placeholder",a(n)==="dir"?"New folder name":"New file name")),Rn("submit",B,i),R("keydown",X,fe=>{fe.key==="Escape"&&f(n,"")}),Rn("blur",X,()=>{a(r).trim()||f(n,"")}),Ze(X,()=>a(r),fe=>f(r,fe)),m(L,B)};F(M,L=>{a(n)&&L(q)})}var N=v(M,2),S=v(N,2),I=b(S);{var G=L=>{var B=dd();m(L,B)},ne=L=>{var B=te(),X=V(B);Ve(X,17,()=>g.visibleEntries,fe=>fe.name,(fe,we)=>{Ml(fe,{get entry(){return a(we)},get dir(){return g.path},depth:0})},fe=>{var we=fd();m(fe,we)}),m(L,B)};F(I,L=>{g.connectionId?L(ne,-1):L(G)})}Y(()=>{var L;ge(h,"title",(L=g.connection)==null?void 0:L.workspace_root),U(y,a(o))}),R("click",x,()=>{f(n,"file"),f(r,"")}),R("click",k,()=>{f(n,"dir"),f(r,"")}),R("click",T,()=>g.refreshFiles()),Ze(N,()=>g.filter,L=>g.filter=L),m(e,l),gt()}Dt(["click","keydown"]);var pd=z('<div class="absolute top-full right-0 z-20 mt-1 min-w-[170px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"><button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Fetch</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Pull</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Push</button> <div class="my-1 h-px bg-vs-line"></div> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Create Branch…</button></div>'),_d=z('<p class="mx-3 flex items-center gap-1.5 text-xs text-vs-muted"><!> Reading repository…</p>'),gd=z(`<p class="mx-3 text-xs leading-relaxed text-vs-muted">This folder isn't a Git repository.<br/> Open a folder containing a <code class="rounded-sm bg-vs-input px-1">.git</code> directory,
      or run <code class="rounded-sm bg-vs-input px-1">git init</code> in the terminal.</p>`),md=z('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Unstage"><!></button></span> <span> </span></div>'),bd=z('<div class="flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Staged Changes</span></button> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!>',1),xd=z('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Open changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Discard changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Stage changes"><!></button></span> <span> </span></div>'),yd=z('<p class="px-6 py-2 text-xs text-vs-muted">No changes.</p>'),wd=z('<div class="min-h-0 flex-1 overflow-y-auto"></div>'),kd=z('<span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span>'),$d=z('<span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh history" aria-label="Refresh history"><!></button></span> <!>',1),Sd=z('<span class="shrink-0 rounded-sm bg-vs-line px-1 text-[10px] text-vs-blue"> </span>'),Cd=z('<div class="group flex cursor-pointer flex-col gap-0.5 py-1 pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><div class="flex min-w-0 items-center gap-1.5"><span class="truncate text-vs-fg"> </span> <!></div> <div class="flex min-w-0 items-center gap-1.5 text-[11px] text-vs-muted"><span class="shrink-0 font-mono text-vs-yellow"> </span> <span class="truncate"> </span> <span class="ml-auto shrink-0"> </span></div></div>'),Ed=z('<p class="px-6 py-2 text-xs text-vs-muted"> </p>'),Td=z('<div class="max-h-[45%] min-h-0 flex-1 overflow-y-auto"></div>'),Nd=z('<button class="flex items-center gap-1 rounded-sm px-1 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Pull then push"><!> </button>'),zd=z('<div class="flex gap-1 border-t border-vs-line px-3 py-2"><input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="New branch name"/> <button class="rounded-sm bg-vs-status px-2 py-1 text-xs text-white">Create</button></div>'),Md=z('<pre class="max-h-[120px] shrink-0 overflow-auto border-t border-vs-line px-3 py-1.5 text-[11px] whitespace-pre-wrap text-vs-muted"> </pre>'),Pd=z('<div class="px-3 pb-2"><textarea class="w-full resize-none rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs text-vs-fg outline-none focus:border-vs-accent placeholder:text-vs-muted" rows="2"></textarea> <button class="mt-1 flex w-full items-center justify-center gap-1.5 rounded-sm bg-vs-status px-2 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"><!> Commit</button></div> <!> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Changes</span></button> <span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh" aria-label="Refresh"><!></button> <button class="rounded-sm p-0.5 hover:bg-vs-line" title="Stage all changes" aria-label="Stage all"><!></button></span> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!> <div class="group flex shrink-0 items-center gap-1 border-t border-vs-line px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <!> <span class="truncate">History</span></button> <!></div> <!> <div class="mt-auto flex items-center gap-2 border-t border-vs-line px-3 py-1.5 text-[11px]"><span class="flex min-w-0 items-center gap-1 text-vs-muted" title="Current branch"><!> <span class="truncate"> </span></span> <!></div> <!> <!>',1),Ad=z('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase"><span class="flex-1">Source Control</span> <div class="relative" data-scm-menu=""><button class="rounded-sm p-0.5 hover:bg-vs-hover" title="More actions" aria-label="More actions"><!></button> <!></div></div> <!></div>');function Id(e,t){_t(t,!0);let n=A(""),r=A(""),s=A(!1),i=A(!0),o=A(!0),l=A(!1),c=A(!1);const d=at(()=>(g.gitStatus||"").split(`
`).filter(D=>D&&!D.startsWith("##")).map(D=>{const le=D.slice(3),Ee=le.indexOf(" -> "),We=Ee===-1?le:le.slice(Ee+4);return{index:D[0]===" "?"":D[0],work:D[1]===" "?"":D[1],code:D.slice(0,2).trim()||"??",path:We.replace(/\r$/,""),from:Ee===-1?"":le.slice(0,Ee)}}).filter(D=>D.path)),h=at(()=>a(d).filter(D=>D.index&&D.index!=="?")),y=at(()=>a(d).filter(D=>D.work&&D.work!==" ")),_=D=>D.includes("?")||D.includes("A")?"text-vs-green":D.includes("D")?"text-vs-red":D.includes("R")?"text-vs-blue":"text-vs-yellow",x=D=>D.split("/").pop(),w=D=>{const le=D.split("/");return le.pop(),le.join("/")};async function k(D,le={}){g.gitBusy=D;try{return await g.runGit(D,le)}finally{g.gitBusy=""}}async function E(){if(!a(n).trim()||!a(h).length)return;await k("commit",{message:a(n).trim()})&&f(n,"")}async function T(){if(!a(r).trim())return;await k("create_branch",{branch:a(r).trim()})&&(f(r,""),f(s,!1))}async function P(D){confirm(`Discard changes in ${D.path}? This cannot be undone.`)&&await k("discard",{files:[D.path]})}async function M(D){const le=await g.runGit("diff_file",{files:[D.path]});le&&g.openDiffTab(D.path,le.output||"No changes to show.")}let q=A("");ot(()=>{const D=g.connectionId,le=g.connectionState,Ee=D?`${D}|${le}`:"";!D||le!=="connected"||a(q)!==Ee&&(f(q,Ee,!0),k("status"))});async function N(){f(l,!a(l)),a(l)&&!g.gitHistoryLoaded&&await k("log")}ot(()=>{a(l)&&!g.gitHistoryLoaded&&!g.notARepo&&!g.gitBusy&&k("log")});async function S(D){const le=await g.runGit("show",{ref:D.hash});le&&g.openDiffTab(`${D.short} ${D.subject}`,le.output||"Empty commit.")}const I=D=>(D||"").split(",").map(le=>le.trim().replace(/^HEAD -> /,"")).filter(Boolean);function G(D){D.key==="Enter"&&(D.ctrlKey||D.metaKey)&&(D.preventDefault(),E())}var ne=Ad();Rn("click",gs,D=>{var le,Ee;(Ee=(le=D.target).closest)!=null&&Ee.call(le,"[data-scm-menu]")||f(c,!1)});var L=b(ne),B=v(b(L),2),X=b(B),fe=b(X);Vu(fe,{size:14});var we=v(X,2);{var Ke=D=>{var le=pd(),Ee=b(le),We=v(Ee,2),tt=v(We,2),Ft=v(tt,4);R("click",Ee,()=>{f(c,!1),k("fetch")}),R("click",We,()=>{f(c,!1),k("pull")}),R("click",tt,()=>{f(c,!1),k("push")}),R("click",Ft,()=>{f(c,!1),f(s,!a(s))}),m(D,le)};F(we,D=>{a(c)&&D(Ke)})}var Ie=v(L,2);{var it=D=>{var le=_d(),Ee=b(le);rn(Ee,{size:12,class:"animate-spin"}),m(D,le)},ve=D=>{var le=gd();m(D,le)},he=D=>{var le=Pd(),Ee=V(le),We=b(Ee),tt=v(We,2),Ft=b(tt);{var Pe=Z=>{rn(Z,{size:12,class:"animate-spin"})},mt=Z=>{fa(Z,{size:12})};F(Ft,Z=>{g.gitBusy==="commit"?Z(Pe):Z(mt,-1)})}var cn=v(Ee,2);{var Dn=Z=>{var Oe=bd(),$e=V(Oe),oe=b($e),Ce=b(oe);{var lt=p=>{nn(p,{size:14,class:"text-vs-muted"})},qe=p=>{va(p,{size:14,class:"text-vs-muted"})};F(Ce,p=>{a(o)?p(lt):p(qe,-1)})}var bt=v(oe,2),$=ee(bt,!0),O=v($e,2);{var H=p=>{var C=te(),j=V(C);Ve(j,17,()=>a(h),K=>K.path,(K,J)=>{var se=md(),Q=b(se),pe=ee(Q,!0),Se=v(Q,2),ye=ee(Se,!0),be=v(Se,2),Te=b(be),ze=b(Te);ed(ze,{size:13});var nt=v(be,2),ct=ee(nt,!0);Y((rt,st,hn)=>{ge(se,"title",a(J).path),U(pe,rt),U(ye,st),ge(Te,"aria-label",`Unstage ${a(J).path??""}`),ht(nt,1,`shrink-0 font-mono text-[11px] ${hn??""}`),U(ct,a(J).index||a(J).code)},[()=>x(a(J).path),()=>w(a(J).path),()=>_(a(J).code)]),R("click",se,()=>M(a(J))),R("keydown",se,rt=>{rt.key==="Enter"&&M(a(J))}),R("click",Te,rt=>{rt.stopPropagation(),k("unstage",{files:[a(J).path]})}),m(K,se)}),m(p,C)};F(O,p=>{a(o)&&p(H)})}Y(()=>U($,a(h).length)),R("click",oe,()=>f(o,!a(o))),m(Z,Oe)};F(cn,Z=>{a(h).length&&Z(Dn)})}var Sn=v(cn,2),un=b(Sn),fr=b(un);{var Fn=Z=>{nn(Z,{size:14,class:"text-vs-muted"})},vr=Z=>{va(Z,{size:14,class:"text-vs-muted"})};F(fr,Z=>{a(i)?Z(Fn):Z(vr,-1)})}var Cn=v(un,2),Gt=b(Cn),dn=b(Gt);_o(dn,{size:12});var Hn=v(Gt,2),jn=b(Hn);wa(jn,{size:13});var hr=v(Cn,2),Bn=ee(hr,!0),pr=v(Sn,2);{var _r=Z=>{var Oe=wd();Ve(Oe,21,()=>a(y),$e=>$e.path,($e,oe)=>{var Ce=xd(),lt=b(Ce),qe=ee(lt,!0),bt=v(lt,2),$=ee(bt,!0),O=v(bt,2),H=b(O),p=b(H);Uu(p,{size:13});var C=v(H,2),j=b(C);od(j,{size:13});var K=v(C,2),J=b(K);wa(J,{size:13});var se=v(O,2),Q=ee(se,!0);Y((pe,Se,ye)=>{ge(Ce,"title",a(oe).path),U(qe,pe),U($,Se),ge(H,"aria-label",`Open changes to ${a(oe).path??""}`),ge(C,"aria-label",`Discard changes to ${a(oe).path??""}`),ge(K,"aria-label",`Stage ${a(oe).path??""}`),ht(se,1,`shrink-0 font-mono text-[11px] ${ye??""}`),U(Q,a(oe).work||a(oe).code)},[()=>x(a(oe).path),()=>w(a(oe).path),()=>_(a(oe).code)]),R("click",Ce,()=>M(a(oe))),R("keydown",Ce,pe=>{pe.key==="Enter"&&M(a(oe))}),R("click",H,pe=>{pe.stopPropagation(),M(a(oe))}),R("click",C,pe=>{pe.stopPropagation(),P(a(oe))}),R("click",K,pe=>{pe.stopPropagation(),k("stage",{files:[a(oe).path]})}),m($e,Ce)},$e=>{var oe=yd();m($e,oe)}),m(Z,Oe)};F(pr,Z=>{a(i)&&Z(_r)})}var gr=v(pr,2),fn=b(gr),mr=b(fn);{var br=Z=>{nn(Z,{size:14,class:"text-vs-muted"})},xr=Z=>{va(Z,{size:14,class:"text-vs-muted"})};F(mr,Z=>{a(l)?Z(br):Z(xr,-1)})}var Yr=v(mr,2);Xu(Yr,{size:12,class:"shrink-0 text-vs-muted"});var Jr=v(fn,2);{var En=Z=>{var Oe=$d(),$e=V(Oe),oe=b($e),Ce=b(oe);{var lt=O=>{rn(O,{size:12,class:"animate-spin"})},qe=O=>{_o(O,{size:12})};F(Ce,O=>{g.gitBusy==="log"?O(lt):O(qe,-1)})}var bt=v($e,2);{var $=O=>{var H=kd(),p=ee(H,!0);Y(()=>U(p,g.gitCommits.length)),m(O,H)};F(bt,O=>{g.gitCommits.length&&O($)})}R("click",oe,()=>k("log")),m(Z,Oe)};F(Jr,Z=>{a(l)&&Z(En)})}var Vn=v(gr,2);{var Xr=Z=>{var Oe=Td();Ve(Oe,21,()=>g.gitCommits,$e=>$e.hash,($e,oe)=>{var Ce=Cd(),lt=b(Ce),qe=b(lt),bt=ee(qe,!0),$=v(qe,2);Ve($,17,()=>I(a(oe).refs),xl,(se,Q)=>{var pe=Sd(),Se=ee(pe,!0);Y(()=>U(Se,a(Q))),m(se,pe)});var O=v(lt,2),H=b(O),p=ee(H,!0),C=v(H,2),j=ee(C,!0),K=v(C,2),J=ee(K,!0);Y(()=>{ge(Ce,"title",`${a(oe).short} · ${a(oe).author} · ${a(oe).date}`),U(bt,a(oe).subject),U(p,a(oe).short),U(j,a(oe).author),U(J,a(oe).relative)}),R("click",Ce,()=>S(a(oe))),R("keydown",Ce,se=>{se.key==="Enter"&&S(a(oe))}),m($e,Ce)},$e=>{var oe=Ed(),Ce=ee(oe,!0);Y(()=>U(Ce,g.gitBusy==="log"?"Loading history…":"No commits yet.")),m($e,oe)}),m(Z,Oe)};F(Vn,Z=>{a(l)&&Z(Xr)})}var Kn=v(Vn,2),yr=b(Kn),Un=b(yr);po(Un,{size:12,class:"shrink-0"});var vn=v(Un,2),Zr=ee(vn,!0),Wn=v(yr,2);{var qn=Z=>{var Oe=Nd(),$e=b(Oe);{var oe=qe=>{rn(qe,{size:11,class:"animate-spin"})},Ce=qe=>{Ou(qe,{size:11})};F($e,qe=>{g.gitBusy==="pull"||g.gitBusy==="push"?qe(oe):qe(Ce,-1)})}var lt=v($e);Y(()=>U(lt,` ${g.gitBehind??""}↓ ${g.gitAhead??""}↑`)),R("click",Oe,()=>k("pull").then(()=>k("push"))),m(Z,Oe)};F(Wn,Z=>{g.gitHasUpstream&&Z(qn)})}var Tn=v(Kn,2);{var Qr=Z=>{var Oe=zd(),$e=b(Oe),oe=v($e,2);R("keydown",$e,Ce=>{Ce.key==="Enter"&&T(),Ce.key==="Escape"&&f(s,!1)}),Ze($e,()=>a(r),Ce=>f(r,Ce)),R("click",oe,T),m(Z,Oe)};F(Tn,Z=>{a(s)&&Z(Qr)})}var wr=v(Tn,2);{var es=Z=>{var Oe=Md(),$e=ee(Oe,!0);Y(()=>U($e,g.gitOutput)),m(Z,Oe)};F(wr,Z=>{g.gitOutput&&Z(es)})}Y(Z=>{ge(We,"placeholder",`Message (Ctrl+Enter to commit on "${g.gitBranch||"branch"}")`),tt.disabled=Z,ge(tt,"title",a(h).length?"Commit staged changes":"Stage a change first"),U(Bn,a(y).length),U(Zr,g.gitBranch||"—")},[()=>!a(n).trim()||!a(h).length||g.gitBusy==="commit"]),R("keydown",We,G),Ze(We,()=>a(n),Z=>f(n,Z)),R("click",tt,E),R("click",un,()=>f(i,!a(i))),R("click",Gt,()=>k("status")),R("click",Hn,()=>k("stage",{files:["."]})),R("click",fn,N),m(D,le)};F(Ie,D=>{!a(q)||g.gitBusy==="status"&&!g.gitStatus&&!g.notARepo?D(it):g.notARepo?D(ve,1):D(he,-1)})}R("click",X,()=>f(c,!a(c))),m(e,ne),gt()}Dt(["click","keydown"]);const Od="modulepreload",Rd=function(e,t){return new URL(e,t).href},hi={},ha=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(h){return Promise.all(h.map(y=>Promise.resolve(y).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(h=>{if(h=Rd(h,r),h in hi)return;hi[h]=!0;const y=h.endsWith(".css"),_=y?'[rel="stylesheet"]':"";if(!!r)for(let k=l.length-1;k>=0;k--){const E=l[k];if(E.href===h&&(!y||E.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${h}"]${_}`))return;const w=document.createElement("link");if(w.rel=y?"stylesheet":Od,y||(w.as="script"),w.crossOrigin="",w.href=h,d&&w.setAttribute("nonce",d),document.head.appendChild(w),y)return new Promise((k,E)=>{w.addEventListener("load",k),w.addEventListener("error",()=>E(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return s.then(o=>{for(const l of o||[])l.status==="rejected"&&i(l.reason);return t().catch(i)})},fs={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},Ld={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function Dd(e){var n;const t=(e||"").split("/").pop()||"";return t.toLowerCase()==="dockerfile"?"dockerfile":t.toLowerCase()==="makefile"?"shell":Ld[(n=t.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var Fd=z('<div class="editor svelte-1h8xysy"></div>');function Hd(e,t){_t(t,!0);let n,r=null,s=null,i="",o=!1;Gr(async()=>{s=await ha(()=>import("./ide-monaco.js").then(c=>c.a),__vite__mapDeps([0,1]),import.meta.url),s.editor.defineTheme("monokai",fs),r=s.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{o||!i||g.updateContent(i,r.getValue())}),r.addCommand(s.KeyMod.CtrlCmd|s.KeyCode.KeyS,()=>g.saveActive())}),Po(()=>r==null?void 0:r.dispose()),ot(()=>{const c=g.activeTab;if(!(!r||!s)){if(!c){o=!0,r.setValue(""),i="",o=!1;return}if(c.key!==i){o=!0;const d=s.editor.createModel(c.content,c.language||Dd(c.path)),h=r.getModel();r.setModel(d),h==null||h.dispose(),r.updateOptions({readOnly:!!c.readOnly}),i=c.key,o=!1}else r.getValue()!==c.content&&(o=!0,r.setValue(c.content),o=!1)}});var l=Fd();xs(l,c=>n=c,()=>n),m(e,l),gt()}var zn=Su(()=>g),jd=z('<span class="h-2 w-2 rounded-full bg-vs-fg group-hover:hidden"></span> <!>',1),Bd=z('<div><button class="flex items-center gap-1.5 py-2 pr-1 pl-3" role="tab"><!> <span class="whitespace-nowrap"> </span></button> <button class="mr-1.5 flex h-5 w-5 items-center justify-center rounded-sm hover:bg-vs-line"><!></button></div>'),Vd=z('<div class="px-3 py-2 text-xs text-vs-muted">Open a file from the Explorer</div>'),Kd=z('<div class="flex min-h-[35px] items-stretch overflow-x-auto bg-vs-tabinactive" role="tablist"></div>');function Ud(e,t){_t(t,!1);const n=s=>s.split("/").pop();zl();var r=Kd();Ve(r,5,()=>zn().tabs,s=>s.key,(s,i)=>{var o=Bd();let l;var c=b(o),d=b(c);Ao(d,{size:14,class:"shrink-0 text-vs-blue"});var h=v(d,2),y=ee(h,!0),_=v(c,2),x=b(_);{var w=E=>{var T=jd(),P=v(V(T),2);ka(P,{size:14,class:"hidden group-hover:block"}),m(E,T)},k=E=>{ka(E,{size:14,class:"opacity-0 group-hover:opacity-100"})};F(x,E=>{a(i).dirty?E(w):E(k,-1)})}Y((E,T)=>{l=ht(o,1,"group flex items-center border-r border-vs-bg text-[13px]",null,l,{"bg-vs-tabactive":a(i).key===zn().activeKey,"text-vs-bright":a(i).key===zn().activeKey,"text-vs-muted":a(i).key!==zn().activeKey}),ge(c,"aria-selected",a(i).key===zn().activeKey),ge(c,"title",a(i).path),U(y,E),ge(_,"title",a(i).dirty?"Unsaved changes — close":"Close"),ge(_,"aria-label",`Close ${T??""}`)},[()=>n(a(i).path),()=>n(a(i).path)]),R("click",c,()=>zn(zn().activeKey=a(i).key)),R("click",_,()=>zn().closeTab(a(i).key)),m(s,o)},s=>{var i=Vd();m(s,i)}),m(e,r),gt()}Dt(["click"]);var Wd=z('<option class="svelte-1roe1v9"> </option>'),qd=z('<p class="rounded-sm border border-mk-pink/40 bg-mk-pink/10 px-2 py-1 text-xs text-mk-pink svelte-1roe1v9"> </p>'),Gd=z('<div class="flex flex-col gap-1.5 svelte-1roe1v9"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green svelte-1roe1v9"><!> </span> <div class="chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"></div></div>'),Yd=z('<div class="flex flex-col gap-1.5 border-l-2 border-mk-blue/60 pl-2.5 svelte-1roe1v9"><span class="text-[11px] font-semibold text-mk-blue svelte-1roe1v9">You</span> <div class="text-[13px] leading-relaxed whitespace-pre-wrap text-mk-fg/90 svelte-1roe1v9"> </div></div>'),Jd=z(`<div class="m-auto flex max-w-[250px] flex-col items-center gap-2.5 text-center svelte-1roe1v9"><!> <p class="text-xs leading-relaxed text-mk-comment svelte-1roe1v9">Ask about the file you have open. The prompt goes to <span class="text-mk-muted svelte-1roe1v9"> </span>,
            and the reply appears here.</p></div>`),Xd=z('<div class="flex flex-col gap-1.5 svelte-1roe1v9"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green svelte-1roe1v9"><!> </span> <div class="chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"><!><span class="chat-caret svelte-1roe1v9"></span></div></div>'),Zd=z('<div class="flex items-center gap-2 text-[11px] text-mk-comment svelte-1roe1v9"><!> <span class="svelte-1roe1v9"> <span class="chat-dots svelte-1roe1v9"></span></span></div>'),Qd=z(`<button class="mx-auto -mt-1 mb-1 flex shrink-0 items-center gap-1 rounded-full border border-mk-line
             bg-mk-input px-2.5 py-0.5 text-[11px] text-mk-comment shadow hover:text-mk-fg svelte-1roe1v9"><!> </button>`),ef=z(`<span title="Context used of the model's window"> </span> <span class="h-2 w-16 overflow-hidden rounded-full bg-mk-line svelte-1roe1v9" aria-hidden="true"><span></span></span>`,1),tf=z('<span title="Estimated cost at list prices" class="svelte-1roe1v9"> </span>'),nf=z('<span class="truncate text-mk-muted svelte-1roe1v9" title="Model for the most recent turn"> </span>'),rf=z('<!> <span class="svelte-1roe1v9"> </span> <!> <!>',1),sf=z('<span class="text-mk-muted svelte-1roe1v9">No usage reported yet</span>'),pi=z('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line svelte-1roe1v9"><span class="w-3 text-mk-green svelte-1roe1v9"><!></span> </button>'),af=z('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[150px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),of=z('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line svelte-1roe1v9"><span class="w-3 text-mk-green svelte-1roe1v9"><!></span> <span class="truncate svelte-1roe1v9"> </span></button>'),lf=z('<div class="absolute bottom-full left-0 z-20 mb-1 max-h-[260px] min-w-[190px] overflow-y-auto rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),cf=z('<div class="relative svelte-1roe1v9" data-menu=""><button class="flex max-w-[110px] items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Model"><span class="truncate svelte-1roe1v9"> </span> <!></button> <!></div>'),uf=z('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[130px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl svelte-1roe1v9"></div>'),df=z('<div class="relative svelte-1roe1v9" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Reasoning effort"> <!></button> <!></div>'),ff=z('<div class="flex h-full min-h-0 flex-col bg-mk-bg text-mk-fg svelte-1roe1v9"><div class="flex items-center gap-2 border-b border-mk-line px-3 py-1.5 svelte-1roe1v9"><!> <span class="text-[11px] font-semibold tracking-wide text-mk-muted uppercase svelte-1roe1v9">AI Agent</span> <select class="ml-auto min-w-0 max-w-[55%] truncate rounded-sm border border-mk-line bg-mk-input px-1.5 py-0.5 text-[11px] text-mk-fg outline-none focus:border-mk-green svelte-1roe1v9" title="Agent session that answers"></select></div> <div class="relative flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-3 py-3 svelte-1roe1v9"><!> <!> <!> <!></div> <!> <div class="flex shrink-0 items-center gap-2 border-t border-mk-line px-3 py-1 text-[10px] text-mk-comment svelte-1roe1v9"><!> <button class="ml-auto flex items-center gap-1 rounded-sm px-1.5 py-0.5 hover:bg-mk-line hover:text-mk-fg disabled:opacity-40 svelte-1roe1v9" title="Compact the conversation to free up context (/compact)"><!> Compact</button></div> <div class="border-t border-mk-line p-2 svelte-1roe1v9"><div class="rounded-md border border-mk-line bg-mk-input focus-within:border-mk-green svelte-1roe1v9"><textarea rows="2" class="max-h-[200px] w-full resize-none bg-transparent px-2.5 py-2 text-[13px] text-mk-fg outline-none placeholder:text-mk-comment svelte-1roe1v9" placeholder="Ask about this workspace…"></textarea> <div class="flex items-center gap-1 px-1.5 pb-1.5 text-[11px] svelte-1roe1v9"><div class="relative svelte-1roe1v9" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg svelte-1roe1v9" title="Agent"> <!></button> <!></div> <!> <!> <!> <span class="ml-auto flex items-center gap-1.5 svelte-1roe1v9"><kbd class="hidden text-[10px] text-mk-comment sm:inline svelte-1roe1v9">↵ send · ⇧↵ newline</kbd> <button class="flex h-6 w-6 items-center justify-center rounded-md bg-mk-green text-mk-bg disabled:opacity-40 svelte-1roe1v9" title="Send (Enter)" aria-label="Send"><!></button></span></div></div></div></div>');function vf(e,t){_t(t,!0);let n=Be(t,"sessions",19,()=>[]),r=Be(t,"session",3,""),s=Be(t,"rootPath",3,""),i=A(""),o=A(Me(r()||n()[0]||"")),l=A(!1),c=0,d=A(!1),h=A(""),y=A("");const _=at(()=>a(l)||a(d));let x=A(Me([])),w=A(""),k=A(null),E=A(null),T=null,P=A(Me({agent:"codex",available:[],model:"",effort:"",models:[],efforts:[]})),M=A(""),q=A("");const N=at(()=>(a(P).models.find(p=>p[0]===a(P).model)||[])[1]||a(P).model||"default");let S=A("");async function I(){if(!g.connectionId){f(S,"");return}try{f(S,(await ke.agentContext(g.connectionId)).context||"",!0)}catch{f(S,"")}}ot(()=>{g.connectionId,I()});async function G(){if(a(o))try{f(P,{agent:"codex",available:[],model:"",effort:"",models:[],efforts:[],...await ke.sessionAgent(a(o))},!0)}catch(p){f(P,{agent:a(P).agent,available:[],model:"",effort:"",models:[],efforts:[]},!0),g.setStatus(p.message||"Could not read agent settings")}}async function ne(){if(a(o))try{const p=await ke.chat(a(o)),C=p.messages||[],j=C.length!==a(x).length;f(x,C,!0),f(d,!!p.busy),f(y,p.detail||"",!0);const K=p.pending||"",J=K!==a(h);f(h,K,!0),f(w,""),(j||J)&&a(X)&&queueMicrotask(we)}catch(p){f(w,p.message||"Could not load chat",!0)}}const L=3e3,B=1e3;ot(()=>{const p=a(_)?B:L;!a(o)||c===p||(c=p,clearInterval(T),T=setInterval(ne,p))});let X=A(!0);function fe(){if(!a(k))return;const p=a(k).scrollHeight-a(k).scrollTop-a(k).clientHeight;f(X,p<80)}function we(){a(k)&&(a(k).scrollTop=a(k).scrollHeight)}function Ke(){f(X,!0),we()}ot(()=>{const p=a(o);f(x,[],!0),f(h,""),f(d,!1),f(X,!0),T&&clearInterval(T),c=0,p&&(ne(),G())}),Po(()=>{T&&clearInterval(T)});async function Ie(p){if(f(M,""),p!==a(P).agent){f(q,"agent");try{await ke.setSessionAgent(a(o),p),await G(),g.setStatus(`Switched to ${p}`)}catch(C){g.setStatus(C.message||"Could not switch agent")}finally{f(q,"")}}}async function it(p){if(f(M,""),p!==a(P).model){f(q,"model");try{await ke.setSessionModel(a(o),p),await G(),g.setStatus(`Model set to ${p}`)}catch(C){g.setStatus(C.message||"Could not change model")}finally{f(q,"")}}}async function ve(p){if(f(M,""),p!==a(P).effort){f(q,"effort");try{await ke.setSessionEffort(a(o),p),await G(),g.setStatus(`Reasoning effort set to ${p}`)}catch(C){g.setStatus(C.message||"Could not change effort")}finally{f(q,"")}}}function he(){const p=g.connection||{},C=g.activeTab,j=C?C.path:g.path||".",K=C?`
Active file contents (first 12,000 characters):
${C.content.slice(0,12e3)}`:"";return`${a(S)||(p.kind==="local"?`[IDE workspace]
Local folder: ${p.workspace_root||"."}
`:`[IDE workspace]
SSH target: ${p.username||"?"}@${p.host||"?"}
`)}
Currently open: ${j}${K}

${a(i).trim()}`}async function D(){const p=a(i).trim();if(!p||!a(o)||a(l))return;const C=he();f(l,!0);try{const j=await fetch(`${s()}/api/sessions/${encodeURIComponent(a(o))}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:C})}),K=await j.json().catch(()=>({}));if(!j.ok)throw new Error(K.error||"Could not send");f(i,""),a(E)&&(a(E).style.height="auto"),f(x,[...a(x),{role:"user",text:p,ts:Date.now()/1e3,_local:!0}],!0),queueMicrotask(we),setTimeout(ne,1200)}catch(j){g.setStatus(j.message||"Could not send prompt")}finally{f(l,!1)}}function le(p){p.key==="Enter"&&!p.shiftKey&&(p.preventDefault(),D())}function Ee(p){const C=p.currentTarget;C.style.height="auto",C.style.height=`${Math.min(C.scrollHeight,200)}px`}const We=p=>p.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function tt(p){const C=[];return We(p).replace(/```(\w*)\n?([\s\S]*?)```/g,(J,se,Q)=>(C.push(`<pre class="chat-code"><code>${Q.replace(/\n$/,"")}</code></pre>`),`\0BLOCK${C.length-1}\0`)).replace(/`([^`\n]+)`/g,'<code class="chat-inline">$1</code>').replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>").split(`
`).map(J=>{const se=J.match(/^\s*[-*]\s+(.*)$/);return se?`<span class="chat-li">${se[1]}</span>`:J}).join(`
`).replace(/\u0000BLOCK(\d+)\u0000/g,(J,se)=>C[Number(se)])}function Ft(p){const C=p.full||p.text||"",j=`

`;if(C.startsWith("[IDE workspace")||C.startsWith("[Remote IDE context]")||C.startsWith("[Remote SSH IDE context]")){const K=C.lastIndexOf(j);if(K!==-1)return C.slice(K+j.length)}return C}let Pe=A(null),mt=A(!1),cn=null;async function Dn(){if(a(o))try{const C=await(await fetch(`${s()}/api/sessions/${encodeURIComponent(a(o))}/stats`)).json().catch(()=>({}));f(Pe,C&&C.available?C:null,!0)}catch{f(Pe,null)}}ot(()=>(a(o),Dn(),clearInterval(cn),cn=setInterval(Dn,2e4),()=>clearInterval(cn)));async function Sn(){if(!(!a(o)||a(mt))){f(mt,!0);try{const p=await fetch(`${s()}/api/sessions/${encodeURIComponent(a(o))}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:"/compact"})}),C=await p.json().catch(()=>({}));if(!p.ok)throw new Error(C.error||"Could not compact");setTimeout(Dn,4e3)}catch(p){g.setStatus(p.message||"Could not compact context")}finally{f(mt,!1)}}}const un=p=>{const C=Number(p)||0;return C>=1e6?`${(C/1e6).toFixed(1)}M`:C>=1e3?`${(C/1e3).toFixed(1)}k`:String(C)},fr=p=>p>=90?"text-vs-red":p>=70?"text-vs-yellow":"text-vs-muted";var Fn=ff();Rn("click",gs,p=>{var C,j;(j=(C=p.target).closest)!=null&&j.call(C,"[data-menu]")||f(M,"")});var vr=b(Fn),Cn=b(vr);oa(Cn,{size:13,class:"shrink-0 text-mk-green"});var Gt=v(Cn,4);Ve(Gt,20,n,p=>p,(p,C)=>{var j=Wd(),K=ee(j,!0),J={};Y(()=>{U(K,C),J!==(J=C)&&(j.value=(j.__value=J)??"")}),m(p,j)}),_s(Gt);var dn=v(vr,2),Hn=b(dn);{var jn=p=>{var C=qd(),j=ee(C,!0);Y(()=>U(j,a(w))),m(p,C)};F(Hn,p=>{a(w)&&p(jn)})}var hr=v(Hn,2);Ve(hr,19,()=>a(x),(p,C)=>p.ts+":"+C,(p,C)=>{var j=te(),K=V(j);{var J=Q=>{var pe=Gd(),Se=b(pe),ye=b(Se);oa(ye,{size:11});var be=v(ye),Te=v(Se,2);Qo(Te,()=>tt(Ft(a(C))),!0),Y(()=>U(be,` ${a(P).agent==="claude"?"Claude":"Codex"}`)),m(Q,pe)},se=Q=>{var pe=Yd(),Se=v(b(pe),2),ye=ee(Se,!0);Y(be=>U(ye,be),[()=>Ft(a(C))]),m(Q,pe)};F(K,Q=>{a(C).role==="assistant"?Q(J):Q(se,-1)})}m(p,j)},p=>{var C=te(),j=V(C);{var K=J=>{var se=Jd(),Q=b(se);oa(Q,{size:26,strokeWidth:1.3,class:"text-mk-line"});var pe=v(Q,2),Se=v(b(pe)),ye=ee(Se,!0);Y(()=>U(ye,a(o)||"the selected session")),m(J,se)};F(j,J=>{a(w)||J(K)})}m(p,C)});var Bn=v(hr,2);{var pr=p=>{var C=Xd(),j=b(C),K=b(j);oa(K,{size:11});var J=v(K),se=v(j,2),Q=b(se);Qo(Q,()=>tt(a(h))),Y(()=>U(J,` ${a(P).agent==="claude"?"Claude":"Codex"}`)),m(p,C)};F(Bn,p=>{a(h)&&p(pr)})}var _r=v(Bn,2);{var gr=p=>{var C=Zd(),j=b(C);rn(j,{size:11,class:"animate-spin"});var K=v(j,2),J=b(K);Y(()=>U(J,a(y)||"Generating")),m(p,C)};F(_r,p=>{a(_)&&p(gr)})}xs(dn,p=>f(k,p),()=>a(k));var fn=v(dn,2);{var mr=p=>{var C=Qd(),j=b(C);nn(j,{size:11});var K=v(j);Y(()=>U(K,` ${a(_)?"Jump to latest — still generating":"Jump to latest"}`)),R("click",C,Ke),m(p,C)};F(fn,p=>{a(X)||p(mr)})}var br=v(fn,2),xr=b(br);{var Yr=p=>{var C=rf(),j=V(C);{var K=be=>{var Te=ef(),ze=V(Te),nt=ee(ze),ct=v(ze,2),rt=ee(ct);Y((st,hn)=>{ht(ze,1,st,"svelte-1roe1v9"),U(nt,`${a(Pe).contextPct??0??""}% context`),ht(rt,1,`block h-full rounded-full ${(a(Pe).contextPct||0)>=90?"bg-vs-red":(a(Pe).contextPct||0)>=70?"bg-vs-yellow":"bg-mk-green"}`,"svelte-1roe1v9"),Tr(rt,`width: ${hn??""}%`)},[()=>wl(fr(a(Pe).contextPct||0)),()=>Math.min(100,Math.max(0,a(Pe).contextPct||0))]),m(be,Te)};F(j,be=>{a(Pe).ctxWindowSize&&be(K)})}var J=v(j,2),se=ee(J),Q=v(J,2);{var pe=be=>{var Te=tf(),ze=ee(Te);Y(nt=>U(ze,`$${nt??""}`),[()=>Number(a(Pe).estimatedCost).toFixed(2)]),m(be,Te)};F(Q,be=>{a(Pe).estimatedCost&&be(pe)})}var Se=v(Q,2);{var ye=be=>{var Te=nf(),ze=ee(Te,!0);Y(()=>U(ze,a(Pe).model)),m(be,Te)};F(Se,be=>{a(Pe).model&&a(Pe).model!=="unknown"&&be(ye)})}Y((be,Te,ze)=>{ge(J,"title",`${a(Pe).messageCount??""} turns · ${be??""} in · ${Te??""} out`),U(se,`${ze??""} tokens`)},[()=>un(a(Pe).totalInput),()=>un(a(Pe).totalOutput),()=>un(a(Pe).totalTokens)]),m(p,C)},Jr=p=>{var C=sf();m(p,C)};F(xr,p=>{a(Pe)?p(Yr):p(Jr,-1)})}var En=v(xr,2),Vn=b(En);{var Xr=p=>{rn(p,{size:10,class:"animate-spin"})},Kn=p=>{Qu(p,{size:10})};F(Vn,p=>{a(mt)?p(Xr):p(Kn,-1)})}var yr=v(br,2),Un=b(yr),vn=b(Un);xs(vn,p=>f(E,p),()=>a(E));var Zr=v(vn,2),Wn=b(Zr),qn=b(Wn),Tn=b(qn),Qr=v(Tn);nn(Qr,{size:11});var wr=v(qn,2);{var es=p=>{var C=af();Ve(C,20,()=>a(P).available.length?a(P).available:["codex"],j=>j,(j,K)=>{var J=pi(),se=b(J),Q=b(se);{var pe=ye=>{fa(ye,{size:11})};F(Q,ye=>{K===a(P).agent&&ye(pe)})}var Se=v(se);Y(()=>U(Se,` ${K==="claude"?"Claude":"Codex"}`)),R("click",J,()=>Ie(K)),m(j,J)}),m(p,C)};F(wr,p=>{a(M)==="agent"&&p(es)})}var Z=v(Wn,2);{var Oe=p=>{var C=cf(),j=b(C),K=b(j),J=ee(K,!0),se=v(K,2);nn(se,{size:11,class:"shrink-0"});var Q=v(j,2);{var pe=Se=>{var ye=lf();Ve(ye,21,()=>a(P).models,be=>be[0],(be,Te)=>{var ze=of(),nt=b(ze),ct=b(nt);{var rt=Gn=>{fa(Gn,{size:11})};F(ct,Gn=>{a(Te)[0]===a(P).model&&Gn(rt)})}var st=v(nt,2),hn=ee(st,!0);Y(()=>U(hn,a(Te)[1])),R("click",ze,()=>it(a(Te)[0])),m(be,ze)}),m(Se,ye)};F(Q,Se=>{a(M)==="model"&&Se(pe)})}Y(()=>U(J,a(N))),R("click",j,()=>f(M,a(M)==="model"?"":"model",!0)),m(p,C)};F(Z,p=>{a(P).models.length&&p(Oe)})}var $e=v(Z,2);{var oe=p=>{var C=df(),j=b(C),K=b(j),J=v(K);nn(J,{size:11});var se=v(j,2);{var Q=pe=>{var Se=uf();Ve(Se,20,()=>a(P).efforts,ye=>ye,(ye,be)=>{var Te=pi(),ze=b(Te),nt=b(ze);{var ct=st=>{fa(st,{size:11})};F(nt,st=>{be===a(P).effort&&st(ct)})}var rt=v(ze);Y(()=>U(rt,` ${be??""}`)),R("click",Te,()=>ve(be)),m(ye,Te)}),m(pe,Se)};F(se,pe=>{a(M)==="effort"&&pe(Q)})}Y(()=>U(K,`${(a(P).effort||"effort")??""} `)),R("click",j,()=>f(M,a(M)==="effort"?"":"effort",!0)),m(p,C)};F($e,p=>{a(P).efforts.length&&p(oe)})}var Ce=v($e,2);{var lt=p=>{rn(p,{size:11,class:"animate-spin text-mk-muted"})};F(Ce,p=>{a(q)&&p(lt)})}var qe=v(Ce,2),bt=v(b(qe),2),$=b(bt);{var O=p=>{ad(p,{size:11})},H=p=>{Ru(p,{size:13})};F($,p=>{a(_)?p(O):p(H,-1)})}Y(p=>{En.disabled=a(mt)||!a(o),U(Tn,`${a(P).agent==="claude"?"Claude":"Codex"} `),bt.disabled=p},[()=>a(_)||!a(i).trim()]),ho(Gt,()=>a(o),p=>f(o,p)),Rn("scroll",dn,fe),R("click",En,Sn),R("keydown",vn,le),R("input",vn,Ee),Ze(vn,()=>a(i),p=>f(i,p)),R("click",qn,()=>f(M,a(M)==="agent"?"":"agent",!0)),R("click",bt,D),m(e,Fn),gt()}Dt(["click","keydown","input"]);var hf=z('<span class="hint svelte-e2eyom">searching…</span>'),pf=z('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),_f=z('<ul class="results svelte-e2eyom"></ul>'),gf=z('<p class="empty svelte-e2eyom"> </p>'),mf=z('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function bf(e,t){_t(t,!0);let n=A(""),r=A(Me([])),s=A(0),i=A(!1),o=A(null),l=null;ot(()=>{a(o)&&a(o).focus()}),ot(()=>{const S=a(n).trim();if(l&&clearTimeout(l),!S){f(r,[],!0);return}l=setTimeout(async()=>{f(i,!0);try{const I=await ke.searchFiles(g.connectionId,g.path||".",S);f(r,I.matches||[],!0),f(s,0)}catch{f(r,[],!0)}finally{f(i,!1)}},180)});async function c(S){var G;if(!S)return;const I=g.path&&g.path!=="."?`${g.path}/`:"";await g.openFile(`${I}${S.path}`),(G=t.onclose)==null||G.call(t)}function d(S){var I;S.key==="Escape"?(S.preventDefault(),(I=t.onclose)==null||I.call(t)):S.key==="ArrowDown"?(S.preventDefault(),f(s,Math.min(a(s)+1,a(r).length-1),!0)):S.key==="ArrowUp"?(S.preventDefault(),f(s,Math.max(a(s)-1,0),!0)):S.key==="Enter"&&(S.preventDefault(),c(a(r)[a(s)]))}var h=mf(),y=V(h),_=v(y,2),x=b(_),w=b(x);Io(w,{size:14});var k=v(w,2);xs(k,S=>f(o,S),()=>a(o));var E=v(k,2);{var T=S=>{var I=hf();m(S,I)};F(E,S=>{a(i)&&S(T)})}var P=v(x,2);{var M=S=>{var I=_f();Ve(I,23,()=>a(r),G=>G.path,(G,ne,L)=>{var B=pf(),X=b(B);let fe;var we=b(X),Ke=ee(we,!0),Ie=v(we,2),it=ee(Ie,!0),ve=v(Ie,2);{var he=D=>{ju(D,{size:12})};F(ve,D=>{a(L)===a(s)&&D(he)})}Y(()=>{fe=ht(X,1,"svelte-e2eyom",null,fe,{active:a(L)===a(s)}),U(Ke,a(ne).name),U(it,a(ne).path)}),R("click",X,()=>c(a(ne))),m(G,B)}),m(S,I)},q=S=>{var I=gf(),G=ee(I);Y(ne=>U(G,`No files match “${ne??""}”.`),[()=>a(n).trim()]),m(S,I)},N=at(()=>a(n).trim()&&!a(i));F(P,S=>{a(r).length?S(M):a(N)&&S(q,1)})}R("click",y,()=>{var S;return(S=t.onclose)==null?void 0:S.call(t)}),R("keydown",y,S=>{var I;return S.key==="Escape"&&((I=t.onclose)==null?void 0:I.call(t))}),R("keydown",k,d),Ze(k,()=>a(n),S=>f(n,S)),m(e,h),gt()}Dt(["click","keydown"]);var xf=z('<div class="terminal-pane svelte-maclc7"><div class="bar svelte-maclc7"><span class="label svelte-maclc7">Terminal</span> <span> </span></div> <div class="screen svelte-maclc7"></div></div>');function yf(e,t){_t(t,!0);let n=Be(t,"rootPath",3,""),r=Be(t,"session",3,""),s=Be(t,"index",3,0),i,o=null,l=null,c=null,d=A("connecting"),h=null,y=0,_=null,x=!1;const w={background:fs.colors["editor.background"],foreground:fs.colors["editor.foreground"],cursor:fs.colors["editorCursor.foreground"],selectionBackground:fs.colors["editor.selectionBackground"],black:"#272822",red:"#f92672",green:"#a6e22e",yellow:"#e6db74",blue:"#66d9ef",magenta:"#ae81ff",cyan:"#a1efe4",white:"#f8f8f2",brightBlack:"#75715e",brightRed:"#f92672",brightGreen:"#a6e22e",brightYellow:"#e6db74",brightBlue:"#66d9ef",brightMagenta:"#ae81ff",brightCyan:"#a1efe4",brightWhite:"#f9f8f5"};function k(){if(!(!l||!o||(c==null?void 0:c.readyState)!==WebSocket.OPEN))try{l.fit(),c.send(JSON.stringify({type:"resize",cols:o.cols,rows:o.rows}))}catch{}}function E(){if(x)return;const I=`${location.protocol==="https:"?"wss":"ws"}://${location.host}${n()}/ws/sessions/${encodeURIComponent(r())}/ide/terminal/${encodeURIComponent(g.connectionId)}?index=${encodeURIComponent(s())}`;c=new WebSocket(I),c.binaryType="arraybuffer",c.onopen=()=>{f(d,"connected"),y=0,k()},c.onmessage=G=>{o.write(typeof G.data=="string"?G.data:new Uint8Array(G.data))},c.onclose=G=>{if(x)return;if(G.code===1008){f(d,"refused"),o==null||o.write(`\r
\x1B[31m— not authorised for this terminal —\x1B[0m\r
`);return}if(y>=6){f(d,"closed"),o==null||o.write(`\r
\x1B[33m— terminal unavailable; reopen the panel to retry —\x1B[0m\r
`);return}f(d,"reconnecting");const ne=Math.min(1e3*2**y,1e4);y+=1,_=setTimeout(E,ne)},c.onerror=()=>{x||f(d,"error")}}Gr(async()=>{const[{Terminal:S},{FitAddon:I}]=await Promise.all([ha(()=>import("./ide-xterm.js"),[],import.meta.url),ha(()=>import("./ide-addon-fit.js"),[],import.meta.url)]);await ha(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),o=new S({theme:w,fontSize:12,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3}),l=new I,o.loadAddon(l),o.open(i),l.fit(),E(),o.onData(G=>{(c==null?void 0:c.readyState)===WebSocket.OPEN&&c.send(new TextEncoder().encode(G))}),h=new ResizeObserver(()=>k()),h.observe(i)}),Po(()=>{x=!0,_&&clearTimeout(_),h==null||h.disconnect(),c==null||c.close(),o==null||o.dispose()});var T=xf(),P=b(T),M=v(b(P),2),q=ee(M,!0),N=v(P,2);xs(N,S=>i=S,()=>i),Y(()=>{ht(M,1,`status ${a(d)??""}`,"svelte-maclc7"),U(q,a(d))}),m(e,T),gt()}var wf=z('<div class="border-b border-vs-line bg-vs-red/10 px-4 py-2 text-xs text-vs-red"> </div>'),kf=z('<div class="flex items-center gap-2 px-4 py-3 text-xs text-vs-muted"><!> Loading…</div>'),$f=z('<button class="flex w-full items-center gap-2 px-4 py-1 text-left text-[13px] text-vs-fg hover:bg-vs-hover"><!> <span class="truncate"> </span></button>'),Sf=z('<div class="px-4 py-3 text-xs text-vs-muted">No sub-folders here. You can still open this folder.</div>'),Cf=z('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="flex h-[70vh] w-[min(640px,92vw)] flex-col overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">Open Folder <span class="ml-1 font-normal text-vs-muted"><!></span></div> <form class="flex gap-2 border-b border-vs-line px-3 py-2"><button type="button" class="flex items-center gap-1 rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover disabled:opacity-40" title="Up one folder"><!> Up</button> <input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-xs text-vs-fg outline-none focus:border-vs-accent" spellcheck="false" aria-label="Folder path"/> <button type="submit" class="rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover">Go</button></form> <!> <div class="min-h-0 flex-1 overflow-y-auto py-1"><!></div> <div class="flex items-center gap-2 border-t border-vs-line px-4 py-3"><span class="flex min-w-0 flex-1 items-center gap-2 text-xs text-vs-muted"><!> <span class="truncate font-mono"> </span></span> <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40">Open Folder</button></div></div></div>');function Ef(e,t){_t(t,!0);let n=A(""),r=A(""),s=A(Me([])),i=A(""),o=A(!0),l=A("");async function c(ve){f(o,!0),f(i,"");try{const he=g.connectionId?await ke.browseOn(g.connectionId,ve):await ke.browse(ve);f(n,he.path,!0),f(r,he.parent,!0),f(s,he.entries||[],!0),f(l,he.path,!0)}catch(he){f(i,he.message||"Could not open that folder",!0)}finally{f(o,!1)}}Gr(()=>c(""));function d(ve){ve.preventDefault(),a(l).trim()&&c(a(l).trim())}var h=Cf(),y=b(h),_=b(y),x=v(b(_)),w=b(x);{var k=ve=>{var he=Xo();Y(()=>U(he,`on ${g.connection.username??""}@${g.connection.host??""}`)),m(ve,he)},E=ve=>{var he=Xo("on this server");m(ve,he)};F(w,ve=>{g.connection&&g.connection.kind!=="local"?ve(k):ve(E,-1)})}var T=v(_,2),P=b(T),M=b(P);Bu(M,{size:14});var q=v(P,2),N=v(T,2);{var S=ve=>{var he=wf(),D=ee(he,!0);Y(()=>U(D,a(i))),m(ve,he)};F(N,ve=>{a(i)&&ve(S)})}var I=v(N,2),G=b(I);{var ne=ve=>{var he=kf(),D=b(he);rn(D,{size:13,class:"animate-spin"}),m(ve,he)},L=ve=>{var he=te(),D=V(he);Ve(D,17,()=>a(s),le=>le.path,(le,Ee)=>{var We=$f(),tt=b(We);Yu(tt,{size:14,class:"shrink-0 text-vs-blue"});var Ft=v(tt,2),Pe=ee(Ft,!0);Y(()=>U(Pe,a(Ee).name)),R("dblclick",We,()=>c(a(Ee).path)),R("click",We,()=>c(a(Ee).path)),m(le,We)},le=>{var Ee=Sf();m(le,Ee)}),m(ve,he)};F(G,ve=>{a(o)?ve(ne):ve(L,-1)})}var B=v(I,2),X=b(B),fe=b(X);Ju(fe,{size:13,class:"shrink-0"});var we=v(fe,2),Ke=ee(we,!0),Ie=v(X,2),it=v(Ie,2);Y(()=>{P.disabled=!a(r),ge(we,"title",a(n)),U(Ke,a(n)),it.disabled=!a(n)||a(o)}),R("click",h,ve=>ve.target===ve.currentTarget&&t.onclose()),R("keydown",h,ve=>ve.key==="Escape"&&t.onclose()),Rn("submit",T,d),R("click",P,()=>a(r)&&c(a(r))),Ze(q,()=>a(l),ve=>f(l,ve)),R("click",Ie,function(...ve){var he;(he=t.onclose)==null||he.apply(this,ve)}),R("click",it,()=>t.onopen(a(n))),m(e,h),gt()}Dt(["click","keydown","dblclick"]);var Tf=z('<p class="px-4 py-2 text-xs text-vs-muted">Open a folder to search it.</p>'),Nf=z('<button class="flex w-full items-center gap-2 px-3 py-1 text-left text-[13px] hover:bg-vs-hover"><!> <span class="truncate text-vs-fg"> </span> <span class="ml-auto max-w-[45%] truncate text-[11px] text-vs-muted"> </span></button>'),zf=z('<p class="px-4 py-2 text-xs text-vs-muted"> </p>'),Mf=z('<p class="px-4 py-2 text-xs text-vs-muted">Type to search filenames in this workspace.</p>'),Pf=z('<div class="flex h-full min-h-0 flex-col"><div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Search</div> <div class="px-3 pb-2"><div class="flex items-center gap-1.5 rounded-sm border border-vs-line bg-vs-input px-2 focus-within:border-vs-accent"><!> <input class="min-w-0 flex-1 bg-transparent py-1 text-xs text-vs-fg outline-none placeholder:text-vs-muted" placeholder="Search filenames" spellcheck="false"/> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div></div>');function Af(e,t){_t(t,!0);let n=A(""),r=A(Me([])),s=A(!1),i=A(!1),o=null;ot(()=>{const M=a(n).trim();if(o&&clearTimeout(o),!M||!g.connectionId){f(r,[],!0),f(i,!1);return}o=setTimeout(async()=>{f(s,!0);try{const q=await ke.searchFiles(g.connectionId,g.path||".",M);f(r,q.matches||[],!0)}catch(q){f(r,[],!0),g.setStatus(q.message||"Search failed")}finally{f(s,!1),f(i,!0)}},200)});const l=M=>{const q=(M||"").split("/");return q.pop(),q.join("/")};var c=Pf(),d=v(b(c),2),h=b(d),y=b(h);Io(y,{size:12,class:"shrink-0 text-vs-muted"});var _=v(y,2),x=v(_,2);{var w=M=>{rn(M,{size:12,class:"shrink-0 animate-spin text-vs-muted"})};F(x,M=>{a(s)&&M(w)})}var k=v(d,2),E=b(k);{var T=M=>{var q=Tf();m(M,q)},P=M=>{var q=te(),N=V(q);Ve(N,17,()=>a(r),S=>S.path,(S,I)=>{var G=Nf(),ne=b(G);Ao(ne,{size:13,class:"shrink-0 text-vs-blue"});var L=v(ne,2),B=ee(L,!0),X=v(L,2),fe=ee(X,!0);Y((we,Ke)=>{ge(G,"title",a(I).path),U(B,we),U(fe,Ke)},[()=>a(I).name||a(I).path.split("/").pop(),()=>l(a(I).path)]),R("click",G,()=>g.openFile(a(I).path)),m(S,G)},S=>{var I=te(),G=V(I);{var ne=X=>{var fe=zf(),we=ee(fe);Y(()=>U(we,`No files match “${a(n)??""}”.`)),m(X,fe)},L=X=>{var fe=Mf();m(X,fe)},B=at(()=>!a(n).trim());F(G,X=>{a(i)&&!a(s)?X(ne):a(B)&&X(L,1)})}m(S,I)}),m(M,q)};F(E,M=>{g.connectionId?M(P,-1):M(T)})}Ze(_,()=>a(n),M=>f(n,M)),m(e,c),gt()}Dt(["click"]);var If=z('<p class="flex items-center gap-2 text-vs-muted"><!> Fetching host key…</p>'),Of=z('<p class="text-vs-red"> </p>'),Rf=z("<p>This host is already trusted. Try connecting again.</p>"),Lf=z('<div class="flex items-baseline gap-2 font-mono text-[11px]"><span class="w-16 shrink-0 text-vs-muted"> </span> <span class="break-all text-vs-fg"> </span></div>'),Df=z(`<p>The authenticity of <span class="font-mono text-vs-blue"> </span> can't be established. Verify these fingerprints match the server before you continue —
          if they don't, someone may be intercepting the connection.</p> <div class="mt-3 flex flex-col gap-1 rounded-sm border border-vs-line bg-vs-input p-2"></div> <p class="mt-3 text-xs text-vs-muted">Accepting adds the key to <span class="font-mono">~/.ssh/known_hosts</span> on this server.</p>`,1),Ff=z('<button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"> </button>'),Hf=z('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="w-[min(560px,92vw)] overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="flex items-center gap-2 border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright"><!> Unknown host</div> <div class="px-4 py-3 text-[13px] leading-relaxed text-vs-fg"><!></div> <div class="flex justify-end gap-2 border-t border-vs-line px-4 py-3"><button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <!></div></div></div>');function jf(e,t){_t(t,!0);let n=A(!0),r=A(""),s=A(null),i=A(!1);Gr(async()=>{try{f(s,await ke.hostKey(g.connectionId),!0)}catch(N){f(r,N.message||"Could not fetch the host key",!0)}finally{f(n,!1)}});async function o(){f(i,!0);try{await ke.trustHost(g.connectionId),t.ontrusted()}catch(N){f(r,N.message||"Could not trust this host",!0),f(i,!1)}}var l=Hf(),c=b(l),d=b(c),h=b(d);sd(h,{size:15,class:"text-vs-yellow"});var y=v(d,2),_=b(y);{var x=N=>{var S=If(),I=b(S);rn(I,{size:13,class:"animate-spin"}),m(N,S)},w=N=>{var S=Of(),I=ee(S,!0);Y(()=>U(I,a(r))),m(N,S)},k=N=>{var S=Rf();m(N,S)},E=N=>{var S=Df(),I=V(S),G=v(b(I)),ne=ee(G),L=v(I,2);Ve(L,21,()=>a(s).fingerprints,B=>B.fingerprint,(B,X)=>{var fe=Lf(),we=b(fe),Ke=ee(we,!0),Ie=v(we,2),it=ee(Ie,!0);Y(()=>{U(Ke,a(X).type),U(it,a(X).fingerprint)}),m(B,fe)}),Y(()=>U(ne,`${a(s).host??""}:${a(s).port??""}`)),m(N,S)};F(_,N=>{var S;a(n)?N(x):a(r)?N(w,1):(S=a(s))!=null&&S.known?N(k,2):N(E,-1)})}var T=v(y,2),P=b(T),M=v(P,2);{var q=N=>{var S=Ff(),I=ee(S,!0);Y(()=>{S.disabled=a(i),U(I,a(i)?"Trusting…":"Trust and connect")}),R("click",S,o),m(N,S)};F(M,N=>{var S;!a(n)&&!((S=a(s))!=null&&S.known)&&!a(r)&&N(q)})}R("click",l,N=>N.target===N.currentTarget&&t.onclose()),R("keydown",l,N=>N.key==="Escape"&&t.onclose()),R("click",P,function(...N){var S;(S=t.onclose)==null||S.apply(this,N)}),m(e,l),gt()}Dt(["click","keydown"]);var Bf=z('<div role="separator" tabindex="0" title="Drag to resize (double-click to reset)"><div></div></div>');function Xa(e,t){_t(t,!0);let n=Be(t,"size",15),r=Be(t,"side",3,"right"),s=Be(t,"min",3,120),i=Be(t,"max",3,800),o=Be(t,"onreset",3,null),l=A(!1);const c=r()==="top";function d(w){var q;w.preventDefault(),f(l,!0);const k=c?w.clientY:w.clientX,E=n(),T=w.currentTarget;(q=T.setPointerCapture)==null||q.call(T,w.pointerId);function P(N){const I=(c?N.clientY:N.clientX)-k,G=r()==="left"||r()==="top"?-I:I;n(Math.round(Math.min(i(),Math.max(s(),E+G))))}function M(){var N;f(l,!1),(N=T.releasePointerCapture)==null||N.call(T,w.pointerId),window.removeEventListener("pointermove",P),window.removeEventListener("pointerup",M)}window.addEventListener("pointermove",P),window.addEventListener("pointerup",M)}function h(w){const k=w.shiftKey?40:10,E=c?"ArrowUp":r()==="left"?"ArrowLeft":"ArrowRight",T=c?"ArrowDown":r()==="left"?"ArrowRight":"ArrowLeft";if(w.key===E)n(Math.min(i(),n()+k));else if(w.key===T)n(Math.max(s(),n()-k));else return;w.preventDefault()}var y=Bf();let _;var x=ee(y);Y(()=>{_=ht(y,1,`group relative shrink-0 ${c?"h-1 w-full cursor-row-resize":"w-1 cursor-col-resize"}`,null,_,{"bg-vs-accent":a(l)}),ge(y,"aria-orientation",c?"horizontal":"vertical"),ge(y,"aria-valuenow",n()),ge(y,"aria-valuemin",s()),ge(y,"aria-valuemax",i()),ht(x,1,`absolute ${c?"-top-1 -bottom-1 left-0 right-0":"-left-1 -right-1 top-0 bottom-0"}
           transition-colors group-hover:bg-vs-accent ${a(l)?"bg-vs-accent":""}`)}),R("pointerdown",y,d),R("dblclick",y,()=>{var w;return(w=o())==null?void 0:w()}),R("keydown",y,h),m(e,y),gt()}Dt(["pointerdown","dblclick","keydown"]);var Vf=z('<span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>'),Kf=z('<span class="absolute right-1.5 bottom-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-vs-status px-1 text-[10px] leading-none font-semibold text-white"> </span>'),Uf=z("<button><!> <!> <!></button>"),Wf=z("<option> </option>"),qf=z('<button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover hover:text-vs-red" title="Remove workspace" aria-label="Remove workspace"><!></button>'),Gf=z('<input class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),Yf=z(`<button class="w-full rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Show this host's key fingerprint and trust it">Verify host key…</button>`),Jf=z('<!> <button class="w-full rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"> </button> <!>',1),Xf=z('<p class="mt-1 font-mono text-[11px] break-all text-vs-muted"> </p>'),Zf=z('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="~/.ssh/id_ed25519"/> <textarea class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-[11px] outline-none focus:border-vs-accent" rows="4" placeholder="…or paste a private key (-----BEGIN OPENSSH PRIVATE KEY-----)" spellcheck="false"></textarea>',1),Qf=z('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" type="password" placeholder="Password" autocomplete="new-password"/>'),ev=z('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Host" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="User" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Port" type="number" min="1" max="65535"/> <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!>',1),tv=z('<form class="mt-2 flex flex-col gap-1.5 border-t border-vs-line px-3 pt-2"><select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>This server (local folder)</option><option>Remote host over SSH</option></select> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"/> <div class="flex gap-1 pb-2"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110" type="submit">Create</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" type="button">Cancel</button></div></form>'),nv=z('<div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Workspaces</div> <div class="flex flex-col gap-2 px-3 pt-1"><select class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" aria-label="Workspace"><option>— select workspace —</option><!></select> <div class="flex gap-1"><button class="flex flex-1 items-center justify-center gap-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"><!> Open Folder</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Add a workspace or SSH connection" aria-label="Add workspace"><!></button> <!></div> <!> <!></div> <!>',1),rv=z('<aside class="flex shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel"><!></aside> <!>',1),sv=z('<div class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"><!> <div><h1 class="text-2xl font-light text-vs-fg">Multibuilder IDE</h1> <p class="mt-1 text-sm text-vs-muted">Edit files on this server or on a remote host over SSH.</p></div> <div class="flex flex-col gap-2 text-sm"><button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Open Folder… <kbd class="ml-2 rounded-sm border border-vs-line px-1.5 py-0.5 text-[10px] text-vs-muted">Ctrl+Shift+O</kbd></button> <button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Connect to a host over SSH…</button></div></div>'),av=z('<button class="rounded-sm p-0.5 opacity-0 group-hover:opacity-100 hover:bg-vs-line" title="Close terminal — ends the shell"><!></button>'),ov=z('<span><button class="max-w-[140px] truncate"> </button> <!></span>'),iv=z('<div class="absolute inset-0"><!></div>'),lv=z('<!> <div class="flex shrink-0 flex-col border-t border-vs-border bg-vs-bg"><div class="flex items-center gap-1 border-b border-vs-border px-2 py-1 text-[11px]"><!> <div class="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto"></div> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40" title="New terminal in this workspace" aria-label="New terminal"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover" title="Hide terminals (Ctrl+`) — sessions keep running" aria-label="Hide all terminals"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover hover:text-vs-red" title="Close this terminal — ends the shell" aria-label="Close this terminal"><!></button></div> <div class="relative min-h-0 flex-1"><!></div></div>',1),cv=z('<!> <div class="min-h-0 flex-1"><!></div> <!>',1),uv=z('<!> <aside class="flex shrink-0 flex-col overflow-hidden border-l border-vs-border bg-vs-panel"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1.5"><!> <span class="flex-1 text-[11px] font-semibold tracking-wide uppercase">AI Agent</span> <button class="rounded-sm p-0.5 hover:bg-vs-hover" title="Hide chat" aria-label="Hide chat"><!></button></div> <div class="min-h-0 flex-1"><!></div></aside>',1),_i=z('<span class="flex items-center gap-1"><!> </span>'),dv=z("<span> </span>"),fv=z('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle terminal (Ctrl+`)"><!> Terminal</button> <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Focus the tmux window on the host"><!></button>',1),vv=z('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle AI Agent panel"><!> Chat</button>'),hv=z('<div class="flex h-full flex-col overflow-hidden bg-vs-bg font-sans text-vs-fg"><header class="flex items-center gap-2 border-b border-vs-border bg-vs-titlebar px-3 py-1 text-xs"><!> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover" title="Open a folder on this server (Ctrl+Shift+O)">Open Folder…</button> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40" title="Open a file (Ctrl+P)">Open File…</button> <button><!> Terminal</button> <span class="mx-auto truncate text-vs-muted"> </span> <span><!> </span></header> <div class="flex min-h-0 flex-1"><nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity"><!> <div class="mt-auto flex flex-col items-center pb-1"><button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Account — signed in to the dashboard" aria-label="Account"><!></button> <button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Toggle side bar (Ctrl+B)" aria-label="Toggle side bar"><!></button></div></nav> <!> <section class="flex min-h-0 min-w-0 flex-1 flex-col"><!></section> <!></div> <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white"><!> <!> <span class="truncate"> </span> <span class="ml-auto flex items-center gap-3"><!> <span class="max-w-[40vw] truncate opacity-80"> </span> <!> <!></span></footer> <!> <!> <!></div>');function pv(e,t){_t(t,!0);let n=Be(t,"sessions",19,()=>[]),r=Be(t,"session",3,""),s=Be(t,"rootPath",3,""),i=A("files");function o($,O){try{const H=localStorage.getItem(`ide.show.${$}`);return H===null?O:H==="1"}catch{return O}}let l=A(Me(o("chat",!0)));const c={sidebar:240,chat:320,panel:240};function d($){try{const O=localStorage.getItem(`ide.size.${$}`),H=Number(O);return Number.isFinite(H)&&H>0?H:c[$]}catch{return c[$]}}let h=A(Me(d("sidebar"))),y=A(Me(d("chat"))),_=A(Me(d("panel")));ot(()=>{try{localStorage.setItem("ide.size.sidebar",String(a(h))),localStorage.setItem("ide.size.chat",String(a(y))),localStorage.setItem("ide.size.panel",String(a(_))),localStorage.setItem("ide.show.terminal",a(k)?"1":"0"),localStorage.setItem("ide.show.chat",a(l)?"1":"0"),localStorage.setItem("ide.show.sidebar",a(x)?"1":"0")}catch{}});let x=A(Me(o("sidebar",!0))),w=A(!1),k=A(Me(o("terminal",!1)));const E=8;let T=A(Me([0])),P=A(0);function M(){if(a(T).length>=E)return;let $=0;for(;a(T).includes($);)$+=1;$>=E||(f(T,[...a(T),$].sort((O,H)=>O-H),!0),f(P,$,!0))}async function q($){const O=a(T).indexOf($),H=a(T).filter(p=>p!==$);f(T,H.length?H:[0],!0),a(P)===$&&f(P,a(T)[Math.min(O,a(T).length-1)],!0);try{await ke.closeTerminal(g.connectionId,$)}catch(p){g.setStatus(p.message||"Could not close terminal")}}let N=A("");ot(()=>{const $=g.connectionId,O=g.connectionState;if(!$||O!=="connected")return;const H=`${$}|${O}`;a(N)!==H&&(f(N,H),f(T,[0],!0),f(P,0),ke.listTerminals($).then(p=>{const C=((p==null?void 0:p.terminals)||[]).filter(j=>Number.isInteger(j));C.length&&(f(T,C,!0),C.includes(a(P))||f(P,C[0],!0))}).catch(()=>{}))});let S=A(!1);ot(()=>{a(k)&&f(S,!0)});let I=A(!1),G=A(!1),ne=A(""),L=A(Me({kind:"local",label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",private_key:"",workspace_root:"",max_file_bytes:1e6}));const B={idle:{icon:Hu,label:"Not connected"},connecting:{icon:Du,label:"Connecting…"},connected:{icon:Lu,label:"Connected"},reconnect:{icon:li,label:"Reconnect required"},error:{icon:li,label:"Error"}},X=at(()=>B[g.connectionState].icon),fe=at(()=>{var $;return(($=g.connection)==null?void 0:$.kind)==="local"}),we=[{id:"files",icon:qu,label:"Explorer",keys:"Ctrl+Shift+E"},{id:"search",icon:Io,label:"Search",keys:"Ctrl+Shift+F"},{id:"git",icon:po,label:"Source Control",keys:"Ctrl+Shift+G"},{id:"remote",icon:td,label:"Remote Explorer",keys:""}];Gr(async()=>{await g.loadConnections(),g.connectionId&&await g.refreshStatus()});function Ke($){a(i)===$&&a(x)?f(x,!1):(f(i,$,!0),f(x,!0))}async function Ie($){g.connectionId=$.currentTarget.value,g.resetWorkspaceView(),await g.refreshStatus()}async function it($){f(G,!1);try{const O=$.split("/").filter(Boolean).pop()||$,H=g.connection;if(H&&H.kind!=="local"){await ke.setWorkspaceRoot(H.id,$,O),await g.loadConnections(),g.resetWorkspaceView(),await g.refreshFiles("."),g.setStatus(`Opened ${$} on ${H.username}@${H.host}`),f(i,"files"),f(x,!0);return}if(H&&H.kind==="local"){await ke.setWorkspaceRoot(H.id,$,O),await g.loadConnections(),g.resetWorkspaceView(),await g.refreshFiles("."),g.setStatus(`Opened ${$}`),f(i,"files"),f(x,!0);return}const p=await ke.createConnection({kind:"local",label:O,workspace_root:$,max_file_bytes:1e6});await g.loadConnections(),g.connectionId=p.connection.id,g.resetWorkspaceView(),await g.connect(""),f(i,"files"),f(x,!0)}catch(O){g.setStatus(O.message||"Could not open folder")}}async function ve($){$.preventDefault();try{const O=await ke.createConnection({...a(L),port:Number(a(L).port)});f(I,!1),f(L,{...a(L),label:"",host:"",username:"",password:"",private_key:""},!0),await g.loadConnections(),g.connectionId=O.connection.id,await g.refreshStatus()}catch(O){g.setStatus(O.message||"Could not create connection")}}async function he(){const $=g.connection;if(!$)return;const O=$.kind==="local"?"workspace":"connection";if(confirm(`Remove ${O} "${$.label}"? Saved tabs are cleared; files are untouched.`))try{await ke.deleteConnection($.id),g.connectionId="",g.resetWorkspaceView(),await g.loadConnections()}catch(H){g.setStatus(H.message||"Could not delete")}}async function D(){try{const $=await ke.focusTerminal(g.connectionId);g.setStatus(`Focused ${$.window_name}`,"tmux window selected")}catch($){g.setStatus($.message||"Could not focus terminal")}}function le($){var C,j,K,J;const O=$.ctrlKey||$.metaKey,H=$.key.toLowerCase(),p=((j=(C=$.target)==null?void 0:C.matches)==null?void 0:j.call(C,"input, textarea, select"))&&!((J=(K=$.target).closest)!=null&&J.call(K,".monaco-editor"));O&&H==="s"?($.preventDefault(),g.saveActive()):O&&H==="p"&&!p?($.preventDefault(),g.connectionId&&f(w,!0)):O&&$.shiftKey&&H==="o"?($.preventDefault(),f(G,!0)):O&&$.shiftKey&&["e","f","g"].includes(H)?($.preventDefault(),f(i,{e:"files",f:"search",g:"git"}[H],!0),f(x,!0)):O&&H==="b"&&!p?($.preventDefault(),f(x,!a(x))):O&&H==="`"?($.preventDefault(),g.connectionState==="connected"&&f(k,!a(k))):$.key==="Escape"&&a(w)&&($.preventDefault(),f(w,!1))}var Ee=hv();Rn("keydown",gs,le);var We=b(Ee),tt=b(We);ci(tt,{size:15,class:"shrink-0 text-vs-blue"});var Ft=v(tt,2),Pe=v(Ft,2),mt=v(Pe,2);let cn;var Dn=b(mt);fi(Dn,{size:13});var Sn=v(mt,2),un=ee(Sn,!0),fr=v(Sn,2),Fn=b(fr);ei(Fn,()=>a(X),($,O)=>{O($,{size:12})});var vr=v(Fn),Cn=v(We,2),Gt=b(Cn),dn=b(Gt);Ve(dn,17,()=>we,$=>$.id,($,O)=>{var H=Uf(),p=b(H);{var C=se=>{var Q=Vf();m(se,Q)};F(p,se=>{a(i)===a(O).id&&a(x)&&se(C)})}var j=v(p,2);ei(j,()=>a(O).icon,(se,Q)=>{Q(se,{size:24,strokeWidth:1.4})});var K=v(j,2);{var J=se=>{var Q=Kf(),pe=ee(Q,!0);Y(()=>U(pe,g.gitDirtyCount)),m(se,Q)};F(K,se=>{a(O).id==="git"&&g.gitDirtyCount&&se(J)})}Y(()=>{ht(H,1,`relative flex h-12 w-12 items-center justify-center ${a(i)===a(O).id&&a(x)?"text-vs-bright":"text-vs-muted hover:text-vs-fg"}`),ge(H,"title",a(O).keys?`${a(O).label} (${a(O).keys})`:a(O).label),ge(H,"aria-label",a(O).label)}),R("click",H,()=>Ke(a(O).id)),m($,H)});var Hn=v(dn,2),jn=b(Hn),hr=b(jn);Fu(hr,{size:24,strokeWidth:1.4});var Bn=v(jn,2),pr=b(Bn);rd(pr,{size:24,strokeWidth:1.4});var _r=v(Gt,2);{var gr=$=>{var O=rv(),H=V(O),p=b(H);{var C=Q=>{hd(Q,{})},j=Q=>{Af(Q,{})},K=Q=>{Id(Q,{})},J=Q=>{var pe=nv(),Se=v(V(pe),2),ye=b(Se),be=b(ye);be.value=be.__value="";var Te=v(be);Ve(Te,17,()=>g.connections,De=>De.id,(De,Le)=>{var He=Wf(),_n=ee(He),Yt={};Y(()=>{U(_n,`${a(Le).kind==="local"?"🖿 ":"⇅ "}${a(Le).label??""}`),Yt!==(Yt=a(Le).id)&&(He.value=(He.__value=Yt)??"")}),m(De,He)});var ze;_s(ye);var nt=v(ye,2),ct=b(nt),rt=b(ct);Ja(rt,{size:13});var st=v(ct,2),hn=b(st);wa(hn,{size:13});var Gn=v(st,2);{var Aa=De=>{var Le=qf(),He=b(Le);vi(He,{size:13}),R("click",Le,he),m(De,Le)};F(Gn,De=>{g.connection&&De(Aa)})}var Nt=v(nt,2);{var $t=De=>{var Le=Jf(),He=V(Le);{var _n=zt=>{var Xn=Gf();Ze(Xn,()=>a(ne),Oa=>f(ne,Oa)),m(zt,Xn)};F(He,zt=>{!a(fe)&&!g.connection.has_password&&zt(_n)})}var Yt=v(He,2),ea=ee(Yt,!0),ta=v(Yt,2);{var Ia=zt=>{var Xn=Yf();R("click",Xn,()=>g.needsHostKey=!0),m(zt,Xn)};F(ta,zt=>{a(fe)||zt(Ia)})}Y(()=>U(ea,a(fe)?"Open workspace":"Connect")),R("click",Yt,()=>g.connect(a(ne))),m(De,Le)};F(Nt,De=>{g.connection&&g.connectionState!=="connected"&&De($t)})}var Yn=v(Nt,2);{var pn=De=>{var Le=Xf(),He=ee(Le,!0);Y(()=>U(He,g.connection.workspace_root)),m(De,Le)};F(Yn,De=>{g.connection&&De(pn)})}var kr=v(Se,2);{var Jn=De=>{var Le=tv(),He=b(Le),_n=b(He);_n.value=_n.__value="local";var Yt=v(_n);Yt.value=Yt.__value="ssh",_s(He);var ea=v(He,2),ta=v(ea,2);{var Ia=gn=>{var Oo=ev(),Ro=V(Oo),Lo=v(Ro,2),Do=v(Lo,2),na=v(Do,2),Ra=b(na);Ra.value=Ra.__value="agent";var La=v(Ra);La.value=La.__value="key";var Fo=v(La);Fo.value=Fo.__value="password",_s(na);var Ho=v(na,2);{var Al=ut=>{var ts=Zf(),ra=V(ts),Rl=v(ra,2);Ze(ra,()=>a(L).identity_file,Da=>a(L).identity_file=Da),Ze(Rl,()=>a(L).private_key,Da=>a(L).private_key=Da),m(ut,ts)};F(Ho,ut=>{a(L).auth_mode==="key"&&ut(Al)})}var Il=v(Ho,2);{var Ol=ut=>{var ts=Qf();Ze(ts,()=>a(L).password,ra=>a(L).password=ra),m(ut,ts)};F(Il,ut=>{a(L).auth_mode==="password"&&ut(Ol)})}Ze(Ro,()=>a(L).host,ut=>a(L).host=ut),Ze(Lo,()=>a(L).username,ut=>a(L).username=ut),Ze(Do,()=>a(L).port,ut=>a(L).port=ut),ho(na,()=>a(L).auth_mode,ut=>a(L).auth_mode=ut),m(gn,Oo)};F(ta,gn=>{a(L).kind==="ssh"&&gn(Ia)})}var zt=v(ta,2),Xn=v(zt,2),Oa=v(b(Xn),2);Y(()=>{ge(zt,"placeholder",a(L).kind==="local"?"/var/www/app":"Workspace root"),zt.required=a(L).kind==="local"}),Rn("submit",Le,ve),ho(He,()=>a(L).kind,gn=>a(L).kind=gn),Ze(ea,()=>a(L).label,gn=>a(L).label=gn),Ze(zt,()=>a(L).workspace_root,gn=>a(L).workspace_root=gn),R("click",Oa,()=>f(I,!1)),m(De,Le)};F(kr,De=>{a(I)&&De(Jn)})}Y(()=>{ze!==(ze=g.connectionId)&&(ye.value=(ye.__value=ze)??"",bs(ye,ze))}),R("change",ye,Ie),R("click",ct,()=>f(G,!0)),R("click",st,()=>f(I,!a(I))),m(Q,pe)};F(p,Q=>{a(i)==="files"?Q(C):a(i)==="search"?Q(j,1):a(i)==="git"?Q(K,2):Q(J,-1)})}var se=v(H,2);Xa(se,{side:"right",min:170,max:620,onreset:()=>f(h,c.sidebar,!0),get size(){return a(h)},set size(Q){f(h,Q,!0)}}),Y(()=>Tr(H,`width: ${a(h)??""}px`)),m($,O)};F(_r,$=>{a(x)&&$(gr)})}var fn=v(_r,2),mr=b(fn);{var br=$=>{var O=sv(),H=b(O);ci(H,{size:64,strokeWidth:1,class:"text-vs-line"});var p=v(H,4),C=b(p),j=b(C);Ja(j,{size:16});var K=v(C,2),J=b(K);di(J,{size:16}),R("click",C,()=>f(G,!0)),R("click",K,()=>{f(i,"remote"),f(x,!0),f(I,!0)}),m($,O)},xr=$=>{var O=cv(),H=V(O);Ud(H,{});var p=v(H,2),C=b(p);Hd(C,{});var j=v(p,2);{var K=J=>{var se=lv(),Q=V(se);{var pe=Nt=>{Xa(Nt,{side:"top",min:120,max:640,onreset:()=>f(_,c.panel,!0),get size(){return a(_)},set size($t){f(_,$t,!0)}})};F(Q,Nt=>{a(k)&&Nt(pe)})}var Se=v(Q,2),ye=b(Se),be=b(ye);fi(be,{size:13,class:"mx-1 shrink-0"});var Te=v(be,2);Ve(Te,20,()=>a(T),Nt=>Nt,(Nt,$t)=>{var Yn=ov(),pn=b(Yn),kr=ee(pn,!0),Jn=v(pn,2);{var De=Le=>{var He=av(),_n=b(He);ka(_n,{size:11}),Y(()=>ge(He,"aria-label",`Close terminal ${$t+1}`)),R("click",He,()=>q($t)),m(Le,He)};F(Jn,Le=>{a(T).length>1&&Le(De)})}Y(()=>{var Le;ht(Yn,1,`group flex shrink-0 items-center gap-1 rounded-sm px-2 py-0.5
                           ${$t===a(P)?"bg-vs-hover text-vs-fg":"text-vs-muted hover:text-vs-fg"}`),U(kr,$t===0?((Le=g.connection)==null?void 0:Le.label)||"Terminal":`Terminal ${$t+1}`)}),R("click",pn,()=>f(P,$t,!0)),m(Nt,Yn)});var ze=v(Te,2),nt=b(ze);wa(nt,{size:14});var ct=v(ze,2),rt=b(ct);nn(rt,{size:15});var st=v(ct,2),hn=b(st);vi(hn,{size:13});var Gn=v(ye,2),Aa=b(Gn);fu(Aa,()=>g.connectionId,Nt=>{var $t=te(),Yn=V($t);Ve(Yn,16,()=>a(T),pn=>pn,(pn,kr)=>{var Jn=iv(),De=b(Jn);yf(De,{get rootPath(){return s()},get session(){return r()},get index(){return kr}}),Y(()=>ge(Jn,"hidden",kr!==a(P))),m(pn,Jn)}),m(Nt,$t)}),Y(()=>{Tr(Se,`height: ${a(_)??""}px`),ge(Se,"hidden",!a(k)),ze.disabled=a(T).length>=E}),R("click",ze,M),R("click",ct,()=>f(k,!1)),R("click",st,()=>q(a(P))),m(J,se)};F(j,J=>{a(S)&&g.connectionState==="connected"&&J(K)})}m($,O)};F(mr,$=>{g.connectionId?$(xr,-1):$(br)})}var Yr=v(fn,2);{var Jr=$=>{var O=uv(),H=V(O);Xa(H,{side:"left",min:260,max:760,onreset:()=>f(y,c.chat,!0),get size(){return a(y)},set size(pe){f(y,pe,!0)}});var p=v(H,2),C=b(p),j=b(C);ui(j,{size:13});var K=v(j,4),J=b(K);ka(J,{size:14});var se=v(C,2),Q=b(se);vf(Q,{get sessions(){return n()},get session(){return r()},get rootPath(){return s()}}),Y(()=>Tr(p,`width: ${a(y)??""}px`)),R("click",K,()=>f(l,!1)),m($,O)};F(Yr,$=>{a(l)&&$(Jr)})}var En=v(Cn,2),Vn=b(En);{var Xr=$=>{var O=_i(),H=b(O);{var p=K=>{Ja(K,{size:12})},C=K=>{di(K,{size:12})};F(H,K=>{a(fe)?K(p):K(C,-1)})}var j=v(H);Y(()=>{ge(O,"title",g.connection.workspace_root),U(j,` ${g.connection.label??""}`)}),m($,O)};F(Vn,$=>{g.connection&&$(Xr)})}var Kn=v(Vn,2);{var yr=$=>{var O=_i(),H=b(O);po(H,{size:12});var p=v(H);Y(()=>U(p,` ${g.gitBranch??""}`)),m($,O)};F(Kn,$=>{g.gitBranch&&$(yr)})}var Un=v(Kn,2),vn=ee(Un,!0),Zr=v(Un,2),Wn=b(Zr);{var qn=$=>{var O=dv(),H=ee(O);Y(()=>U(H,`${g.dirtyCount??""} unsaved`)),m($,O)};F(Wn,$=>{g.dirtyCount&&$(qn)})}var Tn=v(Wn,2),Qr=ee(Tn,!0),wr=v(Tn,2);{var es=$=>{var O=fv(),H=V(O),p=b(H);nd(p,{size:12});var C=v(H,2),j=b(C);Ku(j,{size:12}),R("click",H,()=>f(k,!a(k))),R("click",C,D),m($,O)};F(wr,$=>{g.connectionState==="connected"&&$(es)})}var Z=v(wr,2);{var Oe=$=>{var O=vv(),H=b(O);ui(H,{size:12}),R("click",O,()=>f(l,!a(l))),m($,O)};F(Z,$=>{$(Oe)})}var $e=v(En,2);{var oe=$=>{bf($,{onclose:()=>f(w,!1)})};F($e,$=>{a(w)&&$(oe)})}var Ce=v($e,2);{var lt=$=>{Ef($,{onopen:it,onclose:()=>f(G,!1)})};F(Ce,$=>{a(G)&&$(lt)})}var qe=v(Ce,2);{var bt=$=>{jf($,{onclose:()=>g.needsHostKey=!1,ontrusted:async()=>{g.needsHostKey=!1,await g.connect(a(ne))}})};F(qe,$=>{g.needsHostKey&&$(bt)})}Y(()=>{var $;Pe.disabled=!g.connectionId,cn=ht(mt,1,"flex items-center gap-1 rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40",null,cn,{"text-vs-bright":a(k)}),mt.disabled=g.connectionState!=="connected",ge(mt,"title",g.connectionState==="connected"?"Toggle terminal (Ctrl+`)":"Open a workspace to use the terminal"),ge(Sn,"title",($=g.connection)==null?void 0:$.workspace_root),U(un,g.connection?`${g.connection.label} — Multibuilder IDE`:"Multibuilder IDE"),ht(fr,1,`flex items-center gap-1 ${g.connectionState==="connected"?"text-vs-green":g.connectionState==="connecting"?"text-vs-yellow":g.connectionState==="idle"?"text-vs-muted":"text-vs-red"}`),U(vr,` ${B[g.connectionState].label??""}`),U(vn,g.statusText),U(Qr,g.detailText)}),R("click",Ft,()=>f(G,!0)),R("click",Pe,()=>f(w,!0)),R("click",mt,()=>f(k,!a(k))),R("click",jn,()=>g.setStatus("Signed in to the Multibuilder dashboard")),R("click",Bn,()=>f(x,!a(x))),m(e,Ee),gt()}Dt(["click","change"]);function Pl(e,t){return lu(pv,{target:e,props:t})}function gi(){const e=document.getElementById("ide-root");if(!e||e.dataset.mounted)return;e.dataset.mounted="1";const t=window.__IDE_BOOTSTRAP__||{};Pl(e,{sessions:t.sessions||[],session:t.session||"",rootPath:t.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",gi):gi();window.mountRemoteIde=Pl;export{ha as _};
