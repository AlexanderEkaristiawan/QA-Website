const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/BugListView-DlBiaxEU.js","assets/useAI-uXZormgF.js","assets/TestCasesView-DRNVWXXa.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ru(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const De={},As=[],En=()=>{},nm=()=>!1,qa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Ha=t=>t.startsWith("onUpdate:"),dt=Object.assign,su=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},_v=Object.prototype.hasOwnProperty,Pe=(t,e)=>_v.call(t,e),ue=Array.isArray,bs=t=>so(t)==="[object Map]",Gs=t=>so(t)==="[object Set]",bf=t=>so(t)==="[object Date]",pe=t=>typeof t=="function",We=t=>typeof t=="string",Cn=t=>typeof t=="symbol",ke=t=>t!==null&&typeof t=="object",rm=t=>(ke(t)||pe(t))&&pe(t.then)&&pe(t.catch),sm=Object.prototype.toString,so=t=>sm.call(t),yv=t=>so(t).slice(8,-1),im=t=>so(t)==="[object Object]",iu=t=>We(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Si=ru(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ga=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},vv=/-\w/g,Nt=Ga(t=>t.replace(vv,e=>e.slice(1).toUpperCase())),Ev=/\B([A-Z])/g,Or=Ga(t=>t.replace(Ev,"-$1").toLowerCase()),Wa=Ga(t=>t.charAt(0).toUpperCase()+t.slice(1)),Gc=Ga(t=>t?`on${Wa(t)}`:""),yn=(t,e)=>!Object.is(t,e),Jo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},om=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},za=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Rf;const Ka=()=>Rf||(Rf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ou(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=We(r)?Av(r):ou(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(We(t)||ke(t))return t}const wv=/;(?![^(]*\))/g,Tv=/:([^]+)/,Iv=/\/\*[^]*?\*\//g;function Av(t){const e={};return t.replace(Iv,"").split(wv).forEach(n=>{if(n){const r=n.split(Tv);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Zt(t){let e="";if(We(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=Zt(t[n]);r&&(e+=r+" ")}else if(ke(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const bv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rv=ru(bv);function am(t){return!!t||t===""}function Sv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ws(t[r],e[r]);return n}function Ws(t,e){if(t===e)return!0;let n=bf(t),r=bf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Cn(t),r=Cn(e),n||r)return t===e;if(n=ue(t),r=ue(e),n||r)return n&&r?Sv(t,e):!1;if(n=ke(t),r=ke(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Ws(t[o],e[o]))return!1}}return String(t)===String(e)}function au(t,e){return t.findIndex(n=>Ws(n,e))}const cm=t=>!!(t&&t.__v_isRef===!0),lt=t=>We(t)?t:t==null?"":ue(t)||ke(t)&&(t.toString===sm||!pe(t.toString))?cm(t)?lt(t.value):JSON.stringify(t,lm,2):String(t),lm=(t,e)=>cm(e)?lm(t,e.value):bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Wc(r,i)+" =>"]=s,n),{})}:Gs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Wc(n))}:Cn(e)?Wc(e):ke(e)&&!ue(e)&&!im(e)?String(e):e,Wc=(t,e="")=>{var n;return Cn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ct;class um{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ct&&(ct.active?(this.parent=ct,this.index=(ct.scopes||(ct.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const r=this.effects.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}}run(e){if(this._active){const n=ct;try{return ct=this,e()}finally{ct=n}}}on(){++this._on===1&&(this.prevScope=ct,ct=this)}off(){if(this._on>0&&--this._on===0){if(ct===this)ct=this.prevScope;else{let e=ct;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Pv(t){return new um(t)}function Cv(){return ct}let Oe;const zc=new WeakSet;class hm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ct&&(ct.active?ct.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,zc.has(this)&&(zc.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||dm(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Sf(this),pm(this);const e=Oe,n=sn;Oe=this,sn=!0;try{return this.fn()}finally{mm(this),Oe=e,sn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)uu(e);this.deps=this.depsTail=void 0,Sf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?zc.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){gl(this)&&this.run()}get dirty(){return gl(this)}}let fm=0,Pi,Ci;function dm(t,e=!1){if(t.flags|=8,e){t.next=Ci,Ci=t;return}t.next=Pi,Pi=t}function cu(){fm++}function lu(){if(--fm>0)return;if(Ci){let e=Ci;for(Ci=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;Pi;){let e=Pi;for(Pi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function pm(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function mm(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),uu(r),kv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function gl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(gm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function gm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Bi)||(t.globalVersion=Bi,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!gl(t))))return;t.flags|=2;const e=t.dep,n=Oe,r=sn;Oe=t,sn=!0;try{pm(t);const s=t.fn(t._value);(e.version===0||yn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Oe=n,sn=r,mm(t),t.flags&=-3}}function uu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)uu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function kv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let sn=!0;const _m=[];function Wn(){_m.push(sn),sn=!1}function zn(){const t=_m.pop();sn=t===void 0?!0:t}function Sf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Oe;Oe=void 0;try{e()}finally{Oe=n}}}let Bi=0;class Nv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class hu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Oe||!sn||Oe===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Oe)n=this.activeLink=new Nv(Oe,this),Oe.deps?(n.prevDep=Oe.depsTail,Oe.depsTail.nextDep=n,Oe.depsTail=n):Oe.deps=Oe.depsTail=n,ym(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Oe.depsTail,n.nextDep=void 0,Oe.depsTail.nextDep=n,Oe.depsTail=n,Oe.deps===n&&(Oe.deps=r)}return n}trigger(e){this.version++,Bi++,this.notify(e)}notify(e){cu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{lu()}}}function ym(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)ym(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const _l=new WeakMap,Kr=Symbol(""),yl=Symbol(""),$i=Symbol("");function Et(t,e,n){if(sn&&Oe){let r=_l.get(t);r||_l.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new hu),s.map=r,s.key=n),s.track()}}function jn(t,e,n,r,s,i){const o=_l.get(t);if(!o){Bi++;return}const c=l=>{l&&l.trigger()};if(cu(),e==="clear")o.forEach(c);else{const l=ue(t),u=l&&iu(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===$i||!Cn(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get($i)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Kr)),bs(t)&&c(o.get(yl)));break;case"delete":l||(c(o.get(Kr)),bs(t)&&c(o.get(yl)));break;case"set":bs(t)&&c(o.get(Kr));break}}lu()}function ps(t){const e=Se(t);return e===t?e:(Et(e,"iterate",$i),en(t)?e:e.map(cn))}function Qa(t){return Et(t=Se(t),"iterate",$i),t}function gn(t,e){return Kn(t)?Ds(Qr(t)?cn(e):e):cn(e)}const Vv={__proto__:null,[Symbol.iterator](){return Kc(this,Symbol.iterator,t=>gn(this,t))},concat(...t){return ps(this).concat(...t.map(e=>ue(e)?ps(e):e))},entries(){return Kc(this,"entries",t=>(t[1]=gn(this,t[1]),t))},every(t,e){return xn(this,"every",t,e,void 0,arguments)},filter(t,e){return xn(this,"filter",t,e,n=>n.map(r=>gn(this,r)),arguments)},find(t,e){return xn(this,"find",t,e,n=>gn(this,n),arguments)},findIndex(t,e){return xn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return xn(this,"findLast",t,e,n=>gn(this,n),arguments)},findLastIndex(t,e){return xn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return xn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Qc(this,"includes",t)},indexOf(...t){return Qc(this,"indexOf",t)},join(t){return ps(this).join(t)},lastIndexOf(...t){return Qc(this,"lastIndexOf",t)},map(t,e){return xn(this,"map",t,e,void 0,arguments)},pop(){return mi(this,"pop")},push(...t){return mi(this,"push",t)},reduce(t,...e){return Pf(this,"reduce",t,e)},reduceRight(t,...e){return Pf(this,"reduceRight",t,e)},shift(){return mi(this,"shift")},some(t,e){return xn(this,"some",t,e,void 0,arguments)},splice(...t){return mi(this,"splice",t)},toReversed(){return ps(this).toReversed()},toSorted(t){return ps(this).toSorted(t)},toSpliced(...t){return ps(this).toSpliced(...t)},unshift(...t){return mi(this,"unshift",t)},values(){return Kc(this,"values",t=>gn(this,t))}};function Kc(t,e,n){const r=Qa(t),s=r[e]();return r!==t&&!en(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Dv=Array.prototype;function xn(t,e,n,r,s,i){const o=Qa(t),c=o!==t&&!en(t),l=o[e];if(l!==Dv[e]){const p=l.apply(t,i);return c?cn(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,gn(t,p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function Pf(t,e,n,r){const s=Qa(t),i=s!==t&&!en(t);let o=n,c=!1;s!==t&&(i?(c=r.length===0,o=function(u,f,p){return c&&(c=!1,u=gn(t,u)),n.call(this,u,gn(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const l=s[e](o,...r);return c?gn(t,l):l}function Qc(t,e,n){const r=Se(t);Et(r,"iterate",$i);const s=r[e](...n);return(s===-1||s===!1)&&pu(n[0])?(n[0]=Se(n[0]),r[e](...n)):s}function mi(t,e,n=[]){Wn(),cu();const r=Se(t)[e].apply(t,n);return lu(),zn(),r}const Ov=ru("__proto__,__v_isRef,__isVue"),vm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Cn));function xv(t){Cn(t)||(t=String(t));const e=Se(this);return Et(e,"has",t),e.hasOwnProperty(t)}class Em{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Gv:Am:i?Im:Tm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let l;if(o&&(l=Vv[n]))return l;if(n==="hasOwnProperty")return xv}const c=Reflect.get(e,n,Tt(e)?e:r);if((Cn(n)?vm.has(n):Ov(n))||(s||Et(e,"get",n),i))return c;if(Tt(c)){const l=o&&iu(n)?c:c.value;return s&&ke(l)?El(l):l}return ke(c)?s?El(c):Ja(c):c}}class wm extends Em{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ue(e)&&iu(n);if(!this._isShallow){const u=Kn(i);if(!en(r)&&!Kn(r)&&(i=Se(i),r=Se(r)),!o&&Tt(i)&&!Tt(r))return u||(i.value=r),!0}const c=o?Number(n)<e.length:Pe(e,n),l=Reflect.set(e,n,r,Tt(e)?e:s);return e===Se(s)&&l&&(c?yn(r,i)&&jn(e,"set",n,r):jn(e,"add",n,r)),l}deleteProperty(e,n){const r=Pe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&jn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Cn(n)||!vm.has(n))&&Et(e,"has",n),r}ownKeys(e){return Et(e,"iterate",ue(e)?"length":Kr),Reflect.ownKeys(e)}}class Mv extends Em{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Lv=new wm,Fv=new Mv,Uv=new wm(!0);const vl=t=>t,Bo=t=>Reflect.getPrototypeOf(t);function jv(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=bs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?vl:e?Ds:cn;return!e&&Et(i,"iterate",l?yl:Kr),dt(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function $o(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Bv(t,e){const n={get(s){const i=this.__v_raw,o=Se(i),c=Se(s);t||(yn(s,c)&&Et(o,"get",s),Et(o,"get",c));const{has:l}=Bo(o),u=e?vl:t?Ds:cn;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&Et(Se(s),"iterate",Kr),s.size},has(s){const i=this.__v_raw,o=Se(i),c=Se(s);return t||(yn(s,c)&&Et(o,"has",s),Et(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Se(c),u=e?vl:t?Ds:cn;return!t&&Et(l,"iterate",Kr),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return dt(n,t?{add:$o("add"),set:$o("set"),delete:$o("delete"),clear:$o("clear")}:{add(s){const i=Se(this),o=Bo(i),c=Se(s),l=!e&&!en(s)&&!Kn(s)?c:s;return o.has.call(i,l)||yn(s,l)&&o.has.call(i,s)||yn(c,l)&&o.has.call(i,c)||(i.add(l),jn(i,"add",l,l)),this},set(s,i){!e&&!en(i)&&!Kn(i)&&(i=Se(i));const o=Se(this),{has:c,get:l}=Bo(o);let u=c.call(o,s);u||(s=Se(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?yn(i,f)&&jn(o,"set",s,i):jn(o,"add",s,i),this},delete(s){const i=Se(this),{has:o,get:c}=Bo(i);let l=o.call(i,s);l||(s=Se(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&jn(i,"delete",s,void 0),u},clear(){const s=Se(this),i=s.size!==0,o=s.clear();return i&&jn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=jv(s,t,e)}),n}function fu(t,e){const n=Bv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Pe(n,s)&&s in r?n:r,s,i)}const $v={get:fu(!1,!1)},qv={get:fu(!1,!0)},Hv={get:fu(!0,!1)};const Tm=new WeakMap,Im=new WeakMap,Am=new WeakMap,Gv=new WeakMap;function Wv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ja(t){return Kn(t)?t:du(t,!1,Lv,$v,Tm)}function bm(t){return du(t,!1,Uv,qv,Im)}function El(t){return du(t,!0,Fv,Hv,Am)}function du(t,e,n,r,s){if(!ke(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=Wv(yv(t));if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Qr(t){return Kn(t)?Qr(t.__v_raw):!!(t&&t.__v_isReactive)}function Kn(t){return!!(t&&t.__v_isReadonly)}function en(t){return!!(t&&t.__v_isShallow)}function pu(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function Rm(t){return!Pe(t,"__v_skip")&&Object.isExtensible(t)&&om(t,"__v_skip",!0),t}const cn=t=>ke(t)?Ja(t):t,Ds=t=>ke(t)?El(t):t;function Tt(t){return t?t.__v_isRef===!0:!1}function on(t){return Sm(t,!1)}function zv(t){return Sm(t,!0)}function Sm(t,e){return Tt(t)?t:new Kv(t,e)}class Kv{constructor(e,n){this.dep=new hu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Se(e),this._value=n?e:cn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||en(e)||Kn(e);e=r?e:Se(e),yn(e,n)&&(this._rawValue=e,this._value=r?e:cn(e),this.dep.trigger())}}function ht(t){return Tt(t)?t.value:t}const Qv={get:(t,e,n)=>e==="__v_raw"?t:ht(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Tt(s)&&!Tt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Pm(t){return Qr(t)?t:new Proxy(t,Qv)}class Jv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new hu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Bi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Oe!==this)return dm(this,!0),!0}get value(){const e=this.dep.track();return gm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Yv(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new Jv(r,s,n)}const qo={},ua=new WeakMap;let Hr;function Xv(t,e=!1,n=Hr){if(n){let r=ua.get(n);r||ua.set(n,r=[]),r.push(t)}}function Zv(t,e,n=De){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=L=>s?L:en(L)||s===!1||s===0?Bn(L,1):Bn(L);let f,p,m,_,S=!1,k=!1;if(Tt(t)?(p=()=>t.value,S=en(t)):Qr(t)?(p=()=>u(t),S=!0):ue(t)?(k=!0,S=t.some(L=>Qr(L)||en(L)),p=()=>t.map(L=>{if(Tt(L))return L.value;if(Qr(L))return u(L);if(pe(L))return l?l(L,2):L()})):pe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Wn();try{m()}finally{zn()}}const L=Hr;Hr=f;try{return l?l(t,3,[_]):t(_)}finally{Hr=L}}:p=En,e&&s){const L=p,Z=s===!0?1/0:s;p=()=>Bn(L(),Z)}const V=Cv(),q=()=>{f.stop(),V&&V.active&&su(V.effects,f)};if(i&&e){const L=e;e=(...Z)=>{const fe=L(...Z);return q(),fe}}let U=k?new Array(t.length).fill(qo):qo;const B=L=>{if(!(!(f.flags&1)||!f.dirty&&!L))if(e){const Z=f.run();if(L||s||S||(k?Z.some((fe,I)=>yn(fe,U[I])):yn(Z,U))){m&&m();const fe=Hr;Hr=f;try{const I=[Z,U===qo?void 0:k&&U[0]===qo?[]:U,_];U=Z,l?l(e,3,I):e(...I)}finally{Hr=fe}}}else f.run()};return c&&c(B),f=new hm(p),f.scheduler=o?()=>o(B,!1):B,_=L=>Xv(L,!1,f),m=f.onStop=()=>{const L=ua.get(f);if(L){if(l)l(L,4);else for(const Z of L)Z();ua.delete(f)}},e?r?B(!0):U=f.run():o?o(B.bind(null,!0),!0):f.run(),q.pause=f.pause.bind(f),q.resume=f.resume.bind(f),q.stop=q,q}function Bn(t,e=1/0,n){if(e<=0||!ke(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Tt(t))Bn(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)Bn(t[r],e,n);else if(Gs(t)||bs(t))t.forEach(r=>{Bn(r,e,n)});else if(im(t)){for(const r in t)Bn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Bn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function io(t,e,n,r){try{return r?t(...r):t()}catch(s){Ya(s,e,n)}}function ln(t,e,n,r){if(pe(t)){const s=io(t,e,n,r);return s&&rm(s)&&s.catch(i=>{Ya(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(ln(t[i],e,n,r));return s}}function Ya(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||De;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){Wn(),io(i,null,10,[t,l,u]),zn();return}}eE(t,n,s,r,o)}function eE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const Pt=[];let pn=-1;const Rs=[];let hr=null,ms=0;const Cm=Promise.resolve();let ha=null;function mu(t){const e=ha||Cm;return t?e.then(this?t.bind(this):t):e}function tE(t){let e=pn+1,n=Pt.length;for(;e<n;){const r=e+n>>>1,s=Pt[r],i=qi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function gu(t){if(!(t.flags&1)){const e=qi(t),n=Pt[Pt.length-1];!n||!(t.flags&2)&&e>=qi(n)?Pt.push(t):Pt.splice(tE(e),0,t),t.flags|=1,km()}}function km(){ha||(ha=Cm.then(Vm))}function nE(t){ue(t)?Rs.push(...t):hr&&t.id===-1?hr.splice(ms+1,0,t):t.flags&1||(Rs.push(t),t.flags|=1),km()}function Cf(t,e,n=pn+1){for(;n<Pt.length;n++){const r=Pt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;Pt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Nm(t){if(Rs.length){const e=[...new Set(Rs)].sort((n,r)=>qi(n)-qi(r));if(Rs.length=0,hr){hr.push(...e);return}for(hr=e,ms=0;ms<hr.length;ms++){const n=hr[ms];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}hr=null,ms=0}}const qi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Vm(t){try{for(pn=0;pn<Pt.length;pn++){const e=Pt[pn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),io(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;pn<Pt.length;pn++){const e=Pt[pn];e&&(e.flags&=-2)}pn=-1,Pt.length=0,Nm(),ha=null,(Pt.length||Rs.length)&&Vm()}}let Ht=null,Dm=null;function fa(t){const e=Ht;return Ht=t,Dm=t&&t.type.__scopeId||null,e}function oo(t,e=Ht,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ma(-1);const i=fa(e),o=Jr.length;let c;try{c=t(...s)}finally{for(let l=Jr.length;l>o;l--)ng();fa(i),r._d&&ma(1)}return c};return r._n=!0,r._c=!0,r._d=!0,r}function E1(t,e){if(Ht===null)return t;const n=tc(Ht),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=De]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Bn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function $r(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Wn(),ln(l,n,8,[t.el,c,t,e]),zn())}}function Yo(t,e){if(wt){let n=wt.provides;const r=wt.parent&&wt.parent.provides;r===n&&(n=wt.provides=Object.create(r)),n[t]=e}}function an(t,e,n=!1){const r=ew();if(r||Ps){let s=Ps?Ps._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}const rE=Symbol.for("v-scx"),sE=()=>an(rE);function Ss(t,e,n){return Om(t,e,n)}function Om(t,e,n=De){const{immediate:r,deep:s,flush:i,once:o}=n,c=dt({},n),l=e&&r||!e&&i!=="post";let u;if(Gi){if(i==="sync"){const _=sE();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=En,_.resume=En,_.pause=En,_}}const f=wt;c.call=(_,S,k)=>ln(_,f,S,k);let p=!1;i==="post"?c.scheduler=_=>{Dt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,S)=>{S?_():gu(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=Zv(t,e,c);return Gi&&(u?u.push(m):l&&m()),m}function iE(t,e,n){const r=this.proxy,s=We(t)?t.includes(".")?xm(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=co(this),c=Om(s,i.bind(r),n);return o(),c}function xm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const oE=Symbol("_vte"),aE=t=>t.__isTeleport,Jc=Symbol("_leaveCb");function _u(t,e){t.shapeFlag&6&&t.component?(t.transition=e,_u(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ss(t,e){return pe(t)?dt({name:t.name},e,{setup:t}):t}function Mm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function kf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const da=new WeakMap;function ki(t,e,n,r,s=!1){if(ue(t)){t.forEach((k,V)=>ki(k,e&&(ue(e)?e[V]:e),n,r,s));return}if(Ni(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ki(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?tc(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===De?c.refs={}:c.refs,p=c.setupState,m=Se(p),_=p===De?nm:k=>kf(f,k)?!1:Pe(m,k),S=(k,V)=>!(V&&kf(f,V));if(u!=null&&u!==l){if(Nf(e),We(u))f[u]=null,_(u)&&(p[u]=null);else if(Tt(u)){const k=e;S(u,k.k)&&(u.value=null),k.k&&(f[k.k]=null)}}if(pe(l))io(l,c,12,[o,f]);else{const k=We(l),V=Tt(l);if(k||V){const q=()=>{if(t.f){const U=k?_(l)?p[l]:f[l]:S()||!t.k?l.value:f[t.k];if(s)ue(U)&&su(U,i);else if(ue(U))U.includes(i)||U.push(i);else if(k)f[l]=[i],_(l)&&(p[l]=f[l]);else{const B=[i];S(l,t.k)&&(l.value=B),t.k&&(f[t.k]=B)}}else k?(f[l]=o,_(l)&&(p[l]=o)):V&&(S(l,t.k)&&(l.value=o),t.k&&(f[t.k]=o))};if(o){const U=()=>{q(),da.delete(t)};U.id=-1,da.set(t,U),Dt(U,n)}else Nf(t),q()}}}function Nf(t){const e=da.get(t);e&&(e.flags|=8,da.delete(t))}Ka().requestIdleCallback;Ka().cancelIdleCallback;const Ni=t=>!!t.type.__asyncLoader,Lm=t=>t.type.__isKeepAlive;function cE(t,e){Fm(t,"a",e)}function lE(t,e){Fm(t,"da",e)}function Fm(t,e,n=wt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Xa(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Lm(s.parent.vnode)&&uE(r,e,n,s),s=s.parent}}function uE(t,e,n,r){const s=Xa(e,t,r,!0);vu(()=>{su(r[e],s)},n)}function Xa(t,e,n=wt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Wn();const c=co(n),l=ln(e,n,t,o);return c(),zn(),l});return r?s.unshift(i):s.push(i),i}}const er=t=>(e,n=wt)=>{(!Gi||t==="sp")&&Xa(t,(...r)=>e(...r),n)},hE=er("bm"),yu=er("m"),fE=er("bu"),dE=er("u"),pE=er("bum"),vu=er("um"),mE=er("sp"),gE=er("rtg"),_E=er("rtc");function yE(t,e=wt){Xa("ec",t,e)}const vE="components";function ao(t,e){return wE(vE,t,!0,e)||t}const EE=Symbol.for("v-ndc");function wE(t,e,n=!0,r=!1){const s=Ht||wt;if(s){const i=s.type;{const c=iw(i,!1);if(c&&(c===e||c===Nt(e)||c===Wa(Nt(e))))return i}const o=Vf(s[t]||i[t],e)||Vf(s.appContext[t],e);return!o&&r?i:o}}function Vf(t,e){return t&&(t[e]||t[Nt(e)]||t[Wa(Nt(e))])}function Eu(t,e,n,r){let s;const i=n,o=ue(t);if(o||We(t)){const c=o&&Qr(t);let l=!1,u=!1;c&&(l=!en(t),u=Kn(t),t=Qa(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?Ds(cn(t[f])):cn(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(ke(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const wl=t=>t?ig(t)?tc(t):wl(t.parent):null,Vi=dt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>wl(t.parent),$root:t=>wl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>jm(t),$forceUpdate:t=>t.f||(t.f=()=>{gu(t.update)}),$nextTick:t=>t.n||(t.n=mu.bind(t.proxy)),$watch:t=>iE.bind(t)}),Yc=(t,e)=>t!==De&&!t.__isScriptSetup&&Pe(t,e),TE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Yc(r,e))return o[e]=1,r[e];if(s!==De&&Pe(s,e))return o[e]=2,s[e];if(Pe(i,e))return o[e]=3,i[e];if(n!==De&&Pe(n,e))return o[e]=4,n[e];Tl&&(o[e]=0)}}const u=Vi[e];let f,p;if(u)return e==="$attrs"&&Et(t.attrs,"get",""),u(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==De&&Pe(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Pe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Yc(s,e)?(s[e]=n,!0):r!==De&&Pe(r,e)?(r[e]=n,!0):Pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==De&&c[0]!=="$"&&Pe(t,c)||Yc(e,c)||Pe(i,c)||Pe(r,c)||Pe(Vi,c)||Pe(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Df(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Tl=!0;function IE(t){const e=jm(t),n=t.proxy,r=t.ctx;Tl=!1,e.beforeCreate&&Of(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:S,activated:k,deactivated:V,beforeDestroy:q,beforeUnmount:U,destroyed:B,unmounted:L,render:Z,renderTracked:fe,renderTriggered:I,errorCaptured:v,serverPrefetch:E,expose:A,inheritAttrs:b,components:P,directives:w,filters:At}=e;if(u&&AE(u,r,null),o)for(const we in o){const ye=o[we];pe(ye)&&(r[we]=ye.bind(n))}if(s){const we=s.call(n,n);ke(we)&&(t.data=Ja(we))}if(Tl=!0,i)for(const we in i){const ye=i[we],Ft=pe(ye)?ye.bind(n,n):pe(ye.get)?ye.get.bind(n,n):En,tn=!pe(ye)&&pe(ye.set)?ye.set.bind(n):En,Qt=Ct({get:Ft,set:tn});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>Qt.value,set:Fe=>Qt.value=Fe})}if(c)for(const we in c)Um(c[we],r,n,we);if(l){const we=pe(l)?l.call(n):l;Reflect.ownKeys(we).forEach(ye=>{Yo(ye,we[ye])})}f&&Of(f,t,"c");function Qe(we,ye){ue(ye)?ye.forEach(Ft=>we(Ft.bind(n))):ye&&we(ye.bind(n))}if(Qe(hE,p),Qe(yu,m),Qe(fE,_),Qe(dE,S),Qe(cE,k),Qe(lE,V),Qe(yE,v),Qe(_E,fe),Qe(gE,I),Qe(pE,U),Qe(vu,L),Qe(mE,E),ue(A))if(A.length){const we=t.exposed||(t.exposed={});A.forEach(ye=>{Object.defineProperty(we,ye,{get:()=>n[ye],set:Ft=>n[ye]=Ft,enumerable:!0})})}else t.exposed||(t.exposed={});Z&&t.render===En&&(t.render=Z),b!=null&&(t.inheritAttrs=b),P&&(t.components=P),w&&(t.directives=w),E&&Mm(t)}function AE(t,e,n=En){ue(t)&&(t=Il(t));for(const r in t){const s=t[r];let i;ke(s)?"default"in s?i=an(s.from||r,s.default,!0):i=an(s.from||r):i=an(s),Tt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Of(t,e,n){ln(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Um(t,e,n,r){let s=r.includes(".")?xm(n,r):()=>n[r];if(We(t)){const i=e[t];pe(i)&&Ss(s,i)}else if(pe(t))Ss(s,t.bind(n));else if(ke(t))if(ue(t))t.forEach(i=>Um(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Ss(s,i,t)}}function jm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>pa(l,u,o,!0)),pa(l,e,o)),ke(e)&&i.set(e,l),l}function pa(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&pa(t,i,n,!0),s&&s.forEach(o=>pa(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=bE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const bE={data:xf,props:Mf,emits:Mf,methods:Ei,computed:Ei,beforeCreate:Rt,created:Rt,beforeMount:Rt,mounted:Rt,beforeUpdate:Rt,updated:Rt,beforeDestroy:Rt,beforeUnmount:Rt,destroyed:Rt,unmounted:Rt,activated:Rt,deactivated:Rt,errorCaptured:Rt,serverPrefetch:Rt,components:Ei,directives:Ei,watch:SE,provide:xf,inject:RE};function xf(t,e){return e?t?function(){return dt(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function RE(t,e){return Ei(Il(t),Il(e))}function Il(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Rt(t,e){return t?[...new Set([].concat(t,e))]:e}function Ei(t,e){return t?dt(Object.create(null),t,e):e}function Mf(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:dt(Object.create(null),Df(t),Df(e??{})):e}function SE(t,e){if(!t)return e;if(!e)return t;const n=dt(Object.create(null),t);for(const r in e)n[r]=Rt(t[r],e[r]);return n}function Bm(){return{app:null,config:{isNativeTag:nm,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let PE=0;function CE(t,e){return function(r,s=null){pe(r)||(r=dt({},r)),s!=null&&!ke(s)&&(s=null);const i=Bm(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:PE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:aw,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(u,...p)):pe(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const _=u._ceVNode||Ke(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),l=!0,u._container=f,f.__vue_app__=u,tc(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(ln(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Ps;Ps=u;try{return f()}finally{Ps=p}}};return u}}let Ps=null;const kE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Nt(e)}Modifiers`]||t[`${Or(e)}Modifiers`];function NE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||De;let s=n;const i=e.startsWith("update:"),o=i&&kE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>We(f)?f.trim():f)),o.number&&(s=n.map(za)));let c,l=r[c=Gc(e)]||r[c=Gc(Nt(e))];!l&&i&&(l=r[c=Gc(Or(e))]),l&&ln(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,ln(u,t,6,s)}}const VE=new WeakMap;function $m(t,e,n=!1){const r=n?VE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!pe(t)){const l=u=>{const f=$m(u,e,!0);f&&(c=!0,dt(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(ke(t)&&r.set(t,null),null):(ue(i)?i.forEach(l=>o[l]=null):dt(o,i),ke(t)&&r.set(t,o),o)}function Za(t,e){return!t||!qa(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,Or(e))||Pe(t,e))}function Lf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:_,ctx:S,inheritAttrs:k}=t,V=fa(t);let q,U;try{if(n.shapeFlag&4){const L=s||r,Z=L;q=_n(u.call(Z,L,f,p,_,m,S)),U=c}else{const L=e;q=_n(L.length>1?L(p,{attrs:c,slots:o,emit:l}):L(p,null)),U=e.props?c:DE(c)}}catch(L){Jr.length=0,Ya(L,t,1),q=Ke(br)}let B=q;if(U&&k!==!1){const L=Object.keys(U),{shapeFlag:Z}=B;L.length&&Z&7&&(i&&L.some(Ha)&&(U=OE(U,i)),B=Os(B,U,!1,!0))}return n.dirs&&(B=Os(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&_u(B,n.transition),q=B,fa(V),q}const DE=t=>{let e;for(const n in t)(n==="class"||n==="style"||qa(n))&&((e||(e={}))[n]=t[n]);return e},OE=(t,e)=>{const n={};for(const r in t)(!Ha(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function xE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ff(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(qm(o,r,m)&&!Za(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?Ff(r,o,u):!0:!!o;return!1}function Ff(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(qm(e,t,i)&&!Za(n,i))return!0}return!1}function qm(t,e,n){const r=t[n],s=e[n];return n==="style"&&ke(r)&&ke(s)?!Ws(r,s):r!==s}function ME({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const Hm={},Gm=()=>Object.create(Hm),Wm=t=>Object.getPrototypeOf(t)===Hm;function LE(t,e,n,r=!1){const s={},i=Gm();t.propsDefaults=Object.create(null),zm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:bm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function FE(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Se(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Za(t.emitsOptions,m))continue;const _=e[m];if(l)if(Pe(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const S=Nt(m);s[S]=Al(l,c,S,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{zm(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!Pe(e,p)&&((f=Or(p))===p||!Pe(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=Al(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Pe(e,p))&&(delete i[p],u=!0)}u&&jn(t.attrs,"set","")}function zm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Si(l))continue;const u=e[l];let f;s&&Pe(s,f=Nt(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Za(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Se(n),u=c||De;for(let f=0;f<i.length;f++){const p=i[f];n[p]=Al(s,l,p,u[p],t,!Pe(u,p))}}return o}function Al(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Pe(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=co(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Or(n))&&(r=!0))}return r}const UE=new WeakMap;function Km(t,e,n=!1){const r=n?UE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!pe(t)){const f=p=>{l=!0;const[m,_]=Km(p,e,!0);dt(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return ke(t)&&r.set(t,As),As;if(ue(i))for(let f=0;f<i.length;f++){const p=Nt(i[f]);Uf(p)&&(o[p]=De)}else if(i)for(const f in i){const p=Nt(f);if(Uf(p)){const m=i[f],_=o[p]=ue(m)||pe(m)?{type:m}:dt({},m),S=_.type;let k=!1,V=!0;if(ue(S))for(let q=0;q<S.length;++q){const U=S[q],B=pe(U)&&U.name;if(B==="Boolean"){k=!0;break}else B==="String"&&(V=!1)}else k=pe(S)&&S.name==="Boolean";_[0]=k,_[1]=V,(k||Pe(_,"default"))&&c.push(p)}}const u=[o,c];return ke(t)&&r.set(t,u),u}function Uf(t){return t[0]!=="$"&&!Si(t)}const wu=t=>t==="_"||t==="_ctx"||t==="$stable",Tu=t=>ue(t)?t.map(_n):[_n(t)],jE=(t,e,n)=>{if(e._n)return e;const r=oo((...s)=>Tu(e(...s)),n);return r._c=!1,r},Qm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(wu(s))continue;const i=t[s];if(pe(i))e[s]=jE(s,i,r);else if(i!=null){const o=Tu(i);e[s]=()=>o}}},Jm=(t,e)=>{const n=Tu(e);t.slots.default=()=>n},Ym=(t,e,n)=>{for(const r in e)(n||!wu(r))&&(t[r]=e[r])},BE=(t,e,n)=>{const r=t.slots=Gm();if(t.vnode.shapeFlag&32){const s=e._;s?(Ym(r,e,n),n&&om(r,"_",s,!0)):Qm(e,r)}else e&&Jm(t,e)},$E=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=De;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Ym(s,e,n):(i=!e.$stable,Qm(e,s)),o=e}else e&&(Jm(t,e),o={default:1});if(i)for(const c in s)!wu(c)&&o[c]==null&&delete s[c]},Dt=zE;function qE(t){return HE(t)}function HE(t,e){const n=Ka();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=En,insertStaticContent:S}=t,k=(y,T,R,O=null,j=null,x=null,K=void 0,G=null,H=!!T.dynamicChildren)=>{if(y===T)return;y&&!gi(y,T)&&(O=M(y),Fe(y,j,x,!0),y=null),T.patchFlag===-2&&(H=!1,T.dynamicChildren=null);const{type:$,ref:ie,shapeFlag:J}=T;switch($){case ec:V(y,T,R,O);break;case br:q(y,T,R,O);break;case Xo:y==null&&U(T,R,O,K);break;case Bt:P(y,T,R,O,j,x,K,G,H);break;default:J&1?Z(y,T,R,O,j,x,K,G,H):J&6?w(y,T,R,O,j,x,K,G,H):(J&64||J&128)&&$.process(y,T,R,O,j,x,K,G,H,ee)}ie!=null&&j?ki(ie,y&&y.ref,x,T||y,!T):ie==null&&y&&y.ref!=null&&ki(y.ref,null,x,y,!0)},V=(y,T,R,O)=>{if(y==null)r(T.el=c(T.children),R,O);else{const j=T.el=y.el;T.children!==y.children&&u(j,T.children)}},q=(y,T,R,O)=>{y==null?r(T.el=l(T.children||""),R,O):T.el=y.el},U=(y,T,R,O)=>{[y.el,y.anchor]=S(y.children,T,R,O,y.el,y.anchor)},B=({el:y,anchor:T},R,O)=>{let j;for(;y&&y!==T;)j=m(y),r(y,R,O),y=j;r(T,R,O)},L=({el:y,anchor:T})=>{let R;for(;y&&y!==T;)R=m(y),s(y),y=R;s(T)},Z=(y,T,R,O,j,x,K,G,H)=>{if(T.type==="svg"?K="svg":T.type==="math"&&(K="mathml"),y==null)fe(T,R,O,j,x,K,G,H);else{const $=y.el&&y.el._isVueCE?y.el:null;try{$&&$._beginPatch(),E(y,T,j,x,K,G,H)}finally{$&&$._endPatch()}}},fe=(y,T,R,O,j,x,K,G)=>{let H,$;const{props:ie,shapeFlag:J,transition:ne,dirs:ae}=y;if(H=y.el=o(y.type,x,ie&&ie.is,ie),J&8?f(H,y.children):J&16&&v(y.children,H,null,O,j,Xc(y,x),K,G),ae&&$r(y,null,O,"created"),I(H,y,y.scopeId,K,O),ie){for(const de in ie)de!=="value"&&!Si(de)&&i(H,de,null,ie[de],x,O);"value"in ie&&i(H,"value",null,ie.value,x),($=ie.onVnodeBeforeMount)&&dn($,O,y)}ae&&$r(y,null,O,"beforeMount");const oe=GE(j,ne);oe&&ne.beforeEnter(H),r(H,T,R),(($=ie&&ie.onVnodeMounted)||oe||ae)&&Dt(()=>{try{$&&dn($,O,y),oe&&ne.enter(H),ae&&$r(y,null,O,"mounted")}finally{}},j)},I=(y,T,R,O,j)=>{if(R&&_(y,R),O)for(let x=0;x<O.length;x++)_(y,O[x]);if(j){let x=j.subTree;if(T===x||tg(x.type)&&(x.ssContent===T||x.ssFallback===T)){const K=j.vnode;I(y,K,K.scopeId,K.slotScopeIds,j.parent)}}},v=(y,T,R,O,j,x,K,G,H=0)=>{for(let $=H;$<y.length;$++){const ie=y[$]=G?Un(y[$]):_n(y[$]);k(null,ie,T,R,O,j,x,K,G)}},E=(y,T,R,O,j,x,K)=>{const G=T.el=y.el;let{patchFlag:H,dynamicChildren:$,dirs:ie}=T;H|=y.patchFlag&16;const J=y.props||De,ne=T.props||De;let ae;if(R&&qr(R,!1),(ae=ne.onVnodeBeforeUpdate)&&dn(ae,R,T,y),ie&&$r(T,y,R,"beforeUpdate"),R&&qr(R,!0),$&&(!y.dynamicChildren||y.dynamicChildren.length!==$.length)&&(H=0,K=!1,$=null),(J.innerHTML&&ne.innerHTML==null||J.textContent&&ne.textContent==null)&&f(G,""),$?A(y.dynamicChildren,$,G,R,O,Xc(T,j),x):K||ye(y,T,G,null,R,O,Xc(T,j),x,!1),H>0){if(H&16)b(G,J,ne,R,j);else if(H&2&&J.class!==ne.class&&i(G,"class",null,ne.class,j),H&4&&i(G,"style",J.style,ne.style,j),H&8){const oe=T.dynamicProps;for(let de=0;de<oe.length;de++){const Ae=oe[de],je=J[Ae],Je=ne[Ae];(Je!==je||Ae==="value")&&i(G,Ae,je,Je,j,R)}}H&1&&y.children!==T.children&&f(G,T.children)}else!K&&$==null&&b(G,J,ne,R,j);((ae=ne.onVnodeUpdated)||ie)&&Dt(()=>{ae&&dn(ae,R,T,y),ie&&$r(T,y,R,"updated")},O)},A=(y,T,R,O,j,x,K)=>{for(let G=0;G<T.length;G++){const H=y[G],$=T[G],ie=H.el&&(H.type===Bt||!gi(H,$)||H.shapeFlag&198)?p(H.el):R;k(H,$,ie,null,O,j,x,K,!0)}},b=(y,T,R,O,j)=>{if(T!==R){if(T!==De)for(const x in T)!Si(x)&&!(x in R)&&i(y,x,T[x],null,j,O);for(const x in R){if(Si(x))continue;const K=R[x],G=T[x];K!==G&&x!=="value"&&i(y,x,G,K,j,O)}"value"in R&&i(y,"value",T.value,R.value,j)}},P=(y,T,R,O,j,x,K,G,H)=>{const $=T.el=y?y.el:c(""),ie=T.anchor=y?y.anchor:c("");let{patchFlag:J,dynamicChildren:ne,slotScopeIds:ae}=T;ae&&(G=G?G.concat(ae):ae),y==null?(r($,R,O),r(ie,R,O),v(T.children||[],R,ie,j,x,K,G,H)):J>0&&J&64&&ne&&y.dynamicChildren&&y.dynamicChildren.length===ne.length?(A(y.dynamicChildren,ne,R,j,x,K,G),(T.key!=null||j&&T===j.subTree)&&Xm(y,T,!0)):ye(y,T,R,ie,j,x,K,G,H)},w=(y,T,R,O,j,x,K,G,H)=>{T.slotScopeIds=G,y==null?T.shapeFlag&512?j.ctx.activate(T,R,O,K,H):At(T,R,O,j,x,K,H):Kt(y,T,H)},At=(y,T,R,O,j,x,K)=>{const G=y.component=ZE(y,O,j);if(Lm(y)&&(G.ctx.renderer=ee),tw(G,!1,K),G.asyncDep){if(j&&j.registerDep(G,Qe,K),!y.el){const H=G.subTree=Ke(br);q(null,H,T,R),y.placeholder=H.el}}else Qe(G,y,T,R,j,x,K)},Kt=(y,T,R)=>{const O=T.component=y.component;if(xE(y,T,R))if(O.asyncDep&&!O.asyncResolved){we(O,T,R);return}else O.next=T,O.update();else T.el=y.el,O.vnode=T},Qe=(y,T,R,O,j,x,K)=>{const G=()=>{if(y.isMounted){let{next:J,bu:ne,u:ae,parent:oe,vnode:de}=y;{const mt=Zm(y);if(mt){J&&(J.el=de.el,we(y,J,K)),mt.asyncDep.then(()=>{Dt(()=>{y.isUnmounted||$()},j)});return}}let Ae=J,je;qr(y,!1),J?(J.el=de.el,we(y,J,K)):J=de,ne&&Jo(ne),(je=J.props&&J.props.onVnodeBeforeUpdate)&&dn(je,oe,J,de),qr(y,!0);const Je=Lf(y),Jt=y.subTree;y.subTree=Je,k(Jt,Je,p(Jt.el),M(Jt),y,j,x),J.el=Je.el,Ae===null&&ME(y,Je.el),ae&&Dt(ae,j),(je=J.props&&J.props.onVnodeUpdated)&&Dt(()=>dn(je,oe,J,de),j)}else{let J;const{el:ne,props:ae}=T,{bm:oe,m:de,parent:Ae,root:je,type:Je}=y,Jt=Ni(T);qr(y,!1),oe&&Jo(oe),!Jt&&(J=ae&&ae.onVnodeBeforeMount)&&dn(J,Ae,T),qr(y,!0);{je.ce&&je.ce._hasShadowRoot()&&je.ce._injectChildStyle(Je,y.parent?y.parent.type:void 0);const mt=y.subTree=Lf(y);k(null,mt,R,O,y,j,x),T.el=mt.el}if(de&&Dt(de,j),!Jt&&(J=ae&&ae.onVnodeMounted)){const mt=T;Dt(()=>dn(J,Ae,mt),j)}(T.shapeFlag&256||Ae&&Ni(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&y.a&&Dt(y.a,j),y.isMounted=!0,T=R=O=null}};y.scope.on();const H=y.effect=new hm(G);y.scope.off();const $=y.update=H.run.bind(H),ie=y.job=H.runIfDirty.bind(H);ie.i=y,ie.id=y.uid,H.scheduler=()=>gu(ie),qr(y,!0),$()},we=(y,T,R)=>{T.component=y;const O=y.vnode.props;y.vnode=T,y.next=null,FE(y,T.props,O,R),$E(y,T.children,R),Wn(),Cf(y),zn()},ye=(y,T,R,O,j,x,K,G,H=!1)=>{const $=y&&y.children,ie=y?y.shapeFlag:0,J=T.children,{patchFlag:ne,shapeFlag:ae}=T;if(ne>0){if(ne&128){tn($,J,R,O,j,x,K,G,H);return}else if(ne&256){Ft($,J,R,O,j,x,K,G,H);return}}ae&8?(ie&16&&Vt($,j,x),J!==$&&f(R,J)):ie&16?ae&16?tn($,J,R,O,j,x,K,G,H):Vt($,j,x,!0):(ie&8&&f(R,""),ae&16&&v(J,R,O,j,x,K,G,H))},Ft=(y,T,R,O,j,x,K,G,H)=>{y=y||As,T=T||As;const $=y.length,ie=T.length,J=Math.min($,ie);let ne;for(ne=0;ne<J;ne++){const ae=T[ne]=H?Un(T[ne]):_n(T[ne]);k(y[ne],ae,R,null,j,x,K,G,H)}$>ie?Vt(y,j,x,!0,!1,J):v(T,R,O,j,x,K,G,H,J)},tn=(y,T,R,O,j,x,K,G,H)=>{let $=0;const ie=T.length;let J=y.length-1,ne=ie-1;for(;$<=J&&$<=ne;){const ae=y[$],oe=T[$]=H?Un(T[$]):_n(T[$]);if(gi(ae,oe))k(ae,oe,R,null,j,x,K,G,H);else break;$++}for(;$<=J&&$<=ne;){const ae=y[J],oe=T[ne]=H?Un(T[ne]):_n(T[ne]);if(gi(ae,oe))k(ae,oe,R,null,j,x,K,G,H);else break;J--,ne--}if($>J){if($<=ne){const ae=ne+1,oe=ae<ie?T[ae].el:O;for(;$<=ne;)k(null,T[$]=H?Un(T[$]):_n(T[$]),R,oe,j,x,K,G,H),$++}}else if($>ne)for(;$<=J;)Fe(y[$],j,x,!0),$++;else{const ae=$,oe=$,de=new Map;for($=oe;$<=ne;$++){const ot=T[$]=H?Un(T[$]):_n(T[$]);ot.key!=null&&de.set(ot.key,$)}let Ae,je=0;const Je=ne-oe+1;let Jt=!1,mt=0;const ir=new Array(Je);for($=0;$<Je;$++)ir[$]=0;for($=ae;$<=J;$++){const ot=y[$];if(je>=Je){Fe(ot,j,x,!0);continue}let Yt;if(ot.key!=null)Yt=de.get(ot.key);else for(Ae=oe;Ae<=ne;Ae++)if(ir[Ae-oe]===0&&gi(ot,T[Ae])){Yt=Ae;break}Yt===void 0?Fe(ot,j,x,!0):(ir[Yt-oe]=$+1,Yt>=mt?mt=Yt:Jt=!0,k(ot,T[Yt],R,null,j,x,K,G,H),je++)}const ni=Jt?WE(ir):As;for(Ae=ni.length-1,$=Je-1;$>=0;$--){const ot=oe+$,Yt=T[ot],bo=T[ot+1],ls=ot+1<ie?bo.el||eg(bo):O;ir[$]===0?k(null,Yt,R,ls,j,x,K,G,H):Jt&&(Ae<0||$!==ni[Ae]?Qt(Yt,R,ls,2):Ae--)}}},Qt=(y,T,R,O,j=null)=>{const{el:x,type:K,transition:G,children:H,shapeFlag:$}=y;if($&6){Qt(y.component.subTree,T,R,O);return}if($&128){y.suspense.move(T,R,O);return}if($&64){K.move(y,T,R,ee);return}if(K===Bt){r(x,T,R);for(let J=0;J<H.length;J++)Qt(H[J],T,R,O);r(y.anchor,T,R);return}if(K===Xo){B(y,T,R);return}if(O!==2&&$&1&&G)if(O===0)G.persisted&&!x[Jc]?r(x,T,R):(G.beforeEnter(x),r(x,T,R),Dt(()=>G.enter(x),j));else{const{leave:J,delayLeave:ne,afterLeave:ae}=G,oe=()=>{y.ctx.isUnmounted?s(x):r(x,T,R)},de=()=>{const Ae=x._isLeaving||!!x[Jc];x._isLeaving&&x[Jc](!0),G.persisted&&!Ae?oe():J(x,()=>{oe(),ae&&ae()})};ne?ne(x,oe,de):de()}else r(x,T,R)},Fe=(y,T,R,O=!1,j=!1)=>{const{type:x,props:K,ref:G,children:H,dynamicChildren:$,shapeFlag:ie,patchFlag:J,dirs:ne,cacheIndex:ae,memo:oe}=y;if(J===-2&&(j=!1),G!=null&&(Wn(),ki(G,null,R,y,!0),zn()),ae!=null&&(T.renderCache[ae]=void 0),ie&256){T.ctx.deactivate(y);return}const de=ie&1&&ne,Ae=!Ni(y);let je;if(Ae&&(je=K&&K.onVnodeBeforeUnmount)&&dn(je,T,y),ie&6)Ut(y.component,R,O);else{if(ie&128){y.suspense.unmount(R,O);return}de&&$r(y,null,T,"beforeUnmount"),ie&64?y.type.remove(y,T,R,ee,O):$&&!$.hasOnce&&(x!==Bt||J>0&&J&64)?Vt($,T,R,!1,!0):(x===Bt&&J&384||!j&&ie&16)&&Vt(H,T,R),O&&Ue(y)}const Je=oe!=null&&ae==null;(Ae&&(je=K&&K.onVnodeUnmounted)||de||Je)&&Dt(()=>{je&&dn(je,T,y),de&&$r(y,null,T,"unmounted"),Je&&(y.el=null)},R)},Ue=y=>{const{type:T,el:R,anchor:O,transition:j}=y;if(T===Bt){sr(R,O);return}if(T===Xo){L(y);return}const x=()=>{s(R),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(y.shapeFlag&1&&j&&!j.persisted){const{leave:K,delayLeave:G}=j,H=()=>K(R,x);G?G(y.el,x,H):H()}else x()},sr=(y,T)=>{let R;for(;y!==T;)R=m(y),s(y),y=R;s(T)},Ut=(y,T,R)=>{const{bum:O,scope:j,job:x,subTree:K,um:G,m:H,a:$}=y;jf(H),jf($),O&&Jo(O),j.stop(),x&&(x.flags|=8,Fe(K,y,T,R)),G&&Dt(G,T),Dt(()=>{y.isUnmounted=!0},T)},Vt=(y,T,R,O=!1,j=!1,x=0)=>{for(let K=x;K<y.length;K++)Fe(y[K],T,R,O,j)},M=y=>{if(y.shapeFlag&6)return M(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const T=m(y.anchor||y.el),R=T&&T[oE];return R?m(R):T};let X=!1;const Q=(y,T,R)=>{let O;y==null?T._vnode&&(Fe(T._vnode,null,null,!0),O=T._vnode.component):k(T._vnode||null,y,T,null,null,null,R),T._vnode=y,X||(X=!0,Cf(O),Nm(),X=!1)},ee={p:k,um:Fe,m:Qt,r:Ue,mt:At,mc:v,pc:ye,pbc:A,n:M,o:t};return{render:Q,hydrate:void 0,createApp:CE(Q)}}function Xc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function qr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function GE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Xm(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Un(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Xm(o,c)),c.type===ec&&(c.patchFlag===-1&&(c=s[i]=Un(c)),c.el=o.el),c.type===br&&!c.el&&(c.el=o.el)}}function WE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Zm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Zm(e)}function jf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function eg(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?eg(e.subTree):null}const tg=t=>t.__isSuspense;function zE(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):nE(t)}const Bt=Symbol.for("v-fgt"),ec=Symbol.for("v-txt"),br=Symbol.for("v-cmt"),Xo=Symbol.for("v-stc"),Jr=[];let Gt=null;function Ce(t=!1){Jr.push(Gt=t?null:[])}function ng(){Jr.pop(),Gt=Jr[Jr.length-1]||null}let Hi=1;function ma(t,e=!1){Hi+=t,t<0&&Gt&&e&&(Gt.hasOnce=!0)}function rg(t){return t.dynamicChildren=Hi>0?Gt||As:null,ng(),Hi>0&&Gt&&Gt.push(t),t}function Me(t,e,n,r,s,i){return rg(te(t,e,n,r,s,i,!0))}function ga(t,e,n,r,s){return rg(Ke(t,e,n,r,s,!0))}function _a(t){return t?t.__v_isVNode===!0:!1}function gi(t,e){return t.type===e.type&&t.key===e.key}const sg=({key:t})=>t??null,Zo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?We(t)||Tt(t)||pe(t)?{i:Ht,r:t,k:e,f:!!n}:t:null);function te(t,e=null,n=null,r=0,s=null,i=t===Bt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&sg(e),ref:e&&Zo(e),scopeId:Dm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ht};return c?(ya(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=We(n)?8:16),Hi>0&&!o&&Gt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Gt.push(l),l}const Ke=KE;function KE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===EE)&&(t=br),_a(t)){const c=Os(t,e,!0);return n&&ya(c,n),Hi>0&&!i&&Gt&&(c.shapeFlag&6?Gt[Gt.indexOf(t)]=c:Gt.push(c)),c.patchFlag=-2,c}if(ow(t)&&(t=t.__vccOpts),e){e=QE(e);let{class:c,style:l}=e;c&&!We(c)&&(e.class=Zt(c)),ke(l)&&(pu(l)&&!ue(l)&&(l=dt({},l)),e.style=ou(l))}const o=We(t)?1:tg(t)?128:aE(t)?64:ke(t)?4:pe(t)?2:0;return te(t,e,n,r,s,o,i,!0)}function QE(t){return t?pu(t)||Wm(t)?dt({},t):t:null}function Os(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?JE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&sg(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(Zo(e)):[i,Zo(e)]:Zo(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Bt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Os(t.ssContent),ssFallback:t.ssFallback&&Os(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&_u(f,l.clone(f)),f}function Iu(t=" ",e=0){return Ke(ec,null,t,e)}function w1(t,e){const n=Ke(Xo,null,t);return n.staticCount=e,n}function Xt(t="",e=!1){return e?(Ce(),ga(br,null,t)):Ke(br,null,t)}function _n(t){return t==null||typeof t=="boolean"?Ke(br):ue(t)?Ke(Bt,null,t.slice()):_a(t)?Un(t):Ke(ec,null,String(t))}function Un(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Os(t)}function ya(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ya(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Wm(e)?e._ctx=Ht:s===3&&Ht&&(Ht.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(pe(e)){if(r&65){ya(t,{default:e});return}e={default:e,_ctx:Ht},n=32}else e=String(e),r&64?(n=16,e=[Iu(e)]):n=8;t.children=e,t.shapeFlag|=n}function JE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Zt([e.class,r.class]));else if(s==="style")e.style=ou([e.style,r.style]);else if(qa(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!Ha(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function dn(t,e,n,r=null){ln(t,e,7,[n,r])}const YE=Bm();let XE=0;function ZE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||YE,i={uid:XE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new um(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Km(r,s),emitsOptions:$m(r,s),emit:null,emitted:null,propsDefaults:De,inheritAttrs:r.inheritAttrs,ctx:De,data:De,props:De,attrs:De,slots:De,refs:De,setupState:De,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=NE.bind(null,i),t.ce&&t.ce(i),i}let wt=null;const ew=()=>wt||Ht;let va,bl;{const t=Ka(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};va=e("__VUE_INSTANCE_SETTERS__",n=>wt=n),bl=e("__VUE_SSR_SETTERS__",n=>Gi=n)}const co=t=>{const e=wt;return va(t),t.scope.on(),()=>{t.scope.off(),va(e)}},Bf=()=>{wt&&wt.scope.off(),va(null)};function ig(t){return t.vnode.shapeFlag&4}let Gi=!1;function tw(t,e=!1,n=!1){e&&bl(e);const{props:r,children:s}=t.vnode,i=ig(t);LE(t,r,i,e),BE(t,s,n||e);const o=i?nw(t,e):void 0;return e&&bl(!1),o}function nw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,TE);const{setup:r}=n;if(r){Wn();const s=t.setupContext=r.length>1?sw(t):null,i=co(t),o=io(r,t,0,[t.props,s]),c=rm(o);if(zn(),i(),(c||t.sp)&&!Ni(t)&&Mm(t),c){if(o.then(Bf,Bf),e)return o.then(l=>{$f(t,l)}).catch(l=>{Ya(l,t,0)});t.asyncDep=o}else $f(t,o)}else og(t)}function $f(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:ke(e)&&(t.setupState=Pm(e)),og(t)}function og(t,e,n){const r=t.type;t.render||(t.render=r.render||En);{const s=co(t);Wn();try{IE(t)}finally{zn(),s()}}}const rw={get(t,e){return Et(t,"get",""),t[e]}};function sw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,rw),slots:t.slots,emit:t.emit,expose:e}}function tc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Pm(Rm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Vi)return Vi[n](t)},has(e,n){return n in e||n in Vi}})):t.proxy}function iw(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function ow(t){return pe(t)&&"__vccOpts"in t}const Ct=(t,e)=>Yv(t,e,Gi);function ag(t,e,n){try{ma(-1);const r=arguments.length;return r===2?ke(e)&&!ue(e)?_a(e)?Ke(t,null,[e]):Ke(t,e):Ke(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&_a(n)&&(n=[n]),Ke(t,e,n))}finally{ma(1)}}const aw="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Rl;const qf=typeof window<"u"&&window.trustedTypes;if(qf)try{Rl=qf.createPolicy("vue",{createHTML:t=>t})}catch{}const cg=Rl?t=>Rl.createHTML(t):t=>t,cw="http://www.w3.org/2000/svg",lw="http://www.w3.org/1998/Math/MathML",Fn=typeof document<"u"?document:null,Hf=Fn&&Fn.createElement("template"),uw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Fn.createElementNS(cw,t):e==="mathml"?Fn.createElementNS(lw,t):n?Fn.createElement(t,{is:n}):Fn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Fn.createTextNode(t),createComment:t=>Fn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Fn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Hf.innerHTML=cg(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Hf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},hw=Symbol("_vtc");function fw(t,e,n){const r=t[hw];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Gf=Symbol("_vod"),dw=Symbol("_vsh"),pw=Symbol(""),mw=/(?:^|;)\s*display\s*:/;function gw(t,e,n){const r=t.style,s=We(n);let i=!1;if(n&&!s){if(e)if(We(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&wi(r,c,"")}else for(const o in e)n[o]==null&&wi(r,o,"");for(const o in n){o==="display"&&(i=!0);const c=n[o];c!=null?yw(t,o,!We(e)&&e?e[o]:void 0,c)||wi(r,o,c):wi(r,o,"")}}else if(s){if(e!==n){const o=r[pw];o&&(n+=";"+o),r.cssText=n,i=mw.test(n)}}else e&&t.removeAttribute("style");Gf in t&&(t[Gf]=i?r.display:"",t[dw]&&(r.display="none"))}const Wf=/\s*!important$/;function wi(t,e,n){if(ue(n))n.forEach(r=>wi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=_w(t,e);Wf.test(n)?t.setProperty(Or(r),n.replace(Wf,""),"important"):t[r]=n}}const zf=["Webkit","Moz","ms"],Zc={};function _w(t,e){const n=Zc[e];if(n)return n;let r=Nt(e);if(r!=="filter"&&r in t)return Zc[e]=r;r=Wa(r);for(let s=0;s<zf.length;s++){const i=zf[s]+r;if(i in t)return Zc[e]=i}return e}function yw(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&We(r)&&n===r}const Kf="http://www.w3.org/1999/xlink";function Qf(t,e,n,r,s,i=Rv(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Kf,e.slice(6,e.length)):t.setAttributeNS(Kf,e,n):n==null||i&&!am(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Cn(n)?String(n):n)}function Jf(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?cg(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=am(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function dr(t,e,n,r){t.addEventListener(e,n,r)}function vw(t,e,n,r){t.removeEventListener(e,n,r)}const Yf=Symbol("_vei");function Ew(t,e,n,r,s=null){const i=t[Yf]||(t[Yf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=Iw(e);if(r){const u=i[e]=Rw(r,s);dr(t,c,u,l)}else o&&(vw(t,c,o,l),i[e]=void 0)}}const ww=/(Once|Passive|Capture)$/,Tw=/^on:?(?:Once|Passive|Capture)$/;function Iw(t){let e,n;for(;(n=t.match(ww))&&!Tw.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):Or(t.slice(2)),e]}let el=0;const Aw=Promise.resolve(),bw=()=>el||(Aw.then(()=>el=0),el=Date.now());function Rw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(ue(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),c=[r];for(let l=0;l<o.length&&!r._stopped;l++){const u=o[l];u&&ln(u,e,5,c)}}else ln(s,e,5,[r])};return n.value=t,n.attached=bw(),n}const Xf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Sw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?fw(t,r,o):e==="style"?gw(t,n,r):qa(e)?Ha(e)||Ew(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Pw(t,e,r,o))?(Jf(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Qf(t,e,r,o,i,e!=="value")):t._isVueCE&&(Cw(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!We(r)))?Jf(t,Nt(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Qf(t,e,r,o))};function Pw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Xf(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Xf(e)&&We(n)?!1:e in t}function Cw(t,e){const n=t._def.props;if(!n)return!1;const r=Nt(e);return Array.isArray(n)?n.some(s=>Nt(s)===r):Object.keys(n).some(s=>Nt(s)===r)}const xs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>Jo(e,n):e};function kw(t){t.target.composing=!0}function Zf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Hn=Symbol("_assign");function ed(t,e,n){return e&&(t=t.trim()),n&&(t=za(t)),t}const T1={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Hn]=xs(s);const i=r||s.props&&s.props.type==="number";dr(t,e?"change":"input",o=>{o.target.composing||t[Hn](ed(t.value,n,i))}),(n||i)&&dr(t,"change",()=>{t.value=ed(t.value,n,i)}),e||(dr(t,"compositionstart",kw),dr(t,"compositionend",Zf),dr(t,"change",Zf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Hn]=xs(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?za(t.value):t.value,l=e??"";if(c===l)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l)}},I1={deep:!0,created(t,e,n){t[Hn]=xs(n),dr(t,"change",()=>{const r=t._modelValue,s=Wi(t),i=t.checked,o=t[Hn];if(ue(r)){const c=au(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(Gs(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(lg(t,i))})},mounted:td,beforeUpdate(t,e,n){t[Hn]=xs(n),td(t,e,n)}};function td(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ue(e))s=au(e,r.props.value)>-1;else if(Gs(e))s=e.has(r.props.value);else{if(e===n)return;s=Ws(e,lg(t,!0))}t.checked!==s&&(t.checked=s)}const A1={deep:!0,created(t,{value:e,modifiers:{number:n}},r){t._modelValue=e,dr(t,"change",()=>{const s=Array.prototype.filter.call(t.options,i=>i.selected).map(i=>n?za(Wi(i)):Wi(i));t[Hn](t.multiple?Gs(t._modelValue)?new Set(s):s:s[0]),t._assigning=!0,mu(()=>{t._assigning=!1})}),t[Hn]=xs(r)},mounted(t,{value:e}){nd(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[Hn]=xs(n)},updated(t,{value:e}){t._assigning||nd(t,e)}};function nd(t,e){const n=t.multiple,r=ue(e);if(!(n&&!r&&!Gs(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Wi(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=au(e,c)>-1}else o.selected=e.has(c);else if(Ws(Wi(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Wi(t){return"_value"in t?t._value:t.value}function lg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Nw=["ctrl","shift","alt","meta"],Vw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Nw.some(n=>t[`${n}Key`]&&!e.includes(n))},b1=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const c=Vw[e[o]];if(c&&c(s,e))return}return t(s,...i)}))},Dw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},R1=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const i=Or(s.key);if(e.some(o=>o===i||Dw[o]===i))return t(s)}))},Ow=dt({patchProp:Sw},uw);let rd;function xw(){return rd||(rd=qE(Ow))}const Mw=((...t)=>{const e=xw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Fw(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Lw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Lw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Fw(t){return We(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Uw=Symbol();var sd;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(sd||(sd={}));function jw(){const t=Pv(!0),e=t.run(()=>on({}));let n=[],r=[];const s=Rm({install(i){s._a=i,i.provide(Uw,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const gs=typeof document<"u";function ug(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Bw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&ug(t.default)}const Re=Object.assign;function tl(t,e){const n={};for(const r in e){const s=e[r];n[r]=un(s)?s.map(t):t(s)}return n}const Di=()=>{},un=Array.isArray;function id(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const hg=/#/g,$w=/&/g,qw=/\//g,Hw=/=/g,Gw=/\?/g,fg=/\+/g,Ww=/%5B/g,zw=/%5D/g,dg=/%5E/g,Kw=/%60/g,pg=/%7B/g,Qw=/%7C/g,mg=/%7D/g,Jw=/%20/g;function Au(t){return t==null?"":encodeURI(""+t).replace(Qw,"|").replace(Ww,"[").replace(zw,"]")}function Yw(t){return Au(t).replace(pg,"{").replace(mg,"}").replace(dg,"^")}function Sl(t){return Au(t).replace(fg,"%2B").replace(Jw,"+").replace(hg,"%23").replace($w,"%26").replace(Kw,"`").replace(pg,"{").replace(mg,"}").replace(dg,"^")}function Xw(t){return Sl(t).replace(Hw,"%3D")}function Zw(t){return Au(t).replace(hg,"%23").replace(Gw,"%3F")}function eT(t){return Zw(t).replace(qw,"%2F")}function zi(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const tT=/\/$/,nT=t=>t.replace(tT,"");function nl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=oT(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:zi(o)}}function rT(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function od(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function sT(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ms(e.matched[r],n.matched[s])&&gg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ms(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function gg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!iT(t[n],e[n]))return!1;return!0}function iT(t,e){return un(t)?ad(t,e):un(e)?ad(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function ad(t,e){return un(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function oT(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const lr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Pl=(function(t){return t.pop="pop",t.push="push",t})({}),rl=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function aT(t){if(!t)if(gs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),nT(t)}const cT=/^[^#]+#/;function lT(t,e){return t.replace(cT,"#")+e}function uT(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const nc=()=>({left:window.scrollX,top:window.scrollY});function hT(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=uT(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function cd(t,e){return(history.state?history.state.position-e:-1)+t}const Cl=new Map;function fT(t,e){Cl.set(t,e)}function dT(t){const e=Cl.get(t);return Cl.delete(t),e}function pT(t){return typeof t=="string"||t&&typeof t=="object"}function _g(t){return typeof t=="string"||typeof t=="symbol"}let He=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const yg=Symbol("");He.MATCHER_NOT_FOUND+"",He.NAVIGATION_GUARD_REDIRECT+"",He.NAVIGATION_ABORTED+"",He.NAVIGATION_CANCELLED+"",He.NAVIGATION_DUPLICATED+"";function Ls(t,e){return Re(new Error,{type:t,[yg]:!0},e)}function Mn(t,e){return t instanceof Error&&yg in t&&(e==null||!!(t.type&e))}const mT=["params","query","hash"];function gT(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of mT)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function _T(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(fg," "),i=s.indexOf("="),o=zi(i<0?s:s.slice(0,i)),c=i<0?null:zi(s.slice(i+1));if(o in e){let l=e[o];un(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function ld(t){let e="";for(let n in t){const r=t[n];if(n=Xw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(un(r)?r.map(s=>s&&Sl(s)):[r&&Sl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function yT(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=un(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const vT=Symbol(""),ud=Symbol(""),rc=Symbol(""),bu=Symbol(""),kl=Symbol("");function _i(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function fr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(Ls(He.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?l(m):pT(m)?l(Ls(He.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function sl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(ug(l)){const u=(l.__vccOpts||l)[e];u&&i.push(fr(u,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=Bw(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const m=(p.__vccOpts||p)[e];return m&&fr(m,n,r,o,c,s)()}))}}return i}function ET(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Ms(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Ms(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let wT=()=>location.protocol+"//"+location.host;function vg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),od(c,"")}return od(n,t)+r+s}function TT(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=vg(t,location),S=n.value,k=e.value;let V=0;if(m){if(n.value=_,e.value=m,o&&o===S){o=null;return}V=k?m.position-k.position:0}else r(_);s.forEach(q=>{q(n.value,S,{delta:V,type:Pl.pop,direction:V?V>0?rl.forward:rl.back:rl.unknown})})};function l(){o=n.value}function u(m){s.push(m);const _=()=>{const S=s.indexOf(m);S>-1&&s.splice(S,1)};return i.push(_),_}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Re({},m.state,{scroll:nc()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:u,destroy:p}}function hd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?nc():null}}function IT(t){const{history:e,location:n}=window,r={value:vg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:wT()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(l,u){i(l,Re({},e.state,hd(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function c(l,u){const f=Re({},s.value,e.state,{forward:l,scroll:nc()});i(f.current,f,!0),i(l,Re({},hd(r.value,l,null),{position:f.position+1},u),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function AT(t){t=aT(t);const e=IT(t),n=TT(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:lT.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let Wr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var et=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(et||{});const bT={type:Wr.Static,value:""},RT=/[a-zA-Z0-9_]/;function ST(t){if(!t)return[[]];if(t==="/")return[[bT]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=et.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===et.Static?i.push({type:Wr.Static,value:u}):n===et.Param||n===et.ParamRegExp||n===et.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:Wr.Param,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==et.ParamRegExp){r=n,n=et.EscapeNext;continue}switch(n){case et.Static:l==="/"?(u&&p(),o()):l===":"?(p(),n=et.Param):m();break;case et.EscapeNext:m(),n=r;break;case et.Param:l==="("?n=et.ParamRegExp:RT.test(l)?m():(p(),n=et.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case et.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=et.ParamRegExpEnd:f+=l;break;case et.ParamRegExpEnd:p(),n=et.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===et.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const fd="[^/]+?",PT={sensitive:!1,strict:!1,start:!0,end:!0};var St=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(St||{});const CT=/[.+*?^${}()[\]/\\]/g;function kT(t,e){const n=Re({},PT,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[St.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=St.Segment+(n.sensitive?St.BonusCaseSensitive:0);if(m.type===Wr.Static)p||(s+="/"),s+=m.value.replace(CT,"\\$&"),_+=St.Static;else if(m.type===Wr.Param){const{value:S,repeatable:k,optional:V,regexp:q}=m;i.push({name:S,repeatable:k,optional:V});const U=q||fd;if(U!==fd){_+=St.BonusCustomRegExp;try{`${U}`}catch(L){throw new Error(`Invalid custom RegExp for param "${S}" (${U}): `+L.message)}}let B=k?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(B=V&&u.length<2?`(?:/${B})`:"/"+B),V&&(B+="?"),s+=B,_+=St.Dynamic,V&&(_+=St.BonusOptional),k&&(_+=St.BonusRepeatable),U===".*"&&(_+=St.BonusWildcard)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=St.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",S=i[m-1];p[S.name]=_&&S.repeatable?_.split("/"):_}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===Wr.Static)f+=_.value;else if(_.type===Wr.Param){const{value:S,repeatable:k,optional:V}=_,q=S in u?u[S]:"";if(un(q)&&!k)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const U=un(q)?q.join("/"):q;if(!U)if(V)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${S}"`);f+=U}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function NT(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===St.Static+St.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===St.Static+St.Segment?1:-1:0}function Eg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=NT(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(dd(r))return 1;if(dd(s))return-1}return s.length-r.length}function dd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const VT={strict:!1,end:!0,sensitive:!1};function DT(t,e,n){const r=kT(ST(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function OT(t,e){const n=[],r=new Map;e=id(VT,e);function s(p){return r.get(p)}function i(p,m,_){const S=!_,k=md(p);k.aliasOf=_&&_.record;const V=id(e,p),q=[k];if("alias"in p){const L=typeof p.alias=="string"?[p.alias]:p.alias;for(const Z of L)q.push(md(Re({},k,{components:_?_.record.components:k.components,path:Z,aliasOf:_?_.record:k})))}let U,B;for(const L of q){const{path:Z}=L;if(m&&Z[0]!=="/"){const fe=m.record.path,I=fe[fe.length-1]==="/"?"":"/";L.path=m.record.path+(Z&&I+Z)}if(U=DT(L,m,V),_?_.alias.push(U):(B=B||U,B!==U&&B.alias.push(U),S&&p.name&&!gd(U)&&o(p.name)),wg(U)&&l(U),k.children){const fe=k.children;for(let I=0;I<fe.length;I++)i(fe[I],U,_&&_.children[I])}_=_||U}return B?()=>{o(B)}:Di}function o(p){if(_g(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=LT(p,n);n.splice(m,0,p),p.record.name&&!gd(p)&&r.set(p.record.name,p)}function u(p,m){let _,S={},k,V;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Ls(He.MATCHER_NOT_FOUND,{location:p});V=_.record.name,S=Re(pd(m.params,_.keys.filter(B=>!B.optional).concat(_.parent?_.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),p.params&&pd(p.params,_.keys.map(B=>B.name))),k=_.stringify(S)}else if(p.path!=null)k=p.path,_=n.find(B=>B.re.test(k)),_&&(S=_.parse(k),V=_.record.name);else{if(_=m.name?r.get(m.name):n.find(B=>B.re.test(m.path)),!_)throw Ls(He.MATCHER_NOT_FOUND,{location:p,currentLocation:m});V=_.record.name,S=Re({},m.params,p.params),k=_.stringify(S)}const q=[];let U=_;for(;U;)q.unshift(U.record),U=U.parent;return{name:V,path:k,params:S,matched:q,meta:MT(q)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function pd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function md(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:xT(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function xT(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function gd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function MT(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function LT(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;Eg(t,e[i])<0?r=i:n=i+1}const s=FT(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function FT(t){let e=t;for(;e=e.parent;)if(wg(e)&&Eg(t,e)===0)return e}function wg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function _d(t){const e=an(rc),n=an(bu),r=Ct(()=>{const l=ht(t.to);return e.resolve(l)}),s=Ct(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(Ms.bind(null,f));if(m>-1)return m;const _=yd(l[u-2]);return u>1&&yd(f)===_&&p[p.length-1].path!==_?p.findIndex(Ms.bind(null,l[u-2])):m}),i=Ct(()=>s.value>-1&&qT(n.params,r.value.params)),o=Ct(()=>s.value>-1&&s.value===n.matched.length-1&&gg(n.params,r.value.params));function c(l={}){if($T(l)){const u=e[ht(t.replace)?"replace":"push"](ht(t.to)).catch(Di);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Ct(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function UT(t){return t.length===1?t[0]:t}const jT=ss({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:_d,setup(t,{slots:e}){const n=Ja(_d(t)),{options:r}=an(rc),s=Ct(()=>({[vd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[vd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&UT(e.default(n));return t.custom?i:ag("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),BT=jT;function $T(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function qT(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!un(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function yd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const vd=(t,e,n)=>t??e??n,HT=ss({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=an(kl),s=Ct(()=>t.route||r.value),i=an(ud,0),o=Ct(()=>{let u=ht(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=Ct(()=>s.value.matched[o.value]);Yo(ud,Ct(()=>o.value+1)),Yo(vT,c),Yo(kl,s);const l=on();return Ss(()=>[l.value,c.value,t.name],([u,f,p],[m,_,S])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!Ms(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return Ed(n.default,{Component:m,route:u});const _=p.props[f],S=_?_===!0?u.params:typeof _=="function"?_(u):_:null,V=ag(m,Re({},S,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return Ed(n.default,{Component:V,route:u})||V}}});function Ed(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const GT=HT;function WT(t){const e=OT(t.routes,t),n=t.parseQuery||_T,r=t.stringifyQuery||ld,s=t.history,i=_i(),o=_i(),c=_i(),l=zv(lr);let u=lr;gs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=tl.bind(null,M=>""+M),p=tl.bind(null,eT),m=tl.bind(null,zi);function _(M,X){let Q,ee;return _g(M)?(Q=e.getRecordMatcher(M),ee=X):ee=M,e.addRoute(ee,Q)}function S(M){const X=e.getRecordMatcher(M);X&&e.removeRoute(X)}function k(){return e.getRoutes().map(M=>M.record)}function V(M){return!!e.getRecordMatcher(M)}function q(M,X){if(X=Re({},X||l.value),typeof M=="string"){const R=nl(n,M,X.path),O=e.resolve({path:R.path},X),j=s.createHref(R.fullPath);return Re(R,O,{params:m(O.params),hash:zi(R.hash),redirectedFrom:void 0,href:j})}let Q;if(M.path!=null)Q=Re({},M,{path:nl(n,M.path,X.path).path});else{const R=Re({},M.params);for(const O in R)R[O]==null&&delete R[O];Q=Re({},M,{params:p(R)}),X.params=p(X.params)}const ee=e.resolve(Q,X),me=M.hash||"";ee.params=f(m(ee.params));const y=rT(r,Re({},M,{hash:Yw(me),path:ee.path})),T=s.createHref(y);return Re({fullPath:y,hash:me,query:r===ld?yT(M.query):M.query||{}},ee,{redirectedFrom:void 0,href:T})}function U(M){return typeof M=="string"?nl(n,M,l.value.path):Re({},M)}function B(M,X){if(u!==M)return Ls(He.NAVIGATION_CANCELLED,{from:X,to:M})}function L(M){return I(M)}function Z(M){return L(Re(U(M),{replace:!0}))}function fe(M,X){const Q=M.matched[M.matched.length-1];if(Q&&Q.redirect){const{redirect:ee}=Q;let me=typeof ee=="function"?ee(M,X):ee;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=U(me):{path:me},me.params={}),Re({query:M.query,hash:M.hash,params:me.path!=null?{}:M.params},me)}}function I(M,X){const Q=u=q(M),ee=l.value,me=M.state,y=M.force,T=M.replace===!0,R=fe(Q,ee);if(R)return I(Re(U(R),{state:typeof R=="object"?Re({},me,R.state):me,force:y,replace:T}),X||Q);const O=Q;O.redirectedFrom=X;let j;return!y&&sT(r,ee,Q)&&(j=Ls(He.NAVIGATION_DUPLICATED,{to:O,from:ee}),Qt(ee,ee,!0,!1)),(j?Promise.resolve(j):A(O,ee)).catch(x=>Mn(x)?Mn(x,He.NAVIGATION_GUARD_REDIRECT)?x:tn(x):ye(x,O,ee)).then(x=>{if(x){if(Mn(x,He.NAVIGATION_GUARD_REDIRECT))return I(Re({replace:T},U(x.to),{state:typeof x.to=="object"?Re({},me,x.to.state):me,force:y}),X||O)}else x=P(O,ee,!0,T,me);return b(O,ee,x),x})}function v(M,X){const Q=B(M,X);return Q?Promise.reject(Q):Promise.resolve()}function E(M){const X=sr.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(M):M()}function A(M,X){let Q;const[ee,me,y]=ET(M,X);Q=sl(ee.reverse(),"beforeRouteLeave",M,X);for(const R of ee)R.leaveGuards.forEach(O=>{Q.push(fr(O,M,X))});const T=v.bind(null,M,X);return Q.push(T),Vt(Q).then(()=>{Q=[];for(const R of i.list())Q.push(fr(R,M,X));return Q.push(T),Vt(Q)}).then(()=>{Q=sl(me,"beforeRouteUpdate",M,X);for(const R of me)R.updateGuards.forEach(O=>{Q.push(fr(O,M,X))});return Q.push(T),Vt(Q)}).then(()=>{Q=[];for(const R of y)if(R.beforeEnter)if(un(R.beforeEnter))for(const O of R.beforeEnter)Q.push(fr(O,M,X));else Q.push(fr(R.beforeEnter,M,X));return Q.push(T),Vt(Q)}).then(()=>(M.matched.forEach(R=>R.enterCallbacks={}),Q=sl(y,"beforeRouteEnter",M,X,E),Q.push(T),Vt(Q))).then(()=>{Q=[];for(const R of o.list())Q.push(fr(R,M,X));return Q.push(T),Vt(Q)}).catch(R=>Mn(R,He.NAVIGATION_CANCELLED)?R:Promise.reject(R))}function b(M,X,Q){c.list().forEach(ee=>E(()=>ee(M,X,Q)))}function P(M,X,Q,ee,me){const y=B(M,X);if(y)return y;const T=X===lr,R=gs?history.state:{};Q&&(ee||T?s.replace(M.fullPath,Re({scroll:T&&R&&R.scroll},me)):s.push(M.fullPath,me)),l.value=M,Qt(M,X,Q,T),tn()}let w;function At(){w||(w=s.listen((M,X,Q)=>{if(!Ut.listening)return;const ee=q(M),me=fe(ee,Ut.currentRoute.value);if(me){I(Re(me,{replace:!0,force:!0}),ee).catch(Di);return}u=ee;const y=l.value;gs&&fT(cd(y.fullPath,Q.delta),nc()),A(ee,y).catch(T=>Mn(T,He.NAVIGATION_ABORTED|He.NAVIGATION_CANCELLED)?T:Mn(T,He.NAVIGATION_GUARD_REDIRECT)?(I(Re(U(T.to),{force:!0}),ee).then(R=>{Mn(R,He.NAVIGATION_ABORTED|He.NAVIGATION_DUPLICATED)&&!Q.delta&&Q.type===Pl.pop&&s.go(-1,!1)}).catch(Di),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),ye(T,ee,y))).then(T=>{T=T||P(ee,y,!1),T&&(Q.delta&&!Mn(T,He.NAVIGATION_CANCELLED)?s.go(-Q.delta,!1):Q.type===Pl.pop&&Mn(T,He.NAVIGATION_ABORTED|He.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),b(ee,y,T)}).catch(Di)}))}let Kt=_i(),Qe=_i(),we;function ye(M,X,Q){tn(M);const ee=Qe.list();return ee.length?ee.forEach(me=>me(M,X,Q)):console.error(M),Promise.reject(M)}function Ft(){return we&&l.value!==lr?Promise.resolve():new Promise((M,X)=>{Kt.add([M,X])})}function tn(M){return we||(we=!M,At(),Kt.list().forEach(([X,Q])=>M?Q(M):X()),Kt.reset()),M}function Qt(M,X,Q,ee){const{scrollBehavior:me}=t;if(!gs||!me)return Promise.resolve();const y=!Q&&dT(cd(M.fullPath,0))||(ee||!Q)&&history.state&&history.state.scroll||null;return mu().then(()=>me(M,X,y)).then(T=>T&&hT(T)).catch(T=>ye(T,M,X))}const Fe=M=>s.go(M);let Ue;const sr=new Set,Ut={currentRoute:l,listening:!0,addRoute:_,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:V,getRoutes:k,resolve:q,options:t,push:L,replace:Z,go:Fe,back:()=>Fe(-1),forward:()=>Fe(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:Qe.add,isReady:Ft,install(M){M.component("RouterLink",BT),M.component("RouterView",GT),M.config.globalProperties.$router=Ut,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>ht(l)}),gs&&!Ue&&l.value===lr&&(Ue=!0,L(s.location).catch(ee=>{}));const X={};for(const ee in lr)Object.defineProperty(X,ee,{get:()=>l.value[ee],enumerable:!0});M.provide(rc,Ut),M.provide(bu,bm(X)),M.provide(kl,l);const Q=M.unmount;sr.add(M),M.unmount=function(){sr.delete(M),sr.size<1&&(u=lr,w&&w(),w=null,l.value=lr,Ue=!1,we=!1),Q()}}};function Vt(M){return M.reduce((X,Q)=>X.then(()=>E(Q)),Promise.resolve())}return Ut}function zT(){return an(rc)}function Ru(t){return an(bu)}const KT=()=>{};var wd={};/**
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
 */const Tg=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},QT=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},Ig={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Tg(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):QT(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new JT;const m=i<<2|c>>4;if(r.push(m),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const S=u<<6&192|p;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class JT extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const YT=function(t){const e=Tg(t);return Ig.encodeByteArray(e,!0)},Ea=function(t){return YT(t).replace(/\./g,"")},Ag=function(t){try{return Ig.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function XT(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const ZT=()=>XT().__FIREBASE_DEFAULTS__,eI=()=>{if(typeof process>"u"||typeof wd>"u")return;const t=wd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},tI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Ag(t[1]);return e&&JSON.parse(e)},sc=()=>{try{return KT()||ZT()||eI()||tI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},bg=t=>{var e,n;return(n=(e=sc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Rg=t=>{const e=bg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Sg=()=>{var t;return(t=sc())===null||t===void 0?void 0:t.config},Pg=t=>{var e;return(e=sc())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class nI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function is(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Su(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function rI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ea(JSON.stringify(n)),Ea(JSON.stringify(o)),""].join(".")}const Oi={};function sI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Oi))Oi[e]?t.emulator.push(e):t.prod.push(e);return t}function iI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Td=!1;function Pu(t,e){if(typeof window>"u"||typeof document>"u"||!is(window.location.host)||Oi[t]===e||Oi[t]||Td)return;Oi[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=sI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{Td=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=iI(r),_=n("text"),S=document.getElementById(_)||document.createElement("span"),k=n("learnmore"),V=document.getElementById(k)||document.createElement("a"),q=n("preprendIcon"),U=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const B=m.element;c(B),f(V,k);const L=u();l(U,q),B.append(U,S,V,L),document.body.appendChild(B)}i?(S.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function It(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function oI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(It())}function aI(){var t;const e=(t=sc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function cI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function lI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function uI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function hI(){const t=It();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function fI(){return!aI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dI(){try{return typeof indexedDB=="object"}catch{return!1}}function pI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const mI="FirebaseError";class tr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=mI,Object.setPrototypeOf(this,tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,lo.prototype.create)}}class lo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?gI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new tr(s,c,r)}}function gI(t,e){return t.replace(_I,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const _I=/\{\$([^}]+)}/g;function yI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Xr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Id(i)&&Id(o)){if(!Xr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Id(t){return t!==null&&typeof t=="object"}/**
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
 */function uo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ti(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Ii(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vI(t,e){const n=new EI(t,e);return n.subscribe.bind(n)}class EI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");wI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=il),s.error===void 0&&(s.error=il),s.complete===void 0&&(s.complete=il);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function il(){}/**
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
 */function Le(t){return t&&t._delegate?t._delegate:t}class Rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Gr="[DEFAULT]";/**
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
 */class TI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new nI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(AI(e))try{this.getOrInitializeService({instanceIdentifier:Gr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Gr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Gr){return this.instances.has(e)}getOptions(e=Gr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:II(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Gr){return this.component?this.component.multipleInstances?e:Gr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function II(t){return t===Gr?void 0:t}function AI(t){return t.instantiationMode==="EAGER"}/**
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
 */class bI{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const RI={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},SI=ve.INFO,PI={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},CI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=PI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cu{constructor(e){this.name=e,this._logLevel=SI,this._logHandler=CI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?RI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}const kI=(t,e)=>e.some(n=>t instanceof n);let Ad,bd;function NI(){return Ad||(Ad=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VI(){return bd||(bd=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cg=new WeakMap,Nl=new WeakMap,kg=new WeakMap,ol=new WeakMap,ku=new WeakMap;function DI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Er(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Cg.set(n,t)}).catch(()=>{}),ku.set(e,t),e}function OI(t){if(Nl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Nl.set(t,e)}let Vl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Nl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||kg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Er(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function xI(t){Vl=t(Vl)}function MI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(al(this),e,...n);return kg.set(r,e.sort?e.sort():[e]),Er(r)}:VI().includes(t)?function(...e){return t.apply(al(this),e),Er(Cg.get(this))}:function(...e){return Er(t.apply(al(this),e))}}function LI(t){return typeof t=="function"?MI(t):(t instanceof IDBTransaction&&OI(t),kI(t,NI())?new Proxy(t,Vl):t)}function Er(t){if(t instanceof IDBRequest)return DI(t);if(ol.has(t))return ol.get(t);const e=LI(t);return e!==t&&(ol.set(t,e),ku.set(e,t)),e}const al=t=>ku.get(t);function FI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=Er(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Er(o.result),l.oldVersion,l.newVersion,Er(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const UI=["get","getKey","getAll","getAllKeys","count"],jI=["put","add","delete","clear"],cl=new Map;function Rd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(cl.get(e))return cl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=jI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||UI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return cl.set(e,i),i}xI(t=>({...t,get:(e,n,r)=>Rd(e,n)||t.get(e,n,r),has:(e,n)=>!!Rd(e,n)||t.has(e,n)}));/**
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
 */class BI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if($I(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function $I(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Dl="@firebase/app",Sd="0.13.2";/**
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
 */const Qn=new Cu("@firebase/app"),qI="@firebase/app-compat",HI="@firebase/analytics-compat",GI="@firebase/analytics",WI="@firebase/app-check-compat",zI="@firebase/app-check",KI="@firebase/auth",QI="@firebase/auth-compat",JI="@firebase/database",YI="@firebase/data-connect",XI="@firebase/database-compat",ZI="@firebase/functions",eA="@firebase/functions-compat",tA="@firebase/installations",nA="@firebase/installations-compat",rA="@firebase/messaging",sA="@firebase/messaging-compat",iA="@firebase/performance",oA="@firebase/performance-compat",aA="@firebase/remote-config",cA="@firebase/remote-config-compat",lA="@firebase/storage",uA="@firebase/storage-compat",hA="@firebase/firestore",fA="@firebase/ai",dA="@firebase/firestore-compat",pA="firebase",mA="11.10.0";/**
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
 */const Ol="[DEFAULT]",gA={[Dl]:"fire-core",[qI]:"fire-core-compat",[GI]:"fire-analytics",[HI]:"fire-analytics-compat",[zI]:"fire-app-check",[WI]:"fire-app-check-compat",[KI]:"fire-auth",[QI]:"fire-auth-compat",[JI]:"fire-rtdb",[YI]:"fire-data-connect",[XI]:"fire-rtdb-compat",[ZI]:"fire-fn",[eA]:"fire-fn-compat",[tA]:"fire-iid",[nA]:"fire-iid-compat",[rA]:"fire-fcm",[sA]:"fire-fcm-compat",[iA]:"fire-perf",[oA]:"fire-perf-compat",[aA]:"fire-rc",[cA]:"fire-rc-compat",[lA]:"fire-gcs",[uA]:"fire-gcs-compat",[hA]:"fire-fst",[dA]:"fire-fst-compat",[fA]:"fire-vertex","fire-js":"fire-js",[pA]:"fire-js-all"};/**
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
 */const wa=new Map,_A=new Map,xl=new Map;function Pd(t,e){try{t.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Zr(t){const e=t.name;if(xl.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;xl.set(e,t);for(const n of wa.values())Pd(n,t);for(const n of _A.values())Pd(n,t);return!0}function ic(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function $t(t){return t==null?!1:t.settings!==void 0}/**
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
 */const yA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},wr=new lo("app","Firebase",yA);/**
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
 */class vA{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw wr.create("app-deleted",{appName:this._name})}}/**
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
 */const zs=mA;function Ng(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Ol,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw wr.create("bad-app-name",{appName:String(s)});if(n||(n=Sg()),!n)throw wr.create("no-options");const i=wa.get(s);if(i){if(Xr(n,i.options)&&Xr(r,i.config))return i;throw wr.create("duplicate-app",{appName:s})}const o=new bI(s);for(const l of xl.values())o.addComponent(l);const c=new vA(n,r,o);return wa.set(s,c),c}function Nu(t=Ol){const e=wa.get(t);if(!e&&t===Ol&&Sg())return Ng();if(!e)throw wr.create("no-app",{appName:t});return e}function wn(t,e,n){var r;let s=(r=gA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(c.join(" "));return}Zr(new Rr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const EA="firebase-heartbeat-database",wA=1,Ki="firebase-heartbeat-store";let ll=null;function Vg(){return ll||(ll=FI(EA,wA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ki)}catch(n){console.warn(n)}}}}).catch(t=>{throw wr.create("idb-open",{originalErrorMessage:t.message})})),ll}async function TA(t){try{const n=(await Vg()).transaction(Ki),r=await n.objectStore(Ki).get(Dg(t));return await n.done,r}catch(e){if(e instanceof tr)Qn.warn(e.message);else{const n=wr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(n.message)}}}async function Cd(t,e){try{const r=(await Vg()).transaction(Ki,"readwrite");await r.objectStore(Ki).put(e,Dg(t)),await r.done}catch(n){if(n instanceof tr)Qn.warn(n.message);else{const r=wr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function Dg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const IA=1024,AA=30;class bA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=kd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>AA){const o=PA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=kd(),{heartbeatsToSend:r,unsentEntries:s}=RA(this._heartbeatsCache.heartbeats),i=Ea(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Qn.warn(n),""}}}function kd(){return new Date().toISOString().substring(0,10)}function RA(t,e=IA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Nd(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Nd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dI()?pI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await TA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Cd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Nd(t){return Ea(JSON.stringify({version:2,heartbeats:t})).length}function PA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function CA(t){Zr(new Rr("platform-logger",e=>new BI(e),"PRIVATE")),Zr(new Rr("heartbeat",e=>new bA(e),"PRIVATE")),wn(Dl,Sd,t),wn(Dl,Sd,"esm2017"),wn("fire-js","")}CA("");function Vu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Og(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kA=Og,xg=new lo("auth","Firebase",Og());/**
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
 */const Ta=new Cu("@firebase/auth");function NA(t,...e){Ta.logLevel<=ve.WARN&&Ta.warn(`Auth (${zs}): ${t}`,...e)}function ea(t,...e){Ta.logLevel<=ve.ERROR&&Ta.error(`Auth (${zs}): ${t}`,...e)}/**
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
 */function hn(t,...e){throw Du(t,...e)}function Tn(t,...e){return Du(t,...e)}function Mg(t,e,n){const r=Object.assign(Object.assign({},kA()),{[e]:n});return new lo("auth","Firebase",r).create(e,{appName:t.name})}function Gn(t){return Mg(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Du(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return xg.create(t,...e)}function le(t,e,...n){if(!t)throw Du(e,...n)}function $n(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ea(e),new Error(e)}function Jn(t,e){t||$n(e)}/**
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
 */function Ml(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function VA(){return Vd()==="http:"||Vd()==="https:"}function Vd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function DA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VA()||lI()||"connection"in navigator)?navigator.onLine:!0}function OA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ho{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jn(n>e,"Short delay should be less than long delay!"),this.isMobile=oI()||uI()}get(){return DA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ou(t,e){Jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Lg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;$n("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;$n("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;$n("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const MA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],LA=new ho(3e4,6e4);function xr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nr(t,e,n,r,s={}){return Fg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=uo(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return cI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&is(t.emulatorConfig.host)&&(u.credentials="include"),Lg.fetch()(await Ug(t,t.config.apiHost,n,c),u)})}async function Fg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},xA),e);try{const s=new UA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ho(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ho(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ho(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ho(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Mg(t,f,u);hn(t,f)}}catch(s){if(s instanceof tr)throw s;hn(t,"network-request-failed",{message:String(s)})}}async function fo(t,e,n,r,s={}){const i=await nr(t,e,n,r,s);return"mfaPendingCredential"in i&&hn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Ug(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Ou(t.config,s):`${t.config.apiScheme}://${s}`;return MA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function FA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class UA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Tn(this.auth,"network-request-failed")),LA.get())})}}function Ho(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Tn(t,e,r);return s.customData._tokenResponse=n,s}function Dd(t){return t!==void 0&&t.enterprise!==void 0}class jA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return FA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function BA(t,e){return nr(t,"GET","/v2/recaptchaConfig",xr(t,e))}/**
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
 */async function $A(t,e){return nr(t,"POST","/v1/accounts:delete",e)}async function Ia(t,e){return nr(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function xi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function qA(t,e=!1){const n=Le(t),r=await n.getIdToken(e),s=xu(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:xi(ul(s.auth_time)),issuedAtTime:xi(ul(s.iat)),expirationTime:xi(ul(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ul(t){return Number(t)*1e3}function xu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ea("JWT malformed, contained fewer than 3 sections"),null;try{const s=Ag(n);return s?JSON.parse(s):(ea("Failed to decode base64 JWT payload"),null)}catch(s){return ea("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Od(t){const e=xu(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Fs(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tr&&HA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function HA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class GA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ll{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=xi(this.lastLoginAt),this.creationTime=xi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Aa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Fs(t,Ia(n,{idToken:r}));le(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?jg(i.providerUserInfo):[],c=zA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Ll(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function WA(t){const e=Le(t);await Aa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function jg(t){return t.map(e=>{var{providerId:n}=e,r=Vu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function KA(t,e){const n=await Fg(t,{},async()=>{const r=uo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Ug(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&is(t.emulatorConfig.host)&&(l.credentials="include"),Lg.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function QA(t,e){return nr(t,"POST","/v2/accounts:revokeToken",xr(t,e))}/**
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
 */class Cs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Od(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=Od(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await KA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Cs;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Cs,this.toJSON())}_performRefresh(){return $n("not implemented")}}/**
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
 */function ur(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=Vu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new GA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Ll(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Fs(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return qA(this,e)}reload(){return WA(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Aa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if($t(this.auth.app))return Promise.reject(Gn(this.auth));const e=await this.getIdToken();return await Fs(this,$A(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(c=n.tenantId)!==null&&c!==void 0?c:void 0,V=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,q=(u=n.createdAt)!==null&&u!==void 0?u:void 0,U=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:B,emailVerified:L,isAnonymous:Z,providerData:fe,stsTokenManager:I}=n;le(B&&I,e,"internal-error");const v=Cs.fromJSON(this.name,I);le(typeof B=="string",e,"internal-error"),ur(p,e.name),ur(m,e.name),le(typeof L=="boolean",e,"internal-error"),le(typeof Z=="boolean",e,"internal-error"),ur(_,e.name),ur(S,e.name),ur(k,e.name),ur(V,e.name),ur(q,e.name),ur(U,e.name);const E=new rn({uid:B,auth:e,email:m,emailVerified:L,displayName:p,isAnonymous:Z,photoURL:S,phoneNumber:_,tenantId:k,stsTokenManager:v,createdAt:q,lastLoginAt:U});return fe&&Array.isArray(fe)&&(E.providerData=fe.map(A=>Object.assign({},A))),V&&(E._redirectEventId=V),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new Cs;s.updateFromServerResponse(n);const i=new rn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Aa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?jg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Cs;c.updateFromIdToken(r);const l=new rn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Ll(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
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
 */const xd=new Map;function qn(t){Jn(t instanceof Function,"Expected a class definition");let e=xd.get(t);return e?(Jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,xd.set(t,e),e)}/**
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
 */class Bg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Bg.type="NONE";const Md=Bg;/**
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
 */function ta(t,e,n){return`firebase:${t}:${e}:${n}`}class ks{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ta(this.userKey,s.apiKey,i),this.fullPersistenceKey=ta("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Ia(this.auth,{idToken:e}).catch(()=>{});return n?rn._fromGetAccountInfoResponse(this.auth,n,e):null}return rn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ks(qn(Md),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||qn(Md);const o=ta(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await Ia(e,{idToken:f}).catch(()=>{});if(!m)break;p=await rn._fromGetAccountInfoResponse(e,m,f)}else p=rn._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ks(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ks(i,e,r))}}/**
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
 */function Ld(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Gg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($g(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(zg(e))return"Blackberry";if(Kg(e))return"Webos";if(qg(e))return"Safari";if((e.includes("chrome/")||Hg(e))&&!e.includes("edge/"))return"Chrome";if(Wg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $g(t=It()){return/firefox\//i.test(t)}function qg(t=It()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hg(t=It()){return/crios\//i.test(t)}function Gg(t=It()){return/iemobile/i.test(t)}function Wg(t=It()){return/android/i.test(t)}function zg(t=It()){return/blackberry/i.test(t)}function Kg(t=It()){return/webos/i.test(t)}function Mu(t=It()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function JA(t=It()){var e;return Mu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YA(){return hI()&&document.documentMode===10}function Qg(t=It()){return Mu(t)||Wg(t)||Kg(t)||zg(t)||/windows phone/i.test(t)||Gg(t)}/**
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
 */function Jg(t,e=[]){let n;switch(t){case"Browser":n=Ld(It());break;case"Worker":n=`${Ld(It())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${zs}/${r}`}/**
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
 */class XA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ZA(t,e={}){return nr(t,"GET","/v2/passwordPolicy",xr(t,e))}/**
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
 */const e0=6;class t0{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:e0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class n0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fd(this),this.idTokenSubscription=new Fd(this),this.beforeStateQueue=new XA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=xg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=qn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await ks.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Ia(this,{idToken:e}),r=await rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if($t(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Aa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=OA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if($t(this.app))return Promise.reject(Gn(this));const n=e?Le(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return $t(this.app)?Promise.reject(Gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return $t(this.app)?Promise.reject(Gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(qn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ZA(this),n=new t0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new lo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await QA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&qn(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await ks.create(this,[qn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Jg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if($t(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&NA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function os(t){return Le(t)}class Fd{constructor(e){this.auth=e,this.observer=null,this.addObserver=vI(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let oc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function r0(t){oc=t}function Yg(t){return oc.loadJS(t)}function s0(){return oc.recaptchaEnterpriseScript}function i0(){return oc.gapiScript}function o0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class a0{constructor(){this.enterprise=new c0}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class c0{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const l0="recaptcha-enterprise",Xg="NO_RECAPTCHA";class u0{constructor(e){this.type=l0,this.auth=os(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{BA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new jA(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;Dd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(Xg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new a0().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&Dd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=s0();l.length!==0&&(l+=c),Yg(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Ud(t,e,n,r=!1,s=!1){const i=new u0(t);let o;if(s)o=Xg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Fl(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Ud(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Ud(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
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
 */function h0(t,e){const n=ic(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Xr(i,e??{}))return s;hn(s,"already-initialized")}return n.initialize({options:e})}function f0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(qn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function d0(t,e,n){const r=os(t);le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Zg(e),{host:o,port:c}=p0(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){le(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),le(Xr(u,r.config.emulator)&&Xr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,is(o)?(Su(`${i}//${o}${l}`),Pu("Auth",!0)):m0()}function Zg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function p0(t){const e=Zg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:jd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:jd(o)}}}function jd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function m0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Lu{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return $n("not implemented")}_getIdTokenResponse(e){return $n("not implemented")}_linkToIdToken(e,n){return $n("not implemented")}_getReauthenticationResolver(e){return $n("not implemented")}}async function g0(t,e){return nr(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function _0(t,e){return fo(t,"POST","/v1/accounts:signInWithPassword",xr(t,e))}/**
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
 */async function y0(t,e){return fo(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}async function v0(t,e){return fo(t,"POST","/v1/accounts:signInWithEmailLink",xr(t,e))}/**
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
 */class Qi extends Lu{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Qi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Qi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fl(e,n,"signInWithPassword",_0);case"emailLink":return y0(e,{email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Fl(e,r,"signUpPassword",g0);case"emailLink":return v0(e,{idToken:n,email:this._email,oobCode:this._password});default:hn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ns(t,e){return fo(t,"POST","/v1/accounts:signInWithIdp",xr(t,e))}/**
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
 */const E0="http://localhost";class es extends Lu{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new es(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):hn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=Vu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new es(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ns(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Ns(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ns(e,n)}buildRequest(){const e={requestUri:E0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=uo(n)}return e}}/**
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
 */function w0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function T0(t){const e=Ti(Ii(t)).link,n=e?Ti(Ii(e)).deep_link_id:null,r=Ti(Ii(t)).deep_link_id;return(r?Ti(Ii(r)).link:null)||r||n||e||t}class Fu{constructor(e){var n,r,s,i,o,c;const l=Ti(Ii(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=w0((s=l.mode)!==null&&s!==void 0?s:null);le(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=T0(e);try{return new Fu(n)}catch{return null}}}/**
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
 */class Ks{constructor(){this.providerId=Ks.PROVIDER_ID}static credential(e,n){return Qi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Fu.parseLink(n);return le(r,"argument-error"),Qi._fromEmailAndCode(e,r.code,r.tenantId)}}Ks.PROVIDER_ID="password";Ks.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ks.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class e_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class po extends e_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class pr extends po{constructor(){super("facebook.com")}static credential(e){return es._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pr.credential(e.oauthAccessToken)}catch{return null}}}pr.FACEBOOK_SIGN_IN_METHOD="facebook.com";pr.PROVIDER_ID="facebook.com";/**
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
 */class mr extends po{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return es._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return mr.credential(n,r)}catch{return null}}}mr.GOOGLE_SIGN_IN_METHOD="google.com";mr.PROVIDER_ID="google.com";/**
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
 */class gr extends po{constructor(){super("github.com")}static credential(e){return es._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gr.credential(e.oauthAccessToken)}catch{return null}}}gr.GITHUB_SIGN_IN_METHOD="github.com";gr.PROVIDER_ID="github.com";/**
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
 */class _r extends po{constructor(){super("twitter.com")}static credential(e,n){return es._fromParams({providerId:_r.PROVIDER_ID,signInMethod:_r.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _r.credentialFromTaggedObject(e)}static credentialFromError(e){return _r.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _r.credential(n,r)}catch{return null}}}_r.TWITTER_SIGN_IN_METHOD="twitter.com";_r.PROVIDER_ID="twitter.com";/**
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
 */async function I0(t,e){return fo(t,"POST","/v1/accounts:signUp",xr(t,e))}/**
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
 */class ts{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await rn._fromIdTokenResponse(e,r,s),o=Bd(r);return new ts({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Bd(r);return new ts({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Bd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class ba extends tr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ba.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ba(e,n,r,s)}}function t_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ba._fromErrorAndOperation(t,i,e,r):i})}async function A0(t,e,n=!1){const r=await Fs(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ts._forOperation(t,"link",r)}/**
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
 */async function b0(t,e,n=!1){const{auth:r}=t;if($t(r.app))return Promise.reject(Gn(r));const s="reauthenticate";try{const i=await Fs(t,t_(r,s,e,t),n);le(i.idToken,r,"internal-error");const o=xu(i.idToken);le(o,r,"internal-error");const{sub:c}=o;return le(t.uid===c,r,"user-mismatch"),ts._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&hn(r,"user-mismatch"),i}}/**
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
 */async function n_(t,e,n=!1){if($t(t.app))return Promise.reject(Gn(t));const r="signIn",s=await t_(t,r,e),i=await ts._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function R0(t,e){return n_(os(t),e)}/**
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
 */async function r_(t){const e=os(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function S0(t,e,n){if($t(t.app))return Promise.reject(Gn(t));const r=os(t),o=await Fl(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",I0).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&r_(t),l}),c=await ts._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function P0(t,e,n){return $t(t.app)?Promise.reject(Gn(t)):R0(Le(t),Ks.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&r_(t),r})}/**
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
 */async function C0(t,e){return nr(t,"POST","/v1/accounts:update",e)}/**
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
 */async function k0(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Le(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Fs(r,C0(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function N0(t,e,n,r){return Le(t).onIdTokenChanged(e,n,r)}function V0(t,e,n){return Le(t).beforeAuthStateChanged(e,n)}function D0(t,e,n,r){return Le(t).onAuthStateChanged(e,n,r)}function O0(t){return Le(t).signOut()}const Ra="__sak";/**
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
 */class s_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ra,"1"),this.storage.removeItem(Ra),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const x0=1e3,M0=10;class i_ extends s_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Qg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);YA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,M0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},x0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}i_.type="LOCAL";const L0=i_;/**
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
 */class o_ extends s_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}o_.type="SESSION";const a_=o_;/**
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
 */function F0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ac{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new ac(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await F0(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ac.receivers=[];/**
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
 */function Uu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class U0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Uu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function In(){return window}function j0(t){In().location.href=t}/**
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
 */function c_(){return typeof In().WorkerGlobalScope<"u"&&typeof In().importScripts=="function"}async function B0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function q0(){return c_()?self:null}/**
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
 */const l_="firebaseLocalStorageDb",H0=1,Sa="firebaseLocalStorage",u_="fbase_key";class mo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cc(t,e){return t.transaction([Sa],e?"readwrite":"readonly").objectStore(Sa)}function G0(){const t=indexedDB.deleteDatabase(l_);return new mo(t).toPromise()}function Ul(){const t=indexedDB.open(l_,H0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sa,{keyPath:u_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sa)?e(r):(r.close(),await G0(),e(await Ul()))})})}async function $d(t,e,n){const r=cc(t,!0).put({[u_]:e,value:n});return new mo(r).toPromise()}async function W0(t,e){const n=cc(t,!1).get(e),r=await new mo(n).toPromise();return r===void 0?null:r.value}function qd(t,e){const n=cc(t,!0).delete(e);return new mo(n).toPromise()}const z0=800,K0=3;class h_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ul(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>K0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return c_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ac._getInstance(q0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await B0(),!this.activeServiceWorker)return;this.sender=new U0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ul();return await $d(e,Ra,"1"),await qd(e,Ra),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>$d(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>W0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>qd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=cc(s,!1).getAll();return new mo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),z0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}h_.type="LOCAL";const Q0=h_;new ho(3e4,6e4);/**
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
 */function J0(t,e){return e?qn(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ju extends Lu{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ns(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ns(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ns(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Y0(t){return n_(t.auth,new ju(t),t.bypassAuthState)}function X0(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),b0(n,new ju(t),t.bypassAuthState)}async function Z0(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),A0(n,new ju(t),t.bypassAuthState)}/**
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
 */class f_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Y0;case"linkViaPopup":case"linkViaRedirect":return Z0;case"reauthViaPopup":case"reauthViaRedirect":return X0;default:hn(this.auth,"internal-error")}}resolve(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const eb=new ho(2e3,1e4);class ws extends f_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ws.currentPopupAction&&ws.currentPopupAction.cancel(),ws.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Jn(this.filter.length===1,"Popup operations only handle one event");const e=Uu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Tn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Tn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ws.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Tn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,eb.get())};e()}}ws.currentPopupAction=null;/**
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
 */const tb="pendingRedirect",na=new Map;class nb extends f_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=na.get(this.auth._key());if(!e){try{const r=await rb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}na.set(this.auth._key(),e)}return this.bypassAuthState||na.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rb(t,e){const n=ob(e),r=ib(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function sb(t,e){na.set(t._key(),e)}function ib(t){return qn(t._redirectPersistence)}function ob(t){return ta(tb,t.config.apiKey,t.name)}async function ab(t,e,n=!1){if($t(t.app))return Promise.reject(Gn(t));const r=os(t),s=J0(r,e),o=await new nb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const cb=600*1e3;class lb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ub(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!d_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Tn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hd(e))}saveEventToCache(e){this.cachedEventUids.add(Hd(e)),this.lastProcessedEventTime=Date.now()}}function Hd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function d_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ub(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return d_(t);default:return!1}}/**
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
 */async function hb(t,e={}){return nr(t,"GET","/v1/projects",e)}/**
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
 */const fb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,db=/^https?/;async function pb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await hb(t);for(const n of e)try{if(mb(n))return}catch{}hn(t,"unauthorized-domain")}function mb(t){const e=Ml(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!db.test(n))return!1;if(fb.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const gb=new ho(3e4,6e4);function Gd(){const t=In().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _b(t){return new Promise((e,n)=>{var r,s,i;function o(){Gd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Gd(),n(Tn(t,"network-request-failed"))},timeout:gb.get()})}if(!((s=(r=In().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=In().gapi)===null||i===void 0)&&i.load)o();else{const c=o0("iframefcb");return In()[c]=()=>{gapi.load?o():n(Tn(t,"network-request-failed"))},Yg(`${i0()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw ra=null,e})}let ra=null;function yb(t){return ra=ra||_b(t),ra}/**
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
 */const vb=new ho(5e3,15e3),Eb="__/auth/iframe",wb="emulator/auth/iframe",Tb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ib=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ab(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ou(e,wb):`https://${t.config.authDomain}/${Eb}`,r={apiKey:e.apiKey,appName:t.name,v:zs},s=Ib.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${uo(r).slice(1)}`}async function bb(t){const e=await yb(t),n=In().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:Ab(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Tb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Tn(t,"network-request-failed"),c=In().setTimeout(()=>{i(o)},vb.get());function l(){In().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Rb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Sb=500,Pb=600,Cb="_blank",kb="http://localhost";class Wd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Nb(t,e,n,r=Sb,s=Pb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Rb),{width:r.toString(),height:s.toString(),top:i,left:o}),u=It().toLowerCase();n&&(c=Hg(u)?Cb:n),$g(u)&&(e=e||kb,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,S])=>`${m}${_}=${S},`,"");if(JA(u)&&c!=="_self")return Vb(e||"",c),new Wd(null);const p=window.open(e||"",c,f);le(p,t,"popup-blocked");try{p.focus()}catch{}return new Wd(p)}function Vb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Db="__/auth/handler",Ob="emulator/auth/handler",xb=encodeURIComponent("fac");async function zd(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:zs,eventId:s};if(e instanceof e_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",yI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof po){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${xb}=${encodeURIComponent(l)}`:"";return`${Mb(t)}?${uo(c).slice(1)}${u}`}function Mb({config:t}){return t.emulator?Ou(t,Ob):`https://${t.authDomain}/${Db}`}/**
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
 */const hl="webStorageSupport";class Lb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=a_,this._completeRedirectFn=ab,this._overrideRedirectResult=sb}async _openPopup(e,n,r,s){var i;Jn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await zd(e,n,r,Ml(),s);return Nb(e,o,Uu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await zd(e,n,r,Ml(),s);return j0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Jn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await bb(e),r=new lb(e);return n.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(hl,{type:hl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[hl];o!==void 0&&n(!!o),hn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Qg()||qg()||Mu()}}const Fb=Lb;var Kd="@firebase/auth",Qd="1.10.8";/**
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
 */class Ub{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function jb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Bb(t){Zr(new Rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Jg(t)},u=new n0(r,s,i,l);return f0(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Zr(new Rr("auth-internal",e=>{const n=os(e.getProvider("auth").getImmediate());return(r=>new Ub(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),wn(Kd,Qd,jb(t)),wn(Kd,Qd,"esm2017")}/**
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
 */const $b=300,qb=Pg("authIdTokenMaxAge")||$b;let Jd=null;const Hb=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>qb)return;const s=n==null?void 0:n.token;Jd!==s&&(Jd=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Gb(t=Nu()){const e=ic(t,"auth");if(e.isInitialized())return e.getImmediate();const n=h0(t,{popupRedirectResolver:Fb,persistence:[Q0,L0,a_]}),r=Pg("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=Hb(i.toString());V0(n,o,()=>o(n.currentUser)),N0(n,c=>o(c))}}const s=bg("auth");return s&&d0(n,`http://${s}`),n}function Wb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}r0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Tn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Wb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Bb("Browser");var zb="firebase",Kb="11.10.0";/**
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
 */wn(zb,Kb,"app");var Yd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Tr,p_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function E(){}E.prototype=v.prototype,I.D=v.prototype,I.prototype=new E,I.prototype.constructor=I,I.C=function(A,b,P){for(var w=Array(arguments.length-2),At=2;At<arguments.length;At++)w[At-2]=arguments[At];return v.prototype[b].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,E){E||(E=0);var A=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)A[b]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(b=0;16>b;++b)A[b]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=I.g[0],E=I.g[1],b=I.g[2];var P=I.g[3],w=v+(P^E&(b^P))+A[0]+3614090360&4294967295;v=E+(w<<7&4294967295|w>>>25),w=P+(b^v&(E^b))+A[1]+3905402710&4294967295,P=v+(w<<12&4294967295|w>>>20),w=b+(E^P&(v^E))+A[2]+606105819&4294967295,b=P+(w<<17&4294967295|w>>>15),w=E+(v^b&(P^v))+A[3]+3250441966&4294967295,E=b+(w<<22&4294967295|w>>>10),w=v+(P^E&(b^P))+A[4]+4118548399&4294967295,v=E+(w<<7&4294967295|w>>>25),w=P+(b^v&(E^b))+A[5]+1200080426&4294967295,P=v+(w<<12&4294967295|w>>>20),w=b+(E^P&(v^E))+A[6]+2821735955&4294967295,b=P+(w<<17&4294967295|w>>>15),w=E+(v^b&(P^v))+A[7]+4249261313&4294967295,E=b+(w<<22&4294967295|w>>>10),w=v+(P^E&(b^P))+A[8]+1770035416&4294967295,v=E+(w<<7&4294967295|w>>>25),w=P+(b^v&(E^b))+A[9]+2336552879&4294967295,P=v+(w<<12&4294967295|w>>>20),w=b+(E^P&(v^E))+A[10]+4294925233&4294967295,b=P+(w<<17&4294967295|w>>>15),w=E+(v^b&(P^v))+A[11]+2304563134&4294967295,E=b+(w<<22&4294967295|w>>>10),w=v+(P^E&(b^P))+A[12]+1804603682&4294967295,v=E+(w<<7&4294967295|w>>>25),w=P+(b^v&(E^b))+A[13]+4254626195&4294967295,P=v+(w<<12&4294967295|w>>>20),w=b+(E^P&(v^E))+A[14]+2792965006&4294967295,b=P+(w<<17&4294967295|w>>>15),w=E+(v^b&(P^v))+A[15]+1236535329&4294967295,E=b+(w<<22&4294967295|w>>>10),w=v+(b^P&(E^b))+A[1]+4129170786&4294967295,v=E+(w<<5&4294967295|w>>>27),w=P+(E^b&(v^E))+A[6]+3225465664&4294967295,P=v+(w<<9&4294967295|w>>>23),w=b+(v^E&(P^v))+A[11]+643717713&4294967295,b=P+(w<<14&4294967295|w>>>18),w=E+(P^v&(b^P))+A[0]+3921069994&4294967295,E=b+(w<<20&4294967295|w>>>12),w=v+(b^P&(E^b))+A[5]+3593408605&4294967295,v=E+(w<<5&4294967295|w>>>27),w=P+(E^b&(v^E))+A[10]+38016083&4294967295,P=v+(w<<9&4294967295|w>>>23),w=b+(v^E&(P^v))+A[15]+3634488961&4294967295,b=P+(w<<14&4294967295|w>>>18),w=E+(P^v&(b^P))+A[4]+3889429448&4294967295,E=b+(w<<20&4294967295|w>>>12),w=v+(b^P&(E^b))+A[9]+568446438&4294967295,v=E+(w<<5&4294967295|w>>>27),w=P+(E^b&(v^E))+A[14]+3275163606&4294967295,P=v+(w<<9&4294967295|w>>>23),w=b+(v^E&(P^v))+A[3]+4107603335&4294967295,b=P+(w<<14&4294967295|w>>>18),w=E+(P^v&(b^P))+A[8]+1163531501&4294967295,E=b+(w<<20&4294967295|w>>>12),w=v+(b^P&(E^b))+A[13]+2850285829&4294967295,v=E+(w<<5&4294967295|w>>>27),w=P+(E^b&(v^E))+A[2]+4243563512&4294967295,P=v+(w<<9&4294967295|w>>>23),w=b+(v^E&(P^v))+A[7]+1735328473&4294967295,b=P+(w<<14&4294967295|w>>>18),w=E+(P^v&(b^P))+A[12]+2368359562&4294967295,E=b+(w<<20&4294967295|w>>>12),w=v+(E^b^P)+A[5]+4294588738&4294967295,v=E+(w<<4&4294967295|w>>>28),w=P+(v^E^b)+A[8]+2272392833&4294967295,P=v+(w<<11&4294967295|w>>>21),w=b+(P^v^E)+A[11]+1839030562&4294967295,b=P+(w<<16&4294967295|w>>>16),w=E+(b^P^v)+A[14]+4259657740&4294967295,E=b+(w<<23&4294967295|w>>>9),w=v+(E^b^P)+A[1]+2763975236&4294967295,v=E+(w<<4&4294967295|w>>>28),w=P+(v^E^b)+A[4]+1272893353&4294967295,P=v+(w<<11&4294967295|w>>>21),w=b+(P^v^E)+A[7]+4139469664&4294967295,b=P+(w<<16&4294967295|w>>>16),w=E+(b^P^v)+A[10]+3200236656&4294967295,E=b+(w<<23&4294967295|w>>>9),w=v+(E^b^P)+A[13]+681279174&4294967295,v=E+(w<<4&4294967295|w>>>28),w=P+(v^E^b)+A[0]+3936430074&4294967295,P=v+(w<<11&4294967295|w>>>21),w=b+(P^v^E)+A[3]+3572445317&4294967295,b=P+(w<<16&4294967295|w>>>16),w=E+(b^P^v)+A[6]+76029189&4294967295,E=b+(w<<23&4294967295|w>>>9),w=v+(E^b^P)+A[9]+3654602809&4294967295,v=E+(w<<4&4294967295|w>>>28),w=P+(v^E^b)+A[12]+3873151461&4294967295,P=v+(w<<11&4294967295|w>>>21),w=b+(P^v^E)+A[15]+530742520&4294967295,b=P+(w<<16&4294967295|w>>>16),w=E+(b^P^v)+A[2]+3299628645&4294967295,E=b+(w<<23&4294967295|w>>>9),w=v+(b^(E|~P))+A[0]+4096336452&4294967295,v=E+(w<<6&4294967295|w>>>26),w=P+(E^(v|~b))+A[7]+1126891415&4294967295,P=v+(w<<10&4294967295|w>>>22),w=b+(v^(P|~E))+A[14]+2878612391&4294967295,b=P+(w<<15&4294967295|w>>>17),w=E+(P^(b|~v))+A[5]+4237533241&4294967295,E=b+(w<<21&4294967295|w>>>11),w=v+(b^(E|~P))+A[12]+1700485571&4294967295,v=E+(w<<6&4294967295|w>>>26),w=P+(E^(v|~b))+A[3]+2399980690&4294967295,P=v+(w<<10&4294967295|w>>>22),w=b+(v^(P|~E))+A[10]+4293915773&4294967295,b=P+(w<<15&4294967295|w>>>17),w=E+(P^(b|~v))+A[1]+2240044497&4294967295,E=b+(w<<21&4294967295|w>>>11),w=v+(b^(E|~P))+A[8]+1873313359&4294967295,v=E+(w<<6&4294967295|w>>>26),w=P+(E^(v|~b))+A[15]+4264355552&4294967295,P=v+(w<<10&4294967295|w>>>22),w=b+(v^(P|~E))+A[6]+2734768916&4294967295,b=P+(w<<15&4294967295|w>>>17),w=E+(P^(b|~v))+A[13]+1309151649&4294967295,E=b+(w<<21&4294967295|w>>>11),w=v+(b^(E|~P))+A[4]+4149444226&4294967295,v=E+(w<<6&4294967295|w>>>26),w=P+(E^(v|~b))+A[11]+3174756917&4294967295,P=v+(w<<10&4294967295|w>>>22),w=b+(v^(P|~E))+A[2]+718787259&4294967295,b=P+(w<<15&4294967295|w>>>17),w=E+(P^(b|~v))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(b+(w<<21&4294967295|w>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+P&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var E=v-this.blockSize,A=this.B,b=this.h,P=0;P<v;){if(b==0)for(;P<=E;)s(this,I,P),P+=this.blockSize;if(typeof I=="string"){for(;P<v;)if(A[b++]=I.charCodeAt(P++),b==this.blockSize){s(this,A),b=0;break}}else for(;P<v;)if(A[b++]=I[P++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var E=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=E&255,E/=256;for(this.u(I),I=Array(16),v=E=0;4>v;++v)for(var A=0;32>A;A+=8)I[E++]=this.g[v]>>>A&255;return I};function i(I,v){var E=c;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=v(I)}function o(I,v){this.h=v;for(var E=[],A=!0,b=I.length-1;0<=b;b--){var P=I[b]|0;A&&P==v||(E[b]=P,A=!1)}this.g=E}var c={};function l(I){return-128<=I&&128>I?i(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return V(u(-I));for(var v=[],E=1,A=0;I>=E;A++)v[A]=I/E|0,E*=4294967296;return new o(v,0)}function f(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return V(f(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(v,8)),A=p,b=0;b<I.length;b+=8){var P=Math.min(8,I.length-b),w=parseInt(I.substring(b,b+P),v);8>P?(P=u(Math.pow(v,P)),A=A.j(P).add(u(w))):(A=A.j(E),A=A.add(u(w)))}return A}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-V(this).m();for(var I=0,v=1,E=0;E<this.g.length;E++){var A=this.i(E);I+=(0<=A?A:4294967296+A)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(S(this))return"0";if(k(this))return"-"+V(this).toString(I);for(var v=u(Math.pow(I,6)),E=this,A="";;){var b=L(E,v).g;E=q(E,b.j(v));var P=((0<E.g.length?E.g[0]:E.h)>>>0).toString(I);if(E=b,S(E))return P+A;for(;6>P.length;)P="0"+P;A=P+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function S(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function k(I){return I.h==-1}t.l=function(I){return I=q(this,I),k(I)?-1:S(I)?0:1};function V(I){for(var v=I.g.length,E=[],A=0;A<v;A++)E[A]=~I.g[A];return new o(E,~I.h).add(m)}t.abs=function(){return k(this)?V(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),E=[],A=0,b=0;b<=v;b++){var P=A+(this.i(b)&65535)+(I.i(b)&65535),w=(P>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);A=w>>>16,P&=65535,w&=65535,E[b]=w<<16|P}return new o(E,E[E.length-1]&-2147483648?-1:0)};function q(I,v){return I.add(V(v))}t.j=function(I){if(S(this)||S(I))return p;if(k(this))return k(I)?V(this).j(V(I)):V(V(this).j(I));if(k(I))return V(this.j(V(I)));if(0>this.l(_)&&0>I.l(_))return u(this.m()*I.m());for(var v=this.g.length+I.g.length,E=[],A=0;A<2*v;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<I.g.length;b++){var P=this.i(A)>>>16,w=this.i(A)&65535,At=I.i(b)>>>16,Kt=I.i(b)&65535;E[2*A+2*b]+=w*Kt,U(E,2*A+2*b),E[2*A+2*b+1]+=P*Kt,U(E,2*A+2*b+1),E[2*A+2*b+1]+=w*At,U(E,2*A+2*b+1),E[2*A+2*b+2]+=P*At,U(E,2*A+2*b+2)}for(A=0;A<v;A++)E[A]=E[2*A+1]<<16|E[2*A];for(A=v;A<2*v;A++)E[A]=0;return new o(E,0)};function U(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function B(I,v){this.g=I,this.h=v}function L(I,v){if(S(v))throw Error("division by zero");if(S(I))return new B(p,p);if(k(I))return v=L(V(I),v),new B(V(v.g),V(v.h));if(k(v))return v=L(I,V(v)),new B(V(v.g),v.h);if(30<I.g.length){if(k(I)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var E=m,A=v;0>=A.l(I);)E=Z(E),A=Z(A);var b=fe(E,1),P=fe(A,1);for(A=fe(A,2),E=fe(E,2);!S(A);){var w=P.add(A);0>=w.l(I)&&(b=b.add(E),P=w),A=fe(A,1),E=fe(E,1)}return v=q(I,b.j(v)),new B(b,v)}for(b=p;0<=I.l(v);){for(E=Math.max(1,Math.floor(I.m()/v.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),P=u(E),w=P.j(v);k(w)||0<w.l(I);)E-=A,P=u(E),w=P.j(v);S(P)&&(P=m),b=b.add(P),I=q(I,w)}return new B(b,I)}t.A=function(I){return L(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),E=[],A=0;A<v;A++)E[A]=this.i(A)&I.i(A);return new o(E,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),E=[],A=0;A<v;A++)E[A]=this.i(A)|I.i(A);return new o(E,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),E=[],A=0;A<v;A++)E[A]=this.i(A)^I.i(A);return new o(E,this.h^I.h)};function Z(I){for(var v=I.g.length+1,E=[],A=0;A<v;A++)E[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(E,I.h)}function fe(I,v){var E=v>>5;v%=32;for(var A=I.g.length-E,b=[],P=0;P<A;P++)b[P]=0<v?I.i(P+E)>>>v|I.i(P+E+1)<<32-v:I.i(P+E);return new o(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,p_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Tr=o}).apply(typeof Yd<"u"?Yd:typeof self<"u"?self:typeof window<"u"?window:{});var Go=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var m_,Ai,g_,sa,jl,__,y_,v_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof Go=="object"&&Go];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var C=a[g];if(!(C in d))break e;d=d[C]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,C={next:function(){if(!g&&d<a.length){var N=d++;return{value:h(N,a[N]),done:!1}}return g=!0,{done:!0,value:void 0}}};return C[Symbol.iterator]=function(){return C},C}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var C=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(C,g),a.apply(h,C)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function _(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function S(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,C,N){for(var W=Array(arguments.length-2),Ve=2;Ve<arguments.length;Ve++)W[Ve-2]=arguments[Ve];return h.prototype[C].apply(g,W)}}function k(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function V(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const C=a.length||0,N=g.length||0;a.length=C+N;for(let W=0;W<N;W++)a[C+W]=g[W]}else a.push(g)}}class q{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function U(a){return/^[\s\xa0]*$/.test(a)}function B(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var Z=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function fe(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function I(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function v(a){const h={};for(const d in a)h[d]=a[d];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let d,g;for(let C=1;C<arguments.length;C++){g=arguments[C];for(d in g)a[d]=g[d];for(let N=0;N<E.length;N++)d=E[N],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function b(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function P(a){c.setTimeout(()=>{throw a},0)}function w(){var a=Ft;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class At{constructor(){this.h=this.g=null}add(h,d){const g=Kt.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var Kt=new q(()=>new Qe,a=>a.reset());class Qe{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let we,ye=!1,Ft=new At,tn=()=>{const a=c.Promise.resolve(void 0);we=()=>{a.then(Qt)}};var Qt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(d){P(d)}var h=Kt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}ye=!1};function Fe(){this.s=this.s,this.C=this.C}Fe.prototype.s=!1,Fe.prototype.ma=function(){this.s||(this.s=!0,this.N())},Fe.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ue(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Ue.prototype.h=function(){this.defaultPrevented=!0};var sr=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,h),c.removeEventListener("test",d,h)}catch{}return a})();function Ut(a,h){if(Ue.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Z){e:{try{L(h.nodeName);var C=!0;break e}catch{}C=!1}C||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Vt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ut.aa.h.call(this)}}S(Ut,Ue);var Vt={2:"touch",3:"pen",4:"mouse"};Ut.prototype.h=function(){Ut.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),X=0;function Q(a,h,d,g,C){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=C,this.key=++X,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function me(a){this.src=a,this.g={},this.h=0}me.prototype.add=function(a,h,d,g,C){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var W=T(a,h,g,C);return-1<W?(h=a[W],d||(h.fa=!1)):(h=new Q(h,this.src,N,!!g,C),h.fa=d,a.push(h)),h};function y(a,h){var d=h.type;if(d in a.g){var g=a.g[d],C=Array.prototype.indexOf.call(g,h,void 0),N;(N=0<=C)&&Array.prototype.splice.call(g,C,1),N&&(ee(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function T(a,h,d,g){for(var C=0;C<a.length;++C){var N=a[C];if(!N.da&&N.listener==h&&N.capture==!!d&&N.ha==g)return C}return-1}var R="closure_lm_"+(1e6*Math.random()|0),O={};function j(a,h,d,g,C){if(Array.isArray(h)){for(var N=0;N<h.length;N++)j(a,h[N],d,g,C);return null}return d=ae(d),a&&a[M]?a.K(h,d,u(g)?!!g.capture:!1,C):x(a,h,d,!1,g,C)}function x(a,h,d,g,C,N){if(!h)throw Error("Invalid event type");var W=u(C)?!!C.capture:!!C,Ve=J(a);if(Ve||(a[R]=Ve=new me(a)),d=Ve.add(h,d,g,W,N),d.proxy)return d;if(g=K(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)sr||(C=W),C===void 0&&(C=!1),a.addEventListener(h.toString(),g,C);else if(a.attachEvent)a.attachEvent($(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function K(){function a(d){return h.call(a.src,a.listener,d)}const h=ie;return a}function G(a,h,d,g,C){if(Array.isArray(h))for(var N=0;N<h.length;N++)G(a,h[N],d,g,C);else g=u(g)?!!g.capture:!!g,d=ae(d),a&&a[M]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],d=T(N,d,g,C),-1<d&&(ee(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=J(a))&&(h=a.g[h.toString()],a=-1,h&&(a=T(h,d,g,C)),(d=-1<a?h[a]:null)&&H(d))}function H(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[M])y(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent($(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=J(h))?(y(d,a),d.h==0&&(d.src=null,h[R]=null)):ee(a)}}}function $(a){return a in O?O[a]:O[a]="on"+a}function ie(a,h){if(a.da)a=!0;else{h=new Ut(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&H(a),a=d.call(g,h)}return a}function J(a){return a=a[R],a instanceof me?a:null}var ne="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(a){return typeof a=="function"?a:(a[ne]||(a[ne]=function(h){return a.handleEvent(h)}),a[ne])}function oe(){Fe.call(this),this.i=new me(this),this.M=this,this.F=null}S(oe,Fe),oe.prototype[M]=!0,oe.prototype.removeEventListener=function(a,h,d,g){G(this,a,h,d,g)};function de(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Ue(h,a);else if(h instanceof Ue)h.target=h.target||a;else{var C=h;h=new Ue(g,a),A(h,C)}if(C=!0,d)for(var N=d.length-1;0<=N;N--){var W=h.g=d[N];C=Ae(W,g,!0,h)&&C}if(W=h.g=a,C=Ae(W,g,!0,h)&&C,C=Ae(W,g,!1,h)&&C,d)for(N=0;N<d.length;N++)W=h.g=d[N],C=Ae(W,g,!1,h)&&C}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)ee(d[g]);delete a.g[h],a.h--}}this.F=null},oe.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},oe.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function Ae(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var C=!0,N=0;N<h.length;++N){var W=h[N];if(W&&!W.da&&W.capture==d){var Ve=W.listener,at=W.ha||W.src;W.fa&&y(a.i,W),C=Ve.call(at,g)!==!1&&C}}return C&&!g.defaultPrevented}function je(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function Je(a){a.g=je(()=>{a.g=null,a.i&&(a.i=!1,Je(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Jt extends Fe{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Je(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function mt(a){Fe.call(this),this.h=a,this.g={}}S(mt,Fe);var ir=[];function ni(a){fe(a.g,function(h,d){this.g.hasOwnProperty(d)&&H(h)},a),a.g={}}mt.prototype.N=function(){mt.aa.N.call(this),ni(this)},mt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ot=c.JSON.stringify,Yt=c.JSON.parse,bo=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ls(){}ls.prototype.h=null;function Dh(a){return a.h||(a.h=a.i())}function Oh(){}var ri={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Nc(){Ue.call(this,"d")}S(Nc,Ue);function Vc(){Ue.call(this,"c")}S(Vc,Ue);var Fr={},xh=null;function Ro(){return xh=xh||new oe}Fr.La="serverreachability";function Mh(a){Ue.call(this,Fr.La,a)}S(Mh,Ue);function si(a){const h=Ro();de(h,new Mh(h))}Fr.STAT_EVENT="statevent";function Lh(a,h){Ue.call(this,Fr.STAT_EVENT,a),this.stat=h}S(Lh,Ue);function bt(a){const h=Ro();de(h,new Lh(h,a))}Fr.Ma="timingevent";function Fh(a,h){Ue.call(this,Fr.Ma,a),this.size=h}S(Fh,Ue);function ii(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function oi(){this.g=!0}oi.prototype.xa=function(){this.g=!1};function Ky(a,h,d,g,C,N){a.info(function(){if(a.g)if(N)for(var W="",Ve=N.split("&"),at=0;at<Ve.length;at++){var be=Ve[at].split("=");if(1<be.length){var gt=be[0];be=be[1];var _t=gt.split("_");W=2<=_t.length&&_t[1]=="type"?W+(gt+"="+be+"&"):W+(gt+"=redacted&")}}else W=null;else W=N;return"XMLHTTP REQ ("+g+") [attempt "+C+"]: "+h+`
`+d+`
`+W})}function Qy(a,h,d,g,C,N,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+C+"]: "+h+`
`+d+`
`+N+" "+W})}function us(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Yy(a,d)+(g?" "+g:"")})}function Jy(a,h){a.info(function(){return"TIMEOUT: "+h})}oi.prototype.info=function(){};function Yy(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var C=g[1];if(Array.isArray(C)&&!(1>C.length)){var N=C[0];if(N!="noop"&&N!="stop"&&N!="close")for(var W=1;W<C.length;W++)C[W]=""}}}}return ot(d)}catch{return h}}var So={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Uh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Dc;function Po(){}S(Po,ls),Po.prototype.g=function(){return new XMLHttpRequest},Po.prototype.i=function(){return{}},Dc=new Po;function or(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new mt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new jh}function jh(){this.i=null,this.g="",this.h=!1}var Bh={},Oc={};function xc(a,h,d){a.L=1,a.v=Vo(Dn(h)),a.m=d,a.P=!0,$h(a,null)}function $h(a,h){a.F=Date.now(),Co(a),a.A=Dn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),nf(d.i,"t",g),a.C=0,d=a.j.J,a.h=new jh,a.g=wf(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Jt(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var C="readystatechange";Array.isArray(C)||(C&&(ir[0]=C.toString()),C=ir);for(var N=0;N<C.length;N++){var W=j(d,C[N],g||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),si(),Ky(a.i,a.u,a.A,a.l,a.R,a.m)}or.prototype.ca=function(a){a=a.target;const h=this.M;h&&On(a)==3?h.j():this.Y(a)},or.prototype.Y=function(a){try{if(a==this.g)e:{const _t=On(this.g);var h=this.g.Ba();const ds=this.g.Z();if(!(3>_t)&&(_t!=3||this.g&&(this.h.h||this.g.oa()||uf(this.g)))){this.J||_t!=4||h==7||(h==8||0>=ds?si(3):si(2)),Mc(this);var d=this.g.Z();this.X=d;t:if(qh(this)){var g=uf(this.g);a="";var C=g.length,N=On(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ur(this),ai(this);var W="";break t}this.h.i=new c.TextDecoder}for(h=0;h<C;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(N&&h==C-1)});g.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=d==200,Qy(this.i,this.u,this.A,this.l,this.R,_t,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ve,at=this.g;if((Ve=at.g?at.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Ve)){var be=Ve;break t}}be=null}if(d=be)us(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Lc(this,d);else{this.o=!1,this.s=3,bt(12),Ur(this),ai(this);break e}}if(this.P){d=!0;let nn;for(;!this.J&&this.C<W.length;)if(nn=Xy(this,W),nn==Oc){_t==4&&(this.s=4,bt(14),d=!1),us(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==Bh){this.s=4,bt(15),us(this.i,this.l,W,"[Invalid Chunk]"),d=!1;break}else us(this.i,this.l,nn,null),Lc(this,nn);if(qh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),_t!=4||W.length!=0||this.h.h||(this.s=1,bt(16),d=!1),this.o=this.o&&d,!d)us(this.i,this.l,W,"[Invalid Chunked Response]"),Ur(this),ai(this);else if(0<W.length&&!this.W){this.W=!0;var gt=this.j;gt.g==this&&gt.ba&&!gt.M&&(gt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),qc(gt),gt.M=!0,bt(11))}}else us(this.i,this.l,W,null),Lc(this,W);_t==4&&Ur(this),this.o&&!this.J&&(_t==4?_f(this.j,this):(this.o=!1,Co(this)))}else mv(this.g),d==400&&0<W.indexOf("Unknown SID")?(this.s=3,bt(12)):(this.s=0,bt(13)),Ur(this),ai(this)}}}catch{}finally{}};function qh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Xy(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Oc:(d=Number(h.substring(d,g)),isNaN(d)?Bh:(g+=1,g+d>h.length?Oc:(h=h.slice(g,g+d),a.C=g+d,h)))}or.prototype.cancel=function(){this.J=!0,Ur(this)};function Co(a){a.S=Date.now()+a.I,Hh(a,a.I)}function Hh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ii(m(a.ba,a),h)}function Mc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}or.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Jy(this.i,this.A),this.L!=2&&(si(),bt(17)),Ur(this),this.s=2,ai(this)):Hh(this,this.S-a)};function ai(a){a.j.G==0||a.J||_f(a.j,a)}function Ur(a){Mc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,ni(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Lc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Fc(d.h,a))){if(!a.K&&Fc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var C=g;if(C[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Fo(d),Mo(d);else break e;$c(d),bt(18)}}else d.za=C[1],0<d.za-d.T&&37500>C[2]&&d.F&&d.v==0&&!d.C&&(d.C=ii(m(d.Za,d),6e3));if(1>=zh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else Br(d,11)}else if((a.K||d.g==a)&&Fo(d),!U(h))for(C=d.Da.g.parse(h),h=0;h<C.length;h++){let be=C[h];if(d.T=be[0],be=be[1],d.G==2)if(be[0]=="c"){d.K=be[1],d.ia=be[2];const gt=be[3];gt!=null&&(d.la=gt,d.j.info("VER="+d.la));const _t=be[4];_t!=null&&(d.Aa=_t,d.j.info("SVER="+d.Aa));const ds=be[5];ds!=null&&typeof ds=="number"&&0<ds&&(g=1.5*ds,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const nn=a.g;if(nn){const jo=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(jo){var N=g.h;N.g||jo.indexOf("spdy")==-1&&jo.indexOf("quic")==-1&&jo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Uc(N,N.h),N.h=null))}if(g.D){const Hc=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Hc&&(g.ya=Hc,xe(g.I,g.D,Hc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var W=a;if(g.qa=Ef(g,g.J?g.ia:null,g.W),W.K){Kh(g.h,W);var Ve=W,at=g.L;at&&(Ve.I=at),Ve.B&&(Mc(Ve),Co(Ve)),g.g=W}else mf(g);0<d.i.length&&Lo(d)}else be[0]!="stop"&&be[0]!="close"||Br(d,7);else d.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?Br(d,7):Bc(d):be[0]!="noop"&&d.l&&d.l.ta(be),d.v=0)}}si(4)}catch{}}var Zy=class{constructor(a,h){this.g=a,this.map=h}};function Gh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Wh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function zh(a){return a.h?1:a.g?a.g.size:0}function Fc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Uc(a,h){a.g?a.g.add(h):a.h=h}function Kh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Gh.prototype.cancel=function(){if(this.i=Qh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Qh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return k(a.i)}function ev(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function tv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function Jh(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=tv(a),g=ev(a),C=g.length,N=0;N<C;N++)h.call(void 0,g[N],d&&d[N],a)}var Yh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function nv(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),C=null;if(0<=g){var N=a[d].substring(0,g);C=a[d].substring(g+1)}else N=a[d];h(N,C?decodeURIComponent(C.replace(/\+/g," ")):"")}}}function jr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof jr){this.h=a.h,ko(this,a.j),this.o=a.o,this.g=a.g,No(this,a.s),this.l=a.l;var h=a.i,d=new ui;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Xh(this,d),this.m=a.m}else a&&(h=String(a).match(Yh))?(this.h=!1,ko(this,h[1]||"",!0),this.o=ci(h[2]||""),this.g=ci(h[3]||"",!0),No(this,h[4]),this.l=ci(h[5]||"",!0),Xh(this,h[6]||"",!0),this.m=ci(h[7]||"")):(this.h=!1,this.i=new ui(null,this.h))}jr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(li(h,Zh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(li(h,Zh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(li(d,d.charAt(0)=="/"?iv:sv,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",li(d,av)),a.join("")};function Dn(a){return new jr(a)}function ko(a,h,d){a.j=d?ci(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function No(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Xh(a,h,d){h instanceof ui?(a.i=h,cv(a.i,a.h)):(d||(h=li(h,ov)),a.i=new ui(h,a.h))}function xe(a,h,d){a.i.set(h,d)}function Vo(a){return xe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function ci(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function li(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,rv),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function rv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Zh=/[#\/\?@]/g,sv=/[#\?:]/g,iv=/[#\?]/g,ov=/[#\?@]/g,av=/#/g;function ui(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function ar(a){a.g||(a.g=new Map,a.h=0,a.i&&nv(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=ui.prototype,t.add=function(a,h){ar(this),this.i=null,a=hs(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function ef(a,h){ar(a),h=hs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function tf(a,h){return ar(a),h=hs(a,h),a.g.has(h)}t.forEach=function(a,h){ar(this),this.g.forEach(function(d,g){d.forEach(function(C){a.call(h,C,g,this)},this)},this)},t.na=function(){ar(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const C=a[g];for(let N=0;N<C.length;N++)d.push(h[g])}return d},t.V=function(a){ar(this);let h=[];if(typeof a=="string")tf(this,a)&&(h=h.concat(this.g.get(hs(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return ar(this),this.i=null,a=hs(this,a),tf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function nf(a,h,d){ef(a,h),0<d.length&&(a.i=null,a.g.set(hs(a,h),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const N=encodeURIComponent(String(g)),W=this.V(g);for(g=0;g<W.length;g++){var C=N;W[g]!==""&&(C+="="+encodeURIComponent(String(W[g]))),a.push(C)}}return this.i=a.join("&")};function hs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function cv(a,h){h&&!a.j&&(ar(a),a.i=null,a.g.forEach(function(d,g){var C=g.toLowerCase();g!=C&&(ef(this,g),nf(this,C,d))},a)),a.j=h}function lv(a,h){const d=new oi;if(c.Image){const g=new Image;g.onload=_(cr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=_(cr,d,"TestLoadImage: error",!1,h,g),g.onabort=_(cr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(cr,d,"TestLoadImage: timeout",!1,h,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function uv(a,h){const d=new oi,g=new AbortController,C=setTimeout(()=>{g.abort(),cr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(C),N.ok?cr(d,"TestPingServer: ok",!0,h):cr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(C),cr(d,"TestPingServer: error",!1,h)})}function cr(a,h,d,g,C){try{C&&(C.onload=null,C.onerror=null,C.onabort=null,C.ontimeout=null),g(d)}catch{}}function hv(){this.g=new bo}function fv(a,h,d){const g=d||"";try{Jh(a,function(C,N){let W=C;u(C)&&(W=ot(C)),h.push(g+N+"="+encodeURIComponent(W))})}catch(C){throw h.push(g+"type="+encodeURIComponent("_badmap")),C}}function Do(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Do,ls),Do.prototype.g=function(){return new Oo(this.l,this.j)},Do.prototype.i=(function(a){return function(){return a}})({});function Oo(a,h){oe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Oo,oe),t=Oo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,fi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,hi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,fi(this)),this.g&&(this.readyState=3,fi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;rf(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function rf(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?hi(this):fi(this),this.readyState==3&&rf(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,hi(this))},t.Qa=function(a){this.g&&(this.response=a,hi(this))},t.ga=function(){this.g&&hi(this)};function hi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,fi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function fi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Oo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function sf(a){let h="";return fe(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function jc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=sf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):xe(a,h,d))}function qe(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(qe,oe);var dv=/^https?$/i,pv=["POST","PUT"];t=qe.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Dc.g(),this.v=this.o?Dh(this.o):Dh(Dc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){of(this,N);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var C in g)d.set(C,g[C]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())d.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),C=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(pv,h,void 0))||g||C||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,W]of d)this.g.setRequestHeader(N,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{lf(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){of(this,N)}};function of(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,af(a),xo(a)}function af(a){a.A||(a.A=!0,de(a,"complete"),de(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,de(this,"complete"),de(this,"abort"),xo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),xo(this,!0)),qe.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?cf(this):this.bb())},t.bb=function(){cf(this)};function cf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||On(a)!=4||a.Z()!=2)){if(a.u&&On(a)==4)je(a.Ea,0,a);else if(de(a,"readystatechange"),On(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=W===0){var C=String(a.D).match(Yh)[1]||null;!C&&c.self&&c.self.location&&(C=c.self.location.protocol.slice(0,-1)),g=!dv.test(C?C.toLowerCase():"")}d=g}if(d)de(a,"complete"),de(a,"success");else{a.m=6;try{var N=2<On(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",af(a)}}finally{xo(a)}}}}function xo(a,h){if(a.g){lf(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||de(a,"ready");try{d.onreadystatechange=g}catch{}}}function lf(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function On(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<On(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Yt(h)}};function uf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function mv(a){const h={};a=(a.g&&2<=On(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(U(a[g]))continue;var d=b(a[g]);const C=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=h[C]||[];h[C]=N,N.push(d)}I(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function di(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function hf(a){this.Aa=0,this.i=[],this.j=new oi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=di("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=di("baseRetryDelayMs",5e3,a),this.cb=di("retryDelaySeedMs",1e4,a),this.Wa=di("forwardChannelMaxRetries",2,a),this.wa=di("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Gh(a&&a.concurrentRequestLimit),this.Da=new hv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=hf.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){bt(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=Ef(this,null,this.W),Lo(this)};function Bc(a){if(ff(a),a.G==3){var h=a.U++,d=Dn(a.I);if(xe(d,"SID",a.K),xe(d,"RID",h),xe(d,"TYPE","terminate"),pi(a,d),h=new or(a,a.j,h),h.L=2,h.v=Vo(Dn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=h.v,d=!0),d||(h.g=wf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Co(h)}vf(a)}function Mo(a){a.g&&(qc(a),a.g.cancel(),a.g=null)}function ff(a){Mo(a),a.u&&(c.clearTimeout(a.u),a.u=null),Fo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Lo(a){if(!Wh(a.h)&&!a.s){a.s=!0;var h=a.Ga;we||tn(),ye||(we(),ye=!0),Ft.add(h,a),a.B=0}}function gv(a,h){return zh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ii(m(a.Ga,a,h),yf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const C=new or(this,this.j,a);let N=this.o;if(this.S&&(N?(N=v(N),A(N,this.S)):N=this.S),this.m!==null||this.O||(C.H=N,N=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=pf(this,C,h),d=Dn(this.I),xe(d,"RID",a),xe(d,"CVER",22),this.D&&xe(d,"X-HTTP-Session-Id",this.D),pi(this,d),N&&(this.O?h="headers="+encodeURIComponent(String(sf(N)))+"&"+h:this.m&&jc(d,this.m,N)),Uc(this.h,C),this.Ua&&xe(d,"TYPE","init"),this.P?(xe(d,"$req",h),xe(d,"SID","null"),C.T=!0,xc(C,d,null)):xc(C,d,h),this.G=2}}else this.G==3&&(a?df(this,a):this.i.length==0||Wh(this.h)||df(this))};function df(a,h){var d;h?d=h.l:d=a.U++;const g=Dn(a.I);xe(g,"SID",a.K),xe(g,"RID",d),xe(g,"AID",a.T),pi(a,g),a.m&&a.o&&jc(g,a.m,a.o),d=new or(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=pf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Uc(a.h,d),xc(d,g,h)}function pi(a,h){a.H&&fe(a.H,function(d,g){xe(h,g,d)}),a.l&&Jh({},function(d,g){xe(h,g,d)})}function pf(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var C=a.i;let N=-1;for(;;){const W=["count="+d];N==-1?0<d?(N=C[0].g,W.push("ofs="+N)):N=0:W.push("ofs="+N);let Ve=!0;for(let at=0;at<d;at++){let be=C[at].g;const gt=C[at].map;if(be-=N,0>be)N=Math.max(0,C[at].g-100),Ve=!1;else try{fv(gt,W,"req"+be+"_")}catch{g&&g(gt)}}if(Ve){g=W.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function mf(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;we||tn(),ye||(we(),ye=!0),Ft.add(h,a),a.v=0}}function $c(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ii(m(a.Fa,a),yf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,gf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ii(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,bt(10),Mo(this),gf(this))};function qc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function gf(a){a.g=new or(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Dn(a.qa);xe(h,"RID","rpc"),xe(h,"SID",a.K),xe(h,"AID",a.T),xe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&xe(h,"TO",a.ja),xe(h,"TYPE","xmlhttp"),pi(a,h),a.m&&a.o&&jc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Vo(Dn(h)),d.m=null,d.P=!0,$h(d,a)}t.Za=function(){this.C!=null&&(this.C=null,Mo(this),$c(this),bt(19))};function Fo(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function _f(a,h){var d=null;if(a.g==h){Fo(a),qc(a),a.g=null;var g=2}else if(Fc(a.h,h))d=h.D,Kh(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var C=a.B;g=Ro(),de(g,new Fh(g,d)),Lo(a)}else mf(a);else if(C=h.s,C==3||C==0&&0<h.X||!(g==1&&gv(a,h)||g==2&&$c(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),C){case 1:Br(a,5);break;case 4:Br(a,10);break;case 3:Br(a,6);break;default:Br(a,2)}}}function yf(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function Br(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const C=!g;g=new jr(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||ko(g,"https"),Vo(g),C?lv(g.toString(),d):uv(g.toString(),d)}else bt(2);a.G=0,a.l&&a.l.sa(h),vf(a),ff(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),bt(2)):(this.j.info("Failed to ping google.com"),bt(1))};function vf(a){if(a.G=0,a.ka=[],a.l){const h=Qh(a.h);(h.length!=0||a.i.length!=0)&&(V(a.ka,h),V(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function Ef(a,h,d){var g=d instanceof jr?Dn(d):new jr(d);if(g.g!="")h&&(g.g=h+"."+g.g),No(g,g.s);else{var C=c.location;g=C.protocol,h=h?h+"."+C.hostname:C.hostname,C=+C.port;var N=new jr(null);g&&ko(N,g),h&&(N.g=h),C&&No(N,C),d&&(N.l=d),g=N}return d=a.D,h=a.ya,d&&h&&xe(g,d,h),xe(g,"VER",a.la),pi(a,g),g}function wf(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new qe(new Do({eb:d})):new qe(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function Tf(){}t=Tf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Uo(){}Uo.prototype.g=function(a,h){return new jt(a,h)};function jt(a,h){oe.call(this),this.g=new hf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!U(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!U(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new fs(this)}S(jt,oe),jt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},jt.prototype.close=function(){Bc(this.g)},jt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=ot(a),a=d);h.i.push(new Zy(h.Ya++,a)),h.G==3&&Lo(h)},jt.prototype.N=function(){this.g.l=null,delete this.j,Bc(this.g),delete this.g,jt.aa.N.call(this)};function If(a){Nc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(If,Nc);function Af(){Vc.call(this),this.status=1}S(Af,Vc);function fs(a){this.g=a}S(fs,Tf),fs.prototype.ua=function(){de(this.g,"a")},fs.prototype.ta=function(a){de(this.g,new If(a))},fs.prototype.sa=function(a){de(this.g,new Af)},fs.prototype.ra=function(){de(this.g,"b")},Uo.prototype.createWebChannel=Uo.prototype.g,jt.prototype.send=jt.prototype.o,jt.prototype.open=jt.prototype.m,jt.prototype.close=jt.prototype.close,v_=function(){return new Uo},y_=function(){return Ro()},__=Fr,jl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},So.NO_ERROR=0,So.TIMEOUT=8,So.HTTP_ERROR=6,sa=So,Uh.COMPLETE="complete",g_=Uh,Oh.EventType=ri,ri.OPEN="a",ri.CLOSE="b",ri.ERROR="c",ri.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Ai=Oh,qe.prototype.listenOnce=qe.prototype.L,qe.prototype.getLastError=qe.prototype.Ka,qe.prototype.getLastErrorCode=qe.prototype.Ba,qe.prototype.getStatus=qe.prototype.Z,qe.prototype.getResponseJson=qe.prototype.Oa,qe.prototype.getResponseText=qe.prototype.oa,qe.prototype.send=qe.prototype.ea,qe.prototype.setWithCredentials=qe.prototype.Ha,m_=qe}).apply(typeof Go<"u"?Go:typeof self<"u"?self:typeof window<"u"?window:{});const Xd="@firebase/firestore",Zd="4.8.0";/**
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
 */class vt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}vt.UNAUTHENTICATED=new vt(null),vt.GOOGLE_CREDENTIALS=new vt("google-credentials-uid"),vt.FIRST_PARTY=new vt("first-party-uid"),vt.MOCK_USER=new vt("mock-user");/**
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
 */let Qs="11.10.0";/**
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
 */const ns=new Cu("@firebase/firestore");function _s(){return ns.logLevel}function Y(t,...e){if(ns.logLevel<=ve.DEBUG){const n=e.map(Bu);ns.debug(`Firestore (${Qs}): ${t}`,...n)}}function Yn(t,...e){if(ns.logLevel<=ve.ERROR){const n=e.map(Bu);ns.error(`Firestore (${Qs}): ${t}`,...n)}}function Sr(t,...e){if(ns.logLevel<=ve.WARN){const n=e.map(Bu);ns.warn(`Firestore (${Qs}): ${t}`,...n)}}function Bu(t){if(typeof t=="string")return t;try{/**
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
 */function se(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,E_(t,r,n)}function E_(t,e,n){let r=`FIRESTORE (${Qs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Yn(r),new Error(r)}function Ie(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||E_(e,s,r)}function he(t,e){return t}/**
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
 */class An{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
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
 */class w_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Qb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(vt.UNAUTHENTICATED)))}shutdown(){}}class Jb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Yb{constructor(e){this.t=e,this.currentUser=vt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ie(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new An;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new An,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new An)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string",31837,{l:r}),new w_(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string",2055,{h:e}),new vt(e)}}class Xb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=vt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Zb{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Xb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(vt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class ep{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class eR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,$t(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ie(this.o===void 0,3512);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new ep(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ie(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new ep(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function tR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function T_(){return new TextEncoder}/**
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
 */class $u{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=tR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function Bl(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ge(r,s);{const i=T_(),o=nR(i.encode(tp(t,n)),i.encode(tp(e,n)));return o!==0?o:ge(r,s)}}n+=r>65535?2:1}return ge(t.length,e.length)}function tp(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function nR(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ge(t[n],e[n]);return ge(t.length,e.length)}function Us(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const np="__name__";class mn{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&se(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return mn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=mn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ge(e.length,n.length)}static compareSegments(e,n){const r=mn.isNumericId(e),s=mn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?mn.extractNumericId(e).compare(mn.extractNumericId(n)):Bl(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Tr.fromString(e.substring(4,e.length-2))}}class Ne extends mn{construct(e,n,r){return new Ne(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Ne(n)}static emptyPath(){return new Ne([])}}const rR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ft extends mn{construct(e,n,r){return new ft(e,n,r)}static isValidIdentifier(e){return rR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ft.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===np}static keyField(){return new ft([np])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new z(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new z(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ft(n)}static emptyPath(){return new ft([])}}/**
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
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(Ne.fromString(e))}static fromName(e){return new re(Ne.fromString(e).popFirst(5))}static empty(){return new re(Ne.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ne.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ne.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new Ne(e.slice()))}}/**
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
 */function I_(t,e,n){if(!n)throw new z(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function sR(t,e,n,r){if(e===!0&&r===!0)throw new z(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rp(t){if(!re.isDocumentKey(t))throw new z(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sp(t){if(re.isDocumentKey(t))throw new z(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function A_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function lc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se(12329,{type:typeof t})}function Lt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=lc(t);throw new z(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function iR(t,e){if(e<=0)throw new z(D.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Ze(t,e){const n={typeString:t};return e&&(n.value=e),n}function go(t,e){if(!A_(t))throw new z(D.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new z(D.INVALID_ARGUMENT,n);return!0}/**
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
 */const ip=-62135596800,op=1e6;class _e{static now(){return _e.fromMillis(Date.now())}static fromDate(e){return _e.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*op);return new _e(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<ip)throw new z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/op}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:_e._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(go(e,_e._jsonSchema))return new _e(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ip;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}_e._jsonSchemaVersion="firestore/timestamp/1.0",_e._jsonSchema={type:Ze("string",_e._jsonSchemaVersion),seconds:Ze("number"),nanoseconds:Ze("number")};/**
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
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new _e(0,0))}static max(){return new ce(new _e(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Ji=-1;function oR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new _e(n+1,0):new _e(n,r));return new Pr(s,re.empty(),e)}function aR(t){return new Pr(t.readTime,t.key,Ji)}class Pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pr(ce.min(),re.empty(),Ji)}static max(){return new Pr(ce.max(),re.empty(),Ji)}}function cR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const lR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class uR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Js(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==lR)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):F.reject(n)}static resolve(e){return new F(((n,r)=>{n(e)}))}static reject(e){return new F(((n,r)=>{r(e)}))}static waitFor(e){return new F(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next((s=>s?F.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new F(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((f=>{o[u]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new F(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function hR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Ys(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class uc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}uc.ue=-1;/**
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
 */const qu=-1;function _o(t){return t==null}function Pa(t){return t===0&&1/t==-1/0}function fR(t){return typeof t=="number"&&Number.isInteger(t)&&!Pa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const b_="";function dR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=ap(e)),e=pR(t.get(n),e);return ap(e)}function pR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case b_:n+="";break;default:n+=i}}return n}function ap(t){return t+b_+""}/**
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
 */function cp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Mr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function R_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class $e{constructor(e,n){this.comparator=e,this.root=n||ut.EMPTY}insert(e,n){return new $e(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ut.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ut.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Wo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Wo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Wo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Wo(this.root,e,this.comparator,!0)}}class Wo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ut{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??ut.RED,this.left=s??ut.EMPTY,this.right=i??ut.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new ut(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ut.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return ut.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ut.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ut.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw se(27949);return e+(this.isRed()?0:1)}}ut.EMPTY=null,ut.RED=!0,ut.BLACK=!1;ut.EMPTY=new class{constructor(){this.size=0}get key(){throw se(57766)}get value(){throw se(16141)}get color(){throw se(16727)}get left(){throw se(29726)}get right(){throw se(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new ut(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class nt{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new lp(this.data.getIterator())}getIteratorFrom(e){return new lp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof nt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new nt(this.comparator);return n.data=e,n}}class lp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Wt{constructor(e){this.fields=e,e.sort(ft.comparator)}static empty(){return new Wt([])}unionWith(e){let n=new nt(ft.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Wt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Us(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class S_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class pt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new S_("Invalid base64 string: "+i):i}})(e);return new pt(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new pt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}pt.EMPTY_BYTE_STRING=new pt("");const mR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(t){if(Ie(!!t,39018),typeof t=="string"){let e=0;const n=mR.exec(t);if(Ie(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:ze(t.seconds),nanos:ze(t.nanos)}}function ze(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function kr(t){return typeof t=="string"?pt.fromBase64String(t):pt.fromUint8Array(t)}/**
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
 */const P_="server_timestamp",C_="__type__",k_="__previous_value__",N_="__local_write_time__";function Hu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[C_])===null||n===void 0?void 0:n.stringValue)===P_}function hc(t){const e=t.mapValue.fields[k_];return Hu(e)?hc(e):e}function Yi(t){const e=Cr(t.mapValue.fields[N_].timestampValue);return new _e(e.seconds,e.nanos)}/**
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
 */class gR{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const Ca="(default)";class Xi{constructor(e,n){this.projectId=e,this.database=n||Ca}static empty(){return new Xi("","")}get isDefaultDatabase(){return this.database===Ca}isEqual(e){return e instanceof Xi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const V_="__type__",_R="__max__",zo={mapValue:{}},D_="__vector__",ka="value";function Nr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Hu(t)?4:vR(t)?9007199254740991:yR(t)?10:11:se(28295,{value:t})}function kn(t,e){if(t===e)return!0;const n=Nr(t);if(n!==Nr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Yi(t).isEqual(Yi(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Cr(s.timestampValue),c=Cr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return kr(s.bytesValue).isEqual(kr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return ze(s.geoPointValue.latitude)===ze(i.geoPointValue.latitude)&&ze(s.geoPointValue.longitude)===ze(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return ze(s.integerValue)===ze(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=ze(s.doubleValue),c=ze(i.doubleValue);return o===c?Pa(o)===Pa(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return Us(t.arrayValue.values||[],e.arrayValue.values||[],kn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(cp(o)!==cp(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!kn(o[l],c[l])))return!1;return!0})(t,e);default:return se(52216,{left:t})}}function Zi(t,e){return(t.values||[]).find((n=>kn(n,e)))!==void 0}function js(t,e){if(t===e)return 0;const n=Nr(t),r=Nr(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=ze(i.integerValue||i.doubleValue),l=ze(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return up(t.timestampValue,e.timestampValue);case 4:return up(Yi(t),Yi(e));case 5:return Bl(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=kr(i),l=kr(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=ge(c[u],l[u]);if(f!==0)return f}return ge(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=ge(ze(i.latitude),ze(o.latitude));return c!==0?c:ge(ze(i.longitude),ze(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return hp(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var c,l,u,f;const p=i.fields||{},m=o.fields||{},_=(c=p[ka])===null||c===void 0?void 0:c.arrayValue,S=(l=m[ka])===null||l===void 0?void 0:l.arrayValue,k=ge(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:hp(_,S)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===zo.mapValue&&o===zo.mapValue)return 0;if(i===zo.mapValue)return 1;if(o===zo.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Bl(l[p],f[p]);if(m!==0)return m;const _=js(c[l[p]],u[f[p]]);if(_!==0)return _}return ge(l.length,f.length)})(t.mapValue,e.mapValue);default:throw se(23264,{le:n})}}function up(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Cr(t),r=Cr(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function hp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=js(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function Bs(t){return $l(t)}function $l(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Cr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return kr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return re.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=$l(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${$l(n.fields[o])}`;return s+"}"})(t.mapValue):se(61005,{value:t})}function ia(t){switch(Nr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=hc(t);return e?16+ia(e):16;case 5:return 2*t.stringValue.length;case 6:return kr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+ia(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Mr(r.fields,((i,o)=>{s+=i.length+ia(o)})),s})(t.mapValue);default:throw se(13486,{value:t})}}function fp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ql(t){return!!t&&"integerValue"in t}function Gu(t){return!!t&&"arrayValue"in t}function dp(t){return!!t&&"nullValue"in t}function pp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function oa(t){return!!t&&"mapValue"in t}function yR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[V_])===null||n===void 0?void 0:n.stringValue)===D_}function Mi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Mr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Mi(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Mi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function vR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===_R}/**
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
 */class kt{constructor(e){this.value=e}static empty(){return new kt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!oa(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Mi(n)}setAll(e){let n=ft.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Mi(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());oa(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return kn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];oa(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Mr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new kt(Mi(this.value))}}function O_(t){const e=[];return Mr(t.fields,((n,r)=>{const s=new ft([n]);if(oa(r)){const i=O_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Wt(e)}/**
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
 */class st{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new st(e,0,ce.min(),ce.min(),ce.min(),kt.empty(),0)}static newFoundDocument(e,n,r,s){return new st(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new st(e,2,n,ce.min(),ce.min(),kt.empty(),0)}static newUnknownDocument(e,n){return new st(e,3,n,ce.min(),ce.min(),kt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=kt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof st&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new st(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Na{constructor(e,n){this.position=e,this.inclusive=n}}function mp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=js(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function gp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!kn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class eo{constructor(e,n="asc"){this.field=e,this.dir=n}}function ER(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class x_{}class Xe extends x_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new TR(e,n,r):n==="array-contains"?new bR(e,r):n==="in"?new RR(e,r):n==="not-in"?new SR(e,r):n==="array-contains-any"?new PR(e,r):new Xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new IR(e,r):new AR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(js(n,this.value)):n!==null&&Nr(this.value)===Nr(n)&&this.matchesComparison(js(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class fn extends x_{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new fn(e,n)}matches(e){return M_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function M_(t){return t.op==="and"}function L_(t){return wR(t)&&M_(t)}function wR(t){for(const e of t.filters)if(e instanceof fn)return!1;return!0}function Hl(t){if(t instanceof Xe)return t.field.canonicalString()+t.op.toString()+Bs(t.value);if(L_(t))return t.filters.map((e=>Hl(e))).join(",");{const e=t.filters.map((n=>Hl(n))).join(",");return`${t.op}(${e})`}}function F_(t,e){return t instanceof Xe?(function(r,s){return s instanceof Xe&&r.op===s.op&&r.field.isEqual(s.field)&&kn(r.value,s.value)})(t,e):t instanceof fn?(function(r,s){return s instanceof fn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&F_(o,s.filters[c])),!0):!1})(t,e):void se(19439)}function U_(t){return t instanceof Xe?(function(n){return`${n.field.canonicalString()} ${n.op} ${Bs(n.value)}`})(t):t instanceof fn?(function(n){return n.op.toString()+" {"+n.getFilters().map(U_).join(" ,")+"}"})(t):"Filter"}class TR extends Xe{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class IR extends Xe{constructor(e,n){super(e,"in",n),this.keys=j_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class AR extends Xe{constructor(e,n){super(e,"not-in",n),this.keys=j_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function j_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>re.fromName(r.referenceValue)))}class bR extends Xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Gu(n)&&Zi(n.arrayValue,this.value)}}class RR extends Xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Zi(this.value.arrayValue,n)}}class SR extends Xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(Zi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Zi(this.value.arrayValue,n)}}class PR extends Xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Gu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Zi(this.value.arrayValue,r)))}}/**
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
 */class CR{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Pe=null}}function _p(t,e=null,n=[],r=[],s=null,i=null,o=null){return new CR(t,e,n,r,s,i,o)}function Wu(t){const e=he(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>Hl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),_o(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Bs(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Bs(r))).join(",")),e.Pe=n}return e.Pe}function zu(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ER(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!F_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!gp(t.startAt,e.startAt)&&gp(t.endAt,e.endAt)}function Gl(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Xs{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function kR(t,e,n,r,s,i,o,c){return new Xs(t,e,n,r,s,i,o,c)}function fc(t){return new Xs(t)}function yp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function B_(t){return t.collectionGroup!==null}function Li(t){const e=he(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new nt(ft.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new eo(i,r))})),n.has(ft.keyField().canonicalString())||e.Te.push(new eo(ft.keyField(),r))}return e.Te}function bn(t){const e=he(t);return e.Ie||(e.Ie=NR(e,Li(t))),e.Ie}function NR(t,e){if(t.limitType==="F")return _p(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new eo(s.field,i)}));const n=t.endAt?new Na(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Na(t.startAt.position,t.startAt.inclusive):null;return _p(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function Wl(t,e){const n=t.filters.concat([e]);return new Xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Va(t,e,n){return new Xs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function dc(t,e){return zu(bn(t),bn(e))&&t.limitType===e.limitType}function $_(t){return`${Wu(bn(t))}|lt:${t.limitType}`}function ys(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>U_(s))).join(", ")}]`),_o(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Bs(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Bs(s))).join(",")),`Target(${r})`})(bn(t))}; limitType=${t.limitType})`}function pc(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Li(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=mp(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,Li(r),s)||r.endAt&&!(function(o,c,l){const u=mp(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,Li(r),s))})(t,e)}function VR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function q_(t){return(e,n)=>{let r=!1;for(const s of Li(t)){const i=DR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function DR(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?js(l,u):se(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se(19790,{direction:t.dir})}}/**
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
 */class as{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Mr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return R_(this.inner)}size(){return this.innerSize}}/**
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
 */const OR=new $e(re.comparator);function Xn(){return OR}const H_=new $e(re.comparator);function bi(...t){let e=H_;for(const n of t)e=e.insert(n.key,n);return e}function G_(t){let e=H_;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function zr(){return Fi()}function W_(){return Fi()}function Fi(){return new as((t=>t.toString()),((t,e)=>t.isEqual(e)))}const xR=new $e(re.comparator),MR=new nt(re.comparator);function Ee(...t){let e=MR;for(const n of t)e=e.add(n);return e}const LR=new nt(ge);function FR(){return LR}/**
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
 */function Ku(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pa(e)?"-0":e}}function z_(t){return{integerValue:""+t}}function K_(t,e){return fR(e)?z_(e):Ku(t,e)}/**
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
 */class mc{constructor(){this._=void 0}}function UR(t,e,n){return t instanceof Da?(function(s,i){const o={fields:{[C_]:{stringValue:P_},[N_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Hu(i)&&(i=hc(i)),i&&(o.fields[k_]=i),{mapValue:o}})(n,e):t instanceof to?J_(t,e):t instanceof no?Y_(t,e):(function(s,i){const o=Q_(s,i),c=vp(o)+vp(s.Ee);return ql(o)&&ql(s.Ee)?z_(c):Ku(s.serializer,c)})(t,e)}function jR(t,e,n){return t instanceof to?J_(t,e):t instanceof no?Y_(t,e):n}function Q_(t,e){return t instanceof ro?(function(r){return ql(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Da extends mc{}class to extends mc{constructor(e){super(),this.elements=e}}function J_(t,e){const n=X_(e);for(const r of t.elements)n.some((s=>kn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class no extends mc{constructor(e){super(),this.elements=e}}function Y_(t,e){let n=X_(e);for(const r of t.elements)n=n.filter((s=>!kn(s,r)));return{arrayValue:{values:n}}}class ro extends mc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function vp(t){return ze(t.integerValue||t.doubleValue)}function X_(t){return Gu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class BR{constructor(e,n){this.field=e,this.transform=n}}function $R(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof to&&s instanceof to||r instanceof no&&s instanceof no?Us(r.elements,s.elements,kn):r instanceof ro&&s instanceof ro?kn(r.Ee,s.Ee):r instanceof Da&&s instanceof Da})(t.transform,e.transform)}class qR{constructor(e,n){this.version=e,this.transformResults=n}}class tt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tt}static exists(e){return new tt(void 0,e)}static updateTime(e){return new tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function aa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class gc{}function Z_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new vo(t.key,tt.none()):new yo(t.key,t.data,tt.none());{const n=t.data,r=kt.empty();let s=new nt(ft.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Lr(t.key,r,new Wt(s.toArray()),tt.none())}}function HR(t,e,n){t instanceof yo?(function(s,i,o){const c=s.value.clone(),l=wp(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Lr?(function(s,i,o){if(!aa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=wp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(ey(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Ui(t,e,n,r){return t instanceof yo?(function(i,o,c,l){if(!aa(i.precondition,o))return c;const u=i.value.clone(),f=Tp(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof Lr?(function(i,o,c,l){if(!aa(i.precondition,o))return c;const u=Tp(i.fieldTransforms,l,o),f=o.data;return f.setAll(ey(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return aa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function GR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Q_(r.transform,s||null);i!=null&&(n===null&&(n=kt.empty()),n.set(r.field,i))}return n||null}function Ep(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Us(r,s,((i,o)=>$R(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class yo extends gc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Lr extends gc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function ey(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function wp(t,e,n){const r=new Map;Ie(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,jR(o,c,n[s]))}return r}function Tp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,UR(i,o,e))}return r}class vo extends gc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ty extends gc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class WR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&HR(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Ui(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Ui(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=W_();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Z_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ce.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ee())}isEqual(e){return this.batchId===e.batchId&&Us(this.mutations,e.mutations,((n,r)=>Ep(n,r)))&&Us(this.baseMutations,e.baseMutations,((n,r)=>Ep(n,r)))}}class Qu{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ie(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return xR})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Qu(e,n,r,s)}}/**
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
 */class zR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class KR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Ye,Te;function ny(t){switch(t){case D.OK:return se(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return se(15467,{code:t})}}function ry(t){if(t===void 0)return Yn("GRPC error has no .code"),D.UNKNOWN;switch(t){case Ye.OK:return D.OK;case Ye.CANCELLED:return D.CANCELLED;case Ye.UNKNOWN:return D.UNKNOWN;case Ye.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Ye.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Ye.INTERNAL:return D.INTERNAL;case Ye.UNAVAILABLE:return D.UNAVAILABLE;case Ye.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Ye.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Ye.NOT_FOUND:return D.NOT_FOUND;case Ye.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Ye.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Ye.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Ye.ABORTED:return D.ABORTED;case Ye.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Ye.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Ye.DATA_LOSS:return D.DATA_LOSS;default:return se(39323,{code:t})}}(Te=Ye||(Ye={}))[Te.OK=0]="OK",Te[Te.CANCELLED=1]="CANCELLED",Te[Te.UNKNOWN=2]="UNKNOWN",Te[Te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Te[Te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Te[Te.NOT_FOUND=5]="NOT_FOUND",Te[Te.ALREADY_EXISTS=6]="ALREADY_EXISTS",Te[Te.PERMISSION_DENIED=7]="PERMISSION_DENIED",Te[Te.UNAUTHENTICATED=16]="UNAUTHENTICATED",Te[Te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Te[Te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Te[Te.ABORTED=10]="ABORTED",Te[Te.OUT_OF_RANGE=11]="OUT_OF_RANGE",Te[Te.UNIMPLEMENTED=12]="UNIMPLEMENTED",Te[Te.INTERNAL=13]="INTERNAL",Te[Te.UNAVAILABLE=14]="UNAVAILABLE",Te[Te.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const QR=new Tr([4294967295,4294967295],0);function Ip(t){const e=T_().encode(t),n=new p_;return n.update(e),new Uint8Array(n.digest())}function Ap(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Tr([n,r],0),new Tr([s,i],0)]}class Ju{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ri(`Invalid padding: ${n}`);if(r<0)throw new Ri(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ri(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ri(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Tr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(Tr.fromNumber(r)));return s.compare(QR)===1&&(s=new Tr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Ip(e),[r,s]=Ap(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Ju(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.fe===0)return;const n=Ip(e),[r,s]=Ap(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ri extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class _c{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Eo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new _c(ce.min(),s,new $e(ge),Xn(),Ee())}}class Eo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Eo(r,n,Ee(),Ee(),Ee())}}/**
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
 */class ca{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class sy{constructor(e,n){this.targetId=e,this.De=n}}class iy{constructor(e,n,r=pt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class bp{constructor(){this.ve=0,this.Ce=Rp(),this.Fe=pt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ee(),n=Ee(),r=Ee();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:se(38017,{changeType:i})}})),new Eo(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=Rp()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ie(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class JR{constructor(e){this.We=e,this.Ge=new Map,this.ze=Xn(),this.je=Ko(),this.Je=Ko(),this.He=new $e(ge)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:se(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Gl(i))if(r===0){const o=new re(i.path);this.Xe(n,o,st.newNoDocument(o,ce.min()))}else Ie(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const c=this._t(e),l=c?this.ut(c,e,o):1;if(l!==0){this.rt(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=kr(r).toUint8Array()}catch(l){if(l instanceof S_)return Sr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new Ju(o,s,i)}catch(l){return Sr(l instanceof Ri?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const c=this.st(o);if(c){if(i.current&&Gl(c.target)){const l=new re(c.target.path);this.Tt(l).has(o)||this.It(o,l)||this.Xe(o,l,st.newNoDocument(l,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let r=Ee();this.Je.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.st(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new _c(e,n,this.He,this.ze,r);return this.ze=Xn(),this.je=Ko(),this.Je=Ko(),this.He=new $e(ge),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new bp,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new nt(ge),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new nt(ge),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new bp),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function Ko(){return new $e(re.comparator)}function Rp(){return new $e(re.comparator)}const YR={asc:"ASCENDING",desc:"DESCENDING"},XR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ZR={and:"AND",or:"OR"};class eS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function zl(t,e){return t.useProto3Json||_o(e)?e:{value:e}}function Oa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function oy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function tS(t,e){return Oa(t,e.toTimestamp())}function zt(t){return Ie(!!t,49232),ce.fromTimestamp((function(n){const r=Cr(n);return new _e(r.seconds,r.nanos)})(t))}function Yu(t,e){return Kl(t,e).canonicalString()}function Kl(t,e){const n=(function(s){return new Ne(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function ay(t){const e=Ne.fromString(t);return Ie(dy(e),10190,{key:e.toString()}),e}function xa(t,e){return Yu(t.databaseId,e.path)}function ji(t,e){const n=ay(e);if(n.get(1)!==t.databaseId.projectId)throw new z(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(ly(n))}function cy(t,e){return Yu(t.databaseId,e)}function nS(t){const e=ay(t);return e.length===4?Ne.emptyPath():ly(e)}function Ql(t){return new Ne(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ly(t){return Ie(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function Sp(t,e,n){return{name:xa(t,e),fields:n.value.mapValue.fields}}function rS(t,e){return"found"in e?(function(r,s){Ie(!!s.found,43571),s.found.name,s.found.updateTime;const i=ji(r,s.found.name),o=zt(s.found.updateTime),c=s.found.createTime?zt(s.found.createTime):ce.min(),l=new kt({mapValue:{fields:s.found.fields}});return st.newFoundDocument(i,o,c,l)})(t,e):"missing"in e?(function(r,s){Ie(!!s.missing,3894),Ie(!!s.readTime,22933);const i=ji(r,s.missing),o=zt(s.readTime);return st.newNoDocument(i,o)})(t,e):se(7234,{result:e})}function sS(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:se(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Ie(f===void 0||typeof f=="string",58123),pt.fromBase64String(f||"")):(Ie(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),pt.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?D.UNKNOWN:ry(u.code);return new z(f,u.message||"")})(o);n=new iy(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=ji(t,r.document.name),i=zt(r.document.updateTime),o=r.document.createTime?zt(r.document.createTime):ce.min(),c=new kt({mapValue:{fields:r.document.fields}}),l=st.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new ca(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=ji(t,r.document),i=r.readTime?zt(r.readTime):ce.min(),o=st.newNoDocument(s,i),c=r.removedTargetIds||[];n=new ca([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=ji(t,r.document),i=r.removedTargetIds||[];n=new ca([],i,s,null)}else{if(!("filter"in e))return se(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new KR(s,i),c=r.targetId;n=new sy(c,o)}}return n}function uy(t,e){let n;if(e instanceof yo)n={update:Sp(t,e.key,e.value)};else if(e instanceof vo)n={delete:xa(t,e.key)};else if(e instanceof Lr)n={update:Sp(t,e.key,e.data),updateMask:dS(e.fieldMask)};else{if(!(e instanceof ty))return se(16599,{Rt:e.type});n={verify:xa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof Da)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof to)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof no)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof ro)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw se(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:tS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:se(27497)})(t,e.precondition)),n}function iS(t,e){return t&&t.length>0?(Ie(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?zt(s.updateTime):zt(i);return o.isEqual(ce.min())&&(o=zt(i)),new qR(o,s.transformResults||[])})(n,e)))):[]}function oS(t,e){return{documents:[cy(t,e.path)]}}function aS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=cy(t,s);const i=(function(u){if(u.length!==0)return fy(fn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:vs(m.field),direction:uS(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=zl(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Vt:n,parent:s}}function cS(t){let e=nS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ie(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=hy(p);return m instanceof fn&&L_(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(S){return new eo(Es(S.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(m)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,_o(m)?null:m})(n.limit));let l=null;n.startAt&&(l=(function(p){const m=!!p.before,_=p.values||[];return new Na(_,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,_=p.values||[];return new Na(_,m)})(n.endAt)),kR(e,s,o,i,c,"F",l,u)}function lS(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function hy(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Es(n.unaryFilter.field);return Xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Es(n.unaryFilter.field);return Xe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Es(n.unaryFilter.field);return Xe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Es(n.unaryFilter.field);return Xe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return se(61313);default:return se(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Xe.create(Es(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return se(58110);default:return se(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return fn.create(n.compositeFilter.filters.map((r=>hy(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return se(1026)}})(n.compositeFilter.op))})(t):se(30097,{filter:t})}function uS(t){return YR[t]}function hS(t){return XR[t]}function fS(t){return ZR[t]}function vs(t){return{fieldPath:t.canonicalString()}}function Es(t){return ft.fromServerFormat(t.fieldPath)}function fy(t){return t instanceof Xe?(function(n){if(n.op==="=="){if(pp(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NAN"}};if(dp(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(pp(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NOT_NAN"}};if(dp(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vs(n.field),op:hS(n.op),value:n.value}}})(t):t instanceof fn?(function(n){const r=n.getFilters().map((s=>fy(s)));return r.length===1?r[0]:{compositeFilter:{op:fS(n.op),filters:r}}})(t):se(54877,{filter:t})}function dS(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function dy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class yr{constructor(e,n,r,s,i=ce.min(),o=ce.min(),c=pt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new yr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new yr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class pS{constructor(e){this.gt=e}}function mS(t){const e=cS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Va(e,e.limit,"L"):e}/**
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
 */class gS{constructor(){this.Dn=new _S}addToCollectionParentIndex(e,n){return this.Dn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Pr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Pr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class _S{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new nt(Ne.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new nt(Ne.comparator)).toArray()}}/**
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
 */const Pp={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},py=41943040;class Ot{static withCacheSize(e){return new Ot(e,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Ot.DEFAULT_COLLECTION_PERCENTILE=10,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ot.DEFAULT=new Ot(py,Ot.DEFAULT_COLLECTION_PERCENTILE,Ot.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ot.DISABLED=new Ot(-1,0,0);/**
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
 */class $s{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new $s(0)}static ur(){return new $s(-1)}}/**
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
 */const Cp="LruGarbageCollector",yS=1048576;function kp([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class vS{constructor(e){this.Tr=e,this.buffer=new nt(kp),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();kp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class ES{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){Y(Cp,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Ys(n)?Y(Cp,"Ignoring IndexedDB error during garbage collection: ",n):await Js(n)}await this.Rr(3e5)}))}}class wS{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return F.resolve(uc.ue);const r=new vS(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Pp)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pp):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),_s()<=ve.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function TS(t,e){return new wS(t,e)}/**
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
 */class IS{constructor(){this.changes=new as((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,st.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class AS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class bS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Ui(r.mutation,s,Wt.empty(),_e.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Ee()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Ee()){const s=zr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=bi();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=zr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Ee())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=Xn();const o=Fi(),c=(function(){return Fi()})();return n.forEach(((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Lr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Ui(f.mutation,u,f.mutation.getFieldMask(),_e.now())):o.set(u.key,Wt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>{var p;return c.set(u,new AS(f,(p=o.get(u))!==null&&p!==void 0?p:null))})),c)))}recalculateAndSaveOverlays(e,n){const r=Fi();let s=new $e(((o,c)=>o-c)),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Wt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||Ee()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=W_();f.forEach((m=>{if(!i.has(m)){const _=Z_(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return F.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):B_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(zr());let c=Ji,l=i;return o.next((u=>F.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,Ee()))).next((f=>({batchId:c,changes:G_(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next((r=>{let s=bi();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=bi();return this.indexManager.getCollectionParents(e,i).next((c=>F.forEach(c,(l=>{const u=(function(p,m){return new Xs(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,st.newInvalidDocument(f)))}));let c=bi();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&Ui(f.mutation,u,Wt.empty(),_e.now()),pc(n,u)&&(c=c.insert(l,u))})),c}))}}/**
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
 */class RS{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return F.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:zt(s.createTime)}})(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:mS(s.bundledQuery),readTime:zt(s.readTime)}})(n)),F.resolve()}}/**
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
 */class SS{constructor(){this.overlays=new $e(re.comparator),this.kr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=zr();return F.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=zr(),i=n.length+1,o=new re(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new $e(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=zr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=zr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return F.resolve(c)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zR(n,r));let i=this.kr.get(n);i===void 0&&(i=Ee(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class PS{constructor(){this.sessionToken=pt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class Xu{constructor(){this.qr=new nt(rt.Qr),this.$r=new nt(rt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new rt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new rt(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new re(new Ne([])),r=new rt(n,e),s=new rt(n,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new re(new Ne([])),r=new rt(n,e),s=new rt(n,e+1);let i=Ee();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new rt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class rt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return re.comparator(e.key,n.key)||ge(e.Hr,n.Hr)}static Ur(e,n){return ge(e.Hr,n.Hr)||re.comparator(e.key,n.key)}}/**
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
 */class CS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new nt(rt.Qr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new WR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Yr=this.Yr.add(new rt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?qu:this.er-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new rt(n,0),s=new rt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const c=this.Zr(o.Hr);i.push(c)})),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new nt(ge);return n.forEach((s=>{const i=new rt(s,0),o=new rt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(c=>{r=r.add(c.Hr)}))})),F.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new rt(new re(i),0);let c=new nt(ge);return this.Yr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Hr)),!0)}),o),F.resolve(this.ei(c))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Ie(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return F.forEach(n.mutations,(s=>{const i=new rt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new rt(n,0),s=this.Yr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class kS{constructor(e){this.ni=e,this.docs=(function(){return new $e(re.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():st.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():st.newInvalidDocument(s))})),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Xn();const o=n.path,c=new re(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||cR(aR(f),r)<=0||(s.has(f.key)||pc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){se(9500)}ri(e,n){return F.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new NS(this)}getSize(e){return F.resolve(this.size)}}class NS extends IS{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),F.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class VS{constructor(e){this.persistence=e,this.ii=new as((n=>Wu(n)),zu),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.si=0,this.oi=new Xu,this.targetCount=0,this._i=$s.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),F.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new $s(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.hr(n),F.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),F.waitFor(i).next((()=>s))}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.oi.containsKey(n))}}/**
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
 */class my{constructor(e,n){this.ai={},this.overlays={},this.ui=new uc(0),this.ci=!1,this.ci=!0,this.li=new PS,this.referenceDelegate=e(this),this.hi=new VS(this),this.indexManager=new gS,this.remoteDocumentCache=(function(s){return new kS(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new pS(n),this.Ti=new RS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new SS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new CS(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new DS(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return F.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class DS extends uR{constructor(e){super(),this.currentSequenceNumber=e}}class Zu{constructor(e){this.persistence=e,this.Ai=new Xu,this.Ri=null}static Vi(e){return new Zu(e)}get mi(){if(this.Ri)return this.Ri;throw se(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.mi,(r=>{const s=re.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,ce.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return F.or([()=>F.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Ma{constructor(e,n){this.persistence=e,this.gi=new as((r=>dR(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=TS(this,n)}static Vi(e,n){return new Ma(e,n)}Ii(){}di(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return F.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?F.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,n).next((c=>{c||(r++,i.removeEntry(o,ce.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),F.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ia(e.data.value)),n}Sr(e,n,r){return F.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class eh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new eh(e,n.fromCache,r,s)}}/**
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
 */class xS{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return fI()?8:hR(It())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new OS;return this.ws(e,n,o).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,n,o,c.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(_s()<=ve.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",ys(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(_s()<=ve.DEBUG&&Y("QueryEngine","Query:",ys(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(_s()<=ve.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",ys(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bn(n))):F.resolve())}ps(e,n){if(yp(n))return F.resolve(null);let r=bn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Va(n,null,"F"),r=bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Ee(...i);return this.gs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.bs(n,c);return this.Ds(n,u,o,l.readTime)?this.ps(e,Va(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ys(e,n,r,s){return yp(n)||s.isEqual(ce.min())?F.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?F.resolve(null):(_s()<=ve.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ys(n)),this.vs(e,o,n,oR(s,Ji)).next((c=>c)))}))}bs(e,n){let r=new nt(q_(e));return n.forEach(((s,i)=>{pc(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return _s()<=ve.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",ys(n)),this.gs.getDocumentsMatchingQuery(e,n,Pr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
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
 */const th="LocalStore",MS=3e8;class LS{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new $e(ge),this.Ms=new as((i=>Wu(i)),zu),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new bS(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function FS(t,e,n,r){return new LS(t,e,n,r)}async function gy(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=Ee();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Bs:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function US(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,m=p.keys();let _=F.resolve();return m.forEach((S=>{_=_.next((()=>f.getEntry(l,S))).next((k=>{const V=u.docVersions.get(S);Ie(V!==null,48541),k.version.compareTo(V)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))}))})),_.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=Ee();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function _y(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function jS(t,e){const n=he(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.hi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.hi.addMatchingKeys(i,f.addedDocuments,p))));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(pt.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),(function(k,V,q){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=MS?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0})(m,_,f)&&c.push(n.hi.updateTargetData(i,_))}));let l=Xn(),u=Ee();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(BS(i,o,e.documentUpdates).next((f=>{l=f.Ls,u=f.ks}))),!r.isEqual(ce.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next((p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return F.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Fs=s,i)))}function BS(t,e,n){let r=Ee(),s=Ee();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Xn();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ce.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Y(th,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{Ls:o,ks:s}}))}function $S(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=qu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function qS(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,F.resolve(s)):n.hi.allocateTargetId(r).next((o=>(s=new yr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function Jl(t,e,n){const r=he(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Ys(o))throw o;Y(th,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Np(t,e,n){const r=he(t);let s=ce.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=he(l),m=p.Ms.get(f);return m!==void 0?F.resolve(p.Fs.get(m)):p.hi.getTargetData(u,f)})(r,o,bn(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:Ee()))).next((c=>(HS(r,VR(e),c),{documents:c,qs:i})))))}function HS(t,e,n){let r=t.xs.get(e)||ce.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class Vp{constructor(){this.activeTargetIds=FR()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class GS{constructor(){this.Fo=new Vp,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Vp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class WS{xo(e){}shutdown(){}}/**
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
 */const Dp="ConnectivityMonitor";class Op{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){Y(Dp,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){Y(Dp,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Qo=null;function Yl(){return Qo===null?Qo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Qo++,"0x"+Qo.toString(16)}/**
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
 */const fl="RestConnection",zS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class KS{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Ca?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Yl(),c=this.Go(e,n.toUriEncodedString());Y(fl,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:u}=new URL(c),f=is(u);return this.jo(e,c,l,r,f).then((p=>(Y(fl,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Sr(fl,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Qs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=zS[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class QS{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const yt="WebChannelConnection";class JS extends KS{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=Yl();return new Promise(((c,l)=>{const u=new m_;u.setWithCredentials(!0),u.listenOnce(g_.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case sa.NO_ERROR:const p=u.getResponseJson();Y(yt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case sa.TIMEOUT:Y(yt,`RPC '${e}' ${o} timed out`),l(new z(D.DEADLINE_EXCEEDED,"Request time out"));break;case sa.HTTP_ERROR:const m=u.getStatus();if(Y(yt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const S=_==null?void 0:_.error;if(S&&S.status&&S.message){const k=(function(q){const U=q.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(U)>=0?U:D.UNKNOWN})(S.status);l(new z(k,S.message))}else l(new z(D.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new z(D.UNAVAILABLE,"Connection failed."));break;default:se(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{Y(yt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);Y(yt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}P_(e,n,r){const s=Yl(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=v_(),c=y_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Y(yt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.T_(p);let m=!1,_=!1;const S=new QS({Ho:V=>{_?Y(yt,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(m||(Y(yt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Y(yt,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},Yo:()=>p.close()}),k=(V,q,U)=>{V.listen(q,(B=>{try{U(B)}catch(L){setTimeout((()=>{throw L}),0)}}))};return k(p,Ai.EventType.OPEN,(()=>{_||(Y(yt,`RPC '${e}' stream ${s} transport opened.`),S.s_())})),k(p,Ai.EventType.CLOSE,(()=>{_||(_=!0,Y(yt,`RPC '${e}' stream ${s} transport closed`),S.__(),this.I_(p))})),k(p,Ai.EventType.ERROR,(V=>{_||(_=!0,Sr(yt,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),S.__(new z(D.UNAVAILABLE,"The operation could not be completed")))})),k(p,Ai.EventType.MESSAGE,(V=>{var q;if(!_){const U=V.data[0];Ie(!!U,16349);const B=U,L=(B==null?void 0:B.error)||((q=B[0])===null||q===void 0?void 0:q.error);if(L){Y(yt,`RPC '${e}' stream ${s} received error:`,L);const Z=L.status;let fe=(function(E){const A=Ye[E];if(A!==void 0)return ry(A)})(Z),I=L.message;fe===void 0&&(fe=D.INTERNAL,I="Unknown error status: "+Z+" with message "+L.message),_=!0,S.__(new z(fe,I)),p.close()}else Y(yt,`RPC '${e}' stream ${s} received:`,U),S.a_(U)}})),k(c,__.STAT_EVENT,(V=>{V.stat===jl.PROXY?Y(yt,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===jl.NOPROXY&&Y(yt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{S.o_()}),0),S}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function dl(){return typeof document<"u"?document:null}/**
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
 */function yc(t){return new eS(t,!0)}/**
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
 */class nh{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const xp="PersistentStream";class yy{constructor(e,n,r,s,i,o,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new nh(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new z(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return Y(xp,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(Y(xp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class YS extends yy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=sS(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?zt(o.readTime):ce.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Ql(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=Gl(l)?{documents:oS(i,l)}:{query:aS(i,l).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=oy(i,o.resumeToken);const u=zl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(ce.min())>0){c.readTime=Oa(i,o.snapshotVersion.toTimestamp());const u=zl(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=lS(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Ql(this.serializer),n.removeTarget=e,this.k_(n)}}class XS extends yy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Ie(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ie(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ie(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=iS(e.writeResults,e.commitTime),r=zt(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Ql(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>uy(this.serializer,r)))};this.k_(n)}}/**
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
 */class ZS{}class eP extends ZS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new z(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Kl(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(D.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Jo(e,Kl(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(D.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class tP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const rs="RemoteStore";class nP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{cs(this)&&(Y(rs,"Restarting streams for network reachability change."),await(async function(l){const u=he(l);u.Ia.add(4),await wo(u),u.Aa.set("Unknown"),u.Ia.delete(4),await vc(u)})(this))}))})),this.Aa=new tP(r,s)}}async function vc(t){if(cs(t))for(const e of t.da)await e(!0)}async function wo(t){for(const e of t.da)await e(!1)}function vy(t,e){const n=he(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),oh(n)?ih(n):Zs(n).x_()&&sh(n,e))}function rh(t,e){const n=he(t),r=Zs(n);n.Ta.delete(e),r.x_()&&Ey(n,e),n.Ta.size===0&&(r.x_()?r.B_():cs(n)&&n.Aa.set("Unknown"))}function sh(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Zs(t).H_(e)}function Ey(t,e){t.Ra.$e(e),Zs(t).Y_(e)}function ih(t){t.Ra=new JR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Zs(t).start(),t.Aa.aa()}function oh(t){return cs(t)&&!Zs(t).M_()&&t.Ta.size>0}function cs(t){return he(t).Ia.size===0}function wy(t){t.Ra=void 0}async function rP(t){t.Aa.set("Online")}async function sP(t){t.Ta.forEach(((e,n)=>{sh(t,e)}))}async function iP(t,e){wy(t),oh(t)?(t.Aa.la(e),ih(t)):t.Aa.set("Unknown")}async function oP(t,e,n){if(t.Aa.set("Online"),e instanceof iy&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ta.delete(c),s.Ra.removeTarget(c))})(t,e)}catch(r){Y(rs,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await La(t,r)}else if(e instanceof ca?t.Ra.Ye(e):e instanceof sy?t.Ra.it(e):t.Ra.et(e),!n.isEqual(ce.min()))try{const r=await _y(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Ra.Pt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ta.get(u);f&&i.Ta.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=i.Ta.get(l);if(!f)return;i.Ta.set(l,f.withResumeToken(pt.EMPTY_BYTE_STRING,f.snapshotVersion)),Ey(i,l);const p=new yr(f.target,l,u,f.sequenceNumber);sh(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){Y(rs,"Failed to raise snapshot:",r),await La(t,r)}}async function La(t,e,n){if(!Ys(e))throw e;t.Ia.add(1),await wo(t),t.Aa.set("Offline"),n||(n=()=>_y(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Y(rs,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await vc(t)}))}function Ty(t,e){return e().catch((n=>La(t,n,e)))}async function Ec(t){const e=he(t),n=Vr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:qu;for(;aP(e);)try{const s=await $S(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,cP(e,s)}catch(s){await La(e,s)}Iy(e)&&Ay(e)}function aP(t){return cs(t)&&t.Pa.length<10}function cP(t,e){t.Pa.push(e);const n=Vr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function Iy(t){return cs(t)&&!Vr(t).M_()&&t.Pa.length>0}function Ay(t){Vr(t).start()}async function lP(t){Vr(t).na()}async function uP(t){const e=Vr(t);for(const n of t.Pa)e.X_(n.mutations)}async function hP(t,e,n){const r=t.Pa.shift(),s=Qu.from(r,e,n);await Ty(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Ec(t)}async function fP(t,e){e&&Vr(t).Z_&&await(async function(r,s){if((function(o){return ny(o)&&o!==D.ABORTED})(s.code)){const i=r.Pa.shift();Vr(r).N_(),await Ty(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Ec(r)}})(t,e),Iy(t)&&Ay(t)}async function Mp(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),Y(rs,"RemoteStore received new credentials");const r=cs(n);n.Ia.add(3),await wo(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await vc(n)}async function dP(t,e){const n=he(t);e?(n.Ia.delete(2),await vc(n)):e||(n.Ia.add(2),await wo(n),n.Aa.set("Unknown"))}function Zs(t){return t.Va||(t.Va=(function(n,r,s){const i=he(n);return i.ia(),new YS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:rP.bind(null,t),e_:sP.bind(null,t),n_:iP.bind(null,t),J_:oP.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),oh(t)?ih(t):t.Aa.set("Unknown")):(await t.Va.stop(),wy(t))}))),t.Va}function Vr(t){return t.ma||(t.ma=(function(n,r,s){const i=he(n);return i.ia(),new XS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:lP.bind(null,t),n_:fP.bind(null,t),ea:uP.bind(null,t),ta:hP.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await Ec(t)):(await t.ma.stop(),t.Pa.length>0&&(Y(rs,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
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
 */class ah{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new An,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new ah(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ch(t,e){if(Yn("AsyncQueue",`${e}: ${t}`),Ys(t))return new z(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Vs{static emptySet(e){return new Vs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=bi(),this.sortedSet=new $e(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Vs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Vs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Lp{constructor(){this.fa=new $e(re.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):se(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class qs{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new qs(e,n,Vs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&dc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class pP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class mP{constructor(){this.queries=Fp(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=Fp(),i.forEach(((o,c)=>{for(const l of c.wa)l.onError(r)}))})(this,new z(D.ABORTED,"Firestore shutting down"))}}function Fp(){return new as((t=>$_(t)),dc)}async function lh(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new pP,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=ch(o,`Initialization of query '${ys(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&hh(n)}async function uh(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function gP(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.wa)c.Ca(s)&&(r=!0);o.ya=s}}r&&hh(n)}function _P(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function hh(t){t.Da.forEach((e=>{e.next()}))}var Xl,Up;(Up=Xl||(Xl={})).Fa="default",Up.Cache="cache";class fh{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new qs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=qs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Xl.Cache}}/**
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
 */class by{constructor(e){this.key=e}}class Ry{constructor(e){this.key=e}}class yP{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ee(),this.mutatedKeys=Ee(),this.Xa=q_(e),this.eu=new Vs(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new Lp,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),_=pc(this.query,p)?p:null,S=!!m&&this.mutatedKeys.has(m.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let V=!1;m&&_?m.data.isEqual(_.data)?S!==k&&(r.track({type:3,doc:_}),V=!0):this.iu(m,_)||(r.track({type:2,doc:_}),V=!0,(l&&this.Xa(_,l)>0||u&&this.Xa(_,u)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),V=!0):m&&!_&&(r.track({type:1,doc:m}),V=!0,(l||u)&&(c=!0)),V&&(_?(o=o.add(_),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:c,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,p)=>(function(_,S){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se(20277,{At:V})}};return k(_)-k(S)})(f.type,p.type)||this.Xa(f.doc,p.doc))),this.su(r),s=s!=null&&s;const c=n&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,u=l!==this.Ya;return this.Ya=l,o.length!==0||u?{snapshot:new qs(this.query,e.eu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Lp,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ee(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new Ry(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new by(r))})),n}uu(e){this.Ha=e.qs,this.Za=Ee();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return qs.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const dh="SyncEngine";class vP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class EP{constructor(e){this.key=e,this.lu=!1}}class wP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new as((c=>$_(c)),dc),this.Tu=new Map,this.Iu=new Set,this.du=new $e(re.comparator),this.Eu=new Map,this.Au=new Xu,this.Ru={},this.Vu=new Map,this.mu=$s.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function TP(t,e,n=!0){const r=Vy(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Sy(r,e,n,!0),s}async function IP(t,e){const n=Vy(t);await Sy(n,e,!0,!1)}async function Sy(t,e,n,r){const s=await qS(t.localStore,bn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await AP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&vy(t.remoteStore,s),c}async function AP(t,e,n,r,s){t.gu=(p,m,_)=>(async function(k,V,q,U){let B=V.view.nu(q);B.Ds&&(B=await Np(k.localStore,V.query,!1).then((({documents:I})=>V.view.nu(I,B))));const L=U&&U.targetChanges.get(V.targetId),Z=U&&U.targetMismatches.get(V.targetId)!=null,fe=V.view.applyChanges(B,k.isPrimaryClient,L,Z);return Bp(k,V.targetId,fe._u),fe.snapshot})(t,p,m,_);const i=await Np(t.localStore,e,!0),o=new yP(e,i.qs),c=o.nu(i.documents),l=Eo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Bp(t,n,u._u);const f=new vP(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function bP(t,e,n){const r=he(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!dc(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Jl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&rh(r.remoteStore,s.targetId),Zl(r,s.targetId)})).catch(Js)):(Zl(r,s.targetId),await Jl(r.localStore,s.targetId,!0))}async function RP(t,e){const n=he(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),rh(n.remoteStore,r.targetId))}async function SP(t,e,n){const r=OP(t);try{const s=await(function(o,c){const l=he(o),u=_e.now(),f=c.reduce(((_,S)=>_.add(S.key)),Ee());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let S=Xn(),k=Ee();return l.Os.getEntries(_,f).next((V=>{S=V,S.forEach(((q,U)=>{U.isValidDocument()||(k=k.add(q))}))})).next((()=>l.localDocuments.getOverlayedDocuments(_,S))).next((V=>{p=V;const q=[];for(const U of c){const B=GR(U,p.get(U.key).overlayedDocument);B!=null&&q.push(new Lr(U.key,B,O_(B.value.mapValue),tt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,q,c)})).next((V=>{m=V;const q=V.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(_,V.batchId,q)}))})).then((()=>({batchId:m.batchId,changes:G_(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Ru[o.currentUser.toKey()];u||(u=new $e(ge)),u=u.insert(c,l),o.Ru[o.currentUser.toKey()]=u})(r,s.batchId,n),await To(r,s.changes),await Ec(r.remoteStore)}catch(s){const i=ch(s,"Failed to persist write");n.reject(i)}}async function Py(t,e){const n=he(t);try{const r=await jS(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Eu.get(i);o&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?Ie(o.lu,14607):s.removedDocuments.size>0&&(Ie(o.lu,42227),o.lu=!1))})),await To(n,r,e)}catch(r){await Js(r)}}function jp(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=he(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const m of p.wa)m.va(c)&&(u=!0)})),u&&hh(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function PP(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new $e(re.comparator);o=o.insert(i,st.newNoDocument(i,ce.min()));const c=Ee().add(i),l=new _c(ce.min(),new Map,new $e(ge),o,c);await Py(r,l),r.du=r.du.remove(i),r.Eu.delete(e),ph(r)}else await Jl(r.localStore,e,!1).then((()=>Zl(r,e,n))).catch(Js)}async function CP(t,e){const n=he(t),r=e.batch.batchId;try{const s=await US(n.localStore,e);ky(n,r,null),Cy(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await To(n,s)}catch(s){await Js(s)}}async function kP(t,e,n){const r=he(t);try{const s=await(function(o,c){const l=he(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(Ie(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);ky(r,e,n),Cy(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await To(r,s)}catch(s){await Js(s)}}function Cy(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function ky(t,e,n){const r=he(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Zl(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||Ny(t,r)}))}function Ny(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(rh(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),ph(t))}function Bp(t,e,n){for(const r of n)r instanceof by?(t.Au.addReference(r.key,e),NP(t,r)):r instanceof Ry?(Y(dh,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||Ny(t,r.key)):se(19791,{yu:r})}function NP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(Y(dh,"New document in limbo: "+n),t.Iu.add(r),ph(t))}function ph(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new re(Ne.fromString(e)),r=t.mu.next();t.Eu.set(r,new EP(n)),t.du=t.du.insert(n,r),vy(t.remoteStore,new yr(bn(fc(n.path)),r,"TargetPurposeLimboResolution",uc.ue))}}async function To(t,e,n){const r=he(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,l)=>{o.push(r.gu(l,e,n).then((u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=eh.Es(l.targetId,u);i.push(p)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(l,u){const f=he(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>F.forEach(u,(m=>F.forEach(m.Is,(_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_))).next((()=>F.forEach(m.ds,(_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))))))}catch(p){if(!Ys(p))throw p;Y(th,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=f.Fs.get(m),S=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(S);f.Fs=f.Fs.insert(m,k)}}})(r.localStore,i))}async function VP(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){Y(dh,"User change. New user:",e.toKey());const r=await gy(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((c=>{c.forEach((l=>{l.reject(new z(D.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await To(n,r.Bs)}}function DP(t,e){const n=he(t),r=n.Eu.get(e);if(r&&r.lu)return Ee().add(r.key);{let s=Ee();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const c=n.Pu.get(o);s=s.unionWith(c.view.tu)}return s}}function Vy(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Py.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=DP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=PP.bind(null,e),e.hu.J_=gP.bind(null,e.eventManager),e.hu.pu=_P.bind(null,e.eventManager),e}function OP(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=kP.bind(null,e),e}class Fa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=yc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return FS(this.persistence,new xS,e.initialUser,this.serializer)}Du(e){return new my(Zu.Vi,this.serializer)}bu(e){return new GS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Fa.provider={build:()=>new Fa};class xP extends Fa{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Ie(this.persistence.referenceDelegate instanceof Ma,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new ES(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Ot.withCacheSize(this.cacheSizeBytes):Ot.DEFAULT;return new my((r=>Ma.Vi(r,n)),this.serializer)}}class eu{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>jp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=VP.bind(null,this.syncEngine),await dP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new mP})()}createDatastore(e){const n=yc(e.databaseInfo.databaseId),r=(function(i){return new JS(i)})(e.databaseInfo);return(function(i,o,c,l){return new eP(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new nP(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>jp(this.syncEngine,n,0)),(function(){return Op.C()?new Op:new WS})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,f){const p=new wP(s,i,o,c,l,u);return f&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=he(s);Y(rs,"RemoteStore shutting down."),i.Ia.add(5),await wo(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}eu.provider={build:()=>new eu};/**
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
 */class mh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Yn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */class MP{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new z(D.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await(async function(s,i){const o=he(s),c={documents:i.map((p=>xa(o.serializer,p)))},l=await o.Jo("BatchGetDocuments",o.serializer.databaseId,Ne.emptyPath(),c,i.length),u=new Map;l.forEach((p=>{const m=rS(o.serializer,p);u.set(m.key.toString(),m)}));const f=[];return i.forEach((p=>{const m=u.get(p.toString());Ie(!!m,55234,{key:p}),f.push(m)})),f})(this.datastore,e);return n.forEach((r=>this.recordVersion(r))),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new vo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((n=>{e.delete(n.key.toString())})),e.forEach(((n,r)=>{const s=re.fromPath(r);this.mutations.push(new ty(s,this.precondition(s)))})),await(async function(r,s){const i=he(r),o={writes:s.map((c=>uy(i.serializer,c)))};await i.Wo("Commit",i.serializer.databaseId,Ne.emptyPath(),o)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw se(50498,{Wu:e.constructor.name});n=ce.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new z(D.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(ce.min())?tt.exists(!1):tt.updateTime(n):tt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(ce.min()))throw new z(D.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return tt.updateTime(n)}return tt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class LP{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.Gu=r.maxAttempts,this.F_=new nh(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_((async()=>{const e=new MP(this.datastore),n=this.Ju(e);n&&n.then((r=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(r)})).catch((s=>{this.Hu(s)}))))})).catch((r=>{this.Hu(r)}))}))}Ju(e){try{const n=this.updateFunction(e);return!_o(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Hu(e){this.Gu>0&&this.Yu(e)?(this.Gu-=1,this.asyncQueue.enqueueAndForget((()=>(this.ju(),Promise.resolve())))):this.deferred.reject(e)}Yu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!ny(n)}return!1}}/**
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
 */const Dr="FirestoreClient";class FP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=vt.UNAUTHENTICATED,this.clientId=$u.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{Y(Dr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(Y(Dr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new An;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=ch(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function pl(t,e){t.asyncQueue.verifyOperationInProgress(),Y(Dr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await gy(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Sr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{Y("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Sr("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function $p(t,e){t.asyncQueue.verifyOperationInProgress();const n=await UP(t);Y(Dr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Mp(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Mp(e.remoteStore,s))),t._onlineComponents=e}async function UP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y(Dr,"Using user provided OfflineComponentProvider");try{await pl(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Sr("Error using user provided cache. Falling back to memory cache: "+n),await pl(t,new Fa)}}else Y(Dr,"Using default OfflineComponentProvider"),await pl(t,new xP(void 0));return t._offlineComponents}async function gh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y(Dr,"Using user provided OnlineComponentProvider"),await $p(t,t._uninitializedComponentsProvider._online)):(Y(Dr,"Using default OnlineComponentProvider"),await $p(t,new eu))),t._onlineComponents}function jP(t){return gh(t).then((e=>e.syncEngine))}function BP(t){return gh(t).then((e=>e.datastore))}async function Ua(t){const e=await gh(t),n=e.eventManager;return n.onListen=TP.bind(null,e.syncEngine),n.onUnlisten=bP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=IP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=RP.bind(null,e.syncEngine),n}function $P(t,e,n={}){const r=new An;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new mh({next:m=>{f.Ou(),o.enqueueAndForget((()=>uh(i,p)));const _=m.docs.has(c);!_&&m.fromCache?u.reject(new z(D.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?u.reject(new z(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new fh(fc(c.path),f,{includeMetadataChanges:!0,ka:!0});return lh(i,p)})(await Ua(t),t.asyncQueue,e,n,r))),r.promise}function qP(t,e,n={}){const r=new An;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new mh({next:m=>{f.Ou(),o.enqueueAndForget((()=>uh(i,p))),m.fromCache&&l.source==="server"?u.reject(new z(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new fh(c,f,{includeMetadataChanges:!0,ka:!0});return lh(i,p)})(await Ua(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function Dy(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const qp=new Map;/**
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
 */const Oy="firestore.googleapis.com",Hp=!0;class Gp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Oy,this.ssl=Hp}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Hp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=py;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<yS)throw new z(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}sR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Dy((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class wc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new Qb;switch(r.type){case"firstParty":return new Zb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=qp.get(n);r&&(Y("ComponentProvider","Removing Datastore"),qp.delete(n),r.terminate())})(this),Promise.resolve()}}function HP(t,e,n,r={}){var s;t=Lt(t,wc);const i=is(e),o=t._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i&&(Su(`https://${l}`),Pu("Firestore",!0)),o.host!==Oy&&o.host!==l&&Sr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:l,ssl:i,emulatorOptions:r});if(!Xr(u,c)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=vt.MOCK_USER;else{f=rI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new z(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new vt(m)}t._authCredentials=new Jb(new w_(f,p))}}/**
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
 */class rr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rr(this.firestore,e,this._query)}}class Ge{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ir(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}toJSON(){return{type:Ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(go(n,Ge._jsonSchema))return new Ge(e,r||null,new re(Ne.fromString(n.referencePath)))}}Ge._jsonSchemaVersion="firestore/documentReference/1.0",Ge._jsonSchema={type:Ze("string",Ge._jsonSchemaVersion),referencePath:Ze("string")};class Ir extends rr{constructor(e,n,r){super(e,n,fc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new re(e))}withConverter(e){return new Ir(this.firestore,e,this._path)}}function xy(t,e,...n){if(t=Le(t),I_("collection","path",e),t instanceof wc){const r=Ne.fromString(e,...n);return sp(r),new Ir(t,null,r)}{if(!(t instanceof Ge||t instanceof Ir))throw new z(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return sp(r),new Ir(t.firestore,null,r)}}function Tc(t,e,...n){if(t=Le(t),arguments.length===1&&(e=$u.newId()),I_("doc","path",e),t instanceof wc){const r=Ne.fromString(e,...n);return rp(r),new Ge(t,null,new re(r))}{if(!(t instanceof Ge||t instanceof Ir))throw new z(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ne.fromString(e,...n));return rp(r),new Ge(t.firestore,t instanceof Ir?t.converter:null,new re(r))}}/**
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
 */const Wp="AsyncQueue";class zp{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new nh(this,"async_queue_retry"),this.oc=()=>{const r=dl();r&&Y(Wp,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=dl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=dl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new An;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Ys(e))throw e;Y(Wp,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Yn("INTERNAL UNHANDLED ERROR: ",Kp(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=ah.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&se(47125,{hc:Kp(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Kp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function Qp(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class Nn extends wc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new zp,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new zp(e),this._firestoreClient=void 0,await e}}}function GP(t,e){const n=typeof t=="object"?t:Nu(),r=typeof t=="string"?t:Ca,s=ic(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Rg("firestore");i&&HP(s,...i)}return s}function ei(t){if(t._terminated)throw new z(D.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||WP(t),t._firestoreClient}function WP(t){var e,n,r;const s=t._freezeSettings(),i=(function(c,l,u,f){return new gR(c,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Dy(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new FP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(t._componentsProvider))}/**
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
 */class qt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qt(pt.fromBase64String(e))}catch(n){throw new z(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qt(pt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:qt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(go(e,qt._jsonSchema))return qt.fromBase64String(e.bytes)}}qt._jsonSchemaVersion="firestore/bytes/1.0",qt._jsonSchema={type:Ze("string",qt._jsonSchemaVersion),bytes:Ze("string")};/**
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
 */class ti{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ft(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ic{constructor(e){this._methodName=e}}/**
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
 */class Rn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Rn._jsonSchemaVersion}}static fromJSON(e){if(go(e,Rn._jsonSchema))return new Rn(e.latitude,e.longitude)}}Rn._jsonSchemaVersion="firestore/geoPoint/1.0",Rn._jsonSchema={type:Ze("string",Rn._jsonSchemaVersion),latitude:Ze("number"),longitude:Ze("number")};/**
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
 */class Sn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Sn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(go(e,Sn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Sn(e.vectorValues);throw new z(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Sn._jsonSchemaVersion="firestore/vectorValue/1.0",Sn._jsonSchema={type:Ze("string",Sn._jsonSchemaVersion),vectorValues:Ze("object")};/**
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
 */const zP=/^__.*__$/;class KP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms):new yo(e,this.data,n,this.fieldTransforms)}}class My{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Lr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ly(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se(40011,{Ec:t})}}class _h{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new _h(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return ja(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Ly(this.Ec)&&zP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class QP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||yc(e)}Dc(e,n,r,s=!1){return new _h({Ec:e,methodName:n,bc:r,path:ft.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Io(t){const e=t._freezeSettings(),n=yc(t._databaseId);return new QP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function yh(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);Th("Data must be an object, but it was:",o,r);const c=Fy(r,o);let l,u;if(i.merge)l=new Wt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=tu(e,p,n);if(!o.contains(m))throw new z(D.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);jy(f,m)||f.push(m)}l=new Wt(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new KP(new kt(c),l,u)}class Ac extends Ic{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ac}}class vh extends Ic{constructor(e,n){super(e),this.Cc=n}_toFieldTransform(e){const n=new ro(e.serializer,K_(e.serializer,this.Cc));return new BR(e.path,n)}isEqual(e){return e instanceof vh&&this.Cc===e.Cc}}function Eh(t,e,n,r){const s=t.Dc(1,e,n);Th("Data must be an object, but it was:",s,r);const i=[],o=kt.empty();Mr(r,((l,u)=>{const f=Ih(e,l,n);u=Le(u);const p=s.gc(f);if(u instanceof Ac)i.push(f);else{const m=Ao(u,p);m!=null&&(i.push(f),o.set(f,m))}}));const c=new Wt(i);return new My(o,c,s.fieldTransforms)}function wh(t,e,n,r,s,i){const o=t.Dc(1,e,n),c=[tu(e,r,n)],l=[s];if(i.length%2!=0)throw new z(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(tu(e,i[m])),l.push(i[m+1]);const u=[],f=kt.empty();for(let m=c.length-1;m>=0;--m)if(!jy(u,c[m])){const _=c[m];let S=l[m];S=Le(S);const k=o.gc(_);if(S instanceof Ac)u.push(_);else{const V=Ao(S,k);V!=null&&(u.push(_),f.set(_,V))}}const p=new Wt(u);return new My(f,p,o.fieldTransforms)}function JP(t,e,n,r=!1){return Ao(n,t.Dc(r?4:3,e))}function Ao(t,e){if(Uy(t=Le(t)))return Th("Unsupported field value:",e,t),Fy(t,e);if(t instanceof Ic)return(function(r,s){if(!Ly(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=Ao(c,s.yc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Le(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return K_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=_e.fromDate(r);return{timestampValue:Oa(s.serializer,i)}}if(r instanceof _e){const i=new _e(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Oa(s.serializer,i)}}if(r instanceof Rn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof qt)return{bytesValue:oy(s.serializer,r._byteString)};if(r instanceof Ge){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Yu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Sn)return(function(o,c){return{mapValue:{fields:{[V_]:{stringValue:D_},[ka]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.wc("VectorValues must only contain numeric values.");return Ku(c.serializer,u)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${lc(r)}`)})(t,e)}function Fy(t,e){const n={};return R_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Mr(t,((r,s)=>{const i=Ao(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function Uy(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof _e||t instanceof Rn||t instanceof qt||t instanceof Ge||t instanceof Ic||t instanceof Sn)}function Th(t,e,n){if(!Uy(n)||!A_(n)){const r=lc(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function tu(t,e,n){if((e=Le(e))instanceof ti)return e._internalPath;if(typeof e=="string")return Ih(t,e);throw ja("Field path arguments must be of type string or ",t,!1,void 0,n)}const YP=new RegExp("[~\\*/\\[\\]]");function Ih(t,e,n){if(e.search(YP)>=0)throw ja(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new ti(...e.split("."))._internalPath}catch{throw ja(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function ja(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new z(D.INVALID_ARGUMENT,c+t+l)}function jy(t,e){return t.some((n=>n.isEqual(e)))}/**
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
 */class Ba{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new XP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(bc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class XP extends Ba{data(){return super.data()}}function bc(t,e){return typeof e=="string"?Ih(t,e):e instanceof ti?e._internalPath:e._delegate._internalPath}/**
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
 */function By(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ah{}class bh extends Ah{}function xt(t,e,...n){let r=[];e instanceof Ah&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((l=>l instanceof Rh)).length,c=i.filter((l=>l instanceof Rc)).length;if(o>1||o>0&&c>0)throw new z(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Rc extends bh{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Rc(e,n,r)}_apply(e){const n=this._parse(e);return $y(e._query,n),new rr(e.firestore,e.converter,Wl(e._query,n))}_parse(e){const n=Io(e.firestore);return(function(i,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new z(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Yp(p,f);const S=[];for(const k of p)S.push(Jp(l,i,k));m={arrayValue:{values:S}}}else m=Jp(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Yp(p,f),m=JP(c,o,p,f==="in"||f==="not-in");return Xe.create(u,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Mt(t,e,n){const r=e,s=bc("where",t);return Rc._create(s,r,n)}class Rh extends Ah{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new Rh(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:fn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)$y(o,l),o=Wl(o,l)})(e._query,n),new rr(e.firestore,e.converter,Wl(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Sh extends bh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Sh(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new z(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new z(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new eo(i,o)})(e._query,this._field,this._direction);return new rr(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new Xs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function Vn(t,e="asc"){const n=e,r=bc("orderBy",t);return Sh._create(r,n)}class Ph extends bh{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Ph(e,n,r)}_apply(e){return new rr(e.firestore,e.converter,Va(e._query,this._limit,this._limitType))}}function ZP(t){return iR("limit",t),Ph._create("limit",t,"F")}function Jp(t,e,n){if(typeof(n=Le(n))=="string"){if(n==="")throw new z(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!B_(e)&&n.indexOf("/")!==-1)throw new z(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ne.fromString(n));if(!re.isDocumentKey(r))throw new z(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return fp(t,new re(r))}if(n instanceof Ge)return fp(t,n._key);throw new z(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${lc(n)}.`)}function Yp(t,e){if(!Array.isArray(t)||t.length===0)throw new z(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $y(t,e){const n=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new z(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class qy{convertValue(e,n="none"){switch(Nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ze(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Mr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[ka].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>ze(o.doubleValue)));return new Sn(i)}convertGeoPoint(e){return new Rn(ze(e.latitude),ze(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=hc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Yi(e));default:return null}}convertTimestamp(e){const n=Cr(e);return new _e(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ne.fromString(e);Ie(dy(r),9688,{name:e});const s=new Xi(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Yn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Ch(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class eC extends qy{constructor(e){super(),this.firestore=e}convertBytes(e){return new qt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}class Ts{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Ar extends Ba{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new la(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(bc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=Ar._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}Ar._jsonSchemaVersion="firestore/documentSnapshot/1.0",Ar._jsonSchema={type:Ze("string",Ar._jsonSchemaVersion),bundleSource:Ze("string","DocumentSnapshot"),bundleName:Ze("string"),bundle:Ze("string")};class la extends Ar{data(e={}){return super.data(e)}}class Yr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ts(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new la(this._firestore,this._userDataWriter,r.key,r,new Ts(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new la(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ts(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new la(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ts(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:tC(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Yr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=$u.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function tC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se(61501,{type:t})}}/**
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
 */function Sc(t){t=Lt(t,Ge);const e=Lt(t.firestore,Nn);return $P(ei(e),t._key).then((n=>Hy(e,t,n)))}Yr._jsonSchemaVersion="firestore/querySnapshot/1.0",Yr._jsonSchema={type:Ze("string",Yr._jsonSchemaVersion),bundleSource:Ze("string","QuerySnapshot"),bundleName:Ze("string"),bundle:Ze("string")};class Pc extends qy{constructor(e){super(),this.firestore=e}convertBytes(e){return new qt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}function vn(t){t=Lt(t,rr);const e=Lt(t.firestore,Nn),n=ei(e),r=new Pc(e);return By(t._query),qP(n,t._query).then((s=>new Yr(e,r,t,s)))}function Pn(t,e,n,...r){t=Lt(t,Ge);const s=Lt(t.firestore,Nn),i=Io(s);let o;return o=typeof(e=Le(e))=="string"||e instanceof ti?wh(i,"updateDoc",t._key,e,n,r):Eh(i,"updateDoc",t._key,e),Cc(s,[o.toMutation(t._key,tt.exists(!0))])}function kh(t){return Cc(Lt(t.firestore,Nn),[new vo(t._key,tt.none())])}function $a(t,e){const n=Lt(t.firestore,Nn),r=Tc(t),s=Ch(t.converter,e);return Cc(n,[yh(Io(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,tt.exists(!1))]).then((()=>r))}function Zn(t,...e){var n,r,s;t=Le(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Qp(e[o])||(i=e[o++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Qp(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,u,f;if(t instanceof Ge)u=Lt(t.firestore,Nn),f=fc(t._key.path),l={next:p=>{e[o]&&e[o](Hy(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Lt(t,rr);u=Lt(p.firestore,Nn),f=p._query;const m=new Pc(u);l={next:_=>{e[o]&&e[o](new Yr(u,m,p,_))},error:e[o+1],complete:e[o+2]},By(t._query)}return(function(m,_,S,k){const V=new mh(k),q=new fh(_,V,S);return m.asyncQueue.enqueueAndForget((async()=>lh(await Ua(m),q))),()=>{V.Ou(),m.asyncQueue.enqueueAndForget((async()=>uh(await Ua(m),q)))}})(ei(u),f,c,l)}function Cc(t,e){return(function(r,s){const i=new An;return r.asyncQueue.enqueueAndForget((async()=>SP(await jP(r),s,i))),i.promise})(ei(t),e)}function Hy(t,e,n){const r=n.docs.get(e._key),s=new Pc(t);return new Ar(t,s,e._key,r,new Ts(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const nC={maxAttempts:5};/**
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
 */class rC{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Io(e)}set(e,n,r){this._verifyNotCommitted();const s=vr(e,this._firestore),i=Ch(s.converter,n,r),o=yh(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,tt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=vr(e,this._firestore);let o;return o=typeof(n=Le(n))=="string"||n instanceof ti?wh(this._dataReader,"WriteBatch.update",i._key,n,r,s):Eh(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,tt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=vr(e,this._firestore);return this._mutations=this._mutations.concat(new vo(n._key,tt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(D.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function vr(t,e){if((t=Le(t)).firestore!==e)throw new z(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */class sC{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Io(e)}get(e){const n=vr(e,this._firestore),r=new eC(this._firestore);return this._transaction.lookup([n._key]).then((s=>{if(!s||s.length!==1)return se(24041);const i=s[0];if(i.isFoundDocument())return new Ba(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new Ba(this._firestore,r,n._key,null,n.converter);throw se(18433,{doc:i})}))}set(e,n,r){const s=vr(e,this._firestore),i=Ch(s.converter,n,r),o=yh(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=vr(e,this._firestore);let o;return o=typeof(n=Le(n))=="string"||n instanceof ti?wh(this._dataReader,"Transaction.update",i._key,n,r,s):Eh(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=vr(e,this._firestore);return this._transaction.delete(n._key),this}}/**
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
 */class iC extends sC{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=vr(e,this._firestore),r=new Pc(this._firestore);return super.get(e).then((s=>new Ar(this._firestore,r,n._key,s._document,new Ts(!1,!1),n.converter)))}}function oC(t,e,n){t=Lt(t,Nn);const r=Object.assign(Object.assign({},nC),n);return(function(i){if(i.maxAttempts<1)throw new z(D.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r),(function(i,o,c){const l=new An;return i.asyncQueue.enqueueAndForget((async()=>{const u=await BP(i);new LP(i.asyncQueue,u,c,o,l).zu()})),l.promise})(ei(t),(s=>e(new iC(t,s))),r)}function aC(t){return new vh("increment",t)}/**
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
 */function Gy(t){return ei(t=Lt(t,Nn)),new rC(t,(e=>Cc(t,e)))}(function(e,n=!0){(function(s){Qs=s})(zs),Zr(new Rr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Nn(new Yb(r.getProvider("auth-internal")),new eR(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new z(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Xi(u.options.projectId,f)})(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),wn(Xd,Zd,e),wn(Xd,Zd,"esm2017")})();/**
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
 */const Wy="functions";/**
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
 */class cC{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,$t(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
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
 */const nu="us-central1";class lC{constructor(e,n,r,s,i=nu,o=(...c)=>fetch(...c)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new cC(e,n,r,s),this.cancelAllRequests=new Promise(c=>{this.deleteService=()=>Promise.resolve(c())});try{const c=new URL(i);this.customDomain=c.origin+(c.pathname==="/"?"":c.pathname),this.region=nu}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function uC(t,e,n){const r=is(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(Su(t.emulatorOrigin),Pu("Functions",!0))}const Xp="@firebase/functions",Zp="0.12.9";/**
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
 */const hC="auth-internal",fC="app-check-internal",dC="messaging-internal";function pC(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),i=n.getProvider(hC),o=n.getProvider(dC),c=n.getProvider(fC);return new lC(s,i,o,c,r)};Zr(new Rr(Wy,e,"PUBLIC").setMultipleInstances(!0)),wn(Xp,Zp,t),wn(Xp,Zp,"esm2017")}/**
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
 */function mC(t=Nu(),e=nu){const r=ic(Le(t),Wy).getImmediate({identifier:e}),s=Rg("functions");return s&&gC(r,...s),r}function gC(t,e,n){uC(Le(t),e,n)}pC();const _C={apiKey:"AIzaSyCL63H3EpeK3A9SgLJ6NxkcWtzOnbZM5uU",authDomain:"qa-website2026.firebaseapp.com",projectId:"qa-website2026",messagingSenderId:"207652444805",appId:"1:207652444805:web:e5f9b11f0d4293475727ec"},Nh=Ng(_C),Is=Gb(Nh),Hs=GP(Nh);mC(Nh);const yi=on(null),ml=on(!0);function kc(){const t=Ct(()=>yi.value!==null);function e(){ml.value=!0,D0(Is,i=>{var o;i?yi.value={uid:i.uid,email:i.email||"",displayName:i.displayName||((o=i.email)==null?void 0:o.split("@")[0])||"User",photoURL:i.photoURL||void 0}:yi.value=null,ml.value=!1})}async function n(i,o){return(await P0(Is,i,o)).user}async function r(i,o,c){const l=await S0(Is,i,o);return await k0(l.user,{displayName:c}),l.user}async function s(){await O0(Is),yi.value=null}return{currentUser:yi,loading:ml,isAuthenticated:t,init:e,login:n,register:r,logout:s}}const em="/assets/qa-logo-BBgT2MGY.png",yC={key:0,class:"flex items-center gap-2"},vC=["src"],EC={key:1},wC=["src"],TC={key:0},IC={key:1},AC={class:"flex-1 space-y-1 px-3 py-4"},bC={class:"text-lg"},RC={key:0},SC={class:"border-t border-gray-200 p-4"},PC={key:0,class:"flex items-center gap-3"},CC={class:"flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold"},kC={class:"min-w-0 flex-1"},NC={class:"text-sm font-medium text-gray-900 truncate"},VC={class:"text-xs text-gray-500 truncate"},DC=ss({__name:"Sidebar",props:{collapsed:{type:Boolean},mobileOpen:{type:Boolean}},emits:["toggle","closeMobile"],setup(t,{emit:e}){const n=e,r=Ru(),s=kc(),i=[{name:"Dashboard",path:"/dashboard",icon:"📊"},{name:"Projects",path:"/projects",icon:"📁"}],o=c=>r.path.startsWith(c);return(c,l)=>{var f,p,m,_,S;const u=ao("router-link");return Ce(),Me(Bt,null,[te("aside",{class:Zt(["fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-300 lg:static lg:z-auto lg:translate-x-0 lg:transition-[width]",[t.collapsed?"lg:w-16":"lg:w-64",t.mobileOpen?"translate-x-0":"-translate-x-full"]])},[te("div",{class:Zt(["relative flex h-16 items-center border-b border-gray-200",t.collapsed?"justify-center px-2":"justify-between px-4"])},[t.collapsed?(Ce(),Me("div",EC,[te("img",{src:ht(em),alt:"QA-Suite logo",class:"h-8 w-8 rounded-sm object-cover"},null,8,wC)])):(Ce(),Me("div",yC,[te("img",{src:ht(em),alt:"QA-Suite logo",class:"h-10 w-10 rounded-sm object-cover"},null,8,vC),l[3]||(l[3]=te("span",{class:"text-sm font-medium text-gray-500"},"Suite",-1))])),te("button",{onClick:l[0]||(l[0]=k=>n("toggle")),class:Zt(["text-gray-500 hover:bg-gray-100 hover:text-gray-700",t.collapsed?"absolute -right-3 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full border border-gray-200 bg-white shadow-sm":"rounded-lg p-1.5"])},[t.collapsed?(Ce(),Me("span",TC,"→")):(Ce(),Me("span",IC,"←"))],2)],2),te("nav",AC,[(Ce(),Me(Bt,null,Eu(i,k=>Ke(u,{key:k.name,to:k.path,class:Zt(["flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",o(k.path)?"bg-primary-50 text-primary-700":"text-gray-600 hover:bg-gray-100 hover:text-gray-900"]),onClick:l[1]||(l[1]=V=>n("closeMobile"))},{default:oo(()=>[te("span",bC,lt(k.icon),1),t.collapsed?Xt("",!0):(Ce(),Me("span",RC,lt(k.name),1))]),_:2},1032,["to","class"])),64))]),te("div",SC,[t.collapsed?Xt("",!0):(Ce(),Me("div",PC,[te("div",CC,lt(((m=(p=(f=ht(s).currentUser)==null?void 0:f.displayName)==null?void 0:p.charAt(0))==null?void 0:m.toUpperCase())||"U"),1),te("div",kC,[te("p",NC,lt((_=ht(s).currentUser)==null?void 0:_.displayName),1),te("p",VC,lt((S=ht(s).currentUser)==null?void 0:S.email),1)])]))])],2),t.mobileOpen?(Ce(),Me("button",{key:0,type:"button","aria-label":"Close navigation",class:"fixed inset-0 z-30 bg-gray-900/40 lg:hidden",onClick:l[2]||(l[2]=k=>n("closeMobile"))})):Xt("",!0)],64)}}});function Be(t){return xy(Hs,t)}function it(t){return Tc(Hs,t)}function vi(t,e){return{id:t,...e,screenshotUrls:e.screenshotUrls??[]}}function OC(){async function t(l){const u=xt(Be("projects"),Mt("ownerId","==",l),Vn("createdAt","desc"));return(await vn(u)).docs.map(p=>({id:p.id,...p.data()}))}function e(l,u){const f=xt(Be("projects"),Mt("ownerId","==",l),Vn("createdAt","desc"));return Zn(f,p=>{u(p.docs.map(m=>({id:m.id,...m.data()})))},async p=>{console.warn("subscribeProjects error, falling back:",p.message);const m=xt(Be("projects"),Mt("ownerId","==",l));Zn(m,_=>{u(_.docs.map(S=>({id:S.id,...S.data()})))})})}async function n(l){const u=await Sc(it(`projects/${l}`));return u.exists()?{id:u.id,...u.data()}:null}async function r(l){return(await $a(Be("projects"),{...l,ownerId:l.ownerId,members:{[l.ownerId]:"owner"},bugCounter:0,ownershipVerified:l.ownershipVerified??!1,createdAt:_e.now()})).id}async function s(l,u){await Pn(it(`projects/${l}`),u)}async function i(l){await kh(it(`projects/${l}`))}async function o(l){await Pn(it(`projects/${l}`),{ownershipVerified:!0})}async function c(l,u,f){await Pn(it(`projects/${l}`),{[`members.${u}`]:f})}return{getProjects:t,subscribeProjects:e,getProject:n,createProject:r,updateProject:s,deleteProject:i,verifyOwnership:o,addMember:c}}function P1(){function t(c,l,u){const f=xt(Be("audit_jobs"),Mt("projectId","==",c),Vn("timestamp","desc"));return Zn(f,p=>l(p.docs.map(m=>({id:m.id,...m.data()}))),p=>{var m;console.error("Audit jobs snapshot error:",p),(p.code==="failed-precondition"||(m=p.message)!=null&&m.includes("index"))&&(console.warn("Composite index missing — deploy firestore.indexes.json"),l([])),u==null||u(p)})}async function e(c){const l=xt(Be("audit_jobs"),Mt("projectId","==",c),Vn("timestamp","desc"));return(await vn(l)).docs.map(f=>({id:f.id,...f.data()}))}async function n(c){const l=await Sc(it(`audit_jobs/${c}`));return l.exists()?{id:l.id,...l.data()}:null}async function r(c){return(await vn(Be(`audit_jobs/${c}/pages`))).docs.map(u=>u.data())}async function s(c){return(await vn(Be(`audit_jobs/${c}/vulnerabilities`))).docs.map(u=>u.data())}async function i(c){return(await vn(Be(`audit_jobs/${c}/performance_metrics`))).docs.map(u=>u.data())}async function o(c){const l=await e(c),u=["pages","vulnerabilities","performance_metrics"];for(const f of l){for(const p of u){const m=await vn(Be(`audit_jobs/${f.id}/${p}`));for(let _=0;_<m.docs.length;_+=450){const S=Gy(Hs);m.docs.slice(_,_+450).forEach(k=>S.delete(k.ref)),await S.commit()}}await kh(it(`audit_jobs/${f.id}`))}}return{subscribeAuditJobs:t,getAuditJobs:e,getAuditJob:n,getAuditPages:r,getVulnerabilities:s,getPerformanceMetrics:i,deleteAuditHistory:o}}function C1(){function t(o,c,l){const u=xt(Be("bug_list"),Mt("projectId","==",o),Vn("createdAt","desc"));return Zn(u,f=>c(f.docs.map(p=>vi(p.id,p.data()))),f=>{var p;if(console.error("Bug list snapshot error:",f),f.code==="failed-precondition"||(p=f.message)!=null&&p.includes("index")){const m=xt(Be("bug_list"),Mt("projectId","==",o));Zn(m,_=>{c(_.docs.map(S=>vi(S.id,S.data())))})}l==null||l(f)})}async function e(o){try{const c=xt(Be("bug_list"),Mt("projectId","==",o),Vn("createdAt","desc"));return(await vn(c)).docs.map(u=>vi(u.id,u.data()))}catch{const c=xt(Be("bug_list"),Mt("projectId","==",o));return(await vn(c)).docs.map(u=>vi(u.id,u.data()))}}async function n(o){const c=await Sc(it(`bug_list/${o}`));return c.exists()?vi(c.id,c.data()):null}async function r(o){const c=it(`projects/${o.projectId}`);let l="",u="";return await oC(Hs,async f=>{var S;const m=(((S=(await f.get(c)).data())==null?void 0:S.bugCounter)||0)+1;u=`QAS-${m}`,f.update(c,{bugCounter:m});const _=Tc(Be("bug_list"));l=_.id,f.set(_,{status:"Open",severity:"Medium",tags:[],assignees:[],commentCount:0,remediationGuide:null,screenshotUrls:[],...o,shortId:u,createdAt:_e.now(),lastEditedTime:_e.now()})}),{id:l,shortId:u}}async function s(o,c){await Pn(it(`bug_list/${o}`),{...c,lastEditedTime:_e.now()})}async function i(o){await kh(it(`bug_list/${o}`))}return{subscribeBugs:t,getBugs:e,getBug:n,createBug:r,updateBug:s,deleteBug:i}}function k1(){function t(n,r){const s=xt(Be(`bug_list/${n}/comments`),Vn("timestamp","asc"));return Zn(s,i=>{r(i.docs.map(o=>({id:o.id,...o.data()})))})}async function e(n,r){return await Pn(it(`bug_list/${n}`),{commentCount:aC(1)}),(await $a(Be(`bug_list/${n}/comments`),{...r,timestamp:_e.now()})).id}return{subscribeComments:t,addComment:e}}function N1(){function t(o,c){const l=xt(Be("test_cases"),Mt("projectId","==",o),Vn("createdAt","desc"));return Zn(l,u=>{c(u.docs.map(f=>({id:f.id,...f.data()})))})}async function e(o){const c=xt(Be("test_cases"),Mt("projectId","==",o),Vn("createdAt","desc"));return(await vn(c)).docs.map(u=>({id:u.id,...u.data()}))}async function n(o){return(await $a(Be("test_cases"),{status:"Untested",steps:[],tags:[],playwrightScript:null,lastRun:null,...o,createdAt:_e.now(),lastEditedTime:_e.now()})).id}async function r(o,c){await Pn(it(`test_cases/${o}`),{...c,lastEditedTime:_e.now()})}async function s(o,c){const l=await $a(Be(`test_cases/${o}/test_runs`),{...c,runAt:_e.now()});return await Pn(it(`test_cases/${o}`),{lastRun:_e.now(),status:c.status,lastEditedTime:_e.now()}),l.id}async function i(o){if(o.length===0)return[];const c=Gy(Hs),l=[];for(const u of o){const f=Tc(xy(Hs,"test_cases"));l.push(f.id),c.set(f,{status:"Untested",steps:[],tags:[],playwrightScript:null,lastRun:null,...u,createdAt:_e.now(),lastEditedTime:_e.now()})}return await c.commit(),l}return{subscribeTestCases:t,getTestCases:e,createTestCase:n,createBatchTestCases:i,updateTestCase:r,addTestRun:s}}function xC(){function t(r,s){const i=xt(Be("notifications"),Mt("userId","==",r),Vn("createdAt","desc"),ZP(50));return Zn(i,o=>{s(o.docs.map(c=>({id:c.id,...c.data()})))})}async function e(r){await Pn(it(`notifications/${r}`),{read:!0})}async function n(r){const s=xt(Be("notifications"),Mt("userId","==",r),Mt("read","==",!1)),o=(await vn(s)).docs.map(c=>Pn(c.ref,{read:!0}));await Promise.all(o)}return{subscribeNotifications:t,markAsRead:e,markAllAsRead:n}}function V1(){function t(c,l){const u=it(`projects/${c}`);return Zn(u,f=>{if(!f.exists()){l([]);return}const p=f.data(),m=(p==null?void 0:p.customPages)||[];l(m)},f=>{console.warn("Project document subscription error:",f.message),l([])})}async function e(c){var l;try{const u=await Sc(it(`projects/${c}`));return u.exists()?((l=u.data())==null?void 0:l.customPages)||[]:[]}catch(u){return console.warn("Failed to load project pages:",u.message),[]}}async function n(c,l){await Pn(it(`projects/${c}`),{customPages:l})}async function r(c,l){const u=await e(c),f=`page_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,p={id:f,...l,createdAt:new Date().toISOString()};return await n(c,[p,...u]),f}async function s(c,l,u){const p=(await e(c)).map(m=>m.id===l?{...m,...u}:m);await n(c,p)}async function i(c,l){const f=(await e(c)).filter(p=>p.id!==l);await n(c,f)}async function o(c,l){const u=await e(c),f=new Set(u.map(m=>m.url.toLowerCase())),p=[];for(const m of l)f.has(m.url.toLowerCase())||(f.add(m.url.toLowerCase()),p.push({id:`page_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,...m,createdAt:new Date().toISOString()}));await n(c,[...u,...p])}return{subscribeProjectPages:t,getProjectPages:e,saveProjectPages:n,addProjectPage:r,updateProjectPage:s,deleteProjectPage:i,batchAddProjectPages:o}}function D1(t){return t?("toDate"in t?t.toDate():t).toLocaleDateString():"Just now"}function MC(t){return t?("toDate"in t?t.toDate():t).toLocaleString():"Processing..."}function O1(t){switch(t){case"Urgent":return"bg-red-100 text-red-800";case"High":return"bg-orange-100 text-orange-800";case"Medium":return"bg-yellow-100 text-yellow-800";case"Low":return"bg-blue-100 text-blue-800";default:return"bg-gray-100 text-gray-800"}}function x1(t){switch(t){case"Not started":return"bg-gray-100 text-gray-700";case"Open":return"bg-blue-100 text-blue-800";case"In Progress":return"bg-yellow-100 text-yellow-800";case"In Review":return"bg-purple-100 text-purple-800";case"Resolved":return"bg-green-100 text-green-800";default:return"bg-gray-100 text-gray-700"}}const LC={class:"flex min-h-16 items-center justify-between gap-3 border-b border-gray-200 bg-white px-4 sm:px-6"},FC={class:"flex items-center gap-4"},UC={class:"min-w-0 truncate text-xl font-semibold text-gray-800"},jC={class:"flex items-center gap-2 sm:gap-4"},BC={class:"relative notification-container"},$C={key:0,class:"absolute top-1.5 right-1.5 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center text-[10px] font-bold text-white border-2 border-white"},qC={key:0,class:"absolute right-0 mt-2 w-80 sm:w-96 rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 z-50 overflow-hidden"},HC={class:"px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-gray-50/50"},GC={class:"flex items-center gap-2"},WC={key:0,class:"rounded-full bg-indigo-100 text-indigo-700 px-2 py-0.5 text-xs font-semibold"},zC={class:"max-h-80 overflow-y-auto divide-y divide-gray-100"},KC={key:0,class:"p-6 text-center text-gray-500"},QC=["onClick"],JC={key:0,class:"absolute left-1.5 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-indigo-600"},YC={class:"min-w-0 flex-1"},XC={class:"text-xs text-gray-600 line-clamp-2 mt-0.5"},ZC={class:"text-[10px] text-gray-400 mt-1 flex items-center gap-1"},e1={class:"border-t border-gray-100 bg-gray-50/50 p-2 text-center"},t1={class:"relative user-menu-container"},n1={class:"flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold"},r1={class:"hidden text-sm font-medium text-gray-700 sm:inline"},s1={key:0,class:"absolute right-0 mt-2 w-48 rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 z-50"},i1={class:"px-4 py-2 border-b border-gray-100"},o1={class:"text-sm font-medium text-gray-900 truncate"},a1=ss({__name:"Header",props:{collapsed:{type:Boolean},user:{}},emits:["toggle-sidebar"],setup(t,{emit:e}){const n=e,r=kc(),s=zT(),i=xC(),o=on(!1),c=on(!1),l=on([]);let u=null;const f=Ct(()=>l.value.filter(B=>!B.read).length),p=Ct(()=>l.value.slice(0,5));function m(B){const L=B.target;L.closest(".notification-container")||(c.value=!1),L.closest(".user-menu-container")||(o.value=!1)}yu(()=>{r.currentUser.value&&(u=i.subscribeNotifications(r.currentUser.value.uid,B=>{l.value=B})),document.addEventListener("click",m)}),vu(()=>{u==null||u(),document.removeEventListener("click",m)});const _=async()=>{o.value=!1,await r.logout(),s.push("/login")},S=()=>{c.value=!c.value,c.value&&(o.value=!1)},k=()=>{o.value=!o.value,o.value&&(c.value=!1)};async function V(){r.currentUser.value&&await i.markAllAsRead(r.currentUser.value.uid)}async function q(B){c.value=!1,B.read||await i.markAsRead(B.id),B.link&&s.push(B.link)}function U(B,L){const Z=`${B} ${L}`.toLowerCase();return Z.includes("error")||Z.includes("failed")||Z.includes("alert")||Z.includes("critical")?{icon:"fa-solid fa-triangle-exclamation",bg:"bg-red-100 text-red-600"}:Z.includes("passed")||Z.includes("success")||Z.includes("resolved")||Z.includes("completed")?{icon:"fa-solid fa-circle-check",bg:"bg-green-100 text-green-600"}:Z.includes("bug")||Z.includes("issue")?{icon:"fa-solid fa-bug",bg:"bg-amber-100 text-amber-600"}:Z.includes("audit")||Z.includes("crawl")||Z.includes("scan")?{icon:"fa-solid fa-shield-halved",bg:"bg-purple-100 text-purple-600"}:Z.includes("test")||Z.includes("suite")?{icon:"fa-solid fa-flask",bg:"bg-blue-100 text-blue-600"}:{icon:"fa-solid fa-bell",bg:"bg-indigo-100 text-indigo-600"}}return(B,L)=>{var fe,I,v,E,A;const Z=ao("router-link");return Ce(),Me("header",LC,[te("div",FC,[te("button",{type:"button","aria-label":"Toggle navigation",class:"rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 lg:hidden",onClick:L[0]||(L[0]=b=>n("toggle-sidebar"))},[...L[2]||(L[2]=[te("i",{class:"fa-solid fa-bars text-lg"},null,-1)])]),te("h2",UC,lt(B.$route.name),1)]),te("div",jC,[te("div",BC,[te("button",{type:"button","aria-label":"Notifications",onClick:S,class:"relative rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors focus:outline-none"},[L[3]||(L[3]=te("i",{class:"fa-solid fa-bell text-lg"},null,-1)),f.value>0?(Ce(),Me("span",$C,lt(f.value>9?"9+":f.value),1)):Xt("",!0)]),c.value?(Ce(),Me("div",qC,[te("div",HC,[te("div",GC,[L[4]||(L[4]=te("span",{class:"text-sm font-semibold text-gray-900"},"Notifications",-1)),f.value>0?(Ce(),Me("span",WC,lt(f.value)+" new ",1)):Xt("",!0)]),f.value>0?(Ce(),Me("button",{key:0,onClick:V,class:"text-xs font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition-colors"},[...L[5]||(L[5]=[te("i",{class:"fa-solid fa-check-double text-[10px]"},null,-1),te("span",null,"Mark all read",-1)])])):Xt("",!0)]),te("div",zC,[l.value.length===0?(Ce(),Me("div",KC,[...L[6]||(L[6]=[te("div",{class:"mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-400"},[te("i",{class:"fa-solid fa-bell-slash text-base"})],-1),te("p",{class:"text-sm font-medium text-gray-700"},"No notifications",-1),te("p",{class:"text-xs text-gray-400 mt-0.5"},"You're all caught up!",-1)])])):Xt("",!0),(Ce(!0),Me(Bt,null,Eu(p.value,b=>(Ce(),Me("div",{key:b.id,onClick:P=>q(b),class:Zt(["p-3.5 hover:bg-gray-50 cursor-pointer transition-colors flex items-start gap-3 relative",b.read?"opacity-70":"bg-indigo-50/20"])},[b.read?Xt("",!0):(Ce(),Me("div",JC)),te("div",{class:Zt(["flex-shrink-0 mt-0.5",b.read?"ml-0":"ml-1"])},[te("div",{class:Zt(["flex h-7 w-7 items-center justify-center rounded-md",U(b.title,b.message).bg])},[te("i",{class:Zt([U(b.title,b.message).icon,"text-xs"])},null,2)],2)],2),te("div",YC,[te("p",{class:Zt(["text-xs font-semibold text-gray-900 truncate",b.read?"font-medium":"font-bold"])},lt(b.title),3),te("p",XC,lt(b.message),1),te("p",ZC,[L[7]||(L[7]=te("i",{class:"fa-regular fa-clock text-[9px]"},null,-1)),te("span",null,lt(ht(MC)(b.createdAt)),1)])])],10,QC))),128))]),te("div",e1,[Ke(Z,{to:"/notifications",onClick:L[1]||(L[1]=b=>c.value=!1),class:"block w-full py-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"},{default:oo(()=>[...L[8]||(L[8]=[Iu(" View all notifications ",-1),te("i",{class:"fa-solid fa-arrow-right text-[10px] ml-1"},null,-1)])]),_:1})])])):Xt("",!0)]),te("div",t1,[te("button",{onClick:k,class:"flex items-center gap-2 rounded-full border border-gray-200 p-1 pr-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"},[te("div",n1,lt(((v=(I=(fe=ht(r).currentUser)==null?void 0:fe.displayName)==null?void 0:I.charAt(0))==null?void 0:v.toUpperCase())||"U"),1),te("span",r1,lt(((E=ht(r).currentUser)==null?void 0:E.displayName)||"User"),1),L[9]||(L[9]=te("i",{class:"fa-solid fa-chevron-down text-xs text-gray-400 hidden sm:inline"},null,-1))]),o.value?(Ce(),Me("div",s1,[te("div",i1,[L[10]||(L[10]=te("p",{class:"text-xs text-gray-500"},"Signed in as",-1)),te("p",o1,lt((A=ht(r).currentUser)==null?void 0:A.email),1)]),te("button",{onClick:_,class:"flex items-center w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50"},[...L[11]||(L[11]=[te("i",{class:"fa-solid fa-arrow-right-from-bracket mr-2 text-xs"},null,-1),te("span",null,"Sign out",-1)])])])):Xt("",!0)])])])}}}),c1={key:0,"aria-label":"Breadcrumb",class:"mb-4"},l1={class:"flex min-w-0 items-center gap-2 text-sm text-gray-500"},u1={key:0,"aria-hidden":"true",class:"text-gray-300"},h1={key:2,class:"truncate font-medium text-gray-800","aria-current":"page"},f1=ss({__name:"Breadcrumbs",setup(t){const e=Ru(),n=OC(),r=on("");Ss(()=>e.params.id,async i=>{if(r.value="",typeof i!="string")return;const o=await n.getProject(i);o&&e.params.id===i&&(r.value=o.name)},{immediate:!0});const s=Ct(()=>{const i=typeof e.params.id=="string"?e.params.id:"",o=[];if(e.name==="Dashboard")return[{label:"Dashboard",to:"/dashboard"}];if(e.name==="Projects")return[{label:"Projects",to:"/projects"}];if(e.name==="Notifications")return[{label:"Notifications",to:"/notifications"}];i&&(o.push({label:"Projects",to:"/projects"}),o.push({label:r.value||"Project",to:`/projects/${i}`}));const l={ProjectHome:"Page Audits",AuditResults:"Audit Results",BugList:"Bugs",TestCases:"Test Cases",TrendHistory:"History"}[String(e.name)];return l&&e.name!=="ProjectHome"&&o.push({label:l}),o});return(i,o)=>{const c=ao("RouterLink");return s.value.length?(Ce(),Me("nav",c1,[te("ol",l1,[(Ce(!0),Me(Bt,null,Eu(s.value,(l,u)=>(Ce(),Me("li",{key:`${l.label}-${u}`,class:"flex min-w-0 items-center gap-2"},[u>0?(Ce(),Me("span",u1,"/")):Xt("",!0),l.to&&u<s.value.length-1?(Ce(),ga(c,{key:1,to:l.to,class:"truncate transition-colors hover:text-indigo-600"},{default:oo(()=>[Iu(lt(l.label),1)]),_:2},1032,["to"])):(Ce(),Me("span",h1,lt(l.label),1))]))),128))])])):Xt("",!0)}}}),d1={class:"flex h-screen overflow-hidden bg-emerald-50/40"},p1={class:"flex flex-1 flex-col overflow-hidden"},m1={class:"min-w-0 flex-1 overflow-y-auto p-4 scrollbar-thin sm:p-6"},g1=ss({__name:"AppLayout",setup(t){const e=kc(),n=on(!1),r=on(!1);function s(){if(window.innerWidth<1024){r.value=!r.value;return}n.value=!n.value}function i(){r.value=!1}return(o,c)=>{const l=ao("router-view");return Ce(),Me("div",d1,[Ke(DC,{collapsed:n.value,"mobile-open":r.value,onToggle:s,onCloseMobile:i},null,8,["collapsed","mobile-open"]),te("div",p1,[Ke(a1,{collapsed:n.value,user:ht(e).currentUser,onToggleSidebar:s},null,8,["collapsed","user"]),te("main",m1,[Ke(f1),Ke(l)])])])}}}),_1=ss({__name:"App",setup(t){const e=kc(),n=Ru(),r=on(!1);return Ss(()=>n.meta.requiresAuth,s=>{r.value=s!==!1},{immediate:!0}),yu(()=>{e.init()}),(s,i)=>{const o=ao("router-view");return r.value&&ht(e).isAuthenticated?(Ce(),ga(g1,{key:0},{default:oo(()=>[Ke(o)]),_:1})):(Ce(),ga(o,{key:1}))}}}),y1="modulepreload",v1=function(t){return"/"+t},tm={},Ln=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(u=>{if(u=v1(u),u in tm)return;tm[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":y1,f||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),f)return new Promise((_,S)=>{m.addEventListener("load",_),m.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},zy=WT({history:AT(),routes:[{path:"/",redirect:"/dashboard"},{path:"/login",name:"Login",component:()=>Ln(()=>import("./LoginView-D1pY0UHW.js"),[]),meta:{requiresAuth:!1}},{path:"/dashboard",name:"Dashboard",component:()=>Ln(()=>import("./DashboardView-CUIbp4UH.js"),[]),meta:{requiresAuth:!0}},{path:"/projects",name:"Projects",component:()=>Ln(()=>import("./ProjectsView-ByCAMSug.js"),[]),meta:{requiresAuth:!0}},{path:"/projects/:id",name:"ProjectHome",component:()=>Ln(()=>import("./PageAuditsView-BLVrtcb2.js"),[]),meta:{requiresAuth:!0}},{path:"/projects/:id/overview",redirect:t=>({name:"ProjectHome",params:{id:t.params.id}})},{path:"/projects/:id/audit/:auditId",name:"AuditResults",component:()=>Ln(()=>import("./AuditResultsView-BSZGaqSq.js"),[]),meta:{requiresAuth:!0}},{path:"/projects/:id/bugs",name:"BugList",component:()=>Ln(()=>import("./BugListView-DlBiaxEU.js"),__vite__mapDeps([0,1])),meta:{requiresAuth:!0}},{path:"/projects/:id/test-cases",name:"TestCases",component:()=>Ln(()=>import("./TestCasesView-DRNVWXXa.js"),__vite__mapDeps([2,1])),meta:{requiresAuth:!0}},{path:"/projects/:id/pages",redirect:t=>({name:"ProjectHome",params:{id:t.params.id}})},{path:"/projects/:id/history",name:"TrendHistory",component:()=>Ln(()=>import("./TrendHistoryView-D3u_BzyP.js"),[]),meta:{requiresAuth:!0}},{path:"/notifications",name:"Notifications",component:()=>Ln(()=>import("./NotificationsView-BD9pVx9A.js"),[]),meta:{requiresAuth:!0}}]});zy.beforeEach(async(t,e,n)=>{t.meta.requiresAuth!==!1?(await Is.authStateReady(),Is.currentUser?n():n("/login")):n()});const Vh=Mw(_1);Vh.use(jw());Vh.use(zy);Vh.mount("#app");export{mu as $,ZP as A,ao as B,ga as C,A1 as D,I1 as E,Bt as F,ht as G,C1 as H,N1 as I,Ru as J,P1 as K,V1 as L,Ct as M,Is as N,Ss as O,O1 as P,D1 as Q,R1 as R,w1 as S,k1 as T,x1 as U,MC as V,ag as W,zv as X,aw as Y,Se as Z,pu as _,te as a,xC as a0,E1 as b,Me as c,ss as d,Xt as e,Iu as f,kc as g,yu as h,vu as i,Ke as j,oo as k,Eu as l,OC as m,Zt as n,Ce as o,vn as p,xt as q,on as r,xy as s,lt as t,zT as u,T1 as v,b1 as w,Hs as x,Mt as y,Vn as z};
