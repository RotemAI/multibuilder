const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./ide-monaco.js","./ide2.css","./ide3.css"])))=>i.map(i=>d[i]);
var Pl=Object.defineProperty;var Ho=e=>{throw TypeError(e)};var Il=(e,t,n)=>t in e?Pl(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var it=(e,t,n)=>Il(e,typeof t!="symbol"?t+"":t,n),Da=(e,t,n)=>t.has(e)||Ho("Cannot "+n);var u=(e,t,n)=>(Da(e,t,"read from private field"),n?n.call(e):t.get(e)),V=(e,t,n)=>t.has(e)?Ho("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),se=(e,t,n,r)=>(Da(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),he=(e,t,n)=>(Da(e,t,"access private method"),n);var Sa=Array.isArray,Ol=Array.prototype.indexOf,ha=Array.prototype.includes,Ca=Array.from,mi=Object.defineProperty,Hn=Object.getOwnPropertyDescriptor,bi=Object.getOwnPropertyDescriptors,Rl=Object.prototype,Dl=Array.prototype,go=Object.getPrototypeOf,jo=Object.isExtensible;function es(e){return typeof e=="function"}const Ll=()=>{};function Fl(e){return e()}function Xa(e){for(var t=0;t<e.length;t++)e[t]()}function xi(){var e,t,n=new Promise((r,s)=>{e=r,t=s});return{promise:n,resolve:e,reject:t}}function Hl(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const Je=2,Ir=4,Js=8,mo=1<<24,Wt=16,Dt=32,$n=64,Za=128,bo=256,Rt=512,qe=1024,Ge=2048,Yt=4096,dt=8192,xt=16384,Fr=32768,pa=1<<25,Kn=65536,_a=1<<17,jl=1<<18,Hr=1<<19,yi=1<<20,on=1<<25,fr=65536,ga=1<<21,Sr=1<<22,jn=1<<23,cn=Symbol("$state"),wi=Symbol("component"),ki=Symbol("legacy props"),Bl=Symbol(""),oa=Symbol("attributes"),Qa=Symbol("class"),eo=Symbol("style"),ss=Symbol("text"),ia=Symbol("form reset"),Xs=new class extends Error{constructor(){super(...arguments);it(this,"name","StaleReactionError");it(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var pi;const xo=!!((pi=globalThis.document)!=null&&pi.contentType)&&globalThis.document.contentType.includes("xml"),Vl=1,Kl=2,$i=4,Ul=8,Wl=16,ql=1,Gl=2,Si=4,Yl=8,Jl=16,Xl=1,Zl=2,Ke=Symbol("uninitialized"),Ci="http://www.w3.org/1999/xhtml",Ei="http://www.w3.org/2000/svg",Ql="http://www.w3.org/1998/Math/MathML",ec="@attach";function tc(){console.warn("https://svelte.dev/e/derived_inert")}function nc(){console.warn("https://svelte.dev/e/select_multiple_invalid_value")}function rc(){console.warn("https://svelte.dev/e/svelte_boundary_reset_noop")}function Ti(e){return e===this.v}function sc(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ni(e){return!sc(e,this.v)}function Mi(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function ac(){throw new Error("https://svelte.dev/e/async_derived_orphan")}function oc(e,t,n){throw new Error("https://svelte.dev/e/each_key_duplicate")}function ic(e){throw new Error("https://svelte.dev/e/effect_in_teardown")}function lc(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function cc(e){throw new Error("https://svelte.dev/e/effect_orphan")}function uc(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function dc(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function fc(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function vc(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function hc(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function pc(){throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror")}let jr=!1;function _c(){jr=!0}let ze=null;function Or(e){ze=e}function ft(e,t=!1,n){ze={p:ze,i:!1,c:null,e:null,s:e,x:null,r:ce,l:jr&&!t?{s:null,u:null,$:[]}:null}}function vt(e){var t=ze,n=t.e;if(n!==null){t.e=null;for(var r of n)Qi(r)}return t.i=!0,ze=t.p,yo(e)}function yo(e={}){return mi(e,wi,{value:!0}),e}function Br(){return!jr||ze!==null&&ze.l===null}let nr=[];function zi(){var e=nr;nr=[],Xa(e)}function ln(e){if(nr.length===0&&!fs){var t=nr;queueMicrotask(()=>{t===nr&&zi()})}nr.push(e)}function gc(){for(;nr.length>0;)zi()}const mc=-7169;function Re(e,t){e.f=e.f&mc|t}function wo(e){(e.f&Rt)!==0||e.deps===null?Re(e,qe):Re(e,Yt)}function Ai(e){if(e!==null)for(const t of e)(t.f&Je)===0||(t.f&fr)===0||(t.f^=fr,Ai(t.deps))}function Pi(e,t,n){(e.f&Ge)!==0?t.add(e):(e.f&Yt)!==0&&n.add(e),Ai(e.deps),Re(e,qe)}let sa=!1;function bc(e){var t=sa;try{return sa=!1,[e(),sa]}finally{sa=t}}function Ii(e,t){if(t){const n=document.body;e.autofocus=!0,ln(()=>{document.activeElement===n&&e.focus()})}}let Bo=!1;function xc(){Bo||(Bo=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[ia])==null||t.call(n)})},{capture:!0}))}function Vr(e){var t=fe,n=ce;Lt(null),Ft(null);try{return e()}finally{Lt(t),Ft(n)}}function Oi(e,t,n,r=n){e.addEventListener(t,()=>Vr(n));const s=e[ia];s?e[ia]=()=>{s(),r(!0)}:e[ia]=()=>r(!0),xc()}function Ri(e,t,n,r){const s=Br()?Rr:ko;var o=e.filter(g=>!g.settled),a=t.map(s);if(n.length===0&&o.length===0){r(a);return}var l=ce,c=yc(),d=o.length===1?o[0].promise:o.length>1?Promise.all(o.map(g=>g.promise)):null;function f(g){if((l.f&xt)===0){c();try{r([...a,...g])}catch(b){an(b,l)}ma()}}var x=Di();if(n.length===0){d.then(()=>f([])).finally(x);return}function v(){Promise.all(n.map(g=>wc(g))).then(f).catch(g=>an(g,l)).finally(x)}d?d.then(()=>{c(),v(),ma()}):v()}function yc(){var e=ce,t=fe,n=ze,r=Z;return function(o=!0){Ft(e),Lt(t),Or(n),o&&(e.f&xt)===0&&(r==null||r.activate(),r==null||r.apply())}}function ma(e=!0){Ft(null),Lt(null),Or(null),e&&(Z==null||Z.deactivate())}function Di(){var e=ce,t=e.b,n=Z,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}function Rr(e){var t=Je|Ge;return ce!==null&&(ce.f|=Hr),{ctx:ze,deps:null,effects:null,equals:Ti,f:t,fn:e,reactions:null,rv:0,v:Ke,wv:0,parent:ce,ac:null}}const as=Symbol("obsolete");function wc(e,t,n){let r=ce;r===null&&ac();var s=void 0,o=Sn(Ke),a=!fe,l=new Set;return Dc(()=>{var g,b;var c=ce,d=xi();s=d.promise;try{Promise.resolve(e()).then(d.resolve,w=>{w!==Xs&&d.reject(w)}).finally(ma)}catch(w){d.reject(w),ma()}var f=Z;if(a){if((c.f&Fr)!==0)var x=Di();if((g=r.b)!=null&&g.is_rendered())(b=f.async_deriveds.get(c))==null||b.reject(as);else for(const w of l.values())w.reject(as);l.add(d),f.async_deriveds.set(c,d)}const v=(w,S=void 0)=>{x==null||x(),l.delete(d),S!==as&&(f.activate(),S?(o.f|=jn,Dr(o,S)):((o.f&jn)!==0&&(o.f^=jn),Dr(o,w)),f.deactivate())};d.promise.then(v,w=>v(null,w||"unknown"))}),Ta(()=>{for(const c of l)c.reject(as)}),new Promise(c=>{function d(f){function x(){f===s?c(o):d(s)}f.then(x,x)}d(s)})}function ut(e){const t=Rr(e);return ol(t),t}function ko(e){const t=Rr(e);return t.equals=Ni,t}function kc(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)tt(t[n])}}function $o(e){var t,n=ce,r=e.parent;if(!Cn&&r!==null&&e.v!==Ke&&(r.f&(xt|dt))!==0)return tc(),e.v;Ft(r);try{e.f&=~fr,kc(e),t=ul(e)}finally{Ft(n)}return t}function Li(e){var t=$o(e);if(!e.equals(t)&&(e.wv=ll(),(!(Z!=null&&Z.is_fork)||e.deps===null)&&(Z!==null?(Z.capture(e,t,!0),ds==null||ds.capture(e,t,!0)):e.v=t,e.deps===null))){Re(e,qe);return}Cn||(et!==null?(Eo()||Z!=null&&Z.is_fork)&&et.set(e,t):wo(e))}function $c(e){var t;if(e.effects!==null)for(const n of e.effects)(n.teardown||n.ac)&&((t=n.teardown)==null||t.call(n),n.ac!==null&&Vr(()=>{n.ac.abort(Xs),n.ac=null}),n.fn!==null&&(n.teardown=Ll),ms(n,0),No(n))}function Fi(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&Lr(t)}let La=null,wr=null,Z=null,ds=null,et=null,to=null,fs=!1,Fa=!1,$r=null,la=null;var Vo=0;let Sc=1;var Er,Ln,ar,Tr,Nr,Mr,yn,zr,gt,ys,wn,Kt,nn,Ar,or,ye,no,os,ro,Hi,ji,kr,Cc,is;const wa=class wa{constructor(){V(this,ye);it(this,"id",Sc++);V(this,Er,!1);it(this,"linked",!0);V(this,Ln,null);V(this,ar,null);it(this,"async_deriveds",new Map);it(this,"current",new Map);it(this,"previous",new Map);V(this,Tr,new Set);V(this,Nr,new Set);V(this,Mr,0);V(this,yn,new Map);V(this,zr,null);V(this,gt,[]);V(this,ys,[]);V(this,wn,new Set);V(this,Kt,new Set);V(this,nn,new Map);V(this,Ar,new Set);it(this,"is_fork",!1);V(this,or,!1);wr===null?La=wr=this:(se(wr,ar,this),se(this,Ln,wr)),wr=this}skip_effect(t){u(this,nn).has(t)||u(this,nn).set(t,{d:[],m:[]}),u(this,Ar).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=u(this,nn).get(t);if(r){u(this,nn).delete(t);for(var s of r.d)Re(s,Ge),n(s);for(s of r.m)Re(s,Yt),n(s)}u(this,Ar).add(t)}capture(t,n,r=!1){t.v!==Ke&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&jn)===0&&(this.current.set(t,[n,r]),et==null||et.set(t,n)),this.is_fork||(t.v=n)}activate(){Z=this}deactivate(){Z=null,et=null}flush(){try{Fa=!0,Z=this,he(this,ye,os).call(this)}finally{Vo=0,to=null,$r=null,la=null,Fa=!1,Z=null,et=null,un.clear()}}discard(){var t;for(const n of u(this,Nr))n(this);u(this,Nr).clear();for(const n of this.async_deriveds.values())n.reject(as);he(this,ye,is).call(this),(t=u(this,zr))==null||t.resolve()}register_created_effect(t){u(this,ys).push(t)}increment(t,n){if(se(this,Mr,u(this,Mr)+1),t){let r=u(this,yn).get(n)??0;u(this,yn).set(n,r+1)}}decrement(t,n){if(se(this,Mr,u(this,Mr)-1),t){let r=u(this,yn).get(n)??0;r===1?u(this,yn).delete(n):u(this,yn).set(n,r-1)}u(this,or)||(se(this,or,!0),ln(()=>{se(this,or,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)u(this,wn).add(r);for(const r of n)u(this,Kt).add(r);t.clear(),n.clear()}oncommit(t){u(this,Tr).add(t)}ondiscard(t){u(this,Nr).add(t)}settled(){return(u(this,zr)??se(this,zr,xi())).promise}static ensure(){if(Z===null){const t=Z=new wa;!Fa&&!fs&&ln(()=>{u(t,Er)||t.flush()})}return Z}apply(){{et=null;return}}schedule(t){var s;if(to=t,(s=t.b)!=null&&s.is_pending&&(t.f&(Ir|Js|mo))!==0&&(t.f&Fr)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if($r!==null&&n===ce&&(fe===null||(fe.f&Je)===0))return;if((r&($n|Dt))!==0){if((r&qe)===0)return;n.f^=qe}}u(this,gt).push(n)}};Er=new WeakMap,Ln=new WeakMap,ar=new WeakMap,Tr=new WeakMap,Nr=new WeakMap,Mr=new WeakMap,yn=new WeakMap,zr=new WeakMap,gt=new WeakMap,ys=new WeakMap,wn=new WeakMap,Kt=new WeakMap,nn=new WeakMap,Ar=new WeakMap,or=new WeakMap,ye=new WeakSet,no=function(){if(this.is_fork)return!0;for(const r of u(this,yn).keys()){for(var t=r,n=!1;t.parent!==null;){if(u(this,nn).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},os=function(){var c,d,f,x;se(this,Er,!0),Vo++>1e3&&(he(this,ye,is).call(this),Tc());for(const v of u(this,wn))u(this,Kt).delete(v),Re(v,Ge),this.schedule(v);for(const v of u(this,Kt))Re(v,Yt),this.schedule(v);const t=u(this,gt);se(this,gt,[]),this.apply();var n=$r=[],r=[],s=la=[];for(const v of t)try{he(this,ye,ro).call(this,v,n,r)}catch(g){throw Ki(v),he(this,ye,no).call(this)||this.discard(),g}if(Z=null,s.length>0){var o=wa.ensure();for(const v of s)o.schedule(v)}if($r=null,la=null,he(this,ye,no).call(this)){he(this,ye,kr).call(this,r),he(this,ye,kr).call(this,n);for(const[v,g]of u(this,nn))Vi(v,g);s.length>0&&he(c=Z,ye,os).call(c);return}const a=he(this,ye,Hi).call(this);if(a){he(this,ye,kr).call(this,r),he(this,ye,kr).call(this,n),he(d=a,ye,ji).call(d,this);return}u(this,wn).clear(),u(this,Kt).clear();for(const v of u(this,Tr))v(this);u(this,Tr).clear(),ds=this,Ko(r),Ko(n),ds=null,(f=u(this,zr))==null||f.resolve();var l=Z;if(u(this,Mr)===0&&(u(this,gt).length===0||l!==null)&&he(this,ye,is).call(this),u(this,gt).length>0)if(l!==null){const v=l;u(v,gt).push(...u(this,gt).filter(g=>!u(v,gt).includes(g)))}else l=this;l!==null&&(un.clear(),he(x=l,ye,os).call(x))},ro=function(t,n,r){t.f^=qe;for(var s=t.first;s!==null;){var o=s.f,a=(o&(Dt|$n))!==0,l=a&&(o&qe)!==0,c=l||(o&dt)!==0||u(this,nn).has(s);if(!c&&s.fn!==null){a?s.f^=qe:(o&Ir)!==0?n.push(s):Qs(s)&&((o&Wt)!==0&&u(this,Kt).add(s),Lr(s));var d=s.first;if(d!==null){s=d;continue}}for(;s!==null;){var f=s.next;if(f!==null){s=f;break}s=s.parent}}},Hi=function(){for(var t=u(this,Ln);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=u(t,Ln)}return null},ji=function(t){var r;for(const[s,o]of t.current)!this.previous.has(s)&&t.previous.has(s)&&this.previous.set(s,t.previous.get(s)),this.current.set(s,o);for(const[s,o]of t.async_deriveds){const a=this.async_deriveds.get(s);a&&o.promise.then(a.resolve).catch(a.reject)}t.async_deriveds.clear(),this.transfer_effects(u(t,wn),u(t,Kt));const n=s=>{var o=s.reactions;if(o!==null&&!((s.f&Je)!==0&&(s.f&(Ge|Yt))===0))for(const c of o){var a=c.f;if((a&Je)!==0)n(c);else{var l=c;a&(Sr|Wt)&&!this.async_deriveds.has(l)&&(u(this,Kt).delete(l),Re(l,Ge),this.schedule(l))}}};for(const s of this.current.keys())n(s);this.oncommit(()=>t.discard()),he(r=t,ye,is).call(r),Z=this,he(this,ye,os).call(this)},kr=function(t){for(var n=0;n<t.length;n+=1)Pi(t[n],u(this,wn),u(this,Kt))},Cc=function(){var x;for(let v=La;v!==null;v=u(v,ar)){var t=v.id<this.id,n=[];for(const[g,[b,w]]of this.current){if(v.current.has(g)){var r=v.current.get(g)[0];if(t&&b!==r)v.current.set(g,[b,w]);else continue}n.push(g)}if(t)for(const[g,b]of this.async_deriveds){const w=v.async_deriveds.get(g);w&&b.promise.then(w.resolve).catch(w.reject)}var s=[...v.current.keys()].filter(g=>!v.current.get(g)[1]);if(!(!u(v,Er)||s.length===0)){var o=s.filter(g=>!this.current.has(g));if(o.length===0)t&&v.discard();else if(n.length>0){if(t)for(const g of u(this,Ar))v.unskip_effect(g,b=>{var w;(b.f&(Wt|Sr))!==0?v.schedule(b):he(w=v,ye,kr).call(w,[b])});v.activate();var a=new Set,l=new Map;for(var c of n)Bi(c,o,a,l);l=new Map;var d=[...v.current].filter(([g,b])=>{const w=this.current.get(g);return w?w[0]!==b[0]||w[1]!==b[1]:!0}).map(([g])=>g);if(d.length>0)for(const g of u(this,ys))(g.f&(xt|dt|_a))===0&&So(g,d,l)&&((g.f&(Sr|Wt))!==0?(Re(g,Ge),v.schedule(g)):u(v,wn).add(g));if(u(v,gt).length>0&&!u(v,or)){v.apply();for(var f of u(v,gt))he(x=v,ye,ro).call(x,f,[],[]);se(v,gt,[])}v.deactivate()}}}},is=function(){if(this.linked){var t=u(this,Ln),n=u(this,ar);t===null?La=n:se(t,ar,n),n===null?wr=t:se(n,Ln,t),this.linked=!1}};let vr=wa;function Ec(e){var t=fs;fs=!0;try{for(var n;;){if(gc(),Z===null)return n;Z.flush()}}finally{fs=t}}function Tc(){try{uc()}catch(e){an(e,to)}}let Vt=null;function Ko(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(xt|dt))===0&&Qs(r)&&(Vt=new Set,Lr(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&rl(r),(Vt==null?void 0:Vt.size)>0)){un.clear();for(const s of Vt){if((s.f&(xt|dt))!==0)continue;const o=[s];let a=s.parent;for(;a!==null;)Vt.has(a)&&(Vt.delete(a),o.push(a)),a=a.parent;for(let l=o.length-1;l>=0;l--){const c=o[l];(c.f&(xt|dt))===0&&Lr(c)}}Vt.clear()}}Vt=null}}function Bi(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const s of e.reactions){const o=s.f;(o&Je)!==0?Bi(s,t,n,r):(o&(Sr|Wt))!==0&&(o&Ge)===0&&So(s,t,r)&&(Re(s,Ge),Co(s))}}function So(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const s of e.deps){if(ha.call(t,s))return!0;if((s.f&Je)!==0&&So(s,t,n))return n.set(s,!0),!0}return n.set(e,!1),!1}function Co(e){Z.schedule(e)}function Vi(e,t){if(!((e.f&Dt)!==0&&(e.f&qe)!==0)){(e.f&Ge)!==0?t.d.push(e):(e.f&Yt)!==0&&t.m.push(e),Re(e,qe);for(var n=e.first;n!==null;)Vi(n,t),n=n.next}}function Ki(e){Re(e,qe);for(var t=e.first;t!==null;)Ki(t),t=t.next}let ba=new Set;const un=new Map;let Ui=!1;function Sn(e,t){var n={f:0,v:e,reactions:null,equals:Ti,rv:0,wv:0};return n}function I(e,t){const n=Sn(e);return ol(n),n}function Nc(e,t=!1,n=!0){var s;const r=Sn(e);return t||(r.equals=Ni),jr&&n&&ze!==null&&ze.l!==null&&((s=ze.l).s??(s.s=[])).push(r),r}function h(e,t,n=!1){fe!==null&&(!Gt||(fe.f&_a)!==0)&&Br()&&(fe.f&(Je|Wt|Sr|_a))!==0&&(fn===null||!fn.has(e))&&hc();let r=n?Ce(t):t;return Dr(e,r,la)}function Dr(e,t,n=null){if(!e.equals(t)){Cn?un.set(e,t):un.has(e)||un.set(e,e.v);var r=vr.ensure();if(r.capture(e,t),(e.f&Je)!==0){const s=e;(e.f&Ge)!==0&&$o(s),et===null&&wo(s)}e.wv=ll(),Wi(e,Ge,n),Br()&&ce!==null&&(ce.f&qe)!==0&&(ce.f&(Dt|$n))===0&&(Pt===null?Fc([e]):Pt.push(e)),!r.is_fork&&ba.size>0&&!Ui&&Mc()}return t}function Mc(){Ui=!1;for(const e of ba){(e.f&qe)!==0&&Re(e,Yt);let t;try{t=Qs(e)}catch{t=!0}t&&Lr(e)}ba.clear()}function Uo(e,t=1){var n=i(e),r=t===1?n++:n--;return h(e,n),r}function vs(e){h(e,e.v+1)}function Wi(e,t,n){var r=e.reactions;if(r!==null)for(var s=Br(),o=r.length,a=0;a<o;a++){var l=r[a],c=l.f;if(!(!s&&l===ce)){var d=(c&Ge)===0;if(d&&Re(l,t),(c&_a)!==0)ba.add(l);else if((c&Je)!==0){var f=l;et==null||et.delete(f),(c&fr)===0&&(c&Rt&&(ce===null||(ce.f&ga)===0)&&(l.f|=fr),Wi(f,Yt,n))}else if(d){var x=l;(c&Wt)!==0&&Vt!==null&&Vt.add(x),n!==null?n.push(x):Co(x)}}}}function Ce(e){if(typeof e!="object"||e===null||cn in e||wi in e)return e;const t=go(e);if(t!==Rl&&t!==Dl)return e;var n=new Map,r=Sa(e),s=I(0),o=dr,a=l=>{if(dr===o)return l();var c=fe,d=dr;Lt(null),Go(o);var f=l();return Lt(c),Go(d),f};return r&&n.set("length",I(e.length)),new Proxy(e,{defineProperty(l,c,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&fc();var f=n.get(c);return f===void 0?a(()=>{var x=I(d.value);return n.set(c,x),x}):h(f,d.value,!0),!0},deleteProperty(l,c){var d=n.get(c);if(d===void 0){if(c in l){const f=a(()=>I(Ke));n.set(c,f),vs(s)}}else h(d,Ke),vs(s);return!0},get(l,c,d){var g;if(c===cn)return e;var f=n.get(c),x=c in l;if(f===void 0&&(!x||(g=Hn(l,c))!=null&&g.writable)&&(f=a(()=>{var b=Ce(x?l[c]:Ke),w=I(b);return w}),n.set(c,f)),f!==void 0){var v=i(f);return v===Ke?void 0:v}return Reflect.get(l,c,d)},getOwnPropertyDescriptor(l,c){var d=Reflect.getOwnPropertyDescriptor(l,c);if(d&&"value"in d){var f=n.get(c);f&&(d.value=i(f))}else if(d===void 0){var x=n.get(c),v=x==null?void 0:x.v;if(x!==void 0&&v!==Ke)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return d},has(l,c){var v;if(c===cn)return!0;var d=n.get(c),f=d!==void 0&&d.v!==Ke||Reflect.has(l,c);if(d!==void 0||ce!==null&&(!f||(v=Hn(l,c))!=null&&v.writable)){d===void 0&&(d=a(()=>{var g=f?Ce(l[c]):Ke,b=I(g);return b}),n.set(c,d));var x=i(d);if(x===Ke)return!1}return f},set(l,c,d,f){var A;var x=n.get(c),v=c in l;if(r&&c==="length")for(var g=d;g<x.v;g+=1){var b=n.get(g+"");b!==void 0?h(b,Ke):g in l&&(b=a(()=>I(Ke)),n.set(g+"",b))}if(x===void 0)(!v||(A=Hn(l,c))!=null&&A.writable)&&(x=a(()=>I(void 0)),h(x,Ce(d)),n.set(c,x));else{v=x.v!==Ke;var w=a(()=>Ce(d));h(x,w)}var S=Reflect.getOwnPropertyDescriptor(l,c);if(S!=null&&S.set&&S.set.call(f,d),!v){if(r&&typeof c=="string"){var C=n.get("length"),H=Number(c);Number.isInteger(H)&&H>=C.v&&h(C,H+1)}vs(s)}return!0},ownKeys(l){i(s);var c=Reflect.ownKeys(l).filter(x=>{var v=n.get(x);return v===void 0||v.v!==Ke});for(var[d,f]of n)f.v!==Ke&&!(d in l)&&c.push(d);return c},setPrototypeOf(){vc()}})}function Wo(e){try{if(e!==null&&typeof e=="object"&&cn in e)return e[cn]}catch{}return e}function qi(e,t){return Object.is(Wo(e),Wo(t))}var gs,Gi,Yi,Ji;function zc(){if(gs===void 0){gs=window,Gi=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Yi=Hn(t,"firstChild").get,Ji=Hn(t,"nextSibling").get,jo(e)&&(e[Qa]=void 0,e[oa]=null,e[eo]=void 0,e.__e=void 0),jo(n)&&(n[ss]=void 0)}}function dn(e=""){return document.createTextNode(e)}function qt(e){return Yi.call(e)}function Zs(e){return Ji.call(e)}function y(e,t){return qt(e)}function B(e,t=!1){{var n=qt(e);return n instanceof Comment&&n.data===""?Zs(n):n}}function ee(e,t=!1){return qt(e)}function p(e,t=1,n=!1){let r=e;for(;t--;)r=Zs(r);return r}function Ac(e){e.textContent=""}function Xi(){return!1}function Ea(e,t,n){return t==null||t===Ci?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Pc(e){var t=ce;if(t===null)return fe.f|=jn,e;if((t.f&Fr)===0&&(t.f&Ir)===0)throw e;an(e,t)}function an(e,t){if(!(t!==null&&(t.f&xt)!==0)){for(;t!==null;){if((t.f&Za)!==0&&(t.f&(xt|pa))===0){if((t.f&Fr)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e}}function Zi(e){ce===null&&(fe===null&&cc(),lc()),Cn&&ic()}function Ic(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Jt(e,t){var n=ce;n!==null&&(n.f&dt)!==0&&(e|=dt);var r={ctx:ze,deps:null,nodes:null,f:e|Ge|Rt,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};Z==null||Z.register_created_effect(r);var s=r;if((e&Ir)!==0)$r!==null?$r.push(r):vr.ensure().schedule(r);else if(t!==null){try{Lr(r)}catch(a){throw tt(r),a}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&Hr)===0&&(s=s.first,(e&Wt)!==0&&(e&Kn)!==0&&s!==null&&(s.f|=Kn))}if(s!==null&&(s.parent=n,n!==null&&Ic(s,n),fe!==null&&(fe.f&Je)!==0&&(e&$n)===0)){var o=fe;(o.effects??(o.effects=[])).push(s)}return r}function Eo(){return fe!==null&&!Gt}function Ta(e){const t=Jt(Js,null);return Re(t,qe),t.teardown=e,t}function Nt(e){Zi();var t=ce.f,n=!fe&&(t&Dt)!==0&&ze!==null&&!ze.i;if(n){var r=ze;(r.e??(r.e=[])).push(e)}else return Qi(e)}function Qi(e){return Jt(Ir|yi,e)}function Oc(e){return Zi(),Jt(Js|yi,e)}function Rc(e){vr.ensure();const t=Jt($n|Hr,e);return(n={})=>new Promise(r=>{n.outro?ur(t,()=>{tt(t),r(void 0)}):(tt(t),r(void 0))})}function Na(e){return Jt(Ir,e)}function Dc(e){return Jt(Sr|Hr,e)}function To(e,t=0){return Jt(Js|t,e)}function X(e,t=[],n=[],r=[]){Ri(r,t,n,s=>{Jt(Js,()=>{e(...s.map(i))})})}function Kr(e,t=0){var n=Jt(Wt|t,e);return n}function el(e,t=0){var n=Jt(mo|t,e);return n}function mt(e){return Jt(Dt|Hr,e)}function tl(e){var t=e.teardown;if(t!==null){const n=Cn,r=fe;qo(!0),Lt(null);try{t.call(null)}catch(s){an(s,e.parent)}finally{qo(n),Lt(r)}}}function No(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const s=n.ac;s!==null&&Vr(()=>{s.abort(Xs)});var r=n.next;(n.f&$n)!==0?n.parent=null:tt(n,t),n=r}}function Lc(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Dt)===0&&tt(t),t=n}}function tt(e,t=!0){var n=!1;(t||(e.f&jl)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(nl(e.nodes.start,e.nodes.end),n=!0),e.f|=pa,No(e,t&&!n),ms(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const o of r)o.stop();tl(e),e.f^=pa,e.f|=xt;var s=e.parent;s!==null&&s.first!==null&&rl(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function nl(e,t){for(;e!==null;){var n=e===t?null:Zs(e);e.remove(),e=n}}function rl(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function ur(e,t,n=!0){var r=[];e.f|=bo,sl(e,r,!0);var s=()=>{n&&tt(e),t&&t()},o=r.length;if(o>0){var a=()=>--o||s();for(var l of r)l.out(a)}else s()}function sl(e,t,n){if((e.f&dt)===0){e.f^=dt;var r=e.nodes&&e.nodes.t;if(r!==null)for(const l of r)(l.is_global||n)&&t.push(l);for(var s=e.first;s!==null;){var o=s.next;if((s.f&$n)===0){var a=(s.f&Kn)!==0||(s.f&Dt)!==0&&(e.f&Wt)!==0;sl(s,t,a?n:!1)}s=o}}}function xa(e){e.f&=~bo,al(e,!0)}function al(e,t){if((e.f&bo)===0&&(e.f&dt)!==0){e.f^=dt,(e.f&qe)===0&&(Re(e,Ge),vr.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,s=(n.f&Kn)!==0||(n.f&Dt)!==0;al(n,s?t:!1),n=r}var o=e.nodes&&e.nodes.t;if(o!==null)for(const a of o)(a.is_global||t)&&a.in()}}function Mo(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var s=n===r?null:Zs(n);t.append(n),n=s}}let ca=!1,Cn=!1;function qo(e){Cn=e}let fe=null,Gt=!1;function Lt(e){fe=e}let ce=null;function Ft(e){ce=e}let fn=null;function ol(e){fe!==null&&(fn??(fn=new Set)).add(e)}let bt=null,Et=0,Pt=null;function Fc(e){Pt=e}let il=1,rr=0,dr=rr;function Go(e){dr=e}function ll(){return++il}function Qs(e){var t=e.f;if((t&Ge)!==0)return!0;if(t&Je&&(e.f&=~fr),(t&Yt)!==0){for(var n=e.deps,r=n.length,s=0;s<r;s++){var o=n[s];if(Qs(o)&&Li(o),o.wv>e.wv)return!0}(t&Rt)!==0&&et===null&&Re(e,qe)}return!1}function cl(e,t,n=!0){var r=e.reactions;if(r!==null&&!(fn!==null&&fn.has(e)))for(var s=0;s<r.length;s++){var o=r[s];(o.f&Je)!==0?cl(o,t,!1):t===o&&(n?Re(o,Ge):(o.f&qe)!==0&&Re(o,Yt),Co(o))}}function ul(e){var t=bt,n=Et,r=Pt,s=fe,o=fn,a=ze,l=Gt,c=dr,d=e.f;bt=null,Et=0,Pt=null,fe=(d&(Dt|$n))===0?e:null,fn=null,Or(e.ctx),Gt=!1,dr=++rr,e.ac!==null&&(Vr(()=>{e.ac.abort(Xs)}),e.ac=null);try{e.f|=ga;var f=e.fn,x=f();e.f|=Fr;var v=Yo(e);if(Br()&&Pt!==null&&!Gt&&v!==null&&(e.f&(Je|Yt|Ge))===0)for(var g=0;g<Pt.length;g++)cl(Pt[g],e);if(s!==null&&s!==e){if(rr++,s.deps!==null)for(let b=0;b<n;b+=1)s.deps[b].rv=rr;if(t!==null)for(const b of t)b.rv=rr;Pt!==null&&(r===null?r=Pt:r.push(...Pt))}return(e.f&jn)!==0&&(e.f^=jn),x}catch(b){return Yo(e),Pc(b)}finally{e.f^=ga,bt=t,Et=n,Pt=r,fe=s,fn=o,Or(a),Gt=l,dr=c}}function Yo(e){var s;var t=e.deps,n=Z==null?void 0:Z.is_fork;if(bt!==null){var r;if(n||ms(e,Et),t!==null&&Et>0)for(t.length=Et+bt.length,r=0;r<bt.length;r++)t[Et+r]=bt[r];else e.deps=t=bt;if(Eo()&&(e.f&Rt)!==0)for(r=Et;r<t.length;r++)((s=t[r]).reactions??(s.reactions=[])).push(e)}else!n&&t!==null&&Et<t.length&&(ms(e,Et),t.length=Et);return t}function Hc(e,t){let n=t.reactions;if(n!==null){var r=Ol.call(n,e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(t.f&Je)!==0&&(bt===null||!ha.call(bt,t))){var o=t;(o.f&Rt)!==0&&(o.f^=Rt,o.f&=~fr),o.v!==Ke&&wo(o),o.ac!==null&&Vr(()=>{o.ac.abort(Xs),o.ac=null,Re(o,Ge)}),$c(o),ms(o,0)}}function ms(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)Hc(e,n[r])}function Lr(e){var t=e.f;if((t&xt)===0){Re(e,qe);var n=ce,r=ca;ce=e,ca=(t&(Dt|$n))===0;try{(t&(Wt|mo))!==0?Lc(e):No(e),tl(e);var s=ul(e);e.teardown=typeof s=="function"?s:null,e.wv=il;var o}finally{ca=r,ce=n}}}async function jc(){await Promise.resolve(),Ec()}function i(e){var t=e.f,n=(t&Je)!==0;if(fe!==null&&!Gt){var r=ce!==null&&(ce.f&xt)!==0;if(!r&&(fn===null||!fn.has(e))){var s=fe.deps;if((fe.f&ga)!==0)e.rv<rr&&(e.rv=rr,bt===null&&s!==null&&s[Et]===e?Et++:bt===null?bt=[e]:bt.push(e));else{fe.deps??(fe.deps=[]),ha.call(fe.deps,e)||fe.deps.push(e);var o=e.reactions;o===null?e.reactions=[fe]:ha.call(o,fe)||o.push(fe)}}}if(Cn&&un.has(e))return un.get(e);if(n){var a=e;if(Cn){var l=a.v;return((a.f&qe)===0&&a.reactions!==null||fl(a))&&(l=$o(a)),un.set(a,l),l}var c=(a.f&Rt)===0&&!Gt&&fe!==null&&(ca||(fe.f&Rt)!==0),d=(a.f&Fr)===0;Qs(a)&&(c&&(a.f|=Rt),Li(a)),c&&!d&&(Fi(a),dl(a))}if(et!=null&&et.has(e))return et.get(e);if((e.f&jn)!==0)throw e.v;return e.v}function dl(e){if(e.f|=Rt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Je)!==0&&(t.f&Rt)===0&&(Fi(t),dl(t))}function fl(e){if(e.v===Ke)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(un.has(t)||(t.f&Je)!==0&&fl(t))return!0;return!1}function En(e){var t=Gt;try{return Gt=!0,e()}finally{Gt=t}}function er(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(cn in e)so(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&cn in n&&so(n)}}}function so(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{so(e[r],t)}catch{}const n=go(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=bi(n);for(let s in r){const o=r[s].get;if(o)try{o.call(e)}catch{}}}}}function Bc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const Vc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Kc(e){return Vc.includes(e)}const Uc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function Wc(e){return e=e.toLowerCase(),Uc[e]??e}const qc=["touchstart","touchmove"];function Gc(e){return qc.includes(e)}const sr=Symbol("events"),vl=new Set,ao=new Set;function hl(e,t,n,r={}){function s(o){if(r.capture||oo.call(t,o),!o.cancelBubble)return Vr(()=>n==null?void 0:n.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ln(()=>{t.addEventListener(e,s,r)}):t.addEventListener(e,s,r),s}function hr(e,t,n,r,s){var o={capture:r,passive:s},a=hl(e,t,n,o);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&Ta(()=>{t.removeEventListener(e,a,o)})}function P(e,t,n){(t[sr]??(t[sr]={}))[e]=n}function Ht(e){for(var t=0;t<e.length;t++)vl.add(e[t]);for(var n of ao)n(e)}let Ha=null,ja=!1;function oo(e){var w,S;var t=this,n=t.ownerDocument,r=e.type,s=((w=e.composedPath)==null?void 0:w.call(e))||[],o=s[0]||e.target;Ha=e,ja||(ja=!0,setTimeout(()=>{ja=!1,Ha=null}));var a=0,l=Ha===e&&e[sr];if(l){var c=s.indexOf(l);if(c!==-1&&(t===document||t===window)){e[sr]=t;return}var d=s.indexOf(t);if(d===-1)return;c<=d&&(a=c)}if(o=s[a]||e.target,o!==t){mi(e,"currentTarget",{configurable:!0,get(){return o||n}});var f=fe,x=ce;Lt(null),Ft(null);try{for(var v,g=[];o!==null&&o!==t;){try{var b=(S=o[sr])==null?void 0:S[r];b!=null&&(!o.disabled||e.target===o)&&b.call(o,e)}catch(C){v?g.push(C):v=C}if(e.cancelBubble)break;a++,o=a<s.length?s[a]:null}if(v){for(let C of g)queueMicrotask(()=>{throw C});throw v}}finally{e[sr]=t,delete e.currentTarget,Lt(f),Ft(x)}}}var _i;const Ba=((_i=globalThis==null?void 0:globalThis.window)==null?void 0:_i.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function Yc(e){return(Ba==null?void 0:Ba.createHTML(e))??e}function pl(e){var t=Ea("template");return t.innerHTML=Yc(e.replaceAll("<!>","<!---->")),t.content}function Un(e,t){var n=ce;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function z(e,t){var n=(t&Xl)!==0,r=(t&Zl)!==0,s,o=!e.startsWith("<!>");return()=>{s===void 0&&(s=pl(o?e:"<!>"+e),n||(s=qt(s)));var a=r||Gi?document.importNode(s,!0):s.cloneNode(!0);if(n){var l=qt(a),c=a.lastChild;Un(l,c)}else Un(a,a);return a}}function Jc(e,t,n="svg"){var r=!e.startsWith("<!>"),s=`<${n}>${r?e:"<!>"+e}</${n}>`,o;return()=>{if(!o){var a=pl(s),l=qt(a);o=qt(l)}var c=o.cloneNode(!0);return Un(c,c),c}}function _l(e,t){return Jc(e,t,"svg")}function Jo(e=""){{var t=dn(e+"");return Un(t,t),t}}function Q(){var e=document.createDocumentFragment(),t=document.createComment(""),n=dn();return e.append(t,n),Un(t,n),e}function m(e,t){e!==null&&e.before(t)}function Xc(e){let t=0,n=Sn(0),r;return()=>{Eo()&&(i(n),To(()=>(t===0&&(r=En(()=>e(()=>vs(n)))),t+=1,()=>{ln(()=>{t-=1,t===0&&(r==null||r(),r=void 0,vs(n))})})))}}var Zc=Kn|Hr;function Qc(e,t,n,r){new eu(e,t,n,r)}var It,_o,Ot,ir,lt,$t,ct,St,rn,lr,Fn,Pr,ws,ks,kn,ka,Ne,tu,nu,io,ru,lo,ls,ua,co,uo;class eu{constructor(t,n,r,s){V(this,Ne);it(this,"parent");it(this,"is_pending",!1);it(this,"transform_error");V(this,It);V(this,_o,null);V(this,Ot);V(this,ir);V(this,lt);V(this,$t,null);V(this,ct,null);V(this,St,null);V(this,rn,null);V(this,lr,0);V(this,Fn,0);V(this,Pr,!1);V(this,ws,new Set);V(this,ks,new Set);V(this,kn,null);V(this,ka,Xc(()=>(se(this,kn,Sn(u(this,lr))),()=>{se(this,kn,null)})));var o;se(this,It,t),se(this,Ot,n),se(this,ir,a=>{var l=ce;l.b=this,l.f|=Za,r(a)}),this.parent=ce.b,this.transform_error=s??((o=this.parent)==null?void 0:o.transform_error)??(a=>a),se(this,lt,Kr(()=>{he(this,Ne,lo).call(this)},Zc))}defer_effect(t){Pi(t,u(this,ws),u(this,ks))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!u(this,Ot).pending}update_pending_count(t,n){he(this,Ne,co).call(this,t,n),se(this,lr,u(this,lr)+t),!(!u(this,kn)||u(this,Pr))&&(se(this,Pr,!0),ln(()=>{se(this,Pr,!1),u(this,kn)&&Dr(u(this,kn),u(this,lr))}))}get_effect_pending(){return u(this,ka).call(this),i(u(this,kn))}error(t){if(!u(this,Ot).onerror&&!u(this,Ot).failed)throw t;Z!=null&&Z.is_fork?(u(this,$t)&&Z.skip_effect(u(this,$t)),u(this,ct)&&Z.skip_effect(u(this,ct)),u(this,St)&&Z.skip_effect(u(this,St)),Z.oncommit(()=>{he(this,Ne,uo).call(this,t)})):he(this,Ne,uo).call(this,t)}}It=new WeakMap,_o=new WeakMap,Ot=new WeakMap,ir=new WeakMap,lt=new WeakMap,$t=new WeakMap,ct=new WeakMap,St=new WeakMap,rn=new WeakMap,lr=new WeakMap,Fn=new WeakMap,Pr=new WeakMap,ws=new WeakMap,ks=new WeakMap,kn=new WeakMap,ka=new WeakMap,Ne=new WeakSet,tu=function(){try{se(this,$t,mt(()=>u(this,ir).call(this,u(this,It))))}catch(t){this.error(t)}},nu=function(t){const n=u(this,Ot).failed,{reset:r,invoke_onerror:s}=he(this,Ne,io).call(this,t);ln(s),n&&se(this,St,mt(()=>{n(u(this,It),()=>t,()=>r)}))},io=function(t){var n=!1,r=!1;const s=()=>{if(n){rc();return}n=!0,r&&pc(),u(this,St)!==null&&ur(u(this,St),()=>{se(this,St,null)}),he(this,Ne,ua).call(this,()=>{he(this,Ne,lo).call(this)})};return{reset:s,invoke_onerror:()=>{var a,l;try{r=!0,(l=(a=u(this,Ot)).onerror)==null||l.call(a,t,s),r=!1}catch(c){an(c,u(this,lt)&&u(this,lt).parent)}}}},ru=function(){const t=u(this,Ot).pending;t&&(this.is_pending=!0,se(this,ct,mt(()=>t(u(this,It)))),ln(()=>{var n=se(this,rn,document.createDocumentFragment()),r=dn(),s=!1;if(n.append(r),se(this,$t,he(this,Ne,ua).call(this,()=>{try{return mt(()=>u(this,ir).call(this,r))}catch(o){try{this.error(o),s=!0}catch(a){an(a,u(this,lt).parent)}return null}})),u(this,$t)===null){se(this,rn,null),s&&he(this,Ne,ls).call(this,Z);return}u(this,Fn)===0&&(u(this,It).before(n),se(this,rn,null),ur(u(this,ct),()=>{se(this,ct,null)}),he(this,Ne,ls).call(this,Z))}))},lo=function(){try{if(this.is_pending=this.has_pending_snippet(),se(this,Fn,0),se(this,lr,0),se(this,$t,mt(()=>{u(this,ir).call(this,u(this,It))})),u(this,Fn)>0){var t=se(this,rn,document.createDocumentFragment());Mo(u(this,$t),t);const n=u(this,Ot).pending;se(this,ct,mt(()=>n(u(this,It))))}else he(this,Ne,ls).call(this,Z)}catch(n){this.error(n)}},ls=function(t){this.is_pending=!1,t.transfer_effects(u(this,ws),u(this,ks))},ua=function(t){var n=ce,r=fe,s=ze;Ft(u(this,lt)),Lt(u(this,lt)),Or(u(this,lt).ctx);try{return vr.ensure(),t()}finally{Ft(n),Lt(r),Or(s)}},co=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&he(r=this.parent,Ne,co).call(r,t,n);return}se(this,Fn,u(this,Fn)+t),u(this,Fn)===0&&(he(this,Ne,ls).call(this,n),u(this,ct)&&ur(u(this,ct),()=>{se(this,ct,null)}),u(this,rn)&&(u(this,It).before(u(this,rn)),se(this,rn,null)))},uo=function(t){u(this,$t)&&(tt(u(this,$t)),se(this,$t,null)),u(this,ct)&&(tt(u(this,ct)),se(this,ct,null)),u(this,St)&&(tt(u(this,St)),se(this,St,null));let n=u(this,Ot).failed;const r=s=>{const{reset:o,invoke_onerror:a}=he(this,Ne,io).call(this,s);a(),n&&se(this,St,he(this,Ne,ua).call(this,()=>{try{return mt(()=>{var l=ce;l.b=this,l.f|=Za,n(u(this,It),()=>s,()=>o)})}catch(l){return an(l,u(this,lt).parent),null}}))};ln(()=>{var s;try{s=this.transform_error(t)}catch(o){an(o,u(this,lt)&&u(this,lt).parent);return}s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(r,o=>an(o,u(this,lt)&&u(this,lt).parent)):r(s)})};function q(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[ss]??(e[ss]=e.nodeValue))&&(e[ss]=n,e.nodeValue=`${n}`)}function su(e,t){return au(e,t)}const aa=new Map;function au(e,{target:t,anchor:n,props:r={},events:s,context:o,intro:a=!0,transformError:l}){zc();var c=void 0,d=Rc(()=>{var f=n??t.appendChild(dn());Qc(f,{pending:()=>{}},g=>{ft({});var b=ze;o&&(b.c=o),s&&(r.$$events=s),c=e(g,r)||yo(),vt()},l);var x=new Set,v=g=>{for(var b=0;b<g.length;b++){var w=g[b];if(!x.has(w)){x.add(w);var S=Gc(w);for(const A of[t,document]){var C=aa.get(A);C===void 0&&(C=new Map,aa.set(A,C));var H=C.get(w);H===void 0?(A.addEventListener(w,oo,{passive:S}),C.set(w,1)):C.set(w,H+1)}}}};return v(Ca(vl)),ao.add(v),()=>{var S;for(var g of x)for(const C of[t,document]){var b=aa.get(C),w=b.get(g);--w==0?(C.removeEventListener(g,oo),b.delete(g),b.size===0&&aa.delete(C)):b.set(g,w)}ao.delete(v),f!==n&&((S=f.parentNode)==null||S.removeChild(f))}});return ou.set(c,d),c}let ou=new WeakMap;var Ut,sn,Ct,cr,$s,Ss,$a;class Ma{constructor(t,n=!0){it(this,"anchor");V(this,Ut,new Map);V(this,sn,new Map);V(this,Ct,new Map);V(this,cr,new Set);V(this,$s,!0);V(this,Ss,t=>{if(u(this,Ut).has(t)){var n=u(this,Ut).get(t),r=u(this,sn).get(n);if(r)xa(r),u(this,cr).delete(n);else{var s=u(this,Ct).get(n);s&&(xa(s.effect),u(this,sn).set(n,s.effect),u(this,Ct).delete(n),s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[o,a]of u(this,Ut)){if(u(this,Ut).delete(o),o===t)break;const l=u(this,Ct).get(a);l&&(tt(l.effect),u(this,Ct).delete(a))}for(const[o,a]of u(this,sn)){if(o===n||u(this,cr).has(o))continue;const l=()=>{if(Array.from(u(this,Ut).values()).includes(o)){var d=document.createDocumentFragment();Mo(a,d),d.append(dn()),u(this,Ct).set(o,{effect:a,fragment:d})}else tt(a);u(this,cr).delete(o),u(this,sn).delete(o)};u(this,$s)||!r?(u(this,cr).add(o),ur(a,l,!1)):l()}}});V(this,$a,t=>{u(this,Ut).delete(t);const n=Array.from(u(this,Ut).values());for(const[r,s]of u(this,Ct))n.includes(r)||(tt(s.effect),u(this,Ct).delete(r))});this.anchor=t,se(this,$s,n)}ensure(t,n){var r=Z,s=Xi();if(n&&!u(this,sn).has(t)&&!u(this,Ct).has(t))if(s){var o=document.createDocumentFragment(),a=dn();o.append(a),u(this,Ct).set(t,{effect:mt(()=>n(a)),fragment:o})}else u(this,sn).set(t,mt(()=>n(this.anchor)));if(u(this,Ut).set(r,t),s){for(const[l,c]of u(this,sn))l===t?r.unskip_effect(c):r.skip_effect(c);for(const[l,c]of u(this,Ct))l===t?r.unskip_effect(c.effect):r.skip_effect(c.effect);r.oncommit(u(this,Ss)),r.ondiscard(u(this,$a))}else u(this,Ss).call(this,r)}}Ut=new WeakMap,sn=new WeakMap,Ct=new WeakMap,cr=new WeakMap,$s=new WeakMap,Ss=new WeakMap,$a=new WeakMap;function F(e,t,n=!1){var r=new Ma(e),s=n?Kn:0;function o(a,l){r.ensure(a,l)}Kr(()=>{var a=!1;t((l,c=0)=>{a=!0,o(c,l)}),a||o(-1,null)},s)}const iu=Symbol("NaN");function lu(e,t,n){var r=new Ma(e),s=!Br();Kr(()=>{var o=t();o!==o&&(o=iu),s&&o!==null&&typeof o=="object"&&(o={}),r.ensure(o,n)})}function gl(e,t){return t}function cu(e,t,n){for(var r=[],s=t.length,o,a=t.length,l=0;l<s;l++){let x=t[l];ur(x,()=>{if(o){if(o.pending.delete(x),o.done.add(x),o.pending.size===0){var v=e.outrogroups;fo(e,Ca(o.done)),v.delete(o),v.size===0&&(e.outrogroups=null)}}else a-=1},!1)}if(a===0){var c=r.length===0&&n!==null&&e.pending.size===0;if(c){var d=n,f=d.parentNode;Ac(f),f.append(d),e.items.clear()}fo(e,t,!c)}else o={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(o)}function fo(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const a of e.pending.values())for(const l of a)r.add(e.items.get(l).e)}for(var s=0;s<t.length;s++){var o=t[s];if(r!=null&&r.has(o)){o.f|=on;const a=document.createDocumentFragment();Mo(o,a)}else tt(t[s],n)}}var Xo;function je(e,t,n,r,s,o=null){var a=e,l=new Map,c=(t&$i)!==0;if(c){var d=e;a=d.appendChild(dn())}var f=null,x=ko(()=>{var A=n();return Sa(A)?A:A==null?[]:Ca(A)}),v,g=new Map,b=!0;function w(A){(H.effect.f&xt)===0&&(H.pending.delete(A),H.fallback=f,uu(H,v,a,t,r),f!==null&&(v.length===0?(f.f&on)===0?xa(f):(f.f^=on,cs(f,null,a)):ur(f,()=>{f=null})))}function S(A){H.pending.delete(A)}var C=Kr(()=>{v=i(x);for(var A=v.length,J=new Set,E=Z,$=Xi(),M=0;M<A;M+=1){var G=v[M],D=r(G,M),U=b?null:l.get(D);U?(U.v&&Dr(U.v,G),U.i&&Dr(U.i,M),$&&E.unskip_effect(U.e)):(U=du(l,b?a:Xo??(Xo=dn()),G,D,M,s,t,n),b||(U.e.f|=on),l.set(D,U)),J.add(D)}if(A===0&&o&&!f&&(b?f=mt(()=>o(a)):(f=mt(()=>o(Xo??(Xo=dn()))),f.f|=on)),A>J.size&&oc(),!b)if(g.set(E,J),$){for(const[L,Y]of l)J.has(L)||E.skip_effect(Y.e);E.oncommit(w),E.ondiscard(S)}else w(E);i(x)}),H={effect:C,items:l,pending:g,outrogroups:null,fallback:f};b=!1}function ts(e){for(;e!==null&&(e.f&Dt)===0;)e=e.next;return e}function uu(e,t,n,r,s){var U,L,Y,ue,me,De,Ee,nt,T;var o=(r&Ul)!==0,a=t.length,l=e.items,c=ts(e.effect.first),d,f=null,x,v=[],g=[],b,w,S,C;if(o)for(C=0;C<a;C+=1)b=t[C],w=s(b,C),S=l.get(w).e,(S.f&on)===0&&((L=(U=S.nodes)==null?void 0:U.a)==null||L.measure(),(x??(x=new Set)).add(S));for(C=0;C<a;C+=1){if(b=t[C],w=s(b,C),S=l.get(w).e,e.outrogroups!==null)for(const j of e.outrogroups)j.pending.delete(S),j.done.delete(S);if((S.f&dt)!==0&&(xa(S),o&&((ue=(Y=S.nodes)==null?void 0:Y.a)==null||ue.unfix(),(x??(x=new Set)).delete(S))),(S.f&on)!==0)if(S.f^=on,S===c)cs(S,null,n);else{var H=f?f.next:c;S===e.effect.last&&(e.effect.last=S.prev),S.prev&&(S.prev.next=S.next),S.next&&(S.next.prev=S.prev),Rn(e,f,S),Rn(e,S,H),cs(S,H,n),f=S,v=[],g=[],c=ts(f.next);continue}if(S!==c){if(d!==void 0&&d.has(S)){if(v.length<g.length){var A=g[0],J;f=A.prev;var E=v[0],$=v[v.length-1];for(J=0;J<v.length;J+=1)cs(v[J],A,n);for(J=0;J<g.length;J+=1)d.delete(g[J]);Rn(e,E.prev,$.next),Rn(e,f,E),Rn(e,$,A),c=A,f=$,C-=1,v=[],g=[]}else d.delete(S),cs(S,c,n),Rn(e,S.prev,S.next),Rn(e,S,f===null?e.effect.first:f.next),Rn(e,f,S),f=S;continue}for(v=[],g=[];c!==null&&c!==S;)(d??(d=new Set)).add(c),g.push(c),c=ts(c.next);if(c===null)continue}(S.f&on)===0&&v.push(S),f=S,c=ts(S.next)}if(e.outrogroups!==null){for(const j of e.outrogroups)j.pending.size===0&&(fo(e,Ca(j.done)),(me=e.outrogroups)==null||me.delete(j));e.outrogroups.size===0&&(e.outrogroups=null)}if(c!==null||d!==void 0){var M=[];if(d!==void 0)for(S of d)(S.f&dt)===0&&M.push(S);for(;c!==null;)(c.f&dt)===0&&c!==e.fallback&&M.push(c),c=ts(c.next);var G=M.length;if(G>0){var D=(r&$i)!==0&&a===0?n:null;if(o){for(C=0;C<G;C+=1)(Ee=(De=M[C].nodes)==null?void 0:De.a)==null||Ee.measure();for(C=0;C<G;C+=1)(T=(nt=M[C].nodes)==null?void 0:nt.a)==null||T.fix()}cu(e,M,D)}}o&&ln(()=>{var j,_e;if(x!==void 0)for(S of x)(_e=(j=S.nodes)==null?void 0:j.a)==null||_e.apply()})}function du(e,t,n,r,s,o,a,l){var c=(a&Vl)!==0?(a&Wl)===0?Nc(n,!1,!1):Sn(n):null,d=(a&Kl)!==0?Sn(s):null;return{v:c,i:d,e:mt(()=>(o(t,c??n,d??s,l),()=>{e.delete(r)}))}}function cs(e,t,n){if(e.nodes)for(var r=e.nodes.start,s=e.nodes.end,o=t&&(t.f&on)===0?t.nodes.start:n;r!==null;){var a=Zs(r);if(o.before(r),r===s)return;r=a}}function Rn(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function fu(e,t,n=!1,r=!1,s=!1,o=!1){var a=e,l="";if(n)var c=e;X(()=>{var d=ce;if(l!==(l=t()??"")){if(n){d.nodes=null,c.innerHTML=l,l!==""&&Un(qt(c),c.lastChild);return}if(d.nodes!==null&&(nl(d.nodes.start,d.nodes.end),d.nodes=null),l!==""){var f=r?Ei:s?Ql:void 0,x=Ea(r?"svg":s?"math":"template",f);x.innerHTML=l;var v=r||s?x:x.content;if(Un(qt(v),v.lastChild),r||s)for(;qt(v);)a.before(qt(v));else a.before(v)}}})}function ae(e,t,n,r,s){var l,c;if((l=t.$$host)!=null&&l.$$shadowRoot){const d=Ea("slot");m(e,d);return}var o=(c=t.$$slots)==null?void 0:c[n],a=!1;o===!0&&(o=t.children,a=!0),o===void 0||o(e,a?()=>r:r)}function Zo(e,t,n){var r=new Ma(e);Kr(()=>{var s=t()??null;r.ensure(s,s&&(o=>n(o,s)))},Kn)}function vu(e,t,n,r,s,o){var a=null,l=e,c=new Ma(l,!1);Kr(()=>{const d=t()||null;var f=Ei;if(d===null){c.ensure(null,null);return}return c.ensure(d,x=>{if(d){if(a=Ea(d,f),Un(a,a),r){var v=null,g=a.appendChild(dn());r(a,g),v==null||v.remove()}ce.nodes.end=a,x.before(a)}}),()=>{}},Kn),Ta(()=>{})}function hu(e,t){var n=void 0,r;el(()=>{n!==(n=t())&&(r&&(tt(r),r=null),n&&(r=mt(()=>{Na(()=>n(e))})))})}function ml(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=ml(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function pu(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=ml(e))&&(r&&(r+=" "),r+=t);return r}function _u(e){return typeof e=="object"?pu(e):e??""}const Qo=[...` 	
\r\f \v\uFEFF`];function gu(e,t,n){var r=e==null?"":""+e;if(t&&(r=r?r+" "+t:t),n){for(var s of Object.keys(n))if(n[s])r=r?r+" "+s:s;else if(r.length)for(var o=s.length,a=0;(a=r.indexOf(s,a))>=0;){var l=a+o;(a===0||Qo.includes(r[a-1]))&&(l===r.length||Qo.includes(r[l]))?r=(a===0?"":r.substring(0,a))+r.substring(l+1):a=l}}return r===""?null:r}function ei(e,t=!1){var n=t?" !important;":";",r="";for(var s of Object.keys(e)){var o=e[s];o!=null&&o!==""&&(r+=" "+s+": "+o+n)}return r}function Va(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function mu(e,t){if(t){var n="",r,s;if(Array.isArray(t)?(r=t[0],s=t[1]):r=t,e){e=String(e).replaceAll(/\/\*.*?\*\//g,"").trim();var o=!1,a=0,l=!1,c=[];r&&c.push(...Object.keys(r).map(Va)),s&&c.push(...Object.keys(s).map(Va));var d=0,f=-1;const w=e.length;for(var x=0;x<w;x++){var v=e[x];if(l?v==="/"&&e[x-1]==="*"&&(l=!1):o?o===v&&(o=!1):v==="/"&&e[x+1]==="*"?l=!0:v==='"'||v==="'"?o=v:v==="("?a++:v===")"&&a--,!l&&o===!1&&a===0){if(v===":"&&f===-1)f=x;else if(v===";"||x===w-1){if(f!==-1){var g=Va(e.substring(d,f).trim());if(!c.includes(g)){v!==";"&&x++;var b=e.substring(d,x).trim();n+=" "+b+";"}}d=x+1,f=-1}}}}return r&&(n+=ei(r)),s&&(n+=ei(s,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Tt(e,t,n,r,s,o){var a=e[Qa];if(a!==n||a===void 0){var l=gu(n,r,o);l==null?e.removeAttribute("class"):t?e.className=l:e.setAttribute("class",l),e[Qa]=n}else if(o&&s!==o)for(var c in o){var d=!!o[c];(s==null||d!==!!s[c])&&e.classList.toggle(c,d)}return o}function Ka(e,t={},n,r){for(var s in n){var o=n[s];t[s]!==o&&(n[s]==null?e.style.removeProperty(s):e.style.setProperty(s,o,r))}}function hs(e,t,n,r){var s=e[eo];if(s!==t){var o=mu(t,r);o==null?e.removeAttribute("style"):e.style.cssText=o,e[eo]=t}else r&&(Array.isArray(r)?(Ka(e,n==null?void 0:n[0],r[0]),Ka(e,n==null?void 0:n[1],r[1],"important")):Ka(e,n,r));return r}function bl(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function ti(e,t){var n=!("__defaultValue"in e);!n&&e.__defaultValue===t||(e.__defaultValue=t,xl(e,!n||"__value"in e))}function xl(e,t){var n=e.__defaultValue,r=e.multiple,s=r?n??[]:null;if(!(r&&!Sa(s))){var o=e.selectedIndex,a=t&&r?new Set(e.selectedOptions):null;for(var l of e.options){var c=Cr(l);bl(l,r?s.includes(c):qi(c,n))}if(t)if(a!==null)for(l of e.options){var d=a.has(l);l.selected!==d&&(l.selected=d)}else e.selectedIndex!==o&&(e.selectedIndex=o)}}function bs(e,t,n=!1){if(e.multiple){if(t==null)return;if(!Sa(t))return nc();for(var r of e.options)r.selected=t.includes(Cr(r));return}for(r of e.options){var s=Cr(r);if(qi(s,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function ps(e){var t=new MutationObserver(n=>{n.every(bu)||("__defaultValue"in e&&xl(e,!1),"__value"in e&&bs(e,e.__value))});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),Ta(()=>{t.disconnect()})}function vo(e,t,n=t){var r=new WeakSet,s=!0;Oi(e,"change",o=>{var a=o?"[selected]":":checked",l;if(e.multiple)l=[].map.call(e.querySelectorAll(a),Cr);else{var c=e.querySelector(a)??e.querySelector("option:not([disabled])");l=c&&Cr(c)}n(l),e.__value=l,Z!==null&&r.add(Z)}),Na(()=>{var o=t();if(e===document.activeElement){var a=Z;if(r.has(a))return}if(bs(e,o,s),s&&o===void 0){var l=e.querySelector(":checked");l!==null&&(o=Cr(l),n(o))}e.__value=o,s=!1})}function Cr(e){return"__value"in e?e.__value:e.value}function bu(e){if(e.target.closest("selectedcontent")!==null)return!0;if(e.type==="childList"){var t=[...e.addedNodes,...e.removedNodes];return t.length>0&&t.every(n=>n.nodeName==="SELECTEDCONTENT")}return!1}const ns=Symbol("class"),rs=Symbol("style"),yl=Symbol("is custom element"),wl=Symbol("is html"),xu=xo?"input":"INPUT",yu=xo?"option":"OPTION",kl=xo?"select":"SELECT";function de(e,t,n,r){var s=$l(e);s[t]!==(s[t]=n)&&(t==="loading"&&(e[Bl]=n),n==null?e.removeAttribute(t):typeof n!="string"&&Sl(e).has(t)?e[t]=n:e.setAttribute(t,n))}function wu(e,t,n,r,s=!1,o=!1){var a=$l(e),l=a[yl],c=!a[wl],d=t||{},f=e.nodeName===yu,x=e.nodeName===kl;for(var v in t)!(v in n)&&v[0]+v[1]!=="$$"&&(n[v]=null);n.class?n.class=_u(n.class):n[ns]&&(n.class=null),n[rs]&&(n.style??(n.style=null));var g=Sl(e);if(e.nodeName===xu&&"type"in n&&("value"in n||"__value"in n)){var b=n.type;(b!==d.type||b===void 0&&e.hasAttribute("type"))&&(d.type=b,de(e,"type",b))}for(const E in n){let $=n[E];if(f&&E==="value"&&$==null){e.value=e.__value="",d[E]=$;continue}if(E==="class"){var w=e.namespaceURI==="http://www.w3.org/1999/xhtml";Tt(e,w,$,r,t==null?void 0:t[ns],n[ns]),d[E]=$,d[ns]=n[ns];continue}if(E==="style"){hs(e,$,t==null?void 0:t[rs],n[rs]),d[E]=$,d[rs]=n[rs];continue}var S=d[E];if(!($===S&&!($===void 0&&e.hasAttribute(E)))){d[E]=$;var C=E[0]+E[1];if(C!=="$$")if(C==="on"){const M={},G="$$"+E;let D=E.slice(2);var H=Kc(D);if(Bc(D)&&(D=D.slice(0,-7),M.capture=!0),!H&&S){if($!=null)continue;e.removeEventListener(D,d[G],M),d[G]=null}if(H)P(D,e,$),Ht([D]);else if($!=null){let U=function(L){d[E].call(this,L)};d[G]=hl(D,e,U,M)}}else if(E==="style")de(e,E,$);else if(E==="autofocus")Ii(e,!!$);else if(!l&&(E==="__value"||E==="value"&&$!=null))e.value=e.__value=$;else if(E==="selected"&&f)bl(e,$);else{var A=E;c||(A=Wc(A));var J=A==="defaultValue"||A==="defaultChecked";if(x&&A==="defaultValue")continue;if($==null&&!l&&!J)if(a[E]=null,A==="value"||A==="checked"){let M=e;const G=t===void 0;if(A==="value"){let D=M.defaultValue;M.removeAttribute(A),M.defaultValue=D,M.value=M.__value=G?D:null}else{let D=M.defaultChecked;M.removeAttribute(A),M.defaultChecked=D,M.checked=G?D:!1}}else e.removeAttribute(E);else J||(l||typeof $!="string")&&g.has(A)?(e[A]=$,A in a&&(a[A]=Ke)):typeof $!="function"&&de(e,A,$)}}}return d}function ni(e,t,n=[],r=[],s=[],o,a=!1,l=!1){Ri(s,n,r,c=>{var d=void 0,f={},x=e.nodeName===kl,v=!1;if(el(()=>{var b=t(...c.map(i)),w=wu(e,d,b,o,a,l);if(v&&x){var S=e;"defaultValue"in b&&ti(S,b.defaultValue),"value"in b&&bs(S,b.value)}for(let H of Object.getOwnPropertySymbols(f))b[H]||tt(f[H]);for(let H of Object.getOwnPropertySymbols(b)){var C=b[H];H.description===ec&&(!d||C!==d[H])&&(f[H]&&tt(f[H]),f[H]=mt(()=>hu(e,()=>C))),w[H]=C}d=w}),x){var g=e;Na(()=>{var b=d;"defaultValue"in b&&ti(g,b.defaultValue),bs(g,b.value,!0),ps(g)})}v=!0})}function $l(e){return e[oa]??(e[oa]={[yl]:e.nodeName.includes("-"),[wl]:e.namespaceURI===Ci})}var ri=new Map;function Sl(e){var t=e.getAttribute("is")||e.nodeName,n=ri.get(t);if(n)return n;ri.set(t,n=new Set);for(var r,s=e,o=Element.prototype;o!==s;){r=bi(s);for(var a in r)r[a].set&&a!=="innerHTML"&&a!=="textContent"&&a!=="innerText"&&n.add(a);s=go(s)}return n}function Qe(e,t,n=t){var r=new WeakSet;Oi(e,"input",async s=>{var o=s?e.defaultValue:e.value;if(o=Ua(e)?Wa(o):o,n(o),Z!==null&&r.add(Z),await jc(),o!==(o=t())){var a=e.selectionStart,l=e.selectionEnd,c=e.value.length;if(e.value=o??"",l!==null){var d=e.value.length;a===l&&l===c&&d>c?(e.selectionStart=d,e.selectionEnd=d):(e.selectionStart=a,e.selectionEnd=Math.min(l,d))}}}),En(t)==null&&e.value&&(n(Ua(e)?Wa(e.value):e.value),Z!==null&&r.add(Z)),To(()=>{var s=t();if(e===document.activeElement){var o=Z;if(r.has(o))return}Ua(e)&&s===Wa(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Ua(e){var t=e.type;return t==="number"||t==="range"}function Wa(e){return e===""?null:+e}function qa(e,t){return e===t||(e==null?void 0:e[cn])===t}function xs(e=yo(),t,n,r){var s=ze.r,o=ce;return Na(()=>{var a,l;return To(()=>{a=l,l=[],En(()=>{qa(n(...l),e)||(t(e,...l),a&&qa(n(...a),e)&&t(null,...a))})}),()=>{let c=o;for(;c!==s&&c.parent!==null&&c.parent.f&pa;)c=c.parent;const d=()=>{l&&qa(n(...l),e)&&t(null,...l)},f=c.teardown;c.teardown=()=>{d(),f==null||f()}}}),e}function Cl(e=!1){const t=ze,n=t.l.u;if(!n)return;let r=()=>er(t.s);if(e){let s=0,o={};const a=Rr(()=>{let l=!1;const c=t.s;for(const d in c)c[d]!==o[d]&&(o[d]=c[d],l=!0);return l&&s++,s});r=()=>i(a)}n.b.length&&Oc(()=>{si(t,r),Xa(n.b)}),Nt(()=>{const s=En(()=>n.m.map(Fl));return()=>{for(const o of s)typeof o=="function"&&o()}}),n.a.length&&Nt(()=>{si(t,r),Xa(n.a)})}function si(e,t){if(e.l.s)for(const n of e.l.s)i(n);t()}function ku(e){var t=Sn(0);return function(){return arguments.length===1?(h(t,i(t)+1),arguments[0]):(i(t),e())}}const $u={get(e,t){if(!e.exclude.includes(t))return i(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=ce;try{Ft(e.parent_effect),e.special[t]=He({get[t](){return e.props[t]}},t,Si)}finally{Ft(r)}}return e.special[t](n),Uo(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),Uo(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ne(e,t){return new Proxy({props:e,exclude:t,special:{},version:Sn(0),parent_effect:ce},$u)}const Su={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(es(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let s=e.props[r];es(s)&&(s=s());const o=Hn(s,t);if(o&&o.set)return o.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(es(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const s=Hn(r,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===cn||t===ki)return!1;for(let n of e.props)if(es(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(es(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function oe(...e){return new Proxy({props:e},Su)}function He(e,t,n,r){var J;var s=!jr||(n&Gl)!==0,o=(n&Yl)!==0,a=(n&Jl)!==0,l=r,c=!0,d=void 0,f=()=>a&&s?(d??(d=Rr(r)),i(d)):(c&&(c=!1,l=a?En(r):r),l);let x;if(o){var v=cn in e||ki in e;x=((J=Hn(e,t))==null?void 0:J.set)??(v&&t in e?E=>e[t]=E:void 0)}var g,b=!1;o?[g,b]=bc(()=>e[t]):g=e[t],g===void 0&&r!==void 0&&(g=f(),x&&(s&&dc(),x(g)));var w;if(s?w=()=>{var E=e[t];return E===void 0?f():(c=!0,E)}:w=()=>{var E=e[t];return E!==void 0&&(l=void 0),E===void 0?l:E},s&&(n&Si)===0)return w;if(x){var S=e.$$legacy;return(function(E,$){return arguments.length>0?((!s||!$||S||b)&&x($?w():E),E):w()})}var C=!1,H=((n&ql)!==0?Rr:ko)(()=>(C=!1,w()));o&&i(H);var A=ce;return(function(E,$){if(arguments.length>0){const M=$?i(H):s&&o?Ce(E):E;return h(H,M),C=!0,l!==void 0&&(l=M),E}return Cn&&C||(A.f&xt)!==0?H.v:i(H)})}function Ur(e){ze===null&&Mi(),jr&&ze.l!==null?Cu(ze).m.push(e):Nt(()=>{const t=En(e);if(typeof t=="function")return t})}function zo(e){ze===null&&Mi(),Ur(()=>()=>En(e))}function Cu(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Eu="5";var gi;typeof window<"u"&&((gi=window.__svelte??(window.__svelte={})).v??(gi.v=new Set)).add(Eu);const tr=()=>window.__IDE_BOOTSTRAP__||{};function Tu(e){const{rootPath:t="",session:n=""}=tr();return`${t}/api/sessions/${encodeURIComponent(n)}/ide${e}`}async function We(e,t={}){const n=await fetch(Tu(e),t),r=await n.json().catch(()=>({}));if(!n.ok){const s=new Error(r.error||"Request failed");throw Object.assign(s,r),s}return r}const Ze=(e,t)=>`/ssh-connections/${encodeURIComponent(e)}${t}`,be={chat:async(e,t=80)=>{const{rootPath:n=""}=tr(),r=`${n}/api/sessions/${encodeURIComponent(e)}/ide/chat?limit=${t}`,s=await fetch(r),o=await s.json().catch(()=>({}));if(!s.ok)throw new Error(o.error||"Could not load chat");return o},browse:async(e="")=>{const{rootPath:t=""}=tr(),n=`${t}/api/ide/browse?path=${encodeURIComponent(e)}`,r=await fetch(n),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not browse folders");return s},sessionAgent:async e=>{const{rootPath:t=""}=tr(),n=await fetch(`${t}/api/sessions/${encodeURIComponent(e)}/agent`),r=await n.json().catch(()=>({}));if(!n.ok)throw new Error(r.error||"Could not read agent settings");return r},setSessionAgent:async(e,t)=>{const{rootPath:n=""}=tr(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/agent`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({agent:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not switch agent");return s},setSessionModel:async(e,t)=>{const{rootPath:n=""}=tr(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/model`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({model:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change model");return s},setSessionEffort:async(e,t)=>{const{rootPath:n=""}=tr(),r=await fetch(`${n}/api/sessions/${encodeURIComponent(e)}/effort`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({effort:t,restart:!0})}),s=await r.json().catch(()=>({}));if(!r.ok)throw new Error(s.error||"Could not change effort");return s},browseOn:(e,t="")=>We(Ze(e,`/browse?path=${encodeURIComponent(t)}`)),setWorkspaceRoot:(e,t,n)=>We(Ze(e,"/workspace-root"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({workspace_root:t,label:n})}),agentContext:e=>We(Ze(e,"/agent-context")),hostKey:e=>We(Ze(e,"/host-key")),trustHost:e=>We(Ze(e,"/host-key"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({accept:!0})}),listConnections:()=>We("/ssh-connections"),createConnection:e=>We("/ssh-connections",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),deleteConnection:e=>We(Ze(e,""),{method:"DELETE"}),connect:(e,t)=>We(Ze(e,"/connect"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t||""})}),status:e=>We(Ze(e,"/status?reconnect=1")),listFiles:(e,t)=>We(Ze(e,`/files?path=${encodeURIComponent(t)}`)),searchFiles:(e,t,n)=>We(Ze(e,`/files/search?path=${encodeURIComponent(t)}&query=${encodeURIComponent(n)}`)),readFile:(e,t)=>We(Ze(e,`/file?path=${encodeURIComponent(t)}`)),saveFile:(e,t,n)=>We(Ze(e,"/file"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({path:t,content:n})}),fs:(e,t)=>We(Ze(e,"/fs"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),git:(e,t)=>We(Ze(e,"/git"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),focusTerminal:e=>We(Ze(e,"/focus-terminal"),{method:"POST"}),getWorkspace:e=>We(Ze(e,"/workspace")),saveWorkspace:(e,t)=>We(Ze(e,"/workspace"),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})};var Cs,Es,Ts,Ns,Ms,zs,As,Ps,Is,Os,Rs,Ds,Ls,Fs,Hs,js,Bs,Vs,Ks,Us,Ws,qs,Gs,Ys;class Nu{constructor(){V(this,Cs,I(Ce([])));V(this,Es,I(""));V(this,Ts,I("idle"));V(this,Ns,I("Ready"));V(this,Ms,I("No file open"));V(this,zs,I("."));V(this,As,I(Ce([])));V(this,Ps,I(Ce({})));V(this,Is,I(Ce({})));V(this,Os,I(""));V(this,Rs,I(Ce([])));V(this,Ds,I(""));V(this,Ls,I(""));V(this,Fs,I(""));V(this,Hs,I(Ce([])));V(this,js,I(""));V(this,Bs,I(!1));V(this,Vs,I(!1));V(this,Ks,I(0));V(this,Us,I(0));V(this,Ws,I(!1));V(this,qs,I(""));V(this,Gs,I(Ce([])));V(this,Ys,I(!1));it(this,"restoredKey","");it(this,"persistTimer",null)}get connections(){return i(u(this,Cs))}set connections(t){h(u(this,Cs),t,!0)}get connectionId(){return i(u(this,Es))}set connectionId(t){h(u(this,Es),t,!0)}get connectionState(){return i(u(this,Ts))}set connectionState(t){h(u(this,Ts),t,!0)}get statusText(){return i(u(this,Ns))}set statusText(t){h(u(this,Ns),t,!0)}get detailText(){return i(u(this,Ms))}set detailText(t){h(u(this,Ms),t,!0)}get path(){return i(u(this,zs))}set path(t){h(u(this,zs),t,!0)}get entries(){return i(u(this,As))}set entries(t){h(u(this,As),t,!0)}get expanded(){return i(u(this,Ps))}set expanded(t){h(u(this,Ps),t,!0)}get treeChildren(){return i(u(this,Is))}set treeChildren(t){h(u(this,Is),t,!0)}get filter(){return i(u(this,Os))}set filter(t){h(u(this,Os),t,!0)}get tabs(){return i(u(this,Rs))}set tabs(t){h(u(this,Rs),t,!0)}get activeKey(){return i(u(this,Ds))}set activeKey(t){h(u(this,Ds),t,!0)}get gitOutput(){return i(u(this,Ls))}set gitOutput(t){h(u(this,Ls),t,!0)}get gitStatus(){return i(u(this,Fs))}set gitStatus(t){h(u(this,Fs),t,!0)}get gitBranches(){return i(u(this,Hs))}set gitBranches(t){h(u(this,Hs),t,!0)}get gitBranch(){return i(u(this,js))}set gitBranch(t){h(u(this,js),t,!0)}get needsHostKey(){return i(u(this,Bs))}set needsHostKey(t){h(u(this,Bs),t,!0)}get notARepo(){return i(u(this,Vs))}set notARepo(t){h(u(this,Vs),t,!0)}get gitAhead(){return i(u(this,Ks))}set gitAhead(t){h(u(this,Ks),t,!0)}get gitBehind(){return i(u(this,Us))}set gitBehind(t){h(u(this,Us),t,!0)}get gitHasUpstream(){return i(u(this,Ws))}set gitHasUpstream(t){h(u(this,Ws),t,!0)}get gitBusy(){return i(u(this,qs))}set gitBusy(t){h(u(this,qs),t,!0)}get gitCommits(){return i(u(this,Gs))}set gitCommits(t){h(u(this,Gs),t,!0)}get gitHistoryLoaded(){return i(u(this,Ys))}set gitHistoryLoaded(t){h(u(this,Ys),t,!0)}get connection(){return this.connections.find(t=>t.id===this.connectionId)||null}get activeTab(){return this.tabs.find(t=>t.key===this.activeKey)||null}get visibleEntries(){const t=this.filter.trim().toLowerCase();return t?this.entries.filter(n=>n.name.toLowerCase().includes(t)):this.entries}get dirtyCount(){return this.tabs.filter(t=>t.dirty).length}get gitDirtyCount(){return this.gitStatus.split(`
`).filter(t=>t.trim()&&!t.startsWith("##")).length}resetWorkspaceView(){this.tabs=[],this.activeKey="",this.restoredKey="",this.path=".",this.entries=[],this.expanded={},this.treeChildren={},this.filter="",this.gitOutput="",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.needsHostKey=!1,this.notARepo=!1,this.gitAhead=0,this.gitBehind=0,this.gitHasUpstream=!1,this.gitCommits=[],this.gitHistoryLoaded=!1}setStatus(t,n){this.statusText=t,n!==void 0&&(this.detailText=n)}async loadConnections(){try{const t=await be.listConnections();this.connections=t.connections||[],!this.connectionId&&this.connections.length&&(this.connectionId=this.connections[0].id)}catch(t){this.setStatus(t.message||"Could not load connections")}}async refreshStatus(){var t,n,r;if(this.connectionId)try{const s=await be.status(this.connectionId);s.connected?(this.connectionState="connected",this.setStatus(`Connected · ${((t=this.connection)==null?void 0:t.label)||"SSH workspace"}`,`SSH terminal: ${s.window_name||"open"}`),await this.restoreWorkspace()):(this.connectionState="reconnect",this.entries=[],this.setStatus(`Reconnect required · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,(r=this.connection)!=null&&r.has_password?"Auto-reconnect failed — select Connect to retry":"Select Connect to reopen SSH"))}catch(s){this.connectionState="error",this.setStatus(s.message||"Could not check SSH connection")}}async connect(t){var n;if(this.connectionId){this.connectionState="connecting",this.setStatus("Connecting…");try{const r=await be.connect(this.connectionId,t);this.connectionState="connected",this.setStatus(`Connected · ${((n=this.connection)==null?void 0:n.label)||"SSH workspace"}`,`SSH terminal: ${r.window_name||"open"}`),await this.restoreWorkspace()}catch(r){this.connectionState="error",this.setStatus(r.message||"Could not connect"),this.needsHostKey=!!r.needs_host_key}}}async refreshFiles(t){if(!this.connectionId)return;const n=t||this.path||".";try{const r=await be.listFiles(this.connectionId,n);this.path=r.path||n,this.entries=r.entries||[],this.remember()}catch(r){this.setStatus(r.message||"Could not list remote files")}}async toggleDirectory(t){if(this.expanded[t]){const n={...this.expanded};delete n[t],this.expanded=n;return}if(this.expanded={...this.expanded,[t]:!0},!this.treeChildren[t])try{const n=await be.listFiles(this.connectionId,t);this.treeChildren={...this.treeChildren,[t]:n.entries||[]}}catch(n){this.setStatus(n.message||"Could not expand folder")}}openDiffTab(t,n){const r=`${this.connectionId}|diff:${t}`,s=this.tabs.find(a=>a.key===r);if(s)return s.content=n,s.saved=n,this.activeKey=r,s;const o={key:r,path:`${t} (diff)`,content:n,saved:n,dirty:!1,readOnly:!0,language:"plaintext"};return this.tabs=[...this.tabs,o],this.activeKey=r,o}async openFile(t){if(!this.connectionId)return null;const n=`${this.connectionId}|${t}`,r=this.tabs.find(s=>s.key===n);if(r)return this.activeKey=n,r;try{const s=await be.readFile(this.connectionId,t),o={key:`${this.connectionId}|${s.path}`,path:s.path,content:s.content||"",saved:s.content||"",dirty:!1};return this.tabs=[...this.tabs,o],this.activeKey=o.key,this.setStatus("Opened",o.path),this.remember(),o}catch(s){return this.setStatus(s.message||"Could not open remote file"),null}}updateContent(t,n){this.tabs=this.tabs.map(r=>r.key===t?{...r,content:n,dirty:n!==r.saved}:r),this.remember()}closeTab(t){var r;const n=this.tabs.find(s=>s.key===t);n!=null&&n.dirty&&!confirm(`Discard unsaved changes to ${n.path}?`)||(this.tabs=this.tabs.filter(s=>s.key!==t),this.activeKey===t&&(this.activeKey=((r=this.tabs.at(-1))==null?void 0:r.key)||""),this.remember())}async saveActive(){const t=this.activeTab;if(t)try{await be.saveFile(this.connectionId,t.path,t.content),this.tabs=this.tabs.map(n=>n.key===t.key?{...n,saved:n.content,dirty:!1}:n),this.setStatus(`Saved ${t.path}`,t.path),this.remember()}catch(n){this.setStatus(n.message||"Could not save file")}}async restoreWorkspace(){const t=`${this.connectionId}`;if(!t)return;let n=null;try{n=await be.getWorkspace(this.connectionId)}catch{n=null}if(await this.refreshFiles((n==null?void 0:n.last_directory)||"."),this.restoredKey===t)return;this.restoredKey=t;const r=(n==null?void 0:n.buffers)||{};for(const o of((n==null?void 0:n.tabs)||[]).slice(0,12)){const a=await this.openFile(o);a&&Object.prototype.hasOwnProperty.call(r,o)&&this.updateContent(a.key,r[o])}const s=this.tabs.find(o=>o.path===(n==null?void 0:n.active_path));s&&(this.activeKey=s.key)}remember(){this.persistTimer&&clearTimeout(this.persistTimer),this.persistTimer=setTimeout(()=>this.persist(),1500)}async persist(){var n;if(!this.connectionId)return;const t={};for(const r of this.tabs)r.dirty&&(t[r.path]=r.content);try{await be.saveWorkspace(this.connectionId,{tabs:this.tabs.map(r=>r.path).slice(0,50),active_path:((n=this.activeTab)==null?void 0:n.path)||"",last_directory:this.path||".",buffers:t})}catch{}}async runGit(t,n={}){try{const r=await be.git(this.connectionId,{action:t,path:this.path||".",...n});return r.not_a_repo?(this.gitOutput=r.error||"This folder is not a Git repository.",this.gitStatus="",this.gitBranches=[],this.gitBranch="",this.gitCommits=[],this.gitHistoryLoaded=!1,this.notARepo=!0,null):(this.notARepo=!1,this.gitAhead=r.ahead||0,this.gitBehind=r.behind||0,this.gitHasUpstream=!!r.has_upstream,t==="log"?(this.gitCommits=r.commits||[],this.gitHistoryLoaded=!0):t!=="show"&&(this.gitOutput=r.output||r.status||""),this.gitStatus=r.status||"",this.gitBranches=r.branches||[],this.gitBranch=r.current_branch||"",["commit","switch","create_branch","pull","push","fetch"].includes(t)&&(this.gitHistoryLoaded=!1),r)}catch(r){return this.gitOutput=r.message||"Git command failed",null}}}Cs=new WeakMap,Es=new WeakMap,Ts=new WeakMap,Ns=new WeakMap,Ms=new WeakMap,zs=new WeakMap,As=new WeakMap,Ps=new WeakMap,Is=new WeakMap,Os=new WeakMap,Rs=new WeakMap,Ds=new WeakMap,Ls=new WeakMap,Fs=new WeakMap,Hs=new WeakMap,js=new WeakMap,Bs=new WeakMap,Vs=new WeakMap,Ks=new WeakMap,Us=new WeakMap,Ws=new WeakMap,qs=new WeakMap,Gs=new WeakMap,Ys=new WeakMap;const _=new Nu;_c();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
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
 */const zu=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const ai=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();var Au=_l("<svg><!><!></svg>");function ie(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]),r=ne(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);ft(t,!1);let s=He(t,"name",8,void 0),o=He(t,"color",8,"currentColor"),a=He(t,"size",8,24),l=He(t,"strokeWidth",8,2),c=He(t,"absoluteStrokeWidth",8,!1),d=He(t,"iconNode",24,()=>[]);Cl();var f=Au();ni(f,(g,b,w)=>({...Mu,...g,...r,width:a(),height:a(),stroke:o(),"stroke-width":b,class:w}),[()=>zu(r)?void 0:{"aria-hidden":"true"},()=>(er(c()),er(l()),er(a()),En(()=>c()?Number(l())*24/Number(a()):l())),()=>(er(ai),er(s()),er(n),En(()=>ai("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var x=y(f);je(x,1,d,gl,(g,b)=>{var w=ut(()=>Hl(i(b),2));let S=()=>i(w)[0],C=()=>i(w)[1];var H=Q(),A=B(H);vu(A,S,!0,(J,E)=>{ni(J,()=>({...C()}))}),m(g,H)});var v=p(x);ae(v,t,"default",{}),m(e,f),vt()}function Pu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m3 16 4 4 4-4"}],["path",{d:"M7 20V4"}],["path",{d:"m21 8-4-4-4 4"}],["path",{d:"M17 4v16"}]];ie(e,oe({name:"arrow-down-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Iu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];ie(e,oe({name:"arrow-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function da(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 6 9 17l-5-5"}]];ie(e,oe({name:"check"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Bn(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 9 6 6 6-6"}]];ie(e,oe({name:"chevron-down"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function fa(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];ie(e,oe({name:"chevron-right"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function oi(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16"}]];ie(e,oe({name:"circle-alert"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ou(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];ie(e,oe({name:"circle-check"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ru(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"1"}]];ie(e,oe({name:"circle-dot"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Du(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"10",r:"3"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"}]];ie(e,oe({name:"circle-user"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Lu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}]];ie(e,oe({name:"circle"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Fu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 4v7a4 4 0 0 1-4 4H4"}],["path",{d:"m9 10-5 5 5 5"}]];ie(e,oe({name:"corner-down-left"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Hu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14 9 9 4 4 9"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4"}]];ie(e,oe({name:"corner-left-up"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ju(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"1"}],["circle",{cx:"19",cy:"12",r:"1"}],["circle",{cx:"5",cy:"12",r:"1"}]];ie(e,oe({name:"ellipsis"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Bu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];ie(e,oe({name:"external-link"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ii(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 12.15V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3.35"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"m5 16-3 3 3 3"}],["path",{d:"m9 22 3-3-3-3"}]];ie(e,oe({name:"file-code-corner"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Vu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M9 10h6"}],["path",{d:"M12 13V7"}],["path",{d:"M9 17h6"}]];ie(e,oe({name:"file-diff"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ku(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M9 15h6"}],["path",{d:"M12 18v-6"}]];ie(e,oe({name:"file-plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ao(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}]];ie(e,oe({name:"file"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Uu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"}],["path",{d:"M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"}],["path",{d:"M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"}]];ie(e,oe({name:"files"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ga(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"}]];ie(e,oe({name:"folder-open"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Wu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 10v6"}],["path",{d:"M9 13h6"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];ie(e,oe({name:"folder-plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function qu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];ie(e,oe({name:"folder"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ho(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];ie(e,oe({name:"git-branch"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Gu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 16h.01"}],["path",{d:"M2.212 11.577a2 2 0 0 0-.212.896V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5.527a2 2 0 0 0-.212-.896L18.55 5.11A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"}],["path",{d:"M21.946 12.013H2.054"}],["path",{d:"M6 16h.01"}]];ie(e,oe({name:"hard-drive"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Yu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}],["path",{d:"M12 7v5l4 2"}]];ie(e,oe({name:"history"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ju(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12"}]];ie(e,oe({name:"link-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Vn(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 2v4"}],["path",{d:"m16.2 7.8 2.9-2.9"}],["path",{d:"M18 12h4"}],["path",{d:"m16.2 16.2 2.9 2.9"}],["path",{d:"M12 18v4"}],["path",{d:"m4.9 19.1 2.9-2.9"}],["path",{d:"M2 12h4"}],["path",{d:"m4.9 4.9 2.9 2.9"}]];ie(e,oe({name:"loader"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function li(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"}]];ie(e,oe({name:"message-square"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Xu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}]];ie(e,oe({name:"minus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Zu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8"}],["path",{d:"M10 19v-3.96 3.15"}],["path",{d:"M7 19h5"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2"}]];ie(e,oe({name:"monitor-smartphone"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Qu(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M3 15h18"}]];ie(e,oe({name:"panel-bottom"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ed(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}],["path",{d:"M9 3v18"}]];ie(e,oe({name:"panel-left"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ya(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];ie(e,oe({name:"plus"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function po(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"}],["path",{d:"M21 3v5h-5"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"}],["path",{d:"M8 16H3v5"}]];ie(e,oe({name:"refresh-cw"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Po(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];ie(e,oe({name:"search"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ci(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];ie(e,oe({name:"server"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function td(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}],["path",{d:"M12 8v4"}],["path",{d:"M12 16h.01"}]];ie(e,oe({name:"shield-alert"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function Ya(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];ie(e,oe({name:"sparkles"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function ui(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m7 11 2-2-2-2"}],["path",{d:"M11 13h4"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2"}]];ie(e,oe({name:"square-terminal"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function nd(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2"}]];ie(e,oe({name:"square"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function rd(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M10 11v6"}],["path",{d:"M14 11v6"}],["path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"}],["path",{d:"M3 6h18"}],["path",{d:"M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}]];ie(e,oe({name:"trash-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function sd(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M9 14 4 9l5-5"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"}]];ie(e,oe({name:"undo-2"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}function _s(e,t){const n=ne(t,["children","$$slots","$$events","$$legacy"]);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];ie(e,oe({name:"x"},()=>n,{get iconNode(){return r},children:(s,o)=>{var a=Q(),l=B(a);ae(l,t,"default",{}),m(s,a)},$$slots:{default:!0}}))}var ad=z('<span class="w-[14px] shrink-0"></span>'),od=_l('<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M1.5 3.5h4l1.2 1.4h7.8v7.6H1.5z" fill="#c09553"></path></svg>'),id=z('<div role="treeitem" tabindex="0"><!> <span class="flex shrink-0 items-center"><!></span> <span class="flex-1 truncate text-vs-fg"> </span> <span class="hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Rename"><span class="text-[11px] leading-none">✎</span></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Delete"><span class="text-[11px] leading-none">🗑</span></button></span></div> <!>',1);function El(e,t){ft(t,!0);const n=ut(()=>t.dir==="."?t.entry.name:`${t.dir}/${t.entry.name}`),r=ut(()=>!!_.expanded[i(n)]),s=ut(()=>_.treeChildren[i(n)]||[]),o=ut(()=>{var L;return((L=_.activeTab)==null?void 0:L.path)===i(n)});async function a(){t.entry.is_dir?await _.toggleDirectory(i(n)):await _.openFile(i(n))}async function l(L){if(L.stopPropagation(),!!confirm(`Delete ${i(n)}? Folders must already be empty.`))try{await be.fs(_.connectionId,{action:"delete",path:i(n)}),await _.refreshFiles()}catch(Y){_.setStatus(Y.message||"Could not delete")}}async function c(L){L.stopPropagation();const Y=prompt("Rename to (relative path):",i(n));if(!(!Y||Y===i(n)))try{await be.fs(_.connectionId,{action:"rename",path:i(n),new_path:Y}),await _.refreshFiles()}catch(ue){_.setStatus(ue.message||"Could not rename")}}var d=id(),f=B(d);let x;var v=y(f);{var g=L=>{var Y=Q(),ue=B(Y);{var me=Ee=>{Bn(Ee,{size:14,class:"shrink-0 text-vs-muted"})},De=Ee=>{fa(Ee,{size:14,class:"shrink-0 text-vs-muted"})};F(ue,Ee=>{i(r)?Ee(me):Ee(De,-1)})}m(L,Y)},b=L=>{var Y=ad();m(L,Y)};F(v,L=>{t.entry.is_dir?L(g):L(b,-1)})}var w=p(v,2),S=y(w);{var C=L=>{var Y=od();m(L,Y)},H=L=>{Ju(L,{size:14,class:"text-vs-muted"})},A=L=>{Ao(L,{size:14,class:"text-vs-blue"})};F(S,L=>{t.entry.is_dir?L(C):t.entry.is_symlink?L(H,1):L(A,-1)})}var J=p(w,2),E=ee(J,!0),$=p(J,2),M=y($),G=p(M,2),D=p(f,2);{var U=L=>{var Y=Q(),ue=B(Y);je(ue,17,()=>i(s),me=>me.name,(me,De)=>{{let Ee=ut(()=>t.depth+1);El(me,{get entry(){return i(De)},get dir(){return i(n)},get depth(){return i(Ee)}})}}),m(L,Y)};F(D,L=>{t.entry.is_dir&&i(r)&&L(U)})}X(()=>{x=Tt(f,1,"group flex cursor-pointer items-center gap-1 py-[2px] pr-1 text-[13px] hover:bg-vs-hover",null,x,{"bg-vs-active":i(o)}),hs(f,`padding-left: ${8+t.depth*12}px`),de(f,"aria-expanded",t.entry.is_dir?i(r):void 0),de(f,"aria-selected",i(o)),de(f,"title",i(n)),q(E,t.entry.name),de(M,"aria-label",`Rename ${t.entry.name??""}`),de(G,"aria-label",`Delete ${t.entry.name??""}`)}),P("click",f,a),P("keydown",f,L=>{(L.key==="Enter"||L.key===" ")&&(L.preventDefault(),a())}),P("click",M,c),P("click",G,l),m(e,d),vt()}Ht(["click","keydown"]);var ld=z('<form class="px-2 pb-1"><input class="w-full rounded-sm border border-vs-accent bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none"/></form>'),cd=z('<p class="px-4 py-2 text-xs text-vs-muted">No folder opened.</p>'),ud=z('<p class="px-4 py-2 text-xs text-vs-muted">No files here</p>'),dd=z('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide text-vs-fg uppercase"><span class="flex-1 truncate">Explorer</span></div> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold text-vs-fg uppercase"><!> <span class="flex-1 truncate"> </span> <span class="flex opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-1 hover:bg-vs-hover" title="New file" aria-label="New file"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="New folder" aria-label="New folder"><!></button> <button class="rounded-sm p-1 hover:bg-vs-hover" title="Refresh" aria-label="Refresh"><!></button></span></div> <!> <input class="mx-2 mb-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs text-vs-fg outline-none focus:border-vs-accent" placeholder="Filter files…"/> <div class="min-h-0 flex-1 overflow-y-auto pb-2"><!></div></div>');function fd(e,t){ft(t,!0);let n=I(""),r=I("");const s=(U,L)=>U==="."?L:`${U}/${L}`;async function o(U){U.preventDefault();const L=i(r).trim();if(L)try{await be.fs(_.connectionId,{action:i(n)==="dir"?"create_dir":"create_file",path:s(_.path,L)}),h(n,""),h(r,""),await _.refreshFiles()}catch(Y){_.setStatus(Y.message||"Could not create")}}const a=ut(()=>{var U,L;return(((U=_.connection)==null?void 0:U.workspace_root)||"").split("/").filter(Boolean).pop()||((L=_.connection)==null?void 0:L.label)||"WORKSPACE"});var l=dd(),c=p(y(l),2),d=y(c);Bn(d,{size:14,class:"shrink-0 text-vs-muted"});var f=p(d,2),x=ee(f,!0),v=p(f,2),g=y(v),b=y(g);Ku(b,{size:14});var w=p(g,2),S=y(w);Wu(S,{size:14});var C=p(w,2),H=y(C);po(H,{size:13});var A=p(c,2);{var J=U=>{var L=ld(),Y=y(L);Ii(Y,!0),X(()=>de(Y,"placeholder",i(n)==="dir"?"New folder name":"New file name")),hr("submit",L,o),P("keydown",Y,ue=>{ue.key==="Escape"&&h(n,"")}),hr("blur",Y,()=>{i(r).trim()||h(n,"")}),Qe(Y,()=>i(r),ue=>h(r,ue)),m(U,L)};F(A,U=>{i(n)&&U(J)})}var E=p(A,2),$=p(E,2),M=y($);{var G=U=>{var L=cd();m(U,L)},D=U=>{var L=Q(),Y=B(L);je(Y,17,()=>_.visibleEntries,ue=>ue.name,(ue,me)=>{El(ue,{get entry(){return i(me)},get dir(){return _.path},depth:0})},ue=>{var me=ud();m(ue,me)}),m(U,L)};F(M,U=>{_.connectionId?U(D,-1):U(G)})}X(()=>{var U;de(f,"title",(U=_.connection)==null?void 0:U.workspace_root),q(x,i(a))}),P("click",g,()=>{h(n,"file"),h(r,"")}),P("click",w,()=>{h(n,"dir"),h(r,"")}),P("click",C,()=>_.refreshFiles()),Qe(E,()=>_.filter,U=>_.filter=U),m(e,l),vt()}Ht(["click","keydown"]);var vd=z('<div class="absolute top-full right-0 z-20 mt-1 min-w-[170px] rounded-md border border-vs-line bg-vs-panel py-1 shadow-2xl"><button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Fetch</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Pull</button> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Push</button> <div class="my-1 h-px bg-vs-line"></div> <button class="w-full px-3 py-1 text-left text-xs hover:bg-vs-hover">Create Branch…</button></div>'),hd=z(`<p class="mx-3 text-xs leading-relaxed text-vs-muted">This folder isn't a Git repository.<br/> Open a folder containing a <code class="rounded-sm bg-vs-input px-1">.git</code> directory,
      or run <code class="rounded-sm bg-vs-input px-1">git init</code> in the terminal.</p>`),pd=z('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Unstage"><!></button></span> <span> </span></div>'),_d=z('<div class="flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Staged Changes</span></button> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!>',1),gd=z('<div class="group flex cursor-pointer items-center gap-1.5 py-[2px] pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><span class="truncate text-vs-fg"> </span> <span class="truncate text-[11px] text-vs-muted"> </span> <span class="ml-auto hidden shrink-0 gap-0.5 group-hover:flex"><button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Open changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-red" title="Discard changes"><!></button> <button class="rounded-sm p-0.5 text-vs-muted hover:bg-vs-line hover:text-vs-fg" title="Stage changes"><!></button></span> <span> </span></div>'),md=z('<p class="px-6 py-2 text-xs text-vs-muted">No changes.</p>'),bd=z('<div class="min-h-0 flex-1 overflow-y-auto"></div>'),xd=z('<span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span>'),yd=z('<span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh history" aria-label="Refresh history"><!></button></span> <!>',1),wd=z('<span class="shrink-0 rounded-sm bg-vs-line px-1 text-[10px] text-vs-blue"> </span>'),kd=z('<div class="group flex cursor-pointer flex-col gap-0.5 py-1 pr-2 pl-6 text-[13px] hover:bg-vs-hover" role="button" tabindex="0"><div class="flex min-w-0 items-center gap-1.5"><span class="truncate text-vs-fg"> </span> <!></div> <div class="flex min-w-0 items-center gap-1.5 text-[11px] text-vs-muted"><span class="shrink-0 font-mono text-vs-yellow"> </span> <span class="truncate"> </span> <span class="ml-auto shrink-0"> </span></div></div>'),$d=z('<p class="px-6 py-2 text-xs text-vs-muted"> </p>'),Sd=z('<div class="max-h-[45%] min-h-0 flex-1 overflow-y-auto"></div>'),Cd=z('<button class="flex items-center gap-1 rounded-sm px-1 text-vs-muted hover:bg-vs-hover hover:text-vs-fg" title="Pull then push"><!> </button>'),Ed=z('<div class="flex gap-1 border-t border-vs-line px-3 py-2"><input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" placeholder="New branch name"/> <button class="rounded-sm bg-vs-status px-2 py-1 text-xs text-white">Create</button></div>'),Td=z('<pre class="max-h-[120px] shrink-0 overflow-auto border-t border-vs-line px-3 py-1.5 text-[11px] whitespace-pre-wrap text-vs-muted"> </pre>'),Nd=z('<div class="px-3 pb-2"><textarea class="w-full resize-none rounded-sm border border-vs-line bg-vs-input px-2 py-1.5 text-xs text-vs-fg outline-none focus:border-vs-accent placeholder:text-vs-muted" rows="2"></textarea> <button class="mt-1 flex w-full items-center justify-center gap-1.5 rounded-sm bg-vs-status px-2 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"><!> Commit</button></div> <!> <div class="group flex items-center gap-1 px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <span class="truncate">Changes</span></button> <span class="flex shrink-0 opacity-0 transition-opacity group-hover:opacity-100"><button class="rounded-sm p-0.5 hover:bg-vs-line" title="Refresh" aria-label="Refresh"><!></button> <button class="rounded-sm p-0.5 hover:bg-vs-line" title="Stage all changes" aria-label="Stage all"><!></button></span> <span class="shrink-0 rounded-full bg-vs-line px-1.5 text-[10px] font-semibold"> </span></div> <!> <div class="group flex shrink-0 items-center gap-1 border-t border-vs-line px-2 py-1 text-[11px] font-bold uppercase hover:bg-vs-hover"><button class="flex min-w-0 flex-1 items-center gap-1 text-left"><!> <!> <span class="truncate">History</span></button> <!></div> <!> <div class="mt-auto flex items-center gap-2 border-t border-vs-line px-3 py-1.5 text-[11px]"><span class="flex min-w-0 items-center gap-1 text-vs-muted" title="Current branch"><!> <span class="truncate"> </span></span> <!></div> <!> <!>',1),Md=z('<div class="flex h-full min-h-0 flex-col"><div class="flex items-center gap-1 px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase"><span class="flex-1">Source Control</span> <div class="relative" data-scm-menu=""><button class="rounded-sm p-0.5 hover:bg-vs-hover" title="More actions" aria-label="More actions"><!></button> <!></div></div> <!></div>');function zd(e,t){ft(t,!0);let n=I(""),r=I(""),s=I(!1),o=I(!0),a=I(!0),l=I(!1),c=I(!1);const d=ut(()=>(_.gitStatus||"").split(`
`).filter(T=>T&&!T.startsWith("##")).map(T=>{const j=T.slice(3),_e=j.indexOf(" -> "),Le=_e===-1?j:j.slice(_e+4);return{index:T[0]===" "?"":T[0],work:T[1]===" "?"":T[1],code:T.slice(0,2).trim()||"??",path:Le.replace(/\r$/,""),from:_e===-1?"":j.slice(0,_e)}}).filter(T=>T.path)),f=ut(()=>i(d).filter(T=>T.index&&T.index!=="?")),x=ut(()=>i(d).filter(T=>T.work&&T.work!==" ")),v=T=>T.includes("?")||T.includes("A")?"text-vs-green":T.includes("D")?"text-vs-red":T.includes("R")?"text-vs-blue":"text-vs-yellow",g=T=>T.split("/").pop(),b=T=>{const j=T.split("/");return j.pop(),j.join("/")};async function w(T,j={}){_.gitBusy=T;try{return await _.runGit(T,j)}finally{_.gitBusy=""}}async function S(){if(!i(n).trim()||!i(f).length)return;await w("commit",{message:i(n).trim()})&&h(n,"")}async function C(){if(!i(r).trim())return;await w("create_branch",{branch:i(r).trim()})&&(h(r,""),h(s,!1))}async function H(T){confirm(`Discard changes in ${T.path}? This cannot be undone.`)&&await w("discard",{files:[T.path]})}async function A(T){const j=await _.runGit("diff_file",{files:[T.path]});j&&_.openDiffTab(T.path,j.output||"No changes to show.")}async function J(){h(l,!i(l)),i(l)&&!_.gitHistoryLoaded&&await w("log")}Nt(()=>{i(l)&&!_.gitHistoryLoaded&&!_.notARepo&&!_.gitBusy&&w("log")});async function E(T){const j=await _.runGit("show",{ref:T.hash});j&&_.openDiffTab(`${T.short} ${T.subject}`,j.output||"Empty commit.")}const $=T=>(T||"").split(",").map(j=>j.trim().replace(/^HEAD -> /,"")).filter(Boolean);function M(T){T.key==="Enter"&&(T.ctrlKey||T.metaKey)&&(T.preventDefault(),S())}var G=Md();hr("click",gs,T=>{var j,_e;(_e=(j=T.target).closest)!=null&&_e.call(j,"[data-scm-menu]")||h(c,!1)});var D=y(G),U=p(y(D),2),L=y(U),Y=y(L);ju(Y,{size:14});var ue=p(L,2);{var me=T=>{var j=vd(),_e=y(j),Le=p(_e,2),Ye=p(Le,2),ht=p(Ye,4);P("click",_e,()=>{h(c,!1),w("fetch")}),P("click",Le,()=>{h(c,!1),w("pull")}),P("click",Ye,()=>{h(c,!1),w("push")}),P("click",ht,()=>{h(c,!1),h(s,!i(s))}),m(T,j)};F(ue,T=>{i(c)&&T(me)})}var De=p(D,2);{var Ee=T=>{var j=hd();m(T,j)},nt=T=>{var j=Nd(),_e=B(j),Le=y(_e),Ye=p(Le,2),ht=y(Ye);{var vn=W=>{Vn(W,{size:12,class:"animate-spin"})},hn=W=>{da(W,{size:12})};F(ht,W=>{_.gitBusy==="commit"?W(vn):W(hn,-1)})}var yt=p(_e,2);{var pr=W=>{var Me=_d(),ge=B(Me),re=y(ge),Te=y(re);{var _t=R=>{Bn(R,{size:14,class:"text-vs-muted"})},Xe=R=>{fa(R,{size:14,class:"text-vs-muted"})};F(Te,R=>{i(a)?R(_t):R(Xe,-1)})}var Zt=p(re,2),mn=ee(Zt,!0),k=p(ge,2);{var O=R=>{var pe=Q(),ke=B(pe);je(ke,17,()=>i(f),$e=>$e.path,($e,ve)=>{var Se=pd(),Ie=y(Se),le=ee(Ie,!0),at=p(Ie,2),Qt=ee(at,!0),wt=p(at,2),en=y(wt),br=y(en);Xu(br,{size:13});var Mt=p(wt,2),xr=ee(Mt,!0);X((zt,Xr,Jn)=>{de(Se,"title",i(ve).path),q(le,zt),q(Qt,Xr),de(en,"aria-label",`Unstage ${i(ve).path??""}`),Tt(Mt,1,`shrink-0 font-mono text-[11px] ${Jn??""}`),q(xr,i(ve).index||i(ve).code)},[()=>g(i(ve).path),()=>b(i(ve).path),()=>v(i(ve).code)]),P("click",Se,()=>A(i(ve))),P("keydown",Se,zt=>{zt.key==="Enter"&&A(i(ve))}),P("click",en,zt=>{zt.stopPropagation(),w("unstage",{files:[i(ve).path]})}),m($e,Se)}),m(R,pe)};F(k,R=>{i(a)&&R(O)})}X(()=>q(mn,i(f).length)),P("click",re,()=>h(a,!i(a))),m(W,Me)};F(yt,W=>{i(f).length&&W(pr)})}var Xt=p(yt,2),pn=y(Xt),_r=y(pn);{var Tn=W=>{Bn(W,{size:14,class:"text-vs-muted"})},Wn=W=>{fa(W,{size:14,class:"text-vs-muted"})};F(_r,W=>{i(o)?W(Tn):W(Wn,-1)})}var gr=p(pn,2),Nn=y(gr),mr=y(Nn);po(mr,{size:12});var Mn=p(Nn,2),Wr=y(Mn);ya(Wr,{size:13});var zn=p(gr,2),qr=ee(zn,!0),An=p(Xt,2);{var Gr=W=>{var Me=bd();je(Me,21,()=>i(x),ge=>ge.path,(ge,re)=>{var Te=gd(),_t=y(Te),Xe=ee(_t,!0),Zt=p(_t,2),mn=ee(Zt,!0),k=p(Zt,2),O=y(k),R=y(O);Vu(R,{size:13});var pe=p(O,2),ke=y(pe);sd(ke,{size:13});var $e=p(pe,2),ve=y($e);ya(ve,{size:13});var Se=p(k,2),Ie=ee(Se,!0);X((le,at,Qt)=>{de(Te,"title",i(re).path),q(Xe,le),q(mn,at),de(O,"aria-label",`Open changes to ${i(re).path??""}`),de(pe,"aria-label",`Discard changes to ${i(re).path??""}`),de($e,"aria-label",`Stage ${i(re).path??""}`),Tt(Se,1,`shrink-0 font-mono text-[11px] ${Qt??""}`),q(Ie,i(re).work||i(re).code)},[()=>g(i(re).path),()=>b(i(re).path),()=>v(i(re).code)]),P("click",Te,()=>A(i(re))),P("keydown",Te,le=>{le.key==="Enter"&&A(i(re))}),P("click",O,le=>{le.stopPropagation(),A(i(re))}),P("click",pe,le=>{le.stopPropagation(),H(i(re))}),P("click",$e,le=>{le.stopPropagation(),w("stage",{files:[i(re).path]})}),m(ge,Te)},ge=>{var re=md();m(ge,re)}),m(W,Me)};F(An,W=>{i(o)&&W(Gr)})}var qn=p(An,2),_n=y(qn),Gn=y(_n);{var Yr=W=>{Bn(W,{size:14,class:"text-vs-muted"})},Jr=W=>{fa(W,{size:14,class:"text-vs-muted"})};F(Gn,W=>{i(l)?W(Yr):W(Jr,-1)})}var N=p(Gn,2);Yu(N,{size:12,class:"shrink-0 text-vs-muted"});var K=p(_n,2);{var te=W=>{var Me=yd(),ge=B(Me),re=y(ge),Te=y(re);{var _t=k=>{Vn(k,{size:12,class:"animate-spin"})},Xe=k=>{po(k,{size:12})};F(Te,k=>{_.gitBusy==="log"?k(_t):k(Xe,-1)})}var Zt=p(ge,2);{var mn=k=>{var O=xd(),R=ee(O,!0);X(()=>q(R,_.gitCommits.length)),m(k,O)};F(Zt,k=>{_.gitCommits.length&&k(mn)})}P("click",re,()=>w("log")),m(W,Me)};F(K,W=>{i(l)&&W(te)})}var xe=p(qn,2);{var we=W=>{var Me=Sd();je(Me,21,()=>_.gitCommits,ge=>ge.hash,(ge,re)=>{var Te=kd(),_t=y(Te),Xe=y(_t),Zt=ee(Xe,!0),mn=p(Xe,2);je(mn,17,()=>$(i(re).refs),gl,(Se,Ie)=>{var le=wd(),at=ee(le,!0);X(()=>q(at,i(Ie))),m(Se,le)});var k=p(_t,2),O=y(k),R=ee(O,!0),pe=p(O,2),ke=ee(pe,!0),$e=p(pe,2),ve=ee($e,!0);X(()=>{de(Te,"title",`${i(re).short} · ${i(re).author} · ${i(re).date}`),q(Zt,i(re).subject),q(R,i(re).short),q(ke,i(re).author),q(ve,i(re).relative)}),P("click",Te,()=>E(i(re))),P("keydown",Te,Se=>{Se.key==="Enter"&&E(i(re))}),m(ge,Te)},ge=>{var re=$d(),Te=ee(re,!0);X(()=>q(Te,_.gitBusy==="log"?"Loading history…":"No commits yet.")),m(ge,re)}),m(W,Me)};F(xe,W=>{i(l)&&W(we)})}var Oe=p(xe,2),Pe=y(Oe),Be=y(Pe);ho(Be,{size:12,class:"shrink-0"});var Ve=p(Be,2),Fe=ee(Ve,!0),st=p(Pe,2);{var pt=W=>{var Me=Cd(),ge=y(Me);{var re=Xe=>{Vn(Xe,{size:11,class:"animate-spin"})},Te=Xe=>{Pu(Xe,{size:11})};F(ge,Xe=>{_.gitBusy==="pull"||_.gitBusy==="push"?Xe(re):Xe(Te,-1)})}var _t=p(ge);X(()=>q(_t,` ${_.gitBehind??""}↓ ${_.gitAhead??""}↑`)),P("click",Me,()=>w("pull").then(()=>w("push"))),m(W,Me)};F(st,W=>{_.gitHasUpstream&&W(pt)})}var jt=p(Oe,2);{var gn=W=>{var Me=Ed(),ge=y(Me),re=p(ge,2);P("keydown",ge,Te=>{Te.key==="Enter"&&C(),Te.key==="Escape"&&h(s,!1)}),Qe(ge,()=>i(r),Te=>h(r,Te)),P("click",re,C),m(W,Me)};F(jt,W=>{i(s)&&W(gn)})}var Yn=p(jt,2);{var Pn=W=>{var Me=Td(),ge=ee(Me,!0);X(()=>q(ge,_.gitOutput)),m(W,Me)};F(Yn,W=>{_.gitOutput&&W(Pn)})}X(W=>{de(Le,"placeholder",`Message (Ctrl+Enter to commit on "${_.gitBranch||"branch"}")`),Ye.disabled=W,de(Ye,"title",i(f).length?"Commit staged changes":"Stage a change first"),q(qr,i(x).length),q(Fe,_.gitBranch||"—")},[()=>!i(n).trim()||!i(f).length||_.gitBusy==="commit"]),P("keydown",Le,M),Qe(Le,()=>i(n),W=>h(n,W)),P("click",Ye,S),P("click",pn,()=>h(o,!i(o))),P("click",Nn,()=>w("status")),P("click",Mn,()=>w("stage",{files:["."]})),P("click",_n,J),m(T,j)};F(De,T=>{_.notARepo?T(Ee):T(nt,-1)})}P("click",L,()=>h(c,!i(c))),m(e,G),vt()}Ht(["click","keydown"]);const Ad="modulepreload",Pd=function(e,t){return new URL(e,t).href},di={},va=function(t,n,r){let s=Promise.resolve();if(n&&n.length>0){let a=function(f){return Promise.all(f.map(x=>Promise.resolve(x).then(v=>({status:"fulfilled",value:v}),v=>({status:"rejected",reason:v}))))};const l=document.getElementsByTagName("link"),c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=a(n.map(f=>{if(f=Pd(f,r),f in di)return;di[f]=!0;const x=f.endsWith(".css"),v=x?'[rel="stylesheet"]':"";if(!!r)for(let w=l.length-1;w>=0;w--){const S=l[w];if(S.href===f&&(!x||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${v}`))return;const b=document.createElement("link");if(b.rel=x?"stylesheet":Ad,x||(b.as="script"),b.crossOrigin="",b.href=f,d&&b.setAttribute("nonce",d),document.head.appendChild(b),x)return new Promise((w,S)=>{b.addEventListener("load",w),b.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${f}`)))})}))}function o(a){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=a,window.dispatchEvent(l),!l.defaultPrevented)throw a}return s.then(a=>{for(const l of a||[])l.status==="rejected"&&o(l.reason);return t().catch(o)})},us={base:"vs-dark",inherit:!0,rules:[{token:"",foreground:"f8f8f2",background:"272822"},{token:"comment",foreground:"75715e",fontStyle:"italic"},{token:"string",foreground:"e6db74"},{token:"constant",foreground:"ae81ff"},{token:"number",foreground:"ae81ff"},{token:"keyword",foreground:"f92672"},{token:"operator",foreground:"f92672"},{token:"delimiter",foreground:"f8f8f2"},{token:"type",foreground:"66d9ef",fontStyle:"italic"},{token:"function",foreground:"a6e22e"},{token:"variable",foreground:"f8f8f2"},{token:"variable.parameter",foreground:"fd971f",fontStyle:"italic"},{token:"tag",foreground:"f92672"},{token:"attribute.name",foreground:"a6e22e"},{token:"attribute.value",foreground:"e6db74"},{token:"regexp",foreground:"e6db74"}],colors:{"editor.background":"#272822","editor.foreground":"#f8f8f2","editor.lineHighlightBackground":"#3e3d32","editor.selectionBackground":"#49483e","editorCursor.foreground":"#f8f8f0","editorWhitespace.foreground":"#3b3a32","editorLineNumber.foreground":"#90908a","editorLineNumber.activeForeground":"#f8f8f2","editorIndentGuide.background":"#3b3a32","editorGutter.background":"#272822"}},Id={py:"python",js:"javascript",mjs:"javascript",cjs:"javascript",ts:"typescript",tsx:"typescript",jsx:"javascript",json:"json",md:"markdown",html:"html",htm:"html",css:"css",scss:"scss",less:"less",sh:"shell",bash:"shell",zsh:"shell",yml:"yaml",yaml:"yaml",toml:"ini",ini:"ini",cfg:"ini",sql:"sql",go:"go",rs:"rust",rb:"ruby",php:"php",java:"java",c:"c",h:"c",cpp:"cpp",hpp:"cpp",cs:"csharp",svelte:"html",vue:"html",xml:"xml",dockerfile:"dockerfile"};function Od(e){var n;const t=(e||"").split("/").pop()||"";return t.toLowerCase()==="dockerfile"?"dockerfile":t.toLowerCase()==="makefile"?"shell":Id[(n=t.split(".").pop())==null?void 0:n.toLowerCase()]||"plaintext"}var Rd=z('<div class="editor svelte-1h8xysy"></div>');function Dd(e,t){ft(t,!0);let n,r=null,s=null,o="",a=!1;Ur(async()=>{s=await va(()=>import("./ide-monaco.js").then(c=>c.a),__vite__mapDeps([0,1]),import.meta.url),s.editor.defineTheme("monokai",us),r=s.editor.create(n,{value:"",theme:"monokai",automaticLayout:!0,fontSize:13,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",minimap:{enabled:!0},scrollBeyondLastLine:!1,renderWhitespace:"selection",tabSize:2}),r.onDidChangeModelContent(()=>{a||!o||_.updateContent(o,r.getValue())}),r.addCommand(s.KeyMod.CtrlCmd|s.KeyCode.KeyS,()=>_.saveActive())}),zo(()=>r==null?void 0:r.dispose()),Nt(()=>{const c=_.activeTab;if(!(!r||!s)){if(!c){a=!0,r.setValue(""),o="",a=!1;return}if(c.key!==o){a=!0;const d=s.editor.createModel(c.content,c.language||Od(c.path)),f=r.getModel();r.setModel(d),f==null||f.dispose(),r.updateOptions({readOnly:!!c.readOnly}),o=c.key,a=!1}else r.getValue()!==c.content&&(a=!0,r.setValue(c.content),a=!1)}});var l=Rd();xs(l,c=>n=c,()=>n),m(e,l),vt()}var Dn=ku(()=>_),Ld=z('<span class="h-2 w-2 rounded-full bg-vs-fg group-hover:hidden"></span> <!>',1),Fd=z('<div><button class="flex items-center gap-1.5 py-2 pr-1 pl-3" role="tab"><!> <span class="whitespace-nowrap"> </span></button> <button class="mr-1.5 flex h-5 w-5 items-center justify-center rounded-sm hover:bg-vs-line"><!></button></div>'),Hd=z('<div class="px-3 py-2 text-xs text-vs-muted">Open a file from the Explorer</div>'),jd=z('<div class="flex min-h-[35px] items-stretch overflow-x-auto bg-vs-tabinactive" role="tablist"></div>');function Bd(e,t){ft(t,!1);const n=s=>s.split("/").pop();Cl();var r=jd();je(r,5,()=>Dn().tabs,s=>s.key,(s,o)=>{var a=Fd();let l;var c=y(a),d=y(c);Ao(d,{size:14,class:"shrink-0 text-vs-blue"});var f=p(d,2),x=ee(f,!0),v=p(c,2),g=y(v);{var b=S=>{var C=Ld(),H=p(B(C),2);_s(H,{size:14,class:"hidden group-hover:block"}),m(S,C)},w=S=>{_s(S,{size:14,class:"opacity-0 group-hover:opacity-100"})};F(g,S=>{i(o).dirty?S(b):S(w,-1)})}X((S,C)=>{l=Tt(a,1,"group flex items-center border-r border-vs-bg text-[13px]",null,l,{"bg-vs-tabactive":i(o).key===Dn().activeKey,"text-vs-bright":i(o).key===Dn().activeKey,"text-vs-muted":i(o).key!==Dn().activeKey}),de(c,"aria-selected",i(o).key===Dn().activeKey),de(c,"title",i(o).path),q(x,S),de(v,"title",i(o).dirty?"Unsaved changes — close":"Close"),de(v,"aria-label",`Close ${C??""}`)},[()=>n(i(o).path),()=>n(i(o).path)]),P("click",c,()=>Dn(Dn().activeKey=i(o).key)),P("click",v,()=>Dn().closeTab(i(o).key)),m(s,a)},s=>{var o=Hd();m(s,o)}),m(e,r),vt()}Ht(["click"]);var Vd=z("<option> </option>"),Kd=z('<p class="rounded-sm border border-mk-pink/40 bg-mk-pink/10 px-2 py-1 text-xs text-mk-pink"> </p>'),Ud=z('<div class="flex flex-col gap-1.5"><span class="flex items-center gap-1.5 text-[11px] font-semibold text-mk-green"><!> </span> <div class="chat-prose text-[13px] leading-relaxed text-mk-fg svelte-1roe1v9"></div></div>'),Wd=z('<div class="flex flex-col gap-1.5 border-l-2 border-mk-blue/60 pl-2.5"><span class="text-[11px] font-semibold text-mk-blue">You</span> <div class="text-[13px] leading-relaxed whitespace-pre-wrap text-mk-fg/90"> </div></div>'),qd=z(`<div class="m-auto flex max-w-[250px] flex-col items-center gap-2.5 text-center"><!> <p class="text-xs leading-relaxed text-mk-comment">Ask about the file you have open. The prompt goes to <span class="text-mk-muted"> </span>,
            and the reply appears here.</p></div>`),Gd=z('<div class="flex items-center gap-2 text-[11px] text-mk-comment"><!> Working…</div>'),fi=z('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line"><span class="w-3 text-mk-green"><!></span> </button>'),Yd=z('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[150px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl"></div>'),Jd=z('<button class="flex w-full items-center gap-2 px-2.5 py-1 text-left text-xs text-mk-fg hover:bg-mk-line"><span class="w-3 text-mk-green"><!></span> <span class="truncate"> </span></button>'),Xd=z('<div class="absolute bottom-full left-0 z-20 mb-1 max-h-[260px] min-w-[190px] overflow-y-auto rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl"></div>'),Zd=z('<div class="relative" data-menu=""><button class="flex max-w-[110px] items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg" title="Model"><span class="truncate"> </span> <!></button> <!></div>'),Qd=z('<div class="absolute bottom-full left-0 z-20 mb-1 min-w-[130px] rounded-md border border-mk-line bg-mk-panel py-1 shadow-2xl"></div>'),ef=z('<div class="relative" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg" title="Reasoning effort"> <!></button> <!></div>'),tf=z('<div class="flex h-full min-h-0 flex-col bg-mk-bg text-mk-fg"><div class="flex items-center gap-2 border-b border-mk-line px-3 py-1.5"><!> <span class="text-[11px] font-semibold tracking-wide text-mk-muted uppercase">Chat</span> <select class="ml-auto min-w-0 max-w-[55%] truncate rounded-sm border border-mk-line bg-mk-input px-1.5 py-0.5 text-[11px] text-mk-fg outline-none focus:border-mk-green" title="Agent session that answers"></select></div> <div class="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto px-3 py-3"><!> <!> <!></div> <div class="border-t border-mk-line p-2"><div class="rounded-md border border-mk-line bg-mk-input focus-within:border-mk-green"><textarea rows="2" class="max-h-[200px] w-full resize-none bg-transparent px-2.5 py-2 text-[13px] text-mk-fg outline-none placeholder:text-mk-comment" placeholder="Ask about this workspace…"></textarea> <div class="flex items-center gap-1 px-1.5 pb-1.5 text-[11px]"><div class="relative" data-menu=""><button class="flex items-center gap-1 rounded-sm px-1.5 py-0.5 text-mk-muted hover:bg-mk-line hover:text-mk-fg" title="Agent"> <!></button> <!></div> <!> <!> <!> <span class="ml-auto flex items-center gap-1.5"><kbd class="hidden text-[10px] text-mk-comment sm:inline">↵ send · ⇧↵ newline</kbd> <button class="flex h-6 w-6 items-center justify-center rounded-md bg-mk-green text-mk-bg disabled:opacity-40" title="Send (Enter)" aria-label="Send"><!></button></span></div></div></div></div>');function nf(e,t){ft(t,!0);let n=He(t,"sessions",19,()=>[]),r=He(t,"session",3,""),s=He(t,"rootPath",3,""),o=I(""),a=I(Ce(r()||n()[0]||"")),l=I(!1),c=I(Ce([])),d=I(""),f=I(null),x=I(null),v=null,g=I(Ce({agent:"codex",available:[],model:"",effort:"",models:[],efforts:[]})),b=I(""),w=I("");const S=ut(()=>(i(g).models.find(N=>N[0]===i(g).model)||[])[1]||i(g).model||"default");let C=I("");async function H(){if(!_.connectionId){h(C,"");return}try{h(C,(await be.agentContext(_.connectionId)).context||"",!0)}catch{h(C,"")}}Nt(()=>{_.connectionId,H()});async function A(){if(i(a))try{h(g,{agent:"codex",available:[],model:"",effort:"",models:[],efforts:[],...await be.sessionAgent(i(a))},!0)}catch(N){h(g,{agent:i(g).agent,available:[],model:"",effort:"",models:[],efforts:[]},!0),_.setStatus(N.message||"Could not read agent settings")}}async function J(){if(i(a))try{const K=(await be.chat(i(a))).messages||[],te=K.length!==i(c).length;h(c,K,!0),h(d,""),te&&queueMicrotask(E)}catch(N){h(d,N.message||"Could not load chat",!0)}}function E(){i(f)&&(i(f).scrollTop=i(f).scrollHeight)}Nt(()=>{const N=i(a);h(c,[],!0),v&&clearInterval(v),N&&(J(),A(),v=setInterval(J,3e3))}),zo(()=>{v&&clearInterval(v)});async function $(N){if(h(b,""),N!==i(g).agent){h(w,"agent");try{await be.setSessionAgent(i(a),N),await A(),_.setStatus(`Switched to ${N}`)}catch(K){_.setStatus(K.message||"Could not switch agent")}finally{h(w,"")}}}async function M(N){if(h(b,""),N!==i(g).model){h(w,"model");try{await be.setSessionModel(i(a),N),await A(),_.setStatus(`Model set to ${N}`)}catch(K){_.setStatus(K.message||"Could not change model")}finally{h(w,"")}}}async function G(N){if(h(b,""),N!==i(g).effort){h(w,"effort");try{await be.setSessionEffort(i(a),N),await A(),_.setStatus(`Reasoning effort set to ${N}`)}catch(K){_.setStatus(K.message||"Could not change effort")}finally{h(w,"")}}}function D(){const N=_.connection||{},K=_.activeTab,te=K?K.path:_.path||".",xe=K?`
Active file contents (first 12,000 characters):
${K.content.slice(0,12e3)}`:"";return`${i(C)||(N.kind==="local"?`[IDE workspace]
Local folder: ${N.workspace_root||"."}
`:`[IDE workspace]
SSH target: ${N.username||"?"}@${N.host||"?"}
`)}
Currently open: ${te}${xe}

${i(o).trim()}`}async function U(){const N=i(o).trim();if(!N||!i(a)||i(l))return;const K=D();h(l,!0);try{const te=await fetch(`${s()}/api/sessions/${encodeURIComponent(i(a))}/send`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({command:K})}),xe=await te.json().catch(()=>({}));if(!te.ok)throw new Error(xe.error||"Could not send");h(o,""),i(x)&&(i(x).style.height="auto"),h(c,[...i(c),{role:"user",text:N,ts:Date.now()/1e3,_local:!0}],!0),queueMicrotask(E),setTimeout(J,1200)}catch(te){_.setStatus(te.message||"Could not send prompt")}finally{h(l,!1)}}function L(N){N.key==="Enter"&&!N.shiftKey&&(N.preventDefault(),U())}function Y(N){const K=N.currentTarget;K.style.height="auto",K.style.height=`${Math.min(K.scrollHeight,200)}px`}const ue=N=>N.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");function me(N){const K=[];return ue(N).replace(/```(\w*)\n?([\s\S]*?)```/g,(we,Oe,Pe)=>(K.push(`<pre class="chat-code"><code>${Pe.replace(/\n$/,"")}</code></pre>`),`\0BLOCK${K.length-1}\0`)).replace(/`([^`\n]+)`/g,'<code class="chat-inline">$1</code>').replace(/\*\*([^*\n]+)\*\*/g,"<strong>$1</strong>").split(`
`).map(we=>{const Oe=we.match(/^\s*[-*]\s+(.*)$/);return Oe?`<span class="chat-li">${Oe[1]}</span>`:we}).join(`
`).replace(/\u0000BLOCK(\d+)\u0000/g,(we,Oe)=>K[Number(Oe)])}function De(N){const K=N.full||N.text||"",te=`

`;if(K.startsWith("[IDE workspace")||K.startsWith("[Remote IDE context]")||K.startsWith("[Remote SSH IDE context]")){const xe=K.lastIndexOf(te);if(xe!==-1)return K.slice(xe+te.length)}return K}var Ee=tf();hr("click",gs,N=>{var K,te;(te=(K=N.target).closest)!=null&&te.call(K,"[data-menu]")||h(b,"")});var nt=y(Ee),T=y(nt);Ya(T,{size:13,class:"shrink-0 text-mk-green"});var j=p(T,4);je(j,20,n,N=>N,(N,K)=>{var te=Vd(),xe=ee(te,!0),we={};X(()=>{q(xe,K),we!==(we=K)&&(te.value=(te.__value=we)??"")}),m(N,te)}),ps(j);var _e=p(nt,2),Le=y(_e);{var Ye=N=>{var K=Kd(),te=ee(K,!0);X(()=>q(te,i(d))),m(N,K)};F(Le,N=>{i(d)&&N(Ye)})}var ht=p(Le,2);je(ht,19,()=>i(c),(N,K)=>N.ts+":"+K,(N,K)=>{var te=Q(),xe=B(te);{var we=Pe=>{var Be=Ud(),Ve=y(Be),Fe=y(Ve);Ya(Fe,{size:11});var st=p(Fe),pt=p(Ve,2);fu(pt,()=>me(De(i(K))),!0),X(()=>q(st,` ${i(g).agent==="claude"?"Claude":"Codex"}`)),m(Pe,Be)},Oe=Pe=>{var Be=Wd(),Ve=p(y(Be),2),Fe=ee(Ve,!0);X(st=>q(Fe,st),[()=>De(i(K))]),m(Pe,Be)};F(xe,Pe=>{i(K).role==="assistant"?Pe(we):Pe(Oe,-1)})}m(N,te)},N=>{var K=Q(),te=B(K);{var xe=we=>{var Oe=qd(),Pe=y(Oe);Ya(Pe,{size:26,strokeWidth:1.3,class:"text-mk-line"});var Be=p(Pe,2),Ve=p(y(Be)),Fe=ee(Ve,!0);X(()=>q(Fe,i(a)||"the selected session")),m(we,Oe)};F(te,we=>{i(d)||we(xe)})}m(N,K)});var vn=p(ht,2);{var hn=N=>{var K=Gd(),te=y(K);Vn(te,{size:11,class:"animate-spin"}),m(N,K)};F(vn,N=>{i(l)&&N(hn)})}xs(_e,N=>h(f,N),()=>i(f));var yt=p(_e,2),pr=y(yt),Xt=y(pr);xs(Xt,N=>h(x,N),()=>i(x));var pn=p(Xt,2),_r=y(pn),Tn=y(_r),Wn=y(Tn),gr=p(Wn);Bn(gr,{size:11});var Nn=p(Tn,2);{var mr=N=>{var K=Yd();je(K,20,()=>i(g).available.length?i(g).available:["codex"],te=>te,(te,xe)=>{var we=fi(),Oe=y(we),Pe=y(Oe);{var Be=Fe=>{da(Fe,{size:11})};F(Pe,Fe=>{xe===i(g).agent&&Fe(Be)})}var Ve=p(Oe);X(()=>q(Ve,` ${xe==="claude"?"Claude":"Codex"}`)),P("click",we,()=>$(xe)),m(te,we)}),m(N,K)};F(Nn,N=>{i(b)==="agent"&&N(mr)})}var Mn=p(_r,2);{var Wr=N=>{var K=Zd(),te=y(K),xe=y(te),we=ee(xe,!0),Oe=p(xe,2);Bn(Oe,{size:11,class:"shrink-0"});var Pe=p(te,2);{var Be=Ve=>{var Fe=Xd();je(Fe,21,()=>i(g).models,st=>st[0],(st,pt)=>{var jt=Jd(),gn=y(jt),Yn=y(gn);{var Pn=ge=>{da(ge,{size:11})};F(Yn,ge=>{i(pt)[0]===i(g).model&&ge(Pn)})}var W=p(gn,2),Me=ee(W,!0);X(()=>q(Me,i(pt)[1])),P("click",jt,()=>M(i(pt)[0])),m(st,jt)}),m(Ve,Fe)};F(Pe,Ve=>{i(b)==="model"&&Ve(Be)})}X(()=>q(we,i(S))),P("click",te,()=>h(b,i(b)==="model"?"":"model",!0)),m(N,K)};F(Mn,N=>{i(g).models.length&&N(Wr)})}var zn=p(Mn,2);{var qr=N=>{var K=ef(),te=y(K),xe=y(te),we=p(xe);Bn(we,{size:11});var Oe=p(te,2);{var Pe=Be=>{var Ve=Qd();je(Ve,20,()=>i(g).efforts,Fe=>Fe,(Fe,st)=>{var pt=fi(),jt=y(pt),gn=y(jt);{var Yn=W=>{da(W,{size:11})};F(gn,W=>{st===i(g).effort&&W(Yn)})}var Pn=p(jt);X(()=>q(Pn,` ${st??""}`)),P("click",pt,()=>G(st)),m(Fe,pt)}),m(Be,Ve)};F(Oe,Be=>{i(b)==="effort"&&Be(Pe)})}X(()=>q(xe,`${(i(g).effort||"effort")??""} `)),P("click",te,()=>h(b,i(b)==="effort"?"":"effort",!0)),m(N,K)};F(zn,N=>{i(g).efforts.length&&N(qr)})}var An=p(zn,2);{var Gr=N=>{Vn(N,{size:11,class:"animate-spin text-mk-muted"})};F(An,N=>{i(w)&&N(Gr)})}var qn=p(An,2),_n=p(y(qn),2),Gn=y(_n);{var Yr=N=>{nd(N,{size:11})},Jr=N=>{Iu(N,{size:13})};F(Gn,N=>{i(l)?N(Yr):N(Jr,-1)})}X(N=>{q(Wn,`${i(g).agent==="claude"?"Claude":"Codex"} `),_n.disabled=N},[()=>i(l)||!i(o).trim()]),vo(j,()=>i(a),N=>h(a,N)),P("keydown",Xt,L),P("input",Xt,Y),Qe(Xt,()=>i(o),N=>h(o,N)),P("click",Tn,()=>h(b,i(b)==="agent"?"":"agent",!0)),P("click",_n,U),m(e,Ee),vt()}Ht(["keydown","input","click"]);var rf=z('<span class="hint svelte-e2eyom">searching…</span>'),sf=z('<li><button><span class="name svelte-e2eyom"> </span> <span class="path svelte-e2eyom"> </span> <!></button></li>'),af=z('<ul class="results svelte-e2eyom"></ul>'),of=z('<p class="empty svelte-e2eyom"> </p>'),lf=z('<div class="backdrop svelte-e2eyom" role="button" tabindex="-1"></div> <div class="dialog svelte-e2eyom" role="dialog" aria-label="Quick open"><div class="field svelte-e2eyom"><!> <input placeholder="Search files by name…" aria-label="Search files by name" class="svelte-e2eyom"/> <!></div> <!></div>',1);function cf(e,t){ft(t,!0);let n=I(""),r=I(Ce([])),s=I(0),o=I(!1),a=I(null),l=null;Nt(()=>{i(a)&&i(a).focus()}),Nt(()=>{const $=i(n).trim();if(l&&clearTimeout(l),!$){h(r,[],!0);return}l=setTimeout(async()=>{h(o,!0);try{const M=await be.searchFiles(_.connectionId,_.path||".",$);h(r,M.matches||[],!0),h(s,0)}catch{h(r,[],!0)}finally{h(o,!1)}},180)});async function c($){var G;if(!$)return;const M=_.path&&_.path!=="."?`${_.path}/`:"";await _.openFile(`${M}${$.path}`),(G=t.onclose)==null||G.call(t)}function d($){var M;$.key==="Escape"?($.preventDefault(),(M=t.onclose)==null||M.call(t)):$.key==="ArrowDown"?($.preventDefault(),h(s,Math.min(i(s)+1,i(r).length-1),!0)):$.key==="ArrowUp"?($.preventDefault(),h(s,Math.max(i(s)-1,0),!0)):$.key==="Enter"&&($.preventDefault(),c(i(r)[i(s)]))}var f=lf(),x=B(f),v=p(x,2),g=y(v),b=y(g);Po(b,{size:14});var w=p(b,2);xs(w,$=>h(a,$),()=>i(a));var S=p(w,2);{var C=$=>{var M=rf();m($,M)};F(S,$=>{i(o)&&$(C)})}var H=p(g,2);{var A=$=>{var M=af();je(M,23,()=>i(r),G=>G.path,(G,D,U)=>{var L=sf(),Y=y(L);let ue;var me=y(Y),De=ee(me,!0),Ee=p(me,2),nt=ee(Ee,!0),T=p(Ee,2);{var j=_e=>{Fu(_e,{size:12})};F(T,_e=>{i(U)===i(s)&&_e(j)})}X(()=>{ue=Tt(Y,1,"svelte-e2eyom",null,ue,{active:i(U)===i(s)}),q(De,i(D).name),q(nt,i(D).path)}),P("click",Y,()=>c(i(D))),m(G,L)}),m($,M)},J=$=>{var M=of(),G=ee(M);X(D=>q(G,`No files match “${D??""}”.`),[()=>i(n).trim()]),m($,M)},E=ut(()=>i(n).trim()&&!i(o));F(H,$=>{i(r).length?$(A):i(E)&&$(J,1)})}P("click",x,()=>{var $;return($=t.onclose)==null?void 0:$.call(t)}),P("keydown",x,$=>{var M;return $.key==="Escape"&&((M=t.onclose)==null?void 0:M.call(t))}),P("keydown",w,d),Qe(w,()=>i(n),$=>h(n,$)),m(e,f),vt()}Ht(["click","keydown"]);var uf=z('<div class="terminal-pane svelte-maclc7"><div class="bar svelte-maclc7"><span class="label svelte-maclc7">Terminal</span> <span> </span></div> <div class="screen svelte-maclc7"></div></div>');function df(e,t){ft(t,!0);let n=He(t,"rootPath",3,""),r=He(t,"session",3,""),s=He(t,"index",3,0),o,a=null,l=null,c=null,d=I("connecting"),f=null,x=0,v=null,g=!1;const b={background:us.colors["editor.background"],foreground:us.colors["editor.foreground"],cursor:us.colors["editorCursor.foreground"],selectionBackground:us.colors["editor.selectionBackground"],black:"#272822",red:"#f92672",green:"#a6e22e",yellow:"#e6db74",blue:"#66d9ef",magenta:"#ae81ff",cyan:"#a1efe4",white:"#f8f8f2",brightBlack:"#75715e",brightRed:"#f92672",brightGreen:"#a6e22e",brightYellow:"#e6db74",brightBlue:"#66d9ef",brightMagenta:"#ae81ff",brightCyan:"#a1efe4",brightWhite:"#f9f8f5"};function w(){if(!(!l||!a||(c==null?void 0:c.readyState)!==WebSocket.OPEN))try{l.fit(),c.send(JSON.stringify({type:"resize",cols:a.cols,rows:a.rows}))}catch{}}function S(){if(g)return;const M=`${location.protocol==="https:"?"wss":"ws"}://${location.host}${n()}/ws/sessions/${encodeURIComponent(r())}/ide/terminal/${encodeURIComponent(_.connectionId)}?index=${encodeURIComponent(s())}`;c=new WebSocket(M),c.binaryType="arraybuffer",c.onopen=()=>{h(d,"connected"),x=0,w()},c.onmessage=G=>{a.write(typeof G.data=="string"?G.data:new Uint8Array(G.data))},c.onclose=G=>{if(g)return;if(G.code===1008){h(d,"refused"),a==null||a.write(`\r
\x1B[31m— not authorised for this terminal —\x1B[0m\r
`);return}if(x>=6){h(d,"closed"),a==null||a.write(`\r
\x1B[33m— terminal unavailable; reopen the panel to retry —\x1B[0m\r
`);return}h(d,"reconnecting");const D=Math.min(1e3*2**x,1e4);x+=1,v=setTimeout(S,D)},c.onerror=()=>{g||h(d,"error")}}Ur(async()=>{const[{Terminal:$},{FitAddon:M}]=await Promise.all([va(()=>import("./ide-xterm.js"),[],import.meta.url),va(()=>import("./ide-addon-fit.js"),[],import.meta.url)]);await va(()=>Promise.resolve({}),__vite__mapDeps([2]),import.meta.url),a=new $({theme:b,fontSize:12,fontFamily:"ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",cursorBlink:!0,scrollback:5e3}),l=new M,a.loadAddon(l),a.open(o),l.fit(),S(),a.onData(G=>{(c==null?void 0:c.readyState)===WebSocket.OPEN&&c.send(new TextEncoder().encode(G))}),f=new ResizeObserver(()=>w()),f.observe(o)}),zo(()=>{g=!0,v&&clearTimeout(v),f==null||f.disconnect(),c==null||c.close(),a==null||a.dispose()});var C=uf(),H=y(C),A=p(y(H),2),J=ee(A,!0),E=p(H,2);xs(E,$=>o=$,()=>o),X(()=>{Tt(A,1,`status ${i(d)??""}`,"svelte-maclc7"),q(J,i(d))}),m(e,C),vt()}var ff=z('<div class="border-b border-vs-line bg-vs-red/10 px-4 py-2 text-xs text-vs-red"> </div>'),vf=z('<div class="flex items-center gap-2 px-4 py-3 text-xs text-vs-muted"><!> Loading…</div>'),hf=z('<button class="flex w-full items-center gap-2 px-4 py-1 text-left text-[13px] text-vs-fg hover:bg-vs-hover"><!> <span class="truncate"> </span></button>'),pf=z('<div class="px-4 py-3 text-xs text-vs-muted">No sub-folders here. You can still open this folder.</div>'),_f=z('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="flex h-[70vh] w-[min(640px,92vw)] flex-col overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright">Open Folder <span class="ml-1 font-normal text-vs-muted"><!></span></div> <form class="flex gap-2 border-b border-vs-line px-3 py-2"><button type="button" class="flex items-center gap-1 rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover disabled:opacity-40" title="Up one folder"><!> Up</button> <input class="min-w-0 flex-1 rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-xs text-vs-fg outline-none focus:border-vs-accent" spellcheck="false" aria-label="Folder path"/> <button type="submit" class="rounded-sm px-2 py-1 text-xs text-vs-fg hover:bg-vs-hover">Go</button></form> <!> <div class="min-h-0 flex-1 overflow-y-auto py-1"><!></div> <div class="flex items-center gap-2 border-t border-vs-line px-4 py-3"><span class="flex min-w-0 flex-1 items-center gap-2 text-xs text-vs-muted"><!> <span class="truncate font-mono"> </span></span> <button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40">Open Folder</button></div></div></div>');function gf(e,t){ft(t,!0);let n=I(""),r=I(""),s=I(Ce([])),o=I(""),a=I(!0),l=I("");async function c(T){h(a,!0),h(o,"");try{const j=_.connectionId?await be.browseOn(_.connectionId,T):await be.browse(T);h(n,j.path,!0),h(r,j.parent,!0),h(s,j.entries||[],!0),h(l,j.path,!0)}catch(j){h(o,j.message||"Could not open that folder",!0)}finally{h(a,!1)}}Ur(()=>c(""));function d(T){T.preventDefault(),i(l).trim()&&c(i(l).trim())}var f=_f(),x=y(f),v=y(x),g=p(y(v)),b=y(g);{var w=T=>{var j=Jo();X(()=>q(j,`on ${_.connection.username??""}@${_.connection.host??""}`)),m(T,j)},S=T=>{var j=Jo("on this server");m(T,j)};F(b,T=>{_.connection&&_.connection.kind!=="local"?T(w):T(S,-1)})}var C=p(v,2),H=y(C),A=y(H);Hu(A,{size:14});var J=p(H,2),E=p(C,2);{var $=T=>{var j=ff(),_e=ee(j,!0);X(()=>q(_e,i(o))),m(T,j)};F(E,T=>{i(o)&&T($)})}var M=p(E,2),G=y(M);{var D=T=>{var j=vf(),_e=y(j);Vn(_e,{size:13,class:"animate-spin"}),m(T,j)},U=T=>{var j=Q(),_e=B(j);je(_e,17,()=>i(s),Le=>Le.path,(Le,Ye)=>{var ht=hf(),vn=y(ht);qu(vn,{size:14,class:"shrink-0 text-vs-blue"});var hn=p(vn,2),yt=ee(hn,!0);X(()=>q(yt,i(Ye).name)),P("dblclick",ht,()=>c(i(Ye).path)),P("click",ht,()=>c(i(Ye).path)),m(Le,ht)},Le=>{var Ye=pf();m(Le,Ye)}),m(T,j)};F(G,T=>{i(a)?T(D):T(U,-1)})}var L=p(M,2),Y=y(L),ue=y(Y);Gu(ue,{size:13,class:"shrink-0"});var me=p(ue,2),De=ee(me,!0),Ee=p(Y,2),nt=p(Ee,2);X(()=>{H.disabled=!i(r),de(me,"title",i(n)),q(De,i(n)),nt.disabled=!i(n)||i(a)}),P("click",f,T=>T.target===T.currentTarget&&t.onclose()),P("keydown",f,T=>T.key==="Escape"&&t.onclose()),hr("submit",C,d),P("click",H,()=>i(r)&&c(i(r))),Qe(J,()=>i(l),T=>h(l,T)),P("click",Ee,function(...T){var j;(j=t.onclose)==null||j.apply(this,T)}),P("click",nt,()=>t.onopen(i(n))),m(e,f),vt()}Ht(["click","keydown","dblclick"]);var mf=z('<p class="px-4 py-2 text-xs text-vs-muted">Open a folder to search it.</p>'),bf=z('<button class="flex w-full items-center gap-2 px-3 py-1 text-left text-[13px] hover:bg-vs-hover"><!> <span class="truncate text-vs-fg"> </span> <span class="ml-auto max-w-[45%] truncate text-[11px] text-vs-muted"> </span></button>'),xf=z('<p class="px-4 py-2 text-xs text-vs-muted"> </p>'),yf=z('<p class="px-4 py-2 text-xs text-vs-muted">Type to search filenames in this workspace.</p>'),wf=z('<div class="flex h-full min-h-0 flex-col"><div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Search</div> <div class="px-3 pb-2"><div class="flex items-center gap-1.5 rounded-sm border border-vs-line bg-vs-input px-2 focus-within:border-vs-accent"><!> <input class="min-w-0 flex-1 bg-transparent py-1 text-xs text-vs-fg outline-none placeholder:text-vs-muted" placeholder="Search filenames" spellcheck="false"/> <!></div></div> <div class="min-h-0 flex-1 overflow-y-auto"><!></div></div>');function kf(e,t){ft(t,!0);let n=I(""),r=I(Ce([])),s=I(!1),o=I(!1),a=null;Nt(()=>{const A=i(n).trim();if(a&&clearTimeout(a),!A||!_.connectionId){h(r,[],!0),h(o,!1);return}a=setTimeout(async()=>{h(s,!0);try{const J=await be.searchFiles(_.connectionId,_.path||".",A);h(r,J.matches||[],!0)}catch(J){h(r,[],!0),_.setStatus(J.message||"Search failed")}finally{h(s,!1),h(o,!0)}},200)});const l=A=>{const J=(A||"").split("/");return J.pop(),J.join("/")};var c=wf(),d=p(y(c),2),f=y(d),x=y(f);Po(x,{size:12,class:"shrink-0 text-vs-muted"});var v=p(x,2),g=p(v,2);{var b=A=>{Vn(A,{size:12,class:"shrink-0 animate-spin text-vs-muted"})};F(g,A=>{i(s)&&A(b)})}var w=p(d,2),S=y(w);{var C=A=>{var J=mf();m(A,J)},H=A=>{var J=Q(),E=B(J);je(E,17,()=>i(r),$=>$.path,($,M)=>{var G=bf(),D=y(G);Ao(D,{size:13,class:"shrink-0 text-vs-blue"});var U=p(D,2),L=ee(U,!0),Y=p(U,2),ue=ee(Y,!0);X((me,De)=>{de(G,"title",i(M).path),q(L,me),q(ue,De)},[()=>i(M).name||i(M).path.split("/").pop(),()=>l(i(M).path)]),P("click",G,()=>_.openFile(i(M).path)),m($,G)},$=>{var M=Q(),G=B(M);{var D=Y=>{var ue=xf(),me=ee(ue);X(()=>q(me,`No files match “${i(n)??""}”.`)),m(Y,ue)},U=Y=>{var ue=yf();m(Y,ue)},L=ut(()=>!i(n).trim());F(G,Y=>{i(o)&&!i(s)?Y(D):i(L)&&Y(U,1)})}m($,M)}),m(A,J)};F(S,A=>{_.connectionId?A(H,-1):A(C)})}Qe(v,()=>i(n),A=>h(n,A)),m(e,c),vt()}Ht(["click"]);var $f=z('<p class="flex items-center gap-2 text-vs-muted"><!> Fetching host key…</p>'),Sf=z('<p class="text-vs-red"> </p>'),Cf=z("<p>This host is already trusted. Try connecting again.</p>"),Ef=z('<div class="flex items-baseline gap-2 font-mono text-[11px]"><span class="w-16 shrink-0 text-vs-muted"> </span> <span class="break-all text-vs-fg"> </span></div>'),Tf=z(`<p>The authenticity of <span class="font-mono text-vs-blue"> </span> can't be established. Verify these fingerprints match the server before you continue —
          if they don't, someone may be intercepting the connection.</p> <div class="mt-3 flex flex-col gap-1 rounded-sm border border-vs-line bg-vs-input p-2"></div> <p class="mt-3 text-xs text-vs-muted">Accepting adds the key to <span class="font-mono">~/.ssh/known_hosts</span> on this server.</p>`,1),Nf=z('<button class="rounded-sm bg-vs-status px-3 py-1 text-xs font-medium text-white hover:brightness-110 disabled:opacity-40"> </button>'),Mf=z('<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/60" role="presentation"><div class="w-[min(560px,92vw)] overflow-hidden rounded-md border border-vs-line bg-vs-panel shadow-2xl"><div class="flex items-center gap-2 border-b border-vs-line px-4 py-3 text-sm font-semibold text-vs-bright"><!> Unknown host</div> <div class="px-4 py-3 text-[13px] leading-relaxed text-vs-fg"><!></div> <div class="flex justify-end gap-2 border-t border-vs-line px-4 py-3"><button class="rounded-sm px-3 py-1 text-xs text-vs-fg hover:bg-vs-hover">Cancel</button> <!></div></div></div>');function zf(e,t){ft(t,!0);let n=I(!0),r=I(""),s=I(null),o=I(!1);Ur(async()=>{try{h(s,await be.hostKey(_.connectionId),!0)}catch(E){h(r,E.message||"Could not fetch the host key",!0)}finally{h(n,!1)}});async function a(){h(o,!0);try{await be.trustHost(_.connectionId),t.ontrusted()}catch(E){h(r,E.message||"Could not trust this host",!0),h(o,!1)}}var l=Mf(),c=y(l),d=y(c),f=y(d);td(f,{size:15,class:"text-vs-yellow"});var x=p(d,2),v=y(x);{var g=E=>{var $=$f(),M=y($);Vn(M,{size:13,class:"animate-spin"}),m(E,$)},b=E=>{var $=Sf(),M=ee($,!0);X(()=>q(M,i(r))),m(E,$)},w=E=>{var $=Cf();m(E,$)},S=E=>{var $=Tf(),M=B($),G=p(y(M)),D=ee(G),U=p(M,2);je(U,21,()=>i(s).fingerprints,L=>L.fingerprint,(L,Y)=>{var ue=Ef(),me=y(ue),De=ee(me,!0),Ee=p(me,2),nt=ee(Ee,!0);X(()=>{q(De,i(Y).type),q(nt,i(Y).fingerprint)}),m(L,ue)}),X(()=>q(D,`${i(s).host??""}:${i(s).port??""}`)),m(E,$)};F(v,E=>{var $;i(n)?E(g):i(r)?E(b,1):($=i(s))!=null&&$.known?E(w,2):E(S,-1)})}var C=p(x,2),H=y(C),A=p(H,2);{var J=E=>{var $=Nf(),M=ee($,!0);X(()=>{$.disabled=i(o),q(M,i(o)?"Trusting…":"Trust and connect")}),P("click",$,a),m(E,$)};F(A,E=>{var $;!i(n)&&!(($=i(s))!=null&&$.known)&&!i(r)&&E(J)})}P("click",l,E=>E.target===E.currentTarget&&t.onclose()),P("keydown",l,E=>E.key==="Escape"&&t.onclose()),P("click",H,function(...E){var $;($=t.onclose)==null||$.apply(this,E)}),m(e,l),vt()}Ht(["click","keydown"]);var Af=z('<div role="separator" tabindex="0" title="Drag to resize (double-click to reset)"><div></div></div>');function Ja(e,t){ft(t,!0);let n=He(t,"size",15),r=He(t,"side",3,"right"),s=He(t,"min",3,120),o=He(t,"max",3,800),a=He(t,"onreset",3,null),l=I(!1);const c=r()==="top";function d(b){var J;b.preventDefault(),h(l,!0);const w=c?b.clientY:b.clientX,S=n(),C=b.currentTarget;(J=C.setPointerCapture)==null||J.call(C,b.pointerId);function H(E){const M=(c?E.clientY:E.clientX)-w,G=r()==="left"||r()==="top"?-M:M;n(Math.round(Math.min(o(),Math.max(s(),S+G))))}function A(){var E;h(l,!1),(E=C.releasePointerCapture)==null||E.call(C,b.pointerId),window.removeEventListener("pointermove",H),window.removeEventListener("pointerup",A)}window.addEventListener("pointermove",H),window.addEventListener("pointerup",A)}function f(b){const w=b.shiftKey?40:10,S=c?"ArrowUp":r()==="left"?"ArrowLeft":"ArrowRight",C=c?"ArrowDown":r()==="left"?"ArrowRight":"ArrowLeft";if(b.key===S)n(Math.min(o(),n()+w));else if(b.key===C)n(Math.max(s(),n()-w));else return;b.preventDefault()}var x=Af();let v;var g=ee(x);X(()=>{v=Tt(x,1,`group relative shrink-0 ${c?"h-1 w-full cursor-row-resize":"w-1 cursor-col-resize"}`,null,v,{"bg-vs-accent":i(l)}),de(x,"aria-orientation",c?"horizontal":"vertical"),de(x,"aria-valuenow",n()),de(x,"aria-valuemin",s()),de(x,"aria-valuemax",o()),Tt(g,1,`absolute ${c?"-top-1 -bottom-1 left-0 right-0":"-left-1 -right-1 top-0 bottom-0"}
           transition-colors group-hover:bg-vs-accent ${i(l)?"bg-vs-accent":""}`)}),P("pointerdown",x,d),P("dblclick",x,()=>{var b;return(b=a())==null?void 0:b()}),P("keydown",x,f),m(e,x),vt()}Ht(["pointerdown","dblclick","keydown"]);var Pf=z('<span class="absolute top-0 bottom-0 left-0 w-0.5 bg-vs-bright"></span>'),If=z('<span class="absolute right-1.5 bottom-1.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-vs-status px-1 text-[10px] leading-none font-semibold text-white"> </span>'),Of=z("<button><!> <!> <!></button>"),Rf=z("<option> </option>"),Df=z('<button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover hover:text-vs-red" title="Remove workspace" aria-label="Remove workspace"><!></button>'),Lf=z('<input class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" type="password" placeholder="Password (optional)" autocomplete="new-password"/>'),Ff=z(`<button class="w-full rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Show this host's key fingerprint and trust it">Verify host key…</button>`),Hf=z('<!> <button class="w-full rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"> </button> <!>',1),jf=z('<p class="mt-1 font-mono text-[11px] break-all text-vs-muted"> </p>'),Bf=z('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="~/.ssh/id_ed25519"/> <textarea class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 font-mono text-[11px] outline-none focus:border-vs-accent" rows="4" placeholder="…or paste a private key (-----BEGIN OPENSSH PRIVATE KEY-----)" spellcheck="false"></textarea>',1),Vf=z('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" type="password" placeholder="Password" autocomplete="new-password"/>'),Kf=z('<input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Host" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="User" required=""/> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Port" type="number" min="1" max="65535"/> <select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>SSH agent</option><option>Existing key</option><option>Password (saved, encrypted)</option></select> <!> <!>',1),Uf=z('<form class="mt-2 flex flex-col gap-1.5 border-t border-vs-line px-3 pt-2"><select class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"><option>This server (local folder)</option><option>Remote host over SSH</option></select> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs" placeholder="Label"/> <!> <input class="rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs"/> <div class="flex gap-1 pb-2"><button class="flex-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110" type="submit">Create</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" type="button">Cancel</button></div></form>'),Wf=z('<div class="px-4 py-1.5 text-[11px] font-semibold tracking-wide uppercase">Workspaces</div> <div class="flex flex-col gap-2 px-3 pt-1"><select class="w-full rounded-sm border border-vs-line bg-vs-input px-2 py-1 text-xs outline-none focus:border-vs-accent" aria-label="Workspace"><option>— select workspace —</option><!></select> <div class="flex gap-1"><button class="flex flex-1 items-center justify-center gap-1 rounded-sm bg-vs-status px-2 py-1 text-xs text-white hover:brightness-110"><!> Open Folder</button> <button class="rounded-sm border border-vs-line px-2 py-1 text-xs hover:bg-vs-hover" title="Add a workspace or SSH connection" aria-label="Add workspace"><!></button> <!></div> <!> <!></div> <!>',1),qf=z('<aside class="flex shrink-0 flex-col overflow-hidden border-r border-vs-border bg-vs-panel"><!></aside> <!>',1),Gf=z('<div class="flex flex-1 flex-col items-center justify-center gap-6 px-6 text-center"><!> <div><h1 class="text-2xl font-light text-vs-fg">Multibuilder IDE</h1> <p class="mt-1 text-sm text-vs-muted">Edit files on this server or on a remote host over SSH.</p></div> <div class="flex flex-col gap-2 text-sm"><button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Open Folder… <kbd class="ml-2 rounded-sm border border-vs-line px-1.5 py-0.5 text-[10px] text-vs-muted">Ctrl+Shift+O</kbd></button> <button class="flex items-center gap-2 text-vs-blue hover:underline"><!> Connect to a host over SSH…</button></div></div>'),Yf=z('<button class="rounded-sm p-0.5 opacity-0 group-hover:opacity-100 hover:bg-vs-line" title="Close terminal"><!></button>'),Jf=z('<span><button class="max-w-[140px] truncate"> </button> <!></span>'),Xf=z('<div class="absolute inset-0"><!></div>'),Zf=z('<!> <div class="flex shrink-0 flex-col border-t border-vs-border bg-vs-bg"><div class="flex items-center gap-1 border-b border-vs-border px-2 py-1 text-[11px]"><!> <div class="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto"></div> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover disabled:opacity-40" title="New terminal in this workspace" aria-label="New terminal"><!></button> <button class="shrink-0 rounded-sm p-0.5 hover:bg-vs-hover" title="Hide panel" aria-label="Hide terminal panel"><!></button></div> <div class="relative min-h-0 flex-1"><!></div></div>',1),Qf=z('<!> <div class="min-h-0 flex-1"><!></div> <!>',1),ev=z('<!> <aside class="flex shrink-0 flex-col overflow-hidden border-l border-vs-border bg-vs-panel"><div class="flex items-center gap-2 border-b border-vs-border px-3 py-1.5"><!> <span class="flex-1 text-[11px] font-semibold tracking-wide uppercase">Chat</span> <button class="rounded-sm p-0.5 hover:bg-vs-hover" title="Hide chat" aria-label="Hide chat"><!></button></div> <div class="min-h-0 flex-1"><!></div></aside>',1),vi=z('<span class="flex items-center gap-1"><!> </span>'),tv=z("<span> </span>"),nv=z('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle terminal (Ctrl+`)"><!> Terminal</button> <button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Focus the tmux window on the host"><!></button>',1),rv=z('<button class="flex items-center gap-1 rounded-sm px-1 hover:bg-white/20" title="Toggle chat panel"><!> Chat</button>'),sv=z('<div class="flex h-full flex-col overflow-hidden bg-vs-bg font-sans text-vs-fg"><header class="flex items-center gap-2 border-b border-vs-border bg-vs-titlebar px-3 py-1 text-xs"><!> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover" title="Open a folder on this server (Ctrl+Shift+O)">Open Folder…</button> <button class="rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40" title="Open a file (Ctrl+P)">Open File…</button> <button><!> Terminal</button> <span class="mx-auto truncate text-vs-muted"> </span> <span><!> </span></header> <div class="flex min-h-0 flex-1"><nav class="flex w-12 shrink-0 flex-col items-center bg-vs-activity"><!> <div class="mt-auto flex flex-col items-center pb-1"><button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Account — signed in to the dashboard" aria-label="Account"><!></button> <button class="flex h-12 w-12 items-center justify-center text-vs-muted hover:text-vs-fg" title="Toggle side bar (Ctrl+B)" aria-label="Toggle side bar"><!></button></div></nav> <!> <section class="flex min-h-0 min-w-0 flex-1 flex-col"><!></section> <!></div> <footer class="flex shrink-0 items-center gap-3 bg-vs-status px-3 py-0.5 text-[12px] text-white"><!> <!> <span class="truncate"> </span> <span class="ml-auto flex items-center gap-3"><!> <span class="max-w-[40vw] truncate opacity-80"> </span> <!> <!></span></footer> <!> <!> <!></div>');function av(e,t){ft(t,!0);let n=He(t,"sessions",19,()=>[]),r=He(t,"session",3,""),s=He(t,"rootPath",3,""),o=I("files");function a(k,O){try{const R=localStorage.getItem(`ide.show.${k}`);return R===null?O:R==="1"}catch{return O}}let l=I(Ce(a("chat",!0)));const c={sidebar:240,chat:320,panel:240};function d(k){try{const O=localStorage.getItem(`ide.size.${k}`),R=Number(O);return Number.isFinite(R)&&R>0?R:c[k]}catch{return c[k]}}let f=I(Ce(d("sidebar"))),x=I(Ce(d("chat"))),v=I(Ce(d("panel")));Nt(()=>{try{localStorage.setItem("ide.size.sidebar",String(i(f))),localStorage.setItem("ide.size.chat",String(i(x))),localStorage.setItem("ide.size.panel",String(i(v))),localStorage.setItem("ide.show.terminal",i(w)?"1":"0"),localStorage.setItem("ide.show.chat",i(l)?"1":"0"),localStorage.setItem("ide.show.sidebar",i(g)?"1":"0")}catch{}});let g=I(Ce(a("sidebar",!0))),b=I(!1),w=I(Ce(a("terminal",!1)));const S=8;let C=I(Ce([0])),H=I(0);function A(){if(i(C).length>=S)return;let k=0;for(;i(C).includes(k);)k+=1;k>=S||(h(C,[...i(C),k].sort((O,R)=>O-R),!0),h(H,k,!0))}function J(k){if(i(C).length<=1)return;const O=i(C).indexOf(k);h(C,i(C).filter(R=>R!==k),!0),i(H)===k&&h(H,i(C)[Math.min(O,i(C).length-1)],!0)}Nt(()=>{_.connectionId,h(C,[0],!0),h(H,0)});let E=I(!1);Nt(()=>{i(w)&&h(E,!0)});let $=I(!1),M=I(!1),G=I(""),D=I(Ce({kind:"local",label:"",host:"",username:"",port:22,auth_mode:"agent",identity_file:"",password:"",private_key:"",workspace_root:"",max_file_bytes:1e6}));const U={idle:{icon:Lu,label:"Not connected"},connecting:{icon:Ru,label:"Connecting…"},connected:{icon:Ou,label:"Connected"},reconnect:{icon:oi,label:"Reconnect required"},error:{icon:oi,label:"Error"}},L=ut(()=>U[_.connectionState].icon),Y=ut(()=>{var k;return((k=_.connection)==null?void 0:k.kind)==="local"}),ue=[{id:"files",icon:Uu,label:"Explorer",keys:"Ctrl+Shift+E"},{id:"search",icon:Po,label:"Search",keys:"Ctrl+Shift+F"},{id:"git",icon:ho,label:"Source Control",keys:"Ctrl+Shift+G"},{id:"remote",icon:Zu,label:"Remote Explorer",keys:""}];Ur(async()=>{await _.loadConnections(),_.connectionId&&await _.refreshStatus()});function me(k){i(o)===k&&i(g)?h(g,!1):(h(o,k,!0),h(g,!0))}async function De(k){_.connectionId=k.currentTarget.value,_.resetWorkspaceView(),await _.refreshStatus()}async function Ee(k){h(M,!1);try{const O=k.split("/").filter(Boolean).pop()||k,R=_.connection;if(R&&R.kind!=="local"){await be.setWorkspaceRoot(R.id,k,O),await _.loadConnections(),_.resetWorkspaceView(),await _.refreshFiles("."),_.setStatus(`Opened ${k} on ${R.username}@${R.host}`),h(o,"files"),h(g,!0);return}if(R&&R.kind==="local"){await be.setWorkspaceRoot(R.id,k,O),await _.loadConnections(),_.resetWorkspaceView(),await _.refreshFiles("."),_.setStatus(`Opened ${k}`),h(o,"files"),h(g,!0);return}const pe=await be.createConnection({kind:"local",label:O,workspace_root:k,max_file_bytes:1e6});await _.loadConnections(),_.connectionId=pe.connection.id,_.resetWorkspaceView(),await _.connect(""),h(o,"files"),h(g,!0)}catch(O){_.setStatus(O.message||"Could not open folder")}}async function nt(k){k.preventDefault();try{const O=await be.createConnection({...i(D),port:Number(i(D).port)});h($,!1),h(D,{...i(D),label:"",host:"",username:"",password:"",private_key:""},!0),await _.loadConnections(),_.connectionId=O.connection.id,await _.refreshStatus()}catch(O){_.setStatus(O.message||"Could not create connection")}}async function T(){const k=_.connection;if(!k)return;const O=k.kind==="local"?"workspace":"connection";if(confirm(`Remove ${O} "${k.label}"? Saved tabs are cleared; files are untouched.`))try{await be.deleteConnection(k.id),_.connectionId="",_.resetWorkspaceView(),await _.loadConnections()}catch(R){_.setStatus(R.message||"Could not delete")}}async function j(){try{const k=await be.focusTerminal(_.connectionId);_.setStatus(`Focused ${k.window_name}`,"tmux window selected")}catch(k){_.setStatus(k.message||"Could not focus terminal")}}function _e(k){var ke,$e,ve,Se;const O=k.ctrlKey||k.metaKey,R=k.key.toLowerCase(),pe=(($e=(ke=k.target)==null?void 0:ke.matches)==null?void 0:$e.call(ke,"input, textarea, select"))&&!((Se=(ve=k.target).closest)!=null&&Se.call(ve,".monaco-editor"));O&&R==="s"?(k.preventDefault(),_.saveActive()):O&&R==="p"&&!pe?(k.preventDefault(),_.connectionId&&h(b,!0)):O&&k.shiftKey&&R==="o"?(k.preventDefault(),h(M,!0)):O&&k.shiftKey&&["e","f","g"].includes(R)?(k.preventDefault(),h(o,{e:"files",f:"search",g:"git"}[R],!0),h(g,!0)):O&&R==="b"&&!pe?(k.preventDefault(),h(g,!i(g))):O&&R==="`"?(k.preventDefault(),_.connectionState==="connected"&&h(w,!i(w))):k.key==="Escape"&&i(b)&&(k.preventDefault(),h(b,!1))}var Le=sv();hr("keydown",gs,_e);var Ye=y(Le),ht=y(Ye);ii(ht,{size:15,class:"shrink-0 text-vs-blue"});var vn=p(ht,2),hn=p(vn,2),yt=p(hn,2);let pr;var Xt=y(yt);ui(Xt,{size:13});var pn=p(yt,2),_r=ee(pn,!0),Tn=p(pn,2),Wn=y(Tn);Zo(Wn,()=>i(L),(k,O)=>{O(k,{size:12})});var gr=p(Wn),Nn=p(Ye,2),mr=y(Nn),Mn=y(mr);je(Mn,17,()=>ue,k=>k.id,(k,O)=>{var R=Of(),pe=y(R);{var ke=Ie=>{var le=Pf();m(Ie,le)};F(pe,Ie=>{i(o)===i(O).id&&i(g)&&Ie(ke)})}var $e=p(pe,2);Zo($e,()=>i(O).icon,(Ie,le)=>{le(Ie,{size:24,strokeWidth:1.4})});var ve=p($e,2);{var Se=Ie=>{var le=If(),at=ee(le,!0);X(()=>q(at,_.gitDirtyCount)),m(Ie,le)};F(ve,Ie=>{i(O).id==="git"&&_.gitDirtyCount&&Ie(Se)})}X(()=>{Tt(R,1,`relative flex h-12 w-12 items-center justify-center ${i(o)===i(O).id&&i(g)?"text-vs-bright":"text-vs-muted hover:text-vs-fg"}`),de(R,"title",i(O).keys?`${i(O).label} (${i(O).keys})`:i(O).label),de(R,"aria-label",i(O).label)}),P("click",R,()=>me(i(O).id)),m(k,R)});var Wr=p(Mn,2),zn=y(Wr),qr=y(zn);Du(qr,{size:24,strokeWidth:1.4});var An=p(zn,2),Gr=y(An);ed(Gr,{size:24,strokeWidth:1.4});var qn=p(mr,2);{var _n=k=>{var O=qf(),R=B(O),pe=y(R);{var ke=le=>{fd(le,{})},$e=le=>{kf(le,{})},ve=le=>{zd(le,{})},Se=le=>{var at=Wf(),Qt=p(B(at),2),wt=y(Qt),en=y(wt);en.value=en.__value="";var br=p(en);je(br,17,()=>_.connections,Ae=>Ae.id,(Ae,Ue)=>{var rt=Rf(),Zn=ee(rt),tn={};X(()=>{q(Zn,`${i(Ue).kind==="local"?"🖿 ":"⇅ "}${i(Ue).label??""}`),tn!==(tn=i(Ue).id)&&(rt.value=(rt.__value=tn)??"")}),m(Ae,rt)});var Mt;ps(wt);var xr=p(wt,2),zt=y(xr),Xr=y(zt);Ga(Xr,{size:13});var Jn=p(zt,2),za=y(Jn);ya(za,{size:13});var Bt=p(Jn,2);{var kt=Ae=>{var Ue=Df(),rt=y(Ue);rd(rt,{size:13}),P("click",Ue,T),m(Ae,Ue)};F(Bt,Ae=>{_.connection&&Ae(kt)})}var In=p(xr,2);{var bn=Ae=>{var Ue=Hf(),rt=B(Ue);{var Zn=At=>{var Qn=Lf();Qe(Qn,()=>i(G),Pa=>h(G,Pa)),m(At,Qn)};F(rt,At=>{!i(Y)&&!_.connection.has_password&&At(Zn)})}var tn=p(rt,2),ea=ee(tn,!0),ta=p(tn,2);{var Aa=At=>{var Qn=Ff();P("click",Qn,()=>_.needsHostKey=!0),m(At,Qn)};F(ta,At=>{i(Y)||At(Aa)})}X(()=>q(ea,i(Y)?"Open workspace":"Connect")),P("click",tn,()=>_.connect(i(G))),m(Ae,Ue)};F(In,Ae=>{_.connection&&_.connectionState!=="connected"&&Ae(bn)})}var yr=p(In,2);{var Xn=Ae=>{var Ue=jf(),rt=ee(Ue,!0);X(()=>q(rt,_.connection.workspace_root)),m(Ae,Ue)};F(yr,Ae=>{_.connection&&Ae(Xn)})}var Zr=p(Qt,2);{var On=Ae=>{var Ue=Uf(),rt=y(Ue),Zn=y(rt);Zn.value=Zn.__value="local";var tn=p(Zn);tn.value=tn.__value="ssh",ps(rt);var ea=p(rt,2),ta=p(ea,2);{var Aa=xn=>{var Io=Kf(),Oo=B(Io),Ro=p(Oo,2),Do=p(Ro,2),na=p(Do,2),Ia=y(na);Ia.value=Ia.__value="agent";var Oa=p(Ia);Oa.value=Oa.__value="key";var Lo=p(Oa);Lo.value=Lo.__value="password",ps(na);var Fo=p(na,2);{var Nl=ot=>{var Qr=Bf(),ra=B(Qr),Al=p(ra,2);Qe(ra,()=>i(D).identity_file,Ra=>i(D).identity_file=Ra),Qe(Al,()=>i(D).private_key,Ra=>i(D).private_key=Ra),m(ot,Qr)};F(Fo,ot=>{i(D).auth_mode==="key"&&ot(Nl)})}var Ml=p(Fo,2);{var zl=ot=>{var Qr=Vf();Qe(Qr,()=>i(D).password,ra=>i(D).password=ra),m(ot,Qr)};F(Ml,ot=>{i(D).auth_mode==="password"&&ot(zl)})}Qe(Oo,()=>i(D).host,ot=>i(D).host=ot),Qe(Ro,()=>i(D).username,ot=>i(D).username=ot),Qe(Do,()=>i(D).port,ot=>i(D).port=ot),vo(na,()=>i(D).auth_mode,ot=>i(D).auth_mode=ot),m(xn,Io)};F(ta,xn=>{i(D).kind==="ssh"&&xn(Aa)})}var At=p(ta,2),Qn=p(At,2),Pa=p(y(Qn),2);X(()=>{de(At,"placeholder",i(D).kind==="local"?"/var/www/app":"Workspace root"),At.required=i(D).kind==="local"}),hr("submit",Ue,nt),vo(rt,()=>i(D).kind,xn=>i(D).kind=xn),Qe(ea,()=>i(D).label,xn=>i(D).label=xn),Qe(At,()=>i(D).workspace_root,xn=>i(D).workspace_root=xn),P("click",Pa,()=>h($,!1)),m(Ae,Ue)};F(Zr,Ae=>{i($)&&Ae(On)})}X(()=>{Mt!==(Mt=_.connectionId)&&(wt.value=(wt.__value=Mt)??"",bs(wt,Mt))}),P("change",wt,De),P("click",zt,()=>h(M,!0)),P("click",Jn,()=>h($,!i($))),m(le,at)};F(pe,le=>{i(o)==="files"?le(ke):i(o)==="search"?le($e,1):i(o)==="git"?le(ve,2):le(Se,-1)})}var Ie=p(R,2);Ja(Ie,{side:"right",min:170,max:620,onreset:()=>h(f,c.sidebar,!0),get size(){return i(f)},set size(le){h(f,le,!0)}}),X(()=>hs(R,`width: ${i(f)??""}px`)),m(k,O)};F(qn,k=>{i(g)&&k(_n)})}var Gn=p(qn,2),Yr=y(Gn);{var Jr=k=>{var O=Gf(),R=y(O);ii(R,{size:64,strokeWidth:1,class:"text-vs-line"});var pe=p(R,4),ke=y(pe),$e=y(ke);Ga($e,{size:16});var ve=p(ke,2),Se=y(ve);ci(Se,{size:16}),P("click",ke,()=>h(M,!0)),P("click",ve,()=>{h(o,"remote"),h(g,!0),h($,!0)}),m(k,O)},N=k=>{var O=Qf(),R=B(O);Bd(R,{});var pe=p(R,2),ke=y(pe);Dd(ke,{});var $e=p(pe,2);{var ve=Se=>{var Ie=Zf(),le=B(Ie);{var at=Bt=>{Ja(Bt,{side:"top",min:120,max:640,onreset:()=>h(v,c.panel,!0),get size(){return i(v)},set size(kt){h(v,kt,!0)}})};F(le,Bt=>{i(w)&&Bt(at)})}var Qt=p(le,2),wt=y(Qt),en=y(wt);ui(en,{size:13,class:"mx-1 shrink-0"});var br=p(en,2);je(br,20,()=>i(C),Bt=>Bt,(Bt,kt)=>{var In=Jf(),bn=y(In),yr=ee(bn,!0),Xn=p(bn,2);{var Zr=On=>{var Ae=Yf(),Ue=y(Ae);_s(Ue,{size:11}),X(()=>de(Ae,"aria-label",`Close terminal ${kt+1}`)),P("click",Ae,()=>J(kt)),m(On,Ae)};F(Xn,On=>{i(C).length>1&&On(Zr)})}X(()=>{var On;Tt(In,1,`group flex shrink-0 items-center gap-1 rounded-sm px-2 py-0.5
                           ${kt===i(H)?"bg-vs-hover text-vs-fg":"text-vs-muted hover:text-vs-fg"}`),q(yr,kt===0?((On=_.connection)==null?void 0:On.label)||"Terminal":`Terminal ${kt+1}`)}),P("click",bn,()=>h(H,kt,!0)),m(Bt,In)});var Mt=p(br,2),xr=y(Mt);ya(xr,{size:14});var zt=p(Mt,2),Xr=y(zt);_s(Xr,{size:14});var Jn=p(wt,2),za=y(Jn);lu(za,()=>_.connectionId,Bt=>{var kt=Q(),In=B(kt);je(In,16,()=>i(C),bn=>bn,(bn,yr)=>{var Xn=Xf(),Zr=y(Xn);df(Zr,{get rootPath(){return s()},get session(){return r()},get index(){return yr}}),X(()=>de(Xn,"hidden",yr!==i(H))),m(bn,Xn)}),m(Bt,kt)}),X(()=>{hs(Qt,`height: ${i(v)??""}px`),de(Qt,"hidden",!i(w)),Mt.disabled=i(C).length>=S}),P("click",Mt,A),P("click",zt,()=>h(w,!1)),m(Se,Ie)};F($e,Se=>{i(E)&&_.connectionState==="connected"&&Se(ve)})}m(k,O)};F(Yr,k=>{_.connectionId?k(N,-1):k(Jr)})}var K=p(Gn,2);{var te=k=>{var O=ev(),R=B(O);Ja(R,{side:"left",min:260,max:760,onreset:()=>h(x,c.chat,!0),get size(){return i(x)},set size(at){h(x,at,!0)}});var pe=p(R,2),ke=y(pe),$e=y(ke);li($e,{size:13});var ve=p($e,4),Se=y(ve);_s(Se,{size:14});var Ie=p(ke,2),le=y(Ie);nf(le,{get sessions(){return n()},get session(){return r()},get rootPath(){return s()}}),X(()=>hs(pe,`width: ${i(x)??""}px`)),P("click",ve,()=>h(l,!1)),m(k,O)};F(K,k=>{i(l)&&k(te)})}var xe=p(Nn,2),we=y(xe);{var Oe=k=>{var O=vi(),R=y(O);{var pe=ve=>{Ga(ve,{size:12})},ke=ve=>{ci(ve,{size:12})};F(R,ve=>{i(Y)?ve(pe):ve(ke,-1)})}var $e=p(R);X(()=>{de(O,"title",_.connection.workspace_root),q($e,` ${_.connection.label??""}`)}),m(k,O)};F(we,k=>{_.connection&&k(Oe)})}var Pe=p(we,2);{var Be=k=>{var O=vi(),R=y(O);ho(R,{size:12});var pe=p(R);X(()=>q(pe,` ${_.gitBranch??""}`)),m(k,O)};F(Pe,k=>{_.gitBranch&&k(Be)})}var Ve=p(Pe,2),Fe=ee(Ve,!0),st=p(Ve,2),pt=y(st);{var jt=k=>{var O=tv(),R=ee(O);X(()=>q(R,`${_.dirtyCount??""} unsaved`)),m(k,O)};F(pt,k=>{_.dirtyCount&&k(jt)})}var gn=p(pt,2),Yn=ee(gn,!0),Pn=p(gn,2);{var W=k=>{var O=nv(),R=B(O),pe=y(R);Qu(pe,{size:12});var ke=p(R,2),$e=y(ke);Bu($e,{size:12}),P("click",R,()=>h(w,!i(w))),P("click",ke,j),m(k,O)};F(Pn,k=>{_.connectionState==="connected"&&k(W)})}var Me=p(Pn,2);{var ge=k=>{var O=rv(),R=y(O);li(R,{size:12}),P("click",O,()=>h(l,!i(l))),m(k,O)};F(Me,k=>{k(ge)})}var re=p(xe,2);{var Te=k=>{cf(k,{onclose:()=>h(b,!1)})};F(re,k=>{i(b)&&k(Te)})}var _t=p(re,2);{var Xe=k=>{gf(k,{onopen:Ee,onclose:()=>h(M,!1)})};F(_t,k=>{i(M)&&k(Xe)})}var Zt=p(_t,2);{var mn=k=>{zf(k,{onclose:()=>_.needsHostKey=!1,ontrusted:async()=>{_.needsHostKey=!1,await _.connect(i(G))}})};F(Zt,k=>{_.needsHostKey&&k(mn)})}X(()=>{var k;hn.disabled=!_.connectionId,pr=Tt(yt,1,"flex items-center gap-1 rounded-sm px-2 py-0.5 hover:bg-vs-hover disabled:opacity-40",null,pr,{"text-vs-bright":i(w)}),yt.disabled=_.connectionState!=="connected",de(yt,"title",_.connectionState==="connected"?"Toggle terminal (Ctrl+`)":"Open a workspace to use the terminal"),de(pn,"title",(k=_.connection)==null?void 0:k.workspace_root),q(_r,_.connection?`${_.connection.label} — Multibuilder IDE`:"Multibuilder IDE"),Tt(Tn,1,`flex items-center gap-1 ${_.connectionState==="connected"?"text-vs-green":_.connectionState==="connecting"?"text-vs-yellow":_.connectionState==="idle"?"text-vs-muted":"text-vs-red"}`),q(gr,` ${U[_.connectionState].label??""}`),q(Fe,_.statusText),q(Yn,_.detailText)}),P("click",vn,()=>h(M,!0)),P("click",hn,()=>h(b,!0)),P("click",yt,()=>h(w,!i(w))),P("click",zn,()=>_.setStatus("Signed in to the Multibuilder dashboard")),P("click",An,()=>h(g,!i(g))),m(e,Le),vt()}Ht(["click","change"]);function Tl(e,t){return su(av,{target:e,props:t})}function hi(){const e=document.getElementById("ide-root");if(!e||e.dataset.mounted)return;e.dataset.mounted="1";const t=window.__IDE_BOOTSTRAP__||{};Tl(e,{sessions:t.sessions||[],session:t.session||"",rootPath:t.rootPath||""})}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",hi):hi();window.mountRemoteIde=Tl;export{va as _};
