(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function Sc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const wt={},kr=[],Jn=()=>{},fh=()=>!1,ta=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),bc=n=>n.startsWith("onUpdate:"),rn=Object.assign,Mc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Dp=Object.prototype.hasOwnProperty,bt=(n,e)=>Dp.call(n,e),lt=Array.isArray,Gr=n=>na(n)==="[object Map]",hh=n=>na(n)==="[object Set]",ct=n=>typeof n=="function",kt=n=>typeof n=="string",Ki=n=>typeof n=="symbol",Ft=n=>n!==null&&typeof n=="object",dh=n=>(Ft(n)||ct(n))&&ct(n.then)&&ct(n.catch),ph=Object.prototype.toString,na=n=>ph.call(n),Ip=n=>na(n).slice(8,-1),mh=n=>na(n)==="[object Object]",Ec=n=>kt(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,As=Sc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ia=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Up=/-\w/g,ji=ia(n=>n.replace(Up,e=>e.slice(1).toUpperCase())),Np=/\B([A-Z])/g,_r=ia(n=>n.replace(Np,"-$1").toLowerCase()),xh=ia(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ma=ia(n=>n?`on${xh(n)}`:""),Xi=(n,e)=>!Object.is(n,e),Oo=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},gh=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Tc=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Tu;const ra=()=>Tu||(Tu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ac(n){if(lt(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=kt(i)?zp(i):Ac(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(kt(n)||Ft(n))return n}const Fp=/;(?![^(]*\))/g,Op=/:([^]+)/,Bp=/\/\*[^]*?\*\//g;function zp(n){const e={};return n.replace(Bp,"").split(Fp).forEach(t=>{if(t){const i=t.split(Op);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Wr(n){let e="";if(kt(n))e=n;else if(lt(n))for(let t=0;t<n.length;t++){const i=Wr(n[t]);i&&(e+=i+" ")}else if(Ft(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Vp="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Hp=Sc(Vp);function _h(n){return!!n||n===""}const vh=n=>!!(n&&n.__v_isRef===!0),zr=n=>kt(n)?n:n==null?"":lt(n)||Ft(n)&&(n.toString===ph||!ct(n.toString))?vh(n)?zr(n.value):JSON.stringify(n,yh,2):String(n),yh=(n,e)=>vh(e)?yh(n,e.value):Gr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[i,r],s)=>(t[Ea(i,s)+" =>"]=r,t),{})}:hh(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ea(t))}:Ki(e)?Ea(e):Ft(e)&&!lt(e)&&!mh(e)?String(e):e,Ea=(n,e="")=>{var t;return Ki(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};let mn;class kp{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=mn,!e&&mn&&(this.index=(mn.scopes||(mn.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=mn;try{return mn=this,e()}finally{mn=t}}}on(){++this._on===1&&(this.prevScope=mn,mn=this)}off(){this._on>0&&--this._on===0&&(mn=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(this.effects.length=0,t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Gp(){return mn}let Lt;const Ta=new WeakSet;class Sh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,mn&&mn.active&&mn.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ta.has(this)&&(Ta.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Mh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Au(this),Eh(this);const e=Lt,t=kn;Lt=this,kn=!0;try{return this.fn()}finally{Th(this),Lt=e,kn=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Rc(e);this.deps=this.depsTail=void 0,Au(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ta.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){_l(this)&&this.run()}get dirty(){return _l(this)}}let bh=0,ws,Cs;function Mh(n,e=!1){if(n.flags|=8,e){n.next=Cs,Cs=n;return}n.next=ws,ws=n}function wc(){bh++}function Cc(){if(--bh>0)return;if(Cs){let e=Cs;for(Cs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;ws;){let e=ws;for(ws=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Eh(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Th(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Rc(i),Wp(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function _l(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Ah(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Ah(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Os)||(n.globalVersion=Os,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!_l(n))))return;n.flags|=2;const e=n.dep,t=Lt,i=kn;Lt=n,kn=!0;try{Eh(n);const r=n.fn(n._value);(e.version===0||Xi(r,n._value))&&(n.flags|=128,n._value=r,e.version++)}catch(r){throw e.version++,r}finally{Lt=t,kn=i,Th(n),n.flags&=-3}}function Rc(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Rc(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Wp(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let kn=!0;const wh=[];function Ei(){wh.push(kn),kn=!1}function Ti(){const n=wh.pop();kn=n===void 0?!0:n}function Au(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Lt;Lt=void 0;try{e()}finally{Lt=t}}}let Os=0;class Xp{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pc{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Lt||!kn||Lt===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Lt)t=this.activeLink=new Xp(Lt,this),Lt.deps?(t.prevDep=Lt.depsTail,Lt.depsTail.nextDep=t,Lt.depsTail=t):Lt.deps=Lt.depsTail=t,Ch(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=Lt.depsTail,t.nextDep=void 0,Lt.depsTail.nextDep=t,Lt.depsTail=t,Lt.deps===t&&(Lt.deps=i)}return t}trigger(e){this.version++,Os++,this.notify(e)}notify(e){wc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Cc()}}}function Ch(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Ch(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const vl=new WeakMap,dr=Symbol(""),yl=Symbol(""),Bs=Symbol("");function tn(n,e,t){if(kn&&Lt){let i=vl.get(n);i||vl.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Pc),r.map=i,r.key=t),r.track()}}function xi(n,e,t,i,r,s){const o=vl.get(n);if(!o){Os++;return}const a=c=>{c&&c.trigger()};if(wc(),e==="clear")o.forEach(a);else{const c=lt(n),u=c&&Ec(t);if(c&&t==="length"){const f=Number(i);o.forEach((h,m)=>{(m==="length"||m===Bs||!Ki(m)&&m>=f)&&a(h)})}else switch((t!==void 0||o.has(void 0))&&a(o.get(t)),u&&a(o.get(Bs)),e){case"add":c?u&&a(o.get("length")):(a(o.get(dr)),Gr(n)&&a(o.get(yl)));break;case"delete":c||(a(o.get(dr)),Gr(n)&&a(o.get(yl)));break;case"set":Gr(n)&&a(o.get(dr));break}}Cc()}function Er(n){const e=St(n);return e===n?e:(tn(e,"iterate",Bs),Un(n)?e:e.map(Gn))}function sa(n){return tn(n=St(n),"iterate",Bs),n}function zi(n,e){return Ai(n)?pr(n)?Kr(Gn(e)):Kr(e):Gn(e)}const qp={__proto__:null,[Symbol.iterator](){return Aa(this,Symbol.iterator,n=>zi(this,n))},concat(...n){return Er(this).concat(...n.map(e=>lt(e)?Er(e):e))},entries(){return Aa(this,"entries",n=>(n[1]=zi(this,n[1]),n))},every(n,e){return oi(this,"every",n,e,void 0,arguments)},filter(n,e){return oi(this,"filter",n,e,t=>t.map(i=>zi(this,i)),arguments)},find(n,e){return oi(this,"find",n,e,t=>zi(this,t),arguments)},findIndex(n,e){return oi(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return oi(this,"findLast",n,e,t=>zi(this,t),arguments)},findLastIndex(n,e){return oi(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return oi(this,"forEach",n,e,void 0,arguments)},includes(...n){return wa(this,"includes",n)},indexOf(...n){return wa(this,"indexOf",n)},join(n){return Er(this).join(n)},lastIndexOf(...n){return wa(this,"lastIndexOf",n)},map(n,e){return oi(this,"map",n,e,void 0,arguments)},pop(){return ps(this,"pop")},push(...n){return ps(this,"push",n)},reduce(n,...e){return wu(this,"reduce",n,e)},reduceRight(n,...e){return wu(this,"reduceRight",n,e)},shift(){return ps(this,"shift")},some(n,e){return oi(this,"some",n,e,void 0,arguments)},splice(...n){return ps(this,"splice",n)},toReversed(){return Er(this).toReversed()},toSorted(n){return Er(this).toSorted(n)},toSpliced(...n){return Er(this).toSpliced(...n)},unshift(...n){return ps(this,"unshift",n)},values(){return Aa(this,"values",n=>zi(this,n))}};function Aa(n,e,t){const i=sa(n),r=i[e]();return i!==n&&!Un(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.done||(s.value=t(s.value)),s}),r}const jp=Array.prototype;function oi(n,e,t,i,r,s){const o=sa(n),a=o!==n&&!Un(n),c=o[e];if(c!==jp[e]){const h=c.apply(n,s);return a?Gn(h):h}let u=t;o!==n&&(a?u=function(h,m){return t.call(this,zi(n,h),m,n)}:t.length>2&&(u=function(h,m){return t.call(this,h,m,n)}));const f=c.call(o,u,i);return a&&r?r(f):f}function wu(n,e,t,i){const r=sa(n);let s=t;return r!==n&&(Un(n)?t.length>3&&(s=function(o,a,c){return t.call(this,o,a,c,n)}):s=function(o,a,c){return t.call(this,o,zi(n,a),c,n)}),r[e](s,...i)}function wa(n,e,t){const i=St(n);tn(i,"iterate",Bs);const r=i[e](...t);return(r===-1||r===!1)&&Uc(t[0])?(t[0]=St(t[0]),i[e](...t)):r}function ps(n,e,t=[]){Ei(),wc();const i=St(n)[e].apply(n,t);return Cc(),Ti(),i}const Yp=Sc("__proto__,__v_isRef,__isVue"),Rh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Ki));function $p(n){Ki(n)||(n=String(n));const e=St(this);return tn(e,"has",n),e.hasOwnProperty(n)}class Ph{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){if(t==="__v_skip")return e.__v_skip;const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?s0:Uh:s?Ih:Dh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=lt(e);if(!r){let c;if(o&&(c=qp[t]))return c;if(t==="hasOwnProperty")return $p}const a=Reflect.get(e,t,nn(e)?e:i);if((Ki(t)?Rh.has(t):Yp(t))||(r||tn(e,"get",t),s))return a;if(nn(a)){const c=o&&Ec(t)?a:a.value;return r&&Ft(c)?bl(c):c}return Ft(a)?r?bl(a):Dc(a):a}}class Lh extends Ph{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];const o=lt(e)&&Ec(t);if(!this._isShallow){const u=Ai(s);if(!Un(i)&&!Ai(i)&&(s=St(s),i=St(i)),!o&&nn(s)&&!nn(i))return u||(s.value=i),!0}const a=o?Number(t)<e.length:bt(e,t),c=Reflect.set(e,t,i,nn(e)?e:r);return e===St(r)&&(a?Xi(i,s)&&xi(e,"set",t,i):xi(e,"add",t,i)),c}deleteProperty(e,t){const i=bt(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&xi(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!Ki(t)||!Rh.has(t))&&tn(e,"has",t),i}ownKeys(e){return tn(e,"iterate",lt(e)?"length":dr),Reflect.ownKeys(e)}}class Kp extends Ph{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Jp=new Lh,Zp=new Kp,Qp=new Lh(!0);const Sl=n=>n,lo=n=>Reflect.getPrototypeOf(n);function e0(n,e,t){return function(...i){const r=this.__v_raw,s=St(r),o=Gr(s),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=r[n](...i),f=t?Sl:e?Kr:Gn;return!e&&tn(s,"iterate",c?yl:dr),{next(){const{value:h,done:m}=u.next();return m?{value:h,done:m}:{value:a?[f(h[0]),f(h[1])]:f(h),done:m}},[Symbol.iterator](){return this}}}}function co(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function t0(n,e){const t={get(r){const s=this.__v_raw,o=St(s),a=St(r);n||(Xi(r,a)&&tn(o,"get",r),tn(o,"get",a));const{has:c}=lo(o),u=e?Sl:n?Kr:Gn;if(c.call(o,r))return u(s.get(r));if(c.call(o,a))return u(s.get(a));s!==o&&s.get(r)},get size(){const r=this.__v_raw;return!n&&tn(St(r),"iterate",dr),r.size},has(r){const s=this.__v_raw,o=St(s),a=St(r);return n||(Xi(r,a)&&tn(o,"has",r),tn(o,"has",a)),r===a?s.has(r):s.has(r)||s.has(a)},forEach(r,s){const o=this,a=o.__v_raw,c=St(a),u=e?Sl:n?Kr:Gn;return!n&&tn(c,"iterate",dr),a.forEach((f,h)=>r.call(s,u(f),u(h),o))}};return rn(t,n?{add:co("add"),set:co("set"),delete:co("delete"),clear:co("clear")}:{add(r){!e&&!Un(r)&&!Ai(r)&&(r=St(r));const s=St(this);return lo(s).has.call(s,r)||(s.add(r),xi(s,"add",r,r)),this},set(r,s){!e&&!Un(s)&&!Ai(s)&&(s=St(s));const o=St(this),{has:a,get:c}=lo(o);let u=a.call(o,r);u||(r=St(r),u=a.call(o,r));const f=c.call(o,r);return o.set(r,s),u?Xi(s,f)&&xi(o,"set",r,s):xi(o,"add",r,s),this},delete(r){const s=St(this),{has:o,get:a}=lo(s);let c=o.call(s,r);c||(r=St(r),c=o.call(s,r)),a&&a.call(s,r);const u=s.delete(r);return c&&xi(s,"delete",r,void 0),u},clear(){const r=St(this),s=r.size!==0,o=r.clear();return s&&xi(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=e0(r,n,e)}),t}function Lc(n,e){const t=t0(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(bt(t,r)&&r in i?t:i,r,s)}const n0={get:Lc(!1,!1)},i0={get:Lc(!1,!0)},r0={get:Lc(!0,!1)};const Dh=new WeakMap,Ih=new WeakMap,Uh=new WeakMap,s0=new WeakMap;function o0(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function a0(n){return n.__v_skip||!Object.isExtensible(n)?0:o0(Ip(n))}function Dc(n){return Ai(n)?n:Ic(n,!1,Jp,n0,Dh)}function l0(n){return Ic(n,!1,Qp,i0,Ih)}function bl(n){return Ic(n,!0,Zp,r0,Uh)}function Ic(n,e,t,i,r){if(!Ft(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=a0(n);if(s===0)return n;const o=r.get(n);if(o)return o;const a=new Proxy(n,s===2?i:t);return r.set(n,a),a}function pr(n){return Ai(n)?pr(n.__v_raw):!!(n&&n.__v_isReactive)}function Ai(n){return!!(n&&n.__v_isReadonly)}function Un(n){return!!(n&&n.__v_isShallow)}function Uc(n){return n?!!n.__v_raw:!1}function St(n){const e=n&&n.__v_raw;return e?St(e):n}function c0(n){return!bt(n,"__v_skip")&&Object.isExtensible(n)&&gh(n,"__v_skip",!0),n}const Gn=n=>Ft(n)?Dc(n):n,Kr=n=>Ft(n)?bl(n):n;function nn(n){return n?n.__v_isRef===!0:!1}function Di(n){return u0(n,!1)}function u0(n,e){return nn(n)?n:new f0(n,e)}class f0{constructor(e,t){this.dep=new Pc,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:St(e),this._value=t?e:Gn(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Un(e)||Ai(e);e=i?e:St(e),Xi(e,t)&&(this._rawValue=e,this._value=i?e:Gn(e),this.dep.trigger())}}function h0(n){return nn(n)?n.value:n}const d0={get:(n,e,t)=>e==="__v_raw"?n:h0(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return nn(r)&&!nn(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Nh(n){return pr(n)?n:new Proxy(n,d0)}class p0{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Pc(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Os-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&Lt!==this)return Mh(this,!0),!0}get value(){const e=this.dep.track();return Ah(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function m0(n,e,t=!1){let i,r;return ct(n)?i=n:(i=n.get,r=n.set),new p0(i,r,t)}const uo={},qo=new WeakMap;let lr;function x0(n,e=!1,t=lr){if(t){let i=qo.get(t);i||qo.set(t,i=[]),i.push(n)}}function g0(n,e,t=wt){const{immediate:i,deep:r,once:s,scheduler:o,augmentJob:a,call:c}=t,u=M=>r?M:Un(M)||r===!1||r===0?gi(M,1):gi(M);let f,h,m,x,y=!1,E=!1;if(nn(n)?(h=()=>n.value,y=Un(n)):pr(n)?(h=()=>u(n),y=!0):lt(n)?(E=!0,y=n.some(M=>pr(M)||Un(M)),h=()=>n.map(M=>{if(nn(M))return M.value;if(pr(M))return u(M);if(ct(M))return c?c(M,2):M()})):ct(n)?e?h=c?()=>c(n,2):n:h=()=>{if(m){Ei();try{m()}finally{Ti()}}const M=lr;lr=f;try{return c?c(n,3,[x]):n(x)}finally{lr=M}}:h=Jn,e&&r){const M=h,z=r===!0?1/0:r;h=()=>gi(M(),z)}const _=Gp(),p=()=>{f.stop(),_&&_.active&&Mc(_.effects,f)};if(s&&e){const M=e;e=(...z)=>{M(...z),p()}}let L=E?new Array(n.length).fill(uo):uo;const b=M=>{if(!(!(f.flags&1)||!f.dirty&&!M))if(e){const z=f.run();if(r||y||(E?z.some((N,V)=>Xi(N,L[V])):Xi(z,L))){m&&m();const N=lr;lr=f;try{const V=[z,L===uo?void 0:E&&L[0]===uo?[]:L,x];L=z,c?c(e,3,V):e(...V)}finally{lr=N}}}else f.run()};return a&&a(b),f=new Sh(h),f.scheduler=o?()=>o(b,!1):b,x=M=>x0(M,!1,f),m=f.onStop=()=>{const M=qo.get(f);if(M){if(c)c(M,4);else for(const z of M)z();qo.delete(f)}},e?i?b(!0):L=f.run():o?o(b.bind(null,!0),!0):f.run(),p.pause=f.pause.bind(f),p.resume=f.resume.bind(f),p.stop=p,p}function gi(n,e=1/0,t){if(e<=0||!Ft(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,nn(n))gi(n.value,e,t);else if(lt(n))for(let i=0;i<n.length;i++)gi(n[i],e,t);else if(hh(n)||Gr(n))n.forEach(i=>{gi(i,e,t)});else if(mh(n)){for(const i in n)gi(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&gi(n[i],e,t)}return n}function Ks(n,e,t,i){try{return i?n(...i):n()}catch(r){oa(r,e,t)}}function Qn(n,e,t,i){if(ct(n)){const r=Ks(n,e,t,i);return r&&dh(r)&&r.catch(s=>{oa(s,e,t)}),r}if(lt(n)){const r=[];for(let s=0;s<n.length;s++)r.push(Qn(n[s],e,t,i));return r}}function oa(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||wt;if(e){let a=e.parent;const c=e.proxy,u=`https://vuejs.org/error-reference/#runtime-${t}`;for(;a;){const f=a.ec;if(f){for(let h=0;h<f.length;h++)if(f[h](n,c,u)===!1)return}a=a.parent}if(s){Ei(),Ks(s,null,10,[n,c,u]),Ti();return}}_0(n,t,r,i,o)}function _0(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const cn=[];let qn=-1;const Xr=[];let Vi=null,Vr=0;const Fh=Promise.resolve();let jo=null;function v0(n){const e=jo||Fh;return n?e.then(this?n.bind(this):n):e}function y0(n){let e=qn+1,t=cn.length;for(;e<t;){const i=e+t>>>1,r=cn[i],s=zs(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Nc(n){if(!(n.flags&1)){const e=zs(n),t=cn[cn.length-1];!t||!(n.flags&2)&&e>=zs(t)?cn.push(n):cn.splice(y0(e),0,n),n.flags|=1,Oh()}}function Oh(){jo||(jo=Fh.then(zh))}function S0(n){lt(n)?Xr.push(...n):Vi&&n.id===-1?Vi.splice(Vr+1,0,n):n.flags&1||(Xr.push(n),n.flags|=1),Oh()}function Cu(n,e,t=qn+1){for(;t<cn.length;t++){const i=cn[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;cn.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Bh(n){if(Xr.length){const e=[...new Set(Xr)].sort((t,i)=>zs(t)-zs(i));if(Xr.length=0,Vi){Vi.push(...e);return}for(Vi=e,Vr=0;Vr<Vi.length;Vr++){const t=Vi[Vr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Vi=null,Vr=0}}const zs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function zh(n){try{for(qn=0;qn<cn.length;qn++){const e=cn[qn];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Ks(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;qn<cn.length;qn++){const e=cn[qn];e&&(e.flags&=-2)}qn=-1,cn.length=0,Bh(),jo=null,(cn.length||Xr.length)&&zh()}}let Dn=null,Vh=null;function Yo(n){const e=Dn;return Dn=n,Vh=n&&n.type.__scopeId||null,e}function b0(n,e=Dn,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Bu(-1);const s=Yo(e);let o;try{o=n(...r)}finally{Yo(s),i._d&&Bu(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function M0(n,e){if(Dn===null)return n;const t=ua(Dn),i=n.dirs||(n.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,c=wt]=e[r];s&&(ct(s)&&(s={mounted:s,updated:s}),s.deep&&gi(o),i.push({dir:s,instance:t,value:o,oldValue:void 0,arg:a,modifiers:c}))}return n}function Qi(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let c=a.dir[i];c&&(Ei(),Qn(c,t,8,[n.el,a,n,e]),Ti())}}const E0=Symbol("_vte"),T0=n=>n.__isTeleport,A0=Symbol("_leaveCb");function Fc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Fc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Hh(n,e){return ct(n)?rn({name:n.name},e,{setup:n}):n}function kh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const $o=new WeakMap;function Rs(n,e,t,i,r=!1){if(lt(n)){n.forEach((y,E)=>Rs(y,e&&(lt(e)?e[E]:e),t,i,r));return}if(Ps(i)&&!r){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Rs(n,e,t,i.component.subTree);return}const s=i.shapeFlag&4?ua(i.component):i.el,o=r?null:s,{i:a,r:c}=n,u=e&&e.r,f=a.refs===wt?a.refs={}:a.refs,h=a.setupState,m=St(h),x=h===wt?fh:y=>bt(m,y);if(u!=null&&u!==c){if(Ru(e),kt(u))f[u]=null,x(u)&&(h[u]=null);else if(nn(u)){u.value=null;const y=e;y.k&&(f[y.k]=null)}}if(ct(c))Ks(c,a,12,[o,f]);else{const y=kt(c),E=nn(c);if(y||E){const _=()=>{if(n.f){const p=y?x(c)?h[c]:f[c]:c.value;if(r)lt(p)&&Mc(p,s);else if(lt(p))p.includes(s)||p.push(s);else if(y)f[c]=[s],x(c)&&(h[c]=f[c]);else{const L=[s];c.value=L,n.k&&(f[n.k]=L)}}else y?(f[c]=o,x(c)&&(h[c]=o)):E&&(c.value=o,n.k&&(f[n.k]=o))};if(o){const p=()=>{_(),$o.delete(n)};p.id=-1,$o.set(n,p),Mn(p,t)}else Ru(n),_()}}}function Ru(n){const e=$o.get(n);e&&(e.flags|=8,$o.delete(n))}ra().requestIdleCallback;ra().cancelIdleCallback;const Ps=n=>!!n.type.__asyncLoader,Gh=n=>n.type.__isKeepAlive;function w0(n,e){Wh(n,"a",e)}function C0(n,e){Wh(n,"da",e)}function Wh(n,e,t=un){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(aa(e,i,t),t){let r=t.parent;for(;r&&r.parent;)Gh(r.parent.vnode)&&R0(i,e,t,r),r=r.parent}}function R0(n,e,t,i){const r=aa(e,n,i,!0);jh(()=>{Mc(i[e],r)},t)}function aa(n,e,t=un,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...o)=>{Ei();const a=Js(t),c=Qn(e,t,n,o);return a(),Ti(),c});return i?r.unshift(s):r.push(s),s}}const Ci=n=>(e,t=un)=>{(!Hs||n==="sp")&&aa(n,(...i)=>e(...i),t)},P0=Ci("bm"),Xh=Ci("m"),L0=Ci("bu"),D0=Ci("u"),qh=Ci("bum"),jh=Ci("um"),I0=Ci("sp"),U0=Ci("rtg"),N0=Ci("rtc");function F0(n,e=un){aa("ec",n,e)}const O0=Symbol.for("v-ndc");function B0(n,e,t,i){let r;const s=t,o=lt(n);if(o||kt(n)){const a=o&&pr(n);let c=!1,u=!1;a&&(c=!Un(n),u=Ai(n),n=sa(n)),r=new Array(n.length);for(let f=0,h=n.length;f<h;f++)r[f]=e(c?u?Kr(Gn(n[f])):Gn(n[f]):n[f],f,void 0,s)}else if(typeof n=="number"){r=new Array(n);for(let a=0;a<n;a++)r[a]=e(a+1,a,void 0,s)}else if(Ft(n))if(n[Symbol.iterator])r=Array.from(n,(a,c)=>e(a,c,void 0,s));else{const a=Object.keys(n);r=new Array(a.length);for(let c=0,u=a.length;c<u;c++){const f=a[c];r[c]=e(n[f],f,c,s)}}else r=[];return r}const Ml=n=>n?md(n)?ua(n):Ml(n.parent):null,Ls=rn(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Ml(n.parent),$root:n=>Ml(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>$h(n),$forceUpdate:n=>n.f||(n.f=()=>{Nc(n.update)}),$nextTick:n=>n.n||(n.n=v0.bind(n.proxy)),$watch:n=>K0.bind(n)}),Ca=(n,e)=>n!==wt&&!n.__isScriptSetup&&bt(n,e),z0={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:c}=n;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Ca(i,e))return o[e]=1,i[e];if(r!==wt&&bt(r,e))return o[e]=2,r[e];if(bt(s,e))return o[e]=3,s[e];if(t!==wt&&bt(t,e))return o[e]=4,t[e];El&&(o[e]=0)}}const u=Ls[e];let f,h;if(u)return e==="$attrs"&&tn(n.attrs,"get",""),u(n);if((f=a.__cssModules)&&(f=f[e]))return f;if(t!==wt&&bt(t,e))return o[e]=4,t[e];if(h=c.config.globalProperties,bt(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Ca(r,e)?(r[e]=t,!0):i!==wt&&bt(i,e)?(i[e]=t,!0):bt(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,props:s,type:o}},a){let c;return!!(t[a]||n!==wt&&a[0]!=="$"&&bt(n,a)||Ca(e,a)||bt(s,a)||bt(i,a)||bt(Ls,a)||bt(r.config.globalProperties,a)||(c=o.__cssModules)&&c[a])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:bt(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Pu(n){return lt(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let El=!0;function V0(n){const e=$h(n),t=n.proxy,i=n.ctx;El=!1,e.beforeCreate&&Lu(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:o,watch:a,provide:c,inject:u,created:f,beforeMount:h,mounted:m,beforeUpdate:x,updated:y,activated:E,deactivated:_,beforeDestroy:p,beforeUnmount:L,destroyed:b,unmounted:M,render:z,renderTracked:N,renderTriggered:V,errorCaptured:j,serverPrefetch:D,expose:C,inheritAttrs:q,components:ee,directives:fe,filters:pe}=e;if(u&&H0(u,i,null),o)for(const ae in o){const Y=o[ae];ct(Y)&&(i[ae]=Y.bind(t))}if(r){const ae=r.call(t,t);Ft(ae)&&(n.data=Dc(ae))}if(El=!0,s)for(const ae in s){const Y=s[ae],Se=ct(Y)?Y.bind(t,t):ct(Y.get)?Y.get.bind(t,t):Jn,Ee=!ct(Y)&&ct(Y.set)?Y.set.bind(t):Jn,Ue=Pm({get:Se,set:Ee});Object.defineProperty(i,ae,{enumerable:!0,configurable:!0,get:()=>Ue.value,set:we=>Ue.value=we})}if(a)for(const ae in a)Yh(a[ae],i,t,ae);if(c){const ae=ct(c)?c.call(t):c;Reflect.ownKeys(ae).forEach(Y=>{j0(Y,ae[Y])})}f&&Lu(f,n,"c");function he(ae,Y){lt(Y)?Y.forEach(Se=>ae(Se.bind(t))):Y&&ae(Y.bind(t))}if(he(P0,h),he(Xh,m),he(L0,x),he(D0,y),he(w0,E),he(C0,_),he(F0,j),he(N0,N),he(U0,V),he(qh,L),he(jh,M),he(I0,D),lt(C))if(C.length){const ae=n.exposed||(n.exposed={});C.forEach(Y=>{Object.defineProperty(ae,Y,{get:()=>t[Y],set:Se=>t[Y]=Se,enumerable:!0})})}else n.exposed||(n.exposed={});z&&n.render===Jn&&(n.render=z),q!=null&&(n.inheritAttrs=q),ee&&(n.components=ee),fe&&(n.directives=fe),D&&kh(n)}function H0(n,e,t=Jn){lt(n)&&(n=Tl(n));for(const i in n){const r=n[i];let s;Ft(r)?"default"in r?s=Bo(r.from||i,r.default,!0):s=Bo(r.from||i):s=Bo(r),nn(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function Lu(n,e,t){Qn(lt(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Yh(n,e,t,i){let r=i.includes(".")?Zh(t,i):()=>t[i];if(kt(n)){const s=e[n];ct(s)&&Ra(r,s)}else if(ct(n))Ra(r,n.bind(t));else if(Ft(n))if(lt(n))n.forEach(s=>Yh(s,e,t,i));else{const s=ct(n.handler)?n.handler.bind(t):e[n.handler];ct(s)&&Ra(r,s,n)}}function $h(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=n.appContext,a=s.get(e);let c;return a?c=a:!r.length&&!t&&!i?c=e:(c={},r.length&&r.forEach(u=>Ko(c,u,o,!0)),Ko(c,e,o)),Ft(e)&&s.set(e,c),c}function Ko(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Ko(n,s,t,!0),r&&r.forEach(o=>Ko(n,o,t,!0));for(const o in e)if(!(i&&o==="expose")){const a=k0[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const k0={data:Du,props:Iu,emits:Iu,methods:Ms,computed:Ms,beforeCreate:an,created:an,beforeMount:an,mounted:an,beforeUpdate:an,updated:an,beforeDestroy:an,beforeUnmount:an,destroyed:an,unmounted:an,activated:an,deactivated:an,errorCaptured:an,serverPrefetch:an,components:Ms,directives:Ms,watch:W0,provide:Du,inject:G0};function Du(n,e){return e?n?function(){return rn(ct(n)?n.call(this,this):n,ct(e)?e.call(this,this):e)}:e:n}function G0(n,e){return Ms(Tl(n),Tl(e))}function Tl(n){if(lt(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function an(n,e){return n?[...new Set([].concat(n,e))]:e}function Ms(n,e){return n?rn(Object.create(null),n,e):e}function Iu(n,e){return n?lt(n)&&lt(e)?[...new Set([...n,...e])]:rn(Object.create(null),Pu(n),Pu(e??{})):e}function W0(n,e){if(!n)return e;if(!e)return n;const t=rn(Object.create(null),n);for(const i in e)t[i]=an(n[i],e[i]);return t}function Kh(){return{app:null,config:{isNativeTag:fh,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let X0=0;function q0(n,e){return function(i,r=null){ct(i)||(i=rn({},i)),r!=null&&!Ft(r)&&(r=null);const s=Kh(),o=new WeakSet,a=[];let c=!1;const u=s.app={_uid:X0++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Lm,get config(){return s.config},set config(f){},use(f,...h){return o.has(f)||(f&&ct(f.install)?(o.add(f),f.install(u,...h)):ct(f)&&(o.add(f),f(u,...h))),u},mixin(f){return s.mixins.includes(f)||s.mixins.push(f),u},component(f,h){return h?(s.components[f]=h,u):s.components[f]},directive(f,h){return h?(s.directives[f]=h,u):s.directives[f]},mount(f,h,m){if(!c){const x=u._ceVNode||Si(i,r);return x.appContext=s,m===!0?m="svg":m===!1&&(m=void 0),n(x,f,m),c=!0,u._container=f,f.__vue_app__=u,ua(x.component)}},onUnmount(f){a.push(f)},unmount(){c&&(Qn(a,u._instance,16),n(null,u._container),delete u._container.__vue_app__)},provide(f,h){return s.provides[f]=h,u},runWithContext(f){const h=qr;qr=u;try{return f()}finally{qr=h}}};return u}}let qr=null;function j0(n,e){if(un){let t=un.provides;const i=un.parent&&un.parent.provides;i===t&&(t=un.provides=Object.create(i)),t[n]=e}}function Bo(n,e,t=!1){const i=Em();if(i||qr){let r=qr?qr._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&ct(e)?e.call(i&&i.proxy):e}}const Y0=Symbol.for("v-scx"),$0=()=>Bo(Y0);function Ra(n,e,t){return Jh(n,e,t)}function Jh(n,e,t=wt){const{immediate:i,deep:r,flush:s,once:o}=t,a=rn({},t),c=e&&i||!e&&s!=="post";let u;if(Hs){if(s==="sync"){const x=$0();u=x.__watcherHandles||(x.__watcherHandles=[])}else if(!c){const x=()=>{};return x.stop=Jn,x.resume=Jn,x.pause=Jn,x}}const f=un;a.call=(x,y,E)=>Qn(x,f,y,E);let h=!1;s==="post"?a.scheduler=x=>{Mn(x,f&&f.suspense)}:s!=="sync"&&(h=!0,a.scheduler=(x,y)=>{y?x():Nc(x)}),a.augmentJob=x=>{e&&(x.flags|=4),h&&(x.flags|=2,f&&(x.id=f.uid,x.i=f))};const m=g0(n,e,a);return Hs&&(u?u.push(m):c&&m()),m}function K0(n,e,t){const i=this.proxy,r=kt(n)?n.includes(".")?Zh(i,n):()=>i[n]:n.bind(i,i);let s;ct(e)?s=e:(s=e.handler,t=e);const o=Js(this),a=Jh(r,s.bind(i),t);return o(),a}function Zh(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const J0=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${ji(e)}Modifiers`]||n[`${_r(e)}Modifiers`];function Z0(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||wt;let r=t;const s=e.startsWith("update:"),o=s&&J0(i,e.slice(7));o&&(o.trim&&(r=t.map(f=>kt(f)?f.trim():f)),o.number&&(r=t.map(Tc)));let a,c=i[a=Ma(e)]||i[a=Ma(ji(e))];!c&&s&&(c=i[a=Ma(_r(e))]),c&&Qn(c,n,6,r);const u=i[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Qn(u,n,6,r)}}const Q0=new WeakMap;function Qh(n,e,t=!1){const i=t?Q0:e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let o={},a=!1;if(!ct(n)){const c=u=>{const f=Qh(u,e,!0);f&&(a=!0,rn(o,f))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!s&&!a?(Ft(n)&&i.set(n,null),null):(lt(s)?s.forEach(c=>o[c]=null):rn(o,s),Ft(n)&&i.set(n,o),o)}function la(n,e){return!n||!ta(e)?!1:(e=e.slice(2).replace(/Once$/,""),bt(n,e[0].toLowerCase()+e.slice(1))||bt(n,_r(e))||bt(n,e))}function Uu(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:o,attrs:a,emit:c,render:u,renderCache:f,props:h,data:m,setupState:x,ctx:y,inheritAttrs:E}=n,_=Yo(n);let p,L;try{if(t.shapeFlag&4){const M=r||i,z=M;p=Yn(u.call(z,M,f,h,x,m,y)),L=a}else{const M=e;p=Yn(M.length>1?M(h,{attrs:a,slots:o,emit:c}):M(h,null)),L=e.props?a:em(a)}}catch(M){Ds.length=0,oa(M,n,1),p=Si(Yi)}let b=p;if(L&&E!==!1){const M=Object.keys(L),{shapeFlag:z}=b;M.length&&z&7&&(s&&M.some(bc)&&(L=tm(L,s)),b=Jr(b,L,!1,!0))}return t.dirs&&(b=Jr(b,null,!1,!0),b.dirs=b.dirs?b.dirs.concat(t.dirs):t.dirs),t.transition&&Fc(b,t.transition),p=b,Yo(_),p}const em=n=>{let e;for(const t in n)(t==="class"||t==="style"||ta(t))&&((e||(e={}))[t]=n[t]);return e},tm=(n,e)=>{const t={};for(const i in n)(!bc(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function nm(n,e,t){const{props:i,children:r,component:s}=n,{props:o,children:a,patchFlag:c}=e,u=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return i?Nu(i,o,u):!!o;if(c&8){const f=e.dynamicProps;for(let h=0;h<f.length;h++){const m=f[h];if(o[m]!==i[m]&&!la(u,m))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Nu(i,o,u):!0:!!o;return!1}function Nu(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!la(t,s))return!0}return!1}function im({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const ed={},td=()=>Object.create(ed),nd=n=>Object.getPrototypeOf(n)===ed;function rm(n,e,t,i=!1){const r={},s=td();n.propsDefaults=Object.create(null),id(n,e,r,s);for(const o in n.propsOptions[0])o in r||(r[o]=void 0);t?n.props=i?r:l0(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function sm(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=n,a=St(r),[c]=n.propsOptions;let u=!1;if((i||o>0)&&!(o&16)){if(o&8){const f=n.vnode.dynamicProps;for(let h=0;h<f.length;h++){let m=f[h];if(la(n.emitsOptions,m))continue;const x=e[m];if(c)if(bt(s,m))x!==s[m]&&(s[m]=x,u=!0);else{const y=ji(m);r[y]=Al(c,a,y,x,n,!1)}else x!==s[m]&&(s[m]=x,u=!0)}}}else{id(n,e,r,s)&&(u=!0);let f;for(const h in a)(!e||!bt(e,h)&&((f=_r(h))===h||!bt(e,f)))&&(c?t&&(t[h]!==void 0||t[f]!==void 0)&&(r[h]=Al(c,a,h,void 0,n,!0)):delete r[h]);if(s!==a)for(const h in s)(!e||!bt(e,h))&&(delete s[h],u=!0)}u&&xi(n.attrs,"set","")}function id(n,e,t,i){const[r,s]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(As(c))continue;const u=e[c];let f;r&&bt(r,f=ji(c))?!s||!s.includes(f)?t[f]=u:(a||(a={}))[f]=u:la(n.emitsOptions,c)||(!(c in i)||u!==i[c])&&(i[c]=u,o=!0)}if(s){const c=St(t),u=a||wt;for(let f=0;f<s.length;f++){const h=s[f];t[h]=Al(r,c,h,u[h],n,!bt(u,h))}}return o}function Al(n,e,t,i,r,s){const o=n[t];if(o!=null){const a=bt(o,"default");if(a&&i===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ct(c)){const{propsDefaults:u}=r;if(t in u)i=u[t];else{const f=Js(r);i=u[t]=c.call(null,e),f()}}else i=c;r.ce&&r.ce._setProp(t,i)}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===_r(t))&&(i=!0))}return i}const om=new WeakMap;function rd(n,e,t=!1){const i=t?om:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,o={},a=[];let c=!1;if(!ct(n)){const f=h=>{c=!0;const[m,x]=rd(h,e,!0);rn(o,m),x&&a.push(...x)};!t&&e.mixins.length&&e.mixins.forEach(f),n.extends&&f(n.extends),n.mixins&&n.mixins.forEach(f)}if(!s&&!c)return Ft(n)&&i.set(n,kr),kr;if(lt(s))for(let f=0;f<s.length;f++){const h=ji(s[f]);Fu(h)&&(o[h]=wt)}else if(s)for(const f in s){const h=ji(f);if(Fu(h)){const m=s[f],x=o[h]=lt(m)||ct(m)?{type:m}:rn({},m),y=x.type;let E=!1,_=!0;if(lt(y))for(let p=0;p<y.length;++p){const L=y[p],b=ct(L)&&L.name;if(b==="Boolean"){E=!0;break}else b==="String"&&(_=!1)}else E=ct(y)&&y.name==="Boolean";x[0]=E,x[1]=_,(E||bt(x,"default"))&&a.push(h)}}const u=[o,a];return Ft(n)&&i.set(n,u),u}function Fu(n){return n[0]!=="$"&&!As(n)}const Oc=n=>n==="_"||n==="_ctx"||n==="$stable",Bc=n=>lt(n)?n.map(Yn):[Yn(n)],am=(n,e,t)=>{if(e._n)return e;const i=b0((...r)=>Bc(e(...r)),t);return i._c=!1,i},sd=(n,e,t)=>{const i=n._ctx;for(const r in n){if(Oc(r))continue;const s=n[r];if(ct(s))e[r]=am(r,s,i);else if(s!=null){const o=Bc(s);e[r]=()=>o}}},od=(n,e)=>{const t=Bc(e);n.slots.default=()=>t},ad=(n,e,t)=>{for(const i in e)(t||!Oc(i))&&(n[i]=e[i])},lm=(n,e,t)=>{const i=n.slots=td();if(n.vnode.shapeFlag&32){const r=e._;r?(ad(i,e,t),t&&gh(i,"_",r,!0)):sd(e,i)}else e&&od(n,e)},cm=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,o=wt;if(i.shapeFlag&32){const a=e._;a?t&&a===1?s=!1:ad(r,e,t):(s=!e.$stable,sd(e,r)),o=e}else e&&(od(n,e),o={default:1});if(s)for(const a in r)!Oc(a)&&o[a]==null&&delete r[a]},Mn=pm;function um(n){return fm(n)}function fm(n,e){const t=ra();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:c,setText:u,setElementText:f,parentNode:h,nextSibling:m,setScopeId:x=Jn,insertStaticContent:y}=n,E=(F,B,I,v=null,k=null,W=null,O=void 0,A=null,Q=!!B.dynamicChildren)=>{if(F===B)return;F&&!ms(F,B)&&(v=w(F),we(F,k,W,!0),F=null),B.patchFlag===-2&&(Q=!1,B.dynamicChildren=null);const{type:Z,ref:ye,shapeFlag:R}=B;switch(Z){case ca:_(F,B,I,v);break;case Yi:p(F,B,I,v);break;case La:F==null&&L(B,I,v,O);break;case jn:ee(F,B,I,v,k,W,O,A,Q);break;default:R&1?z(F,B,I,v,k,W,O,A,Q):R&6?fe(F,B,I,v,k,W,O,A,Q):(R&64||R&128)&&Z.process(F,B,I,v,k,W,O,A,Q,re)}ye!=null&&k?Rs(ye,F&&F.ref,W,B||F,!B):ye==null&&F&&F.ref!=null&&Rs(F.ref,null,W,F,!0)},_=(F,B,I,v)=>{if(F==null)i(B.el=a(B.children),I,v);else{const k=B.el=F.el;B.children!==F.children&&u(k,B.children)}},p=(F,B,I,v)=>{F==null?i(B.el=c(B.children||""),I,v):B.el=F.el},L=(F,B,I,v)=>{[F.el,F.anchor]=y(F.children,B,I,v,F.el,F.anchor)},b=({el:F,anchor:B},I,v)=>{let k;for(;F&&F!==B;)k=m(F),i(F,I,v),F=k;i(B,I,v)},M=({el:F,anchor:B})=>{let I;for(;F&&F!==B;)I=m(F),r(F),F=I;r(B)},z=(F,B,I,v,k,W,O,A,Q)=>{if(B.type==="svg"?O="svg":B.type==="math"&&(O="mathml"),F==null)N(B,I,v,k,W,O,A,Q);else{const Z=F.el&&F.el._isVueCE?F.el:null;try{Z&&Z._beginPatch(),D(F,B,k,W,O,A,Q)}finally{Z&&Z._endPatch()}}},N=(F,B,I,v,k,W,O,A)=>{let Q,Z;const{props:ye,shapeFlag:R,transition:S,dirs:K}=F;if(Q=F.el=o(F.type,W,ye&&ye.is,ye),R&8?f(Q,F.children):R&16&&j(F.children,Q,null,v,k,Pa(F,W),O,A),K&&Qi(F,null,v,"created"),V(Q,F,F.scopeId,O,v),ye){for(const _e in ye)_e!=="value"&&!As(_e)&&s(Q,_e,null,ye[_e],W,v);"value"in ye&&s(Q,"value",null,ye.value,W),(Z=ye.onVnodeBeforeMount)&&Xn(Z,v,F)}K&&Qi(F,null,v,"beforeMount");const ce=hm(k,S);ce&&S.beforeEnter(Q),i(Q,B,I),((Z=ye&&ye.onVnodeMounted)||ce||K)&&Mn(()=>{Z&&Xn(Z,v,F),ce&&S.enter(Q),K&&Qi(F,null,v,"mounted")},k)},V=(F,B,I,v,k)=>{if(I&&x(F,I),v)for(let W=0;W<v.length;W++)x(F,v[W]);if(k){let W=k.subTree;if(B===W||ud(W.type)&&(W.ssContent===B||W.ssFallback===B)){const O=k.vnode;V(F,O,O.scopeId,O.slotScopeIds,k.parent)}}},j=(F,B,I,v,k,W,O,A,Q=0)=>{for(let Z=Q;Z<F.length;Z++){const ye=F[Z]=A?Hi(F[Z]):Yn(F[Z]);E(null,ye,B,I,v,k,W,O,A)}},D=(F,B,I,v,k,W,O)=>{const A=B.el=F.el;let{patchFlag:Q,dynamicChildren:Z,dirs:ye}=B;Q|=F.patchFlag&16;const R=F.props||wt,S=B.props||wt;let K;if(I&&er(I,!1),(K=S.onVnodeBeforeUpdate)&&Xn(K,I,B,F),ye&&Qi(B,F,I,"beforeUpdate"),I&&er(I,!0),(R.innerHTML&&S.innerHTML==null||R.textContent&&S.textContent==null)&&f(A,""),Z?C(F.dynamicChildren,Z,A,I,v,Pa(B,k),W):O||Y(F,B,A,null,I,v,Pa(B,k),W,!1),Q>0){if(Q&16)q(A,R,S,I,k);else if(Q&2&&R.class!==S.class&&s(A,"class",null,S.class,k),Q&4&&s(A,"style",R.style,S.style,k),Q&8){const ce=B.dynamicProps;for(let _e=0;_e<ce.length;_e++){const ue=ce[_e],Be=R[ue],Re=S[ue];(Re!==Be||ue==="value")&&s(A,ue,Be,Re,k,I)}}Q&1&&F.children!==B.children&&f(A,B.children)}else!O&&Z==null&&q(A,R,S,I,k);((K=S.onVnodeUpdated)||ye)&&Mn(()=>{K&&Xn(K,I,B,F),ye&&Qi(B,F,I,"updated")},v)},C=(F,B,I,v,k,W,O)=>{for(let A=0;A<B.length;A++){const Q=F[A],Z=B[A],ye=Q.el&&(Q.type===jn||!ms(Q,Z)||Q.shapeFlag&198)?h(Q.el):I;E(Q,Z,ye,null,v,k,W,O,!0)}},q=(F,B,I,v,k)=>{if(B!==I){if(B!==wt)for(const W in B)!As(W)&&!(W in I)&&s(F,W,B[W],null,k,v);for(const W in I){if(As(W))continue;const O=I[W],A=B[W];O!==A&&W!=="value"&&s(F,W,A,O,k,v)}"value"in I&&s(F,"value",B.value,I.value,k)}},ee=(F,B,I,v,k,W,O,A,Q)=>{const Z=B.el=F?F.el:a(""),ye=B.anchor=F?F.anchor:a("");let{patchFlag:R,dynamicChildren:S,slotScopeIds:K}=B;K&&(A=A?A.concat(K):K),F==null?(i(Z,I,v),i(ye,I,v),j(B.children||[],I,ye,k,W,O,A,Q)):R>0&&R&64&&S&&F.dynamicChildren?(C(F.dynamicChildren,S,I,k,W,O,A),(B.key!=null||k&&B===k.subTree)&&ld(F,B,!0)):Y(F,B,I,ye,k,W,O,A,Q)},fe=(F,B,I,v,k,W,O,A,Q)=>{B.slotScopeIds=A,F==null?B.shapeFlag&512?k.ctx.activate(B,I,v,O,Q):pe(B,I,v,k,W,O,Q):de(F,B,Q)},pe=(F,B,I,v,k,W,O)=>{const A=F.component=Mm(F,v,k);if(Gh(F)&&(A.ctx.renderer=re),Tm(A,!1,O),A.asyncDep){if(k&&k.registerDep(A,he,O),!F.el){const Q=A.subTree=Si(Yi);p(null,Q,B,I),F.placeholder=Q.el}}else he(A,F,B,I,k,W,O)},de=(F,B,I)=>{const v=B.component=F.component;if(nm(F,B,I))if(v.asyncDep&&!v.asyncResolved){ae(v,B,I);return}else v.next=B,v.update();else B.el=F.el,v.vnode=B},he=(F,B,I,v,k,W,O)=>{const A=()=>{if(F.isMounted){let{next:R,bu:S,u:K,parent:ce,vnode:_e}=F;{const He=cd(F);if(He){R&&(R.el=_e.el,ae(F,R,O)),He.asyncDep.then(()=>{F.isUnmounted||A()});return}}let ue=R,Be;er(F,!1),R?(R.el=_e.el,ae(F,R,O)):R=_e,S&&Oo(S),(Be=R.props&&R.props.onVnodeBeforeUpdate)&&Xn(Be,ce,R,_e),er(F,!0);const Re=Uu(F),Xe=F.subTree;F.subTree=Re,E(Xe,Re,h(Xe.el),w(Xe),F,k,W),R.el=Re.el,ue===null&&im(F,Re.el),K&&Mn(K,k),(Be=R.props&&R.props.onVnodeUpdated)&&Mn(()=>Xn(Be,ce,R,_e),k)}else{let R;const{el:S,props:K}=B,{bm:ce,m:_e,parent:ue,root:Be,type:Re}=F,Xe=Ps(B);er(F,!1),ce&&Oo(ce),!Xe&&(R=K&&K.onVnodeBeforeMount)&&Xn(R,ue,B),er(F,!0);{Be.ce&&Be.ce._def.shadowRoot!==!1&&Be.ce._injectChildStyle(Re);const He=F.subTree=Uu(F);E(null,He,I,v,F,k,W),B.el=He.el}if(_e&&Mn(_e,k),!Xe&&(R=K&&K.onVnodeMounted)){const He=B;Mn(()=>Xn(R,ue,He),k)}(B.shapeFlag&256||ue&&Ps(ue.vnode)&&ue.vnode.shapeFlag&256)&&F.a&&Mn(F.a,k),F.isMounted=!0,B=I=v=null}};F.scope.on();const Q=F.effect=new Sh(A);F.scope.off();const Z=F.update=Q.run.bind(Q),ye=F.job=Q.runIfDirty.bind(Q);ye.i=F,ye.id=F.uid,Q.scheduler=()=>Nc(ye),er(F,!0),Z()},ae=(F,B,I)=>{B.component=F;const v=F.vnode.props;F.vnode=B,F.next=null,sm(F,B.props,v,I),cm(F,B.children,I),Ei(),Cu(F),Ti()},Y=(F,B,I,v,k,W,O,A,Q=!1)=>{const Z=F&&F.children,ye=F?F.shapeFlag:0,R=B.children,{patchFlag:S,shapeFlag:K}=B;if(S>0){if(S&128){Ee(Z,R,I,v,k,W,O,A,Q);return}else if(S&256){Se(Z,R,I,v,k,W,O,A,Q);return}}K&8?(ye&16&&P(Z,k,W),R!==Z&&f(I,R)):ye&16?K&16?Ee(Z,R,I,v,k,W,O,A,Q):P(Z,k,W,!0):(ye&8&&f(I,""),K&16&&j(R,I,v,k,W,O,A,Q))},Se=(F,B,I,v,k,W,O,A,Q)=>{F=F||kr,B=B||kr;const Z=F.length,ye=B.length,R=Math.min(Z,ye);let S;for(S=0;S<R;S++){const K=B[S]=Q?Hi(B[S]):Yn(B[S]);E(F[S],K,I,null,k,W,O,A,Q)}Z>ye?P(F,k,W,!0,!1,R):j(B,I,v,k,W,O,A,Q,R)},Ee=(F,B,I,v,k,W,O,A,Q)=>{let Z=0;const ye=B.length;let R=F.length-1,S=ye-1;for(;Z<=R&&Z<=S;){const K=F[Z],ce=B[Z]=Q?Hi(B[Z]):Yn(B[Z]);if(ms(K,ce))E(K,ce,I,null,k,W,O,A,Q);else break;Z++}for(;Z<=R&&Z<=S;){const K=F[R],ce=B[S]=Q?Hi(B[S]):Yn(B[S]);if(ms(K,ce))E(K,ce,I,null,k,W,O,A,Q);else break;R--,S--}if(Z>R){if(Z<=S){const K=S+1,ce=K<ye?B[K].el:v;for(;Z<=S;)E(null,B[Z]=Q?Hi(B[Z]):Yn(B[Z]),I,ce,k,W,O,A,Q),Z++}}else if(Z>S)for(;Z<=R;)we(F[Z],k,W,!0),Z++;else{const K=Z,ce=Z,_e=new Map;for(Z=ce;Z<=S;Z++){const Ye=B[Z]=Q?Hi(B[Z]):Yn(B[Z]);Ye.key!=null&&_e.set(Ye.key,Z)}let ue,Be=0;const Re=S-ce+1;let Xe=!1,He=0;const Me=new Array(Re);for(Z=0;Z<Re;Z++)Me[Z]=0;for(Z=K;Z<=R;Z++){const Ye=F[Z];if(Be>=Re){we(Ye,k,W,!0);continue}let Ke;if(Ye.key!=null)Ke=_e.get(Ye.key);else for(ue=ce;ue<=S;ue++)if(Me[ue-ce]===0&&ms(Ye,B[ue])){Ke=ue;break}Ke===void 0?we(Ye,k,W,!0):(Me[Ke-ce]=Z+1,Ke>=He?He=Ke:Xe=!0,E(Ye,B[Ke],I,null,k,W,O,A,Q),Be++)}const De=Xe?dm(Me):kr;for(ue=De.length-1,Z=Re-1;Z>=0;Z--){const Ye=ce+Z,Ke=B[Ye],Ge=B[Ye+1],tt=Ye+1<ye?Ge.el||Ge.placeholder:v;Me[Z]===0?E(null,Ke,I,tt,k,W,O,A,Q):Xe&&(ue<0||Z!==De[ue]?Ue(Ke,I,tt,2):ue--)}}},Ue=(F,B,I,v,k=null)=>{const{el:W,type:O,transition:A,children:Q,shapeFlag:Z}=F;if(Z&6){Ue(F.component.subTree,B,I,v);return}if(Z&128){F.suspense.move(B,I,v);return}if(Z&64){O.move(F,B,I,re);return}if(O===jn){i(W,B,I);for(let R=0;R<Q.length;R++)Ue(Q[R],B,I,v);i(F.anchor,B,I);return}if(O===La){b(F,B,I);return}if(v!==2&&Z&1&&A)if(v===0)A.beforeEnter(W),i(W,B,I),Mn(()=>A.enter(W),k);else{const{leave:R,delayLeave:S,afterLeave:K}=A,ce=()=>{F.ctx.isUnmounted?r(W):i(W,B,I)},_e=()=>{W._isLeaving&&W[A0](!0),R(W,()=>{ce(),K&&K()})};S?S(W,ce,_e):_e()}else i(W,B,I)},we=(F,B,I,v=!1,k=!1)=>{const{type:W,props:O,ref:A,children:Q,dynamicChildren:Z,shapeFlag:ye,patchFlag:R,dirs:S,cacheIndex:K}=F;if(R===-2&&(k=!1),A!=null&&(Ei(),Rs(A,null,I,F,!0),Ti()),K!=null&&(B.renderCache[K]=void 0),ye&256){B.ctx.deactivate(F);return}const ce=ye&1&&S,_e=!Ps(F);let ue;if(_e&&(ue=O&&O.onVnodeBeforeUnmount)&&Xn(ue,B,F),ye&6)$(F.component,I,v);else{if(ye&128){F.suspense.unmount(I,v);return}ce&&Qi(F,null,B,"beforeUnmount"),ye&64?F.type.remove(F,B,I,re,v):Z&&!Z.hasOnce&&(W!==jn||R>0&&R&64)?P(Z,B,I,!1,!0):(W===jn&&R&384||!k&&ye&16)&&P(Q,B,I),v&&Ce(F)}(_e&&(ue=O&&O.onVnodeUnmounted)||ce)&&Mn(()=>{ue&&Xn(ue,B,F),ce&&Qi(F,null,B,"unmounted")},I)},Ce=F=>{const{type:B,el:I,anchor:v,transition:k}=F;if(B===jn){ne(I,v);return}if(B===La){M(F);return}const W=()=>{r(I),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(F.shapeFlag&1&&k&&!k.persisted){const{leave:O,delayLeave:A}=k,Q=()=>O(I,W);A?A(F.el,W,Q):Q()}else W()},ne=(F,B)=>{let I;for(;F!==B;)I=m(F),r(F),F=I;r(B)},$=(F,B,I)=>{const{bum:v,scope:k,job:W,subTree:O,um:A,m:Q,a:Z}=F;Ou(Q),Ou(Z),v&&Oo(v),k.stop(),W&&(W.flags|=8,we(O,F,B,I)),A&&Mn(A,B),Mn(()=>{F.isUnmounted=!0},B)},P=(F,B,I,v=!1,k=!1,W=0)=>{for(let O=W;O<F.length;O++)we(F[O],B,I,v,k)},w=F=>{if(F.shapeFlag&6)return w(F.component.subTree);if(F.shapeFlag&128)return F.suspense.next();const B=m(F.anchor||F.el),I=B&&B[E0];return I?m(I):B};let se=!1;const ve=(F,B,I)=>{F==null?B._vnode&&we(B._vnode,null,null,!0):E(B._vnode||null,F,B,null,null,null,I),B._vnode=F,se||(se=!0,Cu(),Bh(),se=!1)},re={p:E,um:we,m:Ue,r:Ce,mt:pe,mc:j,pc:Y,pbc:C,n:w,o:n};return{render:ve,hydrate:void 0,createApp:q0(ve)}}function Pa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function er({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function hm(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function ld(n,e,t=!1){const i=n.children,r=e.children;if(lt(i)&&lt(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=Hi(r[s]),a.el=o.el),!t&&a.patchFlag!==-2&&ld(o,a)),a.type===ca&&a.patchFlag!==-1&&(a.el=o.el),a.type===Yi&&!a.el&&(a.el=o.el)}}function dm(n){const e=n.slice(),t=[0];let i,r,s,o,a;const c=n.length;for(i=0;i<c;i++){const u=n[i];if(u!==0){if(r=t[t.length-1],n[r]<u){e[i]=r,t.push(i);continue}for(s=0,o=t.length-1;s<o;)a=s+o>>1,n[t[a]]<u?s=a+1:o=a;u<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,o=t[s-1];s-- >0;)t[s]=o,o=e[o];return t}function cd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cd(e)}function Ou(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const ud=n=>n.__isSuspense;function pm(n,e){e&&e.pendingBranch?lt(n)?e.effects.push(...n):e.effects.push(n):S0(n)}const jn=Symbol.for("v-fgt"),ca=Symbol.for("v-txt"),Yi=Symbol.for("v-cmt"),La=Symbol.for("v-stc"),Ds=[];let An=null;function Is(n=!1){Ds.push(An=n?null:[])}function mm(){Ds.pop(),An=Ds[Ds.length-1]||null}let Vs=1;function Bu(n,e=!1){Vs+=n,n<0&&An&&e&&(An.hasOnce=!0)}function fd(n){return n.dynamicChildren=Vs>0?An||kr:null,mm(),Vs>0&&An&&An.push(n),n}function Da(n,e,t,i,r,s){return fd(zt(n,e,t,i,r,s,!0))}function hd(n,e,t,i,r){return fd(Si(n,e,t,i,r,!0))}function dd(n){return n?n.__v_isVNode===!0:!1}function ms(n,e){return n.type===e.type&&n.key===e.key}const pd=({key:n})=>n??null,zo=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?kt(n)||nn(n)||ct(n)?{i:Dn,r:n,k:e,f:!!t}:n:null);function zt(n,e=null,t=null,i=0,r=null,s=n===jn?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&pd(e),ref:e&&zo(e),scopeId:Vh,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Dn};return a?(zc(c,t),s&128&&n.normalize(c)):t&&(c.shapeFlag|=kt(t)?8:16),Vs>0&&!o&&An&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&An.push(c),c}const Si=xm;function xm(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===O0)&&(n=Yi),dd(n)){const a=Jr(n,e,!0);return t&&zc(a,t),Vs>0&&!s&&An&&(a.shapeFlag&6?An[An.indexOf(n)]=a:An.push(a)),a.patchFlag=-2,a}if(Rm(n)&&(n=n.__vccOpts),e){e=gm(e);let{class:a,style:c}=e;a&&!kt(a)&&(e.class=Wr(a)),Ft(c)&&(Uc(c)&&!lt(c)&&(c=rn({},c)),e.style=Ac(c))}const o=kt(n)?1:ud(n)?128:T0(n)?64:Ft(n)?4:ct(n)?2:0;return zt(n,e,t,i,r,o,s,!0)}function gm(n){return n?Uc(n)||nd(n)?rn({},n):n:null}function Jr(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:o,children:a,transition:c}=n,u=e?ym(r||{},e):r,f={__v_isVNode:!0,__v_skip:!0,type:n.type,props:u,key:u&&pd(u),ref:e&&e.ref?t&&s?lt(s)?s.concat(zo(e)):[s,zo(e)]:zo(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==jn?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Jr(n.ssContent),ssFallback:n.ssFallback&&Jr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&i&&Fc(f,c.clone(f)),f}function _m(n=" ",e=0){return Si(ca,null,n,e)}function vm(n="",e=!1){return e?(Is(),hd(Yi,null,n)):Si(Yi,null,n)}function Yn(n){return n==null||typeof n=="boolean"?Si(Yi):lt(n)?Si(jn,null,n.slice()):dd(n)?Hi(n):Si(ca,null,String(n))}function Hi(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Jr(n)}function zc(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(lt(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),zc(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!nd(e)?e._ctx=Dn:r===3&&Dn&&(Dn.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ct(e)?(e={default:e,_ctx:Dn},t=32):(e=String(e),i&64?(t=16,e=[_m(e)]):t=8);n.children=e,n.shapeFlag|=t}function ym(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Wr([e.class,i.class]));else if(r==="style")e.style=Ac([e.style,i.style]);else if(ta(r)){const s=e[r],o=i[r];o&&s!==o&&!(lt(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Xn(n,e,t,i=null){Qn(n,e,7,[t,i])}const Sm=Kh();let bm=0;function Mm(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Sm,s={uid:bm++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new kp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rd(i,r),emitsOptions:Qh(i,r),emit:null,emitted:null,propsDefaults:wt,inheritAttrs:i.inheritAttrs,ctx:wt,data:wt,props:wt,attrs:wt,slots:wt,refs:wt,setupState:wt,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Z0.bind(null,s),n.ce&&n.ce(s),s}let un=null;const Em=()=>un||Dn;let Jo,wl;{const n=ra(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};Jo=e("__VUE_INSTANCE_SETTERS__",t=>un=t),wl=e("__VUE_SSR_SETTERS__",t=>Hs=t)}const Js=n=>{const e=un;return Jo(n),n.scope.on(),()=>{n.scope.off(),Jo(e)}},zu=()=>{un&&un.scope.off(),Jo(null)};function md(n){return n.vnode.shapeFlag&4}let Hs=!1;function Tm(n,e=!1,t=!1){e&&wl(e);const{props:i,children:r}=n.vnode,s=md(n);rm(n,i,s,e),lm(n,r,t||e);const o=s?Am(n,e):void 0;return e&&wl(!1),o}function Am(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,z0);const{setup:i}=t;if(i){Ei();const r=n.setupContext=i.length>1?Cm(n):null,s=Js(n),o=Ks(i,n,0,[n.props,r]),a=dh(o);if(Ti(),s(),(a||n.sp)&&!Ps(n)&&kh(n),a){if(o.then(zu,zu),e)return o.then(c=>{Vu(n,c)}).catch(c=>{oa(c,n,0)});n.asyncDep=o}else Vu(n,o)}else xd(n)}function Vu(n,e,t){ct(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Ft(e)&&(n.setupState=Nh(e)),xd(n)}function xd(n,e,t){const i=n.type;n.render||(n.render=i.render||Jn);{const r=Js(n);Ei();try{V0(n)}finally{Ti(),r()}}}const wm={get(n,e){return tn(n,"get",""),n[e]}};function Cm(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,wm),slots:n.slots,emit:n.emit,expose:e}}function ua(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Nh(c0(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Ls)return Ls[t](n)},has(e,t){return t in e||t in Ls}})):n.proxy}function Rm(n){return ct(n)&&"__vccOpts"in n}const Pm=(n,e)=>m0(n,e,Hs),Lm="3.5.25";let Cl;const Hu=typeof window<"u"&&window.trustedTypes;if(Hu)try{Cl=Hu.createPolicy("vue",{createHTML:n=>n})}catch{}const gd=Cl?n=>Cl.createHTML(n):n=>n,Dm="http://www.w3.org/2000/svg",Im="http://www.w3.org/1998/Math/MathML",mi=typeof document<"u"?document:null,ku=mi&&mi.createElement("template"),Um={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?mi.createElementNS(Dm,n):e==="mathml"?mi.createElementNS(Im,n):t?mi.createElement(n,{is:t}):mi.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>mi.createTextNode(n),createComment:n=>mi.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>mi.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const o=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{ku.innerHTML=gd(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=ku.content;if(i==="svg"||i==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Nm=Symbol("_vtc");function Fm(n,e,t){const i=n[Nm];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Gu=Symbol("_vod"),Om=Symbol("_vsh"),Bm=Symbol(""),zm=/(?:^|;)\s*display\s*:/;function Vm(n,e,t){const i=n.style,r=kt(t);let s=!1;if(t&&!r){if(e)if(kt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&Vo(i,a,"")}else for(const o in e)t[o]==null&&Vo(i,o,"");for(const o in t)o==="display"&&(s=!0),Vo(i,o,t[o])}else if(r){if(e!==t){const o=i[Bm];o&&(t+=";"+o),i.cssText=t,s=zm.test(t)}}else e&&n.removeAttribute("style");Gu in n&&(n[Gu]=s?i.display:"",n[Om]&&(i.display="none"))}const Wu=/\s*!important$/;function Vo(n,e,t){if(lt(t))t.forEach(i=>Vo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Hm(n,e);Wu.test(t)?n.setProperty(_r(i),t.replace(Wu,""),"important"):n[i]=t}}const Xu=["Webkit","Moz","ms"],Ia={};function Hm(n,e){const t=Ia[e];if(t)return t;let i=ji(e);if(i!=="filter"&&i in n)return Ia[e]=i;i=xh(i);for(let r=0;r<Xu.length;r++){const s=Xu[r]+i;if(s in n)return Ia[e]=s}return e}const qu="http://www.w3.org/1999/xlink";function ju(n,e,t,i,r,s=Hp(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(qu,e.slice(6,e.length)):n.setAttributeNS(qu,e,t):t==null||s&&!_h(t)?n.removeAttribute(e):n.setAttribute(e,s?"":Ki(t)?String(t):t)}function Yu(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?gd(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const a=s==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(a!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let o=!1;if(t===""||t==null){const a=typeof n[e];a==="boolean"?t=_h(t):t==null&&a==="string"?(t="",o=!0):a==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(r||e)}function Hr(n,e,t,i){n.addEventListener(e,t,i)}function km(n,e,t,i){n.removeEventListener(e,t,i)}const $u=Symbol("_vei");function Gm(n,e,t,i,r=null){const s=n[$u]||(n[$u]={}),o=s[e];if(i&&o)o.value=i;else{const[a,c]=Wm(e);if(i){const u=s[e]=jm(i,r);Hr(n,a,u,c)}else o&&(km(n,a,o,c),s[e]=void 0)}}const Ku=/(?:Once|Passive|Capture)$/;function Wm(n){let e;if(Ku.test(n)){e={};let i;for(;i=n.match(Ku);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):_r(n.slice(2)),e]}let Ua=0;const Xm=Promise.resolve(),qm=()=>Ua||(Xm.then(()=>Ua=0),Ua=Date.now());function jm(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Qn(Ym(i,t.value),e,5,[i])};return t.value=n,t.attached=qm(),t}function Ym(n,e){if(lt(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Ju=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,$m=(n,e,t,i,r,s)=>{const o=r==="svg";e==="class"?Fm(n,i,o):e==="style"?Vm(n,t,i):ta(e)?bc(e)||Gm(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Km(n,e,i,o))?(Yu(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ju(n,e,i,o,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!kt(i))?Yu(n,ji(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),ju(n,e,i,o))};function Km(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Ju(e)&&ct(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Ju(e)&&kt(t)?!1:e in n}const Zu=n=>{const e=n.props["onUpdate:modelValue"]||!1;return lt(e)?t=>Oo(e,t):e};function Jm(n){n.target.composing=!0}function Qu(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Na=Symbol("_assign");function ef(n,e,t){return e&&(n=n.trim()),t&&(n=Tc(n)),n}const Zm={created(n,{modifiers:{lazy:e,trim:t,number:i}},r){n[Na]=Zu(r);const s=i||r.props&&r.props.type==="number";Hr(n,e?"change":"input",o=>{o.target.composing||n[Na](ef(n.value,t,s))}),(t||s)&&Hr(n,"change",()=>{n.value=ef(n.value,t,s)}),e||(Hr(n,"compositionstart",Jm),Hr(n,"compositionend",Qu),Hr(n,"change",Qu))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:i,trim:r,number:s}},o){if(n[Na]=Zu(o),n.composing)return;const a=(s||n.type==="number")&&!/^0\d/.test(n.value)?Tc(n.value):n.value,c=e??"";a!==c&&(document.activeElement===n&&n.type!=="range"&&(i&&e===t||r&&n.value.trim()===c)||(n.value=c))}},Qm=rn({patchProp:$m},Um);let tf;function ex(){return tf||(tf=um(Qm))}const tx=((...n)=>{const e=ex().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=ix(i);if(!r)return;const s=e._component;!ct(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,nx(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e});function nx(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function ix(n){return kt(n)?document.querySelector(n):n}const Vc="181",rx=0,nf=1,sx=2,_d=1,ox=2,pi=3,$i=0,xn=1,_i=2,bi=0,jr=1,rf=2,sf=3,of=4,ax=5,ur=100,lx=101,cx=102,ux=103,fx=104,hx=200,dx=201,px=202,mx=203,Rl=204,Pl=205,xx=206,gx=207,_x=208,vx=209,yx=210,Sx=211,bx=212,Mx=213,Ex=214,Ll=0,Dl=1,Il=2,Zr=3,Ul=4,Nl=5,Fl=6,Ol=7,vd=0,Tx=1,Ax=2,qi=0,wx=1,Cx=2,Rx=3,Px=4,Lx=5,Dx=6,Ix=7,yd=300,Qr=301,es=302,Bl=303,zl=304,fa=306,Vl=1e3,vi=1001,Hl=1002,wn=1003,Ux=1004,fo=1005,In=1006,Fa=1007,hr=1008,ei=1009,Sd=1010,bd=1011,ks=1012,Hc=1013,mr=1014,yi=1015,rs=1016,kc=1017,Gc=1018,Gs=1020,Md=35902,Ed=35899,Td=1021,Ad=1022,Hn=1023,Ws=1026,Xs=1027,wd=1028,Wc=1029,Xc=1030,qc=1031,jc=1033,Ho=33776,ko=33777,Go=33778,Wo=33779,kl=35840,Gl=35841,Wl=35842,Xl=35843,ql=36196,jl=37492,Yl=37496,$l=37808,Kl=37809,Jl=37810,Zl=37811,Ql=37812,ec=37813,tc=37814,nc=37815,ic=37816,rc=37817,sc=37818,oc=37819,ac=37820,lc=37821,cc=36492,uc=36494,fc=36495,hc=36283,dc=36284,pc=36285,mc=36286,Nx=3200,Fx=3201,Cd=0,Ox=1,ki="",En="srgb",ts="srgb-linear",Zo="linear",Tt="srgb",Tr=7680,af=519,Bx=512,zx=513,Vx=514,Rd=515,Hx=516,kx=517,Gx=518,Wx=519,lf=35044,cf="300 es",Kn=2e3,Qo=2001;function Pd(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ea(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Xx(){const n=ea("canvas");return n.style.display="block",n}const uf={};function ff(...n){const e="THREE."+n.shift();console.log(e,...n)}function at(...n){const e="THREE."+n.shift();console.warn(e,...n)}function Vt(...n){const e="THREE."+n.shift();console.error(e,...n)}function qs(...n){const e=n.join(" ");e in uf||(uf[e]=!0,at(...n))}function qx(n,e,t){return new Promise(function(i,r){function s(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:r();break;case n.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:i()}}setTimeout(s,t)})}class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oa=Math.PI/180,xc=180/Math.PI;function os(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[n&255]+Qt[n>>8&255]+Qt[n>>16&255]+Qt[n>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[t&63|128]+Qt[t>>8&255]+"-"+Qt[t>>16&255]+Qt[t>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function dt(n,e,t){return Math.max(e,Math.min(t,n))}function jx(n,e){return(n%e+e)%e}function Ba(n,e,t){return(1-t)*n+t*e}function xs(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function pn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ae{constructor(e=0,t=0){Ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let c=i[r+0],u=i[r+1],f=i[r+2],h=i[r+3],m=s[o+0],x=s[o+1],y=s[o+2],E=s[o+3];if(a<=0){e[t+0]=c,e[t+1]=u,e[t+2]=f,e[t+3]=h;return}if(a>=1){e[t+0]=m,e[t+1]=x,e[t+2]=y,e[t+3]=E;return}if(h!==E||c!==m||u!==x||f!==y){let _=c*m+u*x+f*y+h*E;_<0&&(m=-m,x=-x,y=-y,E=-E,_=-_);let p=1-a;if(_<.9995){const L=Math.acos(_),b=Math.sin(L);p=Math.sin(p*L)/b,a=Math.sin(a*L)/b,c=c*p+m*a,u=u*p+x*a,f=f*p+y*a,h=h*p+E*a}else{c=c*p+m*a,u=u*p+x*a,f=f*p+y*a,h=h*p+E*a;const L=1/Math.sqrt(c*c+u*u+f*f+h*h);c*=L,u*=L,f*=L,h*=L}}e[t]=c,e[t+1]=u,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],c=i[r+1],u=i[r+2],f=i[r+3],h=s[o],m=s[o+1],x=s[o+2],y=s[o+3];return e[t]=a*y+f*h+c*x-u*m,e[t+1]=c*y+f*m+u*h-a*x,e[t+2]=u*y+f*x+a*m-c*h,e[t+3]=f*y-a*h-c*m-u*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,u=a(i/2),f=a(r/2),h=a(s/2),m=c(i/2),x=c(r/2),y=c(s/2);switch(o){case"XYZ":this._x=m*f*h+u*x*y,this._y=u*x*h-m*f*y,this._z=u*f*y+m*x*h,this._w=u*f*h-m*x*y;break;case"YXZ":this._x=m*f*h+u*x*y,this._y=u*x*h-m*f*y,this._z=u*f*y-m*x*h,this._w=u*f*h+m*x*y;break;case"ZXY":this._x=m*f*h-u*x*y,this._y=u*x*h+m*f*y,this._z=u*f*y+m*x*h,this._w=u*f*h-m*x*y;break;case"ZYX":this._x=m*f*h-u*x*y,this._y=u*x*h+m*f*y,this._z=u*f*y-m*x*h,this._w=u*f*h+m*x*y;break;case"YZX":this._x=m*f*h+u*x*y,this._y=u*x*h+m*f*y,this._z=u*f*y-m*x*h,this._w=u*f*h-m*x*y;break;case"XZY":this._x=m*f*h-u*x*y,this._y=u*x*h-m*f*y,this._z=u*f*y+m*x*h,this._w=u*f*h+m*x*y;break;default:at("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],u=t[2],f=t[6],h=t[10],m=i+a+h;if(m>0){const x=.5/Math.sqrt(m+1);this._w=.25/x,this._x=(f-c)*x,this._y=(s-u)*x,this._z=(o-r)*x}else if(i>a&&i>h){const x=2*Math.sqrt(1+i-a-h);this._w=(f-c)/x,this._x=.25*x,this._y=(r+o)/x,this._z=(s+u)/x}else if(a>h){const x=2*Math.sqrt(1+a-i-h);this._w=(s-u)/x,this._x=(r+o)/x,this._y=.25*x,this._z=(c+f)/x}else{const x=2*Math.sqrt(1+h-i-a);this._w=(o-r)/x,this._x=(s+u)/x,this._y=(c+f)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,u=t._z,f=t._w;return this._x=i*f+o*a+r*u-s*c,this._y=r*f+o*c+s*a-i*u,this._z=s*f+o*u+i*c-r*a,this._w=o*f-i*a-r*c-s*u,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let c=1-t;if(a<.9995){const u=Math.acos(a),f=Math.sin(u);c=Math.sin(c*u)/f,t=Math.sin(t*u)/f,this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,i=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,u=2*(o*r-a*i),f=2*(a*t-s*r),h=2*(s*i-o*t);return this.x=t+c*u+o*h-a*f,this.y=i+c*f+a*u-s*h,this.z=r+c*h+s*f-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-i*c,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return za.copy(this).projectOnVector(e),this.sub(za)}reflect(e){return this.sub(za.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(dt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const za=new ie,hf=new Zs;class ot{constructor(e,t,i,r,s,o,a,c,u){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,u)}set(e,t,i,r,s,o,a,c,u){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=t,f[4]=s,f[5]=c,f[6]=i,f[7]=o,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],c=i[6],u=i[1],f=i[4],h=i[7],m=i[2],x=i[5],y=i[8],E=r[0],_=r[3],p=r[6],L=r[1],b=r[4],M=r[7],z=r[2],N=r[5],V=r[8];return s[0]=o*E+a*L+c*z,s[3]=o*_+a*b+c*N,s[6]=o*p+a*M+c*V,s[1]=u*E+f*L+h*z,s[4]=u*_+f*b+h*N,s[7]=u*p+f*M+h*V,s[2]=m*E+x*L+y*z,s[5]=m*_+x*b+y*N,s[8]=m*p+x*M+y*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8];return t*o*f-t*a*u-i*s*f+i*a*c+r*s*u-r*o*c}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8],h=f*o-a*u,m=a*c-f*s,x=u*s-o*c,y=t*h+i*m+r*x;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/y;return e[0]=h*E,e[1]=(r*u-f*i)*E,e[2]=(a*i-r*o)*E,e[3]=m*E,e[4]=(f*t-r*c)*E,e[5]=(r*s-a*t)*E,e[6]=x*E,e[7]=(i*c-u*t)*E,e[8]=(o*t-i*s)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const c=Math.cos(s),u=Math.sin(s);return this.set(i*c,i*u,-i*(c*o+u*a)+o+e,-r*u,r*c,-r*(-u*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Va.makeScale(e,t)),this}rotate(e){return this.premultiply(Va.makeRotation(-e)),this}translate(e,t){return this.premultiply(Va.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Va=new ot,df=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),pf=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yx(){const n={enabled:!0,workingColorSpace:ts,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Tt&&(r.r=Mi(r.r),r.g=Mi(r.g),r.b=Mi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Tt&&(r.r=Yr(r.r),r.g=Yr(r.g),r.b=Yr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ki?Zo:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return qs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return qs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ts]:{primaries:e,whitePoint:i,transfer:Zo,toXYZ:df,fromXYZ:pf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:e,whitePoint:i,transfer:Tt,toXYZ:df,fromXYZ:pf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),n}const vt=Yx();function Mi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Yr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ar;class $x{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ar===void 0&&(Ar=ea("canvas")),Ar.width=e.width,Ar.height=e.height;const r=Ar.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ar}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ea("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Mi(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Mi(t[i]/255)*255):t[i]=Mi(t[i]);return{data:t,width:e.width,height:e.height}}else return at("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kx=0;class Yc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=os(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ha(r[o].image)):s.push(Ha(r[o]))}else s=Ha(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Ha(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?$x.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(at("Texture: Unable to serialize Texture."),{})}let Jx=0;const ka=new ie;class fn extends ss{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,i=vi,r=vi,s=In,o=hr,a=Hn,c=ei,u=fn.DEFAULT_ANISOTROPY,f=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jx++}),this.uuid=os(),this.name="",this.source=new Yc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ae(0,0),this.repeat=new Ae(1,1),this.center=new Ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ka).x}get height(){return this.source.getSize(ka).y}get depth(){return this.source.getSize(ka).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){at(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){at(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vl:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case Hl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vl:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case Hl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=yd;fn.DEFAULT_ANISOTROPY=1;class At{constructor(e=0,t=0,i=0,r=1){At.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const c=e.elements,u=c[0],f=c[4],h=c[8],m=c[1],x=c[5],y=c[9],E=c[2],_=c[6],p=c[10];if(Math.abs(f-m)<.01&&Math.abs(h-E)<.01&&Math.abs(y-_)<.01){if(Math.abs(f+m)<.1&&Math.abs(h+E)<.1&&Math.abs(y+_)<.1&&Math.abs(u+x+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(u+1)/2,M=(x+1)/2,z=(p+1)/2,N=(f+m)/4,V=(h+E)/4,j=(y+_)/4;return b>M&&b>z?b<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(b),r=N/i,s=V/i):M>z?M<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),i=N/r,s=j/r):z<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(z),i=V/s,r=j/s),this.set(i,r,s,t),this}let L=Math.sqrt((_-y)*(_-y)+(h-E)*(h-E)+(m-f)*(m-f));return Math.abs(L)<.001&&(L=1),this.x=(_-y)/L,this.y=(h-E)/L,this.z=(m-f)/L,this.w=Math.acos((u+x+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(dt(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zx extends ss{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t);const r={width:e,height:t,depth:i.depth},s=new fn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new Yc(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class xr extends Zx{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ld extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qx extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=wn,this.minFilter=wn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qs{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(On.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(On.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=On.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ho.copy(i.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(gs),po.subVectors(this.max,gs),wr.subVectors(e.a,gs),Cr.subVectors(e.b,gs),Rr.subVectors(e.c,gs),Ii.subVectors(Cr,wr),Ui.subVectors(Rr,Cr),tr.subVectors(wr,Rr);let t=[0,-Ii.z,Ii.y,0,-Ui.z,Ui.y,0,-tr.z,tr.y,Ii.z,0,-Ii.x,Ui.z,0,-Ui.x,tr.z,0,-tr.x,-Ii.y,Ii.x,0,-Ui.y,Ui.x,0,-tr.y,tr.x,0];return!Ga(t,wr,Cr,Rr,po)||(t=[1,0,0,0,1,0,0,0,1],!Ga(t,wr,Cr,Rr,po))?!1:(mo.crossVectors(Ii,Ui),t=[mo.x,mo.y,mo.z],Ga(t,wr,Cr,Rr,po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ai=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],On=new ie,ho=new Qs,wr=new ie,Cr=new ie,Rr=new ie,Ii=new ie,Ui=new ie,tr=new ie,gs=new ie,po=new ie,mo=new ie,nr=new ie;function Ga(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){nr.fromArray(n,s);const a=r.x*Math.abs(nr.x)+r.y*Math.abs(nr.y)+r.z*Math.abs(nr.z),c=e.dot(nr),u=t.dot(nr),f=i.dot(nr);if(Math.max(-Math.max(c,u,f),Math.min(c,u,f))>a)return!1}return!0}const eg=new Qs,_s=new ie,Wa=new ie;class $c{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):eg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_s.subVectors(e,this.center);const t=_s.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(_s,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_s.copy(e.center).add(Wa)),this.expandByPoint(_s.copy(e.center).sub(Wa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const li=new ie,Xa=new ie,xo=new ie,Ni=new ie,qa=new ie,go=new ie,ja=new ie;class tg{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Xa.copy(e).add(t).multiplyScalar(.5),xo.copy(t).sub(e).normalize(),Ni.copy(this.origin).sub(Xa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xo),a=Ni.dot(this.direction),c=-Ni.dot(xo),u=Ni.lengthSq(),f=Math.abs(1-o*o);let h,m,x,y;if(f>0)if(h=o*c-a,m=o*a-c,y=s*f,h>=0)if(m>=-y)if(m<=y){const E=1/f;h*=E,m*=E,x=h*(h+o*m+2*a)+m*(o*h+m+2*c)+u}else m=s,h=Math.max(0,-(o*m+a)),x=-h*h+m*(m+2*c)+u;else m=-s,h=Math.max(0,-(o*m+a)),x=-h*h+m*(m+2*c)+u;else m<=-y?(h=Math.max(0,-(-o*s+a)),m=h>0?-s:Math.min(Math.max(-s,-c),s),x=-h*h+m*(m+2*c)+u):m<=y?(h=0,m=Math.min(Math.max(-s,-c),s),x=m*(m+2*c)+u):(h=Math.max(0,-(o*s+a)),m=h>0?s:Math.min(Math.max(-s,-c),s),x=-h*h+m*(m+2*c)+u);else m=o>0?-s:s,h=Math.max(0,-(o*m+a)),x=-h*h+m*(m+2*c)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Xa).addScaledVector(xo,m),x}intersectSphere(e,t){li.subVectors(e.center,this.origin);const i=li.dot(this.direction),r=li.dot(li)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,c;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,m=this.origin;return u>=0?(i=(e.min.x-m.x)*u,r=(e.max.x-m.x)*u):(i=(e.max.x-m.x)*u,r=(e.min.x-m.x)*u),f>=0?(s=(e.min.y-m.y)*f,o=(e.max.y-m.y)*f):(s=(e.max.y-m.y)*f,o=(e.min.y-m.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-m.z)*h,c=(e.max.z-m.z)*h):(a=(e.max.z-m.z)*h,c=(e.min.z-m.z)*h),i>c||a>r)||((a>i||i!==i)&&(i=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,i,r,s){qa.subVectors(t,e),go.subVectors(i,e),ja.crossVectors(qa,go);let o=this.direction.dot(ja),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,e);const c=a*this.direction.dot(go.crossVectors(Ni,go));if(c<0)return null;const u=a*this.direction.dot(qa.cross(Ni));if(u<0||c+u>o)return null;const f=-a*Ni.dot(ja);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bt{constructor(e,t,i,r,s,o,a,c,u,f,h,m,x,y,E,_){Bt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,c,u,f,h,m,x,y,E,_)}set(e,t,i,r,s,o,a,c,u,f,h,m,x,y,E,_){const p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=c,p[2]=u,p[6]=f,p[10]=h,p[14]=m,p[3]=x,p[7]=y,p[11]=E,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Pr.setFromMatrixColumn(e,0).length(),s=1/Pr.setFromMatrixColumn(e,1).length(),o=1/Pr.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const m=o*f,x=o*h,y=a*f,E=a*h;t[0]=c*f,t[4]=-c*h,t[8]=u,t[1]=x+y*u,t[5]=m-E*u,t[9]=-a*c,t[2]=E-m*u,t[6]=y+x*u,t[10]=o*c}else if(e.order==="YXZ"){const m=c*f,x=c*h,y=u*f,E=u*h;t[0]=m+E*a,t[4]=y*a-x,t[8]=o*u,t[1]=o*h,t[5]=o*f,t[9]=-a,t[2]=x*a-y,t[6]=E+m*a,t[10]=o*c}else if(e.order==="ZXY"){const m=c*f,x=c*h,y=u*f,E=u*h;t[0]=m-E*a,t[4]=-o*h,t[8]=y+x*a,t[1]=x+y*a,t[5]=o*f,t[9]=E-m*a,t[2]=-o*u,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const m=o*f,x=o*h,y=a*f,E=a*h;t[0]=c*f,t[4]=y*u-x,t[8]=m*u+E,t[1]=c*h,t[5]=E*u+m,t[9]=x*u-y,t[2]=-u,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const m=o*c,x=o*u,y=a*c,E=a*u;t[0]=c*f,t[4]=E-m*h,t[8]=y*h+x,t[1]=h,t[5]=o*f,t[9]=-a*f,t[2]=-u*f,t[6]=x*h+y,t[10]=m-E*h}else if(e.order==="XZY"){const m=o*c,x=o*u,y=a*c,E=a*u;t[0]=c*f,t[4]=-h,t[8]=u*f,t[1]=m*h+E,t[5]=o*f,t[9]=x*h-y,t[2]=y*h-x,t[6]=a*f,t[10]=E*h+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ng,e,ig)}lookAt(e,t,i){const r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),Fi.crossVectors(i,Sn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),Fi.crossVectors(i,Sn)),Fi.normalize(),_o.crossVectors(Sn,Fi),r[0]=Fi.x,r[4]=_o.x,r[8]=Sn.x,r[1]=Fi.y,r[5]=_o.y,r[9]=Sn.y,r[2]=Fi.z,r[6]=_o.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],c=i[8],u=i[12],f=i[1],h=i[5],m=i[9],x=i[13],y=i[2],E=i[6],_=i[10],p=i[14],L=i[3],b=i[7],M=i[11],z=i[15],N=r[0],V=r[4],j=r[8],D=r[12],C=r[1],q=r[5],ee=r[9],fe=r[13],pe=r[2],de=r[6],he=r[10],ae=r[14],Y=r[3],Se=r[7],Ee=r[11],Ue=r[15];return s[0]=o*N+a*C+c*pe+u*Y,s[4]=o*V+a*q+c*de+u*Se,s[8]=o*j+a*ee+c*he+u*Ee,s[12]=o*D+a*fe+c*ae+u*Ue,s[1]=f*N+h*C+m*pe+x*Y,s[5]=f*V+h*q+m*de+x*Se,s[9]=f*j+h*ee+m*he+x*Ee,s[13]=f*D+h*fe+m*ae+x*Ue,s[2]=y*N+E*C+_*pe+p*Y,s[6]=y*V+E*q+_*de+p*Se,s[10]=y*j+E*ee+_*he+p*Ee,s[14]=y*D+E*fe+_*ae+p*Ue,s[3]=L*N+b*C+M*pe+z*Y,s[7]=L*V+b*q+M*de+z*Se,s[11]=L*j+b*ee+M*he+z*Ee,s[15]=L*D+b*fe+M*ae+z*Ue,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],u=e[13],f=e[2],h=e[6],m=e[10],x=e[14],y=e[3],E=e[7],_=e[11],p=e[15];return y*(+s*c*h-r*u*h-s*a*m+i*u*m+r*a*x-i*c*x)+E*(+t*c*x-t*u*m+s*o*m-r*o*x+r*u*f-s*c*f)+_*(+t*u*h-t*a*x-s*o*h+i*o*x+s*a*f-i*u*f)+p*(-r*a*f-t*c*h+t*a*m+r*o*h-i*o*m+i*c*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],u=e[7],f=e[8],h=e[9],m=e[10],x=e[11],y=e[12],E=e[13],_=e[14],p=e[15],L=h*_*u-E*m*u+E*c*x-a*_*x-h*c*p+a*m*p,b=y*m*u-f*_*u-y*c*x+o*_*x+f*c*p-o*m*p,M=f*E*u-y*h*u+y*a*x-o*E*x-f*a*p+o*h*p,z=y*h*c-f*E*c-y*a*m+o*E*m+f*a*_-o*h*_,N=t*L+i*b+r*M+s*z;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/N;return e[0]=L*V,e[1]=(E*m*s-h*_*s-E*r*x+i*_*x+h*r*p-i*m*p)*V,e[2]=(a*_*s-E*c*s+E*r*u-i*_*u-a*r*p+i*c*p)*V,e[3]=(h*c*s-a*m*s-h*r*u+i*m*u+a*r*x-i*c*x)*V,e[4]=b*V,e[5]=(f*_*s-y*m*s+y*r*x-t*_*x-f*r*p+t*m*p)*V,e[6]=(y*c*s-o*_*s-y*r*u+t*_*u+o*r*p-t*c*p)*V,e[7]=(o*m*s-f*c*s+f*r*u-t*m*u-o*r*x+t*c*x)*V,e[8]=M*V,e[9]=(y*h*s-f*E*s-y*i*x+t*E*x+f*i*p-t*h*p)*V,e[10]=(o*E*s-y*a*s+y*i*u-t*E*u-o*i*p+t*a*p)*V,e[11]=(f*a*s-o*h*s-f*i*u+t*h*u+o*i*x-t*a*x)*V,e[12]=z*V,e[13]=(f*E*r-y*h*r+y*i*m-t*E*m-f*i*_+t*h*_)*V,e[14]=(y*a*r-o*E*r-y*i*c+t*E*c+o*i*_-t*a*_)*V,e[15]=(o*h*r-f*a*r+f*i*c-t*h*c-o*i*m+t*a*m)*V,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,c=e.z,u=s*o,f=s*a;return this.set(u*o+i,u*a-r*c,u*c+r*a,0,u*a+r*c,f*a+i,f*c-r*o,0,u*c-r*a,f*c+r*o,s*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,u=s+s,f=o+o,h=a+a,m=s*u,x=s*f,y=s*h,E=o*f,_=o*h,p=a*h,L=c*u,b=c*f,M=c*h,z=i.x,N=i.y,V=i.z;return r[0]=(1-(E+p))*z,r[1]=(x+M)*z,r[2]=(y-b)*z,r[3]=0,r[4]=(x-M)*N,r[5]=(1-(m+p))*N,r[6]=(_+L)*N,r[7]=0,r[8]=(y+b)*V,r[9]=(_-L)*V,r[10]=(1-(m+E))*V,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Pr.set(r[0],r[1],r[2]).length();const o=Pr.set(r[4],r[5],r[6]).length(),a=Pr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const u=1/s,f=1/o,h=1/a;return Bn.elements[0]*=u,Bn.elements[1]*=u,Bn.elements[2]*=u,Bn.elements[4]*=f,Bn.elements[5]*=f,Bn.elements[6]*=f,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,t.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Kn,c=!1){const u=this.elements,f=2*s/(t-e),h=2*s/(i-r),m=(t+e)/(t-e),x=(i+r)/(i-r);let y,E;if(c)y=s/(o-s),E=o*s/(o-s);else if(a===Kn)y=-(o+s)/(o-s),E=-2*o*s/(o-s);else if(a===Qo)y=-o/(o-s),E=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=m,u[12]=0,u[1]=0,u[5]=h,u[9]=x,u[13]=0,u[2]=0,u[6]=0,u[10]=y,u[14]=E,u[3]=0,u[7]=0,u[11]=-1,u[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Kn,c=!1){const u=this.elements,f=2/(t-e),h=2/(i-r),m=-(t+e)/(t-e),x=-(i+r)/(i-r);let y,E;if(c)y=1/(o-s),E=o/(o-s);else if(a===Kn)y=-2/(o-s),E=-(o+s)/(o-s);else if(a===Qo)y=-1/(o-s),E=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return u[0]=f,u[4]=0,u[8]=0,u[12]=m,u[1]=0,u[5]=h,u[9]=0,u[13]=x,u[2]=0,u[6]=0,u[10]=y,u[14]=E,u[3]=0,u[7]=0,u[11]=0,u[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Pr=new ie,Bn=new Bt,ng=new ie(0,0,0),ig=new ie(1,1,1),Fi=new ie,_o=new ie,Sn=new ie,mf=new Bt,xf=new Zs;class ti{constructor(e=0,t=0,i=0,r=ti.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],u=r[5],f=r[9],h=r[2],m=r[6],x=r[10];switch(t){case"XYZ":this._y=Math.asin(dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,x),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(m,u),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,x),this._z=Math.atan2(c,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(dt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-h,x),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(m,x),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,x));break;case"XZY":this._z=Math.asin(-dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,x),this._y=0);break;default:at("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return mf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(mf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xf.setFromEuler(this),this.setFromQuaternion(xf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ti.DEFAULT_ORDER="XYZ";class Dd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rg=0;const gf=new ie,Lr=new Zs,ci=new Bt,vo=new ie,vs=new ie,sg=new ie,og=new Zs,_f=new ie(1,0,0),vf=new ie(0,1,0),yf=new ie(0,0,1),Sf={type:"added"},ag={type:"removed"},Dr={type:"childadded",child:null},Ya={type:"childremoved",child:null};class gn extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rg++}),this.uuid=os(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gn.DEFAULT_UP.clone();const e=new ie,t=new ti,i=new Zs,r=new ie(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Bt},normalMatrix:{value:new ot}}),this.matrix=new Bt,this.matrixWorld=new Bt,this.matrixAutoUpdate=gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.multiply(Lr),this}rotateOnWorldAxis(e,t){return Lr.setFromAxisAngle(e,t),this.quaternion.premultiply(Lr),this}rotateX(e){return this.rotateOnAxis(_f,e)}rotateY(e){return this.rotateOnAxis(vf,e)}rotateZ(e){return this.rotateOnAxis(yf,e)}translateOnAxis(e,t){return gf.copy(e).applyQuaternion(this.quaternion),this.position.add(gf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(_f,e)}translateY(e){return this.translateOnAxis(vf,e)}translateZ(e){return this.translateOnAxis(yf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?vo.copy(e):vo.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(vs,vo,this.up):ci.lookAt(vo,vs,this.up),this.quaternion.setFromRotationMatrix(ci),r&&(ci.extractRotation(r.matrixWorld),Lr.setFromRotationMatrix(ci),this.quaternion.premultiply(Lr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Vt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Sf),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null):Vt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ag),Ya.child=e,this.dispatchEvent(Ya),Ya.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Sf),Dr.child=e,this.dispatchEvent(Dr),Dr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,e,sg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,og,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let u=0,f=c.length;u<f;u++){const h=c[u];s(e.shapes,h)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,u=this.material.length;c<u;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),u=o(e.textures),f=o(e.images),h=o(e.shapes),m=o(e.skeletons),x=o(e.animations),y=o(e.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),u.length>0&&(i.textures=u),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),m.length>0&&(i.skeletons=m),x.length>0&&(i.animations=x),y.length>0&&(i.nodes=y)}return i.object=r,i;function o(a){const c=[];for(const u in a){const f=a[u];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}gn.DEFAULT_UP=new ie(0,1,0);gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new ie,ui=new ie,$a=new ie,fi=new ie,Ir=new ie,Ur=new ie,bf=new ie,Ka=new ie,Ja=new ie,Za=new ie,Qa=new At,el=new At,tl=new At;class Vn{constructor(e=new ie,t=new ie,i=new ie){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),zn.subVectors(e,t),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){zn.subVectors(r,t),ui.subVectors(i,t),$a.subVectors(e,t);const o=zn.dot(zn),a=zn.dot(ui),c=zn.dot($a),u=ui.dot(ui),f=ui.dot($a),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const m=1/h,x=(u*c-a*f)*m,y=(o*f-a*c)*m;return s.set(1-x-y,y,x)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(e,t,i,r,s,o,a,c){return this.getBarycoord(e,t,i,r,fi)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fi.x),c.addScaledVector(o,fi.y),c.addScaledVector(a,fi.z),c)}static getInterpolatedAttribute(e,t,i,r,s,o){return Qa.setScalar(0),el.setScalar(0),tl.setScalar(0),Qa.fromBufferAttribute(e,t),el.fromBufferAttribute(e,i),tl.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Qa,s.x),o.addScaledVector(el,s.y),o.addScaledVector(tl,s.z),o}static isFrontFacing(e,t,i,r){return zn.subVectors(i,t),ui.subVectors(e,t),zn.cross(ui).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),zn.cross(ui).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Vn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ir.subVectors(r,i),Ur.subVectors(s,i),Ka.subVectors(e,i);const c=Ir.dot(Ka),u=Ur.dot(Ka);if(c<=0&&u<=0)return t.copy(i);Ja.subVectors(e,r);const f=Ir.dot(Ja),h=Ur.dot(Ja);if(f>=0&&h<=f)return t.copy(r);const m=c*h-f*u;if(m<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(i).addScaledVector(Ir,o);Za.subVectors(e,s);const x=Ir.dot(Za),y=Ur.dot(Za);if(y>=0&&x<=y)return t.copy(s);const E=x*u-c*y;if(E<=0&&u>=0&&y<=0)return a=u/(u-y),t.copy(i).addScaledVector(Ur,a);const _=f*y-x*h;if(_<=0&&h-f>=0&&x-y>=0)return bf.subVectors(s,r),a=(h-f)/(h-f+(x-y)),t.copy(r).addScaledVector(bf,a);const p=1/(_+E+m);return o=E*p,a=m*p,t.copy(i).addScaledVector(Ir,o).addScaledVector(Ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Id={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},yo={h:0,s:0,l:0};function nl(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class xt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.colorSpaceToWorking(this,t),this}setRGB(e,t,i,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.colorSpaceToWorking(this,r),this}setHSL(e,t,i,r=vt.workingColorSpace){if(e=jx(e,1),t=dt(t,0,1),i=dt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=nl(o,s,e+1/3),this.g=nl(o,s,e),this.b=nl(o,s,e-1/3)}return vt.colorSpaceToWorking(this,r),this}setStyle(e,t=En){function i(s){s!==void 0&&parseFloat(s)<1&&at("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:at("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);at("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const i=Id[e.toLowerCase()];return i!==void 0?this.setHex(i,t):at("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Mi(e.r),this.g=Mi(e.g),this.b=Mi(e.b),this}copyLinearToSRGB(e){return this.r=Yr(e.r),this.g=Yr(e.g),this.b=Yr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return vt.workingToColorSpace(en.copy(this),e),Math.round(dt(en.r*255,0,255))*65536+Math.round(dt(en.g*255,0,255))*256+Math.round(dt(en.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.workingToColorSpace(en.copy(this),t);const i=en.r,r=en.g,s=en.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let c,u;const f=(a+o)/2;if(a===o)c=0,u=0;else{const h=o-a;switch(u=f<=.5?h/(o+a):h/(2-o-a),o){case i:c=(r-s)/h+(r<s?6:0);break;case r:c=(s-i)/h+2;break;case s:c=(i-r)/h+4;break}c/=6}return e.h=c,e.s=u,e.l=f,e}getRGB(e,t=vt.workingColorSpace){return vt.workingToColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=En){vt.workingToColorSpace(en.copy(this),e);const t=en.r,i=en.g,r=en.b;return e!==En?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(yo);const i=Ba(Oi.h,yo.h,t),r=Ba(Oi.s,yo.s,t),s=Ba(Oi.l,yo.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new xt;xt.NAMES=Id;let lg=0;class eo extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lg++}),this.uuid=os(),this.name="",this.type="Material",this.blending=jr,this.side=$i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Pl,this.blendEquation=ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new xt(0,0,0),this.blendAlpha=0,this.depthFunc=Zr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=af,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){at(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){at(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==jr&&(i.blending=this.blending),this.side!==$i&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rl&&(i.blendSrc=this.blendSrc),this.blendDst!==Pl&&(i.blendDst=this.blendDst),this.blendEquation!==ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zr&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==af&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ud extends eo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=vd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ht=new ie,So=new Ae;let cg=0;class Zn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=lf,this.updateRanges=[],this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)So.fromBufferAttribute(this,t),So.applyMatrix3(e),this.setXY(t,So.x,So.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix3(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyMatrix4(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.applyNormalMatrix(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ht.fromBufferAttribute(this,t),Ht.transformDirection(e),this.setXYZ(t,Ht.x,Ht.y,Ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=xs(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=pn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xs(t,this.array)),t}setX(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xs(t,this.array)),t}setY(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xs(t,this.array)),t}setW(e,t){return this.normalized&&(t=pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array),r=pn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=pn(t,this.array),i=pn(i,this.array),r=pn(r,this.array),s=pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==lf&&(e.usage=this.usage),e}}class Nd extends Zn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Fd extends Zn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class qt extends Zn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let ug=0;const Ln=new Bt,il=new gn,Nr=new ie,bn=new Qs,ys=new Qs,Xt=new ie;class Nn extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ug++}),this.uuid=os(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pd(e)?Fd:Nd)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new ot().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,t,i){return Ln.makeTranslation(e,t,i),this.applyMatrix4(Ln),this}scale(e,t,i){return Ln.makeScale(e,t,i),this.applyMatrix4(Ln),this}lookAt(e){return il.lookAt(e),il.updateMatrix(),this.applyMatrix4(il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Nr).negate(),this.translate(Nr.x,Nr.y,Nr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new qt(i,3))}else{const i=Math.min(e.length,t.count);for(let r=0;r<i;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&at("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];bn.setFromBufferAttribute(s),this.morphTargetsRelative?(Xt.addVectors(this.boundingBox.min,bn.min),this.boundingBox.expandByPoint(Xt),Xt.addVectors(this.boundingBox.max,bn.max),this.boundingBox.expandByPoint(Xt)):(this.boundingBox.expandByPoint(bn.min),this.boundingBox.expandByPoint(bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Vt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $c);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Vt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const i=this.boundingSphere.center;if(bn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ys.setFromBufferAttribute(a),this.morphTargetsRelative?(Xt.addVectors(bn.min,ys.min),bn.expandByPoint(Xt),Xt.addVectors(bn.max,ys.max),bn.expandByPoint(Xt)):(bn.expandByPoint(ys.min),bn.expandByPoint(ys.max))}bn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Xt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Xt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let u=0,f=a.count;u<f;u++)Xt.fromBufferAttribute(a,u),c&&(Nr.fromBufferAttribute(e,u),Xt.add(Nr)),r=Math.max(r,i.distanceToSquared(Xt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Vt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Vt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let j=0;j<i.count;j++)a[j]=new ie,c[j]=new ie;const u=new ie,f=new ie,h=new ie,m=new Ae,x=new Ae,y=new Ae,E=new ie,_=new ie;function p(j,D,C){u.fromBufferAttribute(i,j),f.fromBufferAttribute(i,D),h.fromBufferAttribute(i,C),m.fromBufferAttribute(s,j),x.fromBufferAttribute(s,D),y.fromBufferAttribute(s,C),f.sub(u),h.sub(u),x.sub(m),y.sub(m);const q=1/(x.x*y.y-y.x*x.y);isFinite(q)&&(E.copy(f).multiplyScalar(y.y).addScaledVector(h,-x.y).multiplyScalar(q),_.copy(h).multiplyScalar(x.x).addScaledVector(f,-y.x).multiplyScalar(q),a[j].add(E),a[D].add(E),a[C].add(E),c[j].add(_),c[D].add(_),c[C].add(_))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let j=0,D=L.length;j<D;++j){const C=L[j],q=C.start,ee=C.count;for(let fe=q,pe=q+ee;fe<pe;fe+=3)p(e.getX(fe+0),e.getX(fe+1),e.getX(fe+2))}const b=new ie,M=new ie,z=new ie,N=new ie;function V(j){z.fromBufferAttribute(r,j),N.copy(z);const D=a[j];b.copy(D),b.sub(z.multiplyScalar(z.dot(D))).normalize(),M.crossVectors(N,D);const q=M.dot(c[j])<0?-1:1;o.setXYZW(j,b.x,b.y,b.z,q)}for(let j=0,D=L.length;j<D;++j){const C=L[j],q=C.start,ee=C.count;for(let fe=q,pe=q+ee;fe<pe;fe+=3)V(e.getX(fe+0)),V(e.getX(fe+1)),V(e.getX(fe+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let m=0,x=i.count;m<x;m++)i.setXYZ(m,0,0,0);const r=new ie,s=new ie,o=new ie,a=new ie,c=new ie,u=new ie,f=new ie,h=new ie;if(e)for(let m=0,x=e.count;m<x;m+=3){const y=e.getX(m+0),E=e.getX(m+1),_=e.getX(m+2);r.fromBufferAttribute(t,y),s.fromBufferAttribute(t,E),o.fromBufferAttribute(t,_),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,y),c.fromBufferAttribute(i,E),u.fromBufferAttribute(i,_),a.add(f),c.add(f),u.add(f),i.setXYZ(y,a.x,a.y,a.z),i.setXYZ(E,c.x,c.y,c.z),i.setXYZ(_,u.x,u.y,u.z)}else for(let m=0,x=t.count;m<x;m+=3)r.fromBufferAttribute(t,m+0),s.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(m+0,f.x,f.y,f.z),i.setXYZ(m+1,f.x,f.y,f.z),i.setXYZ(m+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Xt.fromBufferAttribute(e,t),Xt.normalize(),e.setXYZ(t,Xt.x,Xt.y,Xt.z)}toNonIndexed(){function e(a,c){const u=a.array,f=a.itemSize,h=a.normalized,m=new u.constructor(c.length*f);let x=0,y=0;for(let E=0,_=c.length;E<_;E++){a.isInterleavedBufferAttribute?x=c[E]*a.data.stride+a.offset:x=c[E]*f;for(let p=0;p<f;p++)m[y++]=u[x++]}return new Zn(m,f,h)}if(this.index===null)return at("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Nn,i=this.index.array,r=this.attributes;for(const a in r){const c=r[a],u=e(c,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const c=[],u=s[a];for(let f=0,h=u.length;f<h;f++){const m=u[f],x=e(m,i);c.push(x)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const u in c)c[u]!==void 0&&(e[u]=c[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const c in i){const u=i[c];e.data.attributes[c]=u.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const u=this.morphAttributes[c],f=[];for(let h=0,m=u.length;h<m;h++){const x=u[h];f.push(x.toJSON(e.data))}f.length>0&&(r[c]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(t))}const s=e.morphAttributes;for(const u in s){const f=[],h=s[u];for(let m=0,x=h.length;m<x;m++)f.push(h[m].clone(t));this.morphAttributes[u]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,f=o.length;u<f;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mf=new Bt,ir=new tg,bo=new $c,Ef=new ie,Mo=new ie,Eo=new ie,To=new ie,rl=new ie,Ao=new ie,Tf=new ie,wo=new ie;class ni extends gn{constructor(e=new Nn,t=new Ud){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ao.set(0,0,0);for(let c=0,u=s.length;c<u;c++){const f=a[c],h=s[c];f!==0&&(rl.fromBufferAttribute(h,e),o?Ao.addScaledVector(rl,f):Ao.addScaledVector(rl.sub(t),f))}t.add(Ao)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),bo.copy(i.boundingSphere),bo.applyMatrix4(s),ir.copy(e.ray).recast(e.near),!(bo.containsPoint(ir.origin)===!1&&(ir.intersectSphere(bo,Ef)===null||ir.origin.distanceToSquared(Ef)>(e.far-e.near)**2))&&(Mf.copy(s).invert(),ir.copy(e.ray).applyMatrix4(Mf),!(i.boundingBox!==null&&ir.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,ir)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,m=s.groups,x=s.drawRange;if(a!==null)if(Array.isArray(o))for(let y=0,E=m.length;y<E;y++){const _=m[y],p=o[_.materialIndex],L=Math.max(_.start,x.start),b=Math.min(a.count,Math.min(_.start+_.count,x.start+x.count));for(let M=L,z=b;M<z;M+=3){const N=a.getX(M),V=a.getX(M+1),j=a.getX(M+2);r=Co(this,p,e,i,u,f,h,N,V,j),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const y=Math.max(0,x.start),E=Math.min(a.count,x.start+x.count);for(let _=y,p=E;_<p;_+=3){const L=a.getX(_),b=a.getX(_+1),M=a.getX(_+2);r=Co(this,o,e,i,u,f,h,L,b,M),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let y=0,E=m.length;y<E;y++){const _=m[y],p=o[_.materialIndex],L=Math.max(_.start,x.start),b=Math.min(c.count,Math.min(_.start+_.count,x.start+x.count));for(let M=L,z=b;M<z;M+=3){const N=M,V=M+1,j=M+2;r=Co(this,p,e,i,u,f,h,N,V,j),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=_.materialIndex,t.push(r))}}else{const y=Math.max(0,x.start),E=Math.min(c.count,x.start+x.count);for(let _=y,p=E;_<p;_+=3){const L=_,b=_+1,M=_+2;r=Co(this,o,e,i,u,f,h,L,b,M),r&&(r.faceIndex=Math.floor(_/3),t.push(r))}}}}function fg(n,e,t,i,r,s,o,a){let c;if(e.side===xn?c=i.intersectTriangle(o,s,r,!0,a):c=i.intersectTriangle(r,s,o,e.side===$i,a),c===null)return null;wo.copy(a),wo.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(wo);return u<t.near||u>t.far?null:{distance:u,point:wo.clone(),object:n}}function Co(n,e,t,i,r,s,o,a,c,u){n.getVertexPosition(a,Mo),n.getVertexPosition(c,Eo),n.getVertexPosition(u,To);const f=fg(n,e,t,i,Mo,Eo,To,Tf);if(f){const h=new ie;Vn.getBarycoord(Tf,Mo,Eo,To,h),r&&(f.uv=Vn.getInterpolatedAttribute(r,a,c,u,h,new Ae)),s&&(f.uv1=Vn.getInterpolatedAttribute(s,a,c,u,h,new Ae)),o&&(f.normal=Vn.getInterpolatedAttribute(o,a,c,u,h,new ie),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const m={a,b:c,c:u,normal:new ie,materialIndex:0};Vn.getNormal(Mo,Eo,To,m.normal),f.face=m,f.barycoord=h}return f}class as extends Nn{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],u=[],f=[],h=[];let m=0,x=0;y("z","y","x",-1,-1,i,t,e,o,s,0),y("z","y","x",1,-1,i,t,-e,o,s,1),y("x","z","y",1,1,e,i,t,r,o,2),y("x","z","y",1,-1,e,i,-t,r,o,3),y("x","y","z",1,-1,e,t,i,r,s,4),y("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(c),this.setAttribute("position",new qt(u,3)),this.setAttribute("normal",new qt(f,3)),this.setAttribute("uv",new qt(h,2));function y(E,_,p,L,b,M,z,N,V,j,D){const C=M/V,q=z/j,ee=M/2,fe=z/2,pe=N/2,de=V+1,he=j+1;let ae=0,Y=0;const Se=new ie;for(let Ee=0;Ee<he;Ee++){const Ue=Ee*q-fe;for(let we=0;we<de;we++){const Ce=we*C-ee;Se[E]=Ce*L,Se[_]=Ue*b,Se[p]=pe,u.push(Se.x,Se.y,Se.z),Se[E]=0,Se[_]=0,Se[p]=N>0?1:-1,f.push(Se.x,Se.y,Se.z),h.push(we/V),h.push(1-Ee/j),ae+=1}}for(let Ee=0;Ee<j;Ee++)for(let Ue=0;Ue<V;Ue++){const we=m+Ue+de*Ee,Ce=m+Ue+de*(Ee+1),ne=m+(Ue+1)+de*(Ee+1),$=m+(Ue+1)+de*Ee;c.push(we,Ce,$),c.push(Ce,ne,$),Y+=6}a.addGroup(x,Y,D),x+=Y,m+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new as(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ns(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(at("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function ln(n){const e={};for(let t=0;t<n.length;t++){const i=ns(n[t]);for(const r in i)e[r]=i[r]}return e}function hg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Od(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:vt.workingColorSpace}const dg={clone:ns,merge:ln};var pg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,mg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends eo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=pg,this.fragmentShader=mg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ns(e.uniforms),this.uniformsGroups=hg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Bd extends gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Bt,this.projectionMatrix=new Bt,this.projectionMatrixInverse=new Bt,this.coordinateSystem=Kn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new ie,Af=new Ae,wf=new Ae;class Tn extends Bd{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Oa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xc*2*Math.atan(Math.tan(Oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,t){return this.getViewBounds(e,Af,wf),t.subVectors(wf,Af)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Oa*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*i/u,r*=o.width/c,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Fr=-90,Or=1;class xg extends gn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Tn(Fr,Or,e,t);r.layers=this.layers,this.add(r);const s=new Tn(Fr,Or,e,t);s.layers=this.layers,this.add(s);const o=new Tn(Fr,Or,e,t);o.layers=this.layers,this.add(o);const a=new Tn(Fr,Or,e,t);a.layers=this.layers,this.add(a);const c=new Tn(Fr,Or,e,t);c.layers=this.layers,this.add(c);const u=new Tn(Fr,Or,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,c]=t;for(const u of t)this.remove(u);if(e===Kn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qo)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,c,u,f]=this.children,h=e.getRenderTarget(),m=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),y=e.xr.enabled;e.xr.enabled=!1;const E=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,c),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=E,e.setRenderTarget(i,5,r),e.render(t,f),e.setRenderTarget(h,m,x),e.xr.enabled=y,i.texture.needsPMREMUpdate=!0}}class zd extends fn{constructor(e=[],t=Qr,i,r,s,o,a,c,u,f){super(e,t,i,r,s,o,a,c,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class gg extends xr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new zd(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new as(5,5,5),s=new wi({name:"CubemapFromEquirect",uniforms:ns(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:xn,blending:bi});s.uniforms.tEquirect.value=t;const o=new ni(r,s),a=t.minFilter;return t.minFilter===hr&&(t.minFilter=In),new xg(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}class Ro extends gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _g={type:"move"};class sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ro,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ro,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ro,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const E of e.hand.values()){const _=t.getJointPose(E,i),p=this._getHandJoint(u,E);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],m=f.position.distanceTo(h.position),x=.02,y=.005;u.inputState.pinching&&m>x+y?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&m<=x-y&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(_g)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Ro;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class vg extends gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class yg extends fn{constructor(e=null,t=1,i=1,r,s,o,a,c,u=wn,f=wn,h,m){super(null,o,a,c,u,f,r,s,h,m),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ol=new ie,Sg=new ie,bg=new ot;class cr{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=ol.subVectors(i,t).cross(Sg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(ol),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||bg.getNormalMatrix(e),r=this.coplanarPoint(ol).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rr=new $c,Mg=new Ae(.5,.5),Po=new ie;class Kc{constructor(e=new cr,t=new cr,i=new cr,r=new cr,s=new cr,o=new cr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Kn,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],c=s[2],u=s[3],f=s[4],h=s[5],m=s[6],x=s[7],y=s[8],E=s[9],_=s[10],p=s[11],L=s[12],b=s[13],M=s[14],z=s[15];if(r[0].setComponents(u-o,x-f,p-y,z-L).normalize(),r[1].setComponents(u+o,x+f,p+y,z+L).normalize(),r[2].setComponents(u+a,x+h,p+E,z+b).normalize(),r[3].setComponents(u-a,x-h,p-E,z-b).normalize(),i)r[4].setComponents(c,m,_,M).normalize(),r[5].setComponents(u-c,x-m,p-_,z-M).normalize();else if(r[4].setComponents(u-c,x-m,p-_,z-M).normalize(),t===Kn)r[5].setComponents(u+c,x+m,p+_,z+M).normalize();else if(t===Qo)r[5].setComponents(c,m,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){rr.center.set(0,0,0);const t=Mg.distanceTo(e.center);return rr.radius=.7071067811865476+t,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Po.x=r.normal.x>0?e.max.x:e.min.x,Po.y=r.normal.y>0?e.max.y:e.min.y,Po.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Po)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vd extends fn{constructor(e,t,i=mr,r,s,o,a=wn,c=wn,u,f=Ws,h=1){if(f!==Ws&&f!==Xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const m={width:e,height:t,depth:h};super(m,r,s,o,a,c,f,i,u),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Yc(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Hd extends fn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ha extends Nn{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),u(i),f(),this.setAttribute("position",new qt(s,3)),this.setAttribute("normal",new qt(s.slice(),3)),this.setAttribute("uv",new qt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(L){const b=new ie,M=new ie,z=new ie;for(let N=0;N<t.length;N+=3)x(t[N+0],b),x(t[N+1],M),x(t[N+2],z),c(b,M,z,L)}function c(L,b,M,z){const N=z+1,V=[];for(let j=0;j<=N;j++){V[j]=[];const D=L.clone().lerp(M,j/N),C=b.clone().lerp(M,j/N),q=N-j;for(let ee=0;ee<=q;ee++)ee===0&&j===N?V[j][ee]=D:V[j][ee]=D.clone().lerp(C,ee/q)}for(let j=0;j<N;j++)for(let D=0;D<2*(N-j)-1;D++){const C=Math.floor(D/2);D%2===0?(m(V[j][C+1]),m(V[j+1][C]),m(V[j][C])):(m(V[j][C+1]),m(V[j+1][C+1]),m(V[j+1][C]))}}function u(L){const b=new ie;for(let M=0;M<s.length;M+=3)b.x=s[M+0],b.y=s[M+1],b.z=s[M+2],b.normalize().multiplyScalar(L),s[M+0]=b.x,s[M+1]=b.y,s[M+2]=b.z}function f(){const L=new ie;for(let b=0;b<s.length;b+=3){L.x=s[b+0],L.y=s[b+1],L.z=s[b+2];const M=_(L)/2/Math.PI+.5,z=p(L)/Math.PI+.5;o.push(M,1-z)}y(),h()}function h(){for(let L=0;L<o.length;L+=6){const b=o[L+0],M=o[L+2],z=o[L+4],N=Math.max(b,M,z),V=Math.min(b,M,z);N>.9&&V<.1&&(b<.2&&(o[L+0]+=1),M<.2&&(o[L+2]+=1),z<.2&&(o[L+4]+=1))}}function m(L){s.push(L.x,L.y,L.z)}function x(L,b){const M=L*3;b.x=e[M+0],b.y=e[M+1],b.z=e[M+2]}function y(){const L=new ie,b=new ie,M=new ie,z=new ie,N=new Ae,V=new Ae,j=new Ae;for(let D=0,C=0;D<s.length;D+=9,C+=6){L.set(s[D+0],s[D+1],s[D+2]),b.set(s[D+3],s[D+4],s[D+5]),M.set(s[D+6],s[D+7],s[D+8]),N.set(o[C+0],o[C+1]),V.set(o[C+2],o[C+3]),j.set(o[C+4],o[C+5]),z.copy(L).add(b).add(M).divideScalar(3);const q=_(z);E(N,C+0,L,q),E(V,C+2,b,q),E(j,C+4,M,q)}}function E(L,b,M,z){z<0&&L.x===1&&(o[b]=L.x-1),M.x===0&&M.z===0&&(o[b]=z/2/Math.PI+.5)}function _(L){return Math.atan2(L.z,-L.x)}function p(L){return Math.atan2(-L.y,Math.sqrt(L.x*L.x+L.z*L.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.vertices,e.indices,e.radius,e.details)}}class ii{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){at("Curve: .getPoint() not implemented.")}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),t.push(s),r=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const i=this.getLengths();let r=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let a=0,c=s-1,u;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)c=r-1;else{c=r;break}if(r=c,i[r]===o)return r/(s-1);const f=i[r],m=i[r+1]-f,x=(o-f)/m;return(r+x)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new Ae:new ie);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){const i=new ie,r=[],s=[],o=[],a=new ie,c=new Bt;for(let x=0;x<=e;x++){const y=x/e;r[x]=this.getTangentAt(y,new ie)}s[0]=new ie,o[0]=new ie;let u=Number.MAX_VALUE;const f=Math.abs(r[0].x),h=Math.abs(r[0].y),m=Math.abs(r[0].z);f<=u&&(u=f,i.set(1,0,0)),h<=u&&(u=h,i.set(0,1,0)),m<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let x=1;x<=e;x++){if(s[x]=s[x-1].clone(),o[x]=o[x-1].clone(),a.crossVectors(r[x-1],r[x]),a.length()>Number.EPSILON){a.normalize();const y=Math.acos(dt(r[x-1].dot(r[x]),-1,1));s[x].applyMatrix4(c.makeRotationAxis(a,y))}o[x].crossVectors(r[x],s[x])}if(t===!0){let x=Math.acos(dt(s[0].dot(s[e]),-1,1));x/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(x=-x);for(let y=1;y<=e;y++)s[y].applyMatrix4(c.makeRotationAxis(r[y],x*y)),o[y].crossVectors(r[y],s[y])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Jc extends ii{constructor(e=0,t=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ae){const i=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let c=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const f=Math.cos(this.aRotation),h=Math.sin(this.aRotation),m=c-this.aX,x=u-this.aY;c=m*f-x*h+this.aX,u=m*h+x*f+this.aY}return i.set(c,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class Eg extends Jc{constructor(e,t,i,r,s,o){super(e,t,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Zc(){let n=0,e=0,t=0,i=0;function r(s,o,a,c){n=s,e=a,t=-3*s+3*o-2*a-c,i=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,u){r(o,a,u*(a-s),u*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,u,f,h){let m=(o-s)/u-(a-s)/(u+f)+(a-o)/f,x=(a-o)/f-(c-o)/(f+h)+(c-a)/h;m*=f,x*=f,r(o,a,m,x)},calc:function(s){const o=s*s,a=o*s;return n+e*s+t*o+i*a}}}const Lo=new ie,al=new Zc,ll=new Zc,cl=new Zc;class Tg extends ii{constructor(e=[],t=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=r}getPoint(e,t=new ie){const i=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let u,f;this.closed||a>0?u=r[(a-1)%s]:(Lo.subVectors(r[0],r[1]).add(r[0]),u=Lo);const h=r[a%s],m=r[(a+1)%s];if(this.closed||a+2<s?f=r[(a+2)%s]:(Lo.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=Lo),this.curveType==="centripetal"||this.curveType==="chordal"){const x=this.curveType==="chordal"?.5:.25;let y=Math.pow(u.distanceToSquared(h),x),E=Math.pow(h.distanceToSquared(m),x),_=Math.pow(m.distanceToSquared(f),x);E<1e-4&&(E=1),y<1e-4&&(y=E),_<1e-4&&(_=E),al.initNonuniformCatmullRom(u.x,h.x,m.x,f.x,y,E,_),ll.initNonuniformCatmullRom(u.y,h.y,m.y,f.y,y,E,_),cl.initNonuniformCatmullRom(u.z,h.z,m.z,f.z,y,E,_)}else this.curveType==="catmullrom"&&(al.initCatmullRom(u.x,h.x,m.x,f.x,this.tension),ll.initCatmullRom(u.y,h.y,m.y,f.y,this.tension),cl.initCatmullRom(u.z,h.z,m.z,f.z,this.tension));return i.set(al.calc(c),ll.calc(c),cl.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new ie().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Cf(n,e,t,i,r){const s=(i-e)*.5,o=(r-t)*.5,a=n*n,c=n*a;return(2*t-2*i+s+o)*c+(-3*t+3*i-2*s-o)*a+s*n+t}function Ag(n,e){const t=1-n;return t*t*e}function wg(n,e){return 2*(1-n)*n*e}function Cg(n,e){return n*n*e}function Us(n,e,t,i){return Ag(n,e)+wg(n,t)+Cg(n,i)}function Rg(n,e){const t=1-n;return t*t*t*e}function Pg(n,e){const t=1-n;return 3*t*t*n*e}function Lg(n,e){return 3*(1-n)*n*n*e}function Dg(n,e){return n*n*n*e}function Ns(n,e,t,i,r){return Rg(n,e)+Pg(n,t)+Lg(n,i)+Dg(n,r)}class kd extends ii{constructor(e=new Ae,t=new Ae,i=new Ae,r=new Ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new Ae){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ns(e,r.x,s.x,o.x,a.x),Ns(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Ig extends ii{constructor(e=new ie,t=new ie,i=new ie,r=new ie){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=r}getPoint(e,t=new ie){const i=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Ns(e,r.x,s.x,o.x,a.x),Ns(e,r.y,s.y,o.y,a.y),Ns(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Gd extends ii{constructor(e=new Ae,t=new Ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ae){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ug extends ii{constructor(e=new ie,t=new ie){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new ie){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Wd extends ii{constructor(e=new Ae,t=new Ae,i=new Ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Ae){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Us(e,r.x,s.x,o.x),Us(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Ng extends ii{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){const i=t,r=this.v0,s=this.v1,o=this.v2;return i.set(Us(e,r.x,s.x,o.x),Us(e,r.y,s.y,o.y),Us(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Xd extends ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ae){const i=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],u=r[o],f=r[o>r.length-2?r.length-1:o+1],h=r[o>r.length-3?r.length-1:o+2];return i.set(Cf(a,c.x,u.x,f.x,h.x),Cf(a,c.y,u.y,f.y,h.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const r=e.points[t];this.points.push(new Ae().fromArray(r))}return this}}var gc=Object.freeze({__proto__:null,ArcCurve:Eg,CatmullRomCurve3:Tg,CubicBezierCurve:kd,CubicBezierCurve3:Ig,EllipseCurve:Jc,LineCurve:Gd,LineCurve3:Ug,QuadraticBezierCurve:Wd,QuadraticBezierCurve3:Ng,SplineCurve:Xd});class Fg extends ii{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gc[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],c=a.getLength(),u=c===0?0:1-o/c;return a.getPointAt(u,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,r=this.curves.length;i<r;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let u=0;u<c.length;u++){const f=c[u];i&&i.equals(f)||(t.push(f),i=f)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const r=e.curves[t];this.curves.push(new gc[r.type]().fromJSON(r))}return this}}class $r extends Fg{constructor(e){super(),this.type="Path",this.currentPoint=new Ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new Gd(this.currentPoint.clone(),new Ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,r){const s=new Wd(this.currentPoint.clone(),new Ae(e,t),new Ae(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,t,i,r,s,o){const a=new kd(this.currentPoint.clone(),new Ae(e,t),new Ae(i,r),new Ae(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new Xd(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,r,s,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,i,r,s,o),this}absarc(e,t,i,r,s,o){return this.absellipse(e,t,i,i,r,s,o),this}ellipse(e,t,i,r,s,o,a,c){const u=this.currentPoint.x,f=this.currentPoint.y;return this.absellipse(e+u,t+f,i,r,s,o,a,c),this}absellipse(e,t,i,r,s,o,a,c){const u=new Jc(e,t,i,r,s,o,a,c);if(this.curves.length>0){const h=u.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(u);const f=u.getPoint(1);return this.currentPoint.copy(f),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Fs extends $r{constructor(e){super(e),this.uuid=os(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,r=this.holes.length;i<r;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const r=e.holes[t];this.holes.push(new $r().fromJSON(r))}return this}}function Og(n,e,t=2){const i=e&&e.length,r=i?e[0]*t:n.length;let s=qd(n,0,r,t,!0);const o=[];if(!s||s.next===s.prev)return o;let a,c,u;if(i&&(s=kg(n,e,s,t)),n.length>80*t){a=n[0],c=n[1];let f=a,h=c;for(let m=t;m<r;m+=t){const x=n[m],y=n[m+1];x<a&&(a=x),y<c&&(c=y),x>f&&(f=x),y>h&&(h=y)}u=Math.max(f-a,h-c),u=u!==0?32767/u:0}return js(s,o,t,a,c,u,0),o}function qd(n,e,t,i,r){let s;if(r===Qg(n,e,t,i)>0)for(let o=e;o<t;o+=i)s=Rf(o/i|0,n[o],n[o+1],s);else for(let o=t-i;o>=e;o-=i)s=Rf(o/i|0,n[o],n[o+1],s);return s&&is(s,s.next)&&($s(s),s=s.next),s}function gr(n,e){if(!n)return n;e||(e=n);let t=n,i;do if(i=!1,!t.steiner&&(is(t,t.next)||Ot(t.prev,t,t.next)===0)){if($s(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function js(n,e,t,i,r,s,o){if(!n)return;!o&&s&&jg(n,i,r,s);let a=n;for(;n.prev!==n.next;){const c=n.prev,u=n.next;if(s?zg(n,i,r,s):Bg(n)){e.push(c.i,n.i,u.i),$s(n),n=u.next,a=u.next;continue}if(n=u,n===a){o?o===1?(n=Vg(gr(n),e),js(n,e,t,i,r,s,2)):o===2&&Hg(n,e,t,i,r,s):js(gr(n),e,t,i,r,s,1);break}}}function Bg(n){const e=n.prev,t=n,i=n.next;if(Ot(e,t,i)>=0)return!1;const r=e.x,s=t.x,o=i.x,a=e.y,c=t.y,u=i.y,f=Math.min(r,s,o),h=Math.min(a,c,u),m=Math.max(r,s,o),x=Math.max(a,c,u);let y=i.next;for(;y!==e;){if(y.x>=f&&y.x<=m&&y.y>=h&&y.y<=x&&Es(r,a,s,c,o,u,y.x,y.y)&&Ot(y.prev,y,y.next)>=0)return!1;y=y.next}return!0}function zg(n,e,t,i){const r=n.prev,s=n,o=n.next;if(Ot(r,s,o)>=0)return!1;const a=r.x,c=s.x,u=o.x,f=r.y,h=s.y,m=o.y,x=Math.min(a,c,u),y=Math.min(f,h,m),E=Math.max(a,c,u),_=Math.max(f,h,m),p=_c(x,y,e,t,i),L=_c(E,_,e,t,i);let b=n.prevZ,M=n.nextZ;for(;b&&b.z>=p&&M&&M.z<=L;){if(b.x>=x&&b.x<=E&&b.y>=y&&b.y<=_&&b!==r&&b!==o&&Es(a,f,c,h,u,m,b.x,b.y)&&Ot(b.prev,b,b.next)>=0||(b=b.prevZ,M.x>=x&&M.x<=E&&M.y>=y&&M.y<=_&&M!==r&&M!==o&&Es(a,f,c,h,u,m,M.x,M.y)&&Ot(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;b&&b.z>=p;){if(b.x>=x&&b.x<=E&&b.y>=y&&b.y<=_&&b!==r&&b!==o&&Es(a,f,c,h,u,m,b.x,b.y)&&Ot(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;M&&M.z<=L;){if(M.x>=x&&M.x<=E&&M.y>=y&&M.y<=_&&M!==r&&M!==o&&Es(a,f,c,h,u,m,M.x,M.y)&&Ot(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Vg(n,e){let t=n;do{const i=t.prev,r=t.next.next;!is(i,r)&&Yd(i,t,t.next,r)&&Ys(i,r)&&Ys(r,i)&&(e.push(i.i,t.i,r.i),$s(t),$s(t.next),t=n=r),t=t.next}while(t!==n);return gr(t)}function Hg(n,e,t,i,r,s){let o=n;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Kg(o,a)){let c=$d(o,a);o=gr(o,o.next),c=gr(c,c.next),js(o,e,t,i,r,s,0),js(c,e,t,i,r,s,0);return}a=a.next}o=o.next}while(o!==n)}function kg(n,e,t,i){const r=[];for(let s=0,o=e.length;s<o;s++){const a=e[s]*i,c=s<o-1?e[s+1]*i:n.length,u=qd(n,a,c,i,!1);u===u.next&&(u.steiner=!0),r.push($g(u))}r.sort(Gg);for(let s=0;s<r.length;s++)t=Wg(r[s],t);return t}function Gg(n,e){let t=n.x-e.x;if(t===0&&(t=n.y-e.y,t===0)){const i=(n.next.y-n.y)/(n.next.x-n.x),r=(e.next.y-e.y)/(e.next.x-e.x);t=i-r}return t}function Wg(n,e){const t=Xg(n,e);if(!t)return e;const i=$d(t,n);return gr(i,i.next),gr(t,t.next)}function Xg(n,e){let t=e;const i=n.x,r=n.y;let s=-1/0,o;if(is(n,t))return t;do{if(is(n,t.next))return t.next;if(r<=t.y&&r>=t.next.y&&t.next.y!==t.y){const h=t.x+(r-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(h<=i&&h>s&&(s=h,o=t.x<t.next.x?t:t.next,h===i))return o}t=t.next}while(t!==e);if(!o)return null;const a=o,c=o.x,u=o.y;let f=1/0;t=o;do{if(i>=t.x&&t.x>=c&&i!==t.x&&jd(r<u?i:s,r,c,u,r<u?s:i,r,t.x,t.y)){const h=Math.abs(r-t.y)/(i-t.x);Ys(t,n)&&(h<f||h===f&&(t.x>o.x||t.x===o.x&&qg(o,t)))&&(o=t,f=h)}t=t.next}while(t!==a);return o}function qg(n,e){return Ot(n.prev,n,e.prev)<0&&Ot(e.next,n,n.next)<0}function jg(n,e,t,i){let r=n;do r.z===0&&(r.z=_c(r.x,r.y,e,t,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==n);r.prevZ.nextZ=null,r.prevZ=null,Yg(r)}function Yg(n){let e,t=1;do{let i=n,r;n=null;let s=null;for(e=0;i;){e++;let o=i,a=0;for(let u=0;u<t&&(a++,o=o.nextZ,!!o);u++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||i.z<=o.z)?(r=i,i=i.nextZ,a--):(r=o,o=o.nextZ,c--),s?s.nextZ=r:n=r,r.prevZ=s,s=r;i=o}s.nextZ=null,t*=2}while(e>1);return n}function _c(n,e,t,i,r){return n=(n-t)*r|0,e=(e-i)*r|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,n|e<<1}function $g(n){let e=n,t=n;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==n);return t}function jd(n,e,t,i,r,s,o,a){return(r-o)*(e-a)>=(n-o)*(s-a)&&(n-o)*(i-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(i-a)}function Es(n,e,t,i,r,s,o,a){return!(n===o&&e===a)&&jd(n,e,t,i,r,s,o,a)}function Kg(n,e){return n.next.i!==e.i&&n.prev.i!==e.i&&!Jg(n,e)&&(Ys(n,e)&&Ys(e,n)&&Zg(n,e)&&(Ot(n.prev,n,e.prev)||Ot(n,e.prev,e))||is(n,e)&&Ot(n.prev,n,n.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(n,e,t){return(e.y-n.y)*(t.x-e.x)-(e.x-n.x)*(t.y-e.y)}function is(n,e){return n.x===e.x&&n.y===e.y}function Yd(n,e,t,i){const r=Io(Ot(n,e,t)),s=Io(Ot(n,e,i)),o=Io(Ot(t,i,n)),a=Io(Ot(t,i,e));return!!(r!==s&&o!==a||r===0&&Do(n,t,e)||s===0&&Do(n,i,e)||o===0&&Do(t,n,i)||a===0&&Do(t,e,i))}function Do(n,e,t){return e.x<=Math.max(n.x,t.x)&&e.x>=Math.min(n.x,t.x)&&e.y<=Math.max(n.y,t.y)&&e.y>=Math.min(n.y,t.y)}function Io(n){return n>0?1:n<0?-1:0}function Jg(n,e){let t=n;do{if(t.i!==n.i&&t.next.i!==n.i&&t.i!==e.i&&t.next.i!==e.i&&Yd(t,t.next,n,e))return!0;t=t.next}while(t!==n);return!1}function Ys(n,e){return Ot(n.prev,n,n.next)<0?Ot(n,e,n.next)>=0&&Ot(n,n.prev,e)>=0:Ot(n,e,n.prev)<0||Ot(n,n.next,e)<0}function Zg(n,e){let t=n,i=!1;const r=(n.x+e.x)/2,s=(n.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==n);return i}function $d(n,e){const t=vc(n.i,n.x,n.y),i=vc(e.i,e.x,e.y),r=n.next,s=e.prev;return n.next=e,e.prev=n,t.next=r,r.prev=t,i.next=t,t.prev=i,s.next=i,i.prev=s,i}function Rf(n,e,t,i){const r=vc(n,e,t);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function $s(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function vc(n,e,t){return{i:n,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Qg(n,e,t,i){let r=0;for(let s=e,o=t-i;s<t;s+=i)r+=(n[o]-n[s])*(n[s+1]+n[o+1]),o=s;return r}class e_{static triangulate(e,t,i=2){return Og(e,t,i)}}class Gi{static area(e){const t=e.length;let i=0;for(let r=t-1,s=0;s<t;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Gi.area(e)<0}static triangulateShape(e,t){const i=[],r=[],s=[];Pf(e),Lf(i,e);let o=e.length;t.forEach(Pf);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,Lf(i,t[c]);const a=e_.triangulate(i,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}}function Pf(n){const e=n.length;e>2&&n[e-1].equals(n[0])&&n.pop()}function Lf(n,e){for(let t=0;t<e.length;t++)n.push(e[t].x),n.push(e[t].y)}class Qc extends Nn{constructor(e=new Fs([new Ae(.5,.5),new Ae(-.5,.5),new Ae(-.5,-.5),new Ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){const u=e[a];o(u)}this.setAttribute("position",new qt(r,3)),this.setAttribute("uv",new qt(s,2)),this.computeVertexNormals();function o(a){const c=[],u=t.curveSegments!==void 0?t.curveSegments:12,f=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,x=t.bevelThickness!==void 0?t.bevelThickness:.2,y=t.bevelSize!==void 0?t.bevelSize:x-.1,E=t.bevelOffset!==void 0?t.bevelOffset:0,_=t.bevelSegments!==void 0?t.bevelSegments:3;const p=t.extrudePath,L=t.UVGenerator!==void 0?t.UVGenerator:t_;let b,M=!1,z,N,V,j;p&&(b=p.getSpacedPoints(f),M=!0,m=!1,z=p.computeFrenetFrames(f,!1),N=new ie,V=new ie,j=new ie),m||(_=0,x=0,y=0,E=0);const D=a.extractPoints(u);let C=D.shape;const q=D.holes;if(!Gi.isClockWise(C)){C=C.reverse();for(let I=0,v=q.length;I<v;I++){const k=q[I];Gi.isClockWise(k)&&(q[I]=k.reverse())}}function fe(I){const k=10000000000000001e-36;let W=I[0];for(let O=1;O<=I.length;O++){const A=O%I.length,Q=I[A],Z=Q.x-W.x,ye=Q.y-W.y,R=Z*Z+ye*ye,S=Math.max(Math.abs(Q.x),Math.abs(Q.y),Math.abs(W.x),Math.abs(W.y)),K=k*S*S;if(R<=K){I.splice(A,1),O--;continue}W=Q}}fe(C),q.forEach(fe);const pe=q.length,de=C;for(let I=0;I<pe;I++){const v=q[I];C=C.concat(v)}function he(I,v,k){return v||Vt("ExtrudeGeometry: vec does not exist"),I.clone().addScaledVector(v,k)}const ae=C.length;function Y(I,v,k){let W,O,A;const Q=I.x-v.x,Z=I.y-v.y,ye=k.x-I.x,R=k.y-I.y,S=Q*Q+Z*Z,K=Q*R-Z*ye;if(Math.abs(K)>Number.EPSILON){const ce=Math.sqrt(S),_e=Math.sqrt(ye*ye+R*R),ue=v.x-Z/ce,Be=v.y+Q/ce,Re=k.x-R/_e,Xe=k.y+ye/_e,He=((Re-ue)*R-(Xe-Be)*ye)/(Q*R-Z*ye);W=ue+Q*He-I.x,O=Be+Z*He-I.y;const Me=W*W+O*O;if(Me<=2)return new Ae(W,O);A=Math.sqrt(Me/2)}else{let ce=!1;Q>Number.EPSILON?ye>Number.EPSILON&&(ce=!0):Q<-Number.EPSILON?ye<-Number.EPSILON&&(ce=!0):Math.sign(Z)===Math.sign(R)&&(ce=!0),ce?(W=-Z,O=Q,A=Math.sqrt(S)):(W=Q,O=Z,A=Math.sqrt(S/2))}return new Ae(W/A,O/A)}const Se=[];for(let I=0,v=de.length,k=v-1,W=I+1;I<v;I++,k++,W++)k===v&&(k=0),W===v&&(W=0),Se[I]=Y(de[I],de[k],de[W]);const Ee=[];let Ue,we=Se.concat();for(let I=0,v=pe;I<v;I++){const k=q[I];Ue=[];for(let W=0,O=k.length,A=O-1,Q=W+1;W<O;W++,A++,Q++)A===O&&(A=0),Q===O&&(Q=0),Ue[W]=Y(k[W],k[A],k[Q]);Ee.push(Ue),we=we.concat(Ue)}let Ce;if(_===0)Ce=Gi.triangulateShape(de,q);else{const I=[],v=[];for(let k=0;k<_;k++){const W=k/_,O=x*Math.cos(W*Math.PI/2),A=y*Math.sin(W*Math.PI/2)+E;for(let Q=0,Z=de.length;Q<Z;Q++){const ye=he(de[Q],Se[Q],A);ve(ye.x,ye.y,-O),W===0&&I.push(ye)}for(let Q=0,Z=pe;Q<Z;Q++){const ye=q[Q];Ue=Ee[Q];const R=[];for(let S=0,K=ye.length;S<K;S++){const ce=he(ye[S],Ue[S],A);ve(ce.x,ce.y,-O),W===0&&R.push(ce)}W===0&&v.push(R)}}Ce=Gi.triangulateShape(I,v)}const ne=Ce.length,$=y+E;for(let I=0;I<ae;I++){const v=m?he(C[I],we[I],$):C[I];M?(V.copy(z.normals[0]).multiplyScalar(v.x),N.copy(z.binormals[0]).multiplyScalar(v.y),j.copy(b[0]).add(V).add(N),ve(j.x,j.y,j.z)):ve(v.x,v.y,0)}for(let I=1;I<=f;I++)for(let v=0;v<ae;v++){const k=m?he(C[v],we[v],$):C[v];M?(V.copy(z.normals[I]).multiplyScalar(k.x),N.copy(z.binormals[I]).multiplyScalar(k.y),j.copy(b[I]).add(V).add(N),ve(j.x,j.y,j.z)):ve(k.x,k.y,h/f*I)}for(let I=_-1;I>=0;I--){const v=I/_,k=x*Math.cos(v*Math.PI/2),W=y*Math.sin(v*Math.PI/2)+E;for(let O=0,A=de.length;O<A;O++){const Q=he(de[O],Se[O],W);ve(Q.x,Q.y,h+k)}for(let O=0,A=q.length;O<A;O++){const Q=q[O];Ue=Ee[O];for(let Z=0,ye=Q.length;Z<ye;Z++){const R=he(Q[Z],Ue[Z],W);M?ve(R.x,R.y+b[f-1].y,b[f-1].x+k):ve(R.x,R.y,h+k)}}}P(),w();function P(){const I=r.length/3;if(m){let v=0,k=ae*v;for(let W=0;W<ne;W++){const O=Ce[W];re(O[2]+k,O[1]+k,O[0]+k)}v=f+_*2,k=ae*v;for(let W=0;W<ne;W++){const O=Ce[W];re(O[0]+k,O[1]+k,O[2]+k)}}else{for(let v=0;v<ne;v++){const k=Ce[v];re(k[2],k[1],k[0])}for(let v=0;v<ne;v++){const k=Ce[v];re(k[0]+ae*f,k[1]+ae*f,k[2]+ae*f)}}i.addGroup(I,r.length/3-I,0)}function w(){const I=r.length/3;let v=0;se(de,v),v+=de.length;for(let k=0,W=q.length;k<W;k++){const O=q[k];se(O,v),v+=O.length}i.addGroup(I,r.length/3-I,1)}function se(I,v){let k=I.length;for(;--k>=0;){const W=k;let O=k-1;O<0&&(O=I.length-1);for(let A=0,Q=f+_*2;A<Q;A++){const Z=ae*A,ye=ae*(A+1),R=v+W+Z,S=v+O+Z,K=v+O+ye,ce=v+W+ye;be(R,S,K,ce)}}}function ve(I,v,k){c.push(I),c.push(v),c.push(k)}function re(I,v,k){F(I),F(v),F(k);const W=r.length/3,O=L.generateTopUV(i,r,W-3,W-2,W-1);B(O[0]),B(O[1]),B(O[2])}function be(I,v,k,W){F(I),F(v),F(W),F(v),F(k),F(W);const O=r.length/3,A=L.generateSideWallUV(i,r,O-6,O-3,O-2,O-1);B(A[0]),B(A[1]),B(A[3]),B(A[1]),B(A[2]),B(A[3])}function F(I){r.push(c[I*3+0]),r.push(c[I*3+1]),r.push(c[I*3+2])}function B(I){s.push(I.x),s.push(I.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return n_(t,i,e)}static fromJSON(e,t){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=t[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new gc[r.type]().fromJSON(r)),new Qc(i,e.options)}}const t_={generateTopUV:function(n,e,t,i,r){const s=e[t*3],o=e[t*3+1],a=e[i*3],c=e[i*3+1],u=e[r*3],f=e[r*3+1];return[new Ae(s,o),new Ae(a,c),new Ae(u,f)]},generateSideWallUV:function(n,e,t,i,r,s){const o=e[t*3],a=e[t*3+1],c=e[t*3+2],u=e[i*3],f=e[i*3+1],h=e[i*3+2],m=e[r*3],x=e[r*3+1],y=e[r*3+2],E=e[s*3],_=e[s*3+1],p=e[s*3+2];return Math.abs(a-f)<Math.abs(o-u)?[new Ae(o,1-c),new Ae(u,1-h),new Ae(m,1-y),new Ae(E,1-p)]:[new Ae(a,1-c),new Ae(f,1-h),new Ae(x,1-y),new Ae(_,1-p)]}};function n_(n,e,t){if(t.shapes=[],Array.isArray(n))for(let i=0,r=n.length;i<r;i++){const s=n[i];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class eu extends ha{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new eu(e.radius,e.detail)}}class da extends Nn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),c=Math.floor(r),u=a+1,f=c+1,h=e/a,m=t/c,x=[],y=[],E=[],_=[];for(let p=0;p<f;p++){const L=p*m-o;for(let b=0;b<u;b++){const M=b*h-s;y.push(M,-L,0),E.push(0,0,1),_.push(b/a),_.push(1-p/c)}}for(let p=0;p<c;p++)for(let L=0;L<a;L++){const b=L+u*p,M=L+u*(p+1),z=L+1+u*(p+1),N=L+1+u*p;x.push(b,M,N),x.push(M,z,N)}this.setIndex(x),this.setAttribute("position",new qt(y,3)),this.setAttribute("normal",new qt(E,3)),this.setAttribute("uv",new qt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new da(e.width,e.height,e.widthSegments,e.heightSegments)}}class tu extends Nn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const c=Math.min(o+a,Math.PI);let u=0;const f=[],h=new ie,m=new ie,x=[],y=[],E=[],_=[];for(let p=0;p<=i;p++){const L=[],b=p/i;let M=0;p===0&&o===0?M=.5/t:p===i&&c===Math.PI&&(M=-.5/t);for(let z=0;z<=t;z++){const N=z/t;h.x=-e*Math.cos(r+N*s)*Math.sin(o+b*a),h.y=e*Math.cos(o+b*a),h.z=e*Math.sin(r+N*s)*Math.sin(o+b*a),y.push(h.x,h.y,h.z),m.copy(h).normalize(),E.push(m.x,m.y,m.z),_.push(N+M,1-b),L.push(u++)}f.push(L)}for(let p=0;p<i;p++)for(let L=0;L<t;L++){const b=f[p][L+1],M=f[p][L],z=f[p+1][L],N=f[p+1][L+1];(p!==0||o>0)&&x.push(b,M,N),(p!==i-1||c<Math.PI)&&x.push(M,z,N)}this.setIndex(x),this.setAttribute("position",new qt(y,3)),this.setAttribute("normal",new qt(E,3)),this.setAttribute("uv",new qt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tu(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nu extends ha{constructor(e=1,t=0){const i=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(i,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new nu(e.radius,e.detail)}}class Uo extends eo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cd,this.normalScale=new Ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class i_ extends eo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class r_ extends eo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Df={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class s_{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,c;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(f){a++,s===!1&&r.onStart!==void 0&&r.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,r.onProgress!==void 0&&r.onProgress(f,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(f){r.onError!==void 0&&r.onError(f)},this.resolveURL=function(f){return c?c(f):f},this.setURLModifier=function(f){return c=f,this},this.addHandler=function(f,h){return u.push(f,h),this},this.removeHandler=function(f){const h=u.indexOf(f);return h!==-1&&u.splice(h,2),this},this.getHandler=function(f){for(let h=0,m=u.length;h<m;h+=2){const x=u[h],y=u[h+1];if(x.global&&(x.lastIndex=0),x.test(f))return y}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const o_=new s_;class iu{constructor(e){this.manager=e!==void 0?e:o_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}iu.DEFAULT_MATERIAL_NAME="__DEFAULT";const hi={};class a_ extends Error{constructor(e,t){super(e),this.response=t}}class l_ extends iu{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Df.get(`file:${e}`);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:i,onError:r});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,c=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&at("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const f=hi[e],h=u.body.getReader(),m=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),x=m?parseInt(m):0,y=x!==0;let E=0;const _=new ReadableStream({start(p){L();function L(){h.read().then(({done:b,value:M})=>{if(b)p.close();else{E+=M.byteLength;const z=new ProgressEvent("progress",{lengthComputable:y,loaded:E,total:x});for(let N=0,V=f.length;N<V;N++){const j=f[N];j.onProgress&&j.onProgress(z)}p.enqueue(M),L()}},b=>{p.error(b)})}}});return new Response(_)}else throw new a_(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(c){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(f=>new DOMParser().parseFromString(f,a));case"json":return u.json();default:if(a==="")return u.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),m=h&&h[1]?h[1].toLowerCase():void 0,x=new TextDecoder(m);return u.arrayBuffer().then(y=>x.decode(y))}}}).then(u=>{Df.add(`file:${e}`,u);const f=hi[e];delete hi[e];for(let h=0,m=f.length;h<m;h++){const x=f[h];x.onLoad&&x.onLoad(u)}}).catch(u=>{const f=hi[e];if(f===void 0)throw this.manager.itemError(e),u;delete hi[e];for(let h=0,m=f.length;h<m;h++){const x=f[h];x.onError&&x.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Kd extends gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const ul=new Bt,If=new ie,Uf=new ie;class c_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ae(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new Bt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Kc,this._frameExtents=new Ae(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;If.setFromMatrixPosition(e.matrixWorld),t.position.copy(If),Uf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uf),t.updateMatrixWorld(),ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ul)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Nf=new Bt,Ss=new ie,fl=new ie;class u_ extends c_{constructor(){super(new Tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ae(4,2),this._viewportCount=6,this._viewports=[new At(2,1,1,1),new At(0,1,1,1),new At(3,1,1,1),new At(1,1,1,1),new At(3,0,1,1),new At(1,0,1,1)],this._cubeDirections=[new ie(1,0,0),new ie(-1,0,0),new ie(0,0,1),new ie(0,0,-1),new ie(0,1,0),new ie(0,-1,0)],this._cubeUps=[new ie(0,1,0),new ie(0,1,0),new ie(0,1,0),new ie(0,1,0),new ie(0,0,1),new ie(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ss.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ss),fl.copy(i.position),fl.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(fl),i.updateMatrixWorld(),r.makeTranslation(-Ss.x,-Ss.y,-Ss.z),Nf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nf,i.coordinateSystem,i.reversedDepth)}}class f_ extends Kd{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new u_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class h_ extends Bd{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=f*this.view.offsetY,c=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class d_ extends Kd{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class p_ extends Tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Ff=new Ae;class m_{constructor(e=new Ae(1/0,1/0),t=new Ae(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ff.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ff).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}class sr{constructor(){this.type="ShapePath",this.color=new xt,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new $r,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,i,r){return this.currentPath.quadraticCurveTo(e,t,i,r),this}bezierCurveTo(e,t,i,r,s,o){return this.currentPath.bezierCurveTo(e,t,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(p){const L=[];for(let b=0,M=p.length;b<M;b++){const z=p[b],N=new Fs;N.curves=z.curves,L.push(N)}return L}function i(p,L){const b=L.length;let M=!1;for(let z=b-1,N=0;N<b;z=N++){let V=L[z],j=L[N],D=j.x-V.x,C=j.y-V.y;if(Math.abs(C)>Number.EPSILON){if(C<0&&(V=L[N],D=-D,j=L[z],C=-C),p.y<V.y||p.y>j.y)continue;if(p.y===V.y){if(p.x===V.x)return!0}else{const q=C*(p.x-V.x)-D*(p.y-V.y);if(q===0)return!0;if(q<0)continue;M=!M}}else{if(p.y!==V.y)continue;if(j.x<=p.x&&p.x<=V.x||V.x<=p.x&&p.x<=j.x)return!0}}return M}const r=Gi.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,c;const u=[];if(s.length===1)return a=s[0],c=new Fs,c.curves=a.curves,u.push(c),u;let f=!r(s[0].getPoints());f=e?!f:f;const h=[],m=[];let x=[],y=0,E;m[y]=void 0,x[y]=[];for(let p=0,L=s.length;p<L;p++)a=s[p],E=a.getPoints(),o=r(E),o=e?!o:o,o?(!f&&m[y]&&y++,m[y]={s:new Fs,p:E},m[y].s.curves=a.curves,f&&y++,x[y]=[]):x[y].push({h:a,p:E[0]});if(!m[0])return t(s);if(m.length>1){let p=!1,L=0;for(let b=0,M=m.length;b<M;b++)h[b]=[];for(let b=0,M=m.length;b<M;b++){const z=x[b];for(let N=0;N<z.length;N++){const V=z[N];let j=!0;for(let D=0;D<m.length;D++)i(V.p,m[D].p)&&(b!==D&&L++,j?(j=!1,h[D].push(V)):p=!0);j&&h[b].push(V)}}L>0&&p===!1&&(x=h)}let _;for(let p=0,L=m.length;p<L;p++){c=m[p].s,u.push(c),_=x[p];for(let b=0,M=_.length;b<M;b++)c.holes.push(_[b].h)}return u}}function Of(n,e,t,i){const r=x_(i);switch(t){case Td:return n*e;case wd:return n*e/r.components*r.byteLength;case Wc:return n*e/r.components*r.byteLength;case Xc:return n*e*2/r.components*r.byteLength;case qc:return n*e*2/r.components*r.byteLength;case Ad:return n*e*3/r.components*r.byteLength;case Hn:return n*e*4/r.components*r.byteLength;case jc:return n*e*4/r.components*r.byteLength;case Ho:case ko:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Go:case Wo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Gl:case Xl:return Math.max(n,16)*Math.max(e,8)/4;case kl:case Wl:return Math.max(n,8)*Math.max(e,8)/2;case ql:case jl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Yl:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case Kl:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case Zl:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Ql:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ec:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case tc:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case nc:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case ic:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case rc:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case sc:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case oc:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case ac:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case lc:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case cc:case uc:case fc:return Math.ceil(n/4)*Math.ceil(e/4)*16;case hc:case dc:return Math.ceil(n/4)*Math.ceil(e/4)*8;case pc:case mc:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function x_(n){switch(n){case ei:case Sd:return{byteLength:1,components:1};case ks:case bd:case rs:return{byteLength:2,components:1};case kc:case Gc:return{byteLength:2,components:4};case mr:case Hc:case yi:return{byteLength:4,components:1};case Md:case Ed:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vc}}));typeof window<"u"&&(window.__THREE__?at("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vc);function Jd(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function g_(n){const e=new WeakMap;function t(a,c){const u=a.array,f=a.usage,h=u.byteLength,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,u,f),a.onUploadCallback();let x;if(u instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&u instanceof Float16Array)x=n.HALF_FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=n.SHORT;else if(u instanceof Uint32Array)x=n.UNSIGNED_INT;else if(u instanceof Int32Array)x=n.INT;else if(u instanceof Int8Array)x=n.BYTE;else if(u instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,c,u){const f=c.array,h=c.updateRanges;if(n.bindBuffer(u,a),h.length===0)n.bufferSubData(u,0,f);else{h.sort((x,y)=>x.start-y.start);let m=0;for(let x=1;x<h.length;x++){const y=h[m],E=h[x];E.start<=y.start+y.count+1?y.count=Math.max(y.count,E.start+E.count-y.start):(++m,h[m]=E)}h.length=m+1;for(let x=0,y=h.length;x<y;x++){const E=h[x];n.bufferSubData(u,E.start*f.BYTES_PER_ELEMENT,f,E.start,E.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(n.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,t(a,c));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,c),u.version=a.version}}return{get:r,remove:s,update:o}}var __=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,v_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,y_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,E_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,T_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,w_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,R_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,P_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,L_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,D_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,N_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,O_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,B_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,z_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,V_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,H_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,k_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,G_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,W_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,j_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y_="gl_FragColor = linearToOutputTexel( gl_FragColor );",$_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,K_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,J_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Z_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Q_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ev=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,tv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,nv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,iv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,sv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ov=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,av=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,cv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,uv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,hv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,dv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,pv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,mv=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,xv=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 uv = vec2( roughness, dotNV );
	return texture2D( dfgLUT, uv ).rg;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNV * dotNV), 0.0, dotNV), material.roughness );
	vec2 dfgL = DFGApprox( vec3(0.0, 0.0, 1.0), vec3(sqrt(1.0 - dotNL * dotNL), 0.0, dotNL), material.roughness );
	vec3 FssEss_V = material.specularColor * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColor * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColor + ( 1.0 - material.specularColor ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gv=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,_v=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,vv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ev=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Tv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Av=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,wv=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Cv=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Rv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Pv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iv=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Uv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Nv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Fv=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ov=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Bv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vv=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Hv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,kv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Gv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Wv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Xv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,qv=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,jv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$v=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Kv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qv=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,ey=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ty=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ny=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,iy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ry=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,sy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,oy=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ay=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ly=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,uy=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fy=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hy=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,dy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,py=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,my=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_y=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,yy=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,by=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,My=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ey=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ty=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ay=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cy=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ry=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Py=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ly=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iy=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Uy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ny=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Oy=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,By=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,zy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ky=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gy=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wy=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,qy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,jy=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,$y=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ky=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:__,alphahash_pars_fragment:v_,alphamap_fragment:y_,alphamap_pars_fragment:S_,alphatest_fragment:b_,alphatest_pars_fragment:M_,aomap_fragment:E_,aomap_pars_fragment:T_,batching_pars_vertex:A_,batching_vertex:w_,begin_vertex:C_,beginnormal_vertex:R_,bsdfs:P_,iridescence_fragment:L_,bumpmap_pars_fragment:D_,clipping_planes_fragment:I_,clipping_planes_pars_fragment:U_,clipping_planes_pars_vertex:N_,clipping_planes_vertex:F_,color_fragment:O_,color_pars_fragment:B_,color_pars_vertex:z_,color_vertex:V_,common:H_,cube_uv_reflection_fragment:k_,defaultnormal_vertex:G_,displacementmap_pars_vertex:W_,displacementmap_vertex:X_,emissivemap_fragment:q_,emissivemap_pars_fragment:j_,colorspace_fragment:Y_,colorspace_pars_fragment:$_,envmap_fragment:K_,envmap_common_pars_fragment:J_,envmap_pars_fragment:Z_,envmap_pars_vertex:Q_,envmap_physical_pars_fragment:uv,envmap_vertex:ev,fog_vertex:tv,fog_pars_vertex:nv,fog_fragment:iv,fog_pars_fragment:rv,gradientmap_pars_fragment:sv,lightmap_pars_fragment:ov,lights_lambert_fragment:av,lights_lambert_pars_fragment:lv,lights_pars_begin:cv,lights_toon_fragment:fv,lights_toon_pars_fragment:hv,lights_phong_fragment:dv,lights_phong_pars_fragment:pv,lights_physical_fragment:mv,lights_physical_pars_fragment:xv,lights_fragment_begin:gv,lights_fragment_maps:_v,lights_fragment_end:vv,logdepthbuf_fragment:yv,logdepthbuf_pars_fragment:Sv,logdepthbuf_pars_vertex:bv,logdepthbuf_vertex:Mv,map_fragment:Ev,map_pars_fragment:Tv,map_particle_fragment:Av,map_particle_pars_fragment:wv,metalnessmap_fragment:Cv,metalnessmap_pars_fragment:Rv,morphinstance_vertex:Pv,morphcolor_vertex:Lv,morphnormal_vertex:Dv,morphtarget_pars_vertex:Iv,morphtarget_vertex:Uv,normal_fragment_begin:Nv,normal_fragment_maps:Fv,normal_pars_fragment:Ov,normal_pars_vertex:Bv,normal_vertex:zv,normalmap_pars_fragment:Vv,clearcoat_normal_fragment_begin:Hv,clearcoat_normal_fragment_maps:kv,clearcoat_pars_fragment:Gv,iridescence_pars_fragment:Wv,opaque_fragment:Xv,packing:qv,premultiplied_alpha_fragment:jv,project_vertex:Yv,dithering_fragment:$v,dithering_pars_fragment:Kv,roughnessmap_fragment:Jv,roughnessmap_pars_fragment:Zv,shadowmap_pars_fragment:Qv,shadowmap_pars_vertex:ey,shadowmap_vertex:ty,shadowmask_pars_fragment:ny,skinbase_vertex:iy,skinning_pars_vertex:ry,skinning_vertex:sy,skinnormal_vertex:oy,specularmap_fragment:ay,specularmap_pars_fragment:ly,tonemapping_fragment:cy,tonemapping_pars_fragment:uy,transmission_fragment:fy,transmission_pars_fragment:hy,uv_pars_fragment:dy,uv_pars_vertex:py,uv_vertex:my,worldpos_vertex:xy,background_vert:gy,background_frag:_y,backgroundCube_vert:vy,backgroundCube_frag:yy,cube_vert:Sy,cube_frag:by,depth_vert:My,depth_frag:Ey,distanceRGBA_vert:Ty,distanceRGBA_frag:Ay,equirect_vert:wy,equirect_frag:Cy,linedashed_vert:Ry,linedashed_frag:Py,meshbasic_vert:Ly,meshbasic_frag:Dy,meshlambert_vert:Iy,meshlambert_frag:Uy,meshmatcap_vert:Ny,meshmatcap_frag:Fy,meshnormal_vert:Oy,meshnormal_frag:By,meshphong_vert:zy,meshphong_frag:Vy,meshphysical_vert:Hy,meshphysical_frag:ky,meshtoon_vert:Gy,meshtoon_frag:Wy,points_vert:Xy,points_frag:qy,shadow_vert:jy,shadow_frag:Yy,sprite_vert:$y,sprite_frag:Ky},ke={common:{diffuse:{value:new xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new xt(16777215)},opacity:{value:1},center:{value:new Ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},$n={basic:{uniforms:ln([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:ln([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new xt(0)}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:ln([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new xt(0)},specular:{value:new xt(1118481)},shininess:{value:30}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:ln([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:ln([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new xt(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:ln([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:ln([ke.points,ke.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:ln([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:ln([ke.common,ke.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:ln([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:ln([ke.sprite,ke.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distanceRGBA:{uniforms:ln([ke.common,ke.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distanceRGBA_vert,fragmentShader:ut.distanceRGBA_frag},shadow:{uniforms:ln([ke.lights,ke.fog,{color:{value:new xt(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};$n.physical={uniforms:ln([$n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new xt(0)},specularColor:{value:new xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};const No={r:0,b:0,g:0},or=new ti,Jy=new Bt;function Zy(n,e,t,i,r,s,o){const a=new xt(0);let c=s===!0?0:1,u,f,h=null,m=0,x=null;function y(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function E(b){let M=!1;const z=y(b);z===null?p(a,c):z&&z.isColor&&(p(z,1),M=!0);const N=n.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function _(b,M){const z=y(M);z&&(z.isCubeTexture||z.mapping===fa)?(f===void 0&&(f=new ni(new as(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:ns($n.backgroundCube.uniforms),vertexShader:$n.backgroundCube.vertexShader,fragmentShader:$n.backgroundCube.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(N,V,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),or.copy(M.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,z.isCubeTexture&&z.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),f.material.uniforms.envMap.value=z,f.material.uniforms.flipEnvMap.value=z.isCubeTexture&&z.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Jy.makeRotationFromEuler(or)),f.material.toneMapped=vt.getTransfer(z.colorSpace)!==Tt,(h!==z||m!==z.version||x!==n.toneMapping)&&(f.material.needsUpdate=!0,h=z,m=z.version,x=n.toneMapping),f.layers.enableAll(),b.unshift(f,f.geometry,f.material,0,0,null)):z&&z.isTexture&&(u===void 0&&(u=new ni(new da(2,2),new wi({name:"BackgroundMaterial",uniforms:ns($n.background.uniforms),vertexShader:$n.background.vertexShader,fragmentShader:$n.background.fragmentShader,side:$i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=z,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.toneMapped=vt.getTransfer(z.colorSpace)!==Tt,z.matrixAutoUpdate===!0&&z.updateMatrix(),u.material.uniforms.uvTransform.value.copy(z.matrix),(h!==z||m!==z.version||x!==n.toneMapping)&&(u.material.needsUpdate=!0,h=z,m=z.version,x=n.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null))}function p(b,M){b.getRGB(No,Od(n)),i.buffers.color.setClear(No.r,No.g,No.b,M,o)}function L(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,M=1){a.set(b),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(b){c=b,p(a,c)},render:E,addToRenderList:_,dispose:L}}function Qy(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=m(null);let s=r,o=!1;function a(C,q,ee,fe,pe){let de=!1;const he=h(fe,ee,q);s!==he&&(s=he,u(s.object)),de=x(C,fe,ee,pe),de&&y(C,fe,ee,pe),pe!==null&&e.update(pe,n.ELEMENT_ARRAY_BUFFER),(de||o)&&(o=!1,M(C,q,ee,fe),pe!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function c(){return n.createVertexArray()}function u(C){return n.bindVertexArray(C)}function f(C){return n.deleteVertexArray(C)}function h(C,q,ee){const fe=ee.wireframe===!0;let pe=i[C.id];pe===void 0&&(pe={},i[C.id]=pe);let de=pe[q.id];de===void 0&&(de={},pe[q.id]=de);let he=de[fe];return he===void 0&&(he=m(c()),de[fe]=he),he}function m(C){const q=[],ee=[],fe=[];for(let pe=0;pe<t;pe++)q[pe]=0,ee[pe]=0,fe[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:ee,attributeDivisors:fe,object:C,attributes:{},index:null}}function x(C,q,ee,fe){const pe=s.attributes,de=q.attributes;let he=0;const ae=ee.getAttributes();for(const Y in ae)if(ae[Y].location>=0){const Ee=pe[Y];let Ue=de[Y];if(Ue===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(Ue=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(Ue=C.instanceColor)),Ee===void 0||Ee.attribute!==Ue||Ue&&Ee.data!==Ue.data)return!0;he++}return s.attributesNum!==he||s.index!==fe}function y(C,q,ee,fe){const pe={},de=q.attributes;let he=0;const ae=ee.getAttributes();for(const Y in ae)if(ae[Y].location>=0){let Ee=de[Y];Ee===void 0&&(Y==="instanceMatrix"&&C.instanceMatrix&&(Ee=C.instanceMatrix),Y==="instanceColor"&&C.instanceColor&&(Ee=C.instanceColor));const Ue={};Ue.attribute=Ee,Ee&&Ee.data&&(Ue.data=Ee.data),pe[Y]=Ue,he++}s.attributes=pe,s.attributesNum=he,s.index=fe}function E(){const C=s.newAttributes;for(let q=0,ee=C.length;q<ee;q++)C[q]=0}function _(C){p(C,0)}function p(C,q){const ee=s.newAttributes,fe=s.enabledAttributes,pe=s.attributeDivisors;ee[C]=1,fe[C]===0&&(n.enableVertexAttribArray(C),fe[C]=1),pe[C]!==q&&(n.vertexAttribDivisor(C,q),pe[C]=q)}function L(){const C=s.newAttributes,q=s.enabledAttributes;for(let ee=0,fe=q.length;ee<fe;ee++)q[ee]!==C[ee]&&(n.disableVertexAttribArray(ee),q[ee]=0)}function b(C,q,ee,fe,pe,de,he){he===!0?n.vertexAttribIPointer(C,q,ee,pe,de):n.vertexAttribPointer(C,q,ee,fe,pe,de)}function M(C,q,ee,fe){E();const pe=fe.attributes,de=ee.getAttributes(),he=q.defaultAttributeValues;for(const ae in de){const Y=de[ae];if(Y.location>=0){let Se=pe[ae];if(Se===void 0&&(ae==="instanceMatrix"&&C.instanceMatrix&&(Se=C.instanceMatrix),ae==="instanceColor"&&C.instanceColor&&(Se=C.instanceColor)),Se!==void 0){const Ee=Se.normalized,Ue=Se.itemSize,we=e.get(Se);if(we===void 0)continue;const Ce=we.buffer,ne=we.type,$=we.bytesPerElement,P=ne===n.INT||ne===n.UNSIGNED_INT||Se.gpuType===Hc;if(Se.isInterleavedBufferAttribute){const w=Se.data,se=w.stride,ve=Se.offset;if(w.isInstancedInterleavedBuffer){for(let re=0;re<Y.locationSize;re++)p(Y.location+re,w.meshPerAttribute);C.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=w.meshPerAttribute*w.count)}else for(let re=0;re<Y.locationSize;re++)_(Y.location+re);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let re=0;re<Y.locationSize;re++)b(Y.location+re,Ue/Y.locationSize,ne,Ee,se*$,(ve+Ue/Y.locationSize*re)*$,P)}else{if(Se.isInstancedBufferAttribute){for(let w=0;w<Y.locationSize;w++)p(Y.location+w,Se.meshPerAttribute);C.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let w=0;w<Y.locationSize;w++)_(Y.location+w);n.bindBuffer(n.ARRAY_BUFFER,Ce);for(let w=0;w<Y.locationSize;w++)b(Y.location+w,Ue/Y.locationSize,ne,Ee,Ue*$,Ue/Y.locationSize*w*$,P)}}else if(he!==void 0){const Ee=he[ae];if(Ee!==void 0)switch(Ee.length){case 2:n.vertexAttrib2fv(Y.location,Ee);break;case 3:n.vertexAttrib3fv(Y.location,Ee);break;case 4:n.vertexAttrib4fv(Y.location,Ee);break;default:n.vertexAttrib1fv(Y.location,Ee)}}}}L()}function z(){j();for(const C in i){const q=i[C];for(const ee in q){const fe=q[ee];for(const pe in fe)f(fe[pe].object),delete fe[pe];delete q[ee]}delete i[C]}}function N(C){if(i[C.id]===void 0)return;const q=i[C.id];for(const ee in q){const fe=q[ee];for(const pe in fe)f(fe[pe].object),delete fe[pe];delete q[ee]}delete i[C.id]}function V(C){for(const q in i){const ee=i[q];if(ee[C.id]===void 0)continue;const fe=ee[C.id];for(const pe in fe)f(fe[pe].object),delete fe[pe];delete ee[C.id]}}function j(){D(),o=!0,s!==r&&(s=r,u(s.object))}function D(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:j,resetDefaultState:D,dispose:z,releaseStatesOfGeometry:N,releaseStatesOfProgram:V,initAttributes:E,enableAttribute:_,disableUnusedAttributes:L}}function eS(n,e,t){let i;function r(u){i=u}function s(u,f){n.drawArrays(i,u,f),t.update(f,i,1)}function o(u,f,h){h!==0&&(n.drawArraysInstanced(i,u,f,h),t.update(f,i,h))}function a(u,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,f,0,h);let x=0;for(let y=0;y<h;y++)x+=f[y];t.update(x,i,1)}function c(u,f,h,m){if(h===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let y=0;y<u.length;y++)o(u[y],f[y],m[y]);else{x.multiDrawArraysInstancedWEBGL(i,u,0,f,0,m,0,h);let y=0;for(let E=0;E<h;E++)y+=f[E]*m[E];t.update(y,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function tS(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const V=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(V.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(V){return!(V!==Hn&&i.convert(V)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(V){const j=V===rs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(V!==ei&&i.convert(V)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&V!==yi&&!j)}function c(V){if(V==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";V="mediump"}return V==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const f=c(u);f!==u&&(at("WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const h=t.logarithmicDepthBuffer===!0,m=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),y=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),L=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),M=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),z=y>0,N=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reversedDepthBuffer:m,maxTextures:x,maxVertexTextures:y,maxTextureSize:E,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:L,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:z,maxSamples:N}}function nS(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new cr,a=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,m){const x=h.length!==0||m||i!==0||r;return r=m,i=h.length,x},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,m){t=f(h,m,0)},this.setState=function(h,m,x){const y=h.clippingPlanes,E=h.clipIntersection,_=h.clipShadows,p=n.get(h);if(!r||y===null||y.length===0||s&&!_)s?f(null):u();else{const L=s?0:i,b=L*4;let M=p.clippingState||null;c.value=M,M=f(y,m,b,x);for(let z=0;z!==b;++z)M[z]=t[z];p.clippingState=M,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=L}};function u(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,m,x,y){const E=h!==null?h.length:0;let _=null;if(E!==0){if(_=c.value,y!==!0||_===null){const p=x+E*4,L=m.matrixWorldInverse;a.getNormalMatrix(L),(_===null||_.length<p)&&(_=new Float32Array(p));for(let b=0,M=x;b!==E;++b,M+=4)o.copy(h[b]).applyMatrix4(L,a),o.normal.toArray(_,M),_[M+3]=o.constant}c.value=_,c.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,_}}function iS(n){let e=new WeakMap;function t(o,a){return a===Bl?o.mapping=Qr:a===zl&&(o.mapping=es),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Bl||a===zl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const u=new gg(c.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Wi=4,Bf=[.125,.215,.35,.446,.526,.582],fr=20,rS=256,bs=new h_,zf=new xt;let hl=null,dl=0,pl=0,ml=!1;const sS=new ie;class Vf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,r=100,s={}){const{size:o=256,position:a=sS}=s;hl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,r,c,a),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hl,dl,pl),this._renderer.xr.enabled=ml,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qr||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hl=this._renderer.getRenderTarget(),dl=this._renderer.getActiveCubeFace(),pl=this._renderer.getActiveMipmapLevel(),ml=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:In,minFilter:In,generateMipmaps:!1,type:rs,format:Hn,colorSpace:ts,depthBuffer:!1},r=Hf(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Hf(e,t,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=oS(s)),this._blurMaterial=lS(s,e,t),this._ggxMaterial=aS(s,e,t)}return r}_compileMaterial(e){const t=new ni(new Nn,e);this._renderer.compile(t,bs)}_sceneToCubeUV(e,t,i,r,s){const c=new Tn(90,1,t,i),u=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],h=this._renderer,m=h.autoClear,x=h.toneMapping;h.getClearColor(zf),h.toneMapping=qi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ni(new as,new Ud({name:"PMREM.Background",side:xn,depthWrite:!1,depthTest:!1})));const E=this._backgroundBox,_=E.material;let p=!1;const L=e.background;L?L.isColor&&(_.color.copy(L),e.background=null,p=!0):(_.color.copy(zf),p=!0);for(let b=0;b<6;b++){const M=b%3;M===0?(c.up.set(0,u[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[b],s.y,s.z)):M===1?(c.up.set(0,0,u[b]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[b],s.z)):(c.up.set(0,u[b],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[b]));const z=this._cubeSize;Br(r,M*z,b>2?z:0,z,z),h.setRenderTarget(r),p&&h.render(E,c),h.render(e,c)}h.toneMapping=x,h.autoClear=m,e.background=L}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Qr||e.mapping===es;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kf());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;Br(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(o,bs)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=i}_applyGGXFilter(e,t,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const c=o.uniforms,u=i/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),h=Math.sqrt(u*u-f*f),m=.05+u*.95,x=h*m,{_lodMax:y}=this,E=this._sizeLods[i],_=3*E*(i>y-Wi?i-y+Wi:0),p=4*(this._cubeSize-E);c.envMap.value=e.texture,c.roughness.value=x,c.mipInt.value=y-t,Br(s,_,p,3*E,2*E),r.setRenderTarget(s),r.render(a,bs),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=y-i,Br(e,_,p,3*E,2*E),r.setRenderTarget(e),r.render(a,bs)}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const c=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Vt("blur direction must be either latitudinal or longitudinal!");const f=3,h=this._lodMeshes[r];h.material=u;const m=u.uniforms,x=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*x):2*Math.PI/(2*fr-1),E=s/y,_=isFinite(s)?1+Math.floor(f*E):fr;_>fr&&at(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${fr}`);const p=[];let L=0;for(let V=0;V<fr;++V){const j=V/E,D=Math.exp(-j*j/2);p.push(D),V===0?L+=D:V<_&&(L+=2*D)}for(let V=0;V<p.length;V++)p[V]=p[V]/L;m.envMap.value=e.texture,m.samples.value=_,m.weights.value=p,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);const{_lodMax:b}=this;m.dTheta.value=y,m.mipInt.value=b-i;const M=this._sizeLods[r],z=3*M*(r>b-Wi?r-b+Wi:0),N=4*(this._cubeSize-M);Br(t,z,N,3*M,2*M),c.setRenderTarget(t),c.render(h,bs)}}function oS(n){const e=[],t=[],i=[];let r=n;const s=n-Wi+1+Bf.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let c=1/a;o>n-Wi?c=Bf[o-n+Wi-1]:o===0&&(c=0),t.push(c);const u=1/(a-2),f=-u,h=1+u,m=[f,f,h,f,h,h,f,f,h,h,f,h],x=6,y=6,E=3,_=2,p=1,L=new Float32Array(E*y*x),b=new Float32Array(_*y*x),M=new Float32Array(p*y*x);for(let N=0;N<x;N++){const V=N%3*2/3-1,j=N>2?0:-1,D=[V,j,0,V+2/3,j,0,V+2/3,j+1,0,V,j,0,V+2/3,j+1,0,V,j+1,0];L.set(D,E*y*N),b.set(m,_*y*N);const C=[N,N,N,N,N,N];M.set(C,p*y*N)}const z=new Nn;z.setAttribute("position",new Zn(L,E)),z.setAttribute("uv",new Zn(b,_)),z.setAttribute("faceIndex",new Zn(M,p)),i.push(new ni(z,null)),r>Wi&&r--}return{lodMeshes:i,sizeLods:e,sigmas:t}}function Hf(n,e,t){const i=new xr(n,e,t);return i.texture.mapping=fa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Br(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function aS(n,e,t){return new wi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:rS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pa(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function lS(n,e,t){const i=new Float32Array(fr),r=new ie(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function kf(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function Gf(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function pa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function cS(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const c=a.mapping,u=c===Bl||c===zl,f=c===Qr||c===es;if(u||f){let h=e.get(a);const m=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return t===null&&(t=new Vf(n)),h=u?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const x=a.image;return u&&x&&x.height>0||f&&x&&r(x)?(t===null&&(t=new Vf(n)),h=u?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let c=0;const u=6;for(let f=0;f<u;f++)a[f]!==void 0&&c++;return c===u}function s(a){const c=a.target;c.removeEventListener("dispose",s);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function uS(n){const e={};function t(i){if(e[i]!==void 0)return e[i];const r=n.getExtension(i);return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&qs("WebGLRenderer: "+i+" extension not supported."),r}}}function fS(n,e,t,i){const r={},s=new WeakMap;function o(h){const m=h.target;m.index!==null&&e.remove(m.index);for(const y in m.attributes)e.remove(m.attributes[y]);m.removeEventListener("dispose",o),delete r[m.id];const x=s.get(m);x&&(e.remove(x),s.delete(m)),i.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(h,m){return r[m.id]===!0||(m.addEventListener("dispose",o),r[m.id]=!0,t.memory.geometries++),m}function c(h){const m=h.attributes;for(const x in m)e.update(m[x],n.ARRAY_BUFFER)}function u(h){const m=[],x=h.index,y=h.attributes.position;let E=0;if(x!==null){const L=x.array;E=x.version;for(let b=0,M=L.length;b<M;b+=3){const z=L[b+0],N=L[b+1],V=L[b+2];m.push(z,N,N,V,V,z)}}else if(y!==void 0){const L=y.array;E=y.version;for(let b=0,M=L.length/3-1;b<M;b+=3){const z=b+0,N=b+1,V=b+2;m.push(z,N,N,V,V,z)}}else return;const _=new(Pd(m)?Fd:Nd)(m,1);_.version=E;const p=s.get(h);p&&e.remove(p),s.set(h,_)}function f(h){const m=s.get(h);if(m){const x=h.index;x!==null&&m.version<x.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:c,getWireframeAttribute:f}}function hS(n,e,t){let i;function r(m){i=m}let s,o;function a(m){s=m.type,o=m.bytesPerElement}function c(m,x){n.drawElements(i,x,s,m*o),t.update(x,i,1)}function u(m,x,y){y!==0&&(n.drawElementsInstanced(i,x,s,m*o,y),t.update(x,i,y))}function f(m,x,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,x,0,s,m,0,y);let _=0;for(let p=0;p<y;p++)_+=x[p];t.update(_,i,1)}function h(m,x,y,E){if(y===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<m.length;p++)u(m[p]/o,x[p],E[p]);else{_.multiDrawElementsInstancedWEBGL(i,x,0,s,m,0,E,0,y);let p=0;for(let L=0;L<y;L++)p+=x[L]*E[L];t.update(p,i,1)}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function dS(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:Vt("WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function pS(n,e,t){const i=new WeakMap,r=new At;function s(o,a,c){const u=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let m=i.get(a);if(m===void 0||m.count!==h){let C=function(){j.dispose(),i.delete(a),a.removeEventListener("dispose",C)};var x=C;m!==void 0&&m.texture.dispose();const y=a.morphAttributes.position!==void 0,E=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],L=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;y===!0&&(M=1),E===!0&&(M=2),_===!0&&(M=3);let z=a.attributes.position.count*M,N=1;z>e.maxTextureSize&&(N=Math.ceil(z/e.maxTextureSize),z=e.maxTextureSize);const V=new Float32Array(z*N*4*h),j=new Ld(V,z,N,h);j.type=yi,j.needsUpdate=!0;const D=M*4;for(let q=0;q<h;q++){const ee=p[q],fe=L[q],pe=b[q],de=z*N*4*q;for(let he=0;he<ee.count;he++){const ae=he*D;y===!0&&(r.fromBufferAttribute(ee,he),V[de+ae+0]=r.x,V[de+ae+1]=r.y,V[de+ae+2]=r.z,V[de+ae+3]=0),E===!0&&(r.fromBufferAttribute(fe,he),V[de+ae+4]=r.x,V[de+ae+5]=r.y,V[de+ae+6]=r.z,V[de+ae+7]=0),_===!0&&(r.fromBufferAttribute(pe,he),V[de+ae+8]=r.x,V[de+ae+9]=r.y,V[de+ae+10]=r.z,V[de+ae+11]=pe.itemSize===4?r.w:1)}}m={count:h,texture:j,size:new Ae(z,N)},i.set(a,m),a.addEventListener("dispose",C)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let y=0;for(let _=0;_<u.length;_++)y+=u[_];const E=a.morphTargetsRelative?1:1-y;c.getUniforms().setValue(n,"morphTargetBaseInfluence",E),c.getUniforms().setValue(n,"morphTargetInfluences",u)}c.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}return{update:s}}function mS(n,e,t,i){let r=new WeakMap;function s(c){const u=i.render.frame,f=c.geometry,h=e.get(c,f);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==u&&(t.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){const m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return h}function o(){r=new WeakMap}function a(c){const u=c.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Zd=new fn,Wf=new Vd(1,1),Qd=new Ld,ep=new Qx,tp=new zd,Xf=[],qf=[],jf=new Float32Array(16),Yf=new Float32Array(9),$f=new Float32Array(4);function ls(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Xf[r];if(s===void 0&&(s=new Float32Array(r),Xf[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Gt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Wt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function ma(n,e){let t=qf[e];t===void 0&&(t=new Int32Array(e),qf[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function xS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function gS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2fv(this.addr,e),Wt(t,e)}}function _S(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Gt(t,e))return;n.uniform3fv(this.addr,e),Wt(t,e)}}function vS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4fv(this.addr,e),Wt(t,e)}}function yS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;$f.set(i),n.uniformMatrix2fv(this.addr,!1,$f),Wt(t,i)}}function SS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;Yf.set(i),n.uniformMatrix3fv(this.addr,!1,Yf),Wt(t,i)}}function bS(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Gt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Gt(t,i))return;jf.set(i),n.uniformMatrix4fv(this.addr,!1,jf),Wt(t,i)}}function MS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function ES(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2iv(this.addr,e),Wt(t,e)}}function TS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3iv(this.addr,e),Wt(t,e)}}function AS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4iv(this.addr,e),Wt(t,e)}}function wS(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function CS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Gt(t,e))return;n.uniform2uiv(this.addr,e),Wt(t,e)}}function RS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Gt(t,e))return;n.uniform3uiv(this.addr,e),Wt(t,e)}}function PS(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Gt(t,e))return;n.uniform4uiv(this.addr,e),Wt(t,e)}}function LS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);let s;this.type===n.SAMPLER_2D_SHADOW?(Wf.compareFunction=Rd,s=Wf):s=Zd,t.setTexture2D(e||s,r)}function DS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ep,r)}function IS(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||tp,r)}function US(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Qd,r)}function NS(n){switch(n){case 5126:return xS;case 35664:return gS;case 35665:return _S;case 35666:return vS;case 35674:return yS;case 35675:return SS;case 35676:return bS;case 5124:case 35670:return MS;case 35667:case 35671:return ES;case 35668:case 35672:return TS;case 35669:case 35673:return AS;case 5125:return wS;case 36294:return CS;case 36295:return RS;case 36296:return PS;case 35678:case 36198:case 36298:case 36306:case 35682:return LS;case 35679:case 36299:case 36307:return DS;case 35680:case 36300:case 36308:case 36293:return IS;case 36289:case 36303:case 36311:case 36292:return US}}function FS(n,e){n.uniform1fv(this.addr,e)}function OS(n,e){const t=ls(e,this.size,2);n.uniform2fv(this.addr,t)}function BS(n,e){const t=ls(e,this.size,3);n.uniform3fv(this.addr,t)}function zS(n,e){const t=ls(e,this.size,4);n.uniform4fv(this.addr,t)}function VS(n,e){const t=ls(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function HS(n,e){const t=ls(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function kS(n,e){const t=ls(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function GS(n,e){n.uniform1iv(this.addr,e)}function WS(n,e){n.uniform2iv(this.addr,e)}function XS(n,e){n.uniform3iv(this.addr,e)}function qS(n,e){n.uniform4iv(this.addr,e)}function jS(n,e){n.uniform1uiv(this.addr,e)}function YS(n,e){n.uniform2uiv(this.addr,e)}function $S(n,e){n.uniform3uiv(this.addr,e)}function KS(n,e){n.uniform4uiv(this.addr,e)}function JS(n,e,t){const i=this.cache,r=e.length,s=ma(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Zd,s[o])}function ZS(n,e,t){const i=this.cache,r=e.length,s=ma(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||ep,s[o])}function QS(n,e,t){const i=this.cache,r=e.length,s=ma(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||tp,s[o])}function eb(n,e,t){const i=this.cache,r=e.length,s=ma(t,r);Gt(i,s)||(n.uniform1iv(this.addr,s),Wt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Qd,s[o])}function tb(n){switch(n){case 5126:return FS;case 35664:return OS;case 35665:return BS;case 35666:return zS;case 35674:return VS;case 35675:return HS;case 35676:return kS;case 5124:case 35670:return GS;case 35667:case 35671:return WS;case 35668:case 35672:return XS;case 35669:case 35673:return qS;case 5125:return jS;case 36294:return YS;case 36295:return $S;case 36296:return KS;case 35678:case 36198:case 36298:case 36306:case 35682:return JS;case 35679:case 36299:case 36307:return ZS;case 35680:case 36300:case 36308:case 36293:return QS;case 36289:case 36303:case 36311:case 36292:return eb}}class nb{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=NS(t.type)}}class ib{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=tb(t.type)}}class rb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const xl=/(\w+)(\])?(\[|\.)?/g;function Kf(n,e){n.seq.push(e),n.map[e.id]=e}function sb(n,e,t){const i=n.name,r=i.length;for(xl.lastIndex=0;;){const s=xl.exec(i),o=xl.lastIndex;let a=s[1];const c=s[2]==="]",u=s[3];if(c&&(a=a|0),u===void 0||u==="["&&o+2===r){Kf(t,u===void 0?new nb(a,n,e):new ib(a,n,e));break}else{let h=t.map[a];h===void 0&&(h=new rb(a),Kf(t,h)),t=h}}}class Xo{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);sb(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=i[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Jf(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const ob=37297;let ab=0;function lb(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}const Zf=new ot;function cb(n){vt._getMatrix(Zf,vt.workingColorSpace,n);const e=`mat3( ${Zf.elements.map(t=>t.toFixed(4))} )`;switch(vt.getTransfer(n)){case Zo:return[e,"LinearTransferOETF"];case Tt:return[e,"sRGBTransferOETF"];default:return at("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Qf(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),s=(n.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+lb(n.getShaderSource(e),a)}else return s}function ub(n,e){const t=cb(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function fb(n,e){let t;switch(e){case wx:t="Linear";break;case Cx:t="Reinhard";break;case Rx:t="Cineon";break;case Px:t="ACESFilmic";break;case Dx:t="AgX";break;case Ix:t="Neutral";break;case Lx:t="Custom";break;default:at("WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fo=new ie;function hb(){vt.getLuminanceCoefficients(Fo);const n=Fo.x.toFixed(4),e=Fo.y.toFixed(4),t=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function db(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ts).join(`
`)}function pb(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function mb(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ts(n){return n!==""}function eh(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function th(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xb=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(n){return n.replace(xb,_b)}const gb=new Map;function _b(n,e){let t=ut[e];if(t===void 0){const i=gb.get(e);if(i!==void 0)t=ut[i],at('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return yc(t)}const vb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function nh(n){return n.replace(vb,yb)}function yb(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ih(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Sb(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_d?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===ox?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===pi&&(e="SHADOWMAP_TYPE_VSM"),e}function bb(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qr:case es:e="ENVMAP_TYPE_CUBE";break;case fa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Mb(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function Eb(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vd:e="ENVMAP_BLENDING_MULTIPLY";break;case Tx:e="ENVMAP_BLENDING_MIX";break;case Ax:e="ENVMAP_BLENDING_ADD";break}return e}function Tb(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ab(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=Sb(t),u=bb(t),f=Mb(t),h=Eb(t),m=Tb(t),x=db(t),y=pb(s),E=r.createProgram();let _,p,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ts).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(Ts).join(`
`),p.length>0&&(p+=`
`)):(_=[ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ts).join(`
`),p=[ih(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==qi?"#define TONE_MAPPING":"",t.toneMapping!==qi?ut.tonemapping_pars_fragment:"",t.toneMapping!==qi?fb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,ub("linearToOutputTexel",t.outputColorSpace),hb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ts).join(`
`)),o=yc(o),o=eh(o,t),o=th(o,t),a=yc(a),a=eh(a,t),a=th(a,t),o=nh(o),a=nh(a),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,_=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===cf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===cf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=L+_+o,M=L+p+a,z=Jf(r,r.VERTEX_SHADER,b),N=Jf(r,r.FRAGMENT_SHADER,M);r.attachShader(E,z),r.attachShader(E,N),t.index0AttributeName!==void 0?r.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(E,0,"position"),r.linkProgram(E);function V(q){if(n.debug.checkShaderErrors){const ee=r.getProgramInfoLog(E)||"",fe=r.getShaderInfoLog(z)||"",pe=r.getShaderInfoLog(N)||"",de=ee.trim(),he=fe.trim(),ae=pe.trim();let Y=!0,Se=!0;if(r.getProgramParameter(E,r.LINK_STATUS)===!1)if(Y=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,E,z,N);else{const Ee=Qf(r,z,"vertex"),Ue=Qf(r,N,"fragment");Vt("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(E,r.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+de+`
`+Ee+`
`+Ue)}else de!==""?at("WebGLProgram: Program Info Log:",de):(he===""||ae==="")&&(Se=!1);Se&&(q.diagnostics={runnable:Y,programLog:de,vertexShader:{log:he,prefix:_},fragmentShader:{log:ae,prefix:p}})}r.deleteShader(z),r.deleteShader(N),j=new Xo(r,E),D=mb(r,E)}let j;this.getUniforms=function(){return j===void 0&&V(this),j};let D;this.getAttributes=function(){return D===void 0&&V(this),D};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(E,ob)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ab++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=z,this.fragmentShader=N,this}let wb=0;class Cb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Rb(e),t.set(e,i)),i}}class Rb{constructor(e){this.id=wb++,this.code=e,this.usedTimes=0}}function Pb(n,e,t,i,r,s,o){const a=new Dd,c=new Cb,u=new Set,f=[],h=r.logarithmicDepthBuffer,m=r.vertexTextures;let x=r.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(D){return u.add(D),D===0?"uv":`uv${D}`}function _(D,C,q,ee,fe){const pe=ee.fog,de=fe.geometry,he=D.isMeshStandardMaterial?ee.environment:null,ae=(D.isMeshStandardMaterial?t:e).get(D.envMap||he),Y=ae&&ae.mapping===fa?ae.image.height:null,Se=y[D.type];D.precision!==null&&(x=r.getMaxPrecision(D.precision),x!==D.precision&&at("WebGLProgram.getParameters:",D.precision,"not supported, using",x,"instead."));const Ee=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,Ue=Ee!==void 0?Ee.length:0;let we=0;de.morphAttributes.position!==void 0&&(we=1),de.morphAttributes.normal!==void 0&&(we=2),de.morphAttributes.color!==void 0&&(we=3);let Ce,ne,$,P;if(Se){const mt=$n[Se];Ce=mt.vertexShader,ne=mt.fragmentShader}else Ce=D.vertexShader,ne=D.fragmentShader,c.update(D),$=c.getVertexShaderID(D),P=c.getFragmentShaderID(D);const w=n.getRenderTarget(),se=n.state.buffers.depth.getReversed(),ve=fe.isInstancedMesh===!0,re=fe.isBatchedMesh===!0,be=!!D.map,F=!!D.matcap,B=!!ae,I=!!D.aoMap,v=!!D.lightMap,k=!!D.bumpMap,W=!!D.normalMap,O=!!D.displacementMap,A=!!D.emissiveMap,Q=!!D.metalnessMap,Z=!!D.roughnessMap,ye=D.anisotropy>0,R=D.clearcoat>0,S=D.dispersion>0,K=D.iridescence>0,ce=D.sheen>0,_e=D.transmission>0,ue=ye&&!!D.anisotropyMap,Be=R&&!!D.clearcoatMap,Re=R&&!!D.clearcoatNormalMap,Xe=R&&!!D.clearcoatRoughnessMap,He=K&&!!D.iridescenceMap,Me=K&&!!D.iridescenceThicknessMap,De=ce&&!!D.sheenColorMap,Ye=ce&&!!D.sheenRoughnessMap,Ke=!!D.specularMap,Ge=!!D.specularColorMap,tt=!!D.specularIntensityMap,J=_e&&!!D.transmissionMap,ze=_e&&!!D.thicknessMap,Ne=!!D.gradientMap,Fe=!!D.alphaMap,Le=D.alphaTest>0,Te=!!D.alphaHash,je=!!D.extensions;let it=qi;D.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(it=n.toneMapping);const Mt={shaderID:Se,shaderType:D.type,shaderName:D.name,vertexShader:Ce,fragmentShader:ne,defines:D.defines,customVertexShaderID:$,customFragmentShaderID:P,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:x,batching:re,batchingColor:re&&fe._colorsTexture!==null,instancing:ve,instancingColor:ve&&fe.instanceColor!==null,instancingMorph:ve&&fe.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:w===null?n.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ts,alphaToCoverage:!!D.alphaToCoverage,map:be,matcap:F,envMap:B,envMapMode:B&&ae.mapping,envMapCubeUVHeight:Y,aoMap:I,lightMap:v,bumpMap:k,normalMap:W,displacementMap:m&&O,emissiveMap:A,normalMapObjectSpace:W&&D.normalMapType===Ox,normalMapTangentSpace:W&&D.normalMapType===Cd,metalnessMap:Q,roughnessMap:Z,anisotropy:ye,anisotropyMap:ue,clearcoat:R,clearcoatMap:Be,clearcoatNormalMap:Re,clearcoatRoughnessMap:Xe,dispersion:S,iridescence:K,iridescenceMap:He,iridescenceThicknessMap:Me,sheen:ce,sheenColorMap:De,sheenRoughnessMap:Ye,specularMap:Ke,specularColorMap:Ge,specularIntensityMap:tt,transmission:_e,transmissionMap:J,thicknessMap:ze,gradientMap:Ne,opaque:D.transparent===!1&&D.blending===jr&&D.alphaToCoverage===!1,alphaMap:Fe,alphaTest:Le,alphaHash:Te,combine:D.combine,mapUv:be&&E(D.map.channel),aoMapUv:I&&E(D.aoMap.channel),lightMapUv:v&&E(D.lightMap.channel),bumpMapUv:k&&E(D.bumpMap.channel),normalMapUv:W&&E(D.normalMap.channel),displacementMapUv:O&&E(D.displacementMap.channel),emissiveMapUv:A&&E(D.emissiveMap.channel),metalnessMapUv:Q&&E(D.metalnessMap.channel),roughnessMapUv:Z&&E(D.roughnessMap.channel),anisotropyMapUv:ue&&E(D.anisotropyMap.channel),clearcoatMapUv:Be&&E(D.clearcoatMap.channel),clearcoatNormalMapUv:Re&&E(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Xe&&E(D.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&E(D.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&E(D.iridescenceThicknessMap.channel),sheenColorMapUv:De&&E(D.sheenColorMap.channel),sheenRoughnessMapUv:Ye&&E(D.sheenRoughnessMap.channel),specularMapUv:Ke&&E(D.specularMap.channel),specularColorMapUv:Ge&&E(D.specularColorMap.channel),specularIntensityMapUv:tt&&E(D.specularIntensityMap.channel),transmissionMapUv:J&&E(D.transmissionMap.channel),thicknessMapUv:ze&&E(D.thicknessMap.channel),alphaMapUv:Fe&&E(D.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(W||ye),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:fe.isPoints===!0&&!!de.attributes.uv&&(be||Fe),fog:!!pe,useFog:D.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:D.flatShading===!0&&D.wireframe===!1,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:se,skinning:fe.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:Ue,morphTextureStride:we,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:D.dithering,shadowMapEnabled:n.shadowMap.enabled&&q.length>0,shadowMapType:n.shadowMap.type,toneMapping:it,decodeVideoTexture:be&&D.map.isVideoTexture===!0&&vt.getTransfer(D.map.colorSpace)===Tt,decodeVideoTextureEmissive:A&&D.emissiveMap.isVideoTexture===!0&&vt.getTransfer(D.emissiveMap.colorSpace)===Tt,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===_i,flipSided:D.side===xn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:je&&D.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&D.extensions.multiDraw===!0||re)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Mt.vertexUv1s=u.has(1),Mt.vertexUv2s=u.has(2),Mt.vertexUv3s=u.has(3),u.clear(),Mt}function p(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const q in D.defines)C.push(q),C.push(D.defines[q]);return D.isRawShaderMaterial===!1&&(L(C,D),b(C,D),C.push(n.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function L(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function b(D,C){a.disableAll(),C.supportsVertexTextures&&a.enable(0),C.instancing&&a.enable(1),C.instancingColor&&a.enable(2),C.instancingMorph&&a.enable(3),C.matcap&&a.enable(4),C.envMap&&a.enable(5),C.normalMapObjectSpace&&a.enable(6),C.normalMapTangentSpace&&a.enable(7),C.clearcoat&&a.enable(8),C.iridescence&&a.enable(9),C.alphaTest&&a.enable(10),C.vertexColors&&a.enable(11),C.vertexAlphas&&a.enable(12),C.vertexUv1s&&a.enable(13),C.vertexUv2s&&a.enable(14),C.vertexUv3s&&a.enable(15),C.vertexTangents&&a.enable(16),C.anisotropy&&a.enable(17),C.alphaHash&&a.enable(18),C.batching&&a.enable(19),C.dispersion&&a.enable(20),C.batchingColor&&a.enable(21),C.gradientMap&&a.enable(22),D.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),D.push(a.mask)}function M(D){const C=y[D.type];let q;if(C){const ee=$n[C];q=dg.clone(ee.uniforms)}else q=D.uniforms;return q}function z(D,C){let q;for(let ee=0,fe=f.length;ee<fe;ee++){const pe=f[ee];if(pe.cacheKey===C){q=pe,++q.usedTimes;break}}return q===void 0&&(q=new Ab(n,C,D,s),f.push(q)),q}function N(D){if(--D.usedTimes===0){const C=f.indexOf(D);f[C]=f[f.length-1],f.pop(),D.destroy()}}function V(D){c.remove(D)}function j(){c.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:M,acquireProgram:z,releaseProgram:N,releaseShaderCache:V,programs:f,dispose:j}}function Lb(){let n=new WeakMap;function e(o){return n.has(o)}function t(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function r(o,a,c){n.get(o)[a]=c}function s(){n=new WeakMap}return{has:e,get:t,remove:i,update:r,dispose:s}}function Db(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function rh(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function sh(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(h,m,x,y,E,_){let p=n[e];return p===void 0?(p={id:h.id,object:h,geometry:m,material:x,groupOrder:y,renderOrder:h.renderOrder,z:E,group:_},n[e]=p):(p.id=h.id,p.object=h,p.geometry=m,p.material=x,p.groupOrder=y,p.renderOrder=h.renderOrder,p.z=E,p.group=_),e++,p}function a(h,m,x,y,E,_){const p=o(h,m,x,y,E,_);x.transmission>0?i.push(p):x.transparent===!0?r.push(p):t.push(p)}function c(h,m,x,y,E,_){const p=o(h,m,x,y,E,_);x.transmission>0?i.unshift(p):x.transparent===!0?r.unshift(p):t.unshift(p)}function u(h,m){t.length>1&&t.sort(h||Db),i.length>1&&i.sort(m||rh),r.length>1&&r.sort(m||rh)}function f(){for(let h=e,m=n.length;h<m;h++){const x=n[h];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:c,finish:f,sort:u}}function Ib(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new sh,n.set(i,[o])):r>=s.length?(o=new sh,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ub(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new xt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new xt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new xt,groundColor:new xt};break;case"RectAreaLight":t={color:new xt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return n[e.id]=t,t}}}function Nb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Fb=0;function Ob(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Bb(n){const e=new Ub,t=Nb(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new ie);const r=new ie,s=new Bt,o=new Bt;function a(u){let f=0,h=0,m=0;for(let D=0;D<9;D++)i.probe[D].set(0,0,0);let x=0,y=0,E=0,_=0,p=0,L=0,b=0,M=0,z=0,N=0,V=0;u.sort(Ob);for(let D=0,C=u.length;D<C;D++){const q=u[D],ee=q.color,fe=q.intensity,pe=q.distance,de=q.shadow&&q.shadow.map?q.shadow.map.texture:null;if(q.isAmbientLight)f+=ee.r*fe,h+=ee.g*fe,m+=ee.b*fe;else if(q.isLightProbe){for(let he=0;he<9;he++)i.probe[he].addScaledVector(q.sh.coefficients[he],fe);V++}else if(q.isDirectionalLight){const he=e.get(q);if(he.color.copy(q.color).multiplyScalar(q.intensity),q.castShadow){const ae=q.shadow,Y=t.get(q);Y.shadowIntensity=ae.intensity,Y.shadowBias=ae.bias,Y.shadowNormalBias=ae.normalBias,Y.shadowRadius=ae.radius,Y.shadowMapSize=ae.mapSize,i.directionalShadow[x]=Y,i.directionalShadowMap[x]=de,i.directionalShadowMatrix[x]=q.shadow.matrix,L++}i.directional[x]=he,x++}else if(q.isSpotLight){const he=e.get(q);he.position.setFromMatrixPosition(q.matrixWorld),he.color.copy(ee).multiplyScalar(fe),he.distance=pe,he.coneCos=Math.cos(q.angle),he.penumbraCos=Math.cos(q.angle*(1-q.penumbra)),he.decay=q.decay,i.spot[E]=he;const ae=q.shadow;if(q.map&&(i.spotLightMap[z]=q.map,z++,ae.updateMatrices(q),q.castShadow&&N++),i.spotLightMatrix[E]=ae.matrix,q.castShadow){const Y=t.get(q);Y.shadowIntensity=ae.intensity,Y.shadowBias=ae.bias,Y.shadowNormalBias=ae.normalBias,Y.shadowRadius=ae.radius,Y.shadowMapSize=ae.mapSize,i.spotShadow[E]=Y,i.spotShadowMap[E]=de,M++}E++}else if(q.isRectAreaLight){const he=e.get(q);he.color.copy(ee).multiplyScalar(fe),he.halfWidth.set(q.width*.5,0,0),he.halfHeight.set(0,q.height*.5,0),i.rectArea[_]=he,_++}else if(q.isPointLight){const he=e.get(q);if(he.color.copy(q.color).multiplyScalar(q.intensity),he.distance=q.distance,he.decay=q.decay,q.castShadow){const ae=q.shadow,Y=t.get(q);Y.shadowIntensity=ae.intensity,Y.shadowBias=ae.bias,Y.shadowNormalBias=ae.normalBias,Y.shadowRadius=ae.radius,Y.shadowMapSize=ae.mapSize,Y.shadowCameraNear=ae.camera.near,Y.shadowCameraFar=ae.camera.far,i.pointShadow[y]=Y,i.pointShadowMap[y]=de,i.pointShadowMatrix[y]=q.shadow.matrix,b++}i.point[y]=he,y++}else if(q.isHemisphereLight){const he=e.get(q);he.skyColor.copy(q.color).multiplyScalar(fe),he.groundColor.copy(q.groundColor).multiplyScalar(fe),i.hemi[p]=he,p++}}_>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ke.LTC_FLOAT_1,i.rectAreaLTC2=ke.LTC_FLOAT_2):(i.rectAreaLTC1=ke.LTC_HALF_1,i.rectAreaLTC2=ke.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=m;const j=i.hash;(j.directionalLength!==x||j.pointLength!==y||j.spotLength!==E||j.rectAreaLength!==_||j.hemiLength!==p||j.numDirectionalShadows!==L||j.numPointShadows!==b||j.numSpotShadows!==M||j.numSpotMaps!==z||j.numLightProbes!==V)&&(i.directional.length=x,i.spot.length=E,i.rectArea.length=_,i.point.length=y,i.hemi.length=p,i.directionalShadow.length=L,i.directionalShadowMap.length=L,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=M,i.spotShadowMap.length=M,i.directionalShadowMatrix.length=L,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=M+z-N,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=V,j.directionalLength=x,j.pointLength=y,j.spotLength=E,j.rectAreaLength=_,j.hemiLength=p,j.numDirectionalShadows=L,j.numPointShadows=b,j.numSpotShadows=M,j.numSpotMaps=z,j.numLightProbes=V,i.version=Fb++)}function c(u,f){let h=0,m=0,x=0,y=0,E=0;const _=f.matrixWorldInverse;for(let p=0,L=u.length;p<L;p++){const b=u[p];if(b.isDirectionalLight){const M=i.directional[h];M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),h++}else if(b.isSpotLight){const M=i.spot[x];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(b.matrixWorld),r.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(r),M.direction.transformDirection(_),x++}else if(b.isRectAreaLight){const M=i.rectArea[y];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),o.identity(),s.copy(b.matrixWorld),s.premultiply(_),o.extractRotation(s),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),y++}else if(b.isPointLight){const M=i.point[m];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(_),m++}else if(b.isHemisphereLight){const M=i.hemi[E];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(_),E++}}}return{setup:a,setupView:c,state:i}}function oh(n){const e=new Bb(n),t=[],i=[];function r(f){u.camera=f,t.length=0,i.length=0}function s(f){t.push(f)}function o(f){i.push(f)}function a(){e.setup(t)}function c(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function zb(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new oh(n),e.set(r,[a])):s>=o.length?(a=new oh(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}const Vb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function kb(n,e,t){let i=new Kc;const r=new Ae,s=new Ae,o=new At,a=new i_({depthPacking:Fx}),c=new r_,u={},f=t.maxTextureSize,h={[$i]:xn,[xn]:$i,[_i]:_i},m=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ae},radius:{value:4}},vertexShader:Vb,fragmentShader:Hb}),x=m.clone();x.defines.HORIZONTAL_PASS=1;const y=new Nn;y.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new ni(y,m),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_d;let p=this.type;this.render=function(N,V,j){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||N.length===0)return;const D=n.getRenderTarget(),C=n.getActiveCubeFace(),q=n.getActiveMipmapLevel(),ee=n.state;ee.setBlending(bi),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const fe=p!==pi&&this.type===pi,pe=p===pi&&this.type!==pi;for(let de=0,he=N.length;de<he;de++){const ae=N[de],Y=ae.shadow;if(Y===void 0){at("WebGLShadowMap:",ae,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;r.copy(Y.mapSize);const Se=Y.getFrameExtents();if(r.multiply(Se),s.copy(Y.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/Se.x),r.x=s.x*Se.x,Y.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/Se.y),r.y=s.y*Se.y,Y.mapSize.y=s.y)),Y.map===null||fe===!0||pe===!0){const Ue=this.type!==pi?{minFilter:wn,magFilter:wn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new xr(r.x,r.y,Ue),Y.map.texture.name=ae.name+".shadowMap",Y.camera.updateProjectionMatrix()}n.setRenderTarget(Y.map),n.clear();const Ee=Y.getViewportCount();for(let Ue=0;Ue<Ee;Ue++){const we=Y.getViewport(Ue);o.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),ee.viewport(o),Y.updateMatrices(ae,Ue),i=Y.getFrustum(),M(V,j,Y.camera,ae,this.type)}Y.isPointLightShadow!==!0&&this.type===pi&&L(Y,j),Y.needsUpdate=!1}p=this.type,_.needsUpdate=!1,n.setRenderTarget(D,C,q)};function L(N,V){const j=e.update(E);m.defines.VSM_SAMPLES!==N.blurSamples&&(m.defines.VSM_SAMPLES=N.blurSamples,x.defines.VSM_SAMPLES=N.blurSamples,m.needsUpdate=!0,x.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new xr(r.x,r.y)),m.uniforms.shadow_pass.value=N.map.texture,m.uniforms.resolution.value=N.mapSize,m.uniforms.radius.value=N.radius,n.setRenderTarget(N.mapPass),n.clear(),n.renderBufferDirect(V,null,j,m,E,null),x.uniforms.shadow_pass.value=N.mapPass.texture,x.uniforms.resolution.value=N.mapSize,x.uniforms.radius.value=N.radius,n.setRenderTarget(N.map),n.clear(),n.renderBufferDirect(V,null,j,x,E,null)}function b(N,V,j,D){let C=null;const q=j.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(q!==void 0)C=q;else if(C=j.isPointLight===!0?c:a,n.localClippingEnabled&&V.clipShadows===!0&&Array.isArray(V.clippingPlanes)&&V.clippingPlanes.length!==0||V.displacementMap&&V.displacementScale!==0||V.alphaMap&&V.alphaTest>0||V.map&&V.alphaTest>0||V.alphaToCoverage===!0){const ee=C.uuid,fe=V.uuid;let pe=u[ee];pe===void 0&&(pe={},u[ee]=pe);let de=pe[fe];de===void 0&&(de=C.clone(),pe[fe]=de,V.addEventListener("dispose",z)),C=de}if(C.visible=V.visible,C.wireframe=V.wireframe,D===pi?C.side=V.shadowSide!==null?V.shadowSide:V.side:C.side=V.shadowSide!==null?V.shadowSide:h[V.side],C.alphaMap=V.alphaMap,C.alphaTest=V.alphaToCoverage===!0?.5:V.alphaTest,C.map=V.map,C.clipShadows=V.clipShadows,C.clippingPlanes=V.clippingPlanes,C.clipIntersection=V.clipIntersection,C.displacementMap=V.displacementMap,C.displacementScale=V.displacementScale,C.displacementBias=V.displacementBias,C.wireframeLinewidth=V.wireframeLinewidth,C.linewidth=V.linewidth,j.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ee=n.properties.get(C);ee.light=j}return C}function M(N,V,j,D,C){if(N.visible===!1)return;if(N.layers.test(V.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&C===pi)&&(!N.frustumCulled||i.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,N.matrixWorld);const fe=e.update(N),pe=N.material;if(Array.isArray(pe)){const de=fe.groups;for(let he=0,ae=de.length;he<ae;he++){const Y=de[he],Se=pe[Y.materialIndex];if(Se&&Se.visible){const Ee=b(N,Se,D,C);N.onBeforeShadow(n,N,V,j,fe,Ee,Y),n.renderBufferDirect(j,null,fe,Ee,N,Y),N.onAfterShadow(n,N,V,j,fe,Ee,Y)}}}else if(pe.visible){const de=b(N,pe,D,C);N.onBeforeShadow(n,N,V,j,fe,de,null),n.renderBufferDirect(j,null,fe,de,N,null),N.onAfterShadow(n,N,V,j,fe,de,null)}}const ee=N.children;for(let fe=0,pe=ee.length;fe<pe;fe++)M(ee[fe],V,j,D,C)}function z(N){N.target.removeEventListener("dispose",z);for(const j in u){const D=u[j],C=N.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const Gb={[Ll]:Dl,[Il]:Fl,[Ul]:Ol,[Zr]:Nl,[Dl]:Ll,[Fl]:Il,[Ol]:Ul,[Nl]:Zr};function Wb(n,e){function t(){let J=!1;const ze=new At;let Ne=null;const Fe=new At(0,0,0,0);return{setMask:function(Le){Ne!==Le&&!J&&(n.colorMask(Le,Le,Le,Le),Ne=Le)},setLocked:function(Le){J=Le},setClear:function(Le,Te,je,it,Mt){Mt===!0&&(Le*=it,Te*=it,je*=it),ze.set(Le,Te,je,it),Fe.equals(ze)===!1&&(n.clearColor(Le,Te,je,it),Fe.copy(ze))},reset:function(){J=!1,Ne=null,Fe.set(-1,0,0,0)}}}function i(){let J=!1,ze=!1,Ne=null,Fe=null,Le=null;return{setReversed:function(Te){if(ze!==Te){const je=e.get("EXT_clip_control");Te?je.clipControlEXT(je.LOWER_LEFT_EXT,je.ZERO_TO_ONE_EXT):je.clipControlEXT(je.LOWER_LEFT_EXT,je.NEGATIVE_ONE_TO_ONE_EXT),ze=Te;const it=Le;Le=null,this.setClear(it)}},getReversed:function(){return ze},setTest:function(Te){Te?w(n.DEPTH_TEST):se(n.DEPTH_TEST)},setMask:function(Te){Ne!==Te&&!J&&(n.depthMask(Te),Ne=Te)},setFunc:function(Te){if(ze&&(Te=Gb[Te]),Fe!==Te){switch(Te){case Ll:n.depthFunc(n.NEVER);break;case Dl:n.depthFunc(n.ALWAYS);break;case Il:n.depthFunc(n.LESS);break;case Zr:n.depthFunc(n.LEQUAL);break;case Ul:n.depthFunc(n.EQUAL);break;case Nl:n.depthFunc(n.GEQUAL);break;case Fl:n.depthFunc(n.GREATER);break;case Ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Fe=Te}},setLocked:function(Te){J=Te},setClear:function(Te){Le!==Te&&(ze&&(Te=1-Te),n.clearDepth(Te),Le=Te)},reset:function(){J=!1,Ne=null,Fe=null,Le=null,ze=!1}}}function r(){let J=!1,ze=null,Ne=null,Fe=null,Le=null,Te=null,je=null,it=null,Mt=null;return{setTest:function(mt){J||(mt?w(n.STENCIL_TEST):se(n.STENCIL_TEST))},setMask:function(mt){ze!==mt&&!J&&(n.stencilMask(mt),ze=mt)},setFunc:function(mt,sn,_n){(Ne!==mt||Fe!==sn||Le!==_n)&&(n.stencilFunc(mt,sn,_n),Ne=mt,Fe=sn,Le=_n)},setOp:function(mt,sn,_n){(Te!==mt||je!==sn||it!==_n)&&(n.stencilOp(mt,sn,_n),Te=mt,je=sn,it=_n)},setLocked:function(mt){J=mt},setClear:function(mt){Mt!==mt&&(n.clearStencil(mt),Mt=mt)},reset:function(){J=!1,ze=null,Ne=null,Fe=null,Le=null,Te=null,je=null,it=null,Mt=null}}}const s=new t,o=new i,a=new r,c=new WeakMap,u=new WeakMap;let f={},h={},m=new WeakMap,x=[],y=null,E=!1,_=null,p=null,L=null,b=null,M=null,z=null,N=null,V=new xt(0,0,0),j=0,D=!1,C=null,q=null,ee=null,fe=null,pe=null;const de=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let he=!1,ae=0;const Y=n.getParameter(n.VERSION);Y.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(Y)[1]),he=ae>=1):Y.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),he=ae>=2);let Se=null,Ee={};const Ue=n.getParameter(n.SCISSOR_BOX),we=n.getParameter(n.VIEWPORT),Ce=new At().fromArray(Ue),ne=new At().fromArray(we);function $(J,ze,Ne,Fe){const Le=new Uint8Array(4),Te=n.createTexture();n.bindTexture(J,Te),n.texParameteri(J,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(J,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let je=0;je<Ne;je++)J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?n.texImage3D(ze,0,n.RGBA,1,1,Fe,0,n.RGBA,n.UNSIGNED_BYTE,Le):n.texImage2D(ze+je,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Le);return Te}const P={};P[n.TEXTURE_2D]=$(n.TEXTURE_2D,n.TEXTURE_2D,1),P[n.TEXTURE_CUBE_MAP]=$(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),P[n.TEXTURE_2D_ARRAY]=$(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),P[n.TEXTURE_3D]=$(n.TEXTURE_3D,n.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),w(n.DEPTH_TEST),o.setFunc(Zr),k(!1),W(nf),w(n.CULL_FACE),I(bi);function w(J){f[J]!==!0&&(n.enable(J),f[J]=!0)}function se(J){f[J]!==!1&&(n.disable(J),f[J]=!1)}function ve(J,ze){return h[J]!==ze?(n.bindFramebuffer(J,ze),h[J]=ze,J===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=ze),J===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=ze),!0):!1}function re(J,ze){let Ne=x,Fe=!1;if(J){Ne=m.get(ze),Ne===void 0&&(Ne=[],m.set(ze,Ne));const Le=J.textures;if(Ne.length!==Le.length||Ne[0]!==n.COLOR_ATTACHMENT0){for(let Te=0,je=Le.length;Te<je;Te++)Ne[Te]=n.COLOR_ATTACHMENT0+Te;Ne.length=Le.length,Fe=!0}}else Ne[0]!==n.BACK&&(Ne[0]=n.BACK,Fe=!0);Fe&&n.drawBuffers(Ne)}function be(J){return y!==J?(n.useProgram(J),y=J,!0):!1}const F={[ur]:n.FUNC_ADD,[lx]:n.FUNC_SUBTRACT,[cx]:n.FUNC_REVERSE_SUBTRACT};F[ux]=n.MIN,F[fx]=n.MAX;const B={[hx]:n.ZERO,[dx]:n.ONE,[px]:n.SRC_COLOR,[Rl]:n.SRC_ALPHA,[yx]:n.SRC_ALPHA_SATURATE,[_x]:n.DST_COLOR,[xx]:n.DST_ALPHA,[mx]:n.ONE_MINUS_SRC_COLOR,[Pl]:n.ONE_MINUS_SRC_ALPHA,[vx]:n.ONE_MINUS_DST_COLOR,[gx]:n.ONE_MINUS_DST_ALPHA,[Sx]:n.CONSTANT_COLOR,[bx]:n.ONE_MINUS_CONSTANT_COLOR,[Mx]:n.CONSTANT_ALPHA,[Ex]:n.ONE_MINUS_CONSTANT_ALPHA};function I(J,ze,Ne,Fe,Le,Te,je,it,Mt,mt){if(J===bi){E===!0&&(se(n.BLEND),E=!1);return}if(E===!1&&(w(n.BLEND),E=!0),J!==ax){if(J!==_||mt!==D){if((p!==ur||M!==ur)&&(n.blendEquation(n.FUNC_ADD),p=ur,M=ur),mt)switch(J){case jr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rf:n.blendFunc(n.ONE,n.ONE);break;case sf:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case of:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:Vt("WebGLState: Invalid blending: ",J);break}else switch(J){case jr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case rf:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case sf:Vt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case of:Vt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Vt("WebGLState: Invalid blending: ",J);break}L=null,b=null,z=null,N=null,V.set(0,0,0),j=0,_=J,D=mt}return}Le=Le||ze,Te=Te||Ne,je=je||Fe,(ze!==p||Le!==M)&&(n.blendEquationSeparate(F[ze],F[Le]),p=ze,M=Le),(Ne!==L||Fe!==b||Te!==z||je!==N)&&(n.blendFuncSeparate(B[Ne],B[Fe],B[Te],B[je]),L=Ne,b=Fe,z=Te,N=je),(it.equals(V)===!1||Mt!==j)&&(n.blendColor(it.r,it.g,it.b,Mt),V.copy(it),j=Mt),_=J,D=!1}function v(J,ze){J.side===_i?se(n.CULL_FACE):w(n.CULL_FACE);let Ne=J.side===xn;ze&&(Ne=!Ne),k(Ne),J.blending===jr&&J.transparent===!1?I(bi):I(J.blending,J.blendEquation,J.blendSrc,J.blendDst,J.blendEquationAlpha,J.blendSrcAlpha,J.blendDstAlpha,J.blendColor,J.blendAlpha,J.premultipliedAlpha),o.setFunc(J.depthFunc),o.setTest(J.depthTest),o.setMask(J.depthWrite),s.setMask(J.colorWrite);const Fe=J.stencilWrite;a.setTest(Fe),Fe&&(a.setMask(J.stencilWriteMask),a.setFunc(J.stencilFunc,J.stencilRef,J.stencilFuncMask),a.setOp(J.stencilFail,J.stencilZFail,J.stencilZPass)),A(J.polygonOffset,J.polygonOffsetFactor,J.polygonOffsetUnits),J.alphaToCoverage===!0?w(n.SAMPLE_ALPHA_TO_COVERAGE):se(n.SAMPLE_ALPHA_TO_COVERAGE)}function k(J){C!==J&&(J?n.frontFace(n.CW):n.frontFace(n.CCW),C=J)}function W(J){J!==rx?(w(n.CULL_FACE),J!==q&&(J===nf?n.cullFace(n.BACK):J===sx?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):se(n.CULL_FACE),q=J}function O(J){J!==ee&&(he&&n.lineWidth(J),ee=J)}function A(J,ze,Ne){J?(w(n.POLYGON_OFFSET_FILL),(fe!==ze||pe!==Ne)&&(n.polygonOffset(ze,Ne),fe=ze,pe=Ne)):se(n.POLYGON_OFFSET_FILL)}function Q(J){J?w(n.SCISSOR_TEST):se(n.SCISSOR_TEST)}function Z(J){J===void 0&&(J=n.TEXTURE0+de-1),Se!==J&&(n.activeTexture(J),Se=J)}function ye(J,ze,Ne){Ne===void 0&&(Se===null?Ne=n.TEXTURE0+de-1:Ne=Se);let Fe=Ee[Ne];Fe===void 0&&(Fe={type:void 0,texture:void 0},Ee[Ne]=Fe),(Fe.type!==J||Fe.texture!==ze)&&(Se!==Ne&&(n.activeTexture(Ne),Se=Ne),n.bindTexture(J,ze||P[J]),Fe.type=J,Fe.texture=ze)}function R(){const J=Ee[Se];J!==void 0&&J.type!==void 0&&(n.bindTexture(J.type,null),J.type=void 0,J.texture=void 0)}function S(){try{n.compressedTexImage2D(...arguments)}catch(J){J("WebGLState:",J)}}function K(){try{n.compressedTexImage3D(...arguments)}catch(J){J("WebGLState:",J)}}function ce(){try{n.texSubImage2D(...arguments)}catch(J){J("WebGLState:",J)}}function _e(){try{n.texSubImage3D(...arguments)}catch(J){J("WebGLState:",J)}}function ue(){try{n.compressedTexSubImage2D(...arguments)}catch(J){J("WebGLState:",J)}}function Be(){try{n.compressedTexSubImage3D(...arguments)}catch(J){J("WebGLState:",J)}}function Re(){try{n.texStorage2D(...arguments)}catch(J){J("WebGLState:",J)}}function Xe(){try{n.texStorage3D(...arguments)}catch(J){J("WebGLState:",J)}}function He(){try{n.texImage2D(...arguments)}catch(J){J("WebGLState:",J)}}function Me(){try{n.texImage3D(...arguments)}catch(J){J("WebGLState:",J)}}function De(J){Ce.equals(J)===!1&&(n.scissor(J.x,J.y,J.z,J.w),Ce.copy(J))}function Ye(J){ne.equals(J)===!1&&(n.viewport(J.x,J.y,J.z,J.w),ne.copy(J))}function Ke(J,ze){let Ne=u.get(ze);Ne===void 0&&(Ne=new WeakMap,u.set(ze,Ne));let Fe=Ne.get(J);Fe===void 0&&(Fe=n.getUniformBlockIndex(ze,J.name),Ne.set(J,Fe))}function Ge(J,ze){const Fe=u.get(ze).get(J);c.get(ze)!==Fe&&(n.uniformBlockBinding(ze,Fe,J.__bindingPointIndex),c.set(ze,Fe))}function tt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},Se=null,Ee={},h={},m=new WeakMap,x=[],y=null,E=!1,_=null,p=null,L=null,b=null,M=null,z=null,N=null,V=new xt(0,0,0),j=0,D=!1,C=null,q=null,ee=null,fe=null,pe=null,Ce.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:w,disable:se,bindFramebuffer:ve,drawBuffers:re,useProgram:be,setBlending:I,setMaterial:v,setFlipSided:k,setCullFace:W,setLineWidth:O,setPolygonOffset:A,setScissorTest:Q,activeTexture:Z,bindTexture:ye,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:K,texImage2D:He,texImage3D:Me,updateUBOMapping:Ke,uniformBlockBinding:Ge,texStorage2D:Re,texStorage3D:Xe,texSubImage2D:ce,texSubImage3D:_e,compressedTexSubImage2D:ue,compressedTexSubImage3D:Be,scissor:De,viewport:Ye,reset:tt}}function Xb(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ae,f=new WeakMap;let h;const m=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,S){return x?new OffscreenCanvas(R,S):ea("canvas")}function E(R,S,K){let ce=1;const _e=ye(R);if((_e.width>K||_e.height>K)&&(ce=K/Math.max(_e.width,_e.height)),ce<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ue=Math.floor(ce*_e.width),Be=Math.floor(ce*_e.height);h===void 0&&(h=y(ue,Be));const Re=S?y(ue,Be):h;return Re.width=ue,Re.height=Be,Re.getContext("2d").drawImage(R,0,0,ue,Be),at("WebGLRenderer: Texture has been resized from ("+_e.width+"x"+_e.height+") to ("+ue+"x"+Be+")."),Re}else return"data"in R&&at("WebGLRenderer: Image in DataTexture is too big ("+_e.width+"x"+_e.height+")."),R;return R}function _(R){return R.generateMipmaps}function p(R){n.generateMipmap(R)}function L(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(R,S,K,ce,_e=!1){if(R!==null){if(n[R]!==void 0)return n[R];at("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ue=S;if(S===n.RED&&(K===n.FLOAT&&(ue=n.R32F),K===n.HALF_FLOAT&&(ue=n.R16F),K===n.UNSIGNED_BYTE&&(ue=n.R8)),S===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(ue=n.R8UI),K===n.UNSIGNED_SHORT&&(ue=n.R16UI),K===n.UNSIGNED_INT&&(ue=n.R32UI),K===n.BYTE&&(ue=n.R8I),K===n.SHORT&&(ue=n.R16I),K===n.INT&&(ue=n.R32I)),S===n.RG&&(K===n.FLOAT&&(ue=n.RG32F),K===n.HALF_FLOAT&&(ue=n.RG16F),K===n.UNSIGNED_BYTE&&(ue=n.RG8)),S===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(ue=n.RG8UI),K===n.UNSIGNED_SHORT&&(ue=n.RG16UI),K===n.UNSIGNED_INT&&(ue=n.RG32UI),K===n.BYTE&&(ue=n.RG8I),K===n.SHORT&&(ue=n.RG16I),K===n.INT&&(ue=n.RG32I)),S===n.RGB_INTEGER&&(K===n.UNSIGNED_BYTE&&(ue=n.RGB8UI),K===n.UNSIGNED_SHORT&&(ue=n.RGB16UI),K===n.UNSIGNED_INT&&(ue=n.RGB32UI),K===n.BYTE&&(ue=n.RGB8I),K===n.SHORT&&(ue=n.RGB16I),K===n.INT&&(ue=n.RGB32I)),S===n.RGBA_INTEGER&&(K===n.UNSIGNED_BYTE&&(ue=n.RGBA8UI),K===n.UNSIGNED_SHORT&&(ue=n.RGBA16UI),K===n.UNSIGNED_INT&&(ue=n.RGBA32UI),K===n.BYTE&&(ue=n.RGBA8I),K===n.SHORT&&(ue=n.RGBA16I),K===n.INT&&(ue=n.RGBA32I)),S===n.RGB&&(K===n.UNSIGNED_INT_5_9_9_9_REV&&(ue=n.RGB9_E5),K===n.UNSIGNED_INT_10F_11F_11F_REV&&(ue=n.R11F_G11F_B10F)),S===n.RGBA){const Be=_e?Zo:vt.getTransfer(ce);K===n.FLOAT&&(ue=n.RGBA32F),K===n.HALF_FLOAT&&(ue=n.RGBA16F),K===n.UNSIGNED_BYTE&&(ue=Be===Tt?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT_4_4_4_4&&(ue=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(ue=n.RGB5_A1)}return(ue===n.R16F||ue===n.R32F||ue===n.RG16F||ue===n.RG32F||ue===n.RGBA16F||ue===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ue}function M(R,S){let K;return R?S===null||S===mr||S===Gs?K=n.DEPTH24_STENCIL8:S===yi?K=n.DEPTH32F_STENCIL8:S===ks&&(K=n.DEPTH24_STENCIL8,at("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===mr||S===Gs?K=n.DEPTH_COMPONENT24:S===yi?K=n.DEPTH_COMPONENT32F:S===ks&&(K=n.DEPTH_COMPONENT16),K}function z(R,S){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==wn&&R.minFilter!==In?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function N(R){const S=R.target;S.removeEventListener("dispose",N),j(S),S.isVideoTexture&&f.delete(S)}function V(R){const S=R.target;S.removeEventListener("dispose",V),C(S)}function j(R){const S=i.get(R);if(S.__webglInit===void 0)return;const K=R.source,ce=m.get(K);if(ce){const _e=ce[S.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&D(R),Object.keys(ce).length===0&&m.delete(K)}i.remove(R)}function D(R){const S=i.get(R);n.deleteTexture(S.__webglTexture);const K=R.source,ce=m.get(K);delete ce[S.__cacheKey],o.memory.textures--}function C(R){const S=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(S.__webglFramebuffer[ce]))for(let _e=0;_e<S.__webglFramebuffer[ce].length;_e++)n.deleteFramebuffer(S.__webglFramebuffer[ce][_e]);else n.deleteFramebuffer(S.__webglFramebuffer[ce]);S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer[ce])}else{if(Array.isArray(S.__webglFramebuffer))for(let ce=0;ce<S.__webglFramebuffer.length;ce++)n.deleteFramebuffer(S.__webglFramebuffer[ce]);else n.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&n.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&n.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ce=0;ce<S.__webglColorRenderbuffer.length;ce++)S.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(S.__webglColorRenderbuffer[ce]);S.__webglDepthRenderbuffer&&n.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const K=R.textures;for(let ce=0,_e=K.length;ce<_e;ce++){const ue=i.get(K[ce]);ue.__webglTexture&&(n.deleteTexture(ue.__webglTexture),o.memory.textures--),i.remove(K[ce])}i.remove(R)}let q=0;function ee(){q=0}function fe(){const R=q;return R>=r.maxTextures&&at("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),q+=1,R}function pe(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function de(R,S){const K=i.get(R);if(R.isVideoTexture&&Q(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&K.__version!==R.version){const ce=R.image;if(ce===null)at("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)at("WebGLRenderer: Texture marked for update but image is incomplete");else{P(K,R,S);return}}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+S)}function he(R,S){const K=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){P(K,R,S);return}else R.isExternalTexture&&(K.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+S)}function ae(R,S){const K=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&K.__version!==R.version){P(K,R,S);return}t.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+S)}function Y(R,S){const K=i.get(R);if(R.version>0&&K.__version!==R.version){w(K,R,S);return}t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+S)}const Se={[Vl]:n.REPEAT,[vi]:n.CLAMP_TO_EDGE,[Hl]:n.MIRRORED_REPEAT},Ee={[wn]:n.NEAREST,[Ux]:n.NEAREST_MIPMAP_NEAREST,[fo]:n.NEAREST_MIPMAP_LINEAR,[In]:n.LINEAR,[Fa]:n.LINEAR_MIPMAP_NEAREST,[hr]:n.LINEAR_MIPMAP_LINEAR},Ue={[Bx]:n.NEVER,[Wx]:n.ALWAYS,[zx]:n.LESS,[Rd]:n.LEQUAL,[Vx]:n.EQUAL,[Gx]:n.GEQUAL,[Hx]:n.GREATER,[kx]:n.NOTEQUAL};function we(R,S){if(S.type===yi&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===In||S.magFilter===Fa||S.magFilter===fo||S.magFilter===hr||S.minFilter===In||S.minFilter===Fa||S.minFilter===fo||S.minFilter===hr)&&at("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Se[S.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Se[S.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Se[S.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Ee[S.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Ee[S.minFilter]),S.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,Ue[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===wn||S.minFilter!==fo&&S.minFilter!==hr||S.type===yi&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");n.texParameterf(R,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function Ce(R,S){let K=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",N));const ce=S.source;let _e=m.get(ce);_e===void 0&&(_e={},m.set(ce,_e));const ue=pe(S);if(ue!==R.__cacheKey){_e[ue]===void 0&&(_e[ue]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,K=!0),_e[ue].usedTimes++;const Be=_e[R.__cacheKey];Be!==void 0&&(_e[R.__cacheKey].usedTimes--,Be.usedTimes===0&&D(S)),R.__cacheKey=ue,R.__webglTexture=_e[ue].texture}return K}function ne(R,S,K){return Math.floor(Math.floor(R/K)/S)}function $(R,S,K,ce){const ue=R.updateRanges;if(ue.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,S.width,S.height,K,ce,S.data);else{ue.sort((Me,De)=>Me.start-De.start);let Be=0;for(let Me=1;Me<ue.length;Me++){const De=ue[Be],Ye=ue[Me],Ke=De.start+De.count,Ge=ne(Ye.start,S.width,4),tt=ne(De.start,S.width,4);Ye.start<=Ke+1&&Ge===tt&&ne(Ye.start+Ye.count-1,S.width,4)===Ge?De.count=Math.max(De.count,Ye.start+Ye.count-De.start):(++Be,ue[Be]=Ye)}ue.length=Be+1;const Re=n.getParameter(n.UNPACK_ROW_LENGTH),Xe=n.getParameter(n.UNPACK_SKIP_PIXELS),He=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,S.width);for(let Me=0,De=ue.length;Me<De;Me++){const Ye=ue[Me],Ke=Math.floor(Ye.start/4),Ge=Math.ceil(Ye.count/4),tt=Ke%S.width,J=Math.floor(Ke/S.width),ze=Ge,Ne=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,tt),n.pixelStorei(n.UNPACK_SKIP_ROWS,J),t.texSubImage2D(n.TEXTURE_2D,0,tt,J,ze,Ne,K,ce,S.data)}R.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,Re),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Xe),n.pixelStorei(n.UNPACK_SKIP_ROWS,He)}}function P(R,S,K){let ce=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ce=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ce=n.TEXTURE_3D);const _e=Ce(R,S),ue=S.source;t.bindTexture(ce,R.__webglTexture,n.TEXTURE0+K);const Be=i.get(ue);if(ue.version!==Be.__version||_e===!0){t.activeTexture(n.TEXTURE0+K);const Re=vt.getPrimaries(vt.workingColorSpace),Xe=S.colorSpace===ki?null:vt.getPrimaries(S.colorSpace),He=S.colorSpace===ki||Re===Xe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let Me=E(S.image,!1,r.maxTextureSize);Me=Z(S,Me);const De=s.convert(S.format,S.colorSpace),Ye=s.convert(S.type);let Ke=b(S.internalFormat,De,Ye,S.colorSpace,S.isVideoTexture);we(ce,S);let Ge;const tt=S.mipmaps,J=S.isVideoTexture!==!0,ze=Be.__version===void 0||_e===!0,Ne=ue.dataReady,Fe=z(S,Me);if(S.isDepthTexture)Ke=M(S.format===Xs,S.type),ze&&(J?t.texStorage2D(n.TEXTURE_2D,1,Ke,Me.width,Me.height):t.texImage2D(n.TEXTURE_2D,0,Ke,Me.width,Me.height,0,De,Ye,null));else if(S.isDataTexture)if(tt.length>0){J&&ze&&t.texStorage2D(n.TEXTURE_2D,Fe,Ke,tt[0].width,tt[0].height);for(let Le=0,Te=tt.length;Le<Te;Le++)Ge=tt[Le],J?Ne&&t.texSubImage2D(n.TEXTURE_2D,Le,0,0,Ge.width,Ge.height,De,Ye,Ge.data):t.texImage2D(n.TEXTURE_2D,Le,Ke,Ge.width,Ge.height,0,De,Ye,Ge.data);S.generateMipmaps=!1}else J?(ze&&t.texStorage2D(n.TEXTURE_2D,Fe,Ke,Me.width,Me.height),Ne&&$(S,Me,De,Ye)):t.texImage2D(n.TEXTURE_2D,0,Ke,Me.width,Me.height,0,De,Ye,Me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){J&&ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,Ke,tt[0].width,tt[0].height,Me.depth);for(let Le=0,Te=tt.length;Le<Te;Le++)if(Ge=tt[Le],S.format!==Hn)if(De!==null)if(J){if(Ne)if(S.layerUpdates.size>0){const je=Of(Ge.width,Ge.height,S.format,S.type);for(const it of S.layerUpdates){const Mt=Ge.data.subarray(it*je/Ge.data.BYTES_PER_ELEMENT,(it+1)*je/Ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Le,0,0,it,Ge.width,Ge.height,1,De,Mt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Le,0,0,0,Ge.width,Ge.height,Me.depth,De,Ge.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Le,Ke,Ge.width,Ge.height,Me.depth,0,Ge.data,0,0);else at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else J?Ne&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,Le,0,0,0,Ge.width,Ge.height,Me.depth,De,Ye,Ge.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Le,Ke,Ge.width,Ge.height,Me.depth,0,De,Ye,Ge.data)}else{J&&ze&&t.texStorage2D(n.TEXTURE_2D,Fe,Ke,tt[0].width,tt[0].height);for(let Le=0,Te=tt.length;Le<Te;Le++)Ge=tt[Le],S.format!==Hn?De!==null?J?Ne&&t.compressedTexSubImage2D(n.TEXTURE_2D,Le,0,0,Ge.width,Ge.height,De,Ge.data):t.compressedTexImage2D(n.TEXTURE_2D,Le,Ke,Ge.width,Ge.height,0,Ge.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):J?Ne&&t.texSubImage2D(n.TEXTURE_2D,Le,0,0,Ge.width,Ge.height,De,Ye,Ge.data):t.texImage2D(n.TEXTURE_2D,Le,Ke,Ge.width,Ge.height,0,De,Ye,Ge.data)}else if(S.isDataArrayTexture)if(J){if(ze&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Fe,Ke,Me.width,Me.height,Me.depth),Ne)if(S.layerUpdates.size>0){const Le=Of(Me.width,Me.height,S.format,S.type);for(const Te of S.layerUpdates){const je=Me.data.subarray(Te*Le/Me.data.BYTES_PER_ELEMENT,(Te+1)*Le/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Te,Me.width,Me.height,1,De,Ye,je)}S.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,De,Ye,Me.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ke,Me.width,Me.height,Me.depth,0,De,Ye,Me.data);else if(S.isData3DTexture)J?(ze&&t.texStorage3D(n.TEXTURE_3D,Fe,Ke,Me.width,Me.height,Me.depth),Ne&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,De,Ye,Me.data)):t.texImage3D(n.TEXTURE_3D,0,Ke,Me.width,Me.height,Me.depth,0,De,Ye,Me.data);else if(S.isFramebufferTexture){if(ze)if(J)t.texStorage2D(n.TEXTURE_2D,Fe,Ke,Me.width,Me.height);else{let Le=Me.width,Te=Me.height;for(let je=0;je<Fe;je++)t.texImage2D(n.TEXTURE_2D,je,Ke,Le,Te,0,De,Ye,null),Le>>=1,Te>>=1}}else if(tt.length>0){if(J&&ze){const Le=ye(tt[0]);t.texStorage2D(n.TEXTURE_2D,Fe,Ke,Le.width,Le.height)}for(let Le=0,Te=tt.length;Le<Te;Le++)Ge=tt[Le],J?Ne&&t.texSubImage2D(n.TEXTURE_2D,Le,0,0,De,Ye,Ge):t.texImage2D(n.TEXTURE_2D,Le,Ke,De,Ye,Ge);S.generateMipmaps=!1}else if(J){if(ze){const Le=ye(Me);t.texStorage2D(n.TEXTURE_2D,Fe,Ke,Le.width,Le.height)}Ne&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,De,Ye,Me)}else t.texImage2D(n.TEXTURE_2D,0,Ke,De,Ye,Me);_(S)&&p(ce),Be.__version=ue.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function w(R,S,K){if(S.image.length!==6)return;const ce=Ce(R,S),_e=S.source;t.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+K);const ue=i.get(_e);if(_e.version!==ue.__version||ce===!0){t.activeTexture(n.TEXTURE0+K);const Be=vt.getPrimaries(vt.workingColorSpace),Re=S.colorSpace===ki?null:vt.getPrimaries(S.colorSpace),Xe=S.colorSpace===ki||Be===Re?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);const He=S.isCompressedTexture||S.image[0].isCompressedTexture,Me=S.image[0]&&S.image[0].isDataTexture,De=[];for(let Te=0;Te<6;Te++)!He&&!Me?De[Te]=E(S.image[Te],!0,r.maxCubemapSize):De[Te]=Me?S.image[Te].image:S.image[Te],De[Te]=Z(S,De[Te]);const Ye=De[0],Ke=s.convert(S.format,S.colorSpace),Ge=s.convert(S.type),tt=b(S.internalFormat,Ke,Ge,S.colorSpace),J=S.isVideoTexture!==!0,ze=ue.__version===void 0||ce===!0,Ne=_e.dataReady;let Fe=z(S,Ye);we(n.TEXTURE_CUBE_MAP,S);let Le;if(He){J&&ze&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,tt,Ye.width,Ye.height);for(let Te=0;Te<6;Te++){Le=De[Te].mipmaps;for(let je=0;je<Le.length;je++){const it=Le[je];S.format!==Hn?Ke!==null?J?Ne&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je,0,0,it.width,it.height,Ke,it.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je,tt,it.width,it.height,0,it.data):at("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):J?Ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je,0,0,it.width,it.height,Ke,Ge,it.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je,tt,it.width,it.height,0,Ke,Ge,it.data)}}}else{if(Le=S.mipmaps,J&&ze){Le.length>0&&Fe++;const Te=ye(De[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Fe,tt,Te.width,Te.height)}for(let Te=0;Te<6;Te++)if(Me){J?Ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,De[Te].width,De[Te].height,Ke,Ge,De[Te].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,tt,De[Te].width,De[Te].height,0,Ke,Ge,De[Te].data);for(let je=0;je<Le.length;je++){const Mt=Le[je].image[Te].image;J?Ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je+1,0,0,Mt.width,Mt.height,Ke,Ge,Mt.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je+1,tt,Mt.width,Mt.height,0,Ke,Ge,Mt.data)}}else{J?Ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Ke,Ge,De[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,tt,Ke,Ge,De[Te]);for(let je=0;je<Le.length;je++){const it=Le[je];J?Ne&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je+1,0,0,Ke,Ge,it.image[Te]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Te,je+1,tt,Ke,Ge,it.image[Te])}}}_(S)&&p(n.TEXTURE_CUBE_MAP),ue.__version=_e.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function se(R,S,K,ce,_e,ue){const Be=s.convert(K.format,K.colorSpace),Re=s.convert(K.type),Xe=b(K.internalFormat,Be,Re,K.colorSpace),He=i.get(S),Me=i.get(K);if(Me.__renderTarget=S,!He.__hasExternalTextures){const De=Math.max(1,S.width>>ue),Ye=Math.max(1,S.height>>ue);_e===n.TEXTURE_3D||_e===n.TEXTURE_2D_ARRAY?t.texImage3D(_e,ue,Xe,De,Ye,S.depth,0,Be,Re,null):t.texImage2D(_e,ue,Xe,De,Ye,0,Be,Re,null)}t.bindFramebuffer(n.FRAMEBUFFER,R),A(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,_e,Me.__webglTexture,0,O(S)):(_e===n.TEXTURE_2D||_e>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&_e<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ce,_e,Me.__webglTexture,ue),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ve(R,S,K){if(n.bindRenderbuffer(n.RENDERBUFFER,R),S.depthBuffer){const ce=S.depthTexture,_e=ce&&ce.isDepthTexture?ce.type:null,ue=M(S.stencilBuffer,_e),Be=S.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Re=O(S);A(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Re,ue,S.width,S.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,Re,ue,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ue,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Be,n.RENDERBUFFER,R)}else{const ce=S.textures;for(let _e=0;_e<ce.length;_e++){const ue=ce[_e],Be=s.convert(ue.format,ue.colorSpace),Re=s.convert(ue.type),Xe=b(ue.internalFormat,Be,Re,ue.colorSpace),He=O(S);K&&A(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,He,Xe,S.width,S.height):A(S)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,He,Xe,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,Xe,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function re(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ce=i.get(S.depthTexture);ce.__renderTarget=S,(!ce.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),de(S.depthTexture,0);const _e=ce.__webglTexture,ue=O(S);if(S.depthTexture.format===Ws)A(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_e,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,_e,0);else if(S.depthTexture.format===Xs)A(S)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_e,0,ue):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,_e,0);else throw new Error("Unknown depthTexture format")}function be(R){const S=i.get(R),K=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const ce=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ce){const _e=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ce.removeEventListener("dispose",_e)};ce.addEventListener("dispose",_e),S.__depthDisposeCallback=_e}S.__boundDepthTexture=ce}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");const ce=R.texture.mipmaps;ce&&ce.length>0?re(S.__webglFramebuffer[0],R):re(S.__webglFramebuffer,R)}else if(K){S.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[ce]),S.__webglDepthbuffer[ce]===void 0)S.__webglDepthbuffer[ce]=n.createRenderbuffer(),ve(S.__webglDepthbuffer[ce],R,!1);else{const _e=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer[ce];n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,ue)}}else{const ce=R.texture.mipmaps;if(ce&&ce.length>0?t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=n.createRenderbuffer(),ve(S.__webglDepthbuffer,R,!1);else{const _e=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ue=S.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ue),n.framebufferRenderbuffer(n.FRAMEBUFFER,_e,n.RENDERBUFFER,ue)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function F(R,S,K){const ce=i.get(R);S!==void 0&&se(ce.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&be(R)}function B(R){const S=R.texture,K=i.get(R),ce=i.get(S);R.addEventListener("dispose",V);const _e=R.textures,ue=R.isWebGLCubeRenderTarget===!0,Be=_e.length>1;if(Be||(ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture()),ce.__version=S.version,o.memory.textures++),ue){K.__webglFramebuffer=[];for(let Re=0;Re<6;Re++)if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer[Re]=[];for(let Xe=0;Xe<S.mipmaps.length;Xe++)K.__webglFramebuffer[Re][Xe]=n.createFramebuffer()}else K.__webglFramebuffer[Re]=n.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer=[];for(let Re=0;Re<S.mipmaps.length;Re++)K.__webglFramebuffer[Re]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(Be)for(let Re=0,Xe=_e.length;Re<Xe;Re++){const He=i.get(_e[Re]);He.__webglTexture===void 0&&(He.__webglTexture=n.createTexture(),o.memory.textures++)}if(R.samples>0&&A(R)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Re=0;Re<_e.length;Re++){const Xe=_e[Re];K.__webglColorRenderbuffer[Re]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[Re]);const He=s.convert(Xe.format,Xe.colorSpace),Me=s.convert(Xe.type),De=b(Xe.internalFormat,He,Me,Xe.colorSpace,R.isXRRenderTarget===!0),Ye=O(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ye,De,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Re,n.RENDERBUFFER,K.__webglColorRenderbuffer[Re])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(K.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ue){t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),we(n.TEXTURE_CUBE_MAP,S);for(let Re=0;Re<6;Re++)if(S.mipmaps&&S.mipmaps.length>0)for(let Xe=0;Xe<S.mipmaps.length;Xe++)se(K.__webglFramebuffer[Re][Xe],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,Xe);else se(K.__webglFramebuffer[Re],R,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0);_(S)&&p(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let Re=0,Xe=_e.length;Re<Xe;Re++){const He=_e[Re],Me=i.get(He);let De=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(De=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(De,Me.__webglTexture),we(De,He),se(K.__webglFramebuffer,R,He,n.COLOR_ATTACHMENT0+Re,De,0),_(He)&&p(De)}t.unbindTexture()}else{let Re=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Re=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Re,ce.__webglTexture),we(Re,S),S.mipmaps&&S.mipmaps.length>0)for(let Xe=0;Xe<S.mipmaps.length;Xe++)se(K.__webglFramebuffer[Xe],R,S,n.COLOR_ATTACHMENT0,Re,Xe);else se(K.__webglFramebuffer,R,S,n.COLOR_ATTACHMENT0,Re,0);_(S)&&p(Re),t.unbindTexture()}R.depthBuffer&&be(R)}function I(R){const S=R.textures;for(let K=0,ce=S.length;K<ce;K++){const _e=S[K];if(_(_e)){const ue=L(R),Be=i.get(_e).__webglTexture;t.bindTexture(ue,Be),p(ue),t.unbindTexture()}}}const v=[],k=[];function W(R){if(R.samples>0){if(A(R)===!1){const S=R.textures,K=R.width,ce=R.height;let _e=n.COLOR_BUFFER_BIT;const ue=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Be=i.get(R),Re=S.length>1;if(Re)for(let He=0;He<S.length;He++)t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer);const Xe=R.texture.mipmaps;Xe&&Xe.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let He=0;He<S.length;He++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(_e|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(_e|=n.STENCIL_BUFFER_BIT)),Re){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Be.__webglColorRenderbuffer[He]);const Me=i.get(S[He]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Me,0)}n.blitFramebuffer(0,0,K,ce,0,0,K,ce,_e,n.NEAREST),c===!0&&(v.length=0,k.length=0,v.push(n.COLOR_ATTACHMENT0+He),R.depthBuffer&&R.resolveDepthBuffer===!1&&(v.push(ue),k.push(ue),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,k)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,v))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),Re)for(let He=0;He<S.length;He++){t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.RENDERBUFFER,Be.__webglColorRenderbuffer[He]);const Me=i.get(S[He]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Be.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+He,n.TEXTURE_2D,Me,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const S=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[S])}}}function O(R){return Math.min(r.maxSamples,R.samples)}function A(R){const S=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Q(R){const S=o.render.frame;f.get(R)!==S&&(f.set(R,S),R.update())}function Z(R,S){const K=R.colorSpace,ce=R.format,_e=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||K!==ts&&K!==ki&&(vt.getTransfer(K)===Tt?(ce!==Hn||_e!==ei)&&at("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Vt("WebGLTextures: Unsupported texture color space:",K)),S}function ye(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=fe,this.resetTextureUnits=ee,this.setTexture2D=de,this.setTexture2DArray=he,this.setTexture3D=ae,this.setTextureCube=Y,this.rebindTextures=F,this.setupRenderTarget=B,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=se,this.useMultisampledRTT=A}function qb(n,e){function t(i,r=ki){let s;const o=vt.getTransfer(r);if(i===ei)return n.UNSIGNED_BYTE;if(i===kc)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Gc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Md)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ed)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===Sd)return n.BYTE;if(i===bd)return n.SHORT;if(i===ks)return n.UNSIGNED_SHORT;if(i===Hc)return n.INT;if(i===mr)return n.UNSIGNED_INT;if(i===yi)return n.FLOAT;if(i===rs)return n.HALF_FLOAT;if(i===Td)return n.ALPHA;if(i===Ad)return n.RGB;if(i===Hn)return n.RGBA;if(i===Ws)return n.DEPTH_COMPONENT;if(i===Xs)return n.DEPTH_STENCIL;if(i===wd)return n.RED;if(i===Wc)return n.RED_INTEGER;if(i===Xc)return n.RG;if(i===qc)return n.RG_INTEGER;if(i===jc)return n.RGBA_INTEGER;if(i===Ho||i===ko||i===Go||i===Wo)if(o===Tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ho)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Wo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ho)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ko)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Go)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Wo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kl||i===Gl||i===Wl||i===Xl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===kl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Gl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ql||i===jl||i===Yl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===ql||i===jl)return o===Tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Yl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===$l||i===Kl||i===Jl||i===Zl||i===Ql||i===ec||i===tc||i===nc||i===ic||i===rc||i===sc||i===oc||i===ac||i===lc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===$l)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Jl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Zl)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ql)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ec)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===tc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===nc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===ic)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===rc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===sc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===oc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===ac)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===lc)return o===Tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===cc||i===uc||i===fc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===cc)return o===Tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===uc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===hc||i===dc||i===pc||i===mc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===hc)return s.COMPRESSED_RED_RGTC1_EXT;if(i===dc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pc)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===mc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Gs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const jb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Yb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $b{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Hd(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new wi({vertexShader:jb,fragmentShader:Yb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ni(new da(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kb extends ss{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",c=1,u=null,f=null,h=null,m=null,x=null,y=null;const E=typeof XRWebGLBinding<"u",_=new $b,p={},L=t.getContextAttributes();let b=null,M=null;const z=[],N=[],V=new Ae;let j=null;const D=new Tn;D.viewport=new At;const C=new Tn;C.viewport=new At;const q=[D,C],ee=new p_;let fe=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let w=z[P];return w===void 0&&(w=new sl,z[P]=w),w.getTargetRaySpace()},this.getControllerGrip=function(P){let w=z[P];return w===void 0&&(w=new sl,z[P]=w),w.getGripSpace()},this.getHand=function(P){let w=z[P];return w===void 0&&(w=new sl,z[P]=w),w.getHandSpace()};function de(P){const w=N.indexOf(P.inputSource);if(w===-1)return;const se=z[w];se!==void 0&&(se.update(P.inputSource,P.frame,u||o),se.dispatchEvent({type:P.type,data:P.inputSource}))}function he(){r.removeEventListener("select",de),r.removeEventListener("selectstart",de),r.removeEventListener("selectend",de),r.removeEventListener("squeeze",de),r.removeEventListener("squeezestart",de),r.removeEventListener("squeezeend",de),r.removeEventListener("end",he),r.removeEventListener("inputsourceschange",ae);for(let P=0;P<z.length;P++){const w=N[P];w!==null&&(N[P]=null,z[P].disconnect(w))}fe=null,pe=null,_.reset();for(const P in p)delete p[P];e.setRenderTarget(b),x=null,m=null,h=null,r=null,M=null,$.stop(),i.isPresenting=!1,e.setPixelRatio(j),e.setSize(V.width,V.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){s=P,i.isPresenting===!0&&at("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,i.isPresenting===!0&&at("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(P){u=P},this.getBaseLayer=function(){return m!==null?m:x},this.getBinding=function(){return h===null&&E&&(h=new XRWebGLBinding(r,t)),h},this.getFrame=function(){return y},this.getSession=function(){return r},this.setSession=async function(P){if(r=P,r!==null){if(b=e.getRenderTarget(),r.addEventListener("select",de),r.addEventListener("selectstart",de),r.addEventListener("selectend",de),r.addEventListener("squeeze",de),r.addEventListener("squeezestart",de),r.addEventListener("squeezeend",de),r.addEventListener("end",he),r.addEventListener("inputsourceschange",ae),L.xrCompatible!==!0&&await t.makeXRCompatible(),j=e.getPixelRatio(),e.getSize(V),E&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,ve=null,re=null;L.depth&&(re=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=L.stencil?Xs:Ws,ve=L.stencil?Gs:mr);const be={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};h=this.getBinding(),m=h.createProjectionLayer(be),r.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),M=new xr(m.textureWidth,m.textureHeight,{format:Hn,type:ei,depthTexture:new Vd(m.textureWidth,m.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}else{const se={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:s};x=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),M=new xr(x.framebufferWidth,x.framebufferHeight,{format:Hn,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),u=null,o=await r.requestReferenceSpace(a),$.setContext(r),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ae(P){for(let w=0;w<P.removed.length;w++){const se=P.removed[w],ve=N.indexOf(se);ve>=0&&(N[ve]=null,z[ve].disconnect(se))}for(let w=0;w<P.added.length;w++){const se=P.added[w];let ve=N.indexOf(se);if(ve===-1){for(let be=0;be<z.length;be++)if(be>=N.length){N.push(se),ve=be;break}else if(N[be]===null){N[be]=se,ve=be;break}if(ve===-1)break}const re=z[ve];re&&re.connect(se)}}const Y=new ie,Se=new ie;function Ee(P,w,se){Y.setFromMatrixPosition(w.matrixWorld),Se.setFromMatrixPosition(se.matrixWorld);const ve=Y.distanceTo(Se),re=w.projectionMatrix.elements,be=se.projectionMatrix.elements,F=re[14]/(re[10]-1),B=re[14]/(re[10]+1),I=(re[9]+1)/re[5],v=(re[9]-1)/re[5],k=(re[8]-1)/re[0],W=(be[8]+1)/be[0],O=F*k,A=F*W,Q=ve/(-k+W),Z=Q*-k;if(w.matrixWorld.decompose(P.position,P.quaternion,P.scale),P.translateX(Z),P.translateZ(Q),P.matrixWorld.compose(P.position,P.quaternion,P.scale),P.matrixWorldInverse.copy(P.matrixWorld).invert(),re[10]===-1)P.projectionMatrix.copy(w.projectionMatrix),P.projectionMatrixInverse.copy(w.projectionMatrixInverse);else{const ye=F+Q,R=B+Q,S=O-Z,K=A+(ve-Z),ce=I*B/R*ye,_e=v*B/R*ye;P.projectionMatrix.makePerspective(S,K,ce,_e,ye,R),P.projectionMatrixInverse.copy(P.projectionMatrix).invert()}}function Ue(P,w){w===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(w.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(r===null)return;let w=P.near,se=P.far;_.texture!==null&&(_.depthNear>0&&(w=_.depthNear),_.depthFar>0&&(se=_.depthFar)),ee.near=C.near=D.near=w,ee.far=C.far=D.far=se,(fe!==ee.near||pe!==ee.far)&&(r.updateRenderState({depthNear:ee.near,depthFar:ee.far}),fe=ee.near,pe=ee.far),ee.layers.mask=P.layers.mask|6,D.layers.mask=ee.layers.mask&3,C.layers.mask=ee.layers.mask&5;const ve=P.parent,re=ee.cameras;Ue(ee,ve);for(let be=0;be<re.length;be++)Ue(re[be],ve);re.length===2?Ee(ee,D,C):ee.projectionMatrix.copy(D.projectionMatrix),we(P,ee,ve)};function we(P,w,se){se===null?P.matrix.copy(w.matrixWorld):(P.matrix.copy(se.matrixWorld),P.matrix.invert(),P.matrix.multiply(w.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(w.projectionMatrix),P.projectionMatrixInverse.copy(w.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=xc*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return ee},this.getFoveation=function(){if(!(m===null&&x===null))return c},this.setFoveation=function(P){c=P,m!==null&&(m.fixedFoveation=P),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=P)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(ee)},this.getCameraTexture=function(P){return p[P]};let Ce=null;function ne(P,w){if(f=w.getViewerPose(u||o),y=w,f!==null){const se=f.views;x!==null&&(e.setRenderTargetFramebuffer(M,x.framebuffer),e.setRenderTarget(M));let ve=!1;se.length!==ee.cameras.length&&(ee.cameras.length=0,ve=!0);for(let B=0;B<se.length;B++){const I=se[B];let v=null;if(x!==null)v=x.getViewport(I);else{const W=h.getViewSubImage(m,I);v=W.viewport,B===0&&(e.setRenderTargetTextures(M,W.colorTexture,W.depthStencilTexture),e.setRenderTarget(M))}let k=q[B];k===void 0&&(k=new Tn,k.layers.enable(B),k.viewport=new At,q[B]=k),k.matrix.fromArray(I.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(I.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(v.x,v.y,v.width,v.height),B===0&&(ee.matrix.copy(k.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale)),ve===!0&&ee.cameras.push(k)}const re=r.enabledFeatures;if(re&&re.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&E){h=i.getBinding();const B=h.getDepthInformation(se[0]);B&&B.isValid&&B.texture&&_.init(B,r.renderState)}if(re&&re.includes("camera-access")&&E){e.state.unbindTexture(),h=i.getBinding();for(let B=0;B<se.length;B++){const I=se[B].camera;if(I){let v=p[I];v||(v=new Hd,p[I]=v);const k=h.getCameraImage(I);v.sourceTexture=k}}}}for(let se=0;se<z.length;se++){const ve=N[se],re=z[se];ve!==null&&re!==void 0&&re.update(ve,w,u||o)}Ce&&Ce(P,w),w.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:w}),y=null}const $=new Jd;$.setAnimationLoop(ne),this.setAnimationLoop=function(P){Ce=P},this.dispose=function(){}}}const ar=new ti,Jb=new Bt;function Zb(n,e){function t(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function i(_,p){p.color.getRGB(_.fogColor.value,Od(n)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function r(_,p,L,b,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(_,p):p.isMeshToonMaterial?(s(_,p),h(_,p)):p.isMeshPhongMaterial?(s(_,p),f(_,p)):p.isMeshStandardMaterial?(s(_,p),m(_,p),p.isMeshPhysicalMaterial&&x(_,p,M)):p.isMeshMatcapMaterial?(s(_,p),y(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),E(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?c(_,p,L,b):p.isSpriteMaterial?u(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,t(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===xn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,t(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===xn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,t(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,t(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);const L=e.get(p),b=L.envMap,M=L.envMapRotation;b&&(_.envMap.value=b,ar.copy(M),ar.x*=-1,ar.y*=-1,ar.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ar.y*=-1,ar.z*=-1),_.envMapRotation.value.setFromMatrix4(Jb.makeRotationFromEuler(ar)),_.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function c(_,p,L,b){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*L,_.scale.value=b*.5,p.map&&(_.map.value=p.map,t(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,t(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,t(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function f(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function h(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function m(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function x(_,p,L){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===xn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=L.texture,_.transmissionSamplerSize.value.set(L.width,L.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,_.specularIntensityMapTransform))}function y(_,p){p.matcap&&(_.matcap.value=p.matcap)}function E(_,p){const L=e.get(p).light;_.referencePosition.value.setFromMatrixPosition(L.matrixWorld),_.nearDistance.value=L.shadow.camera.near,_.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function Qb(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function c(L,b){const M=b.program;i.uniformBlockBinding(L,M)}function u(L,b){let M=r[L.id];M===void 0&&(y(L),M=f(L),r[L.id]=M,L.addEventListener("dispose",_));const z=b.program;i.updateUBOMapping(L,z);const N=e.render.frame;s[L.id]!==N&&(m(L),s[L.id]=N)}function f(L){const b=h();L.__bindingPointIndex=b;const M=n.createBuffer(),z=L.__size,N=L.usage;return n.bindBuffer(n.UNIFORM_BUFFER,M),n.bufferData(n.UNIFORM_BUFFER,z,N),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,M),M}function h(){for(let L=0;L<a;L++)if(o.indexOf(L)===-1)return o.push(L),L;return Vt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(L){const b=r[L.id],M=L.uniforms,z=L.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let N=0,V=M.length;N<V;N++){const j=Array.isArray(M[N])?M[N]:[M[N]];for(let D=0,C=j.length;D<C;D++){const q=j[D];if(x(q,N,D,z)===!0){const ee=q.__offset,fe=Array.isArray(q.value)?q.value:[q.value];let pe=0;for(let de=0;de<fe.length;de++){const he=fe[de],ae=E(he);typeof he=="number"||typeof he=="boolean"?(q.__data[0]=he,n.bufferSubData(n.UNIFORM_BUFFER,ee+pe,q.__data)):he.isMatrix3?(q.__data[0]=he.elements[0],q.__data[1]=he.elements[1],q.__data[2]=he.elements[2],q.__data[3]=0,q.__data[4]=he.elements[3],q.__data[5]=he.elements[4],q.__data[6]=he.elements[5],q.__data[7]=0,q.__data[8]=he.elements[6],q.__data[9]=he.elements[7],q.__data[10]=he.elements[8],q.__data[11]=0):(he.toArray(q.__data,pe),pe+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,ee,q.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(L,b,M,z){const N=L.value,V=b+"_"+M;if(z[V]===void 0)return typeof N=="number"||typeof N=="boolean"?z[V]=N:z[V]=N.clone(),!0;{const j=z[V];if(typeof N=="number"||typeof N=="boolean"){if(j!==N)return z[V]=N,!0}else if(j.equals(N)===!1)return j.copy(N),!0}return!1}function y(L){const b=L.uniforms;let M=0;const z=16;for(let V=0,j=b.length;V<j;V++){const D=Array.isArray(b[V])?b[V]:[b[V]];for(let C=0,q=D.length;C<q;C++){const ee=D[C],fe=Array.isArray(ee.value)?ee.value:[ee.value];for(let pe=0,de=fe.length;pe<de;pe++){const he=fe[pe],ae=E(he),Y=M%z,Se=Y%ae.boundary,Ee=Y+Se;M+=Se,Ee!==0&&z-Ee<ae.storage&&(M+=z-Ee),ee.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),ee.__offset=M,M+=ae.storage}}}const N=M%z;return N>0&&(M+=z-N),L.__size=M,L.__cache={},this}function E(L){const b={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(b.boundary=4,b.storage=4):L.isVector2?(b.boundary=8,b.storage=8):L.isVector3||L.isColor?(b.boundary=16,b.storage=12):L.isVector4?(b.boundary=16,b.storage=16):L.isMatrix3?(b.boundary=48,b.storage=48):L.isMatrix4?(b.boundary=64,b.storage=64):L.isTexture?at("WebGLRenderer: Texture samplers can not be part of an uniforms group."):at("WebGLRenderer: Unsupported uniform value type.",L),b}function _(L){const b=L.target;b.removeEventListener("dispose",_);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete s[b.id]}function p(){for(const L in r)n.deleteBuffer(r[L]);o=[],r={},s={}}return{bind:c,update:u,dispose:p}}const eM=new Uint16Array([11481,15204,11534,15171,11808,15015,12385,14843,12894,14716,13396,14600,13693,14483,13976,14366,14237,14171,14405,13961,14511,13770,14605,13598,14687,13444,14760,13305,14822,13066,14876,12857,14923,12675,14963,12517,14997,12379,15025,12230,15049,12023,15070,11843,15086,11687,15100,11551,15111,11433,15120,11330,15127,11217,15132,11060,15135,10922,15138,10801,15139,10695,15139,10600,13012,14923,13020,14917,13064,14886,13176,14800,13349,14666,13513,14526,13724,14398,13960,14230,14200,14020,14383,13827,14488,13651,14583,13491,14667,13348,14740,13132,14803,12908,14856,12713,14901,12542,14938,12394,14968,12241,14992,12017,15010,11822,15024,11654,15034,11507,15041,11380,15044,11269,15044,11081,15042,10913,15037,10764,15031,10635,15023,10520,15014,10419,15003,10330,13657,14676,13658,14673,13670,14660,13698,14622,13750,14547,13834,14442,13956,14317,14112,14093,14291,13889,14407,13704,14499,13538,14586,13389,14664,13201,14733,12966,14792,12758,14842,12577,14882,12418,14915,12272,14940,12033,14959,11826,14972,11646,14980,11490,14983,11355,14983,11212,14979,11008,14971,10830,14961,10675,14950,10540,14936,10420,14923,10315,14909,10204,14894,10041,14089,14460,14090,14459,14096,14452,14112,14431,14141,14388,14186,14305,14252,14130,14341,13941,14399,13756,14467,13585,14539,13430,14610,13272,14677,13026,14737,12808,14790,12617,14833,12449,14869,12303,14896,12065,14916,11845,14929,11655,14937,11490,14939,11347,14936,11184,14930,10970,14921,10783,14912,10621,14900,10480,14885,10356,14867,10247,14848,10062,14827,9894,14805,9745,14400,14208,14400,14206,14402,14198,14406,14174,14415,14122,14427,14035,14444,13913,14469,13767,14504,13613,14548,13463,14598,13324,14651,13082,14704,12858,14752,12658,14795,12483,14831,12330,14860,12106,14881,11875,14895,11675,14903,11501,14905,11351,14903,11178,14900,10953,14892,10757,14880,10589,14865,10442,14847,10313,14827,10162,14805,9965,14782,9792,14757,9642,14731,9507,14562,13883,14562,13883,14563,13877,14566,13862,14570,13830,14576,13773,14584,13689,14595,13582,14613,13461,14637,13336,14668,13120,14704,12897,14741,12695,14776,12516,14808,12358,14835,12150,14856,11910,14870,11701,14878,11519,14882,11361,14884,11187,14880,10951,14871,10748,14858,10572,14842,10418,14823,10286,14801,10099,14777,9897,14751,9722,14725,9567,14696,9430,14666,9309,14702,13604,14702,13604,14702,13600,14703,13591,14705,13570,14707,13533,14709,13477,14712,13400,14718,13305,14727,13106,14743,12907,14762,12716,14784,12539,14807,12380,14827,12190,14844,11943,14855,11727,14863,11539,14870,11376,14871,11204,14868,10960,14858,10748,14845,10565,14829,10406,14809,10269,14786,10058,14761,9852,14734,9671,14705,9512,14674,9374,14641,9253,14608,9076,14821,13366,14821,13365,14821,13364,14821,13358,14821,13344,14821,13320,14819,13252,14817,13145,14815,13011,14814,12858,14817,12698,14823,12539,14832,12389,14841,12214,14850,11968,14856,11750,14861,11558,14866,11390,14867,11226,14862,10972,14853,10754,14840,10565,14823,10401,14803,10259,14780,10032,14754,9820,14725,9635,14694,9473,14661,9333,14627,9203,14593,8988,14557,8798,14923,13014,14922,13014,14922,13012,14922,13004,14920,12987,14919,12957,14915,12907,14909,12834,14902,12738,14894,12623,14888,12498,14883,12370,14880,12203,14878,11970,14875,11759,14873,11569,14874,11401,14872,11243,14865,10986,14855,10762,14842,10568,14825,10401,14804,10255,14781,10017,14754,9799,14725,9611,14692,9445,14658,9301,14623,9139,14587,8920,14548,8729,14509,8562,15008,12672,15008,12672,15008,12671,15007,12667,15005,12656,15001,12637,14997,12605,14989,12556,14978,12490,14966,12407,14953,12313,14940,12136,14927,11934,14914,11742,14903,11563,14896,11401,14889,11247,14879,10992,14866,10767,14851,10570,14833,10400,14812,10252,14789,10007,14761,9784,14731,9592,14698,9424,14663,9279,14627,9088,14588,8868,14548,8676,14508,8508,14467,8360,15080,12386,15080,12386,15079,12385,15078,12383,15076,12378,15072,12367,15066,12347,15057,12315,15045,12253,15030,12138,15012,11998,14993,11845,14972,11685,14951,11530,14935,11383,14920,11228,14904,10981,14887,10762,14870,10567,14850,10397,14827,10248,14803,9997,14774,9771,14743,9578,14710,9407,14674,9259,14637,9048,14596,8826,14555,8632,14514,8464,14471,8317,14427,8182,15139,12008,15139,12008,15138,12008,15137,12007,15135,12003,15130,11990,15124,11969,15115,11929,15102,11872,15086,11794,15064,11693,15041,11581,15013,11459,14987,11336,14966,11170,14944,10944,14921,10738,14898,10552,14875,10387,14850,10239,14824,9983,14794,9758,14762,9563,14728,9392,14692,9244,14653,9014,14611,8791,14569,8597,14526,8427,14481,8281,14436,8110,14391,7885,15188,11617,15188,11617,15187,11617,15186,11618,15183,11617,15179,11612,15173,11601,15163,11581,15150,11546,15133,11495,15110,11427,15083,11346,15051,11246,15024,11057,14996,10868,14967,10687,14938,10517,14911,10362,14882,10206,14853,9956,14821,9737,14787,9543,14752,9375,14715,9228,14675,8980,14632,8760,14589,8565,14544,8395,14498,8248,14451,8049,14404,7824,14357,7630,15228,11298,15228,11298,15227,11299,15226,11301,15223,11303,15219,11302,15213,11299,15204,11290,15191,11271,15174,11217,15150,11129,15119,11015,15087,10886,15057,10744,15024,10599,14990,10455,14957,10318,14924,10143,14891,9911,14856,9701,14820,9516,14782,9352,14744,9200,14703,8946,14659,8725,14615,8533,14568,8366,14521,8220,14472,7992,14423,7770,14374,7578,14315,7408,15260,10819,15260,10819,15259,10822,15258,10826,15256,10832,15251,10836,15246,10841,15237,10838,15225,10821,15207,10788,15183,10734,15151,10660,15120,10571,15087,10469,15049,10359,15012,10249,14974,10041,14937,9837,14900,9647,14860,9475,14820,9320,14779,9147,14736,8902,14691,8688,14646,8499,14598,8335,14549,8189,14499,7940,14448,7720,14397,7529,14347,7363,14256,7218,15285,10410,15285,10411,15285,10413,15284,10418,15282,10425,15278,10434,15272,10442,15264,10449,15252,10445,15235,10433,15210,10403,15179,10358,15149,10301,15113,10218,15073,10059,15033,9894,14991,9726,14951,9565,14909,9413,14865,9273,14822,9073,14777,8845,14730,8641,14682,8459,14633,8300,14583,8129,14531,7883,14479,7670,14426,7482,14373,7321,14305,7176,14201,6939,15305,9939,15305,9940,15305,9945,15304,9955,15302,9967,15298,9989,15293,10010,15286,10033,15274,10044,15258,10045,15233,10022,15205,9975,15174,9903,15136,9808,15095,9697,15053,9578,15009,9451,14965,9327,14918,9198,14871,8973,14825,8766,14775,8579,14725,8408,14675,8259,14622,8058,14569,7821,14515,7615,14460,7435,14405,7276,14350,7108,14256,6866,14149,6653,15321,9444,15321,9445,15321,9448,15320,9458,15317,9470,15314,9490,15310,9515,15302,9540,15292,9562,15276,9579,15251,9577,15226,9559,15195,9519,15156,9463,15116,9389,15071,9304,15025,9208,14978,9023,14927,8838,14878,8661,14827,8496,14774,8344,14722,8206,14667,7973,14612,7749,14556,7555,14499,7382,14443,7229,14385,7025,14322,6791,14210,6588,14100,6409,15333,8920,15333,8921,15332,8927,15332,8943,15329,8965,15326,9002,15322,9048,15316,9106,15307,9162,15291,9204,15267,9221,15244,9221,15212,9196,15175,9134,15133,9043,15088,8930,15040,8801,14990,8665,14938,8526,14886,8391,14830,8261,14775,8087,14719,7866,14661,7664,14603,7482,14544,7322,14485,7178,14426,6936,14367,6713,14281,6517,14166,6348,14054,6198,15341,8360,15341,8361,15341,8366,15341,8379,15339,8399,15336,8431,15332,8473,15326,8527,15318,8585,15302,8632,15281,8670,15258,8690,15227,8690,15191,8664,15149,8612,15104,8543,15055,8456,15001,8360,14948,8259,14892,8122,14834,7923,14776,7734,14716,7558,14656,7397,14595,7250,14534,7070,14472,6835,14410,6628,14350,6443,14243,6283,14125,6135,14010,5889,15348,7715,15348,7717,15348,7725,15347,7745,15345,7780,15343,7836,15339,7905,15334,8e3,15326,8103,15310,8193,15293,8239,15270,8270,15240,8287,15204,8283,15163,8260,15118,8223,15067,8143,15014,8014,14958,7873,14899,7723,14839,7573,14778,7430,14715,7293,14652,7164,14588,6931,14524,6720,14460,6531,14396,6362,14330,6210,14207,6015,14086,5781,13969,5576,15352,7114,15352,7116,15352,7128,15352,7159,15350,7195,15348,7237,15345,7299,15340,7374,15332,7457,15317,7544,15301,7633,15280,7703,15251,7754,15216,7775,15176,7767,15131,7733,15079,7670,15026,7588,14967,7492,14906,7387,14844,7278,14779,7171,14714,6965,14648,6770,14581,6587,14515,6420,14448,6269,14382,6123,14299,5881,14172,5665,14049,5477,13929,5310,15355,6329,15355,6330,15355,6339,15355,6362,15353,6410,15351,6472,15349,6572,15344,6688,15337,6835,15323,6985,15309,7142,15287,7220,15260,7277,15226,7310,15188,7326,15142,7318,15090,7285,15036,7239,14976,7177,14914,7045,14849,6892,14782,6736,14714,6581,14645,6433,14576,6293,14506,6164,14438,5946,14369,5733,14270,5540,14140,5369,14014,5216,13892,5043,15357,5483,15357,5484,15357,5496,15357,5528,15356,5597,15354,5692,15351,5835,15347,6011,15339,6195,15328,6317,15314,6446,15293,6566,15268,6668,15235,6746,15197,6796,15152,6811,15101,6790,15046,6748,14985,6673,14921,6583,14854,6479,14785,6371,14714,6259,14643,6149,14571,5946,14499,5750,14428,5567,14358,5401,14242,5250,14109,5111,13980,4870,13856,4657,15359,4555,15359,4557,15358,4573,15358,4633,15357,4715,15355,4841,15353,5061,15349,5216,15342,5391,15331,5577,15318,5770,15299,5967,15274,6150,15243,6223,15206,6280,15161,6310,15111,6317,15055,6300,14994,6262,14928,6208,14860,6141,14788,5994,14715,5838,14641,5684,14566,5529,14492,5384,14418,5247,14346,5121,14216,4892,14079,4682,13948,4496,13822,4330,15359,3498,15359,3501,15359,3520,15359,3598,15358,3719,15356,3860,15355,4137,15351,4305,15344,4563,15334,4809,15321,5116,15303,5273,15280,5418,15250,5547,15214,5653,15170,5722,15120,5761,15064,5763,15002,5733,14935,5673,14865,5597,14792,5504,14716,5400,14640,5294,14563,5185,14486,5041,14410,4841,14335,4655,14191,4482,14051,4325,13918,4183,13790,4012,15360,2282,15360,2285,15360,2306,15360,2401,15359,2547,15357,2748,15355,3103,15352,3349,15345,3675,15336,4020,15324,4272,15307,4496,15285,4716,15255,4908,15220,5086,15178,5170,15128,5214,15072,5234,15010,5231,14943,5206,14871,5166,14796,5102,14718,4971,14639,4833,14559,4687,14480,4541,14402,4401,14315,4268,14167,4142,14025,3958,13888,3747,13759,3556,15360,923,15360,925,15360,946,15360,1052,15359,1214,15357,1494,15356,1892,15352,2274,15346,2663,15338,3099,15326,3393,15309,3679,15288,3980,15260,4183,15226,4325,15185,4437,15136,4517,15080,4570,15018,4591,14950,4581,14877,4545,14800,4485,14720,4411,14638,4325,14556,4231,14475,4136,14395,3988,14297,3803,14145,3628,13999,3465,13861,3314,13729,3177,15360,263,15360,264,15360,272,15360,325,15359,407,15358,548,15356,780,15352,1144,15347,1580,15339,2099,15328,2425,15312,2795,15292,3133,15264,3329,15232,3517,15191,3689,15143,3819,15088,3923,15025,3978,14956,3999,14882,3979,14804,3931,14722,3855,14639,3756,14554,3645,14470,3529,14388,3409,14279,3289,14124,3173,13975,3055,13834,2848,13701,2658,15360,49,15360,49,15360,52,15360,75,15359,111,15358,201,15356,283,15353,519,15348,726,15340,1045,15329,1415,15314,1795,15295,2173,15269,2410,15237,2649,15197,2866,15150,3054,15095,3140,15032,3196,14963,3228,14888,3236,14808,3224,14725,3191,14639,3146,14553,3088,14466,2976,14382,2836,14262,2692,14103,2549,13952,2409,13808,2278,13674,2154,15360,4,15360,4,15360,4,15360,13,15359,33,15358,59,15357,112,15353,199,15348,302,15341,456,15331,628,15316,827,15297,1082,15272,1332,15241,1601,15202,1851,15156,2069,15101,2172,15039,2256,14970,2314,14894,2348,14813,2358,14728,2344,14640,2311,14551,2263,14463,2203,14376,2133,14247,2059,14084,1915,13930,1761,13784,1609,13648,1464,15360,0,15360,0,15360,0,15360,3,15359,18,15358,26,15357,53,15354,80,15348,97,15341,165,15332,238,15318,326,15299,427,15275,529,15245,654,15207,771,15161,885,15108,994,15046,1089,14976,1170,14900,1229,14817,1266,14731,1284,14641,1282,14550,1260,14460,1223,14370,1174,14232,1116,14066,1050,13909,981,13761,910,13623,839]);let di=null;function tM(){return di===null&&(di=new yg(eM,32,32,Xc,rs),di.minFilter=In,di.magFilter=In,di.wrapS=vi,di.wrapT=vi,di.generateMipmaps=!1,di.needsUpdate=!0),di}class nM{constructor(e={}){const{canvas:t=Xx(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:m=!1}=e;this.isWebGLRenderer=!0;let x;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=i.getContextAttributes().alpha}else x=o;const y=new Set([jc,qc,Wc]),E=new Set([ei,mr,ks,Gs,kc,Gc]),_=new Uint32Array(4),p=new Int32Array(4);let L=null,b=null;const M=[],z=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=qi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const N=this;let V=!1;this._outputColorSpace=En;let j=0,D=0,C=null,q=-1,ee=null;const fe=new At,pe=new At;let de=null;const he=new xt(0);let ae=0,Y=t.width,Se=t.height,Ee=1,Ue=null,we=null;const Ce=new At(0,0,Y,Se),ne=new At(0,0,Y,Se);let $=!1;const P=new Kc;let w=!1,se=!1;const ve=new Bt,re=new ie,be=new At,F={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let B=!1;function I(){return C===null?Ee:1}let v=i;function k(U,oe){return t.getContext(U,oe)}try{const U={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vc}`),t.addEventListener("webglcontextlost",Le,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",je,!1),v===null){const oe="webgl2";if(v=k(oe,U),v===null)throw k(oe)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(U){throw U("WebGLRenderer: "+U.message),U}let W,O,A,Q,Z,ye,R,S,K,ce,_e,ue,Be,Re,Xe,He,Me,De,Ye,Ke,Ge,tt,J,ze;function Ne(){W=new uS(v),W.init(),tt=new qb(v,W),O=new tS(v,W,e,tt),A=new Wb(v,W),O.reversedDepthBuffer&&m&&A.buffers.depth.setReversed(!0),Q=new dS(v),Z=new Lb,ye=new Xb(v,W,A,Z,O,tt,Q),R=new iS(N),S=new cS(N),K=new g_(v),J=new Qy(v,K),ce=new fS(v,K,Q,J),_e=new mS(v,ce,K,Q),Ye=new pS(v,O,ye),He=new nS(Z),ue=new Pb(N,R,S,W,O,J,He),Be=new Zb(N,Z),Re=new Ib,Xe=new zb(W),De=new Zy(N,R,S,A,_e,x,c),Me=new kb(N,_e,O),ze=new Qb(v,Q,O,A),Ke=new eS(v,W,Q),Ge=new hS(v,W,Q),Q.programs=ue.programs,N.capabilities=O,N.extensions=W,N.properties=Z,N.renderLists=Re,N.shadowMap=Me,N.state=A,N.info=Q}Ne();const Fe=new Kb(N,v);this.xr=Fe,this.getContext=function(){return v},this.getContextAttributes=function(){return v.getContextAttributes()},this.forceContextLoss=function(){const U=W.get("WEBGL_lose_context");U&&U.loseContext()},this.forceContextRestore=function(){const U=W.get("WEBGL_lose_context");U&&U.restoreContext()},this.getPixelRatio=function(){return Ee},this.setPixelRatio=function(U){U!==void 0&&(Ee=U,this.setSize(Y,Se,!1))},this.getSize=function(U){return U.set(Y,Se)},this.setSize=function(U,oe,xe=!0){if(Fe.isPresenting){at("WebGLRenderer: Can't change size while VR device is presenting.");return}Y=U,Se=oe,t.width=Math.floor(U*Ee),t.height=Math.floor(oe*Ee),xe===!0&&(t.style.width=U+"px",t.style.height=oe+"px"),this.setViewport(0,0,U,oe)},this.getDrawingBufferSize=function(U){return U.set(Y*Ee,Se*Ee).floor()},this.setDrawingBufferSize=function(U,oe,xe){Y=U,Se=oe,Ee=xe,t.width=Math.floor(U*xe),t.height=Math.floor(oe*xe),this.setViewport(0,0,U,oe)},this.getCurrentViewport=function(U){return U.copy(fe)},this.getViewport=function(U){return U.copy(Ce)},this.setViewport=function(U,oe,xe,ge){U.isVector4?Ce.set(U.x,U.y,U.z,U.w):Ce.set(U,oe,xe,ge),A.viewport(fe.copy(Ce).multiplyScalar(Ee).round())},this.getScissor=function(U){return U.copy(ne)},this.setScissor=function(U,oe,xe,ge){U.isVector4?ne.set(U.x,U.y,U.z,U.w):ne.set(U,oe,xe,ge),A.scissor(pe.copy(ne).multiplyScalar(Ee).round())},this.getScissorTest=function(){return $},this.setScissorTest=function(U){A.setScissorTest($=U)},this.setOpaqueSort=function(U){Ue=U},this.setTransparentSort=function(U){we=U},this.getClearColor=function(U){return U.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(U=!0,oe=!0,xe=!0){let ge=0;if(U){let le=!1;if(C!==null){const Ie=C.texture.format;le=y.has(Ie)}if(le){const Ie=C.texture.type,Oe=E.has(Ie),$e=De.getClearColor(),qe=De.getClearAlpha(),Je=$e.r,nt=$e.g,Qe=$e.b;Oe?(_[0]=Je,_[1]=nt,_[2]=Qe,_[3]=qe,v.clearBufferuiv(v.COLOR,0,_)):(p[0]=Je,p[1]=nt,p[2]=Qe,p[3]=qe,v.clearBufferiv(v.COLOR,0,p))}else ge|=v.COLOR_BUFFER_BIT}oe&&(ge|=v.DEPTH_BUFFER_BIT),xe&&(ge|=v.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),v.clear(ge)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Le,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",je,!1),De.dispose(),Re.dispose(),Xe.dispose(),Z.dispose(),R.dispose(),S.dispose(),_e.dispose(),J.dispose(),ze.dispose(),ue.dispose(),Fe.dispose(),Fe.removeEventListener("sessionstart",to),Fe.removeEventListener("sessionend",Cn),on.stop()};function Le(U){U.preventDefault(),ff("WebGLRenderer: Context Lost."),V=!0}function Te(){ff("WebGLRenderer: Context Restored."),V=!1;const U=Q.autoReset,oe=Me.enabled,xe=Me.autoUpdate,ge=Me.needsUpdate,le=Me.type;Ne(),Q.autoReset=U,Me.enabled=oe,Me.autoUpdate=xe,Me.needsUpdate=ge,Me.type=le}function je(U){Vt("WebGLRenderer: A WebGL context could not be created. Reason: ",U.statusMessage)}function it(U){const oe=U.target;oe.removeEventListener("dispose",it),Mt(oe)}function Mt(U){mt(U),Z.remove(U)}function mt(U){const oe=Z.get(U).programs;oe!==void 0&&(oe.forEach(function(xe){ue.releaseProgram(xe)}),U.isShaderMaterial&&ue.releaseShaderCache(U))}this.renderBufferDirect=function(U,oe,xe,ge,le,Ie){oe===null&&(oe=F);const Oe=le.isMesh&&le.matrixWorld.determinant()<0,$e=Zi(U,oe,xe,ge,le);A.setMaterial(ge,Oe);let qe=xe.index,Je=1;if(ge.wireframe===!0){if(qe=ce.getWireframeAttribute(xe),qe===void 0)return;Je=2}const nt=xe.drawRange,Qe=xe.attributes.position;let ft=nt.start*Je,gt=(nt.start+nt.count)*Je;Ie!==null&&(ft=Math.max(ft,Ie.start*Je),gt=Math.min(gt,(Ie.start+Ie.count)*Je)),qe!==null?(ft=Math.max(ft,0),gt=Math.min(gt,qe.count)):Qe!=null&&(ft=Math.max(ft,0),gt=Math.min(gt,Qe.count));const Ut=gt-ft;if(Ut<0||Ut===1/0)return;J.setup(le,ge,$e,xe,qe);let Nt,yt=Ke;if(qe!==null&&(Nt=K.get(qe),yt=Ge,yt.setIndex(Nt)),le.isMesh)ge.wireframe===!0?(A.setLineWidth(ge.wireframeLinewidth*I()),yt.setMode(v.LINES)):yt.setMode(v.TRIANGLES);else if(le.isLine){let et=ge.linewidth;et===void 0&&(et=1),A.setLineWidth(et*I()),le.isLineSegments?yt.setMode(v.LINES):le.isLineLoop?yt.setMode(v.LINE_LOOP):yt.setMode(v.LINE_STRIP)}else le.isPoints?yt.setMode(v.POINTS):le.isSprite&&yt.setMode(v.TRIANGLES);if(le.isBatchedMesh)if(le._multiDrawInstances!==null)qs("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),yt.renderMultiDrawInstances(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount,le._multiDrawInstances);else if(W.get("WEBGL_multi_draw"))yt.renderMultiDraw(le._multiDrawStarts,le._multiDrawCounts,le._multiDrawCount);else{const et=le._multiDrawStarts,Ct=le._multiDrawCounts,pt=le._multiDrawCount,Et=qe?K.get(qe).bytesPerElement:1,si=Z.get(ge).currentProgram.getUniforms();for(let Zt=0;Zt<pt;Zt++)si.setValue(v,"_gl_DrawID",Zt),yt.render(et[Zt]/Et,Ct[Zt])}else if(le.isInstancedMesh)yt.renderInstances(ft,Ut,le.count);else if(xe.isInstancedBufferGeometry){const et=xe._maxInstanceCount!==void 0?xe._maxInstanceCount:1/0,Ct=Math.min(xe.instanceCount,et);yt.renderInstances(ft,Ut,Ct)}else yt.render(ft,Ut)};function sn(U,oe,xe){U.transparent===!0&&U.side===_i&&U.forceSinglePass===!1?(U.side=xn,U.needsUpdate=!0,ri(U,oe,xe),U.side=$i,U.needsUpdate=!0,ri(U,oe,xe),U.side=_i):ri(U,oe,xe)}this.compile=function(U,oe,xe=null){xe===null&&(xe=U),b=Xe.get(xe),b.init(oe),z.push(b),xe.traverseVisible(function(le){le.isLight&&le.layers.test(oe.layers)&&(b.pushLight(le),le.castShadow&&b.pushShadow(le))}),U!==xe&&U.traverseVisible(function(le){le.isLight&&le.layers.test(oe.layers)&&(b.pushLight(le),le.castShadow&&b.pushShadow(le))}),b.setupLights();const ge=new Set;return U.traverse(function(le){if(!(le.isMesh||le.isPoints||le.isLine||le.isSprite))return;const Ie=le.material;if(Ie)if(Array.isArray(Ie))for(let Oe=0;Oe<Ie.length;Oe++){const $e=Ie[Oe];sn($e,xe,le),ge.add($e)}else sn(Ie,xe,le),ge.add(Ie)}),b=z.pop(),ge},this.compileAsync=function(U,oe,xe=null){const ge=this.compile(U,oe,xe);return new Promise(le=>{function Ie(){if(ge.forEach(function(Oe){Z.get(Oe).currentProgram.isReady()&&ge.delete(Oe)}),ge.size===0){le(U);return}setTimeout(Ie,10)}W.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let _n=null;function Ri(U){_n&&_n(U)}function to(){on.stop()}function Cn(){on.start()}const on=new Jd;on.setAnimationLoop(Ri),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(U){_n=U,Fe.setAnimationLoop(U),U===null?on.stop():on.start()},Fe.addEventListener("sessionstart",to),Fe.addEventListener("sessionend",Cn),this.render=function(U,oe){if(oe!==void 0&&oe.isCamera!==!0){Vt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;if(U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.parent===null&&oe.matrixWorldAutoUpdate===!0&&oe.updateMatrixWorld(),Fe.enabled===!0&&Fe.isPresenting===!0&&(Fe.cameraAutoUpdate===!0&&Fe.updateCamera(oe),oe=Fe.getCamera()),U.isScene===!0&&U.onBeforeRender(N,U,oe,C),b=Xe.get(U,z.length),b.init(oe),z.push(b),ve.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),P.setFromProjectionMatrix(ve,Kn,oe.reversedDepth),se=this.localClippingEnabled,w=He.init(this.clippingPlanes,se),L=Re.get(U,M.length),L.init(),M.push(L),Fe.enabled===!0&&Fe.isPresenting===!0){const Ie=N.xr.getDepthSensingMesh();Ie!==null&&vr(Ie,oe,-1/0,N.sortObjects)}vr(U,oe,0,N.sortObjects),L.finish(),N.sortObjects===!0&&L.sort(Ue,we),B=Fe.enabled===!1||Fe.isPresenting===!1||Fe.hasDepthSensing()===!1,B&&De.addToRenderList(L,U),this.info.render.frame++,w===!0&&He.beginShadows();const xe=b.state.shadowsArray;Me.render(xe,U,oe),w===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset();const ge=L.opaque,le=L.transmissive;if(b.setupLights(),oe.isArrayCamera){const Ie=oe.cameras;if(le.length>0)for(let Oe=0,$e=Ie.length;Oe<$e;Oe++){const qe=Ie[Oe];vn(ge,le,U,qe)}B&&De.render(U);for(let Oe=0,$e=Ie.length;Oe<$e;Oe++){const qe=Ie[Oe];It(L,U,qe,qe.viewport)}}else le.length>0&&vn(ge,le,U,oe),B&&De.render(U),It(L,U,oe);C!==null&&D===0&&(ye.updateMultisampleRenderTarget(C),ye.updateRenderTargetMipmap(C)),U.isScene===!0&&U.onAfterRender(N,U,oe),J.resetDefaultState(),q=-1,ee=null,z.pop(),z.length>0?(b=z[z.length-1],w===!0&&He.setGlobalState(N.clippingPlanes,b.state.camera)):b=null,M.pop(),M.length>0?L=M[M.length-1]:L=null};function vr(U,oe,xe,ge){if(U.visible===!1)return;if(U.layers.test(oe.layers)){if(U.isGroup)xe=U.renderOrder;else if(U.isLOD)U.autoUpdate===!0&&U.update(oe);else if(U.isLight)b.pushLight(U),U.castShadow&&b.pushShadow(U);else if(U.isSprite){if(!U.frustumCulled||P.intersectsSprite(U)){ge&&be.setFromMatrixPosition(U.matrixWorld).applyMatrix4(ve);const Oe=_e.update(U),$e=U.material;$e.visible&&L.push(U,Oe,$e,xe,be.z,null)}}else if((U.isMesh||U.isLine||U.isPoints)&&(!U.frustumCulled||P.intersectsObject(U))){const Oe=_e.update(U),$e=U.material;if(ge&&(U.boundingSphere!==void 0?(U.boundingSphere===null&&U.computeBoundingSphere(),be.copy(U.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),be.copy(Oe.boundingSphere.center)),be.applyMatrix4(U.matrixWorld).applyMatrix4(ve)),Array.isArray($e)){const qe=Oe.groups;for(let Je=0,nt=qe.length;Je<nt;Je++){const Qe=qe[Je],ft=$e[Qe.materialIndex];ft&&ft.visible&&L.push(U,Oe,ft,xe,be.z,Qe)}}else $e.visible&&L.push(U,Oe,$e,xe,be.z,null)}}const Ie=U.children;for(let Oe=0,$e=Ie.length;Oe<$e;Oe++)vr(Ie[Oe],oe,xe,ge)}function It(U,oe,xe,ge){const{opaque:le,transmissive:Ie,transparent:Oe}=U;b.setupLightsView(xe),w===!0&&He.setGlobalState(N.clippingPlanes,xe),ge&&A.viewport(fe.copy(ge)),le.length>0&&Pi(le,oe,xe),Ie.length>0&&Pi(Ie,oe,xe),Oe.length>0&&Pi(Oe,oe,xe),A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),A.setPolygonOffset(!1)}function vn(U,oe,xe,ge){if((xe.isScene===!0?xe.overrideMaterial:null)!==null)return;b.state.transmissionRenderTarget[ge.id]===void 0&&(b.state.transmissionRenderTarget[ge.id]=new xr(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float")?rs:ei,minFilter:hr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:vt.workingColorSpace}));const Ie=b.state.transmissionRenderTarget[ge.id],Oe=ge.viewport||fe;Ie.setSize(Oe.z*N.transmissionResolutionScale,Oe.w*N.transmissionResolutionScale);const $e=N.getRenderTarget(),qe=N.getActiveCubeFace(),Je=N.getActiveMipmapLevel();N.setRenderTarget(Ie),N.getClearColor(he),ae=N.getClearAlpha(),ae<1&&N.setClearColor(16777215,.5),N.clear(),B&&De.render(xe);const nt=N.toneMapping;N.toneMapping=qi;const Qe=ge.viewport;if(ge.viewport!==void 0&&(ge.viewport=void 0),b.setupLightsView(ge),w===!0&&He.setGlobalState(N.clippingPlanes,ge),Pi(U,xe,ge),ye.updateMultisampleRenderTarget(Ie),ye.updateRenderTargetMipmap(Ie),W.has("WEBGL_multisampled_render_to_texture")===!1){let ft=!1;for(let gt=0,Ut=oe.length;gt<Ut;gt++){const Nt=oe[gt],{object:yt,geometry:et,material:Ct,group:pt}=Nt;if(Ct.side===_i&&yt.layers.test(ge.layers)){const Et=Ct.side;Ct.side=xn,Ct.needsUpdate=!0,no(yt,xe,ge,et,Ct,pt),Ct.side=Et,Ct.needsUpdate=!0,ft=!0}}ft===!0&&(ye.updateMultisampleRenderTarget(Ie),ye.updateRenderTargetMipmap(Ie))}N.setRenderTarget($e,qe,Je),N.setClearColor(he,ae),Qe!==void 0&&(ge.viewport=Qe),N.toneMapping=nt}function Pi(U,oe,xe){const ge=oe.isScene===!0?oe.overrideMaterial:null;for(let le=0,Ie=U.length;le<Ie;le++){const Oe=U[le],{object:$e,geometry:qe,group:Je}=Oe;let nt=Oe.material;nt.allowOverride===!0&&ge!==null&&(nt=ge),$e.layers.test(xe.layers)&&no($e,oe,xe,qe,nt,Je)}}function no(U,oe,xe,ge,le,Ie){U.onBeforeRender(N,oe,xe,ge,le,Ie),U.modelViewMatrix.multiplyMatrices(xe.matrixWorldInverse,U.matrixWorld),U.normalMatrix.getNormalMatrix(U.modelViewMatrix),le.onBeforeRender(N,oe,xe,ge,U,Ie),le.transparent===!0&&le.side===_i&&le.forceSinglePass===!1?(le.side=xn,le.needsUpdate=!0,N.renderBufferDirect(xe,oe,ge,le,U,Ie),le.side=$i,le.needsUpdate=!0,N.renderBufferDirect(xe,oe,ge,le,U,Ie),le.side=_i):N.renderBufferDirect(xe,oe,ge,le,U,Ie),U.onAfterRender(N,oe,xe,ge,le,Ie)}function ri(U,oe,xe){oe.isScene!==!0&&(oe=F);const ge=Z.get(U),le=b.state.lights,Ie=b.state.shadowsArray,Oe=le.state.version,$e=ue.getParameters(U,le.state,Ie,oe,xe),qe=ue.getProgramCacheKey($e);let Je=ge.programs;ge.environment=U.isMeshStandardMaterial?oe.environment:null,ge.fog=oe.fog,ge.envMap=(U.isMeshStandardMaterial?S:R).get(U.envMap||ge.environment),ge.envMapRotation=ge.environment!==null&&U.envMap===null?oe.environmentRotation:U.envMapRotation,Je===void 0&&(U.addEventListener("dispose",it),Je=new Map,ge.programs=Je);let nt=Je.get(qe);if(nt!==void 0){if(ge.currentProgram===nt&&ge.lightsStateVersion===Oe)return Ji(U,$e),nt}else $e.uniforms=ue.getUniforms(U),U.onBeforeCompile($e,N),nt=ue.acquireProgram($e,qe),Je.set(qe,nt),ge.uniforms=$e.uniforms;const Qe=ge.uniforms;return(!U.isShaderMaterial&&!U.isRawShaderMaterial||U.clipping===!0)&&(Qe.clippingPlanes=He.uniform),Ji(U,$e),ge.needsLights=cs(U),ge.lightsStateVersion=Oe,ge.needsLights&&(Qe.ambientLightColor.value=le.state.ambient,Qe.lightProbe.value=le.state.probe,Qe.directionalLights.value=le.state.directional,Qe.directionalLightShadows.value=le.state.directionalShadow,Qe.spotLights.value=le.state.spot,Qe.spotLightShadows.value=le.state.spotShadow,Qe.rectAreaLights.value=le.state.rectArea,Qe.ltc_1.value=le.state.rectAreaLTC1,Qe.ltc_2.value=le.state.rectAreaLTC2,Qe.pointLights.value=le.state.point,Qe.pointLightShadows.value=le.state.pointShadow,Qe.hemisphereLights.value=le.state.hemi,Qe.directionalShadowMap.value=le.state.directionalShadowMap,Qe.directionalShadowMatrix.value=le.state.directionalShadowMatrix,Qe.spotShadowMap.value=le.state.spotShadowMap,Qe.spotLightMatrix.value=le.state.spotLightMatrix,Qe.spotLightMap.value=le.state.spotLightMap,Qe.pointShadowMap.value=le.state.pointShadowMap,Qe.pointShadowMatrix.value=le.state.pointShadowMatrix),ge.currentProgram=nt,ge.uniformsList=null,nt}function yr(U){if(U.uniformsList===null){const oe=U.currentProgram.getUniforms();U.uniformsList=Xo.seqWithValue(oe.seq,U.uniforms)}return U.uniformsList}function Ji(U,oe){const xe=Z.get(U);xe.outputColorSpace=oe.outputColorSpace,xe.batching=oe.batching,xe.batchingColor=oe.batchingColor,xe.instancing=oe.instancing,xe.instancingColor=oe.instancingColor,xe.instancingMorph=oe.instancingMorph,xe.skinning=oe.skinning,xe.morphTargets=oe.morphTargets,xe.morphNormals=oe.morphNormals,xe.morphColors=oe.morphColors,xe.morphTargetsCount=oe.morphTargetsCount,xe.numClippingPlanes=oe.numClippingPlanes,xe.numIntersection=oe.numClipIntersection,xe.vertexAlphas=oe.vertexAlphas,xe.vertexTangents=oe.vertexTangents,xe.toneMapping=oe.toneMapping}function Zi(U,oe,xe,ge,le){oe.isScene!==!0&&(oe=F),ye.resetTextureUnits();const Ie=oe.fog,Oe=ge.isMeshStandardMaterial?oe.environment:null,$e=C===null?N.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ts,qe=(ge.isMeshStandardMaterial?S:R).get(ge.envMap||Oe),Je=ge.vertexColors===!0&&!!xe.attributes.color&&xe.attributes.color.itemSize===4,nt=!!xe.attributes.tangent&&(!!ge.normalMap||ge.anisotropy>0),Qe=!!xe.morphAttributes.position,ft=!!xe.morphAttributes.normal,gt=!!xe.morphAttributes.color;let Ut=qi;ge.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ut=N.toneMapping);const Nt=xe.morphAttributes.position||xe.morphAttributes.normal||xe.morphAttributes.color,yt=Nt!==void 0?Nt.length:0,et=Z.get(ge),Ct=b.state.lights;if(w===!0&&(se===!0||U!==ee)){const Yt=U===ee&&ge.id===q;He.setState(ge,U,Yt)}let pt=!1;ge.version===et.__version?(et.needsLights&&et.lightsStateVersion!==Ct.state.version||et.outputColorSpace!==$e||le.isBatchedMesh&&et.batching===!1||!le.isBatchedMesh&&et.batching===!0||le.isBatchedMesh&&et.batchingColor===!0&&le.colorTexture===null||le.isBatchedMesh&&et.batchingColor===!1&&le.colorTexture!==null||le.isInstancedMesh&&et.instancing===!1||!le.isInstancedMesh&&et.instancing===!0||le.isSkinnedMesh&&et.skinning===!1||!le.isSkinnedMesh&&et.skinning===!0||le.isInstancedMesh&&et.instancingColor===!0&&le.instanceColor===null||le.isInstancedMesh&&et.instancingColor===!1&&le.instanceColor!==null||le.isInstancedMesh&&et.instancingMorph===!0&&le.morphTexture===null||le.isInstancedMesh&&et.instancingMorph===!1&&le.morphTexture!==null||et.envMap!==qe||ge.fog===!0&&et.fog!==Ie||et.numClippingPlanes!==void 0&&(et.numClippingPlanes!==He.numPlanes||et.numIntersection!==He.numIntersection)||et.vertexAlphas!==Je||et.vertexTangents!==nt||et.morphTargets!==Qe||et.morphNormals!==ft||et.morphColors!==gt||et.toneMapping!==Ut||et.morphTargetsCount!==yt)&&(pt=!0):(pt=!0,et.__version=ge.version);let Et=et.currentProgram;pt===!0&&(Et=ri(ge,oe,le));let si=!1,Zt=!1,Wn=!1;const Rt=Et.getUniforms(),jt=et.uniforms;if(A.useProgram(Et.program)&&(si=!0,Zt=!0,Wn=!0),ge.id!==q&&(q=ge.id,Zt=!0),si||ee!==U){A.buffers.depth.getReversed()&&U.reversedDepth!==!0&&(U._reversedDepth=!0,U.updateProjectionMatrix()),Rt.setValue(v,"projectionMatrix",U.projectionMatrix),Rt.setValue(v,"viewMatrix",U.matrixWorldInverse);const $t=Rt.map.cameraPosition;$t!==void 0&&$t.setValue(v,re.setFromMatrixPosition(U.matrixWorld)),O.logarithmicDepthBuffer&&Rt.setValue(v,"logDepthBufFC",2/(Math.log(U.far+1)/Math.LN2)),(ge.isMeshPhongMaterial||ge.isMeshToonMaterial||ge.isMeshLambertMaterial||ge.isMeshBasicMaterial||ge.isMeshStandardMaterial||ge.isShaderMaterial)&&Rt.setValue(v,"isOrthographic",U.isOrthographicCamera===!0),ee!==U&&(ee=U,Zt=!0,Wn=!0)}if(le.isSkinnedMesh){Rt.setOptional(v,le,"bindMatrix"),Rt.setOptional(v,le,"bindMatrixInverse");const Yt=le.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Rt.setValue(v,"boneTexture",Yt.boneTexture,ye))}le.isBatchedMesh&&(Rt.setOptional(v,le,"batchingTexture"),Rt.setValue(v,"batchingTexture",le._matricesTexture,ye),Rt.setOptional(v,le,"batchingIdTexture"),Rt.setValue(v,"batchingIdTexture",le._indirectTexture,ye),Rt.setOptional(v,le,"batchingColorTexture"),le._colorsTexture!==null&&Rt.setValue(v,"batchingColorTexture",le._colorsTexture,ye));const hn=xe.morphAttributes;if((hn.position!==void 0||hn.normal!==void 0||hn.color!==void 0)&&Ye.update(le,xe,Et),(Zt||et.receiveShadow!==le.receiveShadow)&&(et.receiveShadow=le.receiveShadow,Rt.setValue(v,"receiveShadow",le.receiveShadow)),ge.isMeshGouraudMaterial&&ge.envMap!==null&&(jt.envMap.value=qe,jt.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),ge.isMeshStandardMaterial&&ge.envMap===null&&oe.environment!==null&&(jt.envMapIntensity.value=oe.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=tM()),Zt&&(Rt.setValue(v,"toneMappingExposure",N.toneMappingExposure),et.needsLights&&io(jt,Wn),Ie&&ge.fog===!0&&Be.refreshFogUniforms(jt,Ie),Be.refreshMaterialUniforms(jt,ge,Ee,Se,b.state.transmissionRenderTarget[U.id]),Xo.upload(v,yr(et),jt,ye)),ge.isShaderMaterial&&ge.uniformsNeedUpdate===!0&&(Xo.upload(v,yr(et),jt,ye),ge.uniformsNeedUpdate=!1),ge.isSpriteMaterial&&Rt.setValue(v,"center",le.center),Rt.setValue(v,"modelViewMatrix",le.modelViewMatrix),Rt.setValue(v,"normalMatrix",le.normalMatrix),Rt.setValue(v,"modelMatrix",le.matrixWorld),ge.isShaderMaterial||ge.isRawShaderMaterial){const Yt=ge.uniformsGroups;for(let $t=0,Sr=Yt.length;$t<Sr;$t++){const Rn=Yt[$t];ze.update(Rn,Et),ze.bind(Rn,Et)}}return Et}function io(U,oe){U.ambientLightColor.needsUpdate=oe,U.lightProbe.needsUpdate=oe,U.directionalLights.needsUpdate=oe,U.directionalLightShadows.needsUpdate=oe,U.pointLights.needsUpdate=oe,U.pointLightShadows.needsUpdate=oe,U.spotLights.needsUpdate=oe,U.spotLightShadows.needsUpdate=oe,U.rectAreaLights.needsUpdate=oe,U.hemisphereLights.needsUpdate=oe}function cs(U){return U.isMeshLambertMaterial||U.isMeshToonMaterial||U.isMeshPhongMaterial||U.isMeshStandardMaterial||U.isShadowMaterial||U.isShaderMaterial&&U.lights===!0}this.getActiveCubeFace=function(){return j},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(U,oe,xe){const ge=Z.get(U);ge.__autoAllocateDepthBuffer=U.resolveDepthBuffer===!1,ge.__autoAllocateDepthBuffer===!1&&(ge.__useRenderToTexture=!1),Z.get(U.texture).__webglTexture=oe,Z.get(U.depthTexture).__webglTexture=ge.__autoAllocateDepthBuffer?void 0:xe,ge.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(U,oe){const xe=Z.get(U);xe.__webglFramebuffer=oe,xe.__useDefaultFramebuffer=oe===void 0};const us=v.createFramebuffer();this.setRenderTarget=function(U,oe=0,xe=0){C=U,j=oe,D=xe;let ge=!0,le=null,Ie=!1,Oe=!1;if(U){const qe=Z.get(U);if(qe.__useDefaultFramebuffer!==void 0)A.bindFramebuffer(v.FRAMEBUFFER,null),ge=!1;else if(qe.__webglFramebuffer===void 0)ye.setupRenderTarget(U);else if(qe.__hasExternalTextures)ye.rebindTextures(U,Z.get(U.texture).__webglTexture,Z.get(U.depthTexture).__webglTexture);else if(U.depthBuffer){const Qe=U.depthTexture;if(qe.__boundDepthTexture!==Qe){if(Qe!==null&&Z.has(Qe)&&(U.width!==Qe.image.width||U.height!==Qe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ye.setupDepthRenderbuffer(U)}}const Je=U.texture;(Je.isData3DTexture||Je.isDataArrayTexture||Je.isCompressedArrayTexture)&&(Oe=!0);const nt=Z.get(U).__webglFramebuffer;U.isWebGLCubeRenderTarget?(Array.isArray(nt[oe])?le=nt[oe][xe]:le=nt[oe],Ie=!0):U.samples>0&&ye.useMultisampledRTT(U)===!1?le=Z.get(U).__webglMultisampledFramebuffer:Array.isArray(nt)?le=nt[xe]:le=nt,fe.copy(U.viewport),pe.copy(U.scissor),de=U.scissorTest}else fe.copy(Ce).multiplyScalar(Ee).floor(),pe.copy(ne).multiplyScalar(Ee).floor(),de=$;if(xe!==0&&(le=us),A.bindFramebuffer(v.FRAMEBUFFER,le)&&ge&&A.drawBuffers(U,le),A.viewport(fe),A.scissor(pe),A.setScissorTest(de),Ie){const qe=Z.get(U.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_CUBE_MAP_POSITIVE_X+oe,qe.__webglTexture,xe)}else if(Oe){const qe=oe;for(let Je=0;Je<U.textures.length;Je++){const nt=Z.get(U.textures[Je]);v.framebufferTextureLayer(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0+Je,nt.__webglTexture,xe,qe)}}else if(U!==null&&xe!==0){const qe=Z.get(U.texture);v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,qe.__webglTexture,xe)}q=-1},this.readRenderTargetPixels=function(U,oe,xe,ge,le,Ie,Oe,$e=0){if(!(U&&U.isWebGLRenderTarget)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Z.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Oe!==void 0&&(qe=qe[Oe]),qe){A.bindFramebuffer(v.FRAMEBUFFER,qe);try{const Je=U.textures[$e],nt=Je.format,Qe=Je.type;if(!O.textureFormatReadable(nt)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!O.textureTypeReadable(Qe)){Vt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}oe>=0&&oe<=U.width-ge&&xe>=0&&xe<=U.height-le&&(U.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+$e),v.readPixels(oe,xe,ge,le,tt.convert(nt),tt.convert(Qe),Ie))}finally{const Je=C!==null?Z.get(C).__webglFramebuffer:null;A.bindFramebuffer(v.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(U,oe,xe,ge,le,Ie,Oe,$e=0){if(!(U&&U.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=Z.get(U).__webglFramebuffer;if(U.isWebGLCubeRenderTarget&&Oe!==void 0&&(qe=qe[Oe]),qe)if(oe>=0&&oe<=U.width-ge&&xe>=0&&xe<=U.height-le){A.bindFramebuffer(v.FRAMEBUFFER,qe);const Je=U.textures[$e],nt=Je.format,Qe=Je.type;if(!O.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!O.textureTypeReadable(Qe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ft=v.createBuffer();v.bindBuffer(v.PIXEL_PACK_BUFFER,ft),v.bufferData(v.PIXEL_PACK_BUFFER,Ie.byteLength,v.STREAM_READ),U.textures.length>1&&v.readBuffer(v.COLOR_ATTACHMENT0+$e),v.readPixels(oe,xe,ge,le,tt.convert(nt),tt.convert(Qe),0);const gt=C!==null?Z.get(C).__webglFramebuffer:null;A.bindFramebuffer(v.FRAMEBUFFER,gt);const Ut=v.fenceSync(v.SYNC_GPU_COMMANDS_COMPLETE,0);return v.flush(),await qx(v,Ut,4),v.bindBuffer(v.PIXEL_PACK_BUFFER,ft),v.getBufferSubData(v.PIXEL_PACK_BUFFER,0,Ie),v.deleteBuffer(ft),v.deleteSync(Ut),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(U,oe=null,xe=0){const ge=Math.pow(2,-xe),le=Math.floor(U.image.width*ge),Ie=Math.floor(U.image.height*ge),Oe=oe!==null?oe.x:0,$e=oe!==null?oe.y:0;ye.setTexture2D(U,0),v.copyTexSubImage2D(v.TEXTURE_2D,xe,0,0,Oe,$e,le,Ie),A.unbindTexture()};const ro=v.createFramebuffer(),yn=v.createFramebuffer();this.copyTextureToTexture=function(U,oe,xe=null,ge=null,le=0,Ie=null){Ie===null&&(le!==0?(qs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ie=le,le=0):Ie=0);let Oe,$e,qe,Je,nt,Qe,ft,gt,Ut;const Nt=U.isCompressedTexture?U.mipmaps[Ie]:U.image;if(xe!==null)Oe=xe.max.x-xe.min.x,$e=xe.max.y-xe.min.y,qe=xe.isBox3?xe.max.z-xe.min.z:1,Je=xe.min.x,nt=xe.min.y,Qe=xe.isBox3?xe.min.z:0;else{const hn=Math.pow(2,-le);Oe=Math.floor(Nt.width*hn),$e=Math.floor(Nt.height*hn),U.isDataArrayTexture?qe=Nt.depth:U.isData3DTexture?qe=Math.floor(Nt.depth*hn):qe=1,Je=0,nt=0,Qe=0}ge!==null?(ft=ge.x,gt=ge.y,Ut=ge.z):(ft=0,gt=0,Ut=0);const yt=tt.convert(oe.format),et=tt.convert(oe.type);let Ct;oe.isData3DTexture?(ye.setTexture3D(oe,0),Ct=v.TEXTURE_3D):oe.isDataArrayTexture||oe.isCompressedArrayTexture?(ye.setTexture2DArray(oe,0),Ct=v.TEXTURE_2D_ARRAY):(ye.setTexture2D(oe,0),Ct=v.TEXTURE_2D),v.pixelStorei(v.UNPACK_FLIP_Y_WEBGL,oe.flipY),v.pixelStorei(v.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),v.pixelStorei(v.UNPACK_ALIGNMENT,oe.unpackAlignment);const pt=v.getParameter(v.UNPACK_ROW_LENGTH),Et=v.getParameter(v.UNPACK_IMAGE_HEIGHT),si=v.getParameter(v.UNPACK_SKIP_PIXELS),Zt=v.getParameter(v.UNPACK_SKIP_ROWS),Wn=v.getParameter(v.UNPACK_SKIP_IMAGES);v.pixelStorei(v.UNPACK_ROW_LENGTH,Nt.width),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Nt.height),v.pixelStorei(v.UNPACK_SKIP_PIXELS,Je),v.pixelStorei(v.UNPACK_SKIP_ROWS,nt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Qe);const Rt=U.isDataArrayTexture||U.isData3DTexture,jt=oe.isDataArrayTexture||oe.isData3DTexture;if(U.isDepthTexture){const hn=Z.get(U),Yt=Z.get(oe),$t=Z.get(hn.__renderTarget),Sr=Z.get(Yt.__renderTarget);A.bindFramebuffer(v.READ_FRAMEBUFFER,$t.__webglFramebuffer),A.bindFramebuffer(v.DRAW_FRAMEBUFFER,Sr.__webglFramebuffer);for(let Rn=0;Rn<qe;Rn++)Rt&&(v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Z.get(U).__webglTexture,le,Qe+Rn),v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Z.get(oe).__webglTexture,Ie,Ut+Rn)),v.blitFramebuffer(Je,nt,Oe,$e,ft,gt,Oe,$e,v.DEPTH_BUFFER_BIT,v.NEAREST);A.bindFramebuffer(v.READ_FRAMEBUFFER,null),A.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else if(le!==0||U.isRenderTargetTexture||Z.has(U)){const hn=Z.get(U),Yt=Z.get(oe);A.bindFramebuffer(v.READ_FRAMEBUFFER,ro),A.bindFramebuffer(v.DRAW_FRAMEBUFFER,yn);for(let $t=0;$t<qe;$t++)Rt?v.framebufferTextureLayer(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,hn.__webglTexture,le,Qe+$t):v.framebufferTexture2D(v.READ_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,hn.__webglTexture,le),jt?v.framebufferTextureLayer(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,Yt.__webglTexture,Ie,Ut+$t):v.framebufferTexture2D(v.DRAW_FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,Yt.__webglTexture,Ie),le!==0?v.blitFramebuffer(Je,nt,Oe,$e,ft,gt,Oe,$e,v.COLOR_BUFFER_BIT,v.NEAREST):jt?v.copyTexSubImage3D(Ct,Ie,ft,gt,Ut+$t,Je,nt,Oe,$e):v.copyTexSubImage2D(Ct,Ie,ft,gt,Je,nt,Oe,$e);A.bindFramebuffer(v.READ_FRAMEBUFFER,null),A.bindFramebuffer(v.DRAW_FRAMEBUFFER,null)}else jt?U.isDataTexture||U.isData3DTexture?v.texSubImage3D(Ct,Ie,ft,gt,Ut,Oe,$e,qe,yt,et,Nt.data):oe.isCompressedArrayTexture?v.compressedTexSubImage3D(Ct,Ie,ft,gt,Ut,Oe,$e,qe,yt,Nt.data):v.texSubImage3D(Ct,Ie,ft,gt,Ut,Oe,$e,qe,yt,et,Nt):U.isDataTexture?v.texSubImage2D(v.TEXTURE_2D,Ie,ft,gt,Oe,$e,yt,et,Nt.data):U.isCompressedTexture?v.compressedTexSubImage2D(v.TEXTURE_2D,Ie,ft,gt,Nt.width,Nt.height,yt,Nt.data):v.texSubImage2D(v.TEXTURE_2D,Ie,ft,gt,Oe,$e,yt,et,Nt);v.pixelStorei(v.UNPACK_ROW_LENGTH,pt),v.pixelStorei(v.UNPACK_IMAGE_HEIGHT,Et),v.pixelStorei(v.UNPACK_SKIP_PIXELS,si),v.pixelStorei(v.UNPACK_SKIP_ROWS,Zt),v.pixelStorei(v.UNPACK_SKIP_IMAGES,Wn),Ie===0&&oe.generateMipmaps&&v.generateMipmap(Ct),A.unbindTexture()},this.initRenderTarget=function(U){Z.get(U).__webglFramebuffer===void 0&&ye.setupRenderTarget(U)},this.initTexture=function(U){U.isCubeTexture?ye.setTextureCube(U,0):U.isData3DTexture?ye.setTexture3D(U,0):U.isDataArrayTexture||U.isCompressedArrayTexture?ye.setTexture2DArray(U,0):ye.setTexture2D(U,0),A.unbindTexture()},this.resetState=function(){j=0,D=0,C=null,A.reset(),J.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=vt._getDrawingBufferColorSpace(e),t.unpackColorSpace=vt._getUnpackColorSpace()}}var ah=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},gl={},lh;function iM(){return lh||(lh=1,(function(){var n;function e(l){var d=0;return function(){return d<l.length?{done:!1,value:l[d++]}:{done:!0}}}var t=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,d,g){return l==Array.prototype||l==Object.prototype||(l[d]=g.value),l};function i(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof ah=="object"&&ah];for(var d=0;d<l.length;++d){var g=l[d];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=i(this);function s(l,d){if(d)e:{var g=r;l=l.split(".");for(var T=0;T<l.length-1;T++){var H=l[T];if(!(H in g))break e;g=g[H]}l=l[l.length-1],T=g[l],d=d(T),d!=T&&d!=null&&t(g,l,{configurable:!0,writable:!0,value:d})}}s("Symbol",function(l){function d(X){if(this instanceof d)throw new TypeError("Symbol is not a constructor");return new g(T+(X||"")+"_"+H++,X)}function g(X,G){this.h=X,t(this,"description",{configurable:!0,writable:!0,value:G})}if(l)return l;g.prototype.toString=function(){return this.h};var T="jscomp_symbol_"+(1e9*Math.random()>>>0)+"_",H=0;return d}),s("Symbol.iterator",function(l){if(l)return l;l=Symbol("Symbol.iterator");for(var d="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),g=0;g<d.length;g++){var T=r[d[g]];typeof T=="function"&&typeof T.prototype[l]!="function"&&t(T.prototype,l,{configurable:!0,writable:!0,value:function(){return o(e(this))}})}return l});function o(l){return l={next:l},l[Symbol.iterator]=function(){return this},l}function a(l){var d=typeof Symbol<"u"&&Symbol.iterator&&l[Symbol.iterator];return d?d.call(l):{next:e(l)}}function c(l){if(!(l instanceof Array)){l=a(l);for(var d,g=[];!(d=l.next()).done;)g.push(d.value);l=g}return l}var u=typeof Object.assign=="function"?Object.assign:function(l,d){for(var g=1;g<arguments.length;g++){var T=arguments[g];if(T)for(var H in T)Object.prototype.hasOwnProperty.call(T,H)&&(l[H]=T[H])}return l};s("Object.assign",function(l){return l||u});var f=typeof Object.create=="function"?Object.create:function(l){function d(){}return d.prototype=l,new d},h;if(typeof Object.setPrototypeOf=="function")h=Object.setPrototypeOf;else{var m;e:{var x={a:!0},y={};try{y.__proto__=x,m=y.a;break e}catch{}m=!1}h=m?function(l,d){if(l.__proto__=d,l.__proto__!==d)throw new TypeError(l+" is not extensible");return l}:null}var E=h;function _(l,d){if(l.prototype=f(d.prototype),l.prototype.constructor=l,E)E(l,d);else for(var g in d)if(g!="prototype")if(Object.defineProperties){var T=Object.getOwnPropertyDescriptor(d,g);T&&Object.defineProperty(l,g,T)}else l[g]=d[g];l.ya=d.prototype}function p(){this.m=!1,this.j=null,this.i=void 0,this.h=1,this.v=this.s=0,this.l=null}function L(l){if(l.m)throw new TypeError("Generator is already running");l.m=!0}p.prototype.u=function(l){this.i=l};function b(l,d){l.l={ma:d,na:!0},l.h=l.s||l.v}p.prototype.return=function(l){this.l={return:l},this.h=this.v};function M(l,d,g){return l.h=g,{value:d}}function z(l){this.h=new p,this.i=l}function N(l,d){L(l.h);var g=l.h.j;return g?V(l,"return"in g?g.return:function(T){return{value:T,done:!0}},d,l.h.return):(l.h.return(d),j(l))}function V(l,d,g,T){try{var H=d.call(l.h.j,g);if(!(H instanceof Object))throw new TypeError("Iterator result "+H+" is not an object");if(!H.done)return l.h.m=!1,H;var X=H.value}catch(G){return l.h.j=null,b(l.h,G),j(l)}return l.h.j=null,T.call(l.h,X),j(l)}function j(l){for(;l.h.h;)try{var d=l.i(l.h);if(d)return l.h.m=!1,{value:d.value,done:!1}}catch(g){l.h.i=void 0,b(l.h,g)}if(l.h.m=!1,l.h.l){if(d=l.h.l,l.h.l=null,d.na)throw d.ma;return{value:d.return,done:!0}}return{value:void 0,done:!0}}function D(l){this.next=function(d){return L(l.h),l.h.j?d=V(l,l.h.j.next,d,l.h.u):(l.h.u(d),d=j(l)),d},this.throw=function(d){return L(l.h),l.h.j?d=V(l,l.h.j.throw,d,l.h.u):(b(l.h,d),d=j(l)),d},this.return=function(d){return N(l,d)},this[Symbol.iterator]=function(){return this}}function C(l){function d(T){return l.next(T)}function g(T){return l.throw(T)}return new Promise(function(T,H){function X(G){G.done?T(G.value):Promise.resolve(G.value).then(d,g).then(X,H)}X(l.next())})}function q(l){return C(new D(new z(l)))}s("Promise",function(l){function d(G){this.i=0,this.j=void 0,this.h=[],this.u=!1;var te=this.l();try{G(te.resolve,te.reject)}catch(me){te.reject(me)}}function g(){this.h=null}function T(G){return G instanceof d?G:new d(function(te){te(G)})}if(l)return l;g.prototype.i=function(G){if(this.h==null){this.h=[];var te=this;this.j(function(){te.m()})}this.h.push(G)};var H=r.setTimeout;g.prototype.j=function(G){H(G,0)},g.prototype.m=function(){for(;this.h&&this.h.length;){var G=this.h;this.h=[];for(var te=0;te<G.length;++te){var me=G[te];G[te]=null;try{me()}catch(Pe){this.l(Pe)}}}this.h=null},g.prototype.l=function(G){this.j(function(){throw G})},d.prototype.l=function(){function G(Pe){return function(Ve){me||(me=!0,Pe.call(te,Ve))}}var te=this,me=!1;return{resolve:G(this.I),reject:G(this.m)}},d.prototype.I=function(G){if(G===this)this.m(new TypeError("A Promise cannot resolve to itself"));else if(G instanceof d)this.L(G);else{e:switch(typeof G){case"object":var te=G!=null;break e;case"function":te=!0;break e;default:te=!1}te?this.F(G):this.s(G)}},d.prototype.F=function(G){var te=void 0;try{te=G.then}catch(me){this.m(me);return}typeof te=="function"?this.M(te,G):this.s(G)},d.prototype.m=function(G){this.v(2,G)},d.prototype.s=function(G){this.v(1,G)},d.prototype.v=function(G,te){if(this.i!=0)throw Error("Cannot settle("+G+", "+te+"): Promise already settled in state"+this.i);this.i=G,this.j=te,this.i===2&&this.K(),this.H()},d.prototype.K=function(){var G=this;H(function(){if(G.D()){var te=r.console;typeof te<"u"&&te.error(G.j)}},1)},d.prototype.D=function(){if(this.u)return!1;var G=r.CustomEvent,te=r.Event,me=r.dispatchEvent;return typeof me>"u"?!0:(typeof G=="function"?G=new G("unhandledrejection",{cancelable:!0}):typeof te=="function"?G=new te("unhandledrejection",{cancelable:!0}):(G=r.document.createEvent("CustomEvent"),G.initCustomEvent("unhandledrejection",!1,!0,G)),G.promise=this,G.reason=this.j,me(G))},d.prototype.H=function(){if(this.h!=null){for(var G=0;G<this.h.length;++G)X.i(this.h[G]);this.h=null}};var X=new g;return d.prototype.L=function(G){var te=this.l();G.T(te.resolve,te.reject)},d.prototype.M=function(G,te){var me=this.l();try{G.call(te,me.resolve,me.reject)}catch(Pe){me.reject(Pe)}},d.prototype.then=function(G,te){function me(Ze,We){return typeof Ze=="function"?function(st){try{Pe(Ze(st))}catch(ht){Ve(ht)}}:We}var Pe,Ve,rt=new d(function(Ze,We){Pe=Ze,Ve=We});return this.T(me(G,Pe),me(te,Ve)),rt},d.prototype.catch=function(G){return this.then(void 0,G)},d.prototype.T=function(G,te){function me(){switch(Pe.i){case 1:G(Pe.j);break;case 2:te(Pe.j);break;default:throw Error("Unexpected state: "+Pe.i)}}var Pe=this;this.h==null?X.i(me):this.h.push(me),this.u=!0},d.resolve=T,d.reject=function(G){return new d(function(te,me){me(G)})},d.race=function(G){return new d(function(te,me){for(var Pe=a(G),Ve=Pe.next();!Ve.done;Ve=Pe.next())T(Ve.value).T(te,me)})},d.all=function(G){var te=a(G),me=te.next();return me.done?T([]):new d(function(Pe,Ve){function rt(st){return function(ht){Ze[st]=ht,We--,We==0&&Pe(Ze)}}var Ze=[],We=0;do Ze.push(void 0),We++,T(me.value).T(rt(Ze.length-1),Ve),me=te.next();while(!me.done)})},d});function ee(l,d){l instanceof String&&(l+="");var g=0,T=!1,H={next:function(){if(!T&&g<l.length){var X=g++;return{value:d(X,l[X]),done:!1}}return T=!0,{done:!0,value:void 0}}};return H[Symbol.iterator]=function(){return H},H}s("Array.prototype.keys",function(l){return l||function(){return ee(this,function(d){return d})}}),s("Array.prototype.fill",function(l){return l||function(d,g,T){var H=this.length||0;for(0>g&&(g=Math.max(0,H+g)),(T==null||T>H)&&(T=H),T=Number(T),0>T&&(T=Math.max(0,H+T)),g=Number(g||0);g<T;g++)this[g]=d;return this}});function fe(l){return l||Array.prototype.fill}s("Int8Array.prototype.fill",fe),s("Uint8Array.prototype.fill",fe),s("Uint8ClampedArray.prototype.fill",fe),s("Int16Array.prototype.fill",fe),s("Uint16Array.prototype.fill",fe),s("Int32Array.prototype.fill",fe),s("Uint32Array.prototype.fill",fe),s("Float32Array.prototype.fill",fe),s("Float64Array.prototype.fill",fe),s("Object.is",function(l){return l||function(d,g){return d===g?d!==0||1/d===1/g:d!==d&&g!==g}}),s("Array.prototype.includes",function(l){return l||function(d,g){var T=this;T instanceof String&&(T=String(T));var H=T.length;for(g=g||0,0>g&&(g=Math.max(g+H,0));g<H;g++){var X=T[g];if(X===d||Object.is(X,d))return!0}return!1}}),s("String.prototype.includes",function(l){return l||function(d,g){if(this==null)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(d instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return this.indexOf(d,g||0)!==-1}});var pe=this||self;function de(l,d){l=l.split(".");var g=pe;l[0]in g||typeof g.execScript>"u"||g.execScript("var "+l[0]);for(var T;l.length&&(T=l.shift());)l.length||d===void 0?g[T]&&g[T]!==Object.prototype[T]?g=g[T]:g=g[T]={}:g[T]=d}function he(l){var d;e:{if((d=pe.navigator)&&(d=d.userAgent))break e;d=""}return d.indexOf(l)!=-1}var ae=Array.prototype.map?function(l,d){return Array.prototype.map.call(l,d,void 0)}:function(l,d){for(var g=l.length,T=Array(g),H=typeof l=="string"?l.split(""):l,X=0;X<g;X++)X in H&&(T[X]=d.call(void 0,H[X],X,l));return T},Y={},Se=null;function Ee(l){var d=l.length,g=3*d/4;g%3?g=Math.floor(g):"=.".indexOf(l[d-1])!=-1&&(g="=.".indexOf(l[d-2])!=-1?g-2:g-1);var T=new Uint8Array(g),H=0;return Ue(l,function(X){T[H++]=X}),H!==g?T.subarray(0,H):T}function Ue(l,d){function g(me){for(;T<l.length;){var Pe=l.charAt(T++),Ve=Se[Pe];if(Ve!=null)return Ve;if(!/^[\s\xa0]*$/.test(Pe))throw Error("Unknown base64 encoding at char: "+Pe)}return me}we();for(var T=0;;){var H=g(-1),X=g(0),G=g(64),te=g(64);if(te===64&&H===-1)break;d(H<<2|X>>4),G!=64&&(d(X<<4&240|G>>2),te!=64&&d(G<<6&192|te))}}function we(){if(!Se){Se={};for(var l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],g=0;5>g;g++){var T=l.concat(d[g].split(""));Y[g]=T;for(var H=0;H<T.length;H++){var X=T[H];Se[X]===void 0&&(Se[X]=H)}}}}var Ce=typeof Uint8Array<"u",ne=!(he("Trident")||he("MSIE"))&&typeof pe.btoa=="function";function $(l){if(!ne){var d;d===void 0&&(d=0),we(),d=Y[d];for(var g=Array(Math.floor(l.length/3)),T=d[64]||"",H=0,X=0;H<l.length-2;H+=3){var G=l[H],te=l[H+1],me=l[H+2],Pe=d[G>>2];G=d[(G&3)<<4|te>>4],te=d[(te&15)<<2|me>>6],me=d[me&63],g[X++]=Pe+G+te+me}switch(Pe=0,me=T,l.length-H){case 2:Pe=l[H+1],me=d[(Pe&15)<<2]||T;case 1:l=l[H],g[X]=d[l>>2]+d[(l&3)<<4|Pe>>4]+me+T}return g.join("")}for(d="";10240<l.length;)d+=String.fromCharCode.apply(null,l.subarray(0,10240)),l=l.subarray(10240);return d+=String.fromCharCode.apply(null,l),btoa(d)}var P=RegExp("[-_.]","g");function w(l){switch(l){case"-":return"+";case"_":return"/";case".":return"=";default:return""}}function se(l){if(!ne)return Ee(l);P.test(l)&&(l=l.replace(P,w)),l=atob(l);for(var d=new Uint8Array(l.length),g=0;g<l.length;g++)d[g]=l.charCodeAt(g);return d}var ve;function re(){return ve||(ve=new Uint8Array(0))}var be={},F=typeof Uint8Array.prototype.slice=="function",B=0,I=0;function v(l){var d=0>l;l=Math.abs(l);var g=l>>>0;l=Math.floor((l-g)/4294967296),d&&(g=a(W(g,l)),d=g.next().value,l=g.next().value,g=d),B=g>>>0,I=l>>>0}var k=typeof BigInt=="function";function W(l,d){return d=~d,l?l=~l+1:d+=1,[l,d]}function O(l,d){this.i=l>>>0,this.h=d>>>0}function A(l){if(!l)return Q||(Q=new O(0,0));if(!/^-?\d+$/.test(l))return null;if(16>l.length)v(Number(l));else if(k)l=BigInt(l),B=Number(l&BigInt(4294967295))>>>0,I=Number(l>>BigInt(32)&BigInt(4294967295));else{var d=+(l[0]==="-");I=B=0;for(var g=l.length,T=d,H=(g-d)%6+d;H<=g;T=H,H+=6)T=Number(l.slice(T,H)),I*=1e6,B=1e6*B+T,4294967296<=B&&(I+=B/4294967296|0,B%=4294967296);d&&(d=a(W(B,I)),l=d.next().value,d=d.next().value,B=l,I=d)}return new O(B,I)}var Q;function Z(l,d){return Error("Invalid wire type: "+l+" (at position "+d+")")}function ye(){return Error("Failed to read varint, encoding is invalid.")}function R(l,d){return Error("Tried to read past the end of the data "+d+" > "+l)}function S(){throw Error("Invalid UTF8")}function K(l,d){return d=String.fromCharCode.apply(null,d),l==null?d:l+d}var ce=void 0,_e,ue=typeof TextDecoder<"u",Be,Re=typeof TextEncoder<"u",Xe;function He(l){if(l!==be)throw Error("illegal external caller")}function Me(l,d){if(He(d),this.V=l,l!=null&&l.length===0)throw Error("ByteString should be constructed with non-empty values")}function De(){return Xe||(Xe=new Me(null,be))}function Ye(l){He(be);var d=l.V;return d=d==null||Ce&&d!=null&&d instanceof Uint8Array?d:typeof d=="string"?se(d):null,d==null?d:l.V=d}function Ke(l){if(typeof l=="string")return{buffer:se(l),C:!1};if(Array.isArray(l))return{buffer:new Uint8Array(l),C:!1};if(l.constructor===Uint8Array)return{buffer:l,C:!1};if(l.constructor===ArrayBuffer)return{buffer:new Uint8Array(l),C:!1};if(l.constructor===Me)return{buffer:Ye(l)||re(),C:!0};if(l instanceof Uint8Array)return{buffer:new Uint8Array(l.buffer,l.byteOffset,l.byteLength),C:!1};throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, a ByteString or an Array of numbers")}function Ge(l,d){this.i=null,this.m=!1,this.h=this.j=this.l=0,tt(this,l,d)}function tt(l,d,g){g=g===void 0?{}:g,l.S=g.S===void 0?!1:g.S,d&&(d=Ke(d),l.i=d.buffer,l.m=d.C,l.l=0,l.j=l.i.length,l.h=l.l)}Ge.prototype.reset=function(){this.h=this.l};function J(l,d){if(l.h=d,d>l.j)throw R(l.j,d)}function ze(l){var d=l.i,g=l.h,T=d[g++],H=T&127;if(T&128&&(T=d[g++],H|=(T&127)<<7,T&128&&(T=d[g++],H|=(T&127)<<14,T&128&&(T=d[g++],H|=(T&127)<<21,T&128&&(T=d[g++],H|=T<<28,T&128&&d[g++]&128&&d[g++]&128&&d[g++]&128&&d[g++]&128&&d[g++]&128)))))throw ye();return J(l,g),H}function Ne(l,d){if(0>d)throw Error("Tried to read a negative byte length: "+d);var g=l.h,T=g+d;if(T>l.j)throw R(d,l.j-g);return l.h=T,g}var Fe=[];function Le(){this.h=[]}Le.prototype.length=function(){return this.h.length},Le.prototype.end=function(){var l=this.h;return this.h=[],l};function Te(l,d,g){for(;0<g||127<d;)l.h.push(d&127|128),d=(d>>>7|g<<25)>>>0,g>>>=7;l.h.push(d)}function je(l,d){for(;127<d;)l.h.push(d&127|128),d>>>=7;l.h.push(d)}function it(l,d){if(Fe.length){var g=Fe.pop();tt(g,l,d),l=g}else l=new Ge(l,d);this.h=l,this.j=this.h.h,this.i=this.l=-1,this.setOptions(d)}it.prototype.setOptions=function(l){l=l===void 0?{}:l,this.ca=l.ca===void 0?!1:l.ca},it.prototype.reset=function(){this.h.reset(),this.j=this.h.h,this.i=this.l=-1};function Mt(l){var d=l.h;if(d.h==d.j)return!1;l.j=l.h.h;var g=ze(l.h)>>>0;if(d=g>>>3,g&=7,!(0<=g&&5>=g))throw Z(g,l.j);if(1>d)throw Error("Invalid field number: "+d+" (at position "+l.j+")");return l.l=d,l.i=g,!0}function mt(l){switch(l.i){case 0:if(l.i!=0)mt(l);else e:{l=l.h;for(var d=l.h,g=d+10,T=l.i;d<g;)if((T[d++]&128)===0){J(l,d);break e}throw ye()}break;case 1:l=l.h,J(l,l.h+8);break;case 2:l.i!=2?mt(l):(d=ze(l.h)>>>0,l=l.h,J(l,l.h+d));break;case 5:l=l.h,J(l,l.h+4);break;case 3:d=l.l;do{if(!Mt(l))throw Error("Unmatched start-group tag: stream EOF");if(l.i==4){if(l.l!=d)throw Error("Unmatched end-group tag");break}mt(l)}while(!0);break;default:throw Z(l.i,l.j)}}var sn=[];function _n(){this.j=[],this.i=0,this.h=new Le}function Ri(l,d){d.length!==0&&(l.j.push(d),l.i+=d.length)}function to(l,d){if(d=d.R){Ri(l,l.h.end());for(var g=0;g<d.length;g++)Ri(l,Ye(d[g])||re())}}var Cn=typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol():void 0;function on(l,d){return Cn?l[Cn]|=d:l.A!==void 0?l.A|=d:(Object.defineProperties(l,{A:{value:d,configurable:!0,writable:!0,enumerable:!1}}),d)}function vr(l,d){Cn?l[Cn]&&(l[Cn]&=~d):l.A!==void 0&&(l.A&=~d)}function It(l){var d;return Cn?d=l[Cn]:d=l.A,d??0}function vn(l,d){Cn?l[Cn]=d:l.A!==void 0?l.A=d:Object.defineProperties(l,{A:{value:d,configurable:!0,writable:!0,enumerable:!1}})}function Pi(l){return on(l,1),l}function no(l,d){vn(d,(l|0)&-51)}function ri(l,d){vn(d,(l|18)&-41)}var yr={};function Ji(l){return l!==null&&typeof l=="object"&&!Array.isArray(l)&&l.constructor===Object}var Zi,io=[];vn(io,23),Zi=Object.freeze(io);function cs(l){if(It(l.o)&2)throw Error("Cannot mutate an immutable Message")}function us(l){var d=l.length;(d=d?l[d-1]:void 0)&&Ji(d)?d.g=1:(d={},l.push((d.g=1,d)))}function ro(l){var d=l.i+l.G;return l.B||(l.B=l.o[d]={})}function yn(l,d){return d===-1?null:d>=l.i?l.B?l.B[d]:void 0:l.o[d+l.G]}function U(l,d,g,T){cs(l),oe(l,d,g,T)}function oe(l,d,g,T){l.j&&(l.j=void 0),d>=l.i||T?ro(l)[d]=g:(l.o[d+l.G]=g,(l=l.B)&&d in l&&delete l[d])}function xe(l,d,g,T){var H=yn(l,d);Array.isArray(H)||(H=Zi);var X=It(H);if(X&1||Pi(H),T)X&2||on(H,2),g&1||Object.freeze(H);else{T=!(g&2);var G=X&2;g&1||!G?T&&X&16&&!G&&vr(H,16):(H=Pi(Array.prototype.slice.call(H)),oe(l,d,H))}return H}function ge(l,d){var g=yn(l,d),T=g==null?g:typeof g=="number"||g==="NaN"||g==="Infinity"||g==="-Infinity"?Number(g):void 0;return T!=null&&T!==g&&oe(l,d,T),T}function le(l,d,g,T,H){l.h||(l.h={});var X=l.h[g],G=xe(l,g,3,H);if(!X){var te=G;X=[];var me=!!(It(l.o)&16);G=!!(It(te)&2);var Pe=te;!H&&G&&(te=Array.prototype.slice.call(te));for(var Ve=G,rt=0;rt<te.length;rt++){var Ze=te[rt],We=d,st=!1;if(st=st===void 0?!1:st,Ze=Array.isArray(Ze)?new We(Ze):st?new We:void 0,Ze!==void 0){We=Ze.o;var ht=st=It(We);G&&(ht|=2),me&&(ht|=16),ht!=st&&vn(We,ht),We=ht,Ve=Ve||!!(2&We),X.push(Ze)}}return l.h[g]=X,me=It(te),d=me|33,d=Ve?d&-9:d|8,me!=d&&(Ve=te,Object.isFrozen(Ve)&&(Ve=Array.prototype.slice.call(Ve)),vn(Ve,d),te=Ve),Pe!==te&&oe(l,g,te),(H||T&&G)&&on(X,2),T&&Object.freeze(X),X}return H||(H=Object.isFrozen(X),T&&!H?Object.freeze(X):!T&&H&&(X=Array.prototype.slice.call(X),l.h[g]=X)),X}function Ie(l,d,g){var T=!!(It(l.o)&2);if(d=le(l,d,g,T,T),l=xe(l,g,3,T),!(T||It(l)&8)){for(T=0;T<d.length;T++){if(g=d[T],It(g.o)&2){var H=pt(g,!1);H.j=g}else H=g;g!==H&&(d[T]=H,l[T]=H.o)}on(l,8)}return d}function Oe(l,d,g){if(g!=null&&typeof g!="number")throw Error("Value of float/double field must be a number|null|undefined, found "+typeof g+": "+g);U(l,d,g)}function $e(l,d,g,T,H){cs(l);var X=le(l,g,d,!1,!1);return g=T??new g,l=xe(l,d,2,!1),H!=null?(X.splice(H,0,g),l.splice(H,0,g.o)):(X.push(g),l.push(g.o)),g.C()&&vr(l,8),g}function qe(l,d){return l??d}function Je(l,d,g){return g=g===void 0?0:g,qe(ge(l,d),g)}var nt;function Qe(l){switch(typeof l){case"number":return isFinite(l)?l:String(l);case"object":if(l)if(Array.isArray(l)){if((It(l)&128)!==0)return l=Array.prototype.slice.call(l),us(l),l}else{if(Ce&&l!=null&&l instanceof Uint8Array)return $(l);if(l instanceof Me){var d=l.V;return d==null?"":typeof d=="string"?d:l.V=$(d)}}}return l}function ft(l,d,g,T){if(l!=null){if(Array.isArray(l))l=gt(l,d,g,T!==void 0);else if(Ji(l)){var H={},X;for(X in l)H[X]=ft(l[X],d,g,T);l=H}else l=d(l,T);return l}}function gt(l,d,g,T){var H=It(l);T=T?!!(H&16):void 0,l=Array.prototype.slice.call(l);for(var X=0;X<l.length;X++)l[X]=ft(l[X],d,g,T);return g(H,l),l}function Ut(l){return l.ja===yr?l.toJSON():Qe(l)}function Nt(l,d){l&128&&us(d)}function yt(l,d,g){if(g=g===void 0?ri:g,l!=null){if(Ce&&l instanceof Uint8Array)return l.length?new Me(new Uint8Array(l),be):De();if(Array.isArray(l)){var T=It(l);return T&2?l:d&&!(T&32)&&(T&16||T===0)?(vn(l,T|2),l):(l=gt(l,yt,T&4?ri:g,!0),d=It(l),d&4&&d&2&&Object.freeze(l),l)}return l.ja===yr?Ct(l):l}}function et(l,d,g,T,H,X,G){if(l=l.h&&l.h[g]){if(T=It(l),T&2?T=l:(X=ae(l,Ct),ri(T,X),Object.freeze(X),T=X),cs(d),G=T==null?Zi:Pi([]),T!=null){for(X=!!T.length,l=0;l<T.length;l++){var te=T[l];X=X&&!(It(te.o)&2),G[l]=te.o}X=(X?8:0)|1,l=It(G),(l&X)!==X&&(Object.isFrozen(G)&&(G=Array.prototype.slice.call(G)),vn(G,l|X)),d.h||(d.h={}),d.h[g]=T}else d.h&&(d.h[g]=void 0);oe(d,g,G,H)}else U(d,g,yt(T,X,G),H)}function Ct(l){return It(l.o)&2||(l=pt(l,!0),on(l.o,2)),l}function pt(l,d){var g=l.o,T=[];on(T,16);var H=l.constructor.h;if(H&&T.push(H),H=l.B,H){T.length=g.length,T.fill(void 0,T.length,g.length);var X={};T[T.length-1]=X}(It(g)&128)!==0&&us(T),d=d||l.C()?ri:no,X=l.constructor,nt=T,T=new X(T),nt=void 0,l.R&&(T.R=l.R.slice()),X=!!(It(g)&16);for(var G=H?g.length-1:g.length,te=0;te<G;te++)et(l,T,te-l.G,g[te],!1,X,d);if(H)for(var me in H)et(l,T,+me,H[me],!0,X,d);return T}function Et(l,d,g){l==null&&(l=nt),nt=void 0;var T=this.constructor.i||0,H=0<T,X=this.constructor.h,G=!1;if(l==null){l=X?[X]:[];var te=48,me=!0;H&&(T=0,te|=128),vn(l,te)}else{if(!Array.isArray(l)||X&&X!==l[0])throw Error();var Pe=te=on(l,0);if((me=(16&Pe)!==0)&&((G=(32&Pe)!==0)||(Pe|=32)),H){if(128&Pe)T=0;else if(0<l.length){var Ve=l[l.length-1];if(Ji(Ve)&&"g"in Ve){T=0,Pe|=128,delete Ve.g;var rt=!0,Ze;for(Ze in Ve){rt=!1;break}rt&&l.pop()}}}else if(128&Pe)throw Error();te!==Pe&&vn(l,Pe)}this.G=(X?0:-1)-T,this.h=void 0,this.o=l;e:{if(X=this.o.length,T=X-1,X&&(X=this.o[T],Ji(X))){this.B=X,this.i=T-this.G;break e}d!==void 0&&-1<d?(this.i=Math.max(d,T+1-this.G),this.B=void 0):this.i=Number.MAX_VALUE}if(!H&&this.B&&"g"in this.B)throw Error('Unexpected "g" flag in sparse object of message that is not a group type.');if(g){d=me&&!G&&!0,H=this.i;var We;for(me=0;me<g.length;me++)G=g[me],G<H?(G+=this.G,(T=l[G])?si(T,d):l[G]=Zi):(We||(We=ro(this)),(T=We[G])?si(T,d):We[G]=Zi)}}Et.prototype.toJSON=function(){return gt(this.o,Ut,Nt)},Et.prototype.C=function(){return!!(It(this.o)&2)};function si(l,d){if(Array.isArray(l)){var g=It(l),T=1;!d||g&2||(T|=16),(g&T)!==T&&vn(l,g|T)}}Et.prototype.ja=yr,Et.prototype.toString=function(){return this.o.toString()};function Zt(l,d,g){if(g){var T={},H;for(H in g){var X=g[H],G=X.qa;G||(T.J=X.wa||X.oa.W,X.ia?(T.aa=su(X.ia),G=(function(te){return function(me,Pe,Ve){return te.J(me,Pe,Ve,te.aa)}})(T)):X.ka?(T.Z=ou(X.da.P,X.ka),G=(function(te){return function(me,Pe,Ve){return te.J(me,Pe,Ve,te.Z)}})(T)):G=T.J,X.qa=G),G(d,l,X.da),T={J:T.J,aa:T.aa,Z:T.Z}}}to(d,l)}var Wn=Symbol();function Rt(l,d,g){return l[Wn]||(l[Wn]=function(T,H){return d(T,H,g)})}function jt(l){var d=l[Wn];if(!d){var g=ga(l);d=function(T,H){return au(T,H,g)},l[Wn]=d}return d}function hn(l){var d=l.ia;if(d)return jt(d);if(d=l.va)return Rt(l.da.P,d,l.ka)}function Yt(l){var d=hn(l),g=l.da,T=l.oa.U;return d?function(H,X){return T(H,X,g,d)}:function(H,X){return T(H,X,g)}}function $t(l,d){var g=l[d];return typeof g=="function"&&g.length===0&&(g=g(),l[d]=g),Array.isArray(g)&&(hs in g||fs in g||0<g.length&&typeof g[0]=="function")?g:void 0}function Sr(l,d,g,T,H,X){d.P=l[0];var G=1;if(l.length>G&&typeof l[G]!="number"){var te=l[G++];g(d,te)}for(;G<l.length;){g=l[G++];for(var me=G+1;me<l.length&&typeof l[me]!="number";)me++;switch(te=l[G++],me-=G,me){case 0:T(d,g,te);break;case 1:(me=$t(l,G))?(G++,H(d,g,te,me)):T(d,g,te,l[G++]);break;case 2:me=G++,me=$t(l,me),H(d,g,te,me,l[G++]);break;case 3:X(d,g,te,l[G++],l[G++],l[G++]);break;case 4:X(d,g,te,l[G++],l[G++],l[G++],l[G++]);break;default:throw Error("unexpected number of binary field arguments: "+me)}}return d}var Rn=Symbol();function su(l){var d=l[Rn];if(!d){var g=xa(l);d=function(T,H){return lu(T,H,g)},l[Rn]=d}return d}function ou(l,d){var g=l[Rn];return g||(g=function(T,H){return Zt(T,H,d)},l[Rn]=g),g}var fs=Symbol();function np(l,d){l.push(d)}function ip(l,d,g){l.push(d,g.W)}function rp(l,d,g,T){var H=su(T),X=xa(T).P,G=g.W;l.push(d,function(te,me,Pe){return G(te,me,Pe,X,H)})}function sp(l,d,g,T,H,X){var G=ou(T,X),te=g.W;l.push(d,function(me,Pe,Ve){return te(me,Pe,Ve,T,G)})}function xa(l){var d=l[fs];return d||(d=Sr(l,l[fs]=[],np,ip,rp,sp),hs in l&&fs in l&&(l.length=0),d)}var hs=Symbol();function op(l,d){l[0]=d}function ap(l,d,g,T){var H=g.U;l[d]=T?function(X,G,te){return H(X,G,te,T)}:H}function lp(l,d,g,T,H){var X=g.U,G=jt(T),te=ga(T).P;l[d]=function(me,Pe,Ve){return X(me,Pe,Ve,te,G,H)}}function cp(l,d,g,T,H,X,G){var te=g.U,me=Rt(T,H,X);l[d]=function(Pe,Ve,rt){return te(Pe,Ve,rt,T,me,G)}}function ga(l){var d=l[hs];return d||(d=Sr(l,l[hs]={},op,ap,lp,cp),hs in l&&fs in l&&(l.length=0),d)}function au(l,d,g){for(;Mt(d)&&d.i!=4;){var T=d.l,H=g[T];if(!H){var X=g[0];X&&(X=X[T])&&(H=g[T]=Yt(X))}if(!H||!H(d,l,T)){H=d,T=l,X=H.j,mt(H);var G=H;if(!G.ca){if(H=G.h.h-X,G.h.h=X,G=G.h,H==0)H=De();else{if(X=Ne(G,H),G.S&&G.m)H=G.i.subarray(X,X+H);else{G=G.i;var te=X;H=X+H,H=te===H?re():F?G.slice(te,H):new Uint8Array(G.subarray(te,H))}H=H.length==0?De():new Me(H,be)}(X=T.R)?X.push(H):T.R=[H]}}}return l}function lu(l,d,g){for(var T=g.length,H=T%2==1,X=H?1:0;X<T;X+=2)(0,g[X+1])(d,l,g[X]);Zt(l,d,H?g[0]:void 0)}function ds(l,d){return{U:l,W:d}}var Fn=ds(function(l,d,g){if(l.i!==5)return!1;l=l.h;var T=l.i,H=l.h,X=T[H],G=T[H+1],te=T[H+2];return T=T[H+3],J(l,l.h+4),G=(X<<0|G<<8|te<<16|T<<24)>>>0,l=2*(G>>31)+1,X=G>>>23&255,G&=8388607,U(d,g,X==255?G?NaN:1/0*l:X==0?l*Math.pow(2,-149)*G:l*Math.pow(2,X-150)*(G+Math.pow(2,23))),!0},function(l,d,g){if(d=ge(d,g),d!=null){je(l.h,8*g+5),l=l.h;var T=+d;T===0?0<1/T?B=I=0:(I=0,B=2147483648):isNaN(T)?(I=0,B=2147483647):(T=(g=0>T?-2147483648:0)?-T:T,34028234663852886e22<T?(I=0,B=(g|2139095040)>>>0):11754943508222875e-54>T?(T=Math.round(T/Math.pow(2,-149)),I=0,B=(g|T)>>>0):(d=Math.floor(Math.log(T)/Math.LN2),T*=Math.pow(2,-d),T=Math.round(8388608*T),16777216<=T&&++d,I=0,B=(g|d+127<<23|T&8388607)>>>0)),g=B,l.h.push(g>>>0&255),l.h.push(g>>>8&255),l.h.push(g>>>16&255),l.h.push(g>>>24&255)}}),up=ds(function(l,d,g){if(l.i!==0)return!1;var T=l.h,H=0,X=l=0,G=T.i,te=T.h;do{var me=G[te++];H|=(me&127)<<X,X+=7}while(32>X&&me&128);for(32<X&&(l|=(me&127)>>4),X=3;32>X&&me&128;X+=7)me=G[te++],l|=(me&127)<<X;if(J(T,te),128>me)T=H>>>0,me=l>>>0,(l=me&2147483648)&&(T=~T+1>>>0,me=~me>>>0,T==0&&(me=me+1>>>0)),T=4294967296*me+(T>>>0);else throw ye();return U(d,g,l?-T:T),!0},function(l,d,g){d=yn(d,g),d!=null&&(typeof d=="string"&&A(d),d!=null&&(je(l.h,8*g),typeof d=="number"?(l=l.h,v(d),Te(l,B,I)):(g=A(d),Te(l.h,g.i,g.h))))}),fp=ds(function(l,d,g){return l.i!==0?!1:(U(d,g,ze(l.h)),!0)},function(l,d,g){if(d=yn(d,g),d!=null&&d!=null)if(je(l.h,8*g),l=l.h,g=d,0<=g)je(l,g);else{for(d=0;9>d;d++)l.h.push(g&127|128),g>>=7;l.h.push(1)}}),cu=ds(function(l,d,g){if(l.i!==2)return!1;var T=ze(l.h)>>>0;l=l.h;var H=Ne(l,T);if(l=l.i,ue){var X=l,G;(G=_e)||(G=_e=new TextDecoder("utf-8",{fatal:!0})),l=H+T,X=H===0&&l===X.length?X:X.subarray(H,l);try{var te=G.decode(X)}catch(rt){if(ce===void 0){try{G.decode(new Uint8Array([128]))}catch{}try{G.decode(new Uint8Array([97])),ce=!0}catch{ce=!1}}throw!ce&&(_e=void 0),rt}}else{te=H,T=te+T,H=[];for(var me=null,Pe,Ve;te<T;)Pe=l[te++],128>Pe?H.push(Pe):224>Pe?te>=T?S():(Ve=l[te++],194>Pe||(Ve&192)!==128?(te--,S()):H.push((Pe&31)<<6|Ve&63)):240>Pe?te>=T-1?S():(Ve=l[te++],(Ve&192)!==128||Pe===224&&160>Ve||Pe===237&&160<=Ve||((X=l[te++])&192)!==128?(te--,S()):H.push((Pe&15)<<12|(Ve&63)<<6|X&63)):244>=Pe?te>=T-2?S():(Ve=l[te++],(Ve&192)!==128||(Pe<<28)+(Ve-144)>>30!==0||((X=l[te++])&192)!==128||((G=l[te++])&192)!==128?(te--,S()):(Pe=(Pe&7)<<18|(Ve&63)<<12|(X&63)<<6|G&63,Pe-=65536,H.push((Pe>>10&1023)+55296,(Pe&1023)+56320))):S(),8192<=H.length&&(me=K(me,H),H.length=0);te=K(me,H)}return U(d,g,te),!0},function(l,d,g){if(d=yn(d,g),d!=null){var T=!1;if(T=T===void 0?!1:T,Re){if(T&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(d))throw Error("Found an unpaired surrogate");d=(Be||(Be=new TextEncoder)).encode(d)}else{for(var H=0,X=new Uint8Array(3*d.length),G=0;G<d.length;G++){var te=d.charCodeAt(G);if(128>te)X[H++]=te;else{if(2048>te)X[H++]=te>>6|192;else{if(55296<=te&&57343>=te){if(56319>=te&&G<d.length){var me=d.charCodeAt(++G);if(56320<=me&&57343>=me){te=1024*(te-55296)+me-56320+65536,X[H++]=te>>18|240,X[H++]=te>>12&63|128,X[H++]=te>>6&63|128,X[H++]=te&63|128;continue}else G--}if(T)throw Error("Found an unpaired surrogate");te=65533}X[H++]=te>>12|224,X[H++]=te>>6&63|128}X[H++]=te&63|128}}d=H===X.length?X:X.subarray(0,H)}je(l.h,8*g+2),je(l.h,d.length),Ri(l,l.h.end()),Ri(l,d)}}),uu=ds(function(l,d,g,T,H){if(l.i!==2)return!1;d=$e(d,g,T),g=l.h.j,T=ze(l.h)>>>0;var X=l.h.h+T,G=X-g;if(0>=G&&(l.h.j=X,H(d,l,void 0,void 0,void 0),G=X-l.h.h),G)throw Error("Message parsing ended unexpectedly. Expected to read "+(T+" bytes, instead read "+(T-G)+" bytes, either the data ended unexpectedly or the message misreported its own length"));return l.h.h=X,l.h.j=g,!0},function(l,d,g,T,H){if(d=Ie(d,T,g),d!=null)for(T=0;T<d.length;T++){var X=l;je(X.h,8*g+2);var G=X.h.end();Ri(X,G),G.push(X.i),X=G,H(d[T],l),G=l;var te=X.pop();for(te=G.i+G.h.length()-te;127<te;)X.push(te&127|128),te>>>=7,G.i++;X.push(te),G.i++}});function _a(l){return function(d,g){e:{if(sn.length){var T=sn.pop();T.setOptions(g),tt(T.h,d,g),d=T}else d=new it(d,g);try{var H=ga(l),X=au(new H.P,d,H);break e}finally{H=d.h,H.i=null,H.m=!1,H.l=0,H.j=0,H.h=0,H.S=!1,d.l=-1,d.i=-1,100>sn.length&&sn.push(d)}X=void 0}return X}}function va(l){return function(){var d=new _n;lu(this,d,xa(l)),Ri(d,d.h.end());for(var g=new Uint8Array(d.i),T=d.j,H=T.length,X=0,G=0;G<H;G++){var te=T[G];g.set(te,X),X+=te.length}return d.j=[g],g}}function br(l){Et.call(this,l)}_(br,Et);var fu=[br,1,fp,2,Fn,3,cu,4,cu];br.prototype.l=va(fu);function ya(l){Et.call(this,l,-1,hp)}_(ya,Et),ya.prototype.addClassification=function(l,d){return $e(this,1,br,l,d),this};var hp=[1],hu=_a([ya,1,uu,fu]);function Mr(l){Et.call(this,l)}_(Mr,Et);var du=[Mr,1,Fn,2,Fn,3,Fn,4,Fn,5,Fn];Mr.prototype.l=va(du);function pu(l){Et.call(this,l,-1,dp)}_(pu,Et);var dp=[1],mu=_a([pu,1,uu,du]);function so(l){Et.call(this,l)}_(so,Et);var xu=[so,1,Fn,2,Fn,3,Fn,4,Fn,5,Fn,6,up],pp=_a(xu);so.prototype.l=va(xu);function gu(l,d,g){if(g=l.createShader(g===0?l.VERTEX_SHADER:l.FRAGMENT_SHADER),l.shaderSource(g,d),l.compileShader(g),!l.getShaderParameter(g,l.COMPILE_STATUS))throw Error(`Could not compile WebGL shader.

`+l.getShaderInfoLog(g));return g}function _u(l){return Ie(l,br,1).map(function(d){var g=yn(d,1);return{index:g??0,score:Je(d,2),label:yn(d,3)!=null?qe(yn(d,3),""):void 0,displayName:yn(d,4)!=null?qe(yn(d,4),""):void 0}})}function vu(l){return{x:Je(l,1),y:Je(l,2),z:Je(l,3),visibility:ge(l,4)!=null?Je(l,4):void 0}}function yu(l){return l.map(function(d){return Ie(mu(d),Mr,1).map(vu)})}function Sa(l,d){this.i=l,this.h=d,this.m=0}function Su(l,d,g){return mp(l,d),typeof l.h.canvas.transferToImageBitmap=="function"?Promise.resolve(l.h.canvas.transferToImageBitmap()):g?Promise.resolve(l.h.canvas):typeof createImageBitmap=="function"?createImageBitmap(l.h.canvas):(l.j===void 0&&(l.j=document.createElement("canvas")),new Promise(function(T){l.j.height=l.h.canvas.height,l.j.width=l.h.canvas.width,l.j.getContext("2d",{}).drawImage(l.h.canvas,0,0,l.h.canvas.width,l.h.canvas.height),T(l.j)}))}function mp(l,d){var g=l.h;if(l.s===void 0){var T=gu(g,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,0),H=gu(g,`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`,1),X=g.createProgram();if(g.attachShader(X,T),g.attachShader(X,H),g.linkProgram(X),!g.getProgramParameter(X,g.LINK_STATUS))throw Error(`Could not compile WebGL program.

`+g.getProgramInfoLog(X));T=l.s=X,g.useProgram(T),H=g.getUniformLocation(T,"sampler0"),l.l={O:g.getAttribLocation(T,"aVertex"),N:g.getAttribLocation(T,"aTex"),xa:H},l.v=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,l.v),g.enableVertexAttribArray(l.l.O),g.vertexAttribPointer(l.l.O,2,g.FLOAT,!1,0,0),g.bufferData(g.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),g.STATIC_DRAW),g.bindBuffer(g.ARRAY_BUFFER,null),l.u=g.createBuffer(),g.bindBuffer(g.ARRAY_BUFFER,l.u),g.enableVertexAttribArray(l.l.N),g.vertexAttribPointer(l.l.N,2,g.FLOAT,!1,0,0),g.bufferData(g.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),g.STATIC_DRAW),g.bindBuffer(g.ARRAY_BUFFER,null),g.uniform1i(H,0)}T=l.l,g.useProgram(l.s),g.canvas.width=d.width,g.canvas.height=d.height,g.viewport(0,0,d.width,d.height),g.activeTexture(g.TEXTURE0),l.i.bindTexture2d(d.glName),g.enableVertexAttribArray(T.O),g.bindBuffer(g.ARRAY_BUFFER,l.v),g.vertexAttribPointer(T.O,2,g.FLOAT,!1,0,0),g.enableVertexAttribArray(T.N),g.bindBuffer(g.ARRAY_BUFFER,l.u),g.vertexAttribPointer(T.N,2,g.FLOAT,!1,0,0),g.bindFramebuffer(g.DRAW_FRAMEBUFFER?g.DRAW_FRAMEBUFFER:g.FRAMEBUFFER,null),g.clearColor(0,0,0,0),g.clear(g.COLOR_BUFFER_BIT),g.colorMask(!0,!0,!0,!0),g.drawArrays(g.TRIANGLE_FAN,0,4),g.disableVertexAttribArray(T.O),g.disableVertexAttribArray(T.N),g.bindBuffer(g.ARRAY_BUFFER,null),l.i.bindTexture2d(0)}function xp(l){this.h=l}var gp=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function _p(l,d){return d+l}function bu(l,d){window[l]=d}function vp(l){var d=document.createElement("script");return d.setAttribute("src",l),d.setAttribute("crossorigin","anonymous"),new Promise(function(g){d.addEventListener("load",function(){g()},!1),d.addEventListener("error",function(){g()},!1),document.body.appendChild(d)})}function yp(){return q(function(l){switch(l.h){case 1:return l.s=2,M(l,WebAssembly.instantiate(gp),4);case 4:l.h=3,l.s=0;break;case 2:return l.s=0,l.l=null,l.return(!1);case 3:return l.return(!0)}})}function ba(l){if(this.h=l,this.listeners={},this.l={},this.L={},this.s={},this.v={},this.M=this.u=this.ga=!0,this.I=Promise.resolve(),this.fa="",this.D={},this.locateFile=l&&l.locateFile||_p,typeof window=="object")var d=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if(typeof location<"u")d=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");if(this.ha=d,l.options){d=a(Object.keys(l.options));for(var g=d.next();!g.done;g=d.next()){g=g.value;var T=l.options[g].default;T!==void 0&&(this.l[g]=typeof T=="function"?T():T)}}}n=ba.prototype,n.close=function(){return this.j&&this.j.delete(),Promise.resolve()};function Sp(l){var d,g,T,H,X,G,te,me,Pe,Ve,rt;return q(function(Ze){switch(Ze.h){case 1:return l.ga?(d=l.h.files===void 0?[]:typeof l.h.files=="function"?l.h.files(l.l):l.h.files,M(Ze,yp(),2)):Ze.return();case 2:if(g=Ze.i,typeof window=="object")return bu("createMediapipeSolutionsWasm",{locateFile:l.locateFile}),bu("createMediapipeSolutionsPackedAssets",{locateFile:l.locateFile}),G=d.filter(function(We){return We.data!==void 0}),te=d.filter(function(We){return We.data===void 0}),me=Promise.all(G.map(function(We){var st=oo(l,We.url);if(We.path!==void 0){var ht=We.path;st=st.then(function(Dt){return l.overrideFile(ht,Dt),Promise.resolve(Dt)})}return st})),Pe=Promise.all(te.map(function(We){return We.simd===void 0||We.simd&&g||!We.simd&&!g?vp(l.locateFile(We.url,l.ha)):Promise.resolve()})).then(function(){var We,st,ht;return q(function(Dt){if(Dt.h==1)return We=window.createMediapipeSolutionsWasm,st=window.createMediapipeSolutionsPackedAssets,ht=l,M(Dt,We(st),2);ht.i=Dt.i,Dt.h=0})}),Ve=(function(){return q(function(We){return l.h.graph&&l.h.graph.url?We=M(We,oo(l,l.h.graph.url),0):(We.h=0,We=void 0),We})})(),M(Ze,Promise.all([Pe,me,Ve]),7);if(typeof importScripts!="function")throw Error("solutions can only be loaded on a web page or in a web worker");return T=d.filter(function(We){return We.simd===void 0||We.simd&&g||!We.simd&&!g}).map(function(We){return l.locateFile(We.url,l.ha)}),importScripts.apply(null,c(T)),H=l,M(Ze,createMediapipeSolutionsWasm(Module),6);case 6:H.i=Ze.i,l.m=new OffscreenCanvas(1,1),l.i.canvas=l.m,X=l.i.GL.createContext(l.m,{antialias:!1,alpha:!1,ua:typeof WebGL2RenderingContext<"u"?2:1}),l.i.GL.makeContextCurrent(X),Ze.h=4;break;case 7:if(l.m=document.createElement("canvas"),rt=l.m.getContext("webgl2",{}),!rt&&(rt=l.m.getContext("webgl",{}),!rt))return alert("Failed to create WebGL canvas context when passing video frame."),Ze.return();l.K=rt,l.i.canvas=l.m,l.i.createContext(l.m,!0,!0,{});case 4:l.j=new l.i.SolutionWasm,l.ga=!1,Ze.h=0}})}function bp(l){var d,g,T,H,X,G,te,me;return q(function(Pe){if(Pe.h==1){if(l.h.graph&&l.h.graph.url&&l.fa===l.h.graph.url)return Pe.return();if(l.u=!0,!l.h.graph||!l.h.graph.url){Pe.h=2;return}return l.fa=l.h.graph.url,M(Pe,oo(l,l.h.graph.url),3)}for(Pe.h!=2&&(d=Pe.i,l.j.loadGraph(d)),g=a(Object.keys(l.D)),T=g.next();!T.done;T=g.next())H=T.value,l.j.overrideFile(H,l.D[H]);if(l.D={},l.h.listeners)for(X=a(l.h.listeners),G=X.next();!G.done;G=X.next())te=G.value,Ap(l,te);me=l.l,l.l={},l.setOptions(me),Pe.h=0})}n.reset=function(){var l=this;return q(function(d){l.j&&(l.j.reset(),l.s={},l.v={}),d.h=0})},n.setOptions=function(l,d){var g=this;if(d=d||this.h.options){for(var T=[],H=[],X={},G=a(Object.keys(l)),te=G.next();!te.done;X={X:X.X,Y:X.Y},te=G.next())if(te=te.value,!(te in this.l&&this.l[te]===l[te])){this.l[te]=l[te];var me=d[te];me!==void 0&&(me.onChange&&(X.X=me.onChange,X.Y=l[te],T.push((function(Pe){return function(){var Ve;return q(function(rt){if(rt.h==1)return M(rt,Pe.X(Pe.Y),2);Ve=rt.i,Ve===!0&&(g.u=!0),rt.h=0})}})(X))),me.graphOptionXref&&(te=Object.assign({},{calculatorName:"",calculatorIndex:0},me.graphOptionXref,{valueNumber:me.type===1?l[te]:0,valueBoolean:me.type===0?l[te]:!1,valueString:me.type===2?l[te]:""}),H.push(te)))}(T.length!==0||H.length!==0)&&(this.u=!0,this.H=(this.H===void 0?[]:this.H).concat(H),this.F=(this.F===void 0?[]:this.F).concat(T))}};function Mp(l){var d,g,T,H,X,G,te;return q(function(me){switch(me.h){case 1:if(!l.u)return me.return();if(!l.F){me.h=2;break}d=a(l.F),g=d.next();case 3:if(g.done){me.h=5;break}return T=g.value,M(me,T(),4);case 4:g=d.next(),me.h=3;break;case 5:l.F=void 0;case 2:if(l.H){for(H=new l.i.GraphOptionChangeRequestList,X=a(l.H),G=X.next();!G.done;G=X.next())te=G.value,H.push_back(te);l.j.changeOptions(H),H.delete(),l.H=void 0}l.u=!1,me.h=0}})}n.initialize=function(){var l=this;return q(function(d){return d.h==1?M(d,Sp(l),2):d.h!=3?M(d,bp(l),3):M(d,Mp(l),0)})};function oo(l,d){var g,T;return q(function(H){return d in l.L?H.return(l.L[d]):(g=l.locateFile(d,""),T=fetch(g).then(function(X){return X.arrayBuffer()}),l.L[d]=T,H.return(T))})}n.overrideFile=function(l,d){this.j?this.j.overrideFile(l,d):this.D[l]=d},n.clearOverriddenFiles=function(){this.D={},this.j&&this.j.clearOverriddenFiles()},n.send=function(l,d){var g=this,T,H,X,G,te,me,Pe,Ve,rt;return q(function(Ze){switch(Ze.h){case 1:return g.h.inputs?(T=1e3*(d??performance.now()),M(Ze,g.I,2)):Ze.return();case 2:return M(Ze,g.initialize(),3);case 3:for(H=new g.i.PacketDataList,X=a(Object.keys(l)),G=X.next();!G.done;G=X.next())if(te=G.value,me=g.h.inputs[te]){e:{var We=l[te];switch(me.type){case"video":var st=g.s[me.stream];if(st||(st=new Sa(g.i,g.K),g.s[me.stream]=st),st.m===0&&(st.m=st.i.createTexture()),typeof HTMLVideoElement<"u"&&We instanceof HTMLVideoElement)var ht=We.videoWidth,Dt=We.videoHeight;else typeof HTMLImageElement<"u"&&We instanceof HTMLImageElement?(ht=We.naturalWidth,Dt=We.naturalHeight):(ht=We.width,Dt=We.height);Dt={glName:st.m,width:ht,height:Dt},ht=st.h,ht.canvas.width=Dt.width,ht.canvas.height=Dt.height,ht.activeTexture(ht.TEXTURE0),st.i.bindTexture2d(st.m),ht.texImage2D(ht.TEXTURE_2D,0,ht.RGBA,ht.RGBA,ht.UNSIGNED_BYTE,We),st.i.bindTexture2d(0),st=Dt;break e;case"detections":for(st=g.s[me.stream],st||(st=new xp(g.i),g.s[me.stream]=st),st.data||(st.data=new st.h.DetectionListData),st.data.reset(We.length),Dt=0;Dt<We.length;++Dt){ht=We[Dt];var Pt=st.data,Kt=Pt.setBoundingBox,Pn=Dt,dn=ht.la,_t=new so;if(Oe(_t,1,dn.ra),Oe(_t,2,dn.sa),Oe(_t,3,dn.height),Oe(_t,4,dn.width),Oe(_t,5,dn.rotation),U(_t,6,dn.pa),dn=_t.l(),Kt.call(Pt,Pn,dn),ht.ea)for(Pt=0;Pt<ht.ea.length;++Pt){_t=ht.ea[Pt],Kt=st.data,Pn=Kt.addNormalizedLandmark,dn=Dt,_t=Object.assign({},_t,{visibility:_t.visibility?_t.visibility:0});var Jt=new Mr;Oe(Jt,1,_t.x),Oe(Jt,2,_t.y),Oe(Jt,3,_t.z),_t.visibility&&Oe(Jt,4,_t.visibility),_t=Jt.l(),Pn.call(Kt,dn,_t)}if(ht.ba)for(Pt=0;Pt<ht.ba.length;++Pt)Kt=st.data,Pn=Kt.addClassification,dn=Dt,_t=ht.ba[Pt],Jt=new br,Oe(Jt,2,_t.score),_t.index&&U(Jt,1,_t.index),_t.label&&U(Jt,3,_t.label),_t.displayName&&U(Jt,4,_t.displayName),_t=Jt.l(),Pn.call(Kt,dn,_t)}st=st.data;break e;default:st={}}}switch(Pe=st,Ve=me.stream,me.type){case"video":H.pushTexture2d(Object.assign({},Pe,{stream:Ve,timestamp:T}));break;case"detections":rt=Pe,rt.stream=Ve,rt.timestamp=T,H.pushDetectionList(rt);break;default:throw Error("Unknown input config type: '"+me.type+"'")}}return g.j.send(H),M(Ze,g.I,4);case 4:H.delete(),Ze.h=0}})};function Ep(l,d,g){var T,H,X,G,te,me,Pe,Ve,rt,Ze,We,st,ht,Dt;return q(function(Pt){switch(Pt.h){case 1:if(!g)return Pt.return(d);for(T={},H=0,X=a(Object.keys(g)),G=X.next();!G.done;G=X.next())te=G.value,me=g[te],typeof me!="string"&&me.type==="texture"&&d[me.stream]!==void 0&&++H;1<H&&(l.M=!1),Pe=a(Object.keys(g)),G=Pe.next();case 2:if(G.done){Pt.h=4;break}if(Ve=G.value,rt=g[Ve],typeof rt=="string")return ht=T,Dt=Ve,M(Pt,Tp(l,Ve,d[rt]),14);if(Ze=d[rt.stream],rt.type==="detection_list"){if(Ze){for(var Kt=Ze.getRectList(),Pn=Ze.getLandmarksList(),dn=Ze.getClassificationsList(),_t=[],Jt=0;Jt<Kt.size();++Jt){var Li=pp(Kt.get(Jt)),wp=Je(Li,1),Cp=Je(Li,2),Rp=Je(Li,3),Pp=Je(Li,4),Lp=Je(Li,5,0),ao=void 0;ao=ao===void 0?0:ao,Li={la:{ra:wp,sa:Cp,height:Rp,width:Pp,rotation:Lp,pa:qe(yn(Li,6),ao)},ea:Ie(mu(Pn.get(Jt)),Mr,1).map(vu),ba:_u(hu(dn.get(Jt)))},_t.push(Li)}Kt=_t}else Kt=[];T[Ve]=Kt,Pt.h=7;break}if(rt.type==="proto_list"){if(Ze){for(Kt=Array(Ze.size()),Pn=0;Pn<Ze.size();Pn++)Kt[Pn]=Ze.get(Pn);Ze.delete()}else Kt=[];T[Ve]=Kt,Pt.h=7;break}if(Ze===void 0){Pt.h=3;break}if(rt.type==="float_list"){T[Ve]=Ze,Pt.h=7;break}if(rt.type==="proto"){T[Ve]=Ze,Pt.h=7;break}if(rt.type!=="texture")throw Error("Unknown output config type: '"+rt.type+"'");return We=l.v[Ve],We||(We=new Sa(l.i,l.K),l.v[Ve]=We),M(Pt,Su(We,Ze,l.M),13);case 13:st=Pt.i,T[Ve]=st;case 7:rt.transform&&T[Ve]&&(T[Ve]=rt.transform(T[Ve])),Pt.h=3;break;case 14:ht[Dt]=Pt.i;case 3:G=Pe.next(),Pt.h=2;break;case 4:return Pt.return(T)}})}function Tp(l,d,g){var T;return q(function(H){return typeof g=="number"||g instanceof Uint8Array||g instanceof l.i.Uint8BlobList?H.return(g):g instanceof l.i.Texture2dDataOut?(T=l.v[d],T||(T=new Sa(l.i,l.K),l.v[d]=T),H.return(Su(T,g,l.M))):H.return(void 0)})}function Ap(l,d){for(var g=d.name||"$",T=[].concat(c(d.wants)),H=new l.i.StringList,X=a(d.wants),G=X.next();!G.done;G=X.next())H.push_back(G.value);X=l.i.PacketListener.implement({onResults:function(te){for(var me={},Pe=0;Pe<d.wants.length;++Pe)me[T[Pe]]=te.get(Pe);var Ve=l.listeners[g];Ve&&(l.I=Ep(l,me,d.outs).then(function(rt){rt=Ve(rt);for(var Ze=0;Ze<d.wants.length;++Ze){var We=me[T[Ze]];typeof We=="object"&&We.hasOwnProperty&&We.hasOwnProperty("delete")&&We.delete()}rt&&(l.I=rt)}))}}),l.j.attachMultiListener(H,X),H.delete()}n.onResults=function(l,d){this.listeners[d||"$"]=l},de("Solution",ba),de("OptionType",{BOOL:0,NUMBER:1,ta:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Mu(l){return l===void 0&&(l=0),l===1?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}function Eu(l){var d=this;l=l||{},this.h=new ba({locateFile:l.locateFile,files:function(g){return[{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:Mu(g.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:yu},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:yu},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(g){return g.map(function(T){return _u(hu(T))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:typeof window!="object"||window.navigator===void 0?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},onChange:function(g){var T,H,X;return q(function(G){return G.h==1?(T=Mu(g),H="third_party/mediapipe/modules/hand_landmark/"+T,M(G,oo(d.h,T),2)):(X=G.i,d.h.overrideFile(H,X),G.return(!0))})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",fieldName:"threshold"}}}})}n=Eu.prototype,n.close=function(){return this.h.close(),Promise.resolve()},n.onResults=function(l){this.h.onResults(l)},n.initialize=function(){var l=this;return q(function(d){return M(d,l.h.initialize(),0)})},n.reset=function(){this.h.reset()},n.send=function(l){var d=this;return q(function(g){return M(g,d.h.send(l),0)})},n.setOptions=function(l){this.h.setOptions(l)},de("Hands",Eu),de("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]),de("VERSION","0.4.1675469240")}).call(gl)),gl}var rM=iM();const sM=En;class ru extends iu{constructor(e){super(e),this.defaultDPI=90,this.defaultUnit="px"}load(e,t,i,r){const s=this,o=new l_(s.manager);o.setPath(s.path),o.setRequestHeader(s.requestHeader),o.setWithCredentials(s.withCredentials),o.load(e,function(a){try{t(s.parse(a))}catch(c){r?r(c):console.error(c),s.manager.itemError(e)}},i,r)}parse(e){const t=this;function i(ne,$){if(ne.nodeType!==1)return;const P=M(ne);let w=!1,se=null;switch(ne.nodeName){case"svg":$=y(ne,$);break;case"style":s(ne);break;case"g":$=y(ne,$);break;case"path":$=y(ne,$),ne.hasAttribute("d")&&(se=r(ne));break;case"rect":$=y(ne,$),se=c(ne);break;case"polygon":$=y(ne,$),se=u(ne);break;case"polyline":$=y(ne,$),se=f(ne);break;case"circle":$=y(ne,$),se=h(ne);break;case"ellipse":$=y(ne,$),se=m(ne);break;case"line":$=y(ne,$),se=x(ne);break;case"defs":w=!0;break;case"use":$=y(ne,$);const be=(ne.getAttributeNS("http://www.w3.org/1999/xlink","href")||"").substring(1),F=ne.viewportElement.getElementById(be);F?i(F,$):console.warn("SVGLoader: 'use node' references non-existent node id: "+be);break}se&&($.fill!==void 0&&$.fill!=="none"&&se.color.setStyle($.fill,sM),N(se,Ue),ee.push(se),se.userData={node:ne,style:$});const ve=ne.childNodes;for(let re=0;re<ve.length;re++){const be=ve[re];w&&be.nodeName!=="style"&&be.nodeName!=="defs"||i(be,$)}P&&(pe.pop(),pe.length>0?Ue.copy(pe[pe.length-1]):Ue.identity())}function r(ne){const $=new sr,P=new Ae,w=new Ae,se=new Ae;let ve=!0,re=!1;const be=ne.getAttribute("d");if(be===""||be==="none")return null;const F=be.match(/[a-df-z][^a-df-z]*/ig);for(let B=0,I=F.length;B<I;B++){const v=F[B],k=v.charAt(0),W=v.slice(1).trim();ve===!0&&(re=!0,ve=!1);let O;switch(k){case"M":O=_(W);for(let A=0,Q=O.length;A<Q;A+=2)P.x=O[A+0],P.y=O[A+1],w.x=P.x,w.y=P.y,A===0?$.moveTo(P.x,P.y):$.lineTo(P.x,P.y),A===0&&se.copy(P);break;case"H":O=_(W);for(let A=0,Q=O.length;A<Q;A++)P.x=O[A],w.x=P.x,w.y=P.y,$.lineTo(P.x,P.y),A===0&&re===!0&&se.copy(P);break;case"V":O=_(W);for(let A=0,Q=O.length;A<Q;A++)P.y=O[A],w.x=P.x,w.y=P.y,$.lineTo(P.x,P.y),A===0&&re===!0&&se.copy(P);break;case"L":O=_(W);for(let A=0,Q=O.length;A<Q;A+=2)P.x=O[A+0],P.y=O[A+1],w.x=P.x,w.y=P.y,$.lineTo(P.x,P.y),A===0&&re===!0&&se.copy(P);break;case"C":O=_(W);for(let A=0,Q=O.length;A<Q;A+=6)$.bezierCurveTo(O[A+0],O[A+1],O[A+2],O[A+3],O[A+4],O[A+5]),w.x=O[A+2],w.y=O[A+3],P.x=O[A+4],P.y=O[A+5],A===0&&re===!0&&se.copy(P);break;case"S":O=_(W);for(let A=0,Q=O.length;A<Q;A+=4)$.bezierCurveTo(E(P.x,w.x),E(P.y,w.y),O[A+0],O[A+1],O[A+2],O[A+3]),w.x=O[A+0],w.y=O[A+1],P.x=O[A+2],P.y=O[A+3],A===0&&re===!0&&se.copy(P);break;case"Q":O=_(W);for(let A=0,Q=O.length;A<Q;A+=4)$.quadraticCurveTo(O[A+0],O[A+1],O[A+2],O[A+3]),w.x=O[A+0],w.y=O[A+1],P.x=O[A+2],P.y=O[A+3],A===0&&re===!0&&se.copy(P);break;case"T":O=_(W);for(let A=0,Q=O.length;A<Q;A+=2){const Z=E(P.x,w.x),ye=E(P.y,w.y);$.quadraticCurveTo(Z,ye,O[A+0],O[A+1]),w.x=Z,w.y=ye,P.x=O[A+0],P.y=O[A+1],A===0&&re===!0&&se.copy(P)}break;case"A":O=_(W,[3,4],7);for(let A=0,Q=O.length;A<Q;A+=7){if(O[A+5]==P.x&&O[A+6]==P.y)continue;const Z=P.clone();P.x=O[A+5],P.y=O[A+6],w.x=P.x,w.y=P.y,o($,O[A],O[A+1],O[A+2],O[A+3],O[A+4],Z,P),A===0&&re===!0&&se.copy(P)}break;case"m":O=_(W);for(let A=0,Q=O.length;A<Q;A+=2)P.x+=O[A+0],P.y+=O[A+1],w.x=P.x,w.y=P.y,A===0?$.moveTo(P.x,P.y):$.lineTo(P.x,P.y),A===0&&se.copy(P);break;case"h":O=_(W);for(let A=0,Q=O.length;A<Q;A++)P.x+=O[A],w.x=P.x,w.y=P.y,$.lineTo(P.x,P.y),A===0&&re===!0&&se.copy(P);break;case"v":O=_(W);for(let A=0,Q=O.length;A<Q;A++)P.y+=O[A],w.x=P.x,w.y=P.y,$.lineTo(P.x,P.y),A===0&&re===!0&&se.copy(P);break;case"l":O=_(W);for(let A=0,Q=O.length;A<Q;A+=2)P.x+=O[A+0],P.y+=O[A+1],w.x=P.x,w.y=P.y,$.lineTo(P.x,P.y),A===0&&re===!0&&se.copy(P);break;case"c":O=_(W);for(let A=0,Q=O.length;A<Q;A+=6)$.bezierCurveTo(P.x+O[A+0],P.y+O[A+1],P.x+O[A+2],P.y+O[A+3],P.x+O[A+4],P.y+O[A+5]),w.x=P.x+O[A+2],w.y=P.y+O[A+3],P.x+=O[A+4],P.y+=O[A+5],A===0&&re===!0&&se.copy(P);break;case"s":O=_(W);for(let A=0,Q=O.length;A<Q;A+=4)$.bezierCurveTo(E(P.x,w.x),E(P.y,w.y),P.x+O[A+0],P.y+O[A+1],P.x+O[A+2],P.y+O[A+3]),w.x=P.x+O[A+0],w.y=P.y+O[A+1],P.x+=O[A+2],P.y+=O[A+3],A===0&&re===!0&&se.copy(P);break;case"q":O=_(W);for(let A=0,Q=O.length;A<Q;A+=4)$.quadraticCurveTo(P.x+O[A+0],P.y+O[A+1],P.x+O[A+2],P.y+O[A+3]),w.x=P.x+O[A+0],w.y=P.y+O[A+1],P.x+=O[A+2],P.y+=O[A+3],A===0&&re===!0&&se.copy(P);break;case"t":O=_(W);for(let A=0,Q=O.length;A<Q;A+=2){const Z=E(P.x,w.x),ye=E(P.y,w.y);$.quadraticCurveTo(Z,ye,P.x+O[A+0],P.y+O[A+1]),w.x=Z,w.y=ye,P.x=P.x+O[A+0],P.y=P.y+O[A+1],A===0&&re===!0&&se.copy(P)}break;case"a":O=_(W,[3,4],7);for(let A=0,Q=O.length;A<Q;A+=7){if(O[A+5]==0&&O[A+6]==0)continue;const Z=P.clone();P.x+=O[A+5],P.y+=O[A+6],w.x=P.x,w.y=P.y,o($,O[A],O[A+1],O[A+2],O[A+3],O[A+4],Z,P),A===0&&re===!0&&se.copy(P)}break;case"Z":case"z":$.currentPath.autoClose=!0,$.currentPath.curves.length>0&&(P.copy(se),$.currentPath.currentPoint.copy(P),ve=!0);break;default:console.warn(v)}re=!1}return $}function s(ne){if(!(!ne.sheet||!ne.sheet.cssRules||!ne.sheet.cssRules.length))for(let $=0;$<ne.sheet.cssRules.length;$++){const P=ne.sheet.cssRules[$];if(P.type!==1)continue;const w=P.selectorText.split(/,/gm).filter(Boolean).map(se=>se.trim());for(let se=0;se<w.length;se++){const ve=Object.fromEntries(Object.entries(P.style).filter(([,re])=>re!==""));fe[w[se]]=Object.assign(fe[w[se]]||{},ve)}}}function o(ne,$,P,w,se,ve,re,be){if($==0||P==0){ne.lineTo(be.x,be.y);return}w=w*Math.PI/180,$=Math.abs($),P=Math.abs(P);const F=(re.x-be.x)/2,B=(re.y-be.y)/2,I=Math.cos(w)*F+Math.sin(w)*B,v=-Math.sin(w)*F+Math.cos(w)*B;let k=$*$,W=P*P;const O=I*I,A=v*v,Q=O/k+A/W;if(Q>1){const Re=Math.sqrt(Q);$=Re*$,P=Re*P,k=$*$,W=P*P}const Z=k*A+W*O,ye=(k*W-Z)/Z;let R=Math.sqrt(Math.max(0,ye));se===ve&&(R=-R);const S=R*$*v/P,K=-R*P*I/$,ce=Math.cos(w)*S-Math.sin(w)*K+(re.x+be.x)/2,_e=Math.sin(w)*S+Math.cos(w)*K+(re.y+be.y)/2,ue=a(1,0,(I-S)/$,(v-K)/P),Be=a((I-S)/$,(v-K)/P,(-I-S)/$,(-v-K)/P)%(Math.PI*2);ne.currentPath.absellipse(ce,_e,$,P,ue,ue+Be,ve===0,w)}function a(ne,$,P,w){const se=ne*P+$*w,ve=Math.sqrt(ne*ne+$*$)*Math.sqrt(P*P+w*w);let re=Math.acos(Math.max(-1,Math.min(1,se/ve)));return ne*w-$*P<0&&(re=-re),re}function c(ne){const $=b(ne.getAttribute("x")||0),P=b(ne.getAttribute("y")||0),w=b(ne.getAttribute("rx")||ne.getAttribute("ry")||0),se=b(ne.getAttribute("ry")||ne.getAttribute("rx")||0),ve=b(ne.getAttribute("width")),re=b(ne.getAttribute("height")),be=1-.551915024494,F=new sr;return F.moveTo($+w,P),F.lineTo($+ve-w,P),(w!==0||se!==0)&&F.bezierCurveTo($+ve-w*be,P,$+ve,P+se*be,$+ve,P+se),F.lineTo($+ve,P+re-se),(w!==0||se!==0)&&F.bezierCurveTo($+ve,P+re-se*be,$+ve-w*be,P+re,$+ve-w,P+re),F.lineTo($+w,P+re),(w!==0||se!==0)&&F.bezierCurveTo($+w*be,P+re,$,P+re-se*be,$,P+re-se),F.lineTo($,P+se),(w!==0||se!==0)&&F.bezierCurveTo($,P+se*be,$+w*be,P,$+w,P),F}function u(ne){function $(ve,re,be){const F=b(re),B=b(be);se===0?w.moveTo(F,B):w.lineTo(F,B),se++}const P=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,w=new sr;let se=0;return ne.getAttribute("points").replace(P,$),w.currentPath.autoClose=!0,w}function f(ne){function $(ve,re,be){const F=b(re),B=b(be);se===0?w.moveTo(F,B):w.lineTo(F,B),se++}const P=/([+-]?\d*\.?\d+(?:e[+-]?\d+)?)(?:,|\s)([+-]?\d*\.?\d+(?:e[+-]?\d+)?)/g,w=new sr;let se=0;return ne.getAttribute("points").replace(P,$),w.currentPath.autoClose=!1,w}function h(ne){const $=b(ne.getAttribute("cx")||0),P=b(ne.getAttribute("cy")||0),w=b(ne.getAttribute("r")||0),se=new $r;se.absarc($,P,w,0,Math.PI*2);const ve=new sr;return ve.subPaths.push(se),ve}function m(ne){const $=b(ne.getAttribute("cx")||0),P=b(ne.getAttribute("cy")||0),w=b(ne.getAttribute("rx")||0),se=b(ne.getAttribute("ry")||0),ve=new $r;ve.absellipse($,P,w,se,0,Math.PI*2);const re=new sr;return re.subPaths.push(ve),re}function x(ne){const $=b(ne.getAttribute("x1")||0),P=b(ne.getAttribute("y1")||0),w=b(ne.getAttribute("x2")||0),se=b(ne.getAttribute("y2")||0),ve=new sr;return ve.moveTo($,P),ve.lineTo(w,se),ve.currentPath.autoClose=!1,ve}function y(ne,$){$=Object.assign({},$);let P={};if(ne.hasAttribute("class")){const re=ne.getAttribute("class").split(/\s/).filter(Boolean).map(be=>be.trim());for(let be=0;be<re.length;be++)P=Object.assign(P,fe["."+re[be]])}ne.hasAttribute("id")&&(P=Object.assign(P,fe["#"+ne.getAttribute("id")]));function w(re,be,F){F===void 0&&(F=function(I){return I.startsWith("url")&&console.warn("SVGLoader: url access in attributes is not implemented."),I}),ne.hasAttribute(re)&&($[be]=F(ne.getAttribute(re))),P[re]&&($[be]=F(P[re])),ne.style&&ne.style[re]!==""&&($[be]=F(ne.style[re]))}function se(re){return Math.max(0,Math.min(1,b(re)))}function ve(re){return Math.max(0,b(re))}return w("fill","fill"),w("fill-opacity","fillOpacity",se),w("fill-rule","fillRule"),w("opacity","opacity",se),w("stroke","stroke"),w("stroke-opacity","strokeOpacity",se),w("stroke-width","strokeWidth",ve),w("stroke-linejoin","strokeLineJoin"),w("stroke-linecap","strokeLineCap"),w("stroke-miterlimit","strokeMiterLimit",ve),w("visibility","visibility"),$}function E(ne,$){return ne-($-ne)}function _(ne,$,P){if(typeof ne!="string")throw new TypeError("Invalid input: "+typeof ne);const w={WHITESPACE:/[ \t\r\n]/,DIGIT:/[\d]/,SIGN:/[-+]/,POINT:/\./,COMMA:/,/,EXP:/e/i,FLAGS:/[01]/},se=0,ve=1,re=2,be=3;let F=se,B=!0,I="",v="";const k=[];function W(Z,ye,R){const S=new SyntaxError('Unexpected character "'+Z+'" at index '+ye+".");throw S.partial=R,S}function O(){I!==""&&(v===""?k.push(Number(I)):k.push(Number(I)*Math.pow(10,Number(v)))),I="",v=""}let A;const Q=ne.length;for(let Z=0;Z<Q;Z++){if(A=ne[Z],Array.isArray($)&&$.includes(k.length%P)&&w.FLAGS.test(A)){F=ve,I=A,O();continue}if(F===se){if(w.WHITESPACE.test(A))continue;if(w.DIGIT.test(A)||w.SIGN.test(A)){F=ve,I=A;continue}if(w.POINT.test(A)){F=re,I=A;continue}w.COMMA.test(A)&&(B&&W(A,Z,k),B=!0)}if(F===ve){if(w.DIGIT.test(A)){I+=A;continue}if(w.POINT.test(A)){I+=A,F=re;continue}if(w.EXP.test(A)){F=be;continue}w.SIGN.test(A)&&I.length===1&&w.SIGN.test(I[0])&&W(A,Z,k)}if(F===re){if(w.DIGIT.test(A)){I+=A;continue}if(w.EXP.test(A)){F=be;continue}w.POINT.test(A)&&I[I.length-1]==="."&&W(A,Z,k)}if(F===be){if(w.DIGIT.test(A)){v+=A;continue}if(w.SIGN.test(A)){if(v===""){v+=A;continue}v.length===1&&w.SIGN.test(v)&&W(A,Z,k)}}w.WHITESPACE.test(A)?(O(),F=se,B=!1):w.COMMA.test(A)?(O(),F=se,B=!0):w.SIGN.test(A)?(O(),F=ve,I=A):w.POINT.test(A)?(O(),F=re,I=A):W(A,Z,k)}return O(),k}const p=["mm","cm","in","pt","pc","px"],L={mm:{mm:1,cm:.1,in:1/25.4,pt:72/25.4,pc:6/25.4,px:-1},cm:{mm:10,cm:1,in:1/2.54,pt:72/2.54,pc:6/2.54,px:-1},in:{mm:25.4,cm:2.54,in:1,pt:72,pc:6,px:-1},pt:{mm:25.4/72,cm:2.54/72,in:1/72,pt:1,pc:6/72,px:-1},pc:{mm:25.4/6,cm:2.54/6,in:1/6,pt:72/6,pc:1,px:-1},px:{px:1}};function b(ne){let $="px";if(typeof ne=="string"||ne instanceof String)for(let w=0,se=p.length;w<se;w++){const ve=p[w];if(ne.endsWith(ve)){$=ve,ne=ne.substring(0,ne.length-ve.length);break}}let P;return $==="px"&&t.defaultUnit!=="px"?P=L.in[t.defaultUnit]/t.defaultDPI:(P=L[$][t.defaultUnit],P<0&&(P=L[$].in*t.defaultDPI)),P*parseFloat(ne)}function M(ne){if(!(ne.hasAttribute("transform")||ne.nodeName==="use"&&(ne.hasAttribute("x")||ne.hasAttribute("y"))))return null;const $=z(ne);return pe.length>0&&$.premultiply(pe[pe.length-1]),Ue.copy($),pe.push($),$}function z(ne){const $=new ot,P=de;if(ne.nodeName==="use"&&(ne.hasAttribute("x")||ne.hasAttribute("y"))){const w=b(ne.getAttribute("x")||0),se=b(ne.getAttribute("y")||0);$.translate(w,se)}if(ne.hasAttribute("transform")){const w=ne.getAttribute("transform").split(")");for(let se=w.length-1;se>=0;se--){const ve=w[se].trim();if(ve==="")continue;const re=ve.indexOf("("),be=ve.length;if(re>0&&re<be){const F=ve.slice(0,re),B=_(ve.slice(re+1));switch(P.identity(),F){case"translate":if(B.length>=1){const I=B[0];let v=0;B.length>=2&&(v=B[1]),P.translate(I,v)}break;case"rotate":if(B.length>=1){let I=0,v=0,k=0;I=B[0]*Math.PI/180,B.length>=3&&(v=B[1],k=B[2]),he.makeTranslation(-v,-k),ae.makeRotation(I),Y.multiplyMatrices(ae,he),he.makeTranslation(v,k),P.multiplyMatrices(he,Y)}break;case"scale":if(B.length>=1){const I=B[0];let v=I;B.length>=2&&(v=B[1]),P.scale(I,v)}break;case"skewX":B.length===1&&P.set(1,Math.tan(B[0]*Math.PI/180),0,0,1,0,0,0,1);break;case"skewY":B.length===1&&P.set(1,0,0,Math.tan(B[0]*Math.PI/180),1,0,0,0,1);break;case"matrix":B.length===6&&P.set(B[0],B[2],B[4],B[1],B[3],B[5],0,0,1);break}}$.premultiply(P)}}return $}function N(ne,$){function P(re){Ee.set(re.x,re.y,1).applyMatrix3($),re.set(Ee.x,Ee.y)}function w(re){const be=re.xRadius,F=re.yRadius,B=Math.cos(re.aRotation),I=Math.sin(re.aRotation),v=new ie(be*B,be*I,0),k=new ie(-F*I,F*B,0),W=v.applyMatrix3($),O=k.applyMatrix3($),A=de.set(W.x,O.x,0,W.y,O.y,0,0,0,1),Q=he.copy(A).invert(),R=ae.copy(Q).transpose().multiply(Q).elements,S=q(R[0],R[1],R[4]),K=Math.sqrt(S.rt1),ce=Math.sqrt(S.rt2);if(re.xRadius=1/K,re.yRadius=1/ce,re.aRotation=Math.atan2(S.sn,S.cs),!((re.aEndAngle-re.aStartAngle)%(2*Math.PI)<Number.EPSILON)){const ue=he.set(K,0,0,0,ce,0,0,0,1),Be=ae.set(S.cs,S.sn,0,-S.sn,S.cs,0,0,0,1),Re=ue.multiply(Be).multiply(A),Xe=He=>{const{x:Me,y:De}=new ie(Math.cos(He),Math.sin(He),0).applyMatrix3(Re);return Math.atan2(De,Me)};re.aStartAngle=Xe(re.aStartAngle),re.aEndAngle=Xe(re.aEndAngle),V($)&&(re.aClockwise=!re.aClockwise)}}function se(re){const be=D($),F=C($);re.xRadius*=be,re.yRadius*=F;const B=be>Number.EPSILON?Math.atan2($.elements[1],$.elements[0]):Math.atan2(-$.elements[3],$.elements[4]);re.aRotation+=B,V($)&&(re.aStartAngle*=-1,re.aEndAngle*=-1,re.aClockwise=!re.aClockwise)}const ve=ne.subPaths;for(let re=0,be=ve.length;re<be;re++){const B=ve[re].curves;for(let I=0;I<B.length;I++){const v=B[I];v.isLineCurve?(P(v.v1),P(v.v2)):v.isCubicBezierCurve?(P(v.v0),P(v.v1),P(v.v2),P(v.v3)):v.isQuadraticBezierCurve?(P(v.v0),P(v.v1),P(v.v2)):v.isEllipseCurve&&(Se.set(v.aX,v.aY),P(Se),v.aX=Se.x,v.aY=Se.y,j($)?w(v):se(v))}}}function V(ne){const $=ne.elements;return $[0]*$[4]-$[1]*$[3]<0}function j(ne){const $=ne.elements,P=$[0]*$[3]+$[1]*$[4];if(P===0)return!1;const w=D(ne),se=C(ne);return Math.abs(P/(w*se))>Number.EPSILON}function D(ne){const $=ne.elements;return Math.sqrt($[0]*$[0]+$[1]*$[1])}function C(ne){const $=ne.elements;return Math.sqrt($[3]*$[3]+$[4]*$[4])}function q(ne,$,P){let w,se,ve,re,be;const F=ne+P,B=ne-P,I=Math.sqrt(B*B+4*$*$);return F>0?(w=.5*(F+I),be=1/w,se=ne*be*P-$*be*$):F<0?se=.5*(F-I):(w=.5*I,se=-.5*I),B>0?ve=B+I:ve=B-I,Math.abs(ve)>2*Math.abs($)?(be=-2*$/ve,re=1/Math.sqrt(1+be*be),ve=be*re):Math.abs($)===0?(ve=1,re=0):(be=-.5*ve/$,ve=1/Math.sqrt(1+be*be),re=be*ve),B>0&&(be=ve,ve=-re,re=be),{rt1:w,rt2:se,cs:ve,sn:re}}const ee=[],fe={},pe=[],de=new ot,he=new ot,ae=new ot,Y=new ot,Se=new Ae,Ee=new ie,Ue=new ot,we=new DOMParser().parseFromString(e,"image/svg+xml");return i(we.documentElement,{fill:"#000",fillOpacity:1,strokeOpacity:1,strokeWidth:1,strokeLineJoin:"miter",strokeLineCap:"butt",strokeMiterLimit:4}),{paths:ee,xml:we.documentElement}}static createShapes(e){const i={ORIGIN:0,DESTINATION:1,BETWEEN:2,LEFT:3,RIGHT:4,BEHIND:5,BEYOND:6},r={loc:i.ORIGIN,t:0};function s(E,_,p,L){const b=E.x,M=_.x,z=p.x,N=L.x,V=E.y,j=_.y,D=p.y,C=L.y,q=(N-z)*(V-D)-(C-D)*(b-z),ee=(M-b)*(V-D)-(j-V)*(b-z),fe=(C-D)*(M-b)-(N-z)*(j-V),pe=q/fe,de=ee/fe;if(fe===0&&q!==0||pe<=0||pe>=1||de<0||de>1)return null;if(q===0&&fe===0){for(let he=0;he<2;he++)if(o(he===0?p:L,E,_),r.loc==i.ORIGIN){const ae=he===0?p:L;return{x:ae.x,y:ae.y,t:r.t}}else if(r.loc==i.BETWEEN){const ae=+(b+r.t*(M-b)).toPrecision(10),Y=+(V+r.t*(j-V)).toPrecision(10);return{x:ae,y:Y,t:r.t}}return null}else{for(let Y=0;Y<2;Y++)if(o(Y===0?p:L,E,_),r.loc==i.ORIGIN){const Se=Y===0?p:L;return{x:Se.x,y:Se.y,t:r.t}}const he=+(b+pe*(M-b)).toPrecision(10),ae=+(V+pe*(j-V)).toPrecision(10);return{x:he,y:ae,t:pe}}}function o(E,_,p){const L=p.x-_.x,b=p.y-_.y,M=E.x-_.x,z=E.y-_.y,N=L*z-M*b;if(E.x===_.x&&E.y===_.y){r.loc=i.ORIGIN,r.t=0;return}if(E.x===p.x&&E.y===p.y){r.loc=i.DESTINATION,r.t=1;return}if(N<-Number.EPSILON){r.loc=i.LEFT;return}if(N>Number.EPSILON){r.loc=i.RIGHT;return}if(L*M<0||b*z<0){r.loc=i.BEHIND;return}if(Math.sqrt(L*L+b*b)<Math.sqrt(M*M+z*z)){r.loc=i.BEYOND;return}let V;L!==0?V=M/L:V=z/b,r.loc=i.BETWEEN,r.t=V}function a(E,_){const p=[],L=[];for(let b=1;b<E.length;b++){const M=E[b-1],z=E[b];for(let N=1;N<_.length;N++){const V=_[N-1],j=_[N],D=s(M,z,V,j);D!==null&&p.find(C=>C.t<=D.t+Number.EPSILON&&C.t>=D.t-Number.EPSILON)===void 0&&(p.push(D),L.push(new Ae(D.x,D.y)))}}return L}function c(E,_,p){const L=new Ae;_.getCenter(L);const b=[];return p.forEach(M=>{M.boundingBox.containsPoint(L)&&a(E,M.points).forEach(N=>{b.push({identifier:M.identifier,isCW:M.isCW,point:N})})}),b.sort((M,z)=>M.point.x-z.point.x),b}function u(E,_,p,L,b){(b==null||b==="")&&(b="nonzero");const M=new Ae;E.boundingBox.getCenter(M);const z=[new Ae(p,M.y),new Ae(L,M.y)],N=c(z,E.boundingBox,_);N.sort((ee,fe)=>ee.point.x-fe.point.x);const V=[],j=[];N.forEach(ee=>{ee.identifier===E.identifier?V.push(ee):j.push(ee)});const D=V[0].point.x,C=[];let q=0;for(;q<j.length&&j[q].point.x<D;)C.length>0&&C[C.length-1]===j[q].identifier?C.pop():C.push(j[q].identifier),q++;if(C.push(E.identifier),b==="evenodd"){const ee=C.length%2===0,fe=C[C.length-2];return{identifier:E.identifier,isHole:ee,for:fe}}else if(b==="nonzero"){let ee=!0,fe=null,pe=null;for(let de=0;de<C.length;de++){const he=C[de];ee?(pe=_[he].isCW,ee=!1,fe=he):pe!==_[he].isCW&&(pe=_[he].isCW,ee=!0)}return{identifier:E.identifier,isHole:ee,for:fe}}else console.warn('fill-rule: "'+b+'" is currently not implemented.')}let f=999999999,h=-999999999,m=e.subPaths.map(E=>{const _=E.getPoints();let p=-999999999,L=999999999,b=-999999999,M=999999999;for(let z=0;z<_.length;z++){const N=_[z];N.y>p&&(p=N.y),N.y<L&&(L=N.y),N.x>b&&(b=N.x),N.x<M&&(M=N.x)}return h<=b&&(h=b+1),f>=M&&(f=M-1),{curves:E.curves,points:_,isCW:Gi.isClockWise(_),identifier:-1,boundingBox:new m_(new Ae(M,L),new Ae(b,p))}});m=m.filter(E=>E.points.length>1);for(let E=0;E<m.length;E++)m[E].identifier=E;const x=m.map(E=>u(E,m,f,h,e.userData?e.userData.style.fillRule:void 0)),y=[];return m.forEach(E=>{if(!x[E.identifier].isHole){const p=new Fs;p.curves=E.curves,x.filter(b=>b.isHole&&b.for===E.identifier).forEach(b=>{const M=m[b.identifier],z=new $r;z.curves=M.curves,p.holes.push(z)}),y.push(p)}}),y}static getStrokeStyle(e,t,i,r,s){return e=e!==void 0?e:1,t=t!==void 0?t:"#000",i=i!==void 0?i:"miter",r=r!==void 0?r:"butt",s=s!==void 0?s:4,{strokeColor:t,strokeWidth:e,strokeLineJoin:i,strokeLineCap:r,strokeMiterLimit:s}}static pointsToStroke(e,t,i,r){const s=[],o=[],a=[];if(ru.pointsToStrokeWithBuffers(e,t,i,r,s,o,a)===0)return null;const c=new Nn;return c.setAttribute("position",new qt(s,3)),c.setAttribute("normal",new qt(o,3)),c.setAttribute("uv",new qt(a,2)),c}static pointsToStrokeWithBuffers(e,t,i,r,s,o,a,c){const u=new Ae,f=new Ae,h=new Ae,m=new Ae,x=new Ae,y=new Ae,E=new Ae,_=new Ae,p=new Ae,L=new Ae,b=new Ae,M=new Ae,z=new Ae,N=new Ae,V=new Ae,j=new Ae,D=new Ae;i=i!==void 0?i:12,r=r!==void 0?r:.001,c=c!==void 0?c:0,e=B(e);const C=e.length;if(C<2)return 0;const q=e[0].equals(e[C-1]);let ee,fe=e[0],pe;const de=t.strokeWidth/2,he=1/(C-1);let ae=0,Y,Se,Ee,Ue,we=!1,Ce=0,ne=c*3,$=c*2;P(e[0],e[1],u).multiplyScalar(de),_.copy(e[0]).sub(u),p.copy(e[0]).add(u),L.copy(_),b.copy(p);for(let I=1;I<C;I++){ee=e[I],I===C-1?q?pe=e[1]:pe=void 0:pe=e[I+1];const v=u;if(P(fe,ee,v),h.copy(v).multiplyScalar(de),M.copy(ee).sub(h),z.copy(ee).add(h),Y=ae+he,Se=!1,pe!==void 0){P(ee,pe,f),h.copy(f).multiplyScalar(de),N.copy(ee).sub(h),V.copy(ee).add(h),Ee=!0,h.subVectors(pe,fe),v.dot(h)<0&&(Ee=!1),I===1&&(we=Ee),h.subVectors(pe,ee),h.normalize();const k=Math.abs(v.dot(h));if(k>Number.EPSILON){const W=de/k;h.multiplyScalar(-W),m.subVectors(ee,fe),x.copy(m).setLength(W).add(h),j.copy(x).negate();const O=x.length(),A=m.length();m.divideScalar(A),y.subVectors(pe,ee);const Q=y.length();switch(y.divideScalar(Q),m.dot(j)<A&&y.dot(j)<Q&&(Se=!0),D.copy(x).add(ee),j.add(ee),Ue=!1,Se?Ee?(V.copy(j),z.copy(j)):(N.copy(j),M.copy(j)):ve(),t.strokeLineJoin){case"bevel":re(Ee,Se,Y);break;case"round":be(Ee,Se),Ee?se(ee,M,N,Y,0):se(ee,V,z,Y,1);break;case"miter":case"miter-clip":default:const Z=de*t.strokeMiterLimit/O;if(Z<1)if(t.strokeLineJoin!=="miter-clip"){re(Ee,Se,Y);break}else be(Ee,Se),Ee?(y.subVectors(D,M).multiplyScalar(Z).add(M),E.subVectors(D,N).multiplyScalar(Z).add(N),w(M,Y,0),w(y,Y,0),w(ee,Y,.5),w(ee,Y,.5),w(y,Y,0),w(E,Y,0),w(ee,Y,.5),w(E,Y,0),w(N,Y,0)):(y.subVectors(D,z).multiplyScalar(Z).add(z),E.subVectors(D,V).multiplyScalar(Z).add(V),w(z,Y,1),w(y,Y,1),w(ee,Y,.5),w(ee,Y,.5),w(y,Y,1),w(E,Y,1),w(ee,Y,.5),w(E,Y,1),w(V,Y,1));else Se?(Ee?(w(p,ae,1),w(_,ae,0),w(D,Y,0),w(p,ae,1),w(D,Y,0),w(j,Y,1)):(w(p,ae,1),w(_,ae,0),w(D,Y,1),w(_,ae,0),w(j,Y,0),w(D,Y,1)),Ee?N.copy(D):V.copy(D)):Ee?(w(M,Y,0),w(D,Y,0),w(ee,Y,.5),w(ee,Y,.5),w(D,Y,0),w(N,Y,0)):(w(z,Y,1),w(D,Y,1),w(ee,Y,.5),w(ee,Y,.5),w(D,Y,1),w(V,Y,1)),Ue=!0;break}}else ve()}else ve();!q&&I===C-1&&F(e[0],L,b,Ee,!0,ae),ae=Y,fe=ee,_.copy(N),p.copy(V)}if(!q)F(ee,M,z,Ee,!1,Y);else if(Se&&s){let I=D,v=j;we!==Ee&&(I=j,v=D),Ee?(Ue||we)&&(v.toArray(s,0),v.toArray(s,9),Ue&&I.toArray(s,3)):(Ue||!we)&&(v.toArray(s,3),v.toArray(s,9),Ue&&I.toArray(s,0))}return Ce;function P(I,v,k){return k.subVectors(v,I),k.set(-k.y,k.x).normalize()}function w(I,v,k){s&&(s[ne]=I.x,s[ne+1]=I.y,s[ne+2]=0,o&&(o[ne]=0,o[ne+1]=0,o[ne+2]=1),ne+=3,a&&(a[$]=v,a[$+1]=k,$+=2)),Ce+=3}function se(I,v,k,W,O){u.copy(v).sub(I).normalize(),f.copy(k).sub(I).normalize();let A=Math.PI;const Q=u.dot(f);Math.abs(Q)<1&&(A=Math.abs(Math.acos(Q))),A/=i,h.copy(v);for(let Z=0,ye=i-1;Z<ye;Z++)m.copy(h).rotateAround(I,A),w(h,W,O),w(m,W,O),w(I,W,.5),h.copy(m);w(m,W,O),w(k,W,O),w(I,W,.5)}function ve(){w(p,ae,1),w(_,ae,0),w(M,Y,0),w(p,ae,1),w(M,Y,0),w(z,Y,1)}function re(I,v,k){v?I?(w(p,ae,1),w(_,ae,0),w(M,Y,0),w(p,ae,1),w(M,Y,0),w(j,Y,1),w(M,k,0),w(N,k,0),w(j,k,.5)):(w(p,ae,1),w(_,ae,0),w(z,Y,1),w(_,ae,0),w(j,Y,0),w(z,Y,1),w(z,k,1),w(j,k,0),w(V,k,1)):I?(w(M,k,0),w(N,k,0),w(ee,k,.5)):(w(z,k,1),w(V,k,0),w(ee,k,.5))}function be(I,v){v&&(I?(w(p,ae,1),w(_,ae,0),w(M,Y,0),w(p,ae,1),w(M,Y,0),w(j,Y,1),w(M,ae,0),w(ee,Y,.5),w(j,Y,1),w(ee,Y,.5),w(N,ae,0),w(j,Y,1)):(w(p,ae,1),w(_,ae,0),w(z,Y,1),w(_,ae,0),w(j,Y,0),w(z,Y,1),w(z,ae,1),w(j,Y,0),w(ee,Y,.5),w(ee,Y,.5),w(j,Y,0),w(V,ae,1)))}function F(I,v,k,W,O,A){switch(t.strokeLineCap){case"round":O?se(I,k,v,A,.5):se(I,v,k,A,.5);break;case"square":if(O)u.subVectors(v,I),f.set(u.y,-u.x),h.addVectors(u,f).add(I),m.subVectors(f,u).add(I),W?(h.toArray(s,3),m.toArray(s,0),m.toArray(s,9)):(h.toArray(s,3),a[7]===1?m.toArray(s,9):h.toArray(s,9),m.toArray(s,0));else{u.subVectors(k,I),f.set(u.y,-u.x),h.addVectors(u,f).add(I),m.subVectors(f,u).add(I);const Q=s.length;W?(h.toArray(s,Q-3),m.toArray(s,Q-6),m.toArray(s,Q-12)):(m.toArray(s,Q-6),h.toArray(s,Q-3),m.toArray(s,Q-12))}break}}function B(I){let v=!1;for(let W=1,O=I.length-1;W<O;W++)if(I[W].distanceTo(I[W+1])<r){v=!0;break}if(!v)return I;const k=[];k.push(I[0]);for(let W=1,O=I.length-1;W<O;W++)I[W].distanceTo(I[W+1])>=r&&k.push(I[W]);return k.push(I[I.length-1]),k}}}const oM={class:"game-container"},aM={class:"panel-header"},lM={class:"control-group"},cM={class:"model-selector"},uM=["onClick"],fM={class:"control-group"},hM={class:"control-group"},dM={class:"status-text"},pM={key:0},mM={class:"score-display"},ch=.5,uh=.15,xM=.3,gM=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <path d="M50 85 C 40 95 20 95 10 75 C 0 55 10 35 30 35 C 40 35 50 45 50 45 C 50 45 60 35 70 35 C 90 35 100 55 90 75 C 80 95 60 95 50 85 Z" fill="red"/>
  <path d="M50 45 Q 55 25 65 15 L 50 20 Z" fill="green"/>
</svg>`,_M=`
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <circle cx="50" cy="50" r="45" fill="#00ff88"/>
  <circle cx="35" cy="40" r="10" fill="black"/>
  <circle cx="65" cy="40" r="10" fill="black"/>
</svg>`,vM=Hh({__name:"SnakeGame",setup(n){const e=Di(null),t=Di(null),i=Di(!1),r=Di(!1),s=Di(!1),o=Di(0),a=Di("#00ff88"),c=Di("cube"),u=[{label:"Cube",value:"cube"},{label:"Sphere",value:"sphere"},{label:"Tetra",value:"tetra"}];let f,h,m,x;const y=[];let E=uh;const _=new ie(0,0,0);let p;const L={x:15,y:10};let b,M,z;const N=(we,Ce=.015)=>{const P=new ru().parse(we).paths,w=[];P.forEach(re=>{const be=re.toShapes(!0);w.push(...be)});const se=new Qc(w,{depth:10,bevelEnabled:!0,bevelThickness:2,bevelSize:2,bevelSegments:3});se.computeBoundingBox();const ve=new ie;return se.boundingBox&&(se.boundingBox.getCenter(ve),se.translate(-ve.x,-ve.y,-ve.z)),se.scale(Ce,-Ce,Ce),se},V=()=>{i.value=!i.value},j=()=>{document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()},D=we=>{c.value=we,pe()},C=()=>{const we=new xt(a.value);y.forEach(Ce=>{Ce.material.color.set(we),Ce.material.emissive.set(we)})},q=()=>{if(!e.value)return;f=new vg,h=new Tn(75,window.innerWidth/window.innerHeight,.1,1e3),h.position.z=20,m=new nM({antialias:!0,alpha:!0}),m.setSize(window.innerWidth,window.innerHeight),m.setPixelRatio(window.devicePixelRatio),m.setClearColor(0,0),e.value.appendChild(m.domElement);const we=new d_(16777215,.5);f.add(we);const Ce=new f_(16777215,1);Ce.position.set(10,10,10),f.add(Ce),M=N(gM,.015),z=N(_M,.015),fe(new ie(0,0,0));for(let ne=0;ne<5;ne++)de();he(),window.addEventListener("resize",Y)},ee=()=>{switch(c.value){case"sphere":return new tu(.4,16,16);case"tetra":return new nu(.5);case"cube":default:return new as(.6,.6,.6)}},fe=we=>{let Ce,ne;y.length===0?(Ce=z?z.clone():ee(),ne=new Uo({color:a.value,emissive:a.value,emissiveIntensity:.5,roughness:.4,metalness:.6})):(Ce=ee(),ne=new Uo({color:a.value,emissive:a.value,emissiveIntensity:.3,roughness:.4,metalness:.6}));const $=new ni(Ce,ne);$.position.copy(we),y.length===0&&($.rotation.x=Math.PI),f.add($),y.push($)},pe=()=>{const we=y.map(Ce=>Ce.position.clone());y.forEach(Ce=>f.remove(Ce)),y.length=0,we.forEach(Ce=>fe(Ce))},de=()=>{const we=y[y.length-1];we&&fe(we.position.clone())},he=()=>{p&&f.remove(p);let we,Ce;M?(we=M.clone(),Ce=new Uo({color:16711680,emissive:11141120,emissiveIntensity:.5,roughness:.2,metalness:.3})):(we=new eu(.5),Ce=new Uo({color:16711765,emissive:16711765,emissiveIntensity:.8})),p=new ni(we,Ce),ae(),f.add(p)},ae=()=>{p.position.set((Math.random()-.5)*L.x*2,(Math.random()-.5)*L.y*2,0)},Y=()=>{!h||!m||(h.aspect=window.innerWidth/window.innerHeight,h.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight))},Se=async()=>{if(t.value){b=new rM.Hands({locateFile:we=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${we}`}),b.setOptions({maxNumHands:1,modelComplexity:1,minDetectionConfidence:.5,minTrackingConfidence:.5}),b.onResults(Ee);try{const we=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:{ideal:640},height:{ideal:480}}});t.value.srcObject=we,await t.value.play();const Ce=async()=>{t.value&&!t.value.paused&&!t.value.ended&&await b.send({image:t.value}),requestAnimationFrame(Ce)};Ce()}catch(we){console.error("Error accessing camera:",we),alert("无法访问摄像头，请检查权限或设备支持情况。")}}},Ee=we=>{if(we.multiHandLandmarks&&we.multiHandLandmarks.length>0){r.value=!0;const Ce=we.multiHandLandmarks[0],ne=(1-Ce[8].x)*2-1,$=(1-Ce[8].y)*2-1;_.x=ne*15,_.y=$*10;const P=Ce[4],w=Ce[8];Math.sqrt(Math.pow(P.x-w.x,2)+Math.pow(P.y-w.y,2))<.05?(s.value=!0,E=xM):(s.value=!1,E=uh)}else r.value=!1},Ue=()=>{x=requestAnimationFrame(Ue);const we=y[0];if(we){const Ce=new ie().subVectors(_,we.position);Ce.length()>E&&Ce.normalize().multiplyScalar(E),we.position.add(Ce),we.lookAt(_)}for(let Ce=y.length-1;Ce>0;Ce--){const ne=y[Ce],$=y[Ce-1];if(ne&&$){const P=ne.position.distanceTo($.position);if(P>ch){const w=new ie().subVectors($.position,ne.position).normalize(),se=P-ch;ne.position.add(w.multiplyScalar(se)),ne.lookAt($.position)}}}we&&p&&(Math.sqrt(Math.pow(we.position.x-p.position.x,2)+Math.pow(we.position.y-p.position.y,2))<1.5&&(o.value+=10,de(),ae()),p.rotation.z+=.02),m.render(f,h)};return Xh(()=>{q(),Se(),Ue()}),qh(()=>{cancelAnimationFrame(x),window.removeEventListener("resize",Y),t.value&&t.value.srcObject&&t.value.srcObject.getTracks().forEach(ne=>ne.stop()),m.dispose()}),(we,Ce)=>(Is(),Da("div",oM,[zt("div",{ref_key:"canvasContainer",ref:e,class:"canvas-container"},null,512),zt("video",{ref_key:"inputVideo",ref:t,class:"input-video",playsinline:""},null,512),zt("div",{class:Wr(["ui-panel",{hidden:i.value}])},[zt("div",aM,[Ce[1]||(Ce[1]=zt("h2",null,"3D Snake Control",-1)),zt("button",{onClick:V,class:"toggle-btn"},zr(i.value?"Show":"Hide"),1)]),zt("div",lM,[Ce[2]||(Ce[2]=zt("label",null,"Snake Model",-1)),zt("div",cM,[(Is(),Da(jn,null,B0(u,ne=>zt("button",{key:ne.value,class:Wr({active:c.value===ne.value}),onClick:$=>D(ne.value)},zr(ne.label),11,uM)),64))])]),zt("div",fM,[Ce[3]||(Ce[3]=zt("label",null,"Snake Color",-1)),M0(zt("input",{type:"color","onUpdate:modelValue":Ce[0]||(Ce[0]=ne=>a.value=ne),onInput:C},null,544),[[Zm,a.value]])]),zt("div",hM,[Ce[4]||(Ce[4]=zt("label",null,"Status",-1)),zt("div",dM,[zt("span",{class:Wr({active:r.value})},zr(r.value?"Hand Detected":"No Hand"),3),r.value?(Is(),Da("span",pM," | "+zr(s.value?"Speed Boost!":"Normal Speed"),1)):vm("",!0)])]),zt("div",{class:"control-group"},[zt("button",{onClick:j,class:"fullscreen-btn"}," Toggle Fullscreen ")])],2),zt("div",mM," Score: "+zr(o.value),1)]))}}),yM=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},SM=yM(vM,[["__scopeId","data-v-39a46576"]]),bM=Hh({__name:"App",setup(n){return(e,t)=>(Is(),hd(SM))}});tx(bM).mount("#app");
