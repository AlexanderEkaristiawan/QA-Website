const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProjectDetailView-Ba_ELGy6.js","assets/ProjectDetailView-DRBwbBEL.css","assets/BugListView-DXfJu3ko.js","assets/useAI-DXbgWVvN.js","assets/TestCasesView-CTKXWl7d.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Zl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ve={},As=[],vn=()=>{},Kp=()=>!1,La=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Fa=t=>t.startsWith("onUpdate:"),ut=Object.assign,eu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},mv=Object.prototype.hasOwnProperty,Pe=(t,e)=>mv.call(t,e),ue=Array.isArray,bs=t=>to(t)==="[object Map]",qs=t=>to(t)==="[object Set]",_f=t=>to(t)==="[object Date]",pe=t=>typeof t=="function",Ge=t=>typeof t=="string",Pn=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",Qp=t=>(Ce(t)||pe(t))&&pe(t.then)&&pe(t.catch),Jp=Object.prototype.toString,to=t=>Jp.call(t),gv=t=>to(t).slice(8,-1),Yp=t=>to(t)==="[object Object]",tu=t=>Ge(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ai=Zl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ua=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},_v=/-\w/g,Ct=Ua(t=>t.replace(_v,e=>e.slice(1).toUpperCase())),yv=/\B([A-Z])/g,xr=Ua(t=>t.replace(yv,"-$1").toLowerCase()),ja=Ua(t=>t.charAt(0).toUpperCase()+t.slice(1)),jc=Ua(t=>t?`on${ja(t)}`:""),yn=(t,e)=>!Object.is(t,e),Go=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Xp=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},Ba=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let yf;const $a=()=>yf||(yf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function nu(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ge(r)?wv(r):nu(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ge(t)||Ce(t))return t}const vv=/;(?![^(]*\))/g,Ev=/:([^]+)/,Tv=/\/\*[^]*?\*\//g;function wv(t){const e={};return t.replace(Tv,"").split(vv).forEach(n=>{if(n){const r=n.split(Ev);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Xt(t){let e="";if(Ge(t))e=t;else if(ue(t))for(let n=0;n<t.length;n++){const r=Xt(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Iv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Av=Zl(Iv);function Zp(t){return!!t||t===""}function bv(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=Ir(t[r],e[r]);return n}function Ir(t,e){if(t===e)return!0;let n=_f(t),r=_f(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=Pn(t),r=Pn(e),n||r)return t===e;if(n=ue(t),r=ue(e),n||r)return n&&r?bv(t,e):!1;if(n=Ce(t),r=Ce(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!Ir(t[o],e[o]))return!1}}return String(t)===String(e)}function ru(t,e){return t.findIndex(n=>Ir(n,e))}const em=t=>!!(t&&t.__v_isRef===!0),Rt=t=>Ge(t)?t:t==null?"":ue(t)||Ce(t)&&(t.toString===Jp||!pe(t.toString))?em(t)?Rt(t.value):JSON.stringify(t,tm,2):String(t),tm=(t,e)=>em(e)?tm(t,e.value):bs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Bc(r,i)+" =>"]=s,n),{})}:qs(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Bc(n))}:Pn(e)?Bc(e):Ce(e)&&!ue(e)&&!Yp(e)?String(e):e,Bc=(t,e="")=>{var n;return Pn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ot;class nm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&ot&&(ot.active?(this.parent=ot,this.index=(ot.scopes||(ot.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const r=this.effects.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}}run(e){if(this._active){const n=ot;try{return ot=this,e()}finally{ot=n}}}on(){++this._on===1&&(this.prevScope=ot,ot=this)}off(){if(this._on>0&&--this._on===0){if(ot===this)ot=this.prevScope;else{let e=ot;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Rv(t){return new nm(t)}function Sv(){return ot}let De;const $c=new WeakSet;class rm{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ot&&(ot.active?ot.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,$c.has(this)&&($c.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||im(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,vf(this),om(this);const e=De,n=sn;De=this,sn=!0;try{return this.fn()}finally{am(this),De=e,sn=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ou(e);this.deps=this.depsTail=void 0,vf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?$c.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){hl(this)&&this.run()}get dirty(){return hl(this)}}let sm=0,bi,Ri;function im(t,e=!1){if(t.flags|=8,e){t.next=Ri,Ri=t;return}t.next=bi,bi=t}function su(){sm++}function iu(){if(--sm>0)return;if(Ri){let e=Ri;for(Ri=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;bi;){let e=bi;for(bi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function om(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function am(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),ou(r),Pv(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function hl(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(cm(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function cm(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ui)||(t.globalVersion=Ui,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!hl(t))))return;t.flags|=2;const e=t.dep,n=De,r=sn;De=t,sn=!0;try{om(t);const s=t.fn(t._value);(e.version===0||yn(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{De=n,sn=r,am(t),t.flags&=-3}}function ou(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)ou(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Pv(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let sn=!0;const lm=[];function Wn(){lm.push(sn),sn=!1}function zn(){const t=lm.pop();sn=t===void 0?!0:t}function vf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=De;De=void 0;try{e()}finally{De=n}}}let Ui=0;class Cv{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class au{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!De||!sn||De===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==De)n=this.activeLink=new Cv(De,this),De.deps?(n.prevDep=De.depsTail,De.depsTail.nextDep=n,De.depsTail=n):De.deps=De.depsTail=n,um(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=De.depsTail,n.nextDep=void 0,De.depsTail.nextDep=n,De.depsTail=n,De.deps===n&&(De.deps=r)}return n}trigger(e){this.version++,Ui++,this.notify(e)}notify(e){su();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{iu()}}}function um(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)um(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const fl=new WeakMap,Qr=Symbol(""),dl=Symbol(""),ji=Symbol("");function _t(t,e,n){if(sn&&De){let r=fl.get(t);r||fl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new au),s.map=r,s.key=n),s.track()}}function Fn(t,e,n,r,s,i){const o=fl.get(t);if(!o){Ui++;return}const c=l=>{l&&l.trigger()};if(su(),e==="clear")o.forEach(c);else{const l=ue(t),u=l&&tu(n);if(l&&n==="length"){const f=Number(r);o.forEach((p,m)=>{(m==="length"||m===ji||!Pn(m)&&m>=f)&&c(p)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(ji)),e){case"add":l?u&&c(o.get("length")):(c(o.get(Qr)),bs(t)&&c(o.get(dl)));break;case"delete":l||(c(o.get(Qr)),bs(t)&&c(o.get(dl)));break;case"set":bs(t)&&c(o.get(Qr));break}}iu()}function ps(t){const e=Se(t);return e===t?e:(_t(e,"iterate",ji),Zt(t)?e:e.map(an))}function qa(t){return _t(t=Se(t),"iterate",ji),t}function gn(t,e){return Kn(t)?Vs(Jr(t)?an(e):e):an(e)}const kv={__proto__:null,[Symbol.iterator](){return qc(this,Symbol.iterator,t=>gn(this,t))},concat(...t){return ps(this).concat(...t.map(e=>ue(e)?ps(e):e))},entries(){return qc(this,"entries",t=>(t[1]=gn(this,t[1]),t))},every(t,e){return Dn(this,"every",t,e,void 0,arguments)},filter(t,e){return Dn(this,"filter",t,e,n=>n.map(r=>gn(this,r)),arguments)},find(t,e){return Dn(this,"find",t,e,n=>gn(this,n),arguments)},findIndex(t,e){return Dn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Dn(this,"findLast",t,e,n=>gn(this,n),arguments)},findLastIndex(t,e){return Dn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Dn(this,"forEach",t,e,void 0,arguments)},includes(...t){return Hc(this,"includes",t)},indexOf(...t){return Hc(this,"indexOf",t)},join(t){return ps(this).join(t)},lastIndexOf(...t){return Hc(this,"lastIndexOf",t)},map(t,e){return Dn(this,"map",t,e,void 0,arguments)},pop(){return hi(this,"pop")},push(...t){return hi(this,"push",t)},reduce(t,...e){return Ef(this,"reduce",t,e)},reduceRight(t,...e){return Ef(this,"reduceRight",t,e)},shift(){return hi(this,"shift")},some(t,e){return Dn(this,"some",t,e,void 0,arguments)},splice(...t){return hi(this,"splice",t)},toReversed(){return ps(this).toReversed()},toSorted(t){return ps(this).toSorted(t)},toSpliced(...t){return ps(this).toSpliced(...t)},unshift(...t){return hi(this,"unshift",t)},values(){return qc(this,"values",t=>gn(this,t))}};function qc(t,e,n){const r=qa(t),s=r[e]();return r!==t&&!Zt(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const Nv=Array.prototype;function Dn(t,e,n,r,s,i){const o=qa(t),c=o!==t&&!Zt(t),l=o[e];if(l!==Nv[e]){const p=l.apply(t,i);return c?an(p):p}let u=n;o!==t&&(c?u=function(p,m){return n.call(this,gn(t,p),m,t)}:n.length>2&&(u=function(p,m){return n.call(this,p,m,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function Ef(t,e,n,r){const s=qa(t),i=s!==t&&!Zt(t);let o=n,c=!1;s!==t&&(i?(c=r.length===0,o=function(u,f,p){return c&&(c=!1,u=gn(t,u)),n.call(this,u,gn(t,f),p,t)}):n.length>3&&(o=function(u,f,p){return n.call(this,u,f,p,t)}));const l=s[e](o,...r);return c?gn(t,l):l}function Hc(t,e,n){const r=Se(t);_t(r,"iterate",ji);const s=r[e](...n);return(s===-1||s===!1)&&uu(n[0])?(n[0]=Se(n[0]),r[e](...n)):s}function hi(t,e,n=[]){Wn(),su();const r=Se(t)[e].apply(t,n);return iu(),zn(),r}const Vv=Zl("__proto__,__v_isRef,__isVue"),hm=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Pn));function Dv(t){Pn(t)||(t=String(t));const e=Se(this);return _t(e,"has",t),e.hasOwnProperty(t)}class fm{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?qv:gm:i?mm:pm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ue(e);if(!s){let l;if(o&&(l=kv[n]))return l;if(n==="hasOwnProperty")return Dv}const c=Reflect.get(e,n,Et(e)?e:r);if((Pn(n)?hm.has(n):Vv(n))||(s||_t(e,"get",n),i))return c;if(Et(c)){const l=o&&tu(n)?c:c.value;return s&&Ce(l)?ml(l):l}return Ce(c)?s?ml(c):Ha(c):c}}class dm extends fm{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ue(e)&&tu(n);if(!this._isShallow){const u=Kn(i);if(!Zt(r)&&!Kn(r)&&(i=Se(i),r=Se(r)),!o&&Et(i)&&!Et(r))return u||(i.value=r),!0}const c=o?Number(n)<e.length:Pe(e,n),l=Reflect.set(e,n,r,Et(e)?e:s);return e===Se(s)&&l&&(c?yn(r,i)&&Fn(e,"set",n,r):Fn(e,"add",n,r)),l}deleteProperty(e,n){const r=Pe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Fn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Pn(n)||!hm.has(n))&&_t(e,"has",n),r}ownKeys(e){return _t(e,"iterate",ue(e)?"length":Qr),Reflect.ownKeys(e)}}class Ov extends fm{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const xv=new dm,Mv=new Ov,Lv=new dm(!0);const pl=t=>t,Mo=t=>Reflect.getPrototypeOf(t);function Fv(t,e,n){return function(...r){const s=this.__v_raw,i=Se(s),o=bs(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?pl:e?Vs:an;return!e&&_t(i,"iterate",l?dl:Qr),ut(Object.create(u),{next(){const{value:p,done:m}=u.next();return m?{value:p,done:m}:{value:c?[f(p[0]),f(p[1])]:f(p),done:m}}})}}function Lo(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Uv(t,e){const n={get(s){const i=this.__v_raw,o=Se(i),c=Se(s);t||(yn(s,c)&&_t(o,"get",s),_t(o,"get",c));const{has:l}=Mo(o),u=e?pl:t?Vs:an;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&_t(Se(s),"iterate",Qr),s.size},has(s){const i=this.__v_raw,o=Se(i),c=Se(s);return t||(yn(s,c)&&_t(o,"has",s),_t(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Se(c),u=e?pl:t?Vs:an;return!t&&_t(l,"iterate",Qr),c.forEach((f,p)=>s.call(i,u(f),u(p),o))}};return ut(n,t?{add:Lo("add"),set:Lo("set"),delete:Lo("delete"),clear:Lo("clear")}:{add(s){const i=Se(this),o=Mo(i),c=Se(s),l=!e&&!Zt(s)&&!Kn(s)?c:s;return o.has.call(i,l)||yn(s,l)&&o.has.call(i,s)||yn(c,l)&&o.has.call(i,c)||(i.add(l),Fn(i,"add",l,l)),this},set(s,i){!e&&!Zt(i)&&!Kn(i)&&(i=Se(i));const o=Se(this),{has:c,get:l}=Mo(o);let u=c.call(o,s);u||(s=Se(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?yn(i,f)&&Fn(o,"set",s,i):Fn(o,"add",s,i),this},delete(s){const i=Se(this),{has:o,get:c}=Mo(i);let l=o.call(i,s);l||(s=Se(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Fn(i,"delete",s,void 0),u},clear(){const s=Se(this),i=s.size!==0,o=s.clear();return i&&Fn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Fv(s,t,e)}),n}function cu(t,e){const n=Uv(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Pe(n,s)&&s in r?n:r,s,i)}const jv={get:cu(!1,!1)},Bv={get:cu(!1,!0)},$v={get:cu(!0,!1)};const pm=new WeakMap,mm=new WeakMap,gm=new WeakMap,qv=new WeakMap;function Hv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Ha(t){return Kn(t)?t:lu(t,!1,xv,jv,pm)}function _m(t){return lu(t,!1,Lv,Bv,mm)}function ml(t){return lu(t,!0,Mv,$v,gm)}function lu(t,e,n,r,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=Hv(gv(t));if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function Jr(t){return Kn(t)?Jr(t.__v_raw):!!(t&&t.__v_isReactive)}function Kn(t){return!!(t&&t.__v_isReadonly)}function Zt(t){return!!(t&&t.__v_isShallow)}function uu(t){return t?!!t.__v_raw:!1}function Se(t){const e=t&&t.__v_raw;return e?Se(e):t}function ym(t){return!Pe(t,"__v_skip")&&Object.isExtensible(t)&&Xp(t,"__v_skip",!0),t}const an=t=>Ce(t)?Ha(t):t,Vs=t=>Ce(t)?ml(t):t;function Et(t){return t?t.__v_isRef===!0:!1}function En(t){return vm(t,!1)}function Gv(t){return vm(t,!0)}function vm(t,e){return Et(t)?t:new Wv(t,e)}class Wv{constructor(e,n){this.dep=new au,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Se(e),this._value=n?e:an(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||Zt(e)||Kn(e);e=r?e:Se(e),yn(e,n)&&(this._rawValue=e,this._value=r?e:an(e),this.dep.trigger())}}function ct(t){return Et(t)?t.value:t}const zv={get:(t,e,n)=>e==="__v_raw"?t:ct(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Et(s)&&!Et(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Em(t){return Jr(t)?t:new Proxy(t,zv)}class Kv{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new au(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ui-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&De!==this)return im(this,!0),!0}get value(){const e=this.dep.track();return cm(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Qv(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new Kv(r,s,n)}const Fo={},ia=new WeakMap;let Gr;function Jv(t,e=!1,n=Gr){if(n){let r=ia.get(n);r||ia.set(n,r=[]),r.push(t)}}function Yv(t,e,n=Ve){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=L=>s?L:Zt(L)||s===!1||s===0?Un(L,1):Un(L);let f,p,m,_,C=!1,k=!1;if(Et(t)?(p=()=>t.value,C=Zt(t)):Jr(t)?(p=()=>u(t),C=!0):ue(t)?(k=!0,C=t.some(L=>Jr(L)||Zt(L)),p=()=>t.map(L=>{if(Et(L))return L.value;if(Jr(L))return u(L);if(pe(L))return l?l(L,2):L()})):pe(t)?e?p=l?()=>l(t,2):t:p=()=>{if(m){Wn();try{m()}finally{zn()}}const L=Gr;Gr=f;try{return l?l(t,3,[_]):t(_)}finally{Gr=L}}:p=vn,e&&s){const L=p,Z=s===!0?1/0:s;p=()=>Un(L(),Z)}const V=Sv(),q=()=>{f.stop(),V&&V.active&&eu(V.effects,f)};if(i&&e){const L=e;e=(...Z)=>{const fe=L(...Z);return q(),fe}}let U=k?new Array(t.length).fill(Fo):Fo;const B=L=>{if(!(!(f.flags&1)||!f.dirty&&!L))if(e){const Z=f.run();if(L||s||C||(k?Z.some((fe,I)=>yn(fe,U[I])):yn(Z,U))){m&&m();const fe=Gr;Gr=f;try{const I=[Z,U===Fo?void 0:k&&U[0]===Fo?[]:U,_];U=Z,l?l(e,3,I):e(...I)}finally{Gr=fe}}}else f.run()};return c&&c(B),f=new rm(p),f.scheduler=o?()=>o(B,!1):B,_=L=>Jv(L,!1,f),m=f.onStop=()=>{const L=ia.get(f);if(L){if(l)l(L,4);else for(const Z of L)Z();ia.delete(f)}},e?r?B(!0):U=f.run():o?o(B.bind(null,!0),!0):f.run(),q.pause=f.pause.bind(f),q.resume=f.resume.bind(f),q.stop=q,q}function Un(t,e=1/0,n){if(e<=0||!Ce(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Et(t))Un(t.value,e,n);else if(ue(t))for(let r=0;r<t.length;r++)Un(t[r],e,n);else if(qs(t)||bs(t))t.forEach(r=>{Un(r,e,n)});else if(Yp(t)){for(const r in t)Un(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Un(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function no(t,e,n,r){try{return r?t(...r):t()}catch(s){Ga(s,e,n)}}function cn(t,e,n,r){if(pe(t)){const s=no(t,e,n,r);return s&&Qp(s)&&s.catch(i=>{Ga(i,e,n)}),s}if(ue(t)){const s=[];for(let i=0;i<t.length;i++)s.push(cn(t[i],e,n,r));return s}}function Ga(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ve;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let p=0;p<f.length;p++)if(f[p](t,l,u)===!1)return}c=c.parent}if(i){Wn(),no(i,null,10,[t,l,u]),zn();return}}Xv(t,n,s,r,o)}function Xv(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const St=[];let dn=-1;const Rs=[];let hr=null,ms=0;const Tm=Promise.resolve();let oa=null;function hu(t){const e=oa||Tm;return t?e.then(this?t.bind(this):t):e}function Zv(t){let e=dn+1,n=St.length;for(;e<n;){const r=e+n>>>1,s=St[r],i=Bi(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function fu(t){if(!(t.flags&1)){const e=Bi(t),n=St[St.length-1];!n||!(t.flags&2)&&e>=Bi(n)?St.push(t):St.splice(Zv(e),0,t),t.flags|=1,wm()}}function wm(){oa||(oa=Tm.then(Am))}function eE(t){ue(t)?Rs.push(...t):hr&&t.id===-1?hr.splice(ms+1,0,t):t.flags&1||(Rs.push(t),t.flags|=1),wm()}function Tf(t,e,n=dn+1){for(;n<St.length;n++){const r=St[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;St.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Im(t){if(Rs.length){const e=[...new Set(Rs)].sort((n,r)=>Bi(n)-Bi(r));if(Rs.length=0,hr){hr.push(...e);return}for(hr=e,ms=0;ms<hr.length;ms++){const n=hr[ms];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}hr=null,ms=0}}const Bi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Am(t){try{for(dn=0;dn<St.length;dn++){const e=St[dn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),no(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;dn<St.length;dn++){const e=St[dn];e&&(e.flags&=-2)}dn=-1,St.length=0,Im(),oa=null,(St.length||Rs.length)&&Am()}}let $t=null,bm=null;function aa(t){const e=$t;return $t=t,bm=t&&t.type.__scopeId||null,e}function Wa(t,e=$t,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&ua(-1);const i=aa(e),o=Yr.length;let c;try{c=t(...s)}finally{for(let l=Yr.length;l>o;l--)Qm();aa(i),r._d&&ua(1)}return c};return r._n=!0,r._c=!0,r._d=!0,r}function f1(t,e){if($t===null)return t;const n=Ya($t),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Ve]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Un(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function qr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Wn(),cn(l,n,8,[t.el,c,t,e]),zn())}}function Wo(t,e){if(yt){let n=yt.provides;const r=yt.parent&&yt.parent.provides;r===n&&(n=yt.provides=Object.create(r)),n[t]=e}}function on(t,e,n=!1){const r=XE();if(r||Ss){let s=Ss?Ss._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}const tE=Symbol.for("v-scx"),nE=()=>on(tE);function Si(t,e,n){return Rm(t,e,n)}function Rm(t,e,n=Ve){const{immediate:r,deep:s,flush:i,once:o}=n,c=ut({},n),l=e&&r||!e&&i!=="post";let u;if(qi){if(i==="sync"){const _=nE();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=vn,_.resume=vn,_.pause=vn,_}}const f=yt;c.call=(_,C,k)=>cn(_,f,C,k);let p=!1;i==="post"?c.scheduler=_=>{Nt(_,f&&f.suspense)}:i!=="sync"&&(p=!0,c.scheduler=(_,C)=>{C?_():fu(_)}),c.augmentJob=_=>{e&&(_.flags|=4),p&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const m=Yv(t,e,c);return qi&&(u?u.push(m):l&&m()),m}function rE(t,e,n){const r=this.proxy,s=Ge(t)?t.includes(".")?Sm(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=ro(this),c=Rm(s,i.bind(r),n);return o(),c}function Sm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const sE=Symbol("_vte"),iE=t=>t.__isTeleport,Gc=Symbol("_leaveCb");function du(t,e){t.shapeFlag&6&&t.component?(t.transition=e,du(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Hs(t,e){return pe(t)?ut({name:t.name},e,{setup:t}):t}function Pm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function wf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const ca=new WeakMap;function Pi(t,e,n,r,s=!1){if(ue(t)){t.forEach((k,V)=>Pi(k,e&&(ue(e)?e[V]:e),n,r,s));return}if(Ci(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Pi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Ya(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Ve?c.refs={}:c.refs,p=c.setupState,m=Se(p),_=p===Ve?Kp:k=>wf(f,k)?!1:Pe(m,k),C=(k,V)=>!(V&&wf(f,V));if(u!=null&&u!==l){if(If(e),Ge(u))f[u]=null,_(u)&&(p[u]=null);else if(Et(u)){const k=e;C(u,k.k)&&(u.value=null),k.k&&(f[k.k]=null)}}if(pe(l))no(l,c,12,[o,f]);else{const k=Ge(l),V=Et(l);if(k||V){const q=()=>{if(t.f){const U=k?_(l)?p[l]:f[l]:C()||!t.k?l.value:f[t.k];if(s)ue(U)&&eu(U,i);else if(ue(U))U.includes(i)||U.push(i);else if(k)f[l]=[i],_(l)&&(p[l]=f[l]);else{const B=[i];C(l,t.k)&&(l.value=B),t.k&&(f[t.k]=B)}}else k?(f[l]=o,_(l)&&(p[l]=o)):V&&(C(l,t.k)&&(l.value=o),t.k&&(f[t.k]=o))};if(o){const U=()=>{q(),ca.delete(t)};U.id=-1,ca.set(t,U),Nt(U,n)}else If(t),q()}}}function If(t){const e=ca.get(t);e&&(e.flags|=8,ca.delete(t))}$a().requestIdleCallback;$a().cancelIdleCallback;const Ci=t=>!!t.type.__asyncLoader,Cm=t=>t.type.__isKeepAlive;function oE(t,e){km(t,"a",e)}function aE(t,e){km(t,"da",e)}function km(t,e,n=yt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(za(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Cm(s.parent.vnode)&&cE(r,e,n,s),s=s.parent}}function cE(t,e,n,r){const s=za(e,t,r,!0);mu(()=>{eu(r[e],s)},n)}function za(t,e,n=yt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Wn();const c=ro(n),l=cn(e,n,t,o);return c(),zn(),l});return r?s.unshift(i):s.push(i),i}}const er=t=>(e,n=yt)=>{(!qi||t==="sp")&&za(t,(...r)=>e(...r),n)},lE=er("bm"),pu=er("m"),uE=er("bu"),hE=er("u"),fE=er("bum"),mu=er("um"),dE=er("sp"),pE=er("rtg"),mE=er("rtc");function gE(t,e=yt){za("ec",t,e)}const _E="components";function Ka(t,e){return vE(_E,t,!0,e)||t}const yE=Symbol.for("v-ndc");function vE(t,e,n=!0,r=!1){const s=$t||yt;if(s){const i=s.type;{const c=rT(i,!1);if(c&&(c===e||c===Ct(e)||c===ja(Ct(e))))return i}const o=Af(s[t]||i[t],e)||Af(s.appContext[t],e);return!o&&r?i:o}}function Af(t,e){return t&&(t[e]||t[Ct(e)]||t[ja(Ct(e))])}function Nm(t,e,n,r){let s;const i=n,o=ue(t);if(o||Ge(t)){const c=o&&Jr(t);let l=!1,u=!1;c&&(l=!Zt(t),u=Kn(t),t=qa(t)),s=new Array(t.length);for(let f=0,p=t.length;f<p;f++)s[f]=e(l?u?Vs(an(t[f])):an(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(Ce(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const gl=t=>t?Zm(t)?Ya(t):gl(t.parent):null,ki=ut(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>gl(t.parent),$root:t=>gl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Dm(t),$forceUpdate:t=>t.f||(t.f=()=>{fu(t.update)}),$nextTick:t=>t.n||(t.n=hu.bind(t.proxy)),$watch:t=>rE.bind(t)}),Wc=(t,e)=>t!==Ve&&!t.__isScriptSetup&&Pe(t,e),EE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Wc(r,e))return o[e]=1,r[e];if(s!==Ve&&Pe(s,e))return o[e]=2,s[e];if(Pe(i,e))return o[e]=3,i[e];if(n!==Ve&&Pe(n,e))return o[e]=4,n[e];_l&&(o[e]=0)}}const u=ki[e];let f,p;if(u)return e==="$attrs"&&_t(t.attrs,"get",""),u(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==Ve&&Pe(n,e))return o[e]=4,n[e];if(p=l.config.globalProperties,Pe(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Wc(s,e)?(s[e]=n,!0):r!==Ve&&Pe(r,e)?(r[e]=n,!0):Pe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==Ve&&c[0]!=="$"&&Pe(t,c)||Wc(e,c)||Pe(i,c)||Pe(r,c)||Pe(ki,c)||Pe(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Pe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function bf(t){return ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let _l=!0;function TE(t){const e=Dm(t),n=t.proxy,r=t.ctx;_l=!1,e.beforeCreate&&Rf(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:p,mounted:m,beforeUpdate:_,updated:C,activated:k,deactivated:V,beforeDestroy:q,beforeUnmount:U,destroyed:B,unmounted:L,render:Z,renderTracked:fe,renderTriggered:I,errorCaptured:v,serverPrefetch:E,expose:A,inheritAttrs:b,components:S,directives:T,filters:wt}=e;if(u&&wE(u,r,null),o)for(const Te in o){const _e=o[Te];pe(_e)&&(r[Te]=_e.bind(n))}if(s){const Te=s.call(n,n);Ce(Te)&&(t.data=Ha(Te))}if(_l=!0,i)for(const Te in i){const _e=i[Te],Lt=pe(_e)?_e.bind(n,n):pe(_e.get)?_e.get.bind(n,n):vn,tn=!pe(_e)&&pe(_e.set)?_e.set.bind(n):vn,Kt=Dt({get:Lt,set:tn});Object.defineProperty(r,Te,{enumerable:!0,configurable:!0,get:()=>Kt.value,set:Me=>Kt.value=Me})}if(c)for(const Te in c)Vm(c[Te],r,n,Te);if(l){const Te=pe(l)?l.call(n):l;Reflect.ownKeys(Te).forEach(_e=>{Wo(_e,Te[_e])})}f&&Rf(f,t,"c");function ze(Te,_e){ue(_e)?_e.forEach(Lt=>Te(Lt.bind(n))):_e&&Te(_e.bind(n))}if(ze(lE,p),ze(pu,m),ze(uE,_),ze(hE,C),ze(oE,k),ze(aE,V),ze(gE,v),ze(mE,fe),ze(pE,I),ze(fE,U),ze(mu,L),ze(dE,E),ue(A))if(A.length){const Te=t.exposed||(t.exposed={});A.forEach(_e=>{Object.defineProperty(Te,_e,{get:()=>n[_e],set:Lt=>n[_e]=Lt,enumerable:!0})})}else t.exposed||(t.exposed={});Z&&t.render===vn&&(t.render=Z),b!=null&&(t.inheritAttrs=b),S&&(t.components=S),T&&(t.directives=T),E&&Pm(t)}function wE(t,e,n=vn){ue(t)&&(t=yl(t));for(const r in t){const s=t[r];let i;Ce(s)?"default"in s?i=on(s.from||r,s.default,!0):i=on(s.from||r):i=on(s),Et(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Rf(t,e,n){cn(ue(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Vm(t,e,n,r){let s=r.includes(".")?Sm(n,r):()=>n[r];if(Ge(t)){const i=e[t];pe(i)&&Si(s,i)}else if(pe(t))Si(s,t.bind(n));else if(Ce(t))if(ue(t))t.forEach(i=>Vm(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Si(s,i,t)}}function Dm(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>la(l,u,o,!0)),la(l,e,o)),Ce(e)&&i.set(e,l),l}function la(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&la(t,i,n,!0),s&&s.forEach(o=>la(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=IE[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const IE={data:Sf,props:Pf,emits:Pf,methods:gi,computed:gi,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:gi,directives:gi,watch:bE,provide:Sf,inject:AE};function Sf(t,e){return e?t?function(){return ut(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function AE(t,e){return gi(yl(t),yl(e))}function yl(t){if(ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function At(t,e){return t?[...new Set([].concat(t,e))]:e}function gi(t,e){return t?ut(Object.create(null),t,e):e}function Pf(t,e){return t?ue(t)&&ue(e)?[...new Set([...t,...e])]:ut(Object.create(null),bf(t),bf(e??{})):e}function bE(t,e){if(!t)return e;if(!e)return t;const n=ut(Object.create(null),t);for(const r in e)n[r]=At(t[r],e[r]);return n}function Om(){return{app:null,config:{isNativeTag:Kp,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let RE=0;function SE(t,e){return function(r,s=null){pe(r)||(r=ut({},r)),s!=null&&!Ce(s)&&(s=null);const i=Om(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:RE++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:iT,get config(){return i.config},set config(f){},use(f,...p){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(u,...p)):pe(f)&&(o.add(f),f(u,...p))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,p){return p?(i.components[f]=p,u):i.components[f]},directive(f,p){return p?(i.directives[f]=p,u):i.directives[f]},mount(f,p,m){if(!l){const _=u._ceVNode||Xe(r,s);return _.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),t(_,f,m),l=!0,u._container=f,f.__vue_app__=u,Ya(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(cn(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,p){return i.provides[f]=p,u},runWithContext(f){const p=Ss;Ss=u;try{return f()}finally{Ss=p}}};return u}}let Ss=null;const PE=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ct(e)}Modifiers`]||t[`${xr(e)}Modifiers`];function CE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Ve;let s=n;const i=e.startsWith("update:"),o=i&&PE(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ge(f)?f.trim():f)),o.number&&(s=n.map(Ba)));let c,l=r[c=jc(e)]||r[c=jc(Ct(e))];!l&&i&&(l=r[c=jc(xr(e))]),l&&cn(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,cn(u,t,6,s)}}const kE=new WeakMap;function xm(t,e,n=!1){const r=n?kE:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!pe(t)){const l=u=>{const f=xm(u,e,!0);f&&(c=!0,ut(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(Ce(t)&&r.set(t,null),null):(ue(i)?i.forEach(l=>o[l]=null):ut(o,i),Ce(t)&&r.set(t,o),o)}function Qa(t,e){return!t||!La(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Pe(t,e[0].toLowerCase()+e.slice(1))||Pe(t,xr(e))||Pe(t,e))}function Cf(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:p,data:m,setupState:_,ctx:C,inheritAttrs:k}=t,V=aa(t);let q,U;try{if(n.shapeFlag&4){const L=s||r,Z=L;q=_n(u.call(Z,L,f,p,_,m,C)),U=c}else{const L=e;q=_n(L.length>1?L(p,{attrs:c,slots:o,emit:l}):L(p,null)),U=e.props?c:NE(c)}}catch(L){Yr.length=0,Ga(L,t,1),q=Xe(Ar)}let B=q;if(U&&k!==!1){const L=Object.keys(U),{shapeFlag:Z}=B;L.length&&Z&7&&(i&&L.some(Fa)&&(U=VE(U,i)),B=Ds(B,U,!1,!0))}return n.dirs&&(B=Ds(B,null,!1,!0),B.dirs=B.dirs?B.dirs.concat(n.dirs):n.dirs),n.transition&&du(B,n.transition),q=B,aa(V),q}const NE=t=>{let e;for(const n in t)(n==="class"||n==="style"||La(n))&&((e||(e={}))[n]=t[n]);return e},VE=(t,e)=>{const n={};for(const r in t)(!Fa(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function DE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?kf(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let p=0;p<f.length;p++){const m=f[p];if(Mm(o,r,m)&&!Qa(u,m))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?kf(r,o,u):!0:!!o;return!1}function kf(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Mm(e,t,i)&&!Qa(n,i))return!0}return!1}function Mm(t,e,n){const r=t[n],s=e[n];return n==="style"&&Ce(r)&&Ce(s)?!Ir(r,s):r!==s}function OE({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const Lm={},Fm=()=>Object.create(Lm),Um=t=>Object.getPrototypeOf(t)===Lm;function xE(t,e,n,r=!1){const s={},i=Fm();t.propsDefaults=Object.create(null),jm(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:_m(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function ME(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Se(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let p=0;p<f.length;p++){let m=f[p];if(Qa(t.emitsOptions,m))continue;const _=e[m];if(l)if(Pe(i,m))_!==i[m]&&(i[m]=_,u=!0);else{const C=Ct(m);s[C]=vl(l,c,C,_,t,!1)}else _!==i[m]&&(i[m]=_,u=!0)}}}else{jm(t,e,s,i)&&(u=!0);let f;for(const p in c)(!e||!Pe(e,p)&&((f=xr(p))===p||!Pe(e,f)))&&(l?n&&(n[p]!==void 0||n[f]!==void 0)&&(s[p]=vl(l,c,p,void 0,t,!0)):delete s[p]);if(i!==c)for(const p in i)(!e||!Pe(e,p))&&(delete i[p],u=!0)}u&&Fn(t.attrs,"set","")}function jm(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Ai(l))continue;const u=e[l];let f;s&&Pe(s,f=Ct(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:Qa(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Se(n),u=c||Ve;for(let f=0;f<i.length;f++){const p=i[f];n[p]=vl(s,l,p,u[p],t,!Pe(u,p))}}return o}function vl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Pe(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=ro(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===xr(n))&&(r=!0))}return r}const LE=new WeakMap;function Bm(t,e,n=!1){const r=n?LE:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!pe(t)){const f=p=>{l=!0;const[m,_]=Bm(p,e,!0);ut(o,m),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return Ce(t)&&r.set(t,As),As;if(ue(i))for(let f=0;f<i.length;f++){const p=Ct(i[f]);Nf(p)&&(o[p]=Ve)}else if(i)for(const f in i){const p=Ct(f);if(Nf(p)){const m=i[f],_=o[p]=ue(m)||pe(m)?{type:m}:ut({},m),C=_.type;let k=!1,V=!0;if(ue(C))for(let q=0;q<C.length;++q){const U=C[q],B=pe(U)&&U.name;if(B==="Boolean"){k=!0;break}else B==="String"&&(V=!1)}else k=pe(C)&&C.name==="Boolean";_[0]=k,_[1]=V,(k||Pe(_,"default"))&&c.push(p)}}const u=[o,c];return Ce(t)&&r.set(t,u),u}function Nf(t){return t[0]!=="$"&&!Ai(t)}const gu=t=>t==="_"||t==="_ctx"||t==="$stable",_u=t=>ue(t)?t.map(_n):[_n(t)],FE=(t,e,n)=>{if(e._n)return e;const r=Wa((...s)=>_u(e(...s)),n);return r._c=!1,r},$m=(t,e,n)=>{const r=t._ctx;for(const s in t){if(gu(s))continue;const i=t[s];if(pe(i))e[s]=FE(s,i,r);else if(i!=null){const o=_u(i);e[s]=()=>o}}},qm=(t,e)=>{const n=_u(e);t.slots.default=()=>n},Hm=(t,e,n)=>{for(const r in e)(n||!gu(r))&&(t[r]=e[r])},UE=(t,e,n)=>{const r=t.slots=Fm();if(t.vnode.shapeFlag&32){const s=e._;s?(Hm(r,e,n),n&&Xp(r,"_",s,!0)):$m(e,r)}else e&&qm(t,e)},jE=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Ve;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:Hm(s,e,n):(i=!e.$stable,$m(e,s)),o=e}else e&&(qm(t,e),o={default:1});if(i)for(const c in s)!gu(c)&&o[c]==null&&delete s[c]},Nt=GE;function BE(t){return $E(t)}function $E(t,e){const n=$a();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:p,nextSibling:m,setScopeId:_=vn,insertStaticContent:C}=t,k=(y,w,R,O=null,j=null,x=null,K=void 0,G=null,H=!!w.dynamicChildren)=>{if(y===w)return;y&&!fi(y,w)&&(O=M(y),Me(y,j,x,!0),y=null),w.patchFlag===-2&&(H=!1,w.dynamicChildren=null);const{type:$,ref:ie,shapeFlag:J}=w;switch($){case Ja:V(y,w,R,O);break;case Ar:q(y,w,R,O);break;case zo:y==null&&U(w,R,O,K);break;case Yt:S(y,w,R,O,j,x,K,G,H);break;default:J&1?Z(y,w,R,O,j,x,K,G,H):J&6?T(y,w,R,O,j,x,K,G,H):(J&64||J&128)&&$.process(y,w,R,O,j,x,K,G,H,ee)}ie!=null&&j?Pi(ie,y&&y.ref,x,w||y,!w):ie==null&&y&&y.ref!=null&&Pi(y.ref,null,x,y,!0)},V=(y,w,R,O)=>{if(y==null)r(w.el=c(w.children),R,O);else{const j=w.el=y.el;w.children!==y.children&&u(j,w.children)}},q=(y,w,R,O)=>{y==null?r(w.el=l(w.children||""),R,O):w.el=y.el},U=(y,w,R,O)=>{[y.el,y.anchor]=C(y.children,w,R,O,y.el,y.anchor)},B=({el:y,anchor:w},R,O)=>{let j;for(;y&&y!==w;)j=m(y),r(y,R,O),y=j;r(w,R,O)},L=({el:y,anchor:w})=>{let R;for(;y&&y!==w;)R=m(y),s(y),y=R;s(w)},Z=(y,w,R,O,j,x,K,G,H)=>{if(w.type==="svg"?K="svg":w.type==="math"&&(K="mathml"),y==null)fe(w,R,O,j,x,K,G,H);else{const $=y.el&&y.el._isVueCE?y.el:null;try{$&&$._beginPatch(),E(y,w,j,x,K,G,H)}finally{$&&$._endPatch()}}},fe=(y,w,R,O,j,x,K,G)=>{let H,$;const{props:ie,shapeFlag:J,transition:te,dirs:ae}=y;if(H=y.el=o(y.type,x,ie&&ie.is,ie),J&8?f(H,y.children):J&16&&v(y.children,H,null,O,j,zc(y,x),K,G),ae&&qr(y,null,O,"created"),I(H,y,y.scopeId,K,O),ie){for(const de in ie)de!=="value"&&!Ai(de)&&i(H,de,null,ie[de],x,O);"value"in ie&&i(H,"value",null,ie.value,x),($=ie.onVnodeBeforeMount)&&fn($,O,y)}ae&&qr(y,null,O,"beforeMount");const oe=qE(j,te);oe&&te.beforeEnter(H),r(H,w,R),(($=ie&&ie.onVnodeMounted)||oe||ae)&&Nt(()=>{try{$&&fn($,O,y),oe&&te.enter(H),ae&&qr(y,null,O,"mounted")}finally{}},j)},I=(y,w,R,O,j)=>{if(R&&_(y,R),O)for(let x=0;x<O.length;x++)_(y,O[x]);if(j){let x=j.subTree;if(w===x||Km(x.type)&&(x.ssContent===w||x.ssFallback===w)){const K=j.vnode;I(y,K,K.scopeId,K.slotScopeIds,j.parent)}}},v=(y,w,R,O,j,x,K,G,H=0)=>{for(let $=H;$<y.length;$++){const ie=y[$]=G?Ln(y[$]):_n(y[$]);k(null,ie,w,R,O,j,x,K,G)}},E=(y,w,R,O,j,x,K)=>{const G=w.el=y.el;let{patchFlag:H,dynamicChildren:$,dirs:ie}=w;H|=y.patchFlag&16;const J=y.props||Ve,te=w.props||Ve;let ae;if(R&&Hr(R,!1),(ae=te.onVnodeBeforeUpdate)&&fn(ae,R,w,y),ie&&qr(w,y,R,"beforeUpdate"),R&&Hr(R,!0),$&&(!y.dynamicChildren||y.dynamicChildren.length!==$.length)&&(H=0,K=!1,$=null),(J.innerHTML&&te.innerHTML==null||J.textContent&&te.textContent==null)&&f(G,""),$?A(y.dynamicChildren,$,G,R,O,zc(w,j),x):K||_e(y,w,G,null,R,O,zc(w,j),x,!1),H>0){if(H&16)b(G,J,te,R,j);else if(H&2&&J.class!==te.class&&i(G,"class",null,te.class,j),H&4&&i(G,"style",J.style,te.style,j),H&8){const oe=w.dynamicProps;for(let de=0;de<oe.length;de++){const Ae=oe[de],Fe=J[Ae],Ke=te[Ae];(Ke!==Fe||Ae==="value")&&i(G,Ae,Fe,Ke,j,R)}}H&1&&y.children!==w.children&&f(G,w.children)}else!K&&$==null&&b(G,J,te,R,j);((ae=te.onVnodeUpdated)||ie)&&Nt(()=>{ae&&fn(ae,R,w,y),ie&&qr(w,y,R,"updated")},O)},A=(y,w,R,O,j,x,K)=>{for(let G=0;G<w.length;G++){const H=y[G],$=w[G],ie=H.el&&(H.type===Yt||!fi(H,$)||H.shapeFlag&198)?p(H.el):R;k(H,$,ie,null,O,j,x,K,!0)}},b=(y,w,R,O,j)=>{if(w!==R){if(w!==Ve)for(const x in w)!Ai(x)&&!(x in R)&&i(y,x,w[x],null,j,O);for(const x in R){if(Ai(x))continue;const K=R[x],G=w[x];K!==G&&x!=="value"&&i(y,x,G,K,j,O)}"value"in R&&i(y,"value",w.value,R.value,j)}},S=(y,w,R,O,j,x,K,G,H)=>{const $=w.el=y?y.el:c(""),ie=w.anchor=y?y.anchor:c("");let{patchFlag:J,dynamicChildren:te,slotScopeIds:ae}=w;ae&&(G=G?G.concat(ae):ae),y==null?(r($,R,O),r(ie,R,O),v(w.children||[],R,ie,j,x,K,G,H)):J>0&&J&64&&te&&y.dynamicChildren&&y.dynamicChildren.length===te.length?(A(y.dynamicChildren,te,R,j,x,K,G),(w.key!=null||j&&w===j.subTree)&&Gm(y,w,!0)):_e(y,w,R,ie,j,x,K,G,H)},T=(y,w,R,O,j,x,K,G,H)=>{w.slotScopeIds=G,y==null?w.shapeFlag&512?j.ctx.activate(w,R,O,K,H):wt(w,R,O,j,x,K,H):zt(y,w,H)},wt=(y,w,R,O,j,x,K)=>{const G=y.component=YE(y,O,j);if(Cm(y)&&(G.ctx.renderer=ee),ZE(G,!1,K),G.asyncDep){if(j&&j.registerDep(G,ze,K),!y.el){const H=G.subTree=Xe(Ar);q(null,H,w,R),y.placeholder=H.el}}else ze(G,y,w,R,j,x,K)},zt=(y,w,R)=>{const O=w.component=y.component;if(DE(y,w,R))if(O.asyncDep&&!O.asyncResolved){Te(O,w,R);return}else O.next=w,O.update();else w.el=y.el,O.vnode=w},ze=(y,w,R,O,j,x,K)=>{const G=()=>{if(y.isMounted){let{next:J,bu:te,u:ae,parent:oe,vnode:de}=y;{const ft=Wm(y);if(ft){J&&(J.el=de.el,Te(y,J,K)),ft.asyncDep.then(()=>{Nt(()=>{y.isUnmounted||$()},j)});return}}let Ae=J,Fe;Hr(y,!1),J?(J.el=de.el,Te(y,J,K)):J=de,te&&Go(te),(Fe=J.props&&J.props.onVnodeBeforeUpdate)&&fn(Fe,oe,J,de),Hr(y,!0);const Ke=Cf(y),Qt=y.subTree;y.subTree=Ke,k(Qt,Ke,p(Qt.el),M(Qt),y,j,x),J.el=Ke.el,Ae===null&&OE(y,Ke.el),ae&&Nt(ae,j),(Fe=J.props&&J.props.onVnodeUpdated)&&Nt(()=>fn(Fe,oe,J,de),j)}else{let J;const{el:te,props:ae}=w,{bm:oe,m:de,parent:Ae,root:Fe,type:Ke}=y,Qt=Ci(w);Hr(y,!1),oe&&Go(oe),!Qt&&(J=ae&&ae.onVnodeBeforeMount)&&fn(J,Ae,w),Hr(y,!0);{Fe.ce&&Fe.ce._hasShadowRoot()&&Fe.ce._injectChildStyle(Ke,y.parent?y.parent.type:void 0);const ft=y.subTree=Cf(y);k(null,ft,R,O,y,j,x),w.el=ft.el}if(de&&Nt(de,j),!Qt&&(J=ae&&ae.onVnodeMounted)){const ft=w;Nt(()=>fn(J,Ae,ft),j)}(w.shapeFlag&256||Ae&&Ci(Ae.vnode)&&Ae.vnode.shapeFlag&256)&&y.a&&Nt(y.a,j),y.isMounted=!0,w=R=O=null}};y.scope.on();const H=y.effect=new rm(G);y.scope.off();const $=y.update=H.run.bind(H),ie=y.job=H.runIfDirty.bind(H);ie.i=y,ie.id=y.uid,H.scheduler=()=>fu(ie),Hr(y,!0),$()},Te=(y,w,R)=>{w.component=y;const O=y.vnode.props;y.vnode=w,y.next=null,ME(y,w.props,O,R),jE(y,w.children,R),Wn(),Tf(y),zn()},_e=(y,w,R,O,j,x,K,G,H=!1)=>{const $=y&&y.children,ie=y?y.shapeFlag:0,J=w.children,{patchFlag:te,shapeFlag:ae}=w;if(te>0){if(te&128){tn($,J,R,O,j,x,K,G,H);return}else if(te&256){Lt($,J,R,O,j,x,K,G,H);return}}ae&8?(ie&16&&kt($,j,x),J!==$&&f(R,J)):ie&16?ae&16?tn($,J,R,O,j,x,K,G,H):kt($,j,x,!0):(ie&8&&f(R,""),ae&16&&v(J,R,O,j,x,K,G,H))},Lt=(y,w,R,O,j,x,K,G,H)=>{y=y||As,w=w||As;const $=y.length,ie=w.length,J=Math.min($,ie);let te;for(te=0;te<J;te++){const ae=w[te]=H?Ln(w[te]):_n(w[te]);k(y[te],ae,R,null,j,x,K,G,H)}$>ie?kt(y,j,x,!0,!1,J):v(w,R,O,j,x,K,G,H,J)},tn=(y,w,R,O,j,x,K,G,H)=>{let $=0;const ie=w.length;let J=y.length-1,te=ie-1;for(;$<=J&&$<=te;){const ae=y[$],oe=w[$]=H?Ln(w[$]):_n(w[$]);if(fi(ae,oe))k(ae,oe,R,null,j,x,K,G,H);else break;$++}for(;$<=J&&$<=te;){const ae=y[J],oe=w[te]=H?Ln(w[te]):_n(w[te]);if(fi(ae,oe))k(ae,oe,R,null,j,x,K,G,H);else break;J--,te--}if($>J){if($<=te){const ae=te+1,oe=ae<ie?w[ae].el:O;for(;$<=te;)k(null,w[$]=H?Ln(w[$]):_n(w[$]),R,oe,j,x,K,G,H),$++}}else if($>te)for(;$<=J;)Me(y[$],j,x,!0),$++;else{const ae=$,oe=$,de=new Map;for($=oe;$<=te;$++){const st=w[$]=H?Ln(w[$]):_n(w[$]);st.key!=null&&de.set(st.key,$)}let Ae,Fe=0;const Ke=te-oe+1;let Qt=!1,ft=0;const ir=new Array(Ke);for($=0;$<Ke;$++)ir[$]=0;for($=ae;$<=J;$++){const st=y[$];if(Fe>=Ke){Me(st,j,x,!0);continue}let Jt;if(st.key!=null)Jt=de.get(st.key);else for(Ae=oe;Ae<=te;Ae++)if(ir[Ae-oe]===0&&fi(st,w[Ae])){Jt=Ae;break}Jt===void 0?Me(st,j,x,!0):(ir[Jt-oe]=$+1,Jt>=ft?ft=Jt:Qt=!0,k(st,w[Jt],R,null,j,x,K,G,H),Fe++)}const Xs=Qt?HE(ir):As;for(Ae=Xs.length-1,$=Ke-1;$>=0;$--){const st=oe+$,Jt=w[st],Eo=w[st+1],ls=st+1<ie?Eo.el||zm(Eo):O;ir[$]===0?k(null,Jt,R,ls,j,x,K,G,H):Qt&&(Ae<0||$!==Xs[Ae]?Kt(Jt,R,ls,2):Ae--)}}},Kt=(y,w,R,O,j=null)=>{const{el:x,type:K,transition:G,children:H,shapeFlag:$}=y;if($&6){Kt(y.component.subTree,w,R,O);return}if($&128){y.suspense.move(w,R,O);return}if($&64){K.move(y,w,R,ee);return}if(K===Yt){r(x,w,R);for(let J=0;J<H.length;J++)Kt(H[J],w,R,O);r(y.anchor,w,R);return}if(K===zo){B(y,w,R);return}if(O!==2&&$&1&&G)if(O===0)G.persisted&&!x[Gc]?r(x,w,R):(G.beforeEnter(x),r(x,w,R),Nt(()=>G.enter(x),j));else{const{leave:J,delayLeave:te,afterLeave:ae}=G,oe=()=>{y.ctx.isUnmounted?s(x):r(x,w,R)},de=()=>{const Ae=x._isLeaving||!!x[Gc];x._isLeaving&&x[Gc](!0),G.persisted&&!Ae?oe():J(x,()=>{oe(),ae&&ae()})};te?te(x,oe,de):de()}else r(x,w,R)},Me=(y,w,R,O=!1,j=!1)=>{const{type:x,props:K,ref:G,children:H,dynamicChildren:$,shapeFlag:ie,patchFlag:J,dirs:te,cacheIndex:ae,memo:oe}=y;if(J===-2&&(j=!1),G!=null&&(Wn(),Pi(G,null,R,y,!0),zn()),ae!=null&&(w.renderCache[ae]=void 0),ie&256){w.ctx.deactivate(y);return}const de=ie&1&&te,Ae=!Ci(y);let Fe;if(Ae&&(Fe=K&&K.onVnodeBeforeUnmount)&&fn(Fe,w,y),ie&6)Ft(y.component,R,O);else{if(ie&128){y.suspense.unmount(R,O);return}de&&qr(y,null,w,"beforeUnmount"),ie&64?y.type.remove(y,w,R,ee,O):$&&!$.hasOnce&&(x!==Yt||J>0&&J&64)?kt($,w,R,!1,!0):(x===Yt&&J&384||!j&&ie&16)&&kt(H,w,R),O&&Le(y)}const Ke=oe!=null&&ae==null;(Ae&&(Fe=K&&K.onVnodeUnmounted)||de||Ke)&&Nt(()=>{Fe&&fn(Fe,w,y),de&&qr(y,null,w,"unmounted"),Ke&&(y.el=null)},R)},Le=y=>{const{type:w,el:R,anchor:O,transition:j}=y;if(w===Yt){sr(R,O);return}if(w===zo){L(y);return}const x=()=>{s(R),j&&!j.persisted&&j.afterLeave&&j.afterLeave()};if(y.shapeFlag&1&&j&&!j.persisted){const{leave:K,delayLeave:G}=j,H=()=>K(R,x);G?G(y.el,x,H):H()}else x()},sr=(y,w)=>{let R;for(;y!==w;)R=m(y),s(y),y=R;s(w)},Ft=(y,w,R)=>{const{bum:O,scope:j,job:x,subTree:K,um:G,m:H,a:$}=y;Vf(H),Vf($),O&&Go(O),j.stop(),x&&(x.flags|=8,Me(K,y,w,R)),G&&Nt(G,w),Nt(()=>{y.isUnmounted=!0},w)},kt=(y,w,R,O=!1,j=!1,x=0)=>{for(let K=x;K<y.length;K++)Me(y[K],w,R,O,j)},M=y=>{if(y.shapeFlag&6)return M(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const w=m(y.anchor||y.el),R=w&&w[sE];return R?m(R):w};let X=!1;const Q=(y,w,R)=>{let O;y==null?w._vnode&&(Me(w._vnode,null,null,!0),O=w._vnode.component):k(w._vnode||null,y,w,null,null,null,R),w._vnode=y,X||(X=!0,Tf(O),Im(),X=!1)},ee={p:k,um:Me,m:Kt,r:Le,mt:wt,mc:v,pc:_e,pbc:A,n:M,o:t};return{render:Q,hydrate:void 0,createApp:SE(Q)}}function zc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Hr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function qE(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Gm(t,e,n=!1){const r=t.children,s=e.children;if(ue(r)&&ue(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=Ln(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Gm(o,c)),c.type===Ja&&(c.patchFlag===-1&&(c=s[i]=Ln(c)),c.el=o.el),c.type===Ar&&!c.el&&(c.el=o.el)}}function HE(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Wm(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Wm(e)}function Vf(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function zm(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?zm(e.subTree):null}const Km=t=>t.__isSuspense;function GE(t,e){e&&e.pendingBranch?ue(t)?e.effects.push(...t):e.effects.push(t):eE(t)}const Yt=Symbol.for("v-fgt"),Ja=Symbol.for("v-txt"),Ar=Symbol.for("v-cmt"),zo=Symbol.for("v-stc"),Yr=[];let qt=null;function Ue(t=!1){Yr.push(qt=t?null:[])}function Qm(){Yr.pop(),qt=Yr[Yr.length-1]||null}let $i=1;function ua(t,e=!1){$i+=t,t<0&&qt&&e&&(qt.hasOnce=!0)}function Jm(t){return t.dynamicChildren=$i>0?qt||As:null,Qm(),$i>0&&qt&&qt.push(t),t}function Je(t,e,n,r,s,i){return Jm(ne(t,e,n,r,s,i,!0))}function El(t,e,n,r,s){return Jm(Xe(t,e,n,r,s,!0))}function ha(t){return t?t.__v_isVNode===!0:!1}function fi(t,e){return t.type===e.type&&t.key===e.key}const Ym=({key:t})=>t??null,Ko=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ge(t)||Et(t)||pe(t)?{i:$t,r:t,k:e,f:!!n}:t:null);function ne(t,e=null,n=null,r=0,s=null,i=t===Yt?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Ym(e),ref:e&&Ko(e),scopeId:bm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:$t};return c?(fa(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ge(n)?8:16),$i>0&&!o&&qt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&qt.push(l),l}const Xe=WE;function WE(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===yE)&&(t=Ar),ha(t)){const c=Ds(t,e,!0);return n&&fa(c,n),$i>0&&!i&&qt&&(c.shapeFlag&6?qt[qt.indexOf(t)]=c:qt.push(c)),c.patchFlag=-2,c}if(sT(t)&&(t=t.__vccOpts),e){e=zE(e);let{class:c,style:l}=e;c&&!Ge(c)&&(e.class=Xt(c)),Ce(l)&&(uu(l)&&!ue(l)&&(l=ut({},l)),e.style=nu(l))}const o=Ge(t)?1:Km(t)?128:iE(t)?64:Ce(t)?4:pe(t)?2:0;return ne(t,e,n,r,s,o,i,!0)}function zE(t){return t?uu(t)||Um(t)?ut({},t):t:null}function Ds(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?KE(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&Ym(u),ref:e&&e.ref?n&&i?ue(i)?i.concat(Ko(e)):[i,Ko(e)]:Ko(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Yt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Ds(t.ssContent),ssFallback:t.ssFallback&&Ds(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&du(f,l.clone(f)),f}function Xm(t=" ",e=0){return Xe(Ja,null,t,e)}function d1(t,e){const n=Xe(zo,null,t);return n.staticCount=e,n}function pn(t="",e=!1){return e?(Ue(),El(Ar,null,t)):Xe(Ar,null,t)}function _n(t){return t==null||typeof t=="boolean"?Xe(Ar):ue(t)?Xe(Yt,null,t.slice()):ha(t)?Ln(t):Xe(Ja,null,String(t))}function Ln(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Ds(t)}function fa(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ue(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),fa(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Um(e)?e._ctx=$t:s===3&&$t&&($t.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(pe(e)){if(r&65){fa(t,{default:e});return}e={default:e,_ctx:$t},n=32}else e=String(e),r&64?(n=16,e=[Xm(e)]):n=8;t.children=e,t.shapeFlag|=n}function KE(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Xt([e.class,r.class]));else if(s==="style")e.style=nu([e.style,r.style]);else if(La(s)){const i=e[s],o=r[s];o&&i!==o&&!(ue(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!Fa(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function fn(t,e,n,r=null){cn(t,e,7,[n,r])}const QE=Om();let JE=0;function YE(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||QE,i={uid:JE++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new nm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bm(r,s),emitsOptions:xm(r,s),emit:null,emitted:null,propsDefaults:Ve,inheritAttrs:r.inheritAttrs,ctx:Ve,data:Ve,props:Ve,attrs:Ve,slots:Ve,refs:Ve,setupState:Ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=CE.bind(null,i),t.ce&&t.ce(i),i}let yt=null;const XE=()=>yt||$t;let da,Tl;{const t=$a(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};da=e("__VUE_INSTANCE_SETTERS__",n=>yt=n),Tl=e("__VUE_SSR_SETTERS__",n=>qi=n)}const ro=t=>{const e=yt;return da(t),t.scope.on(),()=>{t.scope.off(),da(e)}},Df=()=>{yt&&yt.scope.off(),da(null)};function Zm(t){return t.vnode.shapeFlag&4}let qi=!1;function ZE(t,e=!1,n=!1){e&&Tl(e);const{props:r,children:s}=t.vnode,i=Zm(t);xE(t,r,i,e),UE(t,s,n||e);const o=i?eT(t,e):void 0;return e&&Tl(!1),o}function eT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,EE);const{setup:r}=n;if(r){Wn();const s=t.setupContext=r.length>1?nT(t):null,i=ro(t),o=no(r,t,0,[t.props,s]),c=Qp(o);if(zn(),i(),(c||t.sp)&&!Ci(t)&&Pm(t),c){if(o.then(Df,Df),e)return o.then(l=>{Of(t,l)}).catch(l=>{Ga(l,t,0)});t.asyncDep=o}else Of(t,o)}else eg(t)}function Of(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=Em(e)),eg(t)}function eg(t,e,n){const r=t.type;t.render||(t.render=r.render||vn);{const s=ro(t);Wn();try{TE(t)}finally{zn(),s()}}}const tT={get(t,e){return _t(t,"get",""),t[e]}};function nT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,tT),slots:t.slots,emit:t.emit,expose:e}}function Ya(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Em(ym(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in ki)return ki[n](t)},has(e,n){return n in e||n in ki}})):t.proxy}function rT(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function sT(t){return pe(t)&&"__vccOpts"in t}const Dt=(t,e)=>Qv(t,e,qi);function tg(t,e,n){try{ua(-1);const r=arguments.length;return r===2?Ce(e)&&!ue(e)?ha(e)?Xe(t,null,[e]):Xe(t,e):Xe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&ha(n)&&(n=[n]),Xe(t,e,n))}finally{ua(1)}}const iT="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let wl;const xf=typeof window<"u"&&window.trustedTypes;if(xf)try{wl=xf.createPolicy("vue",{createHTML:t=>t})}catch{}const ng=wl?t=>wl.createHTML(t):t=>t,oT="http://www.w3.org/2000/svg",aT="http://www.w3.org/1998/Math/MathML",Mn=typeof document<"u"?document:null,Mf=Mn&&Mn.createElement("template"),cT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Mn.createElementNS(oT,t):e==="mathml"?Mn.createElementNS(aT,t):n?Mn.createElement(t,{is:n}):Mn.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Mn.createTextNode(t),createComment:t=>Mn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Mn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Mf.innerHTML=ng(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=Mf.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},lT=Symbol("_vtc");function uT(t,e,n){const r=t[lT];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Lf=Symbol("_vod"),hT=Symbol("_vsh"),fT=Symbol(""),dT=/(?:^|;)\s*display\s*:/;function pT(t,e,n){const r=t.style,s=Ge(n);let i=!1;if(n&&!s){if(e)if(Ge(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&_i(r,c,"")}else for(const o in e)n[o]==null&&_i(r,o,"");for(const o in n){o==="display"&&(i=!0);const c=n[o];c!=null?gT(t,o,!Ge(e)&&e?e[o]:void 0,c)||_i(r,o,c):_i(r,o,"")}}else if(s){if(e!==n){const o=r[fT];o&&(n+=";"+o),r.cssText=n,i=dT.test(n)}}else e&&t.removeAttribute("style");Lf in t&&(t[Lf]=i?r.display:"",t[hT]&&(r.display="none"))}const Ff=/\s*!important$/;function _i(t,e,n){if(ue(n))n.forEach(r=>_i(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=mT(t,e);Ff.test(n)?t.setProperty(xr(r),n.replace(Ff,""),"important"):t[r]=n}}const Uf=["Webkit","Moz","ms"],Kc={};function mT(t,e){const n=Kc[e];if(n)return n;let r=Ct(e);if(r!=="filter"&&r in t)return Kc[e]=r;r=ja(r);for(let s=0;s<Uf.length;s++){const i=Uf[s]+r;if(i in t)return Kc[e]=i}return e}function gT(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Ge(r)&&n===r}const jf="http://www.w3.org/1999/xlink";function Bf(t,e,n,r,s,i=Av(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(jf,e.slice(6,e.length)):t.setAttributeNS(jf,e,n):n==null||i&&!Zp(n)?t.removeAttribute(e):t.setAttribute(e,i?"":Pn(n)?String(n):n)}function $f(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?ng(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Zp(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function jn(t,e,n,r){t.addEventListener(e,n,r)}function _T(t,e,n,r){t.removeEventListener(e,n,r)}const qf=Symbol("_vei");function yT(t,e,n,r,s=null){const i=t[qf]||(t[qf]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=TT(e);if(r){const u=i[e]=AT(r,s);jn(t,c,u,l)}else o&&(_T(t,c,o,l),i[e]=void 0)}}const vT=/(Once|Passive|Capture)$/,ET=/^on:?(?:Once|Passive|Capture)$/;function TT(t){let e,n;for(;(n=t.match(vT))&&!ET.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):xr(t.slice(2)),e]}let Qc=0;const wT=Promise.resolve(),IT=()=>Qc||(wT.then(()=>Qc=0),Qc=Date.now());function AT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(ue(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),c=[r];for(let l=0;l<o.length&&!r._stopped;l++){const u=o[l];u&&cn(u,e,5,c)}}else cn(s,e,5,[r])};return n.value=t,n.attached=IT(),n}const Hf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,bT=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?uT(t,r,o):e==="style"?pT(t,n,r):La(e)?Fa(e)||yT(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):RT(t,e,r,o))?($f(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Bf(t,e,r,o,i,e!=="value")):t._isVueCE&&(ST(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ge(r)))?$f(t,Ct(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Bf(t,e,r,o))};function RT(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Hf(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Hf(e)&&Ge(n)?!1:e in t}function ST(t,e){const n=t._def.props;if(!n)return!1;const r=Ct(e);return Array.isArray(n)?n.some(s=>Ct(s)===r):Object.keys(n).some(s=>Ct(s)===r)}const br=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ue(e)?n=>Go(e,n):e};function PT(t){t.target.composing=!0}function Gf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const en=Symbol("_assign");function Wf(t,e,n){return e&&(t=t.trim()),n&&(t=Ba(t)),t}const p1={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[en]=br(s);const i=r||s.props&&s.props.type==="number";jn(t,e?"change":"input",o=>{o.target.composing||t[en](Wf(t.value,n,i))}),(n||i)&&jn(t,"change",()=>{t.value=Wf(t.value,n,i)}),e||(jn(t,"compositionstart",PT),jn(t,"compositionend",Gf),jn(t,"change",Gf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[en]=br(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?Ba(t.value):t.value,l=e??"";if(c===l)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l)}},m1={deep:!0,created(t,e,n){t[en]=br(n),jn(t,"change",()=>{const r=t._modelValue,s=Os(t),i=t.checked,o=t[en];if(ue(r)){const c=ru(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(qs(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(rg(t,i))})},mounted:zf,beforeUpdate(t,e,n){t[en]=br(n),zf(t,e,n)}};function zf(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ue(e))s=ru(e,r.props.value)>-1;else if(qs(e))s=e.has(r.props.value);else{if(e===n)return;s=Ir(e,rg(t,!0))}t.checked!==s&&(t.checked=s)}const g1={created(t,{value:e},n){t.checked=Ir(e,n.props.value),t[en]=br(n),jn(t,"change",()=>{t[en](Os(t))})},beforeUpdate(t,{value:e,oldValue:n},r){t[en]=br(r),e!==n&&(t.checked=Ir(e,r.props.value))}},_1={deep:!0,created(t,{value:e,modifiers:{number:n}},r){t._modelValue=e,jn(t,"change",()=>{const s=Array.prototype.filter.call(t.options,i=>i.selected).map(i=>n?Ba(Os(i)):Os(i));t[en](t.multiple?qs(t._modelValue)?new Set(s):s:s[0]),t._assigning=!0,hu(()=>{t._assigning=!1})}),t[en]=br(r)},mounted(t,{value:e}){Kf(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[en]=br(n)},updated(t,{value:e}){t._assigning||Kf(t,e)}};function Kf(t,e){const n=t.multiple,r=ue(e);if(!(n&&!r&&!qs(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=Os(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=ru(e,c)>-1}else o.selected=e.has(c);else if(Ir(Os(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function Os(t){return"_value"in t?t._value:t.value}function rg(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const CT=["ctrl","shift","alt","meta"],kT={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>CT.some(n=>t[`${n}Key`]&&!e.includes(n))},y1=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const c=kT[e[o]];if(c&&c(s,e))return}return t(s,...i)}))},NT={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},v1=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const i=xr(s.key);if(e.some(o=>o===i||NT[o]===i))return t(s)}))},VT=ut({patchProp:bT},cT);let Qf;function DT(){return Qf||(Qf=BE(VT))}const OT=((...t)=>{const e=DT().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=MT(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,xT(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function xT(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function MT(t){return Ge(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const LT=Symbol();var Jf;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Jf||(Jf={}));function FT(){const t=Rv(!0),e=t.run(()=>En({}));let n=[],r=[];const s=ym({install(i){s._a=i,i.provide(LT,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const gs=typeof document<"u";function sg(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function UT(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&sg(t.default)}const Re=Object.assign;function Jc(t,e){const n={};for(const r in e){const s=e[r];n[r]=ln(s)?s.map(t):t(s)}return n}const Ni=()=>{},ln=Array.isArray;function Yf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const ig=/#/g,jT=/&/g,BT=/\//g,$T=/=/g,qT=/\?/g,og=/\+/g,HT=/%5B/g,GT=/%5D/g,ag=/%5E/g,WT=/%60/g,cg=/%7B/g,zT=/%7C/g,lg=/%7D/g,KT=/%20/g;function yu(t){return t==null?"":encodeURI(""+t).replace(zT,"|").replace(HT,"[").replace(GT,"]")}function QT(t){return yu(t).replace(cg,"{").replace(lg,"}").replace(ag,"^")}function Il(t){return yu(t).replace(og,"%2B").replace(KT,"+").replace(ig,"%23").replace(jT,"%26").replace(WT,"`").replace(cg,"{").replace(lg,"}").replace(ag,"^")}function JT(t){return Il(t).replace($T,"%3D")}function YT(t){return yu(t).replace(ig,"%23").replace(qT,"%3F")}function XT(t){return YT(t).replace(BT,"%2F")}function Hi(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const ZT=/\/$/,ew=t=>t.replace(ZT,"");function Yc(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=sw(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:Hi(o)}}function tw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function nw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&xs(e.matched[r],n.matched[s])&&ug(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function xs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ug(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!rw(t[n],e[n]))return!1;return!0}function rw(t,e){return ln(t)?Zf(t,e):ln(e)?Zf(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Zf(t,e){return ln(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function sw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const lr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let Al=(function(t){return t.pop="pop",t.push="push",t})({}),Xc=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function iw(t){if(!t)if(gs){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),ew(t)}const ow=/^[^#]+#/;function aw(t,e){return t.replace(ow,"#")+e}function cw(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Xa=()=>({left:window.scrollX,top:window.scrollY});function lw(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=cw(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function ed(t,e){return(history.state?history.state.position-e:-1)+t}const bl=new Map;function uw(t,e){bl.set(t,e)}function hw(t){const e=bl.get(t);return bl.delete(t),e}function fw(t){return typeof t=="string"||t&&typeof t=="object"}function hg(t){return typeof t=="string"||typeof t=="symbol"}let $e=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const fg=Symbol("");$e.MATCHER_NOT_FOUND+"",$e.NAVIGATION_GUARD_REDIRECT+"",$e.NAVIGATION_ABORTED+"",$e.NAVIGATION_CANCELLED+"",$e.NAVIGATION_DUPLICATED+"";function Ms(t,e){return Re(new Error,{type:t,[fg]:!0},e)}function On(t,e){return t instanceof Error&&fg in t&&(e==null||!!(t.type&e))}const dw=["params","query","hash"];function pw(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of dw)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function mw(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(og," "),i=s.indexOf("="),o=Hi(i<0?s:s.slice(0,i)),c=i<0?null:Hi(s.slice(i+1));if(o in e){let l=e[o];ln(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function td(t){let e="";for(let n in t){const r=t[n];if(n=JT(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ln(r)?r.map(s=>s&&Il(s)):[r&&Il(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function gw(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ln(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const _w=Symbol(""),nd=Symbol(""),Za=Symbol(""),vu=Symbol(""),Rl=Symbol("");function di(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function fr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=m=>{m===!1?l(Ms($e.NAVIGATION_ABORTED,{from:n,to:e})):m instanceof Error?l(m):fw(m)?l(Ms($e.NAVIGATION_GUARD_REDIRECT,{from:e,to:m})):(o&&r.enterCallbacks[s]===o&&typeof m=="function"&&o.push(m),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let p=Promise.resolve(f);t.length<3&&(p=p.then(u)),p.catch(m=>l(m))})}function Zc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(sg(l)){const u=(l.__vccOpts||l)[e];u&&i.push(fr(u,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const p=UT(f)?f.default:f;o.mods[c]=f,o.components[c]=p;const m=(p.__vccOpts||p)[e];return m&&fr(m,n,r,o,c,s)()}))}}return i}function yw(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>xs(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>xs(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let vw=()=>location.protocol+"//"+location.host;function dg(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),Xf(c,"")}return Xf(n,t)+r+s}function Ew(t,e,n,r){let s=[],i=[],o=null;const c=({state:m})=>{const _=dg(t,location),C=n.value,k=e.value;let V=0;if(m){if(n.value=_,e.value=m,o&&o===C){o=null;return}V=k?m.position-k.position:0}else r(_);s.forEach(q=>{q(n.value,C,{delta:V,type:Al.pop,direction:V?V>0?Xc.forward:Xc.back:Xc.unknown})})};function l(){o=n.value}function u(m){s.push(m);const _=()=>{const C=s.indexOf(m);C>-1&&s.splice(C,1)};return i.push(_),_}function f(){if(document.visibilityState==="hidden"){const{history:m}=window;if(!m.state)return;m.replaceState(Re({},m.state,{scroll:Xa()}),"")}}function p(){for(const m of i)m();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:u,destroy:p}}function rd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Xa():null}}function Tw(t){const{history:e,location:n}=window,r={value:dg(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const p=t.indexOf("#"),m=p>-1?(n.host&&document.querySelector("base")?t:t.slice(p))+l:vw()+t+l;try{e[f?"replaceState":"pushState"](u,"",m),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](m)}}function o(l,u){i(l,Re({},e.state,rd(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function c(l,u){const f=Re({},s.value,e.state,{forward:l,scroll:Xa()});i(f.current,f,!0),i(l,Re({},rd(r.value,l,null),{position:f.position+1},u),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function ww(t){t=iw(t);const e=Tw(t),n=Ew(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Re({location:"",base:t,go:r,createHref:aw.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let zr=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var et=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(et||{});const Iw={type:zr.Static,value:""},Aw=/[a-zA-Z0-9_]/;function bw(t){if(!t)return[[]];if(t==="/")return[[Iw]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=et.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function p(){u&&(n===et.Static?i.push({type:zr.Static,value:u}):n===et.Param||n===et.ParamRegExp||n===et.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:zr.Param,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function m(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==et.ParamRegExp){r=n,n=et.EscapeNext;continue}switch(n){case et.Static:l==="/"?(u&&p(),o()):l===":"?(p(),n=et.Param):m();break;case et.EscapeNext:m(),n=r;break;case et.Param:l==="("?n=et.ParamRegExp:Aw.test(l)?m():(p(),n=et.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case et.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=et.ParamRegExpEnd:f+=l;break;case et.ParamRegExpEnd:p(),n=et.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===et.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),p(),o(),s}const sd="[^/]+?",Rw={sensitive:!1,strict:!1,start:!0,end:!0};var bt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(bt||{});const Sw=/[.+*?^${}()[\]/\\]/g;function Pw(t,e){const n=Re({},Rw,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[bt.Root];n.strict&&!u.length&&(s+="/");for(let p=0;p<u.length;p++){const m=u[p];let _=bt.Segment+(n.sensitive?bt.BonusCaseSensitive:0);if(m.type===zr.Static)p||(s+="/"),s+=m.value.replace(Sw,"\\$&"),_+=bt.Static;else if(m.type===zr.Param){const{value:C,repeatable:k,optional:V,regexp:q}=m;i.push({name:C,repeatable:k,optional:V});const U=q||sd;if(U!==sd){_+=bt.BonusCustomRegExp;try{`${U}`}catch(L){throw new Error(`Invalid custom RegExp for param "${C}" (${U}): `+L.message)}}let B=k?`((?:${U})(?:/(?:${U}))*)`:`(${U})`;p||(B=V&&u.length<2?`(?:/${B})`:"/"+B),V&&(B+="?"),s+=B,_+=bt.Dynamic,V&&(_+=bt.BonusOptional),k&&(_+=bt.BonusRepeatable),U===".*"&&(_+=bt.BonusWildcard)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=bt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),p={};if(!f)return null;for(let m=1;m<f.length;m++){const _=f[m]||"",C=i[m-1];p[C.name]=_&&C.repeatable?_.split("/"):_}return p}function l(u){let f="",p=!1;for(const m of t){(!p||!f.endsWith("/"))&&(f+="/"),p=!1;for(const _ of m)if(_.type===zr.Static)f+=_.value;else if(_.type===zr.Param){const{value:C,repeatable:k,optional:V}=_,q=C in u?u[C]:"";if(ln(q)&&!k)throw new Error(`Provided param "${C}" is an array but it is not repeatable (* or + modifiers)`);const U=ln(q)?q.join("/"):q;if(!U)if(V)m.length<2&&(f.endsWith("/")?f=f.slice(0,-1):p=!0);else throw new Error(`Missing required param "${C}"`);f+=U}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function Cw(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===bt.Static+bt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===bt.Static+bt.Segment?1:-1:0}function pg(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Cw(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(id(r))return 1;if(id(s))return-1}return s.length-r.length}function id(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const kw={strict:!1,end:!0,sensitive:!1};function Nw(t,e,n){const r=Pw(bw(t.path),n),s=Re(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function Vw(t,e){const n=[],r=new Map;e=Yf(kw,e);function s(p){return r.get(p)}function i(p,m,_){const C=!_,k=ad(p);k.aliasOf=_&&_.record;const V=Yf(e,p),q=[k];if("alias"in p){const L=typeof p.alias=="string"?[p.alias]:p.alias;for(const Z of L)q.push(ad(Re({},k,{components:_?_.record.components:k.components,path:Z,aliasOf:_?_.record:k})))}let U,B;for(const L of q){const{path:Z}=L;if(m&&Z[0]!=="/"){const fe=m.record.path,I=fe[fe.length-1]==="/"?"":"/";L.path=m.record.path+(Z&&I+Z)}if(U=Nw(L,m,V),_?_.alias.push(U):(B=B||U,B!==U&&B.alias.push(U),C&&p.name&&!cd(U)&&o(p.name)),mg(U)&&l(U),k.children){const fe=k.children;for(let I=0;I<fe.length;I++)i(fe[I],U,_&&_.children[I])}_=_||U}return B?()=>{o(B)}:Ni}function o(p){if(hg(p)){const m=r.get(p);m&&(r.delete(p),n.splice(n.indexOf(m),1),m.children.forEach(o),m.alias.forEach(o))}else{const m=n.indexOf(p);m>-1&&(n.splice(m,1),p.record.name&&r.delete(p.record.name),p.children.forEach(o),p.alias.forEach(o))}}function c(){return n}function l(p){const m=xw(p,n);n.splice(m,0,p),p.record.name&&!cd(p)&&r.set(p.record.name,p)}function u(p,m){let _,C={},k,V;if("name"in p&&p.name){if(_=r.get(p.name),!_)throw Ms($e.MATCHER_NOT_FOUND,{location:p});V=_.record.name,C=Re(od(m.params,_.keys.filter(B=>!B.optional).concat(_.parent?_.parent.keys.filter(B=>B.optional):[]).map(B=>B.name)),p.params&&od(p.params,_.keys.map(B=>B.name))),k=_.stringify(C)}else if(p.path!=null)k=p.path,_=n.find(B=>B.re.test(k)),_&&(C=_.parse(k),V=_.record.name);else{if(_=m.name?r.get(m.name):n.find(B=>B.re.test(m.path)),!_)throw Ms($e.MATCHER_NOT_FOUND,{location:p,currentLocation:m});V=_.record.name,C=Re({},m.params,p.params),k=_.stringify(C)}const q=[];let U=_;for(;U;)q.unshift(U.record),U=U.parent;return{name:V,path:k,params:C,matched:q,meta:Ow(q)}}t.forEach(p=>i(p));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function od(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function ad(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:Dw(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Dw(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function cd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Ow(t){return t.reduce((e,n)=>Re(e,n.meta),{})}function xw(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;pg(t,e[i])<0?r=i:n=i+1}const s=Mw(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function Mw(t){let e=t;for(;e=e.parent;)if(mg(e)&&pg(t,e)===0)return e}function mg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function ld(t){const e=on(Za),n=on(vu),r=Dt(()=>{const l=ct(t.to);return e.resolve(l)}),s=Dt(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],p=n.matched;if(!f||!p.length)return-1;const m=p.findIndex(xs.bind(null,f));if(m>-1)return m;const _=ud(l[u-2]);return u>1&&ud(f)===_&&p[p.length-1].path!==_?p.findIndex(xs.bind(null,l[u-2])):m}),i=Dt(()=>s.value>-1&&Bw(n.params,r.value.params)),o=Dt(()=>s.value>-1&&s.value===n.matched.length-1&&ug(n.params,r.value.params));function c(l={}){if(jw(l)){const u=e[ct(t.replace)?"replace":"push"](ct(t.to)).catch(Ni);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:Dt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function Lw(t){return t.length===1?t[0]:t}const Fw=Hs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:ld,setup(t,{slots:e}){const n=Ha(ld(t)),{options:r}=on(Za),s=Dt(()=>({[hd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[hd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&Lw(e.default(n));return t.custom?i:tg("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Uw=Fw;function jw(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Bw(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ln(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function ud(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const hd=(t,e,n)=>t??e??n,$w=Hs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=on(Rl),s=Dt(()=>t.route||r.value),i=on(nd,0),o=Dt(()=>{let u=ct(i);const{matched:f}=s.value;let p;for(;(p=f[u])&&!p.components;)u++;return u}),c=Dt(()=>s.value.matched[o.value]);Wo(nd,Dt(()=>o.value+1)),Wo(_w,c),Wo(Rl,s);const l=En();return Si(()=>[l.value,c.value,t.name],([u,f,p],[m,_,C])=>{f&&(f.instances[p]=u,_&&_!==f&&u&&u===m&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!xs(f,_)||!m)&&(f.enterCallbacks[p]||[]).forEach(k=>k(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,p=c.value,m=p&&p.components[f];if(!m)return fd(n.default,{Component:m,route:u});const _=p.props[f],C=_?_===!0?u.params:typeof _=="function"?_(u):_:null,V=tg(m,Re({},C,e,{onVnodeUnmounted:q=>{q.component.isUnmounted&&(p.instances[f]=null)},ref:l}));return fd(n.default,{Component:V,route:u})||V}}});function fd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const qw=$w;function Hw(t){const e=Vw(t.routes,t),n=t.parseQuery||mw,r=t.stringifyQuery||td,s=t.history,i=di(),o=di(),c=di(),l=Gv(lr);let u=lr;gs&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Jc.bind(null,M=>""+M),p=Jc.bind(null,XT),m=Jc.bind(null,Hi);function _(M,X){let Q,ee;return hg(M)?(Q=e.getRecordMatcher(M),ee=X):ee=M,e.addRoute(ee,Q)}function C(M){const X=e.getRecordMatcher(M);X&&e.removeRoute(X)}function k(){return e.getRoutes().map(M=>M.record)}function V(M){return!!e.getRecordMatcher(M)}function q(M,X){if(X=Re({},X||l.value),typeof M=="string"){const R=Yc(n,M,X.path),O=e.resolve({path:R.path},X),j=s.createHref(R.fullPath);return Re(R,O,{params:m(O.params),hash:Hi(R.hash),redirectedFrom:void 0,href:j})}let Q;if(M.path!=null)Q=Re({},M,{path:Yc(n,M.path,X.path).path});else{const R=Re({},M.params);for(const O in R)R[O]==null&&delete R[O];Q=Re({},M,{params:p(R)}),X.params=p(X.params)}const ee=e.resolve(Q,X),me=M.hash||"";ee.params=f(m(ee.params));const y=tw(r,Re({},M,{hash:QT(me),path:ee.path})),w=s.createHref(y);return Re({fullPath:y,hash:me,query:r===td?gw(M.query):M.query||{}},ee,{redirectedFrom:void 0,href:w})}function U(M){return typeof M=="string"?Yc(n,M,l.value.path):Re({},M)}function B(M,X){if(u!==M)return Ms($e.NAVIGATION_CANCELLED,{from:X,to:M})}function L(M){return I(M)}function Z(M){return L(Re(U(M),{replace:!0}))}function fe(M,X){const Q=M.matched[M.matched.length-1];if(Q&&Q.redirect){const{redirect:ee}=Q;let me=typeof ee=="function"?ee(M,X):ee;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=U(me):{path:me},me.params={}),Re({query:M.query,hash:M.hash,params:me.path!=null?{}:M.params},me)}}function I(M,X){const Q=u=q(M),ee=l.value,me=M.state,y=M.force,w=M.replace===!0,R=fe(Q,ee);if(R)return I(Re(U(R),{state:typeof R=="object"?Re({},me,R.state):me,force:y,replace:w}),X||Q);const O=Q;O.redirectedFrom=X;let j;return!y&&nw(r,ee,Q)&&(j=Ms($e.NAVIGATION_DUPLICATED,{to:O,from:ee}),Kt(ee,ee,!0,!1)),(j?Promise.resolve(j):A(O,ee)).catch(x=>On(x)?On(x,$e.NAVIGATION_GUARD_REDIRECT)?x:tn(x):_e(x,O,ee)).then(x=>{if(x){if(On(x,$e.NAVIGATION_GUARD_REDIRECT))return I(Re({replace:w},U(x.to),{state:typeof x.to=="object"?Re({},me,x.to.state):me,force:y}),X||O)}else x=S(O,ee,!0,w,me);return b(O,ee,x),x})}function v(M,X){const Q=B(M,X);return Q?Promise.reject(Q):Promise.resolve()}function E(M){const X=sr.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(M):M()}function A(M,X){let Q;const[ee,me,y]=yw(M,X);Q=Zc(ee.reverse(),"beforeRouteLeave",M,X);for(const R of ee)R.leaveGuards.forEach(O=>{Q.push(fr(O,M,X))});const w=v.bind(null,M,X);return Q.push(w),kt(Q).then(()=>{Q=[];for(const R of i.list())Q.push(fr(R,M,X));return Q.push(w),kt(Q)}).then(()=>{Q=Zc(me,"beforeRouteUpdate",M,X);for(const R of me)R.updateGuards.forEach(O=>{Q.push(fr(O,M,X))});return Q.push(w),kt(Q)}).then(()=>{Q=[];for(const R of y)if(R.beforeEnter)if(ln(R.beforeEnter))for(const O of R.beforeEnter)Q.push(fr(O,M,X));else Q.push(fr(R.beforeEnter,M,X));return Q.push(w),kt(Q)}).then(()=>(M.matched.forEach(R=>R.enterCallbacks={}),Q=Zc(y,"beforeRouteEnter",M,X,E),Q.push(w),kt(Q))).then(()=>{Q=[];for(const R of o.list())Q.push(fr(R,M,X));return Q.push(w),kt(Q)}).catch(R=>On(R,$e.NAVIGATION_CANCELLED)?R:Promise.reject(R))}function b(M,X,Q){c.list().forEach(ee=>E(()=>ee(M,X,Q)))}function S(M,X,Q,ee,me){const y=B(M,X);if(y)return y;const w=X===lr,R=gs?history.state:{};Q&&(ee||w?s.replace(M.fullPath,Re({scroll:w&&R&&R.scroll},me)):s.push(M.fullPath,me)),l.value=M,Kt(M,X,Q,w),tn()}let T;function wt(){T||(T=s.listen((M,X,Q)=>{if(!Ft.listening)return;const ee=q(M),me=fe(ee,Ft.currentRoute.value);if(me){I(Re(me,{replace:!0,force:!0}),ee).catch(Ni);return}u=ee;const y=l.value;gs&&uw(ed(y.fullPath,Q.delta),Xa()),A(ee,y).catch(w=>On(w,$e.NAVIGATION_ABORTED|$e.NAVIGATION_CANCELLED)?w:On(w,$e.NAVIGATION_GUARD_REDIRECT)?(I(Re(U(w.to),{force:!0}),ee).then(R=>{On(R,$e.NAVIGATION_ABORTED|$e.NAVIGATION_DUPLICATED)&&!Q.delta&&Q.type===Al.pop&&s.go(-1,!1)}).catch(Ni),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),_e(w,ee,y))).then(w=>{w=w||S(ee,y,!1),w&&(Q.delta&&!On(w,$e.NAVIGATION_CANCELLED)?s.go(-Q.delta,!1):Q.type===Al.pop&&On(w,$e.NAVIGATION_ABORTED|$e.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),b(ee,y,w)}).catch(Ni)}))}let zt=di(),ze=di(),Te;function _e(M,X,Q){tn(M);const ee=ze.list();return ee.length?ee.forEach(me=>me(M,X,Q)):console.error(M),Promise.reject(M)}function Lt(){return Te&&l.value!==lr?Promise.resolve():new Promise((M,X)=>{zt.add([M,X])})}function tn(M){return Te||(Te=!M,wt(),zt.list().forEach(([X,Q])=>M?Q(M):X()),zt.reset()),M}function Kt(M,X,Q,ee){const{scrollBehavior:me}=t;if(!gs||!me)return Promise.resolve();const y=!Q&&hw(ed(M.fullPath,0))||(ee||!Q)&&history.state&&history.state.scroll||null;return hu().then(()=>me(M,X,y)).then(w=>w&&lw(w)).catch(w=>_e(w,M,X))}const Me=M=>s.go(M);let Le;const sr=new Set,Ft={currentRoute:l,listening:!0,addRoute:_,removeRoute:C,clearRoutes:e.clearRoutes,hasRoute:V,getRoutes:k,resolve:q,options:t,push:L,replace:Z,go:Me,back:()=>Me(-1),forward:()=>Me(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:ze.add,isReady:Lt,install(M){M.component("RouterLink",Uw),M.component("RouterView",qw),M.config.globalProperties.$router=Ft,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>ct(l)}),gs&&!Le&&l.value===lr&&(Le=!0,L(s.location).catch(ee=>{}));const X={};for(const ee in lr)Object.defineProperty(X,ee,{get:()=>l.value[ee],enumerable:!0});M.provide(Za,Ft),M.provide(vu,_m(X)),M.provide(Rl,l);const Q=M.unmount;sr.add(M),M.unmount=function(){sr.delete(M),sr.size<1&&(u=lr,T&&T(),T=null,l.value=lr,Le=!1,Te=!1),Q()}}};function kt(M){return M.reduce((X,Q)=>X.then(()=>E(Q)),Promise.resolve())}return Ft}function Gw(){return on(Za)}function gg(t){return on(vu)}const Ww=()=>{};var dd={};/**
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
 */const _g=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},zw=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yg={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,p=(i&3)<<4|c>>4;let m=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(m=64)),r.push(n[f],n[p],n[m],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_g(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):zw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const p=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||p==null)throw new Kw;const m=i<<2|c>>4;if(r.push(m),u!==64){const _=c<<4&240|u>>2;if(r.push(_),p!==64){const C=u<<6&192|p;r.push(C)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Kw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Qw=function(t){const e=_g(t);return yg.encodeByteArray(e,!0)},pa=function(t){return Qw(t).replace(/\./g,"")},vg=function(t){try{return yg.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Jw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Yw=()=>Jw().__FIREBASE_DEFAULTS__,Xw=()=>{if(typeof process>"u"||typeof dd>"u")return;const t=dd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&vg(t[1]);return e&&JSON.parse(e)},ec=()=>{try{return Ww()||Yw()||Xw()||Zw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Eg=t=>{var e,n;return(n=(e=ec())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Tg=t=>{const e=Eg(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},wg=()=>{var t;return(t=ec())===null||t===void 0?void 0:t.config},Ig=t=>{var e;return(e=ec())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class eI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function is(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Eu(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function tI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[pa(JSON.stringify(n)),pa(JSON.stringify(o)),""].join(".")}const Vi={};function nI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Vi))Vi[e]?t.emulator.push(e):t.prod.push(e);return t}function rI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let pd=!1;function Tu(t,e){if(typeof window>"u"||typeof document>"u"||!is(window.location.host)||Vi[t]===e||Vi[t]||pd)return;Vi[t]=e;function n(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=nI().prod.length>0;function o(){const m=document.getElementById(r);m&&m.remove()}function c(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function l(m,_){m.setAttribute("width","24"),m.setAttribute("id",_),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function u(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{pd=!0,o()},m}function f(m,_){m.setAttribute("id",_),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function p(){const m=rI(r),_=n("text"),C=document.getElementById(_)||document.createElement("span"),k=n("learnmore"),V=document.getElementById(k)||document.createElement("a"),q=n("preprendIcon"),U=document.getElementById(q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const B=m.element;c(B),f(V,k);const L=u();l(U,q),B.append(U,C,V,L),document.body.appendChild(B)}i?(C.innerText="Preview backend disconnected.",U.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,C.innerText="Preview backend running in this workspace."),C.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",p):p()}/**
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
 */function Tt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Tt())}function iI(){var t;const e=(t=ec())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function oI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function aI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function cI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lI(){const t=Tt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function uI(){return!iI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hI(){try{return typeof indexedDB=="object"}catch{return!1}}function fI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const dI="FirebaseError";class tr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=dI,Object.setPrototypeOf(this,tr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?pI(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new tr(s,c,r)}}function pI(t,e){return t.replace(mI,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const mI=/\{\$([^}]+)}/g;function gI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Zr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(md(i)&&md(o)){if(!Zr(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function md(t){return t!==null&&typeof t=="object"}/**
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
 */function io(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function yi(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function vi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function _I(t,e){const n=new yI(t,e);return n.subscribe.bind(n)}class yI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");vI(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=el),s.error===void 0&&(s.error=el),s.complete===void 0&&(s.complete=el);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function el(){}/**
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
 */function xe(t){return t&&t._delegate?t._delegate:t}class Rr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Wr="[DEFAULT]";/**
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
 */class EI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new eI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wI(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:TI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function TI(t){return t===Wr?void 0:t}function wI(t){return t.instantiationMode==="EAGER"}/**
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
 */class II{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new EI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ye;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ye||(ye={}));const AI={debug:ye.DEBUG,verbose:ye.VERBOSE,info:ye.INFO,warn:ye.WARN,error:ye.ERROR,silent:ye.SILENT},bI=ye.INFO,RI={[ye.DEBUG]:"log",[ye.VERBOSE]:"log",[ye.INFO]:"info",[ye.WARN]:"warn",[ye.ERROR]:"error"},SI=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=RI[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class wu{constructor(e){this.name=e,this._logLevel=bI,this._logHandler=SI,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ye))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?AI[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ye.DEBUG,...e),this._logHandler(this,ye.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ye.VERBOSE,...e),this._logHandler(this,ye.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ye.INFO,...e),this._logHandler(this,ye.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ye.WARN,...e),this._logHandler(this,ye.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ye.ERROR,...e),this._logHandler(this,ye.ERROR,...e)}}const PI=(t,e)=>e.some(n=>t instanceof n);let gd,_d;function CI(){return gd||(gd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function kI(){return _d||(_d=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ag=new WeakMap,Sl=new WeakMap,bg=new WeakMap,tl=new WeakMap,Iu=new WeakMap;function NI(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(yr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ag.set(n,t)}).catch(()=>{}),Iu.set(e,t),e}function VI(t){if(Sl.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Sl.set(t,e)}let Pl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Sl.get(t);if(e==="objectStoreNames")return t.objectStoreNames||bg.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function DI(t){Pl=t(Pl)}function OI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(nl(this),e,...n);return bg.set(r,e.sort?e.sort():[e]),yr(r)}:kI().includes(t)?function(...e){return t.apply(nl(this),e),yr(Ag.get(this))}:function(...e){return yr(t.apply(nl(this),e))}}function xI(t){return typeof t=="function"?OI(t):(t instanceof IDBTransaction&&VI(t),PI(t,CI())?new Proxy(t,Pl):t)}function yr(t){if(t instanceof IDBRequest)return NI(t);if(tl.has(t))return tl.get(t);const e=xI(t);return e!==t&&(tl.set(t,e),Iu.set(e,t)),e}const nl=t=>Iu.get(t);function MI(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=yr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(yr(o.result),l.oldVersion,l.newVersion,yr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const LI=["get","getKey","getAll","getAllKeys","count"],FI=["put","add","delete","clear"],rl=new Map;function yd(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(rl.get(e))return rl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=FI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||LI.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return rl.set(e,i),i}DI(t=>({...t,get:(e,n,r)=>yd(e,n)||t.get(e,n,r),has:(e,n)=>!!yd(e,n)||t.has(e,n)}));/**
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
 */class UI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(jI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function jI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Cl="@firebase/app",vd="0.13.2";/**
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
 */const Qn=new wu("@firebase/app"),BI="@firebase/app-compat",$I="@firebase/analytics-compat",qI="@firebase/analytics",HI="@firebase/app-check-compat",GI="@firebase/app-check",WI="@firebase/auth",zI="@firebase/auth-compat",KI="@firebase/database",QI="@firebase/data-connect",JI="@firebase/database-compat",YI="@firebase/functions",XI="@firebase/functions-compat",ZI="@firebase/installations",eA="@firebase/installations-compat",tA="@firebase/messaging",nA="@firebase/messaging-compat",rA="@firebase/performance",sA="@firebase/performance-compat",iA="@firebase/remote-config",oA="@firebase/remote-config-compat",aA="@firebase/storage",cA="@firebase/storage-compat",lA="@firebase/firestore",uA="@firebase/ai",hA="@firebase/firestore-compat",fA="firebase",dA="11.10.0";/**
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
 */const kl="[DEFAULT]",pA={[Cl]:"fire-core",[BI]:"fire-core-compat",[qI]:"fire-analytics",[$I]:"fire-analytics-compat",[GI]:"fire-app-check",[HI]:"fire-app-check-compat",[WI]:"fire-auth",[zI]:"fire-auth-compat",[KI]:"fire-rtdb",[QI]:"fire-data-connect",[JI]:"fire-rtdb-compat",[YI]:"fire-fn",[XI]:"fire-fn-compat",[ZI]:"fire-iid",[eA]:"fire-iid-compat",[tA]:"fire-fcm",[nA]:"fire-fcm-compat",[rA]:"fire-perf",[sA]:"fire-perf-compat",[iA]:"fire-rc",[oA]:"fire-rc-compat",[aA]:"fire-gcs",[cA]:"fire-gcs-compat",[lA]:"fire-fst",[hA]:"fire-fst-compat",[uA]:"fire-vertex","fire-js":"fire-js",[fA]:"fire-js-all"};/**
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
 */const ma=new Map,mA=new Map,Nl=new Map;function Ed(t,e){try{t.container.addComponent(e)}catch(n){Qn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function es(t){const e=t.name;if(Nl.has(e))return Qn.debug(`There were multiple attempts to register component ${e}.`),!1;Nl.set(e,t);for(const n of ma.values())Ed(n,t);for(const n of mA.values())Ed(n,t);return!0}function tc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function jt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const gA={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},vr=new so("app","Firebase",gA);/**
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
 */class _A{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw vr.create("app-deleted",{appName:this._name})}}/**
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
 */const Gs=dA;function Rg(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:kl,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw vr.create("bad-app-name",{appName:String(s)});if(n||(n=wg()),!n)throw vr.create("no-options");const i=ma.get(s);if(i){if(Zr(n,i.options)&&Zr(r,i.config))return i;throw vr.create("duplicate-app",{appName:s})}const o=new II(s);for(const l of Nl.values())o.addComponent(l);const c=new _A(n,r,o);return ma.set(s,c),c}function Au(t=kl){const e=ma.get(t);if(!e&&t===kl&&wg())return Rg();if(!e)throw vr.create("no-app",{appName:t});return e}function Tn(t,e,n){var r;let s=(r=pA[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qn.warn(c.join(" "));return}es(new Rr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const yA="firebase-heartbeat-database",vA=1,Gi="firebase-heartbeat-store";let sl=null;function Sg(){return sl||(sl=MI(yA,vA,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Gi)}catch(n){console.warn(n)}}}}).catch(t=>{throw vr.create("idb-open",{originalErrorMessage:t.message})})),sl}async function EA(t){try{const n=(await Sg()).transaction(Gi),r=await n.objectStore(Gi).get(Pg(t));return await n.done,r}catch(e){if(e instanceof tr)Qn.warn(e.message);else{const n=vr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Qn.warn(n.message)}}}async function Td(t,e){try{const r=(await Sg()).transaction(Gi,"readwrite");await r.objectStore(Gi).put(e,Pg(t)),await r.done}catch(n){if(n instanceof tr)Qn.warn(n.message);else{const r=vr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Qn.warn(r.message)}}}function Pg(t){return`${t.name}!${t.options.appId}`}/**
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
 */const TA=1024,wA=30;class IA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new bA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=wd();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>wA){const o=RA(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Qn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=wd(),{heartbeatsToSend:r,unsentEntries:s}=AA(this._heartbeatsCache.heartbeats),i=pa(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Qn.warn(n),""}}}function wd(){return new Date().toISOString().substring(0,10)}function AA(t,e=TA){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Id(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Id(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class bA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hI()?fI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await EA(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Td(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Td(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Id(t){return pa(JSON.stringify({version:2,heartbeats:t})).length}function RA(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function SA(t){es(new Rr("platform-logger",e=>new UI(e),"PRIVATE")),es(new Rr("heartbeat",e=>new IA(e),"PRIVATE")),Tn(Cl,vd,t),Tn(Cl,vd,"esm2017"),Tn("fire-js","")}SA("");function bu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Cg(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PA=Cg,kg=new so("auth","Firebase",Cg());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga=new wu("@firebase/auth");function CA(t,...e){ga.logLevel<=ye.WARN&&ga.warn(`Auth (${Gs}): ${t}`,...e)}function Qo(t,...e){ga.logLevel<=ye.ERROR&&ga.error(`Auth (${Gs}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function un(t,...e){throw Ru(t,...e)}function wn(t,...e){return Ru(t,...e)}function Ng(t,e,n){const r=Object.assign(Object.assign({},PA()),{[e]:n});return new so("auth","Firebase",r).create(e,{appName:t.name})}function Hn(t){return Ng(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Ru(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return kg.create(t,...e)}function le(t,e,...n){if(!t)throw Ru(e,...n)}function Bn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Qo(e),new Error(e)}function Jn(t,e){t||Bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kA(){return Ad()==="http:"||Ad()==="https:"}function Ad(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kA()||aI()||"connection"in navigator)?navigator.onLine:!0}function VA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Jn(n>e,"Short delay should be less than long delay!"),this.isMobile=sI()||cI()}get(){return NA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(t,e){Jn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OA=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],xA=new oo(3e4,6e4);function Mr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function nr(t,e,n,r,s={}){return Dg(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=io(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return oI()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&is(t.emulatorConfig.host)&&(u.credentials="include"),Vg.fetch()(await Og(t,t.config.apiHost,n,c),u)})}async function Dg(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},DA),e);try{const s=new LA(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Uo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Uo(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Uo(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Uo(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ng(t,f,u);un(t,f)}}catch(s){if(s instanceof tr)throw s;un(t,"network-request-failed",{message:String(s)})}}async function ao(t,e,n,r,s={}){const i=await nr(t,e,n,r,s);return"mfaPendingCredential"in i&&un(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function Og(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?Su(t.config,s):`${t.config.apiScheme}://${s}`;return OA.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function MA(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class LA{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(wn(this.auth,"network-request-failed")),xA.get())})}}function Uo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=wn(t,e,r);return s.customData._tokenResponse=n,s}function bd(t){return t!==void 0&&t.enterprise!==void 0}class FA{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return MA(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function UA(t,e){return nr(t,"GET","/v2/recaptchaConfig",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(t,e){return nr(t,"POST","/v1/accounts:delete",e)}async function _a(t,e){return nr(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Di(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function BA(t,e=!1){const n=xe(t),r=await n.getIdToken(e),s=Pu(r);le(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Di(il(s.auth_time)),issuedAtTime:Di(il(s.iat)),expirationTime:Di(il(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function il(t){return Number(t)*1e3}function Pu(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Qo("JWT malformed, contained fewer than 3 sections"),null;try{const s=vg(n);return s?JSON.parse(s):(Qo("Failed to decode base64 JWT payload"),null)}catch(s){return Qo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Rd(t){const e=Pu(t);return le(e,"internal-error"),le(typeof e.exp<"u","internal-error"),le(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ls(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof tr&&$A(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function $A({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Di(this.lastLoginAt),this.creationTime=Di(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ya(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ls(t,_a(n,{idToken:r}));le(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?xg(i.providerUserInfo):[],c=GA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?u:!1,p={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Dl(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,p)}async function HA(t){const e=xe(t);await ya(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function GA(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function xg(t){return t.map(e=>{var{providerId:n}=e,r=bu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function WA(t,e){const n=await Dg(t,{},async()=>{const r=io({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await Og(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&is(t.emulatorConfig.host)&&(l.credentials="include"),Vg.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function zA(t,e){return nr(t,"POST","/v2/accounts:revokeToken",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){le(e.idToken,"internal-error"),le(typeof e.idToken<"u","internal-error"),le(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Rd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){le(e.length!==0,"internal-error");const n=Rd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(le(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await WA(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Ps;return r&&(le(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(le(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(le(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ps,this.toJSON())}_performRefresh(){return Bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ur(t,e){le(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class rn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=bu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Dl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ls(this,this.stsTokenManager.getToken(this.auth,e));return le(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return BA(this,e)}reload(){return HA(this)}_assign(e){this!==e&&(le(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new rn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){le(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ya(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(jt(this.auth.app))return Promise.reject(Hn(this.auth));const e=await this.getIdToken();return await Ls(this,jA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,f;const p=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,C=(o=n.photoURL)!==null&&o!==void 0?o:void 0,k=(c=n.tenantId)!==null&&c!==void 0?c:void 0,V=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,q=(u=n.createdAt)!==null&&u!==void 0?u:void 0,U=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:B,emailVerified:L,isAnonymous:Z,providerData:fe,stsTokenManager:I}=n;le(B&&I,e,"internal-error");const v=Ps.fromJSON(this.name,I);le(typeof B=="string",e,"internal-error"),ur(p,e.name),ur(m,e.name),le(typeof L=="boolean",e,"internal-error"),le(typeof Z=="boolean",e,"internal-error"),ur(_,e.name),ur(C,e.name),ur(k,e.name),ur(V,e.name),ur(q,e.name),ur(U,e.name);const E=new rn({uid:B,auth:e,email:m,emailVerified:L,displayName:p,isAnonymous:Z,photoURL:C,phoneNumber:_,tenantId:k,stsTokenManager:v,createdAt:q,lastLoginAt:U});return fe&&Array.isArray(fe)&&(E.providerData=fe.map(A=>Object.assign({},A))),V&&(E._redirectEventId=V),E}static async _fromIdTokenResponse(e,n,r=!1){const s=new Ps;s.updateFromServerResponse(n);const i=new rn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ya(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];le(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?xg(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Ps;c.updateFromIdToken(r);const l=new rn({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Dl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sd=new Map;function $n(t){Jn(t instanceof Function,"Expected a class definition");let e=Sd.get(t);return e?(Jn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sd.set(t,e),e)}/**
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
 */class Mg{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Mg.type="NONE";const Pd=Mg;/**
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
 */function Jo(t,e,n){return`firebase:${t}:${e}:${n}`}class Cs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Jo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Jo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await _a(this.auth,{idToken:e}).catch(()=>{});return n?rn._fromGetAccountInfoResponse(this.auth,n,e):null}return rn._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Cs($n(Pd),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||$n(Pd);const o=Jo(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let p;if(typeof f=="string"){const m=await _a(e,{idToken:f}).catch(()=>{});if(!m)break;p=await rn._fromGetAccountInfoResponse(e,m,f)}else p=rn._fromJSON(e,f);u!==i&&(c=p),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new Cs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new Cs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jg(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Lg(e))return"Firefox";if(e.includes("silk/"))return"Silk";if($g(e))return"Blackberry";if(qg(e))return"Webos";if(Fg(e))return"Safari";if((e.includes("chrome/")||Ug(e))&&!e.includes("edge/"))return"Chrome";if(Bg(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Lg(t=Tt()){return/firefox\//i.test(t)}function Fg(t=Tt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ug(t=Tt()){return/crios\//i.test(t)}function jg(t=Tt()){return/iemobile/i.test(t)}function Bg(t=Tt()){return/android/i.test(t)}function $g(t=Tt()){return/blackberry/i.test(t)}function qg(t=Tt()){return/webos/i.test(t)}function Cu(t=Tt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function KA(t=Tt()){var e;return Cu(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function QA(){return lI()&&document.documentMode===10}function Hg(t=Tt()){return Cu(t)||Bg(t)||qg(t)||$g(t)||/windows phone/i.test(t)||jg(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(t,e=[]){let n;switch(t){case"Browser":n=Cd(Tt());break;case"Worker":n=`${Cd(Tt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gs}/${r}`}/**
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
 */class JA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function YA(t,e={}){return nr(t,"GET","/v2/passwordPolicy",Mr(t,e))}/**
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
 */const XA=6;class ZA{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:XA,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kd(this),this.idTokenSubscription=new kd(this),this.beforeStateQueue=new JA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=kg,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$n(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Cs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await _a(this,{idToken:e}),r=await rn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return le(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ya(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(jt(this.app))return Promise.reject(Hn(this));const n=e?xe(e):null;return n&&le(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&le(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return jt(this.app)?Promise.reject(Hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return jt(this.app)?Promise.reject(Hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence($n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await YA(this),n=new ZA(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new so("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await zA(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$n(e)||this._popupRedirectResolver;le(n,this,"argument-error"),this.redirectPersistenceManager=await Cs.create(this,[$n(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(le(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return le(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gg(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(jt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&CA(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function os(t){return xe(t)}class kd{constructor(e){this.auth=e,this.observer=null,this.addObserver=_I(n=>this.observer=n)}get next(){return le(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function t0(t){nc=t}function Wg(t){return nc.loadJS(t)}function n0(){return nc.recaptchaEnterpriseScript}function r0(){return nc.gapiScript}function s0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class i0{constructor(){this.enterprise=new o0}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class o0{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const a0="recaptcha-enterprise",zg="NO_RECAPTCHA";class c0{constructor(e){this.type=a0,this.auth=os(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{UA(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new FA(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;bd(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(zg)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new i0().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&bd(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=n0();l.length!==0&&(l+=c),Wg(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function Nd(t,e,n,r=!1,s=!1){const i=new c0(t);let o;if(s)o=zg;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Ol(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await Nd(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Nd(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l0(t,e){const n=tc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Zr(i,e??{}))return s;un(s,"already-initialized")}return n.initialize({options:e})}function u0(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($n);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function h0(t,e,n){const r=os(t);le(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Kg(e),{host:o,port:c}=f0(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){le(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),le(Zr(u,r.config.emulator)&&Zr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,is(o)?(Eu(`${i}//${o}${l}`),Tu("Auth",!0)):d0()}function Kg(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function f0(t){const e=Kg(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Vd(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Vd(o)}}}function Vd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function d0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Bn("not implemented")}_getIdTokenResponse(e){return Bn("not implemented")}_linkToIdToken(e,n){return Bn("not implemented")}_getReauthenticationResolver(e){return Bn("not implemented")}}async function p0(t,e){return nr(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m0(t,e){return ao(t,"POST","/v1/accounts:signInWithPassword",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g0(t,e){return ao(t,"POST","/v1/accounts:signInWithEmailLink",Mr(t,e))}async function _0(t,e){return ao(t,"POST","/v1/accounts:signInWithEmailLink",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi extends ku{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Wi(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Wi(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ol(e,n,"signInWithPassword",m0);case"emailLink":return g0(e,{email:this._email,oobCode:this._password});default:un(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ol(e,r,"signUpPassword",p0);case"emailLink":return _0(e,{idToken:n,email:this._email,oobCode:this._password});default:un(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ks(t,e){return ao(t,"POST","/v1/accounts:signInWithIdp",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y0="http://localhost";class ts extends ku{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ts(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):un("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=bu(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new ts(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ks(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ks(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ks(e,n)}buildRequest(){const e={requestUri:y0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=io(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v0(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function E0(t){const e=yi(vi(t)).link,n=e?yi(vi(e)).deep_link_id:null,r=yi(vi(t)).deep_link_id;return(r?yi(vi(r)).link:null)||r||n||e||t}class Nu{constructor(e){var n,r,s,i,o,c;const l=yi(vi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,p=v0((s=l.mode)!==null&&s!==void 0?s:null);le(u&&f&&p,"argument-error"),this.apiKey=u,this.operation=p,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=E0(e);try{return new Nu(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(){this.providerId=Ws.PROVIDER_ID}static credential(e,n){return Wi._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Nu.parseLink(n);return le(r,"argument-error"),Wi._fromEmailAndCode(e,r.code,r.tenantId)}}Ws.PROVIDER_ID="password";Ws.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ws.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qg{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class co extends Qg{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends co{constructor(){super("facebook.com")}static credential(e){return ts._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.FACEBOOK_SIGN_IN_METHOD="facebook.com";dr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr extends co{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ts._fromParams({providerId:pr.PROVIDER_ID,signInMethod:pr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return pr.credentialFromTaggedObject(e)}static credentialFromError(e){return pr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return pr.credential(n,r)}catch{return null}}}pr.GOOGLE_SIGN_IN_METHOD="google.com";pr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr extends co{constructor(){super("github.com")}static credential(e){return ts._fromParams({providerId:mr.PROVIDER_ID,signInMethod:mr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mr.credentialFromTaggedObject(e)}static credentialFromError(e){return mr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return mr.credential(e.oauthAccessToken)}catch{return null}}}mr.GITHUB_SIGN_IN_METHOD="github.com";mr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr extends co{constructor(){super("twitter.com")}static credential(e,n){return ts._fromParams({providerId:gr.PROVIDER_ID,signInMethod:gr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gr.credentialFromTaggedObject(e)}static credentialFromError(e){return gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return gr.credential(n,r)}catch{return null}}}gr.TWITTER_SIGN_IN_METHOD="twitter.com";gr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T0(t,e){return ao(t,"POST","/v1/accounts:signUp",Mr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await rn._fromIdTokenResponse(e,r,s),o=Dd(r);return new ns({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Dd(r);return new ns({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Dd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va extends tr{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,va.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new va(e,n,r,s)}}function Jg(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?va._fromErrorAndOperation(t,i,e,r):i})}async function w0(t,e,n=!1){const r=await Ls(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ns._forOperation(t,"link",r)}/**
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
 */async function I0(t,e,n=!1){const{auth:r}=t;if(jt(r.app))return Promise.reject(Hn(r));const s="reauthenticate";try{const i=await Ls(t,Jg(r,s,e,t),n);le(i.idToken,r,"internal-error");const o=Pu(i.idToken);le(o,r,"internal-error");const{sub:c}=o;return le(t.uid===c,r,"user-mismatch"),ns._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&un(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yg(t,e,n=!1){if(jt(t.app))return Promise.reject(Hn(t));const r="signIn",s=await Jg(t,r,e),i=await ns._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function A0(t,e){return Yg(os(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xg(t){const e=os(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function b0(t,e,n){if(jt(t.app))return Promise.reject(Hn(t));const r=os(t),o=await Ol(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",T0).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&Xg(t),l}),c=await ns._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function R0(t,e,n){return jt(t.app)?Promise.reject(Hn(t)):A0(xe(t),Ws.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Xg(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S0(t,e){return nr(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function P0(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=xe(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Ls(r,S0(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function C0(t,e,n,r){return xe(t).onIdTokenChanged(e,n,r)}function k0(t,e,n){return xe(t).beforeAuthStateChanged(e,n)}function N0(t,e,n,r){return xe(t).onAuthStateChanged(e,n,r)}function V0(t){return xe(t).signOut()}const Ea="__sak";/**
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
 */class Zg{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ea,"1"),this.storage.removeItem(Ea),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D0=1e3,O0=10;class e_ extends Zg{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hg(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);QA()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,O0):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},D0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}e_.type="LOCAL";const x0=e_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_ extends Zg{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}t_.type="SESSION";const n_=t_;/**
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
 */function M0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class rc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new rc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await M0(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}rc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class L0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=Vu("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(p){const m=p;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(m.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(){return window}function F0(t){In().location.href=t}/**
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
 */function r_(){return typeof In().WorkerGlobalScope<"u"&&typeof In().importScripts=="function"}async function U0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function j0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function B0(){return r_()?self:null}/**
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
 */const s_="firebaseLocalStorageDb",$0=1,Ta="firebaseLocalStorage",i_="fbase_key";class lo{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function sc(t,e){return t.transaction([Ta],e?"readwrite":"readonly").objectStore(Ta)}function q0(){const t=indexedDB.deleteDatabase(s_);return new lo(t).toPromise()}function xl(){const t=indexedDB.open(s_,$0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ta,{keyPath:i_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ta)?e(r):(r.close(),await q0(),e(await xl()))})})}async function Od(t,e,n){const r=sc(t,!0).put({[i_]:e,value:n});return new lo(r).toPromise()}async function H0(t,e){const n=sc(t,!1).get(e),r=await new lo(n).toPromise();return r===void 0?null:r.value}function xd(t,e){const n=sc(t,!0).delete(e);return new lo(n).toPromise()}const G0=800,W0=3;class o_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await xl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>W0)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return r_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=rc._getInstance(B0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await U0(),!this.activeServiceWorker)return;this.sender=new L0(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||j0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await xl();return await Od(e,Ea,"1"),await xd(e,Ea),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Od(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>H0(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=sc(s,!1).getAll();return new lo(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),G0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}o_.type="LOCAL";const z0=o_;new oo(3e4,6e4);/**
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
 */function K0(t,e){return e?$n(e):(le(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Du extends ku{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ks(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ks(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ks(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Q0(t){return Yg(t.auth,new Du(t),t.bypassAuthState)}function J0(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),I0(n,new Du(t),t.bypassAuthState)}async function Y0(t){const{auth:e,user:n}=t;return le(n,e,"internal-error"),w0(n,new Du(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Q0;case"linkViaPopup":case"linkViaRedirect":return Y0;case"reauthViaPopup":case"reauthViaRedirect":return J0;default:un(this.auth,"internal-error")}}resolve(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Jn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X0=new oo(2e3,1e4);class Ts extends a_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ts.currentPopupAction&&Ts.currentPopupAction.cancel(),Ts.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return le(e,this.auth,"internal-error"),e}async onExecution(){Jn(this.filter.length===1,"Popup operations only handle one event");const e=Vu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(wn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(wn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ts.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(wn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,X0.get())};e()}}Ts.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z0="pendingRedirect",Yo=new Map;class eb extends a_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Yo.get(this.auth._key());if(!e){try{const r=await tb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Yo.set(this.auth._key(),e)}return this.bypassAuthState||Yo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function tb(t,e){const n=sb(e),r=rb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function nb(t,e){Yo.set(t._key(),e)}function rb(t){return $n(t._redirectPersistence)}function sb(t){return Jo(Z0,t.config.apiKey,t.name)}async function ib(t,e,n=!1){if(jt(t.app))return Promise.reject(Hn(t));const r=os(t),s=K0(r,e),o=await new eb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ob=600*1e3;class ab{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cb(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!c_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(wn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=ob&&this.cachedEventUids.clear(),this.cachedEventUids.has(Md(e))}saveEventToCache(e){this.cachedEventUids.add(Md(e)),this.lastProcessedEventTime=Date.now()}}function Md(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function c_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cb(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return c_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lb(t,e={}){return nr(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,hb=/^https?/;async function fb(t){if(t.config.emulator)return;const{authorizedDomains:e}=await lb(t);for(const n of e)try{if(db(n))return}catch{}un(t,"unauthorized-domain")}function db(t){const e=Vl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!hb.test(n))return!1;if(ub.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const pb=new oo(3e4,6e4);function Ld(){const t=In().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function mb(t){return new Promise((e,n)=>{var r,s,i;function o(){Ld(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ld(),n(wn(t,"network-request-failed"))},timeout:pb.get()})}if(!((s=(r=In().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=In().gapi)===null||i===void 0)&&i.load)o();else{const c=s0("iframefcb");return In()[c]=()=>{gapi.load?o():n(wn(t,"network-request-failed"))},Wg(`${r0()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Xo=null,e})}let Xo=null;function gb(t){return Xo=Xo||mb(t),Xo}/**
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
 */const _b=new oo(5e3,15e3),yb="__/auth/iframe",vb="emulator/auth/iframe",Eb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Tb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function wb(t){const e=t.config;le(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Su(e,vb):`https://${t.config.authDomain}/${yb}`,r={apiKey:e.apiKey,appName:t.name,v:Gs},s=Tb.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${io(r).slice(1)}`}async function Ib(t){const e=await gb(t),n=In().gapi;return le(n,t,"internal-error"),e.open({where:document.body,url:wb(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Eb,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=wn(t,"network-request-failed"),c=In().setTimeout(()=>{i(o)},_b.get());function l(){In().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const Ab={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},bb=500,Rb=600,Sb="_blank",Pb="http://localhost";class Fd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Cb(t,e,n,r=bb,s=Rb){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},Ab),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Tt().toLowerCase();n&&(c=Ug(u)?Sb:n),Lg(u)&&(e=e||Pb,l.scrollbars="yes");const f=Object.entries(l).reduce((m,[_,C])=>`${m}${_}=${C},`,"");if(KA(u)&&c!=="_self")return kb(e||"",c),new Fd(null);const p=window.open(e||"",c,f);le(p,t,"popup-blocked");try{p.focus()}catch{}return new Fd(p)}function kb(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Nb="__/auth/handler",Vb="emulator/auth/handler",Db=encodeURIComponent("fac");async function Ud(t,e,n,r,s,i){le(t.config.authDomain,t,"auth-domain-config-required"),le(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Gs,eventId:s};if(e instanceof Qg){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",gI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,p]of Object.entries({}))o[f]=p}if(e instanceof co){const f=e.getScopes().filter(p=>p!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${Db}=${encodeURIComponent(l)}`:"";return`${Ob(t)}?${io(c).slice(1)}${u}`}function Ob({config:t}){return t.emulator?Su(t,Vb):`https://${t.authDomain}/${Nb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ol="webStorageSupport";class xb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=n_,this._completeRedirectFn=ib,this._overrideRedirectResult=nb}async _openPopup(e,n,r,s){var i;Jn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ud(e,n,r,Vl(),s);return Cb(e,o,Vu())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ud(e,n,r,Vl(),s);return F0(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(Jn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Ib(e),r=new ab(e);return n.register("authEvent",s=>(le(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ol,{type:ol},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ol];o!==void 0&&n(!!o),un(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=fb(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Hg()||Fg()||Cu()}}const Mb=xb;var jd="@firebase/auth",Bd="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lb{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){le(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fb(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ub(t){es(new Rr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;le(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gg(t)},u=new e0(r,s,i,l);return u0(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),es(new Rr("auth-internal",e=>{const n=os(e.getProvider("auth").getImmediate());return(r=>new Lb(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Tn(jd,Bd,Fb(t)),Tn(jd,Bd,"esm2017")}/**
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
 */const jb=300,Bb=Ig("authIdTokenMaxAge")||jb;let $d=null;const $b=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Bb)return;const s=n==null?void 0:n.token;$d!==s&&($d=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function qb(t=Au()){const e=tc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=l0(t,{popupRedirectResolver:Mb,persistence:[z0,x0,n_]}),r=Ig("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=$b(i.toString());k0(n,o,()=>o(n.currentUser)),C0(n,c=>o(c))}}const s=Eg("auth");return s&&h0(n,`http://${s}`),n}function Hb(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}t0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=wn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",Hb().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ub("Browser");var Gb="firebase",Wb="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn(Gb,Wb,"app");var qd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Er,l_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,v){function E(){}E.prototype=v.prototype,I.D=v.prototype,I.prototype=new E,I.prototype.constructor=I,I.C=function(A,b,S){for(var T=Array(arguments.length-2),wt=2;wt<arguments.length;wt++)T[wt-2]=arguments[wt];return v.prototype[b].apply(A,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,v,E){E||(E=0);var A=Array(16);if(typeof v=="string")for(var b=0;16>b;++b)A[b]=v.charCodeAt(E++)|v.charCodeAt(E++)<<8|v.charCodeAt(E++)<<16|v.charCodeAt(E++)<<24;else for(b=0;16>b;++b)A[b]=v[E++]|v[E++]<<8|v[E++]<<16|v[E++]<<24;v=I.g[0],E=I.g[1],b=I.g[2];var S=I.g[3],T=v+(S^E&(b^S))+A[0]+3614090360&4294967295;v=E+(T<<7&4294967295|T>>>25),T=S+(b^v&(E^b))+A[1]+3905402710&4294967295,S=v+(T<<12&4294967295|T>>>20),T=b+(E^S&(v^E))+A[2]+606105819&4294967295,b=S+(T<<17&4294967295|T>>>15),T=E+(v^b&(S^v))+A[3]+3250441966&4294967295,E=b+(T<<22&4294967295|T>>>10),T=v+(S^E&(b^S))+A[4]+4118548399&4294967295,v=E+(T<<7&4294967295|T>>>25),T=S+(b^v&(E^b))+A[5]+1200080426&4294967295,S=v+(T<<12&4294967295|T>>>20),T=b+(E^S&(v^E))+A[6]+2821735955&4294967295,b=S+(T<<17&4294967295|T>>>15),T=E+(v^b&(S^v))+A[7]+4249261313&4294967295,E=b+(T<<22&4294967295|T>>>10),T=v+(S^E&(b^S))+A[8]+1770035416&4294967295,v=E+(T<<7&4294967295|T>>>25),T=S+(b^v&(E^b))+A[9]+2336552879&4294967295,S=v+(T<<12&4294967295|T>>>20),T=b+(E^S&(v^E))+A[10]+4294925233&4294967295,b=S+(T<<17&4294967295|T>>>15),T=E+(v^b&(S^v))+A[11]+2304563134&4294967295,E=b+(T<<22&4294967295|T>>>10),T=v+(S^E&(b^S))+A[12]+1804603682&4294967295,v=E+(T<<7&4294967295|T>>>25),T=S+(b^v&(E^b))+A[13]+4254626195&4294967295,S=v+(T<<12&4294967295|T>>>20),T=b+(E^S&(v^E))+A[14]+2792965006&4294967295,b=S+(T<<17&4294967295|T>>>15),T=E+(v^b&(S^v))+A[15]+1236535329&4294967295,E=b+(T<<22&4294967295|T>>>10),T=v+(b^S&(E^b))+A[1]+4129170786&4294967295,v=E+(T<<5&4294967295|T>>>27),T=S+(E^b&(v^E))+A[6]+3225465664&4294967295,S=v+(T<<9&4294967295|T>>>23),T=b+(v^E&(S^v))+A[11]+643717713&4294967295,b=S+(T<<14&4294967295|T>>>18),T=E+(S^v&(b^S))+A[0]+3921069994&4294967295,E=b+(T<<20&4294967295|T>>>12),T=v+(b^S&(E^b))+A[5]+3593408605&4294967295,v=E+(T<<5&4294967295|T>>>27),T=S+(E^b&(v^E))+A[10]+38016083&4294967295,S=v+(T<<9&4294967295|T>>>23),T=b+(v^E&(S^v))+A[15]+3634488961&4294967295,b=S+(T<<14&4294967295|T>>>18),T=E+(S^v&(b^S))+A[4]+3889429448&4294967295,E=b+(T<<20&4294967295|T>>>12),T=v+(b^S&(E^b))+A[9]+568446438&4294967295,v=E+(T<<5&4294967295|T>>>27),T=S+(E^b&(v^E))+A[14]+3275163606&4294967295,S=v+(T<<9&4294967295|T>>>23),T=b+(v^E&(S^v))+A[3]+4107603335&4294967295,b=S+(T<<14&4294967295|T>>>18),T=E+(S^v&(b^S))+A[8]+1163531501&4294967295,E=b+(T<<20&4294967295|T>>>12),T=v+(b^S&(E^b))+A[13]+2850285829&4294967295,v=E+(T<<5&4294967295|T>>>27),T=S+(E^b&(v^E))+A[2]+4243563512&4294967295,S=v+(T<<9&4294967295|T>>>23),T=b+(v^E&(S^v))+A[7]+1735328473&4294967295,b=S+(T<<14&4294967295|T>>>18),T=E+(S^v&(b^S))+A[12]+2368359562&4294967295,E=b+(T<<20&4294967295|T>>>12),T=v+(E^b^S)+A[5]+4294588738&4294967295,v=E+(T<<4&4294967295|T>>>28),T=S+(v^E^b)+A[8]+2272392833&4294967295,S=v+(T<<11&4294967295|T>>>21),T=b+(S^v^E)+A[11]+1839030562&4294967295,b=S+(T<<16&4294967295|T>>>16),T=E+(b^S^v)+A[14]+4259657740&4294967295,E=b+(T<<23&4294967295|T>>>9),T=v+(E^b^S)+A[1]+2763975236&4294967295,v=E+(T<<4&4294967295|T>>>28),T=S+(v^E^b)+A[4]+1272893353&4294967295,S=v+(T<<11&4294967295|T>>>21),T=b+(S^v^E)+A[7]+4139469664&4294967295,b=S+(T<<16&4294967295|T>>>16),T=E+(b^S^v)+A[10]+3200236656&4294967295,E=b+(T<<23&4294967295|T>>>9),T=v+(E^b^S)+A[13]+681279174&4294967295,v=E+(T<<4&4294967295|T>>>28),T=S+(v^E^b)+A[0]+3936430074&4294967295,S=v+(T<<11&4294967295|T>>>21),T=b+(S^v^E)+A[3]+3572445317&4294967295,b=S+(T<<16&4294967295|T>>>16),T=E+(b^S^v)+A[6]+76029189&4294967295,E=b+(T<<23&4294967295|T>>>9),T=v+(E^b^S)+A[9]+3654602809&4294967295,v=E+(T<<4&4294967295|T>>>28),T=S+(v^E^b)+A[12]+3873151461&4294967295,S=v+(T<<11&4294967295|T>>>21),T=b+(S^v^E)+A[15]+530742520&4294967295,b=S+(T<<16&4294967295|T>>>16),T=E+(b^S^v)+A[2]+3299628645&4294967295,E=b+(T<<23&4294967295|T>>>9),T=v+(b^(E|~S))+A[0]+4096336452&4294967295,v=E+(T<<6&4294967295|T>>>26),T=S+(E^(v|~b))+A[7]+1126891415&4294967295,S=v+(T<<10&4294967295|T>>>22),T=b+(v^(S|~E))+A[14]+2878612391&4294967295,b=S+(T<<15&4294967295|T>>>17),T=E+(S^(b|~v))+A[5]+4237533241&4294967295,E=b+(T<<21&4294967295|T>>>11),T=v+(b^(E|~S))+A[12]+1700485571&4294967295,v=E+(T<<6&4294967295|T>>>26),T=S+(E^(v|~b))+A[3]+2399980690&4294967295,S=v+(T<<10&4294967295|T>>>22),T=b+(v^(S|~E))+A[10]+4293915773&4294967295,b=S+(T<<15&4294967295|T>>>17),T=E+(S^(b|~v))+A[1]+2240044497&4294967295,E=b+(T<<21&4294967295|T>>>11),T=v+(b^(E|~S))+A[8]+1873313359&4294967295,v=E+(T<<6&4294967295|T>>>26),T=S+(E^(v|~b))+A[15]+4264355552&4294967295,S=v+(T<<10&4294967295|T>>>22),T=b+(v^(S|~E))+A[6]+2734768916&4294967295,b=S+(T<<15&4294967295|T>>>17),T=E+(S^(b|~v))+A[13]+1309151649&4294967295,E=b+(T<<21&4294967295|T>>>11),T=v+(b^(E|~S))+A[4]+4149444226&4294967295,v=E+(T<<6&4294967295|T>>>26),T=S+(E^(v|~b))+A[11]+3174756917&4294967295,S=v+(T<<10&4294967295|T>>>22),T=b+(v^(S|~E))+A[2]+718787259&4294967295,b=S+(T<<15&4294967295|T>>>17),T=E+(S^(b|~v))+A[9]+3951481745&4294967295,I.g[0]=I.g[0]+v&4294967295,I.g[1]=I.g[1]+(b+(T<<21&4294967295|T>>>11))&4294967295,I.g[2]=I.g[2]+b&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,v){v===void 0&&(v=I.length);for(var E=v-this.blockSize,A=this.B,b=this.h,S=0;S<v;){if(b==0)for(;S<=E;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<v;)if(A[b++]=I.charCodeAt(S++),b==this.blockSize){s(this,A),b=0;break}}else for(;S<v;)if(A[b++]=I[S++],b==this.blockSize){s(this,A),b=0;break}}this.h=b,this.o+=v},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var v=1;v<I.length-8;++v)I[v]=0;var E=8*this.o;for(v=I.length-8;v<I.length;++v)I[v]=E&255,E/=256;for(this.u(I),I=Array(16),v=E=0;4>v;++v)for(var A=0;32>A;A+=8)I[E++]=this.g[v]>>>A&255;return I};function i(I,v){var E=c;return Object.prototype.hasOwnProperty.call(E,I)?E[I]:E[I]=v(I)}function o(I,v){this.h=v;for(var E=[],A=!0,b=I.length-1;0<=b;b--){var S=I[b]|0;A&&S==v||(E[b]=S,A=!1)}this.g=E}var c={};function l(I){return-128<=I&&128>I?i(I,function(v){return new o([v|0],0>v?-1:0)}):new o([I|0],0>I?-1:0)}function u(I){if(isNaN(I)||!isFinite(I))return p;if(0>I)return V(u(-I));for(var v=[],E=1,A=0;I>=E;A++)v[A]=I/E|0,E*=4294967296;return new o(v,0)}function f(I,v){if(I.length==0)throw Error("number format error: empty string");if(v=v||10,2>v||36<v)throw Error("radix out of range: "+v);if(I.charAt(0)=="-")return V(f(I.substring(1),v));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=u(Math.pow(v,8)),A=p,b=0;b<I.length;b+=8){var S=Math.min(8,I.length-b),T=parseInt(I.substring(b,b+S),v);8>S?(S=u(Math.pow(v,S)),A=A.j(S).add(u(T))):(A=A.j(E),A=A.add(u(T)))}return A}var p=l(0),m=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(k(this))return-V(this).m();for(var I=0,v=1,E=0;E<this.g.length;E++){var A=this.i(E);I+=(0<=A?A:4294967296+A)*v,v*=4294967296}return I},t.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(C(this))return"0";if(k(this))return"-"+V(this).toString(I);for(var v=u(Math.pow(I,6)),E=this,A="";;){var b=L(E,v).g;E=q(E,b.j(v));var S=((0<E.g.length?E.g[0]:E.h)>>>0).toString(I);if(E=b,C(E))return S+A;for(;6>S.length;)S="0"+S;A=S+A}},t.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function C(I){if(I.h!=0)return!1;for(var v=0;v<I.g.length;v++)if(I.g[v]!=0)return!1;return!0}function k(I){return I.h==-1}t.l=function(I){return I=q(this,I),k(I)?-1:C(I)?0:1};function V(I){for(var v=I.g.length,E=[],A=0;A<v;A++)E[A]=~I.g[A];return new o(E,~I.h).add(m)}t.abs=function(){return k(this)?V(this):this},t.add=function(I){for(var v=Math.max(this.g.length,I.g.length),E=[],A=0,b=0;b<=v;b++){var S=A+(this.i(b)&65535)+(I.i(b)&65535),T=(S>>>16)+(this.i(b)>>>16)+(I.i(b)>>>16);A=T>>>16,S&=65535,T&=65535,E[b]=T<<16|S}return new o(E,E[E.length-1]&-2147483648?-1:0)};function q(I,v){return I.add(V(v))}t.j=function(I){if(C(this)||C(I))return p;if(k(this))return k(I)?V(this).j(V(I)):V(V(this).j(I));if(k(I))return V(this.j(V(I)));if(0>this.l(_)&&0>I.l(_))return u(this.m()*I.m());for(var v=this.g.length+I.g.length,E=[],A=0;A<2*v;A++)E[A]=0;for(A=0;A<this.g.length;A++)for(var b=0;b<I.g.length;b++){var S=this.i(A)>>>16,T=this.i(A)&65535,wt=I.i(b)>>>16,zt=I.i(b)&65535;E[2*A+2*b]+=T*zt,U(E,2*A+2*b),E[2*A+2*b+1]+=S*zt,U(E,2*A+2*b+1),E[2*A+2*b+1]+=T*wt,U(E,2*A+2*b+1),E[2*A+2*b+2]+=S*wt,U(E,2*A+2*b+2)}for(A=0;A<v;A++)E[A]=E[2*A+1]<<16|E[2*A];for(A=v;A<2*v;A++)E[A]=0;return new o(E,0)};function U(I,v){for(;(I[v]&65535)!=I[v];)I[v+1]+=I[v]>>>16,I[v]&=65535,v++}function B(I,v){this.g=I,this.h=v}function L(I,v){if(C(v))throw Error("division by zero");if(C(I))return new B(p,p);if(k(I))return v=L(V(I),v),new B(V(v.g),V(v.h));if(k(v))return v=L(I,V(v)),new B(V(v.g),v.h);if(30<I.g.length){if(k(I)||k(v))throw Error("slowDivide_ only works with positive integers.");for(var E=m,A=v;0>=A.l(I);)E=Z(E),A=Z(A);var b=fe(E,1),S=fe(A,1);for(A=fe(A,2),E=fe(E,2);!C(A);){var T=S.add(A);0>=T.l(I)&&(b=b.add(E),S=T),A=fe(A,1),E=fe(E,1)}return v=q(I,b.j(v)),new B(b,v)}for(b=p;0<=I.l(v);){for(E=Math.max(1,Math.floor(I.m()/v.m())),A=Math.ceil(Math.log(E)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),S=u(E),T=S.j(v);k(T)||0<T.l(I);)E-=A,S=u(E),T=S.j(v);C(S)&&(S=m),b=b.add(S),I=q(I,T)}return new B(b,I)}t.A=function(I){return L(this,I).h},t.and=function(I){for(var v=Math.max(this.g.length,I.g.length),E=[],A=0;A<v;A++)E[A]=this.i(A)&I.i(A);return new o(E,this.h&I.h)},t.or=function(I){for(var v=Math.max(this.g.length,I.g.length),E=[],A=0;A<v;A++)E[A]=this.i(A)|I.i(A);return new o(E,this.h|I.h)},t.xor=function(I){for(var v=Math.max(this.g.length,I.g.length),E=[],A=0;A<v;A++)E[A]=this.i(A)^I.i(A);return new o(E,this.h^I.h)};function Z(I){for(var v=I.g.length+1,E=[],A=0;A<v;A++)E[A]=I.i(A)<<1|I.i(A-1)>>>31;return new o(E,I.h)}function fe(I,v){var E=v>>5;v%=32;for(var A=I.g.length-E,b=[],S=0;S<A;S++)b[S]=0<v?I.i(S+E)>>>v|I.i(S+E+1)<<32-v:I.i(S+E);return new o(b,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,l_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Er=o}).apply(typeof qd<"u"?qd:typeof self<"u"?self:typeof window<"u"?window:{});var jo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var u_,Ei,h_,Zo,Ml,f_,d_,p_;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,d){return a==Array.prototype||a==Object.prototype||(a[h]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof jo=="object"&&jo];for(var h=0;h<a.length;++h){var d=a[h];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var d=r;a=a.split(".");for(var g=0;g<a.length-1;g++){var P=a[g];if(!(P in d))break e;d=d[P]}a=a[a.length-1],g=d[a],h=h(g),h!=g&&h!=null&&e(d,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var d=0,g=!1,P={next:function(){if(!g&&d<a.length){var N=d++;return{value:h(N,a[N]),done:!1}}return g=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,d){return a.call.apply(a.bind,arguments)}function p(a,h,d){if(!a)throw Error();if(2<arguments.length){var g=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,g),a.apply(h,P)}}return function(){return a.apply(h,arguments)}}function m(a,h,d){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:p,m.apply(null,arguments)}function _(a,h){var d=Array.prototype.slice.call(arguments,1);return function(){var g=d.slice();return g.push.apply(g,arguments),a.apply(this,g)}}function C(a,h){function d(){}d.prototype=h.prototype,a.aa=h.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(g,P,N){for(var W=Array(arguments.length-2),Ne=2;Ne<arguments.length;Ne++)W[Ne-2]=arguments[Ne];return h.prototype[P].apply(g,W)}}function k(a){const h=a.length;if(0<h){const d=Array(h);for(let g=0;g<h;g++)d[g]=a[g];return d}return[]}function V(a,h){for(let d=1;d<arguments.length;d++){const g=arguments[d];if(l(g)){const P=a.length||0,N=g.length||0;a.length=P+N;for(let W=0;W<N;W++)a[P+W]=g[W]}else a.push(g)}}class q{constructor(h,d){this.i=h,this.j=d,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function U(a){return/^[\s\xa0]*$/.test(a)}function B(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function L(a){return L[" "](a),a}L[" "]=function(){};var Z=B().indexOf("Gecko")!=-1&&!(B().toLowerCase().indexOf("webkit")!=-1&&B().indexOf("Edge")==-1)&&!(B().indexOf("Trident")!=-1||B().indexOf("MSIE")!=-1)&&B().indexOf("Edge")==-1;function fe(a,h,d){for(const g in a)h.call(d,a[g],g,a)}function I(a,h){for(const d in a)h.call(void 0,a[d],d,a)}function v(a){const h={};for(const d in a)h[d]=a[d];return h}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let d,g;for(let P=1;P<arguments.length;P++){g=arguments[P];for(d in g)a[d]=g[d];for(let N=0;N<E.length;N++)d=E[N],Object.prototype.hasOwnProperty.call(g,d)&&(a[d]=g[d])}}function b(a){var h=1;a=a.split(":");const d=[];for(;0<h&&a.length;)d.push(a.shift()),h--;return a.length&&d.push(a.join(":")),d}function S(a){c.setTimeout(()=>{throw a},0)}function T(){var a=Lt;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class wt{constructor(){this.h=this.g=null}add(h,d){const g=zt.get();g.set(h,d),this.h?this.h.next=g:this.g=g,this.h=g}}var zt=new q(()=>new ze,a=>a.reset());class ze{constructor(){this.next=this.g=this.h=null}set(h,d){this.h=h,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,_e=!1,Lt=new wt,tn=()=>{const a=c.Promise.resolve(void 0);Te=()=>{a.then(Kt)}};var Kt=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){S(d)}var h=zt;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}_e=!1};function Me(){this.s=this.s,this.C=this.C}Me.prototype.s=!1,Me.prototype.ma=function(){this.s||(this.s=!0,this.N())},Me.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Le(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}Le.prototype.h=function(){this.defaultPrevented=!0};var sr=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};c.addEventListener("test",d,h),c.removeEventListener("test",d,h)}catch{}return a})();function Ft(a,h){if(Le.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,g=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Z){e:{try{L(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else d=="mouseover"?h=a.fromElement:d=="mouseout"&&(h=a.toElement);this.relatedTarget=h,g?(this.clientX=g.clientX!==void 0?g.clientX:g.pageX,this.clientY=g.clientY!==void 0?g.clientY:g.pageY,this.screenX=g.screenX||0,this.screenY=g.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:kt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Ft.aa.h.call(this)}}C(Ft,Le);var kt={2:"touch",3:"pen",4:"mouse"};Ft.prototype.h=function(){Ft.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),X=0;function Q(a,h,d,g,P){this.listener=a,this.proxy=null,this.src=h,this.type=d,this.capture=!!g,this.ha=P,this.key=++X,this.da=this.fa=!1}function ee(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function me(a){this.src=a,this.g={},this.h=0}me.prototype.add=function(a,h,d,g,P){var N=a.toString();a=this.g[N],a||(a=this.g[N]=[],this.h++);var W=w(a,h,g,P);return-1<W?(h=a[W],d||(h.fa=!1)):(h=new Q(h,this.src,N,!!g,P),h.fa=d,a.push(h)),h};function y(a,h){var d=h.type;if(d in a.g){var g=a.g[d],P=Array.prototype.indexOf.call(g,h,void 0),N;(N=0<=P)&&Array.prototype.splice.call(g,P,1),N&&(ee(h),a.g[d].length==0&&(delete a.g[d],a.h--))}}function w(a,h,d,g){for(var P=0;P<a.length;++P){var N=a[P];if(!N.da&&N.listener==h&&N.capture==!!d&&N.ha==g)return P}return-1}var R="closure_lm_"+(1e6*Math.random()|0),O={};function j(a,h,d,g,P){if(Array.isArray(h)){for(var N=0;N<h.length;N++)j(a,h[N],d,g,P);return null}return d=ae(d),a&&a[M]?a.K(h,d,u(g)?!!g.capture:!1,P):x(a,h,d,!1,g,P)}function x(a,h,d,g,P,N){if(!h)throw Error("Invalid event type");var W=u(P)?!!P.capture:!!P,Ne=J(a);if(Ne||(a[R]=Ne=new me(a)),d=Ne.add(h,d,g,W,N),d.proxy)return d;if(g=K(),d.proxy=g,g.src=a,g.listener=d,a.addEventListener)sr||(P=W),P===void 0&&(P=!1),a.addEventListener(h.toString(),g,P);else if(a.attachEvent)a.attachEvent($(h.toString()),g);else if(a.addListener&&a.removeListener)a.addListener(g);else throw Error("addEventListener and attachEvent are unavailable.");return d}function K(){function a(d){return h.call(a.src,a.listener,d)}const h=ie;return a}function G(a,h,d,g,P){if(Array.isArray(h))for(var N=0;N<h.length;N++)G(a,h[N],d,g,P);else g=u(g)?!!g.capture:!!g,d=ae(d),a&&a[M]?(a=a.i,h=String(h).toString(),h in a.g&&(N=a.g[h],d=w(N,d,g,P),-1<d&&(ee(N[d]),Array.prototype.splice.call(N,d,1),N.length==0&&(delete a.g[h],a.h--)))):a&&(a=J(a))&&(h=a.g[h.toString()],a=-1,h&&(a=w(h,d,g,P)),(d=-1<a?h[a]:null)&&H(d))}function H(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[M])y(h.i,a);else{var d=a.type,g=a.proxy;h.removeEventListener?h.removeEventListener(d,g,a.capture):h.detachEvent?h.detachEvent($(d),g):h.addListener&&h.removeListener&&h.removeListener(g),(d=J(h))?(y(d,a),d.h==0&&(d.src=null,h[R]=null)):ee(a)}}}function $(a){return a in O?O[a]:O[a]="on"+a}function ie(a,h){if(a.da)a=!0;else{h=new Ft(h,this);var d=a.listener,g=a.ha||a.src;a.fa&&H(a),a=d.call(g,h)}return a}function J(a){return a=a[R],a instanceof me?a:null}var te="__closure_events_fn_"+(1e9*Math.random()>>>0);function ae(a){return typeof a=="function"?a:(a[te]||(a[te]=function(h){return a.handleEvent(h)}),a[te])}function oe(){Me.call(this),this.i=new me(this),this.M=this,this.F=null}C(oe,Me),oe.prototype[M]=!0,oe.prototype.removeEventListener=function(a,h,d,g){G(this,a,h,d,g)};function de(a,h){var d,g=a.F;if(g)for(d=[];g;g=g.F)d.push(g);if(a=a.M,g=h.type||h,typeof h=="string")h=new Le(h,a);else if(h instanceof Le)h.target=h.target||a;else{var P=h;h=new Le(g,a),A(h,P)}if(P=!0,d)for(var N=d.length-1;0<=N;N--){var W=h.g=d[N];P=Ae(W,g,!0,h)&&P}if(W=h.g=a,P=Ae(W,g,!0,h)&&P,P=Ae(W,g,!1,h)&&P,d)for(N=0;N<d.length;N++)W=h.g=d[N],P=Ae(W,g,!1,h)&&P}oe.prototype.N=function(){if(oe.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var d=a.g[h],g=0;g<d.length;g++)ee(d[g]);delete a.g[h],a.h--}}this.F=null},oe.prototype.K=function(a,h,d,g){return this.i.add(String(a),h,!1,d,g)},oe.prototype.L=function(a,h,d,g){return this.i.add(String(a),h,!0,d,g)};function Ae(a,h,d,g){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,N=0;N<h.length;++N){var W=h[N];if(W&&!W.da&&W.capture==d){var Ne=W.listener,it=W.ha||W.src;W.fa&&y(a.i,W),P=Ne.call(it,g)!==!1&&P}}return P&&!g.defaultPrevented}function Fe(a,h,d){if(typeof a=="function")d&&(a=m(a,d));else if(a&&typeof a.handleEvent=="function")a=m(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function Ke(a){a.g=Fe(()=>{a.g=null,a.i&&(a.i=!1,Ke(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class Qt extends Me{constructor(h,d){super(),this.m=h,this.l=d,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Ke(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ft(a){Me.call(this),this.h=a,this.g={}}C(ft,Me);var ir=[];function Xs(a){fe(a.g,function(h,d){this.g.hasOwnProperty(d)&&H(h)},a),a.g={}}ft.prototype.N=function(){ft.aa.N.call(this),Xs(this)},ft.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var st=c.JSON.stringify,Jt=c.JSON.parse,Eo=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function ls(){}ls.prototype.h=null;function bh(a){return a.h||(a.h=a.i())}function Rh(){}var Zs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Rc(){Le.call(this,"d")}C(Rc,Le);function Sc(){Le.call(this,"c")}C(Sc,Le);var Ur={},Sh=null;function To(){return Sh=Sh||new oe}Ur.La="serverreachability";function Ph(a){Le.call(this,Ur.La,a)}C(Ph,Le);function ei(a){const h=To();de(h,new Ph(h))}Ur.STAT_EVENT="statevent";function Ch(a,h){Le.call(this,Ur.STAT_EVENT,a),this.stat=h}C(Ch,Le);function It(a){const h=To();de(h,new Ch(h,a))}Ur.Ma="timingevent";function kh(a,h){Le.call(this,Ur.Ma,a),this.size=h}C(kh,Le);function ti(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function ni(){this.g=!0}ni.prototype.xa=function(){this.g=!1};function Wy(a,h,d,g,P,N){a.info(function(){if(a.g)if(N)for(var W="",Ne=N.split("&"),it=0;it<Ne.length;it++){var be=Ne[it].split("=");if(1<be.length){var dt=be[0];be=be[1];var pt=dt.split("_");W=2<=pt.length&&pt[1]=="type"?W+(dt+"="+be+"&"):W+(dt+"=redacted&")}}else W=null;else W=N;return"XMLHTTP REQ ("+g+") [attempt "+P+"]: "+h+`
`+d+`
`+W})}function zy(a,h,d,g,P,N,W){a.info(function(){return"XMLHTTP RESP ("+g+") [ attempt "+P+"]: "+h+`
`+d+`
`+N+" "+W})}function us(a,h,d,g){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Qy(a,d)+(g?" "+g:"")})}function Ky(a,h){a.info(function(){return"TIMEOUT: "+h})}ni.prototype.info=function(){};function Qy(a,h){if(!a.g)return h;if(!h)return null;try{var d=JSON.parse(h);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var g=d[a];if(!(2>g.length)){var P=g[1];if(Array.isArray(P)&&!(1>P.length)){var N=P[0];if(N!="noop"&&N!="stop"&&N!="close")for(var W=1;W<P.length;W++)P[W]=""}}}}return st(d)}catch{return h}}var wo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Nh={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Pc;function Io(){}C(Io,ls),Io.prototype.g=function(){return new XMLHttpRequest},Io.prototype.i=function(){return{}},Pc=new Io;function or(a,h,d,g){this.j=a,this.i=h,this.l=d,this.R=g||1,this.U=new ft(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Vh}function Vh(){this.i=null,this.g="",this.h=!1}var Dh={},Cc={};function kc(a,h,d){a.L=1,a.v=So(Nn(h)),a.m=d,a.P=!0,Oh(a,null)}function Oh(a,h){a.F=Date.now(),Ao(a),a.A=Nn(a.v);var d=a.A,g=a.R;Array.isArray(g)||(g=[String(g)]),Kh(d.i,"t",g),a.C=0,d=a.j.J,a.h=new Vh,a.g=df(a.j,d?h:null,!a.m),0<a.O&&(a.M=new Qt(m(a.Y,a,a.g),a.O)),h=a.U,d=a.g,g=a.ca;var P="readystatechange";Array.isArray(P)||(P&&(ir[0]=P.toString()),P=ir);for(var N=0;N<P.length;N++){var W=j(d,P[N],g||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?v(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),ei(),Wy(a.i,a.u,a.A,a.l,a.R,a.m)}or.prototype.ca=function(a){a=a.target;const h=this.M;h&&Vn(a)==3?h.j():this.Y(a)},or.prototype.Y=function(a){try{if(a==this.g)e:{const pt=Vn(this.g);var h=this.g.Ba();const ds=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||tf(this.g)))){this.J||pt!=4||h==7||(h==8||0>=ds?ei(3):ei(2)),Nc(this);var d=this.g.Z();this.X=d;t:if(xh(this)){var g=tf(this.g);a="";var P=g.length,N=Vn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jr(this),ri(this);var W="";break t}this.h.i=new c.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,a+=this.h.i.decode(g[h],{stream:!(N&&h==P-1)});g.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=d==200,zy(this.i,this.u,this.A,this.l,this.R,pt,d),this.o){if(this.T&&!this.K){t:{if(this.g){var Ne,it=this.g;if((Ne=it.g?it.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!U(Ne)){var be=Ne;break t}}be=null}if(d=be)us(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vc(this,d);else{this.o=!1,this.s=3,It(12),jr(this),ri(this);break e}}if(this.P){d=!0;let nn;for(;!this.J&&this.C<W.length;)if(nn=Jy(this,W),nn==Cc){pt==4&&(this.s=4,It(14),d=!1),us(this.i,this.l,null,"[Incomplete Response]");break}else if(nn==Dh){this.s=4,It(15),us(this.i,this.l,W,"[Invalid Chunk]"),d=!1;break}else us(this.i,this.l,nn,null),Vc(this,nn);if(xh(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||W.length!=0||this.h.h||(this.s=1,It(16),d=!1),this.o=this.o&&d,!d)us(this.i,this.l,W,"[Invalid Chunked Response]"),jr(this),ri(this);else if(0<W.length&&!this.W){this.W=!0;var dt=this.j;dt.g==this&&dt.ba&&!dt.M&&(dt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),Fc(dt),dt.M=!0,It(11))}}else us(this.i,this.l,W,null),Vc(this,W);pt==4&&jr(this),this.o&&!this.J&&(pt==4?lf(this.j,this):(this.o=!1,Ao(this)))}else dv(this.g),d==400&&0<W.indexOf("Unknown SID")?(this.s=3,It(12)):(this.s=0,It(13)),jr(this),ri(this)}}}catch{}finally{}};function xh(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Jy(a,h){var d=a.C,g=h.indexOf(`
`,d);return g==-1?Cc:(d=Number(h.substring(d,g)),isNaN(d)?Dh:(g+=1,g+d>h.length?Cc:(h=h.slice(g,g+d),a.C=g+d,h)))}or.prototype.cancel=function(){this.J=!0,jr(this)};function Ao(a){a.S=Date.now()+a.I,Mh(a,a.I)}function Mh(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=ti(m(a.ba,a),h)}function Nc(a){a.B&&(c.clearTimeout(a.B),a.B=null)}or.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(Ky(this.i,this.A),this.L!=2&&(ei(),It(17)),jr(this),this.s=2,ri(this)):Mh(this,this.S-a)};function ri(a){a.j.G==0||a.J||lf(a.j,a)}function jr(a){Nc(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,Xs(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function Vc(a,h){try{var d=a.j;if(d.G!=0&&(d.g==a||Dc(d.h,a))){if(!a.K&&Dc(d.h,a)&&d.G==3){try{var g=d.Da.g.parse(h)}catch{g=null}if(Array.isArray(g)&&g.length==3){var P=g;if(P[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Do(d),No(d);else break e;Lc(d),It(18)}}else d.za=P[1],0<d.za-d.T&&37500>P[2]&&d.F&&d.v==0&&!d.C&&(d.C=ti(m(d.Za,d),6e3));if(1>=Uh(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else $r(d,11)}else if((a.K||d.g==a)&&Do(d),!U(h))for(P=d.Da.g.parse(h),h=0;h<P.length;h++){let be=P[h];if(d.T=be[0],be=be[1],d.G==2)if(be[0]=="c"){d.K=be[1],d.ia=be[2];const dt=be[3];dt!=null&&(d.la=dt,d.j.info("VER="+d.la));const pt=be[4];pt!=null&&(d.Aa=pt,d.j.info("SVER="+d.Aa));const ds=be[5];ds!=null&&typeof ds=="number"&&0<ds&&(g=1.5*ds,d.L=g,d.j.info("backChannelRequestTimeoutMs_="+g)),g=d;const nn=a.g;if(nn){const xo=nn.g?nn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xo){var N=g.h;N.g||xo.indexOf("spdy")==-1&&xo.indexOf("quic")==-1&&xo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(Oc(N,N.h),N.h=null))}if(g.D){const Uc=nn.g?nn.g.getResponseHeader("X-HTTP-Session-Id"):null;Uc&&(g.ya=Uc,Oe(g.I,g.D,Uc))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),g=d;var W=a;if(g.qa=ff(g,g.J?g.ia:null,g.W),W.K){jh(g.h,W);var Ne=W,it=g.L;it&&(Ne.I=it),Ne.B&&(Nc(Ne),Ao(Ne)),g.g=W}else af(g);0<d.i.length&&Vo(d)}else be[0]!="stop"&&be[0]!="close"||$r(d,7);else d.G==3&&(be[0]=="stop"||be[0]=="close"?be[0]=="stop"?$r(d,7):Mc(d):be[0]!="noop"&&d.l&&d.l.ta(be),d.v=0)}}ei(4)}catch{}}var Yy=class{constructor(a,h){this.g=a,this.map=h}};function Lh(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Fh(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Uh(a){return a.h?1:a.g?a.g.size:0}function Dc(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function Oc(a,h){a.g?a.g.add(h):a.h=h}function jh(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}Lh.prototype.cancel=function(){if(this.i=Bh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Bh(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const d of a.g.values())h=h.concat(d.D);return h}return k(a.i)}function Xy(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],d=a.length,g=0;g<d;g++)h.push(a[g]);return h}h=[],d=0;for(g in a)h[d++]=a[g];return h}function Zy(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var d=0;d<a;d++)h.push(d);return h}h=[],d=0;for(const g in a)h[d++]=g;return h}}}function $h(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var d=Zy(a),g=Xy(a),P=g.length,N=0;N<P;N++)h.call(void 0,g[N],d&&d[N],a)}var qh=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ev(a,h){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var g=a[d].indexOf("="),P=null;if(0<=g){var N=a[d].substring(0,g);P=a[d].substring(g+1)}else N=a[d];h(N,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function Br(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Br){this.h=a.h,bo(this,a.j),this.o=a.o,this.g=a.g,Ro(this,a.s),this.l=a.l;var h=a.i,d=new oi;d.i=h.i,h.g&&(d.g=new Map(h.g),d.h=h.h),Hh(this,d),this.m=a.m}else a&&(h=String(a).match(qh))?(this.h=!1,bo(this,h[1]||"",!0),this.o=si(h[2]||""),this.g=si(h[3]||"",!0),Ro(this,h[4]),this.l=si(h[5]||"",!0),Hh(this,h[6]||"",!0),this.m=si(h[7]||"")):(this.h=!1,this.i=new oi(null,this.h))}Br.prototype.toString=function(){var a=[],h=this.j;h&&a.push(ii(h,Gh,!0),":");var d=this.g;return(d||h=="file")&&(a.push("//"),(h=this.o)&&a.push(ii(h,Gh,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(ii(d,d.charAt(0)=="/"?rv:nv,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",ii(d,iv)),a.join("")};function Nn(a){return new Br(a)}function bo(a,h,d){a.j=d?si(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function Ro(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function Hh(a,h,d){h instanceof oi?(a.i=h,ov(a.i,a.h)):(d||(h=ii(h,sv)),a.i=new oi(h,a.h))}function Oe(a,h,d){a.i.set(h,d)}function So(a){return Oe(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function si(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function ii(a,h,d){return typeof a=="string"?(a=encodeURI(a).replace(h,tv),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function tv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Gh=/[#\/\?@]/g,nv=/[#\?:]/g,rv=/[#\?]/g,sv=/[#\?@]/g,iv=/#/g;function oi(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function ar(a){a.g||(a.g=new Map,a.h=0,a.i&&ev(a.i,function(h,d){a.add(decodeURIComponent(h.replace(/\+/g," ")),d)}))}t=oi.prototype,t.add=function(a,h){ar(this),this.i=null,a=hs(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(h),this.h+=1,this};function Wh(a,h){ar(a),h=hs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function zh(a,h){return ar(a),h=hs(a,h),a.g.has(h)}t.forEach=function(a,h){ar(this),this.g.forEach(function(d,g){d.forEach(function(P){a.call(h,P,g,this)},this)},this)},t.na=function(){ar(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),d=[];for(let g=0;g<h.length;g++){const P=a[g];for(let N=0;N<P.length;N++)d.push(h[g])}return d},t.V=function(a){ar(this);let h=[];if(typeof a=="string")zh(this,a)&&(h=h.concat(this.g.get(hs(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)h=h.concat(a[d])}return h},t.set=function(a,h){return ar(this),this.i=null,a=hs(this,a),zh(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function Kh(a,h,d){Wh(a,h),0<d.length&&(a.i=null,a.g.set(hs(a,h),k(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var d=0;d<h.length;d++){var g=h[d];const N=encodeURIComponent(String(g)),W=this.V(g);for(g=0;g<W.length;g++){var P=N;W[g]!==""&&(P+="="+encodeURIComponent(String(W[g]))),a.push(P)}}return this.i=a.join("&")};function hs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function ov(a,h){h&&!a.j&&(ar(a),a.i=null,a.g.forEach(function(d,g){var P=g.toLowerCase();g!=P&&(Wh(this,g),Kh(this,P,d))},a)),a.j=h}function av(a,h){const d=new ni;if(c.Image){const g=new Image;g.onload=_(cr,d,"TestLoadImage: loaded",!0,h,g),g.onerror=_(cr,d,"TestLoadImage: error",!1,h,g),g.onabort=_(cr,d,"TestLoadImage: abort",!1,h,g),g.ontimeout=_(cr,d,"TestLoadImage: timeout",!1,h,g),c.setTimeout(function(){g.ontimeout&&g.ontimeout()},1e4),g.src=a}else h(!1)}function cv(a,h){const d=new ni,g=new AbortController,P=setTimeout(()=>{g.abort(),cr(d,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:g.signal}).then(N=>{clearTimeout(P),N.ok?cr(d,"TestPingServer: ok",!0,h):cr(d,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),cr(d,"TestPingServer: error",!1,h)})}function cr(a,h,d,g,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),g(d)}catch{}}function lv(){this.g=new Eo}function uv(a,h,d){const g=d||"";try{$h(a,function(P,N){let W=P;u(P)&&(W=st(P)),h.push(g+N+"="+encodeURIComponent(W))})}catch(P){throw h.push(g+"type="+encodeURIComponent("_badmap")),P}}function Po(a){this.l=a.Ub||null,this.j=a.eb||!1}C(Po,ls),Po.prototype.g=function(){return new Co(this.l,this.j)},Po.prototype.i=(function(a){return function(){return a}})({});function Co(a,h){oe.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}C(Co,oe),t=Co.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,ci(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ai(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,ci(this)),this.g&&(this.readyState=3,ci(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Qh(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Qh(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?ai(this):ci(this),this.readyState==3&&Qh(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,ai(this))},t.Qa=function(a){this.g&&(this.response=a,ai(this))},t.ga=function(){this.g&&ai(this)};function ai(a){a.readyState=4,a.l=null,a.j=null,a.v=null,ci(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var d=h.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=h.next();return a.join(`\r
`)};function ci(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Co.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Jh(a){let h="";return fe(a,function(d,g){h+=g,h+=":",h+=d,h+=`\r
`}),h}function xc(a,h,d){e:{for(g in d){var g=!1;break e}g=!0}g||(d=Jh(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):Oe(a,h,d))}function Be(a){oe.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}C(Be,oe);var hv=/^https?$/i,fv=["POST","PUT"];t=Be.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,d,g){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Pc.g(),this.v=this.o?bh(this.o):bh(Pc),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(N){Yh(this,N);return}if(a=d||"",d=new Map(this.headers),g)if(Object.getPrototypeOf(g)===Object.prototype)for(var P in g)d.set(P,g[P]);else if(typeof g.keys=="function"&&typeof g.get=="function")for(const N of g.keys())d.set(N,g.get(N));else throw Error("Unknown input type for opt_headers: "+String(g));g=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),P=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(fv,h,void 0))||g||P||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,W]of d)this.g.setRequestHeader(N,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{ef(this),this.u=!0,this.g.send(a),this.u=!1}catch(N){Yh(this,N)}};function Yh(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Xh(a),ko(a)}function Xh(a){a.A||(a.A=!0,de(a,"complete"),de(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,de(this,"complete"),de(this,"abort"),ko(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ko(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Zh(this):this.bb())},t.bb=function(){Zh(this)};function Zh(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Vn(a)!=4||a.Z()!=2)){if(a.u&&Vn(a)==4)Fe(a.Ea,0,a);else if(de(a,"readystatechange"),Vn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var d;if(!(d=h)){var g;if(g=W===0){var P=String(a.D).match(qh)[1]||null;!P&&c.self&&c.self.location&&(P=c.self.location.protocol.slice(0,-1)),g=!hv.test(P?P.toLowerCase():"")}d=g}if(d)de(a,"complete"),de(a,"success");else{a.m=6;try{var N=2<Vn(a)?a.g.statusText:""}catch{N=""}a.l=N+" ["+a.Z()+"]",Xh(a)}}finally{ko(a)}}}}function ko(a,h){if(a.g){ef(a);const d=a.g,g=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||de(a,"ready");try{d.onreadystatechange=g}catch{}}}function ef(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Vn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Vn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),Jt(h)}};function tf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function dv(a){const h={};a=(a.g&&2<=Vn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let g=0;g<a.length;g++){if(U(a[g]))continue;var d=b(a[g]);const P=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=h[P]||[];h[P]=N,N.push(d)}I(h,function(g){return g.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function li(a,h,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||h}function nf(a){this.Aa=0,this.i=[],this.j=new ni,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=li("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=li("baseRetryDelayMs",5e3,a),this.cb=li("retryDelaySeedMs",1e4,a),this.Wa=li("forwardChannelMaxRetries",2,a),this.wa=li("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Lh(a&&a.concurrentRequestLimit),this.Da=new lv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=nf.prototype,t.la=8,t.G=1,t.connect=function(a,h,d,g){It(0),this.W=a,this.H=h||{},d&&g!==void 0&&(this.H.OSID=d,this.H.OAID=g),this.F=this.X,this.I=ff(this,null,this.W),Vo(this)};function Mc(a){if(rf(a),a.G==3){var h=a.U++,d=Nn(a.I);if(Oe(d,"SID",a.K),Oe(d,"RID",h),Oe(d,"TYPE","terminate"),ui(a,d),h=new or(a,a.j,h),h.L=2,h.v=So(Nn(d)),d=!1,c.navigator&&c.navigator.sendBeacon)try{d=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!d&&c.Image&&(new Image().src=h.v,d=!0),d||(h.g=df(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ao(h)}hf(a)}function No(a){a.g&&(Fc(a),a.g.cancel(),a.g=null)}function rf(a){No(a),a.u&&(c.clearTimeout(a.u),a.u=null),Do(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Vo(a){if(!Fh(a.h)&&!a.s){a.s=!0;var h=a.Ga;Te||tn(),_e||(Te(),_e=!0),Lt.add(h,a),a.B=0}}function pv(a,h){return Uh(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=ti(m(a.Ga,a,h),uf(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const P=new or(this,this.j,a);let N=this.o;if(this.S&&(N?(N=v(N),A(N,this.S)):N=this.S),this.m!==null||this.O||(P.H=N,N=null),this.P)e:{for(var h=0,d=0;d<this.i.length;d++){t:{var g=this.i[d];if("__data__"in g.map&&(g=g.map.__data__,typeof g=="string")){g=g.length;break t}g=void 0}if(g===void 0)break;if(h+=g,4096<h){h=d;break e}if(h===4096||d===this.i.length-1){h=d+1;break e}}h=1e3}else h=1e3;h=of(this,P,h),d=Nn(this.I),Oe(d,"RID",a),Oe(d,"CVER",22),this.D&&Oe(d,"X-HTTP-Session-Id",this.D),ui(this,d),N&&(this.O?h="headers="+encodeURIComponent(String(Jh(N)))+"&"+h:this.m&&xc(d,this.m,N)),Oc(this.h,P),this.Ua&&Oe(d,"TYPE","init"),this.P?(Oe(d,"$req",h),Oe(d,"SID","null"),P.T=!0,kc(P,d,null)):kc(P,d,h),this.G=2}}else this.G==3&&(a?sf(this,a):this.i.length==0||Fh(this.h)||sf(this))};function sf(a,h){var d;h?d=h.l:d=a.U++;const g=Nn(a.I);Oe(g,"SID",a.K),Oe(g,"RID",d),Oe(g,"AID",a.T),ui(a,g),a.m&&a.o&&xc(g,a.m,a.o),d=new or(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),h&&(a.i=h.D.concat(a.i)),h=of(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Oc(a.h,d),kc(d,g,h)}function ui(a,h){a.H&&fe(a.H,function(d,g){Oe(h,g,d)}),a.l&&$h({},function(d,g){Oe(h,g,d)})}function of(a,h,d){d=Math.min(a.i.length,d);var g=a.l?m(a.l.Na,a.l,a):null;e:{var P=a.i;let N=-1;for(;;){const W=["count="+d];N==-1?0<d?(N=P[0].g,W.push("ofs="+N)):N=0:W.push("ofs="+N);let Ne=!0;for(let it=0;it<d;it++){let be=P[it].g;const dt=P[it].map;if(be-=N,0>be)N=Math.max(0,P[it].g-100),Ne=!1;else try{uv(dt,W,"req"+be+"_")}catch{g&&g(dt)}}if(Ne){g=W.join("&");break e}}}return a=a.i.splice(0,d),h.D=a,g}function af(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Te||tn(),_e||(Te(),_e=!0),Lt.add(h,a),a.v=0}}function Lc(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=ti(m(a.Fa,a),uf(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,cf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=ti(m(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,It(10),No(this),cf(this))};function Fc(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function cf(a){a.g=new or(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Nn(a.qa);Oe(h,"RID","rpc"),Oe(h,"SID",a.K),Oe(h,"AID",a.T),Oe(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Oe(h,"TO",a.ja),Oe(h,"TYPE","xmlhttp"),ui(a,h),a.m&&a.o&&xc(h,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=So(Nn(h)),d.m=null,d.P=!0,Oh(d,a)}t.Za=function(){this.C!=null&&(this.C=null,No(this),Lc(this),It(19))};function Do(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function lf(a,h){var d=null;if(a.g==h){Do(a),Fc(a),a.g=null;var g=2}else if(Dc(a.h,h))d=h.D,jh(a.h,h),g=1;else return;if(a.G!=0){if(h.o)if(g==1){d=h.m?h.m.length:0,h=Date.now()-h.F;var P=a.B;g=To(),de(g,new kh(g,d)),Vo(a)}else af(a);else if(P=h.s,P==3||P==0&&0<h.X||!(g==1&&pv(a,h)||g==2&&Lc(a)))switch(d&&0<d.length&&(h=a.h,h.i=h.i.concat(d)),P){case 1:$r(a,5);break;case 4:$r(a,10);break;case 3:$r(a,6);break;default:$r(a,2)}}}function uf(a,h){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*h}function $r(a,h){if(a.j.info("Error code "+h),h==2){var d=m(a.fb,a),g=a.Xa;const P=!g;g=new Br(g||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||bo(g,"https"),So(g),P?av(g.toString(),d):cv(g.toString(),d)}else It(2);a.G=0,a.l&&a.l.sa(h),hf(a),rf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),It(2)):(this.j.info("Failed to ping google.com"),It(1))};function hf(a){if(a.G=0,a.ka=[],a.l){const h=Bh(a.h);(h.length!=0||a.i.length!=0)&&(V(a.ka,h),V(a.ka,a.i),a.h.i.length=0,k(a.i),a.i.length=0),a.l.ra()}}function ff(a,h,d){var g=d instanceof Br?Nn(d):new Br(d);if(g.g!="")h&&(g.g=h+"."+g.g),Ro(g,g.s);else{var P=c.location;g=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var N=new Br(null);g&&bo(N,g),h&&(N.g=h),P&&Ro(N,P),d&&(N.l=d),g=N}return d=a.D,h=a.ya,d&&h&&Oe(g,d,h),Oe(g,"VER",a.la),ui(a,g),g}function df(a,h,d){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new Be(new Po({eb:d})):new Be(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function pf(){}t=pf.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Oo(){}Oo.prototype.g=function(a,h){return new Ut(a,h)};function Ut(a,h){oe.call(this),this.g=new nf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!U(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!U(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new fs(this)}C(Ut,oe),Ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Ut.prototype.close=function(){Mc(this.g)},Ut.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=st(a),a=d);h.i.push(new Yy(h.Ya++,a)),h.G==3&&Vo(h)},Ut.prototype.N=function(){this.g.l=null,delete this.j,Mc(this.g),delete this.g,Ut.aa.N.call(this)};function mf(a){Rc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const d in h){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}C(mf,Rc);function gf(){Sc.call(this),this.status=1}C(gf,Sc);function fs(a){this.g=a}C(fs,pf),fs.prototype.ua=function(){de(this.g,"a")},fs.prototype.ta=function(a){de(this.g,new mf(a))},fs.prototype.sa=function(a){de(this.g,new gf)},fs.prototype.ra=function(){de(this.g,"b")},Oo.prototype.createWebChannel=Oo.prototype.g,Ut.prototype.send=Ut.prototype.o,Ut.prototype.open=Ut.prototype.m,Ut.prototype.close=Ut.prototype.close,p_=function(){return new Oo},d_=function(){return To()},f_=Ur,Ml={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},wo.NO_ERROR=0,wo.TIMEOUT=8,wo.HTTP_ERROR=6,Zo=wo,Nh.COMPLETE="complete",h_=Nh,Rh.EventType=Zs,Zs.OPEN="a",Zs.CLOSE="b",Zs.ERROR="c",Zs.MESSAGE="d",oe.prototype.listen=oe.prototype.K,Ei=Rh,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,u_=Be}).apply(typeof jo<"u"?jo:typeof self<"u"?self:typeof window<"u"?window:{});const Hd="@firebase/firestore",Gd="4.8.0";/**
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
 */class gt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}gt.UNAUTHENTICATED=new gt(null),gt.GOOGLE_CREDENTIALS=new gt("google-credentials-uid"),gt.FIRST_PARTY=new gt("first-party-uid"),gt.MOCK_USER=new gt("mock-user");/**
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
 */let zs="11.10.0";/**
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
 */const rs=new wu("@firebase/firestore");function _s(){return rs.logLevel}function Y(t,...e){if(rs.logLevel<=ye.DEBUG){const n=e.map(Ou);rs.debug(`Firestore (${zs}): ${t}`,...n)}}function Yn(t,...e){if(rs.logLevel<=ye.ERROR){const n=e.map(Ou);rs.error(`Firestore (${zs}): ${t}`,...n)}}function Sr(t,...e){if(rs.logLevel<=ye.WARN){const n=e.map(Ou);rs.warn(`Firestore (${zs}): ${t}`,...n)}}function Ou(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function se(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,m_(t,r,n)}function m_(t,e,n){let r=`FIRESTORE (${zs}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw Yn(r),new Error(r)}function Ie(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||m_(e,s,r)}function he(t,e){return t}/**
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
 */class g_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class zb{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(gt.UNAUTHENTICATED)))}shutdown(){}}class Kb{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Qb{constructor(e){this.t=e,this.currentUser=gt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){Ie(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new An;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new An,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{Y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(Y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new An)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(Y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ie(typeof r.accessToken=="string",31837,{l:r}),new g_(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Ie(e===null||typeof e=="string",2055,{h:e}),new gt(e)}}class Jb{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=gt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Yb{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new Jb(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(gt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Wd{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xb{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,jt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){Ie(this.o===void 0,3512);const r=i=>{i.error!=null&&Y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,Y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{Y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):Y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Wd(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(Ie(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new Wd(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function __(){return new TextEncoder}/**
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
 */class xu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Zb(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function Ll(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return ge(r,s);{const i=__(),o=eR(i.encode(zd(t,n)),i.encode(zd(e,n)));return o!==0?o:ge(r,s)}}n+=r>65535?2:1}return ge(t.length,e.length)}function zd(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function eR(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return ge(t[n],e[n]);return ge(t.length,e.length)}function Fs(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
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
 */const Kd="__name__";class mn{constructor(e,n,r){n===void 0?n=0:n>e.length&&se(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&se(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return mn.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof mn?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=mn.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return ge(e.length,n.length)}static compareSegments(e,n){const r=mn.isNumericId(e),s=mn.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?mn.extractNumericId(e).compare(mn.extractNumericId(n)):Ll(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Er.fromString(e.substring(4,e.length-2))}}class ke extends mn{construct(e,n,r){return new ke(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new ke(n)}static emptyPath(){return new ke([])}}const tR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends mn{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return tR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Kd}static keyField(){return new lt([Kd])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new z(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new z(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
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
 */class re{constructor(e){this.path=e}static fromPath(e){return new re(ke.fromString(e))}static fromName(e){return new re(ke.fromString(e).popFirst(5))}static empty(){return new re(ke.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ke.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ke.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new re(new ke(e.slice()))}}/**
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
 */function y_(t,e,n){if(!n)throw new z(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function nR(t,e,n,r){if(e===!0&&r===!0)throw new z(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Qd(t){if(!re.isDocumentKey(t))throw new z(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Jd(t){if(re.isDocumentKey(t))throw new z(D.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function v_(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function ic(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":se(12329,{type:typeof t})}function Gt(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ic(t);throw new z(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function rR(t,e){if(e<=0)throw new z(D.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function Ze(t,e){const n={typeString:t};return e&&(n.value=e),n}function uo(t,e){if(!v_(t))throw new z(D.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new z(D.INVALID_ARGUMENT,n);return!0}/**
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
 */const Yd=-62135596800,Xd=1e6;class ve{static now(){return ve.fromMillis(Date.now())}static fromDate(e){return ve.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Xd);return new ve(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Yd)throw new z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Xd}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ve._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(uo(e,ve._jsonSchema))return new ve(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Yd;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ve._jsonSchemaVersion="firestore/timestamp/1.0",ve._jsonSchema={type:Ze("string",ve._jsonSchemaVersion),seconds:Ze("number"),nanoseconds:Ze("number")};/**
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
 */class ce{static fromTimestamp(e){return new ce(e)}static min(){return new ce(new ve(0,0))}static max(){return new ce(new ve(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const zi=-1;function sR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ce.fromTimestamp(r===1e9?new ve(n+1,0):new ve(n,r));return new Pr(s,re.empty(),e)}function iR(t){return new Pr(t.readTime,t.key,zi)}class Pr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Pr(ce.min(),re.empty(),zi)}static max(){return new Pr(ce.max(),re.empty(),zi)}}function oR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=re.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function Ks(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==aR)throw t;Y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):F.reject(n)}static resolve(e){return new F(((n,r)=>{n(e)}))}static reject(e){return new F(((n,r)=>{r(e)}))}static waitFor(e){return new F(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next((s=>s?F.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new F(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((f=>{o[u]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new F(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function lR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Qs(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class oc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}oc.ue=-1;/**
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
 */const Mu=-1;function ho(t){return t==null}function wa(t){return t===0&&1/t==-1/0}function uR(t){return typeof t=="number"&&Number.isInteger(t)&&!wa(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */const E_="";function hR(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Zd(e)),e=fR(t.get(n),e);return Zd(e)}function fR(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case E_:n+="";break;default:n+=i}}return n}function Zd(t){return t+E_+""}/**
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
 */function ep(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function T_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class je{constructor(e,n){this.comparator=e,this.root=n||at.EMPTY}insert(e,n){return new je(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,at.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,at.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Bo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Bo(this.root,e,this.comparator,!1)}getReverseIterator(){return new Bo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Bo(this.root,e,this.comparator,!0)}}class Bo{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class at{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??at.RED,this.left=s??at.EMPTY,this.right=i??at.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new at(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return at.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return at.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,at.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,at.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw se(27949);return e+(this.isRed()?0:1)}}at.EMPTY=null,at.RED=!0,at.BLACK=!1;at.EMPTY=new class{constructor(){this.size=0}get key(){throw se(57766)}get value(){throw se(16141)}get color(){throw se(16727)}get left(){throw se(29726)}get right(){throw se(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new at(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class tt{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new tp(this.data.getIterator())}getIteratorFrom(e){return new tp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof tt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new tt(this.comparator);return n.data=e,n}}class tp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.fields=e,e.sort(lt.comparator)}static empty(){return new Ht([])}unionWith(e){let n=new tt(lt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Ht(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Fs(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class w_ extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new w_("Invalid base64 string: "+i):i}})(e);return new ht(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const dR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(t){if(Ie(!!t,39018),typeof t=="string"){let e=0;const n=dR.exec(t);if(Ie(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(t.seconds),nanos:We(t.nanos)}}function We(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function kr(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I_="server_timestamp",A_="__type__",b_="__previous_value__",R_="__local_write_time__";function Lu(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[A_])===null||n===void 0?void 0:n.stringValue)===I_}function ac(t){const e=t.mapValue.fields[b_];return Lu(e)?ac(e):e}function Ki(t){const e=Cr(t.mapValue.fields[R_].timestampValue);return new ve(e.seconds,e.nanos)}/**
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
 */class pR{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const Ia="(default)";class Qi{constructor(e,n){this.projectId=e,this.database=n||Ia}static empty(){return new Qi("","")}get isDefaultDatabase(){return this.database===Ia}isEqual(e){return e instanceof Qi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="__type__",mR="__max__",$o={mapValue:{}},P_="__vector__",Aa="value";function Nr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Lu(t)?4:_R(t)?9007199254740991:gR(t)?10:11:se(28295,{value:t})}function Cn(t,e){if(t===e)return!0;const n=Nr(t);if(n!==Nr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ki(t).isEqual(Ki(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Cr(s.timestampValue),c=Cr(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return kr(s.bytesValue).isEqual(kr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return We(s.geoPointValue.latitude)===We(i.geoPointValue.latitude)&&We(s.geoPointValue.longitude)===We(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return We(s.integerValue)===We(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=We(s.doubleValue),c=We(i.doubleValue);return o===c?wa(o)===wa(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return Fs(t.arrayValue.values||[],e.arrayValue.values||[],Cn);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(ep(o)!==ep(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!Cn(o[l],c[l])))return!1;return!0})(t,e);default:return se(52216,{left:t})}}function Ji(t,e){return(t.values||[]).find((n=>Cn(n,e)))!==void 0}function Us(t,e){if(t===e)return 0;const n=Nr(t),r=Nr(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=We(i.integerValue||i.doubleValue),l=We(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return np(t.timestampValue,e.timestampValue);case 4:return np(Ki(t),Ki(e));case 5:return Ll(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=kr(i),l=kr(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=ge(c[u],l[u]);if(f!==0)return f}return ge(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=ge(We(i.latitude),We(o.latitude));return c!==0?c:ge(We(i.longitude),We(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return rp(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var c,l,u,f;const p=i.fields||{},m=o.fields||{},_=(c=p[Aa])===null||c===void 0?void 0:c.arrayValue,C=(l=m[Aa])===null||l===void 0?void 0:l.arrayValue,k=ge(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((f=C==null?void 0:C.values)===null||f===void 0?void 0:f.length)||0);return k!==0?k:rp(_,C)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===$o.mapValue&&o===$o.mapValue)return 0;if(i===$o.mapValue)return 1;if(o===$o.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let p=0;p<l.length&&p<f.length;++p){const m=Ll(l[p],f[p]);if(m!==0)return m;const _=Us(c[l[p]],u[f[p]]);if(_!==0)return _}return ge(l.length,f.length)})(t.mapValue,e.mapValue);default:throw se(23264,{le:n})}}function np(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Cr(t),r=Cr(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function rp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Us(n[s],r[s]);if(i)return i}return ge(n.length,r.length)}function js(t){return Fl(t)}function Fl(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Cr(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return kr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return re.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=Fl(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${Fl(n.fields[o])}`;return s+"}"})(t.mapValue):se(61005,{value:t})}function ea(t){switch(Nr(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=ac(t);return e?16+ea(e):16;case 5:return 2*t.stringValue.length;case 6:return kr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+ea(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Lr(r.fields,((i,o)=>{s+=i.length+ea(o)})),s})(t.mapValue);default:throw se(13486,{value:t})}}function sp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Ul(t){return!!t&&"integerValue"in t}function Fu(t){return!!t&&"arrayValue"in t}function ip(t){return!!t&&"nullValue"in t}function op(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ta(t){return!!t&&"mapValue"in t}function gR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[S_])===null||n===void 0?void 0:n.stringValue)===P_}function Oi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Lr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Oi(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Oi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function _R(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===mR}/**
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
 */class Pt{constructor(e){this.value=e}static empty(){return new Pt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ta(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Oi(n)}setAll(e){let n=lt.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Oi(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());ta(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];ta(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Lr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Pt(Oi(this.value))}}function C_(t){const e=[];return Lr(t.fields,((n,r)=>{const s=new lt([n]);if(ta(r)){const i=C_(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Ht(e)}/**
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
 */class rt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new rt(e,0,ce.min(),ce.min(),ce.min(),Pt.empty(),0)}static newFoundDocument(e,n,r,s){return new rt(e,1,n,ce.min(),r,s,0)}static newNoDocument(e,n){return new rt(e,2,n,ce.min(),ce.min(),Pt.empty(),0)}static newUnknownDocument(e,n){return new rt(e,3,n,ce.min(),ce.min(),Pt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ce.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ce.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof rt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new rt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ba{constructor(e,n){this.position=e,this.inclusive=n}}function ap(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=re.comparator(re.fromName(o.referenceValue),n.key):r=Us(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function cp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Yi{constructor(e,n="asc"){this.field=e,this.dir=n}}function yR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class k_{}class Ye extends k_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new ER(e,n,r):n==="array-contains"?new IR(e,r):n==="in"?new AR(e,r):n==="not-in"?new bR(e,r):n==="array-contains-any"?new RR(e,r):new Ye(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new TR(e,r):new wR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Us(n,this.value)):n!==null&&Nr(this.value)===Nr(n)&&this.matchesComparison(Us(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class hn extends k_{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new hn(e,n)}matches(e){return N_(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function N_(t){return t.op==="and"}function V_(t){return vR(t)&&N_(t)}function vR(t){for(const e of t.filters)if(e instanceof hn)return!1;return!0}function jl(t){if(t instanceof Ye)return t.field.canonicalString()+t.op.toString()+js(t.value);if(V_(t))return t.filters.map((e=>jl(e))).join(",");{const e=t.filters.map((n=>jl(n))).join(",");return`${t.op}(${e})`}}function D_(t,e){return t instanceof Ye?(function(r,s){return s instanceof Ye&&r.op===s.op&&r.field.isEqual(s.field)&&Cn(r.value,s.value)})(t,e):t instanceof hn?(function(r,s){return s instanceof hn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&D_(o,s.filters[c])),!0):!1})(t,e):void se(19439)}function O_(t){return t instanceof Ye?(function(n){return`${n.field.canonicalString()} ${n.op} ${js(n.value)}`})(t):t instanceof hn?(function(n){return n.op.toString()+" {"+n.getFilters().map(O_).join(" ,")+"}"})(t):"Filter"}class ER extends Ye{constructor(e,n,r){super(e,n,r),this.key=re.fromName(r.referenceValue)}matches(e){const n=re.comparator(e.key,this.key);return this.matchesComparison(n)}}class TR extends Ye{constructor(e,n){super(e,"in",n),this.keys=x_("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class wR extends Ye{constructor(e,n){super(e,"not-in",n),this.keys=x_("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function x_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>re.fromName(r.referenceValue)))}class IR extends Ye{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Fu(n)&&Ji(n.arrayValue,this.value)}}class AR extends Ye{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ji(this.value.arrayValue,n)}}class bR extends Ye{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ji(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!Ji(this.value.arrayValue,n)}}class RR extends Ye{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Fu(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>Ji(this.value.arrayValue,r)))}}/**
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
 */class SR{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Pe=null}}function lp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new SR(t,e,n,r,s,i,o)}function Uu(t){const e=he(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>jl(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),ho(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>js(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>js(r))).join(",")),e.Pe=n}return e.Pe}function ju(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!yR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!D_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cp(t.startAt,e.startAt)&&cp(t.endAt,e.endAt)}function Bl(t){return re.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Js{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function PR(t,e,n,r,s,i,o,c){return new Js(t,e,n,r,s,i,o,c)}function cc(t){return new Js(t)}function up(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function M_(t){return t.collectionGroup!==null}function xi(t){const e=he(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new tt(lt.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Yi(i,r))})),n.has(lt.keyField().canonicalString())||e.Te.push(new Yi(lt.keyField(),r))}return e.Te}function bn(t){const e=he(t);return e.Ie||(e.Ie=CR(e,xi(t))),e.Ie}function CR(t,e){if(t.limitType==="F")return lp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Yi(s.field,i)}));const n=t.endAt?new ba(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ba(t.startAt.position,t.startAt.inclusive):null;return lp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function $l(t,e){const n=t.filters.concat([e]);return new Js(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Ra(t,e,n){return new Js(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function lc(t,e){return ju(bn(t),bn(e))&&t.limitType===e.limitType}function L_(t){return`${Uu(bn(t))}|lt:${t.limitType}`}function ys(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>O_(s))).join(", ")}]`),ho(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>js(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>js(s))).join(",")),`Target(${r})`})(bn(t))}; limitType=${t.limitType})`}function uc(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):re.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of xi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=ap(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,xi(r),s)||r.endAt&&!(function(o,c,l){const u=ap(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,xi(r),s))})(t,e)}function kR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function F_(t){return(e,n)=>{let r=!1;for(const s of xi(t)){const i=NR(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function NR(t,e,n){const r=t.field.isKeyField()?re.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Us(l,u):se(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return se(19790,{direction:t.dir})}}/**
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
 */class as{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Lr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return T_(this.inner)}size(){return this.innerSize}}/**
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
 */const VR=new je(re.comparator);function Xn(){return VR}const U_=new je(re.comparator);function Ti(...t){let e=U_;for(const n of t)e=e.insert(n.key,n);return e}function j_(t){let e=U_;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function Kr(){return Mi()}function B_(){return Mi()}function Mi(){return new as((t=>t.toString()),((t,e)=>t.isEqual(e)))}const DR=new je(re.comparator),OR=new tt(re.comparator);function Ee(...t){let e=OR;for(const n of t)e=e.add(n);return e}const xR=new tt(ge);function MR(){return xR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bu(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:wa(e)?"-0":e}}function $_(t){return{integerValue:""+t}}function q_(t,e){return uR(e)?$_(e):Bu(t,e)}/**
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
 */class hc{constructor(){this._=void 0}}function LR(t,e,n){return t instanceof Sa?(function(s,i){const o={fields:{[A_]:{stringValue:I_},[R_]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Lu(i)&&(i=ac(i)),i&&(o.fields[b_]=i),{mapValue:o}})(n,e):t instanceof Xi?G_(t,e):t instanceof Zi?W_(t,e):(function(s,i){const o=H_(s,i),c=hp(o)+hp(s.Ee);return Ul(o)&&Ul(s.Ee)?$_(c):Bu(s.serializer,c)})(t,e)}function FR(t,e,n){return t instanceof Xi?G_(t,e):t instanceof Zi?W_(t,e):n}function H_(t,e){return t instanceof eo?(function(r){return Ul(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Sa extends hc{}class Xi extends hc{constructor(e){super(),this.elements=e}}function G_(t,e){const n=z_(e);for(const r of t.elements)n.some((s=>Cn(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Zi extends hc{constructor(e){super(),this.elements=e}}function W_(t,e){let n=z_(e);for(const r of t.elements)n=n.filter((s=>!Cn(s,r)));return{arrayValue:{values:n}}}class eo extends hc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function hp(t){return We(t.integerValue||t.doubleValue)}function z_(t){return Fu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class UR{constructor(e,n){this.field=e,this.transform=n}}function jR(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof Xi&&s instanceof Xi||r instanceof Zi&&s instanceof Zi?Fs(r.elements,s.elements,Cn):r instanceof eo&&s instanceof eo?Cn(r.Ee,s.Ee):r instanceof Sa&&s instanceof Sa})(t.transform,e.transform)}class BR{constructor(e,n){this.version=e,this.transformResults=n}}class vt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new vt}static exists(e){return new vt(void 0,e)}static updateTime(e){return new vt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function na(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class fc{}function K_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new dc(t.key,vt.none()):new fo(t.key,t.data,vt.none());{const n=t.data,r=Pt.empty();let s=new tt(lt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Fr(t.key,r,new Ht(s.toArray()),vt.none())}}function $R(t,e,n){t instanceof fo?(function(s,i,o){const c=s.value.clone(),l=dp(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof Fr?(function(s,i,o){if(!na(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=dp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Q_(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Li(t,e,n,r){return t instanceof fo?(function(i,o,c,l){if(!na(i.precondition,o))return c;const u=i.value.clone(),f=pp(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof Fr?(function(i,o,c,l){if(!na(i.precondition,o))return c;const u=pp(i.fieldTransforms,l,o),f=o.data;return f.setAll(Q_(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((p=>p.field)))})(t,e,n,r):(function(i,o,c){return na(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function qR(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=H_(r.transform,s||null);i!=null&&(n===null&&(n=Pt.empty()),n.set(r.field,i))}return n||null}function fp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Fs(r,s,((i,o)=>jR(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class fo extends fc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Fr extends fc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Q_(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function dp(t,e,n){const r=new Map;Ie(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,FR(o,c,n[s]))}return r}function pp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,LR(i,o,e))}return r}class dc extends fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class J_ extends fc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class HR{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&$R(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Li(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Li(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=B_();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=K_(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ce.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),Ee())}isEqual(e){return this.batchId===e.batchId&&Fs(this.mutations,e.mutations,((n,r)=>fp(n,r)))&&Fs(this.baseMutations,e.baseMutations,((n,r)=>fp(n,r)))}}class $u{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ie(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return DR})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new $u(e,n,r,s)}}/**
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
 */class GR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class WR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Qe,we;function Y_(t){switch(t){case D.OK:return se(64938);case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0;default:return se(15467,{code:t})}}function X_(t){if(t===void 0)return Yn("GRPC error has no .code"),D.UNKNOWN;switch(t){case Qe.OK:return D.OK;case Qe.CANCELLED:return D.CANCELLED;case Qe.UNKNOWN:return D.UNKNOWN;case Qe.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Qe.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Qe.INTERNAL:return D.INTERNAL;case Qe.UNAVAILABLE:return D.UNAVAILABLE;case Qe.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Qe.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Qe.NOT_FOUND:return D.NOT_FOUND;case Qe.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Qe.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Qe.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Qe.ABORTED:return D.ABORTED;case Qe.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Qe.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Qe.DATA_LOSS:return D.DATA_LOSS;default:return se(39323,{code:t})}}(we=Qe||(Qe={}))[we.OK=0]="OK",we[we.CANCELLED=1]="CANCELLED",we[we.UNKNOWN=2]="UNKNOWN",we[we.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",we[we.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",we[we.NOT_FOUND=5]="NOT_FOUND",we[we.ALREADY_EXISTS=6]="ALREADY_EXISTS",we[we.PERMISSION_DENIED=7]="PERMISSION_DENIED",we[we.UNAUTHENTICATED=16]="UNAUTHENTICATED",we[we.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",we[we.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",we[we.ABORTED=10]="ABORTED",we[we.OUT_OF_RANGE=11]="OUT_OF_RANGE",we[we.UNIMPLEMENTED=12]="UNIMPLEMENTED",we[we.INTERNAL=13]="INTERNAL",we[we.UNAVAILABLE=14]="UNAVAILABLE",we[we.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const zR=new Er([4294967295,4294967295],0);function mp(t){const e=__().encode(t),n=new l_;return n.update(e),new Uint8Array(n.digest())}function gp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Er([n,r],0),new Er([s,i],0)]}class qu{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new wi(`Invalid padding: ${n}`);if(r<0)throw new wi(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new wi(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new wi(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Er.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(Er.fromNumber(r)));return s.compare(zR)===1&&(s=new Er([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=mp(e),[r,s]=gp(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new qu(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.fe===0)return;const n=mp(e),[r,s]=gp(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class wi extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class pc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,po.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new pc(ce.min(),s,new je(ge),Xn(),Ee())}}class po{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new po(r,n,Ee(),Ee(),Ee())}}/**
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
 */class ra{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class Z_{constructor(e,n){this.targetId=e,this.De=n}}class ey{constructor(e,n,r=ht.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class _p{constructor(){this.ve=0,this.Ce=yp(),this.Fe=ht.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Ee(),n=Ee(),r=Ee();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:se(38017,{changeType:i})}})),new po(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=yp()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Ie(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class KR{constructor(e){this.We=e,this.Ge=new Map,this.ze=Xn(),this.je=qo(),this.Je=qo(),this.He=new je(ge)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:se(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(Bl(i))if(r===0){const o=new re(i.path);this.Xe(n,o,rt.newNoDocument(o,ce.min()))}else Ie(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const c=this._t(e),l=c?this.ut(c,e,o):1;if(l!==0){this.rt(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=kr(r).toUint8Array()}catch(l){if(l instanceof w_)return Sr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new qu(o,s,i)}catch(l){return Sr(l instanceof wi?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const c=this.st(o);if(c){if(i.current&&Bl(c.target)){const l=new re(c.target.path);this.Tt(l).has(o)||this.It(o,l)||this.Xe(o,l,rt.newNoDocument(l,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let r=Ee();this.Je.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.st(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new pc(e,n,this.He,this.ze,r);return this.ze=Xn(),this.je=qo(),this.Je=qo(),this.He=new je(ge),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new _p,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new tt(ge),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new tt(ge),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||Y("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new _p),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function qo(){return new je(re.comparator)}function yp(){return new je(re.comparator)}const QR={asc:"ASCENDING",desc:"DESCENDING"},JR={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},YR={and:"AND",or:"OR"};class XR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ql(t,e){return t.useProto3Json||ho(e)?e:{value:e}}function Pa(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function ty(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function ZR(t,e){return Pa(t,e.toTimestamp())}function Wt(t){return Ie(!!t,49232),ce.fromTimestamp((function(n){const r=Cr(n);return new ve(r.seconds,r.nanos)})(t))}function Hu(t,e){return Hl(t,e).canonicalString()}function Hl(t,e){const n=(function(s){return new ke(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function ny(t){const e=ke.fromString(t);return Ie(cy(e),10190,{key:e.toString()}),e}function Ca(t,e){return Hu(t.databaseId,e.path)}function Fi(t,e){const n=ny(e);if(n.get(1)!==t.databaseId.projectId)throw new z(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new re(sy(n))}function ry(t,e){return Hu(t.databaseId,e)}function eS(t){const e=ny(t);return e.length===4?ke.emptyPath():sy(e)}function Gl(t){return new ke(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function sy(t){return Ie(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function vp(t,e,n){return{name:Ca(t,e),fields:n.value.mapValue.fields}}function tS(t,e){return"found"in e?(function(r,s){Ie(!!s.found,43571),s.found.name,s.found.updateTime;const i=Fi(r,s.found.name),o=Wt(s.found.updateTime),c=s.found.createTime?Wt(s.found.createTime):ce.min(),l=new Pt({mapValue:{fields:s.found.fields}});return rt.newFoundDocument(i,o,c,l)})(t,e):"missing"in e?(function(r,s){Ie(!!s.missing,3894),Ie(!!s.readTime,22933);const i=Fi(r,s.missing),o=Wt(s.readTime);return rt.newNoDocument(i,o)})(t,e):se(7234,{result:e})}function nS(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:se(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(Ie(f===void 0||typeof f=="string",58123),ht.fromBase64String(f||"")):(Ie(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),ht.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?D.UNKNOWN:X_(u.code);return new z(f,u.message||"")})(o);n=new ey(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Fi(t,r.document.name),i=Wt(r.document.updateTime),o=r.document.createTime?Wt(r.document.createTime):ce.min(),c=new Pt({mapValue:{fields:r.document.fields}}),l=rt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new ra(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Fi(t,r.document),i=r.readTime?Wt(r.readTime):ce.min(),o=rt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new ra([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Fi(t,r.document),i=r.removedTargetIds||[];n=new ra([],i,s,null)}else{if(!("filter"in e))return se(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new WR(s,i),c=r.targetId;n=new Z_(c,o)}}return n}function iy(t,e){let n;if(e instanceof fo)n={update:vp(t,e.key,e.value)};else if(e instanceof dc)n={delete:Ca(t,e.key)};else if(e instanceof Fr)n={update:vp(t,e.key,e.data),updateMask:hS(e.fieldMask)};else{if(!(e instanceof J_))return se(16599,{Rt:e.type});n={verify:Ca(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof Sa)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof Xi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Zi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof eo)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw se(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:ZR(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:se(27497)})(t,e.precondition)),n}function rS(t,e){return t&&t.length>0?(Ie(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?Wt(s.updateTime):Wt(i);return o.isEqual(ce.min())&&(o=Wt(i)),new BR(o,s.transformResults||[])})(n,e)))):[]}function sS(t,e){return{documents:[ry(t,e.path)]}}function iS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ry(t,s);const i=(function(u){if(u.length!==0)return ay(hn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(m){return{field:vs(m.field),direction:cS(m.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=ql(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Vt:n,parent:s}}function oS(t){let e=eS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ie(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(p){const m=oy(p);return m instanceof hn&&V_(m)?m.getFilters():[m]})(n.where));let o=[];n.orderBy&&(o=(function(p){return p.map((m=>(function(C){return new Yi(Es(C.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(C.direction))})(m)))})(n.orderBy));let c=null;n.limit&&(c=(function(p){let m;return m=typeof p=="object"?p.value:p,ho(m)?null:m})(n.limit));let l=null;n.startAt&&(l=(function(p){const m=!!p.before,_=p.values||[];return new ba(_,m)})(n.startAt));let u=null;return n.endAt&&(u=(function(p){const m=!p.before,_=p.values||[];return new ba(_,m)})(n.endAt)),PR(e,s,o,i,c,"F",l,u)}function aS(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function oy(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Es(n.unaryFilter.field);return Ye.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Es(n.unaryFilter.field);return Ye.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Es(n.unaryFilter.field);return Ye.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Es(n.unaryFilter.field);return Ye.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return se(61313);default:return se(60726)}})(t):t.fieldFilter!==void 0?(function(n){return Ye.create(Es(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return se(58110);default:return se(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return hn.create(n.compositeFilter.filters.map((r=>oy(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return se(1026)}})(n.compositeFilter.op))})(t):se(30097,{filter:t})}function cS(t){return QR[t]}function lS(t){return JR[t]}function uS(t){return YR[t]}function vs(t){return{fieldPath:t.canonicalString()}}function Es(t){return lt.fromServerFormat(t.fieldPath)}function ay(t){return t instanceof Ye?(function(n){if(n.op==="=="){if(op(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NAN"}};if(ip(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(op(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NOT_NAN"}};if(ip(n.value))return{unaryFilter:{field:vs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:vs(n.field),op:lS(n.op),value:n.value}}})(t):t instanceof hn?(function(n){const r=n.getFilters().map((s=>ay(s)));return r.length===1?r[0]:{compositeFilter:{op:uS(n.op),filters:r}}})(t):se(54877,{filter:t})}function hS(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function cy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class _r{constructor(e,n,r,s,i=ce.min(),o=ce.min(),c=ht.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new _r(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new _r(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class fS{constructor(e){this.gt=e}}function dS(t){const e=oS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Ra(e,e.limit,"L"):e}/**
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
 */class pS{constructor(){this.Dn=new mS}addToCollectionParentIndex(e,n){return this.Dn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Pr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Pr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class mS{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new tt(ke.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new tt(ke.comparator)).toArray()}}/**
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
 */const Ep={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ly=41943040;class Vt{static withCacheSize(e){return new Vt(e,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
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
 */Vt.DEFAULT_COLLECTION_PERCENTILE=10,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Vt.DEFAULT=new Vt(ly,Vt.DEFAULT_COLLECTION_PERCENTILE,Vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Vt.DISABLED=new Vt(-1,0,0);/**
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
 */class Bs{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Bs(0)}static ur(){return new Bs(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp="LruGarbageCollector",gS=1048576;function wp([t,e],[n,r]){const s=ge(t,n);return s===0?ge(e,r):s}class _S{constructor(e){this.Tr=e,this.buffer=new tt(wp),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();wp(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class yS{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){Y(Tp,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Qs(n)?Y(Tp,"Ignoring IndexedDB error during garbage collection: ",n):await Ks(n)}await this.Rr(3e5)}))}}class vS{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return F.resolve(oc.ue);const r=new _S(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(Y("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(Ep)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(Y("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Ep):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((p=>(p>this.params.maximumSequenceNumbersToCollect?(Y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${p}`),s=this.params.maximumSequenceNumbersToCollect):s=p,o=Date.now(),this.nthSequenceNumber(e,s)))).next((p=>(r=p,c=Date.now(),this.removeTargets(e,r,n)))).next((p=>(i=p,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((p=>(u=Date.now(),_s()<=ye.DEBUG&&Y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${p} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:p}))))}}function ES(t,e){return new vS(t,e)}/**
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
 */class TS{constructor(){this.changes=new as((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,rt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class wS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class IS{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Li(r.mutation,s,Ht.empty(),ve.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,Ee()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=Ee()){const s=Kr();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=Ti();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=Kr();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,Ee())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=Xn();const o=Mi(),c=(function(){return Mi()})();return n.forEach(((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof Fr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Li(f.mutation,u,f.mutation.getFieldMask(),ve.now())):o.set(u.key,Ht.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>{var p;return c.set(u,new wS(f,(p=o.get(u))!==null&&p!==void 0?p:null))})),c)))}recalculateAndSaveOverlays(e,n){const r=Mi();let s=new je(((o,c)=>o-c)),i=Ee();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Ht.empty();f=c.applyToLocalView(u,f),r.set(l,f);const p=(s.get(c.batchId)||Ee()).add(l);s=s.insert(c.batchId,p)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,p=B_();f.forEach((m=>{if(!i.has(m)){const _=K_(n.get(m),r.get(m));_!==null&&p.set(m,_),i=i.add(m)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,p))}return F.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return re.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):M_(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(Kr());let c=zi,l=i;return o.next((u=>F.forEach(u,((f,p)=>(c<p.largestBatchId&&(c=p.largestBatchId),i.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next((m=>{l=l.insert(f,m)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,Ee()))).next((f=>({batchId:c,changes:j_(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new re(n)).next((r=>{let s=Ti();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ti();return this.indexManager.getCollectionParents(e,i).next((c=>F.forEach(c,(l=>{const u=(function(p,m){return new Js(m,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((p,m)=>{o=o.insert(p,m)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,rt.newInvalidDocument(f)))}));let c=Ti();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&Li(f.mutation,u,Ht.empty(),ve.now()),uc(n,u)&&(c=c.insert(l,u))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AS{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return F.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Wt(s.createTime)}})(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:dS(s.bundledQuery),readTime:Wt(s.readTime)}})(n)),F.resolve()}}/**
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
 */class bS{constructor(){this.overlays=new je(re.comparator),this.kr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Kr();return F.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Kr(),i=n.length+1,o=new re(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new je(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=Kr(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=Kr(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return F.resolve(c)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new GR(n,r));let i=this.kr.get(n);i===void 0&&(i=Ee(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class RS{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
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
 */class Gu{constructor(){this.qr=new tt(nt.Qr),this.$r=new tt(nt.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new nt(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new nt(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new re(new ke([])),r=new nt(n,e),s=new nt(n,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new re(new ke([])),r=new nt(n,e),s=new nt(n,e+1);let i=Ee();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new nt(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return re.comparator(e.key,n.key)||ge(e.Hr,n.Hr)}static Ur(e,n){return ge(e.Hr,n.Hr)||re.comparator(e.key,n.key)}}/**
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
 */class SS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new tt(nt.Qr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new HR(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Yr=this.Yr.add(new nt(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?Mu:this.er-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new nt(n,0),s=new nt(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const c=this.Zr(o.Hr);i.push(c)})),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new tt(ge);return n.forEach((s=>{const i=new nt(s,0),o=new nt(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(c=>{r=r.add(c.Hr)}))})),F.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;re.isDocumentKey(i)||(i=i.child(""));const o=new nt(new re(i),0);let c=new tt(ge);return this.Yr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Hr)),!0)}),o),F.resolve(this.ei(c))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){Ie(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return F.forEach(n.mutations,(s=>{const i=new nt(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new nt(n,0),s=this.Yr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class PS{constructor(e){this.ni=e,this.docs=(function(){return new je(re.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():rt.newInvalidDocument(n))}getEntries(e,n){let r=Xn();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():rt.newInvalidDocument(s))})),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Xn();const o=n.path,c=new re(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||oR(iR(f),r)<=0||(s.has(f.key)||uc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){se(9500)}ri(e,n){return F.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new CS(this)}getSize(e){return F.resolve(this.size)}}class CS extends TS{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),F.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
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
 */class kS{constructor(e){this.persistence=e,this.ii=new as((n=>Uu(n)),ju),this.lastRemoteSnapshotVersion=ce.min(),this.highestTargetId=0,this.si=0,this.oi=new Gu,this.targetCount=0,this._i=Bs.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),F.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new Bs(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.hr(n),F.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),F.waitFor(i).next((()=>s))}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.oi.containsKey(n))}}/**
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
 */class uy{constructor(e,n){this.ai={},this.overlays={},this.ui=new oc(0),this.ci=!1,this.ci=!0,this.li=new RS,this.referenceDelegate=e(this),this.hi=new kS(this),this.indexManager=new pS,this.remoteDocumentCache=(function(s){return new PS(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new fS(n),this.Ti=new AS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new SS(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){Y("MemoryPersistence","Starting transaction:",e);const s=new NS(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return F.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class NS extends cR{constructor(e){super(),this.currentSequenceNumber=e}}class Wu{constructor(e){this.persistence=e,this.Ai=new Gu,this.Ri=null}static Vi(e){return new Wu(e)}get mi(){if(this.Ri)return this.Ri;throw se(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.mi,(r=>{const s=re.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,ce.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return F.or([()=>F.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class ka{constructor(e,n){this.persistence=e,this.gi=new as((r=>hR(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=ES(this,n)}static Vi(e,n){return new ka(e,n)}Ii(){}di(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return F.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?F.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,n).next((c=>{c||(r++,i.removeEntry(o,ce.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),F.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=ea(e.data.value)),n}Sr(e,n,r){return F.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class zu{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=Ee(),s=Ee();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new zu(e,n.fromCache,r,s)}}/**
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
 */class VS{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class DS{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return uI()?8:lR(Tt())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new VS;return this.ws(e,n,o).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,n,o,c.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(_s()<=ye.DEBUG&&Y("QueryEngine","SDK will not create cache indexes for query:",ys(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(_s()<=ye.DEBUG&&Y("QueryEngine","Query:",ys(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(_s()<=ye.DEBUG&&Y("QueryEngine","The SDK decides to create cache indexes for query:",ys(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,bn(n))):F.resolve())}ps(e,n){if(up(n))return F.resolve(null);let r=bn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Ra(n,null,"F"),r=bn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=Ee(...i);return this.gs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.bs(n,c);return this.Ds(n,u,o,l.readTime)?this.ps(e,Ra(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ys(e,n,r,s){return up(n)||s.isEqual(ce.min())?F.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?F.resolve(null):(_s()<=ye.DEBUG&&Y("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),ys(n)),this.vs(e,o,n,sR(s,zi)).next((c=>c)))}))}bs(e,n){let r=new tt(F_(e));return n.forEach(((s,i)=>{uc(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return _s()<=ye.DEBUG&&Y("QueryEngine","Using full collection scan to execute query:",ys(n)),this.gs.getDocumentsMatchingQuery(e,n,Pr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku="LocalStore",OS=3e8;class xS{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new je(ge),this.Ms=new as((i=>Uu(i)),ju),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IS(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function MS(t,e,n,r){return new xS(t,e,n,r)}async function hy(t,e){const n=he(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=Ee();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Bs:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function LS(t,e){const n=he(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const p=u.batch,m=p.keys();let _=F.resolve();return m.forEach((C=>{_=_.next((()=>f.getEntry(l,C))).next((k=>{const V=u.docVersions.get(C);Ie(V!==null,48541),k.version.compareTo(V)<0&&(p.applyToRemoteDocument(k,u),k.isValidDocument()&&(k.setReadTime(u.commitVersion),f.addEntry(k)))}))})),_.next((()=>c.mutationQueue.removeMutationBatch(l,p)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=Ee();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function fy(t){const e=he(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function FS(t,e){const n=he(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const c=[];e.targetChanges.forEach(((f,p)=>{const m=s.get(p);if(!m)return;c.push(n.hi.removeMatchingKeys(i,f.removedDocuments,p).next((()=>n.hi.addMatchingKeys(i,f.addedDocuments,p))));let _=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(p)!==null?_=_.withResumeToken(ht.EMPTY_BYTE_STRING,ce.min()).withLastLimboFreeSnapshotVersion(ce.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(p,_),(function(k,V,q){return k.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=OS?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0})(m,_,f)&&c.push(n.hi.updateTargetData(i,_))}));let l=Xn(),u=Ee();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(US(i,o,e.documentUpdates).next((f=>{l=f.Ls,u=f.ks}))),!r.isEqual(ce.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next((p=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return F.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Fs=s,i)))}function US(t,e,n){let r=Ee(),s=Ee();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=Xn();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ce.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):Y(Ku,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{Ls:o,ks:s}}))}function jS(t,e){const n=he(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Mu),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function BS(t,e){const n=he(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,F.resolve(s)):n.hi.allocateTargetId(r).next((o=>(s=new _r(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function Wl(t,e,n){const r=he(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!Qs(o))throw o;Y(Ku,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Ip(t,e,n){const r=he(t);let s=ce.min(),i=Ee();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const p=he(l),m=p.Ms.get(f);return m!==void 0?F.resolve(p.Fs.get(m)):p.hi.getTargetData(u,f)})(r,o,bn(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ce.min(),n?i:Ee()))).next((c=>($S(r,kR(e),c),{documents:c,qs:i})))))}function $S(t,e,n){let r=t.xs.get(e)||ce.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class Ap{constructor(){this.activeTargetIds=MR()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qS{constructor(){this.Fo=new Ap,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Ap,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class HS{xo(e){}shutdown(){}}/**
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
 */const bp="ConnectivityMonitor";class Rp{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){Y(bp,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){Y(bp,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ho=null;function zl(){return Ho===null?Ho=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ho++,"0x"+Ho.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al="RestConnection",GS={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class WS{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Ia?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=zl(),c=this.Go(e,n.toUriEncodedString());Y(al,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:u}=new URL(c),f=is(u);return this.jo(e,c,l,r,f).then((p=>(Y(al,`Received RPC '${e}' ${o}: `,p),p)),(p=>{throw Sr(al,`RPC '${e}' ${o} failed with error: `,p,"url: ",c,"request:",r),p}))}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+zs})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=GS[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
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
 */class zS{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const mt="WebChannelConnection";class KS extends WS{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=zl();return new Promise(((c,l)=>{const u=new u_;u.setWithCredentials(!0),u.listenOnce(h_.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Zo.NO_ERROR:const p=u.getResponseJson();Y(mt,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(p)),c(p);break;case Zo.TIMEOUT:Y(mt,`RPC '${e}' ${o} timed out`),l(new z(D.DEADLINE_EXCEEDED,"Request time out"));break;case Zo.HTTP_ERROR:const m=u.getStatus();if(Y(mt,`RPC '${e}' ${o} failed with status:`,m,"response text:",u.getResponseText()),m>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const C=_==null?void 0:_.error;if(C&&C.status&&C.message){const k=(function(q){const U=q.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(U)>=0?U:D.UNKNOWN})(C.status);l(new z(k,C.message))}else l(new z(D.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new z(D.UNAVAILABLE,"Connection failed."));break;default:se(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{Y(mt,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);Y(mt,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}P_(e,n,r){const s=zl(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=p_(),c=d_(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");Y(mt,`Creating RPC '${e}' stream ${s}: ${f}`,l);const p=o.createWebChannel(f,l);this.T_(p);let m=!1,_=!1;const C=new zS({Ho:V=>{_?Y(mt,`Not sending because RPC '${e}' stream ${s} is closed:`,V):(m||(Y(mt,`Opening RPC '${e}' stream ${s} transport.`),p.open(),m=!0),Y(mt,`RPC '${e}' stream ${s} sending:`,V),p.send(V))},Yo:()=>p.close()}),k=(V,q,U)=>{V.listen(q,(B=>{try{U(B)}catch(L){setTimeout((()=>{throw L}),0)}}))};return k(p,Ei.EventType.OPEN,(()=>{_||(Y(mt,`RPC '${e}' stream ${s} transport opened.`),C.s_())})),k(p,Ei.EventType.CLOSE,(()=>{_||(_=!0,Y(mt,`RPC '${e}' stream ${s} transport closed`),C.__(),this.I_(p))})),k(p,Ei.EventType.ERROR,(V=>{_||(_=!0,Sr(mt,`RPC '${e}' stream ${s} transport errored. Name:`,V.name,"Message:",V.message),C.__(new z(D.UNAVAILABLE,"The operation could not be completed")))})),k(p,Ei.EventType.MESSAGE,(V=>{var q;if(!_){const U=V.data[0];Ie(!!U,16349);const B=U,L=(B==null?void 0:B.error)||((q=B[0])===null||q===void 0?void 0:q.error);if(L){Y(mt,`RPC '${e}' stream ${s} received error:`,L);const Z=L.status;let fe=(function(E){const A=Qe[E];if(A!==void 0)return X_(A)})(Z),I=L.message;fe===void 0&&(fe=D.INTERNAL,I="Unknown error status: "+Z+" with message "+L.message),_=!0,C.__(new z(fe,I)),p.close()}else Y(mt,`RPC '${e}' stream ${s} received:`,U),C.a_(U)}})),k(c,f_.STAT_EVENT,(V=>{V.stat===Ml.PROXY?Y(mt,`RPC '${e}' stream ${s} detected buffering proxy`):V.stat===Ml.NOPROXY&&Y(mt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{C.o_()}),0),C}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function cl(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mc(t){return new XR(t,!0)}/**
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
 */class Qu{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&Y("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Sp="PersistentStream";class dy{constructor(e,n,r,s,i,o,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Qu(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Yn(n.toString()),Yn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new z(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return Y(Sp,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(Y(Sp,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class QS extends dy{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=nS(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ce.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ce.min():o.readTime?Wt(o.readTime):ce.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Gl(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=Bl(l)?{documents:sS(i,l)}:{query:iS(i,l).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=ty(i,o.resumeToken);const u=ql(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(ce.min())>0){c.readTime=Pa(i,o.snapshotVersion.toTimestamp());const u=ql(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=aS(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Gl(this.serializer),n.removeTarget=e,this.k_(n)}}class JS extends dy{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return Ie(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Ie(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Ie(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=rS(e.writeResults,e.commitTime),r=Wt(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Gl(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>iy(this.serializer,r)))};this.k_(n)}}/**
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
 */class YS{}class XS extends YS{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new z(D.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Hl(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(D.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Jo(e,Hl(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(D.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class ZS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
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
 */const ss="RemoteStore";class eP{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{cs(this)&&(Y(ss,"Restarting streams for network reachability change."),await(async function(l){const u=he(l);u.Ia.add(4),await mo(u),u.Aa.set("Unknown"),u.Ia.delete(4),await gc(u)})(this))}))})),this.Aa=new ZS(r,s)}}async function gc(t){if(cs(t))for(const e of t.da)await e(!0)}async function mo(t){for(const e of t.da)await e(!1)}function py(t,e){const n=he(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Zu(n)?Xu(n):Ys(n).x_()&&Yu(n,e))}function Ju(t,e){const n=he(t),r=Ys(n);n.Ta.delete(e),r.x_()&&my(n,e),n.Ta.size===0&&(r.x_()?r.B_():cs(n)&&n.Aa.set("Unknown"))}function Yu(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ce.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ys(t).H_(e)}function my(t,e){t.Ra.$e(e),Ys(t).Y_(e)}function Xu(t){t.Ra=new KR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),Ys(t).start(),t.Aa.aa()}function Zu(t){return cs(t)&&!Ys(t).M_()&&t.Ta.size>0}function cs(t){return he(t).Ia.size===0}function gy(t){t.Ra=void 0}async function tP(t){t.Aa.set("Online")}async function nP(t){t.Ta.forEach(((e,n)=>{Yu(t,e)}))}async function rP(t,e){gy(t),Zu(t)?(t.Aa.la(e),Xu(t)):t.Aa.set("Unknown")}async function sP(t,e,n){if(t.Aa.set("Online"),e instanceof ey&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ta.delete(c),s.Ra.removeTarget(c))})(t,e)}catch(r){Y(ss,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Na(t,r)}else if(e instanceof ra?t.Ra.Ye(e):e instanceof Z_?t.Ra.it(e):t.Ra.et(e),!n.isEqual(ce.min()))try{const r=await fy(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Ra.Pt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ta.get(u);f&&i.Ta.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=i.Ta.get(l);if(!f)return;i.Ta.set(l,f.withResumeToken(ht.EMPTY_BYTE_STRING,f.snapshotVersion)),my(i,l);const p=new _r(f.target,l,u,f.sequenceNumber);Yu(i,p)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){Y(ss,"Failed to raise snapshot:",r),await Na(t,r)}}async function Na(t,e,n){if(!Qs(e))throw e;t.Ia.add(1),await mo(t),t.Aa.set("Offline"),n||(n=()=>fy(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{Y(ss,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await gc(t)}))}function _y(t,e){return e().catch((n=>Na(t,n,e)))}async function _c(t){const e=he(t),n=Vr(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:Mu;for(;iP(e);)try{const s=await jS(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,oP(e,s)}catch(s){await Na(e,s)}yy(e)&&vy(e)}function iP(t){return cs(t)&&t.Pa.length<10}function oP(t,e){t.Pa.push(e);const n=Vr(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function yy(t){return cs(t)&&!Vr(t).M_()&&t.Pa.length>0}function vy(t){Vr(t).start()}async function aP(t){Vr(t).na()}async function cP(t){const e=Vr(t);for(const n of t.Pa)e.X_(n.mutations)}async function lP(t,e,n){const r=t.Pa.shift(),s=$u.from(r,e,n);await _y(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await _c(t)}async function uP(t,e){e&&Vr(t).Z_&&await(async function(r,s){if((function(o){return Y_(o)&&o!==D.ABORTED})(s.code)){const i=r.Pa.shift();Vr(r).N_(),await _y(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await _c(r)}})(t,e),yy(t)&&vy(t)}async function Pp(t,e){const n=he(t);n.asyncQueue.verifyOperationInProgress(),Y(ss,"RemoteStore received new credentials");const r=cs(n);n.Ia.add(3),await mo(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await gc(n)}async function hP(t,e){const n=he(t);e?(n.Ia.delete(2),await gc(n)):e||(n.Ia.add(2),await mo(n),n.Aa.set("Unknown"))}function Ys(t){return t.Va||(t.Va=(function(n,r,s){const i=he(n);return i.ia(),new QS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:tP.bind(null,t),e_:nP.bind(null,t),n_:rP.bind(null,t),J_:sP.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),Zu(t)?Xu(t):t.Aa.set("Unknown")):(await t.Va.stop(),gy(t))}))),t.Va}function Vr(t){return t.ma||(t.ma=(function(n,r,s){const i=he(n);return i.ia(),new JS(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:aP.bind(null,t),n_:uP.bind(null,t),ea:cP.bind(null,t),ta:lP.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await _c(t)):(await t.ma.stop(),t.Pa.length>0&&(Y(ss,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
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
 */class eh{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new An,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new eh(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function th(t,e){if(Yn("AsyncQueue",`${e}: ${t}`),Qs(t))return new z(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ns{static emptySet(e){return new Ns(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||re.comparator(n.key,r.key):(n,r)=>re.comparator(n.key,r.key),this.keyedMap=Ti(),this.sortedSet=new je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ns)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Ns;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Cp{constructor(){this.fa=new je(re.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):se(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class $s{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new $s(e,n,Ns.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&lc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class fP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class dP{constructor(){this.queries=kp(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=he(n),i=s.queries;s.queries=kp(),i.forEach(((o,c)=>{for(const l of c.wa)l.onError(r)}))})(this,new z(D.ABORTED,"Firestore shutting down"))}}function kp(){return new as((t=>L_(t)),lc)}async function nh(t,e){const n=he(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new fP,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=th(o,`Initialization of query '${ys(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&sh(n)}async function rh(t,e){const n=he(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function pP(t,e){const n=he(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.wa)c.Ca(s)&&(r=!0);o.ya=s}}r&&sh(n)}function mP(t,e,n){const r=he(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function sh(t){t.Da.forEach((e=>{e.next()}))}var Kl,Np;(Np=Kl||(Kl={})).Fa="default",Np.Cache="cache";class ih{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new $s(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=$s.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Kl.Cache}}/**
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
 */class Ey{constructor(e){this.key=e}}class Ty{constructor(e){this.key=e}}class gP{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Ee(),this.mutatedKeys=Ee(),this.Xa=F_(e),this.eu=new Ns(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new Cp,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,p)=>{const m=s.get(f),_=uc(this.query,p)?p:null,C=!!m&&this.mutatedKeys.has(m.key),k=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let V=!1;m&&_?m.data.isEqual(_.data)?C!==k&&(r.track({type:3,doc:_}),V=!0):this.iu(m,_)||(r.track({type:2,doc:_}),V=!0,(l&&this.Xa(_,l)>0||u&&this.Xa(_,u)<0)&&(c=!0)):!m&&_?(r.track({type:0,doc:_}),V=!0):m&&!_&&(r.track({type:1,doc:m}),V=!0,(l||u)&&(c=!0)),V&&(_?(o=o.add(_),i=k?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:c,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,p)=>(function(_,C){const k=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se(20277,{At:V})}};return k(_)-k(C)})(f.type,p.type)||this.Xa(f.doc,p.doc))),this.su(r),s=s!=null&&s;const c=n&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,u=l!==this.Ya;return this.Ya=l,o.length!==0||u?{snapshot:new $s(this.query,e.eu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Cp,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Ee(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new Ty(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new Ey(r))})),n}uu(e){this.Ha=e.qs,this.Za=Ee();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return $s.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const oh="SyncEngine";class _P{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class yP{constructor(e){this.key=e,this.lu=!1}}class vP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new as((c=>L_(c)),lc),this.Tu=new Map,this.Iu=new Set,this.du=new je(re.comparator),this.Eu=new Map,this.Au=new Gu,this.Ru={},this.Vu=new Map,this.mu=Bs.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function EP(t,e,n=!0){const r=Sy(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await wy(r,e,n,!0),s}async function TP(t,e){const n=Sy(t);await wy(n,e,!0,!1)}async function wy(t,e,n,r){const s=await BS(t.localStore,bn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await wP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&py(t.remoteStore,s),c}async function wP(t,e,n,r,s){t.gu=(p,m,_)=>(async function(k,V,q,U){let B=V.view.nu(q);B.Ds&&(B=await Ip(k.localStore,V.query,!1).then((({documents:I})=>V.view.nu(I,B))));const L=U&&U.targetChanges.get(V.targetId),Z=U&&U.targetMismatches.get(V.targetId)!=null,fe=V.view.applyChanges(B,k.isPrimaryClient,L,Z);return Dp(k,V.targetId,fe._u),fe.snapshot})(t,p,m,_);const i=await Ip(t.localStore,e,!0),o=new gP(e,i.qs),c=o.nu(i.documents),l=po.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);Dp(t,n,u._u);const f=new _P(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function IP(t,e,n){const r=he(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!lc(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Wl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Ju(r.remoteStore,s.targetId),Ql(r,s.targetId)})).catch(Ks)):(Ql(r,s.targetId),await Wl(r.localStore,s.targetId,!0))}async function AP(t,e){const n=he(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Ju(n.remoteStore,r.targetId))}async function bP(t,e,n){const r=VP(t);try{const s=await(function(o,c){const l=he(o),u=ve.now(),f=c.reduce(((_,C)=>_.add(C.key)),Ee());let p,m;return l.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let C=Xn(),k=Ee();return l.Os.getEntries(_,f).next((V=>{C=V,C.forEach(((q,U)=>{U.isValidDocument()||(k=k.add(q))}))})).next((()=>l.localDocuments.getOverlayedDocuments(_,C))).next((V=>{p=V;const q=[];for(const U of c){const B=qR(U,p.get(U.key).overlayedDocument);B!=null&&q.push(new Fr(U.key,B,C_(B.value.mapValue),vt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,q,c)})).next((V=>{m=V;const q=V.applyToLocalDocumentSet(p,k);return l.documentOverlayCache.saveOverlays(_,V.batchId,q)}))})).then((()=>({batchId:m.batchId,changes:j_(p)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Ru[o.currentUser.toKey()];u||(u=new je(ge)),u=u.insert(c,l),o.Ru[o.currentUser.toKey()]=u})(r,s.batchId,n),await go(r,s.changes),await _c(r.remoteStore)}catch(s){const i=th(s,"Failed to persist write");n.reject(i)}}async function Iy(t,e){const n=he(t);try{const r=await FS(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Eu.get(i);o&&(Ie(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?Ie(o.lu,14607):s.removedDocuments.size>0&&(Ie(o.lu,42227),o.lu=!1))})),await go(n,r,e)}catch(r){await Ks(r)}}function Vp(t,e,n){const r=he(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=he(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,p)=>{for(const m of p.wa)m.va(c)&&(u=!0)})),u&&sh(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function RP(t,e,n){const r=he(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new je(re.comparator);o=o.insert(i,rt.newNoDocument(i,ce.min()));const c=Ee().add(i),l=new pc(ce.min(),new Map,new je(ge),o,c);await Iy(r,l),r.du=r.du.remove(i),r.Eu.delete(e),ah(r)}else await Wl(r.localStore,e,!1).then((()=>Ql(r,e,n))).catch(Ks)}async function SP(t,e){const n=he(t),r=e.batch.batchId;try{const s=await LS(n.localStore,e);by(n,r,null),Ay(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await go(n,s)}catch(s){await Ks(s)}}async function PP(t,e,n){const r=he(t);try{const s=await(function(o,c){const l=he(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((p=>(Ie(p!==null,37113),f=p.keys(),l.mutationQueue.removeMutationBatch(u,p)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);by(r,e,n),Ay(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await go(r,s)}catch(s){await Ks(s)}}function Ay(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function by(t,e,n){const r=he(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Ql(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||Ry(t,r)}))}function Ry(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(Ju(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),ah(t))}function Dp(t,e,n){for(const r of n)r instanceof Ey?(t.Au.addReference(r.key,e),CP(t,r)):r instanceof Ty?(Y(oh,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||Ry(t,r.key)):se(19791,{yu:r})}function CP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(Y(oh,"New document in limbo: "+n),t.Iu.add(r),ah(t))}function ah(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new re(ke.fromString(e)),r=t.mu.next();t.Eu.set(r,new yP(n)),t.du=t.du.insert(n,r),py(t.remoteStore,new _r(bn(cc(n.path)),r,"TargetPurposeLimboResolution",oc.ue))}}async function go(t,e,n){const r=he(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,l)=>{o.push(r.gu(l,e,n).then((u=>{var f;if((u||n)&&r.isPrimaryClient){const p=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,p?"current":"not-current")}if(u){s.push(u);const p=zu.Es(l.targetId,u);i.push(p)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(l,u){const f=he(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(p=>F.forEach(u,(m=>F.forEach(m.Is,(_=>f.persistence.referenceDelegate.addReference(p,m.targetId,_))).next((()=>F.forEach(m.ds,(_=>f.persistence.referenceDelegate.removeReference(p,m.targetId,_)))))))))}catch(p){if(!Qs(p))throw p;Y(Ku,"Failed to update sequence numbers: "+p)}for(const p of u){const m=p.targetId;if(!p.fromCache){const _=f.Fs.get(m),C=_.snapshotVersion,k=_.withLastLimboFreeSnapshotVersion(C);f.Fs=f.Fs.insert(m,k)}}})(r.localStore,i))}async function kP(t,e){const n=he(t);if(!n.currentUser.isEqual(e)){Y(oh,"User change. New user:",e.toKey());const r=await hy(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((c=>{c.forEach((l=>{l.reject(new z(D.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await go(n,r.Bs)}}function NP(t,e){const n=he(t),r=n.Eu.get(e);if(r&&r.lu)return Ee().add(r.key);{let s=Ee();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const c=n.Pu.get(o);s=s.unionWith(c.view.tu)}return s}}function Sy(t){const e=he(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Iy.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=NP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=RP.bind(null,e),e.hu.J_=pP.bind(null,e.eventManager),e.hu.pu=mP.bind(null,e.eventManager),e}function VP(t){const e=he(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=SP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PP.bind(null,e),e}class Va{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=mc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return MS(this.persistence,new DS,e.initialUser,this.serializer)}Du(e){return new uy(Wu.Vi,this.serializer)}bu(e){return new qS}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Va.provider={build:()=>new Va};class DP extends Va{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){Ie(this.persistence.referenceDelegate instanceof ka,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new yS(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?Vt.withCacheSize(this.cacheSizeBytes):Vt.DEFAULT;return new uy((r=>ka.Vi(r,n)),this.serializer)}}class Jl{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Vp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=kP.bind(null,this.syncEngine),await hP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new dP})()}createDatastore(e){const n=mc(e.databaseInfo.databaseId),r=(function(i){return new KS(i)})(e.databaseInfo);return(function(i,o,c,l){return new XS(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new eP(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>Vp(this.syncEngine,n,0)),(function(){return Rp.C()?new Rp:new HS})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,f){const p=new vP(s,i,o,c,l,u);return f&&(p.fu=!0),p})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=he(s);Y(ss,"RemoteStore shutting down."),i.Ia.add(5),await mo(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Jl.provider={build:()=>new Jl};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ch{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):Yn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
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
 */class OP{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new z(D.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await(async function(s,i){const o=he(s),c={documents:i.map((p=>Ca(o.serializer,p)))},l=await o.Jo("BatchGetDocuments",o.serializer.databaseId,ke.emptyPath(),c,i.length),u=new Map;l.forEach((p=>{const m=tS(o.serializer,p);u.set(m.key.toString(),m)}));const f=[];return i.forEach((p=>{const m=u.get(p.toString());Ie(!!m,55234,{key:p}),f.push(m)})),f})(this.datastore,e);return n.forEach((r=>this.recordVersion(r))),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new dc(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((n=>{e.delete(n.key.toString())})),e.forEach(((n,r)=>{const s=re.fromPath(r);this.mutations.push(new J_(s,this.precondition(s)))})),await(async function(r,s){const i=he(r),o={writes:s.map((c=>iy(i.serializer,c)))};await i.Wo("Commit",i.serializer.databaseId,ke.emptyPath(),o)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw se(50498,{Wu:e.constructor.name});n=ce.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new z(D.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(ce.min())?vt.exists(!1):vt.updateTime(n):vt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(ce.min()))throw new z(D.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return vt.updateTime(n)}return vt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class xP{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.Gu=r.maxAttempts,this.F_=new Qu(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_((async()=>{const e=new OP(this.datastore),n=this.Ju(e);n&&n.then((r=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(r)})).catch((s=>{this.Hu(s)}))))})).catch((r=>{this.Hu(r)}))}))}Ju(e){try{const n=this.updateFunction(e);return!ho(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Hu(e){this.Gu>0&&this.Yu(e)?(this.Gu-=1,this.asyncQueue.enqueueAndForget((()=>(this.ju(),Promise.resolve())))):this.deferred.reject(e)}Yu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!Y_(n)}return!1}}/**
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
 */const Dr="FirestoreClient";class MP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=gt.UNAUTHENTICATED,this.clientId=xu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{Y(Dr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(Y(Dr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new An;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=th(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function ll(t,e){t.asyncQueue.verifyOperationInProgress(),Y(Dr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await hy(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Sr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{Y("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Sr("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function Op(t,e){t.asyncQueue.verifyOperationInProgress();const n=await LP(t);Y(Dr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>Pp(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>Pp(e.remoteStore,s))),t._onlineComponents=e}async function LP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Y(Dr,"Using user provided OfflineComponentProvider");try{await ll(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===D.FAILED_PRECONDITION||s.code===D.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Sr("Error using user provided cache. Falling back to memory cache: "+n),await ll(t,new Va)}}else Y(Dr,"Using default OfflineComponentProvider"),await ll(t,new DP(void 0));return t._offlineComponents}async function lh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Y(Dr,"Using user provided OnlineComponentProvider"),await Op(t,t._uninitializedComponentsProvider._online)):(Y(Dr,"Using default OnlineComponentProvider"),await Op(t,new Jl))),t._onlineComponents}function FP(t){return lh(t).then((e=>e.syncEngine))}function UP(t){return lh(t).then((e=>e.datastore))}async function Da(t){const e=await lh(t),n=e.eventManager;return n.onListen=EP.bind(null,e.syncEngine),n.onUnlisten=IP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=TP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=AP.bind(null,e.syncEngine),n}function jP(t,e,n={}){const r=new An;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new ch({next:m=>{f.Ou(),o.enqueueAndForget((()=>rh(i,p)));const _=m.docs.has(c);!_&&m.fromCache?u.reject(new z(D.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&m.fromCache&&l&&l.source==="server"?u.reject(new z(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new ih(cc(c.path),f,{includeMetadataChanges:!0,ka:!0});return nh(i,p)})(await Da(t),t.asyncQueue,e,n,r))),r.promise}function BP(t,e,n={}){const r=new An;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new ch({next:m=>{f.Ou(),o.enqueueAndForget((()=>rh(i,p))),m.fromCache&&l.source==="server"?u.reject(new z(D.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(m)},error:m=>u.reject(m)}),p=new ih(c,f,{includeMetadataChanges:!0,ka:!0});return nh(i,p)})(await Da(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function Py(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xp=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cy="firestore.googleapis.com",Mp=!0;class Lp{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Cy,this.ssl=Mp}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Mp;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ly;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<gS)throw new z(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}nR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Py((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(D.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class yc{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Lp({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Lp(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new zb;switch(r.type){case"firstParty":return new Yb(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=xp.get(n);r&&(Y("ComponentProvider","Removing Datastore"),xp.delete(n),r.terminate())})(this),Promise.resolve()}}function $P(t,e,n,r={}){var s;t=Gt(t,yc);const i=is(e),o=t._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i&&(Eu(`https://${l}`),Tu("Firestore",!0)),o.host!==Cy&&o.host!==l&&Sr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:l,ssl:i,emulatorOptions:r});if(!Zr(u,c)&&(t._setSettings(u),r.mockUserToken)){let f,p;if(typeof r.mockUserToken=="string")f=r.mockUserToken,p=gt.MOCK_USER;else{f=tI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new z(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new gt(m)}t._authCredentials=new Kb(new g_(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new rr(this.firestore,e,this._query)}}class He{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}toJSON(){return{type:He._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(uo(n,He._jsonSchema))return new He(e,r||null,new re(ke.fromString(n.referencePath)))}}He._jsonSchemaVersion="firestore/documentReference/1.0",He._jsonSchema={type:Ze("string",He._jsonSchemaVersion),referencePath:Ze("string")};class Tr extends rr{constructor(e,n,r){super(e,n,cc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new re(e))}withConverter(e){return new Tr(this.firestore,e,this._path)}}function qP(t,e,...n){if(t=xe(t),y_("collection","path",e),t instanceof yc){const r=ke.fromString(e,...n);return Jd(r),new Tr(t,null,r)}{if(!(t instanceof He||t instanceof Tr))throw new z(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Jd(r),new Tr(t.firestore,null,r)}}function uh(t,e,...n){if(t=xe(t),arguments.length===1&&(e=xu.newId()),y_("doc","path",e),t instanceof yc){const r=ke.fromString(e,...n);return Qd(r),new He(t,null,new re(r))}{if(!(t instanceof He||t instanceof Tr))throw new z(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ke.fromString(e,...n));return Qd(r),new He(t.firestore,t instanceof Tr?t.converter:null,new re(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp="AsyncQueue";class Up{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Qu(this,"async_queue_retry"),this.oc=()=>{const r=cl();r&&Y(Fp,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=cl();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=cl();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new An;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!Qs(e))throw e;Y(Fp,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,Yn("INTERNAL UNHANDLED ERROR: ",jp(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=eh.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&se(47125,{hc:jp(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function jp(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function Bp(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class Zn extends yc{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Up,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Up(e),this._firestoreClient=void 0,await e}}}function HP(t,e){const n=typeof t=="object"?t:Au(),r=typeof t=="string"?t:Ia,s=tc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Tg("firestore");i&&$P(s,...i)}return s}function _o(t){if(t._terminated)throw new z(D.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||GP(t),t._firestoreClient}function GP(t){var e,n,r;const s=t._freezeSettings(),i=(function(c,l,u,f){return new pR(c,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,Py(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new MP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bt(ht.fromBase64String(e))}catch(n){throw new z(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bt(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Bt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(uo(e,Bt._jsonSchema))return Bt.fromBase64String(e.bytes)}}Bt._jsonSchemaVersion="firestore/bytes/1.0",Bt._jsonSchema={type:Ze("string",Bt._jsonSchemaVersion),bytes:Ze("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yo{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e){this._methodName=e}}/**
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
 */class Rn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Rn._jsonSchemaVersion}}static fromJSON(e){if(uo(e,Rn._jsonSchema))return new Rn(e.latitude,e.longitude)}}Rn._jsonSchemaVersion="firestore/geoPoint/1.0",Rn._jsonSchema={type:Ze("string",Rn._jsonSchemaVersion),latitude:Ze("number"),longitude:Ze("number")};/**
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
 */class Sn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Sn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(uo(e,Sn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Sn(e.vectorValues);throw new z(D.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Sn._jsonSchemaVersion="firestore/vectorValue/1.0",Sn._jsonSchema={type:Ze("string",Sn._jsonSchemaVersion),vectorValues:Ze("object")};/**
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
 */const WP=/^__.*__$/;class zP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms):new fo(e,this.data,n,this.fieldTransforms)}}class ky{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Fr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ny(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se(40011,{Ec:t})}}class hh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new hh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Oa(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Ny(this.Ec)&&WP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class KP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||mc(e)}Dc(e,n,r,s=!1){return new hh({Ec:e,methodName:n,bc:r,path:lt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ec(t){const e=t._freezeSettings(),n=mc(t._databaseId);return new KP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Vy(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);dh("Data must be an object, but it was:",o,r);const c=xy(r,o);let l,u;if(i.merge)l=new Ht(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const p of i.mergeFields){const m=Yl(e,p,n);if(!o.contains(m))throw new z(D.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);Ly(f,m)||f.push(m)}l=new Ht(f),u=o.fieldTransforms.filter((p=>l.covers(p.field)))}else l=null,u=o.fieldTransforms;return new zP(new Pt(c),l,u)}class Tc extends vc{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Tc}}class fh extends vc{constructor(e,n){super(e),this.Cc=n}_toFieldTransform(e){const n=new eo(e.serializer,q_(e.serializer,this.Cc));return new UR(e.path,n)}isEqual(e){return e instanceof fh&&this.Cc===e.Cc}}function Dy(t,e,n,r){const s=t.Dc(1,e,n);dh("Data must be an object, but it was:",s,r);const i=[],o=Pt.empty();Lr(r,((l,u)=>{const f=ph(e,l,n);u=xe(u);const p=s.gc(f);if(u instanceof Tc)i.push(f);else{const m=vo(u,p);m!=null&&(i.push(f),o.set(f,m))}}));const c=new Ht(i);return new ky(o,c,s.fieldTransforms)}function Oy(t,e,n,r,s,i){const o=t.Dc(1,e,n),c=[Yl(e,r,n)],l=[s];if(i.length%2!=0)throw new z(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)c.push(Yl(e,i[m])),l.push(i[m+1]);const u=[],f=Pt.empty();for(let m=c.length-1;m>=0;--m)if(!Ly(u,c[m])){const _=c[m];let C=l[m];C=xe(C);const k=o.gc(_);if(C instanceof Tc)u.push(_);else{const V=vo(C,k);V!=null&&(u.push(_),f.set(_,V))}}const p=new Ht(u);return new ky(f,p,o.fieldTransforms)}function QP(t,e,n,r=!1){return vo(n,t.Dc(r?4:3,e))}function vo(t,e){if(My(t=xe(t)))return dh("Unsupported field value:",e,t),xy(t,e);if(t instanceof vc)return(function(r,s){if(!Ny(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=vo(c,s.yc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=xe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return q_(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ve.fromDate(r);return{timestampValue:Pa(s.serializer,i)}}if(r instanceof ve){const i=new ve(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Pa(s.serializer,i)}}if(r instanceof Rn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Bt)return{bytesValue:ty(s.serializer,r._byteString)};if(r instanceof He){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Hu(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Sn)return(function(o,c){return{mapValue:{fields:{[S_]:{stringValue:P_},[Aa]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.wc("VectorValues must only contain numeric values.");return Bu(c.serializer,u)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${ic(r)}`)})(t,e)}function xy(t,e){const n={};return T_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lr(t,((r,s)=>{const i=vo(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function My(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ve||t instanceof Rn||t instanceof Bt||t instanceof He||t instanceof vc||t instanceof Sn)}function dh(t,e,n){if(!My(n)||!v_(n)){const r=ic(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function Yl(t,e,n){if((e=xe(e))instanceof yo)return e._internalPath;if(typeof e=="string")return ph(t,e);throw Oa("Field path arguments must be of type string or ",t,!1,void 0,n)}const JP=new RegExp("[~\\*/\\[\\]]");function ph(t,e,n){if(e.search(JP)>=0)throw Oa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new yo(...e.split("."))._internalPath}catch{throw Oa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Oa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new z(D.INVALID_ARGUMENT,c+t+l)}function Ly(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new YP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(wc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class YP extends xa{data(){return super.data()}}function wc(t,e){return typeof e=="string"?ph(t,e):e instanceof yo?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fy(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(D.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class mh{}class gh extends mh{}function xt(t,e,...n){let r=[];e instanceof mh&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((l=>l instanceof _h)).length,c=i.filter((l=>l instanceof Ic)).length;if(o>1||o>0&&c>0)throw new z(D.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Ic extends gh{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Ic(e,n,r)}_apply(e){const n=this._parse(e);return Uy(e._query,n),new rr(e.firestore,e.converter,$l(e._query,n))}_parse(e){const n=Ec(e.firestore);return(function(i,o,c,l,u,f,p){let m;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new z(D.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){qp(p,f);const C=[];for(const k of p)C.push($p(l,i,k));m={arrayValue:{values:C}}}else m=$p(l,i,p)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||qp(p,f),m=QP(c,o,p,f==="in"||f==="not-in");return Ye.create(u,f,m)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function Mt(t,e,n){const r=e,s=wc("where",t);return Ic._create(s,r,n)}class _h extends mh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new _h(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:hn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)Uy(o,l),o=$l(o,l)})(e._query,n),new rr(e.firestore,e.converter,$l(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class yh extends gh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new yh(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new z(D.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new z(D.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Yi(i,o)})(e._query,this._field,this._direction);return new rr(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new Js(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function kn(t,e="asc"){const n=e,r=wc("orderBy",t);return yh._create(r,n)}class vh extends gh{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new vh(e,n,r)}_apply(e){return new rr(e.firestore,e.converter,Ra(e._query,this._limit,this._limitType))}}function XP(t){return rR("limit",t),vh._create("limit",t,"F")}function $p(t,e,n){if(typeof(n=xe(n))=="string"){if(n==="")throw new z(D.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!M_(e)&&n.indexOf("/")!==-1)throw new z(D.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ke.fromString(n));if(!re.isDocumentKey(r))throw new z(D.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return sp(t,new re(r))}if(n instanceof He)return sp(t,n._key);throw new z(D.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${ic(n)}.`)}function qp(t,e){if(!Array.isArray(t)||t.length===0)throw new z(D.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Uy(t,e){const n=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new z(D.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(D.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class jy{convertValue(e,n="none"){switch(Nr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(kr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw se(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Lr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[Aa].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>We(o.doubleValue)));return new Sn(i)}convertGeoPoint(e){return new Rn(We(e.latitude),We(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=ac(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ki(e));default:return null}}convertTimestamp(e){const n=Cr(e);return new ve(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ke.fromString(e);Ie(cy(r),9688,{name:e});const s=new Qi(r.get(1),r.get(3)),i=new re(r.popFirst(5));return s.isEqual(n)||Yn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function By(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class ZP extends jy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,n)}}class ws{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class wr extends xa{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new sa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(wc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(D.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=wr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}wr._jsonSchemaVersion="firestore/documentSnapshot/1.0",wr._jsonSchema={type:Ze("string",wr._jsonSchemaVersion),bundleSource:Ze("string","DocumentSnapshot"),bundleName:Ze("string"),bundle:Ze("string")};class sa extends wr{data(e={}){return super.data(e)}}class Xr{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new ws(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new sa(this._firestore,this._userDataWriter,r.key,r,new ws(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(D.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new sa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ws(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new sa(s._firestore,s._userDataWriter,c.doc.key,c.doc,new ws(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:eC(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(D.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Xr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=xu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function eC(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(t){t=Gt(t,He);const e=Gt(t.firestore,Zn);return jP(_o(e),t._key).then((n=>qy(e,t,n)))}Xr._jsonSchemaVersion="firestore/querySnapshot/1.0",Xr._jsonSchema={type:Ze("string",Xr._jsonSchemaVersion),bundleSource:Ze("string","QuerySnapshot"),bundleName:Ze("string"),bundle:Ze("string")};class Ac extends jy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,n)}}function qn(t){t=Gt(t,rr);const e=Gt(t.firestore,Zn),n=_o(e),r=new Ac(e);return Fy(t._query),BP(n,t._query).then((s=>new Xr(e,r,t,s)))}function Gn(t,e,n,...r){t=Gt(t,He);const s=Gt(t.firestore,Zn),i=Ec(s);let o;return o=typeof(e=xe(e))=="string"||e instanceof yo?Oy(i,"updateDoc",t._key,e,n,r):Dy(i,"updateDoc",t._key,e),Th(s,[o.toMutation(t._key,vt.exists(!0))])}function $y(t){return Th(Gt(t.firestore,Zn),[new dc(t._key,vt.none())])}function Ma(t,e){const n=Gt(t.firestore,Zn),r=uh(t),s=By(t.converter,e);return Th(n,[Vy(Ec(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,vt.exists(!1))]).then((()=>r))}function Or(t,...e){var n,r,s;t=xe(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||Bp(e[o])||(i=e[o++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Bp(e[o])){const p=e[o];e[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),e[o+1]=(r=p.error)===null||r===void 0?void 0:r.bind(p),e[o+2]=(s=p.complete)===null||s===void 0?void 0:s.bind(p)}let l,u,f;if(t instanceof He)u=Gt(t.firestore,Zn),f=cc(t._key.path),l={next:p=>{e[o]&&e[o](qy(u,t,p))},error:e[o+1],complete:e[o+2]};else{const p=Gt(t,rr);u=Gt(p.firestore,Zn),f=p._query;const m=new Ac(u);l={next:_=>{e[o]&&e[o](new Xr(u,m,p,_))},error:e[o+1],complete:e[o+2]},Fy(t._query)}return(function(m,_,C,k){const V=new ch(k),q=new ih(_,V,C);return m.asyncQueue.enqueueAndForget((async()=>nh(await Da(m),q))),()=>{V.Ou(),m.asyncQueue.enqueueAndForget((async()=>rh(await Da(m),q)))}})(_o(u),f,c,l)}function Th(t,e){return(function(r,s){const i=new An;return r.asyncQueue.enqueueAndForget((async()=>bP(await FP(r),s,i))),i.promise})(_o(t),e)}function qy(t,e,n){const r=n.docs.get(e._key),s=new Ac(t);return new wr(t,s,e._key,r,new ws(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const tC={maxAttempts:5};function Ii(t,e){if((t=xe(t)).firestore!==e)throw new z(D.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Ec(e)}get(e){const n=Ii(e,this._firestore),r=new ZP(this._firestore);return this._transaction.lookup([n._key]).then((s=>{if(!s||s.length!==1)return se(24041);const i=s[0];if(i.isFoundDocument())return new xa(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new xa(this._firestore,r,n._key,null,n.converter);throw se(18433,{doc:i})}))}set(e,n,r){const s=Ii(e,this._firestore),i=By(s.converter,n,r),o=Vy(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=Ii(e,this._firestore);let o;return o=typeof(n=xe(n))=="string"||n instanceof yo?Oy(this._dataReader,"Transaction.update",i._key,n,r,s):Dy(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=Ii(e,this._firestore);return this._transaction.delete(n._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC extends nC{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Ii(e,this._firestore),r=new Ac(this._firestore);return super.get(e).then((s=>new wr(this._firestore,r,n._key,s._document,new ws(!1,!1),n.converter)))}}function sC(t,e,n){t=Gt(t,Zn);const r=Object.assign(Object.assign({},tC),n);return(function(i){if(i.maxAttempts<1)throw new z(D.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r),(function(i,o,c){const l=new An;return i.asyncQueue.enqueueAndForget((async()=>{const u=await UP(i);new xP(i.asyncQueue,u,c,o,l).zu()})),l.promise})(_o(t),(s=>e(new rC(t,s))),r)}function iC(t){return new fh("increment",t)}(function(e,n=!0){(function(s){zs=s})(Gs),es(new Rr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new Zn(new Qb(r.getProvider("auth-internal")),new Xb(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new z(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qi(u.options.projectId,f)})(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Tn(Hd,Gd,e),Tn(Hd,Gd,"esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="functions";/**
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
 */class oC{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,jt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
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
 */const Xl="us-central1";class aC{constructor(e,n,r,s,i=Xl,o=(...c)=>fetch(...c)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new oC(e,n,r,s),this.cancelAllRequests=new Promise(c=>{this.deleteService=()=>Promise.resolve(c())});try{const c=new URL(i);this.customDomain=c.origin+(c.pathname==="/"?"":c.pathname),this.region=Xl}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function cC(t,e,n){const r=is(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(Eu(t.emulatorOrigin),Tu("Functions",!0))}const Hp="@firebase/functions",Gp="0.12.9";/**
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
 */const lC="auth-internal",uC="app-check-internal",hC="messaging-internal";function fC(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),i=n.getProvider(lC),o=n.getProvider(hC),c=n.getProvider(uC);return new aC(s,i,o,c,r)};es(new Rr(Hy,e,"PUBLIC").setMultipleInstances(!0)),Tn(Hp,Gp,t),Tn(Hp,Gp,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(t=Au(),e=Xl){const r=tc(xe(t),Hy).getImmediate({identifier:e}),s=Tg("functions");return s&&pC(r,...s),r}function pC(t,e,n){cC(xe(t),e,n)}fC();const mC={apiKey:"AIzaSyCL63H3EpeK3A9SgLJ6NxkcWtzOnbZM5uU",authDomain:"qa-website2026.firebaseapp.com",projectId:"qa-website2026",messagingSenderId:"207652444805",appId:"1:207652444805:web:e5f9b11f0d4293475727ec"},wh=Rg(mC),Is=qb(wh),Ih=HP(wh);dC(wh);const pi=En(null),ul=En(!0);function bc(){const t=Dt(()=>pi.value!==null);function e(){ul.value=!0,N0(Is,i=>{var o;i?pi.value={uid:i.uid,email:i.email||"",displayName:i.displayName||((o=i.email)==null?void 0:o.split("@")[0])||"User",photoURL:i.photoURL||void 0}:pi.value=null,ul.value=!1})}async function n(i,o){return(await R0(Is,i,o)).user}async function r(i,o,c){const l=await b0(Is,i,o);return await P0(l.user,{displayName:c}),l.user}async function s(){await V0(Is),pi.value=null}return{currentUser:pi,loading:ul,isAuthenticated:t,init:e,login:n,register:r,logout:s}}const Wp="/assets/qa-logo-BBgT2MGY.png",gC={key:0,class:"flex items-center gap-2"},_C=["src"],yC={key:1},vC=["src"],EC={key:0},TC={key:1},wC={class:"flex-1 space-y-1 px-3 py-4"},IC={class:"text-lg"},AC={key:0},bC={class:"border-t border-gray-200 p-4"},RC={key:0,class:"flex items-center gap-3"},SC={class:"flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold"},PC={class:"min-w-0 flex-1"},CC={class:"text-sm font-medium text-gray-900 truncate"},kC={class:"text-xs text-gray-500 truncate"},NC=Hs({__name:"Sidebar",props:{collapsed:{type:Boolean},mobileOpen:{type:Boolean}},emits:["toggle","closeMobile"],setup(t,{emit:e}){const n=e,r=gg(),s=bc(),i=[{name:"Dashboard",path:"/dashboard",icon:"📊"},{name:"Projects",path:"/projects",icon:"📁"}],o=c=>r.path.startsWith(c);return(c,l)=>{var f,p,m,_,C;const u=Ka("router-link");return Ue(),Je(Yt,null,[ne("aside",{class:Xt(["fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-300 lg:static lg:z-auto lg:translate-x-0 lg:transition-[width]",[t.collapsed?"lg:w-16":"lg:w-64",t.mobileOpen?"translate-x-0":"-translate-x-full"]])},[ne("div",{class:Xt(["relative flex h-16 items-center border-b border-gray-200",t.collapsed?"justify-center px-2":"justify-between px-4"])},[t.collapsed?(Ue(),Je("div",yC,[ne("img",{src:ct(Wp),alt:"QA-Suite logo",class:"h-8 w-8 rounded-sm object-cover"},null,8,vC)])):(Ue(),Je("div",gC,[ne("img",{src:ct(Wp),alt:"QA-Suite logo",class:"h-10 w-10 rounded-sm object-cover"},null,8,_C),l[3]||(l[3]=ne("span",{class:"text-sm font-medium text-gray-500"},"Suite",-1))])),ne("button",{onClick:l[0]||(l[0]=k=>n("toggle")),class:Xt(["text-gray-500 hover:bg-gray-100 hover:text-gray-700",t.collapsed?"absolute -right-3 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full border border-gray-200 bg-white shadow-sm":"rounded-lg p-1.5"])},[t.collapsed?(Ue(),Je("span",EC,"→")):(Ue(),Je("span",TC,"←"))],2)],2),ne("nav",wC,[(Ue(),Je(Yt,null,Nm(i,k=>Xe(u,{key:k.name,to:k.path,class:Xt(["flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",o(k.path)?"bg-primary-50 text-primary-700":"text-gray-600 hover:bg-gray-100 hover:text-gray-900"]),onClick:l[1]||(l[1]=V=>n("closeMobile"))},{default:Wa(()=>[ne("span",IC,Rt(k.icon),1),t.collapsed?pn("",!0):(Ue(),Je("span",AC,Rt(k.name),1))]),_:2},1032,["to","class"])),64))]),ne("div",bC,[t.collapsed?pn("",!0):(Ue(),Je("div",RC,[ne("div",SC,Rt(((m=(p=(f=ct(s).currentUser)==null?void 0:f.displayName)==null?void 0:p.charAt(0))==null?void 0:m.toUpperCase())||"U"),1),ne("div",PC,[ne("p",CC,Rt((_=ct(s).currentUser)==null?void 0:_.displayName),1),ne("p",kC,Rt((C=ct(s).currentUser)==null?void 0:C.email),1)])]))])],2),t.mobileOpen?(Ue(),Je("button",{key:0,type:"button","aria-label":"Close navigation",class:"fixed inset-0 z-30 bg-gray-900/40 lg:hidden",onClick:l[2]||(l[2]=k=>n("closeMobile"))})):pn("",!0)],64)}}});function qe(t){return qP(Ih,t)}function Ot(t){return uh(Ih,t)}function mi(t,e){return{id:t,...e,screenshotUrls:e.screenshotUrls??[]}}function T1(){async function t(l){const u=xt(qe("projects"),Mt("ownerId","==",l),kn("createdAt","desc"));return(await qn(u)).docs.map(p=>({id:p.id,...p.data()}))}function e(l,u){const f=xt(qe("projects"),Mt("ownerId","==",l),kn("createdAt","desc"));return Or(f,p=>{u(p.docs.map(m=>({id:m.id,...m.data()})))},async p=>{console.warn("subscribeProjects error, falling back:",p.message);const m=xt(qe("projects"),Mt("ownerId","==",l));Or(m,_=>{u(_.docs.map(C=>({id:C.id,...C.data()})))})})}async function n(l){const u=await Eh(Ot(`projects/${l}`));return u.exists()?{id:u.id,...u.data()}:null}async function r(l){return(await Ma(qe("projects"),{...l,ownerId:l.ownerId,members:{[l.ownerId]:"owner"},bugCounter:0,ownershipVerified:l.ownershipVerified??!1,createdAt:ve.now()})).id}async function s(l,u){await Gn(Ot(`projects/${l}`),u)}async function i(l){await $y(Ot(`projects/${l}`))}async function o(l){await Gn(Ot(`projects/${l}`),{ownershipVerified:!0})}async function c(l,u,f){await Gn(Ot(`projects/${l}`),{[`members.${u}`]:f})}return{getProjects:t,subscribeProjects:e,getProject:n,createProject:r,updateProject:s,deleteProject:i,verifyOwnership:o,addMember:c}}function w1(){function t(o,c,l){const u=xt(qe("audit_jobs"),Mt("projectId","==",o),kn("timestamp","desc"));return Or(u,f=>c(f.docs.map(p=>({id:p.id,...p.data()}))),f=>{var p;console.error("Audit jobs snapshot error:",f),(f.code==="failed-precondition"||(p=f.message)!=null&&p.includes("index"))&&(console.warn("Composite index missing — deploy firestore.indexes.json"),c([])),l==null||l(f)})}async function e(o){const c=xt(qe("audit_jobs"),Mt("projectId","==",o),kn("timestamp","desc"));return(await qn(c)).docs.map(u=>({id:u.id,...u.data()}))}async function n(o){const c=await Eh(Ot(`audit_jobs/${o}`));return c.exists()?{id:c.id,...c.data()}:null}async function r(o){return(await qn(qe(`audit_jobs/${o}/pages`))).docs.map(l=>l.data())}async function s(o){return(await qn(qe(`audit_jobs/${o}/vulnerabilities`))).docs.map(l=>l.data())}async function i(o){return(await qn(qe(`audit_jobs/${o}/performance_metrics`))).docs.map(l=>l.data())}return{subscribeAuditJobs:t,getAuditJobs:e,getAuditJob:n,getAuditPages:r,getVulnerabilities:s,getPerformanceMetrics:i}}function I1(){function t(o,c,l){const u=xt(qe("bug_list"),Mt("projectId","==",o),kn("createdAt","desc"));return Or(u,f=>c(f.docs.map(p=>mi(p.id,p.data()))),f=>{var p;if(console.error("Bug list snapshot error:",f),f.code==="failed-precondition"||(p=f.message)!=null&&p.includes("index")){const m=xt(qe("bug_list"),Mt("projectId","==",o));Or(m,_=>{c(_.docs.map(C=>mi(C.id,C.data())))})}l==null||l(f)})}async function e(o){try{const c=xt(qe("bug_list"),Mt("projectId","==",o),kn("createdAt","desc"));return(await qn(c)).docs.map(u=>mi(u.id,u.data()))}catch{const c=xt(qe("bug_list"),Mt("projectId","==",o));return(await qn(c)).docs.map(u=>mi(u.id,u.data()))}}async function n(o){const c=await Eh(Ot(`bug_list/${o}`));return c.exists()?mi(c.id,c.data()):null}async function r(o){const c=Ot(`projects/${o.projectId}`);let l="",u="";return await sC(Ih,async f=>{var C;const m=(((C=(await f.get(c)).data())==null?void 0:C.bugCounter)||0)+1;u=`QAS-${m}`,f.update(c,{bugCounter:m});const _=uh(qe("bug_list"));l=_.id,f.set(_,{status:"Open",severity:"Medium",tags:[],assignees:[],commentCount:0,remediationGuide:null,screenshotUrls:[],...o,shortId:u,createdAt:ve.now(),lastEditedTime:ve.now()})}),{id:l,shortId:u}}async function s(o,c){await Gn(Ot(`bug_list/${o}`),{...c,lastEditedTime:ve.now()})}async function i(o){await $y(Ot(`bug_list/${o}`))}return{subscribeBugs:t,getBugs:e,getBug:n,createBug:r,updateBug:s,deleteBug:i}}function A1(){function t(n,r){const s=xt(qe(`bug_list/${n}/comments`),kn("timestamp","asc"));return Or(s,i=>{r(i.docs.map(o=>({id:o.id,...o.data()})))})}async function e(n,r){return await Gn(Ot(`bug_list/${n}`),{commentCount:iC(1)}),(await Ma(qe(`bug_list/${n}/comments`),{...r,timestamp:ve.now()})).id}return{subscribeComments:t,addComment:e}}function b1(){function t(i,o){const c=xt(qe("test_cases"),Mt("projectId","==",i),kn("createdAt","desc"));return Or(c,l=>{o(l.docs.map(u=>({id:u.id,...u.data()})))})}async function e(i){const o=xt(qe("test_cases"),Mt("projectId","==",i),kn("createdAt","desc"));return(await qn(o)).docs.map(l=>({id:l.id,...l.data()}))}async function n(i){return(await Ma(qe("test_cases"),{status:"Untested",steps:[],tags:[],playwrightScript:null,lastRun:null,...i,createdAt:ve.now(),lastEditedTime:ve.now()})).id}async function r(i,o){await Gn(Ot(`test_cases/${i}`),{...o,lastEditedTime:ve.now()})}async function s(i,o){const c=await Ma(qe(`test_cases/${i}/test_runs`),{...o,runAt:ve.now()});return await Gn(Ot(`test_cases/${i}`),{lastRun:ve.now(),status:o.status,lastEditedTime:ve.now()}),c.id}return{subscribeTestCases:t,getTestCases:e,createTestCase:n,updateTestCase:r,addTestRun:s}}function VC(){function t(r,s){const i=xt(qe("notifications"),Mt("userId","==",r),kn("createdAt","desc"),XP(50));return Or(i,o=>{s(o.docs.map(c=>({id:c.id,...c.data()})))})}async function e(r){await Gn(Ot(`notifications/${r}`),{read:!0})}async function n(r){const s=xt(qe("notifications"),Mt("userId","==",r),Mt("read","==",!1)),o=(await qn(s)).docs.map(c=>Gn(c.ref,{read:!0}));await Promise.all(o)}return{subscribeNotifications:t,markAsRead:e,markAllAsRead:n}}function R1(t){return t?("toDate"in t?t.toDate():t).toLocaleDateString():"Just now"}function DC(t){return t?("toDate"in t?t.toDate():t).toLocaleString():"Processing..."}function S1(t){switch(t){case"completed":return"text-green-600";case"running":case"scanning":return"text-yellow-600";case"failed":return"text-red-600";case"unavailable":return"text-orange-500";default:return"text-gray-400"}}function P1(t){switch(t){case"Urgent":return"bg-red-100 text-red-800";case"High":return"bg-orange-100 text-orange-800";case"Medium":return"bg-yellow-100 text-yellow-800";case"Low":return"bg-blue-100 text-blue-800";default:return"bg-gray-100 text-gray-800"}}function C1(t){switch(t){case"Not started":return"bg-gray-100 text-gray-700";case"Open":return"bg-blue-100 text-blue-800";case"In Progress":return"bg-yellow-100 text-yellow-800";case"In Review":return"bg-purple-100 text-purple-800";case"Resolved":return"bg-green-100 text-green-800";default:return"bg-gray-100 text-gray-700"}}const OC={class:"flex min-h-16 items-center justify-between gap-3 border-b border-gray-200 bg-white px-4 sm:px-6"},xC={class:"flex items-center gap-4"},MC={class:"min-w-0 truncate text-xl font-semibold text-gray-800"},LC={class:"flex items-center gap-2 sm:gap-4"},FC={class:"relative notification-container"},UC={key:0,class:"absolute top-1.5 right-1.5 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center text-[10px] font-bold text-white border-2 border-white"},jC={key:0,class:"absolute right-0 mt-2 w-80 sm:w-96 rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 z-50 overflow-hidden"},BC={class:"px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-gray-50/50"},$C={class:"flex items-center gap-2"},qC={key:0,class:"rounded-full bg-indigo-100 text-indigo-700 px-2 py-0.5 text-xs font-semibold"},HC={class:"max-h-80 overflow-y-auto divide-y divide-gray-100"},GC={key:0,class:"p-6 text-center text-gray-500"},WC=["onClick"],zC={key:0,class:"absolute left-1.5 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-indigo-600"},KC={class:"min-w-0 flex-1"},QC={class:"text-xs text-gray-600 line-clamp-2 mt-0.5"},JC={class:"text-[10px] text-gray-400 mt-1 flex items-center gap-1"},YC={class:"border-t border-gray-100 bg-gray-50/50 p-2 text-center"},XC={class:"relative user-menu-container"},ZC={class:"flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold"},e1={class:"hidden text-sm font-medium text-gray-700 sm:inline"},t1={key:0,class:"absolute right-0 mt-2 w-48 rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 z-50"},n1={class:"px-4 py-2 border-b border-gray-100"},r1={class:"text-sm font-medium text-gray-900 truncate"},s1=Hs({__name:"Header",props:{collapsed:{type:Boolean},user:{}},emits:["toggle-sidebar"],setup(t,{emit:e}){const n=e,r=bc(),s=Gw(),i=VC(),o=En(!1),c=En(!1),l=En([]);let u=null;const f=Dt(()=>l.value.filter(B=>!B.read).length),p=Dt(()=>l.value.slice(0,5));function m(B){const L=B.target;L.closest(".notification-container")||(c.value=!1),L.closest(".user-menu-container")||(o.value=!1)}pu(()=>{r.currentUser.value&&(u=i.subscribeNotifications(r.currentUser.value.uid,B=>{l.value=B})),document.addEventListener("click",m)}),mu(()=>{u==null||u(),document.removeEventListener("click",m)});const _=async()=>{o.value=!1,await r.logout(),s.push("/login")},C=()=>{c.value=!c.value,c.value&&(o.value=!1)},k=()=>{o.value=!o.value,o.value&&(c.value=!1)};async function V(){r.currentUser.value&&await i.markAllAsRead(r.currentUser.value.uid)}async function q(B){c.value=!1,B.read||await i.markAsRead(B.id),B.link&&s.push(B.link)}function U(B,L){const Z=`${B} ${L}`.toLowerCase();return Z.includes("error")||Z.includes("failed")||Z.includes("alert")||Z.includes("critical")?{icon:"fa-solid fa-triangle-exclamation",bg:"bg-red-100 text-red-600"}:Z.includes("passed")||Z.includes("success")||Z.includes("resolved")||Z.includes("completed")?{icon:"fa-solid fa-circle-check",bg:"bg-green-100 text-green-600"}:Z.includes("bug")||Z.includes("issue")?{icon:"fa-solid fa-bug",bg:"bg-amber-100 text-amber-600"}:Z.includes("audit")||Z.includes("crawl")||Z.includes("scan")?{icon:"fa-solid fa-shield-halved",bg:"bg-purple-100 text-purple-600"}:Z.includes("test")||Z.includes("suite")?{icon:"fa-solid fa-flask",bg:"bg-blue-100 text-blue-600"}:{icon:"fa-solid fa-bell",bg:"bg-indigo-100 text-indigo-600"}}return(B,L)=>{var fe,I,v,E,A;const Z=Ka("router-link");return Ue(),Je("header",OC,[ne("div",xC,[ne("button",{type:"button","aria-label":"Toggle navigation",class:"rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 lg:hidden",onClick:L[0]||(L[0]=b=>n("toggle-sidebar"))},[...L[2]||(L[2]=[ne("i",{class:"fa-solid fa-bars text-lg"},null,-1)])]),ne("h2",MC,Rt(B.$route.name),1)]),ne("div",LC,[ne("div",FC,[ne("button",{type:"button","aria-label":"Notifications",onClick:C,class:"relative rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors focus:outline-none"},[L[3]||(L[3]=ne("i",{class:"fa-solid fa-bell text-lg"},null,-1)),f.value>0?(Ue(),Je("span",UC,Rt(f.value>9?"9+":f.value),1)):pn("",!0)]),c.value?(Ue(),Je("div",jC,[ne("div",BC,[ne("div",$C,[L[4]||(L[4]=ne("span",{class:"text-sm font-semibold text-gray-900"},"Notifications",-1)),f.value>0?(Ue(),Je("span",qC,Rt(f.value)+" new ",1)):pn("",!0)]),f.value>0?(Ue(),Je("button",{key:0,onClick:V,class:"text-xs font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition-colors"},[...L[5]||(L[5]=[ne("i",{class:"fa-solid fa-check-double text-[10px]"},null,-1),ne("span",null,"Mark all read",-1)])])):pn("",!0)]),ne("div",HC,[l.value.length===0?(Ue(),Je("div",GC,[...L[6]||(L[6]=[ne("div",{class:"mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-400"},[ne("i",{class:"fa-solid fa-bell-slash text-base"})],-1),ne("p",{class:"text-sm font-medium text-gray-700"},"No notifications",-1),ne("p",{class:"text-xs text-gray-400 mt-0.5"},"You're all caught up!",-1)])])):pn("",!0),(Ue(!0),Je(Yt,null,Nm(p.value,b=>(Ue(),Je("div",{key:b.id,onClick:S=>q(b),class:Xt(["p-3.5 hover:bg-gray-50 cursor-pointer transition-colors flex items-start gap-3 relative",b.read?"opacity-70":"bg-indigo-50/20"])},[b.read?pn("",!0):(Ue(),Je("div",zC)),ne("div",{class:Xt(["flex-shrink-0 mt-0.5",b.read?"ml-0":"ml-1"])},[ne("div",{class:Xt(["flex h-7 w-7 items-center justify-center rounded-md",U(b.title,b.message).bg])},[ne("i",{class:Xt([U(b.title,b.message).icon,"text-xs"])},null,2)],2)],2),ne("div",KC,[ne("p",{class:Xt(["text-xs font-semibold text-gray-900 truncate",b.read?"font-medium":"font-bold"])},Rt(b.title),3),ne("p",QC,Rt(b.message),1),ne("p",JC,[L[7]||(L[7]=ne("i",{class:"fa-regular fa-clock text-[9px]"},null,-1)),ne("span",null,Rt(ct(DC)(b.createdAt)),1)])])],10,WC))),128))]),ne("div",YC,[Xe(Z,{to:"/notifications",onClick:L[1]||(L[1]=b=>c.value=!1),class:"block w-full py-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"},{default:Wa(()=>[...L[8]||(L[8]=[Xm(" View all notifications ",-1),ne("i",{class:"fa-solid fa-arrow-right text-[10px] ml-1"},null,-1)])]),_:1})])])):pn("",!0)]),ne("div",XC,[ne("button",{onClick:k,class:"flex items-center gap-2 rounded-full border border-gray-200 p-1 pr-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"},[ne("div",ZC,Rt(((v=(I=(fe=ct(r).currentUser)==null?void 0:fe.displayName)==null?void 0:I.charAt(0))==null?void 0:v.toUpperCase())||"U"),1),ne("span",e1,Rt(((E=ct(r).currentUser)==null?void 0:E.displayName)||"User"),1),L[9]||(L[9]=ne("i",{class:"fa-solid fa-chevron-down text-xs text-gray-400 hidden sm:inline"},null,-1))]),o.value?(Ue(),Je("div",t1,[ne("div",n1,[L[10]||(L[10]=ne("p",{class:"text-xs text-gray-500"},"Signed in as",-1)),ne("p",r1,Rt((A=ct(r).currentUser)==null?void 0:A.email),1)]),ne("button",{onClick:_,class:"flex items-center w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50"},[...L[11]||(L[11]=[ne("i",{class:"fa-solid fa-arrow-right-from-bracket mr-2 text-xs"},null,-1),ne("span",null,"Sign out",-1)])])])):pn("",!0)])])])}}}),i1={class:"flex h-screen overflow-hidden bg-gray-50"},o1={class:"flex flex-1 flex-col overflow-hidden"},a1={class:"min-w-0 flex-1 overflow-y-auto p-4 scrollbar-thin sm:p-6"},c1=Hs({__name:"AppLayout",setup(t){const e=bc(),n=En(!1),r=En(!1);function s(){if(window.innerWidth<1024){r.value=!r.value;return}n.value=!n.value}function i(){r.value=!1}return(o,c)=>{const l=Ka("router-view");return Ue(),Je("div",i1,[Xe(NC,{collapsed:n.value,"mobile-open":r.value,onToggle:s,onCloseMobile:i},null,8,["collapsed","mobile-open"]),ne("div",o1,[Xe(s1,{collapsed:n.value,user:ct(e).currentUser,onToggleSidebar:s},null,8,["collapsed","user"]),ne("main",a1,[Xe(l)])])])}}}),l1=Hs({__name:"App",setup(t){const e=bc(),n=gg(),r=En(!1);return Si(()=>n.meta.requiresAuth,s=>{r.value=s!==!1},{immediate:!0}),pu(()=>{e.init()}),(s,i)=>{const o=Ka("router-view");return r.value&&ct(e).isAuthenticated?(Ue(),El(c1,{key:0},{default:Wa(()=>[Xe(o)]),_:1})):(Ue(),El(o,{key:1}))}}}),u1="modulepreload",h1=function(t){return"/"+t},zp={},xn=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(u=>{if(u=h1(u),u in zp)return;zp[u]=!0;const f=u.endsWith(".css"),p=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${p}`))return;const m=document.createElement("link");if(m.rel=f?"stylesheet":u1,f||(m.as="script"),m.crossOrigin="",m.href=u,l&&m.setAttribute("nonce",l),document.head.appendChild(m),f)return new Promise((_,C)=>{m.addEventListener("load",_),m.addEventListener("error",()=>C(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},Gy=Hw({history:ww(),routes:[{path:"/",redirect:"/dashboard"},{path:"/login",name:"Login",component:()=>xn(()=>import("./LoginView-CrcTXcpi.js"),[]),meta:{requiresAuth:!1}},{path:"/dashboard",name:"Dashboard",component:()=>xn(()=>import("./DashboardView-hwXN1ywm.js"),[]),meta:{requiresAuth:!0}},{path:"/projects",name:"Projects",component:()=>xn(()=>import("./ProjectsView-C-J5JB2Q.js"),[]),meta:{requiresAuth:!0}},{path:"/projects/:id",name:"ProjectDetail",component:()=>xn(()=>import("./ProjectDetailView-Ba_ELGy6.js").then(t=>t.P),__vite__mapDeps([0,1])),meta:{requiresAuth:!0}},{path:"/projects/:id/audit/:auditId",name:"AuditResults",component:()=>xn(()=>import("./AuditResultsView-DvWvMWzn.js"),[]),meta:{requiresAuth:!0}},{path:"/projects/:id/bugs",name:"BugList",component:()=>xn(()=>import("./BugListView-DXfJu3ko.js"),__vite__mapDeps([2,3])),meta:{requiresAuth:!0}},{path:"/projects/:id/test-cases",name:"TestCases",component:()=>xn(()=>import("./TestCasesView-CTKXWl7d.js"),__vite__mapDeps([4,3])),meta:{requiresAuth:!0}},{path:"/projects/:id/history",name:"TrendHistory",component:()=>xn(()=>import("./TrendHistoryView-iqR_QZNd.js"),[]),meta:{requiresAuth:!0}},{path:"/notifications",name:"Notifications",component:()=>xn(()=>import("./NotificationsView-DmjKfbCt.js"),[]),meta:{requiresAuth:!0}}]});Gy.beforeEach(async(t,e,n)=>{t.meta.requiresAuth!==!1?(await Is.authStateReady(),Is.currentUser?n():n("/login")):n()});const Ah=OT(l1);Ah.use(FT());Ah.use(Gy);Ah.mount("#app");export{tg as $,XP as A,Ka as B,El as C,_1 as D,m1 as E,Yt as F,ct as G,I1 as H,b1 as I,uh as J,Gn as K,Dt as L,g1 as M,gg as N,w1 as O,S1 as P,nu as Q,Is as R,Si as S,P1 as T,R1 as U,v1 as V,A1 as W,C1 as X,DC as Y,d1 as Z,xn as _,ne as a,Gv as a0,iT as a1,Se as a2,uu as a3,hu as a4,VC as a5,f1 as b,Je as c,Hs as d,pn as e,Xm as f,bc as g,pu as h,mu as i,Xe as j,Wa as k,Nm as l,T1 as m,Xt as n,Ue as o,qn as p,xt as q,En as r,qP as s,Rt as t,Gw as u,p1 as v,y1 as w,Ih as x,Mt as y,kn as z};
