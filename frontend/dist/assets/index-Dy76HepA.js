const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/DashboardView-Cj0OOfUk.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/DashboardView-BY3D3gQi.css","assets/PageAuditsView-C2dEQjK8.js","assets/PageAuditsView-BaIgoaMw.css","assets/BugListView-Di-z60zg.js","assets/useAI-DFaZBNM5.js","assets/TestCasesView-CI9_XP1c.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Pu(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Oe={},Fs=[],bn=()=>{},Dg=()=>!1,oc=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),ac=t=>t.startsWith("onUpdate:"),it=Object.assign,ku=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},tE=Object.prototype.hasOwnProperty,Ne=(t,e)=>tE.call(t,e),ae=Array.isArray,Us=t=>wo(t)==="[object Map]",ri=t=>wo(t)==="[object Set]",Gf=t=>wo(t)==="[object Date]",pe=t=>typeof t=="function",Ue=t=>typeof t=="string",xn=t=>typeof t=="symbol",De=t=>t!==null&&typeof t=="object",Vg=t=>(De(t)||pe(t))&&pe(t.then)&&pe(t.catch),xg=Object.prototype.toString,wo=t=>xg.call(t),nE=t=>wo(t).slice(8,-1),Og=t=>wo(t)==="[object Object]",Nu=t=>Ue(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Bi=Pu(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),cc=t=>{const e=Object.create(null);return(n=>e[n]||(e[n]=t(n)))},rE=/-\w/g,Ft=cc(t=>t.replace(rE,e=>e.slice(1).toUpperCase())),sE=/\B([A-Z])/g,Hr=cc(t=>t.replace(sE,"-$1").toLowerCase()),lc=cc(t=>t.charAt(0).toUpperCase()+t.slice(1)),dl=cc(t=>t?`on${lc(t)}`:""),In=(t,e)=>!Object.is(t,e),da=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},Lg=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},uc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},iE=t=>{const e=Ue(t)?Number(t):NaN;return isNaN(e)?t:e};let Wf;const hc=()=>Wf||(Wf=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Du(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Ue(r)?lE(r):Du(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Ue(t)||De(t))return t}const oE=/;(?![^(]*\))/g,aE=/:([^]+)/,cE=/\/\*[^]*?\*\//g;function lE(t){const e={};return t.replace(cE,"").split(oE).forEach(n=>{if(n){const r=n.split(aE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Tt(t){let e="";if(Ue(t))e=t;else if(ae(t))for(let n=0;n<t.length;n++){const r=Tt(t[n]);r&&(e+=r+" ")}else if(De(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const uE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",hE=Pu(uE);function Mg(t){return!!t||t===""}function fE(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=si(t[r],e[r]);return n}function si(t,e){if(t===e)return!0;let n=Gf(t),r=Gf(e);if(n||r)return n&&r?t.getTime()===e.getTime():!1;if(n=xn(t),r=xn(e),n||r)return t===e;if(n=ae(t),r=ae(e),n||r)return n&&r?fE(t,e):!1;if(n=De(t),r=De(e),n||r){if(!n||!r)return!1;const s=Object.keys(t).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in t){const c=t.hasOwnProperty(o),l=e.hasOwnProperty(o);if(c&&!l||!c&&l||!si(t[o],e[o]))return!1}}return String(t)===String(e)}function Vu(t,e){return t.findIndex(n=>si(n,e))}const Fg=t=>!!(t&&t.__v_isRef===!0),ot=t=>Ue(t)?t:t==null?"":ae(t)||De(t)&&(t.toString===xg||!pe(t.toString))?Fg(t)?ot(t.value):JSON.stringify(t,Ug,2):String(t),Ug=(t,e)=>Fg(e)?Ug(t,e.value):Us(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[pl(r,i)+" =>"]=s,n),{})}:ri(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>pl(n))}:xn(e)?pl(e):De(e)&&!ae(e)&&!Og(e)?String(e):e,pl=(t,e="")=>{var n;return xn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dt;class jg{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!e&&dt&&(dt.active?(this.parent=dt,this.index=(dt.scopes||(dt.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes){const r=this.scopes.slice();for(e=0,n=r.length;e<n;e++)r[e].pause()}for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes){const s=this.scopes.slice();for(e=0,n=s.length;e<n;e++)s[e].resume()}const r=this.effects.slice();for(e=0,n=r.length;e<n;e++)r[e].resume()}}run(e){if(this._active){const n=dt;try{return dt=this,e()}finally{dt=n}}}on(){++this._on===1&&(this.prevScope=dt,dt=this)}off(){if(this._on>0&&--this._on===0){if(dt===this)dt=this.prevScope;else{let e=dt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(this.effects.length=0,n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(n=0,r=s.length;n<r;n++)s[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function dE(t){return new jg(t)}function pE(){return dt}let Le;const gl=new WeakSet;class Bg{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,dt&&(dt.active?dt.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,gl.has(this)&&(gl.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||qg(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zf(this),Hg(this);const e=Le,n=un;Le=this,un=!0;try{return this.fn()}finally{Gg(this),Le=e,un=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Lu(e);this.deps=this.depsTail=void 0,zf(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?gl.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ul(this)&&this.run()}get dirty(){return Ul(this)}}let $g=0,$i,qi;function qg(t,e=!1){if(t.flags|=8,e){t.next=qi,qi=t;return}t.next=$i,$i=t}function xu(){$g++}function Ou(){if(--$g>0)return;if(qi){let e=qi;for(qi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;$i;){let e=$i;for($i=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){t||(t=r)}e=n}}if(t)throw t}function Hg(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Gg(t){let e,n=t.depsTail,r=n;for(;r;){const s=r.prevDep;r.version===-1?(r===n&&(n=s),Lu(r),gE(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}t.deps=e,t.depsTail=n}function Ul(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Wg(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function Wg(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===to)||(t.globalVersion=to,!t.isSSR&&t.flags&128&&(!t.deps&&!t._dirty||!Ul(t))))return;t.flags|=2;const e=t.dep,n=Le,r=un;Le=t,un=!0;try{Hg(t);const s=t.fn(t._value);(e.version===0||In(s,t._value))&&(t.flags|=128,t._value=s,e.version++)}catch(s){throw e.version++,s}finally{Le=n,un=r,Gg(t),t.flags&=-3}}function Lu(t,e=!1){const{dep:n,prevSub:r,nextSub:s}=t;if(r&&(r.nextSub=s,t.prevSub=void 0),s&&(s.prevSub=r,t.nextSub=void 0),n.subs===t&&(n.subs=r,!r&&n.computed)){n.computed.flags&=-5;for(let i=n.computed.deps;i;i=i.nextDep)Lu(i,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function gE(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let un=!0;const zg=[];function Jn(){zg.push(un),un=!1}function Yn(){const t=zg.pop();un=t===void 0?!0:t}function zf(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=Le;Le=void 0;try{e()}finally{Le=n}}}let to=0;class mE{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Mu{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Le||!un||Le===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==Le)n=this.activeLink=new mE(Le,this),Le.deps?(n.prevDep=Le.depsTail,Le.depsTail.nextDep=n,Le.depsTail=n):Le.deps=Le.depsTail=n,Kg(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const r=n.nextDep;r.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=r),n.prevDep=Le.depsTail,n.nextDep=void 0,Le.depsTail.nextDep=n,Le.depsTail=n,Le.deps===n&&(Le.deps=r)}return n}trigger(e){this.version++,to++,this.notify(e)}notify(e){xu();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{Ou()}}}function Kg(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Kg(r)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const jl=new WeakMap,cs=Symbol(""),Bl=Symbol(""),no=Symbol("");function It(t,e,n){if(un&&Le){let r=jl.get(t);r||jl.set(t,r=new Map);let s=r.get(n);s||(r.set(n,s=new Mu),s.map=r,s.key=n),s.track()}}function Hn(t,e,n,r,s,i){const o=jl.get(t);if(!o){to++;return}const c=l=>{l&&l.trigger()};if(xu(),e==="clear")o.forEach(c);else{const l=ae(t),u=l&&Nu(n);if(l&&n==="length"){const f=Number(r);o.forEach((d,g)=>{(g==="length"||g===no||!xn(g)&&g>=f)&&c(d)})}else switch((n!==void 0||o.has(void 0))&&c(o.get(n)),u&&c(o.get(no)),e){case"add":l?u&&c(o.get("length")):(c(o.get(cs)),Us(t)&&c(o.get(Bl)));break;case"delete":l||(c(o.get(cs)),Us(t)&&c(o.get(Bl)));break;case"set":Us(t)&&c(o.get(cs));break}}Ou()}function Ps(t){const e=Ce(t);return e===t?e:(It(e,"iterate",no),sn(t)?e:e.map(fn))}function fc(t){return It(t=Ce(t),"iterate",no),t}function Tn(t,e){return Xn(t)?Ws(ls(t)?fn(e):e):fn(e)}const _E={__proto__:null,[Symbol.iterator](){return ml(this,Symbol.iterator,t=>Tn(this,t))},concat(...t){return Ps(this).concat(...t.map(e=>ae(e)?Ps(e):e))},entries(){return ml(this,"entries",t=>(t[1]=Tn(this,t[1]),t))},every(t,e){return Un(this,"every",t,e,void 0,arguments)},filter(t,e){return Un(this,"filter",t,e,n=>n.map(r=>Tn(this,r)),arguments)},find(t,e){return Un(this,"find",t,e,n=>Tn(this,n),arguments)},findIndex(t,e){return Un(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Un(this,"findLast",t,e,n=>Tn(this,n),arguments)},findLastIndex(t,e){return Un(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Un(this,"forEach",t,e,void 0,arguments)},includes(...t){return _l(this,"includes",t)},indexOf(...t){return _l(this,"indexOf",t)},join(t){return Ps(this).join(t)},lastIndexOf(...t){return _l(this,"lastIndexOf",t)},map(t,e){return Un(this,"map",t,e,void 0,arguments)},pop(){return Ci(this,"pop")},push(...t){return Ci(this,"push",t)},reduce(t,...e){return Kf(this,"reduce",t,e)},reduceRight(t,...e){return Kf(this,"reduceRight",t,e)},shift(){return Ci(this,"shift")},some(t,e){return Un(this,"some",t,e,void 0,arguments)},splice(...t){return Ci(this,"splice",t)},toReversed(){return Ps(this).toReversed()},toSorted(t){return Ps(this).toSorted(t)},toSpliced(...t){return Ps(this).toSpliced(...t)},unshift(...t){return Ci(this,"unshift",t)},values(){return ml(this,"values",t=>Tn(this,t))}};function ml(t,e,n){const r=fc(t),s=r[e]();return r!==t&&!sn(t)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=n(i.value)),i}),s}const yE=Array.prototype;function Un(t,e,n,r,s,i){const o=fc(t),c=o!==t&&!sn(t),l=o[e];if(l!==yE[e]){const d=l.apply(t,i);return c?fn(d):d}let u=n;o!==t&&(c?u=function(d,g){return n.call(this,Tn(t,d),g,t)}:n.length>2&&(u=function(d,g){return n.call(this,d,g,t)}));const f=l.call(o,u,r);return c&&s?s(f):f}function Kf(t,e,n,r){const s=fc(t),i=s!==t&&!sn(t);let o=n,c=!1;s!==t&&(i?(c=r.length===0,o=function(u,f,d){return c&&(c=!1,u=Tn(t,u)),n.call(this,u,Tn(t,f),d,t)}):n.length>3&&(o=function(u,f,d){return n.call(this,u,f,d,t)}));const l=s[e](o,...r);return c?Tn(t,l):l}function _l(t,e,n){const r=Ce(t);It(r,"iterate",no);const s=r[e](...n);return(s===-1||s===!1)&&ju(n[0])?(n[0]=Ce(n[0]),r[e](...n)):s}function Ci(t,e,n=[]){Jn(),xu();const r=Ce(t)[e].apply(t,n);return Ou(),Yn(),r}const vE=Pu("__proto__,__v_isRef,__isVue"),Qg=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(xn));function EE(t){xn(t)||(t=String(t));const e=Ce(this);return It(e,"has",t),e.hasOwnProperty(t)}class Jg{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){if(n==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?kE:em:i?Zg:Xg).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=ae(e);if(!s){let l;if(o&&(l=_E[n]))return l;if(n==="hasOwnProperty")return EE}const c=Reflect.get(e,n,Rt(e)?e:r);if((xn(n)?Qg.has(n):vE(n))||(s||It(e,"get",n),i))return c;if(Rt(c)){const l=o&&Nu(n)?c:c.value;return s&&De(l)?ql(l):l}return De(c)?s?ql(c):dc(c):c}}class Yg extends Jg{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];const o=ae(e)&&Nu(n);if(!this._isShallow){const u=Xn(i);if(!sn(r)&&!Xn(r)&&(i=Ce(i),r=Ce(r)),!o&&Rt(i)&&!Rt(r))return u||(i.value=r),!0}const c=o?Number(n)<e.length:Ne(e,n),l=Reflect.set(e,n,r,Rt(e)?e:s);return e===Ce(s)&&l&&(c?In(r,i)&&Hn(e,"set",n,r):Hn(e,"add",n,r)),l}deleteProperty(e,n){const r=Ne(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&Hn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!xn(n)||!Qg.has(n))&&It(e,"has",n),r}ownKeys(e){return It(e,"iterate",ae(e)?"length":cs),Reflect.ownKeys(e)}}class TE extends Jg{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const wE=new Yg,IE=new TE,AE=new Yg(!0);const $l=t=>t,ra=t=>Reflect.getPrototypeOf(t);function bE(t,e,n){return function(...r){const s=this.__v_raw,i=Ce(s),o=Us(i),c=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=s[t](...r),f=n?$l:e?Ws:fn;return!e&&It(i,"iterate",l?Bl:cs),it(Object.create(u),{next(){const{value:d,done:g}=u.next();return g?{value:d,done:g}:{value:c?[f(d[0]),f(d[1])]:f(d),done:g}}})}}function sa(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function RE(t,e){const n={get(s){const i=this.__v_raw,o=Ce(i),c=Ce(s);t||(In(s,c)&&It(o,"get",s),It(o,"get",c));const{has:l}=ra(o),u=e?$l:t?Ws:fn;if(l.call(o,s))return u(i.get(s));if(l.call(o,c))return u(i.get(c));i!==o&&i.get(s)},get size(){const s=this.__v_raw;return!t&&It(Ce(s),"iterate",cs),s.size},has(s){const i=this.__v_raw,o=Ce(i),c=Ce(s);return t||(In(s,c)&&It(o,"has",s),It(o,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const o=this,c=o.__v_raw,l=Ce(c),u=e?$l:t?Ws:fn;return!t&&It(l,"iterate",cs),c.forEach((f,d)=>s.call(i,u(f),u(d),o))}};return it(n,t?{add:sa("add"),set:sa("set"),delete:sa("delete"),clear:sa("clear")}:{add(s){const i=Ce(this),o=ra(i),c=Ce(s),l=!e&&!sn(s)&&!Xn(s)?c:s;return o.has.call(i,l)||In(s,l)&&o.has.call(i,s)||In(c,l)&&o.has.call(i,c)||(i.add(l),Hn(i,"add",l,l)),this},set(s,i){!e&&!sn(i)&&!Xn(i)&&(i=Ce(i));const o=Ce(this),{has:c,get:l}=ra(o);let u=c.call(o,s);u||(s=Ce(s),u=c.call(o,s));const f=l.call(o,s);return o.set(s,i),u?In(i,f)&&Hn(o,"set",s,i):Hn(o,"add",s,i),this},delete(s){const i=Ce(this),{has:o,get:c}=ra(i);let l=o.call(i,s);l||(s=Ce(s),l=o.call(i,s)),c&&c.call(i,s);const u=i.delete(s);return l&&Hn(i,"delete",s,void 0),u},clear(){const s=Ce(this),i=s.size!==0,o=s.clear();return i&&Hn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=bE(s,t,e)}),n}function Fu(t,e){const n=RE(t,e);return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Ne(n,s)&&s in r?n:r,s,i)}const SE={get:Fu(!1,!1)},CE={get:Fu(!1,!0)},PE={get:Fu(!0,!1)};const Xg=new WeakMap,Zg=new WeakMap,em=new WeakMap,kE=new WeakMap;function NE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dc(t){return Xn(t)?t:Uu(t,!1,wE,SE,Xg)}function tm(t){return Uu(t,!1,AE,CE,Zg)}function ql(t){return Uu(t,!0,IE,PE,em)}function Uu(t,e,n,r,s){if(!De(t)||t.__v_raw&&!(e&&t.__v_isReactive)||t.__v_skip||!Object.isExtensible(t))return t;const i=s.get(t);if(i)return i;const o=NE(nE(t));if(o===0)return t;const c=new Proxy(t,o===2?r:n);return s.set(t,c),c}function ls(t){return Xn(t)?ls(t.__v_raw):!!(t&&t.__v_isReactive)}function Xn(t){return!!(t&&t.__v_isReadonly)}function sn(t){return!!(t&&t.__v_isShallow)}function ju(t){return t?!!t.__v_raw:!1}function Ce(t){const e=t&&t.__v_raw;return e?Ce(e):t}function nm(t){return!Ne(t,"__v_skip")&&Object.isExtensible(t)&&Lg(t,"__v_skip",!0),t}const fn=t=>De(t)?dc(t):t,Ws=t=>De(t)?ql(t):t;function Rt(t){return t?t.__v_isRef===!0:!1}function qt(t){return rm(t,!1)}function DE(t){return rm(t,!0)}function rm(t,e){return Rt(t)?t:new VE(t,e)}class VE{constructor(e,n){this.dep=new Mu,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:Ce(e),this._value=n?e:fn(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,r=this.__v_isShallow||sn(e)||Xn(e);e=r?e:Ce(e),In(e,n)&&(this._rawValue=e,this._value=r?e:fn(e),this.dep.trigger())}}function ct(t){return Rt(t)?t.value:t}const xE={get:(t,e,n)=>e==="__v_raw"?t:ct(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Rt(s)&&!Rt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function sm(t){return ls(t)?t:new Proxy(t,xE)}class OE{constructor(e,n,r){this.fn=e,this.setter=n,this._value=void 0,this.dep=new Mu(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=to-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Le!==this)return qg(this,!0),!0}get value(){const e=this.dep.track();return Wg(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function LE(t,e,n=!1){let r,s;return pe(t)?r=t:(r=t.get,s=t.set),new OE(r,s,n)}const ia={},Sa=new WeakMap;let ns;function ME(t,e=!1,n=ns){if(n){let r=Sa.get(n);r||Sa.set(n,r=[]),r.push(t)}}function FE(t,e,n=Oe){const{immediate:r,deep:s,once:i,scheduler:o,augmentJob:c,call:l}=n,u=q=>s?q:sn(q)||s===!1||s===0?Gn(q,1):Gn(q);let f,d,g,_,S=!1,P=!1;if(Rt(t)?(d=()=>t.value,S=sn(t)):ls(t)?(d=()=>u(t),S=!0):ae(t)?(P=!0,S=t.some(q=>ls(q)||sn(q)),d=()=>t.map(q=>{if(Rt(q))return q.value;if(ls(q))return u(q);if(pe(q))return l?l(q,2):q()})):pe(t)?e?d=l?()=>l(t,2):t:d=()=>{if(g){Jn();try{g()}finally{Yn()}}const q=ns;ns=f;try{return l?l(t,3,[_]):t(_)}finally{ns=q}}:d=bn,e&&s){const q=d,Y=s===!0?1/0:s;d=()=>Gn(q(),Y)}const N=pE(),j=()=>{f.stop(),N&&N.active&&ku(N.effects,f)};if(i&&e){const q=e;e=(...Y)=>{const Z=q(...Y);return j(),Z}}let V=P?new Array(t.length).fill(ia):ia;const $=q=>{if(!(!(f.flags&1)||!f.dirty&&!q))if(e){const Y=f.run();if(q||s||S||(P?Y.some((Z,E)=>In(Z,V[E])):In(Y,V))){g&&g();const Z=ns;ns=f;try{const E=[Y,V===ia?void 0:P&&V[0]===ia?[]:V,_];V=Y,l?l(e,3,E):e(...E)}finally{ns=Z}}}else f.run()};return c&&c($),f=new Bg(d),f.scheduler=o?()=>o($,!1):$,_=q=>ME(q,!1,f),g=f.onStop=()=>{const q=Sa.get(f);if(q){if(l)l(q,4);else for(const Y of q)Y();Sa.delete(f)}},e?r?$(!0):V=f.run():o?o($.bind(null,!0),!0):f.run(),j.pause=f.pause.bind(f),j.resume=f.resume.bind(f),j.stop=j,j}function Gn(t,e=1/0,n){if(e<=0||!De(t)||t.__v_skip||(n=n||new Map,(n.get(t)||0)>=e))return t;if(n.set(t,e),e--,Rt(t))Gn(t.value,e,n);else if(ae(t))for(let r=0;r<t.length;r++)Gn(t[r],e,n);else if(ri(t)||Us(t))t.forEach(r=>{Gn(r,e,n)});else if(Og(t)){for(const r in t)Gn(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&Gn(t[r],e,n)}return t}/**
* @vue/runtime-core v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Io(t,e,n,r){try{return r?t(...r):t()}catch(s){pc(s,e,n)}}function on(t,e,n,r){if(pe(t)){const s=Io(t,e,n,r);return s&&Vg(s)&&s.catch(i=>{pc(i,e,n)}),s}if(ae(t)){const s=[];for(let i=0;i<t.length;i++)s.push(on(t[i],e,n,r));return s}}function pc(t,e,n,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Oe;if(e){let c=e.parent;const l=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${n}`;for(;c;){const f=c.ec;if(f){for(let d=0;d<f.length;d++)if(f[d](t,l,u)===!1)return}c=c.parent}if(i){Jn(),Io(i,null,10,[t,l,u]),Yn();return}}UE(t,n,s,r,o)}function UE(t,e,n,r=!0,s=!1){if(s)throw t;console.error(t)}const xt=[];let vn=-1;const js=[];let yr=null,ks=0;const im=Promise.resolve();let Ca=null;function Bu(t){const e=Ca||im;return t?e.then(this?t.bind(this):t):e}function jE(t){let e=vn+1,n=xt.length;for(;e<n;){const r=e+n>>>1,s=xt[r],i=ro(s);i<t||i===t&&s.flags&2?e=r+1:n=r}return e}function $u(t){if(!(t.flags&1)){const e=ro(t),n=xt[xt.length-1];!n||!(t.flags&2)&&e>=ro(n)?xt.push(t):xt.splice(jE(e),0,t),t.flags|=1,om()}}function om(){Ca||(Ca=im.then(cm))}function BE(t){ae(t)?js.push(...t):yr&&t.id===-1?yr.splice(ks+1,0,t):t.flags&1||(js.push(t),t.flags|=1),om()}function Qf(t,e,n=vn+1){for(;n<xt.length;n++){const r=xt[n];if(r&&r.flags&2){if(t&&r.id!==t.uid)continue;xt.splice(n,1),n--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function am(t){if(js.length){const e=[...new Set(js)].sort((n,r)=>ro(n)-ro(r));if(js.length=0,yr){yr.push(...e);return}for(yr=e,ks=0;ks<yr.length;ks++){const n=yr[ks];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}yr=null,ks=0}}const ro=t=>t.id==null?t.flags&2?-1:1/0:t.id;function cm(t){try{for(vn=0;vn<xt.length;vn++){const e=xt[vn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Io(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;vn<xt.length;vn++){const e=xt[vn];e&&(e.flags&=-2)}vn=-1,xt.length=0,am(),Ca=null,(xt.length||js.length)&&cm()}}let Qt=null,lm=null;function Pa(t){const e=Qt;return Qt=t,lm=t&&t.type.__scopeId||null,e}function Rr(t,e=Qt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Va(-1);const i=Pa(e),o=us.length;let c;try{c=t(...s)}finally{for(let l=us.length;l>o;l--)Fm();Pa(i),r._d&&Va(1)}return c};return r._n=!0,r._c=!0,r._d=!0,r}function mk(t,e){if(Qt===null)return t;const n=Tc(Qt),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,c,l=Oe]=e[s];i&&(pe(i)&&(i={mounted:i,updated:i}),i.deep&&Gn(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:c,modifiers:l}))}return t}function Xr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const c=s[o];i&&(c.oldValue=i[o].value);let l=c.dir[r];l&&(Jn(),on(l,n,8,[t.el,c,t,e]),Yn())}}function pa(t,e){if(At){let n=At.provides;const r=At.parent&&At.parent.provides;r===n&&(n=At.provides=Object.create(r)),n[t]=e}}function hn(t,e,n=!1){const r=Bm();if(r||Bs){let s=Bs?Bs._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&t in s)return s[t];if(arguments.length>1)return n&&pe(e)?e.call(r&&r.proxy):e}}const $E=Symbol.for("v-scx"),qE=()=>hn($E);function Pr(t,e,n){return um(t,e,n)}function um(t,e,n=Oe){const{immediate:r,deep:s,flush:i,once:o}=n,c=it({},n),l=e&&r||!e&&i!=="post";let u;if(ao){if(i==="sync"){const _=qE();u=_.__watcherHandles||(_.__watcherHandles=[])}else if(!l){const _=()=>{};return _.stop=bn,_.resume=bn,_.pause=bn,_}}const f=At;c.call=(_,S,P)=>on(_,f,S,P);let d=!1;i==="post"?c.scheduler=_=>{Nt(_,f&&f.suspense)}:i!=="sync"&&(d=!0,c.scheduler=(_,S)=>{S?_():$u(_)}),c.augmentJob=_=>{e&&(_.flags|=4),d&&(_.flags|=2,f&&(_.id=f.uid,_.i=f))};const g=FE(t,e,c);return ao&&(u?u.push(g):l&&g()),g}function HE(t,e,n){const r=this.proxy,s=Ue(t)?t.includes(".")?hm(r,t):()=>r[t]:t.bind(r,r);let i;pe(e)?i=e:(i=e.handler,n=e);const o=bo(this),c=um(s,i.bind(r),n);return o(),c}function hm(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}const _r=new WeakMap,fm=Symbol("_vte"),dm=t=>t.__isTeleport,ss=t=>t&&(t.disabled||t.disabled===""),GE=t=>t&&(t.defer||t.defer===""),Jf=t=>typeof SVGElement<"u"&&t instanceof SVGElement,Yf=t=>typeof MathMLElement=="function"&&t instanceof MathMLElement,Hl=(t,e)=>{const n=t&&t.to;return Ue(n)?e?e(n):null:n},WE={name:"Teleport",__isTeleport:!0,process(t,e,n,r,s,i,o,c,l,u){const{mc:f,pc:d,pbc:g,o:{insert:_,querySelector:S,createText:P,createComment:N,parentNode:j}}=u,V=ss(e.props);let{dynamicChildren:$}=e;const q=(E,y,v)=>{E.shapeFlag&16&&f(E.children,y,v,s,i,o,c,l)},Y=(E=e)=>{const y=ss(E.props),v=E.target=Hl(E.props,S),A=Gl(v,E,P,_);v&&(o!=="svg"&&Jf(v)?o="svg":o!=="mathml"&&Yf(v)&&(o="mathml"),s&&s.isCE&&(s.ce._teleportTargets||(s.ce._teleportTargets=new Set)).add(v),y||(q(E,v,A),Vi(E,!1)))},Z=E=>{const y=()=>{if(_r.get(E)===y){if(_r.delete(E),ss(E.props)){const v=j(E.el)||n;q(E,v,E.anchor),Vi(E,!0)}Y(E)}};_r.set(E,y),Nt(y,i)};if(t==null){const E=e.el=P(""),y=e.anchor=P("");if(_(E,n,r),_(y,n,r),GE(e.props)||i&&i.pendingBranch){Z(e);return}V&&(q(e,n,y),Vi(e,!0)),Y()}else{e.el=t.el;const E=e.anchor=t.anchor,y=_r.get(t);if(y){y.flags|=8,_r.delete(t),Z(e);return}e.targetStart=t.targetStart;const v=e.target=t.target,A=e.targetAnchor=t.targetAnchor,R=ss(t.props),I=R?n:v,w=R?E:A;if(o==="svg"||Jf(v)?o="svg":(o==="mathml"||Yf(v))&&(o="mathml"),$?(g(t.dynamicChildren,$,I,s,i,o,c),Gu(t,e,!0)):l||d(t,e,I,w,s,i,o,c,!1),V)R?e.props&&t.props&&e.props.to!==t.props.to&&(e.props.to=t.props.to):oa(e,n,E,u,1);else if((e.props&&e.props.to)!==(t.props&&t.props.to)){const fe=Hl(e.props,S);fe&&(e.target=fe,oa(e,fe,null,u,0))}else R&&oa(e,v,A,u,1);Vi(e,V)}},remove(t,e,n,{um:r,o:{remove:s}},i){const{shapeFlag:o,children:c,anchor:l,targetStart:u,targetAnchor:f,target:d,props:g}=t,_=ss(g),S=i||!_,P=_r.get(t);if(P&&(P.flags|=8,_r.delete(t)),d&&(s(u),s(f)),i&&s(l),!P&&(_||d)&&o&16)for(let N=0;N<c.length;N++){const j=c[N];r(j,e,n,S,!!j.dynamicChildren)}},move:oa,hydrate:zE};function oa(t,e,n,{o:{insert:r},m:s},i=2){i===0&&r(t.targetAnchor,e,n);const{el:o,anchor:c,shapeFlag:l,children:u,props:f}=t,d=i===2;if(d&&r(o,e,n),!_r.has(t)&&(!d||ss(f))&&l&16)for(let g=0;g<u.length;g++)s(u[g],e,n,2);d&&r(c,e,n)}function zE(t,e,n,r,s,i,{o:{nextSibling:o,parentNode:c,querySelector:l,insert:u,createText:f}},d){function g(N,j){let V=j;for(;V;){if(V&&V.nodeType===8){if(V.data==="teleport start anchor")e.targetStart=V;else if(V.data==="teleport anchor"){e.targetAnchor=V,N._lpa=e.targetAnchor&&o(e.targetAnchor);break}}V=o(V)}}function _(N,j){j.anchor=d(o(N),j,c(N),n,r,s,i)}const S=e.target=Hl(e.props,l),P=ss(e.props);if(S){const N=S._lpa||S.firstChild;e.shapeFlag&16&&(P?(_(t,e),g(S,N),e.targetAnchor||Gl(S,e,f,u,c(t)===S?t:null)):(e.anchor=o(t),g(S,N),e.targetAnchor||Gl(S,e,f,u),d(N&&o(N),e,S,n,r,s,i))),Vi(e,P)}else P&&e.shapeFlag&16&&(_(t,e),e.targetStart=t,e.targetAnchor=o(t));return e.anchor&&o(e.anchor)}const _k=WE;function Vi(t,e){const n=t.ctx;if(n&&n.ut){let r,s;for(e?(r=t.el,s=t.anchor):(r=t.targetStart,s=t.targetAnchor);r&&r!==s;)r.nodeType===1&&r.setAttribute("data-v-owner",n.uid),r=r.nextSibling;n.ut()}}function Gl(t,e,n,r,s=null){const i=e.targetStart=n(""),o=e.targetAnchor=n("");return i[fm]=o,t&&(r(i,t,s),r(o,t,s)),o}const rn=Symbol("_leaveCb"),Pi=Symbol("_enterCb");function KE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return _c(()=>{t.isMounted=!0}),Tm(()=>{t.isUnmounting=!0}),t}const nn=[Function,Array],pm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:nn,onEnter:nn,onAfterEnter:nn,onEnterCancelled:nn,onBeforeLeave:nn,onLeave:nn,onAfterLeave:nn,onLeaveCancelled:nn,onBeforeAppear:nn,onAppear:nn,onAfterAppear:nn,onAppearCancelled:nn},gm=t=>{const e=t.subTree;return e.component?gm(e.component):e},QE={name:"BaseTransition",props:pm,setup(t,{slots:e}){const n=Bm(),r=KE();return()=>{const s=e.default&&ym(e.default(),!0),i=s&&s.length?mm(s):n.subTree?Vt():void 0;if(!i)return;const o=Ce(t),{mode:c}=o;if(r.isLeaving)return yl(i);const l=Xf(i);if(!l)return yl(i);let u=Wl(l,o,r,n,d=>u=d);l.type!==Lt&&so(l,u);let f=n.subTree&&Xf(n.subTree);if(f&&f.type!==Lt&&!is(f,l)&&gm(n).type!==Lt){let d=Wl(f,o,r,n);if(so(f,d),c==="out-in"&&l.type!==Lt)return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.job.flags&8||n.update(),delete d.afterLeave,f=void 0},yl(i);c==="in-out"&&l.type!==Lt?d.delayLeave=(g,_,S)=>{const P=_m(r,f);P[String(f.key)]=f,g[rn]=()=>{_(),g[rn]=void 0,delete u.delayedLeave,f=void 0},u.delayedLeave=()=>{S(),delete u.delayedLeave,f=void 0}}:f=void 0}else f&&(f=void 0);return i}}};function mm(t){let e=t[0];if(t.length>1){for(const n of t)if(n.type!==Lt){e=n;break}}return e}const JE=QE;function _m(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Wl(t,e,n,r,s){const{appear:i,mode:o,persisted:c=!1,onBeforeEnter:l,onEnter:u,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:g,onLeave:_,onAfterLeave:S,onLeaveCancelled:P,onBeforeAppear:N,onAppear:j,onAfterAppear:V,onAppearCancelled:$}=e,q=String(t.key),Y=_m(n,t),Z=(v,A)=>{v&&on(v,r,9,A)},E=(v,A)=>{const R=A[1];Z(v,A),ae(v)?v.every(I=>I.length<=1)&&R():v.length<=1&&R()},y={mode:o,persisted:c,beforeEnter(v){let A=l;if(!n.isMounted)if(i)A=N||l;else return;v[rn]&&v[rn](!0);const R=Y[q];R&&is(t,R)&&R.el[rn]&&R.el[rn](),Z(A,[v])},enter(v){if(Y[q]===t)return;let A=u,R=f,I=d;if(!n.isMounted)if(i)A=j||u,R=V||f,I=$||d;else return;let w=!1;v[Pi]=Ye=>{w||(w=!0,Ye?Z(I,[v]):Z(R,[v]),y.delayedLeave&&y.delayedLeave(),v[Pi]=void 0)};const fe=v[Pi].bind(null,!1);A?E(A,[v,fe]):fe()},leave(v,A){const R=String(t.key);if(v[Pi]&&v[Pi](!0),n.isUnmounting)return A();Z(g,[v]);let I=!1;v[rn]=fe=>{I||(I=!0,A(),fe?Z(P,[v]):Z(S,[v]),v[rn]=void 0,Y[R]===t&&delete Y[R])};const w=v[rn].bind(null,!1);Y[R]=t,_?E(_,[v,w]):w()},clone(v){const A=Wl(v,e,n,r,s);return s&&s(A),A}};return y}function yl(t){if(gc(t))return t=Or(t),t.children=null,t}function Xf(t){if(!gc(t))return dm(t.type)&&t.children?mm(t.children):t;if(t.component)return t.component.subTree;const{shapeFlag:e,children:n}=t;if(n){if(e&16)return n[0];if(e&32&&pe(n.default))return n.default()}}function so(t,e){t.shapeFlag&6&&t.component?(t.transition=e,so(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ym(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ot?(o.patchFlag&128&&s++,r=r.concat(ym(o.children,e,c))):(e||o.type!==Lt)&&r.push(c!=null?Or(o,{key:c}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function vs(t,e){return pe(t)?it({name:t.name},e,{setup:t}):t}function vm(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Zf(t,e){let n;return!!((n=Object.getOwnPropertyDescriptor(t,e))&&!n.configurable)}const ka=new WeakMap;function Hi(t,e,n,r,s=!1){if(ae(t)){t.forEach((P,N)=>Hi(P,e&&(ae(e)?e[N]:e),n,r,s));return}if(Gi(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Hi(t,e,n,r.component.subTree);return}const i=r.shapeFlag&4?Tc(r.component):r.el,o=s?null:i,{i:c,r:l}=t,u=e&&e.r,f=c.refs===Oe?c.refs={}:c.refs,d=c.setupState,g=Ce(d),_=d===Oe?Dg:P=>Zf(f,P)?!1:Ne(g,P),S=(P,N)=>!(N&&Zf(f,N));if(u!=null&&u!==l){if(ed(e),Ue(u))f[u]=null,_(u)&&(d[u]=null);else if(Rt(u)){const P=e;S(u,P.k)&&(u.value=null),P.k&&(f[P.k]=null)}}if(pe(l))Io(l,c,12,[o,f]);else{const P=Ue(l),N=Rt(l);if(P||N){const j=()=>{if(t.f){const V=P?_(l)?d[l]:f[l]:S()||!t.k?l.value:f[t.k];if(s)ae(V)&&ku(V,i);else if(ae(V))V.includes(i)||V.push(i);else if(P)f[l]=[i],_(l)&&(d[l]=f[l]);else{const $=[i];S(l,t.k)&&(l.value=$),t.k&&(f[t.k]=$)}}else P?(f[l]=o,_(l)&&(d[l]=o)):N&&(S(l,t.k)&&(l.value=o),t.k&&(f[t.k]=o))};if(o){const V=()=>{j(),ka.delete(t)};V.id=-1,ka.set(t,V),Nt(V,n)}else ed(t),j()}}}function ed(t){const e=ka.get(t);e&&(e.flags|=8,ka.delete(t))}hc().requestIdleCallback;hc().cancelIdleCallback;const Gi=t=>!!t.type.__asyncLoader,gc=t=>t.type.__isKeepAlive;function YE(t,e){Em(t,"a",e)}function XE(t,e){Em(t,"da",e)}function Em(t,e,n=At){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(mc(e,r,n),n){let s=n.parent;for(;s&&s.parent;)gc(s.parent.vnode)&&ZE(r,e,n,s),s=s.parent}}function ZE(t,e,n,r){const s=mc(e,t,r,!0);yc(()=>{ku(r[e],s)},n)}function mc(t,e,n=At,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{Jn();const c=bo(n),l=on(e,n,t,o);return c(),Yn(),l});return r?s.unshift(i):s.push(i),i}}const sr=t=>(e,n=At)=>{(!ao||t==="sp")&&mc(t,(...r)=>e(...r),n)},eT=sr("bm"),_c=sr("m"),tT=sr("bu"),nT=sr("u"),Tm=sr("bum"),yc=sr("um"),rT=sr("sp"),sT=sr("rtg"),iT=sr("rtc");function oT(t,e=At){mc("ec",t,e)}const aT="components";function Ao(t,e){return lT(aT,t,!0,e)||t}const cT=Symbol.for("v-ndc");function lT(t,e,n=!0,r=!1){const s=Qt||At;if(s){const i=s.type;{const c=WT(i,!1);if(c&&(c===e||c===Ft(e)||c===lc(Ft(e))))return i}const o=td(s[t]||i[t],e)||td(s.appContext[t],e);return!o&&r?i:o}}function td(t,e){return t&&(t[e]||t[Ft(e)]||t[lc(Ft(e))])}function Na(t,e,n,r){let s;const i=n,o=ae(t);if(o||Ue(t)){const c=o&&ls(t);let l=!1,u=!1;c&&(l=!sn(t),u=Xn(t),t=fc(t)),s=new Array(t.length);for(let f=0,d=t.length;f<d;f++)s[f]=e(l?u?Ws(fn(t[f])):fn(t[f]):t[f],f,void 0,i)}else if(typeof t=="number"){s=new Array(t);for(let c=0;c<t;c++)s[c]=e(c+1,c,void 0,i)}else if(De(t))if(t[Symbol.iterator])s=Array.from(t,(c,l)=>e(c,l,void 0,i));else{const c=Object.keys(t);s=new Array(c.length);for(let l=0,u=c.length;l<u;l++){const f=c[l];s[l]=e(t[f],f,l,i)}}else s=[];return s}const zl=t=>t?$m(t)?Tc(t):zl(t.parent):null,Wi=it(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zl(t.parent),$root:t=>zl(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Im(t),$forceUpdate:t=>t.f||(t.f=()=>{$u(t.update)}),$nextTick:t=>t.n||(t.n=Bu.bind(t.proxy)),$watch:t=>HE.bind(t)}),vl=(t,e)=>t!==Oe&&!t.__isScriptSetup&&Ne(t,e),uT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:c,appContext:l}=t;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(vl(r,e))return o[e]=1,r[e];if(s!==Oe&&Ne(s,e))return o[e]=2,s[e];if(Ne(i,e))return o[e]=3,i[e];if(n!==Oe&&Ne(n,e))return o[e]=4,n[e];Kl&&(o[e]=0)}}const u=Wi[e];let f,d;if(u)return e==="$attrs"&&It(t.attrs,"get",""),u(t);if((f=c.__cssModules)&&(f=f[e]))return f;if(n!==Oe&&Ne(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ne(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return vl(s,e)?(s[e]=n,!0):r!==Oe&&Ne(r,e)?(r[e]=n,!0):Ne(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,props:i,type:o}},c){let l;return!!(n[c]||t!==Oe&&c[0]!=="$"&&Ne(t,c)||vl(e,c)||Ne(i,c)||Ne(r,c)||Ne(Wi,c)||Ne(s.config.globalProperties,c)||(l=o.__cssModules)&&l[c])},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ne(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function nd(t){return ae(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Kl=!0;function hT(t){const e=Im(t),n=t.proxy,r=t.ctx;Kl=!1,e.beforeCreate&&rd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:c,provide:l,inject:u,created:f,beforeMount:d,mounted:g,beforeUpdate:_,updated:S,activated:P,deactivated:N,beforeDestroy:j,beforeUnmount:V,destroyed:$,unmounted:q,render:Y,renderTracked:Z,renderTriggered:E,errorCaptured:y,serverPrefetch:v,expose:A,inheritAttrs:R,components:I,directives:w,filters:fe}=e;if(u&&fT(u,r,null),o)for(const Ie in o){const Ee=o[Ie];pe(Ee)&&(r[Ie]=Ee.bind(n))}if(s){const Ie=s.call(n,n);De(Ie)&&(t.data=dc(Ie))}if(Kl=!0,i)for(const Ie in i){const Ee=i[Ie],Ht=pe(Ee)?Ee.bind(n,n):pe(Ee.get)?Ee.get.bind(n,n):bn,an=!pe(Ee)&&pe(Ee.set)?Ee.set.bind(n):bn,Zt=bt({get:Ht,set:an});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>Zt.value,set:Be=>Zt.value=Be})}if(c)for(const Ie in c)wm(c[Ie],r,n,Ie);if(l){const Ie=pe(l)?l.call(n):l;Reflect.ownKeys(Ie).forEach(Ee=>{pa(Ee,Ie[Ee])})}f&&rd(f,t,"c");function je(Ie,Ee){ae(Ee)?Ee.forEach(Ht=>Ie(Ht.bind(n))):Ee&&Ie(Ee.bind(n))}if(je(eT,d),je(_c,g),je(tT,_),je(nT,S),je(YE,P),je(XE,N),je(oT,y),je(iT,Z),je(sT,E),je(Tm,V),je(yc,q),je(rT,v),ae(A))if(A.length){const Ie=t.exposed||(t.exposed={});A.forEach(Ee=>{Object.defineProperty(Ie,Ee,{get:()=>n[Ee],set:Ht=>n[Ee]=Ht,enumerable:!0})})}else t.exposed||(t.exposed={});Y&&t.render===bn&&(t.render=Y),R!=null&&(t.inheritAttrs=R),I&&(t.components=I),w&&(t.directives=w),v&&vm(t)}function fT(t,e,n=bn){ae(t)&&(t=Ql(t));for(const r in t){const s=t[r];let i;De(s)?"default"in s?i=hn(s.from||r,s.default,!0):i=hn(s.from||r):i=hn(s),Rt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function rd(t,e,n){on(ae(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function wm(t,e,n,r){let s=r.includes(".")?hm(n,r):()=>n[r];if(Ue(t)){const i=e[t];pe(i)&&Pr(s,i)}else if(pe(t))Pr(s,t.bind(n));else if(De(t))if(ae(t))t.forEach(i=>wm(i,e,n,r));else{const i=pe(t.handler)?t.handler.bind(n):e[t.handler];pe(i)&&Pr(s,i,t)}}function Im(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,c=i.get(e);let l;return c?l=c:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(u=>Da(l,u,o,!0)),Da(l,e,o)),De(e)&&i.set(e,l),l}function Da(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Da(t,i,n,!0),s&&s.forEach(o=>Da(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const c=dT[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const dT={data:sd,props:id,emits:id,methods:xi,computed:xi,beforeCreate:kt,created:kt,beforeMount:kt,mounted:kt,beforeUpdate:kt,updated:kt,beforeDestroy:kt,beforeUnmount:kt,destroyed:kt,unmounted:kt,activated:kt,deactivated:kt,errorCaptured:kt,serverPrefetch:kt,components:xi,directives:xi,watch:gT,provide:sd,inject:pT};function sd(t,e){return e?t?function(){return it(pe(t)?t.call(this,this):t,pe(e)?e.call(this,this):e)}:e:t}function pT(t,e){return xi(Ql(t),Ql(e))}function Ql(t){if(ae(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function kt(t,e){return t?[...new Set([].concat(t,e))]:e}function xi(t,e){return t?it(Object.create(null),t,e):e}function id(t,e){return t?ae(t)&&ae(e)?[...new Set([...t,...e])]:it(Object.create(null),nd(t),nd(e??{})):e}function gT(t,e){if(!t)return e;if(!e)return t;const n=it(Object.create(null),t);for(const r in e)n[r]=kt(t[r],e[r]);return n}function Am(){return{app:null,config:{isNativeTag:Dg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let mT=0;function _T(t,e){return function(r,s=null){pe(r)||(r=it({},r)),s!=null&&!De(s)&&(s=null);const i=Am(),o=new WeakSet,c=[];let l=!1;const u=i.app={_uid:mT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:KT,get config(){return i.config},set config(f){},use(f,...d){return o.has(f)||(f&&pe(f.install)?(o.add(f),f.install(u,...d)):pe(f)&&(o.add(f),f(u,...d))),u},mixin(f){return i.mixins.includes(f)||i.mixins.push(f),u},component(f,d){return d?(i.components[f]=d,u):i.components[f]},directive(f,d){return d?(i.directives[f]=d,u):i.directives[f]},mount(f,d,g){if(!l){const _=u._ceVNode||Je(r,s);return _.appContext=i,g===!0?g="svg":g===!1&&(g=void 0),t(_,f,g),l=!0,u._container=f,f.__vue_app__=u,Tc(_.component)}},onUnmount(f){c.push(f)},unmount(){l&&(on(c,u._instance,16),t(null,u._container),delete u._container.__vue_app__)},provide(f,d){return i.provides[f]=d,u},runWithContext(f){const d=Bs;Bs=u;try{return f()}finally{Bs=d}}};return u}}let Bs=null;const yT=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ft(e)}Modifiers`]||t[`${Hr(e)}Modifiers`];function vT(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||Oe;let s=n;const i=e.startsWith("update:"),o=i&&yT(r,e.slice(7));o&&(o.trim&&(s=n.map(f=>Ue(f)?f.trim():f)),o.number&&(s=n.map(uc)));let c,l=r[c=dl(e)]||r[c=dl(Ft(e))];!l&&i&&(l=r[c=dl(Hr(e))]),l&&on(l,t,6,s);const u=r[c+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,on(u,t,6,s)}}const ET=new WeakMap;function bm(t,e,n=!1){const r=n?ET:e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},c=!1;if(!pe(t)){const l=u=>{const f=bm(u,e,!0);f&&(c=!0,it(o,f))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!c?(De(t)&&r.set(t,null),null):(ae(i)?i.forEach(l=>o[l]=null):it(o,i),De(t)&&r.set(t,o),o)}function vc(t,e){return!t||!oc(e)?!1:(e=e.slice(2),e=e==="Once"?e:e.replace(/Once$/,""),Ne(t,e[0].toLowerCase()+e.slice(1))||Ne(t,Hr(e))||Ne(t,e))}function od(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[i],slots:o,attrs:c,emit:l,render:u,renderCache:f,props:d,data:g,setupState:_,ctx:S,inheritAttrs:P}=t,N=Pa(t);let j,V;try{if(n.shapeFlag&4){const q=s||r,Y=q;j=wn(u.call(Y,q,f,d,_,g,S)),V=c}else{const q=e;j=wn(q.length>1?q(d,{attrs:c,slots:o,emit:l}):q(d,null)),V=e.props?c:TT(c)}}catch(q){us.length=0,pc(q,t,1),j=Je(Lt)}let $=j;if(V&&P!==!1){const q=Object.keys(V),{shapeFlag:Y}=$;q.length&&Y&7&&(i&&q.some(ac)&&(V=wT(V,i)),$=Or($,V,!1,!0))}return n.dirs&&($=Or($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&so($,n.transition),j=$,Pa(N),j}const TT=t=>{let e;for(const n in t)(n==="class"||n==="style"||oc(n))&&((e||(e={}))[n]=t[n]);return e},wT=(t,e)=>{const n={};for(const r in t)(!ac(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function IT(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:c,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?ad(r,o,u):!!o;if(l&8){const f=e.dynamicProps;for(let d=0;d<f.length;d++){const g=f[d];if(Rm(o,r,g)&&!vc(u,g))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===o?!1:r?o?ad(r,o,u):!0:!!o;return!1}function ad(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(Rm(e,t,i)&&!vc(n,i))return!0}return!1}function Rm(t,e,n){const r=t[n],s=e[n];return n==="style"&&De(r)&&De(s)?!si(r,s):r!==s}function AT({vnode:t,parent:e,suspense:n},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.suspense.vnode.el=s.el=r,t=s),s===t)(t=e.vnode).el=r,e=e.parent;else break}n&&n.activeBranch===t&&(n.vnode.el=r)}const Sm={},Cm=()=>Object.create(Sm),Pm=t=>Object.getPrototypeOf(t)===Sm;function bT(t,e,n,r=!1){const s={},i=Cm();t.propsDefaults=Object.create(null),km(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:tm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function RT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,c=Ce(s),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let d=0;d<f.length;d++){let g=f[d];if(vc(t.emitsOptions,g))continue;const _=e[g];if(l)if(Ne(i,g))_!==i[g]&&(i[g]=_,u=!0);else{const S=Ft(g);s[S]=Jl(l,c,S,_,t,!1)}else _!==i[g]&&(i[g]=_,u=!0)}}}else{km(t,e,s,i)&&(u=!0);let f;for(const d in c)(!e||!Ne(e,d)&&((f=Hr(d))===d||!Ne(e,f)))&&(l?n&&(n[d]!==void 0||n[f]!==void 0)&&(s[d]=Jl(l,c,d,void 0,t,!0)):delete s[d]);if(i!==c)for(const d in i)(!e||!Ne(e,d))&&(delete i[d],u=!0)}u&&Hn(t.attrs,"set","")}function km(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,c;if(e)for(let l in e){if(Bi(l))continue;const u=e[l];let f;s&&Ne(s,f=Ft(l))?!i||!i.includes(f)?n[f]=u:(c||(c={}))[f]=u:vc(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=Ce(n),u=c||Oe;for(let f=0;f<i.length;f++){const d=i[f];n[d]=Jl(s,l,d,u[d],t,!Ne(u,d))}}return o}function Jl(t,e,n,r,s,i){const o=t[n];if(o!=null){const c=Ne(o,"default");if(c&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&pe(l)){const{propsDefaults:u}=s;if(n in u)r=u[n];else{const f=bo(s);r=u[n]=l.call(null,e),f()}}else r=l;s.ce&&s.ce._setProp(n,r)}o[0]&&(i&&!c?r=!1:o[1]&&(r===""||r===Hr(n))&&(r=!0))}return r}const ST=new WeakMap;function Nm(t,e,n=!1){const r=n?ST:e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},c=[];let l=!1;if(!pe(t)){const f=d=>{l=!0;const[g,_]=Nm(d,e,!0);it(o,g),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!l)return De(t)&&r.set(t,Fs),Fs;if(ae(i))for(let f=0;f<i.length;f++){const d=Ft(i[f]);cd(d)&&(o[d]=Oe)}else if(i)for(const f in i){const d=Ft(f);if(cd(d)){const g=i[f],_=o[d]=ae(g)||pe(g)?{type:g}:it({},g),S=_.type;let P=!1,N=!0;if(ae(S))for(let j=0;j<S.length;++j){const V=S[j],$=pe(V)&&V.name;if($==="Boolean"){P=!0;break}else $==="String"&&(N=!1)}else P=pe(S)&&S.name==="Boolean";_[0]=P,_[1]=N,(P||Ne(_,"default"))&&c.push(d)}}const u=[o,c];return De(t)&&r.set(t,u),u}function cd(t){return t[0]!=="$"&&!Bi(t)}const qu=t=>t==="_"||t==="_ctx"||t==="$stable",Hu=t=>ae(t)?t.map(wn):[wn(t)],CT=(t,e,n)=>{if(e._n)return e;const r=Rr((...s)=>Hu(e(...s)),n);return r._c=!1,r},Dm=(t,e,n)=>{const r=t._ctx;for(const s in t){if(qu(s))continue;const i=t[s];if(pe(i))e[s]=CT(s,i,r);else if(i!=null){const o=Hu(i);e[s]=()=>o}}},Vm=(t,e)=>{const n=Hu(e);t.slots.default=()=>n},xm=(t,e,n)=>{for(const r in e)(n||!qu(r))&&(t[r]=e[r])},PT=(t,e,n)=>{const r=t.slots=Cm();if(t.vnode.shapeFlag&32){const s=e._;s?(xm(r,e,n),n&&Lg(r,"_",s,!0)):Dm(e,r)}else e&&Vm(t,e)},kT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=Oe;if(r.shapeFlag&32){const c=e._;c?n&&c===1?i=!1:xm(s,e,n):(i=!e.$stable,Dm(e,s)),o=e}else e&&(Vm(t,e),o={default:1});if(i)for(const c in s)!qu(c)&&o[c]==null&&delete s[c]},Nt=OT;function NT(t){return DT(t)}function DT(t,e){const n=hc();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:c,createComment:l,setText:u,setElementText:f,parentNode:d,nextSibling:g,setScopeId:_=bn,insertStaticContent:S}=t,P=(T,b,C,O=null,U=null,L=null,K=void 0,G=null,H=!!b.dynamicChildren)=>{if(T===b)return;T&&!is(T,b)&&(O=M(T),Be(T,U,L,!0),T=null),b.patchFlag===-2&&(H=!1,b.dynamicChildren=null);const{type:B,ref:oe,shapeFlag:J}=b;switch(B){case Ec:N(T,b,C,O);break;case Lt:j(T,b,C,O);break;case ga:T==null&&V(b,C,O,K);break;case Ot:I(T,b,C,O,U,L,K,G,H);break;default:J&1?Y(T,b,C,O,U,L,K,G,H):J&6?w(T,b,C,O,U,L,K,G,H):(J&64||J&128)&&B.process(T,b,C,O,U,L,K,G,H,ne)}oe!=null&&U?Hi(oe,T&&T.ref,L,b||T,!b):oe==null&&T&&T.ref!=null&&Hi(T.ref,null,L,T,!0)},N=(T,b,C,O)=>{if(T==null)r(b.el=c(b.children),C,O);else{const U=b.el=T.el;b.children!==T.children&&u(U,b.children)}},j=(T,b,C,O)=>{T==null?r(b.el=l(b.children||""),C,O):b.el=T.el},V=(T,b,C,O)=>{[T.el,T.anchor]=S(T.children,b,C,O,T.el,T.anchor)},$=({el:T,anchor:b},C,O)=>{let U;for(;T&&T!==b;)U=g(T),r(T,C,O),T=U;r(b,C,O)},q=({el:T,anchor:b})=>{let C;for(;T&&T!==b;)C=g(T),s(T),T=C;s(b)},Y=(T,b,C,O,U,L,K,G,H)=>{if(b.type==="svg"?K="svg":b.type==="math"&&(K="mathml"),T==null)Z(b,C,O,U,L,K,G,H);else{const B=T.el&&T.el._isVueCE?T.el:null;try{B&&B._beginPatch(),v(T,b,U,L,K,G,H)}finally{B&&B._endPatch()}}},Z=(T,b,C,O,U,L,K,G)=>{let H,B;const{props:oe,shapeFlag:J,transition:re,dirs:le}=T;if(H=T.el=o(T.type,L,oe&&oe.is,oe),J&8?f(H,T.children):J&16&&y(T.children,H,null,O,U,El(T,L),K,G),le&&Xr(T,null,O,"created"),E(H,T,T.scopeId,K,O),oe){for(const ge in oe)ge!=="value"&&!Bi(ge)&&i(H,ge,null,oe[ge],L,O);"value"in oe&&i(H,"value",null,oe.value,L),(B=oe.onVnodeBeforeMount)&&_n(B,O,T)}le&&Xr(T,null,O,"beforeMount");const ce=VT(U,re);ce&&re.beforeEnter(H),r(H,b,C),((B=oe&&oe.onVnodeMounted)||ce||le)&&Nt(()=>{try{B&&_n(B,O,T),ce&&re.enter(H),le&&Xr(T,null,O,"mounted")}finally{}},U)},E=(T,b,C,O,U)=>{if(C&&_(T,C),O)for(let L=0;L<O.length;L++)_(T,O[L]);if(U){let L=U.subTree;if(b===L||Mm(L.type)&&(L.ssContent===b||L.ssFallback===b)){const K=U.vnode;E(T,K,K.scopeId,K.slotScopeIds,U.parent)}}},y=(T,b,C,O,U,L,K,G,H=0)=>{for(let B=H;B<T.length;B++){const oe=T[B]=G?qn(T[B]):wn(T[B]);P(null,oe,b,C,O,U,L,K,G)}},v=(T,b,C,O,U,L,K)=>{const G=b.el=T.el;let{patchFlag:H,dynamicChildren:B,dirs:oe}=b;H|=T.patchFlag&16;const J=T.props||Oe,re=b.props||Oe;let le;if(C&&Zr(C,!1),(le=re.onVnodeBeforeUpdate)&&_n(le,C,b,T),oe&&Xr(b,T,C,"beforeUpdate"),C&&Zr(C,!0),B&&(!T.dynamicChildren||T.dynamicChildren.length!==B.length)&&(H=0,K=!1,B=null),(J.innerHTML&&re.innerHTML==null||J.textContent&&re.textContent==null)&&f(G,""),B?A(T.dynamicChildren,B,G,C,O,El(b,U),L):K||Ee(T,b,G,null,C,O,El(b,U),L,!1),H>0){if(H&16)R(G,J,re,C,U);else if(H&2&&J.class!==re.class&&i(G,"class",null,re.class,U),H&4&&i(G,"style",J.style,re.style,U),H&8){const ce=b.dynamicProps;for(let ge=0;ge<ce.length;ge++){const Re=ce[ge],qe=J[Re],Xe=re[Re];(Xe!==qe||Re==="value")&&i(G,Re,qe,Xe,U,C)}}H&1&&T.children!==b.children&&f(G,b.children)}else!K&&B==null&&R(G,J,re,C,U);((le=re.onVnodeUpdated)||oe)&&Nt(()=>{le&&_n(le,C,b,T),oe&&Xr(b,T,C,"updated")},O)},A=(T,b,C,O,U,L,K)=>{for(let G=0;G<b.length;G++){const H=T[G],B=b[G],oe=H.el&&(H.type===Ot||!is(H,B)||H.shapeFlag&198)?d(H.el):C;P(H,B,oe,null,O,U,L,K,!0)}},R=(T,b,C,O,U)=>{if(b!==C){if(b!==Oe)for(const L in b)!Bi(L)&&!(L in C)&&i(T,L,b[L],null,U,O);for(const L in C){if(Bi(L))continue;const K=C[L],G=b[L];K!==G&&L!=="value"&&i(T,L,G,K,U,O)}"value"in C&&i(T,"value",b.value,C.value,U)}},I=(T,b,C,O,U,L,K,G,H)=>{const B=b.el=T?T.el:c(""),oe=b.anchor=T?T.anchor:c("");let{patchFlag:J,dynamicChildren:re,slotScopeIds:le}=b;le&&(G=G?G.concat(le):le),T==null?(r(B,C,O),r(oe,C,O),y(b.children||[],C,oe,U,L,K,G,H)):J>0&&J&64&&re&&T.dynamicChildren&&T.dynamicChildren.length===re.length?(A(T.dynamicChildren,re,C,U,L,K,G),(b.key!=null||U&&b===U.subTree)&&Gu(T,b,!0)):Ee(T,b,C,oe,U,L,K,G,H)},w=(T,b,C,O,U,L,K,G,H)=>{b.slotScopeIds=G,T==null?b.shapeFlag&512?U.ctx.activate(b,C,O,K,H):fe(b,C,O,U,L,K,H):Ye(T,b,H)},fe=(T,b,C,O,U,L,K)=>{const G=T.component=BT(T,O,U);if(gc(T)&&(G.ctx.renderer=ne),$T(G,!1,K),G.asyncDep){if(U&&U.registerDep(G,je,K),!T.el){const H=G.subTree=Je(Lt);j(null,H,b,C),T.placeholder=H.el}}else je(G,T,b,C,U,L,K)},Ye=(T,b,C)=>{const O=b.component=T.component;if(IT(T,b,C))if(O.asyncDep&&!O.asyncResolved){Ie(O,b,C);return}else O.next=b,O.update();else b.el=T.el,O.vnode=b},je=(T,b,C,O,U,L,K)=>{const G=()=>{if(T.isMounted){let{next:J,bu:re,u:le,parent:ce,vnode:ge}=T;{const _t=Om(T);if(_t){J&&(J.el=ge.el,Ie(T,J,K)),_t.asyncDep.then(()=>{Nt(()=>{T.isUnmounted||B()},U)});return}}let Re=J,qe;Zr(T,!1),J?(J.el=ge.el,Ie(T,J,K)):J=ge,re&&da(re),(qe=J.props&&J.props.onVnodeBeforeUpdate)&&_n(qe,ce,J,ge),Zr(T,!0);const Xe=od(T),en=T.subTree;T.subTree=Xe,P(en,Xe,d(en.el),M(en),T,U,L),J.el=Xe.el,Re===null&&AT(T,Xe.el),le&&Nt(le,U),(qe=J.props&&J.props.onVnodeUpdated)&&Nt(()=>_n(qe,ce,J,ge),U)}else{let J;const{el:re,props:le}=b,{bm:ce,m:ge,parent:Re,root:qe,type:Xe}=T,en=Gi(b);Zr(T,!1),ce&&da(ce),!en&&(J=le&&le.onVnodeBeforeMount)&&_n(J,Re,b),Zr(T,!0);{qe.ce&&qe.ce._hasShadowRoot()&&qe.ce._injectChildStyle(Xe,T.parent?T.parent.type:void 0);const _t=T.subTree=od(T);P(null,_t,C,O,T,U,L),b.el=_t.el}if(ge&&Nt(ge,U),!en&&(J=le&&le.onVnodeMounted)){const _t=b;Nt(()=>_n(J,Re,_t),U)}(b.shapeFlag&256||Re&&Gi(Re.vnode)&&Re.vnode.shapeFlag&256)&&T.a&&Nt(T.a,U),T.isMounted=!0,b=C=O=null}};T.scope.on();const H=T.effect=new Bg(G);T.scope.off();const B=T.update=H.run.bind(H),oe=T.job=H.runIfDirty.bind(H);oe.i=T,oe.id=T.uid,H.scheduler=()=>$u(oe),Zr(T,!0),B()},Ie=(T,b,C)=>{b.component=T;const O=T.vnode.props;T.vnode=b,T.next=null,RT(T,b.props,O,C),kT(T,b.children,C),Jn(),Qf(T),Yn()},Ee=(T,b,C,O,U,L,K,G,H=!1)=>{const B=T&&T.children,oe=T?T.shapeFlag:0,J=b.children,{patchFlag:re,shapeFlag:le}=b;if(re>0){if(re&128){an(B,J,C,O,U,L,K,G,H);return}else if(re&256){Ht(B,J,C,O,U,L,K,G,H);return}}le&8?(oe&16&&Ut(B,U,L),J!==B&&f(C,J)):oe&16?le&16?an(B,J,C,O,U,L,K,G,H):Ut(B,U,L,!0):(oe&8&&f(C,""),le&16&&y(J,C,O,U,L,K,G,H))},Ht=(T,b,C,O,U,L,K,G,H)=>{T=T||Fs,b=b||Fs;const B=T.length,oe=b.length,J=Math.min(B,oe);let re;for(re=0;re<J;re++){const le=b[re]=H?qn(b[re]):wn(b[re]);P(T[re],le,C,null,U,L,K,G,H)}B>oe?Ut(T,U,L,!0,!1,J):y(b,C,O,U,L,K,G,H,J)},an=(T,b,C,O,U,L,K,G,H)=>{let B=0;const oe=b.length;let J=T.length-1,re=oe-1;for(;B<=J&&B<=re;){const le=T[B],ce=b[B]=H?qn(b[B]):wn(b[B]);if(is(le,ce))P(le,ce,C,null,U,L,K,G,H);else break;B++}for(;B<=J&&B<=re;){const le=T[J],ce=b[re]=H?qn(b[re]):wn(b[re]);if(is(le,ce))P(le,ce,C,null,U,L,K,G,H);else break;J--,re--}if(B>J){if(B<=re){const le=re+1,ce=le<oe?b[le].el:O;for(;B<=re;)P(null,b[B]=H?qn(b[B]):wn(b[B]),C,ce,U,L,K,G,H),B++}}else if(B>re)for(;B<=J;)Be(T[B],U,L,!0),B++;else{const le=B,ce=B,ge=new Map;for(B=ce;B<=re;B++){const ht=b[B]=H?qn(b[B]):wn(b[B]);ht.key!=null&&ge.set(ht.key,B)}let Re,qe=0;const Xe=re-ce+1;let en=!1,_t=0;const lr=new Array(Xe);for(B=0;B<Xe;B++)lr[B]=0;for(B=le;B<=J;B++){const ht=T[B];if(qe>=Xe){Be(ht,U,L,!0);continue}let tn;if(ht.key!=null)tn=ge.get(ht.key);else for(Re=ce;Re<=re;Re++)if(lr[Re-ce]===0&&is(ht,b[Re])){tn=Re;break}tn===void 0?Be(ht,U,L,!0):(lr[tn-ce]=B+1,tn>=_t?_t=tn:en=!0,P(ht,b[tn],C,null,U,L,K,G,H),qe++)}const gi=en?xT(lr):Fs;for(Re=gi.length-1,B=Xe-1;B>=0;B--){const ht=ce+B,tn=b[ht],Bo=b[ht+1],As=ht+1<oe?Bo.el||Lm(Bo):O;lr[B]===0?P(null,tn,C,As,U,L,K,G,H):en&&(Re<0||B!==gi[Re]?Zt(tn,C,As,2):Re--)}}},Zt=(T,b,C,O,U=null)=>{const{el:L,type:K,transition:G,children:H,shapeFlag:B}=T;if(B&6){Zt(T.component.subTree,b,C,O);return}if(B&128){T.suspense.move(b,C,O);return}if(B&64){K.move(T,b,C,ne);return}if(K===Ot){r(L,b,C);for(let J=0;J<H.length;J++)Zt(H[J],b,C,O);r(T.anchor,b,C);return}if(K===ga){$(T,b,C);return}if(O!==2&&B&1&&G)if(O===0)G.persisted&&!L[rn]?r(L,b,C):(G.beforeEnter(L),r(L,b,C),Nt(()=>G.enter(L),U));else{const{leave:J,delayLeave:re,afterLeave:le}=G,ce=()=>{T.ctx.isUnmounted?s(L):r(L,b,C)},ge=()=>{const Re=L._isLeaving||!!L[rn];L._isLeaving&&L[rn](!0),G.persisted&&!Re?ce():J(L,()=>{ce(),le&&le()})};re?re(L,ce,ge):ge()}else r(L,b,C)},Be=(T,b,C,O=!1,U=!1)=>{const{type:L,props:K,ref:G,children:H,dynamicChildren:B,shapeFlag:oe,patchFlag:J,dirs:re,cacheIndex:le,memo:ce}=T;if(J===-2&&(U=!1),G!=null&&(Jn(),Hi(G,null,C,T,!0),Yn()),le!=null&&(b.renderCache[le]=void 0),oe&256){b.ctx.deactivate(T);return}const ge=oe&1&&re,Re=!Gi(T);let qe;if(Re&&(qe=K&&K.onVnodeBeforeUnmount)&&_n(qe,b,T),oe&6)Gt(T.component,C,O);else{if(oe&128){T.suspense.unmount(C,O);return}ge&&Xr(T,null,b,"beforeUnmount"),oe&64?T.type.remove(T,b,C,ne,O):B&&!B.hasOnce&&(L!==Ot||J>0&&J&64)?Ut(B,b,C,!1,!0):(L===Ot&&J&384||!U&&oe&16)&&Ut(H,b,C),O&&$e(T)}const Xe=ce!=null&&le==null;(Re&&(qe=K&&K.onVnodeUnmounted)||ge||Xe)&&Nt(()=>{qe&&_n(qe,b,T),ge&&Xr(T,null,b,"unmounted"),Xe&&(T.el=null)},C)},$e=T=>{const{type:b,el:C,anchor:O,transition:U}=T;if(b===Ot){cr(C,O);return}if(b===ga){q(T);return}const L=()=>{s(C),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(T.shapeFlag&1&&U&&!U.persisted){const{leave:K,delayLeave:G}=U,H=()=>K(C,L);G?G(T.el,L,H):H()}else L()},cr=(T,b)=>{let C;for(;T!==b;)C=g(T),s(T),T=C;s(b)},Gt=(T,b,C)=>{const{bum:O,scope:U,job:L,subTree:K,um:G,m:H,a:B}=T;ld(H),ld(B),O&&da(O),U.stop(),L&&(L.flags|=8,Be(K,T,b,C)),G&&Nt(G,b),Nt(()=>{T.isUnmounted=!0},b)},Ut=(T,b,C,O=!1,U=!1,L=0)=>{for(let K=L;K<T.length;K++)Be(T[K],b,C,O,U)},M=T=>{if(T.shapeFlag&6)return M(T.component.subTree);if(T.shapeFlag&128)return T.suspense.next();const b=g(T.anchor||T.el),C=b&&b[fm];return C?g(C):b};let ee=!1;const Q=(T,b,C)=>{let O;T==null?b._vnode&&(Be(b._vnode,null,null,!0),O=b._vnode.component):P(b._vnode||null,T,b,null,null,null,C),b._vnode=T,ee||(ee=!0,Qf(O),am(),ee=!1)},ne={p:P,um:Be,m:Zt,r:$e,mt:fe,mc:y,pc:Ee,pbc:A,n:M,o:t};return{render:Q,hydrate:void 0,createApp:_T(Q)}}function El({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Zr({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function VT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Gu(t,e,n=!1){const r=t.children,s=e.children;if(ae(r)&&ae(s))for(let i=0;i<r.length;i++){const o=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=qn(s[i]),c.el=o.el),!n&&c.patchFlag!==-2&&Gu(o,c)),c.type===Ec&&(c.patchFlag===-1&&(c=s[i]=qn(c)),c.el=o.el),c.type===Lt&&!c.el&&(c.el=o.el)}}function xT(t){const e=t.slice(),n=[0];let r,s,i,o,c;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(s=n[n.length-1],t[s]<u){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)c=i+o>>1,t[n[c]]<u?i=c+1:o=c;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function Om(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Om(e)}function ld(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}function Lm(t){if(t.placeholder)return t.placeholder;const e=t.component;return e?Lm(e.subTree):null}const Mm=t=>t.__isSuspense;function OT(t,e){e&&e.pendingBranch?ae(t)?e.effects.push(...t):e.effects.push(t):BE(t)}const Ot=Symbol.for("v-fgt"),Ec=Symbol.for("v-txt"),Lt=Symbol.for("v-cmt"),ga=Symbol.for("v-stc"),us=[];let Jt=null;function ve(t=!1){us.push(Jt=t?null:[])}function Fm(){us.pop(),Jt=us[us.length-1]||null}let io=1;function Va(t,e=!1){io+=t,t<0&&Jt&&e&&(Jt.hasOnce=!0)}function Um(t){return t.dynamicChildren=io>0?Jt||Fs:null,Fm(),io>0&&Jt&&Jt.push(t),t}function ke(t,e,n,r,s,i){return Um(te(t,e,n,r,s,i,!0))}function hs(t,e,n,r,s){return Um(Je(t,e,n,r,s,!0))}function xa(t){return t?t.__v_isVNode===!0:!1}function is(t,e){return t.type===e.type&&t.key===e.key}const jm=({key:t})=>t??null,ma=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Ue(t)||Rt(t)||pe(t)?{i:Qt,r:t,k:e,f:!!n}:t:null);function te(t,e=null,n=null,r=0,s=null,i=t===Ot?0:1,o=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&jm(e),ref:e&&ma(e),scopeId:lm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Qt};return c?(Oa(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Ue(n)?8:16),io>0&&!o&&Jt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Jt.push(l),l}const Je=LT;function LT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===cT)&&(t=Lt),xa(t)){const c=Or(t,e,!0);return n&&Oa(c,n),io>0&&!i&&Jt&&(c.shapeFlag&6?Jt[Jt.indexOf(t)]=c:Jt.push(c)),c.patchFlag=-2,c}if(zT(t)&&(t=t.__vccOpts),e){e=MT(e);let{class:c,style:l}=e;c&&!Ue(c)&&(e.class=Tt(c)),De(l)&&(ju(l)&&!ae(l)&&(l=it({},l)),e.style=Du(l))}const o=Ue(t)?1:Mm(t)?128:dm(t)?64:De(t)?4:pe(t)?2:0;return te(t,e,n,r,s,o,i,!0)}function MT(t){return t?ju(t)||Pm(t)?it({},t):t:null}function Or(t,e,n=!1,r=!1){const{props:s,ref:i,patchFlag:o,children:c,transition:l}=t,u=e?FT(s||{},e):s,f={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&jm(u),ref:e&&e.ref?n&&i?ae(i)?i.concat(ma(e)):[i,ma(e)]:ma(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ot?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Or(t.ssContent),ssFallback:t.ssFallback&&Or(t.ssFallback),placeholder:t.placeholder,el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&so(f,l.clone(f)),f}function oo(t=" ",e=0){return Je(Ec,null,t,e)}function yk(t,e){const n=Je(ga,null,t);return n.staticCount=e,n}function Vt(t="",e=!1){return e?(ve(),hs(Lt,null,t)):Je(Lt,null,t)}function wn(t){return t==null||typeof t=="boolean"?Je(Lt):ae(t)?Je(Ot,null,t.slice()):xa(t)?qn(t):Je(Ec,null,String(t))}function qn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Or(t)}function Oa(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ae(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Oa(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!Pm(e)?e._ctx=Qt:s===3&&Qt&&(Qt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else if(pe(e)){if(r&65){Oa(t,{default:e});return}e={default:e,_ctx:Qt},n=32}else e=String(e),r&64?(n=16,e=[oo(e)]):n=8;t.children=e,t.shapeFlag|=n}function FT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Tt([e.class,r.class]));else if(s==="style")e.style=Du([e.style,r.style]);else if(oc(s)){const i=e[s],o=r[s];o&&i!==o&&!(ae(i)&&i.includes(o))?e[s]=i?[].concat(i,o):o:o==null&&i==null&&!ac(s)&&(e[s]=o)}else s!==""&&(e[s]=r[s])}return e}function _n(t,e,n,r=null){on(t,e,7,[n,r])}const UT=Am();let jT=0;function BT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||UT,i={uid:jT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new jg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Nm(r,s),emitsOptions:bm(r,s),emit:null,emitted:null,propsDefaults:Oe,inheritAttrs:r.inheritAttrs,ctx:Oe,data:Oe,props:Oe,attrs:Oe,slots:Oe,refs:Oe,setupState:Oe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=vT.bind(null,i),t.ce&&t.ce(i),i}let At=null;const Bm=()=>At||Qt;let La,Yl;{const t=hc(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};La=e("__VUE_INSTANCE_SETTERS__",n=>At=n),Yl=e("__VUE_SSR_SETTERS__",n=>ao=n)}const bo=t=>{const e=At;return La(t),t.scope.on(),()=>{t.scope.off(),La(e)}},ud=()=>{At&&At.scope.off(),La(null)};function $m(t){return t.vnode.shapeFlag&4}let ao=!1;function $T(t,e=!1,n=!1){e&&Yl(e);const{props:r,children:s}=t.vnode,i=$m(t);bT(t,r,i,e),PT(t,s,n||e);const o=i?qT(t,e):void 0;return e&&Yl(!1),o}function qT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,uT);const{setup:r}=n;if(r){Jn();const s=t.setupContext=r.length>1?GT(t):null,i=bo(t),o=Io(r,t,0,[t.props,s]),c=Vg(o);if(Yn(),i(),(c||t.sp)&&!Gi(t)&&vm(t),c){if(o.then(ud,ud),e)return o.then(l=>{hd(t,l)}).catch(l=>{pc(l,t,0)});t.asyncDep=o}else hd(t,o)}else qm(t)}function hd(t,e,n){pe(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:De(e)&&(t.setupState=sm(e)),qm(t)}function qm(t,e,n){const r=t.type;t.render||(t.render=r.render||bn);{const s=bo(t);Jn();try{hT(t)}finally{Yn(),s()}}}const HT={get(t,e){return It(t,"get",""),t[e]}};function GT(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,HT),slots:t.slots,emit:t.emit,expose:e}}function Tc(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(sm(nm(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Wi)return Wi[n](t)},has(e,n){return n in e||n in Wi}})):t.proxy}function WT(t,e=!0){return pe(t)?t.displayName||t.name:t.name||e&&t.__name}function zT(t){return pe(t)&&"__vccOpts"in t}const bt=(t,e)=>LE(t,e,ao);function Wu(t,e,n){try{Va(-1);const r=arguments.length;return r===2?De(e)&&!ae(e)?xa(e)?Je(t,null,[e]):Je(t,e):Je(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&xa(n)&&(n=[n]),Je(t,e,n))}finally{Va(1)}}const KT="3.5.40";/**
* @vue/runtime-dom v3.5.40
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Xl;const fd=typeof window<"u"&&window.trustedTypes;if(fd)try{Xl=fd.createPolicy("vue",{createHTML:t=>t})}catch{}const Hm=Xl?t=>Xl.createHTML(t):t=>t,QT="http://www.w3.org/2000/svg",JT="http://www.w3.org/1998/Math/MathML",$n=typeof document<"u"?document:null,dd=$n&&$n.createElement("template"),YT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?$n.createElementNS(QT,t):e==="mathml"?$n.createElementNS(JT,t):n?$n.createElement(t,{is:n}):$n.createElement(t);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>$n.createTextNode(t),createComment:t=>$n.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>$n.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{dd.innerHTML=Hm(r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t);const c=dd.content;if(r==="svg"||r==="mathml"){const l=c.firstChild;for(;l.firstChild;)c.appendChild(l.firstChild);c.removeChild(l)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},dr="transition",ki="animation",co=Symbol("_vtc"),Gm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},XT=it({},pm,Gm),ZT=t=>(t.displayName="Transition",t.props=XT,t),vk=ZT((t,{slots:e})=>Wu(JE,ew(t),e)),es=(t,e=[])=>{ae(t)?t.forEach(n=>n(...e)):t&&t(...e)},pd=t=>t?ae(t)?t.some(e=>e.length>1):t.length>1:!1;function ew(t){const e={};for(const I in t)I in Gm||(e[I]=t[I]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:u=o,appearToClass:f=c,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:g=`${n}-leave-active`,leaveToClass:_=`${n}-leave-to`}=t,S=tw(s),P=S&&S[0],N=S&&S[1],{onBeforeEnter:j,onEnter:V,onEnterCancelled:$,onLeave:q,onLeaveCancelled:Y,onBeforeAppear:Z=j,onAppear:E=V,onAppearCancelled:y=$}=e,v=(I,w,fe,Ye)=>{I._enterCancelled=Ye,ts(I,w?f:c),ts(I,w?u:o),fe&&fe()},A=(I,w)=>{I._isLeaving=!1,ts(I,d),ts(I,_),ts(I,g),w&&w()},R=I=>(w,fe)=>{const Ye=I?E:V,je=()=>v(w,I,fe);es(Ye,[w,je]),gd(()=>{ts(w,I?l:i),jn(w,I?f:c),pd(Ye)||md(w,r,P,je)})};return it(e,{onBeforeEnter(I){es(j,[I]),jn(I,i),jn(I,o)},onBeforeAppear(I){es(Z,[I]),jn(I,l),jn(I,u)},onEnter:R(!1),onAppear:R(!0),onLeave(I,w){I._isLeaving=!0;const fe=()=>A(I,w);jn(I,d),I._enterCancelled?(jn(I,g),vd(I)):(vd(I),jn(I,g)),gd(()=>{I._isLeaving&&(ts(I,d),jn(I,_),pd(q)||md(I,r,N,fe))}),es(q,[I,fe])},onEnterCancelled(I){v(I,!1,void 0,!0),es($,[I])},onAppearCancelled(I){v(I,!0,void 0,!0),es(y,[I])},onLeaveCancelled(I){A(I),es(Y,[I])}})}function tw(t){if(t==null)return null;if(De(t))return[Tl(t.enter),Tl(t.leave)];{const e=Tl(t);return[e,e]}}function Tl(t){return iE(t)}function jn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[co]||(t[co]=new Set)).add(e)}function ts(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[co];n&&(n.delete(e),n.size||(t[co]=void 0))}function gd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let nw=0;function md(t,e,n,r){const s=t._endId=++nw,i=()=>{s===t._endId&&r()};if(n!=null)return setTimeout(i,n);const{type:o,timeout:c,propCount:l}=rw(t,e);if(!o)return r();const u=o+"end";let f=0;const d=()=>{t.removeEventListener(u,g),i()},g=_=>{_.target===t&&++f>=l&&d()};setTimeout(()=>{f<l&&d()},c+1),t.addEventListener(u,g)}function rw(t,e){const n=window.getComputedStyle(t),r=S=>(n[S]||"").split(", "),s=r(`${dr}Delay`),i=r(`${dr}Duration`),o=_d(s,i),c=r(`${ki}Delay`),l=r(`${ki}Duration`),u=_d(c,l);let f=null,d=0,g=0;e===dr?o>0&&(f=dr,d=o,g=i.length):e===ki?u>0&&(f=ki,d=u,g=l.length):(d=Math.max(o,u),f=d>0?o>u?dr:ki:null,g=f?f===dr?i.length:l.length:0);const _=f===dr&&/\b(?:transform|all)(?:,|$)/.test(r(`${dr}Property`).toString());return{type:f,timeout:d,propCount:g,hasTransform:_}}function _d(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>yd(n)+yd(t[r])))}function yd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function vd(t){return(t?t.ownerDocument:document).body.offsetHeight}function sw(t,e,n){const r=t[co];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ed=Symbol("_vod"),iw=Symbol("_vsh"),ow=Symbol(""),aw=/(?:^|;)\s*display\s*:/;function cw(t,e,n){const r=t.style,s=Ue(n);let i=!1;if(n&&!s){if(e)if(Ue(e))for(const o of e.split(";")){const c=o.slice(0,o.indexOf(":")).trim();n[c]==null&&Oi(r,c,"")}else for(const o in e)n[o]==null&&Oi(r,o,"");for(const o in n){o==="display"&&(i=!0);const c=n[o];c!=null?uw(t,o,!Ue(e)&&e?e[o]:void 0,c)||Oi(r,o,c):Oi(r,o,"")}}else if(s){if(e!==n){const o=r[ow];o&&(n+=";"+o),r.cssText=n,i=aw.test(n)}}else e&&t.removeAttribute("style");Ed in t&&(t[Ed]=i?r.display:"",t[iw]&&(r.display="none"))}const Td=/\s*!important$/;function Oi(t,e,n){if(ae(n))n.forEach(r=>Oi(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=lw(t,e);Td.test(n)?t.setProperty(Hr(r),n.replace(Td,""),"important"):t[r]=n}}const wd=["Webkit","Moz","ms"],wl={};function lw(t,e){const n=wl[e];if(n)return n;let r=Ft(e);if(r!=="filter"&&r in t)return wl[e]=r;r=lc(r);for(let s=0;s<wd.length;s++){const i=wd[s]+r;if(i in t)return wl[e]=i}return e}function uw(t,e,n,r){return t.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Ue(r)&&n===r}const Id="http://www.w3.org/1999/xlink";function Ad(t,e,n,r,s,i=hE(e)){r&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Id,e.slice(6,e.length)):t.setAttributeNS(Id,e,n):n==null||i&&!Mg(n)?t.removeAttribute(e):t.setAttribute(e,i?"":xn(n)?String(n):n)}function bd(t,e,n,r,s){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Hm(n):n);return}const i=t.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(c!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=Mg(n):n==null&&c==="string"?(n="",o=!0):c==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(s||e)}function Tr(t,e,n,r){t.addEventListener(e,n,r)}function hw(t,e,n,r){t.removeEventListener(e,n,r)}const Rd=Symbol("_vei");function fw(t,e,n,r,s=null){const i=t[Rd]||(t[Rd]={}),o=i[e];if(r&&o)o.value=r;else{const[c,l]=gw(e);if(r){const u=i[e]=yw(r,s);Tr(t,c,u,l)}else o&&(hw(t,c,o,l),i[e]=void 0)}}const dw=/(Once|Passive|Capture)$/,pw=/^on:?(?:Once|Passive|Capture)$/;function gw(t){let e,n;for(;(n=t.match(dw))&&!pw.test(t);)e||(e={}),t=t.slice(0,t.length-n[1].length),e[n[1].toLowerCase()]=!0;return[t[2]===":"?t.slice(3):Hr(t.slice(2)),e]}let Il=0;const mw=Promise.resolve(),_w=()=>Il||(mw.then(()=>Il=0),Il=Date.now());function yw(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;const s=n.value;if(ae(s)){const i=r.stopImmediatePropagation;r.stopImmediatePropagation=()=>{i.call(r),r._stopped=!0};const o=s.slice(),c=[r];for(let l=0;l<o.length&&!r._stopped;l++){const u=o[l];u&&on(u,e,5,c)}}else on(s,e,5,[r])};return n.value=t,n.attached=_w(),n}const Sd=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,vw=(t,e,n,r,s,i)=>{const o=s==="svg";e==="class"?sw(t,r,o):e==="style"?cw(t,n,r):oc(e)?ac(e)||fw(t,e,n,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ew(t,e,r,o))?(bd(t,e,r),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Ad(t,e,r,o,i,e!=="value")):t._isVueCE&&(Tw(t,e)||t._def.__asyncLoader&&(/[A-Z]/.test(e)||!Ue(r)))?bd(t,Ft(e),r,i,e):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Ad(t,e,r,o))};function Ew(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Sd(e)&&pe(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&t.tagName==="IFRAME"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Sd(e)&&Ue(n)?!1:e in t}function Tw(t,e){const n=t._def.props;if(!n)return!1;const r=Ft(e);return Array.isArray(n)?n.some(s=>Ft(s)===r):Object.keys(n).some(s=>Ft(s)===r)}const zs=t=>{const e=t.props["onUpdate:modelValue"]||!1;return ae(e)?n=>da(e,n):e};function ww(t){t.target.composing=!0}function Cd(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Kn=Symbol("_assign");function Pd(t,e,n){return e&&(t=t.trim()),n&&(t=uc(t)),t}const Ek={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Kn]=zs(s);const i=r||s.props&&s.props.type==="number";Tr(t,e?"change":"input",o=>{o.target.composing||t[Kn](Pd(t.value,n,i))}),(n||i)&&Tr(t,"change",()=>{t.value=Pd(t.value,n,i)}),e||(Tr(t,"compositionstart",ww),Tr(t,"compositionend",Cd),Tr(t,"change",Cd))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:i}},o){if(t[Kn]=zs(o),t.composing)return;const c=(i||t.type==="number")&&!/^0\d/.test(t.value)?uc(t.value):t.value,l=e??"";if(c===l)return;const u=t.getRootNode();(u instanceof Document||u instanceof ShadowRoot)&&u.activeElement===t&&t.type!=="range"&&(r&&e===n||s&&t.value.trim()===l)||(t.value=l)}},Tk={deep:!0,created(t,e,n){t[Kn]=zs(n),Tr(t,"change",()=>{const r=t._modelValue,s=lo(t),i=t.checked,o=t[Kn];if(ae(r)){const c=Vu(r,s),l=c!==-1;if(i&&!l)o(r.concat(s));else if(!i&&l){const u=[...r];u.splice(c,1),o(u)}}else if(ri(r)){const c=new Set(r);i?c.add(s):c.delete(s),o(c)}else o(Wm(t,i))})},mounted:kd,beforeUpdate(t,e,n){t[Kn]=zs(n),kd(t,e,n)}};function kd(t,{value:e,oldValue:n},r){t._modelValue=e;let s;if(ae(e))s=Vu(e,r.props.value)>-1;else if(ri(e))s=e.has(r.props.value);else{if(e===n)return;s=si(e,Wm(t,!0))}t.checked!==s&&(t.checked=s)}const wk={deep:!0,created(t,{value:e,modifiers:{number:n}},r){t._modelValue=e,Tr(t,"change",()=>{const s=Array.prototype.filter.call(t.options,i=>i.selected).map(i=>n?uc(lo(i)):lo(i));t[Kn](t.multiple?ri(t._modelValue)?new Set(s):s:s[0]),t._assigning=!0,Bu(()=>{t._assigning=!1})}),t[Kn]=zs(r)},mounted(t,{value:e}){Nd(t,e)},beforeUpdate(t,{value:e},n){t._modelValue=e,t[Kn]=zs(n)},updated(t,{value:e}){t._assigning||Nd(t,e)}};function Nd(t,e){const n=t.multiple,r=ae(e);if(!(n&&!r&&!ri(e))){for(let s=0,i=t.options.length;s<i;s++){const o=t.options[s],c=lo(o);if(n)if(r){const l=typeof c;l==="string"||l==="number"?o.selected=e.some(u=>String(u)===String(c)):o.selected=Vu(e,c)>-1}else o.selected=e.has(c);else if(si(lo(o),e)){t.selectedIndex!==s&&(t.selectedIndex=s);return}}!n&&t.selectedIndex!==-1&&(t.selectedIndex=-1)}}function lo(t){return"_value"in t?t._value:t.value}function Wm(t,e){const n=e?"_trueValue":"_falseValue";return n in t?t[n]:e}const Iw=["ctrl","shift","alt","meta"],Aw={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Iw.some(n=>t[`${n}Key`]&&!e.includes(n))},Ik=(t,e)=>{if(!t)return t;const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=((s,...i)=>{for(let o=0;o<e.length;o++){const c=Aw[e[o]];if(c&&c(s,e))return}return t(s,...i)}))},bw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ak=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=(s=>{if(!("key"in s))return;const i=Hr(s.key);if(e.some(o=>o===i||bw[o]===i))return t(s)}))},Rw=it({patchProp:vw},YT);let Dd;function Sw(){return Dd||(Dd=NT(Rw))}const Cw=((...t)=>{const e=Sw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=kw(r);if(!s)return;const i=e._component;!pe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=n(s,!1,Pw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e});function Pw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function kw(t){return Ue(t)?document.querySelector(t):t}/*!
 * pinia v2.3.1
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Nw=Symbol();var Vd;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Vd||(Vd={}));function Dw(){const t=dE(!0),e=t.run(()=>qt({}));let n=[],r=[];const s=nm({install(i){s._a=i,i.provide(Nw,s),i.config.globalProperties.$pinia=s,r.forEach(o=>n.push(o)),r=[]},use(i){return this._a?n.push(i):r.push(i),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return s}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */const Ns=typeof document<"u";function zm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Vw(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&zm(t.default)}const Pe=Object.assign;function Al(t,e){const n={};for(const r in e){const s=e[r];n[r]=dn(s)?s.map(t):t(s)}return n}const zi=()=>{},dn=Array.isArray;function xd(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}const Km=/#/g,xw=/&/g,Ow=/\//g,Lw=/=/g,Mw=/\?/g,Qm=/\+/g,Fw=/%5B/g,Uw=/%5D/g,Jm=/%5E/g,jw=/%60/g,Ym=/%7B/g,Bw=/%7C/g,Xm=/%7D/g,$w=/%20/g;function zu(t){return t==null?"":encodeURI(""+t).replace(Bw,"|").replace(Fw,"[").replace(Uw,"]")}function qw(t){return zu(t).replace(Ym,"{").replace(Xm,"}").replace(Jm,"^")}function Zl(t){return zu(t).replace(Qm,"%2B").replace($w,"+").replace(Km,"%23").replace(xw,"%26").replace(jw,"`").replace(Ym,"{").replace(Xm,"}").replace(Jm,"^")}function Hw(t){return Zl(t).replace(Lw,"%3D")}function Gw(t){return zu(t).replace(Km,"%23").replace(Mw,"%3F")}function Ww(t){return Gw(t).replace(Ow,"%2F")}function uo(t){if(t==null)return null;try{return decodeURIComponent(""+t)}catch{}return""+t}const zw=/\/$/,Kw=t=>t.replace(zw,"");function bl(t,e,n="/"){let r,s={},i="",o="";const c=e.indexOf("#");let l=e.indexOf("?");return l=c>=0&&l>c?-1:l,l>=0&&(r=e.slice(0,l),i=e.slice(l,c>0?c:e.length),s=t(i.slice(1))),c>=0&&(r=r||e.slice(0,c),o=e.slice(c,e.length)),r=Xw(r??e,n),{fullPath:r+i+o,path:r,query:s,hash:uo(o)}}function Qw(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Od(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Jw(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&Ks(e.matched[r],n.matched[s])&&Zm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ks(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Zm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(var n in t)if(!Yw(t[n],e[n]))return!1;return!0}function Yw(t,e){return dn(t)?Ld(t,e):dn(e)?Ld(e,t):(t==null?void 0:t.valueOf())===(e==null?void 0:e.valueOf())}function Ld(t,e){return dn(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Xw(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,c;for(o=0;o<r.length;o++)if(c=r[o],c!==".")if(c==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}const pr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};let eu=(function(t){return t.pop="pop",t.push="push",t})({}),Rl=(function(t){return t.back="back",t.forward="forward",t.unknown="",t})({});function Zw(t){if(!t)if(Ns){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Kw(t)}const eI=/^[^#]+#/;function tI(t,e){return t.replace(eI,"#")+e}function nI(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const wc=()=>({left:window.scrollX,top:window.scrollY});function rI(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=nI(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Md(t,e){return(history.state?history.state.position-e:-1)+t}const tu=new Map;function sI(t,e){tu.set(t,e)}function iI(t){const e=tu.get(t);return tu.delete(t),e}function oI(t){return typeof t=="string"||t&&typeof t=="object"}function e_(t){return typeof t=="string"||typeof t=="symbol"}let Ke=(function(t){return t[t.MATCHER_NOT_FOUND=1]="MATCHER_NOT_FOUND",t[t.NAVIGATION_GUARD_REDIRECT=2]="NAVIGATION_GUARD_REDIRECT",t[t.NAVIGATION_ABORTED=4]="NAVIGATION_ABORTED",t[t.NAVIGATION_CANCELLED=8]="NAVIGATION_CANCELLED",t[t.NAVIGATION_DUPLICATED=16]="NAVIGATION_DUPLICATED",t})({});const t_=Symbol("");Ke.MATCHER_NOT_FOUND+"",Ke.NAVIGATION_GUARD_REDIRECT+"",Ke.NAVIGATION_ABORTED+"",Ke.NAVIGATION_CANCELLED+"",Ke.NAVIGATION_DUPLICATED+"";function Qs(t,e){return Pe(new Error,{type:t,[t_]:!0},e)}function Bn(t,e){return t instanceof Error&&t_ in t&&(e==null||!!(t.type&e))}const aI=["params","query","hash"];function cI(t){if(typeof t=="string")return t;if(t.path!=null)return t.path;const e={};for(const n of aI)n in t&&(e[n]=t[n]);return JSON.stringify(e,null,2)}function lI(t){const e={};if(t===""||t==="?")return e;const n=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<n.length;++r){const s=n[r].replace(Qm," "),i=s.indexOf("="),o=uo(i<0?s:s.slice(0,i)),c=i<0?null:uo(s.slice(i+1));if(o in e){let l=e[o];dn(l)||(l=e[o]=[l]),l.push(c)}else e[o]=c}return e}function Fd(t){let e="";for(let n in t){const r=t[n];if(n=Hw(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(dn(r)?r.map(s=>s&&Zl(s)):[r&&Zl(r)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function uI(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=dn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const hI=Symbol(""),Ud=Symbol(""),Ic=Symbol(""),Ku=Symbol(""),nu=Symbol("");function Ni(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function vr(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((c,l)=>{const u=g=>{g===!1?l(Qs(Ke.NAVIGATION_ABORTED,{from:n,to:e})):g instanceof Error?l(g):oI(g)?l(Qs(Ke.NAVIGATION_GUARD_REDIRECT,{from:e,to:g})):(o&&r.enterCallbacks[s]===o&&typeof g=="function"&&o.push(g),c())},f=i(()=>t.call(r&&r.instances[s],e,n,u));let d=Promise.resolve(f);t.length<3&&(d=d.then(u)),d.catch(g=>l(g))})}function Sl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const c in o.components){let l=o.components[c];if(!(e!=="beforeRouteEnter"&&!o.instances[c]))if(zm(l)){const u=(l.__vccOpts||l)[e];u&&i.push(vr(u,n,r,o,c,s))}else{let u=l();i.push(()=>u.then(f=>{if(!f)throw new Error(`Couldn't resolve component "${c}" at "${o.path}"`);const d=Vw(f)?f.default:f;o.mods[c]=f,o.components[c]=d;const g=(d.__vccOpts||d)[e];return g&&vr(g,n,r,o,c,s)()}))}}return i}function fI(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const c=e.matched[o];c&&(t.matched.find(u=>Ks(u,c))?r.push(c):n.push(c));const l=t.matched[o];l&&(e.matched.find(u=>Ks(u,l))||s.push(l))}return[n,r,s]}/*!
 * vue-router v4.6.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let dI=()=>location.protocol+"//"+location.host;function n_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let o=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(o);return c[0]!=="/"&&(c="/"+c),Od(c,"")}return Od(n,t)+r+s}function pI(t,e,n,r){let s=[],i=[],o=null;const c=({state:g})=>{const _=n_(t,location),S=n.value,P=e.value;let N=0;if(g){if(n.value=_,e.value=g,o&&o===S){o=null;return}N=P?g.position-P.position:0}else r(_);s.forEach(j=>{j(n.value,S,{delta:N,type:eu.pop,direction:N?N>0?Rl.forward:Rl.back:Rl.unknown})})};function l(){o=n.value}function u(g){s.push(g);const _=()=>{const S=s.indexOf(g);S>-1&&s.splice(S,1)};return i.push(_),_}function f(){if(document.visibilityState==="hidden"){const{history:g}=window;if(!g.state)return;g.replaceState(Pe({},g.state,{scroll:wc()}),"")}}function d(){for(const g of i)g();i=[],window.removeEventListener("popstate",c),window.removeEventListener("pagehide",f),document.removeEventListener("visibilitychange",f)}return window.addEventListener("popstate",c),window.addEventListener("pagehide",f),document.addEventListener("visibilitychange",f),{pauseListeners:l,listen:u,destroy:d}}function jd(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?wc():null}}function gI(t){const{history:e,location:n}=window,r={value:n_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,u,f){const d=t.indexOf("#"),g=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:dI()+t+l;try{e[f?"replaceState":"pushState"](u,"",g),s.value=u}catch(_){console.error(_),n[f?"replace":"assign"](g)}}function o(l,u){i(l,Pe({},e.state,jd(s.value.back,l,s.value.forward,!0),u,{position:s.value.position}),!0),r.value=l}function c(l,u){const f=Pe({},s.value,e.state,{forward:l,scroll:wc()});i(f.current,f,!0),i(l,Pe({},jd(r.value,l,null),{position:f.position+1},u),!1),r.value=l}return{location:r,state:s,push:c,replace:o}}function mI(t){t=Zw(t);const e=gI(t),n=pI(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Pe({location:"",base:t,go:r,createHref:tI.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}let os=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.Group=2]="Group",t})({});var rt=(function(t){return t[t.Static=0]="Static",t[t.Param=1]="Param",t[t.ParamRegExp=2]="ParamRegExp",t[t.ParamRegExpEnd=3]="ParamRegExpEnd",t[t.EscapeNext=4]="EscapeNext",t})(rt||{});const _I={type:os.Static,value:""},yI=/[a-zA-Z0-9_]/;function vI(t){if(!t)return[[]];if(t==="/")return[[_I]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(_){throw new Error(`ERR (${n})/"${u}": ${_}`)}let n=rt.Static,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let c=0,l,u="",f="";function d(){u&&(n===rt.Static?i.push({type:os.Static,value:u}):n===rt.Param||n===rt.ParamRegExp||n===rt.ParamRegExpEnd?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:os.Param,value:u,regexp:f,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),u="")}function g(){u+=l}for(;c<t.length;){if(l=t[c++],l==="\\"&&n!==rt.ParamRegExp){r=n,n=rt.EscapeNext;continue}switch(n){case rt.Static:l==="/"?(u&&d(),o()):l===":"?(d(),n=rt.Param):g();break;case rt.EscapeNext:g(),n=r;break;case rt.Param:l==="("?n=rt.ParamRegExp:yI.test(l)?g():(d(),n=rt.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--);break;case rt.ParamRegExp:l===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+l:n=rt.ParamRegExpEnd:f+=l;break;case rt.ParamRegExpEnd:d(),n=rt.Static,l!=="*"&&l!=="?"&&l!=="+"&&c--,f="";break;default:e("Unknown state");break}}return n===rt.ParamRegExp&&e(`Unfinished custom RegExp for param "${u}"`),d(),o(),s}const Bd="[^/]+?",EI={sensitive:!1,strict:!1,start:!0,end:!0};var Dt=(function(t){return t[t._multiplier=10]="_multiplier",t[t.Root=90]="Root",t[t.Segment=40]="Segment",t[t.SubSegment=30]="SubSegment",t[t.Static=40]="Static",t[t.Dynamic=20]="Dynamic",t[t.BonusCustomRegExp=10]="BonusCustomRegExp",t[t.BonusWildcard=-50]="BonusWildcard",t[t.BonusRepeatable=-20]="BonusRepeatable",t[t.BonusOptional=-8]="BonusOptional",t[t.BonusStrict=.7000000000000001]="BonusStrict",t[t.BonusCaseSensitive=.25]="BonusCaseSensitive",t})(Dt||{});const TI=/[.+*?^${}()[\]/\\]/g;function wI(t,e){const n=Pe({},EI,e),r=[];let s=n.start?"^":"";const i=[];for(const u of t){const f=u.length?[]:[Dt.Root];n.strict&&!u.length&&(s+="/");for(let d=0;d<u.length;d++){const g=u[d];let _=Dt.Segment+(n.sensitive?Dt.BonusCaseSensitive:0);if(g.type===os.Static)d||(s+="/"),s+=g.value.replace(TI,"\\$&"),_+=Dt.Static;else if(g.type===os.Param){const{value:S,repeatable:P,optional:N,regexp:j}=g;i.push({name:S,repeatable:P,optional:N});const V=j||Bd;if(V!==Bd){_+=Dt.BonusCustomRegExp;try{`${V}`}catch(q){throw new Error(`Invalid custom RegExp for param "${S}" (${V}): `+q.message)}}let $=P?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;d||($=N&&u.length<2?`(?:/${$})`:"/"+$),N&&($+="?"),s+=$,_+=Dt.Dynamic,N&&(_+=Dt.BonusOptional),P&&(_+=Dt.BonusRepeatable),V===".*"&&(_+=Dt.BonusWildcard)}f.push(_)}r.push(f)}if(n.strict&&n.end){const u=r.length-1;r[u][r[u].length-1]+=Dt.BonusStrict}n.strict||(s+="/?"),n.end?s+="$":n.strict&&!s.endsWith("/")&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function c(u){const f=u.match(o),d={};if(!f)return null;for(let g=1;g<f.length;g++){const _=f[g]||"",S=i[g-1];d[S.name]=_&&S.repeatable?_.split("/"):_}return d}function l(u){let f="",d=!1;for(const g of t){(!d||!f.endsWith("/"))&&(f+="/"),d=!1;for(const _ of g)if(_.type===os.Static)f+=_.value;else if(_.type===os.Param){const{value:S,repeatable:P,optional:N}=_,j=S in u?u[S]:"";if(dn(j)&&!P)throw new Error(`Provided param "${S}" is an array but it is not repeatable (* or + modifiers)`);const V=dn(j)?j.join("/"):j;if(!V)if(N)g.length<2&&(f.endsWith("/")?f=f.slice(0,-1):d=!0);else throw new Error(`Missing required param "${S}"`);f+=V}}return f||"/"}return{re:o,score:r,keys:i,parse:c,stringify:l}}function II(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===Dt.Static+Dt.Segment?-1:1:t.length>e.length?e.length===1&&e[0]===Dt.Static+Dt.Segment?1:-1:0}function r_(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=II(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if($d(r))return 1;if($d(s))return-1}return s.length-r.length}function $d(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const AI={strict:!1,end:!0,sensitive:!1};function bI(t,e,n){const r=wI(vI(t.path),n),s=Pe(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function RI(t,e){const n=[],r=new Map;e=xd(AI,e);function s(d){return r.get(d)}function i(d,g,_){const S=!_,P=Hd(d);P.aliasOf=_&&_.record;const N=xd(e,d),j=[P];if("alias"in d){const q=typeof d.alias=="string"?[d.alias]:d.alias;for(const Y of q)j.push(Hd(Pe({},P,{components:_?_.record.components:P.components,path:Y,aliasOf:_?_.record:P})))}let V,$;for(const q of j){const{path:Y}=q;if(g&&Y[0]!=="/"){const Z=g.record.path,E=Z[Z.length-1]==="/"?"":"/";q.path=g.record.path+(Y&&E+Y)}if(V=bI(q,g,N),_?_.alias.push(V):($=$||V,$!==V&&$.alias.push(V),S&&d.name&&!Gd(V)&&o(d.name)),s_(V)&&l(V),P.children){const Z=P.children;for(let E=0;E<Z.length;E++)i(Z[E],V,_&&_.children[E])}_=_||V}return $?()=>{o($)}:zi}function o(d){if(e_(d)){const g=r.get(d);g&&(r.delete(d),n.splice(n.indexOf(g),1),g.children.forEach(o),g.alias.forEach(o))}else{const g=n.indexOf(d);g>-1&&(n.splice(g,1),d.record.name&&r.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function c(){return n}function l(d){const g=PI(d,n);n.splice(g,0,d),d.record.name&&!Gd(d)&&r.set(d.record.name,d)}function u(d,g){let _,S={},P,N;if("name"in d&&d.name){if(_=r.get(d.name),!_)throw Qs(Ke.MATCHER_NOT_FOUND,{location:d});N=_.record.name,S=Pe(qd(g.params,_.keys.filter($=>!$.optional).concat(_.parent?_.parent.keys.filter($=>$.optional):[]).map($=>$.name)),d.params&&qd(d.params,_.keys.map($=>$.name))),P=_.stringify(S)}else if(d.path!=null)P=d.path,_=n.find($=>$.re.test(P)),_&&(S=_.parse(P),N=_.record.name);else{if(_=g.name?r.get(g.name):n.find($=>$.re.test(g.path)),!_)throw Qs(Ke.MATCHER_NOT_FOUND,{location:d,currentLocation:g});N=_.record.name,S=Pe({},g.params,d.params),P=_.stringify(S)}const j=[];let V=_;for(;V;)j.unshift(V.record),V=V.parent;return{name:N,path:P,params:S,matched:j,meta:CI(j)}}t.forEach(d=>i(d));function f(){n.length=0,r.clear()}return{addRoute:i,resolve:u,removeRoute:o,clearRoutes:f,getRoutes:c,getRecordMatcher:s}}function qd(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Hd(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:SI(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function SI(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Gd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function CI(t){return t.reduce((e,n)=>Pe(e,n.meta),{})}function PI(t,e){let n=0,r=e.length;for(;n!==r;){const i=n+r>>1;r_(t,e[i])<0?r=i:n=i+1}const s=kI(t);return s&&(r=e.lastIndexOf(s,r-1)),r}function kI(t){let e=t;for(;e=e.parent;)if(s_(e)&&r_(t,e)===0)return e}function s_({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function Wd(t){const e=hn(Ic),n=hn(Ku),r=bt(()=>{const l=ct(t.to);return e.resolve(l)}),s=bt(()=>{const{matched:l}=r.value,{length:u}=l,f=l[u-1],d=n.matched;if(!f||!d.length)return-1;const g=d.findIndex(Ks.bind(null,f));if(g>-1)return g;const _=zd(l[u-2]);return u>1&&zd(f)===_&&d[d.length-1].path!==_?d.findIndex(Ks.bind(null,l[u-2])):g}),i=bt(()=>s.value>-1&&OI(n.params,r.value.params)),o=bt(()=>s.value>-1&&s.value===n.matched.length-1&&Zm(n.params,r.value.params));function c(l={}){if(xI(l)){const u=e[ct(t.replace)?"replace":"push"](ct(t.to)).catch(zi);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>u),u}return Promise.resolve()}return{route:r,href:bt(()=>r.value.href),isActive:i,isExactActive:o,navigate:c}}function NI(t){return t.length===1?t[0]:t}const DI=vs({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"},viewTransition:Boolean},useLink:Wd,setup(t,{slots:e}){const n=dc(Wd(t)),{options:r}=hn(Ic),s=bt(()=>({[Kd(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Kd(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&NI(e.default(n));return t.custom?i:Wu("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),VI=DI;function xI(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function OI(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!dn(s)||s.length!==r.length||r.some((i,o)=>i.valueOf()!==s[o].valueOf()))return!1}return!0}function zd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Kd=(t,e,n)=>t??e??n,LI=vs({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=hn(nu),s=bt(()=>t.route||r.value),i=hn(Ud,0),o=bt(()=>{let u=ct(i);const{matched:f}=s.value;let d;for(;(d=f[u])&&!d.components;)u++;return u}),c=bt(()=>s.value.matched[o.value]);pa(Ud,bt(()=>o.value+1)),pa(hI,c),pa(nu,s);const l=qt();return Pr(()=>[l.value,c.value,t.name],([u,f,d],[g,_,S])=>{f&&(f.instances[d]=u,_&&_!==f&&u&&u===g&&(f.leaveGuards.size||(f.leaveGuards=_.leaveGuards),f.updateGuards.size||(f.updateGuards=_.updateGuards))),u&&f&&(!_||!Ks(f,_)||!g)&&(f.enterCallbacks[d]||[]).forEach(P=>P(u))},{flush:"post"}),()=>{const u=s.value,f=t.name,d=c.value,g=d&&d.components[f];if(!g)return Qd(n.default,{Component:g,route:u});const _=d.props[f],S=_?_===!0?u.params:typeof _=="function"?_(u):_:null,N=Wu(g,Pe({},S,e,{onVnodeUnmounted:j=>{j.component.isUnmounted&&(d.instances[f]=null)},ref:l}));return Qd(n.default,{Component:N,route:u})||N}}});function Qd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const MI=LI;function FI(t){const e=RI(t.routes,t),n=t.parseQuery||lI,r=t.stringifyQuery||Fd,s=t.history,i=Ni(),o=Ni(),c=Ni(),l=DE(pr);let u=pr;Ns&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=Al.bind(null,M=>""+M),d=Al.bind(null,Ww),g=Al.bind(null,uo);function _(M,ee){let Q,ne;return e_(M)?(Q=e.getRecordMatcher(M),ne=ee):ne=M,e.addRoute(ne,Q)}function S(M){const ee=e.getRecordMatcher(M);ee&&e.removeRoute(ee)}function P(){return e.getRoutes().map(M=>M.record)}function N(M){return!!e.getRecordMatcher(M)}function j(M,ee){if(ee=Pe({},ee||l.value),typeof M=="string"){const C=bl(n,M,ee.path),O=e.resolve({path:C.path},ee),U=s.createHref(C.fullPath);return Pe(C,O,{params:g(O.params),hash:uo(C.hash),redirectedFrom:void 0,href:U})}let Q;if(M.path!=null)Q=Pe({},M,{path:bl(n,M.path,ee.path).path});else{const C=Pe({},M.params);for(const O in C)C[O]==null&&delete C[O];Q=Pe({},M,{params:d(C)}),ee.params=d(ee.params)}const ne=e.resolve(Q,ee),me=M.hash||"";ne.params=f(g(ne.params));const T=Qw(r,Pe({},M,{hash:qw(me),path:ne.path})),b=s.createHref(T);return Pe({fullPath:T,hash:me,query:r===Fd?uI(M.query):M.query||{}},ne,{redirectedFrom:void 0,href:b})}function V(M){return typeof M=="string"?bl(n,M,l.value.path):Pe({},M)}function $(M,ee){if(u!==M)return Qs(Ke.NAVIGATION_CANCELLED,{from:ee,to:M})}function q(M){return E(M)}function Y(M){return q(Pe(V(M),{replace:!0}))}function Z(M,ee){const Q=M.matched[M.matched.length-1];if(Q&&Q.redirect){const{redirect:ne}=Q;let me=typeof ne=="function"?ne(M,ee):ne;return typeof me=="string"&&(me=me.includes("?")||me.includes("#")?me=V(me):{path:me},me.params={}),Pe({query:M.query,hash:M.hash,params:me.path!=null?{}:M.params},me)}}function E(M,ee){const Q=u=j(M),ne=l.value,me=M.state,T=M.force,b=M.replace===!0,C=Z(Q,ne);if(C)return E(Pe(V(C),{state:typeof C=="object"?Pe({},me,C.state):me,force:T,replace:b}),ee||Q);const O=Q;O.redirectedFrom=ee;let U;return!T&&Jw(r,ne,Q)&&(U=Qs(Ke.NAVIGATION_DUPLICATED,{to:O,from:ne}),Zt(ne,ne,!0,!1)),(U?Promise.resolve(U):A(O,ne)).catch(L=>Bn(L)?Bn(L,Ke.NAVIGATION_GUARD_REDIRECT)?L:an(L):Ee(L,O,ne)).then(L=>{if(L){if(Bn(L,Ke.NAVIGATION_GUARD_REDIRECT))return E(Pe({replace:b},V(L.to),{state:typeof L.to=="object"?Pe({},me,L.to.state):me,force:T}),ee||O)}else L=I(O,ne,!0,b,me);return R(O,ne,L),L})}function y(M,ee){const Q=$(M,ee);return Q?Promise.reject(Q):Promise.resolve()}function v(M){const ee=cr.values().next().value;return ee&&typeof ee.runWithContext=="function"?ee.runWithContext(M):M()}function A(M,ee){let Q;const[ne,me,T]=fI(M,ee);Q=Sl(ne.reverse(),"beforeRouteLeave",M,ee);for(const C of ne)C.leaveGuards.forEach(O=>{Q.push(vr(O,M,ee))});const b=y.bind(null,M,ee);return Q.push(b),Ut(Q).then(()=>{Q=[];for(const C of i.list())Q.push(vr(C,M,ee));return Q.push(b),Ut(Q)}).then(()=>{Q=Sl(me,"beforeRouteUpdate",M,ee);for(const C of me)C.updateGuards.forEach(O=>{Q.push(vr(O,M,ee))});return Q.push(b),Ut(Q)}).then(()=>{Q=[];for(const C of T)if(C.beforeEnter)if(dn(C.beforeEnter))for(const O of C.beforeEnter)Q.push(vr(O,M,ee));else Q.push(vr(C.beforeEnter,M,ee));return Q.push(b),Ut(Q)}).then(()=>(M.matched.forEach(C=>C.enterCallbacks={}),Q=Sl(T,"beforeRouteEnter",M,ee,v),Q.push(b),Ut(Q))).then(()=>{Q=[];for(const C of o.list())Q.push(vr(C,M,ee));return Q.push(b),Ut(Q)}).catch(C=>Bn(C,Ke.NAVIGATION_CANCELLED)?C:Promise.reject(C))}function R(M,ee,Q){c.list().forEach(ne=>v(()=>ne(M,ee,Q)))}function I(M,ee,Q,ne,me){const T=$(M,ee);if(T)return T;const b=ee===pr,C=Ns?history.state:{};Q&&(ne||b?s.replace(M.fullPath,Pe({scroll:b&&C&&C.scroll},me)):s.push(M.fullPath,me)),l.value=M,Zt(M,ee,Q,b),an()}let w;function fe(){w||(w=s.listen((M,ee,Q)=>{if(!Gt.listening)return;const ne=j(M),me=Z(ne,Gt.currentRoute.value);if(me){E(Pe(me,{replace:!0,force:!0}),ne).catch(zi);return}u=ne;const T=l.value;Ns&&sI(Md(T.fullPath,Q.delta),wc()),A(ne,T).catch(b=>Bn(b,Ke.NAVIGATION_ABORTED|Ke.NAVIGATION_CANCELLED)?b:Bn(b,Ke.NAVIGATION_GUARD_REDIRECT)?(E(Pe(V(b.to),{force:!0}),ne).then(C=>{Bn(C,Ke.NAVIGATION_ABORTED|Ke.NAVIGATION_DUPLICATED)&&!Q.delta&&Q.type===eu.pop&&s.go(-1,!1)}).catch(zi),Promise.reject()):(Q.delta&&s.go(-Q.delta,!1),Ee(b,ne,T))).then(b=>{b=b||I(ne,T,!1),b&&(Q.delta&&!Bn(b,Ke.NAVIGATION_CANCELLED)?s.go(-Q.delta,!1):Q.type===eu.pop&&Bn(b,Ke.NAVIGATION_ABORTED|Ke.NAVIGATION_DUPLICATED)&&s.go(-1,!1)),R(ne,T,b)}).catch(zi)}))}let Ye=Ni(),je=Ni(),Ie;function Ee(M,ee,Q){an(M);const ne=je.list();return ne.length?ne.forEach(me=>me(M,ee,Q)):console.error(M),Promise.reject(M)}function Ht(){return Ie&&l.value!==pr?Promise.resolve():new Promise((M,ee)=>{Ye.add([M,ee])})}function an(M){return Ie||(Ie=!M,fe(),Ye.list().forEach(([ee,Q])=>M?Q(M):ee()),Ye.reset()),M}function Zt(M,ee,Q,ne){const{scrollBehavior:me}=t;if(!Ns||!me)return Promise.resolve();const T=!Q&&iI(Md(M.fullPath,0))||(ne||!Q)&&history.state&&history.state.scroll||null;return Bu().then(()=>me(M,ee,T)).then(b=>b&&rI(b)).catch(b=>Ee(b,M,ee))}const Be=M=>s.go(M);let $e;const cr=new Set,Gt={currentRoute:l,listening:!0,addRoute:_,removeRoute:S,clearRoutes:e.clearRoutes,hasRoute:N,getRoutes:P,resolve:j,options:t,push:q,replace:Y,go:Be,back:()=>Be(-1),forward:()=>Be(1),beforeEach:i.add,beforeResolve:o.add,afterEach:c.add,onError:je.add,isReady:Ht,install(M){M.component("RouterLink",VI),M.component("RouterView",MI),M.config.globalProperties.$router=Gt,Object.defineProperty(M.config.globalProperties,"$route",{enumerable:!0,get:()=>ct(l)}),Ns&&!$e&&l.value===pr&&($e=!0,q(s.location).catch(ne=>{}));const ee={};for(const ne in pr)Object.defineProperty(ee,ne,{get:()=>l.value[ne],enumerable:!0});M.provide(Ic,Gt),M.provide(Ku,tm(ee)),M.provide(nu,l);const Q=M.unmount;cr.add(M),M.unmount=function(){cr.delete(M),cr.size<1&&(u=pr,w&&w(),w=null,l.value=pr,$e=!1,Ie=!1),Q()}}};function Ut(M){return M.reduce((ee,Q)=>ee.then(()=>v(Q)),Promise.resolve())}return Gt}function UI(){return hn(Ic)}function Ac(t){return hn(Ku)}const jI=()=>{};var Jd={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},BI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],c=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},o_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,c=o?t[s+1]:0,l=s+2<t.length,u=l?t[s+2]:0,f=i>>2,d=(i&3)<<4|c>>4;let g=(c&15)<<2|u>>6,_=u&63;l||(_=64,o||(g=64)),r.push(n[f],n[d],n[g],n[_])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],c=s<t.length?n[t.charAt(s)]:0;++s;const u=s<t.length?n[t.charAt(s)]:64;++s;const d=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||c==null||u==null||d==null)throw new $I;const g=i<<2|c>>4;if(r.push(g),u!==64){const _=c<<4&240|u>>2;if(r.push(_),d!==64){const S=u<<6&192|d;r.push(S)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $I extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const qI=function(t){const e=i_(t);return o_.encodeByteArray(e,!0)},Ma=function(t){return qI(t).replace(/\./g,"")},a_=function(t){try{return o_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function HI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const GI=()=>HI().__FIREBASE_DEFAULTS__,WI=()=>{if(typeof process>"u"||typeof Jd>"u")return;const t=Jd.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},zI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&a_(t[1]);return e&&JSON.parse(e)},bc=()=>{try{return jI()||GI()||WI()||zI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},c_=t=>{var e,n;return(n=(e=bc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},l_=t=>{const e=c_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},u_=()=>{var t;return(t=bc())===null||t===void 0?void 0:t.config},h_=t=>{var e;return(e=bc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Es(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Qu(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function QI(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ma(JSON.stringify(n)),Ma(JSON.stringify(o)),""].join(".")}const Ki={};function JI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ki))Ki[e]?t.emulator.push(e):t.prod.push(e);return t}function YI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Yd=!1;function Ju(t,e){if(typeof window>"u"||typeof document>"u"||!Es(window.location.host)||Ki[t]===e||Ki[t]||Yd)return;Ki[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",i=JI().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function c(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function l(g,_){g.setAttribute("width","24"),g.setAttribute("id",_),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function u(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{Yd=!0,o()},g}function f(g,_){g.setAttribute("id",_),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function d(){const g=YI(r),_=n("text"),S=document.getElementById(_)||document.createElement("span"),P=n("learnmore"),N=document.getElementById(P)||document.createElement("a"),j=n("preprendIcon"),V=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const $=g.element;c($),f(N,P);const q=u();l(V,j),$.append(V,S,N,q),document.body.appendChild($)}i?(S.innerText="Preview backend disconnected.",V.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(V.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,S.innerText="Preview backend running in this workspace."),S.setAttribute("id",_)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",d):d()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ct(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function XI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ct())}function ZI(){var t;const e=(t=bc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function eA(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tA(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function nA(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function rA(){const t=Ct();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sA(){return!ZI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function iA(){try{return typeof indexedDB=="object"}catch{return!1}}function oA(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aA="FirebaseError";class ir extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=aA,Object.setPrototypeOf(this,ir.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ro.prototype.create)}}class Ro{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?cA(i,r):"Error",c=`${this.serviceName}: ${o} (${s}).`;return new ir(s,c,r)}}function cA(t,e){return t.replace(lA,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const lA=/\{\$([^}]+)}/g;function uA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ds(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Xd(i)&&Xd(o)){if(!ds(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Xd(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Li(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Mi(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function hA(t,e){const n=new fA(t,e);return n.subscribe.bind(n)}class fA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");dA(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Cl),s.error===void 0&&(s.error=Cl),s.complete===void 0&&(s.complete=Cl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function dA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Cl(){}/**
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
 */function Fe(t){return t&&t._delegate?t._delegate:t}class Lr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const rs="[DEFAULT]";/**
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
 */class pA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new KI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(mA(e))try{this.getOrInitializeService({instanceIdentifier:rs})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=rs){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=rs){return this.instances.has(e)}getOptions(e=rs){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=rs){return this.component?this.component.multipleInstances?e:rs:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gA(t){return t===rs?void 0:t}function mA(t){return t.instantiationMode==="EAGER"}/**
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
 */class _A{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new pA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const yA={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},vA=Te.INFO,EA={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},TA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=EA[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Yu{constructor(e){this.name=e,this._logLevel=vA,this._logHandler=TA,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}const wA=(t,e)=>e.some(n=>t instanceof n);let Zd,ep;function IA(){return Zd||(Zd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function AA(){return ep||(ep=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const f_=new WeakMap,ru=new WeakMap,d_=new WeakMap,Pl=new WeakMap,Xu=new WeakMap;function bA(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(kr(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&f_.set(n,t)}).catch(()=>{}),Xu.set(e,t),e}function RA(t){if(ru.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ru.set(t,e)}let su={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ru.get(t);if(e==="objectStoreNames")return t.objectStoreNames||d_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function SA(t){su=t(su)}function CA(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(kl(this),e,...n);return d_.set(r,e.sort?e.sort():[e]),kr(r)}:AA().includes(t)?function(...e){return t.apply(kl(this),e),kr(f_.get(this))}:function(...e){return kr(t.apply(kl(this),e))}}function PA(t){return typeof t=="function"?CA(t):(t instanceof IDBTransaction&&RA(t),wA(t,IA())?new Proxy(t,su):t)}function kr(t){if(t instanceof IDBRequest)return bA(t);if(Pl.has(t))return Pl.get(t);const e=PA(t);return e!==t&&(Pl.set(t,e),Xu.set(e,t)),e}const kl=t=>Xu.get(t);function kA(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),c=kr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(kr(o.result),l.oldVersion,l.newVersion,kr(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),c.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",u=>s(u.oldVersion,u.newVersion,u))}).catch(()=>{}),c}const NA=["get","getKey","getAll","getAllKeys","count"],DA=["put","add","delete","clear"],Nl=new Map;function tp(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Nl.get(e))return Nl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=DA.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||NA.includes(n)))return;const i=async function(o,...c){const l=this.transaction(o,s?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(c.shift())),(await Promise.all([u[n](...c),s&&l.done]))[0]};return Nl.set(e,i),i}SA(t=>({...t,get:(e,n,r)=>tp(e,n)||t.get(e,n,r),has:(e,n)=>!!tp(e,n)||t.has(e,n)}));/**
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
 */class VA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const iu="@firebase/app",np="0.13.2";/**
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
 */const Zn=new Yu("@firebase/app"),OA="@firebase/app-compat",LA="@firebase/analytics-compat",MA="@firebase/analytics",FA="@firebase/app-check-compat",UA="@firebase/app-check",jA="@firebase/auth",BA="@firebase/auth-compat",$A="@firebase/database",qA="@firebase/data-connect",HA="@firebase/database-compat",GA="@firebase/functions",WA="@firebase/functions-compat",zA="@firebase/installations",KA="@firebase/installations-compat",QA="@firebase/messaging",JA="@firebase/messaging-compat",YA="@firebase/performance",XA="@firebase/performance-compat",ZA="@firebase/remote-config",e0="@firebase/remote-config-compat",t0="@firebase/storage",n0="@firebase/storage-compat",r0="@firebase/firestore",s0="@firebase/ai",i0="@firebase/firestore-compat",o0="firebase",a0="11.10.0";/**
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
 */const ou="[DEFAULT]",c0={[iu]:"fire-core",[OA]:"fire-core-compat",[MA]:"fire-analytics",[LA]:"fire-analytics-compat",[UA]:"fire-app-check",[FA]:"fire-app-check-compat",[jA]:"fire-auth",[BA]:"fire-auth-compat",[$A]:"fire-rtdb",[qA]:"fire-data-connect",[HA]:"fire-rtdb-compat",[GA]:"fire-fn",[WA]:"fire-fn-compat",[zA]:"fire-iid",[KA]:"fire-iid-compat",[QA]:"fire-fcm",[JA]:"fire-fcm-compat",[YA]:"fire-perf",[XA]:"fire-perf-compat",[ZA]:"fire-rc",[e0]:"fire-rc-compat",[t0]:"fire-gcs",[n0]:"fire-gcs-compat",[r0]:"fire-fst",[i0]:"fire-fst-compat",[s0]:"fire-vertex","fire-js":"fire-js",[o0]:"fire-js-all"};/**
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
 */const Fa=new Map,l0=new Map,au=new Map;function rp(t,e){try{t.container.addComponent(e)}catch(n){Zn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ps(t){const e=t.name;if(au.has(e))return Zn.debug(`There were multiple attempts to register component ${e}.`),!1;au.set(e,t);for(const n of Fa.values())rp(n,t);for(const n of l0.values())rp(n,t);return!0}function Rc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function zt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const u0={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Nr=new Ro("app","Firebase",u0);/**
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
 */class h0{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Nr.create("app-deleted",{appName:this._name})}}/**
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
 */const ii=a0;function p_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:ou,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Nr.create("bad-app-name",{appName:String(s)});if(n||(n=u_()),!n)throw Nr.create("no-options");const i=Fa.get(s);if(i){if(ds(n,i.options)&&ds(r,i.config))return i;throw Nr.create("duplicate-app",{appName:s})}const o=new _A(s);for(const l of au.values())o.addComponent(l);const c=new h0(n,r,o);return Fa.set(s,c),c}function Zu(t=ou){const e=Fa.get(t);if(!e&&t===ou&&u_())return p_();if(!e)throw Nr.create("no-app",{appName:t});return e}function Rn(t,e,n){var r;let s=(r=c0[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const c=[`Unable to register library "${s}" with version "${e}":`];i&&c.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Zn.warn(c.join(" "));return}ps(new Lr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const f0="firebase-heartbeat-database",d0=1,ho="firebase-heartbeat-store";let Dl=null;function g_(){return Dl||(Dl=kA(f0,d0,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ho)}catch(n){console.warn(n)}}}}).catch(t=>{throw Nr.create("idb-open",{originalErrorMessage:t.message})})),Dl}async function p0(t){try{const n=(await g_()).transaction(ho),r=await n.objectStore(ho).get(m_(t));return await n.done,r}catch(e){if(e instanceof ir)Zn.warn(e.message);else{const n=Nr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Zn.warn(n.message)}}}async function sp(t,e){try{const r=(await g_()).transaction(ho,"readwrite");await r.objectStore(ho).put(e,m_(t)),await r.done}catch(n){if(n instanceof ir)Zn.warn(n.message);else{const r=Nr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Zn.warn(r.message)}}}function m_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const g0=1024,m0=30;class _0{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new v0(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ip();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>m0){const o=E0(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Zn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ip(),{heartbeatsToSend:r,unsentEntries:s}=y0(this._heartbeatsCache.heartbeats),i=Ma(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(n){return Zn.warn(n),""}}}function ip(){return new Date().toISOString().substring(0,10)}function y0(t,e=g0){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),op(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),op(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class v0{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iA()?oA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await p0(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return sp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return sp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function op(t){return Ma(JSON.stringify({version:2,heartbeats:t})).length}function E0(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
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
 */function T0(t){ps(new Lr("platform-logger",e=>new VA(e),"PRIVATE")),ps(new Lr("heartbeat",e=>new _0(e),"PRIVATE")),Rn(iu,np,t),Rn(iu,np,"esm2017"),Rn("fire-js","")}T0("");function eh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function __(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const w0=__,y_=new Ro("auth","Firebase",__());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=new Yu("@firebase/auth");function I0(t,...e){Ua.logLevel<=Te.WARN&&Ua.warn(`Auth (${ii}): ${t}`,...e)}function _a(t,...e){Ua.logLevel<=Te.ERROR&&Ua.error(`Auth (${ii}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,...e){throw th(t,...e)}function Sn(t,...e){return th(t,...e)}function v_(t,e,n){const r=Object.assign(Object.assign({},w0()),{[e]:n});return new Ro("auth","Firebase",r).create(e,{appName:t.name})}function Qn(t){return v_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function th(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return y_.create(t,...e)}function he(t,e,...n){if(!t)throw th(e,...n)}function Wn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _a(e),new Error(e)}function er(t,e){t||Wn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function A0(){return ap()==="http:"||ap()==="https:"}function ap(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(A0()||tA()||"connection"in navigator)?navigator.onLine:!0}function R0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Co{constructor(e,n){this.shortDelay=e,this.longDelay=n,er(n>e,"Short delay should be less than long delay!"),this.isMobile=XI()||nA()}get(){return b0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(t,e){er(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Wn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Wn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Wn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],P0=new Co(3e4,6e4);function Gr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function or(t,e,n,r,s={}){return T_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const c=So(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:l},i);return eA()||(u.referrerPolicy="no-referrer"),t.emulatorConfig&&Es(t.emulatorConfig.host)&&(u.credentials="include"),E_.fetch()(await w_(t,t.config.apiHost,n,c),u)})}async function T_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},S0),e);try{const s=new N0(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw aa(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const c=i.ok?o.errorMessage:o.error.message,[l,u]=c.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw aa(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw aa(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw aa(t,"user-disabled",o);const f=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw v_(t,f,u);pn(t,f)}}catch(s){if(s instanceof ir)throw s;pn(t,"network-request-failed",{message:String(s)})}}async function Po(t,e,n,r,s={}){const i=await or(t,e,n,r,s);return"mfaPendingCredential"in i&&pn(t,"multi-factor-auth-required",{_serverResponse:i}),i}async function w_(t,e,n,r){const s=`${e}${n}?${r}`,i=t,o=i.config.emulator?nh(t.config,s):`${t.config.apiScheme}://${s}`;return C0.includes(n)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function k0(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class N0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Sn(this.auth,"network-request-failed")),P0.get())})}}function aa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Sn(t,e,r);return s.customData._tokenResponse=n,s}function cp(t){return t!==void 0&&t.enterprise!==void 0}class D0{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return k0(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function V0(t,e){return or(t,"GET","/v2/recaptchaConfig",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x0(t,e){return or(t,"POST","/v1/accounts:delete",e)}async function ja(t,e){return or(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function O0(t,e=!1){const n=Fe(t),r=await n.getIdToken(e),s=rh(r);he(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Qi(Vl(s.auth_time)),issuedAtTime:Qi(Vl(s.iat)),expirationTime:Qi(Vl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Vl(t){return Number(t)*1e3}function rh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return _a("JWT malformed, contained fewer than 3 sections"),null;try{const s=a_(n);return s?JSON.parse(s):(_a("Failed to decode base64 JWT payload"),null)}catch(s){return _a("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function lp(t){const e=rh(t);return he(e,"internal-error"),he(typeof e.exp<"u","internal-error"),he(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Js(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof ir&&L0(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function L0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Qi(this.lastLoginAt),this.creationTime=Qi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ba(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Js(t,ja(n,{idToken:r}));he(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?I_(i.providerUserInfo):[],c=U0(t.providerData,o),l=t.isAnonymous,u=!(t.email&&i.passwordHash)&&!(c!=null&&c.length),f=l?u:!1,d={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new lu(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,d)}async function F0(t){const e=Fe(t);await Ba(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function U0(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function I_(t){return t.map(e=>{var{providerId:n}=e,r=eh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j0(t,e){const n=await T_(t,{},async()=>{const r=So({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=await w_(t,s,"/v1/token",`key=${i}`),c=await t._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:c,body:r};return t.emulatorConfig&&Es(t.emulatorConfig.host)&&(l.credentials="include"),E_.fetch()(o,l)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function B0(t,e){return or(t,"POST","/v2/accounts:revokeToken",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){he(e.idToken,"internal-error"),he(typeof e.idToken<"u","internal-error"),he(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):lp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){he(e.length!==0,"internal-error");const n=lp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(he(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await j0(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new $s;return r&&(he(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(he(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(he(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new $s,this.toJSON())}_performRefresh(){return Wn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gr(t,e){he(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ln{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=eh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new M0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new lu(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Js(this,this.stsTokenManager.getToken(this.auth,e));return he(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return O0(this,e)}reload(){return F0(this)}_assign(e){this!==e&&(he(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ln(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){he(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ba(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(zt(this.auth.app))return Promise.reject(Qn(this.auth));const e=await this.getIdToken();return await Js(this,x0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,c,l,u,f;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(s=n.email)!==null&&s!==void 0?s:void 0,_=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,S=(o=n.photoURL)!==null&&o!==void 0?o:void 0,P=(c=n.tenantId)!==null&&c!==void 0?c:void 0,N=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,j=(u=n.createdAt)!==null&&u!==void 0?u:void 0,V=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:$,emailVerified:q,isAnonymous:Y,providerData:Z,stsTokenManager:E}=n;he($&&E,e,"internal-error");const y=$s.fromJSON(this.name,E);he(typeof $=="string",e,"internal-error"),gr(d,e.name),gr(g,e.name),he(typeof q=="boolean",e,"internal-error"),he(typeof Y=="boolean",e,"internal-error"),gr(_,e.name),gr(S,e.name),gr(P,e.name),gr(N,e.name),gr(j,e.name),gr(V,e.name);const v=new ln({uid:$,auth:e,email:g,emailVerified:q,displayName:d,isAnonymous:Y,photoURL:S,phoneNumber:_,tenantId:P,stsTokenManager:y,createdAt:j,lastLoginAt:V});return Z&&Array.isArray(Z)&&(v.providerData=Z.map(A=>Object.assign({},A))),N&&(v._redirectEventId=N),v}static async _fromIdTokenResponse(e,n,r=!1){const s=new $s;s.updateFromServerResponse(n);const i=new ln({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ba(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];he(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?I_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new $s;c.updateFromIdToken(r);const l=new ln({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:o}),u={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new lu(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,u),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up=new Map;function zn(t){er(t instanceof Function,"Expected a class definition");let e=up.get(t);return e?(er(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,up.set(t,e),e)}/**
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
 */class A_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}A_.type="NONE";const hp=A_;/**
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
 */function ya(t,e,n){return`firebase:${t}:${e}:${n}`}class qs{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ya(this.userKey,s.apiKey,i),this.fullPersistenceKey=ya("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ja(this.auth,{idToken:e}).catch(()=>{});return n?ln._fromGetAccountInfoResponse(this.auth,n,e):null}return ln._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new qs(zn(hp),e,r);const s=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||zn(hp);const o=ya(r,e.config.apiKey,e.name);let c=null;for(const u of n)try{const f=await u._get(o);if(f){let d;if(typeof f=="string"){const g=await ja(e,{idToken:f}).catch(()=>{});if(!g)break;d=await ln._fromGetAccountInfoResponse(e,g,f)}else d=ln._fromJSON(e,f);u!==i&&(c=d),i=u;break}}catch{}const l=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new qs(i,e,r):(i=l[0],c&&await i._set(o,c.toJSON()),await Promise.all(n.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new qs(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(C_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(b_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(k_(e))return"Blackberry";if(N_(e))return"Webos";if(R_(e))return"Safari";if((e.includes("chrome/")||S_(e))&&!e.includes("edge/"))return"Chrome";if(P_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function b_(t=Ct()){return/firefox\//i.test(t)}function R_(t=Ct()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function S_(t=Ct()){return/crios\//i.test(t)}function C_(t=Ct()){return/iemobile/i.test(t)}function P_(t=Ct()){return/android/i.test(t)}function k_(t=Ct()){return/blackberry/i.test(t)}function N_(t=Ct()){return/webos/i.test(t)}function sh(t=Ct()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function $0(t=Ct()){var e;return sh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function q0(){return rA()&&document.documentMode===10}function D_(t=Ct()){return sh(t)||P_(t)||N_(t)||k_(t)||/windows phone/i.test(t)||C_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(t,e=[]){let n;switch(t){case"Browser":n=fp(Ct());break;case"Worker":n=`${fp(Ct())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ii}/${r}`}/**
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
 */class H0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,c)=>{try{const l=e(i);o(l)}catch(l){c(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function G0(t,e={}){return or(t,"GET","/v2/passwordPolicy",Gr(t,e))}/**
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
 */const W0=6;class z0{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:W0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,c;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(c=l.containsNonAlphanumericCharacter)!==null&&c!==void 0?c:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K0{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new dp(this),this.idTokenSubscription=new dp(this),this.beforeStateQueue=new H0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=y_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await qs.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ja(this,{idToken:e}),r=await ln._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(zt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(c,c))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===c)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return he(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ba(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(zt(this.app))return Promise.reject(Qn(this));const n=e?Fe(e):null;return n&&he(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&he(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return zt(this.app)?Promise.reject(Qn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return zt(this.app)?Promise.reject(Qn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await G0(this),n=new z0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ro("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await B0(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;he(n,this,"argument-error"),this.redirectPersistenceManager=await qs.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(he(c,this,"internal-error"),c.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return he(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=V_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;if(zt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&I0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ts(t){return Fe(t)}class dp{constructor(e){this.auth=e,this.observer=null,this.addObserver=hA(n=>this.observer=n)}get next(){return he(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Q0(t){Sc=t}function x_(t){return Sc.loadJS(t)}function J0(){return Sc.recaptchaEnterpriseScript}function Y0(){return Sc.gapiScript}function X0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Z0{constructor(){this.enterprise=new eb}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class eb{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const tb="recaptcha-enterprise",O_="NO_RECAPTCHA";class nb{constructor(e){this.type=tb,this.auth=Ts(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,c)=>{V0(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const u=new D0(l);return i.tenantId==null?i._agentRecaptchaConfig=u:i._tenantRecaptchaConfigs[i.tenantId]=u,o(u.siteKey)}}).catch(l=>{c(l)})})}function s(i,o,c){const l=window.grecaptcha;cp(l)?l.enterprise.ready(()=>{l.enterprise.execute(i,{action:e}).then(u=>{o(u)}).catch(()=>{o(O_)})}):c(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Z0().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{r(this.auth).then(c=>{if(!n&&cp(window.grecaptcha))s(c,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let l=J0();l.length!==0&&(l+=c),x_(l).then(()=>{s(c,i,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}async function pp(t,e,n,r=!1,s=!1){const i=new nb(t);let o;if(s)o=O_;else try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const c=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in c){const l=c.phoneEnrollmentInfo.phoneNumber,u=c.phoneEnrollmentInfo.recaptchaToken;Object.assign(c,{phoneEnrollmentInfo:{phoneNumber:l,recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in c){const l=c.phoneSignInInfo.recaptchaToken;Object.assign(c,{phoneSignInInfo:{recaptchaToken:l,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return c}return r?Object.assign(c,{captchaResp:o}):Object.assign(c,{captchaResponse:o}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function uu(t,e,n,r,s){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const o=await pp(t,e,n,n==="getOobCode");return r(t,o)}else return r(t,e).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await pp(t,e,n,n==="getOobCode");return r(t,c)}else return Promise.reject(o)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rb(t,e){const n=Rc(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ds(i,e??{}))return s;pn(s,"already-initialized")}return n.initialize({options:e})}function sb(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function ib(t,e,n){const r=Ts(t);he(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=L_(e),{host:o,port:c}=ob(e),l=c===null?"":`:${c}`,u={url:`${i}//${o}${l}/`},f=Object.freeze({host:o,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){he(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),he(ds(u,r.config.emulator)&&ds(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=u,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,Es(o)?(Qu(`${i}//${o}${l}`),Ju("Auth",!0)):ab()}function L_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ob(t){const e=L_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:gp(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:gp(o)}}}function gp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function ab(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Wn("not implemented")}_getIdTokenResponse(e){return Wn("not implemented")}_linkToIdToken(e,n){return Wn("not implemented")}_getReauthenticationResolver(e){return Wn("not implemented")}}async function cb(t,e){return or(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lb(t,e){return Po(t,"POST","/v1/accounts:signInWithPassword",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ub(t,e){return Po(t,"POST","/v1/accounts:signInWithEmailLink",Gr(t,e))}async function hb(t,e){return Po(t,"POST","/v1/accounts:signInWithEmailLink",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo extends ih{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new fo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new fo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uu(e,n,"signInWithPassword",lb);case"emailLink":return ub(e,{email:this._email,oobCode:this._password});default:pn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return uu(e,r,"signUpPassword",cb);case"emailLink":return hb(e,{idToken:n,email:this._email,oobCode:this._password});default:pn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hs(t,e){return Po(t,"POST","/v1/accounts:signInWithIdp",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fb="http://localhost";class gs extends ih{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new gs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):pn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=eh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new gs(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Hs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Hs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Hs(e,n)}buildRequest(){const e={requestUri:fb,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=So(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function pb(t){const e=Li(Mi(t)).link,n=e?Li(Mi(e)).deep_link_id:null,r=Li(Mi(t)).deep_link_id;return(r?Li(Mi(r)).link:null)||r||n||e||t}class oh{constructor(e){var n,r,s,i,o,c;const l=Li(Mi(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,f=(r=l.oobCode)!==null&&r!==void 0?r:null,d=db((s=l.mode)!==null&&s!==void 0?s:null);he(u&&f&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=f,this.continueUrl=(i=l.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=l.lang)!==null&&o!==void 0?o:null,this.tenantId=(c=l.tenantId)!==null&&c!==void 0?c:null}static parseLink(e){const n=pb(e);try{return new oh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(){this.providerId=oi.PROVIDER_ID}static credential(e,n){return fo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=oh.parseLink(n);return he(r,"argument-error"),fo._fromEmailAndCode(e,r.code,r.tenantId)}}oi.PROVIDER_ID="password";oi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";oi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class ko extends M_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr extends ko{constructor(){super("facebook.com")}static credential(e){return gs._fromParams({providerId:wr.PROVIDER_ID,signInMethod:wr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return wr.credentialFromTaggedObject(e)}static credentialFromError(e){return wr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return wr.credential(e.oauthAccessToken)}catch{return null}}}wr.FACEBOOK_SIGN_IN_METHOD="facebook.com";wr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir extends ko{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return gs._fromParams({providerId:Ir.PROVIDER_ID,signInMethod:Ir.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Ir.credentialFromTaggedObject(e)}static credentialFromError(e){return Ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Ir.credential(n,r)}catch{return null}}}Ir.GOOGLE_SIGN_IN_METHOD="google.com";Ir.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar extends ko{constructor(){super("github.com")}static credential(e){return gs._fromParams({providerId:Ar.PROVIDER_ID,signInMethod:Ar.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ar.credentialFromTaggedObject(e)}static credentialFromError(e){return Ar.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ar.credential(e.oauthAccessToken)}catch{return null}}}Ar.GITHUB_SIGN_IN_METHOD="github.com";Ar.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br extends ko{constructor(){super("twitter.com")}static credential(e,n){return gs._fromParams({providerId:br.PROVIDER_ID,signInMethod:br.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return br.credentialFromTaggedObject(e)}static credentialFromError(e){return br.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return br.credential(n,r)}catch{return null}}}br.TWITTER_SIGN_IN_METHOD="twitter.com";br.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gb(t,e){return Po(t,"POST","/v1/accounts:signUp",Gr(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await ln._fromIdTokenResponse(e,r,s),o=mp(r);return new ms({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=mp(r);return new ms({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function mp(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a extends ir{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,$a.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new $a(e,n,r,s)}}function F_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?$a._fromErrorAndOperation(t,i,e,r):i})}async function mb(t,e,n=!1){const r=await Js(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ms._forOperation(t,"link",r)}/**
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
 */async function _b(t,e,n=!1){const{auth:r}=t;if(zt(r.app))return Promise.reject(Qn(r));const s="reauthenticate";try{const i=await Js(t,F_(r,s,e,t),n);he(i.idToken,r,"internal-error");const o=rh(i.idToken);he(o,r,"internal-error");const{sub:c}=o;return he(t.uid===c,r,"user-mismatch"),ms._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&pn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U_(t,e,n=!1){if(zt(t.app))return Promise.reject(Qn(t));const r="signIn",s=await F_(t,r,e),i=await ms._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function yb(t,e){return U_(Ts(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function j_(t){const e=Ts(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function vb(t,e,n){if(zt(t.app))return Promise.reject(Qn(t));const r=Ts(t),o=await uu(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",gb).catch(l=>{throw l.code==="auth/password-does-not-meet-requirements"&&j_(t),l}),c=await ms._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(c.user),c}function Eb(t,e,n){return zt(t.app)?Promise.reject(Qn(t)):yb(Fe(t),oi.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&j_(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(t,e){return or(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _p(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=Fe(t),i={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Js(r,Tb(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const c=r.providerData.find(({providerId:l})=>l==="password");c&&(c.displayName=r.displayName,c.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function wb(t,e,n,r){return Fe(t).onIdTokenChanged(e,n,r)}function Ib(t,e,n){return Fe(t).beforeAuthStateChanged(e,n)}function Ab(t,e,n,r){return Fe(t).onAuthStateChanged(e,n,r)}function bb(t){return Fe(t).signOut()}const qa="__sak";/**
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
 */class B_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qa,"1"),this.storage.removeItem(qa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=1e3,Sb=10;class $_ extends B_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=D_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,l)=>{this.notifyListeners(o,l)});return}const r=e.key;n?this.detachListener():this.stopPolling();const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);q0()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Sb):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Rb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}$_.type="LOCAL";const Cb=$_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_ extends B_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}q_.type="SESSION";const H_=q_;/**
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
 */function Pb(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Cc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Cc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(o).map(async u=>u(n.origin,i)),l=await Pb(c);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Cc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ah(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class kb{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((c,l)=>{const u=ah("",20);s.port1.start();const f=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(d){const g=d;if(g.data.eventId===u)switch(g.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(g.data.response);break;default:clearTimeout(f),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cn(){return window}function Nb(t){Cn().location.href=t}/**
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
 */function G_(){return typeof Cn().WorkerGlobalScope<"u"&&typeof Cn().importScripts=="function"}async function Db(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vb(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function xb(){return G_()?self:null}/**
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
 */const W_="firebaseLocalStorageDb",Ob=1,Ha="firebaseLocalStorage",z_="fbase_key";class No{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Pc(t,e){return t.transaction([Ha],e?"readwrite":"readonly").objectStore(Ha)}function Lb(){const t=indexedDB.deleteDatabase(W_);return new No(t).toPromise()}function hu(){const t=indexedDB.open(W_,Ob);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Ha,{keyPath:z_})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Ha)?e(r):(r.close(),await Lb(),e(await hu()))})})}async function yp(t,e,n){const r=Pc(t,!0).put({[z_]:e,value:n});return new No(r).toPromise()}async function Mb(t,e){const n=Pc(t,!1).get(e),r=await new No(n).toPromise();return r===void 0?null:r.value}function vp(t,e){const n=Pc(t,!0).delete(e);return new No(n).toPromise()}const Fb=800,Ub=3;class K_{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hu(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Ub)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return G_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Cc._getInstance(xb()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Db(),!this.activeServiceWorker)return;this.sender=new kb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vb()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hu();return await yp(e,qa,"1"),await vp(e,qa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>yp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Mb(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>vp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Pc(s,!1).getAll();return new No(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Fb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}K_.type="LOCAL";const jb=K_;new Co(3e4,6e4);/**
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
 */function Bb(t,e){return e?zn(e):(he(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ch extends ih{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Hs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Hs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Hs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $b(t){return U_(t.auth,new ch(t),t.bypassAuthState)}function qb(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),_b(n,new ch(t),t.bypassAuthState)}async function Hb(t){const{auth:e,user:n}=t;return he(n,e,"internal-error"),mb(n,new ch(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:c}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $b;case"linkViaPopup":case"linkViaRedirect":return Hb;case"reauthViaPopup":case"reauthViaRedirect":return qb;default:pn(this.auth,"internal-error")}}resolve(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){er(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gb=new Co(2e3,1e4);class Ls extends Q_{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Ls.currentPopupAction&&Ls.currentPopupAction.cancel(),Ls.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return he(e,this.auth,"internal-error"),e}async onExecution(){er(this.filter.length===1,"Popup operations only handle one event");const e=ah();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Sn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Sn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ls.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Sn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gb.get())};e()}}Ls.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wb="pendingRedirect",va=new Map;class zb extends Q_{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=va.get(this.auth._key());if(!e){try{const r=await Kb(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}va.set(this.auth._key(),e)}return this.bypassAuthState||va.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Kb(t,e){const n=Yb(e),r=Jb(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Qb(t,e){va.set(t._key(),e)}function Jb(t){return zn(t._redirectPersistence)}function Yb(t){return ya(Wb,t.config.apiKey,t.name)}async function Xb(t,e,n=!1){if(zt(t.app))return Promise.reject(Qn(t));const r=Ts(t),s=Bb(r,e),o=await new zb(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zb=600*1e3;class eR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!tR(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!J_(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Sn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Zb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ep(e))}saveEventToCache(e){this.cachedEventUids.add(Ep(e)),this.lastProcessedEventTime=Date.now()}}function Ep(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function J_({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function tR(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return J_(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nR(t,e={}){return or(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rR=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,sR=/^https?/;async function iR(t){if(t.config.emulator)return;const{authorizedDomains:e}=await nR(t);for(const n of e)try{if(oR(n))return}catch{}pn(t,"unauthorized-domain")}function oR(t){const e=cu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!sR.test(n))return!1;if(rR.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const aR=new Co(3e4,6e4);function Tp(){const t=Cn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function cR(t){return new Promise((e,n)=>{var r,s,i;function o(){Tp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tp(),n(Sn(t,"network-request-failed"))},timeout:aR.get()})}if(!((s=(r=Cn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Cn().gapi)===null||i===void 0)&&i.load)o();else{const c=X0("iframefcb");return Cn()[c]=()=>{gapi.load?o():n(Sn(t,"network-request-failed"))},x_(`${Y0()}?onload=${c}`).catch(l=>n(l))}}).catch(e=>{throw Ea=null,e})}let Ea=null;function lR(t){return Ea=Ea||cR(t),Ea}/**
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
 */const uR=new Co(5e3,15e3),hR="__/auth/iframe",fR="emulator/auth/iframe",dR={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},pR=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function gR(t){const e=t.config;he(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?nh(e,fR):`https://${t.config.authDomain}/${hR}`,r={apiKey:e.apiKey,appName:t.name,v:ii},s=pR.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${So(r).slice(1)}`}async function mR(t){const e=await lR(t),n=Cn().gapi;return he(n,t,"internal-error"),e.open({where:document.body,url:gR(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:dR,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Sn(t,"network-request-failed"),c=Cn().setTimeout(()=>{i(o)},uR.get());function l(){Cn().clearTimeout(c),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
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
 */const _R={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},yR=500,vR=600,ER="_blank",TR="http://localhost";class wp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wR(t,e,n,r=yR,s=vR){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const l=Object.assign(Object.assign({},_R),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Ct().toLowerCase();n&&(c=S_(u)?ER:n),b_(u)&&(e=e||TR,l.scrollbars="yes");const f=Object.entries(l).reduce((g,[_,S])=>`${g}${_}=${S},`,"");if($0(u)&&c!=="_self")return IR(e||"",c),new wp(null);const d=window.open(e||"",c,f);he(d,t,"popup-blocked");try{d.focus()}catch{}return new wp(d)}function IR(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const AR="__/auth/handler",bR="emulator/auth/handler",RR=encodeURIComponent("fac");async function Ip(t,e,n,r,s,i){he(t.config.authDomain,t,"auth-domain-config-required"),he(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ii,eventId:s};if(e instanceof M_){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",uA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,d]of Object.entries({}))o[f]=d}if(e instanceof ko){const f=e.getScopes().filter(d=>d!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const l=await t._getAppCheckToken(),u=l?`#${RR}=${encodeURIComponent(l)}`:"";return`${SR(t)}?${So(c).slice(1)}${u}`}function SR({config:t}){return t.emulator?nh(t,bR):`https://${t.authDomain}/${AR}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="webStorageSupport";class CR{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=H_,this._completeRedirectFn=Xb,this._overrideRedirectResult=Qb}async _openPopup(e,n,r,s){var i;er((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await Ip(e,n,r,cu(),s);return wR(e,o,ah())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await Ip(e,n,r,cu(),s);return Nb(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(er(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await mR(e),r=new eR(e);return n.register("authEvent",s=>(he(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(xl,{type:xl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[xl];o!==void 0&&n(!!o),pn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=iR(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return D_()||R_()||sh()}}const PR=CR;var Ap="@firebase/auth",bp="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){he(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NR(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function DR(t){ps(new Lr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=r.options;he(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:V_(t)},u=new K0(r,s,i,l);return sb(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ps(new Lr("auth-internal",e=>{const n=Ts(e.getProvider("auth").getImmediate());return(r=>new kR(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Rn(Ap,bp,NR(t)),Rn(Ap,bp,"esm2017")}/**
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
 */const VR=300,xR=h_("authIdTokenMaxAge")||VR;let Rp=null;const OR=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>xR)return;const s=n==null?void 0:n.token;Rp!==s&&(Rp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function LR(t=Zu()){const e=Rc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=rb(t,{popupRedirectResolver:PR,persistence:[jb,Cb,H_]}),r=h_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=OR(i.toString());Ib(n,o,()=>o(n.currentUser)),wb(n,c=>o(c))}}const s=c_("auth");return s&&ib(n,`http://${s}`),n}function MR(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Q0({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Sn("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",MR().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});DR("Browser");var FR="firebase",UR="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Rn(FR,UR,"app");var Sp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Dr,Y_;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(E,y){function v(){}v.prototype=y.prototype,E.D=y.prototype,E.prototype=new v,E.prototype.constructor=E,E.C=function(A,R,I){for(var w=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)w[fe-2]=arguments[fe];return y.prototype[R].apply(A,w)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(E,y,v){v||(v=0);var A=Array(16);if(typeof y=="string")for(var R=0;16>R;++R)A[R]=y.charCodeAt(v++)|y.charCodeAt(v++)<<8|y.charCodeAt(v++)<<16|y.charCodeAt(v++)<<24;else for(R=0;16>R;++R)A[R]=y[v++]|y[v++]<<8|y[v++]<<16|y[v++]<<24;y=E.g[0],v=E.g[1],R=E.g[2];var I=E.g[3],w=y+(I^v&(R^I))+A[0]+3614090360&4294967295;y=v+(w<<7&4294967295|w>>>25),w=I+(R^y&(v^R))+A[1]+3905402710&4294967295,I=y+(w<<12&4294967295|w>>>20),w=R+(v^I&(y^v))+A[2]+606105819&4294967295,R=I+(w<<17&4294967295|w>>>15),w=v+(y^R&(I^y))+A[3]+3250441966&4294967295,v=R+(w<<22&4294967295|w>>>10),w=y+(I^v&(R^I))+A[4]+4118548399&4294967295,y=v+(w<<7&4294967295|w>>>25),w=I+(R^y&(v^R))+A[5]+1200080426&4294967295,I=y+(w<<12&4294967295|w>>>20),w=R+(v^I&(y^v))+A[6]+2821735955&4294967295,R=I+(w<<17&4294967295|w>>>15),w=v+(y^R&(I^y))+A[7]+4249261313&4294967295,v=R+(w<<22&4294967295|w>>>10),w=y+(I^v&(R^I))+A[8]+1770035416&4294967295,y=v+(w<<7&4294967295|w>>>25),w=I+(R^y&(v^R))+A[9]+2336552879&4294967295,I=y+(w<<12&4294967295|w>>>20),w=R+(v^I&(y^v))+A[10]+4294925233&4294967295,R=I+(w<<17&4294967295|w>>>15),w=v+(y^R&(I^y))+A[11]+2304563134&4294967295,v=R+(w<<22&4294967295|w>>>10),w=y+(I^v&(R^I))+A[12]+1804603682&4294967295,y=v+(w<<7&4294967295|w>>>25),w=I+(R^y&(v^R))+A[13]+4254626195&4294967295,I=y+(w<<12&4294967295|w>>>20),w=R+(v^I&(y^v))+A[14]+2792965006&4294967295,R=I+(w<<17&4294967295|w>>>15),w=v+(y^R&(I^y))+A[15]+1236535329&4294967295,v=R+(w<<22&4294967295|w>>>10),w=y+(R^I&(v^R))+A[1]+4129170786&4294967295,y=v+(w<<5&4294967295|w>>>27),w=I+(v^R&(y^v))+A[6]+3225465664&4294967295,I=y+(w<<9&4294967295|w>>>23),w=R+(y^v&(I^y))+A[11]+643717713&4294967295,R=I+(w<<14&4294967295|w>>>18),w=v+(I^y&(R^I))+A[0]+3921069994&4294967295,v=R+(w<<20&4294967295|w>>>12),w=y+(R^I&(v^R))+A[5]+3593408605&4294967295,y=v+(w<<5&4294967295|w>>>27),w=I+(v^R&(y^v))+A[10]+38016083&4294967295,I=y+(w<<9&4294967295|w>>>23),w=R+(y^v&(I^y))+A[15]+3634488961&4294967295,R=I+(w<<14&4294967295|w>>>18),w=v+(I^y&(R^I))+A[4]+3889429448&4294967295,v=R+(w<<20&4294967295|w>>>12),w=y+(R^I&(v^R))+A[9]+568446438&4294967295,y=v+(w<<5&4294967295|w>>>27),w=I+(v^R&(y^v))+A[14]+3275163606&4294967295,I=y+(w<<9&4294967295|w>>>23),w=R+(y^v&(I^y))+A[3]+4107603335&4294967295,R=I+(w<<14&4294967295|w>>>18),w=v+(I^y&(R^I))+A[8]+1163531501&4294967295,v=R+(w<<20&4294967295|w>>>12),w=y+(R^I&(v^R))+A[13]+2850285829&4294967295,y=v+(w<<5&4294967295|w>>>27),w=I+(v^R&(y^v))+A[2]+4243563512&4294967295,I=y+(w<<9&4294967295|w>>>23),w=R+(y^v&(I^y))+A[7]+1735328473&4294967295,R=I+(w<<14&4294967295|w>>>18),w=v+(I^y&(R^I))+A[12]+2368359562&4294967295,v=R+(w<<20&4294967295|w>>>12),w=y+(v^R^I)+A[5]+4294588738&4294967295,y=v+(w<<4&4294967295|w>>>28),w=I+(y^v^R)+A[8]+2272392833&4294967295,I=y+(w<<11&4294967295|w>>>21),w=R+(I^y^v)+A[11]+1839030562&4294967295,R=I+(w<<16&4294967295|w>>>16),w=v+(R^I^y)+A[14]+4259657740&4294967295,v=R+(w<<23&4294967295|w>>>9),w=y+(v^R^I)+A[1]+2763975236&4294967295,y=v+(w<<4&4294967295|w>>>28),w=I+(y^v^R)+A[4]+1272893353&4294967295,I=y+(w<<11&4294967295|w>>>21),w=R+(I^y^v)+A[7]+4139469664&4294967295,R=I+(w<<16&4294967295|w>>>16),w=v+(R^I^y)+A[10]+3200236656&4294967295,v=R+(w<<23&4294967295|w>>>9),w=y+(v^R^I)+A[13]+681279174&4294967295,y=v+(w<<4&4294967295|w>>>28),w=I+(y^v^R)+A[0]+3936430074&4294967295,I=y+(w<<11&4294967295|w>>>21),w=R+(I^y^v)+A[3]+3572445317&4294967295,R=I+(w<<16&4294967295|w>>>16),w=v+(R^I^y)+A[6]+76029189&4294967295,v=R+(w<<23&4294967295|w>>>9),w=y+(v^R^I)+A[9]+3654602809&4294967295,y=v+(w<<4&4294967295|w>>>28),w=I+(y^v^R)+A[12]+3873151461&4294967295,I=y+(w<<11&4294967295|w>>>21),w=R+(I^y^v)+A[15]+530742520&4294967295,R=I+(w<<16&4294967295|w>>>16),w=v+(R^I^y)+A[2]+3299628645&4294967295,v=R+(w<<23&4294967295|w>>>9),w=y+(R^(v|~I))+A[0]+4096336452&4294967295,y=v+(w<<6&4294967295|w>>>26),w=I+(v^(y|~R))+A[7]+1126891415&4294967295,I=y+(w<<10&4294967295|w>>>22),w=R+(y^(I|~v))+A[14]+2878612391&4294967295,R=I+(w<<15&4294967295|w>>>17),w=v+(I^(R|~y))+A[5]+4237533241&4294967295,v=R+(w<<21&4294967295|w>>>11),w=y+(R^(v|~I))+A[12]+1700485571&4294967295,y=v+(w<<6&4294967295|w>>>26),w=I+(v^(y|~R))+A[3]+2399980690&4294967295,I=y+(w<<10&4294967295|w>>>22),w=R+(y^(I|~v))+A[10]+4293915773&4294967295,R=I+(w<<15&4294967295|w>>>17),w=v+(I^(R|~y))+A[1]+2240044497&4294967295,v=R+(w<<21&4294967295|w>>>11),w=y+(R^(v|~I))+A[8]+1873313359&4294967295,y=v+(w<<6&4294967295|w>>>26),w=I+(v^(y|~R))+A[15]+4264355552&4294967295,I=y+(w<<10&4294967295|w>>>22),w=R+(y^(I|~v))+A[6]+2734768916&4294967295,R=I+(w<<15&4294967295|w>>>17),w=v+(I^(R|~y))+A[13]+1309151649&4294967295,v=R+(w<<21&4294967295|w>>>11),w=y+(R^(v|~I))+A[4]+4149444226&4294967295,y=v+(w<<6&4294967295|w>>>26),w=I+(v^(y|~R))+A[11]+3174756917&4294967295,I=y+(w<<10&4294967295|w>>>22),w=R+(y^(I|~v))+A[2]+718787259&4294967295,R=I+(w<<15&4294967295|w>>>17),w=v+(I^(R|~y))+A[9]+3951481745&4294967295,E.g[0]=E.g[0]+y&4294967295,E.g[1]=E.g[1]+(R+(w<<21&4294967295|w>>>11))&4294967295,E.g[2]=E.g[2]+R&4294967295,E.g[3]=E.g[3]+I&4294967295}r.prototype.u=function(E,y){y===void 0&&(y=E.length);for(var v=y-this.blockSize,A=this.B,R=this.h,I=0;I<y;){if(R==0)for(;I<=v;)s(this,E,I),I+=this.blockSize;if(typeof E=="string"){for(;I<y;)if(A[R++]=E.charCodeAt(I++),R==this.blockSize){s(this,A),R=0;break}}else for(;I<y;)if(A[R++]=E[I++],R==this.blockSize){s(this,A),R=0;break}}this.h=R,this.o+=y},r.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var y=1;y<E.length-8;++y)E[y]=0;var v=8*this.o;for(y=E.length-8;y<E.length;++y)E[y]=v&255,v/=256;for(this.u(E),E=Array(16),y=v=0;4>y;++y)for(var A=0;32>A;A+=8)E[v++]=this.g[y]>>>A&255;return E};function i(E,y){var v=c;return Object.prototype.hasOwnProperty.call(v,E)?v[E]:v[E]=y(E)}function o(E,y){this.h=y;for(var v=[],A=!0,R=E.length-1;0<=R;R--){var I=E[R]|0;A&&I==y||(v[R]=I,A=!1)}this.g=v}var c={};function l(E){return-128<=E&&128>E?i(E,function(y){return new o([y|0],0>y?-1:0)}):new o([E|0],0>E?-1:0)}function u(E){if(isNaN(E)||!isFinite(E))return d;if(0>E)return N(u(-E));for(var y=[],v=1,A=0;E>=v;A++)y[A]=E/v|0,v*=4294967296;return new o(y,0)}function f(E,y){if(E.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(E.charAt(0)=="-")return N(f(E.substring(1),y));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=u(Math.pow(y,8)),A=d,R=0;R<E.length;R+=8){var I=Math.min(8,E.length-R),w=parseInt(E.substring(R,R+I),y);8>I?(I=u(Math.pow(y,I)),A=A.j(I).add(u(w))):(A=A.j(v),A=A.add(u(w)))}return A}var d=l(0),g=l(1),_=l(16777216);t=o.prototype,t.m=function(){if(P(this))return-N(this).m();for(var E=0,y=1,v=0;v<this.g.length;v++){var A=this.i(v);E+=(0<=A?A:4294967296+A)*y,y*=4294967296}return E},t.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(S(this))return"0";if(P(this))return"-"+N(this).toString(E);for(var y=u(Math.pow(E,6)),v=this,A="";;){var R=q(v,y).g;v=j(v,R.j(y));var I=((0<v.g.length?v.g[0]:v.h)>>>0).toString(E);if(v=R,S(v))return I+A;for(;6>I.length;)I="0"+I;A=I+A}},t.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function S(E){if(E.h!=0)return!1;for(var y=0;y<E.g.length;y++)if(E.g[y]!=0)return!1;return!0}function P(E){return E.h==-1}t.l=function(E){return E=j(this,E),P(E)?-1:S(E)?0:1};function N(E){for(var y=E.g.length,v=[],A=0;A<y;A++)v[A]=~E.g[A];return new o(v,~E.h).add(g)}t.abs=function(){return P(this)?N(this):this},t.add=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],A=0,R=0;R<=y;R++){var I=A+(this.i(R)&65535)+(E.i(R)&65535),w=(I>>>16)+(this.i(R)>>>16)+(E.i(R)>>>16);A=w>>>16,I&=65535,w&=65535,v[R]=w<<16|I}return new o(v,v[v.length-1]&-2147483648?-1:0)};function j(E,y){return E.add(N(y))}t.j=function(E){if(S(this)||S(E))return d;if(P(this))return P(E)?N(this).j(N(E)):N(N(this).j(E));if(P(E))return N(this.j(N(E)));if(0>this.l(_)&&0>E.l(_))return u(this.m()*E.m());for(var y=this.g.length+E.g.length,v=[],A=0;A<2*y;A++)v[A]=0;for(A=0;A<this.g.length;A++)for(var R=0;R<E.g.length;R++){var I=this.i(A)>>>16,w=this.i(A)&65535,fe=E.i(R)>>>16,Ye=E.i(R)&65535;v[2*A+2*R]+=w*Ye,V(v,2*A+2*R),v[2*A+2*R+1]+=I*Ye,V(v,2*A+2*R+1),v[2*A+2*R+1]+=w*fe,V(v,2*A+2*R+1),v[2*A+2*R+2]+=I*fe,V(v,2*A+2*R+2)}for(A=0;A<y;A++)v[A]=v[2*A+1]<<16|v[2*A];for(A=y;A<2*y;A++)v[A]=0;return new o(v,0)};function V(E,y){for(;(E[y]&65535)!=E[y];)E[y+1]+=E[y]>>>16,E[y]&=65535,y++}function $(E,y){this.g=E,this.h=y}function q(E,y){if(S(y))throw Error("division by zero");if(S(E))return new $(d,d);if(P(E))return y=q(N(E),y),new $(N(y.g),N(y.h));if(P(y))return y=q(E,N(y)),new $(N(y.g),y.h);if(30<E.g.length){if(P(E)||P(y))throw Error("slowDivide_ only works with positive integers.");for(var v=g,A=y;0>=A.l(E);)v=Y(v),A=Y(A);var R=Z(v,1),I=Z(A,1);for(A=Z(A,2),v=Z(v,2);!S(A);){var w=I.add(A);0>=w.l(E)&&(R=R.add(v),I=w),A=Z(A,1),v=Z(v,1)}return y=j(E,R.j(y)),new $(R,y)}for(R=d;0<=E.l(y);){for(v=Math.max(1,Math.floor(E.m()/y.m())),A=Math.ceil(Math.log(v)/Math.LN2),A=48>=A?1:Math.pow(2,A-48),I=u(v),w=I.j(y);P(w)||0<w.l(E);)v-=A,I=u(v),w=I.j(y);S(I)&&(I=g),R=R.add(I),E=j(E,w)}return new $(R,E)}t.A=function(E){return q(this,E).h},t.and=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],A=0;A<y;A++)v[A]=this.i(A)&E.i(A);return new o(v,this.h&E.h)},t.or=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],A=0;A<y;A++)v[A]=this.i(A)|E.i(A);return new o(v,this.h|E.h)},t.xor=function(E){for(var y=Math.max(this.g.length,E.g.length),v=[],A=0;A<y;A++)v[A]=this.i(A)^E.i(A);return new o(v,this.h^E.h)};function Y(E){for(var y=E.g.length+1,v=[],A=0;A<y;A++)v[A]=E.i(A)<<1|E.i(A-1)>>>31;return new o(v,E.h)}function Z(E,y){var v=y>>5;y%=32;for(var A=E.g.length-v,R=[],I=0;I<A;I++)R[I]=0<y?E.i(I+v)>>>y|E.i(I+v+1)<<32-y:E.i(I+v);return new o(R,E.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Y_=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=u,o.fromString=f,Dr=o}).apply(typeof Sp<"u"?Sp:typeof self<"u"?self:typeof window<"u"?window:{});var ca=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var X_,Fi,Z_,Ta,fu,ey,ty,ny;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,h,p){return a==Array.prototype||a==Object.prototype||(a[h]=p.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof ca=="object"&&ca];for(var h=0;h<a.length;++h){var p=a[h];if(p&&p.Math==Math)return p}throw Error("Cannot find global object")}var r=n(this);function s(a,h){if(h)e:{var p=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var k=a[m];if(!(k in p))break e;p=p[k]}a=a[a.length-1],m=p[a],h=h(m),h!=m&&h!=null&&e(p,a,{configurable:!0,writable:!0,value:h})}}function i(a,h){a instanceof String&&(a+="");var p=0,m=!1,k={next:function(){if(!m&&p<a.length){var D=p++;return{value:h(D,a[D]),done:!1}}return m=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}s("Array.prototype.values",function(a){return a||function(){return i(this,function(h,p){return p})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},c=this||self;function l(a){var h=typeof a;return h=h!="object"?h:a?Array.isArray(a)?"array":h:"null",h=="array"||h=="object"&&typeof a.length=="number"}function u(a){var h=typeof a;return h=="object"&&a!=null||h=="function"}function f(a,h,p){return a.call.apply(a.bind,arguments)}function d(a,h,p){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,m),a.apply(h,k)}}return function(){return a.apply(h,arguments)}}function g(a,h,p){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:d,g.apply(null,arguments)}function _(a,h){var p=Array.prototype.slice.call(arguments,1);return function(){var m=p.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function S(a,h){function p(){}p.prototype=h.prototype,a.aa=h.prototype,a.prototype=new p,a.prototype.constructor=a,a.Qb=function(m,k,D){for(var W=Array(arguments.length-2),xe=2;xe<arguments.length;xe++)W[xe-2]=arguments[xe];return h.prototype[k].apply(m,W)}}function P(a){const h=a.length;if(0<h){const p=Array(h);for(let m=0;m<h;m++)p[m]=a[m];return p}return[]}function N(a,h){for(let p=1;p<arguments.length;p++){const m=arguments[p];if(l(m)){const k=a.length||0,D=m.length||0;a.length=k+D;for(let W=0;W<D;W++)a[k+W]=m[W]}else a.push(m)}}class j{constructor(h,p){this.i=h,this.j=p,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function V(a){return/^[\s\xa0]*$/.test(a)}function $(){var a=c.navigator;return a&&(a=a.userAgent)?a:""}function q(a){return q[" "](a),a}q[" "]=function(){};var Y=$().indexOf("Gecko")!=-1&&!($().toLowerCase().indexOf("webkit")!=-1&&$().indexOf("Edge")==-1)&&!($().indexOf("Trident")!=-1||$().indexOf("MSIE")!=-1)&&$().indexOf("Edge")==-1;function Z(a,h,p){for(const m in a)h.call(p,a[m],m,a)}function E(a,h){for(const p in a)h.call(void 0,a[p],p,a)}function y(a){const h={};for(const p in a)h[p]=a[p];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function A(a,h){let p,m;for(let k=1;k<arguments.length;k++){m=arguments[k];for(p in m)a[p]=m[p];for(let D=0;D<v.length;D++)p=v[D],Object.prototype.hasOwnProperty.call(m,p)&&(a[p]=m[p])}}function R(a){var h=1;a=a.split(":");const p=[];for(;0<h&&a.length;)p.push(a.shift()),h--;return a.length&&p.push(a.join(":")),p}function I(a){c.setTimeout(()=>{throw a},0)}function w(){var a=Ht;let h=null;return a.g&&(h=a.g,a.g=a.g.next,a.g||(a.h=null),h.next=null),h}class fe{constructor(){this.h=this.g=null}add(h,p){const m=Ye.get();m.set(h,p),this.h?this.h.next=m:this.g=m,this.h=m}}var Ye=new j(()=>new je,a=>a.reset());class je{constructor(){this.next=this.g=this.h=null}set(h,p){this.h=h,this.g=p,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,Ee=!1,Ht=new fe,an=()=>{const a=c.Promise.resolve(void 0);Ie=()=>{a.then(Zt)}};var Zt=()=>{for(var a;a=w();){try{a.h.call(a.g)}catch(p){I(p)}var h=Ye;h.j(a),100>h.h&&(h.h++,a.next=h.g,h.g=a)}Ee=!1};function Be(){this.s=this.s,this.C=this.C}Be.prototype.s=!1,Be.prototype.ma=function(){this.s||(this.s=!0,this.N())},Be.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(a,h){this.type=a,this.g=this.target=h,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var cr=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var a=!1,h=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const p=()=>{};c.addEventListener("test",p,h),c.removeEventListener("test",p,h)}catch{}return a})();function Gt(a,h){if($e.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var p=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=h,h=a.relatedTarget){if(Y){e:{try{q(h.nodeName);var k=!0;break e}catch{}k=!1}k||(h=null)}}else p=="mouseover"?h=a.fromElement:p=="mouseout"&&(h=a.toElement);this.relatedTarget=h,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Ut[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&Gt.aa.h.call(this)}}S(Gt,$e);var Ut={2:"touch",3:"pen",4:"mouse"};Gt.prototype.h=function(){Gt.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var M="closure_listenable_"+(1e6*Math.random()|0),ee=0;function Q(a,h,p,m,k){this.listener=a,this.proxy=null,this.src=h,this.type=p,this.capture=!!m,this.ha=k,this.key=++ee,this.da=this.fa=!1}function ne(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function me(a){this.src=a,this.g={},this.h=0}me.prototype.add=function(a,h,p,m,k){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var W=b(a,h,m,k);return-1<W?(h=a[W],p||(h.fa=!1)):(h=new Q(h,this.src,D,!!m,k),h.fa=p,a.push(h)),h};function T(a,h){var p=h.type;if(p in a.g){var m=a.g[p],k=Array.prototype.indexOf.call(m,h,void 0),D;(D=0<=k)&&Array.prototype.splice.call(m,k,1),D&&(ne(h),a.g[p].length==0&&(delete a.g[p],a.h--))}}function b(a,h,p,m){for(var k=0;k<a.length;++k){var D=a[k];if(!D.da&&D.listener==h&&D.capture==!!p&&D.ha==m)return k}return-1}var C="closure_lm_"+(1e6*Math.random()|0),O={};function U(a,h,p,m,k){if(Array.isArray(h)){for(var D=0;D<h.length;D++)U(a,h[D],p,m,k);return null}return p=le(p),a&&a[M]?a.K(h,p,u(m)?!!m.capture:!1,k):L(a,h,p,!1,m,k)}function L(a,h,p,m,k,D){if(!h)throw Error("Invalid event type");var W=u(k)?!!k.capture:!!k,xe=J(a);if(xe||(a[C]=xe=new me(a)),p=xe.add(h,p,m,W,D),p.proxy)return p;if(m=K(),p.proxy=m,m.src=a,m.listener=p,a.addEventListener)cr||(k=W),k===void 0&&(k=!1),a.addEventListener(h.toString(),m,k);else if(a.attachEvent)a.attachEvent(B(h.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return p}function K(){function a(p){return h.call(a.src,a.listener,p)}const h=oe;return a}function G(a,h,p,m,k){if(Array.isArray(h))for(var D=0;D<h.length;D++)G(a,h[D],p,m,k);else m=u(m)?!!m.capture:!!m,p=le(p),a&&a[M]?(a=a.i,h=String(h).toString(),h in a.g&&(D=a.g[h],p=b(D,p,m,k),-1<p&&(ne(D[p]),Array.prototype.splice.call(D,p,1),D.length==0&&(delete a.g[h],a.h--)))):a&&(a=J(a))&&(h=a.g[h.toString()],a=-1,h&&(a=b(h,p,m,k)),(p=-1<a?h[a]:null)&&H(p))}function H(a){if(typeof a!="number"&&a&&!a.da){var h=a.src;if(h&&h[M])T(h.i,a);else{var p=a.type,m=a.proxy;h.removeEventListener?h.removeEventListener(p,m,a.capture):h.detachEvent?h.detachEvent(B(p),m):h.addListener&&h.removeListener&&h.removeListener(m),(p=J(h))?(T(p,a),p.h==0&&(p.src=null,h[C]=null)):ne(a)}}}function B(a){return a in O?O[a]:O[a]="on"+a}function oe(a,h){if(a.da)a=!0;else{h=new Gt(h,this);var p=a.listener,m=a.ha||a.src;a.fa&&H(a),a=p.call(m,h)}return a}function J(a){return a=a[C],a instanceof me?a:null}var re="__closure_events_fn_"+(1e9*Math.random()>>>0);function le(a){return typeof a=="function"?a:(a[re]||(a[re]=function(h){return a.handleEvent(h)}),a[re])}function ce(){Be.call(this),this.i=new me(this),this.M=this,this.F=null}S(ce,Be),ce.prototype[M]=!0,ce.prototype.removeEventListener=function(a,h,p,m){G(this,a,h,p,m)};function ge(a,h){var p,m=a.F;if(m)for(p=[];m;m=m.F)p.push(m);if(a=a.M,m=h.type||h,typeof h=="string")h=new $e(h,a);else if(h instanceof $e)h.target=h.target||a;else{var k=h;h=new $e(m,a),A(h,k)}if(k=!0,p)for(var D=p.length-1;0<=D;D--){var W=h.g=p[D];k=Re(W,m,!0,h)&&k}if(W=h.g=a,k=Re(W,m,!0,h)&&k,k=Re(W,m,!1,h)&&k,p)for(D=0;D<p.length;D++)W=h.g=p[D],k=Re(W,m,!1,h)&&k}ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var a=this.i,h;for(h in a.g){for(var p=a.g[h],m=0;m<p.length;m++)ne(p[m]);delete a.g[h],a.h--}}this.F=null},ce.prototype.K=function(a,h,p,m){return this.i.add(String(a),h,!1,p,m)},ce.prototype.L=function(a,h,p,m){return this.i.add(String(a),h,!0,p,m)};function Re(a,h,p,m){if(h=a.i.g[String(h)],!h)return!0;h=h.concat();for(var k=!0,D=0;D<h.length;++D){var W=h[D];if(W&&!W.da&&W.capture==p){var xe=W.listener,ft=W.ha||W.src;W.fa&&T(a.i,W),k=xe.call(ft,m)!==!1&&k}}return k&&!m.defaultPrevented}function qe(a,h,p){if(typeof a=="function")p&&(a=g(a,p));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:c.setTimeout(a,h||0)}function Xe(a){a.g=qe(()=>{a.g=null,a.i&&(a.i=!1,Xe(a))},a.l);const h=a.h;a.h=null,a.m.apply(null,h)}class en extends Be{constructor(h,p){super(),this.m=h,this.l=p,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:Xe(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _t(a){Be.call(this),this.h=a,this.g={}}S(_t,Be);var lr=[];function gi(a){Z(a.g,function(h,p){this.g.hasOwnProperty(p)&&H(h)},a),a.g={}}_t.prototype.N=function(){_t.aa.N.call(this),gi(this)},_t.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ht=c.JSON.stringify,tn=c.JSON.parse,Bo=class{stringify(a){return c.JSON.stringify(a,void 0)}parse(a){return c.JSON.parse(a,void 0)}};function As(){}As.prototype.h=null;function Zh(a){return a.h||(a.h=a.i())}function ef(){}var mi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Zc(){$e.call(this,"d")}S(Zc,$e);function el(){$e.call(this,"c")}S(el,$e);var Kr={},tf=null;function $o(){return tf=tf||new ce}Kr.La="serverreachability";function nf(a){$e.call(this,Kr.La,a)}S(nf,$e);function _i(a){const h=$o();ge(h,new nf(h))}Kr.STAT_EVENT="statevent";function rf(a,h){$e.call(this,Kr.STAT_EVENT,a),this.stat=h}S(rf,$e);function Pt(a){const h=$o();ge(h,new rf(h,a))}Kr.Ma="timingevent";function sf(a,h){$e.call(this,Kr.Ma,a),this.size=h}S(sf,$e);function yi(a,h){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){a()},h)}function vi(){this.g=!0}vi.prototype.xa=function(){this.g=!1};function Dv(a,h,p,m,k,D){a.info(function(){if(a.g)if(D)for(var W="",xe=D.split("&"),ft=0;ft<xe.length;ft++){var Se=xe[ft].split("=");if(1<Se.length){var yt=Se[0];Se=Se[1];var vt=yt.split("_");W=2<=vt.length&&vt[1]=="type"?W+(yt+"="+Se+"&"):W+(yt+"=redacted&")}}else W=null;else W=D;return"XMLHTTP REQ ("+m+") [attempt "+k+"]: "+h+`
`+p+`
`+W})}function Vv(a,h,p,m,k,D,W){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+k+"]: "+h+`
`+p+`
`+D+" "+W})}function bs(a,h,p,m){a.info(function(){return"XMLHTTP TEXT ("+h+"): "+Ov(a,p)+(m?" "+m:"")})}function xv(a,h){a.info(function(){return"TIMEOUT: "+h})}vi.prototype.info=function(){};function Ov(a,h){if(!a.g)return h;if(!h)return null;try{var p=JSON.parse(h);if(p){for(a=0;a<p.length;a++)if(Array.isArray(p[a])){var m=p[a];if(!(2>m.length)){var k=m[1];if(Array.isArray(k)&&!(1>k.length)){var D=k[0];if(D!="noop"&&D!="stop"&&D!="close")for(var W=1;W<k.length;W++)k[W]=""}}}}return ht(p)}catch{return h}}var qo={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},of={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},tl;function Ho(){}S(Ho,As),Ho.prototype.g=function(){return new XMLHttpRequest},Ho.prototype.i=function(){return{}},tl=new Ho;function ur(a,h,p,m){this.j=a,this.i=h,this.l=p,this.R=m||1,this.U=new _t(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new af}function af(){this.i=null,this.g="",this.h=!1}var cf={},nl={};function rl(a,h,p){a.L=1,a.v=Ko(Mn(h)),a.m=p,a.P=!0,lf(a,null)}function lf(a,h){a.F=Date.now(),Go(a),a.A=Mn(a.v);var p=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),If(p.i,"t",m),a.C=0,p=a.j.J,a.h=new af,a.g=Bf(a.j,p?h:null,!a.m),0<a.O&&(a.M=new en(g(a.Y,a,a.g),a.O)),h=a.U,p=a.g,m=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(lr[0]=k.toString()),k=lr);for(var D=0;D<k.length;D++){var W=U(p,k[D],m||h.handleEvent,!1,h.h||h);if(!W)break;h.g[W.key]=W}h=a.H?y(a.H):{},a.m?(a.u||(a.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,h)):(a.u="GET",a.g.ea(a.A,a.u,null,h)),_i(),Dv(a.i,a.u,a.A,a.l,a.R,a.m)}ur.prototype.ca=function(a){a=a.target;const h=this.M;h&&Fn(a)==3?h.j():this.Y(a)},ur.prototype.Y=function(a){try{if(a==this.g)e:{const vt=Fn(this.g);var h=this.g.Ba();const Cs=this.g.Z();if(!(3>vt)&&(vt!=3||this.g&&(this.h.h||this.g.oa()||kf(this.g)))){this.J||vt!=4||h==7||(h==8||0>=Cs?_i(3):_i(2)),sl(this);var p=this.g.Z();this.X=p;t:if(uf(this)){var m=kf(this.g);a="";var k=m.length,D=Fn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qr(this),Ei(this);var W="";break t}this.h.i=new c.TextDecoder}for(h=0;h<k;h++)this.h.h=!0,a+=this.h.i.decode(m[h],{stream:!(D&&h==k-1)});m.length=0,this.h.g+=a,this.C=0,W=this.h.g}else W=this.g.oa();if(this.o=p==200,Vv(this.i,this.u,this.A,this.l,this.R,vt,p),this.o){if(this.T&&!this.K){t:{if(this.g){var xe,ft=this.g;if((xe=ft.g?ft.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!V(xe)){var Se=xe;break t}}Se=null}if(p=Se)bs(this.i,this.l,p,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,il(this,p);else{this.o=!1,this.s=3,Pt(12),Qr(this),Ei(this);break e}}if(this.P){p=!0;let cn;for(;!this.J&&this.C<W.length;)if(cn=Lv(this,W),cn==nl){vt==4&&(this.s=4,Pt(14),p=!1),bs(this.i,this.l,null,"[Incomplete Response]");break}else if(cn==cf){this.s=4,Pt(15),bs(this.i,this.l,W,"[Invalid Chunk]"),p=!1;break}else bs(this.i,this.l,cn,null),il(this,cn);if(uf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),vt!=4||W.length!=0||this.h.h||(this.s=1,Pt(16),p=!1),this.o=this.o&&p,!p)bs(this.i,this.l,W,"[Invalid Chunked Response]"),Qr(this),Ei(this);else if(0<W.length&&!this.W){this.W=!0;var yt=this.j;yt.g==this&&yt.ba&&!yt.M&&(yt.j.info("Great, no buffering proxy detected. Bytes received: "+W.length),hl(yt),yt.M=!0,Pt(11))}}else bs(this.i,this.l,W,null),il(this,W);vt==4&&Qr(this),this.o&&!this.J&&(vt==4?Mf(this.j,this):(this.o=!1,Go(this)))}else Zv(this.g),p==400&&0<W.indexOf("Unknown SID")?(this.s=3,Pt(12)):(this.s=0,Pt(13)),Qr(this),Ei(this)}}}catch{}finally{}};function uf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function Lv(a,h){var p=a.C,m=h.indexOf(`
`,p);return m==-1?nl:(p=Number(h.substring(p,m)),isNaN(p)?cf:(m+=1,m+p>h.length?nl:(h=h.slice(m,m+p),a.C=m+p,h)))}ur.prototype.cancel=function(){this.J=!0,Qr(this)};function Go(a){a.S=Date.now()+a.I,hf(a,a.I)}function hf(a,h){if(a.B!=null)throw Error("WatchDog timer not null");a.B=yi(g(a.ba,a),h)}function sl(a){a.B&&(c.clearTimeout(a.B),a.B=null)}ur.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(xv(this.i,this.A),this.L!=2&&(_i(),Pt(17)),Qr(this),this.s=2,Ei(this)):hf(this,this.S-a)};function Ei(a){a.j.G==0||a.J||Mf(a.j,a)}function Qr(a){sl(a);var h=a.M;h&&typeof h.ma=="function"&&h.ma(),a.M=null,gi(a.U),a.g&&(h=a.g,a.g=null,h.abort(),h.ma())}function il(a,h){try{var p=a.j;if(p.G!=0&&(p.g==a||ol(p.h,a))){if(!a.K&&ol(p.h,a)&&p.G==3){try{var m=p.Da.g.parse(h)}catch{m=null}if(Array.isArray(m)&&m.length==3){var k=m;if(k[0]==0){e:if(!p.u){if(p.g)if(p.g.F+3e3<a.F)ea(p),Xo(p);else break e;ul(p),Pt(18)}}else p.za=k[1],0<p.za-p.T&&37500>k[2]&&p.F&&p.v==0&&!p.C&&(p.C=yi(g(p.Za,p),6e3));if(1>=pf(p.h)&&p.ca){try{p.ca()}catch{}p.ca=void 0}}else Yr(p,11)}else if((a.K||p.g==a)&&ea(p),!V(h))for(k=p.Da.g.parse(h),h=0;h<k.length;h++){let Se=k[h];if(p.T=Se[0],Se=Se[1],p.G==2)if(Se[0]=="c"){p.K=Se[1],p.ia=Se[2];const yt=Se[3];yt!=null&&(p.la=yt,p.j.info("VER="+p.la));const vt=Se[4];vt!=null&&(p.Aa=vt,p.j.info("SVER="+p.Aa));const Cs=Se[5];Cs!=null&&typeof Cs=="number"&&0<Cs&&(m=1.5*Cs,p.L=m,p.j.info("backChannelRequestTimeoutMs_="+m)),m=p;const cn=a.g;if(cn){const na=cn.g?cn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(na){var D=m.h;D.g||na.indexOf("spdy")==-1&&na.indexOf("quic")==-1&&na.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(al(D,D.h),D.h=null))}if(m.D){const fl=cn.g?cn.g.getResponseHeader("X-HTTP-Session-Id"):null;fl&&(m.ya=fl,Me(m.I,m.D,fl))}}p.G=3,p.l&&p.l.ua(),p.ba&&(p.R=Date.now()-a.F,p.j.info("Handshake RTT: "+p.R+"ms")),m=p;var W=a;if(m.qa=jf(m,m.J?m.ia:null,m.W),W.K){gf(m.h,W);var xe=W,ft=m.L;ft&&(xe.I=ft),xe.B&&(sl(xe),Go(xe)),m.g=W}else Of(m);0<p.i.length&&Zo(p)}else Se[0]!="stop"&&Se[0]!="close"||Yr(p,7);else p.G==3&&(Se[0]=="stop"||Se[0]=="close"?Se[0]=="stop"?Yr(p,7):ll(p):Se[0]!="noop"&&p.l&&p.l.ta(Se),p.v=0)}}_i(4)}catch{}}var Mv=class{constructor(a,h){this.g=a,this.map=h}};function ff(a){this.l=a||10,c.PerformanceNavigationTiming?(a=c.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function df(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function pf(a){return a.h?1:a.g?a.g.size:0}function ol(a,h){return a.h?a.h==h:a.g?a.g.has(h):!1}function al(a,h){a.g?a.g.add(h):a.h=h}function gf(a,h){a.h&&a.h==h?a.h=null:a.g&&a.g.has(h)&&a.g.delete(h)}ff.prototype.cancel=function(){if(this.i=mf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function mf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let h=a.i;for(const p of a.g.values())h=h.concat(p.D);return h}return P(a.i)}function Fv(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(l(a)){for(var h=[],p=a.length,m=0;m<p;m++)h.push(a[m]);return h}h=[],p=0;for(m in a)h[p++]=a[m];return h}function Uv(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(l(a)||typeof a=="string"){var h=[];a=a.length;for(var p=0;p<a;p++)h.push(p);return h}h=[],p=0;for(const m in a)h[p++]=m;return h}}}function _f(a,h){if(a.forEach&&typeof a.forEach=="function")a.forEach(h,void 0);else if(l(a)||typeof a=="string")Array.prototype.forEach.call(a,h,void 0);else for(var p=Uv(a),m=Fv(a),k=m.length,D=0;D<k;D++)h.call(void 0,m[D],p&&p[D],a)}var yf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function jv(a,h){if(a){a=a.split("&");for(var p=0;p<a.length;p++){var m=a[p].indexOf("="),k=null;if(0<=m){var D=a[p].substring(0,m);k=a[p].substring(m+1)}else D=a[p];h(D,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function Jr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof Jr){this.h=a.h,Wo(this,a.j),this.o=a.o,this.g=a.g,zo(this,a.s),this.l=a.l;var h=a.i,p=new Ii;p.i=h.i,h.g&&(p.g=new Map(h.g),p.h=h.h),vf(this,p),this.m=a.m}else a&&(h=String(a).match(yf))?(this.h=!1,Wo(this,h[1]||"",!0),this.o=Ti(h[2]||""),this.g=Ti(h[3]||"",!0),zo(this,h[4]),this.l=Ti(h[5]||"",!0),vf(this,h[6]||"",!0),this.m=Ti(h[7]||"")):(this.h=!1,this.i=new Ii(null,this.h))}Jr.prototype.toString=function(){var a=[],h=this.j;h&&a.push(wi(h,Ef,!0),":");var p=this.g;return(p||h=="file")&&(a.push("//"),(h=this.o)&&a.push(wi(h,Ef,!0),"@"),a.push(encodeURIComponent(String(p)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),p=this.s,p!=null&&a.push(":",String(p))),(p=this.l)&&(this.g&&p.charAt(0)!="/"&&a.push("/"),a.push(wi(p,p.charAt(0)=="/"?qv:$v,!0))),(p=this.i.toString())&&a.push("?",p),(p=this.m)&&a.push("#",wi(p,Gv)),a.join("")};function Mn(a){return new Jr(a)}function Wo(a,h,p){a.j=p?Ti(h,!0):h,a.j&&(a.j=a.j.replace(/:$/,""))}function zo(a,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);a.s=h}else a.s=null}function vf(a,h,p){h instanceof Ii?(a.i=h,Wv(a.i,a.h)):(p||(h=wi(h,Hv)),a.i=new Ii(h,a.h))}function Me(a,h,p){a.i.set(h,p)}function Ko(a){return Me(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function Ti(a,h){return a?h?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function wi(a,h,p){return typeof a=="string"?(a=encodeURI(a).replace(h,Bv),p&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function Bv(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Ef=/[#\/\?@]/g,$v=/[#\?:]/g,qv=/[#\?]/g,Hv=/[#\?@]/g,Gv=/#/g;function Ii(a,h){this.h=this.g=null,this.i=a||null,this.j=!!h}function hr(a){a.g||(a.g=new Map,a.h=0,a.i&&jv(a.i,function(h,p){a.add(decodeURIComponent(h.replace(/\+/g," ")),p)}))}t=Ii.prototype,t.add=function(a,h){hr(this),this.i=null,a=Rs(this,a);var p=this.g.get(a);return p||this.g.set(a,p=[]),p.push(h),this.h+=1,this};function Tf(a,h){hr(a),h=Rs(a,h),a.g.has(h)&&(a.i=null,a.h-=a.g.get(h).length,a.g.delete(h))}function wf(a,h){return hr(a),h=Rs(a,h),a.g.has(h)}t.forEach=function(a,h){hr(this),this.g.forEach(function(p,m){p.forEach(function(k){a.call(h,k,m,this)},this)},this)},t.na=function(){hr(this);const a=Array.from(this.g.values()),h=Array.from(this.g.keys()),p=[];for(let m=0;m<h.length;m++){const k=a[m];for(let D=0;D<k.length;D++)p.push(h[m])}return p},t.V=function(a){hr(this);let h=[];if(typeof a=="string")wf(this,a)&&(h=h.concat(this.g.get(Rs(this,a))));else{a=Array.from(this.g.values());for(let p=0;p<a.length;p++)h=h.concat(a[p])}return h},t.set=function(a,h){return hr(this),this.i=null,a=Rs(this,a),wf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[h]),this.h+=1,this},t.get=function(a,h){return a?(a=this.V(a),0<a.length?String(a[0]):h):h};function If(a,h,p){Tf(a,h),0<p.length&&(a.i=null,a.g.set(Rs(a,h),P(p)),a.h+=p.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],h=Array.from(this.g.keys());for(var p=0;p<h.length;p++){var m=h[p];const D=encodeURIComponent(String(m)),W=this.V(m);for(m=0;m<W.length;m++){var k=D;W[m]!==""&&(k+="="+encodeURIComponent(String(W[m]))),a.push(k)}}return this.i=a.join("&")};function Rs(a,h){return h=String(h),a.j&&(h=h.toLowerCase()),h}function Wv(a,h){h&&!a.j&&(hr(a),a.i=null,a.g.forEach(function(p,m){var k=m.toLowerCase();m!=k&&(Tf(this,m),If(this,k,p))},a)),a.j=h}function zv(a,h){const p=new vi;if(c.Image){const m=new Image;m.onload=_(fr,p,"TestLoadImage: loaded",!0,h,m),m.onerror=_(fr,p,"TestLoadImage: error",!1,h,m),m.onabort=_(fr,p,"TestLoadImage: abort",!1,h,m),m.ontimeout=_(fr,p,"TestLoadImage: timeout",!1,h,m),c.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else h(!1)}function Kv(a,h){const p=new vi,m=new AbortController,k=setTimeout(()=>{m.abort(),fr(p,"TestPingServer: timeout",!1,h)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(k),D.ok?fr(p,"TestPingServer: ok",!0,h):fr(p,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(k),fr(p,"TestPingServer: error",!1,h)})}function fr(a,h,p,m,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),m(p)}catch{}}function Qv(){this.g=new Bo}function Jv(a,h,p){const m=p||"";try{_f(a,function(k,D){let W=k;u(k)&&(W=ht(k)),h.push(m+D+"="+encodeURIComponent(W))})}catch(k){throw h.push(m+"type="+encodeURIComponent("_badmap")),k}}function Qo(a){this.l=a.Ub||null,this.j=a.eb||!1}S(Qo,As),Qo.prototype.g=function(){return new Jo(this.l,this.j)},Qo.prototype.i=(function(a){return function(){return a}})({});function Jo(a,h){ce.call(this),this.D=a,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}S(Jo,ce),t=Jo.prototype,t.open=function(a,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=h,this.readyState=1,bi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(h.body=a),(this.D||c).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ai(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,bi(this)),this.g&&(this.readyState=3,bi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Af(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function Af(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var h=a.value?a.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!a.done}))&&(this.response=this.responseText+=h)}a.done?Ai(this):bi(this),this.readyState==3&&Af(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Ai(this))},t.Qa=function(a){this.g&&(this.response=a,Ai(this))},t.ga=function(){this.g&&Ai(this)};function Ai(a){a.readyState=4,a.l=null,a.j=null,a.v=null,bi(a)}t.setRequestHeader=function(a,h){this.u.append(a,h)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],h=this.h.entries();for(var p=h.next();!p.done;)p=p.value,a.push(p[0]+": "+p[1]),p=h.next();return a.join(`\r
`)};function bi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Jo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function bf(a){let h="";return Z(a,function(p,m){h+=m,h+=":",h+=p,h+=`\r
`}),h}function cl(a,h,p){e:{for(m in p){var m=!1;break e}m=!0}m||(p=bf(p),typeof a=="string"?p!=null&&encodeURIComponent(String(p)):Me(a,h,p))}function ze(a){ce.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}S(ze,ce);var Yv=/^https?$/i,Xv=["POST","PUT"];t=ze.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,h,p,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);h=h?h.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():tl.g(),this.v=this.o?Zh(this.o):Zh(tl),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(h,String(a),!0),this.B=!1}catch(D){Rf(this,D);return}if(a=p||"",p=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var k in m)p.set(k,m[k]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())p.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(p.keys()).find(D=>D.toLowerCase()=="content-type"),k=c.FormData&&a instanceof c.FormData,!(0<=Array.prototype.indexOf.call(Xv,h,void 0))||m||k||p.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,W]of p)this.g.setRequestHeader(D,W);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Pf(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Rf(this,D)}};function Rf(a,h){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=h,a.m=5,Sf(a),Yo(a)}function Sf(a){a.A||(a.A=!0,ge(a,"complete"),ge(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,ge(this,"complete"),ge(this,"abort"),Yo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Yo(this,!0)),ze.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Cf(this):this.bb())},t.bb=function(){Cf(this)};function Cf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Fn(a)!=4||a.Z()!=2)){if(a.u&&Fn(a)==4)qe(a.Ea,0,a);else if(ge(a,"readystatechange"),Fn(a)==4){a.h=!1;try{const W=a.Z();e:switch(W){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var p;if(!(p=h)){var m;if(m=W===0){var k=String(a.D).match(yf)[1]||null;!k&&c.self&&c.self.location&&(k=c.self.location.protocol.slice(0,-1)),m=!Yv.test(k?k.toLowerCase():"")}p=m}if(p)ge(a,"complete"),ge(a,"success");else{a.m=6;try{var D=2<Fn(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",Sf(a)}}finally{Yo(a)}}}}function Yo(a,h){if(a.g){Pf(a);const p=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,h||ge(a,"ready");try{p.onreadystatechange=m}catch{}}}function Pf(a){a.I&&(c.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Fn(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Fn(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var h=this.g.responseText;return a&&h.indexOf(a)==0&&(h=h.substring(a.length)),tn(h)}};function kf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function Zv(a){const h={};a=(a.g&&2<=Fn(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(V(a[m]))continue;var p=R(a[m]);const k=p[0];if(p=p[1],typeof p!="string")continue;p=p.trim();const D=h[k]||[];h[k]=D,D.push(p)}E(h,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ri(a,h,p){return p&&p.internalChannelParams&&p.internalChannelParams[a]||h}function Nf(a){this.Aa=0,this.i=[],this.j=new vi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Ri("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Ri("baseRetryDelayMs",5e3,a),this.cb=Ri("retryDelaySeedMs",1e4,a),this.Wa=Ri("forwardChannelMaxRetries",2,a),this.wa=Ri("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new ff(a&&a.concurrentRequestLimit),this.Da=new Qv,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Nf.prototype,t.la=8,t.G=1,t.connect=function(a,h,p,m){Pt(0),this.W=a,this.H=h||{},p&&m!==void 0&&(this.H.OSID=p,this.H.OAID=m),this.F=this.X,this.I=jf(this,null,this.W),Zo(this)};function ll(a){if(Df(a),a.G==3){var h=a.U++,p=Mn(a.I);if(Me(p,"SID",a.K),Me(p,"RID",h),Me(p,"TYPE","terminate"),Si(a,p),h=new ur(a,a.j,h),h.L=2,h.v=Ko(Mn(p)),p=!1,c.navigator&&c.navigator.sendBeacon)try{p=c.navigator.sendBeacon(h.v.toString(),"")}catch{}!p&&c.Image&&(new Image().src=h.v,p=!0),p||(h.g=Bf(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Go(h)}Uf(a)}function Xo(a){a.g&&(hl(a),a.g.cancel(),a.g=null)}function Df(a){Xo(a),a.u&&(c.clearTimeout(a.u),a.u=null),ea(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&c.clearTimeout(a.s),a.s=null)}function Zo(a){if(!df(a.h)&&!a.s){a.s=!0;var h=a.Ga;Ie||an(),Ee||(Ie(),Ee=!0),Ht.add(h,a),a.B=0}}function eE(a,h){return pf(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=h.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=yi(g(a.Ga,a,h),Ff(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new ur(this,this.j,a);let D=this.o;if(this.S&&(D?(D=y(D),A(D,this.S)):D=this.S),this.m!==null||this.O||(k.H=D,D=null),this.P)e:{for(var h=0,p=0;p<this.i.length;p++){t:{var m=this.i[p];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(h+=m,4096<h){h=p;break e}if(h===4096||p===this.i.length-1){h=p+1;break e}}h=1e3}else h=1e3;h=xf(this,k,h),p=Mn(this.I),Me(p,"RID",a),Me(p,"CVER",22),this.D&&Me(p,"X-HTTP-Session-Id",this.D),Si(this,p),D&&(this.O?h="headers="+encodeURIComponent(String(bf(D)))+"&"+h:this.m&&cl(p,this.m,D)),al(this.h,k),this.Ua&&Me(p,"TYPE","init"),this.P?(Me(p,"$req",h),Me(p,"SID","null"),k.T=!0,rl(k,p,null)):rl(k,p,h),this.G=2}}else this.G==3&&(a?Vf(this,a):this.i.length==0||df(this.h)||Vf(this))};function Vf(a,h){var p;h?p=h.l:p=a.U++;const m=Mn(a.I);Me(m,"SID",a.K),Me(m,"RID",p),Me(m,"AID",a.T),Si(a,m),a.m&&a.o&&cl(m,a.m,a.o),p=new ur(a,a.j,p,a.B+1),a.m===null&&(p.H=a.o),h&&(a.i=h.D.concat(a.i)),h=xf(a,p,1e3),p.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),al(a.h,p),rl(p,m,h)}function Si(a,h){a.H&&Z(a.H,function(p,m){Me(h,m,p)}),a.l&&_f({},function(p,m){Me(h,m,p)})}function xf(a,h,p){p=Math.min(a.i.length,p);var m=a.l?g(a.l.Na,a.l,a):null;e:{var k=a.i;let D=-1;for(;;){const W=["count="+p];D==-1?0<p?(D=k[0].g,W.push("ofs="+D)):D=0:W.push("ofs="+D);let xe=!0;for(let ft=0;ft<p;ft++){let Se=k[ft].g;const yt=k[ft].map;if(Se-=D,0>Se)D=Math.max(0,k[ft].g-100),xe=!1;else try{Jv(yt,W,"req"+Se+"_")}catch{m&&m(yt)}}if(xe){m=W.join("&");break e}}}return a=a.i.splice(0,p),h.D=a,m}function Of(a){if(!a.g&&!a.u){a.Y=1;var h=a.Fa;Ie||an(),Ee||(Ie(),Ee=!0),Ht.add(h,a),a.v=0}}function ul(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=yi(g(a.Fa,a),Ff(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,Lf(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=yi(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Pt(10),Xo(this),Lf(this))};function hl(a){a.A!=null&&(c.clearTimeout(a.A),a.A=null)}function Lf(a){a.g=new ur(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var h=Mn(a.qa);Me(h,"RID","rpc"),Me(h,"SID",a.K),Me(h,"AID",a.T),Me(h,"CI",a.F?"0":"1"),!a.F&&a.ja&&Me(h,"TO",a.ja),Me(h,"TYPE","xmlhttp"),Si(a,h),a.m&&a.o&&cl(h,a.m,a.o),a.L&&(a.g.I=a.L);var p=a.g;a=a.ia,p.L=1,p.v=Ko(Mn(h)),p.m=null,p.P=!0,lf(p,a)}t.Za=function(){this.C!=null&&(this.C=null,Xo(this),ul(this),Pt(19))};function ea(a){a.C!=null&&(c.clearTimeout(a.C),a.C=null)}function Mf(a,h){var p=null;if(a.g==h){ea(a),hl(a),a.g=null;var m=2}else if(ol(a.h,h))p=h.D,gf(a.h,h),m=1;else return;if(a.G!=0){if(h.o)if(m==1){p=h.m?h.m.length:0,h=Date.now()-h.F;var k=a.B;m=$o(),ge(m,new sf(m,p)),Zo(a)}else Of(a);else if(k=h.s,k==3||k==0&&0<h.X||!(m==1&&eE(a,h)||m==2&&ul(a)))switch(p&&0<p.length&&(h=a.h,h.i=h.i.concat(p)),k){case 1:Yr(a,5);break;case 4:Yr(a,10);break;case 3:Yr(a,6);break;default:Yr(a,2)}}}function Ff(a,h){let p=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(p*=2),p*h}function Yr(a,h){if(a.j.info("Error code "+h),h==2){var p=g(a.fb,a),m=a.Xa;const k=!m;m=new Jr(m||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Wo(m,"https"),Ko(m),k?zv(m.toString(),p):Kv(m.toString(),p)}else Pt(2);a.G=0,a.l&&a.l.sa(h),Uf(a),Df(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Pt(2)):(this.j.info("Failed to ping google.com"),Pt(1))};function Uf(a){if(a.G=0,a.ka=[],a.l){const h=mf(a.h);(h.length!=0||a.i.length!=0)&&(N(a.ka,h),N(a.ka,a.i),a.h.i.length=0,P(a.i),a.i.length=0),a.l.ra()}}function jf(a,h,p){var m=p instanceof Jr?Mn(p):new Jr(p);if(m.g!="")h&&(m.g=h+"."+m.g),zo(m,m.s);else{var k=c.location;m=k.protocol,h=h?h+"."+k.hostname:k.hostname,k=+k.port;var D=new Jr(null);m&&Wo(D,m),h&&(D.g=h),k&&zo(D,k),p&&(D.l=p),m=D}return p=a.D,h=a.ya,p&&h&&Me(m,p,h),Me(m,"VER",a.la),Si(a,m),m}function Bf(a,h,p){if(h&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=a.Ca&&!a.pa?new ze(new Qo({eb:p})):new ze(a.pa),h.Ha(a.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function $f(){}t=$f.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function ta(){}ta.prototype.g=function(a,h){return new Wt(a,h)};function Wt(a,h){ce.call(this),this.g=new Nf(h),this.l=a,this.h=h&&h.messageUrlParams||null,a=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(a?a["X-WebChannel-Content-Type"]=h.messageContentType:a={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(a?a["X-WebChannel-Client-Profile"]=h.va:a={"X-WebChannel-Client-Profile":h.va}),this.g.S=a,(a=h&&h.Sb)&&!V(a)&&(this.g.m=a),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!V(h)&&(this.g.D=h,a=this.h,a!==null&&h in a&&(a=this.h,h in a&&delete a[h])),this.j=new Ss(this)}S(Wt,ce),Wt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Wt.prototype.close=function(){ll(this.g)},Wt.prototype.o=function(a){var h=this.g;if(typeof a=="string"){var p={};p.__data__=a,a=p}else this.u&&(p={},p.__data__=ht(a),a=p);h.i.push(new Mv(h.Ya++,a)),h.G==3&&Zo(h)},Wt.prototype.N=function(){this.g.l=null,delete this.j,ll(this.g),delete this.g,Wt.aa.N.call(this)};function qf(a){Zc.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var h=a.__sm__;if(h){e:{for(const p in h){a=p;break e}a=void 0}(this.i=a)&&(a=this.i,h=h!==null&&a in h?h[a]:void 0),this.data=h}else this.data=a}S(qf,Zc);function Hf(){el.call(this),this.status=1}S(Hf,el);function Ss(a){this.g=a}S(Ss,$f),Ss.prototype.ua=function(){ge(this.g,"a")},Ss.prototype.ta=function(a){ge(this.g,new qf(a))},Ss.prototype.sa=function(a){ge(this.g,new Hf)},Ss.prototype.ra=function(){ge(this.g,"b")},ta.prototype.createWebChannel=ta.prototype.g,Wt.prototype.send=Wt.prototype.o,Wt.prototype.open=Wt.prototype.m,Wt.prototype.close=Wt.prototype.close,ny=function(){return new ta},ty=function(){return $o()},ey=Kr,fu={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qo.NO_ERROR=0,qo.TIMEOUT=8,qo.HTTP_ERROR=6,Ta=qo,of.COMPLETE="complete",Z_=of,ef.EventType=mi,mi.OPEN="a",mi.CLOSE="b",mi.ERROR="c",mi.MESSAGE="d",ce.prototype.listen=ce.prototype.K,Fi=ef,ze.prototype.listenOnce=ze.prototype.L,ze.prototype.getLastError=ze.prototype.Ka,ze.prototype.getLastErrorCode=ze.prototype.Ba,ze.prototype.getStatus=ze.prototype.Z,ze.prototype.getResponseJson=ze.prototype.Oa,ze.prototype.getResponseText=ze.prototype.oa,ze.prototype.send=ze.prototype.ea,ze.prototype.setWithCredentials=ze.prototype.Ha,X_=ze}).apply(typeof ca<"u"?ca:typeof self<"u"?self:typeof window<"u"?window:{});const Cp="@firebase/firestore",Pp="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */let ai="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=new Yu("@firebase/firestore");function Ds(){return _s.logLevel}function X(t,...e){if(_s.logLevel<=Te.DEBUG){const n=e.map(lh);_s.debug(`Firestore (${ai}): ${t}`,...n)}}function tr(t,...e){if(_s.logLevel<=Te.ERROR){const n=e.map(lh);_s.error(`Firestore (${ai}): ${t}`,...n)}}function Mr(t,...e){if(_s.logLevel<=Te.WARN){const n=e.map(lh);_s.warn(`Firestore (${ai}): ${t}`,...n)}}function lh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function ie(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,ry(t,r,n)}function ry(t,e,n){let r=`FIRESTORE (${ai}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw tr(r),new Error(r)}function be(t,e,n,r){let s="Unexpected state";typeof n=="string"?s=n:r=n,t||ry(e,s,r)}function de(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends ir{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(){this.promise=new Promise(((e,n)=>{this.resolve=e,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class jR{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable((()=>n(wt.UNAUTHENTICATED)))}shutdown(){}}class BR{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class $R{constructor(e){this.t=e,this.currentUser=wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){be(this.o===void 0,42304);let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new Pn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Pn,e.enqueueRetryable((()=>s(this.currentUser)))};const o=()=>{const l=i;e.enqueueRetryable((async()=>{await l.promise,await s(this.currentUser)}))},c=l=>{X("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit((l=>c(l))),setTimeout((()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?c(l):(X("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Pn)}}),0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((r=>this.i!==e?(X("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(be(typeof r.accessToken=="string",31837,{l:r}),new sy(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return be(e===null||typeof e=="string",2055,{h:e}),new wt(e)}}class qR{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=wt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class HR{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new qR(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable((()=>n(wt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class kp{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class GR{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,zt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){be(this.o===void 0,3512);const r=i=>{i.error!=null&&X("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.m;return this.m=i.token,X("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{X("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):X("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new kp(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((n=>n?(be(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new kp(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WR(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */function iy(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=WR(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%62))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function du(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),s=e.codePointAt(n);if(r!==s){if(r<128&&s<128)return _e(r,s);{const i=iy(),o=zR(i.encode(Np(t,n)),i.encode(Np(e,n)));return o!==0?o:_e(r,s)}}n+=r>65535?2:1}return _e(t.length,e.length)}function Np(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function zR(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return _e(t[n],e[n]);return _e(t.length,e.length)}function Ys(t,e,n){return t.length===e.length&&t.every(((r,s)=>n(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dp="__name__";class En{constructor(e,n,r){n===void 0?n=0:n>e.length&&ie(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&ie(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return En.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof En?e.forEach((r=>{n.push(r)})):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=En.compareSegments(e.get(s),n.get(s));if(i!==0)return i}return _e(e.length,n.length)}static compareSegments(e,n){const r=En.isNumericId(e),s=En.isNumericId(n);return r&&!s?-1:!r&&s?1:r&&s?En.extractNumericId(e).compare(En.extractNumericId(n)):du(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Dr.fromString(e.substring(4,e.length-2))}}class Ve extends En{construct(e,n,r){return new Ve(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new z(x.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter((s=>s.length>0)))}return new Ve(n)}static emptyPath(){return new Ve([])}}const KR=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class gt extends En{construct(e,n,r){return new gt(e,n,r)}static isValidIdentifier(e){return KR.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),gt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Dp}static keyField(){return new gt([Dp])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new z(x.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new z(x.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new z(x.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else c==="`"?(o=!o,s++):c!=="."||o?(r+=c,s++):(i(),s++)}if(i(),o)throw new z(x.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new gt(n)}static emptyPath(){return new gt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(e){this.path=e}static fromPath(e){return new se(Ve.fromString(e))}static fromName(e){return new se(Ve.fromString(e).popFirst(5))}static empty(){return new se(Ve.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ve.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ve.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new se(new Ve(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(t,e,n){if(!n)throw new z(x.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function QR(t,e,n,r){if(e===!0&&r===!0)throw new z(x.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Vp(t){if(!se.isDocumentKey(t))throw new z(x.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function xp(t){if(se.isDocumentKey(t))throw new z(x.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function ay(t){return typeof t=="object"&&t!==null&&(Object.getPrototypeOf(t)===Object.prototype||Object.getPrototypeOf(t)===null)}function kc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ie(12329,{type:typeof t})}function St(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(x.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=kc(t);throw new z(x.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function JR(t,e){if(e<=0)throw new z(x.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */function nt(t,e){const n={typeString:t};return e&&(n.value=e),n}function Do(t,e){if(!ay(t))throw new z(x.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in t)){n=`JSON missing required field: '${r}'`;break}const o=t[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new z(x.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Op=-62135596800,Lp=1e6;class ye{static now(){return ye.fromMillis(Date.now())}static fromDate(e){return ye.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*Lp);return new ye(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(x.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<Op)throw new z(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(x.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Lp}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ye._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Do(e,ye._jsonSchema))return new ye(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Op;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ye._jsonSchemaVersion="firestore/timestamp/1.0",ye._jsonSchema={type:nt("string",ye._jsonSchemaVersion),seconds:nt("number"),nanoseconds:nt("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{static fromTimestamp(e){return new ue(e)}static min(){return new ue(new ye(0,0))}static max(){return new ue(new ye(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const po=-1;function YR(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ue.fromTimestamp(r===1e9?new ye(n+1,0):new ye(n,r));return new Fr(s,se.empty(),e)}function XR(t){return new Fr(t.readTime,t.key,po)}class Fr{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Fr(ue.min(),se.empty(),po)}static max(){return new Fr(ue.max(),se.empty(),po)}}function ZR(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=se.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class tS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(t){if(t.code!==x.FAILED_PRECONDITION||t.message!==eS)throw t;X("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)}),(n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)}))}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ie(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}}))}toPromise(){return new Promise(((e,n)=>{this.next(e,n)}))}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction((()=>e(n))):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction((()=>e(n))):F.reject(n)}static resolve(e){return new F(((n,r)=>{n(e)}))}static reject(e){return new F(((n,r)=>{r(e)}))}static waitFor(e){return new F(((n,r)=>{let s=0,i=0,o=!1;e.forEach((c=>{++s,c.next((()=>{++i,o&&i===s&&n()}),(l=>r(l)))})),o=!0,i===s&&n()}))}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next((s=>s?F.resolve(s):r()));return n}static forEach(e,n){const r=[];return e.forEach(((s,i)=>{r.push(n.call(this,s,i))})),this.waitFor(r)}static mapArray(e,n){return new F(((r,s)=>{const i=e.length,o=new Array(i);let c=0;for(let l=0;l<i;l++){const u=l;n(e[u]).next((f=>{o[u]=f,++c,c===i&&r(o)}),(f=>s(f)))}}))}static doWhile(e,n){return new F(((r,s)=>{const i=()=>{e()===!0?n().next((()=>{i()}),s):r()};i()}))}}function nS(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function li(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Nc{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this._e(r),this.ae=r=>n.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Nc.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hh=-1;function Vo(t){return t==null}function Ga(t){return t===0&&1/t==-1/0}function rS(t){return typeof t=="number"&&Number.isInteger(t)&&!Ga(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cy="";function sS(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Mp(e)),e=iS(t.get(n),e);return Mp(e)}function iS(t,e){let n=e;const r=t.length;for(let s=0;s<r;s++){const i=t.charAt(s);switch(i){case"\0":n+="";break;case cy:n+="";break;default:n+=i}}return n}function Mp(t){return t+cy+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Wr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ly(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){this.comparator=e,this.root=n||pt.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,pt.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,pt.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((n,r)=>(e(n,r),!1)))}toString(){const e=[];return this.inorderTraversal(((n,r)=>(e.push(`${n}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new la(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new la(this.root,e,this.comparator,!1)}getReverseIterator(){return new la(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new la(this.root,e,this.comparator,!0)}}class la{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class pt{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??pt.RED,this.left=s??pt.EMPTY,this.right=i??pt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new pt(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return pt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return pt.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,pt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,pt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ie(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ie(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ie(27949);return e+(this.isRed()?0:1)}}pt.EMPTY=null,pt.RED=!0,pt.BLACK=!1;pt.EMPTY=new class{constructor(){this.size=0}get key(){throw ie(57766)}get value(){throw ie(16141)}get color(){throw ie(16727)}get left(){throw ie(29726)}get right(){throw ie(36894)}copy(e,n,r,s,i){return this}insert(e,n,r){return new pt(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((n,r)=>(e(n),!1)))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Up(this.data.getIterator())}getIteratorFrom(e){return new Up(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach((r=>{n=n.add(r)})),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((n=>{e.push(n)})),e}toString(){const e=[];return this.forEach((n=>e.push(n))),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class Up{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e){this.fields=e,e.sort(gt.comparator)}static empty(){return new Yt([])}unionWith(e){let n=new st(gt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Yt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ys(this.fields,e.fields,((n,r)=>n.isEqual(r)))}}/**
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
 */class uy extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new uy("Invalid base64 string: "+i):i}})(e);return new mt(n)}static fromUint8Array(e){const n=(function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i})(e);return new mt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}mt.EMPTY_BYTE_STRING=new mt("");const oS=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ur(t){if(be(!!t,39018),typeof t=="string"){let e=0;const n=oS.exec(t);if(be(!!n,46558,{timestamp:t}),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Qe(t.seconds),nanos:Qe(t.nanos)}}function Qe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function jr(t){return typeof t=="string"?mt.fromBase64String(t):mt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy="server_timestamp",fy="__type__",dy="__previous_value__",py="__local_write_time__";function fh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[fy])===null||n===void 0?void 0:n.stringValue)===hy}function Dc(t){const e=t.mapValue.fields[dy];return fh(e)?Dc(e):e}function go(t){const e=Ur(t.mapValue.fields[py].timestampValue);return new ye(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aS{constructor(e,n,r,s,i,o,c,l,u,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.longPollingOptions=l,this.useFetchStreams=u,this.isUsingEmulator=f}}const Wa="(default)";class mo{constructor(e,n){this.projectId=e,this.database=n||Wa}static empty(){return new mo("","")}get isDefaultDatabase(){return this.database===Wa}isEqual(e){return e instanceof mo&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gy="__type__",cS="__max__",ua={mapValue:{}},my="__vector__",za="value";function Br(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?fh(t)?4:uS(t)?9007199254740991:lS(t)?10:11:ie(28295,{value:t})}function On(t,e){if(t===e)return!0;const n=Br(t);if(n!==Br(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return go(t).isEqual(go(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Ur(s.timestampValue),c=Ur(i.timestampValue);return o.seconds===c.seconds&&o.nanos===c.nanos})(t,e);case 5:return t.stringValue===e.stringValue;case 6:return(function(s,i){return jr(s.bytesValue).isEqual(jr(i.bytesValue))})(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return(function(s,i){return Qe(s.geoPointValue.latitude)===Qe(i.geoPointValue.latitude)&&Qe(s.geoPointValue.longitude)===Qe(i.geoPointValue.longitude)})(t,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Qe(s.integerValue)===Qe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Qe(s.doubleValue),c=Qe(i.doubleValue);return o===c?Ga(o)===Ga(c):isNaN(o)&&isNaN(c)}return!1})(t,e);case 9:return Ys(t.arrayValue.values||[],e.arrayValue.values||[],On);case 10:case 11:return(function(s,i){const o=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Fp(o)!==Fp(c))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(c[l]===void 0||!On(o[l],c[l])))return!1;return!0})(t,e);default:return ie(52216,{left:t})}}function _o(t,e){return(t.values||[]).find((n=>On(n,e)))!==void 0}function Xs(t,e){if(t===e)return 0;const n=Br(t),r=Br(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return(function(i,o){const c=Qe(i.integerValue||i.doubleValue),l=Qe(o.integerValue||o.doubleValue);return c<l?-1:c>l?1:c===l?0:isNaN(c)?isNaN(l)?0:-1:1})(t,e);case 3:return jp(t.timestampValue,e.timestampValue);case 4:return jp(go(t),go(e));case 5:return du(t.stringValue,e.stringValue);case 6:return(function(i,o){const c=jr(i),l=jr(o);return c.compareTo(l)})(t.bytesValue,e.bytesValue);case 7:return(function(i,o){const c=i.split("/"),l=o.split("/");for(let u=0;u<c.length&&u<l.length;u++){const f=_e(c[u],l[u]);if(f!==0)return f}return _e(c.length,l.length)})(t.referenceValue,e.referenceValue);case 8:return(function(i,o){const c=_e(Qe(i.latitude),Qe(o.latitude));return c!==0?c:_e(Qe(i.longitude),Qe(o.longitude))})(t.geoPointValue,e.geoPointValue);case 9:return Bp(t.arrayValue,e.arrayValue);case 10:return(function(i,o){var c,l,u,f;const d=i.fields||{},g=o.fields||{},_=(c=d[za])===null||c===void 0?void 0:c.arrayValue,S=(l=g[za])===null||l===void 0?void 0:l.arrayValue,P=_e(((u=_==null?void 0:_.values)===null||u===void 0?void 0:u.length)||0,((f=S==null?void 0:S.values)===null||f===void 0?void 0:f.length)||0);return P!==0?P:Bp(_,S)})(t.mapValue,e.mapValue);case 11:return(function(i,o){if(i===ua.mapValue&&o===ua.mapValue)return 0;if(i===ua.mapValue)return 1;if(o===ua.mapValue)return-1;const c=i.fields||{},l=Object.keys(c),u=o.fields||{},f=Object.keys(u);l.sort(),f.sort();for(let d=0;d<l.length&&d<f.length;++d){const g=du(l[d],f[d]);if(g!==0)return g;const _=Xs(c[l[d]],u[f[d]]);if(_!==0)return _}return _e(l.length,f.length)})(t.mapValue,e.mapValue);default:throw ie(23264,{le:n})}}function jp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=Ur(t),r=Ur(e),s=_e(n.seconds,r.seconds);return s!==0?s:_e(n.nanos,r.nanos)}function Bp(t,e){const n=t.values||[],r=e.values||[];for(let s=0;s<n.length&&s<r.length;++s){const i=Xs(n[s],r[s]);if(i)return i}return _e(n.length,r.length)}function Zs(t){return pu(t)}function pu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?(function(n){const r=Ur(n);return`time(${r.seconds},${r.nanos})`})(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?(function(n){return jr(n).toBase64()})(t.bytesValue):"referenceValue"in t?(function(n){return se.fromName(n).toString()})(t.referenceValue):"geoPointValue"in t?(function(n){return`geo(${n.latitude},${n.longitude})`})(t.geoPointValue):"arrayValue"in t?(function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=pu(i);return r+"]"})(t.arrayValue):"mapValue"in t?(function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${pu(n.fields[o])}`;return s+"}"})(t.mapValue):ie(61005,{value:t})}function wa(t){switch(Br(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Dc(t);return e?16+wa(e):16;case 5:return 2*t.stringValue.length;case 6:return jr(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+wa(i)),0)})(t.arrayValue);case 10:case 11:return(function(r){let s=0;return Wr(r.fields,((i,o)=>{s+=i.length+wa(o)})),s})(t.mapValue);default:throw ie(13486,{value:t})}}function $p(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function gu(t){return!!t&&"integerValue"in t}function dh(t){return!!t&&"arrayValue"in t}function qp(t){return!!t&&"nullValue"in t}function Hp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ia(t){return!!t&&"mapValue"in t}function lS(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[gy])===null||n===void 0?void 0:n.stringValue)===my}function Ji(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Wr(t.mapValue.fields,((n,r)=>e.mapValue.fields[n]=Ji(r))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Ji(t.arrayValue.values[n]);return e}return Object.assign({},t)}function uS(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===cS}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.value=e}static empty(){return new Mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ia(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ji(n)}setAll(e){let n=gt.emptyPath(),r={},s=[];e.forEach(((o,c)=>{if(!n.isImmediateParentOf(c)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=c.popLast()}o?r[c.lastSegment()]=Ji(o):s.push(c.lastSegment())}));const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ia(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ia(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Wr(n,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new Mt(Ji(this.value))}}function _y(t){const e=[];return Wr(t.fields,((n,r)=>{const s=new gt([n]);if(Ia(r)){const i=_y(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)})),new Yt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r,s,i,o,c){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=c}static newInvalidDocument(e){return new lt(e,0,ue.min(),ue.min(),ue.min(),Mt.empty(),0)}static newFoundDocument(e,n,r,s){return new lt(e,1,n,ue.min(),r,s,0)}static newNoDocument(e,n){return new lt(e,2,n,ue.min(),ue.min(),Mt.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,ue.min(),ue.min(),Mt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ue.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ue.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ka{constructor(e,n){this.position=e,this.inclusive=n}}function Gp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=se.comparator(se.fromName(o.referenceValue),n.key):r=Xs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Wp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!On(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class yo{constructor(e,n="asc"){this.field=e,this.dir=n}}function hS(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class yy{}class et extends yy{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new dS(e,n,r):n==="array-contains"?new mS(e,r):n==="in"?new _S(e,r):n==="not-in"?new yS(e,r):n==="array-contains-any"?new vS(e,r):new et(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new pS(e,r):new gS(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Xs(n,this.value)):n!==null&&Br(this.value)===Br(n)&&this.matchesComparison(Xs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ie(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class gn extends yy{constructor(e,n){super(),this.filters=e,this.op=n,this.he=null}static create(e,n){return new gn(e,n)}matches(e){return vy(this)?this.filters.find((n=>!n.matches(e)))===void 0:this.filters.find((n=>n.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,n)=>e.concat(n.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function vy(t){return t.op==="and"}function Ey(t){return fS(t)&&vy(t)}function fS(t){for(const e of t.filters)if(e instanceof gn)return!1;return!0}function mu(t){if(t instanceof et)return t.field.canonicalString()+t.op.toString()+Zs(t.value);if(Ey(t))return t.filters.map((e=>mu(e))).join(",");{const e=t.filters.map((n=>mu(n))).join(",");return`${t.op}(${e})`}}function Ty(t,e){return t instanceof et?(function(r,s){return s instanceof et&&r.op===s.op&&r.field.isEqual(s.field)&&On(r.value,s.value)})(t,e):t instanceof gn?(function(r,s){return s instanceof gn&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,o,c)=>i&&Ty(o,s.filters[c])),!0):!1})(t,e):void ie(19439)}function wy(t){return t instanceof et?(function(n){return`${n.field.canonicalString()} ${n.op} ${Zs(n.value)}`})(t):t instanceof gn?(function(n){return n.op.toString()+" {"+n.getFilters().map(wy).join(" ,")+"}"})(t):"Filter"}class dS extends et{constructor(e,n,r){super(e,n,r),this.key=se.fromName(r.referenceValue)}matches(e){const n=se.comparator(e.key,this.key);return this.matchesComparison(n)}}class pS extends et{constructor(e,n){super(e,"in",n),this.keys=Iy("in",n)}matches(e){return this.keys.some((n=>n.isEqual(e.key)))}}class gS extends et{constructor(e,n){super(e,"not-in",n),this.keys=Iy("not-in",n)}matches(e){return!this.keys.some((n=>n.isEqual(e.key)))}}function Iy(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map((r=>se.fromName(r.referenceValue)))}class mS extends et{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return dh(n)&&_o(n.arrayValue,this.value)}}class _S extends et{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&_o(this.value.arrayValue,n)}}class yS extends et{constructor(e,n){super(e,"not-in",n)}matches(e){if(_o(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!_o(this.value.arrayValue,n)}}class vS extends et{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!dh(n)||!n.arrayValue.values)&&n.arrayValue.values.some((r=>_o(this.value.arrayValue,r)))}}/**
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
 */class ES{constructor(e,n=null,r=[],s=[],i=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=c,this.Pe=null}}function zp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new ES(t,e,n,r,s,i,o)}function ph(t){const e=de(t);if(e.Pe===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((r=>mu(r))).join(","),n+="|ob:",n+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Vo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((r=>Zs(r))).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((r=>Zs(r))).join(",")),e.Pe=n}return e.Pe}function gh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!hS(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Ty(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Wp(t.startAt,e.startAt)&&Wp(t.endAt,e.endAt)}function _u(t){return se.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ui{constructor(e,n=null,r=[],s=[],i=null,o="F",c=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=c,this.endAt=l,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function TS(t,e,n,r,s,i,o,c){return new ui(t,e,n,r,s,i,o,c)}function Vc(t){return new ui(t)}function Kp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Ay(t){return t.collectionGroup!==null}function Yi(t){const e=de(t);if(e.Te===null){e.Te=[];const n=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let c=new st(gt.comparator);return o.filters.forEach((l=>{l.getFlattenedFilters().forEach((u=>{u.isInequality()&&(c=c.add(u.field))}))})),c})(e).forEach((i=>{n.has(i.canonicalString())||i.isKeyField()||e.Te.push(new yo(i,r))})),n.has(gt.keyField().canonicalString())||e.Te.push(new yo(gt.keyField(),r))}return e.Te}function kn(t){const e=de(t);return e.Ie||(e.Ie=wS(e,Yi(t))),e.Ie}function wS(t,e){if(t.limitType==="F")return zp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new yo(s.field,i)}));const n=t.endAt?new Ka(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Ka(t.startAt.position,t.startAt.inclusive):null;return zp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function yu(t,e){const n=t.filters.concat([e]);return new ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function Qa(t,e,n){return new ui(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function xc(t,e){return gh(kn(t),kn(e))&&t.limitType===e.limitType}function by(t){return`${ph(kn(t))}|lt:${t.limitType}`}function Vs(t){return`Query(target=${(function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map((s=>wy(s))).join(", ")}]`),Vo(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map((s=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(s))).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map((s=>Zs(s))).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map((s=>Zs(s))).join(",")),`Target(${r})`})(kn(t))}; limitType=${t.limitType})`}function Oc(t,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):se.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(t,e)&&(function(r,s){for(const i of Yi(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(t,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(t,e)&&(function(r,s){return!(r.startAt&&!(function(o,c,l){const u=Gp(o,c,l);return o.inclusive?u<=0:u<0})(r.startAt,Yi(r),s)||r.endAt&&!(function(o,c,l){const u=Gp(o,c,l);return o.inclusive?u>=0:u>0})(r.endAt,Yi(r),s))})(t,e)}function IS(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Ry(t){return(e,n)=>{let r=!1;for(const s of Yi(t)){const i=AS(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function AS(t,e,n){const r=t.field.isKeyField()?se.comparator(e.key,n.key):(function(i,o,c){const l=o.data.field(i),u=c.data.field(i);return l!==null&&u!==null?Xs(l,u):ie(42886)})(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ie(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Wr(this.inner,((n,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return ly(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bS=new We(se.comparator);function nr(){return bS}const Sy=new We(se.comparator);function Ui(...t){let e=Sy;for(const n of t)e=e.insert(n.key,n);return e}function Cy(t){let e=Sy;return t.forEach(((n,r)=>e=e.insert(n,r.overlayedDocument))),e}function as(){return Xi()}function Py(){return Xi()}function Xi(){return new ws((t=>t.toString()),((t,e)=>t.isEqual(e)))}const RS=new We(se.comparator),SS=new st(se.comparator);function we(...t){let e=SS;for(const n of t)e=e.add(n);return e}const CS=new st(_e);function PS(){return CS}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mh(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ga(e)?"-0":e}}function ky(t){return{integerValue:""+t}}function Ny(t,e){return rS(e)?ky(e):mh(t,e)}/**
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
 */class Lc{constructor(){this._=void 0}}function kS(t,e,n){return t instanceof Ja?(function(s,i){const o={fields:{[fy]:{stringValue:hy},[py]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&fh(i)&&(i=Dc(i)),i&&(o.fields[dy]=i),{mapValue:o}})(n,e):t instanceof vo?Vy(t,e):t instanceof Eo?xy(t,e):(function(s,i){const o=Dy(s,i),c=Qp(o)+Qp(s.Ee);return gu(o)&&gu(s.Ee)?ky(c):mh(s.serializer,c)})(t,e)}function NS(t,e,n){return t instanceof vo?Vy(t,e):t instanceof Eo?xy(t,e):n}function Dy(t,e){return t instanceof To?(function(r){return gu(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class Ja extends Lc{}class vo extends Lc{constructor(e){super(),this.elements=e}}function Vy(t,e){const n=Oy(e);for(const r of t.elements)n.some((s=>On(s,r)))||n.push(r);return{arrayValue:{values:n}}}class Eo extends Lc{constructor(e){super(),this.elements=e}}function xy(t,e){let n=Oy(e);for(const r of t.elements)n=n.filter((s=>!On(s,r)));return{arrayValue:{values:n}}}class To extends Lc{constructor(e,n){super(),this.serializer=e,this.Ee=n}}function Qp(t){return Qe(t.integerValue||t.doubleValue)}function Oy(t){return dh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DS{constructor(e,n){this.field=e,this.transform=n}}function VS(t,e){return t.field.isEqual(e.field)&&(function(r,s){return r instanceof vo&&s instanceof vo||r instanceof Eo&&s instanceof Eo?Ys(r.elements,s.elements,On):r instanceof To&&s instanceof To?On(r.Ee,s.Ee):r instanceof Ja&&s instanceof Ja})(t.transform,e.transform)}class xS{constructor(e,n){this.version=e,this.transformResults=n}}class tt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tt}static exists(e){return new tt(void 0,e)}static updateTime(e){return new tt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Aa(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Mc{}function Ly(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Oo(t.key,tt.none()):new xo(t.key,t.data,tt.none());{const n=t.data,r=Mt.empty();let s=new st(gt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new zr(t.key,r,new Yt(s.toArray()),tt.none())}}function OS(t,e,n){t instanceof xo?(function(s,i,o){const c=s.value.clone(),l=Yp(s.fieldTransforms,i,o.transformResults);c.setAll(l),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(t,e,n):t instanceof zr?(function(s,i,o){if(!Aa(s.precondition,i))return void i.convertToUnknownDocument(o.version);const c=Yp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(My(s)),l.setAll(c),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()})(t,e,n):(function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,n)}function Zi(t,e,n,r){return t instanceof xo?(function(i,o,c,l){if(!Aa(i.precondition,o))return c;const u=i.value.clone(),f=Xp(i.fieldTransforms,l,o);return u.setAll(f),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null})(t,e,n,r):t instanceof zr?(function(i,o,c,l){if(!Aa(i.precondition,o))return c;const u=Xp(i.fieldTransforms,l,o),f=o.data;return f.setAll(My(i)),f.setAll(u),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((d=>d.field)))})(t,e,n,r):(function(i,o,c){return Aa(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):c})(t,e,n)}function LS(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=Dy(r.transform,s||null);i!=null&&(n===null&&(n=Mt.empty()),n.set(r.field,i))}return n||null}function Jp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Ys(r,s,((i,o)=>VS(i,o)))})(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class xo extends Mc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class zr extends Mc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function My(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function Yp(t,e,n){const r=new Map;be(t.length===n.length,32656,{Ae:n.length,Re:t.length});for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,c=e.data.field(i.field);r.set(i.field,NS(o,c,n[s]))}return r}function Xp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,kS(i,o,e))}return r}class Oo extends Mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Fy extends Mc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MS{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&OS(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Zi(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Zi(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Py();return this.mutations.forEach((s=>{const i=e.get(s.key),o=i.overlayedDocument;let c=this.applyToLocalView(o,i.mutatedFields);c=n.has(s.key)?null:c;const l=Ly(o,c);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ue.min())})),r}keys(){return this.mutations.reduce(((e,n)=>e.add(n.key)),we())}isEqual(e){return this.batchId===e.batchId&&Ys(this.mutations,e.mutations,((n,r)=>Jp(n,r)))&&Ys(this.baseMutations,e.baseMutations,((n,r)=>Jp(n,r)))}}class _h{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){be(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return RS})();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new _h(e,n,r,s)}}/**
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
 */class FS{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class US{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ze,Ae;function Uy(t){switch(t){case x.OK:return ie(64938);case x.CANCELLED:case x.UNKNOWN:case x.DEADLINE_EXCEEDED:case x.RESOURCE_EXHAUSTED:case x.INTERNAL:case x.UNAVAILABLE:case x.UNAUTHENTICATED:return!1;case x.INVALID_ARGUMENT:case x.NOT_FOUND:case x.ALREADY_EXISTS:case x.PERMISSION_DENIED:case x.FAILED_PRECONDITION:case x.ABORTED:case x.OUT_OF_RANGE:case x.UNIMPLEMENTED:case x.DATA_LOSS:return!0;default:return ie(15467,{code:t})}}function jy(t){if(t===void 0)return tr("GRPC error has no .code"),x.UNKNOWN;switch(t){case Ze.OK:return x.OK;case Ze.CANCELLED:return x.CANCELLED;case Ze.UNKNOWN:return x.UNKNOWN;case Ze.DEADLINE_EXCEEDED:return x.DEADLINE_EXCEEDED;case Ze.RESOURCE_EXHAUSTED:return x.RESOURCE_EXHAUSTED;case Ze.INTERNAL:return x.INTERNAL;case Ze.UNAVAILABLE:return x.UNAVAILABLE;case Ze.UNAUTHENTICATED:return x.UNAUTHENTICATED;case Ze.INVALID_ARGUMENT:return x.INVALID_ARGUMENT;case Ze.NOT_FOUND:return x.NOT_FOUND;case Ze.ALREADY_EXISTS:return x.ALREADY_EXISTS;case Ze.PERMISSION_DENIED:return x.PERMISSION_DENIED;case Ze.FAILED_PRECONDITION:return x.FAILED_PRECONDITION;case Ze.ABORTED:return x.ABORTED;case Ze.OUT_OF_RANGE:return x.OUT_OF_RANGE;case Ze.UNIMPLEMENTED:return x.UNIMPLEMENTED;case Ze.DATA_LOSS:return x.DATA_LOSS;default:return ie(39323,{code:t})}}(Ae=Ze||(Ze={}))[Ae.OK=0]="OK",Ae[Ae.CANCELLED=1]="CANCELLED",Ae[Ae.UNKNOWN=2]="UNKNOWN",Ae[Ae.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ae[Ae.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ae[Ae.NOT_FOUND=5]="NOT_FOUND",Ae[Ae.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ae[Ae.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ae[Ae.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ae[Ae.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ae[Ae.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ae[Ae.ABORTED=10]="ABORTED",Ae[Ae.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ae[Ae.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ae[Ae.INTERNAL=13]="INTERNAL",Ae[Ae.UNAVAILABLE=14]="UNAVAILABLE",Ae[Ae.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const jS=new Dr([4294967295,4294967295],0);function Zp(t){const e=iy().encode(t),n=new Y_;return n.update(e),new Uint8Array(n.digest())}function eg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Dr([n,r],0),new Dr([s,i],0)]}class yh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ji(`Invalid padding: ${n}`);if(r<0)throw new ji(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ji(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ji(`Invalid padding when bitmap length is 0: ${n}`);this.fe=8*e.length-n,this.ge=Dr.fromNumber(this.fe)}pe(e,n,r){let s=e.add(n.multiply(Dr.fromNumber(r)));return s.compare(jS)===1&&(s=new Dr([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const n=Zp(e),[r,s]=eg(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);if(!this.ye(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new yh(i,s,n);return r.forEach((c=>o.insert(c))),o}insert(e){if(this.fe===0)return;const n=Zp(e),[r,s]=eg(n);for(let i=0;i<this.hashCount;i++){const o=this.pe(r,s,i);this.we(o)}}we(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ji extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,Lo.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Fc(ue.min(),s,new We(_e),nr(),we())}}class Lo{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Lo(r,n,we(),we(),we())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{constructor(e,n,r,s){this.Se=e,this.removedTargetIds=n,this.key=r,this.be=s}}class By{constructor(e,n){this.targetId=e,this.De=n}}class $y{constructor(e,n,r=mt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class tg{constructor(){this.ve=0,this.Ce=ng(),this.Fe=mt.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=we(),n=we(),r=we();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:ie(38017,{changeType:i})}})),new Lo(this.Fe,this.Me,e,n,r)}ke(){this.xe=!1,this.Ce=ng()}qe(e,n){this.xe=!0,this.Ce=this.Ce.insert(e,n)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,be(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class BS{constructor(e){this.We=e,this.Ge=new Map,this.ze=nr(),this.je=ha(),this.Je=ha(),this.He=new We(_e)}Ye(e){for(const n of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(n,e.be):this.Xe(n,e.key,e.be);for(const n of e.removedTargetIds)this.Xe(n,e.key,e.be)}et(e){this.forEachTarget(e,(n=>{const r=this.tt(n);switch(e.state){case 0:this.nt(n)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(n);break;case 3:this.nt(n)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(n)&&(this.rt(n),r.Be(e.resumeToken));break;default:ie(56790,{state:e.state})}}))}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Ge.forEach(((r,s)=>{this.nt(s)&&n(s)}))}it(e){const n=e.targetId,r=e.De.count,s=this.st(n);if(s){const i=s.target;if(_u(i))if(r===0){const o=new se(i.path);this.Xe(n,o,lt.newNoDocument(o,ue.min()))}else be(r===1,20013,{expectedCount:r});else{const o=this.ot(n);if(o!==r){const c=this._t(e),l=c?this.ut(c,e,o):1;if(l!==0){this.rt(n);const u=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(n,u)}}}}}_t(e){const n=e.De.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,c;try{o=jr(r).toUint8Array()}catch(l){if(l instanceof uy)return Mr("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{c=new yh(o,s,i)}catch(l){return Mr(l instanceof ji?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return c.fe===0?null:c}ut(e,n,r){return n.De.count===r-this.ht(e,n.targetId)?0:2}ht(e,n){const r=this.We.getRemoteKeysForTarget(n);let s=0;return r.forEach((i=>{const o=this.We.lt(),c=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.Xe(n,i,null),s++)})),s}Pt(e){const n=new Map;this.Ge.forEach(((i,o)=>{const c=this.st(o);if(c){if(i.current&&_u(c.target)){const l=new se(c.target.path);this.Tt(l).has(o)||this.It(o,l)||this.Xe(o,l,lt.newNoDocument(l,e))}i.Ne&&(n.set(o,i.Le()),i.ke())}}));let r=we();this.Je.forEach(((i,o)=>{let c=!0;o.forEachWhile((l=>{const u=this.st(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(r=r.add(i))})),this.ze.forEach(((i,o)=>o.setReadTime(e)));const s=new Fc(e,n,this.He,this.ze,r);return this.ze=nr(),this.je=ha(),this.Je=ha(),this.He=new We(_e),s}Ze(e,n){if(!this.nt(e))return;const r=this.It(e,n.key)?2:0;this.tt(e).qe(n.key,r),this.ze=this.ze.insert(n.key,n),this.je=this.je.insert(n.key,this.Tt(n.key).add(e)),this.Je=this.Je.insert(n.key,this.dt(n.key).add(e))}Xe(e,n,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,n)?s.qe(n,1):s.Qe(n),this.Je=this.Je.insert(n,this.dt(n).delete(e)),this.Je=this.Je.insert(n,this.dt(n).add(e)),r&&(this.ze=this.ze.insert(n,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const n=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let n=this.Ge.get(e);return n||(n=new tg,this.Ge.set(e,n)),n}dt(e){let n=this.Je.get(e);return n||(n=new st(_e),this.Je=this.Je.insert(e,n)),n}Tt(e){let n=this.je.get(e);return n||(n=new st(_e),this.je=this.je.insert(e,n)),n}nt(e){const n=this.st(e)!==null;return n||X("WatchChangeAggregator","Detected inactive target",e),n}st(e){const n=this.Ge.get(e);return n&&n.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new tg),this.We.getRemoteKeysForTarget(e).forEach((n=>{this.Xe(e,n,null)}))}It(e,n){return this.We.getRemoteKeysForTarget(e).has(n)}}function ha(){return new We(se.comparator)}function ng(){return new We(se.comparator)}const $S={asc:"ASCENDING",desc:"DESCENDING"},qS={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},HS={and:"AND",or:"OR"};class GS{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function vu(t,e){return t.useProto3Json||Vo(e)?e:{value:e}}function Ya(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function qy(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function WS(t,e){return Ya(t,e.toTimestamp())}function Xt(t){return be(!!t,49232),ue.fromTimestamp((function(n){const r=Ur(n);return new ye(r.seconds,r.nanos)})(t))}function vh(t,e){return Eu(t,e).canonicalString()}function Eu(t,e){const n=(function(s){return new Ve(["projects",s.projectId,"databases",s.database])})(t).child("documents");return e===void 0?n:n.child(e)}function Hy(t){const e=Ve.fromString(t);return be(Jy(e),10190,{key:e.toString()}),e}function Xa(t,e){return vh(t.databaseId,e.path)}function eo(t,e){const n=Hy(e);if(n.get(1)!==t.databaseId.projectId)throw new z(x.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(x.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new se(Wy(n))}function Gy(t,e){return vh(t.databaseId,e)}function zS(t){const e=Hy(t);return e.length===4?Ve.emptyPath():Wy(e)}function Tu(t){return new Ve(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Wy(t){return be(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function rg(t,e,n){return{name:Xa(t,e),fields:n.value.mapValue.fields}}function KS(t,e){return"found"in e?(function(r,s){be(!!s.found,43571),s.found.name,s.found.updateTime;const i=eo(r,s.found.name),o=Xt(s.found.updateTime),c=s.found.createTime?Xt(s.found.createTime):ue.min(),l=new Mt({mapValue:{fields:s.found.fields}});return lt.newFoundDocument(i,o,c,l)})(t,e):"missing"in e?(function(r,s){be(!!s.missing,3894),be(!!s.readTime,22933);const i=eo(r,s.missing),o=Xt(s.readTime);return lt.newNoDocument(i,o)})(t,e):ie(7234,{result:e})}function QS(t,e){let n;if("targetChange"in e){e.targetChange;const r=(function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ie(39313,{state:u})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(u,f){return u.useProto3Json?(be(f===void 0||typeof f=="string",58123),mt.fromBase64String(f||"")):(be(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),mt.fromUint8Array(f||new Uint8Array))})(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&(function(u){const f=u.code===void 0?x.UNKNOWN:jy(u.code);return new z(f,u.message||"")})(o);n=new $y(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=eo(t,r.document.name),i=Xt(r.document.updateTime),o=r.document.createTime?Xt(r.document.createTime):ue.min(),c=new Mt({mapValue:{fields:r.document.fields}}),l=lt.newFoundDocument(s,i,o,c),u=r.targetIds||[],f=r.removedTargetIds||[];n=new ba(u,f,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=eo(t,r.document),i=r.readTime?Xt(r.readTime):ue.min(),o=lt.newNoDocument(s,i),c=r.removedTargetIds||[];n=new ba([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=eo(t,r.document),i=r.removedTargetIds||[];n=new ba([],i,s,null)}else{if(!("filter"in e))return ie(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new US(s,i),c=r.targetId;n=new By(c,o)}}return n}function zy(t,e){let n;if(e instanceof xo)n={update:rg(t,e.key,e.value)};else if(e instanceof Oo)n={delete:Xa(t,e.key)};else if(e instanceof zr)n={update:rg(t,e.key,e.data),updateMask:sC(e.fieldMask)};else{if(!(e instanceof Fy))return ie(16599,{Rt:e.type});n={verify:Xa(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((r=>(function(i,o){const c=o.transform;if(c instanceof Ja)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof vo)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof Eo)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof To)return{fieldPath:o.field.canonicalString(),increment:c.Ee};throw ie(20930,{transform:o.transform})})(0,r)))),e.precondition.isNone||(n.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:WS(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ie(27497)})(t,e.precondition)),n}function JS(t,e){return t&&t.length>0?(be(e!==void 0,14353),t.map((n=>(function(s,i){let o=s.updateTime?Xt(s.updateTime):Xt(i);return o.isEqual(ue.min())&&(o=Xt(i)),new xS(o,s.transformResults||[])})(n,e)))):[]}function YS(t,e){return{documents:[Gy(t,e.path)]}}function XS(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Gy(t,s);const i=(function(u){if(u.length!==0)return Qy(gn.create(u,"and"))})(e.filters);i&&(n.structuredQuery.where=i);const o=(function(u){if(u.length!==0)return u.map((f=>(function(g){return{field:xs(g.field),direction:tC(g.dir)}})(f)))})(e.orderBy);o&&(n.structuredQuery.orderBy=o);const c=vu(t,e.limit);return c!==null&&(n.structuredQuery.limit=c),e.startAt&&(n.structuredQuery.startAt=(function(u){return{before:u.inclusive,values:u.position}})(e.startAt)),e.endAt&&(n.structuredQuery.endAt=(function(u){return{before:!u.inclusive,values:u.position}})(e.endAt)),{Vt:n,parent:s}}function ZS(t){let e=zS(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){be(r===1,65062);const f=n.from[0];f.allDescendants?s=f.collectionId:e=e.child(f.collectionId)}let i=[];n.where&&(i=(function(d){const g=Ky(d);return g instanceof gn&&Ey(g)?g.getFilters():[g]})(n.where));let o=[];n.orderBy&&(o=(function(d){return d.map((g=>(function(S){return new yo(Os(S.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(S.direction))})(g)))})(n.orderBy));let c=null;n.limit&&(c=(function(d){let g;return g=typeof d=="object"?d.value:d,Vo(g)?null:g})(n.limit));let l=null;n.startAt&&(l=(function(d){const g=!!d.before,_=d.values||[];return new Ka(_,g)})(n.startAt));let u=null;return n.endAt&&(u=(function(d){const g=!d.before,_=d.values||[];return new Ka(_,g)})(n.endAt)),TS(e,s,o,i,c,"F",l,u)}function eC(t,e){const n=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ie(28987,{purpose:s})}})(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Ky(t){return t.unaryFilter!==void 0?(function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Os(n.unaryFilter.field);return et.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Os(n.unaryFilter.field);return et.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Os(n.unaryFilter.field);return et.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Os(n.unaryFilter.field);return et.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ie(61313);default:return ie(60726)}})(t):t.fieldFilter!==void 0?(function(n){return et.create(Os(n.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ie(58110);default:return ie(50506)}})(n.fieldFilter.op),n.fieldFilter.value)})(t):t.compositeFilter!==void 0?(function(n){return gn.create(n.compositeFilter.filters.map((r=>Ky(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ie(1026)}})(n.compositeFilter.op))})(t):ie(30097,{filter:t})}function tC(t){return $S[t]}function nC(t){return qS[t]}function rC(t){return HS[t]}function xs(t){return{fieldPath:t.canonicalString()}}function Os(t){return gt.fromServerFormat(t.fieldPath)}function Qy(t){return t instanceof et?(function(n){if(n.op==="=="){if(Hp(n.value))return{unaryFilter:{field:xs(n.field),op:"IS_NAN"}};if(qp(n.value))return{unaryFilter:{field:xs(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Hp(n.value))return{unaryFilter:{field:xs(n.field),op:"IS_NOT_NAN"}};if(qp(n.value))return{unaryFilter:{field:xs(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:xs(n.field),op:nC(n.op),value:n.value}}})(t):t instanceof gn?(function(n){const r=n.getFilters().map((s=>Qy(s)));return r.length===1?r[0]:{compositeFilter:{op:rC(n.op),filters:r}}})(t):ie(54877,{filter:t})}function sC(t){const e=[];return t.fields.forEach((n=>e.push(n.canonicalString()))),{fieldPaths:e}}function Jy(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e,n,r,s,i=ue.min(),o=ue.min(),c=mt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c,this.expectedCount=l}withSequenceNumber(e){return new Sr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Sr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{constructor(e){this.gt=e}}function oC(t){const e=ZS({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?Qa(e,e.limit,"L"):e}/**
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
 */class aC{constructor(){this.Dn=new cC}addToCollectionParentIndex(e,n){return this.Dn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.Dn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(Fr.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(Fr.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class cC{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new st(Ve.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new st(Ve.comparator)).toArray()}}/**
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
 */const sg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yy=41943040;class jt{static withCacheSize(e){return new jt(e,jt.DEFAULT_COLLECTION_PERCENTILE,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jt.DEFAULT_COLLECTION_PERCENTILE=10,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,jt.DEFAULT=new jt(Yy,jt.DEFAULT_COLLECTION_PERCENTILE,jt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),jt.DISABLED=new jt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new ei(0)}static ur(){return new ei(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="LruGarbageCollector",lC=1048576;function og([t,e],[n,r]){const s=_e(t,n);return s===0?_e(e,r):s}class uC{constructor(e){this.Tr=e,this.buffer=new st(og),this.Ir=0}dr(){return++this.Ir}Er(e){const n=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();og(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class hC{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){X(ig,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){li(n)?X(ig,"Ignoring IndexedDB error during garbage collection: ",n):await ci(n)}await this.Rr(3e5)}))}}class fC{constructor(e,n){this.Vr=e,this.params=n}calculateTargetCount(e,n){return this.Vr.mr(e).next((r=>Math.floor(n/100*r)))}nthSequenceNumber(e,n){if(n===0)return F.resolve(Nc.ue);const r=new uC(n);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,n,r){return this.Vr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.Vr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(X("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(sg)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(X("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),sg):this.pr(e,n)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,n){let r,s,i,o,c,l,u;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((d=>(d>this.params.maximumSequenceNumbersToCollect?(X("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${d}`),s=this.params.maximumSequenceNumbersToCollect):s=d,o=Date.now(),this.nthSequenceNumber(e,s)))).next((d=>(r=d,c=Date.now(),this.removeTargets(e,r,n)))).next((d=>(i=d,l=Date.now(),this.removeOrphanedDocuments(e,r)))).next((d=>(u=Date.now(),Ds()<=Te.DEBUG&&X("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${s} in `+(c-o)+`ms
	Removed ${i} targets in `+(l-c)+`ms
	Removed ${d} documents in `+(u-l)+`ms
Total Duration: ${u-f}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:d}))))}}function dC(t,e){return new fC(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pC{constructor(){this.changes=new ws((e=>e.toString()),((e,n)=>e.isEqual(n))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class gC{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mC{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,n)))).next((s=>(r!==null&&Zi(r.mutation,s,Yt.empty(),ye.now()),s)))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.getLocalViewOfDocuments(e,r,we()).next((()=>r))))}getLocalViewOfDocuments(e,n,r=we()){const s=as();return this.populateOverlays(e,s,n).next((()=>this.computeViews(e,n,s,r).next((i=>{let o=Ui();return i.forEach(((c,l)=>{o=o.insert(c,l.overlayedDocument)})),o}))))}getOverlayedDocuments(e,n){const r=as();return this.populateOverlays(e,r,n).next((()=>this.computeViews(e,n,r,we())))}populateOverlays(e,n,r){const s=[];return r.forEach((i=>{n.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((o,c)=>{n.set(o,c)}))}))}computeViews(e,n,r,s){let i=nr();const o=Xi(),c=(function(){return Xi()})();return n.forEach(((l,u)=>{const f=r.get(u.key);s.has(u.key)&&(f===void 0||f.mutation instanceof zr)?i=i.insert(u.key,u):f!==void 0?(o.set(u.key,f.mutation.getFieldMask()),Zi(f.mutation,u,f.mutation.getFieldMask(),ye.now())):o.set(u.key,Yt.empty())})),this.recalculateAndSaveOverlays(e,i).next((l=>(l.forEach(((u,f)=>o.set(u,f))),n.forEach(((u,f)=>{var d;return c.set(u,new gC(f,(d=o.get(u))!==null&&d!==void 0?d:null))})),c)))}recalculateAndSaveOverlays(e,n){const r=Xi();let s=new We(((o,c)=>o-c)),i=we();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next((o=>{for(const c of o)c.keys().forEach((l=>{const u=n.get(l);if(u===null)return;let f=r.get(l)||Yt.empty();f=c.applyToLocalView(u,f),r.set(l,f);const d=(s.get(c.batchId)||we()).add(l);s=s.insert(c.batchId,d)}))})).next((()=>{const o=[],c=s.getReverseIterator();for(;c.hasNext();){const l=c.getNext(),u=l.key,f=l.value,d=Py();f.forEach((g=>{if(!i.has(g)){const _=Ly(n.get(g),r.get(g));_!==null&&d.set(g,_),i=i.add(g)}})),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return F.waitFor(o)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,n,r,s){return(function(o){return se.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0})(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Ay(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next((i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):F.resolve(as());let c=po,l=i;return o.next((u=>F.forEach(u,((f,d)=>(c<d.largestBatchId&&(c=d.largestBatchId),i.get(f)?F.resolve():this.remoteDocumentCache.getEntry(e,f).next((g=>{l=l.insert(f,g)}))))).next((()=>this.populateOverlays(e,u,i))).next((()=>this.computeViews(e,l,u,we()))).next((f=>({batchId:c,changes:Cy(f)})))))}))}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new se(n)).next((r=>{let s=Ui();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Ui();return this.indexManager.getCollectionParents(e,i).next((c=>F.forEach(c,(l=>{const u=(function(d,g){return new ui(g,null,d.explicitOrderBy.slice(),d.filters.slice(),d.limit,d.limitType,d.startAt,d.endAt)})(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,r,s).next((f=>{f.forEach(((d,g)=>{o=o.insert(d,g)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s)))).next((o=>{i.forEach(((l,u)=>{const f=u.getKey();o.get(f)===null&&(o=o.insert(f,lt.newInvalidDocument(f)))}));let c=Ui();return o.forEach(((l,u)=>{const f=i.get(l);f!==void 0&&Zi(f.mutation,u,Yt.empty(),ye.now()),Oc(n,u)&&(c=c.insert(l,u))})),c}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _C{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,n){return F.resolve(this.Br.get(n))}saveBundleMetadata(e,n){return this.Br.set(n.id,(function(s){return{id:s.id,version:s.version,createTime:Xt(s.createTime)}})(n)),F.resolve()}getNamedQuery(e,n){return F.resolve(this.Lr.get(n))}saveNamedQuery(e,n){return this.Lr.set(n.name,(function(s){return{name:s.name,query:oC(s.bundledQuery),readTime:Xt(s.readTime)}})(n)),F.resolve()}}/**
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
 */class yC{constructor(){this.overlays=new We(se.comparator),this.kr=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=as();return F.forEach(n,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,n,r){return r.forEach(((s,i)=>{this.wt(e,n,i)})),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=as(),i=n.length+1,o=new se(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const l=c.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new We(((u,f)=>u-f));const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let f=i.get(u.largestBatchId);f===null&&(f=as(),i=i.insert(u.largestBatchId,f)),f.set(u.getKey(),u)}}const c=as(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach(((u,f)=>c.set(u,f))),!(c.size()>=s)););return F.resolve(c)}wt(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new FS(n,r));let i=this.kr.get(n);i===void 0&&(i=we(),this.kr.set(n,i)),this.kr.set(n,i.add(r.key))}}/**
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
 */class vC{constructor(){this.sessionToken=mt.EMPTY_BYTE_STRING}getSessionToken(e){return F.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,F.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(){this.qr=new st(at.Qr),this.$r=new st(at.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,n){const r=new at(e,n);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,n){e.forEach((r=>this.addReference(r,n)))}removeReference(e,n){this.Wr(new at(e,n))}Gr(e,n){e.forEach((r=>this.removeReference(r,n)))}zr(e){const n=new se(new Ve([])),r=new at(n,e),s=new at(n,e+1),i=[];return this.$r.forEachInRange([r,s],(o=>{this.Wr(o),i.push(o.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const n=new se(new Ve([])),r=new at(n,e),s=new at(n,e+1);let i=we();return this.$r.forEachInRange([r,s],(o=>{i=i.add(o.key)})),i}containsKey(e){const n=new at(e,0),r=this.qr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class at{constructor(e,n){this.key=e,this.Hr=n}static Qr(e,n){return se.comparator(e.key,n.key)||_e(e.Hr,n.Hr)}static Ur(e,n){return _e(e.Hr,n.Hr)||se.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EC{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.er=1,this.Yr=new st(at.Qr)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new MS(i,n,r,s);this.mutationQueue.push(o);for(const c of s)this.Yr=this.Yr.add(new at(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return F.resolve(o)}lookupMutationBatch(e,n){return F.resolve(this.Zr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Xr(r),i=s<0?0:s;return F.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?hh:this.er-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new at(n,0),s=new at(n,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(o=>{const c=this.Zr(o.Hr);i.push(c)})),F.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(_e);return n.forEach((s=>{const i=new at(s,0),o=new at(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,o],(c=>{r=r.add(c.Hr)}))})),F.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;se.isDocumentKey(i)||(i=i.child(""));const o=new at(new se(i),0);let c=new st(_e);return this.Yr.forEachWhile((l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(c=c.add(l.Hr)),!0)}),o),F.resolve(this.ei(c))}ei(e){const n=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&n.push(s)})),n}removeMutationBatch(e,n){be(this.ti(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return F.forEach(n.mutations,(s=>{const i=new at(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,n){const r=new at(n,0),s=this.Yr.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}ti(e,n){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const n=this.Xr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.ni=e,this.docs=(function(){return new We(se.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.ni(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=nr();return n.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():lt.newInvalidDocument(s))})),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=nr();const o=n.path,c=new se(o.child("__id-9223372036854775808__")),l=this.docs.getIteratorFrom(c);for(;l.hasNext();){const{key:u,value:{document:f}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||ZR(XR(f),r)<=0||(s.has(f.key)||Oc(n,f))&&(i=i.insert(f.key,f.mutableCopy()))}return F.resolve(i)}getAllFromCollectionGroup(e,n,r,s){ie(9500)}ri(e,n){return F.forEach(this.docs,(r=>n(r)))}newChangeBuffer(e){return new wC(this)}getSize(e){return F.resolve(this.size)}}class wC extends pC{constructor(e){super(),this.Or=e}applyChanges(e){const n=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?n.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),F.waitFor(n)}getFromCache(e,n){return this.Or.getEntry(e,n)}getAllFromCache(e,n){return this.Or.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IC{constructor(e){this.persistence=e,this.ii=new ws((n=>ph(n)),gh),this.lastRemoteSnapshotVersion=ue.min(),this.highestTargetId=0,this.si=0,this.oi=new Eh,this.targetCount=0,this._i=ei.ar()}forEachTarget(e,n){return this.ii.forEach(((r,s)=>n(s))),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.si&&(this.si=n),F.resolve()}hr(e){this.ii.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this._i=new ei(n),this.highestTargetId=n),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,n){return this.hr(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.hr(n),F.resolve()}removeTargetData(e,n){return this.ii.delete(n.target),this.oi.zr(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.ii.forEach(((o,c)=>{c.sequenceNumber<=n&&r.get(c.targetId)===null&&(this.ii.delete(o),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)})),F.waitFor(i).next((()=>s))}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.ii.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.oi.Kr(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.oi.Gr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach((o=>{i.push(s.markPotentiallyOrphaned(e,o))})),F.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.oi.zr(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.oi.Jr(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.oi.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xy{constructor(e,n){this.ai={},this.overlays={},this.ui=new Nc(0),this.ci=!1,this.ci=!0,this.li=new vC,this.referenceDelegate=e(this),this.hi=new IC(this),this.indexManager=new aC,this.remoteDocumentCache=(function(s){return new TC(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new iC(n),this.Ti=new _C(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new yC,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ai[e.toKey()];return r||(r=new EC(n,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,n,r){X("MemoryPersistence","Starting transaction:",e);const s=new AC(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,n){return F.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,n))))}}class AC extends tS{constructor(e){super(),this.currentSequenceNumber=e}}class Th{constructor(e){this.persistence=e,this.Ai=new Eh,this.Ri=null}static Vi(e){return new Th(e)}get mi(){if(this.Ri)return this.Ri;throw ie(60996)}addReference(e,n,r){return this.Ai.addReference(r,n),this.mi.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Ai.removeReference(r,n),this.mi.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.mi.add(n.toString()),F.resolve()}removeTarget(e,n){this.Ai.zr(n.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,n)))}Ii(){this.Ri=new Set}di(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.mi,(r=>{const s=se.fromPath(r);return this.fi(e,s).next((i=>{i||n.removeEntry(s,ue.min())}))})).next((()=>(this.Ri=null,n.apply(e))))}updateLimboDocument(e,n){return this.fi(e,n).next((r=>{r?this.mi.delete(n.toString()):this.mi.add(n.toString())}))}Pi(e){return 0}fi(e,n){return F.or([()=>F.resolve(this.Ai.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ei(e,n)])}}class Za{constructor(e,n){this.persistence=e,this.gi=new ws((r=>sS(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=dC(this,n)}static Vi(e,n){return new Za(e,n)}Ii(){}di(e){return F.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}mr(e){const n=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>n.next((s=>r+s))))}yr(e){let n=0;return this.gr(e,(r=>{n++})).next((()=>n))}gr(e,n){return F.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?F.resolve():n(s)))))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(o=>this.Sr(e,o,n).next((c=>{c||(r++,i.removeEntry(o,ue.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,n){return this.gi.set(n,e.currentSequenceNumber),F.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),F.resolve()}removeReference(e,n,r){return this.gi.set(r,e.currentSequenceNumber),F.resolve()}updateLimboDocument(e,n){return this.gi.set(n,e.currentSequenceNumber),F.resolve()}Pi(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=wa(e.data.value)),n}Sr(e,n,r){return F.or([()=>this.persistence.Ei(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const s=this.gi.get(n);return F.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.Is=r,this.ds=s}static Es(e,n){let r=we(),s=we();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new wh(e,n.fromCache,r,s)}}/**
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
 */class bC{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class RC{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return sA()?8:nS(Ct())>0?6:4})()}initialize(e,n){this.gs=e,this.indexManager=n,this.As=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ps(e,n).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.ys(e,n,s,r).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new bC;return this.ws(e,n,o).next((c=>{if(i.result=c,this.Rs)return this.Ss(e,n,o,c.size)}))})).next((()=>i.result))}Ss(e,n,r,s){return r.documentReadCount<this.Vs?(Ds()<=Te.DEBUG&&X("QueryEngine","SDK will not create cache indexes for query:",Vs(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),F.resolve()):(Ds()<=Te.DEBUG&&X("QueryEngine","Query:",Vs(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Ds()<=Te.DEBUG&&X("QueryEngine","The SDK decides to create cache indexes for query:",Vs(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,kn(n))):F.resolve())}ps(e,n){if(Kp(n))return F.resolve(null);let r=kn(n);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(n.limit!==null&&s===1&&(n=Qa(n,null,"F"),r=kn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const o=we(...i);return this.gs.getDocuments(e,o).next((c=>this.indexManager.getMinOffset(e,r).next((l=>{const u=this.bs(n,c);return this.Ds(n,u,o,l.readTime)?this.ps(e,Qa(n,null,"F")):this.vs(e,u,n,l)}))))})))))}ys(e,n,r,s){return Kp(n)||s.isEqual(ue.min())?F.resolve(null):this.gs.getDocuments(e,r).next((i=>{const o=this.bs(n,i);return this.Ds(n,o,r,s)?F.resolve(null):(Ds()<=Te.DEBUG&&X("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Vs(n)),this.vs(e,o,n,YR(s,po)).next((c=>c)))}))}bs(e,n){let r=new st(Ry(e));return n.forEach(((s,i)=>{Oc(e,i)&&(r=r.add(i))})),r}Ds(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,n,r){return Ds()<=Te.DEBUG&&X("QueryEngine","Using full collection scan to execute query:",Vs(n)),this.gs.getDocumentsMatchingQuery(e,n,Fr.min(),r)}vs(e,n,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(n.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="LocalStore",SC=3e8;class CC{constructor(e,n,r,s){this.persistence=e,this.Cs=n,this.serializer=s,this.Fs=new We(_e),this.Ms=new ws((i=>ph(i)),gh),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new mC(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(n=>e.collect(n,this.Fs)))}}function PC(t,e,n,r){return new CC(t,e,n,r)}async function Zy(t,e){const n=de(t);return await n.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,n.Ns(e),n.mutationQueue.getAllMutationBatches(r)))).next((i=>{const o=[],c=[];let l=we();for(const u of s){o.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}for(const u of i){c.push(u.batchId);for(const f of u.mutations)l=l.add(f.key)}return n.localDocuments.getDocuments(r,l).next((u=>({Bs:u,removedBatchIds:o,addedBatchIds:c})))}))}))}function kC(t,e){const n=de(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=n.Os.newChangeBuffer({trackRemovals:!0});return(function(c,l,u,f){const d=u.batch,g=d.keys();let _=F.resolve();return g.forEach((S=>{_=_.next((()=>f.getEntry(l,S))).next((P=>{const N=u.docVersions.get(S);be(N!==null,48541),P.version.compareTo(N)<0&&(d.applyToRemoteDocument(P,u),P.isValidDocument()&&(P.setReadTime(u.commitVersion),f.addEntry(P)))}))})),_.next((()=>c.mutationQueue.removeMutationBatch(l,d)))})(n,r,e,i).next((()=>i.apply(r))).next((()=>n.mutationQueue.performConsistencyCheck(r))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(c){let l=we();for(let u=0;u<c.mutationResults.length;++u)c.mutationResults[u].transformResults.length>0&&(l=l.add(c.batch.mutations[u].key));return l})(e)))).next((()=>n.localDocuments.getDocuments(r,s)))}))}function ev(t){const e=de(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(n=>e.hi.getLastRemoteSnapshotVersion(n)))}function NC(t,e){const n=de(t),r=e.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const c=[];e.targetChanges.forEach(((f,d)=>{const g=s.get(d);if(!g)return;c.push(n.hi.removeMatchingKeys(i,f.removedDocuments,d).next((()=>n.hi.addMatchingKeys(i,f.addedDocuments,d))));let _=g.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(d)!==null?_=_.withResumeToken(mt.EMPTY_BYTE_STRING,ue.min()).withLastLimboFreeSnapshotVersion(ue.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,r)),s=s.insert(d,_),(function(P,N,j){return P.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-P.snapshotVersion.toMicroseconds()>=SC?!0:j.addedDocuments.size+j.modifiedDocuments.size+j.removedDocuments.size>0})(g,_,f)&&c.push(n.hi.updateTargetData(i,_))}));let l=nr(),u=we();if(e.documentUpdates.forEach((f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(i,f))})),c.push(DC(i,o,e.documentUpdates).next((f=>{l=f.Ls,u=f.ks}))),!r.isEqual(ue.min())){const f=n.hi.getLastRemoteSnapshotVersion(i).next((d=>n.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));c.push(f)}return F.waitFor(c).next((()=>o.apply(i))).next((()=>n.localDocuments.getLocalViewOfDocuments(i,l,u))).next((()=>l))})).then((i=>(n.Fs=s,i)))}function DC(t,e,n){let r=we(),s=we();return n.forEach((i=>r=r.add(i))),e.getEntries(t,r).next((i=>{let o=nr();return n.forEach(((c,l)=>{const u=i.get(c);l.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(c)),l.isNoDocument()&&l.version.isEqual(ue.min())?(e.removeEntry(c,l.readTime),o=o.insert(c,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(c,l)):X(Ih,"Ignoring outdated watch update for ",c,". Current version:",u.version," Watch version:",l.version)})),{Ls:o,ks:s}}))}function VC(t,e){const n=de(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=hh),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function xC(t,e){const n=de(t);return n.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return n.hi.getTargetData(r,e).next((i=>i?(s=i,F.resolve(s)):n.hi.allocateTargetId(r).next((o=>(s=new Sr(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=n.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(r.targetId,r),n.Ms.set(e,r.targetId)),r}))}async function wu(t,e,n){const r=de(t),s=r.Fs.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,(o=>r.persistence.referenceDelegate.removeTarget(o,s)))}catch(o){if(!li(o))throw o;X(Ih,`Failed to update sequence numbers for target ${e}: ${o}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function ag(t,e,n){const r=de(t);let s=ue.min(),i=we();return r.persistence.runTransaction("Execute query","readwrite",(o=>(function(l,u,f){const d=de(l),g=d.Ms.get(f);return g!==void 0?F.resolve(d.Fs.get(g)):d.hi.getTargetData(u,f)})(r,o,kn(e)).next((c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(o,c.targetId).next((l=>{i=l}))})).next((()=>r.Cs.getDocumentsMatchingQuery(o,e,n?s:ue.min(),n?i:we()))).next((c=>(OC(r,IS(e),c),{documents:c,qs:i})))))}function OC(t,e,n){let r=t.xs.get(e)||ue.min();n.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),t.xs.set(e,r)}class cg{constructor(){this.activeTargetIds=PS()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class LC{constructor(){this.Fo=new cg,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,n,r){this.Mo[e]=n}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new cg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class MC{xo(e){}shutdown(){}}/**
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
 */const lg="ConnectivityMonitor";class ug{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){X(lg,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){X(lg,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let fa=null;function Iu(){return fa===null?fa=(function(){return 268435456+Math.round(2147483648*Math.random())})():fa++,"0x"+fa.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ol="RestConnection",FC={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class UC{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=n+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===Wa?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,n,r,s,i){const o=Iu(),c=this.Go(e,n.toUriEncodedString());X(Ol,`Sending RPC '${e}' ${o}:`,c,r);const l={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(l,s,i);const{host:u}=new URL(c),f=Es(u);return this.jo(e,c,l,r,f).then((d=>(X(Ol,`Received RPC '${e}' ${o}: `,d),d)),(d=>{throw Mr(Ol,`RPC '${e}' ${o} failed with error: `,d,"url: ",c,"request:",r),d}))}Jo(e,n,r,s,i,o){return this.Wo(e,n,r,s,i)}zo(e,n,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ai})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,n){const r=FC[e];return`${this.$o}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jC{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="WebChannelConnection";class BC extends UC{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,n,r,s,i){const o=Iu();return new Promise(((c,l)=>{const u=new X_;u.setWithCredentials(!0),u.listenOnce(Z_.COMPLETE,(()=>{try{switch(u.getLastErrorCode()){case Ta.NO_ERROR:const d=u.getResponseJson();X(Et,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(d)),c(d);break;case Ta.TIMEOUT:X(Et,`RPC '${e}' ${o} timed out`),l(new z(x.DEADLINE_EXCEEDED,"Request time out"));break;case Ta.HTTP_ERROR:const g=u.getStatus();if(X(Et,`RPC '${e}' ${o} failed with status:`,g,"response text:",u.getResponseText()),g>0){let _=u.getResponseJson();Array.isArray(_)&&(_=_[0]);const S=_==null?void 0:_.error;if(S&&S.status&&S.message){const P=(function(j){const V=j.toLowerCase().replace(/_/g,"-");return Object.values(x).indexOf(V)>=0?V:x.UNKNOWN})(S.status);l(new z(P,S.message))}else l(new z(x.UNKNOWN,"Server responded with status "+u.getStatus()))}else l(new z(x.UNAVAILABLE,"Connection failed."));break;default:ie(9055,{c_:e,streamId:o,l_:u.getLastErrorCode(),h_:u.getLastError()})}}finally{X(Et,`RPC '${e}' ${o} completed.`)}}));const f=JSON.stringify(s);X(Et,`RPC '${e}' ${o} sending request:`,s),u.send(n,"POST",f,r,15)}))}P_(e,n,r){const s=Iu(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=ny(),c=ty(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.useFetchStreams=!0),this.zo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const f=i.join("");X(Et,`Creating RPC '${e}' stream ${s}: ${f}`,l);const d=o.createWebChannel(f,l);this.T_(d);let g=!1,_=!1;const S=new jC({Ho:N=>{_?X(Et,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(g||(X(Et,`Opening RPC '${e}' stream ${s} transport.`),d.open(),g=!0),X(Et,`RPC '${e}' stream ${s} sending:`,N),d.send(N))},Yo:()=>d.close()}),P=(N,j,V)=>{N.listen(j,($=>{try{V($)}catch(q){setTimeout((()=>{throw q}),0)}}))};return P(d,Fi.EventType.OPEN,(()=>{_||(X(Et,`RPC '${e}' stream ${s} transport opened.`),S.s_())})),P(d,Fi.EventType.CLOSE,(()=>{_||(_=!0,X(Et,`RPC '${e}' stream ${s} transport closed`),S.__(),this.I_(d))})),P(d,Fi.EventType.ERROR,(N=>{_||(_=!0,Mr(Et,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),S.__(new z(x.UNAVAILABLE,"The operation could not be completed")))})),P(d,Fi.EventType.MESSAGE,(N=>{var j;if(!_){const V=N.data[0];be(!!V,16349);const $=V,q=($==null?void 0:$.error)||((j=$[0])===null||j===void 0?void 0:j.error);if(q){X(Et,`RPC '${e}' stream ${s} received error:`,q);const Y=q.status;let Z=(function(v){const A=Ze[v];if(A!==void 0)return jy(A)})(Y),E=q.message;Z===void 0&&(Z=x.INTERNAL,E="Unknown error status: "+Y+" with message "+q.message),_=!0,S.__(new z(Z,E)),d.close()}else X(Et,`RPC '${e}' stream ${s} received:`,V),S.a_(V)}})),P(c,ey.STAT_EVENT,(N=>{N.stat===fu.PROXY?X(Et,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===fu.NOPROXY&&X(Et,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{S.o_()}),0),S}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((n=>n===e))}}function Ll(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(t){return new GS(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e,n,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=n,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const n=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,n-r);s>0&&X("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hg="PersistentStream";class tv{constructor(e,n,r,s,i,o,c,l){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=l,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Ah(e,n)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,n){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():n&&n.code===x.RESOURCE_EXHAUSTED?(tr(n.toString()),tr("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):n&&n.code===x.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(n)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),n=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===n&&this.W_(r,s)}),(r=>{e((()=>{const s=new z(x.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,n){const r=this.K_(this.b_);this.stream=this.z_(e,n),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return X(hg,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return n=>{this.Fi.enqueueAndForget((()=>this.b_===e?n():(X(hg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class $C extends tv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}z_(e,n){return this.connection.P_("Listen",e,n)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const n=QS(this.serializer,e),r=(function(i){if(!("targetChange"in i))return ue.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ue.min():o.readTime?Xt(o.readTime):ue.min()})(e);return this.listener.J_(n,r)}H_(e){const n={};n.database=Tu(this.serializer),n.addTarget=(function(i,o){let c;const l=o.target;if(c=_u(l)?{documents:YS(i,l)}:{query:XS(i,l).Vt},c.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){c.resumeToken=qy(i,o.resumeToken);const u=vu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}else if(o.snapshotVersion.compareTo(ue.min())>0){c.readTime=Ya(i,o.snapshotVersion.toTimestamp());const u=vu(i,o.expectedCount);u!==null&&(c.expectedCount=u)}return c})(this.serializer,e);const r=eC(this.serializer,e);r&&(n.labels=r),this.k_(n)}Y_(e){const n={};n.database=Tu(this.serializer),n.removeTarget=e,this.k_(n)}}class qC extends tv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,n){return this.connection.P_("Write",e,n)}j_(e){return be(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,be(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){be(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const n=JS(e.writeResults,e.commitTime),r=Xt(e.commitTime);return this.listener.ta(r,n)}na(){const e={};e.database=Tu(this.serializer),this.k_(e)}X_(e){const n={streamToken:this.lastStreamToken,writes:e.map((r=>zy(this.serializer,r)))};this.k_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HC{}class GC extends HC{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new z(x.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.Wo(e,Eu(n,r),s,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new z(x.UNKNOWN,i.toString())}))}Jo(e,n,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,c])=>this.connection.Jo(e,Eu(n,r),s,o,c,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===x.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new z(x.UNKNOWN,o.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class WC{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(tr(n),this._a=!1):X("OnlineStateTracker",n)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ys="RemoteStore";class zC{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((o=>{r.enqueueAndForget((async()=>{Is(this)&&(X(ys,"Restarting streams for network reachability change."),await(async function(l){const u=de(l);u.Ia.add(4),await Mo(u),u.Aa.set("Unknown"),u.Ia.delete(4),await jc(u)})(this))}))})),this.Aa=new WC(r,s)}}async function jc(t){if(Is(t))for(const e of t.da)await e(!0)}async function Mo(t){for(const e of t.da)await e(!1)}function nv(t,e){const n=de(t);n.Ta.has(e.targetId)||(n.Ta.set(e.targetId,e),Ch(n)?Sh(n):hi(n).x_()&&Rh(n,e))}function bh(t,e){const n=de(t),r=hi(n);n.Ta.delete(e),r.x_()&&rv(n,e),n.Ta.size===0&&(r.x_()?r.B_():Is(n)&&n.Aa.set("Unknown"))}function Rh(t,e){if(t.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ue.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}hi(t).H_(e)}function rv(t,e){t.Ra.$e(e),hi(t).Y_(e)}function Sh(t){t.Ra=new BS({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Ta.get(e)||null,lt:()=>t.datastore.serializer.databaseId}),hi(t).start(),t.Aa.aa()}function Ch(t){return Is(t)&&!hi(t).M_()&&t.Ta.size>0}function Is(t){return de(t).Ia.size===0}function sv(t){t.Ra=void 0}async function KC(t){t.Aa.set("Online")}async function QC(t){t.Ta.forEach(((e,n)=>{Rh(t,e)}))}async function JC(t,e){sv(t),Ch(t)?(t.Aa.la(e),Sh(t)):t.Aa.set("Unknown")}async function YC(t,e,n){if(t.Aa.set("Online"),e instanceof $y&&e.state===2&&e.cause)try{await(async function(s,i){const o=i.cause;for(const c of i.targetIds)s.Ta.has(c)&&(await s.remoteSyncer.rejectListen(c,o),s.Ta.delete(c),s.Ra.removeTarget(c))})(t,e)}catch(r){X(ys,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ec(t,r)}else if(e instanceof ba?t.Ra.Ye(e):e instanceof By?t.Ra.it(e):t.Ra.et(e),!n.isEqual(ue.min()))try{const r=await ev(t.localStore);n.compareTo(r)>=0&&await(function(i,o){const c=i.Ra.Pt(o);return c.targetChanges.forEach(((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const f=i.Ta.get(u);f&&i.Ta.set(u,f.withResumeToken(l.resumeToken,o))}})),c.targetMismatches.forEach(((l,u)=>{const f=i.Ta.get(l);if(!f)return;i.Ta.set(l,f.withResumeToken(mt.EMPTY_BYTE_STRING,f.snapshotVersion)),rv(i,l);const d=new Sr(f.target,l,u,f.sequenceNumber);Rh(i,d)})),i.remoteSyncer.applyRemoteEvent(c)})(t,n)}catch(r){X(ys,"Failed to raise snapshot:",r),await ec(t,r)}}async function ec(t,e,n){if(!li(e))throw e;t.Ia.add(1),await Mo(t),t.Aa.set("Offline"),n||(n=()=>ev(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{X(ys,"Retrying IndexedDB access"),await n(),t.Ia.delete(1),await jc(t)}))}function iv(t,e){return e().catch((n=>ec(t,n,e)))}async function Bc(t){const e=de(t),n=$r(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:hh;for(;XC(e);)try{const s=await VC(e.localStore,r);if(s===null){e.Pa.length===0&&n.B_();break}r=s.batchId,ZC(e,s)}catch(s){await ec(e,s)}ov(e)&&av(e)}function XC(t){return Is(t)&&t.Pa.length<10}function ZC(t,e){t.Pa.push(e);const n=$r(t);n.x_()&&n.Z_&&n.X_(e.mutations)}function ov(t){return Is(t)&&!$r(t).M_()&&t.Pa.length>0}function av(t){$r(t).start()}async function eP(t){$r(t).na()}async function tP(t){const e=$r(t);for(const n of t.Pa)e.X_(n.mutations)}async function nP(t,e,n){const r=t.Pa.shift(),s=_h.from(r,e,n);await iv(t,(()=>t.remoteSyncer.applySuccessfulWrite(s))),await Bc(t)}async function rP(t,e){e&&$r(t).Z_&&await(async function(r,s){if((function(o){return Uy(o)&&o!==x.ABORTED})(s.code)){const i=r.Pa.shift();$r(r).N_(),await iv(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await Bc(r)}})(t,e),ov(t)&&av(t)}async function fg(t,e){const n=de(t);n.asyncQueue.verifyOperationInProgress(),X(ys,"RemoteStore received new credentials");const r=Is(n);n.Ia.add(3),await Mo(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Ia.delete(3),await jc(n)}async function sP(t,e){const n=de(t);e?(n.Ia.delete(2),await jc(n)):e||(n.Ia.add(2),await Mo(n),n.Aa.set("Unknown"))}function hi(t){return t.Va||(t.Va=(function(n,r,s){const i=de(n);return i.ia(),new $C(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:KC.bind(null,t),e_:QC.bind(null,t),n_:JC.bind(null,t),J_:YC.bind(null,t)}),t.da.push((async e=>{e?(t.Va.N_(),Ch(t)?Sh(t):t.Aa.set("Unknown")):(await t.Va.stop(),sv(t))}))),t.Va}function $r(t){return t.ma||(t.ma=(function(n,r,s){const i=de(n);return i.ia(),new qC(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(t.datastore,t.asyncQueue,{Zo:()=>Promise.resolve(),e_:eP.bind(null,t),n_:rP.bind(null,t),ea:tP.bind(null,t),ta:nP.bind(null,t)}),t.da.push((async e=>{e?(t.ma.N_(),await Bc(t)):(await t.ma.stop(),t.Pa.length>0&&(X(ys,`Stopping write stream with ${t.Pa.length} pending writes`),t.Pa=[]))}))),t.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Pn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,c=new Ph(e,n,o,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(x.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function kh(t,e){if(tr("AsyncQueue",`${e}: ${t}`),li(t))return new z(x.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{static emptySet(e){return new Gs(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||se.comparator(n.key,r.key):(n,r)=>se.comparator(n.key,r.key),this.keyedMap=Ui(),this.sortedSet=new We(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((n,r)=>(e(n),!1)))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Gs)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((n=>{e.push(n.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Gs;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dg{constructor(){this.fa=new We(se.comparator)}track(e){const n=e.doc.key,r=this.fa.get(n);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(n,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(n):e.type===1&&r.type===2?this.fa=this.fa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(n,{type:2,doc:e.doc}):ie(63341,{At:e,ga:r}):this.fa=this.fa.insert(n,e)}pa(){const e=[];return this.fa.inorderTraversal(((n,r)=>{e.push(r)})),e}}class ti{constructor(e,n,r,s,i,o,c,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach((c=>{o.push({type:0,doc:c})})),new ti(e,n,Gs.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iP{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class oP{constructor(){this.queries=pg(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(n,r){const s=de(n),i=s.queries;s.queries=pg(),i.forEach(((o,c)=>{for(const l of c.wa)l.onError(r)}))})(this,new z(x.ABORTED,"Firestore shutting down"))}}function pg(){return new ws((t=>by(t)),xc)}async function Nh(t,e){const n=de(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new iP,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const c=kh(o,`Initialization of query '${Vs(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,i),i.wa.push(e),e.va(n.onlineState),i.ya&&e.Ca(i.ya)&&Vh(n)}async function Dh(t,e){const n=de(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.wa.indexOf(e);o>=0&&(i.wa.splice(o,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function aP(t,e){const n=de(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const c of o.wa)c.Ca(s)&&(r=!0);o.ya=s}}r&&Vh(n)}function cP(t,e,n){const r=de(t),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(e)}function Vh(t){t.Da.forEach((e=>{e.next()}))}var Au,gg;(gg=Au||(Au={})).Fa="default",gg.Cache="cache";class xh{constructor(e,n,r){this.query=e,this.Ma=n,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ti(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),n=!0):this.Ba(e,this.onlineState)&&(this.La(e),n=!0),this.Oa=e,n}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let n=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),n=!0),n}Ba(e,n){if(!e.fromCache||!this.ba())return!0;const r=n!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const n=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}La(e){e=ti.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Au.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){this.key=e}}class lv{constructor(e){this.key=e}}class lP{constructor(e,n){this.query=e,this.Ha=n,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=we(),this.mutatedKeys=we(),this.Xa=Ry(e),this.eu=new Gs(this.Xa)}get tu(){return this.Ha}nu(e,n){const r=n?n.ru:new dg,s=n?n.eu:this.eu;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,c=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((f,d)=>{const g=s.get(f),_=Oc(this.query,d)?d:null,S=!!g&&this.mutatedKeys.has(g.key),P=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let N=!1;g&&_?g.data.isEqual(_.data)?S!==P&&(r.track({type:3,doc:_}),N=!0):this.iu(g,_)||(r.track({type:2,doc:_}),N=!0,(l&&this.Xa(_,l)>0||u&&this.Xa(_,u)<0)&&(c=!0)):!g&&_?(r.track({type:0,doc:_}),N=!0):g&&!_&&(r.track({type:1,doc:g}),N=!0,(l||u)&&(c=!0)),N&&(_?(o=o.add(_),i=P?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))})),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),i=i.delete(f.key),r.track({type:1,doc:f})}return{eu:o,ru:r,Ds:c,mutatedKeys:i}}iu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const o=e.ru.pa();o.sort(((f,d)=>(function(_,S){const P=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ie(20277,{At:N})}};return P(_)-P(S)})(f.type,d.type)||this.Xa(f.doc,d.doc))),this.su(r),s=s!=null&&s;const c=n&&!s?this.ou():[],l=this.Za.size===0&&this.current&&!s?1:0,u=l!==this.Ya;return this.Ya=l,o.length!==0||u?{snapshot:new ti(this.query,e.eu,i,o,e.mutatedKeys,l===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new dg,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((n=>this.Ha=this.Ha.add(n))),e.modifiedDocuments.forEach((n=>{})),e.removedDocuments.forEach((n=>this.Ha=this.Ha.delete(n))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=we(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const n=[];return e.forEach((r=>{this.Za.has(r)||n.push(new lv(r))})),this.Za.forEach((r=>{e.has(r)||n.push(new cv(r))})),n}uu(e){this.Ha=e.qs,this.Za=we();const n=this.nu(e.documents);return this.applyChanges(n,!0)}cu(){return ti.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Oh="SyncEngine";class uP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class hP{constructor(e){this.key=e,this.lu=!1}}class fP{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.hu={},this.Pu=new ws((c=>by(c)),xc),this.Tu=new Map,this.Iu=new Set,this.du=new We(se.comparator),this.Eu=new Map,this.Au=new Eh,this.Ru={},this.Vu=new Map,this.mu=ei.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function dP(t,e,n=!0){const r=gv(t);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await uv(r,e,n,!0),s}async function pP(t,e){const n=gv(t);await uv(n,e,!0,!1)}async function uv(t,e,n,r){const s=await xC(t.localStore,kn(e)),i=s.targetId,o=t.sharedClientState.addLocalQueryTarget(i,n);let c;return r&&(c=await gP(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&nv(t.remoteStore,s),c}async function gP(t,e,n,r,s){t.gu=(d,g,_)=>(async function(P,N,j,V){let $=N.view.nu(j);$.Ds&&($=await ag(P.localStore,N.query,!1).then((({documents:E})=>N.view.nu(E,$))));const q=V&&V.targetChanges.get(N.targetId),Y=V&&V.targetMismatches.get(N.targetId)!=null,Z=N.view.applyChanges($,P.isPrimaryClient,q,Y);return _g(P,N.targetId,Z._u),Z.snapshot})(t,d,g,_);const i=await ag(t.localStore,e,!0),o=new lP(e,i.qs),c=o.nu(i.documents),l=Lo.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),u=o.applyChanges(c,t.isPrimaryClient,l);_g(t,n,u._u);const f=new uP(e,n,o);return t.Pu.set(e,f),t.Tu.has(n)?t.Tu.get(n).push(e):t.Tu.set(n,[e]),u.snapshot}async function mP(t,e,n){const r=de(t),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((o=>!xc(o,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await wu(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),n&&bh(r.remoteStore,s.targetId),bu(r,s.targetId)})).catch(ci)):(bu(r,s.targetId),await wu(r.localStore,s.targetId,!0))}async function _P(t,e){const n=de(t),r=n.Pu.get(e),s=n.Tu.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),bh(n.remoteStore,r.targetId))}async function yP(t,e,n){const r=bP(t);try{const s=await(function(o,c){const l=de(o),u=ye.now(),f=c.reduce(((_,S)=>_.add(S.key)),we());let d,g;return l.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let S=nr(),P=we();return l.Os.getEntries(_,f).next((N=>{S=N,S.forEach(((j,V)=>{V.isValidDocument()||(P=P.add(j))}))})).next((()=>l.localDocuments.getOverlayedDocuments(_,S))).next((N=>{d=N;const j=[];for(const V of c){const $=LS(V,d.get(V.key).overlayedDocument);$!=null&&j.push(new zr(V.key,$,_y($.value.mapValue),tt.exists(!0)))}return l.mutationQueue.addMutationBatch(_,u,j,c)})).next((N=>{g=N;const j=N.applyToLocalDocumentSet(d,P);return l.documentOverlayCache.saveOverlays(_,N.batchId,j)}))})).then((()=>({batchId:g.batchId,changes:Cy(d)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(o,c,l){let u=o.Ru[o.currentUser.toKey()];u||(u=new We(_e)),u=u.insert(c,l),o.Ru[o.currentUser.toKey()]=u})(r,s.batchId,n),await Fo(r,s.changes),await Bc(r.remoteStore)}catch(s){const i=kh(s,"Failed to persist write");n.reject(i)}}async function hv(t,e){const n=de(t);try{const r=await NC(n.localStore,e);e.targetChanges.forEach(((s,i)=>{const o=n.Eu.get(i);o&&(be(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?o.lu=!0:s.modifiedDocuments.size>0?be(o.lu,14607):s.removedDocuments.size>0&&(be(o.lu,42227),o.lu=!1))})),await Fo(n,r,e)}catch(r){await ci(r)}}function mg(t,e,n){const r=de(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.Pu.forEach(((i,o)=>{const c=o.view.va(e);c.snapshot&&s.push(c.snapshot)})),(function(o,c){const l=de(o);l.onlineState=c;let u=!1;l.queries.forEach(((f,d)=>{for(const g of d.wa)g.va(c)&&(u=!0)})),u&&Vh(l)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vP(t,e,n){const r=de(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Eu.get(e),i=s&&s.key;if(i){let o=new We(se.comparator);o=o.insert(i,lt.newNoDocument(i,ue.min()));const c=we().add(i),l=new Fc(ue.min(),new Map,new We(_e),o,c);await hv(r,l),r.du=r.du.remove(i),r.Eu.delete(e),Lh(r)}else await wu(r.localStore,e,!1).then((()=>bu(r,e,n))).catch(ci)}async function EP(t,e){const n=de(t),r=e.batch.batchId;try{const s=await kC(n.localStore,e);dv(n,r,null),fv(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Fo(n,s)}catch(s){await ci(s)}}async function TP(t,e,n){const r=de(t);try{const s=await(function(o,c){const l=de(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",(u=>{let f;return l.mutationQueue.lookupMutationBatch(u,c).next((d=>(be(d!==null,37113),f=d.keys(),l.mutationQueue.removeMutationBatch(u,d)))).next((()=>l.mutationQueue.performConsistencyCheck(u))).next((()=>l.documentOverlayCache.removeOverlaysForBatchId(u,f,c))).next((()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,f))).next((()=>l.localDocuments.getDocuments(u,f)))}))})(r.localStore,e);dv(r,e,n),fv(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Fo(r,s)}catch(s){await ci(s)}}function fv(t,e){(t.Vu.get(e)||[]).forEach((n=>{n.resolve()})),t.Vu.delete(e)}function dv(t,e,n){const r=de(t);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function bu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Tu.get(e))t.Pu.delete(r),n&&t.hu.pu(r,n);t.Tu.delete(e),t.isPrimaryClient&&t.Au.zr(e).forEach((r=>{t.Au.containsKey(r)||pv(t,r)}))}function pv(t,e){t.Iu.delete(e.path.canonicalString());const n=t.du.get(e);n!==null&&(bh(t.remoteStore,n),t.du=t.du.remove(e),t.Eu.delete(n),Lh(t))}function _g(t,e,n){for(const r of n)r instanceof cv?(t.Au.addReference(r.key,e),wP(t,r)):r instanceof lv?(X(Oh,"Document no longer in limbo: "+r.key),t.Au.removeReference(r.key,e),t.Au.containsKey(r.key)||pv(t,r.key)):ie(19791,{yu:r})}function wP(t,e){const n=e.key,r=n.path.canonicalString();t.du.get(n)||t.Iu.has(r)||(X(Oh,"New document in limbo: "+n),t.Iu.add(r),Lh(t))}function Lh(t){for(;t.Iu.size>0&&t.du.size<t.maxConcurrentLimboResolutions;){const e=t.Iu.values().next().value;t.Iu.delete(e);const n=new se(Ve.fromString(e)),r=t.mu.next();t.Eu.set(r,new hP(n)),t.du=t.du.insert(n,r),nv(t.remoteStore,new Sr(kn(Vc(n.path)),r,"TargetPurposeLimboResolution",Nc.ue))}}async function Fo(t,e,n){const r=de(t),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach(((c,l)=>{o.push(r.gu(l,e,n).then((u=>{var f;if((u||n)&&r.isPrimaryClient){const d=u?!u.fromCache:(f=n==null?void 0:n.targetChanges.get(l.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(l.targetId,d?"current":"not-current")}if(u){s.push(u);const d=wh.Es(l.targetId,u);i.push(d)}})))})),await Promise.all(o),r.hu.J_(s),await(async function(l,u){const f=de(l);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",(d=>F.forEach(u,(g=>F.forEach(g.Is,(_=>f.persistence.referenceDelegate.addReference(d,g.targetId,_))).next((()=>F.forEach(g.ds,(_=>f.persistence.referenceDelegate.removeReference(d,g.targetId,_)))))))))}catch(d){if(!li(d))throw d;X(Ih,"Failed to update sequence numbers: "+d)}for(const d of u){const g=d.targetId;if(!d.fromCache){const _=f.Fs.get(g),S=_.snapshotVersion,P=_.withLastLimboFreeSnapshotVersion(S);f.Fs=f.Fs.insert(g,P)}}})(r.localStore,i))}async function IP(t,e){const n=de(t);if(!n.currentUser.isEqual(e)){X(Oh,"User change. New user:",e.toKey());const r=await Zy(n.localStore,e);n.currentUser=e,(function(i,o){i.Vu.forEach((c=>{c.forEach((l=>{l.reject(new z(x.CANCELLED,o))}))})),i.Vu.clear()})(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Fo(n,r.Bs)}}function AP(t,e){const n=de(t),r=n.Eu.get(e);if(r&&r.lu)return we().add(r.key);{let s=we();const i=n.Tu.get(e);if(!i)return s;for(const o of i){const c=n.Pu.get(o);s=s.unionWith(c.view.tu)}return s}}function gv(t){const e=de(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=hv.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=AP.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vP.bind(null,e),e.hu.J_=aP.bind(null,e.eventManager),e.hu.pu=cP.bind(null,e.eventManager),e}function bP(t){const e=de(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=EP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=TP.bind(null,e),e}class tc{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Uc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,n){return null}Fu(e,n){return null}vu(e){return PC(this.persistence,new RC,e.initialUser,this.serializer)}Du(e){return new Xy(Th.Vi,this.serializer)}bu(e){return new LC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}tc.provider={build:()=>new tc};class RP extends tc{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,n){be(this.persistence.referenceDelegate instanceof Za,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new hC(r,e.asyncQueue,n)}Du(e){const n=this.cacheSizeBytes!==void 0?jt.withCacheSize(this.cacheSizeBytes):jt.DEFAULT;return new Xy((r=>Za.Vi(r,n)),this.serializer)}}class Ru{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>mg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=IP.bind(null,this.syncEngine),await sP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new oP})()}createDatastore(e){const n=Uc(e.databaseInfo.databaseId),r=(function(i){return new BC(i)})(e.databaseInfo);return(function(i,o,c,l){return new GC(i,o,c,l)})(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return(function(r,s,i,o,c){return new zC(r,s,i,o,c)})(this.localStore,this.datastore,e.asyncQueue,(n=>mg(this.syncEngine,n,0)),(function(){return ug.C()?new ug:new MC})())}createSyncEngine(e,n){return(function(s,i,o,c,l,u,f){const d=new fP(s,i,o,c,l,u);return f&&(d.fu=!0),d})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await(async function(s){const i=de(s);X(ys,"RemoteStore shutting down."),i.Ia.add(5),await Mo(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}Ru.provider={build:()=>new Ru};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Mh{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):tr("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,n){setTimeout((()=>{this.muted||e(n)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SP{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new z(x.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await(async function(s,i){const o=de(s),c={documents:i.map((d=>Xa(o.serializer,d)))},l=await o.Jo("BatchGetDocuments",o.serializer.databaseId,Ve.emptyPath(),c,i.length),u=new Map;l.forEach((d=>{const g=KS(o.serializer,d);u.set(g.key.toString(),g)}));const f=[];return i.forEach((d=>{const g=u.get(d.toString());be(!!g,55234,{key:d}),f.push(g)})),f})(this.datastore,e);return n.forEach((r=>this.recordVersion(r))),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastTransactionError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Oo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((n=>{e.delete(n.key.toString())})),e.forEach(((n,r)=>{const s=se.fromPath(r);this.mutations.push(new Fy(s,this.precondition(s)))})),await(async function(r,s){const i=de(r),o={writes:s.map((c=>zy(i.serializer,c)))};await i.Wo("Commit",i.serializer.databaseId,Ve.emptyPath(),o)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw ie(50498,{Wu:e.constructor.name});n=ue.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new z(x.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(ue.min())?tt.exists(!1):tt.updateTime(n):tt.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(ue.min()))throw new z(x.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return tt.updateTime(n)}return tt.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class CP{constructor(e,n,r,s,i){this.asyncQueue=e,this.datastore=n,this.options=r,this.updateFunction=s,this.deferred=i,this.Gu=r.maxAttempts,this.F_=new Ah(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_((async()=>{const e=new SP(this.datastore),n=this.Ju(e);n&&n.then((r=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(r)})).catch((s=>{this.Hu(s)}))))})).catch((r=>{this.Hu(r)}))}))}Ju(e){try{const n=this.updateFunction(e);return!Vo(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}Hu(e){this.Gu>0&&this.Yu(e)?(this.Gu-=1,this.asyncQueue.enqueueAndForget((()=>(this.ju(),Promise.resolve())))):this.deferred.reject(e)}Yu(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!Uy(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="FirestoreClient";class PP{constructor(e,n,r,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=wt.UNAUTHENTICATED,this.clientId=uh.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async o=>{X(qr,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(r,(o=>(X(qr,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Pn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=kh(n,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Ml(t,e){t.asyncQueue.verifyOperationInProgress(),X(qr,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Zy(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Mr("Terminating Firestore due to IndexedDb database deletion"),t.terminate().then((()=>{X("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Mr("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),t._offlineComponents=e}async function yg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kP(t);X(qr,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener((r=>fg(e.remoteStore,r))),t.setAppCheckTokenChangeListener(((r,s)=>fg(e.remoteStore,s))),t._onlineComponents=e}async function kP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){X(qr,"Using user provided OfflineComponentProvider");try{await Ml(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!(function(s){return s.name==="FirebaseError"?s.code===x.FAILED_PRECONDITION||s.code===x.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(n))throw n;Mr("Error using user provided cache. Falling back to memory cache: "+n),await Ml(t,new tc)}}else X(qr,"Using default OfflineComponentProvider"),await Ml(t,new RP(void 0));return t._offlineComponents}async function Fh(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(X(qr,"Using user provided OnlineComponentProvider"),await yg(t,t._uninitializedComponentsProvider._online)):(X(qr,"Using default OnlineComponentProvider"),await yg(t,new Ru))),t._onlineComponents}function NP(t){return Fh(t).then((e=>e.syncEngine))}function DP(t){return Fh(t).then((e=>e.datastore))}async function nc(t){const e=await Fh(t),n=e.eventManager;return n.onListen=dP.bind(null,e.syncEngine),n.onUnlisten=mP.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=pP.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_P.bind(null,e.syncEngine),n}function VP(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new Mh({next:g=>{f.Ou(),o.enqueueAndForget((()=>Dh(i,d)));const _=g.docs.has(c);!_&&g.fromCache?u.reject(new z(x.UNAVAILABLE,"Failed to get document because the client is offline.")):_&&g.fromCache&&l&&l.source==="server"?u.reject(new z(x.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(g)},error:g=>u.reject(g)}),d=new xh(Vc(c.path),f,{includeMetadataChanges:!0,ka:!0});return Nh(i,d)})(await nc(t),t.asyncQueue,e,n,r))),r.promise}function xP(t,e,n={}){const r=new Pn;return t.asyncQueue.enqueueAndForget((async()=>(function(i,o,c,l,u){const f=new Mh({next:g=>{f.Ou(),o.enqueueAndForget((()=>Dh(i,d))),g.fromCache&&l.source==="server"?u.reject(new z(x.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(g)},error:g=>u.reject(g)}),d=new xh(c,f,{includeMetadataChanges:!0,ka:!0});return Nh(i,d)})(await nc(t),t.asyncQueue,e,n,r))),r.promise}/**
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
 */function mv(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _v="firestore.googleapis.com",Eg=!0;class Tg{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new z(x.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=_v,this.ssl=Eg}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:Eg;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Yy;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<lC)throw new z(x.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}QR("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=mv((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new z(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new z(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new z(x.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class $c{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Tg({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new z(x.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new z(x.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Tg(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new jR;switch(r.type){case"firstParty":return new HR(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new z(x.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const r=vg.get(n);r&&(X("ComponentProvider","Removing Datastore"),vg.delete(n),r.terminate())})(this),Promise.resolve()}}function OP(t,e,n,r={}){var s;t=St(t,$c);const i=Es(e),o=t._getSettings(),c=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),l=`${e}:${n}`;i&&(Qu(`https://${l}`),Ju("Firestore",!0)),o.host!==_v&&o.host!==l&&Mr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u=Object.assign(Object.assign({},o),{host:l,ssl:i,emulatorOptions:r});if(!ds(u,c)&&(t._setSettings(u),r.mockUserToken)){let f,d;if(typeof r.mockUserToken=="string")f=r.mockUserToken,d=wt.MOCK_USER;else{f=QI(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new z(x.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");d=new wt(g)}t._authCredentials=new BR(new sy(f,d))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ar(this.firestore,e,this._query)}}class Ge{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Vr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ge(this.firestore,e,this._key)}toJSON(){return{type:Ge._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,n,r){if(Do(n,Ge._jsonSchema))return new Ge(e,r||null,new se(Ve.fromString(n.referencePath)))}}Ge._jsonSchemaVersion="firestore/documentReference/1.0",Ge._jsonSchema={type:nt("string",Ge._jsonSchemaVersion),referencePath:nt("string")};class Vr extends ar{constructor(e,n,r){super(e,n,Vc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ge(this.firestore,null,new se(e))}withConverter(e){return new Vr(this.firestore,e,this._path)}}function yv(t,e,...n){if(t=Fe(t),oy("collection","path",e),t instanceof $c){const r=Ve.fromString(e,...n);return xp(r),new Vr(t,null,r)}{if(!(t instanceof Ge||t instanceof Vr))throw new z(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return xp(r),new Vr(t.firestore,null,r)}}function qc(t,e,...n){if(t=Fe(t),arguments.length===1&&(e=uh.newId()),oy("doc","path",e),t instanceof $c){const r=Ve.fromString(e,...n);return Vp(r),new Ge(t,null,new se(r))}{if(!(t instanceof Ge||t instanceof Vr))throw new z(x.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ve.fromString(e,...n));return Vp(r),new Ge(t.firestore,t instanceof Vr?t.converter:null,new se(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg="AsyncQueue";class Ig{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Ah(this,"async_queue_retry"),this.oc=()=>{const r=Ll();r&&X(wg,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const n=Ll();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const n=Ll();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const n=new Pn;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!li(e))throw e;X(wg,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const n=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,tr("INTERNAL UNHANDLED ERROR: ",Ag(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=n,n}enqueueAfterDelay(e,n,r){this.ac(),this.sc.indexOf(e)>-1&&(n=0);const s=Ph.createAndSchedule(this,e,n,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&ie(47125,{hc:Ag(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const n of this.ec)if(n.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((n,r)=>n.targetTimeMs-r.targetTimeMs));for(const n of this.ec)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const n=this.ec.indexOf(e);this.ec.splice(n,1)}}function Ag(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
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
 */function bg(t){return(function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(t,["next","error","complete"])}class mn extends $c{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new Ig,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ig(e),this._firestoreClient=void 0,await e}}}function LP(t,e){const n=typeof t=="object"?t:Zu(),r=typeof t=="string"?t:Wa,s=Rc(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=l_("firestore");i&&OP(s,...i)}return s}function fi(t){if(t._terminated)throw new z(x.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||MP(t),t._firestoreClient}function MP(t){var e,n,r;const s=t._freezeSettings(),i=(function(c,l,u,f){return new aS(c,l,u,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,mv(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)})(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._componentsProvider||!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),t._firestoreClient=new PP(t._authCredentials,t._appCheckCredentials,t._queue,i,t._componentsProvider&&(function(c){const l=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(l),_online:l}})(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Kt(mt.fromBase64String(e))}catch(n){throw new z(x.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Kt(mt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Kt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Do(e,Kt._jsonSchema))return Kt.fromBase64String(e.bytes)}}Kt._jsonSchemaVersion="firestore/bytes/1.0",Kt._jsonSchema={type:nt("string",Kt._jsonSchemaVersion),bytes:nt("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(x.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new gt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(x.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(x.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Nn._jsonSchemaVersion}}static fromJSON(e){if(Do(e,Nn._jsonSchema))return new Nn(e.latitude,e.longitude)}}Nn._jsonSchemaVersion="firestore/geoPoint/1.0",Nn._jsonSchema={type:nt("string",Nn._jsonSchemaVersion),latitude:nt("number"),longitude:nt("number")};/**
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
 */class Dn{constructor(e){this._values=(e||[]).map((n=>n))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Dn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Do(e,Dn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((n=>typeof n=="number")))return new Dn(e.vectorValues);throw new z(x.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Dn._jsonSchemaVersion="firestore/vectorValue/1.0",Dn._jsonSchema={type:nt("string",Dn._jsonSchemaVersion),vectorValues:nt("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP=/^__.*__$/;class UP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new zr(e,this.data,this.fieldMask,n,this.fieldTransforms):new xo(e,this.data,n,this.fieldTransforms)}}class vv{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new zr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Ev(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ie(40011,{Ec:t})}}class Uh{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Uh(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return rc(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((n=>e.isPrefixOf(n)))!==void 0||this.fieldTransforms.find((n=>e.isPrefixOf(n.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(Ev(this.Ec)&&FP.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class jP{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Uc(e)}Dc(e,n,r,s=!1){return new Uh({Ec:e,methodName:n,bc:r,path:gt.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function pi(t){const e=t._freezeSettings(),n=Uc(t._databaseId);return new jP(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Gc(t,e,n,r,s,i={}){const o=t.Dc(i.merge||i.mergeFields?2:0,e,n,s);qh("Data must be an object, but it was:",o,r);const c=Tv(r,o);let l,u;if(i.merge)l=new Yt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const f=[];for(const d of i.mergeFields){const g=Su(e,d,n);if(!o.contains(g))throw new z(x.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);Iv(f,g)||f.push(g)}l=new Yt(f),u=o.fieldTransforms.filter((d=>l.covers(d.field)))}else l=null,u=o.fieldTransforms;return new UP(new Mt(c),l,u)}class Wc extends Hc{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Wc}}class jh extends Hc{constructor(e,n){super(e),this.Cc=n}_toFieldTransform(e){const n=new To(e.serializer,Ny(e.serializer,this.Cc));return new DS(e.path,n)}isEqual(e){return e instanceof jh&&this.Cc===e.Cc}}function Bh(t,e,n,r){const s=t.Dc(1,e,n);qh("Data must be an object, but it was:",s,r);const i=[],o=Mt.empty();Wr(r,((l,u)=>{const f=Hh(e,l,n);u=Fe(u);const d=s.gc(f);if(u instanceof Wc)i.push(f);else{const g=Uo(u,d);g!=null&&(i.push(f),o.set(f,g))}}));const c=new Yt(i);return new vv(o,c,s.fieldTransforms)}function $h(t,e,n,r,s,i){const o=t.Dc(1,e,n),c=[Su(e,r,n)],l=[s];if(i.length%2!=0)throw new z(x.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let g=0;g<i.length;g+=2)c.push(Su(e,i[g])),l.push(i[g+1]);const u=[],f=Mt.empty();for(let g=c.length-1;g>=0;--g)if(!Iv(u,c[g])){const _=c[g];let S=l[g];S=Fe(S);const P=o.gc(_);if(S instanceof Wc)u.push(_);else{const N=Uo(S,P);N!=null&&(u.push(_),f.set(_,N))}}const d=new Yt(u);return new vv(f,d,o.fieldTransforms)}function BP(t,e,n,r=!1){return Uo(n,t.Dc(r?4:3,e))}function Uo(t,e){if(wv(t=Fe(t)))return qh("Unsupported field value:",e,t),Tv(t,e);if(t instanceof Hc)return(function(r,s){if(!Ev(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let o=0;for(const c of r){let l=Uo(c,s.yc(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}})(t,e)}return(function(r,s){if((r=Fe(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ny(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=ye.fromDate(r);return{timestampValue:Ya(s.serializer,i)}}if(r instanceof ye){const i=new ye(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ya(s.serializer,i)}}if(r instanceof Nn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Kt)return{bytesValue:qy(s.serializer,r._byteString)};if(r instanceof Ge){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.wc(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:vh(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Dn)return(function(o,c){return{mapValue:{fields:{[gy]:{stringValue:my},[za]:{arrayValue:{values:o.toArray().map((u=>{if(typeof u!="number")throw c.wc("VectorValues must only contain numeric values.");return mh(c.serializer,u)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${kc(r)}`)})(t,e)}function Tv(t,e){const n={};return ly(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Wr(t,((r,s)=>{const i=Uo(s,e.Vc(r));i!=null&&(n[r]=i)})),{mapValue:{fields:n}}}function wv(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ye||t instanceof Nn||t instanceof Kt||t instanceof Ge||t instanceof Hc||t instanceof Dn)}function qh(t,e,n){if(!wv(n)||!ay(n)){const r=kc(n);throw r==="an object"?e.wc(t+" a custom object"):e.wc(t+" "+r)}}function Su(t,e,n){if((e=Fe(e))instanceof di)return e._internalPath;if(typeof e=="string")return Hh(t,e);throw rc("Field path arguments must be of type string or ",t,!1,void 0,n)}const $P=new RegExp("[~\\*/\\[\\]]");function Hh(t,e,n){if(e.search($P)>=0)throw rc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new di(...e.split("."))._internalPath}catch{throw rc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function rc(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new z(x.INVALID_ARGUMENT,c+t+l)}function Iv(t,e){return t.some((n=>n.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ge(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new qP(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zc("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class qP extends sc{data(){return super.data()}}function zc(t,e){return typeof e=="string"?Hh(t,e):e instanceof di?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Av(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(x.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Gh{}class Wh extends Gh{}function Bt(t,e,...n){let r=[];e instanceof Gh&&r.push(e),r=r.concat(n),(function(i){const o=i.filter((l=>l instanceof zh)).length,c=i.filter((l=>l instanceof Kc)).length;if(o>1||o>0&&c>0)throw new z(x.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)t=s._apply(t);return t}class Kc extends Wh{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new Kc(e,n,r)}_apply(e){const n=this._parse(e);return bv(e._query,n),new ar(e.firestore,e.converter,yu(e._query,n))}_parse(e){const n=pi(e.firestore);return(function(i,o,c,l,u,f,d){let g;if(u.isKeyField()){if(f==="array-contains"||f==="array-contains-any")throw new z(x.INVALID_ARGUMENT,`Invalid Query. You can't perform '${f}' queries on documentId().`);if(f==="in"||f==="not-in"){Sg(d,f);const S=[];for(const P of d)S.push(Rg(l,i,P));g={arrayValue:{values:S}}}else g=Rg(l,i,d)}else f!=="in"&&f!=="not-in"&&f!=="array-contains-any"||Sg(d,f),g=BP(c,o,d,f==="in"||f==="not-in");return et.create(u,f,g)})(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function $t(t,e,n){const r=e,s=zc("where",t);return Kc._create(s,r,n)}class zh extends Gh{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new zh(e,n)}_parse(e){const n=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return n.length===1?n[0]:gn.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:((function(s,i){let o=s;const c=i.getFlattenedFilters();for(const l of c)bv(o,l),o=yu(o,l)})(e._query,n),new ar(e.firestore,e.converter,yu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Kh extends Wh{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new Kh(e,n)}_apply(e){const n=(function(s,i,o){if(s.startAt!==null)throw new z(x.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new z(x.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new yo(i,o)})(e._query,this._field,this._direction);return new ar(e.firestore,e.converter,(function(s,i){const o=s.explicitOrderBy.concat([i]);return new ui(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,n))}}function Ln(t,e="asc"){const n=e,r=zc("orderBy",t);return Kh._create(r,n)}class Qh extends Wh{constructor(e,n,r){super(),this.type=e,this._limit=n,this._limitType=r}static _create(e,n,r){return new Qh(e,n,r)}_apply(e){return new ar(e.firestore,e.converter,Qa(e._query,this._limit,this._limitType))}}function HP(t){return JR("limit",t),Qh._create("limit",t,"F")}function Rg(t,e,n){if(typeof(n=Fe(n))=="string"){if(n==="")throw new z(x.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ay(e)&&n.indexOf("/")!==-1)throw new z(x.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Ve.fromString(n));if(!se.isDocumentKey(r))throw new z(x.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return $p(t,new se(r))}if(n instanceof Ge)return $p(t,n._key);throw new z(x.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${kc(n)}.`)}function Sg(t,e){if(!Array.isArray(t)||t.length===0)throw new z(x.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function bv(t,e){const n=(function(s,i){for(const o of s)for(const c of o.getFlattenedFilters())if(i.indexOf(c.op)>=0)return c.op;return null})(t.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(n!==null)throw n===e.op?new z(x.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(x.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Rv{convertValue(e,n="none"){switch(Br(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Qe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(jr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw ie(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Wr(e,((s,i)=>{r[s]=this.convertValue(i,n)})),r}convertVectorValue(e){var n,r,s;const i=(s=(r=(n=e.fields)===null||n===void 0?void 0:n[za].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((o=>Qe(o.doubleValue)));return new Dn(i)}convertGeoPoint(e){return new Nn(Qe(e.latitude),Qe(e.longitude))}convertArray(e,n){return(e.values||[]).map((r=>this.convertValue(r,n)))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Dc(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(go(e));default:return null}}convertTimestamp(e){const n=Ur(e);return new ye(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ve.fromString(e);be(Jy(r),9688,{name:e});const s=new mo(r.get(1),r.get(3)),i=new se(r.popFirst(5));return s.isEqual(n)||tr(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qc(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class GP extends Rv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}class Ms{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class xr extends sc{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Ra(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(zc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new z(x.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,n={};return n.type=xr._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}xr._jsonSchemaVersion="firestore/documentSnapshot/1.0",xr._jsonSchema={type:nt("string",xr._jsonSchemaVersion),bundleSource:nt("string","DocumentSnapshot"),bundleName:nt("string"),bundle:nt("string")};class Ra extends xr{data(e={}){return super.data(e)}}class fs{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Ms(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((n=>e.push(n))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach((r=>{e.call(n,new Ra(this._firestore,this._userDataWriter,r.key,r,new Ms(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(x.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map((c=>{const l=new Ra(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ms(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}}))}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((c=>i||c.type!==3)).map((c=>{const l=new Ra(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ms(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,f=-1;return c.type!==0&&(u=o.indexOf(c.doc.key),o=o.delete(c.doc.key)),c.type!==1&&(o=o.add(c.doc),f=o.indexOf(c.doc.key)),{type:WP(c.type),doc:l,oldIndex:u,newIndex:f}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new z(x.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=fs._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=uh.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(n.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function WP(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ie(61501,{type:t})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(t){t=St(t,Ge);const e=St(t.firestore,mn);return VP(fi(e),t._key).then((n=>Sv(e,t,n)))}fs._jsonSchemaVersion="firestore/querySnapshot/1.0",fs._jsonSchema={type:nt("string",fs._jsonSchemaVersion),bundleSource:nt("string","QuerySnapshot"),bundleName:nt("string"),bundle:nt("string")};class Yc extends Rv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Kt(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ge(this.firestore,null,n)}}function An(t){t=St(t,ar);const e=St(t.firestore,mn),n=fi(e),r=new Yc(e);return Av(t._query),xP(n,t._query).then((s=>new fs(e,r,t,s)))}function Rk(t,e,n){t=St(t,Ge);const r=St(t.firestore,mn),s=Qc(t.converter,e,n);return jo(r,[Gc(pi(r),"setDoc",t._key,s,t.converter!==null,n).toMutation(t._key,tt.none())])}function Vn(t,e,n,...r){t=St(t,Ge);const s=St(t.firestore,mn),i=pi(s);let o;return o=typeof(e=Fe(e))=="string"||e instanceof di?$h(i,"updateDoc",t._key,e,n,r):Bh(i,"updateDoc",t._key,e),jo(s,[o.toMutation(t._key,tt.exists(!0))])}function Jh(t){return jo(St(t.firestore,mn),[new Oo(t._key,tt.none())])}function ic(t,e){const n=St(t.firestore,mn),r=qc(t),s=Qc(t.converter,e);return jo(n,[Gc(pi(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,tt.exists(!1))]).then((()=>r))}function rr(t,...e){var n,r,s;t=Fe(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||bg(e[o])||(i=e[o++]);const c={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(bg(e[o])){const d=e[o];e[o]=(n=d.next)===null||n===void 0?void 0:n.bind(d),e[o+1]=(r=d.error)===null||r===void 0?void 0:r.bind(d),e[o+2]=(s=d.complete)===null||s===void 0?void 0:s.bind(d)}let l,u,f;if(t instanceof Ge)u=St(t.firestore,mn),f=Vc(t._key.path),l={next:d=>{e[o]&&e[o](Sv(u,t,d))},error:e[o+1],complete:e[o+2]};else{const d=St(t,ar);u=St(d.firestore,mn),f=d._query;const g=new Yc(u);l={next:_=>{e[o]&&e[o](new fs(u,g,d,_))},error:e[o+1],complete:e[o+2]},Av(t._query)}return(function(g,_,S,P){const N=new Mh(P),j=new xh(_,N,S);return g.asyncQueue.enqueueAndForget((async()=>Nh(await nc(g),j))),()=>{N.Ou(),g.asyncQueue.enqueueAndForget((async()=>Dh(await nc(g),j)))}})(fi(u),f,c,l)}function jo(t,e){return(function(r,s){const i=new Pn;return r.asyncQueue.enqueueAndForget((async()=>yP(await NP(r),s,i))),i.promise})(fi(t),e)}function Sv(t,e,n){const r=n.docs.get(e._key),s=new Yc(t);return new xr(t,s,e._key,r,new Ms(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const zP={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=pi(e)}set(e,n,r){this._verifyNotCommitted();const s=Cr(e,this._firestore),i=Qc(s.converter,n,r),o=Gc(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,tt.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Cr(e,this._firestore);let o;return o=typeof(n=Fe(n))=="string"||n instanceof di?$h(this._dataReader,"WriteBatch.update",i._key,n,r,s):Bh(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,tt.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=Cr(e,this._firestore);return this._mutations=this._mutations.concat(new Oo(n._key,tt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(x.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Cr(t,e){if((t=Fe(t)).firestore!==e)throw new z(x.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QP{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=pi(e)}get(e){const n=Cr(e,this._firestore),r=new GP(this._firestore);return this._transaction.lookup([n._key]).then((s=>{if(!s||s.length!==1)return ie(24041);const i=s[0];if(i.isFoundDocument())return new sc(this._firestore,r,i.key,i,n.converter);if(i.isNoDocument())return new sc(this._firestore,r,n._key,null,n.converter);throw ie(18433,{doc:i})}))}set(e,n,r){const s=Cr(e,this._firestore),i=Qc(s.converter,n,r),o=Gc(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,n,r,...s){const i=Cr(e,this._firestore);let o;return o=typeof(n=Fe(n))=="string"||n instanceof di?$h(this._dataReader,"Transaction.update",i._key,n,r,s):Bh(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const n=Cr(e,this._firestore);return this._transaction.delete(n._key),this}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JP extends QP{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=Cr(e,this._firestore),r=new Yc(this._firestore);return super.get(e).then((s=>new xr(this._firestore,r,n._key,s._document,new Ms(!1,!1),n.converter)))}}function YP(t,e,n){t=St(t,mn);const r=Object.assign(Object.assign({},zP),n);return(function(i){if(i.maxAttempts<1)throw new z(x.INVALID_ARGUMENT,"Max attempts must be at least 1")})(r),(function(i,o,c){const l=new Pn;return i.asyncQueue.enqueueAndForget((async()=>{const u=await DP(i);new CP(i.asyncQueue,u,c,o,l).zu()})),l.promise})(fi(t),(s=>e(new JP(t,s))),r)}function XP(t){return new jh("increment",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(t){return fi(t=St(t,mn)),new KP(t,(e=>jo(t,e)))}(function(e,n=!0){(function(s){ai=s})(ii),ps(new Lr("firestore",((r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),c=new mn(new $R(r.getProvider("auth-internal")),new GR(o,r.getProvider("app-check-internal")),(function(u,f){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new z(x.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mo(u.options.projectId,f)})(o,s),o);return i=Object.assign({useFetchStreams:n},i),c._setSettings(i),c}),"PUBLIC").setMultipleInstances(!0)),Rn(Cp,Pp,e),Rn(Cp,Pp,"esm2017")})();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZP{constructor(e,n,r,s){this.app=e,this.auth=null,this.messaging=null,this.appCheck=null,this.serverAppAppCheckToken=null,zt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.auth=n.getImmediate({optional:!0}),this.messaging=r.getImmediate({optional:!0}),this.auth||n.get().then(i=>this.auth=i,()=>{}),this.messaging||r.get().then(i=>this.messaging=i,()=>{}),this.appCheck||s==null||s.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.serverAppAppCheckToken)return this.serverAppAppCheckToken;if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),r=await this.getMessagingToken(),s=await this.getAppCheckToken(e);return{authToken:n,messagingToken:r,appCheckToken:s}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu="us-central1";class e1{constructor(e,n,r,s,i=Cu,o=(...c)=>fetch(...c)){this.app=e,this.fetchImpl=o,this.emulatorOrigin=null,this.contextProvider=new ZP(e,n,r,s),this.cancelAllRequests=new Promise(c=>{this.deleteService=()=>Promise.resolve(c())});try{const c=new URL(i);this.customDomain=c.origin+(c.pathname==="/"?"":c.pathname),this.region=Cu}catch{this.customDomain=null,this.region=i}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}}function t1(t,e,n){const r=Es(e);t.emulatorOrigin=`http${r?"s":""}://${e}:${n}`,r&&(Qu(t.emulatorOrigin),Ju("Functions",!0))}const Cg="@firebase/functions",Pg="0.12.9";/**
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
 */const n1="auth-internal",r1="app-check-internal",s1="messaging-internal";function i1(t){const e=(n,{instanceIdentifier:r})=>{const s=n.getProvider("app").getImmediate(),i=n.getProvider(n1),o=n.getProvider(s1),c=n.getProvider(r1);return new e1(s,i,o,c,r)};ps(new Lr(Pv,e,"PUBLIC").setMultipleInstances(!0)),Rn(Cg,Pg,t),Rn(Cg,Pg,"esm2017")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o1(t=Zu(),e=Cu){const r=Rc(Fe(t),Pv).getImmediate({identifier:e}),s=l_("functions");return s&&a1(r,...s),r}function a1(t,e,n){t1(Fe(t),e,n)}i1();const c1={apiKey:"AIzaSyCL63H3EpeK3A9SgLJ6NxkcWtzOnbZM5uU",authDomain:"qa-website2026.firebaseapp.com",projectId:"qa-website2026",messagingSenderId:"207652444805",appId:"1:207652444805:web:e5f9b11f0d4293475727ec"},Yh=p_(c1),Er=LR(Yh),ni=LP(Yh);o1(Yh);const mr=qt(null),Fl=qt(!0);function Xc(){const t=bt(()=>mr.value!==null);function e(){Fl.value=!0,Ab(Er,o=>{var c;o?mr.value={uid:o.uid,email:o.email||"",displayName:o.displayName||((c=o.email)==null?void 0:c.split("@")[0])||"User",photoURL:o.photoURL||void 0}:mr.value=null,Fl.value=!1})}async function n(o,c){return(await Eb(Er,o,c)).user}async function r(o,c,l){const u=await vb(Er,o,c);return await _p(u.user,{displayName:l}),u.user}async function s(){await bb(Er),mr.value=null}async function i(o){const c=o.trim();if(!c)throw new Error("Please enter a display name.");if(!Er.currentUser)throw new Error("You need to be signed in to update your profile.");await _p(Er.currentUser,{displayName:c}),mr.value&&(mr.value={...mr.value,displayName:c})}return{currentUser:mr,loading:Fl,isAuthenticated:t,init:e,login:n,register:r,logout:s,updateDisplayName:i}}function He(t){return yv(ni,t)}function ut(t){return qc(ni,t)}function Di(t,e){return{id:t,...e,screenshotUrls:e.screenshotUrls??[]}}function kv(){async function t(l){const u=Bt(He("projects"),$t("ownerId","==",l),Ln("createdAt","desc"));return(await An(u)).docs.map(d=>({id:d.id,...d.data()}))}function e(l,u){const f=Bt(He("projects"),$t("ownerId","==",l),Ln("createdAt","desc"));return rr(f,d=>{u(d.docs.map(g=>({id:g.id,...g.data()})))},async d=>{console.warn("subscribeProjects error, falling back:",d.message);const g=Bt(He("projects"),$t("ownerId","==",l));rr(g,_=>{u(_.docs.map(S=>({id:S.id,...S.data()})))})})}async function n(l){const u=await Jc(ut(`projects/${l}`));return u.exists()?{id:u.id,...u.data()}:null}async function r(l){return(await ic(He("projects"),{...l,ownerId:l.ownerId,members:{[l.ownerId]:"owner"},bugCounter:0,ownershipVerified:l.ownershipVerified??!1,createdAt:ye.now()})).id}async function s(l,u){await Vn(ut(`projects/${l}`),u)}async function i(l){await Jh(ut(`projects/${l}`))}async function o(l){await Vn(ut(`projects/${l}`),{ownershipVerified:!0})}async function c(l,u,f){await Vn(ut(`projects/${l}`),{[`members.${u}`]:f})}return{getProjects:t,subscribeProjects:e,getProject:n,createProject:r,updateProject:s,deleteProject:i,verifyOwnership:o,addMember:c}}function Sk(){function t(c,l,u){const f=Bt(He("audit_jobs"),$t("projectId","==",c),Ln("timestamp","desc"));return rr(f,d=>l(d.docs.map(g=>({id:g.id,...g.data()}))),d=>{var g;console.error("Audit jobs snapshot error:",d),(d.code==="failed-precondition"||(g=d.message)!=null&&g.includes("index"))&&(console.warn("Composite index missing — deploy firestore.indexes.json"),l([])),u==null||u(d)})}async function e(c){const l=Bt(He("audit_jobs"),$t("projectId","==",c),Ln("timestamp","desc"));return(await An(l)).docs.map(f=>({id:f.id,...f.data()}))}async function n(c){const l=await Jc(ut(`audit_jobs/${c}`));return l.exists()?{id:l.id,...l.data()}:null}async function r(c){return(await An(He(`audit_jobs/${c}/pages`))).docs.map(u=>u.data())}async function s(c){return(await An(He(`audit_jobs/${c}/vulnerabilities`))).docs.map(u=>u.data())}async function i(c){return(await An(He(`audit_jobs/${c}/performance_metrics`))).docs.map(u=>u.data())}async function o(c){const l=await e(c),u=["pages","vulnerabilities","performance_metrics"];for(const f of l){for(const d of u){const g=await An(He(`audit_jobs/${f.id}/${d}`));for(let _=0;_<g.docs.length;_+=450){const S=Cv(ni);g.docs.slice(_,_+450).forEach(P=>S.delete(P.ref)),await S.commit()}}await Jh(ut(`audit_jobs/${f.id}`))}}return{subscribeAuditJobs:t,getAuditJobs:e,getAuditJob:n,getAuditPages:r,getVulnerabilities:s,getPerformanceMetrics:i,deleteAuditHistory:o}}function Ck(){function t(o,c,l){const u=Bt(He("bug_list"),$t("projectId","==",o),Ln("createdAt","desc"));return rr(u,f=>c(f.docs.map(d=>Di(d.id,d.data()))),f=>{var d;if(console.error("Bug list snapshot error:",f),f.code==="failed-precondition"||(d=f.message)!=null&&d.includes("index")){const g=Bt(He("bug_list"),$t("projectId","==",o));rr(g,_=>{c(_.docs.map(S=>Di(S.id,S.data())))})}l==null||l(f)})}async function e(o){try{const c=Bt(He("bug_list"),$t("projectId","==",o),Ln("createdAt","desc"));return(await An(c)).docs.map(u=>Di(u.id,u.data()))}catch{const c=Bt(He("bug_list"),$t("projectId","==",o));return(await An(c)).docs.map(u=>Di(u.id,u.data()))}}async function n(o){const c=await Jc(ut(`bug_list/${o}`));return c.exists()?Di(c.id,c.data()):null}async function r(o){const c=ut(`projects/${o.projectId}`);let l="",u="";return await YP(ni,async f=>{var S;const g=(((S=(await f.get(c)).data())==null?void 0:S.bugCounter)||0)+1;u=`QAS-${g}`,f.update(c,{bugCounter:g});const _=qc(He("bug_list"));l=_.id,f.set(_,{status:"Open",severity:"Medium",tags:[],assignees:[],commentCount:0,remediationGuide:null,screenshotUrls:[],...o,shortId:u,createdAt:ye.now(),lastEditedTime:ye.now()})}),{id:l,shortId:u}}async function s(o,c){await Vn(ut(`bug_list/${o}`),{...c,lastEditedTime:ye.now()})}async function i(o){await Jh(ut(`bug_list/${o}`))}return{subscribeBugs:t,getBugs:e,getBug:n,createBug:r,updateBug:s,deleteBug:i}}function Pk(){function t(n,r){const s=Bt(He(`bug_list/${n}/comments`),Ln("timestamp","asc"));return rr(s,i=>{r(i.docs.map(o=>({id:o.id,...o.data()})))})}async function e(n,r){return await Vn(ut(`bug_list/${n}`),{commentCount:XP(1)}),(await ic(He(`bug_list/${n}/comments`),{...r,timestamp:ye.now()})).id}return{subscribeComments:t,addComment:e}}function kk(){function t(o,c){const l=Bt(He("test_cases"),$t("projectId","==",o),Ln("createdAt","desc"));return rr(l,u=>{c(u.docs.map(f=>({id:f.id,...f.data()})))})}async function e(o){const c=Bt(He("test_cases"),$t("projectId","==",o),Ln("createdAt","desc"));return(await An(c)).docs.map(u=>({id:u.id,...u.data()}))}async function n(o){return(await ic(He("test_cases"),{status:"Untested",steps:[],tags:[],playwrightScript:null,lastRun:null,...o,createdAt:ye.now(),lastEditedTime:ye.now()})).id}async function r(o,c){await Vn(ut(`test_cases/${o}`),{...c,lastEditedTime:ye.now()})}async function s(o,c){const l=await ic(He(`test_cases/${o}/test_runs`),{...c,runAt:ye.now()});return await Vn(ut(`test_cases/${o}`),{lastRun:ye.now(),status:c.status,lastEditedTime:ye.now()}),l.id}async function i(o){if(o.length===0)return[];const c=Cv(ni),l=[];for(const u of o){const f=qc(yv(ni,"test_cases"));l.push(f.id),c.set(f,{status:"Untested",steps:[],tags:[],playwrightScript:null,lastRun:null,...u,createdAt:ye.now(),lastEditedTime:ye.now()})}return await c.commit(),l}return{subscribeTestCases:t,getTestCases:e,createTestCase:n,createBatchTestCases:i,updateTestCase:r,addTestRun:s}}function l1(){function t(r,s){const i=Bt(He("notifications"),$t("userId","==",r),Ln("createdAt","desc"),HP(50));return rr(i,o=>{s(o.docs.map(c=>({id:c.id,...c.data()})))})}async function e(r){await Vn(ut(`notifications/${r}`),{read:!0})}async function n(r){const s=Bt(He("notifications"),$t("userId","==",r),$t("read","==",!1)),o=(await An(s)).docs.map(c=>Vn(c.ref,{read:!0}));await Promise.all(o)}return{subscribeNotifications:t,markAsRead:e,markAllAsRead:n}}function Nk(){function t(c,l){const u=ut(`projects/${c}`);return rr(u,f=>{if(!f.exists()){l([]);return}const d=f.data(),g=(d==null?void 0:d.customPages)||[];l(g)},f=>{console.warn("Project document subscription error:",f.message),l([])})}async function e(c){var l;try{const u=await Jc(ut(`projects/${c}`));return u.exists()?((l=u.data())==null?void 0:l.customPages)||[]:[]}catch(u){return console.warn("Failed to load project pages:",u.message),[]}}async function n(c,l){await Vn(ut(`projects/${c}`),{customPages:l})}async function r(c,l){const u=await e(c),f=`page_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,d={id:f,...l,createdAt:new Date().toISOString()};return await n(c,[d,...u]),f}async function s(c,l,u){const d=(await e(c)).map(g=>g.id===l?{...g,...u}:g);await n(c,d)}async function i(c,l){const f=(await e(c)).filter(d=>d.id!==l);await n(c,f)}async function o(c,l){const u=await e(c),f=new Set(u.map(g=>g.url.toLowerCase())),d=[];for(const g of l)f.has(g.url.toLowerCase())||(f.add(g.url.toLowerCase()),d.push({id:`page_${Date.now()}_${Math.random().toString(36).slice(2,7)}`,...g,createdAt:new Date().toISOString()}));await n(c,[...u,...d])}return{subscribeProjectPages:t,getProjectPages:e,saveProjectPages:n,addProjectPage:r,updateProjectPage:s,deleteProjectPage:i,batchAddProjectPages:o}}const kg="/assets/qa-logo-BBgT2MGY.png",u1={key:0,class:"flex items-center gap-2"},h1=["src"],f1={key:1},d1=["src"],p1={key:0},g1={key:1},m1={class:"flex-1 space-y-1 overflow-y-auto px-3 py-4"},_1={class:"text-lg"},y1={key:0},v1={key:0,class:"space-y-1"},E1={class:"flex items-center gap-1"},T1=["aria-expanded"],w1={key:0,class:"ml-5 space-y-1 border-l border-gray-200 pl-3"},I1={key:0,class:"px-3 py-2 text-xs text-gray-400"},A1={key:1,class:"px-3 py-2 text-xs text-gray-400"},b1={class:"border-t border-gray-200 p-4"},R1={key:0,class:"flex items-center gap-3"},S1={class:"flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold"},C1={class:"min-w-0 flex-1"},P1={class:"text-sm font-medium text-gray-900 truncate"},k1={class:"text-xs text-gray-500 truncate"},N1=vs({__name:"Sidebar",props:{collapsed:{type:Boolean},mobileOpen:{type:Boolean}},emits:["toggle","closeMobile"],setup(t,{emit:e}){const n=e,r=Ac(),s=Xc(),i=kv(),o=qt([]),c=qt(!1),l=qt(r.path.startsWith("/projects"));let u=null;const f=[{name:"Dashboard",path:"/dashboard",icon:"📊"},{name:"Projects",path:"/projects",icon:"📁"}],d=_=>r.path.startsWith(_);Pr(()=>{var _;return(_=s.currentUser.value)==null?void 0:_.uid},_=>{u==null||u(),u=null,o.value=[],_&&(c.value=!0,u=i.subscribeProjects(_,S=>{o.value=S,c.value=!1}))},{immediate:!0}),Pr(()=>r.path,_=>{_.startsWith("/projects")&&(l.value=!0)}),yc(()=>u==null?void 0:u());function g(){n("closeMobile")}return(_,S)=>{var N,j,V,$,q;const P=Ao("router-link");return ve(),ke(Ot,null,[te("aside",{class:Tt(["fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-gray-200 bg-white transition-transform duration-300 lg:static lg:z-auto lg:translate-x-0 lg:transition-[width]",[t.collapsed?"lg:w-16":"lg:w-64",t.mobileOpen?"translate-x-0":"-translate-x-full"]])},[te("div",{class:Tt(["relative flex h-16 items-center border-b border-gray-200",t.collapsed?"justify-center px-2":"justify-between px-4"])},[t.collapsed?(ve(),ke("div",f1,[te("img",{src:ct(kg),alt:"QA-Suite logo",class:"h-8 w-8 rounded-sm object-cover"},null,8,d1)])):(ve(),ke("div",u1,[te("img",{src:ct(kg),alt:"QA-Suite logo",class:"h-10 w-10 rounded-sm object-cover"},null,8,h1),S[3]||(S[3]=te("span",{class:"text-sm font-medium text-gray-500"},"Suite",-1))])),te("button",{onClick:S[0]||(S[0]=Y=>n("toggle")),class:Tt(["text-gray-500 hover:bg-gray-100 hover:text-gray-700",t.collapsed?"absolute -right-3 top-1/2 z-10 h-8 w-8 -translate-y-1/2 rounded-full border border-gray-200 bg-white shadow-sm":"rounded-lg p-1.5"])},[t.collapsed?(ve(),ke("span",p1,"→")):(ve(),ke("span",g1,"←"))],2)],2),te("nav",m1,[(ve(!0),ke(Ot,null,Na(f.filter(Y=>Y.name==="Dashboard"),Y=>(ve(),hs(P,{key:Y.name,to:Y.path,class:Tt(["flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",d(Y.path)?"bg-primary-50 text-primary-700":"text-gray-600 hover:bg-gray-100 hover:text-gray-900"]),onClick:g},{default:Rr(()=>[te("span",_1,ot(Y.icon),1),t.collapsed?Vt("",!0):(ve(),ke("span",y1,ot(Y.name),1))]),_:2},1032,["to","class"]))),128)),t.collapsed?(ve(),hs(P,{key:1,to:"/projects",class:Tt(["flex items-center justify-center rounded-lg px-3 py-2.5 text-lg transition-colors",d("/projects")?"bg-primary-50 text-primary-700":"text-gray-600 hover:bg-gray-100 hover:text-gray-900"]),title:"Projects",onClick:g},{default:Rr(()=>[...S[5]||(S[5]=[oo(" 📁 ",-1)])]),_:1},8,["class"])):(ve(),ke("div",v1,[te("div",E1,[Je(P,{to:"/projects",class:Tt(["flex min-w-0 flex-1 items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",d("/projects")?"bg-primary-50 text-primary-700":"text-gray-600 hover:bg-gray-100 hover:text-gray-900"]),onClick:g},{default:Rr(()=>[...S[4]||(S[4]=[te("span",{class:"text-lg"},"📁",-1),te("span",{class:"truncate"},"Projects",-1)])]),_:1},8,["class"]),te("button",{type:"button",class:"rounded-md p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-800","aria-expanded":l.value,"aria-label":"Toggle project list",onClick:S[1]||(S[1]=Y=>l.value=!l.value)},[te("i",{class:Tt(["fa-solid fa-chevron-down text-xs transition-transform",l.value?"rotate-180":""])},null,2)],8,T1)]),l.value?(ve(),ke("div",w1,[c.value?(ve(),ke("p",I1,"Loading projects…")):o.value.length===0?(ve(),ke("p",A1,"No projects yet")):Vt("",!0),(ve(!0),ke(Ot,null,Na(o.value,Y=>(ve(),hs(P,{key:Y.id,to:`/projects/${Y.id}`,class:Tt(["block truncate rounded-lg px-3 py-2 text-sm transition-colors",ct(r).params.id===Y.id?"bg-primary-50 font-semibold text-primary-700":"text-gray-600 hover:bg-gray-100 hover:text-gray-900"]),title:Y.name,onClick:g},{default:Rr(()=>[oo(ot(Y.name),1)]),_:2},1032,["to","class","title"]))),128))])):Vt("",!0)]))]),te("div",b1,[t.collapsed?Vt("",!0):(ve(),ke("div",R1,[te("div",S1,ot(((V=(j=(N=ct(s).currentUser.value)==null?void 0:N.displayName)==null?void 0:j.charAt(0))==null?void 0:V.toUpperCase())||"U"),1),te("div",C1,[te("p",P1,ot(($=ct(s).currentUser.value)==null?void 0:$.displayName),1),te("p",k1,ot((q=ct(s).currentUser.value)==null?void 0:q.email),1)])]))])],2),t.mobileOpen?(ve(),ke("button",{key:0,type:"button","aria-label":"Close navigation",class:"fixed inset-0 z-30 bg-gray-900/40 lg:hidden",onClick:S[2]||(S[2]=Y=>n("closeMobile"))})):Vt("",!0)],64)}}});function Dk(t){return t?("toDate"in t?t.toDate():t).toLocaleDateString():"Just now"}function D1(t){return t?("toDate"in t?t.toDate():t).toLocaleString():"Processing..."}function Vk(t){switch(t){case"Urgent":return"bg-red-100 text-red-800";case"High":return"bg-orange-100 text-orange-800";case"Medium":return"bg-yellow-100 text-yellow-800";case"Low":return"bg-blue-100 text-blue-800";default:return"bg-gray-100 text-gray-800"}}function xk(t){switch(t){case"Not started":return"bg-gray-100 text-gray-700";case"Open":return"bg-blue-100 text-blue-800";case"In Progress":return"bg-yellow-100 text-yellow-800";case"In Review":return"bg-purple-100 text-purple-800";case"Resolved":return"bg-green-100 text-green-800";default:return"bg-gray-100 text-gray-700"}}const V1={class:"flex min-h-16 items-center justify-between gap-3 border-b border-gray-200 bg-white px-4 sm:px-6"},x1={class:"flex items-center gap-4"},O1={class:"min-w-0 truncate text-xl font-semibold text-gray-800"},L1={class:"flex items-center gap-2 sm:gap-4"},M1={class:"relative notification-container"},F1={key:0,class:"absolute top-1.5 right-1.5 h-4 w-4 rounded-full bg-red-500 flex items-center justify-center text-[10px] font-bold text-white border-2 border-white"},U1={key:0,class:"absolute right-0 mt-2 w-80 sm:w-96 rounded-xl bg-white shadow-xl ring-1 ring-black ring-opacity-5 z-50 overflow-hidden"},j1={class:"px-4 py-3 border-b border-gray-100 flex items-center justify-between bg-gray-50/50"},B1={class:"flex items-center gap-2"},$1={key:0,class:"rounded-full bg-indigo-100 text-indigo-700 px-2 py-0.5 text-xs font-semibold"},q1={class:"max-h-80 overflow-y-auto divide-y divide-gray-100"},H1={key:0,class:"p-6 text-center text-gray-500"},G1=["onClick"],W1={key:0,class:"absolute left-1.5 top-1/2 -translate-y-1/2 h-1.5 w-1.5 rounded-full bg-indigo-600"},z1={class:"min-w-0 flex-1"},K1={class:"text-xs text-gray-600 line-clamp-2 mt-0.5"},Q1={class:"text-[10px] text-gray-400 mt-1 flex items-center gap-1"},J1={class:"border-t border-gray-100 bg-gray-50/50 p-2 text-center"},Y1={class:"relative user-menu-container"},X1={class:"flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-700 text-sm font-semibold"},Z1={class:"hidden text-sm font-medium text-gray-700 sm:inline"},ek={key:0,class:"absolute right-0 mt-2 w-48 rounded-lg bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 z-50"},tk={class:"px-4 py-2 border-b border-gray-100"},nk={class:"text-sm font-medium text-gray-900 truncate"},rk=vs({__name:"Header",props:{collapsed:{type:Boolean},user:{}},emits:["toggle-sidebar"],setup(t,{emit:e}){const n=e,r=Xc(),s=UI(),i=Ac(),o=l1(),c=qt(!1),l=qt(!1),u=qt([]);let f=null;const d=bt(()=>u.value.filter(Z=>!Z.read).length),g=bt(()=>u.value.slice(0,5)),_=bt(()=>i.name==="ProfileSettings"?"Profile Settings":String(i.name||""));function S(Z){const E=Z.target;E.closest(".notification-container")||(l.value=!1),E.closest(".user-menu-container")||(c.value=!1)}_c(()=>{r.currentUser.value&&(f=o.subscribeNotifications(r.currentUser.value.uid,Z=>{u.value=Z})),document.addEventListener("click",S)}),yc(()=>{f==null||f(),document.removeEventListener("click",S)});const P=async()=>{c.value=!1,await r.logout(),s.push("/login")};function N(){c.value=!1,s.push("/settings/profile")}const j=()=>{l.value=!l.value,l.value&&(c.value=!1)},V=()=>{c.value=!c.value,c.value&&(l.value=!1)};async function $(){r.currentUser.value&&await o.markAllAsRead(r.currentUser.value.uid)}async function q(Z){l.value=!1,Z.read||await o.markAsRead(Z.id),Z.link&&s.push(Z.link)}function Y(Z,E){const y=`${Z} ${E}`.toLowerCase();return y.includes("error")||y.includes("failed")||y.includes("alert")||y.includes("critical")?{icon:"fa-solid fa-triangle-exclamation",bg:"bg-red-100 text-red-600"}:y.includes("passed")||y.includes("success")||y.includes("resolved")||y.includes("completed")?{icon:"fa-solid fa-circle-check",bg:"bg-green-100 text-green-600"}:y.includes("bug")||y.includes("issue")?{icon:"fa-solid fa-bug",bg:"bg-amber-100 text-amber-600"}:y.includes("audit")||y.includes("crawl")||y.includes("scan")?{icon:"fa-solid fa-shield-halved",bg:"bg-purple-100 text-purple-600"}:y.includes("test")||y.includes("suite")?{icon:"fa-solid fa-flask",bg:"bg-blue-100 text-blue-600"}:{icon:"fa-solid fa-bell",bg:"bg-indigo-100 text-indigo-600"}}return(Z,E)=>{var v,A,R,I,w;const y=Ao("router-link");return ve(),ke("header",V1,[te("div",x1,[te("button",{type:"button","aria-label":"Toggle navigation",class:"rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 lg:hidden",onClick:E[0]||(E[0]=fe=>n("toggle-sidebar"))},[...E[2]||(E[2]=[te("i",{class:"fa-solid fa-bars text-lg"},null,-1)])]),te("h2",O1,ot(_.value),1)]),te("div",L1,[te("div",M1,[te("button",{type:"button","aria-label":"Notifications",onClick:j,class:"relative rounded-full p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 transition-colors focus:outline-none"},[E[3]||(E[3]=te("i",{class:"fa-solid fa-bell text-lg"},null,-1)),d.value>0?(ve(),ke("span",F1,ot(d.value>9?"9+":d.value),1)):Vt("",!0)]),l.value?(ve(),ke("div",U1,[te("div",j1,[te("div",B1,[E[4]||(E[4]=te("span",{class:"text-sm font-semibold text-gray-900"},"Notifications",-1)),d.value>0?(ve(),ke("span",$1,ot(d.value)+" new ",1)):Vt("",!0)]),d.value>0?(ve(),ke("button",{key:0,onClick:$,class:"text-xs font-medium text-indigo-600 hover:text-indigo-800 flex items-center gap-1 transition-colors"},[...E[5]||(E[5]=[te("i",{class:"fa-solid fa-check-double text-[10px]"},null,-1),te("span",null,"Mark all read",-1)])])):Vt("",!0)]),te("div",q1,[u.value.length===0?(ve(),ke("div",H1,[...E[6]||(E[6]=[te("div",{class:"mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-400"},[te("i",{class:"fa-solid fa-bell-slash text-base"})],-1),te("p",{class:"text-sm font-medium text-gray-700"},"No notifications",-1),te("p",{class:"text-xs text-gray-400 mt-0.5"},"You're all caught up!",-1)])])):Vt("",!0),(ve(!0),ke(Ot,null,Na(g.value,fe=>(ve(),ke("div",{key:fe.id,onClick:Ye=>q(fe),class:Tt(["p-3.5 hover:bg-gray-50 cursor-pointer transition-colors flex items-start gap-3 relative",fe.read?"opacity-70":"bg-indigo-50/20"])},[fe.read?Vt("",!0):(ve(),ke("div",W1)),te("div",{class:Tt(["flex-shrink-0 mt-0.5",fe.read?"ml-0":"ml-1"])},[te("div",{class:Tt(["flex h-7 w-7 items-center justify-center rounded-md",Y(fe.title,fe.message).bg])},[te("i",{class:Tt([Y(fe.title,fe.message).icon,"text-xs"])},null,2)],2)],2),te("div",z1,[te("p",{class:Tt(["text-xs font-semibold text-gray-900 truncate",fe.read?"font-medium":"font-bold"])},ot(fe.title),3),te("p",K1,ot(fe.message),1),te("p",Q1,[E[7]||(E[7]=te("i",{class:"fa-regular fa-clock text-[9px]"},null,-1)),te("span",null,ot(ct(D1)(fe.createdAt)),1)])])],10,G1))),128))]),te("div",J1,[Je(y,{to:"/notifications",onClick:E[1]||(E[1]=fe=>l.value=!1),class:"block w-full py-1.5 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"},{default:Rr(()=>[...E[8]||(E[8]=[oo(" View all notifications ",-1),te("i",{class:"fa-solid fa-arrow-right text-[10px] ml-1"},null,-1)])]),_:1})])])):Vt("",!0)]),te("div",Y1,[te("button",{onClick:V,class:"flex items-center gap-2 rounded-full border border-gray-200 p-1 pr-3 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"},[te("div",X1,ot(((R=(A=(v=ct(r).currentUser.value)==null?void 0:v.displayName)==null?void 0:A.charAt(0))==null?void 0:R.toUpperCase())||"U"),1),te("span",Z1,ot(((I=ct(r).currentUser.value)==null?void 0:I.displayName)||"User"),1),E[9]||(E[9]=te("i",{class:"fa-solid fa-chevron-down text-xs text-gray-400 hidden sm:inline"},null,-1))]),c.value?(ve(),ke("div",ek,[te("div",tk,[E[10]||(E[10]=te("p",{class:"text-xs text-gray-500"},"Signed in as",-1)),te("p",nk,ot((w=ct(r).currentUser.value)==null?void 0:w.email),1)]),te("button",{type:"button",onClick:N,class:"flex w-full items-center px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"},[...E[11]||(E[11]=[te("i",{class:"fa-solid fa-user-pen mr-2 text-xs text-gray-400"},null,-1),te("span",null,"Profile settings",-1)])]),te("button",{onClick:P,class:"flex items-center w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-gray-50"},[...E[12]||(E[12]=[te("i",{class:"fa-solid fa-arrow-right-from-bracket mr-2 text-xs"},null,-1),te("span",null,"Sign out",-1)])])])):Vt("",!0)])])])}}}),sk={key:0,"aria-label":"Breadcrumb",class:"mb-4"},ik={class:"flex min-w-0 items-center gap-2 text-sm text-gray-500"},ok={key:0,"aria-hidden":"true",class:"text-gray-300"},ak={key:2,class:"truncate font-medium text-gray-800","aria-current":"page"},ck=vs({__name:"Breadcrumbs",setup(t){const e=Ac(),n=kv(),r=qt("");Pr(()=>e.params.id,async i=>{if(r.value="",typeof i!="string")return;const o=await n.getProject(i);o&&e.params.id===i&&(r.value=o.name)},{immediate:!0});const s=bt(()=>{const i=typeof e.params.id=="string"?e.params.id:"",o=[];if(e.name==="Dashboard")return[{label:"Dashboard",to:"/dashboard"}];if(e.name==="Projects")return[{label:"Projects",to:"/projects"}];if(e.name==="Notifications")return[{label:"Notifications",to:"/notifications"}];i&&(o.push({label:"Projects",to:"/projects"}),o.push({label:r.value||"Project",to:`/projects/${i}`}));const l={ProjectHome:"Page Audits",AuditResults:"Audit Results",BugList:"Bugs",TestCases:"Test Cases",TrendHistory:"History"}[String(e.name)];return l&&e.name!=="ProjectHome"&&o.push({label:l}),o});return(i,o)=>{const c=Ao("RouterLink");return s.value.length?(ve(),ke("nav",sk,[te("ol",ik,[(ve(!0),ke(Ot,null,Na(s.value,(l,u)=>(ve(),ke("li",{key:`${l.label}-${u}`,class:"flex min-w-0 items-center gap-2"},[u>0?(ve(),ke("span",ok,"/")):Vt("",!0),l.to&&u<s.value.length-1?(ve(),hs(c,{key:1,to:l.to,class:"truncate transition-colors hover:text-indigo-600"},{default:Rr(()=>[oo(ot(l.label),1)]),_:2},1032,["to"])):(ve(),ke("span",ak,ot(l.label),1))]))),128))])])):Vt("",!0)}}}),lk={class:"flex h-screen overflow-hidden bg-[#f2faf8]"},uk={class:"flex flex-1 flex-col overflow-hidden"},hk={class:"min-w-0 flex-1 overflow-y-auto p-4 scrollbar-thin sm:p-6"},fk=vs({__name:"AppLayout",setup(t){const e=Xc(),n=qt(!1),r=qt(!1);function s(){if(window.innerWidth<1024){r.value=!r.value;return}n.value=!n.value}function i(){r.value=!1}return(o,c)=>{const l=Ao("router-view");return ve(),ke("div",lk,[Je(N1,{collapsed:n.value,"mobile-open":r.value,onToggle:s,onCloseMobile:i},null,8,["collapsed","mobile-open"]),te("div",uk,[Je(rk,{collapsed:n.value,user:ct(e).currentUser,onToggleSidebar:s},null,8,["collapsed","user"]),te("main",hk,[Je(ck),Je(l)])])])}}}),dk=vs({__name:"App",setup(t){const e=Xc(),n=Ac(),r=qt(!1);return Pr(()=>n.meta.requiresAuth,s=>{r.value=s!==!1},{immediate:!0}),_c(()=>{e.init()}),(s,i)=>{const o=Ao("router-view");return r.value&&ct(e).isAuthenticated?(ve(),hs(fk,{key:0},{default:Rr(()=>[Je(o)]),_:1})):(ve(),hs(o,{key:1}))}}}),pk="modulepreload",gk=function(t){return"/"+t},Ng={},yn=function(e,n,r){let s=Promise.resolve();if(n&&n.length>0){let o=function(u){return Promise.all(u.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),l=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));s=o(n.map(u=>{if(u=gk(u),u in Ng)return;Ng[u]=!0;const f=u.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const g=document.createElement("link");if(g.rel=f?"stylesheet":pk,f||(g.as="script"),g.crossOrigin="",g.href=u,l&&g.setAttribute("nonce",l),document.head.appendChild(g),f)return new Promise((_,S)=>{g.addEventListener("load",_),g.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${u}`)))})}))}function i(o){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=o,window.dispatchEvent(c),!c.defaultPrevented)throw o}return s.then(o=>{for(const c of o||[])c.status==="rejected"&&i(c.reason);return e().catch(i)})},Nv=FI({history:mI(),routes:[{path:"/",redirect:"/dashboard"},{path:"/login",name:"Login",component:()=>yn(()=>import("./LoginView-DlgffFDi.js"),[]),meta:{requiresAuth:!1}},{path:"/dashboard",name:"Dashboard",component:()=>yn(()=>import("./DashboardView-Cj0OOfUk.js"),__vite__mapDeps([0,1,2])),meta:{requiresAuth:!0}},{path:"/projects",name:"Projects",component:()=>yn(()=>import("./ProjectsView-BuXs7pQ0.js"),[]),meta:{requiresAuth:!0}},{path:"/projects/:id",name:"ProjectHome",component:()=>yn(()=>import("./PageAuditsView-C2dEQjK8.js"),__vite__mapDeps([3,1,4])),meta:{requiresAuth:!0}},{path:"/projects/:id/overview",redirect:t=>({name:"ProjectHome",params:{id:t.params.id}})},{path:"/projects/:id/audit/:auditId",name:"AuditResults",component:()=>yn(()=>import("./AuditResultsView-D4LpxWJL.js"),[]),meta:{requiresAuth:!0}},{path:"/projects/:id/bugs",name:"BugList",component:()=>yn(()=>import("./BugListView-Di-z60zg.js"),__vite__mapDeps([5,6])),meta:{requiresAuth:!0}},{path:"/projects/:id/test-cases",name:"TestCases",component:()=>yn(()=>import("./TestCasesView-CI9_XP1c.js"),__vite__mapDeps([7,6])),meta:{requiresAuth:!0}},{path:"/projects/:id/pages",redirect:t=>({name:"ProjectHome",params:{id:t.params.id}})},{path:"/projects/:id/history",name:"TrendHistory",component:()=>yn(()=>import("./TrendHistoryView-DDXe1wEH.js"),[]),meta:{requiresAuth:!0}},{path:"/notifications",name:"Notifications",component:()=>yn(()=>import("./NotificationsView-BDoOjjsf.js"),[]),meta:{requiresAuth:!0}},{path:"/settings/profile",name:"ProfileSettings",component:()=>yn(()=>import("./ProfileSettingsView-mCRkG0h4.js"),[]),meta:{requiresAuth:!0}}]});Nv.beforeEach(async(t,e,n)=>{t.meta.requiresAuth!==!1?(await Er.authStateReady(),Er.currentUser?n():n("/login")):n()});const Xh=Cw(dk);Xh.use(Dw());Xh.use(Nv);Xh.mount("#app");export{D1 as $,qc as A,ni as B,An as C,Bt as D,yv as E,Ot as F,$t as G,Ln as H,HP as I,Ao as J,Rk as K,wk as L,Tk as M,ct as N,Ck as O,kk as P,Vn as Q,Ac as R,Nk as S,vk as T,Sk as U,Er as V,Vk as W,Dk as X,Ak as Y,Pk as Z,xk as _,te as a,Wu as a0,DE as a1,KT as a2,Ce as a3,ju as a4,Bu as a5,l1 as a6,mk as b,ke as c,vs as d,Vt as e,oo as f,Xc as g,Pr as h,_c as i,yc as j,hs as k,Je as l,Rr as m,_k as n,ve as o,Tt as p,yk as q,qt as r,Na as s,ot as t,UI as u,Ek as v,Ik as w,kv as x,bt as y,Jc as z};
