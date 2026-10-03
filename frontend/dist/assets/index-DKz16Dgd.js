const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/PageAuditsView-BKVE614K.js","assets/PageAuditsView-BaIgoaMw.css","assets/BugListView-Com2ywiF.js","assets/useAI-BOkSxCtl.js","assets/TestCasesView-FPdJf6Mz.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function lu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Oe={},Ps=[],Tn=()=>{},rm=()=>!1,Ga=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),za=t=>t.startsWith("onUpdate:"),pt=Object.assign,uu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vv=Object.prototype.hasOwnProperty,Ne=(t,e)=>vv.call(t,e),he=Array.isArray,Cs=t=>co(t)==="[object Map]",Ks=t=>co(t)==="[object Set]",Ad=t=>co(t)==="[object Date]",pe=t=>typeof t=="function",ze=t=>typeof t=="string",Nn=t=>typeof t=="symbol",xe=t=>t!==null&&typeof t=="object",sm=t=>(xe(t)||pe(t))&&pe(t.then)&&pe(t.catch),im=Object.prototype.toString,co=t=>im.call(t),Ev=t=>co(t).slice(8,-1),om=t=>co(t)==="[object Object]",hu=t=>ze(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,ki=lu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ka=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},wv=/-\w/g,Dt=Ka(t=>t.replace(wv,e=>e.slice(1).toUpperCase())),Tv=/\B([A-Z])/g,Fr=Ka(t=>t.replace(Tv,"-$1").toLowerCase()),Qa=Ka(t=>t.charAt(0).toUpperCase()+t.slice(1)),Yc=Ka(t=>t?`on${Qa(t)}`:""),En=(t,e)=>!Object.is(t,e),Zo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},am=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ja=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let bd;const Ya=()=>bd||(bd=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function du(t){if(he(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=ze(r)?Rv(r):du(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(ze(t)||xe(t))return t}const Iv=/;(?![^(]*\))/g,Av=/:([^]+)/,bv=/\/\*[^]*?\*\//g;function Rv(t){const e={};return t.replace(bv,"").split(Iv).forEach(n=>{if(n){const r=n.split(Av);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Et(t){let e="";if(ze(t))e=t;else if(he(t))for(let n=0;n<t.length;n++){const r=Et(t[n]);r&&(e+=r+" ")}else if(xe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Sv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pv=lu(Sv);function cm(t){return!!t||t===""}function Cv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Qs(t[r],e[r]);return n}function Qs(t,e){if(t===e)return!0;let n=Ad(t),r=Ad(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Nn(t),r=Nn(e),n||r)return t===e;if(n=he(t),r=he(e),n||r)return n&&r?Cv(t,e):!1;if(n=xe(t),r=xe(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Qs(t[o],e[o]))return!1}}return String(t)===String(e)}function fu(t,e){return t.findIndex(n=>Qs(n,e))}const lm=t=>!!(t&&t.__v_isRef===!0),st=t=>ze(t)?t:t==null?"":he(t)||xe(t)&&(t.toString===im||!pe(t.toString))?lm(t)?st(t.value):JSON.stringify(t,um,2):String(t),um=(t,e)=>lm(e)?um(t,e.value):Cs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Xc(r,i)+" =>"]=s,n),{})}:Ks(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Xc(n))}:Nn(e)?Xc(e):xe(e)&&!he(e)&&!om(e)?String(e):e,Xc=(t,e="")=>{var n;return Nn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ht;class hm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ht&&(ht.active?(this.parent=ht,this.index=(ht.scopes||(ht.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const r=this.effects.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}}run(e){if(this._active){const n=ht;try{return ht=this,e()}finally{ht=n}}}on(){++this._on===1&&(this.prevScope=ht,ht=this)}off(){if(this._on>0&&--this._on===0){if(ht===this)ht=this.prevScope;else{let e=ht;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function kv(t){return new hm(t)}function Nv(){return ht}let Me;const Zc=new WeakSet;class dm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ht&&(ht.active?ht.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Zc.has(this)&&(Zc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||pm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Rd(this),mm(this);const e=Me,n=on;Me=this,on=!0;try{return this.fn()}finally{gm(this),Me=e,on=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)gu(e);this.deps=this.depsTail=void 0,Rd(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Zc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Tl(this)&&this.run()}get dirty(){return Tl(this)}}let fm=0,Ni,xi;function pm(t,e=!1){if(t.flags|=8,e){t.next=xi,xi=t;return}t.next=Ni,Ni=t}function pu(){fm++}function mu(){if(--fm>0)return;if(xi){let e=xi;for(xi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Ni;){let e=Ni;for(Ni=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function mm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function gm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),gu(r),xv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Tl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(_m(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function _m(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Hi)||(t.globalVersion=Hi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Tl(t))))return;t.flags|=2;const e=t.dep,n=Me,r=on;Me=t,on=!0;try{mm(t);const s=t.fn(t._value);(e.version===0||En(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Me=n,on=r,gm(t),t.flags&=-3}}function gu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)gu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function xv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let on=!0;const ym=[];function Gn(){ym.push(on),on=!1}function zn(){const t=ym.pop();on=t===void 0?!0:t}function Rd(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Me;Me=void 0;try{e()}finally{Me=n}}}let Hi=0;class Dv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class _u{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Me||!on||Me===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Me)n=this.activeLink=new Dv(Me,this),Me.deps?(n.prevDep=Me.depsTail,Me.depsTail.nextDep=n,Me.depsTail=n):Me.deps=Me.depsTail=n,vm(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Me.depsTail,n.nextDep=void 0,Me.depsTail.nextDep=n,Me.depsTail=n,Me.deps===n&&(Me.deps=r)}return n}trigger(e){this.version++,Hi++,this.notify(e)}notify(e){pu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{mu()}}}function vm(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)vm(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Il=new WeakMap,Xr=Symbol(""),Al=Symbol(""),Wi=Symbol("");function Tt(t,e,n){if(on&&Me){let r=Il.get(t);r||Il.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new _u),s.map=r,s.key=n),s.track()}}function jn(t,e,n,r,s,i){const o=Il.get(t);if(!o){Hi++;return}const c=l=>{l&&l.trigger()};if(pu(),e==="clear")o.forEach(c);else{const l=he(t),u=l&&hu(n);if(l&&n==="length"){const d=Number(r);o.forEach((p,m)=>{(m==="length"||m===Wi||!Nn(m)&&m>=d)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(Wi)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Xr)),Cs(t)&&c(o.get(Al)));break;case"delete":l||(c(o.get(Xr)),Cs(t)&&c(o.get(Al)));break;case"set":Cs(t)&&c(o.get(Xr));break}}mu()}function vs(t){const e=Ce(t);return e===t?e:(Tt(e,"iterate",Wi),tn(t)?e:e.map(cn))}function Xa(t){return Tt(t=Ce(t),"iterate",Wi),t}function yn(t,e){return Kn(t)?Ms(Zr(t)?cn(e):e):cn(e)}const Vv={__proto__:null,[Symbol.iterator](){return el(this,Symbol.iterator,t=>yn(this,t))},concat(...t){return vs(this).concat(...t.map(e=>he(e)?vs(e):e))},entries(){return el(this,"entries",t=>(t[1]=yn(this,t[1]),t))},every(t,e){return Mn(this,"every",t,e,void 0,arguments)},filter(t,e){return Mn(this,"filter",t,e,n=>n.map(r=>yn(this,r)),arguments)},find(t,e){return Mn(this,"find",t,e,n=>yn(this,n),arguments)},findIndex(t,e){return Mn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Mn(this,"findLast",t,e,n=>yn(this,n),arguments)},findLastIndex(t,e){return Mn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Mn(this,"forEach",t,e,void 0,arguments)},includes(...t){return tl(this,"includes",t)},indexOf(...t){return tl(this,"indexOf",t)},join(t){return vs(this).join(t)},lastIndexOf(...t){return tl(this,"lastIndexOf",t)},map(t,e){return Mn(this,"map",t,e,void 0,arguments)},pop(){return vi(this,"pop")},push(...t){return vi(this,"push",t)},reduce(t,...e){return Sd(this,"reduce",t,e)},reduceRight(t,...e){return Sd(this,"reduceRight",t,e)},shift(){return vi(this,"shift")},some(t,e){return Mn(this,"some",t,e,void 0,arguments)},splice(...t){return vi(this,"splice",t)},toReversed(){return vs(this).toReversed()},toSorted(t){return vs(this).toSorted(t)},toSpliced(...t){return vs(this).toSpliced(...t)},unshift(...t){return vi(this,"unshift",t)},values(){return el(this,"values",t=>yn(this,t))}};function el(t,e,n){const r=Xa(t),s=r[e]();return r!==t&&!tn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Ov=Array.prototype;function Mn(t,e,n,r,s,i){const o=Xa(t),c=o!==t&&!tn(t),l=o[e];if(l!==Ov[e]){const p=l.apply(t,i);return c?cn(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,yn(t,p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const d=l.call(o,u,r);return c&&s?s(d):d}function Sd(t,e,n,r){const s=Xa(t),i=s!==t&&!tn(t);let o=n,c=!1;s!==t&&(i?(c=r.length===0,o=function(u,d,p){return c&&(c=!1,u=yn(t,u)),n.call(this,u,yn(t,d),p,t)}):n.length>3&&(o=function(u,d,p){return n.call(this,u,d,p,t)}));const l=s[e](o,...r);return c?yn(t,l):l}function tl(t,e,n){const r=Ce(t);Tt(r,"iterate",Wi);const s=r[e](...n);return(s===-1||s===!1)&&Eu(n[0])?(n[0]=Ce(n[0]),r[e](...n)):s}function vi(t,e,n=[]){Gn(),pu();const r=Ce(t)[e].apply(t,n);return mu(),zn(),r}const Mv=lu("__proto__,__v_isRef,__isVue"),Em=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Nn));function Lv(t){Nn(t)||(t=String(t));const e=Ce(this);return Tt(e,"has",t),e.hasOwnProperty(t)}class wm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?zv:bm:i?Am:Im).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=he(e);if(!s){let l;if(o&&(l=Vv[n]))return l;if(n==="hasOwnProperty")return Lv}const c=Reflect.get(e,n,bt(e)?e:r);if((Nn(n)?Em.has(n):Mv(n))||(s||Tt(e,"get",n),i))return c;if(bt(c)){const l=o&&hu(n)?c:c.value;return s&&xe(l)?Rl(l):l}return xe(c)?s?Rl(c):Za(c):c}}class Tm extends wm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=he(e)&&hu(n);if(!this._isShallow){const u=Kn(i);if(!tn(r)&&!Kn(r)&&(i=Ce(i),r=Ce(r)),!o&&bt(i)&&!bt(r))return u||(i.value=r),!0}const c=o?Number(n)<e.length:Ne(e,n),l=Reflect.set(e,n,r,bt(e)?e:s);return e===Ce(s)&&l&&(c?En(r,i)&&jn(e,"set",n,r):jn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ne(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&jn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Nn(n)||!Em.has(n))&&Tt(e,"has",n),r}ownKeys(e){return Tt(e,"iterate",he(e)?"length":Xr),Reflect.ownKeys(e)}}class Fv extends wm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Uv=new Tm,jv=new Fv,Bv=new Tm(!0);const bl=t=>t,Ho=t=>Reflect.getPrototypeOf(t);function $v(t,e,n){return function(...r){const s=this.__v_raw,i=Ce(s),o=Cs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),d=n?bl:e?Ms:cn;return!e&&Tt(i,"iterate",l?Al:Xr),pt(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[d(p[0]),d(p[1])]:d(p),done:m}}})}}function Wo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function qv(t,e){const n={get(s){const i=this.__v_raw,o=Ce(i),c=Ce(s);t||(En(s,c)&&Tt(o,"get",s),Tt(o,"get",c));const{has:l}=Ho(o),u=e?bl:t?Ms:cn;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Tt(Ce(s),"iterate",Xr),s.size},has(s){const i=this.__v_raw,o=Ce(i),c=Ce(s);return t||(En(s,c)&&Tt(o,"has",s),Tt(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ce(c),u=e?bl:t?Ms:cn;return!t&&Tt(l,"iterate",Xr),c.forEach((d,p)=>s.call(i,u(d),u(p),o))}};return pt(n,t?{add:Wo("add"),set:Wo("set"),delete:Wo("delete"),clear:Wo("clear")}:{add(s){const i=Ce(this),o=Ho(i),c=Ce(s),l=!e&&!tn(s)&&!Kn(s)?c:s;return o.has.call(i,l)||En(s,l)&&o.has.call(i,s)||En(c,l)&&o.has.call(i,c)||(i.add(l),jn(i,"add",l,l)),this},set(s,i){!e&&!tn(i)&&!Kn(i)&&(i=Ce(i));const o=Ce(this),{has:c,get:l}=Ho(o);let u=c.call(o,s);u||(s=Ce(s),u=c.call(o,s));const d=l.call(o,s);return o.set(s,i),u?En(i,d)&&jn(o,"set",s,i):jn(o,"add",s,i),this},delete(s){const i=Ce(this),{has:o,get:c}=Ho(i);let l=o.call(i,s);l||(s=Ce(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&jn(i,"delete",s,void 0),u},clear(){const s=Ce(this),i=s.size!==0,o=s.clear();return i&&jn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=$v(s,t,e)}),n}function yu(t,e){const n=qv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ne(n,s)&&s in r?n:r,s,i)}const Hv={get:yu(!1,!1)},Wv={get:yu(!1,!0)},Gv={get:yu(!0,!1)};const Im=new WeakMap,Am=new WeakMap,bm=new WeakMap,zv=new WeakMap;function Kv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Za(t){return Kn(t)?t:vu(t,!1,Uv,Hv,Im)}function Rm(t){return vu(t,!1,Bv,Wv,Am)}function Rl(t){return vu(t,!0,jv,Gv,bm)}function vu(t,e,n,r,s){if(!xe(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=Kv(Ev(t));if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Zr(t){return Kn(t)?Zr(t.__v_raw):!!(t&&t.__v_isReactive)}function Kn(t){return!!(t&&t.__v_isReadonly)}function tn(t){return!!(t&&t.__v_isShallow)}function Eu(t){return t?!!t.__v_raw:!1}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function Sm(t){return!Ne(t,"__v_skip")&&Object.isExtensible(t)&&am(t,"__v_skip",!0),t}const cn=t=>xe(t)?Za(t):t,Ms=t=>xe(t)?Rl(t):t;function bt(t){return t?t.__v_isRef===!0:!1}function Bt(t){return Pm(t,!1)}function Qv(t){return Pm(t,!0)}function Pm(t,e){return bt(t)?t:new Jv(t,e)}class Jv{constructor(e,n){this.dep=new _u,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ce(e),this._value=n?e:cn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||tn(e)||Kn(e);e=r?e:Ce(e),En(e,n)&&(this._rawValue=e,this._value=r?e:cn(e),this.dep.trigger())}}function ot(t){return bt(t)?t.value:t}const Yv={get:(t,e,n)=>e==="__v_raw"?t:ot(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return bt(s)&&!bt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Cm(t){return Zr(t)?t:new Proxy(t,Yv)}class Xv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new _u(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Hi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Me!==this)return pm(this,!0),!0}get value(){const e=this.dep.track();return _m(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Zv(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new Xv(r,s,n)}const Go={},fa=new WeakMap;let Kr;function eE(t,e=!1,n=Kr){if(n){let r=fa.get(n);r||fa.set(n,r=[]),r.push(t)}}function tE(t,e,n=Oe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=q=>s?q:tn(q)||s===!1||s===0?Bn(q,1):Bn(q);let d,p,m,_,R=!1,k=!1;if(bt(t)?(p=()=>t.value,R=tn(t)):Zr(t)?(p=()=>u(t),R=!0):he(t)?(k=!0,R=t.some(q=>Zr(q)||tn(q)),p=()=>t.map(q=>{if(bt(q))return q.value;if(Zr(q))return u(q);if(pe(q))return l?l(q,2):q()})):pe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Gn();try{m()}finally{zn()}}const q=Kr;Kr=d;try{return l?l(t,3,[_]):t(_)}finally{Kr=q}}:p=Tn,e&&s){const q=p,ee=s===!0?1/0:s;p=()=>Bn(q(),ee)}const x=Nv(),$=()=>{d.stop(),x&&x.active&&uu(x.effects,d)};if(i&&e){const q=e;e=(...ee)=>{const se=q(...ee);return $(),se}}let L=k?new Array(t.length).fill(Go):Go;const B=q=>{if(!(!(d.flags&1)||!d.dirty&&!q))if(e){const ee=d.run();if(q||s||R||(k?ee.some((se,E)=>En(se,L[E])):En(ee,L))){m&&m();const se=Kr;Kr=d;try{const E=[ee,L===Go?void 0:k&&L[0]===Go?[]:L,_];L=ee,l?l(e,3,E):e(...E)}finally{Kr=se}}}else d.run()};return c&&c(B),d=new dm(p),d.scheduler=o?()=>o(B,!1):B,_=q=>eE(q,!1,d),m=d.onStop=()=>{const q=fa.get(d);if(q){if(l)l(q,4);else for(const ee of q)ee();fa.delete(d)}},e?r?B(!0):L=d.run():o?o(B.bind(null,!0),!0):d.run(),$.pause=d.pause.bind(d),$.resume=d.resume.bind(d),$.stop=$,$}function Bn(t,e=1/0,n){if(e<=0||!xe(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,bt(t))Bn(t.value,e,n);else if(he(t))for(let r=0;r<t.length;r++)Bn(t[r],e,n);else if(Ks(t)||Cs(t))t.forEach(r=>{Bn(r,e,n)});else if(om(t)){for(const r in t)Bn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Bn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function lo(t,e,n,r){try{return r?t(...r):t()}catch(s){ec(s,e,n)}}function ln(t,e,n,r){if(pe(t)){const s=lo(t,e,n,r);return s&&sm(s)&&s.catch(i=>{ec(i,e,n)}),s}if(he(t)){const s=[];for(let i=0;i<t.length;i++)s.push(ln(t[i],e,n,r));return s}}function ec(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Oe;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const d=c.ec;if(d){for(let p=0;p<d.length;p++)if(d[p](t,l,u)===!1)return}c=c.parent}if(i){Gn(),lo(i,null,10,[t,l,u]),zn();return}}nE(t,n,s,r,o)}function nE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Nt=[];let gn=-1;const ks=[];let dr=null,Es=0;const km=Promise.resolve();let pa=null;function wu(t){const e=pa||km;return t?e.then(this?t.bind(this):t):e}function rE(t){let e=gn+1,n=Nt.length;for(;e<n;){const r=e+n>>>1,s=Nt[r],i=Gi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function Tu(t){if(!(t.flags&1)){const e=Gi(t),n=Nt[Nt.length-1];!n||!(t.flags&2)&&e>=Gi(n)?Nt.push(t):Nt.splice(rE(e),0,t),t.flags|=1,Nm()}}function Nm(){pa||(pa=km.then(Dm))}function sE(t){he(t)?ks.push(...t):dr&&t.id===-1?dr.splice(Es+1,0,t):t.flags&1||(ks.push(t),t.flags|=1),Nm()}function Pd(t,e,n=gn+1){for(;n<Nt.length;n++){const r=Nt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Nt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function xm(t){if(ks.length){const e=[...new Set(ks)].sort((n,r)=>Gi(n)-Gi(r));if(ks.length=0,dr){dr.push(...e);return}for(dr=e,Es=0;Es<dr.length;Es++){const n=dr[Es];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}dr=null,Es=0}}const Gi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Dm(t){try{for(gn=0;gn<Nt.length;gn++){const e=Nt[gn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),lo(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;gn<Nt.length;gn++){const e=Nt[gn];e&&(e.flags&=-2)}gn=-1,Nt.length=0,xm(),pa=null,(Nt.length||ks.length)&&Dm()}}let Kt=null,Vm=null;function ma(t){const e=Kt;return Kt=t,Vm=t&&t.type.__scopeId||null,e}function Er(t,e=Kt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&va(-1);const i=ma(e),o=es.length;let c;try{c=t(...s)}finally{for(let l=es.length;l>o;l--)rg();ma(i),r._d&&va(1)}return c};return r._n=!0,r._c=!0,r._d=!0,r}function R1(t,e){if(Kt===null)return t;const n=ic(Kt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Oe]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Bn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Gr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Gn(),ln(l,n,8,[t.el,c,t,e]),zn())}}function ea(t,e){if(It){let n=It.provides;const r=It.parent&&It.parent.provides;r===n&&(n=It.provides=Object.create(r)),n[t]=e}}function an(t,e,n=!1){const r=nw();if(r||Ns){let s=Ns?Ns._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}const iE=Symbol.for("v-scx"),oE=()=>an(iE);function Ir(t,e,n){return Om(t,e,n)}function Om(t,e,n=Oe){const{immediate:r,deep:s,flush:i,once:o}=n,c=pt({},n),l=e&&r||!e&&i!=="post";let u;if(Qi){if(i==="sync"){const _=oE();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=Tn,_.resume=Tn,_.pause=Tn,_}}const d=It;c.call=(_,R,k)=>ln(_,d,R,k);let p=!1;i==="post"?c.scheduler=_=>{Ot(_,d&&d.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,R)=>{R?_():Tu(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,d&&(_.id=d.uid,_.i=d))};const m=tE(t,e,c);return Qi&&(u?u.push(m):l&&m()),m}function aE(t,e,n){const r=this.proxy,s=ze(t)?t.includes(".")?Mm(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=ho(this),c=Om(s,i.bind(r),n);return o(),c}function Mm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const cE=Symbol("_vte"),lE=t=>t.__isTeleport,nl=Symbol("_leaveCb");function Iu(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Iu(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ls(t,e){return pe(t)?pt({name:t.name},e,{setup:t}):t}function Lm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Cd(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const ga=new WeakMap;function Di(t,e,n,r,s=!1){if(he(t)){t.forEach((k,x)=>Di(k,e&&(he(e)?e[x]:e),n,r,s));return}if(Vi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Di(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?ic(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,d=c.refs===Oe?c.refs={}:c.refs,p=c.setupState,m=Ce(p),_=p===Oe?rm:k=>Cd(d,k)?!1:Ne(m,k),R=(k,x)=>!(x&&Cd(d,x));if(u!=null&&u!==l){if(kd(e),ze(u))d[u]=null,_(u)&&(p[u]=null);else if(bt(u)){const k=e;R(u,k.k)&&(u.value=null),k.k&&(d[k.k]=null)}}if(pe(l))lo(l,c,12,[o,d]);else{const k=ze(l),x=bt(l);if(k||x){const $=()=>{if(t.f){const L=k?_(l)?p[l]:d[l]:R()||!t.k?l.value:d[t.k];if(s)he(L)&&uu(L,i);else if(he(L))L.includes(i)||L.push(i);else if(k)d[l]=[i],_(l)&&(p[l]=d[l]);else{const B=[i];R(l,t.k)&&(l.value=B),t.k&&(d[t.k]=B)}}else k?(d[l]=o,_(l)&&(p[l]=o)):x&&(R(l,t.k)&&(l.value=o),t.k&&(d[t.k]=o))};if(o){const L=()=>{$(),ga.delete(t)};L.id=-1,ga.set(t,L),Ot(L,n)}else kd(t),$()}}}function kd(t){const e=ga.get(t);e&&(e.flags|=8,ga.delete(t))}Ya().requestIdleCallback;Ya().cancelIdleCallback;const Vi=t=>!!t.type.__asyncLoader,Fm=t=>t.type.__isKeepAlive;function uE(t,e){Um(t,"a",e)}function hE(t,e){Um(t,"da",e)}function Um(t,e,n=It){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(tc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Fm(s.parent.vnode)&&dE(r,e,n,s),s=s.parent}}function dE(t,e,n,r){const s=tc(e,t,r,!0);nc(()=>{uu(r[e],s)},n)}function tc(t,e,n=It,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Gn();const c=ho(n),l=ln(e,n,t,o);return c(),zn(),l});return r?s.unshift(i):s.push(i),i}}const er=t=>(e,n=It)=>{(!Qi||t==="sp")&&tc(t,(...r)=>e(...r),n)},fE=er("bm"),Au=er("m"),pE=er("bu"),mE=er("u"),gE=er("bum"),nc=er("um"),_E=er("sp"),yE=er("rtg"),vE=er("rtc");function EE(t,e=It){tc("ec",t,e)}const wE="components";function uo(t,e){return IE(wE,t,!0,e)||t}const TE=Symbol.for("v-ndc");function IE(t,e,n=!0,r=!1){const s=Kt||It;if(s){const i=s.type;{const c=aw(i,!1);if(c&&(c===e||c===Dt(e)||c===Qa(Dt(e))))return i}const o=Nd(s[t]||i[t],e)||Nd(s.appContext[t],e);return!o&&r?i:o}}function Nd(t,e){return t&&(t[e]||t[Dt(e)]||t[Qa(Dt(e))])}function _a(t,e,n,r){let s;const i=n,o=he(t);if(o||ze(t)){const c=o&&Zr(t);let l=!1,u=!1;c&&(l=!tn(t),u=Kn(t),t=Xa(t)),s=new Array(t.length);for(let d=0,p=t.length;d<p;d++)s[d]=e(l?u?Ms(cn(t[d])):cn(t[d]):t[d],d,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(xe(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const d=c[l];s[l]=e(t[d],d,l,i)}}else s=[];return s}const Sl=t=>t?og(t)?ic(t):Sl(t.parent):null,Oi=pt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Sl(t.parent),$root:t=>Sl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Bm(t),$forceUpdate:t=>t.f||(t.f=()=>{Tu(t.update)}),$nextTick:t=>t.n||(t.n=wu.bind(t.proxy)),$watch:t=>aE.bind(t)}),rl=(t,e)=>t!==Oe&&!t.__isScriptSetup&&Ne(t,e),AE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(rl(r,e))return o[e]=1,r[e];if(s!==Oe&&Ne(s,e))return o[e]=2,s[e];if(Ne(i,e))return o[e]=3,i[e];if(n!==Oe&&Ne(n,e))return o[e]=4,n[e];Pl&&(o[e]=0)}}const u=Oi[e];let d,p;if(u)return e==="$attrs"&&Tt(t.attrs,"get",""),u(t);if((d=c.__cssModules)&&(d=d[e]))return d;if(n!==Oe&&Ne(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Ne(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return rl(s,e)?(s[e]=n,!0):r!==Oe&&Ne(r,e)?(r[e]=n,!0):Ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==Oe&&c[0]!=="$"&&Ne(t,c)||rl(e,c)||Ne(i,c)||Ne(r,c)||Ne(Oi,c)||Ne(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function xd(t){return he(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Pl=!0;function bE(t){const e=Bm(t),n=t.proxy,r=t.ctx;Pl=!1,e.beforeCreate&&Dd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:d,beforeMount:p,mounted:m,beforeUpdate:_,updated:R,activated:k,deactivated:x,beforeDestroy:$,beforeUnmount:L,destroyed:B,unmounted:q,render:ee,renderTracked:se,renderTriggered:E,errorCaptured:y,serverPrefetch:T,expose:A,inheritAttrs:b,components:P,directives:w,filters:Se}=e;if(u&&RE(u,r,null),o)for(const Te in o){const ve=o[Te];pe(ve)&&(r[Te]=ve.bind(n))}if(s){const Te=s.call(n,n);xe(Te)&&(t.data=Za(Te))}if(Pl=!0,i)for(const Te in i){const ve=i[Te],qt=pe(ve)?ve.bind(n,n):pe(ve.get)?ve.get.bind(n,n):Tn,nn=!pe(ve)&&pe(ve.set)?ve.set.bind(n):Tn,Xt=At({get:qt,set:nn});Object.defineProperty(r,Te,{enumerable:!0,configurable:!0,get:()=>Xt.value,set:Ue=>Xt.value=Ue})}if(c)for(const Te in c)jm(c[Te],r,n,Te);if(l){const Te=pe(l)?l.call(n):l;Reflect.ownKeys(Te).forEach(ve=>{ea(ve,Te[ve])})}d&&Dd(d,t,"c");function Je(Te,ve){he(ve)?ve.forEach(qt=>Te(qt.bind(n))):ve&&Te(ve.bind(n))}if(Je(fE,p),Je(Au,m),Je(pE,_),Je(mE,R),Je(uE,k),Je(hE,x),Je(EE,y),Je(vE,se),Je(yE,E),Je(gE,L),Je(nc,q),Je(_E,T),he(A))if(A.length){const Te=t.exposed||(t.exposed={});A.forEach(ve=>{Object.defineProperty(Te,ve,{get:()=>n[ve],set:qt=>n[ve]=qt,enumerable:!0})})}else t.exposed||(t.exposed={});ee&&t.render===Tn&&(t.render=ee),b!=null&&(t.inheritAttrs=b),P&&(t.components=P),w&&(t.directives=w),T&&Lm(t)}function RE(t,e,n=Tn){he(t)&&(t=Cl(t));for(const r in t){const s=t[r];let i;xe(s)?"default"in s?i=an(s.from||r,s.default,!0):i=an(s.from||r):i=an(s),bt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Dd(t,e,n){ln(he(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function jm(t,e,n,r){let s=r.includes(".")?Mm(n,r):()=>n[r];if(ze(t)){const i=e[t];pe(i)&&Ir(s,i)}else if(pe(t))Ir(s,t.bind(n));else if(xe(t))if(he(t))t.forEach(i=>jm(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Ir(s,i,t)}}function Bm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>ya(l,u,o,!0)),ya(l,e,o)),xe(e)&&i.set(e,l),l}function ya(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&ya(t,i,n,!0),s&&s.forEach(o=>ya(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=SE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const SE={data:Vd,props:Od,emits:Od,methods:Ii,computed:Ii,beforeCreate:Ct,created:Ct,beforeMount:Ct,mounted:Ct,beforeUpdate:Ct,updated:Ct,beforeDestroy:Ct,beforeUnmount:Ct,destroyed:Ct,unmounted:Ct,activated:Ct,deactivated:Ct,errorCaptured:Ct,serverPrefetch:Ct,components:Ii,directives:Ii,watch:CE,provide:Vd,inject:PE};function Vd(t,e){return e?t?function(){return pt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function PE(t,e){return Ii(Cl(t),Cl(e))}function Cl(t){if(he(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ct(t,e){return t?[...new Set([].concat(t,e))]:e}function Ii(t,e){return t?pt(Object.create(null),t,e):e}function Od(t,e){return t?he(t)&&he(e)?[...new Set([...t,...e])]:pt(Object.create(null),xd(t),xd(e??{})):e}function CE(t,e){if(!t)return e;if(!e)return t;const n=pt(Object.create(null),t);for(const r in e)n[r]=Ct(t[r],e[r]);return n}function $m(){return{app:null,config:{isNativeTag:rm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kE=0;function NE(t,e){return function(r,s=null){pe(r)||(r=pt({},r)),s!=null&&!xe(s)&&(s=null);const i=$m(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:kE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:lw,get config(){return i.config},set config(d){},use(d,...p){return o.has(d)||(d&&pe(d.install)?(o.add(d),d.install(u,...p)):pe(d)&&(o.add(d),d(u,...p))),u},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),u},component(d,p){return p?(i.components[d]=p,u):i.components[d]},directive(d,p){return p?(i.directives[d]=p,u):i.directives[d]},mount(d,p,m){if(!l){const _=u._ceVNode||Qe(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,d,m),l=!0,u._container=d,d.__vue_app__=u,ic(_.component)}},onUnmount(d){c.push(d)},unmount(){l&&(ln(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(d,p){return i.provides[d]=p,u},runWithContext(d){const p=Ns;Ns=u;try{return d()}finally{Ns=p}}};return u}}let Ns=null;const xE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Dt(e)}Modifiers`]||t[`${Fr(e)}Modifiers`];function DE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Oe;let s=n;const i=e.startsWith("update:"),o=i&&xE(r,e.slice(7));o&&(o.trim&&(s=n.map(d=>ze(d)?d.trim():d)),o.number&&(s=n.map(Ja)));let c,l=r[c=Yc(e)]||r[c=Yc(Dt(e))];!l&&i&&(l=r[c=Yc(Fr(e))]),l&&ln(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,ln(u,t,6,s)}}const VE=new WeakMap;function qm(t,e,n=!1){const r=n?VE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!pe(t)){const l=u=>{const d=qm(u,e,!0);d&&(c=!0,pt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(xe(t)&&r.set(t,null),null):(he(i)?i.forEach(l=>o[l]=null):pt(o,i),xe(t)&&r.set(t,o),o)}function rc(t,e){return!t||!Ga(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Ne(t,e[0].toLowerCase()+e.slice(1))||Ne(t,Fr(e))||Ne(t,e))}function Md(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:d,props:p,data:m,setupState:_,ctx:R,inheritAttrs:k}=t,x=ma(t);let $,L;try{if(n.shapeFlag&4){const q=s||r,ee=q;$=vn(u.call(ee,q,d,p,_,m,R)),L=c}else{const q=e;$=vn(q.length>1?q(p,{attrs:c,slots:o,emit:l}):q(p,null)),L=e.props?c:OE(c)}}catch(q){es.length=0,ec(q,t,1),$=Qe(Cr)}let B=$;if(L&&k!==!1){const q=Object.keys(L),{shapeFlag:ee}=B;q.length&&ee&7&&(i&&q.some(za)&&(L=ME(L,i)),B=Ls(B,L,!1,!0))}return n.dirs&&(B=Ls(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&Iu(B,n.transition),$=B,ma(x),$}const OE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ga(n))&&((e||(e={}))[n]=t[n]);return e},ME=(t,e)=>{const n={};for(const r in t)(!za(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function LE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ld(r,o,u):!!o;if(l&8){const d=e.dynamicProps;for(let p=0;p<d.length;p++){const m=d[p];if(Hm(o,r,m)&&!rc(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Ld(r,o,u):!0:!!o;return!1}function Ld(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Hm(e,t,i)&&!rc(n,i))return!0}return!1}function Hm(t,e,n){const r=t[n],s=e[n];return n==="style"&&xe(r)&&xe(s)?!Qs(r,s):r!==s}function FE({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const Wm={},Gm=()=>Object.create(Wm),zm=t=>Object.getPrototypeOf(t)===Wm;function UE(t,e,n,r=!1){const s={},i=Gm();t.propsDefaults=Object.create(null),Km(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Rm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function jE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ce(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let p=0;p<d.length;p++){let m=d[p];if(rc(t.emitsOptions,m))continue;const _=e[m];if(l)if(Ne(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const R=Dt(m);s[R]=kl(l,c,R,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{Km(t,e,s,i)&&(u=!0);let d;for(const p in c)(!e||!Ne(e,p)&&((d=Fr(p))===p||!Ne(e,d)))&&(l?n&&(n[p]!==void 0||n[d]!==void 0)&&(s[p]=kl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Ne(e,p))&&(delete i[p],u=!0)}u&&jn(t.attrs,"set","")}function Km(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(ki(l))continue;const u=e[l];let d;s&&Ne(s,d=Dt(l))?!i||!i.includes(d)?n[d]=u:(c||(c={}))[d]=u:rc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ce(n),u=c||Oe;for(let d=0;d<i.length;d++){const p=i[d];n[p]=kl(s,l,p,u[p],t,!Ne(u,p))}}return o}function kl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ne(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const d=ho(s);r=u[n]=l.call(null,e),d()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Fr(n))&&(r=!0))}return r}const BE=new WeakMap;function Qm(t,e,n=!1){const r=n?BE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!pe(t)){const d=p=>{l=!0;const[m,_]=Qm(p,e,!0);pt(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return xe(t)&&r.set(t,Ps),Ps;if(he(i))for(let d=0;d<i.length;d++){const p=Dt(i[d]);Fd(p)&&(o[p]=Oe)}else if(i)for(const d in i){const p=Dt(d);if(Fd(p)){const m=i[d],_=o[p]=he(m)||pe(m)?{type:m}:pt({},m),R=_.type;let k=!1,x=!0;if(he(R))for(let $=0;$<R.length;++$){const L=R[$],B=pe(L)&&L.name;if(B==="Boolean"){k=!0;break}else B==="String"&&(x=!1)}else k=pe(R)&&R.name==="Boolean";_[0]=k,_[1]=x,(k||Ne(_,"default"))&&c.push(p)}}const u=[o,c];return xe(t)&&r.set(t,u),u}function Fd(t){return t[0]!=="$"&&!ki(t)}const bu=t=>t==="_"||t==="_ctx"||t==="$stable",Ru=t=>he(t)?t.map(vn):[vn(t)],$E=(t,e,n)=>{if(e._n)return e;const r=Er((...s)=>Ru(e(...s)),n);return r._c=!1,r},Jm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(bu(s))continue;const i=t[s];if(pe(i))e[s]=$E(s,i,r);else if(i!=null){const o=Ru(i);e[s]=()=>o}}},Ym=(t,e)=>{const n=Ru(e);t.slots.default=()=>n},Xm=(t,e,n)=>{for(const r in e)(n||!bu(r))&&(t[r]=e[r])},qE=(t,e,n)=>{const r=t.slots=Gm();if(t.vnode.shapeFlag&32){const s=e._;s?(Xm(r,e,n),n&&am(r,"_",s,!0)):Jm(e,r)}else e&&Ym(t,e)},HE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Oe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Xm(s,e,n):(i=!e.$stable,Jm(e,s)),o=e}else e&&(Ym(t,e),o={default:1});if(i)for(const c in s)!bu(c)&&o[c]==null&&delete s[c]},Ot=QE;function WE(t){return GE(t)}function GE(t,e){const n=Ya();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:d,parentNode:p,nextSibling:m,setScopeId:_=Tn,insertStaticContent:R}=t,k=(v,I,S,V=null,U=null,O=null,K=void 0,W=null,H=!!I.dynamicChildren)=>{if(v===I)return;v&&!Ei(v,I)&&(V=M(v),Ue(v,U,O,!0),v=null),I.patchFlag===-2&&(H=!1,I.dynamicChildren=null);const{type:j,ref:oe,shapeFlag:J}=I;switch(j){case sc:x(v,I,S,V);break;case Cr:$(v,I,S,V);break;case ta:v==null&&L(I,S,V,K);break;case Ft:P(v,I,S,V,U,O,K,W,H);break;default:J&1?ee(v,I,S,V,U,O,K,W,H):J&6?w(v,I,S,V,U,O,K,W,H):(J&64||J&128)&&j.process(v,I,S,V,U,O,K,W,H,te)}oe!=null&&U?Di(oe,v&&v.ref,O,I||v,!I):oe==null&&v&&v.ref!=null&&Di(v.ref,null,O,v,!0)},x=(v,I,S,V)=>{if(v==null)r(I.el=c(I.children),S,V);else{const U=I.el=v.el;I.children!==v.children&&u(U,I.children)}},$=(v,I,S,V)=>{v==null?r(I.el=l(I.children||""),S,V):I.el=v.el},L=(v,I,S,V)=>{[v.el,v.anchor]=R(v.children,I,S,V,v.el,v.anchor)},B=({el:v,anchor:I},S,V)=>{let U;for(;v&&v!==I;)U=m(v),r(v,S,V),v=U;r(I,S,V)},q=({el:v,anchor:I})=>{let S;for(;v&&v!==I;)S=m(v),s(v),v=S;s(I)},ee=(v,I,S,V,U,O,K,W,H)=>{if(I.type==="svg"?K="svg":I.type==="math"&&(K="mathml"),v==null)se(I,S,V,U,O,K,W,H);else{const j=v.el&&v.el._isVueCE?v.el:null;try{j&&j._beginPatch(),T(v,I,U,O,K,W,H)}finally{j&&j._endPatch()}}},se=(v,I,S,V,U,O,K,W)=>{let H,j;const{props:oe,shapeFlag:J,transition:ne,dirs:ce}=v;if(H=v.el=o(v.type,O,oe&&oe.is,oe),J&8?d(H,v.children):J&16&&y(v.children,H,null,V,U,sl(v,O),K,W),ce&&Gr(v,null,V,"created"),E(H,v,v.scopeId,K,V),oe){for(const fe in oe)fe!=="value"&&!ki(fe)&&i(H,fe,null,oe[fe],O,V);"value"in oe&&i(H,"value",null,oe.value,O),(j=oe.onVnodeBeforeMount)&&pn(j,V,v)}ce&&Gr(v,null,V,"beforeMount");const ae=zE(U,ne);ae&&ne.beforeEnter(H),r(H,I,S),((j=oe&&oe.onVnodeMounted)||ae||ce)&&Ot(()=>{try{j&&pn(j,V,v),ae&&ne.enter(H),ce&&Gr(v,null,V,"mounted")}finally{}},U)},E=(v,I,S,V,U)=>{if(S&&_(v,S),V)for(let O=0;O<V.length;O++)_(v,V[O]);if(U){let O=U.subTree;if(I===O||ng(O.type)&&(O.ssContent===I||O.ssFallback===I)){const K=U.vnode;E(v,K,K.scopeId,K.slotScopeIds,U.parent)}}},y=(v,I,S,V,U,O,K,W,H=0)=>{for(let j=H;j<v.length;j++){const oe=v[j]=W?Un(v[j]):vn(v[j]);k(null,oe,I,S,V,U,O,K,W)}},T=(v,I,S,V,U,O,K)=>{const W=I.el=v.el;let{patchFlag:H,dynamicChildren:j,dirs:oe}=I;H|=v.patchFlag&16;const J=v.props||Oe,ne=I.props||Oe;let ce;if(S&&zr(S,!1),(ce=ne.onVnodeBeforeUpdate)&&pn(ce,S,I,v),oe&&Gr(I,v,S,"beforeUpdate"),S&&zr(S,!0),j&&(!v.dynamicChildren||v.dynamicChildren.length!==j.length)&&(H=0,K=!1,j=null),(J.innerHTML&&ne.innerHTML==null||J.textContent&&ne.textContent==null)&&d(W,""),j?A(v.dynamicChildren,j,W,S,V,sl(I,U),O):K||ve(v,I,W,null,S,V,sl(I,U),O,!1),H>0){if(H&16)b(W,J,ne,S,U);else if(H&2&&J.class!==ne.class&&i(W,"class",null,ne.class,U),H&4&&i(W,"style",J.style,ne.style,U),H&8){const ae=I.dynamicProps;for(let fe=0;fe<ae.length;fe++){const be=ae[fe],Be=J[be],Ye=ne[be];(Ye!==Be||be==="value")&&i(W,be,Be,Ye,U,S)}}H&1&&v.children!==I.children&&d(W,I.children)}else!K&&j==null&&b(W,J,ne,S,U);((ce=ne.onVnodeUpdated)||oe)&&Ot(()=>{ce&&pn(ce,S,I,v),oe&&Gr(I,v,S,"updated")},V)},A=(v,I,S,V,U,O,K)=>{for(let W=0;W<I.length;W++){const H=v[W],j=I[W],oe=H.el&&(H.type===Ft||!Ei(H,j)||H.shapeFlag&198)?p(H.el):S;k(H,j,oe,null,V,U,O,K,!0)}},b=(v,I,S,V,U)=>{if(I!==S){if(I!==Oe)for(const O in I)!ki(O)&&!(O in S)&&i(v,O,I[O],null,U,V);for(const O in S){if(ki(O))continue;const K=S[O],W=I[O];K!==W&&O!=="value"&&i(v,O,W,K,U,V)}"value"in S&&i(v,"value",I.value,S.value,U)}},P=(v,I,S,V,U,O,K,W,H)=>{const j=I.el=v?v.el:c(""),oe=I.anchor=v?v.anchor:c("");let{patchFlag:J,dynamicChildren:ne,slotScopeIds:ce}=I;ce&&(W=W?W.concat(ce):ce),v==null?(r(j,S,V),r(oe,S,V),y(I.children||[],S,oe,U,O,K,W,H)):J>0&&J&64&&ne&&v.dynamicChildren&&v.dynamicChildren.length===ne.length?(A(v.dynamicChildren,ne,S,U,O,K,W),(I.key!=null||U&&I===U.subTree)&&Zm(v,I,!0)):ve(v,I,S,oe,U,O,K,W,H)},w=(v,I,S,V,U,O,K,W,H)=>{I.slotScopeIds=W,v==null?I.shapeFlag&512?U.ctx.activate(I,S,V,K,H):Se(I,S,V,U,O,K,H):$t(v,I,H)},Se=(v,I,S,V,U,O,K)=>{const W=v.component=tw(v,V,U);if(Fm(v)&&(W.ctx.renderer=te),rw(W,!1,K),W.asyncDep){if(U&&U.registerDep(W,Je,K),!v.el){const H=W.subTree=Qe(Cr);$(null,H,I,S),v.placeholder=H.el}}else Je(W,v,I,S,U,O,K)},$t=(v,I,S)=>{const V=I.component=v.component;if(LE(v,I,S))if(V.asyncDep&&!V.asyncResolved){Te(V,I,S);return}else V.next=I,V.update();else I.el=v.el,V.vnode=I},Je=(v,I,S,V,U,O,K)=>{const W=()=>{if(v.isMounted){let{next:J,bu:ne,u:ce,parent:ae,vnode:fe}=v;{const gt=eg(v);if(gt){J&&(J.el=fe.el,Te(v,J,K)),gt.asyncDep.then(()=>{Ot(()=>{v.isUnmounted||j()},U)});return}}let be=J,Be;zr(v,!1),J?(J.el=fe.el,Te(v,J,K)):J=fe,ne&&Zo(ne),(Be=J.props&&J.props.onVnodeBeforeUpdate)&&pn(Be,ae,J,fe),zr(v,!0);const Ye=Md(v),Zt=v.subTree;v.subTree=Ye,k(Zt,Ye,p(Zt.el),M(Zt),v,U,O),J.el=Ye.el,be===null&&FE(v,Ye.el),ce&&Ot(ce,U),(Be=J.props&&J.props.onVnodeUpdated)&&Ot(()=>pn(Be,ae,J,fe),U)}else{let J;const{el:ne,props:ce}=I,{bm:ae,m:fe,parent:be,root:Be,type:Ye}=v,Zt=Vi(I);zr(v,!1),ae&&Zo(ae),!Zt&&(J=ce&&ce.onVnodeBeforeMount)&&pn(J,be,I),zr(v,!0);{Be.ce&&Be.ce._hasShadowRoot()&&Be.ce._injectChildStyle(Ye,v.parent?v.parent.type:void 0);const gt=v.subTree=Md(v);k(null,gt,S,V,v,U,O),I.el=gt.el}if(fe&&Ot(fe,U),!Zt&&(J=ce&&ce.onVnodeMounted)){const gt=I;Ot(()=>pn(J,be,gt),U)}(I.shapeFlag&256||be&&Vi(be.vnode)&&be.vnode.shapeFlag&256)&&v.a&&Ot(v.a,U),v.isMounted=!0,I=S=V=null}};v.scope.on();const H=v.effect=new dm(W);v.scope.off();const j=v.update=H.run.bind(H),oe=v.job=H.runIfDirty.bind(H);oe.i=v,oe.id=v.uid,H.scheduler=()=>Tu(oe),zr(v,!0),j()},Te=(v,I,S)=>{I.component=v;const V=v.vnode.props;v.vnode=I,v.next=null,jE(v,I.props,V,S),HE(v,I.children,S),Gn(),Pd(v),zn()},ve=(v,I,S,V,U,O,K,W,H=!1)=>{const j=v&&v.children,oe=v?v.shapeFlag:0,J=I.children,{patchFlag:ne,shapeFlag:ce}=I;if(ne>0){if(ne&128){nn(j,J,S,V,U,O,K,W,H);return}else if(ne&256){qt(j,J,S,V,U,O,K,W,H);return}}ce&8?(oe&16&&Vt(j,U,O),J!==j&&d(S,J)):oe&16?ce&16?nn(j,J,S,V,U,O,K,W,H):Vt(j,U,O,!0):(oe&8&&d(S,""),ce&16&&y(J,S,V,U,O,K,W,H))},qt=(v,I,S,V,U,O,K,W,H)=>{v=v||Ps,I=I||Ps;const j=v.length,oe=I.length,J=Math.min(j,oe);let ne;for(ne=0;ne<J;ne++){const ce=I[ne]=H?Un(I[ne]):vn(I[ne]);k(v[ne],ce,S,null,U,O,K,W,H)}j>oe?Vt(v,U,O,!0,!1,J):y(I,S,V,U,O,K,W,H,J)},nn=(v,I,S,V,U,O,K,W,H)=>{let j=0;const oe=I.length;let J=v.length-1,ne=oe-1;for(;j<=J&&j<=ne;){const ce=v[j],ae=I[j]=H?Un(I[j]):vn(I[j]);if(Ei(ce,ae))k(ce,ae,S,null,U,O,K,W,H);else break;j++}for(;j<=J&&j<=ne;){const ce=v[J],ae=I[ne]=H?Un(I[ne]):vn(I[ne]);if(Ei(ce,ae))k(ce,ae,S,null,U,O,K,W,H);else break;J--,ne--}if(j>J){if(j<=ne){const ce=ne+1,ae=ce<oe?I[ce].el:V;for(;j<=ne;)k(null,I[j]=H?Un(I[j]):vn(I[j]),S,ae,U,O,K,W,H),j++}}else if(j>ne)for(;j<=J;)Ue(v[j],U,O,!0),j++;else{const ce=j,ae=j,fe=new Map;for(j=ae;j<=ne;j++){const lt=I[j]=H?Un(I[j]):vn(I[j]);lt.key!=null&&fe.set(lt.key,j)}let be,Be=0;const Ye=ne-ae+1;let Zt=!1,gt=0;const ir=new Array(Ye);for(j=0;j<Ye;j++)ir[j]=0;for(j=ce;j<=J;j++){const lt=v[j];if(Be>=Ye){Ue(lt,U,O,!0);continue}let en;if(lt.key!=null)en=fe.get(lt.key);else for(be=ae;be<=ne;be++)if(ir[be-ae]===0&&Ei(lt,I[be])){en=be;break}en===void 0?Ue(lt,U,O,!0):(ir[en-ae]=j+1,en>=gt?gt=en:Zt=!0,k(lt,I[en],S,null,U,O,K,W,H),Be++)}const oi=Zt?KE(ir):Ps;for(be=oi.length-1,j=Ye-1;j>=0;j--){const lt=ae+j,en=I[lt],Po=I[lt+1],ps=lt+1<oe?Po.el||tg(Po):V;ir[j]===0?k(null,en,S,ps,U,O,K,W,H):Zt&&(be<0||j!==oi[be]?Xt(en,S,ps,2):be--)}}},Xt=(v,I,S,V,U=null)=>{const{el:O,type:K,transition:W,children:H,shapeFlag:j}=v;if(j&6){Xt(v.component.subTree,I,S,V);return}if(j&128){v.suspense.move(I,S,V);return}if(j&64){K.move(v,I,S,te);return}if(K===Ft){r(O,I,S);for(let J=0;J<H.length;J++)Xt(H[J],I,S,V);r(v.anchor,I,S);return}if(K===ta){B(v,I,S);return}if(V!==2&&j&1&&W)if(V===0)W.persisted&&!O[nl]?r(O,I,S):(W.beforeEnter(O),r(O,I,S),Ot(()=>W.enter(O),U));else{const{leave:J,delayLeave:ne,afterLeave:ce}=W,ae=()=>{v.ctx.isUnmounted?s(O):r(O,I,S)},fe=()=>{const be=O._isLeaving||!!O[nl];O._isLeaving&&O[nl](!0),W.persisted&&!be?ae():J(O,()=>{ae(),ce&&ce()})};ne?ne(O,ae,fe):fe()}else r(O,I,S)},Ue=(v,I,S,V=!1,U=!1)=>{const{type:O,props:K,ref:W,children:H,dynamicChildren:j,shapeFlag:oe,patchFlag:J,dirs:ne,cacheIndex:ce,memo:ae}=v;if(J===-2&&(U=!1),W!=null&&(Gn(),Di(W,null,S,v,!0),zn()),ce!=null&&(I.renderCache[ce]=void 0),oe&256){I.ctx.deactivate(v);return}const fe=oe&1&&ne,be=!Vi(v);let Be;if(be&&(Be=K&&K.onVnodeBeforeUnmount)&&pn(Be,I,v),oe&6)Ht(v.component,S,V);else{if(oe&128){v.suspense.unmount(S,V);return}fe&&Gr(v,null,I,"beforeUnmount"),oe&64?v.type.remove(v,I,S,te,V):j&&!j.hasOnce&&(O!==Ft||J>0&&J&64)?Vt(j,I,S,!1,!0):(O===Ft&&J&384||!U&&oe&16)&&Vt(H,I,S),V&&je(v)}const Ye=ae!=null&&ce==null;(be&&(Be=K&&K.onVnodeUnmounted)||fe||Ye)&&Ot(()=>{Be&&pn(Be,I,v),fe&&Gr(v,null,I,"unmounted"),Ye&&(v.el=null)},S)},je=v=>{const{type:I,el:S,anchor:V,transition:U}=v;if(I===Ft){sr(S,V);return}if(I===ta){q(v);return}const O=()=>{s(S),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(v.shapeFlag&1&&U&&!U.persisted){const{leave:K,delayLeave:W}=U,H=()=>K(S,O);W?W(v.el,O,H):H()}else O()},sr=(v,I)=>{let S;for(;v!==I;)S=m(v),s(v),v=S;s(I)},Ht=(v,I,S)=>{const{bum:V,scope:U,job:O,subTree:K,um:W,m:H,a:j}=v;Ud(H),Ud(j),V&&Zo(V),U.stop(),O&&(O.flags|=8,Ue(K,v,I,S)),W&&Ot(W,I),Ot(()=>{v.isUnmounted=!0},I)},Vt=(v,I,S,V=!1,U=!1,O=0)=>{for(let K=O;K<v.length;K++)Ue(v[K],I,S,V,U)},M=v=>{if(v.shapeFlag&6)return M(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const I=m(v.anchor||v.el),S=I&&I[cE];return S?m(S):I};let X=!1;const Q=(v,I,S)=>{let V;v==null?I._vnode&&(Ue(I._vnode,null,null,!0),V=I._vnode.component):k(I._vnode||null,v,I,null,null,null,S),I._vnode=v,X||(X=!0,Pd(V),xm(),X=!1)},te={p:k,um:Ue,m:Xt,r:je,mt:Se,mc:y,pc:ve,pbc:A,n:M,o:t};return{render:Q,hydrate:void 0,createApp:NE(Q)}}function sl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function zr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function zE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Zm(t,e,n=!1){const r=t.children,s=e.children;if(he(r)&&he(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Un(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Zm(o,c)),c.type===sc&&(c.patchFlag===-1&&(c=s[i]=Un(c)),c.el=o.el),c.type===Cr&&!c.el&&(c.el=o.el)}}function KE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function eg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:eg(e)}function Ud(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function tg(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?tg(e.subTree):null}const ng=t=>t.__isSuspense;function QE(t,e){e&&e.pendingBranch?he(t)?e.effects.push(...t):e.effects.push(t):sE(t)}const Ft=Symbol.for("v-fgt"),sc=Symbol.for("v-txt"),Cr=Symbol.for("v-cmt"),ta=Symbol.for("v-stc"),es=[];let Qt=null;function ye(t=!1){es.push(Qt=t?null:[])}function rg(){es.pop(),Qt=es[es.length-1]||null}let zi=1;function va(t,e=!1){zi+=t,t<0&&Qt&&e&&(Qt.hasOnce=!0)}function sg(t){return t.dynamicChildren=zi>0?Qt||Ps:null,rg(),zi>0&&Qt&&Qt.push(t),t}function ke(t,e,n,r,s,i){return sg(Z(t,e,n,r,s,i,!0))}function ts(t,e,n,r,s){return sg(Qe(t,e,n,r,s,!0))}function Ea(t){return t?t.__v_isVNode===!0:!1}function Ei(t,e){return t.type===e.type&&t.key===e.key}const ig=({key:t})=>t??null,na=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ze(t)||bt(t)||pe(t)?{i:Kt,r:t,k:e,f:!!n}:t:null);function Z(t,e=null,n=null,r=0,s=null,i=t===Ft?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ig(e),ref:e&&na(e),scopeId:Vm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Kt};return c?(wa(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=ze(n)?8:16),zi>0&&!o&&Qt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Qt.push(l),l}const Qe=JE;function JE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===TE)&&(t=Cr),Ea(t)){const c=Ls(t,e,!0);return n&&wa(c,n),zi>0&&!i&&Qt&&(c.shapeFlag&6?Qt[Qt.indexOf(t)]=c:Qt.push(c)),c.patchFlag=-2,c}if(cw(t)&&(t=t.__vccOpts),e){e=YE(e);let{class:c,style:l}=e;c&&!ze(c)&&(e.class=Et(c)),xe(l)&&(Eu(l)&&!he(l)&&(l=pt({},l)),e.style=du(l))}const o=ze(t)?1:ng(t)?128:lE(t)?64:xe(t)?4:pe(t)?2:0;return Z(t,e,n,r,s,o,i,!0)}function YE(t){return t?Eu(t)||zm(t)?pt({},t):t:null}function Ls(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?XE(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&ig(u),ref:e&&e.ref?n&&i?he(i)?i.concat(na(e)):[i,na(e)]:na(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ft?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ls(t.ssContent),ssFallback:t.ssFallback&&Ls(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Iu(d,l.clone(d)),d}function Ki(t=" ",e=0){return Qe(sc,null,t,e)}function S1(t,e){const n=Qe(ta,null,t);return n.staticCount=e,n}function Lt(t="",e=!1){return e?(ye(),ts(Cr,null,t)):Qe(Cr,null,t)}function vn(t){return t==null||typeof t=="boolean"?Qe(Cr):he(t)?Qe(Ft,null,t.slice()):Ea(t)?Un(t):Qe(sc,null,String(t))}function Un(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ls(t)}function wa(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(he(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),wa(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!zm(e)?e._ctx=Kt:s===3&&Kt&&(Kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(pe(e)){if(r&65){wa(t,{default:e});return}e={default:e,_ctx:Kt},n=32}else e=String(e),r&64?(n=16,e=[Ki(e)]):n=8;t.children=e,t.shapeFlag|=n}function XE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Et([e.class,r.class]));else if(s==="style")e.style=du([e.style,r.style]);else if(Ga(s)){const i=e[s],o=r[s];o&&i!==o&&!(he(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!za(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function pn(t,e,n,r=null){ln(t,e,7,[n,r])}const ZE=$m();let ew=0;function tw(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||ZE,i={uid:ew++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new hm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qm(r,s),emitsOptions:qm(r,s),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=DE.bind(null,i),t.ce&&t.ce(i),i}let It=null;const nw=()=>It||Kt;let Ta,Nl;{const t=Ya(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Ta=e("__VUE_INSTANCE_SETTERS__",n=>It=n),Nl=e("__VUE_SSR_SETTERS__",n=>Qi=n)}const ho=t=>{const e=It;return Ta(t),t.scope.on(),()=>{t.scope.off(),Ta(e)}},jd=()=>{It&&It.scope.off(),Ta(null)};function og(t){return t.vnode.shapeFlag&4}let Qi=!1;function rw(t,e=!1,n=!1){e&&Nl(e);const{props:r,children:s}=t.vnode,i=og(t);UE(t,r,i,e),qE(t,s,n||e);const o=i?sw(t,e):void 0;return e&&Nl(!1),o}function sw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,AE);const{setup:r}=n;if(r){Gn();const s=t.setupContext=r.length>1?ow(t):null,i=ho(t),o=lo(r,t,0,[t.props,s]),c=sm(o);if(zn(),i(),(c||t.sp)&&!Vi(t)&&Lm(t),c){if(o.then(jd,jd),e)return o.then(l=>{Bd(t,l)}).catch(l=>{ec(l,t,0)});t.asyncDep=o}else Bd(t,o)}else ag(t)}function Bd(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:xe(e)&&(t.setupState=Cm(e)),ag(t)}function ag(t,e,n){const r=t.type;t.render||(t.render=r.render||Tn);{const s=ho(t);Gn();try{bE(t)}finally{zn(),s()}}}const iw={get(t,e){return Tt(t,"get",""),t[e]}};function ow(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,iw),slots:t.slots,emit:t.emit,expose:e}}function ic(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Cm(Sm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Oi)return Oi[n](t)},has(e,n){return n in e||n in Oi}})):t.proxy}function aw(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function cw(t){return pe(t)&&"__vccOpts"in t}const At=(t,e)=>Zv(t,e,Qi);function cg(t,e,n){try{va(-1);const r=arguments.length;return r===2?xe(e)&&!he(e)?Ea(e)?Qe(t,null,[e]):Qe(t,e):Qe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ea(n)&&(n=[n]),Qe(t,e,n))}finally{va(1)}}const lw="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let xl;const $d=typeof window<"u"&&window.trustedTypes;if($d)try{xl=$d.createPolicy("vue",{createHTML:t=>t})}catch{}const lg=xl?t=>xl.createHTML(t):t=>t,uw="http://www.w3.org/2000/svg",hw="http://www.w3.org/1998/Math/MathML",Fn=typeof document<"u"?document:null,qd=Fn&&Fn.createElement("template"),dw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Fn.createElementNS(uw,t):e==="mathml"?Fn.createElementNS(hw,t):n?Fn.createElement(t,{is:n}):Fn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{qd.innerHTML=lg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=qd.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},fw=Symbol("_vtc");function pw(t,e,n){const r=t[fw];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Hd=Symbol("_vod"),mw=Symbol("_vsh"),gw=Symbol(""),_w=/(?:^|;)\s*display\s*:/;function yw(t,e,n){const r=t.style,s=ze(n);let i=!1;if(n&&!s){if(e)if(ze(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Ai(r,c,"")}else for(const o in e)n[o]==null&&Ai(r,o,"");for(const o in n){o==="display"&&(i=!0);const c=n[o];c!=null?Ew(t,o,!ze(e)&&e?e[o]:void 0,c)||Ai(r,o,c):Ai(r,o,"")}}else if(s){if(e!==n){const o=r[gw];o&&(n+=";"+o),r.cssText=n,i=_w.test(n)}}else e&&t.removeAttribute("style");Hd in t&&(t[Hd]=i?r.display:"",t[mw]&&(r.display="none"))}const Wd=/\s*!important$/;function Ai(t,e,n){if(he(n))n.forEach(r=>Ai(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=vw(t,e);Wd.test(n)?t.setProperty(Fr(r),n.replace(Wd,""),"important"):t[r]=n}}const Gd=["Webkit","Moz","ms"],il={};function vw(t,e){const n=il[e];if(n)return n;let r=Dt(e);if(r!=="filter"&&r in t)return il[e]=r;r=Qa(r);for(let s=0;s<Gd.length;s++){const i=Gd[s]+r;if(i in t)return il[e]=i}return e}function Ew(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&ze(r)&&n===r}const zd="http://www.w3.org/1999/xlink";function Kd(t,e,n,r,s,i=Pv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(zd,e.slice(6,e.length)):t.setAttributeNS(zd,e,n):n==null||i&&!cm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Nn(n)?String(n):n)}function Qd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?lg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=cm(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function mr(t,e,n,r){t.addEventListener(e,n,r)}function ww(t,e,n,r){t.removeEventListener(e,n,r)}const Jd=Symbol("_vei");function Tw(t,e,n,r,s=null){const i=t[Jd]||(t[Jd]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=bw(e);if(r){const u=i[e]=Pw(r,s);mr(t,c,u,l)}else o&&(ww(t,c,o,l),i[e]=void 0)}}const Iw=/(Once|Passive|Capture)$/,Aw=/^on:?(?:Once|Passive|Capture)$/;function bw(t){let e,n;for(;(n=t.match(Iw))&&!Aw.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):Fr(t.slice(2)),e]}let ol=0;const Rw=Promise.resolve(),Sw=()=>ol||(Rw.then(()=>ol=0),ol=Date.now());function Pw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(he(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),c=[r];for(let l=0;l<o.length&&!r._stopped;l++){const u=o[l];u&&ln(u,e,5,c)}}else ln(s,e,5,[r])};return n.value=t,n.attached=Sw(),n}const Yd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Cw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?pw(t,r,o):e==="style"?yw(t,n,r):Ga(e)?za(e)||Tw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):kw(t,e,r,o))?(Qd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Kd(t,e,r,o,i,e!=="value")):t._isVueCE&&(Nw(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!ze(r)))?Qd(t,Dt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Kd(t,e,r,o))};function kw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Yd(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Yd(e)&&ze(n)?!1:e in t}function Nw(t,e){const n=t._def.props;if(!n)return!1;const r=Dt(e);return Array.isArray(n)?n.some(s=>Dt(s)===r):Object.keys(n).some(s=>Dt(s)===r)}const Fs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return he(e)?n=>Zo(e,n):e};function xw(t){t.target.composing=!0}function Xd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Hn=Symbol("_assign");function Zd(t,e,n){return e&&(t=t.trim()),n&&(t=Ja(t)),t}const P1={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Hn]=Fs(s);const i=r||s.props&&s.props.type==="number";mr(t,e?"change":"input",o=>{o.target.composing||t[Hn](Zd(t.value,n,i))}),(n||i)&&mr(t,"change",()=>{t.value=Zd(t.value,n,i)}),e||(mr(t,"compositionstart",xw),mr(t,"compositionend",Xd),mr(t,"change",Xd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Hn]=Fs(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ja(t.value):t.value,l=e??"";if(c===l)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l)}},C1={deep:!0,created(t,e,n){t[Hn]=Fs(n),mr(t,"change",()=>{const r=t._modelValue,s=Ji(t),i=t.checked,o=t[Hn];if(he(r)){const c=fu(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(Ks(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(ug(t,i))})},mounted:ef,beforeUpdate(t,e,n){t[Hn]=Fs(n),ef(t,e,n)}};function ef(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(he(e))s=fu(e,r.props.value)>-1;else if(Ks(e))s=e.has(r.props.value);else{if(e===n)return;s=Qs(e,ug(t,!0))}t.checked!==s&&(t.checked=s)}const k1={deep:!0,created(t,{value:e,modifiers:{number:n}},r){t._modelValue=e,mr(t,"change",()=>{const s=Array.prototype.filter.call(t.options,i=>i.selected).map(i=>n?Ja(Ji(i)):Ji(i));t[Hn](t.multiple?Ks(t._modelValue)?new Set(s):s:s[0]),t._assigning=!0,wu(()=>{t._assigning=!1})}),t[Hn]=Fs(r)},mounted(t,{value:e}){tf(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[Hn]=Fs(n)},updated(t,{value:e}){t._assigning||tf(t,e)}};function tf(t,e){const n=t.multiple,r=he(e);if(!(n&&!r&&!Ks(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Ji(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=fu(e,c)>-1}else o.selected=e.has(c);else if(Qs(Ji(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Ji(t){return"_value"in t?t._value:t.value}function ug(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Dw=["ctrl","shift","alt","meta"],Vw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Dw.some(n=>t[`${n}Key`]&&!e.includes(n))},N1=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const c=Vw[e[o]];if(c&&c(s,e))return}return t(s,...i)}))},Ow={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},x1=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const i=Fr(s.key);if(e.some(o=>o===i||Ow[o]===i))return t(s)}))},Mw=pt({patchProp:Cw},dw);let nf;function Lw(){return nf||(nf=WE(Mw))}const Fw=((...t)=>{const e=Lw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=jw(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Uw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Uw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function jw(t){return ze(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Bw=Symbol();var rf;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(rf||(rf={}));function $w(){const t=kv(!0),e=t.run(()=>Bt({}));let n=[],r=[];const s=Sm({install(i){s._a=i,i.provide(Bw,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const ws=typeof document<"u";function hg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function qw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&hg(t.default)}const Pe=Object.assign;function al(t,e){const n={};for(const r in e){const s=e[r];n[r]=un(s)?s.map(t):t(s)}return n}const Mi=()=>{},un=Array.isArray;function sf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const dg=/#/g,Hw=/&/g,Ww=/\//g,Gw=/=/g,zw=/\?/g,fg=/\+/g,Kw=/%5B/g,Qw=/%5D/g,pg=/%5E/g,Jw=/%60/g,mg=/%7B/g,Yw=/%7C/g,gg=/%7D/g,Xw=/%20/g;function Su(t){return t==null?"":encodeURI(""+t).replace(Yw,"|").replace(Kw,"[").replace(Qw,"]")}function Zw(t){return Su(t).replace(mg,"{").replace(gg,"}").replace(pg,"^")}function Dl(t){return Su(t).replace(fg,"%2B").replace(Xw,"+").replace(dg,"%23").replace(Hw,"%26").replace(Jw,"`").replace(mg,"{").replace(gg,"}").replace(pg,"^")}function eT(t){return Dl(t).replace(Gw,"%3D")}function tT(t){return Su(t).replace(dg,"%23").replace(zw,"%3F")}function nT(t){return tT(t).replace(Ww,"%2F")}function Yi(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const rT=/\/$/,sT=t=>t.replace(rT,"");function cl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=cT(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Yi(o)}}function iT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function of(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function oT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Us(e.matched[r],n.matched[s])&&_g(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Us(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function _g(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!aT(t[n],e[n]))return!1;return!0}function aT(t,e){return un(t)?af(t,e):un(e)?af(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function af(t,e){return un(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function cT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const lr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Vl=(function(t){return t.pop="pop",t.push="push",t})({}),ll=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function lT(t){if(!t)if(ws){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),sT(t)}const uT=/^[^#]+#/;function hT(t,e){return t.replace(uT,"#")+e}function dT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const oc=()=>({left:window.scrollX,top:window.scrollY});function fT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=dT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function cf(t,e){return(history.state?history.state.position-e:-1)+t}const Ol=new Map;function pT(t,e){Ol.set(t,e)}function mT(t){const e=Ol.get(t);return Ol.delete(t),e}function gT(t){return typeof t=="string"||t&&typeof t=="object"}function yg(t){return typeof t=="string"||typeof t=="symbol"}let Ge=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const vg=Symbol("");Ge.MATCHER_NOT_FOUND+"",Ge.NAVIGATION_GUARD_REDIRECT+"",Ge.NAVIGATION_ABORTED+"",Ge.NAVIGATION_CANCELLED+"",Ge.NAVIGATION_DUPLICATED+"";function js(t,e){return Pe(new Error,{type:t,[vg]:!0},e)}function Ln(t,e){return t instanceof Error&&vg in t&&(e==null||!!(t.type&e))}const _T=["params","query","hash"];function yT(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of _T)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function vT(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(fg," "),i=s.indexOf("="),o=Yi(i<0?s:s.slice(0,i)),c=i<0?null:Yi(s.slice(i+1));if(o in e){let l=e[o];un(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function lf(t){let e="";for(let n in t){const r=t[n];if(n=eT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(un(r)?r.map(s=>s&&Dl(s)):[r&&Dl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function ET(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=un(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const wT=Symbol(""),uf=Symbol(""),ac=Symbol(""),Pu=Symbol(""),Ml=Symbol("");function wi(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function fr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(js(Ge.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?l(m):gT(m)?l(js(Ge.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},d=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(d);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function ul(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(hg(l)){const u=(l.__vccOpts||l)[e];u&&i.push(fr(u,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(d=>{if(!d)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=qw(d)?d.default:d;o.mods[c]=d,o.components[c]=p;const m=(p.__vccOpts||p)[e];return m&&fr(m,n,r,o,c,s)()}))}}return i}function TT(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Us(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Us(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let IT=()=>location.protocol+"//"+location.host;function Eg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),of(c,"")}return of(n,t)+r+s}function AT(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=Eg(t,location),R=n.value,k=e.value;let x=0;if(m){if(n.value=_,e.value=m,o&&o===R){o=null;return}x=k?m.position-k.position:0}else r(_);s.forEach($=>{$(n.value,R,{delta:x,type:Vl.pop,direction:x?x>0?ll.forward:ll.back:ll.unknown})})};function l(){o=n.value}function u(m){s.push(m);const _=()=>{const R=s.indexOf(m);R>-1&&s.splice(R,1)};return i.push(_),_}function d(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Pe({},m.state,{scroll:oc()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",d),document.removeEventListener("visibilitychange",d)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",d),document.addEventListener("visibilitychange",d),{pauseListeners:l,listen:u,destroy:p}}function hf(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?oc():null}}function bT(t){const{history:e,location:n}=window,r={value:Eg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,d){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:IT()+t+l;try{e[d?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[d?"replace":"assign"](m)}}function o(l,u){i(l,Pe({},e.state,hf(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function c(l,u){const d=Pe({},s.value,e.state,{forward:l,scroll:oc()});i(d.current,d,!0),i(l,Pe({},hf(r.value,l,null),{position:d.position+1},u),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function RT(t){t=lT(t);const e=bT(t),n=AT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:hT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Jr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var nt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(nt||{});const ST={type:Jr.Static,value:""},PT=/[a-zA-Z0-9_]/;function CT(t){if(!t)return[[]];if(t==="/")return[[ST]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=nt.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",d="";function p(){u&&(n===nt.Static?i.push({type:Jr.Static,value:u}):n===nt.Param||n===nt.ParamRegExp||n===nt.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Jr.Param,value:u,regexp:d,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==nt.ParamRegExp){r=n,n=nt.EscapeNext;continue}switch(n){case nt.Static:l==="/"?(u&&p(),o()):l===":"?(p(),n=nt.Param):m();break;case nt.EscapeNext:m(),n=r;break;case nt.Param:l==="("?n=nt.ParamRegExp:PT.test(l)?m():(p(),n=nt.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case nt.ParamRegExp:l===")"?d[d.length-1]=="\\"?d=d.slice(0,-1)+l:n=nt.ParamRegExpEnd:d+=l;break;case nt.ParamRegExpEnd:p(),n=nt.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,d="";break;default:e("Unknown state");break}}return n===nt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const df="[^/]+?",kT={sensitive:!1,strict:!1,start:!0,end:!0};var kt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(kt||{});const NT=/[.+*?^${}()[\]/\\]/g;function xT(t,e){const n=Pe({},kT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const d=u.length?[]:[kt.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=kt.Segment+(n.sensitive?kt.BonusCaseSensitive:0);if(m.type===Jr.Static)p||(s+="/"),s+=m.value.replace(NT,"\\$&"),_+=kt.Static;else if(m.type===Jr.Param){const{value:R,repeatable:k,optional:x,regexp:$}=m;i.push({name:R,repeatable:k,optional:x});const L=$||df;if(L!==df){_+=kt.BonusCustomRegExp;try{`${L}`}catch(q){throw new Error(`Invalid custom RegExp for param "${R}" (${L}): `+q.message)}}let B=k?`((?:${L})(?:/(?:${L}))*)`:`(${L})`;p||(B=x&&u.length<2?`(?:/${B})`:"/"+B),x&&(B+="?"),s+=B,_+=kt.Dynamic,x&&(_+=kt.BonusOptional),k&&(_+=kt.BonusRepeatable),L===".*"&&(_+=kt.BonusWildcard)}d.push(_)}r.push(d)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=kt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const d=u.match(o),p={};if(!d)return null;for(let m=1;m<d.length;m++){const _=d[m]||"",R=i[m-1];p[R.name]=_&&R.repeatable?_.split("/"):_}return p}function l(u){let d="",p=!1;for(const m of t){(!p||!d.endsWith("/"))&&(d+="/"),p=!1;for(const _ of m)if(_.type===Jr.Static)d+=_.value;else if(_.type===Jr.Param){const{value:R,repeatable:k,optional:x}=_,$=R in u?u[R]:"";if(un($)&&!k)throw new Error(`Provided param "${R}" is an array but it is not repeatable (* or + modifiers)`);const L=un($)?$.join("/"):$;if(!L)if(x)m.length<2&&(d.endsWith("/")?d=d.slice(0,-1):p=!0);else throw new Error(`Missing required param "${R}"`);d+=L}}return d||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function DT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===kt.Static+kt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===kt.Static+kt.Segment?1:-1:0}function wg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=DT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ff(r))return 1;if(ff(s))return-1}return s.length-r.length}function ff(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const VT={strict:!1,end:!0,sensitive:!1};function OT(t,e,n){const r=xT(CT(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function MT(t,e){const n=[],r=new Map;e=sf(VT,e);function s(p){return r.get(p)}function i(p,m,_){const R=!_,k=mf(p);k.aliasOf=_&&_.record;const x=sf(e,p),$=[k];if("alias"in p){const q=typeof p.alias=="string"?[p.alias]:p.alias;for(const ee of q)$.push(mf(Pe({},k,{components:_?_.record.components:k.components,path:ee,aliasOf:_?_.record:k})))}let L,B;for(const q of $){const{path:ee}=q;if(m&&ee[0]!=="/"){const se=m.record.path,E=se[se.length-1]==="/"?"":"/";q.path=m.record.path+(ee&&E+ee)}if(L=OT(q,m,x),_?_.alias.push(L):(B=B||L,B!==L&&B.alias.push(L),R&&p.name&&!gf(L)&&o(p.name)),Tg(L)&&l(L),k.children){const se=k.children;for(let E=0;E<se.length;E++)i(se[E],L,_&&_.children[E])}_=_||L}return B?()=>{o(B)}:Mi}function o(p){if(yg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=UT(p,n);n.splice(m,0,p),p.record.name&&!gf(p)&&r.set(p.record.name,p)}function u(p,m){let _,R={},k,x;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw js(Ge.MATCHER_NOT_FOUND,{location:p});x=_.record.name,R=Pe(pf(m.params,_.keys.filter(B=>!B.optional).concat(_.parent?_.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),p.params&&pf(p.params,_.keys.map(B=>B.name))),k=_.stringify(R)}else if(p.path!=null)k=p.path,_=n.find(B=>B.re.test(k)),_&&(R=_.parse(k),x=_.record.name);else{if(_=m.name?r.get(m.name):n.find(B=>B.re.test(m.path)),!_)throw js(Ge.MATCHER_NOT_FOUND,{location:p,currentLocation:m});x=_.record.name,R=Pe({},m.params,p.params),k=_.stringify(R)}const $=[];let L=_;for(;L;)$.unshift(L.record),L=L.parent;return{name:x,path:k,params:R,matched:$,meta:FT($)}}t.forEach(p=>i(p));function d(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:d,getRoutes:c,getRecordMatcher:s}}function pf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function mf(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:LT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function LT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function gf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function FT(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function UT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;wg(t,e[i])<0?r=i:n=i+1}const s=jT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function jT(t){let e=t;for(;e=e.parent;)if(Tg(e)&&wg(t,e)===0)return e}function Tg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function _f(t){const e=an(ac),n=an(Pu),r=At(()=>{const l=ot(t.to);return e.resolve(l)}),s=At(()=>{const{matched:l}=r.value,{length:u}=l,d=l[u-1],p=n.matched;if(!d||!p.length)return-1;const m=p.findIndex(Us.bind(null,d));if(m>-1)return m;const _=yf(l[u-2]);return u>1&&yf(d)===_&&p[p.length-1].path!==_?p.findIndex(Us.bind(null,l[u-2])):m}),i=At(()=>s.value>-1&&WT(n.params,r.value.params)),o=At(()=>s.value>-1&&s.value===n.matched.length-1&&_g(n.params,r.value.params));function c(l={}){if(HT(l)){const u=e[ot(t.replace)?"replace":"push"](ot(t.to)).catch(Mi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:At(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function BT(t){return t.length===1?t[0]:t}const $T=ls({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_f,setup(t,{slots:e}){const n=Za(_f(t)),{options:r}=an(ac),s=At(()=>({[vf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[vf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&BT(e.default(n));return t.custom?i:cg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),qT=$T;function HT(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function WT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!un(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function yf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vf=(t,e,n)=>t??e??n,GT=ls({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=an(Ml),s=At(()=>t.route||r.value),i=an(uf,0),o=At(()=>{let u=ot(i);const{matched:d}=s.value;let p;for(;(p=d[u])&&!p.components;)u++;return u}),c=At(()=>s.value.matched[o.value]);ea(uf,At(()=>o.value+1)),ea(wT,c),ea(Ml,s);const l=Bt();return Ir(()=>[l.value,c.value,t.name],([u,d,p],[m,_,R])=>{d&&(d.instances[p]=u,_&&_!==d&&u&&u===m&&(d.leaveGuards.size||(d.leaveGuards=_.leaveGuards),d.updateGuards.size||(d.updateGuards=_.updateGuards))),u&&d&&(!_||!Us(d,_)||!m)&&(d.enterCallbacks[p]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,d=t.name,p=c.value,m=p&&p.components[d];if(!m)return Ef(n.default,{Component:m,route:u});const _=p.props[d],R=_?_===!0?u.params:typeof _=="function"?_(u):_:null,x=cg(m,Pe({},R,e,{onVnodeUnmounted:$=>{$.component.isUnmounted&&(p.instances[d]=null)},ref:l}));return Ef(n.default,{Component:x,route:u})||x}}});function Ef(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const zT=GT;function KT(t){const e=MT(t.routes,t),n=t.parseQuery||vT,r=t.stringifyQuery||lf,s=t.history,i=wi(),o=wi(),c=wi(),l=Qv(lr);let u=lr;ws&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const d=al.bind(null,M=>""+M),p=al.bind(null,nT),m=al.bind(null,Yi);function _(M,X){let Q,te;return yg(M)?(Q=e.getRecordMatcher(M),te=X):te=M,e.addRoute(te,Q)}function R(M){const X=e.getRecordMatcher(M);X&&e.removeRoute(X)}function k(){return e.getRoutes().map(M=>M.record)}function x(M){return!!e.getRecordMatcher(M)}function $(M,X){if(X=Pe({},X||l.value),typeof M=="string"){const S=cl(n,M,X.path),V=e.resolve({path:S.path},X),U=s.createHref(S.fullPath);return Pe(S,V,{params:m(V.params),hash:Yi(S.hash),redirectedFrom:void 0,href:U})}let Q;if(M.path!=null)Q=Pe({},M,{path:cl(n,M.path,X.path).path});else{const S=Pe({},M.params);for(const V in S)S[V]==null&&delete S[V];Q=Pe({},M,{params:p(S)}),X.params=p(X.params)}const te=e.resolve(Q,X),me=M.hash||"";te.params=d(m(te.params));const v=iT(r,Pe({},M,{hash:Zw(me),path:te.path})),I=s.createHref(v);return Pe({fullPath:v,hash:me,query:r===lf?ET(M.query):M.query||{}},te,{redirectedFrom:void 0,href:I})}function L(M){return typeof M=="string"?cl(n,M,l.value.path):Pe({},M)}function B(M,X){if(u!==M)return js(Ge.NAVIGATION_CANCELLED,{from:X,to:M})}function q(M){return E(M)}function ee(M){return q(Pe(L(M),{replace:!0}))}function se(M,X){const Q=M.matched[M.matched.length-1];if(Q&&Q.redirect){const{redirect:te}=Q;let me=typeof te=="function"?te(M,X):te;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=L(me):{path:me},me.params={}),Pe({query:M.query,hash:M.hash,params:me.path!=null?{}:M.params},me)}}function E(M,X){const Q=u=$(M),te=l.value,me=M.state,v=M.force,I=M.replace===!0,S=se(Q,te);if(S)return E(Pe(L(S),{state:typeof S=="object"?Pe({},me,S.state):me,force:v,replace:I}),X||Q);const V=Q;V.redirectedFrom=X;let U;return!v&&oT(r,te,Q)&&(U=js(Ge.NAVIGATION_DUPLICATED,{to:V,from:te}),Xt(te,te,!0,!1)),(U?Promise.resolve(U):A(V,te)).catch(O=>Ln(O)?Ln(O,Ge.NAVIGATION_GUARD_REDIRECT)?O:nn(O):ve(O,V,te)).then(O=>{if(O){if(Ln(O,Ge.NAVIGATION_GUARD_REDIRECT))return E(Pe({replace:I},L(O.to),{state:typeof O.to=="object"?Pe({},me,O.to.state):me,force:v}),X||V)}else O=P(V,te,!0,I,me);return b(V,te,O),O})}function y(M,X){const Q=B(M,X);return Q?Promise.reject(Q):Promise.resolve()}function T(M){const X=sr.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(M):M()}function A(M,X){let Q;const[te,me,v]=TT(M,X);Q=ul(te.reverse(),"beforeRouteLeave",M,X);for(const S of te)S.leaveGuards.forEach(V=>{Q.push(fr(V,M,X))});const I=y.bind(null,M,X);return Q.push(I),Vt(Q).then(()=>{Q=[];for(const S of i.list())Q.push(fr(S,M,X));return Q.push(I),Vt(Q)}).then(()=>{Q=ul(me,"beforeRouteUpdate",M,X);for(const S of me)S.updateGuards.forEach(V=>{Q.push(fr(V,M,X))});return Q.push(I),Vt(Q)}).then(()=>{Q=[];for(const S of v)if(S.beforeEnter)if(un(S.beforeEnter))for(const V of S.beforeEnter)Q.push(fr(V,M,X));else Q.push(fr(S.beforeEnter,M,X));return Q.push(I),Vt(Q)}).then(()=>(M.matched.forEach(S=>S.enterCallbacks={}),Q=ul(v,"beforeRouteEnter",M,X,T),Q.push(I),Vt(Q))).then(()=>{Q=[];for(const S of o.list())Q.push(fr(S,M,X));return Q.push(I),Vt(Q)}).catch(S=>Ln(S,Ge.NAVIGATION_CANCELLED)?S:Promise.reject(S))}function b(M,X,Q){c.list().forEach(te=>T(()=>te(M,X,Q)))}function P(M,X,Q,te,me){const v=B(M,X);if(v)return v;const I=X===lr,S=ws?history.state:{};Q&&(te||I?s.replace(M.fullPath,Pe({scroll:I&&S&&S.scroll},me)):s.push(M.fullPath,me)),l.value=M,Xt(M,X,Q,I),nn()}let w;function Se(){w||(w=s.listen((M,X,Q)=>{if(!Ht.listening)return;const te=$(M),me=se(te,Ht.currentRoute.value);if(me){E(Pe(me,{replace:!0,force:!0}),te).catch(Mi);return}u=te;const v=l.value;ws&&pT(cf(v.fullPath,Q.delta),oc()),A(te,v).catch(I=>Ln(I,Ge.NAVIGATION_ABORTED|Ge.NAVIGATION_CANCELLED)?I:Ln(I,Ge.NAVIGATION_GUARD_REDIRECT)?(E(Pe(L(I.to),{force:!0}),te).then(S=>{Ln(S,Ge.NAVIGATION_ABORTED|Ge.NAVIGATION_DUPLICATED)&&!Q.delta&&Q.type===Vl.pop&&s.go(-1,!1)}).catch(Mi),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ve(I,te,v))).then(I=>{I=I||P(te,v,!1),I&&(Q.delta&&!Ln(I,Ge.NAVIGATION_CANCELLED)?s.go(-Q.delta,!1):Q.type===Vl.pop&&Ln(I,Ge.NAVIGATION_ABORTED|Ge.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),b(te,v,I)}).catch(Mi)}))}let $t=wi(),Je=wi(),Te;function ve(M,X,Q){nn(M);const te=Je.list();return te.length?te.forEach(me=>me(M,X,Q)):console.error(M),Promise.reject(M)}function qt(){return Te&&l.value!==lr?Promise.resolve():new Promise((M,X)=>{$t.add([M,X])})}function nn(M){return Te||(Te=!M,Se(),$t.list().forEach(([X,Q])=>M?Q(M):X()),$t.reset()),M}function Xt(M,X,Q,te){const{scrollBehavior:me}=t;if(!ws||!me)return Promise.resolve();const v=!Q&&mT(cf(M.fullPath,0))||(te||!Q)&&history.state&&history.state.scroll||null;return wu().then(()=>me(M,X,v)).then(I=>I&&fT(I)).catch(I=>ve(I,M,X))}const Ue=M=>s.go(M);let je;const sr=new Set,Ht={currentRoute:l,listening:!0,addRoute:_,removeRoute:R,clearRoutes:e.clearRoutes,hasRoute:x,getRoutes:k,resolve:$,options:t,push:q,replace:ee,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Je.add,isReady:qt,install(M){M.component("RouterLink",qT),M.component("RouterView",zT),M.config.globalProperties.$router=Ht,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>ot(l)}),ws&&!je&&l.value===lr&&(je=!0,q(s.location).catch(te=>{}));const X={};for(const te in lr)Object.defineProperty(X,te,{get:()=>l.value[te],enumerable:!0});M.provide(ac,Ht),M.provide(Pu,Rm(X)),M.provide(Ml,l);const Q=M.unmount;sr.add(M),M.unmount=function(){sr.delete(M),sr.size<1&&(u=lr,w&&w(),w=null,l.value=lr,je=!1,Te=!1),Q()}}};function Vt(M){return M.reduce((X,Q)=>X.then(()=>T(Q)),Promise.resolve())}return Ht}function QT(){return an(ac)}function cc(t){return an(Pu)}const JT=()=>{};var wf={};/**
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
 */const Ig=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},YT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ag={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,d=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[d],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Ig(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):YT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new XT;const m=i<<2|c>>4;if(r.push(m),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const R=u<<6&192|p;r.push(R)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class XT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ZT=function(t){const e=Ig(t);return Ag.encodeByteArray(e,!0)},Ia=function(t){return ZT(t).replace(/\./g,"")},bg=function(t){try{return Ag.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function eI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const tI=()=>eI().__FIREBASE_DEFAULTS__,nI=()=>{if(typeof process>"u"||typeof wf>"u")return;const t=wf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},rI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bg(t[1]);return e&&JSON.parse(e)},lc=()=>{try{return JT()||tI()||nI()||rI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Rg=t=>{var e,n;return(n=(e=lc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Sg=t=>{const e=Rg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Pg=()=>{var t;return(t=lc())===null||t===void 0?void 0:t.config},Cg=t=>{var e;return(e=lc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class sI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function us(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Cu(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function iI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ia(JSON.stringify(n)),Ia(JSON.stringify(o)),""].join(".")}const Li={};function oI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Li))Li[e]?t.emulator.push(e):t.prod.push(e);return t}function aI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Tf=!1;function ku(t,e){if(typeof window>"u"||typeof document>"u"||!us(window.location.host)||Li[t]===e||Li[t]||Tf)return;Li[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=oI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Tf=!0,o()},m}function d(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=aI(r),_=n("text"),R=document.getElementById(_)||document.createElement("span"),k=n("learnmore"),x=document.getElementById(k)||document.createElement("a"),$=n("preprendIcon"),L=document.getElementById($)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const B=m.element;c(B),d(x,k);const q=u();l(L,$),B.append(L,R,x,q),document.body.appendChild(B)}i?(R.innerText="Preview backend disconnected.",L.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(L.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,R.innerText="Preview backend running in this workspace."),R.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function St(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function cI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(St())}function lI(){var t;const e=(t=lc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function uI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function dI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function fI(){const t=St();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function pI(){return!lI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mI(){try{return typeof indexedDB=="object"}catch{return!1}}function gI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const _I="FirebaseError";class tr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_I,Object.setPrototypeOf(this,tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,fo.prototype.create)}}class fo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?yI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new tr(s,c,r)}}function yI(t,e){return t.replace(vI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const vI=/\{\$([^}]+)}/g;function EI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function rs(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(If(i)&&If(o)){if(!rs(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function If(t){return t!==null&&typeof t=="object"}/**
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
 */function po(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function bi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ri(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function wI(t,e){const n=new TI(t,e);return n.subscribe.bind(n)}class TI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");II(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=hl),s.error===void 0&&(s.error=hl),s.complete===void 0&&(s.complete=hl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function II(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function hl(){}/**
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
 */function Fe(t){return t&&t._delegate?t._delegate:t}class kr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Qr="[DEFAULT]";/**
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
 */class AI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new sI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RI(e))try{this.getOrInitializeService({instanceIdentifier:Qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Qr){return this.instances.has(e)}getOptions(e=Qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Qr){return this.component?this.component.multipleInstances?e:Qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bI(t){return t===Qr?void 0:t}function RI(t){return t.instantiationMode==="EAGER"}/**
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
 */class SI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const PI={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},CI=Ee.INFO,kI={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},NI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=kI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Nu{constructor(e){this.name=e,this._logLevel=CI,this._logHandler=NI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?PI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}}const xI=(t,e)=>e.some(n=>t instanceof n);let Af,bf;function DI(){return Af||(Af=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VI(){return bf||(bf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const kg=new WeakMap,Ll=new WeakMap,Ng=new WeakMap,dl=new WeakMap,xu=new WeakMap;function OI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ar(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&kg.set(n,t)}).catch(()=>{}),xu.set(e,t),e}function MI(t){if(Ll.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ll.set(t,e)}let Fl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ll.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ng.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LI(t){Fl=t(Fl)}function FI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(fl(this),e,...n);return Ng.set(r,e.sort?e.sort():[e]),Ar(r)}:VI().includes(t)?function(...e){return t.apply(fl(this),e),Ar(kg.get(this))}:function(...e){return Ar(t.apply(fl(this),e))}}function UI(t){return typeof t=="function"?FI(t):(t instanceof IDBTransaction&&MI(t),xI(t,DI())?new Proxy(t,Fl):t)}function Ar(t){if(t instanceof IDBRequest)return OI(t);if(dl.has(t))return dl.get(t);const e=UI(t);return e!==t&&(dl.set(t,e),xu.set(e,t)),e}const fl=t=>xu.get(t);function jI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Ar(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Ar(o.result),l.oldVersion,l.newVersion,Ar(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const BI=["get","getKey","getAll","getAllKeys","count"],$I=["put","add","delete","clear"],pl=new Map;function Rf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pl.get(e))return pl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=$I.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||BI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return pl.set(e,i),i}LI(t=>({...t,get:(e,n,r)=>Rf(e,n)||t.get(e,n,r),has:(e,n)=>!!Rf(e,n)||t.has(e,n)}));/**
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
 */class qI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ul="@firebase/app",Sf="0.13.2";/**
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
 */const Qn=new Nu("@firebase/app"),WI="@firebase/app-compat",GI="@firebase/analytics-compat",zI="@firebase/analytics",KI="@firebase/app-check-compat",QI="@firebase/app-check",JI="@firebase/auth",YI="@firebase/auth-compat",XI="@firebase/database",ZI="@firebase/data-connect",eA="@firebase/database-compat",tA="@firebase/functions",nA="@firebase/functions-compat",rA="@firebase/installations",sA="@firebase/installations-compat",iA="@firebase/messaging",oA="@firebase/messaging-compat",aA="@firebase/performance",cA="@firebase/performance-compat",lA="@firebase/remote-config",uA="@firebase/remote-config-compat",hA="@firebase/storage",dA="@firebase/storage-compat",fA="@firebase/firestore",pA="@firebase/ai",mA="@firebase/firestore-compat",gA="firebase",_A="11.10.0";/**
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
 */const jl="[DEFAULT]",yA={[Ul]:"fire-core",[WI]:"fire-core-compat",[zI]:"fire-analytics",[GI]:"fire-analytics-compat",[QI]:"fire-app-check",[KI]:"fire-app-check-compat",[JI]:"fire-auth",[YI]:"fire-auth-compat",[XI]:"fire-rtdb",[ZI]:"fire-data-connect",[eA]:"fire-rtdb-compat",[tA]:"fire-fn",[nA]:"fire-fn-compat",[rA]:"fire-iid",[sA]:"fire-iid-compat",[iA]:"fire-fcm",[oA]:"fire-fcm-compat",[aA]:"fire-perf",[cA]:"fire-perf-compat",[lA]:"fire-rc",[uA]:"fire-rc-compat",[hA]:"fire-gcs",[dA]:"fire-gcs-compat",[fA]:"fire-fst",[mA]:"fire-fst-compat",[pA]:"fire-vertex","fire-js":"fire-js",[gA]:"fire-js-all"};/**
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
 */const Aa=new Map,vA=new Map,Bl=new Map;function Pf(t,e){try{t.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ss(t){const e=t.name;if(Bl.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;Bl.set(e,t);for(const n of Aa.values())Pf(n,t);for(const n of vA.values())Pf(n,t);return!0}function uc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Gt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const EA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},br=new fo("app","Firebase",EA);/**
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
 */class wA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new kr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw br.create("app-deleted",{appName:this._name})}}/**
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
 */const Js=_A;function xg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:jl,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw br.create("bad-app-name",{appName:String(s)});if(n||(n=Pg()),!n)throw br.create("no-options");const i=Aa.get(s);if(i){if(rs(n,i.options)&&rs(r,i.config))return i;throw br.create("duplicate-app",{appName:s})}const o=new SI(s);for(const l of Bl.values())o.addComponent(l);const c=new wA(n,r,o);return Aa.set(s,c),c}function Du(t=jl){const e=Aa.get(t);if(!e&&t===jl&&Pg())return xg();if(!e)throw br.create("no-app",{appName:t});return e}function In(t,e,n){var r;let s=(r=yA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(c.join(" "));return}ss(new kr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const TA="firebase-heartbeat-database",IA=1,Xi="firebase-heartbeat-store";let ml=null;function Dg(){return ml||(ml=jI(TA,IA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Xi)}catch(n){console.warn(n)}}}}).catch(t=>{throw br.create("idb-open",{originalErrorMessage:t.message})})),ml}async function AA(t){try{const n=(await Dg()).transaction(Xi),r=await n.objectStore(Xi).get(Vg(t));return await n.done,r}catch(e){if(e instanceof tr)Qn.warn(e.message);else{const n=br.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(n.message)}}}async function Cf(t,e){try{const r=(await Dg()).transaction(Xi,"readwrite");await r.objectStore(Xi).put(e,Vg(t)),await r.done}catch(n){if(n instanceof tr)Qn.warn(n.message);else{const r=br.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function Vg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const bA=1024,RA=30;class SA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new CA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=kf();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>RA){const o=kA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kf(),{heartbeatsToSend:r,unsentEntries:s}=PA(this._heartbeatsCache.heartbeats),i=Ia(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Qn.warn(n),""}}}function kf(){return new Date().toISOString().substring(0,10)}function PA(t,e=bA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Nf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Nf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class CA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mI()?gI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await AA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Nf(t){return Ia(JSON.stringify({version:2,heartbeats:t})).length}function kA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function NA(t){ss(new kr("platform-logger",e=>new qI(e),"PRIVATE")),ss(new kr("heartbeat",e=>new SA(e),"PRIVATE")),In(Ul,Sf,t),In(Ul,Sf,"esm2017"),In("fire-js","")}NA("");function Vu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Og(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xA=Og,Mg=new fo("auth","Firebase",Og());/**
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
 */const ba=new Nu("@firebase/auth");function DA(t,...e){ba.logLevel<=Ee.WARN&&ba.warn(`Auth (${Js}): ${t}`,...e)}function ra(t,...e){ba.logLevel<=Ee.ERROR&&ba.error(`Auth (${Js}): ${t}`,...e)}/**
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
 */function hn(t,...e){throw Ou(t,...e)}function An(t,...e){return Ou(t,...e)}function Lg(t,e,n){const r=Object.assign(Object.assign({},xA()),{[e]:n});return new fo("auth","Firebase",r).create(e,{appName:t.name})}function Wn(t){return Lg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ou(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Mg.create(t,...e)}function ue(t,e,...n){if(!t)throw Ou(e,...n)}function $n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ra(e),new Error(e)}function Jn(t,e){t||$n(e)}/**
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
 */function $l(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function VA(){return xf()==="http:"||xf()==="https:"}function xf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function OA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VA()||hI()||"connection"in navigator)?navigator.onLine:!0}function MA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class mo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jn(n>e,"Short delay should be less than long delay!"),this.isMobile=cI()||dI()}get(){return OA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mu(t,e){Jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Fg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const LA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const FA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],UA=new mo(3e4,6e4);function Ur(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nr(t,e,n,r,s={}){return Ug(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=po(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return uI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&us(t.emulatorConfig.host)&&(u.credentials="include"),Fg.fetch()(await jg(t,t.config.apiHost,n,c),u)})}async function Ug(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},LA),e);try{const s=new BA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw zo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw zo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw zo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw zo(t,"user-disabled",o);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Lg(t,d,u);hn(t,d)}}catch(s){if(s instanceof tr)throw s;hn(t,"network-request-failed",{message:String(s)})}}async function go(t,e,n,r,s={}){const i=await nr(t,e,n,r,s);return"mfaPendingCredential"in i&&hn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function jg(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Mu(t.config,s):`${t.config.apiScheme}://${s}`;return FA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function jA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class BA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(An(this.auth,"network-request-failed")),UA.get())})}}function zo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=An(t,e,r);return s.customData._tokenResponse=n,s}function Df(t){return t!==void 0&&t.enterprise!==void 0}class $A{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return jA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function qA(t,e){return nr(t,"GET","/v2/recaptchaConfig",Ur(t,e))}/**
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
 */async function HA(t,e){return nr(t,"POST","/v1/accounts:delete",e)}async function Ra(t,e){return nr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Fi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function WA(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),s=Lu(r);ue(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Fi(gl(s.auth_time)),issuedAtTime:Fi(gl(s.iat)),expirationTime:Fi(gl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function gl(t){return Number(t)*1e3}function Lu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ra("JWT malformed, contained fewer than 3 sections"),null;try{const s=bg(n);return s?JSON.parse(s):(ra("Failed to decode base64 JWT payload"),null)}catch(s){return ra("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Vf(t){const e=Lu(t);return ue(e,"internal-error"),ue(typeof e.exp<"u","internal-error"),ue(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Bs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tr&&GA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function GA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class zA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ql{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Fi(this.lastLoginAt),this.creationTime=Fi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Sa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Bs(t,Ra(n,{idToken:r}));ue(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Bg(i.providerUserInfo):[],c=QA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),d=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new ql(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(t,p)}async function KA(t){const e=Fe(t);await Sa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function QA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Bg(t){return t.map(e=>{var{providerId:n}=e,r=Vu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function JA(t,e){const n=await Ug(t,{},async()=>{const r=po({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await jg(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&us(t.emulatorConfig.host)&&(l.credentials="include"),Fg.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function YA(t,e){return nr(t,"POST","/v2/accounts:revokeToken",Ur(t,e))}/**
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
 */class xs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ue(e.idToken,"internal-error"),ue(typeof e.idToken<"u","internal-error"),ue(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ue(e.length!==0,"internal-error");const n=Vf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ue(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await JA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new xs;return r&&(ue(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(ue(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(ue(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xs,this.toJSON())}_performRefresh(){return $n("not implemented")}}/**
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
 */function ur(t,e){ue(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class sn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Vu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ql(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Bs(this,this.stsTokenManager.getToken(this.auth,e));return ue(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return WA(this,e)}reload(){return KA(this)}_assign(e){this!==e&&(ue(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new sn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ue(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Sa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Gt(this.auth.app))return Promise.reject(Wn(this.auth));const e=await this.getIdToken();return await Bs(this,HA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,d;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,R=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(c=n.tenantId)!==null&&c!==void 0?c:void 0,x=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,$=(u=n.createdAt)!==null&&u!==void 0?u:void 0,L=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:B,emailVerified:q,isAnonymous:ee,providerData:se,stsTokenManager:E}=n;ue(B&&E,e,"internal-error");const y=xs.fromJSON(this.name,E);ue(typeof B=="string",e,"internal-error"),ur(p,e.name),ur(m,e.name),ue(typeof q=="boolean",e,"internal-error"),ue(typeof ee=="boolean",e,"internal-error"),ur(_,e.name),ur(R,e.name),ur(k,e.name),ur(x,e.name),ur($,e.name),ur(L,e.name);const T=new sn({uid:B,auth:e,email:m,emailVerified:q,displayName:p,isAnonymous:ee,photoURL:R,phoneNumber:_,tenantId:k,stsTokenManager:y,createdAt:$,lastLoginAt:L});return se&&Array.isArray(se)&&(T.providerData=se.map(A=>Object.assign({},A))),x&&(T._redirectEventId=x),T}static async _fromIdTokenResponse(e,n,r=!1){const s=new xs;s.updateFromServerResponse(n);const i=new sn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Sa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];ue(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Bg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new xs;c.updateFromIdToken(r);const l=new sn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new ql(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const Of=new Map;function qn(t){Jn(t instanceof Function,"Expected a class definition");let e=Of.get(t);return e?(Jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Of.set(t,e),e)}/**
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
 */class $g{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}$g.type="NONE";const Mf=$g;/**
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
 */function sa(t,e,n){return`firebase:${t}:${e}:${n}`}class Ds{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=sa(this.userKey,s.apiKey,i),this.fullPersistenceKey=sa("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ra(this.auth,{idToken:e}).catch(()=>{});return n?sn._fromGetAccountInfoResponse(this.auth,n,e):null}return sn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ds(qn(Mf),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||qn(Mf);const o=sa(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const d=await u._get(o);if(d){let p;if(typeof d=="string"){const m=await Ra(e,{idToken:d}).catch(()=>{});if(!m)break;p=await sn._fromGetAccountInfoResponse(e,m,d)}else p=sn._fromJSON(e,d);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Ds(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Ds(i,e,r))}}/**
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
 */function Lf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kg(e))return"Blackberry";if(Qg(e))return"Webos";if(Hg(e))return"Safari";if((e.includes("chrome/")||Wg(e))&&!e.includes("edge/"))return"Chrome";if(zg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function qg(t=St()){return/firefox\//i.test(t)}function Hg(t=St()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Wg(t=St()){return/crios\//i.test(t)}function Gg(t=St()){return/iemobile/i.test(t)}function zg(t=St()){return/android/i.test(t)}function Kg(t=St()){return/blackberry/i.test(t)}function Qg(t=St()){return/webos/i.test(t)}function Fu(t=St()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function XA(t=St()){var e;return Fu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ZA(){return fI()&&document.documentMode===10}function Jg(t=St()){return Fu(t)||zg(t)||Qg(t)||Kg(t)||/windows phone/i.test(t)||Gg(t)}/**
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
 */function Yg(t,e=[]){let n;switch(t){case"Browser":n=Lf(St());break;case"Worker":n=`${Lf(St())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Js}/${r}`}/**
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
 */class e0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function t0(t,e={}){return nr(t,"GET","/v2/passwordPolicy",Ur(t,e))}/**
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
 */const n0=6;class r0{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:n0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class s0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ff(this),this.idTokenSubscription=new Ff(this),this.beforeStateQueue=new e0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Mg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Ds.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ra(this,{idToken:e}),r=await sn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Gt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ue(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Sa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Gt(this.app))return Promise.reject(Wn(this));const n=e?Fe(e):null;return n&&ue(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ue(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Gt(this.app)?Promise.reject(Wn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Gt(this.app)?Promise.reject(Wn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await t0(this),n=new r0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new fo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await YA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qn(e)||this._popupRedirectResolver;ue(n,this,"argument-error"),this.redirectPersistenceManager=await Ds.create(this,[qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(ue(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ue(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(Gt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function hs(t){return Fe(t)}class Ff{constructor(e){this.auth=e,this.observer=null,this.addObserver=wI(n=>this.observer=n)}get next(){return ue(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let hc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function i0(t){hc=t}function Xg(t){return hc.loadJS(t)}function o0(){return hc.recaptchaEnterpriseScript}function a0(){return hc.gapiScript}function c0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class l0{constructor(){this.enterprise=new u0}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class u0{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const h0="recaptcha-enterprise",Zg="NO_RECAPTCHA";class d0{constructor(e){this.type=h0,this.auth=hs(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{qA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new $A(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Df(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Zg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new l0().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Df(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=o0();l.length!==0&&(l+=c),Xg(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Uf(t,e,n,r=!1,s=!1){const i=new d0(t);let o;if(s)o=Zg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Hl(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Uf(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Uf(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
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
 */function f0(t,e){const n=uc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(rs(i,e??{}))return s;hn(s,"already-initialized")}return n.initialize({options:e})}function p0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function m0(t,e,n){const r=hs(t);ue(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=e_(e),{host:o,port:c}=g0(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},d=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ue(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ue(rs(u,r.config.emulator)&&rs(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,us(o)?(Cu(`${i}//${o}${l}`),ku("Auth",!0)):_0()}function e_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function g0(t){const e=e_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:jf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:jf(o)}}}function jf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function _0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Uu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $n("not implemented")}_getIdTokenResponse(e){return $n("not implemented")}_linkToIdToken(e,n){return $n("not implemented")}_getReauthenticationResolver(e){return $n("not implemented")}}async function y0(t,e){return nr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function v0(t,e){return go(t,"POST","/v1/accounts:signInWithPassword",Ur(t,e))}/**
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
 */async function E0(t,e){return go(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}async function w0(t,e){return go(t,"POST","/v1/accounts:signInWithEmailLink",Ur(t,e))}/**
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
 */class Zi extends Uu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Zi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Zi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hl(e,n,"signInWithPassword",v0);case"emailLink":return E0(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Hl(e,r,"signUpPassword",y0);case"emailLink":return w0(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Vs(t,e){return go(t,"POST","/v1/accounts:signInWithIdp",Ur(t,e))}/**
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
 */const T0="http://localhost";class is extends Uu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Vu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new is(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Vs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Vs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Vs(e,n)}buildRequest(){const e={requestUri:T0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=po(n)}return e}}/**
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
 */function I0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function A0(t){const e=bi(Ri(t)).link,n=e?bi(Ri(e)).deep_link_id:null,r=bi(Ri(t)).deep_link_id;return(r?bi(Ri(r)).link:null)||r||n||e||t}class ju{constructor(e){var n,r,s,i,o,c;const l=bi(Ri(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,p=I0((s=l.mode)!==null&&s!==void 0?s:null);ue(u&&d&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=d,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=A0(e);try{return new ju(n)}catch{return null}}}/**
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
 */class Ys{constructor(){this.providerId=Ys.PROVIDER_ID}static credential(e,n){return Zi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=ju.parseLink(n);return ue(r,"argument-error"),Zi._fromEmailAndCode(e,r.code,r.tenantId)}}Ys.PROVIDER_ID="password";Ys.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ys.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class t_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class _o extends t_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class gr extends _o{constructor(){super("facebook.com")}static credential(e){return is._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.FACEBOOK_SIGN_IN_METHOD="facebook.com";gr.PROVIDER_ID="facebook.com";/**
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
 */class _r extends _o{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return is._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.GOOGLE_SIGN_IN_METHOD="google.com";_r.PROVIDER_ID="google.com";/**
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
 */class yr extends _o{constructor(){super("github.com")}static credential(e){return is._fromParams({providerId:yr.PROVIDER_ID,signInMethod:yr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yr.credentialFromTaggedObject(e)}static credentialFromError(e){return yr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yr.credential(e.oauthAccessToken)}catch{return null}}}yr.GITHUB_SIGN_IN_METHOD="github.com";yr.PROVIDER_ID="github.com";/**
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
 */class vr extends _o{constructor(){super("twitter.com")}static credential(e,n){return is._fromParams({providerId:vr.PROVIDER_ID,signInMethod:vr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return vr.credentialFromTaggedObject(e)}static credentialFromError(e){return vr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return vr.credential(n,r)}catch{return null}}}vr.TWITTER_SIGN_IN_METHOD="twitter.com";vr.PROVIDER_ID="twitter.com";/**
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
 */async function b0(t,e){return go(t,"POST","/v1/accounts:signUp",Ur(t,e))}/**
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
 */class os{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await sn._fromIdTokenResponse(e,r,s),o=Bf(r);return new os({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Bf(r);return new os({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Bf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Pa extends tr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Pa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Pa(e,n,r,s)}}function n_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Pa._fromErrorAndOperation(t,i,e,r):i})}async function R0(t,e,n=!1){const r=await Bs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return os._forOperation(t,"link",r)}/**
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
 */async function S0(t,e,n=!1){const{auth:r}=t;if(Gt(r.app))return Promise.reject(Wn(r));const s="reauthenticate";try{const i=await Bs(t,n_(r,s,e,t),n);ue(i.idToken,r,"internal-error");const o=Lu(i.idToken);ue(o,r,"internal-error");const{sub:c}=o;return ue(t.uid===c,r,"user-mismatch"),os._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&hn(r,"user-mismatch"),i}}/**
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
 */async function r_(t,e,n=!1){if(Gt(t.app))return Promise.reject(Wn(t));const r="signIn",s=await n_(t,r,e),i=await os._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function P0(t,e){return r_(hs(t),e)}/**
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
 */async function s_(t){const e=hs(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function C0(t,e,n){if(Gt(t.app))return Promise.reject(Wn(t));const r=hs(t),o=await Hl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",b0).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&s_(t),l}),c=await os._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function k0(t,e,n){return Gt(t.app)?Promise.reject(Wn(t)):P0(Fe(t),Ys.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&s_(t),r})}/**
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
 */async function N0(t,e){return nr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function $f(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Fe(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Bs(r,N0(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function x0(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function D0(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function V0(t,e,n,r){return Fe(t).onAuthStateChanged(e,n,r)}function O0(t){return Fe(t).signOut()}const Ca="__sak";/**
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
 */class i_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ca,"1"),this.storage.removeItem(Ca),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const M0=1e3,L0=10;class o_ extends i_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Jg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);ZA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,L0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},M0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}o_.type="LOCAL";const F0=o_;/**
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
 */class a_ extends i_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}a_.type="SESSION";const c_=a_;/**
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
 */function U0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class dc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new dc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await U0(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}dc.receivers=[];/**
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
 */function Bu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class j0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Bu("",20);s.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function bn(){return window}function B0(t){bn().location.href=t}/**
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
 */function l_(){return typeof bn().WorkerGlobalScope<"u"&&typeof bn().importScripts=="function"}async function $0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function q0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function H0(){return l_()?self:null}/**
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
 */const u_="firebaseLocalStorageDb",W0=1,ka="firebaseLocalStorage",h_="fbase_key";class yo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function fc(t,e){return t.transaction([ka],e?"readwrite":"readonly").objectStore(ka)}function G0(){const t=indexedDB.deleteDatabase(u_);return new yo(t).toPromise()}function Wl(){const t=indexedDB.open(u_,W0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ka,{keyPath:h_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ka)?e(r):(r.close(),await G0(),e(await Wl()))})})}async function qf(t,e,n){const r=fc(t,!0).put({[h_]:e,value:n});return new yo(r).toPromise()}async function z0(t,e){const n=fc(t,!1).get(e),r=await new yo(n).toPromise();return r===void 0?null:r.value}function Hf(t,e){const n=fc(t,!0).delete(e);return new yo(n).toPromise()}const K0=800,Q0=3;class d_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Wl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Q0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return l_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=dc._getInstance(H0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await $0(),!this.activeServiceWorker)return;this.sender=new j0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||q0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Wl();return await qf(e,Ca,"1"),await Hf(e,Ca),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>qf(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>z0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Hf(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=fc(s,!1).getAll();return new yo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),K0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}d_.type="LOCAL";const J0=d_;new mo(3e4,6e4);/**
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
 */function Y0(t,e){return e?qn(e):(ue(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class $u extends Uu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Vs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Vs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Vs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function X0(t){return r_(t.auth,new $u(t),t.bypassAuthState)}function Z0(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),S0(n,new $u(t),t.bypassAuthState)}async function eb(t){const{auth:e,user:n}=t;return ue(n,e,"internal-error"),R0(n,new $u(t),t.bypassAuthState)}/**
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
 */class f_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return X0;case"linkViaPopup":case"linkViaRedirect":return eb;case"reauthViaPopup":case"reauthViaRedirect":return Z0;default:hn(this.auth,"internal-error")}}resolve(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const tb=new mo(2e3,1e4);class Rs extends f_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Rs.currentPopupAction&&Rs.currentPopupAction.cancel(),Rs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ue(e,this.auth,"internal-error"),e}async onExecution(){Jn(this.filter.length===1,"Popup operations only handle one event");const e=Bu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(An(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(An(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(An(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,tb.get())};e()}}Rs.currentPopupAction=null;/**
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
 */const nb="pendingRedirect",ia=new Map;class rb extends f_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ia.get(this.auth._key());if(!e){try{const r=await sb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ia.set(this.auth._key(),e)}return this.bypassAuthState||ia.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function sb(t,e){const n=ab(e),r=ob(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function ib(t,e){ia.set(t._key(),e)}function ob(t){return qn(t._redirectPersistence)}function ab(t){return sa(nb,t.config.apiKey,t.name)}async function cb(t,e,n=!1){if(Gt(t.app))return Promise.reject(Wn(t));const r=hs(t),s=Y0(r,e),o=await new rb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const lb=600*1e3;class ub{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!hb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!p_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(An(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=lb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Wf(e))}saveEventToCache(e){this.cachedEventUids.add(Wf(e)),this.lastProcessedEventTime=Date.now()}}function Wf(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function p_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function hb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return p_(t);default:return!1}}/**
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
 */async function db(t,e={}){return nr(t,"GET","/v1/projects",e)}/**
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
 */const fb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pb=/^https?/;async function mb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await db(t);for(const n of e)try{if(gb(n))return}catch{}hn(t,"unauthorized-domain")}function gb(t){const e=$l(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!pb.test(n))return!1;if(fb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const _b=new mo(3e4,6e4);function Gf(){const t=bn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function yb(t){return new Promise((e,n)=>{var r,s,i;function o(){Gf(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gf(),n(An(t,"network-request-failed"))},timeout:_b.get()})}if(!((s=(r=bn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=bn().gapi)===null||i===void 0)&&i.load)o();else{const c=c0("iframefcb");return bn()[c]=()=>{gapi.load?o():n(An(t,"network-request-failed"))},Xg(`${a0()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw oa=null,e})}let oa=null;function vb(t){return oa=oa||yb(t),oa}/**
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
 */const Eb=new mo(5e3,15e3),wb="__/auth/iframe",Tb="emulator/auth/iframe",Ib={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ab=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bb(t){const e=t.config;ue(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Mu(e,Tb):`https://${t.config.authDomain}/${wb}`,r={apiKey:e.apiKey,appName:t.name,v:Js},s=Ab.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${po(r).slice(1)}`}async function Rb(t){const e=await vb(t),n=bn().gapi;return ue(n,t,"internal-error"),e.open({where:document.body,url:bb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ib,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=An(t,"network-request-failed"),c=bn().setTimeout(()=>{i(o)},Eb.get());function l(){bn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Sb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pb=500,Cb=600,kb="_blank",Nb="http://localhost";class zf{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function xb(t,e,n,r=Pb,s=Cb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Sb),{width:r.toString(),height:s.toString(),top:i,left:o}),u=St().toLowerCase();n&&(c=Wg(u)?kb:n),qg(u)&&(e=e||Nb,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[_,R])=>`${m}${_}=${R},`,"");if(XA(u)&&c!=="_self")return Db(e||"",c),new zf(null);const p=window.open(e||"",c,d);ue(p,t,"popup-blocked");try{p.focus()}catch{}return new zf(p)}function Db(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Vb="__/auth/handler",Ob="emulator/auth/handler",Mb=encodeURIComponent("fac");async function Kf(t,e,n,r,s,i){ue(t.config.authDomain,t,"auth-domain-config-required"),ue(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Js,eventId:s};if(e instanceof t_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,p]of Object.entries({}))o[d]=p}if(e instanceof _o){const d=e.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const l=await t._getAppCheckToken(),u=l?`#${Mb}=${encodeURIComponent(l)}`:"";return`${Lb(t)}?${po(c).slice(1)}${u}`}function Lb({config:t}){return t.emulator?Mu(t,Ob):`https://${t.authDomain}/${Vb}`}/**
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
 */const _l="webStorageSupport";class Fb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=c_,this._completeRedirectFn=cb,this._overrideRedirectResult=ib}async _openPopup(e,n,r,s){var i;Jn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Kf(e,n,r,$l(),s);return xb(e,o,Bu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Kf(e,n,r,$l(),s);return B0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Jn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Rb(e),r=new ub(e);return n.register("authEvent",s=>(ue(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_l,{type:_l},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[_l];o!==void 0&&n(!!o),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=mb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Jg()||Hg()||Fu()}}const Ub=Fb;var Qf="@firebase/auth",Jf="1.10.8";/**
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
 */class jb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ue(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Bb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function $b(t){ss(new kr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;ue(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yg(t)},u=new s0(r,s,i,l);return p0(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ss(new kr("auth-internal",e=>{const n=hs(e.getProvider("auth").getImmediate());return(r=>new jb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),In(Qf,Jf,Bb(t)),In(Qf,Jf,"esm2017")}/**
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
 */const qb=300,Hb=Cg("authIdTokenMaxAge")||qb;let Yf=null;const Wb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Hb)return;const s=n==null?void 0:n.token;Yf!==s&&(Yf=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Gb(t=Du()){const e=uc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=f0(t,{popupRedirectResolver:Ub,persistence:[J0,F0,c_]}),r=Cg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Wb(i.toString());D0(n,o,()=>o(n.currentUser)),x0(n,c=>o(c))}}const s=Rg("auth");return s&&m0(n,`http://${s}`),n}function zb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}i0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=An("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",zb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});$b("Browser");var Kb="firebase",Qb="11.10.0";/**
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
 */In(Kb,Qb,"app");var Xf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Rr,m_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function T(){}T.prototype=y.prototype,E.D=y.prototype,E.prototype=new T,E.prototype.constructor=E,E.C=function(A,b,P){for(var w=Array(arguments.length-2),Se=2;Se<arguments.length;Se++)w[Se-2]=arguments[Se];return y.prototype[b].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,y,T){T||(T=0);var A=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)A[b]=y.charCodeAt(T++)|y.charCodeAt(T++)<<8|y.charCodeAt(T++)<<16|y.charCodeAt(T++)<<24;else for(b=0;16>b;++b)A[b]=y[T++]|y[T++]<<8|y[T++]<<16|y[T++]<<24;y=E.g[0],T=E.g[1],b=E.g[2];var P=E.g[3],w=y+(P^T&(b^P))+A[0]+3614090360&4294967295;y=T+(w<<7&4294967295|w>>>25),w=P+(b^y&(T^b))+A[1]+3905402710&4294967295,P=y+(w<<12&4294967295|w>>>20),w=b+(T^P&(y^T))+A[2]+606105819&4294967295,b=P+(w<<17&4294967295|w>>>15),w=T+(y^b&(P^y))+A[3]+3250441966&4294967295,T=b+(w<<22&4294967295|w>>>10),w=y+(P^T&(b^P))+A[4]+4118548399&4294967295,y=T+(w<<7&4294967295|w>>>25),w=P+(b^y&(T^b))+A[5]+1200080426&4294967295,P=y+(w<<12&4294967295|w>>>20),w=b+(T^P&(y^T))+A[6]+2821735955&4294967295,b=P+(w<<17&4294967295|w>>>15),w=T+(y^b&(P^y))+A[7]+4249261313&4294967295,T=b+(w<<22&4294967295|w>>>10),w=y+(P^T&(b^P))+A[8]+1770035416&4294967295,y=T+(w<<7&4294967295|w>>>25),w=P+(b^y&(T^b))+A[9]+2336552879&4294967295,P=y+(w<<12&4294967295|w>>>20),w=b+(T^P&(y^T))+A[10]+4294925233&4294967295,b=P+(w<<17&4294967295|w>>>15),w=T+(y^b&(P^y))+A[11]+2304563134&4294967295,T=b+(w<<22&4294967295|w>>>10),w=y+(P^T&(b^P))+A[12]+1804603682&4294967295,y=T+(w<<7&4294967295|w>>>25),w=P+(b^y&(T^b))+A[13]+4254626195&4294967295,P=y+(w<<12&4294967295|w>>>20),w=b+(T^P&(y^T))+A[14]+2792965006&4294967295,b=P+(w<<17&4294967295|w>>>15),w=T+(y^b&(P^y))+A[15]+1236535329&4294967295,T=b+(w<<22&4294967295|w>>>10),w=y+(b^P&(T^b))+A[1]+4129170786&4294967295,y=T+(w<<5&4294967295|w>>>27),w=P+(T^b&(y^T))+A[6]+3225465664&4294967295,P=y+(w<<9&4294967295|w>>>23),w=b+(y^T&(P^y))+A[11]+643717713&4294967295,b=P+(w<<14&4294967295|w>>>18),w=T+(P^y&(b^P))+A[0]+3921069994&4294967295,T=b+(w<<20&4294967295|w>>>12),w=y+(b^P&(T^b))+A[5]+3593408605&4294967295,y=T+(w<<5&4294967295|w>>>27),w=P+(T^b&(y^T))+A[10]+38016083&4294967295,P=y+(w<<9&4294967295|w>>>23),w=b+(y^T&(P^y))+A[15]+3634488961&4294967295,b=P+(w<<14&4294967295|w>>>18),w=T+(P^y&(b^P))+A[4]+3889429448&4294967295,T=b+(w<<20&4294967295|w>>>12),w=y+(b^P&(T^b))+A[9]+568446438&4294967295,y=T+(w<<5&4294967295|w>>>27),w=P+(T^b&(y^T))+A[14]+3275163606&4294967295,P=y+(w<<9&4294967295|w>>>23),w=b+(y^T&(P^y))+A[3]+4107603335&4294967295,b=P+(w<<14&4294967295|w>>>18),w=T+(P^y&(b^P))+A[8]+1163531501&4294967295,T=b+(w<<20&4294967295|w>>>12),w=y+(b^P&(T^b))+A[13]+2850285829&4294967295,y=T+(w<<5&4294967295|w>>>27),w=P+(T^b&(y^T))+A[2]+4243563512&4294967295,P=y+(w<<9&4294967295|w>>>23),w=b+(y^T&(P^y))+A[7]+1735328473&4294967295,b=P+(w<<14&4294967295|w>>>18),w=T+(P^y&(b^P))+A[12]+2368359562&4294967295,T=b+(w<<20&4294967295|w>>>12),w=y+(T^b^P)+A[5]+4294588738&4294967295,y=T+(w<<4&4294967295|w>>>28),w=P+(y^T^b)+A[8]+2272392833&4294967295,P=y+(w<<11&4294967295|w>>>21),w=b+(P^y^T)+A[11]+1839030562&4294967295,b=P+(w<<16&4294967295|w>>>16),w=T+(b^P^y)+A[14]+4259657740&4294967295,T=b+(w<<23&4294967295|w>>>9),w=y+(T^b^P)+A[1]+2763975236&4294967295,y=T+(w<<4&4294967295|w>>>28),w=P+(y^T^b)+A[4]+1272893353&4294967295,P=y+(w<<11&4294967295|w>>>21),w=b+(P^y^T)+A[7]+4139469664&4294967295,b=P+(w<<16&4294967295|w>>>16),w=T+(b^P^y)+A[10]+3200236656&4294967295,T=b+(w<<23&4294967295|w>>>9),w=y+(T^b^P)+A[13]+681279174&4294967295,y=T+(w<<4&4294967295|w>>>28),w=P+(y^T^b)+A[0]+3936430074&4294967295,P=y+(w<<11&4294967295|w>>>21),w=b+(P^y^T)+A[3]+3572445317&4294967295,b=P+(w<<16&4294967295|w>>>16),w=T+(b^P^y)+A[6]+76029189&4294967295,T=b+(w<<23&4294967295|w>>>9),w=y+(T^b^P)+A[9]+3654602809&4294967295,y=T+(w<<4&4294967295|w>>>28),w=P+(y^T^b)+A[12]+3873151461&4294967295,P=y+(w<<11&4294967295|w>>>21),w=b+(P^y^T)+A[15]+530742520&4294967295,b=P+(w<<16&4294967295|w>>>16),w=T+(b^P^y)+A[2]+3299628645&4294967295,T=b+(w<<23&4294967295|w>>>9),w=y+(b^(T|~P))+A[0]+4096336452&4294967295,y=T+(w<<6&4294967295|w>>>26),w=P+(T^(y|~b))+A[7]+1126891415&4294967295,P=y+(w<<10&4294967295|w>>>22),w=b+(y^(P|~T))+A[14]+2878612391&4294967295,b=P+(w<<15&4294967295|w>>>17),w=T+(P^(b|~y))+A[5]+4237533241&4294967295,T=b+(w<<21&4294967295|w>>>11),w=y+(b^(T|~P))+A[12]+1700485571&4294967295,y=T+(w<<6&4294967295|w>>>26),w=P+(T^(y|~b))+A[3]+2399980690&4294967295,P=y+(w<<10&4294967295|w>>>22),w=b+(y^(P|~T))+A[10]+4293915773&4294967295,b=P+(w<<15&4294967295|w>>>17),w=T+(P^(b|~y))+A[1]+2240044497&4294967295,T=b+(w<<21&4294967295|w>>>11),w=y+(b^(T|~P))+A[8]+1873313359&4294967295,y=T+(w<<6&4294967295|w>>>26),w=P+(T^(y|~b))+A[15]+4264355552&4294967295,P=y+(w<<10&4294967295|w>>>22),w=b+(y^(P|~T))+A[6]+2734768916&4294967295,b=P+(w<<15&4294967295|w>>>17),w=T+(P^(b|~y))+A[13]+1309151649&4294967295,T=b+(w<<21&4294967295|w>>>11),w=y+(b^(T|~P))+A[4]+4149444226&4294967295,y=T+(w<<6&4294967295|w>>>26),w=P+(T^(y|~b))+A[11]+3174756917&4294967295,P=y+(w<<10&4294967295|w>>>22),w=b+(y^(P|~T))+A[2]+718787259&4294967295,b=P+(w<<15&4294967295|w>>>17),w=T+(P^(b|~y))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(b+(w<<21&4294967295|w>>>11))&4294967295,E.g[2]=E.g[2]+b&4294967295,E.g[3]=E.g[3]+P&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var T=y-this.blockSize,A=this.B,b=this.h,P=0;P<y;){if(b==0)for(;P<=T;)s(this,E,P),P+=this.blockSize;if(typeof E=="string"){for(;P<y;)if(A[b++]=E.charCodeAt(P++),b==this.blockSize){s(this,A),b=0;break}}else for(;P<y;)if(A[b++]=E[P++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var T=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=T&255,T/=256;for(this.u(E),E=Array(16),y=T=0;4>y;++y)for(var A=0;32>A;A+=8)E[T++]=this.g[y]>>>A&255;return E};function i(E,y){var T=c;return Object.prototype.hasOwnProperty.call(T,E)?T[E]:T[E]=y(E)}function o(E,y){this.h=y;for(var T=[],A=!0,b=E.length-1;0<=b;b--){var P=E[b]|0;A&&P==y||(T[b]=P,A=!1)}this.g=T}var c={};function l(E){return-128<=E&&128>E?i(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return p;if(0>E)return x(u(-E));for(var y=[],T=1,A=0;E>=T;A++)y[A]=E/T|0,T*=4294967296;return new o(y,0)}function d(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return x(d(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var T=u(Math.pow(y,8)),A=p,b=0;b<E.length;b+=8){var P=Math.min(8,E.length-b),w=parseInt(E.substring(b,b+P),y);8>P?(P=u(Math.pow(y,P)),A=A.j(P).add(u(w))):(A=A.j(T),A=A.add(u(w)))}return A}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-x(this).m();for(var E=0,y=1,T=0;T<this.g.length;T++){var A=this.i(T);E+=(0<=A?A:4294967296+A)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(R(this))return"0";if(k(this))return"-"+x(this).toString(E);for(var y=u(Math.pow(E,6)),T=this,A="";;){var b=q(T,y).g;T=$(T,b.j(y));var P=((0<T.g.length?T.g[0]:T.h)>>>0).toString(E);if(T=b,R(T))return P+A;for(;6>P.length;)P="0"+P;A=P+A}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function R(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function k(E){return E.h==-1}t.l=function(E){return E=$(this,E),k(E)?-1:R(E)?0:1};function x(E){for(var y=E.g.length,T=[],A=0;A<y;A++)T[A]=~E.g[A];return new o(T,~E.h).add(m)}t.abs=function(){return k(this)?x(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),T=[],A=0,b=0;b<=y;b++){var P=A+(this.i(b)&65535)+(E.i(b)&65535),w=(P>>>16)+(this.i(b)>>>16)+(E.i(b)>>>16);A=w>>>16,P&=65535,w&=65535,T[b]=w<<16|P}return new o(T,T[T.length-1]&-2147483648?-1:0)};function $(E,y){return E.add(x(y))}t.j=function(E){if(R(this)||R(E))return p;if(k(this))return k(E)?x(this).j(x(E)):x(x(this).j(E));if(k(E))return x(this.j(x(E)));if(0>this.l(_)&&0>E.l(_))return u(this.m()*E.m());for(var y=this.g.length+E.g.length,T=[],A=0;A<2*y;A++)T[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<E.g.length;b++){var P=this.i(A)>>>16,w=this.i(A)&65535,Se=E.i(b)>>>16,$t=E.i(b)&65535;T[2*A+2*b]+=w*$t,L(T,2*A+2*b),T[2*A+2*b+1]+=P*$t,L(T,2*A+2*b+1),T[2*A+2*b+1]+=w*Se,L(T,2*A+2*b+1),T[2*A+2*b+2]+=P*Se,L(T,2*A+2*b+2)}for(A=0;A<y;A++)T[A]=T[2*A+1]<<16|T[2*A];for(A=y;A<2*y;A++)T[A]=0;return new o(T,0)};function L(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function B(E,y){this.g=E,this.h=y}function q(E,y){if(R(y))throw Error("division by zero");if(R(E))return new B(p,p);if(k(E))return y=q(x(E),y),new B(x(y.g),x(y.h));if(k(y))return y=q(E,x(y)),new B(x(y.g),y.h);if(30<E.g.length){if(k(E)||k(y))throw Error("slowDivide_ only works with positive integers.");for(var T=m,A=y;0>=A.l(E);)T=ee(T),A=ee(A);var b=se(T,1),P=se(A,1);for(A=se(A,2),T=se(T,2);!R(A);){var w=P.add(A);0>=w.l(E)&&(b=b.add(T),P=w),A=se(A,1),T=se(T,1)}return y=$(E,b.j(y)),new B(b,y)}for(b=p;0<=E.l(y);){for(T=Math.max(1,Math.floor(E.m()/y.m())),A=Math.ceil(Math.log(T)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),P=u(T),w=P.j(y);k(w)||0<w.l(E);)T-=A,P=u(T),w=P.j(y);R(P)&&(P=m),b=b.add(P),E=$(E,w)}return new B(b,E)}t.A=function(E){return q(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)&E.i(A);return new o(T,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)|E.i(A);return new o(T,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),T=[],A=0;A<y;A++)T[A]=this.i(A)^E.i(A);return new o(T,this.h^E.h)};function ee(E){for(var y=E.g.length+1,T=[],A=0;A<y;A++)T[A]=E.i(A)<<1|E.i(A-1)>>>31;return new o(T,E.h)}function se(E,y){var T=y>>5;y%=32;for(var A=E.g.length-T,b=[],P=0;P<A;P++)b[P]=0<y?E.i(P+T)>>>y|E.i(P+T+1)<<32-y:E.i(P+T);return new o(b,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,m_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=d,Rr=o}).apply(typeof Xf<"u"?Xf:typeof self<"u"?self:typeof window<"u"?window:{});var Ko=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var g_,Si,__,aa,Gl,y_,v_,E_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,f){return a==Array.prototype||a==Object.prototype||(a[h]=f.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Ko=="object"&&Ko];for(var h=0;h<a.length;++h){var f=a[h];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var f=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in f))break e;f=f[C]}a=a[a.length-1],g=f[a],h=h(g),h!=g&&h!=null&&e(f,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var f=0,g=!1,C={next:function(){if(!g&&f<a.length){var N=f++;return{value:h(N,a[N]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function d(a,h,f){return a.call.apply(a.bind,arguments)}function p(a,h,f){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function m(a,h,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:p,m.apply(null,arguments)}function _(a,h){var f=Array.prototype.slice.call(arguments,1);return function(){var g=f.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function R(a,h){function f(){}f.prototype=h.prototype,a.aa=h.prototype,a.prototype=new f,a.prototype.constructor=a,a.Qb=function(g,C,N){for(var G=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)G[Ve-2]=arguments[Ve];return h.prototype[C].apply(g,G)}}function k(a){const h=a.length;if(0<h){const f=Array(h);for(let g=0;g<h;g++)f[g]=a[g];return f}return[]}function x(a,h){for(let f=1;f<arguments.length;f++){const g=arguments[f];if(l(g)){const C=a.length||0,N=g.length||0;a.length=C+N;for(let G=0;G<N;G++)a[C+G]=g[G]}else a.push(g)}}class ${constructor(h,f){this.i=h,this.j=f,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function L(a){return/^[\s\xa0]*$/.test(a)}function B(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var ee=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function se(a,h,f){for(const g in a)h.call(f,a[g],g,a)}function E(a,h){for(const f in a)h.call(void 0,a[f],f,a)}function y(a){const h={};for(const f in a)h[f]=a[f];return h}const T="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let f,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(f in g)a[f]=g[f];for(let N=0;N<T.length;N++)f=T[N],Object.prototype.hasOwnProperty.call(g,f)&&(a[f]=g[f])}}function b(a){var h=1;a=a.split(":");const f=[];for(;0<h&&a.length;)f.push(a.shift()),h--;return a.length&&f.push(a.join(":")),f}function P(a){c.setTimeout(()=>{throw a},0)}function w(){var a=qt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class Se{constructor(){this.h=this.g=null}add(h,f){const g=$t.get();g.set(h,f),this.h?this.h.next=g:this.g=g,this.h=g}}var $t=new $(()=>new Je,a=>a.reset());class Je{constructor(){this.next=this.g=this.h=null}set(h,f){this.h=h,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,ve=!1,qt=new Se,nn=()=>{const a=c.Promise.resolve(void 0);Te=()=>{a.then(Xt)}};var Xt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(f){P(f)}var h=$t;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ve=!1};function Ue(){this.s=this.s,this.C=this.C}Ue.prototype.s=!1,Ue.prototype.ma=function(){this.s||(this.s=!0,this.N())},Ue.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function je(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}je.prototype.h=function(){this.defaultPrevented=!0};var sr=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const f=()=>{};c.addEventListener("test",f,h),c.removeEventListener("test",f,h)}catch{}return a})();function Ht(a,h){if(je.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var f=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(ee){e:{try{q(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else f=="mouseover"?h=a.fromElement:f=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Vt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ht.aa.h.call(this)}}R(Ht,je);var Vt={2:"touch",3:"pen",4:"mouse"};Ht.prototype.h=function(){Ht.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),X=0;function Q(a,h,f,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=f,this.capture=!!g,this.ha=C,this.key=++X,this.da=this.fa=!1}function te(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function me(a){this.src=a,this.g={},this.h=0}me.prototype.add=function(a,h,f,g,C){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var G=I(a,h,g,C);return-1<G?(h=a[G],f||(h.fa=!1)):(h=new Q(h,this.src,N,!!g,C),h.fa=f,a.push(h)),h};function v(a,h){var f=h.type;if(f in a.g){var g=a.g[f],C=Array.prototype.indexOf.call(g,h,void 0),N;(N=0<=C)&&Array.prototype.splice.call(g,C,1),N&&(te(h),a.g[f].length==0&&(delete a.g[f],a.h--))}}function I(a,h,f,g){for(var C=0;C<a.length;++C){var N=a[C];if(!N.da&&N.listener==h&&N.capture==!!f&&N.ha==g)return C}return-1}var S="closure_lm_"+(1e6*Math.random()|0),V={};function U(a,h,f,g,C){if(Array.isArray(h)){for(var N=0;N<h.length;N++)U(a,h[N],f,g,C);return null}return f=ce(f),a&&a[M]?a.K(h,f,u(g)?!!g.capture:!1,C):O(a,h,f,!1,g,C)}function O(a,h,f,g,C,N){if(!h)throw Error("Invalid event type");var G=u(C)?!!C.capture:!!C,Ve=J(a);if(Ve||(a[S]=Ve=new me(a)),f=Ve.add(h,f,g,G,N),f.proxy)return f;if(g=K(),f.proxy=g,g.src=a,g.listener=f,a.addEventListener)sr||(C=G),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent(j(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return f}function K(){function a(f){return h.call(a.src,a.listener,f)}const h=oe;return a}function W(a,h,f,g,C){if(Array.isArray(h))for(var N=0;N<h.length;N++)W(a,h[N],f,g,C);else g=u(g)?!!g.capture:!!g,f=ce(f),a&&a[M]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],f=I(N,f,g,C),-1<f&&(te(N[f]),Array.prototype.splice.call(N,f,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=J(a))&&(h=a.g[h.toString()],a=-1,h&&(a=I(h,f,g,C)),(f=-1<a?h[a]:null)&&H(f))}function H(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[M])v(h.i,a);else{var f=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(f,g,a.capture):h.detachEvent?h.detachEvent(j(f),g):h.addListener&&h.removeListener&&h.removeListener(g),(f=J(h))?(v(f,a),f.h==0&&(f.src=null,h[S]=null)):te(a)}}}function j(a){return a in V?V[a]:V[a]="on"+a}function oe(a,h){if(a.da)a=!0;else{h=new Ht(h,this);var f=a.listener,g=a.ha||a.src;a.fa&&H(a),a=f.call(g,h)}return a}function J(a){return a=a[S],a instanceof me?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function ce(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(h){return a.handleEvent(h)}),a[ne])}function ae(){Ue.call(this),this.i=new me(this),this.M=this,this.F=null}R(ae,Ue),ae.prototype[M]=!0,ae.prototype.removeEventListener=function(a,h,f,g){W(this,a,h,f,g)};function fe(a,h){var f,g=a.F;if(g)for(f=[];g;g=g.F)f.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new je(h,a);else if(h instanceof je)h.target=h.target||a;else{var C=h;h=new je(g,a),A(h,C)}if(C=!0,f)for(var N=f.length-1;0<=N;N--){var G=h.g=f[N];C=be(G,g,!0,h)&&C}if(G=h.g=a,C=be(G,g,!0,h)&&C,C=be(G,g,!1,h)&&C,f)for(N=0;N<f.length;N++)G=h.g=f[N],C=be(G,g,!1,h)&&C}ae.prototype.N=function(){if(ae.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var f=a.g[h],g=0;g<f.length;g++)te(f[g]);delete a.g[h],a.h--}}this.F=null},ae.prototype.K=function(a,h,f,g){return this.i.add(String(a),h,!1,f,g)},ae.prototype.L=function(a,h,f,g){return this.i.add(String(a),h,!0,f,g)};function be(a,h,f,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,N=0;N<h.length;++N){var G=h[N];if(G&&!G.da&&G.capture==f){var Ve=G.listener,ut=G.ha||G.src;G.fa&&v(a.i,G),C=Ve.call(ut,g)!==!1&&C}}return C&&!g.defaultPrevented}function Be(a,h,f){if(typeof a=="function")f&&(a=m(a,f));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function Ye(a){a.g=Be(()=>{a.g=null,a.i&&(a.i=!1,Ye(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Zt extends Ue{constructor(h,f){super(),this.m=h,this.l=f,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ye(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gt(a){Ue.call(this),this.h=a,this.g={}}R(gt,Ue);var ir=[];function oi(a){se(a.g,function(h,f){this.g.hasOwnProperty(f)&&H(h)},a),a.g={}}gt.prototype.N=function(){gt.aa.N.call(this),oi(this)},gt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var lt=c.JSON.stringify,en=c.JSON.parse,Po=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ps(){}ps.prototype.h=null;function Dh(a){return a.h||(a.h=a.i())}function Vh(){}var ai={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Lc(){je.call(this,"d")}R(Lc,je);function Fc(){je.call(this,"c")}R(Fc,je);var $r={},Oh=null;function Co(){return Oh=Oh||new ae}$r.La="serverreachability";function Mh(a){je.call(this,$r.La,a)}R(Mh,je);function ci(a){const h=Co();fe(h,new Mh(h))}$r.STAT_EVENT="statevent";function Lh(a,h){je.call(this,$r.STAT_EVENT,a),this.stat=h}R(Lh,je);function Pt(a){const h=Co();fe(h,new Lh(h,a))}$r.Ma="timingevent";function Fh(a,h){je.call(this,$r.Ma,a),this.size=h}R(Fh,je);function li(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function ui(){this.g=!0}ui.prototype.xa=function(){this.g=!1};function Jy(a,h,f,g,C,N){a.info(function(){if(a.g)if(N)for(var G="",Ve=N.split("&"),ut=0;ut<Ve.length;ut++){var Re=Ve[ut].split("=");if(1<Re.length){var _t=Re[0];Re=Re[1];var yt=_t.split("_");G=2<=yt.length&&yt[1]=="type"?G+(_t+"="+Re+"&"):G+(_t+"=redacted&")}}else G=null;else G=N;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+f+`
`+G})}function Yy(a,h,f,g,C,N,G){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+f+`
`+N+" "+G})}function ms(a,h,f,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Zy(a,f)+(g?" "+g:"")})}function Xy(a,h){a.info(function(){return"TIMEOUT: "+h})}ui.prototype.info=function(){};function Zy(a,h){if(!a.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(a=0;a<f.length;a++)if(Array.isArray(f[a])){var g=f[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var N=C[0];if(N!="noop"&&N!="stop"&&N!="close")for(var G=1;G<C.length;G++)C[G]=""}}}}return lt(f)}catch{return h}}var ko={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Uh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Uc;function No(){}R(No,ps),No.prototype.g=function(){return new XMLHttpRequest},No.prototype.i=function(){return{}},Uc=new No;function or(a,h,f,g){this.j=a,this.i=h,this.l=f,this.R=g||1,this.U=new gt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new jh}function jh(){this.i=null,this.g="",this.h=!1}var Bh={},jc={};function Bc(a,h,f){a.L=1,a.v=Oo(Vn(h)),a.m=f,a.P=!0,$h(a,null)}function $h(a,h){a.F=Date.now(),xo(a),a.A=Vn(a.v);var f=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),nd(f.i,"t",g),a.C=0,f=a.j.J,a.h=new jh,a.g=Ed(a.j,f?h:null,!a.m),0<a.O&&(a.M=new Zt(m(a.Y,a,a.g),a.O)),h=a.U,f=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(ir[0]=C.toString()),C=ir);for(var N=0;N<C.length;N++){var G=U(f,C[N],g||h.handleEvent,!1,h.h||h);if(!G)break;h.g[G.key]=G}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ci(),Jy(a.i,a.u,a.A,a.l,a.R,a.m)}or.prototype.ca=function(a){a=a.target;const h=this.M;h&&On(a)==3?h.j():this.Y(a)},or.prototype.Y=function(a){try{if(a==this.g)e:{const yt=On(this.g);var h=this.g.Ba();const ys=this.g.Z();if(!(3>yt)&&(yt!=3||this.g&&(this.h.h||this.g.oa()||ld(this.g)))){this.J||yt!=4||h==7||(h==8||0>=ys?ci(3):ci(2)),$c(this);var f=this.g.Z();this.X=f;t:if(qh(this)){var g=ld(this.g);a="";var C=g.length,N=On(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qr(this),hi(this);var G="";break t}this.h.i=new c.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(N&&h==C-1)});g.length=0,this.h.g+=a,this.C=0,G=this.h.g}else G=this.g.oa();if(this.o=f==200,Yy(this.i,this.u,this.A,this.l,this.R,yt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,ut=this.g;if((Ve=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!L(Ve)){var Re=Ve;break t}}Re=null}if(f=Re)ms(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qc(this,f);else{this.o=!1,this.s=3,Pt(12),qr(this),hi(this);break e}}if(this.P){f=!0;let rn;for(;!this.J&&this.C<G.length;)if(rn=ev(this,G),rn==jc){yt==4&&(this.s=4,Pt(14),f=!1),ms(this.i,this.l,null,"[Incomplete Response]");break}else if(rn==Bh){this.s=4,Pt(15),ms(this.i,this.l,G,"[Invalid Chunk]"),f=!1;break}else ms(this.i,this.l,rn,null),qc(this,rn);if(qh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),yt!=4||G.length!=0||this.h.h||(this.s=1,Pt(16),f=!1),this.o=this.o&&f,!f)ms(this.i,this.l,G,"[Invalid Chunked Response]"),qr(this),hi(this);else if(0<G.length&&!this.W){this.W=!0;var _t=this.j;_t.g==this&&_t.ba&&!_t.M&&(_t.j.info("Great, no buffering proxy detected. Bytes received: "+G.length),Qc(_t),_t.M=!0,Pt(11))}}else ms(this.i,this.l,G,null),qc(this,G);yt==4&&qr(this),this.o&&!this.J&&(yt==4?gd(this.j,this):(this.o=!1,xo(this)))}else _v(this.g),f==400&&0<G.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),qr(this),hi(this)}}}catch{}finally{}};function qh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function ev(a,h){var f=a.C,g=h.indexOf(`
`,f);return g==-1?jc:(f=Number(h.substring(f,g)),isNaN(f)?Bh:(g+=1,g+f>h.length?jc:(h=h.slice(g,g+f),a.C=g+f,h)))}or.prototype.cancel=function(){this.J=!0,qr(this)};function xo(a){a.S=Date.now()+a.I,Hh(a,a.I)}function Hh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=li(m(a.ba,a),h)}function $c(a){a.B&&(c.clearTimeout(a.B),a.B=null)}or.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Xy(this.i,this.A),this.L!=2&&(ci(),Pt(17)),qr(this),this.s=2,hi(this)):Hh(this,this.S-a)};function hi(a){a.j.G==0||a.J||gd(a.j,a)}function qr(a){$c(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,oi(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function qc(a,h){try{var f=a.j;if(f.G!=0&&(f.g==a||Hc(f.h,a))){if(!a.K&&Hc(f.h,a)&&f.G==3){try{var g=f.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<a.F)Bo(f),Uo(f);else break e;Kc(f),Pt(18)}}else f.za=C[1],0<f.za-f.T&&37500>C[2]&&f.F&&f.v==0&&!f.C&&(f.C=li(m(f.Za,f),6e3));if(1>=zh(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else Wr(f,11)}else if((a.K||f.g==a)&&Bo(f),!L(h))for(C=f.Da.g.parse(h),h=0;h<C.length;h++){let Re=C[h];if(f.T=Re[0],Re=Re[1],f.G==2)if(Re[0]=="c"){f.K=Re[1],f.ia=Re[2];const _t=Re[3];_t!=null&&(f.la=_t,f.j.info("VER="+f.la));const yt=Re[4];yt!=null&&(f.Aa=yt,f.j.info("SVER="+f.Aa));const ys=Re[5];ys!=null&&typeof ys=="number"&&0<ys&&(g=1.5*ys,f.L=g,f.j.info("backChannelRequestTimeoutMs_="+g)),g=f;const rn=a.g;if(rn){const qo=rn.g?rn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qo){var N=g.h;N.g||qo.indexOf("spdy")==-1&&qo.indexOf("quic")==-1&&qo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Wc(N,N.h),N.h=null))}if(g.D){const Jc=rn.g?rn.g.getResponseHeader("X-HTTP-Session-Id"):null;Jc&&(g.ya=Jc,Le(g.I,g.D,Jc))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-a.F,f.j.info("Handshake RTT: "+f.R+"ms")),g=f;var G=a;if(g.qa=vd(g,g.J?g.ia:null,g.W),G.K){Kh(g.h,G);var Ve=G,ut=g.L;ut&&(Ve.I=ut),Ve.B&&($c(Ve),xo(Ve)),g.g=G}else pd(g);0<f.i.length&&jo(f)}else Re[0]!="stop"&&Re[0]!="close"||Wr(f,7);else f.G==3&&(Re[0]=="stop"||Re[0]=="close"?Re[0]=="stop"?Wr(f,7):zc(f):Re[0]!="noop"&&f.l&&f.l.ta(Re),f.v=0)}}ci(4)}catch{}}var tv=class{constructor(a,h){this.g=a,this.map=h}};function Wh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function zh(a){return a.h?1:a.g?a.g.size:0}function Hc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Wc(a,h){a.g?a.g.add(h):a.h=h}function Kh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Wh.prototype.cancel=function(){if(this.i=Qh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Qh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const f of a.g.values())h=h.concat(f.D);return h}return k(a.i)}function nv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],f=a.length,g=0;g<f;g++)h.push(a[g]);return h}h=[],f=0;for(g in a)h[f++]=a[g];return h}function rv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var f=0;f<a;f++)h.push(f);return h}h=[],f=0;for(const g in a)h[f++]=g;return h}}}function Jh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var f=rv(a),g=nv(a),C=g.length,N=0;N<C;N++)h.call(void 0,g[N],f&&f[N],a)}var Yh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function sv(a,h){if(a){a=a.split("&");for(var f=0;f<a.length;f++){var g=a[f].indexOf("="),C=null;if(0<=g){var N=a[f].substring(0,g);C=a[f].substring(g+1)}else N=a[f];h(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function Hr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Hr){this.h=a.h,Do(this,a.j),this.o=a.o,this.g=a.g,Vo(this,a.s),this.l=a.l;var h=a.i,f=new pi;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Xh(this,f),this.m=a.m}else a&&(h=String(a).match(Yh))?(this.h=!1,Do(this,h[1]||"",!0),this.o=di(h[2]||""),this.g=di(h[3]||"",!0),Vo(this,h[4]),this.l=di(h[5]||"",!0),Xh(this,h[6]||"",!0),this.m=di(h[7]||"")):(this.h=!1,this.i=new pi(null,this.h))}Hr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(fi(h,Zh,!0),":");var f=this.g;return(f||h=="file")&&(a.push("//"),(h=this.o)&&a.push(fi(h,Zh,!0),"@"),a.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&a.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&a.push("/"),a.push(fi(f,f.charAt(0)=="/"?av:ov,!0))),(f=this.i.toString())&&a.push("?",f),(f=this.m)&&a.push("#",fi(f,lv)),a.join("")};function Vn(a){return new Hr(a)}function Do(a,h,f){a.j=f?di(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Vo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Xh(a,h,f){h instanceof pi?(a.i=h,uv(a.i,a.h)):(f||(h=fi(h,cv)),a.i=new pi(h,a.h))}function Le(a,h,f){a.i.set(h,f)}function Oo(a){return Le(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function di(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function fi(a,h,f){return typeof a=="string"?(a=encodeURI(a).replace(h,iv),f&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function iv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Zh=/[#\/\?@]/g,ov=/[#\?:]/g,av=/[#\?]/g,cv=/[#\?@]/g,lv=/#/g;function pi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function ar(a){a.g||(a.g=new Map,a.h=0,a.i&&sv(a.i,function(h,f){a.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}t=pi.prototype,t.add=function(a,h){ar(this),this.i=null,a=gs(this,a);var f=this.g.get(a);return f||this.g.set(a,f=[]),f.push(h),this.h+=1,this};function ed(a,h){ar(a),h=gs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function td(a,h){return ar(a),h=gs(a,h),a.g.has(h)}t.forEach=function(a,h){ar(this),this.g.forEach(function(f,g){f.forEach(function(C){a.call(h,C,g,this)},this)},this)},t.na=function(){ar(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let g=0;g<h.length;g++){const C=a[g];for(let N=0;N<C.length;N++)f.push(h[g])}return f},t.V=function(a){ar(this);let h=[];if(typeof a=="string")td(this,a)&&(h=h.concat(this.g.get(gs(this,a))));else{a=Array.from(this.g.values());for(let f=0;f<a.length;f++)h=h.concat(a[f])}return h},t.set=function(a,h){return ar(this),this.i=null,a=gs(this,a),td(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function nd(a,h,f){ed(a,h),0<f.length&&(a.i=null,a.g.set(gs(a,h),k(f)),a.h+=f.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var g=h[f];const N=encodeURIComponent(String(g)),G=this.V(g);for(g=0;g<G.length;g++){var C=N;G[g]!==""&&(C+="="+encodeURIComponent(String(G[g]))),a.push(C)}}return this.i=a.join("&")};function gs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function uv(a,h){h&&!a.j&&(ar(a),a.i=null,a.g.forEach(function(f,g){var C=g.toLowerCase();g!=C&&(ed(this,g),nd(this,C,f))},a)),a.j=h}function hv(a,h){const f=new ui;if(c.Image){const g=new Image;g.onload=_(cr,f,"TestLoadImage: loaded",!0,h,g),g.onerror=_(cr,f,"TestLoadImage: error",!1,h,g),g.onabort=_(cr,f,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(cr,f,"TestLoadImage: timeout",!1,h,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function dv(a,h){const f=new ui,g=new AbortController,C=setTimeout(()=>{g.abort(),cr(f,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(C),N.ok?cr(f,"TestPingServer: ok",!0,h):cr(f,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),cr(f,"TestPingServer: error",!1,h)})}function cr(a,h,f,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(f)}catch{}}function fv(){this.g=new Po}function pv(a,h,f){const g=f||"";try{Jh(a,function(C,N){let G=C;u(C)&&(G=lt(C)),h.push(g+N+"="+encodeURIComponent(G))})}catch(C){throw h.push(g+"type="+encodeURIComponent("_badmap")),C}}function Mo(a){this.l=a.Ub||null,this.j=a.eb||!1}R(Mo,ps),Mo.prototype.g=function(){return new Lo(this.l,this.j)},Mo.prototype.i=(function(a){return function(){return a}})({});function Lo(a,h){ae.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Lo,ae),t=Lo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,gi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,mi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,gi(this)),this.g&&(this.readyState=3,gi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rd(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function rd(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?mi(this):gi(this),this.readyState==3&&rd(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,mi(this))},t.Qa=function(a){this.g&&(this.response=a,mi(this))},t.ga=function(){this.g&&mi(this)};function mi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,gi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var f=h.next();!f.done;)f=f.value,a.push(f[0]+": "+f[1]),f=h.next();return a.join(`\r
`)};function gi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Lo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function sd(a){let h="";return se(a,function(f,g){h+=g,h+=":",h+=f,h+=`\r
`}),h}function Gc(a,h,f){e:{for(g in f){var g=!1;break e}g=!0}g||(f=sd(f),typeof a=="string"?f!=null&&encodeURIComponent(String(f)):Le(a,h,f))}function We(a){ae.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(We,ae);var mv=/^https?$/i,gv=["POST","PUT"];t=We.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,f,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Uc.g(),this.v=this.o?Dh(this.o):Dh(Uc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){id(this,N);return}if(a=f||"",f=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)f.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())f.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(f.keys()).find(N=>N.toLowerCase()=="content-type"),C=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(gv,h,void 0))||g||C||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,G]of f)this.g.setRequestHeader(N,G);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{cd(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){id(this,N)}};function id(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,od(a),Fo(a)}function od(a){a.A||(a.A=!0,fe(a,"complete"),fe(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,fe(this,"complete"),fe(this,"abort"),Fo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Fo(this,!0)),We.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?ad(this):this.bb())},t.bb=function(){ad(this)};function ad(a){if(a.h&&typeof o<"u"&&(!a.v[1]||On(a)!=4||a.Z()!=2)){if(a.u&&On(a)==4)Be(a.Ea,0,a);else if(fe(a,"readystatechange"),On(a)==4){a.h=!1;try{const G=a.Z();e:switch(G){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var f;if(!(f=h)){var g;if(g=G===0){var C=String(a.D).match(Yh)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),g=!mv.test(C?C.toLowerCase():"")}f=g}if(f)fe(a,"complete"),fe(a,"success");else{a.m=6;try{var N=2<On(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",od(a)}}finally{Fo(a)}}}}function Fo(a,h){if(a.g){cd(a);const f=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||fe(a,"ready");try{f.onreadystatechange=g}catch{}}}function cd(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function On(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<On(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),en(h)}};function ld(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function _v(a){const h={};a=(a.g&&2<=On(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(L(a[g]))continue;var f=b(a[g]);const C=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const N=h[C]||[];h[C]=N,N.push(f)}E(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function _i(a,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[a]||h}function ud(a){this.Aa=0,this.i=[],this.j=new ui,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=_i("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=_i("baseRetryDelayMs",5e3,a),this.cb=_i("retryDelaySeedMs",1e4,a),this.Wa=_i("forwardChannelMaxRetries",2,a),this.wa=_i("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Wh(a&&a.concurrentRequestLimit),this.Da=new fv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=ud.prototype,t.la=8,t.G=1,t.connect=function(a,h,f,g){Pt(0),this.W=a,this.H=h||{},f&&g!==void 0&&(this.H.OSID=f,this.H.OAID=g),this.F=this.X,this.I=vd(this,null,this.W),jo(this)};function zc(a){if(hd(a),a.G==3){var h=a.U++,f=Vn(a.I);if(Le(f,"SID",a.K),Le(f,"RID",h),Le(f,"TYPE","terminate"),yi(a,f),h=new or(a,a.j,h),h.L=2,h.v=Oo(Vn(f)),f=!1,c.navigator&&c.navigator.sendBeacon)try{f=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!f&&c.Image&&(new Image().src=h.v,f=!0),f||(h.g=Ed(h.j,null),h.g.ea(h.v)),h.F=Date.now(),xo(h)}yd(a)}function Uo(a){a.g&&(Qc(a),a.g.cancel(),a.g=null)}function hd(a){Uo(a),a.u&&(c.clearTimeout(a.u),a.u=null),Bo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function jo(a){if(!Gh(a.h)&&!a.s){a.s=!0;var h=a.Ga;Te||nn(),ve||(Te(),ve=!0),qt.add(h,a),a.B=0}}function yv(a,h){return zh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=li(m(a.Ga,a,h),_d(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new or(this,this.j,a);let N=this.o;if(this.S&&(N?(N=y(N),A(N,this.S)):N=this.S),this.m!==null||this.O||(C.H=N,N=null),this.P)e:{for(var h=0,f=0;f<this.i.length;f++){t:{var g=this.i[f];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=f;break e}if(h===4096||f===this.i.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=fd(this,C,h),f=Vn(this.I),Le(f,"RID",a),Le(f,"CVER",22),this.D&&Le(f,"X-HTTP-Session-Id",this.D),yi(this,f),N&&(this.O?h="headers="+encodeURIComponent(String(sd(N)))+"&"+h:this.m&&Gc(f,this.m,N)),Wc(this.h,C),this.Ua&&Le(f,"TYPE","init"),this.P?(Le(f,"$req",h),Le(f,"SID","null"),C.T=!0,Bc(C,f,null)):Bc(C,f,h),this.G=2}}else this.G==3&&(a?dd(this,a):this.i.length==0||Gh(this.h)||dd(this))};function dd(a,h){var f;h?f=h.l:f=a.U++;const g=Vn(a.I);Le(g,"SID",a.K),Le(g,"RID",f),Le(g,"AID",a.T),yi(a,g),a.m&&a.o&&Gc(g,a.m,a.o),f=new or(a,a.j,f,a.B+1),a.m===null&&(f.H=a.o),h&&(a.i=h.D.concat(a.i)),h=fd(a,f,1e3),f.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Wc(a.h,f),Bc(f,g,h)}function yi(a,h){a.H&&se(a.H,function(f,g){Le(h,g,f)}),a.l&&Jh({},function(f,g){Le(h,g,f)})}function fd(a,h,f){f=Math.min(a.i.length,f);var g=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let N=-1;for(;;){const G=["count="+f];N==-1?0<f?(N=C[0].g,G.push("ofs="+N)):N=0:G.push("ofs="+N);let Ve=!0;for(let ut=0;ut<f;ut++){let Re=C[ut].g;const _t=C[ut].map;if(Re-=N,0>Re)N=Math.max(0,C[ut].g-100),Ve=!1;else try{pv(_t,G,"req"+Re+"_")}catch{g&&g(_t)}}if(Ve){g=G.join("&");break e}}}return a=a.i.splice(0,f),h.D=a,g}function pd(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Te||nn(),ve||(Te(),ve=!0),qt.add(h,a),a.v=0}}function Kc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=li(m(a.Fa,a),_d(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,md(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=li(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),Uo(this),md(this))};function Qc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function md(a){a.g=new or(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Vn(a.qa);Le(h,"RID","rpc"),Le(h,"SID",a.K),Le(h,"AID",a.T),Le(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Le(h,"TO",a.ja),Le(h,"TYPE","xmlhttp"),yi(a,h),a.m&&a.o&&Gc(h,a.m,a.o),a.L&&(a.g.I=a.L);var f=a.g;a=a.ia,f.L=1,f.v=Oo(Vn(h)),f.m=null,f.P=!0,$h(f,a)}t.Za=function(){this.C!=null&&(this.C=null,Uo(this),Kc(this),Pt(19))};function Bo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function gd(a,h){var f=null;if(a.g==h){Bo(a),Qc(a),a.g=null;var g=2}else if(Hc(a.h,h))f=h.D,Kh(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){f=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;g=Co(),fe(g,new Fh(g,f)),jo(a)}else pd(a);else if(C=h.s,C==3||C==0&&0<h.X||!(g==1&&yv(a,h)||g==2&&Kc(a)))switch(f&&0<f.length&&(h=a.h,h.i=h.i.concat(f)),C){case 1:Wr(a,5);break;case 4:Wr(a,10);break;case 3:Wr(a,6);break;default:Wr(a,2)}}}function _d(a,h){let f=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(f*=2),f*h}function Wr(a,h){if(a.j.info("Error code "+h),h==2){var f=m(a.fb,a),g=a.Xa;const C=!g;g=new Hr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Do(g,"https"),Oo(g),C?hv(g.toString(),f):dv(g.toString(),f)}else Pt(2);a.G=0,a.l&&a.l.sa(h),yd(a),hd(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function yd(a){if(a.G=0,a.ka=[],a.l){const h=Qh(a.h);(h.length!=0||a.i.length!=0)&&(x(a.ka,h),x(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function vd(a,h,f){var g=f instanceof Hr?Vn(f):new Hr(f);if(g.g!="")h&&(g.g=h+"."+g.g),Vo(g,g.s);else{var C=c.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var N=new Hr(null);g&&Do(N,g),h&&(N.g=h),C&&Vo(N,C),f&&(N.l=f),g=N}return f=a.D,h=a.ya,f&&h&&Le(g,f,h),Le(g,"VER",a.la),yi(a,g),g}function Ed(a,h,f){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new We(new Mo({eb:f})):new We(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function wd(){}t=wd.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function $o(){}$o.prototype.g=function(a,h){return new Wt(a,h)};function Wt(a,h){ae.call(this),this.g=new ud(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!L(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!L(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new _s(this)}R(Wt,ae),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){zc(this.g)},Wt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var f={};f.__data__=a,a=f}else this.u&&(f={},f.__data__=lt(a),a=f);h.i.push(new tv(h.Ya++,a)),h.G==3&&jo(h)},Wt.prototype.N=function(){this.g.l=null,delete this.j,zc(this.g),delete this.g,Wt.aa.N.call(this)};function Td(a){Lc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const f in h){a=f;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}R(Td,Lc);function Id(){Fc.call(this),this.status=1}R(Id,Fc);function _s(a){this.g=a}R(_s,wd),_s.prototype.ua=function(){fe(this.g,"a")},_s.prototype.ta=function(a){fe(this.g,new Td(a))},_s.prototype.sa=function(a){fe(this.g,new Id)},_s.prototype.ra=function(){fe(this.g,"b")},$o.prototype.createWebChannel=$o.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,E_=function(){return new $o},v_=function(){return Co()},y_=$r,Gl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},ko.NO_ERROR=0,ko.TIMEOUT=8,ko.HTTP_ERROR=6,aa=ko,Uh.COMPLETE="complete",__=Uh,Vh.EventType=ai,ai.OPEN="a",ai.CLOSE="b",ai.ERROR="c",ai.MESSAGE="d",ae.prototype.listen=ae.prototype.K,Si=Vh,We.prototype.listenOnce=We.prototype.L,We.prototype.getLastError=We.prototype.Ka,We.prototype.getLastErrorCode=We.prototype.Ba,We.prototype.getStatus=We.prototype.Z,We.prototype.getResponseJson=We.prototype.Oa,We.prototype.getResponseText=We.prototype.oa,We.prototype.send=We.prototype.ea,We.prototype.setWithCredentials=We.prototype.Ha,g_=We}).apply(typeof Ko<"u"?Ko:typeof self<"u"?self:typeof window<"u"?window:{});const Zf="@firebase/firestore",ep="4.8.0";/**
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
 */class wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}wt.UNAUTHENTICATED=new wt(null),wt.GOOGLE_CREDENTIALS=new wt("google-credentials-uid"),wt.FIRST_PARTY=new wt("first-party-uid"),wt.MOCK_USER=new wt("mock-user");/**
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
 */let Xs="11.10.0";/**
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
 */const as=new Nu("@firebase/firestore");function Ts(){return as.logLevel}function Y(t,...e){if(as.logLevel<=Ee.DEBUG){const n=e.map(qu);as.debug(`Firestore (${Xs}): ${t}`,...n)}}function Yn(t,...e){if(as.logLevel<=Ee.ERROR){const n=e.map(qu);as.error(`Firestore (${Xs}): ${t}`,...n)}}function Nr(t,...e){if(as.logLevel<=Ee.WARN){const n=e.map(qu);as.warn(`Firestore (${Xs}): ${t}`,...n)}}function qu(t){if(typeof t=="string")return t;try{/**
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
 */function ie(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,w_(t,r,n)}function w_(t,e,n){let r=`FIRESTORE (${Xs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Yn(r),new Error(r)}function Ae(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||w_(e,s,r)}function de(t,e){return t}/**
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
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends tr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Rn{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class T_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Jb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(wt.UNAUTHENTICATED)))}shutdown(){}}class Yb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Xb{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ae(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Rn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Rn,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Rn)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string",31837,{l:r}),new T_(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string",2055,{h:e}),new wt(e)}}class Zb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class eR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Zb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(wt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class tp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class tR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Gt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ae(this.o===void 0,3512);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new tp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ae(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new tp(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function nR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function I_(){return new TextEncoder}/**
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
 */class Hu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=nR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function zl(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ge(r,s);{const i=I_(),o=rR(i.encode(np(t,n)),i.encode(np(e,n)));return o!==0?o:ge(r,s)}}n+=r>65535?2:1}return ge(t.length,e.length)}function np(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function rR(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ge(t[n],e[n]);return ge(t.length,e.length)}function $s(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const rp="__name__";class _n{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ie(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return _n.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof _n?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=_n.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ge(e.length,n.length)}static compareSegments(e,n){const r=_n.isNumericId(e),s=_n.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?_n.extractNumericId(e).compare(_n.extractNumericId(n)):zl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Rr.fromString(e.substring(4,e.length-2))}}class De extends _n{construct(e,n,r){return new De(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new De(n)}static emptyPath(){return new De([])}}const sR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends _n{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return sR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===rp}static keyField(){return new ft([rp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new z(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new z(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
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
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(De.fromString(e))}static fromName(e){return new re(De.fromString(e).popFirst(5))}static empty(){return new re(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return De.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new De(e.slice()))}}/**
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
 */function A_(t,e,n){if(!n)throw new z(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function iR(t,e,n,r){if(e===!0&&r===!0)throw new z(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function sp(t){if(!re.isDocumentKey(t))throw new z(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ip(t){if(re.isDocumentKey(t))throw new z(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function b_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function pc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie(12329,{type:typeof t})}function Rt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=pc(t);throw new z(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function oR(t,e){if(e<=0)throw new z(D.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function tt(t,e){const n={typeString:t};return e&&(n.value=e),n}function vo(t,e){if(!b_(t))throw new z(D.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new z(D.INVALID_ARGUMENT,n);return!0}/**
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
 */const op=-62135596800,ap=1e6;class _e{static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*ap);return new _e(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<op)throw new z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ap}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(vo(e,_e._jsonSchema))return new _e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-op;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_e._jsonSchemaVersion="firestore/timestamp/1.0",_e._jsonSchema={type:tt("string",_e._jsonSchemaVersion),seconds:tt("number"),nanoseconds:tt("number")};/**
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
 */class le{static fromTimestamp(e){return new le(e)}static min(){return new le(new _e(0,0))}static max(){return new le(new _e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const eo=-1;function aR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=le.fromTimestamp(r===1e9?new _e(n+1,0):new _e(n,r));return new xr(s,re.empty(),e)}function cR(t){return new xr(t.readTime,t.key,eo)}class xr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new xr(le.min(),re.empty(),eo)}static max(){return new xr(le.max(),re.empty(),eo)}}function lR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const uR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class hR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Zs(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==uR)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):F.reject(n)}static resolve(e){return new F(((n,r)=>{n(e)}))}static reject(e){return new F(((n,r)=>{r(e)}))}static waitFor(e){return new F(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next((s=>s?F.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new F(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((d=>{o[u]=d,++c,c===i&&r(o)}),(d=>s(d)))}}))}static doWhile(e,n){return new F(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function dR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function ei(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class mc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}mc.ue=-1;/**
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
 */const Wu=-1;function Eo(t){return t==null}function Na(t){return t===0&&1/t==-1/0}function fR(t){return typeof t=="number"&&Number.isInteger(t)&&!Na(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const R_="";function pR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=cp(e)),e=mR(t.get(n),e);return cp(e)}function mR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case R_:n+="";break;default:n+=i}}return n}function cp(t){return t+R_+""}/**
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
 */function lp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function jr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function S_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class He{constructor(e,n){this.comparator=e,this.root=n||dt.EMPTY}insert(e,n){return new He(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,dt.BLACK,null,null))}remove(e){return new He(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Qo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Qo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Qo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Qo(this.root,e,this.comparator,!0)}}class Qo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??dt.RED,this.left=s??dt.EMPTY,this.right=i??dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new dt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return dt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return dt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ie(27949);return e+(this.isRed()?0:1)}}dt.EMPTY=null,dt.RED=!0,dt.BLACK=!1;dt.EMPTY=new class{constructor(){this.size=0}get key(){throw ie(57766)}get value(){throw ie(16141)}get color(){throw ie(16727)}get left(){throw ie(29726)}get right(){throw ie(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new dt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(e){this.comparator=e,this.data=new He(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new up(this.data.getIterator())}getIteratorFrom(e){return new up(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class up{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Jt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Jt([])}unionWith(e){let n=new rt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Jt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return $s(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class P_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new P_("Invalid base64 string: "+i):i}})(e);return new mt(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const gR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Dr(t){if(Ae(!!t,39018),typeof t=="string"){let e=0;const n=gR.exec(t);if(Ae(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ke(t.seconds),nanos:Ke(t.nanos)}}function Ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Vr(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
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
 */const C_="server_timestamp",k_="__type__",N_="__previous_value__",x_="__local_write_time__";function Gu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[k_])===null||n===void 0?void 0:n.stringValue)===C_}function gc(t){const e=t.mapValue.fields[N_];return Gu(e)?gc(e):e}function to(t){const e=Dr(t.mapValue.fields[x_].timestampValue);return new _e(e.seconds,e.nanos)}/**
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
 */class _R{constructor(e,n,r,s,i,o,c,l,u,d){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=d}}const xa="(default)";class no{constructor(e,n){this.projectId=e,this.database=n||xa}static empty(){return new no("","")}get isDefaultDatabase(){return this.database===xa}isEqual(e){return e instanceof no&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const D_="__type__",yR="__max__",Jo={mapValue:{}},V_="__vector__",Da="value";function Or(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Gu(t)?4:ER(t)?9007199254740991:vR(t)?10:11:ie(28295,{value:t})}function xn(t,e){if(t===e)return!0;const n=Or(t);if(n!==Or(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return to(t).isEqual(to(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Dr(s.timestampValue),c=Dr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return Vr(s.bytesValue).isEqual(Vr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Ke(s.geoPointValue.latitude)===Ke(i.geoPointValue.latitude)&&Ke(s.geoPointValue.longitude)===Ke(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Ke(s.integerValue)===Ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ke(s.doubleValue),c=Ke(i.doubleValue);return o===c?Na(o)===Na(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return $s(t.arrayValue.values||[],e.arrayValue.values||[],xn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(lp(o)!==lp(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!xn(o[l],c[l])))return!1;return!0})(t,e);default:return ie(52216,{left:t})}}function ro(t,e){return(t.values||[]).find((n=>xn(n,e)))!==void 0}function qs(t,e){if(t===e)return 0;const n=Or(t),r=Or(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=Ke(i.integerValue||i.doubleValue),l=Ke(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return hp(t.timestampValue,e.timestampValue);case 4:return hp(to(t),to(e));case 5:return zl(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=Vr(i),l=Vr(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const d=ge(c[u],l[u]);if(d!==0)return d}return ge(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=ge(Ke(i.latitude),Ke(o.latitude));return c!==0?c:ge(Ke(i.longitude),Ke(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return dp(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var c,l,u,d;const p=i.fields||{},m=o.fields||{},_=(c=p[Da])===null||c===void 0?void 0:c.arrayValue,R=(l=m[Da])===null||l===void 0?void 0:l.arrayValue,k=ge(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((d=R==null?void 0:R.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:dp(_,R)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===Jo.mapValue&&o===Jo.mapValue)return 0;if(i===Jo.mapValue)return 1;if(o===Jo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},d=Object.keys(u);l.sort(),d.sort();for(let p=0;p<l.length&&p<d.length;++p){const m=zl(l[p],d[p]);if(m!==0)return m;const _=qs(c[l[p]],u[d[p]]);if(_!==0)return _}return ge(l.length,d.length)})(t.mapValue,e.mapValue);default:throw ie(23264,{le:n})}}function hp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Dr(t),r=Dr(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function dp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=qs(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function Hs(t){return Kl(t)}function Kl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Dr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return Vr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return re.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Kl(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Kl(n.fields[o])}`;return s+"}"})(t.mapValue):ie(61005,{value:t})}function ca(t){switch(Or(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=gc(t);return e?16+ca(e):16;case 5:return 2*t.stringValue.length;case 6:return Vr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+ca(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return jr(r.fields,((i,o)=>{s+=i.length+ca(o)})),s})(t.mapValue);default:throw ie(13486,{value:t})}}function fp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ql(t){return!!t&&"integerValue"in t}function zu(t){return!!t&&"arrayValue"in t}function pp(t){return!!t&&"nullValue"in t}function mp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function la(t){return!!t&&"mapValue"in t}function vR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[D_])===null||n===void 0?void 0:n.stringValue)===V_}function Ui(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return jr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Ui(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ui(t.arrayValue.values[n]);return e}return Object.assign({},t)}function ER(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===yR}/**
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
 */class xt{constructor(e){this.value=e}static empty(){return new xt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!la(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ui(n)}setAll(e){let n=ft.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ui(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());la(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return xn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];la(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){jr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new xt(Ui(this.value))}}function O_(t){const e=[];return jr(t.fields,((n,r)=>{const s=new ft([n]);if(la(r)){const i=O_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Jt(e)}/**
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
 */class at{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new at(e,0,le.min(),le.min(),le.min(),xt.empty(),0)}static newFoundDocument(e,n,r,s){return new at(e,1,n,le.min(),r,s,0)}static newNoDocument(e,n){return new at(e,2,n,le.min(),le.min(),xt.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,le.min(),le.min(),xt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(le.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=xt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=xt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=le.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Va{constructor(e,n){this.position=e,this.inclusive=n}}function gp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=qs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function _p(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!xn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class so{constructor(e,n="asc"){this.field=e,this.dir=n}}function wR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class M_{}class Ze extends M_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new IR(e,n,r):n==="array-contains"?new RR(e,r):n==="in"?new SR(e,r):n==="not-in"?new PR(e,r):n==="array-contains-any"?new CR(e,r):new Ze(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new AR(e,r):new bR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(qs(n,this.value)):n!==null&&Or(this.value)===Or(n)&&this.matchesComparison(qs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class dn extends M_{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new dn(e,n)}matches(e){return L_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function L_(t){return t.op==="and"}function F_(t){return TR(t)&&L_(t)}function TR(t){for(const e of t.filters)if(e instanceof dn)return!1;return!0}function Jl(t){if(t instanceof Ze)return t.field.canonicalString()+t.op.toString()+Hs(t.value);if(F_(t))return t.filters.map((e=>Jl(e))).join(",");{const e=t.filters.map((n=>Jl(n))).join(",");return`${t.op}(${e})`}}function U_(t,e){return t instanceof Ze?(function(r,s){return s instanceof Ze&&r.op===s.op&&r.field.isEqual(s.field)&&xn(r.value,s.value)})(t,e):t instanceof dn?(function(r,s){return s instanceof dn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&U_(o,s.filters[c])),!0):!1})(t,e):void ie(19439)}function j_(t){return t instanceof Ze?(function(n){return`${n.field.canonicalString()} ${n.op} ${Hs(n.value)}`})(t):t instanceof dn?(function(n){return n.op.toString()+" {"+n.getFilters().map(j_).join(" ,")+"}"})(t):"Filter"}class IR extends Ze{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class AR extends Ze{constructor(e,n){super(e,"in",n),this.keys=B_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class bR extends Ze{constructor(e,n){super(e,"not-in",n),this.keys=B_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function B_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>re.fromName(r.referenceValue)))}class RR extends Ze{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return zu(n)&&ro(n.arrayValue,this.value)}}class SR extends Ze{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&ro(this.value.arrayValue,n)}}class PR extends Ze{constructor(e,n){super(e,"not-in",n)}matches(e){if(ro(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!ro(this.value.arrayValue,n)}}class CR extends Ze{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!zu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>ro(this.value.arrayValue,r)))}}/**
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
 */class kR{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Pe=null}}function yp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new kR(t,e,n,r,s,i,o)}function Ku(t){const e=de(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Jl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Eo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Hs(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Hs(r))).join(",")),e.Pe=n}return e.Pe}function Qu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!wR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!U_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!_p(t.startAt,e.startAt)&&_p(t.endAt,e.endAt)}function Yl(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class ti{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function NR(t,e,n,r,s,i,o,c){return new ti(t,e,n,r,s,i,o,c)}function _c(t){return new ti(t)}function vp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function $_(t){return t.collectionGroup!==null}function ji(t){const e=de(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new rt(ft.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new so(i,r))})),n.has(ft.keyField().canonicalString())||e.Te.push(new so(ft.keyField(),r))}return e.Te}function Sn(t){const e=de(t);return e.Ie||(e.Ie=xR(e,ji(t))),e.Ie}function xR(t,e){if(t.limitType==="F")return yp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new so(s.field,i)}));const n=t.endAt?new Va(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Va(t.startAt.position,t.startAt.inclusive):null;return yp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Xl(t,e){const n=t.filters.concat([e]);return new ti(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Oa(t,e,n){return new ti(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function yc(t,e){return Qu(Sn(t),Sn(e))&&t.limitType===e.limitType}function q_(t){return`${Ku(Sn(t))}|lt:${t.limitType}`}function Is(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>j_(s))).join(", ")}]`),Eo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Hs(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Hs(s))).join(",")),`Target(${r})`})(Sn(t))}; limitType=${t.limitType})`}function vc(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of ji(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=gp(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,ji(r),s)||r.endAt&&!(function(o,c,l){const u=gp(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,ji(r),s))})(t,e)}function DR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function H_(t){return(e,n)=>{let r=!1;for(const s of ji(t)){const i=VR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function VR(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?qs(l,u):ie(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie(19790,{direction:t.dir})}}/**
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
 */class ds{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){jr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return S_(this.inner)}size(){return this.innerSize}}/**
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
 */const OR=new He(re.comparator);function Xn(){return OR}const W_=new He(re.comparator);function Pi(...t){let e=W_;for(const n of t)e=e.insert(n.key,n);return e}function G_(t){let e=W_;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Yr(){return Bi()}function z_(){return Bi()}function Bi(){return new ds((t=>t.toString()),((t,e)=>t.isEqual(e)))}const MR=new He(re.comparator),LR=new rt(re.comparator);function we(...t){let e=LR;for(const n of t)e=e.add(n);return e}const FR=new rt(ge);function UR(){return FR}/**
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
 */function Ju(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Na(e)?"-0":e}}function K_(t){return{integerValue:""+t}}function Q_(t,e){return fR(e)?K_(e):Ju(t,e)}/**
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
 */class Ec{constructor(){this._=void 0}}function jR(t,e,n){return t instanceof Ma?(function(s,i){const o={fields:{[k_]:{stringValue:C_},[x_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Gu(i)&&(i=gc(i)),i&&(o.fields[N_]=i),{mapValue:o}})(n,e):t instanceof io?Y_(t,e):t instanceof oo?X_(t,e):(function(s,i){const o=J_(s,i),c=Ep(o)+Ep(s.Ee);return Ql(o)&&Ql(s.Ee)?K_(c):Ju(s.serializer,c)})(t,e)}function BR(t,e,n){return t instanceof io?Y_(t,e):t instanceof oo?X_(t,e):n}function J_(t,e){return t instanceof ao?(function(r){return Ql(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Ma extends Ec{}class io extends Ec{constructor(e){super(),this.elements=e}}function Y_(t,e){const n=Z_(e);for(const r of t.elements)n.some((s=>xn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class oo extends Ec{constructor(e){super(),this.elements=e}}function X_(t,e){let n=Z_(e);for(const r of t.elements)n=n.filter((s=>!xn(s,r)));return{arrayValue:{values:n}}}class ao extends Ec{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Ep(t){return Ke(t.integerValue||t.doubleValue)}function Z_(t){return zu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class $R{constructor(e,n){this.field=e,this.transform=n}}function qR(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof io&&s instanceof io||r instanceof oo&&s instanceof oo?$s(r.elements,s.elements,xn):r instanceof ao&&s instanceof ao?xn(r.Ee,s.Ee):r instanceof Ma&&s instanceof Ma})(t.transform,e.transform)}class HR{constructor(e,n){this.version=e,this.transformResults=n}}class et{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new et}static exists(e){return new et(void 0,e)}static updateTime(e){return new et(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ua(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class wc{}function ey(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new To(t.key,et.none()):new wo(t.key,t.data,et.none());{const n=t.data,r=xt.empty();let s=new rt(ft.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Br(t.key,r,new Jt(s.toArray()),et.none())}}function WR(t,e,n){t instanceof wo?(function(s,i,o){const c=s.value.clone(),l=Tp(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Br?(function(s,i,o){if(!ua(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Tp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(ty(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function $i(t,e,n,r){return t instanceof wo?(function(i,o,c,l){if(!ua(i.precondition,o))return c;const u=i.value.clone(),d=Ip(i.fieldTransforms,l,o);return u.setAll(d),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof Br?(function(i,o,c,l){if(!ua(i.precondition,o))return c;const u=Ip(i.fieldTransforms,l,o),d=o.data;return d.setAll(ty(i)),d.setAll(u),o.convertToFoundDocument(o.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return ua(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function GR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=J_(r.transform,s||null);i!=null&&(n===null&&(n=xt.empty()),n.set(r.field,i))}return n||null}function wp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&$s(r,s,((i,o)=>qR(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class wo extends wc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Br extends wc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ty(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Tp(t,e,n){const r=new Map;Ae(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,BR(o,c,n[s]))}return r}function Ip(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,jR(i,o,e))}return r}class To extends wc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ny extends wc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class zR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&WR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=$i(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=$i(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=z_();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=ey(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(le.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),we())}isEqual(e){return this.batchId===e.batchId&&$s(this.mutations,e.mutations,((n,r)=>wp(n,r)))&&$s(this.baseMutations,e.baseMutations,((n,r)=>wp(n,r)))}}class Yu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ae(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return MR})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Yu(e,n,r,s)}}/**
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
 */class KR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class QR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Xe,Ie;function ry(t){switch(t){case D.OK:return ie(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return ie(15467,{code:t})}}function sy(t){if(t===void 0)return Yn("GRPC error has no .code"),D.UNKNOWN;switch(t){case Xe.OK:return D.OK;case Xe.CANCELLED:return D.CANCELLED;case Xe.UNKNOWN:return D.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return D.INTERNAL;case Xe.UNAVAILABLE:return D.UNAVAILABLE;case Xe.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Xe.NOT_FOUND:return D.NOT_FOUND;case Xe.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Xe.ABORTED:return D.ABORTED;case Xe.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Xe.DATA_LOSS:return D.DATA_LOSS;default:return ie(39323,{code:t})}}(Ie=Xe||(Xe={}))[Ie.OK=0]="OK",Ie[Ie.CANCELLED=1]="CANCELLED",Ie[Ie.UNKNOWN=2]="UNKNOWN",Ie[Ie.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ie[Ie.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ie[Ie.NOT_FOUND=5]="NOT_FOUND",Ie[Ie.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ie[Ie.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ie[Ie.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ie[Ie.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ie[Ie.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ie[Ie.ABORTED=10]="ABORTED",Ie[Ie.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ie[Ie.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ie[Ie.INTERNAL=13]="INTERNAL",Ie[Ie.UNAVAILABLE=14]="UNAVAILABLE",Ie[Ie.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const JR=new Rr([4294967295,4294967295],0);function Ap(t){const e=I_().encode(t),n=new m_;return n.update(e),new Uint8Array(n.digest())}function bp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Rr([n,r],0),new Rr([s,i],0)]}class Xu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ci(`Invalid padding: ${n}`);if(r<0)throw new Ci(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ci(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ci(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Rr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(Rr.fromNumber(r)));return s.compare(JR)===1&&(s=new Rr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Ap(e),[r,s]=bp(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Xu(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.fe===0)return;const n=Ap(e),[r,s]=bp(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ci extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class Tc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Io.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Tc(le.min(),s,new He(ge),Xn(),we())}}class Io{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Io(r,n,we(),we(),we())}}/**
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
 */class ha{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class iy{constructor(e,n){this.targetId=e,this.De=n}}class oy{constructor(e,n,r=mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Rp{constructor(){this.ve=0,this.Ce=Sp(),this.Fe=mt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=we(),n=we(),r=we();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ie(38017,{changeType:i})}})),new Io(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Sp()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ae(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class YR{constructor(e){this.We=e,this.Ge=new Map,this.ze=Xn(),this.je=Yo(),this.Je=Yo(),this.He=new He(ge)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:ie(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Yl(i))if(r===0){const o=new re(i.path);this.Xe(n,o,at.newNoDocument(o,le.min()))}else Ae(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const c=this._t(e),l=c?this.ut(c,e,o):1;if(l!==0){this.rt(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=Vr(r).toUint8Array()}catch(l){if(l instanceof P_)return Nr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Xu(o,s,i)}catch(l){return Nr(l instanceof Ci?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const c=this.st(o);if(c){if(i.current&&Yl(c.target)){const l=new re(c.target.path);this.Tt(l).has(o)||this.It(o,l)||this.Xe(o,l,at.newNoDocument(l,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let r=we();this.Je.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.st(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new Tc(e,n,this.He,this.ze,r);return this.ze=Xn(),this.je=Yo(),this.Je=Yo(),this.He=new He(ge),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new Rp,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new rt(ge),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new rt(ge),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Rp),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Yo(){return new He(re.comparator)}function Sp(){return new He(re.comparator)}const XR={asc:"ASCENDING",desc:"DESCENDING"},ZR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},eS={and:"AND",or:"OR"};class tS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function Zl(t,e){return t.useProto3Json||Eo(e)?e:{value:e}}function La(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ay(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function nS(t,e){return La(t,e.toTimestamp())}function Yt(t){return Ae(!!t,49232),le.fromTimestamp((function(n){const r=Dr(n);return new _e(r.seconds,r.nanos)})(t))}function Zu(t,e){return eu(t,e).canonicalString()}function eu(t,e){const n=(function(s){return new De(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function cy(t){const e=De.fromString(t);return Ae(py(e),10190,{key:e.toString()}),e}function Fa(t,e){return Zu(t.databaseId,e.path)}function qi(t,e){const n=cy(e);if(n.get(1)!==t.databaseId.projectId)throw new z(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(uy(n))}function ly(t,e){return Zu(t.databaseId,e)}function rS(t){const e=cy(t);return e.length===4?De.emptyPath():uy(e)}function tu(t){return new De(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function uy(t){return Ae(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Pp(t,e,n){return{name:Fa(t,e),fields:n.value.mapValue.fields}}function sS(t,e){return"found"in e?(function(r,s){Ae(!!s.found,43571),s.found.name,s.found.updateTime;const i=qi(r,s.found.name),o=Yt(s.found.updateTime),c=s.found.createTime?Yt(s.found.createTime):le.min(),l=new xt({mapValue:{fields:s.found.fields}});return at.newFoundDocument(i,o,c,l)})(t,e):"missing"in e?(function(r,s){Ae(!!s.missing,3894),Ae(!!s.readTime,22933);const i=qi(r,s.missing),o=Yt(s.readTime);return at.newNoDocument(i,o)})(t,e):ie(7234,{result:e})}function iS(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ie(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,d){return u.useProto3Json?(Ae(d===void 0||typeof d=="string",58123),mt.fromBase64String(d||"")):(Ae(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),mt.fromUint8Array(d||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const d=u.code===void 0?D.UNKNOWN:sy(u.code);return new z(d,u.message||"")})(o);n=new oy(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=qi(t,r.document.name),i=Yt(r.document.updateTime),o=r.document.createTime?Yt(r.document.createTime):le.min(),c=new xt({mapValue:{fields:r.document.fields}}),l=at.newFoundDocument(s,i,o,c),u=r.targetIds||[],d=r.removedTargetIds||[];n=new ha(u,d,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=qi(t,r.document),i=r.readTime?Yt(r.readTime):le.min(),o=at.newNoDocument(s,i),c=r.removedTargetIds||[];n=new ha([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=qi(t,r.document),i=r.removedTargetIds||[];n=new ha([],i,s,null)}else{if(!("filter"in e))return ie(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new QR(s,i),c=r.targetId;n=new iy(c,o)}}return n}function hy(t,e){let n;if(e instanceof wo)n={update:Pp(t,e.key,e.value)};else if(e instanceof To)n={delete:Fa(t,e.key)};else if(e instanceof Br)n={update:Pp(t,e.key,e.data),updateMask:pS(e.fieldMask)};else{if(!(e instanceof ny))return ie(16599,{Rt:e.type});n={verify:Fa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof Ma)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof io)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof oo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ao)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw ie(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:nS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ie(27497)})(t,e.precondition)),n}function oS(t,e){return t&&t.length>0?(Ae(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?Yt(s.updateTime):Yt(i);return o.isEqual(le.min())&&(o=Yt(i)),new HR(o,s.transformResults||[])})(n,e)))):[]}function aS(t,e){return{documents:[ly(t,e.path)]}}function cS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ly(t,s);const i=(function(u){if(u.length!==0)return fy(dn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((d=>(function(m){return{field:As(m.field),direction:hS(m.dir)}})(d)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=Zl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Vt:n,parent:s}}function lS(t){let e=rS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ae(r===1,65062);const d=n.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];n.where&&(i=(function(p){const m=dy(p);return m instanceof dn&&F_(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(R){return new so(bs(R.field),(function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(R.direction))})(m)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,Eo(m)?null:m})(n.limit));let l=null;n.startAt&&(l=(function(p){const m=!!p.before,_=p.values||[];return new Va(_,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,_=p.values||[];return new Va(_,m)})(n.endAt)),NR(e,s,o,i,c,"F",l,u)}function uS(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function dy(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=bs(n.unaryFilter.field);return Ze.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=bs(n.unaryFilter.field);return Ze.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=bs(n.unaryFilter.field);return Ze.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=bs(n.unaryFilter.field);return Ze.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ie(61313);default:return ie(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ze.create(bs(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ie(58110);default:return ie(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return dn.create(n.compositeFilter.filters.map((r=>dy(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ie(1026)}})(n.compositeFilter.op))})(t):ie(30097,{filter:t})}function hS(t){return XR[t]}function dS(t){return ZR[t]}function fS(t){return eS[t]}function As(t){return{fieldPath:t.canonicalString()}}function bs(t){return ft.fromServerFormat(t.fieldPath)}function fy(t){return t instanceof Ze?(function(n){if(n.op==="=="){if(mp(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NAN"}};if(pp(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(mp(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NOT_NAN"}};if(pp(n.value))return{unaryFilter:{field:As(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:As(n.field),op:dS(n.op),value:n.value}}})(t):t instanceof dn?(function(n){const r=n.getFilters().map((s=>fy(s)));return r.length===1?r[0]:{compositeFilter:{op:fS(n.op),filters:r}}})(t):ie(54877,{filter:t})}function pS(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function py(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class wr{constructor(e,n,r,s,i=le.min(),o=le.min(),c=mt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class mS{constructor(e){this.gt=e}}function gS(t){const e=lS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Oa(e,e.limit,"L"):e}/**
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
 */class _S{constructor(){this.Dn=new yS}addToCollectionParentIndex(e,n){return this.Dn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(xr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(xr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class yS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new rt(De.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new rt(De.comparator)).toArray()}}/**
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
 */const Cp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},my=41943040;class Mt{static withCacheSize(e){return new Mt(e,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Mt.DEFAULT_COLLECTION_PERCENTILE=10,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Mt.DEFAULT=new Mt(my,Mt.DEFAULT_COLLECTION_PERCENTILE,Mt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Mt.DISABLED=new Mt(-1,0,0);/**
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
 */class Ws{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ws(0)}static ur(){return new Ws(-1)}}/**
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
 */const kp="LruGarbageCollector",vS=1048576;function Np([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class ES{constructor(e){this.Tr=e,this.buffer=new rt(Np),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();Np(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class wS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){Y(kp,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){ei(n)?Y(kp,"Ignoring IndexedDB error during garbage collection: ",n):await Zs(n)}await this.Rr(3e5)}))}}class TS{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return F.resolve(mc.ue);const r=new ES(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Cp)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Cp):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,c,l,u;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),Ts()<=Ee.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-d}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-d}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function IS(t,e){return new TS(t,e)}/**
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
 */class AS{constructor(){this.changes=new ds((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class bS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class RS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&$i(r.mutation,s,Jt.empty(),_e.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,we()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=we()){const s=Yr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=Pi();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Yr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,we())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=Xn();const o=Bi(),c=(function(){return Bi()})();return n.forEach(((l,u)=>{const d=r.get(u.key);s.has(u.key)&&(d===void 0||d.mutation instanceof Br)?i=i.insert(u.key,u):d!==void 0?(o.set(u.key,d.mutation.getFieldMask()),$i(d.mutation,u,d.mutation.getFieldMask(),_e.now())):o.set(u.key,Jt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,d)=>o.set(u,d))),n.forEach(((u,d)=>{var p;return c.set(u,new bS(d,(p=o.get(u))!==null&&p!==void 0?p:null))})),c)))}recalculateAndSaveOverlays(e,n){const r=Bi();let s=new He(((o,c)=>o-c)),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let d=r.get(l)||Jt.empty();d=c.applyToLocalView(u,d),r.set(l,d);const p=(s.get(c.batchId)||we()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,d=l.value,p=z_();d.forEach((m=>{if(!i.has(m)){const _=ey(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return F.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):$_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Yr());let c=eo,l=i;return o.next((u=>F.forEach(u,((d,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(d)?F.resolve():this.remoteDocumentCache.getEntry(e,d).next((m=>{l=l.insert(d,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,we()))).next((d=>({batchId:c,changes:G_(d)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next((r=>{let s=Pi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Pi();return this.indexManager.getCollectionParents(e,i).next((c=>F.forEach(c,(l=>{const u=(function(p,m){return new ti(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((d=>{d.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const d=u.getKey();o.get(d)===null&&(o=o.insert(d,at.newInvalidDocument(d)))}));let c=Pi();return o.forEach(((l,u)=>{const d=i.get(l);d!==void 0&&$i(d.mutation,u,Jt.empty(),_e.now()),vc(n,u)&&(c=c.insert(l,u))})),c}))}}/**
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
 */class SS{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return F.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Yt(s.createTime)}})(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:gS(s.bundledQuery),readTime:Yt(s.readTime)}})(n)),F.resolve()}}/**
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
 */class PS{constructor(){this.overlays=new He(re.comparator),this.kr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Yr();return F.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Yr(),i=n.length+1,o=new re(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new He(((u,d)=>u-d));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let d=i.get(u.largestBatchId);d===null&&(d=Yr(),i=i.insert(u.largestBatchId,d)),d.set(u.getKey(),u)}}const c=Yr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,d)=>c.set(u,d))),!(c.size()>=s)););return F.resolve(c)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new KR(n,r));let i=this.kr.get(n);i===void 0&&(i=we(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class CS{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class eh{constructor(){this.qr=new rt(it.Qr),this.$r=new rt(it.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new it(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new it(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new re(new De([])),r=new it(n,e),s=new it(n,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new re(new De([])),r=new it(n,e),s=new it(n,e+1);let i=we();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new it(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class it{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return re.comparator(e.key,n.key)||ge(e.Hr,n.Hr)}static Ur(e,n){return ge(e.Hr,n.Hr)||re.comparator(e.key,n.key)}}/**
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
 */class kS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new rt(it.Qr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new zR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Yr=this.Yr.add(new it(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Wu:this.er-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new it(n,0),s=new it(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const c=this.Zr(o.Hr);i.push(c)})),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(ge);return n.forEach((s=>{const i=new it(s,0),o=new it(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(c=>{r=r.add(c.Hr)}))})),F.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new it(new re(i),0);let c=new rt(ge);return this.Yr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Hr)),!0)}),o),F.resolve(this.ei(c))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Ae(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return F.forEach(n.mutations,(s=>{const i=new it(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new it(n,0),s=this.Yr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class NS{constructor(e){this.ni=e,this.docs=(function(){return new He(re.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():at.newInvalidDocument(s))})),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Xn();const o=n.path,c=new re(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:d}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||lR(cR(d),r)<=0||(s.has(d.key)||vc(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ie(9500)}ri(e,n){return F.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new xS(this)}getSize(e){return F.resolve(this.size)}}class xS extends AS{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),F.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class DS{constructor(e){this.persistence=e,this.ii=new ds((n=>Ku(n)),Qu),this.lastRemoteSnapshotVersion=le.min(),this.highestTargetId=0,this.si=0,this.oi=new eh,this.targetCount=0,this._i=Ws.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),F.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Ws(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.hr(n),F.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),F.waitFor(i).next((()=>s))}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.oi.containsKey(n))}}/**
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
 */class gy{constructor(e,n){this.ai={},this.overlays={},this.ui=new mc(0),this.ci=!1,this.ci=!0,this.li=new CS,this.referenceDelegate=e(this),this.hi=new DS(this),this.indexManager=new _S,this.remoteDocumentCache=(function(s){return new NS(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new mS(n),this.Ti=new SS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new PS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new kS(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new VS(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return F.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class VS extends hR{constructor(e){super(),this.currentSequenceNumber=e}}class th{constructor(e){this.persistence=e,this.Ai=new eh,this.Ri=null}static Vi(e){return new th(e)}get mi(){if(this.Ri)return this.Ri;throw ie(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.mi,(r=>{const s=re.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,le.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return F.or([()=>F.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Ua{constructor(e,n){this.persistence=e,this.gi=new ds((r=>pR(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=IS(this,n)}static Vi(e,n){return new Ua(e,n)}Ii(){}di(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return F.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?F.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,n).next((c=>{c||(r++,i.removeEntry(o,le.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),F.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ca(e.data.value)),n}Sr(e,n,r){return F.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class nh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new nh(e,n.fromCache,r,s)}}/**
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
 */class OS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class MS{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return pI()?8:dR(St())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new OS;return this.ws(e,n,o).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,n,o,c.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(Ts()<=Ee.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",Is(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(Ts()<=Ee.DEBUG&&Y("QueryEngine","Query:",Is(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ts()<=Ee.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",Is(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Sn(n))):F.resolve())}ps(e,n){if(vp(n))return F.resolve(null);let r=Sn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Oa(n,null,"F"),r=Sn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=we(...i);return this.gs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.bs(n,c);return this.Ds(n,u,o,l.readTime)?this.ps(e,Oa(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ys(e,n,r,s){return vp(n)||s.isEqual(le.min())?F.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?F.resolve(null):(Ts()<=Ee.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Is(n)),this.vs(e,o,n,aR(s,eo)).next((c=>c)))}))}bs(e,n){let r=new rt(H_(e));return n.forEach(((s,i)=>{vc(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return Ts()<=Ee.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",Is(n)),this.gs.getDocumentsMatchingQuery(e,n,xr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const rh="LocalStore",LS=3e8;class FS{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new He(ge),this.Ms=new ds((i=>Ku(i)),Qu),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new RS(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function US(t,e,n,r){return new FS(t,e,n,r)}async function _y(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=we();for(const u of s){o.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}for(const u of i){c.push(u.batchId);for(const d of u.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Bs:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function jS(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,d){const p=u.batch,m=p.keys();let _=F.resolve();return m.forEach((R=>{_=_.next((()=>d.getEntry(l,R))).next((k=>{const x=u.docVersions.get(R);Ae(x!==null,48541),k.version.compareTo(x)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),d.addEntry(k)))}))})),_.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=we();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function yy(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function BS(t,e){const n=de(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const c=[];e.targetChanges.forEach(((d,p)=>{const m=s.get(p);if(!m)return;c.push(n.hi.removeMatchingKeys(i,d.removedDocuments,p).next((()=>n.hi.addMatchingKeys(i,d.addedDocuments,p))));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(mt.EMPTY_BYTE_STRING,le.min()).withLastLimboFreeSnapshotVersion(le.min()):d.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(d.resumeToken,r)),s=s.insert(p,_),(function(k,x,$){return k.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=LS?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0})(m,_,d)&&c.push(n.hi.updateTargetData(i,_))}));let l=Xn(),u=we();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))})),c.push($S(i,o,e.documentUpdates).next((d=>{l=d.Ls,u=d.ks}))),!r.isEqual(le.min())){const d=n.hi.getLastRemoteSnapshotVersion(i).next((p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(d)}return F.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Fs=s,i)))}function $S(t,e,n){let r=we(),s=we();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Xn();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(le.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Y(rh,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{Ls:o,ks:s}}))}function qS(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Wu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function HS(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,F.resolve(s)):n.hi.allocateTargetId(r).next((o=>(s=new wr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function nu(t,e,n){const r=de(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!ei(o))throw o;Y(rh,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function xp(t,e,n){const r=de(t);let s=le.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,d){const p=de(l),m=p.Ms.get(d);return m!==void 0?F.resolve(p.Fs.get(m)):p.hi.getTargetData(u,d)})(r,o,Sn(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:le.min(),n?i:we()))).next((c=>(WS(r,DR(e),c),{documents:c,qs:i})))))}function WS(t,e,n){let r=t.xs.get(e)||le.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class Dp{constructor(){this.activeTargetIds=UR()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GS{constructor(){this.Fo=new Dp,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Dp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class zS{xo(e){}shutdown(){}}/**
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
 */const Vp="ConnectivityMonitor";class Op{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){Y(Vp,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){Y(Vp,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Xo=null;function ru(){return Xo===null?Xo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Xo++,"0x"+Xo.toString(16)}/**
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
 */const yl="RestConnection",KS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class QS{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===xa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=ru(),c=this.Go(e,n.toUriEncodedString());Y(yl,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:u}=new URL(c),d=us(u);return this.jo(e,c,l,r,d).then((p=>(Y(yl,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Nr(yl,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Xs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=KS[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class JS{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const vt="WebChannelConnection";class YS extends QS{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=ru();return new Promise(((c,l)=>{const u=new g_;u.setWithCredentials(!0),u.listenOnce(__.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case aa.NO_ERROR:const p=u.getResponseJson();Y(vt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case aa.TIMEOUT:Y(vt,`RPC '${e}' ${o} timed out`),l(new z(D.DEADLINE_EXCEEDED,"Request time out"));break;case aa.HTTP_ERROR:const m=u.getStatus();if(Y(vt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const R=_==null?void 0:_.error;if(R&&R.status&&R.message){const k=(function($){const L=$.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(L)>=0?L:D.UNKNOWN})(R.status);l(new z(k,R.message))}else l(new z(D.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new z(D.UNAVAILABLE,"Connection failed."));break;default:ie(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{Y(vt,`RPC '${e}' ${o} completed.`)}}));const d=JSON.stringify(s);Y(vt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",d,r,15)}))}P_(e,n,r){const s=ru(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=E_(),c=v_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const d=i.join("");Y(vt,`Creating RPC '${e}' stream ${s}: ${d}`,l);const p=o.createWebChannel(d,l);this.T_(p);let m=!1,_=!1;const R=new JS({Ho:x=>{_?Y(vt,`Not sending because RPC '${e}' stream ${s} is closed:`,x):(m||(Y(vt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Y(vt,`RPC '${e}' stream ${s} sending:`,x),p.send(x))},Yo:()=>p.close()}),k=(x,$,L)=>{x.listen($,(B=>{try{L(B)}catch(q){setTimeout((()=>{throw q}),0)}}))};return k(p,Si.EventType.OPEN,(()=>{_||(Y(vt,`RPC '${e}' stream ${s} transport opened.`),R.s_())})),k(p,Si.EventType.CLOSE,(()=>{_||(_=!0,Y(vt,`RPC '${e}' stream ${s} transport closed`),R.__(),this.I_(p))})),k(p,Si.EventType.ERROR,(x=>{_||(_=!0,Nr(vt,`RPC '${e}' stream ${s} transport errored. Name:`,x.name,"Message:",x.message),R.__(new z(D.UNAVAILABLE,"The operation could not be completed")))})),k(p,Si.EventType.MESSAGE,(x=>{var $;if(!_){const L=x.data[0];Ae(!!L,16349);const B=L,q=(B==null?void 0:B.error)||(($=B[0])===null||$===void 0?void 0:$.error);if(q){Y(vt,`RPC '${e}' stream ${s} received error:`,q);const ee=q.status;let se=(function(T){const A=Xe[T];if(A!==void 0)return sy(A)})(ee),E=q.message;se===void 0&&(se=D.INTERNAL,E="Unknown error status: "+ee+" with message "+q.message),_=!0,R.__(new z(se,E)),p.close()}else Y(vt,`RPC '${e}' stream ${s} received:`,L),R.a_(L)}})),k(c,y_.STAT_EVENT,(x=>{x.stat===Gl.PROXY?Y(vt,`RPC '${e}' stream ${s} detected buffering proxy`):x.stat===Gl.NOPROXY&&Y(vt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{R.o_()}),0),R}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function vl(){return typeof document<"u"?document:null}/**
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
 */function Ic(t){return new tS(t,!0)}/**
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
 */class sh{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Mp="PersistentStream";class vy{constructor(e,n,r,s,i,o,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new sh(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new z(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return Y(Mp,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(Y(Mp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class XS extends vy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=iS(this.serializer,e),r=(function(i){if(!("targetChange"in i))return le.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?le.min():o.readTime?Yt(o.readTime):le.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=tu(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=Yl(l)?{documents:aS(i,l)}:{query:cS(i,l).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=ay(i,o.resumeToken);const u=Zl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(le.min())>0){c.readTime=La(i,o.snapshotVersion.toTimestamp());const u=Zl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=uS(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=tu(this.serializer),n.removeTarget=e,this.k_(n)}}class ZS extends vy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Ae(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ae(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ae(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=oS(e.writeResults,e.commitTime),r=Yt(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=tu(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>hy(this.serializer,r)))};this.k_(n)}}/**
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
 */class eP{}class tP extends eP{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new z(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,eu(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(D.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Jo(e,eu(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(D.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class nP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(Yn(n),this._a=!1):Y("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const cs="RemoteStore";class rP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{fs(this)&&(Y(cs,"Restarting streams for network reachability change."),await(async function(l){const u=de(l);u.Ia.add(4),await Ao(u),u.Aa.set("Unknown"),u.Ia.delete(4),await Ac(u)})(this))}))})),this.Aa=new nP(r,s)}}async function Ac(t){if(fs(t))for(const e of t.da)await e(!0)}async function Ao(t){for(const e of t.da)await e(!1)}function Ey(t,e){const n=de(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),ch(n)?ah(n):ni(n).x_()&&oh(n,e))}function ih(t,e){const n=de(t),r=ni(n);n.Ta.delete(e),r.x_()&&wy(n,e),n.Ta.size===0&&(r.x_()?r.B_():fs(n)&&n.Aa.set("Unknown"))}function oh(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(le.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ni(t).H_(e)}function wy(t,e){t.Ra.$e(e),ni(t).Y_(e)}function ah(t){t.Ra=new YR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),ni(t).start(),t.Aa.aa()}function ch(t){return fs(t)&&!ni(t).M_()&&t.Ta.size>0}function fs(t){return de(t).Ia.size===0}function Ty(t){t.Ra=void 0}async function sP(t){t.Aa.set("Online")}async function iP(t){t.Ta.forEach(((e,n)=>{oh(t,e)}))}async function oP(t,e){Ty(t),ch(t)?(t.Aa.la(e),ah(t)):t.Aa.set("Unknown")}async function aP(t,e,n){if(t.Aa.set("Online"),e instanceof oy&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ta.delete(c),s.Ra.removeTarget(c))})(t,e)}catch(r){Y(cs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ja(t,r)}else if(e instanceof ha?t.Ra.Ye(e):e instanceof iy?t.Ra.it(e):t.Ra.et(e),!n.isEqual(le.min()))try{const r=await yy(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Ra.Pt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const d=i.Ta.get(u);d&&i.Ta.set(u,d.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const d=i.Ta.get(l);if(!d)return;i.Ta.set(l,d.withResumeToken(mt.EMPTY_BYTE_STRING,d.snapshotVersion)),wy(i,l);const p=new wr(d.target,l,u,d.sequenceNumber);oh(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){Y(cs,"Failed to raise snapshot:",r),await ja(t,r)}}async function ja(t,e,n){if(!ei(e))throw e;t.Ia.add(1),await Ao(t),t.Aa.set("Offline"),n||(n=()=>yy(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Y(cs,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await Ac(t)}))}function Iy(t,e){return e().catch((n=>ja(t,n,e)))}async function bc(t){const e=de(t),n=Mr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Wu;for(;cP(e);)try{const s=await qS(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,lP(e,s)}catch(s){await ja(e,s)}Ay(e)&&by(e)}function cP(t){return fs(t)&&t.Pa.length<10}function lP(t,e){t.Pa.push(e);const n=Mr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function Ay(t){return fs(t)&&!Mr(t).M_()&&t.Pa.length>0}function by(t){Mr(t).start()}async function uP(t){Mr(t).na()}async function hP(t){const e=Mr(t);for(const n of t.Pa)e.X_(n.mutations)}async function dP(t,e,n){const r=t.Pa.shift(),s=Yu.from(r,e,n);await Iy(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await bc(t)}async function fP(t,e){e&&Mr(t).Z_&&await(async function(r,s){if((function(o){return ry(o)&&o!==D.ABORTED})(s.code)){const i=r.Pa.shift();Mr(r).N_(),await Iy(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await bc(r)}})(t,e),Ay(t)&&by(t)}async function Lp(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),Y(cs,"RemoteStore received new credentials");const r=fs(n);n.Ia.add(3),await Ao(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await Ac(n)}async function pP(t,e){const n=de(t);e?(n.Ia.delete(2),await Ac(n)):e||(n.Ia.add(2),await Ao(n),n.Aa.set("Unknown"))}function ni(t){return t.Va||(t.Va=(function(n,r,s){const i=de(n);return i.ia(),new XS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:sP.bind(null,t),e_:iP.bind(null,t),n_:oP.bind(null,t),J_:aP.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),ch(t)?ah(t):t.Aa.set("Unknown")):(await t.Va.stop(),Ty(t))}))),t.Va}function Mr(t){return t.ma||(t.ma=(function(n,r,s){const i=de(n);return i.ia(),new ZS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:uP.bind(null,t),n_:fP.bind(null,t),ea:hP.bind(null,t),ta:dP.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await bc(t)):(await t.ma.stop(),t.Pa.length>0&&(Y(cs,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
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
 */class lh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Rn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new lh(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function uh(t,e){if(Yn("AsyncQueue",`${e}: ${t}`),ei(t))return new z(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Os{static emptySet(e){return new Os(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Pi(),this.sortedSet=new He(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Fp{constructor(){this.fa=new He(re.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ie(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class Gs{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new Gs(e,n,Os.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&yc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class mP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class gP{constructor(){this.queries=Up(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=Up(),i.forEach(((o,c)=>{for(const l of c.wa)l.onError(r)}))})(this,new z(D.ABORTED,"Firestore shutting down"))}}function Up(){return new ds((t=>q_(t)),yc)}async function hh(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new mP,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=uh(o,`Initialization of query '${Is(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&fh(n)}async function dh(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function _P(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.wa)c.Ca(s)&&(r=!0);o.ya=s}}r&&fh(n)}function yP(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function fh(t){t.Da.forEach((e=>{e.next()}))}var su,jp;(jp=su||(su={})).Fa="default",jp.Cache="cache";class ph{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Gs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=Gs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==su.Cache}}/**
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
 */class Ry{constructor(e){this.key=e}}class Sy{constructor(e){this.key=e}}class vP{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=we(),this.mutatedKeys=we(),this.Xa=H_(e),this.eu=new Os(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new Fp,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,p)=>{const m=s.get(d),_=vc(this.query,p)?p:null,R=!!m&&this.mutatedKeys.has(m.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let x=!1;m&&_?m.data.isEqual(_.data)?R!==k&&(r.track({type:3,doc:_}),x=!0):this.iu(m,_)||(r.track({type:2,doc:_}),x=!0,(l&&this.Xa(_,l)>0||u&&this.Xa(_,u)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),x=!0):m&&!_&&(r.track({type:1,doc:m}),x=!0,(l||u)&&(c=!0)),x&&(_?(o=o.add(_),i=k?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:o,ru:r,Ds:c,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((d,p)=>(function(_,R){const k=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie(20277,{At:x})}};return k(_)-k(R)})(d.type,p.type)||this.Xa(d.doc,p.doc))),this.su(r),s=s!=null&&s;const c=n&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,u=l!==this.Ya;return this.Ya=l,o.length!==0||u?{snapshot:new Gs(this.query,e.eu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Fp,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=we(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new Sy(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new Ry(r))})),n}uu(e){this.Ha=e.qs,this.Za=we();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return Gs.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const mh="SyncEngine";class EP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class wP{constructor(e){this.key=e,this.lu=!1}}class TP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new ds((c=>q_(c)),yc),this.Tu=new Map,this.Iu=new Set,this.du=new He(re.comparator),this.Eu=new Map,this.Au=new eh,this.Ru={},this.Vu=new Map,this.mu=Ws.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function IP(t,e,n=!0){const r=Dy(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Py(r,e,n,!0),s}async function AP(t,e){const n=Dy(t);await Py(n,e,!0,!1)}async function Py(t,e,n,r){const s=await HS(t.localStore,Sn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await bP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Ey(t.remoteStore,s),c}async function bP(t,e,n,r,s){t.gu=(p,m,_)=>(async function(k,x,$,L){let B=x.view.nu($);B.Ds&&(B=await xp(k.localStore,x.query,!1).then((({documents:E})=>x.view.nu(E,B))));const q=L&&L.targetChanges.get(x.targetId),ee=L&&L.targetMismatches.get(x.targetId)!=null,se=x.view.applyChanges(B,k.isPrimaryClient,q,ee);return $p(k,x.targetId,se._u),se.snapshot})(t,p,m,_);const i=await xp(t.localStore,e,!0),o=new vP(e,i.qs),c=o.nu(i.documents),l=Io.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);$p(t,n,u._u);const d=new EP(e,n,o);return t.Pu.set(e,d),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function RP(t,e,n){const r=de(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!yc(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await nu(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&ih(r.remoteStore,s.targetId),iu(r,s.targetId)})).catch(Zs)):(iu(r,s.targetId),await nu(r.localStore,s.targetId,!0))}async function SP(t,e){const n=de(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ih(n.remoteStore,r.targetId))}async function PP(t,e,n){const r=OP(t);try{const s=await(function(o,c){const l=de(o),u=_e.now(),d=c.reduce(((_,R)=>_.add(R.key)),we());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let R=Xn(),k=we();return l.Os.getEntries(_,d).next((x=>{R=x,R.forEach((($,L)=>{L.isValidDocument()||(k=k.add($))}))})).next((()=>l.localDocuments.getOverlayedDocuments(_,R))).next((x=>{p=x;const $=[];for(const L of c){const B=GR(L,p.get(L.key).overlayedDocument);B!=null&&$.push(new Br(L.key,B,O_(B.value.mapValue),et.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,$,c)})).next((x=>{m=x;const $=x.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(_,x.batchId,$)}))})).then((()=>({batchId:m.batchId,changes:G_(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Ru[o.currentUser.toKey()];u||(u=new He(ge)),u=u.insert(c,l),o.Ru[o.currentUser.toKey()]=u})(r,s.batchId,n),await bo(r,s.changes),await bc(r.remoteStore)}catch(s){const i=uh(s,"Failed to persist write");n.reject(i)}}async function Cy(t,e){const n=de(t);try{const r=await BS(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Eu.get(i);o&&(Ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?Ae(o.lu,14607):s.removedDocuments.size>0&&(Ae(o.lu,42227),o.lu=!1))})),await bo(n,r,e)}catch(r){await Zs(r)}}function Bp(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=de(o);l.onlineState=c;let u=!1;l.queries.forEach(((d,p)=>{for(const m of p.wa)m.va(c)&&(u=!0)})),u&&fh(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function CP(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new He(re.comparator);o=o.insert(i,at.newNoDocument(i,le.min()));const c=we().add(i),l=new Tc(le.min(),new Map,new He(ge),o,c);await Cy(r,l),r.du=r.du.remove(i),r.Eu.delete(e),gh(r)}else await nu(r.localStore,e,!1).then((()=>iu(r,e,n))).catch(Zs)}async function kP(t,e){const n=de(t),r=e.batch.batchId;try{const s=await jS(n.localStore,e);Ny(n,r,null),ky(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await bo(n,s)}catch(s){await Zs(s)}}async function NP(t,e,n){const r=de(t);try{const s=await(function(o,c){const l=de(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let d;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(Ae(p!==null,37113),d=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,d,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,d))).next((()=>l.localDocuments.getDocuments(u,d)))}))})(r.localStore,e);Ny(r,e,n),ky(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await bo(r,s)}catch(s){await Zs(s)}}function ky(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function Ny(t,e,n){const r=de(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function iu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||xy(t,r)}))}function xy(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(ih(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),gh(t))}function $p(t,e,n){for(const r of n)r instanceof Ry?(t.Au.addReference(r.key,e),xP(t,r)):r instanceof Sy?(Y(mh,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||xy(t,r.key)):ie(19791,{yu:r})}function xP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(Y(mh,"New document in limbo: "+n),t.Iu.add(r),gh(t))}function gh(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new re(De.fromString(e)),r=t.mu.next();t.Eu.set(r,new wP(n)),t.du=t.du.insert(n,r),Ey(t.remoteStore,new wr(Sn(_c(n.path)),r,"TargetPurposeLimboResolution",mc.ue))}}async function bo(t,e,n){const r=de(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,l)=>{o.push(r.gu(l,e,n).then((u=>{var d;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(d=n==null?void 0:n.targetChanges.get(l.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=nh.Es(l.targetId,u);i.push(p)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(l,u){const d=de(l);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>F.forEach(u,(m=>F.forEach(m.Is,(_=>d.persistence.referenceDelegate.addReference(p,m.targetId,_))).next((()=>F.forEach(m.ds,(_=>d.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))))))}catch(p){if(!ei(p))throw p;Y(rh,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=d.Fs.get(m),R=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(R);d.Fs=d.Fs.insert(m,k)}}})(r.localStore,i))}async function DP(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){Y(mh,"User change. New user:",e.toKey());const r=await _y(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((c=>{c.forEach((l=>{l.reject(new z(D.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await bo(n,r.Bs)}}function VP(t,e){const n=de(t),r=n.Eu.get(e);if(r&&r.lu)return we().add(r.key);{let s=we();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const c=n.Pu.get(o);s=s.unionWith(c.view.tu)}return s}}function Dy(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Cy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=VP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=CP.bind(null,e),e.hu.J_=_P.bind(null,e.eventManager),e.hu.pu=yP.bind(null,e.eventManager),e}function OP(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=kP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=NP.bind(null,e),e}class Ba{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ic(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return US(this.persistence,new MS,e.initialUser,this.serializer)}Du(e){return new gy(th.Vi,this.serializer)}bu(e){return new GS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Ba.provider={build:()=>new Ba};class MP extends Ba{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Ae(this.persistence.referenceDelegate instanceof Ua,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new wS(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Mt.withCacheSize(this.cacheSizeBytes):Mt.DEFAULT;return new gy((r=>Ua.Vi(r,n)),this.serializer)}}class ou{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=DP.bind(null,this.syncEngine),await pP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new gP})()}createDatastore(e){const n=Ic(e.databaseInfo.databaseId),r=(function(i){return new YS(i)})(e.databaseInfo);return(function(i,o,c,l){return new tP(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new rP(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>Bp(this.syncEngine,n,0)),(function(){return Op.C()?new Op:new zS})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,d){const p=new TP(s,i,o,c,l,u);return d&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=de(s);Y(cs,"RemoteStore shutting down."),i.Ia.add(5),await Ao(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}ou.provider={build:()=>new ou};/**
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
 */class _h{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Yn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */class LP{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new z(D.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await(async function(s,i){const o=de(s),c={documents:i.map((p=>Fa(o.serializer,p)))},l=await o.Jo("BatchGetDocuments",o.serializer.databaseId,De.emptyPath(),c,i.length),u=new Map;l.forEach((p=>{const m=sS(o.serializer,p);u.set(m.key.toString(),m)}));const d=[];return i.forEach((p=>{const m=u.get(p.toString());Ae(!!m,55234,{key:p}),d.push(m)})),d})(this.datastore,e);return n.forEach((r=>this.recordVersion(r))),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new To(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((n=>{e.delete(n.key.toString())})),e.forEach(((n,r)=>{const s=re.fromPath(r);this.mutations.push(new ny(s,this.precondition(s)))})),await(async function(r,s){const i=de(r),o={writes:s.map((c=>hy(i.serializer,c)))};await i.Wo("Commit",i.serializer.databaseId,De.emptyPath(),o)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw ie(50498,{Wu:e.constructor.name});n=le.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new z(D.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(le.min())?et.exists(!1):et.updateTime(n):et.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(le.min()))throw new z(D.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return et.updateTime(n)}return et.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class FP{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.Gu=r.maxAttempts,this.F_=new sh(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_((async()=>{const e=new LP(this.datastore),n=this.Ju(e);n&&n.then((r=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(r)})).catch((s=>{this.Hu(s)}))))})).catch((r=>{this.Hu(r)}))}))}Ju(e){try{const n=this.updateFunction(e);return!Eo(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Hu(e){this.Gu>0&&this.Yu(e)?(this.Gu-=1,this.asyncQueue.enqueueAndForget((()=>(this.ju(),Promise.resolve())))):this.deferred.reject(e)}Yu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!ry(n)}return!1}}/**
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
 */const Lr="FirestoreClient";class UP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=Hu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{Y(Lr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(Y(Lr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Rn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=uh(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function El(t,e){t.asyncQueue.verifyOperationInProgress(),Y(Lr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await _y(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Nr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{Y("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Nr("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function qp(t,e){t.asyncQueue.verifyOperationInProgress();const n=await jP(t);Y(Lr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Lp(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Lp(e.remoteStore,s))),t._onlineComponents=e}async function jP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y(Lr,"Using user provided OfflineComponentProvider");try{await El(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Nr("Error using user provided cache. Falling back to memory cache: "+n),await El(t,new Ba)}}else Y(Lr,"Using default OfflineComponentProvider"),await El(t,new MP(void 0));return t._offlineComponents}async function yh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y(Lr,"Using user provided OnlineComponentProvider"),await qp(t,t._uninitializedComponentsProvider._online)):(Y(Lr,"Using default OnlineComponentProvider"),await qp(t,new ou))),t._onlineComponents}function BP(t){return yh(t).then((e=>e.syncEngine))}function $P(t){return yh(t).then((e=>e.datastore))}async function $a(t){const e=await yh(t),n=e.eventManager;return n.onListen=IP.bind(null,e.syncEngine),n.onUnlisten=RP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=AP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=SP.bind(null,e.syncEngine),n}function qP(t,e,n={}){const r=new Rn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const d=new _h({next:m=>{d.Ou(),o.enqueueAndForget((()=>dh(i,p)));const _=m.docs.has(c);!_&&m.fromCache?u.reject(new z(D.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?u.reject(new z(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new ph(_c(c.path),d,{includeMetadataChanges:!0,ka:!0});return hh(i,p)})(await $a(t),t.asyncQueue,e,n,r))),r.promise}function HP(t,e,n={}){const r=new Rn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const d=new _h({next:m=>{d.Ou(),o.enqueueAndForget((()=>dh(i,p))),m.fromCache&&l.source==="server"?u.reject(new z(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new ph(c,d,{includeMetadataChanges:!0,ka:!0});return hh(i,p)})(await $a(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function Vy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const Hp=new Map;/**
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
 */const Oy="firestore.googleapis.com",Wp=!0;class Gp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Oy,this.ssl=Wp}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Wp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=my;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<vS)throw new z(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}iR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Vy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Rc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Jb;switch(r.type){case"firstParty":return new eR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=Hp.get(n);r&&(Y("ComponentProvider","Removing Datastore"),Hp.delete(n),r.terminate())})(this),Promise.resolve()}}function WP(t,e,n,r={}){var s;t=Rt(t,Rc);const i=us(e),o=t._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i&&(Cu(`https://${l}`),ku("Firestore",!0)),o.host!==Oy&&o.host!==l&&Nr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:l,ssl:i,emulatorOptions:r});if(!rs(u,c)&&(t._setSettings(u),r.mockUserToken)){let d,p;if(typeof r.mockUserToken=="string")d=r.mockUserToken,p=wt.MOCK_USER;else{d=iI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new z(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new wt(m)}t._authCredentials=new Yb(new T_(d,p))}}/**
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
 */class rr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rr(this.firestore,e,this._query)}}class qe{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Sr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}toJSON(){return{type:qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(vo(n,qe._jsonSchema))return new qe(e,r||null,new re(De.fromString(n.referencePath)))}}qe._jsonSchemaVersion="firestore/documentReference/1.0",qe._jsonSchema={type:tt("string",qe._jsonSchemaVersion),referencePath:tt("string")};class Sr extends rr{constructor(e,n,r){super(e,n,_c(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new re(e))}withConverter(e){return new Sr(this.firestore,e,this._path)}}function My(t,e,...n){if(t=Fe(t),A_("collection","path",e),t instanceof Rc){const r=De.fromString(e,...n);return ip(r),new Sr(t,null,r)}{if(!(t instanceof qe||t instanceof Sr))throw new z(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return ip(r),new Sr(t.firestore,null,r)}}function Sc(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=Hu.newId()),A_("doc","path",e),t instanceof Rc){const r=De.fromString(e,...n);return sp(r),new qe(t,null,new re(r))}{if(!(t instanceof qe||t instanceof Sr))throw new z(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(De.fromString(e,...n));return sp(r),new qe(t.firestore,t instanceof Sr?t.converter:null,new re(r))}}/**
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
 */const zp="AsyncQueue";class Kp{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new sh(this,"async_queue_retry"),this.oc=()=>{const r=vl();r&&Y(zp,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=vl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=vl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new Rn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ei(e))throw e;Y(zp,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Yn("INTERNAL UNHANDLED ERROR: ",Qp(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=lh.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&ie(47125,{hc:Qp(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Qp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function Jp(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class fn extends Rc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Kp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Kp(e),this._firestoreClient=void 0,await e}}}function GP(t,e){const n=typeof t=="object"?t:Du(),r=typeof t=="string"?t:xa,s=uc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Sg("firestore");i&&WP(s,...i)}return s}function ri(t){if(t._terminated)throw new z(D.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||zP(t),t._firestoreClient}function zP(t){var e,n,r;const s=t._freezeSettings(),i=(function(c,l,u,d){return new _R(c,l,u,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Vy(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new UP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(t._componentsProvider))}/**
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
 */class zt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new zt(mt.fromBase64String(e))}catch(n){throw new z(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new zt(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:zt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(vo(e,zt._jsonSchema))return zt.fromBase64String(e.bytes)}}zt._jsonSchemaVersion="firestore/bytes/1.0",zt._jsonSchema={type:tt("string",zt._jsonSchemaVersion),bytes:tt("string")};/**
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
 */class si{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Pc{constructor(e){this._methodName=e}}/**
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
 */class Pn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Pn._jsonSchemaVersion}}static fromJSON(e){if(vo(e,Pn._jsonSchema))return new Pn(e.latitude,e.longitude)}}Pn._jsonSchemaVersion="firestore/geoPoint/1.0",Pn._jsonSchema={type:tt("string",Pn._jsonSchemaVersion),latitude:tt("number"),longitude:tt("number")};/**
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
 */class Cn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Cn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(vo(e,Cn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Cn(e.vectorValues);throw new z(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Cn._jsonSchemaVersion="firestore/vectorValue/1.0",Cn._jsonSchema={type:tt("string",Cn._jsonSchemaVersion),vectorValues:tt("object")};/**
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
 */const KP=/^__.*__$/;class QP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Br(e,this.data,this.fieldMask,n,this.fieldTransforms):new wo(e,this.data,n,this.fieldTransforms)}}class Ly{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Br(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Fy(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie(40011,{Ec:t})}}class vh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new vh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return qa(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Fy(this.Ec)&&KP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class JP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ic(e)}Dc(e,n,r,s=!1){return new vh({Ec:e,methodName:n,bc:r,path:ft.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function ii(t){const e=t._freezeSettings(),n=Ic(t._databaseId);return new JP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Cc(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);Ih("Data must be an object, but it was:",o,r);const c=Uy(r,o);let l,u;if(i.merge)l=new Jt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const m=au(e,p,n);if(!o.contains(m))throw new z(D.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);By(d,m)||d.push(m)}l=new Jt(d),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new QP(new xt(c),l,u)}class kc extends Pc{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof kc}}class Eh extends Pc{constructor(e,n){super(e),this.Cc=n}_toFieldTransform(e){const n=new ao(e.serializer,Q_(e.serializer,this.Cc));return new $R(e.path,n)}isEqual(e){return e instanceof Eh&&this.Cc===e.Cc}}function wh(t,e,n,r){const s=t.Dc(1,e,n);Ih("Data must be an object, but it was:",s,r);const i=[],o=xt.empty();jr(r,((l,u)=>{const d=Ah(e,l,n);u=Fe(u);const p=s.gc(d);if(u instanceof kc)i.push(d);else{const m=Ro(u,p);m!=null&&(i.push(d),o.set(d,m))}}));const c=new Jt(i);return new Ly(o,c,s.fieldTransforms)}function Th(t,e,n,r,s,i){const o=t.Dc(1,e,n),c=[au(e,r,n)],l=[s];if(i.length%2!=0)throw new z(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(au(e,i[m])),l.push(i[m+1]);const u=[],d=xt.empty();for(let m=c.length-1;m>=0;--m)if(!By(u,c[m])){const _=c[m];let R=l[m];R=Fe(R);const k=o.gc(_);if(R instanceof kc)u.push(_);else{const x=Ro(R,k);x!=null&&(u.push(_),d.set(_,x))}}const p=new Jt(u);return new Ly(d,p,o.fieldTransforms)}function YP(t,e,n,r=!1){return Ro(n,t.Dc(r?4:3,e))}function Ro(t,e){if(jy(t=Fe(t)))return Ih("Unsupported field value:",e,t),Uy(t,e);if(t instanceof Pc)return(function(r,s){if(!Fy(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=Ro(c,s.yc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Q_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=_e.fromDate(r);return{timestampValue:La(s.serializer,i)}}if(r instanceof _e){const i=new _e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:La(s.serializer,i)}}if(r instanceof Pn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof zt)return{bytesValue:ay(s.serializer,r._byteString)};if(r instanceof qe){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Zu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Cn)return(function(o,c){return{mapValue:{fields:{[D_]:{stringValue:V_},[Da]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.wc("VectorValues must only contain numeric values.");return Ju(c.serializer,u)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${pc(r)}`)})(t,e)}function Uy(t,e){const n={};return S_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jr(t,((r,s)=>{const i=Ro(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function jy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _e||t instanceof Pn||t instanceof zt||t instanceof qe||t instanceof Pc||t instanceof Cn)}function Ih(t,e,n){if(!jy(n)||!b_(n)){const r=pc(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function au(t,e,n){if((e=Fe(e))instanceof si)return e._internalPath;if(typeof e=="string")return Ah(t,e);throw qa("Field path arguments must be of type string or ",t,!1,void 0,n)}const XP=new RegExp("[~\\*/\\[\\]]");function Ah(t,e,n){if(e.search(XP)>=0)throw qa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new si(...e.split("."))._internalPath}catch{throw qa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new z(D.INVALID_ARGUMENT,c+t+l)}function By(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class Ha{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new ZP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(Nc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class ZP extends Ha{data(){return super.data()}}function Nc(t,e){return typeof e=="string"?Ah(t,e):e instanceof si?e._internalPath:e._delegate._internalPath}/**
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
 */function $y(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class bh{}class Rh extends bh{}function Ut(t,e,...n){let r=[];e instanceof bh&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((l=>l instanceof Sh)).length,c=i.filter((l=>l instanceof xc)).length;if(o>1||o>0&&c>0)throw new z(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class xc extends Rh{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new xc(e,n,r)}_apply(e){const n=this._parse(e);return qy(e._query,n),new rr(e.firestore,e.converter,Xl(e._query,n))}_parse(e){const n=ii(e.firestore);return(function(i,o,c,l,u,d,p){let m;if(u.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new z(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Xp(p,d);const R=[];for(const k of p)R.push(Yp(l,i,k));m={arrayValue:{values:R}}}else m=Yp(l,i,p)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Xp(p,d),m=YP(c,o,p,d==="in"||d==="not-in");return Ze.create(u,d,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function jt(t,e,n){const r=e,s=Nc("where",t);return xc._create(s,r,n)}class Sh extends bh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Sh(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:dn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)qy(o,l),o=Xl(o,l)})(e._query,n),new rr(e.firestore,e.converter,Xl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Ph extends Rh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Ph(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new z(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new z(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new so(i,o)})(e._query,this._field,this._direction);return new rr(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new ti(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function Dn(t,e="asc"){const n=e,r=Nc("orderBy",t);return Ph._create(r,n)}class Ch extends Rh{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Ch(e,n,r)}_apply(e){return new rr(e.firestore,e.converter,Oa(e._query,this._limit,this._limitType))}}function eC(t){return oR("limit",t),Ch._create("limit",t,"F")}function Yp(t,e,n){if(typeof(n=Fe(n))=="string"){if(n==="")throw new z(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!$_(e)&&n.indexOf("/")!==-1)throw new z(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(De.fromString(n));if(!re.isDocumentKey(r))throw new z(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fp(t,new re(r))}if(n instanceof qe)return fp(t,n._key);throw new z(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${pc(n)}.`)}function Xp(t,e){if(!Array.isArray(t)||t.length===0)throw new z(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function qy(t,e){const n=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new z(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Hy{convertValue(e,n="none"){switch(Or(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Vr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return jr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Da].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>Ke(o.doubleValue)));return new Cn(i)}convertGeoPoint(e){return new Pn(Ke(e.latitude),Ke(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=gc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(to(e));default:return null}}convertTimestamp(e){const n=Dr(e);return new _e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=De.fromString(e);Ae(py(r),9688,{name:e});const s=new no(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Yn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Dc(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class tC extends Hy{constructor(e){super(),this.firestore=e}convertBytes(e){return new zt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,n)}}class Ss{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pr extends Ha{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new da(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(Nc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Pr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Pr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Pr._jsonSchema={type:tt("string",Pr._jsonSchemaVersion),bundleSource:tt("string","DocumentSnapshot"),bundleName:tt("string"),bundle:tt("string")};class da extends Pr{data(e={}){return super.data(e)}}class ns{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ss(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new da(this._firestore,this._userDataWriter,r.key,r,new Ss(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new da(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ss(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new da(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ss(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,d=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),d=o.indexOf(c.doc.key)),{type:nC(c.type),doc:l,oldIndex:u,newIndex:d}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=ns._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Hu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function nC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie(61501,{type:t})}}/**
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
 */function Vc(t){t=Rt(t,qe);const e=Rt(t.firestore,fn);return qP(ri(e),t._key).then((n=>Wy(e,t,n)))}ns._jsonSchemaVersion="firestore/querySnapshot/1.0",ns._jsonSchema={type:tt("string",ns._jsonSchemaVersion),bundleSource:tt("string","QuerySnapshot"),bundleName:tt("string"),bundle:tt("string")};class Oc extends Hy{constructor(e){super(),this.firestore=e}convertBytes(e){return new zt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,n)}}function wn(t){t=Rt(t,rr);const e=Rt(t.firestore,fn),n=ri(e),r=new Oc(e);return $y(t._query),HP(n,t._query).then((s=>new ns(e,r,t,s)))}function V1(t,e,n){t=Rt(t,qe);const r=Rt(t.firestore,fn),s=Dc(t.converter,e,n);return So(r,[Cc(ii(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,et.none())])}function kn(t,e,n,...r){t=Rt(t,qe);const s=Rt(t.firestore,fn),i=ii(s);let o;return o=typeof(e=Fe(e))=="string"||e instanceof si?Th(i,"updateDoc",t._key,e,n,r):wh(i,"updateDoc",t._key,e),So(s,[o.toMutation(t._key,et.exists(!0))])}function kh(t){return So(Rt(t.firestore,fn),[new To(t._key,et.none())])}function Wa(t,e){const n=Rt(t.firestore,fn),r=Sc(t),s=Dc(t.converter,e);return So(n,[Cc(ii(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,et.exists(!1))]).then((()=>r))}function Zn(t,...e){var n,r,s;t=Fe(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Jp(e[o])||(i=e[o++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Jp(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,u,d;if(t instanceof qe)u=Rt(t.firestore,fn),d=_c(t._key.path),l={next:p=>{e[o]&&e[o](Wy(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Rt(t,rr);u=Rt(p.firestore,fn),d=p._query;const m=new Oc(u);l={next:_=>{e[o]&&e[o](new ns(u,m,p,_))},error:e[o+1],complete:e[o+2]},$y(t._query)}return(function(m,_,R,k){const x=new _h(k),$=new ph(_,x,R);return m.asyncQueue.enqueueAndForget((async()=>hh(await $a(m),$))),()=>{x.Ou(),m.asyncQueue.enqueueAndForget((async()=>dh(await $a(m),$)))}})(ri(u),d,c,l)}function So(t,e){return(function(r,s){const i=new Rn;return r.asyncQueue.enqueueAndForget((async()=>PP(await BP(r),s,i))),i.promise})(ri(t),e)}function Wy(t,e,n){const r=n.docs.get(e._key),s=new Oc(t);return new Pr(t,s,e._key,r,new Ss(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const rC={maxAttempts:5};/**
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
 */class sC{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=ii(e)}set(e,n,r){this._verifyNotCommitted();const s=Tr(e,this._firestore),i=Dc(s.converter,n,r),o=Cc(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,et.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Tr(e,this._firestore);let o;return o=typeof(n=Fe(n))=="string"||n instanceof si?Th(this._dataReader,"WriteBatch.update",i._key,n,r,s):wh(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,et.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Tr(e,this._firestore);return this._mutations=this._mutations.concat(new To(n._key,et.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(D.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Tr(t,e){if((t=Fe(t)).firestore!==e)throw new z(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class iC{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=ii(e)}get(e){const n=Tr(e,this._firestore),r=new tC(this._firestore);return this._transaction.lookup([n._key]).then((s=>{if(!s||s.length!==1)return ie(24041);const i=s[0];if(i.isFoundDocument())return new Ha(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new Ha(this._firestore,r,n._key,null,n.converter);throw ie(18433,{doc:i})}))}set(e,n,r){const s=Tr(e,this._firestore),i=Dc(s.converter,n,r),o=Cc(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=Tr(e,this._firestore);let o;return o=typeof(n=Fe(n))=="string"||n instanceof si?Th(this._dataReader,"Transaction.update",i._key,n,r,s):wh(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=Tr(e,this._firestore);return this._transaction.delete(n._key),this}}/**
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
 */class oC extends iC{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Tr(e,this._firestore),r=new Oc(this._firestore);return super.get(e).then((s=>new Pr(this._firestore,r,n._key,s._document,new Ss(!1,!1),n.converter)))}}function aC(t,e,n){t=Rt(t,fn);const r=Object.assign(Object.assign({},rC),n);return(function(i){if(i.maxAttempts<1)throw new z(D.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r),(function(i,o,c){const l=new Rn;return i.asyncQueue.enqueueAndForget((async()=>{const u=await $P(i);new FP(i.asyncQueue,u,c,o,l).zu()})),l.promise})(ri(t),(s=>e(new oC(t,s))),r)}function cC(t){return new Eh("increment",t)}/**
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
 */function Gy(t){return ri(t=Rt(t,fn)),new sC(t,(e=>So(t,e)))}(function(e,n=!0){(function(s){Xs=s})(Js),ss(new kr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new fn(new Xb(r.getProvider("auth-internal")),new tR(o,r.getProvider("app-check-internal")),(function(u,d){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new z(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new no(u.options.projectId,d)})(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),In(Zf,ep,e),In(Zf,ep,"esm2017")})();/**
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
 */const zy="functions";/**
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
 */class lC{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,Gt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
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
 */const cu="us-central1";class uC{constructor(e,n,r,s,i=cu,o=(...c)=>fetch(...c)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new lC(e,n,r,s),this.cancelAllRequests=new Promise(c=>{this.deleteService=()=>Promise.resolve(c())});try{const c=new URL(i);this.customDomain=c.origin+(c.pathname==="/"?"":c.pathname),this.region=cu}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function hC(t,e,n){const r=us(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(Cu(t.emulatorOrigin),ku("Functions",!0))}const Zp="@firebase/functions",em="0.12.9";/**
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
 */const dC="auth-internal",fC="app-check-internal",pC="messaging-internal";function mC(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),i=n.getProvider(dC),o=n.getProvider(pC),c=n.getProvider(fC);return new uC(s,i,o,c,r)};ss(new kr(zy,e,"PUBLIC").setMultipleInstances(!0)),In(Zp,em,t),In(Zp,em,"esm2017")}/**
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
 */function gC(t=Du(),e=cu){const r=uc(Fe(t),zy).getImmediate({identifier:e}),s=Sg("functions");return s&&_C(r,...s),r}function _C(t,e,n){hC(Fe(t),e,n)}mC();const yC={apiKey:"AIzaSyCL63H3EpeK3A9SgLJ6NxkcWtzOnbZM5uU",authDomain:"qa-website2026.firebaseapp.com",projectId:"qa-website2026",messagingSenderId:"207652444805",appId:"1:207652444805:web:e5f9b11f0d4293475727ec"},Nh=xg(yC),pr=Gb(Nh),zs=GP(Nh);gC(Nh);const hr=Bt(null),wl=Bt(!0);function Mc(){const t=At(()=>hr.value!==null);function e(){wl.value=!0,V0(pr,o=>{var c;o?hr.value={uid:o.uid,email:o.email||"",displayName:o.displayName||((c=o.email)==null?void 0:c.split("@")[0])||"User",photoURL:o.photoURL||void 0}:hr.value=null,wl.value=!1})}async function n(o,c){return(await k0(pr,o,c)).user}async function r(o,c,l){const u=await C0(pr,o,c);return await $f(u.user,{displayName:l}),u.user}async function s(){await O0(pr),hr.value=null}async function i(o){const c=o.trim();if(!c)throw new Error("Please enter a display name.");if(!pr.currentUser)throw new Error("You need to be signed in to update your profile.");await $f(pr.currentUser,{displayName:c}),hr.value&&(hr.value={...hr.value,displayName:c})}return{currentUser:hr,loading:wl,isAuthenticated:t,init:e,login:n,register:r,logout:s,updateDisplayName:i}}function $e(t){return My(zs,t)}function ct(t){return Sc(zs,t)}function Ti(t,e){return{id:t,...e,screenshotUrls:e.screenshotUrls??[]}}function Ky(){async function t(l){const u=Ut($e("projects"),jt("ownerId","==",l),Dn("createdAt","desc"));return(await wn(u)).docs.map(p=>({id:p.id,...p.data()}))}function e(l,u){const d=Ut($e("projects"),jt("ownerId","==",l),Dn("createdAt","desc"));return Zn(d,p=>{u(p.docs.map(m=>({id:m.id,...m.data()})))},async p=>{console.warn("subscribeProjects error, falling back:",p.message);const m=Ut($e("projects"),jt("ownerId","==",l));Zn(m,_=>{u(_.docs.map(R=>({id:R.id,...R.data()})))})})}async function n(l){const u=await Vc(ct(`projects/${l}`));return u.exists()?{id:u.id,...u.data()}:null}async function r(l){return(await Wa($e("projects"),{...l,ownerId:l.ownerId,members:{[l.ownerId]:"owner"},bugCounter:0,ownershipVerified:l.ownershipVerified??!1,createdAt:_e.now()})).id}async function s(l,u){await kn(ct(`projects/${l}`),u)}async function i(l){await kh(ct(`projects/${l}`))}async function o(l){await kn(ct(`projects/${l}`),{ownershipVerified:!0})}async function c(l,u,d){await kn(ct(`projects/${l}`),{[`members.${u}`]:d})}return{getProjects:t,subscribeProjects:e,getProject:n,createProject:r,updateProject:s,deleteProject:i,verifyOwnership:o,addMember:c}}function O1(){function t(c,l,u){const d=Ut($e("audit_jobs"),jt("projectId","==",c),Dn("timestamp","desc"));return Zn(d,p=>l(p.docs.map(m=>({id:m.id,...m.data()}))),p=>{var m;console.error("Audit jobs snapshot error:",p),(p.code==="failed-precondition"||(m=p.message)!=null&&m.includes("index"))&&(console.warn("Composite index missing — deploy firestore.indexes.json"),l([])),u==null||u(p)})}async function e(c){const l=Ut($e("audit_jobs"),jt("projectId","==",c),Dn("timestamp","desc"));return(await wn(l)).docs.map(d=>({id:d.id,...d.data()}))}async function n(c){const l=await Vc(ct(`audit_jobs/${c}`));return l.exists()?{id:l.id,...l.data()}:null}async function r(c){return(await wn($e(`audit_jobs/${c}/pages`))).docs.map(u=>u.data())}async function s(c){return(await wn($e(`audit_jobs/${c}/vulnerabilities`))).docs.map(u=>u.data())}async function i(c){return(await wn($e(`audit_jobs/${c}/performance_metrics`))).docs.map(u=>u.data())}async function o(c){const l=await e(c),u=["pages","vulnerabilities","performance_metrics"];for(const d of l){for(const p of u){const m=await wn($e(`audit_jobs/${d.id}/${p}`));for(let _=0;_<m.docs.length;_+=450){const R=Gy(zs);m.docs.slice(_,_+450).forEach(k=>R.delete(k.ref)),await R.commit()}}await kh(ct(`audit_jobs/${d.id}`))}}return{subscribeAuditJobs:t,getAuditJobs:e,getAuditJob:n,getAuditPages:r,getVulnerabilities:s,getPerformanceMetrics:i,deleteAuditHistory:o}}function M1(){function t(o,c,l){const u=Ut($e("bug_list"),jt("projectId","==",o),Dn("createdAt","desc"));return Zn(u,d=>c(d.docs.map(p=>Ti(p.id,p.data()))),d=>{var p;if(console.error("Bug list snapshot error:",d),d.code==="failed-precondition"||(p=d.message)!=null&&p.includes("index")){const m=Ut($e("bug_list"),jt("projectId","==",o));Zn(m,_=>{c(_.docs.map(R=>Ti(R.id,R.data())))})}l==null||l(d)})}async function e(o){try{const c=Ut($e("bug_list"),jt("projectId","==",o),Dn("createdAt","desc"));return(await wn(c)).docs.map(u=>Ti(u.id,u.data()))}catch{const c=Ut($e("bug_list"),jt("projectId","==",o));return(await wn(c)).docs.map(u=>Ti(u.id,u.data()))}}async function n(o){const c=await Vc(ct(`bug_list/${o}`));return c.exists()?Ti(c.id,c.data()):null}async function r(o){const c=ct(`projects/${o.projectId}`);let l="",u="";return await aC(zs,async d=>{var R;const m=(((R=(await d.get(c)).data())==null?void 0:R.bugCounter)||0)+1;u=`QAS-${m}`,d.update(c,{bugCounter:m});const _=Sc($e("bug_list"));l=_.id,d.set(_,{status:"Open",severity:"Medium",tags:[],assignees:[],commentCount:0,remediationGuide:null,screenshotUrls:[],...o,shortId:u,createdAt:_e.now(),lastEditedTime:_e.now()})}),{id:l,shortId:u}}async function s(o,c){await kn(ct(`bug_list/${o}`),{...c,lastEditedTime:_e.now()})}async function i(o){await kh(ct(`bug_list/${o}`))}return{subscribeBugs:t,getBugs:e,getBug:n,createBug:r,updateBug:s,deleteBug:i}}function L1(){function t(n,r){const s=Ut($e(`bug_list/${n}/comments`),Dn("timestamp","asc"));return Zn(s,i=>{r(i.docs.map(o=>({id:o.id,...o.data()})))})}async function e(n,r){return await kn(ct(`bug_list/${n}`),{commentCount:cC(1)}),(await Wa($e(`bug_list/${n}/comments`),{...r,timestamp:_e.now()})).id}return{subscribeComments:t,addComment:e}}function F1(){function t(o,c){const l=Ut($e("test_cases"),jt("projectId","==",o),Dn("createdAt","desc"));return Zn(l,u=>{c(u.docs.map(d=>({id:d.id,...d.data()})))})}async function e(o){const c=Ut($e("test_cases"),jt("projectId","==",o),Dn("createdAt","desc"));return(await wn(c)).docs.map(u=>({id:u.id,...u.data()}))}async function n(o){return(await Wa($e("test_cases"),{status:"Untested",steps:[],tags:[],playwrightScript:null,lastRun:null,...o,createdAt:_e.now(),lastEditedTime:_e.now()})).id}async function r(o,c){await kn(ct(`test_cases/${o}`),{...c,lastEditedTime:_e.now()})}async function s(o,c){const l=await Wa($e(`test_cases/${o}/test_runs`),{...c,runAt:_e.now()});return await kn(ct(`test_cases/${o}`),{lastRun:_e.now(),status:c.status,lastEditedTime:_e.now()}),l.id}async function i(o){if(o.length===0)return[];const c=Gy(zs),l=[];for(const u of o){const d=Sc(My(zs,"test_cases"));l.push(d.id),c.set(d,{status:"Untested",steps:[],tags:[],playwrightScript:null,lastRun:null,...u,createdAt:_e.now(),lastEditedTime:_e.now()})}return await c.commit(),l}return{subscribeTestCases:t,getTestCases:e,createTestCase:n,createBatchTestCases:i,updateTestCase:r,addTestRun:s}}function vC(){function t(r,s){const i=Ut($e("notifications"),jt("userId","==",r),Dn("createdAt","desc"),eC(50));return Zn(i,o=>{s(o.docs.map(c=>({id:c.id,...c.data()})))})}async function e(r){await kn(ct(`notifications/${r}`),{read:!0})}async function n(r){const s=Ut($e("notifications"),jt("userId","==",r),jt("read","==",!1)),o=(await wn(s)).docs.map(c=>kn(c.ref,{read:!0}));await Promise.all(o)}return{subscribeNotifications:t,markAsRead:e,markAllAsRead:n}}function U1(){function t(c,l){const u=ct(`projects/${c}`);return Zn(u,d=>{if(!d.exists()){l([]);return}const p=d.data(),m=(p==null?void 0:p.customPages)||[];l(m)},d=>{console.warn("Project document subscription error:",d.message),l([])})}async function e(c){var l;try{const u=await Vc(ct(`projects/${c}`));return u.exists()?((l=u.data())==null?void 0:l.customPages)||[]:[]}catch(u){return console.warn("Failed to load project pages:",u.message),[]}}async function n(c,l){await kn(ct(`projects/${c}`),{customPages:l})}async function r(c,l){const u=await e(c),d=`page_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,p={id:d,...l,createdAt:new Date().toISOString()};return await n(c,[p,...u]),d}async function s(c,l,u){const p=(await e(c)).map(m=>m.id===l?{...m,...u}:m);await n(c,p)}async function i(c,l){const d=(await e(c)).filter(p=>p.id!==l);await n(c,d)}async function o(c,l){const u=await e(c),d=new Set(u.map(m=>m.url.toLowerCase())),p=[];for(const m of l)d.has(m.url.toLowerCase())||(d.add(m.url.toLowerCase()),p.push({id:`page_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,...m,createdAt:new Date().toISOString()}));await n(c,[...u,...p])}return{subscribeProjectPages:t,getProjectPages:e,saveProjectPages:n,addProjectPage:r,updateProjectPage:s,deleteProjectPage:i,batchAddProjectPages:o}}const tm="/assets/qa-logo-BBgT2MGY.png",EC={key:0,class:"flex items-center gap-2"},wC=["src"],TC={key:1},IC=["src"],AC={key:0},bC={key:1},RC={class:"flex-1 space-y-1 overflow-y-auto px-3 py-4"},SC={class:"text-lg"},PC={key:0},CC={key:0,class:"space-y-1"},kC={class:"flex items-center gap-1"},NC=["aria-expanded"],xC={key:0,class:"ml-5 space-y-1 border-l border-gray-200 pl-3"},DC={key:0,class:"px-3 py-2 text-xs text-gray-400"},VC={key:1,class:"px-3 py-2 text-xs text-gray-400"},OC={class:"border-t border-gray-200 p-4"},MC={key:0,class:"flex items-center gap-3"},LC={class:"flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold"},FC={class:"min-w-0 flex-1"},UC={class:"text-sm font-medium text-gray-900 truncate"},jC={class:"text-xs text-gray-500 truncate"},BC=ls({__name:"Sidebar",props:{collapsed:{type:Boolean},mobileOpen:{type:Boolean}},emits:["toggle","closeMobile"],setup(t,{emit:e}){const n=e,r=cc(),s=Mc(),i=Ky(),o=Bt([]),c=Bt(!1),l=Bt(r.path.startsWith("/projects"));let u=null;const d=[{name:"Dashboard",path:"/dashboard",icon:"📊"},{name:"Projects",path:"/projects",icon:"📁"}],p=_=>r.path.startsWith(_);Ir(()=>{var _;return(_=s.currentUser.value)==null?void 0:_.uid},_=>{u==null||u(),u=null,o.value=[],_&&(c.value=!0,u=i.subscribeProjects(_,R=>{o.value=R,c.value=!1}))},{immediate:!0}),Ir(()=>r.path,_=>{_.startsWith("/projects")&&(l.value=!0)}),nc(()=>u==null?void 0:u());function m(){n("closeMobile")}return(_,R)=>{var x,$,L,B,q;const k=uo("router-link");return ye(),ke(Ft,null,[Z("aside",{class:Et(["fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-300 lg:static lg:z-auto lg:translate-x-0 lg:transition-[width]",[t.collapsed?"lg:w-16":"lg:w-64",t.mobileOpen?"translate-x-0":"-translate-x-full"]])},[Z("div",{class:Et(["relative flex h-16 items-center border-b border-gray-200",t.collapsed?"justify-center px-2":"justify-between px-4"])},[t.collapsed?(ye(),ke("div",TC,[Z("img",{src:ot(tm),alt:"QA-Suite logo",class:"h-8 w-8 rounded-sm object-cover"},null,8,IC)])):(ye(),ke("div",EC,[Z("img",{src:ot(tm),alt:"QA-Suite logo",class:"h-10 w-10 rounded-sm object-cover"},null,8,wC),R[3]||(R[3]=Z("span",{class:"text-sm font-medium text-gray-500"},"Suite",-1))])),Z("button",{onClick:R[0]||(R[0]=ee=>n("toggle")),class:Et(["text-gray-500 hover:bg-gray-100 hover:text-gray-700",t.collapsed?"absolute -right-3 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full border border-gray-200 bg-white shadow-sm":"rounded-lg p-1.5"])},[t.collapsed?(ye(),ke("span",AC,"→")):(ye(),ke("span",bC,"←"))],2)],2),Z("nav",RC,[(ye(!0),ke(Ft,null,_a(d.filter(ee=>ee.name==="Dashboard"),ee=>(ye(),ts(k,{key:ee.name,to:ee.path,class:Et(["flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",p(ee.path)?"bg-primary-50 text-primary-700":"text-gray-600 hover:bg-gray-100 hover:text-gray-900"]),onClick:m},{default:Er(()=>[Z("span",SC,st(ee.icon),1),t.collapsed?Lt("",!0):(ye(),ke("span",PC,st(ee.name),1))]),_:2},1032,["to","class"]))),128)),t.collapsed?(ye(),ts(k,{key:1,to:"/projects",class:Et(["flex items-center justify-center rounded-lg px-3 py-2.5 text-lg transition-colors",p("/projects")?"bg-primary-50 text-primary-700":"text-gray-600 hover:bg-gray-100 hover:text-gray-900"]),title:"Projects",onClick:m},{default:Er(()=>[...R[5]||(R[5]=[Ki(" 📁 ",-1)])]),_:1},8,["class"])):(ye(),ke("div",CC,[Z("div",kC,[Qe(k,{to:"/projects",class:Et(["flex min-w-0 flex-1 items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",p("/projects")?"bg-primary-50 text-primary-700":"text-gray-600 hover:bg-gray-100 hover:text-gray-900"]),onClick:m},{default:Er(()=>[...R[4]||(R[4]=[Z("span",{class:"text-lg"},"📁",-1),Z("span",{class:"truncate"},"Projects",-1)])]),_:1},8,["class"]),Z("button",{type:"button",class:"rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-800","aria-expanded":l.value,"aria-label":"Toggle project list",onClick:R[1]||(R[1]=ee=>l.value=!l.value)},[Z("i",{class:Et(["fa-solid fa-chevron-down text-xs transition-transform",l.value?"rotate-180":""])},null,2)],8,NC)]),l.value?(ye(),ke("div",xC,[c.value?(ye(),ke("p",DC,"Loading projects…")):o.value.length===0?(ye(),ke("p",VC,"No projects yet")):Lt("",!0),(ye(!0),ke(Ft,null,_a(o.value,ee=>(ye(),ts(k,{key:ee.id,to:`/projects/${ee.id}`,class:Et(["block truncate rounded-lg px-3 py-2 text-sm transition-colors",ot(r).params.id===ee.id?"bg-primary-50 font-semibold text-primary-700":"text-gray-600 hover:bg-gray-100 hover:text-gray-900"]),title:ee.name,onClick:m},{default:Er(()=>[Ki(st(ee.name),1)]),_:2},1032,["to","class","title"]))),128))])):Lt("",!0)]))]),Z("div",OC,[t.collapsed?Lt("",!0):(ye(),ke("div",MC,[Z("div",LC,st(((L=($=(x=ot(s).currentUser.value)==null?void 0:x.displayName)==null?void 0:$.charAt(0))==null?void 0:L.toUpperCase())||"U"),1),Z("div",FC,[Z("p",UC,st((B=ot(s).currentUser.value)==null?void 0:B.displayName),1),Z("p",jC,st((q=ot(s).currentUser.value)==null?void 0:q.email),1)])]))])],2),t.mobileOpen?(ye(),ke("button",{key:0,type:"button","aria-label":"Close navigation",class:"fixed inset-0 z-30 bg-gray-900/40 lg:hidden",onClick:R[2]||(R[2]=ee=>n("closeMobile"))})):Lt("",!0)],64)}}});function j1(t){return t?("toDate"in t?t.toDate():t).toLocaleDateString():"Just now"}function $C(t){return t?("toDate"in t?t.toDate():t).toLocaleString():"Processing..."}function B1(t){switch(t){case"Urgent":return"bg-red-100 text-red-800";case"High":return"bg-orange-100 text-orange-800";case"Medium":return"bg-yellow-100 text-yellow-800";case"Low":return"bg-blue-100 text-blue-800";default:return"bg-gray-100 text-gray-800"}}function $1(t){switch(t){case"Not started":return"bg-gray-100 text-gray-700";case"Open":return"bg-blue-100 text-blue-800";case"In Progress":return"bg-yellow-100 text-yellow-800";case"In Review":return"bg-purple-100 text-purple-800";case"Resolved":return"bg-green-100 text-green-800";default:return"bg-gray-100 text-gray-700"}}const qC={class:"flex min-h-16 items-center justify-between gap-3 border-b border-gray-200 bg-white px-4 sm:px-6"},HC={class:"flex items-center gap-4"},WC={class:"min-w-0 truncate text-xl font-semibold text-gray-800"},GC={class:"flex items-center gap-2 sm:gap-4"},zC={class:"relative notification-container"},KC={key:0,class:"absolute top-1.5 right-1.5 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center text-[10px] font-bold text-white border-2 border-white"},QC={key:0,class:"absolute right-0 mt-2 w-80 sm:w-96 rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 z-50 overflow-hidden"},JC={class:"px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-gray-50/50"},YC={class:"flex items-center gap-2"},XC={key:0,class:"rounded-full bg-indigo-100 text-indigo-700 px-2 py-0.5 text-xs font-semibold"},ZC={class:"max-h-80 overflow-y-auto divide-y divide-gray-100"},e1={key:0,class:"p-6 text-center text-gray-500"},t1=["onClick"],n1={key:0,class:"absolute left-1.5 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-indigo-600"},r1={class:"min-w-0 flex-1"},s1={class:"text-xs text-gray-600 line-clamp-2 mt-0.5"},i1={class:"text-[10px] text-gray-400 mt-1 flex items-center gap-1"},o1={class:"border-t border-gray-100 bg-gray-50/50 p-2 text-center"},a1={class:"relative user-menu-container"},c1={class:"flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold"},l1={class:"hidden text-sm font-medium text-gray-700 sm:inline"},u1={key:0,class:"absolute right-0 mt-2 w-48 rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 z-50"},h1={class:"px-4 py-2 border-b border-gray-100"},d1={class:"text-sm font-medium text-gray-900 truncate"},f1=ls({__name:"Header",props:{collapsed:{type:Boolean},user:{}},emits:["toggle-sidebar"],setup(t,{emit:e}){const n=e,r=Mc(),s=QT(),i=cc(),o=vC(),c=Bt(!1),l=Bt(!1),u=Bt([]);let d=null;const p=At(()=>u.value.filter(se=>!se.read).length),m=At(()=>u.value.slice(0,5)),_=At(()=>i.name==="ProfileSettings"?"Profile Settings":String(i.name||""));function R(se){const E=se.target;E.closest(".notification-container")||(l.value=!1),E.closest(".user-menu-container")||(c.value=!1)}Au(()=>{r.currentUser.value&&(d=o.subscribeNotifications(r.currentUser.value.uid,se=>{u.value=se})),document.addEventListener("click",R)}),nc(()=>{d==null||d(),document.removeEventListener("click",R)});const k=async()=>{c.value=!1,await r.logout(),s.push("/login")};function x(){c.value=!1,s.push("/settings/profile")}const $=()=>{l.value=!l.value,l.value&&(c.value=!1)},L=()=>{c.value=!c.value,c.value&&(l.value=!1)};async function B(){r.currentUser.value&&await o.markAllAsRead(r.currentUser.value.uid)}async function q(se){l.value=!1,se.read||await o.markAsRead(se.id),se.link&&s.push(se.link)}function ee(se,E){const y=`${se} ${E}`.toLowerCase();return y.includes("error")||y.includes("failed")||y.includes("alert")||y.includes("critical")?{icon:"fa-solid fa-triangle-exclamation",bg:"bg-red-100 text-red-600"}:y.includes("passed")||y.includes("success")||y.includes("resolved")||y.includes("completed")?{icon:"fa-solid fa-circle-check",bg:"bg-green-100 text-green-600"}:y.includes("bug")||y.includes("issue")?{icon:"fa-solid fa-bug",bg:"bg-amber-100 text-amber-600"}:y.includes("audit")||y.includes("crawl")||y.includes("scan")?{icon:"fa-solid fa-shield-halved",bg:"bg-purple-100 text-purple-600"}:y.includes("test")||y.includes("suite")?{icon:"fa-solid fa-flask",bg:"bg-blue-100 text-blue-600"}:{icon:"fa-solid fa-bell",bg:"bg-indigo-100 text-indigo-600"}}return(se,E)=>{var T,A,b,P,w;const y=uo("router-link");return ye(),ke("header",qC,[Z("div",HC,[Z("button",{type:"button","aria-label":"Toggle navigation",class:"rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 lg:hidden",onClick:E[0]||(E[0]=Se=>n("toggle-sidebar"))},[...E[2]||(E[2]=[Z("i",{class:"fa-solid fa-bars text-lg"},null,-1)])]),Z("h2",WC,st(_.value),1)]),Z("div",GC,[Z("div",zC,[Z("button",{type:"button","aria-label":"Notifications",onClick:$,class:"relative rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors focus:outline-none"},[E[3]||(E[3]=Z("i",{class:"fa-solid fa-bell text-lg"},null,-1)),p.value>0?(ye(),ke("span",KC,st(p.value>9?"9+":p.value),1)):Lt("",!0)]),l.value?(ye(),ke("div",QC,[Z("div",JC,[Z("div",YC,[E[4]||(E[4]=Z("span",{class:"text-sm font-semibold text-gray-900"},"Notifications",-1)),p.value>0?(ye(),ke("span",XC,st(p.value)+" new ",1)):Lt("",!0)]),p.value>0?(ye(),ke("button",{key:0,onClick:B,class:"text-xs font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition-colors"},[...E[5]||(E[5]=[Z("i",{class:"fa-solid fa-check-double text-[10px]"},null,-1),Z("span",null,"Mark all read",-1)])])):Lt("",!0)]),Z("div",ZC,[u.value.length===0?(ye(),ke("div",e1,[...E[6]||(E[6]=[Z("div",{class:"mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-400"},[Z("i",{class:"fa-solid fa-bell-slash text-base"})],-1),Z("p",{class:"text-sm font-medium text-gray-700"},"No notifications",-1),Z("p",{class:"text-xs text-gray-400 mt-0.5"},"You're all caught up!",-1)])])):Lt("",!0),(ye(!0),ke(Ft,null,_a(m.value,Se=>(ye(),ke("div",{key:Se.id,onClick:$t=>q(Se),class:Et(["p-3.5 hover:bg-gray-50 cursor-pointer transition-colors flex items-start gap-3 relative",Se.read?"opacity-70":"bg-indigo-50/20"])},[Se.read?Lt("",!0):(ye(),ke("div",n1)),Z("div",{class:Et(["flex-shrink-0 mt-0.5",Se.read?"ml-0":"ml-1"])},[Z("div",{class:Et(["flex h-7 w-7 items-center justify-center rounded-md",ee(Se.title,Se.message).bg])},[Z("i",{class:Et([ee(Se.title,Se.message).icon,"text-xs"])},null,2)],2)],2),Z("div",r1,[Z("p",{class:Et(["text-xs font-semibold text-gray-900 truncate",Se.read?"font-medium":"font-bold"])},st(Se.title),3),Z("p",s1,st(Se.message),1),Z("p",i1,[E[7]||(E[7]=Z("i",{class:"fa-regular fa-clock text-[9px]"},null,-1)),Z("span",null,st(ot($C)(Se.createdAt)),1)])])],10,t1))),128))]),Z("div",o1,[Qe(y,{to:"/notifications",onClick:E[1]||(E[1]=Se=>l.value=!1),class:"block w-full py-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"},{default:Er(()=>[...E[8]||(E[8]=[Ki(" View all notifications ",-1),Z("i",{class:"fa-solid fa-arrow-right text-[10px] ml-1"},null,-1)])]),_:1})])])):Lt("",!0)]),Z("div",a1,[Z("button",{onClick:L,class:"flex items-center gap-2 rounded-full border border-gray-200 p-1 pr-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"},[Z("div",c1,st(((b=(A=(T=ot(r).currentUser.value)==null?void 0:T.displayName)==null?void 0:A.charAt(0))==null?void 0:b.toUpperCase())||"U"),1),Z("span",l1,st(((P=ot(r).currentUser.value)==null?void 0:P.displayName)||"User"),1),E[9]||(E[9]=Z("i",{class:"fa-solid fa-chevron-down text-xs text-gray-400 hidden sm:inline"},null,-1))]),c.value?(ye(),ke("div",u1,[Z("div",h1,[E[10]||(E[10]=Z("p",{class:"text-xs text-gray-500"},"Signed in as",-1)),Z("p",d1,st((w=ot(r).currentUser.value)==null?void 0:w.email),1)]),Z("button",{type:"button",onClick:x,class:"flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"},[...E[11]||(E[11]=[Z("i",{class:"fa-solid fa-user-pen mr-2 text-xs text-gray-400"},null,-1),Z("span",null,"Profile settings",-1)])]),Z("button",{onClick:k,class:"flex items-center w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50"},[...E[12]||(E[12]=[Z("i",{class:"fa-solid fa-arrow-right-from-bracket mr-2 text-xs"},null,-1),Z("span",null,"Sign out",-1)])])])):Lt("",!0)])])])}}}),p1={key:0,"aria-label":"Breadcrumb",class:"mb-4"},m1={class:"flex min-w-0 items-center gap-2 text-sm text-gray-500"},g1={key:0,"aria-hidden":"true",class:"text-gray-300"},_1={key:2,class:"truncate font-medium text-gray-800","aria-current":"page"},y1=ls({__name:"Breadcrumbs",setup(t){const e=cc(),n=Ky(),r=Bt("");Ir(()=>e.params.id,async i=>{if(r.value="",typeof i!="string")return;const o=await n.getProject(i);o&&e.params.id===i&&(r.value=o.name)},{immediate:!0});const s=At(()=>{const i=typeof e.params.id=="string"?e.params.id:"",o=[];if(e.name==="Dashboard")return[{label:"Dashboard",to:"/dashboard"}];if(e.name==="Projects")return[{label:"Projects",to:"/projects"}];if(e.name==="Notifications")return[{label:"Notifications",to:"/notifications"}];i&&(o.push({label:"Projects",to:"/projects"}),o.push({label:r.value||"Project",to:`/projects/${i}`}));const l={ProjectHome:"Page Audits",AuditResults:"Audit Results",BugList:"Bugs",TestCases:"Test Cases",TrendHistory:"History"}[String(e.name)];return l&&e.name!=="ProjectHome"&&o.push({label:l}),o});return(i,o)=>{const c=uo("RouterLink");return s.value.length?(ye(),ke("nav",p1,[Z("ol",m1,[(ye(!0),ke(Ft,null,_a(s.value,(l,u)=>(ye(),ke("li",{key:`${l.label}-${u}`,class:"flex min-w-0 items-center gap-2"},[u>0?(ye(),ke("span",g1,"/")):Lt("",!0),l.to&&u<s.value.length-1?(ye(),ts(c,{key:1,to:l.to,class:"truncate transition-colors hover:text-indigo-600"},{default:Er(()=>[Ki(st(l.label),1)]),_:2},1032,["to"])):(ye(),ke("span",_1,st(l.label),1))]))),128))])])):Lt("",!0)}}}),v1={class:"flex h-screen overflow-hidden bg-[#f2faf8]"},E1={class:"flex flex-1 flex-col overflow-hidden"},w1={class:"min-w-0 flex-1 overflow-y-auto p-4 scrollbar-thin sm:p-6"},T1=ls({__name:"AppLayout",setup(t){const e=Mc(),n=Bt(!1),r=Bt(!1);function s(){if(window.innerWidth<1024){r.value=!r.value;return}n.value=!n.value}function i(){r.value=!1}return(o,c)=>{const l=uo("router-view");return ye(),ke("div",v1,[Qe(BC,{collapsed:n.value,"mobile-open":r.value,onToggle:s,onCloseMobile:i},null,8,["collapsed","mobile-open"]),Z("div",E1,[Qe(f1,{collapsed:n.value,user:ot(e).currentUser,onToggleSidebar:s},null,8,["collapsed","user"]),Z("main",w1,[Qe(y1),Qe(l)])])])}}}),I1=ls({__name:"App",setup(t){const e=Mc(),n=cc(),r=Bt(!1);return Ir(()=>n.meta.requiresAuth,s=>{r.value=s!==!1},{immediate:!0}),Au(()=>{e.init()}),(s,i)=>{const o=uo("router-view");return r.value&&ot(e).isAuthenticated?(ye(),ts(T1,{key:0},{default:Er(()=>[Qe(o)]),_:1})):(ye(),ts(o,{key:1}))}}}),A1="modulepreload",b1=function(t){return"/"+t},nm={},mn=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(u){return Promise.all(u.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(u=>{if(u=b1(u),u in nm)return;nm[u]=!0;const d=u.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=d?"stylesheet":A1,d||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),d)return new Promise((_,R)=>{m.addEventListener("load",_),m.addEventListener("error",()=>R(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},Qy=KT({history:RT(),routes:[{path:"/",redirect:"/dashboard"},{path:"/login",name:"Login",component:()=>mn(()=>import("./LoginView-BrztHqbL.js"),[]),meta:{requiresAuth:!1}},{path:"/dashboard",name:"Dashboard",component:()=>mn(()=>import("./DashboardView-6kW-p1Cr.js"),[]),meta:{requiresAuth:!0}},{path:"/projects",name:"Projects",component:()=>mn(()=>import("./ProjectsView-Col0khxO.js"),[]),meta:{requiresAuth:!0}},{path:"/projects/:id",name:"ProjectHome",component:()=>mn(()=>import("./PageAuditsView-BKVE614K.js"),__vite__mapDeps([0,1])),meta:{requiresAuth:!0}},{path:"/projects/:id/overview",redirect:t=>({name:"ProjectHome",params:{id:t.params.id}})},{path:"/projects/:id/audit/:auditId",name:"AuditResults",component:()=>mn(()=>import("./AuditResultsView-DGUF9VAy.js"),[]),meta:{requiresAuth:!0}},{path:"/projects/:id/bugs",name:"BugList",component:()=>mn(()=>import("./BugListView-Com2ywiF.js"),__vite__mapDeps([2,3])),meta:{requiresAuth:!0}},{path:"/projects/:id/test-cases",name:"TestCases",component:()=>mn(()=>import("./TestCasesView-FPdJf6Mz.js"),__vite__mapDeps([4,3])),meta:{requiresAuth:!0}},{path:"/projects/:id/pages",redirect:t=>({name:"ProjectHome",params:{id:t.params.id}})},{path:"/projects/:id/history",name:"TrendHistory",component:()=>mn(()=>import("./TrendHistoryView-P1FEk3Od.js"),[]),meta:{requiresAuth:!0}},{path:"/notifications",name:"Notifications",component:()=>mn(()=>import("./NotificationsView-C6I7GXxO.js"),[]),meta:{requiresAuth:!0}},{path:"/settings/profile",name:"ProfileSettings",component:()=>mn(()=>import("./ProfileSettingsView-DveGYmmu.js"),[]),meta:{requiresAuth:!0}}]});Qy.beforeEach(async(t,e,n)=>{t.meta.requiresAuth!==!1?(await pr.authStateReady(),pr.currentUser?n():n("/login")):n()});const xh=Fw(I1);xh.use($w());xh.use(Qy);xh.mount("#app");export{Qv as $,Ut as A,My as B,jt as C,Dn as D,eC as E,Ft as F,uo as G,V1 as H,ts as I,k1 as J,C1 as K,ot as L,M1 as M,F1 as N,kn as O,Ir as P,cc as Q,U1 as R,O1 as S,pr as T,B1 as U,j1 as V,x1 as W,L1 as X,$1 as Y,$C as Z,cg as _,Z as a,lw as a0,Ce as a1,Eu as a2,wu as a3,vC as a4,R1 as b,ke as c,ls as d,Lt as e,Ki as f,Mc as g,Au as h,nc as i,Qe as j,Er as k,_a as l,S1 as m,Et as n,ye as o,Ky as p,At as q,Bt as r,Vc as s,st as t,QT as u,P1 as v,N1 as w,Sc as x,zs as y,wn as z};
