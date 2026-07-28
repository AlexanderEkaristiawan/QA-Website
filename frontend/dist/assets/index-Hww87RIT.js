const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DashboardView-C6lHfwCR.js","assets/useFirestore-4mwYWeFC.js","assets/ProjectsView-Dg_mUDYU.js","assets/ProjectDetailView-B8BJcke_.js","assets/useAI-GB6XhmQX.js","assets/ProjectDetailView-DRBwbBEL.css","assets/AuditResultsView-fvYN-6DV.js","assets/BugListView-CxoAigM6.js","assets/TestCasesView-CHEUgrOP.js","assets/TrendHistoryView-DGroSSEo.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ml(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ne={},ls=[],un=()=>{},wp=()=>!1,_a=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ya=t=>t.startsWith("onUpdate:"),it=Object.assign,Ll=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Fy=Object.prototype.hasOwnProperty,Re=(t,e)=>Fy.call(t,e),ae=Array.isArray,us=t=>Fi(t)==="[object Map]",va=t=>Fi(t)==="[object Set]",Gh=t=>Fi(t)==="[object Date]",he=t=>typeof t=="function",je=t=>typeof t=="string",yn=t=>typeof t=="symbol",Se=t=>t!==null&&typeof t=="object",Ap=t=>(Se(t)||he(t))&&he(t.then)&&he(t.catch),Rp=Object.prototype.toString,Fi=t=>Rp.call(t),Uy=t=>Fi(t).slice(8,-1),bp=t=>Fi(t)==="[object Object]",Fl=t=>je(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ci=Ml(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ea=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},By=/-\w/g,It=Ea(t=>t.replace(By,e=>e.slice(1).toUpperCase())),jy=/\B([A-Z])/g,Hr=Ea(t=>t.replace(jy,"-$1").toLowerCase()),Ta=Ea(t=>t.charAt(0).toUpperCase()+t.slice(1)),Ec=Ea(t=>t?`on${Ta(t)}`:""),ln=(t,e)=>!Object.is(t,e),bo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Sp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ia=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let zh;const wa=()=>zh||(zh=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ul(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=je(r)?Wy(r):Ul(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(je(t)||Se(t))return t}const qy=/;(?![^(]*\))/g,$y=/:([^]+)/,Hy=/\/\*[^]*?\*\//g;function Wy(t){const e={};return t.replace(Hy,"").split(qy).forEach(n=>{if(n){const r=n.split($y);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ii(t){let e="";if(je(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const r=Ii(t[n]);r&&(e+=r+" ")}else if(Se(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Gy="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",zy=Ml(Gy);function Pp(t){return!!t||t===""}function Ky(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ui(t[r],e[r]);return n}function Ui(t,e){if(t===e)return!0;let n=Gh(t),r=Gh(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=yn(t),r=yn(e),n||r)return t===e;if(n=ae(t),r=ae(e),n||r)return n&&r?Ky(t,e):!1;if(n=Se(t),r=Se(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Ui(t[o],e[o]))return!1}}return String(t)===String(e)}function Qy(t,e){return t.findIndex(n=>Ui(n,e))}const Cp=t=>!!(t&&t.__v_isRef===!0),Xn=t=>je(t)?t:t==null?"":ae(t)||Se(t)&&(t.toString===Rp||!he(t.toString))?Cp(t)?Xn(t.value):JSON.stringify(t,Np,2):String(t),Np=(t,e)=>Cp(e)?Np(t,e.value):us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Tc(r,i)+" =>"]=s,n),{})}:va(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Tc(n))}:yn(e)?Tc(e):Se(e)&&!ae(e)&&!bp(e)?String(e):e,Tc=(t,e="")=>{var n;return yn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nt;class Op{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&nt&&(nt.active?(this.parent=nt,this.index=(nt.scopes||(nt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const r=this.effects.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}}run(e){if(this._active){const n=nt;try{return nt=this,e()}finally{nt=n}}}on(){++this._on===1&&(this.prevScope=nt,nt=this)}off(){if(this._on>0&&--this._on===0){if(nt===this)nt=this.prevScope;else{let e=nt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Jy(t){return new Op(t)}function Yy(){return nt}let Oe;const Ic=new WeakSet;class kp{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nt&&(nt.active?nt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ic.has(this)&&(Ic.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Dp(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Kh(this),xp(this);const e=Oe,n=Gt;Oe=this,Gt=!0;try{return this.fn()}finally{Mp(this),Oe=e,Gt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ql(e);this.deps=this.depsTail=void 0,Kh(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ic.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Gc(this)&&this.run()}get dirty(){return Gc(this)}}let Vp=0,li,ui;function Dp(t,e=!1){if(t.flags|=8,e){t.next=ui,ui=t;return}t.next=li,li=t}function Bl(){Vp++}function jl(){if(--Vp>0)return;if(ui){let e=ui;for(ui=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;li;){let e=li;for(li=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function xp(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Mp(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ql(r),Xy(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Gc(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Lp(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Lp(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===wi)||(t.globalVersion=wi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Gc(t))))return;t.flags|=2;const e=t.dep,n=Oe,r=Gt;Oe=t,Gt=!0;try{xp(t);const s=t.fn(t._value);(e.version===0||ln(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Oe=n,Gt=r,Mp(t),t.flags&=-3}}function ql(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ql(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Xy(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Gt=!0;const Fp=[];function kn(){Fp.push(Gt),Gt=!1}function Vn(){const t=Fp.pop();Gt=t===void 0?!0:t}function Kh(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Oe;Oe=void 0;try{e()}finally{Oe=n}}}let wi=0;class Zy{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class $l{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Oe||!Gt||Oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Oe)n=this.activeLink=new Zy(Oe,this),Oe.deps?(n.prevDep=Oe.depsTail,Oe.depsTail.nextDep=n,Oe.depsTail=n):Oe.deps=Oe.depsTail=n,Up(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Oe.depsTail,n.nextDep=void 0,Oe.depsTail.nextDep=n,Oe.depsTail=n,Oe.deps===n&&(Oe.deps=r)}return n}trigger(e){this.version++,wi++,this.notify(e)}notify(e){Bl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{jl()}}}function Up(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Up(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const zc=new WeakMap,Vr=Symbol(""),Kc=Symbol(""),Ai=Symbol("");function ft(t,e,n){if(Gt&&Oe){let r=zc.get(t);r||zc.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new $l),s.map=r,s.key=n),s.track()}}function bn(t,e,n,r,s,i){const o=zc.get(t);if(!o){wi++;return}const c=l=>{l&&l.trigger()};if(Bl(),e==="clear")o.forEach(c);else{const l=ae(t),h=l&&Fl(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===Ai||!yn(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),h&&c(o.get(Ai)),e){case"add":l?h&&c(o.get("length")):(c(o.get(Vr)),us(t)&&c(o.get(Kc)));break;case"delete":l||(c(o.get(Vr)),us(t)&&c(o.get(Kc)));break;case"set":us(t)&&c(o.get(Vr));break}}jl()}function es(t){const e=Ae(t);return e===t?e:(ft(e,"iterate",Ai),jt(t)?e:e.map(Jt))}function Aa(t){return ft(t=Ae(t),"iterate",Ai),t}function on(t,e){return Dn(t)?ys(Dr(t)?Jt(e):e):Jt(e)}const ev={__proto__:null,[Symbol.iterator](){return wc(this,Symbol.iterator,t=>on(this,t))},concat(...t){return es(this).concat(...t.map(e=>ae(e)?es(e):e))},entries(){return wc(this,"entries",t=>(t[1]=on(this,t[1]),t))},every(t,e){return In(this,"every",t,e,void 0,arguments)},filter(t,e){return In(this,"filter",t,e,n=>n.map(r=>on(this,r)),arguments)},find(t,e){return In(this,"find",t,e,n=>on(this,n),arguments)},findIndex(t,e){return In(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return In(this,"findLast",t,e,n=>on(this,n),arguments)},findLastIndex(t,e){return In(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return In(this,"forEach",t,e,void 0,arguments)},includes(...t){return Ac(this,"includes",t)},indexOf(...t){return Ac(this,"indexOf",t)},join(t){return es(this).join(t)},lastIndexOf(...t){return Ac(this,"lastIndexOf",t)},map(t,e){return In(this,"map",t,e,void 0,arguments)},pop(){return Js(this,"pop")},push(...t){return Js(this,"push",t)},reduce(t,...e){return Qh(this,"reduce",t,e)},reduceRight(t,...e){return Qh(this,"reduceRight",t,e)},shift(){return Js(this,"shift")},some(t,e){return In(this,"some",t,e,void 0,arguments)},splice(...t){return Js(this,"splice",t)},toReversed(){return es(this).toReversed()},toSorted(t){return es(this).toSorted(t)},toSpliced(...t){return es(this).toSpliced(...t)},unshift(...t){return Js(this,"unshift",t)},values(){return wc(this,"values",t=>on(this,t))}};function wc(t,e,n){const r=Aa(t),s=r[e]();return r!==t&&!jt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const tv=Array.prototype;function In(t,e,n,r,s,i){const o=Aa(t),c=o!==t&&!jt(t),l=o[e];if(l!==tv[e]){const p=l.apply(t,i);return c?Jt(p):p}let h=n;o!==t&&(c?h=function(p,m){return n.call(this,on(t,p),m,t)}:n.length>2&&(h=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,h,r);return c&&s?s(f):f}function Qh(t,e,n,r){const s=Aa(t),i=s!==t&&!jt(t);let o=n,c=!1;s!==t&&(i?(c=r.length===0,o=function(h,f,p){return c&&(c=!1,h=on(t,h)),n.call(this,h,on(t,f),p,t)}):n.length>3&&(o=function(h,f,p){return n.call(this,h,f,p,t)}));const l=s[e](o,...r);return c?on(t,l):l}function Ac(t,e,n){const r=Ae(t);ft(r,"iterate",Ai);const s=r[e](...n);return(s===-1||s===!1)&&Gl(n[0])?(n[0]=Ae(n[0]),r[e](...n)):s}function Js(t,e,n=[]){kn(),Bl();const r=Ae(t)[e].apply(t,n);return jl(),Vn(),r}const nv=Ml("__proto__,__v_isRef,__isVue"),Bp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(yn));function rv(t){yn(t)||(t=String(t));const e=Ae(this);return ft(e,"has",t),e.hasOwnProperty(t)}class jp{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?dv:Wp:i?Hp:$p).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ae(e);if(!s){let l;if(o&&(l=ev[n]))return l;if(n==="hasOwnProperty")return rv}const c=Reflect.get(e,n,mt(e)?e:r);if((yn(n)?Bp.has(n):nv(n))||(s||ft(e,"get",n),i))return c;if(mt(c)){const l=o&&Fl(n)?c:c.value;return s&&Se(l)?Jc(l):l}return Se(c)?s?Jc(c):Ra(c):c}}class qp extends jp{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ae(e)&&Fl(n);if(!this._isShallow){const h=Dn(i);if(!jt(r)&&!Dn(r)&&(i=Ae(i),r=Ae(r)),!o&&mt(i)&&!mt(r))return h||(i.value=r),!0}const c=o?Number(n)<e.length:Re(e,n),l=Reflect.set(e,n,r,mt(e)?e:s);return e===Ae(s)&&l&&(c?ln(r,i)&&bn(e,"set",n,r):bn(e,"add",n,r)),l}deleteProperty(e,n){const r=Re(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&bn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!yn(n)||!Bp.has(n))&&ft(e,"has",n),r}ownKeys(e){return ft(e,"iterate",ae(e)?"length":Vr),Reflect.ownKeys(e)}}class sv extends jp{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const iv=new qp,ov=new sv,av=new qp(!0);const Qc=t=>t,_o=t=>Reflect.getPrototypeOf(t);function cv(t,e,n){return function(...r){const s=this.__v_raw,i=Ae(s),o=us(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,h=s[t](...r),f=n?Qc:e?ys:Jt;return!e&&ft(i,"iterate",l?Kc:Vr),it(Object.create(h),{next(){const{value:p,done:m}=h.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function yo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function lv(t,e){const n={get(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);t||(ln(s,c)&&ft(o,"get",s),ft(o,"get",c));const{has:l}=_o(o),h=e?Qc:t?ys:Jt;if(l.call(o,s))return h(i.get(s));if(l.call(o,c))return h(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&ft(Ae(s),"iterate",Vr),s.size},has(s){const i=this.__v_raw,o=Ae(i),c=Ae(s);return t||(ln(s,c)&&ft(o,"has",s),ft(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ae(c),h=e?Qc:t?ys:Jt;return!t&&ft(l,"iterate",Vr),c.forEach((f,p)=>s.call(i,h(f),h(p),o))}};return it(n,t?{add:yo("add"),set:yo("set"),delete:yo("delete"),clear:yo("clear")}:{add(s){const i=Ae(this),o=_o(i),c=Ae(s),l=!e&&!jt(s)&&!Dn(s)?c:s;return o.has.call(i,l)||ln(s,l)&&o.has.call(i,s)||ln(c,l)&&o.has.call(i,c)||(i.add(l),bn(i,"add",l,l)),this},set(s,i){!e&&!jt(i)&&!Dn(i)&&(i=Ae(i));const o=Ae(this),{has:c,get:l}=_o(o);let h=c.call(o,s);h||(s=Ae(s),h=c.call(o,s));const f=l.call(o,s);return o.set(s,i),h?ln(i,f)&&bn(o,"set",s,i):bn(o,"add",s,i),this},delete(s){const i=Ae(this),{has:o,get:c}=_o(i);let l=o.call(i,s);l||(s=Ae(s),l=o.call(i,s)),c&&c.call(i,s);const h=i.delete(s);return l&&bn(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,o=s.clear();return i&&bn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=cv(s,t,e)}),n}function Hl(t,e){const n=lv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Re(n,s)&&s in r?n:r,s,i)}const uv={get:Hl(!1,!1)},hv={get:Hl(!1,!0)},fv={get:Hl(!0,!1)};const $p=new WeakMap,Hp=new WeakMap,Wp=new WeakMap,dv=new WeakMap;function pv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ra(t){return Dn(t)?t:Wl(t,!1,iv,uv,$p)}function Gp(t){return Wl(t,!1,av,hv,Hp)}function Jc(t){return Wl(t,!0,ov,fv,Wp)}function Wl(t,e,n,r,s){if(!Se(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=pv(Uy(t));if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Dr(t){return Dn(t)?Dr(t.__v_raw):!!(t&&t.__v_isReactive)}function Dn(t){return!!(t&&t.__v_isReadonly)}function jt(t){return!!(t&&t.__v_isShallow)}function Gl(t){return t?!!t.__v_raw:!1}function Ae(t){const e=t&&t.__v_raw;return e?Ae(e):t}function zp(t){return!Re(t,"__v_skip")&&Object.isExtensible(t)&&Sp(t,"__v_skip",!0),t}const Jt=t=>Se(t)?Ra(t):t,ys=t=>Se(t)?Jc(t):t;function mt(t){return t?t.__v_isRef===!0:!1}function Ps(t){return Kp(t,!1)}function mv(t){return Kp(t,!0)}function Kp(t,e){return mt(t)?t:new gv(t,e)}class gv{constructor(e,n){this.dep=new $l,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ae(e),this._value=n?e:Jt(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||jt(e)||Dn(e);e=r?e:Ae(e),ln(e,n)&&(this._rawValue=e,this._value=r?e:Jt(e),this.dep.trigger())}}function zt(t){return mt(t)?t.value:t}const _v={get:(t,e,n)=>e==="__v_raw"?t:zt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return mt(s)&&!mt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Qp(t){return Dr(t)?t:new Proxy(t,_v)}class yv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new $l(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=wi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return Dp(this,!0),!0}get value(){const e=this.dep.track();return Lp(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function vv(t,e,n=!1){let r,s;return he(t)?r=t:(r=t.get,s=t.set),new yv(r,s,n)}const vo={},Bo=new WeakMap;let Pr;function Ev(t,e=!1,n=Pr){if(n){let r=Bo.get(n);r||Bo.set(n,r=[]),r.push(t)}}function Tv(t,e,n=Ne){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,h=H=>s?H:jt(H)||s===!1||s===0?Sn(H,1):Sn(H);let f,p,m,y,C=!1,N=!1;if(mt(t)?(p=()=>t.value,C=jt(t)):Dr(t)?(p=()=>h(t),C=!0):ae(t)?(N=!0,C=t.some(H=>Dr(H)||jt(H)),p=()=>t.map(H=>{if(mt(H))return H.value;if(Dr(H))return h(H);if(he(H))return l?l(H,2):H()})):he(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){kn();try{m()}finally{Vn()}}const H=Pr;Pr=f;try{return l?l(t,3,[y]):t(y)}finally{Pr=H}}:p=un,e&&s){const H=p,de=s===!0?1/0:s;p=()=>Sn(H(),de)}const k=Yy(),$=()=>{f.stop(),k&&k.active&&Ll(k.effects,f)};if(i&&e){const H=e;e=(...de)=>{const fe=H(...de);return $(),fe}}let U=N?new Array(t.length).fill(vo):vo;const j=H=>{if(!(!(f.flags&1)||!f.dirty&&!H))if(e){const de=f.run();if(H||s||C||(N?de.some((fe,w)=>ln(fe,U[w])):ln(de,U))){m&&m();const fe=Pr;Pr=f;try{const w=[de,U===vo?void 0:N&&U[0]===vo?[]:U,y];U=de,l?l(e,3,w):e(...w)}finally{Pr=fe}}}else f.run()};return c&&c(j),f=new kp(p),f.scheduler=o?()=>o(j,!1):j,y=H=>Ev(H,!1,f),m=f.onStop=()=>{const H=Bo.get(f);if(H){if(l)l(H,4);else for(const de of H)de();Bo.delete(f)}},e?r?j(!0):U=f.run():o?o(j.bind(null,!0),!0):f.run(),$.pause=f.pause.bind(f),$.resume=f.resume.bind(f),$.stop=$,$}function Sn(t,e=1/0,n){if(e<=0||!Se(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,mt(t))Sn(t.value,e,n);else if(ae(t))for(let r=0;r<t.length;r++)Sn(t[r],e,n);else if(va(t)||us(t))t.forEach(r=>{Sn(r,e,n)});else if(bp(t)){for(const r in t)Sn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Sn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Bi(t,e,n,r){try{return r?t(...r):t()}catch(s){ba(s,e,n)}}function Yt(t,e,n,r){if(he(t)){const s=Bi(t,e,n,r);return s&&Ap(s)&&s.catch(i=>{ba(i,e,n)}),s}if(ae(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Yt(t[i],e,n,r));return s}}function ba(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ne;if(e){let c=e.parent;const l=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,h)===!1)return}c=c.parent}if(i){kn(),Bi(i,null,10,[t,l,h]),Vn();return}}Iv(t,n,s,r,o)}function Iv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Tt=[];let nn=-1;const hs=[];let Jn=null,ts=0;const Jp=Promise.resolve();let jo=null;function zl(t){const e=jo||Jp;return t?e.then(this?t.bind(this):t):e}function wv(t){let e=nn+1,n=Tt.length;for(;e<n;){const r=e+n>>>1,s=Tt[r],i=Ri(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Kl(t){if(!(t.flags&1)){const e=Ri(t),n=Tt[Tt.length-1];!n||!(t.flags&2)&&e>=Ri(n)?Tt.push(t):Tt.splice(wv(e),0,t),t.flags|=1,Yp()}}function Yp(){jo||(jo=Jp.then(Zp))}function Av(t){ae(t)?hs.push(...t):Jn&&t.id===-1?Jn.splice(ts+1,0,t):t.flags&1||(hs.push(t),t.flags|=1),Yp()}function Jh(t,e,n=nn+1){for(;n<Tt.length;n++){const r=Tt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Tt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Xp(t){if(hs.length){const e=[...new Set(hs)].sort((n,r)=>Ri(n)-Ri(r));if(hs.length=0,Jn){Jn.push(...e);return}for(Jn=e,ts=0;ts<Jn.length;ts++){const n=Jn[ts];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}Jn=null,ts=0}}const Ri=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Zp(t){try{for(nn=0;nn<Tt.length;nn++){const e=Tt[nn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Bi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;nn<Tt.length;nn++){const e=Tt[nn];e&&(e.flags&=-2)}nn=-1,Tt.length=0,Xp(),jo=null,(Tt.length||hs.length)&&Zp()}}let kt=null,em=null;function qo(t){const e=kt;return kt=t,em=t&&t.type.__scopeId||null,e}function Sa(t,e=kt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Wo(-1);const i=qo(e),o=xr.length;let c;try{c=t(...s)}finally{for(let l=xr.length;l>o;l--)Rm();qo(i),r._d&&Wo(1)}return c};return r._n=!0,r._c=!0,r._d=!0,r}function fC(t,e){if(kt===null)return t;const n=ka(kt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ne]=e[s];i&&(he(i)&&(i={mounted:i,updated:i}),i.deep&&Sn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function br(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(kn(),Yt(l,n,8,[t.el,c,t,e]),Vn())}}function So(t,e){if(pt){let n=pt.provides;const r=pt.parent&&pt.parent.provides;r===n&&(n=pt.provides=Object.create(r)),n[t]=e}}function Kt(t,e,n=!1){const r=wE();if(r||fs){let s=fs?fs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&he(e)?e.call(r&&r.proxy):e}}const Rv=Symbol.for("v-scx"),bv=()=>Kt(Rv);function hi(t,e,n){return tm(t,e,n)}function tm(t,e,n=Ne){const{immediate:r,deep:s,flush:i,once:o}=n,c=it({},n),l=e&&r||!e&&i!=="post";let h;if(Si){if(i==="sync"){const y=bv();h=y.__watcherHandles||(y.__watcherHandles=[])}else if(!l){const y=()=>{};return y.stop=un,y.resume=un,y.pause=un,y}}const f=pt;c.call=(y,C,N)=>Yt(y,f,C,N);let p=!1;i==="post"?c.scheduler=y=>{At(y,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(y,C)=>{C?y():Kl(y)}),c.augmentJob=y=>{e&&(y.flags|=4),p&&(y.flags|=2,f&&(y.id=f.uid,y.i=f))};const m=Tv(t,e,c);return Si&&(h?h.push(m):l&&m()),m}function Sv(t,e,n){const r=this.proxy,s=je(t)?t.includes(".")?nm(r,t):()=>r[t]:t.bind(r,r);let i;he(e)?i=e:(i=e.handler,n=e);const o=ji(this),c=tm(s,i.bind(r),n);return o(),c}function nm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const Pv=Symbol("_vte"),Cv=t=>t.__isTeleport,Rc=Symbol("_leaveCb");function Ql(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Ql(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Cs(t,e){return he(t)?it({name:t.name},e,{setup:t}):t}function rm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Yh(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const $o=new WeakMap;function fi(t,e,n,r,s=!1){if(ae(t)){t.forEach((N,k)=>fi(N,e&&(ae(e)?e[k]:e),n,r,s));return}if(di(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&fi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ka(r.component):r.el,o=s?null:i,{i:c,r:l}=t,h=e&&e.r,f=c.refs===Ne?c.refs={}:c.refs,p=c.setupState,m=Ae(p),y=p===Ne?wp:N=>Yh(f,N)?!1:Re(m,N),C=(N,k)=>!(k&&Yh(f,k));if(h!=null&&h!==l){if(Xh(e),je(h))f[h]=null,y(h)&&(p[h]=null);else if(mt(h)){const N=e;C(h,N.k)&&(h.value=null),N.k&&(f[N.k]=null)}}if(he(l))Bi(l,c,12,[o,f]);else{const N=je(l),k=mt(l);if(N||k){const $=()=>{if(t.f){const U=N?y(l)?p[l]:f[l]:C()||!t.k?l.value:f[t.k];if(s)ae(U)&&Ll(U,i);else if(ae(U))U.includes(i)||U.push(i);else if(N)f[l]=[i],y(l)&&(p[l]=f[l]);else{const j=[i];C(l,t.k)&&(l.value=j),t.k&&(f[t.k]=j)}}else N?(f[l]=o,y(l)&&(p[l]=o)):k&&(C(l,t.k)&&(l.value=o),t.k&&(f[t.k]=o))};if(o){const U=()=>{$(),$o.delete(t)};U.id=-1,$o.set(t,U),At(U,n)}else Xh(t),$()}}}function Xh(t){const e=$o.get(t);e&&(e.flags|=8,$o.delete(t))}wa().requestIdleCallback;wa().cancelIdleCallback;const di=t=>!!t.type.__asyncLoader,sm=t=>t.type.__isKeepAlive;function Nv(t,e){im(t,"a",e)}function Ov(t,e){im(t,"da",e)}function im(t,e,n=pt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Pa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)sm(s.parent.vnode)&&kv(r,e,n,s),s=s.parent}}function kv(t,e,n,r){const s=Pa(e,t,r,!0);am(()=>{Ll(r[e],s)},n)}function Pa(t,e,n=pt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{kn();const c=ji(n),l=Yt(e,n,t,o);return c(),Vn(),l});return r?s.unshift(i):s.push(i),i}}const Un=t=>(e,n=pt)=>{(!Si||t==="sp")&&Pa(t,(...r)=>e(...r),n)},Vv=Un("bm"),om=Un("m"),Dv=Un("bu"),xv=Un("u"),Mv=Un("bum"),am=Un("um"),Lv=Un("sp"),Fv=Un("rtg"),Uv=Un("rtc");function Bv(t,e=pt){Pa("ec",t,e)}const jv="components";function Ca(t,e){return $v(jv,t,!0,e)||t}const qv=Symbol.for("v-ndc");function $v(t,e,n=!0,r=!1){const s=kt||pt;if(s){const i=s.type;{const c=PE(i,!1);if(c&&(c===e||c===It(e)||c===Ta(It(e))))return i}const o=Zh(s[t]||i[t],e)||Zh(s.appContext[t],e);return!o&&r?i:o}}function Zh(t,e){return t&&(t[e]||t[It(e)]||t[Ta(It(e))])}function Hv(t,e,n,r){let s;const i=n,o=ae(t);if(o||je(t)){const c=o&&Dr(t);let l=!1,h=!1;c&&(l=!jt(t),h=Dn(t),t=Aa(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?h?ys(Jt(t[f])):Jt(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Se(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,h=c.length;l<h;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const Yc=t=>t?Cm(t)?ka(t):Yc(t.parent):null,pi=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Yc(t.parent),$root:t=>Yc(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>lm(t),$forceUpdate:t=>t.f||(t.f=()=>{Kl(t.update)}),$nextTick:t=>t.n||(t.n=zl.bind(t.proxy)),$watch:t=>Sv.bind(t)}),bc=(t,e)=>t!==Ne&&!t.__isScriptSetup&&Re(t,e),Wv={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(bc(r,e))return o[e]=1,r[e];if(s!==Ne&&Re(s,e))return o[e]=2,s[e];if(Re(i,e))return o[e]=3,i[e];if(n!==Ne&&Re(n,e))return o[e]=4,n[e];Xc&&(o[e]=0)}}const h=pi[e];let f,p;if(h)return e==="$attrs"&&ft(t.attrs,"get",""),h(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==Ne&&Re(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Re(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return bc(s,e)?(s[e]=n,!0):r!==Ne&&Re(r,e)?(r[e]=n,!0):Re(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==Ne&&c[0]!=="$"&&Re(t,c)||bc(e,c)||Re(i,c)||Re(r,c)||Re(pi,c)||Re(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Re(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ef(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Xc=!0;function Gv(t){const e=lm(t),n=t.proxy,r=t.ctx;Xc=!1,e.beforeCreate&&tf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:h,created:f,beforeMount:p,mounted:m,beforeUpdate:y,updated:C,activated:N,deactivated:k,beforeDestroy:$,beforeUnmount:U,destroyed:j,unmounted:H,render:de,renderTracked:fe,renderTriggered:w,errorCaptured:v,serverPrefetch:I,expose:A,inheritAttrs:R,components:S,directives:E,filters:_t}=e;if(h&&zv(h,r,null),o)for(const ve in o){const ge=o[ve];he(ge)&&(r[ve]=ge.bind(n))}if(s){const ve=s.call(n,n);Se(ve)&&(t.data=Ra(ve))}if(Xc=!0,i)for(const ve in i){const ge=i[ve],St=he(ge)?ge.bind(n,n):he(ge.get)?ge.get.bind(n,n):un,$t=!he(ge)&&he(ge.set)?ge.set.bind(n):un,Mt=Ut({get:St,set:$t});Object.defineProperty(r,ve,{enumerable:!0,configurable:!0,get:()=>Mt.value,set:xe=>Mt.value=xe})}if(c)for(const ve in c)cm(c[ve],r,n,ve);if(l){const ve=he(l)?l.call(n):l;Reflect.ownKeys(ve).forEach(ge=>{So(ge,ve[ge])})}f&&tf(f,t,"c");function We(ve,ge){ae(ge)?ge.forEach(St=>ve(St.bind(n))):ge&&ve(ge.bind(n))}if(We(Vv,p),We(om,m),We(Dv,y),We(xv,C),We(Nv,N),We(Ov,k),We(Bv,v),We(Uv,fe),We(Fv,w),We(Mv,U),We(am,H),We(Lv,I),ae(A))if(A.length){const ve=t.exposed||(t.exposed={});A.forEach(ge=>{Object.defineProperty(ve,ge,{get:()=>n[ge],set:St=>n[ge]=St,enumerable:!0})})}else t.exposed||(t.exposed={});de&&t.render===un&&(t.render=de),R!=null&&(t.inheritAttrs=R),S&&(t.components=S),E&&(t.directives=E),I&&rm(t)}function zv(t,e,n=un){ae(t)&&(t=Zc(t));for(const r in t){const s=t[r];let i;Se(s)?"default"in s?i=Kt(s.from||r,s.default,!0):i=Kt(s.from||r):i=Kt(s),mt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function tf(t,e,n){Yt(ae(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function cm(t,e,n,r){let s=r.includes(".")?nm(n,r):()=>n[r];if(je(t)){const i=e[t];he(i)&&hi(s,i)}else if(he(t))hi(s,t.bind(n));else if(Se(t))if(ae(t))t.forEach(i=>cm(i,e,n,r));else{const i=he(t.handler)?t.handler.bind(n):e[t.handler];he(i)&&hi(s,i,t)}}function lm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(h=>Ho(l,h,o,!0)),Ho(l,e,o)),Se(e)&&i.set(e,l),l}function Ho(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Ho(t,i,n,!0),s&&s.forEach(o=>Ho(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=Kv[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Kv={data:nf,props:rf,emits:rf,methods:ei,computed:ei,beforeCreate:vt,created:vt,beforeMount:vt,mounted:vt,beforeUpdate:vt,updated:vt,beforeDestroy:vt,beforeUnmount:vt,destroyed:vt,unmounted:vt,activated:vt,deactivated:vt,errorCaptured:vt,serverPrefetch:vt,components:ei,directives:ei,watch:Jv,provide:nf,inject:Qv};function nf(t,e){return e?t?function(){return it(he(t)?t.call(this,this):t,he(e)?e.call(this,this):e)}:e:t}function Qv(t,e){return ei(Zc(t),Zc(e))}function Zc(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function vt(t,e){return t?[...new Set([].concat(t,e))]:e}function ei(t,e){return t?it(Object.create(null),t,e):e}function rf(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:it(Object.create(null),ef(t),ef(e??{})):e}function Jv(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=vt(t[r],e[r]);return n}function um(){return{app:null,config:{isNativeTag:wp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yv=0;function Xv(t,e){return function(r,s=null){he(r)||(r=it({},r)),s!=null&&!Se(s)&&(s=null);const i=um(),o=new WeakSet,c=[];let l=!1;const h=i.app={_uid:Yv++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:NE,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&he(f.install)?(o.add(f),f.install(h,...p)):he(f)&&(o.add(f),f(h,...p))),h},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),h},component(f,p){return p?(i.components[f]=p,h):i.components[f]},directive(f,p){return p?(i.directives[f]=p,h):i.directives[f]},mount(f,p,m){if(!l){const y=h._ceVNode||Qe(r,s);return y.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(y,f,m),l=!0,h._container=f,f.__vue_app__=h,ka(y.component)}},onUnmount(f){c.push(f)},unmount(){l&&(Yt(c,h._instance,16),t(null,h._container),delete h._container.__vue_app__)},provide(f,p){return i.provides[f]=p,h},runWithContext(f){const p=fs;fs=h;try{return f()}finally{fs=p}}};return h}}let fs=null;const Zv=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${It(e)}Modifiers`]||t[`${Hr(e)}Modifiers`];function eE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ne;let s=n;const i=e.startsWith("update:"),o=i&&Zv(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>je(f)?f.trim():f)),o.number&&(s=n.map(Ia)));let c,l=r[c=Ec(e)]||r[c=Ec(It(e))];!l&&i&&(l=r[c=Ec(Hr(e))]),l&&Yt(l,t,6,s);const h=r[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Yt(h,t,6,s)}}const tE=new WeakMap;function hm(t,e,n=!1){const r=n?tE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!he(t)){const l=h=>{const f=hm(h,e,!0);f&&(c=!0,it(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Se(t)&&r.set(t,null),null):(ae(i)?i.forEach(l=>o[l]=null):it(o,i),Se(t)&&r.set(t,o),o)}function Na(t,e){return!t||!_a(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Re(t,e[0].toLowerCase()+e.slice(1))||Re(t,Hr(e))||Re(t,e))}function sf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:h,renderCache:f,props:p,data:m,setupState:y,ctx:C,inheritAttrs:N}=t,k=qo(t);let $,U;try{if(n.shapeFlag&4){const H=s||r,de=H;$=cn(h.call(de,H,f,p,y,m,C)),U=c}else{const H=e;$=cn(H.length>1?H(p,{attrs:c,slots:o,emit:l}):H(p,null)),U=e.props?c:nE(c)}}catch(H){xr.length=0,ba(H,t,1),$=Qe(cr)}let j=$;if(U&&N!==!1){const H=Object.keys(U),{shapeFlag:de}=j;H.length&&de&7&&(i&&H.some(ya)&&(U=rE(U,i)),j=vs(j,U,!1,!0))}return n.dirs&&(j=vs(j,null,!1,!0),j.dirs=j.dirs?j.dirs.concat(n.dirs):n.dirs),n.transition&&Ql(j,n.transition),$=j,qo(k),$}const nE=t=>{let e;for(const n in t)(n==="class"||n==="style"||_a(n))&&((e||(e={}))[n]=t[n]);return e},rE=(t,e)=>{const n={};for(const r in t)(!ya(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function sE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?of(r,o,h):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(fm(o,r,m)&&!Na(h,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?of(r,o,h):!0:!!o;return!1}function of(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(fm(e,t,i)&&!Na(n,i))return!0}return!1}function fm(t,e,n){const r=t[n],s=e[n];return n==="style"&&Se(r)&&Se(s)?!Ui(r,s):r!==s}function iE({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const dm={},pm=()=>Object.create(dm),mm=t=>Object.getPrototypeOf(t)===dm;function oE(t,e,n,r=!1){const s={},i=pm();t.propsDefaults=Object.create(null),gm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Gp(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function aE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ae(s),[l]=t.propsOptions;let h=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Na(t.emitsOptions,m))continue;const y=e[m];if(l)if(Re(i,m))y!==i[m]&&(i[m]=y,h=!0);else{const C=It(m);s[C]=el(l,c,C,y,t,!1)}else y!==i[m]&&(i[m]=y,h=!0)}}}else{gm(t,e,s,i)&&(h=!0);let f;for(const p in c)(!e||!Re(e,p)&&((f=Hr(p))===p||!Re(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=el(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Re(e,p))&&(delete i[p],h=!0)}h&&bn(t.attrs,"set","")}function gm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(ci(l))continue;const h=e[l];let f;s&&Re(s,f=It(l))?!i||!i.includes(f)?n[f]=h:(c||(c={}))[f]=h:Na(t.emitsOptions,l)||(!(l in r)||h!==r[l])&&(r[l]=h,o=!0)}if(i){const l=Ae(n),h=c||Ne;for(let f=0;f<i.length;f++){const p=i[f];n[p]=el(s,l,p,h[p],t,!Re(h,p))}}return o}function el(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Re(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&he(l)){const{propsDefaults:h}=s;if(n in h)r=h[n];else{const f=ji(s);r=h[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Hr(n))&&(r=!0))}return r}const cE=new WeakMap;function _m(t,e,n=!1){const r=n?cE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!he(t)){const f=p=>{l=!0;const[m,y]=_m(p,e,!0);it(o,m),y&&c.push(...y)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Se(t)&&r.set(t,ls),ls;if(ae(i))for(let f=0;f<i.length;f++){const p=It(i[f]);af(p)&&(o[p]=Ne)}else if(i)for(const f in i){const p=It(f);if(af(p)){const m=i[f],y=o[p]=ae(m)||he(m)?{type:m}:it({},m),C=y.type;let N=!1,k=!0;if(ae(C))for(let $=0;$<C.length;++$){const U=C[$],j=he(U)&&U.name;if(j==="Boolean"){N=!0;break}else j==="String"&&(k=!1)}else N=he(C)&&C.name==="Boolean";y[0]=N,y[1]=k,(N||Re(y,"default"))&&c.push(p)}}const h=[o,c];return Se(t)&&r.set(t,h),h}function af(t){return t[0]!=="$"&&!ci(t)}const Jl=t=>t==="_"||t==="_ctx"||t==="$stable",Yl=t=>ae(t)?t.map(cn):[cn(t)],lE=(t,e,n)=>{if(e._n)return e;const r=Sa((...s)=>Yl(e(...s)),n);return r._c=!1,r},ym=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Jl(s))continue;const i=t[s];if(he(i))e[s]=lE(s,i,r);else if(i!=null){const o=Yl(i);e[s]=()=>o}}},vm=(t,e)=>{const n=Yl(e);t.slots.default=()=>n},Em=(t,e,n)=>{for(const r in e)(n||!Jl(r))&&(t[r]=e[r])},uE=(t,e,n)=>{const r=t.slots=pm();if(t.vnode.shapeFlag&32){const s=e._;s?(Em(r,e,n),n&&Sp(r,"_",s,!0)):ym(e,r)}else e&&vm(t,e)},hE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ne;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Em(s,e,n):(i=!e.$stable,ym(e,s)),o=e}else e&&(vm(t,e),o={default:1});if(i)for(const c in s)!Jl(c)&&o[c]==null&&delete s[c]},At=gE;function fE(t){return dE(t)}function dE(t,e){const n=wa();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:h,setElementText:f,parentNode:p,nextSibling:m,setScopeId:y=un,insertStaticContent:C}=t,N=(_,T,b,V=null,F=null,D=null,z=void 0,W=null,q=!!T.dynamicChildren)=>{if(_===T)return;_&&!Ys(_,T)&&(V=M(_),xe(_,F,D,!0),_=null),T.patchFlag===-2&&(q=!1,T.dynamicChildren=null);const{type:B,ref:ne,shapeFlag:Q}=T;switch(B){case Oa:k(_,T,b,V);break;case cr:$(_,T,b,V);break;case Po:_==null&&U(T,b,V,z);break;case an:S(_,T,b,V,F,D,z,W,q);break;default:Q&1?de(_,T,b,V,F,D,z,W,q):Q&6?E(_,T,b,V,F,D,z,W,q):(Q&64||Q&128)&&B.process(_,T,b,V,F,D,z,W,q,Z)}ne!=null&&F?fi(ne,_&&_.ref,D,T||_,!T):ne==null&&_&&_.ref!=null&&fi(_.ref,null,D,_,!0)},k=(_,T,b,V)=>{if(_==null)r(T.el=c(T.children),b,V);else{const F=T.el=_.el;T.children!==_.children&&h(F,T.children)}},$=(_,T,b,V)=>{_==null?r(T.el=l(T.children||""),b,V):T.el=_.el},U=(_,T,b,V)=>{[_.el,_.anchor]=C(_.children,T,b,V,_.el,_.anchor)},j=({el:_,anchor:T},b,V)=>{let F;for(;_&&_!==T;)F=m(_),r(_,b,V),_=F;r(T,b,V)},H=({el:_,anchor:T})=>{let b;for(;_&&_!==T;)b=m(_),s(_),_=b;s(T)},de=(_,T,b,V,F,D,z,W,q)=>{if(T.type==="svg"?z="svg":T.type==="math"&&(z="mathml"),_==null)fe(T,b,V,F,D,z,W,q);else{const B=_.el&&_.el._isVueCE?_.el:null;try{B&&B._beginPatch(),I(_,T,F,D,z,W,q)}finally{B&&B._endPatch()}}},fe=(_,T,b,V,F,D,z,W)=>{let q,B;const{props:ne,shapeFlag:Q,transition:ee,dirs:se}=_;if(q=_.el=o(_.type,D,ne&&ne.is,ne),Q&8?f(q,_.children):Q&16&&v(_.children,q,null,V,F,Sc(_,D),z,W),se&&br(_,null,V,"created"),w(q,_,_.scopeId,z,V),ne){for(const ue in ne)ue!=="value"&&!ci(ue)&&i(q,ue,null,ne[ue],D,V);"value"in ne&&i(q,"value",null,ne.value,D),(B=ne.onVnodeBeforeMount)&&tn(B,V,_)}se&&br(_,null,V,"beforeMount");const re=pE(F,ee);re&&ee.beforeEnter(q),r(q,T,b),((B=ne&&ne.onVnodeMounted)||re||se)&&At(()=>{try{B&&tn(B,V,_),re&&ee.enter(q),se&&br(_,null,V,"mounted")}finally{}},F)},w=(_,T,b,V,F)=>{if(b&&y(_,b),V)for(let D=0;D<V.length;D++)y(_,V[D]);if(F){let D=F.subTree;if(T===D||Am(D.type)&&(D.ssContent===T||D.ssFallback===T)){const z=F.vnode;w(_,z,z.scopeId,z.slotScopeIds,F.parent)}}},v=(_,T,b,V,F,D,z,W,q=0)=>{for(let B=q;B<_.length;B++){const ne=_[B]=W?Rn(_[B]):cn(_[B]);N(null,ne,T,b,V,F,D,z,W)}},I=(_,T,b,V,F,D,z)=>{const W=T.el=_.el;let{patchFlag:q,dynamicChildren:B,dirs:ne}=T;q|=_.patchFlag&16;const Q=_.props||Ne,ee=T.props||Ne;let se;if(b&&Sr(b,!1),(se=ee.onVnodeBeforeUpdate)&&tn(se,b,T,_),ne&&br(T,_,b,"beforeUpdate"),b&&Sr(b,!0),B&&(!_.dynamicChildren||_.dynamicChildren.length!==B.length)&&(q=0,z=!1,B=null),(Q.innerHTML&&ee.innerHTML==null||Q.textContent&&ee.textContent==null)&&f(W,""),B?A(_.dynamicChildren,B,W,b,V,Sc(T,F),D):z||ge(_,T,W,null,b,V,Sc(T,F),D,!1),q>0){if(q&16)R(W,Q,ee,b,F);else if(q&2&&Q.class!==ee.class&&i(W,"class",null,ee.class,F),q&4&&i(W,"style",Q.style,ee.style,F),q&8){const re=T.dynamicProps;for(let ue=0;ue<re.length;ue++){const Te=re[ue],Le=Q[Te],Ge=ee[Te];(Ge!==Le||Te==="value")&&i(W,Te,Le,Ge,F,b)}}q&1&&_.children!==T.children&&f(W,T.children)}else!z&&B==null&&R(W,Q,ee,b,F);((se=ee.onVnodeUpdated)||ne)&&At(()=>{se&&tn(se,b,T,_),ne&&br(T,_,b,"updated")},V)},A=(_,T,b,V,F,D,z)=>{for(let W=0;W<T.length;W++){const q=_[W],B=T[W],ne=q.el&&(q.type===an||!Ys(q,B)||q.shapeFlag&198)?p(q.el):b;N(q,B,ne,null,V,F,D,z,!0)}},R=(_,T,b,V,F)=>{if(T!==b){if(T!==Ne)for(const D in T)!ci(D)&&!(D in b)&&i(_,D,T[D],null,F,V);for(const D in b){if(ci(D))continue;const z=b[D],W=T[D];z!==W&&D!=="value"&&i(_,D,W,z,F,V)}"value"in b&&i(_,"value",T.value,b.value,F)}},S=(_,T,b,V,F,D,z,W,q)=>{const B=T.el=_?_.el:c(""),ne=T.anchor=_?_.anchor:c("");let{patchFlag:Q,dynamicChildren:ee,slotScopeIds:se}=T;se&&(W=W?W.concat(se):se),_==null?(r(B,b,V),r(ne,b,V),v(T.children||[],b,ne,F,D,z,W,q)):Q>0&&Q&64&&ee&&_.dynamicChildren&&_.dynamicChildren.length===ee.length?(A(_.dynamicChildren,ee,b,F,D,z,W),(T.key!=null||F&&T===F.subTree)&&Tm(_,T,!0)):ge(_,T,b,ne,F,D,z,W,q)},E=(_,T,b,V,F,D,z,W,q)=>{T.slotScopeIds=W,_==null?T.shapeFlag&512?F.ctx.activate(T,b,V,z,q):_t(T,b,V,F,D,z,q):xt(_,T,q)},_t=(_,T,b,V,F,D,z)=>{const W=_.component=IE(_,V,F);if(sm(_)&&(W.ctx.renderer=Z),AE(W,!1,z),W.asyncDep){if(F&&F.registerDep(W,We,z),!_.el){const q=W.subTree=Qe(cr);$(null,q,T,b),_.placeholder=q.el}}else We(W,_,T,b,F,D,z)},xt=(_,T,b)=>{const V=T.component=_.component;if(sE(_,T,b))if(V.asyncDep&&!V.asyncResolved){ve(V,T,b);return}else V.next=T,V.update();else T.el=_.el,V.vnode=T},We=(_,T,b,V,F,D,z)=>{const W=()=>{if(_.isMounted){let{next:Q,bu:ee,u:se,parent:re,vnode:ue}=_;{const at=Im(_);if(at){Q&&(Q.el=ue.el,ve(_,Q,z)),at.asyncDep.then(()=>{At(()=>{_.isUnmounted||B()},F)});return}}let Te=Q,Le;Sr(_,!1),Q?(Q.el=ue.el,ve(_,Q,z)):Q=ue,ee&&bo(ee),(Le=Q.props&&Q.props.onVnodeBeforeUpdate)&&tn(Le,re,Q,ue),Sr(_,!0);const Ge=sf(_),Lt=_.subTree;_.subTree=Ge,N(Lt,Ge,p(Lt.el),M(Lt),_,F,D),Q.el=Ge.el,Te===null&&iE(_,Ge.el),se&&At(se,F),(Le=Q.props&&Q.props.onVnodeUpdated)&&At(()=>tn(Le,re,Q,ue),F)}else{let Q;const{el:ee,props:se}=T,{bm:re,m:ue,parent:Te,root:Le,type:Ge}=_,Lt=di(T);Sr(_,!1),re&&bo(re),!Lt&&(Q=se&&se.onVnodeBeforeMount)&&tn(Q,Te,T),Sr(_,!0);{Le.ce&&Le.ce._hasShadowRoot()&&Le.ce._injectChildStyle(Ge,_.parent?_.parent.type:void 0);const at=_.subTree=sf(_);N(null,at,b,V,_,F,D),T.el=at.el}if(ue&&At(ue,F),!Lt&&(Q=se&&se.onVnodeMounted)){const at=T;At(()=>tn(Q,Te,at),F)}(T.shapeFlag&256||Te&&di(Te.vnode)&&Te.vnode.shapeFlag&256)&&_.a&&At(_.a,F),_.isMounted=!0,T=b=V=null}};_.scope.on();const q=_.effect=new kp(W);_.scope.off();const B=_.update=q.run.bind(q),ne=_.job=q.runIfDirty.bind(q);ne.i=_,ne.id=_.uid,q.scheduler=()=>Kl(ne),Sr(_,!0),B()},ve=(_,T,b)=>{T.component=_;const V=_.vnode.props;_.vnode=T,_.next=null,aE(_,T.props,V,b),hE(_,T.children,b),kn(),Jh(_),Vn()},ge=(_,T,b,V,F,D,z,W,q=!1)=>{const B=_&&_.children,ne=_?_.shapeFlag:0,Q=T.children,{patchFlag:ee,shapeFlag:se}=T;if(ee>0){if(ee&128){$t(B,Q,b,V,F,D,z,W,q);return}else if(ee&256){St(B,Q,b,V,F,D,z,W,q);return}}se&8?(ne&16&&wt(B,F,D),Q!==B&&f(b,Q)):ne&16?se&16?$t(B,Q,b,V,F,D,z,W,q):wt(B,F,D,!0):(ne&8&&f(b,""),se&16&&v(Q,b,V,F,D,z,W,q))},St=(_,T,b,V,F,D,z,W,q)=>{_=_||ls,T=T||ls;const B=_.length,ne=T.length,Q=Math.min(B,ne);let ee;for(ee=0;ee<Q;ee++){const se=T[ee]=q?Rn(T[ee]):cn(T[ee]);N(_[ee],se,b,null,F,D,z,W,q)}B>ne?wt(_,F,D,!0,!1,Q):v(T,b,V,F,D,z,W,q,Q)},$t=(_,T,b,V,F,D,z,W,q)=>{let B=0;const ne=T.length;let Q=_.length-1,ee=ne-1;for(;B<=Q&&B<=ee;){const se=_[B],re=T[B]=q?Rn(T[B]):cn(T[B]);if(Ys(se,re))N(se,re,b,null,F,D,z,W,q);else break;B++}for(;B<=Q&&B<=ee;){const se=_[Q],re=T[ee]=q?Rn(T[ee]):cn(T[ee]);if(Ys(se,re))N(se,re,b,null,F,D,z,W,q);else break;Q--,ee--}if(B>Q){if(B<=ee){const se=ee+1,re=se<ne?T[se].el:V;for(;B<=ee;)N(null,T[B]=q?Rn(T[B]):cn(T[B]),b,re,F,D,z,W,q),B++}}else if(B>ee)for(;B<=Q;)xe(_[B],F,D,!0),B++;else{const se=B,re=B,ue=new Map;for(B=re;B<=ee;B++){const et=T[B]=q?Rn(T[B]):cn(T[B]);et.key!=null&&ue.set(et.key,B)}let Te,Le=0;const Ge=ee-re+1;let Lt=!1,at=0;const $n=new Array(Ge);for(B=0;B<Ge;B++)$n[B]=0;for(B=se;B<=Q;B++){const et=_[B];if(Le>=Ge){xe(et,F,D,!0);continue}let Ft;if(et.key!=null)Ft=ue.get(et.key);else for(Te=re;Te<=ee;Te++)if($n[Te-re]===0&&Ys(et,T[Te])){Ft=Te;break}Ft===void 0?xe(et,F,D,!0):($n[Ft-re]=B+1,Ft>=at?at=Ft:Lt=!0,N(et,T[Ft],b,null,F,D,z,W,q),Le++)}const Ls=Lt?mE($n):ls;for(Te=Ls.length-1,B=Ge-1;B>=0;B--){const et=re+B,Ft=T[et],eo=T[et+1],Qr=et+1<ne?eo.el||wm(eo):V;$n[B]===0?N(null,Ft,b,Qr,F,D,z,W,q):Lt&&(Te<0||B!==Ls[Te]?Mt(Ft,b,Qr,2):Te--)}}},Mt=(_,T,b,V,F=null)=>{const{el:D,type:z,transition:W,children:q,shapeFlag:B}=_;if(B&6){Mt(_.component.subTree,T,b,V);return}if(B&128){_.suspense.move(T,b,V);return}if(B&64){z.move(_,T,b,Z);return}if(z===an){r(D,T,b);for(let Q=0;Q<q.length;Q++)Mt(q[Q],T,b,V);r(_.anchor,T,b);return}if(z===Po){j(_,T,b);return}if(V!==2&&B&1&&W)if(V===0)W.persisted&&!D[Rc]?r(D,T,b):(W.beforeEnter(D),r(D,T,b),At(()=>W.enter(D),F));else{const{leave:Q,delayLeave:ee,afterLeave:se}=W,re=()=>{_.ctx.isUnmounted?s(D):r(D,T,b)},ue=()=>{const Te=D._isLeaving||!!D[Rc];D._isLeaving&&D[Rc](!0),W.persisted&&!Te?re():Q(D,()=>{re(),se&&se()})};ee?ee(D,re,ue):ue()}else r(D,T,b)},xe=(_,T,b,V=!1,F=!1)=>{const{type:D,props:z,ref:W,children:q,dynamicChildren:B,shapeFlag:ne,patchFlag:Q,dirs:ee,cacheIndex:se,memo:re}=_;if(Q===-2&&(F=!1),W!=null&&(kn(),fi(W,null,b,_,!0),Vn()),se!=null&&(T.renderCache[se]=void 0),ne&256){T.ctx.deactivate(_);return}const ue=ne&1&&ee,Te=!di(_);let Le;if(Te&&(Le=z&&z.onVnodeBeforeUnmount)&&tn(Le,T,_),ne&6)Pt(_.component,b,V);else{if(ne&128){_.suspense.unmount(b,V);return}ue&&br(_,null,T,"beforeUnmount"),ne&64?_.type.remove(_,T,b,Z,V):B&&!B.hasOnce&&(D!==an||Q>0&&Q&64)?wt(B,T,b,!1,!0):(D===an&&Q&384||!F&&ne&16)&&wt(q,T,b),V&&Me(_)}const Ge=re!=null&&se==null;(Te&&(Le=z&&z.onVnodeUnmounted)||ue||Ge)&&At(()=>{Le&&tn(Le,T,_),ue&&br(_,null,T,"unmounted"),Ge&&(_.el=null)},b)},Me=_=>{const{type:T,el:b,anchor:V,transition:F}=_;if(T===an){qn(b,V);return}if(T===Po){H(_);return}const D=()=>{s(b),F&&!F.persisted&&F.afterLeave&&F.afterLeave()};if(_.shapeFlag&1&&F&&!F.persisted){const{leave:z,delayLeave:W}=F,q=()=>z(b,D);W?W(_.el,D,q):q()}else D()},qn=(_,T)=>{let b;for(;_!==T;)b=m(_),s(_),_=b;s(T)},Pt=(_,T,b)=>{const{bum:V,scope:F,job:D,subTree:z,um:W,m:q,a:B}=_;cf(q),cf(B),V&&bo(V),F.stop(),D&&(D.flags|=8,xe(z,_,T,b)),W&&At(W,T),At(()=>{_.isUnmounted=!0},T)},wt=(_,T,b,V=!1,F=!1,D=0)=>{for(let z=D;z<_.length;z++)xe(_[z],T,b,V,F)},M=_=>{if(_.shapeFlag&6)return M(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const T=m(_.anchor||_.el),b=T&&T[Pv];return b?m(b):T};let X=!1;const K=(_,T,b)=>{let V;_==null?T._vnode&&(xe(T._vnode,null,null,!0),V=T._vnode.component):N(T._vnode||null,_,T,null,null,null,b),T._vnode=_,X||(X=!0,Jh(V),Xp(),X=!1)},Z={p:N,um:xe,m:Mt,r:Me,mt:_t,mc:v,pc:ge,pbc:A,n:M,o:t};return{render:K,hydrate:void 0,createApp:Xv(K)}}function Sc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Sr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function pE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Tm(t,e,n=!1){const r=t.children,s=e.children;if(ae(r)&&ae(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Rn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Tm(o,c)),c.type===Oa&&(c.patchFlag===-1&&(c=s[i]=Rn(c)),c.el=o.el),c.type===cr&&!c.el&&(c.el=o.el)}}function mE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const h=t[r];if(h!==0){if(s=n[n.length-1],t[s]<h){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<h?i=c+1:o=c;h<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Im(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Im(e)}function cf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function wm(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?wm(e.subTree):null}const Am=t=>t.__isSuspense;function gE(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):Av(t)}const an=Symbol.for("v-fgt"),Oa=Symbol.for("v-txt"),cr=Symbol.for("v-cmt"),Po=Symbol.for("v-stc"),xr=[];let Vt=null;function Nt(t=!1){xr.push(Vt=t?null:[])}function Rm(){xr.pop(),Vt=xr[xr.length-1]||null}let bi=1;function Wo(t,e=!1){bi+=t,t<0&&Vt&&e&&(Vt.hasOnce=!0)}function bm(t){return t.dynamicChildren=bi>0?Vt||ls:null,Rm(),bi>0&&Vt&&Vt.push(t),t}function rn(t,e,n,r,s,i){return bm(Ce(t,e,n,r,s,i,!0))}function tl(t,e,n,r,s){return bm(Qe(t,e,n,r,s,!0))}function Go(t){return t?t.__v_isVNode===!0:!1}function Ys(t,e){return t.type===e.type&&t.key===e.key}const Sm=({key:t})=>t??null,Co=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?je(t)||mt(t)||he(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function Ce(t,e=null,n=null,r=0,s=null,i=t===an?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Sm(e),ref:e&&Co(e),scopeId:em,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:kt};return c?(zo(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=je(n)?8:16),bi>0&&!o&&Vt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Vt.push(l),l}const Qe=_E;function _E(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===qv)&&(t=cr),Go(t)){const c=vs(t,e,!0);return n&&zo(c,n),bi>0&&!i&&Vt&&(c.shapeFlag&6?Vt[Vt.indexOf(t)]=c:Vt.push(c)),c.patchFlag=-2,c}if(CE(t)&&(t=t.__vccOpts),e){e=yE(e);let{class:c,style:l}=e;c&&!je(c)&&(e.class=Ii(c)),Se(l)&&(Gl(l)&&!ae(l)&&(l=it({},l)),e.style=Ul(l))}const o=je(t)?1:Am(t)?128:Cv(t)?64:Se(t)?4:he(t)?2:0;return Ce(t,e,n,r,s,o,i,!0)}function yE(t){return t?Gl(t)||mm(t)?it({},t):t:null}function vs(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,h=e?vE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Sm(h),ref:e&&e.ref?n&&i?ae(i)?i.concat(Co(e)):[i,Co(e)]:Co(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==an?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&vs(t.ssContent),ssFallback:t.ssFallback&&vs(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Ql(f,l.clone(f)),f}function Pm(t=" ",e=0){return Qe(Oa,null,t,e)}function dC(t,e){const n=Qe(Po,null,t);return n.staticCount=e,n}function lf(t="",e=!1){return e?(Nt(),tl(cr,null,t)):Qe(cr,null,t)}function cn(t){return t==null||typeof t=="boolean"?Qe(cr):ae(t)?Qe(an,null,t.slice()):Go(t)?Rn(t):Qe(Oa,null,String(t))}function Rn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:vs(t)}function zo(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),zo(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!mm(e)?e._ctx=kt:s===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(he(e)){if(r&65){zo(t,{default:e});return}e={default:e,_ctx:kt},n=32}else e=String(e),r&64?(n=16,e=[Pm(e)]):n=8;t.children=e,t.shapeFlag|=n}function vE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ii([e.class,r.class]));else if(s==="style")e.style=Ul([e.style,r.style]);else if(_a(s)){const i=e[s],o=r[s];o&&i!==o&&!(ae(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!ya(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function tn(t,e,n,r=null){Yt(t,e,7,[n,r])}const EE=um();let TE=0;function IE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||EE,i={uid:TE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Op(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:_m(r,s),emitsOptions:hm(r,s),emit:null,emitted:null,propsDefaults:Ne,inheritAttrs:r.inheritAttrs,ctx:Ne,data:Ne,props:Ne,attrs:Ne,slots:Ne,refs:Ne,setupState:Ne,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=eE.bind(null,i),t.ce&&t.ce(i),i}let pt=null;const wE=()=>pt||kt;let Ko,nl;{const t=wa(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ko=e("__VUE_INSTANCE_SETTERS__",n=>pt=n),nl=e("__VUE_SSR_SETTERS__",n=>Si=n)}const ji=t=>{const e=pt;return Ko(t),t.scope.on(),()=>{t.scope.off(),Ko(e)}},uf=()=>{pt&&pt.scope.off(),Ko(null)};function Cm(t){return t.vnode.shapeFlag&4}let Si=!1;function AE(t,e=!1,n=!1){e&&nl(e);const{props:r,children:s}=t.vnode,i=Cm(t);oE(t,r,i,e),uE(t,s,n||e);const o=i?RE(t,e):void 0;return e&&nl(!1),o}function RE(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,Wv);const{setup:r}=n;if(r){kn();const s=t.setupContext=r.length>1?SE(t):null,i=ji(t),o=Bi(r,t,0,[t.props,s]),c=Ap(o);if(Vn(),i(),(c||t.sp)&&!di(t)&&rm(t),c){if(o.then(uf,uf),e)return o.then(l=>{hf(t,l)}).catch(l=>{ba(l,t,0)});t.asyncDep=o}else hf(t,o)}else Nm(t)}function hf(t,e,n){he(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Se(e)&&(t.setupState=Qp(e)),Nm(t)}function Nm(t,e,n){const r=t.type;t.render||(t.render=r.render||un);{const s=ji(t);kn();try{Gv(t)}finally{Vn(),s()}}}const bE={get(t,e){return ft(t,"get",""),t[e]}};function SE(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,bE),slots:t.slots,emit:t.emit,expose:e}}function ka(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Qp(zp(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in pi)return pi[n](t)},has(e,n){return n in e||n in pi}})):t.proxy}function PE(t,e=!0){return he(t)?t.displayName||t.name:t.name||e&&t.__name}function CE(t){return he(t)&&"__vccOpts"in t}const Ut=(t,e)=>vv(t,e,Si);function Om(t,e,n){try{Wo(-1);const r=arguments.length;return r===2?Se(e)&&!ae(e)?Go(e)?Qe(t,null,[e]):Qe(t,e):Qe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Go(n)&&(n=[n]),Qe(t,e,n))}finally{Wo(1)}}const NE="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let rl;const ff=typeof window<"u"&&window.trustedTypes;if(ff)try{rl=ff.createPolicy("vue",{createHTML:t=>t})}catch{}const km=rl?t=>rl.createHTML(t):t=>t,OE="http://www.w3.org/2000/svg",kE="http://www.w3.org/1998/Math/MathML",An=typeof document<"u"?document:null,df=An&&An.createElement("template"),VE={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?An.createElementNS(OE,t):e==="mathml"?An.createElementNS(kE,t):n?An.createElement(t,{is:n}):An.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>An.createTextNode(t),createComment:t=>An.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>An.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{df.innerHTML=km(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=df.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},DE=Symbol("_vtc");function xE(t,e,n){const r=t[DE];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const pf=Symbol("_vod"),ME=Symbol("_vsh"),LE=Symbol(""),FE=/(?:^|;)\s*display\s*:/;function UE(t,e,n){const r=t.style,s=je(n);let i=!1;if(n&&!s){if(e)if(je(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&ti(r,c,"")}else for(const o in e)n[o]==null&&ti(r,o,"");for(const o in n){o==="display"&&(i=!0);const c=n[o];c!=null?jE(t,o,!je(e)&&e?e[o]:void 0,c)||ti(r,o,c):ti(r,o,"")}}else if(s){if(e!==n){const o=r[LE];o&&(n+=";"+o),r.cssText=n,i=FE.test(n)}}else e&&t.removeAttribute("style");pf in t&&(t[pf]=i?r.display:"",t[ME]&&(r.display="none"))}const mf=/\s*!important$/;function ti(t,e,n){if(ae(n))n.forEach(r=>ti(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=BE(t,e);mf.test(n)?t.setProperty(Hr(r),n.replace(mf,""),"important"):t[r]=n}}const gf=["Webkit","Moz","ms"],Pc={};function BE(t,e){const n=Pc[e];if(n)return n;let r=It(e);if(r!=="filter"&&r in t)return Pc[e]=r;r=Ta(r);for(let s=0;s<gf.length;s++){const i=gf[s]+r;if(i in t)return Pc[e]=i}return e}function jE(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&je(r)&&n===r}const _f="http://www.w3.org/1999/xlink";function yf(t,e,n,r,s,i=zy(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(_f,e.slice(6,e.length)):t.setAttributeNS(_f,e,n):n==null||i&&!Pp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":yn(n)?String(n):n)}function vf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?km(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Pp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Nr(t,e,n,r){t.addEventListener(e,n,r)}function qE(t,e,n,r){t.removeEventListener(e,n,r)}const Ef=Symbol("_vei");function $E(t,e,n,r,s=null){const i=t[Ef]||(t[Ef]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=GE(e);if(r){const h=i[e]=QE(r,s);Nr(t,c,h,l)}else o&&(qE(t,c,o,l),i[e]=void 0)}}const HE=/(Once|Passive|Capture)$/,WE=/^on:?(?:Once|Passive|Capture)$/;function GE(t){let e,n;for(;(n=t.match(HE))&&!WE.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):Hr(t.slice(2)),e]}let Cc=0;const zE=Promise.resolve(),KE=()=>Cc||(zE.then(()=>Cc=0),Cc=Date.now());function QE(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(ae(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),c=[r];for(let l=0;l<o.length&&!r._stopped;l++){const h=o[l];h&&Yt(h,e,5,c)}}else Yt(s,e,5,[r])};return n.value=t,n.attached=KE(),n}const Tf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,JE=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?xE(t,r,o):e==="style"?UE(t,n,r):_a(e)?ya(e)||$E(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):YE(t,e,r,o))?(vf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&yf(t,e,r,o,i,e!=="value")):t._isVueCE&&(XE(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!je(r)))?vf(t,It(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),yf(t,e,r,o))};function YE(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Tf(e)&&he(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Tf(e)&&je(n)?!1:e in t}function XE(t,e){const n=t._def.props;if(!n)return!1;const r=It(e);return Array.isArray(n)?n.some(s=>It(s)===r):Object.keys(n).some(s=>It(s)===r)}const Qo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>bo(e,n):e};function ZE(t){t.target.composing=!0}function If(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ds=Symbol("_assign");function wf(t,e,n){return e&&(t=t.trim()),n&&(t=Ia(t)),t}const pC={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[ds]=Qo(s);const i=r||s.props&&s.props.type==="number";Nr(t,e?"change":"input",o=>{o.target.composing||t[ds](wf(t.value,n,i))}),(n||i)&&Nr(t,"change",()=>{t.value=wf(t.value,n,i)}),e||(Nr(t,"compositionstart",ZE),Nr(t,"compositionend",If),Nr(t,"change",If))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[ds]=Qo(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ia(t.value):t.value,l=e??"";if(c===l)return;const h=t.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l)}},mC={deep:!0,created(t,{value:e,modifiers:{number:n}},r){t._modelValue=e,Nr(t,"change",()=>{const s=Array.prototype.filter.call(t.options,i=>i.selected).map(i=>n?Ia(Jo(i)):Jo(i));t[ds](t.multiple?va(t._modelValue)?new Set(s):s:s[0]),t._assigning=!0,zl(()=>{t._assigning=!1})}),t[ds]=Qo(r)},mounted(t,{value:e}){Af(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[ds]=Qo(n)},updated(t,{value:e}){t._assigning||Af(t,e)}};function Af(t,e){const n=t.multiple,r=ae(e);if(!(n&&!r&&!va(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Jo(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(h=>String(h)===String(c)):o.selected=Qy(e,c)>-1}else o.selected=e.has(c);else if(Ui(Jo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Jo(t){return"_value"in t?t._value:t.value}const eT=["ctrl","shift","alt","meta"],tT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>eT.some(n=>t[`${n}Key`]&&!e.includes(n))},gC=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const c=tT[e[o]];if(c&&c(s,e))return}return t(s,...i)}))},nT=it({patchProp:JE},VE);let Rf;function rT(){return Rf||(Rf=fE(nT))}const sT=((...t)=>{const e=rT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=oT(r);if(!s)return;const i=e._component;!he(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,iT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function iT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function oT(t){return je(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const aT=Symbol();var bf;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(bf||(bf={}));function cT(){const t=Jy(!0),e=t.run(()=>Ps({}));let n=[],r=[];const s=zp({install(i){s._a=i,i.provide(aT,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ns=typeof document<"u";function Vm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function lT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Vm(t.default)}const we=Object.assign;function Nc(t,e){const n={};for(const r in e){const s=e[r];n[r]=Xt(s)?s.map(t):t(s)}return n}const mi=()=>{},Xt=Array.isArray;function Sf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Dm=/#/g,uT=/&/g,hT=/\//g,fT=/=/g,dT=/\?/g,xm=/\+/g,pT=/%5B/g,mT=/%5D/g,Mm=/%5E/g,gT=/%60/g,Lm=/%7B/g,_T=/%7C/g,Fm=/%7D/g,yT=/%20/g;function Xl(t){return t==null?"":encodeURI(""+t).replace(_T,"|").replace(pT,"[").replace(mT,"]")}function vT(t){return Xl(t).replace(Lm,"{").replace(Fm,"}").replace(Mm,"^")}function sl(t){return Xl(t).replace(xm,"%2B").replace(yT,"+").replace(Dm,"%23").replace(uT,"%26").replace(gT,"`").replace(Lm,"{").replace(Fm,"}").replace(Mm,"^")}function ET(t){return sl(t).replace(fT,"%3D")}function TT(t){return Xl(t).replace(Dm,"%23").replace(dT,"%3F")}function IT(t){return TT(t).replace(hT,"%2F")}function Pi(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const wT=/\/$/,AT=t=>t.replace(wT,"");function Oc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=PT(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Pi(o)}}function RT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Pf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function bT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Es(e.matched[r],n.matched[s])&&Um(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Es(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Um(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!ST(t[n],e[n]))return!1;return!0}function ST(t,e){return Xt(t)?Cf(t,e):Xt(e)?Cf(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Cf(t,e){return Xt(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function PT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const zn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let il=(function(t){return t.pop="pop",t.push="push",t})({}),kc=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function CT(t){if(!t)if(ns){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),AT(t)}const NT=/^[^#]+#/;function OT(t,e){return t.replace(NT,"#")+e}function kT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Va=()=>({left:window.scrollX,top:window.scrollY});function VT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=kT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Nf(t,e){return(history.state?history.state.position-e:-1)+t}const ol=new Map;function DT(t,e){ol.set(t,e)}function xT(t){const e=ol.get(t);return ol.delete(t),e}function MT(t){return typeof t=="string"||t&&typeof t=="object"}function Bm(t){return typeof t=="string"||typeof t=="symbol"}let Be=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const jm=Symbol("");Be.MATCHER_NOT_FOUND+"",Be.NAVIGATION_GUARD_REDIRECT+"",Be.NAVIGATION_ABORTED+"",Be.NAVIGATION_CANCELLED+"",Be.NAVIGATION_DUPLICATED+"";function Ts(t,e){return we(new Error,{type:t,[jm]:!0},e)}function wn(t,e){return t instanceof Error&&jm in t&&(e==null||!!(t.type&e))}const LT=["params","query","hash"];function FT(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of LT)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function UT(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(xm," "),i=s.indexOf("="),o=Pi(i<0?s:s.slice(0,i)),c=i<0?null:Pi(s.slice(i+1));if(o in e){let l=e[o];Xt(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function Of(t){let e="";for(let n in t){const r=t[n];if(n=ET(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(Xt(r)?r.map(s=>s&&sl(s)):[r&&sl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function BT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=Xt(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const jT=Symbol(""),kf=Symbol(""),Da=Symbol(""),Zl=Symbol(""),al=Symbol("");function Xs(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Yn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const h=m=>{m===!1?l(Ts(Be.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?l(m):MT(m)?l(Ts(Be.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,h));let p=Promise.resolve(f);t.length<3&&(p=p.then(h)),p.catch(m=>l(m))})}function Vc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(Vm(l)){const h=(l.__vccOpts||l)[e];h&&i.push(Yn(h,n,r,o,c,s))}else{let h=l();i.push(()=>h.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=lT(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const m=(p.__vccOpts||p)[e];return m&&Yn(m,n,r,o,c,s)()}))}}return i}function qT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(h=>Es(h,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(h=>Es(h,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let $T=()=>location.protocol+"//"+location.host;function qm(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),Pf(c,"")}return Pf(n,t)+r+s}function HT(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const y=qm(t,location),C=n.value,N=e.value;let k=0;if(m){if(n.value=y,e.value=m,o&&o===C){o=null;return}k=N?m.position-N.position:0}else r(y);s.forEach($=>{$(n.value,C,{delta:k,type:il.pop,direction:k?k>0?kc.forward:kc.back:kc.unknown})})};function l(){o=n.value}function h(m){s.push(m);const y=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(y),y}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(we({},m.state,{scroll:Va()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:h,destroy:p}}function Vf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Va():null}}function WT(t){const{history:e,location:n}=window,r={value:qm(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,h,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:$T()+t+l;try{e[f?"replaceState":"pushState"](h,"",m),s.value=h}catch(y){console.error(y),n[f?"replace":"assign"](m)}}function o(l,h){i(l,we({},e.state,Vf(s.value.back,l,s.value.forward,!0),h,{position:s.value.position}),!0),r.value=l}function c(l,h){const f=we({},s.value,e.state,{forward:l,scroll:Va()});i(f.current,f,!0),i(l,we({},Vf(r.value,l,null),{position:f.position+1},h),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function GT(t){t=CT(t);const e=WT(t),n=HT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=we({location:"",base:t,go:r,createHref:OT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Or=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var Ye=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(Ye||{});const zT={type:Or.Static,value:""},KT=/[a-zA-Z0-9_]/;function QT(t){if(!t)return[[]];if(t==="/")return[[zT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(y){throw new Error(`ERR (${n})/"${h}": ${y}`)}let n=Ye.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,h="",f="";function p(){h&&(n===Ye.Static?i.push({type:Or.Static,value:h}):n===Ye.Param||n===Ye.ParamRegExp||n===Ye.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${h}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Or.Param,value:h,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),h="")}function m(){h+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==Ye.ParamRegExp){r=n,n=Ye.EscapeNext;continue}switch(n){case Ye.Static:l==="/"?(h&&p(),o()):l===":"?(p(),n=Ye.Param):m();break;case Ye.EscapeNext:m(),n=r;break;case Ye.Param:l==="("?n=Ye.ParamRegExp:KT.test(l)?m():(p(),n=Ye.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case Ye.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=Ye.ParamRegExpEnd:f+=l;break;case Ye.ParamRegExpEnd:p(),n=Ye.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===Ye.ParamRegExp&&e(`Unfinished custom RegExp for param "${h}"`),p(),o(),s}const Df="[^/]+?",JT={sensitive:!1,strict:!1,start:!0,end:!0};var Et=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Et||{});const YT=/[.+*?^${}()[\]/\\]/g;function XT(t,e){const n=we({},JT,e),r=[];let s=n.start?"^":"";const i=[];for(const h of t){const f=h.length?[]:[Et.Root];n.strict&&!h.length&&(s+="/");for(let p=0;p<h.length;p++){const m=h[p];let y=Et.Segment+(n.sensitive?Et.BonusCaseSensitive:0);if(m.type===Or.Static)p||(s+="/"),s+=m.value.replace(YT,"\\$&"),y+=Et.Static;else if(m.type===Or.Param){const{value:C,repeatable:N,optional:k,regexp:$}=m;i.push({name:C,repeatable:N,optional:k});const U=$||Df;if(U!==Df){y+=Et.BonusCustomRegExp;try{`${U}`}catch(H){throw new Error(`Invalid custom RegExp for param "${C}" (${U}): `+H.message)}}let j=N?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(j=k&&h.length<2?`(?:/${j})`:"/"+j),k&&(j+="?"),s+=j,y+=Et.Dynamic,k&&(y+=Et.BonusOptional),N&&(y+=Et.BonusRepeatable),U===".*"&&(y+=Et.BonusWildcard)}f.push(y)}r.push(f)}if(n.strict&&n.end){const h=r.length-1;r[h][r[h].length-1]+=Et.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(h){const f=h.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const y=f[m]||"",C=i[m-1];p[C.name]=y&&C.repeatable?y.split("/"):y}return p}function l(h){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const y of m)if(y.type===Or.Static)f+=y.value;else if(y.type===Or.Param){const{value:C,repeatable:N,optional:k}=y,$=C in h?h[C]:"";if(Xt($)&&!N)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const U=Xt($)?$.join("/"):$;if(!U)if(k)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=U}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function ZT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===Et.Static+Et.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Et.Static+Et.Segment?1:-1:0}function $m(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=ZT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(xf(r))return 1;if(xf(s))return-1}return s.length-r.length}function xf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const eI={strict:!1,end:!0,sensitive:!1};function tI(t,e,n){const r=XT(QT(t.path),n),s=we(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function nI(t,e){const n=[],r=new Map;e=Sf(eI,e);function s(p){return r.get(p)}function i(p,m,y){const C=!y,N=Lf(p);N.aliasOf=y&&y.record;const k=Sf(e,p),$=[N];if("alias"in p){const H=typeof p.alias=="string"?[p.alias]:p.alias;for(const de of H)$.push(Lf(we({},N,{components:y?y.record.components:N.components,path:de,aliasOf:y?y.record:N})))}let U,j;for(const H of $){const{path:de}=H;if(m&&de[0]!=="/"){const fe=m.record.path,w=fe[fe.length-1]==="/"?"":"/";H.path=m.record.path+(de&&w+de)}if(U=tI(H,m,k),y?y.alias.push(U):(j=j||U,j!==U&&j.alias.push(U),C&&p.name&&!Ff(U)&&o(p.name)),Hm(U)&&l(U),N.children){const fe=N.children;for(let w=0;w<fe.length;w++)i(fe[w],U,y&&y.children[w])}y=y||U}return j?()=>{o(j)}:mi}function o(p){if(Bm(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=iI(p,n);n.splice(m,0,p),p.record.name&&!Ff(p)&&r.set(p.record.name,p)}function h(p,m){let y,C={},N,k;if("name"in p&&p.name){if(y=r.get(p.name),!y)throw Ts(Be.MATCHER_NOT_FOUND,{location:p});k=y.record.name,C=we(Mf(m.params,y.keys.filter(j=>!j.optional).concat(y.parent?y.parent.keys.filter(j=>j.optional):[]).map(j=>j.name)),p.params&&Mf(p.params,y.keys.map(j=>j.name))),N=y.stringify(C)}else if(p.path!=null)N=p.path,y=n.find(j=>j.re.test(N)),y&&(C=y.parse(N),k=y.record.name);else{if(y=m.name?r.get(m.name):n.find(j=>j.re.test(m.path)),!y)throw Ts(Be.MATCHER_NOT_FOUND,{location:p,currentLocation:m});k=y.record.name,C=we({},m.params,p.params),N=y.stringify(C)}const $=[];let U=y;for(;U;)$.unshift(U.record),U=U.parent;return{name:k,path:N,params:C,matched:$,meta:sI($)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:h,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function Mf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Lf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:rI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function rI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Ff(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function sI(t){return t.reduce((e,n)=>we(e,n.meta),{})}function iI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;$m(t,e[i])<0?r=i:n=i+1}const s=oI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function oI(t){let e=t;for(;e=e.parent;)if(Hm(e)&&$m(t,e)===0)return e}function Hm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Uf(t){const e=Kt(Da),n=Kt(Zl),r=Ut(()=>{const l=zt(t.to);return e.resolve(l)}),s=Ut(()=>{const{matched:l}=r.value,{length:h}=l,f=l[h-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Es.bind(null,f));if(m>-1)return m;const y=Bf(l[h-2]);return h>1&&Bf(f)===y&&p[p.length-1].path!==y?p.findIndex(Es.bind(null,l[h-2])):m}),i=Ut(()=>s.value>-1&&hI(n.params,r.value.params)),o=Ut(()=>s.value>-1&&s.value===n.matched.length-1&&Um(n.params,r.value.params));function c(l={}){if(uI(l)){const h=e[zt(t.replace)?"replace":"push"](zt(t.to)).catch(mi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>h),h}return Promise.resolve()}return{route:r,href:Ut(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function aI(t){return t.length===1?t[0]:t}const cI=Cs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Uf,setup(t,{slots:e}){const n=Ra(Uf(t)),{options:r}=Kt(Da),s=Ut(()=>({[jf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[jf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&aI(e.default(n));return t.custom?i:Om("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),lI=cI;function uI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function hI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!Xt(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function Bf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const jf=(t,e,n)=>t??e??n,fI=Cs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Kt(al),s=Ut(()=>t.route||r.value),i=Kt(kf,0),o=Ut(()=>{let h=zt(i);const{matched:f}=s.value;let p;for(;(p=f[h])&&!p.components;)h++;return h}),c=Ut(()=>s.value.matched[o.value]);So(kf,Ut(()=>o.value+1)),So(jT,c),So(al,s);const l=Ps();return hi(()=>[l.value,c.value,t.name],([h,f,p],[m,y,C])=>{f&&(f.instances[p]=h,y&&y!==f&&h&&h===m&&(f.leaveGuards.size||(f.leaveGuards=y.leaveGuards),f.updateGuards.size||(f.updateGuards=y.updateGuards))),h&&f&&(!y||!Es(f,y)||!m)&&(f.enterCallbacks[p]||[]).forEach(N=>N(h))},{flush:"post"}),()=>{const h=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return qf(n.default,{Component:m,route:h});const y=p.props[f],C=y?y===!0?h.params:typeof y=="function"?y(h):y:null,k=Om(m,we({},C,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return qf(n.default,{Component:k,route:h})||k}}});function qf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const dI=fI;function pI(t){const e=nI(t.routes,t),n=t.parseQuery||UT,r=t.stringifyQuery||Of,s=t.history,i=Xs(),o=Xs(),c=Xs(),l=mv(zn);let h=zn;ns&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Nc.bind(null,M=>""+M),p=Nc.bind(null,IT),m=Nc.bind(null,Pi);function y(M,X){let K,Z;return Bm(M)?(K=e.getRecordMatcher(M),Z=X):Z=M,e.addRoute(Z,K)}function C(M){const X=e.getRecordMatcher(M);X&&e.removeRoute(X)}function N(){return e.getRoutes().map(M=>M.record)}function k(M){return!!e.getRecordMatcher(M)}function $(M,X){if(X=we({},X||l.value),typeof M=="string"){const b=Oc(n,M,X.path),V=e.resolve({path:b.path},X),F=s.createHref(b.fullPath);return we(b,V,{params:m(V.params),hash:Pi(b.hash),redirectedFrom:void 0,href:F})}let K;if(M.path!=null)K=we({},M,{path:Oc(n,M.path,X.path).path});else{const b=we({},M.params);for(const V in b)b[V]==null&&delete b[V];K=we({},M,{params:p(b)}),X.params=p(X.params)}const Z=e.resolve(K,X),pe=M.hash||"";Z.params=f(m(Z.params));const _=RT(r,we({},M,{hash:vT(pe),path:Z.path})),T=s.createHref(_);return we({fullPath:_,hash:pe,query:r===Of?BT(M.query):M.query||{}},Z,{redirectedFrom:void 0,href:T})}function U(M){return typeof M=="string"?Oc(n,M,l.value.path):we({},M)}function j(M,X){if(h!==M)return Ts(Be.NAVIGATION_CANCELLED,{from:X,to:M})}function H(M){return w(M)}function de(M){return H(we(U(M),{replace:!0}))}function fe(M,X){const K=M.matched[M.matched.length-1];if(K&&K.redirect){const{redirect:Z}=K;let pe=typeof Z=="function"?Z(M,X):Z;return typeof pe=="string"&&(pe=pe.includes("?")||pe.includes("#")?pe=U(pe):{path:pe},pe.params={}),we({query:M.query,hash:M.hash,params:pe.path!=null?{}:M.params},pe)}}function w(M,X){const K=h=$(M),Z=l.value,pe=M.state,_=M.force,T=M.replace===!0,b=fe(K,Z);if(b)return w(we(U(b),{state:typeof b=="object"?we({},pe,b.state):pe,force:_,replace:T}),X||K);const V=K;V.redirectedFrom=X;let F;return!_&&bT(r,Z,K)&&(F=Ts(Be.NAVIGATION_DUPLICATED,{to:V,from:Z}),Mt(Z,Z,!0,!1)),(F?Promise.resolve(F):A(V,Z)).catch(D=>wn(D)?wn(D,Be.NAVIGATION_GUARD_REDIRECT)?D:$t(D):ge(D,V,Z)).then(D=>{if(D){if(wn(D,Be.NAVIGATION_GUARD_REDIRECT))return w(we({replace:T},U(D.to),{state:typeof D.to=="object"?we({},pe,D.to.state):pe,force:_}),X||V)}else D=S(V,Z,!0,T,pe);return R(V,Z,D),D})}function v(M,X){const K=j(M,X);return K?Promise.reject(K):Promise.resolve()}function I(M){const X=qn.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(M):M()}function A(M,X){let K;const[Z,pe,_]=qT(M,X);K=Vc(Z.reverse(),"beforeRouteLeave",M,X);for(const b of Z)b.leaveGuards.forEach(V=>{K.push(Yn(V,M,X))});const T=v.bind(null,M,X);return K.push(T),wt(K).then(()=>{K=[];for(const b of i.list())K.push(Yn(b,M,X));return K.push(T),wt(K)}).then(()=>{K=Vc(pe,"beforeRouteUpdate",M,X);for(const b of pe)b.updateGuards.forEach(V=>{K.push(Yn(V,M,X))});return K.push(T),wt(K)}).then(()=>{K=[];for(const b of _)if(b.beforeEnter)if(Xt(b.beforeEnter))for(const V of b.beforeEnter)K.push(Yn(V,M,X));else K.push(Yn(b.beforeEnter,M,X));return K.push(T),wt(K)}).then(()=>(M.matched.forEach(b=>b.enterCallbacks={}),K=Vc(_,"beforeRouteEnter",M,X,I),K.push(T),wt(K))).then(()=>{K=[];for(const b of o.list())K.push(Yn(b,M,X));return K.push(T),wt(K)}).catch(b=>wn(b,Be.NAVIGATION_CANCELLED)?b:Promise.reject(b))}function R(M,X,K){c.list().forEach(Z=>I(()=>Z(M,X,K)))}function S(M,X,K,Z,pe){const _=j(M,X);if(_)return _;const T=X===zn,b=ns?history.state:{};K&&(Z||T?s.replace(M.fullPath,we({scroll:T&&b&&b.scroll},pe)):s.push(M.fullPath,pe)),l.value=M,Mt(M,X,K,T),$t()}let E;function _t(){E||(E=s.listen((M,X,K)=>{if(!Pt.listening)return;const Z=$(M),pe=fe(Z,Pt.currentRoute.value);if(pe){w(we(pe,{replace:!0,force:!0}),Z).catch(mi);return}h=Z;const _=l.value;ns&&DT(Nf(_.fullPath,K.delta),Va()),A(Z,_).catch(T=>wn(T,Be.NAVIGATION_ABORTED|Be.NAVIGATION_CANCELLED)?T:wn(T,Be.NAVIGATION_GUARD_REDIRECT)?(w(we(U(T.to),{force:!0}),Z).then(b=>{wn(b,Be.NAVIGATION_ABORTED|Be.NAVIGATION_DUPLICATED)&&!K.delta&&K.type===il.pop&&s.go(-1,!1)}).catch(mi),Promise.reject()):(K.delta&&s.go(-K.delta,!1),ge(T,Z,_))).then(T=>{T=T||S(Z,_,!1),T&&(K.delta&&!wn(T,Be.NAVIGATION_CANCELLED)?s.go(-K.delta,!1):K.type===il.pop&&wn(T,Be.NAVIGATION_ABORTED|Be.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),R(Z,_,T)}).catch(mi)}))}let xt=Xs(),We=Xs(),ve;function ge(M,X,K){$t(M);const Z=We.list();return Z.length?Z.forEach(pe=>pe(M,X,K)):console.error(M),Promise.reject(M)}function St(){return ve&&l.value!==zn?Promise.resolve():new Promise((M,X)=>{xt.add([M,X])})}function $t(M){return ve||(ve=!M,_t(),xt.list().forEach(([X,K])=>M?K(M):X()),xt.reset()),M}function Mt(M,X,K,Z){const{scrollBehavior:pe}=t;if(!ns||!pe)return Promise.resolve();const _=!K&&xT(Nf(M.fullPath,0))||(Z||!K)&&history.state&&history.state.scroll||null;return zl().then(()=>pe(M,X,_)).then(T=>T&&VT(T)).catch(T=>ge(T,M,X))}const xe=M=>s.go(M);let Me;const qn=new Set,Pt={currentRoute:l,listening:!0,addRoute:y,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:k,getRoutes:N,resolve:$,options:t,push:H,replace:de,go:xe,back:()=>xe(-1),forward:()=>xe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:We.add,isReady:St,install(M){M.component("RouterLink",lI),M.component("RouterView",dI),M.config.globalProperties.$router=Pt,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>zt(l)}),ns&&!Me&&l.value===zn&&(Me=!0,H(s.location).catch(Z=>{}));const X={};for(const Z in zn)Object.defineProperty(X,Z,{get:()=>l.value[Z],enumerable:!0});M.provide(Da,Pt),M.provide(Zl,Gp(X)),M.provide(al,l);const K=M.unmount;qn.add(M),M.unmount=function(){qn.delete(M),qn.size<1&&(h=zn,E&&E(),E=null,l.value=zn,Me=!1,ve=!1),K()}}};function wt(M){return M.reduce((X,K)=>X.then(()=>I(K)),Promise.resolve())}return Pt}function mI(){return Kt(Da)}function Wm(t){return Kt(Zl)}const gI=()=>{};var $f={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gm=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},_I=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},zm={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,h=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|h>>6,y=h&63;l||(y=64,o||(m=64)),r.push(n[f],n[p],n[m],n[y])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Gm(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_I(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const h=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||h==null||p==null)throw new yI;const m=i<<2|c>>4;if(r.push(m),h!==64){const y=c<<4&240|h>>2;if(r.push(y),p!==64){const C=h<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const vI=function(t){const e=Gm(t);return zm.encodeByteArray(e,!0)},Yo=function(t){return vI(t).replace(/\./g,"")},Km=function(t){try{return zm.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TI=()=>EI().__FIREBASE_DEFAULTS__,II=()=>{if(typeof process>"u"||typeof $f>"u")return;const t=$f.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},wI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Km(t[1]);return e&&JSON.parse(e)},xa=()=>{try{return gI()||TI()||II()||wI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Qm=t=>{var e,n;return(n=(e=xa())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Jm=t=>{const e=Qm(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Ym=()=>{var t;return(t=xa())===null||t===void 0?void 0:t.config},Xm=t=>{var e;return(e=xa())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function eu(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Yo(JSON.stringify(n)),Yo(JSON.stringify(o)),""].join(".")}const gi={};function bI(){const t={prod:[],emulator:[]};for(const e of Object.keys(gi))gi[e]?t.emulator.push(e):t.prod.push(e);return t}function SI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Hf=!1;function tu(t,e){if(typeof window>"u"||typeof document>"u"||!Wr(window.location.host)||gi[t]===e||gi[t]||Hf)return;gi[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=bI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,y){m.setAttribute("width","24"),m.setAttribute("id",y),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Hf=!0,o()},m}function f(m,y){m.setAttribute("id",y),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=SI(r),y=n("text"),C=document.getElementById(y)||document.createElement("span"),N=n("learnmore"),k=document.getElementById(N)||document.createElement("a"),$=n("preprendIcon"),U=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const j=m.element;c(j),f(k,N);const H=h();l(U,$),j.append(U,C,k,H),document.body.appendChild(j)}i?(C.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(U.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",y)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function PI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function CI(){var t;const e=(t=xa())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function OI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function VI(){const t=gt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function DI(){return!CI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function xI(){try{return typeof indexedDB=="object"}catch{return!1}}function MI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LI="FirebaseError";class Bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=LI,Object.setPrototypeOf(this,Bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qi.prototype.create)}}class qi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?FI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new Bn(s,c,r)}}function FI(t,e){return t.replace(UI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const UI=/\{\$([^}]+)}/g;function BI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Wf(i)&&Wf(o)){if(!Fr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Wf(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ni(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ri(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function jI(t,e){const n=new qI(t,e);return n.subscribe.bind(n)}class qI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");$I(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Dc),s.error===void 0&&(s.error=Dc),s.complete===void 0&&(s.complete=Dc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $I(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Dc(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qe(t){return t&&t._delegate?t._delegate:t}class lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new AI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(GI(e))try{this.getOrInitializeService({instanceIdentifier:Cr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cr){return this.instances.has(e)}getOptions(e=Cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:WI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cr){return this.component?this.component.multipleInstances?e:Cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function WI(t){return t===Cr?void 0:t}function GI(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new HI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _e;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(_e||(_e={}));const KI={debug:_e.DEBUG,verbose:_e.VERBOSE,info:_e.INFO,warn:_e.WARN,error:_e.ERROR,silent:_e.SILENT},QI=_e.INFO,JI={[_e.DEBUG]:"log",[_e.VERBOSE]:"log",[_e.INFO]:"info",[_e.WARN]:"warn",[_e.ERROR]:"error"},YI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=JI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class nu{constructor(e){this.name=e,this._logLevel=QI,this._logHandler=YI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in _e))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?KI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,_e.DEBUG,...e),this._logHandler(this,_e.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,_e.VERBOSE,...e),this._logHandler(this,_e.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,_e.INFO,...e),this._logHandler(this,_e.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,_e.WARN,...e),this._logHandler(this,_e.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,_e.ERROR,...e),this._logHandler(this,_e.ERROR,...e)}}const XI=(t,e)=>e.some(n=>t instanceof n);let Gf,zf;function ZI(){return Gf||(Gf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ew(){return zf||(zf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Zm=new WeakMap,cl=new WeakMap,eg=new WeakMap,xc=new WeakMap,ru=new WeakMap;function tw(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(sr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Zm.set(n,t)}).catch(()=>{}),ru.set(e,t),e}function nw(t){if(cl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});cl.set(t,e)}let ll={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return cl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||eg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return sr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function rw(t){ll=t(ll)}function sw(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Mc(this),e,...n);return eg.set(r,e.sort?e.sort():[e]),sr(r)}:ew().includes(t)?function(...e){return t.apply(Mc(this),e),sr(Zm.get(this))}:function(...e){return sr(t.apply(Mc(this),e))}}function iw(t){return typeof t=="function"?sw(t):(t instanceof IDBTransaction&&nw(t),XI(t,ZI())?new Proxy(t,ll):t)}function sr(t){if(t instanceof IDBRequest)return tw(t);if(xc.has(t))return xc.get(t);const e=iw(t);return e!==t&&(xc.set(t,e),ru.set(e,t)),e}const Mc=t=>ru.get(t);function ow(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=sr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(sr(o.result),l.oldVersion,l.newVersion,sr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const aw=["get","getKey","getAll","getAllKeys","count"],cw=["put","add","delete","clear"],Lc=new Map;function Kf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Lc.get(e))return Lc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=cw.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||aw.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let h=l.store;return r&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),s&&l.done]))[0]};return Lc.set(e,i),i}rw(t=>({...t,get:(e,n,r)=>Kf(e,n)||t.get(e,n,r),has:(e,n)=>!!Kf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lw{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(uw(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function uw(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ul="@firebase/app",Qf="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=new nu("@firebase/app"),hw="@firebase/app-compat",fw="@firebase/analytics-compat",dw="@firebase/analytics",pw="@firebase/app-check-compat",mw="@firebase/app-check",gw="@firebase/auth",_w="@firebase/auth-compat",yw="@firebase/database",vw="@firebase/data-connect",Ew="@firebase/database-compat",Tw="@firebase/functions",Iw="@firebase/functions-compat",ww="@firebase/installations",Aw="@firebase/installations-compat",Rw="@firebase/messaging",bw="@firebase/messaging-compat",Sw="@firebase/performance",Pw="@firebase/performance-compat",Cw="@firebase/remote-config",Nw="@firebase/remote-config-compat",Ow="@firebase/storage",kw="@firebase/storage-compat",Vw="@firebase/firestore",Dw="@firebase/ai",xw="@firebase/firestore-compat",Mw="firebase",Lw="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl="[DEFAULT]",Fw={[ul]:"fire-core",[hw]:"fire-core-compat",[dw]:"fire-analytics",[fw]:"fire-analytics-compat",[mw]:"fire-app-check",[pw]:"fire-app-check-compat",[gw]:"fire-auth",[_w]:"fire-auth-compat",[yw]:"fire-rtdb",[vw]:"fire-data-connect",[Ew]:"fire-rtdb-compat",[Tw]:"fire-fn",[Iw]:"fire-fn-compat",[ww]:"fire-iid",[Aw]:"fire-iid-compat",[Rw]:"fire-fcm",[bw]:"fire-fcm-compat",[Sw]:"fire-perf",[Pw]:"fire-perf-compat",[Cw]:"fire-rc",[Nw]:"fire-rc-compat",[Ow]:"fire-gcs",[kw]:"fire-gcs-compat",[Vw]:"fire-fst",[xw]:"fire-fst-compat",[Dw]:"fire-vertex","fire-js":"fire-js",[Mw]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xo=new Map,Uw=new Map,fl=new Map;function Jf(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ur(t){const e=t.name;if(fl.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;fl.set(e,t);for(const n of Xo.values())Jf(n,t);for(const n of Uw.values())Jf(n,t);return!0}function Ma(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bw={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ir=new qi("app","Firebase",Bw);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jw{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ir.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=Lw;function tg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hl,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw ir.create("bad-app-name",{appName:String(s)});if(n||(n=Ym()),!n)throw ir.create("no-options");const i=Xo.get(s);if(i){if(Fr(n,i.options)&&Fr(r,i.config))return i;throw ir.create("duplicate-app",{appName:s})}const o=new zI(s);for(const l of fl.values())o.addComponent(l);const c=new jw(n,r,o);return Xo.set(s,c),c}function su(t=hl){const e=Xo.get(t);if(!e&&t===hl&&Ym())return tg();if(!e)throw ir.create("no-app",{appName:t});return e}function hn(t,e,n){var r;let s=(r=Fw[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(c.join(" "));return}Ur(new lr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw="firebase-heartbeat-database",$w=1,Ci="firebase-heartbeat-store";let Fc=null;function ng(){return Fc||(Fc=ow(qw,$w,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ci)}catch(n){console.warn(n)}}}}).catch(t=>{throw ir.create("idb-open",{originalErrorMessage:t.message})})),Fc}async function Hw(t){try{const n=(await ng()).transaction(Ci),r=await n.objectStore(Ci).get(rg(t));return await n.done,r}catch(e){if(e instanceof Bn)xn.warn(e.message);else{const n=ir.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xn.warn(n.message)}}}async function Yf(t,e){try{const r=(await ng()).transaction(Ci,"readwrite");await r.objectStore(Ci).put(e,rg(t)),await r.done}catch(n){if(n instanceof Bn)xn.warn(n.message);else{const r=ir.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xn.warn(r.message)}}}function rg(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=1024,Gw=30;class zw{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qw(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Xf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>Gw){const o=Jw(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){xn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Xf(),{heartbeatsToSend:r,unsentEntries:s}=Kw(this._heartbeatsCache.heartbeats),i=Yo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return xn.warn(n),""}}}function Xf(){return new Date().toISOString().substring(0,10)}function Kw(t,e=Ww){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Zf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Zf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qw{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xI()?MI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Hw(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Yf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Zf(t){return Yo(JSON.stringify({version:2,heartbeats:t})).length}function Jw(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(t){Ur(new lr("platform-logger",e=>new lw(e),"PRIVATE")),Ur(new lr("heartbeat",e=>new zw(e),"PRIVATE")),hn(ul,Qf,t),hn(ul,Qf,"esm2017"),hn("fire-js","")}Yw("");function iu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function sg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Xw=sg,ig=new qi("auth","Firebase",sg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zo=new nu("@firebase/auth");function Zw(t,...e){Zo.logLevel<=_e.WARN&&Zo.warn(`Auth (${Ns}): ${t}`,...e)}function No(t,...e){Zo.logLevel<=_e.ERROR&&Zo.error(`Auth (${Ns}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(t,...e){throw ou(t,...e)}function fn(t,...e){return ou(t,...e)}function og(t,e,n){const r=Object.assign(Object.assign({},Xw()),{[e]:n});return new qi("auth","Firebase",r).create(e,{appName:t.name})}function Nn(t){return og(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function ou(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return ig.create(t,...e)}function ie(t,e,...n){if(!t)throw ou(e,...n)}function Pn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw No(e),new Error(e)}function Mn(t,e){t||Pn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function eA(){return ed()==="http:"||ed()==="https:"}function ed(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(eA()||OI()||"connection"in navigator)?navigator.onLine:!0}function nA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Mn(n>e,"Short delay should be less than long delay!"),this.isMobile=PI()||kI()}get(){return tA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function au(t,e){Mn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],iA=new Hi(3e4,6e4);function yr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function jn(t,e,n,r,s={}){return cg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=$i(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:l},i);return NI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&Wr(t.emulatorConfig.host)&&(h.credentials="include"),ag.fetch()(await lg(t,t.config.apiHost,n,c),h)})}async function cg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rA),e);try{const s=new aA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Eo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,h]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Eo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Eo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Eo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw og(t,f,h);Zt(t,f)}}catch(s){if(s instanceof Bn)throw s;Zt(t,"network-request-failed",{message:String(s)})}}async function Wi(t,e,n,r,s={}){const i=await jn(t,e,n,r,s);return"mfaPendingCredential"in i&&Zt(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function lg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?au(t.config,s):`${t.config.apiScheme}://${s}`;return sA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function oA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class aA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(fn(this.auth,"network-request-failed")),iA.get())})}}function Eo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=fn(t,e,r);return s.customData._tokenResponse=n,s}function td(t){return t!==void 0&&t.enterprise!==void 0}class cA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return oA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function lA(t,e){return jn(t,"GET","/v2/recaptchaConfig",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uA(t,e){return jn(t,"POST","/v1/accounts:delete",e)}async function ea(t,e){return jn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _i(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function hA(t,e=!1){const n=qe(t),r=await n.getIdToken(e),s=cu(r);ie(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:_i(Uc(s.auth_time)),issuedAtTime:_i(Uc(s.iat)),expirationTime:_i(Uc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Uc(t){return Number(t)*1e3}function cu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return No("JWT malformed, contained fewer than 3 sections"),null;try{const s=Km(n);return s?JSON.parse(s):(No("Failed to decode base64 JWT payload"),null)}catch(s){return No("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function nd(t){const e=cu(t);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bn&&fA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function fA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=_i(this.lastLoginAt),this.creationTime=_i(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ta(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Is(t,ea(n,{idToken:r}));ie(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?ug(i.providerUserInfo):[],c=mA(t.providerData,o),l=t.isAnonymous,h=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?h:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new pl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function pA(t){const e=qe(t);await ta(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function mA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function ug(t){return t.map(e=>{var{providerId:n}=e,r=iu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gA(t,e){const n=await cg(t,{},async()=>{const r=$i({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await lg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Wr(t.emulatorConfig.host)&&(l.credentials="include"),ag.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function _A(t,e){return jn(t,"POST","/v2/accounts:revokeToken",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const n=nd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await gA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ps;return r&&(ie(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ps,this.toJSON())}_performRefresh(){return Pn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kn(t,e){ie(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=iu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new dA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new pl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Is(this,this.stsTokenManager.getToken(this.auth,e));return ie(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return hA(this,e)}reload(){return pA(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ta(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(Nn(this.auth));const e=await this.getIdToken();return await Is(this,uA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,h,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,y=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,N=(c=n.tenantId)!==null&&c!==void 0?c:void 0,k=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,$=(h=n.createdAt)!==null&&h!==void 0?h:void 0,U=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:j,emailVerified:H,isAnonymous:de,providerData:fe,stsTokenManager:w}=n;ie(j&&w,e,"internal-error");const v=ps.fromJSON(this.name,w);ie(typeof j=="string",e,"internal-error"),Kn(p,e.name),Kn(m,e.name),ie(typeof H=="boolean",e,"internal-error"),ie(typeof de=="boolean",e,"internal-error"),Kn(y,e.name),Kn(C,e.name),Kn(N,e.name),Kn(k,e.name),Kn($,e.name),Kn(U,e.name);const I=new Wt({uid:j,auth:e,email:m,emailVerified:H,displayName:p,isAnonymous:de,photoURL:C,phoneNumber:y,tenantId:N,stsTokenManager:v,createdAt:$,lastLoginAt:U});return fe&&Array.isArray(fe)&&(I.providerData=fe.map(A=>Object.assign({},A))),k&&(I._redirectEventId=k),I}static async _fromIdTokenResponse(e,n,r=!1){const s=new ps;s.updateFromServerResponse(n);const i=new Wt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ta(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?ug(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new ps;c.updateFromIdToken(r);const l=new Wt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new pl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,h),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd=new Map;function Cn(t){Mn(t instanceof Function,"Expected a class definition");let e=rd.get(t);return e?(Mn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,rd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}hg.type="NONE";const sd=hg;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t,e,n){return`firebase:${t}:${e}:${n}`}class ms{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Oo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Oo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ea(this.auth,{idToken:e}).catch(()=>{});return n?Wt._fromGetAccountInfoResponse(this.auth,n,e):null}return Wt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ms(Cn(sd),e,r);const s=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||Cn(sd);const o=Oo(r,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){let p;if(typeof f=="string"){const m=await ea(e,{idToken:f}).catch(()=>{});if(!m)break;p=await Wt._fromGetAccountInfoResponse(e,m,f)}else p=Wt._fromJSON(e,f);h!==i&&(c=p),i=h;break}}catch{}const l=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ms(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new ms(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(mg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(fg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(_g(e))return"Blackberry";if(yg(e))return"Webos";if(dg(e))return"Safari";if((e.includes("chrome/")||pg(e))&&!e.includes("edge/"))return"Chrome";if(gg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function fg(t=gt()){return/firefox\//i.test(t)}function dg(t=gt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function pg(t=gt()){return/crios\//i.test(t)}function mg(t=gt()){return/iemobile/i.test(t)}function gg(t=gt()){return/android/i.test(t)}function _g(t=gt()){return/blackberry/i.test(t)}function yg(t=gt()){return/webos/i.test(t)}function lu(t=gt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function yA(t=gt()){var e;return lu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function vA(){return VI()&&document.documentMode===10}function vg(t=gt()){return lu(t)||gg(t)||yg(t)||_g(t)||/windows phone/i.test(t)||mg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eg(t,e=[]){let n;switch(t){case"Browser":n=id(gt());break;case"Worker":n=`${id(gt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ns}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TA(t,e={}){return jn(t,"GET","/v2/passwordPolicy",yr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IA=6;class wA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:IA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new od(this),this.idTokenSubscription=new od(this),this.beforeStateQueue=new EA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ig,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Cn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ms.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ea(this,{idToken:e}),r=await Wt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ta(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(Nn(this));const n=e?qe(e):null;return n&&ie(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(Nn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(Nn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Cn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await TA(this),n=new wA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await _A(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Cn(e)||this._popupRedirectResolver;ie(n,this,"argument-error"),this.redirectPersistenceManager=await ms.create(this,[Cn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Eg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Ot(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Zw(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Gr(t){return qe(t)}class od{constructor(e){this.auth=e,this.observer=null,this.addObserver=jI(n=>this.observer=n)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let La={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function RA(t){La=t}function Tg(t){return La.loadJS(t)}function bA(){return La.recaptchaEnterpriseScript}function SA(){return La.gapiScript}function PA(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class CA{constructor(){this.enterprise=new NA}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class NA{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const OA="recaptcha-enterprise",Ig="NO_RECAPTCHA";class kA{constructor(e){this.type=OA,this.auth=Gr(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{lA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new cA(l);return i.tenantId==null?i._agentRecaptchaConfig=h:i._tenantRecaptchaConfigs[i.tenantId]=h,o(h.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;td(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(h=>{o(h)}).catch(()=>{o(Ig)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new CA().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&td(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=bA();l.length!==0&&(l+=c),Tg(l).then(()=>{s(c,i,o)}).catch(h=>{o(h)})}}).catch(c=>{o(c)})})}}async function ad(t,e,n,r=!1,s=!1){const i=new kA(t);let o;if(s)o=Ig;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,h=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function ml(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await ad(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await ad(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(t,e){const n=Ma(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Fr(i,e??{}))return s;Zt(s,"already-initialized")}return n.initialize({options:e})}function DA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Cn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function xA(t,e,n){const r=Gr(t);ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=wg(e),{host:o,port:c}=MA(e),l=c===null?"":`:${c}`,h={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ie(Fr(h,r.config.emulator)&&Fr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Wr(o)?(eu(`${i}//${o}${l}`),tu("Auth",!0)):LA()}function wg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function MA(t){const e=wg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:cd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:cd(o)}}}function cd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function LA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Pn("not implemented")}_getIdTokenResponse(e){return Pn("not implemented")}_linkToIdToken(e,n){return Pn("not implemented")}_getReauthenticationResolver(e){return Pn("not implemented")}}async function FA(t,e){return jn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function UA(t,e){return Wi(t,"POST","/v1/accounts:signInWithPassword",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BA(t,e){return Wi(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))}async function jA(t,e){return Wi(t,"POST","/v1/accounts:signInWithEmailLink",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends uu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Ni(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ni(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ml(e,n,"signInWithPassword",UA);case"emailLink":return BA(e,{email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return ml(e,r,"signUpPassword",FA);case"emailLink":return jA(e,{idToken:n,email:this._email,oobCode:this._password});default:Zt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gs(t,e){return Wi(t,"POST","/v1/accounts:signInWithIdp",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA="http://localhost";class Br extends uu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Br(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Zt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=iu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Br(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return gs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,gs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,gs(e,n)}buildRequest(){const e={requestUri:qA,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=$i(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $A(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function HA(t){const e=ni(ri(t)).link,n=e?ni(ri(e)).deep_link_id:null,r=ni(ri(t)).deep_link_id;return(r?ni(ri(r)).link:null)||r||n||e||t}class hu{constructor(e){var n,r,s,i,o,c;const l=ni(ri(e)),h=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=$A((s=l.mode)!==null&&s!==void 0?s:null);ie(h&&f&&p,"argument-error"),this.apiKey=h,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=HA(e);try{return new hu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Os{constructor(){this.providerId=Os.PROVIDER_ID}static credential(e,n){return Ni._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=hu.parseLink(n);return ie(r,"argument-error"),Ni._fromEmailAndCode(e,r.code,r.tenantId)}}Os.PROVIDER_ID="password";Os.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Os.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends Ag{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn extends Gi{constructor(){super("facebook.com")}static credential(e){return Br._fromParams({providerId:Zn.PROVIDER_ID,signInMethod:Zn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Zn.credentialFromTaggedObject(e)}static credentialFromError(e){return Zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Zn.credential(e.oauthAccessToken)}catch{return null}}}Zn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Zn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er extends Gi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Br._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return er.credential(n,r)}catch{return null}}}er.GOOGLE_SIGN_IN_METHOD="google.com";er.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr extends Gi{constructor(){super("github.com")}static credential(e){return Br._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr extends Gi{constructor(){super("twitter.com")}static credential(e,n){return Br._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return nr.credential(n,r)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(t,e){return Wi(t,"POST","/v1/accounts:signUp",yr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Wt._fromIdTokenResponse(e,r,s),o=ld(r);return new jr({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ld(r);return new jr({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ld(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na extends Bn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,na.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new na(e,n,r,s)}}function Rg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?na._fromErrorAndOperation(t,i,e,r):i})}async function GA(t,e,n=!1){const r=await Is(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return jr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zA(t,e,n=!1){const{auth:r}=t;if(Ot(r.app))return Promise.reject(Nn(r));const s="reauthenticate";try{const i=await Is(t,Rg(r,s,e,t),n);ie(i.idToken,r,"internal-error");const o=cu(i.idToken);ie(o,r,"internal-error");const{sub:c}=o;return ie(t.uid===c,r,"user-mismatch"),jr._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Zt(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bg(t,e,n=!1){if(Ot(t.app))return Promise.reject(Nn(t));const r="signIn",s=await Rg(t,r,e),i=await jr._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function KA(t,e){return bg(Gr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sg(t){const e=Gr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function QA(t,e,n){if(Ot(t.app))return Promise.reject(Nn(t));const r=Gr(t),o=await ml(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",WA).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Sg(t),l}),c=await jr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function JA(t,e,n){return Ot(t.app)?Promise.reject(Nn(t)):KA(qe(t),Os.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Sg(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YA(t,e){return jn(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function XA(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=qe(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Is(r,YA(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function ZA(t,e,n,r){return qe(t).onIdTokenChanged(e,n,r)}function e0(t,e,n){return qe(t).beforeAuthStateChanged(e,n)}function t0(t,e,n,r){return qe(t).onAuthStateChanged(e,n,r)}function n0(t){return qe(t).signOut()}const ra="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ra,"1"),this.storage.removeItem(ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r0=1e3,s0=10;class Cg extends Pg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=vg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);vA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,s0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},r0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Cg.type="LOCAL";const i0=Cg;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng extends Pg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Ng.type="SESSION";const Og=Ng;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Fa(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async h=>h(n.origin,i)),l=await o0(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fa.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const h=fu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(){return window}function c0(t){dn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kg(){return typeof dn().WorkerGlobalScope<"u"&&typeof dn().importScripts=="function"}async function l0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function u0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function h0(){return kg()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vg="firebaseLocalStorageDb",f0=1,sa="firebaseLocalStorage",Dg="fbase_key";class zi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ua(t,e){return t.transaction([sa],e?"readwrite":"readonly").objectStore(sa)}function d0(){const t=indexedDB.deleteDatabase(Vg);return new zi(t).toPromise()}function gl(){const t=indexedDB.open(Vg,f0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(sa,{keyPath:Dg})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(sa)?e(r):(r.close(),await d0(),e(await gl()))})})}async function ud(t,e,n){const r=Ua(t,!0).put({[Dg]:e,value:n});return new zi(r).toPromise()}async function p0(t,e){const n=Ua(t,!1).get(e),r=await new zi(n).toPromise();return r===void 0?null:r.value}function hd(t,e){const n=Ua(t,!0).delete(e);return new zi(n).toPromise()}const m0=800,g0=3;class xg{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>g0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kg()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fa._getInstance(h0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await l0(),!this.activeServiceWorker)return;this.sender=new a0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||u0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gl();return await ud(e,ra,"1"),await hd(e,ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ud(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>p0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>hd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ua(s,!1).getAll();return new zi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),m0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xg.type="LOCAL";const _0=xg;new Hi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y0(t,e){return e?Cn(e):(ie(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du extends uu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return gs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return gs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return gs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function v0(t){return bg(t.auth,new du(t),t.bypassAuthState)}function E0(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),zA(n,new du(t),t.bypassAuthState)}async function T0(t){const{auth:e,user:n}=t;return ie(n,e,"internal-error"),GA(n,new du(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mg{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return v0;case"linkViaPopup":case"linkViaRedirect":return T0;case"reauthViaPopup":case"reauthViaRedirect":return E0;default:Zt(this.auth,"internal-error")}}resolve(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Mn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I0=new Hi(2e3,1e4);class as extends Mg{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,as.currentPopupAction&&as.currentPopupAction.cancel(),as.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){Mn(this.filter.length===1,"Popup operations only handle one event");const e=fu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(fn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(fn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,as.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(fn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,I0.get())};e()}}as.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0="pendingRedirect",ko=new Map;class A0 extends Mg{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ko.get(this.auth._key());if(!e){try{const r=await R0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ko.set(this.auth._key(),e)}return this.bypassAuthState||ko.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function R0(t,e){const n=P0(e),r=S0(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function b0(t,e){ko.set(t._key(),e)}function S0(t){return Cn(t._redirectPersistence)}function P0(t){return Oo(w0,t.config.apiKey,t.name)}async function C0(t,e,n=!1){if(Ot(t.app))return Promise.reject(Nn(t));const r=Gr(t),s=y0(r,e),o=await new A0(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N0=600*1e3;class O0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!k0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Lg(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(fn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=N0&&this.cachedEventUids.clear(),this.cachedEventUids.has(fd(e))}saveEventToCache(e){this.cachedEventUids.add(fd(e)),this.lastProcessedEventTime=Date.now()}}function fd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Lg({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function k0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Lg(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V0(t,e={}){return jn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,x0=/^https?/;async function M0(t){if(t.config.emulator)return;const{authorizedDomains:e}=await V0(t);for(const n of e)try{if(L0(n))return}catch{}Zt(t,"unauthorized-domain")}function L0(t){const e=dl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!x0.test(n))return!1;if(D0.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=new Hi(3e4,6e4);function dd(){const t=dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function U0(t){return new Promise((e,n)=>{var r,s,i;function o(){dd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dd(),n(fn(t,"network-request-failed"))},timeout:F0.get()})}if(!((s=(r=dn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=dn().gapi)===null||i===void 0)&&i.load)o();else{const c=PA("iframefcb");return dn()[c]=()=>{gapi.load?o():n(fn(t,"network-request-failed"))},Tg(`${SA()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Vo=null,e})}let Vo=null;function B0(t){return Vo=Vo||U0(t),Vo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j0=new Hi(5e3,15e3),q0="__/auth/iframe",$0="emulator/auth/iframe",H0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},W0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function G0(t){const e=t.config;ie(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?au(e,$0):`https://${t.config.authDomain}/${q0}`,r={apiKey:e.apiKey,appName:t.name,v:Ns},s=W0.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${$i(r).slice(1)}`}async function z0(t){const e=await B0(t),n=dn().gapi;return ie(n,t,"internal-error"),e.open({where:document.body,url:G0(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:H0,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=fn(t,"network-request-failed"),c=dn().setTimeout(()=>{i(o)},j0.get());function l(){dn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Q0=500,J0=600,Y0="_blank",X0="http://localhost";class pd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Z0(t,e,n,r=Q0,s=J0){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},K0),{width:r.toString(),height:s.toString(),top:i,left:o}),h=gt().toLowerCase();n&&(c=pg(h)?Y0:n),fg(h)&&(e=e||X0,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[y,C])=>`${m}${y}=${C},`,"");if(yA(h)&&c!=="_self")return eR(e||"",c),new pd(null);const p=window.open(e||"",c,f);ie(p,t,"popup-blocked");try{p.focus()}catch{}return new pd(p)}function eR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tR="__/auth/handler",nR="emulator/auth/handler",rR=encodeURIComponent("fac");async function md(t,e,n,r,s,i){ie(t.config.authDomain,t,"auth-domain-config-required"),ie(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ns,eventId:s};if(e instanceof Ag){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",BI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof Gi){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),h=l?`#${rR}=${encodeURIComponent(l)}`:"";return`${sR(t)}?${$i(c).slice(1)}${h}`}function sR({config:t}){return t.emulator?au(t,nR):`https://${t.authDomain}/${tR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="webStorageSupport";class iR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Og,this._completeRedirectFn=C0,this._overrideRedirectResult=b0}async _openPopup(e,n,r,s){var i;Mn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await md(e,n,r,dl(),s);return Z0(e,o,fu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await md(e,n,r,dl(),s);return c0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Mn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await z0(e),r=new O0(e);return n.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Bc,{type:Bc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Bc];o!==void 0&&n(!!o),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=M0(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return vg()||dg()||lu()}}const oR=iR;var gd="@firebase/auth",_d="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function lR(t){Ur(new lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ie(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Eg(t)},h=new AA(r,s,i,l);return DA(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Ur(new lr("auth-internal",e=>{const n=Gr(e.getProvider("auth").getImmediate());return(r=>new aR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),hn(gd,_d,cR(t)),hn(gd,_d,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uR=300,hR=Xm("authIdTokenMaxAge")||uR;let yd=null;const fR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>hR)return;const s=n==null?void 0:n.token;yd!==s&&(yd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function dR(t=su()){const e=Ma(t,"auth");if(e.isInitialized())return e.getImmediate();const n=VA(t,{popupRedirectResolver:oR,persistence:[_0,i0,Og]}),r=Xm("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=fR(i.toString());e0(n,o,()=>o(n.currentUser)),ZA(n,c=>o(c))}}const s=Qm("auth");return s&&xA(n,`http://${s}`),n}function pR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}RA({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=fn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",pR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});lR("Browser");var mR="firebase",gR="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */hn(mR,gR,"app");var vd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var or,Fg;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,v){function I(){}I.prototype=v.prototype,w.D=v.prototype,w.prototype=new I,w.prototype.constructor=w,w.C=function(A,R,S){for(var E=Array(arguments.length-2),_t=2;_t<arguments.length;_t++)E[_t-2]=arguments[_t];return v.prototype[R].apply(A,E)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,v,I){I||(I=0);var A=Array(16);if(typeof v=="string")for(var R=0;16>R;++R)A[R]=v.charCodeAt(I++)|v.charCodeAt(I++)<<8|v.charCodeAt(I++)<<16|v.charCodeAt(I++)<<24;else for(R=0;16>R;++R)A[R]=v[I++]|v[I++]<<8|v[I++]<<16|v[I++]<<24;v=w.g[0],I=w.g[1],R=w.g[2];var S=w.g[3],E=v+(S^I&(R^S))+A[0]+3614090360&4294967295;v=I+(E<<7&4294967295|E>>>25),E=S+(R^v&(I^R))+A[1]+3905402710&4294967295,S=v+(E<<12&4294967295|E>>>20),E=R+(I^S&(v^I))+A[2]+606105819&4294967295,R=S+(E<<17&4294967295|E>>>15),E=I+(v^R&(S^v))+A[3]+3250441966&4294967295,I=R+(E<<22&4294967295|E>>>10),E=v+(S^I&(R^S))+A[4]+4118548399&4294967295,v=I+(E<<7&4294967295|E>>>25),E=S+(R^v&(I^R))+A[5]+1200080426&4294967295,S=v+(E<<12&4294967295|E>>>20),E=R+(I^S&(v^I))+A[6]+2821735955&4294967295,R=S+(E<<17&4294967295|E>>>15),E=I+(v^R&(S^v))+A[7]+4249261313&4294967295,I=R+(E<<22&4294967295|E>>>10),E=v+(S^I&(R^S))+A[8]+1770035416&4294967295,v=I+(E<<7&4294967295|E>>>25),E=S+(R^v&(I^R))+A[9]+2336552879&4294967295,S=v+(E<<12&4294967295|E>>>20),E=R+(I^S&(v^I))+A[10]+4294925233&4294967295,R=S+(E<<17&4294967295|E>>>15),E=I+(v^R&(S^v))+A[11]+2304563134&4294967295,I=R+(E<<22&4294967295|E>>>10),E=v+(S^I&(R^S))+A[12]+1804603682&4294967295,v=I+(E<<7&4294967295|E>>>25),E=S+(R^v&(I^R))+A[13]+4254626195&4294967295,S=v+(E<<12&4294967295|E>>>20),E=R+(I^S&(v^I))+A[14]+2792965006&4294967295,R=S+(E<<17&4294967295|E>>>15),E=I+(v^R&(S^v))+A[15]+1236535329&4294967295,I=R+(E<<22&4294967295|E>>>10),E=v+(R^S&(I^R))+A[1]+4129170786&4294967295,v=I+(E<<5&4294967295|E>>>27),E=S+(I^R&(v^I))+A[6]+3225465664&4294967295,S=v+(E<<9&4294967295|E>>>23),E=R+(v^I&(S^v))+A[11]+643717713&4294967295,R=S+(E<<14&4294967295|E>>>18),E=I+(S^v&(R^S))+A[0]+3921069994&4294967295,I=R+(E<<20&4294967295|E>>>12),E=v+(R^S&(I^R))+A[5]+3593408605&4294967295,v=I+(E<<5&4294967295|E>>>27),E=S+(I^R&(v^I))+A[10]+38016083&4294967295,S=v+(E<<9&4294967295|E>>>23),E=R+(v^I&(S^v))+A[15]+3634488961&4294967295,R=S+(E<<14&4294967295|E>>>18),E=I+(S^v&(R^S))+A[4]+3889429448&4294967295,I=R+(E<<20&4294967295|E>>>12),E=v+(R^S&(I^R))+A[9]+568446438&4294967295,v=I+(E<<5&4294967295|E>>>27),E=S+(I^R&(v^I))+A[14]+3275163606&4294967295,S=v+(E<<9&4294967295|E>>>23),E=R+(v^I&(S^v))+A[3]+4107603335&4294967295,R=S+(E<<14&4294967295|E>>>18),E=I+(S^v&(R^S))+A[8]+1163531501&4294967295,I=R+(E<<20&4294967295|E>>>12),E=v+(R^S&(I^R))+A[13]+2850285829&4294967295,v=I+(E<<5&4294967295|E>>>27),E=S+(I^R&(v^I))+A[2]+4243563512&4294967295,S=v+(E<<9&4294967295|E>>>23),E=R+(v^I&(S^v))+A[7]+1735328473&4294967295,R=S+(E<<14&4294967295|E>>>18),E=I+(S^v&(R^S))+A[12]+2368359562&4294967295,I=R+(E<<20&4294967295|E>>>12),E=v+(I^R^S)+A[5]+4294588738&4294967295,v=I+(E<<4&4294967295|E>>>28),E=S+(v^I^R)+A[8]+2272392833&4294967295,S=v+(E<<11&4294967295|E>>>21),E=R+(S^v^I)+A[11]+1839030562&4294967295,R=S+(E<<16&4294967295|E>>>16),E=I+(R^S^v)+A[14]+4259657740&4294967295,I=R+(E<<23&4294967295|E>>>9),E=v+(I^R^S)+A[1]+2763975236&4294967295,v=I+(E<<4&4294967295|E>>>28),E=S+(v^I^R)+A[4]+1272893353&4294967295,S=v+(E<<11&4294967295|E>>>21),E=R+(S^v^I)+A[7]+4139469664&4294967295,R=S+(E<<16&4294967295|E>>>16),E=I+(R^S^v)+A[10]+3200236656&4294967295,I=R+(E<<23&4294967295|E>>>9),E=v+(I^R^S)+A[13]+681279174&4294967295,v=I+(E<<4&4294967295|E>>>28),E=S+(v^I^R)+A[0]+3936430074&4294967295,S=v+(E<<11&4294967295|E>>>21),E=R+(S^v^I)+A[3]+3572445317&4294967295,R=S+(E<<16&4294967295|E>>>16),E=I+(R^S^v)+A[6]+76029189&4294967295,I=R+(E<<23&4294967295|E>>>9),E=v+(I^R^S)+A[9]+3654602809&4294967295,v=I+(E<<4&4294967295|E>>>28),E=S+(v^I^R)+A[12]+3873151461&4294967295,S=v+(E<<11&4294967295|E>>>21),E=R+(S^v^I)+A[15]+530742520&4294967295,R=S+(E<<16&4294967295|E>>>16),E=I+(R^S^v)+A[2]+3299628645&4294967295,I=R+(E<<23&4294967295|E>>>9),E=v+(R^(I|~S))+A[0]+4096336452&4294967295,v=I+(E<<6&4294967295|E>>>26),E=S+(I^(v|~R))+A[7]+1126891415&4294967295,S=v+(E<<10&4294967295|E>>>22),E=R+(v^(S|~I))+A[14]+2878612391&4294967295,R=S+(E<<15&4294967295|E>>>17),E=I+(S^(R|~v))+A[5]+4237533241&4294967295,I=R+(E<<21&4294967295|E>>>11),E=v+(R^(I|~S))+A[12]+1700485571&4294967295,v=I+(E<<6&4294967295|E>>>26),E=S+(I^(v|~R))+A[3]+2399980690&4294967295,S=v+(E<<10&4294967295|E>>>22),E=R+(v^(S|~I))+A[10]+4293915773&4294967295,R=S+(E<<15&4294967295|E>>>17),E=I+(S^(R|~v))+A[1]+2240044497&4294967295,I=R+(E<<21&4294967295|E>>>11),E=v+(R^(I|~S))+A[8]+1873313359&4294967295,v=I+(E<<6&4294967295|E>>>26),E=S+(I^(v|~R))+A[15]+4264355552&4294967295,S=v+(E<<10&4294967295|E>>>22),E=R+(v^(S|~I))+A[6]+2734768916&4294967295,R=S+(E<<15&4294967295|E>>>17),E=I+(S^(R|~v))+A[13]+1309151649&4294967295,I=R+(E<<21&4294967295|E>>>11),E=v+(R^(I|~S))+A[4]+4149444226&4294967295,v=I+(E<<6&4294967295|E>>>26),E=S+(I^(v|~R))+A[11]+3174756917&4294967295,S=v+(E<<10&4294967295|E>>>22),E=R+(v^(S|~I))+A[2]+718787259&4294967295,R=S+(E<<15&4294967295|E>>>17),E=I+(S^(R|~v))+A[9]+3951481745&4294967295,w.g[0]=w.g[0]+v&4294967295,w.g[1]=w.g[1]+(R+(E<<21&4294967295|E>>>11))&4294967295,w.g[2]=w.g[2]+R&4294967295,w.g[3]=w.g[3]+S&4294967295}r.prototype.u=function(w,v){v===void 0&&(v=w.length);for(var I=v-this.blockSize,A=this.B,R=this.h,S=0;S<v;){if(R==0)for(;S<=I;)s(this,w,S),S+=this.blockSize;if(typeof w=="string"){for(;S<v;)if(A[R++]=w.charCodeAt(S++),R==this.blockSize){s(this,A),R=0;break}}else for(;S<v;)if(A[R++]=w[S++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=v},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var v=1;v<w.length-8;++v)w[v]=0;var I=8*this.o;for(v=w.length-8;v<w.length;++v)w[v]=I&255,I/=256;for(this.u(w),w=Array(16),v=I=0;4>v;++v)for(var A=0;32>A;A+=8)w[I++]=this.g[v]>>>A&255;return w};function i(w,v){var I=c;return Object.prototype.hasOwnProperty.call(I,w)?I[w]:I[w]=v(w)}function o(w,v){this.h=v;for(var I=[],A=!0,R=w.length-1;0<=R;R--){var S=w[R]|0;A&&S==v||(I[R]=S,A=!1)}this.g=I}var c={};function l(w){return-128<=w&&128>w?i(w,function(v){return new o([v|0],0>v?-1:0)}):new o([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return p;if(0>w)return k(h(-w));for(var v=[],I=1,A=0;w>=I;A++)v[A]=w/I|0,I*=4294967296;return new o(v,0)}function f(w,v){if(w.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(w.charAt(0)=="-")return k(f(w.substring(1),v));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=h(Math.pow(v,8)),A=p,R=0;R<w.length;R+=8){var S=Math.min(8,w.length-R),E=parseInt(w.substring(R,R+S),v);8>S?(S=h(Math.pow(v,S)),A=A.j(S).add(h(E))):(A=A.j(I),A=A.add(h(E)))}return A}var p=l(0),m=l(1),y=l(16777216);t=o.prototype,t.m=function(){if(N(this))return-k(this).m();for(var w=0,v=1,I=0;I<this.g.length;I++){var A=this.i(I);w+=(0<=A?A:4294967296+A)*v,v*=4294967296}return w},t.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(C(this))return"0";if(N(this))return"-"+k(this).toString(w);for(var v=h(Math.pow(w,6)),I=this,A="";;){var R=H(I,v).g;I=$(I,R.j(v));var S=((0<I.g.length?I.g[0]:I.h)>>>0).toString(w);if(I=R,C(I))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},t.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function C(w){if(w.h!=0)return!1;for(var v=0;v<w.g.length;v++)if(w.g[v]!=0)return!1;return!0}function N(w){return w.h==-1}t.l=function(w){return w=$(this,w),N(w)?-1:C(w)?0:1};function k(w){for(var v=w.g.length,I=[],A=0;A<v;A++)I[A]=~w.g[A];return new o(I,~w.h).add(m)}t.abs=function(){return N(this)?k(this):this},t.add=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0,R=0;R<=v;R++){var S=A+(this.i(R)&65535)+(w.i(R)&65535),E=(S>>>16)+(this.i(R)>>>16)+(w.i(R)>>>16);A=E>>>16,S&=65535,E&=65535,I[R]=E<<16|S}return new o(I,I[I.length-1]&-2147483648?-1:0)};function $(w,v){return w.add(k(v))}t.j=function(w){if(C(this)||C(w))return p;if(N(this))return N(w)?k(this).j(k(w)):k(k(this).j(w));if(N(w))return k(this.j(k(w)));if(0>this.l(y)&&0>w.l(y))return h(this.m()*w.m());for(var v=this.g.length+w.g.length,I=[],A=0;A<2*v;A++)I[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<w.g.length;R++){var S=this.i(A)>>>16,E=this.i(A)&65535,_t=w.i(R)>>>16,xt=w.i(R)&65535;I[2*A+2*R]+=E*xt,U(I,2*A+2*R),I[2*A+2*R+1]+=S*xt,U(I,2*A+2*R+1),I[2*A+2*R+1]+=E*_t,U(I,2*A+2*R+1),I[2*A+2*R+2]+=S*_t,U(I,2*A+2*R+2)}for(A=0;A<v;A++)I[A]=I[2*A+1]<<16|I[2*A];for(A=v;A<2*v;A++)I[A]=0;return new o(I,0)};function U(w,v){for(;(w[v]&65535)!=w[v];)w[v+1]+=w[v]>>>16,w[v]&=65535,v++}function j(w,v){this.g=w,this.h=v}function H(w,v){if(C(v))throw Error("division by zero");if(C(w))return new j(p,p);if(N(w))return v=H(k(w),v),new j(k(v.g),k(v.h));if(N(v))return v=H(w,k(v)),new j(k(v.g),v.h);if(30<w.g.length){if(N(w)||N(v))throw Error("slowDivide_ only works with positive integers.");for(var I=m,A=v;0>=A.l(w);)I=de(I),A=de(A);var R=fe(I,1),S=fe(A,1);for(A=fe(A,2),I=fe(I,2);!C(A);){var E=S.add(A);0>=E.l(w)&&(R=R.add(I),S=E),A=fe(A,1),I=fe(I,1)}return v=$(w,R.j(v)),new j(R,v)}for(R=p;0<=w.l(v);){for(I=Math.max(1,Math.floor(w.m()/v.m())),A=Math.ceil(Math.log(I)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=h(I),E=S.j(v);N(E)||0<E.l(w);)I-=A,S=h(I),E=S.j(v);C(S)&&(S=m),R=R.add(S),w=$(w,E)}return new j(R,w)}t.A=function(w){return H(this,w).h},t.and=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)&w.i(A);return new o(I,this.h&w.h)},t.or=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)|w.i(A);return new o(I,this.h|w.h)},t.xor=function(w){for(var v=Math.max(this.g.length,w.g.length),I=[],A=0;A<v;A++)I[A]=this.i(A)^w.i(A);return new o(I,this.h^w.h)};function de(w){for(var v=w.g.length+1,I=[],A=0;A<v;A++)I[A]=w.i(A)<<1|w.i(A-1)>>>31;return new o(I,w.h)}function fe(w,v){var I=v>>5;v%=32;for(var A=w.g.length-I,R=[],S=0;S<A;S++)R[S]=0<v?w.i(S+I)>>>v|w.i(S+I+1)<<32-v:w.i(S+I);return new o(R,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Fg=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,or=o}).apply(typeof vd<"u"?vd:typeof self<"u"?self:typeof window<"u"?window:{});var To=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ug,si,Bg,Do,_l,jg,qg,$g;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,u,d){return a==Array.prototype||a==Object.prototype||(a[u]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof To=="object"&&To];for(var u=0;u<a.length;++u){var d=a[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,u){if(u)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],u=u(g),u!=g&&u!=null&&e(d,a,{configurable:!0,writable:!0,value:u})}}function i(a,u){a instanceof String&&(a+="");var d=0,g=!1,P={next:function(){if(!g&&d<a.length){var O=d++;return{value:u(O,a[O]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(u,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var u=typeof a;return u=u!="object"?u:a?Array.isArray(a)?"array":u:"null",u=="array"||u=="object"&&typeof a.length=="number"}function h(a){var u=typeof a;return u=="object"&&a!=null||u=="function"}function f(a,u,d){return a.call.apply(a.bind,arguments)}function p(a,u,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(u,P)}}return function(){return a.apply(u,arguments)}}function m(a,u,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function y(a,u){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,u){function d(){}d.prototype=u.prototype,a.aa=u.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,P,O){for(var G=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)G[Pe-2]=arguments[Pe];return u.prototype[P].apply(g,G)}}function N(a){const u=a.length;if(0<u){const d=Array(u);for(let g=0;g<u;g++)d[g]=a[g];return d}return[]}function k(a,u){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const P=a.length||0,O=g.length||0;a.length=P+O;for(let G=0;G<O;G++)a[P+G]=g[G]}else a.push(g)}}class ${constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function U(a){return/^[\s\xa0]*$/.test(a)}function j(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function H(a){return H[" "](a),a}H[" "]=function(){};var de=j().indexOf("Gecko")!=-1&&!(j().toLowerCase().indexOf("webkit")!=-1&&j().indexOf("Edge")==-1)&&!(j().indexOf("Trident")!=-1||j().indexOf("MSIE")!=-1)&&j().indexOf("Edge")==-1;function fe(a,u,d){for(const g in a)u.call(d,a[g],g,a)}function w(a,u){for(const d in a)u.call(void 0,a[d],d,a)}function v(a){const u={};for(const d in a)u[d]=a[d];return u}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,u){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let O=0;O<I.length;O++)d=I[O],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function R(a){var u=1;a=a.split(":");const d=[];for(;0<u&&a.length;)d.push(a.shift()),u--;return a.length&&d.push(a.join(":")),d}function S(a){c.setTimeout(()=>{throw a},0)}function E(){var a=St;let u=null;return a.g&&(u=a.g,a.g=a.g.next,a.g||(a.h=null),u.next=null),u}class _t{constructor(){this.h=this.g=null}add(u,d){const g=xt.get();g.set(u,d),this.h?this.h.next=g:this.g=g,this.h=g}}var xt=new $(()=>new We,a=>a.reset());class We{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let ve,ge=!1,St=new _t,$t=()=>{const a=c.Promise.resolve(void 0);ve=()=>{a.then(Mt)}};var Mt=()=>{for(var a;a=E();){try{a.h.call(a.g)}catch(d){S(d)}var u=xt;u.j(a),100>u.h&&(u.h++,a.next=u.g,u.g=a)}ge=!1};function xe(){this.s=this.s,this.C=this.C}xe.prototype.s=!1,xe.prototype.ma=function(){this.s||(this.s=!0,this.N())},xe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Me(a,u){this.type=a,this.g=this.target=u,this.defaultPrevented=!1}Me.prototype.h=function(){this.defaultPrevented=!0};var qn=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,u=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,u),c.removeEventListener("test",d,u)}catch{}return a})();function Pt(a,u){if(Me.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=u,u=a.relatedTarget){if(de){e:{try{H(u.nodeName);var P=!0;break e}catch{}P=!1}P||(u=null)}}else d=="mouseover"?u=a.fromElement:d=="mouseout"&&(u=a.toElement);this.relatedTarget=u,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:wt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Pt.aa.h.call(this)}}C(Pt,Me);var wt={2:"touch",3:"pen",4:"mouse"};Pt.prototype.h=function(){Pt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),X=0;function K(a,u,d,g,P){this.listener=a,this.proxy=null,this.src=u,this.type=d,this.capture=!!g,this.ha=P,this.key=++X,this.da=this.fa=!1}function Z(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function pe(a){this.src=a,this.g={},this.h=0}pe.prototype.add=function(a,u,d,g,P){var O=a.toString();a=this.g[O],a||(a=this.g[O]=[],this.h++);var G=T(a,u,g,P);return-1<G?(u=a[G],d||(u.fa=!1)):(u=new K(u,this.src,O,!!g,P),u.fa=d,a.push(u)),u};function _(a,u){var d=u.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,u,void 0),O;(O=0<=P)&&Array.prototype.splice.call(g,P,1),O&&(Z(u),a.g[d].length==0&&(delete a.g[d],a.h--))}}function T(a,u,d,g){for(var P=0;P<a.length;++P){var O=a[P];if(!O.da&&O.listener==u&&O.capture==!!d&&O.ha==g)return P}return-1}var b="closure_lm_"+(1e6*Math.random()|0),V={};function F(a,u,d,g,P){if(Array.isArray(u)){for(var O=0;O<u.length;O++)F(a,u[O],d,g,P);return null}return d=se(d),a&&a[M]?a.K(u,d,h(g)?!!g.capture:!1,P):D(a,u,d,!1,g,P)}function D(a,u,d,g,P,O){if(!u)throw Error("Invalid event type");var G=h(P)?!!P.capture:!!P,Pe=Q(a);if(Pe||(a[b]=Pe=new pe(a)),d=Pe.add(u,d,g,G,O),d.proxy)return d;if(g=z(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)qn||(P=G),P===void 0&&(P=!1),a.addEventListener(u.toString(),g,P);else if(a.attachEvent)a.attachEvent(B(u.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function z(){function a(d){return u.call(a.src,a.listener,d)}const u=ne;return a}function W(a,u,d,g,P){if(Array.isArray(u))for(var O=0;O<u.length;O++)W(a,u[O],d,g,P);else g=h(g)?!!g.capture:!!g,d=se(d),a&&a[M]?(a=a.i,u=String(u).toString(),u in a.g&&(O=a.g[u],d=T(O,d,g,P),-1<d&&(Z(O[d]),Array.prototype.splice.call(O,d,1),O.length==0&&(delete a.g[u],a.h--)))):a&&(a=Q(a))&&(u=a.g[u.toString()],a=-1,u&&(a=T(u,d,g,P)),(d=-1<a?u[a]:null)&&q(d))}function q(a){if(typeof a!="number"&&a&&!a.da){var u=a.src;if(u&&u[M])_(u.i,a);else{var d=a.type,g=a.proxy;u.removeEventListener?u.removeEventListener(d,g,a.capture):u.detachEvent?u.detachEvent(B(d),g):u.addListener&&u.removeListener&&u.removeListener(g),(d=Q(u))?(_(d,a),d.h==0&&(d.src=null,u[b]=null)):Z(a)}}}function B(a){return a in V?V[a]:V[a]="on"+a}function ne(a,u){if(a.da)a=!0;else{u=new Pt(u,this);var d=a.listener,g=a.ha||a.src;a.fa&&q(a),a=d.call(g,u)}return a}function Q(a){return a=a[b],a instanceof pe?a:null}var ee="__closure_events_fn_"+(1e9*Math.random()>>>0);function se(a){return typeof a=="function"?a:(a[ee]||(a[ee]=function(u){return a.handleEvent(u)}),a[ee])}function re(){xe.call(this),this.i=new pe(this),this.M=this,this.F=null}C(re,xe),re.prototype[M]=!0,re.prototype.removeEventListener=function(a,u,d,g){W(this,a,u,d,g)};function ue(a,u){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=u.type||u,typeof u=="string")u=new Me(u,a);else if(u instanceof Me)u.target=u.target||a;else{var P=u;u=new Me(g,a),A(u,P)}if(P=!0,d)for(var O=d.length-1;0<=O;O--){var G=u.g=d[O];P=Te(G,g,!0,u)&&P}if(G=u.g=a,P=Te(G,g,!0,u)&&P,P=Te(G,g,!1,u)&&P,d)for(O=0;O<d.length;O++)G=u.g=d[O],P=Te(G,g,!1,u)&&P}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var a=this.i,u;for(u in a.g){for(var d=a.g[u],g=0;g<d.length;g++)Z(d[g]);delete a.g[u],a.h--}}this.F=null},re.prototype.K=function(a,u,d,g){return this.i.add(String(a),u,!1,d,g)},re.prototype.L=function(a,u,d,g){return this.i.add(String(a),u,!0,d,g)};function Te(a,u,d,g){if(u=a.i.g[String(u)],!u)return!0;u=u.concat();for(var P=!0,O=0;O<u.length;++O){var G=u[O];if(G&&!G.da&&G.capture==d){var Pe=G.listener,tt=G.ha||G.src;G.fa&&_(a.i,G),P=Pe.call(tt,g)!==!1&&P}}return P&&!g.defaultPrevented}function Le(a,u,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:c.setTimeout(a,u||0)}function Ge(a){a.g=Le(()=>{a.g=null,a.i&&(a.i=!1,Ge(a))},a.l);const u=a.h;a.h=null,a.m.apply(null,u)}class Lt extends xe{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ge(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function at(a){xe.call(this),this.h=a,this.g={}}C(at,xe);var $n=[];function Ls(a){fe(a.g,function(u,d){this.g.hasOwnProperty(d)&&q(u)},a),a.g={}}at.prototype.N=function(){at.aa.N.call(this),Ls(this)},at.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var et=c.JSON.stringify,Ft=c.JSON.parse,eo=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function Qr(){}Qr.prototype.h=null;function th(a){return a.h||(a.h=a.i())}function nh(){}var Fs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function oc(){Me.call(this,"d")}C(oc,Me);function ac(){Me.call(this,"c")}C(ac,Me);var Ir={},rh=null;function to(){return rh=rh||new re}Ir.La="serverreachability";function sh(a){Me.call(this,Ir.La,a)}C(sh,Me);function Us(a){const u=to();ue(u,new sh(u))}Ir.STAT_EVENT="statevent";function ih(a,u){Me.call(this,Ir.STAT_EVENT,a),this.stat=u}C(ih,Me);function yt(a){const u=to();ue(u,new ih(u,a))}Ir.Ma="timingevent";function oh(a,u){Me.call(this,Ir.Ma,a),this.size=u}C(oh,Me);function Bs(a,u){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},u)}function js(){this.g=!0}js.prototype.xa=function(){this.g=!1};function my(a,u,d,g,P,O){a.info(function(){if(a.g)if(O)for(var G="",Pe=O.split("&"),tt=0;tt<Pe.length;tt++){var Ie=Pe[tt].split("=");if(1<Ie.length){var ct=Ie[0];Ie=Ie[1];var lt=ct.split("_");G=2<=lt.length&&lt[1]=="type"?G+(ct+"="+Ie+"&"):G+(ct+"=redacted&")}}else G=null;else G=O;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+u+`
`+d+`
`+G})}function gy(a,u,d,g,P,O,G){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+u+`
`+d+`
`+O+" "+G})}function Jr(a,u,d,g){a.info(function(){return"XMLHTTP TEXT ("+u+"): "+yy(a,d)+(g?" "+g:"")})}function _y(a,u){a.info(function(){return"TIMEOUT: "+u})}js.prototype.info=function(){};function yy(a,u){if(!a.g)return u;if(!u)return null;try{var d=JSON.parse(u);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var O=P[0];if(O!="noop"&&O!="stop"&&O!="close")for(var G=1;G<P.length;G++)P[G]=""}}}}return et(d)}catch{return u}}var no={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},ah={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},cc;function ro(){}C(ro,Qr),ro.prototype.g=function(){return new XMLHttpRequest},ro.prototype.i=function(){return{}},cc=new ro;function Hn(a,u,d,g){this.j=a,this.i=u,this.l=d,this.R=g||1,this.U=new at(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ch}function ch(){this.i=null,this.g="",this.h=!1}var lh={},lc={};function uc(a,u,d){a.L=1,a.v=ao(En(u)),a.m=d,a.P=!0,uh(a,null)}function uh(a,u){a.F=Date.now(),so(a),a.A=En(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Ah(d.i,"t",g),a.C=0,d=a.j.J,a.h=new ch,a.g=qh(a.j,d?u:null,!a.m),0<a.O&&(a.M=new Lt(m(a.Y,a,a.g),a.O)),u=a.U,d=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&($n[0]=P.toString()),P=$n);for(var O=0;O<P.length;O++){var G=F(d,P[O],g||u.handleEvent,!1,u.h||u);if(!G)break;u.g[G.key]=G}u=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,u)):(a.u="GET",a.g.ea(a.A,a.u,null,u)),Us(),my(a.i,a.u,a.A,a.l,a.R,a.m)}Hn.prototype.ca=function(a){a=a.target;const u=this.M;u&&Tn(a)==3?u.j():this.Y(a)},Hn.prototype.Y=function(a){try{if(a==this.g)e:{const lt=Tn(this.g);var u=this.g.Ba();const Zr=this.g.Z();if(!(3>lt)&&(lt!=3||this.g&&(this.h.h||this.g.oa()||Oh(this.g)))){this.J||lt!=4||u==7||(u==8||0>=Zr?Us(3):Us(2)),hc(this);var d=this.g.Z();this.X=d;t:if(hh(this)){var g=Oh(this.g);a="";var P=g.length,O=Tn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){wr(this),qs(this);var G="";break t}this.h.i=new c.TextDecoder}for(u=0;u<P;u++)this.h.h=!0,a+=this.h.i.decode(g[u],{stream:!(O&&u==P-1)});g.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=d==200,gy(this.i,this.u,this.A,this.l,this.R,lt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,tt=this.g;if((Pe=tt.g?tt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Pe)){var Ie=Pe;break t}}Ie=null}if(d=Ie)Jr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,fc(this,d);else{this.o=!1,this.s=3,yt(12),wr(this),qs(this);break e}}if(this.P){d=!0;let Ht;for(;!this.J&&this.C<G.length;)if(Ht=vy(this,G),Ht==lc){lt==4&&(this.s=4,yt(14),d=!1),Jr(this.i,this.l,null,"[Incomplete Response]");break}else if(Ht==lh){this.s=4,yt(15),Jr(this.i,this.l,G,"[Invalid Chunk]"),d=!1;break}else Jr(this.i,this.l,Ht,null),fc(this,Ht);if(hh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),lt!=4||G.length!=0||this.h.h||(this.s=1,yt(16),d=!1),this.o=this.o&&d,!d)Jr(this.i,this.l,G,"[Invalid Chunked Response]"),wr(this),qs(this);else if(0<G.length&&!this.W){this.W=!0;var ct=this.j;ct.g==this&&ct.ba&&!ct.M&&(ct.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),yc(ct),ct.M=!0,yt(11))}}else Jr(this.i,this.l,G,null),fc(this,G);lt==4&&wr(this),this.o&&!this.J&&(lt==4?Fh(this.j,this):(this.o=!1,so(this)))}else My(this.g),d==400&&0<G.indexOf("Unknown SID")?(this.s=3,yt(12)):(this.s=0,yt(13)),wr(this),qs(this)}}}catch{}finally{}};function hh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function vy(a,u){var d=a.C,g=u.indexOf(`
`,d);return g==-1?lc:(d=Number(u.substring(d,g)),isNaN(d)?lh:(g+=1,g+d>u.length?lc:(u=u.slice(g,g+d),a.C=g+d,u)))}Hn.prototype.cancel=function(){this.J=!0,wr(this)};function so(a){a.S=Date.now()+a.I,fh(a,a.I)}function fh(a,u){if(a.B!=null)throw Error("WatchDog timer not null");a.B=Bs(m(a.ba,a),u)}function hc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}Hn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(_y(this.i,this.A),this.L!=2&&(Us(),yt(17)),wr(this),this.s=2,qs(this)):fh(this,this.S-a)};function qs(a){a.j.G==0||a.J||Fh(a.j,a)}function wr(a){hc(a);var u=a.M;u&&typeof u.ma=="function"&&u.ma(),a.M=null,Ls(a.U),a.g&&(u=a.g,a.g=null,u.abort(),u.ma())}function fc(a,u){try{var d=a.j;if(d.G!=0&&(d.g==a||dc(d.h,a))){if(!a.K&&dc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(u)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)po(d),ho(d);else break e;_c(d),yt(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=Bs(m(d.Za,d),6e3));if(1>=mh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Rr(d,11)}else if((a.K||d.g==a)&&po(d),!U(u))for(P=d.Da.g.parse(u),u=0;u<P.length;u++){let Ie=P[u];if(d.T=Ie[0],Ie=Ie[1],d.G==2)if(Ie[0]=="c"){d.K=Ie[1],d.ia=Ie[2];const ct=Ie[3];ct!=null&&(d.la=ct,d.j.info("VER="+d.la));const lt=Ie[4];lt!=null&&(d.Aa=lt,d.j.info("SVER="+d.Aa));const Zr=Ie[5];Zr!=null&&typeof Zr=="number"&&0<Zr&&(g=1.5*Zr,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const Ht=a.g;if(Ht){const go=Ht.g?Ht.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(go){var O=g.h;O.g||go.indexOf("spdy")==-1&&go.indexOf("quic")==-1&&go.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&(pc(O,O.h),O.h=null))}if(g.D){const vc=Ht.g?Ht.g.getResponseHeader("X-HTTP-Session-Id"):null;vc&&(g.ya=vc,Ve(g.I,g.D,vc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var G=a;if(g.qa=jh(g,g.J?g.ia:null,g.W),G.K){gh(g.h,G);var Pe=G,tt=g.L;tt&&(Pe.I=tt),Pe.B&&(hc(Pe),so(Pe)),g.g=G}else Mh(g);0<d.i.length&&fo(d)}else Ie[0]!="stop"&&Ie[0]!="close"||Rr(d,7);else d.G==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?Rr(d,7):gc(d):Ie[0]!="noop"&&d.l&&d.l.ta(Ie),d.v=0)}}Us(4)}catch{}}var Ey=class{constructor(a,u){this.g=a,this.map=u}};function dh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ph(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function mh(a){return a.h?1:a.g?a.g.size:0}function dc(a,u){return a.h?a.h==u:a.g?a.g.has(u):!1}function pc(a,u){a.g?a.g.add(u):a.h=u}function gh(a,u){a.h&&a.h==u?a.h=null:a.g&&a.g.has(u)&&a.g.delete(u)}dh.prototype.cancel=function(){if(this.i=_h(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function _h(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let u=a.i;for(const d of a.g.values())u=u.concat(d.D);return u}return N(a.i)}function Ty(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var u=[],d=a.length,g=0;g<d;g++)u.push(a[g]);return u}u=[],d=0;for(g in a)u[d++]=a[g];return u}function Iy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var u=[];a=a.length;for(var d=0;d<a;d++)u.push(d);return u}u=[],d=0;for(const g in a)u[d++]=g;return u}}}function yh(a,u){if(a.forEach&&typeof a.forEach=="function")a.forEach(u,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,u,void 0);else for(var d=Iy(a),g=Ty(a),P=g.length,O=0;O<P;O++)u.call(void 0,g[O],d&&d[O],a)}var vh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function wy(a,u){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),P=null;if(0<=g){var O=a[d].substring(0,g);P=a[d].substring(g+1)}else O=a[d];u(O,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Ar(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Ar){this.h=a.h,io(this,a.j),this.o=a.o,this.g=a.g,oo(this,a.s),this.l=a.l;var u=a.i,d=new Ws;d.i=u.i,u.g&&(d.g=new Map(u.g),d.h=u.h),Eh(this,d),this.m=a.m}else a&&(u=String(a).match(vh))?(this.h=!1,io(this,u[1]||"",!0),this.o=$s(u[2]||""),this.g=$s(u[3]||"",!0),oo(this,u[4]),this.l=$s(u[5]||"",!0),Eh(this,u[6]||"",!0),this.m=$s(u[7]||"")):(this.h=!1,this.i=new Ws(null,this.h))}Ar.prototype.toString=function(){var a=[],u=this.j;u&&a.push(Hs(u,Th,!0),":");var d=this.g;return(d||u=="file")&&(a.push("//"),(u=this.o)&&a.push(Hs(u,Th,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Hs(d,d.charAt(0)=="/"?by:Ry,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Hs(d,Py)),a.join("")};function En(a){return new Ar(a)}function io(a,u,d){a.j=d?$s(u,!0):u,a.j&&(a.j=a.j.replace(/:$/,""))}function oo(a,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);a.s=u}else a.s=null}function Eh(a,u,d){u instanceof Ws?(a.i=u,Cy(a.i,a.h)):(d||(u=Hs(u,Sy)),a.i=new Ws(u,a.h))}function Ve(a,u,d){a.i.set(u,d)}function ao(a){return Ve(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function $s(a,u){return a?u?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Hs(a,u,d){return typeof a=="string"?(a=encodeURI(a).replace(u,Ay),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Ay(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Th=/[#\/\?@]/g,Ry=/[#\?:]/g,by=/[#\?]/g,Sy=/[#\?@]/g,Py=/#/g;function Ws(a,u){this.h=this.g=null,this.i=a||null,this.j=!!u}function Wn(a){a.g||(a.g=new Map,a.h=0,a.i&&wy(a.i,function(u,d){a.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}t=Ws.prototype,t.add=function(a,u){Wn(this),this.i=null,a=Yr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(u),this.h+=1,this};function Ih(a,u){Wn(a),u=Yr(a,u),a.g.has(u)&&(a.i=null,a.h-=a.g.get(u).length,a.g.delete(u))}function wh(a,u){return Wn(a),u=Yr(a,u),a.g.has(u)}t.forEach=function(a,u){Wn(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(u,P,g,this)},this)},this)},t.na=function(){Wn(this);const a=Array.from(this.g.values()),u=Array.from(this.g.keys()),d=[];for(let g=0;g<u.length;g++){const P=a[g];for(let O=0;O<P.length;O++)d.push(u[g])}return d},t.V=function(a){Wn(this);let u=[];if(typeof a=="string")wh(this,a)&&(u=u.concat(this.g.get(Yr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)u=u.concat(a[d])}return u},t.set=function(a,u){return Wn(this),this.i=null,a=Yr(this,a),wh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[u]),this.h+=1,this},t.get=function(a,u){return a?(a=this.V(a),0<a.length?String(a[0]):u):u};function Ah(a,u,d){Ih(a,u),0<d.length&&(a.i=null,a.g.set(Yr(a,u),N(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],u=Array.from(this.g.keys());for(var d=0;d<u.length;d++){var g=u[d];const O=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var P=O;G[g]!==""&&(P+="="+encodeURIComponent(String(G[g]))),a.push(P)}}return this.i=a.join("&")};function Yr(a,u){return u=String(u),a.j&&(u=u.toLowerCase()),u}function Cy(a,u){u&&!a.j&&(Wn(a),a.i=null,a.g.forEach(function(d,g){var P=g.toLowerCase();g!=P&&(Ih(this,g),Ah(this,P,d))},a)),a.j=u}function Ny(a,u){const d=new js;if(c.Image){const g=new Image;g.onload=y(Gn,d,"TestLoadImage: loaded",!0,u,g),g.onerror=y(Gn,d,"TestLoadImage: error",!1,u,g),g.onabort=y(Gn,d,"TestLoadImage: abort",!1,u,g),g.ontimeout=y(Gn,d,"TestLoadImage: timeout",!1,u,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else u(!1)}function Oy(a,u){const d=new js,g=new AbortController,P=setTimeout(()=>{g.abort(),Gn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(a,{signal:g.signal}).then(O=>{clearTimeout(P),O.ok?Gn(d,"TestPingServer: ok",!0,u):Gn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(P),Gn(d,"TestPingServer: error",!1,u)})}function Gn(a,u,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function ky(){this.g=new eo}function Vy(a,u,d){const g=d||"";try{yh(a,function(P,O){let G=P;h(P)&&(G=et(P)),u.push(g+O+"="+encodeURIComponent(G))})}catch(P){throw u.push(g+"type="+encodeURIComponent("_badmap")),P}}function co(a){this.l=a.Ub||null,this.j=a.eb||!1}C(co,Qr),co.prototype.g=function(){return new lo(this.l,this.j)},co.prototype.i=(function(a){return function(){return a}})({});function lo(a,u){re.call(this),this.D=a,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(lo,re),t=lo.prototype,t.open=function(a,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=u,this.readyState=1,zs(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(u.body=a),(this.D||c).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Gs(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,zs(this)),this.g&&(this.readyState=3,zs(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Rh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Rh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var u=a.value?a.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!a.done}))&&(this.response=this.responseText+=u)}a.done?Gs(this):zs(this),this.readyState==3&&Rh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Gs(this))},t.Qa=function(a){this.g&&(this.response=a,Gs(this))},t.ga=function(){this.g&&Gs(this)};function Gs(a){a.readyState=4,a.l=null,a.j=null,a.v=null,zs(a)}t.setRequestHeader=function(a,u){this.u.append(a,u)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=u.next();return a.join(`\r
`)};function zs(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(lo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function bh(a){let u="";return fe(a,function(d,g){u+=g,u+=":",u+=d,u+=`\r
`}),u}function mc(a,u,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=bh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Ve(a,u,d))}function Ue(a){re.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Ue,re);var Dy=/^https?$/i,xy=["POST","PUT"];t=Ue.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,u,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);u=u?u.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():cc.g(),this.v=this.o?th(this.o):th(cc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(a),!0),this.B=!1}catch(O){Sh(this,O);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const O of g.keys())d.set(O,g.get(O));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(O=>O.toLowerCase()=="content-type"),P=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(xy,u,void 0))||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,G]of d)this.g.setRequestHeader(O,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Nh(this),this.u=!0,this.g.send(a),this.u=!1}catch(O){Sh(this,O)}};function Sh(a,u){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=u,a.m=5,Ph(a),uo(a)}function Ph(a){a.A||(a.A=!0,ue(a,"complete"),ue(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ue(this,"complete"),ue(this,"abort"),uo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),uo(this,!0)),Ue.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Ch(this):this.bb())},t.bb=function(){Ch(this)};function Ch(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Tn(a)!=4||a.Z()!=2)){if(a.u&&Tn(a)==4)Le(a.Ea,0,a);else if(ue(a,"readystatechange"),Tn(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var g;if(g=G===0){var P=String(a.D).match(vh)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),g=!Dy.test(P?P.toLowerCase():"")}d=g}if(d)ue(a,"complete"),ue(a,"success");else{a.m=6;try{var O=2<Tn(a)?a.g.statusText:""}catch{O=""}a.l=O+" ["+a.Z()+"]",Ph(a)}}finally{uo(a)}}}}function uo(a,u){if(a.g){Nh(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,u||ue(a,"ready");try{d.onreadystatechange=g}catch{}}}function Nh(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Tn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Tn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var u=this.g.responseText;return a&&u.indexOf(a)==0&&(u=u.substring(a.length)),Ft(u)}};function Oh(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function My(a){const u={};a=(a.g&&2<=Tn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(U(a[g]))continue;var d=R(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const O=u[P]||[];u[P]=O,O.push(d)}w(u,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ks(a,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||u}function kh(a){this.Aa=0,this.i=[],this.j=new js,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ks("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ks("baseRetryDelayMs",5e3,a),this.cb=Ks("retryDelaySeedMs",1e4,a),this.Wa=Ks("forwardChannelMaxRetries",2,a),this.wa=Ks("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new dh(a&&a.concurrentRequestLimit),this.Da=new ky,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=kh.prototype,t.la=8,t.G=1,t.connect=function(a,u,d,g){yt(0),this.W=a,this.H=u||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=jh(this,null,this.W),fo(this)};function gc(a){if(Vh(a),a.G==3){var u=a.U++,d=En(a.I);if(Ve(d,"SID",a.K),Ve(d,"RID",u),Ve(d,"TYPE","terminate"),Qs(a,d),u=new Hn(a,a.j,u),u.L=2,u.v=ao(En(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(u.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=u.v,d=!0),d||(u.g=qh(u.j,null),u.g.ea(u.v)),u.F=Date.now(),so(u)}Bh(a)}function ho(a){a.g&&(yc(a),a.g.cancel(),a.g=null)}function Vh(a){ho(a),a.u&&(c.clearTimeout(a.u),a.u=null),po(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function fo(a){if(!ph(a.h)&&!a.s){a.s=!0;var u=a.Ga;ve||$t(),ge||(ve(),ge=!0),St.add(u,a),a.B=0}}function Ly(a,u){return mh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=u.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=Bs(m(a.Ga,a,u),Uh(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new Hn(this,this.j,a);let O=this.o;if(this.S&&(O?(O=v(O),A(O,this.S)):O=this.S),this.m!==null||this.O||(P.H=O,O=null),this.P)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(u+=g,4096<u){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=xh(this,P,u),d=En(this.I),Ve(d,"RID",a),Ve(d,"CVER",22),this.D&&Ve(d,"X-HTTP-Session-Id",this.D),Qs(this,d),O&&(this.O?u="headers="+encodeURIComponent(String(bh(O)))+"&"+u:this.m&&mc(d,this.m,O)),pc(this.h,P),this.Ua&&Ve(d,"TYPE","init"),this.P?(Ve(d,"$req",u),Ve(d,"SID","null"),P.T=!0,uc(P,d,null)):uc(P,d,u),this.G=2}}else this.G==3&&(a?Dh(this,a):this.i.length==0||ph(this.h)||Dh(this))};function Dh(a,u){var d;u?d=u.l:d=a.U++;const g=En(a.I);Ve(g,"SID",a.K),Ve(g,"RID",d),Ve(g,"AID",a.T),Qs(a,g),a.m&&a.o&&mc(g,a.m,a.o),d=new Hn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),u&&(a.i=u.D.concat(a.i)),u=xh(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),pc(a.h,d),uc(d,g,u)}function Qs(a,u){a.H&&fe(a.H,function(d,g){Ve(u,g,d)}),a.l&&yh({},function(d,g){Ve(u,g,d)})}function xh(a,u,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let O=-1;for(;;){const G=["count="+d];O==-1?0<d?(O=P[0].g,G.push("ofs="+O)):O=0:G.push("ofs="+O);let Pe=!0;for(let tt=0;tt<d;tt++){let Ie=P[tt].g;const ct=P[tt].map;if(Ie-=O,0>Ie)O=Math.max(0,P[tt].g-100),Pe=!1;else try{Vy(ct,G,"req"+Ie+"_")}catch{g&&g(ct)}}if(Pe){g=G.join("&");break e}}}return a=a.i.splice(0,d),u.D=a,g}function Mh(a){if(!a.g&&!a.u){a.Y=1;var u=a.Fa;ve||$t(),ge||(ve(),ge=!0),St.add(u,a),a.v=0}}function _c(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=Bs(m(a.Fa,a),Uh(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Lh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=Bs(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,yt(10),ho(this),Lh(this))};function yc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Lh(a){a.g=new Hn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var u=En(a.qa);Ve(u,"RID","rpc"),Ve(u,"SID",a.K),Ve(u,"AID",a.T),Ve(u,"CI",a.F?"0":"1"),!a.F&&a.ja&&Ve(u,"TO",a.ja),Ve(u,"TYPE","xmlhttp"),Qs(a,u),a.m&&a.o&&mc(u,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=ao(En(u)),d.m=null,d.P=!0,uh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,ho(this),_c(this),yt(19))};function po(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Fh(a,u){var d=null;if(a.g==u){po(a),yc(a),a.g=null;var g=2}else if(dc(a.h,u))d=u.D,gh(a.h,u),g=1;else return;if(a.G!=0){if(u.o)if(g==1){d=u.m?u.m.length:0,u=Date.now()-u.F;var P=a.B;g=to(),ue(g,new oh(g,d)),fo(a)}else Mh(a);else if(P=u.s,P==3||P==0&&0<u.X||!(g==1&&Ly(a,u)||g==2&&_c(a)))switch(d&&0<d.length&&(u=a.h,u.i=u.i.concat(d)),P){case 1:Rr(a,5);break;case 4:Rr(a,10);break;case 3:Rr(a,6);break;default:Rr(a,2)}}}function Uh(a,u){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*u}function Rr(a,u){if(a.j.info("Error code "+u),u==2){var d=m(a.fb,a),g=a.Xa;const P=!g;g=new Ar(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||io(g,"https"),ao(g),P?Ny(g.toString(),d):Oy(g.toString(),d)}else yt(2);a.G=0,a.l&&a.l.sa(u),Bh(a),Vh(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),yt(2)):(this.j.info("Failed to ping google.com"),yt(1))};function Bh(a){if(a.G=0,a.ka=[],a.l){const u=_h(a.h);(u.length!=0||a.i.length!=0)&&(k(a.ka,u),k(a.ka,a.i),a.h.i.length=0,N(a.i),a.i.length=0),a.l.ra()}}function jh(a,u,d){var g=d instanceof Ar?En(d):new Ar(d);if(g.g!="")u&&(g.g=u+"."+g.g),oo(g,g.s);else{var P=c.location;g=P.protocol,u=u?u+"."+P.hostname:P.hostname,P=+P.port;var O=new Ar(null);g&&io(O,g),u&&(O.g=u),P&&oo(O,P),d&&(O.l=d),g=O}return d=a.D,u=a.ya,d&&u&&Ve(g,d,u),Ve(g,"VER",a.la),Qs(a,g),g}function qh(a,u,d){if(u&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=a.Ca&&!a.pa?new Ue(new co({eb:d})):new Ue(a.pa),u.Ha(a.J),u}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function $h(){}t=$h.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function mo(){}mo.prototype.g=function(a,u){return new Ct(a,u)};function Ct(a,u){re.call(this),this.g=new kh(u),this.l=a,this.h=u&&u.messageUrlParams||null,a=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(a?a["X-WebChannel-Content-Type"]=u.messageContentType:a={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(a?a["X-WebChannel-Client-Profile"]=u.va:a={"X-WebChannel-Client-Profile":u.va}),this.g.S=a,(a=u&&u.Sb)&&!U(a)&&(this.g.m=a),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!U(u)&&(this.g.D=u,a=this.h,a!==null&&u in a&&(a=this.h,u in a&&delete a[u])),this.j=new Xr(this)}C(Ct,re),Ct.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ct.prototype.close=function(){gc(this.g)},Ct.prototype.o=function(a){var u=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=et(a),a=d);u.i.push(new Ey(u.Ya++,a)),u.G==3&&fo(u)},Ct.prototype.N=function(){this.g.l=null,delete this.j,gc(this.g),delete this.g,Ct.aa.N.call(this)};function Hh(a){oc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var u=a.__sm__;if(u){e:{for(const d in u){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,u=u!==null&&a in u?u[a]:void 0),this.data=u}else this.data=a}C(Hh,oc);function Wh(){ac.call(this),this.status=1}C(Wh,ac);function Xr(a){this.g=a}C(Xr,$h),Xr.prototype.ua=function(){ue(this.g,"a")},Xr.prototype.ta=function(a){ue(this.g,new Hh(a))},Xr.prototype.sa=function(a){ue(this.g,new Wh)},Xr.prototype.ra=function(){ue(this.g,"b")},mo.prototype.createWebChannel=mo.prototype.g,Ct.prototype.send=Ct.prototype.o,Ct.prototype.open=Ct.prototype.m,Ct.prototype.close=Ct.prototype.close,$g=function(){return new mo},qg=function(){return to()},jg=Ir,_l={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},no.NO_ERROR=0,no.TIMEOUT=8,no.HTTP_ERROR=6,Do=no,ah.COMPLETE="complete",Bg=ah,nh.EventType=Fs,Fs.OPEN="a",Fs.CLOSE="b",Fs.ERROR="c",Fs.MESSAGE="d",re.prototype.listen=re.prototype.K,si=nh,Ue.prototype.listenOnce=Ue.prototype.L,Ue.prototype.getLastError=Ue.prototype.Ka,Ue.prototype.getLastErrorCode=Ue.prototype.Ba,Ue.prototype.getStatus=Ue.prototype.Z,Ue.prototype.getResponseJson=Ue.prototype.Oa,Ue.prototype.getResponseText=Ue.prototype.oa,Ue.prototype.send=Ue.prototype.ea,Ue.prototype.setWithCredentials=Ue.prototype.Ha,Ug=Ue}).apply(typeof To<"u"?To:typeof self<"u"?self:typeof window<"u"?window:{});const Ed="@firebase/firestore",Td="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ht.UNAUTHENTICATED=new ht(null),ht.GOOGLE_CREDENTIALS=new ht("google-credentials-uid"),ht.FIRST_PARTY=new ht("first-party-uid"),ht.MOCK_USER=new ht("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ks="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr=new nu("@firebase/firestore");function rs(){return qr.logLevel}function Y(t,...e){if(qr.logLevel<=_e.DEBUG){const n=e.map(pu);qr.debug(`Firestore (${ks}): ${t}`,...n)}}function Ln(t,...e){if(qr.logLevel<=_e.ERROR){const n=e.map(pu);qr.error(`Firestore (${ks}): ${t}`,...n)}}function ur(t,...e){if(qr.logLevel<=_e.WARN){const n=e.map(pu);qr.warn(`Firestore (${ks}): ${t}`,...n)}}function pu(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(n){return JSON.stringify(n)})(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,Hg(t,r,n)}function Hg(t,e,n){let r=`FIRESTORE (${ks}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Ln(r),new Error(r)}function be(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||Hg(e,s,r)}function le(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wg{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class _R{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(ht.UNAUTHENTICATED)))}shutdown(){}}class yR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class vR{constructor(e){this.t=e,this.currentUser=ht.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new On;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new On,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new On)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string",31837,{l:r}),new Wg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string",2055,{h:e}),new ht(e)}}class ER{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ht.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class TR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new ER(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(ht.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Id{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class IR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Ot(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){be(this.o===void 0,3512);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Id(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(be(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Id(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=wR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function me(t,e){return t<e?-1:t>e?1:0}function yl(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return me(r,s);{const i=Gg(),o=AR(i.encode(wd(t,n)),i.encode(wd(e,n)));return o!==0?o:me(r,s)}}n+=r>65535?2:1}return me(t.length,e.length)}function wd(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function AR(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return me(t[n],e[n]);return me(t.length,e.length)}function ws(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad="__name__";class sn{constructor(e,n,r){n===void 0?n=0:n>e.length&&oe(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&oe(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return sn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof sn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=sn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return me(e.length,n.length)}static compareSegments(e,n){const r=sn.isNumericId(e),s=sn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?sn.extractNumericId(e).compare(sn.extractNumericId(n)):yl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return or.fromString(e.substring(4,e.length-2))}}class ke extends sn{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new ke(n)}static emptyPath(){return new ke([])}}const RR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class st extends sn{construct(e,n,r){return new st(e,n,r)}static isValidIdentifier(e){return RR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),st.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ad}static keyField(){return new st([Ad])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new J(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new J(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new J(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new st(n)}static emptyPath(){return new st([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.path=e}static fromPath(e){return new te(ke.fromString(e))}static fromName(e){return new te(ke.fromString(e).popFirst(5))}static empty(){return new te(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new te(new ke(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t,e,n){if(!n)throw new J(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function bR(t,e,n,r){if(e===!0&&r===!0)throw new J(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Rd(t){if(!te.isDocumentKey(t))throw new J(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bd(t){if(te.isDocumentKey(t))throw new J(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Kg(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function Ba(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":oe(12329,{type:typeof t})}function qt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new J(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Ba(t);throw new J(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(t,e){const n={typeString:t};return e&&(n.value=e),n}function Ki(t,e){if(!Kg(t))throw new J(x.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new J(x.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=-62135596800,Pd=1e6;class De{static now(){return De.fromMillis(Date.now())}static fromDate(e){return De.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Pd);return new De(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new J(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new J(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Sd)throw new J(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pd}_compareTo(e){return this.seconds===e.seconds?me(this.nanoseconds,e.nanoseconds):me(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:De._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ki(e,De._jsonSchema))return new De(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Sd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}De._jsonSchemaVersion="firestore/timestamp/1.0",De._jsonSchema={type:Je("string",De._jsonSchemaVersion),seconds:Je("number"),nanoseconds:Je("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new De(0,0))}static max(){return new ce(new De(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=-1;function SR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new De(n+1,0):new De(n,r));return new hr(s,te.empty(),e)}function PR(t){return new hr(t.readTime,t.key,Oi)}class hr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new hr(ce.min(),te.empty(),Oi)}static max(){return new hr(ce.max(),te.empty(),Oi)}}function CR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=te.comparator(t.documentKey,e.documentKey),n!==0?n:me(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class OR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vs(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==NR)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&oe(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):L.reject(n)}static resolve(e){return new L(((n,r)=>{n(e)}))}static reject(e){return new L(((n,r)=>{r(e)}))}static waitFor(e){return new L(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next((s=>s?L.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new L(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const h=l;n(e[h]).next((f=>{o[h]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new L(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function kR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ds(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}ja.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=-1;function qa(t){return t==null}function ia(t){return t===0&&1/t==-1/0}function VR(t){return typeof t=="number"&&Number.isInteger(t)&&!ia(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qg="";function DR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Cd(e)),e=xR(t.get(n),e);return Cd(e)}function xR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case Qg:n+="";break;default:n+=i}}return n}function Cd(t){return t+Qg+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nd(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function vr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function Jg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e,n){this.comparator=e,this.root=n||rt.EMPTY}insert(e,n){return new Fe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,rt.BLACK,null,null))}remove(e){return new Fe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,rt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Io(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Io(this.root,e,this.comparator,!1)}getReverseIterator(){return new Io(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Io(this.root,e,this.comparator,!0)}}class Io{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class rt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??rt.RED,this.left=s??rt.EMPTY,this.right=i??rt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new rt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return rt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,rt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,rt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw oe(43730,{key:this.key,value:this.value});if(this.right.isRed())throw oe(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw oe(27949);return e+(this.isRed()?0:1)}}rt.EMPTY=null,rt.RED=!0,rt.BLACK=!1;rt.EMPTY=new class{constructor(){this.size=0}get key(){throw oe(57766)}get value(){throw oe(16141)}get color(){throw oe(16727)}get left(){throw oe(29726)}get right(){throw oe(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new rt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.comparator=e,this.data=new Fe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Od(this.data.getIterator())}getIteratorFrom(e){return new Od(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof Xe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new Xe(this.comparator);return n.data=e,n}}class Od{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.fields=e,e.sort(st.comparator)}static empty(){return new Dt([])}unionWith(e){let n=new Xe(st.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Dt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ws(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new Yg("Invalid base64 string: "+i):i}})(e);return new ot(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ot(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return me(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ot.EMPTY_BYTE_STRING=new ot("");const MR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function fr(t){if(be(!!t,39018),typeof t=="string"){let e=0;const n=MR.exec(t);if(be(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:$e(t.seconds),nanos:$e(t.nanos)}}function $e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function dr(t){return typeof t=="string"?ot.fromBase64String(t):ot.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xg="server_timestamp",Zg="__type__",e_="__previous_value__",t_="__local_write_time__";function _u(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[Zg])===null||n===void 0?void 0:n.stringValue)===Xg}function $a(t){const e=t.mapValue.fields[e_];return _u(e)?$a(e):e}function ki(t){const e=fr(t.mapValue.fields[t_].timestampValue);return new De(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LR{constructor(e,n,r,s,i,o,c,l,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=h,this.isUsingEmulator=f}}const oa="(default)";class Vi{constructor(e,n){this.projectId=e,this.database=n||oa}static empty(){return new Vi("","")}get isDefaultDatabase(){return this.database===oa}isEqual(e){return e instanceof Vi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const n_="__type__",FR="__max__",wo={mapValue:{}},r_="__vector__",aa="value";function pr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?_u(t)?4:BR(t)?9007199254740991:UR(t)?10:11:oe(28295,{value:t})}function vn(t,e){if(t===e)return!0;const n=pr(t);if(n!==pr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return ki(t).isEqual(ki(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=fr(s.timestampValue),c=fr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return dr(s.bytesValue).isEqual(dr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return $e(s.geoPointValue.latitude)===$e(i.geoPointValue.latitude)&&$e(s.geoPointValue.longitude)===$e(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return $e(s.integerValue)===$e(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=$e(s.doubleValue),c=$e(i.doubleValue);return o===c?ia(o)===ia(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return ws(t.arrayValue.values||[],e.arrayValue.values||[],vn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Nd(o)!==Nd(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!vn(o[l],c[l])))return!1;return!0})(t,e);default:return oe(52216,{left:t})}}function Di(t,e){return(t.values||[]).find((n=>vn(n,e)))!==void 0}function As(t,e){if(t===e)return 0;const n=pr(t),r=pr(e);if(n!==r)return me(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return me(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=$e(i.integerValue||i.doubleValue),l=$e(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return kd(t.timestampValue,e.timestampValue);case 4:return kd(ki(t),ki(e));case 5:return yl(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=dr(i),l=dr(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let h=0;h<c.length&&h<l.length;h++){const f=me(c[h],l[h]);if(f!==0)return f}return me(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=me($e(i.latitude),$e(o.latitude));return c!==0?c:me($e(i.longitude),$e(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Vd(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var c,l,h,f;const p=i.fields||{},m=o.fields||{},y=(c=p[aa])===null||c===void 0?void 0:c.arrayValue,C=(l=m[aa])===null||l===void 0?void 0:l.arrayValue,N=me(((h=y==null?void 0:y.values)===null||h===void 0?void 0:h.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return N!==0?N:Vd(y,C)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===wo.mapValue&&o===wo.mapValue)return 0;if(i===wo.mapValue)return 1;if(o===wo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),h=o.fields||{},f=Object.keys(h);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=yl(l[p],f[p]);if(m!==0)return m;const y=As(c[l[p]],h[f[p]]);if(y!==0)return y}return me(l.length,f.length)})(t.mapValue,e.mapValue);default:throw oe(23264,{le:n})}}function kd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return me(t,e);const n=fr(t),r=fr(e),s=me(n.seconds,r.seconds);return s!==0?s:me(n.nanos,r.nanos)}function Vd(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=As(n[s],r[s]);if(i)return i}return me(n.length,r.length)}function Rs(t){return vl(t)}function vl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=fr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return dr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return te.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=vl(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${vl(n.fields[o])}`;return s+"}"})(t.mapValue):oe(61005,{value:t})}function xo(t){switch(pr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=$a(t);return e?16+xo(e):16;case 5:return 2*t.stringValue.length;case 6:return dr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+xo(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return vr(r.fields,((i,o)=>{s+=i.length+xo(o)})),s})(t.mapValue);default:throw oe(13486,{value:t})}}function Dd(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function El(t){return!!t&&"integerValue"in t}function yu(t){return!!t&&"arrayValue"in t}function xd(t){return!!t&&"nullValue"in t}function Md(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Mo(t){return!!t&&"mapValue"in t}function UR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[n_])===null||n===void 0?void 0:n.stringValue)===r_}function yi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return vr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=yi(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=yi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function BR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===FR}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.value=e}static empty(){return new bt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Mo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=yi(n)}setAll(e){let n=st.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=yi(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Mo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return vn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Mo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){vr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new bt(yi(this.value))}}function s_(t){const e=[];return vr(t.fields,((n,r)=>{const s=new st([n]);if(Mo(r)){const i=s_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Dt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new dt(e,0,ce.min(),ce.min(),ce.min(),bt.empty(),0)}static newFoundDocument(e,n,r,s){return new dt(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new dt(e,2,n,ce.min(),ce.min(),bt.empty(),0)}static newUnknownDocument(e,n){return new dt(e,3,n,ce.min(),ce.min(),bt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=bt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=bt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof dt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new dt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e,n){this.position=e,this.inclusive=n}}function Ld(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=te.comparator(te.fromName(o.referenceValue),n.key):r=As(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Fd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!vn(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,n="asc"){this.field=e,this.dir=n}}function jR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{}class Ke extends i_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $R(e,n,r):n==="array-contains"?new GR(e,r):n==="in"?new zR(e,r):n==="not-in"?new KR(e,r):n==="array-contains-any"?new QR(e,r):new Ke(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new HR(e,r):new WR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(As(n,this.value)):n!==null&&pr(this.value)===pr(n)&&this.matchesComparison(As(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return oe(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class en extends i_{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new en(e,n)}matches(e){return o_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function o_(t){return t.op==="and"}function a_(t){return qR(t)&&o_(t)}function qR(t){for(const e of t.filters)if(e instanceof en)return!1;return!0}function Tl(t){if(t instanceof Ke)return t.field.canonicalString()+t.op.toString()+Rs(t.value);if(a_(t))return t.filters.map((e=>Tl(e))).join(",");{const e=t.filters.map((n=>Tl(n))).join(",");return`${t.op}(${e})`}}function c_(t,e){return t instanceof Ke?(function(r,s){return s instanceof Ke&&r.op===s.op&&r.field.isEqual(s.field)&&vn(r.value,s.value)})(t,e):t instanceof en?(function(r,s){return s instanceof en&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&c_(o,s.filters[c])),!0):!1})(t,e):void oe(19439)}function l_(t){return t instanceof Ke?(function(n){return`${n.field.canonicalString()} ${n.op} ${Rs(n.value)}`})(t):t instanceof en?(function(n){return n.op.toString()+" {"+n.getFilters().map(l_).join(" ,")+"}"})(t):"Filter"}class $R extends Ke{constructor(e,n,r){super(e,n,r),this.key=te.fromName(r.referenceValue)}matches(e){const n=te.comparator(e.key,this.key);return this.matchesComparison(n)}}class HR extends Ke{constructor(e,n){super(e,"in",n),this.keys=u_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class WR extends Ke{constructor(e,n){super(e,"not-in",n),this.keys=u_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function u_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>te.fromName(r.referenceValue)))}class GR extends Ke{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return yu(n)&&Di(n.arrayValue,this.value)}}class zR extends Ke{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Di(this.value.arrayValue,n)}}class KR extends Ke{constructor(e,n){super(e,"not-in",n)}matches(e){if(Di(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Di(this.value.arrayValue,n)}}class QR extends Ke{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!yu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Di(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JR{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Pe=null}}function Ud(t,e=null,n=[],r=[],s=null,i=null,o=null){return new JR(t,e,n,r,s,i,o)}function vu(t){const e=le(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Tl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),qa(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Rs(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Rs(r))).join(",")),e.Pe=n}return e.Pe}function Eu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!jR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!c_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Fd(t.startAt,e.startAt)&&Fd(t.endAt,e.endAt)}function Il(t){return te.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function YR(t,e,n,r,s,i,o,c){return new xs(t,e,n,r,s,i,o,c)}function Ha(t){return new xs(t)}function Bd(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function h_(t){return t.collectionGroup!==null}function vi(t){const e=le(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new Xe(st.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((h=>{h.isInequality()&&(c=c.add(h.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new xi(i,r))})),n.has(st.keyField().canonicalString())||e.Te.push(new xi(st.keyField(),r))}return e.Te}function pn(t){const e=le(t);return e.Ie||(e.Ie=XR(e,vi(t))),e.Ie}function XR(t,e){if(t.limitType==="F")return Ud(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new xi(s.field,i)}));const n=t.endAt?new ca(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ca(t.startAt.position,t.startAt.inclusive):null;return Ud(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function wl(t,e){const n=t.filters.concat([e]);return new xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Al(t,e,n){return new xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Wa(t,e){return Eu(pn(t),pn(e))&&t.limitType===e.limitType}function f_(t){return`${vu(pn(t))}|lt:${t.limitType}`}function ss(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>l_(s))).join(", ")}]`),qa(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Rs(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Rs(s))).join(",")),`Target(${r})`})(pn(t))}; limitType=${t.limitType})`}function Ga(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):te.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of vi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const h=Ld(o,c,l);return o.inclusive?h<=0:h<0})(r.startAt,vi(r),s)||r.endAt&&!(function(o,c,l){const h=Ld(o,c,l);return o.inclusive?h>=0:h>0})(r.endAt,vi(r),s))})(t,e)}function ZR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function d_(t){return(e,n)=>{let r=!1;for(const s of vi(t)){const i=eb(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function eb(t,e,n){const r=t.field.isKeyField()?te.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),h=c.data.field(i);return l!==null&&h!==null?As(l,h):oe(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return oe(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){vr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return Jg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tb=new Fe(te.comparator);function Fn(){return tb}const p_=new Fe(te.comparator);function ii(...t){let e=p_;for(const n of t)e=e.insert(n.key,n);return e}function m_(t){let e=p_;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function kr(){return Ei()}function g_(){return Ei()}function Ei(){return new zr((t=>t.toString()),((t,e)=>t.isEqual(e)))}const nb=new Fe(te.comparator),rb=new Xe(te.comparator);function ye(...t){let e=rb;for(const n of t)e=e.add(n);return e}const sb=new Xe(me);function ib(){return sb}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ia(e)?"-0":e}}function __(t){return{integerValue:""+t}}function ob(t,e){return VR(e)?__(e):Tu(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(){this._=void 0}}function ab(t,e,n){return t instanceof la?(function(s,i){const o={fields:{[Zg]:{stringValue:Xg},[t_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&_u(i)&&(i=$a(i)),i&&(o.fields[e_]=i),{mapValue:o}})(n,e):t instanceof Mi?v_(t,e):t instanceof Li?E_(t,e):(function(s,i){const o=y_(s,i),c=jd(o)+jd(s.Ee);return El(o)&&El(s.Ee)?__(c):Tu(s.serializer,c)})(t,e)}function cb(t,e,n){return t instanceof Mi?v_(t,e):t instanceof Li?E_(t,e):n}function y_(t,e){return t instanceof ua?(function(r){return El(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class la extends za{}class Mi extends za{constructor(e){super(),this.elements=e}}function v_(t,e){const n=T_(e);for(const r of t.elements)n.some((s=>vn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Li extends za{constructor(e){super(),this.elements=e}}function E_(t,e){let n=T_(e);for(const r of t.elements)n=n.filter((s=>!vn(s,r)));return{arrayValue:{values:n}}}class ua extends za{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function jd(t){return $e(t.integerValue||t.doubleValue)}function T_(t){return yu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function lb(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Mi&&s instanceof Mi||r instanceof Li&&s instanceof Li?ws(r.elements,s.elements,vn):r instanceof ua&&s instanceof ua?vn(r.Ee,s.Ee):r instanceof la&&s instanceof la})(t.transform,e.transform)}class ub{constructor(e,n){this.version=e,this.transformResults=n}}class Qt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Qt}static exists(e){return new Qt(void 0,e)}static updateTime(e){return new Qt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Lo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ka{}function I_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Iu(t.key,Qt.none()):new Qi(t.key,t.data,Qt.none());{const n=t.data,r=bt.empty();let s=new Xe(st.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Er(t.key,r,new Dt(s.toArray()),Qt.none())}}function hb(t,e,n){t instanceof Qi?(function(s,i,o){const c=s.value.clone(),l=$d(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Er?(function(s,i,o){if(!Lo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=$d(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(w_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Ti(t,e,n,r){return t instanceof Qi?(function(i,o,c,l){if(!Lo(i.precondition,o))return c;const h=i.value.clone(),f=Hd(i.fieldTransforms,l,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null})(t,e,n,r):t instanceof Er?(function(i,o,c,l){if(!Lo(i.precondition,o))return c;const h=Hd(i.fieldTransforms,l,o),f=o.data;return f.setAll(w_(i)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return Lo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function fb(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=y_(r.transform,s||null);i!=null&&(n===null&&(n=bt.empty()),n.set(r.field,i))}return n||null}function qd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ws(r,s,((i,o)=>lb(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Qi extends Ka{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Er extends Ka{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function w_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function $d(t,e,n){const r=new Map;be(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,cb(o,c,n[s]))}return r}function Hd(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,ab(i,o,e))}return r}class Iu extends Ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class db extends Ka{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pb{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&hb(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ti(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ti(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=g_();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=I_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ce.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),ye())}isEqual(e){return this.batchId===e.batchId&&ws(this.mutations,e.mutations,((n,r)=>qd(n,r)))&&ws(this.baseMutations,e.baseMutations,((n,r)=>qd(n,r)))}}class wu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return nb})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new wu(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mb{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ze,Ee;function _b(t){switch(t){case x.OK:return oe(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return oe(15467,{code:t})}}function A_(t){if(t===void 0)return Ln("GRPC error has no .code"),x.UNKNOWN;switch(t){case ze.OK:return x.OK;case ze.CANCELLED:return x.CANCELLED;case ze.UNKNOWN:return x.UNKNOWN;case ze.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case ze.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case ze.INTERNAL:return x.INTERNAL;case ze.UNAVAILABLE:return x.UNAVAILABLE;case ze.UNAUTHENTICATED:return x.UNAUTHENTICATED;case ze.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case ze.NOT_FOUND:return x.NOT_FOUND;case ze.ALREADY_EXISTS:return x.ALREADY_EXISTS;case ze.PERMISSION_DENIED:return x.PERMISSION_DENIED;case ze.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case ze.ABORTED:return x.ABORTED;case ze.OUT_OF_RANGE:return x.OUT_OF_RANGE;case ze.UNIMPLEMENTED:return x.UNIMPLEMENTED;case ze.DATA_LOSS:return x.DATA_LOSS;default:return oe(39323,{code:t})}}(Ee=ze||(ze={}))[Ee.OK=0]="OK",Ee[Ee.CANCELLED=1]="CANCELLED",Ee[Ee.UNKNOWN=2]="UNKNOWN",Ee[Ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ee[Ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ee[Ee.NOT_FOUND=5]="NOT_FOUND",Ee[Ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ee[Ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ee[Ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ee[Ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ee[Ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ee[Ee.ABORTED=10]="ABORTED",Ee[Ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ee[Ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ee[Ee.INTERNAL=13]="INTERNAL",Ee[Ee.UNAVAILABLE=14]="UNAVAILABLE",Ee[Ee.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yb=new or([4294967295,4294967295],0);function Wd(t){const e=Gg().encode(t),n=new Fg;return n.update(e),new Uint8Array(n.digest())}function Gd(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new or([n,r],0),new or([s,i],0)]}class Au{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new oi(`Invalid padding: ${n}`);if(r<0)throw new oi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new oi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new oi(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=or.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(or.fromNumber(r)));return s.compare(yb)===1&&(s=new or([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Wd(e),[r,s]=Gd(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Au(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.fe===0)return;const n=Wd(e),[r,s]=Gd(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class oi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Ji.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Qa(ce.min(),s,new Fe(me),Fn(),ye())}}class Ji{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ji(r,n,ye(),ye(),ye())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class R_{constructor(e,n){this.targetId=e,this.De=n}}class b_{constructor(e,n,r=ot.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class zd{constructor(){this.ve=0,this.Ce=Kd(),this.Fe=ot.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ye(),n=ye(),r=ye();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:oe(38017,{changeType:i})}})),new Ji(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Kd()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,be(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class vb{constructor(e){this.We=e,this.Ge=new Map,this.ze=Fn(),this.je=Ao(),this.Je=Ao(),this.He=new Fe(me)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:oe(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Il(i))if(r===0){const o=new te(i.path);this.Xe(n,o,dt.newNoDocument(o,ce.min()))}else be(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const c=this._t(e),l=c?this.ut(c,e,o):1;if(l!==0){this.rt(n);const h=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,h)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=dr(r).toUint8Array()}catch(l){if(l instanceof Yg)return ur("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Au(o,s,i)}catch(l){return ur(l instanceof oi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const c=this.st(o);if(c){if(i.current&&Il(c.target)){const l=new te(c.target.path);this.Tt(l).has(o)||this.It(o,l)||this.Xe(o,l,dt.newNoDocument(l,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let r=ye();this.Je.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const h=this.st(l);return!h||h.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new Qa(e,n,this.He,this.ze,r);return this.ze=Fn(),this.je=Ao(),this.Je=Ao(),this.He=new Fe(me),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new zd,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new Xe(me),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new Xe(me),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new zd),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Ao(){return new Fe(te.comparator)}function Kd(){return new Fe(te.comparator)}const Eb={asc:"ASCENDING",desc:"DESCENDING"},Tb={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Ib={and:"AND",or:"OR"};class wb{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Rl(t,e){return t.useProto3Json||qa(e)?e:{value:e}}function ha(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function S_(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Ab(t,e){return ha(t,e.toTimestamp())}function mn(t){return be(!!t,49232),ce.fromTimestamp((function(n){const r=fr(n);return new De(r.seconds,r.nanos)})(t))}function Ru(t,e){return bl(t,e).canonicalString()}function bl(t,e){const n=(function(s){return new ke(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function P_(t){const e=ke.fromString(t);return be(V_(e),10190,{key:e.toString()}),e}function Sl(t,e){return Ru(t.databaseId,e.path)}function jc(t,e){const n=P_(e);if(n.get(1)!==t.databaseId.projectId)throw new J(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new J(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new te(N_(n))}function C_(t,e){return Ru(t.databaseId,e)}function Rb(t){const e=P_(t);return e.length===4?ke.emptyPath():N_(e)}function Pl(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function N_(t){return be(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Qd(t,e,n){return{name:Sl(t,e),fields:n.value.mapValue.fields}}function bb(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:oe(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,f){return h.useProto3Json?(be(f===void 0||typeof f=="string",58123),ot.fromBase64String(f||"")):(be(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ot.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(h){const f=h.code===void 0?x.UNKNOWN:A_(h.code);return new J(f,h.message||"")})(o);n=new b_(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=jc(t,r.document.name),i=mn(r.document.updateTime),o=r.document.createTime?mn(r.document.createTime):ce.min(),c=new bt({mapValue:{fields:r.document.fields}}),l=dt.newFoundDocument(s,i,o,c),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Fo(h,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=jc(t,r.document),i=r.readTime?mn(r.readTime):ce.min(),o=dt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new Fo([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=jc(t,r.document),i=r.removedTargetIds||[];n=new Fo([],i,s,null)}else{if(!("filter"in e))return oe(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new gb(s,i),c=r.targetId;n=new R_(c,o)}}return n}function Sb(t,e){let n;if(e instanceof Qi)n={update:Qd(t,e.key,e.value)};else if(e instanceof Iu)n={delete:Sl(t,e.key)};else if(e instanceof Er)n={update:Qd(t,e.key,e.data),updateMask:Mb(e.fieldMask)};else{if(!(e instanceof db))return oe(16599,{Rt:e.type});n={verify:Sl(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof la)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Mi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Li)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ua)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw oe(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:Ab(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:oe(27497)})(t,e.precondition)),n}function Pb(t,e){return t&&t.length>0?(be(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?mn(s.updateTime):mn(i);return o.isEqual(ce.min())&&(o=mn(i)),new ub(o,s.transformResults||[])})(n,e)))):[]}function Cb(t,e){return{documents:[C_(t,e.path)]}}function Nb(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=C_(t,s);const i=(function(h){if(h.length!==0)return k_(en.create(h,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(h){if(h.length!==0)return h.map((f=>(function(m){return{field:is(m.field),direction:Vb(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Rl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:n,parent:s}}function Ob(t){let e=Rb(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=O_(p);return m instanceof en&&a_(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(C){return new xi(os(C.field),(function(k){switch(k){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(m)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,qa(m)?null:m})(n.limit));let l=null;n.startAt&&(l=(function(p){const m=!!p.before,y=p.values||[];return new ca(y,m)})(n.startAt));let h=null;return n.endAt&&(h=(function(p){const m=!p.before,y=p.values||[];return new ca(y,m)})(n.endAt)),YR(e,s,o,i,c,"F",l,h)}function kb(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return oe(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function O_(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=os(n.unaryFilter.field);return Ke.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=os(n.unaryFilter.field);return Ke.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=os(n.unaryFilter.field);return Ke.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=os(n.unaryFilter.field);return Ke.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return oe(61313);default:return oe(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ke.create(os(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return oe(58110);default:return oe(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return en.create(n.compositeFilter.filters.map((r=>O_(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return oe(1026)}})(n.compositeFilter.op))})(t):oe(30097,{filter:t})}function Vb(t){return Eb[t]}function Db(t){return Tb[t]}function xb(t){return Ib[t]}function is(t){return{fieldPath:t.canonicalString()}}function os(t){return st.fromServerFormat(t.fieldPath)}function k_(t){return t instanceof Ke?(function(n){if(n.op==="=="){if(Md(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NAN"}};if(xd(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Md(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NOT_NAN"}};if(xd(n.value))return{unaryFilter:{field:is(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:is(n.field),op:Db(n.op),value:n.value}}})(t):t instanceof en?(function(n){const r=n.getFilters().map((s=>k_(s)));return r.length===1?r[0]:{compositeFilter:{op:xb(n.op),filters:r}}})(t):oe(54877,{filter:t})}function Mb(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function V_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r,s,i=ce.min(),o=ce.min(),c=ot.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new rr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new rr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e){this.gt=e}}function Fb(t){const e=Ob({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Al(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(){this.Dn=new Bb}addToCollectionParentIndex(e,n){return this.Dn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(hr.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(hr.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class Bb{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new Xe(ke.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Xe(ke.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},D_=41943040;class Rt{static withCacheSize(e){return new Rt(e,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rt.DEFAULT_COLLECTION_PERCENTILE=10,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Rt.DEFAULT=new Rt(D_,Rt.DEFAULT_COLLECTION_PERCENTILE,Rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Rt.DISABLED=new Rt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new bs(0)}static ur(){return new bs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yd="LruGarbageCollector",jb=1048576;function Xd([t,e],[n,r]){const s=me(t,n);return s===0?me(e,r):s}class qb{constructor(e){this.Tr=e,this.buffer=new Xe(Xd),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Xd(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class $b{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){Y(Yd,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ds(n)?Y(Yd,"Ignoring IndexedDB error during garbage collection: ",n):await Vs(n)}await this.Rr(3e5)}))}}class Hb{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return L.resolve(ja.ue);const r=new qb(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Jd)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Jd):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,c,l,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(h=Date.now(),rs()<=_e.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(h-l)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function Wb(t,e){return new Hb(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gb{constructor(){this.changes=new zr((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,dt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kb{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Ti(r.mutation,s,Dt.empty(),De.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,ye()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=ye()){const s=kr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=ii();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=kr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,ye())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=Fn();const o=Ei(),c=(function(){return Ei()})();return n.forEach(((l,h)=>{const f=r.get(h.key);s.has(h.key)&&(f===void 0||f.mutation instanceof Er)?i=i.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Ti(f.mutation,h,f.mutation.getFieldMask(),De.now())):o.set(h.key,Dt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((h,f)=>o.set(h,f))),n.forEach(((h,f)=>{var p;return c.set(h,new zb(f,(p=o.get(h))!==null&&p!==void 0?p:null))})),c)))}recalculateAndSaveOverlays(e,n){const r=Ei();let s=new Fe(((o,c)=>o-c)),i=ye();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const h=n.get(l);if(h===null)return;let f=r.get(l)||Dt.empty();f=c.applyToLocalView(h,f),r.set(l,f);const p=(s.get(c.batchId)||ye()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),h=l.key,f=l.value,p=g_();f.forEach((m=>{if(!i.has(m)){const y=I_(n.get(m),r.get(m));y!==null&&p.set(m,y),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,h,p))}return L.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return te.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):h_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):L.resolve(kr());let c=Oi,l=i;return o.next((h=>L.forEach(h,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,l,h,ye()))).next((f=>({batchId:c,changes:m_(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new te(n)).next((r=>{let s=ii();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=ii();return this.indexManager.getCollectionParents(e,i).next((c=>L.forEach(c,(l=>{const h=(function(p,m){return new xs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,dt.newInvalidDocument(f)))}));let c=ii();return o.forEach(((l,h)=>{const f=i.get(l);f!==void 0&&Ti(f.mutation,h,Dt.empty(),De.now()),Ga(n,h)&&(c=c.insert(l,h))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qb{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return L.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:mn(s.createTime)}})(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:Fb(s.bundledQuery),readTime:mn(s.readTime)}})(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{constructor(){this.overlays=new Fe(te.comparator),this.kr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=kr();return L.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),L.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const s=kr(),i=n.length+1,o=new te(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return L.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new Fe(((h,f)=>h-f));const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=i.get(h.largestBatchId);f===null&&(f=kr(),i=i.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=kr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((h,f)=>c.set(h,f))),!(c.size()>=s)););return L.resolve(c)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new mb(n,r));let i=this.kr.get(n);i===void 0&&(i=ye(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yb{constructor(){this.sessionToken=ot.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(){this.qr=new Xe(Ze.Qr),this.$r=new Xe(Ze.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new Ze(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new Ze(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new te(new ke([])),r=new Ze(n,e),s=new Ze(n,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new te(new ke([])),r=new Ze(n,e),s=new Ze(n,e+1);let i=ye();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new Ze(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return te.comparator(e.key,n.key)||me(e.Hr,n.Hr)}static Ur(e,n){return me(e.Hr,n.Hr)||te.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new Xe(Ze.Qr)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new pb(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Yr=this.Yr.add(new Ze(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return L.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?gu:this.er-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ze(n,0),s=new Ze(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const c=this.Zr(o.Hr);i.push(c)})),L.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Xe(me);return n.forEach((s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(c=>{r=r.add(c.Hr)}))})),L.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;te.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new te(i),0);let c=new Xe(me);return this.Yr.forEachWhile((l=>{const h=l.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(c=c.add(l.Hr)),!0)}),o),L.resolve(this.ei(c))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){be(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return L.forEach(n.mutations,(s=>{const i=new Ze(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new Ze(n,0),s=this.Yr.firstAfterOrEqual(r);return L.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zb{constructor(e){this.ni=e,this.docs=(function(){return new Fe(te.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():dt.newInvalidDocument(n))}getEntries(e,n){let r=Fn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():dt.newInvalidDocument(s))})),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Fn();const o=n.path,c=new te(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:h,value:{document:f}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||CR(PR(f),r)<=0||(s.has(f.key)||Ga(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return L.resolve(i)}getAllFromCollectionGroup(e,n,r,s){oe(9500)}ri(e,n){return L.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new eS(this)}getSize(e){return L.resolve(this.size)}}class eS extends Gb{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),L.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.persistence=e,this.ii=new zr((n=>vu(n)),Eu),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.si=0,this.oi=new bu,this.targetCount=0,this._i=bs.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),L.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new bs(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.hr(n),L.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),L.waitFor(i).next((()=>s))}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),L.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(e,n){this.ai={},this.overlays={},this.ui=new ja(0),this.ci=!1,this.ci=!0,this.li=new Yb,this.referenceDelegate=e(this),this.hi=new tS(this),this.indexManager=new Ub,this.remoteDocumentCache=(function(s){return new Zb(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new Lb(n),this.Ti=new Qb(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Jb,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new Xb(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new nS(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return L.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class nS extends OR{constructor(e){super(),this.currentSequenceNumber=e}}class Su{constructor(e){this.persistence=e,this.Ai=new bu,this.Ri=null}static Vi(e){return new Su(e)}get mi(){if(this.Ri)return this.Ri;throw oe(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.mi,(r=>{const s=te.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,ce.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return L.or([()=>L.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class fa{constructor(e,n){this.persistence=e,this.gi=new zr((r=>DR(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=Wb(this,n)}static Vi(e,n){return new fa(e,n)}Ii(){}di(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return L.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?L.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,n).next((c=>{c||(r++,i.removeEntry(o,ce.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),L.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=xo(e.data.value)),n}Sr(e,n,r){return L.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return L.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=ye(),s=ye();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Pu(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sS{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return DI()?8:kR(gt())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new rS;return this.ws(e,n,o).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,n,o,c.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(rs()<=_e.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",ss(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),L.resolve()):(rs()<=_e.DEBUG&&Y("QueryEngine","Query:",ss(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(rs()<=_e.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",ss(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,pn(n))):L.resolve())}ps(e,n){if(Bd(n))return L.resolve(null);let r=pn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Al(n,null,"F"),r=pn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=ye(...i);return this.gs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const h=this.bs(n,c);return this.Ds(n,h,o,l.readTime)?this.ps(e,Al(n,null,"F")):this.vs(e,h,n,l)}))))})))))}ys(e,n,r,s){return Bd(n)||s.isEqual(ce.min())?L.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?L.resolve(null):(rs()<=_e.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ss(n)),this.vs(e,o,n,SR(s,Oi)).next((c=>c)))}))}bs(e,n){let r=new Xe(d_(e));return n.forEach(((s,i)=>{Ga(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return rs()<=_e.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",ss(n)),this.gs.getDocumentsMatchingQuery(e,n,hr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="LocalStore",iS=3e8;class oS{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new Fe(me),this.Ms=new zr((i=>vu(i)),Eu),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Kb(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function aS(t,e,n,r){return new oS(t,e,n,r)}async function M_(t,e){const n=le(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=ye();for(const h of s){o.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}for(const h of i){c.push(h.batchId);for(const f of h.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((h=>({Bs:h,removedBatchIds:o,addedBatchIds:c})))}))}))}function cS(t,e){const n=le(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(c,l,h,f){const p=h.batch,m=p.keys();let y=L.resolve();return m.forEach((C=>{y=y.next((()=>f.getEntry(l,C))).next((N=>{const k=h.docVersions.get(C);be(k!==null,48541),N.version.compareTo(k)<0&&(p.applyToRemoteDocument(N,h),N.isValidDocument()&&(N.setReadTime(h.commitVersion),f.addEntry(N)))}))})),y.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=ye();for(let h=0;h<c.mutationResults.length;++h)c.mutationResults[h].transformResults.length>0&&(l=l.add(c.batch.mutations[h].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function L_(t){const e=le(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function lS(t,e){const n=le(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.hi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.hi.addMatchingKeys(i,f.addedDocuments,p))));let y=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?y=y.withResumeToken(ot.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):f.resumeToken.approximateByteSize()>0&&(y=y.withResumeToken(f.resumeToken,r)),s=s.insert(p,y),(function(N,k,$){return N.resumeToken.approximateByteSize()===0||k.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=iS?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0})(m,y,f)&&c.push(n.hi.updateTargetData(i,y))}));let l=Fn(),h=ye();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(uS(i,o,e.documentUpdates).next((f=>{l=f.Ls,h=f.ks}))),!r.isEqual(ce.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next((p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return L.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,h))).next((()=>l))})).then((i=>(n.Fs=s,i)))}function uS(t,e,n){let r=ye(),s=ye();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Fn();return n.forEach(((c,l)=>{const h=i.get(c);l.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ce.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!h.isValidDocument()||l.version.compareTo(h.version)>0||l.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Y(Cu,"Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",l.version)})),{Ls:o,ks:s}}))}function hS(t,e){const n=le(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=gu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function fS(t,e){const n=le(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,L.resolve(s)):n.hi.allocateTargetId(r).next((o=>(s=new rr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function Cl(t,e,n){const r=le(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ds(o))throw o;Y(Cu,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Zd(t,e,n){const r=le(t);let s=ce.min(),i=ye();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,h,f){const p=le(l),m=p.Ms.get(f);return m!==void 0?L.resolve(p.Fs.get(m)):p.hi.getTargetData(h,f)})(r,o,pn(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:ye()))).next((c=>(dS(r,ZR(e),c),{documents:c,qs:i})))))}function dS(t,e,n){let r=t.xs.get(e)||ce.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class ep{constructor(){this.activeTargetIds=ib()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class pS{constructor(){this.Fo=new ep,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new ep,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp="ConnectivityMonitor";class np{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){Y(tp,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){Y(tp,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ro=null;function Nl(){return Ro===null?Ro=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ro++,"0x"+Ro.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qc="RestConnection",gS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class _S{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===oa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Nl(),c=this.Go(e,n.toUriEncodedString());Y(qc,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:h}=new URL(c),f=Wr(h);return this.jo(e,c,l,r,f).then((p=>(Y(qc,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw ur(qc,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ks})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=gS[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut="WebChannelConnection";class vS extends _S{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=Nl();return new Promise(((c,l)=>{const h=new Ug;h.setWithCredentials(!0),h.listenOnce(Bg.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case Do.NO_ERROR:const p=h.getResponseJson();Y(ut,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Do.TIMEOUT:Y(ut,`RPC '${e}' ${o} timed out`),l(new J(x.DEADLINE_EXCEEDED,"Request time out"));break;case Do.HTTP_ERROR:const m=h.getStatus();if(Y(ut,`RPC '${e}' ${o} failed with status:`,m,"response text:",h.getResponseText()),m>0){let y=h.getResponseJson();Array.isArray(y)&&(y=y[0]);const C=y==null?void 0:y.error;if(C&&C.status&&C.message){const N=(function($){const U=$.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(U)>=0?U:x.UNKNOWN})(C.status);l(new J(N,C.message))}else l(new J(x.UNKNOWN,"Server responded with status "+h.getStatus()))}else l(new J(x.UNAVAILABLE,"Connection failed."));break;default:oe(9055,{c_:e,streamId:o,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{Y(ut,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);Y(ut,`RPC '${e}' ${o} sending request:`,s),h.send(n,"POST",f,r,15)}))}P_(e,n,r){const s=Nl(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=$g(),c=qg(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(l.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Y(ut,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.T_(p);let m=!1,y=!1;const C=new yS({Ho:k=>{y?Y(ut,`Not sending because RPC '${e}' stream ${s} is closed:`,k):(m||(Y(ut,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Y(ut,`RPC '${e}' stream ${s} sending:`,k),p.send(k))},Yo:()=>p.close()}),N=(k,$,U)=>{k.listen($,(j=>{try{U(j)}catch(H){setTimeout((()=>{throw H}),0)}}))};return N(p,si.EventType.OPEN,(()=>{y||(Y(ut,`RPC '${e}' stream ${s} transport opened.`),C.s_())})),N(p,si.EventType.CLOSE,(()=>{y||(y=!0,Y(ut,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(p))})),N(p,si.EventType.ERROR,(k=>{y||(y=!0,ur(ut,`RPC '${e}' stream ${s} transport errored. Name:`,k.name,"Message:",k.message),C.__(new J(x.UNAVAILABLE,"The operation could not be completed")))})),N(p,si.EventType.MESSAGE,(k=>{var $;if(!y){const U=k.data[0];be(!!U,16349);const j=U,H=(j==null?void 0:j.error)||(($=j[0])===null||$===void 0?void 0:$.error);if(H){Y(ut,`RPC '${e}' stream ${s} received error:`,H);const de=H.status;let fe=(function(I){const A=ze[I];if(A!==void 0)return A_(A)})(de),w=H.message;fe===void 0&&(fe=x.INTERNAL,w="Unknown error status: "+de+" with message "+H.message),y=!0,C.__(new J(fe,w)),p.close()}else Y(ut,`RPC '${e}' stream ${s} received:`,U),C.a_(U)}})),N(c,jg.STAT_EVENT,(k=>{k.stat===_l.PROXY?Y(ut,`RPC '${e}' stream ${s} detected buffering proxy`):k.stat===_l.NOPROXY&&Y(ut,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.o_()}),0),C}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function $c(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ja(t){return new wb(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rp="PersistentStream";class U_{constructor(e,n,r,s,i,o,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new F_(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(Ln(n.toString()),Ln("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new J(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return Y(rp,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(Y(rp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ES extends U_{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=bb(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?mn(o.readTime):ce.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Pl(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=Il(l)?{documents:Cb(i,l)}:{query:Nb(i,l).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=S_(i,o.resumeToken);const h=Rl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}else if(o.snapshotVersion.compareTo(ce.min())>0){c.readTime=ha(i,o.snapshotVersion.toTimestamp());const h=Rl(i,o.expectedCount);h!==null&&(c.expectedCount=h)}return c})(this.serializer,e);const r=kb(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Pl(this.serializer),n.removeTarget=e,this.k_(n)}}class TS extends U_{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=Pb(e.writeResults,e.commitTime),r=mn(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Pl(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>Sb(this.serializer,r)))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{}class wS extends IS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new J(x.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,bl(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(x.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Jo(e,bl(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new J(x.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class AS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Ln(n),this._a=!1):Y("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r="RemoteStore";class RS{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{Kr(this)&&(Y($r,"Restarting streams for network reachability change."),await(async function(l){const h=le(l);h.Ia.add(4),await Yi(h),h.Aa.set("Unknown"),h.Ia.delete(4),await Ya(h)})(this))}))})),this.Aa=new AS(r,s)}}async function Ya(t){if(Kr(t))for(const e of t.da)await e(!0)}async function Yi(t){for(const e of t.da)await e(!1)}function B_(t,e){const n=le(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Vu(n)?ku(n):Ms(n).x_()&&Ou(n,e))}function Nu(t,e){const n=le(t),r=Ms(n);n.Ta.delete(e),r.x_()&&j_(n,e),n.Ta.size===0&&(r.x_()?r.B_():Kr(n)&&n.Aa.set("Unknown"))}function Ou(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ms(t).H_(e)}function j_(t,e){t.Ra.$e(e),Ms(t).Y_(e)}function ku(t){t.Ra=new vb({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Ms(t).start(),t.Aa.aa()}function Vu(t){return Kr(t)&&!Ms(t).M_()&&t.Ta.size>0}function Kr(t){return le(t).Ia.size===0}function q_(t){t.Ra=void 0}async function bS(t){t.Aa.set("Online")}async function SS(t){t.Ta.forEach(((e,n)=>{Ou(t,e)}))}async function PS(t,e){q_(t),Vu(t)?(t.Aa.la(e),ku(t)):t.Aa.set("Unknown")}async function CS(t,e,n){if(t.Aa.set("Online"),e instanceof b_&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ta.delete(c),s.Ra.removeTarget(c))})(t,e)}catch(r){Y($r,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await da(t,r)}else if(e instanceof Fo?t.Ra.Ye(e):e instanceof R_?t.Ra.it(e):t.Ra.et(e),!n.isEqual(ce.min()))try{const r=await L_(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Ra.Pt(o);return c.targetChanges.forEach(((l,h)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ta.get(h);f&&i.Ta.set(h,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,h)=>{const f=i.Ta.get(l);if(!f)return;i.Ta.set(l,f.withResumeToken(ot.EMPTY_BYTE_STRING,f.snapshotVersion)),j_(i,l);const p=new rr(f.target,l,h,f.sequenceNumber);Ou(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){Y($r,"Failed to raise snapshot:",r),await da(t,r)}}async function da(t,e,n){if(!Ds(e))throw e;t.Ia.add(1),await Yi(t),t.Aa.set("Offline"),n||(n=()=>L_(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Y($r,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Ya(t)}))}function $_(t,e){return e().catch((n=>da(t,n,e)))}async function Xa(t){const e=le(t),n=mr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:gu;for(;NS(e);)try{const s=await hS(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,OS(e,s)}catch(s){await da(e,s)}H_(e)&&W_(e)}function NS(t){return Kr(t)&&t.Pa.length<10}function OS(t,e){t.Pa.push(e);const n=mr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function H_(t){return Kr(t)&&!mr(t).M_()&&t.Pa.length>0}function W_(t){mr(t).start()}async function kS(t){mr(t).na()}async function VS(t){const e=mr(t);for(const n of t.Pa)e.X_(n.mutations)}async function DS(t,e,n){const r=t.Pa.shift(),s=wu.from(r,e,n);await $_(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Xa(t)}async function xS(t,e){e&&mr(t).Z_&&await(async function(r,s){if((function(o){return _b(o)&&o!==x.ABORTED})(s.code)){const i=r.Pa.shift();mr(r).N_(),await $_(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Xa(r)}})(t,e),H_(t)&&W_(t)}async function sp(t,e){const n=le(t);n.asyncQueue.verifyOperationInProgress(),Y($r,"RemoteStore received new credentials");const r=Kr(n);n.Ia.add(3),await Yi(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Ya(n)}async function MS(t,e){const n=le(t);e?(n.Ia.delete(2),await Ya(n)):e||(n.Ia.add(2),await Yi(n),n.Aa.set("Unknown"))}function Ms(t){return t.Va||(t.Va=(function(n,r,s){const i=le(n);return i.ia(),new ES(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:bS.bind(null,t),e_:SS.bind(null,t),n_:PS.bind(null,t),J_:CS.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),Vu(t)?ku(t):t.Aa.set("Unknown")):(await t.Va.stop(),q_(t))}))),t.Va}function mr(t){return t.ma||(t.ma=(function(n,r,s){const i=le(n);return i.ia(),new TS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:kS.bind(null,t),n_:xS.bind(null,t),ea:VS.bind(null,t),ta:DS.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await Xa(t)):(await t.ma.stop(),t.Pa.length>0&&(Y($r,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new On,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Du(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function xu(t,e){if(Ln("AsyncQueue",`${e}: ${t}`),Ds(t))return new J(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{static emptySet(e){return new _s(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||te.comparator(n.key,r.key):(n,r)=>te.comparator(n.key,r.key),this.keyedMap=ii(),this.sortedSet=new Fe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _s)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new _s;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(){this.fa=new Fe(te.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):oe(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Ss{constructor(e,n,r,s,i,o,c,l,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new Ss(e,n,_s.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Wa(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class FS{constructor(){this.queries=op(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=le(n),i=s.queries;s.queries=op(),i.forEach(((o,c)=>{for(const l of c.wa)l.onError(r)}))})(this,new J(x.ABORTED,"Firestore shutting down"))}}function op(){return new zr((t=>f_(t)),Wa)}async function Mu(t,e){const n=le(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new LS,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=xu(o,`Initialization of query '${ss(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&Fu(n)}async function Lu(t,e){const n=le(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function US(t,e){const n=le(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.wa)c.Ca(s)&&(r=!0);o.ya=s}}r&&Fu(n)}function BS(t,e,n){const r=le(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function Fu(t){t.Da.forEach((e=>{e.next()}))}var Ol,ap;(ap=Ol||(Ol={})).Fa="default",ap.Cache="cache";class Uu{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ss(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Ss.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Ol.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e){this.key=e}}class z_{constructor(e){this.key=e}}class jS{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ye(),this.mutatedKeys=ye(),this.Xa=d_(e),this.eu=new _s(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new ip,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),y=Ga(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),N=!!y&&(y.hasLocalMutations||this.mutatedKeys.has(y.key)&&y.hasCommittedMutations);let k=!1;m&&y?m.data.isEqual(y.data)?C!==N&&(r.track({type:3,doc:y}),k=!0):this.iu(m,y)||(r.track({type:2,doc:y}),k=!0,(l&&this.Xa(y,l)>0||h&&this.Xa(y,h)<0)&&(c=!0)):!m&&y?(r.track({type:0,doc:y}),k=!0):m&&!y&&(r.track({type:1,doc:m}),k=!0,(l||h)&&(c=!0)),k&&(y?(o=o.add(y),i=N?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:c,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,p)=>(function(y,C){const N=k=>{switch(k){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return oe(20277,{At:k})}};return N(y)-N(C)})(f.type,p.type)||this.Xa(f.doc,p.doc))),this.su(r),s=s!=null&&s;const c=n&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,h=l!==this.Ya;return this.Ya=l,o.length!==0||h?{snapshot:new Ss(this.query,e.eu,i,o,e.mutatedKeys,l===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new ip,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ye(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new z_(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new G_(r))})),n}uu(e){this.Ha=e.qs,this.Za=ye();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Ss.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Bu="SyncEngine";class qS{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class $S{constructor(e){this.key=e,this.lu=!1}}class HS{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new zr((c=>f_(c)),Wa),this.Tu=new Map,this.Iu=new Set,this.du=new Fe(te.comparator),this.Eu=new Map,this.Au=new bu,this.Ru={},this.Vu=new Map,this.mu=bs.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function WS(t,e,n=!0){const r=Z_(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await K_(r,e,n,!0),s}async function GS(t,e){const n=Z_(t);await K_(n,e,!0,!1)}async function K_(t,e,n,r){const s=await fS(t.localStore,pn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await zS(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&B_(t.remoteStore,s),c}async function zS(t,e,n,r,s){t.gu=(p,m,y)=>(async function(N,k,$,U){let j=k.view.nu($);j.Ds&&(j=await Zd(N.localStore,k.query,!1).then((({documents:w})=>k.view.nu(w,j))));const H=U&&U.targetChanges.get(k.targetId),de=U&&U.targetMismatches.get(k.targetId)!=null,fe=k.view.applyChanges(j,N.isPrimaryClient,H,de);return lp(N,k.targetId,fe._u),fe.snapshot})(t,p,m,y);const i=await Zd(t.localStore,e,!0),o=new jS(e,i.qs),c=o.nu(i.documents),l=Ji.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),h=o.applyChanges(c,t.isPrimaryClient,l);lp(t,n,h._u);const f=new qS(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),h.snapshot}async function KS(t,e,n){const r=le(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!Wa(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Cl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Nu(r.remoteStore,s.targetId),kl(r,s.targetId)})).catch(Vs)):(kl(r,s.targetId),await Cl(r.localStore,s.targetId,!0))}async function QS(t,e){const n=le(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Nu(n.remoteStore,r.targetId))}async function JS(t,e,n){const r=rP(t);try{const s=await(function(o,c){const l=le(o),h=De.now(),f=c.reduce(((y,C)=>y.add(C.key)),ye());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(y=>{let C=Fn(),N=ye();return l.Os.getEntries(y,f).next((k=>{C=k,C.forEach((($,U)=>{U.isValidDocument()||(N=N.add($))}))})).next((()=>l.localDocuments.getOverlayedDocuments(y,C))).next((k=>{p=k;const $=[];for(const U of c){const j=fb(U,p.get(U.key).overlayedDocument);j!=null&&$.push(new Er(U.key,j,s_(j.value.mapValue),Qt.exists(!0)))}return l.mutationQueue.addMutationBatch(y,h,$,c)})).next((k=>{m=k;const $=k.applyToLocalDocumentSet(p,N);return l.documentOverlayCache.saveOverlays(y,k.batchId,$)}))})).then((()=>({batchId:m.batchId,changes:m_(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let h=o.Ru[o.currentUser.toKey()];h||(h=new Fe(me)),h=h.insert(c,l),o.Ru[o.currentUser.toKey()]=h})(r,s.batchId,n),await Xi(r,s.changes),await Xa(r.remoteStore)}catch(s){const i=xu(s,"Failed to persist write");n.reject(i)}}async function Q_(t,e){const n=le(t);try{const r=await lS(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Eu.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?be(o.lu,14607):s.removedDocuments.size>0&&(be(o.lu,42227),o.lu=!1))})),await Xi(n,r,e)}catch(r){await Vs(r)}}function cp(t,e,n){const r=le(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=le(o);l.onlineState=c;let h=!1;l.queries.forEach(((f,p)=>{for(const m of p.wa)m.va(c)&&(h=!0)})),h&&Fu(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function YS(t,e,n){const r=le(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new Fe(te.comparator);o=o.insert(i,dt.newNoDocument(i,ce.min()));const c=ye().add(i),l=new Qa(ce.min(),new Map,new Fe(me),o,c);await Q_(r,l),r.du=r.du.remove(i),r.Eu.delete(e),ju(r)}else await Cl(r.localStore,e,!1).then((()=>kl(r,e,n))).catch(Vs)}async function XS(t,e){const n=le(t),r=e.batch.batchId;try{const s=await cS(n.localStore,e);Y_(n,r,null),J_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xi(n,s)}catch(s){await Vs(s)}}async function ZS(t,e,n){const r=le(t);try{const s=await(function(o,c){const l=le(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let f;return l.mutationQueue.lookupMutationBatch(h,c).next((p=>(be(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(h,p)))).next((()=>l.mutationQueue.performConsistencyCheck(h))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(h,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,f))).next((()=>l.localDocuments.getDocuments(h,f)))}))})(r.localStore,e);Y_(r,e,n),J_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Xi(r,s)}catch(s){await Vs(s)}}function J_(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function Y_(t,e,n){const r=le(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function kl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||X_(t,r)}))}function X_(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Nu(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),ju(t))}function lp(t,e,n){for(const r of n)r instanceof G_?(t.Au.addReference(r.key,e),eP(t,r)):r instanceof z_?(Y(Bu,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||X_(t,r.key)):oe(19791,{yu:r})}function eP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(Y(Bu,"New document in limbo: "+n),t.Iu.add(r),ju(t))}function ju(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new te(ke.fromString(e)),r=t.mu.next();t.Eu.set(r,new $S(n)),t.du=t.du.insert(n,r),B_(t.remoteStore,new rr(pn(Ha(n.path)),r,"TargetPurposeLimboResolution",ja.ue))}}async function Xi(t,e,n){const r=le(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,l)=>{o.push(r.gu(l,e,n).then((h=>{var f;if((h||n)&&r.isPrimaryClient){const p=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(h){s.push(h);const p=Pu.Es(l.targetId,h);i.push(p)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(l,h){const f=le(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>L.forEach(h,(m=>L.forEach(m.Is,(y=>f.persistence.referenceDelegate.addReference(p,m.targetId,y))).next((()=>L.forEach(m.ds,(y=>f.persistence.referenceDelegate.removeReference(p,m.targetId,y)))))))))}catch(p){if(!Ds(p))throw p;Y(Cu,"Failed to update sequence numbers: "+p)}for(const p of h){const m=p.targetId;if(!p.fromCache){const y=f.Fs.get(m),C=y.snapshotVersion,N=y.withLastLimboFreeSnapshotVersion(C);f.Fs=f.Fs.insert(m,N)}}})(r.localStore,i))}async function tP(t,e){const n=le(t);if(!n.currentUser.isEqual(e)){Y(Bu,"User change. New user:",e.toKey());const r=await M_(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((c=>{c.forEach((l=>{l.reject(new J(x.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xi(n,r.Bs)}}function nP(t,e){const n=le(t),r=n.Eu.get(e);if(r&&r.lu)return ye().add(r.key);{let s=ye();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const c=n.Pu.get(o);s=s.unionWith(c.view.tu)}return s}}function Z_(t){const e=le(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Q_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=nP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=YS.bind(null,e),e.hu.J_=US.bind(null,e.eventManager),e.hu.pu=BS.bind(null,e.eventManager),e}function rP(t){const e=le(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XS.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZS.bind(null,e),e}class pa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ja(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return aS(this.persistence,new sS,e.initialUser,this.serializer)}Du(e){return new x_(Su.Vi,this.serializer)}bu(e){return new pS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}pa.provider={build:()=>new pa};class sP extends pa{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){be(this.persistence.referenceDelegate instanceof fa,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new $b(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Rt.withCacheSize(this.cacheSizeBytes):Rt.DEFAULT;return new x_((r=>fa.Vi(r,n)),this.serializer)}}class Vl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>cp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=tP.bind(null,this.syncEngine),await MS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new FS})()}createDatastore(e){const n=Ja(e.databaseInfo.databaseId),r=(function(i){return new vS(i)})(e.databaseInfo);return(function(i,o,c,l){return new wS(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new RS(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>cp(this.syncEngine,n,0)),(function(){return np.C()?new np:new mS})())}createSyncEngine(e,n){return(function(s,i,o,c,l,h,f){const p=new HS(s,i,o,c,l,h);return f&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=le(s);Y($r,"RemoteStore shutting down."),i.Ia.add(5),await Yi(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Vl.provider={build:()=>new Vl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Ln("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gr="FirestoreClient";class iP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ht.UNAUTHENTICATED,this.clientId=mu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{Y(gr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(Y(gr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new On;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=xu(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Hc(t,e){t.asyncQueue.verifyOperationInProgress(),Y(gr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await M_(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{ur("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{Y("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{ur("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function up(t,e){t.asyncQueue.verifyOperationInProgress();const n=await oP(t);Y(gr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>sp(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>sp(e.remoteStore,s))),t._onlineComponents=e}async function oP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y(gr,"Using user provided OfflineComponentProvider");try{await Hc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;ur("Error using user provided cache. Falling back to memory cache: "+n),await Hc(t,new pa)}}else Y(gr,"Using default OfflineComponentProvider"),await Hc(t,new sP(void 0));return t._offlineComponents}async function ey(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y(gr,"Using user provided OnlineComponentProvider"),await up(t,t._uninitializedComponentsProvider._online)):(Y(gr,"Using default OnlineComponentProvider"),await up(t,new Vl))),t._onlineComponents}function aP(t){return ey(t).then((e=>e.syncEngine))}async function ma(t){const e=await ey(t),n=e.eventManager;return n.onListen=WS.bind(null,e.syncEngine),n.onUnlisten=KS.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=GS.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=QS.bind(null,e.syncEngine),n}function cP(t,e,n={}){const r=new On;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,h){const f=new qu({next:m=>{f.Ou(),o.enqueueAndForget((()=>Lu(i,p)));const y=m.docs.has(c);!y&&m.fromCache?h.reject(new J(x.UNAVAILABLE,"Failed to get document because the client is offline.")):y&&m.fromCache&&l&&l.source==="server"?h.reject(new J(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Uu(Ha(c.path),f,{includeMetadataChanges:!0,ka:!0});return Mu(i,p)})(await ma(t),t.asyncQueue,e,n,r))),r.promise}function lP(t,e,n={}){const r=new On;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,h){const f=new qu({next:m=>{f.Ou(),o.enqueueAndForget((()=>Lu(i,p))),m.fromCache&&l.source==="server"?h.reject(new J(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(m)},error:m=>h.reject(m)}),p=new Uu(c,f,{includeMetadataChanges:!0,ka:!0});return Mu(i,p)})(await ma(t),t.asyncQueue,e,n,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hp=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny="firestore.googleapis.com",fp=!0;class dp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=ny,this.ssl=fp}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:fp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=D_;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<jb)throw new J(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}bR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ty((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Za{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new dp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new dp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new _R;switch(r.type){case"firstParty":return new TR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=hp.get(n);r&&(Y("ComponentProvider","Removing Datastore"),hp.delete(n),r.terminate())})(this),Promise.resolve()}}function uP(t,e,n,r={}){var s;t=qt(t,Za);const i=Wr(e),o=t._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i&&(eu(`https://${l}`),tu("Firestore",!0)),o.host!==ny&&o.host!==l&&ur("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:l,ssl:i,emulatorOptions:r});if(!Fr(h,c)&&(t._setSettings(h),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=ht.MOCK_USER;else{f=RI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new J(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new ht(m)}t._authCredentials=new yR(new Wg(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Tr(this.firestore,e,this._query)}}class He{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ar(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}toJSON(){return{type:He._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Ki(n,He._jsonSchema))return new He(e,r||null,new te(ke.fromString(n.referencePath)))}}He._jsonSchemaVersion="firestore/documentReference/1.0",He._jsonSchema={type:Je("string",He._jsonSchemaVersion),referencePath:Je("string")};class ar extends Tr{constructor(e,n,r){super(e,n,Ha(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new te(e))}withConverter(e){return new ar(this.firestore,e,this._path)}}function yC(t,e,...n){if(t=qe(t),zg("collection","path",e),t instanceof Za){const r=ke.fromString(e,...n);return bd(r),new ar(t,null,r)}{if(!(t instanceof He||t instanceof ar))throw new J(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return bd(r),new ar(t.firestore,null,r)}}function hP(t,e,...n){if(t=qe(t),arguments.length===1&&(e=mu.newId()),zg("doc","path",e),t instanceof Za){const r=ke.fromString(e,...n);return Rd(r),new He(t,null,new te(r))}{if(!(t instanceof He||t instanceof ar))throw new J(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Rd(r),new He(t.firestore,t instanceof ar?t.converter:null,new te(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pp="AsyncQueue";class mp{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new F_(this,"async_queue_retry"),this.oc=()=>{const r=$c();r&&Y(pp,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=$c();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=$c();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new On;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ds(e))throw e;Y(pp,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Ln("INTERNAL UNHANDLED ERROR: ",gp(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=Du.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&oe(47125,{hc:gp(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function gp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class _r extends Za{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new mp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new mp(e),this._firestoreClient=void 0,await e}}}function fP(t,e){const n=typeof t=="object"?t:su(),r=typeof t=="string"?t:oa,s=Ma(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Jm("firestore");i&&uP(s,...i)}return s}function ec(t){if(t._terminated)throw new J(x.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||dP(t),t._firestoreClient}function dP(t){var e,n,r;const s=t._freezeSettings(),i=(function(c,l,h,f){return new LR(c,l,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,ty(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new iP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bt(ot.fromBase64String(e))}catch(n){throw new J(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bt(ot.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ki(e,Bt._jsonSchema))return Bt.fromBase64String(e.bytes)}}Bt._jsonSchemaVersion="firestore/bytes/1.0",Bt._jsonSchema={type:Je("string",Bt._jsonSchemaVersion),bytes:Je("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new J(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new st(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new J(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new J(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return me(this._lat,e._lat)||me(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:gn._jsonSchemaVersion}}static fromJSON(e){if(Ki(e,gn._jsonSchema))return new gn(e.latitude,e.longitude)}}gn._jsonSchemaVersion="firestore/geoPoint/1.0",gn._jsonSchema={type:Je("string",gn._jsonSchemaVersion),latitude:Je("number"),longitude:Je("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:_n._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ki(e,_n._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new _n(e.vectorValues);throw new J(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}_n._jsonSchemaVersion="firestore/vectorValue/1.0",_n._jsonSchema={type:Je("string",_n._jsonSchemaVersion),vectorValues:Je("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pP=/^__.*__$/;class mP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Er(e,this.data,this.fieldMask,n,this.fieldTransforms):new Qi(e,this.data,n,this.fieldTransforms)}}class ry{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Er(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function sy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw oe(40011,{Ec:t})}}class Hu{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Hu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ga(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(sy(this.Ec)&&pP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class gP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ja(e)}Dc(e,n,r,s=!1){return new Hu({Ec:e,methodName:n,bc:r,path:st.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Wu(t){const e=t._freezeSettings(),n=Ja(t._databaseId);return new gP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _P(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);Gu("Data must be an object, but it was:",o,r);const c=iy(r,o);let l,h;if(i.merge)l=new Dt(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Dl(e,p,n);if(!o.contains(m))throw new J(x.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);ay(f,m)||f.push(m)}l=new Dt(f),h=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,h=o.fieldTransforms;return new mP(new bt(c),l,h)}class nc extends $u{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof nc}}function yP(t,e,n,r){const s=t.Dc(1,e,n);Gu("Data must be an object, but it was:",s,r);const i=[],o=bt.empty();vr(r,((l,h)=>{const f=zu(e,l,n);h=qe(h);const p=s.gc(f);if(h instanceof nc)i.push(f);else{const m=Zi(h,p);m!=null&&(i.push(f),o.set(f,m))}}));const c=new Dt(i);return new ry(o,c,s.fieldTransforms)}function vP(t,e,n,r,s,i){const o=t.Dc(1,e,n),c=[Dl(e,r,n)],l=[s];if(i.length%2!=0)throw new J(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Dl(e,i[m])),l.push(i[m+1]);const h=[],f=bt.empty();for(let m=c.length-1;m>=0;--m)if(!ay(h,c[m])){const y=c[m];let C=l[m];C=qe(C);const N=o.gc(y);if(C instanceof nc)h.push(y);else{const k=Zi(C,N);k!=null&&(h.push(y),f.set(y,k))}}const p=new Dt(h);return new ry(f,p,o.fieldTransforms)}function EP(t,e,n,r=!1){return Zi(n,t.Dc(r?4:3,e))}function Zi(t,e){if(oy(t=qe(t)))return Gu("Unsupported field value:",e,t),iy(t,e);if(t instanceof $u)return(function(r,s){if(!sy(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=Zi(c,s.yc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=qe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return ob(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=De.fromDate(r);return{timestampValue:ha(s.serializer,i)}}if(r instanceof De){const i=new De(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ha(s.serializer,i)}}if(r instanceof gn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Bt)return{bytesValue:S_(s.serializer,r._byteString)};if(r instanceof He){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ru(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof _n)return(function(o,c){return{mapValue:{fields:{[n_]:{stringValue:r_},[aa]:{arrayValue:{values:o.toArray().map((h=>{if(typeof h!="number")throw c.wc("VectorValues must only contain numeric values.");return Tu(c.serializer,h)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Ba(r)}`)})(t,e)}function iy(t,e){const n={};return Jg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):vr(t,((r,s)=>{const i=Zi(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function oy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof De||t instanceof gn||t instanceof Bt||t instanceof He||t instanceof $u||t instanceof _n)}function Gu(t,e,n){if(!oy(n)||!Kg(n)){const r=Ba(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function Dl(t,e,n){if((e=qe(e))instanceof tc)return e._internalPath;if(typeof e=="string")return zu(t,e);throw ga("Field path arguments must be of type string or ",t,!1,void 0,n)}const TP=new RegExp("[~\\*/\\[\\]]");function zu(t,e,n){if(e.search(TP)>=0)throw ga(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new tc(...e.split("."))._internalPath}catch{throw ga(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ga(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new J(x.INVALID_ARGUMENT,c+t+l)}function ay(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cy{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new IP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class IP extends cy{data(){return super.data()}}function rc(t,e){return typeof e=="string"?zu(t,e):e instanceof tc?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ly(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new J(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ku{}class uy extends Ku{}function vC(t,e,...n){let r=[];e instanceof Ku&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((l=>l instanceof Qu)).length,c=i.filter((l=>l instanceof sc)).length;if(o>1||o>0&&c>0)throw new J(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class sc extends uy{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new sc(e,n,r)}_apply(e){const n=this._parse(e);return hy(e._query,n),new Tr(e.firestore,e.converter,wl(e._query,n))}_parse(e){const n=Wu(e.firestore);return(function(i,o,c,l,h,f,p){let m;if(h.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new J(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){vp(p,f);const C=[];for(const N of p)C.push(yp(l,i,N));m={arrayValue:{values:C}}}else m=yp(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||vp(p,f),m=EP(c,o,p,f==="in"||f==="not-in");return Ke.create(h,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function EC(t,e,n){const r=e,s=rc("where",t);return sc._create(s,r,n)}class Qu extends Ku{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Qu(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:en.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)hy(o,l),o=wl(o,l)})(e._query,n),new Tr(e.firestore,e.converter,wl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ju extends uy{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ju(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new J(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new J(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new xi(i,o)})(e._query,this._field,this._direction);return new Tr(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new xs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function TC(t,e="asc"){const n=e,r=rc("orderBy",t);return Ju._create(r,n)}function yp(t,e,n){if(typeof(n=qe(n))=="string"){if(n==="")throw new J(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!h_(e)&&n.indexOf("/")!==-1)throw new J(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ke.fromString(n));if(!te.isDocumentKey(r))throw new J(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Dd(t,new te(r))}if(n instanceof He)return Dd(t,n._key);throw new J(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Ba(n)}.`)}function vp(t,e){if(!Array.isArray(t)||t.length===0)throw new J(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function hy(t,e){const n=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new J(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new J(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class wP{convertValue(e,n="none"){switch(pr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return $e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw oe(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return vr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[aa].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>$e(o.doubleValue)));return new _n(i)}convertGeoPoint(e){return new gn($e(e.latitude),$e(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$a(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(ki(e));default:return null}}convertTimestamp(e){const n=fr(e);return new De(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);be(V_(r),9688,{name:e});const s=new Vi(r.get(1),r.get(3)),i=new te(r.popFirst(5));return s.isEqual(n)||Ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AP(t,e,n){let r;return r=t?t.toFirestore(e):e,r}class ai{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Mr extends cy{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Uo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Mr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Mr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Mr._jsonSchema={type:Je("string",Mr._jsonSchemaVersion),bundleSource:Je("string","DocumentSnapshot"),bundleName:Je("string"),bundle:Je("string")};class Uo extends Mr{data(e={}){return super.data(e)}}class Lr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ai(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Uo(this._firestore,this._userDataWriter,r.key,r,new ai(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new J(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Uo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ai(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new Uo(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ai(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,f=-1;return c.type!==0&&(h=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:RP(c.type),doc:l,oldIndex:h,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Lr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=mu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function RP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return oe(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IC(t){t=qt(t,He);const e=qt(t.firestore,_r);return cP(ec(e),t._key).then((n=>fy(e,t,n)))}Lr._jsonSchemaVersion="firestore/querySnapshot/1.0",Lr._jsonSchema={type:Je("string",Lr._jsonSchemaVersion),bundleSource:Je("string","QuerySnapshot"),bundleName:Je("string"),bundle:Je("string")};class Yu extends wP{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,n)}}function wC(t){t=qt(t,Tr);const e=qt(t.firestore,_r),n=ec(e),r=new Yu(e);return ly(t._query),lP(n,t._query).then((s=>new Lr(e,r,t,s)))}function AC(t,e,n,...r){t=qt(t,He);const s=qt(t.firestore,_r),i=Wu(s);let o;return o=typeof(e=qe(e))=="string"||e instanceof tc?vP(i,"updateDoc",t._key,e,n,r):yP(i,"updateDoc",t._key,e),Xu(s,[o.toMutation(t._key,Qt.exists(!0))])}function RC(t){return Xu(qt(t.firestore,_r),[new Iu(t._key,Qt.none())])}function bC(t,e){const n=qt(t.firestore,_r),r=hP(t),s=AP(t.converter,e);return Xu(n,[_P(Wu(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,Qt.exists(!1))]).then((()=>r))}function SC(t,...e){var n,r,s;t=qe(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||_p(e[o])||(i=e[o++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(_p(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,h,f;if(t instanceof He)h=qt(t.firestore,_r),f=Ha(t._key.path),l={next:p=>{e[o]&&e[o](fy(h,t,p))},error:e[o+1],complete:e[o+2]};else{const p=qt(t,Tr);h=qt(p.firestore,_r),f=p._query;const m=new Yu(h);l={next:y=>{e[o]&&e[o](new Lr(h,m,p,y))},error:e[o+1],complete:e[o+2]},ly(t._query)}return(function(m,y,C,N){const k=new qu(N),$=new Uu(y,k,C);return m.asyncQueue.enqueueAndForget((async()=>Mu(await ma(m),$))),()=>{k.Ou(),m.asyncQueue.enqueueAndForget((async()=>Lu(await ma(m),$)))}})(ec(h),f,c,l)}function Xu(t,e){return(function(r,s){const i=new On;return r.asyncQueue.enqueueAndForget((async()=>JS(await aP(r),s,i))),i.promise})(ec(t),e)}function fy(t,e,n){const r=n.docs.get(e._key),s=new Yu(t);return new Mr(t,s,e._key,r,new ai(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){ks=s})(Ns),Ur(new lr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new _r(new vR(r.getProvider("auth-internal")),new IR(o,r.getProvider("app-check-internal")),(function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new J(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vi(h.options.projectId,f)})(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),hn(Ed,Td,e),hn(Ed,Td,"esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bP{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Ot(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="us-central1";class SP{constructor(e,n,r,s,i=xl,o=(...c)=>fetch(...c)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new bP(e,n,r,s),this.cancelAllRequests=new Promise(c=>{this.deleteService=()=>Promise.resolve(c())});try{const c=new URL(i);this.customDomain=c.origin+(c.pathname==="/"?"":c.pathname),this.region=xl}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function PP(t,e,n){const r=Wr(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(eu(t.emulatorOrigin),tu("Functions",!0))}const Ep="@firebase/functions",Tp="0.12.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CP="auth-internal",NP="app-check-internal",OP="messaging-internal";function kP(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),i=n.getProvider(CP),o=n.getProvider(OP),c=n.getProvider(NP);return new SP(s,i,o,c,r)};Ur(new lr(dy,e,"PUBLIC").setMultipleInstances(!0)),hn(Ep,Tp,t),hn(Ep,Tp,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(t=su(),e=xl){const r=Ma(qe(t),dy).getImmediate({identifier:e}),s=Jm("functions");return s&&DP(r,...s),r}function DP(t,e,n){PP(qe(t),e,n)}kP();const xP={apiKey:"AIzaSyCL63H3EpeK3A9SgLJ6NxkcWtzOnbZM5uU",authDomain:"qa-website2026.firebaseapp.com",projectId:"qa-website2026",storageBucket:"qa-website2026.appspot.com",messagingSenderId:"207652444805",appId:"1:207652444805:web:e5f9b11f0d4293475727ec"},Zu=tg(xP),cs=dR(Zu),PC=fP(Zu);VP(Zu);const Zs=Ps(null),Wc=Ps(!0);function ic(){const t=Ut(()=>Zs.value!==null);function e(){Wc.value=!0,t0(cs,i=>{var o;i?Zs.value={uid:i.uid,email:i.email||"",displayName:i.displayName||((o=i.email)==null?void 0:o.split("@")[0])||"User",photoURL:i.photoURL||void 0}:Zs.value=null,Wc.value=!1})}async function n(i,o){return(await JA(cs,i,o)).user}async function r(i,o,c){const l=await QA(cs,i,o);return await XA(l.user,{displayName:c}),l.user}async function s(){await n0(cs),Zs.value=null}return{currentUser:Zs,loading:Wc,isAuthenticated:t,init:e,login:n,register:r,logout:s}}const MP={class:"flex h-16 items-center justify-between border-b border-gray-200 px-4"},LP={key:0,class:"flex items-center gap-2"},FP={key:1,class:"mx-auto"},UP={key:0},BP={key:1},jP={class:"flex-1 space-y-1 px-3 py-4"},qP={class:"text-lg"},$P={key:0},HP={class:"border-t border-gray-200 p-4"},WP={key:0,class:"flex items-center gap-3"},GP={class:"flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold"},zP={class:"min-w-0 flex-1"},KP={class:"text-sm font-medium text-gray-900 truncate"},QP={class:"text-xs text-gray-500 truncate"},JP=Cs({__name:"Sidebar",props:{collapsed:{type:Boolean}},emits:["toggle"],setup(t,{emit:e}){const n=e,r=Wm(),s=ic(),i=[{name:"Dashboard",path:"/dashboard",icon:"📊"},{name:"Projects",path:"/projects",icon:"📁"}],o=c=>r.path.startsWith(c);return(c,l)=>{var f,p,m,y,C;const h=Ca("router-link");return Nt(),rn("aside",{class:Ii(["flex flex-col border-r border-gray-200 bg-white transition-all duration-300",t.collapsed?"w-16":"w-64"])},[Ce("div",MP,[t.collapsed?(Nt(),rn("div",FP,[...l[2]||(l[2]=[Ce("span",{class:"text-xl font-bold text-primary-600"},"Q",-1)])])):(Nt(),rn("div",LP,[...l[1]||(l[1]=[Ce("span",{class:"text-xl font-bold text-primary-600"},"QA",-1),Ce("span",{class:"text-sm font-medium text-gray-500"},"Suite",-1)])])),Ce("button",{onClick:l[0]||(l[0]=N=>n("toggle")),class:"rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-700"},[t.collapsed?(Nt(),rn("span",UP,"→")):(Nt(),rn("span",BP,"←"))])]),Ce("nav",jP,[(Nt(),rn(an,null,Hv(i,N=>Qe(h,{key:N.name,to:N.path,class:Ii(["flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",o(N.path)?"bg-primary-50 text-primary-700":"text-gray-600 hover:bg-gray-100 hover:text-gray-900"])},{default:Sa(()=>[Ce("span",qP,Xn(N.icon),1),t.collapsed?lf("",!0):(Nt(),rn("span",$P,Xn(N.name),1))]),_:2},1032,["to","class"])),64))]),Ce("div",HP,[t.collapsed?lf("",!0):(Nt(),rn("div",WP,[Ce("div",GP,Xn(((m=(p=(f=zt(s).currentUser)==null?void 0:f.displayName)==null?void 0:p.charAt(0))==null?void 0:m.toUpperCase())||"U"),1),Ce("div",zP,[Ce("p",KP,Xn((y=zt(s).currentUser)==null?void 0:y.displayName),1),Ce("p",QP,Xn((C=zt(s).currentUser)==null?void 0:C.email),1)])]))])],2)}}}),YP={class:"flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6"},XP={class:"flex items-center gap-4"},ZP={class:"flex items-center gap-4"},eC={class:"flex items-center gap-3"},tC={class:"flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold"},nC={class:"hidden md:block"},rC={class:"text-sm font-medium text-gray-900"},sC=Cs({__name:"Header",props:{user:{}},emits:["toggleSidebar"],setup(t,{emit:e}){const n=e,r=mI(),s=ic();async function i(){await s.logout(),r.push("/login")}return(o,c)=>{var h,f,p,m;const l=Ca("router-link");return Nt(),rn("header",YP,[Ce("div",XP,[Ce("button",{onClick:c[0]||(c[0]=y=>n("toggleSidebar")),class:"rounded-lg p-2 text-gray-500 hover:bg-gray-100 lg:hidden"},[...c[1]||(c[1]=[Ce("svg",{class:"h-5 w-5",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[Ce("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"})],-1)])]),c[2]||(c[2]=Ce("h1",{class:"text-lg font-semibold text-gray-900"},"QA-Suite",-1))]),Ce("div",ZP,[Qe(l,{to:"/projects",class:"btn-secondary text-sm"},{default:Sa(()=>[...c[3]||(c[3]=[Pm("New Project",-1)])]),_:1}),Ce("div",eC,[Ce("div",tC,Xn(((p=(f=(h=t.user)==null?void 0:h.displayName)==null?void 0:f.charAt(0))==null?void 0:p.toUpperCase())||"U"),1),Ce("div",nC,[Ce("p",rC,Xn((m=t.user)==null?void 0:m.displayName),1)]),Ce("button",{onClick:i,class:"text-sm text-gray-500 hover:text-gray-700"},"Logout")])])])}}}),iC={class:"flex h-screen overflow-hidden bg-gray-50"},oC={class:"flex flex-1 flex-col overflow-hidden"},aC={class:"flex-1 overflow-y-auto p-6 scrollbar-thin"},cC=Cs({__name:"AppLayout",setup(t){const e=ic(),n=Ps(!1);function r(){n.value=!n.value}return(s,i)=>{const o=Ca("router-view");return Nt(),rn("div",iC,[Qe(JP,{collapsed:n.value,onToggle:r},null,8,["collapsed"]),Ce("div",oC,[Qe(sC,{user:zt(e).currentUser,onToggleSidebar:r},null,8,["user"]),Ce("main",aC,[Qe(o)])])])}}}),lC=Cs({__name:"App",setup(t){const e=ic(),n=Wm(),r=Ps(!1);return hi(()=>n.meta.requiresAuth,s=>{r.value=s!==!1},{immediate:!0}),om(()=>{e.init()}),(s,i)=>{const o=Ca("router-view");return r.value&&zt(e).isAuthenticated?(Nt(),tl(cC,{key:0},{default:Sa(()=>[Qe(o)]),_:1})):(Nt(),tl(o,{key:1}))}}}),uC="modulepreload",hC=function(t){return"/"+t},Ip={},Qn=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(h){return Promise.all(h.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(h=>{if(h=hC(h),h in Ip)return;Ip[h]=!0;const f=h.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${p}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":uC,f||(m.as="script"),m.crossOrigin="",m.href=h,l&&m.setAttribute("nonce",l),document.head.appendChild(m),f)return new Promise((y,C)=>{m.addEventListener("load",y),m.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${h}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},py=pI({history:GT(),routes:[{path:"/",redirect:"/dashboard"},{path:"/login",name:"Login",component:()=>Qn(()=>import("./LoginView-DC_97mSR.js"),[]),meta:{requiresAuth:!1}},{path:"/dashboard",name:"Dashboard",component:()=>Qn(()=>import("./DashboardView-C6lHfwCR.js"),__vite__mapDeps([0,1])),meta:{requiresAuth:!0}},{path:"/projects",name:"Projects",component:()=>Qn(()=>import("./ProjectsView-Dg_mUDYU.js"),__vite__mapDeps([2,1])),meta:{requiresAuth:!0}},{path:"/projects/:id",name:"ProjectDetail",component:()=>Qn(()=>import("./ProjectDetailView-B8BJcke_.js").then(t=>t.P),__vite__mapDeps([3,1,4,5])),meta:{requiresAuth:!0}},{path:"/projects/:id/audit/:auditId",name:"AuditResults",component:()=>Qn(()=>import("./AuditResultsView-fvYN-6DV.js"),__vite__mapDeps([6,1])),meta:{requiresAuth:!0}},{path:"/projects/:id/bugs",name:"BugList",component:()=>Qn(()=>import("./BugListView-CxoAigM6.js"),__vite__mapDeps([7,1,4])),meta:{requiresAuth:!0}},{path:"/projects/:id/test-cases",name:"TestCases",component:()=>Qn(()=>import("./TestCasesView-CHEUgrOP.js"),__vite__mapDeps([8,1,4])),meta:{requiresAuth:!0}},{path:"/projects/:id/history",name:"TrendHistory",component:()=>Qn(()=>import("./TrendHistoryView-DGroSSEo.js"),__vite__mapDeps([9,1])),meta:{requiresAuth:!0}}]});py.beforeEach(async(t,e,n)=>{t.meta.requiresAuth!==!1?(await cs.authStateReady(),cs.currentUser?n():n("/login")):n()});const eh=sT(lC);eh.use(cT());eh.use(py);eh.mount("#app");export{hi as A,Om as B,mv as C,NE as D,Ae as E,an as F,Gl as G,zl as H,RC as I,AC as J,bC as K,IC as L,vC as M,TC as N,EC as O,SC as P,wC as Q,hP as R,yC as S,De as T,PC as U,Qn as _,Ce as a,fC as b,rn as c,Cs as d,lf as e,Pm as f,ic as g,om as h,am as i,dC as j,Qe as k,Sa as l,Hv as m,Ca as n,Nt as o,tl as p,mC as q,Ps as r,zt as s,Xn as t,mI as u,pC as v,gC as w,Ut as x,Ii as y,Wm as z};
